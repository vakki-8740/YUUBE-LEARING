import React, { useEffect } from 'react';
import { $, attach, each } from './helpers';

// ==================== VIDEO MANAGE PAGE ====================
export default function VideoPage() {
  useEffect(() => {
    attach($('videoFileInput'), 'onchange', function(e) { handleVideoFileSelect(e); });
    attach($('videoCamBtn'), 'onclick', function() { triggerVideoUpload(); });
    attach($('videoConvSendBtn'), 'onclick', function() { sendVideoPreview(); });
    attach($('videoSelectBtn'), 'onclick', function() { toggleVideoSelectMode(); });
    attach($('videoDeleteSelectedBtn'), 'onclick', function() { deleteSelectedVideoRecordings(); });
    each('.video-back-btn', function(el) { el.onclick = function() { closeVideoConv(); }; });
    each('.video-conv-preview-btn.cancel', function(el) { el.onclick = function() { cancelVideoPreview(); }; });
    each('.video-reply-close', function(el) { el.onclick = function() { cancelVideoReply(); }; });
    each('.video-emoji-opt', function(el) { el.onclick = function() { pickVideoReaction(this.textContent); }; });
    each('#videoFileInput', function(el) { el.onchange = function(e) { handleVideoFileSelect(e); }; });
  }, []);

  // Video Page
  return (
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
                <span className="video-emoji-opt">😁</span>
                <span className="video-emoji-opt">😫</span>
                <span className="video-emoji-opt">😂</span>
                <span className="video-emoji-opt">😘</span>
                <span className="video-emoji-opt">🤭</span>
                <span className="video-emoji-opt">😞</span>
                <span className="video-emoji-opt">👍</span>
                <span className="video-emoji-opt">🥺</span>
                <span className="video-emoji-opt">❤️</span>
                <span className="video-emoji-opt">🙄</span>
                <span className="video-emoji-opt">😣</span>
                <span className="video-emoji-opt">🤨</span>
                <span className="video-emoji-opt">😥</span>
                <span className="video-emoji-opt">🫠</span>
                <span className="video-emoji-opt">🤣</span>
                <span className="video-emoji-opt">😅</span>
                <span className="video-emoji-opt">😆</span>
                <span className="video-emoji-opt">😍</span>
                <span className="video-emoji-opt">🥰</span>
                <span className="video-emoji-opt">😙</span>
                <span className="video-emoji-opt">😗</span>
                <span className="video-emoji-opt">🤩</span>
                <span className="video-emoji-opt">🤗</span>
                <span className="video-emoji-opt">😜</span>
                <span className="video-emoji-opt">🤤</span>
                <span className="video-emoji-opt">😛</span>
                <span className="video-emoji-opt">🙃</span>
                <span className="video-emoji-opt">😕</span>
                <span className="video-emoji-opt">🫤</span>
                <span className="video-emoji-opt">😖</span>
                <span className="video-emoji-opt">😭</span>
                <span className="video-emoji-opt">😨</span>
                <span className="video-emoji-opt">😩</span>
                <span className="video-emoji-opt">😤</span>
                <span className="video-emoji-opt">😮‍💨</span>
                <span className="video-emoji-opt">🤒</span>
                <span className="video-emoji-opt">🤕</span>
                <span className="video-emoji-opt">😵‍💫</span>
                <span className="video-emoji-opt">😵</span>
                <span className="video-emoji-opt">🤡</span>
                <span className="video-emoji-opt">👻</span>
                <span className="video-emoji-opt">🙈</span>
                <span className="video-emoji-opt">😻</span>
                <span className="video-emoji-opt">😹</span>
                <span className="video-emoji-opt">🙀</span>
                <span className="video-emoji-opt">👏</span>
                <span className="video-emoji-opt">🤲</span>
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
  );
}
