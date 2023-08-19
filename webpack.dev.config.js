const path = require("path");
const nodeExternals = require("webpack-node-externals");

const plugins = require("./webpack.plugin.config");
const modules = require("./webpack.modules.config");

//console.log(process.argv.mode);
const BUILD_DIR = path.join(__dirname, "dist");
const SERVER_PATH = process.argv.mode === "production" ? "src/server/server-prod.js" : "/src/server/server-dev.js";
const SERVER_DIR = path.join(process.cwd(), SERVER_PATH);

const baseConfig = {
  entry: {
    index: ["./src/index.js"],
    draw: ["./src/scripts/draw.js", "./src/styles/draw.css"],
    varnmala: ["./src/scripts/varnmala.js", "./src/styles/varnmala.css"],
    canvas: ["./src/scripts/canvas.js", "./src/styles/canvas.css"],
    server: [SERVER_DIR]
  },
  performance: {
    hints: false
  },
  devServer: {
    watchFiles: ["./dist/*"], // string [string] object [object]
    port: 3000,
    open: true,
    hot: true
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    globalObject: `typeof self !== 'undefined' ? self : this`,
    clean: true
  },
  mode: "production",
  target: "node", // "web"
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname and __filename return blank or /
    __filename: false
  },
  externals: [nodeExternals()],
  devtool: "eval-source-map",
  resolve: {
    extensions: [".html", ".js", ".json", ".css"]
  }
};

const config = Object.assign(baseConfig, { plugins, module: modules });

module.exports = config;
