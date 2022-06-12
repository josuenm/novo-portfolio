"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "HS": () => (/* binding */ AddButton),
/* harmony export */   "Hm": () => (/* binding */ TechContainer),
/* harmony export */   "LQ": () => (/* binding */ TechName),
/* harmony export */   "Lt": () => (/* binding */ AddContainer),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "W5": () => (/* binding */ TechDelete),
/* harmony export */   "X": () => (/* binding */ TechList),
/* harmony export */   "l0": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().main.withConfig({
  displayName: "CreateProject__Container",
  componentId: "sc-1m6kdrv-0"
})(["display:flex;flex-direction:column;align-items:center;padding-bottom:5rem;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "CreateProject__Title",
  componentId: "sc-1m6kdrv-1"
})(["width:100%;text-align:center;color:#fff;font-weight:", ";margin:3rem 0 2rem 0;font-size:2rem;"], ({
  theme
}) => theme.fontWeights.bold);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "CreateProject__Form",
  componentId: "sc-1m6kdrv-2"
})(["width:50%;display:flex;flex-direction:column;gap:1rem;margin-top:2rem;@media (max-width:767.98px){width:100%;}"]);
const AddContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CreateProject__AddContainer",
  componentId: "sc-1m6kdrv-3"
})(["display:flex;gap:1rem;"]);
const AddButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.attrs({
  type: "button"
}).withConfig({
  displayName: "CreateProject__AddButton",
  componentId: "sc-1m6kdrv-4"
})(["font-weight:", ";color:#fff;background-color:#2daeeb;border:0;padding:.2rem 1rem;border-radius:.25rem;transition:ease .4s all;&:hover{filter:brightness(1.2);}&:focus{box-shadow:0 0 1px 3px rgba(45,174,235,.6);}"], ({
  theme
}) => theme.fontWeights.bold);
const TechList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "CreateProject__TechList",
  componentId: "sc-1m6kdrv-5"
})(["width:100%;display:flex;flex-direction:column;padding:1rem 0;"]);
const TechContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CreateProject__TechContainer",
  componentId: "sc-1m6kdrv-6"
})(["&:nth-of-type(1){border-top:1px solid ", ";}& + &{border-top:1px solid ", ";border-bottom:1px solid ", ";}display:flex;justify-content:space-between;gap:1rem;align-items:center;padding:1rem .5rem 1rem .5rem;"], ({
  theme
}) => theme.colors.gray50, ({
  theme
}) => theme.colors.gray50, ({
  theme
}) => theme.colors.gray50);
const TechName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CreateProject__TechName",
  componentId: "sc-1m6kdrv-7"
})(["color:#fff;font-weight:", ";font-size:.9rem;"], ({
  theme
}) => theme.fontWeights.semiBold);
const TechDelete = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.attrs({
  type: "button"
}).withConfig({
  displayName: "CreateProject__TechDelete",
  componentId: "sc-1m6kdrv-8"
})(["font-weight:", ";color:#fff;background-color:#eb3434;border:0;padding:.2rem 1rem;border-radius:.25rem;transition:ease .4s all;&:hover{filter:brightness(1.2);}&:focus{box-shadow:0 0 1px 3px rgba(235,52,52,.6);}"], ({
  theme
}) => theme.fontWeights.bold);

/***/ })

};
;