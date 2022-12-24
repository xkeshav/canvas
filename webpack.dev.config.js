const path = require("path");
const webpack = require("webpack");

const plugins = require("./webpack.plugin.config");
const modules = require("./webpack.modules.config");

const BUILD_DIR = path.join(__dirname, "dist");

const baseConfig = {
  entry: {
    index: ["webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", "./src/index.js"],
    draw: ["./src/scripts/draw.js", "./src/styles/draw.css"],
    varnmala: ["./src/scripts/varnmala.js", "./src/styles/varnmala.css"],
    canvas: ["./src/scripts/canvas.js", "./src/styles/canvas.css"],
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].js",
    assetModuleFilename: "asset/[hash][ext][query]",
  },
  mode: "development",
  target: "web",
  devtool: "eval-source-map",
  resolve: {
    extensions: [".html", ".js", ".json", ".css"],
  },
};

const config = Object.assign(baseConfig, { plugins, module: modules });

module.exports = config;
