// === FoxyVocab Script ===
console.log('[FoxyVocab] script.js: loading started');

// === STATE ===
var STORAGE_KEY = 'foxyVocabProgress';
var userProgress = createEmptyProgressState();
var currentCourse = null;
var currentSet = null;
var currentCardIndex = 0;
var learnStep = 1;
var learnMistakes = 0;
var learnIndex = 0;
var isAnimating = false;
var pendingConfirmAction = null;
var isWordListSetMode = false;

// Match state
var matchWords = [];
var matchCards = [];
var matchBoardSlots = [];
var matchSelected = null;
var matchWrong = 0;
var matchTimerInterval = null;
var matchStartTime = 0;
var matchConfig = { count: 6, refill: false };
var matchRemainingWords = [];
var matchSessionWords = [];
var matchPenaltySeconds = 0;
var matchWrongWordMap = {};
var matchIsRefilling = false;
var matchRefillTimeouts = [];
var cefrRank = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6, 'Uncategorized': 7 };

// Test state
var testQuestions = [];
var testIndex = 0;
var testScore = 0;
var testConfig = {};
var testAnswers = [];
var currentTestSession = null;
var testAdvanceTimer = null;
var testTimerInterval = null;
var testStartTime = 0;
var testElapsedSeconds = 0;
var testWrittenState = null;

function createWordProgressState() {
    return { isFavorite: false, learned: false, quizCorrectCount: 0, isKnown: false, masteryScore: 0 };
}

function createEmptyProgressState() {
    return { words: {}, sets: {}, learningBook: { mistakeWords: {} }, settings: { speechMuted: false } };
}

function normalizeProgressState(rawState) {
    if (!rawState || typeof rawState !== 'object' || Array.isArray(rawState)) {
        return createEmptyProgressState();
    }
    if (rawState.words || rawState.sets || rawState.learningBook) {
        var normalizedWords = {};
        Object.keys(rawState.words || {}).forEach(function(wordId) {
            normalizedWords[wordId] = normalizeWordProgress(rawState.words[wordId]);
        });
        return {
            words: normalizedWords,
            sets: rawState.sets || {},
            learningBook: {
                mistakeWords: rawState.learningBook && rawState.learningBook.mistakeWords ? rawState.learningBook.mistakeWords : {}
            },
            settings: {
                speechMuted: !!(rawState.settings && rawState.settings.speechMuted)
            }
        };
    }
    var migratedWords = {};
    Object.keys(rawState).forEach(function(wordId) {
        migratedWords[wordId] = normalizeWordProgress(rawState[wordId]);
    });
    return { words: migratedWords, sets: {}, learningBook: { mistakeWords: {} }, settings: { speechMuted: false } };
}

function normalizeWordProgress(progress) {
    var base = createWordProgressState();
    var merged = Object.assign(base, progress || {});
    if (typeof merged.masteryScore !== 'number') {
        if (typeof merged.consecutiveCorrect === 'number') merged.masteryScore = merged.consecutiveCorrect >= 2 ? 8 : 0;
        else merged.masteryScore = merged.isKnown ? 8 : 0;
    }
    if (merged.masteryScore < 0) merged.masteryScore = 0;
    merged.isKnown = merged.masteryScore > 7;
    delete merged.consecutiveCorrect;
    return merged;
}

function saveAppState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress)); } catch(e) { console.warn('[FoxyVocab] localStorage write failed:', e); }
}

// === HELPERS ===
(function detectLowPerformance() {
    try {
        var isLowPerf = false;
        var ua = navigator.userAgent;
        var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        if (isIOS) {
            var match = ua.match(/OS (\d+)_/);
            if (match && parseInt(match[1], 10) <= 15) isLowPerf = true;
        }
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
            isLowPerf = true;
        }
        if (isLowPerf) {
            console.log('[FoxyVocab] Low performance device detected. Optimizing graphics.');
            document.documentElement.classList.add('low-performance');
        }
    } catch(e) {}
})();

function getWordData(wordId) {
    var staticData = dictionary[wordId];
    if (!staticData) return { word: wordId };
    var progress = userProgress.words[wordId] || createWordProgressState();
    return Object.assign({ word: wordId }, staticData, progress);
}

function getMeaningText(wordData) {
    if (!wordData) return '';
    return wordData.vietnamese || wordData.definition || '';
}

function getMeaningWithPosText(wordData) {
    var meaning = getMeaningText(wordData);
    var pos = wordData && wordData.pos ? ' (' + wordData.pos + ')' : '';
    return meaning + pos;
}

function saveProgress(wordId, updates) {
    if (!userProgress.words[wordId]) userProgress.words[wordId] = createWordProgressState();
    Object.assign(userProgress.words[wordId], updates);
    userProgress.words[wordId] = normalizeWordProgress(userProgress.words[wordId]);
    saveAppState();
}

function getCurrentWordPool() {
    return currentSet ? currentSet.words.slice() : [];
}

function getCurrentWordSourceTitle() {
    if (!currentSet) return '';
    if (currentSet.isLearningBook) return 'LEARNING BOOK';
    return currentCourse ? currentCourse.title.toUpperCase() : currentSet.title.toUpperCase();
}

function applyWordScoreDelta(wordId, delta, options) {
    options = options || {};
    var wData = getWordData(wordId);
    var nextScore = wData.masteryScore + delta;
    if (nextScore < 0) nextScore = 0;
    saveProgress(wordId, { masteryScore: nextScore });
    if (nextScore > 7) {
        removeLearningBookMistake(wordId);
    } else if (options.addMistake) {
        addLearningBookMistake(wordId);
    }
}

function getTestScoreDelta(answer) {
    if (!answer.correct) return -4;
    if (answer.type === 'tf') return 1;
    if (answer.type === 'mc') return 2;
    if (answer.type === 'fillin') return 3;
    if (answer.type === 'written') return 4;
    return 0;
}

function buildWordSource(wordIds, title, opts) {
    var source = {
        id: (opts && opts.id) || title.toLowerCase().replace(/\s+/g, '-'),
        title: title,
        words: wordIds.slice(),
        parentView: opts && opts.parentView ? opts.parentView : setView,
        parentTitle: opts && opts.parentTitle ? opts.parentTitle : 'SETS',
        isLearningBook: !!(opts && opts.isLearningBook)
    };
    source.sortedWords = source.words.slice().sort(function(a, b) {
        var ca = (dictionary[a] && dictionary[a].cefr) || 'Uncategorized';
        var cb = (dictionary[b] && dictionary[b].cefr) || 'Uncategorized';
        return (cefrRank[ca] || 7) - (cefrRank[cb] || 7);
    });
    source.activeWords = source.sortedWords.filter(function(wordId) { return !getWordData(wordId).isKnown; });
    if (source.activeWords.length === 0) source.activeWords = source.sortedWords.slice();
    return source;
}

function openWordSource(source, targetView) {
    currentSet = source;
    currentCardIndex = 0;
    renderWordListView();
    switchView(targetView || wordListView);
}

function openLearningBookList() {
    var words = getLearningBookWords();
    if (!words.length) {
        window.alert('Learning Book is empty.');
        return;
    }
    openWordSource(buildWordSource(words, 'Learning Book', {
        id: 'learning-book',
        isLearningBook: true,
        parentView: courseView,
        parentTitle: 'COURSES'
    }), wordListView);
}

function getSetProgressKey(courseId, setId) {
    return courseId + '::' + setId;
}

function getSetLearningStatus(courseId, setId) {
    var key = getSetProgressKey(courseId, setId);
    return userProgress.sets[key] || 'not-learned';
}

function saveSetLearningStatus(courseId, setId, status) {
    userProgress.sets[getSetProgressKey(courseId, setId)] = status;
    saveAppState();
}

function getLearningBookWords() {
    var seen = {};
    var words = [];

    coursesData.forEach(function(course) {
        course.sets.forEach(function(set) {
            if (getSetLearningStatus(course.id, set.id) !== 'learning') return;
            set.words.forEach(function(wordId) {
                if (seen[wordId] || getWordData(wordId).isKnown) return;
                seen[wordId] = true;
                words.push(wordId);
            });
        });
    });

    Object.keys(userProgress.learningBook.mistakeWords || {}).forEach(function(wordId) {
        if (seen[wordId] || getWordData(wordId).isKnown) return;
        seen[wordId] = true;
        words.push(wordId);
    });

    return words;
}

function addLearningBookMistake(wordId) {
    userProgress.learningBook.mistakeWords[wordId] = true;
    saveAppState();
}

function removeLearningBookMistake(wordId) {
    if (userProgress.learningBook.mistakeWords[wordId]) {
        delete userProgress.learningBook.mistakeWords[wordId];
        saveAppState();
    }
}

function getWordFirstOrigin(wordId) {
    for (var i = 0; i < coursesData.length; i++) {
        var course = coursesData[i];
        for (var j = 0; j < course.sets.length; j++) {
            var set = course.sets[j];
            if (set.words.indexOf(wordId) !== -1) {
                return course.title + ' - ' + set.title;
            }
        }
    }
    return 'Unknown - Unknown';
}

function removeWordFromLearningBook(wordId) {
    removeLearningBookMistake(wordId);
    syncCurrentLearningBookSource();
    refreshCurrentSetActiveWords();
    if (currentSet && currentSet.isLearningBook && isWordListSetMode) {
        renderWordListView();
    } else {
        renderWordCards();
        updateWLFlashcard();
    }
    updateWordListActionState();
    renderLearningBookPanel();
    playSound('slide');
}

function syncCurrentLearningBookSource() {
    if (!currentSet || !currentSet.isLearningBook) return;
    currentSet.words = getLearningBookWords();
    currentSet.sortedWords = currentSet.words.slice().sort(function(a, b) {
        var ca = (dictionary[a] && dictionary[a].cefr) || 'Uncategorized';
        var cb = (dictionary[b] && dictionary[b].cefr) || 'Uncategorized';
        return (cefrRank[ca] || 7) - (cefrRank[cb] || 7);
    });
    currentSet.activeWords = currentSet.sortedWords.filter(function(wId) { return !getWordData(wId).isKnown; });
    if (currentSet.activeWords.length === 0) currentSet.activeWords = currentSet.sortedWords.slice();
    if (currentCardIndex >= currentSet.activeWords.length) {
        currentCardIndex = currentSet.activeWords.length ? (currentSet.activeWords.length - 1) : 0;
    }
}

function confirmLearningBookKnown(wordId) {
    openConfirmPanel(
        'Mark this Learning Book word as known? It will be removed from your Learning Book.',
        'MARK KNOWN',
        function() { toggleWordKnown(wordId); },
        'CANCEL'
    );
}

function confirmRemoveFromLearningBook(wordId) {
    openConfirmPanel(
        'Remove this word from Learning Book? It will stay in your vocabulary data but leave this review list.',
        'REMOVE',
        function() { removeWordFromLearningBook(wordId); },
        'CANCEL'
    );
}

function refreshCurrentSetActiveWords() {
    if (!currentSet || !currentSet.sortedWords) return;
    currentSet.activeWords = currentSet.sortedWords.filter(function(wId) { return !getWordData(wId).isKnown; });
    if (currentSet.activeWords.length === 0) currentSet.activeWords = currentSet.sortedWords.slice();
    if (currentCardIndex >= currentSet.activeWords.length) currentCardIndex = 0;
}

function renderLearningBookPanel() {
    var words = getLearningBookWords();
    var preview = document.getElementById('learningBookPreview');
    var summary = document.getElementById('learningBookSummary');
    var badge = document.getElementById('learningBookCountBadge');
    var reviewBtn = document.getElementById('learningBookReviewBtn');
    var courseShortcut = document.getElementById('courseReviewShortcutBtn');
    var setShortcut = document.getElementById('setReviewShortcutBtn');
    if (!preview || !summary || !badge || !reviewBtn) return;

    var learningSetCount = Object.keys(userProgress.sets).filter(function(key) { return userProgress.sets[key] === 'learning'; }).length;
    var mistakeCount = Object.keys(userProgress.learningBook.mistakeWords || {}).filter(function(wordId) { return !getWordData(wordId).isKnown; }).length;
    var hasWords = words.length > 0;

    badge.textContent = words.length + ' word' + (words.length === 1 ? '' : 's');
    if (hasWords) {
        summary.textContent = learningSetCount + ' learning set' + (learningSetCount === 1 ? '' : 's') + ' and ' + mistakeCount + ' incorrect word' + (mistakeCount === 1 ? '' : 's') + ' are queued for review.';
        preview.innerHTML = words.slice(0, 12).map(function(wordId) {
            var w = getWordData(wordId);
            return '<span class="learning-book-chip">' + escapeHtml(w.word) + '</span>';
        }).join('');
        if (words.length > 12) preview.innerHTML += '<span class="learning-book-chip muted">+' + (words.length - 12) + ' more</span>';
    } else {
        summary.textContent = 'Mark a set as Learning or miss a test word to build your review queue.';
        preview.innerHTML = '<div class="learning-book-empty">Learning Book is empty.</div>';
    }

    reviewBtn.disabled = !hasWords;
    if (courseShortcut) {
        courseShortcut.disabled = !hasWords;
        courseShortcut.textContent = hasWords ? 'REVIEW LEARNING BOOK (' + words.length + ')' : 'REVIEW LEARNING BOOK';
    }
    if (setShortcut) {
        setShortcut.disabled = !hasWords;
        setShortcut.textContent = hasWords ? 'REVIEW LEARNING BOOK (' + words.length + ')' : 'REVIEW LEARNING BOOK';
    }
}

