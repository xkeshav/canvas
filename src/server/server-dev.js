// @ts-nocheck
import express from 'express';
import path from 'path';
import { webpack } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config.js';

const app = express();

const router = express.Router();

//app.use(express.static(__dirname + 'src', '/images'));

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(DIST_DIR));

app.get('/home', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get('/draw', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'draw.html'));
});

app.get('/hello', (req, res) => {
  res.send('Hello from server-dev to World');
});

app.use('/', router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
