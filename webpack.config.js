const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件

module.exports = {
  mode: 'none', // 因为默认是production 默认会进行压缩
  entry: {
    index: './src/webIME.js',
    'index.min': './src/webIME.js'
  },
  output: {
    filename: '[name].js',
    library: 'sarmayIme',
    libraryExport: 'default', // 不添加的话引用的时候需要 tools.default
    libraryTarget: 'umd', // var this window ...
    globalObject: 'this'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // 使用压缩插件
        include: /\.min\.js$/
      })
    ]
  }
}
