"use strict";
(() => {
var exports = {};
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 7354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9901);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var src_components_Form_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2682);
/* harmony import */ var src_components_Form_Submit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4686);
/* harmony import */ var src_components_Form_ErrorText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2925);
/* harmony import */ var src_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(143);
/* harmony import */ var src_components_Form_Set__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2587);
/* harmony import */ var src_components_SafeArea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4714);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7209);
/* harmony import */ var src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(423);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__]);
([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const schema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  title: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Digite um título"),
  description: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Digite uma descrição"),
  repository: yup__WEBPACK_IMPORTED_MODULE_0__.string(),
  website: yup__WEBPACK_IMPORTED_MODULE_0__.string()
}).required();
const getServerSideProps = async ctx => {
  const cookies = nookies__WEBPACK_IMPORTED_MODULE_1___default().get(ctx, 'jnm.token');

  if (cookies['jnm.token'] === undefined || cookies['jnm.token'] === null) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      }
    };
  }

  return {
    props: {}
  };
};

const CreateProject = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
  const {
    0: techs,
    1: setTechs
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const {
    0: generalError,
    1: setGeneralError
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    error: false,
    message: ""
  });
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(schema)
  });

  const onSubmit = async data => {
    setIsLoading(true);
    const cookies = nookies__WEBPACK_IMPORTED_MODULE_1___default().get(null, 'jnm.token');

    const formatedData = _objectSpread(_objectSpread({}, data), {}, {
      technologies: techs
    });

    const res = await src_services_project__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .Z.create(cookies['jnm.token'], formatedData);

    switch (res.status) {
      case 200:
        setValue("title", "");
        setValue("description", "");
        setValue("repository", "");
        setValue("website", "");
        setTechs([]);
        setIsLoading(false);
        break;

      case 500:
        setGeneralError(prev => _objectSpread(_objectSpread({}, prev), {}, {
          error: true,
          message: "Erro no servidor, tente novamente"
        }));
        setIsLoading(false);
        break;

      case 401:
        nookies__WEBPACK_IMPORTED_MODULE_1___default().destroy({}, 'jnm.token');
        router.push("/login");
        break;

      default:
        break;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    techInputRef.current.value = "";
  }, [techs]);
  const techInputRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);

  function removeTech(id) {
    if (techs.length === 1) {
      setTechs([]);
      return;
    }

    const index = techs.indexOf(id);

    if (index !== -1) {
      let newTechs = [];

      for (let i = 0; i < techs.length; i++) {
        if (index !== i) {
          newTechs.push(techs[i]);
        }
      }

      setTechs(newTechs);
    }
  }

  function addTech() {
    var _techInputRef$current;

    if (((_techInputRef$current = techInputRef.current) === null || _techInputRef$current === void 0 ? void 0 : _techInputRef$current.value) === "") return;
    setTechs(prev => {
      var _techInputRef$current2;

      return [...prev, (_techInputRef$current2 = techInputRef.current) === null || _techInputRef$current2 === void 0 ? void 0 : _techInputRef$current2.value];
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("title", {
        children: "Criar Projeto | Portfolio"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_components_SafeArea__WEBPACK_IMPORTED_MODULE_12__/* .SafeArea */ .E, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Header__WEBPACK_IMPORTED_MODULE_14__/* .ProjectHeader */ .T, {
        href: "/dashboard"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__/* .Container */ .W2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__/* .Form */ .l0, {
          onSubmit: handleSubmit(onSubmit),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_components_Form_Set__WEBPACK_IMPORTED_MODULE_11__/* .Set */ .l, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Label__WEBPACK_IMPORTED_MODULE_7__/* .Label */ ._, {
              htmlFor: "title",
              title: "T\xEDtulo"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__/* .Input */ .I, {
              type: "text",
              id: "title",
              placeholder: "Digite o t\xEDtulo do projeto",
              register: _objectSpread({}, register("title"))
            }), !!errors.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_ErrorText__WEBPACK_IMPORTED_MODULE_9__/* .ErrorText */ .y, {
              title: errors.title.message
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_components_Form_Set__WEBPACK_IMPORTED_MODULE_11__/* .Set */ .l, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Label__WEBPACK_IMPORTED_MODULE_7__/* .Label */ ._, {
              htmlFor: "description",
              title: "Descri\xE7\xE3o"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__/* .Input */ .I, {
              type: "text",
              id: "description",
              placeholder: "Digite a descri\xE7\xE3o do projeto",
              register: _objectSpread({}, register("description"))
            }), !!errors.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_ErrorText__WEBPACK_IMPORTED_MODULE_9__/* .ErrorText */ .y, {
              title: errors.description.message
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_components_Form_Set__WEBPACK_IMPORTED_MODULE_11__/* .Set */ .l, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Label__WEBPACK_IMPORTED_MODULE_7__/* .Label */ ._, {
              htmlFor: "repository",
              title: "Reposit\xF3rio"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__/* .Input */ .I, {
              type: "text",
              id: "repository",
              placeholder: "Digite o link do reposit\xF3rio",
              register: _objectSpread({}, register("repository"))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_components_Form_Set__WEBPACK_IMPORTED_MODULE_11__/* .Set */ .l, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Label__WEBPACK_IMPORTED_MODULE_7__/* .Label */ ._, {
              htmlFor: "website",
              title: "Website"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__/* .Input */ .I, {
              type: "text",
              id: "website",
              placeholder: "Digite o link do website",
              register: _objectSpread({}, register("website"))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_components_Form_Set__WEBPACK_IMPORTED_MODULE_11__/* .Set */ .l, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Label__WEBPACK_IMPORTED_MODULE_7__/* .Label */ ._, {
              htmlFor: "techs",
              title: "Tecnologias"
            }), techs.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__/* .TechList */ .X, {
              children: techs.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__/* .TechContainer */ .Hm, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__/* .TechName */ .LQ, {
                  children: item
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__/* .TechDelete */ .W5, {
                  onClick: () => removeTech(item),
                  children: "Deletar"
                })]
              }, item))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__/* .AddContainer */ .Lt, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__/* .InputWithRef */ .f, {
                type: "text",
                id: "techs",
                placeholder: "Digite a tecnologia",
                inputRef: techInputRef
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_styles_pages_CreateProject__WEBPACK_IMPORTED_MODULE_15__/* .AddButton */ .HS, {
                onClick: addTech,
                children: "Adicionar"
              })]
            }), generalError.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_ErrorText__WEBPACK_IMPORTED_MODULE_9__/* .ErrorText */ .y, {
              title: generalError.message
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(src_components_Form_Submit__WEBPACK_IMPORTED_MODULE_8__/* .Submit */ .k, {
            title: "Salvar",
            margin: "2rem 0 0 0",
            isDisabled: isLoading
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateProject);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,61,427,209,704,423], () => (__webpack_exec__(7354)));
module.exports = __webpack_exports__;

})();