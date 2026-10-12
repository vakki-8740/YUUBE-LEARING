import React, { useEffect, useRef } from 'react';
import '../styles/user.css';

import PinPage from './user/PinPage';
import NameScreen from './user/NameScreen';
import ChatPage from './user/ChatPage';
import ProfilePage from './user/ProfilePage';
import VoicePage from './user/VoicePage';
import VideoPage from './user/VideoPage';
import Popups from './user/Popups';
import CallingPopup from './user/CallingPopup';
import CallingPage from './user/CallingPage';
import ChatKeyboard from './user/ChatKeyboard';
import { $, attach } from './user/helpers';

// ==================== USER PANEL SHELL ====================
// Is file me sirf shell hai — firebase scripts, top bar, bottom nav
// aur baaki pages ka composition. Har page ka apna alag .jsx hai
// (src/pages/user/).
export default function UserChat() {
  const containerRef = useRef(null);

  useEffect(() => {
    const firebaseScripts = [
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js',
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js',
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-storage-compat.js',
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js'
    ];

    function loadScript(src) {
      return new Promise((resolve) => {
        const existing = document.querySelector('script[src="' + src + '"]');
        if (existing) { resolve(); return; }
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = resolve;
        document.body.appendChild(s);
      });
    }

    async function loadAll() {
      // script-voice.js / script-video.js bhi isi id se cache-bust hote hain.
      // Wo Vite bundle me nahi aate (public/ ke hain), isliye id window par
      // de deni padti hai — script-core.js wahi use karta hai.
      window.__BUILD_ID__ = __BUILD_ID__;

      // firebase-app-compat has to land first — the other three only extend
      // it. Loading those three together saves two round trips on mobile.
      await loadScript(firebaseScripts[0]);
      await Promise.all(firebaseScripts.slice(1).map(loadScript));

      const existingAppScript = document.querySelector('script[src*="script-core.js"]');
      if (!existingAppScript) {
        // `Date.now()` yahaan har load par alag tha, isliye yeh 99 KB ki file
        // kabhi cache hoti hi nahi thi. Ab build ke time wala id lagta hai —
        // sirf naye deploy par cache tootega.
        await loadScript('/script-core.js?v=' + __BUILD_ID__);
      }
    }

    loadAll();
  }, []);

  useEffect(() => {
    // Bottom nav = shell ka kaam, baaki sab apne page component me.
    attach($('navChat'), 'onclick', function() { switchTab('chat'); });
    attach($('navProfile'), 'onclick', function() { switchTab('profile'); });
    attach($('navVoice'), 'onclick', function() { switchTab('voice'); });
    attach($('navVideo'), 'onclick', function() { switchTab('video'); });
  }, []);

  return (
    <div ref={containerRef}>
      <PinPage />
      <NameScreen />

      {/* Main App */}
      <div className="main-app" id="mainApp">
        {/* Top Bar */}
        <div className="app-topbar">
          <div className="my-avatar" id="myAvatar">Y</div>
          <div className="app-title" id="appTitle">Chats</div>
        </div>

        {/* Pages Container */}
        <div className="pages-container">
          <ChatPage />
          <ProfilePage />
          <VoicePage />
          <VideoPage />
        </div>

        {/* Bottom Nav */}
        <div className="bottom-nav">
          <button className="nav-item active" id="navChat">
            <svg className="nav-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Chats
          </button>
          <button className="nav-item" id="navProfile">
            <svg className="nav-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Profile
          </button>
          <button className="nav-item" id="navVoice">
            <svg className="nav-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
            Voice
          </button>
          <button className="nav-item" id="navVideo">
            <svg className="nav-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
            Video
          </button>
        </div>
      </div>

      <Popups />
      <CallingPopup />
      <CallingPage />
      {/* Root par, .page ke bahar — kyunki .page par will-change/transform
          hai, jo position:fixed ko apni taraf le leta hai. */}
      <ChatKeyboard />
    </div>
  );
}
