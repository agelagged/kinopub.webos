(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[14],{1054:function(e,t,r){var n=r(375),i=r(1055);e.exports=function(e,t){return e&&e.length?i(e,n(t,2)):0}},1055:function(e,t){e.exports=function(e,t){for(var r,n=-1,i=e.length;++n<i;){var s=t(e[n]);void 0!==s&&(r=void 0===r?s:r+s)}return r}},1076:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r(2),i=r(1054),s=r.n(i),u=r(252),c=r(896),o=r(888),a=r(894),l=r(3),d=function(){var e=Object(a.a)("watchingSerials",[u.a.True]),t=e.data,r=e.isLoading,i=Object(n.useMemo)((function(){return s()(null===t||void 0===t?void 0:t.items,(function(e){return+(e.new||0)}))}),[null===t||void 0===t?void 0:t.items]),d=i?"\u041d\u043e\u0432\u044b\u0435 \u044d\u043f\u0438\u0437\u043e\u0434\u044b (".concat(i,")"):"\u041d\u043e\u0432\u044b\u0435 \u044d\u043f\u0438\u0437\u043e\u0434\u044b";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{title:d}),Object(l.jsx)(c.a,{title:d,items:null===t||void 0===t?void 0:t.items,loading:r})]})}},888:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(11),i=r(893),s=r(3),u=function(e){return Object(s.jsx)(i.a,Object(n.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},889:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(2),i=r.n(n),s=r(22);function u(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var c=i.a.createContext(u()),o=r(254);function a(e,t){var r=i.a.useRef(!1),n=i.a.useState(0)[1],u=Object(o.b)(),a=i.a.useContext(c),l=u.defaultQueryObserverOptions(e);l.optimisticResults=!0,l.onError&&(l.onError=s.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=s.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=s.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(a.isReset()||(l.retryOnMount=!1));var d=i.a.useState((function(){return new t(u,l)}))[0],h=d.getOptimisticResult(l);if(i.a.useEffect((function(){r.current=!0,a.clearReset();var e=d.subscribe(s.a.batchCalls((function(){r.current&&n((function(e){return e+1}))})));return d.updateResult(),function(){r.current=!1,e()}}),[a,d]),i.a.useEffect((function(){d.setOptions(l,{listeners:!1})}),[l,d]),l.suspense&&h.isLoading)throw d.fetchOptimistic(l).then((function(e){var t=e.data;null==l.onSuccess||l.onSuccess(t),null==l.onSettled||l.onSettled(t,null)})).catch((function(e){a.clearReset(),null==l.onError||l.onError(e),null==l.onSettled||l.onSettled(void 0,e)}));if((l.suspense||l.useErrorBoundary)&&h.isError&&!h.isFetching)throw h.error;return"tracked"===l.notifyOnChangeProps&&(h=d.trackResult(h)),h}},890:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(11),i=r(57),s=r(2),u=r(52),c=r.n(u),o=r(73),a=r(106),l=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,u=t.onLeaveViewport,c=Object(s.useState)(),l=Object(o.a)(c,2),d=l[1],h=Object(s.useRef)(null),f=Object(s.useRef)(!1),v=Object(s.useRef)(!1),p=Object(s.useRef)(0),b=Object(s.useRef)(0),O=Object(s.useCallback)((function(){if(e.current&&h.current){var t=Object(a.findDOMNode)(e.current);t&&h.current.observe(t)}}),[e,h]),j=Object(s.useCallback)((function(){if(e.current&&h.current){var t=Object(a.findDOMNode)(e.current);t&&(h.current.unobserve(t),h.current.disconnect(),h.current=null)}}),[e,h]),y=Object(s.useCallback)((function(e){var t=e[0]||{},r=t.isIntersecting,s=t.intersectionRatio,c="undefined"!==typeof r?r:s>0;if(!v.current&&c)return v.current=!0,null===i||void 0===i||i(),p.current+=1,f.current=c,void d(c);v.current&&!c&&(v.current=!1,null===u||void 0===u||u(),n.disconnectOnLeave&&h.current&&h.current.disconnect(),b.current+=1,f.current=c,d(c))}),[h,n.disconnectOnLeave,i,u]),m=Object(s.useCallback)((function(){h.current||(h.current=new IntersectionObserver(y,r))}),[h,r,y]);return Object(s.useEffect)((function(){return m(),O(),function(){j()}}),[m,O,j]),{inViewport:f.current,enterCount:p.current,leaveCount:b.current}},d=r(3),h=["children","className","onScrollToEnd"],f=function(e){var t=e.children,r=e.className,u=e.onScrollToEnd,o=Object(i.a)(e,h),a=Object(s.useRef)(null);return l(a,{onEnterViewport:u}),Object(d.jsxs)("div",Object(n.a)(Object(n.a)({className:c()("overflow-y-auto h-full",r)},o),{},{children:[t,Object(d.jsx)("div",{className:"h-40",ref:a})]}))}},891:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(11),i=r(57),s=r(52),u=r.n(s),c=r(250),o=r(3),a=["title","className"],l=function(e){var t=e.title,r=e.className,s=Object(i.a)(e,a);return t?Object(o.jsx)(c.a,Object(n.a)(Object(n.a)({},s),{},{className:u()("m-1 mb-3",r),children:t})):null}},892:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(11),i=r(57),s=r(52),u=r.n(s),c=r(251),o=r(3),a=["className","wrapperClassName","source","caption","children"],l=function(e){var t=e.className,r=e.wrapperClassName,s=e.source,l=e.caption,d=e.children,h=Object(i.a)(e,a);return Object(o.jsx)(c.a,Object(n.a)(Object(n.a)({},h),{},{className:u()("rounded-xl w-1/5",r),children:Object(o.jsxs)("div",{className:u()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",t),children:[Object(o.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:s,alt:l}),Object(o.jsx)("div",{className:"px-2",children:Object(o.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden whitespace-nowrap",children:l})}),d]})}))}},894:function(e,t,r){"use strict";var n=r(105),i=r(2),s=r(907),u=r(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,c=Object(i.useMemo)((function(){return new u.c}),[]),o=Object(s.a)([e].concat(Object(n.a)(t)),(function(){return c[e].apply(c,Object(n.a)(t))}),r);return o}},895:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(6),i=r(30),s=r(5),u=r(22),c=r(107),o=r(67),a=r(152),l=r(68),d=function(e){function t(t,r){var n;return(n=e.call(this)||this).client=t,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(i.a)(t,e);var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&v(e,t));var e,t},r.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&v(e,t));var e,t},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(e,t){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var i=this.hasListeners();i&&f(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return t.trackedProps.includes(r)||t.trackedProps.push(r),e[r]}})})),r},r.getNextResult=function(e){var t=this;return new Promise((function(r,n){var i=t.subscribe((function(t){t.isFetching||(i(),t.isError&&(null==e?void 0:e.throwOnError)?n(t.error):r(t))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(e){return this.fetch(e)},r.fetchOptimistic=function(e){var t=this,r=this.client.defaultQueryObserverOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return t.createResult(n,r)}))},r.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},r.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(s.i)),t},r.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!s.e&&!this.currentResult.isStale&&Object(s.f)(this.options.staleTime)){var t=Object(s.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},r.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!s.e&&!1!==this.options.enabled&&Object(s.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||c.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(e,t){var r,n=this.currentQuery,i=this.options,u=this.currentResult,c=this.currentResultState,o=this.currentResultOptions,l=e!==n,d=l?e.state:this.currentQueryInitialState,p=l?this.currentResult:this.previousQueryResult,b=e.state,O=b.dataUpdatedAt,j=b.error,y=b.errorUpdatedAt,m=b.isFetching,R=b.status,S=!1,g=!1;if(t.optimisticResults){var x=this.hasListeners(),w=!x&&h(e,t),E=x&&f(e,n,t,i);(w||E)&&(m=!0,O||(R="loading"))}if(t.keepPreviousData&&!b.dataUpdateCount&&(null==p?void 0:p.isSuccess)&&"error"!==R)r=p.data,O=p.dataUpdatedAt,R=p.status,S=!0;else if(t.select&&"undefined"!==typeof b.data)if(u&&b.data===(null==c?void 0:c.data)&&t.select===(null==o?void 0:o.select)&&!this.previousSelectError)r=u.data;else try{r=t.select(b.data),!1!==t.structuralSharing&&(r=Object(s.n)(null==u?void 0:u.data,r)),this.previousSelectError=null}catch(C){Object(a.a)().error(C),j=C,this.previousSelectError=C,y=Date.now(),R="error"}else r=b.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&"loading"===R){var Q;if((null==u?void 0:u.isPlaceholderData)&&t.placeholderData===(null==o?void 0:o.placeholderData))Q=u.data;else if(Q="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof Q)try{Q=t.select(Q),!1!==t.structuralSharing&&(Q=Object(s.n)(null==u?void 0:u.data,Q)),this.previousSelectError=null}catch(C){Object(a.a)().error(C),j=C,this.previousSelectError=C,y=Date.now(),R="error"}"undefined"!==typeof Q&&(R="success",r=Q,g=!0)}return{status:R,isLoading:"loading"===R,isSuccess:"success"===R,isError:"error"===R,isIdle:"idle"===R,data:r,dataUpdatedAt:O,error:j,errorUpdatedAt:y,failureCount:b.fetchFailureCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>d.dataUpdateCount||b.errorUpdateCount>d.errorUpdateCount,isFetching:m,isLoadingError:"error"===R&&0===b.dataUpdatedAt,isPlaceholderData:g,isPreviousData:S,isRefetchError:"error"===R&&0!==b.dataUpdatedAt,isStale:v(e,t),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var r=this.options,n=r.notifyOnChangeProps,i=r.notifyOnChangePropsExclusions;if(!n&&!i)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var s="tracked"===n?this.trackedProps:n;return Object.keys(e).some((function(r){var n=r,u=e[n]!==t[n],c=null==s?void 0:s.some((function(e){return e===r})),o=null==i?void 0:i.some((function(e){return e===r}));return u&&!o&&(!s||c)}))},r.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(s.p)(this.currentResult,t)){var r={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(r.listeners=!0),this.notify(Object(n.a)({},r,e))}},r.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},r.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"!==e.type||Object(l.c)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(e){var t=this;u.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))},t}(o.a);function h(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&v(e,t))}(e,t)}function f(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&v(e,r)}function v(e,t){return e.isStaleByTime(t.staleTime)}},896:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(105),i=r(2),s=r(52),u=r.n(s),c=r(193),o=r.n(c),a=r(890),l=r(891),d=r(32),h=r(892),f=r(7),v=r(3),p=function(e){var t=e.item,r=e.className,n=Object(d.h)(),s=Object(i.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),c=Object(i.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&n.push(Object(f.b)(f.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,n]);return Object(v.jsx)(h.a,{onClick:c,source:null===t||void 0===t?void 0:t.posters.medium,caption:s,className:u()("h-72",r),children:(null===t||void 0===t?void 0:t.new)&&Object(v.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new})})},b=function(e){var t=e.title,r=e.items,i=e.loading,s=e.onScrollToEnd,c=e.scrollable,d=void 0===c||c,h=e.className,f=Object(v.jsxs)("div",{children:[Object(v.jsx)(l.a,{title:t}),Object(v.jsxs)("div",{className:u()("flex flex-wrap",h),children:[o()(r,(function(e){return Object(v.jsx)(p,{item:e},e.id)})),i&&o()(Object(n.a)(new Array(15)),(function(e,t){return Object(v.jsx)(p,{},t)}))]})]});return d?Object(v.jsx)(a.a,{onScrollToEnd:s,children:f}):f}},907:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(895),i=r(5),s=r(889);function u(e,t,r){var u=Object(i.l)(e,t,r);return Object(s.a)(u,n.a)}}}]);
//# sourceMappingURL=14.090dea8e.chunk.js.map