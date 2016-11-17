/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Couldn't find preset \\\"es2015?presets[]=react,presets[]=es2015\\\" relative to directory \\\"E:\\\\\\\\work\\\\\\\\koa2-start-cn\\\\\\\\app\\\"\\n    at E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:299:19\\n    at Array.map (native)\\n    at OptionManager.resolvePresets (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:270:20)\\n    at OptionManager.mergePresets (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:259:10)\\n    at OptionManager.mergeOptions (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:244:14)\\n    at OptionManager.init (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:374:12)\\n    at File.initOptions (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:216:65)\\n    at new File (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:139:24)\\n    at Pipeline.transform (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\pipeline.js:46:16)\\n    at transpile (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-loader\\\\index.js:38:20)\\n    at Object.module.exports (E:\\\\work\\\\koa2-start-cn\\\\node_modules\\\\babel-loader\\\\index.js:131:12)\");\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/app.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(0);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi app\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_app?");

/***/ }
/******/ ]);