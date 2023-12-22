require("dotenv").config();
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const plugins = require("./webpack.plugins.config");
const modules = require("./webpack.modules.config");

const DIST_DIR = path.join(__dirname, "dist");

const isProd = process.env.MODE === "production";

pages = ["draw", "varnmala", "canvas", "about", "math"];

const entryObject = pages.reduce((p, n) => Object.assign(p, { [n]: [`./src/scripts/${n}.js`, `./src/styles/${n}.css`] }), {});

module.exports = {
  entry: {
    server: ["./src/server/server.js"],
    ...entryObject
  },
  performance: {
    hints: "warning"
  },
  output: {
    path: DIST_DIR,
    publicPath: "/",
    filename: "scripts/[name].js",
    chunkFilename: "scripts/[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true
  },
  mode: process.env.MODE || "none",
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  devtool: "source-map",
  plugins,
  module: modules,
  resolve: {
    extensions: [".html", ".js", ".json", ".css"]
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
};
