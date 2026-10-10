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
