const config = require('./webpack.config.js');

module.exports = {
  ...config,
  output: {
    ...config.output,
    publicPath: '/'
  },
  devServer: {
    ...config.devServer,
    devMiddleware: {
      publicPath: '/'
    }
  }
}; 