(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[12],{459:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return p}));var n=r(5),i=r(24),s=r(0),u=r(19),c=r.n(u),o=r(35),a=r(30),l=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,u=t.onLeaveViewport,c=Object(s.useState)(),l=Object(o.a)(c,2),d=l[1],h=Object(s.useRef)(null),f=Object(s.useRef)(!1),v=Object(s.useRef)(!1),p=Object(s.useRef)(0),b=Object(s.useRef)(0),O=Object(s.useCallback)((function(){if(e.current&&h.current){var t=Object(a.findDOMNode)(e.current);t&&h.current.observe(t)}}),[e,h]),j=Object(s.useCallback)((function(){if(e.current&&h.current){var t=Object(a.findDOMNode)(e.current);t&&(h.current.unobserve(t),h.current.disconnect(),h.current=null)}}),[e,h]),y=Object(s.useCallback)((function(e){var t=e[0]||{},r=t.isIntersecting,s=t.intersectionRatio,c="undefined"!==typeof r?r:s>0;if(!v.current&&c)return v.current=!0,null===i||void 0===i||i(),p.current+=1,f.current=c,void d(c);v.current&&!c&&(v.current=!1,null===u||void 0===u||u(),n.disconnectOnLeave&&h.current&&h.current.disconnect(),b.current+=1,f.current=c,d(c))}),[h,n.disconnectOnLeave,i,u]),m=Object(s.useCallback)((function(){h.current||(h.current=new IntersectionObserver(y,r))}),[h,r,y]);return Object(s.useEffect)((function(){return m(),O(),function(){j()}}),[m,O,j]),{inViewport:f.current,enterCount:p.current,leaveCount:b.current}},d=r(484);var h=function(e){var t=Object(d.a)();return Object(s.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},f=r(1),v=["children","className","onScrollToEnd"],p=Object(s.createContext)({}),b=function(e){var t=e.children,r=e.className,u=e.onScrollToEnd,o=Object(i.a)(e,v),a=Object(s.useRef)(null),d=h("scrollable"),b=Object(s.useMemo)((function(){return{id:d}}),[d]);return l(a,{onEnterViewport:u}),Object(f.jsx)("div",Object(n.a)(Object(n.a)({id:d,className:"overflow-hidden h-screen"},o),{},{children:Object(f.jsx)(p.Provider,{value:b,children:Object(f.jsxs)("div",{className:c()("overflow-y-auto h-full",r),children:[t,Object(f.jsx)("div",{className:"h-40",ref:a})]})})}))}},460:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(5),i=r(24),s=r(19),u=r.n(s),c=r(1),o=["className"],a=function(e){var t=e.className,r=Object(i.a)(e,o);return Object(c.jsx)("p",Object(n.a)(Object(n.a)({},r),{},{className:u()("text-primary",t)}))}},462:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(5),i=r(0),s=r(459),u=r(1),c=function(e){Object(i.useContext)(s.a).id;return Object(u.jsx)("div",Object(n.a)({},e))};var o=c},463:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(5),i=r(24),s=r(19),u=r.n(s),c=r(462),o=r(119),a=r(1),l=["className","wrapperClassName","source","caption","children"],d=function(e){var t=e.className,r=e.wrapperClassName,s=e.source,d=e.caption,h=e.children,f=Object(i.a)(e,l);return Object(a.jsx)(o.a,Object(n.a)(Object(n.a)({},f),{},{className:u()("rounded-xl w-1/6",r),children:Object(a.jsxs)(c.a,{className:u()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",t),children:[Object(a.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl bg-gray-300",src:s,alt:d}),Object(a.jsx)("div",{className:"px-2",children:Object(a.jsx)("p",{className:"text-primary text-sm text-center overflow-hidden whitespace-nowrap",children:d})}),h]})}))}},464:function(e,t,r){"use strict";var n=r(44),i=r(0),s=r(474),u=r(120);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,c=Object(i.useMemo)((function(){return new u.c}),[]),o=Object(s.a)([e].concat(Object(n.a)(t)),(function(){return c[e].apply(c,Object(n.a)(t))}),r);return o}},465:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),i=r.n(n),s=r(8);function u(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var c=i.a.createContext(u()),o=r(121);function a(e,t){var r=i.a.useRef(!1),n=i.a.useState(0)[1],u=Object(o.b)(),a=i.a.useContext(c),l=u.defaultQueryObserverOptions(e);l.optimisticResults=!0,l.onError&&(l.onError=s.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=s.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=s.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(a.isReset()||(l.retryOnMount=!1));var d=i.a.useState((function(){return new t(u,l)}))[0],h=d.getOptimisticResult(l);if(i.a.useEffect((function(){r.current=!0,a.clearReset();var e=d.subscribe(s.a.batchCalls((function(){r.current&&n((function(e){return e+1}))})));return d.updateResult(),function(){r.current=!1,e()}}),[a,d]),i.a.useEffect((function(){d.setOptions(l,{listeners:!1})}),[l,d]),l.suspense&&h.isLoading)throw d.fetchOptimistic(l).then((function(e){var t=e.data;null==l.onSuccess||l.onSuccess(t),null==l.onSettled||l.onSettled(t,null)})).catch((function(e){a.clearReset(),null==l.onError||l.onError(e),null==l.onSettled||l.onSettled(void 0,e)}));if((l.suspense||l.useErrorBoundary)&&h.isError&&!h.isFetching)throw h.error;return"tracked"===l.notifyOnChangeProps&&(h=d.trackResult(h)),h}},466:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(44),i=r(0),s=r(19),u=r.n(s),c=r(84),o=r.n(c),a=r(459),l=r(460),d=r(456),h=r(463),f=r(4),v=r(1),p=function(e){var t=e.item,r=e.className,n=Object(d.e)(),s=Object(i.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),c=Object(i.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&n.push(Object(f.b)(f.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,n]);return Object(v.jsx)(h.a,{onClick:c,source:null===t||void 0===t?void 0:t.posters.medium,caption:s,className:u()("h-72",r),children:(null===t||void 0===t?void 0:t.new)&&Object(v.jsx)("div",{className:"absolute bg-red-600 text-primary px-2 py-1 rounded-bl rounded-tr-xl right-0",children:null===t||void 0===t?void 0:t.new})})},b=function(e){var t=e.title,r=e.items,i=e.loading,s=e.onScrollToEnd,c=e.scrollable,d=void 0===c||c,h=e.className,f=Object(v.jsxs)("div",{children:[t&&Object(v.jsx)(l.a,{className:"m-1 mb-3",children:t}),Object(v.jsxs)("div",{className:u()("flex flex-wrap",h),children:[o()(r,(function(e){return Object(v.jsx)(p,{item:e},e.id)})),i&&o()(Object(n.a)(new Array(18)),(function(e,t){return Object(v.jsx)(p,{},t)}))]})]});return d?Object(v.jsx)(a.b,{onScrollToEnd:s,children:f}):f}},469:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(3),i=r(11),s=r(2),u=r(8),c=r(45),o=r(25),a=r(63),l=r(27),d=function(e){function t(t,r){var n;return(n=e.call(this)||this).client=t,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(i.a)(t,e);var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&v(e,t));var e,t},r.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&v(e,t));var e,t},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(e,t){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var i=this.hasListeners();i&&f(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return t.trackedProps.includes(r)||t.trackedProps.push(r),e[r]}})})),r},r.getNextResult=function(e){var t=this;return new Promise((function(r,n){var i=t.subscribe((function(t){t.isFetching||(i(),t.isError&&(null==e?void 0:e.throwOnError)?n(t.error):r(t))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(e){return this.fetch(e)},r.fetchOptimistic=function(e){var t=this,r=this.client.defaultQueryObserverOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return t.createResult(n,r)}))},r.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},r.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(s.i)),t},r.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!s.e&&!this.currentResult.isStale&&Object(s.f)(this.options.staleTime)){var t=Object(s.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},r.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!s.e&&!1!==this.options.enabled&&Object(s.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||c.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(e,t){var r,n=this.currentQuery,i=this.options,u=this.currentResult,c=this.currentResultState,o=this.currentResultOptions,l=e!==n,d=l?e.state:this.currentQueryInitialState,p=l?this.currentResult:this.previousQueryResult,b=e.state,O=b.dataUpdatedAt,j=b.error,y=b.errorUpdatedAt,m=b.isFetching,R=b.status,S=!1,x=!1;if(t.optimisticResults){var g=this.hasListeners(),w=!g&&h(e,t),C=g&&f(e,n,t,i);(w||C)&&(m=!0,O||(R="loading"))}if(t.keepPreviousData&&!b.dataUpdateCount&&(null==p?void 0:p.isSuccess)&&"error"!==R)r=p.data,O=p.dataUpdatedAt,R=p.status,S=!0;else if(t.select&&"undefined"!==typeof b.data)if(u&&b.data===(null==c?void 0:c.data)&&t.select===(null==o?void 0:o.select)&&!this.previousSelectError)r=u.data;else try{r=t.select(b.data),!1!==t.structuralSharing&&(r=Object(s.n)(null==u?void 0:u.data,r)),this.previousSelectError=null}catch(Q){Object(a.a)().error(Q),j=Q,this.previousSelectError=Q,y=Date.now(),R="error"}else r=b.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&"loading"===R){var E;if((null==u?void 0:u.isPlaceholderData)&&t.placeholderData===(null==o?void 0:o.placeholderData))E=u.data;else if(E="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof E)try{E=t.select(E),!1!==t.structuralSharing&&(E=Object(s.n)(null==u?void 0:u.data,E)),this.previousSelectError=null}catch(Q){Object(a.a)().error(Q),j=Q,this.previousSelectError=Q,y=Date.now(),R="error"}"undefined"!==typeof E&&(R="success",r=E,x=!0)}return{status:R,isLoading:"loading"===R,isSuccess:"success"===R,isError:"error"===R,isIdle:"idle"===R,data:r,dataUpdatedAt:O,error:j,errorUpdatedAt:y,failureCount:b.fetchFailureCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>d.dataUpdateCount||b.errorUpdateCount>d.errorUpdateCount,isFetching:m,isLoadingError:"error"===R&&0===b.dataUpdatedAt,isPlaceholderData:x,isPreviousData:S,isRefetchError:"error"===R&&0!==b.dataUpdatedAt,isStale:v(e,t),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var r=this.options,n=r.notifyOnChangeProps,i=r.notifyOnChangePropsExclusions;if(!n&&!i)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var s="tracked"===n?this.trackedProps:n;return Object.keys(e).some((function(r){var n=r,u=e[n]!==t[n],c=null==s?void 0:s.some((function(e){return e===r})),o=null==i?void 0:i.some((function(e){return e===r}));return u&&!o&&(!s||c)}))},r.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(s.p)(this.currentResult,t)){var r={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(r.listeners=!0),this.notify(Object(n.a)({},r,e))}},r.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},r.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"!==e.type||Object(l.c)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(e){var t=this;u.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))},t}(o.a);function h(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&v(e,t))}(e,t)}function f(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&v(e,r)}function v(e,t){return e.isStaleByTime(t.staleTime)}},474:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(469),i=r(2),s=r(465);function u(e,t,r){var u=Object(i.l)(e,t,r);return Object(s.a)(u,n.a)}},484:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),i=function(){var e=1,t=new WeakMap;return function r(n,i){return"number"===typeof n||"string"===typeof n?i?"idx-"+i:"val-"+n:t.has(n)?"uid"+t.get(n):(t.set(n,e++),r(n))}},s=(i(),function(e){return void 0===e&&(e=""),{value:1,prefix:e,uid:i()}}),u=s(),c=n.createContext(s()),o=function(){return n.useState(function(e){var t=e||u,r=function(e){return e?e.prefix:""}(t)+function(e){return e.value++}(t);return{uid:r,gen:function(e){return r+t.uid(e)}}}(n.useContext(c)))},a=function(){return o()[0].uid}},640:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));r(0);var n=r(120),i=r(466),s=r(464),u=r(1),c=function(){var e=Object(s.a)("watchingSerials",[n.a.True]),t=e.data,r=e.isLoading;return Object(u.jsx)(i.a,{items:null===t||void 0===t?void 0:t.items,loading:r})}}}]);
//# sourceMappingURL=12.18635a01.chunk.js.map