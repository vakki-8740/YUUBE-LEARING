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
- **File Split Complete**: Single 5520-line `index.html` split into 13 CSS files (`styles/`) and 16 JS files (`js/`). Index.html is now 545 lines with `<link>` and `<script>` references.

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
- `public/user/index.html`: Main user chat app (now 545 lines, references external CSS/JS)
- `public/user/styles/`: 13 CSS files — base, auth, app, chat, actions, call, profile, voice, misc, crop, toast, logo, mobile
- `public/user/js/`: 16 JS files — firebase, state, auth, app, users, messages, actions, ui-helpers, tabs, profile, logo, call, webrtc, upload, voice, logout
- `public/admin/index.html`: Admin panel — untouched
- `backend/server.js`: Express server with voices route mounted
- `backend/routes/voices.js`: Voice recordings CRUD with SQLite
- `backend/routes/voicePacks.js`: Voice pack backend — untouched
- `backend/routes/images.js`: Image upload routes — untouched
- `backend/db.js`: PostgreSQL pool — untouched
- `backend/schema.sql`: DB schema — untouched
