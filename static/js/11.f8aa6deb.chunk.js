(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[11],{1084:function(e,t,n){var r=n(375),i=n(1085);e.exports=function(e,t){return e&&e.length?i(e,r(t,2)):0}},1085:function(e,t){e.exports=function(e,t){for(var n,r=-1,i=e.length;++r<i;){var c=t(e[r]);void 0!==c&&(n=void 0===n?c:n+c)}return n}},1108:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(2),i=n(31),c=n(971),a=n.n(c),o=n(193),u=n.n(o),l=n(1084),s=n.n(l),f=n(253),d=n(910),v=n(264),b=n(889),j=n(251),p=n(891),O=n(6),m=n(3),h={serials:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",movies:"\u0424\u0438\u043b\u044c\u043c\u044b"},x=function(){var e=Object(i.j)().watchingType,t=void 0===e?"serials":e,n=Object(p.a)("watching".concat(a()(t)),[f.a.True]),c=n.data,o=n.isLoading,l=Object(r.useMemo)((function(){return s()(null===c||void 0===c?void 0:c.items,(function(e){return+(e.new||0)}))}),[null===c||void 0===c?void 0:c.items]),x="serials"===t?"\u041d\u043e\u0432\u044b\u0435 \u044d\u043f\u0438\u0437\u043e\u0434\u044b":"\u041d\u0435\u0434\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b",g=l?"".concat(x," (").concat(l,")"):x;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b.a,{title:x}),Object(m.jsx)(d.a,{title:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{children:g}),Object(m.jsx)("div",{className:"flex",children:u()(h,(function(e,n){return Object(m.jsx)(v.a,{className:"mr-2",replace:!0,active:t===n,href:Object(i.f)(O.a.Watching,{watchingType:n}),children:e},n)}))})]}),items:null===c||void 0===c?void 0:c.items,loading:o})]})}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(11),i=n(894),c=n(3),a=function(e){return Object(c.jsx)(i.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},890:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return j}));var r=n(11),i=n(56),c=n(2),a=n(51),o=n.n(a),u=n(61),l=n(105),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,a=t.onLeaveViewport,o=Object(c.useState)(),s=Object(u.a)(o,2),f=s[1],d=Object(c.useRef)(null),v=Object(c.useRef)(!1),b=Object(c.useRef)(!1),j=Object(c.useRef)(0),p=Object(c.useRef)(0),O=Object(c.useCallback)((function(){if(e.current&&d.current){var t=Object(l.findDOMNode)(e.current);t&&d.current.observe(t)}}),[e,d]),m=Object(c.useCallback)((function(){if(e.current&&d.current){var t=Object(l.findDOMNode)(e.current);t&&(d.current.unobserve(t),d.current.disconnect(),d.current=null)}}),[e,d]),h=Object(c.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,c=t.intersectionRatio,o="undefined"!==typeof n?n:c>0;if(!b.current&&o)return b.current=!0,null===i||void 0===i||i(),j.current+=1,v.current=o,void f(o);b.current&&!o&&(b.current=!1,null===a||void 0===a||a(),r.disconnectOnLeave&&d.current&&d.current.disconnect(),p.current+=1,v.current=o,f(o))}),[d,r.disconnectOnLeave,i,a]),x=Object(c.useCallback)((function(){d.current||(d.current=new IntersectionObserver(h,n))}),[d,n,h]);return Object(c.useEffect)((function(){return x(),O(),function(){m()}}),[x,O,m]),{inViewport:v.current,enterCount:j.current,leaveCount:p.current}},f=n(1086);var d=function(e){var t=Object(f.a)();return Object(c.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},v=n(3),b=["children","className","onScrollToEnd"],j=Object(c.createContext)({}),p=function(e){var t=e.children,n=e.className,a=e.onScrollToEnd,u=Object(i.a)(e,b),l=Object(c.useRef)(null),f=d("scrollable"),p=Object(c.useMemo)((function(){return{id:f}}),[f]);return s(l,{onEnterViewport:a}),Object(v.jsxs)("div",Object(r.a)(Object(r.a)({className:o()("overflow-y-auto h-full",n)},u),{},{id:f,children:[Object(v.jsx)(j.Provider,{value:p,children:t}),a&&Object(v.jsx)("div",{className:"h-40",ref:l})]}))}},891:function(e,t,n){"use strict";var r=n(104),i=n(2),c=n(929),a=n(253);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,o=Object(i.useMemo)((function(){return new a.c}),[]),u=Object(c.a)([e].concat(Object(r.a)(t)),(function(){return o[e].apply(o,Object(r.a)(t))}),n);return u}},892:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),i=n(56),c=n(51),a=n.n(c),o=n(251),u=n(3),l=["children","className"],s=function(e){var t=e.children,n=e.className,c=Object(i.a)(e,l);return t?Object(u.jsx)(o.a,Object(r.a)(Object(r.a)({},c),{},{className:a()("flex justify-between items-center m-1 mb-3 h-9",n),as:"div",children:t})):null}},893:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(11),i=n(56),c=n(51),a=n.n(c),o=n(2),u=n(914),l=n.n(u),s=n(890),f=n(3),d=function(e){var t=Object(o.useContext)(s.a).id;return Object(f.jsx)(l.a,Object(r.a)(Object(r.a)({once:!0,offset:100,scrollContainer:t&&"#".concat(t)},e),{},{placeholder:Object(f.jsx)("div",{className:"w-full h-full"})}))};var v=d,b=n(252),j=["className","wrapperClassName","source","caption","children"],p=function(e){var t=e.className,n=e.wrapperClassName,c=e.source,o=e.caption,u=e.children,l=Object(i.a)(e,j);return Object(f.jsxs)(b.a,Object(r.a)(Object(r.a)({},l),{},{className:a()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(f.jsxs)(v,{className:a()("h-40 m-1 flex flex-col relative",t),children:[Object(f.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:c,alt:o}),u]}),o&&Object(f.jsx)("div",{className:"px-2",children:Object(f.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:o})})]}))}},896:function(e,t,n){"use strict";function r(e,t,n){var r=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(r," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function i(e,t,n){var r=(null===t||void 0===t?void 0:t.title)||"",i="s".concat((null===n||void 0===n?void 0:n.number)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1);return n?r?"".concat(r," (").concat(i,")"):i:r}function c(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}))},902:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r,i,c=n(2),a=n(31),o=n(51),u=n.n(o),l=n(253),s=n(254),f=n(893),d=n(6),v=["title","titleId"];function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function p(e,t){var n=e.title,a=e.titleId,o=j(e,v);return c.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":a},o),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M436.714 26.001H75.287c-27.21 0-49.285 22.075-49.285 49.286v361.427c0 27.211 22.075 49.285 49.285 49.285h361.427c27.211 0 49.284-22.074 49.284-49.285V75.287c0-27.211-22.073-49.286-49.284-49.286z",fill:"#fbbf14"})),i||(i=c.createElement("path",{fill:"#273238",d:"M91.716 190.287h33.883v131.222H91.716zM241.831 321.509h-29.469v-88.714l-11.912 88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39 20.329 6.16 40.968 8.934 61.504l7.803-61.504h44.152v131.222zM330.544 236.8c0-8.317.31-17.25-1.438-25.055-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222c88.408.103 77.01 6.16 77.01-84.709zm-43.022 61.913v-85.94c12.219 0 10.576 6.47 10.576 16.428v50.622c.001 9.958 1.951 19.199-10.576 18.89zM395.949 223.656c-9.137 0-15.298 2.773-21.457 9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852 6.982 12.218 10.063 21.457 10.063 20.331 0 22.795-15.607 22.795-31.729v-36.963c0-17.763-.821-30.907-22.795-30.907zm-16.427 80.706c-1.642 0-3.081-.823-3.902-2.465-2.26-5.237-1.128-45.281-1.128-45.897 0-3.901-1.132-13.04 5.03-13.04 7.496 0 6.364 7.496 6.364 13.04v33.574c.001 5.546 1.644 14.788-6.364 14.788z"})))}var O,m=c.forwardRef(p),h=(n.p,["title","titleId"]);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function w(e,t){var n=e.title,r=e.titleId,i=g(e,h);return c.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#ff6600",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,O||(O=c.createElement("path",{d:"M15.518 10.736A8 8 0 11.482 5.264a8 8 0 0115.036 5.472zM8.94 8.342a1 1 0 10-1.88-.684 1 1 0 001.88.684zm-2.906 2.135A2 2 0 102.275 9.11a2 2 0 003.76 1.368zM8.086 4.84A2 2 0 104.328 3.47a2 2 0 003.758 1.368zm5.639 2.052a2 2 0 10-3.76-1.368 2 2 0 003.76 1.368zm-2.053 5.638a2 2 0 10-3.758-1.368 2 2 0 003.758 1.368z"})))}var y=c.forwardRef(w),N=(n.p,n(896)),E=n(904),k=n.n(E);var M=n(3),S=function(e){var t=e.item,n=e.className,r=e.wrapperClassName,i=e.showViews,o=e.noCaption,v=e.disableNavigation,b=Object(a.h)(),j=Object(c.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),p=Object(c.useMemo)((function(){return i&&(null===t||void 0===t?void 0:t.views)&&(e=null===t||void 0===t?void 0:t.views,k()(e))||"";var e}),[i,null===t||void 0===t?void 0:t.views]),O=Object(c.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&!v&&b.push(Object(d.b)(d.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,v,b]),h=Object(N.b)(t);return Object(M.jsxs)(f.a,{onClick:O,source:null===t||void 0===t?void 0:t.posters.medium,caption:o?"":j,className:u()("h-72",n),wrapperClassName:r,children:[(null===t||void 0===t?void 0:t.new)&&Object(M.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new}),p&&Object(M.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(M.jsx)(s.a,{name:"visibility"}),p]}),(h||(null===t||void 0===t?void 0:t.ac3)||(null===t||void 0===t?void 0:t.advert))&&Object(M.jsxs)("div",{className:"absolute top-2 left-2 h-6 bg-black bg-opacity-50 rounded flex items-center",children:[h&&Object(M.jsx)(s.a,{name:h}),(null===t||void 0===t?void 0:t.ac3)===l.a.True&&Object(M.jsx)(s.a,{name:"graphic_eq"}),(null===t||void 0===t?void 0:t.advert)&&Object(M.jsx)(s.a,{name:"report"})]}),((null===t||void 0===t?void 0:t.rating)||(null===t||void 0===t?void 0:t.imdb_rating)||(null===t||void 0===t?void 0:t.kinopoisk_rating))&&Object(M.jsxs)("div",{className:"absolute bottom-2 left-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex justify-between items-center",children:[Object(M.jsxs)("div",{className:"flex items-center justify-start w-1/3",children:[Object(M.jsx)(m,{className:"h-3 w-3 mr-1"}),Object(M.jsx)("span",{children:(t.imdb_rating||0).toFixed(1)})]}),Object(M.jsxs)("div",{className:"flex items-center justify-center w-1/3",children:[Object(M.jsx)(y,{className:"h-3 w-3 mr-1"}),Object(M.jsx)("span",{children:(t.kinopoisk_rating||0).toFixed(1)})]}),Object(M.jsxs)("div",{className:"flex items-center justify-end w-1/3",children:[Object(M.jsx)(s.a,{name:"thumb_up"}),Object(M.jsxs)("span",{children:[t.rating_percentage||0,"%"]})]})]})]})}},904:function(e,t,n){"use strict";var r=n(905),i=n(30),c=i.mark(u);Object.defineProperty(t,"__esModule",{value:!0}),t.millify=void 0;var a=n(908),o=n(909);function u(e){var t,n;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=1e3;case 1:if(!((n=e/t)<1)){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,n;case 7:t*=1e3,r.next=1;break;case 10:case"end":return r.stop()}}),c)}function l(e,t){var n,i=t?Object.assign(Object.assign({},a.defaultOptions),t):a.defaultOptions;if(!Array.isArray(i.units)||!i.units.length)throw new Error("Option `units` must be a non-empty array");var c=o.parseValue(e),l=c<0?"-":"";c=Math.abs(c);var s,f=0,d=r(u(c));try{for(d.s();!(s=d.n()).done;){c=s.value,f+=1}}catch(x){d.e(x)}finally{d.f()}if(f>=i.units.length)return e.toString();var v,b=o.roundTo(c,i.precision),j=r(u(b));try{for(j.s();!(v=j.n()).done;){b=v.value,f+=1}}catch(x){j.e(x)}finally{j.f()}var p=null!==(n=i.units[f])&&void 0!==n?n:"",O=i.lowercase?p.toLowerCase():p,m=i.space?" ":"",h=b.toString().replace(a.defaultOptions.decimalSeparator,i.decimalSeparator);return"".concat(l).concat(h).concat(m).concat(O)}t.millify=l,t.default=l},905:function(e,t,n){var r=n(906);e.exports=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,c=function(){};return{s:c,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}},906:function(e,t,n){var r=n(907);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},907:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},908:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0,t.defaultOptions={decimalSeparator:".",lowercase:!1,precision:1,space:!1,units:["","K","M","B","T","P","E"]}},909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.roundTo=t.parseValue=void 0,t.parseValue=function(e){var t=parseFloat(e.toString());if(isNaN(t))throw new Error("Input value is not a number");if(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)throw new RangeError("Input value is outside of safe integer range");return t},t.roundTo=function(e,t){if(!Number.isFinite(e))throw new Error("Input value is not a finite number");if(!Number.isInteger(t)||t<0)throw new Error("Precision is not a positive integer");return Number.isInteger(e)?e:parseFloat(e.toFixed(t))}},910:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(104),i=(n(2),n(51)),c=n.n(i),a=n(193),o=n.n(a),u=n(890),l=n(892),s=n(902),f=n(3),d=function(e){var t=e.title,n=e.items,i=e.loading,a=e.onScrollToEnd,d=e.scrollable,v=void 0===d||d,b=e.className,j=e.titleClassName,p=Object(f.jsxs)("div",{children:[Object(f.jsx)(l.a,{className:j,children:t}),Object(f.jsxs)("div",{className:c()("flex flex-wrap",b),children:[o()(n,(function(e){return Object(f.jsx)(s.a,{item:e},e.id)})),i&&o()(Object(r.a)(new Array(15)),(function(e,t){return Object(f.jsx)(s.a,{},t)}))]})]});return v?Object(f.jsx)(u.b,{onScrollToEnd:a,children:p}):p}},929:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(928),i=n(5),c=n(895);function a(e,t,n){var a=Object(i.l)(e,t,n);return Object(c.a)(a,r.a)}},945:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},971:function(e,t,n){var r=n(390),i=n(972);e.exports=function(e){return i(r(e).toLowerCase())}},972:function(e,t,n){var r=n(973)("toUpperCase");e.exports=r},973:function(e,t,n){var r=n(974),i=n(945),c=n(976),a=n(390);e.exports=function(e){return function(t){t=a(t);var n=i(t)?c(t):void 0,o=n?n[0]:t.charAt(0),u=n?r(n,1).join(""):t.slice(1);return o[e]()+u}}},974:function(e,t,n){var r=n(975);e.exports=function(e,t,n){var i=e.length;return n=void 0===n?i:n,!t&&n>=i?e:r(e,t,n)}},975:function(e,t){e.exports=function(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var c=Array(i);++r<i;)c[r]=e[r+t];return c}},976:function(e,t,n){var r=n(977),i=n(945),c=n(978);e.exports=function(e){return i(e)?c(e):r(e)}},977:function(e,t){e.exports=function(e){return e.split("")}},978:function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+i+")"+"?",l="[\\ufe0e\\ufe0f]?",s=l+u+("(?:\\u200d(?:"+[c,a,o].join("|")+")"+l+u+")*"),f="(?:"+[c+r+"?",r,a,o,n].join("|")+")",d=RegExp(i+"(?="+i+")|"+f+s,"g");e.exports=function(e){return e.match(d)||[]}}}]);
//# sourceMappingURL=11.f8aa6deb.chunk.js.map