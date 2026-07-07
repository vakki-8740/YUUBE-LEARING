# CHAT APP — COMPLETE PROJECT MEMORY

## 📁 PROJECT STRUCTURE

```
OWN CHAT APP 2/
├── AGENTS.md                    # AI agent working memory & rules
├── memory.md                    # THIS FILE — full project reference
├── idea.md                      # Feature ideas/plans
├── backend/
│   ├── server.js                # Express entry point (port 3000)
│   ├── db.js                    # PostgreSQL pool + initDb()
│   ├── schema.sql               # DB schema with migrations
│   ├── uploads/                 # Uploaded files (images, audio)
│   └── routes/
│       ├── voices.js            # Voice recordings CRUD (base64 audio)
│       ├── voicePacks.js        # Legacy voice pack system
│       └── images.js            # Image upload routes
└── public/
    ├── admin/
    │   └── index.html           # Admin panel (UNTOUCHED)
    └── user/
        ├── index.html           # Main app HTML (566 lines)
        ├── style.css            # Full iOS-style CSS (3499 lines)
        └── script.js            # All JS logic (~2755 lines)
```

---

## 🔥 FIREBASE CONFIG

- **Project**: `own-chat-app-d5fd0`
- **API Key**: `AIzaSyB2j604pnQWRzpu_yE0biwWktths5TxW38`
- **Firestore**: Main database for users, messages, typing, recording, calls
- **Storage**: Photo/video upload (not heavily used — images go to backend)
- **Libraries**: Firebase SDK v10.12.0 (compat)

---

## 🗄️ DATABASE (PostgreSQL — Render)

### Tables

#### `voice_packs` — Legacy voice pack storage
| Column | Type | Notes |
|--------|------|-------|
| id | VARCHAR(36) PK | UUID |
| user_id | VARCHAR(255) NOT NULL | Owner |
| title | VARCHAR(255) | Default '' |
| file_path | VARCHAR(500) NOT NULL | Disk path |
| duration | INTEGER | Seconds |
| file_size | INTEGER | Bytes |
| created_at | TIMESTAMP | Auto |

#### `voice_pack_messages` — Sent voice packs
| Column | Type | Notes |
|--------|------|-------|
| id | VARCHAR(36) PK | UUID |
| sender_id | VARCHAR(255) NOT NULL | |
| receiver_id | VARCHAR(255) NOT NULL | |
| voice_pack_id | VARCHAR(36) FK | References voice_packs |
| conversation | VARCHAR(500) | `${sender}_${receiver}` sorted |
| created_at | TIMESTAMP | Auto |

#### `images` — Image records
| Column | Type | Notes |
|--------|------|-------|
| id | VARCHAR(36) PK | UUID |
| user_id | VARCHAR(255) NOT NULL | |
| file_path | VARCHAR(500) NOT NULL | Disk path |
| file_size | INTEGER | Bytes |
| created_at | TIMESTAMP | Auto |

#### `voice_recordings` — Voice packs (base64 audio in DB)
| Column | Type | Notes |
|--------|------|-------|
| id | VARCHAR(36) PK | UUID |
| user_id | VARCHAR(255) NOT NULL | Creator |
| audio_data | TEXT NOT NULL | base64 encoded audio |
| duration | INTEGER | Seconds |
| file_size | INTEGER | Bytes |
| created_at | TIMESTAMP | Auto |
| receiver_id | VARCHAR(255) | NULL until sent |
| reply_to | VARCHAR(36) | Reference to another recording |
| reactions | TEXT | JSON `{emoji: [userId, ...]}` |
| seen | BOOLEAN | DEFAULT FALSE — read receipt |

---

## 🚀 BACKEND API (`https://yutube-com-pcu9.onrender.com`)

### Server (`server.js`)
- Express + CORS + JSON body parser
- Static `/uploads` with `Content-Disposition: inline` + `nosniff`
- **`GET /api/health`** → `{ status: 'ok' }` (wake-up endpoint)

### Voice Recordings (`/api/voices`)
- **`POST /upload`** — Upload audio (multer memoryStorage → base64 → DB)
- **`GET /list?userId=`** — List recordings (for/to user)
- **`GET /user/:userId`** — User's own recordings
- **`GET /admin/all`** — All recordings (admin)
- **`DELETE /:id`** — Delete recording
- **`POST /send`** — Assign `receiver_id` to a recording (send to user)
- **`POST /send-bulk`** — Assign receiver to all unsent recordings
- **`GET /conversation/:user1/:user2`** — Full conversation between 2 users
- **`POST /:id/react`** — Toggle emoji reaction
- **`POST /mark-seen`** — Mark all recordings from partner as seen

