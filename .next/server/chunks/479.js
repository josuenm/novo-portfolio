"use strict";
exports.id = 479;
exports.ids = [479];
exports.modules = {

/***/ 2956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Button/styles.ts

const Container = (external_styled_components_default()).button`
    font-weight: ${({ theme  })=>theme.fontWeights.bold
};
    border-radius: .25rem;
    background-color: #fff;
    color: #000;
    border: 0;
    font-size: 1rem;
    padding: 1rem 0;
    width: 200px;
    border: 1px solid #fff;

    @media (max-width: 991.98px) {
        width: 280px;
    }

    transition: ease .4s all;
    @media (min-width: 991.99px) {
        &:hover {
            background-color: transparent;
            border: white;
            color: white;
            border: 1px solid white;
        }
    }
    
    &.outline {
        background-color: transparent;
        border: 1px solid ${({ theme  })=>theme.colors.gray60
};
        color: ${({ theme  })=>theme.colors.gray60
};

        @media (min-width: 991.99px) {
            &:hover {
                background-color: transparent;
                border: white;
                color: white;
                border: 1px solid white;
            }
        }
    }
`;

;// CONCATENATED MODULE: ./src/components/Button/index.tsx


function Button({ title , type ="button" , outline =false , ...rest }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        type: type,
        className: outline ? "outline" : "painted",
        ...rest,
        children: title
    });
}


/***/ }),

