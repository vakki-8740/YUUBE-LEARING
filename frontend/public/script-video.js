// ==================== VIDEO CONVERSATION ====================
const VIDEO_API = 'https://yutube-com-pcu9.onrender.com';
let videoConvPartnerId = null;
let videoConvPartnerName = '';
let videoConvData = [];
let videoConvPollTimer = null;
let videoReplyToId = null;
let videoReplyToName = '';
let videoSelectMode = false;
let videoSelectedIds = [];
let videoPreviewBlob = null;
let videoPreviewDuration = 0;

function loadVideoUserList() {
  var list = document.getElementById('videoUserList');
  var users = allUsers.filter(function(u) { return u.id !== myId; });
  if (users.length === 0) {
    list.innerHTML = '<div class="video-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><div>No users found</div></div>';
    return;
  }
  list.innerHTML = users.map(function(u) {
    var initial = (u.name || 'U').charAt(0).toUpperCase();
    var avatar = u.photoURL ? '<img src="' + u.photoURL + '">' : initial;
    return '<div class="video-user-item" onclick="openVideoConv(\'' + u.id + '\',\'' + escapeHtmlAttr(u.name) + '\')">' +
      '<div class="video-user-avatar">' + avatar + '</div>' +
      '<div class="video-user-info">' +
        '<div class="video-user-name">' + escapeHtml(u.name) + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function openVideoConv(userId, userName) {
  videoConvPartnerId = userId;
  videoConvPartnerName = userName;
  videoSelectMode = false;
  videoSelectedIds = [];
  document.getElementById('videoUserView').style.display = 'none';
  var cv = document.getElementById('videoConvView');
  cv.style.display = 'flex';
  cv.style.flexDirection = 'column';
  cv.style.height = '100%';
  document.getElementById('videoConvName').textContent = userName;
  var avatar = document.getElementById('videoConvAvatar');
  var user = allUsers.find(function(u) { return u.id === userId; });
  if (user && user.photoURL) {
    avatar.innerHTML = '<img src="' + user.photoURL + '">';
  } else {
    avatar.textContent = (userName || 'U').charAt(0).toUpperCase();
  }
  updateVideoSelectUI();
  loadVideoConvMsgs();
  if (videoConvPollTimer) clearInterval(videoConvPollTimer);
  videoConvPollTimer = setInterval(loadVideoConvMsgs, 3000);
  fetch(VIDEO_API + '/api/videos/mark-seen', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ viewerId: myId, partnerId: userId })
  }).catch(function() {});
  document.getElementById('videoConvMsgs').onclick = function(e) {
    var bubble = e.target.closest('.video-pack-bubble');
    if (!bubble || !videoSelectMode) return;
    if (e.target.closest('button, .video-pack-action, .video-reaction, .video-emoji-picker, video')) return;
    toggleVideoSelectItem(bubble.dataset.vpId);
  };
}

function closeVideoConv() {
  if (videoConvPollTimer) clearInterval(videoConvPollTimer);
  videoConvPartnerId = null;
  videoConvData = [];
  videoSelectMode = false;
  videoSelectedIds = [];
  cancelVideoReply();
  var cv = document.getElementById('videoConvView');
  if (cv) cv.style.display = 'none';
  var uv = document.getElementById('videoUserView');
  if (uv) uv.style.display = 'block';
  cancelVideoPreview();
}

function scrollVideoConvDown() {
  var msgs = document.getElementById('videoConvMsgs');
  msgs.scrollTop = msgs.scrollHeight;
}

