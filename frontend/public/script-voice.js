// ==================== VOICE PACK CONVERSATION ====================
let voiceConvPartnerId = null;
let voiceConvPartnerName = '';
let voiceConvData = [];
let voiceConvAudio = null;
let voiceConvPlayEl = null;
let voiceConvInterval = null;
let voiceConvPollTimer = null;
let voiceReplyToId = null;
let voiceReplyToName = '';
let voiceUnsubRecording = null;

var voiceAudioCache = {
  _data: {},
  _order: [],
  _size: 0,
  _maxEntries: 30,
  _maxSize: 50 * 1024 * 1024,
  get: function(id) {
    var item = this._data[id];
    if (!item) return null;
    var idx = this._order.indexOf(id);
    if (idx > -1) { this._order.splice(idx, 1); this._order.push(id); }
    return item.url;
  },
  set: function(id, url, fileSize) {
    if (this._data[id]) {
      this._size -= this._data[id].size || 0;
      var idx = this._order.indexOf(id);
      if (idx > -1) this._order.splice(idx, 1);
    }
    var entrySize = fileSize || (url ? Math.round(url.length * 0.75) : 0);
    this._data[id] = { url: url, size: entrySize };
    this._order.push(id);
    this._size += entrySize;
    this._evict();
  },
  _evict: function() {
    while ((this._order.length > this._maxEntries || this._size > this._maxSize) && this._order.length > 0) {
      var oldest = this._order.shift();
      if (oldest && this._data[oldest]) {
        this._size -= this._data[oldest].size;
        delete this._data[oldest];
      }
    }
  },
  remove: function(id) {
    if (this._data[id]) {
      this._size -= this._data[id].size || 0;
      delete this._data[id];
      var idx = this._order.indexOf(id);
      if (idx > -1) this._order.splice(idx, 1);
    }
  },
  clear: function() {
    this._data = {};
    this._order = [];
    this._size = 0;
  }
};

let voiceRecMediaRecorder = null;
let voiceRecChunks = [];
let voiceRecStartTime = null;
let voiceRecTimer = null;

function loadVoiceUserList() {
  var list = document.getElementById('voiceUserList');
  var users = allUsers.filter(function(u) { return u.id !== myId; });
  if (users.length === 0) {
    list.innerHTML = '<div class="voice-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><div>No users found</div></div>';
    return;
  }
  list.innerHTML = users.map(function(u) {
    var initial = (u.name || 'U').charAt(0).toUpperCase();
    var avatar = u.photoURL ? '<img src="' + u.photoURL + '">' : initial;
    return '<div class="voice-user-item" onclick="openVoiceConv(\'' + u.id + '\',\'' + escapeHtmlAttr(u.name) + '\')">' +
      '<div class="voice-user-avatar">' + avatar + '</div>' +
      '<div class="voice-user-info">' +
        '<div class="voice-user-name">' + escapeHtml(u.name) + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function openVoiceConv(userId, userName) {
  voiceConvPartnerId = userId;
  voiceConvPartnerName = userName;
  voiceSelectMode = false;
  voiceSelectedIds = [];
  document.getElementById('voiceUserView').style.display = 'none';
  var cv = document.getElementById('voiceConvView');
  cv.style.display = 'flex';
  cv.style.flexDirection = 'column';
  cv.style.height = '100%';
  document.getElementById('voiceConvName').textContent = userName;
  var avatar = document.getElementById('voiceConvAvatar');
  var user = allUsers.find(function(u) { return u.id === userId; });
  if (user && user.photoURL) {
    avatar.innerHTML = '<img src="' + user.photoURL + '">';
  } else {
    avatar.textContent = (userName || 'U').charAt(0).toUpperCase();
  }
  updateVoiceSelectUI();
  loadVoiceConvMsgs();
  if (voiceConvPollTimer) clearInterval(voiceConvPollTimer);
  voiceConvPollTimer = setInterval(loadVoiceConvMsgs, 3000);
  voiceListenRecording();
  // Mark voice packs as seen
  fetch(VOICE_API + '/api/voices/mark-seen', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ viewerId: myId, partnerId: userId })
  }).catch(function() {});
  document.getElementById('voiceConvMsgs').onclick = function(e) {
    var bubble = e.target.closest('.voice-pack-bubble');
    if (!bubble || !voiceSelectMode) return;
    if (e.target.closest('button, .voice-pack-action, .voice-pack-play, .voice-reaction, .voice-emoji-picker')) return;
    toggleVoiceSelectItem(bubble.dataset.vpId);
  };
}

