import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"
import { imagetools } from "vite-imagetools"
import forgetti from "vite-plugin-forgetti"
import preload from "vite-plugin-preload"
import wasm from "vite-plugin-wasm"

const isDev = process.env.NODE_ENV === "development"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        forgetti({
            preset: "react",
            filter: {
                include: "src/(pages|components)/**/*.{ts,js,tsx,jsx}",
                exclude: "node_modules/**/*.{ts,js,tsx,jsx}",
            },
        }),
        vanillaExtractPlugin(),
        wasm(),
        imagetools(),
        !isDev &&
            preload({
                includeCss: true,
            }),
    ].filter(Boolean),
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    clearScreen: false,
    server: {
        port: 3000,
        strictPort: true,
    },
    envPrefix: ["VITE_"],
    build: {
        minify: "esbuild",
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom"],
                },
            },
        },
        sourcemap: false,
    },
})
