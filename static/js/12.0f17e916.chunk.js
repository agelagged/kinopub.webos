(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[12],{1070:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(11),i=n(32),c=n.n(i),s=n(53),a=n(73),u=n(2),o=n(31),l=n(253),d=n(930),f=n(888),h=n(892),b=n(196),v=n(270),p=n(954),j=n(928),O=n(3),m=function(e,t,n){var r=function(e,t,n){return Object(u.useMemo)((function(){var r,i,c=null===(r=e.videos||(null===t||void 0===t?void 0:t.episodes))||void 0===r?void 0:r.find((function(e){return e.number===n.number+1}));if(c)return c;var s=null===(i=e.seasons)||void 0===i?void 0:i.find((function(e){return e.number===t.number+1}));return s?s.episodes[0]:void 0}),[e,t,n])}(e,t,n);return[function(e,t,n){return Object(u.useMemo)((function(){var r,i,c=null===(r=e.videos||(null===t||void 0===t?void 0:t.episodes))||void 0===r?void 0:r.find((function(e){return e.number===n.number-1}));if(c)return c;var s=null===(i=e.seasons)||void 0===i?void 0:i.find((function(e){return e.number===t.number-1}));return s?s.episodes[s.episodes.length-1]:void 0}),[e,t,n])}(e,t,n),r]},y=function(){var e=Object(o.g)(),t=Object(o.h)(),n=Object(b.a)("watchingMarkTime").watchingMarkTimeAsync,i=Object(v.a)("streaming_type"),y=Object(a.a)(i,1)[0],k=t.state,g=k.item,T=k.video,x=k.season,R=Object(u.useState)(T),C=Object(a.a)(R,2),S=C[0],w=C[1],E=m(g,x,S),I=Object(a.a)(E,2),N=I[0],U=I[1],Q=Object(h.a)("itemMediaLinks",[S.id]),F=Object(u.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,r){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.number,e.next=3,n([g.id,r,i,null===x||void 0===x?void 0:x.number]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[n,g,x]),A=Object(u.useMemo)((function(){return(null===Q||void 0===Q?void 0:Q.data)?{title:Object(p.a)(g,S,x),description:S.title,poster:g.posters.wide||g.posters.big,audios:Object(j.a)(S.audios),sources:Object(j.b)(Q.data.files,y),subtitles:Object(j.c)(Q.data.subtitles),startTime:S.watching.status===l.b.Watching?S.watching.time:0}:null}),[g,x,S,null===Q||void 0===Q?void 0:Q.data,y]),L=Object(u.useCallback)((function(e){F(S,e)}),[F,S]),P=Object(u.useCallback)((function(t){F(S,t),U?w(U):e.goBack()}),[F,e,S,U]),D=Object(u.useCallback)((function(e){var t=e.currentTime;F(S,t),N&&w(N)}),[F,S,N]),B=Object(u.useCallback)((function(e){var t=e.currentTime;F(S,t),U&&w(U)}),[F,S,U]),M=Object(u.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(S,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[F,S]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440: ".concat(g.title," - \u0412\u0438\u0434\u0435\u043e")}),A&&Object(O.jsx)(d.a,Object(r.a)(Object(r.a)({},A),{},{onPause:L,onEnded:P,onJumpBackward:D,onJumpForward:B,onTimeSync:M}),S.id)]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),i=n(893),c=n(3),s=function(e){return Object(c.jsx)(i.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),i=n.n(r),c=n(22);function s(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var a=i.a.createContext(s()),u=n(255);function o(e,t){var n=i.a.useRef(!1),r=i.a.useState(0)[1],s=Object(u.b)(),o=i.a.useContext(a),l=s.defaultQueryObserverOptions(e);l.optimisticResults=!0,l.onError&&(l.onError=c.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=c.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=c.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(o.isReset()||(l.retryOnMount=!1));var d=i.a.useState((function(){return new t(s,l)}))[0],f=d.getOptimisticResult(l);if(i.a.useEffect((function(){n.current=!0,o.clearReset();var e=d.subscribe(c.a.batchCalls((function(){n.current&&r((function(e){return e+1}))})));return d.updateResult(),function(){n.current=!1,e()}}),[o,d]),i.a.useEffect((function(){d.setOptions(l,{listeners:!1})}),[l,d]),l.suspense&&f.isLoading)throw d.fetchOptimistic(l).then((function(e){var t=e.data;null==l.onSuccess||l.onSuccess(t),null==l.onSettled||l.onSettled(t,null)})).catch((function(e){o.clearReset(),null==l.onError||l.onError(e),null==l.onSettled||l.onSettled(void 0,e)}));if((l.suspense||l.useErrorBoundary)&&f.isError&&!f.isFetching)throw f.error;return"tracked"===l.notifyOnChangeProps&&(f=d.trackResult(f)),f}},892:function(e,t,n){"use strict";var r=n(105),i=n(2),c=n(907),s=n(253);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=Object(i.useMemo)((function(){return new s.c}),[]),u=Object(c.a)([e].concat(Object(r.a)(t)),(function(){return a[e].apply(a,Object(r.a)(t))}),n);return u}},894:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(6),i=n(30),c=n(5),s=n(22),a=n(107),u=n(67),o=n(152),l=n(68),d=function(e){function t(t,n){var r;return(r=e.call(this)||this).client=t,r.options=n,r.trackedProps=[],r.previousSelectError=null,r.bindMethods(),r.setOptions(n),r}Object(i.a)(t,e);var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),f(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&b(e,t));var e,t},n.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&b(e,t));var e,t},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(e,t){var n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();var i=this.hasListeners();i&&h(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(t),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.refetchInterval===n.refetchInterval||this.updateRefetchInterval()},n.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(e){var t=this,n={};return Object.keys(e).forEach((function(r){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){var n=r;return t.trackedProps.includes(n)||t.trackedProps.push(n),e[n]}})})),n},n.getNextResult=function(e){var t=this;return new Promise((function(n,r){var i=t.subscribe((function(t){t.isFetching||(i(),t.isError&&(null==e?void 0:e.throwOnError)?r(t.error):n(t))}))}))},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(e){return this.fetch(e)},n.fetchOptimistic=function(e){var t=this,n=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,n);return r.fetch().then((function(){return t.createResult(r,n)}))},n.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},n.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(c.i)),t},n.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!c.e&&!this.currentResult.isStale&&Object(c.f)(this.options.staleTime)){var t=Object(c.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},n.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!c.e&&!1!==this.options.enabled&&Object(c.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||a.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},n.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},n.createResult=function(e,t){var n,r=this.currentQuery,i=this.options,s=this.currentResult,a=this.currentResultState,u=this.currentResultOptions,l=e!==r,d=l?e.state:this.currentQueryInitialState,v=l?this.currentResult:this.previousQueryResult,p=e.state,j=p.dataUpdatedAt,O=p.error,m=p.errorUpdatedAt,y=p.isFetching,k=p.status,g=!1,T=!1;if(t.optimisticResults){var x=this.hasListeners(),R=!x&&f(e,t),C=x&&h(e,r,t,i);(R||C)&&(y=!0,j||(k="loading"))}if(t.keepPreviousData&&!p.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==k)n=v.data,j=v.dataUpdatedAt,k=v.status,g=!0;else if(t.select&&"undefined"!==typeof p.data)if(s&&p.data===(null==a?void 0:a.data)&&t.select===(null==u?void 0:u.select)&&!this.previousSelectError)n=s.data;else try{n=t.select(p.data),!1!==t.structuralSharing&&(n=Object(c.n)(null==s?void 0:s.data,n)),this.previousSelectError=null}catch(w){Object(o.a)().error(w),O=w,this.previousSelectError=w,m=Date.now(),k="error"}else n=p.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof n&&"loading"===k){var S;if((null==s?void 0:s.isPlaceholderData)&&t.placeholderData===(null==u?void 0:u.placeholderData))S=s.data;else if(S="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof S)try{S=t.select(S),!1!==t.structuralSharing&&(S=Object(c.n)(null==s?void 0:s.data,S)),this.previousSelectError=null}catch(w){Object(o.a)().error(w),O=w,this.previousSelectError=w,m=Date.now(),k="error"}"undefined"!==typeof S&&(k="success",n=S,T=!0)}return{status:k,isLoading:"loading"===k,isSuccess:"success"===k,isError:"error"===k,isIdle:"idle"===k,data:n,dataUpdatedAt:j,error:O,errorUpdatedAt:m,failureCount:p.fetchFailureCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>d.dataUpdateCount||p.errorUpdateCount>d.errorUpdateCount,isFetching:y,isLoadingError:"error"===k&&0===p.dataUpdatedAt,isPlaceholderData:T,isPreviousData:g,isRefetchError:"error"===k&&0!==p.dataUpdatedAt,isStale:b(e,t),refetch:this.refetch,remove:this.remove}},n.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var n=this.options,r=n.notifyOnChangeProps,i=n.notifyOnChangePropsExclusions;if(!r&&!i)return!0;if("tracked"===r&&!this.trackedProps.length)return!0;var c="tracked"===r?this.trackedProps:r;return Object.keys(e).some((function(n){var r=n,s=e[r]!==t[r],a=null==c?void 0:c.some((function(e){return e===n})),u=null==i?void 0:i.some((function(e){return e===n}));return s&&!u&&(!c||a)}))},n.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(c.p)(this.currentResult,t)){var n={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(n.listeners=!0),this.notify(Object(r.a)({},n,e))}},n.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},n.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"!==e.type||Object(l.c)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},n.notify=function(e){var t=this;s.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))},t}(u.a);function f(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&b(e,t))}(e,t)}function h(e,t,n,r){return!1!==n.enabled&&(e!==t||!1===r.enabled)&&b(e,n)}function b(e,t){return e.isStaleByTime(t.staleTime)}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(11),i=n(57),c=n(2),s=n(52),a=n.n(s),u=n(258),o=n(251),l=n(3),d=["icon","iconOnly","children","autoFocus","className"],f=function(e){var t=e.icon,n=e.iconOnly,s=e.children,f=e.autoFocus,h=e.className,b=Object(i.a)(e,d),v=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e;return f&&(e=requestAnimationFrame((function(){var e,t;null===(e=v.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[v,f]),Object(l.jsx)(o.a,Object(r.a)(Object(r.a)({},b),{},{ref:v,className:a()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",h),role:"button",children:Object(l.jsxs)("div",{className:"flex items-center",children:[t&&Object(l.jsx)(u.a,{className:a()({"mr-2":!n}),name:t}),!n&&s]})}))}},900:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(11),i=n(57),c=n(2),s=n(52),a=n.n(s),u=n(251),o=n(3),l=["defaultChecked","checked","onChange","className","children"],d=function(e){var t=e.defaultChecked,n=e.checked,s=e.onChange,d=e.className,f=e.children,h=Object(i.a)(e,l),b=Object(c.useRef)(null),v=Object(c.useCallback)((function(e){null===s||void 0===s||s(e.target.checked,e)}),[s]),p=Object(c.useCallback)((function(){var e;null===(e=b.current)||void 0===e||e.click()}),[]);return Object(o.jsx)(u.a,{component:"label",className:a()("text-gray-200 p-2",d),onClick:p,role:"button",children:Object(o.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(o.jsx)("input",Object(r.a)(Object(r.a)({type:"checkbox"},h),{},{ref:b,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:v})),Object(o.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:f})]})})}},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(894),i=n(5),c=n(889);function s(e,t,n){var s=Object(i.l)(e,t,n);return Object(c.a)(s,r.a)}},921:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(11),i=n(57),c=n(2),s=n(257),a=n.n(s),u=n(52),o=n.n(u),l=n(924),d=n.n(l),f=n(3),h=d()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(f.jsx)("div",Object(r.a)({},e))})),b=n(256),v=["visible","onClose","className"],p=function(e){var t=e.visible,n=e.onClose,s=e.className,u=Object(i.a)(e,v),l=Object(c.useMemo)((function(){return a.a.add({})}),[]),d=Object(c.useCallback)((function(){n(!1)}),[n]),p=Object(c.useCallback)((function(){if(t)return d(),!1}),[t,d]),j=Object(c.useCallback)((function(){if(!a.a.focus(l)){var e=a.a.getCurrent();e&&e.blur(),a.a.setActiveContainer(l),setTimeout((function(){a.a.setPointerMode(!1),a.a.focus(l)}),500)}}),[l]);return Object(b.a)("Back",p),Object(b.a)("Blue",p),Object(c.useEffect)((function(){t&&j()}),[t,j]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:o()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:d}),Object(f.jsx)(h,Object(r.a)(Object(r.a)({},u),{},{spotlightId:l,spotlightRestrict:"self-only",spotlightDisabled:!t,className:o()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},s)}))]})}},923:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),i=(n(2),n(900)),c=n(3),s=function(e){return Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},e),{},{type:"radio"}))}},928:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b}));var r=n(897),i=n.n(r),c=n(193),s=n.n(c),a=n(929),u=n.n(a),o=n(947),l=n.n(o),d=function(e){return e<10?"0".concat(e):e};function f(e){return s()(e,(function(e,t){var n,r,c,s,a,u,o;return{lang:e.lang,name:i()(["".concat(d(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(r=e.author)||void 0===r?void 0:r.title)?"".concat(null===(c=e.type)||void 0===c?void 0:c.title,"."):null===(s=e.type)||void 0===s?void 0:s.title,null===(a=e.author)||void 0===a?void 0:a.title,(null===(u=e.type)||void 0===u?void 0:u.title)||(null===(o=e.author)||void 0===o?void 0:o.title)?"(".concat(l()(e.lang),")"):l()(e.lang),"aac"!==e.codec&&l()(e.codec)]).join(" ")}}))}function h(e,t){return u()(s()(e,(function(e){return{src:"string"===typeof e.url?e.url:e.url[t]||e.url.http,name:e.quality}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function b(e){return s()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(l()(e.lang)," #").concat(d(t+1))}}))}},930:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var r=n(11),i=n(32),c=n.n(i),s=n(53),a=n(73),u=n(57),o=n(2),l=n(937),d=n.n(l),f=n(84),h=n(85),b=n(958),v=n(197),p=n(157),j=n(156),O=n(926),m=n.n(O),y=n(941),k=n.n(y),g=n(942),T=n.n(g),x=n(898),R=n.n(x),C=function(){function e(t){Object(f.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(h.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,r){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(r){var i="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),c=new Blob([i],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(c),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(r){var i=new TextDecoder("utf-8").decode(r),c="WEBVTT FILE\r\n\r\n".concat(e.toVTT(i)),s=new Blob([c],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(s),n(t.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function S(){return(S=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,r=new C(n),e.abrupt("return",r.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).hls=void 0,e.media=void 0,e.state=void 0,e.props=void 0,e}return Object(h.a)(n,[{key:"load",value:function(e){var t,n=this.props.startTime;(null===(t=this.state)||void 0===t?void 0:t.src)&&this.state.src!==e&&(n=this.media.currentTime),this.destroy();var r=this.media;this.setState({src:e});var i=function(){n&&(r.currentTime=n),r.play()};if(e.includes(".m3u8")&&k.a.isSupported()){var c=this.hls=new k.a;return c.attachMedia(r),void c.on(k.a.Events.MEDIA_ATTACHED,(function(){c.loadSource(e),c.on(k.a.Events.MANIFEST_PARSED,i)}))}r.src=e,r.addEventListener("loadedmetadata",i)}},{key:"audioTracks",get:function(){var e;return this.hls?T()(this.hls.audioTracks.map((function(e){return e.name}))):null===(e=this.props.audioTracks)||void 0===e?void 0:e.map((function(e){return e.name}))}},{key:"audioTrack",get:function(){var e,t,n,r=this;if(this.hls)return null===(n=this.hls.audioTracks.find((function(e){var t;return e.id===(null===(t=r.hls)||void 0===t?void 0:t.audioTrack)})))||void 0===n?void 0:n.name;var i=Array.from(this.media.audioTracks||[]).findIndex((function(e){return e.enabled}));return null===(e=this.props.audioTracks)||void 0===e||null===(t=e[i])||void 0===t?void 0:t.name},set:function(e){if(this.hls){var t=this.hls.audioTracks.find((function(t){return t.name===e}));t&&(this.hls.audioTrack=t.id)}else{var n,r=Array.from(this.media.audioTracks||[]),i=null===(n=this.props.audioTracks)||void 0===n?void 0:n.findIndex((function(t){return t.name===e}));(!i||i>r.length-1)&&(i=0),r.forEach((function(e,t){e.enabled=t===i}))}}},{key:"sourceTracks",get:function(){return R()(this.props.sourceTracks,"src").map((function(e){return e.name}))}},{key:"sourceTrack",get:function(){var e,t=this;return null===(e=this.props.sourceTracks.find((function(e){return e.src===t.state.src})))||void 0===e?void 0:e.name},set:function(e){var t=this.props.sourceTracks.find((function(t){return t.name===e}));t&&this.load(t.src)}},{key:"subtitleTracks",get:function(){var e;return this.hls?this.hls.subtitleTracks.map((function(e){return e.name})):null===(e=this.props.subtitleTracks)||void 0===e?void 0:e.map((function(e){return e.name}))}},{key:"subtitleTrack",get:function(){var e,t,n=this;return this.hls?null===(t=this.hls.subtitleTracks.find((function(e){var t;return e.id===(null===(t=n.hls)||void 0===t?void 0:t.subtitleTrack)})))||void 0===t?void 0:t.name:null===(e=Array.from(this.media.textTracks||[]).find((function(e){return"showing"===e.mode})))||void 0===e?void 0:e.label},set:function(e){if(this.hls){var t,n;this.hls.subtitleTrack=null!==(t=null===(n=this.hls.subtitleTracks.find((function(t){return t.name===e})))||void 0===n?void 0:n.id)&&void 0!==t?t:-1}else{var r=Array.from(this.media.textTracks||[]);r.forEach((function(e){e.mode="disabled"}));var i=r.find((function(t){return t.label===e}));if(i)i.mode="showing";else{var c,s=null===(c=this.props.subtitleTracks)||void 0===c?void 0:c.find((function(t){return t.name===e}));if(s){var a=document.createElement("track");a.kind="captions",a.id=s.name,a.srclang=s.lang,a.label=s.name;var u=function(e){a.src=e,a.track.mode="showing"};s.src.endsWith(".srt")?function(e){return S.apply(this,arguments)}(s.src).then(u):u(s.src),this.media.appendChild(a)}}}}},{key:"destroy",value:function(){this.hls?this.hls.destroy():this.media.src=""}},{key:"componentDidMount",value:function(){var e;this.load(this.props.sourceTracks[0].src),null===(e=Object(b.a)(Object(v.a)(n.prototype),"componentDidMount",this))||void 0===e||e.call(this)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){var e;this.destroy(),null===(e=Object(b.a)(Object(v.a)(n.prototype),"componentWillUnmount",this))||void 0===e||e.call(this)}}]),n}(m.a),E=n(252),I=n(256),N=n(193),U=n.n(N),Q=n(896),F=n(921),A=n(923),L=n(3),P="NONE",D=function(e){var t=e.player,n=e.showButton,r=Object(o.useState)(!1),i=Object(a.a)(r,2),c=i[0],s=i[1],u=Object(o.useState)([]),l=Object(a.a)(u,2),d=l[0],f=l[1],h=Object(o.useState)(null),b=Object(a.a)(h,2),v=b[0],p=b[1],j=Object(o.useState)([]),O=Object(a.a)(j,2),m=O[0],y=O[1],k=Object(o.useState)(null),g=Object(a.a)(k,2),T=g[0],x=g[1],R=Object(o.useState)([]),C=Object(a.a)(R,2),S=C[0],w=C[1],N=Object(o.useState)(null),D=Object(a.a)(N,2),B=D[0],M=D[1],W=Object(o.useCallback)((function(e,n){t.current&&(t.current.getVideoNode()[e]=n)}),[t]),V=Object(o.useCallback)((function(e){return function(){p(e),W("audioTrack",e)}}),[W]),q=Object(o.useCallback)((function(e){return function(){x(e),W("sourceTrack",e)}}),[W]),$=Object(o.useCallback)((function(e){return function(){M(e),W("subtitleTrack",e)}}),[W]),z=Object(o.useCallback)((function(){if(t.current&&!c){var e=t.current.getVideoNode(),n=e.audioTracks,r=e.audioTrack,i=e.sourceTracks,a=e.sourceTrack,u=e.subtitleTracks,o=e.subtitleTrack;((null===n||void 0===n?void 0:n.length)>1||(null===i||void 0===i?void 0:i.length)>1||(null===u||void 0===u?void 0:u.length)>0)&&(f(n),p(r),y(i),x(a),w(u),M(o),t.current.pause(),s(!0))}}),[c,t]),J=Object(o.useCallback)((function(){s(!1),t.current&&t.current.play()}),[t]),K=Object(o.useCallback)((function(){!c&&z()}),[c,z]);return Object(I.a)("Blue",K),Object(I.a)("Play",J),Object(I.a)("ArrowUp",z),Object(L.jsxs)(L.Fragment,{children:[n&&Object(L.jsx)(Q.a,{className:"absolute z-101 bottom-8 right-10",icon:"settings",iconOnly:!0,onClick:z}),Object(L.jsx)(F.a,{visible:c,onClose:J,children:Object(L.jsxs)("div",{className:"flex flex-col",children:[(null===d||void 0===d?void 0:d.length)>1&&Object(L.jsxs)("div",{className:"flex flex-col py-4",children:[Object(L.jsx)(E.a,{children:"\u0417\u0432\u0443\u043a"}),Object(L.jsx)("div",{className:"flex flex-wrap mt-2",children:U()(d,(function(e){return Object(L.jsx)("div",{className:"w-1/2",children:Object(L.jsx)(A.a,{checked:e===v,onChange:V(e),children:e})},e)}))})]}),(null===m||void 0===m?void 0:m.length)>1&&Object(L.jsxs)("div",{className:"flex flex-col py-4",children:[Object(L.jsx)(E.a,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(L.jsx)("div",{className:"flex flex-wrap mt-2",children:U()(m,(function(e){return Object(L.jsx)("div",{className:"w-1/6",children:Object(L.jsx)(A.a,{checked:e===T,onChange:q(e),children:e})},e)}))})]}),(null===S||void 0===S?void 0:S.length)>0&&Object(L.jsxs)("div",{className:"flex flex-col py-4",children:[Object(L.jsx)(E.a,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(L.jsxs)("div",{className:"flex flex-wrap mt-2",children:[Object(L.jsx)("div",{className:"w-1/6",children:Object(L.jsx)(A.a,{checked:!B||B===P,onChange:$(P),children:"\u041d\u0435\u0442"})}),U()(S,(function(e){return Object(L.jsx)("div",{className:"w-1/6",children:Object(L.jsx)(A.a,{checked:e===B,onChange:$(e),children:e})},e)}))]})]})]})})]})},B=function(e){var t=e.startTime,n=e.startInDelay,r=void 0===n?5:n,i=e.player,c=Object(o.useState)(!0),s=Object(a.a)(c,2),u=s[0],l=s[1],d=Object(o.useState)(r),f=Object(a.a)(d,2),h=f[0],b=f[1],v=Object(o.useMemo)((function(){return new Date(1e3*(t||0)).toISOString().substr(11,8).replace(/^00:/,"")}),[t]),p=Object(o.useCallback)((function(){i.current&&(l(!1),i.current.getVideoNode().currentTime=t)}),[t,i]),j=Object(o.useCallback)((function(){l(!1)}),[]);return Object(o.useEffect)((function(){var e;return u&&(e=setInterval((function(){b((function(e){var t=e-1;return t<=0&&p(),t}))}),1e3)),function(){clearInterval(e)}}),[u,p]),t&&u?Object(L.jsxs)("div",{className:"flex justify-center absolute w-full z-101 bottom-32",children:[Object(L.jsxs)(Q.a,{onClick:p,children:["\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 ",v," \u0447\u0435\u0440\u0435\u0437 ",h]}),Object(L.jsx)(Q.a,{autoFocus:!0,onClick:j,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"})]}):null},M=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","onPlay","onPause","onEnded","onTimeSync"],W=function(e){var t=e.title,n=e.description,i=e.poster,l=e.audios,f=e.sources,h=e.subtitles,b=e.startTime,v=e.timeSyncInterval,p=void 0===v?30:v,j=e.onPlay,O=e.onPause,m=e.onEnded,y=e.onTimeSync,k=Object(u.a)(e,M),g=Object(o.useRef)(),T=Object(o.useState)(!1),x=Object(a.a)(T,2),R=x[0],C=x[1],S=Object(o.useState)(!0),N=Object(a.a)(S,2),U=N[0],Q=N[1],F=Object(o.useCallback)((function(){Q(!1),null===j||void 0===j||j()}),[j]),A=Object(o.useCallback)((function(e){Q(!0),null===O||void 0===O||O(e.currentTime)}),[O]),P=Object(o.useCallback)((function(e){null===m||void 0===m||m(e.target.currentTime)}),[m]),W=Object(o.useCallback)(Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.current||!y){e.next=5;break}return t=g.current.getVideoNode(),n=t.currentTime,e.next=5,y(n);case 5:case"end":return e.stop()}}),e)}))),[y,g]),V=Object(o.useCallback)((function(){C(!0)}),[]);return Object(o.useEffect)((function(){var e;return U&&(e=setTimeout((function(){Q(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[U]),Object(o.useEffect)((function(){var e;return y&&(e=setInterval(W,1e3*p)),function(){e&&clearInterval(e)}}),[p,y,W]),Object(I.a)("Back",W),Object(L.jsxs)(L.Fragment,{children:[U&&Object(L.jsx)(E.a,{className:"p-4 absolute top-0 z-10",children:t}),Object(L.jsx)(D,{showButton:U,player:g}),R&&b>0&&Object(L.jsx)(B,{startTime:b,player:g}),Object(L.jsx)(d.a,Object(r.a)(Object(r.a)({},k),{},{ref:g,title:n,poster:i,jumpBy:10,onPlay:F,onPause:A,onEnded:P,onLoadedMetadata:V,audioTracks:l,sourceTracks:f,subtitleTracks:h,videoComponent:w}))]})}},954:function(e,t,n){"use strict";function r(e,t,n){return n?"".concat(null===e||void 0===e?void 0:e.title," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):null===e||void 0===e?void 0:e.title}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=12.0f17e916.chunk.js.map