function closeVoiceConv() {
  if (voiceConvAudio) {
    voiceConvAudio.pause();
    if (voiceConvAudio.tagName === 'VIDEO') voiceConvAudio.src = '';
    voiceConvAudio = null;
  }
  stopPlaybackRAF(null);
  if (voiceConvPollTimer) clearInterval(voiceConvPollTimer);
  if (voiceUnsubRecording) { voiceUnsubRecording(); voiceUnsubRecording = null; }
  voiceConvPlayEl = null;
  voiceConvPartnerId = null;
  voiceConvData = [];
  voiceSelectMode = false;
  voiceSelectedIds = [];
  cancelVoiceReply();
  var cv = document.getElementById('voiceConvView');
  if (cv) cv.style.display = 'none';
  var uv = document.getElementById('voiceUserView');
  if (uv) uv.style.display = 'block';
}

function scrollVoiceConvDown() {
  var msgs = document.getElementById('voiceConvMsgs');
  msgs.scrollTop = msgs.scrollHeight;
}

async function loadVoiceConvMsgs() {
  if (!voiceConvPartnerId || !myId) return;
  try {
    var res = await fetch(VOICE_API + '/api/voices/conversation/' + encodeURIComponent(myId) + '/' + encodeURIComponent(voiceConvPartnerId) + '?t=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed');
    var data = await res.json();
    var msgsEl = document.getElementById('voiceConvMsgs');
    var prevCount = voiceConvData.length;
    voiceConvData = data;
    if (data.length === 0) {
      msgsEl.innerHTML = '<div class="voice-conv-empty" id="voiceConvEmpty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg><div>No media yet</div><div style="font-size:12px;margin-top:4px;">Tap the mic to send media</div></div>';
      return;
    }
    var html = data.map(function(p) { return renderVoicePackBubble(p); }).join('');
    msgsEl.innerHTML = html;
    if (data.length > prevCount) {
      setTimeout(scrollVoiceConvDown, 50);
    }
  } catch (err) {
    console.error('Voice conv load error:', err);
  }
}

