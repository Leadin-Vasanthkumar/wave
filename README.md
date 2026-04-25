<div align="center">

# 🌊 Wave

**A minimalist, Notion-style task manager built for people who think in flow.**

Write freely. Hit `/` to create a to-do block. Stay focused.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-wave--pi--three.vercel.app-6366f1?style=for-the-badge&logo=vercel&logoColor=white)](https://wave-pi-three.vercel.app)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## ✨ What is Wave?

Wave is a **keyboard-first, distraction-free task manager** inspired by Notion's block editor. Instead of rigid forms and buttons, you just *type*. When you need a to-do item, start a new line and type `/` — it instantly becomes a checkable task block.

Built to solve one problem: **getting out of your own way so you can focus**.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 📝 **Free-form writing** | Type anything — plain text lives alongside your tasks |
| ✅ **Slash commands** | Type `/` at the start of a line to instantly create a to-do block |
| 🔄 **Auto-expanding textarea** | Blocks grow as you type, no scroll bars in the way |
| ⌨️ **Full keyboard navigation** | `Backspace` on an empty block deletes it and jumps focus up |
| 💾 **Local persistence** | Your data is saved to `localStorage` — refreshes don't wipe your list |
| 🎞️ **Smooth animations** | Powered by Framer Motion for fluid add/delete transitions |

---

## 🛠️ Tech Stack

- **[React 19](https://react.dev)** — UI framework
- **[Vite 6](https://vite.dev)** — Blazing-fast build tool & dev server
- **[TypeScript](https://www.typescriptlang.org)** — Type safety throughout
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — Smooth layout animations
- **[Lucide React](https://lucide.dev)** — Clean, consistent icons
- **[react-textarea-autosize](https://github.com/Andarist/react-textarea-autosize)** — Auto-growing inputs

---

## 📁 Project Structure

```
wave/
├── src/
│   ├── App.tsx        # Core app — state, block logic, localStorage
│   ├── main.tsx       # React entry point
│   └── index.css      # Global styles + Tailwind imports
├── index.html         # HTML shell with SEO meta tags
├── vite.config.ts     # Vite config
└── package.json       # Dependencies & scripts
```

---

## 🏃 Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/Leadin-Vasanthkumar/wave.git
cd wave

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be live at **http://localhost:3000**

---

## 🗺️ Roadmap

- [ ] Drag-and-drop block reordering
- [ ] Multiple lists / pages
- [ ] Backend sync (cloud persistence)
- [ ] Keyboard shortcut cheat sheet overlay
- [ ] Export to Markdown

---

## 👤 Author

Built by **[Vasanth Kumar](https://vasanthkumar.work)** — a 14-year-old developer building productivity tools to solve his own problems.

- 🌐 [vasanthkumar.work](https://vasanthkumar.work)
- 🐦 [@VasanthKumar_16](https://twitter.com/VasanthKumar_16)
- 📧 [contact@vasanthkumar.work](mailto:contact@vasanthkumar.work)

---

<div align="center">

Made with ❤️ and a lot of `/` commands.

⭐ **Star this repo if Wave helps you focus!**

</div>
