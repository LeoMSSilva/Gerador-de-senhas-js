/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/FormularioGeraSenha.js":
/*!********************************************!*\
  !*** ./src/modules/FormularioGeraSenha.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Geradores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geradores */ "./src/modules/Geradores.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var tamanho = document.querySelector('#tamanho');
  var numero = document.querySelector('#numero');
  var maiuscula = document.querySelector('#maiuscula');
  var minuscula = document.querySelector('#minuscula');
  var simbolo = document.querySelector('#simbolo');
  var botao = document.querySelector('#gerar');
  var resultado = document.querySelector('#resultado');

  function imprima(msg) {
    resultado.innerHTML = msg;
  }

  botao.addEventListener('click', function (e) {
    e.preventDefault();
    if (tamanho.value === '') alert('Marque um tamanho para poder gerar senha!');
    if (!numero.checked && !maiuscula.checked && !minuscula.checked && !simbolo.checked) alert('Todas as opções estão desmarcadas!\n\nÉ preciso marcar pelo menos uma opção!');
    var senhaGerada = (0,_Geradores__WEBPACK_IMPORTED_MODULE_0__.default)(tamanho.value, numero.checked, maiuscula.checked, minuscula.checked, simbolo.checked);
    console.log(senhaGerada);
    imprima(senhaGerada);
  });
});

/***/ }),

