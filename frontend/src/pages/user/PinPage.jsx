import React, { useState } from 'react';

// ==================== PIN ENTER PAGE ====================
// Sirf lock icon + 6 digit boxes + apna digit keypad.
// Koi title/label text nahi hai, aur <input> hi nahi hai — isliye
// device ki apni keyboard (soft keyboard) kabhi khulti hi nahi.
const DIGIT_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const CORRECT_PIN = '272026';

export default function PinPage() {
  const [verified, setVerified] = useState(
    () => sessionStorage.getItem('pinVerified') === '1'
  );
  const [pinValues, setPinValues] = useState(['', '', '', '', '', '']);
  const [pinError, setPinError] = useState(false);
  const [keypadOpen, setKeypadOpen] = useState(false);

  if (verified) return null;

  const filledCount = pinValues.filter(Boolean).length;
  const activeIdx = pinValues.findIndex(v => v === '');

  function pressDigit(d) {
    const idx = pinValues.findIndex(v => v === '');
    if (idx === -1) return;
    const next = [...pinValues];
    next[idx] = d;
    setPinValues(next);
    setPinError(false);
  }

  function pressBackspace() {
    // Last filled box khaali karo
    let idx = -1;
    for (let i = pinValues.length - 1; i >= 0; i--) {
      if (pinValues[i]) { idx = i; break; }
    }
    if (idx === -1) return;
    const next = [...pinValues];
    next[idx] = '';
    setPinValues(next);
    setPinError(false);
  }

  function pressClear() {
    setPinValues(['', '', '', '', '', '']);
    setPinError(false);
  }

  function verifyPin() {
    if (pinValues.join('') === CORRECT_PIN) {
      sessionStorage.setItem('pinVerified', '1');
      setVerified(true);
    } else {
      setPinError(true);
      setPinValues(['', '', '', '', '', '']);
    }
  }

  return (
    <>
      <style>{`
        #pinOverlay {
          position: fixed; inset: 0; z-index: 99999;
          background: #ffffff;
          display: flex; align-items: center; justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          -webkit-user-select: none; user-select: none;
        }
        /* Keypad khula hai toh box upar — warna Submit dabak neeche chala jayega */
        #pinOverlay.keypad-open {
          align-items: flex-start;
          padding-top: max(40px, 8vh);
        }
        .pin-box { text-align: center; width: 100%; padding: 0 20px; }
        .pin-lock-icon {
          width: 66px; height: 66px; border-radius: 50%;
          background: linear-gradient(135deg, #007AFF, #5856D6);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 30px;
          box-shadow: 0 10px 30px rgba(0, 122, 255, 0.32);
        }
        .pin-lock-icon svg { color: #fff; }
        .pin-inputs { display: flex; gap: 10px; justify-content: center; cursor: pointer; }
        .pin-dot {
          width: 44px; height: 56px; border-radius: 14px;
          border: 2px solid #d1d1d6;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 30px; font-weight: 700; color: #1c1c1e;
          transition: border-color 0.18s, box-shadow 0.18s;
        }
        .pin-dot.filled { border-color: #007AFF; }
        .pin-dot.active { border-color: #007AFF; box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.16); }
        .pin-dot.error { border-color: #FF3B30; animation: pinShake 0.5s ease; }
        @keyframes pinShake {
          0%, 100% { transform: translateX(0); }
          10%, 50%, 90% { transform: translateX(-6px); }
          30%, 70% { transform: translateX(6px); }
        }
        .pin-error {
          color: #FF3B30; font-size: 13px; font-weight: 500;
          min-height: 18px; margin-top: 16px;
          opacity: 0; transition: opacity 0.2s;
        }
        .pin-error.show { opacity: 1; }
        .pin-submit-btn {
          margin-top: 8px; padding: 14px 40px;
          background: #007AFF; color: #fff; border: none;
          border-radius: 12px; font-size: 16px; font-weight: 600;
          cursor: pointer; font-family: inherit;
        }
        .pin-submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        /* Apna digit keypad — sirf anka, device keyboard nahi */
        .pin-keypad {
          position: fixed; left: 0; right: 0; bottom: 0;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
          padding: 14px 16px calc(18px + env(safe-area-inset-bottom, 0px));
          background: #f2f2f7;
          border-top: 1px solid #d1d1d6;
          transform: translateY(110%);
          transition: transform 0.32s cubic-bezier(0.32, 0.08, 0.24, 1);
        }
        .pin-keypad.show { transform: translateY(0); }
        .pk-key {
          height: 50px;
          border: none;
          border-radius: 14px;
          background: #fff;
          color: #1c1c1e;
          font-size: 24px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
          transition: background 0.12s, transform 0.1s;
        }
        .pk-key:active { background: #d1d1d6; transform: scale(0.95); }
        .pk-key.fn { background: #e5e5ea; font-size: 21px; }
        @media (max-width: 360px) {
          .pin-dot { width: 38px; height: 50px; font-size: 26px; }
        }
      `}</style>

      <div id="pinOverlay" className={keypadOpen ? 'keypad-open' : ''}>
        <div className="pin-box">
          <div className="pin-lock-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>

          {/* Fill section par tap karo → apna keypad khulega */}
          <div className="pin-inputs" onClick={() => setKeypadOpen(true)}>
            {pinValues.map((val, idx) => (
              <div
                key={idx}
                className={
                  'pin-dot'
                  + (pinError ? ' error' : '')
                  + (val ? ' filled' : '')
                  + (!val && idx === activeIdx && keypadOpen ? ' active' : '')
                }
              >
                {val ? '•' : ''}
              </div>
            ))}
          </div>

          <div className={'pin-error' + (pinError ? ' show' : '')}>Galat PIN hai!</div>

          <button
            className="pin-submit-btn"
            id="pinSubmitBtn"
            disabled={filledCount !== 6}
            onClick={verifyPin}
          >Submit</button>
        </div>

        <div className={'pin-keypad' + (keypadOpen ? ' show' : '')}>
          {DIGIT_KEYS.map(k => (
            <button key={k} className="pk-key" onClick={() => pressDigit(k)}>{k}</button>
          ))}
          <button className="pk-key fn" onClick={pressClear}>C</button>
          <button className="pk-key" onClick={() => pressDigit('0')}>0</button>
          <button className="pk-key fn" onClick={pressBackspace} aria-label="Backspace">&#9003;</button>
        </div>
      </div>
    </>
  );
}
