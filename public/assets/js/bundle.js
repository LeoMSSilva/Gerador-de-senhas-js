/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/formVariables.js":
/*!**************************************!*\
  !*** ./src/modules/formVariables.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "lowercase": () => (/* binding */ lowercase),
/* harmony export */   "number": () => (/* binding */ number),
/* harmony export */   "result": () => (/* binding */ result),
/* harmony export */   "size": () => (/* binding */ size),
/* harmony export */   "symbol": () => (/* binding */ symbol),
/* harmony export */   "uppercase": () => (/* binding */ uppercase)
/* harmony export */ });
var size = document.querySelector('#size');
var number = document.querySelector('#number');
var uppercase = document.querySelector('#uppercase');
var lowercase = document.querySelector('#lowercase');
var symbol = document.querySelector('#symbol');
var button = document.querySelector('#generate');
var result = document.querySelector('#result');


/***/ }),

/***/ "./src/modules/generatePasswordForm.js":
/*!*********************************************!*\
  !*** ./src/modules/generatePasswordForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formVariables */ "./src/modules/formVariables.js");
/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generators */ "./src/modules/generators.js");


var messageSize = 'Marque um tamanho válido para poder gerar senha!';
var messageOptions = 'Todas as opções estão desmarcadas!\nÉ preciso marcar pelo menos uma opção!';

var print = function print(message) {
  _formVariables__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = message;
};

var validation = function validation() {
  if (_formVariables__WEBPACK_IMPORTED_MODULE_0__.size.value === '' || !(_formVariables__WEBPACK_IMPORTED_MODULE_0__.size.value > 0)) {
    alert(messageSize);
    return false;
  }

  if (!_formVariables__WEBPACK_IMPORTED_MODULE_0__.number.checked && !_formVariables__WEBPACK_IMPORTED_MODULE_0__.uppercase.checked && !_formVariables__WEBPACK_IMPORTED_MODULE_0__.lowercase.checked && !_formVariables__WEBPACK_IMPORTED_MODULE_0__.symbol.checked) {
    alert(messageOptions);
    return false;
  }

  return true;
};

var generatePassword = function generatePassword() {
  var generatedPassword = (0,_generators__WEBPACK_IMPORTED_MODULE_1__["default"])(_formVariables__WEBPACK_IMPORTED_MODULE_0__.size.value, _formVariables__WEBPACK_IMPORTED_MODULE_0__.number.checked, _formVariables__WEBPACK_IMPORTED_MODULE_0__.uppercase.checked, _formVariables__WEBPACK_IMPORTED_MODULE_0__.lowercase.checked, _formVariables__WEBPACK_IMPORTED_MODULE_0__.symbol.checked);
  print(generatedPassword);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  _formVariables__WEBPACK_IMPORTED_MODULE_0__.button.addEventListener('click', function (e) {
    e.preventDefault();
    var valid = validation();
    valid && generatePassword();
  });
});

/***/ }),

