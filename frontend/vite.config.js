import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Har build ka apna id — `?v=` ke roop me script-core.js / script-voice.js /
// script-video.js par lagta hai. Pehle yahaan `Date.now()` har PAGE LOAD par
// chalta tha, jisse 99 KB ka script-core.js kabhi cache hota hi nahi tha.
// Ab sirf nayi deploy ke waqt cache tootega (jo chahiye), beech me browser
// cache se chalega.
const BUILD_ID = String(Date.now())

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_ID__: JSON.stringify(BUILD_ID)
  },
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
