# rollupc常用配置
## input
入口文件地址
## output
`output:{
  file:'bundle.js', // 输出文件
  format: 'cjs,  //  五种输出格式：amd /  es6 / iife / umd / cjs
  name:'A',  //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
  sourcemap:true  //生成bundle.map.js文件，方便调试
}`
## plugins
各种插件使用的配置
## external
external:['lodash'] //告诉rollup不要将此lodash打包，而作为外部依赖
## global
`global:{
  'jquery':'$' //告诉rollup 全局变量$即是jquery
}`

# 使用Babel
为了正确解析我们的模块并使其与旧版浏览器兼容，我们应该包括babel来编译输出。许多开发人员在他们的项目中使用 Babel ，以便他们可以使用未被浏览器和 Node.js 支持的将来版本的 JavaScript 特性。
## 安装rollup-plugin-babel
npm install rollup-plugin-babel --save-dev
## 配置rollup.config.js
`plugins: [
  ts(),
  babel({
    exclude: 'node_modules/**' // 排除node_modules文件,只编译源代码
  })
]`
## 添加Babel配置文件.babelrc
`{
  "presets": [
    "@babel/preset-env", 
    { 
      "modules": false // 设置 "modules": false ，否则 Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS ，导致 Rollup 的一些处理失败。
    }
  ]
}`
## 安装@babel/core 和 @babel/preset-env
@babel/core是babel的核心，我们看到babelrc配置了 preset env，所以要安装这两个插件
npm install @babel/core @babel/preset-env --save-dev

# 使用typescript
## 安装@rollup/plugin-typescript
npm install @rollup/plugin-typescript --save-dev
##  安装tslib 和 typescript
npm install tslib typescript --save-dev
## 配置rollup.config.js