### Voice Packs (`/api/voice-packs`) — Legacy
- **`POST /upload-image`** — Upload image (disk storage)
- **`POST /upload`** — Upload audio (disk storage)
- **`POST /send`** — Send voice pack to user
- **`GET /messages/:userId`** — Get incoming/outgoing messages
- **`DELETE /:id`** — Delete voice pack

### Images (`/api/images`)
- **`POST /upload`** — Upload image (disk storage)

---

## 🖥️ FRONTEND — `index.html` (566 lines)

All CSS in `style.css`, all JS in `script.js`.

### HTML Sections (in order):
1. **Name Screen** — Login/Signup UI
2. **Main App** — Top bar + Pages container + Bottom nav
3. **Chat Page** — User list + Chat area (header, messages, input)
4. **Profile Page** — Avatar, name, info, password, font size, logout
5. **Voice Page** — User list + Conversation view
6. **Overlays** — Action popup, edit, toast, calls, uploading, scroll btn, image viewer, logo picker/adjuster
7. **Scripts** — Firebase SDK compat + `script.js`

### HTML IDs (key elements):
- `nameScreen`, `mainApp`, `nameInput`, `passInput`, `authBtn`, `nameError`
- `myAvatar`, `appTitle`, `chatPage`, `profilePage`, `voicePage`
- `userListArea`, `userList`, `onlineCount`
- `chatArea`, `emptyState`, `chatView`, `messagesArea`
- `typingIndicator`, `recordingIndicator`
- `replyPreviewBar`, `inputBar`, `messageInput`, `sendBtn`, `imgBtn`, `imgInput`
- `profileAvatar`, `profileNameDisplay`, `profileNameInput`, `profileSaveBtn`
- `voiceUserView`, `voiceConvView`, `voiceConvMsgs`, `voiceReplyBar`, `voiceEmojiPicker`
- `voiceMicBtn`, `voiceConvRec`, `voiceConvPreview`, `voiceConvUploadProgress`
- `actionOverlay`, `actionPopup`, `editOverlay`
- `incomingCall`, `outgoingCall`, `activeCall`, `uploadingOverlay`
- `scrollToBottomBtn`, `imgViewerOverlay`

---

## 🎨 STYLING — `style.css` (3499 lines)

### Design System (iOS-style)
- **CSS Variables**: `--ios-blue`, `--ios-green`, `--ios-red`, `--ios-gray*`, `--ios-bg`, `--ios-card`, `--ios-text`, `--safe-top`, `--safe-bottom`, `--msg-font-size`
- **Font**: `-apple-system, BlinkMacSystemFont, SF Pro Display/Text`
- **Backdrop blur**: `.app-topbar`, `.bottom-nav`, `.chat-view .chat-header`
- **Transitions**: pageFadeIn, msgIn, popIn, slideUp, emojiPopIn, typingBounce, recPulse, voicePulse, uploadSpin

### Sections covered:
- Auth screen, Main app, Top bar, Bottom nav
- User list, Chat area, Message bubbles, Input bar
- Action popup, Edit overlay, Reply preview, Toast
- Profile page, Avatar picker, Logo adjuster
- Voice page (user list, conversation, bubbles, player, reactions)
- Recording UI, Preview, Upload progress
- Call feature (incoming/outgoing/active, slide-to-answer)
- Image viewer, Uploading overlay
- **Responsive**: `@media (max-width: 768px)` + `@media (max-width: 420px)`

### Message Bubble Tails (`msg-first`, `msg-mid`, `msg-last`, `msg-single`):
Own messages: right-aligned, blue bg, white text, tail on bottom-right
Other messages: left-aligned, gray bg, dark text, tail on bottom-left

---

## 📜 JAVASCRIPT — `script.js` (~2755 lines)

### Global Variables
```
myId, myName, myPhotoURL, selectedUserId
allUsers[], loadedMsgIds Set, broadcastMessages[]
typingTimeout, lastTypingEmit
unsubUsers, unsubMessages, unsubTyping, unsubRecording, unsubNewMsgNotif, unsubBroadcast
actionMsgId, editingMsgId, replyToMsg
authMode = 'signup' | 'login'
messagePageLimit = 50, hasMoreMessages, isLoadingMore
visibilityHandler, heartbeatInterval (15s)
callsDb, callLocalStream, callPeerConn, currentCallData, callTimerInt
telegramBotToken, telegramChatId
LOGO_URLS[], STUN servers
VOICE_API = 'https://yutube-com-pcu9.onrender.com'
voiceConvPartnerId, voiceConvData[], voiceConvPollTimer (3s)
```

