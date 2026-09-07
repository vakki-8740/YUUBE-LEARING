import React, { useEffect, useRef, useState } from 'react';
import '../styles/user.css';

export default function UserChat() {
  const containerRef = useRef(null);
  const [pinValues, setPinValues] = useState(['','','','','','']);
  const [pinError, setPinError] = useState(false);
  const [pinVerified, setPinVerified] = useState(() => sessionStorage.getItem('pinVerified') === '1');
  const pinRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  function handlePinInput(idx, val) {
    const digit = val.replace(/[^0-9]/g, '').slice(-1);
    const newVals = [...pinValues];
    newVals[idx] = digit;
    setPinValues(newVals);
    setPinError(false);
    if (digit && idx < 5) {
      pinRefs[idx + 1].current.focus();
    }
  }

  function handlePinKey(e, idx) {
    if (e.key === 'Backspace' && !pinValues[idx] && idx > 0) {
      const newVals = [...pinValues];
      newVals[idx - 1] = '';
      setPinValues(newVals);
      pinRefs[idx - 1].current.focus();
    }
    if (e.key === 'Enter') {
      verifyPin();
    }
  }

  function verifyPin() {
    const full = pinValues.join('');
    if (full === '272026') {
      sessionStorage.setItem('pinVerified', '1');
      setPinVerified(true);
    } else {
      setPinError(true);
      setPinValues(['','','','','','']);
      setTimeout(() => {
        pinRefs[0].current.focus();
      }, 100);
    }
  }

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
      for (const src of firebaseScripts) {
        await loadScript(src);
      }
      const existingAppScript = document.querySelector('script[src*="script.js"]');
      if (!existingAppScript) {
        await loadScript('/user/script.js?v=20260731d');
      }
    }

    loadAll();
  }, []);

  return (
    <div ref={containerRef}>
      <style>{`
        #pinOverlay {
          position: fixed; inset: 0; z-index: 99999;
          background: #000;
          display: flex; align-items: center; justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          -webkit-user-select: none; user-select: none;
        }
        #pinOverlay.hidden { display: none; }
        .pin-box { text-align: center; }
        .pin-lock-icon {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
        }
        .pin-lock-icon svg { color: #fff; }
        .pin-title { color: #fff; font-size: 20px; font-weight: 600; margin-bottom: 6px; }
        .pin-sub { color: #8e8e93; font-size: 14px; margin-bottom: 30px; }
        .pin-inputs { display: flex; gap: 10px; justify-content: center; margin-bottom: 16px; }
        .pin-box input[type="text"] {
          width: 48px; height: 56px; border-radius: 12px;
          border: 2px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          color: #fff; font-size: 24px; font-weight: 700;
          text-align: center; outline: none;
          transition: border-color 0.2s;
          caret-color: transparent;
        }
        .pin-box input[type="text"]:focus {
          border-color: #007AFF;
        }
        .pin-box input[type="text"].error {
          border-color: #FF3B30;
          animation: pinShake 0.5s ease;
        }
        @keyframes pinShake {
          0%, 100% { transform: translateX(0); }
          10%, 50%, 90% { transform: translateX(-6px); }
          30%, 70% { transform: translateX(6px); }
        }
        .pin-error {
          color: #FF3B30; font-size: 13px; font-weight: 500;
          min-height: 18px; margin-top: 4px;
          opacity: 0; transition: opacity 0.2s;
        }
        .pin-error.show { opacity: 1; }
        .pin-submit-btn {
          margin-top: 20px; padding: 14px 40px;
          background: #007AFF; color: #fff; border: none;
          border-radius: 12px; font-size: 16px; font-weight: 600;
          cursor: pointer; font-family: inherit;
        }
        .pin-submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }
      `}</style>

      {/* PIN Overlay */}
      {!pinVerified && (
      <div id="pinOverlay">
        <div className="pin-box">
          <div className="pin-lock-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <div className="pin-title">Enter PIN</div>
          <div className="pin-sub">Enter 6-digit PIN to continue</div>
          <div className="pin-inputs" id="pinInputs">
            {pinValues.map((val, idx) => (
              <input
                key={idx}
                ref={pinRefs[idx]}
                type="text"
                maxLength="1"
                inputMode="numeric"
                pattern="[0-9]*"
                value={val}
                onChange={(e) => handlePinInput(idx, e.target.value)}
                onKeyDown={(e) => handlePinKey(e, idx)}
                className={pinError ? 'error' : ''}
              />
            ))}
          </div>
          <div className={`pin-error ${pinError ? 'show' : ''}`} id="pinError">Galat PIN hai!</div>
          <button
            className="pin-submit-btn"
            id="pinSubmitBtn"
            disabled={pinValues.join('').length !== 6}
            onClick={verifyPin}
          >Submit</button>
        </div>
      </div>
      )}

      {/* Name Screen */}
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

      {/* Main App */}
      <div className="main-app" id="mainApp">
        {/* Top Bar */}
        <div className="app-topbar">
          <div className="my-avatar" id="myAvatar">Y</div>
          <div className="app-title" id="appTitle">Chats</div>
        </div>

        {/* Pages Container */}
        <div className="pages-container">
          {/* Chat Page */}
          <div className="page active" id="chatPage">
            <div className="main-content">
              {/* User List */}
              <div className="user-list-area" id="userListArea">
                <div className="user-list-header">Online &mdash; <span id="onlineCount">0</span></div>
                <div className="user-list-scroll" id="userList">
                  <div className="no-users-msg">
                    <div className="icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div>No other users yet</div>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="chat-area" id="chatArea">
                <div className="empty-state" id="emptyState">
                  <div className="icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <div className="title">Select a user</div>
                  <div className="sub">Choose someone from the list to start chatting</div>
                </div>

                <div className="chat-view" id="chatView">
                  <div className="chat-header">
                    <button className="back-btn">&#8592;</button>
                    <div className="ch-avatar" id="chatAvatar">U</div>
                    <div className="ch-info">
                      <div className="ch-name" id="chatName">User</div>
                      <div className="ch-status" id="chatStatus">Offline</div>
                    </div>
                    <div className="call-actions">
                      <button className="call-btn" title="Audio Call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></button>
                      <button className="call-btn" title="Video Call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></button>
                    </div>
                  </div>

                  <div className="messages-area" id="messagesArea">
                    <div className="typing-indicator" id="typingIndicator">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="recording-indicator" id="recordingIndicator">
                      <svg className="rec-mic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="23"/>
                        <line x1="8" y1="23" x2="16" y2="23"/>
                      </svg>
                      <span className="rec-text">Recording...</span>
                    </div>
                  </div>

                  <div className="reply-preview-bar" id="replyPreviewBar">
                    <div className="rpb-line"></div>
                    <div className="rpb-content">
                      <div className="rpb-label" id="replyLabel">Replying</div>
                      <div className="rpb-text" id="replyText"></div>
                    </div>
                    <button className="rpb-close">&#10005;</button>
                  </div>

                  <div className="input-bar">
                    <button className="img-btn" id="imgBtn" title="Send Image">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </button>
                    <input type="file" id="imgInput" accept="image/*" style={{display:'none'}}/>
                    <div className="input-wrapper">
                      <textarea id="messageInput" rows="1" placeholder="Message"></textarea>
                    </div>
                    <button className="send-btn" id="sendBtn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Page */}
          <div className="page" id="profilePage">
            <div className="profile-page">
              <div className="profile-avatar" id="profileAvatar">
                <span className="pa-initial" id="paInitial">Y</span>
                <span className="pa-img" id="paImg" style={{display:'none'}}></span>
                <div className="pa-camera">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </div>
              </div>
              <div className="profile-name-display" id="profileNameDisplay">You</div>
              <div className="profile-id" id="profileId">ID: ...</div>

              <div className="profile-section">
                <div className="ps-label">Name</div>
                <div className="profile-input-group">
                  <input type="text" className="profile-input" id="profileNameInput" placeholder="Your name" maxLength="30"/>
                  <button className="profile-save-btn">Save</button>
                </div>
              </div>

              <div className="profile-section">
                <div className="ps-label">Info</div>
                <div className="profile-info-item">
                  <span className="pii-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <div className="pii-content">
                    <div className="pii-label">User ID</div>
                    <div className="pii-value" id="profileUserId" style={{fontSize:'12px',wordBreak:'break-all',color:'var(--ios-gray)'}}>-</div>
                  </div>
                </div>
                <div className="profile-info-item">
                  <span className="pii-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </span>
                  <div className="pii-content">
                    <div className="pii-label">Joined</div>
                    <div className="pii-value" id="profileJoined">-</div>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <div className="ps-label">Notifications</div>
                <div className="push-toggle-row" id="pushToggleRow">
                  <div className="push-toggle-info">
                    <div className="push-toggle-label">Push Notifications</div>
                    <div className="push-toggle-desc" id="pushToggleDesc">Get notified for new messages</div>
                  </div>
                  <label className="ios-toggle" id="pushToggle">
                    <input type="checkbox" id="pushToggleInput"/>
                    <span className="ios-toggle-slider"></span>
                  </label>
                </div>
              </div>

              <button className="profile-logout-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign:'middle',marginRight:'6px'}}>
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Log Out
              </button>

              <div className="font-size-section">
                <div className="ps-label">Chat Text Size</div>
                <div className="font-size-row">
                  <span className="font-size-label">A</span>
                  <input type="range" className="font-size-slider" id="fontSizeSlider" min="12" max="24" defaultValue="16"/>
                  <span className="font-size-label" style={{fontSize:'22px'}}>A</span>
                </div>
                <div className="font-size-preview" id="fontSizePreview">Sample message text</div>
              </div>

              <div className="profile-section">
                <div className="ps-label">Change Password</div>
                <div className="profile-input-group" style={{flexDirection:'column',gap:'8px'}}>
                  <div style={{display:'flex',gap:'8px',alignItems:'stretch'}}>
                    <input type="text" className="profile-input" id="oldPassInput" placeholder="Current password" maxLength="50" autoComplete="off" style={{flex:'1'}} readOnly/>
                    <button style={{padding:'10px 14px',background:'var(--ios-gray6)',border:'0.5px solid var(--ios-separator)',borderRadius:'10px',cursor:'pointer',fontSize:'14px',fontFamily:'inherit',color:'var(--ios-blue)',fontWeight:'600',whiteSpace:'nowrap'}}>Copy</button>
                  </div>
                  <input type="password" className="profile-input" id="newPassInput" placeholder="New password" maxLength="50" autoComplete="off" style={{width:'100%'}}/>
                  <button className="profile-save-btn" style={{width:'100%'}}>Change Password</button>
                  <div id="passChangeStatus" style={{fontSize:'12px',color:'var(--ios-gray)',textAlign:'center'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Page */}
          <div className="page" id="voicePage">
            <div className="voice-page">

              {/* User List View */}
              <div id="voiceUserView">
                <div className="voice-list-header">Send Voice Pack</div>
                <div className="voice-user-list" id="voiceUserList">
                  <div className="voice-empty" id="voiceUserEmpty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <div>No users found</div>
                  </div>
                </div>
              </div>

              {/* Conversation View */}
              <div id="voiceConvView" style={{display:'none'}}>
                <div className="voice-conv-header">
                  <button className="voice-back-btn">&#8592;</button>
                  <div className="voice-conv-avatar" id="voiceConvAvatar">U</div>
                  <div className="voice-conv-name" id="voiceConvName">User</div>
                  <button className="voice-select-btn" id="voiceSelectBtn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                  </button>
                  <button className="voice-delete-selected-btn" id="voiceDeleteSelectedBtn" style={{display:'none'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                    <span id="voiceDeleteCount">0</span>
                  </button>
                </div>

                <div className="voice-conv-msgs" id="voiceConvMsgs">
                  <div className="recording-indicator" id="voiceRecordingIndicator">
                    <svg className="rec-mic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="23"/>
                      <line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                    <span className="rec-text">Recording...</span>
                  </div>
                  <div className="voice-conv-empty" id="voiceConvEmpty">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="23"/>
                      <line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                    <div>No media yet</div>
                    <div style={{fontSize:'12px',marginTop:'4px'}}>Tap the mic to send media</div>
                  </div>
                </div>

                {/* Reply Bar */}
                <div className="voice-reply-bar" id="voiceReplyBar" style={{display:'none'}}>
                  <div className="voice-reply-line"></div>
                  <div className="voice-reply-content">
                    <div className="voice-reply-label">Replying</div>
                    <div className="voice-reply-text" id="voiceReplyText"></div>
                  </div>
                  <button className="voice-reply-close">&#10005;</button>
                </div>

                {/* Emoji Picker Popup */}
                <div className="voice-emoji-picker" id="voiceEmojiPicker" style={{display:'none'}}>
                  <div className="voice-emoji-list">
                    <span className="voice-emoji-opt">&#129300;</span>
                    <span className="voice-emoji-opt">&#128513;</span>
                    <span className="voice-emoji-opt">&#129309;</span>
                    <span className="voice-emoji-opt">&#128557;</span>
                    <span className="voice-emoji-opt">&#128533;</span>
                    <span className="voice-emoji-opt">&#128578;</span>
                    <span className="voice-emoji-opt">&#128077;&#127999;</span>
                    <span className="voice-emoji-opt">&#128084;</span>
                    <span className="voice-emoji-opt">&#128540;</span>
                    <span className="voice-emoji-opt">&#128525;</span>
                    <span className="voice-emoji-opt">&#10084;&#65039;</span>
                    <span className="voice-emoji-opt">&#128557;</span>
                    <span className="voice-emoji-opt">&#128522;</span>
                    <span className="voice-emoji-opt">&#128548;</span>
                    <span className="voice-emoji-opt">&#129316;</span>
                    <span className="voice-emoji-opt">&#128566;</span>
                    <span className="voice-emoji-opt">&#128560;</span>
                    <span className="voice-emoji-opt">&#129303;</span>
                    <span className="voice-emoji-opt">&#128579;</span>
                    <span className="voice-emoji-opt">&#128542;</span>
                    <span className="voice-emoji-opt">&#128543;</span>
                    <span className="voice-emoji-opt">&#128523;</span>
                    <span className="voice-emoji-opt">&#128068;</span>
                    <span className="voice-emoji-opt">&#129308;</span>
                    <span className="voice-emoji-opt">&#128064;</span>
                    <span className="voice-emoji-opt">&#129302;</span>
                  </div>
                </div>

                {/* Input / Recording Bar */}
                <div className="voice-input-area" id="voiceInputArea">
                  <button className="voice-mic-btn" id="voiceMicBtn" title="Record Voice">
                    <svg id="voiceMicIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="23"/>
                      <line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                  </button>
                  <div className="voice-conv-rec" id="voiceConvRec" style={{display:'none'}}>
                    <div className="voice-rec-bottom">
                      <div className="voice-conv-rec-indicator">
                        <div className="voice-rec-dot"></div>
                        <span id="voiceRecLabel">Recording</span>
                      </div>
                      <div className="voice-conv-rec-timer" id="voiceConvTimer">0:00</div>
                      <div className="voice-conv-rec-actions">
                        <button className="voice-rec-action-btn cancel">Cancel</button>
                        <button className="voice-rec-action-btn send">Send</button>
                      </div>
                    </div>
                  </div>

                  <div className="voice-conv-preview" id="voiceConvPreview" style={{display:'none'}}>
                    <div className="voice-conv-preview-player" id="voicePreviewPlayer">
                      <button className="voice-conv-preview-play" id="voiceConvPreviewPlay">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                      </button>
                      <span className="voice-conv-preview-dur" id="voiceConvPreviewDur">0:00</span>
                    </div>
                    <div className="voice-conv-preview-actions">
                      <button className="voice-conv-preview-btn cancel">Delete</button>
                      <button className="voice-conv-preview-btn send" id="voiceConvSendBtn">Send</button>
                    </div>
                    <div className="voice-conv-upload-progress" id="voiceConvUploadProgress" style={{display:'none'}}>
                      <div className="voice-conv-progress-bar"><div className="voice-conv-progress-fill" id="voiceConvProgressFill"></div></div>
                      <div className="voice-conv-progress-label" id="voiceConvProgressLabel">Uploading...</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Video Page */}
          <div className="page" id="videoPage">
            <div className="video-page">

              {/* User List View */}
              <div id="videoUserView">
                <div className="video-list-header">Send Video</div>
                <div className="video-user-list" id="videoUserList">
                  <div className="video-empty" id="videoUserEmpty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <div>No users found</div>
                  </div>
                </div>
              </div>

              {/* Conversation View */}
              <div id="videoConvView" style={{display:'none'}}>
                <div className="video-conv-header">
                  <button className="video-back-btn">&#8592;</button>
                  <div className="video-conv-avatar" id="videoConvAvatar">U</div>
                  <div className="video-conv-name" id="videoConvName">User</div>
                  <button className="video-select-btn" id="videoSelectBtn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                  </button>
                  <button className="video-delete-selected-btn" id="videoDeleteSelectedBtn" style={{display:'none'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                    <span id="videoDeleteCount">0</span>
                  </button>
                </div>

                <div className="video-conv-msgs" id="videoConvMsgs">
                  <div className="video-conv-empty" id="videoConvEmpty">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7"/>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                    </svg>
                    <div>No videos yet</div>
                    <div style={{fontSize:'12px',marginTop:'4px'}}>Tap the camera to send a video</div>
                  </div>
                </div>

                {/* Reply Bar */}
                <div className="video-reply-bar" id="videoReplyBar" style={{display:'none'}}>
                  <div className="video-reply-line"></div>
                  <div className="video-reply-content">
                    <div className="video-reply-label">Replying</div>
                    <div className="video-reply-text" id="videoReplyText"></div>
                  </div>
                  <button className="video-reply-close">&#10005;</button>
                </div>

                {/* Emoji Picker Popup */}
                <div className="video-emoji-picker" id="videoEmojiPicker" style={{display:'none'}}>
                  <div className="video-emoji-list">
                    <span className="video-emoji-opt">&#129300;</span>
                    <span className="video-emoji-opt">&#128513;</span>
                    <span className="video-emoji-opt">&#129309;</span>
                    <span className="video-emoji-opt">&#128557;</span>
                    <span className="video-emoji-opt">&#128533;</span>
                    <span className="video-emoji-opt">&#128578;</span>
                    <span className="video-emoji-opt">&#128077;&#127999;</span>
                    <span className="video-emoji-opt">&#128084;</span>
                    <span className="video-emoji-opt">&#128540;</span>
                    <span className="video-emoji-opt">&#128525;</span>
                    <span className="video-emoji-opt">&#10084;&#65039;</span>
                    <span className="video-emoji-opt">&#128557;</span>
                    <span className="video-emoji-opt">&#128522;</span>
                    <span className="video-emoji-opt">&#128548;</span>
                    <span className="video-emoji-opt">&#129316;</span>
                    <span className="video-emoji-opt">&#128566;</span>
                    <span className="video-emoji-opt">&#128560;</span>
                    <span className="video-emoji-opt">&#129303;</span>
                    <span className="video-emoji-opt">&#128579;</span>
                    <span className="video-emoji-opt">&#128542;</span>
                    <span className="video-emoji-opt">&#128543;</span>
                    <span className="video-emoji-opt">&#128523;</span>
                    <span className="video-emoji-opt">&#128068;</span>
                    <span className="video-emoji-opt">&#129308;</span>
                    <span className="video-emoji-opt">&#128064;</span>
                    <span className="video-emoji-opt">&#129302;</span>
                  </div>
                </div>

                {/* Input / Upload Bar */}
                <div className="video-input-area" id="videoInputArea">
                  <button className="video-cam-btn" id="videoCamBtn" title="Upload Video">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7"/>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                    </svg>
                  </button>
                  <input type="file" id="videoFileInput" accept="video/mp4,video/webm,video/quicktime,video/avi" style={{display:'none'}}/>

                  <div className="video-conv-preview" id="videoConvPreview" style={{display:'none'}}>
                    <div className="video-conv-preview-player" id="videoPreviewPlayer">
                      <video id="videoPreviewEl" style={{maxWidth:'200px',maxHeight:'120px',borderRadius:'8px'}}></video>
                      <span className="video-conv-preview-dur" id="videoPreviewDur">0:00</span>
                    </div>
                    <div className="video-conv-preview-actions">
                      <button className="video-conv-preview-btn cancel">Delete</button>
                      <button className="video-conv-preview-btn send" id="videoConvSendBtn">Send</button>
                    </div>
                    <div className="video-conv-upload-progress" id="videoConvUploadProgress" style={{display:'none'}}>
                      <div className="video-conv-progress-bar"><div className="video-conv-progress-fill" id="videoConvProgressFill"></div></div>
                      <div className="video-conv-progress-label" id="videoConvProgressLabel">Uploading...</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

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

      {/* Action Popup */}
      <div className="action-overlay" id="actionOverlay">
        <div className="action-popup" id="actionPopup">
          <div className="react-row">
            <span className="react-emoji">&#129300;</span>
            <span className="react-emoji">&#128513;</span>
            <span className="react-emoji">&#129309;</span>
            <span className="react-emoji">&#128557;</span>
            <span className="react-emoji">&#128533;</span>
            <span className="react-emoji">&#128578;</span>
            <span className="react-emoji">&#128077;&#127999;</span>
            <span className="react-emoji">&#128084;</span>
            <span className="react-emoji">&#128540;</span>
            <span className="react-emoji">&#128525;</span>
            <span className="react-emoji">&#10084;&#65039;</span>
            <span className="react-emoji">&#128557;</span>
            <span className="react-emoji">&#128522;</span>
            <span className="react-emoji">&#128548;</span>
            <span className="react-emoji">&#129316;</span>
            <span className="react-emoji">&#128566;</span>
            <span className="react-emoji">&#128560;</span>
            <span className="react-emoji">&#129303;</span>
            <span className="react-emoji">&#128579;</span>
            <span className="react-emoji">&#128542;</span>
            <span className="react-emoji">&#128543;</span>
            <span className="react-emoji">&#128523;</span>
            <span className="react-emoji">&#128068;</span>
            <span className="react-emoji">&#129308;</span>
            <span className="react-emoji">&#128064;</span>
            <span className="react-emoji">&#129302;</span>
          </div>
          <div className="act-sep"></div>
          <button className="act-btn" id="actEdit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
            </svg>
            Edit
          </button>
          <div className="act-sep" id="actEditSep"></div>
          <button className="act-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 17 4 12 9 7"/>
              <path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
            </svg>
            Reply
          </button>
          <div className="act-sep" id="actDeleteSep"></div>
          <button className="act-btn danger" id="actDelete">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
              <path d="M10 11v6"/><path d="M14 11v6"/>
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
            </svg>
            Delete
          </button>
        </div>
      </div>

      {/* Edit Overlay */}
      <div className="edit-overlay" id="editOverlay">
        <div className="edit-box">
          <div className="edit-label">Edit message</div>
          <textarea id="editInput" rows="3"></textarea>
          <div className="edit-actions">
            <button className="edit-cancel">Cancel</button>
            <button className="edit-save">Save</button>
          </div>
        </div>
      </div>

      {/* Notifications Container */}
      <div className="notif-container" id="notifContainer"></div>

      {/* Legacy Toast */}
      <div className="toast" id="toast" style={{display:'none'}}>
        <div className="toast-avatar" id="toastAvatar">U</div>
        <div className="toast-content">
          <div className="toast-title" id="toastTitle">User</div>
          <div className="toast-msg" id="toastMsg">New message</div>
        </div>
      </div>

      {/* Incoming Call Overlay */}
      <div className="call-overlay" id="incomingCall">
        <div className="incoming-content" id="incomingContent">
          <div className="incoming-top">
            <div className="incoming-avatar" id="incomingAvatar">U</div>
            <div className="incoming-name" id="incomingName">User</div>
            <div className="incoming-type" id="incomingType">Audio Call</div>
          </div>
          <div className="incoming-bottom">
            <div className="slide-track" id="slideTrack">
              <div className="slide-fill" id="slideFill"></div>
              <span className="slide-text" id="slideText">Slide to answer</span>
              <div className="slide-thumb" id="slideThumb"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            </div>
            <div className="decline-section">
              <button className="decline-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
              <div className="decline-label">Decline</div>
            </div>
          </div>
        </div>
      </div>

      {/* Outgoing Call Overlay */}
      <div className="call-overlay" id="outgoingCall">
        <div className="outgoing-content">
          <div className="outgoing-avatar" id="outgoingAvatar">U</div>
          <div className="outgoing-name" id="outgoingName">User</div>
          <div className="outgoing-status" id="outgoingStatus">Calling...</div>
          <button className="outgoing-end"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
      </div>

      {/* Active Call Overlay */}
      <div className="call-overlay" id="activeCall">
        <div className="active-container">
          <div className="remote-wrap" id="remoteWrap">
            <div className="no-video" id="noVideo">
              <div className="big-av" id="activeBigAvatar">U</div>
              <div id="activeNameText">User</div>
            </div>
            <video id="remoteVideo" autoPlay playsInline style={{display:'none'}}></video>
            <div className="local-wrap" id="localWrap">
              <video id="localVideo" autoPlay playsInline muted style={{display:'none'}}></video>
            </div>
            <div className="call-top-info">
              <div className="call-name" id="activeName">User</div>
              <div className="call-timer" id="callTimer">00:00</div>
            </div>
          </div>
          <div className="call-bottom-controls">
            <div className="ctrl-group">
              <button className="ctrl-btn" id="muteBtn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg></button>
              <span className="ctrl-label">Mute</span>
            </div>
            <div className="ctrl-group">
              <button className="ctrl-btn" id="videoBtn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></button>
              <span className="ctrl-label">Video</span>
            </div>
            <div className="ctrl-group">
              <button className="ctrl-btn" id="speakerBtn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>
              <span className="ctrl-label">Speaker</span>
            </div>
            <div className="ctrl-group">
              <button className="ctrl-btn end-call"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
              <span className="ctrl-label">End</span>
            </div>
          </div>
        </div>
      </div>

      <audio id="remoteAudio" autoPlay playsInline style={{display:'none'}}></audio>

      {/* Uploading Overlay */}
      <div className="uploading-overlay" id="uploadingOverlay">
        <div className="uploading-box">
          <div className="uploading-spinner"></div>
          <div className="uploading-label" id="uploadingLabel">Uploading...</div>
        </div>
      </div>

      {/* Scroll to Bottom Button */}
      <button className="scroll-to-bottom" id="scrollToBottomBtn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {/* Image Viewer Lightbox */}
      <div className="logo-picker-overlay" id="imgViewerOverlay" style={{background:'rgba(0,0,0,0.85)'}}>
        <div style={{maxWidth:'90%',maxHeight:'90%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'16px'}}>
          <img id="imgViewerImg" src="" style={{maxWidth:'100%',maxHeight:'80vh',borderRadius:'8px'}} draggable="false"/>
        </div>
      </div>

      {/* Logo Picker */}
      <div className="logo-picker-overlay" id="logoPickerOverlay">
        <div className="logo-picker-box">
          <div className="logo-picker-title">Choose a Logo</div>
          <div className="logo-grid" id="logoGrid"></div>
          <button className="logo-picker-close">Cancel</button>
        </div>
      </div>

      {/* Logo Adjuster */}
      <div className="logo-adjust-overlay" id="logoAdjustOverlay">
        <div className="adj-header">
          <button className="adj-cancel">Cancel</button>
          <span className="adj-title">Adjust Logo</span>
          <button className="adj-save">Save</button>
        </div>
        <div className="adj-preview-wrap">
          <div className="adj-circle-mask">
            <div className="adj-image" id="adjImage"></div>
          </div>
        </div>
        <div className="adj-footer">
          <span className="adj-zoom-label">Zoom</span>
          <input type="range" id="adjZoom" min="1" max="3" step="0.05" defaultValue="1.2"/>
        </div>
      </div>

      {/* Maintenance Overlay */}
      <div id="maintenanceOverlay">
        <div className="mt-icon">&#128295;</div>
        <div className="mt-badge">Under Maintenance</div>
        <h1>App is Unavailable</h1>
        <p>The app is currently under maintenance. Please check back later.</p>
        <div className="mt-footer">We'll be back soon</div>
      </div>

      {/* Video Loading Overlay */}
      <div id="videoLoadingOverlay" style={{display:'none',position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',zIndex:9999,alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'16px'}}>
        <div className="video-loading-spinner"></div>
        <div style={{color:'white',fontSize:'15px',fontWeight:'600'}}>Loading video from server...</div>
        <div style={{color:'rgba(255,255,255,0.6)',fontSize:'13px'}}>Please wait a moment</div>
      </div>

    </div>
  );
}
