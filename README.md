# FoxyVocab 🦊

A Quizlet-inspired vocabulary study app for English learners, built with pure HTML/CSS/JS and hosted on GitHub Pages.

## Features

- **Course → Set → Word** hierarchy (IELTS, TOEIC, Topic categories)
- **Flashcard** carousel with swipe navigation and text-to-speech
- **Learn Mode** — multi-step study: read → listen & rewrite → fill in the word
- **Test Mode** — configurable tests with:
  - True/False, Multiple Choice, Fill-in (sentence completion), Written (Vietnamese → English)
  - Adjustable question count and instant feedback toggle
- **Match Game** — pair 6 English words with their Vietnamese meanings against the clock
- **Word List** — browse all terms with audio, favorites, and "Known" word filtering
- **Dark/Light theme** toggle
- **Mobile-first** responsive design with touch gestures

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (custom properties, dark mode) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Orbitron, Space Grotesk) |
| Audio | Web Audio API (sound effects) + Web Speech API (TTS) |
| Hosting | GitHub Pages (static) |
| Data | Local JS file (`data.js`) — no backend |

## File Structure

```
FoxyVocab/
├── index.html    # All view templates (single-page app)
├── styles.css    # All styles including dark mode
├── script.js     # App logic, state management, all game modes
├── data.js       # Dictionary + course/set data structure
└── README.md     # This file
```

## How to Run

1. Clone or download this repository
2. Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge)
3. No build step, no dependencies — it just works

For development with live reload:
```bash
npx live-server
```

## Data Format

Words are stored in `data.js` with this structure:

```js
// Global dictionary of all words
const dictionary = {
    "WORD": {
        definition: "English definition",
        pos: "noun|verb|adj|...",
        pron: "/IPA/",
        example: "Example sentence.",
        vietnamese: "Vietnamese translation",
        vietnamese_example: "Vietnamese example",
        cefr: "A1|A2|B1|B2|C1|C2"
    }
};

// Course → Set hierarchy
const coursesData = [
    {
        id: "topic",
        title: "Topic",
        icon: "📚",
        sets: [
            { id: "logistics", title: "Logistics", words: ["WORD1", "WORD2", ...] }
        ]
    }
];
```

## Navigation Flow

```
Course View → Set View → Word List View
                              ├── Flashcard (modal)
                              ├── Learn Mode
                              ├── Test Mode → Test Settings → Test
                              └── Match Game → Results
```

## Browser Support

- Modern browsers (Chrome 80+, Firefox 80+, Safari 14+, Edge 80+)
- iPad Air 2 / iPadOS 15+ (with diagnostic logging)
- Mobile-first responsive design

## License

Personal project — not licensed for redistribution.
