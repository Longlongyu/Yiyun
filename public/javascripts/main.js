/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/banner.js":
/*!**************************!*\
  !*** ./src/js/banner.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction automatic(banner, tab, max, ms) {\n  var f1 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';\n  var f2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : f1;\n\n  var index = 0;\n  var ainterval;\n  $(tab + ':eq(0)').addClass(\"Selected\");\n  function f() {\n    index++;\n    if (index > max) {\n      index = 0;\n    }\n    f1(banner, tab, index);\n    $(tab).removeClass(\"Selected\");\n    $(tab + \":eq(\" + index + \")\").addClass(\"Selected\");\n  }\n  $(tab).click(function () {\n    index = $(this).index(tab);\n    clearInterval(ainterval);\n    f2(banner, tab, index);\n    $(tab).removeClass(\"Selected\");\n    $(tab + \":eq(\" + index + \")\").addClass(\"Selected\");\n    ainterval = setInterval(f, ms);\n  });\n  ainterval = setInterval(f, ms);\n}\n\nvar banner = function banner() {\n  automatic(\"#banner>.imgbox-index>img\", \"#banner-tab>.tab>div\", 3, 8000, function (banner, tab, index) {\n    $(banner).css(\"opacity\", 0);\n    $(banner + \":eq(\" + index + \")\").css(\"opacity\", 1);\n  });\n};\n\nexports.default = banner;\n\n//# sourceURL=webpack:///./src/js/banner.js?");

/***/ }),

/***/ "./src/js/click.js":
/*!*************************!*\
  !*** ./src/js/click.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Click = function Click() {\n  //登录注册面板\n  //显示\n  $(\"#nav-signup\").click(function () {\n    $(\".signup\").removeClass(\"rotateY\").css(\"display\", \"flex\");\n    $(\"#CoverPanel\").css(\"display\", \"flex\");\n    setTimeout(function () {\n      $(\".signup\").addClass(\"rotateY\");\n    }, 0);\n  });\n  $(\"#nav-signin\").click(function () {\n    $(\".signin\").removeClass(\"rotateY\").css(\"display\", \"flex\");\n    $(\"#CoverPanel\").css(\"display\", \"flex\");\n    setTimeout(function () {\n      $(\".signin\").addClass(\"rotateY\");\n    }, 0);\n  });\n  //关闭\n  $(\".close\").click(function () {\n    $(this).parents(\".SignPanel\").hide().parent(\"#CoverPanel\").hide();\n  });\n  //切换\n  $(\".Switch\").click(function () {\n    var panel = $(this).parents(\".SignPanel\").removeClass(\"rotateY\").hide().siblings(\".SignPanel\").css(\"display\", \"flex\");\n    setTimeout(function () {\n      panel.addClass(\"rotateY\");\n    }, 0);\n  });\n  //焦点阴影\n  $(\".text\").focus(function () {\n    $(this).parent().css(\"box-shadow\", \"0 0 10px rgba(0,0,0,0.8)\");\n  });\n  $(\".text\").focusout(function () {\n    $(this).parent().css(\"box-shadow\", \"none\");\n  });\n};\n\nexports.default = Click;\n\n//# sourceURL=webpack:///./src/js/click.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _scroll = __webpack_require__(/*! ./scroll */ \"./src/js/scroll.js\");\n\nvar _scroll2 = _interopRequireDefault(_scroll);\n\nvar _click = __webpack_require__(/*! ./click */ \"./src/js/click.js\");\n\nvar _click2 = _interopRequireDefault(_click);\n\nvar _banner = __webpack_require__(/*! ./banner */ \"./src/js/banner.js\");\n\nvar _banner2 = _interopRequireDefault(_banner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n$(\"img\").lazyload({ effect: \"fadeIn\" });\n\n// 事件加载\n(0, _scroll2.default)();\n(0, _click2.default)();\n(0, _banner2.default)();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Scroll = function Scroll() {\n  function scrollDisplay(scrolltop) {\n    var f1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n    var f2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : f1;\n\n    var top = $(document).scrollTop();\n    if (top >= scrolltop) {\n      f1();\n    } else {\n      f2();\n    }\n  }\n\n  $(window).scroll(function () {\n    scrollDisplay($(\"header\").height(), function () {\n      if ($(\"#nav\").hasClass(\"nav-style-one\")) {\n        $(\"#nav\").removeClass(\"nav-style-one\");\n        $(\"#nav\").addClass(\"nav-style-two\");\n      }\n      $(\".Stick\").css(\"display\", \"block\");\n    }, function () {\n      if ($(\"#nav\").hasClass(\"nav-style-two\")) {\n        $(\"#nav\").removeClass(\"nav-style-two\");\n        $(\"#nav\").addClass(\"nav-style-one\");\n      }\n      $(\".Stick\").css(\"display\", \"none\");\n    });\n  });\n};\n\nexports.default = Scroll;\n\n//# sourceURL=webpack:///./src/js/scroll.js?");

/***/ })

/******/ });