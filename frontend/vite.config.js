import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // default is 1537
    proxy: { // cause of domain of server is localhost:5000
       '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,//origin of the host header
       }
    }
  },
})
