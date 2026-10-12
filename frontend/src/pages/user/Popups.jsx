import React, { useEffect } from 'react';
import { $, attach, each } from './helpers';

// ==================== POPUPS ====================
// Action popup, edit overlay, notifications, toast, uploading,
// scroll-to-bottom, image viewer, logo picker/adjuster,
// maintenance aur video loading — sab yahin.
export default function Popups() {
  useEffect(() => {
    attach($('scrollToBottomBtn'), 'onclick', function() { scrollToBottomSmooth(); });
    attach($('actionOverlay'), 'onclick', function() { hideActionPopup(); });
    attach($('actionPopup'), 'onclick', function(e) { e.stopPropagation(); });
    attach($('actEdit'), 'onclick', function() { doEditMsg(); });
    attach($('actReply'), 'onclick', function() { doReplyMsg(); });
    attach($('actDelete'), 'onclick', function() { doDeleteMsg(); });
    each('.react-emoji', function(el) { el.onclick = function() { toggleReaction(this.textContent); }; });
    each('.edit-cancel', function(el) { el.onclick = function() { cancelEdit(); }; });
    each('.edit-save', function(el) { el.onclick = function() { saveEdit(); }; });
    each('.logo-picker-close', function(el) { el.onclick = function() { closeLogoPicker(); }; });
    each('.adj-cancel', function(el) { el.onclick = function() { closeLogoAdjuster(); }; });
    each('.adj-save', function(el) { el.onclick = function() { saveLogo(); }; });
    attach($('adjZoom'), 'oninput', function() { adjustLogoZoom(); });
    attach($('imgViewerOverlay'), 'onclick', function(e) { if (e.target === this) closeImgViewer(); });
    attach($('logoPickerOverlay'), 'onclick', function(e) { if (e.target === this) closeLogoPicker(); });
  }, []);

  return (
    <>
      {/* Action Popup */}
      <div className="action-overlay" id="actionOverlay">
        <div className="action-popup" id="actionPopup">
          <div className="react-row">
            <span className="react-emoji">😁</span>
            <span className="react-emoji">😫</span>
            <span className="react-emoji">😂</span>
            <span className="react-emoji">😘</span>
            <span className="react-emoji">🤭</span>
            <span className="react-emoji">😞</span>
            <span className="react-emoji">👍</span>
            <span className="react-emoji">🥺</span>
            <span className="react-emoji">❤️</span>
            <span className="react-emoji">🙄</span>
            <span className="react-emoji">😣</span>
            <span className="react-emoji">🤨</span>
            <span className="react-emoji">😥</span>
            <span className="react-emoji">🫠</span>
            <span className="react-emoji">🤣</span>
            <span className="react-emoji">😅</span>
            <span className="react-emoji">😆</span>
            <span className="react-emoji">😍</span>
            <span className="react-emoji">🥰</span>
            <span className="react-emoji">😙</span>
            <span className="react-emoji">😗</span>
            <span className="react-emoji">🤩</span>
            <span className="react-emoji">🤗</span>
            <span className="react-emoji">😜</span>
            <span className="react-emoji">🤤</span>
            <span className="react-emoji">😛</span>
            <span className="react-emoji">🙃</span>
            <span className="react-emoji">😕</span>
            <span className="react-emoji">🫤</span>
            <span className="react-emoji">😖</span>
            <span className="react-emoji">😭</span>
            <span className="react-emoji">😨</span>
            <span className="react-emoji">😩</span>
            <span className="react-emoji">😤</span>
            <span className="react-emoji">😮‍💨</span>
            <span className="react-emoji">🤒</span>
            <span className="react-emoji">🤕</span>
            <span className="react-emoji">😵‍💫</span>
            <span className="react-emoji">😵</span>
            <span className="react-emoji">🤡</span>
            <span className="react-emoji">👻</span>
            <span className="react-emoji">🙈</span>
            <span className="react-emoji">😻</span>
            <span className="react-emoji">😹</span>
            <span className="react-emoji">🙀</span>
            <span className="react-emoji">👏</span>
            <span className="react-emoji">🤲</span>
          </div>
          <div className="act-sep"></div>
          <button className="act-btn" id="actEdit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
            </svg>
            Edit
          </button>
          <div className="act-sep" id="actEditSep"></div>
          <button className="act-btn" id="actReply">
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
    </>
  );
}
