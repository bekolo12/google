import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cast process to any to avoid potential type issues with cwd()
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Ensure API_KEY is at least an empty string to prevent "undefined" identifier crashes
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});