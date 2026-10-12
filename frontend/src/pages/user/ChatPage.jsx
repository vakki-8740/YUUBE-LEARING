import React, { useEffect } from 'react';
import HomePage from './HomePage';
import { $, attach, each } from './helpers';

// ==================== CHAT PAGE (conversation) ====================
export default function ChatPage() {
  useEffect(() => {
    attach($('sendBtn'), 'onclick', function() { sendMessage(); });
    attach($('imgBtn'), 'onclick', function() { $('imgInput') && $('imgInput').click(); });
    attach($('imgInput'), 'onchange', function() { sendImage(this); });
    attach($('messageInput'), 'oninput', function() { autoResize(this); handleTyping(); });
    attach($('messageInput'), 'onkeydown', function(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
    each('.back-btn', function(el) { el.onclick = function() { goBack(); }; });
    each('.rpb-close', function(el) { el.onclick = function() { cancelReply(); }; });
  }, []);

  return (
    <div className="page active" id="chatPage">
      <div className="main-content">
        <HomePage />
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
                <button className="call-btn" id="callMenuBtn" title="Call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></button>
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
                {/* Default: device ki soft keyboard (inputMode ki koi
                    value nahi). App keyboard Settings se ON ho toh
                    ChatKeyboard.jsx is textarea ko inputMode="none"
                    bana deta hai. */}
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
  );
}
