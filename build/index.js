/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chromium.ts":
/*!*************************!*\
  !*** ./src/chromium.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.Chromium = void 0;\nvar crypto_1 = __webpack_require__(/*! crypto */ \"crypto\");\nvar puppeteer = __webpack_require__(/*! puppeteer */ \"puppeteer\");\nvar os = __webpack_require__(/*! os */ \"os\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar webpage_1 = __webpack_require__(/*! ./webpage */ \"./src/webpage.ts\");\n/**\n * Chromium Class\n *\n * @class Chromium\n * @description This class wraps the functionality of Chromium\n */\nvar Chromium = /** @class */ (function () {\n    function Chromium(logFunction) {\n        if (logFunction === void 0) { logFunction = function () {\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            console.log.apply(console, args);\n        }; }\n        this._log = logFunction;\n    }\n    Chromium.prototype.start = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        // Start up chrome and open a browser tab\n                        _a = this;\n                        return [4 /*yield*/, puppeteer.launch({\n                                headless: true\n                            })];\n                    case 1:\n                        // Start up chrome and open a browser tab\n                        _a._browser = _b.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Chromium.prototype.getPdf = function (url, options) {\n        return __awaiter(this, void 0, void 0, function () {\n            var webPage, pdf;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        webPage = new webpage_1.WebPage(this._browser);\n                        return [4 /*yield*/, webPage.go(url)];\n                    case 1: return [4 /*yield*/, (_a.sent()).pdf(options)];\n                    case 2:\n                        pdf = _a.sent();\n                        return [4 /*yield*/, webPage.page.close()];\n                    case 3:\n                        _a.sent();\n                        return [2 /*return*/, pdf];\n                }\n            });\n        });\n    };\n    Chromium.prototype.getImage = function (url, options) {\n        return __awaiter(this, void 0, void 0, function () {\n            var webPage, jpeg;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        webPage = new webpage_1.WebPage(this._browser);\n                        return [4 /*yield*/, webPage.go(url)];\n                    case 1: return [4 /*yield*/, (_a.sent()).screenshot(options)];\n                    case 2:\n                        jpeg = _a.sent();\n                        return [4 /*yield*/, webPage.page.close()];\n                    case 3:\n                        _a.sent();\n                        return [2 /*return*/, jpeg];\n                }\n            });\n        });\n    };\n    Chromium.prototype.stop = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this._browser.close()];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    /**\n     * Respond to a request for a file\n     *\n     * @param promise - A promise that should resolve to a buffer containing the file contents\n     * @param response - The response object to use in order to return the response\n     * @param contentType - The MIME type of the response\n     * @param filename - The filename of the response\n     * @param cleanup - A function that is always run after success or failure\n     */\n    Chromium.prototype.fileResponse = function (promise, response, contentType, filename, cleanup) {\n        if (cleanup === void 0) { cleanup = function () { }; }\n        promise\n            .then(function (buffer) {\n            response.status(200);\n            response.setHeader(\"Content-disposition\", \"attachment; filename=\".concat(filename));\n            response.setHeader(\"Content-type\", contentType);\n            response.send(buffer);\n        })[\"catch\"](function (error) {\n            response.status(400);\n            response.send({\n                error: error.message\n            });\n        })[\"finally\"](cleanup);\n    };\n    /**\n     * Parse a reqquest to generate a file from a given URL\n     * This request should have a JSON body\n     *\n     * @param request\n     * @param callback\n     */\n    Chromium.prototype.parseUrlRequest = function (request, callback) {\n        var body = request.body.url ? request.body : request.query;\n        callback(body);\n    };\n    /**\n     * Parse a request to generate a file from an uploaded\n     * file. This request should have URL-encoded mutlipart form\n     * @param request\n     * @param callback\n     * @param failure\n     */\n    Chromium.prototype.parseFileRequest = function (request, callback, failure) {\n        var params = request.params;\n        var tempDirectory = os.tmpdir();\n        var filename = path.join(tempDirectory, \"\".concat((0, crypto_1.randomUUID)(), \".html\"));\n    };\n    /**\n     * This function is called from express to return a PDF\n     * from a given json body (url mode)\n     * @param request\n     * @param response\n     */\n    Chromium.prototype.pdfUrlRequest = function (request, response) {\n        var _this = this;\n        this.parseUrlRequest(request, function (body) {\n            var url = body.url, _a = body.options, options = _a === void 0 ? {} : _a, _b = body.filename, filename = _b === void 0 ? null : _b;\n            _this.fileResponse(_this.getPdf(url, options), response, \"application/pdf\", filename !== null && filename !== void 0 ? filename : \"\".concat((0, crypto_1.randomUUID)(), \".pdf\"));\n        });\n    };\n    /**\n     * This function is called from express to return a JPEG\n     * from a given json body (url mode)\n     * @param request\n     * @param response\n     */\n    Chromium.prototype.imageUrlRequest = function (request, response) {\n        var _this = this;\n        this.parseUrlRequest(request, function (body) {\n            var url = body.url, _a = body.options, options = _a === void 0 ? {} : _a, _b = body.filename, filename = _b === void 0 ? null : _b;\n            var _c = options.type, type = _c === void 0 ? \"jpeg\" : _c;\n            _this.fileResponse(_this.getImage(url, options), response, \"image/\".concat(type), filename !== null && filename !== void 0 ? filename : \"\".concat((0, crypto_1.randomUUID)(), \".\").concat(type));\n        });\n    };\n    Chromium.prototype.pdfFromFile = function (request, response) {\n        var _a = request.params.options, options = _a === void 0 ? {} : _a;\n        var tempDirectory = os.tmpdir();\n        var filename = path.join(tempDirectory, \"randomUUID()}.html\");\n        if (!request.files || !request.files.file) {\n            response.status(400);\n            response.send({\n                error: \"No file given\"\n            });\n        }\n        else {\n            var file = request.files.file;\n            file.mv(filename);\n            console.log(\"\".concat(filename, \" created\"));\n            this.getPdf(\"file://\".concat(filename), options)\n                .then(function (buffer) {\n                response.status(200);\n                response.setHeader(\"Content-disposition\", \"attachment; filename=\".concat((0, crypto_1.randomUUID)(), \".pdf\"));\n                response.setHeader(\"Content-type\", \"application/pdf\");\n                response.send(buffer);\n            })[\"catch\"](function (error) {\n                response.status(400);\n                response.send({\n                    error: error.message\n                });\n            })[\"finally\"](function () {\n                fs.unlink(filename, function (err) {\n                    if (err) {\n                        throw err;\n                    }\n                    console.log(\"\".concat(filename, \" deleted\"));\n                });\n            });\n        }\n    };\n    return Chromium;\n}());\nexports.Chromium = Chromium;\nexports[\"default\"] = Chromium;\n\n\n//# sourceURL=webpack://chromium-headless-pdf/./src/chromium.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar fileUpload = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes.ts\");\nvar chromium_1 = __webpack_require__(/*! ./chromium */ \"./src/chromium.ts\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar chromium = new chromium_1[\"default\"](function () {\n    var args = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        args[_i] = arguments[_i];\n    }\n    console.log.apply(console, __spreadArray([\"CHROMIUM::\"], args, false));\n});\nvar app = express();\napp.use(fileUpload({ createParentPath: true }));\napp.use(bodyParser.urlencoded({ extended: true }));\napp.use(bodyParser.json());\napp.use(bodyParser.raw());\napp.set(\"chromium\", chromium);\napp.set(\"page\", function (page) { return path.join(__dirname, \"..\", \"src\", 'pages', page); });\n(0, routes_1[\"default\"])(app);\nif (__webpack_require__.c[__webpack_require__.s] === module) {\n    chromium.start();\n    var _a = process.env.PORT, PORT_1 = _a === void 0 ? 3000 : _a;\n    var server_1 = app.listen(PORT_1, function () {\n        console.log(\"Server started on port \".concat(PORT_1));\n    });\n    var safeShutdown = function (signal) {\n        console.log(\"\".concat(signal, \" recieved, Shutting down...\"));\n        server_1.close(function () {\n            chromium.stop().then(function () {\n                console.log(\"Shutdown completed.\");\n            });\n        });\n    };\n    process.on(\"SIGTERM\", safeShutdown);\n}\nexports[\"default\"] = app;\n\n\n//# sourceURL=webpack://chromium-headless-pdf/./src/index.ts?");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.registerRoutes = void 0;\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\nvar registerRoutes = function (app) {\n    var chromium = app.get(\"chromium\");\n    var page = app.get(\"page\");\n    app.get(\"/\", function (req, res) {\n        res.sendFile(page(\"get-url.html\"));\n    });\n    app.get(\"/script-test\", function (req, res) {\n        res.send('<html><body><div id=\"out\">This is some text</div><script>console.log(\"Testing script\"); var el = document.getElementById(\"out\"); el.innerHTML = \"This text has been altered!\";</script></body></html>');\n    });\n    app.get(\"/test-pdf\", function (req, res) {\n        res.sendFile(page(\"test-pdf.html\"));\n    });\n    app.get(\"/pdf/url\", function (request, response) { return chromium.pdfUrlRequest(request, response); });\n    app.post(\"/pdf/url\", function (request, response) { return chromium.pdfUrlRequest(request, response); });\n    app.get(\"/image/url\", function (request, response) { return chromium.imageUrlRequest(request, response); });\n    app.post(\"/image/url\", function (request, response) { return chromium.imageUrlRequest(request, response); });\n};\nexports.registerRoutes = registerRoutes;\nexports[\"default\"] = exports.registerRoutes;\n\n\n//# sourceURL=webpack://chromium-headless-pdf/./src/routes.ts?");

/***/ }),

