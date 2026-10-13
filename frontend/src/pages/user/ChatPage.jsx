import React, { useEffect } from 'react';
import HomePage from './HomePage';
import { $, attach, each } from './helpers';

// ==================== CHAT PAGE (conversation) ====================
// Yahan sab kuch hota hai — text, image, video, voice note aur voice pack.
// Purane Voice/Video tabs jaise ke taise bante rahe hain (unka data aur
// UI bilkul chhua nahi gaya), bas chat me bhi sab kuch bhejne ka rasta hai.
export default function ChatPage() {
  useEffect(() => {
    attach($('sendBtn'), 'onclick', function() { sendMessage(); });
    attach($('attachBtn'), 'onclick', function(e) { e.stopPropagation(); toggleChatAttachMenu(); });
    attach($('imgInput'), 'onchange', function() { sendImage(this); });
    attach($('chatVideoInput'), 'onchange', function() { sendChatVideo(this); });
    attach($('messageInput'), 'oninput', function() { autoResize(this); handleTyping(); });
    attach($('messageInput'), 'onkeydown', function(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
    each('.back-btn', function(el) { el.onclick = function() { goBack(); }; });
    each('.rpb-close', function(el) { el.onclick = function() { cancelReply(); }; });

    // Attach menu ke 4 options — Image / Video / Voice Note / Voice Pack
    each('.chat-attach-opt', function(el) {
      el.onclick = function() {
        var kind = el.getAttribute('data-kind');
        closeChatAttachMenu();
        if (kind === 'image') { $('imgInput') && $('imgInput').click(); }
        else if (kind === 'video') { $('chatVideoInput') && $('chatVideoInput').click(); }
        else if (kind === 'voice') { startChatVoiceRec(); }
        else if (kind === 'pack') { openChatPackPicker(); }
      };
    });

    // Voice note: record / cancel / send / preview controls
    attach($('chatRecCancel'), 'onclick', function() { cancelChatVoiceRec(); });
    attach($('chatRecSend'), 'onclick', function() { stopChatVoiceRec(true); });
    attach($('chatVoiceDiscard'), 'onclick', function() { discardChatVoicePreview(); });
    attach($('chatVoiceSend'), 'onclick', function() { sendChatVoicePreview(); });
    attach($('chatVoicePlay'), 'onclick', function() { toggleChatVoicePreview(); });

    // Voice pack picker
    attach($('chatPackClose'), 'onclick', function() { closeChatPackPicker(); });

    // Menu ke bahar click karte hi band. Attach button apne click par
    // stopPropagation() lagata hai, warna menu khulte hi turant band ho
    // jaata.
    function onDocClick() { closeChatAttachMenu(); }
    document.addEventListener('click', onDocClick);
    return function() { document.removeEventListener('click', onDocClick); };
  }, []);

  // Chat Area
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
                <button className="call-btn" id="callMenuBtn" title="Call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 5 5 0 0 1-2.87-3.07A19.79 19.79 0 0 1 2 12.08 2 2 0 0 1 4.11 4h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></button>
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

            {/* Attach menu — Image / Video / Voice Note / Voice Pack */}
            <div className="chat-attach-menu" id="chatAttachMenu" style={{display:'none'}}>
              <button className="chat-attach-opt" data-kind="image">
                <span className="cam-ico cam-ico-img">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                </span>
                <span className="cam-txt"><span className="cam-name">Image</span><span className="cam-sub">Photos &amp; gallery</span></span>
              </button>
              <button className="chat-attach-opt" data-kind="video">
                <span className="cam-ico cam-ico-vid">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                </span>
                <span className="cam-txt"><span className="cam-name">Video</span><span className="cam-sub">Clip bhejo</span></span>
              </button>
              <button className="chat-attach-opt" data-kind="voice">
                <span className="cam-ico cam-ico-voice">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </span>
                <span className="cam-txt"><span className="cam-name">Voice Note</span><span className="cam-sub">Abhi record karo</span></span>
              </button>
              <button className="chat-attach-opt" data-kind="pack">
                <span className="cam-ico cam-ico-pack">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </span>
                <span className="cam-txt"><span className="cam-name">Voice Pack</span><span className="cam-sub">Apni saved pack bhejo</span></span>
              </button>
            </div>

            {/* Voice pack picker — user ke saved packs */}
            <div className="chat-pack-picker" id="chatPackPicker" style={{display:'none'}}>
              <div className="cpp-header">
                <span>Send Voice Pack</span>
                <button id="chatPackClose">&#10005;</button>
              </div>
              <div className="cpp-list" id="chatPackList"></div>
            </div>

            {/* Recording bar — record ho raha hai */}
            <div className="chat-rec-bar" id="chatRecBar" style={{display:'none'}}>
              <button className="chat-rec-btn cancel" id="chatRecCancel">Cancel</button>
              <div className="chat-rec-mid">
                <span className="chat-rec-dot"></span>
                <span className="chat-rec-label" id="chatRecLabel">Recording</span>
                <span className="chat-rec-timer" id="chatRecTimer">0:00</span>
              </div>
              <button className="chat-rec-btn send" id="chatRecSend">Done</button>
            </div>

            {/* Preview bar — record ho chuka, send ya delete */}
            <div className="chat-rec-bar" id="chatVoicePreview" style={{display:'none'}}>
              <button className="chat-rec-btn cancel" id="chatVoiceDiscard">Delete</button>
              <div className="chat-rec-mid">
                <button className="chat-voice-play" id="chatVoicePlay">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <span className="chat-rec-timer" id="chatVoiceDur">0:00</span>
                <div className="chat-voice-progress"><div className="chat-voice-progress-fill" id="chatVoiceProgressFill"></div></div>
              </div>
              <button className="chat-rec-btn send" id="chatVoiceSend">Send</button>
            </div>

            <div className="input-bar">
              <button className="img-btn" id="attachBtn" title="Attach">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
              <input type="file" id="imgInput" accept="image/*" style={{display:'none'}}/>
              <input type="file" id="chatVideoInput" accept="video/*" style={{display:'none'}}/>
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