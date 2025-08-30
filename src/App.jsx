import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">REC FITNESS CLUB</h1>
        <p className="subtitle">Managed by FM Fitness</p>
      </header>

      <main className="main">
        <section className="schedule">
          <h2>⏰ Gym Timings</h2>
          <ul>
            <li>Morning (Boys): <strong>05:00 AM - 06:30 AM</strong></li>
            <li>Morning (Girls): <strong>06:30 AM - 07:30 AM</strong></li>
            <li>Morning (Boys): <strong>07:30 AM - 10:00 AM</strong></li>
            <li>Evening (All Members): <strong>05:00 PM - 10:00 PM</strong></li>
          </ul>
          <p className="closed">🚫 Sunday Closed</p>
        </section>

        <section className="coach">
          <h2>💪 Coach</h2>
          <p><strong>Mr. R.S. Pandey</strong></p>
          <p>(Gold Medalist, Mr. Asia)</p>
        </section>

        <section className="contact">
          <h2>📞 Contact</h2>
          <p>📱 91207989995, 9935399223</p>
          <p>🌐 <a href="https://recs-gym.vercel.app" target="_blank" rel="noreferrer">https://recs-gym.vercel.app</a></p>
          <p>📧 rspandey2@gmail.com</p>
        </section>

        <section className="construction">
          <h2>🚧 Website Under Construction 🚧</h2>
          <p>We’re working hard to bring Rec Fitness Club online. Stay tuned for updates!</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Rec Fitness Club | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