/***/ "./src/webpage.ts":
/*!************************!*\
  !*** ./src/webpage.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nexports.__esModule = true;\nexports.WebPage = void 0;\n;\nfunction cleanScreenshotOptions(options) {\n    var defaultOptions = {\n        captureBeyondViewport: false,\n        encoding: \"binary\",\n        fullPage: false,\n        omitBackground: false,\n        quality: 100,\n        type: \"jpeg\"\n    };\n    return Object.assign({}, defaultOptions, options);\n}\nvar cleanPdfOptions = function (options) {\n    var defaultOptions = {\n        scale: 1,\n        printBackground: true,\n        margin: {\n            top: 0,\n            bottom: 0,\n            left: 0,\n            right: 0\n        },\n        preferCSSPageSize: true,\n        landscape: false,\n        format: \"A4\"\n    };\n    if (options.landscape &&\n        (options.landscape === \"true\" ||\n            options.landscape === true ||\n            options.landscape === 1 ||\n            options.landscape === \"1\")) {\n        options.landscape = true;\n    }\n    else {\n        options.landscape = false;\n    }\n    return Object.assign({}, defaultOptions, options);\n};\nvar WebPage = /** @class */ (function () {\n    function WebPage(browser) {\n        this.browser = browser;\n        this.settings = {\n            enableJavaScript: false,\n            allowRequests: [\"document\", \"stylesheet\", \"image\", \"font\"],\n            urlRegex: /^((https?|file):\\/\\/|data:image\\/.+;base64,)(.+)(\\?(.+))?$/\n        };\n    }\n    /**\n     * This initialises our web page, including safety mechanisms to prevent script\n     * execution and so forth\n     * @returns Promise\n     */\n    WebPage.prototype.init = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a;\n            var _this = this;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _a = this;\n                        return [4 /*yield*/, this.browser.newPage()];\n                    case 1:\n                        _a.page = _b.sent();\n                        return [4 /*yield*/, this.page.setJavaScriptEnabled(this.settings.enableJavaScript)];\n                    case 2:\n                        _b.sent();\n                        return [4 /*yield*/, this.page.setRequestInterception(true)];\n                    case 3:\n                        _b.sent();\n                        this.page.on(\"request\", function (request) {\n                            var type = request.resourceType();\n                            var url = request.url();\n                            if (_this.settings.urlRegex.test(url)) {\n                                if (_this.settings.allowRequests.includes(type)) {\n                                    console.log(\"Chromium allowed resource type \".concat(type, \" to url \").concat(url));\n                                    request[\"continue\"]();\n                                }\n                                else {\n                                    console.log(\"Chromium denied resource type \".concat(type, \" to url (\").concat(url));\n                                    request.abort();\n                                }\n                            }\n                            else {\n                                console.log(\"Chromium denied url \".concat(url, \" (resource type \").concat(type, \")\"));\n                                request.abort();\n                            }\n                        });\n                        return [2 /*return*/, this];\n                }\n            });\n        });\n    };\n    WebPage.prototype.go = function (url) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (!!this.page) return [3 /*break*/, 2];\n                        return [4 /*yield*/, this.init()];\n                    case 1:\n                        _a.sent();\n                        _a.label = 2;\n                    case 2: \n                    // Navigate to the given URL\n                    return [4 /*yield*/, this.page.goto(url, {\n                            waitUntil: \"networkidle2\"\n                        })];\n                    case 3:\n                        // Navigate to the given URL\n                        _a.sent();\n                        if (!this.onLoad) return [3 /*break*/, 7];\n                        return [4 /*yield*/, this.page.setBypassCSP(true)];\n                    case 4:\n                        _a.sent();\n                        return [4 /*yield*/, this.onLoad(this.page)];\n                    case 5:\n                        _a.sent();\n                        return [4 /*yield*/, this.page.setBypassCSP(false)];\n                    case 6:\n                        _a.sent();\n                        _a.label = 7;\n                    case 7: return [2 /*return*/, this];\n                }\n            });\n        });\n    };\n    WebPage.prototype.pdf = function (options) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.page.pdf(cleanPdfOptions(options))];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    WebPage.prototype.screenshot = function (imageOptions) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a, width, _b, height, options;\n            return __generator(this, function (_c) {\n                switch (_c.label) {\n                    case 0:\n                        _a = imageOptions.width, width = _a === void 0 ? 1920 : _a, _b = imageOptions.height, height = _b === void 0 ? 1080 : _b, options = __rest(imageOptions, [\"width\", \"height\"]);\n                        this.page.setViewport({\n                            width: width,\n                            height: height\n                        });\n                        return [4 /*yield*/, this.page.screenshot(cleanScreenshotOptions(options))];\n                    case 1: return [2 /*return*/, _c.sent()];\n                }\n            });\n        });\n    };\n    return WebPage;\n}());\nexports.WebPage = WebPage;\n\n\n//# sourceURL=webpack://chromium-headless-pdf/./src/webpage.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-fileupload");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ 	
/******/ })()
;