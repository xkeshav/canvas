// @ts-nocheck
import express from "express";
import path from "path";
import { webpack } from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.dev.config.js";

const app = express();

const router = express.Router();

const DIST_DIR = __dirname;
const HTML_DIR = path.join(DIST_DIR, "html");
const HTML_FILE = path.join(HTML_DIR, "index.html");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(HTML_DIR));

app.get("/home", (_, res) => {
  res.sendFile(HTML_FILE);
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

app.use("/", router);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("make sure to run mock server using `npm run mock-server`");
  console.log("Press Ctrl+C to quit.");
});
