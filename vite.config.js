import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Para poder desplegar en github pages cuando NO se tiene dominio personalizado y para que las imágenes se carguen correctamente
  //base: '/portfolio',
})
