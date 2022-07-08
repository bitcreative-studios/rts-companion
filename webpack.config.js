const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: {
    sidebar: './sidebar/index.js',
    options: './options/index.js',
    background: './background.js',
  },
  output: {
    path: path.resolve(__dirname, 'addon'),
    filename: '[name]/[name]-bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'manifest.json' }],
    }),
    new HtmlWebpackPlugin({
      template: './sidebar/index.html',
      filename: 'sidebar/index.html',
      chunks: ['sidebar'],
    }),
    new HtmlWebpackPlugin({
      template: './options/index.html',
      filename: 'options/index.html',
      chunks: ['options'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
    }),
  ],
}
