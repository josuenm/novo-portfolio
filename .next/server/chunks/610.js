"use strict";
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 9610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ ListOfProjects)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/services/project.ts
var project = __webpack_require__(9901);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/ListOfProjects/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-14bejst-0"
})(["position:relative;width:calc((3 * 250px) + (2 * 40px) + (2 * 40px));margin:0 auto;display:flex;justify-content:center;@media (max-width:991.98px){width:100%;}"]);
const HorizontalListContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__HorizontalListContainer",
  componentId: "sc-14bejst-1"
})(["width:calc((3 * 250px) + (2 * 40px));overflow:hidden;@media (max-width:991.98px){overflow-x:scroll;}"]);
const ScrollContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__ScrollContainer",
  componentId: "sc-14bejst-2"
})(["width:", "px;display:flex;gap:40px;transition:ease .4s all;transform:translateX(", "px);"], ({
  width
}) => width * 250 + width * 40, ({
  scrollX
}) => scrollX);
const ProjectContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__ProjectContainer",
  componentId: "sc-14bejst-3"
})(["display:flex;flex-direction:column;background-color:#151515;padding:1rem;border-radius:1rem;width:250px;height:180px;"]);
const ProjectHeader = external_styled_components_default().header.withConfig({
  displayName: "styles__ProjectHeader",
  componentId: "sc-14bejst-4"
})(["display:flex;gap:10px;"]);
const ProjectMainContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__ProjectMainContainer",
  componentId: "sc-14bejst-5"
})(["height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:1.5rem 0 .5rem 0;"]);
const ProjectTitle = external_styled_components_default().h3.withConfig({
  displayName: "styles__ProjectTitle",
  componentId: "sc-14bejst-6"
})(["text-align:center;color:#fff;font-weight:", ";"], ({
  theme
}) => theme.fontWeights.bold);
const Bullet = external_styled_components_default().div.withConfig({
  displayName: "styles__Bullet",
  componentId: "sc-14bejst-7"
})(["width:10px;height:10px;border-radius:50%;background-color:", ";"], ({
  color
}) => color);
const Warning = external_styled_components_default().p.withConfig({
  displayName: "styles__Warning",
  componentId: "sc-14bejst-8"
})(["width:100%;text-align:center;color:#fff;font-weight:", ";font-size:1.5rem;"], ({
  theme
}) => theme.fontWeights.bold);
const LinkToProject = external_styled_components_default().a.withConfig({
  displayName: "styles__LinkToProject",
  componentId: "sc-14bejst-9"
})(["color:#fff;border:1px solid ", ";text-align:center;width:fit-content;padding:.4rem 2.5rem;border-radius:.25rem;cursor:pointer;@media (min-width:991.99px){transition:ease .4s all;&:hover{background-color:#fff;color:#000;}}"], ({
  theme
}) => theme.colors.gray50);
const Arrow = external_styled_components_default().div.withConfig({
  displayName: "styles__Arrow",
  componentId: "sc-14bejst-10"
})(["position:absolute;top:50%;z-index:99;transform:translateY(-50%);left:", ";right:", ";width:30px;height:30px;border-radius:50%;border:1px solid ", ";cursor:pointer;@media (max-width:991.98px){display:none;}transition:ease .4s all;&:hover{border:1px solid #fff;&::before,&::after{background-color:#fff;}}&::before{content:'';position:absolute;top:55%;left:35%;transform:", ";width:10px;height:2px;border-radius:3rem;background-color:", ";}&::after{content:'';position:absolute;top:35%;left:35%;transform:", ";width:10px;height:2px;border-radius:3rem;background-color:", ";}"], ({
  left
}) => left && left, ({
  right
}) => right && right, ({
  theme
}) => theme.colors.gray50, ({
  left
}) => left ? 'rotate(45deg)' : 'rotate(-45deg)', ({
  theme
}) => theme.colors.gray50, ({
  left
}) => left ? 'rotate(-45deg)' : 'rotate(45deg)', ({
  theme
}) => theme.colors.gray50);
const Loading = external_styled_components_default().div.withConfig({
  displayName: "styles__Loading",
  componentId: "sc-14bejst-11"
})(["width:50px;height:50px;border-top:2px solid #fff;border-left:2px solid #fff;border-radius:50%;margin:0 auto;animation:loading 1s linear infinite;@keyframes loading{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ListOfProjects/index.tsx







function ListOfProjects({
  href
}) {
  const {
    0: scrollX,
    1: setScrollX
  } = (0,external_react_.useState)(0);
  const {
    0: projects,
    1: setProjects
  } = (0,external_react_.useState)([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const getAllProjects = (0,external_react_.useCallback)(async () => {
    setIsLoading(true);
    const res = await project/* default.getAll */.Z.getAll();
    setIsLoading(false);

    if (res.data) {
      setProjects(res.data.slice(0).reverse());
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    getAllProjects();
  }, [getAllProjects]);

  function handleHorizontalList(order) {
    if (order === 'left' && scrollX === 0) {
      return;
    }

    if (order === 'right' && scrollX < ((projects.length - 2) * 200 - (projects.length - 40)) * -1) {
      return;
    }

    switch (order) {
      case 'right':
        setScrollX(prev => prev - (250 + 40));
        break;

      case 'left':
        setScrollX(prev => prev + (250 + 40));
        break;

      default:
        break;
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: isLoading ? /*#__PURE__*/jsx_runtime_.jsx(Loading, {}) : projects.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(HorizontalListContainer, {
        children: [projects.length > 3 && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
          left: "0",
          onClick: () => handleHorizontalList('left')
        }), projects.length > 3 && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
          right: "0",
          onClick: () => handleHorizontalList('right')
        }), /*#__PURE__*/jsx_runtime_.jsx(ScrollContainer, {
          width: projects.length,
          scrollX: scrollX,
          children: projects.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProjectContainer, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProjectHeader, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Bullet, {
                color: "#FF5A5A"
              }), /*#__PURE__*/jsx_runtime_.jsx(Bullet, {
                color: "#FFC75A"
              }), /*#__PURE__*/jsx_runtime_.jsx(Bullet, {
                color: "#10C600"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProjectMainContainer, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(ProjectTitle, {
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: href ? `${href}/${item._id}` : item._id,
                children: /*#__PURE__*/jsx_runtime_.jsx(LinkToProject, {
                  children: "Acessar"
                })
              })]
            })]
          }, item._id))
        })]
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx(Warning, {
      children: "Nenhum projeto foi encontrado"
    })
  });
}

/***/ })

};
;