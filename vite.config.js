/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

const isExternal = (id) => !id.startsWith('.') && !path.isAbsolute(id)

// https://vitejs.dev/config/
export default defineConfig(() => {
  if (process.env.FRAMEWORK === 'react') {
    return {
      root: path.resolve(__dirname, 'src/react'),
      define: {
        global: {},
      },
      build: {
        outDir: path.resolve(__dirname, 'react'),
        lib: {
          entry: path.resolve(__dirname, 'src/react/components/index.js'),
          formats: ['es'],
          fileName: () => 'index.js',
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
    }
  }
  return {}
})
