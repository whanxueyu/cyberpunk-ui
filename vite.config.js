import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            'package': path.resolve(__dirname, 'package')
        },
    },
    build: {
        outDir: 'lib',
        lib: {
            entry: path.resolve(__dirname, './package/cyberpunk-ui/index.ts'),
            name: 'cyberpunkUI',
            fileName: 'cyberpunk-ui'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
//# sourceMappingURL=vite.config.js.map