### Functions (grouped by feature):

#### Auth (`joinChat`, `setMode`, `showError`, `handleBeforeUnload`, `handlePageHide`)
- Login/Signup with username + password
- Auto-login if `chatUserName` in localStorage
- Sets `is_online: true/false` on visibility change
- Heartbeat every 15s updates `last_active`

#### User List (`listenUsers`, `renderUsers`, `formatLastSeen`)
- Firestore `users` collection, ordered by `name`
- Shows online status (green dot) / last seen text
- Active user highlight (blue)
- Online count in header

#### Chat Heads Row (`renderChatHeadRow`, `highlightChatHead`)
- Horizontal scrollable avatars at top (mobile)
- Shows online dot on each head

#### Messages (`listenMessages`, `loadMoreMessages`, `createMessageElement`, `appendMessageToArea`, `updateMessageInDOM`)
- Firestore `messages` collection with `conversation` id
- `orderBy('created_at', 'asc')` with `limitToLast(50)`
- Initial load batches snapshot into DocumentFragment
- Real-time `added` → `appendMessageToArea`, `modified` → `updateMessageInDOM`
- **Message grouping**: avatar shown only on first msg in group, time on last msg
- Message types: text, image, voice, deleted
- Reply preview, reactions, edited tag
- Seen indicator **✓✓** (green) for own messages when `msg.seen === true`

#### Send (`sendMessage`, `sendImage`)
- `sendMessage`: creates msgData with `seen: false`, calls Telegram alert
- `sendImage`: uploads to backend `/api/voice-packs/upload-image`, sends Firestore msg with `image.url`
- Both support reply_to

#### Message Actions (`showActionPopup`, `hideActionPopup`, `toggleReaction`, `doDeleteMsg`, `doEditMsg`, `doReplyMsg`, `cancelReply`)
- Long-press / tap on message → popup with React, Reply, Edit (own), Delete (own)
- Reactions: Firestore field `reactions.{userId}: emoji`
- Delete: sets `deleted: true, message: ''`
- Edit: overlay with textarea, sets `edited: true`
- Reply: shows replyPreviewBar, sends `reply_to` in msgData

#### Typing Indicator (`listenTyping`, `handleTyping`)
- Firestore `typing/{convId}` doc with `{ userId: boolean }`
- Emit every 2s, auto-clear after 2s of inactivity

#### Recording Indicator (`listenRecording`, `setRecordingStatus`)
- Firestore `recording/{convId}` doc with `{ userId: boolean }`
- Shows red recording indicator in chat
- Also used for voice conv (`voiceListenRecording`)

#### Seen/Read Receipts (`markMessagesAsSeen`)
- When selecting a user: queries all msgs in conv, batch-updates unseen ones
- Real-time: new msgs from other user get immediately marked `seen: true`
- UI shows **✓✓** green checkmarks on own sent messages when seen

#### Tab Switching (`switchTab`)
- 3 tabs: Chat, Profile, Voice
- Hides/shows pages, updates `appTitle`
- Mobile: resets user list / chat visibility

#### Profile (`loadProfile`, `saveProfile`, `changePassword`, `copyCurrentPass`, `openLogoPicker`, `selectLogo`, `saveLogo`)
- Name change, password change, avatar/logo picker
- Logo picker: grid of 11 logo URLs → adjust zoom/position → save to Firestore + localStorage

#### Logout (`logout`)
- Cleans up all listeners, sets offline in Firestore, clears localStorage

#### Call Feature (`startCall`, `listenForIncomingCalls`, `acceptCall`, `declineCall`, `endCall`, `cleanupCall`)
- WebRTC audio/video calls via Firestore `calls` collection
- STUN: Google public + OpenRelay TURN
- Call states: ringing → ongoing → ended/missed/declined
- Slide-to-answer for incoming calls
- Mute, Video toggle, Speaker toggle
- Ringtone (AudioContext oscillator)
- 30s timeout for unanswered calls

#### Notifications (`listenNewMsgNotifications`, `showNewMsgNotif`)
- Listens for `messages` where `to === myId`
- Shows toast notification for msgs from other users when chat not open

#### Broadcast Voice (`listenBroadcast`, `appendBroadcastMessage`, `renderBroadcastMessages`)
- Messages with `to === '__broadcast__'`
- Shown in chat area with "Broadcast" badge

#### Wake Backend (`wakeBackend`)
- On app start: pings `/api/health` every 2.5s
- Shows full-screen loading overlay with spinner
- Retries until backend responds (max 120s)
- Only then proceeds to initialize app

