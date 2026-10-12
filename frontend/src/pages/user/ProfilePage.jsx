import React, { useEffect } from 'react';
import { $, attach, each } from './helpers';

// ==================== PROFILE PAGE ====================
export default function ProfilePage() {
  useEffect(() => {
    attach($('profileAvatar'), 'onclick', function() { openLogoPicker(); });
    attach($('profileNameInput'), 'onkeydown', function(e) { if (e.key === 'Enter') saveProfile(); });
    attach($('fontSizeSlider'), 'oninput', function() { changeFontSize(this.value); });
    attach($('pushToggleInput'), 'onchange', function() { togglePushNotifications(this.checked); });
    each('.profile-save-btn', function(el, i) { el.onclick = function() { i === 0 ? saveProfile() : changePassword(); }; });
    each('.profile-logout-btn', function(el) { el.onclick = function() { logout(); }; });
    const copyBtn = document.querySelector('#oldPassInput + button');
    if (copyBtn) copyBtn.onclick = function() { copyCurrentPass(); };
  }, []);

  // Profile Page
  return (
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
  );
}
