import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
// import legacy from '@vitejs/plugin-legacy'

const jsxInject = `
  import React, { useState } from 'react'
  import { cloneDeep } from 'lodash-es'
`

export default defineConfig(({ command, mode }) => ({
  css: {
    devSourcemap: true, // 开发环境生成css sourcemap
  },
  esbuild: {
    jsxInject, // 预置依赖 plugin-react已经帮忙引入react依赖
  },
  resolve: {
    alias: {
      // 别名
      '@style': '/src/styles/style',
      '@assets': '/src/styles/assets',
      '@utils': '/src/utils',
      '@components': '/src/components',
    },
  },
  server: {
    open: true,
    port: 9999,
  },
  build: {
    sourcemap: mode === 'staging', // 预发布生成sourcemap
  },
  plugins: [
    react({
      jsxRuntime: 'automatic', // 不知道值是不是取反了
    }), // react全部配置
    splitVendorChunkPlugin(), // 分割index.html入口chunk为index和vendors(缓存)
    /* legacy({
        targets: ['defaults', 'not IE 11']
      }), // 生成兼容老版本的chunk和相关polyfills，运行时按需加载 */
  ],
}))
