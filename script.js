// === STATE ===
const STORAGE_KEY = 'foxyVocabProgress';
let userProgress = {};
let currentTopic = null;
let currentCardIndex = 0;
let learnStep = 1;
let learnMistakes = 0;
let learnIndex = 0;
let isAnimating = false;
let pendingExitCallback = null;
let viewMode = 'grid'; // 'grid' or 'list'

function getWordData(wordId) {
    const staticData = dictionary[wordId];
    const progress = userProgress[wordId] || { isFavorite: false, learned: false, quizCorrectCount: 0, isKnown: false };
    return { word: wordId, ...staticData, ...progress };
}

function saveProgress(wordId, updates) {
    if (!userProgress[wordId]) userProgress[wordId] = { isFavorite: false, learned: false, quizCorrectCount: 0 };
    userProgress[wordId] = { ...userProgress[wordId], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
}

// Hangman State
let hangmanWord = null;
let previousWord = null; 
let guessedLetters = [];
let wrongGuesses = 0;
let gameOver = false;
let gameWords = []; 
let hangmanStreak = 0;

// Quiz State
let quizIndex = 0;
let quizScore = 0;
let quizQuestions = [];

// === DOM ELEMENTS ===
const topicView = document.getElementById('topicView');
const flashcardView = document.getElementById('flashcardView');
const hangmanView = document.getElementById('hangmanView');
const learnView = document.getElementById('learnView');
const quizView = document.getElementById('quizView');
const compactListView = document.getElementById('compactListView');
const topicGrid = document.getElementById('topicGrid');
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');
const resultPanel = document.getElementById('resultPanel');
const confirmPanel = document.getElementById('confirmPanel');

// === INITIALIZATION ===
function init() {
    if (typeof topicsData !== 'undefined' && typeof dictionary !== 'undefined') {
        userProgress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        renderTopics();
        setupEventListeners();
    } else {
        document.getElementById('topicGrid').innerHTML = '<div class="text-red-500 text-center p-10">Failed to load topics/dictionary. Make sure data.js is loaded properly.</div>';
    }
}

// === AUDIO (Web Audio API) ===
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx; 

function initAudioContext() { if (!audioCtx) audioCtx = new AudioContext(); }

function playSound(type) {
    initAudioContext();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

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
        osc.type = 'sine'; const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => { osc.frequency.setValueAtTime(freq, now + (i*0.1)); });
        gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now); osc.stop(now + 0.5);
    } else if (type === 'lose') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(200, now); osc.frequency.linearRampToValueAtTime(50, now + 0.5);
        gainNode.gain.setValueAtTime(0.15, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now); osc.stop(now + 0.5);
    } else if (type === 'intro') {
        osc.type = 'sine'; const notes = [261.63, 329.63, 392.00];
        notes.forEach((freq, i) => { osc.frequency.setValueAtTime(freq, now + (i*0.1)); });
        gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now); osc.stop(now + 0.4);
    } else if (type === 'alert') {
        osc.type = 'square'; osc.frequency.setValueAtTime(220, now); osc.frequency.setValueAtTime(180, now + 0.1); osc.frequency.setValueAtTime(220, now + 0.2);
        gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    }
}

// === VIEW MANAGEMENT ===
function switchView(targetView, playIntro = false) {
    [topicView, flashcardView, hangmanView, learnView, quizView, compactListView].forEach(v => { v.classList.add('hidden-view'); v.classList.remove('fade-in'); });
    targetView.classList.remove('hidden-view'); void targetView.offsetWidth; targetView.classList.add('fade-in');
    if(playIntro) playSound('intro'); else playSound('slide');
}