function renderVoicePackBubble(p) {
  var isOutgoing = p.user_id === myId;
  var side = isOutgoing ? 'outgoing' : 'incoming';
  var user = allUsers.find(function(u) { return u.id === p.user_id; });
  var name = user ? user.name : 'User';
  var time = p.created_at ? getTimeAgo(new Date(p.created_at + 'Z')) : '';
  var dur = formatDuration(p.duration || 0);
  var isVideo = p.media_type && p.media_type.startsWith('video/');
  var reacted = {};
  try { reacted = JSON.parse(p.reactions) || {}; } catch(e) {}
  var myReactions = [];
  for (var emoji in reacted) {
    if (reacted[emoji].includes(myId)) myReactions.push(emoji);
  }
  var reactionsHtml = '';
  var hasReactions = false;
  for (var emoji in reacted) {
    if (reacted[emoji].length > 0) {
      hasReactions = true;
      var activeClass = myReactions.includes(emoji) ? ' active' : '';
      reactionsHtml += '<span class="voice-reaction' + activeClass + '" onclick="voiceToggleReaction(\'' + p.id + '\',\'' + emoji + '\')">' + emoji + ' <span class="vr-count">' + reacted[emoji].length + '</span></span>';
    }
  }
  if (hasReactions) reactionsHtml = '<div class="voice-pack-reactions">' + reactionsHtml + '</div>';

  var replyHtml = '';
  if (p.reply_to) {
    var repliedPack = voiceConvData.find(function(v) { return v.id === p.reply_to; });
    var repliedName = '';
    if (repliedPack) {
      var repliedUser = allUsers.find(function(u) { return u.id === repliedPack.user_id; });
      repliedName = repliedUser ? repliedUser.name : 'User';
    }
    replyHtml = '<div class="voice-pack-reply-ref"><span class="vpr-icon">G�</span><span class="vpr-label">' + escapeHtml(repliedName) + '</span></div>';
  }

  var deleteBtn = '';
  if (isOutgoing) {
    deleteBtn = '<button class="voice-pack-action voice-pack-action--delete" onclick="deleteVoicePack(\'' + p.id + '\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> Delete</button>';
  }

  var isSelected = voiceSelectedIds.indexOf(p.id) > -1;
  var selectClass = '';
  if (voiceSelectMode) {
    selectClass = ' select-allowed' + (isSelected ? ' selected' : '');
  }

  var mediaHtml = '<div class="voice-pack-player">' +
    '<button class="voice-pack-play" onclick="voiceConvPlay(this)" data-id="' + p.id + '">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>' +
    '</button>' +
    '<div class="voice-pack-bar" onclick="voiceConvSeek(event,this)" data-dur="' + (p.duration || 0) + '">' +
      '<div class="voice-pack-bar-fill"><div class="voice-pack-bar-knob"></div></div>' +
    '</div>' +
    '<span class="voice-pack-dur">' + dur + '</span>' +
  '</div>';

  return '<div class="voice-pack-bubble ' + side + selectClass + '" data-vp-id="' + p.id + '">' +
    '<div class="voice-pack-check">' +
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' +
    '</div>' +
    '<div class="voice-pack-header">' +
      '<span class="vpb-name">' + escapeHtml(name) + '</span>' +
      '<span class="vpb-time">' + time + (isOutgoing && p.seen ? ' <span style="color:var(--ios-green);font-size:10px">G��G��</span>' : '') + '</span>' +
    '</div>' +
    '<div class="voice-pack-body">' +
      replyHtml +
      mediaHtml +
      reactionsHtml +
    '</div>' +
    '<div class="voice-pack-actions">' +
      deleteBtn +
      '<button class="voice-pack-action voice-pack-action--reply" onclick="replyToVoiceMsg(\'' + p.id + '\',\'' + escapeHtmlAttr(name) + '\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg> Reply</button>' +
      '<button class="voice-pack-action voice-pack-action--react" onclick="showEmojiPicker(event,\'' + p.id + '\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> React</button>' +
    '</div>' +
  '</div>';
}

function voiceConvPlay(btn) {
  var id = btn.dataset.id;
  var bubble = btn.closest('.voice-pack-bubble');
  if (!bubble || !id) return;
  var bar = bubble.querySelector('.voice-pack-bar');
  var fill = bubble.querySelector('.voice-pack-bar-fill');
  var dur = parseFloat(bar ? bar.dataset.dur : 0) || 0;
  var playSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';
  var pauseSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';

  if (voiceConvAudio && voiceConvPlayEl === btn && !voiceConvAudio.paused) {
    voiceConvAudio.pause();
    btn.classList.remove('playing');
    btn.innerHTML = playSvg;
    stopPlaybackRAF(null);
    return;
  }
  if (voiceConvAudio && voiceConvPlayEl === btn && voiceConvAudio.paused) {
    voiceConvAudio.play();
    btn.classList.add('playing');
    btn.innerHTML = pauseSvg;
    startPlaybackRAF(fill, dur);
    return;
  }

  if (voiceConvAudio) {
    voiceConvAudio.pause();
    if (voiceConvPlayEl) {
      voiceConvPlayEl.classList.remove('playing');
      voiceConvPlayEl.innerHTML = playSvg;
      var pf = voiceConvPlayEl.closest('.voice-pack-bubble');
      if (pf) {
        var pfBar = pf.querySelector('.voice-pack-bar-fill');
        stopPlaybackRAF(pfBar);
      }
    } else {
      stopPlaybackRAF(null);
    }
    voiceConvAudio = null;
    voiceConvPlayEl = null;
  }

  var cachedUrl = voiceAudioCache.get(id);
  if (cachedUrl) {
    playNewAudio(btn, cachedUrl, fill, dur, playSvg, pauseSvg, id);
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
  fetch(VOICE_API + '/api/voices/' + id + '/audio?t=' + Date.now(), { cache: 'no-store' })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      voiceAudioCache.set(id, data.audio_url, data.file_size || 0);
      btn.disabled = false;
      playNewAudio(btn, data.audio_url, fill, dur, playSvg, pauseSvg, id);
      preloadNextVoice(id);
    })
    .catch(function() {
      btn.disabled = false;
      btn.innerHTML = playSvg;
    });
}

