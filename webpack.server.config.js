const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const SERVER_PATH = "./src/server/server-dev.js";
const config = {
  //return {
  entry: {
    server: SERVER_PATH,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js"],
  },
  mode: "production",
  target: "node",
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpile ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
module.exports = config;
