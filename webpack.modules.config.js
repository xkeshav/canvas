const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const modules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.html$/i,
      loader: "html-loader"
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            importLoaders: 2,
            url: true,
            esModule: true
          }
        }
      ]
    },
    //{
    //  test: /\.(png|jpg|svg|gif)$/,
    //  type: "asset/resource"
    //},
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
      include: path.resolve(__dirname, "src/assets/images"), // Point to your images folder
      use: [
        {
          loader: "file-loader",
          options: {
            name: "assets/[name].[ext]",
            outputPath: "./assets",
            publicPath: function (url) {
              return url.replace(/assets/, "../../assets");
            },
            emitFile: false // Do not emit the file to the output directory
          }
        }
      ]
    },
    {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      type: "asset/resource",
      dependency: { not: ["url"] },
      generator: {
        filename: "assets/fonts/[hash][ext][query]"
      }
    }
  ]
};

module.exports = modules;
