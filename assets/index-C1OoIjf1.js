(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},sl={},tu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),kc=Symbol.for("react.portal"),_c=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Pc=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),zc=Symbol.for("react.memo"),jc=Symbol.for("react.lazy"),Vo=Symbol.iterator;function Mc(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ru=Object.assign,lu={};function dn(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||nu}dn.prototype.isReactComponent={};dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function iu(){}iu.prototype=dn.prototype;function Xi(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||nu}var Ki=Xi.prototype=new iu;Ki.constructor=Xi;ru(Ki,dn.prototype);Ki.isPureReactComponent=!0;var Ho=Array.isArray,ou=Object.prototype.hasOwnProperty,Yi={current:null},su={key:!0,ref:!0,__self:!0,__source:!0};function uu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ou.call(t,r)&&!su.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Jn,type:e,key:i,ref:o,props:l,_owner:Yi.current}}function Lc(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function Ic(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wo=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ic(""+e.key):t.toString(36)}function Cr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jn:case kc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Nl(o,0):r,Ho(l)?(n="",e!=null&&(n=e.replace(Wo,"$&/")+"/"),Cr(l,t,n,"",function(c){return c})):l!=null&&(Gi(l)&&(l=Lc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Wo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ho(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Nl(i,s);o+=Cr(i,t,n,u,l)}else if(u=Mc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Nl(i,s++),o+=Cr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function or(e,t,n){if(e==null)return e;var r=[],l=0;return Cr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Rc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Nr={transition:null},Oc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:Yi};function au(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!Gi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=dn;M.Fragment=_c;M.Profiler=Ec;M.PureComponent=Xi;M.StrictMode=Sc;M.Suspense=Tc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oc;M.act=au;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ru({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Yi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ou.call(t,u)&&!su.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Jn,type:e.type,key:l,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Nc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cc,_context:e},e.Consumer=e};M.createElement=uu;M.createFactory=function(e){var t=uu.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Pc,render:e}};M.isValidElement=Gi;M.lazy=function(e){return{$$typeof:jc,_payload:{_status:-1,_result:e},_init:Rc}};M.memo=function(e,t){return{$$typeof:zc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};M.unstable_act=au;M.useCallback=function(e,t){return ae.current.useCallback(e,t)};M.useContext=function(e){return ae.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};M.useEffect=function(e,t){return ae.current.useEffect(e,t)};M.useId=function(){return ae.current.useId()};M.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ae.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};M.useRef=function(e){return ae.current.useRef(e)};M.useState=function(e){return ae.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ae.current.useTransition()};M.version="18.3.1";tu.exports=M;var O=tu.exports;const Fc=wc(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=O,Uc=Symbol.for("react.element"),Ac=Symbol.for("react.fragment"),$c=Object.prototype.hasOwnProperty,qc=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)$c.call(t,r)&&!Bc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Uc,type:e,key:i,ref:o,props:l,_owner:qc.current}}sl.Fragment=Ac;sl.jsx=cu;sl.jsxs=cu;eu.exports=sl;var p=eu.exports,ei={},du={exports:{}},ke={},fu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var z=N.length;N.push(T);e:for(;0<z;){var W=z-1>>>1,G=N[W];if(0<l(G,T))N[W]=T,N[z]=G,z=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],z=N.pop();if(z!==T){N[0]=z;e:for(var W=0,G=N.length,lr=G>>>1;W<lr;){var wt=2*(W+1)-1,Cl=N[wt],kt=wt+1,ir=N[kt];if(0>l(Cl,z))kt<G&&0>l(ir,Cl)?(N[W]=ir,N[kt]=z,W=kt):(N[W]=Cl,N[wt]=z,W=wt);else if(kt<G&&0>l(ir,z))N[W]=ir,N[kt]=z,W=kt;else break e}}return T}function l(N,T){var z=N.sortIndex-T.sortIndex;return z!==0?z:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],m=1,g=null,h=3,v=!1,w=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=N)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function y(N){if(k=!1,f(N),!w)if(n(u)!==null)w=!0,Sl(_);else{var T=n(c);T!==null&&El(y,T.startTime-N)}}function _(N,T){w=!1,k&&(k=!1,d(P),P=-1),v=!0;var z=h;try{for(f(T),g=n(u);g!==null&&(!(g.expirationTime>T)||N&&!de());){var W=g.callback;if(typeof W=="function"){g.callback=null,h=g.priorityLevel;var G=W(g.expirationTime<=T);T=e.unstable_now(),typeof G=="function"?g.callback=G:g===n(u)&&r(u),f(T)}else r(u);g=n(u)}if(g!==null)var lr=!0;else{var wt=n(c);wt!==null&&El(y,wt.startTime-T),lr=!1}return lr}finally{g=null,h=z,v=!1}}var S=!1,E=null,P=-1,R=5,j=-1;function de(){return!(e.unstable_now()-j<R)}function Ze(){if(E!==null){var N=e.unstable_now();j=N;var T=!0;try{T=E(!0,N)}finally{T?mn():(S=!1,E=null)}}else S=!1}var mn;if(typeof a=="function")mn=function(){a(Ze)};else if(typeof MessageChannel<"u"){var Bo=new MessageChannel,xc=Bo.port2;Bo.port1.onmessage=Ze,mn=function(){xc.postMessage(null)}}else mn=function(){I(Ze,0)};function Sl(N){E=N,S||(S=!0,mn())}function El(N,T){P=I(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Sl(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var z=h;h=T;try{return N()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return T()}finally{h=z}},e.unstable_scheduleCallback=function(N,T,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=z+G,N={id:m++,callback:T,priorityLevel:N,startTime:z,expirationTime:G,sortIndex:-1},z>W?(N.sortIndex=z,t(c,N),n(u)===null&&N===n(c)&&(k?(d(P),P=-1):k=!0,El(y,z-W))):(N.sortIndex=G,t(u,N),w||v||(w=!0,Sl(_))),N},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(N){var T=h;return function(){var z=h;h=T;try{return N.apply(this,arguments)}finally{h=z}}}})(pu);fu.exports=pu;var Vc=fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=O,we=Vc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mu=new Set,Fn={};function Rt(e,t){rn(e,t),rn(e+"Capture",t)}function rn(e,t){for(Fn[e]=t,e=0;e<t.length;e++)mu.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,Wc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qo={},Xo={};function Qc(e){return ti.call(Xo,e)?!0:ti.call(Qo,e)?!1:Wc.test(e)?Xo[e]=!0:(Qo[e]=!0,!1)}function Xc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kc(e,t,n,r){if(t===null||typeof t>"u"||Xc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zi=/[\-:]([a-z])/g;function bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zi,bi);te[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zi,bi);te[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zi,bi);te[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ji(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kc(t,n,l,r)&&(n=null),r||l===null?Qc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),eo=Symbol.for("react.strict_mode"),ni=Symbol.for("react.profiler"),hu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),to=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),no=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),yu=Symbol.for("react.offscreen"),Ko=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Pl;function Sn(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Tl=!1;function zl(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Yc(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case Ut:return"Portal";case ni:return"Profiler";case eo:return"StrictMode";case ri:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gu:return(e.displayName||"Context")+".Consumer";case hu:return(e._context.displayName||"Context")+".Provider";case to:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case no:return t=e.displayName||null,t!==null?t:ii(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return ii(e(t))}catch{}}return null}function Gc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(t);case 8:return t===eo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zc(e){var t=vu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ur(e){e._valueTracker||(e._valueTracker=Zc(e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oi(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wu(e,t){t=t.checked,t!=null&&Ji(e,"checked",t,!1)}function si(e,t){wu(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&ui(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Go(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ui(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(En(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function ku(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,Su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bc=["Webkit","ms","Moz","O"];Object.keys(Pn).forEach(function(e){bc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pn[t]=Pn[e]})});function Eu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pn.hasOwnProperty(e)&&Pn[e]?(""+t).trim():t+"px"}function Cu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Eu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Jc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(Jc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,Zt=null,bt=null;function Jo(e){if(e=nr(e)){if(typeof mi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=fl(t),mi(e.stateNode,e.type,t))}}function Nu(e){Zt?bt?bt.push(e):bt=[e]:Zt=e}function Pu(){if(Zt){var e=Zt,t=bt;if(bt=Zt=null,Jo(e),t)for(e=0;e<t.length;e++)Jo(t[e])}}function Tu(e,t){return e(t)}function zu(){}var jl=!1;function ju(e,t,n){if(jl)return e(t,n);jl=!0;try{return Tu(e,t,n)}finally{jl=!1,(Zt!==null||bt!==null)&&(zu(),Pu())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var hi=!1;if(Qe)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){hi=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{hi=!1}function ed(e,t,n,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Tn=!1,Ur=null,Ar=!1,gi=null,td={onError:function(e){Tn=!0,Ur=e}};function nd(e,t,n,r,l,i,o,s,u){Tn=!1,Ur=null,ed.apply(td,arguments)}function rd(e,t,n,r,l,i,o,s,u){if(nd.apply(this,arguments),Tn){if(Tn){var c=Ur;Tn=!1,Ur=null}else throw Error(x(198));Ar||(Ar=!0,gi=c)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function es(e){if(Ot(e)!==e)throw Error(x(188))}function ld(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return es(l),e;if(i===r)return es(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Lu(e){return e=ld(e),e!==null?Iu(e):null}function Iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Iu(e);if(t!==null)return t;e=e.sibling}return null}var Ru=we.unstable_scheduleCallback,ts=we.unstable_cancelCallback,id=we.unstable_shouldYield,od=we.unstable_requestPaint,Q=we.unstable_now,sd=we.unstable_getCurrentPriorityLevel,lo=we.unstable_ImmediatePriority,Ou=we.unstable_UserBlockingPriority,$r=we.unstable_NormalPriority,ud=we.unstable_LowPriority,Fu=we.unstable_IdlePriority,ul=null,Ae=null;function ad(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:fd,cd=Math.log,dd=Math.LN2;function fd(e){return e>>>=0,e===0?32:31-(cd(e)/dd|0)|0}var cr=64,dr=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Cn(s):(i&=o,i!==0&&(r=Cn(i)))}else o=n&~l,o!==0?r=Cn(o):i!==0&&(r=Cn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ie(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=pd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Du(){var e=cr;return cr<<=1,!(cr&4194240)&&(cr=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function hd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function io(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Au,oo,$u,qu,Bu,vi=!1,fr=[],st=null,ut=null,at=null,An=new Map,$n=new Map,rt=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ns(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function yn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=nr(t),t!==null&&oo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yd(e,t,n,r,l){switch(t){case"focusin":return st=yn(st,e,t,n,r,l),!0;case"dragenter":return ut=yn(ut,e,t,n,r,l),!0;case"mouseover":return at=yn(at,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return An.set(i,yn(An.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,$n.set(i,yn($n.get(i)||null,e,t,n,r,l)),!0}return!1}function Vu(e){var t=Et(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Mu(n),t!==null){e.blockedOn=t,Bu(e.priority,function(){$u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=nr(n),t!==null&&oo(t),e.blockedOn=n,!1;t.shift()}return!0}function rs(e,t,n){Pr(e)&&n.delete(t)}function vd(){vi=!1,st!==null&&Pr(st)&&(st=null),ut!==null&&Pr(ut)&&(ut=null),at!==null&&Pr(at)&&(at=null),An.forEach(rs),$n.forEach(rs)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,vd)))}function qn(e){function t(l){return vn(l,e)}if(0<fr.length){vn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&vn(st,e),ut!==null&&vn(ut,e),at!==null&&vn(at,e),An.forEach(t),$n.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Vu(n),n.blockedOn===null&&rt.shift()}var Jt=Ge.ReactCurrentBatchConfig,Br=!0;function xd(e,t,n,r){var l=F,i=Jt.transition;Jt.transition=null;try{F=1,so(e,t,n,r)}finally{F=l,Jt.transition=i}}function wd(e,t,n,r){var l=F,i=Jt.transition;Jt.transition=null;try{F=4,so(e,t,n,r)}finally{F=l,Jt.transition=i}}function so(e,t,n,r){if(Br){var l=xi(e,t,n,r);if(l===null)ql(e,t,r,Vr,n),ns(e,r);else if(yd(l,e,t,n,r))r.stopPropagation();else if(ns(e,r),t&4&&-1<gd.indexOf(e)){for(;l!==null;){var i=nr(l);if(i!==null&&Au(i),i=xi(e,t,n,r),i===null&&ql(e,t,r,Vr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ql(e,t,r,null,n)}}var Vr=null;function xi(e,t,n,r){if(Vr=null,e=ro(r),e=Et(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Mu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function Hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sd()){case lo:return 1;case Ou:return 4;case $r:case ud:return 16;case Fu:return 536870912;default:return 16}default:return 16}}var it=null,uo=null,Tr=null;function Wu(){if(Tr)return Tr;var e,t=uo,n=t.length,r,l="value"in it?it.value:it.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Tr=l.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function ls(){return!1}function _e(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pr:ls,this.isPropagationStopped=ls,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=_e(fn),tr=V({},fn,{view:0,detail:0}),kd=_e(tr),Ll,Il,xn,al=V({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Ll=e.screenX-xn.screenX,Il=e.screenY-xn.screenY):Il=Ll=0,xn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),is=_e(al),_d=V({},al,{dataTransfer:0}),Sd=_e(_d),Ed=V({},tr,{relatedTarget:0}),Rl=_e(Ed),Cd=V({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nd=_e(Cd),Pd=V({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Td=_e(Pd),zd=V({},fn,{data:0}),os=_e(zd),jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Id(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ld[e])?!!t[e]:!1}function co(){return Id}var Rd=V({},tr,{key:function(e){if(e.key){var t=jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Od=_e(Rd),Fd=V({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=_e(Fd),Dd=V({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),Ud=_e(Dd),Ad=V({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=_e(Ad),qd=V({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=_e(qd),Vd=[9,13,27,32],fo=Qe&&"CompositionEvent"in window,zn=null;Qe&&"documentMode"in document&&(zn=document.documentMode);var Hd=Qe&&"TextEvent"in window&&!zn,Qu=Qe&&(!fo||zn&&8<zn&&11>=zn),us=" ",as=!1;function Xu(e,t){switch(e){case"keyup":return Vd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Wd(e,t){switch(e){case"compositionend":return Ku(t);case"keypress":return t.which!==32?null:(as=!0,us);case"textInput":return e=t.data,e===us&&as?null:e;default:return null}}function Qd(e,t){if($t)return e==="compositionend"||!fo&&Xu(e,t)?(e=Wu(),Tr=uo=it=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qu&&t.locale!=="ko"?null:t.data;default:return null}}var Xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xd[e.type]:t==="textarea"}function Yu(e,t,n,r){Nu(r),t=Hr(t,"onChange"),0<t.length&&(n=new ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jn=null,Bn=null;function Kd(e){oa(e,0)}function cl(e){var t=Vt(e);if(xu(t))return e}function Yd(e,t){if(e==="change")return t}var Gu=!1;if(Qe){var Ol;if(Qe){var Fl="oninput"in document;if(!Fl){var ds=document.createElement("div");ds.setAttribute("oninput","return;"),Fl=typeof ds.oninput=="function"}Ol=Fl}else Ol=!1;Gu=Ol&&(!document.documentMode||9<document.documentMode)}function fs(){jn&&(jn.detachEvent("onpropertychange",Zu),Bn=jn=null)}function Zu(e){if(e.propertyName==="value"&&cl(Bn)){var t=[];Yu(t,Bn,e,ro(e)),ju(Kd,t)}}function Gd(e,t,n){e==="focusin"?(fs(),jn=t,Bn=n,jn.attachEvent("onpropertychange",Zu)):e==="focusout"&&fs()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Bn)}function bd(e,t){if(e==="click")return cl(t)}function Jd(e,t){if(e==="input"||e==="change")return cl(t)}function ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:ef;function Vn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ti.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ms(e,t){var n=ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ps(n)}}function bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tf(e){var t=Ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bu(n.ownerDocument.documentElement,n)){if(r!==null&&po(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ms(n,i);var o=ms(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nf=Qe&&"documentMode"in document&&11>=document.documentMode,qt=null,wi=null,Mn=null,ki=!1;function hs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ki||qt==null||qt!==Dr(r)||(r=qt,"selectionStart"in r&&po(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Vn(Mn,r)||(Mn=r,r=Hr(wi,"onSelect"),0<r.length&&(t=new ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Dl={},ea={};Qe&&(ea=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function dl(e){if(Dl[e])return Dl[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ea)return Dl[e]=t[n];return e}var ta=dl("animationend"),na=dl("animationiteration"),ra=dl("animationstart"),la=dl("transitionend"),ia=new Map,gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){ia.set(e,t),Rt(t,[e])}for(var Ul=0;Ul<gs.length;Ul++){var Al=gs[Ul],rf=Al.toLowerCase(),lf=Al[0].toUpperCase()+Al.slice(1);yt(rf,"on"+lf)}yt(ta,"onAnimationEnd");yt(na,"onAnimationIteration");yt(ra,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(la,"onTransitionEnd");rn("onMouseEnter",["mouseout","mouseover"]);rn("onMouseLeave",["mouseout","mouseover"]);rn("onPointerEnter",["pointerout","pointerover"]);rn("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),of=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function ys(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rd(r,t,void 0,e),e.currentTarget=null}function oa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;ys(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;ys(l,s,c),i=u}}}if(Ar)throw e=gi,Ar=!1,gi=null,e}function U(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(sa(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),sa(n,e,r,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[hr]){e[hr]=!0,mu.forEach(function(n){n!=="selectionchange"&&(of.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,$l("selectionchange",!1,t))}}function sa(e,t,n,r){switch(Hu(t)){case 1:var l=xd;break;case 4:l=wd;break;default:l=so}n=l.bind(null,t,n,e),l=void 0,!hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ql(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Et(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}ju(function(){var c=i,m=ro(n),g=[];e:{var h=ia.get(e);if(h!==void 0){var v=ao,w=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":v=Od;break;case"focusin":w="focus",v=Rl;break;case"focusout":w="blur",v=Rl;break;case"beforeblur":case"afterblur":v=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ud;break;case ta:case na:case ra:v=Nd;break;case la:v=$d;break;case"scroll":v=kd;break;case"wheel":v=Bd;break;case"copy":case"cut":case"paste":v=Td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ss}var k=(t&4)!==0,I=!k&&e==="scroll",d=k?h!==null?h+"Capture":null:h;k=[];for(var a=c,f;a!==null;){f=a;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Un(a,d),y!=null&&k.push(Wn(a,y,f)))),I)break;a=a.return}0<k.length&&(h=new v(h,w,null,n,m),g.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==pi&&(w=n.relatedTarget||n.fromElement)&&(Et(w)||w[Xe]))break e;if((v||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Et(w):null,w!==null&&(I=Ot(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(k=is,y="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=ss,y="onPointerLeave",d="onPointerEnter",a="pointer"),I=v==null?h:Vt(v),f=w==null?h:Vt(w),h=new k(y,a+"leave",v,n,m),h.target=I,h.relatedTarget=f,y=null,Et(m)===c&&(k=new k(d,a+"enter",w,n,m),k.target=f,k.relatedTarget=I,y=k),I=y,v&&w)t:{for(k=v,d=w,a=0,f=k;f;f=Ft(f))a++;for(f=0,y=d;y;y=Ft(y))f++;for(;0<a-f;)k=Ft(k),a--;for(;0<f-a;)d=Ft(d),f--;for(;a--;){if(k===d||d!==null&&k===d.alternate)break t;k=Ft(k),d=Ft(d)}k=null}else k=null;v!==null&&vs(g,h,v,k,!1),w!==null&&I!==null&&vs(g,I,w,k,!0)}}e:{if(h=c?Vt(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var _=Yd;else if(cs(h))if(Gu)_=Jd;else{_=Zd;var S=Gd}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=bd);if(_&&(_=_(e,c))){Yu(g,_,n,m);break e}S&&S(e,h,c),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&ui(h,"number",h.value)}switch(S=c?Vt(c):window,e){case"focusin":(cs(S)||S.contentEditable==="true")&&(qt=S,wi=c,Mn=null);break;case"focusout":Mn=wi=qt=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,hs(g,n,m);break;case"selectionchange":if(nf)break;case"keydown":case"keyup":hs(g,n,m)}var E;if(fo)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $t?Xu(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Qu&&n.locale!=="ko"&&($t||P!=="onCompositionStart"?P==="onCompositionEnd"&&$t&&(E=Wu()):(it=m,uo="value"in it?it.value:it.textContent,$t=!0)),S=Hr(c,P),0<S.length&&(P=new os(P,e,null,n,m),g.push({event:P,listeners:S}),E?P.data=E:(E=Ku(n),E!==null&&(P.data=E)))),(E=Hd?Wd(e,n):Qd(e,n))&&(c=Hr(c,"onBeforeInput"),0<c.length&&(m=new os("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:c}),m.data=E))}oa(g,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Un(e,n),i!=null&&r.unshift(Wn(e,i,l)),i=Un(e,t),i!=null&&r.push(Wn(e,i,l))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Un(n,i),u!=null&&o.unshift(Wn(n,u,s))):l||(u=Un(n,i),u!=null&&o.push(Wn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var sf=/\r\n?/g,uf=/\u0000|\uFFFD/g;function xs(e){return(typeof e=="string"?e:""+e).replace(sf,`
`).replace(uf,"")}function gr(e,t,n){if(t=xs(t),xs(e)!==t&&n)throw Error(x(425))}function Wr(){}var _i=null,Si=null;function Ei(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,af=typeof clearTimeout=="function"?clearTimeout:void 0,ws=typeof Promise=="function"?Promise:void 0,cf=typeof queueMicrotask=="function"?queueMicrotask:typeof ws<"u"?function(e){return ws.resolve(null).then(e).catch(df)}:Ci;function df(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);qn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+pn,Qn="__reactProps$"+pn,Xe="__reactContainer$"+pn,Ni="__reactEvents$"+pn,ff="__reactListeners$"+pn,pf="__reactHandles$"+pn;function Et(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ks(e);e!==null;){if(n=e[Ue])return n;e=ks(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[Ue]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function fl(e){return e[Qn]||null}var Pi=[],Ht=-1;function vt(e){return{current:e}}function A(e){0>Ht||(e.current=Pi[Ht],Pi[Ht]=null,Ht--)}function D(e,t){Ht++,Pi[Ht]=e.current,e.current=t}var gt={},oe=vt(gt),me=vt(!1),zt=gt;function ln(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Qr(){A(me),A(oe)}function _s(e,t,n){if(oe.current!==gt)throw Error(x(168));D(oe,t),D(me,n)}function ua(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Gc(e)||"Unknown",l));return V({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,zt=oe.current,D(oe,e),D(me,me.current),!0}function Ss(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=ua(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,A(me),A(oe),D(oe,e)):A(me),D(me,n)}var Be=null,pl=!1,Vl=!1;function aa(e){Be===null?Be=[e]:Be.push(e)}function mf(e){pl=!0,aa(e)}function xt(){if(!Vl&&Be!==null){Vl=!0;var e=0,t=F;try{var n=Be;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,pl=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Ru(lo,xt),l}finally{F=t,Vl=!1}}return null}var Wt=[],Qt=0,Kr=null,Yr=0,Se=[],Ee=0,jt=null,Ve=1,He="";function _t(e,t){Wt[Qt++]=Yr,Wt[Qt++]=Kr,Kr=e,Yr=t}function ca(e,t,n){Se[Ee++]=Ve,Se[Ee++]=He,Se[Ee++]=jt,jt=e;var r=Ve;e=He;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var i=32-Ie(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Ie(t)+l|n<<l|r,He=i+e}else Ve=1<<i|n<<l|r,He=e}function mo(e){e.return!==null&&(_t(e,1),ca(e,1,0))}function ho(e){for(;e===Kr;)Kr=Wt[--Qt],Wt[Qt]=null,Yr=Wt[--Qt],Wt[Qt]=null;for(;e===jt;)jt=Se[--Ee],Se[Ee]=null,He=Se[--Ee],Se[Ee]=null,Ve=Se[--Ee],Se[Ee]=null}var xe=null,ve=null,$=!1,Le=null;function da(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ve=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ve=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if($){var t=ve;if(t){var n=t;if(!Es(e,t)){if(Ti(e))throw Error(x(418));t=ct(n.nextSibling);var r=xe;t&&Es(e,t)?da(r,n):(e.flags=e.flags&-4097|2,$=!1,xe=e)}}else{if(Ti(e))throw Error(x(418));e.flags=e.flags&-4097|2,$=!1,xe=e}}}function Cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function yr(e){if(e!==xe)return!1;if(!$)return Cs(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ei(e.type,e.memoizedProps)),t&&(t=ve)){if(Ti(e))throw fa(),Error(x(418));for(;t;)da(e,t),t=ct(t.nextSibling)}if(Cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=xe?ct(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=ve;e;)e=ct(e.nextSibling)}function on(){ve=xe=null,$=!1}function go(e){Le===null?Le=[e]:Le.push(e)}var hf=Ge.ReactCurrentBatchConfig;function wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ns(e){var t=e._init;return t(e._payload)}function pa(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=mt(d,a),d.index=0,d.sibling=null,d}function i(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,a,f,y){return a===null||a.tag!==6?(a=Gl(f,d.mode,y),a.return=d,a):(a=l(a,f),a.return=d,a)}function u(d,a,f,y){var _=f.type;return _===At?m(d,a,f.props.children,y,f.key):a!==null&&(a.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===tt&&Ns(_)===a.type)?(y=l(a,f.props),y.ref=wn(d,a,f),y.return=d,y):(y=Fr(f.type,f.key,f.props,null,d.mode,y),y.ref=wn(d,a,f),y.return=d,y)}function c(d,a,f,y){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Zl(f,d.mode,y),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function m(d,a,f,y,_){return a===null||a.tag!==7?(a=Tt(f,d.mode,y,_),a.return=d,a):(a=l(a,f),a.return=d,a)}function g(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Gl(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case sr:return f=Fr(a.type,a.key,a.props,null,d.mode,f),f.ref=wn(d,null,a),f.return=d,f;case Ut:return a=Zl(a,d.mode,f),a.return=d,a;case tt:var y=a._init;return g(d,y(a._payload),f)}if(En(a)||hn(a))return a=Tt(a,d.mode,f,null),a.return=d,a;vr(d,a)}return null}function h(d,a,f,y){var _=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:s(d,a,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:return f.key===_?u(d,a,f,y):null;case Ut:return f.key===_?c(d,a,f,y):null;case tt:return _=f._init,h(d,a,_(f._payload),y)}if(En(f)||hn(f))return _!==null?null:m(d,a,f,y,null);vr(d,f)}return null}function v(d,a,f,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,s(a,d,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sr:return d=d.get(y.key===null?f:y.key)||null,u(a,d,y,_);case Ut:return d=d.get(y.key===null?f:y.key)||null,c(a,d,y,_);case tt:var S=y._init;return v(d,a,f,S(y._payload),_)}if(En(y)||hn(y))return d=d.get(f)||null,m(a,d,y,_,null);vr(a,y)}return null}function w(d,a,f,y){for(var _=null,S=null,E=a,P=a=0,R=null;E!==null&&P<f.length;P++){E.index>P?(R=E,E=null):R=E.sibling;var j=h(d,E,f[P],y);if(j===null){E===null&&(E=R);break}e&&E&&j.alternate===null&&t(d,E),a=i(j,a,P),S===null?_=j:S.sibling=j,S=j,E=R}if(P===f.length)return n(d,E),$&&_t(d,P),_;if(E===null){for(;P<f.length;P++)E=g(d,f[P],y),E!==null&&(a=i(E,a,P),S===null?_=E:S.sibling=E,S=E);return $&&_t(d,P),_}for(E=r(d,E);P<f.length;P++)R=v(E,d,P,f[P],y),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?P:R.key),a=i(R,a,P),S===null?_=R:S.sibling=R,S=R);return e&&E.forEach(function(de){return t(d,de)}),$&&_t(d,P),_}function k(d,a,f,y){var _=hn(f);if(typeof _!="function")throw Error(x(150));if(f=_.call(f),f==null)throw Error(x(151));for(var S=_=null,E=a,P=a=0,R=null,j=f.next();E!==null&&!j.done;P++,j=f.next()){E.index>P?(R=E,E=null):R=E.sibling;var de=h(d,E,j.value,y);if(de===null){E===null&&(E=R);break}e&&E&&de.alternate===null&&t(d,E),a=i(de,a,P),S===null?_=de:S.sibling=de,S=de,E=R}if(j.done)return n(d,E),$&&_t(d,P),_;if(E===null){for(;!j.done;P++,j=f.next())j=g(d,j.value,y),j!==null&&(a=i(j,a,P),S===null?_=j:S.sibling=j,S=j);return $&&_t(d,P),_}for(E=r(d,E);!j.done;P++,j=f.next())j=v(E,d,P,j.value,y),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?P:j.key),a=i(j,a,P),S===null?_=j:S.sibling=j,S=j);return e&&E.forEach(function(Ze){return t(d,Ze)}),$&&_t(d,P),_}function I(d,a,f,y){if(typeof f=="object"&&f!==null&&f.type===At&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:e:{for(var _=f.key,S=a;S!==null;){if(S.key===_){if(_=f.type,_===At){if(S.tag===7){n(d,S.sibling),a=l(S,f.props.children),a.return=d,d=a;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===tt&&Ns(_)===S.type){n(d,S.sibling),a=l(S,f.props),a.ref=wn(d,S,f),a.return=d,d=a;break e}n(d,S);break}else t(d,S);S=S.sibling}f.type===At?(a=Tt(f.props.children,d.mode,y,f.key),a.return=d,d=a):(y=Fr(f.type,f.key,f.props,null,d.mode,y),y.ref=wn(d,a,f),y.return=d,d=y)}return o(d);case Ut:e:{for(S=f.key;a!==null;){if(a.key===S)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=Zl(f,d.mode,y),a.return=d,d=a}return o(d);case tt:return S=f._init,I(d,a,S(f._payload),y)}if(En(f))return w(d,a,f,y);if(hn(f))return k(d,a,f,y);vr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=l(a,f),a.return=d,d=a):(n(d,a),a=Gl(f,d.mode,y),a.return=d,d=a),o(d)):n(d,a)}return I}var sn=pa(!0),ma=pa(!1),Gr=vt(null),Zr=null,Xt=null,yo=null;function vo(){yo=Xt=Zr=null}function xo(e){var t=Gr.current;A(Gr),e._currentValue=t}function ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function en(e,t){Zr=e,yo=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(yo!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(Zr===null)throw Error(x(308));Xt=e,Zr.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Ct=null;function wo(e){Ct===null?Ct=[e]:Ct.push(e)}function ha(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,wo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,wo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,io(e,n)}}function Ps(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function br(e,t,n,r){var l=e.updateQueue;nt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;o=0,m=c=u=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(h=t,v=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){g=w.call(v,g,h);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,h=typeof w=="function"?w.call(v,g,h):w,h==null)break e;g=V({},g,h);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=v,u=g):m=m.next=v,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Lt|=o,e.lanes=o,e.memoizedState=g}}function Ts(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var rr={},$e=vt(rr),Xn=vt(rr),Kn=vt(rr);function Nt(e){if(e===rr)throw Error(x(174));return e}function _o(e,t){switch(D(Kn,t),D(Xn,e),D($e,rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ci(t,e)}A($e),D($e,t)}function un(){A($e),A(Xn),A(Kn)}function ya(e){Nt(Kn.current);var t=Nt($e.current),n=ci(t,e.type);t!==n&&(D(Xn,e),D($e,n))}function So(e){Xn.current===e&&(A($e),A(Xn))}var q=vt(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Eo(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Mr=Ge.ReactCurrentDispatcher,Wl=Ge.ReactCurrentBatchConfig,Mt=0,B=null,K=null,Z=null,el=!1,Ln=!1,Yn=0,gf=0;function re(){throw Error(x(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function No(e,t,n,r,l,i){if(Mt=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?wf:kf,e=n(r,l),Ln){i=0;do{if(Ln=!1,Yn=0,25<=i)throw Error(x(301));i+=1,Z=K=null,t.updateQueue=null,Mr.current=_f,e=n(r,l)}while(Ln)}if(Mr.current=tl,t=K!==null&&K.next!==null,Mt=0,Z=K=B=null,el=!1,t)throw Error(x(300));return e}function Po(){var e=Yn!==0;return Yn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Te(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?B.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(x(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function Gn(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Te(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var m=c.lane;if((Mt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,o=r):u=u.next=g,B.lanes|=m,Lt|=m}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,Oe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,Lt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=Te(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Oe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function va(){}function xa(e,t){var n=B,r=Te(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,To(_a.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Zn(9,ka.bind(null,n,r,l,t),void 0,null),b===null)throw Error(x(349));Mt&30||wa(n,t,l)}return l}function wa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ka(e,t,n,r){t.value=n,t.getSnapshot=r,Sa(t)&&Ea(e)}function _a(e,t,n){return n(function(){Sa(t)&&Ea(e)})}function Sa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function Ea(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function zs(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=xf.bind(null,B,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ca(){return Te().memoizedState}function Lr(e,t,n,r){var l=De();B.flags|=e,l.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function ml(e,t,n,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&Co(r,o.deps)){l.memoizedState=Zn(t,n,i,r);return}}B.flags|=e,l.memoizedState=Zn(1|t,n,i,r)}function js(e,t){return Lr(8390656,8,e,t)}function To(e,t){return ml(2048,8,e,t)}function Na(e,t){return ml(4,2,e,t)}function Pa(e,t){return ml(4,4,e,t)}function Ta(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function za(e,t,n){return n=n!=null?n.concat([e]):null,ml(4,4,Ta.bind(null,t,e),n)}function zo(){}function ja(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ma(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Co(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function La(e,t,n){return Mt&21?(Oe(n,t)||(n=Du(),B.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function yf(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{F=n,Wl.transition=r}}function Ia(){return Te().memoizedState}function vf(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ra(e))Oa(t,n);else if(n=ha(e,t,n,r),n!==null){var l=ue();Re(n,e,r,l),Fa(n,t,r)}}function xf(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ra(e))Oa(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Oe(s,o)){var u=t.interleaved;u===null?(l.next=l,wo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ha(e,t,l,r),n!==null&&(l=ue(),Re(n,e,r,l),Fa(n,t,r))}}function Ra(e){var t=e.alternate;return e===B||t!==null&&t===B}function Oa(e,t){Ln=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,io(e,n)}}var tl={readContext:Pe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},wf={readContext:Pe,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,Ta.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:zs,useDebugValue:zo,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=zs(!1),t=e[0];return e=yf.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=De();if($){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),b===null)throw Error(x(349));Mt&30||wa(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,js(_a.bind(null,r,i,e),[e]),r.flags|=2048,Zn(9,ka.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=De(),t=b.identifierPrefix;if($){var n=He,r=Ve;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kf={readContext:Pe,useCallback:ja,useContext:Pe,useEffect:To,useImperativeHandle:za,useInsertionEffect:Na,useLayoutEffect:Pa,useMemo:Ma,useReducer:Ql,useRef:Ca,useState:function(){return Ql(Gn)},useDebugValue:zo,useDeferredValue:function(e){var t=Te();return La(t,K.memoizedState,e)},useTransition:function(){var e=Ql(Gn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:va,useSyncExternalStore:xa,useId:Ia,unstable_isNewReconciler:!1},_f={readContext:Pe,useCallback:ja,useContext:Pe,useEffect:To,useImperativeHandle:za,useInsertionEffect:Na,useLayoutEffect:Pa,useMemo:Ma,useReducer:Xl,useRef:Ca,useState:function(){return Xl(Gn)},useDebugValue:zo,useDeferredValue:function(e){var t=Te();return K===null?t.memoizedState=e:La(t,K.memoizedState,e)},useTransition:function(){var e=Xl(Gn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:va,useSyncExternalStore:xa,useId:Ia,unstable_isNewReconciler:!1};function je(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=pt(e),i=We(r,l);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Re(t,e,l,r),jr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=pt(e),i=We(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Re(t,e,l,r),jr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=pt(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(Re(t,e,r,n),jr(t,e,r))}};function Ms(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Vn(n,r)||!Vn(l,i):!0}function Da(e,t,n){var r=!1,l=gt,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(l=he(t)?zt:oe.current,r=t.contextTypes,i=(r=r!=null)?ln(e,l):gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Li(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ko(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Pe(i):(i=he(t)?zt:oe.current,l.context=ln(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Mi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&hl.enqueueReplaceState(l,l.state,null),br(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Yc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ii(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sf=typeof WeakMap=="function"?WeakMap:Map;function Ua(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,Vi=r),Ii(e,t)},n}function Aa(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ii(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ii(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Df.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Os(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Ef=Ge.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?ma(t,null,n,r):sn(t,e.child,n,r)}function Fs(e,t,n,r,l){n=n.render;var i=t.ref;return en(t,l),r=No(e,t,n,r,i,l),n=Po(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):($&&n&&mo(t),t.flags|=1,se(e,t,r,l),t.child)}function Ds(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Do(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$a(e,t,i,r,l)):(e=Fr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vn,n(o,r)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Vn(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return Ri(e,t,n,r,l)}function qa(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Yt,ye),ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Yt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Yt,ye),ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(Yt,ye),ye|=r;return se(e,t,l,n),t.child}function Ba(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ri(e,t,n,r,l){var i=he(n)?zt:oe.current;return i=ln(t,i),en(t,l),n=No(e,t,n,r,i,l),r=Po(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):($&&r&&mo(t),t.flags|=1,se(e,t,n,l),t.child)}function Us(e,t,n,r,l){if(he(n)){var i=!0;Xr(t)}else i=!1;if(en(t,l),t.stateNode===null)Ir(e,t),Da(t,n,r),Li(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=he(n)?zt:oe.current,c=ln(t,c));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Ls(t,o,r,c),nt=!1;var h=t.memoizedState;o.state=h,br(t,r,o,l),u=t.memoizedState,s!==r||h!==u||me.current||nt?(typeof m=="function"&&(Mi(t,n,m,r),u=t.memoizedState),(s=nt||Ms(t,n,s,r,h,u,c))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ga(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:je(t.type,s),o.props=c,g=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pe(u):(u=he(n)?zt:oe.current,u=ln(t,u));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==g||h!==u)&&Ls(t,o,r,u),nt=!1,h=t.memoizedState,o.state=h,br(t,r,o,l);var w=t.memoizedState;s!==g||h!==w||me.current||nt?(typeof v=="function"&&(Mi(t,n,v,r),w=t.memoizedState),(c=nt||Ms(t,n,c,r,h,w,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Oi(e,t,n,r,i,l)}function Oi(e,t,n,r,l,i){Ba(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ss(t,n,!1),Ye(e,t,i);r=t.stateNode,Ef.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=sn(t,e.child,null,i),t.child=sn(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&Ss(t,n,!0),t.child}function Va(e){var t=e.stateNode;t.pendingContext?_s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_s(e,t.context,!1),_o(e,t.containerInfo)}function As(e,t,n,r,l){return on(),go(l),t.flags|=256,se(e,t,n,r),t.child}var Fi={dehydrated:null,treeContext:null,retryLane:0};function Di(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ha(e,t,n){var r=t.pendingProps,l=q.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(q,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=vl(o,r,0,null),e=Tt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Di(n),t.memoizedState=Fi,e):jo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Cf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=mt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=mt(s,i):(i=Tt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Di(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Fi,r}return i=e.child,e=i.sibling,r=mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jo(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xr(e,t,n,r){return r!==null&&go(r),sn(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(x(422))),xr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=vl({mode:"visible",children:r.children},l,0,null),i=Tt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&sn(t,e.child,null,o),t.child.memoizedState=Di(o),t.memoizedState=Fi,i);if(!(t.mode&1))return xr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(x(419)),r=Kl(i,r,void 0),xr(e,t,o,r)}if(s=(o&e.childLanes)!==0,pe||s){if(r=b,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Re(r,e,l,-1))}return Fo(),r=Kl(Error(x(421))),xr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Uf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=ct(l.nextSibling),xe=t,$=!0,Le=null,e!==null&&(Se[Ee++]=Ve,Se[Ee++]=He,Se[Ee++]=jt,Ve=e.id,He=e.overflow,jt=t),t=jo(t,r.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ji(e.return,t,n)}function Yl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Wa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Yl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Jr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ir(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nf(e,t,n){switch(t.tag){case 3:Va(t),on();break;case 5:ya(t);break;case 1:he(t.type)&&Xr(t);break;case 4:_o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Gr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Ha(e,t,n):(D(q,q.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);D(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,qa(e,t,n)}return Ye(e,t,n)}var Qa,Ui,Xa,Ka;Qa=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};Xa=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Nt($e.current);var i=null;switch(n){case"input":l=oi(e,l),r=oi(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=ai(e,l),r=ai(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}di(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ka=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pf(e,t,n){var r=t.pendingProps;switch(ho(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&Qr(),le(t),null;case 3:return r=t.stateNode,un(),A(me),A(oe),Eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Qi(Le),Le=null))),Ui(e,t),le(t),null;case 5:So(t);var l=Nt(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)Xa(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return le(t),null}if(e=Nt($e.current),yr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ue]=t,r[Qn]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Nn.length;l++)U(Nn[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Yo(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Zo(r,i),U("invalid",r)}di(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&gr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&gr(r.textContent,s,e),l=["children",""+s]):Fn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":ur(r),Go(r,i,!0);break;case"textarea":ur(r),bo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_u(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Qn]=r,Qa(e,t,!1,!1),t.stateNode=e;e:{switch(o=fi(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nn.length;l++)U(Nn[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Yo(e,r),l=oi(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),U("invalid",e);break;case"textarea":Zo(e,r),l=ai(e,r),U("invalid",e);break;default:l=r}di(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Cu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Su(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&U("scroll",e):u!=null&&Ji(e,i,u,o))}switch(n){case"input":ur(e),Go(e,r,!1);break;case"textarea":ur(e),bo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Ka(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Nt(Kn.current),Nt($e.current),yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return le(t),null;case 13:if(A(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ve!==null&&t.mode&1&&!(t.flags&128))fa(),on(),t.flags|=98560,i=!1;else if(i=yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Ue]=t}else on(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Le!==null&&(Qi(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?Y===0&&(Y=3):Fo())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return un(),Ui(e,t),e===null&&Hn(t.stateNode.containerInfo),le(t),null;case 10:return xo(t.type._context),le(t),null;case 17:return he(t.type)&&Qr(),le(t),null;case 19:if(A(q),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)kn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Jr(e),o!==null){for(t.flags|=128,kn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>cn&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$)return le(t),null}else 2*Q()-i.renderingStartTime>cn&&n!==1073741824&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=q.current,D(q,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Oo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Tf(e,t){switch(ho(t),t.tag){case 1:return he(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),A(me),A(oe),Eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(A(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(q),null;case 4:return un(),null;case 10:return xo(t.type._context),null;case 22:case 23:return Oo(),null;case 24:return null;default:return null}}var wr=!1,ie=!1,zf=typeof WeakSet=="function"?WeakSet:Set,C=null;function Kt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Ai(e,t,n){try{n()}catch(r){H(e,t,r)}}var qs=!1;function jf(e,t){if(_i=Br,e=Ju(),po(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,m=0,g=e,h=null;t:for(;;){for(var v;g!==n||l!==0&&g.nodeType!==3||(s=o+l),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(v=g.firstChild)!==null;)h=g,g=v;for(;;){if(g===e)break t;if(h===n&&++c===l&&(s=o),h===i&&++m===r&&(u=o),(v=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Si={focusedElem:e,selectionRange:n},Br=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,I=w.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:je(t.type,k),I);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=qs,qs=!1,w}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ai(t,n,i)}l=l.next}while(l!==r)}}function gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $i(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ya(e){var t=e.alternate;t!==null&&(e.alternate=null,Ya(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Qn],delete t[Ni],delete t[ff],delete t[pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ga(e){return e.tag===5||e.tag===3||e.tag===4}function Bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ga(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var J=null,Me=!1;function be(e,t,n){for(n=n.child;n!==null;)Za(e,t,n),n=n.sibling}function Za(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:ie||Kt(n,t);case 6:var r=J,l=Me;J=null,be(e,t,n),J=r,Me=l,J!==null&&(Me?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Me?(e=J,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),qn(e)):Bl(J,n.stateNode));break;case 4:r=J,l=Me,J=n.stateNode.containerInfo,Me=!0,be(e,t,n),J=r,Me=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ai(n,t,o),l=l.next}while(l!==r)}be(e,t,n);break;case 1:if(!ie&&(Kt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}be(e,t,n);break;case 21:be(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,be(e,t,n),ie=r):be(e,t,n);break;default:be(e,t,n)}}function Vs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zf),t.forEach(function(r){var l=Af.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:J=s.stateNode,Me=!1;break e;case 3:J=s.stateNode.containerInfo,Me=!0;break e;case 4:J=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(J===null)throw Error(x(160));Za(i,o,l),J=null,Me=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ba(t,e),t=t.sibling}function ba(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Fe(e),r&4){try{In(3,e,e.return),gl(3,e)}catch(k){H(e,e.return,k)}try{In(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:ze(t,e),Fe(e),r&512&&n!==null&&Kt(n,n.return);break;case 5:if(ze(t,e),Fe(e),r&512&&n!==null&&Kt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(k){H(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&wu(l,i),fi(s,o);var c=fi(s,i);for(o=0;o<u.length;o+=2){var m=u[o],g=u[o+1];m==="style"?Cu(l,g):m==="dangerouslySetInnerHTML"?Su(l,g):m==="children"?Dn(l,g):Ji(l,m,g,c)}switch(s){case"input":si(l,i);break;case"textarea":ku(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Gt(l,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Gt(l,!!i.multiple,i.defaultValue,!0):Gt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Qn]=i}catch(k){H(e,e.return,k)}}break;case 6:if(ze(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){H(e,e.return,k)}}break;case 3:if(ze(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:ze(t,e),Fe(e);break;case 13:ze(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Io=Q())),r&4&&Vs(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||m,ze(t,e),ie=c):ze(t,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(g=C=m;C!==null;){switch(h=C,v=h.child,h.tag){case 0:case 11:case 14:case 15:In(4,h,h.return);break;case 1:Kt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){H(r,n,k)}}break;case 5:Kt(h,h.return);break;case 22:if(h.memoizedState!==null){Ws(g);continue}}v!==null?(v.return=h,C=v):Ws(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Eu("display",o))}catch(k){H(e,e.return,k)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(k){H(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ze(t,e),Fe(e),r&4&&Vs(e);break;case 21:break;default:ze(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ga(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var i=Bs(e);Bi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Bs(e);qi(e,s,o);break;default:throw Error(x(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mf(e,t,n){C=e,Ja(e)}function Ja(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||wr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ie;s=wr;var c=ie;if(wr=o,(ie=u)&&!c)for(C=l;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?Qs(l):u!==null?(u.return=o,C=u):Qs(l);for(;i!==null;)C=i,Ja(i),i=i.sibling;C=l,wr=s,ie=c}Hs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):Hs(e)}}function Hs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||gl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ts(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ts(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&qn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||t.flags&512&&$i(t)}catch(h){H(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ws(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Qs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gl(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){H(t,l,u)}}var i=t.return;try{$i(t)}catch(u){H(t,i,u)}break;case 5:var o=t.return;try{$i(t)}catch(u){H(t,o,u)}}}catch(u){H(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Lf=Math.ceil,nl=Ge.ReactCurrentDispatcher,Mo=Ge.ReactCurrentOwner,Ne=Ge.ReactCurrentBatchConfig,L=0,b=null,X=null,ee=0,ye=0,Yt=vt(0),Y=0,bn=null,Lt=0,yl=0,Lo=0,Rn=null,fe=null,Io=0,cn=1/0,qe=null,rl=!1,Vi=null,ft=null,kr=!1,ot=null,ll=0,On=0,Hi=null,Rr=-1,Or=0;function ue(){return L&6?Q():Rr!==-1?Rr:Rr=Q()}function pt(e){return e.mode&1?L&2&&ee!==0?ee&-ee:hf.transition!==null?(Or===0&&(Or=Du()),Or):(e=F,e!==0||(e=window.event,e=e===void 0?16:Hu(e.type)),e):1}function Re(e,t,n,r){if(50<On)throw On=0,Hi=null,Error(x(185));er(e,n,r),(!(L&2)||e!==b)&&(e===b&&(!(L&2)&&(yl|=n),Y===4&&lt(e,ee)),ge(e,r),n===1&&L===0&&!(t.mode&1)&&(cn=Q()+500,pl&&xt()))}function ge(e,t){var n=e.callbackNode;md(e,t);var r=qr(e,e===b?ee:0);if(r===0)n!==null&&ts(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ts(n),t===1)e.tag===0?mf(Xs.bind(null,e)):aa(Xs.bind(null,e)),cf(function(){!(L&6)&&xt()}),n=null;else{switch(Uu(r)){case 1:n=lo;break;case 4:n=Ou;break;case 16:n=$r;break;case 536870912:n=Fu;break;default:n=$r}n=sc(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if(Rr=-1,Or=0,L&6)throw Error(x(327));var n=e.callbackNode;if(tn()&&e.callbackNode!==n)return null;var r=qr(e,e===b?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=il(e,r);else{t=r;var l=L;L|=2;var i=nc();(b!==e||ee!==t)&&(qe=null,cn=Q()+500,Pt(e,t));do try{Of();break}catch(s){tc(e,s)}while(!0);vo(),nl.current=i,L=l,X!==null?t=0:(b=null,ee=0,t=Y)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Wi(e,l))),t===1)throw n=bn,Pt(e,0),lt(e,r),ge(e,Q()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!If(l)&&(t=il(e,r),t===2&&(i=yi(e),i!==0&&(r=i,t=Wi(e,i))),t===1))throw n=bn,Pt(e,0),lt(e,r),ge(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:St(e,fe,qe);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Io+500-Q(),10<t)){if(qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ci(St.bind(null,e,fe,qe),t);break}St(e,fe,qe);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ie(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lf(r/1960))-r,10<r){e.timeoutHandle=Ci(St.bind(null,e,fe,qe),r);break}St(e,fe,qe);break;case 5:St(e,fe,qe);break;default:throw Error(x(329))}}}return ge(e,Q()),e.callbackNode===n?ec.bind(null,e):null}function Wi(e,t){var n=Rn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=il(e,t),e!==2&&(t=fe,fe=n,t!==null&&Qi(t)),e}function Qi(e){fe===null?fe=e:fe.push.apply(fe,e)}function If(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~Lo,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Xs(e){if(L&6)throw Error(x(327));tn();var t=qr(e,0);if(!(t&1))return ge(e,Q()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=bn,Pt(e,0),lt(e,t),ge(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,fe,qe),ge(e,Q()),null}function Ro(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(cn=Q()+500,pl&&xt())}}function It(e){ot!==null&&ot.tag===0&&!(L&6)&&tn();var t=L;L|=1;var n=Ne.transition,r=F;try{if(Ne.transition=null,F=1,e)return e()}finally{F=r,Ne.transition=n,L=t,!(L&6)&&xt()}}function Oo(){ye=Yt.current,A(Yt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,af(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(ho(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:un(),A(me),A(oe),Eo();break;case 5:So(r);break;case 4:un();break;case 13:A(q);break;case 19:A(q);break;case 10:xo(r.type._context);break;case 22:case 23:Oo()}n=n.return}if(b=e,X=e=mt(e.current,null),ee=ye=t,Y=0,bn=null,Lo=yl=Lt=0,fe=Rn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Ct=null}return e}function tc(e,t){do{var n=X;try{if(vo(),Mr.current=tl,el){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}el=!1}if(Mt=0,Z=K=B=null,Ln=!1,Yn=0,Mo.current=null,n===null||n.return===null){Y=1,bn=t,X=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=ee,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Rs(o);if(v!==null){v.flags&=-257,Os(v,o,s,i,t),v.mode&1&&Is(i,c,t),t=v,u=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){Is(i,c,t),Fo();break e}u=Error(x(426))}}else if($&&s.mode&1){var I=Rs(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Os(I,o,s,i,t),go(an(u,s));break e}}i=u=an(u,s),Y!==4&&(Y=2),Rn===null?Rn=[i]:Rn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ua(i,u,t);Ps(i,d);break e;case 1:s=u;var a=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ft===null||!ft.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Aa(i,s,t);Ps(i,y);break e}}i=i.return}while(i!==null)}lc(n)}catch(_){t=_,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function nc(){var e=nl.current;return nl.current=tl,e===null?tl:e}function Fo(){(Y===0||Y===3||Y===2)&&(Y=4),b===null||!(Lt&268435455)&&!(yl&268435455)||lt(b,ee)}function il(e,t){var n=L;L|=2;var r=nc();(b!==e||ee!==t)&&(qe=null,Pt(e,t));do try{Rf();break}catch(l){tc(e,l)}while(!0);if(vo(),L=n,nl.current=r,X!==null)throw Error(x(261));return b=null,ee=0,Y}function Rf(){for(;X!==null;)rc(X)}function Of(){for(;X!==null&&!id();)rc(X)}function rc(e){var t=oc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?lc(e):X=t,Mo.current=null}function lc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tf(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,X=null;return}}else if(n=Pf(n,t,ye),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Y===0&&(Y=5)}function St(e,t,n){var r=F,l=Ne.transition;try{Ne.transition=null,F=1,Ff(e,t,n,r)}finally{Ne.transition=l,F=r}return null}function Ff(e,t,n,r){do tn();while(ot!==null);if(L&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hd(e,i),e===b&&(X=b=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,sc($r,function(){return tn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var o=F;F=1;var s=L;L|=4,Mo.current=null,jf(e,n),ba(n,e),tf(Si),Br=!!_i,Si=_i=null,e.current=n,Mf(n),od(),L=s,F=o,Ne.transition=i}else e.current=n;if(kr&&(kr=!1,ot=e,ll=l),i=e.pendingLanes,i===0&&(ft=null),ad(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(rl)throw rl=!1,e=Vi,Vi=null,e;return ll&1&&e.tag!==0&&tn(),i=e.pendingLanes,i&1?e===Hi?On++:(On=0,Hi=e):On=0,xt(),null}function tn(){if(ot!==null){var e=Uu(ll),t=Ne.transition,n=F;try{if(Ne.transition=null,F=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,ll=0,L&6)throw Error(x(331));var l=L;for(L|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(C=c;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:In(8,m,i)}var g=m.child;if(g!==null)g.return=m,C=g;else for(;C!==null;){m=C;var h=m.sibling,v=m.return;if(Ya(m),m===c){C=null;break}if(h!==null){h.return=v,C=h;break}C=v}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var a=e.current;for(C=a;C!==null;){o=C;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,C=f;else e:for(o=a;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:gl(9,s)}}catch(_){H(s,s.return,_)}if(s===o){C=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,C=y;break e}C=s.return}}if(L=l,xt(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ul,e)}catch{}r=!0}return r}finally{F=n,Ne.transition=t}}return!1}function Ks(e,t,n){t=an(n,t),t=Ua(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(er(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)Ks(e,e,n);else for(;t!==null;){if(t.tag===3){Ks(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=an(n,e),e=Aa(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(er(t,1,e),ge(t,e));break}}t=t.return}}function Df(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(ee&n)===n&&(Y===4||Y===3&&(ee&130023424)===ee&&500>Q()-Io?Pt(e,0):Lo|=n),ge(e,t)}function ic(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=ue();e=Ke(e,t),e!==null&&(er(e,t,n),ge(e,n))}function Uf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ic(e,n)}function Af(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),ic(e,n)}var oc;oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Nf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,$&&t.flags&1048576&&ca(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ir(e,t),e=t.pendingProps;var l=ln(t,oe.current);en(t,n),l=No(null,t,r,e,l,n);var i=Po();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Xr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ko(t),l.updater=hl,t.stateNode=l,l._reactInternals=t,Li(t,r,e,n),t=Oi(null,t,r,!0,i,n)):(t.tag=0,$&&i&&mo(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ir(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=qf(r),e=je(r,e),l){case 0:t=Ri(null,t,r,e,n);break e;case 1:t=Us(null,t,r,e,n);break e;case 11:t=Fs(null,t,r,e,n);break e;case 14:t=Ds(null,t,r,je(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Ri(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Us(e,t,r,l,n);case 3:e:{if(Va(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ga(e,t),br(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=an(Error(x(423)),t),t=As(e,t,r,n,l);break e}else if(r!==l){l=an(Error(x(424)),t),t=As(e,t,r,n,l);break e}else for(ve=ct(t.stateNode.containerInfo.firstChild),xe=t,$=!0,Le=null,n=ma(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),r===l){t=Ye(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return ya(t),e===null&&zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ei(r,l)?o=null:i!==null&&Ei(r,i)&&(t.flags|=32),Ba(e,t),se(e,t,o,n),t.child;case 6:return e===null&&zi(t),null;case 13:return Ha(e,t,n);case 4:return _o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Fs(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(Gr,r._currentValue),r._currentValue=o,i!==null)if(Oe(i.value,o)){if(i.children===l.children&&!me.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ji(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ji(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,en(t,n),l=Pe(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=je(r,t.pendingProps),l=je(r.type,l),Ds(e,t,r,l,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Ir(e,t),t.tag=1,he(r)?(e=!0,Xr(t)):e=!1,en(t,n),Da(t,r,l),Li(t,r,l,n),Oi(null,t,r,!0,e,n);case 19:return Wa(e,t,n);case 22:return qa(e,t,n)}throw Error(x(156,t.tag))};function sc(e,t){return Ru(e,t)}function $f(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new $f(e,t,n,r)}function Do(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qf(e){if(typeof e=="function")return Do(e)?1:0;if(e!=null){if(e=e.$$typeof,e===to)return 11;if(e===no)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Do(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case At:return Tt(n.children,l,i,t);case eo:o=8,l|=8;break;case ni:return e=Ce(12,n,t,l|2),e.elementType=ni,e.lanes=i,e;case ri:return e=Ce(13,n,t,l),e.elementType=ri,e.lanes=i,e;case li:return e=Ce(19,n,t,l),e.elementType=li,e.lanes=i,e;case yu:return vl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hu:o=10;break e;case gu:o=9;break e;case to:o=11;break e;case no:o=14;break e;case tt:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Tt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=yu,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Uo(e,t,n,r,l,i,o,s,u){return e=new Bf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ko(i),e}function Vf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uc(e){if(!e)return gt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(he(n))return ua(e,n,t)}return t}function ac(e,t,n,r,l,i,o,s,u){return e=Uo(n,r,!0,e,l,i,o,s,u),e.context=uc(null),n=e.current,r=ue(),l=pt(n),i=We(r,l),i.callback=t??null,dt(n,i,l),e.current.lanes=l,er(e,l,r),ge(e,r),e}function xl(e,t,n,r){var l=t.current,i=ue(),o=pt(l);return n=uc(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,o),e!==null&&(Re(e,l,o,i),jr(e,l,o)),o}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ys(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ao(e,t){Ys(e,t),(e=e.alternate)&&Ys(e,t)}function Hf(){return null}var cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function $o(e){this._internalRoot=e}wl.prototype.render=$o.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));xl(e,t,null,null)};wl.prototype.unmount=$o.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){xl(null,e,null,null)}),t[Xe]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=qu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Vu(e)}};function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gs(){}function Wf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=ol(o);i.call(c)}}var o=ac(t,r,e,0,null,!1,!1,"",Gs);return e._reactRootContainer=o,e[Xe]=o.current,Hn(e.nodeType===8?e.parentNode:e),It(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=ol(u);s.call(c)}}var u=Uo(e,0,!1,null,null,!1,!1,"",Gs);return e._reactRootContainer=u,e[Xe]=u.current,Hn(e.nodeType===8?e.parentNode:e),It(function(){xl(t,u,n,r)}),u}function _l(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=ol(o);s.call(u)}}xl(t,o,e,l)}else o=Wf(n,t,e,l,r);return ol(o)}Au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(io(t,n|1),ge(t,Q()),!(L&6)&&(cn=Q()+500,xt()))}break;case 13:It(function(){var r=Ke(e,1);if(r!==null){var l=ue();Re(r,e,1,l)}}),Ao(e,1)}};oo=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ue();Re(t,e,134217728,n)}Ao(e,134217728)}};$u=function(e){if(e.tag===13){var t=pt(e),n=Ke(e,t);if(n!==null){var r=ue();Re(n,e,t,r)}Ao(e,t)}};qu=function(){return F};Bu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};mi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=fl(r);if(!l)throw Error(x(90));xu(r),si(r,l)}}}break;case"textarea":ku(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};Tu=Ro;zu=It;var Qf={usingClientEntryPoint:!1,Events:[nr,Vt,fl,Nu,Pu,Ro]},_n={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xf={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lu(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||Hf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{ul=_r.inject(Xf),Ae=_r}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qo(t))throw Error(x(200));return Vf(e,t,null,n)};ke.createRoot=function(e,t){if(!qo(e))throw Error(x(299));var n=!1,r="",l=cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Uo(e,1,!1,null,null,n,!1,r,l),e[Xe]=t.current,Hn(e.nodeType===8?e.parentNode:e),new $o(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Lu(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return It(e)};ke.hydrate=function(e,t,n){if(!kl(t))throw Error(x(200));return _l(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!qo(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=cc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ac(t,null,e,1,n??null,l,!1,i,o),e[Xe]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new wl(t)};ke.render=function(e,t,n){if(!kl(t))throw Error(x(200));return _l(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!kl(e))throw Error(x(40));return e._reactRootContainer?(It(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};ke.unstable_batchedUpdates=Ro;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!kl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return _l(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc)}catch(e){console.error(e)}}dc(),du.exports=ke;var Kf=du.exports,Zs=Kf;ei.createRoot=Zs.createRoot,ei.hydrateRoot=Zs.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=O.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...s},u)=>O.createElement("svg",{ref:u,...Gf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:fc("lucide",l),...s},[...o.map(([c,m])=>O.createElement(c,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(e,t)=>{const n=O.forwardRef(({className:r,...l},i)=>O.createElement(Zf,{ref:i,iconNode:t,className:fc(`lucide-${Yf(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=ne("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=ne("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=ne("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=ne("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=ne("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=ne("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=ne("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=ne("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=ne("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=ne("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=ne("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=ne("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=ne("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=ne("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=ne("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=ne("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function fp({lessons:e,activeId:t,onSelect:n,open:r,onClose:l}){const i=e.filter(u=>u.block==="basics"),o=e.filter(u=>u.block==="oop"),s=(u,c)=>p.jsxs("div",{className:"mb-6",children:[p.jsx("p",{className:"px-3 text-xs font-semibold text-paper/40 mb-2",children:u}),p.jsx("ul",{className:"space-y-1",children:c.map(m=>{const g=m.id===t;return p.jsx("li",{children:p.jsxs("button",{onClick:()=>n(m.id),className:`w-full text-left px-3 py-2 rounded-xl flex items-start gap-2 transition-colors ${g?"bg-pybuse text-white":"text-paper/80 hover:bg-white/5"}`,children:[p.jsx("span",{className:`shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-code ${g?"bg-white/20":m.type==="project"?"bg-mustard/20 text-mustard":"bg-white/10"}`,children:m.id}),p.jsxs("span",{className:"min-w-0",children:[p.jsx("span",{className:"block text-sm leading-snug truncate",children:m.title}),m.type==="project"&&p.jsxs("span",{className:"flex items-center gap-1 text-[11px] text-mustard mt-0.5",children:[p.jsx(cp,{size:11})," პროექტი"]})]})]})},m.id)})})]});return p.jsxs(p.Fragment,{children:[r&&p.jsx("div",{className:"fixed inset-0 bg-black/40 z-30 md:hidden",onClick:l}),p.jsxs("aside",{className:`fixed md:static z-40 top-0 left-0 h-full md:h-auto w-72 bg-ink text-paper shrink-0 overflow-y-auto transition-transform duration-200 ${r?"translate-x-0":"-translate-x-full md:translate-x-0"}`,children:[p.jsxs("div",{className:"flex items-center justify-between px-4 py-4 border-b border-white/10",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"text-2xl",children:"🐍"}),p.jsxs("div",{children:[p.jsx("p",{className:"font-display font-semibold leading-tight",children:"Python კურსი"}),p.jsxs("p",{className:"text-paper/40 text-xs flex items-center gap-1",children:[p.jsx(bf,{size:12})," 40 შეხვედრა"]})]})]}),p.jsx("button",{className:"md:hidden text-paper/60",onClick:l,"aria-label":"დახურვა",children:p.jsx(dp,{size:20})})]}),p.jsxs("div",{className:"p-3",children:[s("ბლოკი A · საფუძვლები (1–25)",i),s("ბლოკი B · OOP & Advanced (26–40)",o)]})]})]})}let bl=null,Sr=null;async function gc(e){return bl||(Sr||(e==null||e("იტვირთება Python ძრავა (Pyodide)... ეს პირველად შეიძლება 10-20 წამი გასტანოს."),Sr=window.loadPyodide().then(t=>(bl=t,t)).catch(t=>{throw Sr=null,t})),Sr)}const pp=String.raw`
import os as _os
for _f in _os.listdir("."):
    if _os.path.isfile(_f):
        _os.remove(_f)
`;async function yc(e,t){e.runPython(pp);const n=e.runPython("dict()");n.set("__name__","__main__");try{await e.runPythonAsync(t,{globals:n})}finally{n.destroy()}}function mp({starterCode:e,exerciseKey:t}){const[n,r]=O.useState(e||""),[l,i]=O.useState(""),[o,s]=O.useState("idle"),[u,c]=O.useState(""),m=O.useRef(null);O.useEffect(()=>{r(e||""),i("")},[t,e]);const g=async()=>{s("loading"),i("");try{const v=await gc(c);s("running"),c(""),v.setStdout({batched:w=>i(k=>k+w+`
`)}),v.setStderr({batched:w=>i(k=>k+w+`
`)}),await yc(v,n),s("idle")}catch(v){i(w=>w+`
`+String(v)),s("error")}},h=()=>{r(e||""),i(""),s("idle")};return p.jsxs("div",{className:"rounded-blob border-2 border-ink/10 bg-inkdeep overflow-hidden shadow-lg",children:[p.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-ink",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-3 h-3 rounded-full bg-coral"}),p.jsx("span",{className:"w-3 h-3 rounded-full bg-mustard"}),p.jsx("span",{className:"w-3 h-3 rounded-full bg-leaf"}),p.jsx("span",{className:"ml-2 text-paper/70 text-xs font-code",children:"main.py"})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsxs("button",{onClick:h,className:"flex items-center gap-1 text-paper/70 hover:text-paper text-xs px-2 py-1 rounded-md transition-colors","aria-label":"კოდის გადატვირთვა",children:[p.jsx(hc,{size:14})," თავიდან"]}),p.jsxs("button",{onClick:g,disabled:o==="loading"||o==="running",className:"flex items-center gap-1 bg-leaf text-ink font-semibold text-xs px-3 py-1.5 rounded-md hover:brightness-105 disabled:opacity-60 transition",children:[o==="loading"||o==="running"?p.jsx(pc,{size:14,className:"animate-spin"}):p.jsx(mc,{size:14}),"გაშვება"]})]})]}),p.jsx("textarea",{ref:m,value:n,onChange:v=>r(v.target.value),spellCheck:!1,className:"code-editor w-full bg-inkdeep text-paper p-4 outline-none resize-y min-h-[140px]",style:{tabSize:4}}),p.jsxs("div",{className:"border-t border-paper/10 bg-black/30 px-4 py-3",children:[p.jsxs("div",{className:"flex items-center justify-between mb-1",children:[p.jsx("span",{className:"text-paper/50 text-xs font-code",children:"Output"}),o==="loading"&&p.jsx("span",{className:"text-mustard text-xs",children:u})]}),p.jsx("pre",{className:"code-editor text-paper/90 whitespace-pre-wrap min-h-[2rem]",children:l||p.jsx("span",{className:"text-paper/30",children:'// შედეგი აქ გამოჩნდება, დააჭირე "გაშვება"'})})]})]})}const hp=String.raw`
import math, json

_CMDS = []
_TURTLES = []
_STATE = {"bg": "white"}
_MAX_CMDS = 20000


def _c(c):
    if isinstance(c, (tuple, list)) and len(c) == 3:
        r, g, b = c
        if max(r, g, b) <= 1:
            r, g, b = r * 255, g * 255, b * 255
        return "rgb(%d,%d,%d)" % (int(r), int(g), int(b))
    return str(c)


def _push(cmd):
    if len(_CMDS) >= _MAX_CMDS:
        raise RuntimeError("ძალიან ბევრი ხაზი დაიხატა (20000-ზე მეტი). შეამოწმე ციკლი - ხომ არ არის უსასრულო?")
    _CMDS.append(cmd)


class Turtle:
    def __init__(self, *args, **kwargs):
        self._x = 0.0
        self._y = 0.0
        self._heading = 0.0
        self._pen = True
        self._color = "black"
        self._fillcolor = "black"
        self._size = 1
        self._visible = True
        self._filling = False
        self._fill_index = 0
        self._fillpts = []
        _TURTLES.append(self)

    def _move_to(self, nx, ny):
        if self._pen:
            _push(("line", self._x, self._y, nx, ny, self._color, self._size))
        self._x = nx
        self._y = ny
        if self._filling:
            self._fillpts.append((nx, ny))

    # --- მოძრაობა ---
    def forward(self, distance):
        r = math.radians(self._heading)
        self._move_to(self._x + distance * math.cos(r), self._y + distance * math.sin(r))
    fd = forward

    def backward(self, distance):
        self.forward(-distance)
    back = backward
    bk = backward

    def left(self, angle):
        self._heading = (self._heading + angle) % 360
    lt = left

    def right(self, angle):
        self.left(-angle)
    rt = right

    def goto(self, x, y=None):
        if y is None:
            x, y = x
        self._move_to(float(x), float(y))
    setpos = goto
    setposition = goto

    def setx(self, x):
        self._move_to(float(x), self._y)

    def sety(self, y):
        self._move_to(self._x, float(y))

    def setheading(self, angle):
        self._heading = angle % 360
    seth = setheading

    def home(self):
        self._move_to(0.0, 0.0)
        self._heading = 0.0

    def circle(self, radius, extent=360, steps=None):
        if radius == 0:
            return
        if steps is None:
            full = min(180, int(abs(radius) * 0.5 + 24))
            n = max(1, int(full * abs(extent) / 360))
        else:
            n = max(1, int(steps))
        sign = 1 if radius >= 0 else -1
        angle = sign * extent / n
        side = 2 * abs(radius) * math.sin(math.radians(abs(angle) / 2))
        self.left(angle / 2)
        for _ in range(n):
            self.forward(side)
            self.left(angle)
        self.left(-angle / 2)

    # --- კალამი და ფერები ---
    def penup(self):
        self._pen = False
    pu = penup
    up = penup

    def pendown(self):
        self._pen = True
    pd = pendown
    down = pendown

    def isdown(self):
        return self._pen

    def pensize(self, width=None):
        if width is None:
            return self._size
        self._size = width
    width = pensize

    def pencolor(self, *args):
        if not args:
            return self._color
        self._color = _c(args[0] if len(args) == 1 else args)

    def fillcolor(self, *args):
        if not args:
            return self._fillcolor
        self._fillcolor = _c(args[0] if len(args) == 1 else args)

    def color(self, *args):
        if not args:
            return (self._color, self._fillcolor)
        if len(args) == 1:
            self._color = _c(args[0])
            self._fillcolor = _c(args[0])
        elif len(args) == 2:
            self._color = _c(args[0])
            self._fillcolor = _c(args[1])
        else:
            self._color = _c(args)
            self._fillcolor = _c(args)

    def begin_fill(self):
        self._filling = True
        self._fill_index = len(_CMDS)
        self._fillpts = [(self._x, self._y)]

    def end_fill(self):
        if self._filling and len(self._fillpts) > 2:
            span = len(_CMDS) - self._fill_index
            _CMDS.insert(self._fill_index, ("fill", list(self._fillpts), self._fillcolor, span))
        self._filling = False
        self._fillpts = []

    def filling(self):
        return self._filling

    # --- ფიგურები და ტექსტი ---
    def dot(self, size=None, color=None):
        if size is None:
            size = max(self._size + 4, self._size * 2)
        _push(("dot", self._x, self._y, size, _c(color) if color is not None else self._color))

    def stamp(self):
        _push(("stamp", self._x, self._y, self._heading, self._color))

    def write(self, arg, move=False, align="left", font=("Arial", 12, "normal")):
        size = font[1] if len(font) > 1 else 12
        weight = font[2] if len(font) > 2 else "normal"
        _push(("text", self._x, self._y, str(arg), self._color, size, align, weight))

    # --- ხილვადობა ---
    def hideturtle(self):
        self._visible = False
    ht = hideturtle

    def showturtle(self):
        self._visible = True
    st = showturtle

    def isvisible(self):
        return self._visible

    # --- ინფორმაცია ---
    def xcor(self):
        return self._x

    def ycor(self):
        return self._y

    def heading(self):
        return self._heading

    def position(self):
        return (self._x, self._y)
    pos = position

    def distance(self, x, y=None):
        if y is None:
            x, y = x
        return math.hypot(x - self._x, y - self._y)

    def towards(self, x, y=None):
        if y is None:
            x, y = x
        return math.degrees(math.atan2(y - self._y, x - self._x)) % 360

    # --- გასუფთავება ---
    def clear(self):
        del _CMDS[:]

    def reset(self):
        del _CMDS[:]
        self._x = 0.0
        self._y = 0.0
        self._heading = 0.0
        self._pen = True
        self._color = "black"
        self._fillcolor = "black"
        self._size = 1

    # --- თავსებადობისთვის: ბრაუზერში მათ ეფექტი არ აქვთ ---
    def speed(self, speed=None):
        return 0

    def shape(self, name=None):
        return "classic"

    def shapesize(self, *args, **kwargs):
        return None
    turtlesize = shapesize

    def tracer(self, *args, **kwargs):
        return None

    def delay(self, *args, **kwargs):
        return None


class Screen:
    def bgcolor(self, *args):
        if not args:
            return _STATE["bg"]
        _STATE["bg"] = _c(args[0] if len(args) == 1 else args)

    def title(self, *args):
        return None

    def setup(self, *args, **kwargs):
        return None

    def tracer(self, *args, **kwargs):
        return None

    def update(self):
        return None

    def delay(self, *args, **kwargs):
        return None

    def colormode(self, *args):
        return 1.0

    def exitonclick(self):
        return None

    def mainloop(self):
        return None
    done = mainloop

    def bye(self):
        return None

    def listen(self, *args, **kwargs):
        return None

    def onkey(self, *args, **kwargs):
        return None
    onkeypress = onkey
    onkeyrelease = onkey
    onclick = onkey
    ontimer = onkey

    def window_width(self):
        return 480

    def window_height(self):
        return 480


Pen = Turtle

_default_turtle = Turtle()
_default_screen = Screen()

_TURTLE_FUNCS = [
    "forward", "fd", "back", "backward", "bk", "left", "lt", "right", "rt",
    "goto", "setpos", "setposition", "setx", "sety", "setheading", "seth",
    "home", "circle", "penup", "pu", "up", "pendown", "pd", "down", "isdown",
    "pensize", "width", "pencolor", "fillcolor", "color", "begin_fill",
    "end_fill", "filling", "dot", "stamp", "write", "hideturtle", "ht",
    "showturtle", "st", "isvisible", "xcor", "ycor", "heading", "position",
    "pos", "distance", "towards", "clear", "reset", "speed", "shape",
    "shapesize", "turtlesize",
]
_SCREEN_FUNCS = [
    "bgcolor", "title", "setup", "tracer", "update", "delay", "colormode",
    "exitonclick", "mainloop", "done", "bye", "listen", "onkey",
    "onkeypress", "onkeyrelease", "onclick", "ontimer", "window_width",
    "window_height",
]

# ნაგულისხმევი turtle ეკრანზე მხოლოდ მაშინ ჩნდება, თუ მოდულის დონის
# ფუნქციებს (forward(...), left(...)) პირდაპირ ვიყენებთ.
_TURTLES.remove(_default_turtle)


def _make_turtle_func(name):
    def wrapper(*args, **kwargs):
        if _default_turtle not in _TURTLES:
            _TURTLES.append(_default_turtle)
        return getattr(_default_turtle, name)(*args, **kwargs)
    wrapper.__name__ = name
    return wrapper


for _name in _TURTLE_FUNCS:
    globals()[_name] = _make_turtle_func(_name)
for _name in _SCREEN_FUNCS:
    globals()[_name] = getattr(_default_screen, _name)


def getscreen():
    return _default_screen


def _snapshot():
    return json.dumps({
        "cmds": _CMDS,
        "bg": _STATE["bg"],
        "turtles": [
            {"x": t._x, "y": t._y, "h": t._heading, "visible": t._visible, "color": t._color}
            for t in _TURTLES
        ],
    })
`,nn=480,vc=nn/2,Je=e=>vc+e,et=e=>vc-e,gp=`
import sys, types
_turtle_module = types.ModuleType("turtle")
exec(__turtle_src__, _turtle_module.__dict__)
sys.modules["turtle"] = _turtle_module
del _turtle_module
`;function bs(e,t,n,r,l){const i=-r*Math.PI/180,o=Je(t),s=et(n),u=[[o+Math.cos(i)*12,s+Math.sin(i)*12],[o+Math.cos(i+2.4)*9,s+Math.sin(i+2.4)*9],[o-Math.cos(i)*3,s-Math.sin(i)*3],[o+Math.cos(i-2.4)*9,s+Math.sin(i-2.4)*9]];e.beginPath(),e.moveTo(u[0][0],u[0][1]);for(let c=1;c<u.length;c++)e.lineTo(u[c][0],u[c][1]);e.closePath(),e.fillStyle=l,e.globalAlpha=.85,e.fill(),e.globalAlpha=1,e.lineWidth=1,e.strokeStyle="#1B1F3B",e.stroke()}function Jl(e,t,n,r){const l=e.getContext("2d");l.setTransform(1,0,0,1,0,0),l.fillStyle=t.bg||"white",l.fillRect(0,0,nn,nn),l.lineCap="round",l.lineJoin="round";let i=null;for(let o=0;o<n&&o<t.cmds.length;o++){const s=t.cmds[o],u=s[0];if(u==="line")l.beginPath(),l.moveTo(Je(s[1]),et(s[2])),l.lineTo(Je(s[3]),et(s[4])),l.strokeStyle=s[5],l.lineWidth=s[6],l.stroke(),i=[s[3],s[4]];else if(u==="fill"){if(n>o+s[3]){const c=s[1];l.beginPath(),l.moveTo(Je(c[0][0]),et(c[0][1]));for(let m=1;m<c.length;m++)l.lineTo(Je(c[m][0]),et(c[m][1]));l.closePath(),l.fillStyle=s[2],l.fill()}}else u==="dot"?(l.beginPath(),l.arc(Je(s[1]),et(s[2]),s[3]/2,0,Math.PI*2),l.fillStyle=s[4],l.fill()):u==="text"?(l.fillStyle=s[4],l.font=`${s[7]||"normal"} ${s[5]}px sans-serif`,l.textAlign=s[6]==="center"?"center":s[6]==="right"?"right":"left",l.fillText(s[3],Je(s[1]),et(s[2]))):u==="stamp"&&bs(l,s[1],s[2],s[3],s[4])}if(r)for(const o of t.turtles)o.visible&&bs(l,o.x,o.y,o.h,o.color);else i&&(l.beginPath(),l.arc(Je(i[0]),et(i[1]),4,0,Math.PI*2),l.fillStyle="#E1604D",l.fill())}function yp({starterCode:e,exerciseKey:t}){const[n,r]=O.useState(e||""),[l,i]=O.useState(""),[o,s]=O.useState("idle"),[u,c]=O.useState(""),[m,g]=O.useState(!0),h=O.useRef(null),v=O.useRef(null),w=()=>{v.current&&(cancelAnimationFrame(v.current),v.current=null)},k=()=>{h.current&&Jl(h.current,{cmds:[],bg:"white",turtles:[]},0,!0)};O.useEffect(()=>{r(e||""),i(""),w(),k()},[t,e]),O.useEffect(()=>w,[]);const I=y=>{const _=h.current;if(!_)return;const S=y.cmds.length;if(!m||S===0){Jl(_,y,S,!0);return}let E=0,P=0;const R=Math.max(1,Math.ceil(S/180)),j=S<=60?50:0,de=Ze=>{Ze-P>=j&&(E=Math.min(S,E+R),Jl(_,y,E,E>=S),P=Ze),E<S?v.current=requestAnimationFrame(de):v.current=null};v.current=requestAnimationFrame(de)},d=async()=>{w(),s("loading"),i(""),k();try{const y=await gc(c);s("running"),c("");let _="";const S=R=>{_+=R+`
`,i(_)};y.setStdout({batched:S}),y.setStderr({batched:S}),y.globals.set("__turtle_src__",hp),y.runPython(gp);let E=!1;try{await yc(y,n)}catch(R){E=!0,S(String(R&&R.message?R.message:R))}const P=y.runPython(`import sys
sys.modules['turtle']._snapshot()`);I(JSON.parse(P)),s(E?"error":"idle")}catch(y){i(_=>_+`
`+String(y)),s("error")}},a=()=>{w(),r(e||""),i(""),s("idle"),k()},f=o==="loading"||o==="running";return p.jsxs("div",{className:"rounded-blob border-2 border-ink/10 bg-inkdeep overflow-hidden shadow-lg",children:[p.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-ink",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-3 h-3 rounded-full bg-coral"}),p.jsx("span",{className:"w-3 h-3 rounded-full bg-mustard"}),p.jsx("span",{className:"w-3 h-3 rounded-full bg-leaf"}),p.jsx("span",{className:"ml-2 text-paper/70 text-xs font-code",children:"turtle.py 🐢"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("label",{className:"hidden sm:flex items-center gap-1 text-paper/70 text-xs cursor-pointer select-none",children:[p.jsx("input",{type:"checkbox",checked:m,onChange:y=>g(y.target.checked),className:"accent-leaf"}),"ანიმაცია"]}),p.jsxs("button",{onClick:a,className:"flex items-center gap-1 text-paper/70 hover:text-paper text-xs px-2 py-1 rounded-md transition-colors","aria-label":"კოდის გადატვირთვა",children:[p.jsx(hc,{size:14})," თავიდან"]}),p.jsxs("button",{onClick:d,disabled:f,className:"flex items-center gap-1 bg-leaf text-ink font-semibold text-xs px-3 py-1.5 rounded-md hover:brightness-105 disabled:opacity-60 transition",children:[f?p.jsx(pc,{size:14,className:"animate-spin"}):p.jsx(mc,{size:14}),"გაშვება"]})]})]}),p.jsx("textarea",{value:n,onChange:y=>r(y.target.value),spellCheck:!1,className:"code-editor w-full bg-inkdeep text-paper p-4 outline-none resize-y min-h-[200px]",style:{tabSize:4}}),p.jsxs("div",{className:"border-t border-paper/10 bg-black/30 p-3 flex flex-col md:flex-row gap-3",children:[p.jsx("canvas",{ref:h,width:nn,height:nn,className:"rounded-lg bg-white shrink-0",style:{width:"100%",maxWidth:nn,aspectRatio:"1 / 1"}}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center justify-between mb-1",children:[p.jsx("span",{className:"text-paper/50 text-xs font-code",children:"Output"}),o==="loading"&&p.jsx("span",{className:"text-mustard text-xs",children:u})]}),p.jsx("pre",{className:"code-editor text-paper/90 whitespace-pre-wrap min-h-[2rem]",children:l||p.jsx("span",{className:"text-paper/30",children:"// ნახატი მარცხნივ გამოჩნდება, ბეჭდვა და შეცდომები — აქ"})})]})]})]})}function vp({questions:e}){const[t,n]=O.useState({}),[r,l]=O.useState({}),i=(u,c)=>{r[u]||(n(m=>({...m,[u]:c})),l(m=>({...m,[u]:!0})))},o=e.reduce((u,c,m)=>u+(r[m]&&t[m]===c.correctIndex?1:0),0),s=Object.keys(r).length;return p.jsxs("div",{className:"space-y-5",children:[e.map((u,c)=>{const m=!!r[c],g=t[c];return p.jsxs("div",{className:"rounded-2xl border border-ink/10 bg-white p-4",children:[p.jsxs("div",{className:"flex items-start gap-2 mb-3",children:[p.jsx(ep,{size:18,className:"text-pybuse mt-0.5 shrink-0"}),p.jsx("p",{className:"font-semibold text-ink",children:u.question})]}),p.jsx("div",{className:"grid sm:grid-cols-2 gap-2",children:u.options.map((h,v)=>{const w=v===u.correctIndex,k=v===g;let I="border-ink/15 hover:border-pybuse/60 hover:bg-pybuse/5";return m&&w?I="border-leaf bg-leaf/10":m&&k&&!w&&(I="border-coral bg-coral/10"),p.jsxs("button",{onClick:()=>i(c,v),className:`text-left px-3 py-2 rounded-xl border text-sm transition-colors flex items-center justify-between gap-2 ${I}`,children:[p.jsx("span",{children:h}),m&&w&&p.jsx(Jf,{size:16,className:"text-leaf shrink-0"}),m&&k&&!w&&p.jsx(tp,{size:16,className:"text-coral shrink-0"})]},v)})})]},c)}),p.jsx("div",{className:"text-sm text-slate",children:s===e.length?`შედეგი: ${o} / ${e.length} სწორი პასუხი 🎉`:`უპასუხე ყველა კითხვას (${s}/${e.length})`})]})}const Er=[{id:1,block:"basics",type:"theory",title:"შესავალი Python-ში და print()",subtitle:"გარემოს გამართვა, პირველი პროგრამა",full:!0},{id:2,block:"basics",type:"theory",title:"ცვლადები და მონაცემთა ტიპები",subtitle:"int, float, str, bool",full:!0},{id:3,block:"basics",type:"theory",title:"ოპერატორები და გამონათქვამები",subtitle:"არითმეტიკული, შედარების, ლოგიკური",full:!0},{id:4,block:"basics",type:"theory",title:"შეცდომების ტიპები და პირველი დებაგინგი",subtitle:"Syntax vs Runtime შეცდომები",full:!0},{id:5,block:"basics",type:"project",title:"გამეორება + პროექტი: მარტივი კალკულატორი",subtitle:"ცვლადები, ტიპები, ოპერატორები ერთად",full:!0},{id:6,block:"basics",type:"theory",title:"პირობითი ოპერატორები: if / elif / else",subtitle:"გადაწყვეტილების მიღება კოდში",full:!0},{id:7,block:"basics",type:"theory",title:"წყობილი პირობები",subtitle:"Nested if, ლოგიკური კომბინაციები",full:!0},{id:8,block:"basics",type:"theory",title:"ციკლი for",subtitle:"range(), გამეორებადი ობიექტები",full:!0},{id:9,block:"basics",type:"theory",title:"ციკლი while და მარყუჟის კონტროლი",subtitle:"break, continue, pass",full:!0},{id:10,block:"basics",type:"project",title:"გამეორება + პროექტი: რიცხვის გამოცნობის თამაში",subtitle:"პირობები + ციკლები ერთად",full:!0},{id:11,block:"basics",type:"theory",title:"სიები (Lists) — საფუძვლები",subtitle:"შექმნა, ინდექსაცია, დამატება",full:!0},{id:12,block:"basics",type:"theory",title:"სიების მეთოდები და Slicing",subtitle:"sort, append, slice[a:b]",full:!0},{id:13,block:"basics",type:"theory",title:"Tuples და Sets",subtitle:"უცვლელი და უნიკალური კრებულები",full:!0},{id:14,block:"basics",type:"theory",title:"ლექსიკონები (Dictionaries)",subtitle:"გასაღები-მნიშვნელობის წყვილები",full:!0},{id:15,block:"basics",type:"project",title:"გამეორება + პროექტი: მოსწავლეთა ჟურნალი",subtitle:"სიები + ლექსიკონები ერთად",full:!0},{id:16,block:"basics",type:"theory",title:"ფუნქციები: def და return",subtitle:"პარამეტრები, ნაგულისხმევი მნიშვნელობები",full:!0},{id:17,block:"basics",type:"theory",title:"Scope და lambda ფუნქციები",subtitle:"ლოკალური vs გლობალური ცვლადები",full:!0},{id:18,block:"basics",type:"theory",title:"map / filter / reduce, *args და **kwargs",subtitle:"ფუნქციონალური პროგრამირების საფუძვლები",full:!0},{id:19,block:"basics",type:"theory",title:"სტრიქონების მანიპულაცია",subtitle:"formatting, split, replace, f-strings",full:!0},{id:20,block:"basics",type:"project",title:"გამეორება + პროექტი: ტექსტური თავგადასავალი",subtitle:"ფუნქციები + სტრიქონები ერთად",full:!0},{id:21,block:"basics",type:"theory",title:"მოდულები და ბიბლიოთეკები",subtitle:"math, random, datetime, pip",full:!0},{id:22,block:"basics",type:"theory",title:"Turtle გრაფიკა",subtitle:"ვიზუალური პროგრამირება — ნახატები კოდით",full:!0},{id:23,block:"basics",type:"theory",title:"ფაილებთან მუშაობა",subtitle:"open, read, write, close",full:!0},{id:24,block:"basics",type:"theory",title:"შეცდომების დამუშავება",subtitle:"try, except, finally"},{id:25,block:"basics",type:"project",title:"დიდი გამეორება + პროექტი: კონტაქტების წიგნი",subtitle:"ფაილები + გამონაკლისები — საფუძვლების ბლოკის დახურვა"},{id:26,block:"oop",type:"theory",title:"შესავალი OOP-ში: კლასები და ობიექტები",subtitle:"ატრიბუტები, მეთოდები, self"},{id:27,block:"oop",type:"theory",title:"კონსტრუქტორი __init__",subtitle:"ობიექტის ინიციალიზაცია"},{id:28,block:"oop",type:"theory",title:"დესტრუქტორი და კლასის ატრიბუტები",subtitle:"__del__, class vs instance attributes"},{id:29,block:"oop",type:"theory",title:"მემკვიდრეობითობა (Inheritance)",subtitle:"super(), მშობელი და შვილი კლასები"},{id:30,block:"oop",type:"theory",title:"მეთოდების გადაფარვა",subtitle:"Overriding, მრავლობითი მემკვიდრეობა"},{id:31,block:"oop",type:"project",title:"გამეორება + პროექტი: ზოოპარკის სიმულაცია",subtitle:"კლასები + მემკვიდრეობითობა ერთად"},{id:32,block:"oop",type:"theory",title:"ინკაფსულაცია",subtitle:"private/protected, getters/setters"},{id:33,block:"oop",type:"theory",title:"პოლიმორფიზმი",subtitle:"ერთი ინტერფეისი, სხვადასხვა ქცევა"},{id:34,block:"oop",type:"theory",title:"კლასის და სტატიკური მეთოდები",subtitle:"@classmethod, @staticmethod"},{id:35,block:"oop",type:"theory",title:"მაგიური მეთოდები",subtitle:"__str__, __len__, __eq__, __getitem__"},{id:36,block:"oop",type:"theory",title:"აბსტრაქტული კლასები",subtitle:"abc მოდული, კომპოზიცია და აგრეგაცია"},{id:37,block:"oop",type:"project",title:"გამეორება + პროექტი: ბიბლიოთეკის სისტემა",subtitle:"სრული OOP დიზაინი ერთად"},{id:38,block:"oop",type:"theory",title:"შესავალი SQL-სა და SQLite-ში",subtitle:"მონაცემთა ბაზის საფუძვლები Python-იდან"},{id:39,block:"oop",type:"theory",title:"Git/GitHub საფუძვლები და ალგორითმები",subtitle:"ვერსიების კონტროლი, BFS/DFS მიმოხილვა"},{id:40,block:"oop",type:"project",title:"ფინალური კაფსტოუნ პროექტი",subtitle:"სრული OOP აპლიკაცია + პრეზენტაცია"}],xp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'რა არის პროგრამირება? Python როგორც "ენა", რომლითაც კომპიუტერს ვესაუბრებით.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"გარემოს გაცნობა და print() ფუნქციის ცოცხალი დემონსტრაცია."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რა არის პროგრამირება?",text:"წარმოიდგინე, რომ შენ გყავს რობოტი მეგობარი, რომელსაც ზუსტად ისეთი ინსტრუქციები სჭირდება, როგორსაც კულინარულ რეცეპტში ვწერთ — ნაბიჯ-ნაბიჯ, არაფრის გამოტოვებით. პროგრამირება არის სწორედ ამ ინსტრუქციების დაწერა ისე, რომ კომპიუტერმა ზუსტად გაიგოს, რა გვინდა მისგან."},{heading:"რატომ Python?",text:"Python შეიქმნა ისე, რომ მისი კოდი წაკითხვისას რაც შეიძლება მეტად ჰგავდეს ჩვეულებრივ ინგლისურ ტექსტს. სწორედ ამიტომ არის ის მსოფლიოში ერთ-ერთი ყველაზე პოპულარული ენა — მას იყენებენ ინსტაგრამი, ნასა და თამაშების შემქმნელები."},{heading:"print() — შენი პირველი ბრძანება",text:'print() ფუნქცია კომპიუტერს ეუბნება: "აჩვენე ეკრანზე, რასაც გეტყვი". ფრჩხილებში ჩაწერილი ნებისმიერი ტექსტი თუ რიცხვი გამოჩნდება Output-ში.'}],codeExamples:[{title:"პირველი პროგრამა",code:`print("გამარჯობა, Python!")
print("ჩემი სახელია...")
print(2024 - 2010)`},{title:"რამდენიმე მნიშვნელობა ერთად",code:`print("ჯამი:", 5 + 3)
print("ასაკი", "=", 13)`}],exercises:[{level:"Easy",title:"გააცანი კომპიუტერს თავი",prompt:"დაწერე print() ბრძანება, რომელიც დაბეჭდავს შენს სახელს და საყვარელ ცხოველს.",starter:`# დაწერე შენი კოდი აქ
`},{level:"Medium",title:"მარტივი გამოთვლა",prompt:"დაბეჭდე შენი დაბადების წელი და გამოთვალე, რომელ წელს შეასრულებ 18 წელს (print-ის შიგნით გამოთვალე).",starter:`birth_year = 2012
# დაასრულე კოდი
`},{level:"Challenge",title:"მინი-ვიზიტბარათი",prompt:'გამოიყენე რამდენიმე print() ისე, რომ ეკრანზე დაიბეჭდოს "ვიზიტბარათი": სახელი, ასაკი, საყვარელი საგანი — თითო ხაზზე.',starter:`# ააწყვე ვიზიტბარათი
`}],quiz:[{question:"რომელი ბრძანება გამოაქვს ტექსტი ეკრანზე?",options:["show()","print()","display()","echo()"],correctIndex:1},{question:"რას დაბეჭდავს print(3 + 4)?",options:['"3 + 4"',"34","7","Error"],correctIndex:2},{question:"რატომ არის Python პოპულარული დამწყებთათვის?",options:["რადგან მხოლოდ თამაშებისთვის გამოიყენება","რადგან მისი კოდი წაკითხვადია, ჩვეულებრივ ენას ჰგავს","რადგან ის ყველაზე ძველი ენაა","რადგან მხოლოდ ბრაუზერში მუშაობს"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'სახლში დაწერე პროგრამა, რომელიც 5-ჯერ დაბეჭდავს "მე ვსწავლობ Python-ს!" — სცადე ეს გააკეთო ერთი print()-ის ნაცვლად 5-ჯერ დაწერით (შემდეგ გაკვეთილზე გავიგებთ, როგორ გავაკეთოთ ეს ციკლით, მხოლოდ 2 ხაზად!).'}},wp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'ცვლადი როგორც წარწერიანი ყუთი; მონაცემთა ტიპები — რა "ჯიშის" ინფორმაცია არსებობს.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"ცვლადების შექმნა, გადარქმევა და type() ფუნქციით მათი ტიპის შემოწმება."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რა არის ცვლადი?",text:'წარმოიდგინე გამჭვირვალე ყუთი, რომელსაც აწერია სახელი — მაგალითად "asaki" — და შიგნით დევს რაღაც მნიშვნელობა, თუნდაც რიცხვი 13. ეს ყუთია ცვლადი: მას ვინახავთ კომპიუტერის მეხსიერებაში, სახელით მივმართავთ და შიგთავსის შეცვლა ნებისმიერ დროს შეგვიძლია. Python-ში ცვლადს ვქმნით ასე: `asaki = 13`.'},{heading:'მონაცემთა ტიპები — რა "ჯიშის" ინფორმაცია არსებობს?',text:'ისევე როგორც სკოლის ჩანთაში სხვადასხვა ნივთია — წიგნი, კალამი, სენდვიჩი — Python-შიც ინფორმაცია სხვადასხვა "ჯიშისაა". მთელი რიცხვები ჰქვია int (მაგ. 13), წილადიანი რიცხვები — float (მაგ. 13.5), ტექსტი ბრჭყალებში — str (მაგ. "გამარჯობა"), ხოლო ჭეშმარიტება/სიცრუე — bool (True ან False).'},{heading:'type() — ცვლადის "პასპორტის" შემოწმება',text:"თუ არ ხარ დარწმუნებული, რა ტიპის მონაცემი ინახება ცვლადში, Python-ს შეგვიძლია პირდაპირ ვკითხოთ `type(ცვლადი)` ფუნქციით — ის დაგვიბრუნებს ზუსტ პასუხს, თითქოს პასპორტს ვამოწმებდეთ."}],codeExamples:[{title:"ცვლადების შექმნა და ბეჭდვა",code:`name = "ნინო"
age = 13
height = 1.58
is_student = True

print(name, age, height, is_student)`},{title:"type() ფუნქციით ტიპის შემოწმება",code:`age = 13
height = 1.58
print(type(age))
print(type(height))
print(type("გამარჯობა"))
print(type(True))`}],exercises:[{level:"Easy",title:"შექმენი საკუთარი ცვლადები",prompt:"შექმენი სამი ცვლადი: your_name (სახელი), your_age (ასაკი) და favorite_color (საყვარელი ფერი) და დაბეჭდე თითოეული.",starter:`# შექმენი ცვლადები აქ
`},{level:"Medium",title:"გამოიცანი და შეამოწმე ტიპი",prompt:"შექმენი ოთხი განსხვავებული ტიპის ცვლადი (int, float, str, bool) და თითოეულზე გამოიყენე type(), რომ დაბეჭდო მისი ტიპი.",starter:`# შექმენი ოთხივე ტიპის ცვლადი და შეამოწმე type()
`},{level:"Challenge",title:"პერსონაჟის ბარათი",prompt:'შექმენი თამაშის პერსონაჟისთვის ცვლადები: character_name (str), level (int), health_points (float) და is_alive (bool). დაბეჭდე ისინი ისე, რომ გამოვიდეს ლამაზი "ბარათი" — თითო თვისება ცალკე ხაზზე, წარწერასთან ერთად.',starter:`# ააწყვე პერსონაჟის ბარათი
`}],quiz:[{question:"რომელი მონაცემის ტიპია 13.5?",options:["int","float","str","bool"],correctIndex:1},{question:'რა შედეგს დააბრუნებს print(type("13"))?',options:["<class 'int'>","<class 'str'>","<class 'float'>","13"],correctIndex:1},{question:"რომელი ვარიანტია სწორი ცვლადის შექმნა?",options:["13 = age","age == 13","age = 13","age -> 13"],correctIndex:2}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'შექმენი ცვლადი ერთი ცვლადის სახელით `mystery`, მიანიჭე მას ნებისმიერი მნიშვნელობა (რიცხვი, ტექსტი ან True/False) და დაწერე პროგრამა, რომელიც print()-ითა და type()-ით "გამოცნობს" და დაბეჭდავს, რა ტიპისაა ის — თითქოს დეტექტივი იყო.'}},kp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'ოპერატორები როგორც "მოქმედების ღილაკები" — არითმეტიკული, შედარების და ლოგიკური.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"გამონათქვამების აგება და გამოთვლა, შედარების და ლოგიკური ოპერატორების ცოცხალი დემო."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რა არის ოპერატორი?",text:'ოპერატორი არის სპეციალური სიმბოლო, რომელიც კომპიუტერს ეუბნება, რა "მოქმედება" გავაკეთოთ ორ ან მეტ მნიშვნელობაზე — ზუსტად ისე, როგორც კალკულატორზე ღილაკი "+" ორ რიცხვს კრებს. Python-ში ეს ღილაკები კოდშივეა ჩაწერილი: `+`, `-`, `*`, `/` და კიდევ ბევრი სხვა.'},{heading:"არითმეტიკული ოპერატორები",text:'ეს არის ჩვეულებრივი მათემატიკური მოქმედებები: `+` შეკრება, `-` გამოკლება, `*` გამრავლება, `/` გაყოფა (ყოველთვის აბრუნებს float-ს), `//` მთელი გაყოფა (ჭრის წილადს), `%` ნაშთი (რამდენი "დარჩება" გაყოფის შემდეგ) და `**` ხარისხში აყვანა.'},{heading:"შედარების ოპერატორები",text:'როცა გვინდა ორი მნიშვნელობის შედარება, ვიყენებთ `==` (ტოლია?), `!=` (არ არის ტოლი?), `>`, `<`, `>=`, `<=`. ეს ოპერატორები ყოველთვის აბრუნებენ True ან False — ზუსტად ისე, როგორც მასწავლებელი გეკითხება "სწორია თუ არასწორი?" და მხოლოდ ერთი პასუხია შესაძლებელი.'},{heading:"ლოგიკური ოპერატორები",text:'ზოგჯერ ერთდროულად რამდენიმე პირობის შემოწმება გვჭირდება. `and` მართალია მხოლოდ მაშინ, თუ ორივე მხარე მართალია (მაგ. "წვიმს and ცივა"). `or` მართალია, თუ ერთი მაინც მართალია. `not` შემოაბრუნებს პასუხს საწინააღმდეგოზე — True ხდება False და პირიქით.'}],codeExamples:[{title:"არითმეტიკული ოპერატორები მოქმედებაში",code:`a = 17
b = 5

print("ჯამი:", a + b)
print("სხვაობა:", a - b)
print("ნამრავლი:", a * b)
print("გაყოფა:", a / b)
print("მთელი გაყოფა:", a // b)
print("ნაშთი:", a % b)
print("ხარისხი:", a ** 2)`},{title:"შედარება და ლოგიკური ოპერატორები",code:`age = 13
has_id_card = True

print(age >= 13)
print(age == 18)

can_enter = age >= 13 and has_id_card
print("შეიძლება შესვლა:", can_enter)`}],exercises:[{level:"Easy",title:"ჯამის, სხვაობის, ნამრავლის კალკულატორი",prompt:"შექმენი ორი ცვლადი x და y ნებისმიერი რიცხვებით და დაბეჭდე მათი ჯამი, სხვაობა და ნამრავლი.",starter:`x = 8
y = 3
# დაწერე კოდი აქ
`},{level:"Medium",title:"ლუწი თუ კენტი?",prompt:"გამოიყენე `%` ოპერატორი, რომ შეამოწმო არის თუ არა რიცხვი 24 ლუწი (ნაშთი 2-ზე გაყოფისას 0-ია). დაბეჭდე True ან False.",starter:`number = 24
# გამოიყენე % ოპერატორი
`},{level:"Challenge",title:"შესვლის უფლების შემმოწმებელი",prompt:"შექმენი ცვლადები age (ასაკი) და has_ticket (bool). დაწერე გამონათქვამი, რომელიც and-ის გამოყენებით ამოწმებს, შეუძლია თუ არა ადამიანს კონცერტზე შესვლა (მაგ. age >= 12 and has_ticket) და დაბეჭდე შედეგი.",starter:`age = 14
has_ticket = True
# დაწერე ლოგიკური გამონათქვამი
`}],quiz:[{question:"რას დააბრუნებს print(17 % 5)?",options:["3","2","3.4","5"],correctIndex:1},{question:"რას აბრუნებს ყოველთვის შედარების ოპერატორი (მაგ. >, ==)?",options:["რიცხვს","ტექსტს","True ან False","სიას"],correctIndex:2},{question:'როდის იქნება True გამონათქვამი "A and B"?',options:["როცა A ან B მართალია","მხოლოდ მაშინ, როცა ორივე A და B მართალია","ყოველთვის","არასდროს"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'დაწერე პროგრამა, რომელიც ორ რიცხვს (მაგ. 45 და 7) ყოფს `//` და `%` ოპერატორებით და დაბეჭდავს წინადადებას: "45 გაყოფილი 7-ზე არის X-ჯერ და დარჩება Y ნაშთი" — X და Y უნდა იყოს რეალურად გამოთვლილი მნიშვნელობები, არა ხელით ჩაწერილი რიცხვები.'}},_p={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'შეცდომა როგორც "დამხმარე შეტყობინება", არა კატასტროფა — Syntax vs Runtime შეცდომების განსხვავება.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"რეალური შეცდომების გამოწვევა და მათი წაკითხვა: NameError, TypeError, ZeroDivisionError."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:'გატეხილი კოდის "შეკეთება" Playground-ში + თვითშემოწმების ქვიზი.'},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"შეცდომა არ არის კატასტროფა — ის დამხმარეა",text:'ყველა პროგრამისტი, თუნდაც ყველაზე გამოცდილი, ყოველდღე იღებს შეცდომებს — ეს არის პროცესის ბუნებრივი ნაწილი, არა მარცხი. Python, როცა შეცდომას ხედავს, არ "ჩუმდება" — ის გვიწერს წითელ შეტყობინებას (Traceback), რომელიც ზუსტად გვეუბნება, სად და რატომ შეჩერდა პროგრამა. ეს შეტყობინება ჩვენი მეგობარია, არა მტერი — ის უნდა წავიკითხოთ, არა შევეშინდეთ.'},{heading:'Syntax შეცდომა — "გრამატიკული შეცდომა"',text:'SyntaxError ხდება მაშინ, როცა კოდი არ არის დაწერილი Python-ის წესების მიხედვით — ზუსტად ისე, როგორც წინადადებაში წერტილის ან ფრჩხილის დავიწყება. ეს შეცდომა ჩნდება პროგრამის გაშვებამდეც კი, რადგან Python ვერც კი ახერხებს კოდის "წაკითხვას".'},{heading:"Runtime შეცდომა — კოდი გაეშვა, მაგრამ რაღაც არასწორად მოხდა",text:"ზოგჯერ კოდი გრამატიკულად სწორია, მაგრამ პროგრამის მუშაობისას რაღაც წყდება. მაგალითად: NameError — გამოვიყენეთ ცვლადი, რომელიც არასდროს შეგვიქმნია; TypeError — შევეცადეთ შეუთავსებელი ტიპების შეერთებას (მაგ. ტექსტი + რიცხვი); ZeroDivisionError — ვცადეთ რიცხვის 0-ზე გაყოფა, რაც მათემატიკურად შეუძლებელია."},{heading:"როგორ წავიკითხოთ Traceback?",text:"შეცდომის შეტყობინების ბოლო ხაზი ყველაზე მნიშვნელოვანია — იქ წერია შეცდომის ტიპი (მაგ. NameError) და მოკლე ახსნა. ზემოთ კი ჩანს, ზუსტად რომელ ხაზზე მოხდა პრობლემა. კარგი დებაგერი ყოველთვის იწყებს ბოლო ხაზის წაკითხვით."}],codeExamples:[{title:"NameError — არარსებული ცვლადი",code:`print("დავიწყოთ პროგრამა")
print(favorite_snack)  # ეს ცვლადი არასდროს შეგვიქმნია!`},{title:"TypeError და ZeroDivisionError",code:`age = 13
# print("ასაკი: " + age)  # ეს დაარღვევს პროგრამას — მოხსენი # და სცადე!

result = 10 / 0
print(result)`}],exercises:[{level:"Easy",title:"იპოვე და გაასწორე NameError",prompt:"ამ კოდში ცვლადის სახელი არასწორადაა დაწერილი მეორე print()-ში. იპოვე შეცდომა Traceback-ის დახმარებით და გაასწორე ის, რომ პროგრამამ იმუშაოს.",starter:`student_name = "გიორგი"
print("მოსწავლის სახელია:", studnet_name)
`},{level:"Medium",title:"გაასწორე TypeError",prompt:'ეს კოდი ცდილობს ტექსტსა და რიცხვს ერთად "დაბეჭდვას" `+`-ით, რაც არ მუშაობს. გამოასწორე ის str() ფუნქციის გამოყენებით, რომ რიცხვი ჯერ ტექსტად აქციო.',starter:`age = 13
print("ჩემი ასაკია " + age)
`},{level:"Challenge",title:"უსაფრთხო გამყოფი",prompt:'დაწერე კოდი, რომელიც ორ რიცხვს ყოფს ერთმანეთზე (a / b), მაგრამ ჯერ შეამოწმებს if-ით, არის თუ არა b ნულის ტოლი — თუ არის, დაბეჭდე "ვერ ვყოფ ნულზე!" შეცდომის მოწევის ნაცვლად.',starter:`a = 10
b = 0
# დაამატე if შემოწმება, სანამ გაყოფას სცდი
`}],quiz:[{question:"რომელი შეცდომა ხდება, როცა ვცდილობთ გამოვიყენოთ ცვლადი, რომელიც არასდროს შეგვიქმნია?",options:["SyntaxError","NameError","TypeError","ZeroDivisionError"],correctIndex:1},{question:"Traceback-ის შეტყობინებაში სად ჩანს ყველაზე მნიშვნელოვანი ინფორმაცია შეცდომის ტიპზე?",options:["პირველ ხაზზე","ბოლო ხაზზე","ის საერთოდ არ ჩანს","შუა ხაზზე"],correctIndex:1},{question:'რატომ ხდება TypeError print("ასაკი: " + 13) ბრძანებაში?',options:["რადგან 13 ზედმეტად დიდი რიცხვია",'რადგან ტექსტსა და რიცხვს პირდაპირ ვერ "ვკრებთ" + ოპერატორით',"რადგან print() ფუნქცია გატეხილია","რადგან ბრჭყალები არასწორადაა დასმული"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:"დაწერე მოკლე პროგრამა, რომელიც შეგნებულად შეიცავს ერთ-ერთ ამ სამი შეცდომათაგანს (NameError, TypeError ან ZeroDivisionError), შემდეგ თვითონ გაუშვი, წაიკითხე Traceback და დაწერე (ცალკე print()-ით) ერთი წინადადება — რა ტიპის შეცდომა იყო და როგორ გაასწორე."}},Sp={agenda:[{time:"00:00 – 00:15",title:"შეჯამება",desc:"სწრაფი გახსენება: ცვლადები, მონაცემთა ტიპები, ოპერატორები და შეცდომების წაკითხვა — ოთხივე ერთად ერთ პროექტში."},{time:"00:15 – 00:35",title:"პროექტის კოდი და დემო",desc:"ვაწყობთ მარტივ კალკულატორს ნაბიჯ-ნაბიჯ — Playground-ში ცოცხლად ვცვლით რიცხვებსა და მოქმედებას."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"თავად ავრცობთ კალკულატორს + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რას გავიმეორებთ დღეს?",text:'ბოლო ოთხ შეხვედრაზე ვისწავლეთ ოთხი "ხელსაწყო": ცვლადები (წარწერიანი ყუთები მონაცემისთვის), მონაცემთა ტიპები (int, float, str, bool — ინფორმაციის "ჯიშები"), ოპერატორები (მოქმედების ღილაკები, როგორიცაა + და /) და ვისწავლეთ, არ შევეშინდეთ შეცდომების და წავიკითხოთ Traceback. დღეს ეს ოთხივე ერთ რეალურ პროგრამაში ვაერთიანებთ — ეს არის შენი პირველი "ნამდვილი" პროექტი!'},{heading:"პროექტი: მარტივი კალკულატორი",text:'ავაშენებთ პროგრამას, რომელიც იღებს ორ რიცხვს და მოქმედების ნიშანს ("+", "-", "*" ან "/"), if/elif/else-ის მსგავსი ლოგიკის (ან უბრალო if-ების) დახმარებით ირჩევს, რა მოქმედება გააკეთოს, და ლამაზად ბეჭდავს პასუხს. ეს ზუსტად ისეთივე პრინციპით მუშაობს, როგორც შენი ტელეფონის კალკულატორის აპლიკაცია — მხოლოდ უფრო მარტივი ვერსია.'}],codeExamples:[{title:"ნაბიჯი 1: ცვლადები და პირველი მოქმედება",code:`num1 = 12
num2 = 4
operation = "+"

if operation == "+":
    result = num1 + num2
    print(num1, "+", num2, "=", result)`},{title:"ნაბიჯი 2: სრული კალკულატორი ოთხივე მოქმედებით",code:`num1 = 12
num2 = 4
operation = "/"  # სცადე შეცვალო: "+", "-", "*" ან "/"

if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 == 0:
        result = "ვერ ვყოფ ნულზე!"
    else:
        result = num1 / num2
else:
    result = "უცნობი მოქმედება"

print(num1, operation, num2, "=", result)`}],exercises:[{level:"Easy",title:"შეცვალე რიცხვები და მოქმედება",prompt:"აიღე ზემოთ მოცემული სრული კალკულატორის კოდი, შეცვალე num1, num2 და operation მნიშვნელობები (სცადე ყველა ოთხივე მოქმედება) და შეამოწმე, სწორად მუშაობს თუ არა.",starter:`num1 = 20
num2 = 6
operation = "-"

if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 == 0:
        result = "ვერ ვყოფ ნულზე!"
    else:
        result = num1 / num2
else:
    result = "უცნობი მოქმედება"

print(num1, operation, num2, "=", result)
`},{level:"Medium",title:"დაამატე ხარისხში აყვანა",prompt:'დაამატე კალკულატორს მეხუთე მოქმედება — "**" (ხარისხში აყვანა), ისე რომ operation = "**"-ის დროს პროგრამამ გამოთვალოს num1-ის num2-ე ხარისხი.',starter:`num1 = 2
num2 = 5
operation = "**"

if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 == 0:
        result = "ვერ ვყოფ ნულზე!"
    else:
        result = num1 / num2
# დაამატე elif operation == "**" შემთხვევა აქ
else:
    result = "უცნობი მოქმედება"

print(num1, operation, num2, "=", result)
`},{level:"Challenge",title:"ნაშთის კალკულატორი + ტიპის შემოწმება",prompt:'დაამატე მეექვსე მოქმედება "%" (ნაშთი) და შემდეგ type() ფუნქციით დაბეჭდე, რა ტიპისაა result ცვლადი ბოლო გამოთვლის შემდეგ (გახსოვდეს, ის ზოგჯერ str-ია — "ვერ ვყოფ ნულზე!" შემთხვევაში).',starter:`num1 = 17
num2 = 5
operation = "%"

# ააგე სრული if/elif/else ლოგიკა ყველა 6 მოქმედებისთვის: + - * / ** %

print(num1, operation, num2, "=", result)
print("result-ის ტიპია:", type(result))
`}],quiz:[{question:'რატომ ვამოწმებთ კალკულატორში "if num2 == 0"-ს / ოპერაციისას "/"?',options:["რომ პროგრამა უფრო სწრაფად იმუშაოს","რომ თავიდან ავიცილოთ ZeroDivisionError","რადგან Python-ს არ სჭირდება ეს შემოწმება","რადგან 0 ყოველთვის TypeError-ს იძლევა"],correctIndex:1},{question:"რომელი ცვლადის ტიპია operation ჩვენს კალკულატორში?",options:["int","float","str","bool"],correctIndex:2},{question:"რატომ ვიყენებთ elif-ს if-ის მაგივრად ყოველ მომდევნო შემოწმებაზე?",options:["რადგან elif უფრო სწრაფია","რომ მხოლოდ ერთი პირობა შესრულდეს, თუ წინა უკვე მართალი აღმოჩნდა","რადგან if მხოლოდ ერთხელ შეიძლება გამოვიყენოთ პროგრამაში","ეს არ არის მნიშვნელოვანი — შედეგი ყოველთვის ერთია"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:`გააუმჯობესე შენი კალკულატორი ისე, რომ თუ operation არცერთი ცნობილი მოქმედებაა (მაგ. "^" ან "?"), else ნაწილში დაბეჭდოს გასაგები შეტყობინება: "მოქმედება 'X' უცნობია. სცადე: + - * / ** %" (X უნდა იყოს რეალურად ის მოქმედება, რაც ცვლადში ჩაწერე).`}},Ep={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'if/elif/else როგორც "გზაჯვარედინი" — პროგრამა თავად ირჩევს გზას პირობების მიხედვით.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:'if, elif და else-ის ცოცხალი დემო — ერთი, რამდენიმე და "არცერთი არ შესრულდა" შემთხვევები.'},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'პროგრამას შეუძლია "იფიქროს"',text:'აქამდე ჩვენი პროგრამები ყოველთვის ერთსა და იმავეს აკეთებდნენ, თუმცა კომპიუტერს ბევრად უფრო საინტერესო რამის გაკეთებაც შეუძლია — გადაწყვეტილების მიღება. წარმოიდგინე გზაჯვარედინი: თუ წვიმს, ავიღებთ ქოლგას; თუ არა — არა. `if` სწორედ ეს "თუ" არის Python-ში.'},{heading:'if — "თუ ეს მართალია, გააკეთე ეს"',text:"`if` ამოწმებს პირობას (რომელიც True ან False-ია) და თუ ის True-ა, მხოლოდ მაშინ სრულდება მის ქვემოთ, შეწევით (indent-ით) დაწერილი კოდი. თუ პირობა False-ია, ეს ბლოკი უბრალოდ გამოტოვდება."},{heading:'elif — "თუ არა ეს, მაშინ ამის შემოწმება"',text:'`elif` (შემოკლებით "else if") გვაძლევს საშუალებას, თანმიმდევრულად შევამოწმოთ რამდენიმე პირობა. Python ამოწმებს ზემოდან ქვემოთ და პირველივე True-ს პოვნისთანავე აჩერდება — დანარჩენებს აღარ ამოწმებს, ამიტომ თანმიმდევრობა მნიშვნელოვანია.'},{heading:'else — "თუ არცერთი არ შესრულდა"',text:'`else` არის "სათადარიგო გეგმა" — თუ არც if და არც არცერთი elif არ იყო True, სრულდება მხოლოდ else-ის ქვემოთ დაწერილი კოდი. else არ საჭიროებს პირობას, რადგან ის ავტომატურად ნიშნავს "ყველა დანარჩენი შემთხვევა".'}],codeExamples:[{title:"მარტივი if/else",code:`temperature = 5

if temperature < 10:
    print("ცივა, ჩაიცვი ქურთუკი! 🧥")
else:
    print("თბილა, გარეთ გასეირნება შეიძლება! ☀️")`},{title:"if / elif / else ერთად — ნიშნის განმსაზღვრელი",code:`score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "საჭიროებს გამეორებას"

print("ქულა:", score, "→ შეფასება:", grade)`}],exercises:[{level:"Easy",title:"ლუწი თუ კენტი",prompt:'დაწერე if/else, რომელიც შეამოწმებს number ცვლადს (გამოიყენე % ოპერატორი) და დაბეჭდავს "ლუწია" ან "კენტია".',starter:`number = 17
# დაწერე if/else აქ
`},{level:"Medium",title:"ასაკის კატეგორია",prompt:'დაწერე if/elif/else, რომელიც age ცვლადის მიხედვით დაბეჭდავს: "ბავშვი" (13-ზე ნაკლები), "მოზარდი" (13-17), ან "მოზრდილი" (18 და მეტი).',starter:`age = 15
# დაწერე if/elif/else აქ
`},{level:"Challenge",title:"ამინდის რჩევების ასისტენტი",prompt:'დაწერე პროგრამა, რომელიც temperature და is_raining (bool) ცვლადების მიხედვით რჩევას იძლევა: თუ წვიმს — "აიღე ქოლგა", თუ ცივა (temperature < 10) და არ წვიმს — "ჩაიცვი ქურთუკი", სხვა შემთხვევაში — "კარგი დღეა გარეთ გასასეირნებლად". გამოიყენე and ოპერატორიც საჭიროებისამებრ.',starter:`temperature = 8
is_raining = False
# დაწერე if/elif/else ლოგიკა აქ
`}],quiz:[{question:"რამდენი elif შეიძლება ერთ if-ს ჰქონდეს?",options:["მხოლოდ ერთი","მაქსიმუმ ორი","იმდენი, რამდენიც გვჭირდება","elif საერთოდ არ არსებობს Python-ში"],correctIndex:2},{question:"თუ if-ის პირობაც და პირველი elif-ის პირობაც ორივე True-ა, რომელი კოდი შესრულდება?",options:["ორივე ბლოკი შესრულდება","მხოლოდ if-ის ბლოკი (პირველი True)","მხოლოდ elif-ის ბლოკი","Python შეცდომას გამოიტანს"],correctIndex:1},{question:"როდის სრულდება else ბლოკი?",options:["ყოველთვის, if-თან ერთად","მხოლოდ მაშინ, თუ if და ყველა elif False აღმოჩნდა","მხოლოდ მაშინ, თუ if True-ა","else არასდროს სრულდება ავტომატურად"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'დაწერე პროგრამა "ბილეთის ფასის კალკულატორი": age ცვლადის მიხედვით გამოთვალე ფასი — 6 წლამდე უფასო, 6-17 წლამდე 5 ლარი, 18-64 წლამდე 10 ლარი, 65+ ისევ 5 ლარი (პენსიონერის ფასდაკლება). გამოიყენე if/elif/else და დაბეჭდე საბოლოო ფასი წინადადებით.'}},Cp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'წყობილი (nested) if-ები როგორც "კარები კარებში" — პირობა პირობის შიგნით.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"Nested if-ის ცოცხალი დემო და შედარება იმავე ლოგიკის and-ით გამარტივებულ ვერსიასთან."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'პირობა პირობის შიგნით — "კარები კარებში"',text:'წარმოიდგინე სახლი, სადაც შესასვლელ კარს გავდივართ, მერე კიდევ ერთ კარს ოთახში შესასვლელად. ზოგჯერ პროგრამაშიც გვჭირდება ასეთი "ორი კარი" — პირველ ეტაპზე ერთ პირობას ვამოწმებთ, და მხოლოდ იმ შემთხვევაში, თუ ის True აღმოჩნდა, შიგნით კიდევ ერთ პირობას ვამოწმებთ. ამას ჰქვია წყობილი (nested) if.'},{heading:"როგორ იწერება nested if?",text:"Python-ში ეს მარტივია — უბრალოდ if-ს ვწერთ სხვა if-ის ქვემოთ, ერთი დამატებითი შეწევით (indent-ით) მარჯვნივ. რაც უფრო ღრმად ვწყობთ if-ებს, მით მეტი შეწევაა საჭირო — Python სწორედ ამ შეწევებით არჩევს, რომელი კოდი რომელ პირობას ეკუთვნის."},{heading:"ალტერნატივა — ლოგიკური ოპერატორების კომბინაცია",text:'ხშირად იმავე შედეგს "ერთსართულიანი" if-ითაც მივაღწევთ, თუ პირობებს `and`/`or`-ით ერთმანეთს დავუკავშირებთ (მაგ. `if age >= 12 and has_ticket:`). ეს ხშირად უფრო წასაკითხია, ვიდრე ღრმად ჩალაგებული if-ები — კარგი პროგრამისტი ირჩევს იმას, რაც კონკრეტულ სიტუაციაში უფრო გასაგებია.'}],codeExamples:[{title:"Nested if — კონცერტზე შესვლა",code:`age = 15
has_ticket = True

if age >= 12:
    if has_ticket:
        print("კეთილი იყოს შენი მობრძანება კონცერტზე! 🎸")
    else:
        print("ბილეთი გჭირდება.")
else:
    print("სამწუხაროდ, ასაკი არ საკმარისია.")`},{title:"იგივე ლოგიკა and-ით — შედარება",code:`age = 15
has_ticket = True

if age >= 12 and has_ticket:
    print("კეთილი იყოს შენი მობრძანება კონცერტზე! 🎸")
elif age >= 12 and not has_ticket:
    print("ბილეთი გჭირდება.")
else:
    print("სამწუხაროდ, ასაკი არ საკმარისია.")`}],exercises:[{level:"Easy",title:"ორსაფეხურიანი შემოწმება",prompt:'დაწერე nested if: ჯერ შეამოწმე არის თუ არა temperature დადებითი (> 0), და თუ დადებითია, შიგნით კიდევ შეამოწმე, არის თუ არა 25-ზე მეტი — თუ ასეა, დაბეჭდე "ცხელა", თუ არა — "თბილა". თუ თავიდანვე უარყოფითია — "ყინვაა".',starter:`temperature = 18
# დაწერე nested if აქ
`},{level:"Medium",title:"ორივე გზით ერთი შედეგი",prompt:"დაწერე ერთი პროგრამა, რომელიც ორივე გზით (nested if-ით და and-ით) ამოწმებს, შეუძლია თუ არა მოსწავლეს გამოცდის ჩაბარება: საჭიროა score >= 60 და attendance >= 80 (პროცენტულად დასწრება). შედეგი ორივე გზაზე უნდა ემთხვეოდეს ერთმანეთს.",starter:`score = 75
attendance = 85

# 1) დაწერე nested if ვერსია
print("--- Nested if ---")


# 2) დაწერე and-ით გამარტივებული ვერსია
print("--- and ვერსია ---")

`},{level:"Challenge",title:"სამსაფეხურიანი კლასიფიკატორი",prompt:'დაწერე პროგრამა, რომელიც ჯერ ამოწმებს, არის თუ არა weather "მზიანი", და თუ კი — შიგნით კიდევ ამოწმებს temperature-ს (25-ზე მეტი → "სანაპიროზე წასასვლელად საუკეთესო დღეა", სხვაგვარად → "სასეირნოდ კარგი დღეა"). თუ weather არ არის "მზიანი", დაბეჭდე "სახლში დარჩენა სჯობს".',starter:`weather = "მზიანი"
temperature = 28
# დაწერე წყობილი if აქ
`}],quiz:[{question:"რას ეწოდება if-ი, რომელიც სხვა if-ის ქვემოთ, შეწევით არის ჩალაგებული?",options:["Double if","Nested if","Multi if","Loop if"],correctIndex:1},{question:"Nested if-ში შიდა if მაშინ შემოწმდება, თუ...",options:["ყოველთვის, გარე პირობის მიუხედავად","მხოლოდ მაშინ, როცა გარე (მშობელი) if-ის პირობა True აღმოჩნდა","მხოლოდ მაშინ, როცა გარე if-ის პირობა False აღმოჩნდა","შიდა if-ს გარე პირობასთან საერთო არაფერი აქვს"],correctIndex:1},{question:'რომელი გამონათქვამი ტოლფასია ამ nested if-ის: "if age >= 12: if has_ticket: ..." ?',options:["if age >= 12 or has_ticket:","if age >= 12 and has_ticket:","if not age >= 12:","if age >= 12: elif has_ticket:"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'დაწერე პროგრამა "სათხილამურო ტრასის რჩევა": გამოიყენე ცვლადები skill_level ("დამწყები"/"საშუალო"/"პროფესიონალი") და snow_condition ("კარგი"/"ცუდი"). წყობილი if-ებით მიეცი რჩევა — მაგ. თუ პროფესიონალია და თოვლი კარგია, "შავი ტრასა შენია!", თუ დამწყებია — ყოველთვის "მწვანე ტრასაზე დარჩი", თოვლის მდგომარეობის მიუხედავად.'}},Np={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'for ციკლი როგორც "გამეორების მანქანა" — რატომ არ გვჭირდება ერთი და იგივე კოდის 100-ჯერ ხელით გადაწერა.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"for ციკლის ცოცხალი დემო — range()-თან და სტრიქონზე/სიაზე გამეორებით."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რატომ გვჭირდება ციკლი?",text:'გახსოვდეს შეხვედრა #1-ის გამოწვევა — "მე ვსწავლობ Python-ს!" 5-ჯერ დაბეჭდვა ხუთი ცალკე print()-ით? წარმოიდგინე, რომ 1000-ჯერ დაგვჭირდებოდა იგივე. ხელით წერა შეუძლებელია — და აქ გვეხმარება ციკლი: კოდის ერთი ბლოკი, რომელიც კომპიუტერი თავად იმეორებს, რამდენჯერაც გვჭირდება.'},{heading:'for ციკლი — "გამეორება თითოეულისთვის"',text:'`for` ციკლი პითონურად ასე იკითხება: "თითოეული ელემენტისთვის ამ კრებულში, გააკეთე შემდეგი". სინტაქსია `for ცვლადი in კრებული:` — ცვლადი ავტომატურად იღებს კრებულის თითოეულ მნიშვნელობას, ერთი-ერთზე, სანამ კრებული არ ამოიწურება.'},{heading:'range() — რიცხვების "გენერატორი"',text:"`range()` ქმნის რიცხვების თანმიმდევრობას, რომლის გამეორებაც შეგვიძლია. `range(5)` იძლევა 0, 1, 2, 3, 4-ს (ხუთი რიცხვი, 0-დან იწყება!). `range(2, 6)` იძლევა 2, 3, 4, 5-ს. `range(0, 10, 2)` კი — ყოველ მეორე რიცხვს: 0, 2, 4, 6, 8."},{heading:'for ციკლი სხვა "გამეორებად ობიექტებზე"',text:'range()-ის გარდა, for ციკლით შეგვიძლია გავიაროთ სტრიქონის ყოველი სიმბოლო ან სიის ყოველი ელემენტი — ნებისმიერი "კრებული", რომლის შიგნითაც ცალ-ცალკე ელემენტებია, გამეორებადია (iterable). ამას მომავალ შეხვედრებზე, სიებთან ერთად, კიდევ უფრო ღრმად შევისწავლით.'}],codeExamples:[{title:"პირველი for ციკლი — range()-ით",code:`for i in range(5):
    print("მე ვსწავლობ Python-ს! (გამეორება", i + 1, ")")`},{title:"გამეორება სტრიქონზე და ჯამის დაანგარიშება",code:`word = "Python"
for letter in word:
    print(letter)

total = 0
for number in range(1, 6):
    total = total + number
print("ჯამი 1-დან 5-მდე:", total)`}],exercises:[{level:"Easy",title:"რიცხვების დათვლა",prompt:"დაწერე for ციკლი, რომელიც range()-ის გამოყენებით დაბეჭდავს რიცხვებს 1-დან 10-მდე (ჩათვლით).",starter:`# დაწერე for ციკლი აქ
`},{level:"Medium",title:"ლუწი რიცხვების ჯამი",prompt:"გამოთვალე for ციკლით ყველა ლუწი რიცხვის ჯამი 1-დან 20-მდე (გამოიყენე % ოპერატორი, რომ ლუწი რიცხვები ამოარჩიო) და დაბეჭდე შედეგი.",starter:`total = 0
for number in range(1, 21):
    # დაამატე if შემოწმება და ჯამის დათვლა
    pass

print("ლუწი რიცხვების ჯამია:", total)
`},{level:"Challenge",title:"ვარსკვლავების პირამიდა",prompt:'გამოიყენე for ციკლი (range()-ითა და "*" სიმბოლოს გამრავლებით, მაგ. "*" * 3 = "***"), რომ დაბეჭდო პატარა პირამიდა 5 რიგისგან: პირველ ხაზზე 1 ვარსკვლავი, მეორეზე 2, და ასე შემდეგ, მეხუთე ხაზამდე.',starter:`for i in range(1, 6):
    # დაბეჭდე i ცალი ვარსკვლავი ამ ხაზზე
    pass
`}],quiz:[{question:"რას დააბრუნებს range(3)?",options:["1, 2, 3","0, 1, 2","0, 1, 2, 3","1, 2"],correctIndex:1},{question:'რას გააკეთებს ეს კოდი: for letter in "hi": print(letter)',options:['დაბეჭდავს "hi"-ს ერთხელ','დაბეჭდავს "h"-ს და "i"-ს ცალ-ცალკე ხაზებზე',"შეცდომას გამოიტანს",'დაბეჭდავს "hihi"-ს'],correctIndex:1},{question:"რას იძლევა range(2, 10, 3)?",options:["2, 5, 8","2, 3, 4, ..., 9","2, 10, 3","2, 4, 6, 8"],correctIndex:0}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'დაწერე for ციკლი, რომელიც 1-დან 15-მდე ყოველ რიცხვზე ამოწმებს: თუ იყოფა 3-ზეც და 5-ზეც ერთდროულად — დაბეჭდავს "FizzBuzz"; თუ მხოლოდ 3-ზე — "Fizz"; თუ მხოლოდ 5-ზე — "Buzz"; სხვა შემთხვევაში — თვითონ რიცხვს. (ეს ცნობილი ამოცანაა, რომელსაც ბევრი დამწყები პროგრამისტი ხვდება!)'}},Pp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'while ციკლი როგორც "სანამ ეს მართალია" წესი — განსხვავება for-სგან, უსასრულო ციკლის საფრთხე.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"while ციკლის ცოცხალი დემო + break, continue და pass-ის მოქმედება."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'while — "სანამ ეს პირობა მართალია"',text:'თუ `for` ციკლი გვეუბნება "გაიმეორე ზუსტად ამდენჯერ", `while` ციკლი სულ სხვანაირად ფიქრობს: "განაგრძე გამეორება, სანამ ეს პირობა მართალია". მაგალითად, თამაშში შეგვიძლია ვთქვათ "სანამ სიცოცხლე > 0-ია, თამაში გრძელდება" — არ ვიცით ზუსტად რამდენჯერ განმეორდება, ეს დამოკიდებულია მოვლენებზე.'},{heading:"ყურადღება! უსასრულო ციკლის საფრთხე",text:'while ციკლის ყველაზე გავრცელებული შეცდომა ისაა, რომ დაგვავიწყდეს პირობის შეცვლა ციკლის შიგნით — მაშინ პირობა ყოველთვის True რჩება და პროგრამა "იჭედება" სამუდამოდ. ამიტომ while ციკლის დაწერისას ყოველთვის დარწმუნდი, რომ ციკლის შიგნით რაღაც იცვლება (მაგ. counter იზრდება), რაც ბოლოს პირობას False-ად აქცევს.'},{heading:'break — "დაუყოვნებლივ გამოდი ციკლიდან"',text:'`break` ბრძანება მყისიერად წყვეტს ციკლს, მიუხედავად იმისა, ჯერ კიდევ მართალია თუ არა პირობა — ზუსტად ისე, როგორც სათამაშო წრეზე "სტოპ!" ვიყვირებდით.'},{heading:"continue და pass",text:'`continue` ტოვებს მიმდინარე გამეორებას და პირდაპირ მომდევნო ბრუნზე გადადის, ციკლის დარჩენილი კოდის გამოტოვებით. `pass` კი სულ სხვა რამეა — ის არაფერს აკეთებს, უბრალოდ "ადგილის შემვსებია", როცა Python-ს სინტაქსურად სჭირდება რაღაც კოდი, მაგრამ ჩვენ ჯერ არაფრის დაწერა არ გვინდა.'}],codeExamples:[{title:"მარტივი while ციკლი — უკუთვლა",code:`count = 5
while count > 0:
    print(count)
    count = count - 1
print("გავარდა! 🚀")`},{title:"break და continue მოქმედებაში",code:`number = 0
while number < 10:
    number = number + 1
    if number == 7:
        break  # ციკლი მთლიანად ჩერდება, როგორც კი number 7-ია
    if number % 2 == 0:
        continue  # ლუწ რიცხვებს ვტოვებთ, ბეჭდვის გარეშე ვაგრძელებთ
    print(number)`}],exercises:[{level:"Easy",title:"უკუთვლის ცვლილება",prompt:"შეცვალე უკუთვლის მაგალითი ისე, რომ 10-დან 1-მდე ჩამოთვალოს (ნაცვლად 5-დან 1-მდე).",starter:`count = 10
while count > 0:
    print(count)
    count = count - 1
print("გავარდა! 🚀")
`},{level:"Medium",title:"ჯამის შეგროვება while-ით",prompt:"გამოიყენე while ციკლი, რომ დააჯამო რიცხვები 1-დან 100-მდე. დაბეჭდე საბოლოო ჯამი მხოლოდ ერთხელ, ციკლის დასრულების შემდეგ.",starter:`total = 0
number = 1
# დაწერე while ციკლი, რომელიც number-ს ამატებს total-ს, სანამ number <= 100

print("ჯამია:", total)
`},{level:"Challenge",title:"პაროლის გამოცნობის სიმულატორი",prompt:'გვაქვს attempts = 0 და secret_code = 1234 (ცვლადებში ჩაწერილი, არა input()-ით). დაწერე while ციკლი, რომელიც სცდის სიით [5555, 9999, 1234, 7000] გამოცნობას (გამოიყენე for რომ გაიაროს სია, while-ის შიგნით კი counter-ი აწარმოო) — როცა code == secret_code, break-ით გამოდი და დაბეჭდე "გამოიცნო! X ცდაში".',starter:`secret_code = 1234
guesses = [5555, 9999, 1234, 7000]
attempts = 0

for code in guesses:
    attempts = attempts + 1
    if code == secret_code:
        print("გამოიცნო!", attempts, "ცდაში")
        break
    else:
        print(code, "- არასწორია")
`}],quiz:[{question:"რა განსხვავებაა for და while ციკლს შორის?",options:["while უფრო სწრაფია","for ვიცით რამდენჯერ გამეორდება, while კი გრძელდება სანამ პირობა მართალია","for მუშაობს მხოლოდ რიცხვებზე, while — ტექსტზე","არანაირი განსხვავება არ არის"],correctIndex:1},{question:"რას აკეთებს break ბრძანება?",options:["ტოვებს მიმდინარე ბრუნს და აგრძელებს შემდეგზე","მყისიერად წყვეტს მთელ ციკლს","აჩერებს პროგრამას 1 წამით","არაფერს აკეთებს"],correctIndex:1},{question:`რატომ არის საშიში ეს კოდი: "while True: print('hi')"?`,options:["ის საერთოდ არ იმუშავებს","ის შეცდომას გამოიტანს","ის არასდროს შეჩერდება — უსასრულო ციკლია, პირობა არასდროს იცვლება",'ის მხოლოდ ერთხელ დაბეჭდავს "hi"-ს'],correctIndex:2}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:"დაწერე while ციკლი, რომელიც 1-იდან იწყება და ზრდის რიცხვს, სანამ ჯამი 50-ს არ გადააჭარბებს — ყოველ ბრუნზე დაბეჭდე მიმდინარე რიცხვი და დროებითი ჯამი, ხოლო ბოლოს დაბეჭდე, რამდენი რიცხვი დასჭირდა 50-ის გადასაჭარბებლად."}},Tp={agenda:[{time:"00:00 – 00:15",title:"შეჯამება",desc:"სწრაფი გახსენება: if/elif/else, nested პირობები, for და while ციკლები, break/continue — ყველაფერი ერთ თამაშში."},{time:"00:15 – 00:35",title:"პროექტის კოდი და დემო",desc:'ვაწყობთ "რიცხვის გამოცნობის თამაშს" ნაბიჯ-ნაბიჯ — while ციკლი + პირობები ერთად.'},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"თავად ვაფართოებთ თამაშს (მინიშნებები, ცდების ლიმიტი) + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რას გავიმეორებთ დღეს?",text:'ბოლო სამ შეხვედრაზე ვისწავლეთ if/elif/else, nested პირობები, ლოგიკური კომბინაციები, for ციკლი range()-ით და while ციკლი (break/continue-ითურთ). დღეს ეს ყველაფერი ერთ საინტერესო პროექტში ვაერთიანებთ — შენი მეორე "ნამდვილი" თამაშია!'},{heading:"პროექტი: რიცხვის გამოცნობის თამაში",text:'კომპიუტერს "მოუფიქრებია" ფარული რიცხვი (secret_number). მოთამაშე ცდილობს მის გამოცნობას, ხოლო პროგრამა ყოველ ცდაზე ეუბნება, ცდა "მეტია" თუ "ნაკლები" საძებნ რიცხვზე. ჩვენ ამას სიმულირებულად გავაკეთებთ — ცდების სია წინასწარაა ჩაწერილი (რადგან Pyodide ბრაუზერში ცოცხალ input()-ს კარგად არ უჭერს მხარს), მაგრამ ლოგიკა ზუსტად ისეთივეა, როგორც რეალურ თამაშში იქნებოდა.'}],codeExamples:[{title:"ნაბიჯი 1: ერთი ცდის შემოწმება",code:`secret_number = 42
guess = 30

if guess == secret_number:
    print("გამარჯვება! 🎉")
elif guess < secret_number:
    print("მეტია სცადე")
else:
    print("ნაკლები სცადე")`},{title:"ნაბიჯი 2: სრული თამაში — while ციკლით ცდების სიაზე",code:`secret_number = 42
guesses = [10, 60, 45, 40, 42]  # მოთამაშის ცდები თანმიმდევრობით

attempts = 0
found = False

while attempts < len(guesses) and not found:
    guess = guesses[attempts]
    attempts = attempts + 1
    print("ცდა", attempts, "-> ვარაუდი:", guess)

    if guess == secret_number:
        print("გამარჯვება! 🎉 გამოიცნო", attempts, "ცდაში!")
        found = True
    elif guess < secret_number:
        print("   მეტია სცადე ⬆️")
    else:
        print("   ნაკლები სცადე ⬇️")

if not found:
    print("ცდები ამოიწურა. ფარული რიცხვი იყო:", secret_number)`}],exercises:[{level:"Easy",title:"შეცვალე ფარული რიცხვი და ცდები",prompt:"შეცვალე secret_number სხვა რიცხვზე და guesses სია ისე, რომ ბოლო ცდა სწორი იყოს. გაუშვი და დარწმუნდი, რომ თამაში სწორად ცნობს გამარჯვებას.",starter:`secret_number = 17
guesses = [5, 20, 15, 17]

attempts = 0
found = False

while attempts < len(guesses) and not found:
    guess = guesses[attempts]
    attempts = attempts + 1
    print("ცდა", attempts, "-> ვარაუდი:", guess)

    if guess == secret_number:
        print("გამარჯვება! 🎉 გამოიცნო", attempts, "ცდაში!")
        found = True
    elif guess < secret_number:
        print("   მეტია სცადე ⬆️")
    else:
        print("   ნაკლები სცადე ⬇️")

if not found:
    print("ცდები ამოიწურა. ფარული რიცხვი იყო:", secret_number)
`},{level:"Medium",title:"დაამატე ცდების ლიმიტი",prompt:"დაამატე max_attempts = 3 ცვლადი და შეცვალე while-ის პირობა ისე, რომ თამაში ისედაც შეჩერდეს, თუ 3 ცდა ამოიწურა — მაშინაც, თუ guesses სიაში მეტი ელემენტია.",starter:`secret_number = 25
guesses = [10, 12, 15, 25, 30]  # 5 ცდაა სიაში, მაგრამ ლიმიტი 3 იქნება
max_attempts = 3

attempts = 0
found = False

# შეცვალე while-ის პირობა, რომ attempts < max_attempts-ც შეამოწმოს
while attempts < len(guesses) and not found:
    guess = guesses[attempts]
    attempts = attempts + 1
    print("ცდა", attempts, "-> ვარაუდი:", guess)

    if guess == secret_number:
        print("გამარჯვება! 🎉")
        found = True
    elif guess < secret_number:
        print("   მეტია სცადე ⬆️")
    else:
        print("   ნაკლები სცადე ⬇️")

if not found:
    print("ცდები ამოიწურა. ფარული რიცხვი იყო:", secret_number)
`},{level:"Challenge",title:'"ცხელა-ცივა" მინიშნებები',prompt:'გააუმჯობესე თამაში ისე, რომ "მეტია"/"ნაკლები" შეტყობინებას დაემატოს დამატებითი მინიშნება — თუ ვარაუდსა და ფარულ რიცხვს შორის სხვაობა 5-ზე ნაკლებია, დაბეჭდე "(ცხელა! 🔥)" წინადადების ბოლოს, სხვაგვარად "(ცივა ❄️)". გამოიყენე abs() ფუნქცია სხვაობის დასაანგარიშებლად.',starter:`secret_number = 50
guesses = [10, 80, 45, 52, 50]

attempts = 0
found = False

while attempts < len(guesses) and not found:
    guess = guesses[attempts]
    attempts = attempts + 1
    difference = abs(guess - secret_number)

    if guess == secret_number:
        print("ცდა", attempts, "-> გამარჯვება! 🎉")
        found = True
    elif guess < secret_number:
        print("ცდა", attempts, "-> მეტია სცადე ⬆️")  # დაამატე ცხელა/ცივა მინიშნება
    else:
        print("ცდა", attempts, "-> ნაკლები სცადე ⬇️")  # დაამატე ცხელა/ცივა მინიშნება

if not found:
    print("ცდები ამოიწურა. ფარული რიცხვი იყო:", secret_number)
`}],quiz:[{question:"რატომ ვიყენებთ while-ს and not found-თან ერთად ამ თამაშში?",options:["რომ ციკლი გაჩერდეს ან ცდების ამოწურვისას, ან რიცხვის გამოცნობისთანავე — რაც უფრო ადრე დადგება","რადგან and ოპერატორი აუცილებელია ყველა while-ში","ეს არაფერს ცვლის, უბრალოდ სტილისტიკაა","რომ პროგრამა უფრო სწრაფად იმუშაოს"],correctIndex:0},{question:"რას აკეთებს len(guesses) ამ კოდში?",options:["ბრუნავს guesses სიის ჯამს","ბრუნავს guesses სიაში ელემენტების რაოდენობას","ბრუნავს guesses-ის პირველ ელემენტს","შლის guesses სიას"],correctIndex:1},{question:"თუ found = True გახდა, რატომ არ გრძელდება while ციკლი?",options:["რადგან found იცვლის guesses სიას",'რადგან "not found" ხდება False, ამიტომ while-ის პირობა მთლიანად False-დება',"while ციკლი ვერასდროს წყდება found-ის გამო","found არავითარ გავლენას არ ახდენს ციკლზე"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'გააუმჯობესე თამაში ისე, რომ ბოლოს, თამაშის დასრულების შემდეგ (გაიმარჯვა თუ ვერა), დაბეჭდოს შეჯამების წინადადება: "სულ გაკეთდა X ცდა, საშუალოდ თითოეული ცდა Y-ით სცდებოდა სწორ პასუხს" (Y გამოთვალე, როგორც ცდების სხვაობების საშუალო — შეგიძლია გამოიყენო თუნდაც მარტივი ხელით დაწერილი გამოთვლა).'}},zp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'სია როგორც "ჯაჭვი ყუთებისგან" — ბევრი მნიშვნელობის შენახვა ერთ ცვლადში.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"სიის შექმნა, ინდექსით წვდომა (მათ შორის უარყოფითი ინდექსები) და append()-ით დამატება."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რატომ გვჭირდება სია?",text:'აქამდე თითო ცვლადში ერთ მნიშვნელობას ვინახავდით — name = "ნინო". მაგრამ რა ვქნათ, თუ 30 მოსწავლის სახელი გვინდა ერთად შენახვა? 30 ცალკე ცვლადის შექმნა (name1, name2, name3...) საშინელი იქნებოდა. სია (list) გვაძლევს საშუალებას, ბევრი მნიშვნელობა ერთ ცვლადში, თანმიმდევრობით შევინახოთ — ზუსტად ისე, როგორც ერთმანეთზე მიბმული ყუთების ჯაჭვი.'},{heading:"სიის შექმნა",text:'სია იწერება კვადრატულ ფრჩხილებში, ელემენტები კი მძიმით არის გამოყოფილი: `fruits = ["ვაშლი", "ბანანი", "მანდარინი"]`. სია შეიძლება იყოს ცარიელიც (`empty_list = []`) და მასში სხვადასხვა ტიპის მონაცემიც კი შეიძლება ერთდროულად ინახებოდეს.'},{heading:"ინდექსაცია — თითოეულ ყუთს აქვს ნომერი",text:'ყოველ ელემენტს სიაში აქვს თავისი "ადგილის ნომერი" — ინდექსი. Python-ში დათვლა **0-დან** იწყება, ანუ პირველი ელემენტია `fruits[0]`, არა `fruits[1]`! საინტერესო ტრიუკია უარყოფითი ინდექსები — `fruits[-1]` ყოველთვის ბოლო ელემენტს გვაძლევს, `fruits[-2]` — ბოლოდან მეორეს.'},{heading:"append() — ახალი ელემენტის დამატება",text:"`სია.append(მნიშვნელობა)` ამატებს ახალ ელემენტს სიის ბოლოში. ეს ერთ-ერთი ყველაზე ხშირად გამოყენებული სიის მეთოდია — მომავალ შეხვედრებზე კიდევ ბევრ სხვა მეთოდსაც შევისწავლით."}],codeExamples:[{title:"სიის შექმნა და ინდექსით წვდომა",code:`fruits = ["ვაშლი", "ბანანი", "მანდარინი", "ატამი"]

print(fruits)
print("პირველი:", fruits[0])
print("მესამე:", fruits[2])
print("ბოლო:", fruits[-1])`},{title:"append() და სიის სიგრძე",code:`shopping_list = ["პური", "რძე"]
print("თავიდან:", shopping_list)

shopping_list.append("კვერცხი")
shopping_list.append("ყველი")
print("დამატების შემდეგ:", shopping_list)

print("სიაში ჯამში", len(shopping_list), "ნივთია")`}],exercises:[{level:"Easy",title:"საყვარელი ფილმების სია",prompt:"შექმენი სია სამი საყვარელი ფილმის სახელით, დაბეჭდე მთელი სია, შემდეგ ცალკე დაბეჭდე მხოლოდ პირველი ფილმი.",starter:`# შექმენი სია აქ
`},{level:"Medium",title:"დაამატე და ბოლო ნივთი ნახე",prompt:"გამოიყენე მოცემული backpack სია. დაამატე append()-ით ორი ახალი ნივთი, შემდეგ დაბეჭდე სიის ბოლო ელემენტი უარყოფითი ინდექსით (-1) და მთელი სიის სიგრძე len()-ით.",starter:`backpack = ["წიგნი", "კალამი"]
# დაამატე ორი ახალი ნივთი append()-ით

# დაბეჭდე ბოლო ნივთი -1 ინდექსით და სიის სიგრძე
`},{level:"Challenge",title:"პირველი, შუა და ბოლო",prompt:'შექმენი 5-ელემენტიანი სია ნებისმიერი რიცხვებით. დაბეჭდე პირველი ელემენტი, ზუსტად შუა ელემენტი (ინდექსი 2) და ბოლო ელემენტი — ერთი წინადადებით ყველა სამივე, მაგ. "პირველი: X, შუა: Y, ბოლო: Z".',starter:`numbers = [4, 8, 15, 16, 23]
# დაბეჭდე პირველი, შუა და ბოლო ელემენტები ერთად
`}],quiz:[{question:"რომელი ინდექსი შეესაბამება სიის პირველ ელემენტს?",options:["1","0","-1","first"],correctIndex:1},{question:'თუ colors = ["წითელი", "ლურჯი", "მწვანე"], რას დააბრუნებს colors[-1]?',options:['"წითელი"','"ლურჯი"','"მწვანე"',"Error"],correctIndex:2},{question:'რას აკეთებს sia.append("X")?',options:['შლის "X"-ს სიიდან','ამატებს "X"-ს სიის ბოლოში','ცვლის სიის პირველ ელემენტს "X"-ით','ამოწმებს, არის თუ არა "X" სიაში'],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'შექმენი ცარიელი სია სახელად my_week. for ციკლის გამოყენებით (range(1, 8)) დაამატე append()-ით 7 სტრიქონი: "დღე 1", "დღე 2", ..., "დღე 7" (გამოიყენე str() და +, რომ ტექსტი და რიცხვი გააერთიანო). ბოლოს დაბეჭდე მთელი სია.'}},jp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'სიის მეთოდები როგორც "ხელსაწყოების ყუთი" სიისთვის; Slicing როგორც "ნაჭრის ამოჭრა" სიიდან.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"sort(), remove(), insert() და slice[a:b] ცოცხალი დემო."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'სიის მეთოდები — "ხელსაწყოების ყუთი"',text:'ბოლო შეხვედრაზე ვისწავლეთ append() — ეს მხოლოდ ერთია იმ ბევრი "ხელსაწყოდან", რაც Python სიას გვთავაზობს. sort() ალაგებს ელემენტებს, remove() შლის კონკრეტულ მნიშვნელობას, insert() ამატებს ელემენტს ზუსტად სასურველ ადგილას (არა მხოლოდ ბოლოში), pop() კი შლის და ამავე დროს გვიბრუნებს ამოღებულ ელემენტს.'},{heading:"sort() — დალაგება",text:"`სია.sort()` ალაგებს რიცხვებს ზრდადობით (პატარადან დიდისკენ), ან ტექსტს ანბანურად. თუ საწინააღმდეგო მიმართულებით გვინდა დალაგება, ვწერთ `სია.sort(reverse=True)`."},{heading:"remove() და insert()",text:"`სია.remove(მნიშვნელობა)` პოულობს პირველ ასეთ ელემენტს სიაში და შლის მას (არა ინდექსით, არამედ თვითონ მნიშვნელობით!). `სია.insert(ინდექსი, მნიშვნელობა)` კი ჩასვამს ახალ ელემენტს ზუსტად იმ ადგილას, სადაც მითითებულია."},{heading:'Slicing — სიის "ნაჭრის" ამოჭრა',text:"Slicing გვაძლევს საშუალებას, სიის მხოლოდ ნაწილი ავიღოთ, ახალი, პატარა სია გვქონდეს. სინტაქსია `სია[a:b]` — ეს ბრუნდება ელემენტებს ინდექსიდან a-დან ინდექსამდე b (ჩათვლით a, გამორიცხვით b!). მაგალითად `numbers[1:4]` აძლევს ინდექსების 1, 2, 3 ელემენტებს — 4-ე ინდექსი აღარ შედის."}],codeExamples:[{title:"sort(), remove(), insert()",code:`scores = [85, 62, 91, 74, 58]
scores.sort()
print("დალაგებული:", scores)

scores.remove(62)
print("62-ის წაშლის შემდეგ:", scores)

scores.insert(1, 70)
print("70-ის ჩასმის შემდეგ:", scores)`},{title:"Slicing მაგალითები",code:`letters = ["a", "b", "c", "d", "e", "f"]

print(letters[1:4])   # ინდექსები 1, 2, 3
print(letters[:3])    # თავიდან, ინდექსამდე 3
print(letters[3:])    # ინდექსიდან 3, ბოლომდე
print(letters[-3:])   # ბოლო სამი ელემენტი`}],exercises:[{level:"Easy",title:"დალაგება ორივე მიმართულებით",prompt:"დაალაგე ages სია ზრდადობით და დაბეჭდე, შემდეგ დაალაგე კლებადობით (reverse=True) და ისევ დაბეჭდე.",starter:`ages = [34, 12, 45, 8, 27]
# დაალაგე ზრდადობით და დაბეჭდე

# დაალაგე კლებადობით და დაბეჭდე
`},{level:"Medium",title:"პირველი სამი და ბოლო ორი",prompt:"გამოიყენე slicing, რომ სიის students-იდან ცალკე დაბეჭდო პირველი სამი მოსწავლე და ცალკე — ბოლო ორი მოსწავლე.",starter:`students = ["ანა", "გიგა", "ნინო", "ლუკა", "მარი", "დათო"]
# დაბეჭდე პირველი სამი slicing-ით

# დაბეჭდე ბოლო ორი slicing-ით
`},{level:"Challenge",title:"რიგში ჩასმა და ამოღება",prompt:'გქონდა queue სია. ჯერ ამოშალე "დათო" remove()-ით (ის ცდილობდა რიგიდან გასვლას), მერე insert()-ით ჩასვი "ლანა" ინდექს 1-ზე (მან რიგში ვინმეს "დაუკავა" ადგილი). ბოლოს slicing-ით დაბეჭდე მხოლოდ პირველი ორი ადამიანი, ვინც ახლა რიგშია.',starter:`queue = ["ანა", "დათო", "ლუკა", "სანდრო"]
# 1) ამოშალე "დათო"

# 2) ჩასვი "ლანა" ინდექს 1-ზე

# 3) slicing-ით დაბეჭდე პირველი ორი
`}],quiz:[{question:"რას დააბრუნებს numbers[1:4], თუ numbers = [10, 20, 30, 40, 50]?",options:["[10, 20, 30]","[20, 30, 40]","[20, 30, 40, 50]","[30, 40]"],correctIndex:1},{question:"sia.remove(3) ამოშლის...",options:["ინდექს 3-ზე მდგომ ელემენტს","ბოლო ელემენტს","პირველ ელემენტს, რომლის მნიშვნელობაც არის 3","ყველა 3-იან ელემენტს"],correctIndex:2},{question:"რა განსხვავებაა append()-სა და insert()-ს შორის?",options:["append() ყოველთვის ბოლოში ამატებს, insert() კი მითითებულ ადგილას","ისინი ერთი და იგივეა","insert() მხოლოდ პირველ ადგილზე ამატებს","append() შლის ელემენტს, insert() ამატებს"],correctIndex:0}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:"გქონდა 8 რიცხვისგან შემდგარი სია. slicing-ის გამოყენებით გაყავი ის ორ თანაბარ ნაწილად (პირველი 4 და ბოლო 4) და ორივე ნაწილის ჯამი ცალ-ცალკე დაბეჭდე sum() ფუნქციით (მაგ. sum(first_half))."}},Mp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'Tuple როგორც "დაცული ყუთი" (ვერ იცვლება) და Set როგორც "უნიკალურთა კრებული" (გამეორება არ დაიშვება).'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"Tuple-ის შექმნა და ცვლილების მცდელობის შეცდომა; Set-ის შექმნა და დუბლიკატების ავტომატური მოცილება."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'Tuple — "დალუქული ყუთი"',text:'გახსოვს სია (list), რომელიც შეგვიძლია ნებისმიერ დროს შევცვალოთ — ელემენტი დავამატოთ, წავშალოთ ან შევცვალოთ? Tuple ზუსტად ისეთივეა, გარდა ერთი მნიშვნელოვანი განსხვავებისა — ის დალუქულია. მისი შექმნის შემდეგ ვერაფერს ვერ შევცვლით. ეს გამოსადეგია მაშინ, როცა გვინდა დავრწმუნდეთ, რომ მონაცემები არასდროს "დაზიანდება" — მაგალითად, GPS კოორდინატი (განედი, გრძედი) არასდროს უნდა შეიცვალოს შემთხვევით.'},{heading:"Tuple-ის სინტაქსი",text:'Tuple იწერება მრგვალ ფრჩხილებში: `point = (10, 20)`. მასზეც ისევე ვწვდებით ინდექსით, როგორც სიაზე (`point[0]`), მაგრამ `point[0] = 5`-ის მცდელობა შეცდომას გამოიტანს — `TypeError`, რადგან tuple "immutable" (უცვლელი) არის.'},{heading:'Set — "უნიკალურთა კრებული"',text:'წარმოიდგინე ყუთი, რომელშიც ერთი და იგივე ნივთის ორი ასლი ვერასდროს მოხვდება — თუ უკვე შიგნითაა, მეორედ ჩადებას აზრი არ აქვს. სწორედ ასეთია Set: ის ავტომატურად შლის დუბლიკატებს და ინახავს მხოლოდ უნიკალურ მნიშვნელობებს. სიმბოლურად Set იწერება ფიგურულ ფრჩხილებში: `colors = {"წითელი", "ლურჯი", "წითელი"}` სინამდვილეში მხოლოდ ორ ელემენტს შეინახავს.'},{heading:"რატომ გვჭირდება ეს ორივე?",text:'სია გამოსადეგია, როცა გვინდა თანმიმდევრობის შენარჩუნება და ცვლილებების საშუალება. Tuple გამოსადეგია, როცა გვინდა მონაცემები დაცული, უცვლელი იყოს. Set კი გამოსადეგია, როცა მთავარია მხოლოდ "რა არსებობს" და არა თანმიმდევრობა ან გამეორება — მაგალითად, "რომელი ასოები გამოვიყენე ამ სიტყვაში?"'}],codeExamples:[{title:"Tuple — შექმნა და უცვლელობა",code:`point = (10, 20)
print("x კოორდინატი:", point[0])
print("y კოორდინატი:", point[1])

# სცადე ცვლილება — მიიღებ შეცდომას!
point[0] = 99`},{title:"Set — დუბლიკატების ავტომატური მოცილება",code:`fruits_bought = ["ვაშლი", "ბანანი", "ვაშლი", "მანდარინი", "ბანანი"]
unique_fruits = set(fruits_bought)

print("ნაყიდი ხილის სია:", fruits_bought)
print("რამდენი ცალი ხილი:", len(fruits_bought))
print("უნიკალური ხილის სახეობები:", unique_fruits)
print("რამდენი სახეობა:", len(unique_fruits))`}],exercises:[{level:"Easy",title:"შენი Tuple",prompt:"შექმენი tuple სახელად my_size სამი რიცხვით (მაგ. სამი განზომილება — სიგრძე, სიგანე, სიმაღლე) და დაბეჭდე თითოეული ინდექსით.",starter:`# შექმენი tuple აქ
`},{level:"Medium",title:"რამდენი უნიკალური ასო?",prompt:"გამოიყენე set(), რომ გაარკვიო, რამდენი უნიკალური ასო გამოიყენება word ცვლადის სიტყვაში (გახსოვდეს, set(სტრიქონი) სტრიქონსაც შეუძლია ასოებად დაშალოს).",starter:`word = "programming"
# გამოიყენე set() და len()
`},{level:"Challenge",title:"ორი კლასის საერთო მოსწავლეები",prompt:"გქონდა ორი სია — class_a და class_b. გადააკეთე ორივე set()-ად და გამოიყენე `&` ოპერატორი (გადაკვეთა), რომ იპოვო, ვინც ორივე კლასშია ერთდროულად. დაბეჭდე შედეგი.",starter:`class_a = ["ანა", "გიგა", "ნინო", "ლუკა"]
class_b = ["ნინო", "დათო", "ლუკა", "მარი"]

set_a = set(class_a)
set_b = set(class_b)

# გამოიყენე & ოპერატორი გადაკვეთის საპოვნელად
common_students = set_a  # შეასწორე ეს ხაზი
print("ორივე კლასშია:", common_students)
`}],quiz:[{question:"რა განსხვავებაა tuple-სა და list-ს შორის?",options:["Tuple-ს ინდექსი არ აქვს","Tuple უცვლელია (immutable), list კი შეიძლება შეიცვალოს","ისინი სრულიად იდენტურია","List მხოლოდ რიცხვებს იტევს, tuple — ტექსტს"],correctIndex:1},{question:"რას დააბრუნებს set([1, 2, 2, 3, 3, 3])?",options:["{1, 2, 2, 3, 3, 3}","{1, 2, 3}","[1, 2, 3]","Error"],correctIndex:1},{question:"რომელი ფრჩხილებით იწერება tuple?",options:["კვადრატული []","ფიგურული {}","მრგვალი ()","კუთხოვანი <>"],correctIndex:2}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'შექმენი ორი სია ორი განსხვავებული სპორტსმენის სპორტის სახეობებით (მაგ. sports_1 = ["ფეხბურთი", "კალათბურთი", "ცურვა"] და sports_2 = ["ჩოგბურთი", "კალათბურთი", "სირბილი"]). Set-ებად გადაქცევისა და `|` ოპერატორის (გაერთიანება) გამოყენებით იპოვე ყველა უნიკალური სპორტის სახეობა, რასაც ერთად თუ ცალ-ცალკე მოიცავენ.'}},Lp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'ლექსიკონი როგორც "ნამდვილი ლექსიკონი" — სიტყვა (გასაღები) და მისი განმარტება (მნიშვნელობა).'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"ლექსიკონის შექმნა, გასაღებით წვდომა, ახალი წყვილის დამატება და განახლება."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"ნამდვილი ლექსიკონი, მაგრამ კოდში",text:'გახსოვს ქაღალდის ლექსიკონი? სიტყვას ეძებ ("apple") და გვერდით მისი განმარტება წერია ("ვაშლი"). Python-ის ლექსიკონიც (dict) ზუსტად ასე მუშაობს — მაგრამ სიტყვის ნაცვლად ნებისმიერი "გასაღები" (key) შეიძლება იყოს, და განმარტების ნაცვლად — ნებისმიერი "მნიშვნელობა" (value). განსხვავებით სიისგან, სადაც ელემენტებს ინდექსით ვპოულობთ (0, 1, 2...), ლექსიკონში ელემენტებს სახელით ვპოულობთ.'},{heading:"ლექსიკონის შექმნა",text:'ლექსიკონი იწერება ფიგურულ ფრჩხილებში, გასაღები-მნიშვნელობის წყვილებით, ორწერტილით გამოყოფილი: `student = {"name": "ნინო", "age": 13, "grade": "VII"}`. თითოეული წყვილი მძიმით არის გამოყოფილი მომდევნოსგან.'},{heading:"მნიშვნელობის წვდომა და დამატება",text:'მნიშვნელობის ასაღებად ვწერთ `student["name"]` — გასაღები კვადრატულ ფრჩხილებში. ახალი წყვილის დასამატებლად უბრალოდ ვწერთ `student["school"] = "N5 სკოლა"` — თუ ეს გასაღები არ არსებობდა, ის შეიქმნება; თუ არსებობდა, მისი მნიშვნელობა განახლდება.'},{heading:"ლექსიკონი vs სია — როდის რომელი?",text:'სია გამოსადეგია, როცა მთავარია თანმიმდევრობა და ელემენტების "ნომრები" (პირველი, მეორე, მესამე). ლექსიკონი გამოსადეგია, როცა მთავარია დასახელებული თვისებები — მაგალითად, ერთი ობიექტის (მოსწავლის, პროდუქტის, პერსონაჟის) სხვადასხვა მახასიათებელი ერთად რომ შევინახოთ.'}],codeExamples:[{title:"ლექსიკონის შექმნა და წვდომა",code:`student = {"name": "ნინო", "age": 13, "grade": "VII"}

print("სახელი:", student["name"])
print("ასაკი:", student["age"])
print("სრული ინფორმაცია:", student)`},{title:"ახალი წყვილის დამატება და განახლება",code:`game_character = {"name": "მეომარი", "health": 100}
print("თავიდან:", game_character)

game_character["level"] = 1  # ახალი გასაღების დამატება
game_character["health"] = 80  # არსებული გასაღების განახლება

print("ცვლილების შემდეგ:", game_character)`}],exercises:[{level:"Easy",title:"შენი საყვარელი ცხოველის ბარათი",prompt:'შექმენი ლექსიკონი pet, გასაღებებით: "name", "type", "age". დაბეჭდე თითოეული მნიშვნელობა ცალ-ცალკე.',starter:`# შექმენი ლექსიკონი აქ
`},{level:"Medium",title:"პროდუქტის ინფორმაციის განახლება",prompt:'გქონდა product ლექსიკონი. განაახლე "price" 15-დან 12-ზე (ფასდაკლება), დაამატე ახალი გასაღები "in_stock" მნიშვნელობით True, და დაბეჭდე მთელი ლექსიკონი ცვლილებების შემდეგ.',starter:`product = {"name": "რვეული", "price": 15}
# განაახლე price

# დაამატე in_stock

print(product)
`},{level:"Challenge",title:"მოსწავლის სრული პროფილი",prompt:"შექმენი ლექსიკონი student ხუთი გასაღებით (name, age, favorite_subject, grades — ეს იყოს სია რიცხვებისგან, is_active — bool). გამოთვალე grades სიის საშუალო (sum() და len()-ის გამოყენებით) და დაბეჭდე ერთი ლამაზი წინადადება, სადაც ყველა ინფორმაცია ერთად იქნება.",starter:`student = {
    "name": "ლუკა",
    "age": 14,
    "favorite_subject": "ინფორმატიკა",
    "grades": [85, 92, 78, 95],
    "is_active": True
}

# გამოთვალე საშუალო ნიშანი და დაბეჭდე პროფილი
`}],quiz:[{question:'როგორ ვწვდებით ლექსიკონში "age" გასაღების მნიშვნელობას?',options:["student.age","student[0]",'student["age"]',"student(age)"],correctIndex:2},{question:'რა მოხდება, თუ ავღწერთ student["city"] = "თბილისი", როცა "city" გასაღები ჯერ არ არსებობდა?',options:["შეცდომას მივიღებთ",'ახალი გასაღები "city" შეიქმნება',"ლექსიკონი მთლიანად წაიშლება","არაფერი მოხდება"],correctIndex:1},{question:"რა განსხვავებაა სიასა და ლექსიკონს შორის?",options:["სია ელემენტებს ინდექსით ინახავს, ლექსიკონი — დასახელებული გასაღებებით","ლექსიკონს ვერასდროს ვცვლით","სია მხოლოდ ტექსტს იტევს","არანაირი განსხვავება არ არის"],correctIndex:0}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'შექმენი ლექსიკონი menu, სადაც გასაღებები არის კერძების სახელები, მნიშვნელობები კი — ფასები (მაგ. {"პიცა": 15, "სალათი": 8, "ლიმონათი": 4}). დაწერე for ციკლი `for dish in menu:`, რომელიც გაივლის ყველა გასაღებს და დაბეჭდავს ყოველ კერძს მისი ფასით — "პიცა: 15 ლარი" ფორმატით.'}},Ip={agenda:[{time:"00:00 – 00:15",title:"შეჯამება",desc:"სწრაფი გახსენება: სიები, tuple/set, ლექსიკონები — და როგორ ვაერთიანებთ მათ ერთმანეთში (სია ლექსიკონებისგან!)."},{time:"00:15 – 00:35",title:"პროექტის კოდი და დემო",desc:'ვაწყობთ "მოსწავლეთა ჟურნალს" — სია, სადაც თითოეული ელემენტი ცალკე მოსწავლის ლექსიკონია.'},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"თავად ვაფართოებთ ჟურნალს + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რას გავიმეორებთ დღეს?",text:'ბოლო ოთხ შეხვედრაზე ვისწავლეთ სიები (append, sort, slicing), tuple და set, და ლექსიკონები (გასაღები-მნიშვნელობა). დღეს ვხედავთ ამ ხელსაწყოების ნამდვილ ძალას — რას ვშვებთ, როცა მათ ერთმანეთში ვაერთიანებთ. ეს არის შენი მესამე "ნამდვილი" პროექტი!'},{heading:"პროექტი: მოსწავლეთა ჟურნალი",text:'რეალურ სკოლის ჟურნალში თითო მოსწავლეს ბევრი თვისება აქვს — სახელი, ნიშნები, დასწრება. თითო მოსწავლის აღსაწერად ლექსიკონი გამოგვადგება, ხოლო ბევრი მოსწავლის ერთად შესანახად — სია, რომლის თითოეული ელემენტიც ცალკე ლექსიკონია. ამას ჰქვია "სია ლექსიკონებისგან" — ერთ-ერთი ყველაზე გავრცელებული სტრუქტურა რეალურ პროგრამირებაში.'}],codeExamples:[{title:"ნაბიჯი 1: ერთი მოსწავლის ლექსიკონი",code:`student1 = {"name": "ნინო", "grades": [90, 85, 95]}
average1 = sum(student1["grades"]) / len(student1["grades"])
print(student1["name"], "- საშუალო ნიშანი:", average1)`},{title:"ნაბიჯი 2: სია ლექსიკონებისგან — მთელი ჟურნალი",code:`journal = [
    {"name": "ნინო", "grades": [90, 85, 95]},
    {"name": "გიგა", "grades": [70, 65, 80]},
    {"name": "ლუკა", "grades": [100, 95, 98]},
]

for student in journal:
    average = sum(student["grades"]) / len(student["grades"])
    print(student["name"], "- საშუალო ნიშანი:", round(average, 1))`}],exercises:[{level:"Easy",title:"დაამატე ახალი მოსწავლე",prompt:"დაამატე journal სიაში append()-ის გამოყენებით ახალი მოსწავლის ლექსიკონი (სახელი და 3 ნიშანი), შემდეგ for ციკლით დაბეჭდე ყველა მოსწავლის სახელი და საშუალო ნიშანი.",starter:`journal = [
    {"name": "ანა", "grades": [88, 92, 79]},
    {"name": "დათო", "grades": [65, 70, 68]},
]

# დაამატე ახალი მოსწავლის ლექსიკონი append()-ით

for student in journal:
    average = sum(student["grades"]) / len(student["grades"])
    print(student["name"], "- საშუალო ნიშანი:", round(average, 1))
`},{level:"Medium",title:"ვინ არის საუკეთესო მოსწავლე?",prompt:'დაწერე for ციკლი, რომელიც journal-ში იპოვის მოსწავლეს ყველაზე მაღალი საშუალო ნიშნით და ბოლოს დაბეჭდავს "საუკეთესო მოსწავლეა: [სახელი], საშუალო ნიშანი: [X]".',starter:`journal = [
    {"name": "მარი", "grades": [75, 80, 70]},
    {"name": "სანდრო", "grades": [95, 98, 92]},
    {"name": "თამარ", "grades": [88, 85, 90]},
]

best_name = ""
best_average = 0

for student in journal:
    average = sum(student["grades"]) / len(student["grades"])
    if average > best_average:
        best_average = average
        best_name = student["name"]

print("საუკეთესო მოსწავლეა:", best_name, ", საშუალო ნიშანი:", round(best_average, 1))
`},{level:"Challenge",title:"ვისაც დახმარება სჭირდება?",prompt:'დაწერე for ციკლი, რომელიც journal-ს გაივლის და ცალკე სიაში (needs_help) დაამატებს იმ მოსწავლეთა სახელებს, ვისი საშუალო ნიშანიც 70-ზე დაბალია. ბოლოს დაბეჭდე ეს სია — თუ ცარიელია, დაბეჭდე "ყველას კარგად უდგება!".',starter:`journal = [
    {"name": "გვანცა", "grades": [55, 60, 65]},
    {"name": "ბექა", "grades": [90, 88, 92]},
    {"name": "ელენე", "grades": [50, 45, 60]},
]

needs_help = []

for student in journal:
    average = sum(student["grades"]) / len(student["grades"])
    # თუ average < 70, დაამატე student["name"] needs_help სიაში

if len(needs_help) == 0:
    print("ყველას კარგად უდგება!")
else:
    print("დახმარება სჭირდებათ:", needs_help)
`}],quiz:[{question:"რას წარმოადგენს journal[0] ამ პროექტში?",options:["ერთი ნიშანი","პირველი მოსწავლის სახელი","პირველი მოსწავლის მთელი ლექსიკონი","ცარიელი მნიშვნელობა"],correctIndex:2},{question:"როგორ ვწვდებით პირველი მოსწავლის სახელს journal სიაში?",options:['journal["name"]','journal[0]["name"]',"journal.name[0]","journal[name][0]"],correctIndex:1},{question:'რატომ ვიყენებთ "სია ლექსიკონებისგან" სტრუქტურას ცალკე ცვლადების ნაცვლად?',options:["რადგან ეს ერთადერთი გზაა Python-ში","რომ ბევრი მსგავსი ობიექტი (მაგ. მოსწავლეები) ორგანიზებულად, ერთად შევინახოთ და მათზე ციკლი გავატაროთ","რადგან ლექსიკონები უფრო სწრაფად მუშაობენ","ეს არ არის რეალურად გამოსადეგი, მხოლოდ სასწავლო მაგალითია"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'გააფართოვე journal ისე, რომ თითოეულ მოსწავლეს დაემატოს მეოთხე გასაღები "attendance" (დასწრების პროცენტი, მაგ. 95). დაწერე ერთი for ციკლი, რომელიც ყოველ მოსწავლეზე დაბეჭდავს სრულ პროფილს: სახელი, საშუალო ნიშანი და დასწრება ერთ წინადადებაში.'}},Rp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'ფუნქცია როგორც "მრჩობლადი მანქანა" — ერთხელ ააწყობ, შემდეგ ბევრჯერ იყენებ.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"def-ის სინტაქსი, პარამეტრები, return და ნაგულისხმევი მნიშვნელობები ცოცხალ დემოში."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'ფუნქცია — "მრჩობლადი მანქანა"',text:'იფიქრე ფუნქციაზე როგორც ტკბილეულის ავტომატზე: ერთხელ დააპროგრამებ (რას გააკეთოს, როცა ღილაკს დააჭერენ), შემდეგ კი უბრალოდ ღილაკს აჭერ — ყოველ ჯერზე ხელახლა აწყობა აღარ გჭირდება. ფუნქცია არის კოდის ბლოკი, რომელსაც სახელს ვარქმევთ და შემდეგ შეგვიძლია ის "გამოვიძახოთ" (გავუშვათ) ნებისმიერჯერ, კოდის თავიდან გადაწერის გარეშე.'},{heading:"def — ფუნქციის შექმნა",text:'ახალი ფუნქციის "აწყობა" იწყება `def` სიტყვით, ფუნქციის სახელით და ფრჩხილებით: `def greet():`. ფრჩხილებში შეგვიძლია მივუთითოთ პარამეტრები — ინფორმაცია, რასაც ფუნქცია "მოთხოვს", როცა მას ვიძახებთ. მაგალითად `def greet(name):` ნიშნავს, რომ ფუნქციას სახელი უნდა გადავცეთ, როცა ვიძახებთ.'},{heading:'return — ფუნქციის "პასუხი"',text:'`return` აბრუნებს მნიშვნელობას ფუნქციიდან უკან, იმ ადგილას, სადაც ფუნქცია გამოვიძახეთ — ზუსტად ისე, როგორც ტკბილეულის ავტომატი გვაძლევს შოკოლადს ღილაკზე დაჭერის შემდეგ. ფუნქცია, რომელსაც return არ აქვს, ავტომატურად აბრუნებს `None`-ს — "არაფერს".'},{heading:"ნაგულისხმევი მნიშვნელობები (Default values)",text:'ზოგჯერ გვინდა, პარამეტრს ჰქონდეს "ჩვეულებრივი" მნიშვნელობა, თუ სხვა არაფერი მივუთითეთ. ეს იწერება ასე: `def greet(name="მეგობარო"):`. თუ ფუნქციას ვიძახებთ პარამეტრის გარეშე (`greet()`), ის გამოიყენებს "მეგობარო"-ს; თუ პარამეტრს მივუთითებთ (`greet("ნინო")`), ეს ჩანაცვლდება.'}],codeExamples:[{title:"პირველი ფუნქცია — def და return",code:`def add_numbers(a, b):
    result = a + b
    return result

sum1 = add_numbers(5, 3)
sum2 = add_numbers(10, 20)
print(sum1)
print(sum2)`},{title:"ნაგულისხმევი მნიშვნელობა",code:`def greet(name="მეგობარო"):
    return "გამარჯობა, " + name + "!"

print(greet())
print(greet("ნინო"))
print(greet("გიორგი"))`}],exercises:[{level:"Easy",title:"მარტივი გამრავლების ფუნქცია",prompt:"დაწერე ფუნქცია multiply(a, b), რომელიც აბრუნებს ორი რიცხვის ნამრავლს. გამოიძახე ის ორი განსხვავებული წყვილი რიცხვით და დაბეჭდე შედეგები.",starter:`# დაწერე multiply ფუნქცია აქ


# გამოიძახე ის ორჯერ
`},{level:"Medium",title:"კვადრატის ფართობის გამომთვლელი",prompt:"დაწერე ფუნქცია square_area(side), რომელიც აბრუნებს კვადრატის ფართობს (side * side). დაწერე მეორე ფუნქცია square_perimeter(side), რომელიც აბრუნებს კვადრატის პერიმეტრს (side * 4). გამოიძახე ორივე side=6-ისთვის და დაბეჭდე შედეგები.",starter:`# დაწერე square_area ფუნქცია


# დაწერე square_perimeter ფუნქცია


# გამოიძახე ორივე side=6-ისთვის
`},{level:"Challenge",title:"შეფასების გამომთვლელი ნაგულისხმევით",prompt:'დაწერე ფუნქცია calculate_grade(score, passing_score=60), რომელიც აბრუნებს "ჩაბარებულია", თუ score >= passing_score, სხვაგვარად — "ჩაიჭრა". გამოიძახე ის სამჯერ: ერთხელ ნაგულისხმევი passing_score-ით, ერთხელ სხვა score-ით, და ერთხელ სხვა passing_score-ითაც (მაგ. 50).',starter:`# დაწერე calculate_grade ფუნქცია ნაგულისხმევი პარამეტრით


# გამოიძახე სამი განსხვავებული ვარიანტით და დაბეჭდე შედეგები
`}],quiz:[{question:"რას აბრუნებს ფუნქცია, რომელსაც return საერთოდ არ აქვს?",options:["0",'""',"None","შეცდომას"],correctIndex:2},{question:'def greet(name="მეგობარო"): ... — რა მოხდება, თუ დავიძახებთ greet() პარამეტრის გარეშე?',options:["შეცდომას გამოიტანს",'გამოიყენებს "მეგობარო"-ს ნაგულისხმევად',"name ცვლადი None გახდება","ფუნქცია არაფერს გააკეთებს"],correctIndex:1},{question:"რა არის def-ის მთავარი დანიშნულება?",options:["ცვლადის შექმნა","ახალი ფუნქციის განსაზღვრა, რომლის ხელახლა გამოძახებაც შესაძლებელია","ციკლის დაწყება","ფაილის გახსნა"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'დაწერე ფუნქცია is_even(number), რომელიც აბრუნებს True-ს, თუ რიცხვი ლუწია, და False-ს — თუ კენტი (გამოიყენე % ოპერატორი). შემდეგ დაწერე for ციკლი, რომელიც 1-დან 10-მდე ყოველ რიცხვზე გამოიძახებს ამ ფუნქციას და დაბეჭდავს "X არის ლუწი" ან "X არის კენტი".'}},Op={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'Scope როგორც "ოთახების" სისტემა — რომელ ცვლადს სად ვხედავთ. Lambda როგორც "ერთხაზიანი ფუნქცია".'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"ლოკალური და გლობალური ცვლადების ცოცხალი დემო + lambda ფუნქციის მოკლე სინტაქსი."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'Scope — "ვინ ვის ხედავს?"',text:'წარმოიდგინე სახლი ბევრი ოთახით. სახლის დერეფანში (გლობალურ სივრცეში) დადებული ნივთი ყველა ოთახიდან ჩანს. მაგრამ თუ რაღაც კონკრეტულ ოთახში (ფუნქციის შიგნით) დადე, ის მხოლოდ იმ ოთახშია ხილული — გარეთ გასვლისას ქრება. ამას ჰქვია Scope (მოქმედების არეალი) — სად "ჩანს" ცვლადი კოდში.'},{heading:"ლოკალური vs გლობალური ცვლადები",text:'ცვლადი, რომელიც ფუნქციის შიგნით შეიქმნა, ეწოდება ლოკალური — ის მხოლოდ იმ ფუნქციის "ოთახში" არსებობს და ფუნქციის დასრულების შემდეგ ქრება. ცვლადი, რომელიც ფუნქციების გარეთ, კოდის "მთავარ დონეზეა" შექმნილი, ეწოდება გლობალური — ის ყველა ფუნქციიდან ჩანს (წაკითხვისთვის), მაგრამ ფუნქციის შიგნიდან მისი შეცვლა სპეციალურ სიტყვას (`global`) მოითხოვს.'},{heading:'lambda — "ერთხაზიანი ფუნქცია"',text:"ზოგჯერ გვჭირდება ძალიან მოკლე, მარტივი ფუნქცია, def-ის მთელი სინტაქსის დაწერის გარეშე. Lambda არის სწორედ ეს — ანონიმური (უსახელო) ფუნქცია, ერთ ხაზზე: `square = lambda x: x * x`. ეს ტოლფასია სამხაზიანი def-ის, მაგრამ გაცილებით მოკლეა მარტივი ოპერაციებისთვის."},{heading:"როდის ვიყენებთ lambda-ს?",text:"lambda ყველაზე ხშირად გამოიყენება მაშინ, როცა ფუნქცია მხოლოდ ერთხელ, სწრაფად გვჭირდება — მაგალითად, სიის დასალაგებლად კონკრეტული წესით (`sorted(list, key=lambda x: x[1])`). თუ ფუნქცია რთულია ან რამდენჯერმე გამოგვადგება, def უკეთესი არჩევანია."}],codeExamples:[{title:"ლოკალური vs გლობალური ცვლადი",code:`message = "გლობალური ცვლადი"  # ეს ყველგან ჩანს

def show_message():
    local_note = "ლოკალური ცვლადი"  # ეს მხოლოდ ფუნქციის შიგნით არსებობს
    print(message)       # გლობალურის წაკითხვა შესაძლებელია
    print(local_note)

show_message()
print(message)
# print(local_note)  # ეს ხაზი შეცდომას გამოიტანს — local_note გარეთ არ ჩანს!`},{title:"lambda ფუნქცია — def-თან შედარებით",code:`def square_def(x):
    return x * x

square_lambda = lambda x: x * x

print(square_def(5))
print(square_lambda(5))

# lambda ხშირად გამოიყენება სორტირებისთვის
students = [("ნინო", 90), ("გიგა", 75), ("ლუკა", 95)]
students.sort(key=lambda student: student[1])
print(students)`}],exercises:[{level:"Easy",title:"იპოვე Scope-ის შეცდომა",prompt:"ამ კოდს აქვს შეცდომა — ცდილობს გამოიყენოს ლოკალური ცვლადი ფუნქციის გარეთ. იპოვე პრობლემა და გაასწორე ის (მაგ. მნიშვნელობის დაბრუნებით return-ით).",starter:`def calculate():
    result = 10 * 5

print(result)  # ეს ხაზი შეცდომას გამოიტანს
`},{level:"Medium",title:"lambda სამი ვერსიით",prompt:"დაწერე სამი lambda ფუნქცია: ერთი აბრუნებს რიცხვის კუბს (x**3), მეორე ამოწმებს არის თუ არა რიცხვი დადებითი (True/False), მესამე კი ორ რიცხვს კრებს. გამოიძახე თითოეული და დაბეჭდე შედეგები.",starter:`cube = None  # ჩაანაცვლე lambda-თი
is_positive = None  # ჩაანაცვლე lambda-თი
add = None  # ჩაანაცვლე lambda-თი

print(cube(3))
print(is_positive(-5))
print(add(4, 6))
`},{level:"Challenge",title:"დალაგება lambda-ს გამოყენებით",prompt:"გქონდა products სია tuple-ებისგან (სახელი, ფასი). გამოიყენე sort() მეთოდი lambda key-სთან ერთად, რომ დაალაგო products ფასის მიხედვით ზრდადობით, შემდეგ — კლებადობით.",starter:`products = [("რვეული", 5), ("კალამი", 2), ("ჩანთა", 45), ("წიგნი", 20)]

# დაალაგე ფასის მიხედვით ზრდადობით (lambda key-ით)

print("იაფიდან ძვირისკენ:", products)

# დაალაგე ფასის მიხედვით კლებადობით

print("ძვირიდან იაფისკენ:", products)
`}],quiz:[{question:"რას ეწოდება ცვლადი, რომელიც def-ის შიგნით არის შექმნილი?",options:["გლობალური","საჯარო","ლოკალური","მუდმივი"],correctIndex:2},{question:"რომელი lambda ტოლფასია ამ ფუნქციისა: def double(x): return x * 2 ?",options:["lambda x: x * 2","lambda x = x * 2","def lambda(x): x * 2","lambda: x * 2"],correctIndex:0},{question:"რატომ ვერ ვხედავთ ფუნქციაში შექმნილ ცვლადს ფუნქციის გარეთ?",options:["ეს Python-ის ბაგია",'რადგან ის ლოკალურია — მხოლოდ იმ ფუნქციის "ოთახში" არსებობს',"რადგან ცვლადის სახელი დავიწყებულია","ეს არასდროს ხდება — ყოველთვის ჩანს"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'შექმენი სია 6 tuple-ისგან (მოსწავლის სახელი, ასაკი). lambda-ს გამოყენებით დაალაგე ისინი ასაკის მიხედვით ზრდადობით, შემდეგ დაწერე ცალკე ერთხაზიანი lambda ფუნქცია, რომელიც ამოწმებს, არის თუ არა მოსწავლე "მოზარდი" (13-17 წლამდე) და გამოიყენე ის სიის ყველა მოსწავლეზე for ციკლით.'}},Fp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'map, filter, reduce როგორც "ქარხნის კონვეიერი"; *args და **kwargs როგორც "უსასრულო ჩანთა".'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"map(), filter(), reduce() lambda-სთან ერთად + ფუნქცია ცვალებადი რაოდენობის არგუმენტებით."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'map — "ყველას გარდაქმნა"',text:"წარმოიდგინე ქარხნის კონვეიერი, რომელზეც ვაშლები მოდის და ყოველ ვაშლს ვხატავთ წითლად. `map(ფუნქცია, სია)` ზუსტად ამას აკეთებს — იღებს ფუნქციას და ყოველ ელემენტზე ცალ-ცალკე იყენებს მას, შედეგად კი ახალ კრებულს აბრუნებს. მაგალითად, `map(lambda x: x * 2, [1, 2, 3])` ყველა რიცხვს გააორმაგებს. შენიშვნა: map() აბრუნებს სპეციალურ ობიექტს, ამიტომ მის დასაბეჭდად ვაქცევთ სიად — `list(map(...))`."},{heading:'filter — "მხოლოდ შესაფერისების არჩევა"',text:'`filter(ფუნქცია, სია)` მუშაობს როგორც სახარისხო ბადე — ყოველ ელემენტს ფუნქციას "ვაჩვენებთ" და თუ ფუნქცია True-ს დააბრუნებს, ელემენტი რჩება; თუ False-ს — გაუშვებთ. მაგალითად, `filter(lambda x: x % 2 == 0, numbers)` დატოვებს მხოლოდ ლუწ რიცხვებს. ესეც ობიექტს აბრუნებს, ამიტომ `list(filter(...))` გვჭირდება.'},{heading:'reduce — "ყველაფრის ერთად შეკრება"',text:'`reduce(ფუნქცია, სია)` გადის სიაში და ელემენტებს ერთ საბოლოო მნიშვნელობამდე "ამცირებს" — მაგალითად, ყველა რიცხვის ჯამამდე ან ნამრავლამდე. reduce ცალკე უნდა შემოვიტანოთ: `from functools import reduce`. მაგალითად, `reduce(lambda a, b: a * b, [1, 2, 3, 4])` გამოთვლის 1*2*3*4 = 24-ს.'},{heading:'*args და **kwargs — "უსასრულო ჩანთა"',text:'ზოგჯერ არ ვიცით, რამდენ არგუმენტს გადმოგვცემენ ფუნქციას. `*args` ყველა დამატებით ჩვეულებრივ არგუმენტს ერთ tuple-ში აგროვებს, ხოლო `**kwargs` — დასახელებულ არგუმენტებს (`name="ნინო"`) ერთ ლექსიკონში. ეს ორივე ჩანთასავითაა: რამდენიც არ უნდა ჩადო, ყველაფერი ეტევა.'}],codeExamples:[{title:"map, filter და reduce ერთად",code:`from functools import reduce

numbers = [1, 2, 3, 4, 5, 6]

doubled = list(map(lambda x: x * 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
total = reduce(lambda a, b: a + b, numbers)

print("გაორმაგებული:", doubled)
print("ლუწები:", evens)
print("ჯამი:", total)`},{title:"*args და **kwargs",code:`def sum_all(*args):
    total = 0
    for number in args:
        total = total + number
    return total

print(sum_all(1, 2, 3))
print(sum_all(10, 20, 30, 40, 50))

def show_profile(**kwargs):
    for key, value in kwargs.items():
        print(key, "->", value)

show_profile(name="ნინო", age=13, city="თბილისი")`}],exercises:[{level:"Easy",title:"map-ით გადაყვანა",prompt:"გქონდა ტემპერატურების სია ცელსიუსში. გამოიყენე map() და lambda, რომ ყველა გადაიყვანო ფარენჰეიტში ფორმულით: C * 9 / 5 + 32. დაბეჭდე შედეგი სიის სახით.",starter:`celsius = [0, 10, 20, 30, 40]
# გამოიყენე list(map(lambda ..., celsius))
`},{level:"Medium",title:"filter და reduce ერთად",prompt:"გქონდა რიცხვების სია. ჯერ filter()-ით დატოვე მხოლოდ 10-ზე მეტი რიცხვები, შემდეგ reduce()-ით გამოთვალე ამ დარჩენილი რიცხვების ჯამი. დაბეჭდე ორივე შედეგი.",starter:`from functools import reduce

numbers = [5, 12, 8, 20, 3, 15, 30]
# 1) filter-ით დატოვე მხოლოდ > 10

# 2) reduce-ით დაჯამე დარჩენილები
`},{level:"Challenge",title:"საშუალოს გამომთვლელი *args-ით",prompt:"დაწერე ფუნქცია average(*args), რომელიც ნებისმიერი რაოდენობის რიცხვის საშუალოს გამოთვლის და აბრუნებს. გამოიძახე ის სამჯერ განსხვავებული რაოდენობის არგუმენტებით (მაგ. 2, 4 და 6 რიცხვით).",starter:`# დაწერე average ფუნქცია *args-ით


# გამოიძახე სამჯერ განსხვავებული რაოდენობის რიცხვებით
`}],quiz:[{question:"რას აკეთებს map(lambda x: x + 1, [1, 2, 3])?",options:["ჯამავს ელემენტებს","ყოველ ელემენტს უმატებს 1-ს","ტოვებს მხოლოდ ლუწებს","შლის პირველ ელემენტს"],correctIndex:1},{question:"რას აგროვებს *args ფუნქციის შიგნით?",options:["ყველა დასახელებულ არგუმენტს ლექსიკონში","ყველა დამატებით არგუმენტს tuple-ში","მხოლოდ პირველ არგუმენტს","არაფერს"],correctIndex:1},{question:"რა უნდა მოვახდინოთ, რომ reduce() გამოვიყენოთ?",options:["არაფერი — ის ჩაშენებულია","from functools import reduce","import map","def reduce():"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:"გქონდა სია რიცხვების. ერთი ჯაჭვით (ან სამი ცალკე ხაზით) გააკეთე შემდეგი: ჯერ filter()-ით დატოვე მხოლოდ დადებითი რიცხვები, შემდეგ map()-ით აიყვანე ისინი კვადრატში, ბოლოს კი reduce()-ით დაჯამე ყველა კვადრატი. სცადე სია [-3, 4, -1, 5, 2]."}},Dp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'სტრიქონი როგორც "ასოების მძივი" — ინდექსაცია, სიგრძე და ტექსტის გარდაქმნის ხელსაწყოები.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"upper/lower, split, replace, strip და f-string ფორმატირების ცოცხალი დემო."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'სტრიქონი — "ასოების მძივი"',text:"სტრიქონი (str) არის სიმბოლოების თანმიმდევრობა, თითქოს ასოებისგან შემდგარი მძივი. სიის მსგავსად, სტრიქონის თითოეულ სიმბოლოსაც აქვს ინდექსი (`word[0]` პირველი ასოა) და შეგვიძლია slicing-იც (`word[1:4]`). განსხვავება ისაა, რომ სტრიქონი უცვლელია — ერთხელ შექმნილს ცალკეულ ასოს ვერ შევუცვლით, მხოლოდ ახალ სტრიქონს ვქმნით."},{heading:"სტრიქონის მეთოდები — ტექსტის გარდაქმნის ხელსაწყოები",text:'`upper()` ყველა ასოს დიდად აქცევს, `lower()` — პატარად, `strip()` აშორებს ზედმეტ ჰარებს დასაწყისსა და ბოლოში, `replace("ძველი", "ახალი")` ცვლის ტექსტის ნაწილს, ხოლო `split()` ტექსტს სიად შლის ცალკეულ სიტყვებად (ჰარის მიხედვით, ან სხვა გამყოფით: `split(",")`). შენიშვნა: ეს მეთოდები ახალ სტრიქონს აბრუნებენ — ორიგინალი არ იცვლება.'},{heading:"f-string — ტექსტში ცვლადების ჩასმის ყველაზე მოსახერხებელი გზა",text:'წარმოიდგინე საჩუქრის ბარათი, სადაც "ძვირფასო ___" და სახელს მერე ვწერთ. f-string ზუსტად ასე მუშაობს: სტრიქონის წინ ვწერთ `f` ასოს, ხოლო ცვლადს ვათავსებთ ფიგურულ ფრჩხილებში: `f"გამარჯობა, {name}! შენ {age} წლის ხარ."`. Python ავტომატურად ჩასვამს ცვლადების მნიშვნელობებს — აღარ გვჭირდება `+` და `str()`.'},{heading:"სტრიქონის შემოწმება — in ოპერატორი და len()",text:'`len(text)` გვეუბნება, რამდენი სიმბოლოა სტრიქონში (ჰარებიც ითვლება). `"ა" in text` კი ამოწმებს, შეიცავს თუ არა ტექსტი კონკრეტულ ასოს ან სიტყვას — პასუხად True ან False-ს გვაძლევს.'}],codeExamples:[{title:"სტრიქონის მეთოდები",code:`text = "   Python is Fun   "

print(text.strip())
print(text.upper())
print(text.lower())
print(text.replace("Fun", "Awesome"))

words = "ვაშლი,ბანანი,მანდარინი".split(",")
print(words)
print(len("Python"))
print("th" in "Python")`},{title:"f-string ფორმატირება",code:`name = "ნინო"
age = 13
score = 95.5

print(f"გამარჯობა, {name}!")
print(f"{name} არის {age} წლის და მიიღო {score} ქულა.")
print(f"ორი წლის შემდეგ {name} იქნება {age + 2} წლის.")`}],exercises:[{level:"Easy",title:"სახელის გარდაქმნა",prompt:"გქონდა სახელი ცვლადში. დაბეჭდე ის დიდი ასოებით (upper) და პატარა ასოებით (lower), შემდეგ ცალკე დაბეჭდე მისი სიგრძე len()-ით.",starter:`name = "Giorgi"
# დაბეჭდე upper, lower და სიგრძე
`},{level:"Medium",title:"წინადადების დაშლა და შეცვლა",prompt:'გამოიყენე split(), რომ დაშალო sentence სიტყვებად და დაბეჭდე რამდენი სიტყვაა. შემდეგ replace()-ით შეცვალე "კატა" სიტყვა "ძაღლ"-ით და დაბეჭდე ახალი წინადადება.',starter:`sentence = "ჩემი კატა ძალიან მოსიყვარულეა"
# დაშალე სიტყვებად და დათვალე

# შეცვალე კატა → ძაღლი
`},{level:"Challenge",title:"ვიზიტბარათი f-string-ით",prompt:'გქონდა ცვლადები name, profession, city და experience_years. გამოიყენე f-string, რომ დაბეჭდო ერთი ლამაზი წინადადება: "[name] არის [profession] [city]-დან და უკვე [experience_years] წელია ამ სფეროში მუშაობს." გარდა ამისა, დაბეჭდე ცალკე ხაზზე იგივე ტექსტი მთლიანად დიდი ასოებით.',starter:`name = "ლუკა"
profession = "პროგრამისტი"
city = "თბილისი"
experience_years = 3

# გამოიყენე f-string აქ
`}],quiz:[{question:'რას დააბრუნებს "Python".upper()?',options:['"python"','"PYTHON"','"Python"',"Error"],correctIndex:1},{question:'რას გააკეთებს "a,b,c".split(",")?',options:['დაბეჭდავს "abc"-ს','დააბრუნებს სიას ["a", "b", "c"]',"წაშლის მძიმეებს და დაუმატებს ჰარებს","შეცდომას გამოიტანს"],correctIndex:1},{question:'რას ნიშნავს f"{name} არის {age} წლის" ჩანაწერში წინ მდგომი f ასო?',options:["ფუნქციას","f-string-ს — ცვლადების პირდაპირ ჩასმის საშუალებას","ფაილს","ფლოატ რიცხვს"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'დაწერე პროგრამა, რომელიც წინადადებაში (მაგ. "Python არის ძალიან საინტერესო ენა") დათვლის: რამდენი სიტყვაა (split + len), რამდენი სიმბოლოა ჰარების ჩათვლით (len) და რომელია ყველაზე გრძელი სიტყვა (for ციკლით სიტყვებზე). შედეგი დაბეჭდე f-string-ით.'}},Up={agenda:[{time:"00:00 – 00:15",title:"შეჯამება",desc:"სწრაფი გახსენება: ფუნქციები (def/return), lambda, *args, სტრიქონები და f-string — ყველაფერი ერთ თამაშში."},{time:"00:15 – 00:35",title:"პროექტის კოდი და დემო",desc:"ვაწყობთ ტექსტურ თავგადასავალს: სცენები ლექსიკონში, play() ფუნქცია და არჩევანები."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"ვამატებთ ახალ სცენებს და ინვენტარს + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რას გავიმეორებთ დღეს?",text:"ბოლო ოთხ შეხვედრაზე ვისწავლეთ ფუნქციები (def, return, პარამეტრები), scope და lambda, map/filter/reduce, *args/**kwargs და სტრიქონებთან მუშაობა f-string-ებით. დღეს ეს ყველაფერი ერთ თამაშში გაერთიანდება — შენ თვითონ ქმნი ისტორიას, რომელშიც მოთამაშე არჩევანს აკეთებს!"},{heading:"პროექტი: ტექსტური თავგადასავალი",text:"ტექსტური თავგადასავალი ძველი, მაგრამ საყვარელი სათამაშო ჟანრია: ეკრანზე ჩანს ისტორიის ერთი სცენა, მოთამაშე ირჩევს რა გააკეთოს და ისტორია შესაბამისად გრძელდება. ჩვენი დიზაინი მარტივია — ყოველი სცენა ლექსიკონია (ტექსტით და არჩევანებით), ყველა სცენა კი ერთ დიდ ლექსიკონში ინახება. play() ფუნქცია ავლის ამ სცენებს არჩევანების მიხედვით. Pyodide-ში ცოცხალი input() არ გვაქვს, ამიტომ არჩევანებს წინასწარ სიაში ვწერთ — ლოგიკა ზუსტად იგივეა."}],codeExamples:[{title:"ნაბიჯი 1: სცენის ჩვენების ფუნქცია",code:`def show_scene(title, text):
    print(f"=== {title.upper()} ===")
    print(text)
    print()

show_scene("ბნელი ტყე", "შენ დგახარ ბნელ ტყეში. წინ ორი ბილიკია.")
show_scene("მღვიმე", "ბილიკმა მღვიმესთან მოგიყვანა.")`},{title:"ნაბიჯი 2: სრული თამაში — სცენები ლექსიკონში",code:`story = {
    "start": {
        "text": "შენ დგახარ ბნელ ტყეში. 1 - მარცხენა ბილიკი, 2 - მარჯვენა ბილიკი.",
        "options": {"1": "cave", "2": "river"},
    },
    "cave": {
        "text": "მღვიმეში საგანძური იპოვე! 🏆 გამარჯვება!",
        "options": {},
    },
    "river": {
        "text": "მდინარესთან დრაკონი გელოდება. 1 - გაიქეცი, 2 - ებრძოლე.",
        "options": {"1": "start", "2": "defeat"},
    },
    "defeat": {
        "text": "დრაკონმა გაჯობა... თამაში დასრულდა. 💀",
        "options": {},
    },
}

def play(choices):
    current = "start"
    step = 0
    while True:
        scene = story[current]
        print(scene["text"])
        if len(scene["options"]) == 0:
            print("--- თამაში დასრულდა ---")
            break
        if step >= len(choices):
            print("(არჩევანები ამოიწურა)")
            break
        choice = choices[step]
        step = step + 1
        print(f"შენი არჩევანი: {choice}")
        if choice in scene["options"]:
            current = scene["options"][choice]
        else:
            print("ასეთი არჩევანი არ არსებობს!")
        print()

play(["2", "1", "1"])`}],exercises:[{level:"Easy",title:"სხვა დასასრულის პოვნა",prompt:"ბოლო ხაზზე play(...) სიაში არჩევანები შეცვალე ისე, რომ თამაში დასრულდეს დრაკონთან დამარცხებით (💀). სცადე რამდენიმე კომბინაცია.",starter:`story = {
    "start": {
        "text": "შენ დგახარ ბნელ ტყეში. 1 - მარცხენა ბილიკი, 2 - მარჯვენა ბილიკი.",
        "options": {"1": "cave", "2": "river"},
    },
    "cave": {
        "text": "მღვიმეში საგანძური იპოვე! 🏆 გამარჯვება!",
        "options": {},
    },
    "river": {
        "text": "მდინარესთან დრაკონი გელოდება. 1 - გაიქეცი, 2 - ებრძოლე.",
        "options": {"1": "start", "2": "defeat"},
    },
    "defeat": {
        "text": "დრაკონმა გაჯობა... თამაში დასრულდა. 💀",
        "options": {},
    },
}

def play(choices):
    current = "start"
    step = 0
    while True:
        scene = story[current]
        print(scene["text"])
        if len(scene["options"]) == 0:
            print("--- თამაში დასრულდა ---")
            break
        if step >= len(choices):
            print("(არჩევანები ამოიწურა)")
            break
        choice = choices[step]
        step = step + 1
        print(f"შენი არჩევანი: {choice}")
        if choice in scene["options"]:
            current = scene["options"][choice]
        else:
            print("ასეთი არჩევანი არ არსებობს!")
        print()

play(["1"])
`},{level:"Medium",title:"დაამატე ახალი სცენა",prompt:'დაამატე story ლექსიკონში ახალი სცენა "lake" (ტბა) ტექსტითა და ორი არჩევანით (მაგ. "1": "cave", "2": "defeat"). შემდეგ "river" სცენაში დაამატე მესამე არჩევანი "3": "lake" და შეცვალე ტექსტი, რომ ეს ვარიანტი ჩანდეს. ბოლოს გაუშვი play([...]) ისე, რომ ახალ სცენაზე გაიარო.',starter:`story = {
    "start": {
        "text": "შენ დგახარ ბნელ ტყეში. 1 - მარცხენა ბილიკი, 2 - მარჯვენა ბილიკი.",
        "options": {"1": "cave", "2": "river"},
    },
    "cave": {
        "text": "მღვიმეში საგანძური იპოვე! 🏆 გამარჯვება!",
        "options": {},
    },
    "river": {
        "text": "მდინარესთან დრაკონი გელოდება. 1 - გაიქეცი, 2 - ებრძოლე.",
        "options": {"1": "start", "2": "defeat"},
    },
    "defeat": {
        "text": "დრაკონმა გაჯობა... თამაში დასრულდა. 💀",
        "options": {},
    },
}

# დაამატე აქ story["lake"] = {...} და შეცვალე story["river"]

def play(choices):
    current = "start"
    step = 0
    while True:
        scene = story[current]
        print(scene["text"])
        if len(scene["options"]) == 0:
            print("--- თამაში დასრულდა ---")
            break
        if step >= len(choices):
            print("(არჩევანები ამოიწურა)")
            break
        choice = choices[step]
        step = step + 1
        print(f"შენი არჩევანი: {choice}")
        if choice in scene["options"]:
            current = scene["options"][choice]
        else:
            print("ასეთი არჩევანი არ არსებობს!")
        print()

play(["2", "1"])
`},{level:"Challenge",title:"ინვენტარი",prompt:'დაამატე მოთამაშეს ინვენტარი: play() ფუნქციის დასაწყისში შექმენი ცარიელი სია inventory. თუ სცენას აქვს "item" გასაღები (მაგ. cave-ს დაუმატე "item": "ოქროს გასაღები"), ჩაწერე ის inventory-ში append()-ით და დაბეჭდე f-string-ით "აიღე: ...". თამაშის ბოლოს დაბეჭდე ინვენტარი ", ".join(inventory)-ით.',starter:`story = {
    "start": {
        "text": "შენ დგახარ ბნელ ტყეში. 1 - მარცხენა ბილიკი, 2 - მარჯვენა ბილიკი.",
        "options": {"1": "cave", "2": "river"},
    },
    "cave": {
        "text": "მღვიმეში საგანძური იპოვე! 🏆 გამარჯვება!",
        "options": {},
    },
    "river": {
        "text": "მდინარესთან დრაკონი გელოდება. 1 - გაიქეცი, 2 - ებრძოლე.",
        "options": {"1": "start", "2": "defeat"},
    },
    "defeat": {
        "text": "დრაკონმა გაჯობა... თამაში დასრულდა. 💀",
        "options": {},
    },
}

def play(choices):
    # შექმენი inventory სია აქ
    current = "start"
    step = 0
    while True:
        scene = story[current]
        print(scene["text"])
        # თუ scene-ს აქვს "item", დაამატე inventory-ში
        if len(scene["options"]) == 0:
            print("--- თამაში დასრულდა ---")
            # დაბეჭდე ინვენტარი
            break
        if step >= len(choices):
            print("(არჩევანები ამოიწურა)")
            break
        choice = choices[step]
        step = step + 1
        print(f"შენი არჩევანი: {choice}")
        if choice in scene["options"]:
            current = scene["options"][choice]
        else:
            print("ასეთი არჩევანი არ არსებობს!")
        print()

play(["1"])
`}],quiz:[{question:"რატომ ვინახავთ სცენებს ლექსიკონში და არა ცალკე ცვლადებში?",options:["რადგან ლექსიკონი უფრო სწრაფია","რომ სცენას სახელით (გასაღებით) ვიპოვოთ და ყველა სცენა ერთ ადგილას გვქონდეს","რადგან Python სხვანაირად არ იმუშავებს","ეს მხოლოდ სილამაზისთვისაა"],correctIndex:1},{question:'რას აკეთებს play() ფუნქციაში ის შემოწმება, რომ choice არის scene["options"]-ში (if choice in ...)?',options:["ამოწმებს, ჩაწერილია თუ არა მოთამაშის არჩევანი ამ სცენის ვარიანტებში","შლის არჩევანს","ბეჭდავს ყველა სცენას","ამთავრებს თამაშს"],correctIndex:0},{question:'რატომ არის საჭირო "step >= len(choices)" შემოწმება while ციკლში?',options:["რომ ციკლი არ გახდეს უსასრულო, როცა არჩევანები ამოიწურება","რომ თამაში უფრო რთული გახდეს","ეს არაფერს ცვლის","რომ სცენები გადაინაცვლოს"],correctIndex:0}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:"შექმენი საკუთარი ისტორია! დაწერე story ლექსიკონი მინიმუმ 5 სცენით (მაგ. კოსმოსური თავგადასავალი, ზღაპრული ტყე ან სკოლის მისტერია), ორი განსხვავებული დასასრულით (კარგი და ცუდი). გამოიყენე play() ფუნქცია და სცადე ორივე დასასრულამდე მისვლა სხვადასხვა არჩევანების სიით."}},Ap={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'მოდული როგორც "ხელსაწყოების ყუთი", import-ის სამი სტილი და pip როგორც Python-ის "აპლიკაციების მაღაზია".'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"math, random და datetime მოდულების ცოცხალი დემო."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:'მოდული — "ხელსაწყოების ყუთი"',text:'წარმოიდგინე, რომ სახლში რამე უნდა გააკეთო. ყოველი ინსტრუმენტის (ჩაქუჩის, ხრახნისმჭრელის) თვითონ დამზადება ზედმეტი შრომა იქნებოდა, ამიტომ მზა ხელსაწყოების ყუთს იღებ. Python-შიც ასეა: ვიღაცებმა უკვე დაწერეს ათასობით გამოსადეგი ფუნქცია და ისინი "ყუთებში" (მოდულებში) შეფუთეს. შენ მხოლოდ ყუთი უნდა გახსნა და გამოიყენო. მათემატიკისთვის არსებობს `math`, შემთხვევითობისთვის `random`, თარიღისა და დროისთვის `datetime`.'},{heading:"import — ყუთის გახსნა",text:"მოდულს ვხსნით სიტყვით `import`: `import math` და შემდეგ ფუნქციებს წერტილით ვიძახებთ — `math.sqrt(16)`. თუ მხოლოდ ერთი რამ გვჭირდება, შეგვიძლია ცალკე ავიღოთ: `from math import sqrt`, შემდეგ კი პირდაპირ `sqrt(16)` გვეყოფა. გრძელი სახელის შესამოკლებლად კი არსებობს მეტსახელი: `import math as m`, და ვწერთ `m.sqrt(16)`."},{heading:"სამი სასარგებლო მოდული",text:"`math` გვაძლევს რიცხვ π-ს (`math.pi`), ფესვს (`sqrt`), დამრგვალებას ზევით და ქვევით (`ceil`, `floor`). `random` ქმნის შემთხვევით რიცხვებს და არჩევანს: `randint(1, 6)` გვაძლევს რიცხვს 1-დან 6-მდე (ორივე ბოლო შედის, რაც განსხვავდება range()-სგან!), `choice(სია)` ირჩევს შემთხვევით ელემენტს, `shuffle(სია)` ურევს სიას. `datetime` კი გვეხმარება დროსა და თარიღთან: `datetime.now()` მიმდინარე დროს აბრუნებს, ხოლო ორი თარიღის გამოკლებით დღეების განსხვავებას ვიგებთ."},{heading:'pip — Python-ის "აპლიკაციების მაღაზია"',text:"math, random და datetime Python-ს თავიდანვე თან ახლავს. მაგრამ არსებობს უფრო მეტი ბიბლიოთეკა, რომლებიც ცალკე უნდა ჩამოვტვირთოთ — მაგალითად თამაშების შესაქმნელად `pygame`. ამისთვის გვაქვს `pip`, ინსტრუმენტი, რომელიც ბიბლიოთეკას ინტერნეტიდან ჩამოტვირთავს და დააინსტალირებს. ის ტერმინალში გამოიყენება: `pip install pygame`. Thonny-ში იგივეს მენიუდან აკეთებ: Tools → Manage packages. ჩვენს ბრაუზერულ Playground-ში pip-ის გაშვება არ შეგვიძლია, ამიტომ ამ ნაწილს შენს კომპიუტერზე სცდი."}],codeExamples:[{title:"math მოდული და import-ის სამი სტილი",code:`import math
from math import sqrt
import math as m

print(math.sqrt(49))
print(sqrt(81))
print(m.pi)
print(math.ceil(4.2), math.floor(4.8))

radius = 5
print("წრის ფართობი:", round(math.pi * radius ** 2, 2))`},{title:"random მოდული — კამათელი და შემთხვევითი არჩევანი",code:`import random

print("კამათელი:", random.randint(1, 6))

fruits = ["ვაშლი", "ბანანი", "მანდარინი", "ატამი"]
print("შემთხვევითი ხილი:", random.choice(fruits))

random.shuffle(fruits)
print("არეული სია:", fruits)`},{title:"datetime მოდული — დრო და თარიღები",code:`from datetime import datetime, date

now = datetime.now()
print("ახლა:", now.strftime("%d.%m.%Y %H:%M"))
print("წელი:", now.year)

birthday = date(2012, 5, 20)
today = date.today()
print("დაბადებიდან გავიდა", (today - birthday).days, "დღე")`}],exercises:[{level:"Easy",title:"კამათლის სამჯერ გაგორება",prompt:'გამოიყენე random.randint(1, 6) და for ციკლი, რომ კამათელი სამჯერ გააგორო. თითოეული შედეგი დაბეჭდე ტექსტით, მაგ. "გორება 1: 4".',starter:`import random

# დაწერე for ციკლი აქ
`},{level:"Medium",title:"გეომეტრიის კალკულატორი",prompt:"math მოდულით გამოთვალე: წრის სიგრძე ფორმულით 2 * π * radius და სამკუთხედის ჰიპოტენუზა ფორმულით sqrt(a**2 + b**2). შედეგები დაამრგვალე round(..., 2)-ით და დაბეჭდე.",starter:`import math

radius = 7
a = 3
b = 4

# გამოთვალე წრის სიგრძე და ჰიპოტენუზა
`},{level:"Challenge",title:"პაროლის გენერატორი",prompt:"დაწერე ფუნქცია make_password(length), რომელიც სიმბოლოების characters სტრიქონიდან random.choice-ით ირჩევს length ცალ სიმბოლოს for ციკლში და აბრუნებს მათგან შედგენილ პაროლს. გამოიძახე ის სამჯერ: სიგრძეებით 6, 8 და 12. (ეს სასწავლო მაგალითია, რეალური პაროლებისთვის სპეციალურ უსაფრთხო ხელსაწყოებს იყენებენ.)",starter:`import random

characters = "abcdefghijklmnopqrstuvwxyz0123456789"

def make_password(length):
    # შეაგროვე პაროლი for ციკლით და დააბრუნე
    pass

print(make_password(6))
print(make_password(8))
print(make_password(12))
`}],quiz:[{question:"რა უნდა დავწეროთ, რომ math.sqrt() გამოვიყენოთ?",options:["import math","include math","using math","open math"],correctIndex:0},{question:"რას აბრუნებს random.randint(1, 6)?",options:["მხოლოდ 1-დან 5-მდე რიცხვს","მთელ რიცხვს 1-დან 6-მდე, ორივე ბოლოს ჩათვლით","წილადს 1-სა და 6-ს შორის","ყოველთვის 6-ს"],correctIndex:1},{question:"რისთვის გამოიყენება pip?",options:["კოდის სწრაფად გასაშვებად","დამატებითი ბიბლიოთეკების ინტერნეტიდან ჩამოსატვირთად და დასაინსტალირებლად","ფაილების წასაშლელად","შეცდომების გასასწორებლად"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:"დაწერე პროგრამა, რომელიც datetime მოდულით ითვლის, რამდენი დღე დარჩა მიმდინარე წლის დასრულებამდე (ეს არის date(today.year, 12, 31)-სა და დღევანდელ თარიღს შორის სხვაობა). შედეგი დაბეჭდე f-string-ით. ბონუსი: დაამატე random.choice-ით შემთხვევითი მოტივაციური ფრაზა სიიდან."}},$p={playground:"turtle",agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:"Turtle როგორც პატარა რობოტი კალმით — ბრძანებები, კუთხეები და ფერები."},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"კვადრატი ხელით, ვარსკვლავი ციკლით და ფერადი სპირალი — ნახატები იხატება ჩვენს თვალწინ."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი ხატვის სავარჯიშოები + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"Turtle — პატარა რობოტი კალმით",text:'წარმოიდგინე პატარა რობოტი კუ, რომელსაც კალამი უჭირავს და ქაღალდზე დადის. როცა ის მიდის, კალამი ხაზს ტოვებს. შენ კუს ბრძანებებს აძლევ ("წადი 100 ნაბიჯით წინ", "შეუხვიე მარცხნივ"), ის კი ასრულებს და ასე ჩნდება ნახატი. Python-ის turtle მოდულიც ზუსტად ასე მუშაობს: ჩვენ ვწერთ ბრძანებებს, კუ კი ეკრანზე ხატავს. ეკრანის ცენტრი არის წერტილი (0, 0), ხოლო დასაწყისში კუ მარჯვნივ იყურება.'},{heading:"ოთხი მთავარი ბრძანება",text:"`forward(n)` აგზავნის კუს n ნაბიჯით წინ, `backward(n)` უკან. `left(კუთხე)` და `right(კუთხე)` კი კუს ადგილზე ატრიალებს გრადუსებით, ისე რომ ის არსად მიდის და ხაზს არ ხატავს. მაგალითად, `left(90)` არის სწორი კუთხით მოხვევა. კვადრატის დასახატად ოთხჯერ უნდა გავიდეთ წინ და ოთხჯერ შევუხვიოთ 90 გრადუსით."},{heading:"კალამი, ფერები და შევსება",text:'`penup()` ასწევს კალამს, რომ კუ ხაზის დატოვების გარეშე გადავიდეს სხვა ადგილას, `pendown()` კი კალამს ისევ ჩამოწევს. `goto(x, y)` კუს კონკრეტულ წერტილში გადაიყვანს. `color("red")` ცვლის ფერს, `pensize(5)` ხაზის სისქეს. ფიგურის შესავსებად ვწერთ `begin_fill()`, ვხატავთ ფიგურას და ბოლოს ვწერთ `end_fill()`. თუ `color("black", "yellow")` დავწერეთ, პირველი ფერი კონტურისაა, მეორე კი შევსების.'},{heading:"ციკლი + Turtle = სილამაზე",text:"კვადრატის ხელით დახატვა 7 ხაზს გვჭირდებოდა, ციკლით კი ორი ხაზიც საკმარისია: `for i in range(4): t.forward(100); t.left(90)`. რეგულარული მრავალკუთხედისთვის შეხვევის კუთხე ყოველთვის `360 / გვერდების რაოდენობა`-ს უდრის (სამკუთხედი 120, კვადრატი 90, ექვსკუთხედი 60). ხუთქიმიანი ვარსკვლავისთვის კი შევუხვევთ 144 გრადუსით. ბოლოს ვწერთ `turtle.done()`-ს: Thonny-ში ან VS Code-ში ის ნახატის ფანჯარას ღიას ტოვებს, აქ ბრაუზერში არაფერს აკეთებს, მაგრამ ჩვენი კოდი ისე დავწეროთ, რომ შენს კომპიუტერშიც იმუშაოს."}],codeExamples:[{title:"პირველი ნახატი — კვადრატი ხელით",code:`import turtle

t = turtle.Turtle()
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)

turtle.done()`},{title:"ხუთქიმიანი ვარსკვლავი ციკლით",code:`import turtle

t = turtle.Turtle()
t.color("purple")
t.pensize(3)

for i in range(5):
    t.forward(150)
    t.right(144)

turtle.done()`},{title:"ფერადი სპირალი",code:`import turtle

t = turtle.Turtle()
t.speed(0)
t.pensize(2)
colors = ["red", "orange", "gold", "green", "blue", "purple"]

for i in range(60):
    t.color(colors[i % len(colors)])
    t.forward(i * 3.5)
    t.left(59)

turtle.done()`}],exercises:[{level:"Easy",title:"ტოლგვერდა სამკუთხედი",prompt:"დახატე მწვანე ტოლგვერდა სამკუთხედი: სამჯერ გადი წინ 120 ნაბიჯით და ყოველ ჯერზე შეუხვიე 120 გრადუსით. გამოიყენე for ციკლი.",starter:`import turtle

t = turtle.Turtle()
t.color("green")
t.pensize(3)

# დაწერე for ციკლი აქ

turtle.done()
`},{level:"Medium",title:"polygon ფუნქცია",prompt:"დაასრულე polygon(sides, length, color) ფუნქცია: ჯერ დააყენე ფერი, შემდეგ for ციკლით დახატე რეგულარული მრავალკუთხედი (ყოველ ჯერზე შეუხვიე 360 / sides გრადუსით). ფუნქციაში pass ჩაანაცვლე შენი კოდით და გაუშვი სამივე ფიგურა.",starter:`import turtle

t = turtle.Turtle()
t.pensize(3)

def polygon(sides, length, color):
    # დააყენე ფერი და დახატე მრავალკუთხედი for ციკლით
    pass

polygon(5, 80, "red")
polygon(6, 60, "blue")
polygon(8, 40, "orange")

turtle.done()
`},{level:"Challenge",title:"სახლი",prompt:"დახატე სახლი სამი ნაწილისგან: ყვითელი კვადრატული კედლები (ზომა 120), წითელი სამკუთხა სახურავი (გვერდი 120) და ყავისფერი კარი (30 x 50). move_to ფუნქცია უკვე დაწერილია და კალამს ხაზის დატოვების გარეშე გადაიტანს. ყოველი ნაწილისთვის გამოიყენე begin_fill() და end_fill().",starter:`import turtle

t = turtle.Turtle()
t.pensize(2)

def move_to(x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()

# 1) კედლები: ყვითელი კვადრატი, ზომა 120, დაწყება (-60, -80)
move_to(-60, -80)
t.color("black", "yellow")
t.begin_fill()
# დახატე კვადრატი აქ
t.end_fill()

# 2) სახურავი: წითელი სამკუთხედი, გვერდი 120, დაწყება (-60, 40)

# 3) კარი: ყავისფერი მართკუთხედი 30 x 50, დაწყება (-15, -80)

t.hideturtle()
turtle.done()
`}],quiz:[{question:"რას აკეთებს t.left(90)?",options:["კუს 90 ნაბიჯით წინ ატარებს","კუს ადგილზე 90 გრადუსით ატრიალებს მარცხნივ","მარცხნივ 90 პიქსელის სიგრძის ხაზს ხატავს","პროგრამას წყვეტს"],correctIndex:1},{question:"რა კუთხით უნდა შევუხვიოთ ყოველ ჯერზე, რომ რეგულარული ექვსკუთხედი დავხატოთ?",options:["90","120","60","30"],correctIndex:2},{question:"რისთვის გვჭირდება penup()?",options:["ფერის შესაცვლელად","რომ კალამი ავწიოთ და ხაზის დატოვების გარეშე გადავინაცვლოთ სხვა ადგილას","ნახატის წასაშლელად","ციკლის გასაჩერებლად"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:"შექმენი ორი კუ: t1 = turtle.Turtle() და t2 = turtle.Turtle(). დაახატვინე t1-ს წითელი კვადრატი, t2-ს კი, სხვა ადგილიდან (penup, goto, pendown), ლურჯი სამკუთხედი. ბონუსი: დაწერე ფუნქცია, რომელიც ნებისმიერ კუს და ნებისმიერ მრავალკუთხედს დახატავს."}},qp={agenda:[{time:"00:00 – 00:15",title:"თეორია და ანალოგიები",desc:'ფაილი როგორც "რვეული", რომელშიც ინფორმაცია პროგრამის დახურვის შემდეგაც რჩება.'},{time:"00:15 – 00:35",title:"კოდი და დემო",desc:"ფაილის ჩაწერა, წაკითხვა და დამატება — with-ის გამოყენებით, ცოცხალი დემოთი."},{time:"00:35 – 00:50",title:"პრაქტიკა და ქვიზი",desc:"3-დონიანი სავარჯიშოები Playground-ში + თვითშემოწმების ქვიზი."},{time:"00:50 – 01:00",title:"გამოწვევა",desc:"დამოუკიდებელი მინი-ამოცანა შემდეგ გაკვეთილამდე."}],theory:[{heading:"რატომ გვჭირდება ფაილი?",text:'აქამდე ჩვენი პროგრამების ყველა ცვლადი "ქრებოდა", როგორც კი პროგრამა მთავრდებოდა — ზუსტად ისე, როგორც დაფაზე ცარცით დაწერილი რამ იშლება გაკვეთილის ბოლოს. ფაილი კი რვეულივითაა: რასაც იქ ჩავწერთ, იქ რჩება კომპიუტერის დისკზე, პროგრამის დახურვის შემდეგაც — შემდეგ დღეს, თვეს თუ წელსაც კი შეგვიძლია გავხსნათ და წავიკითხოთ.'},{heading:'open() — ფაილის "გახსნა"',text:'`open("ფაილის_სახელი.txt", "რეჟიმი")` ხსნის ფაილს მუშაობისთვის. "რეჟიმი" გვეუბნება, რას ვაპირებთ: `"w"` (write) წერს ახალ ფაილს თავიდან (ძველ შიგთავსს შლის!), `"a"` (append) ამატებს ფაილის ბოლოში ძველის წაშლის გარეშე, `"r"` (read) კი მხოლოდ წასაკითხად ხსნის.'},{heading:'with — "ხსენი, გამოიყენე, დახურე" ავტომატურად',text:"ფაილის გახსნის შემდეგ აუცილებლად უნდა დავხუროთ `close()`-ით, თორემ ცვლილებები შეიძლება არ შეინახოს. მაგრამ ამის დავიწყება ადვილია — ამიტომ Python გვთავაზობს `with open(...) as f:` კონსტრუქციას, რომელიც ავტომატურად ხურავს ფაილს, როცა ბლოკი მთავრდება, თუნდაც შეცდომა მოხდეს. ეს არის თანამედროვე, რეკომენდებული სტილი."},{heading:"წაკითხვის სამი გზა",text:"`f.read()` კითხულობს მთელ ფაილს ერთ დიდ სტრიქონად. `f.readlines()` კითხულობს ფაილს სტრიქონების სიად (თითოეული ელემენტი — ერთი ხაზი). `for line in f:` კი საშუალებას გვაძლევს, ფაილი ხაზ-ხაზ გავიაროთ ციკლით — ეს ყველაზე ხშირად გამოყენებული გზაა დიდი ფაილებისთვის."}],codeExamples:[{title:"ფაილში ჩაწერა და წაკითხვა",code:`with open("notes.txt", "w") as f:
    f.write("გამარჯობა, ეს ჩემი პირველი ფაილია!\\n")
    f.write("Python ფაილებთან მუშაობა მარტივია.\\n")

with open("notes.txt", "r") as f:
    content = f.read()

print(content)`},{title:"ხაზ-ხაზ წაკითხვა და დამატება",code:`with open("todo.txt", "w") as f:
    f.write("დავალების შესრულება\\n")
    f.write("ჩანთის მომზადება\\n")

with open("todo.txt", "a") as f:
    f.write("წიგნის წაკითხვა\\n")

with open("todo.txt", "r") as f:
    for line in f:
        print("- " + line.strip())`}],exercises:[{level:"Easy",title:"საკუთარი დღიური",prompt:'გამოიყენე with open(..., "w") რომ შექმნა ფაილი diary.txt სამი წინადადებით (f.write() სამჯერ). შემდეგ გახსენი ის წასაკითხად და დაბეჭდე მთელი შიგთავსი read()-ით.',starter:`# ჩაწერე სამი ხაზი diary.txt-ში


# წაიკითხე და დაბეჭდე
`},{level:"Medium",title:"სავაჭრო სია ხაზ-ხაზ",prompt:'ჩაწერე shopping.txt ფაილში 5 პროდუქტი (თითო ხაზზე). შემდეგ წაიკითხე ფაილი for line in f: ციკლით და დაბეჭდე თითოეული ნივთი ნომრით — "1. პური", "2. რძე" და ა.შ. (გამოიყენე counter ცვლადი).',starter:`items = ["პური", "რძე", "კვერცხი", "ყველი", "ვაშლი"]

# ჩაწერე items-ის ყოველი ელემენტი ცალ ხაზზე shopping.txt-ში


# წაიკითხე ხაზ-ხაზ და დანომრე
`},{level:"Challenge",title:"ქულების დათვლა ფაილიდან",prompt:"ჩაწერე scores.txt ფაილში 5 რიცხვი (ქულები), თითო ხაზზე. შემდეგ წაიკითხე ფაილი, თითოეული ხაზი გადააქციე რიცხვად (int() ან strip()+int()) და გამოთვალე ჯამი და საშუალო. დაბეჭდე f-string-ით.",starter:`scores = [85, 92, 78, 95, 88]

# ჩაწერე თითოეული ქულა ცალ ხაზზე scores.txt-ში


# წაიკითხე ფაილიდან, გადააქციე რიცხვებად და გამოთვალე ჯამი/საშუალო
`}],quiz:[{question:'რა განსხვავებაა "w" და "a" რეჟიმებს შორის?',options:['"w" ფაილს თავიდან წერს (ძველს შლის), "a" ბოლოში ამატებს',"ისინი იდენტურია",'"w" მხოლოდ კითხულობს, "a" წერს','"a" შლის მთელ ფაილს'],correctIndex:0},{question:"რატომ ვიყენებთ with open(...) as f:-ს close()-ის ხელით დაწერის ნაცვლად?",options:["with უფრო სწრაფია","with ავტომატურად ხურავს ფაილს, თუნდაც შეცდომა მოხდეს","close() საერთოდ არ არსებობს Python-ში","განსხვავება არ არის"],correctIndex:1},{question:"რას დააბრუნებს f.readlines() ფაილიდან, რომელშიც 3 ხაზია?",options:["ერთ გრძელ სტრიქონს","სიას 3 ელემენტით — თითო ხაზი","რიცხვს 3","None-ს"],correctIndex:1}],challenge:{title:"დამოუკიდებელი გამოწვევა",prompt:'დაწერე პროგრამა, რომელიც ჯერ ქმნის log.txt ფაილს სამი "შეტყობინებით" (მაგ. "პროგრამა დაიწყო", "მონაცემები დამუშავდა", "პროგრამა დასრულდა"), თითოეული ცალკე ხაზზე "a" რეჟიმის სამჯერ გამოძახებით (არა ერთბაშად "w"-ით). ბოლოს წაიკითხე მთელი ფაილი და დაბეჭდე, რამდენი ხაზია სულ ფაილში (გამოიყენე readlines() და len()).'}},Bp={1:xp,2:wp,3:kp,4:_p,5:Sp,6:Ep,7:Cp,8:Np,9:Pp,10:Tp,11:zp,12:jp,13:Mp,14:Lp,15:Ip,16:Rp,17:Op,18:Fp,19:Dp,20:Up,21:Ap,22:$p,23:qp},Vp={Easy:"bg-leaf/15 text-leaf",Medium:"bg-mustard/15 text-mustard",Challenge:"bg-coral/15 text-coral"};function Dt({icon:e,children:t}){return p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx(e,{size:20,className:"text-pybuse"}),p.jsx("h2",{className:"font-display font-semibold text-xl text-ink",children:t})]})}function Hp({lesson:e}){return p.jsxs("div",{className:"pop-in max-w-2xl mx-auto text-center py-16 px-6",children:[p.jsx(lp,{size:40,className:"mx-auto text-mustard mb-4"}),p.jsxs("h2",{className:"font-display text-2xl font-semibold text-ink mb-2",children:["შეხვედრა #",e.id,": ",e.title]}),p.jsx("p",{className:"text-slate mb-6",children:e.subtitle}),p.jsxs("div",{className:"bg-white border border-ink/10 rounded-2xl p-5 text-left text-sm text-ink/80",children:["ეს შეხვედრა ჯერ არ არის სრულად შევსებული. გამოიყენე README-ში მოცემული",p.jsx("span",{className:"font-semibold",children:" Prompt-შაბლონი"}),", რომ Claude-ისგან მიიღო ამ შეხვედრის სრული, მზა კოდი (თეორია, კოდის მაგალითები, სავარჯიშოები და ქვიზი) და ჩასვი"," ",p.jsx("code",{className:"font-code bg-ink/5 px-1 rounded",children:"lessons.js"})," ფაილში, ისე როგორც შეხვედრა #1-ია გაკეთებული."]})]})}function Wp({lesson:e}){const[t,n]=O.useState(0),r=Bp[e.id];if(!r)return p.jsx(Hp,{lesson:e});const l=r.playground==="turtle"?yp:mp;return p.jsxs("div",{className:"pop-in max-w-3xl mx-auto pb-20",children:[p.jsxs("header",{className:"mb-8",children:[p.jsxs("p",{className:"text-pybuse font-code text-sm mb-1",children:["შეხვედრა #",e.id]}),p.jsx("h1",{className:"font-display text-3xl font-bold text-ink mb-2",children:e.title}),p.jsx("p",{className:"text-slate",children:e.subtitle})]}),p.jsxs("section",{className:"mb-10",children:[p.jsx(Dt,{icon:np,children:"60-წუთიანი გეგმა"}),p.jsx("div",{className:"grid sm:grid-cols-2 gap-3",children:r.agenda.map((i,o)=>p.jsxs("div",{className:"bg-white border border-ink/10 rounded-2xl p-4",children:[p.jsx("p",{className:"text-pybuse font-code text-xs mb-1",children:i.time}),p.jsx("p",{className:"font-semibold text-ink text-sm mb-1",children:i.title}),p.jsx("p",{className:"text-slate text-sm",children:i.desc})]},o))})]}),p.jsx("div",{className:"snake-divider mb-10"}),p.jsxs("section",{className:"mb-10",children:[p.jsx(Dt,{icon:op,children:"თეორია და ანალოგიები"}),p.jsx("div",{className:"space-y-4",children:r.theory.map((i,o)=>p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold text-ink mb-1",children:i.heading}),p.jsx("p",{className:"text-ink/80 leading-relaxed",children:i.text})]},o))})]}),p.jsxs("section",{className:"mb-10",children:[p.jsx(Dt,{icon:rp,children:"კოდი და დემო"}),p.jsx("div",{className:"space-y-4",children:r.codeExamples.map((i,o)=>p.jsxs("div",{children:[p.jsx("p",{className:"text-sm font-semibold text-ink/70 mb-2",children:i.title}),p.jsx(l,{starterCode:i.code,exerciseKey:`demo-${e.id}-${o}`})]},o))})]}),p.jsxs("section",{className:"mb-10",children:[p.jsx(Dt,{icon:ip,children:"პრაქტიკული სავარჯიშოები"}),p.jsx("div",{className:"flex gap-2 mb-4 flex-wrap",children:r.exercises.map((i,o)=>p.jsx("button",{onClick:()=>n(o),className:`px-3 py-1.5 rounded-full text-sm font-semibold transition ${t===o?"bg-ink text-paper":`${Vp[i.level]}`}`,children:i.level},o))}),r.exercises[t]&&p.jsxs("div",{children:[p.jsx("p",{className:"font-semibold text-ink mb-1",children:r.exercises[t].title}),p.jsx("p",{className:"text-ink/80 mb-3",children:r.exercises[t].prompt}),p.jsx(l,{starterCode:r.exercises[t].starter,exerciseKey:`ex-${e.id}-${t}`})]})]}),p.jsxs("section",{className:"mb-10",children:[p.jsx(Dt,{icon:sp,children:"თვითშემოწმების ქვიზი"}),p.jsx(vp,{questions:r.quiz})]}),p.jsxs("section",{children:[p.jsx(Dt,{icon:ap,children:"გამოწვევა"}),p.jsxs("div",{className:"bg-ink text-paper rounded-2xl p-5",children:[p.jsx("p",{className:"font-semibold mb-1",children:r.challenge.title}),p.jsx("p",{className:"text-paper/80 text-sm leading-relaxed",children:r.challenge.prompt})]})]})]})}const Js="py-course-active-lesson";function Qp(){const[e,t]=O.useState(()=>{const o=Number(localStorage.getItem(Js));return o&&Er.some(s=>s.id===o)?o:1}),[n,r]=O.useState(!1);O.useEffect(()=>{localStorage.setItem(Js,String(e))},[e]);const l=Er.find(o=>o.id===e)||Er[0],i=o=>{t(o),r(!1),window.scrollTo({top:0,behavior:"smooth"})};return p.jsxs("div",{className:"min-h-screen flex bg-paper",children:[p.jsx(fp,{lessons:Er,activeId:e,onSelect:i,open:n,onClose:()=>r(!1)}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("header",{className:"md:hidden sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-ink/10 px-4 py-3 flex items-center gap-3",children:[p.jsx("button",{onClick:()=>r(!0),"aria-label":"მენიუს გახსნა",children:p.jsx(up,{size:22,className:"text-ink"})}),p.jsxs("p",{className:"font-display font-semibold text-ink",children:["შეხვედრა #",l.id,": ",l.title]})]}),p.jsx("main",{className:"px-4 sm:px-8 py-10",children:p.jsx(Wp,{lesson:l})})]})]})}ei.createRoot(document.getElementById("root")).render(p.jsx(Fc.StrictMode,{children:p.jsx(Qp,{})}));
