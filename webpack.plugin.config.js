const webpack = require("webpack");
const path = require("path");

const HtmlPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const BUILD_DIR = path.join(__dirname, "dist");
const HTML_DIR = path.join(BUILD_DIR, "html");

const htmlPageNames = ["about", "canvas", "draw", "varnmala"];

const multipleHtmlPlugins = htmlPageNames.map(
  (name) =>
    new HtmlPlugin({
      template: `./src/html/${name}.html`, // relative path to the HTML files
      filename: `${HTML_DIR}/${name}.html`, // output HTML files
      chunks: [`${name}`], // respective JS files
    })
);

const esLintOptions = {
  extensions: [`js`],
  exclude: [`/node_modules/`],
  emitWarning: true,
  failOnError: false,
};

const plugins = [
  new HtmlPlugin({
    template: "src/html/index.html",
    filename: `${HTML_DIR}/index.html`,
    chunks: ["index"],
    excludeChunks: ["server"],
  }),
  new MiniCssExtractPlugin({
    filename: "styles/[name].css",
  }),
  new webpack.HotModuleReplacementPlugin(),
  new ESLintPlugin(esLintOptions),
  new webpack.NoEmitOnErrorsPlugin(),
  new CopyPlugin({
    patterns: [
      {
        from: "./src/asset/images",
        to: "./asset/images",
      },
    ],
  }),
].concat(multipleHtmlPlugins);

module.exports = plugins;
