(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[26],{1056:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var n=r(2),s=r(105),i=r(193),u=r.n(i),c=r(31),o=r(891),a=r(7),l=r(3),h=function(e){var t=e.channel,r=e.className,s=Object(c.g)(),i=Object(n.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&s.push(Object(a.b)(a.a.Channel,{channelId:t.id}),{channel:t,title:t.name})}),[t,s]);return Object(l.jsx)(o.a,{onClick:i,source:null===t||void 0===t?void 0:t.logos.s,caption:null===t||void 0===t?void 0:t.title,className:r})},d=r(890),f=r(252),p=function(e){var t=e.title,r=e.channels,n=e.loading,i=e.onScrollToEnd,c=e.scrollable,o=void 0===c||c,a=Object(l.jsxs)("div",{children:[t&&Object(l.jsx)(f.a,{className:"m-1 mb-3",children:t}),Object(l.jsxs)("div",{className:"flex flex-wrap pr-2",children:[u()(r,(function(e){return Object(l.jsx)(h,{channel:e},e.id)})),n&&u()(Object(s.a)(new Array(20)),(function(e,t){return Object(l.jsx)(h,{},t)}))]})]});return o?Object(l.jsx)(d.a,{onScrollToEnd:i,children:a}):a},v=r(888),b=r(892),O=function(){var e=Object(b.a)("channels"),t=e.data,r=e.isLoading,n="\u041a\u0430\u043d\u0430\u043b\u044b";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v.a,{title:n}),Object(l.jsx)(p,{title:n,channels:null===t||void 0===t?void 0:t.channels,loading:r})]})}},888:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(11),s=r(893),i=r(3),u=function(e){return Object(i.jsx)(s.a,Object(n.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},889:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(2),s=r.n(n),i=r(22);function u(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var c=s.a.createContext(u()),o=r(255);function a(e,t){var r=s.a.useRef(!1),n=s.a.useState(0)[1],u=Object(o.b)(),a=s.a.useContext(c),l=u.defaultQueryObserverOptions(e);l.optimisticResults=!0,l.onError&&(l.onError=i.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=i.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=i.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(a.isReset()||(l.retryOnMount=!1));var h=s.a.useState((function(){return new t(u,l)}))[0],d=h.getOptimisticResult(l);if(s.a.useEffect((function(){r.current=!0,a.clearReset();var e=h.subscribe(i.a.batchCalls((function(){r.current&&n((function(e){return e+1}))})));return h.updateResult(),function(){r.current=!1,e()}}),[a,h]),s.a.useEffect((function(){h.setOptions(l,{listeners:!1})}),[l,h]),l.suspense&&d.isLoading)throw h.fetchOptimistic(l).then((function(e){var t=e.data;null==l.onSuccess||l.onSuccess(t),null==l.onSettled||l.onSettled(t,null)})).catch((function(e){a.clearReset(),null==l.onError||l.onError(e),null==l.onSettled||l.onSettled(void 0,e)}));if((l.suspense||l.useErrorBoundary)&&d.isError&&!d.isFetching)throw d.error;return"tracked"===l.notifyOnChangeProps&&(d=h.trackResult(d)),d}},890:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(11),s=r(57),i=r(2),u=r(52),c=r.n(u),o=r(73),a=r(106),l=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},s=t.onEnterViewport,u=t.onLeaveViewport,c=Object(i.useState)(),l=Object(o.a)(c,2),h=l[1],d=Object(i.useRef)(null),f=Object(i.useRef)(!1),p=Object(i.useRef)(!1),v=Object(i.useRef)(0),b=Object(i.useRef)(0),O=Object(i.useCallback)((function(){if(e.current&&d.current){var t=Object(a.findDOMNode)(e.current);t&&d.current.observe(t)}}),[e,d]),y=Object(i.useCallback)((function(){if(e.current&&d.current){var t=Object(a.findDOMNode)(e.current);t&&(d.current.unobserve(t),d.current.disconnect(),d.current=null)}}),[e,d]),j=Object(i.useCallback)((function(e){var t=e[0]||{},r=t.isIntersecting,i=t.intersectionRatio,c="undefined"!==typeof r?r:i>0;if(!p.current&&c)return p.current=!0,null===s||void 0===s||s(),v.current+=1,f.current=c,void h(c);p.current&&!c&&(p.current=!1,null===u||void 0===u||u(),n.disconnectOnLeave&&d.current&&d.current.disconnect(),b.current+=1,f.current=c,h(c))}),[d,n.disconnectOnLeave,s,u]),m=Object(i.useCallback)((function(){d.current||(d.current=new IntersectionObserver(j,r))}),[d,r,j]);return Object(i.useEffect)((function(){return m(),O(),function(){y()}}),[m,O,y]),{inViewport:f.current,enterCount:v.current,leaveCount:b.current}},h=r(3),d=["children","className","onScrollToEnd"],f=function(e){var t=e.children,r=e.className,u=e.onScrollToEnd,o=Object(s.a)(e,d),a=Object(i.useRef)(null);return l(a,{onEnterViewport:u}),Object(h.jsxs)("div",Object(n.a)(Object(n.a)({className:c()("overflow-y-auto h-full",r)},o),{},{children:[t,Object(h.jsx)("div",{className:"h-40",ref:a})]}))}},891:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(11),s=r(57),i=r(52),u=r.n(i),c=r(251),o=r(3),a=["className","wrapperClassName","source","caption","children"],l=function(e){var t=e.className,r=e.wrapperClassName,i=e.source,l=e.caption,h=e.children,d=Object(s.a)(e,a);return Object(o.jsx)(c.a,Object(n.a)(Object(n.a)({},d),{},{className:u()("rounded-xl w-1/5",r),children:Object(o.jsxs)("div",{className:u()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",t),children:[Object(o.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:i,alt:l}),Object(o.jsx)("div",{className:"px-2",children:Object(o.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden whitespace-nowrap",children:l})}),h]})}))}},892:function(e,t,r){"use strict";var n=r(105),s=r(2),i=r(907),u=r(253);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,c=Object(s.useMemo)((function(){return new u.c}),[]),o=Object(i.a)([e].concat(Object(n.a)(t)),(function(){return c[e].apply(c,Object(n.a)(t))}),r);return o}},894:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(6),s=r(30),i=r(5),u=r(22),c=r(107),o=r(67),a=r(152),l=r(68),h=function(e){function t(t,r){var n;return(n=e.call(this)||this).client=t,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(s.a)(t,e);var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),d(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&p(e,t));var e,t},r.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&p(e,t));var e,t},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(e,t){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&f(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return t.trackedProps.includes(r)||t.trackedProps.push(r),e[r]}})})),r},r.getNextResult=function(e){var t=this;return new Promise((function(r,n){var s=t.subscribe((function(t){t.isFetching||(s(),t.isError&&(null==e?void 0:e.throwOnError)?n(t.error):r(t))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(e){return this.fetch(e)},r.fetchOptimistic=function(e){var t=this,r=this.client.defaultQueryObserverOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return t.createResult(n,r)}))},r.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},r.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(i.i)),t},r.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var t=Object(i.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},r.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||c.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(e,t){var r,n=this.currentQuery,s=this.options,u=this.currentResult,c=this.currentResultState,o=this.currentResultOptions,l=e!==n,h=l?e.state:this.currentQueryInitialState,v=l?this.currentResult:this.previousQueryResult,b=e.state,O=b.dataUpdatedAt,y=b.error,j=b.errorUpdatedAt,m=b.isFetching,R=b.status,S=!1,g=!1;if(t.optimisticResults){var w=this.hasListeners(),x=!w&&d(e,t),E=w&&f(e,n,t,s);(x||E)&&(m=!0,O||(R="loading"))}if(t.keepPreviousData&&!b.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==R)r=v.data,O=v.dataUpdatedAt,R=v.status,S=!0;else if(t.select&&"undefined"!==typeof b.data)if(u&&b.data===(null==c?void 0:c.data)&&t.select===(null==o?void 0:o.select)&&!this.previousSelectError)r=u.data;else try{r=t.select(b.data),!1!==t.structuralSharing&&(r=Object(i.n)(null==u?void 0:u.data,r)),this.previousSelectError=null}catch(C){Object(a.a)().error(C),y=C,this.previousSelectError=C,j=Date.now(),R="error"}else r=b.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&"loading"===R){var Q;if((null==u?void 0:u.isPlaceholderData)&&t.placeholderData===(null==o?void 0:o.placeholderData))Q=u.data;else if(Q="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof Q)try{Q=t.select(Q),!1!==t.structuralSharing&&(Q=Object(i.n)(null==u?void 0:u.data,Q)),this.previousSelectError=null}catch(C){Object(a.a)().error(C),y=C,this.previousSelectError=C,j=Date.now(),R="error"}"undefined"!==typeof Q&&(R="success",r=Q,g=!0)}return{status:R,isLoading:"loading"===R,isSuccess:"success"===R,isError:"error"===R,isIdle:"idle"===R,data:r,dataUpdatedAt:O,error:y,errorUpdatedAt:j,failureCount:b.fetchFailureCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>h.dataUpdateCount||b.errorUpdateCount>h.errorUpdateCount,isFetching:m,isLoadingError:"error"===R&&0===b.dataUpdatedAt,isPlaceholderData:g,isPreviousData:S,isRefetchError:"error"===R&&0!==b.dataUpdatedAt,isStale:p(e,t),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var r=this.options,n=r.notifyOnChangeProps,s=r.notifyOnChangePropsExclusions;if(!n&&!s)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(e).some((function(r){var n=r,u=e[n]!==t[n],c=null==i?void 0:i.some((function(e){return e===r})),o=null==s?void 0:s.some((function(e){return e===r}));return u&&!o&&(!i||c)}))},r.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.p)(this.currentResult,t)){var r={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(r.listeners=!0),this.notify(Object(n.a)({},r,e))}},r.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},r.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"!==e.type||Object(l.c)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(e){var t=this;u.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))},t}(o.a);function d(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&p(e,t))}(e,t)}function f(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&p(e,r)}function p(e,t){return e.isStaleByTime(t.staleTime)}},907:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(894),s=r(5),i=r(889);function u(e,t,r){var u=Object(s.l)(e,t,r);return Object(i.a)(u,n.a)}}}]);
//# sourceMappingURL=26.6c0264a3.chunk.js.map