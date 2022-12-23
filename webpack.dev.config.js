const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const BUILD_DIR = path.join(__dirname, "dist");
const HTML_DIR = path.join(BUILD_DIR, "html");

let htmlPageNames = ["canvas", "draw", "varnmala"];

let multipleHtmlPlugins = htmlPageNames.map((name) => {
	return new HtmlPlugin({
		template: `./src/html/${name}.html`, // relative path to the HTML files
		filename: `${HTML_DIR}/${name}.html`, // output HTML files
		chunks: [`${name}`], // respective JS files
	});
});

const esLintOptions = {
	extensions: [`js`],
	exclude: [`/node_modules/`],
	emitWarning: true,
	failOnError: false,
};

const config = {
	entry: {
		index: "./src/index.js",
		draw: ["./src/scripts/draw.js", "./src/styles/draw.css"],
		varnmala: ["./src/scripts/varnmala.js", "./src/styles/varnmala.css"],
		canvas: ["./src/scripts/canvas.js", "./src/styles/canvas.css"],
	},
	output: {
		path: BUILD_DIR,
		publicPath: "/",
		filename: "[name].js",
		assetModuleFilename: "asset/[hash][ext][query]",
	},
	mode: "development",
	target: "web",
	devtool: "eval-source-map",
	resolve: {
		extensions: [".html", ".js", ".json", ".css"],
	},

	plugins: [
		new HtmlPlugin({
			template: "src/html/index.html",
			filename: `${HTML_DIR}/index.html`,
			chunks: ["index"],
			excludeChunks: ["server"],
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
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
	].concat(multipleHtmlPlugins),
	module: {
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
							sourceMap: true,
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
	},
};

module.exports = config;
