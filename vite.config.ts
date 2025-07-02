import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tailwind from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isProduction = mode === "production";

  return {
    plugins: [
      react(),
      nodePolyfills({
        globals: {
          Buffer: true,
        },
      }),
    ],
    base: isProduction ? "/" : "./",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
      include: ['buffer']
    },
    define: {
      'process.env': JSON.stringify(env),
      global: 'globalThis',
    },
    server: {
      hmr: {
        host: 'jamiedimoncoin.ai', // Set to your domain name or public IP
      },
    },
    build: {
      sourcemap: false,
      minify: "esbuild",
      outDir: "dist",
    },
  };
});
