// 引入nodeJS内置模块path: 路径转换把相对路径转换为绝对路径
const path = require('path')
const ts = require('rollup-plugin-typescript2')

const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  // 入口
  input: resolve('src/index.ts'),
  // 出口
  output: {
    file: resolve('dist/bundle.js'),
    format: 'umd',
    name: '$Form'
  },
  plugins: [
    ts()
  ]
};