// === TOPIC LOGIC ===
function renderTopics() {
    const allWordsCard = `
        <div class="topic-card special-card" data-action="play-all" role="button" tabindex="0" aria-label="Master Challenge">
            <svg class="topic-icon" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <h3 class="font-display text-lg font-bold mb-1 neon-text-green">Master Challenge</h3>
            <p class="text-xs text-[var(--text-muted)]">Hangman with all words</p>
            <div class="mt-3 text-[10px] font-display tracking-wider text-[var(--neon-green)] opacity-70">HARDCORE MODE</div>
        </div>`;
    
    if (viewMode === 'grid') {
        topicGrid.className = "grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-3 gap-6";
        const topicCards = topicsData.map(topic => `
            <div class="topic-card" data-topic-id="${topic.id}" role="button" tabindex="0" aria-label="Study ${topic.title}">
                ${icons[topic.iconId]}
                <h3 class="font-display text-lg font-bold mb-1">${topic.title}</h3>
                <p class="text-xs text-[var(--text-muted)]">${topic.description}</p>
                <div class="mt-3 text-[10px] font-display tracking-wider text-[var(--neon-cyan)] opacity-70">${topic.words.length} CARDS</div>
            </div>`).join('');
        topicGrid.innerHTML = allWordsCard + topicCards;
    } else {
        topicGrid.className = "flex flex-col";
        
        const specialListHtml = `
          <div class="topic-list-item special-list" data-action="play-all" role="button" tabindex="0">
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-full bg-[rgba(255,0,255,0.2)] flex items-center justify-center text-[var(--neon-green)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <h3 class="font-display text-sm font-bold neon-text-green">Master Challenge</h3>
                <p class="text-xs text-[var(--text-muted)]">Hangman with all words</p>
              </div>
            </div>
            <div class="text-[10px] font-display tracking-wider text-[var(--neon-green)] opacity-70">START</div>
          </div>`;
        
        const topicItems = topicsData.map(topic => `
          <div class="topic-list-item" data-topic-id="${topic.id}" role="button" tabindex="0">
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-full bg-[rgba(0,245,255,0.1)] flex items-center justify-center text-[var(--neon-cyan)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <div>
                <h3 class="font-display text-sm font-bold">${topic.title}</h3>
                <p class="text-xs text-[var(--text-muted)]">${topic.words.length} Cards</p>
              </div>
            </div>
            <div class="text-[10px] font-display tracking-wider text-[var(--neon-cyan)] opacity-70">STUDY</div>
          </div>`).join('');
          
          topicGrid.innerHTML = specialListHtml + topicItems;
    }

    topicGrid.querySelectorAll('[data-topic-id], [data-action]').forEach(el => {
        el.addEventListener('click', () => {
            if(el.dataset.action === 'play-all') startHangmanGame(null); 
            else selectTopic(el.dataset.topicId);
        });
    });
}

function selectTopic(topicId) {
    currentTopic = topicsData.find(t => t.id === topicId);
    
    // Sort words by CEFR
    const cefrRank = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6, 'Uncategorized': 7 };
    currentTopic.sortedWords = [...currentTopic.words].sort((a,b) => {
         const cefrA = dictionary[a].cefr || 'Uncategorized';
         const cefrB = dictionary[b].cefr || 'Uncategorized';
         return cefrRank[cefrA] - cefrRank[cefrB];
    });

    currentTopic.activeWords = currentTopic.sortedWords.filter(wId => !getWordData(wId).isKnown);
    
    if (currentTopic.activeWords.length === 0) {
        alert("Awesome! You've marked every word as Known. We'll show them all again.");
        currentTopic.activeWords = currentTopic.sortedWords;
    }
    
    currentCardIndex = 0;
    document.getElementById('topicTitle').textContent = currentTopic.title.toUpperCase();
    updateFlashcard();
    updateProgress();
    switchView(flashcardView);
    document.getElementById('flashcard').classList.remove('flipped');
    speak(getWordData(currentTopic.activeWords[currentCardIndex]).word, 1.0);
}

