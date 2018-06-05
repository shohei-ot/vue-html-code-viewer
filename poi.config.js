const webpack = require('webpack')
module.exports = {
  entry: './src/install.js',
  babel: {
    jsx: 'vue'
  },
  hash: false,
  configureWebpack(config) {
    if (typeof config.plugins === 'undefined') {
      config.plugins = []
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    )
  }
}
