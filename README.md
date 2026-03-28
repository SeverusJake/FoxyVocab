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

## How to Add Data

FoxyVocab uses a completely frontend, local JavaScript data file (`data.js`). The data is split into two logical parts: **the Dictionary** and **the Courses**.

### 1. The Dictionary
All vocabulary words must first be defined in the `dictionary` object at the top of the file. Each key is the exact word (case-sensitive), and its value contains its definition and translations.
```js
const dictionary = {
    "apple": {
        definition: "A round fruit with red or green skin and a whitish interior.",
        pos: "noun",
        pron: "/ˈæp.əl/",
        example: "She took a bite of the apple.",
        vietnamese: "quả táo",
        vietnamese_example: "Cô ấy cắn một miếng táo.",
        cefr: "A1"
    }
};
```

### 2. Courses and Sets
Once a word exists in the dictionary, it can be attached to any set! `coursesData` defines the navigation hierarchy.
- **Course**: Contains an `id`, `title`, an emoji `icon`, and an array of `sets`.
- **Set**: Contains an `id`, `title`, and an array of `words`. *Note: The strings here must exactly match the keys used in the dictionary.*
```js
const coursesData = [
    {
        id: "fruits-course",
        title: "Fruit Basics",
        icon: "🍎",
        sets: [
            { 
                id: "basic-fruits", 
                title: "Basic Fruits", 
                words: ["apple", "banana", "orange"] 
            }
        ]
    }
];
```

### Step-by-Step Instructions
1. Open `data.js`.
2. Add any new words you want to teach to the `dictionary` object. Make sure the formatting (quotes and commas) is strictly followed!
3. Scroll down to the `coursesData` array.
4. Create a new item inside a course's `sets` array (or create an entirely new course object).
5. Give the set an `id`, `title`, and insert your dictionary words into the `words` array.
6. Refresh the page! The new courses and sets will automatically appear on the home screen.

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
