import React, { useEffect, useRef, useState } from 'react';

// ==================== CHAT CUSTOM KEYBOARD ====================
// Device ki soft keyboard band karke apna keyboard.
// #messageInput par inputMode="none" hai, isliye native keyboard khulti
// hi nahi — aur keyboard sirf tap karne par slide hoke aata hai, bahar
// tap karte hi neeche chala jaata hai (minimise).
//
// Layout Gboard jaisi hai:
//   letters  -> ?123 se numbers -> =\< se symbols -> 123/ABC wapas
//   third row ka left key har mode me alag kaam karta hai
//     (letters: Shift / numbers: =\< / symbols: 123)

const LETTER_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const NUMBER_ROWS = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
  ['.', ',', '?', '!', "'", '*', '+'],
];

const SYMBOL_ROWS = [
  ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
  ['_', '\\', '|', '~', '<', '>', '€', '£', '¥', '•'],
  ['`', '§', '¶', '©', '®', '™', '×'],
];

// Bottom row ka left key — kis mode me kahan le jayega
const MODE_A = {
  letters: { label: '?123', to: 'numbers' },
  numbers: { label: 'ABC', to: 'letters' },
  symbols: { label: 'ABC', to: 'letters' },
};

const EMOJIS = [
  '😀', '😂', '😅', '😊', '😍', '😘', '😜', '🤔',
  '😎', '🥳', '😴', '😢', '😭', '😡', '😱', '🤗',
  '🙄', '😬', '🥰', '😇', '🤩', '😳', '🥺', '😤',
  '👍', '👎', '👌', '✌️', '🤞', '🙌', '👏', '🙏',
  '💪', '👋', '🤝', '🤙', '🫶', '❤️', '🔥', '✨',
  '🎉', '💯', '✅', '❌', '⭐', '🌹', '🍕', '☕',
];

