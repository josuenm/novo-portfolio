(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6489:function(e,t){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var n={},o=t||{},s=e.split(";"),a=o.decode||r,c=0;c<s.length;c++){var d=s[c],l=d.indexOf("=");if(!(l<0)){var u=d.substring(0,l).trim();if(void 0==n[u]){var f=d.substring(l+1,d.length).trim();'"'===f[0]&&(f=f.slice(1,-1)),n[u]=i(f,a)}}}return n},t.serialize=function(e,t,r){var i=r||{},s=i.encode||n;if("function"!==typeof s)throw new TypeError("option encode is invalid");if(!o.test(e))throw new TypeError("argument name is invalid");var a=s(t);if(a&&!o.test(a))throw new TypeError("argument val is invalid");var c=e+"="+a;if(null!=i.maxAge){var d=i.maxAge-0;if(isNaN(d)||!isFinite(d))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(d)}if(i.domain){if(!o.test(i.domain))throw new TypeError("option domain is invalid");c+="; Domain="+i.domain}if(i.path){if(!o.test(i.path))throw new TypeError("option path is invalid");c+="; Path="+i.path}if(i.expires){if("function"!==typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+i.expires.toUTCString()}i.httpOnly&&(c+="; HttpOnly");i.secure&&(c+="; Secure");if(i.sameSite){switch("string"===typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var r=decodeURIComponent,n=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function i(e,t){try{return t(e)}catch(r){return e}}},9287:function(e,t,r){"use strict";r.d(t,{z:function(){return l}});var n=r(9499);function o(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=r(2125).ZP.button.withConfig({displayName:"styles__Container",componentId:"sc-z57348-0"})(["font-weight:",";border-radius:.25rem;background-color:#fff;color:#000;border:0;font-size:1rem;padding:1rem 0;width:200px;border:1px solid #fff;@media (max-width:991.98px){width:280px;}transition:ease .4s all;@media (min-width:991.99px){&:hover{background-color:transparent;border:#fff;color:#fff;border:1px solid #fff;}}&.outline{background-color:transparent;border:1px solid ",";color:",";@media (min-width:991.99px){&:hover{background-color:transparent;border:#fff;color:#fff;border:1px solid #fff;}}}"],(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.colors.gray60}),(function(e){return e.theme.colors.gray60})),s=r(5893),a=["title","type","outline"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t=e.title,r=e.type,n=void 0===r?"button":r,c=e.outline,l=void 0!==c&&c,u=o(e,a);return(0,s.jsx)(i,d(d({type:n,className:l?"outline":"painted"},u),{},{children:t}))}},9610:function(e,t,r){"use strict";r.d(t,{U:function(){return _}});var n=r(29),o=r(7794),i=r.n(o),s=r(1664),a=r.n(s),c=r(7294),d=r(9901),l=r(2125),u=l.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-14bejst-0"})(["position:relative;width:calc((3 * 250px) + (2 * 40px) + (2 * 40px));margin:0 auto;display:flex;justify-content:center;@media (max-width:991.98px){width:100%;}"]),f=l.ZP.div.withConfig({displayName:"styles__HorizontalListContainer",componentId:"sc-14bejst-1"})(["width:calc((3 * 250px) + (2 * 40px));overflow:hidden;@media (max-width:991.98px){overflow-x:scroll;}"]),p=l.ZP.div.withConfig({displayName:"styles__ScrollContainer",componentId:"sc-14bejst-2"})(["width:","px;display:flex;gap:40px;transition:ease .4s all;transform:translateX(","px);"],(function(e){var t=e.width;return 250*t+40*t}),(function(e){return e.scrollX})),h=l.ZP.div.withConfig({displayName:"styles__ProjectContainer",componentId:"sc-14bejst-3"})(["display:flex;flex-direction:column;background-color:#151515;padding:1rem;border-radius:1rem;width:250px;height:180px;"]),m=l.ZP.header.withConfig({displayName:"styles__ProjectHeader",componentId:"sc-14bejst-4"})(["display:flex;gap:10px;"]),g=l.ZP.div.withConfig({displayName:"styles__ProjectMainContainer",componentId:"sc-14bejst-5"})(["height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:1.5rem 0 .5rem 0;"]),x=l.ZP.h3.withConfig({displayName:"styles__ProjectTitle",componentId:"sc-14bejst-6"})(["text-align:center;color:#fff;font-weight:",";"],(function(e){return e.theme.fontWeights.bold})),y=l.ZP.div.withConfig({displayName:"styles__Bullet",componentId:"sc-14bejst-7"})(["width:10px;height:10px;border-radius:50%;background-color:",";"],(function(e){return e.color})),b=l.ZP.p.withConfig({displayName:"styles__Warning",componentId:"sc-14bejst-8"})(["width:100%;text-align:center;color:#fff;font-weight:",";font-size:1.5rem;"],(function(e){return e.theme.fontWeights.bold})),w=l.ZP.a.withConfig({displayName:"styles__LinkToProject",componentId:"sc-14bejst-9"})(["color:#fff;border:1px solid ",";text-align:center;width:fit-content;padding:.4rem 2.5rem;border-radius:.25rem;cursor:pointer;@media (min-width:991.99px){transition:ease .4s all;&:hover{background-color:#fff;color:#000;}}"],(function(e){return e.theme.colors.gray50})),v=l.ZP.div.withConfig({displayName:"styles__Arrow",componentId:"sc-14bejst-10"})(["position:absolute;top:50%;z-index:99;transform:translateY(-50%);left:",";right:",";width:30px;height:30px;border-radius:50%;border:1px solid ",";cursor:pointer;@media (max-width:991.98px){display:none;}transition:ease .4s all;&:hover{border:1px solid #fff;&::before,&::after{background-color:#fff;}}&::before{content:'';position:absolute;top:55%;left:35%;transform:",";width:10px;height:2px;border-radius:3rem;background-color:",";}&::after{content:'';position:absolute;top:35%;left:35%;transform:",";width:10px;height:2px;border-radius:3rem;background-color:",";}"],(function(e){var t=e.left;return t&&t}),(function(e){var t=e.right;return t&&t}),(function(e){return e.theme.colors.gray50}),(function(e){return e.left?"rotate(45deg)":"rotate(-45deg)"}),(function(e){return e.theme.colors.gray50}),(function(e){return e.left?"rotate(-45deg)":"rotate(45deg)"}),(function(e){return e.theme.colors.gray50})),j=l.ZP.div.withConfig({displayName:"styles__Loading",componentId:"sc-14bejst-11"})(["width:50px;height:50px;border-top:2px solid #fff;border-left:2px solid #fff;border-radius:50%;margin:0 auto;animation:loading 1s linear infinite;@keyframes loading{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"]),C=r(5893);function _(e){var t=e.href,r=(0,c.useState)(0),o=r[0],s=r[1],l=(0,c.useState)([]),_=l[0],k=l[1],P=(0,c.useState)(!1),O=P[0],S=P[1],N=(0,c.useCallback)((0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,d.Z.getAll();case 3:t=e.sent,S(!1),t.data&&k(t.data.slice(0).reverse());case 6:case"end":return e.stop()}}),e)}))),[]);function Z(e){if(("left"!==e||0!==o)&&!("right"===e&&o<-1*(200*(_.length-2)-(_.length-40))))switch(e){case"right":s((function(e){return e-290}));break;case"left":s((function(e){return e+290}))}}return(0,c.useEffect)((function(){N()}),[N]),(0,C.jsx)(C.Fragment,{children:O?(0,C.jsx)(j,{}):_.length>0?(0,C.jsx)(u,{children:(0,C.jsxs)(f,{children:[_.length>3&&(0,C.jsx)(v,{left:"0",onClick:function(){return Z("left")}}),_.length>3&&(0,C.jsx)(v,{right:"0",onClick:function(){return Z("right")}}),(0,C.jsx)(p,{width:_.length,scrollX:o,children:_.map((function(e){return(0,C.jsxs)(h,{children:[(0,C.jsxs)(m,{children:[(0,C.jsx)(y,{color:"#FF5A5A"}),(0,C.jsx)(y,{color:"#FFC75A"}),(0,C.jsx)(y,{color:"#10C600"})]}),(0,C.jsxs)(g,{children:[(0,C.jsx)(x,{children:e.title}),(0,C.jsx)(a(),{href:t?"".concat(t,"/").concat(e._id):e._id,children:(0,C.jsx)(w,{children:"Acessar"})})]})]},e._id)}))})]})}):(0,C.jsx)(b,{children:"Nenhum projeto foi encontrado"})})}},4714:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});var n=r(2125).ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-198ygr-0"})(["width:100%;max-width:1120px;margin:0 auto;@media (max-width:991.98px){padding:0 .8rem;}"]),o=r(5893);function i(e){var t=e.children;return(0,o.jsx)(n,{children:t})}},7820:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return E},default:function(){return z}});var n=r(9008),o=r.n(n),i=r(5675),s=r.n(i),a={src:"/_next/static/media/Exit.2636c6fc.svg",height:24,width:24},c=r(2286),d=r.n(c),l=r(1664),u=r.n(l),f=r(1163),p=r.n(f),h=r(9610),m=r(4714),g=r(9287),x=r(2125),y=x.ZP.div.withConfig({displayName:"Dashboard__Container",componentId:"sc-1yzplm2-0"})(["display:flex;flex-direction:column;gap:3rem;padding-bottom:3rem;"]),b=x.ZP.header.withConfig({displayName:"Dashboard__Header",componentId:"sc-1yzplm2-1"})(["width:100%;padding:5rem 0;border-bottom:1px solid ",";display:flex;justify-content:space-between;"],(function(e){return e.theme.colors.gray50})),w=x.ZP.div.withConfig({displayName:"Dashboard__ProfileContainer",componentId:"sc-1yzplm2-2"})(["display:flex;align-items:center;gap:1rem;"]),v=x.ZP.div.withConfig({displayName:"Dashboard__PictureContainer",componentId:"sc-1yzplm2-3"})(["width:52px;height:52px;border-radius:50%;display:flex;justify-content:center;align-items:center;border:2px solid ",";.picture{border-radius:50%;}"],(function(e){return e.theme.colors.gray50})),j=x.ZP.div.withConfig({displayName:"Dashboard__ExitContainer",componentId:"sc-1yzplm2-4"})(["display:flex;align-items:center;justify-content:flex-end;"]),C=x.ZP.h2.withConfig({displayName:"Dashboard__Greetings",componentId:"sc-1yzplm2-5"})(["font-size:1.5rem;font-weight:",";color:#fff;"],(function(e){return e.theme.fontWeights.bold})),_=x.ZP.main.withConfig({displayName:"Dashboard__MainContainer",componentId:"sc-1yzplm2-6"})(["width:100%;padding:2rem 3rem 8rem 3rem;border-radius:1rem;display:flex;flex-direction:column;gap:3rem;@media (max-width:991.98px){padding:2rem 0;}"]),k=x.ZP.button.withConfig({displayName:"Dashboard__ExitButtonContainer",componentId:"sc-1yzplm2-7"})(["height:fit-content;display:flex;justify-content:center;align-items:center;gap:.5rem;border:1px solid ",";border-radius:3rem;padding:.5rem 2rem;background:transparent;transition:ease .4s all;&:hover{background:#151515;}"],(function(e){return e.theme.colors.gray50})),P=x.ZP.span.withConfig({displayName:"Dashboard__ExitButtonTitle",componentId:"sc-1yzplm2-8"})(["font-size:1rem;font-weight:",";color:#fff;"],(function(e){return e.theme.fontWeights.bold})),O=x.ZP.h3.withConfig({displayName:"Dashboard__Title",componentId:"sc-1yzplm2-9"})(["width:100%;text-align:center;font-size:2rem;color:#fff;font-weight:",";margin-bottom:",";"],(function(e){return e.theme.fontWeights.semiBold}),(function(e){var t=e.marginBottom;return t||"3rem"})),S=x.ZP.div.withConfig({displayName:"Dashboard__SetContainer",componentId:"sc-1yzplm2-10"})(["display:flex;flex-direction:column;gap:1rem;"]),N=x.ZP.section.withConfig({displayName:"Dashboard__SectionContainer",componentId:"sc-1yzplm2-11"})(["display:flex;flex-direction:column;padding-bottom:5rem;"]),Z=x.ZP.div.withConfig({displayName:"Dashboard__ButtonContainer",componentId:"sc-1yzplm2-12"})(["width:100%;display:flex;justify-content:center;"]),I=r(5893),E=!0,z=function(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(o(),{children:(0,I.jsx)("title",{children:"Home | Dashboard"})}),(0,I.jsx)(m.E,{children:(0,I.jsxs)(y,{children:[(0,I.jsxs)(b,{children:[(0,I.jsxs)(w,{children:[(0,I.jsx)(v,{children:(0,I.jsx)(s(),{src:"https://github.com/josuenm.png",alt:"Foto de perfil",layout:"fixed",className:"picture",width:50,height:50})}),(0,I.jsx)(C,{children:"Ol\xe1 Josu\xe9!"})]}),(0,I.jsx)(j,{children:(0,I.jsxs)(k,{onClick:function(){d().destroy({},"jnm.token"),p().push("/login")},children:[(0,I.jsx)(s(),{src:a,alt:"Bot\xe3o de sair",layout:"fixed",width:18,height:18}),(0,I.jsx)(P,{children:"Sair"})]})})]}),(0,I.jsx)(_,{children:(0,I.jsxs)(S,{children:[(0,I.jsxs)(N,{children:[(0,I.jsx)(O,{marginBottom:"1.5rem",children:"Criar projeto"}),(0,I.jsx)(Z,{children:(0,I.jsx)(u(),{href:"/dashboard/create",children:(0,I.jsx)(g.z,{title:"Criar"})})})]}),(0,I.jsxs)(N,{children:[(0,I.jsx)(O,{children:"Projetos"}),(0,I.jsx)(h.U,{href:"/dashboard"})]})]})})]})})]})}},6860:function(e,t,r){"use strict";var n=r(9669),o=r.n(n)().create({baseURL:"".concat("http://localhost:8080","/api")});t.Z=o},9901:function(e,t,r){"use strict";var n=r(29),o=r(7794),i=r.n(o),s=r(6860),a={getAll:function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/project/getAll");case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),findOne:function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/project/".concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{status:e.t0.response.status});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=(0,n.Z)(i().mark((function e(t,r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("/project/create",r,{headers:{"jnm.token":t}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{status:e.t0.response.status});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()};t.Z=a},6117:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(7820)}])},1163:function(e,t,r){e.exports=r(1587)},2286:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var o=r(6489),i=r(9328),s=r(1022);function a(e,t){var r,n;return(null===(n=null===(r=null===e||void 0===e?void 0:e.req)||void 0===r?void 0:r.headers)||void 0===n?void 0:n.cookie)?o.parse(e.req.headers.cookie,t):s.isBrowser()?o.parse(document.cookie,t):{}}function c(e,t,r,a){var c,d;if(void 0===a&&(a={}),(null===(c=null===e||void 0===e?void 0:e.res)||void 0===c?void 0:c.getHeader)&&e.res.setHeader){if(null===(d=null===e||void 0===e?void 0:e.res)||void 0===d?void 0:d.finished)return console.warn('Not setting "'+t+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var l=e.res.getHeader("Set-Cookie")||[];"string"===typeof l&&(l=[l]),"number"===typeof l&&(l=[]);var u=i.parse(l,{decodeValues:!1}),f=s.createCookie(t,r,a),p=[];u.forEach((function(e){if(!s.areCookiesEqual(e,f)){var t=o.serialize(e.name,e.value,n({encode:function(e){return e}},e));p.push(t)}})),p.push(o.serialize(t,r,a)),e.res.setHeader("Set-Cookie",p)}if(s.isBrowser()){if(a&&a.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=o.serialize(t,r,a)}return{}}function d(e,t,r){return c(e,t,"",n(n({},r||{}),{maxAge:-1}))}t.parseCookies=a,t.setCookie=c,t.destroyCookie=d,t.default={set:c,get:a,destroy:d}},1022:function(e,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function n(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++){var i=r[o];if(e[i]!==t[i])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.areCookiesEqual=t.hasSameProperties=t.createCookie=t.isBrowser=void 0,t.isBrowser=function(){return"undefined"!==typeof window},t.createCookie=function(e,t,n){var o=n.sameSite;!0===o&&(o="strict"),void 0!==o&&!1!==o||(o="lax");var i=r(r({},n),{sameSite:o});return delete i.encode,r({name:e,value:t},i)},t.hasSameProperties=n,t.areCookiesEqual=function(e,t){var o=e.sameSite===t.sameSite;return"string"===typeof e.sameSite&&"string"===typeof t.sameSite&&(o=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),n(r(r({},e),{sameSite:void 0}),r(r({},t),{sameSite:void 0}))&&o}},9328:function(e){"use strict";var t={decodeValues:!0,map:!1,silent:!1};function r(e){return"string"===typeof e&&!!e.trim()}function n(e,n){var o=e.split(";").filter(r),i=o.shift().split("="),s=i.shift(),a=i.join("=");n=n?Object.assign({},t,n):t;try{a=n.decodeValues?decodeURIComponent(a):a}catch(d){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+a+"'. Set options.decodeValues to false to disable this feature.",d)}var c={name:s,value:a};return o.forEach((function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),n=t.join("=");"expires"===r?c.expires=new Date(n):"max-age"===r?c.maxAge=parseInt(n,10):"secure"===r?c.secure=!0:"httponly"===r?c.httpOnly=!0:"samesite"===r?c.sameSite=n:c[r]=n})),c}function o(e,o){if(o=o?Object.assign({},t,o):t,!e)return o.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var i=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];i||!e.headers.cookie||o.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=i}if(Array.isArray(e)||(e=[e]),(o=o?Object.assign({},t,o):t).map){return e.filter(r).reduce((function(e,t){var r=n(t,o);return e[r.name]=r,e}),{})}return e.filter(r).map((function(e){return n(e,o)}))}e.exports=o,e.exports.parse=o,e.exports.parseString=n,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var t,r,n,o,i,s=[],a=0;function c(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,i=!1;c();)if(","===(r=e.charAt(a))){for(n=a,a+=1,c(),o=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(i=!0,a=o,s.push(e.substring(t,n)),t=a):a=n+1}else a+=1;(!i||a>=e.length)&&s.push(e.substring(t,e.length))}return s}}},function(e){e.O(0,[247,646,774,888,179],(function(){return t=6117,e(e.s=t);var t}));var t=e.O();_N_E=t}]);