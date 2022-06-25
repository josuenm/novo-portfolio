"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ContactContext),
/* harmony export */   "m": () => (/* binding */ ContactProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ContactContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
function ContactProvider({
  children
}) {
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);

  const toggle = value => setIsOpen(value);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ContactContext.Provider, {
    value: {
      isOpen,
      toggle
    },
    children: children
  });
}

/***/ }),

/***/ 6674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/contexts/contact.tsx
var contact = __webpack_require__(9116);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/styles/GlobalStyle.ts

const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;padding:0;margin:0;}::-webkit-scrollbar{width:7px;height:0;border-radius:3rem;background-color:#101010;}::-webkit-scrollbar-thumb{background-color:#454545;border-radius:3rem;}body{font-family:'Inter',sans-serif;background-color:#000;}h1,h2,h3,h4,h5,h6,span,p{font-size:16px;}a{text-decoration:none;color:inherit;cursor:pointer;}button{cursor:pointer;}"]);
/* harmony default export */ const styles_GlobalStyle = (GlobalStyle);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(9642);
;// CONCATENATED MODULE: ./src/utils/devTools.ts
function disableReactDevTools() {
  if (false) {}
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const TopProgressBar = dynamic_default()(() => {
  return __webpack_require__.e(/* import() */ 205).then(__webpack_require__.bind(__webpack_require__, 4205));
}, {
  ssr: false,
  loadableGenerated: {
    modules: ["_app.tsx -> " + "src/components/TopProgressBar"]
  }
});

function MyApp({
  Component,
  pageProps
}) {
  (0,external_react_.useEffect)(() => {
    if (true) disableReactDevTools();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(contact/* ContactProvider */.m, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
      theme: theme/* theme */.r,
      children: [/*#__PURE__*/jsx_runtime_.jsx(TopProgressBar, {}), /*#__PURE__*/jsx_runtime_.jsx(styles_GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
const theme = {
  colors: {
    gray50: '#505050',
    gray60: '#aaa',
    gradientBlueTransparent: 'linear-gradient(0deg, rgba(0,41,255,1) 10%, rgba(0,255,255,1) 50%, rgba(18,18,18,0) 95%)',
    gradientBlueNormal: 'linear-gradient(180deg, rgba(0,41,255,1) 0%, rgba(0,255,255,1) 100%)',
    gradientRedTransparent: 'linear-gradient(0deg, #FF0000 10%, #FFA800 50%, rgba(18,18,18,0) 95%)',
    gradientRedNormal: 'linear-gradient(180deg, #FF0000 0%, #FFA800 100%)',
    gradientGreenTransparent: 'linear-gradient(0deg, #00FF19 10%, #FFA800 50%, rgba(18,18,18,0) 95%)',
    gradientGreenNormal: 'linear-gradient(180deg, #00FF19 0%, #FFA800 100%)',
    blue40: '#3AB8FF'
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700
  }
};

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(6674)));
module.exports = __webpack_exports__;

})();