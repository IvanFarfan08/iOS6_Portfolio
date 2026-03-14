# iOS 6 Portfolio

An interactive portfolio website inspired by the classic iOS 6 interface. Built with React, TypeScript, and Three.js.

**Live site:** [ivanfarfan.com](https://ivanfarfan.com)

## Features

- **Lock Screen** — Drag-to-unlock mechanic with smooth animations and touch/mouse support
- **Home Screen** — Responsive app grid with dock, mimicking the iOS 6 layout
- **Biography** — Profile and personal bio in a Contacts-style screen
- **Projects** — Bookshelf-style project showcase with pop-up modals linking to demos, repos, and awards
- **Designs** — Figma design gallery with responsive grid layout
- **3D Portfolio** — Interactive Three.js viewer with orbit controls and studio lighting
- **Clock & Calendar** — Functional apps displaying real-time data

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — Build tooling and dev server
- **Tailwind CSS** — Styling
- **Three.js** — 3D model rendering
- **gh-pages** — Deployment to GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── lock_screen/     # Lock screen UI (StatusBar, TimeBar, LockBar, LockButton)
│   ├── home/            # Home screen grid, dock, and app icons
│   └── screens/         # App screens (Biography, Projects, Designs, 3D Portfolio)
├── assets/              # Images, icons, 3D models
├── App.tsx              # Root component with state management
└── main.tsx             # Entry point
```
