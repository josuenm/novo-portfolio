"use strict";
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 4714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ SafeArea)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/SafeArea/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-198ygr-0"
})(["width:100%;max-width:1120px;margin:0 auto;@media (max-width:991.98px){padding:0 .8rem;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/SafeArea/index.tsx


function SafeArea({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: children
  });
}

/***/ }),

/***/ 6860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BACK_END_URL = "http://localhost:8080";
const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${BACK_END_URL}/api`
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ 9901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6860);

const projectApi = {
  getAll: async () => {
    try {
      const res = await _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/project/getAll");
      return res;
    } catch (error) {
      return error;
    }
  },
  findOne: async id => {
    try {
      const res = await _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/project/${id}`);
      return res;
    } catch (error) {
      return {
        status: error.response.status
      };
    }
  },
  create: async (token, data) => {
    try {
      const res = await _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post('/project/create', data, {
        headers: {
          'jnm.token': token
        }
      });
      return res;
    } catch (error) {
      return {
        status: error.response.status
      };
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectApi);

/***/ })

};
;