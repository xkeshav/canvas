require("dotenv").config();
const path = require("path");
const nodeExternals = require("webpack-node-externals");
//const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const plugins = require("./webpack.plugins.config");
const modules = require("./webpack.modules.config");

const BUILD_DIR = path.join(__dirname, "build");
const DIST_DIR = path.join(__dirname, "dist");

const pages = ["draw", "varnmala", "canvas", "about", "math"];

const entryObject = pages.reduce((p, n) => Object.assign(p, { [n]: [`./src/scripts/${n}.js`, `./src/styles/${n}.css`] }), {});

module.exports = {
  entry: {
    index: ["./src/index.js"],
    server: ["./src/server/index.js"],
    ...entryObject
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      serveIndex: true
    },
    compress: true,
    port: 3000,
    //historyApiFallback: true,
    open: true,
    hot: true
  },

  //devServer: {
  //  port: 8080,
  //  hot: "only",
  //  open: true,
  //  static: {
  //    directory: path.join(__dirname, "public"),
  //    serveIndex: true
  //  }
  //},

  output: {
    path: DIST_DIR,
    publicPath: "/",
    filename: "scripts/[name].js",
    chunkFilename: "scripts/[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true
  },
  mode: "development",
  target: "web",
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
