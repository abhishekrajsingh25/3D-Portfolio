// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      'maath',
      'react-tilt',
      'react-vertical-timeline-component',
      '@emailjs/browser'
    ],
  },
  server: {
    fs: {
      strict: false,
    },
    watch: {
      usePolling: true,
    },
  }
});

