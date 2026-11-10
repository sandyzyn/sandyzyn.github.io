import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// sandyzyn.github.io is a user site, so it is served from the root path.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
