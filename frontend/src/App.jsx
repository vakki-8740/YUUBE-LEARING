import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Har page apne alag chunk me — ek page kholne pe doosre pages ka code
// download hi nahi hota.
const UserChat = lazy(() => import('./pages/UserChat'))
const Admin = lazy(() => import('./pages/Admin'))
const Control = lazy(() => import('./pages/Control'))
const VoiceVault = lazy(() => import('./pages/VoiceVault'))
const Maintenance = lazy(() => import('./pages/Maintenance'))

function PageLoader() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
        color: '#8E8E93',
        fontSize: '15px',
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      Loading...
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<UserChat />} />
          <Route path="/user" element={<UserChat />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/control" element={<Control />} />
          <Route path="/voice-pack-pennal" element={<VoiceVault />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
