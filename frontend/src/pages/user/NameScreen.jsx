import React, { useEffect } from 'react';
import { $, attach } from './helpers';

// ==================== NAME / LOGIN SCREEN ====================
export default function NameScreen() {
  useEffect(() => {
    attach($('toggleLogin'), 'onclick', function() { setMode('login'); });
    attach($('toggleSignup'), 'onclick', function() { setMode('signup'); });
    attach($('authBtn'), 'onclick', function() { joinChat(); });
    attach($('nameInput'), 'oninput', function() { this.value = this.value.toUpperCase(); });
  }, []);

  // Name Screen
  return (
    <div className="name-screen" id="nameScreen">
      <div className="name-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
      <div className="name-title">youtube</div>
      <div className="name-sub" id="nameSubText">Create an account to start chatting</div>
      <div className="name-input-group">
        <div className="auth-toggle">
          <button className="toggle-btn" id="toggleLogin">Login</button>
          <button className="toggle-btn active" id="toggleSignup">Sign Up</button>
        </div>
        <input type="text" className="name-input" id="nameInput" placeholder="Username" maxLength="30" autoComplete="off"/>
        <input type="password" className="name-input" id="passInput" placeholder="Password" maxLength="50" autoComplete="off"/>
        <button className="name-btn" id="authBtn">Sign Up</button>
        <div className="name-error" id="nameError"></div>
      </div>
    </div>
  );
}
