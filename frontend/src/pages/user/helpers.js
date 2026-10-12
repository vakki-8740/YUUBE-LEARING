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