async function loadVideoConvMsgs() {
  if (!videoConvPartnerId || !myId) return;
  try {
    var res = await fetch(VIDEO_API + '/api/videos/conversation/' + encodeURIComponent(myId) + '/' + encodeURIComponent(videoConvPartnerId) + '?t=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed');
    var data = await res.json();
    var msgsEl = document.getElementById('videoConvMsgs');
    var prevCount = videoConvData.length;
    videoConvData = data;
    if (data.length === 0) {
      msgsEl.innerHTML = '<div class="video-conv-empty" id="videoConvEmpty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ios-gray3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg><div>No videos yet</div><div style="font-size:12px;margin-top:4px;">Tap the camera to send a video</div></div>';
      return;
    }
    var html = data.map(function(p) { return renderVideoPackBubble(p); }).join('');
    msgsEl.innerHTML = html;
    if (data.length > prevCount) {
      setTimeout(scrollVideoConvDown, 50);
    }
  } catch (err) {
    console.error('Video conv load error:', err);
  }
}

function renderVideoPackBubble(p) {
  var isOutgoing = p.user_id === myId;
  var side = isOutgoing ? 'outgoing' : 'incoming';
  var user = allUsers.find(function(u) { return u.id === p.user_id; });
  var name = user ? user.name : 'User';
  var time = p.created_at ? getTimeAgo(new Date(p.created_at + (p.created_at.endsWith('Z') ? '' : 'Z'))) : '';
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
      reactionsHtml += '<span class="video-reaction' + activeClass + '" onclick="videoToggleReaction(\'' + p.id + '\',\'' + emoji + '\')">' + emoji + ' <span class="vr-count">' + reacted[emoji].length + '</span></span>';
    }
  }
  if (hasReactions) reactionsHtml = '<div class="video-pack-reactions">' + reactionsHtml + '</div>';

  var replyHtml = '';
  if (p.reply_to) {
    var repliedVideo = videoConvData.find(function(v) { return v.id === p.reply_to; });
    var repliedName = '';
    if (repliedVideo) {
      var repliedUser = allUsers.find(function(u) { return u.id === repliedVideo.user_id; });
      repliedName = repliedUser ? repliedUser.name : 'User';
    }
    replyHtml = '<div class="video-pack-reply-ref"><span class="vpr-icon">G�</span><span class="vpr-label">' + escapeHtml(repliedName) + '</span></div>';
  }

  var deleteBtn = '';
  if (isOutgoing) {
    deleteBtn = '<button class="video-pack-action video-pack-action--delete" onclick="deleteVideoRecording(\'' + p.id + '\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> Delete</button>';
  }

  var isSelected = videoSelectedIds.indexOf(p.id) > -1;
  var selectClass = '';
  if (videoSelectMode) {
    selectClass = ' select-allowed' + (isSelected ? ' selected' : '');
  }

  var fileSizeMB = p.file_size ? (p.file_size / (1024 * 1024)).toFixed(1) : '?';
  var dur = p.duration ? formatDuration(p.duration) : '0:00';

  var mediaHtml = '<div class="video-pack-player" id="vp-' + p.id + '">' +
    '<video id="vid-' + p.id + '" preload="none" playsinline webkit-playsinline onclick="event.stopPropagation()" onplay="onVidPlay(\'' + p.id + '\')" onwaiting="onVidWaiting(\'' + p.id + '\')" oncanplay="onVidCanPlay(\'' + p.id + '\')" onerror="onVidError(\'' + p.id + '\')"></video>' +
    '<div class="video-download-overlay" id="vdload-' + p.id + '">' +
      '<div class="video-download-icon" id="vdl-icon-' + p.id + '">' +
        '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
      '</div>' +
      '<div class="video-download-info">' +
        '<span class="video-download-size">' + fileSizeMB + ' MB</span>' +
        '<span class="video-download-dur">' + dur + '</span>' +
      '</div>' +
      '<div class="video-download-bar-wrap" id="vdl-bar-' + p.id + '" style="display:none;">' +
        '<div class="video-download-bar"><div class="video-download-fill" id="vdl-fill-' + p.id + '"></div></div>' +
        '<span class="video-download-pct" id="vdl-pct-' + p.id + '">0%</span>' +
      '</div>' +
      '<button class="video-download-btn" id="vdl-btn-' + p.id + '" onclick="downloadVideoFromTG(\'' + p.id + '\')">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download' +
      '</button>' +
    '</div>' +
  '</div>';

  return '<div class="video-pack-bubble ' + side + selectClass + '" data-vp-id="' + p.id + '">' +
    '<div class="video-pack-check">' +
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' +
    '</div>' +
    '<div class="video-pack-header">' +
      '<span class="vpb-name">' + escapeHtml(name) + '</span>' +
      '<span class="vpb-time">' + time + (isOutgoing && p.seen ? ' <span style="color:var(--ios-green);font-size:10px">G��G��</span>' : '') + '</span>' +
    '</div>' +
    '<div class="video-pack-body">' +
      replyHtml +
      mediaHtml +
      reactionsHtml +
    '</div>' +
    '<div class="video-pack-actions">' +
      deleteBtn +
      '<button class="video-pack-action video-pack-action--reply" onclick="replyToVideoMsg(\'' + p.id + '\',\'' + escapeHtmlAttr(name) + '\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg> Reply</button>' +
      '<button class="video-pack-action video-pack-action--react" onclick="showVideoEmojiPicker(event,\'' + p.id + '\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> React</button>' +
    '</div>' +
  '</div>';
}

