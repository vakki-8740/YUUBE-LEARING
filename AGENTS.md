## Goal
- Build and maintain a chat web app with voice recording, image sharing, real-time indicators, and secure media handling.

## Constraints & Preferences
- Read project thoroughly before making changes
- Only change what's explicitly asked — nothing extra
- Only modify the specific file/folder requested; don't touch others unless told
- No own-accord changes — only do what user says
- Take confirmation before changes, but don't ask permission for every tiny change
- **NEVER touch design/CSS** of unrelated features unless explicitly asked
- User prefers Hindi communication for descriptions
- Backend deployment is at `https://yutube-com-pcu9.onrender.com` (Render)
- GitHub repo: `https://github.com/vakki-8740/yutube.com.git`

## Progress
### Done
- **VP Feature Removed**: All voice pack CSS, HTML, JS, vp.html deleted from frontend
- **Voice Recording Page Added**: Complete voice recording feature with MediaRecorder API, SQLite (sql.js) backend, upload/download/list/delete
- **Media Security**: Removed image download button, prevented right-click/drag on images/audio, added Content-Disposition: inline headers
- **Voice Page Redesign**: Mic FAB button at bottom center, recording/preview as bottom sheets, bottom nav hidden during sheets
- **Upload Button Fix**: Fixed bottom sheet overflow so upload button is visible
- **Bottom Sheet Fix**: Sheets now hide bottom nav when open (z-index 200)
- **Refresh Button Removed**: Removed from voice recordings page header
- **Recording Indicator**: Real-time "Recording..." indicator using Firestore (same pattern as typing indicator)
- **Voice Backend Fix**: Rewrote voices.js to use `prepare()`/`step()`/`getAsObject()`, proper DB persistence with `persistDb()`, DB initialization lock with `dbReady` promise
- **NEW Badge for Voice Recordings**: Badge based on play status (localStorage `listenedVoices`) — disappears after playing
- **Mobile Layout Fixes**: `overflow: hidden` / `min-width: 0` on chat-view, chat-header, input-bar, messages-area, body
- **Chat Message Loading Fix**: Reverted pagination attempt, back to original `orderBy('asc')` without limit
- **File Split Complete → Merged Back**: Split into 13 CSS + 16 JS files, then merged back into single index.html (~5600 lines). All CSS in `<style>`, all JS in `<script>`.
- **Voice Recordings Fix**: Added cache-busting (`?t=Date.now()`), `cache: 'no-store'`, debounce (300ms), safe error handling on `loadVoiceRecordings()`
- **Voice Button Removed**: Removed voice-negative-btn from chat input bar (chat.css + mobile.css cleanup)
- **Input Bar Cleanup**: Consolidated duplicate `.send-btn` rules, removed `overflow: hidden` from `.input-bar`
- **Voice Persistence Fix**: Migrated voice recordings from SQLite (sql.js) to PostgreSQL + base64 audio storage. Fix for Render ephemeral filesystem wiping SQLite data on dyno restart. Removed sql.js dependency, used multer.memoryStorage(), audio stored as base64 TEXT in PostgreSQL.
- **Online/Offline Fix**: Added error handler to Firestore onSnapshot listener in listenUsers(). Re-subscribe listenUsers() on visibilitychange (tab visible) to fix mobile browsers pausing/throttling the snapshot listener in background.
- **Telegram Bot Removed**: Deleted telegram-bot/ directory. Replaced with PWA control page at `public/control/`.
- **App Control PWA Page**: New standalone page at `public/control/index.html` with ON/OFF toggle, status display, auto-refresh. PWA enabled (manifest.json + sw.js) — installable on mobile via "Add to Home Screen".
- **Page/Code Splitting (performance)**: Every route is now its own lazy-loaded chunk (`React.lazy` in `App.jsx`), and the old single `frontend/public/script.js` (3742 lines) was split into `script-core.js` (chat/auth/calls), `script-voice.js` (voice tab) and `script-video.js` (video tab). Voice/video load on first tab open via `ensureScriptLoaded()` in core. `escapeHtmlAttr`, `getTimeAgo` and `showVideoLoading`/`hideVideoLoading` were moved into core because both tab scripts need them. Video's `showError` was renamed to `showVideoError` so it stops clobbering core's login-error `showError`.
- **Calls Fixed (user panel)**: The two `.call-btn` buttons in the chat header had no click handler at all, so `startCall()` was never triggered — audio and video calls both did nothing. Bound them in `UserChat.jsx` to a new `startCallToSelected(type)` helper in core. Also fixed: video calls were playing the same `MediaStream` on both `remoteVideo` and `remoteAudio` (double audio) — now video calls play audio from `remoteVideo` and only audio-only calls use `remoteAudio`, with `toggleSpeaker()` following the active element. `cleanupCall()` now clears `srcObject` (it was setting `.src`, leaving the previous remote stream attached), `onconnectionstatechange` is null-guarded, and `acceptCall()` waits up to 5s for the caller's offer instead of crashing on `JSON.parse('')` when the callee slides to answer instantly.
- **Call Audio Noise / Not Stopping**: Reported background noise during calls that kept playing after the call ended. Three causes fixed. (1) `ontrack` was attaching the remote `MediaStream` to *both* `remoteVideo` and `remoteAudio` — the doubled audio phase-flips into noise. The remote stream now goes to exactly one element: `remoteVideo` for video calls, `remoteAudio` for audio-only calls. The audio-only stream is no longer attached to `remoteVideo` at all, because that `<video>` carries `autoplay` and would fight the `pause()`. (2) `endCall()` awaited the Firestore `update` *before* `cleanupCall()`, so if that write hung the call audio never stopped — cleanup now runs first and the Firestore write is fire-and-forget. `cleanupCall()` also stops the remote tracks (`callRemoteStream`), not just the local ones. (3) Audio constraints were `audio: true`; now explicitly `echoCancellation`, `noiseSuppression` and `autoGainControl` are all on via `CALL_AUDIO_CONSTRAINTS`/`getCallStream()` in both `startCall()` and `acceptCall()`.
- **Switch Camera (video calls)**: Video calls were stuck on the front camera. New "Flip" button in the active-call controls (`#flipBtn` in `UserChat.jsx`, bound to `switchCamera()` in core). `switchCamera()` opens the other camera with `getUserMedia({ facingMode })` and swaps it in with `RTCRtpSender.replaceTrack()`, so the call does not renegotiate or drop. The old track is removed from `callLocalStream` and stopped, the local preview is re-attached, `newTrack.enabled` follows `isVideoOn` so switching while muted-video keeps it off, and `callFacingMode` is tracked from `getSettings().facingMode` and reset on every new call. Rapid double-taps are blocked by a `switchingCamera` guard; failure (single-camera devices) alerts and stops the throwaway track. `showActiveCallUI()` dims the button on audio calls, and `.call-bottom-controls` gained `flex-wrap: wrap` so the fifth control does not push End off small screens.
- **Call Lifecycle / Real-time Fixes**: Five bugs behind "cancel par bhi call screen rehti hai", "accept karne par kuch nahi hota" and "call beech me kat jaati hai".
  1. `listenForIncomingCalls()` only handled `status === 'ringing'` and never reacted to a *status change*. When the caller cancelled, the callee's ring screen + ringtone stayed up for the full 30s `missedTimeout`. It now watches its own `currentCallData.callId` and calls `cleanupCall()` the moment status becomes `ended`/`declined`/`missed`. Same pass also auto-declines a new incoming call when the user is already busy on another one (previously the `!currentCallData` guard meant it just rang out).
  2. ICE candidates were applied with a bare `try/catch` *before* `setRemoteDescription` resolved, and the counter was incremented regardless — a candidate that failed was lost forever, so the call looked connected but no media flowed. Candidates now go through `addIceSafe()` into `pendingIceCandidates` when there is no remote description yet, and `flushPendingIce()` drains them after it is set (in `acceptCall()` and in the new awaited `applyAnswer()`).
  3. The caller's `setRemoteDescription(answer)` was a floating un-awaited promise, so ICE could be processed out of order. Replaced with async `applyAnswer()`, guarded by `applyingAnswer`, which also clears `missedTimeout` once answered.
  4. `onconnectionstatechange` killed the call instantly on `disconnected` (a normal transient mobile state) and only called `cleanupCall()` — never wrote `status: 'ended'`, so the other side hung on a dead call. Now `connected` cancels a pending fail timer, `failed`/`closed` call `endCall()` (which writes the status), and `disconnected` gets an 8s grace period first.
  5. Handlers were attached to the global `callPeerConn`, so a stale connection's `ontrack`/`onicecandidate` could target a newer call's doc and DOM. `setupPeerConn()` now captures `const pc = callPeerConn` and every handler bails if `callPeerConn !== pc`; `cleanupCall()` nulls `callPeerConn` *before* `pc.close()` to avoid re-entry. State (`pendingIceCandidates`, `applyingAnswer`, `connFailTimer`) is reset in `startCall()`, `showIncomingCall()` and `cleanupCall()`.
  Also: `listenForIncomingCalls()` is re-subscribed on `visibilitychange` alongside `listenUsers()`, because mobile browsers throttle snapshot listeners in the background and calls were being missed.
