import { defineConfig } from 'weapp-vite/config'
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import path from 'node:path'
export default defineConfig({
  weapp: {
    srcRoot:"."
  },
  plugins: [
    UnifiedViteWeappTailwindcssPlugin({
      rem2rpx: true,
      tailwindcss: {
        // 显示声明用的是 tailwindcss v4
        version: 4,
        v4: {
          cssEntries: [
            // app.css 的路径
            path.resolve(import.meta.dirname, './app.css'),
          ],
        },
      },
    }),
  ],
})
