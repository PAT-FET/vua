const shell = require('shelljs')

// 清除上次构建
// shell.rm('-r', 'dist')

// 应用打包
shell.exec('vue-cli-service build --target lib --name vua src/index.ts')
