const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  context: __dirname,
  entry: __dirname + "/js/index.js",
  mode: "development",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
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
      },
      { test: /\.html$/i, loader: "html-loader" }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".html", ".js", ".json", ".css"]
  }
};
