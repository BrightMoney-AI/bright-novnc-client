const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      novnc: path.resolve(__dirname, 'external/novnc/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'external/novnc/app/images', to: 'app/images' },
        { from: 'external/novnc/app/styles', to: 'app/styles' },
        { from: 'external/novnc/app/sounds', to: 'app/sounds' },
        { from: 'external/novnc/app/error-handler.js', to: 'app/error-handler.js' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'external/novnc'),
        ],
        use: 'babel-loader',
      },
    ],
  },
};