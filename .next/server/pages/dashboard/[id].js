"use strict";
(() => {
var exports = {};
exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 7278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
var external_nookies_default = /*#__PURE__*/__webpack_require__.n(external_nookies_);
// EXTERNAL MODULE: ./src/services/project.ts
var project = __webpack_require__(9901);
// EXTERNAL MODULE: ./src/components/SafeArea/index.tsx + 1 modules
var SafeArea = __webpack_require__(4714);
// EXTERNAL MODULE: ./src/components/Sections/Footer/index.tsx + 1 modules
var Footer = __webpack_require__(8519);
// EXTERNAL MODULE: ./src/components/Header/index.tsx + 2 modules
var Header = __webpack_require__(7209);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/pages/SelectedProject.ts

const Button = external_styled_components_default().button.withConfig({
  displayName: "SelectedProject__Button",
  componentId: "sc-11m5dkr-0"
})(["margin-top:3rem;width:100%;", " background:", ";border-radius:.25rem;padding:.5rem 0;font-size:1.2rem;font-weight:", ";transition:ease .4s all;&:hover{", "}"], ({
  outline,
  theme
}) => outline ? `
        color: ${theme.colors.gray60};
        border: 1px solid ${theme.colors.gray60};
    ` : `
        color: #000;
        border: 0;
    `, ({
  outline
}) => outline ? 'transparent' : '#fff', ({
  theme
}) => theme.fontWeights.bold, ({
  outline
}) => outline ? `
            color: #000;
            background: #eee;
        ` : `
            color: #fff;
            border: 1px solid #fff;
            background: transparent;
        `);
// EXTERNAL MODULE: ./src/styles/pages/Project.ts
var Project = __webpack_require__(8151);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/dashboard/[id]/index.tsx












const getServerSideProps = async ctx => {
  const {
    id
  } = ctx.query;
  const res = await project/* default.findOne */.Z.findOne(id);

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
      external_nookies_default().destroy({}, 'jnm.token');
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

const SelectedProject = ({
  project
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [project.title, " | Portfolio"]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SafeArea/* SafeArea */.E, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* ProjectHeader */.T, {
        href: "/dashboard"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Project/* Container */.W2, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Project/* ImageContainer */.mo, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Project/* Screen */.lL, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Project/* SkeletonRow */.dR, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Project/* SkeletonColumn */.GL, {
                children: /*#__PURE__*/jsx_runtime_.jsx(Project/* SkeletonElement */.g0, {
                  width: "100%",
                  height: "150px"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Project/* SkeletonColumn */.GL, {
                align: "flex-end",
                children: [/*#__PURE__*/jsx_runtime_.jsx(Project/* SkeletonElement */.g0, {
                  width: "100%",
                  height: "10px"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Project/* SkeletonRow */.dR, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(Project/* SkeletonElement */.g0, {
                    width: "100%",
                    height: "25px"
                  }), /*#__PURE__*/jsx_runtime_.jsx(Project/* SkeletonElement */.g0, {
                    width: "100%",
                    height: "25px"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(Project/* SkeletonElement */.g0, {
                  width: "100%",
                  height: "50px"
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Project/* SkeletonRow */.dR, {
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Preview n\xE3o esta dispon\xEDvel"
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Project/* InfoContainer */.LZ, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Project/* Title */.Dx, {
            children: project.title
          }), /*#__PURE__*/jsx_runtime_.jsx(Project/* Description */.dk, {
            children: project.description
          }), /*#__PURE__*/jsx_runtime_.jsx(Project/* TechnologiesTitle */.oE, {
            children: "Tecnologias usadas"
          }), /*#__PURE__*/jsx_runtime_.jsx(Project/* ListDescription */.mG, {
            children: project.technologies.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: item
            }, index))
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Project/* ButtonSet */.uV, {
            children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: project.website,
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx(Project/* LinkTo */.e9, {
                outlined: true,
                children: "Acessar"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: project.repository,
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx(Project/* LinkTo */.e9, {
                outlined: false,
                children: "Reposit\xF3rio"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: `/dashboard/${project._id}/edit`,
            children: /*#__PURE__*/jsx_runtime_.jsx(Button, {
              outline: true,
              children: "Editar"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
            outline: false,
            children: "Apagar"
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* Footer */.$, {})]
  });
};

/* harmony default export */ const _id_ = (SelectedProject);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,61,427,209,815,519,151], () => (__webpack_exec__(7278)));
module.exports = __webpack_exports__;

})();