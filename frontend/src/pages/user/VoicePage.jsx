import React, { useEffect } from 'react';
import { $, attach, each } from './helpers';

// ==================== VOICE PACK PAGE ====================
export default function VoicePage() {
  useEffect(() => {
    attach($('voiceMicBtn'), 'onclick', function() { startVoiceConvRec(); });
    attach($('voiceConvPreviewPlay'), 'onclick', function() { toggleVoiceConvPreview(); });
    attach($('voiceConvSendBtn'), 'onclick', function() { sendVoiceConvPreview(); });
    attach($('voiceSelectBtn'), 'onclick', function() { toggleVoiceSelectMode(); });
    attach($('voiceDeleteSelectedBtn'), 'onclick', function() { deleteSelectedVoicePacks(); });
    each('.voice-back-btn', function(el) { el.onclick = function() { closeVoiceConv(); }; });
    each('.voice-rec-action-btn.cancel', function(el) { el.onclick = function() { cancelVoiceConvRec(); }; });
    each('.voice-rec-action-btn.send', function(el) { el.onclick = function() { stopVoiceConvRec(); }; });
    each('.voice-conv-preview-btn.cancel', function(el) { el.onclick = function() { cancelVoiceConvPreview(); }; });
    each('.voice-reply-close', function(el) { el.onclick = function() { cancelVoiceReply(); }; });
    each('.voice-emoji-opt', function(el) { el.onclick = function() { pickReaction(this.textContent); }; });
    each('.voice-mic-btn', function(el) { el.onclick = function() { startVoiceConvRec(); }; });
  }, []);

  // Voice Page
  return (
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
                <span className="voice-emoji-opt">😁</span>
                <span className="voice-emoji-opt">😫</span>
                <span className="voice-emoji-opt">😂</span>
                <span className="voice-emoji-opt">😘</span>
                <span className="voice-emoji-opt">🤭</span>
                <span className="voice-emoji-opt">😞</span>
                <span className="voice-emoji-opt">👍</span>
                <span className="voice-emoji-opt">🥺</span>
                <span className="voice-emoji-opt">❤️</span>
                <span className="voice-emoji-opt">🙄</span>
                <span className="voice-emoji-opt">😣</span>
                <span className="voice-emoji-opt">🤨</span>
                <span className="voice-emoji-opt">😥</span>
                <span className="voice-emoji-opt">🫠</span>
                <span className="voice-emoji-opt">🤣</span>
                <span className="voice-emoji-opt">😅</span>
                <span className="voice-emoji-opt">😆</span>
                <span className="voice-emoji-opt">😍</span>
                <span className="voice-emoji-opt">🥰</span>
                <span className="voice-emoji-opt">😙</span>
                <span className="voice-emoji-opt">😗</span>
                <span className="voice-emoji-opt">🤩</span>
                <span className="voice-emoji-opt">🤗</span>
                <span className="voice-emoji-opt">😜</span>
                <span className="voice-emoji-opt">🤤</span>
                <span className="voice-emoji-opt">😛</span>
                <span className="voice-emoji-opt">🙃</span>
                <span className="voice-emoji-opt">😕</span>
                <span className="voice-emoji-opt">🫤</span>
                <span className="voice-emoji-opt">😖</span>
                <span className="voice-emoji-opt">😭</span>
                <span className="voice-emoji-opt">😨</span>
                <span className="voice-emoji-opt">😩</span>
                <span className="voice-emoji-opt">😤</span>
                <span className="voice-emoji-opt">😮‍💨</span>
                <span className="voice-emoji-opt">🤒</span>
                <span className="voice-emoji-opt">🤕</span>
                <span className="voice-emoji-opt">😵‍💫</span>
                <span className="voice-emoji-opt">😵</span>
                <span className="voice-emoji-opt">🤡</span>
                <span className="voice-emoji-opt">👻</span>
                <span className="voice-emoji-opt">🙈</span>
                <span className="voice-emoji-opt">😻</span>
                <span className="voice-emoji-opt">😹</span>
                <span className="voice-emoji-opt">🙀</span>
                <span className="voice-emoji-opt">👏</span>
                <span className="voice-emoji-opt">🤲</span>
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
  );
}
