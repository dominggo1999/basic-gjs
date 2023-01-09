import { resolve } from 'path'
import { defineConfig } from 'vite'
import { replaceCodePlugin } from 'vite-plugin-replace'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Main',
      // the proper extensions will be added
      fileName: 'main',
    },
    target: 'firefox68',
    rollupOptions: {
      external: ['gtk', 'pango', 'webkit2', 'gobject'],
    },
  },
  plugins: [
    replaceCodePlugin({
      replacements: [
        {
          from: `import * as Gtk from "gtk"`,
          to: `const Gtk = imports.gi.Gtk`,
        },
        {
          from: `import * as Pango from "pango"`,
          to: `const Pango = imports.gi.Pango`,
        },
        {
          from: `import * as GObject from "gobject"`,
          to: `const GObject = imports.gi.GObject`,
        },
        {
          from: `import * as WebKit from "webkit2"`,
          to: `const WebKit = imports.gi.WebKit2`,
        },
      ],
    }),
  ],
})