/***/ "./src/modules/generators.js":
/*!***********************************!*\
  !*** ./src/modules/generators.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var symbols = '\'"!@#$%&*()-_¬¢£+=§`´[]{}ªº^~/?°;:>.<,|\\';
symbols.split;

var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var generateNumber = function generateNumber() {
  return String(random(0, 10));
};

var generateUppercase = function generateUppercase() {
  return String.fromCharCode(random(65, 91));
};

var generateLowercase = function generateLowercase() {
  return String.fromCharCode(random(97, 122));
};

var generateSymbol = function generateSymbol() {
  return symbols[random(0, symbols.length)];
};

var generatePassword = function generatePassword(size, optionFunction) {
  var newPassword = [];

  while (size > newPassword.length) {
    var position = random(0, optionFunction.length);
    var createdCharacter = optionFunction[position]();
    newPassword.push(createdCharacter);
  }

  return newPassword.join('');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (size, number, uppercase, lowercase, symbol) {
  var optionFunction = [];
  number && optionFunction.push(generateNumber);
  uppercase && optionFunction.push(generateUppercase);
  lowercase && optionFunction.push(generateLowercase);
  symbol && optionFunction.push(generateSymbol);
  var newPassword = generatePassword(size, optionFunction);
  return newPassword;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--white: #ffffff;\n\t--primary-color: #113366;\n\t--second-color: #2c7cf3;\n\t--disable-color: #a1b6d3;\n}\n\n* {\n\toutline: 0;\n\tfont-family: 'Open sans', sans-serif;\n\tfont-weight: bold;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-transform: uppercase;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tbackground-color: var(--primary-color);\n}\n\n.container {\n\tline-height: 1.8rem;\n\tfont-size: 1.3em;\n\tmax-width: 30rem;\n\tmax-height: 40rem;\n\tmargin: 6rem auto;\n\tpadding: 2rem 0rem 1rem;\n\tborder-radius: 1.5rem;\n\tborder: solid 1px var(--white);\n}\n\nform {\n\ttext-align: left;\n\tmargin: 0 3rem;\n\tcolor: var(--white);\n\tvertical-align: middle;\n}\n\ninput {\n\twidth: 1rem;\n\theight: 1rem;\n\tborder-radius: 0.5rem;\n\tborder: 1px solid var(--white);\n}\n\ninput[type='number'] {\n\twidth: 2.8rem;\n\theight: 1.8rem;\n\tcolor: var(--white);\n\tbackground-color: var(--primary-color);\n\tline-height: 1em;\n\tfont-size: 0.8em;\n}\n\nh1 {\n\tpadding: 0.55rem 0rem 0rem;\n\tmargin: 0.2rem 0 1rem;\n}\n\nh1,\nh2,\nbutton {\n\tbackground-color: var(--white);\n\tcolor: var(--primary-color);\n\theight: 3rem;\n}\n\nbutton {\n\twidth: 9rem;\n\tfont-size: 1.2em;\n\tborder-radius: 20rem;\n\tborder: none;\n\tcursor: pointer;\n\tmargin: 1rem 7.9rem 0.1rem;\n}\n\nbutton:hover {\n\tbackground-color: var(--second-color);\n\tcolor: var(--white);\n}\n\n#result {\n\tbackground-color: var(--primary-color);\n\tcolor: var(--white);\n\tmax-height: 30rem;\n\tword-wrap: break-word;\n\tmargin: 2rem auto;\n\ttext-transform: none;\n}\n\n@media only screen and (max-width: 768px) {\n\t.container {\n\t\tline-height: 1.9em;\n\t\tfont-size: 1.2em;\n\t}\n}\n@media only screen and (max-width: 576px) {\n\tbody {\n\t\tpadding: 1rem 0.3rem;\n\t}\n\t.container {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\tline-height: 2em;\n\t\tfont-size: 1.16em;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AACA;CACC,gBAAgB;CAChB,wBAAwB;CACxB,uBAAuB;CACvB,wBAAwB;AACzB;;AAEA;CACC,UAAU;CACV,oCAAoC;CACpC,iBAAiB;CACjB,kBAAkB;CAClB,sBAAsB;CACtB,yBAAyB;CACzB,SAAS;CACT,UAAU;AACX;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,gBAAgB;CAChB,iBAAiB;CACjB,iBAAiB;CACjB,uBAAuB;CACvB,qBAAqB;CACrB,8BAA8B;AAC/B;;AAEA;CACC,gBAAgB;CAChB,cAAc;CACd,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,qBAAqB;CACrB,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,cAAc;CACd,mBAAmB;CACnB,sCAAsC;CACtC,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,0BAA0B;CAC1B,qBAAqB;AACtB;;AAEA;;;CAGC,8BAA8B;CAC9B,2BAA2B;CAC3B,YAAY;AACb;;AAEA;CACC,WAAW;CACX,gBAAgB;CAChB,oBAAoB;CACpB,YAAY;CACZ,eAAe;CACf,0BAA0B;AAC3B;;AAEA;CACC,qCAAqC;CACrC,mBAAmB;AACpB;;AAEA;CACC,sCAAsC;CACtC,mBAAmB;CACnB,iBAAiB;CACjB,qBAAqB;CACrB,iBAAiB;CACjB,oBAAoB;AACrB;;AAEA;CACC;EACC,kBAAkB;EAClB,gBAAgB;CACjB;AACD;AACA;CACC;EACC,oBAAoB;CACrB;CACA;EACC,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;CAClB;AACD","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n\t--white: #ffffff;\n\t--primary-color: #113366;\n\t--second-color: #2c7cf3;\n\t--disable-color: #a1b6d3;\n}\n\n* {\n\toutline: 0;\n\tfont-family: 'Open sans', sans-serif;\n\tfont-weight: bold;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\ttext-transform: uppercase;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tbackground-color: var(--primary-color);\n}\n\n.container {\n\tline-height: 1.8rem;\n\tfont-size: 1.3em;\n\tmax-width: 30rem;\n\tmax-height: 40rem;\n\tmargin: 6rem auto;\n\tpadding: 2rem 0rem 1rem;\n\tborder-radius: 1.5rem;\n\tborder: solid 1px var(--white);\n}\n\nform {\n\ttext-align: left;\n\tmargin: 0 3rem;\n\tcolor: var(--white);\n\tvertical-align: middle;\n}\n\ninput {\n\twidth: 1rem;\n\theight: 1rem;\n\tborder-radius: 0.5rem;\n\tborder: 1px solid var(--white);\n}\n\ninput[type='number'] {\n\twidth: 2.8rem;\n\theight: 1.8rem;\n\tcolor: var(--white);\n\tbackground-color: var(--primary-color);\n\tline-height: 1em;\n\tfont-size: 0.8em;\n}\n\nh1 {\n\tpadding: 0.55rem 0rem 0rem;\n\tmargin: 0.2rem 0 1rem;\n}\n\nh1,\nh2,\nbutton {\n\tbackground-color: var(--white);\n\tcolor: var(--primary-color);\n\theight: 3rem;\n}\n\nbutton {\n\twidth: 9rem;\n\tfont-size: 1.2em;\n\tborder-radius: 20rem;\n\tborder: none;\n\tcursor: pointer;\n\tmargin: 1rem 7.9rem 0.1rem;\n}\n\nbutton:hover {\n\tbackground-color: var(--second-color);\n\tcolor: var(--white);\n}\n\n#result {\n\tbackground-color: var(--primary-color);\n\tcolor: var(--white);\n\tmax-height: 30rem;\n\tword-wrap: break-word;\n\tmargin: 2rem auto;\n\ttext-transform: none;\n}\n\n@media only screen and (max-width: 768px) {\n\t.container {\n\t\tline-height: 1.9em;\n\t\tfont-size: 1.2em;\n\t}\n}\n@media only screen and (max-width: 576px) {\n\tbody {\n\t\tpadding: 1rem 0.3rem;\n\t}\n\t.container {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\tline-height: 2em;\n\t\tfont-size: 1.16em;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_generatePasswordForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/generatePasswordForm */ "./src/modules/generatePasswordForm.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");


(0,_modules_generatePasswordForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map