function downloadVideoFromTG(id) {
  var overlay = document.getElementById('vdload-' + id);
  var barWrap = document.getElementById('vdl-bar-' + id);
  var fill = document.getElementById('vdl-fill-' + id);
  var pct = document.getElementById('vdl-pct-' + id);
  var dlBtn = document.getElementById('vdl-btn-' + id);
  var icon = document.getElementById('vdl-icon-' + id);
  var video = document.getElementById('vid-' + id);

  if (!overlay || !video) return;

  dlBtn.style.display = 'none';
  barWrap.style.display = 'flex';
  icon.innerHTML = '<div class="video-dl-spinner"></div>';

  var url = VIDEO_API + '/api/videos/' + id + '/download';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';

  xhr.onprogress = function(e) {
    if (e.lengthComputable) {
      var progress = Math.round((e.loaded / e.total) * 100);
      fill.style.width = progress + '%';
      pct.textContent = progress + '%';
    } else {
      var mb = (e.loaded / (1024 * 1024)).toFixed(1);
      pct.textContent = mb + ' MB downloaded';
    }
  };

  xhr.onload = function() {
    if (xhr.status === 200) {
      fill.style.width = '100%';
      pct.textContent = '100%';
      var blob = xhr.response;
      var blobUrl = URL.createObjectURL(blob);
      video.src = blobUrl;
      video.load();
      setTimeout(function() {
        overlay.style.display = 'none';
      }, 300);
    } else {
      showVideoError(id);
    }
  };

  xhr.onerror = function() {
    showVideoError(id);
  };

  xhr.ontimeout = function() {
    showVideoError(id);
  };

  xhr.timeout = 120000;
  xhr.send();
}

function showVideoError(id) {
  var icon = document.getElementById('vdl-icon-' + id);
  var pct = document.getElementById('vdl-pct-' + id);
  var dlBtn = document.getElementById('vdl-btn-' + id);
  var barWrap = document.getElementById('vdl-bar-' + id);
  if (icon) icon.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ios-red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
  if (pct) pct.textContent = 'Failed. Tap to retry.';
  if (dlBtn) dlBtn.style.display = 'flex';
  if (barWrap) barWrap.style.display = 'none';
}

function onVidPlay(id) {
  var overlay = document.getElementById('vdload-' + id);
  if (overlay) overlay.style.display = 'none';
}

function onVidWaiting(id) {
  var player = document.getElementById('vp-' + id);
  if (player) player.classList.add('buffering');
}

function onVidCanPlay(id) {
  var player = document.getElementById('vp-' + id);
  if (player) player.classList.remove('buffering');
  var video = document.getElementById('vid-' + id);
  if (video && video.paused) video.play().catch(function() {});
}

