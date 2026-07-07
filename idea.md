# SEEN / READ RECEIPTS FEATURE — complete idea & implementation plan

## 🎯 FEATURE CONCEPT
**"Seen" ya "Read Receipts"** — jab koi user aapka message padh leta hai toh aapko pata chal jaaye. Tick marks/message status indicator.

### Types of Seen supported:
1. **Text Messages** — ✓ (single gray) → ✓✓ (double gray = delivered) → ✓✓ (blue/green = seen)
2. **Image Messages** — same tick system + `seen_at` timestamp
3. **Voice Recordings** — seen status per voice pack (backend `voice_recordings.seen` column)
4. **Voice Packs (legacy)** — seen via Firestore field
5. **Broadcast Messages** — seen stats (how many recipients saw it)

---

## ✅ WHAT IS ALREADY IMPLEMENTED

### Frontend (`script.js`)

#### `markMessagesAsSeen()` — Core function
- Called when user opens a chat (selects a user)
- Queries Firestore `messages` where `conversation === convId`, `from === partnerId`, `seen === false`
- Uses `getDocs()` + `writeBatch` to batch-update `seen: true` + `seen_at: serverTimestamp()`
- Only marks up to `messagePageLimit` (50) at a time

#### Real-time auto-seen
- New messages arriving via `onSnapshot` are immediately marked `seen: true`
- Done in `listenMessages()` → when a `added` message is from partner, auto-mark seen

#### UI ✓✓ indicator
- In `createMessageElement()`: own messages show tick marks
- `msg.seen === true` → green ✓✓ in `msg-status` span
- `msg.seen === undefined/false` → single gray ✓
- Seen indicator is inside `.msg-meta` next to timestamp

#### `updateMessageInDOM()`
- When Firestore snapshot fires `modified` event, updates existing DOM element
- If `seen` changed from false→true, visually updates the tick marks
- Handles `seen_at` timestamp display

### Backend — Voice Recordings (`routes/voices.js`)

#### `POST /:id/mark-seen`
- Endpoint to mark a single voice recording as seen
- Updates `voice_recordings.seen = TRUE` WHERE `id = :id`

#### `POST /mark-seen`
- Batch endpoint: marks ALL recordings from a specific sender to a specific receiver as seen
- Body: `{ senderId, receiverId }`
- SQL: `UPDATE voice_recordings SET seen = TRUE WHERE receiver_id = $1 AND seen = FALSE`
- Returns `{ modifiedCount: N }`

### Database (`voice_recordings` table)
- `seen BOOLEAN DEFAULT FALSE` column already exists
- Ready for seen tracking

---

## ❌ WHAT IS NOT YET IMPLEMENTED / GAPS

### Voice Packs (Legacy) — No seen tracking
- Voice pack messages in Firestore have NO `seen` field
- No `markMessagesAsSeen()` equivalent for voice pack messages
- No UI indicator for seen on outgoing voice pack messages

### Voice Recordings Frontend — No Seen UI
- `voice_recordings.seen` column exists in DB and `POST /mark-seen` endpoint works
- BUT frontend (`loadVoiceConvMsgs()`) never calls the mark-seen endpoint
- `renderVoicePackBubble()` does NOT show ✓✓ / seen indicator
- When user opens a voice conversation, app should call `POST /voices/mark-seen`
- UI should show gray/green double-check on outgoing voice recordings

### Broadcast Messages — No Seen Stats
- Broadcast messages (`to === '__broadcast__'`) have NO per-user seen tracking
- No way to know how many recipients have seen a broadcast
- No admin UI for broadcast seen stats

### Image Messages — Seen Works But No `seen_at`
- Image messages use standard Firestore `seen: true/false`
- But `seen_at` timestamp is inconsistently set
- Image viewer overlay doesn't differentiate between seen/unseen images

### Call History — No "Missed Call" Seen
- Call records (`calls` collection) have status ('ended', 'declined', 'missed')
- No "seen" indicator for missed calls in call history
- User doesn't know if the other person knows they missed a call

### Typing Indicator Interference
- Currently typing indicator listener is disconnected when `selectedUserId !== partnerId`
- `markMessagesAsSeen()` is called on user select but NOT when chat is already open and a new message arrives from another conversation (need to handle app visibility / tab switch)

---

## 📋 IMPLEMENTATION PLAN (IF USER WANTS)

### Phase 1 — Voice Recordings Seen UI
1. In `openVoiceConv()` → after loading conv msgs, call `POST /voices/mark-seen`
2. In `renderVoicePackBubble()` → detect `msg.seen === true` and show green ✓✓
3. Add seen indicator styling in `.voice-msg .msg-status` or similar
4. Add polling update → when new recordings load, re-check seen status

### Phase 2 — Voice Pack (Legacy) Seen
1. Add `seen: false` to voice pack message Firestore documents
2. Update `markMessagesAsSeen()` to also handle voice pack messages
3. Add seen UI in voice pack bubble rendering
4. Ensure `onSnapshot` listener auto-marks voice pack msgs as seen

### Phase 3 — Broadcast Seen Stats
1. Create Firestore subcollection `broadcast_seen/{msgId}/seen_by/{userId}`
2. When any user reads a broadcast message, add doc with `{ userId, seen_at }`
3. Show seen count in broadcast message bubble (e.g., "Seen by 3/15")
4. Admin panel: list all recipients + seen status per broadcast

### Phase 4 — Missed Call Seen
1. Add `call_seen: false` field to `calls` collection
2. When user opens app / becomes active, mark all missed calls as `call_seen: true`
3. Show seen/unseen indicator in any future call history UI

### Phase 5 — Global Seen Improvements
1. Replace `messagePageLimit` batch with staggered processing (mark first 50 visible, then next 50, etc.)
2. Add `seen_count` to message data for group conversations (if implemented)
3. Optimize `writeBatch` to handle more than 500 writes (use multiple batches)
4. Add animation when ✓ turns into ✓✓ (green tick transition)

---

## 🔧 TECHNICAL NOTES

### Firestore Query Pattern (text/images)
```js
const q = query(
  collection(db, 'messages'),
  where('conversation', '==', convId),
  where('from', '==', partnerId),
  where('seen', '==', false),
  limit(messagePageLimit)
);
const snapshot = await getDocs(q);
const batch = writeBatch(db);
snapshot.forEach(doc => {
  batch.update(doc.ref, { seen: true, seen_at: serverTimestamp() });
});
await batch.commit();
```

### Backend SQL (voice recordings batch seen)
```sql
UPDATE voice_recordings
SET seen = TRUE
WHERE receiver_id = $1
  AND seen = FALSE
  AND user_id = $2;
```

### Firestore Security Rules (seen field)
```
match /messages/{msgId} {
  allow read: if request.auth != null;
  allow update: if request.auth != null
    && request.resource.data.seen == true
    && resource.data.seen == false;
}
```

---

## 📌 KEY DECISIONS
- **Real-time vs Polling**: Text/image seen → Firestore real-time (instant). Voice recordings → polling (every 3s) + sync on open
- **Storage**: Seen status stored directly on message document (not separate collection) for simplicity
- **Batch operations**: Use `writeBatch` (max 500) for bulk mark-seen to avoid Firestore rate limits
- **Privacy**: No "last seen at" shown to user (only double-check mark). Optionally add `seen_at` in message details
- **Edge case — Offline**: If user sends message while offline, seen is set when messages sync. No double-sync issues because Firestore handles offline writes queue