function recordTestOutcome(answer) {
    applyWordScoreDelta(answer.wordId, getTestScoreDelta(answer), { addMistake: !answer.correct });
    refreshCurrentSetActiveWords();
    renderLearningBookPanel();
}

function returnFromTest() {
    clearTestAdvanceTimer();
    clearTestTimer();
    testWrittenState = null;
    testElapsedSeconds = 0;
    setTestTimerLabel(0);
    if (currentTestSession && currentTestSession.returnView === wordListView && currentSet) {
        refreshCurrentSetActiveWords();
        renderWordListView();
    }
    if (currentTestSession && currentTestSession.returnView === setView && currentCourse) {
        renderSets();
    }
    if (currentTestSession && currentTestSession.returnView === courseView) {
        renderCourses();
    }
    if (currentTestSession && currentTestSession.returnView) {
        switchView(currentTestSession.returnView);
        return;
    }
    switchView(wordListView);
}

function returnFromWordList() {
    if (currentSet && currentSet.parentView) {
        switchView(currentSet.parentView);
        return;
    }
    switchView(setView);
}

function isSpeechMuted() {
    return !!(userProgress.settings && userProgress.settings.speechMuted);
}

function updateSpeechMuteButtons() {
    var btn = document.getElementById('settingsMuteBtn');
    var label = document.getElementById('speechMuteLabel');
    var muted = isSpeechMuted();
    if (btn) {
        btn.textContent = muted ? '🔇' : '🔊';
        btn.classList.toggle('active', muted);
        btn.setAttribute('aria-pressed', muted ? 'true' : 'false');
        btn.setAttribute('title', muted ? 'Unmute speech' : 'Mute speech');
        btn.setAttribute('aria-label', muted ? 'Unmute speech' : 'Mute speech');
    }
    if (label) label.textContent = muted ? 'Muted' : 'On';
}

function updateFullscreenButton() {
    var btn = document.getElementById('settingsFullscreenBtn');
    var label = document.getElementById('fullscreenLabel');
    var isFullscreen = !!document.fullscreenElement;
    if (btn) {
        btn.classList.toggle('active', isFullscreen);
        btn.setAttribute('aria-pressed', isFullscreen ? 'true' : 'false');
        btn.setAttribute('title', isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen');
        btn.setAttribute('aria-label', isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen');
    }
    if (label) label.textContent = isFullscreen ? 'On' : 'Off';
}

function toggleSpeechMute() {
    if (!userProgress.settings) userProgress.settings = { speechMuted: false };
    userProgress.settings.speechMuted = !userProgress.settings.speechMuted;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    saveAppState();
    updateSpeechMuteButtons();
    playSound('flip');
}

function speak(text, rate) {
    if (isSpeechMuted()) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        window.speechSynthesis.speak(utterance);
    }
}

function renderLearnActionTray(config) {
    var tray = document.getElementById('learnActionTray');
    if (!tray) return;
    config = config || {};
    var secondaryHtml = config.secondaryLabel ? (
        '<button class="underline-btn bg-transparent font-bold pb-2" onclick="' + config.secondaryAction + '" style="text-shadow: 0 1px 3px rgba(0,0,0,0.8);">' + config.secondaryLabel + '</button>'
    ) : '';
    tray.innerHTML = '<div class="learn-action-inner">' +
        '<button class="nav-btn learn-primary-btn" onclick="' + (config.primaryAction || '') + '">' + (config.primaryLabel || 'CONTINUE') + '</button>' +
        secondaryHtml +
    '</div>';
    updateSpeechMuteButtons();
}

function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
}

function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function escapeJsString(str) {
    return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function formatElapsedSeconds(seconds) {
    return (Math.round(seconds * 10) / 10).toFixed(1) + ' seconds';
}

function shouldAutoLearnCurrentSet(totalCount, correctCount) {
    if (!currentCourse || !currentSet || currentSet.isLearningBook) return false;
    if (!totalCount || correctCount !== totalCount) return false;
    return totalCount === currentSet.words.length;
}

function markCurrentSetLearned() {
    if (!currentCourse || !currentSet || currentSet.isLearningBook) return;
    saveSetLearningStatus(currentCourse.id, currentSet.id, 'learned');
    renderSets();
    renderCourses();
}

function getResultSoundType(pct) {
    if (pct === 100) return 'result-perfect';
    if (pct >= 50) return 'result-good';
    return 'result-poor';
}

function setTestTimerLabel(seconds) {
    var timerEl = document.getElementById('testTimer');
    if (timerEl) timerEl.textContent = formatElapsedSeconds(seconds);
}

function clearTestTimer() {
    if (testTimerInterval) {
        clearInterval(testTimerInterval);
        testTimerInterval = null;
    }
}

function startTestTimer() {
    clearTestTimer();
    testStartTime = Date.now();
    testElapsedSeconds = 0;
    setTestTimerLabel(0);
    testTimerInterval = setInterval(function() {
        testElapsedSeconds = (Date.now() - testStartTime) / 1000;
        setTestTimerLabel(testElapsedSeconds);
    }, 100);
}

function stopTestTimer() {
    if (testStartTime) {
        testElapsedSeconds = (Date.now() - testStartTime) / 1000;
    }
    clearTestTimer();
    setTestTimerLabel(testElapsedSeconds);
}

function isWrittenEditableChar(ch) {
    return /^[A-Za-z]$/.test(ch);
}

function getWrittenEditableIndices(answer) {
    var indices = [];
    for (var i = 0; i < answer.length; i++) {
        if (isWrittenEditableChar(answer.charAt(i))) indices.push(i);
    }
    return indices;
}

function getWrittenHintCount(editableCount) {
    if (editableCount <= 2) return 0;
    if (editableCount <= 4) return 1;
    if (editableCount <= 6) return 2;
    return Math.min(3, Math.max(2, editableCount - 2)) === 2 ? 2 : (Math.random() > 0.5 ? 3 : 2);
}

function createWrittenPromptState(answer) {
    var editableIndices = getWrittenEditableIndices(answer);
    var shuffledEditable = shuffle(editableIndices);
    var hintCount = Math.min(getWrittenHintCount(editableIndices.length), editableIndices.length ? editableIndices.length - 1 : 0);
    var hintMap = {};
    var typedMap = {};
    shuffledEditable.slice(0, Math.max(0, hintCount)).forEach(function(idx) {
        hintMap[idx] = answer.charAt(idx).toLowerCase();
    });
    return {
        answer: answer,
        hintMap: hintMap,
        typedMap: typedMap,
        editableIndices: editableIndices,
        cursorIndex: editableIndices.length ? editableIndices[0] : -1,
        showSolution: false,
        solvedCorrectly: false
    };
}

function getNextWrittenEditablePosition(state, fromIndex) {
    var editableIndices = state.editableIndices;
    if (!editableIndices.length) return -1;
    var startOffset = editableIndices.indexOf(fromIndex);
    if (startOffset < 0) startOffset = 0;
    startOffset = (startOffset + 1) % editableIndices.length;
    for (var i = 0; i < editableIndices.length; i++) {
        var idx = editableIndices[(i + startOffset) % editableIndices.length];
        if (!state.typedMap[idx]) return idx;
    }
    return -1;
}

function getWrittenCursorPosition(state) {
    if (typeof state.cursorIndex === 'number' && state.editableIndices.indexOf(state.cursorIndex) !== -1) {
        return state.cursorIndex;
    }
    return state.editableIndices.length ? state.editableIndices[0] : -1;
}

function getWrittenNextEmptyPosition(state) {
    for (var i = 0; i < state.editableIndices.length; i++) {
        var idx = state.editableIndices[i];
        if (!state.typedMap[idx]) return idx;
    }
    return -1;
}

function isWrittenComplete(state) {
    return getWrittenNextEmptyPosition(state) === -1;
}

function buildWrittenUserAnswer(state) {
    var out = '';
    for (var i = 0; i < state.answer.length; i++) {
        var rawChar = state.answer.charAt(i);
        if (!isWrittenEditableChar(rawChar)) {
            out += rawChar;
        } else if (state.typedMap[i]) {
            out += state.typedMap[i];
        }
    }
    return out;
}

function renderWrittenAnswerBoxes(state) {
    var currentPos = getWrittenCursorPosition(state);
    var boxesHtml = '';
    for (var i = 0; i < state.answer.length; i++) {
        var answerChar = state.answer.charAt(i);
        var classes = ['test-written-box'];
        var displayChar = '';
        if (!isWrittenEditableChar(answerChar)) {
            classes.push('is-separator');
            displayChar = escapeHtml(answerChar);
        } else if (state.showSolution) {
            displayChar = escapeHtml(answerChar.toUpperCase());
            classes.push('is-filled');
        } else if (state.typedMap[i]) {
            classes.push('is-filled');
            displayChar = escapeHtml(state.typedMap[i].toUpperCase());
        } else if (state.hintMap[i]) {
            classes.push('is-hint');
            displayChar = escapeHtml(answerChar.toUpperCase());
        } else if (i === currentPos) {
            classes.push('is-active');
        }
        boxesHtml += '<button type="button" class="' + classes.join(' ') + '" data-letter-index="' + i + '" aria-label="Letter ' + (i + 1) + '">' + displayChar + '</button>';
    }
    return boxesHtml;
}

function focusWrittenInput() {
    var hiddenInput = document.getElementById('testWrittenInputHidden');
    if (hiddenInput && !hiddenInput.disabled) hiddenInput.focus();
}

function renderWrittenPromptUI() {
    if (!testWrittenState) return;
    var boxWrap = document.getElementById('testWrittenBoxes');
    var submitBtn = document.getElementById('testWrittenSubmitBtn');
    if (!boxWrap) return;
    boxWrap.className = 'test-written-boxes' +
        (testWrittenState.showSolution ? (testWrittenState.solvedCorrectly ? ' is-correct' : ' is-wrong') : '');
    boxWrap.innerHTML = renderWrittenAnswerBoxes(testWrittenState);
    if (submitBtn) {
        submitBtn.style.display = testWrittenState.showSolution ? 'none' : '';
        submitBtn.disabled = !isWrittenComplete(testWrittenState);
        submitBtn.textContent = 'Submit';
    }
}

function attachWrittenPromptHandlers() {
    var hiddenInput = document.getElementById('testWrittenInputHidden');
    var boxWrap = document.getElementById('testWrittenBoxes');
    var keyboard = document.querySelector('#testContentArea .visual-keyboard');
    if (!hiddenInput || !boxWrap || !testWrittenState) return;
    hiddenInput.addEventListener('input', function() {
        if (!testWrittenState || testWrittenState.showSolution) {
            this.value = '';
            return;
        }
        var value = this.value;
        var ch = value.slice(-1).toLowerCase();
        if (isWrittenEditableChar(ch)) {
            var nextPos = getWrittenCursorPosition(testWrittenState);
            if (nextPos !== -1) {
                testWrittenState.typedMap[nextPos] = ch;
                testWrittenState.cursorIndex = getNextWrittenEditablePosition(testWrittenState, nextPos);
                if (testWrittenState.cursorIndex === -1) testWrittenState.cursorIndex = nextPos;
                renderWrittenPromptUI();
            }
        }
        this.value = '';
    });
    hiddenInput.addEventListener('keydown', function(e) {
        if (!testWrittenState || testWrittenState.showSolution) return;
        if (e.key === 'Backspace') {
            e.preventDefault();
            for (var i = testWrittenState.editableIndices.length - 1; i >= 0; i--) {
                var idx = testWrittenState.editableIndices[i];
                if (testWrittenState.typedMap[idx]) {
                    delete testWrittenState.typedMap[idx];
                    testWrittenState.cursorIndex = idx;
                    renderWrittenPromptUI();
                    break;
                }
            }
        }
    });
    hiddenInput.addEventListener('paste', function(e) { e.preventDefault(); });
    boxWrap.addEventListener('click', function(e) {
        if (!testWrittenState || testWrittenState.showSolution) return;
        var box = e.target.closest('[data-letter-index]');
        if (box) {
            var letterIndex = parseInt(box.getAttribute('data-letter-index'), 10);
            if (testWrittenState.editableIndices.indexOf(letterIndex) !== -1) testWrittenState.cursorIndex = letterIndex;
        }
        renderWrittenPromptUI();
        focusWrittenInput();
    });
    if (keyboard) {
        keyboard.addEventListener('click', function(e) {
            if (!testWrittenState || testWrittenState.showSolution) return;
            var key = e.target.closest('[data-key]');
            if (!key) return;
            var value = key.getAttribute('data-key');
            if (value === 'backspace') {
                var backspaceEvent = new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true });
                hiddenInput.dispatchEvent(backspaceEvent);
                focusWrittenInput();
                return;
            }
            hiddenInput.value = value;
            var inputEvent = new Event('input', { bubbles: true });
            hiddenInput.dispatchEvent(inputEvent);
            focusWrittenInput();
        });
    }
    setTimeout(focusWrittenInput, 0);
}

