require("dotenv").config();
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const plugins = require("./webpack.plugins.config");
const modules = require("./webpack.modules.config");

const BUILD_DIR = path.join(__dirname, "build");
const DIST_DIR = path.join(__dirname, "dist");

module.exports = {
  entry: {
    index: ["./src/index.js"],
    draw: ["./src/scripts/draw.js", "./src/styles/draw.css"],
    'hide-n-seek': ["./src/scripts/hide-n-seek.js", "./src/styles/hide-n-seek.css"],
    canvas: ["./src/scripts/canvas.js", "./src/styles/canvas.css"],
    server: ["./src/server/server.js"]
  },

  devServer: {
    static: DIST_DIR,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true
  },

  output: {
    path: BUILD_DIR,
    publicPath: BUILD_DIR,
    filename: "scripts/[name].js",
    chunkFilename: "scripts/[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true
  },
  mode: "development",
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  devtool: "eval-source-map",
  plugins,
  module: modules,
  resolve: {
    extensions: [".html", ".js", ".json", ".css"]
  },
  optimization: {
    runtimeChunk: "single"
  }
};