function playNewAudio(btn, url, fill, dur, playSvg, pauseSvg, id) {
  if (!voiceConvPartnerId) return;
  if (voiceConvAudio) {
    voiceConvAudio.pause();
    if (voiceConvPlayEl) {
      voiceConvPlayEl.classList.remove('playing');
      voiceConvPlayEl.innerHTML = playSvg;
      var pf = voiceConvPlayEl.closest('.voice-pack-bubble');
      if (pf) {
        var pfBar = pf.querySelector('.voice-pack-bar-fill');
        stopPlaybackRAF(pfBar);
      }
    } else {
      stopPlaybackRAF(null);
    }
  }
  voiceConvAudio = new Audio(url);
  voiceConvPlayEl = btn;
  voiceConvAudio.onended = function() {
    btn.classList.remove('playing');
    btn.innerHTML = playSvg;
    stopPlaybackRAF(fill);
    voiceConvAudio = null;
    voiceConvPlayEl = null;
    if (id) preloadNextVoice(id);
  };
  voiceConvAudio.play();
  btn.classList.add('playing');
  btn.innerHTML = pauseSvg;
  startPlaybackRAF(fill, dur);
}

// iOS-style smooth playback using requestAnimationFrame
function startPlaybackRAF(fill, dur) {
  if (voiceConvInterval) cancelAnimationFrame(voiceConvInterval);
  fill.classList.add('active');
  function tick() {
    if (voiceConvAudio && !voiceConvAudio.paused) {
      var ct = voiceConvAudio.currentTime || 0;
      var total = voiceConvAudio.duration || dur || 1;
      fill.style.width = Math.min((ct / Math.max(total, 1)) * 100, 100) + '%';
      voiceConvInterval = requestAnimationFrame(tick);
    } else {
      voiceConvInterval = null;
    }
  }
  voiceConvInterval = requestAnimationFrame(tick);
}
function stopPlaybackRAF(fill) {
  if (voiceConvInterval) { cancelAnimationFrame(voiceConvInterval); voiceConvInterval = null; }
  if (fill) { fill.classList.remove('active'); fill.style.width = '0%'; }
}

function preloadNextVoice(currentId) {
  if (!voiceConvData || voiceConvData.length === 0) return;
  var idx = -1;
  for (var i = 0; i < voiceConvData.length; i++) {
    if (voiceConvData[i].id === currentId) { idx = i; break; }
  }
  if (idx < 0 || idx >= voiceConvData.length - 1) return;
  var next = voiceConvData[idx + 1];
  if (!next || voiceAudioCache.get(next.id)) return;
  fetch(VOICE_API + '/api/voices/' + next.id + '/audio?t=' + Date.now(), { cache: 'no-store' })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      voiceAudioCache.set(next.id, data.audio_url, data.file_size || 0);
    })
    .catch(function() {});
}

function voiceConvSeek(event, bar) {
  if (!voiceConvAudio || !voiceConvPlayEl) return;
  var bubble = voiceConvPlayEl.closest('.voice-pack-bubble');
  if (!bubble || bubble.querySelector('.voice-pack-bar') !== bar) return;
  var rect = bar.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var pct = Math.max(0, Math.min(1, x / rect.width));
  var dur = parseFloat(bar.dataset.dur) || 0;
  if (voiceConvAudio.tagName === 'VIDEO') {
    voiceConvAudio.currentTime = pct * (voiceConvAudio.duration || dur);
  } else {
    voiceConvAudio.currentTime = pct * dur;
  }
}

function replyToVoiceMsg(id, name) {
  voiceReplyToId = id;
  voiceReplyToName = name;
  var bar = document.getElementById('voiceReplyBar');
  if (bar) {
    bar.style.display = 'flex';
    document.getElementById('voiceReplyText').textContent = 'Reply to ' + name;
  }
}

function cancelVoiceReply() {
  voiceReplyToId = null;
  voiceReplyToName = '';
  var bar = document.getElementById('voiceReplyBar');
  if (bar) bar.style.display = 'none';
}

var voiceConvPreviewBlob = null;
var voiceConvPreviewDur = 0;
var voiceConvPreviewAudio = null;

