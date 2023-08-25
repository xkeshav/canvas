// @ts-nocheck
import express from "express";
import path from "path";
import { webpack } from "webpack";

import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import { alphabetMapper } from "../mappers/alphabet.js";
const config = require("../../webpack.client.config.js");

const app = express();

const router = express.Router();

const currentDirectory = process.cwd(); // current directory

const DIST_DIR = path.join(path.resolve(currentDirectory, "dist"));

const HTML_DIR = path.join(DIST_DIR, "html");
const HTML_FILE = path.join(HTML_DIR, "index.html");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(HTML_DIR));

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
