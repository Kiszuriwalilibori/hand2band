(this.webpackJsonpunsplash=this.webpackJsonpunsplash||[]).push([[6],{152:function(e,t,n){"use strict";n.r(t);var s=n(7),c=n(0),a=n(3),r=n(27),i=n(78),l=n(13),o=n(18),u=c.memo((function(e){var t=e.ary;return Object(s.jsxs)("ul",{className:"search-list",children:[Object(s.jsx)("span",{className:"search-text search-text--smaller",children:"Trending: "}),t.map((function(e,t,n){return Object(s.jsx)("li",{className:"search-text search-text--smaller search-list-item",children:t===n.length-1?e:e+","},t)}))]})})),h=c.memo((function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{className:"search__unsplash",children:"Unsplash"}),Object(s.jsxs)("h1",{className:"search__header search-text search-text--small",children:["The internet\u2019s source of",Object(s.jsxs)("a",{className:"search__license",href:"https://unsplash.com/license",children:[" ","freely-usable images"]})]}),Object(s.jsx)("p",{className:"search__motto",children:"Powered by creators everywhere."})]})})),b=n(74),j=Object(a.g)(Object(r.b)(null,(function(e){return{fetchBackgroundImage:function(){return e(Object(o.d)())}}}))((function(e){var t=e.fetchBackgroundImage;return Object(c.useEffect)((function(){t()}),[t]),Object(s.jsx)("section",{className:"search__background",children:Object(s.jsxs)("div",{className:"form_container",children:[Object(s.jsx)(h,{}),Object(s.jsx)(i.a,{}),Object(s.jsx)(u,{ary:l.b}),Object(s.jsx)(b.a,{})]})})})));t.default=j},74:function(e,t,n){"use strict";var s=n(7),c=(n(0),n(151)),a=n(148),r=n(66),i=n(27),l=n(18),o=Object(r.a)({root:{background:"#688B69;",color:"#F5F2AA",fontSize:"1.25rem",border:"1px solid 4d684d",boxShadow:"inset 0 0 5px #4d684d, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"}})(a.a),u=Object(i.b)((function(e){return{isOpen:e.images.error.value,message:e.images.error.code}}),(function(e){return{close:function(){return e(Object(l.a)())}}}))((function(e){var t=e.isOpen,n=e.close,a=e.message;return Object(s.jsx)(c.a,{open:t,autoHideDuration:5e3,onClose:n,children:Object(s.jsxs)(o,{severity:"success",variant:"filled",children:["Wyst\u0105pi\u0142 b\u0142\u0105d:",Object(s.jsx)("br",{}),a,Object(s.jsx)("br",{})]})})}));t.a=u},78:function(e,t,n){"use strict";var s=n(97),c=n(7),a=n(0),r=n(3),i=n(71),l=n.n(i),o=n(96),u=n(27),h=n(18),b=function(){return Object(c.jsx)("button",{className:"form__button",children:Object(c.jsx)("svg",{width:"32",height:"32",className:"form__svg",version:"1.1",viewBox:"0 0 32 32","aria-hidden":"false",children:Object(c.jsx)("path",{d:"M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"})})})},j=function(e){var t=e.isVisible,n=e.click;return t.length?Object(c.jsx)("button",{className:"form__input-clear",onClick:n,children:Object(c.jsx)("svg",{width:"32",height:"32",className:"form__input-clear-svg",version:"1.1",viewBox:"0 0 32 32","aria-hidden":"false",children:Object(c.jsx)("path",{d:"M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"})})}):null},f=function(e){var t=e.pattern,n=e.callback;return Object(c.jsx)("input",{type:"text",className:"form__input",value:t,onChange:n,autoCapitalize:"none",placeholder:"Search free high-resolution photos"})},m=n(11),d=Object(u.b)((function(e){return{isVisible:e.images.hintsMessageVisible}}))((function(e){var t=e.isVisible,n="/images"===e.path?"noHints--short search-text--dark":"noHints search-text--dark";return t?Object(c.jsx)("h2",{className:n,children:"Nie znaleziono podpowiedzi dla wprowadzonego tekstu"}):null})),p=function(e){var t=e.hint;return t&&t.label&&t.value?Object(c.jsx)("div",{"data-image_hint":t.value,className:"images-hint",children:t.label}):null},x=Object(r.g)(Object(u.b)((function(e){return{hints:e.images.hints}}),(function(e){return{fetchHints:function(t){return e(Object(h.e)(t))},clearHints:function(t){return e(Object(h.b)(t))},fetchImages:function(t){return e(Object(h.f)(t))}}}))((function(e){var t=e.fetchHints,n=e.hints,i=e.clearHints,u=e.fetchImages,h=Object(r.f)(),x=Object(a.useState)(""),O=Object(s.a)(x,2),g=O[0],v=O[1];Object(a.useEffect)((function(){t(g)}),[g,t]);var _=e.match.path;var N=Object(a.useCallback)(l()((function(e){!function(e){if("Enter"===e.key){var t=document.querySelectorAll(":hover"),n=Array.from(t),s=n[n.length-1];s.className.includes("option")&&(u(s.textContent),h.push("./images"))}}(e)}),300),[]);return Object(c.jsxs)("div",{onKeyDown:N,children:[Object(c.jsxs)("form",{className:Object(m.a)(_,"form"),onSubmit:function(e){return e.preventDefault(),!1},children:[Object(c.jsx)(b,{}),Object(c.jsx)(f,{pattern:g,callback:function(e){e.preventDefault(),v(e.target.value)}}),Object(c.jsx)(j,{isVisible:g,click:function(e){v(""),i()}})]}),n&&n.length&&"/"===_?Object(c.jsx)(o.a,{className:"select-top",id:"BigSelect",value:g,isClearable:!0,menuIsOpen:!0,onChange:function(e){u(e.value),h.push("./images")},options:n}):null,n&&n.length&&"/images"===_?Object(c.jsx)("div",{className:"images-hints-wrapper",id:"images-hints-wrapper",children:n.map((function(e,t){return Object(c.jsx)(p,{hint:e},t)}))}):null,Object(c.jsx)(d,{path:_})]})})));t.a=x}}]);
//# sourceMappingURL=6.eda9f2d7.chunk.js.map