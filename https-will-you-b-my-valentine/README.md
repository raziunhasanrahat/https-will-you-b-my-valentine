# Fariha + Rakin Proposal Website

A complete original React, Vite, and Tailwind CSS proposal experience for Fariha from Rakin.

## Features

- Soft pink pastel design with glassmorphism
- Animated floating hearts, sparkles, cursor hearts, and page transitions
- Interactive runaway `NO` button that stays inside the viewport
- `YES` button grows brighter and larger after every failed `NO` attempt
- Heart bursts around the `YES` button
- Confetti celebration with `canvas-confetti`
- Success page with a romantic promise and signature
- Framer Motion animations
- Music toggle with MP3 support and a generated fallback melody
- Mobile-first responsive layout
- Original animated illustration components, no copied assets

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal.

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## Music

To use your own background music, add an MP3 here:

```text
public/assets/music/background.mp3
```

No code changes are needed. If the MP3 is missing, the app uses a gentle generated melody after the music button is pressed.

## Project structure

```text
src/
  App.jsx
  main.jsx
  styles.css
  components/
    CursorHearts.jsx
    FloatingHearts.jsx
    LandingPage.jsx
    MusicToggle.jsx
    ProposalPage.jsx
    RomanticIllustration.jsx
    SuccessPage.jsx
  hooks/
    useMusic.js
    useRunawayButton.js
public/
  assets/
    music/
      README.md
```
