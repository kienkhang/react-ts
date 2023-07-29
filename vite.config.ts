import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// vite.config.ts
import Unfonts from 'unplugin-fonts/vite'
// ---- AUTO IMPORT ----
import AutoImport from 'unplugin-auto-import/vite'
// ---- UNPLUGIN ICONS ---- https://github.com/antfu/unplugin-icons
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// loader helpers
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      // Fontsource API
      fontsource: {
        /**
         * Fonts families lists
         */
        families: [
          // families can be either strings (load default font set)
          // Require the `@fontsource/abeezee` package to be installed.
          {
            /**
             * Name of the font family.
             */
            name: 'Manrope',
            /**
             * Load only a subset of the font family.
             */
            weights: [400, 500, 600, 700]
          }
        ]
      }
    }),
    Icons({
      autoInstall: false,
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        local: FileSystemIconLoader('./src/assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/ // .md
      ],
      dirs: ['./src/hooks/**', './src/types/**'],
      dts: './src/auto-imports.d.ts',
      // Global import
      imports: [
        'react',
        'react-router-dom',
        'react-i18next',
        {
          from: 'react',
          imports: ['ReactNode'],
          type: true
        }
      ],
      resolvers: [
        IconsResolver({
          prefix: 'I',
          extension: 'jsx',
          customCollections: ['local']
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    devSourcemap: true
  }
})

