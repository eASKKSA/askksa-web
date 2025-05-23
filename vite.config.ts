import path from "path"
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react(),
    ],
    server: {
        port: 3000,
        strictPort: true,
        host: true,
    },
    base: "/askksa-web/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