function autoCap(v) {
  if (!v) return true;
  return /[.!?][")\]]?\s*$/.test(v);
}

export default function ChatKeyboard() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('letters');
  // 0 = off, 1 = next letter capital, 2 = caps lock
  const [shift, setShift] = useState(1);
  const [emojiOpen, setEmojiOpen] = useState(false);

  const kbRef = useRef(null);
  const holdRef = useRef({ delay: null, repeat: null });
  const shiftTapRef = useRef(null);

  // ---------- element helpers ----------
  function getInput() {
    return document.getElementById('messageInput');
  }

  function getSel() {
    const el = getInput();
    if (!el) return null;
    let s = el.selectionStart;
    let e = el.selectionEnd;
    if (typeof s !== 'number') {
      s = el.value.length;
      e = s;
    } else if (typeof e !== 'number') {
      e = s;
    }
    return { el, s, e };
  }

  function refocus(el) {
    if (document.activeElement !== el) {
      try { el.focus({ preventScroll: true }); } catch (err) { try { el.focus(); } catch (e2) {} }
    }
  }

  function insertText(raw, applyShift) {
    const sel = getSel();
    if (!sel) return;
    const { el, s, e } = sel;
    const next = el.value.slice(0, s) + raw + el.value.slice(e);
    el.value = next;
    const pos = s + raw.length;
    try { el.setSelectionRange(pos, pos); } catch (err) {}
    // Existing oninput handler (autoResize + handleTyping) isi se chalta hai
    el.dispatchEvent(new Event('input', { bubbles: true }));
    if (applyShift && shift !== 2) setShift(autoCap(next) ? 1 : 0);
    refocus(el);
  }

  function deleteBack() {
    const sel = getSel();
    if (!sel) return;
    const { el, s, e } = sel;
    let start = s;
    const end = e;
    if (s === e) {
      if (s === 0) return;
      start = s - 1;
    }
    const next = el.value.slice(0, start) + el.value.slice(end);
    el.value = next;
    try { el.setSelectionRange(start, start); } catch (err) {}
    el.dispatchEvent(new Event('input', { bubbles: true }));
    refocus(el);
  }

  function keyPress(k) {
    let ch = k;
    if (mode === 'letters' && shift !== 0 && /^[a-z]$/i.test(k)) ch = k.toUpperCase();
    insertText(ch, true);
  }

  function pressShift() {
    if (shift === 2) { setShift(0); return; }
    if (shiftTapRef.current) {
      // double tap = caps lock
      clearTimeout(shiftTapRef.current);
      shiftTapRef.current = null;
      setShift(2);
      return;
    }
    setShift(shift === 0 ? 1 : 0);
    shiftTapRef.current = setTimeout(() => { shiftTapRef.current = null; }, 350);
  }

  function startBack() {
    deleteBack();
    stopBack();
    holdRef.current.delay = setTimeout(() => {
      holdRef.current.repeat = setInterval(deleteBack, 70);
    }, 400);
  }

  function stopBack() {
    if (holdRef.current.delay) clearTimeout(holdRef.current.delay);
    if (holdRef.current.repeat) clearInterval(holdRef.current.repeat);
    holdRef.current.delay = null;
    holdRef.current.repeat = null;
  }

  function goMode(to) {
    setMode(to);
    setEmojiOpen(false);
  }

  function sendMsg() {
    if (typeof sendMessage === 'function') sendMessage();
    setShift(1);
  }

  // ---------- pointer helpers ----------
  function down(e, fn) {
    e.preventDefault();
    const t = e.currentTarget;
    if (t && t.classList) t.classList.add('pressed');
    fn();
  }

  function up(e) {
    const t = e.currentTarget;
    if (t && t.classList) t.classList.remove('pressed');
  }

  function upBack(e) {
    up(e);
    stopBack();
  }

  // ---------- open: #messageInput par tap/focus ----------
  useEffect(() => {
    const el = getInput();
    if (!el) return undefined;
    // Belt + braces: React wala inputMode="none" ke saath yeh bhi set kar
    // dete hain, taaki har browser/WebView me native keyboard na khule.
    el.setAttribute('inputmode', 'none');
    el.setAttribute('autocomplete', 'off');
    el.setAttribute('autocorrect', 'off');
    el.setAttribute('autocapitalize', 'off');

    const onOpen = () => setOpen(true);
    const onInput = () => {
      if (!el.value) setShift(1);
    };
    el.addEventListener('focus', onOpen);
    el.addEventListener('click', onOpen);
    el.addEventListener('input', onInput);
    return () => {
      el.removeEventListener('focus', onOpen);
      el.removeEventListener('click', onOpen);
      el.removeEventListener('input', onInput);
    };
  }, []);

  // ---------- minimise: keyboard ke alawa kahin bhi tap ----------
  useEffect(() => {
    if (!open) return undefined;
    const start = { x: 0, y: 0 };
    const clearPressed = () => {
      const kb = kbRef.current;
      if (!kb) return;
      kb.querySelectorAll('.pressed').forEach((n) => n.classList.remove('pressed'));
    };
    const onDown = (e) => { start.x = e.clientX; start.y = e.clientY; };
    const onUp = (e) => {
      clearPressed();
      stopBack();
      // Scroll/drag hai toh band mat karo
      const moved = Math.abs(e.clientX - start.x) + Math.abs(e.clientY - start.y);
      if (moved > 12) return;
      const t = e.target;
      if (!t) return;
      if (kbRef.current && kbRef.current.contains(t)) return;
      const input = getInput();
      if (input && (t === input || input.contains(t))) return;
      setOpen(false);
      setEmojiOpen(false);
      if (input && document.activeElement === input) input.blur();
    };
    document.addEventListener('pointerdown', onDown, true);
    document.addEventListener('pointerup', onUp, true);
    return () => {
      document.removeEventListener('pointerdown', onDown, true);
      document.removeEventListener('pointerup', onUp, true);
    };
  }, [open]);

  // ---------- safety net: kisi device par inputMode ignore ho jaye toh ----------
  // Agar device ki apni keyboard phir bhi khul gayi toh visual viewport
  // 120px+ ka khisak jaata hai (scale wahi rehta hai). Aisa dikhe toh us
  // textarea ko lock kar do — hamara keyboard waise bhi programmatic way se
  // type karta hai, uske liye readonly koi rukawat nahi.
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return undefined;
    const onVV = () => {
      const el = getInput();
      if (!el || document.activeElement !== el) return;
      if (el.hasAttribute('readonly')) return;
      if (vv.scale && vv.scale > 1.05) return;   // pinch-zoom hai, keyboard nahi
      const shrink = window.innerHeight - vv.height;
      if (shrink > 120) {
        el.setAttribute('readonly', 'readonly');
        const s = el.selectionStart;
        const e = el.selectionEnd;
        el.blur();
        setTimeout(() => {
          try { el.setSelectionRange(s, e); } catch (err) {}
          refocus(el);
        }, 30);
      }
    };
    vv.addEventListener('resize', onVV);
    return () => vv.removeEventListener('resize', onVV);
  }, []);

  // ---------- --kb-h set karo, taaki chat area upar khisak jaaye ----------
  useEffect(() => {
    const el = kbRef.current;
    if (!el) return undefined;
    const measure = () => {
      document.documentElement.style.setProperty('--kb-h', el.offsetHeight + 'px');
    };
    measure();
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // ---------- .main-app par kb-open class ----------
  useEffect(() => {
    const app = document.getElementById('mainApp');
    if (app) app.classList.toggle('kb-open', open);
    return () => {
      const a = document.getElementById('mainApp');
      if (a) a.classList.remove('kb-open');
    };
  }, [open]);

  useEffect(() => () => {
    stopBack();
    if (shiftTapRef.current) clearTimeout(shiftTapRef.current);
  }, []);

  // ---------- rendering ----------
  const rows = mode === 'letters' ? LETTER_ROWS : mode === 'numbers' ? NUMBER_ROWS : SYMBOL_ROWS;

  function letterKey(k) {
    const ch = (mode === 'letters' && shift !== 0) ? k.toUpperCase() : k;
    return (
      <button
        key={k}
        type="button"
        className="kb-key"
        onPointerDown={(e) => down(e, () => keyPress(k))}
        onPointerUp={up}
        onPointerLeave={up}
        onPointerCancel={up}
      >{ch}</button>
    );
  }

  function plainKey(k) {
    return (
      <button
        key={'p' + k}
        type="button"
        className="kb-key"
        onPointerDown={(e) => down(e, () => insertText(k, true))}
        onPointerUp={up}
        onPointerLeave={up}
        onPointerCancel={up}
      >{k}</button>
    );
  }

  // Third row ka left key — mode ke hisaab se Shift / =\< / 123
  let leftKey;
  if (mode === 'letters') {
    const cls = 'kb-key fn side shift' + (shift !== 0 ? ' on' : '') + (shift === 2 ? ' caps' : '');
    leftKey = (
      <button
        key="left"
        type="button"
        className={cls}
        onPointerDown={(e) => down(e, pressShift)}
        onPointerUp={up}
        onPointerLeave={up}
        onPointerCancel={up}
        aria-label="Shift"
      >&#8679;</button>
    );
  } else {
    const target = mode === 'numbers' ? 'symbols' : 'numbers';
    leftKey = (
      <button
        key="left"
        type="button"
        className="kb-key fn side small-label"
        onPointerDown={(e) => down(e, () => goMode(target))}
        onPointerUp={up}
        onPointerLeave={up}
        onPointerCancel={up}
      >{mode === 'numbers' ? '=\\<' : '123'}</button>
    );
  }

  const modeA = MODE_A[mode];

  return (
    <div
      className={'chat-kb' + (open ? ' show' : '')}
      ref={kbRef}
      aria-hidden={!open}
    >
      {/* Hamesha mounted — max-height transition se slide hota hai, warna
          keyboard aur chat area ek saath nahi khulte (layout glitch). */}
      <div className={'kb-emoji-panel' + (emojiOpen ? ' show' : '')} aria-hidden={!emojiOpen}>
        {EMOJIS.map((em) => (
          <button
            key={em}
            type="button"
            className="kb-emoji-btn"
            onPointerDown={(e) => down(e, () => insertText(em, false))}
            onPointerUp={up}
            onPointerLeave={up}
            onPointerCancel={up}
          >{em}</button>
        ))}
      </div>

      <div className="kb-row">
        {rows[0].map(mode === 'letters' ? letterKey : plainKey)}
      </div>

      <div className="kb-row mid">
        {rows[1].map(mode === 'letters' ? letterKey : plainKey)}
      </div>

      <div className="kb-row">
        {leftKey}
        {rows[2].map(mode === 'letters' ? letterKey : plainKey)}
        <button
          key="back"
          type="button"
          className="kb-key fn side"
          onPointerDown={(e) => down(e, startBack)}
          onPointerUp={upBack}
          onPointerLeave={upBack}
          onPointerCancel={upBack}
          aria-label="Backspace"
        >&#9003;</button>
      </div>

      <div className="kb-row">
        <button
          key="mode"
          type="button"
          className="kb-key fn mode"
          onPointerDown={(e) => down(e, () => goMode(modeA.to))}
          onPointerUp={up}
          onPointerLeave={up}
          onPointerCancel={up}
        >{modeA.label}</button>

        <button
          key="comma"
          type="button"
          className="kb-key"
          onPointerDown={(e) => down(e, () => insertText(',', true))}
          onPointerUp={up}
          onPointerLeave={up}
          onPointerCancel={up}
        >,</button>

        <button
          key="space"
          type="button"
          className="kb-key space"
          onPointerDown={(e) => down(e, () => insertText(' ', true))}
          onPointerUp={up}
          onPointerLeave={up}
          onPointerCancel={up}
          aria-label="Space"
        />

        <button
          key="dot"
          type="button"
          className="kb-key"
          onPointerDown={(e) => down(e, () => insertText('.', true))}
          onPointerUp={up}
          onPointerLeave={up}
          onPointerCancel={up}
        >.</button>

        <button
          key="emoji"
          type="button"
          className={'kb-key fn emoji' + (emojiOpen ? ' on' : '')}
          onPointerDown={(e) => down(e, () => setEmojiOpen((v) => !v))}
          onPointerUp={up}
          onPointerLeave={up}
          onPointerCancel={up}
          aria-label="Emoji"
        >&#128512;</button>

        <button
          key="send"
          type="button"
          className="kb-key send"
          onPointerDown={(e) => down(e, sendMsg)}
          onPointerUp={up}
          onPointerLeave={up}
          onPointerCancel={up}
          aria-label="Send"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
