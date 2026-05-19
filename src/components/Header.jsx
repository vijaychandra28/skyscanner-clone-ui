import React from 'react';

export default function Header() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-illustration glow" aria-hidden>
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.06)" />
            <path d="M3 12h18M12 3v18" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <h1>Flight Schedule</h1>
          <p className="muted">Choose your preferred travel date</p>
        </div>
      </div>
    </header>
  );
}
