import React, { useEffect } from 'react';
import { $, attach, each } from './helpers';

// ==================== CALLING POPUPS ====================
// Start-call menu, incoming call popup, outgoing call popup
// aur chhota call toast.
export default function CallingPopup() {
  useEffect(() => {
    // Header wala EK call button → popup me Voice/Video choose karke Call
    attach($('callMenuBtn'), 'onclick', function() { openCallMenu(); });
    attach($('callMenuCancel'), 'onclick', function() { closeCallMenu(); });
    attach($('callMenuStart'), 'onclick', function() { confirmStartCall(); });
    attach($('callMenuOverlay'), 'onclick', function(e) { if (e.target === this) closeCallMenu(); });
    each('.call-menu-opt', function(el) {
      el.onclick = function() { selectCallType(el.getAttribute('data-call-type')); };
    });
    // Incoming call popup ke Accept / Reject buttons
    attach($('incomingAccept'), 'onclick', function() { acceptCall(); });
    attach($('incomingReject'), 'onclick', function() { declineCall(); });
    each('.outgoing-end', function(el) { el.onclick = function() { endCall(); }; });
  }, []);

  return (
    <>
      {/* Start Call Menu (header wale ek call button ka popup) */}
      <div className="call-overlay" id="callMenuOverlay">
        <div className="call-menu-card">
          <div className="call-menu-title">Start Call</div>
          <div className="call-menu-options">
            <button className="call-menu-opt" data-call-type="audio">
              <span className="cmo-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
              <span className="cmo-txt">
                <span className="cmo-name">Voice Call</span>
                <span className="cmo-sub">Mic only</span>
              </span>
              <span className="cmo-check"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            </button>
            <button className="call-menu-opt" data-call-type="video">
              <span className="cmo-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></span>
              <span className="cmo-txt">
                <span className="cmo-name">Video Call</span>
                <span className="cmo-sub">Camera + mic</span>
              </span>
              <span className="cmo-check"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            </button>
          </div>
          <div className="call-menu-actions">
            <button className="call-menu-btn cm-cancel" id="callMenuCancel">Cancel</button>
            <button className="call-menu-btn cm-start" id="callMenuStart" disabled>Call</button>
          </div>
        </div>
      </div>
      {/* Incoming Call Overlay — chhota popup + blur background */}
      <div className="call-overlay" id="incomingCall">
        <div className="incoming-card" id="incomingContent">
          <div className="incoming-avatar" id="incomingAvatar">U</div>
          <div className="incoming-name" id="incomingName">User</div>
          <div className="incoming-type" id="incomingType">Audio Call</div>
          <div className="incoming-actions">
            <button className="inc-btn inc-reject" id="incomingReject">
              <span className="inc-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c0 .42.06.83.17 1.22"/><line x1="1" y1="1" x2="23" y2="23"/></svg></span>
              <span className="inc-lbl">Reject</span>
            </button>
            <button className="inc-btn inc-accept" id="incomingAccept">
              <span className="inc-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
              <span className="inc-lbl">Accept</span>
            </button>
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
      {/* Call button tap par chhota confirmation popup */}
      <div className="call-toast" id="callToast"></div>
    </>
  );
}
