// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: './',        // Use relative paths for JS/CSS
//   build: {
//     outDir: 'dist',  // Explicit output directory
//   },
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  
  server: {
    proxy: mode === 'development' ? {
      '/api': 'http://localhost:9000'
    } : undefined,
  }
}));