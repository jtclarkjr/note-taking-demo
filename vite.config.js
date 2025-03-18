import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    AutoImport({
      imports: [
        'react',
        {
          'react-dom/client': ['ReactDOM'],
          '@tanstack/react-router': [
            'createRouter',
            'createRootRoute', // Import 'createRootRoute' from TanStack React Router
            'createFileRoute' // Import 'createFileRoute' from TanStack React Router
          ],

          zustand: ['create'],
          'zustand/middleware': ['persist'],
          uuid: ['v4']
        }
      ],
      // Enable ESLint configuration generation
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json', // Path to the generated ESLint config
        globalsPropValue: true // Set global variables to true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