#### Voice Page (`loadVoiceUserList`, `openVoiceConv`, `closeVoiceConv`, `loadVoiceConvMsgs`, `renderVoicePackBubble`)
- User list → select → conversation view
- Voice packs loaded from backend REST API every 3s (polling)
- Audio player with play/pause, seek bar, duration
- Reply, Reactions (emoji picker), Delete
- Select mode for multi-delete
- Seen indicator ✓✓ on outgoing voice packs

#### Voice Recording (`startVoiceConvRec`, `stopVoiceConvRec`, `cancelVoiceConvRec`, `sendVoiceConvPreview`, `toggleVoiceConvPreview`)
- MediaRecorder API, audio/webm, 24kbps, max 60s
- Recording UI: timer, cancel/send buttons
- Preview with play button
- Upload with progress bar (XHR)
- Recording status indicator via Firestore

#### Telegram Alert (`sendTelegramAlert`)
- Sends message notification to Telegram chat via bot API

---

## 🔥 FIRESTORE DATA MODEL

### Collection: `users`
- Document ID: `user_<timestamp>_<random>`
- Fields: `name`, `username`, `password`, `photoURL`, `is_online`, `last_active`, `last_seen`, `created_at`

### Collection: `messages`
- Document ID: auto-generated
- Fields: `conversation`, `from`, `to`, `created_at`, `message`, `image: { url }`, `voice`, `voice_duration`, `edited`, `deleted`, `seen`, `seen_at`, `reactions: { userId: emoji }`, `reply_to: { id, message, from }`

### Collection: `typing`
- Document ID: `${myId}_${partnerId}` sorted
- Fields: `{ userId: boolean }`

### Collection: `recording`
- Document ID: `${myId}_${partnerId}` sorted
- Fields: `{ userId: boolean }`

### Collection: `calls`
- Document ID: `call_<timestamp>_<random>`
- Fields: `from`, `to`, `type`, `status`, `created_at`, `answered_at`, `ended_at`, `offer`, `answer`, `ice_from[]`, `ice_to[]`

---

## 🔐 SECURITY FEATURES
- Right-click prevention on images/audio/voice messages
- Drag prevention on img/audio elements
- `Content-Disposition: inline` on uploads (no download prompt)
- `X-Content-Type-Options: nosniff`
- Context menu blocked on `.img-msg`, `.voice-msg`, `.voice-card`, `.vp-msg`

---

## 📱 RESPONSIVE BREAKPOINTS
- **Desktop**: Full layout with user list (340px) + chat area
- **Mobile (≤768px)**: Single-column, user list → tap → chat, back button
- **Small mobile (≤420px)**: Smaller avatars, padding, font sizes

---

## 🔄 DATA FLOW PATTERNS

### Text Message Send:
1. User types → `sendMessage()` → Firestore `messages.add({ ... seen: false })`
2. Listener on other side fires `added` → `appendMessageToArea()`
3. Other user's client immediately marks `seen: true` + `seen_at`
4. Original sender's listener fires `modified` → `updateMessageInDOM()` shows **✓✓**

### Image Send:
1. File input → `sendImage()` → upload to backend `/api/voice-packs/upload-image`
2. Backend saves file to `uploads/`, returns URL
3. Frontend adds Firestore message with `image: { url }`

### Voice Pack Send (in voice tab):
1. Tap mic → `startVoiceConvRec()` → MediaRecorder
2. Tap send → `stopVoiceConvRec()` → shows preview
3. Tap send → `sendVoiceConvPreview()` → upload via XHR to `/api/voices/upload`
4. Then `POST /api/voices/send` to assign receiver
5. Frontend polls `/api/voices/conversation/:user1/:user2` every 3s

### Call Flow:
1. Caller: `startCall()` → create `calls` doc (status: 'ringing') → create offer
2. Callee: `listenForIncomingCalls()` → shows incoming overlay
3. Callee slides to accept → `acceptCall()` → creates answer
4. ICE candidates exchanged via Firestore arrays
5. Connection established → ongoing state
6. Either party ends → status 'ended'

---

## ⚠️ CRITICAL NOTES
- `app.js` is LEGACY/UNUSED — all logic in `script.js`
- DO NOT touch `style.css` unless explicitly told (design/CSS rules)
- Messages use `orderBy('created_at', 'asc')` with NO limit — all messages load
- Voice packs polling every 3s — not real-time
- Render backend goes to sleep after inactivity → `wakeBackend()` on app start
- Backend voice recordings use `multer.memoryStorage()` + base64 in PostgreSQL (not disk)
- `seen` field must be included in ALL new message creates
