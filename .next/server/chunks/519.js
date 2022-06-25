"use strict";
exports.id = 519;
exports.ids = [519];
exports.modules = {

/***/ 8519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Button/index.tsx + 1 modules
var Button = __webpack_require__(9815);
// EXTERNAL MODULE: ./src/contexts/contact.tsx
var contact = __webpack_require__(9116);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Sections/Footer/styles.ts

const Container = external_styled_components_default().footer.withConfig({
  displayName: "styles__Container",
  componentId: "sc-11km0ly-0"
})(["width:100%;background:#101010;border-top:1px solid ", ";padding:2rem 1.5rem;display:flex;flex-direction:column;align-items:center;gap:2rem;"], ({
  theme
}) => theme.colors.gray50);
const Warning = external_styled_components_default().p.withConfig({
  displayName: "styles__Warning",
  componentId: "sc-11km0ly-1"
})(["text-align:center;color:", ";font-weight:", ";font-size:.9rem;"], ({
  theme
}) => theme.colors.gray60, ({
  theme
}) => theme.fontWeights.regular);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Sections/Footer/index.tsx






function Footer() {
  const {
    toggle
  } = (0,external_react_.useContext)(contact/* ContactContext */.I);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
      title: "Entre em contato",
      onClick: () => toggle(true)
    }), /*#__PURE__*/jsx_runtime_.jsx(Warning, {
      children: "Esse portfolio foi desenvolvido usando NextJS, Styled-Components, Context-API, TypeScript, NodeJS, Express e MongoDB"
    })]
  });
}

/***/ })

};
;