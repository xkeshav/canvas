const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const APP_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'dist');

const options = {
  extensions: [`js`],
  exclude: [`/node_modules/`],
  emitWarning: true,
  failOnError: false,
};

const config = {
  entry: {
    index: path.join(__dirname, '/src/index.js'),
  },
  output: {
    path: BUILD_DIR,
    publicPath: '.',
    filename: '[name].js',
  },
  mode: 'development',
  target: 'web',
  //devtool: 'eval-source-map',
  resolve: {
    extensions: ['.html', '.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.html$/i, loader: 'html-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: './index.html',
      excludeChunks: ['server'],
    }),
    //new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin(options),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
