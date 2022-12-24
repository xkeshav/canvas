const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const modules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    { test: /\.html$/i, loader: "html-loader" },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            importLoaders: 2,
          },
        },
      ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      type: "asset/resource",
    },
    {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      type: "asset/resource",
      dependency: { not: ["url"] },
      generator: {
        filename: "static/[hash][ext][query]",
      },
    },
  ],
};

module.exports = modules;
