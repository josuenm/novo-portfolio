"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 7820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/icons/Exit.svg
/* harmony default export */ const Exit = ({"src":"/_next/static/media/Exit.2636c6fc.svg","height":24,"width":24});
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
var external_nookies_default = /*#__PURE__*/__webpack_require__.n(external_nookies_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/components/ListOfProjects/index.tsx + 1 modules
var ListOfProjects = __webpack_require__(9610);
// EXTERNAL MODULE: ./src/components/SafeArea/index.tsx + 1 modules
var SafeArea = __webpack_require__(4714);
// EXTERNAL MODULE: ./src/components/Button/index.tsx + 1 modules
var Button = __webpack_require__(9815);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/pages/Dashboard.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "Dashboard__Container",
  componentId: "sc-1yzplm2-0"
})(["display:flex;flex-direction:column;gap:3rem;padding-bottom:3rem;"]);
const Header = external_styled_components_default().header.withConfig({
  displayName: "Dashboard__Header",
  componentId: "sc-1yzplm2-1"
})(["width:100%;padding:5rem 0;border-bottom:1px solid ", ";display:flex;justify-content:space-between;"], ({
  theme
}) => theme.colors.gray50);
const ProfileContainer = external_styled_components_default().div.withConfig({
  displayName: "Dashboard__ProfileContainer",
  componentId: "sc-1yzplm2-2"
})(["display:flex;align-items:center;gap:1rem;"]);
const PictureContainer = external_styled_components_default().div.withConfig({
  displayName: "Dashboard__PictureContainer",
  componentId: "sc-1yzplm2-3"
})(["width:52px;height:52px;border-radius:50%;display:flex;justify-content:center;align-items:center;border:2px solid ", ";.picture{border-radius:50%;}"], ({
  theme
}) => theme.colors.gray50);
const ExitContainer = external_styled_components_default().div.withConfig({
  displayName: "Dashboard__ExitContainer",
  componentId: "sc-1yzplm2-4"
})(["display:flex;align-items:center;justify-content:flex-end;"]);
const Greetings = external_styled_components_default().h2.withConfig({
  displayName: "Dashboard__Greetings",
  componentId: "sc-1yzplm2-5"
})(["font-size:1.5rem;font-weight:", ";color:#fff;"], ({
  theme
}) => theme.fontWeights.bold);
const MainContainer = external_styled_components_default().main.withConfig({
  displayName: "Dashboard__MainContainer",
  componentId: "sc-1yzplm2-6"
})(["width:100%;padding:2rem 3rem 8rem 3rem;border-radius:1rem;display:flex;flex-direction:column;gap:3rem;@media (max-width:991.98px){padding:2rem 0;}"]);
const ExitButtonContainer = external_styled_components_default().button.withConfig({
  displayName: "Dashboard__ExitButtonContainer",
  componentId: "sc-1yzplm2-7"
})(["height:fit-content;display:flex;justify-content:center;align-items:center;gap:.5rem;border:1px solid ", ";border-radius:3rem;padding:.5rem 2rem;background:transparent;transition:ease .4s all;&:hover{background:#151515;}"], ({
  theme
}) => theme.colors.gray50);
const ExitButtonTitle = external_styled_components_default().span.withConfig({
  displayName: "Dashboard__ExitButtonTitle",
  componentId: "sc-1yzplm2-8"
})(["font-size:1rem;font-weight:", ";color:#fff;"], ({
  theme
}) => theme.fontWeights.bold);
const Title = external_styled_components_default().h3.withConfig({
  displayName: "Dashboard__Title",
  componentId: "sc-1yzplm2-9"
})(["width:100%;text-align:center;font-size:2rem;color:#fff;font-weight:", ";margin-bottom:", ";"], ({
  theme
}) => theme.fontWeights.semiBold, ({
  marginBottom
}) => marginBottom ? marginBottom : '3rem');
const SetContainer = external_styled_components_default().div.withConfig({
  displayName: "Dashboard__SetContainer",
  componentId: "sc-1yzplm2-10"
})(["display:flex;flex-direction:column;gap:1rem;"]);
const SectionContainer = external_styled_components_default().section.withConfig({
  displayName: "Dashboard__SectionContainer",
  componentId: "sc-1yzplm2-11"
})(["display:flex;flex-direction:column;padding-bottom:5rem;"]);
const ButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "Dashboard__ButtonContainer",
  componentId: "sc-1yzplm2-12"
})(["width:100%;display:flex;justify-content:center;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/dashboard/index.tsx













const getServerSideProps = async ctx => {
  const cookies = external_nookies_default().get(null, 'jnm.token');

  if (cookies['jnm.token'] === undefined || cookies['jnm.token'] === null) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

const Dashboard = () => {
  function handleExit() {
    external_nookies_default().destroy({}, 'jnm.token');
    router_default().push('/login');
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Home | Dashboard"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SafeArea/* SafeArea */.E, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileContainer, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(PictureContainer, {
              children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: "https://github.com/josuenm.png",
                alt: "Foto de perfil",
                layout: "fixed",
                className: "picture",
                width: 50,
                height: 50
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Greetings, {
              children: "Ol\xE1 Josu\xE9!"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(ExitContainer, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ExitButtonContainer, {
              onClick: handleExit,
              children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: Exit,
                alt: "Bot\xE3o de sair",
                layout: "fixed",
                width: 18,
                height: 18
              }), /*#__PURE__*/jsx_runtime_.jsx(ExitButtonTitle, {
                children: "Sair"
              })]
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(MainContainer, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SetContainer, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SectionContainer, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
                marginBottom: "1.5rem",
                children: "Criar projeto"
              }), /*#__PURE__*/jsx_runtime_.jsx(ButtonContainer, {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/dashboard/create",
                  children: /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
                    title: "Criar"
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SectionContainer, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
                children: "Projetos"
              }), /*#__PURE__*/jsx_runtime_.jsx(ListOfProjects/* ListOfProjects */.U, {
                href: "/dashboard"
              })]
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const dashboard = (Dashboard);

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

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
var __webpack_exports__ = __webpack_require__.X(0, [922,61,427,815,610], () => (__webpack_exec__(7820)));
module.exports = __webpack_exports__;

})();