- **Calling UI Redesign (user panel only)**: Header had two `.call-btn`s (audio/video); now there is one `#callMenuBtn` that opens `#callMenuOverlay` — a popup with Voice/Video options and a **Call** button that stays `disabled` until an option is picked (`openCallMenu`/`selectCallType`/`confirmStartCall`/`closeCallMenu` replace `startCallToSelected`). Incoming call is no longer a full page: `#incomingCall` is now a small `.incoming-card` (avatar + name + Accept/Reject buttons `#incomingAccept`/`#incomingReject`) over a blurred backdrop; the slide-to-answer control and its `initSlide`/`resetSlide`/`slideState` code were deleted (Admin.jsx has its own copy). `.call-overlay` (menu, incoming, outgoing, active) gained `backdrop-filter: blur(26px)` + translucent black, and `.active-container` is now a centred card (`min(420px, …)`, radius 30, own background) with a fixed-height `.remote-wrap` instead of `flex:1`. New `#callToast` + `showCallToast()` give a small confirmation on every control tap — Mute/Unmute, Video on/off, Speaker on/off, Camera switched, Call connected, Call ended. Avatars on incoming/outgoing/active screens now show the user's photo via `setCallAvatar()` (initial letter as fallback). `user.css` lost the dead `.slide-*` / `.decline-*` rules and `.incoming-content` / `.incoming-bottom` / `.incoming-top`.
- **User Panel Split Into One File Per Page**: `UserChat.jsx` (1141 lines) was the whole user panel. It is now a thin shell (`useEffect` for Firebase + `script-core.js` loading, top bar, bottom nav, page composition) and every page lives in `src/pages/user/` with only its own markup **and its own DOM bindings** (the single 100-line `attach(...)` block was split by owner): `PinPage.jsx`, `NameScreen.jsx`, `HomePage.jsx` (online user list), `ChatPage.jsx` (hosts `HomePage` + conversation), `ProfilePage.jsx`, `VoicePage.jsx`, `VideoPage.jsx`, `Popups.jsx` (action popup, edit, notifications, toast, uploading, scroll-to-bottom, image viewer, logo picker/adjuster, maintenance, video loading), `CallingPopup.jsx` (start-call menu, incoming, outgoing, call toast), `CallingPage.jsx` (active call + `remoteAudio`), plus `helpers.js` (`$`/`attach`/`each`). Everything renders through React fragments, so the produced DOM and the root-level stacking order are byte-for-byte what they were; a diff of `id="…"` and `className="…"` between old and new shows only the intentional PIN removals. The duplicated `muteBtn`/`videoBtn`/`speakerBtn` binding was collapsed into `CallingPage.jsx`.
- **PIN Page: White Background + Own Digit Keypad**: `#pinOverlay` background is `#ffffff` (was `#000`), and the "Enter PIN" / "Enter 6-digit PIN to continue" labels are gone — only the lock icon remains (now a blue gradient circle). The six `<input>`s were replaced by non-focusable `.pin-dot` divs, so the **device soft keyboard can never open** (the old `autoFocus` on the first input was what popped it up). Tapping the fill row (`onClick` on `.pin-inputs`) slides up `.pin-keypad` — a 3×4 grid of digits `1-9`, `C`, `0`, `⌫` handled entirely in React state; `#pinOverlay.keypad-open` switches the layout to `align-items: flex-start` so the Submit button is not covered by the keypad on short screens. Correct PIN `272026` and the "Galat PIN hai!" error are unchanged. `pinValues`/`pinError`/`handlePinInput`/`handlePinKey`/`pinRefs` now live inside `PinPage.jsx` (self-contained, keeps its own `pinVerified` state).

