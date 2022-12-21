import express from 'express';
import { join } from 'path';
import { webpack } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
//import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config';

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = join(DIST_DIR, 'index.html');
const compiler = webpack(config);

console.log(HTML_FILE);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

//app.use(webpackHotMiddleware(compiler));

app.use(express.static(DIST_DIR));
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8070;

app.listen(PORT, () => {
  console.log(`App123 listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
