const path = require('path')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'client'),
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  devServer: {
    port: process.env.DEV_SERVER_PORT,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    stats: 'minimal'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
