const fs = require('fs')
const { resolve } = require('path')
const path = require('path')
const transformUrl = function (dir) {
  return path.join(__dirname, '..', dir)
}
const target = fs.readFileSync(resolve('src'))