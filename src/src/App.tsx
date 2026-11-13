import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("home");

  const menu = [
    ["home", "⌂", "Home"],
    ["tasks", "✓", "Taken"],
    ["calendar", "▦", "Agenda"],
    ["notes", "✎", "Notities"],
    ["goals", "◎", "Doelen"],
    ["focus", "◷", "Focus"],
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>MY <span>PLANNING</span></h2>
        <p className="subtitle">YOUR PERSONAL SPACE</p>

        <nav>
          {menu.map(([id, icon, label]) => (
            <button
              key={id}
              className={tab === id ? "active" : ""}
              onClick={() => setTab(id)}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <header>
          <div>
            <p className="subtitle">YOUR PERSONAL DASHBOARD</p>
            <h1>{menu.find(item => item[0] === tab)?.[2]}</h1>
          </div>
          <span className="gold">✦ MY PLANNING</span>
        </header>

        <section className="welcome">
          <p>WELCOME BACK</p>
          <h2>Make today count.</h2>
          <span>Everything you need, all in one place.</span>
        </section>

        <section className="cards">
          {menu.slice(1).map(([id, icon, label]) => (
            <button className="card" key={id} onClick={() => setTab(id)}>
              <span>{icon}</span>
              <h3>{label}</h3>
              <p>Open {label.toLowerCase()}</p>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