function onVidError(id) {
  var overlay = document.getElementById('vdload-' + id);
  if (overlay) {
    overlay.style.display = 'flex';
    var icon = document.getElementById('vdl-icon-' + id);
    if (icon) icon.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ios-red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
    var pct = document.getElementById('vdl-pct-' + id);
    if (pct) pct.textContent = 'Failed. Try again.';
    var dlBtn = document.getElementById('vdl-btn-' + id);
    if (dlBtn) dlBtn.style.display = 'flex';
    var barWrap = document.getElementById('vdl-bar-' + id);
    if (barWrap) barWrap.style.display = 'none';
  }
}

function triggerVideoUpload() {
  document.getElementById('videoFileInput').click();
}

function handleVideoFileSelect(event) {
  var file = event.target.files[0];
  if (!file) return;
  var dangerousExts = /\.(exe|bat|cmd|sh|php|py|js|jar|msi|com|pif|scr|vbs|ws|wsf|ps1|reg|inf)$/i;
  if (dangerousExts.test(file.name)) {
    alert('Dangerous file type rejected.');
    event.target.value = '';
    return;
  }
  var maxSize = 50 * 1024 * 1024;
  if (file.size > maxSize) {
    alert('Video too large. Maximum 50MB allowed.');
    event.target.value = '';
    return;
  }
  videoPreviewBlob = file;
  var videoEl = document.getElementById('videoPreviewEl');
  var url = URL.createObjectURL(file);
  videoEl.src = url;
  videoEl.onloadedmetadata = function() {
    videoPreviewDuration = Math.floor(videoEl.duration);
    document.getElementById('videoPreviewDur').textContent = formatDuration(videoPreviewDuration);
  };
  document.getElementById('videoCamBtn').style.display = 'none';
  document.getElementById('videoConvPreview').style.display = 'flex';
  document.getElementById('videoConvUploadProgress').style.display = 'none';
  document.getElementById('videoConvSendBtn').disabled = false;
  event.target.value = '';
}

function cancelVideoPreview() {
  videoPreviewBlob = null;
  videoPreviewDuration = 0;
  var videoEl = document.getElementById('videoPreviewEl');
  if (videoEl) { videoEl.src = ''; }
  document.getElementById('videoConvPreview').style.display = 'none';
  document.getElementById('videoCamBtn').style.display = 'flex';
}

function sendVideoPreview() {
  if (!videoPreviewBlob) return;
  var progress = document.getElementById('videoConvUploadProgress');
  var fill = document.getElementById('videoConvProgressFill');
  var label = document.getElementById('videoConvProgressLabel');
  var btn = document.getElementById('videoConvSendBtn');
  progress.style.display = 'flex';
  btn.disabled = true;
  fill.style.width = '0%';
  label.textContent = 'Uploading...';

  var formData = new FormData();
  formData.append('video', videoPreviewBlob, 'video.mp4');
  formData.append('userId', myId);
  formData.append('duration', videoPreviewDuration);
  if (videoConvPartnerId) formData.append('receiverId', videoConvPartnerId);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', VIDEO_API + '/api/videos/upload');
  xhr.upload.onprogress = function(e) {
    if (e.lengthComputable) {
      var pct = Math.round((e.loaded / e.total) * 100);
      fill.style.width = pct + '%';
      label.textContent = 'Uploading to Telegram... ' + pct + '%';
    }
  };
  xhr.onload = function() {
    if (xhr.status === 200) {
      label.textContent = 'Saved to Telegram!';
      fill.style.width = '100%';
      var resp;
      try { resp = JSON.parse(xhr.responseText); } catch(e) { return; }
      cancelVideoReply();
      document.getElementById('videoConvPreview').style.display = 'none';
      document.getElementById('videoCamBtn').style.display = 'flex';
      fetch(VIDEO_API + '/api/videos/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordingId: resp.id, senderId: myId, receiverId: videoConvPartnerId })
      }).then(function() {
        loadVideoConvMsgs();
        var toName = getUserName(videoConvPartnerId);
        showNotif('video-send', '\uD83C\uDFAC', 'Video sent', 'to ' + toName);
      }).catch(function() {});
    } else {
      label.textContent = 'Upload failed!';
      btn.disabled = false;
    }
  };
  xhr.onerror = function() {
    label.textContent = 'Network error!';
    btn.disabled = false;
  };
  xhr.send(formData);
}

