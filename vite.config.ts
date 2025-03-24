import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import sitemap from "vite-plugin-sitemap"

export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler']],
    },
  }), tailwindcss(),
  sitemap({
    hostname: 'https://term.ofcljaved.com',
    outDir: 'dist',
    changefreq: 'monthly',
    priority: 1.0,
  }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
