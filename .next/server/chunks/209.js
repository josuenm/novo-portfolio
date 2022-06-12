"use strict";
exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 7209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header),
  "T": () => (/* binding */ ProjectHeader)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Header/styles.ts

const Container = external_styled_components_default().header.withConfig({
  displayName: "styles__Container",
  componentId: "sc-r4m6pm-0"
})(["width:100%;position:fixed;top:0;z-index:99;padding:.5rem 0;display:flex;justify-content:space-between;border-bottom:1px solid transparent;transition:ease .4s all;&.active{background-color:rgba(0,0,0,0.5);backdrop-filter:blur(5px);border-bottom:1px solid ", ";}@media (max-width:991.98px){height:70px;overflow:hidden;transition:ease .4s all;&[data-mobile=\"true\"]{height:100vh;}}"], ({
  theme
}) => theme.colors.gray50);
const ProjectHeaderContainer = external_styled_components_default().header.withConfig({
  displayName: "styles__ProjectHeaderContainer",
  componentId: "sc-r4m6pm-1"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const BackButton = external_styled_components_default().button.withConfig({
  displayName: "styles__BackButton",
  componentId: "sc-r4m6pm-2"
})(["border:1px solid ", ";color:", ";background:transparent;padding:.3rem 2rem;border-radius:.25rem;transition:ease .4s all;&:hover{background:#fff;color:#000;}"], ({
  theme
}) => theme.colors.gray60, ({
  theme
}) => theme.colors.gray60);
const MobileButton = external_styled_components_default().div.withConfig({
  displayName: "styles__MobileButton",
  componentId: "sc-r4m6pm-3"
})(["display:none;position:relative;width:40px;height:50px;@media (max-width:991.98px){display:block;z-index:99;}&::before{content:'';position:absolute;top:35%;width:100%;height:2px;background-color:", ";border-radius:3rem;transition:ease .4s all;}&::after{content:'';position:absolute;bottom:35%;width:100%;height:2px;background-color:", ";border-radius:3rem;transition:ease .4s all;}&.active{&::before{top:50%;transform:translateY(-50%) rotate(45deg);}&::after{bottom:50%;transform:translateY(50%) rotate(-45deg);}}"], ({
  theme
}) => theme.colors.gray50, ({
  theme
}) => theme.colors.gray50);
const Navigation = external_styled_components_default().nav.withConfig({
  displayName: "styles__Navigation",
  componentId: "sc-r4m6pm-4"
})(["display:flex;align-items:center;justify-content:space-between;gap:1rem;.logo{z-index:99;}.link{color:", ";cursor:pointer;transition:ease .4s all;&:hover{color:#fff;}@media (max-width:991.98px){width:100%;font-size:2rem;line-height:2rem;padding-left:1rem;}}"], ({
  theme
}) => theme.colors.gray60);
const LinksContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__LinksContainer",
  componentId: "sc-r4m6pm-5"
})(["display:flex;align-items:center;gap:3rem;@media (max-width:991.98px){position:absolute;top:-100vh;left:0;width:100%;z-index:1;flex-direction:column;border-bottom:1px solid ", ";transition:ease .4s all;&.active{padding-top:100px;top:0;height:calc(100vh);}}"], ({
  theme
}) => theme.colors.gray50);
const Button = external_styled_components_default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-r4m6pm-6"
})(["border:1px solid #fff;background-color:transparent;padding:.5rem 1rem;font-weight:", ";font-size:.7rem;color:#fff;border-radius:.25rem;@media (max-width:991.98px){align-self:flex-start;margin-left:1rem;width:fit-content;height:fit-content;font-size:1.5rem;color:", ";border:1px solid ", ";}@media (min-width:991.99px){transition:ease .4s all;&:hover{background-color:#fff;color:#000;}}"], ({
  theme
}) => theme.fontWeights.bold, ({
  theme
}) => theme.colors.gray60, ({
  theme
}) => theme.colors.gray60);
;// CONCATENATED MODULE: ./src/assets/icons/Logo.svg
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.8aae0a50.svg","height":47,"width":167});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/SafeArea/index.tsx + 1 modules
var SafeArea = __webpack_require__(4714);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/contexts/contact.tsx
var contact = __webpack_require__(9116);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx










function Header() {
  const {
    toggle
  } = (0,external_react_.useContext)(contact/* ContactContext */.I);
  const {
    0: headerIsActive,
    1: setHeaderIsActive
  } = (0,external_react_.useState)(false);
  const {
    0: mobileButton,
    1: setMobileButton
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setHeaderIsActive(true);
      } else {
        setHeaderIsActive(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  function handleMobileButton() {
    if (!mobileButton) {
      setHeaderIsActive(true);
      setMobileButton(true);
    } else {
      setMobileButton(false);
    }
  }

  function handleTopScroll() {
    setMobileButton(false);
    external_react_scroll_.animateScroll.scrollToTop();
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    className: headerIsActive ? 'active' : '',
    "data-mobile": mobileButton ? true : false,
    children: /*#__PURE__*/jsx_runtime_.jsx(SafeArea/* SafeArea */.E, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Navigation, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: Logo,
          layout: "fixed",
          alt: "",
          className: "logo",
          width: 100,
          height: 50,
          onClick: handleTopScroll
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinksContainer, {
          className: mobileButton ? 'active' : '',
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
            to: "presentation",
            onClick: handleTopScroll,
            className: "link",
            children: "Inicio"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
            to: "development",
            className: "link",
            smooth: true,
            offset: -100,
            onClick: () => setMobileButton(false),
            children: "Desenvolvimento"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
            to: "my-network",
            className: "link",
            smooth: true,
            offset: -100,
            onClick: () => setMobileButton(false),
            children: "Minha rede"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
            to: "projects",
            className: "link",
            smooth: true,
            offset: -100,
            onClick: () => setMobileButton(false),
            children: "Projetos"
          }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
            onClick: () => toggle(true),
            children: "Entrar em contato"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(MobileButton, {
          className: mobileButton ? 'active' : '',
          onClick: handleMobileButton
        })]
      })
    })
  });
}
function ProjectHeader({
  href
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProjectHeaderContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: href,
      children: /*#__PURE__*/jsx_runtime_.jsx(BackButton, {
        children: "Voltar"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: Logo,
      layout: "fixed",
      alt: "",
      className: "logo",
      width: 100,
      height: 50
    })]
  });
}

/***/ }),

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

/***/ })

};
;