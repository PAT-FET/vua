module.exports = {
  baseUrl: './',
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }
}