function startVoiceConvRec() {
  if (!myId) return;
  navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
    voiceRecChunks = [];
    voiceRecStartTime = Date.now();
    var opts = { mimeType: 'audio/webm' };
    if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) opts.mimeType = 'audio/webm;codecs=opus';
    opts.audioBitsPerSecond = 24000;
    voiceRecMediaRecorder = new MediaRecorder(stream, opts);
    voiceRecMediaRecorder.ondataavailable = function(e) { if (e.data.size > 0) voiceRecChunks.push(e.data); };
    voiceRecMediaRecorder.onstop = function() {
      stream.getTracks().forEach(function(t) { t.stop(); });
      setRecordingStatus(false, voiceConvPartnerId);
      voiceConvPreviewDur = Math.floor((Date.now() - voiceRecStartTime) / 1000);
      voiceConvPreviewBlob = new Blob(voiceRecChunks, { type: 'audio/webm' });
      document.getElementById('voiceMicBtn').style.display = 'none';
      document.getElementById('voiceConvRec').style.display = 'none';
      showVoiceConvPreview();
    };
    voiceRecMediaRecorder.start();
    setRecordingStatus(true, voiceConvPartnerId);
    document.getElementById('voiceMicBtn').style.display = 'none';
    document.getElementById('voiceConvRec').style.display = 'flex';
    document.getElementById('voiceConvTimer').textContent = '0:00';
    document.getElementById('voiceRecLabel').textContent = 'Recording';
    if (voiceRecTimer) clearInterval(voiceRecTimer);
    voiceRecTimer = setInterval(function() {
      var sec = Math.floor((Date.now() - voiceRecStartTime) / 1000);
      if (sec >= 300) stopVoiceConvRec();
      document.getElementById('voiceConvTimer').textContent = formatDuration(sec);
    }, 200);
  }).catch(function(err) {
    alert('Microphone access is required to record voice packs.');
  });
}

function showVoiceConvPreview() {
  document.getElementById('voiceConvPreview').style.display = 'flex';
  document.getElementById('voiceConvPreviewDur').textContent = formatDuration(voiceConvPreviewDur);
  document.getElementById('voiceConvUploadProgress').style.display = 'none';
  document.getElementById('voiceConvSendBtn').disabled = false;
  document.getElementById('voicePreviewPlayer').style.display = 'flex';
  var playBtn = document.getElementById('voiceConvPreviewPlay');
  playBtn.classList.remove('playing');
  playBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';
}

function toggleVoiceConvPreview() {
  var btn = document.getElementById('voiceConvPreviewPlay');
  if (!voiceConvPreviewBlob) return;
  if (voiceConvPreviewAudio && !voiceConvPreviewAudio.paused) {
    voiceConvPreviewAudio.pause();
    btn.classList.remove('playing');
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';
    return;
  }
  if (!voiceConvPreviewAudio) {
    voiceConvPreviewAudio = new Audio(URL.createObjectURL(voiceConvPreviewBlob));
    voiceConvPreviewAudio.onended = function() {
      btn.classList.remove('playing');
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';
      voiceConvPreviewAudio = null;
    };
  }
  voiceConvPreviewAudio.play();
  btn.classList.add('playing');
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
}

function cancelVoiceConvPreview() {
  if (voiceConvPreviewAudio) { voiceConvPreviewAudio.pause(); voiceConvPreviewAudio = null; }
  voiceConvPreviewBlob = null;
  voiceConvPreviewDur = 0;
  document.getElementById('voiceConvPreview').style.display = 'none';
  document.getElementById('voiceMicBtn').style.display = 'flex';
  document.getElementById('voiceConvPreviewPlay').classList.remove('playing');
}

