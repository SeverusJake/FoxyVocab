// === FoxyVocab Script ===
console.log('[FoxyVocab] script.js: loading started');

// === STATE ===
var STORAGE_KEY = 'foxyVocabProgress';
var userProgress = {};
var currentCourse = null;
var currentSet = null;
var currentCardIndex = 0;
var learnStep = 1;
var learnMistakes = 0;
var learnIndex = 0;
var isAnimating = false;
var pendingExitCallback = null;
var isWordListSetMode = false;

// Match state
var matchWords = [];
var matchCards = [];
var matchSelected = null;
var matchWrong = 0;
var matchPairs = 0;
var matchTimerInterval = null;
var matchStartTime = 0;

// Test state
var testQuestions = [];
var testIndex = 0;
var testScore = 0;
var testConfig = {};
var testAnswers = [];

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
    var progress = userProgress[wordId] || { isFavorite: false, learned: false, quizCorrectCount: 0, isKnown: false };
    return Object.assign({ word: wordId }, staticData, progress);
}

function saveProgress(wordId, updates) {
    if (!userProgress[wordId]) userProgress[wordId] = { isFavorite: false, learned: false, quizCorrectCount: 0, isKnown: false };
    Object.assign(userProgress[wordId], updates);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress)); } catch(e) { console.warn('[FoxyVocab] localStorage write failed:', e); }
}

function speak(text, rate) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        window.speechSynthesis.speak(utterance);
    }
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
        }
    } catch(e) { /* audio failure is non-critical */ }
}

// === VIEW MANAGEMENT ===
var allViews = [];
function switchView(targetView, playIntro) {
    allViews.forEach(function(v) { v.classList.add('hidden-view'); v.classList.remove('fade-in'); });
    targetView.classList.remove('hidden-view');
    void targetView.offsetWidth;
    targetView.classList.add('fade-in');
    if (playIntro) playSound('intro'); else playSound('slide');
}

// === DOM REFS ===
var courseView, setView, wordListView, flashcardView, learnView, testSettingsView, testView, matchView, matchResultView, compactListView;
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
        html += '<div class="set-card" data-set-id="' + set.id + '" role="button" tabindex="0">' +
            '<div class="set-card-number">' + (idx + 1) + '</div>' +
            '<div class="set-card-info">' +
                '<h3 class="font-display text-sm font-bold">' + escapeHtml(set.title) + '</h3>' +
                '<p class="text-xs" style="color:var(--text-muted)">' + set.words.length + ' terms</p>' +
            '</div>' +
            '<div class="set-card-arrow">›</div>' +
        '</div>';
    });
    grid.innerHTML = html;
    grid.querySelectorAll('[data-set-id]').forEach(function(el) {
        el.addEventListener('click', function() { selectSet(el.dataset.setId); });
    });
}

function selectSet(setId) {
    currentSet = null;
    currentCourse.sets.forEach(function(s) { if (s.id === setId) currentSet = s; });
    if (!currentSet) return;

    // Sort words by CEFR
    var cefrRank = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6, 'Uncategorized': 7 };
    currentSet.sortedWords = currentSet.words.slice().sort(function(a, b) {
        var ca = (dictionary[a] && dictionary[a].cefr) || 'Uncategorized';
        var cb = (dictionary[b] && dictionary[b].cefr) || 'Uncategorized';
        return (cefrRank[ca] || 7) - (cefrRank[cb] || 7);
    });
    currentSet.activeWords = currentSet.sortedWords.filter(function(wId) { return !getWordData(wId).isKnown; });
    if (currentSet.activeWords.length === 0) currentSet.activeWords = currentSet.sortedWords.slice();

    currentCardIndex = 0;
    renderWordListView();
    switchView(wordListView);
}

// ═══════════════════════════════════
// WORD LIST VIEW (View 3)
// ═══════════════════════════════════
function renderWordListView() {
    document.getElementById('wordListTitle').textContent = currentCourse.title.toUpperCase();
    document.getElementById('wlSetName').textContent = currentSet.title;
    document.getElementById('wlTermCount').textContent = currentSet.words.length + ' terms';
    updateWLFlashcard();
    renderWordCards();
}

