import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * MainContainer—the main view for NoteEase, with glassmorphism and theme switch.
 */
function MainContainer() {
  // light or dark
  const [theme, setTheme] = useState(() =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  // Sync <body> theme class
  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const handleThemeSwitch = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Demo notes (static, for UI scaffold)
  const notes = [
    {
      id: 1,
      title: "Grocery List",
      content: "Milk, eggs, bread, avocados...",
      pinned: true,
      tags: ["Personal", "Shopping"],
    },
    {
      id: 2,
      title: "Project Ideas",
      content: "1. Workout App\n2. Resume Builder",
      pinned: false,
      tags: ["Work", "Ideas"],
    },
    {
      id: 3,
      title: "Quote",
      content: "“Stay hungry, stay foolish.”",
      pinned: false,
      tags: ["Inspiration"],
    },
  ];

  const themeIcon =
    theme === "dark" ? (
      <span aria-label="Switch to light mode" title="Light mode" style={{ fontSize: 20 }}>🌞</span>
    ) : (
      <span aria-label="Switch to dark mode" title="Dark mode" style={{ fontSize: 20 }}>🌙</span>
    );

  return (
    <div className="noteease-app-glassy">
      <header className="ne-navbar-glassy">
        <div className="ne-navbar-logo">
          <span className="ne-logo-accent">✦</span> NoteEase
        </div>
        <div>
          <button
            className="ne-theme-switch"
            onClick={handleThemeSwitch}
            aria-label="Toggle light/dark theme"
          >
            {themeIcon}
          </button>
        </div>
      </header>
      <main className="ne-main-content-glassy">
        <div className="ne-searchbar-glassy">
          <input
            type="text"
            placeholder="Search notes..."
            aria-label="Search notes"
            className="ne-search-input"
          />
        </div>
        <div className="ne-notes-list-glassy">
          {notes.map((note) => (
            <div
              className={`ne-note-item-glassy${
                note.pinned ? " ne-note-pinned" : ""
              }`}
              key={note.id}
            >
              <div className="ne-note-header">
                <span className="ne-note-title">{note.title}</span>
                <div className="ne-note-actions">
                  <button aria-label="Pin note" className="ne-note-action-btn ne-note-pin-btn">📌</button>
                  <button aria-label="Edit note" className="ne-note-action-btn">✏️</button>
                  <button aria-label="Delete note" className="ne-note-action-btn">🗑️</button>
                  <button aria-label="Archive note" className="ne-note-action-btn">🗄️</button>
                </div>
              </div>
              <div className="ne-note-content">
                {note.content.length > 64
                  ? note.content.slice(0, 64) + "..."
                  : note.content}
              </div>
              <div className="ne-note-tags">
                {note.tags.map((tag) => (
                  <span className="ne-note-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <button
        className="ne-fab-glassy"
        aria-label="Add new note"
        title="Add new note"
      >
        +
      </button>
    </div>
  );
}

export default MainContainer;
