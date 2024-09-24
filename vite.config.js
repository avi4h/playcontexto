import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'https://api.allorigins.win/raw?url=https://api.contexto.me/machado/en/game/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
})