function sendVoiceConvPreview() {
  if (!voiceConvPreviewBlob) return;
  if (voiceConvPreviewAudio) { voiceConvPreviewAudio.pause(); voiceConvPreviewAudio = null; }
  var progress = document.getElementById('voiceConvUploadProgress');
  var fill = document.getElementById('voiceConvProgressFill');
  var label = document.getElementById('voiceConvProgressLabel');
  var btn = document.getElementById('voiceConvSendBtn');
  progress.style.display = 'flex';
  btn.disabled = true;
  fill.style.width = '0%';
  label.textContent = 'Uploading...';

  var formData = new FormData();
  formData.append('audio', voiceConvPreviewBlob, 'voice.webm');
  formData.append('userId', myId);
  formData.append('duration', voiceConvPreviewDur);
  if (voiceReplyToId) {
    formData.append('reply_to', voiceReplyToId);
  }

  var xhr = new XMLHttpRequest();
  xhr.open('POST', VOICE_API + '/api/voices/upload');
  xhr.upload.onprogress = function(e) {
    if (e.lengthComputable) {
      var pct = Math.round((e.loaded / e.total) * 100);
      fill.style.width = pct + '%';
      label.textContent = 'Uploading... ' + pct + '%';
    }
  };
  xhr.onload = function() {
    if (xhr.status === 200) {
      label.textContent = 'Upload complete!';
      fill.style.width = '100%';
      var resp;
      try { resp = JSON.parse(xhr.responseText); } catch(e) { return; }
      cancelVoiceReply();
      document.getElementById('voiceConvPreview').style.display = 'none';
      document.getElementById('voiceMicBtn').style.display = 'flex';
      fetch(VOICE_API + '/api/voices/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordingId: resp.id, senderId: myId, receiverId: voiceConvPartnerId })
      }).then(function() {
        loadVoiceConvMsgs();
        var toName = getUserName(voiceConvPartnerId);
        showNotif('voice-send', '\uD83C\uDF99\uFE0F', 'Voice sent', 'to ' + toName);
        if (typeof sendTelegramAlert === 'function' && telegramBotToken && telegramChatId && voiceConvPreviewBlob) {
          var toName = getUserName(voiceConvPartnerId);
          var caption = '\uD83D\uDC64 User: ' + myName + '\n\uD83D\uDCE7 To: ' + toName + '\n\uD83C\uDF99\uFE0F Voice Recording\n\uD83D\uDD52 Time: ' + new Date().toLocaleString('en-IN');
          var tgForm = new FormData();
          tgForm.append('chat_id', telegramChatId);
          tgForm.append('audio', voiceConvPreviewBlob, 'voice_' + resp.id + '.webm');
          tgForm.append('caption', caption);
          fetch('https://api.telegram.org/bot' + telegramBotToken + '/sendAudio', {
            method: 'POST',
            body: tgForm
          }).catch(function(err) { console.error('Telegram voice error:', err); });
        }
        voiceConvPreviewBlob = null;
        voiceConvPreviewDur = 0;
      }).catch(function() { loadVoiceConvMsgs(); voiceConvPreviewBlob = null; voiceConvPreviewDur = 0; });
    } else {
      label.textContent = 'Upload failed. Try again.';
      btn.disabled = false;
    }
  };
  xhr.onerror = function() {
    label.textContent = 'Network error. Try again.';
    btn.disabled = false;
  };
  xhr.send(formData);
}

function stopVoiceConvRec() {
  if (voiceRecMediaRecorder && voiceRecMediaRecorder.state === 'recording') {
    voiceRecMediaRecorder.stop();
    if (voiceRecTimer) clearInterval(voiceRecTimer);
  }
}

function cancelVoiceConvRec() {
  if (voiceRecMediaRecorder && voiceRecMediaRecorder.state === 'recording') {
    voiceRecMediaRecorder.stream.getTracks().forEach(function(t) { t.stop(); });
    voiceRecMediaRecorder = null;
  }
  if (voiceRecTimer) clearInterval(voiceRecTimer);
  setRecordingStatus(false, voiceConvPartnerId);
  voiceRecChunks = [];
  document.getElementById('voiceMicBtn').style.display = 'flex';
  document.getElementById('voiceConvRec').style.display = 'none';
}

function uploadVoicePack(blob, duration) {
  var formData = new FormData();
  formData.append('audio', blob, 'voice.webm');
  formData.append('userId', myId);
  formData.append('duration', duration);
  if (voiceReplyToId) {
    formData.append('reply_to', voiceReplyToId);
  }
  var xhr = new XMLHttpRequest();
  xhr.open('POST', VOICE_API + '/api/voices/upload');
  xhr.onload = function() {
    if (xhr.status === 200) {
      var resp;
      try { resp = JSON.parse(xhr.responseText); } catch(e) { return; }
      cancelVoiceReply();
      fetch(VOICE_API + '/api/voices/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordingId: resp.id, senderId: myId, receiverId: voiceConvPartnerId })
      }).then(function() { loadVoiceConvMsgs(); }).catch(function() { loadVoiceConvMsgs(); });
    } else {
      alert('Failed to upload voice pack.');
    }
  };
  xhr.onerror = function() {
    alert('Network error. Try again.');
  };
  xhr.send(formData);
}

