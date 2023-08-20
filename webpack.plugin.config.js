const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const BUILD_DIR = path.join(__dirname, "dist");
const HTML_DIR = path.join(BUILD_DIR, "html");

const htmlPageNames = ["about", "canvas", "draw", "varnmala"];

const multipleHtmlPlugins = htmlPageNames.map(
  (name) =>
    new HtmlWebpackPlugin({
      template: `./src/html/${name}.html`, // relative path to the HTML files
      filename: `${HTML_DIR}/${name}.html`, // output HTML files
      chunks: [`${name}`] // respective JS files
    })
);

const esLintOptions = {
  extensions: [`js`],
  exclude: [`/node_modules/`],
  emitWarning: true,
  failOnError: false
};

const plugins = [
  new HtmlWebpackPlugin({
    template: "src/html/index.html",
    filename: `${HTML_DIR}/index.html`,
    chunks: ["index"],
    excludeChunks: ["server"],
    title: "HMR for index.html"
  }),
  new MiniCssExtractPlugin({
    filename: "styles/[name].css"
  }),
  new webpack.HotModuleReplacementPlugin(),
  new ESLintPlugin(esLintOptions),
  new webpack.NoEmitOnErrorsPlugin(),
  new CopyPlugin({
    patterns: [
      {
        from: "./src/assets/images",
        to: "./assets/images"
      },
      {
        from: "./src/assets/fonts",
        to: "./assets/fonts"
      },
      {
        from: "./src/json",
        to: "./json"
      }
    ]
  })
].concat(multipleHtmlPlugins);

module.exports = plugins;
