import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    historyApiFallback: true,
    allowedHosts: ['breezy-breads-burn.loca.lt']
  },
  plugins: [react()],

})
