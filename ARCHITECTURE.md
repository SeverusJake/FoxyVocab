# FoxyVocab — Architecture Guide

## Overview

FoxyVocab is a **single-page application (SPA)** with no framework, no build step, and no backend. All views are defined in `index.html` as `<div>` containers toggled via JS. State is managed in-memory with `localStorage` persistence.

## Views (Screen Flow)

```
┌──────────────┐     ┌─────────────┐     ┌──────────────────┐
│  courseView   │────▶│  setView    │────▶│  wordListView    │
│  (View 1)    │     │  (View 2)   │     │  (View 3)        │
└──────────────┘     └─────────────┘     └────────┬─────────┘
                                                   │
                          ┌────────────────────────┼────────────────────┐
                          │              │              │               │
                   ┌──────▼─────┐ ┌──────▼─────┐ ┌─────▼──────┐ ┌─────▼──────┐
                   │ flashcard  │ │ learnView  │ │ testSettings│ │ matchView  │
                   │ View       │ │            │ │ → testView  │ │ → results  │
                   └────────────┘ └────────────┘ └────────────┘ └────────────┘
```

### View IDs

| View | HTML ID | Purpose |
|------|---------|---------|
| Course Selection | `courseView` | Choose IELTS / TOEIC / Topic |
| Set Selection | `setView` | List sets within a course |
| Word List | `wordListView` | Flashcard carousel + word list + action buttons |
| Flashcard | `flashcardView` | Full-screen flashcard study |
| Learn | `learnView` | 3-step learning: read → listen & rewrite → fill-in |
| Test Settings | `testSettingsView` | Configure test (question count, types, feedback) |
| Test | `testView` | Active test with T/F, MC, Fill-in, Written questions |
| Match | `matchView` | 6-pair card matching game with timer |
| Compact List | `compactListView` | Simple word list with reveal-on-tap translations |

## State Management

```js
// In-memory state
let currentCourse = null;    // Selected course object
let currentSet = null;       // Selected set object
let currentCardIndex = 0;    // Flashcard position

// Persisted in localStorage
const userProgress = {
    "WORD_ID": {
        isFavorite: false,
        learned: false,
        quizCorrectCount: 0,
        isKnown: false
    }
};
```

## Data Model

```
coursesData[]
  └── Course { id, title, icon, sets[] }
        └── Set { id, title, words[] }
              └── word = key into dictionary{}

dictionary{}
  └── "WORD" → { definition, pos, pron, example, vietnamese, vietnamese_example, cefr }
```

## Key Functions

| Function | File | Purpose |
|----------|------|---------|
| `init()` | script.js | Bootstrap app, load progress, render courses |
| `renderCourses()` | script.js | Render course selection view |
| `selectCourse(id)` | script.js | Navigate to set selection |
| `selectSet(setId)` | script.js | Load set, render word list view |
| `startLearnMode()` | script.js | Enter 3-step learn flow |
| `openTestSettings()` | script.js | Show test configuration |
| `startTest(config)` | script.js | Generate and run test questions |
| `startMatch()` | script.js | Start 6-pair match game |
| `switchView(view)` | script.js | Toggle visible view with animation |
| `saveProgress()` | script.js | Persist user data to localStorage |

## CSS Architecture

- **CSS Custom Properties** for theming (`--text`, `--bg`, `--green`, etc.)
- **Dark mode** via `[data-theme="dark"]` on `<html>`
- **Utility classes** for layout (flex, grid, spacing)
- **Component styles** for cards, buttons, panels
- **Animations** for view transitions, card flips, match game

## Audio

- **Sound effects**: Web Audio API oscillator (`playSound()`)
- **Text-to-speech**: Web Speech API (`speak()`)
