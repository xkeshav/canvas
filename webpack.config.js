module.exports = {
  context: __dirname,
  entry: "./js/index.js",
  mode: "development",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".html", ".js", ".json", ".css"]
  }
};
