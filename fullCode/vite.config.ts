import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const setPath = (dir) => {
  return path.resolve(__dirname,dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // publicDir:"./public",
  build: {
    outDir: "../"
  },
  resolve: {
    alias: {
      "imgs": setPath("./src/assets/imgs"),
      "contexts": setPath("./src/contexts"),
      "components": setPath("./src/components"),
    }
  }
})
