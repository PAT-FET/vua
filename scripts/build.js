const shell = require('shelljs')

// 清除上次构建
shell.rm('-r', 'types')

// 生成types
console.log('--------- 生成 types ------------')
shell.exec('webpack --config scripts/webpack.config.types.js')

// 应用打包
console.log('--------- 应用打包 ------------')
shell.exec('vue-cli-service build --target lib --name vua src/index.ts')
