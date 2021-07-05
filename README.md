# rollup集成ts
1.安装typescript：npm i typescript
2.安装ts转换器：rollup-plugin-typescript2
3.配置typescript文件：tsconfig.json

# jest测试
1.安装jest：npm install --save-dev jest
2.安装@babel/core 和 @babel/preset-env: npm install @babel/core @babel/preset-env --save-dev

# Jest支持import和ES6语法：
1.安装 rollup-plugin-babel：npm install rollup-plugin-babel --save-dev
2.

# ts + jest
1.安装预处理器：npm install -D ts-jest
2.安装测试框架的类型推断：npm install -D @types/jest
3.生成配置信息，创建 jest.config.js



# rollupc常用配置
1.input
入口文件地址
2.output
`output:{
  file:'bundle.js', // 输出文件
  format: 'cjs,  //  五种输出格式：amd /  es6 / iife / umd / cjs
  name:'A',  //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
  sourcemap:true  //生成bundle.map.js文件，方便调试
}`
3.plugins
各种插件使用的配置
4.external
external:['lodash'] //告诉rollup不要将此lodash打包，而作为外部依赖
5.global
`global:{
  'jquery':'$' //告诉rollup 全局变量$即是jquery
}`

# 使用Babel
为了正确解析我们的模块并使其与旧版浏览器兼容，我们应该包括babel来编译输出。许多开发人员在他们的项目中使用 Babel ，以便他们可以使用未被浏览器和 Node.js 支持的将来版本的 JavaScript 特性。
1.安装rollup-plugin-babel：npm install rollup-plugin-babel --save-dev
2.配置rollup.config.js
plugins: [
  ts(),
  babel({
    exclude: 'node_modules/**' // 排除node_modules文件
  })
]