/***/ 1417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header),
  "T": () => (/* binding */ ProjectHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Header/styles.ts

const Container = (external_styled_components_default()).header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    padding: .5rem 0;

    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid transparent;

    transition: ease .4s all;
    &.active {
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        border-bottom: 1px solid ${({ theme  })=>theme.colors.gray50
};
    }

    @media (max-width: 991.98px) {
        height: 70px;
        overflow: hidden;
        transition: ease .4s all;
        
        &[data-mobile="true"] {
            height: 100vh;
        }
    }
`;
const ProjectHeaderContainer = (external_styled_components_default()).header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BackButton = (external_styled_components_default()).button`
    border: 1px solid ${({ theme  })=>theme.colors.gray60
};
    color: ${({ theme  })=>theme.colors.gray60
};
    background: transparent;
    padding: .3rem 2rem;
    border-radius: .25rem;

    transition: ease .4s all;
    &:hover {
        background: #fff;
        color: #000;
    }
`;
const MobileButton = (external_styled_components_default()).div`
    display: none;
    position: relative;
    width: 40px;
    height: 50px;

    @media (max-width: 991.98px) {
        display: block;
        z-index: 99;
    }

    &::before {
        content: '';
        position: absolute;
        top: 35%;
        width: 100%;
        height: 2px;
        background-color: ${({ theme  })=>theme.colors.gray50
};
        border-radius: 3rem;
        transition: ease .4s all;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 35%;
        width: 100%;
        height: 2px;
        background-color: ${({ theme  })=>theme.colors.gray50
};
        border-radius: 3rem;
        transition: ease .4s all;
    }

    &.active {
        &::before {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
        }
        
        &::after {
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
        }
    }
`;
const Navigation = (external_styled_components_default()).nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .logo {
        z-index: 99;
    }

    .link {
        color: ${({ theme  })=>theme.colors.gray60
};
        cursor: pointer;

        transition: ease .4s all;
        &:hover {
            color: #fff;
        }

        @media (max-width: 991.98px) {
            width: 100%;
            font-size: 2rem;
            line-height: 2rem;
            padding-left: 1rem;
        }
    }
`;
const LinksContainer = (external_styled_components_default()).div`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media (max-width: 991.98px) {
        position: absolute;
        top: -100vh;
        left: 0;
        width: 100%;
        z-index: 1;
        
        flex-direction: column;
        border-bottom: 1px solid ${({ theme  })=>theme.colors.gray50
};
        transition: ease .4s all;
        
        &.active {
            padding-top: 100px;
            top: 0;
            height: calc(100vh);
        }
    }
`;
const Button = (external_styled_components_default()).button`
    border: 1px solid #fff;
    background-color: transparent;
    padding: .5rem 1rem;
    font-weight: ${({ theme  })=>theme.fontWeights.bold
};
    font-size: .7rem;
    color: #fff;
    border-radius: .25rem;
    
    @media (max-width: 991.98px) {
        align-self: flex-start;
        margin-left: 1rem;
        width: fit-content;
        height: fit-content;
        font-size: 1.5rem;
        color: ${({ theme  })=>theme.colors.gray60
};
        border: 1px solid ${({ theme  })=>theme.colors.gray60
};
    }

    @media (min-width: 991.99px) {
        transition: ease .4s all;
        &:hover {
            background-color: #fff;
            color: #000;
        }
    }
`;

;// CONCATENATED MODULE: ./src/assets/icons/Logo.svg
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.8aae0a50.svg","height":47,"width":167});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/SafeArea/index.tsx + 1 modules
var SafeArea = __webpack_require__(8049);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/contexts/contact.tsx
var contact = __webpack_require__(9558);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx









function Header() {
    const { toggle  } = (0,external_react_.useContext)(contact/* ContactContext */.I);
    const { 0: headerIsActive , 1: setHeaderIsActive  } = (0,external_react_.useState)(false);
    const { 0: mobileButton , 1: setMobileButton  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const scrollListener = ()=>{
            if (window.scrollY > 10) {
                setHeaderIsActive(true);
            } else {
                setHeaderIsActive(false);
            }
        };
        window.addEventListener("scroll", scrollListener);
        return ()=>{
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
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        className: headerIsActive ? "active" : "",
        "data-mobile": mobileButton ? true : false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(SafeArea/* SafeArea */.E, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Navigation, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: Logo,
                        layout: "fixed",
                        alt: "",
                        className: "logo",
                        width: 100,
                        height: 50,
                        onClick: handleTopScroll
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinksContainer, {
                        className: mobileButton ? "active" : "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                to: "presentation",
                                onClick: handleTopScroll,
                                className: "link",
                                children: "Inicio"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                to: "development",
                                className: "link",
                                smooth: true,
                                offset: -100,
                                onClick: ()=>setMobileButton(false)
                                ,
                                children: "Desenvolvimento"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                to: "my-network",
                                className: "link",
                                smooth: true,
                                offset: -100,
                                onClick: ()=>setMobileButton(false)
                                ,
                                children: "Minha rede"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                to: "projects",
                                className: "link",
                                smooth: true,
                                offset: -100,
                                onClick: ()=>setMobileButton(false)
                                ,
                                children: "Projetos"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                onClick: ()=>toggle(true)
                                ,
                                children: "Entrar em contato"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileButton, {
                        className: mobileButton ? "active" : "",
                        onClick: handleMobileButton
                    })
                ]
            })
        })
    });
}
function ProjectHeader() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectHeaderContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx(BackButton, {
                    children: "Voltar"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: Logo,
                layout: "fixed",
                alt: "",
                className: "logo",
                width: 100,
                height: 50
            })
        ]
    });
}


/***/ }),

/***/ 8049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ SafeArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/SafeArea/styles.ts

const Container = (external_styled_components_default()).div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    @media (max-width: 991.98px) {
        padding: 0 .8rem;
    }
`;

;// CONCATENATED MODULE: ./src/components/SafeArea/index.tsx


function SafeArea({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: children
    });
}


/***/ }),

/***/ 1105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Button/index.tsx + 1 modules
var Button = __webpack_require__(2956);
// EXTERNAL MODULE: ./src/contexts/contact.tsx
var contact = __webpack_require__(9558);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Sections/Footer/styles.ts

const Container = (external_styled_components_default()).footer`
    width: 100%;
    background: #202020;
    border-top: 1px solid ${({ theme  })=>theme.colors.gray50
};
    padding: 2rem 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;
const Warning = (external_styled_components_default()).p`
    text-align: center;
    color: ${({ theme  })=>theme.colors.gray60
};
    font-weight: ${({ theme  })=>theme.fontWeights.regular
};
    font-size: .9rem;
`;

;// CONCATENATED MODULE: ./src/components/Sections/Footer/index.tsx





function Footer() {
    const { toggle  } = (0,external_react_.useContext)(contact/* ContactContext */.I);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                title: "Entre em contato",
                onClick: ()=>toggle(true)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Warning, {
                children: "Esse portfolio foi desenvolvido em NextJS, NodeJS e MongoDB"
            })
        ]
    });
}


