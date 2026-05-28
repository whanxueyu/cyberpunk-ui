import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'rename-css',
      closeBundle() {
        const oldPath = path.resolve(__dirname, 'lib/cyberpunk-ui.css')
        const newPath = path.resolve(__dirname, 'lib/style.css')
        if (fs.existsSync(oldPath)) {
          fs.renameSync(oldPath, newPath)
          console.log('Renamed cyberpunk-ui.css to style.css')
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@cyberpunk-ui": path.resolve(__dirname, "./package"),
      'package': path.resolve(__dirname, 'package')
    },
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, './package/cyberpunk-ui/index.ts'),
      name: 'cyberpunkUI',
      fileName: 'cyberpunk-ui',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})