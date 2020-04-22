module.exports = {
  outputDir: 'dist', // build输出目录
  assetsDir: 'assets', // 静态资源目录（js, css, img）
  lintOnSave: true, // 是否开启eslint
  devServer: {
    open: false, // 是否自动弹出浏览器页面
    host: '192.168.0.104',
    port: '8080',
    https: false, // 是否使用https协议
    hotOnly: false, // 是否开启热更新
    proxy: null
  }
}
