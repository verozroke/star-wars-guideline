import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/star-wars-guideline/',
  server: {
    port: 3000,
  },
  
})


