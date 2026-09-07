import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../public', // Build directly to public/ so backend serves it
    emptyOutDir: false,
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