function renderCompactList() {
    const container = document.getElementById('compactListContainer');
    document.getElementById('compactListTitle').textContent = currentTopic.title.toUpperCase();
    document.getElementById('compactListCount').textContent = `${currentTopic.sortedWords.length}`;
    
    let html = '<div class="flex flex-col gap-1 mx-auto w-full" style="max-width: 450px;">'; 
    currentTopic.sortedWords.forEach((wordId, index) => {
        const wData = getWordData(wordId);
        const favIcon = wData.isFavorite ? '<span class="neon-text-cyan mt-1">★</span>' : '';
        const knownClass = wData.isKnown ? 'known-btn active' : 'known-btn';
        
        html += `
            <div class="p-3 rounded-lg flex items-center justify-between hover:bg-[rgba(255,255,255,0.05)] cursor-pointer transition-colors w-full"
                 onclick="toggleTranslation(${index})">
                <div class="flex-1 flex items-start">
                    <span class="text-[var(--text-muted)] mr-3 font-display w-6 text-right mt-1">${index + 1}.</span>
                    <div class="flex flex-col flex-1">
                        <div class="flex items-baseline gap-2">
                           <span class="font-display font-bold neon-text-magenta text-lg">${wData.word}</span>
                           <span class="text-xs text-[var(--text-muted)] opacity-70">${wData.pron}</span>
                        </div>
                        <p class="text-sm neon-text-green max-h-0 overflow-hidden transition-all duration-300 opacity-0" id="listTrans_${index}" style="margin-top:0px;">${wData.vietnamese}</p>
                    </div>
                </div>
                <div class="flex gap-4 text-2xl items-center justify-center min-w-[60px]">
                    ${favIcon}
                    <button class="${knownClass}" onclick="event.stopPropagation(); toggleKnown('${wordId}', this)" title="Toggle Known Status">🎓</button>
                </div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
    switchView(compactListView);
}

function toggleTranslation(index) {
    const el = document.getElementById(`listTrans_${index}`);
    if (el) {
        if (el.style.maxHeight === '50px' || el.style.opacity === '1') {
            el.style.maxHeight = '0px';
            el.style.opacity = '0';
            el.style.marginTop = '0px';
        } else {
            el.style.maxHeight = '50px';
            el.style.opacity = '1';
            el.style.marginTop = '4px';
        }
    }
}

function toggleKnown(wordId, btn) {
    const wData = getWordData(wordId);
    const newState = !wData.isKnown;
    saveProgress(wordId, { isKnown: newState });
    
    currentTopic.activeWords = currentTopic.sortedWords.filter(wId => !getWordData(wId).isKnown);
    if (currentTopic.activeWords.length === 0) {
        currentTopic.activeWords = currentTopic.sortedWords;
    }
    
    // Toggle visuals seamlessly
    if (btn) {
        if (newState) btn.classList.add('active');
        else btn.classList.remove('active');
    }
}

// === FLASHCARD LOGIC ===
function updateFlashcard() {
    const cardData = getWordData(currentTopic.activeWords[currentCardIndex]);
    document.getElementById('wordFront').textContent = cardData.word;
    document.getElementById('wordBack').textContent = cardData.word;
    document.getElementById('pronBack').textContent = cardData.pron;
    document.getElementById('transBack').textContent = `${cardData.vietnamese} (${cardData.pos})`;
    
    // Hint setup from User code
    const hintText = document.getElementById('hintText');
    const transBtn = document.getElementById('transBtn');
    const vietExample = document.getElementById('vietExample');
    
    const showDefinition = Math.random() > 0.5;
    if (showDefinition) {
        hintText.innerText = cardData.definition;
        transBtn.style.display = 'none'; // Hide translation button for definitions
        vietExample.innerText = '';      // Wipe previous example payload
    } else {
        hintText.innerText = cardData.example;
        transBtn.style.display = 'flex'; // Show translation button for examples
        vietExample.innerText = cardData.vietnamese_example;
    }
    
    vietExample.style.opacity = '0'; // reset opacity every update
    
    const learnedIcon = document.getElementById('statusLearned');
    const rememberedIcon = document.getElementById('statusRemembered');
    learnedIcon.classList.toggle('active', cardData.learned);
    rememberedIcon.classList.toggle('active', !cardData.learned && cardData.quizCorrectCount > 0);
    
    const starBtn = document.getElementById('starBtn');
    starBtn.textContent = cardData.isFavorite ? '★' : '☆';
    starBtn.classList.toggle('active', cardData.isFavorite);
}

function toggleFavorite() {
    playSound('flip');
    const wordId = currentTopic.activeWords[currentCardIndex];
    const wData = getWordData(wordId);
    saveProgress(wordId, { isFavorite: !wData.isFavorite });
    updateFlashcard();
}

function updateProgress() {
    const total = currentTopic.activeWords.length;
    const progress = ((currentCardIndex + 1) / total) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${currentCardIndex + 1}/${total}`;
}

function flipCard() {
    playSound('flip');
    const card = document.getElementById('flashcard');
    card.classList.toggle('flipped');
}

function toggleFrontTrans() {
    const el = document.getElementById('vietExample');
    el.style.opacity = el.style.opacity === '0' ? '1' : '0';
    playSound('flip');
}

function navigateFlashcard(direction) {
    if(isAnimating) return;
    const newIndex = currentCardIndex + direction;
    if (newIndex >= 0 && newIndex < currentTopic.activeWords.length) {
        playSound('slide');
        isAnimating = true;
        const slider = document.getElementById('cardSlider');
        const card = document.getElementById('flashcard');
        card.classList.remove('flipped');
        slider.style.transition = 'transform 0.3s ease-in, opacity 0.2s ease-in';
        slider.style.transform = direction === 1 ? 'translateX(-120%)' : 'translateX(120%)';
        slider.style.opacity = '0';
        setTimeout(() => {
            currentCardIndex = newIndex; updateFlashcard(); updateProgress();
            slider.style.transition = 'none';
            slider.style.transform = direction === 1 ? 'translateX(120%)' : 'translateX(-120%)';
            slider.offsetHeight; 
            slider.style.transition = 'transform 0.3s ease-out, opacity 0.2s ease-out';
            slider.style.transform = 'translateX(0)'; slider.style.opacity = '1';
            setTimeout(() => { isAnimating = false; speak(getWordData(currentTopic.activeWords[currentCardIndex]).word, 1.0); }, 300);
        }, 300);
    }
}

// === LEARN MODE ===
function startLearnMode() {
    learnIndex = 0; learnStep = 1; learnMistakes = 0;
    updateLearnProgress(); renderLearnStep();
    switchView(learnView, true);
}

function updateLearnProgress() {
    const percent = ((learnIndex) / currentTopic.activeWords.length) * 100;
    document.getElementById('learnProgressBar').style.width = `${percent}%`;
}

function renderLearnStep() {
    const w = getWordData(currentTopic.activeWords[learnIndex]);
    const area = document.getElementById('learnContentArea');
    let html = '';

    if (learnStep === 1) {
        speak(w.word, 1.0);
        html = `
            <div class="flashcard-wrapper mb-8">
                <div class="border-btn-group">
                    <button class="border-btn speaker" onclick="event.stopPropagation(); speak('${w.word}', 1.0)">🔊</button>
                    <button class="border-btn snail" onclick="event.stopPropagation(); speak('${w.word}', 0.6)">🐌</button>
                </div>
                <div class="card-container">
                    <div class="card" onclick="playSound('flip'); this.classList.toggle('flipped')">
                        <div class="card-face card-front flex flex-col justify-center">
                            <h2 class="font-display text-3xl font-bold neon-text-cyan text-center">${w.word}</h2>
                            <p class="text-[var(--text-muted)] mt-6 text-sm italic">${w.definition}</p>
                        </div>
                        <div class="card-face card-back flex flex-col justify-center">
                            <h2 class="font-display text-2xl font-bold neon-text-magenta text-center mb-2">${w.word}</h2>
                            <p class="text-[var(--neon-cyan)] text-xs mb-4">${w.pron}</p>
                            <p class="text-sm neon-text-green mb-4">${w.vietnamese} (${w.pos})</p>
                            <p class="text-base text-center">${w.definition}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center gap-3 w-full">
                <button class="nav-btn" id="learnContinueBtn" onclick="nextLearnStep()" style="width: 200px;">CONTINUE</button>
                <button class="underline-btn" onclick="skipWord()">I already know this word</button>
            </div>`;
    } else if (learnStep === 2) {
        speak(w.word, 1.0);
        html = `
            <div class="text-center mb-6 w-full"><h2 class="font-display text-xl neon-text-cyan mb-2">Listen and rewrite</h2></div>
            <div class="flex gap-4 mb-8">
                <button class="border-btn speaker" onclick="speak('${w.word}', 1.0)">🔊</button>
                <button class="border-btn snail" onclick="speak('${w.word}', 0.6)">🐌</button>
            </div>
            <input type="text" id="learnInput" class="mb-6" placeholder="Type what you hear" style="max-width: 300px;">
            <button class="nav-btn" onclick="checkLearn(2)" style="width: 150px;">CHECK</button>`;
    } else if (learnStep === 3) {
        speak(w.word, 1.0);
        let wordArr = w.word.split(''); let indices = [];
        let hintCount = w.word.length <= 5 ? 1 : (w.word.length <= 8 ? 2 : 3);
        while(indices.length < hintCount){ let rand = Math.floor(Math.random() * wordArr.length); if(wordArr[rand] !== ' ' && indices.indexOf(rand) === -1) indices.push(rand); }
        let displayHtml = wordArr.map((char, i) => {
            if (char === ' ') return `<div class="hint-letter" style="border:none; width:10px;"></div>`;
            if (indices.includes(i)) return `<div class="hint-letter revealed">${char.toUpperCase()}</div>`;
            return `<div class="hint-letter"></div>`;
        }).join('');
        const hintWidth = (w.word.length * 25) + ((w.word.length - 1) * 8);
        html = `
            <div class="text-center mb-4 w-full"><h2 class="font-display text-xl neon-text-cyan mb-2">Fill in the word</h2></div>
            <button class="border-btn speaker mb-4" onclick="speak('${w.word}', 1.0)" style="position:relative; top:0; left:0;">🔊</button>
            <p class="text-lg text-center mb-4 neon-text-green">${w.vietnamese}</p>
            <div class="hint-display mb-6">${displayHtml}</div>
            <input type="text" id="learnInput" class="mb-6" placeholder="Type the word" style="width: ${hintWidth}px; max-width: 100%;">
            <button class="nav-btn" onclick="checkLearn(3)" style="width: 150px;">CHECK</button>`;
    }
    area.innerHTML = html;
    const input = document.getElementById('learnInput');
    if(input) input.focus();
}

function nextLearnStep() {
    learnStep++;
    if(learnStep > 3) {
        learnStep = 1; learnIndex++; updateLearnProgress();
        if(learnIndex >= currentTopic.activeWords.length) { showLearnComplete(); return; }
    }
    renderLearnStep();
}

function skipWord() {
    learnIndex++; learnMistakes = 999; updateLearnProgress();
    if (learnIndex >= currentTopic.activeWords.length) showLearnComplete();
    else { learnStep = 1; learnMistakes = 0; renderLearnStep(); }
}

function showLearnComplete() {
    const area = document.getElementById('learnContentArea');
    area.innerHTML = `<h2 class="font-display text-2xl neon-text-green mb-4">COMPLETE!</h2><p class="text-xl mb-8">You finished the lesson!</p><button class="nav-btn" onclick="exitConfirmed(switchView.bind(null, flashcardView))">BACK TO CARDS</button>`;
    playSound('win');
}

function checkLearn(step) {
    const input = document.getElementById('learnInput');
    const w = getWordData(currentTopic.activeWords[learnIndex]);
    const success = input.value.trim().toLowerCase() === w.word.toLowerCase();
    input.blur();
    if(!success) learnMistakes++;
    if(success) saveProgress(w.word, { learned: true });
    showResultPanel(success, w);
}

function showResultPanel(success, wordData) {
    const panel = document.getElementById('resultPanel');
    const icon = document.getElementById('resultIcon');
    const term = document.getElementById('resultTerm');
    const pron = document.getElementById('resultPron');
    const trans = document.getElementById('resultTrans');
    const def = document.getElementById('resultDef');
    
    if(success) { playSound('correct'); icon.textContent = "✔️"; icon.className = "text-2xl mb-2 neon-text-green"; }
    else { playSound('wrong'); icon.textContent = "❌"; icon.className = "text-2xl mb-2 neon-text-red"; }
    
    term.textContent = wordData.word;
    pron.textContent = wordData.pron;
    trans.textContent = `${wordData.vietnamese} (${wordData.pos})`;
    def.textContent = wordData.definition;
    panel.style.transform = 'translateY(0)';
}

function closeResultPanel() { document.getElementById('resultPanel').style.transform = 'translateY(100%)'; }

// === HANGMAN LOGIC ===
function renderKeyboard() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = letters.map(letter => `<button class="keyboard-btn" data-letter="${letter}">${letter}</button>`).join('');
    keyboard.querySelectorAll('.keyboard-btn').forEach(btn => { btn.addEventListener('click', () => handleGuess(btn.dataset.letter)); });
}

function startHangmanGame(topicId) {
    if (topicId) { const topic = topicsData.find(t => t.id === topicId); gameWords = topic.words.map(getWordData); document.getElementById('hangmanTitle').textContent = topic.title.toUpperCase(); }
    else { gameWords = Object.keys(dictionary).map(getWordData); document.getElementById('hangmanTitle').textContent = "MASTER CHALLENGE"; }
    guessedLetters = []; wrongGuesses = 0; gameOver = false; hangmanStreak = 0; previousWord = null;
    document.getElementById('streakCount').textContent = '0';
    nextHangmanWord();
    switchView(hangmanView, true);
}

function nextHangmanWord() {
    let pool = gameWords.filter(w => w.word !== previousWord?.word);
    if(pool.length === 0) pool = gameWords;
    hangmanWord = pool[Math.floor(Math.random() * pool.length)];
    previousWord = hangmanWord;
    guessedLetters = []; wrongGuesses = 0;
    updateHangmanVisuals(); updateWordDisplay();
    document.getElementById('hangmanHint').textContent = `"${hangmanWord.definition}"`;
    document.getElementById('livesCount').textContent = 6;
    document.getElementById('gameResult').classList.add('hidden');
    document.querySelectorAll('.keyboard-btn').forEach(btn => { btn.disabled = false; btn.classList.remove('correct', 'wrong'); });
}

function handleGuess(letter) {
    if (gameOver || guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);
    const btn = document.querySelector(`[data-letter="${letter}"]`);
    if (hangmanWord.word.includes(letter)) {
        playSound('correct'); btn.classList.add('correct'); btn.disabled = true; updateWordDisplay(); checkWin();
    } else {
        playSound('wrong'); btn.classList.add('wrong'); btn.disabled = true; wrongGuesses++;
        document.getElementById('livesCount').textContent = 6 - wrongGuesses; updateHangmanVisuals(); checkLose();
    }
}

function updateWordDisplay() {
    const word = hangmanWord.word;
    let html = '';
    for (let char of word) {
        if (char === ' ' || char === '-') html += `<div class="mx-2"></div>`;
        else if (guessedLetters.includes(char)) html += `<div class="word-letter-box">${char}</div>`;
        else html += `<div class="word-letter-box"></div>`;
    }
    document.getElementById('wordDisplay').innerHTML = html;
}

function updateHangmanVisuals() {
    const parts = ['hm-head', 'hm-body', 'hm-leftArm', 'hm-rightArm', 'hm-leftLeg', 'hm-rightLeg'];
    parts.forEach((id, index) => { const el = document.getElementById(id); if (el) { if (index < wrongGuesses) el.classList.add('show'); else el.classList.remove('show'); } });
}

function checkWin() {
    const allGuessed = hangmanWord.word.split('').every(char => char === ' ' || char === '-' || guessedLetters.includes(char));
    if (allGuessed) {
        gameOver = true; hangmanStreak++; document.getElementById('streakCount').textContent = hangmanStreak; playSound('win');
        document.getElementById('resultText').textContent = "EXCELLENT!"; document.getElementById('resultText').className = "font-display text-2xl font-bold mb-2 neon-text-green";
        document.getElementById('gameResult').classList.remove('hidden');
    }
}

function checkLose() {
    if (wrongGuesses >= 6) {
        gameOver = true; hangmanStreak = 0; document.getElementById('streakCount').textContent = hangmanStreak; playSound('lose');
        document.getElementById('resultText').textContent = `GAME OVER! Word: ${hangmanWord.word}`; document.getElementById('resultText').className = "font-display text-2xl font-bold mb-2 neon-text-red";
        document.getElementById('gameResult').classList.remove('hidden');
    }
}

// === QUIZ LOGIC ===
function startQuiz() {
    quizIndex = 0; quizScore = 0; quizQuestions = currentTopic.words.map(getWordData).sort(() => Math.random() - 0.5); renderQuiz();
    switchView(quizView, true);
}

function renderQuiz() {
    const q = quizQuestions[quizIndex];
    const area = document.getElementById('quizContentArea');
    document.getElementById('quizProgressText').textContent = `${quizIndex+1}/${quizQuestions.length}`;
    let options = [q.definition];
    let distractors = currentTopic.words.filter(id => id !== q.word).sort(() => Math.random() - 0.5).slice(0, 3).map(getWordData);
    distractors.forEach(d => options.push(d.definition)); options.sort(() => Math.random() - 0.5);
    area.innerHTML = `
        <h2 class="font-display text-xl text-center mb-8 neon-text-cyan">What is the meaning?</h2>
        <div class="flashcard-wrapper mb-8" style="height: 100px;">
             <div class="card-face card-front flex flex-col justify-center" style="transform: none; position: relative; width:100%; height:100%;">
                <h2 class="font-display text-2xl font-bold neon-text-cyan text-center">${q.word}</h2>
             </div>
        </div>
        <div class="w-full flex flex-col gap-3" id="quizOptions">
            ${options.map((opt, i) => `<button class="quiz-option" onclick="checkQuiz(this, '${opt.replace(/'/g, "\\'")}', '${q.definition.replace(/'/g, "\\'")}')">${i+1}. ${opt}</button>`).join('')}
        </div>`;
    speak(q.word, 1.0);
}

function checkQuiz(btn, selected, correct) {
    const buttons = document.querySelectorAll('.quiz-option');
    const isCorrect = selected === correct;
    buttons.forEach(b => { b.disabled = true; b.onclick = null; if(b.innerText.includes(correct)) b.classList.add('correct'); });
    if(!isCorrect) { btn.classList.add('wrong'); playSound('wrong'); } else { playSound('correct'); }
    
    const w = quizQuestions[quizIndex];
    if(isCorrect) {
        const newCount = (w.quizCorrectCount || 0) + 1;
        const updates = { quizCorrectCount: newCount };
        if(newCount >= 2) updates.learned = true;
        saveProgress(w.word, updates);
        quizScore++;
    }
    
    setTimeout(() => {
        quizIndex++;
        if(quizIndex < quizQuestions.length) renderQuiz();
        else { playSound('win'); document.getElementById('quizContentArea').innerHTML = `<h2 class="font-display text-2xl neon-text-green mb-4">COMPLETE!</h2><p class="text-xl mb-8">Score: ${quizScore}/${quizQuestions.length}</p><button class="nav-btn" onclick="startQuiz()">TRY AGAIN</button>`; }
    }, 1500);
}

// === EXIT LOGIC ===
function requestExit(callback) { playSound('alert'); pendingExitCallback = callback; confirmPanel.classList.add('show'); }
function exitConfirmed(callback) { playSound('slide'); confirmPanel.classList.remove('show'); closeResultPanel(); if(callback) callback(); }
function cancelExit() { playSound('slide'); confirmPanel.classList.remove('show'); pendingExitCallback = null; }

// === HELPERS ===
function speak(text, rate) { if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'en-US'; utterance.rate = rate; window.speechSynthesis.speak(utterance); } }

// === EVENT LISTENERS ===
function setupEventListeners() {
    document.getElementById('backToTopicsBtn').addEventListener('click', () => { playSound('slide'); switchView(topicView); });
    document.querySelectorAll('.exit-learn-btn').forEach(b => b.addEventListener('click', () => requestExit(() => switchView(flashcardView))));
    document.querySelectorAll('.exit-quiz-btn').forEach(b => b.addEventListener('click', () => requestExit(() => switchView(flashcardView))));
    document.querySelectorAll('.exit-game-btn').forEach(b => b.addEventListener('click', () => { if(currentTopic) requestExit(() => switchView(flashcardView)); else requestExit(() => switchView(topicView)); }));
    document.getElementById('confirmExitBtn').addEventListener('click', () => { if(pendingExitCallback) exitConfirmed(pendingExitCallback); });
    document.getElementById('cancelExitBtn').addEventListener('click', cancelExit);
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('prevBtn').addEventListener('click', () => navigateFlashcard(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateFlashcard(1));
    document.getElementById('startLearnBtn').addEventListener('click', startLearnMode);
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
    document.getElementById('playTopicGameBtn').addEventListener('click', () => startHangmanGame(currentTopic.id));
    document.getElementById('resultContinueBtn').addEventListener('click', () => { closeResultPanel(); nextLearnStep(); });
    document.getElementById('playAgainBtn').addEventListener('click', () => { startHangmanGame(currentTopic ? currentTopic.id : null); });
    document.getElementById('showAllWordsBtn').addEventListener('click', renderCompactList);
    document.getElementById('backFromListBtn').addEventListener('click', () => { playSound('slide'); switchView(flashcardView); });

    // View Toggle Listeners
    gridViewBtn.addEventListener('click', () => {
        viewMode = 'grid';
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        renderTopics();
    });

    listViewBtn.addEventListener('click', () => {
        viewMode = 'list';
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        renderTopics();
    });

    document.addEventListener('keydown', (e) => {
        if (!hangmanView.classList.contains('hidden-view')) { const key = e.key.toUpperCase(); if (/^[A-Z]$/.test(key)) handleGuess(key); }
        if (!flashcardView.classList.contains('hidden-view')) { if (e.key === 'ArrowLeft') navigateFlashcard(-1); if (e.key === 'ArrowRight') navigateFlashcard(1); if (e.key === ' ') { e.preventDefault(); flipCard(); } }
        if (!quizView.classList.contains('hidden-view')) { if (e.key >= '1' && e.key <= '4') { const idx = parseInt(e.key) - 1; const btns = document.querySelectorAll('.quiz-option'); if(btns[idx] && !btns[idx].disabled) btns[idx].click(); } }
        
        if (!learnView.classList.contains('hidden-view')) {
            if (e.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
                 const checkBtn = document.querySelector('#learnContentArea .nav-btn:last-of-type');
                 if(checkBtn) checkBtn.click();
            }
        }

        if (e.key === ' ' || e.key === 'Enter') {
            if (resultPanel.classList.contains('show')) { e.preventDefault(); closeResultPanel(); nextLearnStep(); }
            else if (confirmPanel.classList.contains('show')) { e.preventDefault(); if(e.key === ' ') cancelExit(); }
            else if (!learnView.classList.contains('hidden-view') && learnStep === 1 && !resultPanel.classList.contains('show')) {
                e.preventDefault();
                const continueBtn = document.getElementById('learnContinueBtn');
                if(continueBtn) continueBtn.click();
            }
        }
        if (e.key === 'Escape') { if (confirmPanel.classList.contains('show')) cancelExit(); }
    });
}

// Start the app
init();

// ═══════════════════════════════════
// SETTINGS PANEL & THEME TOGGLE
// ═══════════════════════════════════
const THEME_KEY = 'foxyVocabTheme';

function applyTheme(isDark) {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    const label = document.getElementById('themeLabel');
    const icon  = document.getElementById('themeIcon');
    if (label) label.textContent = isDark ? 'Dark Mode' : 'Light Mode';
    if (icon)  icon.textContent  = isDark ? '☀️' : '🌙';
}

function toggleTheme() {
    const isDark = document.documentElement.hasAttribute('data-theme');
    const newDark = !isDark;
    localStorage.setItem(THEME_KEY, newDark ? 'dark' : 'light');
    applyTheme(newDark);
}

function openSettings() {
    document.getElementById('settingsPanel').classList.add('show');
}

function closeSettings() {
    document.getElementById('settingsPanel').classList.remove('show');
}

// Apply saved theme immediately on load (prevents flash)
(function () {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark') applyTheme(true);
})();

// Wire up buttons
document.getElementById('settingsBtn').addEventListener('click', openSettings);
document.getElementById('closeSettingsBtn').addEventListener('click', closeSettings);
document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

// Close settings with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSettings();
});