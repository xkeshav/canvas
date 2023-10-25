const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");

//const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/server/index.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
    publicPath: "",
    clean: true
  },
  target: "node",
  stats: { children: true },
  mode: "development",
  externals: [nodeExternals()],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              import: true,
              modules: true,
              importLoaders: 2,
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css"
    })
    //new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: [".html", ".js", ".json", ".css"]
  }
};
