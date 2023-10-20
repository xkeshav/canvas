const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  externals: nodeExternals(),
  entry: {
    index: ["./src/index.js"],
    draw: ["./src/scripts/draw.js", "./src/styles/draw.css"],
    varnmala: ["./src/scripts/varnmala.js", "./src/styles/varnmala.css"],
    canvas: ["./src/scripts/canvas.js", "./src/styles/canvas.css"],
    server: ["./src/server/index.js"]
  },
  output: {
    path: __dirname + "build",
    publicPath: "/",
    filename: "scripts/[name].js",
    chunkFilename: "scripts/[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /\.spec\.js$/],
        use: "babel-loader"
      }
    ]
  }
};
