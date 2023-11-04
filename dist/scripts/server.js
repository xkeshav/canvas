/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 845:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

        "use strict";

        ;// CONCATENATED MODULE: external "express"
        const external_express_namespaceObject = require("express");
        var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
        // EXTERNAL MODULE: external "path"
        var external_path_ = __webpack_require__(423);
        var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
        // EXTERNAL MODULE: external "webpack"
        var external_webpack_ = __webpack_require__(354);
        ;// CONCATENATED MODULE: external "webpack-dev-middleware"
        const external_webpack_dev_middleware_namespaceObject = require("webpack-dev-middleware");
        var external_webpack_dev_middleware_default = /*#__PURE__*/__webpack_require__.n(external_webpack_dev_middleware_namespaceObject);
        ;// CONCATENATED MODULE: external "webpack-hot-middleware"
        const external_webpack_hot_middleware_namespaceObject = require("webpack-hot-middleware");
        var external_webpack_hot_middleware_default = /*#__PURE__*/__webpack_require__.n(external_webpack_hot_middleware_namespaceObject);
        ;// CONCATENATED MODULE: ./src/mappers/alphabet.js
        var alphabetMapper = [{
          key: "a",
          value: "apple"
        }, {
          key: "b",
          value: "banana"
        }, {
          key: "c",
          value: "cat"
        }, {
          key: "d",
          value: "dog"
        }, {
          key: "e",
          value: "elephant"
        }, {
          key: "f",
          value: "fish"
        }, {
          key: "g",
          value: "grapes"
        }, {
          key: "h",
          value: "horse"
        }, {
          key: "i",
          value: "ice-cream"
        }, {
          key: "j",
          value: "jug"
        }, {
          key: "k",
          value: "kiwi"
        }, {
          key: "l",
          value: "lemon"
        }, {
          key: "m",
          value: "moon"
        }, {
          key: "n",
          value: "night"
        }, {
          key: "o",
          value: "orange"
        }, {
          key: "p",
          value: "pineapple"
        }, {
          key: "q",
          value: "queen"
        }, {
          key: "r",
          value: "rose"
        }, {
          key: "s",
          value: "strawberry"
        }, {
          key: "t",
          value: "tomato"
        }, {
          key: "u",
          value: "umbrella"
        }, {
          key: "v",
          value: "van"
        }, {
          key: "w",
          value: "watermelon"
        }, {
          key: "x",
          value: "xmas"
        }, {
          key: "y",
          value: "yacht"
        }, {
          key: "z",
          value: "zero"
        }];
        ;// CONCATENATED MODULE: ./src/server/server.js
        function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
        function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
        function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
        function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
        // @ts-nocheck






        var config = __webpack_require__(465);
        var app = external_express_default()();
        var router = external_express_default().Router();
        var currentDirectory = process.cwd(); // current directory

        var DIST_DIR = external_path_default().join(external_path_default().resolve(currentDirectory, "dist"));
        var HTML_DIR = external_path_default().join(DIST_DIR, "html");
        var HTML_FILE = external_path_default().join(HTML_DIR, "index.html");
        app.use(external_express_default()["static"](HTML_DIR));
        var compiler = (0, external_webpack_.webpack)(config);
        app.use(external_webpack_dev_middleware_default()(compiler, {
          publicPath: config.output.publicPath
        }));
        app.use(external_webpack_hot_middleware_default()(compiler));
        app.get("/home", function (_, res) {
          res.sendFile(HTML_FILE);
        });
        app.get("/about", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "about.html"));
        });
        app.get("/draw", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "draw.html"));
        });
        app.get("/varnmala", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "varnmala.html"));
        });
        app.get("/canvas", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "canvas.html"));
        });
        app.get("/typing", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "typing.html"));
        });
        app.get("/reader", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "reader.html"));
        });
        app.get("/panel", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "panel.html"));
        });
        app.get("/panel", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "panel.html"));
        });
        app.get("/tree", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "tree.html"));
        });
        app.get("/hindi", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "hindi.html"));
        });
        app.get("/record", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "record.html"));
        });
        app.get("/color", function (_, res) {
          res.sendFile(external_path_default().join(HTML_DIR, "color.html"));
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

        app.get("/bg/:key", function (req, res) {
          //console.log("params", req.params.key);
          //const fileData = readJson("bg.json");
          var _alphabetMapper$filte = alphabetMapper.filter(function (f) {
            return f.key === req.params.key.toLowerCase();
          }),
            _alphabetMapper$filte2 = _slicedToArray(_alphabetMapper$filte, 1),
            output = _alphabetMapper$filte2[0];
          console.log("called ==>", {
            output: output
          });
          res.json({
            success: "canvas bg called",
            url: req.url,
            output: output
          });
        });
        app.use("/", router);
        var PORT = process.env.PORT || 3003;
        app.listen(PORT, function () {
          console.log("App listening to ".concat(PORT, "...."));
          console.log("Press Ctrl+C to quit.");
        });

        /***/
      }),