var voiceReactingId = null;
var voiceSelectMode = false;
var voiceSelectedIds = [];

function toggleVoiceSelectMode() {
  voiceSelectMode = !voiceSelectMode;
  voiceSelectedIds = [];
  updateVoiceSelectUI();
  loadVoiceConvMsgs();
}

function toggleVoiceSelectItem(id) {
  var idx = voiceSelectedIds.indexOf(id);
  if (idx > -1) {
    voiceSelectedIds.splice(idx, 1);
  } else {
    voiceSelectedIds.push(id);
  }
  updateVoiceSelectUI();
  var bubble = document.querySelector('.voice-pack-bubble[data-vp-id="' + id + '"]');
  if (bubble) {
    if (voiceSelectedIds.indexOf(id) > -1) {
      bubble.classList.add('selected');
    } else {
      bubble.classList.remove('selected');
    }
  }
}

function updateVoiceSelectUI() {
  var selectBtn = document.getElementById('voiceSelectBtn');
  var deleteBtn = document.getElementById('voiceDeleteSelectedBtn');
  var countEl = document.getElementById('voiceDeleteCount');
  if (!selectBtn || !deleteBtn || !countEl) return;
  if (voiceSelectMode) {
    selectBtn.classList.add('active');
    selectBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    if (voiceSelectedIds.length > 0) {
      deleteBtn.style.display = 'flex';
      countEl.textContent = voiceSelectedIds.length;
    } else {
      deleteBtn.style.display = 'none';
    }
  } else {
    selectBtn.classList.remove('active');
    selectBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';
    deleteBtn.style.display = 'none';
  }
}

async function deleteSelectedVoicePacks() {
  if (voiceSelectedIds.length === 0) return;
  var count = voiceSelectedIds.length;
  if (!confirm('Delete ' + count + ' selected voice pack' + (count > 1 ? 's' : '') + '?')) return;
  var deleted = 0;
  for (var i = 0; i < voiceSelectedIds.length; i++) {
    try {
      var res = await fetch(VOICE_API + '/api/voices/' + voiceSelectedIds[i], { method: 'DELETE' });
      if (res.ok) deleted++;
    } catch(e) {}
  }
  voiceSelectMode = false;
  voiceSelectedIds = [];
  updateVoiceSelectUI();
  loadVoiceConvMsgs();
  showToast('Deleted', deleted + ' voice pack' + (deleted > 1 ? 's' : '') + ' deleted');
}

function showEmojiPicker(event, id) {
  event.stopPropagation();
  voiceReactingId = id;
  var picker = document.getElementById('voiceEmojiPicker');
  picker.style.display = 'block';
  setTimeout(function() { document.addEventListener('click', hideEmojiPicker, { once: true }); }, 0);
}

function hideEmojiPicker() {
  var picker = document.getElementById('voiceEmojiPicker');
  picker.style.display = 'none';
  voiceReactingId = null;
  var vPicker = document.getElementById('videoEmojiPicker');
  if (vPicker) vPicker.style.display = 'none';
}

function pickReaction(emoji) {
  if (voiceReactingId) voiceToggleReaction(voiceReactingId, emoji);
  hideEmojiPicker();
}

async function voiceToggleReaction(recordingId, emoji) {
  try {
    var res = await fetch(VOICE_API + '/api/voices/' + recordingId + '/react', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: myId, emoji: emoji })
    });
    if (res.ok) loadVoiceConvMsgs();
  } catch (err) {
    console.error('React error:', err);
  }
}

async function deleteVoicePack(id) {
  if (!confirm('Delete this voice pack?')) return;
  try {
    var res = await fetch(VOICE_API + '/api/voices/' + id, { method: 'DELETE' });
    if (res.ok) {
      voiceAudioCache.remove(id);
      loadVoiceConvMsgs();
    } else alert('Failed to delete.');
  } catch (err) {
    alert('Failed to delete.');
  }
}