/***/ "./src/modules/Geradores.js":
/*!**********************************!*\
  !*** ./src/modules/Geradores.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var rand = function rand(min, max) {
  return String(Math.floor(Math.random() * (max - min) + min));
};

var geraNumero = function geraNumero() {
  return String(rand(0, 10));
};

var geraMaiuscula = function geraMaiuscula() {
  return String.fromCharCode(rand(65, 91));
};

var geraMinuscula = function geraMinuscula() {
  return String.fromCharCode(rand(97, 122));
};

var geraSimbolo = function geraSimbolo() {
  var simbolos = ['\'', '"', '!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '¬', '¢', '£', '+', '=', '§', '`', '´', '[', ']', '{', '}', 'ª', 'º', '^', '~', '/', '?', '°', ';', ':', '>', '.', '<', ',', '|', '\\'];
  var posicao = rand(0, simbolos.length);
  return simbolos[posicao];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (tamanho, numero, maiuscula, minuscula, simbolo) {
  //cria um array só com as funcao geradoras que foram passadas
  var opcaoDeFuncao = [];
  numero && opcaoDeFuncao.push(geraNumero);
  maiuscula && opcaoDeFuncao.push(geraMaiuscula);
  minuscula && opcaoDeFuncao.push(geraMinuscula);
  simbolo && opcaoDeFuncao.push(geraSimbolo);
  var senhaArray = []; //Só vai parar quando o tamanho passado for maior que o tamanho do array

  while (tamanho > senhaArray.length) {
    //faz um loop sorteando a posicao no vetor de funcao, passando a funcao que vai usar, e gerando e inserindo um caracter no array
    var posicao = rand(0, opcaoDeFuncao.length);
    var caracterCriado = opcaoDeFuncao[posicao]();
    senhaArray.push(caracterCriado);
  } //junta o array em uma string e mantem o tamanho


  return senhaArray.join('');
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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --primary-color: #113366;\n    --second-color: #2c7cf3;\n    --disable-color: #a1b6d3;\n}\n\n*{\n    outline: 0;\n    font-family: 'Open sans', sans-serif;\n    font-weight: bold;\n    text-align: center;\n    box-sizing: border-box;\n    text-transform: uppercase;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-color: var(--primary-color);\n}\n\n.container{\n    line-height: 1.8rem;\n    font-size: 1.3em;\n    max-width: 30rem;\n    max-height: 40rem;\n    margin: 6rem auto;\n    padding: 2rem 0rem 1rem;\n    border-radius: 1.5rem;\n    border: solid 1px #ffffff;\n}\n\nform{\n    text-align: left;\n    margin: 0 3rem;\n    color: #ffffff;\n    vertical-align: middle;\n}\n\ninput{\n    width: 1rem;\n    height: 1rem;\n    border-radius: 0.5rem;\n    border: 1px solid #ffffff;\n}\n\ninput[type=\"number\"]{\n    width: 2.8rem;\n    height: 1.8rem;\n    color: #ffffff;\n    background-color: var(--primary-color);\n    line-height: 1em;\n    font-size: 0.8em;\n}\n\nh1{\n    padding: 0.55rem 0rem 0rem;\n    margin: 0.2rem 0 1rem;\n}\n\nh1, h2, button{\n    background-color: #ffffff;\n    color: var(--primary-color);\n    height: 3rem;\n}\n\nbutton{\n    width: 9rem;\n    font-size: 1.2em;\n    border-radius: 20rem;\n    border: none;\n    cursor: pointer;\n    margin: 1rem 7.9rem 0.1rem;\n}\n\nbutton:hover{\n    background-color: var(--second-color);\n    color: #ffffff;\n}\n\n#resultado{\n    background-color: var(--primary-color);\n    color: #ffffff;\n    max-height: 30rem;\n    word-wrap: break-word;\n    margin: 2rem auto;\n    text-transform: none;\n}\n\n@media only screen and (max-width: 768px) {\n    .container{\n        line-height: 1.9em;\n        font-size: 1.2em;\n    }\n}\n@media only screen and (max-width: 576px) {\n\n    body{\n        padding: 1rem 0.3rem;\n    }\n    .container{\n        margin-left: auto;\n        margin-right: auto;\n        line-height: 2em;\n        font-size: 1.16em;\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AACA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,oCAAoC;IACpC,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,yBAAyB;IACzB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,cAAc;IACd,sCAAsC;IACtC,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,cAAc;AAClB;;AAEA;IACI,sCAAsC;IACtC,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI;QACI,kBAAkB;QAClB,gBAAgB;IACpB;AACJ;AACA;;IAEI;QACI,oBAAoB;IACxB;IACA;QACI,iBAAiB;QACjB,kBAAkB;QAClB,gBAAgB;QAChB,iBAAiB;IACrB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root{\n    --primary-color: #113366;\n    --second-color: #2c7cf3;\n    --disable-color: #a1b6d3;\n}\n\n*{\n    outline: 0;\n    font-family: 'Open sans', sans-serif;\n    font-weight: bold;\n    text-align: center;\n    box-sizing: border-box;\n    text-transform: uppercase;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-color: var(--primary-color);\n}\n\n.container{\n    line-height: 1.8rem;\n    font-size: 1.3em;\n    max-width: 30rem;\n    max-height: 40rem;\n    margin: 6rem auto;\n    padding: 2rem 0rem 1rem;\n    border-radius: 1.5rem;\n    border: solid 1px #ffffff;\n}\n\nform{\n    text-align: left;\n    margin: 0 3rem;\n    color: #ffffff;\n    vertical-align: middle;\n}\n\ninput{\n    width: 1rem;\n    height: 1rem;\n    border-radius: 0.5rem;\n    border: 1px solid #ffffff;\n}\n\ninput[type=\"number\"]{\n    width: 2.8rem;\n    height: 1.8rem;\n    color: #ffffff;\n    background-color: var(--primary-color);\n    line-height: 1em;\n    font-size: 0.8em;\n}\n\nh1{\n    padding: 0.55rem 0rem 0rem;\n    margin: 0.2rem 0 1rem;\n}\n\nh1, h2, button{\n    background-color: #ffffff;\n    color: var(--primary-color);\n    height: 3rem;\n}\n\nbutton{\n    width: 9rem;\n    font-size: 1.2em;\n    border-radius: 20rem;\n    border: none;\n    cursor: pointer;\n    margin: 1rem 7.9rem 0.1rem;\n}\n\nbutton:hover{\n    background-color: var(--second-color);\n    color: #ffffff;\n}\n\n#resultado{\n    background-color: var(--primary-color);\n    color: #ffffff;\n    max-height: 30rem;\n    word-wrap: break-word;\n    margin: 2rem auto;\n    text-transform: none;\n}\n\n@media only screen and (max-width: 768px) {\n    .container{\n        line-height: 1.9em;\n        font-size: 1.2em;\n    }\n}\n@media only screen and (max-width: 576px) {\n\n    body{\n        padding: 1rem 0.3rem;\n    }\n    .container{\n        margin-left: auto;\n        margin-right: auto;\n        line-height: 2em;\n        font-size: 1.16em;\n    }\n}"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _modules_FormularioGeraSenha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/FormularioGeraSenha */ "./src/modules/FormularioGeraSenha.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");


(0,_modules_FormularioGeraSenha__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map