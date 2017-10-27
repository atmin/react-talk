const path = require('path');

module.exports = {
  context: path.join(__dirname, 'react-app'),
  entry: ['./index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
