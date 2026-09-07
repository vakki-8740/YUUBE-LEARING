import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserChat from './pages/UserChat'
import Admin from './pages/Admin'
import Control from './pages/Control'
import VoiceVault from './pages/VoiceVault'
import Maintenance from './pages/Maintenance'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserChat />} />
        <Route path="/user" element={<UserChat />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/control" element={<Control />} />
        <Route path="/voice-pack-pennal" element={<VoiceVault />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  )
}
