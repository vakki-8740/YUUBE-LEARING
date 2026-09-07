function zd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ds={exports:{}},ai={},us={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=Symbol.for("react.element"),Md=Symbol.for("react.portal"),Ad=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Ud=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),Vd=Symbol.for("react.memo"),Hd=Symbol.for("react.lazy"),Qa=Symbol.iterator;function Wd(e){return e===null||typeof e!="object"?null:(e=Qa&&e[Qa]||e["@@iterator"],typeof e=="function"?e:null)}var ps={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fs=Object.assign,vs={};function cn(e,t,n){this.props=e,this.context=t,this.refs=vs,this.updater=n||ps}cn.prototype.isReactComponent={};cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ms(){}ms.prototype=cn.prototype;function Ko(e,t,n){this.props=e,this.context=t,this.refs=vs,this.updater=n||ps}var Jo=Ko.prototype=new ms;Jo.constructor=Ko;fs(Jo,cn.prototype);Jo.isPureReactComponent=!0;var Ya=Array.isArray,gs=Object.prototype.hasOwnProperty,qo={current:null},hs={key:!0,ref:!0,__self:!0,__source:!0};function xs(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)gs.call(t,r)&&!hs.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:qn,type:e,key:o,ref:l,props:i,_owner:qo.current}}function $d(e,t){return{$$typeof:qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===qn}function Qd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ga=/\/+/g;function Ii(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qd(""+e.key):t.toString(36)}function br(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case qn:case Md:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ii(l,0):r,Ya(i)?(n="",e!=null&&(n=e.replace(Ga,"$&/")+"/"),br(i,t,n,"",function(u){return u})):i!=null&&(Zo(i)&&(i=$d(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ga,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ya(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Ii(o,s);l+=br(o,t,n,c,i)}else if(c=Wd(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Ii(o,s++),l+=br(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function or(e,t,n){if(e==null)return e;var r=[],i=0;return br(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Sr={transition:null},Gd={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:qo};function ys(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!Zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=cn;z.Fragment=Ad;z.Profiler=Dd;z.PureComponent=Ko;z.StrictMode=_d;z.Suspense=Od;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd;z.act=ys;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fs({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=qo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)gs.call(t,c)&&!hs.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:qn,type:e.type,key:i,ref:o,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:Fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ud,_context:e},e.Consumer=e};z.createElement=xs;z.createFactory=function(e){var t=xs.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Rd,render:e}};z.isValidElement=Zo;z.lazy=function(e){return{$$typeof:Hd,_payload:{_status:-1,_result:e},_init:Yd}};z.memo=function(e,t){return{$$typeof:Vd,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};z.unstable_act=ys;z.useCallback=function(e,t){return se.current.useCallback(e,t)};z.useContext=function(e){return se.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return se.current.useDeferredValue(e)};z.useEffect=function(e,t){return se.current.useEffect(e,t)};z.useId=function(){return se.current.useId()};z.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return se.current.useMemo(e,t)};z.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};z.useRef=function(e){return se.current.useRef(e)};z.useState=function(e){return se.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return se.current.useTransition()};z.version="18.3.1";us.exports=z;var I=us.exports;const Xd=Pd(I),Kd=zd({__proto__:null,default:Xd},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=I,qd=Symbol.for("react.element"),Zd=Symbol.for("react.fragment"),eu=Object.prototype.hasOwnProperty,tu=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nu={key:!0,ref:!0,__self:!0,__source:!0};function ws(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)eu.call(t,r)&&!nu.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qd,type:e,key:o,ref:l,props:i,_owner:tu.current}}ai.Fragment=Zd;ai.jsx=ws;ai.jsxs=ws;ds.exports=ai;var a=ds.exports,eo={},ks={exports:{}},we={},bs={exports:{}},Ss={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var B=C.length;C.push(T);e:for(;0<B;){var $=B-1>>>1,K=C[$];if(0<i(K,T))C[$]=T,C[B]=K,B=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],B=C.pop();if(B!==T){C[0]=B;e:for(var $=0,K=C.length,rr=K>>>1;$<rr;){var xt=2*($+1)-1,Ni=C[xt],yt=xt+1,ir=C[yt];if(0>i(Ni,B))yt<K&&0>i(ir,Ni)?(C[$]=ir,C[yt]=B,$=yt):(C[$]=Ni,C[xt]=B,$=xt);else if(yt<K&&0>i(ir,B))C[$]=ir,C[yt]=B,$=yt;else break e}}return T}function i(C,T){var B=C.sortIndex-T.sortIndex;return B!==0?B:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],g=1,v=null,m=3,y=!1,w=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=C)r(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(u)}}function h(C){if(k=!1,f(C),!w)if(n(c)!==null)w=!0,Ci(b);else{var T=n(u);T!==null&&Ei(h,T.startTime-C)}}function b(C,T){w=!1,k&&(k=!1,p(L),L=-1),y=!0;var B=m;try{for(f(T),v=n(c);v!==null&&(!(v.expirationTime>T)||C&&!Ie());){var $=v.callback;if(typeof $=="function"){v.callback=null,m=v.priorityLevel;var K=$(v.expirationTime<=T);T=e.unstable_now(),typeof K=="function"?v.callback=K:v===n(c)&&r(c),f(T)}else r(c);v=n(c)}if(v!==null)var rr=!0;else{var xt=n(u);xt!==null&&Ei(h,xt.startTime-T),rr=!1}return rr}finally{v=null,m=B,y=!1}}var E=!1,N=null,L=-1,W=5,P=-1;function Ie(){return!(e.unstable_now()-P<W)}function pn(){if(N!==null){var C=e.unstable_now();P=C;var T=!0;try{T=N(!0,C)}finally{T?fn():(E=!1,N=null)}}else E=!1}var fn;if(typeof d=="function")fn=function(){d(pn)};else if(typeof MessageChannel<"u"){var $a=new MessageChannel,Bd=$a.port2;$a.port1.onmessage=pn,fn=function(){Bd.postMessage(null)}}else fn=function(){j(pn,0)};function Ci(C){N=C,E||(E=!0,fn())}function Ei(C,T){L=j(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Ci(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var B=m;m=T;try{return C()}finally{m=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var B=m;m=C;try{return T()}finally{m=B}},e.unstable_scheduleCallback=function(C,T,B){var $=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=B+K,C={id:g++,callback:T,priorityLevel:C,startTime:B,expirationTime:K,sortIndex:-1},B>$?(C.sortIndex=B,t(u,C),n(c)===null&&C===n(u)&&(k?(p(L),L=-1):k=!0,Ei(h,B-$))):(C.sortIndex=K,t(c,C),w||y||(w=!0,Ci(b))),C},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(C){var T=m;return function(){var B=m;m=T;try{return C.apply(this,arguments)}finally{m=B}}}})(Ss);bs.exports=Ss;var ru=bs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu=I,ye=ru;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var js=new Set,An={};function Pt(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(An[e]=t,e=0;e<t.length;e++)js.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=Object.prototype.hasOwnProperty,ou=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xa={},Ka={};function au(e){return to.call(Ka,e)?!0:to.call(Xa,e)?!1:ou.test(e)?Ka[e]=!0:(Xa[e]=!0,!1)}function lu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function su(e,t,n,r){if(t===null||typeof t>"u"||lu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ea=/[\-:]([a-z])/g;function ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ea,ta);te[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ea,ta);te[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ea,ta);te[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function na(e,t,n,r){var i=te.hasOwnProperty(t)?te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(su(t,n,i,r)&&(n=null),r||i===null?au(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=iu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),ra=Symbol.for("react.strict_mode"),no=Symbol.for("react.profiler"),Cs=Symbol.for("react.provider"),Es=Symbol.for("react.context"),ia=Symbol.for("react.forward_ref"),ro=Symbol.for("react.suspense"),io=Symbol.for("react.suspense_list"),oa=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Ns=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function vn(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Li;function bn(e){if(Li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||""}return`
`+Li+e}var Ti=!1;function Bi(e,t){if(!e||Ti)return"";Ti=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{Ti=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function cu(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=Bi(e.type,!1),e;case 11:return e=Bi(e.type.render,!1),e;case 1:return e=Bi(e.type,!0),e;default:return""}}function oo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case _t:return"Portal";case no:return"Profiler";case ra:return"StrictMode";case ro:return"Suspense";case io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Es:return(e.displayName||"Context")+".Consumer";case Cs:return(e._context.displayName||"Context")+".Provider";case ia:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oa:return t=e.displayName||null,t!==null?t:oo(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return oo(e(t))}catch{}}return null}function du(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oo(t);case 8:return t===ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uu(e){var t=Is(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=uu(e))}function Ls(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Is(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ao(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ts(e,t){t=t.checked,t!=null&&na(e,"checked",t,!1)}function lo(e,t){Ts(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?so(e,t.type,n):t.hasOwnProperty("defaultValue")&&so(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Za(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function so(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function co(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function el(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Sn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function Bs(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,Ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pu=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){pu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function Ms(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function As(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ms(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fu=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function po(e,t){if(t){if(fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vo=null;function aa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mo=null,Xt=null,Kt=null;function nl(e){if(e=tr(e)){if(typeof mo!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ui(t),mo(e.stateNode,e.type,t))}}function _s(e){Xt?Kt?Kt.push(e):Kt=[e]:Xt=e}function Ds(){if(Xt){var e=Xt,t=Kt;if(Kt=Xt=null,nl(e),t)for(e=0;e<t.length;e++)nl(t[e])}}function Us(e,t){return e(t)}function Fs(){}var zi=!1;function Rs(e,t,n){if(zi)return e(t,n);zi=!0;try{return Us(e,t,n)}finally{zi=!1,(Xt!==null||Kt!==null)&&(Fs(),Ds())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var go=!1;if(Qe)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){go=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{go=!1}function vu(e,t,n,r,i,o,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Nn=!1,Ar=null,_r=!1,ho=null,mu={onError:function(e){Nn=!0,Ar=e}};function gu(e,t,n,r,i,o,l,s,c){Nn=!1,Ar=null,vu.apply(mu,arguments)}function hu(e,t,n,r,i,o,l,s,c){if(gu.apply(this,arguments),Nn){if(Nn){var u=Ar;Nn=!1,Ar=null}else throw Error(x(198));_r||(_r=!0,ho=u)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Os(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rl(e){if(Mt(e)!==e)throw Error(x(188))}function xu(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rl(i),e;if(o===r)return rl(i),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Vs(e){return e=xu(e),e!==null?Hs(e):null}function Hs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hs(e);if(t!==null)return t;e=e.sibling}return null}var Ws=ye.unstable_scheduleCallback,il=ye.unstable_cancelCallback,yu=ye.unstable_shouldYield,wu=ye.unstable_requestPaint,Q=ye.unstable_now,ku=ye.unstable_getCurrentPriorityLevel,la=ye.unstable_ImmediatePriority,$s=ye.unstable_UserBlockingPriority,Dr=ye.unstable_NormalPriority,bu=ye.unstable_LowPriority,Qs=ye.unstable_IdlePriority,li=null,Fe=null;function Su(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:Eu,ju=Math.log,Cu=Math.LN2;function Eu(e){return e>>>=0,e===0?32:31-(ju(e)/Cu|0)|0}var cr=64,dr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=jn(s):(o&=l,o!==0&&(r=jn(o)))}else l=n&~i,l!==0?r=jn(l):o!==0&&(r=jn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pe(t),i=1<<n,r|=e[n],t&=~i;return r}function Nu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Pe(o),s=1<<l,c=i[l];c===-1?(!(s&n)||s&r)&&(i[l]=Nu(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ys(){var e=cr;return cr<<=1,!(cr&4194240)&&(cr=64),e}function Pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pe(t),e[t]=n}function Lu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function Gs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xs,ca,Ks,Js,qs,yo=!1,ur=[],ot=null,at=null,lt=null,Un=new Map,Fn=new Map,et=[],Tu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ol(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function gn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=tr(t),t!==null&&ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bu(e,t,n,r,i){switch(t){case"focusin":return ot=gn(ot,e,t,n,r,i),!0;case"dragenter":return at=gn(at,e,t,n,r,i),!0;case"mouseover":return lt=gn(lt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Un.set(o,gn(Un.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fn.set(o,gn(Fn.get(o)||null,e,t,n,r,i)),!0}return!1}function Zs(e){var t=St(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Os(n),t!==null){e.blockedOn=t,qs(e.priority,function(){Ks(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vo=r,n.target.dispatchEvent(r),vo=null}else return t=tr(n),t!==null&&ca(t),e.blockedOn=n,!1;t.shift()}return!0}function al(e,t,n){jr(e)&&n.delete(t)}function zu(){yo=!1,ot!==null&&jr(ot)&&(ot=null),at!==null&&jr(at)&&(at=null),lt!==null&&jr(lt)&&(lt=null),Un.forEach(al),Fn.forEach(al)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,yo||(yo=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,zu)))}function Rn(e){function t(i){return hn(i,e)}if(0<ur.length){hn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&hn(ot,e),at!==null&&hn(at,e),lt!==null&&hn(lt,e),Un.forEach(t),Fn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Zs(n),n.blockedOn===null&&et.shift()}var Jt=Ke.ReactCurrentBatchConfig,Fr=!0;function Pu(e,t,n,r){var i=A,o=Jt.transition;Jt.transition=null;try{A=1,da(e,t,n,r)}finally{A=i,Jt.transition=o}}function Mu(e,t,n,r){var i=A,o=Jt.transition;Jt.transition=null;try{A=4,da(e,t,n,r)}finally{A=i,Jt.transition=o}}function da(e,t,n,r){if(Fr){var i=wo(e,t,n,r);if(i===null)Hi(e,t,r,Rr,n),ol(e,r);else if(Bu(i,e,t,n,r))r.stopPropagation();else if(ol(e,r),t&4&&-1<Tu.indexOf(e)){for(;i!==null;){var o=tr(i);if(o!==null&&Xs(o),o=wo(e,t,n,r),o===null&&Hi(e,t,r,Rr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Hi(e,t,r,null,n)}}var Rr=null;function wo(e,t,n,r){if(Rr=null,e=aa(r),e=St(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Os(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rr=e,null}function ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ku()){case la:return 1;case $s:return 4;case Dr:case bu:return 16;case Qs:return 536870912;default:return 16}default:return 16}}var nt=null,ua=null,Cr=null;function tc(){if(Cr)return Cr;var e,t=ua,n=t.length,r,i="value"in nt?nt.value:nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Cr=i.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function ll(){return!1}function ke(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pr:ll,this.isPropagationStopped=ll,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pa=ke(dn),er=V({},dn,{view:0,detail:0}),Au=ke(er),Mi,Ai,xn,si=V({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Mi=e.screenX-xn.screenX,Ai=e.screenY-xn.screenY):Ai=Mi=0,xn=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Ai}}),sl=ke(si),_u=V({},si,{dataTransfer:0}),Du=ke(_u),Uu=V({},er,{relatedTarget:0}),_i=ke(Uu),Fu=V({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ru=ke(Fu),Ou=V({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vu=ke(Ou),Hu=V({},dn,{data:0}),cl=ke(Hu),Wu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qu[e])?!!t[e]:!1}function fa(){return Yu}var Gu=V({},er,{key:function(e){if(e.key){var t=Wu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$u[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xu=ke(Gu),Ku=V({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dl=ke(Ku),Ju=V({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),qu=ke(Ju),Zu=V({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=ke(Zu),tp=V({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),np=ke(tp),rp=[9,13,27,32],va=Qe&&"CompositionEvent"in window,In=null;Qe&&"documentMode"in document&&(In=document.documentMode);var ip=Qe&&"TextEvent"in window&&!In,nc=Qe&&(!va||In&&8<In&&11>=In),ul=" ",pl=!1;function rc(e,t){switch(e){case"keyup":return rp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function op(e,t){switch(e){case"compositionend":return ic(t);case"keypress":return t.which!==32?null:(pl=!0,ul);case"textInput":return e=t.data,e===ul&&pl?null:e;default:return null}}function ap(e,t){if(Ut)return e==="compositionend"||!va&&rc(e,t)?(e=tc(),Cr=ua=nt=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nc&&t.locale!=="ko"?null:t.data;default:return null}}var lp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lp[e.type]:t==="textarea"}function oc(e,t,n,r){_s(r),t=Or(t,"onChange"),0<t.length&&(n=new pa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,On=null;function sp(e){gc(e,0)}function ci(e){var t=Ot(e);if(Ls(t))return e}function cp(e,t){if(e==="change")return t}var ac=!1;if(Qe){var Di;if(Qe){var Ui="oninput"in document;if(!Ui){var vl=document.createElement("div");vl.setAttribute("oninput","return;"),Ui=typeof vl.oninput=="function"}Di=Ui}else Di=!1;ac=Di&&(!document.documentMode||9<document.documentMode)}function ml(){Ln&&(Ln.detachEvent("onpropertychange",lc),On=Ln=null)}function lc(e){if(e.propertyName==="value"&&ci(On)){var t=[];oc(t,On,e,aa(e)),Rs(sp,t)}}function dp(e,t,n){e==="focusin"?(ml(),Ln=t,On=n,Ln.attachEvent("onpropertychange",lc)):e==="focusout"&&ml()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(On)}function pp(e,t){if(e==="click")return ci(t)}function fp(e,t){if(e==="input"||e==="change")return ci(t)}function vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:vp;function Vn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!to.call(t,i)||!Ae(e[i],t[i]))return!1}return!0}function gl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hl(e,t){var n=gl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gl(n)}}function sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cc(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mp(e){var t=cc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sc(n.ownerDocument.documentElement,n)){if(r!==null&&ma(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hl(n,o);var l=hl(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gp=Qe&&"documentMode"in document&&11>=document.documentMode,Ft=null,ko=null,Tn=null,bo=!1;function xl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bo||Ft==null||Ft!==Mr(r)||(r=Ft,"selectionStart"in r&&ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Vn(Tn,r)||(Tn=r,r=Or(ko,"onSelect"),0<r.length&&(t=new pa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rt={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Fi={},dc={};Qe&&(dc=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function di(e){if(Fi[e])return Fi[e];if(!Rt[e])return e;var t=Rt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dc)return Fi[e]=t[n];return e}var uc=di("animationend"),pc=di("animationiteration"),fc=di("animationstart"),vc=di("transitionend"),mc=new Map,yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){mc.set(e,t),Pt(t,[e])}for(var Ri=0;Ri<yl.length;Ri++){var Oi=yl[Ri],hp=Oi.toLowerCase(),xp=Oi[0].toUpperCase()+Oi.slice(1);mt(hp,"on"+xp)}mt(uc,"onAnimationEnd");mt(pc,"onAnimationIteration");mt(fc,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(vc,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function wl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hu(r,t,void 0,e),e.currentTarget=null}function gc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;wl(i,s,u),o=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;wl(i,s,u),o=c}}}if(_r)throw e=ho,_r=!1,ho=null,e}function D(e,t){var n=t[No];n===void 0&&(n=t[No]=new Set);var r=e+"__bubble";n.has(r)||(hc(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),hc(n,e,r,t)}var vr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[vr]){e[vr]=!0,js.forEach(function(n){n!=="selectionchange"&&(yp.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vr]||(t[vr]=!0,Vi("selectionchange",!1,t))}}function hc(e,t,n,r){switch(ec(t)){case 1:var i=Pu;break;case 4:i=Mu;break;default:i=da}n=i.bind(null,t,n,e),i=void 0,!go||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;s!==null;){if(l=St(s),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Rs(function(){var u=o,g=aa(n),v=[];e:{var m=mc.get(e);if(m!==void 0){var y=pa,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":y=Xu;break;case"focusin":w="focus",y=_i;break;case"focusout":w="blur",y=_i;break;case"beforeblur":case"afterblur":y=_i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Du;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=qu;break;case uc:case pc:case fc:y=Ru;break;case vc:y=ep;break;case"scroll":y=Au;break;case"wheel":y=np;break;case"copy":case"cut":case"paste":y=Vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=dl}var k=(t&4)!==0,j=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var d=u,f;d!==null;){f=d;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,p!==null&&(h=Dn(d,p),h!=null&&k.push(Wn(d,h,f)))),j)break;d=d.return}0<k.length&&(m=new y(m,w,null,n,g),v.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==vo&&(w=n.relatedTarget||n.fromElement)&&(St(w)||w[Ye]))break e;if((y||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?St(w):null,w!==null&&(j=Mt(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(k=sl,h="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=dl,h="onPointerLeave",p="onPointerEnter",d="pointer"),j=y==null?m:Ot(y),f=w==null?m:Ot(w),m=new k(h,d+"leave",y,n,g),m.target=j,m.relatedTarget=f,h=null,St(g)===u&&(k=new k(p,d+"enter",w,n,g),k.target=f,k.relatedTarget=j,h=k),j=h,y&&w)t:{for(k=y,p=w,d=0,f=k;f;f=At(f))d++;for(f=0,h=p;h;h=At(h))f++;for(;0<d-f;)k=At(k),d--;for(;0<f-d;)p=At(p),f--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break t;k=At(k),p=At(p)}k=null}else k=null;y!==null&&kl(v,m,y,k,!1),w!==null&&j!==null&&kl(v,j,w,k,!0)}}e:{if(m=u?Ot(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var b=cp;else if(fl(m))if(ac)b=fp;else{b=up;var E=dp}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=pp);if(b&&(b=b(e,u))){oc(v,b,n,g);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&so(m,"number",m.value)}switch(E=u?Ot(u):window,e){case"focusin":(fl(E)||E.contentEditable==="true")&&(Ft=E,ko=u,Tn=null);break;case"focusout":Tn=ko=Ft=null;break;case"mousedown":bo=!0;break;case"contextmenu":case"mouseup":case"dragend":bo=!1,xl(v,n,g);break;case"selectionchange":if(gp)break;case"keydown":case"keyup":xl(v,n,g)}var N;if(va)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ut?rc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(nc&&n.locale!=="ko"&&(Ut||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ut&&(N=tc()):(nt=g,ua="value"in nt?nt.value:nt.textContent,Ut=!0)),E=Or(u,L),0<E.length&&(L=new cl(L,e,null,n,g),v.push({event:L,listeners:E}),N?L.data=N:(N=ic(n),N!==null&&(L.data=N)))),(N=ip?op(e,n):ap(e,n))&&(u=Or(u,"onBeforeInput"),0<u.length&&(g=new cl("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:u}),g.data=N))}gc(v,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dn(e,n),o!=null&&r.unshift(Wn(e,o,i)),o=Dn(e,t),o!=null&&r.push(Wn(e,o,i))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kl(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Dn(n,o),c!=null&&l.unshift(Wn(n,c,s))):i||(c=Dn(n,o),c!=null&&l.push(Wn(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var wp=/\r\n?/g,kp=/\u0000|\uFFFD/g;function bl(e){return(typeof e=="string"?e:""+e).replace(wp,`
`).replace(kp,"")}function mr(e,t,n){if(t=bl(t),bl(e)!==t&&n)throw Error(x(425))}function Vr(){}var So=null,jo=null;function Co(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eo=typeof setTimeout=="function"?setTimeout:void 0,bp=typeof clearTimeout=="function"?clearTimeout:void 0,Sl=typeof Promise=="function"?Promise:void 0,Sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Sl<"u"?function(e){return Sl.resolve(null).then(e).catch(jp)}:Eo;function jp(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Rn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Ue="__reactFiber$"+un,$n="__reactProps$"+un,Ye="__reactContainer$"+un,No="__reactEvents$"+un,Cp="__reactListeners$"+un,Ep="__reactHandles$"+un;function St(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jl(e);e!==null;){if(n=e[Ue])return n;e=jl(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Ue]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ui(e){return e[$n]||null}var Io=[],Vt=-1;function gt(e){return{current:e}}function U(e){0>Vt||(e.current=Io[Vt],Io[Vt]=null,Vt--)}function _(e,t){Vt++,Io[Vt]=e.current,e.current=t}var vt={},oe=gt(vt),pe=gt(!1),It=vt;function nn(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function Hr(){U(pe),U(oe)}function Cl(e,t,n){if(oe.current!==vt)throw Error(x(168));_(oe,t),_(pe,n)}function xc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,du(e)||"Unknown",i));return V({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,It=oe.current,_(oe,e),_(pe,pe.current),!0}function El(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=xc(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,U(pe),U(oe),_(oe,e)):U(pe),_(pe,n)}var Ve=null,pi=!1,$i=!1;function yc(e){Ve===null?Ve=[e]:Ve.push(e)}function Np(e){pi=!0,yc(e)}function ht(){if(!$i&&Ve!==null){$i=!0;var e=0,t=A;try{var n=Ve;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,pi=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),Ws(la,ht),i}finally{A=t,$i=!1}}return null}var Ht=[],Wt=0,$r=null,Qr=0,be=[],Se=0,Lt=null,He=1,We="";function wt(e,t){Ht[Wt++]=Qr,Ht[Wt++]=$r,$r=e,Qr=t}function wc(e,t,n){be[Se++]=He,be[Se++]=We,be[Se++]=Lt,Lt=e;var r=He;e=We;var i=32-Pe(r)-1;r&=~(1<<i),n+=1;var o=32-Pe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,He=1<<32-Pe(t)+i|n<<i|r,We=o+e}else He=1<<o|n<<i|r,We=e}function ga(e){e.return!==null&&(wt(e,1),wc(e,1,0))}function ha(e){for(;e===$r;)$r=Ht[--Wt],Ht[Wt]=null,Qr=Ht[--Wt],Ht[Wt]=null;for(;e===Lt;)Lt=be[--Se],be[Se]=null,We=be[--Se],be[Se]=null,He=be[--Se],be[Se]=null}var xe=null,he=null,F=!1,ze=null;function kc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,he=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,he=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function To(e){if(F){var t=he;if(t){var n=t;if(!Nl(e,t)){if(Lo(e))throw Error(x(418));t=st(n.nextSibling);var r=xe;t&&Nl(e,t)?kc(r,n):(e.flags=e.flags&-4097|2,F=!1,xe=e)}}else{if(Lo(e))throw Error(x(418));e.flags=e.flags&-4097|2,F=!1,xe=e}}}function Il(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function gr(e){if(e!==xe)return!1;if(!F)return Il(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Co(e.type,e.memoizedProps)),t&&(t=he)){if(Lo(e))throw bc(),Error(x(418));for(;t;)kc(e,t),t=st(t.nextSibling)}if(Il(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=xe?st(e.stateNode.nextSibling):null;return!0}function bc(){for(var e=he;e;)e=st(e.nextSibling)}function rn(){he=xe=null,F=!1}function xa(e){ze===null?ze=[e]:ze.push(e)}var Ip=Ke.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ll(e){var t=e._init;return t(e._payload)}function Sc(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=pt(p,d),p.index=0,p.sibling=null,p}function o(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,f,h){return d===null||d.tag!==6?(d=qi(f,p.mode,h),d.return=p,d):(d=i(d,f),d.return=p,d)}function c(p,d,f,h){var b=f.type;return b===Dt?g(p,d,f.props.children,h,f.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qe&&Ll(b)===d.type)?(h=i(d,f.props),h.ref=yn(p,d,f),h.return=p,h):(h=Pr(f.type,f.key,f.props,null,p.mode,h),h.ref=yn(p,d,f),h.return=p,h)}function u(p,d,f,h){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Zi(f,p.mode,h),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function g(p,d,f,h,b){return d===null||d.tag!==7?(d=Nt(f,p.mode,h,b),d.return=p,d):(d=i(d,f),d.return=p,d)}function v(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=qi(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ar:return f=Pr(d.type,d.key,d.props,null,p.mode,f),f.ref=yn(p,null,d),f.return=p,f;case _t:return d=Zi(d,p.mode,f),d.return=p,d;case qe:var h=d._init;return v(p,h(d._payload),f)}if(Sn(d)||vn(d))return d=Nt(d,p.mode,f,null),d.return=p,d;hr(p,d)}return null}function m(p,d,f,h){var b=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:s(p,d,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:return f.key===b?c(p,d,f,h):null;case _t:return f.key===b?u(p,d,f,h):null;case qe:return b=f._init,m(p,d,b(f._payload),h)}if(Sn(f)||vn(f))return b!==null?null:g(p,d,f,h,null);hr(p,f)}return null}function y(p,d,f,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return p=p.get(f)||null,s(d,p,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ar:return p=p.get(h.key===null?f:h.key)||null,c(d,p,h,b);case _t:return p=p.get(h.key===null?f:h.key)||null,u(d,p,h,b);case qe:var E=h._init;return y(p,d,f,E(h._payload),b)}if(Sn(h)||vn(h))return p=p.get(f)||null,g(d,p,h,b,null);hr(d,h)}return null}function w(p,d,f,h){for(var b=null,E=null,N=d,L=d=0,W=null;N!==null&&L<f.length;L++){N.index>L?(W=N,N=null):W=N.sibling;var P=m(p,N,f[L],h);if(P===null){N===null&&(N=W);break}e&&N&&P.alternate===null&&t(p,N),d=o(P,d,L),E===null?b=P:E.sibling=P,E=P,N=W}if(L===f.length)return n(p,N),F&&wt(p,L),b;if(N===null){for(;L<f.length;L++)N=v(p,f[L],h),N!==null&&(d=o(N,d,L),E===null?b=N:E.sibling=N,E=N);return F&&wt(p,L),b}for(N=r(p,N);L<f.length;L++)W=y(N,p,L,f[L],h),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?L:W.key),d=o(W,d,L),E===null?b=W:E.sibling=W,E=W);return e&&N.forEach(function(Ie){return t(p,Ie)}),F&&wt(p,L),b}function k(p,d,f,h){var b=vn(f);if(typeof b!="function")throw Error(x(150));if(f=b.call(f),f==null)throw Error(x(151));for(var E=b=null,N=d,L=d=0,W=null,P=f.next();N!==null&&!P.done;L++,P=f.next()){N.index>L?(W=N,N=null):W=N.sibling;var Ie=m(p,N,P.value,h);if(Ie===null){N===null&&(N=W);break}e&&N&&Ie.alternate===null&&t(p,N),d=o(Ie,d,L),E===null?b=Ie:E.sibling=Ie,E=Ie,N=W}if(P.done)return n(p,N),F&&wt(p,L),b;if(N===null){for(;!P.done;L++,P=f.next())P=v(p,P.value,h),P!==null&&(d=o(P,d,L),E===null?b=P:E.sibling=P,E=P);return F&&wt(p,L),b}for(N=r(p,N);!P.done;L++,P=f.next())P=y(N,p,L,P.value,h),P!==null&&(e&&P.alternate!==null&&N.delete(P.key===null?L:P.key),d=o(P,d,L),E===null?b=P:E.sibling=P,E=P);return e&&N.forEach(function(pn){return t(p,pn)}),F&&wt(p,L),b}function j(p,d,f,h){if(typeof f=="object"&&f!==null&&f.type===Dt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:e:{for(var b=f.key,E=d;E!==null;){if(E.key===b){if(b=f.type,b===Dt){if(E.tag===7){n(p,E.sibling),d=i(E,f.props.children),d.return=p,p=d;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qe&&Ll(b)===E.type){n(p,E.sibling),d=i(E,f.props),d.ref=yn(p,E,f),d.return=p,p=d;break e}n(p,E);break}else t(p,E);E=E.sibling}f.type===Dt?(d=Nt(f.props.children,p.mode,h,f.key),d.return=p,p=d):(h=Pr(f.type,f.key,f.props,null,p.mode,h),h.ref=yn(p,d,f),h.return=p,p=h)}return l(p);case _t:e:{for(E=f.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Zi(f,p.mode,h),d.return=p,p=d}return l(p);case qe:return E=f._init,j(p,d,E(f._payload),h)}if(Sn(f))return w(p,d,f,h);if(vn(f))return k(p,d,f,h);hr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,f),d.return=p,p=d):(n(p,d),d=qi(f,p.mode,h),d.return=p,p=d),l(p)):n(p,d)}return j}var on=Sc(!0),jc=Sc(!1),Yr=gt(null),Gr=null,$t=null,ya=null;function wa(){ya=$t=Gr=null}function ka(e){var t=Yr.current;U(Yr),e._currentValue=t}function Bo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qt(e,t){Gr=e,ya=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ue=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(ya!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Gr===null)throw Error(x(308));$t=e,Gr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var jt=null;function ba(e){jt===null?jt=[e]:jt.push(e)}function Cc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ba(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function Sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ge(e,n)}return i=r.interleaved,i===null?(t.next=t,ba(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ge(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}function Tl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xr(e,t,n,r){var i=e.updateQueue;Ze=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=u:s.next=u,g.lastBaseUpdate=c))}if(o!==null){var v=i.baseState;l=0,g=u=c=null,s=o;do{var m=s.lane,y=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){v=w.call(y,v,m);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(y,v,m):w,m==null)break e;v=V({},v,m);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(u=g=y,c=v):g=g.next=y,l|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(c=v),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bt|=l,e.lanes=l,e.memoizedState=v}}function Bl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var nr={},Re=gt(nr),Qn=gt(nr),Yn=gt(nr);function Ct(e){if(e===nr)throw Error(x(174));return e}function ja(e,t){switch(_(Yn,t),_(Qn,e),_(Re,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uo(t,e)}U(Re),_(Re,t)}function an(){U(Re),U(Qn),U(Yn)}function Nc(e){Ct(Yn.current);var t=Ct(Re.current),n=uo(t,e.type);t!==n&&(_(Qn,e),_(Re,n))}function Ca(e){Qn.current===e&&(U(Re),U(Qn))}var R=gt(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=[];function Ea(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var Ir=Ke.ReactCurrentDispatcher,Yi=Ke.ReactCurrentBatchConfig,Tt=0,O=null,G=null,J=null,Jr=!1,Bn=!1,Gn=0,Lp=0;function ne(){throw Error(x(321))}function Na(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Ia(e,t,n,r,i,o){if(Tt=o,O=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?Pp:Mp,e=n(r,i),Bn){o=0;do{if(Bn=!1,Gn=0,25<=o)throw Error(x(301));o+=1,J=G=null,t.updateQueue=null,Ir.current=Ap,e=n(r,i)}while(Bn)}if(Ir.current=qr,t=G!==null&&G.next!==null,Tt=0,J=G=O=null,Jr=!1,t)throw Error(x(300));return e}function La(){var e=Gn!==0;return Gn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?O.memoizedState=J=e:J=J.next=e,J}function Ne(){if(G===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?O.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(x(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?O.memoizedState=J=e:J=J.next=e}return J}function Xn(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=Ne(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=G,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,c=null,u=o;do{var g=u.lane;if((Tt&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var v={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=v,l=r):c=c.next=v,O.lanes|=g,Bt|=g}u=u.next}while(u!==null&&u!==o);c===null?l=r:c.next=s,Ae(r,t.memoizedState)||(ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,O.lanes|=o,Bt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xi(e){var t=Ne(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ae(o,t.memoizedState)||(ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ic(){}function Lc(e,t){var n=O,r=Ne(),i=t(),o=!Ae(r.memoizedState,i);if(o&&(r.memoizedState=i,ue=!0),r=r.queue,Ta(zc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Kn(9,Bc.bind(null,n,r,i,t),void 0,null),q===null)throw Error(x(349));Tt&30||Tc(n,t,i)}return i}function Tc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bc(e,t,n,r){t.value=n,t.getSnapshot=r,Pc(t)&&Mc(e)}function zc(e,t,n){return n(function(){Pc(t)&&Mc(e)})}function Pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function Mc(e){var t=Ge(e,1);t!==null&&Me(t,e,1,-1)}function zl(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=zp.bind(null,O,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ac(){return Ne().memoizedState}function Lr(e,t,n,r){var i=De();O.flags|=e,i.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var i=Ne();r=r===void 0?null:r;var o=void 0;if(G!==null){var l=G.memoizedState;if(o=l.destroy,r!==null&&Na(r,l.deps)){i.memoizedState=Kn(t,n,o,r);return}}O.flags|=e,i.memoizedState=Kn(1|t,n,o,r)}function Pl(e,t){return Lr(8390656,8,e,t)}function Ta(e,t){return fi(2048,8,e,t)}function _c(e,t){return fi(4,2,e,t)}function Dc(e,t){return fi(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,Uc.bind(null,t,e),n)}function Ba(){}function Rc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vc(e,t,n){return Tt&21?(Ae(n,t)||(n=Ys(),O.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n)}function Tp(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{A=n,Yi.transition=r}}function Hc(){return Ne().memoizedState}function Bp(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wc(e))$c(t,n);else if(n=Cc(e,t,n,r),n!==null){var i=le();Me(n,e,r,i),Qc(n,t,r)}}function zp(e,t,n){var r=ut(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wc(e))$c(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ae(s,l)){var c=t.interleaved;c===null?(i.next=i,ba(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Cc(e,t,i,r),n!==null&&(i=le(),Me(n,e,r,i),Qc(n,t,r))}}function Wc(e){var t=e.alternate;return e===O||t!==null&&t===O}function $c(e,t){Bn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}var qr={readContext:Ee,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},Pp={readContext:Ee,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Pl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,Uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bp.bind(null,O,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:zl,useDebugValue:Ba,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=zl(!1),t=e[0];return e=Tp.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=O,i=De();if(F){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),q===null)throw Error(x(349));Tt&30||Tc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Pl(zc.bind(null,r,o,e),[e]),r.flags|=2048,Kn(9,Bc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=De(),t=q.identifierPrefix;if(F){var n=We,r=He;n=(r&~(1<<32-Pe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mp={readContext:Ee,useCallback:Rc,useContext:Ee,useEffect:Ta,useImperativeHandle:Fc,useInsertionEffect:_c,useLayoutEffect:Dc,useMemo:Oc,useReducer:Gi,useRef:Ac,useState:function(){return Gi(Xn)},useDebugValue:Ba,useDeferredValue:function(e){var t=Ne();return Vc(t,G.memoizedState,e)},useTransition:function(){var e=Gi(Xn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Lc,useId:Hc,unstable_isNewReconciler:!1},Ap={readContext:Ee,useCallback:Rc,useContext:Ee,useEffect:Ta,useImperativeHandle:Fc,useInsertionEffect:_c,useLayoutEffect:Dc,useMemo:Oc,useReducer:Xi,useRef:Ac,useState:function(){return Xi(Xn)},useDebugValue:Ba,useDeferredValue:function(e){var t=Ne();return G===null?t.memoizedState=e:Vc(t,G.memoizedState,e)},useTransition:function(){var e=Xi(Xn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Lc,useId:Hc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vi={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),i=ut(e),o=$e(r,i);o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,i),t!==null&&(Me(t,e,i,r),Nr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),i=ut(e),o=$e(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,i),t!==null&&(Me(t,e,i,r),Nr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=ut(e),i=$e(n,r);i.tag=2,t!=null&&(i.callback=t),t=ct(e,i,r),t!==null&&(Me(t,e,r,n),Nr(t,e,r))}};function Ml(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Vn(n,r)||!Vn(i,o):!0}function Yc(e,t,n){var r=!1,i=vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(i=fe(t)?It:oe.current,r=t.contextTypes,o=(r=r!=null)?nn(e,i):vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Al(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function Po(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Sa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ee(o):(o=fe(t)?It:oe.current,i.context=nn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vi.enqueueReplaceState(i,i.state,null),Xr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=cu(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function Gc(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ei||(ei=!0,Wo=r),Mo(e,t)},n}function Xc(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Mo(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _l(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kp.bind(null,e,t,n),t.then(e,e))}function Dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ul(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var Dp=Ke.ReactCurrentOwner,ue=!1;function ae(e,t,n,r){t.child=e===null?jc(t,null,n,r):on(t,e.child,n,r)}function Fl(e,t,n,r,i){n=n.render;var o=t.ref;return qt(t,i),r=Ia(e,t,n,r,o,i),n=La(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(F&&n&&ga(t),t.flags|=1,ae(e,t,r,i),t.child)}function Rl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kc(e,t,o,r,i)):(e=Pr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vn,n(l,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vn(o,r)&&e.ref===t.ref)if(ue=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ue=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Ao(e,t,n,r,i)}function Jc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Yt,ge),ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(Yt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_(Yt,ge),ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_(Yt,ge),ge|=r;return ae(e,t,i,n),t.child}function qc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,i){var o=fe(n)?It:oe.current;return o=nn(t,o),qt(t,i),n=Ia(e,t,n,r,o,i),r=La(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(F&&r&&ga(t),t.flags|=1,ae(e,t,n,i),t.child)}function Ol(e,t,n,r,i){if(fe(n)){var o=!0;Wr(t)}else o=!1;if(qt(t,i),t.stateNode===null)Tr(e,t),Yc(t,n,r),Po(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ee(u):(u=fe(n)?It:oe.current,u=nn(t,u));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Al(t,l,r,u),Ze=!1;var m=t.memoizedState;l.state=m,Xr(t,r,l,i),c=t.memoizedState,s!==r||m!==c||pe.current||Ze?(typeof g=="function"&&(zo(t,n,g,r),c=t.memoizedState),(s=Ze||Ml(t,n,s,r,m,c,u))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ec(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Te(t.type,s),l.props=u,v=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ee(c):(c=fe(n)?It:oe.current,c=nn(t,c));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||m!==c)&&Al(t,l,r,c),Ze=!1,m=t.memoizedState,l.state=m,Xr(t,r,l,i);var w=t.memoizedState;s!==v||m!==w||pe.current||Ze?(typeof y=="function"&&(zo(t,n,y,r),w=t.memoizedState),(u=Ze||Ml(t,n,u,r,m,w,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return _o(e,t,n,r,o,i)}function _o(e,t,n,r,i,o){qc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&El(t,n,!1),Xe(e,t,o);r=t.stateNode,Dp.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=on(t,e.child,null,o),t.child=on(t,null,s,o)):ae(e,t,s,o),t.memoizedState=r.state,i&&El(t,n,!0),t.child}function Zc(e){var t=e.stateNode;t.pendingContext?Cl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cl(e,t.context,!1),ja(e,t.containerInfo)}function Vl(e,t,n,r,i){return rn(),xa(i),t.flags|=256,ae(e,t,n,r),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,n){var r=t.pendingProps,i=R.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_(R,i&1),e===null)return To(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=hi(l,r,0,null),e=Nt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Uo(n),t.memoizedState=Do,e):za(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Up(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=pt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=pt(s,o):(o=Nt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Uo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Do,r}return o=e.child,e=o.sibling,r=pt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function za(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xr(e,t,n,r){return r!==null&&xa(r),on(t,e.child,null,n),e=za(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Up(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(x(422))),xr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=hi({mode:"visible",children:r.children},i,0,null),o=Nt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&on(t,e.child,null,l),t.child.memoizedState=Uo(l),t.memoizedState=Do,o);if(!(t.mode&1))return xr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(x(419)),r=Ki(o,r,void 0),xr(e,t,l,r)}if(s=(l&e.childLanes)!==0,ue||s){if(r=q,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ge(e,i),Me(r,e,i,-1))}return Ua(),r=Ki(Error(x(421))),xr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Jp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,he=st(i.nextSibling),xe=t,F=!0,ze=null,e!==null&&(be[Se++]=He,be[Se++]=We,be[Se++]=Lt,He=e.id,We=e.overflow,Lt=t),t=za(t,r.children),t.flags|=4096,t)}function Hl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bo(e.return,t,n)}function Ji(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function td(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=R.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hl(e,n,t);else if(e.tag===19)Hl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(R,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ji(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Kr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ji(t,!0,n,null,o);break;case"together":Ji(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fp(e,t,n){switch(t.tag){case 3:Zc(t),rn();break;case 5:Nc(t);break;case 1:fe(t.type)&&Wr(t);break;case 4:ja(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_(Yr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(R,R.current&1),t.flags|=128,null):n&t.child.childLanes?ed(e,t,n):(_(R,R.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);_(R,R.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return td(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(R,R.current),r)break;return null;case 22:case 23:return t.lanes=0,Jc(e,t,n)}return Xe(e,t,n)}var nd,Fo,rd,id;nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fo=function(){};rd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ct(Re.current);var o=null;switch(n){case"input":i=ao(e,i),r=ao(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=co(e,i),r=co(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}po(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(An.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(An.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&D("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};id=function(e,t,n,r){n!==r&&(t.flags|=4)};function wn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rp(e,t,n){var r=t.pendingProps;switch(ha(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return fe(t.type)&&Hr(),re(t),null;case 3:return r=t.stateNode,an(),U(pe),U(oe),Ea(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(Yo(ze),ze=null))),Fo(e,t),re(t),null;case 5:Ca(t);var i=Ct(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)rd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return re(t),null}if(e=Ct(Re.current),gr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ue]=t,r[$n]=o,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<Cn.length;i++)D(Cn[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":qa(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":el(r,o),D("invalid",r)}po(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&mr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&mr(r.textContent,s,e),i=["children",""+s]):An.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&D("scroll",r)}switch(n){case"input":lr(r),Za(r,o,!0);break;case"textarea":lr(r),tl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ue]=t,e[$n]=r,nd(e,t,!1,!1),t.stateNode=e;e:{switch(l=fo(n,r),n){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cn.length;i++)D(Cn[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":qa(e,r),i=ao(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),D("invalid",e);break;case"textarea":el(e,r),i=co(e,r),D("invalid",e);break;default:i=r}po(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?As(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ps(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&_n(e,c):typeof c=="number"&&_n(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(An.hasOwnProperty(o)?c!=null&&o==="onScroll"&&D("scroll",e):c!=null&&na(e,o,c,l))}switch(n){case"input":lr(e),Za(e,r,!1);break;case"textarea":lr(e),tl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)id(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Ct(Yn.current),Ct(Re.current),gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(o=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return re(t),null;case 13:if(U(R),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&he!==null&&t.mode&1&&!(t.flags&128))bc(),rn(),t.flags|=98560,o=!1;else if(o=gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Ue]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),o=!1}else ze!==null&&(Yo(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||R.current&1?X===0&&(X=3):Ua())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return an(),Fo(e,t),e===null&&Hn(t.stateNode.containerInfo),re(t),null;case 10:return ka(t.type._context),re(t),null;case 17:return fe(t.type)&&Hr(),re(t),null;case 19:if(U(R),o=t.memoizedState,o===null)return re(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)wn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Kr(e),l!==null){for(t.flags|=128,wn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(R,R.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>sn&&(t.flags|=128,r=!0,wn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!F)return re(t),null}else 2*Q()-o.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,wn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=R.current,_(R,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Da(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Op(e,t){switch(ha(t),t.tag){case 1:return fe(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(),U(pe),U(oe),Ea(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ca(t),null;case 13:if(U(R),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(R),null;case 4:return an(),null;case 10:return ka(t.type._context),null;case 22:case 23:return Da(),null;case 24:return null;default:return null}}var yr=!1,ie=!1,Vp=typeof WeakSet=="function"?WeakSet:Set,S=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Ro(e,t,n){try{n()}catch(r){H(e,t,r)}}var Wl=!1;function Hp(e,t){if(So=Fr,e=cc(),ma(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,u=0,g=0,v=e,m=null;t:for(;;){for(var y;v!==n||i!==0&&v.nodeType!==3||(s=l+i),v!==o||r!==0&&v.nodeType!==3||(c=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(y=v.firstChild)!==null;)m=v,v=y;for(;;){if(v===e)break t;if(m===n&&++u===i&&(s=l),m===o&&++g===r&&(c=l),(y=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=y}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(jo={focusedElem:e,selectionRange:n},Fr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,j=w.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Te(t.type,k),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(h){H(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Wl,Wl=!1,w}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ro(t,n,o)}i=i.next}while(i!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function od(e){var t=e.alternate;t!==null&&(e.alternate=null,od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[$n],delete t[No],delete t[Cp],delete t[Ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function $l(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Vo(e,t,n),e=e.sibling;e!==null;)Vo(e,t,n),e=e.sibling}function Ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ho(e,t,n),e=e.sibling;e!==null;)Ho(e,t,n),e=e.sibling}var Z=null,Be=!1;function Je(e,t,n){for(n=n.child;n!==null;)ld(e,t,n),n=n.sibling}function ld(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:ie||Qt(n,t);case 6:var r=Z,i=Be;Z=null,Je(e,t,n),Z=r,Be=i,Z!==null&&(Be?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(Be?(e=Z,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),Rn(e)):Wi(Z,n.stateNode));break;case 4:r=Z,i=Be,Z=n.stateNode.containerInfo,Be=!0,Je(e,t,n),Z=r,Be=i;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ro(n,t,l),i=i.next}while(i!==r)}Je(e,t,n);break;case 1:if(!ie&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Je(e,t,n),ie=r):Je(e,t,n);break;default:Je(e,t,n)}}function Ql(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vp),t.forEach(function(r){var i=qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Z=s.stateNode,Be=!1;break e;case 3:Z=s.stateNode.containerInfo,Be=!0;break e;case 4:Z=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(Z===null)throw Error(x(160));ld(o,l,i),Z=null,Be=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){H(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sd(t,e),t=t.sibling}function sd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),_e(e),r&4){try{zn(3,e,e.return),mi(3,e)}catch(k){H(e,e.return,k)}try{zn(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:Le(t,e),_e(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(Le(t,e),_e(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var i=e.stateNode;try{_n(i,"")}catch(k){H(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ts(i,o),fo(s,l);var u=fo(s,o);for(l=0;l<c.length;l+=2){var g=c[l],v=c[l+1];g==="style"?As(i,v):g==="dangerouslySetInnerHTML"?Ps(i,v):g==="children"?_n(i,v):na(i,g,v,u)}switch(s){case"input":lo(i,o);break;case"textarea":Bs(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Gt(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Gt(i,!!o.multiple,o.defaultValue,!0):Gt(i,!!o.multiple,o.multiple?[]:"",!1))}i[$n]=o}catch(k){H(e,e.return,k)}}break;case 6:if(Le(t,e),_e(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){H(e,e.return,k)}}break;case 3:if(Le(t,e),_e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:Le(t,e),_e(e);break;case 13:Le(t,e),_e(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Aa=Q())),r&4&&Ql(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(u=ie)||g,Le(t,e),ie=u):Le(t,e),_e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(v=S=g;S!==null;){switch(m=S,y=m.child,m.tag){case 0:case 11:case 14:case 15:zn(4,m,m.return);break;case 1:Qt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){H(r,n,k)}}break;case 5:Qt(m,m.return);break;case 22:if(m.memoizedState!==null){Gl(v);continue}}y!==null?(y.return=m,S=y):Gl(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=v.stateNode,c=v.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Ms("display",l))}catch(k){H(e,e.return,k)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(k){H(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Le(t,e),_e(e),r&4&&Ql(e);break;case 21:break;default:Le(t,e),_e(e)}}function _e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ad(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_n(i,""),r.flags&=-33);var o=$l(e);Ho(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=$l(e);Vo(e,s,l);break;default:throw Error(x(161))}}catch(c){H(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wp(e,t,n){S=e,cd(e)}function cd(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||yr;if(!l){var s=i.alternate,c=s!==null&&s.memoizedState!==null||ie;s=yr;var u=ie;if(yr=l,(ie=c)&&!u)for(S=i;S!==null;)l=S,c=l.child,l.tag===22&&l.memoizedState!==null?Xl(i):c!==null?(c.return=l,S=c):Xl(i);for(;o!==null;)S=o,cd(o),o=o.sibling;S=i,yr=s,ie=u}Yl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,S=o):Yl(e)}}function Yl(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Bl(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bl(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Rn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||t.flags&512&&Oo(t)}catch(m){H(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Gl(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Xl(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(c){H(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){H(t,i,c)}}var o=t.return;try{Oo(t)}catch(c){H(t,o,c)}break;case 5:var l=t.return;try{Oo(t)}catch(c){H(t,l,c)}}}catch(c){H(t,t.return,c)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var $p=Math.ceil,Zr=Ke.ReactCurrentDispatcher,Pa=Ke.ReactCurrentOwner,Ce=Ke.ReactCurrentBatchConfig,M=0,q=null,Y=null,ee=0,ge=0,Yt=gt(0),X=0,Jn=null,Bt=0,gi=0,Ma=0,Pn=null,de=null,Aa=0,sn=1/0,Oe=null,ei=!1,Wo=null,dt=null,wr=!1,rt=null,ti=0,Mn=0,$o=null,Br=-1,zr=0;function le(){return M&6?Q():Br!==-1?Br:Br=Q()}function ut(e){return e.mode&1?M&2&&ee!==0?ee&-ee:Ip.transition!==null?(zr===0&&(zr=Ys()),zr):(e=A,e!==0||(e=window.event,e=e===void 0?16:ec(e.type)),e):1}function Me(e,t,n,r){if(50<Mn)throw Mn=0,$o=null,Error(x(185));Zn(e,n,r),(!(M&2)||e!==q)&&(e===q&&(!(M&2)&&(gi|=n),X===4&&tt(e,ee)),ve(e,r),n===1&&M===0&&!(t.mode&1)&&(sn=Q()+500,pi&&ht()))}function ve(e,t){var n=e.callbackNode;Iu(e,t);var r=Ur(e,e===q?ee:0);if(r===0)n!==null&&il(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&il(n),t===1)e.tag===0?Np(Kl.bind(null,e)):yc(Kl.bind(null,e)),Sp(function(){!(M&6)&&ht()}),n=null;else{switch(Gs(r)){case 1:n=la;break;case 4:n=$s;break;case 16:n=Dr;break;case 536870912:n=Qs;break;default:n=Dr}n=hd(n,dd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dd(e,t){if(Br=-1,zr=0,M&6)throw Error(x(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Ur(e,e===q?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ni(e,r);else{t=r;var i=M;M|=2;var o=pd();(q!==e||ee!==t)&&(Oe=null,sn=Q()+500,Et(e,t));do try{Gp();break}catch(s){ud(e,s)}while(!0);wa(),Zr.current=o,M=i,Y!==null?t=0:(q=null,ee=0,t=X)}if(t!==0){if(t===2&&(i=xo(e),i!==0&&(r=i,t=Qo(e,i))),t===1)throw n=Jn,Et(e,0),tt(e,r),ve(e,Q()),n;if(t===6)tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qp(i)&&(t=ni(e,r),t===2&&(o=xo(e),o!==0&&(r=o,t=Qo(e,o))),t===1))throw n=Jn,Et(e,0),tt(e,r),ve(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:kt(e,de,Oe);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Aa+500-Q(),10<t)){if(Ur(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Eo(kt.bind(null,e,de,Oe),t);break}kt(e,de,Oe);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Pe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$p(r/1960))-r,10<r){e.timeoutHandle=Eo(kt.bind(null,e,de,Oe),r);break}kt(e,de,Oe);break;case 5:kt(e,de,Oe);break;default:throw Error(x(329))}}}return ve(e,Q()),e.callbackNode===n?dd.bind(null,e):null}function Qo(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=ni(e,t),e!==2&&(t=de,de=n,t!==null&&Yo(t)),e}function Yo(e){de===null?de=e:de.push.apply(de,e)}function Qp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ae(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ma,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pe(t),r=1<<n;e[n]=-1,t&=~r}}function Kl(e){if(M&6)throw Error(x(327));Zt();var t=Ur(e,0);if(!(t&1))return ve(e,Q()),null;var n=ni(e,t);if(e.tag!==0&&n===2){var r=xo(e);r!==0&&(t=r,n=Qo(e,r))}if(n===1)throw n=Jn,Et(e,0),tt(e,t),ve(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,Oe),ve(e,Q()),null}function _a(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(sn=Q()+500,pi&&ht())}}function zt(e){rt!==null&&rt.tag===0&&!(M&6)&&Zt();var t=M;M|=1;var n=Ce.transition,r=A;try{if(Ce.transition=null,A=1,e)return e()}finally{A=r,Ce.transition=n,M=t,!(M&6)&&ht()}}function Da(){ge=Yt.current,U(Yt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bp(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:an(),U(pe),U(oe),Ea();break;case 5:Ca(r);break;case 4:an();break;case 13:U(R);break;case 19:U(R);break;case 10:ka(r.type._context);break;case 22:case 23:Da()}n=n.return}if(q=e,Y=e=pt(e.current,null),ee=ge=t,X=0,Jn=null,Ma=gi=Bt=0,de=Pn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}jt=null}return e}function ud(e,t){do{var n=Y;try{if(wa(),Ir.current=qr,Jr){for(var r=O.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jr=!1}if(Tt=0,J=G=O=null,Bn=!1,Gn=0,Pa.current=null,n===null||n.return===null){X=1,Jn=t,Y=null;break}e:{var o=e,l=n.return,s=n,c=t;if(t=ee,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=s,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Dl(l);if(y!==null){y.flags&=-257,Ul(y,l,s,o,t),y.mode&1&&_l(o,u,t),t=y,c=u;var w=t.updateQueue;if(w===null){var k=new Set;k.add(c),t.updateQueue=k}else w.add(c);break e}else{if(!(t&1)){_l(o,u,t),Ua();break e}c=Error(x(426))}}else if(F&&s.mode&1){var j=Dl(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ul(j,l,s,o,t),xa(ln(c,s));break e}}o=c=ln(c,s),X!==4&&(X=2),Pn===null?Pn=[o]:Pn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Gc(o,c,t);Tl(o,p);break e;case 1:s=c;var d=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(dt===null||!dt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var h=Xc(o,s,t);Tl(o,h);break e}}o=o.return}while(o!==null)}vd(n)}catch(b){t=b,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function pd(){var e=Zr.current;return Zr.current=qr,e===null?qr:e}function Ua(){(X===0||X===3||X===2)&&(X=4),q===null||!(Bt&268435455)&&!(gi&268435455)||tt(q,ee)}function ni(e,t){var n=M;M|=2;var r=pd();(q!==e||ee!==t)&&(Oe=null,Et(e,t));do try{Yp();break}catch(i){ud(e,i)}while(!0);if(wa(),M=n,Zr.current=r,Y!==null)throw Error(x(261));return q=null,ee=0,X}function Yp(){for(;Y!==null;)fd(Y)}function Gp(){for(;Y!==null&&!yu();)fd(Y)}function fd(e){var t=gd(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?vd(e):Y=t,Pa.current=null}function vd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Op(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=Rp(n,t,ge),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function kt(e,t,n){var r=A,i=Ce.transition;try{Ce.transition=null,A=1,Xp(e,t,n,r)}finally{Ce.transition=i,A=r}return null}function Xp(e,t,n,r){do Zt();while(rt!==null);if(M&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Lu(e,o),e===q&&(Y=q=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,hd(Dr,function(){return Zt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var l=A;A=1;var s=M;M|=4,Pa.current=null,Hp(e,n),sd(n,e),mp(jo),Fr=!!So,jo=So=null,e.current=n,Wp(n),wu(),M=s,A=l,Ce.transition=o}else e.current=n;if(wr&&(wr=!1,rt=e,ti=i),o=e.pendingLanes,o===0&&(dt=null),Su(n.stateNode),ve(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ei)throw ei=!1,e=Wo,Wo=null,e;return ti&1&&e.tag!==0&&Zt(),o=e.pendingLanes,o&1?e===$o?Mn++:(Mn=0,$o=e):Mn=0,ht(),null}function Zt(){if(rt!==null){var e=Gs(ti),t=Ce.transition,n=A;try{if(Ce.transition=null,A=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,ti=0,M&6)throw Error(x(331));var i=M;for(M|=4,S=e.current;S!==null;){var o=S,l=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(S=u;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:zn(8,g,o)}var v=g.child;if(v!==null)v.return=g,S=v;else for(;S!==null;){g=S;var m=g.sibling,y=g.return;if(od(g),g===u){S=null;break}if(m!==null){m.return=y,S=m;break}S=y}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}S=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,S=l;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,S=p;break e}S=o.return}}var d=e.current;for(S=d;S!==null;){l=S;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,S=f;else e:for(l=d;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:mi(9,s)}}catch(b){H(s,s.return,b)}if(s===l){S=null;break e}var h=s.sibling;if(h!==null){h.return=s.return,S=h;break e}S=s.return}}if(M=i,ht(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{A=n,Ce.transition=t}}return!1}function Jl(e,t,n){t=ln(n,t),t=Gc(e,t,1),e=ct(e,t,1),t=le(),e!==null&&(Zn(e,1,t),ve(e,t))}function H(e,t,n){if(e.tag===3)Jl(e,e,n);else for(;t!==null;){if(t.tag===3){Jl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=ln(n,e),e=Xc(t,e,1),t=ct(t,e,1),e=le(),t!==null&&(Zn(t,1,e),ve(t,e));break}}t=t.return}}function Kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(ee&n)===n&&(X===4||X===3&&(ee&130023424)===ee&&500>Q()-Aa?Et(e,0):Ma|=n),ve(e,t)}function md(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=le();e=Ge(e,t),e!==null&&(Zn(e,t,n),ve(e,n))}function Jp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),md(e,n)}function qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),md(e,n)}var gd;gd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ue=!1,Fp(e,t,n);ue=!!(e.flags&131072)}else ue=!1,F&&t.flags&1048576&&wc(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var i=nn(t,oe.current);qt(t,n),i=Ia(null,t,r,e,i,n);var o=La();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(o=!0,Wr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sa(t),i.updater=vi,t.stateNode=i,i._reactInternals=t,Po(t,r,e,n),t=_o(null,t,r,!0,o,n)):(t.tag=0,F&&o&&ga(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ef(r),e=Te(r,e),i){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Ol(null,t,r,e,n);break e;case 11:t=Fl(null,t,r,e,n);break e;case 14:t=Rl(null,t,r,Te(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Ao(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Ol(e,t,r,i,n);case 3:e:{if(Zc(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ec(e,t),Xr(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ln(Error(x(423)),t),t=Vl(e,t,r,n,i);break e}else if(r!==i){i=ln(Error(x(424)),t),t=Vl(e,t,r,n,i);break e}else for(he=st(t.stateNode.containerInfo.firstChild),xe=t,F=!0,ze=null,n=jc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===i){t=Xe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Nc(t),e===null&&To(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Co(r,i)?l=null:o!==null&&Co(r,o)&&(t.flags|=32),qc(e,t),ae(e,t,l,n),t.child;case 6:return e===null&&To(t),null;case 13:return ed(e,t,n);case 4:return ja(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=on(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Fl(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,_(Yr,r._currentValue),r._currentValue=l,o!==null)if(Ae(o.value,l)){if(o.children===i.children&&!pe.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=$e(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Bo(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(x(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Bo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qt(t,n),i=Ee(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Te(r,t.pendingProps),i=Te(r.type,i),Rl(e,t,r,i,n);case 15:return Kc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Tr(e,t),t.tag=1,fe(r)?(e=!0,Wr(t)):e=!1,qt(t,n),Yc(t,r,i),Po(t,r,i,n),_o(null,t,r,!0,e,n);case 19:return td(e,t,n);case 22:return Jc(e,t,n)}throw Error(x(156,t.tag))};function hd(e,t){return Ws(e,t)}function Zp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Zp(e,t,n,r)}function Fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ef(e){if(typeof e=="function")return Fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ia)return 11;if(e===oa)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pr(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Fa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Dt:return Nt(n.children,i,o,t);case ra:l=8,i|=8;break;case no:return e=je(12,n,t,i|2),e.elementType=no,e.lanes=o,e;case ro:return e=je(13,n,t,i),e.elementType=ro,e.lanes=o,e;case io:return e=je(19,n,t,i),e.elementType=io,e.lanes=o,e;case Ns:return hi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cs:l=10;break e;case Es:l=9;break e;case ia:l=11;break e;case oa:l=14;break e;case qe:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=je(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function hi(e,t,n,r){return e=je(22,e,r,t),e.elementType=Ns,e.lanes=n,e.stateNode={isHidden:!1},e}function qi(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Zi(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ra(e,t,n,r,i,o,l,s,c){return e=new tf(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sa(o),e}function nf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xd(e){if(!e)return vt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(fe(n))return xc(e,n,t)}return t}function yd(e,t,n,r,i,o,l,s,c){return e=Ra(n,r,!0,e,i,o,l,s,c),e.context=xd(null),n=e.current,r=le(),i=ut(n),o=$e(r,i),o.callback=t??null,ct(n,o,i),e.current.lanes=i,Zn(e,i,r),ve(e,r),e}function xi(e,t,n,r){var i=t.current,o=le(),l=ut(i);return n=xd(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(i,t,l),e!==null&&(Me(e,i,l,o),Nr(e,i,l)),l}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ql(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oa(e,t){ql(e,t),(e=e.alternate)&&ql(e,t)}function rf(){return null}var wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Va(e){this._internalRoot=e}yi.prototype.render=Va.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));xi(e,t,null,null)};yi.prototype.unmount=Va.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){xi(null,e,null,null)}),t[Ye]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Js();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Zs(e)}};function Ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zl(){}function of(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ri(l);o.call(u)}}var l=yd(t,r,e,0,null,!1,!1,"",Zl);return e._reactRootContainer=l,e[Ye]=l.current,Hn(e.nodeType===8?e.parentNode:e),zt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ri(c);s.call(u)}}var c=Ra(e,0,!1,null,null,!1,!1,"",Zl);return e._reactRootContainer=c,e[Ye]=c.current,Hn(e.nodeType===8?e.parentNode:e),zt(function(){xi(t,c,n,r)}),c}function ki(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var c=ri(l);s.call(c)}}xi(t,l,e,i)}else l=of(n,t,e,i,r);return ri(l)}Xs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(sa(t,n|1),ve(t,Q()),!(M&6)&&(sn=Q()+500,ht()))}break;case 13:zt(function(){var r=Ge(e,1);if(r!==null){var i=le();Me(r,e,1,i)}}),Oa(e,1)}};ca=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=le();Me(t,e,134217728,n)}Oa(e,134217728)}};Ks=function(e){if(e.tag===13){var t=ut(e),n=Ge(e,t);if(n!==null){var r=le();Me(n,e,t,r)}Oa(e,t)}};Js=function(){return A};qs=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};mo=function(e,t,n){switch(t){case"input":if(lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ui(r);if(!i)throw Error(x(90));Ls(r),lo(r,i)}}}break;case"textarea":Bs(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};Us=_a;Fs=zt;var af={usingClientEntryPoint:!1,Events:[tr,Ot,ui,_s,Ds,_a]},kn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lf={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vs(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{li=kr.inject(lf),Fe=kr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ha(t))throw Error(x(200));return nf(e,t,null,n)};we.createRoot=function(e,t){if(!Ha(e))throw Error(x(299));var n=!1,r="",i=wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ra(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Va(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Vs(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return zt(e)};we.hydrate=function(e,t,n){if(!wi(t))throw Error(x(200));return ki(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Ha(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=wd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=yd(t,null,e,1,n??null,i,!1,o,l),e[Ye]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yi(t)};we.render=function(e,t,n){if(!wi(t))throw Error(x(200));return ki(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!wi(e))throw Error(x(40));return e._reactRootContainer?(zt(function(){ki(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};we.unstable_batchedUpdates=_a;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wi(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return ki(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function kd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kd)}catch(e){console.error(e)}}kd(),ks.exports=we;var sf=ks.exports,es=sf;eo.createRoot=es.createRoot,eo.hydrateRoot=es.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(null,arguments)}var it;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(it||(it={}));const ts="popstate";function cf(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return Go("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sd(i)}return uf(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function df(){return Math.random().toString(36).substr(2,8)}function ns(e,t){return{usr:e.state,key:e.key,idx:t}}function Go(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bi(t):t,{state:n,key:t&&t.key||r||df()})}function Sd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function bi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uf(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=it.Pop,c=null,u=g();u==null&&(u=0,l.replaceState(ii({},l.state,{idx:u}),""));function g(){return(l.state||{idx:null}).idx}function v(){s=it.Pop;let j=g(),p=j==null?null:j-u;u=j,c&&c({action:s,location:k.location,delta:p})}function m(j,p){s=it.Push;let d=Go(k.location,j,p);u=g()+1;let f=ns(d,u),h=k.createHref(d);try{l.pushState(f,"",h)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(h)}o&&c&&c({action:s,location:k.location,delta:1})}function y(j,p){s=it.Replace;let d=Go(k.location,j,p);u=g();let f=ns(d,u),h=k.createHref(d);l.replaceState(f,"",h),o&&c&&c({action:s,location:k.location,delta:0})}function w(j){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:Sd(j);return d=d.replace(/ $/,"%20"),me(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return s},get location(){return e(i,l)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ts,v),c=j,()=>{i.removeEventListener(ts,v),c=null}},createHref(j){return t(i,j)},createURL:w,encodeLocation(j){let p=w(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(j){return l.go(j)}};return k}var rs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rs||(rs={}));function pf(e,t,n){return n===void 0&&(n="/"),ff(e,t,n)}function ff(e,t,n,r){let i=typeof t=="string"?bi(t):t,o=Ed(i.pathname||"/",n);if(o==null)return null;let l=jd(e);vf(l);let s=null,c=Ef(o);for(let u=0;s==null&&u<l.length;++u)s=Sf(l[u],c);return s}function jd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(me(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=en([r,c.relativePath]),g=n.concat(c);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jd(o.children,t,g,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:kf(u,o.index),routesMeta:g})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let c of Cd(o.path))i(o,l,c)}),t}function Cd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Cd(r.join("/")),s=[];return s.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function vf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mf=/^:[\w-]+$/,gf=3,hf=2,xf=1,yf=10,wf=-2,is=e=>e==="*";function kf(e,t){let n=e.split("/"),r=n.length;return n.some(is)&&(r+=wf),t&&(r+=hf),n.filter(i=>!is(i)).reduce((i,o)=>i+(mf.test(o)?gf:o===""?xf:yf),r)}function bf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Sf(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",v=jf({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),m=c.route;if(!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:en([o,v.pathname]),pathnameBase:If(en([o,v.pathnameBase])),route:m}),v.pathnameBase!=="/"&&(o=en([o,v.pathnameBase]))}return l}function jf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Cf(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,g,v)=>{let{paramName:m,isOptional:y}=g;if(m==="*"){let k=s[v]||"";l=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const w=s[v];return y&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Cf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ef(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ed(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Nf=e=>e.replace(/\/\/+/g,"/"),en=e=>Nf(e.join("/")),If=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function Lf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nd=["post","put","patch","delete"];new Set(Nd);const Tf=["get",...Nd];new Set(Tf);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(null,arguments)}const Bf=I.createContext(null),zf=I.createContext(null),Id=I.createContext(null),Si=I.createContext(null),ji=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Ld=I.createContext(null);function Wa(){return I.useContext(Si)!=null}function Pf(){return Wa()||me(!1),I.useContext(Si).location}function Mf(e,t){return Af(e,t)}function Af(e,t,n,r){Wa()||me(!1);let{navigator:i}=I.useContext(Id),{matches:o}=I.useContext(ji),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Pf(),g;if(t){var v;let j=typeof t=="string"?bi(t):t;c==="/"||(v=j.pathname)!=null&&v.startsWith(c)||me(!1),g=j}else g=u;let m=g.pathname||"/",y=m;if(c!=="/"){let j=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(j.length).join("/")}let w=pf(e,{pathname:y}),k=Rf(w&&w.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:en([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:en([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&k?I.createElement(Si.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:it.Pop}},k):k}function _f(){let e=Wf(),t=Lf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,null)}const Df=I.createElement(_f,null);class Uf extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(ji.Provider,{value:this.props.routeContext},I.createElement(Ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ff(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Bf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(ji.Provider,{value:t},r)}function Rf(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let g=l.findIndex(v=>v.route.id&&(s==null?void 0:s[v.route.id])!==void 0);g>=0||me(!1),l=l.slice(0,Math.min(l.length,g+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(u=g),v.route.id){let{loaderData:m,errors:y}=n,w=v.route.loader&&m[v.route.id]===void 0&&(!y||y[v.route.id]===void 0);if(v.route.lazy||w){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((g,v,m)=>{let y,w=!1,k=null,j=null;n&&(y=s&&v.route.id?s[v.route.id]:void 0,k=v.route.errorElement||Df,c&&(u<0&&m===0?($f("route-fallback"),w=!0,j=null):u===m&&(w=!0,j=v.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,m+1)),d=()=>{let f;return y?f=k:w?f=j:v.route.Component?f=I.createElement(v.route.Component,null):v.route.element?f=v.route.element:f=g,I.createElement(Ff,{match:v,routeContext:{outlet:g,matches:p,isDataRoute:n!=null},children:f})};return n&&(v.route.ErrorBoundary||v.route.errorElement||m===0)?I.createElement(Uf,{location:n.location,revalidation:n.revalidation,component:k,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Td=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Td||{});function Of(e){let t=I.useContext(zf);return t||me(!1),t}function Vf(e){let t=I.useContext(ji);return t||me(!1),t}function Hf(e){let t=Vf(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function Wf(){var e;let t=I.useContext(Ld),n=Of(Td.UseRouteError),r=Hf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const os={};function $f(e,t,n){os[e]||(os[e]=!0)}function Qf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function bt(e){me(!1)}function Yf(e){let{basename:t="/",children:n=null,location:r,navigationType:i=it.Pop,navigator:o,static:l=!1,future:s}=e;Wa()&&me(!1);let c=t.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:c,navigator:o,static:l,future:oi({v7_relativeSplatPath:!1},s)}),[c,s,o,l]);typeof r=="string"&&(r=bi(r));let{pathname:g="/",search:v="",hash:m="",state:y=null,key:w="default"}=r,k=I.useMemo(()=>{let j=Ed(g,c);return j==null?null:{location:{pathname:j,search:v,hash:m,state:y,key:w},navigationType:i}},[c,g,v,m,y,w,i]);return k==null?null:I.createElement(Id.Provider,{value:u},I.createElement(Si.Provider,{children:n,value:k}))}function Gf(e){let{children:t,location:n}=e;return Mf(Xo(t),n)}new Promise(()=>{});function Xo(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let o=[...t,i];if(r.type===I.Fragment){n.push.apply(n,Xo(r.props.children,o));return}r.type!==bt&&me(!1),!r.props.index||!r.props.children||me(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Xo(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Xf="6";try{window.__reactRouterVersion=Xf}catch{}const Kf="startTransition",as=Kd[Kf];function Jf(e){let{basename:t,children:n,future:r,window:i}=e,o=I.useRef();o.current==null&&(o.current=cf({window:i,v5Compat:!0}));let l=o.current,[s,c]=I.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},g=I.useCallback(v=>{u&&as?as(()=>c(v)):c(v)},[c,u]);return I.useLayoutEffect(()=>l.listen(g),[l,g]),I.useEffect(()=>Qf(r),[r]),I.createElement(Yf,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}var ls;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ls||(ls={}));var ss;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ss||(ss={}));function cs(){const e=I.useRef(null);return I.useEffect(()=>{const t=document.querySelectorAll("#pinInputs input");function n(l,s){l.value=l.value.replace(/[^0-9]/g,"").slice(-1),l.value&&s<5&&t[s+1].focus(),i()}function r(l,s){l.key==="Backspace"&&!t[s].value&&s>0&&(t[s-1].focus(),t[s-1].value="",i()),l.key==="Enter"&&o()}function i(){let l="";t.forEach(s=>l+=s.value),document.getElementById("pinSubmitBtn").disabled=l.length!==6}function o(){let l="";t.forEach(s=>l+=s.value),l==="272026"?(sessionStorage.setItem("pinVerified","1"),document.getElementById("pinOverlay").classList.add("hidden"),document.body.focus()):(document.getElementById("pinError").classList.add("show"),t.forEach(s=>{s.classList.add("error"),s.value=""}),setTimeout(()=>{t.forEach(s=>s.classList.remove("error")),document.getElementById("pinError").classList.remove("show")},600),t[0].focus())}t.forEach((l,s)=>{l.oninput=function(){n(this,s)},l.onkeydown=function(c){r(c,s)},l.onfocus=function(){this.select()}}),sessionStorage.getItem("pinVerified")==="1"?document.getElementById("pinOverlay").classList.add("hidden"):setTimeout(()=>t[0].focus(),100)},[]),I.useEffect(()=>{const t=["https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js","https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js","https://www.gstatic.com/firebasejs/10.12.0/firebase-storage-compat.js","https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js"];function n(i){return new Promise(o=>{if(document.querySelector('script[src="'+i+'"]')){o();return}const s=document.createElement("script");s.src=i,s.onload=o,s.onerror=o,document.body.appendChild(s)})}async function r(){for(const o of t)await n(o);document.querySelector('script[src*="script.js"]')||await n("/user/script.js?v=20260731d")}r()},[]),a.jsxs("div",{ref:e,children:[a.jsx("style",{children:`
        #pinOverlay {
          position: fixed; inset: 0; z-index: 99999;
          background: #000;
          display: flex; align-items: center; justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          -webkit-user-select: none; user-select: none;
        }
        #pinOverlay.hidden { display: none; }
        .pin-box { text-align: center; }
        .pin-lock-icon {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
        }
        .pin-lock-icon svg { color: #fff; }
        .pin-title { color: #fff; font-size: 20px; font-weight: 600; margin-bottom: 6px; }
        .pin-sub { color: #8e8e93; font-size: 14px; margin-bottom: 30px; }
        .pin-inputs { display: flex; gap: 10px; justify-content: center; margin-bottom: 16px; }
        .pin-box input[type="text"] {
          width: 48px; height: 56px; border-radius: 12px;
          border: 2px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          color: #fff; font-size: 24px; font-weight: 700;
          text-align: center; outline: none;
          transition: border-color 0.2s;
          caret-color: transparent;
        }
        .pin-box input[type="text"]:focus {
          border-color: #007AFF;
        }
        .pin-box input[type="text"].error {
          border-color: #FF3B30;
          animation: pinShake 0.5s ease;
        }
        @keyframes pinShake {
          0%, 100% { transform: translateX(0); }
          10%, 50%, 90% { transform: translateX(-6px); }
          30%, 70% { transform: translateX(6px); }
        }
        .pin-error {
          color: #FF3B30; font-size: 13px; font-weight: 500;
          min-height: 18px; margin-top: 4px;
          opacity: 0; transition: opacity 0.2s;
        }
        .pin-error.show { opacity: 1; }
        .pin-submit-btn {
          margin-top: 20px; padding: 14px 40px;
          background: #007AFF; color: #fff; border: none;
          border-radius: 12px; font-size: 16px; font-weight: 600;
          cursor: pointer; font-family: inherit;
        }
        .pin-submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }
      `}),a.jsx("div",{id:"pinOverlay",children:a.jsxs("div",{className:"pin-box",children:[a.jsx("div",{className:"pin-lock-icon",children:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),a.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),a.jsx("div",{className:"pin-title",children:"Enter PIN"}),a.jsx("div",{className:"pin-sub",children:"Enter 6-digit PIN to continue"}),a.jsxs("div",{className:"pin-inputs",id:"pinInputs",children:[a.jsx("input",{type:"text",maxLength:"1",inputMode:"numeric",pattern:"[0-9]*"}),a.jsx("input",{type:"text",maxLength:"1",inputMode:"numeric",pattern:"[0-9]*"}),a.jsx("input",{type:"text",maxLength:"1",inputMode:"numeric",pattern:"[0-9]*"}),a.jsx("input",{type:"text",maxLength:"1",inputMode:"numeric",pattern:"[0-9]*"}),a.jsx("input",{type:"text",maxLength:"1",inputMode:"numeric",pattern:"[0-9]*"}),a.jsx("input",{type:"text",maxLength:"1",inputMode:"numeric",pattern:"[0-9]*"})]}),a.jsx("div",{className:"pin-error",id:"pinError",children:"Galat PIN hai!"}),a.jsx("button",{className:"pin-submit-btn",id:"pinSubmitBtn",disabled:!0,children:"Submit"})]})}),a.jsxs("div",{className:"name-screen",id:"nameScreen",children:[a.jsx("div",{className:"name-icon",children:a.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),a.jsx("div",{className:"name-title",children:"youtube"}),a.jsx("div",{className:"name-sub",id:"nameSubText",children:"Create an account to start chatting"}),a.jsxs("div",{className:"name-input-group",children:[a.jsxs("div",{className:"auth-toggle",children:[a.jsx("button",{className:"toggle-btn",id:"toggleLogin",children:"Login"}),a.jsx("button",{className:"toggle-btn active",id:"toggleSignup",children:"Sign Up"})]}),a.jsx("input",{type:"text",className:"name-input",id:"nameInput",placeholder:"Username",maxLength:"30",autoComplete:"off"}),a.jsx("input",{type:"password",className:"name-input",id:"passInput",placeholder:"Password",maxLength:"50",autoComplete:"off"}),a.jsx("button",{className:"name-btn",id:"authBtn",children:"Sign Up"}),a.jsx("div",{className:"name-error",id:"nameError"})]})]}),a.jsxs("div",{className:"main-app",id:"mainApp",children:[a.jsxs("div",{className:"app-topbar",children:[a.jsx("div",{className:"my-avatar",id:"myAvatar",children:"Y"}),a.jsx("div",{className:"app-title",id:"appTitle",children:"Chats"})]}),a.jsxs("div",{className:"pages-container",children:[a.jsx("div",{className:"page active",id:"chatPage",children:a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"user-list-area",id:"userListArea",children:[a.jsxs("div",{className:"user-list-header",children:["Online — ",a.jsx("span",{id:"onlineCount",children:"0"})]}),a.jsx("div",{className:"user-list-scroll",id:"userList",children:a.jsxs("div",{className:"no-users-msg",children:[a.jsx("div",{className:"icon",children:a.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"var(--ios-gray3)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),a.jsx("div",{children:"No other users yet"})]})})]}),a.jsxs("div",{className:"chat-area",id:"chatArea",children:[a.jsxs("div",{className:"empty-state",id:"emptyState",children:[a.jsx("div",{className:"icon",children:a.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"var(--ios-gray3)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),a.jsx("div",{className:"title",children:"Select a user"}),a.jsx("div",{className:"sub",children:"Choose someone from the list to start chatting"})]}),a.jsxs("div",{className:"chat-view",id:"chatView",children:[a.jsxs("div",{className:"chat-header",children:[a.jsx("button",{className:"back-btn",children:"←"}),a.jsx("div",{className:"ch-avatar",id:"chatAvatar",children:"U"}),a.jsxs("div",{className:"ch-info",children:[a.jsx("div",{className:"ch-name",id:"chatName",children:"User"}),a.jsx("div",{className:"ch-status",id:"chatStatus",children:"Offline"})]}),a.jsxs("div",{className:"call-actions",children:[a.jsx("button",{className:"call-btn",title:"Audio Call",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),a.jsx("button",{className:"call-btn",title:"Video Call",children:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),a.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]})})]})]}),a.jsxs("div",{className:"messages-area",id:"messagesArea",children:[a.jsxs("div",{className:"typing-indicator",id:"typingIndicator",children:[a.jsx("div",{className:"dot"}),a.jsx("div",{className:"dot"}),a.jsx("div",{className:"dot"})]}),a.jsxs("div",{className:"recording-indicator",id:"recordingIndicator",children:[a.jsxs("svg",{className:"rec-mic-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),a.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),a.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),a.jsx("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]}),a.jsx("span",{className:"rec-text",children:"Recording..."})]})]}),a.jsxs("div",{className:"reply-preview-bar",id:"replyPreviewBar",children:[a.jsx("div",{className:"rpb-line"}),a.jsxs("div",{className:"rpb-content",children:[a.jsx("div",{className:"rpb-label",id:"replyLabel",children:"Replying"}),a.jsx("div",{className:"rpb-text",id:"replyText"})]}),a.jsx("button",{className:"rpb-close",children:"✕"})]}),a.jsxs("div",{className:"input-bar",children:[a.jsx("button",{className:"img-btn",id:"imgBtn",title:"Send Image",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.jsx("polyline",{points:"21 15 16 10 5 21"})]})}),a.jsx("input",{type:"file",id:"imgInput",accept:"image/*",style:{display:"none"}}),a.jsx("div",{className:"input-wrapper",children:a.jsx("textarea",{id:"messageInput",rows:"1",placeholder:"Message"})}),a.jsx("button",{className:"send-btn",id:"sendBtn",children:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"white",children:a.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})})]})]})]})]})}),a.jsx("div",{className:"page",id:"profilePage",children:a.jsxs("div",{className:"profile-page",children:[a.jsxs("div",{className:"profile-avatar",id:"profileAvatar",children:[a.jsx("span",{className:"pa-initial",id:"paInitial",children:"Y"}),a.jsx("span",{className:"pa-img",id:"paImg",style:{display:"none"}}),a.jsx("div",{className:"pa-camera",children:a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),a.jsx("circle",{cx:"12",cy:"13",r:"4"})]})})]}),a.jsx("div",{className:"profile-name-display",id:"profileNameDisplay",children:"You"}),a.jsx("div",{className:"profile-id",id:"profileId",children:"ID: ..."}),a.jsxs("div",{className:"profile-section",children:[a.jsx("div",{className:"ps-label",children:"Name"}),a.jsxs("div",{className:"profile-input-group",children:[a.jsx("input",{type:"text",className:"profile-input",id:"profileNameInput",placeholder:"Your name",maxLength:"30"}),a.jsx("button",{className:"profile-save-btn",children:"Save"})]})]}),a.jsxs("div",{className:"profile-section",children:[a.jsx("div",{className:"ps-label",children:"Info"}),a.jsxs("div",{className:"profile-info-item",children:[a.jsx("span",{className:"pii-icon",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),a.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),a.jsxs("div",{className:"pii-content",children:[a.jsx("div",{className:"pii-label",children:"User ID"}),a.jsx("div",{className:"pii-value",id:"profileUserId",style:{fontSize:"12px",wordBreak:"break-all",color:"var(--ios-gray)"},children:"-"})]})]}),a.jsxs("div",{className:"profile-info-item",children:[a.jsx("span",{className:"pii-icon",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}),a.jsxs("div",{className:"pii-content",children:[a.jsx("div",{className:"pii-label",children:"Joined"}),a.jsx("div",{className:"pii-value",id:"profileJoined",children:"-"})]})]})]}),a.jsxs("div",{className:"profile-section",children:[a.jsx("div",{className:"ps-label",children:"Notifications"}),a.jsxs("div",{className:"push-toggle-row",id:"pushToggleRow",children:[a.jsxs("div",{className:"push-toggle-info",children:[a.jsx("div",{className:"push-toggle-label",children:"Push Notifications"}),a.jsx("div",{className:"push-toggle-desc",id:"pushToggleDesc",children:"Get notified for new messages"})]}),a.jsxs("label",{className:"ios-toggle",id:"pushToggle",children:[a.jsx("input",{type:"checkbox",id:"pushToggleInput"}),a.jsx("span",{className:"ios-toggle-slider"})]})]})]}),a.jsxs("button",{className:"profile-logout-btn",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{verticalAlign:"middle",marginRight:"6px"},children:[a.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),a.jsx("polyline",{points:"16 17 21 12 16 7"}),a.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Log Out"]}),a.jsxs("div",{className:"font-size-section",children:[a.jsx("div",{className:"ps-label",children:"Chat Text Size"}),a.jsxs("div",{className:"font-size-row",children:[a.jsx("span",{className:"font-size-label",children:"A"}),a.jsx("input",{type:"range",className:"font-size-slider",id:"fontSizeSlider",min:"12",max:"24",defaultValue:"16"}),a.jsx("span",{className:"font-size-label",style:{fontSize:"22px"},children:"A"})]}),a.jsx("div",{className:"font-size-preview",id:"fontSizePreview",children:"Sample message text"})]}),a.jsxs("div",{className:"profile-section",children:[a.jsx("div",{className:"ps-label",children:"Change Password"}),a.jsxs("div",{className:"profile-input-group",style:{flexDirection:"column",gap:"8px"},children:[a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"stretch"},children:[a.jsx("input",{type:"text",className:"profile-input",id:"oldPassInput",placeholder:"Current password",maxLength:"50",autoComplete:"off",style:{flex:"1"},readOnly:!0}),a.jsx("button",{style:{padding:"10px 14px",background:"var(--ios-gray6)",border:"0.5px solid var(--ios-separator)",borderRadius:"10px",cursor:"pointer",fontSize:"14px",fontFamily:"inherit",color:"var(--ios-blue)",fontWeight:"600",whiteSpace:"nowrap"},children:"Copy"})]}),a.jsx("input",{type:"password",className:"profile-input",id:"newPassInput",placeholder:"New password",maxLength:"50",autoComplete:"off",style:{width:"100%"}}),a.jsx("button",{className:"profile-save-btn",style:{width:"100%"},children:"Change Password"}),a.jsx("div",{id:"passChangeStatus",style:{fontSize:"12px",color:"var(--ios-gray)",textAlign:"center"}})]})]})]})}),a.jsx("div",{className:"page",id:"voicePage",children:a.jsxs("div",{className:"voice-page",children:[a.jsxs("div",{id:"voiceUserView",children:[a.jsx("div",{className:"voice-list-header",children:"Send Voice Pack"}),a.jsx("div",{className:"voice-user-list",id:"voiceUserList",children:a.jsxs("div",{className:"voice-empty",id:"voiceUserEmpty",children:[a.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"var(--ios-gray3)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),a.jsx("div",{children:"No users found"})]})})]}),a.jsxs("div",{id:"voiceConvView",style:{display:"none"},children:[a.jsxs("div",{className:"voice-conv-header",children:[a.jsx("button",{className:"voice-back-btn",children:"←"}),a.jsx("div",{className:"voice-conv-avatar",id:"voiceConvAvatar",children:"U"}),a.jsx("div",{className:"voice-conv-name",id:"voiceConvName",children:"User"}),a.jsx("button",{className:"voice-select-btn",id:"voiceSelectBtn",children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M9 11l3 3L22 4"}),a.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]})}),a.jsxs("button",{className:"voice-delete-selected-btn",id:"voiceDeleteSelectedBtn",style:{display:"none"},children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"3 6 5 6 21 6"}),a.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),a.jsx("span",{id:"voiceDeleteCount",children:"0"})]})]}),a.jsxs("div",{className:"voice-conv-msgs",id:"voiceConvMsgs",children:[a.jsxs("div",{className:"recording-indicator",id:"voiceRecordingIndicator",children:[a.jsxs("svg",{className:"rec-mic-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),a.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),a.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),a.jsx("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]}),a.jsx("span",{className:"rec-text",children:"Recording..."})]}),a.jsxs("div",{className:"voice-conv-empty",id:"voiceConvEmpty",children:[a.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"var(--ios-gray3)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),a.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),a.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),a.jsx("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]}),a.jsx("div",{children:"No media yet"}),a.jsx("div",{style:{fontSize:"12px",marginTop:"4px"},children:"Tap the mic to send media"})]})]}),a.jsxs("div",{className:"voice-reply-bar",id:"voiceReplyBar",style:{display:"none"},children:[a.jsx("div",{className:"voice-reply-line"}),a.jsxs("div",{className:"voice-reply-content",children:[a.jsx("div",{className:"voice-reply-label",children:"Replying"}),a.jsx("div",{className:"voice-reply-text",id:"voiceReplyText"})]}),a.jsx("button",{className:"voice-reply-close",children:"✕"})]}),a.jsx("div",{className:"voice-emoji-picker",id:"voiceEmojiPicker",style:{display:"none"},children:a.jsxs("div",{className:"voice-emoji-list",children:[a.jsx("span",{className:"voice-emoji-opt",children:"🤔"}),a.jsx("span",{className:"voice-emoji-opt",children:"😁"}),a.jsx("span",{className:"voice-emoji-opt",children:"🤝"}),a.jsx("span",{className:"voice-emoji-opt",children:"😭"}),a.jsx("span",{className:"voice-emoji-opt",children:"😕"}),a.jsx("span",{className:"voice-emoji-opt",children:"🙂"}),a.jsx("span",{className:"voice-emoji-opt",children:"👍🏿"}),a.jsx("span",{className:"voice-emoji-opt",children:"👔"}),a.jsx("span",{className:"voice-emoji-opt",children:"😜"}),a.jsx("span",{className:"voice-emoji-opt",children:"😍"}),a.jsx("span",{className:"voice-emoji-opt",children:"❤️"}),a.jsx("span",{className:"voice-emoji-opt",children:"😭"}),a.jsx("span",{className:"voice-emoji-opt",children:"😊"}),a.jsx("span",{className:"voice-emoji-opt",children:"😤"}),a.jsx("span",{className:"voice-emoji-opt",children:"🤤"}),a.jsx("span",{className:"voice-emoji-opt",children:"😶"}),a.jsx("span",{className:"voice-emoji-opt",children:"😰"}),a.jsx("span",{className:"voice-emoji-opt",children:"🤗"}),a.jsx("span",{className:"voice-emoji-opt",children:"🙃"}),a.jsx("span",{className:"voice-emoji-opt",children:"😞"}),a.jsx("span",{className:"voice-emoji-opt",children:"😟"}),a.jsx("span",{className:"voice-emoji-opt",children:"😋"}),a.jsx("span",{className:"voice-emoji-opt",children:"👄"}),a.jsx("span",{className:"voice-emoji-opt",children:"🤜"}),a.jsx("span",{className:"voice-emoji-opt",children:"👀"}),a.jsx("span",{className:"voice-emoji-opt",children:"🤖"})]})}),a.jsxs("div",{className:"voice-input-area",id:"voiceInputArea",children:[a.jsx("button",{className:"voice-mic-btn",id:"voiceMicBtn",title:"Record Voice",children:a.jsxs("svg",{id:"voiceMicIcon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),a.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),a.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),a.jsx("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]})}),a.jsx("div",{className:"voice-conv-rec",id:"voiceConvRec",style:{display:"none"},children:a.jsxs("div",{className:"voice-rec-bottom",children:[a.jsxs("div",{className:"voice-conv-rec-indicator",children:[a.jsx("div",{className:"voice-rec-dot"}),a.jsx("span",{id:"voiceRecLabel",children:"Recording"})]}),a.jsx("div",{className:"voice-conv-rec-timer",id:"voiceConvTimer",children:"0:00"}),a.jsxs("div",{className:"voice-conv-rec-actions",children:[a.jsx("button",{className:"voice-rec-action-btn cancel",children:"Cancel"}),a.jsx("button",{className:"voice-rec-action-btn send",children:"Send"})]})]})}),a.jsxs("div",{className:"voice-conv-preview",id:"voiceConvPreview",style:{display:"none"},children:[a.jsxs("div",{className:"voice-conv-preview-player",id:"voicePreviewPlayer",children:[a.jsx("button",{className:"voice-conv-preview-play",id:"voiceConvPreviewPlay",children:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"white",children:a.jsx("path",{d:"M8 5v14l11-7z"})})}),a.jsx("span",{className:"voice-conv-preview-dur",id:"voiceConvPreviewDur",children:"0:00"})]}),a.jsxs("div",{className:"voice-conv-preview-actions",children:[a.jsx("button",{className:"voice-conv-preview-btn cancel",children:"Delete"}),a.jsx("button",{className:"voice-conv-preview-btn send",id:"voiceConvSendBtn",children:"Send"})]}),a.jsxs("div",{className:"voice-conv-upload-progress",id:"voiceConvUploadProgress",style:{display:"none"},children:[a.jsx("div",{className:"voice-conv-progress-bar",children:a.jsx("div",{className:"voice-conv-progress-fill",id:"voiceConvProgressFill"})}),a.jsx("div",{className:"voice-conv-progress-label",id:"voiceConvProgressLabel",children:"Uploading..."})]})]})]})]})]})}),a.jsx("div",{className:"page",id:"videoPage",children:a.jsxs("div",{className:"video-page",children:[a.jsxs("div",{id:"videoUserView",children:[a.jsx("div",{className:"video-list-header",children:"Send Video"}),a.jsx("div",{className:"video-user-list",id:"videoUserList",children:a.jsxs("div",{className:"video-empty",id:"videoUserEmpty",children:[a.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"var(--ios-gray3)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),a.jsx("div",{children:"No users found"})]})})]}),a.jsxs("div",{id:"videoConvView",style:{display:"none"},children:[a.jsxs("div",{className:"video-conv-header",children:[a.jsx("button",{className:"video-back-btn",children:"←"}),a.jsx("div",{className:"video-conv-avatar",id:"videoConvAvatar",children:"U"}),a.jsx("div",{className:"video-conv-name",id:"videoConvName",children:"User"}),a.jsx("button",{className:"video-select-btn",id:"videoSelectBtn",children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M9 11l3 3L22 4"}),a.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]})}),a.jsxs("button",{className:"video-delete-selected-btn",id:"videoDeleteSelectedBtn",style:{display:"none"},children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"3 6 5 6 21 6"}),a.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),a.jsx("span",{id:"videoDeleteCount",children:"0"})]})]}),a.jsx("div",{className:"video-conv-msgs",id:"videoConvMsgs",children:a.jsxs("div",{className:"video-conv-empty",id:"videoConvEmpty",children:[a.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"var(--ios-gray3)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),a.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),a.jsx("div",{children:"No videos yet"}),a.jsx("div",{style:{fontSize:"12px",marginTop:"4px"},children:"Tap the camera to send a video"})]})}),a.jsxs("div",{className:"video-reply-bar",id:"videoReplyBar",style:{display:"none"},children:[a.jsx("div",{className:"video-reply-line"}),a.jsxs("div",{className:"video-reply-content",children:[a.jsx("div",{className:"video-reply-label",children:"Replying"}),a.jsx("div",{className:"video-reply-text",id:"videoReplyText"})]}),a.jsx("button",{className:"video-reply-close",children:"✕"})]}),a.jsx("div",{className:"video-emoji-picker",id:"videoEmojiPicker",style:{display:"none"},children:a.jsxs("div",{className:"video-emoji-list",children:[a.jsx("span",{className:"video-emoji-opt",children:"🤔"}),a.jsx("span",{className:"video-emoji-opt",children:"😁"}),a.jsx("span",{className:"video-emoji-opt",children:"🤝"}),a.jsx("span",{className:"video-emoji-opt",children:"😭"}),a.jsx("span",{className:"video-emoji-opt",children:"😕"}),a.jsx("span",{className:"video-emoji-opt",children:"🙂"}),a.jsx("span",{className:"video-emoji-opt",children:"👍🏿"}),a.jsx("span",{className:"video-emoji-opt",children:"👔"}),a.jsx("span",{className:"video-emoji-opt",children:"😜"}),a.jsx("span",{className:"video-emoji-opt",children:"😍"}),a.jsx("span",{className:"video-emoji-opt",children:"❤️"}),a.jsx("span",{className:"video-emoji-opt",children:"😭"}),a.jsx("span",{className:"video-emoji-opt",children:"😊"}),a.jsx("span",{className:"video-emoji-opt",children:"😤"}),a.jsx("span",{className:"video-emoji-opt",children:"🤤"}),a.jsx("span",{className:"video-emoji-opt",children:"😶"}),a.jsx("span",{className:"video-emoji-opt",children:"😰"}),a.jsx("span",{className:"video-emoji-opt",children:"🤗"}),a.jsx("span",{className:"video-emoji-opt",children:"🙃"}),a.jsx("span",{className:"video-emoji-opt",children:"😞"}),a.jsx("span",{className:"video-emoji-opt",children:"😟"}),a.jsx("span",{className:"video-emoji-opt",children:"😋"}),a.jsx("span",{className:"video-emoji-opt",children:"👄"}),a.jsx("span",{className:"video-emoji-opt",children:"🤜"}),a.jsx("span",{className:"video-emoji-opt",children:"👀"}),a.jsx("span",{className:"video-emoji-opt",children:"🤖"})]})}),a.jsxs("div",{className:"video-input-area",id:"videoInputArea",children:[a.jsx("button",{className:"video-cam-btn",id:"videoCamBtn",title:"Upload Video",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),a.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]})}),a.jsx("input",{type:"file",id:"videoFileInput",accept:"video/mp4,video/webm,video/quicktime,video/avi",style:{display:"none"}}),a.jsxs("div",{className:"video-conv-preview",id:"videoConvPreview",style:{display:"none"},children:[a.jsxs("div",{className:"video-conv-preview-player",id:"videoPreviewPlayer",children:[a.jsx("video",{id:"videoPreviewEl",style:{maxWidth:"200px",maxHeight:"120px",borderRadius:"8px"}}),a.jsx("span",{className:"video-conv-preview-dur",id:"videoPreviewDur",children:"0:00"})]}),a.jsxs("div",{className:"video-conv-preview-actions",children:[a.jsx("button",{className:"video-conv-preview-btn cancel",children:"Delete"}),a.jsx("button",{className:"video-conv-preview-btn send",id:"videoConvSendBtn",children:"Send"})]}),a.jsxs("div",{className:"video-conv-upload-progress",id:"videoConvUploadProgress",style:{display:"none"},children:[a.jsx("div",{className:"video-conv-progress-bar",children:a.jsx("div",{className:"video-conv-progress-fill",id:"videoConvProgressFill"})}),a.jsx("div",{className:"video-conv-progress-label",id:"videoConvProgressLabel",children:"Uploading..."})]})]})]})]})]})})]}),a.jsxs("div",{className:"bottom-nav",children:[a.jsxs("button",{className:"nav-item active",id:"navChat",children:[a.jsx("svg",{className:"nav-svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Chats"]}),a.jsxs("button",{className:"nav-item",id:"navProfile",children:[a.jsxs("svg",{className:"nav-svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Profile"]}),a.jsxs("button",{className:"nav-item",id:"navVoice",children:[a.jsxs("svg",{className:"nav-svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),a.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),a.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),a.jsx("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]}),"Voice"]}),a.jsxs("button",{className:"nav-item",id:"navVideo",children:[a.jsxs("svg",{className:"nav-svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),a.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),"Video"]})]})]}),a.jsx("div",{className:"action-overlay",id:"actionOverlay",children:a.jsxs("div",{className:"action-popup",id:"actionPopup",children:[a.jsxs("div",{className:"react-row",children:[a.jsx("span",{className:"react-emoji",children:"🤔"}),a.jsx("span",{className:"react-emoji",children:"😁"}),a.jsx("span",{className:"react-emoji",children:"🤝"}),a.jsx("span",{className:"react-emoji",children:"😭"}),a.jsx("span",{className:"react-emoji",children:"😕"}),a.jsx("span",{className:"react-emoji",children:"🙂"}),a.jsx("span",{className:"react-emoji",children:"👍🏿"}),a.jsx("span",{className:"react-emoji",children:"👔"}),a.jsx("span",{className:"react-emoji",children:"😜"}),a.jsx("span",{className:"react-emoji",children:"😍"}),a.jsx("span",{className:"react-emoji",children:"❤️"}),a.jsx("span",{className:"react-emoji",children:"😭"}),a.jsx("span",{className:"react-emoji",children:"😊"}),a.jsx("span",{className:"react-emoji",children:"😤"}),a.jsx("span",{className:"react-emoji",children:"🤤"}),a.jsx("span",{className:"react-emoji",children:"😶"}),a.jsx("span",{className:"react-emoji",children:"😰"}),a.jsx("span",{className:"react-emoji",children:"🤗"}),a.jsx("span",{className:"react-emoji",children:"🙃"}),a.jsx("span",{className:"react-emoji",children:"😞"}),a.jsx("span",{className:"react-emoji",children:"😟"}),a.jsx("span",{className:"react-emoji",children:"😋"}),a.jsx("span",{className:"react-emoji",children:"👄"}),a.jsx("span",{className:"react-emoji",children:"🤜"}),a.jsx("span",{className:"react-emoji",children:"👀"}),a.jsx("span",{className:"react-emoji",children:"🤖"})]}),a.jsx("div",{className:"act-sep"}),a.jsxs("button",{className:"act-btn",id:"actEdit",children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),"Edit"]}),a.jsx("div",{className:"act-sep",id:"actEditSep"}),a.jsxs("button",{className:"act-btn",children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"9 17 4 12 9 7"}),a.jsx("path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"})]}),"Reply"]}),a.jsx("div",{className:"act-sep",id:"actDeleteSep"}),a.jsxs("button",{className:"act-btn danger",id:"actDelete",children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"3 6 5 6 21 6"}),a.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),a.jsx("path",{d:"M10 11v6"}),a.jsx("path",{d:"M14 11v6"}),a.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),"Delete"]})]})}),a.jsx("div",{className:"edit-overlay",id:"editOverlay",children:a.jsxs("div",{className:"edit-box",children:[a.jsx("div",{className:"edit-label",children:"Edit message"}),a.jsx("textarea",{id:"editInput",rows:"3"}),a.jsxs("div",{className:"edit-actions",children:[a.jsx("button",{className:"edit-cancel",children:"Cancel"}),a.jsx("button",{className:"edit-save",children:"Save"})]})]})}),a.jsx("div",{className:"notif-container",id:"notifContainer"}),a.jsxs("div",{className:"toast",id:"toast",style:{display:"none"},children:[a.jsx("div",{className:"toast-avatar",id:"toastAvatar",children:"U"}),a.jsxs("div",{className:"toast-content",children:[a.jsx("div",{className:"toast-title",id:"toastTitle",children:"User"}),a.jsx("div",{className:"toast-msg",id:"toastMsg",children:"New message"})]})]}),a.jsx("div",{className:"call-overlay",id:"incomingCall",children:a.jsxs("div",{className:"incoming-content",id:"incomingContent",children:[a.jsxs("div",{className:"incoming-top",children:[a.jsx("div",{className:"incoming-avatar",id:"incomingAvatar",children:"U"}),a.jsx("div",{className:"incoming-name",id:"incomingName",children:"User"}),a.jsx("div",{className:"incoming-type",id:"incomingType",children:"Audio Call"})]}),a.jsxs("div",{className:"incoming-bottom",children:[a.jsxs("div",{className:"slide-track",id:"slideTrack",children:[a.jsx("div",{className:"slide-fill",id:"slideFill"}),a.jsx("span",{className:"slide-text",id:"slideText",children:"Slide to answer"}),a.jsx("div",{className:"slide-thumb",id:"slideThumb",children:a.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#007AFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})})]}),a.jsxs("div",{className:"decline-section",children:[a.jsx("button",{className:"decline-btn",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),a.jsx("div",{className:"decline-label",children:"Decline"})]})]})]})}),a.jsx("div",{className:"call-overlay",id:"outgoingCall",children:a.jsxs("div",{className:"outgoing-content",children:[a.jsx("div",{className:"outgoing-avatar",id:"outgoingAvatar",children:"U"}),a.jsx("div",{className:"outgoing-name",id:"outgoingName",children:"User"}),a.jsx("div",{className:"outgoing-status",id:"outgoingStatus",children:"Calling..."}),a.jsx("button",{className:"outgoing-end",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})}),a.jsx("div",{className:"call-overlay",id:"activeCall",children:a.jsxs("div",{className:"active-container",children:[a.jsxs("div",{className:"remote-wrap",id:"remoteWrap",children:[a.jsxs("div",{className:"no-video",id:"noVideo",children:[a.jsx("div",{className:"big-av",id:"activeBigAvatar",children:"U"}),a.jsx("div",{id:"activeNameText",children:"User"})]}),a.jsx("video",{id:"remoteVideo",autoPlay:!0,playsInline:!0,style:{display:"none"}}),a.jsx("div",{className:"local-wrap",id:"localWrap",children:a.jsx("video",{id:"localVideo",autoPlay:!0,playsInline:!0,muted:!0,style:{display:"none"}})}),a.jsxs("div",{className:"call-top-info",children:[a.jsx("div",{className:"call-name",id:"activeName",children:"User"}),a.jsx("div",{className:"call-timer",id:"callTimer",children:"00:00"})]})]}),a.jsxs("div",{className:"call-bottom-controls",children:[a.jsxs("div",{className:"ctrl-group",children:[a.jsx("button",{className:"ctrl-btn",id:"muteBtn",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),a.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),a.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),a.jsx("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]})}),a.jsx("span",{className:"ctrl-label",children:"Mute"})]}),a.jsxs("div",{className:"ctrl-group",children:[a.jsx("button",{className:"ctrl-btn",id:"videoBtn",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),a.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]})}),a.jsx("span",{className:"ctrl-label",children:"Video"})]}),a.jsxs("div",{className:"ctrl-group",children:[a.jsx("button",{className:"ctrl-btn",id:"speakerBtn",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),a.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}),a.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"})]})}),a.jsx("span",{className:"ctrl-label",children:"Speaker"})]}),a.jsxs("div",{className:"ctrl-group",children:[a.jsx("button",{className:"ctrl-btn end-call",children:a.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),a.jsx("span",{className:"ctrl-label",children:"End"})]})]})]})}),a.jsx("audio",{id:"remoteAudio",autoPlay:!0,playsInline:!0,style:{display:"none"}}),a.jsx("div",{className:"uploading-overlay",id:"uploadingOverlay",children:a.jsxs("div",{className:"uploading-box",children:[a.jsx("div",{className:"uploading-spinner"}),a.jsx("div",{className:"uploading-label",id:"uploadingLabel",children:"Uploading..."})]})}),a.jsx("button",{className:"scroll-to-bottom",id:"scrollToBottomBtn",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--ios-gray)",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})}),a.jsx("div",{className:"logo-picker-overlay",id:"imgViewerOverlay",style:{background:"rgba(0,0,0,0.85)"},children:a.jsx("div",{style:{maxWidth:"90%",maxHeight:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},children:a.jsx("img",{id:"imgViewerImg",src:"",style:{maxWidth:"100%",maxHeight:"80vh",borderRadius:"8px"},draggable:"false"})})}),a.jsx("div",{className:"logo-picker-overlay",id:"logoPickerOverlay",children:a.jsxs("div",{className:"logo-picker-box",children:[a.jsx("div",{className:"logo-picker-title",children:"Choose a Logo"}),a.jsx("div",{className:"logo-grid",id:"logoGrid"}),a.jsx("button",{className:"logo-picker-close",children:"Cancel"})]})}),a.jsxs("div",{className:"logo-adjust-overlay",id:"logoAdjustOverlay",children:[a.jsxs("div",{className:"adj-header",children:[a.jsx("button",{className:"adj-cancel",children:"Cancel"}),a.jsx("span",{className:"adj-title",children:"Adjust Logo"}),a.jsx("button",{className:"adj-save",children:"Save"})]}),a.jsx("div",{className:"adj-preview-wrap",children:a.jsx("div",{className:"adj-circle-mask",children:a.jsx("div",{className:"adj-image",id:"adjImage"})})}),a.jsxs("div",{className:"adj-footer",children:[a.jsx("span",{className:"adj-zoom-label",children:"Zoom"}),a.jsx("input",{type:"range",id:"adjZoom",min:"1",max:"3",step:"0.05",defaultValue:"1.2"})]})]}),a.jsxs("div",{id:"maintenanceOverlay",children:[a.jsx("div",{className:"mt-icon",children:"🔧"}),a.jsx("div",{className:"mt-badge",children:"Under Maintenance"}),a.jsx("h1",{children:"App is Unavailable"}),a.jsx("p",{children:"The app is currently under maintenance. Please check back later."}),a.jsx("div",{className:"mt-footer",children:"We'll be back soon"})]}),a.jsxs("div",{id:"videoLoadingOverlay",style:{display:"none",position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",zIndex:9999,alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{className:"video-loading-spinner"}),a.jsx("div",{style:{color:"white",fontSize:"15px",fontWeight:"600"},children:"Loading video from server..."}),a.jsx("div",{style:{color:"rgba(255,255,255,0.6)",fontSize:"13px"},children:"Please wait a moment"})]})]})}const qf=`<style>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    :root {
      --ios-blue: #007AFF;
      --ios-blue-dark: #0055CC;
      --ios-green: #34C759;
      --ios-red: #FF3B30;
      --ios-orange: #FF9500;
      --ios-purple: #AF52DE;
      --ios-pink: #FF2D55;
      --ios-yellow: #FFCC00;
      --ios-gray: #8E8E93;
      --ios-gray2: #AEAEB2;
      --ios-gray3: #C7C7CC;
      --ios-gray4: #D1D1D6;
      --ios-gray5: #E5E5EA;
      --ios-gray6: #F2F2F7;
      --ios-bg: #F2F2F7;
      --ios-card: #FFFFFF;
      --ios-text: #000000;
      --ios-text2: #3C3C43;
      --ios-separator: rgba(60, 60, 67, 0.12);
      --sidebar-width: 320px;
      --nav-height: 52px;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
      background: var(--ios-bg);
      color: var(--ios-text);
      height: 100vh;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* ==================== LOGIN ==================== */
    .login-screen {
      position: fixed;
      inset: 0;
      background: linear-gradient(145deg, #F2F2F7 0%, #E5E5EA 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 400;
      padding: 24px;
    }

    .login-screen.hide {
      display: none;
    }

    .login-icon {
      width: 88px;
      height: 88px;
      border-radius: 24px;
      background: linear-gradient(135deg, var(--ios-blue), var(--ios-purple));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42px;
      margin-bottom: 24px;
      box-shadow: 0 12px 40px rgba(0, 122, 255, 0.3);
      animation: loginFloat 3s ease-in-out infinite;
    }

    @keyframes loginFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }

    .login-title {
      font-size: 30px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 4px;
    }

    .login-sub {
      font-size: 15px;
      color: var(--ios-gray);
      margin-bottom: 36px;
      font-weight: 500;
    }

    .login-form {
      width: 100%;
      max-width: 320px;
    }

    .login-input {
      width: 100%;
      padding: 16px 18px;
      border: 1.5px solid var(--ios-separator);
      border-radius: 14px;
      font-size: 16px;
      font-family: inherit;
      background: rgba(255,255,255,0.8);
      backdrop-filter: blur(10px);
      outline: none;
      margin-bottom: 12px;
      transition: all 0.2s;
    }

    .login-input:focus {
      border-color: var(--ios-blue);
      background: var(--ios-card);
      box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.1);
    }

    .login-btn {
      width: 100%;
      padding: 16px;
      background: linear-gradient(135deg, var(--ios-blue), var(--ios-purple));
      color: white;
      border: none;
      border-radius: 14px;
      font-size: 17px;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 16px rgba(0, 122, 255, 0.3);
    }

    .login-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0, 122, 255, 0.4);
    }

    .login-btn:active {
      transform: scale(0.97);
    }

    .login-error {
      color: var(--ios-red);
      font-size: 14px;
      text-align: center;
      margin-top: 12px;
      display: none;
      font-weight: 500;
    }

    /* ==================== ADMIN LAYOUT ==================== */
    .admin-layout {
      display: none;
      height: 100vh;
    }

    .admin-layout.show {
      display: flex;
    }

    /* ==================== SIDEBAR ==================== */
    .sidebar {
      width: var(--sidebar-width);
      background: rgba(255,255,255,0.95);
      backdrop-filter: saturate(180%) blur(20px);
      border-right: 0.5px solid var(--ios-separator);
      display: flex;
      flex-direction: column;
      height: 100vh;
      flex-shrink: 0;
    }

    .sidebar-header {
      padding: 16px 20px 12px;
      background: rgba(255,255,255,0.85);
      backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 0.5px solid var(--ios-separator);
    }

    .sidebar-header .header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .sidebar-header .header-top h1 {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.5px;
      background: linear-gradient(135deg, var(--ios-blue), var(--ios-purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .sidebar-header .header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .sidebar-header .header-actions button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      color: var(--ios-gray);
    }

    .sidebar-header .header-actions button:hover {
      background: var(--ios-gray6);
    }

    .sidebar-header .admin-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: linear-gradient(135deg, var(--ios-blue), var(--ios-purple));
      color: white;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }

    /* Sidebar Navigation Tabs */
    .sidebar-nav {
      display: flex;
      gap: 2px;
      padding: 8px 12px;
      background: var(--ios-gray6);
      margin: 0 12px 8px;
      border-radius: 12px;
    }

    .sidebar-nav .nav-tab {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
      padding: 6px 4px 4px;
      border: none;
      border-radius: 10px;
      background: transparent;
      font-size: 9px;
      font-weight: 600;
      color: var(--ios-gray);
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      font-family: inherit;
      line-height: 1.2;
    }

    .sidebar-nav .nav-tab svg {
      width: 18px;
      height: 18px;
      transition: all 0.25s;
    }

    .sidebar-nav .nav-tab.active {
      background: var(--ios-card);
      color: var(--ios-blue);
      box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.02);
    }

    .sidebar-nav .nav-tab:active {
      transform: scale(0.93);
    }

    .sidebar-stats {
      display: flex;
      gap: 6px;
      padding: 10px 16px;
      border-bottom: 0.5px solid var(--ios-separator);
    }

    .stat-card {
      flex: 1;
      background: var(--ios-gray6);
      border-radius: 10px;
      padding: 8px 8px;
      text-align: center;
      transition: transform 0.15s;
    }

    .stat-card:active {
      transform: scale(0.96);
    }

    .stat-num {
      font-size: 20px;
      font-weight: 800;
      color: var(--ios-blue);
      line-height: 1.2;
    }

    .stat-label {
      font-size: 10px;
      color: var(--ios-gray);
      margin-top: 1px;
      font-weight: 500;
    }

    .search-box {
      padding: 8px 16px;
      border-bottom: 0.5px solid var(--ios-separator);
    }

    .search-input {
      width: 100%;
      padding: 10px 14px 10px 36px;
      background: var(--ios-gray6);
      border: none;
      border-radius: 10px;
      font-size: 15px;
      font-family: inherit;
      outline: none;
      color: var(--ios-text);
      transition: background 0.2s;
    }

    .search-input:focus {
      background: var(--ios-card);
      box-shadow: 0 0 0 1.5px var(--ios-blue);
    }

    .search-wrapper {
      position: relative;
    }

    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ios-gray2);
      font-size: 14px;
      pointer-events: none;
    }

    .user-list {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 4px 0;
    }

    .user-list::-webkit-scrollbar {
      display: none;
    }

    .user-item {
      display: flex;
      align-items: center;
      padding: 10px 16px;
      cursor: pointer;
      transition: all 0.15s;
      gap: 12px;
      margin: 0 8px;
      border-radius: 12px;
    }

    .user-item:hover {
      background: var(--ios-gray6);
    }

    .user-item.active {
      background: var(--ios-blue);
      border-radius: 12px;
    }

    .user-item.active * {
      color: white !important;
    }

    .user-avatar {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--ios-blue), var(--ios-purple));
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 17px;
      font-weight: 600;
      flex-shrink: 0;
      position: relative;
    }

    .online-dot {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: var(--ios-green);
      border: 2px solid white;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .user-item.active .online-dot {
      border-color: var(--ios-blue);
    }

    .offline-dot {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: var(--ios-gray3);
      border: 2px solid white;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .user-item.active .offline-dot {
      border-color: var(--ios-blue);
    }

    .user-info {
      flex: 1;
      min-width: 0;
    }

    .user-name {
      font-size: 15px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .user-number {
      font-size: 12px;
      color: var(--ios-gray);
      font-weight: 500;
    }

    .user-last-msg {
      font-size: 14px;
      color: var(--ios-gray);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2px;
    }

    .user-time {
      font-size: 12px;
      color: var(--ios-gray2);
      flex-shrink: 0;
      align-self: flex-start;
      margin-top: 2px;
    }

    .unread-badge {
      min-width: 20px;
      height: 20px;
      border-radius: 10px;
      background: var(--ios-red);
      color: white;
      font-size: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 6px;
      flex-shrink: 0;
    }

    .no-users {
      text-align: center;
      padding: 40px 20px;
      color: var(--ios-gray);
    }

    .no-users .icon {
      font-size: 48px;
      margin-bottom: 12px;
    }

    /* ==================== CHAT AREA ==================== */
    .chat-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: var(--ios-bg);
    }

    .chat-header {
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 0.5px solid var(--ios-separator);
      padding: 12px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 64px;
    }

    .back-btn {
      display: none;
      background: none;
      border: none;
      font-size: 24px;
      color: var(--ios-blue);
      cursor: pointer;
      padding: 6px;
      border-radius: 50%;
      transition: background 0.2s;
    }

    .back-btn:hover {
      background: var(--ios-gray6);
    }

    .back-btn:active {
      transform: scale(0.9);
    }

    .chat-header .nav-avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--ios-blue), var(--ios-purple));
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 15px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .chat-header .nav-info {
      flex: 1;
    }

    .chat-header .nav-title {
      font-size: 17px;
      font-weight: 700;
    }

    .chat-header .nav-subtitle {
      font-size: 12px;
      color: var(--ios-gray);
      font-weight: 500;
    }

    .chat-header .nav-subtitle.online {
      color: var(--ios-green);
    }

    .chat-messages {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 12px 16px;
    }

    .chat-messages::-webkit-scrollbar {
      display: none;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--ios-gray);
      padding: 20px;
    }

    .empty-state .icon {
      font-size: 72px;
      margin-bottom: 16px;
      opacity: 0.6;
    }

    .empty-state .title {
      font-size: 22px;
      font-weight: 700;
      color: var(--ios-text);
      margin-bottom: 8px;
    }

    .empty-state .sub {
      font-size: 15px;
      color: var(--ios-gray);
      font-weight: 400;
    }

    /* Messages */
    .message-wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
      animation: msgIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    @keyframes msgIn {
      from { opacity: 0; transform: translateY(10px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .message-wrapper.admin {
      align-items: flex-end;
    }

    .message-wrapper.user {
      align-items: flex-start;
    }

    .message-bubble {
      max-width: 65%;
      padding: 10px 14px;
      border-radius: 18px;
      font-size: 15px;
      line-height: 1.35;
      word-wrap: break-word;
    }

    .message-wrapper.admin .message-bubble {
      background: var(--ios-blue);
      color: white;
      border-bottom-right-radius: 4px;
      box-shadow: 0 1px 4px rgba(0, 122, 255, 0.15);
    }

    .message-wrapper.user .message-bubble {
      background: var(--ios-card);
      color: var(--ios-text);
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      border: 0.5px solid var(--ios-separator);
    }

    .message-time {
      font-size: 10px;
      color: var(--ios-gray2);
      margin-top: 2px;
      padding: 0 4px;
      font-weight: 500;
    }

    .message-image {
      max-width: 260px;
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .message-image:hover {
      transform: scale(1.02);
    }

    .message-image img {
      width: 100%;
      display: block;
    }

    .date-separator {
      text-align: center;
      margin: 16px 0;
    }

    .date-separator span {
      background: var(--ios-bg);
      padding: 4px 12px;
      font-size: 11px;
      color: var(--ios-gray);
      font-weight: 600;
      border-radius: 8px;
    }

    .typing-indicator {
      display: none;
      padding: 10px 14px;
      background: var(--ios-gray5);
      border-radius: 18px;
      border-bottom-left-radius: 4px;
      margin-bottom: 8px;
      width: fit-content;
    }

    .typing-indicator.show {
      display: inline-flex;
      gap: 4px;
      align-items: center;
    }

    .typing-indicator .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--ios-gray2);
      animation: typingBounce 1.4s infinite ease-in-out;
    }

    .typing-indicator .dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-indicator .dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes typingBounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-4px); }
    }

    /* Chat Input */
    .chat-input-area {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: saturate(180%) blur(20px);
      border-top: 0.5px solid var(--ios-separator);
      padding: 8px 16px 12px;
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }

    .chat-input-area .attach-btn,
    .chat-input-area .send-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: transform 0.15s;
    }

    .chat-input-area .attach-btn:active,
    .chat-input-area .send-btn:active {
      transform: scale(0.88);
    }

    .chat-input-area .attach-btn {
      background: transparent;
      color: var(--ios-blue);
      font-size: 22px;
    }

    .chat-input-area .send-btn {
      background: var(--ios-blue);
      color: white;
      font-size: 16px;
      opacity: 0;
      transform: scale(0.5);
      pointer-events: none;
      transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .chat-input-area .send-btn.show {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .input-wrapper {
      flex: 1;
      background: var(--ios-gray6);
      border-radius: 20px;
      padding: 8px 14px;
      display: flex;
      align-items: flex-end;
      min-height: 36px;
      border: 0.5px solid var(--ios-separator);
    }

    .input-wrapper textarea {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 15px;
      font-family: inherit;
      resize: none;
      outline: none;
      max-height: 100px;
      line-height: 1.35;
      color: var(--ios-text);
      padding: 0;
    }

    .input-wrapper textarea::placeholder {
      color: var(--ios-gray2);
    }

    .image-preview {
      display: none;
      padding: 8px 16px;
      background: var(--ios-card);
      border-top: 0.5px solid var(--ios-separator);
    }

    .image-preview.show {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .image-preview img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 10px;
    }

    .image-preview .remove-img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #adminFileInput {
      display: none;
    }

    /* Lightbox */
    .lightbox {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      z-index: 500;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .lightbox.show {
      display: flex;
    }

    .lightbox img {
      max-width: 95%;
      max-height: 90vh;
      border-radius: 8px;
    }

    /* Toast */
    .toast {
      position: fixed;
      top: 16px;
      right: 16px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 14px;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      z-index: 300;
      transform: translateX(120%);
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      max-width: 320px;
    }

    .toast.show {
      transform: translateX(0);
    }

    .toast-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--ios-blue), #5856D6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 14px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .toast-content {
      flex: 1;
      min-width: 0;
    }

    .toast-title {
      font-size: 14px;
      font-weight: 600;
    }

    .toast-msg {
      font-size: 13px;
      color: var(--ios-gray);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  /* ==================== TABS ==================== */
    .tab-content { display: none; flex-direction: column; height: 100%; }
    .tab-content.active { display: flex; }

  /* ==================== DASHBOARD ==================== */
    .dash-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding: 12px 16px;
    }
    .dash-card {
      background: var(--ios-card);
      border-radius: 14px;
      padding: 16px;
      box-shadow: 0 1px 8px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
      gap: 4px;
      transition: all 0.2s;
      cursor: default;
    }
    .dash-card:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.07);
    }
    .dash-card-icon {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .dash-card-num {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .dash-card-label {
      font-size: 12px;
      color: var(--ios-gray);
      font-weight: 500;
    }
    .dash-card-sub {
      font-size: 11px;
      color: var(--ios-gray2);
      margin-top: 2px;
    }
    .dash-section-title {
      font-size: 13px;
      font-weight: 700;
      color: var(--ios-gray);
      padding: 16px 16px 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .dash-activity {
      flex: 1;
      overflow-y: auto;
      padding: 0 16px 16px;
    }
    .dash-activity::-webkit-scrollbar { display: none; }
    .activity-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 0.5px solid var(--ios-separator);
      transition: background 0.15s;
    }
    .activity-item:last-child { border-bottom: none; }
    .activity-icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 13px;
    }
    .activity-info { flex: 1; min-width: 0; }
    .activity-text { font-size: 13px; font-weight: 600; }
    .activity-desc { font-size: 12px; color: var(--ios-gray); margin-top: 1px; }
    .activity-time { font-size: 11px; color: var(--ios-gray2); flex-shrink: 0; font-weight: 500; }

  /* ==================== ANALYTICS ==================== */
    .analytics-section {
      padding: 0 16px 16px;
      flex: 1;
      overflow-y: auto;
    }
    .analytics-section::-webkit-scrollbar { display: none; }
    .analytics-card {
      background: var(--ios-card);
      border-radius: 16px;
      padding: 16px;
      margin-top: 12px;
      box-shadow: 0 1px 8px rgba(0,0,0,0.04);
      border: 0.5px solid var(--ios-separator);
    }
    .analytics-card-title {
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--ios-text2);
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .analytics-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7px 0;
      border-bottom: 0.5px solid var(--ios-separator);
    }
    .analytics-row:last-child { border-bottom: none; }
    .analytics-row-left {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
      flex: 1;
    }
    .analytics-row-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--ios-blue), var(--ios-purple));
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 13px;
      font-weight: 600;
      flex-shrink: 0;
    }
    .analytics-row-name {
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .analytics-row-stat {
      text-align: right;
      flex-shrink: 0;
    }
    .analytics-row-stat-num {
      font-size: 16px;
      font-weight: 700;
    }
    .analytics-row-stat-label {
      font-size: 10px;
      color: var(--ios-gray);
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

  /* ==================== ACTIVITY LOG ==================== */
    .actlog-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 16px;
      border-bottom: 0.5px solid var(--ios-separator);
      transition: background 0.15s;
    }
    .actlog-item:hover { background: var(--ios-gray6); }
    .actlog-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 14px;
    }
    .actlog-body { flex: 1; min-width: 0; }
    .actlog-user { font-size: 14px; font-weight: 600; }
    .actlog-detail { font-size: 12px; color: var(--ios-gray); margin-top: 2px; }
    .actlog-time { font-size: 11px; color: var(--ios-gray2); margin-top: 2px; }

  /* ==================== DEVICE LOG ==================== */
    .devlog-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 12px 0;
      border-bottom: 0.5px solid var(--ios-separator);
    }
    .devlog-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 18px;
    }
    .devlog-body { flex: 1; min-width: 0; }
    .devlog-device { font-size: 14px; font-weight: 600; }
    .devlog-platform { font-size: 12px; color: var(--ios-gray); margin-top: 2px; }
    .devlog-meta { font-size: 11px; color: var(--ios-gray2); margin-top: 2px; display: flex; gap: 12px; }

  /* ==================== USER DETAIL TABS ==================== */
    .detail-tabs {
      display: flex;
      gap: 0;
      background: var(--ios-gray6);
      border-radius: 8px;
      padding: 2px;
      margin: 8px 16px;
    }
    .detail-tab {
      flex: 1;
      padding: 6px 10px;
      border: none;
      border-radius: 6px;
      background: transparent;
      font-size: 12px;
      font-weight: 600;
      color: var(--ios-gray);
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }
    .detail-tab.active {
      background: var(--ios-card);
      color: var(--ios-text);
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    .detail-tab-content { display: none; }
    .detail-tab-content.active { display: block; }

  /* ==================== IMAGES GALLERY ==================== */
    .images-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 8px;
      padding: 12px 16px;
      overflow-y: auto;
      flex: 1;
    }
    .images-gallery .img-item {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      background: var(--ios-gray5);
      aspect-ratio: 1;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    }
    .images-gallery .img-item:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .images-gallery .img-item:active {
      transform: scale(0.95);
    }
    .images-gallery .img-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .images-gallery .img-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.7));
      padding: 16px 6px 5px;
      font-size: 10px;
      color: white;
      line-height: 1.2;
      font-weight: 500;
    }
    .img-empty {
      text-align: center;
      padding: 60px 20px;
      color: var(--ios-gray);
      font-size: 14px;
    }
    .img-empty .icon {
      font-size: 48px;
      margin-bottom: 12px;
    }

  /* ==================== ACTIVITY STATS ==================== */
    .activity-stats {
      display: flex;
      gap: 8px;
      padding: 8px 16px;
    }
    .activity-stat-card {
      flex: 1;
      background: var(--ios-gray6);
      border-radius: 10px;
      padding: 10px;
      text-align: center;
    }
    .activity-stat-num {
      font-size: 20px;
      font-weight: 700;
      color: var(--ios-blue);
    }
    .activity-stat-label {
      font-size: 10px;
      color: var(--ios-gray);
      margin-top: 2px;
      text-transform: uppercase;
      letter-spacing: 0.2px;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .sidebar {
        width: 100%;
        position: absolute;
        z-index: 10;
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .sidebar.hide {
        transform: translateX(-100%);
      }

      .chat-area {
        width: 100%;
      }

      .back-btn {
        display: block;
      }
    }
  /* ==================== CALL FEATURE ==================== */
    .call-actions {
      display: flex;
      gap: 6px;
      margin-left: auto;
      flex-shrink: 0;
    }

    .call-btn {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: none;
      background: var(--ios-gray6);
      color: var(--ios-blue);
      font-size: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, transform 0.15s;
      flex-shrink: 0;
    }

    .call-btn:active {
      transform: scale(0.85);
    }

    /* Call Overlay */
    .call-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      z-index: 600;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .call-overlay.show {
      display: flex;
    }

    /* Incoming Call - iOS Slide to Answer */
    @keyframes iosSlideUp {
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .incoming-content {
      text-align: center;
      padding: 40px 20px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      animation: iosSlideUp 0.5s cubic-bezier(0.32, 0.08, 0.24, 1);
    }

    .incoming-bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .incoming-top {
      padding-top: 60px;
    }

    .incoming-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #007AFF, #5856D6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 44px;
      font-weight: 600;
      margin: 0 auto 20px;
      box-shadow: 0 8px 40px rgba(0, 122, 255, 0.4);
    }

    .incoming-name {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .incoming-type {
      font-size: 16px;
      color: rgba(255,255,255,0.6);
    }

    /* Slide to Answer */
    .slide-track {
      width: 280px;
      height: 56px;
      border-radius: 28px;
      background: rgba(255,255,255,0.2);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      border: 1px solid rgba(255,255,255,0.3);
    }

    .slide-fill {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0%;
      border-radius: 28px;
      background: #34C759;
      transition: width 0.1s linear;
    }

    .slide-thumb {
      position: absolute;
      left: 2px;
      top: 2px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      z-index: 2;
      cursor: grab;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      touch-action: none;
    }

    .slide-thumb:active {
      cursor: grabbing;
    }

    .slide-text {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: white;
      letter-spacing: 0.3px;
      pointer-events: none;
      transition: opacity 0.2s;
    }

    /* Decline */
    .decline-section {
      padding-bottom: 40px;
      text-align: center;
    }

    .decline-btn {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      background: #FF3B30;
      color: white;
      font-size: 26px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 8px;
      transition: transform 0.15s;
      box-shadow: 0 4px 16px rgba(255, 59, 48, 0.4);
    }

    .decline-btn:active {
      transform: scale(0.88);
    }

    .decline-label {
      font-size: 13px;
      color: rgba(255,255,255,0.6);
    }

    /* Outgoing Call */
    .outgoing-content {
      text-align: center;
      padding: 24px;
    }

    .outgoing-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #007AFF, #5856D6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 44px;
      font-weight: 600;
      margin: 0 auto 20px;
    }

    .outgoing-name {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .outgoing-status {
      font-size: 16px;
      color: rgba(255,255,255,0.6);
      margin-bottom: 40px;
    }

    .outgoing-end {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: none;
      background: #FF3B30;
      color: white;
      font-size: 28px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      transition: transform 0.15s;
    }

    .outgoing-end:active {
      transform: scale(0.88);
    }

    /* Active Call */
    .active-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .remote-wrap {
      flex: 1;
      background: #111;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }

    .remote-wrap video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .remote-wrap .no-video {
      text-align: center;
      color: rgba(255,255,255,0.5);
    }

    .remote-wrap .no-video .big-av {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #007AFF, #5856D6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      font-weight: 600;
      margin: 0 auto 12px;
    }

    .local-wrap {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 110px;
      height: 150px;
      border-radius: 12px;
      overflow: hidden;
      border: 2px solid rgba(255,255,255,0.3);
      background: #222;
      z-index: 10;
    }

    .local-wrap video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .call-top-info {
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 10;
      pointer-events: none;
    }

    .call-top-info .call-name {
      font-size: 18px;
      font-weight: 600;
      text-shadow: 0 1px 4px rgba(0,0,0,0.5);
    }

    .call-top-info .call-timer {
      font-size: 14px;
      color: rgba(255,255,255,0.7);
      text-shadow: 0 1px 4px rgba(0,0,0,0.5);
      margin-top: 4px;
    }

    .call-bottom-controls {
      display: flex;
      justify-content: center;
      gap: 28px;
      padding: 24px 16px;
      padding-bottom: calc(24px + var(--safe-bottom, 0px));
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(20px);
    }

    .ctrl-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background: rgba(255,255,255,0.15);
      color: white;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, transform 0.15s;
    }

    .ctrl-btn:active {
      transform: scale(0.88);
    }

    .ctrl-btn.end-call {
      background: #FF3B30;
      width: 54px;
      height: 54px;
      font-size: 22px;
    }

    .ctrl-btn.off {
      opacity: 0.4;
    }

    .ctrl-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .ctrl-label {
      font-size: 10px;
      color: rgba(255,255,255,0.5);
    }

    /* ==================== USER DETAIL VIEW ==================== */
    .detail-header {
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 0.5px solid var(--ios-separator);
      padding: 12px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
      min-height: 64px;
    }

    .detail-avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--ios-blue), var(--ios-purple));
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 17px;
      font-weight: 600;
      flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(0, 122, 255, 0.2);
    }

    .detail-info {
      flex: 1;
      min-width: 0;
    }

    .detail-name {
      font-size: 17px;
      font-weight: 700;
    }

    .detail-sub {
      font-size: 12px;
      color: var(--ios-gray);
      font-weight: 500;
    }

    .detail-actions {
      display: flex;
      gap: 8px;
      padding: 10px 16px;
      border-bottom: 0.5px solid var(--ios-separator);
      flex-shrink: 0;
    }

    .action-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }

    .action-btn:hover {
      transform: translateY(-1px);
    }

    .action-btn:active {
      transform: scale(0.96);
    }

    .action-btn.block-btn {
      background: var(--ios-gray6);
      color: var(--ios-text);
    }

    .action-btn.block-btn.blocked {
      background: var(--ios-orange);
      color: white;
    }

    .action-btn.delete-btn {
      background: var(--ios-red);
      color: white;
    }

    .action-btn svg {
      flex-shrink: 0;
    }

    .detail-section-title {
      font-size: 12px;
      font-weight: 700;
      color: var(--ios-gray);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 16px 16px 8px;
      flex-shrink: 0;
    }

    .detail-info-section {
      padding: 0 16px;
      flex-shrink: 0;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 0.5px solid var(--ios-separator);
    }

    .detail-row:last-child {
      border-bottom: none;
    }

    .detail-label {
      font-size: 14px;
      color: var(--ios-gray);
      font-weight: 500;
    }

    .detail-value {
      font-size: 14px;
      font-weight: 500;
      text-align: right;
      max-width: 60%;
      word-break: break-all;
    }

    .detail-messages {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 0 16px 16px;
    }

    .detail-messages::-webkit-scrollbar {
      display: none;
    }

    .no-msgs {
      text-align: center;
      color: var(--ios-gray);
      padding: 24px;
      font-size: 14px;
      font-weight: 500;
    }

    .detail-msg-item {
      display: flex;
      flex-direction: column;
      padding: 8px 12px;
      border-bottom: 0.5px solid var(--ios-separator);
      border-radius: 10px;
      margin: 4px 0;
      transition: background 0.15s;
    }

    .detail-msg-item:hover {
      background: var(--ios-gray6);
    }

    .detail-msg-meta {
      font-size: 11px;
      color: var(--ios-gray2);
      margin-bottom: 2px;
      font-weight: 500;
    }

    .detail-msg-from {
      font-size: 12px;
      font-weight: 600;
      color: var(--ios-blue);
    }

    .detail-msg-text {
      font-size: 15px;
      line-height: 1.35;
      margin-top: 2px;
    }

    .detail-msg-text img {
      max-width: 120px;
      border-radius: 8px;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .local-wrap {
        width: 90px;
        height: 130px;
      }
      .incoming-avatar, .outgoing-avatar {
        width: 80px;
        height: 80px;
        font-size: 36px;
      }
      .incoming-name, .outgoing-name {
        font-size: 22px;
      }
      .call-bottom-controls {
        gap: 20px;
        padding: 16px 12px;
      }
      .ctrl-btn {
        width: 44px;
        height: 44px;
        font-size: 18px;
      }
      .ctrl-btn.end-call {
        width: 48px;
        height: 48px;
      }
    }
</style>

<!-- Login Screen -->
  <div class="login-screen" id="loginScreen">
    <div class="login-icon">🔐</div>
    <div class="login-title">Admin Panel</div>
    <div class="login-sub">Login to manage chats</div>
    <div class="login-form">
      <input type="text" class="login-input" id="loginUser" placeholder="Username" autocomplete="username" value="admin">
      <input type="password" class="login-input" id="loginPass" placeholder="Password" autocomplete="current-password" value="admin123">
      <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:var(--ios-gray);margin-bottom:12px;cursor:pointer;">
        <input type="checkbox" id="rememberMe" checked style="width:16px;height:16px;accent-color:var(--ios-blue);cursor:pointer;">
        Remember me
      </label>
      <button class="login-btn" onclick="doLogin()">Login</button>
      <div class="login-error" id="loginError">Invalid username or password</div>
    </div>
  </div>

  <!-- Toast Notification -->
  <div class="toast" id="toast">
    <div class="toast-avatar" id="toastAvatar">U</div>
    <div class="toast-content">
      <div class="toast-title" id="toastTitle">User #1</div>
      <div class="toast-msg" id="toastMsg">New message</div>
    </div>
  </div>

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox" onclick="closeLightbox()">
    <img id="lightboxImg" src="" alt="Image">
  </div>

  <!-- Admin Layout -->
  <div class="admin-layout" id="adminLayout">
    <!-- Sidebar -->
      <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
          <div class="header-top">
            <h1>Admin</h1>
            <div class="header-actions">
              <button id="tgSettingsBtn" title="Telegram Settings" type="button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </button>
              <button onclick="logoutAdmin()" title="Logout" type="button" style="color:var(--ios-red);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              </button>
            </div>
          </div>
          <div class="admin-badge">⚡ Admin Panel</div>
        </div>

        <!-- Navigation Tabs -->
        <div class="sidebar-nav" id="sidebarNav">
          <button class="nav-tab active" onclick="switchAdminTab('dashboard')" data-tab="dashboard">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Dashboard
          </button>
          <button class="nav-tab" onclick="switchAdminTab('users')" data-tab="users">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Users
          </button>
          <button class="nav-tab" onclick="switchAdminTab('images')" data-tab="images">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            Images
          </button>
          <button class="nav-tab" onclick="switchAdminTab('analytics')" data-tab="analytics">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            Analytics
          </button>
          <button class="nav-tab" onclick="switchAdminTab('activitylog')" data-tab="activitylog">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Activity
          </button>
        </div>

      <!-- Dashboard Tab -->
      <div class="tab-content active" id="tabDashboard">
        <div class="sidebar-stats">
          <div class="stat-card">
            <div class="stat-num" id="totalUsers">0</div>
            <div class="stat-label">Total Users</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" id="onlineUsers">0</div>
            <div class="stat-label">Online</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" id="unreadCount">0</div>
            <div class="stat-label">Blocked</div>
          </div>
        </div>
        <div class="dash-grid">
          <div class="dash-card">
            <div class="dash-card-icon" style="background:#E8F5E9;color:var(--ios-green);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            <div class="dash-card-num" id="dashMessages">0</div>
            <div class="dash-card-label">Messages Today</div>
          </div>
          <div class="dash-card">
            <div class="dash-card-icon" style="background:#E3F2FD;color:var(--ios-blue);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg></div>
            <div class="dash-card-num" id="dashVoices">0</div>
            <div class="dash-card-label">Voice Recordings</div>
          </div>
          <div class="dash-card">
            <div class="dash-card-icon" style="background:#FFF3E0;color:var(--ios-orange);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>
            <div class="dash-card-num" id="dashImages">0</div>
            <div class="dash-card-label">Images Shared</div>
          </div>
          <div class="dash-card">
            <div class="dash-card-icon" style="background:#F3E5F5;color:#9C27B0;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div class="dash-card-num" id="dashActiveUsers">0</div>
            <div class="dash-card-label">Active Users</div>
          </div>
        </div>
        <div class="dash-section-title">Recent Activity</div>
        <div class="dash-activity" id="dashActivity">
          <div style="text-align:center;padding:20px;color:var(--ios-gray);font-size:13px;">Loading activity...</div>
        </div>
      </div>

      <!-- Users Tab -->
      <div class="tab-content" id="tabUsers">
        <div class="search-box">
          <div class="search-wrapper">
            <span class="search-icon">🔍</span>
            <input type="text" class="search-input" id="searchInput" placeholder="Search users..." oninput="filterUsers()">
          </div>
        </div>
        <div class="user-list" id="userList">
          <div class="no-users">
            <div class="icon">📭</div>
            <div>No users yet</div>
          </div>
        </div>
      </div>

      <!-- Analytics Tab -->
      <div class="tab-content" id="tabAnalytics">
        <div class="analytics-section" id="analyticsSection"></div>
      </div>

      <!-- Activity Log Tab -->
      <div class="tab-content" id="tabActivitylog">
        <div class="search-box">
          <div class="search-wrapper">
            <span class="search-icon">🔍</span>
            <input type="text" class="search-input" id="activitySearchInput" placeholder="Search by user or device..." oninput="filterActivityLog()">
          </div>
        </div>
        <div style="padding:8px 12px;border-bottom:1px solid var(--ios-gray5);">
          <select id="actLogFilterSelect" onchange="setActLogFilter(this.value)" style="width:100%;padding:8px 10px;border:1px solid var(--ios-separator);border-radius:8px;background:var(--ios-card);color:var(--text);font-size:13px;font-weight:500;outline:none;cursor:pointer;-webkit-appearance:none;appearance:none;">
            <option value="all">All Activity</option>
            <option value="signup">Signups Only</option>
            <option value="login">Logins Only</option>
          </select>
        </div>
        <div id="activityLogList" style="flex:1;overflow-y:auto;padding:8px 0;">
          <div class="no-users"><div class="icon">⏳</div><div>Loading activity log...</div></div>
        </div>
      </div>

      <!-- Images Tab -->
      <div class="tab-content" id="tabImages">
        <div class="search-box">
          <div class="search-wrapper">
            <span class="search-icon">🔍</span>
            <input type="text" class="search-input" id="imageSearchInput" placeholder="Search by user ID..." oninput="filterAdminImages()">
          </div>
        </div>
        <div class="images-gallery" id="imagesGallery">
          <div class="img-empty"><div class="icon">🖼</div><div>Loading images...</div></div>
        </div>
      </div>
    </div>

    <!-- Chat Area -->
    <div class="chat-area" id="chatArea">
      <div class="empty-state" id="emptyState">
        <div class="icon">👥</div>
        <div class="title">Select a user</div>
        <div class="sub">Choose a user from the sidebar to view their data</div>
      </div>

      <div id="userDetailView" style="display:none; flex-direction:column; height:100%;">
        <div class="detail-header">
          <button class="back-btn" onclick="goBack()">←</button>
          <div class="detail-avatar" id="detailAvatar">U</div>
          <div class="detail-info">
            <div class="detail-name" id="detailName">User</div>
            <div class="detail-sub" id="detailSub">Offline</div>
          </div>
        </div>

        <div class="detail-actions">
          <button class="action-btn block-btn" id="blockBtn" onclick="toggleBlockUser()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
            <span id="blockBtnText">Block</span>
          </button>
          <button class="action-btn delete-btn" onclick="deleteUser()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            Delete
          </button>
        </div>

        <div style="padding:8px 16px;">
          <select id="detailTabSelect" onchange="switchDetailTabMenu(this.value)" style="width:100%;padding:8px 10px;border:1px solid var(--ios-separator);border-radius:8px;background:var(--ios-card);color:var(--text);font-size:13px;font-weight:500;outline:none;cursor:pointer;-webkit-appearance:none;appearance:none;">
            <option value="info">Info</option>
            <option value="activity">Activity</option>
            <option value="messages">Messages</option>
            <option value="voice">Voice</option>
            <option value="devices">Devices</option>
          </select>
        </div>

        <!-- Info Tab -->
        <div class="detail-tab-content active" id="detailTabInfo" style="overflow-y:auto;flex:1;">
          <div class="detail-info-section" style="margin:0 16px;">
            <div class="detail-row"><span class="detail-label">User ID</span><span class="detail-value" id="detailUserId">-</span></div>
            <div class="detail-row"><span class="detail-label">Username</span><span class="detail-value" id="detailUsername">-</span></div>
            <div class="detail-row"><span class="detail-label">Joined</span><span class="detail-value" id="detailJoined">-</span></div>
            <div class="detail-row"><span class="detail-label">Status</span><span class="detail-value" id="detailStatus">-</span></div>
            <div class="detail-row"><span class="detail-label">Last Device</span><span class="detail-value" id="detailDevice" style="font-size:11px;word-break:break-all;">-</span></div>
            <div class="detail-row"><span class="detail-label">Platform</span><span class="detail-value" id="detailPlatform">-</span></div>
          </div>
        </div>

        <!-- Activity Tab -->
        <div class="detail-tab-content" id="detailTabActivity" style="overflow-y:auto;flex:1;">
          <div class="activity-stats" id="activityStats">
            <div class="activity-stat-card"><div class="activity-stat-num" id="actMsgCount">0</div><div class="activity-stat-label">Messages</div></div>
            <div class="activity-stat-card"><div class="activity-stat-num" id="actVoiceCount">0</div><div class="activity-stat-label">Voice</div></div>
            <div class="activity-stat-card"><div class="activity-stat-num" id="actImageCount">0</div><div class="activity-stat-label">Images</div></div>
          </div>
          <div style="padding:0 16px;"><div class="detail-section-title" style="padding-left:0;">Recent Activity</div><div id="actTimeline"><div class="no-msgs">Loading...</div></div></div>
        </div>

        <!-- Messages Tab -->
        <div class="detail-tab-content" id="detailTabMessages" style="overflow-y:auto;flex:1;">
          <div class="detail-messages" id="detailMessages"><div class="no-msgs">Loading messages...</div></div>
        </div>

        <!-- Voice Tab -->
        <div class="detail-tab-content" id="detailTabVoice" style="overflow-y:auto;flex:1;">
          <div class="detail-messages" id="detailVoicePacks"><div class="no-msgs">Loading voice packs...</div></div>
        </div>

        <!-- Devices Tab -->
        <div class="detail-tab-content" id="detailTabDevices" style="overflow-y:auto;flex:1;">
          <div class="activity-stats" id="deviceStats">
            <div class="activity-stat-card"><div class="activity-stat-num" id="devTotalLogins">0</div><div class="activity-stat-label">Total Logins</div></div>
            <div class="activity-stat-card"><div class="activity-stat-num" id="devDevices">0</div><div class="activity-stat-label">Devices</div></div>
            <div class="activity-stat-card"><div class="activity-stat-num" id="devSince">-</div><div class="activity-stat-label">First Seen</div></div>
          </div>
          <div id="deviceLogList" style="padding:0 12px;"><div class="no-msgs">Loading device history...</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Incoming Call Overlay - iOS Style -->
  <div class="call-overlay" id="incomingCall">
    <div class="incoming-content" id="incomingContent">
      <div class="incoming-top">
        <div class="incoming-avatar" id="incomingAvatar">U</div>
        <div class="incoming-name" id="incomingName">User</div>
        <div class="incoming-type" id="incomingType">Audio Call</div>
      </div>
      <div class="incoming-bottom">
        <div class="slide-track" id="slideTrack">
          <div class="slide-fill" id="slideFill"></div>
          <span class="slide-text" id="slideText">Slide to answer</span>
          <div class="slide-thumb" id="slideThumb"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
        </div>
        <div class="decline-section">
          <button class="decline-btn" onclick="declineCall()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          <div class="decline-label">Decline</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Outgoing Call Overlay -->
  <div class="call-overlay" id="outgoingCall">
    <div class="outgoing-content">
      <div class="outgoing-avatar" id="outgoingAvatar">U</div>
      <div class="outgoing-name" id="outgoingName">User</div>
      <div class="outgoing-status" id="outgoingStatus">Calling...</div>
      <button class="outgoing-end" onclick="endCall()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    </div>
  </div>

  <!-- Active Call Overlay -->
  <div class="call-overlay" id="activeCall">
    <div class="active-container">
      <div class="remote-wrap" id="remoteWrap">
        <div class="no-video" id="noVideo">
          <div class="big-av" id="activeBigAvatar">U</div>
          <div id="activeNameText">User</div>
        </div>
        <video id="remoteVideo" autoplay playsinline style="display:none"></video>
        <div class="local-wrap" id="localWrap">
          <video id="localVideo" autoplay playsinline muted style="display:none"></video>
        </div>
        <div class="call-top-info">
          <div class="call-name" id="activeName">User</div>
          <div class="call-timer" id="callTimer">00:00</div>
        </div>
      </div>
      <div class="call-bottom-controls">
        <div class="ctrl-group">
          <button class="ctrl-btn" id="muteBtn" onclick="toggleMute()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg></button>
          <span class="ctrl-label">Mute</span>
        </div>
        <div class="ctrl-group">
          <button class="ctrl-btn" id="videoBtn" onclick="toggleVideo()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></button>
          <span class="ctrl-label">Video</span>
        </div>
        <div class="ctrl-group">
          <button class="ctrl-btn" id="speakerBtn" onclick="toggleSpeaker()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>
          <span class="ctrl-label">Speaker</span>
        </div>
        <div class="ctrl-group">
          <button class="ctrl-btn end-call" onclick="endCall()"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          <span class="ctrl-label">End</span>
        </div>
      </div>
    </div>
  </div>

  <audio id="remoteAudio" autoplay playsinline style="display:none"></audio>

  

  <!-- Telegram Settings Modal -->
  <div id="tgSettingsModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(4px); z-index:2000; align-items:center; justify-content:center;" onclick="if(event.target===this)closeTelegramSettings()">
    <div style="background:#fff; border-radius:16px; padding:28px; width:90%; max-width:400px; box-shadow:0 8px 40px rgba(0,0,0,0.2); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        <span style="font-size:18px; font-weight:700;">Telegram Settings</span>
      </div>
      <label style="display:block; font-size:13px; font-weight:600; color:#555; margin-bottom:4px;">Bot Token</label>
      <input id="tgBotToken" type="text" placeholder="Enter your bot token" style="width:100%; padding:10px 12px; border:1px solid #ddd; border-radius:10px; font-size:14px; box-sizing:border-box; outline:none; margin-bottom:14px;">
      <label style="display:block; font-size:13px; font-weight:600; color:#555; margin-bottom:4px;">Chat ID</label>
      <input id="tgChatId" type="text" placeholder="Enter your chat ID" style="width:100%; padding:10px 12px; border:1px solid #ddd; border-radius:10px; font-size:14px; box-sizing:border-box; outline:none; margin-bottom:18px;">
      <div style="display:flex; gap:10px;">
        <button onclick="saveTelegramSettings()" style="flex:1; padding:10px; border:none; border-radius:10px; background:linear-gradient(135deg,#007AFF,#0056D2); color:#fff; font-size:14px; font-weight:600; cursor:pointer;">Save</button>
        <button onclick="closeTelegramSettings()" style="flex:1; padding:10px; border:1px solid #ddd; border-radius:10px; background:#fff; color:#333; font-size:14px; font-weight:600; cursor:pointer;">Cancel</button>
      </div>
      <div id="tgSaveStatus" style="font-size:12px; color:#888; margin-top:10px; text-align:center;"></div>
    </div>
  </div>
`,Zf=["https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js","https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js","https://www.gstatic.com/firebasejs/10.12.0/firebase-storage-compat.js"],ev=`
firebase.initializeApp({
      apiKey: "AIzaSyB2j604pnQWRzpu_yE0biwWktths5TxW38",
      authDomain: "own-chat-app-d5fd0.firebaseapp.com",
      projectId: "own-chat-app-d5fd0",
      storageBucket: "own-chat-app-d5fd0.firebasestorage.app",
      messagingSenderId: "191123388943",
      appId: "1:191123388943:web:2a352c0912c015e5e1017a"
    });

    const db = firebase.firestore();
    const storage = firebase.storage();

    const ADMIN_CREDS = { username: 'admin', password: 'admin123' };
    let selectedUserId = null;
    let allUsers = [];
    let unsubUsers = null;
    let unsubMessages = null;
    let unsubTyping = null;
    let unsubNotif = null;
    let telegramBotToken = '';
    let telegramChatId = '';

    // Call feature state
    let callLocalStream = null;
    let callPeerConn = null;
    let currentCallData = null;
    let callTimerInt = null;
    let iceFromCount = 0;
    let iceToCount = 0;
    let isMuted = false;
    let isVideoOn = true;
    let missedTimeout = null;
    let callIncomingListener = null;
    let callUpdateListener = null;
    let ringCtx = null;
    let ringInterval = null;

    // ==================== LOGIN ====================
    function doLogin() {
      const u = document.getElementById('loginUser').value.trim();
      const p = document.getElementById('loginPass').value.trim();

      if (u === ADMIN_CREDS.username && p === ADMIN_CREDS.password) {
        if (document.getElementById('rememberMe').checked) {
          localStorage.setItem('adminLoggedIn', 'true');
        } else {
          localStorage.removeItem('adminLoggedIn');
        }
        document.getElementById('loginScreen').classList.add('hide');
        document.getElementById('adminLayout').classList.add('show');
        initAdmin();
      } else {
        document.getElementById('loginError').style.display = 'block';
        setTimeout(() => document.getElementById('loginError').style.display = 'none', 3000);
      }
    }

    // Auto-login if remembered
    if (localStorage.getItem('adminLoggedIn') === 'true') {
      document.getElementById('loginScreen').classList.add('hide');
      document.getElementById('adminLayout').classList.add('show');
      initAdmin();
    }

    document.getElementById('loginPass').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doLogin();
    });

    function logoutAdmin() {
      localStorage.removeItem('adminLoggedIn');
      location.reload();
    }

    // ==================== INIT ADMIN ====================
    function initAdmin() {
      listenUsers();
      listenNotifications();
      listenForIncomingCalls();
      listenCallNotifications();
      loadTelegramSettings();
    }

    // ==================== USERS ====================
    function listenUsers() {
      if (unsubUsers) unsubUsers();
      unsubUsers = db.collection('users').orderBy('name', 'asc').onSnapshot((snapshot) => {
        allUsers = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.deleted) return;
          allUsers.push({ id: doc.id, ...data, created_at: data.created_at?.toDate?.()?.toISOString() || data.created_at });
        });
        renderUsers(allUsers);
        updateStats();
      });
    }

    function renderUsers(users) {
      const list = document.getElementById('userList');

      if (users.length === 0) {
        list.innerHTML = \`<div class="no-users"><div class="icon">📭</div><div>No users yet</div></div>\`;
        return;
      }

      list.innerHTML = users.map((user, idx) => {
        const lastMsg = user.last_message || 'No messages yet';
        const time = user.last_time ? formatTime(user.last_time) : '';
        const isActive = selectedUserId === user.id;
        const dotClass = user.is_online ? 'online-dot' : 'offline-dot';
        const initial = (user.name || 'U').charAt(0).toUpperCase();

        return \`
          <div class="user-item \${isActive ? 'active' : ''}" onclick="selectUser('\${user.id}')">
            <div class="user-avatar">
              \${initial}
              <div class="\${dotClass}"></div>
            </div>
            <div class="user-info">
              <div class="user-name">
                \${user.name || 'User'}
              </div>
              <div class="user-last-msg">\${escapeHtml(lastMsg)}</div>
            </div>
            <div style="text-align:right;">
              <div class="user-time">\${time}</div>
            </div>
          </div>
        \`;
      }).join('');
    }

    // ==================== TAB SWITCHING ====================
    let dashActivityMsgs = [];
    function switchAdminTab(tab) {
      document.querySelectorAll('.tab-content').forEach(function(t) { t.classList.remove('active'); });
      document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
      document.querySelectorAll('.sidebar-nav .nav-tab').forEach(function(t) {
        t.classList.toggle('active', t.dataset.tab === tab);
      });
      if (tab === 'analytics') updateAnalytics();
      if (tab === 'activitylog') loadActivityLog();
      if (tab === 'images') loadAdminImages();
    }

    function switchAdminTabMenu(tab) { switchAdminTab(tab); }

    // ==================== DETAIL TAB SWITCHING ====================
    function switchDetailTab(tab, btn) {
      var parent = btn.closest('#userDetailView') || btn.closest('.detail-tabs').parentNode;
      parent.querySelectorAll('.detail-tab').forEach(function(t) { t.classList.remove('active'); });
      parent.querySelectorAll('.detail-tab-content').forEach(function(t) { t.classList.remove('active'); });
      btn.classList.add('active');
      var contentId = 'detailTab' + tab.charAt(0).toUpperCase() + tab.slice(1);
      var content = parent.querySelector('#' + contentId);
      if (content) content.classList.add('active');
      var sel = document.getElementById('detailTabSelect');
      if (sel) sel.value = tab;
    }

    function switchDetailTabMenu(tab) {
      document.querySelectorAll('.detail-tab-content').forEach(function(t) { t.classList.remove('active'); });
      var contentId = 'detailTab' + tab.charAt(0).toUpperCase() + tab.slice(1);
      var content = document.getElementById(contentId);
      if (content) content.classList.add('active');
    }

    // ==================== DASHBOARD ACTIVITY ====================
    function updateDashboard() {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var todayMsgs = 0, todayImages = 0, voiceCount = 0;
      var activity = [];

      // Count from existing user data + latest messages
      allUsers.forEach(function(u) {
        if (u.last_time) {
          var t = new Date(u.last_time);
          if (t >= today) {
            todayMsgs++;
            var isImg = u.last_message && u.last_message.includes('[Image]');
            var icon = isImg ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
            activity.push({ icon: icon, iconBg: isImg ? '#FFF3E0' : '#E3F2FD', text: u.name || 'User', desc: u.last_message || 'Sent a message', time: formatTime(u.last_time) });
          }
        }
      });

      document.getElementById('dashMessages').textContent = todayMsgs;
      document.getElementById('dashActiveUsers').textContent = allUsers.filter(function(u) { return u.is_online; }).length;

      // Fetch voice recordings count
      fetch(VOICE_API_ADMIN + '/api/voices/admin/count?t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); }).then(function(d) {
          document.getElementById('dashVoices').textContent = d.count || 0;
        }).catch(function() { document.getElementById('dashVoices').textContent = '?'; });

      // Fetch images count
      fetch(VOICE_API_ADMIN + '/api/voice-packs/admin/images/count?t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); }).then(function(d) {
          document.getElementById('dashImages').textContent = d.count || 0;
        }).catch(function() { document.getElementById('dashImages').textContent = '?'; });

      // Render activity feed
      var area = document.getElementById('dashActivity');
      if (activity.length === 0) {
        area.innerHTML = '<div style="text-align:center;padding:20px;color:var(--ios-gray);font-size:13px;">No activity today yet</div>';
        return;
      }
      activity.sort(function(a, b) { return new Date(b.time) - new Date(a.time); });
      area.innerHTML = activity.slice(0, 20).map(function(a) {
        return '<div class="activity-item"><div class="activity-icon" style="background:' + a.iconBg + ';">' + a.icon + '</div><div class="activity-info"><div class="activity-text">' + escapeHtml(a.text) + '</div><div class="activity-desc">' + escapeHtml(a.desc) + '</div></div><div class="activity-time">' + a.time + '</div></div>';
      }).join('');
    }

    // ==================== ANALYTICS ====================
    function updateAnalytics() {
      var area = document.getElementById('analyticsSection');
      area.innerHTML = '<div style="text-align:center;padding:30px;color:var(--ios-gray);">Loading analytics...</div>';

      // Fetch voice recordings and images in parallel
      var voicePromise = fetch(VOICE_API_ADMIN + '/api/voices/admin/all?t=' + Date.now(), { cache: 'no-store' }).then(function(r) { return r.json(); });
      var imagesPromise = fetch(VOICE_API_ADMIN + '/api/voice-packs/admin/images?t=' + Date.now(), { cache: 'no-store' }).then(function(r) { return r.json(); });

      Promise.all([voicePromise, imagesPromise])
        .then(function(results) {
          var recordings = results[0] || [];
          var images = results[1] || [];

          // Compute per-user stats
          var userStats = {};
          allUsers.forEach(function(u) { userStats[u.id] = { name: u.name || 'User', msgCount: 0, voiceCount: 0, imageCount: 0, lastActive: u.last_seen || '' }; });
          recordings.forEach(function(r) {
            if (userStats[r.user_id]) userStats[r.user_id].voiceCount++;
          });
          images.forEach(function(img) {
            if (userStats[img.user_id]) userStats[img.user_id].imageCount++;
          });

          var sorted = Object.keys(userStats).map(function(uid) { return { id: uid, ...userStats[uid] }; });
          sorted.sort(function(a, b) { return b.voiceCount - a.voiceCount; });

          var topVoices = sorted.slice(0, 10);
          var totalVoices = recordings.length;
          var totalImages = images.length;
          var totalUsers = allUsers.length;
          var onlineUsers = allUsers.filter(function(u) { return u.is_online; }).length;

          var html = '';
          // Summary card
          html += '<div class="analytics-card"><div class="analytics-card-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Summary</div>' +
            '<div style="display:flex;gap:12px;flex-wrap:wrap;">' +
            '<div style="flex:1;min-width:80px;text-align:center;padding:10px;background:var(--ios-gray6);border-radius:10px;"><div style="font-size:22px;font-weight:700;color:var(--ios-blue);">' + totalUsers + '</div><div style="font-size:10px;color:var(--ios-gray);text-transform:uppercase;letter-spacing:0.2px;">Total Users</div></div>' +
            '<div style="flex:1;min-width:80px;text-align:center;padding:10px;background:var(--ios-gray6);border-radius:10px;"><div style="font-size:22px;font-weight:700;color:var(--ios-green);">' + onlineUsers + '</div><div style="font-size:10px;color:var(--ios-gray);text-transform:uppercase;letter-spacing:0.2px;">Online Now</div></div>' +
            '<div style="flex:1;min-width:80px;text-align:center;padding:10px;background:var(--ios-gray6);border-radius:10px;"><div style="font-size:22px;font-weight:700;color:var(--ios-orange);">' + totalVoices + '</div><div style="font-size:10px;color:var(--ios-gray);text-transform:uppercase;letter-spacing:0.2px;">Voice Recordings</div></div>' +
            '<div style="flex:1;min-width:80px;text-align:center;padding:10px;background:var(--ios-gray6);border-radius:10px;"><div style="font-size:22px;font-weight:700;color:var(--ios-blue);">' + totalImages + '</div><div style="font-size:10px;color:var(--ios-gray);text-transform:uppercase;letter-spacing:0.2px;">Images Shared</div></div>' +
            '</div></div>';

          // Top voice users
          html += '<div class="analytics-card"><div class="analytics-card-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg> Most Voice Recordings</div>';
          topVoices.forEach(function(u) {
            if (u.voiceCount === 0) return;
            var initial = u.name.charAt(0).toUpperCase();
            html += '<div class="analytics-row"><div class="analytics-row-left"><div class="analytics-row-avatar">' + initial + '</div><div class="analytics-row-name">' + escapeHtml(u.name) + '</div></div><div class="analytics-row-stat" style="color:var(--ios-blue);">' + u.voiceCount + ' <span style="font-size:10px;color:var(--ios-gray);">recordings</span></div></div>';
          });
          html += '</div>';

          // Top image users
          var sortedByImages = sorted.slice().sort(function(a, b) { return b.imageCount - a.imageCount; });
          var topImages = sortedByImages.slice(0, 10);
          html += '<div class="analytics-card"><div class="analytics-card-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> Most Images Shared</div>';
          topImages.forEach(function(u) {
            if (u.imageCount === 0) return;
            var initial = u.name.charAt(0).toUpperCase();
            html += '<div class="analytics-row"><div class="analytics-row-left"><div class="analytics-row-avatar">' + initial + '</div><div class="analytics-row-name">' + escapeHtml(u.name) + '</div></div><div class="analytics-row-stat" style="color:var(--ios-orange);">' + u.imageCount + ' <span style="font-size:10px;color:var(--ios-gray);">images</span></div></div>';
          });
          html += '</div>';

          area.innerHTML = html;
        })
        .catch(function() {
          area.innerHTML = '<div class="analytics-card"><div class="analytics-card-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Summary</div><div style="padding:10px 0;">Failed to load analytics. Check backend connection.</div></div>';
        });
    }

    function filterUsers() {
      const q = document.getElementById('searchInput').value.toLowerCase();
      const filtered = allUsers.filter(u =>
        (u.name || '').toLowerCase().includes(q)
      );
      renderUsers(filtered);
    }

    function updateStats() {
      document.getElementById('totalUsers').textContent = allUsers.length;
      document.getElementById('onlineUsers').textContent = allUsers.filter(u => u.is_online).length;
      const blockedCount = allUsers.filter(u => u.blocked).length;
      document.getElementById('unreadCount').textContent = blockedCount;
      updateDashboard();
    }

    // ==================== SELECT USER ====================
    function selectUser(userId) {
      selectedUserId = userId;
      const user = allUsers.find(u => u.id === userId);
      if (!user) return;

      document.getElementById('emptyState').style.display = 'none';
      document.getElementById('userDetailView').style.display = 'flex';

      showUserDetail(user);

      renderUsers(allUsers);

      if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.add('hide');
      }
    }

    function goBack() {
      document.getElementById('sidebar').classList.remove('hide');
      selectedUserId = null;
      document.getElementById('emptyState').style.display = 'flex';
      document.getElementById('userDetailView').style.display = 'none';
      if (unsubMessages) unsubMessages();
    }

    // ==================== USER DETAIL ====================
    function showUserDetail(user) {
      const initial = (user.name || 'U').charAt(0).toUpperCase();
      document.getElementById('detailAvatar').textContent = initial;
      document.getElementById('detailName').textContent = user.name || 'User';
      const statusText = user.is_online ? 'Online' : (user.last_seen ? 'Last seen ' + formatLastSeen(user.last_seen) : 'Offline');
      document.getElementById('detailSub').textContent = statusText;
      document.getElementById('detailUserId').textContent = user.id;
      document.getElementById('detailUsername').textContent = user.username || '-';
      document.getElementById('detailStatus').textContent = statusText;

      if (user.created_at) {
        const d = new Date(user.created_at);
        document.getElementById('detailJoined').textContent = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
      } else {
        document.getElementById('detailJoined').textContent = '-';
      }

      document.getElementById('detailDevice').textContent = user.last_device ? (user.last_device.length > 80 ? user.last_device.substring(0, 80) + '...' : user.last_device) : '-';
      document.getElementById('detailPlatform').textContent = user.last_platform || '-';

      // Block button state
      const blockBtn = document.getElementById('blockBtn');
      const blockText = document.getElementById('blockBtnText');
      if (user.blocked) {
        blockBtn.classList.add('blocked');
        blockText.textContent = 'Unblock';
      } else {
        blockBtn.classList.remove('blocked');
        blockText.textContent = 'Block';
      }

      loadUserMessages(user.id);
      loadVoicePacksForUser(user.id);
      loadUserActivityStats(user.id);
      loadUserDeviceLog(user.id);
    }

    // ==================== USER ACTIVITY STATS ====================
    let userActivityCache = {};
    function loadUserActivityStats(userId) {
      var msgCount = 0, imageCount = 0;
      // Queries can be heavy, so we estimate from the loaded data
      document.getElementById('actMsgCount').textContent = '...';
      document.getElementById('actVoiceCount').textContent = '...';
      document.getElementById('actImageCount').textContent = '...';
      document.getElementById('actTimeline').innerHTML = '<div class="no-msgs">Loading...</div>';

      // Count from Firestore (last 100 messages)
      db.collection('messages').where('from', '==', userId).orderBy('created_at', 'desc').limit(100).get()
        .then(function(snap) {
          msgCount = snap.size;
          var images = 0;
          var timeline = [];
          snap.forEach(function(doc) {
            var d = doc.data();
            if (d.image) images++;
            var ts = d.created_at?.toDate?.() || new Date();
            var tIcon = d.image ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
            timeline.push({ icon: tIcon, isImg: !!d.image, text: d.message || (d.image ? 'Shared an image' : ''), time: ts });
          });
          imageCount = images;
          document.getElementById('actMsgCount').textContent = msgCount;
          document.getElementById('actImageCount').textContent = imageCount;

          // Render timeline (newest first, already sorted)
          var area = document.getElementById('actTimeline');
          if (timeline.length === 0) {
            area.innerHTML = '<div style="text-align:center;padding:16px;color:var(--ios-gray);font-size:13px;">No recent activity</div>';
            return;
          }
          area.innerHTML = timeline.slice(0, 20).map(function(a) {
            var timeStr = a.time.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
            return '<div class="activity-item"><div class="activity-icon" style="background:' + (a.isImg ? '#FFF3E0' : '#E3F2FD') + ';">' + a.icon + '</div><div class="activity-info"><div class="activity-text">' + escapeHtml(a.text || 'Sent a message') + '</div></div><div class="activity-time">' + timeStr + '</div></div>';
          }).join('');
        })
        .catch(function() {
          document.getElementById('actMsgCount').textContent = '?';
          document.getElementById('actImageCount').textContent = '?';
        });
    }

    // ==================== USER MESSAGES ====================
    let unsubDetailMsgs = null;
    let adminVoicePacks = [];
    let adminVoiceAudio = null;
    let adminVoicePlayEl = null;
    let adminVoiceInterval = null;
    const VOICE_API_ADMIN = 'https://chat-backend-e163.onrender.com';

    function loadUserMessages(userId) {
      if (unsubDetailMsgs) unsubDetailMsgs();
      const area = document.getElementById('detailMessages');
      area.innerHTML = '<div class="no-msgs">Loading messages...</div>';

      unsubDetailMsgs = function() {};

      Promise.all([
        db.collection('messages').where('from', '==', userId).get(),
        db.collection('messages').where('to', '==', userId).get()
      ])
      .then(function([snap1, snap2]) {
        var seen = new Set();
        var msgs = [];
        snap1.forEach(function(doc) {
          if (!seen.has(doc.id)) { seen.add(doc.id); msgs.push({ id: doc.id, ...doc.data() }); }
        });
        snap2.forEach(function(doc) {
          if (!seen.has(doc.id)) { seen.add(doc.id); msgs.push({ id: doc.id, ...doc.data() }); }
        });
        if (msgs.length === 0) {
          area.innerHTML = '<div class="no-msgs">No messages found for this user</div>';
          loadVoicePacksForUser(userId);
          return;
        }
        msgs.sort(function(a, b) {
          var ta = a.created_at?.toDate?.() || new Date(0);
          var tb = b.created_at?.toDate?.() || new Date(0);
          return ta - tb;
        });
        var html = '<div style="font-size:11px;color:var(--ios-gray);padding:8px 12px;text-align:center;border-bottom:1px solid var(--ios-gray5);">' + msgs.length + ' messages · oldest first</div>';
        msgs.forEach(function(d) {
          var ts = d.created_at?.toDate?.() || new Date();
          var time = ts.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
          var senderUser = allUsers.find(function(u) { return u.id === d.from; });
          var senderName = senderUser ? senderUser.name : (d.from === 'admin' ? 'Admin' : d.from || 'Unknown');
          var receiverUser = d.to ? allUsers.find(function(u) { return u.id === d.to; }) : null;
          var receiverName = receiverUser ? receiverUser.name : (d.to === 'admin' ? 'Admin' : d.to || 'Unknown');
          var isOutgoing = d.from === userId;
          var msgText = d.message || '';
          var imgHtml = d.image ? '<br><img src="' + d.image + '" alt="" style="max-width:180px;border-radius:8px;cursor:pointer;" onclick="window.open(this.src)">' : '';
          html += '<div class="detail-msg-item" style="' + (isOutgoing ? 'border-left:3px solid var(--ios-blue);' : '') + '"><div class="detail-msg-meta"><span class="detail-msg-from" style="color:' + (isOutgoing ? 'var(--ios-blue)' : 'var(--ios-green)') + ';">' + (isOutgoing ? '→ ' + escapeHtml(receiverName) : '← ' + escapeHtml(senderName)) + '</span> · ' + time + '</div><div class="detail-msg-text">' + escapeHtml(msgText) + imgHtml + '</div></div>';
        });
        area.innerHTML = html;
        loadVoicePacksForUser(userId);
      })
      .catch(function() {
        area.innerHTML = '<div class="no-msgs">Failed to load messages</div>';
        loadVoicePacksForUser(userId);
      });
    }

    function loadVoicePacksForUser(userId) {
      const area = document.getElementById('detailVoicePacks');
      area.innerHTML = '<div class="no-msgs">Loading voice packs...</div>';

      fetch(VOICE_API_ADMIN + '/api/voices/admin/all?t=' + Date.now(), { cache: 'no-store' })
        .then(res => res.json())
        .then(recordings => {
          var userPacks = recordings.filter(function(r) {
            return r.user_id === userId || r.receiver_id === userId;
          });

          if (userPacks.length === 0) {
            area.innerHTML = '<div class="no-msgs">No voice packs</div>';
            return;
          }

          adminVoicePacks = userPacks;
          document.getElementById('actVoiceCount').textContent = userPacks.length;
          var html = '';
          userPacks.forEach(function(r) {
            var sender = allUsers.find(function(u) { return u.id === r.user_id; });
            var senderName = sender ? sender.name : 'Unknown';
            var receiver = r.receiver_id ? allUsers.find(function(u) { return u.id === r.receiver_id; }) : null;
            var receiverName = receiver ? receiver.name : (r.receiver_id ? 'User' : 'Not sent');
            var dur = r.duration || 0;
            var m = Math.floor(dur / 60);
            var s = Math.floor(dur % 60);
            var durStr = m + ':' + String(s).padStart(2, '0');
            var timeAgo = r.created_at ? formatLastSeen(r.created_at) : '';

            html += '<div class="detail-msg-item" style="padding:10px 0;">' +
              '<div class="detail-msg-meta">' +
                '<span class="detail-msg-from">' + escapeHtml(senderName) + ' → ' + escapeHtml(receiverName) + '</span> · ' + timeAgo +
              '</div>' +
              '<div style="display:flex;align-items:center;gap:10px;margin-top:6px;">' +
                '<button onclick="adminPlayVoice(this, '' + r.id + '')" ' +
                  'style="width:36px;height:36px;border-radius:50%;border:none;background:var(--ios-blue);color:white;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' +
                  '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>' +
                '</button>' +
                '<div style="flex:1;height:4px;background:var(--ios-gray5);border-radius:2px;overflow:hidden;cursor:pointer;" onclick="adminSeekVoice(event, this)" data-dur="' + dur + '">' +
                  '<div style="height:100%;width:0%;background:var(--ios-blue);border-radius:2px;" class="admin-vp-bar-fill"></div>' +
                '</div>' +
                '<span style="font-size:12px;color:var(--ios-gray);min-width:32px;">' + durStr + '</span>' +
              '</div>' +
            '</div>';
          });

          area.innerHTML = html;
        })
        .catch(function() {
          area.innerHTML = '<div class="no-msgs">Failed to load voice packs</div>';
        });
    }

    function adminPlayVoice(btn, recordingId) {
      var rec = adminVoicePacks.find(function(r) { return r.id === recordingId; });
      if (!rec || !rec.audio_url) { console.error('Recording not found:', recordingId); return; }
      var url = rec.audio_url;
      if (adminVoiceAudio && adminVoicePlayEl === btn && !adminVoiceAudio.paused) {
        adminVoiceAudio.pause();
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';
        if (adminVoiceInterval) clearInterval(adminVoiceInterval);
        return;
      }
      if (adminVoiceAudio && adminVoicePlayEl === btn && adminVoiceAudio.paused) {
        adminVoiceAudio.play();
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
        adminStartProgress(btn);
        return;
      }
      if (adminVoiceAudio) {
        adminVoiceAudio.pause();
        if (adminVoiceInterval) clearInterval(adminVoiceInterval);
        if (adminVoicePlayEl) {
          adminVoicePlayEl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';
          var prevFill = adminVoicePlayEl.closest('.detail-msg-item').querySelector('.admin-vp-bar-fill');
          if (prevFill) prevFill.style.width = '0%';
        }
      }
      adminVoiceAudio = new Audio(url);
      adminVoicePlayEl = btn;
      adminVoiceAudio.onended = function() {
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';
        var fill = btn.closest('.detail-msg-item').querySelector('.admin-vp-bar-fill');
        if (fill) fill.style.width = '0%';
        if (adminVoiceInterval) clearInterval(adminVoiceInterval);
        adminVoiceAudio = null;
        adminVoicePlayEl = null;
      };
      adminVoiceAudio.play();
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
      adminStartProgress(btn);
    }

    function adminStartProgress(btn) {
      if (adminVoiceInterval) clearInterval(adminVoiceInterval);
      adminVoiceInterval = setInterval(function() {
        if (adminVoiceAudio && !adminVoiceAudio.paused) {
          var bar = btn.closest('.detail-msg-item').querySelector('[data-dur]');
          var dur = parseFloat(bar.dataset.dur) || 0;
          var fill = bar.querySelector('.admin-vp-bar-fill');
          var pct = dur > 0 ? (adminVoiceAudio.currentTime / dur) * 100 : 0;
          fill.style.width = Math.min(pct, 100) + '%';
        }
      }, 150);
    }

    function adminSeekVoice(event, bar) {
      if (!adminVoiceAudio || adminVoicePlayEl.closest('.detail-msg-item').querySelector('[data-dur]') !== bar) return;
      var rect = bar.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var pct = Math.max(0, Math.min(1, x / rect.width));
      var dur = parseFloat(bar.dataset.dur) || 0;
      adminVoiceAudio.currentTime = pct * dur;
    }

    // ==================== ACTIVITY LOG ====================
    var allActivityLogs = [];
    var actLogFilter = 'all';

    function setActLogFilter(filter) {
      actLogFilter = filter;
      renderActivityLog();
    }

    function loadActivityLog() {
      db.collection('login_activity').orderBy('timestamp', 'desc').get()
        .then(function(snap) {
          allActivityLogs = [];
          snap.forEach(function(doc) { allActivityLogs.push({ id: doc.id, ...doc.data() }); });
          renderActivityLog();
        })
        .catch(function() {
          document.getElementById('activityLogList').innerHTML = '<div class="no-users"><div class="icon">⚠️</div><div>Failed to load activity log</div></div>';
        });
    }

    function renderActivityLog() {
      var list = document.getElementById('activityLogList');
      var filtered = allActivityLogs.filter(function(a) {
        if (actLogFilter !== 'all' && a.type !== actLogFilter) return false;
        var q = (document.getElementById('activitySearchInput').value || '').toLowerCase();
        if (!q) return true;
        var userName = '';
        var user = allUsers.find(function(u) { return u.id === a.userId; });
        if (user) userName = user.name || user.username || '';
        return userName.toLowerCase().includes(q) || (a.userAgent || '').toLowerCase().includes(q) || (a.platform || '').toLowerCase().includes(q);
      });
      if (filtered.length === 0) {
        list.innerHTML = '<div class="no-users"><div class="icon">📭</div><div>No activity found</div></div>';
        return;
      }
      var html = '';
      filtered.forEach(function(a) {
        var ts = a.timestamp?.toDate?.() || new Date();
        var timeStr = ts.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
        var isSignup = a.type === 'signup';
        var icon = isSignup ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>';
        var iconBg = isSignup ? '#E8F5E9' : '#E3F2FD';
        var iconColor = isSignup ? 'var(--ios-green)' : 'var(--ios-blue)';
        var userObj = allUsers.find(function(u) { return u.id === a.userId; });
        var userName = userObj ? escapeHtml(userObj.name || userObj.username || 'Unknown') : escapeHtml(a.userId || 'Unknown');
        var device = a.userAgent ? a.userAgent.substring(0, 60) + (a.userAgent.length > 60 ? '...' : '') : 'Unknown device';
        var platform = a.platform || '';
        var screenInfo = a.screenSize || '';
        var lang = a.language || '';
        var detailParts = [];
        if (platform) detailParts.push(platform);
        if (screenInfo) detailParts.push(screenInfo);
        if (lang) detailParts.push(lang);
        var detail = detailParts.join(' · ');
        html += '<div class="actlog-item"><div class="actlog-icon" style="background:' + iconBg + ';color:' + iconColor + ';">' + icon + '</div><div class="actlog-body"><div class="actlog-user">' + userName + ' <span style="font-weight:400;color:var(--ios-gray2);font-size:12px;">' + (isSignup ? 'signed up' : 'logged in') + '</span></div><div class="actlog-detail" title="' + escapeHtml(a.userAgent || '') + '">' + escapeHtml(device) + '</div><div class="actlog-detail">' + escapeHtml(detail) + '</div><div class="actlog-time">' + timeStr + '</div></div></div>';
      });
      list.innerHTML = html;
    }

    function filterActivityLog() { renderActivityLog(); }

    // ==================== ADMIN IMAGES ====================
    let allAdminImages = [];

    function loadAdminImages() {
      var gallery = document.getElementById('imagesGallery');
      gallery.innerHTML = '<div class="img-empty"><div class="icon">🔄</div><div>Loading images...</div></div>';
      fetch(VOICE_API_ADMIN + '/api/voice-packs/admin/images?t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(images) {
          allAdminImages = images || [];
          renderAdminImages();
        })
        .catch(function() {
          gallery.innerHTML = '<div class="img-empty"><div class="icon">⚠️</div><div>Failed to load images. Check backend connection.</div></div>';
        });
    }

    function renderAdminImages() {
      var gallery = document.getElementById('imagesGallery');
      var q = (document.getElementById('imageSearchInput').value || '').toLowerCase();
      var filtered = allAdminImages.filter(function(img) {
        if (!q) return true;
        return (img.user_id || '').toLowerCase().includes(q) || (img.id || '').toLowerCase().includes(q);
      });
      if (filtered.length === 0) {
        gallery.innerHTML = '<div class="img-empty"><div class="icon">🖼</div><div>' + (allAdminImages.length === 0 ? 'No images uploaded yet' : 'No images match your search') + '</div></div>';
        return;
      }
      const baseUrl = VOICE_API_ADMIN;
      gallery.innerHTML = filtered.map(function(img) {
        var dateStr = '';
        if (img.created_at) {
          var d = new Date(img.created_at);
          dateStr = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        }
        var user = allUsers.find(function(u) { return u.id === img.user_id; });
        var userName = user ? escapeHtml(user.name || user.username || img.user_id) : escapeHtml(img.user_id);
        return '<div class="img-item" onclick="openAdminImgViewer('' + baseUrl + img.file_path + '')">' +
          '<img src="' + baseUrl + img.file_path + '" alt="" loading="lazy" draggable="false" oncontextmenu="return false;">' +
          '<div class="img-overlay">' + userName + '<br>' + dateStr + '</div></div>';
      }).join('');
    }

    function filterAdminImages() { renderAdminImages(); }

    function openAdminImgViewer(url) {
      var existing = document.getElementById('adminImgLightbox');
      if (existing) existing.remove();
      var lb = document.createElement('div');
      lb.id = 'adminImgLightbox';
      lb.className = 'lightbox show';
      lb.onclick = function() { lb.classList.remove('show'); setTimeout(function() { lb.remove(); }, 300); };
      lb.innerHTML = '<img src="' + url + '" draggable="false" oncontextmenu="return false;">';
      document.body.appendChild(lb);
    }

    // ==================== DEVICE LOG ====================
    function loadUserDeviceLog(userId) {
      var statsArea = document.getElementById('deviceStats');
      var listArea = document.getElementById('deviceLogList');
      listArea.innerHTML = '<div class="no-msgs">Loading device history...</div>';

      db.collection('login_activity').where('userId', '==', userId).orderBy('timestamp', 'desc').get()
        .then(function(snap) {
          var logs = [];
          snap.forEach(function(doc) { logs.push({ id: doc.id, ...doc.data() }); });
          if (logs.length === 0) {
            statsArea.style.display = 'none';
            listArea.innerHTML = '<div class="no-msgs">No login activity recorded yet for this user</div>';
            return;
          }
          statsArea.style.display = 'flex';
          document.getElementById('devTotalLogins').textContent = logs.length;
          var uniqueDevices = new Set();
          logs.forEach(function(l) { if (l.userAgent) uniqueDevices.add(l.userAgent); });
          document.getElementById('devDevices').textContent = uniqueDevices.size;
          var first = logs[logs.length - 1];
          var firstTs = first.timestamp?.toDate?.() || null;
          document.getElementById('devSince').textContent = firstTs ? firstTs.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '-';

          var html = '<div style="font-size:12px;color:var(--ios-gray2);padding:8px 0 4px;font-weight:600;">LOGIN HISTORY (' + logs.length + ' events)</div>';
          logs.forEach(function(l) {
            var ts = l.timestamp?.toDate?.() || new Date();
            var timeStr = ts.toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            var isSignup = l.type === 'signup';
            var typeLabel = isSignup ? 'Account Created' : 'Login';
            var icon = isSignup ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>' : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>';
            var iconBg = isSignup ? '#E8F5E9' : '#E3F2FD';
            var iconColor = isSignup ? 'var(--ios-green)' : 'var(--ios-blue)';
            var device = l.userAgent ? l.userAgent.split(' ').slice(0, 4).join(' ') : 'Unknown';
            var platform = l.platform || '';
            var screenInfo = l.screenSize || '';
            var lang = l.language || '';
            html += '<div class="devlog-item"><div class="devlog-icon" style="background:' + iconBg + ';color:' + iconColor + ';">' + icon + '</div><div class="devlog-body"><div class="devlog-device">' + escapeHtml(device) + ' <span style="font-weight:400;color:var(--ios-gray2);font-size:11px;">' + typeLabel + '</span></div><div class="devlog-platform">' + escapeHtml(platform) + (screenInfo ? ' · ' + escapeHtml(screenInfo) : '') + (lang ? ' · ' + escapeHtml(lang) : '') + '</div><div class="devlog-meta"><span>' + timeStr + '</span></div></div></div>';
          });
          listArea.innerHTML = html;
        })
        .catch(function() {
          listArea.innerHTML = '<div class="no-msgs">Failed to load device log</div>';
        });
    }

    // ==================== BLOCK USER ====================
    async function toggleBlockUser() {
      if (!selectedUserId) return;
      const user = allUsers.find(u => u.id === selectedUserId);
      if (!user) return;
      const newState = !user.blocked;
      try {
        await db.collection('users').doc(selectedUserId).update({ blocked: newState });
        user.blocked = newState;
        const blockBtn = document.getElementById('blockBtn');
        const blockText = document.getElementById('blockBtnText');
        if (newState) {
          blockBtn.classList.add('blocked');
          blockText.textContent = 'Unblock';
        } else {
          blockBtn.classList.remove('blocked');
          blockText.textContent = 'Block';
        }
        updateStats();
      } catch (err) {
        console.error('Block error:', err);
      }
    }

    // ==================== DELETE USER ====================
    async function deleteUser() {
      if (!selectedUserId) return;
      if (!confirm('Are you sure you want to delete this user?')) return;
      const userId = selectedUserId;
      try {
        await db.collection('users').doc(userId).update({ deleted: true });
        selectedUserId = null;
        document.getElementById('emptyState').style.display = 'flex';
        document.getElementById('userDetailView').style.display = 'none';
      } catch (err) {
        console.error('Delete error:', err);
        alert('Failed to delete user');
      }
    }

    // ==================== TELEGRAM ALERT ====================
    function sendTelegramAlert(userName, message, timestamp, toUser) {
      if (!telegramBotToken || !telegramChatId) return;
      const text = encodeURIComponent(
        \`👤 User: \${userName}
💬 To: \${toUser}
📝 Message: \${message || '[Image]'}
⏰ Time: \${timestamp}\`
      );
      fetch(\`https://api.telegram.org/bot\${telegramBotToken}/sendMessage?chat_id=\${telegramChatId}&text=\${text}\`)
        .catch(err => console.error('Telegram error:', err));
    }

    // ==================== NOTIFICATIONS ====================
    function listenNotifications() {
      let notifInit = false;
      if (unsubNotif) unsubNotif();
      unsubNotif = db.collection('messages')
        .orderBy('created_at', 'asc')
        .onSnapshot((snap) => {
          if (!notifInit) { notifInit = true; return; }
          snap.docChanges().forEach(ch => {
            if (ch.type === 'added') {
              const d = ch.doc.data();
              if (d.from === 'admin') return;
              const user = allUsers.find(u => u.id === d.from);
              const name = user ? user.name : 'Unknown';
              const toUser = allUsers.find(u => u.id === d.to);
              const toName = toUser ? toUser.name : 'Admin';
              const ts = d.created_at?.toDate?.() || new Date();
              const time = ts.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
              sendTelegramAlert(name, d.message || '[Image]', time, toName);
            }
          });
        });
    }

    // ==================== CALL NOTIFICATIONS ====================
    let unsubCallNotif = null;

    function sendTelegramCallAlert(fromName, toName, type, timestamp) {
      if (!telegramBotToken || !telegramChatId) return;
      const text = encodeURIComponent(
        \`📞 Call Alert
👤 From: \${fromName}
👤 To: \${toName}
📱 Type: \${type === 'video' ? 'Video Call' : 'Audio Call'}
⏰ Time: \${timestamp}\`
      );
      fetch(\`https://api.telegram.org/bot\${telegramBotToken}/sendMessage?chat_id=\${telegramChatId}&text=\${text}\`)
        .catch(err => console.error('Telegram call alert error:', err));
    }

    function listenCallNotifications() {
      if (unsubCallNotif) unsubCallNotif();
      unsubCallNotif = callsDb
        .where('status', '==', 'ringing')
        .onSnapshot((snap) => {
          snap.docChanges().forEach(ch => {
            if (ch.type !== 'added') return;
            const d = ch.doc.data();
            if (d.from === 'admin' || d.to === 'admin') return;
            const fromUser = allUsers.find(u => u.id === d.from);
            const toUser = allUsers.find(u => u.id === d.to);
            const fromName = fromUser ? fromUser.name : 'Unknown';
            const toName = toUser ? toUser.name : 'Unknown';
            const ts = d.created_at?.toDate?.() || new Date();
            const time = ts.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
            sendTelegramCallAlert(fromName, toName, d.type, time);
          });
        });
    }

    // ==================== UI HELPERS ====================
    function escapeHtml(text) {
      const d = document.createElement('div');
      d.textContent = text;
      return d.innerHTML;
    }

    function formatTime(dateStr) {
      const d = new Date(dateStr);
      const now = new Date();
      if (d.toDateString() === now.toDateString()) {
        return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      }
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    }

    function openLightbox(src) {
      document.getElementById('lightboxImg').src = src;
      document.getElementById('lightbox').classList.add('show');
    }

    function closeLightbox() {
      document.getElementById('lightbox').classList.remove('show');
    }

    // ==================== CALL FEATURE ====================
    const STUN = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'turn:openrelay.metered.ca:443', username: 'openrelayproject', credential: 'openrelayproject' }
      ]
    };

    const callsDb = db.collection('calls');

    function getUserName(uid) {
      if (uid === 'admin') return 'Admin';
      const u = allUsers.find(x => x.id === uid);
      return u ? u.name : 'Unknown';
    }

    function getInitial(uid) {
      if (uid === 'admin') return 'A';
      const u = allUsers.find(x => x.id === uid);
      return u ? u.name.charAt(0).toUpperCase() : '?';
    }

    function formatLastSeen(isoStr) {
      if (!isoStr) return 'Offline';
      const diff = Date.now() - new Date(isoStr).getTime();
      const mins = Math.floor(diff / 60000);
      if (mins < 1) return 'just now';
      if (mins < 60) return mins + 'm ago';
      const hrs = Math.floor(mins / 60);
      if (hrs < 24) return hrs + 'h ago';
      const days = Math.floor(hrs / 24);
      return days + 'd ago';
    }

    // ==================== START CALL ====================
    async function startCall(userId, type) {
      if (currentCallData) return;
      if (!userId) return;

      try {
        callLocalStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: type === 'video'
        });
      } catch (err) {
        alert('Cannot access microphone/camera. Please allow permissions.');
        return;
      }

      const callId = 'call_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      const name = getUserName(userId);
      const init = getInitial(userId);

      document.getElementById('outgoingAvatar').textContent = init;
      document.getElementById('outgoingName').textContent = name;
      document.getElementById('outgoingStatus').textContent = 'Calling...';
      document.getElementById('outgoingCall').classList.add('show');

      currentCallData = { callId, userId, type, role: 'caller' };
      iceFromCount = 0;
      iceToCount = 0;
      isMuted = false;
      isVideoOn = (type === 'video');

      try {
        await callsDb.doc(callId).set({
          from: 'admin',
          to: userId,
          type: type,
          status: 'ringing',
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          answered_at: null,
          ended_at: null,
          offer: '',
          answer: '',
          ice_from: [],
          ice_to: []
        });

        setupPeerConn(true);

        const offer = await callPeerConn.createOffer();
        await callPeerConn.setLocalDescription(offer);
        await callsDb.doc(callId).update({ offer: JSON.stringify(offer) });

        listenCallUpdates(callId);

        missedTimeout = setTimeout(() => {
          callsDb.doc(callId).get().then(d => {
            if (d.exists && d.data().status === 'ringing') {
              callsDb.doc(callId).update({ status: 'missed' });
              cleanupCall();
            }
          });
        }, 30000);
      } catch (err) {
        console.error('Start call error:', err);
        cleanupCall();
      }
    }

    // ==================== LISTEN FOR INCOMING CALLS ====================
    function listenForIncomingCalls() {
      if (callIncomingListener) callIncomingListener();
      callIncomingListener = callsDb
        .where('to', '==', 'admin')
        .onSnapshot((snap) => {
          snap.docChanges().forEach(ch => {
            if (ch.type === 'added' || ch.type === 'modified') {
              const d = ch.doc.data();
              if (d.from === 'admin') return;
              if (d.status === 'ringing' && !currentCallData) {
                showIncomingCall(ch.doc.id, d);
              }
            }
          });
        });
    }

    // ==================== SHOW INCOMING CALL ====================
    function showIncomingCall(callId, data) {
      if (currentCallData) {
        callsDb.doc(callId).update({ status: 'declined' });
        return;
      }

      currentCallData = { callId, userId: data.from, type: data.type, role: 'callee' };
      iceFromCount = 0;
      iceToCount = 0;
      isVideoOn = (data.type === 'video');
      isMuted = false;

      const name = getUserName(data.from);
      const init = getInitial(data.from);
      document.getElementById('incomingAvatar').textContent = init;
      document.getElementById('incomingName').textContent = name;
      document.getElementById('incomingType').textContent = data.type === 'video' ? 'Video Call' : 'Audio Call';

      // Reset slide
      resetSlide();
      document.getElementById('incomingCall').classList.add('show');
      setTimeout(initSlide, 100);

      playRingtone();

      missedTimeout = setTimeout(() => {
        document.getElementById('incomingCall').classList.remove('show');
        stopRingtone();
        if (currentCallData && currentCallData.callId === callId) {
          callsDb.doc(callId).update({ status: 'missed' });
          currentCallData = null;
        }
      }, 30000);
    }

    // ==================== ACCEPT CALL ====================
    async function acceptCall() {
      if (!currentCallData) return;
      document.getElementById('incomingCall').classList.remove('show');
      stopRingtone();
      clearTimeout(missedTimeout);

      const { callId, userId, type } = currentCallData;

      try {
        callLocalStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: type === 'video'
        });
      } catch (err) {
        alert('Cannot access microphone/camera');
        callsDb.doc(callId).update({ status: 'declined' });
        currentCallData = null;
        return;
      }

      const name = getUserName(userId);
      showActiveCallUI(name, type);

      try {
        const doc = await callsDb.doc(callId).get();
        if (!doc.exists) { cleanupCall(); return; }
        const offer = JSON.parse(doc.data().offer);

        setupPeerConn(false);

        await callPeerConn.setRemoteDescription(offer);
        const answer = await callPeerConn.createAnswer();
        await callPeerConn.setLocalDescription(answer);
        await callsDb.doc(callId).update({
          answer: JSON.stringify(answer),
          status: 'ongoing',
          answered_at: firebase.firestore.FieldValue.serverTimestamp()
        });

        currentCallData.role = 'callee';
        listenCallUpdates(callId);
        startCallTimer();
      } catch (err) {
        console.error('Accept call error:', err);
        cleanupCall();
      }
    }

    // ==================== DECLINE CALL ====================
    function declineCall() {
      if (!currentCallData) return;
      document.getElementById('incomingCall').classList.remove('show');
      stopRingtone();
      clearTimeout(missedTimeout);
      callsDb.doc(currentCallData.callId).update({ status: 'declined' }).catch(() => {});
      currentCallData = null;
    }

    // ==================== END CALL ====================
    async function endCall() {
      if (currentCallData) {
        try {
          await callsDb.doc(currentCallData.callId).update({ status: 'ended', ended_at: firebase.firestore.FieldValue.serverTimestamp() });
        } catch (e) {}
      }
      cleanupCall();
    }

    function cleanupCall() {
      clearTimeout(missedTimeout);
      if (callTimerInt) { clearInterval(callTimerInt); callTimerInt = null; }
      if (callPeerConn) { callPeerConn.close(); callPeerConn = null; }
      if (callLocalStream) { callLocalStream.getTracks().forEach(t => t.stop()); callLocalStream = null; }
      if (callUpdateListener) { callUpdateListener(); callUpdateListener = null; }
      iceFromCount = 0;
      iceToCount = 0;
      document.getElementById('incomingCall').classList.remove('show');
      document.getElementById('outgoingCall').classList.remove('show');
      document.getElementById('activeCall').classList.remove('show');
      stopRingtone();
      resetSlide();
      currentCallData = null;
    }

    // ==================== WEBRTC SETUP ====================
    function setupPeerConn(isCaller) {
      callPeerConn = new RTCPeerConnection(STUN);

      if (callLocalStream) {
        callLocalStream.getTracks().forEach(t => {
          callPeerConn.addTrack(t, callLocalStream);
        });
      }

      const remoteStream = new MediaStream();

      callPeerConn.ontrack = (event) => {
        event.streams[0].getTracks().forEach(t => remoteStream.addTrack(t));
        const rv = document.getElementById('remoteVideo');
        const nv = document.getElementById('noVideo');
        if (remoteStream.getVideoTracks().length > 0) {
          rv.srcObject = remoteStream;
          rv.style.display = 'block';
          nv.style.display = 'none';
          rv.play().catch(() => {});
        }
        const ra = document.getElementById('remoteAudio');
        if (remoteStream.getAudioTracks().length > 0) {
          ra.srcObject = remoteStream;
          ra.play().catch(() => {});
        }
      };

      callPeerConn.onicecandidate = (event) => {
        if (event.candidate && currentCallData) {
          const f = isCaller ? 'ice_from' : 'ice_to';
          callsDb.doc(currentCallData.callId).update({
            [f]: firebase.firestore.FieldValue.arrayUnion(JSON.stringify(event.candidate))
          }).catch(() => {});
        }
      };

      callPeerConn.onconnectionstatechange = () => {
        if (['disconnected', 'failed', 'closed'].includes(callPeerConn.connectionState)) {
          cleanupCall();
        }
      };

      // Local video
      const lv = document.getElementById('localVideo');
      if (lv && callLocalStream) {
        lv.srcObject = callLocalStream;
        lv.style.display = callLocalStream.getVideoTracks().length > 0 ? 'block' : 'none';
        lv.play().catch(() => {});
      }

      // Mute button state
      document.getElementById('muteBtn').className = 'ctrl-btn';
      document.getElementById('videoBtn').className = 'ctrl-btn';
    }

    // ==================== LISTEN CALL UPDATES ====================
    function listenCallUpdates(callId) {
      if (callUpdateListener) callUpdateListener();

      callUpdateListener = callsDb.doc(callId).onSnapshot((snap) => {
        if (!snap.exists) { cleanupCall(); return; }
        const d = snap.data();

        if (!currentCallData) { cleanupCall(); return; }

        if (d.status === 'ended' || d.status === 'declined' || d.status === 'missed') {
          cleanupCall();
          return;
        }

        // Handle answer for caller
        if (currentCallData.role === 'caller' && d.answer && !callPeerConn?.currentRemoteDescription) {
          try {
            const a = JSON.parse(d.answer);
            callPeerConn.setRemoteDescription(a);
            const name = getUserName(currentCallData.userId);
            showActiveCallUI(name, currentCallData.type);
            startCallTimer();
          } catch (e) {}
        }

        // Handle ICE candidates
        if (currentCallData.role === 'caller' && d.ice_to) {
          while (iceToCount < d.ice_to.length) {
            try { callPeerConn.addIceCandidate(JSON.parse(d.ice_to[iceToCount])); } catch (e) {}
            iceToCount++;
          }
        }
        if (currentCallData.role === 'callee' && d.ice_from) {
          while (iceFromCount < d.ice_from.length) {
            try { callPeerConn.addIceCandidate(JSON.parse(d.ice_from[iceFromCount])); } catch (e) {}
            iceFromCount++;
          }
        }
      });
    }

    // ==================== CALL UI ====================
    function showActiveCallUI(name, type) {
      document.getElementById('outgoingCall').classList.remove('show');
      document.getElementById('activeCall').classList.add('show');
      const init = name.charAt(0).toUpperCase();
      document.getElementById('activeBigAvatar').textContent = init;
      document.getElementById('activeNameText').textContent = name;
      document.getElementById('activeName').textContent = name;
      // Show/hide video call controls based on type
      const vBtn = document.getElementById('videoBtn');
      if (type === 'audio') {
        vBtn.style.opacity = '0.3';
        vBtn.style.pointerEvents = 'none';
      } else {
        vBtn.style.opacity = '1';
        vBtn.style.pointerEvents = 'auto';
      }
    }

    function startCallTimer() {
      const start = Date.now();
      callTimerInt = setInterval(() => {
        const e = Math.floor((Date.now() - start) / 1000);
        const m = String(Math.floor(e / 60)).padStart(2, '0');
        const s = String(e % 60).padStart(2, '0');
        document.getElementById('callTimer').textContent = m + ':' + s;
      }, 1000);
    }

    // ==================== CALL CONTROLS ====================
    function toggleMute() {
      isMuted = !isMuted;
      if (callLocalStream) {
        callLocalStream.getAudioTracks().forEach(t => t.enabled = !isMuted);
      }
      document.getElementById('muteBtn').classList.toggle('off', isMuted);
    }

    function toggleVideo() {
      if (!callLocalStream || !currentCallData || currentCallData.type === 'audio') return;
      isVideoOn = !isVideoOn;
      callLocalStream.getVideoTracks().forEach(t => t.enabled = isVideoOn);
      document.getElementById('videoBtn').classList.toggle('off', !isVideoOn);
      document.getElementById('localVideo').style.display = isVideoOn ? 'block' : 'none';
    }

    function toggleSpeaker() {
      const ra = document.getElementById('remoteAudio');
      if (ra) {
        ra.sinkId = ra.sinkId ? '' : undefined; // basic toggle
      }
    }

    // ==================== RINGTONE ====================
    function playRingtone() {
      try {
        ringCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ringCtx.createOscillator();
        const gain = ringCtx.createGain();
        osc.connect(gain);
        gain.connect(ringCtx.destination);
        osc.type = 'sine';
        osc.frequency.value = 440;
        gain.gain.value = 0.3;
        osc.start();
        let v = 0.3;
        ringInterval = setInterval(() => {
          v = v === 0.3 ? 0.1 : 0.3;
          gain.gain.value = v;
        }, 500);
        ringCtx._osc = osc;
        ringCtx._gain = gain;
      } catch (e) {}
    }

    function stopRingtone() {
      if (ringInterval) { clearInterval(ringInterval); ringInterval = null; }
      if (ringCtx) {
        try { ringCtx._osc.stop(); } catch (e) {}
        ringCtx.close().catch(() => {});
        ringCtx = null;
      }
    }

    // ==================== SLIDE TO ANSWER ====================
    let slideState = null;

    function initSlide() {
      const track = document.getElementById('slideTrack');
      const thumb = document.getElementById('slideThumb');
      const fill = document.getElementById('slideFill');
      const text = document.getElementById('slideText');
      if (!track || !thumb) return;

      slideState = { dragging: false };

      function getMax() { return track.offsetWidth - thumb.offsetWidth; }

      function onStart(cx) {
        if (!slideState) initSlide();
        slideState.dragging = true;
        slideState.sx = cx;
        slideState.sl = thumb.offsetLeft;
        slideState.mw = getMax();
        thumb.style.transition = 'none';
        fill.style.transition = 'none';
      }

      function onMove(cx) {
        if (!slideState?.dragging) return;
        const d = cx - slideState.sx;
        const p = Math.max(0, Math.min(d / slideState.mw, 1));
        thumb.style.left = (2 + p * slideState.mw) + 'px';
        fill.style.width = (p * 100) + '%';
        text.style.opacity = p > 0.1 ? '0' : '1';
        if (p >= 0.85) {
          slideState.dragging = false;
          resetSlide();
          acceptCall();
        }
      }

      function onEnd() {
        if (slideState?.dragging) { slideState.dragging = false; resetSlide(); initSlide(); }
      }

      thumb.onpointerdown = (e) => { e.preventDefault(); onStart(e.clientX); };
      thumb.ontouchstart = (e) => { e.preventDefault(); onStart(e.touches[0].clientX); };
      document.onpointermove = (e) => { if (slideState?.dragging) onMove(e.clientX); };
      document.ontouchmove = (e) => { if (slideState?.dragging) { e.preventDefault(); onMove(e.touches[0].clientX); } };
      document.onpointerup = onEnd;
      document.ontouchend = onEnd;
    }

    function resetSlide() {
      const thumb = document.getElementById('slideThumb');
      const fill = document.getElementById('slideFill');
      const text = document.getElementById('slideText');
      if (!thumb) return;
      thumb.style.transition = 'left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      fill.style.transition = 'width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      thumb.style.left = '2px';
      fill.style.width = '0%';
      text.style.opacity = '1';
      slideState = null;
      document.onpointermove = null;
      document.ontouchmove = null;
      document.onpointerup = null;
      document.ontouchend = null;
    }

    // ==================== TELEGRAM SETTINGS MODAL ====================
    function openTelegramSettings() {
      document.getElementById('tgBotToken').value = telegramBotToken;
      document.getElementById('tgChatId').value = telegramChatId;
      document.getElementById('tgSettingsModal').style.display = 'flex';
    }

    function closeTelegramSettings() {
      document.getElementById('tgSettingsModal').style.display = 'none';
    }

    function saveTelegramSettings() {
      const botToken = document.getElementById('tgBotToken').value.trim();
      const chatId = document.getElementById('tgChatId').value.trim();
      if (!botToken || !chatId) {
        document.getElementById('tgSaveStatus').textContent = 'Both fields are required';
        return;
      }
      document.getElementById('tgSaveStatus').textContent = 'Saving...';
      db.collection('settings').doc('telegram').set({
        botToken: botToken,
        chatId: chatId
      })
      .then(function() {
        telegramBotToken = botToken;
        telegramChatId = chatId;
        document.getElementById('tgSaveStatus').textContent = 'Saved successfully';
        setTimeout(closeTelegramSettings, 1200);
      })
      .catch(function(err) {
        document.getElementById('tgSaveStatus').textContent = 'Error: ' + err.message;
      });
    }

    function loadTelegramSettings() {
      db.collection('settings').doc('telegram').get()
        .then(function(doc) {
          if (doc.exists) {
            telegramBotToken = doc.data().botToken || '';
            telegramChatId = doc.data().chatId || '';
          }
        })
        .catch(function(err) { console.error('Failed to load Telegram settings:', err); });
    }

    document.getElementById('tgSettingsBtn').addEventListener('click', openTelegramSettings);
`;function tv(){const e=I.useRef(null);return I.useEffect(()=>{const t=e.current;t.innerHTML=qf;let n=Promise.resolve();return Zf.forEach(r=>{n=n.then(()=>new Promise(i=>{const o=document.createElement("script");o.src=r,o.onload=i,t.appendChild(o)}))}),n.then(()=>{const r=document.createElement("script");r.textContent=ev,t.appendChild(r)}),()=>{t.innerHTML=""}},[]),a.jsx("div",{ref:e,style:{height:"100vh",overflow:"hidden"}})}function nv(){const e=I.useRef(null);return I.useEffect(()=>{if(!e.current)return;e.current.innerHTML=`
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        :root {
          --bg: #F2F2F7;
          --group: #FFFFFF;
          --text: #1C1C1E;
          --text2: #8E8E93;
          --text3: #C7C7CC;
          --link: #007AFF;
          --green: #34C759;
          --red: #FF3B30;
          --gray: #8E8E93;
          --orange: #FF9500;
          --separator: rgba(60,60,67,0.08);
          --radius: 12px;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #1C1C1E;
            --group: #2C2C2E;
            --text: #FFFFFF;
            --text2: #8E8E93;
            --text3: #48484A;
            --separator: rgba(255,255,255,0.08);
          }
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(52,199,89,0.3); }
          50% { box-shadow: 0 0 40px rgba(52,199,89,0.5); }
        }
        @keyframes pulseGlowRed {
          0%, 100% { box-shadow: 0 0 20px rgba(255,59,48,0.3); }
          50% { box-shadow: 0 0 40px rgba(255,59,48,0.5); }
        }
        @keyframes springPop {
          0% { transform: scale(1); }
          40% { transform: scale(0.96); }
          70% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        @keyframes toastIn {
          0% { transform: translateX(-50%) translateY(120px) scale(0.9); opacity: 0; }
          60% { transform: translateX(-50%) translateY(-8px) scale(1.02); opacity: 1; }
          100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
        }
        @keyframes toastOut {
          0% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
          100% { transform: translateX(-50%) translateY(120px) scale(0.9); opacity: 0; }
        }
        @keyframes ripple {
          to { transform: scale(4); opacity: 0; }
        }
        @keyframes countdownPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); max-height: 0; }
          to { opacity: 1; transform: translateY(0); max-height: 200px; }
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
          padding-bottom: 40px;
        }
        .large-title {
          padding: 60px 20px 8px;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: -0.5px;
          animation: fadeSlideIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
        .large-title small {
          display: block;
          font-size: 15px;
          font-weight: 400;
          color: var(--text2);
          letter-spacing: 0;
          margin-top: 2px;
        }
        .group {
          background: var(--group);
          border-radius: var(--radius);
          margin: 16px 16px 0;
          overflow: hidden;
          animation: fadeSlideIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
        .group:nth-of-type(1) { animation-delay: 0.05s; }
        .group:nth-of-type(2) { animation-delay: 0.1s; }
        .group:nth-of-type(3) { animation-delay: 0.15s; }
        .group:nth-of-type(4) { animation-delay: 0.2s; }
        .group:nth-of-type(5) { animation-delay: 0.25s; }
        .group-header {
          padding: 0 16px 6px;
          font-size: 13px;
          font-weight: 400;
          color: var(--text2);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 20px;
          animation: fadeSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        .group-header:nth-of-type(1) { animation-delay: 0.08s; }
        .group-header:nth-of-type(2) { animation-delay: 0.12s; }
        .group-header:nth-of-type(3) { animation-delay: 0.18s; }
        .group-header:nth-of-type(4) { animation-delay: 0.22s; }
        .group:first-of-type { margin-top: 8px; }
        .row {
          display: flex;
          align-items: center;
          padding: 13px 16px;
          min-height: 48px;
          gap: 14px;
          border-bottom: 0.5px solid var(--separator);
          transition: background 0.2s;
        }
        .row:last-child { border-bottom: none; }
        .row-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .row-icon svg { width: 18px; height: 18px; display: block; }
        .row-label { flex: 1; font-size: 16px; line-height: 1.4; }
        .row-value { font-size: 16px; color: var(--text2); text-align: right; }
        .chevron { color: var(--text3); margin-left: 4px; font-size: 14px; transition: transform 0.2s; }
        .pill {
          display: inline-block;
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
          transition: all 0.3s;
        }
        .pill.on { background: rgba(52,199,89,0.15); color: var(--green); }
        .pill.off { background: rgba(255,59,48,0.15); color: var(--red); }
        .pill.unknown { background: rgba(142,142,147,0.15); color: var(--gray); }

        .status-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 16px;
        }
        .status-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1);
          background: var(--gray);
        }
        .status-icon.on {
          background: var(--green);
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .status-icon.off {
          background: var(--red);
          animation: pulseGlowRed 2s ease-in-out infinite;
        }
        .status-icon svg { width: 28px; height: 28px; display: block; }
        .status-info { flex: 1; }
        .status-title { font-size: 20px; font-weight: 700; transition: color 0.3s; }
        .status-sub { font-size: 14px; color: var(--text2); margin-top: 2px; }

        .action-row {
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: opacity 0.2s;
          -webkit-user-select: none;
          user-select: none;
        }
        .action-row:active .row-icon { transform: scale(0.85); }
        .action-row:active .chevron { transform: translateX(4px); }
        .action-row:disabled { opacity: 0.3; pointer-events: none; }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(0,122,255,0.1);
          transform: scale(0);
          pointer-events: none;
        }
        .ripple.animate {
          animation: ripple 0.6s ease-out forwards;
        }

        .toast {
          position: fixed;
          bottom: 40px;
          left: 50%;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: #fff;
          padding: 14px 24px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 500;
          z-index: 100;
          pointer-events: none;
          white-space: nowrap;
          max-width: 85%;
          text-align: center;
          transform: translateX(-50%) translateY(120px) scale(0.9);
          opacity: 0;
        }
        .toast.show {
          animation: toastIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .toast.hide {
          animation: toastOut 0.35s cubic-bezier(0.55,0,1,0.45) forwards;
        }
        @supports not (backdrop-filter: blur(20px)) {
          .toast { background: rgba(30,30,30,0.96); }
        }

        .log-empty {
          padding: 20px 16px;
          text-align: center;
          color: var(--text2);
          font-size: 14px;
        }
        .log-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 16px;
          border-bottom: 0.5px solid var(--separator);
          font-size: 14px;
          animation: fadeSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }
        .log-item:last-child { border-bottom: none; }
        .log-time {
          color: var(--text2);
          font-size: 13px;
          min-width: 52px;
          font-variant-numeric: tabular-nums;
        }
        .log-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background 0.3s;
        }
        .log-dot.on { background: var(--green); }
        .log-dot.off { background: var(--red); }
        .log-text { flex: 1; }

        .sched-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border-bottom: 0.5px solid var(--separator);
        }
        .sched-row:last-child { border-bottom: none; }
        .sched-label {
          font-size: 15px;
          color: var(--text2);
          min-width: 72px;
        }
        .sched-input {
          flex: 1;
          border: none;
          background: var(--bg);
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 15px;
          font-family: inherit;
          color: var(--text);
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
        .sched-input::-webkit-calendar-picker-indicator {
          filter: invert(0.5);
          cursor: pointer;
        }
        .sched-toggle {
          display: flex;
          gap: 0;
          background: var(--bg);
          border-radius: 10px;
          overflow: hidden;
          flex: 1;
        }
        .sched-toggle button {
          flex: 1;
          border: none;
          padding: 10px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
          background: transparent;
          color: var(--text2);
        }
        .sched-toggle button.active-on {
          background: var(--green);
          color: #fff;
        }
        .sched-toggle button.active-off {
          background: var(--red);
          color: #fff;
        }
        .sched-btn {
          width: 100%;
          border: none;
          padding: 14px;
          font-size: 16px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          color: #fff;
          background: var(--link);
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .sched-btn:active { transform: scale(0.97); opacity: 0.8; }
        .sched-btn:disabled { opacity: 0.4; pointer-events: none; }

        .upcoming-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 0.5px solid var(--separator);
          animation: slideDown 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        .upcoming-item:last-child { border-bottom: none; }
        .upcoming-icon {
          width: 30px; height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .upcoming-icon svg { width: 16px; height: 16px; display: block; }
        .upcoming-info { flex: 1; }
        .upcoming-title { font-size: 15px; font-weight: 500; }
        .upcoming-sub {
          font-size: 13px;
          color: var(--text2);
          margin-top: 2px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .upcoming-sub .countdown {
          font-variant-numeric: tabular-nums;
          animation: countdownPulse 2s ease-in-out infinite;
        }
        .upcoming-del {
          width: 28px;
          height: 28px;
          border: none;
          background: rgba(255,59,48,0.1);
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
          color: var(--red);
          font-size: 14px;
        }
        .upcoming-del:active { transform: scale(0.85); background: rgba(255,59,48,0.2); }
        .sched-empty {
          padding: 20px 16px;
          text-align: center;
          color: var(--text2);
          font-size: 14px;
        }

        .server-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          min-height: 52px;
          border-bottom: 0.5px solid var(--separator);
        }
        .server-status { flex: 1; }
        .server-status-title { font-size: 16px; font-weight: 600; }
        .server-status-sub { font-size: 13px; color: var(--text2); margin-top: 2px; line-height: 1.4; }
        .server-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          background: var(--gray);
          transition: all 0.4s;
        }
        .server-dot.on {
          background: var(--green);
          box-shadow: 0 0 14px rgba(52,199,89,0.7);
          animation: dotPulseGreen 1.8s ease-in-out infinite;
        }
        .server-dot.waking {
          background: var(--orange);
          box-shadow: 0 0 14px rgba(255,149,0,0.7);
          animation: dotPulseOrange 1s ease-in-out infinite;
        }
        @keyframes dotPulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes dotPulseOrange {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.8); }
        }
        .server-btn {
          width: 100%;
          border: none;
          padding: 16px;
          font-size: 16px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          color: #fff;
          background: var(--link);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .server-btn:active { transform: scale(0.97); opacity: 0.85; }
        .server-btn:disabled { pointer-events: none; }
        .server-btn.waking {
          background: var(--orange);
          box-shadow: 0 0 24px rgba(255,149,0,0.35);
        }
        .server-btn.on {
          background: var(--green);
          box-shadow: 0 0 24px rgba(52,199,89,0.4);
        }
        .server-btn .srv-spin {
          width: 18px;
          height: 18px;
          border: 2.5px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: srvSpin 0.85s linear infinite;
          display: none;
        }
        .server-btn.waking .srv-spin { display: block; }
        .server-btn.waking .srv-icon, .server-btn.on .srv-icon { display: none; }
        .server-btn.on .srv-check {
          display: block;
          animation: srvCheckPop 0.5s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes srvSpin { to { transform: rotate(360deg); } }
        @keyframes srvCheckPop {
          0% { transform: scale(0); }
          70% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        .server-btn.shake { animation: srvShake 0.4s ease-in-out; }
        @keyframes srvShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }
      </style>

      <div class="large-title">
        App Control
        <small>Manage app availability</small>
      </div>

      <div class="group">
        <div class="row" style="padding:0">
          <div class="status-banner">
            <div class="status-icon unknown" id="statusIcon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
                <line x1="12" y1="2" x2="12" y2="12"/>
              </svg>
            </div>
            <div class="status-info">
              <div class="status-title" id="statusTitle">Checking...</div>
              <div class="status-sub" id="statusSub">Connecting to server</div>
            </div>
            <span class="pill unknown" id="statusPill">—</span>
          </div>
        </div>
      </div>

      <div class="group-header">Actions</div>
      <div class="group">
        <div class="row action-row" id="rowOn">
          <div class="row-icon" style="background:var(--green)">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
              <line x1="12" y1="2" x2="12" y2="12"/>
            </svg>
          </div>
          <span class="row-label">Turn ON</span>
          <span class="chevron">›</span>
        </div>
        <div class="row action-row" id="rowOff">
          <div class="row-icon" style="background:var(--red)">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="1" y1="1" x2="23" y2="23"/>
              <path d="M16.72 7.28a9 9 0 0 1 2.09 9.65"/>
              <path d="M5.19 5.19A9 9 0 0 0 16.72 7.28"/>
              <line x1="12" y1="2" x2="12" y2="12"/>
            </svg>
          </div>
          <span class="row-label">Turn OFF</span>
          <span class="chevron">›</span>
        </div>
      </div>

      <div class="group-header">Server</div>
      <div class="group">
        <div class="server-row">
          <div class="server-status">
            <div class="server-status-title" id="serverTitle">Server Status</div>
            <div class="server-status-sub" id="serverSub">Checking...</div>
          </div>
          <span class="server-dot" id="serverDot"></span>
        </div>
        <button class="server-btn" id="serverBtn">
          <span class="srv-icon" id="serverBtnIcon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </span>
          <span class="srv-spin"></span>
          <svg class="srv-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:none"><polyline points="20 6 9 17 4 12"/></svg>
          <span id="serverBtnText">Server ON</span>
        </button>
      </div>

      <div class="group-header">Schedule</div>
      <div class="group">
        <div class="sched-row">
          <span class="sched-label">Date</span>
          <input class="sched-input" type="date" id="schedDate">
        </div>
        <div class="sched-row">
          <span class="sched-label">Time</span>
          <input class="sched-input" type="time" id="schedTime">
        </div>
        <div class="sched-row">
          <span class="sched-label">Action</span>
          <div class="sched-toggle" id="schedToggle">
            <button data-value="on" class="active-on">ON</button>
            <button data-value="off">OFF</button>
          </div>
        </div>
        <button class="sched-btn" id="schedBtn">
          <span id="schedBtnText">Schedule Toggle</span>
        </button>
      </div>

      <div class="group-header">Upcoming</div>
      <div class="group" id="upcomingGroup">
        <div class="sched-empty" id="schedEmpty">No scheduled toggles</div>
        <div id="upcomingList"></div>
      </div>

      <div class="group-header">Info</div>
      <div class="group">
        <div class="row action-row" id="rowRefresh">
          <div class="row-icon" style="background:var(--link)">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 4 23 10 17 10"/>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
            </svg>
          </div>
          <span class="row-label">Refresh Status</span>
          <span class="row-value" id="lastChecked">—</span>
        </div>
        <div class="row action-row" id="rowInstall" style="display:none">
          <div class="row-icon" style="background:var(--orange)">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <span class="row-label">Install App</span>
          <span class="chevron">›</span>
        </div>
      </div>

      <div class="group-header">Activity Log</div>
      <div class="group">
        <div class="log-empty" id="logEmpty">No activity yet</div>
        <div id="logList"></div>
      </div>

      <div class="toast" id="toast"></div>
    `;const t=document.createElement("script");return t.textContent=`
      const API = 'https://chat-backend-e163.onrender.com';
      let deferredPrompt = null;
      var log = [];
      var schedules = [];
      var schedAction = 'on';
      var countdownTimer = null;
      var schedCheckTimer = null;

      function loadData() {
        try {
          var l = localStorage.getItem('appControlLog');
          if (l) log = JSON.parse(l);
          var s = localStorage.getItem('appControlSchedules');
          if (s) schedules = JSON.parse(s);
        } catch(e) {}
      }
      function saveLog() { try { localStorage.setItem('appControlLog', JSON.stringify(log)); } catch(e) {} }
      function saveSchedules() { try { localStorage.setItem('appControlSchedules', JSON.stringify(schedules)); } catch(e) {} }

      function addLog(enabled, source) {
        var now = new Date();
        log.unshift({ t: now.getTime(), s: enabled ? 'on' : 'off', src: source || 'manual' });
        if (log.length > 50) log.length = 50;
        saveLog();
        renderLog();
      }
      function renderLog() {
        var list = document.getElementById('logList');
        var empty = document.getElementById('logEmpty');
        if (!log.length) { list.innerHTML = ''; empty.style.display = 'block'; return; }
        empty.style.display = 'none';
        var html = '';
        var today = new Date().toDateString();
        for (var i = 0; i < log.length; i++) {
          var e = log[i];
          var d = new Date(e.t);
          var action = e.s === 'on' ? 'App turned ON' : 'App turned OFF';
          var timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          var dateStr = d.toDateString() === today ? '' : d.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ';
          html += '<div class="log-item" style="animation-delay:' + (i*0.03) + 's">' +
            '<span class="log-time">' + dateStr + timeStr + '</span>' +
            '<span class="log-dot ' + e.s + '"></span>' +
            '<span class="log-text">' + action + '</span>' +
          '</div>';
        }
        list.innerHTML = html;
      }

      window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById('rowInstall').style.display = 'flex';
      });
      window.addEventListener('appinstalled', function() {
        deferredPrompt = null;
        document.getElementById('rowInstall').style.display = 'none';
      });
      function installPWA() {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(c) {
          if (c.outcome === 'accepted') { document.getElementById('rowInstall').style.display = 'none'; deferredPrompt = null; }
        });
      }

      var toastTimer = null;
      function showToast(msg) {
        var t = document.getElementById('toast');
        clearTimeout(toastTimer);
        t.classList.remove('show', 'hide');
        t.textContent = msg;
        void t.offsetWidth;
        t.classList.add('show');
        toastTimer = setTimeout(function() {
          t.classList.remove('show');
          t.classList.add('hide');
          setTimeout(function() { t.classList.remove('hide'); }, 400);
        }, 2800);
      }

      function getStatus(cb) {
        fetch(API + '/api/admin/status?t=' + Date.now(), { cache: 'no-store' })
          .then(function(r) { return r.json(); })
          .then(function(d) { cb(d.enabled); })
          .catch(function() { cb(null); });
      }

      function doToggle(enabled, source) {
        fetch(API + '/api/admin/toggle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ enabled: enabled })
        })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          addLog(d.enabled, source || 'manual');
          updateUI(d.enabled);
          showToast(d.enabled ? 'App turned ON' : 'App turned OFF');
        })
        .catch(function() {
          showToast('Failed to reach server');
          getStatus(function(e) { if (e !== null) updateUI(e); });
        });
      }

      function toggleApp(enabled, event) {
        var rowId = enabled ? 'rowOn' : 'rowOff';
        var el = document.getElementById(rowId);
        el.style.pointerEvents = 'none';
        el.style.animation = 'springPop 0.4s cubic-bezier(0.16,1,0.3,1)';
        setTimeout(function() { el.style.animation = ''; }, 400);
        doToggle(enabled, 'manual');
        setTimeout(function() { el.style.pointerEvents = 'auto'; }, 600);
      }

      function refreshStatus(event) {
        var row = document.getElementById('rowRefresh');
        row.style.animation = 'springPop 0.4s cubic-bezier(0.16,1,0.3,1)';
        setTimeout(function() { row.style.animation = ''; }, 400);
        getStatus(function(enabled) {
          updateUI(enabled);
          showToast(enabled === null ? 'Status unknown' : (enabled ? 'App is ON' : 'App is OFF'));
        });
      }

      function updateUI(enabled) {
        var icon = document.getElementById('statusIcon');
        var title = document.getElementById('statusTitle');
        var sub = document.getElementById('statusSub');
        var pill = document.getElementById('statusPill');
        var now = new Date();
        var timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.getElementById('lastChecked').textContent = timeStr;

        icon.className = 'status-icon';
        pill.className = 'pill';
        icon.style.animation = 'none';

        if (enabled === null) {
          icon.classList.add('unknown');
          title.textContent = 'Unknown';
          sub.textContent = 'Could not reach server';
          pill.classList.add('unknown');
          pill.textContent = '?';
        } else if (enabled) {
          icon.classList.add('on');
          title.textContent = 'ON';
          sub.textContent = 'All users can access the app';
          pill.classList.add('on');
          pill.textContent = 'Live';
        } else {
          icon.classList.add('off');
          title.textContent = 'OFF';
          sub.textContent = 'Users see maintenance page';
          pill.classList.add('off');
          pill.textContent = 'Disabled';
        }
      }

      function setSchedAction(val) {
        schedAction = val;
        var btns = document.getElementById('schedToggle').querySelectorAll('button');
        btns[0].className = val === 'on' ? 'active-on' : '';
        btns[1].className = val === 'off' ? 'active-off' : '';
      }

      function scheduleToggle() {
        var dateVal = document.getElementById('schedDate').value;
        var timeVal = document.getElementById('schedTime').value;
        if (!dateVal || !timeVal) { showToast('Select date and time'); return; }
        var target = new Date(dateVal + 'T' + timeVal);
        if (target.getTime() <= Date.now()) { showToast('Time must be in the future'); return; }

        var s = { id: Date.now().toString(36) + Math.random().toString(36).slice(2,5), t: target.getTime(), action: schedAction, createdAt: Date.now() };
        schedules.push(s);
        saveSchedules();
        renderUpcoming();
        startSchedChecker();
        document.getElementById('schedDate').value = '';
        document.getElementById('schedTime').value = '';
        showToast('Scheduled: ' + (schedAction === 'on' ? 'ON' : 'OFF') + ' at ' + target.toLocaleString());
      }

      function removeSchedule(id) {
        schedules = schedules.filter(function(s) { return s.id !== id; });
        saveSchedules();
        renderUpcoming();
        if (!schedules.length) stopSchedChecker();
      }

      function renderUpcoming() {
        var list = document.getElementById('upcomingList');
        var empty = document.getElementById('schedEmpty');
        if (!schedules.length) { list.innerHTML = ''; empty.style.display = 'block'; return; }
        empty.style.display = 'none';
        var html = '';
        var now = Date.now();
        schedules.sort(function(a,b) { return a.t - b.t; });
        for (var i = 0; i < schedules.length; i++) {
          var s = schedules[i];
          var d = new Date(s.t);
          var action = s.action === 'on' ? 'ON' : 'OFF';
          var iconBg = s.action === 'on' ? 'var(--green)' : 'var(--red)';
          var remain = s.t - now;
          var remainStr = remain > 0 ? formatRemain(remain) : 'Due';
          var dateStr = d.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
          var timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          html += '<div class="upcoming-item" data-id="' + s.id + '">' +
            '<div class="upcoming-icon" style="background:' + iconBg + '">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>' +
            '</div>' +
            '<div class="upcoming-info">' +
            '<div class="upcoming-title">' + dateStr + ' ' + timeStr + ' \\u2192 ' + action + '</div>' +
            '<div class="upcoming-sub"><span class="countdown" data-target="' + s.t + '">\\u23F3 ' + remainStr + '</span></div>' +
            '</div>' +
            '<button class="upcoming-del" data-sched-id="' + s.id + '">\\u2715</button>' +
          '</div>';
        }
        list.innerHTML = html;

        list.querySelectorAll('.upcoming-del').forEach(function(btn) {
          btn.addEventListener('click', function() {
            removeSchedule(this.getAttribute('data-sched-id'));
          });
        });

        updateCountdowns();
      }

      function formatRemain(ms) {
        var s = Math.floor(ms / 1000);
        var m = Math.floor(s / 60);
        var h = Math.floor(m / 60);
        var d = Math.floor(h / 24);
        s %= 60; m %= 60; h %= 24;
        if (d > 0) return d + 'd ' + h + 'h ' + m + 'm';
        if (h > 0) return h + 'h ' + m + 'm ' + s + 's';
        if (m > 0) return m + 'm ' + s + 's';
        return s + 's';
      }

      function updateCountdowns() {
        var now = Date.now();
        document.querySelectorAll('.upcoming-item').forEach(function(el) {
          var target = parseInt(el.querySelector('.countdown').getAttribute('data-target'));
          var remain = target - now;
          if (remain <= 0) {
            el.querySelector('.countdown').textContent = '\\u23F3 Due now';
          } else {
            el.querySelector('.countdown').textContent = '\\u23F3 ' + formatRemain(remain);
          }
        });
      }

      function startSchedChecker() {
        if (schedCheckTimer) return;
        schedCheckTimer = setInterval(function() {
          var now = Date.now();
          var due = [];
          for (var i = 0; i < schedules.length; i++) {
            if (schedules[i].t <= now) due.push(schedules[i]);
          }
          if (due.length) {
            schedules = schedules.filter(function(s) { return s.t > now; });
            saveSchedules();
            renderUpcoming();
            due.forEach(function(s) {
              doToggle(s.action === 'on', 'scheduled');
            });
            if (!schedules.length) stopSchedChecker();
          }
          updateCountdowns();
        }, 5000);
      }

      function stopSchedChecker() {
        if (schedCheckTimer) { clearInterval(schedCheckTimer); schedCheckTimer = null; }
      }

      var serverWaking = false;

      function updateServerUI(state) {
        var dot = document.getElementById('serverDot');
        var title = document.getElementById('serverTitle');
        var sub = document.getElementById('serverSub');
        var btn = document.getElementById('serverBtn');
        var text = document.getElementById('serverBtnText');
        if (state === 'on') {
          dot.className = 'server-dot on';
          title.textContent = 'Server is ON';
          sub.textContent = 'Backend awake \\u2014 app fully working';
          btn.classList.remove('waking', 'on');
          btn.classList.add('on');
          text.textContent = 'Server ON';
          btn.disabled = false;
        } else if (state === 'waking') {
          dot.className = 'server-dot waking';
          title.textContent = 'Waking server';
          sub.textContent = 'Render ko sleep se jaagaya ja raha hai (30-60 sec lag sakte hain)';
          btn.classList.remove('on');
          btn.classList.add('waking');
          text.textContent = 'Waking server...';
          btn.disabled = true;
        } else {
          dot.className = 'server-dot';
          title.textContent = 'Server is sleeping';
          sub.textContent = 'Render sleep mode me hai \\u2014 "Server ON" dabao';
          btn.classList.remove('waking', 'on');
          text.textContent = 'Server ON';
          btn.disabled = false;
        }
      }

      function checkServer(cb) {
        fetch(API + '/api/health?t=' + Date.now(), { cache: 'no-store' })
          .then(function(r) { cb(r.ok ? 'on' : 'off'); })
          .catch(function() { cb('off'); });
      }

      function wakeServer() {
        if (serverWaking) return;
        serverWaking = true;
        updateServerUI('waking');
        var attempts = 0;
        var maxWait = 180;

        function ping() {
          attempts++;
          fetch(API + '/api/health?t=' + Date.now(), { cache: 'no-store' })
            .then(function(r) {
              if (r.ok) {
                serverWaking = false;
                updateServerUI('on');
                showToast('Server is ON');
                var btn = document.getElementById('serverBtn');
                setTimeout(function() {
                  if (btn) btn.classList.remove('on');
                }, 4000);
                return;
              }
              scheduleRetry();
            })
            .catch(function() {
              scheduleRetry();
            });
        }

        function scheduleRetry() {
          if (serverWaking) {
            var sub = document.getElementById('serverSub');
            if (attempts > 2 && sub) sub.textContent = 'Waking... attempt ' + attempts + ' (server ko time lagega)';
            if (attempts >= maxWait) {
              serverWaking = false;
              updateServerUI('off');
              var btn = document.getElementById('serverBtn');
              if (btn) { btn.classList.add('shake'); setTimeout(function() { btn.classList.remove('shake'); }, 500); }
              showToast('Server did not wake. Try again.');
              return;
            }
            setTimeout(ping, 3000);
          }
        }
        ping();
      }

      document.getElementById('rowOn').addEventListener('click', function(e) { toggleApp(true, e); });
      document.getElementById('rowOff').addEventListener('click', function(e) { toggleApp(false, e); });
      document.getElementById('rowRefresh').addEventListener('click', function(e) { refreshStatus(e); });
      document.getElementById('rowInstall').addEventListener('click', function() { installPWA(); });
      document.getElementById('serverBtn').addEventListener('click', function() { wakeServer(); });
      document.getElementById('schedBtn').addEventListener('click', function() { scheduleToggle(); });
      document.getElementById('schedToggle').querySelectorAll('button').forEach(function(btn) {
        btn.addEventListener('click', function() { setSchedAction(this.getAttribute('data-value')); });
      });

      loadData();
      renderLog();
      renderUpcoming();
      if (schedules.length) startSchedChecker();

      var tomorrow = new Date(Date.now() + 86400000);
      document.getElementById('schedDate').value = tomorrow.toISOString().slice(0,10);
      var defTime = '09:00';
      document.getElementById('schedTime').value = defTime;

      getStatus(function(enabled) { updateUI(enabled); });
      checkServer(function(state) { updateServerUI(state); });
      setInterval(function() {
        getStatus(function(enabled) { updateUI(enabled); });
        if (!serverWaking) checkServer(function(state) { updateServerUI(state); });
      }, 30000);
    `,e.current.appendChild(t),()=>{e.current&&(e.current.innerHTML="")}},[]),a.jsx("div",{ref:e})}function rv(){const e=I.useRef(null);return I.useEffect(()=>{if(!e.current)return;const t=`
*,:after,:before{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#f0edff;
  --card:rgba(255,255,255,0.95);
  --card2:rgba(245,243,255,0.8);
  --border:rgba(108,92,231,0.1);
  --border2:rgba(108,92,231,0.18);
  --text:#1a1a2e;
  --text2:rgba(26,26,46,0.5);
  --text3:rgba(26,26,46,0.28);
  --accent:#6c5ce7;
  --accent2:#5a4bd1;
  --accent3:#fd79a8;
  --green:#00b894;
  --green2:#00a381;
  --red:#e17055;
  --red2:#c0392b;
  --orange:#e17055;
  --radius:16px;
  --radius-sm:10px;
  --radius-xs:6px;
  --shadow:0 8px 32px rgba(108,92,231,0.1);
  --glow:0 0 40px rgba(108,92,231,0.08);
}
.vault-root{
  font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Inter','Segoe UI',sans-serif;
  background:var(--bg);
  color:var(--text);
  min-height:100vh;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
  position:relative;
}
.vault-root::before{
  content:'';
  position:fixed;
  top:-50%;
  left:-50%;
  width:200%;
  height:200%;
  background:radial-gradient(circle at 30% 20%,rgba(108,92,231,0.08) 0%,transparent 50%),
             radial-gradient(circle at 70% 80%,rgba(253,121,168,0.05) 0%,transparent 50%);
  pointer-events:none;
  z-index:0;
}

.vault-root .header{
  position:sticky;
  top:0;
  z-index:100;
  background:rgba(245,243,255,0.85);
  backdrop-filter:blur(20px) saturate(1.5);
  -webkit-backdrop-filter:blur(20px) saturate(1.5);
  border-bottom:1px solid var(--border);
  padding:0 24px;
}
.vault-root .header-inner{
  max-width:960px;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px 0 14px;
}
.vault-root .header-left{
  display:flex;
  align-items:center;
  gap:14px;
}
.vault-root .header-icon{
  width:38px;
  height:38px;
  border-radius:12px;
  background:linear-gradient(135deg,var(--accent),var(--accent3));
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 4px 12px rgba(108,92,231,0.3);
  flex-shrink:0;
}
.vault-root .header-icon svg{width:20px;height:20px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.vault-root .header h1{
  font-size:18px;
  font-weight:700;
  letter-spacing:-0.3px;
  background:linear-gradient(135deg,var(--text),var(--accent2));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}
.vault-root .header-sub{
  display:flex;
  align-items:center;
  gap:8px;
  margin-top:2px;
  font-size:12px;
  color:var(--text2);
}
.vault-root .header-sub .dot{width:3px;height:3px;border-radius:50%;background:var(--text3)}
.vault-root .stat-pill{
  display:inline-flex;
  align-items:center;
  gap:5px;
  padding:3px 10px;
  border-radius:20px;
  background:var(--card2);
  border:1px solid var(--border);
  font-size:11px;
  color:var(--text2);
}
.vault-root .stat-pill svg{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;opacity:.6}
.vault-root .stat-pill strong{color:var(--text);font-weight:600}

.vault-root .btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:7px;
  padding:8px 16px;
  border:none;
  border-radius:var(--radius-sm);
  font-size:13px;
  font-weight:600;
  cursor:pointer;
  transition:all .2s ease;
  -webkit-tap-highlight-color:transparent;
  position:relative;
  overflow:hidden;
  letter-spacing:0.2px;
}
.vault-root .btn svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
.vault-root .btn:active{transform:scale(0.96)}
.vault-root .btn-refresh{
  background:linear-gradient(135deg,var(--accent),#5a4bd1);
  color:#fff;
  box-shadow:0 4px 16px rgba(108,92,231,0.25);
}
.vault-root .btn-refresh:hover{box-shadow:0 6px 24px rgba(108,92,231,0.35)}
.vault-root .btn-sm{
  padding:6px 12px;
  font-size:11px;
  border-radius:var(--radius-xs);
  letter-spacing:0.3px;
}
.vault-root .btn-sm svg{width:13px;height:13px}
.vault-root .btn-play{background:rgba(0,184,148,0.15);color:var(--green2);border:1px solid rgba(0,184,148,0.2)}
.vault-root .btn-play:hover{background:rgba(0,184,148,0.25)}
.vault-root .btn-stop{background:rgba(253,203,110,0.15);color:var(--orange);border:1px solid rgba(253,203,110,0.2)}
.vault-root .btn-download{background:rgba(108,92,231,0.15);color:var(--accent2);border:1px solid rgba(108,92,231,0.2)}
.vault-root .btn-download:hover{background:rgba(108,92,231,0.25)}
.vault-root .btn-delete{background:rgba(225,112,85,0.12);color:var(--red2);border:1px solid rgba(225,112,85,0.15)}
.vault-root .btn-delete:hover{background:rgba(225,112,85,0.2)}

.vault-root #loading{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:100px 20px;
  color:var(--text2);
  font-size:14px;
  gap:16px;
}
.vault-root .loader-ring{
  width:44px;
  height:44px;
  border-radius:50%;
  border:3px solid var(--border2);
  border-top-color:var(--accent);
  animation:spin .8s cubic-bezier(.6,.2,.4,.8) infinite;
  box-shadow:0 0 20px rgba(108,92,231,0.1);
}
@keyframes spin{to{transform:rotate(360deg)}}
.vault-root .loader-text{font-size:13px;color:var(--text3);letter-spacing:0.5px;display:flex;align-items:center;gap:8px}
.vault-root .loader-dots span{display:inline-block;width:4px;height:4px;border-radius:50%;background:var(--text3);animation:dotPulse 1.4s ease-in-out infinite}
.vault-root .loader-dots span:nth-child(2){animation-delay:.2s}
.vault-root .loader-dots span:nth-child(3){animation-delay:.4s}
@keyframes dotPulse{0%,80%,100%{opacity:.3;transform:scale(.8)}40%{opacity:1;transform:scale(1.2)}}

.vault-root #error{
  display:none;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:80px 20px;
  text-align:center;
}
.vault-root #error svg{width:48px;height:48px;stroke:var(--red2);opacity:.6;margin-bottom:16px}
.vault-root #error p{color:var(--text2);font-size:14px;margin-bottom:16px}
.vault-root .retry-btn{
  background:rgba(225,112,85,0.12);
  color:var(--red2);
  border:1px solid rgba(225,112,85,0.2);
  padding:8px 20px;
  border-radius:var(--radius-sm);
  font-size:13px;
  font-weight:600;
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  gap:6px;
  transition:all .2s ease;
}
.vault-root .retry-btn:hover{background:rgba(225,112,85,0.2)}

.vault-root main{
  max-width:960px;
  margin:0 auto;
  padding:20px 16px 60px;
  position:relative;
  z-index:1;
}

.vault-root .rec-card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  margin-bottom:12px;
  overflow:hidden;
  transition:all .3s ease;
  animation:fadeSlideIn .4s ease both;
  box-shadow:var(--shadow);
}
.vault-root .rec-card:hover{border-color:var(--border2)}
@keyframes fadeSlideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}

.vault-root .rec-top{
  display:flex;
  align-items:flex-start;
  gap:14px;
  padding:16px 18px 12px;
  cursor:pointer;
  user-select:none;
}
.vault-root .user-badge{
  width:40px;
  height:40px;
  border-radius:12px;
  background:linear-gradient(135deg,var(--accent),#5a4bd1);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  font-size:14px;
  color:#fff;
  flex-shrink:0;
  box-shadow:0 4px 12px rgba(108,92,231,0.2);
  letter-spacing:0.5px;
}
.vault-root .rec-info{flex:1;min-width:0}
.vault-root .rec-user{
  display:flex;
  align-items:center;
  gap:8px;
  margin-bottom:4px;
}
.vault-root .rec-user-name{
  font-size:14px;
  font-weight:600;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.vault-root .rec-user-badge{
  font-size:9px;
  padding:2px 7px;
  border-radius:10px;
  background:rgba(108,92,231,0.12);
  color:var(--accent2);
  font-weight:600;
  letter-spacing:0.3px;
  white-space:nowrap;
}
.vault-root .rec-meta-row{
  display:flex;
  flex-wrap:wrap;
  gap:4px 14px;
}
.vault-root .rec-meta-item{
  display:inline-flex;
  align-items:center;
  gap:5px;
  font-size:12px;
  color:var(--text2);
}
.vault-root .rec-meta-item svg{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;opacity:.5;flex-shrink:0}
.vault-root .rec-meta-item strong{color:var(--text);font-weight:600}

.vault-root .rec-expand{
  overflow:hidden;
  max-height:0;
  transition:max-height .35s cubic-bezier(.4,0,.2,1);
}
.vault-root .rec-expand.open{max-height:300px}
.vault-root .rec-body{
  padding:0 18px 16px 72px;
}
.vault-root .rec-player-wrap{
  margin-bottom:10px;
  background:var(--card2);
  border-radius:var(--radius-sm);
  padding:6px;
  border:1px solid var(--border);
}
.vault-root .rec-player-wrap audio{
  width:100%;
  height:36px;
  display:block;
  border-radius:var(--radius-xs);
  outline:none;
}
.vault-root .rec-player-wrap audio::-webkit-media-controls-panel{background:transparent}
.vault-root .rec-actions{
  display:flex;
  gap:6px;
  flex-wrap:wrap;
}
.vault-root .rec-id-bar{
  display:flex;
  align-items:center;
  gap:6px;
  margin-top:8px;
  padding-top:8px;
  border-top:1px solid var(--border);
}
.vault-root .rec-id-bar svg{width:10px;height:10px;stroke:var(--text3);opacity:.5}
.vault-root .rec-id-bar span{
  font-size:10px;
  font-family:'SF Mono','Cascadia Code','Courier New',monospace;
  color:var(--text3);
  word-break:break-all;
  line-height:1.3;
}

.vault-root .empty-state{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:100px 20px;
  text-align:center;
}
.vault-root .empty-state svg{width:64px;height:64px;stroke:var(--text3);opacity:.3;margin-bottom:16px}
.vault-root .empty-state h3{font-size:16px;font-weight:600;color:var(--text2);margin-bottom:6px}
.vault-root .empty-state p{font-size:13px;color:var(--text3)}

.vault-root .toast-container{
  position:fixed;
  bottom:24px;
  left:50%;
  transform:translateX(-50%);
  z-index:999;
  display:flex;
  flex-direction:column;
  gap:8px;
  align-items:center;
  pointer-events:none;
}
.vault-root .toast{
  background:rgba(255,255,255,0.95);
  backdrop-filter:blur(12px);
  border:1px solid var(--border2);
  border-radius:var(--radius-sm);
  padding:10px 18px;
  font-size:13px;
  color:var(--text);
  display:inline-flex;
  align-items:center;
  gap:8px;
  pointer-events:auto;
  box-shadow:0 8px 32px rgba(108,92,231,0.12);
  animation:toastIn .3s ease both;
}
.vault-root .toast svg{width:16px;height:16px;flex-shrink:0}
.vault-root .toast.toast-error svg{stroke:var(--red2)}
.vault-root .toast.toast-success svg{stroke:var(--green2)}
.vault-root .toast.toast-info svg{stroke:var(--accent2)}
@keyframes toastIn{from{opacity:0;transform:translateY(20px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes toastOut{from{opacity:1;transform:translateY(0) scale(1)}to{opacity:0;transform:translateY(20px) scale(.95)}}

@media(max-width:500px){
  .vault-root .header{padding:0 16px}
  .vault-root .header-inner{padding:14px 0 12px}
  .vault-root .header h1{font-size:16px}
  .vault-root .rec-top{padding:14px 14px 10px}
  .vault-root .rec-body{padding:0 14px 14px 64px}
  .vault-root .user-badge{width:36px;height:36px;font-size:12px}
  .vault-root main{padding:16px 12px 60px}
}
`,n=`
<div class="header">
  <div class="header-inner">
    <div class="header-left">
      <div class="header-icon">
        <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
      </div>
      <div>
        <h1>Voice Vault</h1>
        <div class="header-sub">
          <span id="count">—</span>
          <span class="dot"></span>
          <span class="stat-pill">
            <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            <strong id="totalSize">—</strong>
          </span>
        </div>
      </div>
    </div>
    <button class="btn btn-refresh" id="refreshBtn">
      <svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
      Refresh
    </button>
  </div>
</div>

<div id="loading">
  <div class="loader-ring"></div>
  <div class="loader-text">
    Loading vault
    <span class="loader-dots"><span></span><span></span><span></span></span>
  </div>
</div>

<div id="error">
  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
  <p>Failed to load voice vault</p>
  <button class="retry-btn" id="retryBtn">
    <svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
    Retry
  </button>
</div>

<div class="toast-container" id="toastContainer"></div>

<main id="list"></main>
`,r=`
var SERVER = 'https://chat-backend-e163.onrender.com';
var allRecordings = [];
var expandedMap = {};

function loadData(){
  var loadEl=document.getElementById('loading');
  var errEl=document.getElementById('error');
  var list=document.getElementById('list');
  loadEl.style.display='flex';
  errEl.style.display='none';
  list.innerHTML='';
  allRecordings=[];
  expandedMap={};
  fetch(SERVER+'/api/voices/admin/list-light')
    .then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json()})
    .then(function(d){loadEl.style.display='none';allRecordings=d;renderList(d)})
    .catch(function(e){console.error(e);loadEl.style.display='none';errEl.style.display='flex'})
}

function formatDur(s){
  if(s==null)return '—'
  var m=Math.floor(s/60),sec=Math.floor(s%60);
  return m+':'+(sec<10?'0':'')+sec
}

function formatSize(b){
  if(b==null)return '—'
  if(b<1024)return b+' B'
  if(b<1048576)return(b/1024).toFixed(1)+' KB'
  return(b/1048576).toFixed(1)+' MB'
}

function formatDate(d){
  if(!d)return '—'
  var dt=new Date(d)
  return dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})+' '+dt.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})
}

function getInitials(id){
  if(!id)return'?'
  return id.substring(0,2).toUpperCase()
}

function showToast(msg,type){
  var c=document.getElementById('toastContainer')
  var t=document.createElement('div')
  t.className='toast toast-'+type
  var icons={
    success:'<svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    error:'<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    info:'<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
  }
  t.innerHTML=(icons[type]||icons.info)+msg
  c.appendChild(t)
  setTimeout(function(){t.style.animation='toastOut .25s ease forwards';setTimeout(function(){t.remove()},250)},2500)
}

function toggleExpand(id){
  var el=document.getElementById('expand_'+id)
  if(!el)return
  expandedMap[id]=!expandedMap[id]
  el.classList.toggle('open')
}

function playAudio(id,btn){
  var player=document.getElementById('player_'+id)
  if(!player)return
  if(!player.paused){
    player.pause();player.currentTime=0
    if(btn)btn.innerHTML='<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>Play'
    return
  }
  var url=SERVER+'/api/voices/'+id+'/raw?t='+Date.now()
  player.src=url
  player.style.display='block'
  player.play().then(function(){
    if(btn)btn.innerHTML='<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>Stop'
    player.onended=function(){
      if(btn)btn.innerHTML='<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>Play'
    }
  }).catch(function(e){
    console.error(e)
    if(btn)btn.innerHTML='<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>Play'
  })
}

function downloadAudio(id){
  var a=document.createElement('a')
  a.href=SERVER+'/api/voices/'+id+'/raw'
  a.download='voice_'+id+'.webm'
  document.body.appendChild(a);a.click();document.body.removeChild(a)
  showToast('Download started','success')
}

function deleteAudio(id){
  showToast('Deleting...','info')
  fetch(SERVER+'/api/voices/'+id,{method:'DELETE'})
    .then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json()})
    .then(function(){
      allRecordings=allRecordings.filter(function(r){return r.id!==id})
      renderList(allRecordings)
      showToast('Deleted successfully','success')
    })
    .catch(function(e){showToast('Delete failed: '+e.message,'error')})
}

function getRecipients(r){
  var a=[]
  if(r.receiver_id)a.push(r.receiver_id)
  if(r.reply_to)a.push('reply:'+r.reply_to)
  return a.length?a.join(', '):'—'
}

function renderList(data){
  var list=document.getElementById('list')
  list.innerHTML=''
  if(!data||!data.length){
    list.innerHTML='<div class="empty-state"><svg viewBox="0 0 24 24" fill="none"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg><h3>Vault is empty</h3><p>No voice recordings found</p></div>'
    document.getElementById('count').textContent='0 recordings'
    document.getElementById('totalSize').textContent='—'
    return
  }
  var totalSz=0,groups={}
  data.forEach(function(r){
    totalSz+=r.file_size||0
    var uid=r.user_id||'unknown'
    if(!groups[uid])groups[uid]=[]
    groups[uid].push(r)
  })
  document.getElementById('count').textContent=data.length+' recording'+(data.length!==1?'s':'')
  document.getElementById('totalSize').textContent=formatSize(totalSz)
  var idx=0
  Object.keys(groups).sort().forEach(function(uid){
    var recs=groups[uid]
    recs.forEach(function(r){
      var delay=idx*0.05
      var card=document.createElement('div')
      card.className='rec-card'
      card.style.animationDelay=delay+'s'
      var top=document.createElement('div')
      top.className='rec-top'
      top.onclick=function(){toggleExpand(r.id)}
      top.innerHTML=
        '<div class="user-badge">'+getInitials(uid)+'</div>'+
        '<div class="rec-info">'+
          '<div class="rec-user">'+
            '<span class="rec-user-name">'+escapeHtml(uid)+'</span>'+
            '<span class="rec-user-badge">'+(r.media_type||'audio').replace('audio/','').toUpperCase()+'</span>'+
          '</div>'+
          '<div class="rec-meta-row">'+
            '<span class="rec-meta-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><strong>'+formatDur(r.duration)+'</strong></span>'+
            '<span class="rec-meta-item"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><strong>'+formatSize(r.file_size)+'</strong></span>'+
            '<span class="rec-meta-item"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><strong>'+formatDate(r.created_at)+'</strong></span>'+
            (r.receiver_id?'<span class="rec-meta-item"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><strong>'+escapeHtml(r.receiver_id)+'</strong></span>':'')+
          '</div>'+
        '</div>'
      var expand=document.createElement('div')
      expand.className='rec-expand'
      expand.id='expand_'+r.id
      if(expandedMap[r.id])expand.classList.add('open')
      expand.innerHTML=
        '<div class="rec-body">'+
          '<div class="rec-player-wrap">'+
            '<audio id="player_'+r.id+'" style="display:none" controls preload="none"></audio>'+
          '</div>'+
          '<div class="rec-actions">'+
            '<button class="btn btn-sm btn-play" onclick="event.stopPropagation();playAudio(\\''+r.id+'\\',this)"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>Play</button>'+
            '<button class="btn btn-sm btn-download" onclick="event.stopPropagation();downloadAudio(\\''+r.id+'\\')"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download</button>'+
            '<button class="btn btn-sm btn-delete" onclick="event.stopPropagation();deleteAudio(\\''+r.id+'\\')"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>Delete</button>'+
          '</div>'+
          '<div class="rec-id-bar">'+
            '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'+
            '<span>'+r.id+'</span>'+
          '</div>'+
        '</div>'
      card.appendChild(top)
      card.appendChild(expand)
      list.appendChild(card)
      idx++
    })
  })
}

function escapeHtml(s){
  if(!s)return''
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')
}
`;e.current.innerHTML="";const i=document.createElement("style");i.textContent=t,e.current.appendChild(i);const o=document.createElement("div");o.className="vault-root",o.innerHTML=n,e.current.appendChild(o);const l=document.createElement("script");l.textContent=r,e.current.appendChild(l);const s=document.getElementById("refreshBtn"),c=document.getElementById("retryBtn");return s&&s.addEventListener("click",loadData),c&&c.addEventListener("click",loadData),loadData(),()=>{s&&s.removeEventListener("click",loadData),c&&c.removeEventListener("click",loadData)}},[]),a.jsx("div",{ref:e})}function iv(){return a.jsx("div",{style:{fontFamily:"-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",background:"#F2F2F7",color:"#000",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",WebkitFontSmoothing:"antialiased"},children:a.jsxs("div",{style:{textAlign:"center",padding:"40px 24px",maxWidth:"340px"},children:[a.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"22px",background:"linear-gradient(135deg, #FF9500, #FF3B30)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px",fontSize:"40px",boxShadow:"0 8px 32px rgba(255, 59, 48, 0.25)"},children:"🔧"}),a.jsx("div",{style:{display:"inline-block",background:"#FF3B30",color:"white",padding:"6px 16px",borderRadius:"20px",fontSize:"13px",fontWeight:600,marginBottom:"20px"},children:"Under Maintenance"}),a.jsx("h1",{style:{fontSize:"26px",fontWeight:700,letterSpacing:"-0.5px",marginBottom:"10px"},children:"App is Unavailable"}),a.jsx("p",{style:{fontSize:"15px",color:"#8E8E93",lineHeight:1.5,marginBottom:"24px"},children:"The app is currently under maintenance. Please check back later."}),a.jsx("div",{style:{fontSize:"12px",color:"#AEAEB2",marginTop:"12px"},children:"We'll be back soon"})]})})}function ov(){return a.jsx(Jf,{children:a.jsxs(Gf,{children:[a.jsx(bt,{path:"/",element:a.jsx(cs,{})}),a.jsx(bt,{path:"/user",element:a.jsx(cs,{})}),a.jsx(bt,{path:"/admin",element:a.jsx(tv,{})}),a.jsx(bt,{path:"/control",element:a.jsx(nv,{})}),a.jsx(bt,{path:"/voice-pack-pennal",element:a.jsx(rv,{})}),a.jsx(bt,{path:"/maintenance",element:a.jsx(iv,{})})]})})}eo.createRoot(document.getElementById("root")).render(a.jsx(ov,{}));
