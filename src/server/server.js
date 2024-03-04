// @ts-nocheck
const express = require("express");
const path  = require("path");
import { alphabetMapper } from "../common/mappers";

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.dev'); 


const app = express();

const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

const router = express.Router();

const currentDirectory = process.cwd(); // current directory

const SRC_DIR = path.join(path.resolve(currentDirectory, "src"));

const HTML_DIR = path.join(SRC_DIR, "html");
const HTML_FILE = path.join(HTML_DIR, "index.html");

//app.use(express.static(HTML_DIR));
// Serve static files from the 'dist' directory
app.use(express.static('dist'));

//const compiler = webpack(config);

//app.use(
//  webpackDevMiddleware(compiler, {
//    publicPath: config.output.publicPath
//  })
//);

//app.use(webpackHotMiddleware(compiler));

app.get("/home", (_, res) => {
  res.sendFile(HTML_FILE);
});

app.get("/about", (_, res) => {
  res.sendFile(path.join(HTML_DIR, "about.html"));
});

app.get("/draw", (_, res) => {
  res.sendFile(path.join(HTML_DIR, "draw.html"));
});

app.get("/varnmala", (_, res) => {
  res.sendFile(path.join(HTML_DIR, "varnmala.html"));
});

app.get("/canvas", (_, res) => {
  res.sendFile(path.join(HTML_DIR, "canvas.html"));
});

app.get("/math", (_, res) => {
  res.sendFile(path.join(HTML_DIR, "math.html"));
});

app.get("/kannada", (_, res) => {
  res.sendFile(path.join(HTML_DIR, "kannada.html"));
});

//const readJson = (fileName) => {
//  let jsonObjData = [];
//  try {
//    const jsonStringData = fs.readFileSync(path.join(DIST_DIR, "json", fileName));
//    jsonObjData = JSON.parse(jsonStringData);
//  } catch (err) {
//    console.log(err);
//  }
//  return jsonObjData;
//};

app.get("/bg/:key", (req, res) => {
  //console.log("params", req.params.key);
  //const fileData = readJson("bg.json");
  const [output] = alphabetMapper.filter((f) => f.key === req.params.key.toLowerCase());
  console.log("called ==>", { output });
  res.json({ success: "canvas bg called", url: req.url, output });
});

app.use("/", router);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});