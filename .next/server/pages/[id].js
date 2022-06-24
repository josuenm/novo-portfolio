"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 1865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_SafeArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4714);
/* harmony import */ var src_components_Sections_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8519);
/* harmony import */ var src_components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7209);
/* harmony import */ var src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8151);
/* harmony import */ var src_services_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9901);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const getServerSideProps = async ctx => {
  const {
    id
  } = ctx.query;
  const res = await src_services_project__WEBPACK_IMPORTED_MODULE_7__/* ["default"].findOne */ .Z.findOne(id);

  switch (res.status) {
    case 200:
      return {
        props: {
          project: res.data
        }
      };
      break;

    case 500:
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      };
      break;

    case 401:
      nookies__WEBPACK_IMPORTED_MODULE_0___default().destroy({}, 'jnm.token');
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
      break;

    default:
      break;
  }

  return {
    props: {}
  };
};

const Project = ({
  project
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("title", {
        children: [project.title, " | Portfolio"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(src_components_SafeArea__WEBPACK_IMPORTED_MODULE_3__/* .SafeArea */ .E, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_components_Header__WEBPACK_IMPORTED_MODULE_5__/* .ProjectHeader */ .T, {
        href: "/"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W2, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .ImageContainer */ .mo, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .Screen */ .lL, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonRow */ .dR, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonColumn */ .GL, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonElement */ .g0, {
                  width: "100%",
                  height: "150px"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonColumn */ .GL, {
                align: "flex-end",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonElement */ .g0, {
                  width: "100%",
                  height: "10px"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonRow */ .dR, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonElement */ .g0, {
                    width: "100%",
                    height: "25px"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonElement */ .g0, {
                    width: "100%",
                    height: "25px"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonElement */ .g0, {
                  width: "100%",
                  height: "50px"
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .SkeletonRow */ .dR, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                children: "Preview n\xE3o esta dispon\xEDvel"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .InfoContainer */ .LZ, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .Title */ .Dx, {
            children: project.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .Description */ .dk, {
            children: project.description
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .TechnologiesTitle */ .oE, {
            children: "Tecnologias usadas"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .ListDescription */ .mG, {
            children: project.technologies.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
              children: item
            }, index))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .ButtonSet */ .uV, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: project.website,
              target: "_blank",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .LinkTo */ .e9, {
                outlined: true,
                children: "Acessar"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: project.repository,
              target: "_blank",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_styles_pages_Project__WEBPACK_IMPORTED_MODULE_6__/* .LinkTo */ .e9, {
                outlined: false,
                children: "Reposit\xF3rio"
              })
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(src_components_Sections_Footer__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

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
var __webpack_exports__ = __webpack_require__.X(0, [922,61,427,209,815,519,151], () => (__webpack_exec__(1865)));
module.exports = __webpack_exports__;

})();