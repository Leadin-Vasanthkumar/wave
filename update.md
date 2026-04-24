### App overview
This is a Notion-style To-Do List application built with React. It allows users to write normal text blocks or create to-do tasks (by typing `/` at the beginning of a line) in an auto-expanding text area interface. The data is persisted in the browser's local storage.

### Tech stack
- React (v19) — Frontend library for building the UI
- Vite — Build tool and dev server
- Tailwind CSS (v4) — Utility-first CSS framework for styling
- Framer Motion — Animation library for smooth transitions
- React Textarea Autosize — Auto-resizing textareas
- Lucide React — Icon library

### Project structure
- `src/App.tsx` — Main application component containing all state logic, rendering, and local storage persistence.
- `src/main.tsx` — React entry point.
- `src/index.css` — Global styles and Tailwind imports.
- `vite.config.ts` — Vite configuration file.
- `package.json` — Project dependencies and scripts.

### Database schema
None currently. Data is stored entirely client-side using the browser's `localStorage` (`todo-blocks-data` key).

### Auth flow
No authentication implemented. The app is for single-user local use.

### Core features implemented
- Dual block creation: Plain text blocks or to-do task blocks (by typing `/`).
- Auto-expanding text areas for a seamless typing experience.
- Smooth layout animations when adding or deleting blocks.
- Keyboard navigation (Backspace deletes empty blocks and focuses the previous one).
- Persistent storage: Tasks are saved to `localStorage` to survive page reloads.

### Features not yet built
- Backend syncing or multi-user support.
- Drag-and-drop block reordering.

### Key logic and gotchas
- The state of the blocks is managed as an array of objects (`{ id, type, text, completed }`).
- Backspace handler is carefully implemented to prevent deleting a task block's checkbox while allowing empty blocks to be deleted and focus shifted.
- Uses `refs` to programmatically move the cursor focus between input blocks after deletions or creations.

### How to run locally
1. Ensure Node.js is installed.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local development server on port 3000.
