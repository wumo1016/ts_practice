import {
  nodeResolve
} from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'

import path from 'path'

export default {
  input: 'src/index.ts',
  output: {
    file: path.resolve(__dirname, 'dist/bundle.js'),
    format: 'iife', // global(全局变量) cjs(module.exports) esm(export default) 
    sourcemap: true // tsconfig文件中也要配置
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts'] // 找什么类型的文件
    }),
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    }),
    serve({
      port: 1016,
      contentBase: '', // 根路径
      openPage: '/public/index'
    }),
  ]
}