function animateResultRing(circleId, percentId, pct) {
    var circle = document.getElementById(circleId);
    var percentEl = document.getElementById(percentId);
    if (!circle || !percentEl) return;
    var radius = parseFloat(circle.getAttribute('r')) || 68;
    var circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;
    percentEl.textContent = '0%';
    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
            circle.style.strokeDashoffset = circumference - (pct / 100) * circumference;
        });
    });
    var current = 0;
    var step = Math.max(1, Math.ceil(pct / 30));
    var interval = setInterval(function() {
        current = Math.min(current + step, pct);
        percentEl.textContent = current + '%';
        if (current >= pct) clearInterval(interval);
    }, 22);
}

function renderResultWordRows(items) {
    return items.map(function(item) {
        return '<div class="result-word-item">' +
            '<span class="result-word-icon ' + (item.correct ? 'is-correct' : 'is-wrong') + '">' + (item.correct ? '✓' : '✕') + '</span>' +
            '<div class="result-word-copy">' +
                '<div class="result-word-term">' + escapeHtml(item.word) + '</div>' +
                '<div class="result-word-meaning">' + escapeHtml(item.meaning || '') + '</div>' +
            '</div>' +
        '</div>';
    }).join('');
}

// === AUDIO ===
var AudioCtxClass = window.AudioContext || window.webkitAudioContext;
var audioCtx;
function initAudioContext() { if (!audioCtx && AudioCtxClass) audioCtx = new AudioCtxClass(); }

function playSound(type) {
    try {
        initAudioContext();
        if (!audioCtx) return;
        var osc = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        var now = audioCtx.currentTime;
        if (type === 'flip') {
            osc.type = 'triangle'; osc.frequency.setValueAtTime(600, now); osc.frequency.exponentialRampToValueAtTime(200, now + 0.1);
            gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc.start(now); osc.stop(now + 0.1);
        } else if (type === 'slide') {
            osc.type = 'sine'; osc.frequency.setValueAtTime(400, now); osc.frequency.exponentialRampToValueAtTime(600, now + 0.05);
            gainNode.gain.setValueAtTime(0.05, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.start(now); osc.stop(now + 0.08);
        } else if (type === 'correct') {
            osc.type = 'sine'; osc.frequency.setValueAtTime(523.25, now); osc.frequency.setValueAtTime(659.25, now + 0.1);
            gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            osc.start(now); osc.stop(now + 0.2);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, now); osc.frequency.linearRampToValueAtTime(100, now + 0.2);
            gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            osc.start(now); osc.stop(now + 0.2);
        } else if (type === 'win') {
            osc.type = 'sine'; var notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach(function(freq, i) { osc.frequency.setValueAtTime(freq, now + (i*0.1)); });
            gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
            osc.start(now); osc.stop(now + 0.5);
        } else if (type === 'intro') {
            osc.type = 'sine'; var notes2 = [261.63, 329.63, 392.00];
            notes2.forEach(function(freq, i) { osc.frequency.setValueAtTime(freq, now + (i*0.1)); });
            gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.start(now); osc.stop(now + 0.4);
        } else if (type === 'alert') {
            osc.type = 'square'; osc.frequency.setValueAtTime(220, now); osc.frequency.setValueAtTime(180, now + 0.1); osc.frequency.setValueAtTime(220, now + 0.2);
            gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            osc.start(now); osc.stop(now + 0.3);
        } else if (type === 'result-perfect') {
            osc.type = 'triangle';
            [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach(function(freq, i) {
                osc.frequency.setValueAtTime(freq, now + (i * 0.08));
            });
            gainNode.gain.setValueAtTime(0.12, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
            osc.start(now); osc.stop(now + 0.55);
        } else if (type === 'result-good') {
            osc.type = 'sine';
            [392.0, 493.88, 587.33].forEach(function(freq, i) {
                osc.frequency.setValueAtTime(freq, now + (i * 0.12));
            });
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.start(now); osc.stop(now + 0.4);
        } else if (type === 'result-poor') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.linearRampToValueAtTime(164.81, now + 0.18);
            osc.frequency.linearRampToValueAtTime(130.81, now + 0.36);
            gainNode.gain.setValueAtTime(0.08, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
            osc.start(now); osc.stop(now + 0.45);
        }
    } catch(e) { /* audio failure is non-critical */ }
}

// === VIEW MANAGEMENT ===
var allViews = [];
function switchView(targetView, playIntro, skipPush) {
    if (!skipPush) {
        history.pushState({ viewId: targetView.id }, "", "");
    }
    allViews.forEach(function(v) { v.classList.add('hidden-view'); v.classList.remove('fade-in'); });
    targetView.classList.remove('hidden-view');
    void targetView.offsetWidth;
    targetView.classList.add('fade-in');
    if (playIntro) playSound('intro'); else playSound('slide');
}

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.viewId) {
        var view = document.getElementById(event.state.viewId);
        if (view) switchView(view, false, true);
    } else {
        // Fallback to initial view if no state
        if (courseView) switchView(courseView, true, true);
    }
});