/***/ 108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

        var MiniCssExtractPlugin = __webpack_require__(857);
        var modules = {
          rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }, {
            test: /\.html$/i,
            loader: "html-loader"
          }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                esModule: false
              }
            }]
          }, {
            test: /\.(png|svg|jpg|gif)$/,
            type: "asset/resource"
          }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            type: "asset/resource",
            dependency: {
              not: ["url"]
            },
            generator: {
              filename: "assets/fonts/[hash][ext][query]"
            }
          }]
        };
        module.exports = modules;

        /***/
      }),

/***/ 831:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

        (__webpack_require__(142).config)();
        var webpack = __webpack_require__(354);
        var path = __webpack_require__(423);
        var HtmlWebpackPlugin = __webpack_require__(510);
        var ESLintPlugin = __webpack_require__(582);
        var MiniCssExtractPlugin = __webpack_require__(857);
        var CopyPlugin = __webpack_require__(1);
        var DIST_DIR = path.join(__dirname, "dist");
        var HTML_DIR = path.join(DIST_DIR, "html");
        var htmlPageNames = ["about", "canvas", "draw", "varnmala", "reader"];
        var multipleHtmlPlugins = htmlPageNames.map(function (name) {
          return new HtmlWebpackPlugin({
            template: "./src/html/".concat(name, ".html"),
            // relative path to the HTML files
            filename: "".concat(HTML_DIR, "/").concat(name, ".html"),
            // output HTML files
            chunks: ["".concat(name)] // respective JS files
          });
        });

        var esLintOptions = {
          extensions: ["js"],
          exclude: ["/node_modules/"],
          emitWarning: true,
          failOnError: false
        };
        var plugins = [new HtmlWebpackPlugin({
          template: "src/html/index.html",
          filename: "".concat(HTML_DIR, "/index.html"),
          chunks: ["index"],
          excludeChunks: ["server"],
          title: "HMR for index.html"
        }), new webpack.HotModuleReplacementPlugin(), new ESLintPlugin(esLintOptions), new webpack.NoEmitOnErrorsPlugin(), new MiniCssExtractPlugin({
          filename: "styles/[name].css"
        })
          //new CopyPlugin({
          //  patterns: [
          //    {
          //      from: "./public/images",
          //      to: "./assets/images"
          //    }
          //  ]
          //})
        ].concat(multipleHtmlPlugins);
        console.log("mode", process.env.MODE);
        module.exports = plugins;

        /***/
      }),

/***/ 465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

        function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
        function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
        function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
        function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
        function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
        function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
        (__webpack_require__(142).config)();
        var path = __webpack_require__(423);
        var nodeExternals = __webpack_require__(977);
        var CssMinimizerPlugin = __webpack_require__(471);
        var plugins = __webpack_require__(831);
        var modules = __webpack_require__(108);
        var DIST_DIR = path.join(__dirname, "dist");
        var isProd = process.env.MODE === "production";
        pages = ["draw", "varnmala", "canvas", "about", "reader", "hindi", "panel", "typing", "record","color"];
        var entryObject = pages.reduce(function (p, n) {
          return Object.assign(p, _defineProperty({}, n, ["./src/scripts/".concat(n, ".js"), "./src/styles/".concat(n, ".css")]));
        }, {});
        module.exports = _objectSpread({
          entry: _objectSpread({
            index: ["./src/index.js"],
            server: ["./src/server/server.js"]
          }, entryObject),
          performance: {
            hints: "warning"
          },
          devServer: {
            port: 8080,
            hot: "only",
            "static": {
              directory: path.join(__dirname, "src"),
              serveIndex: true
            }
          },
          output: {
            path: DIST_DIR,
            publicPath: "/",
            filename: "scripts/[name].js",
            chunkFilename: "scripts/[name].js",
            assetModuleFilename: "assets/[hash][ext][query]",
            clean: true
          },
          mode: process.env.MODE || "none",
          target: "node",
          node: {
            __dirname: false,
            __filename: false
          },
          externals: [nodeExternals()],
          devtool: isProd ? "source-map" : "eval-source-map",
          plugins: plugins,
          module: modules,
          resolve: {
            extensions: [".html", ".js", ".json", ".css"]
          }
        }, isProd && {
          optimization: {
            minimizer: [new CssMinimizerPlugin()]
          }
        });

        /***/
      }),

