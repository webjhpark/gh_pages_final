import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/npx_test/', // 저장소 이름이 my-react-app 이면 /my-react-app/
});
