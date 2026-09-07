importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB2j604pnQWRzpu_yE0biwWktths5TxW38",
  authDomain: "own-chat-app-d5fd0.firebaseapp.com",
  projectId: "own-chat-app-d5fd0",
  storageBucket: "own-chat-app-d5fd0.firebasestorage.app",
  messagingSenderId: "191123388943",
  appId: "1:191123388943:web:2a352c0912c015e5e1017a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || 'New Message';
  const body = payload.notification?.body || '';
  const icon = payload.notification?.icon || '';
  self.registration.showNotification(title, {
    body: body,
    icon: icon,
    badge: '/favicon.ico',
    tag: payload.data?.tag || 'chat-notification',
    renotify: true
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url.includes('/') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
