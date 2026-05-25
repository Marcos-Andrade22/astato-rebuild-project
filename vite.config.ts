import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // base: defina o subdiretório onde o app ficará hospedado no WordPress.
  // Exemplo: se ficar em https://seusite.com/app/ → base: '/app/'
  // Se ficar na raiz → base: '/'
  base: '/app/',

  build: {
    outDir: 'dist',
    // Gera sourcemaps apenas em desenvolvimento
    sourcemap: mode === 'development',
    // Otimiza o build para produção
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Nomes com hash para cache busting
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
    // lovable-tagger apenas em desenvolvimento local
    ...(mode === 'development'
      ? [require('lovable-tagger').componentTagger()]
      : []
    ),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
