const path = require("path");
const nodeExternals = require("webpack-node-externals");

const plugins = require("./webpack.plugin.config");
const modules = require("./webpack.modules.config");

const BUILD_DIR = path.join(__dirname, "dist");
//const SERVER_PATH = process.argv.mode === "production" ? "src/server/server-prod.js" : "/src/server/server-dev.js";
const SERVER_FILE = path.join(process.cwd(), "/src/server/server-dev.js");

let coreConfig = {
  entry: {
    index: ["./src/index.js"],
    draw: ["./src/scripts/draw.js", "./src/styles/draw.css"],
    varnmala: ["./src/scripts/varnmala.js", "./src/styles/varnmala.css"],
    canvas: ["./src/scripts/canvas.js", "./src/styles/canvas.css"],
    server: [SERVER_FILE]
  },
  performance: {
    hints: false
  },
  devServer: {
    static: "./dist", // string [string] object [object]
    open: true,
    hot: true
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
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

coreConfig["plugins"] = plugins;
coreConfig["module"] = modules;

module.exports = coreConfig;

//module.exports = (env, args) => {
//  console.log(env, args);
//  coreConfig.mode = args.mode;
//  coreConfig["plugins"] = plugins;
//  coreConfig["module"] = modules;
//  return coreConfig;
//};