window.addEventListener('beforeunload', function (e) {
    // Standard prompt to confirm exit
    e.preventDefault();
    e.returnValue = '';
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(function(err) {
            // Some mobile browsers require different prefixes or might fail
            if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
            updateFullscreenButton();
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
    setTimeout(updateFullscreenButton, 50);
}

// === DOM REFS ===
var courseView, setView, wordListView, flashcardView, learnView, testSettingsView, testView, matchSettingsView, matchView, matchResultView, compactListView;
var resultPanel, confirmPanel;

// ═══════════════════════════════════
// COURSE VIEW (View 1)
// ═══════════════════════════════════
function renderCourses() {
    var grid = document.getElementById('courseGrid');
    var html = '';
    coursesData.forEach(function(course) {
        var totalWords = 0;
        course.sets.forEach(function(s) { totalWords += s.words.length; });
        html += '<div class="course-card" data-course-id="' + course.id + '" role="button" tabindex="0">' +
            '<div class="course-card-icon">' + course.icon + '</div>' +
            '<div class="course-card-info">' +
                '<h3 class="font-display text-lg font-bold">' + escapeHtml(course.title) + '</h3>' +
                '<p class="text-xs" style="color:var(--text-muted)">' + course.sets.length + ' sets · ' + totalWords + ' words</p>' +
            '</div>' +
            '<div class="course-card-arrow">›</div>' +
        '</div>';
    });
    grid.innerHTML = html;
    grid.querySelectorAll('[data-course-id]').forEach(function(el) {
        el.addEventListener('click', function() { selectCourse(el.dataset.courseId); });
    });
    renderLearningBookPanel();
}

function selectCourse(courseId) {
    currentCourse = coursesData.find(function(c) { return c.id === courseId; });
    if (!currentCourse) return;
    renderSets();
    switchView(setView);
}

// ═══════════════════════════════════
// SET VIEW (View 2)
// ═══════════════════════════════════
function renderSets() {
    document.getElementById('setViewTitle').textContent = currentCourse.title.toUpperCase();
    var grid = document.getElementById('setGrid');
    var html = '';
    currentCourse.sets.forEach(function(set, idx) {
        var status = getSetLearningStatus(currentCourse.id, set.id);
        var selectId = 'setLearningSelect_' + idx;
        html += '<div class="set-card' + (status === 'learned' ? ' is-learned' : '') + '">' +
            '<div class="set-card-main" data-set-id="' + set.id + '" role="button" tabindex="0">' +
                '<div class="set-card-number">' + (idx + 1) + '</div>' +
                '<div class="set-card-info">' +
                    '<h3 class="font-display text-sm font-bold">' + escapeHtml(set.title) + '</h3>' +
                    '<p class="text-xs" style="color:var(--text-muted)">' + set.words.length + ' terms</p>' +
                '</div>' +
                '<div class="set-card-arrow">></div>' +
            '</div>' +
            '<div class="set-card-controls">' +
                '<label class="set-card-select-label" for="' + selectId + '">Selection</label>' +
                '<select id="' + selectId + '" class="set-learning-select" data-set-learning-id="' + set.id + '">' +
                    '<option value="not-learned"' + (status === 'not-learned' ? ' selected' : '') + '>Haven\'t Learned</option>' +
                    '<option value="learning"' + (status === 'learning' ? ' selected' : '') + '>Learning</option>' +
                    '<option value="learned"' + (status === 'learned' ? ' selected' : '') + '>Learned</option>' +
                '</select>' +
            '</div>' +
        '</div>';
    });
    grid.innerHTML = html;
    grid.querySelectorAll('[data-set-id]').forEach(function(el) {
        el.addEventListener('click', function() { selectSet(el.dataset.setId); });
    });
    grid.querySelectorAll('[data-set-learning-id]').forEach(function(el) {
        el.addEventListener('click', function(e) { e.stopPropagation(); });
        el.addEventListener('change', function(e) {
            saveSetLearningStatus(currentCourse.id, el.dataset.setLearningId, e.target.value);
            renderSets();
            renderCourses();
        });
    });
    renderLearningBookPanel();
}

function selectSet(setId) {
    var selectedSet = null;
    currentCourse.sets.forEach(function(s) { if (s.id === setId) selectedSet = s; });
    if (!selectedSet) return;
    openWordSource(buildWordSource(selectedSet.words, selectedSet.title, {
        id: selectedSet.id,
        parentView: setView,
        parentTitle: 'SETS'
    }), wordListView);
}

// ═══════════════════════════════════
// WORD LIST VIEW (View 3)
// ═══════════════════════════════════
function renderWordListView() {
    var cardsContainer = document.getElementById('wordCardsContainer');
    var previousScrollTop = cardsContainer ? cardsContainer.scrollTop : 0;
    if (currentSet && currentSet.isLearningBook) syncCurrentLearningBookSource();
    document.getElementById('wordListTitle').textContent = getCurrentWordSourceTitle();
    document.getElementById('wlSetName').textContent = currentSet.title;
    document.getElementById('wlTermCount').textContent = currentSet.words.length + ' terms';
    document.getElementById('backToSetsBtn').lastChild.textContent = ' ' + (currentSet.parentTitle || 'SETS');
    updateWLFlashcard();
    renderWordCards();
    updateWordListActionState();
    if (cardsContainer) {
        var maxScrollTop = Math.max(0, cardsContainer.scrollHeight - cardsContainer.clientHeight);
        cardsContainer.scrollTop = Math.min(previousScrollTop, maxScrollTop);
    }
}

function updateWLFlashcard() {
    if (!currentSet) return;
    var wordFront = document.getElementById('wlWordFront');
    var wordBack = document.getElementById('wlWordBack');
    var pronBack = document.getElementById('wlPronBack');
    var transBack = document.getElementById('wlTransBack');
    var learnedIcon = document.getElementById('wlStatusLearned');
    var starBtn = document.getElementById('wlStarBtn');
    var dotsContainer = document.getElementById('carouselDots');
    var flashcard = document.getElementById('wlFlashcard');
    if (!currentSet.activeWords.length) {
        if (wordFront) wordFront.textContent = currentSet.isLearningBook ? 'Learning Book is empty' : 'No words available';
        if (wordBack) wordBack.textContent = 'Add more words to continue';
        if (pronBack) pronBack.textContent = '';
        if (transBack) transBack.textContent = currentSet.isLearningBook ? 'Removed words disappear here immediately.' : '';
        if (learnedIcon) learnedIcon.classList.remove('active');
        if (starBtn) {
            starBtn.textContent = '☆';
            starBtn.classList.remove('active');
        }
        if (dotsContainer) dotsContainer.innerHTML = '';
        if (flashcard) flashcard.classList.remove('flipped');
        return;
    }
    var wData = getWordData(currentSet.activeWords[currentCardIndex]);
    wordFront.textContent = wData.word;
    wordBack.textContent = wData.word;
    pronBack.textContent = wData.pron || '';
    transBack.textContent = getMeaningWithPosText(wData);

    learnedIcon.classList.toggle('active', !!wData.learned);

    starBtn.textContent = wData.isFavorite ? '★' : '☆';
    starBtn.classList.toggle('active', !!wData.isFavorite);

    // Update carousel dots
    var totalCards = currentSet.activeWords.length;
    var dotsHtml = '';
    if (totalCards <= 5) {
        for (var i = 0; i < totalCards; i++) {
            dotsHtml += '<span class="carousel-dot' + (i === currentCardIndex ? ' active' : '') + '"></span>';
        }
    } else {
        var start = currentCardIndex - 2;
        var end = currentCardIndex + 2;
        if (start < 0) { start = 0; end = 4; }
        if (end >= totalCards) { end = totalCards - 1; start = end - 4; }
        for (var i = start; i <= end; i++) {
            var classes = ['carousel-dot'];
            if (i === currentCardIndex) classes.push('active');
            else if (i === start && start > 0) classes.push('small');
            else if (i === end && end < totalCards - 1) classes.push('small');
            dotsHtml += '<span class="' + classes.join(' ') + '"></span>';
        }
    }
    dotsContainer.innerHTML = dotsHtml;
}

function updateWordListActionState() {
    var hasWords = !!(currentSet && currentSet.activeWords && currentSet.activeWords.length);
    ['btnFlashcard', 'btnLearn', 'btnTest', 'btnMatch'].forEach(function(id) {
        var btn = document.getElementById(id);
        if (btn) btn.disabled = !hasWords;
    });
    var flashcard = document.getElementById('wlFlashcard');
    if (flashcard) flashcard.classList.toggle('is-disabled', !hasWords);
}

function renderWordCards() {
    var container = document.getElementById('wordCardsContainer');
    var html = '';
    
    var wordsToRender = currentSet.sortedWords.slice();
    if (!isWordListSetMode) {
        wordsToRender.sort(function(a, b) {
            var ka = getWordData(a).isKnown ? 1 : 0;
            var kb = getWordData(b).isKnown ? 1 : 0;
            return ka - kb;
        });
    }

    if (!wordsToRender.length) {
        container.innerHTML = '<div class="word-card-empty-state">Learning Book is empty.</div>';
        return;
    }

    wordsToRender.forEach(function(wordId) {
        var wData = getWordData(wordId);
        var isFav = wData.isFavorite;
        var favIcon = isFav ? '★' : '☆';
        var starClass = isFav ? 'word-card-btn star-active' : 'word-card-btn';
        var safeWordStr = escapeJsString(wData.word);
        var safeWordId = escapeJsString(wordId);
        var isLearningBookSetMode = !!(currentSet && currentSet.isLearningBook && isWordListSetMode);
        var masteryText = typeof wData.masteryScore === 'number' ? wData.masteryScore : 0;
        
        if (isWordListSetMode) {
            var cardClass = wData.isKnown ? 'word-card is-known' : 'word-card';
            var toggleMeaningStr = 'onclick="var el=this.querySelector(\'.word-card-meaning\'); el.style.display=el.style.display===\'none\'?\'block\':\'none\'"';
            html += '<div class="' + cardClass + '" style="cursor:pointer;" ' + toggleMeaningStr + '>' +
                '<div class="word-card-top">' +
                    '<div class="word-card-title">' +
                        '<span class="word-card-term">' + escapeHtml(wData.word) + '</span>' +
                        (isLearningBookSetMode ? '<span class="word-card-meta">(' + escapeHtml(getWordFirstOrigin(wordId)) + '): ' + masteryText + '</span>' : '') +
                    '</div>' +
                    '<div class="word-card-actions">' +
                        '<button class="word-card-btn" onclick="event.stopPropagation(); speak(\'' + safeWordStr + '\', 1.0)">🔊</button>' +
                        '<div style="display:flex; flex-direction:column; gap:4px;">' +
                            '<button class="' + starClass + '" onclick="event.stopPropagation(); toggleFavoriteWord(\'' + safeWordStr + '\', this)">' + favIcon + '</button>' +
                            '<button class="word-card-btn" data-known-btn="true" onclick="event.stopPropagation(); toggleWordKnown(\'' + safeWordId + '\')">🎓</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="word-card-bottom">' +
                    '<span class="word-card-meaning" style="display:none;">' + escapeHtml(getMeaningWithPosText(wData)) + '</span>' +
                '</div>' +
            '</div>';
        } else {
            var cardClass = wData.isKnown ? 'word-card is-known' : 'word-card';
            html += '<div class="' + cardClass + '">' +
                '<div class="word-card-top">' +
                    '<span class="word-card-term">' + escapeHtml(wData.word) + '</span>' +
                    '<div class="word-card-actions">' +
                        '<button class="word-card-btn" onclick="speak(\'' + safeWordStr + '\', 1.0)">🔊</button>' +
                        '<button class="' + starClass + '" onclick="toggleFavoriteWord(\'' + safeWordStr + '\', this)">' + favIcon + '</button>' +
                    '</div>' +
                '</div>' +
                '<div class="word-card-bottom">' +
                    '<span class="word-card-meaning">' + escapeHtml(getMeaningWithPosText(wData)) + '</span>' +
                '</div>' +
            '</div>';
        }
    });
    container.innerHTML = html;
    if (currentSet && currentSet.isLearningBook && isWordListSetMode) {
        Array.prototype.forEach.call(container.children, function(cardEl, idx) {
            var wordId = wordsToRender[idx];
            var actionsColumn = cardEl.querySelector('.word-card-actions > div');
            if (!actionsColumn) return;

            var knownBtn = actionsColumn.querySelector('[data-known-btn="true"]');
            if (knownBtn) {
                knownBtn.setAttribute('onclick', 'event.stopPropagation(); confirmLearningBookKnown(\'' + escapeJsString(wordId) + '\')');
            }

            if (!actionsColumn.querySelector('.remove-btn')) {
                var removeBtn = document.createElement('button');
                removeBtn.className = 'word-card-btn remove-btn';
                removeBtn.textContent = '✕';
                removeBtn.setAttribute('onclick', 'event.stopPropagation(); confirmRemoveFromLearningBook(\'' + escapeJsString(wordId) + '\')');
                actionsColumn.appendChild(removeBtn);
            }
        });
    }
}

function toggleWordKnown(wordId) {
    var wData = getWordData(wordId);
    var newState = !wData.isKnown;
    saveProgress(wordId, { isKnown: newState, masteryScore: newState ? 8 : 0 });
    if (newState) removeLearningBookMistake(wordId);
    syncCurrentLearningBookSource();
    refreshCurrentSetActiveWords();
    if (currentSet && currentSet.isLearningBook && isWordListSetMode) {
        renderWordListView();
    } else {
        renderWordCards();
        updateWLFlashcard();
    }
    updateWordListActionState();
    renderLearningBookPanel();
    playSound('flip');
}


// ═══════════════════════════════════
// FLASHCARD VIEW
// ═══════════════════════════════════
function toggleFavoriteWord(wordId, btn) {
    var wData = getWordData(wordId);
    var isFav = !wData.isFavorite;
    saveProgress(wordId, { isFavorite: isFav });
    if (currentSet) {
        refreshCurrentSetActiveWords();
        updateWLFlashcard();
        updateFlashcard();
        renderWordCards();
    }
    if (btn) {
        btn.textContent = isFav ? '★' : '☆';
        btn.classList.toggle('star-active', isFav);
    }
    playSound('flip');
}

function toggleFavorite() {
    if (!currentSet || !currentSet.activeWords.length) return;
    playSound('flip');
    var wordId = currentSet.activeWords[currentCardIndex];
    var wData = getWordData(wordId);
    saveProgress(wordId, { isFavorite: !wData.isFavorite });
    refreshCurrentSetActiveWords();
    updateFlashcard();
    updateWLFlashcard();
    renderWordCards();
}


function openFlashcardView() {
    if (!currentSet || !currentSet.activeWords.length) return;
    currentCardIndex = 0;
    document.getElementById('fcTopicTitle').textContent = currentSet.title.toUpperCase();
    updateFlashcard();
    updateProgress();
    switchView(flashcardView);
    document.getElementById('flashcard').classList.remove('flipped');
    speak(getWordData(currentSet.activeWords[currentCardIndex]).word, 1.0);
}

function updateFlashcard() {
    var cardData = getWordData(currentSet.activeWords[currentCardIndex]);
    document.getElementById('wordFront').textContent = cardData.word;
    document.getElementById('wordBack').textContent = cardData.word;
    document.getElementById('pronBack').textContent = cardData.pron || '';
    document.getElementById('transBack').textContent = getMeaningWithPosText(cardData);

    var hintText = document.getElementById('hintText');
    var transBtn = document.getElementById('transBtn');
    var vietExample = document.getElementById('vietExample');
    var showDef = Math.random() > 0.5;
    if (showDef) {
        hintText.innerText = cardData.definition || '';
        transBtn.style.display = 'none';
        vietExample.innerText = '';
    } else {
        hintText.innerText = cardData.example || '';
        transBtn.style.display = 'flex';
        vietExample.innerText = cardData.vietnamese_example || '';
    }
    vietExample.style.opacity = '0';

    var learnedIcon = document.getElementById('statusLearned');
    learnedIcon.classList.toggle('active', !!cardData.learned);

    var starBtn = document.getElementById('starBtn');
    starBtn.textContent = cardData.isFavorite ? '★' : '☆';
    starBtn.classList.toggle('active', !!cardData.isFavorite);
}


function updateProgress() {
    var total = currentSet.activeWords.length;
    var progress = ((currentCardIndex + 1) / total) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = (currentCardIndex + 1) + '/' + total;
}

function flipCard() {
    playSound('flip');
    document.getElementById('flashcard').classList.toggle('flipped');
}

function toggleFrontTrans() {
    var el = document.getElementById('vietExample');
    el.style.opacity = el.style.opacity === '0' ? '1' : '0';
    playSound('flip');
}

function navigateFlashcard(direction) {
    if (isAnimating) return;
    var newIndex = currentCardIndex + direction;
    if (newIndex >= 0 && newIndex < currentSet.activeWords.length) {
        playSound('slide');
        isAnimating = true;
        var slider = document.getElementById('cardSlider');
        var card = document.getElementById('flashcard');
        card.classList.remove('flipped');
        slider.style.transition = 'transform 0.3s ease-in, opacity 0.2s ease-in';
        slider.style.transform = direction === 1 ? 'translateX(-120%)' : 'translateX(120%)';
        slider.style.opacity = '0';
        setTimeout(function() {
            currentCardIndex = newIndex;
            updateFlashcard();
            updateProgress();
            slider.style.transition = 'none';
            slider.style.transform = direction === 1 ? 'translateX(120%)' : 'translateX(-120%)';
            slider.offsetHeight;
            slider.style.transition = 'transform 0.3s ease-out, opacity 0.2s ease-out';
            slider.style.transform = 'translateX(0)';
            slider.style.opacity = '1';
            setTimeout(function() {
                isAnimating = false;
                speak(getWordData(currentSet.activeWords[currentCardIndex]).word, 1.0);
            }, 300);
        }, 300);
    }
}

// WL flashcard navigation
function navigateWLFlashcard(direction) {
    if (isAnimating) return;
    var newIndex = currentCardIndex + direction;
    if (newIndex >= 0 && newIndex < currentSet.activeWords.length) {
        isAnimating = true;
        var slider = document.getElementById('wlCardSlider');
        var card = document.getElementById('wlFlashcard');
        card.classList.remove('flipped');
        slider.style.transition = 'transform 0.3s ease-in, opacity 0.2s ease-in';
        slider.style.transform = direction === 1 ? 'translateX(-120%)' : 'translateX(120%)';
        slider.style.opacity = '0';
        setTimeout(function() {
            currentCardIndex = newIndex;
            updateWLFlashcard();
            slider.style.transition = 'none';
            slider.style.transform = direction === 1 ? 'translateX(120%)' : 'translateX(-120%)';
            slider.offsetHeight;
            slider.style.transition = 'transform 0.3s ease-out, opacity 0.2s ease-out';
            slider.style.transform = 'translateX(0)';
            slider.style.opacity = '1';
            setTimeout(function() {
                isAnimating = false;
                speak(getWordData(currentSet.activeWords[currentCardIndex]).word, 1.0);
            }, 300);
        }, 300);
    }
}

// ═══════════════════════════════════
// LEARN MODE
// ═══════════════════════════════════
function startLearnMode() {
    learnIndex = 0; learnStep = 1; learnMistakes = 0;
    updateLearnProgress(); renderLearnStep();
    switchView(learnView, true);
}

function updateLearnProgress() {
    var percent = (learnIndex / currentSet.activeWords.length) * 100;
    document.getElementById('learnProgressBar').style.width = percent + '%';
}

function renderLearnStep() {
    var w = getWordData(currentSet.activeWords[learnIndex]);
    var area = document.getElementById('learnContentArea');
    var html = '';
    var safeWord = escapeHtml(w.word).replace(/'/g, "\\'");
    var speakNormalAction = "speak('" + safeWord + "', 1.0)";
    var speakSlowAction = "speak('" + safeWord + "', 0.6)";

    if (learnStep === 1) {
        speak(w.word, 1.0);
        html = '<div class="border-btn-group mb-4">' +
                '<button class="border-btn speaker" onclick="' + speakNormalAction + '">🔊</button>' +
                '<button class="border-btn snail" onclick="' + speakSlowAction + '">🐌</button>' +
            '</div>' +
            '<div class="flashcard-wrapper mb-8">' +
            '<div class="card-container">' +
                '<div class="card" onclick="playSound(\'flip\'); this.classList.toggle(\'flipped\')">' +
                    '<div class="card-face card-front flex flex-col justify-center">' +
                        '<h2 class="font-display text-3xl font-bold neon-text-cyan text-center">' + escapeHtml(w.word) + '</h2>' +
                        '<p class="text-[var(--text-muted)] mt-6 text-sm italic">' + escapeHtml(w.definition || '') + '</p>' +
                    '</div>' +
                    '<div class="card-face card-back flex flex-col justify-center">' +
                        '<h2 class="font-display text-2xl font-bold neon-text-magenta text-center mb-2">' + escapeHtml(w.word) + '</h2>' +
                        '<p class="text-xs mb-4" style="color: var(--blue)">' + escapeHtml(w.pron || '') + '</p>' +
                        '<p class="text-sm neon-text-green mb-4">' + escapeHtml(getMeaningWithPosText(w)) + '</p>' +
                        '<p class="text-base text-center">' + escapeHtml(w.definition || '') + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
        renderLearnActionTray({
            speakerAction: speakNormalAction,
            snailAction: speakSlowAction,
            primaryLabel: 'CONTINUE',
            primaryAction: 'nextLearnStep()',
            secondaryLabel: 'I already know this word',
            secondaryAction: 'skipWord()'
        });
    } else if (learnStep === 2) {
        speak(w.word, 1.0);
        html = '<div class="text-center mb-6 w-full"><h2 class="font-display text-xl neon-text-cyan mb-2">Listen and rewrite</h2></div>' +
            '<div class="border-btn-group mb-6">' +
                '<button class="border-btn speaker" onclick="' + speakNormalAction + '">🔊</button>' +
                '<button class="border-btn snail" onclick="' + speakSlowAction + '">🐌</button>' +
            '</div>' +
            '<input type="text" id="learnInput" class="mb-6" placeholder="Type what you hear" style="max-width:300px">' +
            '<div class="learn-input-spacer"></div>';
        renderLearnActionTray({
            speakerAction: speakNormalAction,
            snailAction: speakSlowAction,
            primaryLabel: 'CHECK',
            primaryAction: 'checkLearn(2)'
        });
    } else if (learnStep === 3) {
        speak(w.word, 1.0);
        var wordArr = w.word.split('');
        var indices = [];
        var hintCount = w.word.length <= 5 ? 1 : (w.word.length <= 8 ? 2 : 3);
        while (indices.length < hintCount) {
            var rand = Math.floor(Math.random() * wordArr.length);
            if (wordArr[rand] !== ' ' && indices.indexOf(rand) === -1) indices.push(rand);
        }
        var displayHtml = wordArr.map(function(ch, i) {
            if (ch === ' ') return '<div class="hint-letter" style="border:none;width:10px"></div>';
            if (indices.indexOf(i) !== -1) return '<div class="hint-letter revealed">' + ch.toUpperCase() + '</div>';
            return '<div class="hint-letter"></div>';
        }).join('');
        html = '<div class="text-center mb-4 w-full"><h2 class="font-display text-xl neon-text-cyan mb-2">Fill in the word</h2></div>' +
            '<div class="border-btn-group mb-4">' +
                '<button class="border-btn speaker" onclick="' + speakNormalAction + '">🔊</button>' +
                '<button class="border-btn snail" onclick="' + speakSlowAction + '">🐌</button>' +
            '</div>' +
            '<p class="text-lg text-center mb-4 neon-text-green">' + escapeHtml(getMeaningText(w)) + '</p>' +
            '<div class="hint-display mb-6">' + displayHtml + '</div>' +
            '<input type="text" id="learnInput" class="mb-6" placeholder="Type the word" style="max-width:300px">' +
            '<div class="learn-input-spacer"></div>';
        renderLearnActionTray({
            speakerAction: speakNormalAction,
            snailAction: speakSlowAction,
            primaryLabel: 'CHECK',
            primaryAction: 'checkLearn(3)'
        });
    }
    area.innerHTML = html;
    var input = document.getElementById('learnInput');
    if (input) input.focus();
}

function nextLearnStep() {
    learnStep++;
    if (learnStep > 3) {
        learnStep = 1; learnIndex++; updateLearnProgress();
        if (learnIndex >= currentSet.activeWords.length) { showLearnComplete(); return; }
    }
    renderLearnStep();
}

function skipWord() {
    learnIndex++; updateLearnProgress();
    if (learnIndex >= currentSet.activeWords.length) showLearnComplete();
    else { learnStep = 1; learnMistakes = 0; renderLearnStep(); }
}

function showLearnComplete() {
    var area = document.getElementById('learnContentArea');
    area.innerHTML = '<h2 class="font-display text-2xl neon-text-green mb-4">COMPLETE!</h2>' +
        '<p class="text-xl mb-8">You finished the lesson!</p>';
    renderLearnActionTray({
        showAudio: false,
        speakerAction: '',
        snailAction: '',
        primaryLabel: 'BACK',
        primaryAction: 'switchView(wordListView)'
    });
    playSound('win');
}

function checkLearn(step) {
    var input = document.getElementById('learnInput');
    var w = getWordData(currentSet.activeWords[learnIndex]);
    var success = input.value.trim().toLowerCase() === w.word.toLowerCase();
    input.blur();
    if (!success) learnMistakes++;
    if (success) saveProgress(w.word, { learned: true });
    showResultPanel(success, w);
}

function showResultPanel(success, wordData) {
    var panel = document.getElementById('resultPanel');
    var icon = document.getElementById('resultIcon');
    var term = document.getElementById('resultTerm');
    var pron = document.getElementById('resultPron');
    var trans = document.getElementById('resultTrans');
    var def = document.getElementById('resultDef');
    if (success) { playSound('correct'); icon.textContent = '✔️'; icon.className = 'text-2xl mb-2 neon-text-green'; }
    else { playSound('wrong'); icon.textContent = '❌'; icon.className = 'text-2xl mb-2 neon-text-red'; }
    term.textContent = wordData.word;
    pron.textContent = wordData.pron || '';
    trans.textContent = getMeaningWithPosText(wordData);
    def.textContent = wordData.definition || '';
    panel.style.transform = 'translateY(0)';
}
function closeResultPanel() { document.getElementById('resultPanel').style.transform = 'translateY(100%)'; }

// ═══════════════════════════════════
// TEST MODE
// ═══════════════════════════════════
function getActiveTestWordPool() {
    if (!currentTestSession) return [];
    if (currentTestSession.source === 'learning-book') return getLearningBookWords();
    return currentTestSession.wordIds.slice();
}

function openTestSettings() {
    if (!currentSet) return;
    currentTestSession = {
        source: currentSet.isLearningBook ? 'learning-book' : 'set',
        title: currentSet.title,
        wordIds: currentSet.words.slice(),
        returnView: wordListView,
        returnLabel: 'Back'
    };
    openCurrentTestSettings();
}

function openLearningBookReview(originView) {
    var words = getLearningBookWords();
    if (!words.length) {
        window.alert('Learning Book is empty.');
        return;
    }
    currentTestSession = {
        source: 'learning-book',
        title: 'Learning Book',
        wordIds: words,
        returnView: originView || courseView,
        returnLabel: originView === setView ? 'Back to Set' : 'Back to Courses'
    };
    openCurrentTestSettings();
}

function openCurrentTestSettings() {
    var wordPool = getActiveTestWordPool();
    var maxQ = wordPool.length;
    document.getElementById('testSettingsCourse').textContent = currentTestSession ? currentTestSession.title : 'Test';
    document.getElementById('testMaxLabel').textContent = '(max ' + maxQ + ')';
    var countInput = document.getElementById('testQuestionCount');
    countInput.max = Math.max(maxQ, 1);
    if (!parseInt(countInput.value, 10) || parseInt(countInput.value, 10) > maxQ) countInput.value = Math.max(maxQ, 1);
    switchView(testSettingsView);
}

function buildTestOptions(wordPool, correctWordId) {
    var options = [correctWordId];
    while (options.length < 4 && options.length < wordPool.length) {
        var randId = wordPool[Math.floor(Math.random() * wordPool.length)];
        if (options.indexOf(randId) === -1) options.push(randId);
    }
    return shuffle(options);
}

function startTest() {
    var wordPool = shuffle(getActiveTestWordPool());
    if (!wordPool.length) {
        window.alert('There are no words to test right now.');
        returnFromTest();
        return;
    }
    var qCount = parseInt(document.getElementById('testQuestionCount').value, 10) || 20;
    var maxQ = wordPool.length;
    if (qCount > maxQ) qCount = maxQ;
    if (qCount < 1) qCount = 1;

    testConfig = {
        count: qCount,
        noTimeout: document.getElementById('testNoTimeout').checked,
        speak: document.getElementById('testSpeak') ? document.getElementById('testSpeak').checked : true,
        trueFalse: document.getElementById('testTrueFalse').checked,
        multipleChoice: document.getElementById('testMultipleChoice').checked,
        fillIn: document.getElementById('testFillIn').checked,
        written: document.getElementById('testWritten').checked
    };

    if (!testConfig.trueFalse && !testConfig.multipleChoice && !testConfig.fillIn && !testConfig.written) {
        testConfig.trueFalse = true;
    }

    var enabledTypes = [];
    if (testConfig.trueFalse) enabledTypes.push('tf');
    if (testConfig.multipleChoice) enabledTypes.push('mc');
    if (testConfig.fillIn) enabledTypes.push('fillin');
    if (testConfig.written) enabledTypes.push('written');

    testQuestions = [];
    for (var i = 0; i < qCount; i++) {
        var nextType = enabledTypes[i % enabledTypes.length];
        if (wordPool.length < 2 && (nextType === 'tf' || nextType === 'mc')) {
            nextType = testConfig.written ? 'written' : (testConfig.fillIn ? 'fillin' : 'written');
        }
        var q = { wordId: wordPool[i], type: nextType };
        if (q.type === 'tf') {
            var dists = wordPool.filter(function(id) { return id !== q.wordId; });
            q.distractorId = dists[Math.floor(Math.random() * dists.length)];
        } else if (q.type === 'mc' || q.type === 'fillin') {
            q.options = buildTestOptions(wordPool, q.wordId);
            q._isEngPrompt = Math.random() > 0.5;
        }
        testQuestions.push(q);
    }
    testQuestions = shuffle(testQuestions);

    testIndex = 0;
    testScore = 0;
    testAnswers = [];
    testWrittenState = null;
    clearTestAdvanceTimer();
    startTestTimer();
    renderTestQuestion();
    switchView(testView, true);
}

function clearTestAdvanceTimer() {
    if (testAdvanceTimer) {
        clearTimeout(testAdvanceTimer);
        testAdvanceTimer = null;
    }
}

function advanceToNextTestQuestion() {
    clearTestAdvanceTimer();
    testIndex++;
    renderTestQuestion();
}

function renderTestContinueArea() {
    return '<div id="testContinueArea" class="test-continue-area" style="display:none;"></div>';
}

function handleAnsweredTestQuestion() {
    clearTestAdvanceTimer();
    var continueArea = document.getElementById('testContinueArea');
    var lastAnswer = testAnswers.length ? testAnswers[testAnswers.length - 1] : null;
    var wasCorrect = !!(lastAnswer && lastAnswer.correct);
    if (continueArea) {
        continueArea.innerHTML = '';
        continueArea.style.display = 'none';
    }
    if (testConfig.noTimeout) {
        testAdvanceTimer = setTimeout(function() {
            advanceToNextTestQuestion();
        }, 100);
        return;
    }
    if (wasCorrect) {
        testAdvanceTimer = setTimeout(function() {
            advanceToNextTestQuestion();
        }, 500);
        return;
    }
    if (continueArea) {
        continueArea.innerHTML = '<button class="primary-btn test-continue-btn" id="testContinueBtn" onclick="advanceToNextTestQuestion()">Continue</button>';
        continueArea.style.display = 'flex';
    }
}

function renderTestQuestion() {
    clearTestAdvanceTimer();
    if (testIndex >= testQuestions.length) { showTestResults(); return; }
    testWrittenState = null;
    var q = testQuestions[testIndex];
    var area = document.getElementById('testContentArea');
    document.getElementById('testProgressText').textContent = (testIndex + 1) + ' / ' + testQuestions.length;
    document.getElementById('testProgressBar').style.width = ((testIndex + 1) / testQuestions.length * 100) + '%';

    var html = '';
    if (q.type === 'tf') {
        var w = getWordData(q.wordId);
        var dist = getWordData(q.distractorId);
        var showCorrect = Math.random() > 0.5;
        q._isTrue = showCorrect;

        var shownTerm = showCorrect ? w.word : dist.word;
        if (testConfig.speak) { speak(shownTerm, 1.0); }

        html = '<div class="test-question-area text-center">' +
            '<p class="test-term text-3xl mb-4 text-[var(--blue)] font-bold">' + escapeHtml(shownTerm) + '</p>' +
            '<p class="test-definition mb-6 text-lg">' + escapeHtml(getMeaningText(w)) + '</p>' +
            '<div class="test-options-col">' +
                '<button class="test-option-btn text-center font-bold text-lg py-4" onclick="answerTest(true, this)">True</button>' +
                '<button class="test-option-btn text-center font-bold text-lg py-4" onclick="answerTest(false, this)">False</button>' +
            '</div>' +
            '<div id="testTfReveal" class="test-inline-reveal" style="display:none;"></div>' +
            renderTestContinueArea() +
        '</div>';
    } else if (q.type === 'mc' || q.type === 'fillin') {
        var mcWord = getWordData(q.wordId);
        var optsHtml = '';
        q.options.forEach(function(optId, idx) {
            var optW = getWordData(optId);
            var optText = q.type === 'fillin' ? escapeHtml(optW.word) : (q._isEngPrompt ? escapeHtml(getMeaningText(optW)) : escapeHtml(optW.word));
            optsHtml += '<button class="test-option-btn text-left" onclick="answerTest(' + idx + ', this)">' + optText + '</button>';
        });

        var promptText = '';
        var promptClass = '';
        if (q.type === 'fillin') {
            var exStr = mcWord.example || mcWord.definition || '';
            var re = new RegExp(mcWord.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            var blanked = exStr.replace(re, '______');
            if (blanked === exStr && mcWord.example) blanked = exStr + ' (______)';
            promptText = escapeHtml(blanked);
            promptClass = 'test-term text-xl mb-6 font-bold truncate text-wrap';
        } else {
            promptText = q._isEngPrompt ? escapeHtml(mcWord.word) : escapeHtml(getMeaningText(mcWord));
            promptClass = q._isEngPrompt ? 'test-term text-3xl mb-4 text-[var(--blue)] font-bold' : 'test-definition text-xl mb-4';
        }
        if ((q._isEngPrompt || q.type === 'fillin') && testConfig.speak) { speak(mcWord.word, 1.0); }

        html = '<div class="test-question-area">' +
            (q.type === 'fillin' ? '<p class="test-label mt-2 mb-2 text-md italic" style="color:var(--blue)">Fill in the blank:</p>' : '') +
            '<p class="' + promptClass + '">' + promptText + '</p>' +
            '<p class="test-label mt-4">' + (q.type === 'fillin' ? 'Select the correct word' : 'Select the correct matching term') + '</p>' +
            '<div class="test-options-col">' + optsHtml + '</div>' +
            renderTestContinueArea() +
        '</div>';
    } else if (q.type === 'written') {
        var writtenWord = getWordData(q.wordId);
        var keyboardRows = [
            ['Q','W','E','R','T','Y','U','I','O','P'],
            ['A','S','D','F','G','H','J','K','L'],
            ['Z','X','C','V','B','N','M']
        ];
        var keysHtml = keyboardRows.map(function(row, rowIndex) {
            var rowHtml = row.map(function(ch) {
                return '<button type="button" class="key-btn" data-key="' + ch.toLowerCase() + '">' + ch + '</button>';
            }).join('');
            if (rowIndex === 2) {
                rowHtml += '<button type="button" class="key-btn backspace" data-key="backspace">⌫</button>';
            }
            return '<div class="keyboard-row keyboard-row-' + (rowIndex + 1) + '">' + rowHtml + '</div>';
        }).join('');
        var promptHtml = '<p class="test-definition test-definition-centered">' + escapeHtml(getMeaningText(writtenWord)) + '</p>';
        testWrittenState = createWrittenPromptState(writtenWord.word);

        html = '<div class="test-question-area">' +
            promptHtml +
            '<p class="test-label mt-6">Your answer</p>' +
            '<div class="test-written-input-wrap">' +
                '<input type="text" class="test-written-input-hidden" id="testWrittenInputHidden" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" inputmode="text">' +
                '<div id="testWrittenBoxes" class="test-written-boxes" role="textbox" aria-label="Type the answer"></div>' +
                '<p class="test-written-help">Gray letters are hints. Fill the other tiles with your keyboard.</p>' +
                '<div class="visual-keyboard">' + keysHtml + '</div>' +
            '</div>' +
            '<button class="primary-btn mt-4 mx-auto" id="testWrittenSubmitBtn" onclick="answerTestWritten()" style="width:200px">Submit</button>' +
            renderTestContinueArea() +
        '</div>';
    }
    area.innerHTML = html;
    if (q.type === 'written' && testWrittenState) {
        renderWrittenPromptUI();
        attachWrittenPromptHandlers();
    }
}

function answerTest(val, btn) {
    var q = testQuestions[testIndex];
    var isCorrect = false;
    if (q.type === 'tf') {
        isCorrect = (val === q._isTrue);
    } else if (q.type === 'mc' || q.type === 'fillin') {
        isCorrect = (q.options[val] === q.wordId);
    }

    if (isCorrect) { playSound('correct'); testScore++; }
    else { playSound('wrong'); }
    if (btn && typeof btn.blur === 'function') btn.blur();

    var buttons = btn.parentElement.querySelectorAll('.test-option-btn');
    buttons.forEach(function(b, i) {
        b.disabled = true;
        if (q.type === 'tf') {
            if ((i === 0 ? true : false) === q._isTrue) b.classList.add('correct');
        } else if (q.type === 'mc' || q.type === 'fillin') {
            if (q.options[i] === q.wordId) b.classList.add('correct');
        }
    });
    if (!isCorrect) btn.classList.add('wrong');

    if (testConfig.speak && q.type !== 'tf' && !q._isEngPrompt) { speak(getWordData(q.wordId).word, 1.0); }
    if (q.type === 'tf' && !q._isTrue) {
        var reveal = document.getElementById('testTfReveal');
        if (reveal) {
            var shownWord = getWordData(q.distractorId);
            reveal.innerHTML = '<p class="test-results-label">Correct Answer</p>' +
                '<div class="test-results-item"><span class="test-results-word">' + escapeHtml(shownWord.word) + '</span>' +
                '<span class="test-results-meaning">' + escapeHtml(getMeaningText(shownWord)) + '</span></div>';
            reveal.style.display = 'block';
        }
    }

    testAnswers.push({ wordId: q.wordId, correct: isCorrect, type: q.type });
    handleAnsweredTestQuestion();
}

function answerTestWritten() {
    var q = testQuestions[testIndex];
    var w = getWordData(q.wordId);
    var hiddenInput = document.getElementById('testWrittenInputHidden');
    if (q.type === 'written' && testWrittenState && !testWrittenState.showSolution && !isWrittenComplete(testWrittenState)) return;
    var value = buildWrittenUserAnswer(testWrittenState || createWrittenPromptState(w.word));
    var isCorrect = value !== null && value.trim().toLowerCase() === w.word.toLowerCase();
    var submitBtn = document.getElementById('testWrittenSubmitBtn');
    if (isCorrect) { playSound('correct'); testScore++; }
    else { playSound('wrong'); }
    if (hiddenInput) hiddenInput.blur();
    if (submitBtn) submitBtn.blur();
    if (hiddenInput) hiddenInput.disabled = true;
    if (submitBtn) submitBtn.disabled = true;

    if (testConfig.speak) { speak(w.word, 1.0); }
    if (q.type === 'written' && testWrittenState) {
        testWrittenState.showSolution = true;
        testWrittenState.solvedCorrectly = isCorrect;
        renderWrittenPromptUI();
    }

    testAnswers.push({ wordId: q.wordId, correct: isCorrect, type: q.type, userAnswer: value });
    handleAnsweredTestQuestion();
}

function showTestResults() {
    clearTestAdvanceTimer();
    stopTestTimer();
    var area = document.getElementById('testContentArea');
    var pct = Math.round((testScore / testQuestions.length) * 100);
    if (currentTestSession && currentTestSession.source === 'set' && shouldAutoLearnCurrentSet(testQuestions.length, testScore)) {
        markCurrentSetLearned();
    }
    testAnswers.forEach(function(answer) {
        recordTestOutcome(answer);
    });
    var resultItems = testAnswers.map(function(answer) {
        var resultWord = getWordData(answer.wordId);
        return {
            word: resultWord.word,
            meaning: getMeaningText(resultWord),
            correct: answer.correct
        };
    });
    area.innerHTML = '<div class="flex flex-col h-full justify-center">' +
        '<div class="result-shell">' +
            '<div class="result-title-wrap">' +
                '<p class="result-kicker">Test Results</p>' +
                '<h2 class="font-display text-2xl font-bold">TEST COMPLETE!</h2>' +
            '</div>' +
            '<div class="result-ring-wrap">' +
                '<div class="result-ring">' +
                    '<svg width="160" height="160" viewBox="0 0 160 160" aria-hidden="true">' +
                        '<circle class="result-ring-bg" cx="80" cy="80" r="68"></circle>' +
                        '<circle class="result-ring-fg" id="testResultRing" cx="80" cy="80" r="68"></circle>' +
                    '</svg>' +
                    '<div class="result-ring-center"><span class="result-ring-percent" id="testResultPercent">0%</span></div>' +
                '</div>' +
            '</div>' +
            '<div class="result-stat-row">' +
                '<div class="result-stat-card"><span class="result-stat-label">Time</span><span class="result-stat-value">' + formatElapsedSeconds(testElapsedSeconds) + '</span></div>' +
                '<div class="result-stat-card"><span class="result-stat-label">Right answers</span><span class="result-stat-value">' + testScore + ' / ' + testQuestions.length + '</span></div>' +
            '</div>' +
            '<div class="result-list-wrap">' +
                '<p class="result-list-title">Word results</p>' +
                '<div class="result-word-list">' + renderResultWordRows(resultItems) + '</div>' +
            '</div>' +
        '</div>' +
        '<div class="flex flex-col gap-3 w-full mt-6" style="max-width:300px; margin-left:auto; margin-right:auto;">' +
            '<button class="primary-btn w-full" onclick="startTest()">Try Again</button>' +
            '<button class="nav-btn w-full" onclick="returnFromTest()">' + (currentTestSession ? currentTestSession.returnLabel : 'Back') + '</button>' +
        '</div>' +
    '</div>';
    animateResultRing('testResultRing', 'testResultPercent', pct);
    playSound(getResultSoundType(pct));
}

function getMatchWordPool() {
    return currentSet ? currentSet.words.slice() : [];
}

function openMatchSettings() {
    if (!currentSet) return;
    var wordPool = getMatchWordPool();
    if (wordPool.length < 2) {
        window.alert('You need at least 2 words to start Match.');
        return;
    }
    var countInput = document.getElementById('matchWordCount');
    var maxWords = wordPool.length;
    document.getElementById('matchSettingsCourse').textContent = currentSet.title;
    document.getElementById('matchMaxLabel').textContent = '(2 to ' + maxWords + ' total words)';
    countInput.max = maxWords;
    countInput.min = 2;
    if (!parseInt(countInput.value, 10) || parseInt(countInput.value, 10) > maxWords) {
        countInput.value = Math.min(Math.max(matchConfig.count || 6, 2), maxWords);
    }
    switchView(matchSettingsView);
}

function syncMatchRefillSettings() {
    if (!currentSet) return;
    var refillToggle = document.getElementById('matchRefill');
    var countInput = document.getElementById('matchWordCount');
    if (!refillToggle || !countInput) return;
    if (refillToggle.checked) {
        countInput.value = getMatchWordPool().length;
    }
}

function createMatchCards(wordIds) {
    var cards = [];
    wordIds.forEach(function(wordId) {
        var w = getWordData(wordId);
        cards.push({ id: wordId + '_en_' + Math.random().toString(36).slice(2, 7), pairId: wordId, text: w.word, type: 'en' });
        cards.push({ id: wordId + '_vi_' + Math.random().toString(36).slice(2, 7), pairId: wordId, text: getMeaningText(w), type: 'vi' });
    });
    return shuffle(cards);
}

function getMatchActiveCardCount() {
    return matchBoardSlots.filter(function(card) { return !!card; }).length;
}

function getMatchEmptySlotIndices() {
    var empty = [];
    matchBoardSlots.forEach(function(card, idx) {
        if (!card) empty.push(idx);
    });
    return empty;
}

function clearMatchRefillTimeouts() {
    while (matchRefillTimeouts.length) {
        clearTimeout(matchRefillTimeouts.pop());
    }
    matchIsRefilling = false;
}

function maybeRefillMatchBoard() {
    if (!matchConfig.refill) return;
    if (getMatchActiveCardCount() !== 4) return;
    if (!matchRemainingWords.length) return;
    var refillWords = matchRemainingWords.splice(0, Math.min(4, matchRemainingWords.length));
    if (!refillWords.length) return;

    var refillCards = createMatchCards(refillWords);
    matchIsRefilling = true;
    refillCards.forEach(function(card, idx) {
        matchRefillTimeouts.push(setTimeout(function() {
            var emptySlots = getMatchEmptySlotIndices();
            if (!emptySlots.length) return;
            var slotIndex = emptySlots[Math.floor(Math.random() * emptySlots.length)];
            if (typeof slotIndex !== 'number') return;
            matchBoardSlots[slotIndex] = card;
            renderMatchGrid();
            if (idx === refillCards.length - 1) {
                matchRefillTimeouts.push(setTimeout(function() {
                    matchBoardSlots.forEach(function(slotCard) {
                        if (slotCard) delete slotCard.enterDelay;
                    });
                    matchIsRefilling = false;
                    renderMatchGrid();
                }, 220));
            }
        }, idx * 100));
    });
}

function startMatch() {
    var sourceWords = shuffle(getMatchWordPool());
    if (sourceWords.length < 2) {
        window.alert('You need at least 2 words to start Match.');
        return;
    }

    var desiredCount = parseInt(document.getElementById('matchWordCount').value, 10) || 6;
    if (desiredCount < 2) desiredCount = 2;
    if (desiredCount > sourceWords.length) desiredCount = sourceWords.length;

    matchConfig = {
        count: desiredCount,
        refill: document.getElementById('matchRefill').checked
    };
    matchSessionWords = sourceWords.slice(0, desiredCount);
    matchRemainingWords = matchSessionWords.slice(Math.min(6, matchSessionWords.length));
    matchWords = matchSessionWords.slice(0, Math.min(6, matchSessionWords.length));
    clearMatchRefillTimeouts();
    matchBoardSlots = createMatchCards(matchWords);
    matchCards = matchBoardSlots;
    matchSelected = null;
    matchWrong = 0;
    matchStartTime = Date.now();
    matchPenaltySeconds = 0;
    matchWrongWordMap = {};
    matchIsRefilling = false;

    renderMatchGrid();
    startMatchTimer();
    switchView(matchView, true);
}

function renderMatchGrid() {
    var grid = document.getElementById('matchGrid');
    var html = '';
    matchBoardSlots.forEach(function(card, idx) {
        if (!card) {
            html += '<div class="match-card match-card-empty" data-idx="' + idx + '" aria-hidden="true"></div>';
            return;
        }
        var className = 'match-card';
        if (card.type === 'en') className += ' is-english';
        if (card.type === 'en' && card.text.length > 18) className += ' text-fit-xs';
        else if (card.type === 'en' && card.text.length > 11) className += ' text-fit-sm';
        if (typeof matchSelected === 'number' && matchSelected === idx) className += ' selected';
        if (typeof card.enterDelay === 'number') className += ' match-card-entering';
        var style = typeof card.enterDelay === 'number' ? ' style="animation-delay:' + card.enterDelay + 'ms"' : '';
        html += '<div class="' + className + '" data-idx="' + idx + '" onclick="selectMatchCard(' + idx + ')"' + style + '>' +
            '<span class="match-card-text">' + escapeHtml(card.text) + '</span>' +
        '</div>';
    });
    grid.innerHTML = html;
}

function startMatchTimer() {
    var timerEl = document.getElementById('matchTimer');
    if (matchTimerInterval) clearInterval(matchTimerInterval);
    matchTimerInterval = setInterval(function() {
        var elapsed = getMatchElapsedSeconds().toFixed(1);
        timerEl.textContent = elapsed + ' seconds';
    }, 100);
}

function getMatchElapsedSeconds() {
    return ((Date.now() - matchStartTime) / 1000) + matchPenaltySeconds;
}

function showMatchPenalty(cardEl) {
    var layer = document.getElementById('matchEffects');
    if (!layer || !cardEl) return;
    var layerRect = layer.getBoundingClientRect();
    var cardRect = cardEl.getBoundingClientRect();
    var effect = document.createElement('div');
    effect.className = 'match-penalty-fx';
    effect.textContent = '+1 sec';
    effect.style.left = (cardRect.left - layerRect.left + cardRect.width / 2) + 'px';
    effect.style.top = (cardRect.top - layerRect.top + cardRect.height / 2) + 'px';
    layer.appendChild(effect);
    setTimeout(function() {
        if (effect.parentNode) effect.parentNode.removeChild(effect);
    }, 900);
}

function finishMatchPair(firstIdx, secondIdx) {
    matchBoardSlots[firstIdx] = null;
    matchBoardSlots[secondIdx] = null;
    renderMatchGrid();
    if (!getMatchActiveCardCount()) {
        clearInterval(matchTimerInterval);
        setTimeout(function() { showMatchResults(); }, 300);
        return;
    }
    maybeRefillMatchBoard();
}

function selectMatchCard(idx) {
    if (matchIsRefilling) return;
    var cardEl = document.querySelector('.match-card[data-idx="' + idx + '"]');
    if (!cardEl || cardEl.classList.contains('selected')) return;
    var currentCard = matchBoardSlots[idx];
    if (!currentCard) return;

    if (matchSelected === null) {
        matchSelected = idx;
        renderMatchGrid();
    } else {
        var firstIdx = matchSelected;
        var firstEl = document.querySelector('.match-card[data-idx="' + firstIdx + '"]');
        if (!firstEl) {
            matchSelected = null;
            return;
        }
        var card1 = matchBoardSlots[firstIdx];
        var card2 = matchBoardSlots[idx];
        if (!card1 || !card2) {
            matchSelected = null;
            renderMatchGrid();
            return;
        }
        cardEl.classList.add('selected');

        if (card1.pairId === card2.pairId && card1.type !== card2.type) {
            playSound('correct');
            applyWordScoreDelta(card1.pairId, 3);
            firstEl.classList.add('matched');
            cardEl.classList.add('matched');
            setTimeout(function() {
                finishMatchPair(firstIdx, idx);
                renderLearningBookPanel();
                refreshCurrentSetActiveWords();
                if (currentSet) renderWordListView();
            }, 450);
        } else {
            playSound('wrong');
            matchWrong++;
            matchPenaltySeconds += 1;
            applyWordScoreDelta(card1.pairId, -4, { addMistake: true });
            applyWordScoreDelta(card2.pairId, -4, { addMistake: true });
            matchWrongWordMap[card1.pairId] = true;
            matchWrongWordMap[card2.pairId] = true;
            firstEl.classList.add('wrong');
            cardEl.classList.add('wrong');
            showMatchPenalty(cardEl);
            setTimeout(function() {
                firstEl.classList.remove('selected', 'wrong');
                cardEl.classList.remove('selected', 'wrong');
            }, 600);
            renderLearningBookPanel();
            refreshCurrentSetActiveWords();
        }
        matchSelected = null;
    }
}

function showMatchResults() {
    clearMatchRefillTimeouts();
    var elapsed = getMatchElapsedSeconds().toFixed(1);
    var wrongWords = Object.keys(matchWrongWordMap);
    var resultItems = matchSessionWords.map(function(wordId) {
        var matchWord = getWordData(wordId);
        return {
            word: matchWord.word,
            meaning: getMeaningText(matchWord),
            correct: !matchWrongWordMap[wordId]
        };
    });
    var correctCount = resultItems.filter(function(item) { return item.correct; }).length;
    var pct = resultItems.length ? Math.round((correctCount / resultItems.length) * 100) : 0;
    if (shouldAutoLearnCurrentSet(resultItems.length, correctCount)) {
        markCurrentSetLearned();
    }
    document.getElementById('matchResultTime').textContent = elapsed + 's';
    document.getElementById('matchResultScore').textContent = correctCount + ' / ' + resultItems.length;
    document.getElementById('matchResultTitle').textContent = wrongWords.length ? 'MATCH COMPLETE!' : 'PERFECT MATCH!';
    document.getElementById('matchResultList').innerHTML = renderResultWordRows(resultItems);
    switchView(matchResultView);
    animateResultRing('matchResultRing', 'matchResultPercent', pct);
    playSound(getResultSoundType(pct));
}
// COMPACT LIST VIEW
// ═══════════════════════════════════
function renderCompactList() {
    var container = document.getElementById('compactListContainer');
    document.getElementById('compactListTitle').textContent = currentSet.title.toUpperCase();
    document.getElementById('compactListCount').textContent = currentSet.sortedWords.length;
    var html = '<div class="flex flex-col gap-1 mx-auto w-full" style="max-width:450px">';
    currentSet.sortedWords.forEach(function(wordId, index) {
        var wData = getWordData(wordId);
        var favIcon = wData.isFavorite ? '<span class="neon-text-cyan mt-1">★</span>' : '';
        var knownClass = wData.isKnown ? 'known-btn active' : 'known-btn';
        html += '<div class="p-3 rounded-lg flex items-center justify-between hover:bg-[rgba(255,255,255,0.05)] cursor-pointer transition-colors w-full" onclick="toggleTranslation(' + index + ')">' +
            '<div class="flex-1 flex items-start">' +
                '<span class="text-[var(--text-muted)] mr-3 font-display w-6 text-right mt-1">' + (index+1) + '.</span>' +
                '<div class="flex flex-col flex-1">' +
                    '<div class="flex items-baseline gap-2">' +
                        '<span class="font-display font-bold neon-text-magenta text-lg">' + escapeHtml(wData.word) + '</span>' +
                        '<span class="text-xs text-[var(--text-muted)] opacity-70">' + escapeHtml(wData.pron || '') + '</span>' +
                    '</div>' +
                    '<p class="text-sm neon-text-green max-h-0 overflow-hidden transition-all duration-300 opacity-0" id="listTrans_' + index + '" style="margin-top:0px">' + escapeHtml(getMeaningText(wData)) + '</p>' +
                '</div>' +
            '</div>' +
            '<div class="flex gap-4 text-2xl items-center justify-center min-w-[60px]">' +
                favIcon +
                '<button class="' + knownClass + '" onclick="event.stopPropagation(); toggleKnown(\'' + escapeHtml(wordId).replace(/'/g, "\\'") + '\', this)" title="Toggle Known">🎓</button>' +
            '</div>' +
        '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
    switchView(compactListView);
}

function toggleTranslation(index) {
    var el = document.getElementById('listTrans_' + index);
    if (el) {
        if (el.style.maxHeight === '50px' || el.style.opacity === '1') {
            el.style.maxHeight = '0px'; el.style.opacity = '0'; el.style.marginTop = '0px';
        } else {
            el.style.maxHeight = '50px'; el.style.opacity = '1'; el.style.marginTop = '4px';
        }
    }
}

function toggleKnown(wordId, btn) {
    var wData = getWordData(wordId);
    var newState = !wData.isKnown;
    saveProgress(wordId, { isKnown: newState, masteryScore: newState ? 8 : 0 });
    if (newState) removeLearningBookMistake(wordId);
    refreshCurrentSetActiveWords();
    renderWordCards();
    updateWLFlashcard();
    updateFlashcard();
    if (btn) { if (newState) btn.classList.add('active'); else btn.classList.remove('active'); }
    renderLearningBookPanel();
}

// ═══════════════════════════════════
// EXIT LOGIC
// ═══════════════════════════════════
function openConfirmPanel(message, confirmLabel, onConfirm, cancelLabel) {
    var messageEl = document.getElementById('confirmPanelMessage');
    var cancelBtn = document.getElementById('cancelExitBtn');
    var confirmBtn = document.getElementById('confirmExitBtn');
    if (messageEl) messageEl.textContent = message;
    if (cancelBtn) cancelBtn.textContent = cancelLabel || 'CANCEL';
    if (confirmBtn) confirmBtn.textContent = confirmLabel || 'CONFIRM';
    pendingConfirmAction = onConfirm || null;
    confirmPanel.classList.add('show');
}
function requestExit(callback) {
    playSound('alert');
    openConfirmPanel(
        'Don\'t go yet~ Finish it first or your progress will disappear 😭',
        'EXIT',
        callback,
        'STAY'
    );
}
function confirmPendingAction() {
    playSound('slide');
    confirmPanel.classList.remove('show');
    closeResultPanel();
    var next = pendingConfirmAction;
    pendingConfirmAction = null;
    if (next) next();
}
function cancelExit() { playSound('slide'); confirmPanel.classList.remove('show'); pendingConfirmAction = null; }

// ═══════════════════════════════════
// SETTINGS & THEME
// ═══════════════════════════════════
var THEME_KEY = 'foxyVocabTheme';

function applyTheme(isDark) {
    if (isDark) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    var label = document.getElementById('themeLabel');
    var icon = document.getElementById('themeIcon');
    if (label) label.textContent = isDark ? 'Dark Mode' : 'Light Mode';
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
}

function toggleTheme() {
    var isDark = document.documentElement.hasAttribute('data-theme');
    var newDark = !isDark;
    localStorage.setItem(THEME_KEY, newDark ? 'dark' : 'light');
    applyTheme(newDark);
}

function openSettings() { document.getElementById('settingsPanel').classList.add('show'); }
function closeSettings() { document.getElementById('settingsPanel').classList.remove('show'); }

// ═══════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════
function init() {
    console.log('[FoxyVocab] init() called');
    if (typeof coursesData === 'undefined' || typeof dictionary === 'undefined') {
        console.error('[FoxyVocab] data.js not loaded!');
        var errEl = document.getElementById('loadError');
        if (errEl) errEl.style.display = 'block';
        return;
    }
    console.log('[FoxyVocab] Data loaded OK:', Object.keys(dictionary).length, 'words,', coursesData.length, 'courses');

    try { userProgress = normalizeProgressState(JSON.parse(localStorage.getItem(STORAGE_KEY))); } catch(e) { userProgress = createEmptyProgressState(); }

    // Cache DOM refs
    courseView = document.getElementById('courseView');
    setView = document.getElementById('setView');
    wordListView = document.getElementById('wordListView');
    flashcardView = document.getElementById('flashcardView');
    learnView = document.getElementById('learnView');
    testSettingsView = document.getElementById('testSettingsView');
    testView = document.getElementById('testView');
    matchSettingsView = document.getElementById('matchSettingsView');
    matchView = document.getElementById('matchView');
    matchResultView = document.getElementById('matchResultView');
    compactListView = document.getElementById('compactListView');
    resultPanel = document.getElementById('resultPanel');
    confirmPanel = document.getElementById('confirmPanel');

    allViews = [courseView, setView, wordListView, flashcardView, learnView, testSettingsView, testView, matchSettingsView, matchView, matchResultView, compactListView];

    renderCourses();
    setupEventListeners();
    renderLearningBookPanel();
    updateSpeechMuteButtons();
    updateFullscreenButton();

    // Apply saved theme
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark') applyTheme(true);

    document.addEventListener('fullscreenchange', updateFullscreenButton);

    // Initial history state
    history.replaceState({ viewId: 'courseView' }, "", "");
}

function setupEventListeners() {
    // Course → Set navigation
    document.getElementById('backToCoursesBtn').addEventListener('click', function() { playSound('slide'); switchView(courseView); });
    document.getElementById('backToSetsBtn').addEventListener('click', function() { playSound('slide'); returnFromWordList(); });
    document.getElementById('backFromFlashcardBtn').addEventListener('click', function() { playSound('slide'); switchView(wordListView); });
    document.getElementById('backFromListBtn').addEventListener('click', function() { playSound('slide'); switchView(wordListView); });

    // Word List view actions
    document.getElementById('btnFlashcard').addEventListener('click', openFlashcardView);
    document.getElementById('btnLearn').addEventListener('click', startLearnMode);
    document.getElementById('btnTest').addEventListener('click', openTestSettings);
    document.getElementById('btnMatch').addEventListener('click', openMatchSettings);
    document.getElementById('learningBookSection').addEventListener('click', openLearningBookList);
    document.getElementById('learningBookReviewBtn').addEventListener('click', function(e) { e.stopPropagation(); openLearningBookReview(courseView); });
    document.getElementById('courseReviewShortcutBtn').addEventListener('click', function() { openLearningBookReview(courseView); });
    document.getElementById('setReviewShortcutBtn').addEventListener('click', function() { openLearningBookReview(setView); });

    // WL flashcard interactions
    document.getElementById('wlFlashcard').addEventListener('click', function() {
        playSound('flip');
        document.getElementById('wlFlashcard').classList.toggle('flipped');
    });
    document.getElementById('wlStarBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        if (!currentSet || !currentSet.activeWords.length) return;
        var wordId = currentSet.activeWords[currentCardIndex];
        var wData = getWordData(wordId);
        saveProgress(wordId, { isFavorite: !wData.isFavorite });
        updateWLFlashcard();
        updateFlashcard();
        renderWordCards();
        playSound('flip');
    });
    document.getElementById('wlSpeakerBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentSet && currentSet.activeWords[currentCardIndex]) speak(currentSet.activeWords[currentCardIndex], 1.0);
    });
    document.getElementById('wlSnailBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentSet && currentSet.activeWords[currentCardIndex]) speak(currentSet.activeWords[currentCardIndex], 0.6);
    });

    // WL flashcard swipe
    var wlSlider = document.getElementById('wlCardSlider');
    var wlTouchStartX = 0, wlTouchStartY = 0;
    wlSlider.addEventListener('touchstart', function(e) { wlTouchStartX = e.touches[0].clientX; wlTouchStartY = e.touches[0].clientY; }, { passive: true });
    wlSlider.addEventListener('touchend', function(e) {
        var dx = e.changedTouches[0].clientX - wlTouchStartX;
        var dy = e.changedTouches[0].clientY - wlTouchStartY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
            if (dx < 0) navigateWLFlashcard(1); else navigateWLFlashcard(-1);
        }
    }, { passive: true });
    
    var wlIsDown = false; var wlStartX;
    wlSlider.addEventListener('mousedown', function(e) { wlIsDown = true; wlStartX = e.pageX; });
    wlSlider.addEventListener('mouseleave', function() { wlIsDown = false; });
    wlSlider.addEventListener('mouseup', function(e) {
        if (!wlIsDown) return; wlIsDown = false;
        var dx = e.pageX - wlStartX;
        if (Math.abs(dx) > 50) { if (dx < 0) navigateWLFlashcard(1); else navigateWLFlashcard(-1); }
    });

    // Word List Toggle Switch
    var toggleBtn = document.getElementById('wlModeToggleBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            isWordListSetMode = !isWordListSetMode;
            e.target.textContent = isWordListSetMode ? 'Original' : 'Set';
            renderWordCards();
        });
    }

    // Flashcard view interactions
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('prevBtn').addEventListener('click', function() { navigateFlashcard(-1); });
    document.getElementById('nextBtn').addEventListener('click', function() { navigateFlashcard(1); });
    document.getElementById('starBtn').addEventListener('click', function(e) { e.stopPropagation(); toggleFavorite(); });
    document.getElementById('transBtn').addEventListener('click', function(e) { e.stopPropagation(); toggleFrontTrans(); });
    document.getElementById('fcSpeakerBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentSet && currentSet.activeWords[currentCardIndex]) speak(currentSet.activeWords[currentCardIndex], 1.0);
    });
    document.getElementById('fcSnailBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentSet && currentSet.activeWords[currentCardIndex]) speak(currentSet.activeWords[currentCardIndex], 0.6);
    });
    // Flashcard swipe
    var fcSlider = document.getElementById('cardSlider');
    var fcTouchStartX = 0, fcTouchStartY = 0;
    fcSlider.addEventListener('touchstart', function(e) { fcTouchStartX = e.touches[0].clientX; fcTouchStartY = e.touches[0].clientY; }, { passive: true });
    fcSlider.addEventListener('touchend', function(e) {
        var dx = e.changedTouches[0].clientX - fcTouchStartX;
        var dy = e.changedTouches[0].clientY - fcTouchStartY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
            if (dx < 0) navigateFlashcard(1); else navigateFlashcard(-1);
        }
    }, { passive: true });
    
    var fcIsDown = false; var fcStartX;
    fcSlider.addEventListener('mousedown', function(e) { fcIsDown = true; fcStartX = e.pageX; });
    fcSlider.addEventListener('mouseleave', function() { fcIsDown = false; });
    fcSlider.addEventListener('mouseup', function(e) {
        if (!fcIsDown) return; fcIsDown = false;
        var dx = e.pageX - fcStartX;
        if (Math.abs(dx) > 50) { if (dx < 0) navigateFlashcard(1); else navigateFlashcard(-1); }
    });

    // Learn exit
    document.querySelectorAll('.exit-learn-btn').forEach(function(b) { b.addEventListener('click', function() { requestExit(function() { switchView(wordListView); }); }); });

    // Test
    document.getElementById('closeTestSettingsBtn').addEventListener('click', function() { playSound('slide'); returnFromTest(); });
    document.getElementById('startTestBtn').addEventListener('click', startTest);
    document.querySelectorAll('.exit-test-btn').forEach(function(b) { b.addEventListener('click', function() { requestExit(function() { returnFromTest(); }); }); });

    // Match
    document.getElementById('closeMatchSettingsBtn').addEventListener('click', function() { playSound('slide'); switchView(wordListView); });
    document.getElementById('startMatchBtn').addEventListener('click', startMatch);
    document.getElementById('matchRefill').addEventListener('change', syncMatchRefillSettings);
    document.querySelectorAll('.exit-match-btn').forEach(function(b) { b.addEventListener('click', function() {
        clearMatchRefillTimeouts();
        clearInterval(matchTimerInterval);
        switchView(wordListView);
    }); });
    document.getElementById('matchRetryBtn').addEventListener('click', startMatch);
    document.getElementById('matchBackBtn').addEventListener('click', function() { switchView(wordListView); });

    // Result & Confirm panels
    document.getElementById('resultContinueBtn').addEventListener('click', function() { closeResultPanel(); nextLearnStep(); });
    document.getElementById('confirmExitBtn').addEventListener('click', confirmPendingAction);
    document.getElementById('cancelExitBtn').addEventListener('click', cancelExit);

    // Settings
    document.querySelectorAll('.settings-open-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            openSettings();
        });
    });
    document.getElementById('closeSettingsBtn').addEventListener('click', closeSettings);
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    document.getElementById('settingsMuteBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSpeechMute();
    });
    document.getElementById('settingsFullscreenBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        toggleFullscreen();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (flashcardView && !flashcardView.classList.contains('hidden-view')) {
            if (e.key === 'ArrowLeft') navigateFlashcard(-1);
            if (e.key === 'ArrowRight') navigateFlashcard(1);
            if (e.key === ' ') { e.preventDefault(); flipCard(); }
        }
        if (wordListView && !wordListView.classList.contains('hidden-view')) {
            // Check if focus is NOT on an input (prevents jumping around instead of typing)
            if (document.activeElement.tagName !== 'INPUT') {
                if (e.key === 'ArrowLeft') navigateWLFlashcard(-1);
                if (e.key === 'ArrowRight') navigateWLFlashcard(1);
            }
        }
        if (learnView && !learnView.classList.contains('hidden-view')) {
            if (e.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
                var checkBtn = document.querySelector('#learnActionTray .learn-primary-btn');
                if (checkBtn) checkBtn.click();
            }
        }
        if (testView && !testView.classList.contains('hidden-view')) {
            if (e.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
                var submitBtn = document.querySelector('#testContentArea .primary-btn');
                if (submitBtn) submitBtn.click();
            } else if (e.key === 'Enter') {
                var continueBtn = document.getElementById('testContinueBtn');
                if (continueBtn) {
                    e.preventDefault();
                    continueBtn.click();
                }
            }
        }
        if (e.key === ' ' || e.key === 'Enter') {
            if (resultPanel && resultPanel.style.transform === 'translateY(0px)') { e.preventDefault(); closeResultPanel(); nextLearnStep(); }
            else if (confirmPanel && confirmPanel.classList.contains('show')) { e.preventDefault(); if (e.key === ' ') cancelExit(); }
            else if (learnView && !learnView.classList.contains('hidden-view') && learnStep === 1) {
                var continueBtn = document.getElementById('learnContinueBtn');
                if (continueBtn) { e.preventDefault(); continueBtn.click(); }
            }
        }
        if (e.key === 'Escape') {
            if (confirmPanel && confirmPanel.classList.contains('show')) cancelExit();
            closeSettings();
        }
    });
}

// Start the app
init();
console.log('[FoxyVocab] script.js: fully loaded');
