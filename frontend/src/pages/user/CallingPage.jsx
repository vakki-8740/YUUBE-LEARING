import React, { useEffect } from 'react';
import { $, attach, each } from './helpers';

// ==================== CALLING PAGE (active call) ====================
export default function CallingPage() {
  useEffect(() => {
    each('.ctrl-btn.end-call', function(el) { el.onclick = function() { endCall(); }; });
    attach($('flipBtn'), 'onclick', function() { switchCamera(); });
    attach($('muteBtn'), 'onclick', function() { toggleMute(); });
    attach($('videoBtn'), 'onclick', function() { toggleVideo(); });
    attach($('speakerBtn'), 'onclick', function() { toggleSpeaker(); });
  }, []);

  return (
    <>
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
              <button className="ctrl-btn" id="flipBtn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 19H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l1.5-2h7L18 7h2a2 2 0 0 1 2 2v3"/><path d="m16 16 3 3 3-3"/><path d="M19 19v-7"/><path d="m8 8-3-3-3 3"/><path d="M5 5v7"/></svg></button>
              <span className="ctrl-label">Flip</span>
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
    </>
  );
}
