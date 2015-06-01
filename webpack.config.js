var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'eval',
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.coffee']
  },
  module: {
    loaders: [{
      test: /\.coffee?$/,
      loaders: ['react-hot', 'coffee-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.coffee?$/,
      loaders: ['coffee-loader'],
      include: path.join(__dirname, 'node_modules')
    }]
  }
};