/***/ 1:
/***/ ((module) => {

        "use strict";
        module.exports = require("copy-webpack-plugin");

        /***/
      }),

/***/ 471:
/***/ ((module) => {

        "use strict";
        module.exports = require("css-minimizer-webpack-plugin");

        /***/
      }),

/***/ 142:
/***/ ((module) => {

        "use strict";
        module.exports = require("dotenv");

        /***/
      }),

/***/ 582:
/***/ ((module) => {

        "use strict";
        module.exports = require("eslint-webpack-plugin");

        /***/
      }),

/***/ 510:
/***/ ((module) => {

        "use strict";
        module.exports = require("html-webpack-plugin");

        /***/
      }),

/***/ 857:
/***/ ((module) => {

        "use strict";
        module.exports = require("mini-css-extract-plugin");

        /***/
      }),

/***/ 423:
/***/ ((module) => {

        "use strict";
        module.exports = require("path");

        /***/
      }),

/***/ 354:
/***/ ((module) => {

        "use strict";
        module.exports = require("webpack");

        /***/
      }),

/***/ 977:
/***/ ((module) => {

        "use strict";
        module.exports = require("webpack-node-externals");

        /***/
      })

    /******/
  });
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function (handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
      /******/
    } catch (e) {
/******/ 			module.error = e;
/******/ 			throw e;
      /******/
    }
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
      /******/
    };
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
      /******/
    };
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
      /******/
    };
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("server." + __webpack_require__.h() + ".hot-update.json");
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("dd1fa4f820088d892f61")
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
    /******/
  });
/******/
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
              /******/
            }
            /******/
          } else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
            /******/
          }
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
            /******/
          }
          /******/
        } else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/);
/******/ 					currentParents = [];
          /******/
        }
/******/ 				return require(request);
        /******/
      };
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
            /******/
          },
/******/ 					set: function (value) {
/******/ 						require[name] = value;
            /******/
          }
          /******/
        };
        /******/
      };
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
          /******/
        }
        /******/
      }
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
        /******/
      };
/******/ 			return fn;
      /******/
    }
/******/
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
          /******/
        },
/******/
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () { };
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
              /******/
            }
            /******/
          } else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () { };
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
            /******/
          }
          /******/
        },
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
          /******/
        },
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
          /******/
        },
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
          /******/
        },
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
          /******/
        },
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/);
          /******/
        });
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/);
          /******/
        });
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
            /******/
          }
          /******/
        },
/******/
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
          /******/
        },
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
          /******/
        },
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
          /******/
        },
/******/
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
        /******/
      };
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
      /******/
    }
/******/
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/
/******/ 			return Promise.all(results);
      /******/
    }
/******/
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
          /******/
        }
        /******/
      }
      /******/
    });
        /******/
      }
      /******/
    }
/******/
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
        /******/
      }
      /******/
    }
/******/
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
      /******/
    });
      /******/
    });
      /******/
    }
/******/
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
        /******/
      }
/******/ 			return setStatus("check")
/******/.then(__webpack_require__.hmrM)
/******/.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
          /******/
        }
/******/);
          /******/
        }
/******/
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/);
/******/ 								return promises;
          /******/
        },
/******/[])
/******/).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
            /******/
          } else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
            /******/
          });
            /******/
          }
          /******/
        });
          /******/
        });
          /******/
        });
        /******/
      });
      /******/
    }
/******/
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/);
      /******/
    });
        /******/
      }
/******/ 			return internalApply(options);
      /******/
    }
/******/
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/
/******/ 			applyInvalidatedModules();
/******/
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
      /******/
    });
/******/ 			currentUpdateApplyHandlers = undefined;
/******/
/******/ 			var errors = results
/******/.map(function (r) {
/******/ 					return r.error;
      /******/
    })
/******/.filter(Boolean);
/******/
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
      /******/
    });
        /******/
      }
/******/
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
        /******/
      });
/******/
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
        /******/
      };
/******/
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
              /******/
            }
            /******/
          }
          /******/
        }
        /******/
      });
/******/
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
        /******/
      });
          /******/
        }
/******/
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
          /******/
        });
/******/ 						return list;
          /******/
        });
          /******/
        }
