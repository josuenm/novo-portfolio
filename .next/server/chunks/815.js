"use strict";
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 9815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Button/styles.ts

const Container = external_styled_components_default().button.withConfig({
  displayName: "styles__Container",
  componentId: "sc-z57348-0"
})(["font-weight:", ";border-radius:.25rem;background-color:#fff;color:#000;border:0;font-size:1rem;padding:1rem 0;width:200px;border:1px solid #fff;@media (max-width:991.98px){width:280px;}transition:ease .4s all;@media (min-width:991.99px){&:hover{background-color:transparent;border:white;color:white;border:1px solid white;}}&.outline{background-color:transparent;border:1px solid ", ";color:", ";@media (min-width:991.99px){&:hover{background-color:transparent;border:white;color:white;border:1px solid white;}}}"], ({
  theme
}) => theme.fontWeights.bold, ({
  theme
}) => theme.colors.gray60, ({
  theme
}) => theme.colors.gray60);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Button/index.tsx
const _excluded = ["title", "type", "outline"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Button(_ref) {
  let {
    title,
    type = "button",
    outline = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(Container, _objectSpread(_objectSpread({
    type: type,
    className: outline ? 'outline' : 'painted'
  }, rest), {}, {
    children: title
  }));
}

/***/ })

};
;