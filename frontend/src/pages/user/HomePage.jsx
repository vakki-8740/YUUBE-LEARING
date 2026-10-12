import React from 'react';

// ==================== HOME PAGE (online user list) ====================
export default function HomePage() {
  return (
    <>
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
    </>
  );
}