/******/
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
          /******/
        });
        /******/
      });
      /******/
    }
/******/
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/);
      /******/
    });
      /******/
    });
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
        /******/
      }
      /******/
    }
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
          /******/
        } else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
          /******/
        }
        /******/
      }
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
        /******/
      } else {
/******/ 				document.head.appendChild(linkTag);
        /******/
      }
/******/ 			return linkTag;
      /******/
    };
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for (var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
        /******/
      }
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for (var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if (dataHref === href || dataHref === fullhref) return tag;
        /******/
      }
      /******/
    };
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if (findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
      /******/
    });
      /******/
    }
/******/ 		// no chunk loading
/******/
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return {
        dispose: () => {
/******/ 				for (var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if (oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
            /******/
          }
/******/ 				oldTags.length = 0;
          /******/
        }, apply: () => {
/******/ 				for (var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
          /******/
        }
      };
      /******/
    }
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if (!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
      /******/
    }, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
      /******/
    }));
      /******/
    });
      /******/
    }
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			377: 1
      /******/
    };
/******/
/******/ 		// no on chunks loaded
/******/
/******/ 		// no chunk install function needed
/******/
/******/ 		// no chunk loading
/******/
/******/ 		// no external install chunk
/******/
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("../" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for (var moduleId in updatedModules) {
/******/ 				if (__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if (updatedModulesList) updatedModulesList.push(moduleId);
          /******/
        }
        /******/
      }
/******/ 			if (runtime) currentUpdateRuntime.push(runtime);
      /******/
    }
/******/
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
        /******/
      };
      /******/
    });
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
              /******/
            };
            /******/
          }
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
              /******/
            };
            /******/
          }
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
                /******/
              };
              /******/
            }
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
              /******/
            }
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
              /******/
            });
            /******/
          }
          /******/
        }
/******/
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
          /******/
        };
        /******/
      }
/******/
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
          /******/
        }
        /******/
      }
/******/
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/);
        /******/
      };
/******/
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
            /******/
          } else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
              /******/
            };
            /******/
          }
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
            /******/
          }
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
            /******/
          }
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
              /******/
            };
            /******/
          }
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/);
                /******/
              }
              /******/
            }
            /******/
          }
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
            /******/
          }
          /******/
        }
        /******/
      }
/******/ 			currentUpdate = undefined;
/******/
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ !module.hot._selfInvalidated
/******/) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
        /******/
      });
          /******/
        }
        /******/
      }
/******/
/******/ 			var moduleOutdatedDependencies;
/******/
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
        /******/
      });
/******/ 					currentUpdateRemovedChunks = undefined;
/******/
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/
/******/ 						var data = {};
/******/
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
              /******/
            }
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
                /******/
              }
              /******/
            }
            /******/
          }
/******/
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
        },
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
              /******/
            }
            /******/
          }
/******/
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
            /******/
          }
/******/
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
                    /******/
                  }
                  /******/
                }
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
                    /******/
                  } catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
                    /******/
                  });
                        /******/
                      } catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
                        /******/
                      });
                          /******/
                        }
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
                          /******/
                        }
                        /******/
                      }
                      /******/
                    } else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
                      /******/
                    });
                        /******/
                      }
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
                        /******/
                      }
                      /******/
                    }
                    /******/
                  }
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
/******/
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
              /******/
            } catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
              /******/
            });
                  /******/
                } catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
                  /******/
                });
                    /******/
                  }
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
                    /******/
                  }
                  /******/
                }
                /******/
              } else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
                /******/
              });
                  /******/
                }
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
/******/
/******/ 					return outdatedModules;
          /******/
        }
        /******/
      };
      /******/
    }
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
        /******/
      }
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        /******/
      }
      /******/
    };
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
      /******/
    }, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
        /******/
      } else {
/******/ 					currentUpdateChunks[chunkId] = false;
        /******/
      }
      /******/
    });
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ !currentUpdateChunks[chunkId]
/******/) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
            /******/
          }
          /******/
        };
        /******/
      }
      /******/
    };
/******/
/******/ 		__webpack_require__.hmrM = function () {
/******/ 			return Promise.resolve().then(function () {
/******/ 				return require("../" + __webpack_require__.hmrF());
      /******/
    })['catch'](function (err) { if (err.code !== 'MODULE_NOT_FOUND') throw err; });
      /******/
    }
    /******/
  })();
/******/
/************************************************************************/
/******/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(845);
  /******/
  /******/
})()
  ;
//# sourceMappingURL=server.js.map