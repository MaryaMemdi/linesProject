import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: 'http://82.115.26.95/',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    },
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./public/"),
            "@images": path.resolve(__dirname, "./public/assets/images"),
        },
    },
});