### In Progress
- (none)

### Blocked
- (none)

## Key Decisions
- Used `sql.js` (pure JS SQLite) instead of `better-sqlite3` because Windows lacks Visual Studio build tools
- Used `prepare()`/`step()`/`getAsObject()` in voices.js instead of `database.exec()` for reliable data retrieval
- Voice page uses bottom-sheet pattern (not full page) for recording/preview states
- Recording indicator uses Firestore `recording/{convId}` collection with `onSnapshot` listener
- `setRecordingStatus(true/false)` called on start/stop/cancel of voice recording
- Pagination attempt (`limitToLast` + `onSnapshot`) removed — causes Firestore listener issues with new messages
- "NEW" badge changed from time-based (24h) to play-status-based (localStorage `listenedVoices` array)
- File split approach: SPA with CSS/JS split (not 3 separate HTML pages)

## Critical Context
- `listenMessages()` uses simple `orderBy('created_at', 'asc')` with no limit — all messages load but chat works reliably
- `loadedMsgIds` Set prevents duplicate rendering
- Voice recordings NEW badge uses `localStorage` key `listenedVoices` (array of recording IDs)
- Mobile layout fixes applied globally
- HTTP API base: `VOICE_API` variable points to backend

## Relevant Files
- `frontend/src/pages/UserChat.jsx`: Main user chat app (React shell; real DOM logic lives in `public/script-core.js`)
- `frontend/public/script-core.js`: Chat, auth, profile, calls, typing/recording — loaded on every app start
- `frontend/public/script-voice.js`: Voice tab — loaded lazily on first Voice tab open
- `frontend/public/script-video.js`: Video tab — loaded lazily on first Video tab open
- `frontend/src/pages/Admin.jsx`: Admin panel
- `backend/server.js`: Express server with voices route mounted
- `backend/routes/voices.js`: Voice recordings CRUD with SQLite
- `backend/routes/voicePacks.js`: Voice pack backend — untouched
- `backend/routes/images.js`: Image upload routes — untouched
- `backend/db.js`: PostgreSQL pool — untouched
- `backend/schema.sql`: DB schema — untouched
- `public/control/`: App Control PWA page (index.html, manifest.json, sw.js, icons/)
- `backend/routes/appControl.js`: Admin app enable/disable toggle