/***/ }),

/***/ 9558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ContactContext),
/* harmony export */   "m": () => (/* binding */ ContactProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ContactContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
function ContactProvider({ children  }) {
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const toggle = (value)=>setIsOpen(value)
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactContext.Provider, {
        value: {
            isOpen,
            toggle
        },
        children: children
    });
}


/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projects = [
    {
        id: 1,
        name: "Javascript Notes",
        description: "Esse foi um projeto bem grande, aonde cont\xe9m p\xe1gina inicial, login, registro, dashboard aonde \xe9 poss\xedvel criar e editar notas e edi\xe7\xe3o dos dados de usu\xe1rio. A parte do backend foi feita com NodeJS e MongoDB, e o frontend foi feito em React",
        technologies: [
            "ReactJS",
            "Styled-Components",
            "NodeJS",
            "MongoDB", 
        ],
        repository: "https://github.com/josuenm/javascript-notes",
        website: "https://javascript-notes-client-0001.herokuapp.com"
    },
    {
        id: 2,
        name: "LinkedIn Clone",
        description: "Esse foi um projeto bem maior, nele tem p\xe1gina de login, registro e dashboard. O maior desafio nesse projeto foi aprender Firebase e Redux toolkit porque eu nunca tinha usado, mas foi bem tranquilo, peguei o jeito depois de algumas horas olhando a documenta\xe7\xe3o.",
        technologies: [
            "ReactJS",
            "Styled-Components",
            "SASS",
            "Redux Toolkit",
            "Firebase", 
        ],
        repository: "https://github.com/josuenm/linkedin-clone",
        website: "https://linkedin-clone-6deba.web.app"
    },
    {
        id: 3,
        name: "Netflix Clone",
        description: "Nesse projeto eu fiz a homepage da Netflix usando ReactJS e a API do TheMoviesDB.",
        technologies: [
            "ReactJS",
            "CSS", 
        ],
        repository: "https://github.com/josuenm/netflix",
        website: "https://josuenm.github.io/netflix"
    },
    {
        id: 4,
        name: "Site do Spotify",
        description: "Esse foi um projeto para praticar HTML e Bootstrap mas que ficou bem legal.",
        technologies: [
            "HTML",
            "Bootstrap", 
        ],
        repository: "https://github.com/josuenm/site-spotify-clone",
        website: "https://josuenm.github.io/site-spotify-clone"
    },
    {
        id: 5,
        name: "Calculadora Neumorphic",
        description: "A id\xe9ia dessa calculadora \xe9 o design usando o conceito de Neumorphism, que \xe9 um conceito que nos permite criar uma interface de usu\xe1rio mais agrad\xe1vel e moderna.",
        technologies: [
            "HTML",
            "SASS",
            "JavaScript", 
        ],
        repository: "https://github.com/josuenm/calculadora",
        website: "https://josuenm.github.io/calculadora"
    },
    {
        id: 6,
        name: "Playmy",
        description: "Esse foi um desafio que a empresa Supera me mandou. Foi passado que deveria fazer um ecommerce tudo em Local Storage. Apenas o front-end. Tamb\xe9m foi passado que eu deveria fazer uma \xf3tima documenta\xe7\xe3o do projeto.",
        technologies: [
            "ReactJS",
            "Styled-Components",
            "Typescript",
            "Context-API", 
        ],
        repository: "https://github.com/josuenm/playmy",
        website: "https://playmy-ecommerce.web.app"
    },
    {
        id: 7,
        name: "Pretty Form",
        description: "Esse foi um desafio que a empresa Supera me mandou. Foi passado que deveria fazer um formul\xe1rio usando React Hook Form e todos os dados deveria ser armazenado em Local Storage e ser recuperados e colocados nos campos respectivos. Tamb\xe9m foi passado que eu deveria fazer uma \xf3tima documenta\xe7\xe3o do projeto.",
        technologies: [
            "ReactJS",
            "Styled-Components",
            "Typescript",
            "React-Hook-Form",
            "Yup Helper", 
        ],
        repository: "https://github.com/josuenm/pretty-form",
        website: "https://pretty-form.web.app"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ })

};
;