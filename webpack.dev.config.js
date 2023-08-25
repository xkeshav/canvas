require("dotenv").config();
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const plugins = require("./webpack.plugin.config");
const modules = require("./webpack.modules.config");

const DIST_DIR = path.join(__dirname, "dist");

module.exports = {
  entry: {
    index: ["./src/index.js"],
    draw: ["./src/scripts/draw.js", "./src/styles/draw.css"],
    varnmala: ["./src/scripts/varnmala.js", "./src/styles/varnmala.css"],
    canvas: ["./src/scripts/canvas.js", "./src/styles/canvas.css"],
    server: ["/src/server/server.js"]
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
    path: DIST_DIR,
    publicPath: "/",
    filename: "scripts/[name].js",
    //chunkFilename: "scripts/[name].js",
    //assetModuleFilename: "assets/[hash][ext][query]",
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