function deleteVideoRecording(id) {
  if (!confirm('Delete this video?')) return;
  fetch(VIDEO_API + '/api/videos/' + id, { method: 'DELETE' }).then(function(res) {
    if (res.ok) loadVideoConvMsgs();
    else alert('Failed to delete.');
  }).catch(function() { alert('Failed to delete.'); });
}

function replyToVideoMsg(id, name) {
  videoReplyToId = id;
  videoReplyToName = name;
  document.getElementById('videoReplyText').textContent = name;
  document.getElementById('videoReplyBar').style.display = 'flex';
}

function cancelVideoReply() {
  videoReplyToId = null;
  videoReplyToName = '';
  document.getElementById('videoReplyBar').style.display = 'none';
}

function toggleVideoSelectMode() {
  videoSelectMode = !videoSelectMode;
  videoSelectedIds = [];
  updateVideoSelectUI();
  loadVideoConvMsgs();
}

function updateVideoSelectUI() {
  var btn = document.getElementById('videoSelectBtn');
  var delBtn = document.getElementById('videoDeleteSelectedBtn');
  var count = document.getElementById('videoDeleteCount');
  if (videoSelectMode) {
    btn.classList.add('active');
    delBtn.style.display = 'flex';
    count.textContent = videoSelectedIds.length;
  } else {
    btn.classList.remove('active');
    delBtn.style.display = 'none';
    count.textContent = '0';
  }
}

function toggleVideoSelectItem(id) {
  var idx = videoSelectedIds.indexOf(id);
  if (idx > -1) videoSelectedIds.splice(idx, 1);
  else videoSelectedIds.push(id);
  updateVideoSelectUI();
  var bubble = document.querySelector('.video-pack-bubble[data-vp-id="' + id + '"]');
  if (bubble) {
    if (idx > -1) bubble.classList.remove('selected');
    else bubble.classList.add('selected');
  }
}

function deleteSelectedVideoRecordings() {
  if (videoSelectedIds.length === 0) return;
  if (!confirm('Delete ' + videoSelectedIds.length + ' video(s)?')) return;
  var promises = videoSelectedIds.map(function(id) {
    return fetch(VIDEO_API + '/api/videos/' + id, { method: 'DELETE' });
  });
  Promise.all(promises).then(function() {
    videoSelectMode = false;
    videoSelectedIds = [];
    updateVideoSelectUI();
    loadVideoConvMsgs();
  });
}

function showVideoEmojiPicker(e, id) {
  e.stopPropagation();
  var picker = document.getElementById('videoEmojiPicker');
  picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
  picker.dataset.targetId = id;
}

function pickVideoReaction(emoji) {
  var picker = document.getElementById('videoEmojiPicker');
  var id = picker.dataset.targetId;
  picker.style.display = 'none';
  if (!id) return;
  fetch(VIDEO_API + '/api/videos/' + id + '/react', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: myId, emoji: emoji })
  }).then(function() { loadVideoConvMsgs(); });
}

function videoToggleReaction(id, emoji) {
  fetch(VIDEO_API + '/api/videos/' + id + '/react', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: myId, emoji: emoji })
  }).then(function() { loadVideoConvMsgs(); });
}

function showVideoLoading() {
  var el = document.getElementById('videoLoadingOverlay');
  if (el) { el.style.display = 'flex'; }
}

function hideVideoLoading() {
  var el = document.getElementById('videoLoadingOverlay');
  if (el) { el.style.display = 'none'; }
}

