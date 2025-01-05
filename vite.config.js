import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Assignment1_React/', // يجب أن يتطابق مع اسم المستودع على GitHub
})
