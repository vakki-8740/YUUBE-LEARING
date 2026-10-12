// User panel ke har page ke liye chhote DOM-binding helpers.
// script-core.js ki functions global hoti hain, isliye yahan sirf
// element dhoondhna aur handler lagana hai.

export function $(id) {
  return document.getElementById(id);
}

export function attach(el, evt, fn) {
  if (el) el[evt] = fn;
}

export function each(selector, fn) {
  document.querySelectorAll(selector).forEach(fn);
}

// ==================== APP KEYBOARD SETTING ====================
// Default OFF — chat me user apni device ki keyboard use karta hai.
// Apna keyboard sirf tab aata hai jab user Profile (Settings) page se
// ise ON kare. Key aur event ka naam yahin rakha hai, taaki ProfilePage
// aur ChatKeyboard dono jagah se ek hi jagah padhi jaaye.
const APP_KB_KEY = 'chatAppKeyboard';
const APP_KB_EVENT = 'appKeyboardChanged';
let memFallback = false;   // private mode me localStorage fail hota hai

export function isAppKeyboardEnabled() {
  try { return localStorage.getItem(APP_KB_KEY) === '1'; } catch (e) { return memFallback; }
}

export function setAppKeyboardEnabled(on) {
  const val = !!on;
  try {
    if (val) localStorage.setItem(APP_KB_KEY, '1');
    else localStorage.removeItem(APP_KB_KEY);
  } catch (e) {
    memFallback = val;
  }
  // ChatKeyboard isi event par sunta hai — bina React prop drilling ke
  try { window.dispatchEvent(new CustomEvent(APP_KB_EVENT)); } catch (e) { /* noop */ }
}

export function onAppKeyboardChange(fn) {
  window.addEventListener(APP_KB_EVENT, fn);
  return function () { window.removeEventListener(APP_KB_EVENT, fn); };
}