function updateWLFlashcard() {
    if (!currentSet || !currentSet.activeWords.length) return;
    var wData = getWordData(currentSet.activeWords[currentCardIndex]);
    document.getElementById('wlWordFront').textContent = wData.word;
    document.getElementById('wlWordBack').textContent = wData.word;
    document.getElementById('wlPronBack').textContent = wData.pron || '';
    document.getElementById('wlTransBack').textContent = (wData.vietnamese || '') + ' (' + (wData.pos || '') + ')';

    var learnedIcon = document.getElementById('wlStatusLearned');
    learnedIcon.classList.toggle('active', !!wData.learned);

    var starBtn = document.getElementById('wlStarBtn');
    starBtn.textContent = wData.isFavorite ? '★' : '☆';
    starBtn.classList.toggle('active', !!wData.isFavorite);

    // Update carousel dots
    var dotsContainer = document.getElementById('carouselDots');
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

    wordsToRender.forEach(function(wordId) {
        var wData = getWordData(wordId);
        var isFav = wData.isFavorite;
        var favIcon = isFav ? '★' : '☆';
        var starClass = isFav ? 'word-card-btn star-active' : 'word-card-btn';
        var safeWordStr = escapeHtml(wData.word).replace(/'/g, "\\'");
        
        if (isWordListSetMode) {
            var cardClass = wData.isKnown ? 'word-card is-known' : 'word-card';
            var toggleMeaningStr = 'onclick="var el=this.querySelector(\'.word-card-meaning\'); el.style.display=el.style.display===\'none\'?\'block\':\'none\'"';
            html += '<div class="' + cardClass + '" style="cursor:pointer;" ' + toggleMeaningStr + '>' +
                '<div class="word-card-top">' +
                    '<span class="word-card-term">' + escapeHtml(wData.word) + '</span>' +
                    '<div class="word-card-actions">' +
                        '<button class="word-card-btn" onclick="event.stopPropagation(); speak(\'' + safeWordStr + '\', 1.0)">🔊</button>' +
                        '<div style="display:flex; flex-direction:column; gap:4px;">' +
                            '<button class="' + starClass + '" onclick="event.stopPropagation(); toggleFavoriteWord(\'' + safeWordStr + '\', this)">' + favIcon + '</button>' +
                            '<button class="word-card-btn" onclick="event.stopPropagation(); toggleWordKnown(\'' + safeWordStr + '\')">🎓</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="word-card-bottom">' +
                    '<span class="word-card-meaning" style="display:none;">(' + (wData.pos || '') + ') ' + escapeHtml(wData.vietnamese || '') + '</span>' +
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
                    '<span class="word-card-meaning">(' + (wData.pos || '') + ') ' + escapeHtml(wData.vietnamese || '') + '</span>' +
                '</div>' +
            '</div>';
        }
    });
    container.innerHTML = html;
}

function toggleWordKnown(wordId) {
    var wData = getWordData(wordId);
    saveProgress(wordId, { isKnown: !wData.isKnown });
    currentSet.activeWords = currentSet.sortedWords.filter(function(wId) { return !getWordData(wId).isKnown; });
    if (currentSet.activeWords.length === 0) currentSet.activeWords = currentSet.sortedWords.slice();
    renderWordCards();
    updateWLFlashcard();
    playSound('flip');
}

function toggleFavoriteWord(wordId, btn) {
    var wData = getWordData(wordId);
    var isFav = !wData.isFavorite;
    saveProgress(wordId, { isFavorite: isFav });
    if (btn) {
        btn.textContent = isFav ? '★' : '☆';
        btn.classList.toggle('star-active', isFav);
    }
    playSound('flip');
}

// ═══════════════════════════════════
// FLASHCARD VIEW
// ═══════════════════════════════════
function openFlashcardView() {
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
    document.getElementById('transBack').textContent = (cardData.vietnamese || '') + ' (' + (cardData.pos || '') + ')';

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

function toggleFavorite() {
    playSound('flip');
    var wordId = currentSet.activeWords[currentCardIndex];
    var wData = getWordData(wordId);
    saveProgress(wordId, { isFavorite: !wData.isFavorite });
    updateFlashcard();
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

    if (learnStep === 1) {
        speak(w.word, 1.0);
        html = '<div class="flashcard-wrapper mb-8">' +
            '<div class="border-btn-group">' +
                '<button class="border-btn speaker" onclick="event.stopPropagation(); speak(\'' + safeWord + '\', 1.0)">🔊</button>' +
                '<button class="border-btn snail" onclick="event.stopPropagation(); speak(\'' + safeWord + '\', 0.6)">🐌</button>' +
            '</div>' +
            '<div class="card-container">' +
                '<div class="card" onclick="playSound(\'flip\'); this.classList.toggle(\'flipped\')">' +
                    '<div class="card-face card-front flex flex-col justify-center">' +
                        '<h2 class="font-display text-3xl font-bold neon-text-cyan text-center">' + escapeHtml(w.word) + '</h2>' +
                        '<p class="text-[var(--text-muted)] mt-6 text-sm italic">' + escapeHtml(w.definition || '') + '</p>' +
                    '</div>' +
                    '<div class="card-face card-back flex flex-col justify-center">' +
                        '<h2 class="font-display text-2xl font-bold neon-text-magenta text-center mb-2">' + escapeHtml(w.word) + '</h2>' +
                        '<p class="text-xs mb-4" style="color: var(--blue)">' + escapeHtml(w.pron || '') + '</p>' +
                        '<p class="text-sm neon-text-green mb-4">' + escapeHtml(w.vietnamese || '') + ' (' + (w.pos || '') + ')</p>' +
                        '<p class="text-base text-center">' + escapeHtml(w.definition || '') + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="absolute bottom-4 left-0 w-full flex flex-col items-center gap-3 px-6 z-20">' +
            '<button class="nav-btn" id="learnContinueBtn" onclick="nextLearnStep()" style="width:100%; max-width:300px; padding: 1rem; box-shadow: var(--shadow-md);">CONTINUE</button>' +
            '<button class="underline-btn bg-transparent font-bold pb-2" onclick="skipWord()" style="text-shadow: 0 1px 3px rgba(0,0,0,0.8);">I already know this word</button>' +
        '</div>';
        
        // Ensure parent is relative and tall enough
        var lca = document.getElementById('learnContentArea');
        if(lca) { lca.classList.add('relative'); lca.style.minHeight = '400px'; }
    } else if (learnStep === 2) {
        speak(w.word, 1.0);
        html = '<div class="text-center mb-6 w-full"><h2 class="font-display text-xl neon-text-cyan mb-2">Listen and rewrite</h2></div>' +
            '<div class="flex gap-4 mb-8">' +
                '<button class="border-btn speaker" onclick="speak(\'' + safeWord + '\', 1.0)">🔊</button>' +
                '<button class="border-btn snail" onclick="speak(\'' + safeWord + '\', 0.6)">🐌</button>' +
            '</div>' +
            '<input type="text" id="learnInput" class="mb-6" placeholder="Type what you hear" style="max-width:300px">' +
            '<button class="nav-btn" onclick="checkLearn(2)" style="width:150px">CHECK</button>';
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
            '<button class="border-btn speaker mb-4" onclick="speak(\'' + safeWord + '\', 1.0)" style="position:relative">🔊</button>' +
            '<p class="text-lg text-center mb-4 neon-text-green">' + escapeHtml(w.vietnamese || '') + '</p>' +
            '<div class="hint-display mb-6">' + displayHtml + '</div>' +
            '<input type="text" id="learnInput" class="mb-6" placeholder="Type the word" style="max-width:300px">' +
            '<button class="nav-btn" onclick="checkLearn(3)" style="width:150px">CHECK</button>';
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
        '<p class="text-xl mb-8">You finished the lesson!</p>' +
        '<button class="nav-btn" onclick="exitConfirmed(function(){ switchView(wordListView); })">BACK</button>';
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
    trans.textContent = (wordData.vietnamese || '') + ' (' + (wordData.pos || '') + ')';
    def.textContent = wordData.definition || '';
    panel.style.transform = 'translateY(0)';
}
function closeResultPanel() { document.getElementById('resultPanel').style.transform = 'translateY(100%)'; }

// ═══════════════════════════════════
// TEST MODE
// ═══════════════════════════════════
function openTestSettings() {
    document.getElementById('testSettingsCourse').textContent = currentSet.title;
    var maxQ = currentSet.words.length;
    document.getElementById('testMaxLabel').textContent = '(max ' + maxQ + ')';
    var countInput = document.getElementById('testQuestionCount');
    countInput.max = maxQ;
    if (parseInt(countInput.value) > maxQ) countInput.value = maxQ;
    switchView(testSettingsView);
}

function startTest() {
    var qCount = parseInt(document.getElementById('testQuestionCount').value) || 20;
    var maxQ = currentSet.words.length;
    if (qCount > maxQ) qCount = maxQ;
    if (qCount < 1) qCount = 1;

    testConfig = {
        count: qCount,
        instantFeedback: document.getElementById('testInstantFeedback').checked,
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

    var wordPool = shuffle(currentSet.words.slice());
    testQuestions = [];
    for (var i = 0; i < qCount; i++) {
        var q = { wordId: wordPool[i], type: enabledTypes[i % enabledTypes.length] };
        if (q.type === 'tf') {
            var dists = wordPool.filter(function(id) { return id !== q.wordId; });
            q.distractorId = dists[Math.floor(Math.random() * dists.length)];
        } else if (q.type === 'mc') {
            var options = [q.wordId];
            while (options.length < 4 && options.length < wordPool.length) {
                var randId = wordPool[Math.floor(Math.random() * wordPool.length)];
                if (options.indexOf(randId) === -1) options.push(randId);
            }
            q.options = shuffle(options);
            q._isEngPrompt = Math.random() > 0.5;
        }
        testQuestions.push(q);
    }
    testQuestions = shuffle(testQuestions);

    testIndex = 0;
    testScore = 0;
    testAnswers = [];
    renderTestQuestion();
    switchView(testView, true);
}

function renderTestQuestion() {
    if (testIndex >= testQuestions.length) { showTestResults(); return; }
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
            '<p class="test-definition mb-6 text-lg">(' + (w.pos || '') + ') ' + escapeHtml(w.vietnamese || '') + '</p>' +
        '</div>' +
        '<div class="test-options-col">' +
            '<button class="test-option-btn text-center font-bold text-lg py-4" onclick="answerTest(true, this)">True</button>' +
            '<button class="test-option-btn text-center font-bold text-lg py-4" onclick="answerTest(false, this)">False</button>' +
        '</div>';
    } else if (q.type === 'mc') {
        var w = getWordData(q.wordId);
        var optsHtml = '';
        q.options.forEach(function(optId, idx) {
            var optW = getWordData(optId);
            var optText = q._isEngPrompt ? ('(' + (optW.pos || '') + ') ' + escapeHtml(optW.vietnamese || '')) : escapeHtml(optW.word);
            optsHtml += '<button class="test-option-btn text-left" onclick="answerTest(' + idx + ', this)">' + optText + '</button>';
        });
        
        var promptText = q._isEngPrompt ? escapeHtml(w.word) : ('(' + (w.pos || '') + ') ' + escapeHtml(w.vietnamese || ''));
        if (q._isEngPrompt && testConfig.speak) { speak(w.word, 1.0); }

        html = '<div class="test-question-area">' +
            '<p class="' + (q._isEngPrompt ? 'test-term text-3xl mb-4 text-[var(--blue)] font-bold' : 'test-definition text-xl mb-4') + '">' + promptText + '</p>' +
            '<p class="test-label mt-4">Select the correct matching term</p>' +
            '<div class="test-options-col">' + optsHtml + '</div>' +
        '</div>';
    } else if (q.type === 'written' || q.type === 'fillin') {
        var w = getWordData(q.wordId);
        var keysHtml = '';
        'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').forEach(function(ch) {
            keysHtml += '<button class="key-btn" onclick="document.getElementById(\'testWrittenInput\').value += \'' + ch + '\'">' + ch + '</button>';
        });
        keysHtml += '<button class="key-btn backspace" onclick="var el=document.getElementById(\'testWrittenInput\'); el.value=el.value.slice(0, -1);">⌫</button>';
        
        var promptHtml = '';
        if (q.type === 'fillin') {
            var exStr = w.example || w.definition || '';
            var re = new RegExp(w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gi");
            var blanked = exStr.replace(re, "______");
            if (blanked === exStr && w.example) blanked = exStr + " (______)";
            promptHtml = '<p class="test-label mt-2 mb-2 text-md italic" style="color:var(--blue)">Fill in the blank:</p>' +
                         '<p class="test-term text-xl mb-6 font-bold truncate text-wrap">' + escapeHtml(blanked) + '</p>';
        } else {
            promptHtml = '<p class="test-definition">(' + (w.pos || '') + ') ' + escapeHtml(w.vietnamese || '') + '</p>';
        }

        html = '<div class="test-question-area">' +
            promptHtml +
            '<p class="test-label mt-6">Your answer</p>' +
            '<div class="test-written-input-wrap">' +
                '<input type="text" class="test-written-input" id="testWrittenInput" placeholder="Type the answer">' +
            '</div>' +
            '<div class="visual-keyboard">' + keysHtml + '</div>' +
            '<button class="primary-btn mt-4 mx-auto" onclick="answerTestWritten(document.getElementById(\'testWrittenInput\').value)" style="width:200px">Submit</button>' +
        '</div>';
    }
    area.innerHTML = html;
    var writtenInput = document.getElementById('testWrittenInput');
    if (writtenInput) writtenInput.focus();
}

function answerTest(val, btn) {
    var q = testQuestions[testIndex];
    var isCorrect = false;
    if (q.type === 'tf') {
        isCorrect = (val === q._isTrue);
    } else if (q.type === 'mc') {
        isCorrect = (q.options[val] === q.wordId);
    }

    if (isCorrect) { playSound('correct'); testScore++; }
    else { playSound('wrong'); }

    var buttons = btn.parentElement.querySelectorAll('.test-option-btn');
    buttons.forEach(function(b, i) { 
        b.disabled = true; 
        if (q.type === 'tf') {
            if ((i === 0 ? true : false) === q._isTrue) b.classList.add('correct');
        } else if (q.type === 'mc') {
            if (q.options[i] === q.wordId) b.classList.add('correct');
        }
    });
    if (!isCorrect) btn.classList.add('wrong');

    if (testConfig.speak && q.type !== 'tf' && !q._isEngPrompt) { speak(getWordData(q.wordId).word, 1.0); }

    testAnswers.push({ wordId: q.wordId, correct: isCorrect, type: q.type });
    setTimeout(function() { testIndex++; renderTestQuestion(); }, 1000);
}

function answerTestWritten(value) {
    var q = testQuestions[testIndex];
    var w = getWordData(q.wordId);
    var isCorrect = value !== null && value.trim().toLowerCase() === w.word.toLowerCase();
    if (isCorrect) { playSound('correct'); testScore++; }
    else { playSound('wrong'); }

    if (testConfig.speak) { speak(w.word, 1.0); }

    testAnswers.push({ wordId: q.wordId, correct: isCorrect, type: q.type });

    if (testConfig.instantFeedback) {
        showResultPanel(isCorrect, w);
        setTimeout(function() { closeResultPanel(); testIndex++; renderTestQuestion(); }, 2500);
    } else {
        setTimeout(function() { testIndex++; renderTestQuestion(); }, 500);
    }
}

function showTestResults() {
    var area = document.getElementById('testContentArea');
    var pct = Math.round((testScore / testQuestions.length) * 100);
    var emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '😅';
    area.innerHTML = '<div class="flex flex-col items-center justify-center h-full">' +
        '<div class="text-6xl mb-4">' + emoji + '</div>' +
        '<h2 class="font-display text-2xl font-bold neon-text-green mb-2">Test Complete!</h2>' +
        '<p class="text-3xl font-bold mb-2" style="color:var(--text)">' + testScore + ' / ' + testQuestions.length + '</p>' +
        '<p class="text-sm mb-6" style="color:var(--text-muted)">' + pct + '% correct</p>' +
        '<div class="flex flex-col gap-3 w-full" style="max-width:300px">' +
            '<button class="primary-btn w-full" onclick="startTest()">Try Again</button>' +
            '<button class="nav-btn w-full" onclick="switchView(wordListView)">Back to Set</button>' +
        '</div>' +
    '</div>';
    playSound('win');
}

// ═══════════════════════════════════
// MATCH GAME
// ═══════════════════════════════════
function startMatch() {
    var pool = shuffle(currentSet.words.slice()).slice(0, 6);
    matchWords = pool;
    matchCards = [];
    pool.forEach(function(wordId) {
        var w = getWordData(wordId);
        matchCards.push({ id: wordId + '_en', pairId: wordId, text: w.word, type: 'en' });
        matchCards.push({ id: wordId + '_vi', pairId: wordId, text: w.vietnamese || '', type: 'vi' });
    });
    matchCards = shuffle(matchCards);
    matchSelected = null;
    matchWrong = 0;
    matchPairs = 0;
    matchStartTime = Date.now();

    renderMatchGrid();
    startMatchTimer();
    switchView(matchView, true);
}

function renderMatchGrid() {
    var grid = document.getElementById('matchGrid');
    var html = '';
    matchCards.forEach(function(card, idx) {
        html += '<div class="match-card" data-idx="' + idx + '" onclick="selectMatchCard(' + idx + ')">' +
            '<span class="match-card-text">' + escapeHtml(card.text) + '</span>' +
        '</div>';
    });
    grid.innerHTML = html;
}

function startMatchTimer() {
    var timerEl = document.getElementById('matchTimer');
    if (matchTimerInterval) clearInterval(matchTimerInterval);
    matchTimerInterval = setInterval(function() {
        var elapsed = ((Date.now() - matchStartTime) / 1000).toFixed(1);
        timerEl.textContent = elapsed + ' seconds';
    }, 100);
}

function selectMatchCard(idx) {
    var cardEl = document.querySelector('.match-card[data-idx="' + idx + '"]');
    if (!cardEl || cardEl.classList.contains('matched') || cardEl.classList.contains('selected')) return;

    if (matchSelected === null) {
        matchSelected = idx;
        cardEl.classList.add('selected');
    } else {
        var firstIdx = matchSelected;
        var firstEl = document.querySelector('.match-card[data-idx="' + firstIdx + '"]');
        cardEl.classList.add('selected');

        var card1 = matchCards[firstIdx];
        var card2 = matchCards[idx];

        if (card1.pairId === card2.pairId && card1.type !== card2.type) {
            // Match found!
            playSound('correct');
            firstEl.classList.remove('selected');
            cardEl.classList.remove('selected');
            firstEl.classList.add('matched');
            cardEl.classList.add('matched');
            matchPairs++;
            if (matchPairs >= matchWords.length) {
                // Game complete
                clearInterval(matchTimerInterval);
                setTimeout(function() { showMatchResults(); }, 600);
            }
        } else {
            // No match
            playSound('wrong');
            matchWrong++;
            firstEl.classList.add('wrong');
            cardEl.classList.add('wrong');
            setTimeout(function() {
                firstEl.classList.remove('selected', 'wrong');
                cardEl.classList.remove('selected', 'wrong');
            }, 600);
        }
        matchSelected = null;
    }
}

function showMatchResults() {
    var elapsed = ((Date.now() - matchStartTime) / 1000).toFixed(1);
    document.getElementById('matchResultTime').textContent = elapsed + 's';
    document.getElementById('matchResultWrong').textContent = matchWrong;
    switchView(matchResultView);
}

// ═══════════════════════════════════
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
                    '<p class="text-sm neon-text-green max-h-0 overflow-hidden transition-all duration-300 opacity-0" id="listTrans_' + index + '" style="margin-top:0px">' + escapeHtml(wData.vietnamese || '') + '</p>' +
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
    saveProgress(wordId, { isKnown: newState });
    currentSet.activeWords = currentSet.sortedWords.filter(function(wId) { return !getWordData(wId).isKnown; });
    if (currentSet.activeWords.length === 0) currentSet.activeWords = currentSet.sortedWords.slice();
    if (btn) { if (newState) btn.classList.add('active'); else btn.classList.remove('active'); }
}

// ═══════════════════════════════════
// EXIT LOGIC
// ═══════════════════════════════════
function requestExit(callback) { playSound('alert'); pendingExitCallback = callback; confirmPanel.classList.add('show'); }
function exitConfirmed(callback) { playSound('slide'); confirmPanel.classList.remove('show'); closeResultPanel(); if (callback) callback(); }
function cancelExit() { playSound('slide'); confirmPanel.classList.remove('show'); pendingExitCallback = null; }

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

    try { userProgress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch(e) { userProgress = {}; }

    // Cache DOM refs
    courseView = document.getElementById('courseView');
    setView = document.getElementById('setView');
    wordListView = document.getElementById('wordListView');
    flashcardView = document.getElementById('flashcardView');
    learnView = document.getElementById('learnView');
    testSettingsView = document.getElementById('testSettingsView');
    testView = document.getElementById('testView');
    matchView = document.getElementById('matchView');
    matchResultView = document.getElementById('matchResultView');
    compactListView = document.getElementById('compactListView');
    resultPanel = document.getElementById('resultPanel');
    confirmPanel = document.getElementById('confirmPanel');

    allViews = [courseView, setView, wordListView, flashcardView, learnView, testSettingsView, testView, matchView, matchResultView, compactListView];

    renderCourses();
    setupEventListeners();

    // Apply saved theme
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark') applyTheme(true);
}

function setupEventListeners() {
    // Course → Set navigation
    document.getElementById('backToCoursesBtn').addEventListener('click', function() { playSound('slide'); switchView(courseView); });
    document.getElementById('backToSetsBtn').addEventListener('click', function() { playSound('slide'); switchView(setView); });
    document.getElementById('backFromFlashcardBtn').addEventListener('click', function() { playSound('slide'); switchView(wordListView); });
    document.getElementById('backFromListBtn').addEventListener('click', function() { playSound('slide'); switchView(wordListView); });

    // Word List view actions
    document.getElementById('btnFlashcard').addEventListener('click', openFlashcardView);
    document.getElementById('btnLearn').addEventListener('click', startLearnMode);
    document.getElementById('btnTest').addEventListener('click', openTestSettings);
    document.getElementById('btnMatch').addEventListener('click', startMatch);

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
    document.getElementById('closeTestSettingsBtn').addEventListener('click', function() { playSound('slide'); switchView(wordListView); });
    document.getElementById('startTestBtn').addEventListener('click', startTest);
    document.querySelectorAll('.exit-test-btn').forEach(function(b) { b.addEventListener('click', function() { requestExit(function() { switchView(wordListView); }); }); });

    // Match
    document.querySelectorAll('.exit-match-btn').forEach(function(b) { b.addEventListener('click', function() {
        clearInterval(matchTimerInterval);
        switchView(wordListView);
    }); });
    document.getElementById('matchRetryBtn').addEventListener('click', startMatch);
    document.getElementById('matchBackBtn').addEventListener('click', function() { switchView(wordListView); });

    // Result & Confirm panels
    document.getElementById('resultContinueBtn').addEventListener('click', function() { closeResultPanel(); nextLearnStep(); });
    document.getElementById('confirmExitBtn').addEventListener('click', function() { if (pendingExitCallback) exitConfirmed(pendingExitCallback); });
    document.getElementById('cancelExitBtn').addEventListener('click', cancelExit);

    // Settings
    document.getElementById('settingsBtn').addEventListener('click', openSettings);
    document.getElementById('closeSettingsBtn').addEventListener('click', closeSettings);
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

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
                var checkBtn = document.querySelector('#learnContentArea .nav-btn:last-of-type');
                if (checkBtn) checkBtn.click();
            }
        }
        if (testView && !testView.classList.contains('hidden-view')) {
            if (e.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
                var submitBtn = document.querySelector('#testContentArea .primary-btn');
                if (submitBtn) submitBtn.click();
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