(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[20],{460:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(5),s=r(24),i=r(19),u=r.n(i),c=r(1),o=["className"],a=function(t){var e=t.className,r=Object(s.a)(t,o);return Object(c.jsx)("p",Object(n.a)(Object(n.a)({},r),{},{className:u()("text-primary",e)}))}},464:function(t,e,r){"use strict";var n=r(44),s=r(0),i=r(474),u=r(120);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,c=Object(s.useMemo)((function(){return new u.c}),[]),o=Object(i.a)([t].concat(Object(n.a)(e)),(function(){return c[t].apply(c,Object(n.a)(e))}),r);return o}},465:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(0),s=r.n(n),i=r(8);function u(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var c=s.a.createContext(u()),o=r(121);function a(t,e){var r=s.a.useRef(!1),n=s.a.useState(0)[1],u=Object(o.b)(),a=s.a.useContext(c),l=u.defaultQueryObserverOptions(t);l.optimisticResults=!0,l.onError&&(l.onError=i.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=i.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=i.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(a.isReset()||(l.retryOnMount=!1));var h=s.a.useState((function(){return new e(u,l)}))[0],d=h.getOptimisticResult(l);if(s.a.useEffect((function(){r.current=!0,a.clearReset();var t=h.subscribe(i.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return h.updateResult(),function(){r.current=!1,t()}}),[a,h]),s.a.useEffect((function(){h.setOptions(l,{listeners:!1})}),[l,h]),l.suspense&&d.isLoading)throw h.fetchOptimistic(l).then((function(t){var e=t.data;null==l.onSuccess||l.onSuccess(e),null==l.onSettled||l.onSettled(e,null)})).catch((function(t){a.clearReset(),null==l.onError||l.onError(t),null==l.onSettled||l.onSettled(void 0,t)}));if((l.suspense||l.useErrorBoundary)&&d.isError&&!d.isFetching)throw d.error;return"tracked"===l.notifyOnChangeProps&&(d=h.trackResult(d)),d}},467:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(5),s=r(24),i=r(0),u=r(19),c=r.n(u),o=r(122),a=r(119),l=r(1),h=["icon","iconOnly","children","autoFocus","className"],d=function(t){var e=t.icon,r=t.iconOnly,u=t.children,d=t.autoFocus,f=t.className,p=Object(s.a)(t,h),v=Object(i.useRef)(null);return Object(i.useEffect)((function(){var t;return d&&(t=requestAnimationFrame((function(){var t,e;null===(t=v.current)||void 0===t||null===(e=t.node)||void 0===e||e.focus()}))),function(){t&&cancelAnimationFrame(t)}}),[v,d]),Object(l.jsx)(a.a,Object(n.a)(Object(n.a)({},p),{},{ref:v,className:c()("text-primary whitespace-nowrap cursor-pointer rounded px-2 py-1",{"pr-3":!!e},f),role:"button",children:Object(l.jsxs)("div",{className:"flex items-center",children:[e&&Object(l.jsx)(o.a,{name:e}),!r&&u]})}))}},469:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(3),s=r(11),i=r(2),u=r(8),c=r(45),o=r(25),a=r(63),l=r(27),h=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(s.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),d(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&p(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&p(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&f(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var s=e.subscribe((function(e){e.isFetching||(s(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(t)},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(i.i)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var e=Object(i.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||c.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n=this.currentQuery,s=this.options,u=this.currentResult,c=this.currentResultState,o=this.currentResultOptions,l=t!==n,h=l?t.state:this.currentQueryInitialState,v=l?this.currentResult:this.previousQueryResult,b=t.state,O=b.dataUpdatedAt,y=b.error,m=b.errorUpdatedAt,j=b.isFetching,R=b.status,S=!1,g=!1;if(e.optimisticResults){var Q=this.hasListeners(),E=!Q&&d(t,e),x=Q&&f(t,n,e,s);(E||x)&&(j=!0,O||(R="loading"))}if(e.keepPreviousData&&!b.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==R)r=v.data,O=v.dataUpdatedAt,R=v.status,S=!0;else if(e.select&&"undefined"!==typeof b.data)if(u&&b.data===(null==c?void 0:c.data)&&e.select===(null==o?void 0:o.select)&&!this.previousSelectError)r=u.data;else try{r=e.select(b.data),!1!==e.structuralSharing&&(r=Object(i.n)(null==u?void 0:u.data,r)),this.previousSelectError=null}catch(I){Object(a.a)().error(I),y=I,this.previousSelectError=I,m=Date.now(),R="error"}else r=b.data;if("undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&"loading"===R){var C;if((null==u?void 0:u.isPlaceholderData)&&e.placeholderData===(null==o?void 0:o.placeholderData))C=u.data;else if(C="function"===typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&"undefined"!==typeof C)try{C=e.select(C),!1!==e.structuralSharing&&(C=Object(i.n)(null==u?void 0:u.data,C)),this.previousSelectError=null}catch(I){Object(a.a)().error(I),y=I,this.previousSelectError=I,m=Date.now(),R="error"}"undefined"!==typeof C&&(R="success",r=C,g=!0)}return{status:R,isLoading:"loading"===R,isSuccess:"success"===R,isError:"error"===R,isIdle:"idle"===R,data:r,dataUpdatedAt:O,error:y,errorUpdatedAt:m,failureCount:b.fetchFailureCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>h.dataUpdateCount||b.errorUpdateCount>h.errorUpdateCount,isFetching:j,isLoadingError:"error"===R&&0===b.dataUpdatedAt,isPlaceholderData:g,isPreviousData:S,isRefetchError:"error"===R&&0!==b.dataUpdatedAt,isStale:p(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,s=r.notifyOnChangePropsExclusions;if(!n&&!s)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,u=t[n]!==e[n],c=null==i?void 0:i.some((function(t){return t===r})),o=null==s?void 0:s.some((function(t){return t===r}));return u&&!o&&(!i||c)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.p)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"!==t.type||Object(l.c)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;u.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(o.a);function d(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&p(t,e))}(t,e)}function f(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&p(t,r)}function p(t,e){return t.isStaleByTime(e.staleTime)}},474:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(469),s=r(2),i=r(465);function u(t,e,r){var u=Object(s.l)(t,e,r);return Object(i.a)(u,n.a)}},637:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return p}));var n=r(35),s=r(42),i=r(5),u=r(0),c=r(84),o=r.n(c),a=r(467),l=r(460),h=r(464),d=r(1);function f(t,e){return Object(i.a)(Object(i.a)({},t),{},Object(s.a)({},e.type,e.payload))}var p=function(){var t=Object(h.a)("serverLocations").data,e=Object(u.useReducer)(f,{}),r=Object(n.a)(e,2),s=r[0],i=r[1],c=Object(u.useState)(!1),p=Object(n.a)(c,2),v=p[0],b=p[1],O=Object(u.useMemo)((function(){return o()(null===t||void 0===t?void 0:t.items,(function(t){var e=t.name,r=t.location;return{name:e,location:r,server:"https://".concat(r,"-speed.streambox.in"),dlURL:"/garbage.php",ulURL:"/empty.php",pingURL:"/empty.php",getIpURL:"/getIP.php"}}))}),[null===t||void 0===t?void 0:t.items]),y=Object(u.useMemo)((function(){return o()(O,(function(t){var e=new window.Speedtest;return e._settings.test_order="IP_D",e._settings.xhr_dlMultistream=1,e.setSelectedServer(t),e.onupdate=function(e){var r=e.testState,n=e.dlStatus;i({type:t.location,payload:n||(1===r||2===r)&&"\u041d\u0430\u0447\u0438\u043d\u0430\u0435\u043c"||""})},e}))}),[O,i]),m=Object(u.useState)(0),j=Object(n.a)(m,2),R=j[0],S=j[1],g=Object(u.useCallback)((function(){b(!0),S(0)}),[]),Q=Object(u.useCallback)((function(){b(!1)}),[]);return Object(u.useEffect)((function(){y[R]?v?(y[R].onend=function(){S(R+1)},3!==y[R]._state&&y[R].start()):3===y[R]._state&&y[R].abort():Q()}),[v,y,R,Q]),Object(u.useEffect)((function(){return function(){Q()}}),[Q]),Object(u.useEffect)((function(){var t=document.createElement("script");return t.src="./speedtest.js",t.async=!0,document.head.appendChild(t),function(){document.head.removeChild(t)}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{className:"m-1 mb-3",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438"}),Object(d.jsx)("div",{className:"flex justify-around",children:o()(null===t||void 0===t?void 0:t.items,(function(t){return Object(d.jsxs)("div",{className:"flex flex-col items-center",children:[Object(d.jsx)(l.a,{children:t.name}),s[t.location]||"0.00",Object(d.jsx)(l.a,{children:"Mbit/s"})]},t.id)}))}),Object(d.jsx)("div",{className:"flex justify-center pt-12",children:v?Object(d.jsx)(a.a,{icon:"stop",onClick:Q,children:"\u0421\u0442\u043e\u043f"}):Object(d.jsx)(a.a,{icon:"play_arrow",onClick:g,children:"\u041d\u0430\u0447\u0430\u0442\u044c"})})]})}}}]);
//# sourceMappingURL=20.15dbd572.chunk.js.map