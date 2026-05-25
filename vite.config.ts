import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base aponta para o dist/ dentro do tema WordPress
  // Isso garante que imagens e assets sejam carregados do caminho correto
  base: '/wp-content/themes/astato-new/dist/',

  build: {
    outDir: 'dist',
    manifest: true,
    sourcemap: mode === 'development',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    ...(mode === 'development'
      ? (() => { try { return [require('lovable-tagger').componentTagger()]; } catch { return []; } })()
      : []
    ),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
