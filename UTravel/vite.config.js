import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Cambia el puerto si es necesario
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    force: true, // Reprocesa las dependencias si hay errores previos
  },
});
