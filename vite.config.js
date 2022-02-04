/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

const isExternal = (id) => !id.startsWith('.') && !path.isAbsolute(id)

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      formats: ['es'],
    },
    rollupOptions: {
      external: isExternal,
    },
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
})
