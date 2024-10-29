var v2=Object.defineProperty;var w2=(t,e,n)=>e in t?v2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ud=(t,e,n)=>w2(t,typeof e!="symbol"?e+"":e,n);function jb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Fb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zb={exports:{}},Bh={},Ub={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hl=Symbol.for("react.element"),b2=Symbol.for("react.portal"),_2=Symbol.for("react.fragment"),x2=Symbol.for("react.strict_mode"),E2=Symbol.for("react.profiler"),T2=Symbol.for("react.provider"),S2=Symbol.for("react.context"),P2=Symbol.for("react.forward_ref"),C2=Symbol.for("react.suspense"),A2=Symbol.for("react.memo"),k2=Symbol.for("react.lazy"),E0=Symbol.iterator;function R2(t){return t===null||typeof t!="object"?null:(t=E0&&t[E0]||t["@@iterator"],typeof t=="function"?t:null)}var Bb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$b=Object.assign,qb={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=qb,this.updater=n||Bb}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hb(){}Hb.prototype=Hs.prototype;function Om(t,e,n){this.props=t,this.context=e,this.refs=qb,this.updater=n||Bb}var Nm=Om.prototype=new Hb;Nm.constructor=Om;$b(Nm,Hs.prototype);Nm.isPureReactComponent=!0;var T0=Array.isArray,Wb=Object.prototype.hasOwnProperty,Vm={current:null},Kb={key:!0,ref:!0,__self:!0,__source:!0};function Gb(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Wb.call(e,r)&&!Kb.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hl,type:t,key:o,ref:s,props:i,_owner:Vm.current}}function I2(t,e){return{$$typeof:Hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hl}function D2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var S0=/\/+/g;function Bd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D2(""+t.key):e.toString(36)}function dc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Hl:case b2:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Bd(s,0):r,T0(i)?(n="",t!=null&&(n=t.replace(S0,"$&/")+"/"),dc(i,e,n,"",function(c){return c})):i!=null&&(Mm(i)&&(i=I2(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(S0,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",T0(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Bd(o,a);s+=dc(o,e,n,l,i)}else if(l=R2(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Bd(o,a++),s+=dc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Iu(t,e,n){if(t==null)return t;var r=[],i=0;return dc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function O2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},fc={transition:null},N2={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:fc,ReactCurrentOwner:Vm};function Qb(){throw Error("act(...) is not supported in production builds of React.")}ge.Children={map:Iu,forEach:function(t,e,n){Iu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Iu(t,function(){e++}),e},toArray:function(t){return Iu(t,function(e){return e})||[]},only:function(t){if(!Mm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ge.Component=Hs;ge.Fragment=_2;ge.Profiler=E2;ge.PureComponent=Om;ge.StrictMode=x2;ge.Suspense=C2;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N2;ge.act=Qb;ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$b({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Vm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wb.call(e,l)&&!Kb.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Hl,type:t.type,key:i,ref:o,props:r,_owner:s}};ge.createContext=function(t){return t={$$typeof:S2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T2,_context:t},t.Consumer=t};ge.createElement=Gb;ge.createFactory=function(t){var e=Gb.bind(null,t);return e.type=t,e};ge.createRef=function(){return{current:null}};ge.forwardRef=function(t){return{$$typeof:P2,render:t}};ge.isValidElement=Mm;ge.lazy=function(t){return{$$typeof:k2,_payload:{_status:-1,_result:t},_init:O2}};ge.memo=function(t,e){return{$$typeof:A2,type:t,compare:e===void 0?null:e}};ge.startTransition=function(t){var e=fc.transition;fc.transition={};try{t()}finally{fc.transition=e}};ge.unstable_act=Qb;ge.useCallback=function(t,e){return Zt.current.useCallback(t,e)};ge.useContext=function(t){return Zt.current.useContext(t)};ge.useDebugValue=function(){};ge.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};ge.useEffect=function(t,e){return Zt.current.useEffect(t,e)};ge.useId=function(){return Zt.current.useId()};ge.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};ge.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};ge.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};ge.useMemo=function(t,e){return Zt.current.useMemo(t,e)};ge.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};ge.useRef=function(t){return Zt.current.useRef(t)};ge.useState=function(t){return Zt.current.useState(t)};ge.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};ge.useTransition=function(){return Zt.current.useTransition()};ge.version="18.3.1";Ub.exports=ge;var N=Ub.exports;const me=Fb(N),Wf=jb({__proto__:null,default:me},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V2=N,M2=Symbol.for("react.element"),L2=Symbol.for("react.fragment"),j2=Object.prototype.hasOwnProperty,F2=V2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z2={key:!0,ref:!0,__self:!0,__source:!0};function Xb(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)j2.call(e,r)&&!z2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:M2,type:t,key:o,ref:s,props:i,_owner:F2.current}}Bh.Fragment=L2;Bh.jsx=Xb;Bh.jsxs=Xb;zb.exports=Bh;var C=zb.exports,Yb={exports:{}},bn={},Jb={exports:{}},Zb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var re=B.length;B.push(G);e:for(;0<re;){var Pe=re-1>>>1,be=B[Pe];if(0<i(be,G))B[Pe]=G,B[re]=be,re=Pe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],re=B.pop();if(re!==G){B[0]=re;e:for(var Pe=0,be=B.length,ke=be>>>1;Pe<ke;){var Nt=2*(Pe+1)-1,Qt=B[Nt],dt=Nt+1,Et=B[dt];if(0>i(Qt,re))dt<be&&0>i(Et,Qt)?(B[Pe]=Et,B[dt]=re,Pe=dt):(B[Pe]=Qt,B[Nt]=re,Pe=Nt);else if(dt<be&&0>i(Et,re))B[Pe]=Et,B[dt]=re,Pe=dt;else break e}}return G}function i(B,G){var re=B.sortIndex-G.sortIndex;return re!==0?re:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],h=1,d=null,f=3,g=!1,v=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=B)r(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function k(B){if(b=!1,x(B),!v)if(n(l)!==null)v=!0,ht(M);else{var G=n(c);G!==null&&xe(k,G.startTime-B)}}function M(B,G){v=!1,b&&(b=!1,_(m),m=-1),g=!0;var re=f;try{for(x(G),d=n(l);d!==null&&(!(d.expirationTime>G)||B&&!I());){var Pe=d.callback;if(typeof Pe=="function"){d.callback=null,f=d.priorityLevel;var be=Pe(d.expirationTime<=G);G=t.unstable_now(),typeof be=="function"?d.callback=be:d===n(l)&&r(l),x(G)}else r(l);d=n(l)}if(d!==null)var ke=!0;else{var Nt=n(c);Nt!==null&&xe(k,Nt.startTime-G),ke=!1}return ke}finally{d=null,f=re,g=!1}}var j=!1,P=null,m=-1,T=5,A=-1;function I(){return!(t.unstable_now()-A<T)}function V(){if(P!==null){var B=t.unstable_now();A=B;var G=!0;try{G=P(!0,B)}finally{G?R():(j=!1,P=null)}}else j=!1}var R;if(typeof w=="function")R=function(){w(V)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Ke=de.port2;de.port1.onmessage=V,R=function(){Ke.postMessage(null)}}else R=function(){S(V,0)};function ht(B){P=B,j||(j=!0,R())}function xe(B,G){m=S(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ht(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var re=f;f=G;try{return B()}finally{f=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=f;f=B;try{return G()}finally{f=re}},t.unstable_scheduleCallback=function(B,G,re){var Pe=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Pe+re:Pe):re=Pe,B){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=re+be,B={id:h++,callback:G,priorityLevel:B,startTime:re,expirationTime:be,sortIndex:-1},re>Pe?(B.sortIndex=re,e(c,B),n(l)===null&&B===n(c)&&(b?(_(m),m=-1):b=!0,xe(k,re-Pe))):(B.sortIndex=be,e(l,B),v||g||(v=!0,ht(M))),B},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(B){var G=f;return function(){var re=f;f=G;try{return B.apply(this,arguments)}finally{f=re}}}})(Zb);Jb.exports=Zb;var U2=Jb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B2=N,gn=U2;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e_=new Set,ul={};function Ro(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(ul[t]=e,t=0;t<e.length;t++)e_.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=Object.prototype.hasOwnProperty,$2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P0={},C0={};function q2(t){return Kf.call(C0,t)?!0:Kf.call(P0,t)?!1:$2.test(t)?C0[t]=!0:(P0[t]=!0,!1)}function H2(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function W2(t,e,n,r){if(e===null||typeof e>"u"||H2(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lm=/[\-:]([a-z])/g;function jm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lm,jm);Dt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lm,jm);Dt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lm,jm);Dt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fm(t,e,n,r){var i=Dt.hasOwnProperty(e)?Dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(W2(e,n,i,r)&&(n=null),r||i===null?q2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hr=B2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Du=Symbol.for("react.element"),Jo=Symbol.for("react.portal"),Zo=Symbol.for("react.fragment"),zm=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),t_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),Um=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Xf=Symbol.for("react.suspense_list"),Bm=Symbol.for("react.memo"),ri=Symbol.for("react.lazy"),r_=Symbol.for("react.offscreen"),A0=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=A0&&t[A0]||t["@@iterator"],typeof t=="function"?t:null)}var Je=Object.assign,$d;function Da(t){if($d===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$d=e&&e[1]||""}return`
`+$d+t}var qd=!1;function Hd(t,e){if(!t||qd)return"";qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{qd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function K2(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=Hd(t.type,!1),t;case 11:return t=Hd(t.type.render,!1),t;case 1:return t=Hd(t.type,!0),t;default:return""}}function Yf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zo:return"Fragment";case Jo:return"Portal";case Gf:return"Profiler";case zm:return"StrictMode";case Qf:return"Suspense";case Xf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n_:return(t.displayName||"Context")+".Consumer";case t_:return(t._context.displayName||"Context")+".Provider";case Um:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bm:return e=t.displayName||null,e!==null?e:Yf(t.type)||"Memo";case ri:e=t._payload,t=t._init;try{return Yf(t(e))}catch{}}return null}function G2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yf(e);case 8:return e===zm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function i_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q2(t){var e=i_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ou(t){t._valueTracker||(t._valueTracker=Q2(t))}function o_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=i_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Mc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jf(t,e){var n=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function k0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s_(t,e){e=e.checked,e!=null&&Fm(t,"checked",e,!1)}function Zf(t,e){s_(t,e);var n=xi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ep(t,e.type,n):e.hasOwnProperty("defaultValue")&&ep(t,e.type,xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function R0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ep(t,e,n){(e!=="number"||Mc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oa=Array.isArray;function gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function I0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Oa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xi(n)}}function a_(t,e){var n=xi(e.value),r=xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function D0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nu,u_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nu=Nu||document.createElement("div"),Nu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function cl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X2=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){X2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function c_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function h_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=c_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Y2=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(t,e){if(e){if(Y2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function ip(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=null;function $m(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sp=null,ys=null,vs=null;function O0(t){if(t=Gl(t)){if(typeof sp!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Kh(e),sp(t.stateNode,t.type,e))}}function d_(t){ys?vs?vs.push(t):vs=[t]:ys=t}function f_(){if(ys){var t=ys,e=vs;if(vs=ys=null,O0(t),e)for(t=0;t<e.length;t++)O0(e[t])}}function p_(t,e){return t(e)}function m_(){}var Wd=!1;function g_(t,e,n){if(Wd)return t(e,n);Wd=!0;try{return p_(t,e,n)}finally{Wd=!1,(ys!==null||vs!==null)&&(m_(),f_())}}function hl(t,e){var n=t.stateNode;if(n===null)return null;var r=Kh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var ap=!1;if(Mr)try{var va={};Object.defineProperty(va,"passive",{get:function(){ap=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{ap=!1}function J2(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Wa=!1,Lc=null,jc=!1,lp=null,Z2={onError:function(t){Wa=!0,Lc=t}};function eC(t,e,n,r,i,o,s,a,l){Wa=!1,Lc=null,J2.apply(Z2,arguments)}function tC(t,e,n,r,i,o,s,a,l){if(eC.apply(this,arguments),Wa){if(Wa){var c=Lc;Wa=!1,Lc=null}else throw Error(H(198));jc||(jc=!0,lp=c)}}function Io(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N0(t){if(Io(t)!==t)throw Error(H(188))}function nC(t){var e=t.alternate;if(!e){if(e=Io(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return N0(i),t;if(o===r)return N0(i),e;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function v_(t){return t=nC(t),t!==null?w_(t):null}function w_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w_(t);if(e!==null)return e;t=t.sibling}return null}var b_=gn.unstable_scheduleCallback,V0=gn.unstable_cancelCallback,rC=gn.unstable_shouldYield,iC=gn.unstable_requestPaint,ot=gn.unstable_now,oC=gn.unstable_getCurrentPriorityLevel,qm=gn.unstable_ImmediatePriority,__=gn.unstable_UserBlockingPriority,Fc=gn.unstable_NormalPriority,sC=gn.unstable_LowPriority,x_=gn.unstable_IdlePriority,$h=null,ar=null;function aC(t){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot($h,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:cC,lC=Math.log,uC=Math.LN2;function cC(t){return t>>>=0,t===0?32:31-(lC(t)/uC|0)|0}var Vu=64,Mu=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Na(a):(o&=s,o!==0&&(r=Na(o)))}else s=n&~i,s!==0?r=Na(s):o!==0&&(r=Na(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xn(e),i=1<<n,r|=t[n],e&=~i;return r}function hC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=hC(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E_(){var t=Vu;return Vu<<=1,!(Vu&4194240)&&(Vu=64),t}function Kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function fC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Hm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Re=0;function T_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var S_,Wm,P_,C_,A_,cp=!1,Lu=[],hi=null,di=null,fi=null,dl=new Map,fl=new Map,oi=[],pC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function M0(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":di=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":dl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(e.pointerId)}}function wa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Gl(e),e!==null&&Wm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mC(t,e,n,r,i){switch(e){case"focusin":return hi=wa(hi,t,e,n,r,i),!0;case"dragenter":return di=wa(di,t,e,n,r,i),!0;case"mouseover":return fi=wa(fi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return dl.set(o,wa(dl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fl.set(o,wa(fl.get(o)||null,t,e,n,r,i)),!0}return!1}function k_(t){var e=ao(t.target);if(e!==null){var n=Io(e);if(n!==null){if(e=n.tag,e===13){if(e=y_(n),e!==null){t.blockedOn=e,A_(t.priority,function(){P_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);op=r,n.target.dispatchEvent(r),op=null}else return e=Gl(n),e!==null&&Wm(e),t.blockedOn=n,!1;e.shift()}return!0}function L0(t,e,n){pc(t)&&n.delete(e)}function gC(){cp=!1,hi!==null&&pc(hi)&&(hi=null),di!==null&&pc(di)&&(di=null),fi!==null&&pc(fi)&&(fi=null),dl.forEach(L0),fl.forEach(L0)}function ba(t,e){t.blockedOn===e&&(t.blockedOn=null,cp||(cp=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,gC)))}function pl(t){function e(i){return ba(i,t)}if(0<Lu.length){ba(Lu[0],t);for(var n=1;n<Lu.length;n++){var r=Lu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hi!==null&&ba(hi,t),di!==null&&ba(di,t),fi!==null&&ba(fi,t),dl.forEach(e),fl.forEach(e),n=0;n<oi.length;n++)r=oi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<oi.length&&(n=oi[0],n.blockedOn===null);)k_(n),n.blockedOn===null&&oi.shift()}var ws=Hr.ReactCurrentBatchConfig,Uc=!0;function yC(t,e,n,r){var i=Re,o=ws.transition;ws.transition=null;try{Re=1,Km(t,e,n,r)}finally{Re=i,ws.transition=o}}function vC(t,e,n,r){var i=Re,o=ws.transition;ws.transition=null;try{Re=4,Km(t,e,n,r)}finally{Re=i,ws.transition=o}}function Km(t,e,n,r){if(Uc){var i=hp(t,e,n,r);if(i===null)rf(t,e,r,Bc,n),M0(t,r);else if(mC(i,t,e,n,r))r.stopPropagation();else if(M0(t,r),e&4&&-1<pC.indexOf(t)){for(;i!==null;){var o=Gl(i);if(o!==null&&S_(o),o=hp(t,e,n,r),o===null&&rf(t,e,r,Bc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rf(t,e,r,null,n)}}var Bc=null;function hp(t,e,n,r){if(Bc=null,t=$m(r),t=ao(t),t!==null)if(e=Io(t),e===null)t=null;else if(n=e.tag,n===13){if(t=y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bc=t,null}function R_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oC()){case qm:return 1;case __:return 4;case Fc:case sC:return 16;case x_:return 536870912;default:return 16}default:return 16}}var ai=null,Gm=null,mc=null;function I_(){if(mc)return mc;var t,e=Gm,n=e.length,r,i="value"in ai?ai.value:ai.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return mc=i.slice(t,1<r?1-r:void 0)}function gc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ju(){return!0}function j0(){return!1}function _n(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ju:j0,this.isPropagationStopped=j0,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ju)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ju)},persist:function(){},isPersistent:ju}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qm=_n(Ws),Kl=Je({},Ws,{view:0,detail:0}),wC=_n(Kl),Gd,Qd,_a,qh=Je({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(Gd=t.screenX-_a.screenX,Qd=t.screenY-_a.screenY):Qd=Gd=0,_a=t),Gd)},movementY:function(t){return"movementY"in t?t.movementY:Qd}}),F0=_n(qh),bC=Je({},qh,{dataTransfer:0}),_C=_n(bC),xC=Je({},Kl,{relatedTarget:0}),Xd=_n(xC),EC=Je({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),TC=_n(EC),SC=Je({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PC=_n(SC),CC=Je({},Ws,{data:0}),z0=_n(CC),AC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RC[t])?!!e[t]:!1}function Xm(){return IC}var DC=Je({},Kl,{key:function(t){if(t.key){var e=AC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xm,charCode:function(t){return t.type==="keypress"?gc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OC=_n(DC),NC=Je({},qh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U0=_n(NC),VC=Je({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xm}),MC=_n(VC),LC=Je({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),jC=_n(LC),FC=Je({},qh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zC=_n(FC),UC=[9,13,27,32],Ym=Mr&&"CompositionEvent"in window,Ka=null;Mr&&"documentMode"in document&&(Ka=document.documentMode);var BC=Mr&&"TextEvent"in window&&!Ka,D_=Mr&&(!Ym||Ka&&8<Ka&&11>=Ka),B0=" ",$0=!1;function O_(t,e){switch(t){case"keyup":return UC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function $C(t,e){switch(t){case"compositionend":return N_(e);case"keypress":return e.which!==32?null:($0=!0,B0);case"textInput":return t=e.data,t===B0&&$0?null:t;default:return null}}function qC(t,e){if(es)return t==="compositionend"||!Ym&&O_(t,e)?(t=I_(),mc=Gm=ai=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D_&&e.locale!=="ko"?null:e.data;default:return null}}var HC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function q0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HC[t.type]:e==="textarea"}function V_(t,e,n,r){d_(r),e=$c(e,"onChange"),0<e.length&&(n=new Qm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ga=null,ml=null;function WC(t){W_(t,0)}function Hh(t){var e=rs(t);if(o_(e))return t}function KC(t,e){if(t==="change")return e}var M_=!1;if(Mr){var Yd;if(Mr){var Jd="oninput"in document;if(!Jd){var H0=document.createElement("div");H0.setAttribute("oninput","return;"),Jd=typeof H0.oninput=="function"}Yd=Jd}else Yd=!1;M_=Yd&&(!document.documentMode||9<document.documentMode)}function W0(){Ga&&(Ga.detachEvent("onpropertychange",L_),ml=Ga=null)}function L_(t){if(t.propertyName==="value"&&Hh(ml)){var e=[];V_(e,ml,t,$m(t)),g_(WC,e)}}function GC(t,e,n){t==="focusin"?(W0(),Ga=e,ml=n,Ga.attachEvent("onpropertychange",L_)):t==="focusout"&&W0()}function QC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hh(ml)}function XC(t,e){if(t==="click")return Hh(e)}function YC(t,e){if(t==="input"||t==="change")return Hh(e)}function JC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:JC;function gl(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kf.call(e,i)||!Jn(t[i],e[i]))return!1}return!0}function K0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function G0(t,e){var n=K0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=K0(n)}}function j_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?j_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F_(){for(var t=window,e=Mc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mc(t.document)}return e}function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZC(t){var e=F_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&j_(n.ownerDocument.documentElement,n)){if(r!==null&&Jm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=G0(n,o);var s=G0(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eA=Mr&&"documentMode"in document&&11>=document.documentMode,ts=null,dp=null,Qa=null,fp=!1;function Q0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fp||ts==null||ts!==Mc(r)||(r=ts,"selectionStart"in r&&Jm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qa&&gl(Qa,r)||(Qa=r,r=$c(dp,"onSelect"),0<r.length&&(e=new Qm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ts)))}function Fu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:Fu("Animation","AnimationEnd"),animationiteration:Fu("Animation","AnimationIteration"),animationstart:Fu("Animation","AnimationStart"),transitionend:Fu("Transition","TransitionEnd")},Zd={},z_={};Mr&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Wh(t){if(Zd[t])return Zd[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z_)return Zd[t]=e[n];return t}var U_=Wh("animationend"),B_=Wh("animationiteration"),$_=Wh("animationstart"),q_=Wh("transitionend"),H_=new Map,X0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){H_.set(t,e),Ro(e,[t])}for(var ef=0;ef<X0.length;ef++){var tf=X0[ef],tA=tf.toLowerCase(),nA=tf[0].toUpperCase()+tf.slice(1);Ii(tA,"on"+nA)}Ii(U_,"onAnimationEnd");Ii(B_,"onAnimationIteration");Ii($_,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(q_,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function Y0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tC(r,e,void 0,t),t.currentTarget=null}function W_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Y0(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Y0(i,a,c),o=l}}}if(jc)throw t=lp,jc=!1,lp=null,t}function Ue(t,e){var n=e[vp];n===void 0&&(n=e[vp]=new Set);var r=t+"__bubble";n.has(r)||(K_(e,t,2,!1),n.add(r))}function nf(t,e,n){var r=0;e&&(r|=4),K_(n,t,r,e)}var zu="_reactListening"+Math.random().toString(36).slice(2);function yl(t){if(!t[zu]){t[zu]=!0,e_.forEach(function(n){n!=="selectionchange"&&(rA.has(n)||nf(n,!1,t),nf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zu]||(e[zu]=!0,nf("selectionchange",!1,e))}}function K_(t,e,n,r){switch(R_(e)){case 1:var i=yC;break;case 4:i=vC;break;default:i=Km}n=i.bind(null,e,n,t),i=void 0,!ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ao(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}g_(function(){var c=o,h=$m(n),d=[];e:{var f=H_.get(t);if(f!==void 0){var g=Qm,v=t;switch(t){case"keypress":if(gc(n)===0)break e;case"keydown":case"keyup":g=OC;break;case"focusin":v="focus",g=Xd;break;case"focusout":v="blur",g=Xd;break;case"beforeblur":case"afterblur":g=Xd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=F0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_C;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=MC;break;case U_:case B_:case $_:g=TC;break;case q_:g=jC;break;case"scroll":g=wC;break;case"wheel":g=zC;break;case"copy":case"cut":case"paste":g=PC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=U0}var b=(e&4)!==0,S=!b&&t==="scroll",_=b?f!==null?f+"Capture":null:f;b=[];for(var w=c,x;w!==null;){x=w;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,_!==null&&(k=hl(w,_),k!=null&&b.push(vl(w,k,x)))),S)break;w=w.return}0<b.length&&(f=new g(f,v,null,n,h),d.push({event:f,listeners:b}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==op&&(v=n.relatedTarget||n.fromElement)&&(ao(v)||v[Lr]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?ao(v):null,v!==null&&(S=Io(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(b=F0,k="onMouseLeave",_="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(b=U0,k="onPointerLeave",_="onPointerEnter",w="pointer"),S=g==null?f:rs(g),x=v==null?f:rs(v),f=new b(k,w+"leave",g,n,h),f.target=S,f.relatedTarget=x,k=null,ao(h)===c&&(b=new b(_,w+"enter",v,n,h),b.target=x,b.relatedTarget=S,k=b),S=k,g&&v)t:{for(b=g,_=v,w=0,x=b;x;x=qo(x))w++;for(x=0,k=_;k;k=qo(k))x++;for(;0<w-x;)b=qo(b),w--;for(;0<x-w;)_=qo(_),x--;for(;w--;){if(b===_||_!==null&&b===_.alternate)break t;b=qo(b),_=qo(_)}b=null}else b=null;g!==null&&J0(d,f,g,b,!1),v!==null&&S!==null&&J0(d,S,v,b,!0)}}e:{if(f=c?rs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var M=KC;else if(q0(f))if(M_)M=YC;else{M=QC;var j=GC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=XC);if(M&&(M=M(t,c))){V_(d,M,n,h);break e}j&&j(t,f,c),t==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&ep(f,"number",f.value)}switch(j=c?rs(c):window,t){case"focusin":(q0(j)||j.contentEditable==="true")&&(ts=j,dp=c,Qa=null);break;case"focusout":Qa=dp=ts=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,Q0(d,n,h);break;case"selectionchange":if(eA)break;case"keydown":case"keyup":Q0(d,n,h)}var P;if(Ym)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else es?O_(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(D_&&n.locale!=="ko"&&(es||m!=="onCompositionStart"?m==="onCompositionEnd"&&es&&(P=I_()):(ai=h,Gm="value"in ai?ai.value:ai.textContent,es=!0)),j=$c(c,m),0<j.length&&(m=new z0(m,t,null,n,h),d.push({event:m,listeners:j}),P?m.data=P:(P=N_(n),P!==null&&(m.data=P)))),(P=BC?$C(t,n):qC(t,n))&&(c=$c(c,"onBeforeInput"),0<c.length&&(h=new z0("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=P))}W_(d,e)})}function vl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $c(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=hl(t,n),o!=null&&r.unshift(vl(t,o,i)),o=hl(t,e),o!=null&&r.push(vl(t,o,i))),t=t.return}return r}function qo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function J0(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=hl(n,o),l!=null&&s.unshift(vl(n,l,a))):i||(l=hl(n,o),l!=null&&s.push(vl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var iA=/\r\n?/g,oA=/\u0000|\uFFFD/g;function Z0(t){return(typeof t=="string"?t:""+t).replace(iA,`
`).replace(oA,"")}function Uu(t,e,n){if(e=Z0(e),Z0(t)!==e&&n)throw Error(H(425))}function qc(){}var pp=null,mp=null;function gp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,sA=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,aA=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(lA)}:yp;function lA(t){setTimeout(function(){throw t})}function of(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),pl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pl(e)}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),or="__reactFiber$"+Ks,wl="__reactProps$"+Ks,Lr="__reactContainer$"+Ks,vp="__reactEvents$"+Ks,uA="__reactListeners$"+Ks,cA="__reactHandles$"+Ks;function ao(t){var e=t[or];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[or]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tv(t);t!==null;){if(n=t[or])return n;t=tv(t)}return e}t=n,n=t.parentNode}return null}function Gl(t){return t=t[or]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Kh(t){return t[wl]||null}var wp=[],is=-1;function Di(t){return{current:t}}function Be(t){0>is||(t.current=wp[is],wp[is]=null,is--)}function Le(t,e){is++,wp[is]=t.current,t.current=e}var Ei={},Gt=Di(Ei),on=Di(!1),wo=Ei;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function Hc(){Be(on),Be(Gt)}function nv(t,e,n){if(Gt.current!==Ei)throw Error(H(168));Le(Gt,e),Le(on,n)}function G_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,G2(t)||"Unknown",i));return Je({},n,r)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ei,wo=Gt.current,Le(Gt,t),Le(on,on.current),!0}function rv(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=G_(t,e,wo),r.__reactInternalMemoizedMergedChildContext=t,Be(on),Be(Gt),Le(Gt,t)):Be(on),Le(on,n)}var Er=null,Gh=!1,sf=!1;function Q_(t){Er===null?Er=[t]:Er.push(t)}function hA(t){Gh=!0,Q_(t)}function Oi(){if(!sf&&Er!==null){sf=!0;var t=0,e=Re;try{var n=Er;for(Re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Er=null,Gh=!1}catch(i){throw Er!==null&&(Er=Er.slice(t+1)),b_(qm,Oi),i}finally{Re=e,sf=!1}}return null}var os=[],ss=0,Kc=null,Gc=0,Cn=[],An=0,bo=null,Tr=1,Sr="";function Zi(t,e){os[ss++]=Gc,os[ss++]=Kc,Kc=t,Gc=e}function X_(t,e,n){Cn[An++]=Tr,Cn[An++]=Sr,Cn[An++]=bo,bo=t;var r=Tr;t=Sr;var i=32-Xn(r)-1;r&=~(1<<i),n+=1;var o=32-Xn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Tr=1<<32-Xn(e)+i|n<<i|r,Sr=o+t}else Tr=1<<o|n<<i|r,Sr=t}function Zm(t){t.return!==null&&(Zi(t,1),X_(t,1,0))}function eg(t){for(;t===Kc;)Kc=os[--ss],os[ss]=null,Gc=os[--ss],os[ss]=null;for(;t===bo;)bo=Cn[--An],Cn[An]=null,Sr=Cn[--An],Cn[An]=null,Tr=Cn[--An],Cn[An]=null}var mn=null,fn=null,He=!1,Hn=null;function Y_(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,fn=pi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bo!==null?{id:Tr,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,fn=null,!0):!1;default:return!1}}function bp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _p(t){if(He){var e=fn;if(e){var n=e;if(!iv(t,e)){if(bp(t))throw Error(H(418));e=pi(n.nextSibling);var r=mn;e&&iv(t,e)?Y_(r,n):(t.flags=t.flags&-4097|2,He=!1,mn=t)}}else{if(bp(t))throw Error(H(418));t.flags=t.flags&-4097|2,He=!1,mn=t}}}function ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Bu(t){if(t!==mn)return!1;if(!He)return ov(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gp(t.type,t.memoizedProps)),e&&(e=fn)){if(bp(t))throw J_(),Error(H(418));for(;e;)Y_(t,e),e=pi(e.nextSibling)}if(ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=mn?pi(t.stateNode.nextSibling):null;return!0}function J_(){for(var t=fn;t;)t=pi(t.nextSibling)}function Ps(){fn=mn=null,He=!1}function tg(t){Hn===null?Hn=[t]:Hn.push(t)}var dA=Hr.ReactCurrentBatchConfig;function xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function $u(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sv(t){var e=t._init;return e(t._payload)}function Z_(t){function e(_,w){if(t){var x=_.deletions;x===null?(_.deletions=[w],_.flags|=16):x.push(w)}}function n(_,w){if(!t)return null;for(;w!==null;)e(_,w),w=w.sibling;return null}function r(_,w){for(_=new Map;w!==null;)w.key!==null?_.set(w.key,w):_.set(w.index,w),w=w.sibling;return _}function i(_,w){return _=vi(_,w),_.index=0,_.sibling=null,_}function o(_,w,x){return _.index=x,t?(x=_.alternate,x!==null?(x=x.index,x<w?(_.flags|=2,w):x):(_.flags|=2,w)):(_.flags|=1048576,w)}function s(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,w,x,k){return w===null||w.tag!==6?(w=ff(x,_.mode,k),w.return=_,w):(w=i(w,x),w.return=_,w)}function l(_,w,x,k){var M=x.type;return M===Zo?h(_,w,x.props.children,k,x.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ri&&sv(M)===w.type)?(k=i(w,x.props),k.ref=xa(_,w,x),k.return=_,k):(k=Ec(x.type,x.key,x.props,null,_.mode,k),k.ref=xa(_,w,x),k.return=_,k)}function c(_,w,x,k){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=pf(x,_.mode,k),w.return=_,w):(w=i(w,x.children||[]),w.return=_,w)}function h(_,w,x,k,M){return w===null||w.tag!==7?(w=mo(x,_.mode,k,M),w.return=_,w):(w=i(w,x),w.return=_,w)}function d(_,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ff(""+w,_.mode,x),w.return=_,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Du:return x=Ec(w.type,w.key,w.props,null,_.mode,x),x.ref=xa(_,null,w),x.return=_,x;case Jo:return w=pf(w,_.mode,x),w.return=_,w;case ri:var k=w._init;return d(_,k(w._payload),x)}if(Oa(w)||ya(w))return w=mo(w,_.mode,x,null),w.return=_,w;$u(_,w)}return null}function f(_,w,x,k){var M=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:a(_,w,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Du:return x.key===M?l(_,w,x,k):null;case Jo:return x.key===M?c(_,w,x,k):null;case ri:return M=x._init,f(_,w,M(x._payload),k)}if(Oa(x)||ya(x))return M!==null?null:h(_,w,x,k,null);$u(_,x)}return null}function g(_,w,x,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return _=_.get(x)||null,a(w,_,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Du:return _=_.get(k.key===null?x:k.key)||null,l(w,_,k,M);case Jo:return _=_.get(k.key===null?x:k.key)||null,c(w,_,k,M);case ri:var j=k._init;return g(_,w,x,j(k._payload),M)}if(Oa(k)||ya(k))return _=_.get(x)||null,h(w,_,k,M,null);$u(w,k)}return null}function v(_,w,x,k){for(var M=null,j=null,P=w,m=w=0,T=null;P!==null&&m<x.length;m++){P.index>m?(T=P,P=null):T=P.sibling;var A=f(_,P,x[m],k);if(A===null){P===null&&(P=T);break}t&&P&&A.alternate===null&&e(_,P),w=o(A,w,m),j===null?M=A:j.sibling=A,j=A,P=T}if(m===x.length)return n(_,P),He&&Zi(_,m),M;if(P===null){for(;m<x.length;m++)P=d(_,x[m],k),P!==null&&(w=o(P,w,m),j===null?M=P:j.sibling=P,j=P);return He&&Zi(_,m),M}for(P=r(_,P);m<x.length;m++)T=g(P,_,m,x[m],k),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?m:T.key),w=o(T,w,m),j===null?M=T:j.sibling=T,j=T);return t&&P.forEach(function(I){return e(_,I)}),He&&Zi(_,m),M}function b(_,w,x,k){var M=ya(x);if(typeof M!="function")throw Error(H(150));if(x=M.call(x),x==null)throw Error(H(151));for(var j=M=null,P=w,m=w=0,T=null,A=x.next();P!==null&&!A.done;m++,A=x.next()){P.index>m?(T=P,P=null):T=P.sibling;var I=f(_,P,A.value,k);if(I===null){P===null&&(P=T);break}t&&P&&I.alternate===null&&e(_,P),w=o(I,w,m),j===null?M=I:j.sibling=I,j=I,P=T}if(A.done)return n(_,P),He&&Zi(_,m),M;if(P===null){for(;!A.done;m++,A=x.next())A=d(_,A.value,k),A!==null&&(w=o(A,w,m),j===null?M=A:j.sibling=A,j=A);return He&&Zi(_,m),M}for(P=r(_,P);!A.done;m++,A=x.next())A=g(P,_,m,A.value,k),A!==null&&(t&&A.alternate!==null&&P.delete(A.key===null?m:A.key),w=o(A,w,m),j===null?M=A:j.sibling=A,j=A);return t&&P.forEach(function(V){return e(_,V)}),He&&Zi(_,m),M}function S(_,w,x,k){if(typeof x=="object"&&x!==null&&x.type===Zo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Du:e:{for(var M=x.key,j=w;j!==null;){if(j.key===M){if(M=x.type,M===Zo){if(j.tag===7){n(_,j.sibling),w=i(j,x.props.children),w.return=_,_=w;break e}}else if(j.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ri&&sv(M)===j.type){n(_,j.sibling),w=i(j,x.props),w.ref=xa(_,j,x),w.return=_,_=w;break e}n(_,j);break}else e(_,j);j=j.sibling}x.type===Zo?(w=mo(x.props.children,_.mode,k,x.key),w.return=_,_=w):(k=Ec(x.type,x.key,x.props,null,_.mode,k),k.ref=xa(_,w,x),k.return=_,_=k)}return s(_);case Jo:e:{for(j=x.key;w!==null;){if(w.key===j)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(_,w.sibling),w=i(w,x.children||[]),w.return=_,_=w;break e}else{n(_,w);break}else e(_,w);w=w.sibling}w=pf(x,_.mode,k),w.return=_,_=w}return s(_);case ri:return j=x._init,S(_,w,j(x._payload),k)}if(Oa(x))return v(_,w,x,k);if(ya(x))return b(_,w,x,k);$u(_,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(_,w.sibling),w=i(w,x),w.return=_,_=w):(n(_,w),w=ff(x,_.mode,k),w.return=_,_=w),s(_)):n(_,w)}return S}var Cs=Z_(!0),ex=Z_(!1),Qc=Di(null),Xc=null,as=null,ng=null;function rg(){ng=as=Xc=null}function ig(t){var e=Qc.current;Be(Qc),t._currentValue=e}function xp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Xc=t,ng=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(ng!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(Xc===null)throw Error(H(308));as=t,Xc.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var lo=null;function og(t){lo===null?lo=[t]:lo.push(t)}function tx(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,og(e)):(n.next=i.next,i.next=n),e.interleaved=n,jr(t,r)}function jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ii=!1;function sg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jr(t,n)}return i=r.interleaved,i===null?(e.next=e,og(r)):(e.next=i.next,i.next=e),r.interleaved=e,jr(t,n)}function yc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hm(t,n)}}function av(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yc(t,e,n,r){var i=t.updateQueue;ii=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,h=c=l=null,a=o;do{var f=a.lane,g=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,b=a;switch(f=e,g=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=Je({},d,f);break e;case 2:ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=d):h=h.next=g,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);xo|=s,t.lanes=s,t.memoizedState=d}}function lv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Ql={},lr=Di(Ql),bl=Di(Ql),_l=Di(Ql);function uo(t){if(t===Ql)throw Error(H(174));return t}function ag(t,e){switch(Le(_l,e),Le(bl,t),Le(lr,Ql),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=np(e,t)}Be(lr),Le(lr,e)}function As(){Be(lr),Be(bl),Be(_l)}function rx(t){uo(_l.current);var e=uo(lr.current),n=np(e,t.type);e!==n&&(Le(bl,t),Le(lr,n))}function lg(t){bl.current===t&&(Be(lr),Be(bl))}var Qe=Di(0);function Jc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var af=[];function ug(){for(var t=0;t<af.length;t++)af[t]._workInProgressVersionPrimary=null;af.length=0}var vc=Hr.ReactCurrentDispatcher,lf=Hr.ReactCurrentBatchConfig,_o=0,Ye=null,pt=null,_t=null,Zc=!1,Xa=!1,xl=0,fA=0;function Ft(){throw Error(H(321))}function cg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function hg(t,e,n,r,i,o){if(_o=o,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vc.current=t===null||t.memoizedState===null?yA:vA,t=n(r,i),Xa){o=0;do{if(Xa=!1,xl=0,25<=o)throw Error(H(301));o+=1,_t=pt=null,e.updateQueue=null,vc.current=wA,t=n(r,i)}while(Xa)}if(vc.current=eh,e=pt!==null&&pt.next!==null,_o=0,_t=pt=Ye=null,Zc=!1,e)throw Error(H(300));return t}function dg(){var t=xl!==0;return xl=0,t}function ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ye.memoizedState=_t=t:_t=_t.next=t,_t}function Nn(){if(pt===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=_t===null?Ye.memoizedState:_t.next;if(e!==null)_t=e,pt=t;else{if(t===null)throw Error(H(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},_t===null?Ye.memoizedState=_t=t:_t=_t.next=t}return _t}function El(t,e){return typeof e=="function"?e(t):e}function uf(t){var e=Nn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=pt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var h=c.lane;if((_o&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Ye.lanes|=h,xo|=h}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Jn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ye.lanes|=o,xo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cf(t){var e=Nn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Jn(o,e.memoizedState)||(rn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function ix(){}function ox(t,e){var n=Ye,r=Nn(),i=e(),o=!Jn(r.memoizedState,i);if(o&&(r.memoizedState=i,rn=!0),r=r.queue,fg(lx.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||_t!==null&&_t.memoizedState.tag&1){if(n.flags|=2048,Tl(9,ax.bind(null,n,r,i,e),void 0,null),xt===null)throw Error(H(349));_o&30||sx(n,e,i)}return i}function sx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ax(t,e,n,r){e.value=n,e.getSnapshot=r,ux(e)&&cx(t)}function lx(t,e,n){return n(function(){ux(e)&&cx(t)})}function ux(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function cx(t){var e=jr(t,1);e!==null&&Yn(e,t,1,-1)}function uv(t){var e=ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:El,lastRenderedState:t},e.queue=t,t=t.dispatch=gA.bind(null,Ye,t),[e.memoizedState,t]}function Tl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hx(){return Nn().memoizedState}function wc(t,e,n,r){var i=ir();Ye.flags|=t,i.memoizedState=Tl(1|e,n,void 0,r===void 0?null:r)}function Qh(t,e,n,r){var i=Nn();r=r===void 0?null:r;var o=void 0;if(pt!==null){var s=pt.memoizedState;if(o=s.destroy,r!==null&&cg(r,s.deps)){i.memoizedState=Tl(e,n,o,r);return}}Ye.flags|=t,i.memoizedState=Tl(1|e,n,o,r)}function cv(t,e){return wc(8390656,8,t,e)}function fg(t,e){return Qh(2048,8,t,e)}function dx(t,e){return Qh(4,2,t,e)}function fx(t,e){return Qh(4,4,t,e)}function px(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mx(t,e,n){return n=n!=null?n.concat([t]):null,Qh(4,4,px.bind(null,e,t),n)}function pg(){}function gx(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yx(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vx(t,e,n){return _o&21?(Jn(n,e)||(n=E_(),Ye.lanes|=n,xo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function pA(t,e){var n=Re;Re=n!==0&&4>n?n:4,t(!0);var r=lf.transition;lf.transition={};try{t(!1),e()}finally{Re=n,lf.transition=r}}function wx(){return Nn().memoizedState}function mA(t,e,n){var r=yi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bx(t))_x(e,n);else if(n=tx(t,e,n,r),n!==null){var i=Jt();Yn(n,t,r,i),xx(n,e,r)}}function gA(t,e,n){var r=yi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bx(t))_x(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Jn(a,s)){var l=e.interleaved;l===null?(i.next=i,og(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=tx(t,e,i,r),n!==null&&(i=Jt(),Yn(n,t,r,i),xx(n,e,r))}}function bx(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function _x(t,e){Xa=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hm(t,n)}}var eh={readContext:On,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},yA={readContext:On,useCallback:function(t,e){return ir().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:cv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wc(4194308,4,px.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return wc(4,2,t,e)},useMemo:function(t,e){var n=ir();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ir();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mA.bind(null,Ye,t),[r.memoizedState,t]},useRef:function(t){var e=ir();return t={current:t},e.memoizedState=t},useState:uv,useDebugValue:pg,useDeferredValue:function(t){return ir().memoizedState=t},useTransition:function(){var t=uv(!1),e=t[0];return t=pA.bind(null,t[1]),ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ye,i=ir();if(He){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),xt===null)throw Error(H(349));_o&30||sx(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,cv(lx.bind(null,r,o,t),[t]),r.flags|=2048,Tl(9,ax.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=ir(),e=xt.identifierPrefix;if(He){var n=Sr,r=Tr;n=(r&~(1<<32-Xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vA={readContext:On,useCallback:gx,useContext:On,useEffect:fg,useImperativeHandle:mx,useInsertionEffect:dx,useLayoutEffect:fx,useMemo:yx,useReducer:uf,useRef:hx,useState:function(){return uf(El)},useDebugValue:pg,useDeferredValue:function(t){var e=Nn();return vx(e,pt.memoizedState,t)},useTransition:function(){var t=uf(El)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:ix,useSyncExternalStore:ox,useId:wx,unstable_isNewReconciler:!1},wA={readContext:On,useCallback:gx,useContext:On,useEffect:fg,useImperativeHandle:mx,useInsertionEffect:dx,useLayoutEffect:fx,useMemo:yx,useReducer:cf,useRef:hx,useState:function(){return cf(El)},useDebugValue:pg,useDeferredValue:function(t){var e=Nn();return pt===null?e.memoizedState=t:vx(e,pt.memoizedState,t)},useTransition:function(){var t=cf(El)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:ix,useSyncExternalStore:ox,useId:wx,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=Je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ep(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xh={isMounted:function(t){return(t=t._reactInternals)?Io(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=yi(t),o=Ar(r,i);o.payload=e,n!=null&&(o.callback=n),e=mi(t,o,i),e!==null&&(Yn(e,t,i,r),yc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=yi(t),o=Ar(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=mi(t,o,i),e!==null&&(Yn(e,t,i,r),yc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),r=yi(t),i=Ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=mi(t,i,r),e!==null&&(Yn(e,t,r,n),yc(e,t,r))}};function hv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!gl(n,r)||!gl(i,o):!0}function Ex(t,e,n){var r=!1,i=Ei,o=e.contextType;return typeof o=="object"&&o!==null?o=On(o):(i=sn(e)?wo:Gt.current,r=e.contextTypes,o=(r=r!=null)?Ss(t,i):Ei),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function dv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xh.enqueueReplaceState(e,e.state,null)}function Tp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sg(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=On(o):(o=sn(e)?wo:Gt.current,i.context=Ss(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ep(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xh.enqueueReplaceState(i,i.state,null),Yc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e){try{var n="",r=e;do n+=K2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bA=typeof WeakMap=="function"?WeakMap:Map;function Tx(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nh||(nh=!0,Vp=r),Sp(t,e)},n}function Sx(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Sp(t,e),typeof r!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function fv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NA.bind(null,t,e,n),e.then(t,t))}function pv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,mi(n,e,1))),n.lanes|=1),t)}var _A=Hr.ReactCurrentOwner,rn=!1;function Yt(t,e,n,r){e.child=t===null?ex(e,null,n,r):Cs(e,t.child,n,r)}function gv(t,e,n,r,i){n=n.render;var o=e.ref;return bs(e,i),r=hg(t,e,n,r,o,i),n=dg(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(He&&n&&Zm(e),e.flags|=1,Yt(t,e,r,i),e.child)}function yv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!xg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Px(t,e,o,r,i)):(t=Ec(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:gl,n(s,r)&&t.ref===e.ref)return Fr(t,e,i)}return e.flags|=1,t=vi(o,r),t.ref=e.ref,t.return=e,e.child=t}function Px(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(gl(o,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Fr(t,e,i)}return Pp(t,e,n,r,i)}function Cx(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(us,hn),hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Le(us,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Le(us,hn),hn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Le(us,hn),hn|=r;return Yt(t,e,i,n),e.child}function Ax(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pp(t,e,n,r,i){var o=sn(n)?wo:Gt.current;return o=Ss(e,o),bs(e,i),n=hg(t,e,n,r,o,i),r=dg(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(He&&r&&Zm(e),e.flags|=1,Yt(t,e,n,i),e.child)}function vv(t,e,n,r,i){if(sn(n)){var o=!0;Wc(e)}else o=!1;if(bs(e,i),e.stateNode===null)bc(t,e),Ex(e,n,r),Tp(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=sn(n)?wo:Gt.current,c=Ss(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&dv(e,s,r,c),ii=!1;var f=e.memoizedState;s.state=f,Yc(e,r,s,i),l=e.memoizedState,a!==r||f!==l||on.current||ii?(typeof h=="function"&&(Ep(e,n,h,r),l=e.memoizedState),(a=ii||hv(e,n,a,r,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,nx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),s.props=c,d=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=sn(n)?wo:Gt.current,l=Ss(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&dv(e,s,r,l),ii=!1,f=e.memoizedState,s.state=f,Yc(e,r,s,i);var v=e.memoizedState;a!==d||f!==v||on.current||ii?(typeof g=="function"&&(Ep(e,n,g,r),v=e.memoizedState),(c=ii||hv(e,n,c,r,f,v,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Cp(t,e,n,r,o,i)}function Cp(t,e,n,r,i,o){Ax(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&rv(e,n,!1),Fr(t,e,o);r=e.stateNode,_A.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Cs(e,t.child,null,o),e.child=Cs(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=r.state,i&&rv(e,n,!0),e.child}function kx(t){var e=t.stateNode;e.pendingContext?nv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nv(t,e.context,!1),ag(t,e.containerInfo)}function wv(t,e,n,r,i){return Ps(),tg(i),e.flags|=256,Yt(t,e,n,r),e.child}var Ap={dehydrated:null,treeContext:null,retryLane:0};function kp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rx(t,e,n){var r=e.pendingProps,i=Qe.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Le(Qe,i&1),t===null)return _p(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zh(s,r,0,null),t=mo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=kp(n),e.memoizedState=Ap,t):mg(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xA(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=vi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=vi(a,o):(o=mo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?kp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Ap,r}return o=t.child,t=o.sibling,r=vi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mg(t,e){return e=Zh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qu(t,e,n,r){return r!==null&&tg(r),Cs(e,t.child,null,n),t=mg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xA(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=hf(Error(H(422))),qu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Zh({mode:"visible",children:r.children},i,0,null),o=mo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Cs(e,t.child,null,s),e.child.memoizedState=kp(s),e.memoizedState=Ap,o);if(!(e.mode&1))return qu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(H(419)),r=hf(o,r,void 0),qu(t,e,s,r)}if(a=(s&t.childLanes)!==0,rn||a){if(r=xt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,jr(t,i),Yn(r,t,i,-1))}return _g(),r=hf(Error(H(421))),qu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VA.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,fn=pi(i.nextSibling),mn=e,He=!0,Hn=null,t!==null&&(Cn[An++]=Tr,Cn[An++]=Sr,Cn[An++]=bo,Tr=t.id,Sr=t.overflow,bo=e),e=mg(e,r.children),e.flags|=4096,e)}function bv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xp(t.return,e,n)}function df(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ix(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Yt(t,e,r.children,n),r=Qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bv(t,n,e);else if(t.tag===19)bv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Le(Qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),df(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}df(e,!0,n,null,o);break;case"together":df(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function EA(t,e,n){switch(e.tag){case 3:kx(e),Ps();break;case 5:rx(e);break;case 1:sn(e.type)&&Wc(e);break;case 4:ag(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Le(Qc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Le(Qe,Qe.current&1),e.flags|=128,null):n&e.child.childLanes?Rx(t,e,n):(Le(Qe,Qe.current&1),t=Fr(t,e,n),t!==null?t.sibling:null);Le(Qe,Qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ix(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(Qe,Qe.current),r)break;return null;case 22:case 23:return e.lanes=0,Cx(t,e,n)}return Fr(t,e,n)}var Dx,Rp,Ox,Nx;Dx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rp=function(){};Ox=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,uo(lr.current);var o=null;switch(n){case"input":i=Jf(t,i),r=Jf(t,r),o=[];break;case"select":i=Je({},i,{value:void 0}),r=Je({},r,{value:void 0}),o=[];break;case"textarea":i=tp(t,i),r=tp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qc)}rp(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ul.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ul.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ue("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Nx=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ea(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TA(t,e,n){var r=e.pendingProps;switch(eg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&Hc(),zt(e),null;case 3:return r=e.stateNode,As(),Be(on),Be(Gt),ug(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(jp(Hn),Hn=null))),Rp(t,e),zt(e),null;case 5:lg(e);var i=uo(_l.current);if(n=e.type,t!==null&&e.stateNode!=null)Ox(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return zt(e),null}if(t=uo(lr.current),Bu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[or]=e,r[wl]=o,t=(e.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<Va.length;i++)Ue(Va[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":k0(r,o),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ue("invalid",r);break;case"textarea":I0(r,o),Ue("invalid",r)}rp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Uu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Uu(r.textContent,a,t),i=["children",""+a]):ul.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ue("scroll",r)}switch(n){case"input":Ou(r),R0(r,o,!0);break;case"textarea":Ou(r),D0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[or]=e,t[wl]=r,Dx(t,e,!1,!1),e.stateNode=t;e:{switch(s=ip(n,r),n){case"dialog":Ue("cancel",t),Ue("close",t),i=r;break;case"iframe":case"object":case"embed":Ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<Va.length;i++)Ue(Va[i],t);i=r;break;case"source":Ue("error",t),i=r;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=r;break;case"details":Ue("toggle",t),i=r;break;case"input":k0(t,r),i=Jf(t,r),Ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Je({},r,{value:void 0}),Ue("invalid",t);break;case"textarea":I0(t,r),i=tp(t,r),Ue("invalid",t);break;default:i=r}rp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?h_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&cl(t,l):typeof l=="number"&&cl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ul.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ue("scroll",t):l!=null&&Fm(t,o,l,s))}switch(n){case"input":Ou(t),R0(t,r,!1);break;case"textarea":Ou(t),D0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?gs(t,!!r.multiple,o,!1):r.defaultValue!=null&&gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Nx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=uo(_l.current),uo(lr.current),Bu(e)){if(r=e.stateNode,n=e.memoizedProps,r[or]=e,(o=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Uu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Uu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[or]=e,e.stateNode=r}return zt(e),null;case 13:if(Be(Qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&fn!==null&&e.mode&1&&!(e.flags&128))J_(),Ps(),e.flags|=98560,o=!1;else if(o=Bu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(H(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[or]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),o=!1}else Hn!==null&&(jp(Hn),Hn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Qe.current&1?gt===0&&(gt=3):_g())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return As(),Rp(t,e),t===null&&yl(e.stateNode.containerInfo),zt(e),null;case 10:return ig(e.type._context),zt(e),null;case 17:return sn(e.type)&&Hc(),zt(e),null;case 19:if(Be(Qe),o=e.memoizedState,o===null)return zt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ea(o,!1);else{if(gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Jc(t),s!==null){for(e.flags|=128,Ea(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Le(Qe,Qe.current&1|2),e.child}t=t.sibling}o.tail!==null&&ot()>Rs&&(e.flags|=128,r=!0,Ea(o,!1),e.lanes=4194304)}else{if(!r)if(t=Jc(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ea(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!He)return zt(e),null}else 2*ot()-o.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,r=!0,Ea(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ot(),e.sibling=null,n=Qe.current,Le(Qe,r?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return bg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function SA(t,e){switch(eg(e),e.tag){case 1:return sn(e.type)&&Hc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),Be(on),Be(Gt),ug(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lg(e),null;case 13:if(Be(Qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Qe),null;case 4:return As(),null;case 10:return ig(e.type._context),null;case 22:case 23:return bg(),null;case 24:return null;default:return null}}var Hu=!1,qt=!1,PA=typeof WeakSet=="function"?WeakSet:Set,X=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function Ip(t,e,n){try{n()}catch(r){tt(t,e,r)}}var _v=!1;function CA(t,e){if(pp=Uc,t=F_(),Jm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=s),f===o&&++h===r&&(l=s),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mp={focusedElem:t,selectionRange:n},Uc=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,S=v.memoizedState,_=e.stateNode,w=_.getSnapshotBeforeUpdate(e.elementType===e.type?b:Bn(e.type,b),S);_.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(k){tt(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return v=_v,_v=!1,v}function Ya(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ip(e,n,o)}i=i.next}while(i!==r)}}function Yh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vx(t){var e=t.alternate;e!==null&&(t.alternate=null,Vx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[or],delete e[wl],delete e[vp],delete e[uA],delete e[cA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mx(t){return t.tag===5||t.tag===3||t.tag===4}function xv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qc));else if(r!==4&&(t=t.child,t!==null))for(Op(t,e,n),t=t.sibling;t!==null;)Op(t,e,n),t=t.sibling}function Np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Np(t,e,n),t=t.sibling;t!==null;)Np(t,e,n),t=t.sibling}var Pt=null,$n=!1;function Zr(t,e,n){for(n=n.child;n!==null;)Lx(t,e,n),n=n.sibling}function Lx(t,e,n){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount($h,n)}catch{}switch(n.tag){case 5:qt||ls(n,e);case 6:var r=Pt,i=$n;Pt=null,Zr(t,e,n),Pt=r,$n=i,Pt!==null&&($n?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&($n?(t=Pt,n=n.stateNode,t.nodeType===8?of(t.parentNode,n):t.nodeType===1&&of(t,n),pl(t)):of(Pt,n.stateNode));break;case 4:r=Pt,i=$n,Pt=n.stateNode.containerInfo,$n=!0,Zr(t,e,n),Pt=r,$n=i;break;case 0:case 11:case 14:case 15:if(!qt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ip(n,e,s),i=i.next}while(i!==r)}Zr(t,e,n);break;case 1:if(!qt&&(ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){tt(n,e,a)}Zr(t,e,n);break;case 21:Zr(t,e,n);break;case 22:n.mode&1?(qt=(r=qt)||n.memoizedState!==null,Zr(t,e,n),qt=r):Zr(t,e,n);break;default:Zr(t,e,n)}}function Ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PA),e.forEach(function(r){var i=MA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,$n=!1;break e;case 3:Pt=a.stateNode.containerInfo,$n=!0;break e;case 4:Pt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Pt===null)throw Error(H(160));Lx(o,s,i),Pt=null,$n=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){tt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jx(e,t),e=e.sibling}function jx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),rr(t),r&4){try{Ya(3,t,t.return),Yh(3,t)}catch(b){tt(t,t.return,b)}try{Ya(5,t,t.return)}catch(b){tt(t,t.return,b)}}break;case 1:zn(e,t),rr(t),r&512&&n!==null&&ls(n,n.return);break;case 5:if(zn(e,t),rr(t),r&512&&n!==null&&ls(n,n.return),t.flags&32){var i=t.stateNode;try{cl(i,"")}catch(b){tt(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&s_(i,o),ip(a,s);var c=ip(a,o);for(s=0;s<l.length;s+=2){var h=l[s],d=l[s+1];h==="style"?h_(i,d):h==="dangerouslySetInnerHTML"?u_(i,d):h==="children"?cl(i,d):Fm(i,h,d,c)}switch(a){case"input":Zf(i,o);break;case"textarea":a_(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?gs(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?gs(i,!!o.multiple,o.defaultValue,!0):gs(i,!!o.multiple,o.multiple?[]:"",!1))}i[wl]=o}catch(b){tt(t,t.return,b)}}break;case 6:if(zn(e,t),rr(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(b){tt(t,t.return,b)}}break;case 3:if(zn(e,t),rr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pl(e.containerInfo)}catch(b){tt(t,t.return,b)}break;case 4:zn(e,t),rr(t);break;case 13:zn(e,t),rr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vg=ot())),r&4&&Ev(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||h,zn(e,t),qt=c):zn(e,t),rr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(X=t,h=t.child;h!==null;){for(d=X=h;X!==null;){switch(f=X,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ya(4,f,f.return);break;case 1:ls(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(b){tt(r,n,b)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){Sv(d);continue}}g!==null?(g.return=f,X=g):Sv(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=c_("display",s))}catch(b){tt(t,t.return,b)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(b){tt(t,t.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zn(e,t),rr(t),r&4&&Ev(t);break;case 21:break;default:zn(e,t),rr(t)}}function rr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mx(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cl(i,""),r.flags&=-33);var o=xv(t);Np(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=xv(t);Op(t,a,s);break;default:throw Error(H(161))}}catch(l){tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AA(t,e,n){X=t,Fx(t)}function Fx(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Hu;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Hu;var c=qt;if(Hu=s,(qt=l)&&!c)for(X=i;X!==null;)s=X,l=s.child,s.tag===22&&s.memoizedState!==null?Pv(i):l!==null?(l.return=s,X=l):Pv(i);for(;o!==null;)X=o,Fx(o),o=o.sibling;X=i,Hu=a,qt=c}Tv(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):Tv(t)}}function Tv(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Yh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&lv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&pl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}qt||e.flags&512&&Dp(e)}catch(f){tt(e,e.return,f)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function Sv(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function Pv(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yh(4,e)}catch(l){tt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){tt(e,i,l)}}var o=e.return;try{Dp(e)}catch(l){tt(e,o,l)}break;case 5:var s=e.return;try{Dp(e)}catch(l){tt(e,s,l)}}}catch(l){tt(e,e.return,l)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var kA=Math.ceil,th=Hr.ReactCurrentDispatcher,gg=Hr.ReactCurrentOwner,In=Hr.ReactCurrentBatchConfig,Se=0,xt=null,ct=null,Rt=0,hn=0,us=Di(0),gt=0,Sl=null,xo=0,Jh=0,yg=0,Ja=null,nn=null,vg=0,Rs=1/0,xr=null,nh=!1,Vp=null,gi=null,Wu=!1,li=null,rh=0,Za=0,Mp=null,_c=-1,xc=0;function Jt(){return Se&6?ot():_c!==-1?_c:_c=ot()}function yi(t){return t.mode&1?Se&2&&Rt!==0?Rt&-Rt:dA.transition!==null?(xc===0&&(xc=E_()),xc):(t=Re,t!==0||(t=window.event,t=t===void 0?16:R_(t.type)),t):1}function Yn(t,e,n,r){if(50<Za)throw Za=0,Mp=null,Error(H(185));Wl(t,n,r),(!(Se&2)||t!==xt)&&(t===xt&&(!(Se&2)&&(Jh|=n),gt===4&&si(t,Rt)),an(t,r),n===1&&Se===0&&!(e.mode&1)&&(Rs=ot()+500,Gh&&Oi()))}function an(t,e){var n=t.callbackNode;dC(t,e);var r=zc(t,t===xt?Rt:0);if(r===0)n!==null&&V0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&V0(n),e===1)t.tag===0?hA(Cv.bind(null,t)):Q_(Cv.bind(null,t)),aA(function(){!(Se&6)&&Oi()}),n=null;else{switch(T_(r)){case 1:n=qm;break;case 4:n=__;break;case 16:n=Fc;break;case 536870912:n=x_;break;default:n=Fc}n=Kx(n,zx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zx(t,e){if(_c=-1,xc=0,Se&6)throw Error(H(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=zc(t,t===xt?Rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ih(t,r);else{e=r;var i=Se;Se|=2;var o=Bx();(xt!==t||Rt!==e)&&(xr=null,Rs=ot()+500,po(t,e));do try{DA();break}catch(a){Ux(t,a)}while(!0);rg(),th.current=o,Se=i,ct!==null?e=0:(xt=null,Rt=0,e=gt)}if(e!==0){if(e===2&&(i=up(t),i!==0&&(r=i,e=Lp(t,i))),e===1)throw n=Sl,po(t,0),si(t,r),an(t,ot()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!RA(i)&&(e=ih(t,r),e===2&&(o=up(t),o!==0&&(r=o,e=Lp(t,o))),e===1))throw n=Sl,po(t,0),si(t,r),an(t,ot()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:eo(t,nn,xr);break;case 3:if(si(t,r),(r&130023424)===r&&(e=vg+500-ot(),10<e)){if(zc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yp(eo.bind(null,t,nn,xr),e);break}eo(t,nn,xr);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Xn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kA(r/1960))-r,10<r){t.timeoutHandle=yp(eo.bind(null,t,nn,xr),r);break}eo(t,nn,xr);break;case 5:eo(t,nn,xr);break;default:throw Error(H(329))}}}return an(t,ot()),t.callbackNode===n?zx.bind(null,t):null}function Lp(t,e){var n=Ja;return t.current.memoizedState.isDehydrated&&(po(t,e).flags|=256),t=ih(t,e),t!==2&&(e=nn,nn=n,e!==null&&jp(e)),t}function jp(t){nn===null?nn=t:nn.push.apply(nn,t)}function RA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Jn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~yg,e&=~Jh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),r=1<<n;t[n]=-1,e&=~r}}function Cv(t){if(Se&6)throw Error(H(327));_s();var e=zc(t,0);if(!(e&1))return an(t,ot()),null;var n=ih(t,e);if(t.tag!==0&&n===2){var r=up(t);r!==0&&(e=r,n=Lp(t,r))}if(n===1)throw n=Sl,po(t,0),si(t,e),an(t,ot()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,eo(t,nn,xr),an(t,ot()),null}function wg(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(Rs=ot()+500,Gh&&Oi())}}function Eo(t){li!==null&&li.tag===0&&!(Se&6)&&_s();var e=Se;Se|=1;var n=In.transition,r=Re;try{if(In.transition=null,Re=1,t)return t()}finally{Re=r,In.transition=n,Se=e,!(Se&6)&&Oi()}}function bg(){hn=us.current,Be(us)}function po(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sA(n)),ct!==null)for(n=ct.return;n!==null;){var r=n;switch(eg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hc();break;case 3:As(),Be(on),Be(Gt),ug();break;case 5:lg(r);break;case 4:As();break;case 13:Be(Qe);break;case 19:Be(Qe);break;case 10:ig(r.type._context);break;case 22:case 23:bg()}n=n.return}if(xt=t,ct=t=vi(t.current,null),Rt=hn=e,gt=0,Sl=null,yg=Jh=xo=0,nn=Ja=null,lo!==null){for(e=0;e<lo.length;e++)if(n=lo[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}lo=null}return t}function Ux(t,e){do{var n=ct;try{if(rg(),vc.current=eh,Zc){for(var r=Ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zc=!1}if(_o=0,_t=pt=Ye=null,Xa=!1,xl=0,gg.current=null,n===null||n.return===null){gt=1,Sl=e,ct=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=pv(s);if(g!==null){g.flags&=-257,mv(g,s,a,o,e),g.mode&1&&fv(o,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var b=new Set;b.add(l),e.updateQueue=b}else v.add(l);break e}else{if(!(e&1)){fv(o,c,e),_g();break e}l=Error(H(426))}}else if(He&&a.mode&1){var S=pv(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),mv(S,s,a,o,e),tg(ks(l,a));break e}}o=l=ks(l,a),gt!==4&&(gt=2),Ja===null?Ja=[o]:Ja.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var _=Tx(o,l,e);av(o,_);break e;case 1:a=l;var w=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(gi===null||!gi.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var k=Sx(o,a,e);av(o,k);break e}}o=o.return}while(o!==null)}qx(n)}catch(M){e=M,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(!0)}function Bx(){var t=th.current;return th.current=eh,t===null?eh:t}function _g(){(gt===0||gt===3||gt===2)&&(gt=4),xt===null||!(xo&268435455)&&!(Jh&268435455)||si(xt,Rt)}function ih(t,e){var n=Se;Se|=2;var r=Bx();(xt!==t||Rt!==e)&&(xr=null,po(t,e));do try{IA();break}catch(i){Ux(t,i)}while(!0);if(rg(),Se=n,th.current=r,ct!==null)throw Error(H(261));return xt=null,Rt=0,gt}function IA(){for(;ct!==null;)$x(ct)}function DA(){for(;ct!==null&&!rC();)$x(ct)}function $x(t){var e=Wx(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?qx(t):ct=e,gg.current=null}function qx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SA(n,e),n!==null){n.flags&=32767,ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gt=6,ct=null;return}}else if(n=TA(n,e,hn),n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);gt===0&&(gt=5)}function eo(t,e,n){var r=Re,i=In.transition;try{In.transition=null,Re=1,OA(t,e,n,r)}finally{In.transition=i,Re=r}return null}function OA(t,e,n,r){do _s();while(li!==null);if(Se&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(fC(t,o),t===xt&&(ct=xt=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wu||(Wu=!0,Kx(Fc,function(){return _s(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=In.transition,In.transition=null;var s=Re;Re=1;var a=Se;Se|=4,gg.current=null,CA(t,n),jx(n,t),ZC(mp),Uc=!!pp,mp=pp=null,t.current=n,AA(n),iC(),Se=a,Re=s,In.transition=o}else t.current=n;if(Wu&&(Wu=!1,li=t,rh=i),o=t.pendingLanes,o===0&&(gi=null),aC(n.stateNode),an(t,ot()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nh)throw nh=!1,t=Vp,Vp=null,t;return rh&1&&t.tag!==0&&_s(),o=t.pendingLanes,o&1?t===Mp?Za++:(Za=0,Mp=t):Za=0,Oi(),null}function _s(){if(li!==null){var t=T_(rh),e=In.transition,n=Re;try{if(In.transition=null,Re=16>t?16:t,li===null)var r=!1;else{if(t=li,li=null,rh=0,Se&6)throw Error(H(331));var i=Se;for(Se|=4,X=t.current;X!==null;){var o=X,s=o.child;if(X.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(X=c;X!==null;){var h=X;switch(h.tag){case 0:case 11:case 15:Ya(8,h,o)}var d=h.child;if(d!==null)d.return=h,X=d;else for(;X!==null;){h=X;var f=h.sibling,g=h.return;if(Vx(h),h===c){X=null;break}if(f!==null){f.return=g,X=f;break}X=g}}}var v=o.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}X=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,X=s;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ya(9,o,o.return)}var _=o.sibling;if(_!==null){_.return=o.return,X=_;break e}X=o.return}}var w=t.current;for(X=w;X!==null;){s=X;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,X=x;else e:for(s=w;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yh(9,a)}}catch(M){tt(a,a.return,M)}if(a===s){X=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,X=k;break e}X=a.return}}if(Se=i,Oi(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot($h,t)}catch{}r=!0}return r}finally{Re=n,In.transition=e}}return!1}function Av(t,e,n){e=ks(n,e),e=Tx(t,e,1),t=mi(t,e,1),e=Jt(),t!==null&&(Wl(t,1,e),an(t,e))}function tt(t,e,n){if(t.tag===3)Av(t,t,n);else for(;e!==null;){if(e.tag===3){Av(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r))){t=ks(n,t),t=Sx(e,t,1),e=mi(e,t,1),t=Jt(),e!==null&&(Wl(e,1,t),an(e,t));break}}e=e.return}}function NA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,xt===t&&(Rt&n)===n&&(gt===4||gt===3&&(Rt&130023424)===Rt&&500>ot()-vg?po(t,0):yg|=n),an(t,e)}function Hx(t,e){e===0&&(t.mode&1?(e=Mu,Mu<<=1,!(Mu&130023424)&&(Mu=4194304)):e=1);var n=Jt();t=jr(t,e),t!==null&&(Wl(t,e,n),an(t,n))}function VA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hx(t,n)}function MA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),Hx(t,n)}var Wx;Wx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,EA(t,e,n);rn=!!(t.flags&131072)}else rn=!1,He&&e.flags&1048576&&X_(e,Gc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bc(t,e),t=e.pendingProps;var i=Ss(e,Gt.current);bs(e,n),i=hg(null,e,r,t,i,n);var o=dg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(o=!0,Wc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sg(e),i.updater=Xh,e.stateNode=i,i._reactInternals=e,Tp(e,r,t,n),e=Cp(null,e,r,!0,o,n)):(e.tag=0,He&&o&&Zm(e),Yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jA(r),t=Bn(r,t),i){case 0:e=Pp(null,e,r,t,n);break e;case 1:e=vv(null,e,r,t,n);break e;case 11:e=gv(null,e,r,t,n);break e;case 14:e=yv(null,e,r,Bn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),Pp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),vv(t,e,r,i,n);case 3:e:{if(kx(e),t===null)throw Error(H(387));r=e.pendingProps,o=e.memoizedState,i=o.element,nx(t,e),Yc(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ks(Error(H(423)),e),e=wv(t,e,r,n,i);break e}else if(r!==i){i=ks(Error(H(424)),e),e=wv(t,e,r,n,i);break e}else for(fn=pi(e.stateNode.containerInfo.firstChild),mn=e,He=!0,Hn=null,n=ex(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),r===i){e=Fr(t,e,n);break e}Yt(t,e,r,n)}e=e.child}return e;case 5:return rx(e),t===null&&_p(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,gp(r,i)?s=null:o!==null&&gp(r,o)&&(e.flags|=32),Ax(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&_p(e),null;case 13:return Rx(t,e,n);case 4:return ag(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Cs(e,null,r,n):Yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),gv(t,e,r,i,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Le(Qc,r._currentValue),r._currentValue=s,o!==null)if(Jn(o.value,s)){if(o.children===i.children&&!on.current){e=Fr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ar(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xp(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),xp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bs(e,n),i=On(i),r=r(i),e.flags|=1,Yt(t,e,r,n),e.child;case 14:return r=e.type,i=Bn(r,e.pendingProps),i=Bn(r.type,i),yv(t,e,r,i,n);case 15:return Px(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),bc(t,e),e.tag=1,sn(r)?(t=!0,Wc(e)):t=!1,bs(e,n),Ex(e,r,i),Tp(e,r,i,n),Cp(null,e,r,!0,t,n);case 19:return Ix(t,e,n);case 22:return Cx(t,e,n)}throw Error(H(156,e.tag))};function Kx(t,e){return b_(t,e)}function LA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,r){return new LA(t,e,n,r)}function xg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jA(t){if(typeof t=="function")return xg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Um)return 11;if(t===Bm)return 14}return 2}function vi(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ec(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")xg(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Zo:return mo(n.children,i,o,e);case zm:s=8,i|=8;break;case Gf:return t=Rn(12,n,e,i|2),t.elementType=Gf,t.lanes=o,t;case Qf:return t=Rn(13,n,e,i),t.elementType=Qf,t.lanes=o,t;case Xf:return t=Rn(19,n,e,i),t.elementType=Xf,t.lanes=o,t;case r_:return Zh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t_:s=10;break e;case n_:s=9;break e;case Um:s=11;break e;case Bm:s=14;break e;case ri:s=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Rn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function mo(t,e,n,r){return t=Rn(7,t,r,e),t.lanes=n,t}function Zh(t,e,n,r){return t=Rn(22,t,r,e),t.elementType=r_,t.lanes=n,t.stateNode={isHidden:!1},t}function ff(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function pf(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kd(0),this.expirationTimes=Kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Eg(t,e,n,r,i,o,s,a,l){return t=new FA(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Rn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sg(o),t}function zA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gx(t){if(!t)return Ei;t=t._reactInternals;e:{if(Io(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(sn(n))return G_(t,n,e)}return e}function Qx(t,e,n,r,i,o,s,a,l){return t=Eg(n,r,!0,t,i,o,s,a,l),t.context=Gx(null),n=t.current,r=Jt(),i=yi(n),o=Ar(r,i),o.callback=e??null,mi(n,o,i),t.current.lanes=i,Wl(t,i,r),an(t,r),t}function ed(t,e,n,r){var i=e.current,o=Jt(),s=yi(i);return n=Gx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mi(i,e,s),t!==null&&(Yn(t,i,s,o),yc(t,i,s)),s}function oh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tg(t,e){kv(t,e),(t=t.alternate)&&kv(t,e)}function UA(){return null}var Xx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sg(t){this._internalRoot=t}td.prototype.render=Sg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));ed(t,e,null,null)};td.prototype.unmount=Sg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Eo(function(){ed(null,t,null,null)}),e[Lr]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=C_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<oi.length&&e!==0&&e<oi[n].priority;n++);oi.splice(n,0,t),n===0&&k_(t)}};function Pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rv(){}function BA(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=oh(s);o.call(c)}}var s=Qx(e,r,t,0,null,!1,!1,"",Rv);return t._reactRootContainer=s,t[Lr]=s.current,yl(t.nodeType===8?t.parentNode:t),Eo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=oh(l);a.call(c)}}var l=Eg(t,0,!1,null,null,!1,!1,"",Rv);return t._reactRootContainer=l,t[Lr]=l.current,yl(t.nodeType===8?t.parentNode:t),Eo(function(){ed(e,l,n,r)}),l}function rd(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=oh(s);a.call(l)}}ed(e,s,t,i)}else s=BA(n,e,t,i,r);return oh(s)}S_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(Hm(e,n|1),an(e,ot()),!(Se&6)&&(Rs=ot()+500,Oi()))}break;case 13:Eo(function(){var r=jr(t,1);if(r!==null){var i=Jt();Yn(r,t,1,i)}}),Tg(t,1)}};Wm=function(t){if(t.tag===13){var e=jr(t,134217728);if(e!==null){var n=Jt();Yn(e,t,134217728,n)}Tg(t,134217728)}};P_=function(t){if(t.tag===13){var e=yi(t),n=jr(t,e);if(n!==null){var r=Jt();Yn(n,t,e,r)}Tg(t,e)}};C_=function(){return Re};A_=function(t,e){var n=Re;try{return Re=t,e()}finally{Re=n}};sp=function(t,e,n){switch(e){case"input":if(Zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kh(r);if(!i)throw Error(H(90));o_(r),Zf(r,i)}}}break;case"textarea":a_(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};p_=wg;m_=Eo;var $A={usingClientEntryPoint:!1,Events:[Gl,rs,Kh,d_,f_,wg]},Ta={findFiberByHostInstance:ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qA={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=v_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||UA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{$h=Ku.inject(qA),ar=Ku}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$A;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pg(e))throw Error(H(200));return zA(t,e,null,n)};bn.createRoot=function(t,e){if(!Pg(t))throw Error(H(299));var n=!1,r="",i=Xx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Eg(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,yl(t.nodeType===8?t.parentNode:t),new Sg(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=v_(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Eo(t)};bn.hydrate=function(t,e,n){if(!nd(e))throw Error(H(200));return rd(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Pg(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Xx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Qx(e,null,t,1,n??null,i,!1,o,s),t[Lr]=e.current,yl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new td(e)};bn.render=function(t,e,n){if(!nd(e))throw Error(H(200));return rd(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!nd(t))throw Error(H(40));return t._reactRootContainer?(Eo(function(){rd(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};bn.unstable_batchedUpdates=wg;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nd(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return rd(t,e,n,!1,r)};bn.version="18.3.1-next-f1338f8080-20240426";function Yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yx)}catch(t){console.error(t)}}Yx(),Yb.exports=bn;var Cg=Yb.exports;const HA=Fb(Cg),WA=jb({__proto__:null,default:HA},[Cg]);var Jx,Iv=Cg;Jx=Iv.createRoot,Iv.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ge(){return Ge=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ge.apply(this,arguments)}var ut;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ut||(ut={}));const Dv="popstate";function KA(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Pl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:To(i)}return QA(e,n,null,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Is(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GA(){return Math.random().toString(36).substr(2,8)}function Ov(t,e){return{usr:t.state,key:t.key,idx:e}}function Pl(t,e,n,r){return n===void 0&&(n=null),Ge({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ni(e):e,{state:n,key:e&&e.key||r||GA()})}function To(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ni(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ut.Pop,l=null,c=h();c==null&&(c=0,s.replaceState(Ge({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function d(){a=ut.Pop;let S=h(),_=S==null?null:S-c;c=S,l&&l({action:a,location:b.location,delta:_})}function f(S,_){a=ut.Push;let w=Pl(b.location,S,_);c=h()+1;let x=Ov(w,c),k=b.createHref(w);try{s.pushState(x,"",k)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(k)}o&&l&&l({action:a,location:b.location,delta:1})}function g(S,_){a=ut.Replace;let w=Pl(b.location,S,_);c=h();let x=Ov(w,c),k=b.createHref(w);s.replaceState(x,"",k),o&&l&&l({action:a,location:b.location,delta:0})}function v(S){let _=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof S=="string"?S:To(S);return w=w.replace(/ $/,"%20"),fe(_,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,_)}let b={get action(){return a},get location(){return t(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Dv,d),l=S,()=>{i.removeEventListener(Dv,d),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let _=v(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:f,replace:g,go(S){return s.go(S)}};return b}var Oe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oe||(Oe={}));const XA=new Set(["lazy","caseSensitive","path","id","index","children"]);function YA(t){return t.index===!0}function Cl(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,o)=>{let s=[...n,String(o)],a=typeof i.id=="string"?i.id:s.join("-");if(fe(i.index!==!0||!i.children,"Cannot specify children on an index route"),fe(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),YA(i)){let l=Ge({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ge({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Cl(i.children,e,s,r)),l}})}function so(t,e,n){return n===void 0&&(n="/"),Tc(t,e,n,!1)}function Tc(t,e,n,r){let i=typeof e=="string"?Ni(e):e,o=zr(i.pathname||"/",n);if(o==null)return null;let s=Zx(t);ZA(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=ck(o);a=lk(s[l],c,r)}return a}function JA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Zx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=kr([r,l.relativePath]),h=n.concat(l);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Zx(o.children,e,h,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:sk(c,o.index),routesMeta:h})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of eE(o.path))i(o,s,l)}),e}function eE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=eE(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ZA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ak(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ek=/^:[\w-]+$/,tk=3,nk=2,rk=1,ik=10,ok=-2,Nv=t=>t==="*";function sk(t,e){let n=t.split("/"),r=n.length;return n.some(Nv)&&(r+=ok),e&&(r+=nk),n.filter(i=>!Nv(i)).reduce((i,o)=>i+(ek.test(o)?tk:o===""?rk:ik),r)}function ak(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lk(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=o==="/"?e:e.slice(o.length)||"/",d=sh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),f=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=sh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:kr([o,d.pathname]),pathnameBase:fk(kr([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=kr([o,d.pathnameBase]))}return s}function sh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:f,isOptional:g}=h;if(f==="*"){let b=a[d]||"";s=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function uk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Is(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ck(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Is(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ni(t):t;return{pathname:n?n.startsWith("/")?n:dk(n,e):e,search:pk(r),hash:mk(i)}}function dk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ag(t,e){let n=tE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ni(t):(i=Ge({},t),fe(!i.pathname||!i.pathname.includes("?"),mf("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),mf("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),mf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=e.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=hk(i,a),c=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const kr=t=>t.join("/").replace(/\/\/+/g,"/"),fk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class ah{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function id(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nE=["post","put","patch","delete"],gk=new Set(nE),yk=["get",...nE],vk=new Set(yk),wk=new Set([301,302,303,307,308]),bk=new Set([307,308]),gf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_k={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Sa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xk=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),rE="remix-router-transitions";function Ek(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;fe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let D=t.detectErrorBoundary;i=O=>({hasErrorBoundary:D(O)})}else i=xk;let o={},s=Cl(t.routes,i,void 0,o),a,l=t.basename||"/",c=t.unstable_dataStrategy||kk,h=t.unstable_patchRoutesOnNavigation,d=Ge({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),f=null,g=new Set,v=1e3,b=new Set,S=null,_=null,w=null,x=t.hydrationData!=null,k=so(s,t.history.location,l),M=null;if(k==null&&!h){let D=Xt(404,{pathname:t.history.location.pathname}),{matches:O,route:F}=$v(s);k=O,M={[F.id]:D}}k&&!t.hydrationData&&st(k,s,t.history.location.pathname).active&&(k=null);let j;if(k)if(k.some(D=>D.route.lazy))j=!1;else if(!k.some(D=>D.route.loader))j=!0;else if(d.v7_partialHydration){let D=t.hydrationData?t.hydrationData.loaderData:null,O=t.hydrationData?t.hydrationData.errors:null,F=U=>U.route.loader?typeof U.route.loader=="function"&&U.route.loader.hydrate===!0?!1:D&&D[U.route.id]!==void 0||O&&O[U.route.id]!==void 0:!0;if(O){let U=k.findIndex(Q=>O[Q.route.id]!==void 0);j=k.slice(0,U+1).every(F)}else j=k.every(F)}else j=t.hydrationData!=null;else if(j=!1,k=[],d.v7_partialHydration){let D=st(null,s,t.history.location.pathname);D.active&&D.matches&&(k=D.matches)}let P,m={historyAction:t.history.action,location:t.history.location,matches:k,initialized:j,navigation:gf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||M,fetchers:new Map,blockers:new Map},T=ut.Pop,A=!1,I,V=!1,R=new Map,de=null,Ke=!1,ht=!1,xe=[],B=new Set,G=new Map,re=0,Pe=-1,be=new Map,ke=new Set,Nt=new Map,Qt=new Map,dt=new Set,Et=new Map,gr=new Map,Dd=new Map,yr;function Vo(){if(f=t.history.listen(D=>{let{action:O,location:F,delta:U}=D;if(yr){yr(),yr=void 0;return}Is(gr.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Q=jo({currentLocation:m.location,nextLocation:F,historyAction:O});if(Q&&U!=null){let ne=new Promise(ae=>{yr=ae});t.history.go(U*-1),nr(Q,{state:"blocked",location:F,proceed(){nr(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),ne.then(()=>t.history.go(U))},reset(){let ae=new Map(m.blockers);ae.set(Q,Sa),ft({blockers:ae})}});return}return vr(O,F)}),n){qk(e,R);let D=()=>Hk(e,R);e.addEventListener("pagehide",D),de=()=>e.removeEventListener("pagehide",D)}return m.initialized||vr(ut.Pop,m.location,{initialHydration:!0}),P}function ea(){f&&f(),de&&de(),g.clear(),I&&I.abort(),m.fetchers.forEach((D,O)=>Bi(O)),m.blockers.forEach((D,O)=>aa(O))}function ta(D){return g.add(D),()=>g.delete(D)}function ft(D,O){O===void 0&&(O={}),m=Ge({},m,D);let F=[],U=[];d.v7_fetcherPersist&&m.fetchers.forEach((Q,ne)=>{Q.state==="idle"&&(dt.has(ne)?U.push(ne):F.push(ne))}),[...g].forEach(Q=>Q(m,{deletedFetchers:U,unstable_viewTransitionOpts:O.viewTransitionOpts,unstable_flushSync:O.flushSync===!0})),d.v7_fetcherPersist&&(F.forEach(Q=>m.fetchers.delete(Q)),U.forEach(Q=>Bi(Q)))}function tr(D,O,F){var U,Q;let{flushSync:ne}=F===void 0?{}:F,ae=m.actionData!=null&&m.navigation.formMethod!=null&&qn(m.navigation.formMethod)&&m.navigation.state==="loading"&&((U=D.state)==null?void 0:U._isRedirect)!==!0,W;O.actionData?Object.keys(O.actionData).length>0?W=O.actionData:W=null:ae?W=m.actionData:W=null;let te=O.loaderData?Uv(m.loaderData,O.loaderData,O.matches||[],O.errors):m.loaderData,Y=m.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((Ee,De)=>Y.set(De,Sa)));let Z=A===!0||m.navigation.formMethod!=null&&qn(m.navigation.formMethod)&&((Q=D.state)==null?void 0:Q._isRedirect)!==!0;a&&(s=a,a=void 0),Ke||T===ut.Pop||(T===ut.Push?t.history.push(D,D.state):T===ut.Replace&&t.history.replace(D,D.state));let we;if(T===ut.Pop){let Ee=R.get(m.location.pathname);Ee&&Ee.has(D.pathname)?we={currentLocation:m.location,nextLocation:D}:R.has(D.pathname)&&(we={currentLocation:D,nextLocation:m.location})}else if(V){let Ee=R.get(m.location.pathname);Ee?Ee.add(D.pathname):(Ee=new Set([D.pathname]),R.set(m.location.pathname,Ee)),we={currentLocation:m.location,nextLocation:D}}ft(Ge({},O,{actionData:W,loaderData:te,historyAction:T,location:D,initialized:!0,navigation:gf,revalidation:"idle",restoreScrollPosition:ua(D,O.matches||m.matches),preventScrollReset:Z,blockers:Y}),{viewTransitionOpts:we,flushSync:ne===!0}),T=ut.Pop,A=!1,V=!1,Ke=!1,ht=!1,xe=[]}async function na(D,O){if(typeof D=="number"){t.history.go(D);return}let F=Fp(m.location,m.matches,l,d.v7_prependBasename,D,d.v7_relativeSplatPath,O==null?void 0:O.fromRouteId,O==null?void 0:O.relative),{path:U,submission:Q,error:ne}=Vv(d.v7_normalizeFormMethod,!1,F,O),ae=m.location,W=Pl(m.location,U,O&&O.state);W=Ge({},W,t.history.encodeLocation(W));let te=O&&O.replace!=null?O.replace:void 0,Y=ut.Push;te===!0?Y=ut.Replace:te===!1||Q!=null&&qn(Q.formMethod)&&Q.formAction===m.location.pathname+m.location.search&&(Y=ut.Replace);let Z=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,we=(O&&O.unstable_flushSync)===!0,Ee=jo({currentLocation:ae,nextLocation:W,historyAction:Y});if(Ee){nr(Ee,{state:"blocked",location:W,proceed(){nr(Ee,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),na(D,O)},reset(){let De=new Map(m.blockers);De.set(Ee,Sa),ft({blockers:De})}});return}return await vr(Y,W,{submission:Q,pendingError:ne,preventScrollReset:Z,replace:O&&O.replace,enableViewTransition:O&&O.unstable_viewTransition,flushSync:we})}function Od(){if(Mo(),ft({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){vr(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}vr(T||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation,enableViewTransition:V===!0})}}async function vr(D,O,F){I&&I.abort(),I=null,T=D,Ke=(F&&F.startUninterruptedRevalidation)===!0,qi(m.location,m.matches),A=(F&&F.preventScrollReset)===!0,V=(F&&F.enableViewTransition)===!0;let U=a||s,Q=F&&F.overrideNavigation,ne=so(U,O,l),ae=(F&&F.flushSync)===!0,W=st(ne,U,O.pathname);if(W.active&&W.matches&&(ne=W.matches),!ne){let{error:ye,notFoundMatches:at,route:je}=$i(O.pathname);tr(O,{matches:at,loaderData:{},errors:{[je.id]:ye}},{flushSync:ae});return}if(m.initialized&&!ht&&Vk(m.location,O)&&!(F&&F.submission&&qn(F.submission.formMethod))){tr(O,{matches:ne},{flushSync:ae});return}I=new AbortController;let te=Ho(t.history,O,I.signal,F&&F.submission),Y;if(F&&F.pendingError)Y=[cs(ne).route.id,{type:Oe.error,error:F.pendingError}];else if(F&&F.submission&&qn(F.submission.formMethod)){let ye=await du(te,O,F.submission,ne,W.active,{replace:F.replace,flushSync:ae});if(ye.shortCircuited)return;if(ye.pendingActionResult){let[at,je]=ye.pendingActionResult;if(dn(je)&&id(je.error)&&je.error.status===404){I=null,tr(O,{matches:ye.matches,loaderData:{},errors:{[at]:je.error}});return}}ne=ye.matches||ne,Y=ye.pendingActionResult,Q=yf(O,F.submission),ae=!1,W.active=!1,te=Ho(t.history,te.url,te.signal)}let{shortCircuited:Z,matches:we,loaderData:Ee,errors:De}=await ra(te,O,ne,W.active,Q,F&&F.submission,F&&F.fetcherSubmission,F&&F.replace,F&&F.initialHydration===!0,ae,Y);Z||(I=null,tr(O,Ge({matches:we||ne},Bv(Y),{loaderData:Ee,errors:De})))}async function du(D,O,F,U,Q,ne){ne===void 0&&(ne={}),Mo();let ae=Bk(O,F);if(ft({navigation:ae},{flushSync:ne.flushSync===!0}),Q){let Y=await Hi(U,O.pathname,D.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let{boundaryId:Z,error:we}=En(O.pathname,Y);return{matches:Y.partialMatches,pendingActionResult:[Z,{type:Oe.error,error:we}]}}else if(Y.matches)U=Y.matches;else{let{notFoundMatches:Z,error:we,route:Ee}=$i(O.pathname);return{matches:Z,pendingActionResult:[Ee.id,{type:Oe.error,error:we}]}}}let W,te=Ma(U,O);if(!te.route.action&&!te.route.lazy)W={type:Oe.error,error:Xt(405,{method:D.method,pathname:O.pathname,routeId:te.route.id})};else if(W=(await nt("action",m,D,[te],U,null))[te.route.id],D.signal.aborted)return{shortCircuited:!0};if(co(W)){let Y;return ne&&ne.replace!=null?Y=ne.replace:Y=jv(W.response.headers.get("Location"),new URL(D.url),l)===m.location.pathname+m.location.search,await $e(D,W,!0,{submission:F,replace:Y}),{shortCircuited:!0}}if(ui(W))throw Xt(400,{type:"defer-action"});if(dn(W)){let Y=cs(U,te.route.id);return(ne&&ne.replace)!==!0&&(T=ut.Push),{matches:U,pendingActionResult:[Y.route.id,W]}}return{matches:U,pendingActionResult:[te.route.id,W]}}async function ra(D,O,F,U,Q,ne,ae,W,te,Y,Z){let we=Q||yf(O,ne),Ee=ne||ae||Hv(we),De=!Ke&&(!d.v7_partialHydration||!te);if(U){if(De){let Me=ia(Z);ft(Ge({navigation:we},Me!==void 0?{actionData:Me}:{}),{flushSync:Y})}let ue=await Hi(F,O.pathname,D.signal);if(ue.type==="aborted")return{shortCircuited:!0};if(ue.type==="error"){let{boundaryId:Me,error:Mt}=En(O.pathname,ue);return{matches:ue.partialMatches,loaderData:{},errors:{[Me]:Mt}}}else if(ue.matches)F=ue.matches;else{let{error:Me,notFoundMatches:Mt,route:Fe}=$i(O.pathname);return{matches:Mt,loaderData:{},errors:{[Fe.id]:Me}}}}let ye=a||s,[at,je]=Mv(t.history,m,F,Ee,O,d.v7_partialHydration&&te===!0,d.v7_skipActionErrorRevalidation,ht,xe,B,dt,Nt,ke,ye,l,Z);if(Fo(ue=>!(F&&F.some(Me=>Me.route.id===ue))||at&&at.some(Me=>Me.route.id===ue)),Pe=++re,at.length===0&&je.length===0){let ue=gu();return tr(O,Ge({matches:F,loaderData:{},errors:Z&&dn(Z[1])?{[Z[0]]:Z[1].error}:null},Bv(Z),ue?{fetchers:new Map(m.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(De){let ue={};if(!U){ue.navigation=we;let Me=ia(Z);Me!==void 0&&(ue.actionData=Me)}je.length>0&&(ue.fetchers=Nd(je)),ft(ue,{flushSync:Y})}je.forEach(ue=>{G.has(ue.key)&&xn(ue.key),ue.controller&&G.set(ue.key,ue.controller)});let Qr=()=>je.forEach(ue=>xn(ue.key));I&&I.signal.addEventListener("abort",Qr);let{loaderResults:ln,fetcherResults:Tn}=await Ui(m,F,at,je,D);if(D.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",Qr),je.forEach(ue=>G.delete(ue.key));let Vt=Gu(ln);if(Vt)return await $e(D,Vt.result,!0,{replace:W}),{shortCircuited:!0};if(Vt=Gu(Tn),Vt)return ke.add(Vt.key),await $e(D,Vt.result,!0,{replace:W}),{shortCircuited:!0};let{loaderData:Xr,errors:Ln}=zv(m,F,at,ln,Z,je,Tn,Et);Et.forEach((ue,Me)=>{ue.subscribe(Mt=>{(Mt||ue.done)&&Et.delete(Me)})}),d.v7_partialHydration&&te&&m.errors&&Object.entries(m.errors).filter(ue=>{let[Me]=ue;return!at.some(Mt=>Mt.route.id===Me)}).forEach(ue=>{let[Me,Mt]=ue;Ln=Object.assign(Ln||{},{[Me]:Mt})});let Ki=gu(),Gi=Lo(Pe),Qi=Ki||Gi||je.length>0;return Ge({matches:F,loaderData:Xr,errors:Ln},Qi?{fetchers:new Map(m.fetchers)}:{})}function ia(D){if(D&&!dn(D[1]))return{[D[0]]:D[1].data};if(m.actionData)return Object.keys(m.actionData).length===0?null:m.actionData}function Nd(D){return D.forEach(O=>{let F=m.fetchers.get(O.key),U=Pa(void 0,F?F.data:void 0);m.fetchers.set(O.key,U)}),new Map(m.fetchers)}function oa(D,O,F,U){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");G.has(D)&&xn(D);let Q=(U&&U.unstable_flushSync)===!0,ne=a||s,ae=Fp(m.location,m.matches,l,d.v7_prependBasename,F,d.v7_relativeSplatPath,O,U==null?void 0:U.relative),W=so(ne,ae,l),te=st(W,ne,ae);if(te.active&&te.matches&&(W=te.matches),!W){Mn(D,O,Xt(404,{pathname:ae}),{flushSync:Q});return}let{path:Y,submission:Z,error:we}=Vv(d.v7_normalizeFormMethod,!0,ae,U);if(we){Mn(D,O,we,{flushSync:Q});return}let Ee=Ma(W,Y);if(A=(U&&U.preventScrollReset)===!0,Z&&qn(Z.formMethod)){sa(D,O,Y,Ee,W,te.active,Q,Z);return}Nt.set(D,{routeId:O,path:Y}),fu(D,O,Y,Ee,W,te.active,Q,Z)}async function sa(D,O,F,U,Q,ne,ae,W){Mo(),Nt.delete(D);function te(Fe){if(!Fe.route.action&&!Fe.route.lazy){let jn=Xt(405,{method:W.formMethod,pathname:F,routeId:O});return Mn(D,O,jn,{flushSync:ae}),!0}return!1}if(!ne&&te(U))return;let Y=m.fetchers.get(D);Vn(D,$k(W,Y),{flushSync:ae});let Z=new AbortController,we=Ho(t.history,F,Z.signal,W);if(ne){let Fe=await Hi(Q,F,we.signal);if(Fe.type==="aborted")return;if(Fe.type==="error"){let{error:jn}=En(F,Fe);Mn(D,O,jn,{flushSync:ae});return}else if(Fe.matches){if(Q=Fe.matches,U=Ma(Q,F),te(U))return}else{Mn(D,O,Xt(404,{pathname:F}),{flushSync:ae});return}}G.set(D,Z);let Ee=re,ye=(await nt("action",m,we,[U],Q,D))[U.route.id];if(we.signal.aborted){G.get(D)===Z&&G.delete(D);return}if(d.v7_fetcherPersist&&dt.has(D)){if(co(ye)||dn(ye)){Vn(D,ti(void 0));return}}else{if(co(ye))if(G.delete(D),Pe>Ee){Vn(D,ti(void 0));return}else return ke.add(D),Vn(D,Pa(W)),$e(we,ye,!1,{fetcherSubmission:W});if(dn(ye)){Mn(D,O,ye.error);return}}if(ui(ye))throw Xt(400,{type:"defer-action"});let at=m.navigation.location||m.location,je=Ho(t.history,at,Z.signal),Qr=a||s,ln=m.navigation.state!=="idle"?so(Qr,m.navigation.location,l):m.matches;fe(ln,"Didn't find any matches after fetcher action");let Tn=++re;be.set(D,Tn);let Vt=Pa(W,ye.data);m.fetchers.set(D,Vt);let[Xr,Ln]=Mv(t.history,m,ln,W,at,!1,d.v7_skipActionErrorRevalidation,ht,xe,B,dt,Nt,ke,Qr,l,[U.route.id,ye]);Ln.filter(Fe=>Fe.key!==D).forEach(Fe=>{let jn=Fe.key,vu=m.fetchers.get(jn),wu=Pa(void 0,vu?vu.data:void 0);m.fetchers.set(jn,wu),G.has(jn)&&xn(jn),Fe.controller&&G.set(jn,Fe.controller)}),ft({fetchers:new Map(m.fetchers)});let Ki=()=>Ln.forEach(Fe=>xn(Fe.key));Z.signal.addEventListener("abort",Ki);let{loaderResults:Gi,fetcherResults:Qi}=await Ui(m,ln,Xr,Ln,je);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",Ki),be.delete(D),G.delete(D),Ln.forEach(Fe=>G.delete(Fe.key));let ue=Gu(Gi);if(ue)return $e(je,ue.result,!1);if(ue=Gu(Qi),ue)return ke.add(ue.key),$e(je,ue.result,!1);let{loaderData:Me,errors:Mt}=zv(m,ln,Xr,Gi,void 0,Ln,Qi,Et);if(m.fetchers.has(D)){let Fe=ti(ye.data);m.fetchers.set(D,Fe)}Lo(Tn),m.navigation.state==="loading"&&Tn>Pe?(fe(T,"Expected pending action"),I&&I.abort(),tr(m.navigation.location,{matches:ln,loaderData:Me,errors:Mt,fetchers:new Map(m.fetchers)})):(ft({errors:Mt,loaderData:Uv(m.loaderData,Me,ln,Mt),fetchers:new Map(m.fetchers)}),ht=!1)}async function fu(D,O,F,U,Q,ne,ae,W){let te=m.fetchers.get(D);Vn(D,Pa(W,te?te.data:void 0),{flushSync:ae});let Y=new AbortController,Z=Ho(t.history,F,Y.signal);if(ne){let ye=await Hi(Q,F,Z.signal);if(ye.type==="aborted")return;if(ye.type==="error"){let{error:at}=En(F,ye);Mn(D,O,at,{flushSync:ae});return}else if(ye.matches)Q=ye.matches,U=Ma(Q,F);else{Mn(D,O,Xt(404,{pathname:F}),{flushSync:ae});return}}G.set(D,Y);let we=re,De=(await nt("loader",m,Z,[U],Q,D))[U.route.id];if(ui(De)&&(De=await Ig(De,Z.signal,!0)||De),G.get(D)===Y&&G.delete(D),!Z.signal.aborted){if(dt.has(D)){Vn(D,ti(void 0));return}if(co(De))if(Pe>we){Vn(D,ti(void 0));return}else{ke.add(D),await $e(Z,De,!1);return}if(dn(De)){Mn(D,O,De.error);return}fe(!ui(De),"Unhandled fetcher deferred data"),Vn(D,ti(De.data))}}async function $e(D,O,F,U){let{submission:Q,fetcherSubmission:ne,replace:ae}=U===void 0?{}:U;O.response.headers.has("X-Remix-Revalidate")&&(ht=!0);let W=O.response.headers.get("Location");fe(W,"Expected a Location header on the redirect Response"),W=jv(W,new URL(D.url),l);let te=Pl(m.location,W,{_isRedirect:!0});if(n){let ye=!1;if(O.response.headers.has("X-Remix-Reload-Document"))ye=!0;else if(Rg.test(W)){const at=t.history.createURL(W);ye=at.origin!==e.location.origin||zr(at.pathname,l)==null}if(ye){ae?e.location.replace(W):e.location.assign(W);return}}I=null;let Y=ae===!0||O.response.headers.has("X-Remix-Replace")?ut.Replace:ut.Push,{formMethod:Z,formAction:we,formEncType:Ee}=m.navigation;!Q&&!ne&&Z&&we&&Ee&&(Q=Hv(m.navigation));let De=Q||ne;if(bk.has(O.response.status)&&De&&qn(De.formMethod))await vr(Y,te,{submission:Ge({},De,{formAction:W}),preventScrollReset:A,enableViewTransition:F?V:void 0});else{let ye=yf(te,Q);await vr(Y,te,{overrideNavigation:ye,fetcherSubmission:ne,preventScrollReset:A,enableViewTransition:F?V:void 0})}}async function nt(D,O,F,U,Q,ne){let ae,W={};try{ae=await Rk(c,D,O,F,U,Q,ne,o,i)}catch(te){return U.forEach(Y=>{W[Y.route.id]={type:Oe.error,error:te}}),W}for(let[te,Y]of Object.entries(ae))if(Lk(Y)){let Z=Y.result;W[te]={type:Oe.redirect,response:Ok(Z,F,te,Q,l,d.v7_relativeSplatPath)}}else W[te]=await Dk(Y);return W}async function Ui(D,O,F,U,Q){let ne=D.matches,ae=nt("loader",D,Q,F,O,null),W=Promise.all(U.map(async Z=>{if(Z.matches&&Z.match&&Z.controller){let Ee=(await nt("loader",D,Ho(t.history,Z.path,Z.controller.signal),[Z.match],Z.matches,Z.key))[Z.match.route.id];return{[Z.key]:Ee}}else return Promise.resolve({[Z.key]:{type:Oe.error,error:Xt(404,{pathname:Z.path})}})})),te=await ae,Y=(await W).reduce((Z,we)=>Object.assign(Z,we),{});return await Promise.all([zk(O,te,Q.signal,ne,D.loaderData),Uk(O,Y,U)]),{loaderResults:te,fetcherResults:Y}}function Mo(){ht=!0,xe.push(...Fo()),Nt.forEach((D,O)=>{G.has(O)&&(B.add(O),xn(O))})}function Vn(D,O,F){F===void 0&&(F={}),m.fetchers.set(D,O),ft({fetchers:new Map(m.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function Mn(D,O,F,U){U===void 0&&(U={});let Q=cs(m.matches,O);Bi(D),ft({errors:{[Q.route.id]:F},fetchers:new Map(m.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function Kr(D){return d.v7_fetcherPersist&&(Qt.set(D,(Qt.get(D)||0)+1),dt.has(D)&&dt.delete(D)),m.fetchers.get(D)||_k}function Bi(D){let O=m.fetchers.get(D);G.has(D)&&!(O&&O.state==="loading"&&be.has(D))&&xn(D),Nt.delete(D),be.delete(D),ke.delete(D),dt.delete(D),B.delete(D),m.fetchers.delete(D)}function pu(D){if(d.v7_fetcherPersist){let O=(Qt.get(D)||0)-1;O<=0?(Qt.delete(D),dt.add(D)):Qt.set(D,O)}else Bi(D);ft({fetchers:new Map(m.fetchers)})}function xn(D){let O=G.get(D);fe(O,"Expected fetch controller: "+D),O.abort(),G.delete(D)}function mu(D){for(let O of D){let F=Kr(O),U=ti(F.data);m.fetchers.set(O,U)}}function gu(){let D=[],O=!1;for(let F of ke){let U=m.fetchers.get(F);fe(U,"Expected fetcher: "+F),U.state==="loading"&&(ke.delete(F),D.push(F),O=!0)}return mu(D),O}function Lo(D){let O=[];for(let[F,U]of be)if(U<D){let Q=m.fetchers.get(F);fe(Q,"Expected fetcher: "+F),Q.state==="loading"&&(xn(F),be.delete(F),O.push(F))}return mu(O),O.length>0}function yu(D,O){let F=m.blockers.get(D)||Sa;return gr.get(D)!==O&&gr.set(D,O),F}function aa(D){m.blockers.delete(D),gr.delete(D)}function nr(D,O){let F=m.blockers.get(D)||Sa;fe(F.state==="unblocked"&&O.state==="blocked"||F.state==="blocked"&&O.state==="blocked"||F.state==="blocked"&&O.state==="proceeding"||F.state==="blocked"&&O.state==="unblocked"||F.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+F.state+" -> "+O.state);let U=new Map(m.blockers);U.set(D,O),ft({blockers:U})}function jo(D){let{currentLocation:O,nextLocation:F,historyAction:U}=D;if(gr.size===0)return;gr.size>1&&Is(!1,"A router only supports one blocker at a time");let Q=Array.from(gr.entries()),[ne,ae]=Q[Q.length-1],W=m.blockers.get(ne);if(!(W&&W.state==="proceeding")&&ae({currentLocation:O,nextLocation:F,historyAction:U}))return ne}function $i(D){let O=Xt(404,{pathname:D}),F=a||s,{matches:U,route:Q}=$v(F);return Fo(),{notFoundMatches:U,route:Q,error:O}}function En(D,O){return{boundaryId:cs(O.partialMatches).route.id,error:Xt(400,{type:"route-discovery",pathname:D,message:O.error!=null&&"message"in O.error?O.error:String(O.error)})}}function Fo(D){let O=[];return Et.forEach((F,U)=>{(!D||D(U))&&(F.cancel(),O.push(U),Et.delete(U))}),O}function zo(D,O,F){if(S=D,w=O,_=F||null,!x&&m.navigation===gf){x=!0;let U=ua(m.location,m.matches);U!=null&&ft({restoreScrollPosition:U})}return()=>{S=null,w=null,_=null}}function la(D,O){return _&&_(D,O.map(U=>JA(U,m.loaderData)))||D.key}function qi(D,O){if(S&&w){let F=la(D,O);S[F]=w()}}function ua(D,O){if(S){let F=la(D,O),U=S[F];if(typeof U=="number")return U}return null}function st(D,O,F){if(h){if(b.has(F))return{active:!1,matches:D};if(D){if(Object.keys(D[0].params).length>0)return{active:!0,matches:Tc(O,F,l,!0)}}else return{active:!0,matches:Tc(O,F,l,!0)||[]}}return{active:!1,matches:null}}async function Hi(D,O,F){let U=D;for(;;){let Q=a==null,ne=a||s;try{await Ck(h,O,U,ne,o,i,Dd,F)}catch(te){return{type:"error",error:te,partialMatches:U}}finally{Q&&(s=[...s])}if(F.aborted)return{type:"aborted"};let ae=so(ne,O,l);if(ae)return Gr(O,b),{type:"success",matches:ae};let W=Tc(ne,O,l,!0);if(!W||U.length===W.length&&U.every((te,Y)=>te.route.id===W[Y].route.id))return Gr(O,b),{type:"success",matches:null};U=W}}function Gr(D,O){if(O.size>=v){let F=O.values().next().value;O.delete(F)}O.add(D)}function Wi(D){o={},a=Cl(D,i,void 0,o)}function Vd(D,O){let F=a==null;oE(D,O,a||s,o,i),F&&(s=[...s],ft({}))}return P={get basename(){return l},get future(){return d},get state(){return m},get routes(){return s},get window(){return e},initialize:Vo,subscribe:ta,enableScrollRestoration:zo,navigate:na,fetch:oa,revalidate:Od,createHref:D=>t.history.createHref(D),encodeLocation:D=>t.history.encodeLocation(D),getFetcher:Kr,deleteFetcher:pu,dispose:ea,getBlocker:yu,deleteBlocker:aa,patchRoutes:Vd,_internalFetchControllers:G,_internalActiveDeferreds:Et,_internalSetRoutes:Wi},P}function Tk(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Fp(t,e,n,r,i,o,s,a){let l,c;if(s){l=[];for(let d of e)if(l.push(d),d.route.id===s){c=d;break}}else l=e,c=e[e.length-1];let h=kg(i||".",Ag(l,o),zr(t.pathname,n)||t.pathname,a==="path");return i==null&&(h.search=t.search,h.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Dg(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(h.pathname=h.pathname==="/"?n:kr([n,h.pathname])),To(h)}function Vv(t,e,n,r){if(!r||!Tk(r))return{path:n};if(r.formMethod&&!Fk(r.formMethod))return{path:n,error:Xt(405,{method:r.formMethod})};let i=()=>({path:n,error:Xt(400,{type:"invalid-body"})}),o=r.formMethod||"get",s=t?o.toUpperCase():o.toLowerCase(),a=sE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!qn(s))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((g,v)=>{let[b,S]=v;return""+g+b+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!qn(s))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}fe(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=zp(r.formData),c=r.formData;else if(r.body instanceof FormData)l=zp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=Fv(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=Fv(l)}catch{return i()}let h={formMethod:s,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(qn(h.formMethod))return{path:n,submission:h};let d=Ni(n);return e&&d.search&&Dg(d.search)&&l.append("index",""),d.search="?"+l,{path:To(d),submission:h}}function Sk(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Mv(t,e,n,r,i,o,s,a,l,c,h,d,f,g,v,b){let S=b?dn(b[1])?b[1].error:b[1].data:void 0,_=t.createURL(e.location),w=t.createURL(i),x=b&&dn(b[1])?b[0]:void 0,k=x?Sk(n,x):n,M=b?b[1].statusCode:void 0,j=s&&M&&M>=400,P=k.filter((T,A)=>{let{route:I}=T;if(I.lazy)return!0;if(I.loader==null)return!1;if(o)return typeof I.loader!="function"||I.loader.hydrate?!0:e.loaderData[I.id]===void 0&&(!e.errors||e.errors[I.id]===void 0);if(Pk(e.loaderData,e.matches[A],T)||l.some(de=>de===T.route.id))return!0;let V=e.matches[A],R=T;return Lv(T,Ge({currentUrl:_,currentParams:V.params,nextUrl:w,nextParams:R.params},r,{actionResult:S,actionStatus:M,defaultShouldRevalidate:j?!1:a||_.pathname+_.search===w.pathname+w.search||_.search!==w.search||iE(V,R)}))}),m=[];return d.forEach((T,A)=>{if(o||!n.some(Ke=>Ke.route.id===T.routeId)||h.has(A))return;let I=so(g,T.path,v);if(!I){m.push({key:A,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let V=e.fetchers.get(A),R=Ma(I,T.path),de=!1;f.has(A)?de=!1:c.has(A)?(c.delete(A),de=!0):V&&V.state!=="idle"&&V.data===void 0?de=a:de=Lv(R,Ge({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:S,actionStatus:M,defaultShouldRevalidate:j?!1:a})),de&&m.push({key:A,routeId:T.routeId,path:T.path,matches:I,match:R,controller:new AbortController})}),[P,m]}function Pk(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function iE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Lv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Ck(t,e,n,r,i,o,s,a){let l=[e,...n.map(c=>c.route.id)].join("-");try{let c=s.get(l);c||(c=t({path:e,matches:n,patch:(h,d)=>{a.aborted||oE(h,d,r,i,o)}}),s.set(l,c)),c&&Mk(c)&&await c}finally{s.delete(l)}}function oE(t,e,n,r,i){if(t){var o;let s=r[t];fe(s,"No route found to patch children into: routeId = "+t);let a=Cl(e,i,[t,"patch",String(((o=s.children)==null?void 0:o.length)||"0")],r);s.children?s.children.push(...a):s.children=a}else{let s=Cl(e,i,["patch",String(n.length||"0")],r);n.push(...s)}}async function Ak(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];fe(i,"No route found in manifest");let o={};for(let s in r){let l=i[s]!==void 0&&s!=="hasErrorBoundary";Is(!l,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!XA.has(s)&&(o[s]=r[s])}Object.assign(i,o),Object.assign(i,Ge({},e(i),{lazy:void 0}))}async function kk(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,o,s)=>Object.assign(i,{[n[s].route.id]:o}),{})}async function Rk(t,e,n,r,i,o,s,a,l,c){let h=o.map(g=>g.route.lazy?Ak(g.route,l,a):void 0),d=o.map((g,v)=>{let b=h[v],S=i.some(w=>w.route.id===g.route.id);return Ge({},g,{shouldLoad:S,resolve:async w=>(w&&r.method==="GET"&&(g.route.lazy||g.route.loader)&&(S=!0),S?Ik(e,r,g,b,w,c):Promise.resolve({type:Oe.data,result:void 0}))})}),f=await t({matches:d,request:r,params:o[0].params,fetcherKey:s,context:c});try{await Promise.all(h)}catch{}return f}async function Ik(t,e,n,r,i,o){let s,a,l=c=>{let h,d=new Promise((v,b)=>h=b);a=()=>h(),e.signal.addEventListener("abort",a);let f=v=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:o},...v!==void 0?[v]:[]),g=(async()=>{try{return{type:"data",result:await(i?i(b=>f(b)):f())}}catch(v){return{type:"error",result:v}}})();return Promise.race([g,d])};try{let c=n.route[t];if(r)if(c){let h,[d]=await Promise.all([l(c).catch(f=>{h=f}),r]);if(h!==void 0)throw h;s=d}else if(await r,c=n.route[t],c)s=await l(c);else if(t==="action"){let h=new URL(e.url),d=h.pathname+h.search;throw Xt(405,{method:e.method,pathname:d,routeId:n.route.id})}else return{type:Oe.data,result:void 0};else if(c)s=await l(c);else{let h=new URL(e.url),d=h.pathname+h.search;throw Xt(404,{pathname:d})}fe(s.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Oe.error,result:c}}finally{a&&e.signal.removeEventListener("abort",a)}return s}async function Dk(t){let{result:e,type:n}=t;if(aE(e)){let c;try{let h=e.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(h){return{type:Oe.error,error:h}}return n===Oe.error?{type:Oe.error,error:new ah(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:Oe.data,data:c,statusCode:e.status,headers:e.headers}}if(n===Oe.error){if(qv(e)){var r;if(e.data instanceof Error){var i;return{type:Oe.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new ah(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:Oe.error,error:e,statusCode:id(e)?e.status:void 0}}if(jk(e)){var o,s;return{type:Oe.deferred,deferredData:e,statusCode:(o=e.init)==null?void 0:o.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}if(qv(e)){var a,l;return{type:Oe.data,data:e.data,statusCode:(a=e.init)==null?void 0:a.status,headers:(l=e.init)!=null&&l.headers?new Headers(e.init.headers):void 0}}return{type:Oe.data,data:e}}function Ok(t,e,n,r,i,o){let s=t.headers.get("Location");if(fe(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!Rg.test(s)){let a=r.slice(0,r.findIndex(l=>l.route.id===n)+1);s=Fp(new URL(e.url),a,i,!0,s,o),t.headers.set("Location",s)}return t}function jv(t,e,n){if(Rg.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),o=zr(i.pathname,n)!=null;if(i.origin===e.origin&&o)return i.pathname+i.search+i.hash}return t}function Ho(t,e,n,r){let i=t.createURL(sE(e)).toString(),o={signal:n};if(r&&qn(r.formMethod)){let{formMethod:s,formEncType:a}=r;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=zp(r.formData):o.body=r.formData}return new Request(i,o)}function zp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Fv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function Nk(t,e,n,r,i){let o={},s=null,a,l=!1,c={},h=n&&dn(n[1])?n[1].error:void 0;return t.forEach(d=>{if(!(d.route.id in e))return;let f=d.route.id,g=e[f];if(fe(!co(g),"Cannot handle redirect results in processLoaderData"),dn(g)){let v=g.error;h!==void 0&&(v=h,h=void 0),s=s||{};{let b=cs(t,f);s[b.route.id]==null&&(s[b.route.id]=v)}o[f]=void 0,l||(l=!0,a=id(g.error)?g.error.status:500),g.headers&&(c[f]=g.headers)}else ui(g)?(r.set(f,g.deferredData),o[f]=g.deferredData.data,g.statusCode!=null&&g.statusCode!==200&&!l&&(a=g.statusCode),g.headers&&(c[f]=g.headers)):(o[f]=g.data,g.statusCode&&g.statusCode!==200&&!l&&(a=g.statusCode),g.headers&&(c[f]=g.headers))}),h!==void 0&&n&&(s={[n[0]]:h},o[n[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:c}}function zv(t,e,n,r,i,o,s,a){let{loaderData:l,errors:c}=Nk(e,r,i,a);return o.forEach(h=>{let{key:d,match:f,controller:g}=h,v=s[d];if(fe(v,"Did not find corresponding fetcher result"),!(g&&g.signal.aborted))if(dn(v)){let b=cs(t.matches,f==null?void 0:f.route.id);c&&c[b.route.id]||(c=Ge({},c,{[b.route.id]:v.error})),t.fetchers.delete(d)}else if(co(v))fe(!1,"Unhandled fetcher revalidation redirect");else if(ui(v))fe(!1,"Unhandled fetcher deferred data");else{let b=ti(v.data);t.fetchers.set(d,b)}}),{loaderData:l,errors:c}}function Uv(t,e,n,r){let i=Ge({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(i[s]=e[s]):t[s]!==void 0&&o.route.loader&&(i[s]=t[s]),r&&r.hasOwnProperty(s))break}return i}function Bv(t){return t?dn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function cs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function $v(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Xt(t,e){let{pathname:n,routeId:r,method:i,type:o,message:s}=e===void 0?{}:e,a="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(a="Bad Request",o==="route-discovery"?l='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+s):i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):t===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",l='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new ah(t||500,a,new Error(l),!0)}function Gu(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(co(i))return{key:r,result:i}}}function sE(t){let e=typeof t=="string"?Ni(t):t;return To(Ge({},e,{hash:""}))}function Vk(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Mk(t){return typeof t=="object"&&t!=null&&"then"in t}function Lk(t){return aE(t.result)&&wk.has(t.result.status)}function ui(t){return t.type===Oe.deferred}function dn(t){return t.type===Oe.error}function co(t){return(t&&t.type)===Oe.redirect}function qv(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function jk(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function aE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Fk(t){return vk.has(t.toLowerCase())}function qn(t){return gk.has(t.toLowerCase())}async function zk(t,e,n,r,i){let o=Object.entries(e);for(let s=0;s<o.length;s++){let[a,l]=o[s],c=t.find(f=>(f==null?void 0:f.route.id)===a);if(!c)continue;let h=r.find(f=>f.route.id===c.route.id),d=h!=null&&!iE(h,c)&&(i&&i[c.route.id])!==void 0;ui(l)&&d&&await Ig(l,n,!1).then(f=>{f&&(e[a]=f)})}}async function Uk(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:o,controller:s}=n[r],a=e[i];t.find(c=>(c==null?void 0:c.route.id)===o)&&ui(a)&&(fe(s,"Expected an AbortController for revalidating fetcher deferred result"),await Ig(a,s.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function Ig(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Oe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Oe.error,error:i}}return{type:Oe.data,data:t.deferredData.data}}}function Dg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ma(t,e){let n=typeof e=="string"?Ni(e).search:e.search;if(t[t.length-1].route.index&&Dg(n||""))return t[t.length-1];let r=tE(t);return r[r.length-1]}function Hv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:o,json:s}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:e,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function yf(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Bk(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Pa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function $k(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function ti(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function qk(t,e){try{let n=t.sessionStorage.getItem(rE);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&e.set(i,new Set(o||[]))}}catch{}}function Hk(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(rE,JSON.stringify(n))}catch(r){Is(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lh(){return lh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lh.apply(this,arguments)}const Xl=N.createContext(null),Og=N.createContext(null),Vi=N.createContext(null),Ng=N.createContext(null),Wr=N.createContext({outlet:null,matches:[],isDataRoute:!1}),lE=N.createContext(null);function Wk(t,e){let{relative:n}=e===void 0?{}:e;Yl()||fe(!1);let{basename:r,navigator:i}=N.useContext(Vi),{hash:o,pathname:s,search:a}=od(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:kr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Yl(){return N.useContext(Ng)!=null}function Mi(){return Yl()||fe(!1),N.useContext(Ng).location}function uE(t){N.useContext(Vi).static||N.useLayoutEffect(t)}function Kk(){let{isDataRoute:t}=N.useContext(Wr);return t?lR():Gk()}function Gk(){Yl()||fe(!1);let t=N.useContext(Xl),{basename:e,future:n,navigator:r}=N.useContext(Vi),{matches:i}=N.useContext(Wr),{pathname:o}=Mi(),s=JSON.stringify(Ag(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return uE(()=>{a.current=!0}),N.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=kg(c,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:kr([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,s,o,t])}const Qk=N.createContext(null);function Xk(t){let e=N.useContext(Wr).outlet;return e&&N.createElement(Qk.Provider,{value:t},e)}function Yk(){let{matches:t}=N.useContext(Wr),e=t[t.length-1];return e?e.params:{}}function od(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Vi),{matches:i}=N.useContext(Wr),{pathname:o}=Mi(),s=JSON.stringify(Ag(i,r.v7_relativeSplatPath));return N.useMemo(()=>kg(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function Jk(t,e,n,r){Yl()||fe(!1);let{navigator:i}=N.useContext(Vi),{matches:o}=N.useContext(Wr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Mi(),h;h=c;let d=h.pathname||"/",f=d;if(l!=="/"){let b=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=so(t,{pathname:f});return rR(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:kr([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:kr([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r)}function Zk(){let t=aR(),e=id(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const eR=N.createElement(Zk,null);class tR extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Wr.Provider,{value:this.props.routeContext},N.createElement(lE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nR(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Xl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Wr.Provider,{value:e},r)}function rR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||fe(!1),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let d=s[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:f,errors:g}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,d,f)=>{let g,v=!1,b=null,S=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,b=d.route.errorElement||eR,l&&(c<0&&f===0?(v=!0,S=null):c===f&&(v=!0,S=d.route.hydrateFallbackElement||null)));let _=e.concat(s.slice(0,f+1)),w=()=>{let x;return g?x=b:v?x=S:d.route.Component?x=N.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=h,N.createElement(nR,{match:d,routeContext:{outlet:h,matches:_,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?N.createElement(tR,{location:n.location,revalidation:n.revalidation,component:b,error:g,children:w(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):w()},null)}var cE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cE||{}),uh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uh||{});function iR(t){let e=N.useContext(Xl);return e||fe(!1),e}function oR(t){let e=N.useContext(Og);return e||fe(!1),e}function sR(t){let e=N.useContext(Wr);return e||fe(!1),e}function hE(t){let e=sR(),n=e.matches[e.matches.length-1];return n.route.id||fe(!1),n.route.id}function aR(){var t;let e=N.useContext(lE),n=oR(uh.UseRouteError),r=hE(uh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function lR(){let{router:t}=iR(cE.UseNavigateStable),e=hE(uh.UseNavigateStable),n=N.useRef(!1);return uE(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,lh({fromRouteId:e},o)))},[t,e])}function uR(t){return Xk(t.context)}function cR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ut.Pop,navigator:o,static:s=!1,future:a}=t;Yl()&&fe(!1);let l=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:l,navigator:o,static:s,future:lh({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ni(r));let{pathname:h="/",search:d="",hash:f="",state:g=null,key:v="default"}=r,b=N.useMemo(()=>{let S=zr(h,l);return S==null?null:{location:{pathname:S,search:d,hash:f,state:g,key:v},navigationType:i}},[l,h,d,f,g,v,i]);return b==null?null:N.createElement(Vi.Provider,{value:c},N.createElement(Ng.Provider,{children:n,value:b}))}new Promise(()=>{});function hR(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:N.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:N.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:N.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ds(){return Ds=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ds.apply(this,arguments)}function dE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fR(t,e){return t.button===0&&(!e||e==="_self")&&!dR(t)}const pR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],mR=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],gR="6";try{window.__reactRouterVersion=gR}catch{}function yR(t,e){return Ek({basename:void 0,future:Ds({},void 0,{v7_prependBasename:!0}),history:KA({window:void 0}),hydrationData:vR(),routes:t,mapRouteProperties:hR,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function vR(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Ds({},e,{errors:wR(e.errors)})),e}function wR(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new ah(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let s=new o(i.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const fE=N.createContext({isTransitioning:!1}),bR=N.createContext(new Map),_R="startTransition",Wv=Wf[_R],xR="flushSync",Kv=WA[xR];function ER(t){Wv?Wv(t):t()}function Ca(t){Kv?Kv(t):t()}let TR=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function SR(t){let{fallbackElement:e,router:n,future:r}=t,[i,o]=N.useState(n.state),[s,a]=N.useState(),[l,c]=N.useState({isTransitioning:!1}),[h,d]=N.useState(),[f,g]=N.useState(),[v,b]=N.useState(),S=N.useRef(new Map),{v7_startTransition:_}=r||{},w=N.useCallback(m=>{_?ER(m):m()},[_]),x=N.useCallback((m,T)=>{let{deletedFetchers:A,unstable_flushSync:I,unstable_viewTransitionOpts:V}=T;A.forEach(de=>S.current.delete(de)),m.fetchers.forEach((de,Ke)=>{de.data!==void 0&&S.current.set(Ke,de.data)});let R=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!V||R){I?Ca(()=>o(m)):w(()=>o(m));return}if(I){Ca(()=>{f&&(h&&h.resolve(),f.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let de=n.window.document.startViewTransition(()=>{Ca(()=>o(m))});de.finished.finally(()=>{Ca(()=>{d(void 0),g(void 0),a(void 0),c({isTransitioning:!1})})}),Ca(()=>g(de));return}f?(h&&h.resolve(),f.skipTransition(),b({state:m,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(a(m),c({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[n.window,f,h,S,w]);N.useLayoutEffect(()=>n.subscribe(x),[n,x]),N.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new TR)},[l]),N.useEffect(()=>{if(h&&s&&n.window){let m=s,T=h.promise,A=n.window.document.startViewTransition(async()=>{w(()=>o(m)),await T});A.finished.finally(()=>{d(void 0),g(void 0),a(void 0),c({isTransitioning:!1})}),g(A)}},[w,s,h,n.window]),N.useEffect(()=>{h&&s&&i.location.key===s.location.key&&h.resolve()},[h,f,i.location,s]),N.useEffect(()=>{!l.isTransitioning&&v&&(a(v.state),c({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),b(void 0))},[l.isTransitioning,v]),N.useEffect(()=>{},[]);let k=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:m=>n.navigate(m),push:(m,T,A)=>n.navigate(m,{state:T,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(m,T,A)=>n.navigate(m,{replace:!0,state:T,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),M=n.basename||"/",j=N.useMemo(()=>({router:n,navigator:k,static:!1,basename:M}),[n,k,M]),P=N.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return N.createElement(N.Fragment,null,N.createElement(Xl.Provider,{value:j},N.createElement(Og.Provider,{value:i},N.createElement(bR.Provider,{value:S.current},N.createElement(fE.Provider,{value:l},N.createElement(cR,{basename:M,location:i.location,navigationType:i.historyAction,navigator:k,future:P},i.initialized||n.future.v7_partialHydration?N.createElement(PR,{routes:n.routes,future:n.future,state:i}):e))))),null)}const PR=N.memo(CR);function CR(t){let{routes:e,future:n,state:r}=t;return Jk(e,void 0,r,n)}const AR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wn=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:h,unstable_viewTransition:d}=e,f=dE(e,pR),{basename:g}=N.useContext(Vi),v,b=!1;if(typeof c=="string"&&kR.test(c)&&(v=c,AR))try{let x=new URL(window.location.href),k=c.startsWith("//")?new URL(x.protocol+c):new URL(c),M=zr(k.pathname,g);k.origin===x.origin&&M!=null?c=M+k.search+k.hash:b=!0}catch{}let S=Wk(c,{relative:i}),_=IR(c,{replace:s,state:a,target:l,preventScrollReset:h,relative:i,unstable_viewTransition:d});function w(x){r&&r(x),x.defaultPrevented||_(x)}return N.createElement("a",Ds({},f,{href:v||S,onClick:b||o?r:w,ref:n,target:l}))}),to=N.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,unstable_viewTransition:c,children:h}=e,d=dE(e,mR),f=od(l,{relative:d.relative}),g=Mi(),v=N.useContext(Og),{navigator:b,basename:S}=N.useContext(Vi),_=v!=null&&DR(f)&&c===!0,w=b.encodeLocation?b.encodeLocation(f).pathname:f.pathname,x=g.pathname,k=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(x=x.toLowerCase(),k=k?k.toLowerCase():null,w=w.toLowerCase()),k&&S&&(k=zr(k,S)||k);const M=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let j=x===w||!s&&x.startsWith(w)&&x.charAt(M)==="/",P=k!=null&&(k===w||!s&&k.startsWith(w)&&k.charAt(w.length)==="/"),m={isActive:j,isPending:P,isTransitioning:_},T=j?r:void 0,A;typeof o=="function"?A=o(m):A=[o,j?"active":null,P?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(m):a;return N.createElement(Wn,Ds({},d,{"aria-current":T,className:A,ref:n,style:I,to:l,unstable_viewTransition:c}),typeof h=="function"?h(m):h)});var Up;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Up||(Up={}));var Gv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gv||(Gv={}));function RR(t){let e=N.useContext(Xl);return e||fe(!1),e}function IR(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=Kk(),c=Mi(),h=od(t,{relative:s});return N.useCallback(d=>{if(fR(d,n)){d.preventDefault();let f=r!==void 0?r:To(c)===To(h);l(t,{replace:f,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,l,h,r,i,n,t,o,s,a])}function DR(t,e){e===void 0&&(e={});let n=N.useContext(fE);n==null&&fe(!1);let{basename:r}=RR(Up.useViewTransitionState),i=od(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=zr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=zr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sh(i.pathname,s)!=null||sh(i.pathname,o)!=null}var pE={exports:{}},mE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jl=N;function OR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var NR=typeof Object.is=="function"?Object.is:OR,VR=Jl.useSyncExternalStore,MR=Jl.useRef,LR=Jl.useEffect,jR=Jl.useMemo,FR=Jl.useDebugValue;mE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=MR(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=jR(function(){function l(g){if(!c){if(c=!0,h=g,g=r(g),i!==void 0&&s.hasValue){var v=s.value;if(i(v,g))return d=v}return d=g}if(v=d,NR(h,g))return v;var b=r(g);return i!==void 0&&i(v,b)?v:(h=g,d=b)}var c=!1,h,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=VR(t,o[0],o[1]);return LR(function(){s.hasValue=!0,s.value=a},[a]),FR(a),a};pE.exports=mE;var zR=pE.exports,pn="default"in Wf?me:Wf,Qv=Symbol.for("react-redux-context"),Xv=typeof globalThis<"u"?globalThis:{};function UR(){if(!pn.createContext)return{};const t=Xv[Qv]??(Xv[Qv]=new Map);let e=t.get(pn.createContext);return e||(e=pn.createContext(null),t.set(pn.createContext,e)),e}var Ti=UR(),BR=()=>{throw new Error("uSES not initialized!")};function Vg(t=Ti){return function(){return pn.useContext(t)}}var gE=Vg(),yE=BR,$R=t=>{yE=t},qR=(t,e)=>t===e;function HR(t=Ti){const e=t===Ti?gE:Vg(t),n=(r,i={})=>{const{equalityFn:o=qR,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:c,stabilityCheck:h,identityFunctionCheck:d}=e();pn.useRef(!0);const f=pn.useCallback({[r.name](v){return r(v)}}[r.name],[r,h,s.stabilityCheck]),g=yE(l.addNestedSub,a.getState,c||a.getState,f,o);return pn.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var Zn=HR();function WR(t){t()}function KR(){let t=null,e=null;return{clear(){t=null,e=null},notify(){WR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Yv={notify(){},get:()=>[]};function GR(t,e){let n,r=Yv,i=0,o=!1;function s(b){h();const S=r.subscribe(b);let _=!1;return()=>{_||(_=!0,S(),d())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function c(){return o}function h(){i++,n||(n=t.subscribe(l),r=KR())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Yv)}function f(){o||(o=!0,h())}function g(){o&&(o=!1,d())}const v={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:f,tryUnsubscribe:g,getListeners:()=>r};return v}var QR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XR=typeof navigator<"u"&&navigator.product==="ReactNative",YR=QR||XR?pn.useLayoutEffect:pn.useEffect;function JR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=pn.useMemo(()=>{const c=GR(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[t,r,i,o]),a=pn.useMemo(()=>t.getState(),[t]);YR(()=>{const{subscription:c}=s;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[s,a]);const l=e||Ti;return pn.createElement(l.Provider,{value:s},n)}var ZR=JR;function vE(t=Ti){const e=t===Ti?gE:Vg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var eI=vE();function tI(t=Ti){const e=t===Ti?eI:vE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var wE=tI();$R(zR.useSyncExternalStoreWithSelector);function St(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var nI=typeof Symbol=="function"&&Symbol.observable||"@@observable",Jv=nI,vf=()=>Math.random().toString(36).substring(7).split("").join("."),rI={INIT:`@@redux/INIT${vf()}`,REPLACE:`@@redux/REPLACE${vf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${vf()}`},ch=rI;function Mg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function bE(t,e,n){if(typeof t!="function")throw new Error(St(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(St(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(St(1));return n(bE)(t,e)}let r=t,i=e,o=new Map,s=o,a=0,l=!1;function c(){s===o&&(s=new Map,o.forEach((S,_)=>{s.set(_,S)}))}function h(){if(l)throw new Error(St(3));return i}function d(S){if(typeof S!="function")throw new Error(St(4));if(l)throw new Error(St(5));let _=!0;c();const w=a++;return s.set(w,S),function(){if(_){if(l)throw new Error(St(6));_=!1,c(),s.delete(w),o=null}}}function f(S){if(!Mg(S))throw new Error(St(7));if(typeof S.type>"u")throw new Error(St(8));if(typeof S.type!="string")throw new Error(St(17));if(l)throw new Error(St(9));try{l=!0,i=r(i,S)}finally{l=!1}return(o=s).forEach(w=>{w()}),S}function g(S){if(typeof S!="function")throw new Error(St(10));r=S,f({type:ch.REPLACE})}function v(){const S=d;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(St(11));function w(){const k=_;k.next&&k.next(h())}return w(),{unsubscribe:S(w)}},[Jv](){return this}}}return f({type:ch.INIT}),{dispatch:f,subscribe:d,getState:h,replaceReducer:g,[Jv]:v}}function iI(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:ch.INIT})>"u")throw new Error(St(12));if(typeof n(void 0,{type:ch.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(St(13))})}function oI(t){const e=Object.keys(t),n={};for(let o=0;o<e.length;o++){const s=e[o];typeof t[s]=="function"&&(n[s]=t[s])}const r=Object.keys(n);let i;try{iI(n)}catch(o){i=o}return function(s={},a){if(i)throw i;let l=!1;const c={};for(let h=0;h<r.length;h++){const d=r[h],f=n[d],g=s[d],v=f(g,a);if(typeof v>"u")throw a&&a.type,new Error(St(14));c[d]=v,l=l||v!==g}return l=l||r.length!==Object.keys(s).length,l?c:s}}function hh(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function sI(...t){return e=>(n,r)=>{const i=e(n,r);let o=()=>{throw new Error(St(15))};const s={getState:i.getState,dispatch:(l,...c)=>o(l,...c)},a=t.map(l=>l(s));return o=hh(...a)(i.dispatch),{...i,dispatch:o}}}function aI(t){return Mg(t)&&"type"in t&&typeof t.type=="string"}var _E=Symbol.for("immer-nothing"),Zv=Symbol.for("immer-draftable"),yn=Symbol.for("immer-state");function Kn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Os=Object.getPrototypeOf;function So(t){return!!t&&!!t[yn]}function Ur(t){var e;return t?xE(t)||Array.isArray(t)||!!t[Zv]||!!((e=t.constructor)!=null&&e[Zv])||ad(t)||ld(t):!1}var lI=Object.prototype.constructor.toString();function xE(t){if(!t||typeof t!="object")return!1;const e=Os(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===lI}function dh(t,e){sd(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function sd(t){const e=t[yn];return e?e.type_:Array.isArray(t)?1:ad(t)?2:ld(t)?3:0}function Bp(t,e){return sd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function EE(t,e,n){const r=sd(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function uI(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function ad(t){return t instanceof Map}function ld(t){return t instanceof Set}function no(t){return t.copy_||t.base_}function $p(t,e){if(ad(t))return new Map(t);if(ld(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=xE(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[yn];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],a=r[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[s]})}return Object.create(Os(t),r)}else{const r=Os(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Lg(t,e=!1){return ud(t)||So(t)||!Ur(t)||(sd(t)>1&&(t.set=t.add=t.clear=t.delete=cI),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Lg(r,!0))),t}function cI(){Kn(2)}function ud(t){return Object.isFrozen(t)}var hI={};function Po(t){const e=hI[t];return e||Kn(0,t),e}var Al;function TE(){return Al}function dI(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function e1(t,e){e&&(Po("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function qp(t){Hp(t),t.drafts_.forEach(fI),t.drafts_=null}function Hp(t){t===Al&&(Al=t.parent_)}function t1(t){return Al=dI(Al,t)}function fI(t){const e=t[yn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function n1(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[yn].modified_&&(qp(e),Kn(4)),Ur(t)&&(t=fh(e,t),e.parent_||ph(e,t)),e.patches_&&Po("Patches").generateReplacementPatches_(n[yn].base_,t,e.patches_,e.inversePatches_)):t=fh(e,n,[]),qp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==_E?t:void 0}function fh(t,e,n){if(ud(e))return e;const r=e[yn];if(!r)return dh(e,(i,o)=>r1(t,r,e,i,o,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return ph(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),dh(o,(a,l)=>r1(t,r,i,a,l,n,s)),ph(t,i,!1),n&&t.patches_&&Po("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function r1(t,e,n,r,i,o,s){if(So(i)){const a=o&&e&&e.type_!==3&&!Bp(e.assigned_,r)?o.concat(r):void 0,l=fh(t,i,a);if(EE(n,r,l),So(l))t.canAutoFreeze_=!1;else return}else s&&n.add(i);if(Ur(i)&&!ud(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;fh(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&ph(t,i)}}function ph(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Lg(e,n)}function pI(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:TE(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=jg;n&&(i=[r],o=kl);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return r.draft_=a,r.revoke_=s,a}var jg={get(t,e){if(e===yn)return t;const n=no(t);if(!Bp(n,e))return mI(t,n,e);const r=n[e];return t.finalized_||!Ur(r)?r:r===wf(t.base_,e)?(bf(t),t.copy_[e]=Kp(r,t)):r},has(t,e){return e in no(t)},ownKeys(t){return Reflect.ownKeys(no(t))},set(t,e,n){const r=SE(no(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=wf(no(t),e),o=i==null?void 0:i[yn];if(o&&o.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(uI(n,i)&&(n!==void 0||Bp(t.base_,e)))return!0;bf(t),Wp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return wf(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,bf(t),Wp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=no(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Kn(11)},getPrototypeOf(t){return Os(t.base_)},setPrototypeOf(){Kn(12)}},kl={};dh(jg,(t,e)=>{kl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});kl.deleteProperty=function(t,e){return kl.set.call(this,t,e,void 0)};kl.set=function(t,e,n){return jg.set.call(this,t[0],e,n,t[0])};function wf(t,e){const n=t[yn];return(n?no(n):t)[e]}function mI(t,e,n){var i;const r=SE(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function SE(t,e){if(!(e in t))return;let n=Os(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Os(n)}}function Wp(t){t.modified_||(t.modified_=!0,t.parent_&&Wp(t.parent_))}function bf(t){t.copy_||(t.copy_=$p(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var gI=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const o=n;n=e;const s=this;return function(l=o,...c){return s.produce(l,h=>n.call(this,h,...c))}}typeof n!="function"&&Kn(6),r!==void 0&&typeof r!="function"&&Kn(7);let i;if(Ur(e)){const o=t1(this),s=Kp(e,void 0);let a=!0;try{i=n(s),a=!1}finally{a?qp(o):Hp(o)}return e1(o,r),n1(i,o)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===_E&&(i=void 0),this.autoFreeze_&&Lg(i,!0),r){const o=[],s=[];Po("Patches").generateReplacementPatches_(e,i,o,s),r(o,s)}return i}else Kn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(s,...a)=>this.produceWithPatches(s,l=>e(l,...a));let r,i;return[this.produce(e,n,(s,a)=>{r=s,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Ur(t)||Kn(8),So(t)&&(t=yI(t));const e=t1(this),n=Kp(t,void 0);return n[yn].isManual_=!0,Hp(e),n}finishDraft(t,e){const n=t&&t[yn];(!n||!n.isManual_)&&Kn(9);const{scope_:r}=n;return e1(r,e),n1(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Po("Patches").applyPatches_;return So(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Kp(t,e){const n=ad(t)?Po("MapSet").proxyMap_(t,e):ld(t)?Po("MapSet").proxySet_(t,e):pI(t,e);return(e?e.scope_:TE()).drafts_.push(n),n}function yI(t){return So(t)||Kn(10,t),PE(t)}function PE(t){if(!Ur(t)||ud(t))return t;const e=t[yn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=$p(t,e.scope_.immer_.useStrictShallowCopy_)}else n=$p(t,!0);return dh(n,(r,i)=>{EE(n,r,PE(i))}),e&&(e.finalized_=!1),n}var vn=new gI,CE=vn.produce;vn.produceWithPatches.bind(vn);vn.setAutoFreeze.bind(vn);vn.setUseStrictShallowCopy.bind(vn);vn.applyPatches.bind(vn);vn.createDraft.bind(vn);vn.finishDraft.bind(vn);function AE(t){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,t):i(o)}var vI=AE(),wI=AE,bI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?hh:hh.apply(null,arguments)},_I=t=>t&&typeof t.match=="function";function el(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(ur(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>aI(r)&&r.type===t,n}var kE=class La extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,La.prototype)}static get[Symbol.species](){return La}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new La(...e[0].concat(this)):new La(...e.concat(this))}};function i1(t){return Ur(t)?CE(t,()=>{}):t}function o1(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(ur(10));const r=n.insert(e,t);return t.set(e,r),r}function xI(t){return typeof t=="boolean"}var EI=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=e??{};let s=new kE;return n&&(xI(n)?s.push(vI):s.push(wI(n.extraArgument))),s},TI="RTK_autoBatch",RE=t=>e=>{setTimeout(e,t)},SI=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:RE(10),PI=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,o=!1,s=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?SI:t.type==="callback"?t.queueNotification:RE(t.timeout),c=()=>{s=!1,o&&(o=!1,a.forEach(h=>h()))};return Object.assign({},r,{subscribe(h){const d=()=>i&&h(),f=r.subscribe(d);return a.add(h),()=>{f(),a.delete(h)}},dispatch(h){var d;try{return i=!((d=h==null?void 0:h.meta)!=null&&d[TI]),o=!i,o&&(s||(s=!0,l(c))),r.dispatch(h)}finally{i=!0}}})},CI=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new kE(t);return r&&i.push(PI(typeof r=="object"?r:void 0)),i};function AI(t){const e=EI(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Mg(n))a=oI(n);else throw new Error(ur(1));let l;typeof r=="function"?l=r(e):l=e();let c=hh;i&&(c=bI({trace:!1,...typeof i=="object"&&i}));const h=sI(...l),d=CI(h);let f=typeof s=="function"?s(d):d();const g=c(...f);return bE(a,o,g)}function IE(t){const e={},n=[];let r;const i={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(ur(28));if(a in e)throw new Error(ur(29));return e[a]=s,i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return t(i),[e,n,r]}function kI(t){return typeof t=="function"}function RI(t,e){let[n,r,i]=IE(e),o;if(kI(t))o=()=>i1(t());else{const a=i1(t);o=()=>a}function s(a=o(),l){let c=[n[l.type],...r.filter(({matcher:h})=>h(l)).map(({reducer:h})=>h)];return c.filter(h=>!!h).length===0&&(c=[i]),c.reduce((h,d)=>{if(d)if(So(h)){const g=d(h,l);return g===void 0?h:g}else{if(Ur(h))return CE(h,f=>d(f,l));{const f=d(h,l);if(f===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return f}}return h},a)}return s.getInitialState=o,s}var II=(t,e)=>_I(t)?t.match(e):t(e);function DI(...t){return e=>t.some(n=>II(n,e))}var OI="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",NI=(t=21)=>{let e="",n=t;for(;n--;)e+=OI[Math.random()*64|0];return e},VI=["name","message","stack","code"],_f=class{constructor(t,e){Ud(this,"_type");this.payload=t,this.meta=e}},s1=class{constructor(t,e){Ud(this,"_type");this.payload=t,this.meta=e}},MI=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of VI)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Fg=(()=>{function t(e,n,r){const i=el(e+"/fulfilled",(l,c,h,d)=>({payload:l,meta:{...d||{},arg:h,requestId:c,requestStatus:"fulfilled"}})),o=el(e+"/pending",(l,c,h)=>({payload:void 0,meta:{...h||{},arg:c,requestId:l,requestStatus:"pending"}})),s=el(e+"/rejected",(l,c,h,d,f)=>({payload:d,error:(r&&r.serializeError||MI)(l||"Rejected"),meta:{...f||{},arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(c,h,d)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):NI(),g=new AbortController;let v,b;function S(w){b=w,g.abort()}const _=async function(){var k,M;let w;try{let j=(k=r==null?void 0:r.condition)==null?void 0:k.call(r,l,{getState:h,extra:d});if(jI(j)&&(j=await j),j===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const P=new Promise((m,T)=>{v=()=>{T({name:"AbortError",message:b||"Aborted"})},g.signal.addEventListener("abort",v)});c(o(f,l,(M=r==null?void 0:r.getPendingMeta)==null?void 0:M.call(r,{requestId:f,arg:l},{getState:h,extra:d}))),w=await Promise.race([P,Promise.resolve(n(l,{dispatch:c,getState:h,extra:d,requestId:f,signal:g.signal,abort:S,rejectWithValue:(m,T)=>new _f(m,T),fulfillWithValue:(m,T)=>new s1(m,T)})).then(m=>{if(m instanceof _f)throw m;return m instanceof s1?i(m.payload,f,l,m.meta):i(m,f,l)})])}catch(j){w=j instanceof _f?s(null,f,l,j.payload,j.meta):s(j,f,l)}finally{v&&g.signal.removeEventListener("abort",v)}return r&&!r.dispatchConditionRejection&&s.match(w)&&w.meta.condition||c(w),w}();return Object.assign(_,{abort:S,requestId:f,arg:l,unwrap(){return _.then(LI)}})}}return Object.assign(a,{pending:o,rejected:s,fulfilled:i,settled:DI(s,i),typePrefix:e})}return t.withTypes=()=>t,t})();function LI(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function jI(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var FI=Symbol.for("rtk-slice-createasyncthunk");function zI(t,e){return`${t}/${e}`}function UI({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[FI];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(ur(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers($I()):i.reducers)||{},l=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(x,k){const M=typeof x=="string"?x:x.type;if(!M)throw new Error(ur(12));if(M in c.sliceCaseReducersByType)throw new Error(ur(13));return c.sliceCaseReducersByType[M]=k,h},addMatcher(x,k){return c.sliceMatchers.push({matcher:x,reducer:k}),h},exposeAction(x,k){return c.actionCreators[x]=k,h},exposeCaseReducer(x,k){return c.sliceCaseReducersByName[x]=k,h}};l.forEach(x=>{const k=a[x],M={reducerName:x,type:zI(o,x),createNotation:typeof i.reducers=="function"};HI(k)?KI(M,k,h,e):qI(M,k,h)});function d(){const[x={},k=[],M=void 0]=typeof i.extraReducers=="function"?IE(i.extraReducers):[i.extraReducers],j={...x,...c.sliceCaseReducersByType};return RI(i.initialState,P=>{for(let m in j)P.addCase(m,j[m]);for(let m of c.sliceMatchers)P.addMatcher(m.matcher,m.reducer);for(let m of k)P.addMatcher(m.matcher,m.reducer);M&&P.addDefaultCase(M)})}const f=x=>x,g=new Map;let v;function b(x,k){return v||(v=d()),v(x,k)}function S(){return v||(v=d()),v.getInitialState()}function _(x,k=!1){function M(P){let m=P[x];return typeof m>"u"&&k&&(m=S()),m}function j(P=f){const m=o1(g,k,{insert:()=>new WeakMap});return o1(m,P,{insert:()=>{const T={};for(const[A,I]of Object.entries(i.selectors??{}))T[A]=BI(I,P,S,k);return T}})}return{reducerPath:x,getSelectors:j,get selectors(){return j(M)},selectSlice:M}}const w={name:o,reducer:b,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:S,..._(s),injectInto(x,{reducerPath:k,...M}={}){const j=k??s;return x.inject({reducerPath:j,reducer:b},M),{...w,..._(j,!0)}}};return w}}function BI(t,e,n,r){function i(o,...s){let a=e(o);return typeof a>"u"&&r&&(a=n()),t(a,...s)}return i.unwrapped=t,i}var zg=UI();function $I(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function qI({type:t,reducerName:e,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!WI(r))throw new Error(ur(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(t,o).exposeCaseReducer(e,o).exposeAction(e,s?el(t,s):el(t))}function HI(t){return t._reducerDefinitionType==="asyncThunk"}function WI(t){return t._reducerDefinitionType==="reducerWithPrepare"}function KI({type:t,reducerName:e},n,r,i){if(!i)throw new Error(ur(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:l,settled:c,options:h}=n,d=i(t,o,h);r.exposeAction(e,d),s&&r.addCase(d.fulfilled,s),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(e,{fulfilled:s||Qu,pending:a||Qu,rejected:l||Qu,settled:c||Qu})}function Qu(){}function ur(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var a1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},OE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,s||(f=64)),r.push(n[h],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(DE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||d==null)throw new QI;const f=o<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XI=function(t){const e=DE(t);return OE.encodeByteArray(e,!0)},mh=function(t){return XI(t).replace(/\./g,"")},YI=function(t){try{return OE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=()=>JI().__FIREBASE_DEFAULTS__,e5=()=>{if(typeof process>"u"||typeof a1>"u")return;const t=a1.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},t5=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&YI(t[1]);return e&&JSON.parse(e)},Ug=()=>{try{return ZI()||e5()||t5()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},n5=t=>{var e,n;return(n=(e=Ug())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},r5=t=>{const e=n5(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},NE=()=>{var t;return(t=Ug())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o5(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mh(JSON.stringify(n)),mh(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s5(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a5(){var t;const e=(t=Ug())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function l5(){return!a5()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function u5(){try{return typeof indexedDB=="object"}catch{return!1}}function c5(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5="FirebaseError";class Gs extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=h5,Object.setPrototypeOf(this,Gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,VE.prototype.create)}}class VE{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?d5(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Gs(i,a,r)}}function d5(t,e){return t.replace(f5,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const f5=/\{\$([^}]+)}/g;function Gp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(l1(o)&&l1(s)){if(!Gp(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function l1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){return t&&t._delegate?t._delegate:t}class Il{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new i5;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g5(e))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ro){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ro){return this.instances.has(e)}getOptions(e=ro){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:m5(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ro){return this.component?this.component.multipleInstances?e:ro:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m5(t){return t===ro?void 0:t}function g5(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new p5(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const v5={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},w5=Te.INFO,b5={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},_5=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=b5[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let ME=class{constructor(e){this.name=e,this._logLevel=w5,this._logHandler=_5,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v5[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}};const x5=(t,e)=>e.some(n=>t instanceof n);let u1,c1;function E5(){return u1||(u1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T5(){return c1||(c1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LE=new WeakMap,Qp=new WeakMap,jE=new WeakMap,xf=new WeakMap,Bg=new WeakMap;function S5(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(wi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&LE.set(n,t)}).catch(()=>{}),Bg.set(e,t),e}function P5(t){if(Qp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Qp.set(t,e)}let Xp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function C5(t){Xp=t(Xp)}function A5(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ef(this),e,...n);return jE.set(r,e.sort?e.sort():[e]),wi(r)}:T5().includes(t)?function(...e){return t.apply(Ef(this),e),wi(LE.get(this))}:function(...e){return wi(t.apply(Ef(this),e))}}function k5(t){return typeof t=="function"?A5(t):(t instanceof IDBTransaction&&P5(t),x5(t,E5())?new Proxy(t,Xp):t)}function wi(t){if(t instanceof IDBRequest)return S5(t);if(xf.has(t))return xf.get(t);const e=k5(t);return e!==t&&(xf.set(t,e),Bg.set(e,t)),e}const Ef=t=>Bg.get(t);function R5(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=wi(s);return r&&s.addEventListener("upgradeneeded",l=>{r(wi(s.result),l.oldVersion,l.newVersion,wi(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const I5=["get","getKey","getAll","getAllKeys","count"],D5=["put","add","delete","clear"],Tf=new Map;function h1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tf.get(e))return Tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=D5.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I5.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Tf.set(e,o),o}C5(t=>({...t,get:(e,n,r)=>h1(e,n)||t.get(e,n,r),has:(e,n)=>!!h1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N5(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function N5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yp="@firebase/app",d1="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new ME("@firebase/app"),V5="@firebase/app-compat",M5="@firebase/analytics-compat",L5="@firebase/analytics",j5="@firebase/app-check-compat",F5="@firebase/app-check",z5="@firebase/auth",U5="@firebase/auth-compat",B5="@firebase/database",$5="@firebase/data-connect",q5="@firebase/database-compat",H5="@firebase/functions",W5="@firebase/functions-compat",K5="@firebase/installations",G5="@firebase/installations-compat",Q5="@firebase/messaging",X5="@firebase/messaging-compat",Y5="@firebase/performance",J5="@firebase/performance-compat",Z5="@firebase/remote-config",eD="@firebase/remote-config-compat",tD="@firebase/storage",nD="@firebase/storage-compat",rD="@firebase/firestore",iD="@firebase/vertexai-preview",oD="@firebase/firestore-compat",sD="firebase",aD="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="[DEFAULT]",lD={[Yp]:"fire-core",[V5]:"fire-core-compat",[L5]:"fire-analytics",[M5]:"fire-analytics-compat",[F5]:"fire-app-check",[j5]:"fire-app-check-compat",[z5]:"fire-auth",[U5]:"fire-auth-compat",[B5]:"fire-rtdb",[$5]:"fire-data-connect",[q5]:"fire-rtdb-compat",[H5]:"fire-fn",[W5]:"fire-fn-compat",[K5]:"fire-iid",[G5]:"fire-iid-compat",[Q5]:"fire-fcm",[X5]:"fire-fcm-compat",[Y5]:"fire-perf",[J5]:"fire-perf-compat",[Z5]:"fire-rc",[eD]:"fire-rc-compat",[tD]:"fire-gcs",[nD]:"fire-gcs-compat",[rD]:"fire-fst",[oD]:"fire-fst-compat",[iD]:"fire-vertex","fire-js":"fire-js",[sD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map,uD=new Map,Zp=new Map;function f1(t,e){try{t.container.addComponent(e)}catch(n){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yh(t){const e=t.name;if(Zp.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;Zp.set(e,t);for(const n of gh.values())f1(n,t);for(const n of uD.values())f1(n,t);return!0}function cD(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bi=new VE("app","Firebase",hD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Il("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=aD;function FE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bi.create("bad-app-name",{appName:String(i)});if(n||(n=NE()),!n)throw bi.create("no-options");const o=gh.get(i);if(o){if(Gp(n,o.options)&&Gp(r,o.config))return o;throw bi.create("duplicate-app",{appName:i})}const s=new y5(i);for(const l of Zp.values())s.addComponent(l);const a=new dD(n,r,s);return gh.set(i,a),a}function pD(t=Jp){const e=gh.get(t);if(!e&&t===Jp&&NE())return FE();if(!e)throw bi.create("no-app",{appName:t});return e}function xs(t,e,n){var r;let i=(r=lD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(a.join(" "));return}yh(new Il(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="firebase-heartbeat-database",gD=1,Dl="firebase-heartbeat-store";let Sf=null;function zE(){return Sf||(Sf=R5(mD,gD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw bi.create("idb-open",{originalErrorMessage:t.message})})),Sf}async function yD(t){try{const n=(await zE()).transaction(Dl),r=await n.objectStore(Dl).get(UE(t));return await n.done,r}catch(e){if(e instanceof Gs)Br.warn(e.message);else{const n=bi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Br.warn(n.message)}}}async function p1(t,e){try{const r=(await zE()).transaction(Dl,"readwrite");await r.objectStore(Dl).put(e,UE(t)),await r.done}catch(n){if(n instanceof Gs)Br.warn(n.message);else{const r=bi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Br.warn(r.message)}}}function UE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=1024,wD=30*24*60*60*1e3;class bD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=m1();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=wD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=m1(),{heartbeatsToSend:r,unsentEntries:i}=_D(this._heartbeatsCache.heartbeats),o=mh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Br.warn(n),""}}}function m1(){return new Date().toISOString().substring(0,10)}function _D(t,e=vD){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),g1(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),g1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u5()?c5().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function g1(t){return mh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){yh(new Il("platform-logger",e=>new O5(e),"PRIVATE")),yh(new Il("heartbeat",e=>new bD(e),"PRIVATE")),xs(Yp,d1,t),xs(Yp,d1,"esm2017"),xs("fire-js","")}ED("");var y1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var go,BE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,m){function T(){}T.prototype=m.prototype,P.D=m.prototype,P.prototype=new T,P.prototype.constructor=P,P.C=function(A,I,V){for(var R=Array(arguments.length-2),de=2;de<arguments.length;de++)R[de-2]=arguments[de];return m.prototype[I].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(P,m,T){T||(T=0);var A=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)A[I]=m.charCodeAt(T++)|m.charCodeAt(T++)<<8|m.charCodeAt(T++)<<16|m.charCodeAt(T++)<<24;else for(I=0;16>I;++I)A[I]=m[T++]|m[T++]<<8|m[T++]<<16|m[T++]<<24;m=P.g[0],T=P.g[1],I=P.g[2];var V=P.g[3],R=m+(V^T&(I^V))+A[0]+3614090360&4294967295;m=T+(R<<7&4294967295|R>>>25),R=V+(I^m&(T^I))+A[1]+3905402710&4294967295,V=m+(R<<12&4294967295|R>>>20),R=I+(T^V&(m^T))+A[2]+606105819&4294967295,I=V+(R<<17&4294967295|R>>>15),R=T+(m^I&(V^m))+A[3]+3250441966&4294967295,T=I+(R<<22&4294967295|R>>>10),R=m+(V^T&(I^V))+A[4]+4118548399&4294967295,m=T+(R<<7&4294967295|R>>>25),R=V+(I^m&(T^I))+A[5]+1200080426&4294967295,V=m+(R<<12&4294967295|R>>>20),R=I+(T^V&(m^T))+A[6]+2821735955&4294967295,I=V+(R<<17&4294967295|R>>>15),R=T+(m^I&(V^m))+A[7]+4249261313&4294967295,T=I+(R<<22&4294967295|R>>>10),R=m+(V^T&(I^V))+A[8]+1770035416&4294967295,m=T+(R<<7&4294967295|R>>>25),R=V+(I^m&(T^I))+A[9]+2336552879&4294967295,V=m+(R<<12&4294967295|R>>>20),R=I+(T^V&(m^T))+A[10]+4294925233&4294967295,I=V+(R<<17&4294967295|R>>>15),R=T+(m^I&(V^m))+A[11]+2304563134&4294967295,T=I+(R<<22&4294967295|R>>>10),R=m+(V^T&(I^V))+A[12]+1804603682&4294967295,m=T+(R<<7&4294967295|R>>>25),R=V+(I^m&(T^I))+A[13]+4254626195&4294967295,V=m+(R<<12&4294967295|R>>>20),R=I+(T^V&(m^T))+A[14]+2792965006&4294967295,I=V+(R<<17&4294967295|R>>>15),R=T+(m^I&(V^m))+A[15]+1236535329&4294967295,T=I+(R<<22&4294967295|R>>>10),R=m+(I^V&(T^I))+A[1]+4129170786&4294967295,m=T+(R<<5&4294967295|R>>>27),R=V+(T^I&(m^T))+A[6]+3225465664&4294967295,V=m+(R<<9&4294967295|R>>>23),R=I+(m^T&(V^m))+A[11]+643717713&4294967295,I=V+(R<<14&4294967295|R>>>18),R=T+(V^m&(I^V))+A[0]+3921069994&4294967295,T=I+(R<<20&4294967295|R>>>12),R=m+(I^V&(T^I))+A[5]+3593408605&4294967295,m=T+(R<<5&4294967295|R>>>27),R=V+(T^I&(m^T))+A[10]+38016083&4294967295,V=m+(R<<9&4294967295|R>>>23),R=I+(m^T&(V^m))+A[15]+3634488961&4294967295,I=V+(R<<14&4294967295|R>>>18),R=T+(V^m&(I^V))+A[4]+3889429448&4294967295,T=I+(R<<20&4294967295|R>>>12),R=m+(I^V&(T^I))+A[9]+568446438&4294967295,m=T+(R<<5&4294967295|R>>>27),R=V+(T^I&(m^T))+A[14]+3275163606&4294967295,V=m+(R<<9&4294967295|R>>>23),R=I+(m^T&(V^m))+A[3]+4107603335&4294967295,I=V+(R<<14&4294967295|R>>>18),R=T+(V^m&(I^V))+A[8]+1163531501&4294967295,T=I+(R<<20&4294967295|R>>>12),R=m+(I^V&(T^I))+A[13]+2850285829&4294967295,m=T+(R<<5&4294967295|R>>>27),R=V+(T^I&(m^T))+A[2]+4243563512&4294967295,V=m+(R<<9&4294967295|R>>>23),R=I+(m^T&(V^m))+A[7]+1735328473&4294967295,I=V+(R<<14&4294967295|R>>>18),R=T+(V^m&(I^V))+A[12]+2368359562&4294967295,T=I+(R<<20&4294967295|R>>>12),R=m+(T^I^V)+A[5]+4294588738&4294967295,m=T+(R<<4&4294967295|R>>>28),R=V+(m^T^I)+A[8]+2272392833&4294967295,V=m+(R<<11&4294967295|R>>>21),R=I+(V^m^T)+A[11]+1839030562&4294967295,I=V+(R<<16&4294967295|R>>>16),R=T+(I^V^m)+A[14]+4259657740&4294967295,T=I+(R<<23&4294967295|R>>>9),R=m+(T^I^V)+A[1]+2763975236&4294967295,m=T+(R<<4&4294967295|R>>>28),R=V+(m^T^I)+A[4]+1272893353&4294967295,V=m+(R<<11&4294967295|R>>>21),R=I+(V^m^T)+A[7]+4139469664&4294967295,I=V+(R<<16&4294967295|R>>>16),R=T+(I^V^m)+A[10]+3200236656&4294967295,T=I+(R<<23&4294967295|R>>>9),R=m+(T^I^V)+A[13]+681279174&4294967295,m=T+(R<<4&4294967295|R>>>28),R=V+(m^T^I)+A[0]+3936430074&4294967295,V=m+(R<<11&4294967295|R>>>21),R=I+(V^m^T)+A[3]+3572445317&4294967295,I=V+(R<<16&4294967295|R>>>16),R=T+(I^V^m)+A[6]+76029189&4294967295,T=I+(R<<23&4294967295|R>>>9),R=m+(T^I^V)+A[9]+3654602809&4294967295,m=T+(R<<4&4294967295|R>>>28),R=V+(m^T^I)+A[12]+3873151461&4294967295,V=m+(R<<11&4294967295|R>>>21),R=I+(V^m^T)+A[15]+530742520&4294967295,I=V+(R<<16&4294967295|R>>>16),R=T+(I^V^m)+A[2]+3299628645&4294967295,T=I+(R<<23&4294967295|R>>>9),R=m+(I^(T|~V))+A[0]+4096336452&4294967295,m=T+(R<<6&4294967295|R>>>26),R=V+(T^(m|~I))+A[7]+1126891415&4294967295,V=m+(R<<10&4294967295|R>>>22),R=I+(m^(V|~T))+A[14]+2878612391&4294967295,I=V+(R<<15&4294967295|R>>>17),R=T+(V^(I|~m))+A[5]+4237533241&4294967295,T=I+(R<<21&4294967295|R>>>11),R=m+(I^(T|~V))+A[12]+1700485571&4294967295,m=T+(R<<6&4294967295|R>>>26),R=V+(T^(m|~I))+A[3]+2399980690&4294967295,V=m+(R<<10&4294967295|R>>>22),R=I+(m^(V|~T))+A[10]+4293915773&4294967295,I=V+(R<<15&4294967295|R>>>17),R=T+(V^(I|~m))+A[1]+2240044497&4294967295,T=I+(R<<21&4294967295|R>>>11),R=m+(I^(T|~V))+A[8]+1873313359&4294967295,m=T+(R<<6&4294967295|R>>>26),R=V+(T^(m|~I))+A[15]+4264355552&4294967295,V=m+(R<<10&4294967295|R>>>22),R=I+(m^(V|~T))+A[6]+2734768916&4294967295,I=V+(R<<15&4294967295|R>>>17),R=T+(V^(I|~m))+A[13]+1309151649&4294967295,T=I+(R<<21&4294967295|R>>>11),R=m+(I^(T|~V))+A[4]+4149444226&4294967295,m=T+(R<<6&4294967295|R>>>26),R=V+(T^(m|~I))+A[11]+3174756917&4294967295,V=m+(R<<10&4294967295|R>>>22),R=I+(m^(V|~T))+A[2]+718787259&4294967295,I=V+(R<<15&4294967295|R>>>17),R=T+(V^(I|~m))+A[9]+3951481745&4294967295,P.g[0]=P.g[0]+m&4294967295,P.g[1]=P.g[1]+(I+(R<<21&4294967295|R>>>11))&4294967295,P.g[2]=P.g[2]+I&4294967295,P.g[3]=P.g[3]+V&4294967295}r.prototype.u=function(P,m){m===void 0&&(m=P.length);for(var T=m-this.blockSize,A=this.B,I=this.h,V=0;V<m;){if(I==0)for(;V<=T;)i(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<m;)if(A[I++]=P.charCodeAt(V++),I==this.blockSize){i(this,A),I=0;break}}else for(;V<m;)if(A[I++]=P[V++],I==this.blockSize){i(this,A),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var m=1;m<P.length-8;++m)P[m]=0;var T=8*this.o;for(m=P.length-8;m<P.length;++m)P[m]=T&255,T/=256;for(this.u(P),P=Array(16),m=T=0;4>m;++m)for(var A=0;32>A;A+=8)P[T++]=this.g[m]>>>A&255;return P};function o(P,m){var T=a;return Object.prototype.hasOwnProperty.call(T,P)?T[P]:T[P]=m(P)}function s(P,m){this.h=m;for(var T=[],A=!0,I=P.length-1;0<=I;I--){var V=P[I]|0;A&&V==m||(T[I]=V,A=!1)}this.g=T}var a={};function l(P){return-128<=P&&128>P?o(P,function(m){return new s([m|0],0>m?-1:0)}):new s([P|0],0>P?-1:0)}function c(P){if(isNaN(P)||!isFinite(P))return d;if(0>P)return S(c(-P));for(var m=[],T=1,A=0;P>=T;A++)m[A]=P/T|0,T*=4294967296;return new s(m,0)}function h(P,m){if(P.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(P.charAt(0)=="-")return S(h(P.substring(1),m));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(m,8)),A=d,I=0;I<P.length;I+=8){var V=Math.min(8,P.length-I),R=parseInt(P.substring(I,I+V),m);8>V?(V=c(Math.pow(m,V)),A=A.j(V).add(c(R))):(A=A.j(T),A=A.add(c(R)))}return A}var d=l(0),f=l(1),g=l(16777216);t=s.prototype,t.m=function(){if(b(this))return-S(this).m();for(var P=0,m=1,T=0;T<this.g.length;T++){var A=this.i(T);P+=(0<=A?A:4294967296+A)*m,m*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(v(this))return"0";if(b(this))return"-"+S(this).toString(P);for(var m=c(Math.pow(P,6)),T=this,A="";;){var I=k(T,m).g;T=_(T,I.j(m));var V=((0<T.g.length?T.g[0]:T.h)>>>0).toString(P);if(T=I,v(T))return V+A;for(;6>V.length;)V="0"+V;A=V+A}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function v(P){if(P.h!=0)return!1;for(var m=0;m<P.g.length;m++)if(P.g[m]!=0)return!1;return!0}function b(P){return P.h==-1}t.l=function(P){return P=_(this,P),b(P)?-1:v(P)?0:1};function S(P){for(var m=P.g.length,T=[],A=0;A<m;A++)T[A]=~P.g[A];return new s(T,~P.h).add(f)}t.abs=function(){return b(this)?S(this):this},t.add=function(P){for(var m=Math.max(this.g.length,P.g.length),T=[],A=0,I=0;I<=m;I++){var V=A+(this.i(I)&65535)+(P.i(I)&65535),R=(V>>>16)+(this.i(I)>>>16)+(P.i(I)>>>16);A=R>>>16,V&=65535,R&=65535,T[I]=R<<16|V}return new s(T,T[T.length-1]&-2147483648?-1:0)};function _(P,m){return P.add(S(m))}t.j=function(P){if(v(this)||v(P))return d;if(b(this))return b(P)?S(this).j(S(P)):S(S(this).j(P));if(b(P))return S(this.j(S(P)));if(0>this.l(g)&&0>P.l(g))return c(this.m()*P.m());for(var m=this.g.length+P.g.length,T=[],A=0;A<2*m;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var I=0;I<P.g.length;I++){var V=this.i(A)>>>16,R=this.i(A)&65535,de=P.i(I)>>>16,Ke=P.i(I)&65535;T[2*A+2*I]+=R*Ke,w(T,2*A+2*I),T[2*A+2*I+1]+=V*Ke,w(T,2*A+2*I+1),T[2*A+2*I+1]+=R*de,w(T,2*A+2*I+1),T[2*A+2*I+2]+=V*de,w(T,2*A+2*I+2)}for(A=0;A<m;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=m;A<2*m;A++)T[A]=0;return new s(T,0)};function w(P,m){for(;(P[m]&65535)!=P[m];)P[m+1]+=P[m]>>>16,P[m]&=65535,m++}function x(P,m){this.g=P,this.h=m}function k(P,m){if(v(m))throw Error("division by zero");if(v(P))return new x(d,d);if(b(P))return m=k(S(P),m),new x(S(m.g),S(m.h));if(b(m))return m=k(P,S(m)),new x(S(m.g),m.h);if(30<P.g.length){if(b(P)||b(m))throw Error("slowDivide_ only works with positive integers.");for(var T=f,A=m;0>=A.l(P);)T=M(T),A=M(A);var I=j(T,1),V=j(A,1);for(A=j(A,2),T=j(T,2);!v(A);){var R=V.add(A);0>=R.l(P)&&(I=I.add(T),V=R),A=j(A,1),T=j(T,1)}return m=_(P,I.j(m)),new x(I,m)}for(I=d;0<=P.l(m);){for(T=Math.max(1,Math.floor(P.m()/m.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),V=c(T),R=V.j(m);b(R)||0<R.l(P);)T-=A,V=c(T),R=V.j(m);v(V)&&(V=f),I=I.add(V),P=_(P,R)}return new x(I,P)}t.A=function(P){return k(this,P).h},t.and=function(P){for(var m=Math.max(this.g.length,P.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)&P.i(A);return new s(T,this.h&P.h)},t.or=function(P){for(var m=Math.max(this.g.length,P.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)|P.i(A);return new s(T,this.h|P.h)},t.xor=function(P){for(var m=Math.max(this.g.length,P.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)^P.i(A);return new s(T,this.h^P.h)};function M(P){for(var m=P.g.length+1,T=[],A=0;A<m;A++)T[A]=P.i(A)<<1|P.i(A-1)>>>31;return new s(T,P.h)}function j(P,m){var T=m>>5;m%=32;for(var A=P.g.length-T,I=[],V=0;V<A;V++)I[V]=0<m?P.i(V+T)>>>m|P.i(V+T+1)<<32-m:P.i(V+T);return new s(I,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,BE=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=h,go=s}).apply(typeof y1<"u"?y1:typeof self<"u"?self:typeof window<"u"?window:{});var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $E,ja,qE,Sc,em,HE,WE,KE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xu=="object"&&Xu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=n(this);function i(u,p){if(p)e:{var y=r;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function o(u,p){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var z=y++;return{value:p(z,u[z]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(u){return u||function(){return o(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function c(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function h(u,p,y){return u.call.apply(u.bind,arguments)}function d(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function f(u,p,y){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,f.apply(null,arguments)}function g(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function v(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,z){for(var K=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)K[Ve-2]=arguments[Ve];return p.prototype[L].apply(E,K)}}function b(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function S(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(l(E)){const L=u.length||0,z=E.length||0;u.length=L+z;for(let K=0;K<z;K++)u[L+K]=E[K]}else u.push(E)}}class _{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function w(u){return/^[\s\xa0]*$/.test(u)}function x(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function k(u){return k[" "](u),u}k[" "]=function(){};var M=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function j(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function P(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function m(u){const p={};for(const y in u)p[y]=u[y];return p}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,p){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let z=0;z<T.length;z++)y=T[z],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function I(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){a.setTimeout(()=>{throw u},0)}function R(){var u=G;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class de{constructor(){this.h=this.g=null}add(p,y){const E=Ke.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Ke=new _(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,B=!1,G=new de,re=()=>{const u=a.Promise.resolve(void 0);xe=()=>{u.then(Pe)}};var Pe=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){V(y)}var p=Ke;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}B=!1};function be(){this.s=this.s,this.C=this.C}be.prototype.s=!1,be.prototype.ma=function(){this.s||(this.s=!0,this.N())},be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};a.addEventListener("test",y,p),a.removeEventListener("test",y,p)}catch{}return u}();function Qt(u,p){if(ke.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(M){e:{try{k(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:dt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Qt.aa.h.call(this)}}v(Qt,ke);var dt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),gr=0;function Dd(u,p,y,E,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=L,this.key=++gr,this.da=this.fa=!1}function yr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Vo(u){this.src=u,this.g={},this.h=0}Vo.prototype.add=function(u,p,y,E,L){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var K=ta(u,p,E,L);return-1<K?(p=u[K],y||(p.fa=!1)):(p=new Dd(p,this.src,z,!!E,L),p.fa=y,u.push(p)),p};function ea(u,p){var y=p.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,p,void 0),z;(z=0<=L)&&Array.prototype.splice.call(E,L,1),z&&(yr(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function ta(u,p,y,E){for(var L=0;L<u.length;++L){var z=u[L];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==E)return L}return-1}var ft="closure_lm_"+(1e6*Math.random()|0),tr={};function na(u,p,y,E,L){if(Array.isArray(p)){for(var z=0;z<p.length;z++)na(u,p[z],y,E,L);return null}return y=fu(y),u&&u[Et]?u.K(p,y,c(E)?!!E.capture:!!E,L):Od(u,p,y,!1,E,L)}function Od(u,p,y,E,L,z){if(!p)throw Error("Invalid event type");var K=c(L)?!!L.capture:!!L,Ve=oa(u);if(Ve||(u[ft]=Ve=new Vo(u)),y=Ve.add(p,y,E,K,z),y.proxy)return y;if(E=vr(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Nt||(L=K),L===void 0&&(L=!1),u.addEventListener(p.toString(),E,L);else if(u.attachEvent)u.attachEvent(ia(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function vr(){function u(y){return p.call(u.src,u.listener,y)}const p=Nd;return u}function du(u,p,y,E,L){if(Array.isArray(p))for(var z=0;z<p.length;z++)du(u,p[z],y,E,L);else E=c(E)?!!E.capture:!!E,y=fu(y),u&&u[Et]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],y=ta(z,y,E,L),-1<y&&(yr(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=oa(u))&&(p=u.g[p.toString()],u=-1,p&&(u=ta(p,y,E,L)),(y=-1<u?p[u]:null)&&ra(y))}function ra(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Et])ea(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(ia(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=oa(p))?(ea(y,u),y.h==0&&(y.src=null,p[ft]=null)):yr(u)}}}function ia(u){return u in tr?tr[u]:tr[u]="on"+u}function Nd(u,p){if(u.da)u=!0;else{p=new Qt(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&ra(u),u=y.call(E,p)}return u}function oa(u){return u=u[ft],u instanceof Vo?u:null}var sa="__closure_events_fn_"+(1e9*Math.random()>>>0);function fu(u){return typeof u=="function"?u:(u[sa]||(u[sa]=function(p){return u.handleEvent(p)}),u[sa])}function $e(){be.call(this),this.i=new Vo(this),this.M=this,this.F=null}v($e,be),$e.prototype[Et]=!0,$e.prototype.removeEventListener=function(u,p,y,E){du(this,u,p,y,E)};function nt(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new ke(p,u);else if(p instanceof ke)p.target=p.target||u;else{var L=p;p=new ke(E,u),A(p,L)}if(L=!0,y)for(var z=y.length-1;0<=z;z--){var K=p.g=y[z];L=Ui(K,E,!0,p)&&L}if(K=p.g=u,L=Ui(K,E,!0,p)&&L,L=Ui(K,E,!1,p)&&L,y)for(z=0;z<y.length;z++)K=p.g=y[z],L=Ui(K,E,!1,p)&&L}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)yr(y[E]);delete u.g[p],u.h--}}this.F=null},$e.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},$e.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function Ui(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,z=0;z<p.length;++z){var K=p[z];if(K&&!K.da&&K.capture==y){var Ve=K.listener,Tt=K.ha||K.src;K.fa&&ea(u.i,K),L=Ve.call(Tt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Mo(u,p,y){if(typeof u=="function")y&&(u=f(u,y));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Vn(u){u.g=Mo(()=>{u.g=null,u.i&&(u.i=!1,Vn(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Mn extends be{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vn(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kr(u){be.call(this),this.h=u,this.g={}}v(Kr,be);var Bi=[];function pu(u){j(u.g,function(p,y){this.g.hasOwnProperty(y)&&ra(p)},u),u.g={}}Kr.prototype.N=function(){Kr.aa.N.call(this),pu(this)},Kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xn=a.JSON.stringify,mu=a.JSON.parse,gu=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Lo(){}Lo.prototype.h=null;function yu(u){return u.h||(u.h=u.i())}function aa(){}var nr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jo(){ke.call(this,"d")}v(jo,ke);function $i(){ke.call(this,"c")}v($i,ke);var En={},Fo=null;function zo(){return Fo=Fo||new $e}En.La="serverreachability";function la(u){ke.call(this,En.La,u)}v(la,ke);function qi(u){const p=zo();nt(p,new la(p))}En.STAT_EVENT="statevent";function ua(u,p){ke.call(this,En.STAT_EVENT,u),this.stat=p}v(ua,ke);function st(u){const p=zo();nt(p,new ua(p,u))}En.Ma="timingevent";function Hi(u,p){ke.call(this,En.Ma,u),this.size=p}v(Hi,ke);function Gr(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function Vd(u,p,y,E,L,z){u.info(function(){if(u.g)if(z)for(var K="",Ve=z.split("&"),Tt=0;Tt<Ve.length;Tt++){var Ce=Ve[Tt].split("=");if(1<Ce.length){var Lt=Ce[0];Ce=Ce[1];var jt=Lt.split("_");K=2<=jt.length&&jt[1]=="type"?K+(Lt+"="+Ce+"&"):K+(Lt+"=redacted&")}}else K=null;else K=z;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+y+`
`+K})}function D(u,p,y,E,L,z,K){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+y+`
`+z+" "+K})}function O(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+U(u,y)+(E?" "+E:"")})}function F(u,p){u.info(function(){return"TIMEOUT: "+p})}Wi.prototype.info=function(){};function U(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var z=L[0];if(z!="noop"&&z!="stop"&&z!="close")for(var K=1;K<L.length;K++)L[K]=""}}}}return xn(y)}catch{return p}}var Q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ae;function W(){}v(W,Lo),W.prototype.g=function(){return new XMLHttpRequest},W.prototype.i=function(){return{}},ae=new W;function te(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new Kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Y}function Y(){this.i=null,this.g="",this.h=!1}var Z={},we={};function Ee(u,p,y){u.L=1,u.v=xu(wr(p)),u.m=y,u.P=!0,De(u,null)}function De(u,p){u.F=Date.now(),je(u),u.A=wr(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),t0(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Y,u.g=w0(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Mn(f(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Bi[0]=L.toString()),L=Bi);for(var z=0;z<L.length;z++){var K=na(y,L[z],E||p.handleEvent,!1,p.h||p);if(!K)break;p.g[K.key]=K}p=u.H?m(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),qi(),Vd(u.i,u.u,u.A,u.l,u.R,u.m)}te.prototype.ca=function(u){u=u.target;const p=this.M;p&&br(u)==3?p.j():this.Y(u)},te.prototype.Y=function(u){try{if(u==this.g)e:{const jt=br(this.g);var p=this.g.Ba();const $o=this.g.Z();if(!(3>jt)&&(jt!=3||this.g&&(this.h.h||this.g.oa()||l0(this.g)))){this.J||jt!=4||p==7||(p==8||0>=$o?qi(3):qi(2)),ln(this);var y=this.g.Z();this.X=y;t:if(ye(this)){var E=l0(this.g);u="";var L=E.length,z=br(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vt(this),Tn(this);var K="";break t}this.h.i=new a.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(z&&p==L-1)});E.length=0,this.h.g+=u,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=y==200,D(this.i,this.u,this.A,this.l,this.R,jt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,Tt=this.g;if((Ve=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ve)){var Ce=Ve;break t}}Ce=null}if(y=Ce)O(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xr(this,y);else{this.o=!1,this.s=3,st(12),Vt(this),Tn(this);break e}}if(this.P){y=!0;let Fn;for(;!this.J&&this.C<K.length;)if(Fn=at(this,K),Fn==we){jt==4&&(this.s=4,st(14),y=!1),O(this.i,this.l,null,"[Incomplete Response]");break}else if(Fn==Z){this.s=4,st(15),O(this.i,this.l,K,"[Invalid Chunk]"),y=!1;break}else O(this.i,this.l,Fn,null),Xr(this,Fn);if(ye(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),jt!=4||K.length!=0||this.h.h||(this.s=1,st(16),y=!1),this.o=this.o&&y,!y)O(this.i,this.l,K,"[Invalid Chunked Response]"),Vt(this),Tn(this);else if(0<K.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Fd(Lt),Lt.M=!0,st(11))}}else O(this.i,this.l,K,null),Xr(this,K);jt==4&&Vt(this),this.o&&!this.J&&(jt==4?m0(this.j,this):(this.o=!1,je(this)))}else g2(this.g),y==400&&0<K.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Vt(this),Tn(this)}}}catch{}finally{}};function ye(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function at(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?we:(y=Number(p.substring(y,E)),isNaN(y)?Z:(E+=1,E+y>p.length?we:(p=p.slice(E,E+y),u.C=E+y,p)))}te.prototype.cancel=function(){this.J=!0,Vt(this)};function je(u){u.S=Date.now()+u.I,Qr(u,u.I)}function Qr(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Gr(f(u.ba,u),p)}function ln(u){u.B&&(a.clearTimeout(u.B),u.B=null)}te.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(F(this.i,this.A),this.L!=2&&(qi(),st(17)),Vt(this),this.s=2,Tn(this)):Qr(this,this.S-u)};function Tn(u){u.j.G==0||u.J||m0(u.j,u)}function Vt(u){ln(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,pu(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Xr(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||ue(y.h,u))){if(!u.K&&ue(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Au(y),Pu(y);else break e;jd(y),st(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Gr(f(y.Za,y),6e3));if(1>=Qi(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Yi(y,11)}else if((u.K||y.g==u)&&Au(y),!w(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Ce=L[p];if(y.T=Ce[0],Ce=Ce[1],y.G==2)if(Ce[0]=="c"){y.K=Ce[1],y.ia=Ce[2];const Lt=Ce[3];Lt!=null&&(y.la=Lt,y.j.info("VER="+y.la));const jt=Ce[4];jt!=null&&(y.Aa=jt,y.j.info("SVER="+y.Aa));const $o=Ce[5];$o!=null&&typeof $o=="number"&&0<$o&&(E=1.5*$o,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Fn=u.g;if(Fn){const Ru=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ru){var z=E.h;z.g||Ru.indexOf("spdy")==-1&&Ru.indexOf("quic")==-1&&Ru.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Me(z,z.h),z.h=null))}if(E.D){const zd=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;zd&&(E.ya=zd,ze(E.I,E.D,zd))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var K=u;if(E.qa=v0(E,E.J?E.ia:null,E.W),K.K){Mt(E.h,K);var Ve=K,Tt=E.L;Tt&&(Ve.I=Tt),Ve.B&&(ln(Ve),je(Ve)),E.g=K}else f0(E);0<y.i.length&&Cu(y)}else Ce[0]!="stop"&&Ce[0]!="close"||Yi(y,7);else y.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Yi(y,7):Ld(y):Ce[0]!="noop"&&y.l&&y.l.ta(Ce),y.v=0)}}qi(4)}catch{}}var Ln=class{constructor(u,p){this.g=u,this.map=p}};function Ki(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gi(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Qi(u){return u.h?1:u.g?u.g.size:0}function ue(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Me(u,p){u.g?u.g.add(p):u.h=p}function Mt(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ki.prototype.cancel=function(){if(this.i=Fe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Fe(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return b(u.i)}function jn(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function vu(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function wu(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=vu(u),E=jn(u),L=E.length,z=0;z<L;z++)p.call(void 0,E[z],y&&y[z],u)}var Xy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r2(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var z=u[y].substring(0,E);L=u[y].substring(E+1)}else z=u[y];p(z,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Xi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Xi){this.h=u.h,bu(this,u.j),this.o=u.o,this.g=u.g,_u(this,u.s),this.l=u.l;var p=u.i,y=new da;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Yy(this,y),this.m=u.m}else u&&(p=String(u).match(Xy))?(this.h=!1,bu(this,p[1]||"",!0),this.o=ca(p[2]||""),this.g=ca(p[3]||"",!0),_u(this,p[4]),this.l=ca(p[5]||"",!0),Yy(this,p[6]||"",!0),this.m=ca(p[7]||"")):(this.h=!1,this.i=new da(null,this.h))}Xi.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ha(p,Jy,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ha(p,Jy,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ha(y,y.charAt(0)=="/"?s2:o2,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ha(y,l2)),u.join("")};function wr(u){return new Xi(u)}function bu(u,p,y){u.j=y?ca(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function _u(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Yy(u,p,y){p instanceof da?(u.i=p,u2(u.i,u.h)):(y||(p=ha(p,a2)),u.i=new da(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function xu(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ca(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ha(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,i2),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function i2(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Jy=/[#\/\?@]/g,o2=/[#\?:]/g,s2=/[#\?]/g,a2=/[#\?@]/g,l2=/#/g;function da(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Yr(u){u.g||(u.g=new Map,u.h=0,u.i&&r2(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}t=da.prototype,t.add=function(u,p){Yr(this),this.i=null,u=Uo(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Zy(u,p){Yr(u),p=Uo(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function e0(u,p){return Yr(u),p=Uo(u,p),u.g.has(p)}t.forEach=function(u,p){Yr(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(p,L,E,this)},this)},this)},t.na=function(){Yr(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const L=u[E];for(let z=0;z<L.length;z++)y.push(p[E])}return y},t.V=function(u){Yr(this);let p=[];if(typeof u=="string")e0(this,u)&&(p=p.concat(this.g.get(Uo(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},t.set=function(u,p){return Yr(this),this.i=null,u=Uo(this,u),e0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},t.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function t0(u,p,y){Zy(u,p),0<y.length&&(u.i=null,u.g.set(Uo(u,p),b(y)),u.h+=y.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const z=encodeURIComponent(String(E)),K=this.V(E);for(E=0;E<K.length;E++){var L=z;K[E]!==""&&(L+="="+encodeURIComponent(String(K[E]))),u.push(L)}}return this.i=u.join("&")};function Uo(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function u2(u,p){p&&!u.j&&(Yr(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Zy(this,E),t0(this,L,y))},u)),u.j=p}function c2(u,p){const y=new Wi;if(a.Image){const E=new Image;E.onload=g(Jr,y,"TestLoadImage: loaded",!0,p,E),E.onerror=g(Jr,y,"TestLoadImage: error",!1,p,E),E.onabort=g(Jr,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=g(Jr,y,"TestLoadImage: timeout",!1,p,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function h2(u,p){const y=new Wi,E=new AbortController,L=setTimeout(()=>{E.abort(),Jr(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(z=>{clearTimeout(L),z.ok?Jr(y,"TestPingServer: ok",!0,p):Jr(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Jr(y,"TestPingServer: error",!1,p)})}function Jr(u,p,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function d2(){this.g=new gu}function f2(u,p,y){const E=y||"";try{wu(u,function(L,z){let K=L;c(L)&&(K=xn(L)),p.push(E+z+"="+encodeURIComponent(K))})}catch(L){throw p.push(E+"type="+encodeURIComponent("_badmap")),L}}function Eu(u){this.l=u.Ub||null,this.j=u.eb||!1}v(Eu,Lo),Eu.prototype.g=function(){return new Tu(this.l,this.j)},Eu.prototype.i=function(u){return function(){return u}}({});function Tu(u,p){$e.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Tu,$e),t=Tu.prototype,t.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,pa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,pa(this)),this.g&&(this.readyState=3,pa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;n0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function n0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?fa(this):pa(this),this.readyState==3&&n0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,fa(this))},t.Qa=function(u){this.g&&(this.response=u,fa(this))},t.ga=function(){this.g&&fa(this)};function fa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,pa(u)}t.setRequestHeader=function(u,p){this.u.append(u,p)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function pa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Tu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function r0(u){let p="";return j(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Md(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=r0(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function et(u){$e.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(et,$e);var p2=/^https?$/i,m2=["POST","PUT"];t=et.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ae.g(),this.v=this.o?yu(this.o):yu(ae),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){i0(this,z);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),L=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(m2,p,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,K]of y)this.g.setRequestHeader(z,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{a0(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){i0(this,z)}};function i0(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,o0(u),Su(u)}function o0(u){u.A||(u.A=!0,nt(u,"complete"),nt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,nt(this,"complete"),nt(this,"abort"),Su(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Su(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?s0(this):this.bb())},t.bb=function(){s0(this)};function s0(u){if(u.h&&typeof s<"u"&&(!u.v[1]||br(u)!=4||u.Z()!=2)){if(u.u&&br(u)==4)Mo(u.Ea,0,u);else if(nt(u,"readystatechange"),br(u)==4){u.h=!1;try{const K=u.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=K===0){var L=String(u.D).match(Xy)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),E=!p2.test(L?L.toLowerCase():"")}y=E}if(y)nt(u,"complete"),nt(u,"success");else{u.m=6;try{var z=2<br(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",o0(u)}}finally{Su(u)}}}}function Su(u,p){if(u.g){a0(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||nt(u,"ready");try{y.onreadystatechange=E}catch{}}}function a0(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function br(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<br(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),mu(p)}};function l0(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function g2(u){const p={};u=(u.g&&2<=br(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(w(u[E]))continue;var y=I(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[L]||[];p[L]=z,z.push(y)}P(p,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ma(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function u0(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ma("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ma("baseRetryDelayMs",5e3,u),this.cb=ma("retryDelaySeedMs",1e4,u),this.Wa=ma("forwardChannelMaxRetries",2,u),this.wa=ma("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ki(u&&u.concurrentRequestLimit),this.Da=new d2,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=u0.prototype,t.la=8,t.G=1,t.connect=function(u,p,y,E){st(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=v0(this,null,this.W),Cu(this)};function Ld(u){if(c0(u),u.G==3){var p=u.U++,y=wr(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),ga(u,y),p=new te(u,u.j,p),p.L=2,p.v=xu(wr(y)),y=!1,a.navigator&&a.navigator.sendBeacon)try{y=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&a.Image&&(new Image().src=p.v,y=!0),y||(p.g=w0(p.j,null),p.g.ea(p.v)),p.F=Date.now(),je(p)}y0(u)}function Pu(u){u.g&&(Fd(u),u.g.cancel(),u.g=null)}function c0(u){Pu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Au(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Cu(u){if(!Gi(u.h)&&!u.s){u.s=!0;var p=u.Ga;xe||re(),B||(xe(),B=!0),G.add(p,u),u.B=0}}function y2(u,p){return Qi(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Gr(f(u.Ga,u,p),g0(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new te(this,this.j,u);let z=this.o;if(this.S&&(z?(z=m(z),A(z,this.S)):z=this.S),this.m!==null||this.O||(L.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=d0(this,L,p),y=wr(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),ga(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(r0(z)))+"&"+p:this.m&&Md(y,this.m,z)),Me(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),L.T=!0,Ee(L,y,null)):Ee(L,y,p),this.G=2}}else this.G==3&&(u?h0(this,u):this.i.length==0||Gi(this.h)||h0(this))};function h0(u,p){var y;p?y=p.l:y=u.U++;const E=wr(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),ga(u,E),u.m&&u.o&&Md(E,u.m,u.o),y=new te(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=d0(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Me(u.h,y),Ee(y,E,p)}function ga(u,p){u.H&&j(u.H,function(y,E){ze(p,E,y)}),u.l&&wu({},function(y,E){ze(p,E,y)})}function d0(u,p,y){y=Math.min(u.i.length,y);var E=u.l?f(u.l.Na,u.l,u):null;e:{var L=u.i;let z=-1;for(;;){const K=["count="+y];z==-1?0<y?(z=L[0].g,K.push("ofs="+z)):z=0:K.push("ofs="+z);let Ve=!0;for(let Tt=0;Tt<y;Tt++){let Ce=L[Tt].g;const Lt=L[Tt].map;if(Ce-=z,0>Ce)z=Math.max(0,L[Tt].g-100),Ve=!1;else try{f2(Lt,K,"req"+Ce+"_")}catch{E&&E(Lt)}}if(Ve){E=K.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function f0(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;xe||re(),B||(xe(),B=!0),G.add(p,u),u.v=0}}function jd(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Gr(f(u.Fa,u),g0(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,p0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Gr(f(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Pu(this),p0(this))};function Fd(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function p0(u){u.g=new te(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=wr(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),ga(u,p),u.m&&u.o&&Md(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=xu(wr(p)),y.m=null,y.P=!0,De(y,u)}t.Za=function(){this.C!=null&&(this.C=null,Pu(this),jd(this),st(19))};function Au(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function m0(u,p){var y=null;if(u.g==p){Au(u),Fd(u),u.g=null;var E=2}else if(ue(u.h,p))y=p.D,Mt(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;E=zo(),nt(E,new Hi(E,y)),Cu(u)}else f0(u);else if(L=p.s,L==3||L==0&&0<p.X||!(E==1&&y2(u,p)||E==2&&jd(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:Yi(u,5);break;case 4:Yi(u,10);break;case 3:Yi(u,6);break;default:Yi(u,2)}}}function g0(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Yi(u,p){if(u.j.info("Error code "+p),p==2){var y=f(u.fb,u),E=u.Xa;const L=!E;E=new Xi(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bu(E,"https"),xu(E),L?c2(E.toString(),y):h2(E.toString(),y)}else st(2);u.G=0,u.l&&u.l.sa(p),y0(u),c0(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function y0(u){if(u.G=0,u.ka=[],u.l){const p=Fe(u.h);(p.length!=0||u.i.length!=0)&&(S(u.ka,p),S(u.ka,u.i),u.h.i.length=0,b(u.i),u.i.length=0),u.l.ra()}}function v0(u,p,y){var E=y instanceof Xi?wr(y):new Xi(y);if(E.g!="")p&&(E.g=p+"."+E.g),_u(E,E.s);else{var L=a.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var z=new Xi(null);E&&bu(z,E),p&&(z.g=p),L&&_u(z,L),y&&(z.l=y),E=z}return y=u.D,p=u.ya,y&&p&&ze(E,y,p),ze(E,"VER",u.la),ga(u,E),E}function w0(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new et(new Eu({eb:y})):new et(u.pa),p.Ha(u.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function b0(){}t=b0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ku(){}ku.prototype.g=function(u,p){return new un(u,p)};function un(u,p){$e.call(this),this.g=new u0(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!w(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!w(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Bo(this)}v(un,$e),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Ld(this.g)},un.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=xn(u),u=y);p.i.push(new Ln(p.Ya++,u)),p.G==3&&Cu(p)},un.prototype.N=function(){this.g.l=null,delete this.j,Ld(this.g),delete this.g,un.aa.N.call(this)};function _0(u){jo.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}v(_0,jo);function x0(){$i.call(this),this.status=1}v(x0,$i);function Bo(u){this.g=u}v(Bo,b0),Bo.prototype.ua=function(){nt(this.g,"a")},Bo.prototype.ta=function(u){nt(this.g,new _0(u))},Bo.prototype.sa=function(u){nt(this.g,new x0)},Bo.prototype.ra=function(){nt(this.g,"b")},ku.prototype.createWebChannel=ku.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,KE=function(){return new ku},WE=function(){return zo()},HE=En,em={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Q.NO_ERROR=0,Q.TIMEOUT=8,Q.HTTP_ERROR=6,Sc=Q,ne.COMPLETE="complete",qE=ne,aa.EventType=nr,nr.OPEN="a",nr.CLOSE="b",nr.ERROR="c",nr.MESSAGE="d",$e.prototype.listen=$e.prototype.K,ja=aa,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,$E=et}).apply(typeof Xu<"u"?Xu:typeof self<"u"?self:typeof window<"u"?window:{});const v1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new ME("@firebase/firestore");function Aa(){return Co.logLevel}function J(t,...e){if(Co.logLevel<=Te.DEBUG){const n=e.map($g);Co.debug(`Firestore (${Qs}): ${t}`,...n)}}function $r(t,...e){if(Co.logLevel<=Te.ERROR){const n=e.map($g);Co.error(`Firestore (${Qs}): ${t}`,...n)}}function Ns(t,...e){if(Co.logLevel<=Te.WARN){const n=e.map($g);Co.warn(`Firestore (${Qs}): ${t}`,...n)}}function $g(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Qs}) INTERNAL ASSERTION FAILED: `+t;throw $r(e),new Error(e)}function Ie(t,e){t||le()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Gs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class SD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PD{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Rr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Rr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new GE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new $t(e)}}class CD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new CD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ie(this.o===void 0);const r=o=>{o.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,J("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new kD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ID(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new yt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new yt(0,0))}static max(){return new ce(new yt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ol.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ol?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends Ol{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new We(n)}static emptyPath(){return new We([])}}const DD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Ol{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return DD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(We.fromString(e))}static fromName(e){return new oe(We.fromString(e).popFirst(5))}static empty(){return new oe(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new We(e.slice()))}}function OD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new yt(n+1,0):new yt(n,r));return new Si(i,oe.empty(),e)}function ND(t){return new Si(t.readTime,t.key,-1)}class Si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Si(ce.min(),oe.empty(),-1)}static max(){return new Si(ce.max(),oe.empty(),-1)}}function VD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==MD)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(i=>i?q.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new q((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const c=l;n(e[c]).next(h=>{s[c]=h,++a,a===o&&r(s)},h=>i(h))}})}static doWhile(e,n){return new q((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function jD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qg.oe=-1;function cd(t){return t==null}function vh(t){return t===0&&1/t==-1/0}function FD(t){return typeof t=="number"&&Number.isInteger(t)&&!vh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yu(this.root,e,this.comparator,!0)}}class Yu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??At.RED,this.left=i??At.EMPTY,this.right=o??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new At(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return At.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,o){return this}insert(e,n,r){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b1(this.data.getIterator())}getIteratorFrom(e){return new b1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class b1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Gn([])}unionWith(e){let n=new It(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new YE("Invalid base64 string: "+o):o}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const zD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=zD.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ao(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wg(t){const e=t.mapValue.fields.__previous_value__;return Hg(e)?Wg(e):e}function Nl(t){const e=Pi(t.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,r,i,o,s,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Vl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ko(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hg(t)?4:$D(t)?9007199254740991:BD(t)?10:11:le()}function pr(t,e){if(t===e)return!0;const n=ko(t);if(n!==ko(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nl(t).isEqual(Nl(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Pi(i.timestampValue),a=Pi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Ao(i.bytesValue).isEqual(Ao(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=it(i.doubleValue),a=it(o.doubleValue);return s===a?vh(s)===vh(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(w1(s)!==w1(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!pr(s[l],a[l])))return!1;return!0}(t,e);default:return le()}}function Ml(t,e){return(t.values||[]).find(n=>pr(n,e))!==void 0}function Ms(t,e){if(t===e)return 0;const n=ko(t),r=ko(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=it(o.integerValue||o.doubleValue),l=it(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return _1(t.timestampValue,e.timestampValue);case 4:return _1(Nl(t),Nl(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(o,s){const a=Ao(o),l=Ao(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=Ae(a[c],l[c]);if(h!==0)return h}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=Ae(it(o.latitude),it(s.latitude));return a!==0?a:Ae(it(o.longitude),it(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return x1(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,c,h;const d=o.fields||{},f=s.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,v=(l=f.value)===null||l===void 0?void 0:l.arrayValue,b=Ae(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:x1(g,v)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Ju.mapValue&&s===Ju.mapValue)return 0;if(o===Ju.mapValue)return 1;if(s===Ju.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),c=s.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const f=Ae(l[d],h[d]);if(f!==0)return f;const g=Ms(a[l[d]],c[h[d]]);if(g!==0)return g}return Ae(l.length,h.length)}(t.mapValue,e.mapValue);default:throw le()}}function _1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Pi(t),r=Pi(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function x1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Ms(n[i],r[i]);if(o)return o}return Ae(n.length,r.length)}function Ls(t){return tm(t)}function tm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ao(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=tm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${tm(n.fields[s])}`;return i+"}"}(t.mapValue):le()}function nm(t){return!!t&&"integerValue"in t}function Kg(t){return!!t&&"arrayValue"in t}function E1(t){return!!t&&"nullValue"in t}function T1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pc(t){return!!t&&"mapValue"in t}function BD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $D(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(n)}setAll(e){let n=kt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=tl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Pc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xs(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new kn(tl(this.value))}}function JE(t){const e=[];return Xs(t.fields,(n,r)=>{const i=new kt([n]);if(Pc(r)){const o=JE(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Ht(e,0,ce.min(),ce.min(),ce.min(),kn.empty(),0)}static newFoundDocument(e,n,r,i){return new Ht(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new Ht(e,2,n,ce.min(),ce.min(),kn.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,ce.min(),ce.min(),kn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.position=e,this.inclusive=n}}function S1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=oe.comparator(oe.fromName(s.referenceValue),n.key):r=Ms(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function P1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n="asc"){this.field=e,this.dir=n}}function qD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{}class mt extends ZE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WD(e,n,r):n==="array-contains"?new QD(e,r):n==="in"?new XD(e,r):n==="not-in"?new YD(e,r):n==="array-contains-any"?new JD(e,r):new mt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KD(e,r):new GD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ms(n,this.value)):n!==null&&ko(this.value)===ko(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mr extends ZE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new mr(e,n)}matches(e){return eT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eT(t){return t.op==="and"}function tT(t){return HD(t)&&eT(t)}function HD(t){for(const e of t.filters)if(e instanceof mr)return!1;return!0}function rm(t){if(t instanceof mt)return t.field.canonicalString()+t.op.toString()+Ls(t.value);if(tT(t))return t.filters.map(e=>rm(e)).join(",");{const e=t.filters.map(n=>rm(n)).join(",");return`${t.op}(${e})`}}function nT(t,e){return t instanceof mt?function(r,i){return i instanceof mt&&r.op===i.op&&r.field.isEqual(i.field)&&pr(r.value,i.value)}(t,e):t instanceof mr?function(r,i){return i instanceof mr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&nT(s,i.filters[a]),!0):!1}(t,e):void le()}function rT(t){return t instanceof mt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ls(n.value)}`}(t):t instanceof mr?function(n){return n.op.toString()+" {"+n.getFilters().map(rT).join(" ,")+"}"}(t):"Filter"}class WD extends mt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class KD extends mt{constructor(e,n){super(e,"in",n),this.keys=iT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GD extends mt{constructor(e,n){super(e,"not-in",n),this.keys=iT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class QD extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kg(n)&&Ml(n.arrayValue,this.value)}}class XD extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class YD extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ml(this.value.arrayValue,n)}}class JD extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ml(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function C1(t,e=null,n=[],r=[],i=null,o=null,s=null){return new ZD(t,e,n,r,i,o,s)}function Gg(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),cd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ls(r)).join(",")),e.ue=n}return e.ue}function Qg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!P1(t.startAt,e.startAt)&&P1(t.endAt,e.endAt)}function im(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eO(t,e,n,r,i,o,s,a){return new hd(t,e,n,r,i,o,s,a)}function Xg(t){return new hd(t)}function A1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tO(t){return t.collectionGroup!==null}function nl(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new It(kt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new bh(o,r))}),n.has(kt.keyField().canonicalString())||e.ce.push(new bh(kt.keyField(),r))}return e.ce}function cr(t){const e=he(t);return e.le||(e.le=nO(e,nl(t))),e.le}function nO(t,e){if(t.limitType==="F")return C1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new bh(i.field,o)});const n=t.endAt?new wh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wh(t.startAt.position,t.startAt.inclusive):null;return C1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function om(t,e,n){return new hd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dd(t,e){return Qg(cr(t),cr(e))&&t.limitType===e.limitType}function oT(t){return`${Gg(cr(t))}|lt:${t.limitType}`}function Qo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>rT(i)).join(", ")}]`),cd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ls(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ls(i)).join(",")),`Target(${r})`}(cr(t))}; limitType=${t.limitType})`}function fd(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):oe.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of nl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const c=S1(s,a,l);return s.inclusive?c<=0:c<0}(r.startAt,nl(r),i)||r.endAt&&!function(s,a,l){const c=S1(s,a,l);return s.inclusive?c>=0:c>0}(r.endAt,nl(r),i))}(t,e)}function rO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sT(t){return(e,n)=>{let r=!1;for(const i of nl(t)){const o=iO(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function iO(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),c=a.data.field(o);return l!==null&&c!==null?Ms(l,c):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return XE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=new Ze(oe.comparator);function qr(){return oO}const aT=new Ze(oe.comparator);function Fa(...t){let e=aT;for(const n of t)e=e.insert(n.key,n);return e}function lT(t){let e=aT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ho(){return rl()}function uT(){return rl()}function rl(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const sO=new Ze(oe.comparator),aO=new It(oe.comparator);function ve(...t){let e=aO;for(const n of t)e=e.add(n);return e}const lO=new It(Ae);function uO(){return lO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vh(e)?"-0":e}}function cT(t){return{integerValue:""+t}}function cO(t,e){return FD(e)?cT(e):Yg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this._=void 0}}function hO(t,e,n){return t instanceof _h?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Hg(o)&&(o=Wg(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Ll?dT(t,e):t instanceof jl?fT(t,e):function(i,o){const s=hT(i,o),a=k1(s)+k1(i.Pe);return nm(s)&&nm(i.Pe)?cT(a):Yg(i.serializer,a)}(t,e)}function dO(t,e,n){return t instanceof Ll?dT(t,e):t instanceof jl?fT(t,e):n}function hT(t,e){return t instanceof xh?function(r){return nm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class _h extends pd{}class Ll extends pd{constructor(e){super(),this.elements=e}}function dT(t,e){const n=pT(e);for(const r of t.elements)n.some(i=>pr(i,r))||n.push(r);return{arrayValue:{values:n}}}class jl extends pd{constructor(e){super(),this.elements=e}}function fT(t,e){let n=pT(e);for(const r of t.elements)n=n.filter(i=>!pr(i,r));return{arrayValue:{values:n}}}class xh extends pd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function k1(t){return it(t.integerValue||t.doubleValue)}function pT(t){return Kg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ll&&i instanceof Ll||r instanceof jl&&i instanceof jl?Vs(r.elements,i.elements,pr):r instanceof xh&&i instanceof xh?pr(r.Pe,i.Pe):r instanceof _h&&i instanceof _h}(t.transform,e.transform)}class pO{constructor(e,n){this.version=e,this.transformResults=n}}class Ir{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ir}static exists(e){return new Ir(void 0,e)}static updateTime(e){return new Ir(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class md{}function mT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yT(t.key,Ir.none()):new tu(t.key,t.data,Ir.none());{const n=t.data,r=kn.empty();let i=new It(kt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Do(t.key,r,new Gn(i.toArray()),Ir.none())}}function mO(t,e,n){t instanceof tu?function(i,o,s){const a=i.value.clone(),l=I1(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Do?function(i,o,s){if(!Cc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=I1(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(gT(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function il(t,e,n,r){return t instanceof tu?function(o,s,a,l){if(!Cc(o.precondition,s))return a;const c=o.value.clone(),h=D1(o.fieldTransforms,l,s);return c.setAll(h),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Do?function(o,s,a,l){if(!Cc(o.precondition,s))return a;const c=D1(o.fieldTransforms,l,s),h=s.data;return h.setAll(gT(o)),h.setAll(c),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(o,s,a){return Cc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function gO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=hT(r.transform,i||null);o!=null&&(n===null&&(n=kn.empty()),n.set(r.field,o))}return n||null}function R1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vs(r,i,(o,s)=>fO(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class tu extends md{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Do extends md{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function gT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function I1(t,e,n){const r=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,dO(s,a,n[i]))}return r}function D1(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,hO(o,s,e))}return r}class yT extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yO extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&mO(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=mT(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>R1(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>R1(n,r))}}class Jg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ie(e.mutations.length===r.length);let i=function(){return sO}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Jg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,_e;function _O(t){switch(t){default:return le();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function vT(t){if(t===void 0)return $r("GRPC error has no .code"),$.UNKNOWN;switch(t){case lt.OK:return $.OK;case lt.CANCELLED:return $.CANCELLED;case lt.UNKNOWN:return $.UNKNOWN;case lt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case lt.INTERNAL:return $.INTERNAL;case lt.UNAVAILABLE:return $.UNAVAILABLE;case lt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case lt.NOT_FOUND:return $.NOT_FOUND;case lt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case lt.ABORTED:return $.ABORTED;case lt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case lt.DATA_LOSS:return $.DATA_LOSS;default:return le()}}(_e=lt||(lt={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=new go([4294967295,4294967295],0);function O1(t){const e=xO().encode(t),n=new BE;return n.update(e),new Uint8Array(n.digest())}function N1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new go([n,r],0),new go([i,o],0)]}class Zg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new za(`Invalid padding: ${n}`);if(r<0)throw new za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new za(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=go.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(go.fromNumber(r)));return i.compare(EO)===1&&(i=new go([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=O1(e),[r,i]=N1(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Zg(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=O1(e),[r,i]=N1(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,nu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gd(ce.min(),i,new Ze(Ae),qr(),ve())}}class nu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new nu(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class wT{constructor(e,n){this.targetId=e,this.me=n}}class bT{constructor(e,n,r=Ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class V1{constructor(){this.fe=0,this.ge=L1(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new nu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=L1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TO{constructor(e){this.Le=e,this.Be=new Map,this.ke=qr(),this.qe=M1(),this.Qe=new Ze(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(im(o))if(r===0){const s=new oe(o.path);this.Ue(n,s,Ht.newNoDocument(s,ce.min()))}else Ie(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=Ao(r).toUint8Array()}catch(l){if(l instanceof YE)return Ns("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Zg(s,i,o)}catch(l){return Ns(l instanceof za?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&im(a.target)){const l=new oe(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Ht.newNoDocument(l,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=ve();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new gd(e,n,this.Qe,this.ke,r);return this.ke=qr(),this.qe=M1(),this.Qe=new Ze(Ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new V1,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new It(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new V1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function M1(){return new Ze(oe.comparator)}function L1(){return new Ze(oe.comparator)}const SO={asc:"ASCENDING",desc:"DESCENDING"},PO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CO={and:"AND",or:"OR"};class AO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sm(t,e){return t.useProto3Json||cd(e)?e:{value:e}}function Eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _T(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kO(t,e){return Eh(t,e.toTimestamp())}function hr(t){return Ie(!!t),ce.fromTimestamp(function(n){const r=Pi(n);return new yt(r.seconds,r.nanos)}(t))}function ey(t,e){return am(t,e).canonicalString()}function am(t,e){const n=function(i){return new We(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xT(t){const e=We.fromString(t);return Ie(CT(e)),e}function lm(t,e){return ey(t.databaseId,e.path)}function Pf(t,e){const n=xT(e);if(n.get(1)!==t.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(TT(n))}function ET(t,e){return ey(t.databaseId,e)}function RO(t){const e=xT(t);return e.length===4?We.emptyPath():TT(e)}function um(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TT(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function j1(t,e,n){return{name:lm(t,e),fields:n.value.mapValue.fields}}function IO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,h){return c.useProto3Json?(Ie(h===void 0||typeof h=="string"),Ot.fromBase64String(h||"")):(Ie(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ot.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(c){const h=c.code===void 0?$.UNKNOWN:vT(c.code);return new ie(h,c.message||"")}(s);n=new bT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pf(t,r.document.name),o=hr(r.document.updateTime),s=r.document.createTime?hr(r.document.createTime):ce.min(),a=new kn({mapValue:{fields:r.document.fields}}),l=Ht.newFoundDocument(i,o,s,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Ac(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pf(t,r.document),o=r.readTime?hr(r.readTime):ce.min(),s=Ht.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Ac([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pf(t,r.document),o=r.removedTargetIds||[];n=new Ac([],o,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new bO(i,o),a=r.targetId;n=new wT(a,s)}}return n}function DO(t,e){let n;if(e instanceof tu)n={update:j1(t,e.key,e.value)};else if(e instanceof yT)n={delete:lm(t,e.key)};else if(e instanceof Do)n={update:j1(t,e.key,e.data),updateMask:UO(e.fieldMask)};else{if(!(e instanceof yO))return le();n={verify:lm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof _h)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ll)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof jl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xh)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:kO(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:le()}(t,e.precondition)),n}function OO(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?hr(i.updateTime):hr(o);return s.isEqual(ce.min())&&(s=hr(o)),new pO(s,i.transformResults||[])}(n,e))):[]}function NO(t,e){return{documents:[ET(t,e.path)]}}function VO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ET(t,i);const o=function(c){if(c.length!==0)return PT(mr.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(h=>function(f){return{field:Xo(f.field),direction:jO(f.dir)}}(h))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=sm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function MO(t){let e=RO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];n.where&&(o=function(d){const f=ST(d);return f instanceof mr&&tT(f)?f.getFilters():[f]}(n.where));let s=[];n.orderBy&&(s=function(d){return d.map(f=>function(v){return new bh(Yo(v.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,cd(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,g=d.values||[];return new wh(g,f)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const f=!d.before,g=d.values||[];return new wh(g,f)}(n.endAt)),eO(e,i,s,o,a,"F",l,c)}function LO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ST(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yo(n.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yo(n.unaryFilter.field);return mt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Yo(n.unaryFilter.field);return mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Yo(n.unaryFilter.field);return mt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return mt.create(Yo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mr.create(n.compositeFilter.filters.map(r=>ST(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function jO(t){return SO[t]}function FO(t){return PO[t]}function zO(t){return CO[t]}function Xo(t){return{fieldPath:t.canonicalString()}}function Yo(t){return kt.fromServerFormat(t.fieldPath)}function PT(t){return t instanceof mt?function(n){if(n.op==="=="){if(T1(n.value))return{unaryFilter:{field:Xo(n.field),op:"IS_NAN"}};if(E1(n.value))return{unaryFilter:{field:Xo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(T1(n.value))return{unaryFilter:{field:Xo(n.field),op:"IS_NOT_NAN"}};if(E1(n.value))return{unaryFilter:{field:Xo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xo(n.field),op:FO(n.op),value:n.value}}}(t):t instanceof mr?function(n){const r=n.getFilters().map(i=>PT(i));return r.length===1?r[0]:{compositeFilter:{op:zO(n.op),filters:r}}}(t):le()}function UO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r,i,o=ce.min(),s=ce.min(),a=Ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.ct=e}}function $O(t){const e=MO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?om(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this.un=new HO}addToCollectionParentIndex(e,n){return this.un.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Si.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class HO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new It(We.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new It(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new js(0)}static kn(){return new js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&il(r.mutation,i,Gn.empty(),yt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=ho();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Fa();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=ho();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=qr();const s=rl(),a=function(){return rl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Do)?o=o.insert(c.key,c):h!==void 0?(s.set(c.key,h.mutation.getFieldMask()),il(h.mutation,c,h.mutation.getFieldMask(),yt.now())):s.set(c.key,Gn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((c,h)=>s.set(c,h)),n.forEach((c,h)=>{var d;return a.set(c,new KO(h,(d=s.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=rl();let i=new Ze((s,a)=>s-a),o=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Gn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const d=(i.get(a.batchId)||ve()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,d=uT();h.forEach(f=>{if(!o.has(f)){const g=mT(n.get(f),r.get(f));g!==null&&d.set(f,g),o=o.add(f)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,d))}return q.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return oe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):q.resolve(ho());let a=-1,l=o;return s.next(c=>q.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),o.get(h)?q.resolve():this.remoteDocumentCache.getEntry(e,h).next(f=>{l=l.insert(h,f)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,l,c,ve())).next(h=>({batchId:a,changes:lT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=Fa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Fa();return this.indexManager.getCollectionParents(e,o).next(a=>q.forEach(a,l=>{const c=function(d,f){return new hd(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,f)=>{s=s.insert(d,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,c)=>{const h=c.getKey();s.get(h)===null&&(s=s.insert(h,Ht.newInvalidDocument(h)))});let a=Fa();return s.forEach((l,c)=>{const h=o.get(l);h!==void 0&&il(h.mutation,c,Gn.empty(),yt.now()),fd(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return q.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hr(i.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:$O(i.bundledQuery),readTime:hr(i.readTime)}}(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(){this.overlays=new Ze(oe.comparator),this.Ir=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ho();return q.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const i=ho(),o=n.length+1,s=new oe(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return q.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Ze((c,h)=>c-h);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=o.get(c.largestBatchId);h===null&&(h=ho(),o=o.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ho(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return q.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new wO(n,r));let o=this.Ir.get(n);o===void 0&&(o=ve(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.Tr=new It(bt.Er),this.dr=new It(bt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new bt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new bt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new oe(new We([])),r=new bt(n,e),i=new bt(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new oe(new We([])),r=new bt(n,e),i=new bt(n,e+1);let o=ve();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new bt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return oe.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new It(bt.Er)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new vO(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new bt(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return q.resolve(s)}lookupMutationBatch(e,n){return q.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return q.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new bt(n,0),i=new bt(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),q.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(Ae);return n.forEach(i=>{const o=new bt(i,0),s=new bt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),q.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;oe.isDocumentKey(o)||(o=o.child(""));const s=new bt(new oe(o),0);let a=new It(Ae);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},s),q.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return q.forEach(n.mutations,i=>{const o=new bt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new bt(n,0),i=this.br.firstAfterOrEqual(r);return q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e){this.Mr=e,this.docs=function(){return new Ze(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let r=qr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ht.newInvalidDocument(i))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=qr();const s=n.path,a=new oe(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||VD(ND(h),r)<=0||(i.has(h.key)||fd(n,h))&&(o=o.insert(h.key,h.mutableCopy()))}return q.resolve(o)}getAllFromCollectionGroup(e,n,r,i){le()}Or(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eN(this)}getSize(e){return q.resolve(this.size)}}class eN extends WO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.persistence=e,this.Nr=new Ys(n=>Gg(n),Qg),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ty,this.targetCount=0,this.kr=js.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),q.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new js(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Kn(n),q.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),q.waitFor(o).next(()=>i)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),q.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qg(0),this.Kr=!1,this.Kr=!0,this.$r=new YO,this.referenceDelegate=e(this),this.Ur=new tN(this),this.indexManager=new qO,this.remoteDocumentCache=function(i){return new ZO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new BO(n),this.Gr=new QO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new JO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new rN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return q.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class rN extends LD{constructor(e){super(),this.currentSequenceNumber=e}}class ny{constructor(e){this.persistence=e,this.Jr=new ty,this.Yr=null}static Zr(e){return new ny(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),q.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Xr,r=>{const i=oe.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return q.or([()=>q.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ve(),i=ve();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ry(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return l5()?8:jD(s5())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new iN;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Aa()<=Te.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Qo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),q.resolve()):(Aa()<=Te.DEBUG&&J("QueryEngine","Query:",Qo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Aa()<=Te.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Qo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(n))):q.resolve())}Yi(e,n){if(A1(n))return q.resolve(null);let r=cr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=om(n,null,"F"),r=cr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ve(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,s,l.readTime)?this.Yi(e,om(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return A1(n)||i.isEqual(ce.min())?q.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?q.resolve(null):(Aa()<=Te.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qo(n)),this.rs(e,s,n,OD(i,-1)).next(a=>a))})}ts(e,n){let r=new It(sT(e));return n.forEach((i,o)=>{fd(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Aa()<=Te.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Qo(n)),this.Ji.getDocumentsMatchingQuery(e,n,Si.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ze(Ae),this._s=new Ys(o=>Gg(o),Qg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function aN(t,e,n,r){return new sN(t,e,n,r)}async function AT(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ve();for(const c of i){s.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of o){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:s,addedBatchIds:a}))})})}function lN(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const d=c.batch,f=d.keys();let g=q.resolve();return f.forEach(v=>{g=g.next(()=>h.getEntry(l,v)).next(b=>{const S=c.docVersions.get(v);Ie(S!==null),b.version.compareTo(S)<0&&(d.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),h.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function kT(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function uN(t,e){const n=he(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const f=i.get(d);if(!f)return;a.push(n.Ur.removeMatchingKeys(o,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(o,h.addedDocuments,d)));let g=f.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Ot.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(d,g),function(b,S,_){return b.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,g,h)&&a.push(n.Ur.updateTargetData(o,g))});let l=qr(),c=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,h))}),a.push(cN(o,s,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(ce.min())){const h=n.Ur.getLastRemoteSnapshotVersion(o).next(d=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(h)}return q.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,c)).next(()=>l)}).then(o=>(n.os=i,o))}function cN(t,e,n){let r=ve(),i=ve();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=qr();return n.forEach((a,l)=>{const c=o.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:s,Is:i}})}function hN(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dN(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,q.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new ci(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function cm(t,e,n){const r=he(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!eu(s))throw s;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function F1(t,e,n){const r=he(t);let i=ce.min(),o=ve();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,c,h){const d=he(l),f=d._s.get(h);return f!==void 0?q.resolve(d.os.get(f)):d.Ur.getTargetData(c,h)}(r,s,cr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:ce.min(),n?o:ve())).next(a=>(fN(r,rO(e),a),{documents:a,Ts:o})))}function fN(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class z1{constructor(){this.activeTargetIds=uO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pN{constructor(){this.so=new z1,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new z1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu=null;function Cf(){return Zu===null?Zu=function(){return 268435456+Math.round(2147483648*Math.random())}():Zu++,"0x"+Zu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class vN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=Cf(),l=this.xo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,o,s),this.No(n,l,c,i).then(h=>(J("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ns("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=gN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=Cf();return new Promise((s,a)=>{const l=new $E;l.setWithCredentials(!0),l.listenOnce(qE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Sc.NO_ERROR:const h=l.getResponseJson();J(Ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case Sc.TIMEOUT:J(Ut,`RPC '${e}' ${o} timed out`),a(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const d=l.getStatus();if(J(Ut,`RPC '${e}' ${o} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const v=function(S){const _=S.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(_)>=0?_:$.UNKNOWN}(g.status);a(new ie(v,g.message))}else a(new ie($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ie($.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{J(Ut,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);J(Ut,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Cf(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=KE(),a=WE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=o.join("");J(Ut,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=s.createWebChannel(h,l);let f=!1,g=!1;const v=new yN({Io:S=>{g?J(Ut,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(f||(J(Ut,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),J(Ut,`RPC '${e}' stream ${i} sending:`,S),d.send(S))},To:()=>d.close()}),b=(S,_,w)=>{S.listen(_,x=>{try{w(x)}catch(k){setTimeout(()=>{throw k},0)}})};return b(d,ja.EventType.OPEN,()=>{g||(J(Ut,`RPC '${e}' stream ${i} transport opened.`),v.yo())}),b(d,ja.EventType.CLOSE,()=>{g||(g=!0,J(Ut,`RPC '${e}' stream ${i} transport closed`),v.So())}),b(d,ja.EventType.ERROR,S=>{g||(g=!0,Ns(Ut,`RPC '${e}' stream ${i} transport errored:`,S),v.So(new ie($.UNAVAILABLE,"The operation could not be completed")))}),b(d,ja.EventType.MESSAGE,S=>{var _;if(!g){const w=S.data[0];Ie(!!w);const x=w,k=x.error||((_=x[0])===null||_===void 0?void 0:_.error);if(k){J(Ut,`RPC '${e}' stream ${i} received error:`,k);const M=k.status;let j=function(T){const A=lt[T];if(A!==void 0)return vT(A)}(M),P=k.message;j===void 0&&(j=$.INTERNAL,P="Unknown error status: "+M+" with message "+k.message),g=!0,v.So(new ie(j,P)),d.close()}else J(Ut,`RPC '${e}' stream ${i} received:`,w),v.bo(w)}}),b(a,HE.STAT_EVENT,S=>{S.stat===em.PROXY?J(Ut,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===em.NOPROXY&&J(Ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.wo()},0),v}}function Af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){return new AO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n,r,i,o,s,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new RT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new ie($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wN extends IT{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=IO(this.serializer,e),r=function(o){if(!("targetChange"in o))return ce.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ce.min():s.readTime?hr(s.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=um(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=im(l)?{documents:NO(o,l)}:{query:VO(o,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=_T(o,s.resumeToken);const c=sm(o,s.expectedCount);c!==null&&(a.expectedCount=c)}else if(s.snapshotVersion.compareTo(ce.min())>0){a.readTime=Eh(o,s.snapshotVersion.toTimestamp());const c=sm(o,s.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=LO(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=um(this.serializer),n.removeTarget=e,this.a_(n)}}class bN extends IT{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=OO(e.writeResults,e.commitTime),r=hr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=um(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DO(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,am(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie($.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,am(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie($.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class xN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($r(n),this.D_=!1):J("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Oo(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=he(l);c.L_.add(4),await ru(c),c.q_.set("Unknown"),c.L_.delete(4),await vd(c)}(this))})}),this.q_=new xN(r,i)}}async function vd(t){if(Oo(t))for(const e of t.B_)await e(!0)}async function ru(t){for(const e of t.B_)await e(!1)}function DT(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ay(n)?sy(n):Js(n).r_()&&oy(n,e))}function iy(t,e){const n=he(t),r=Js(n);n.N_.delete(e),r.r_()&&OT(n,e),n.N_.size===0&&(r.r_()?r.o_():Oo(n)&&n.q_.set("Unknown"))}function oy(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Js(t).A_(e)}function OT(t,e){t.Q_.xe(e),Js(t).R_(e)}function sy(t){t.Q_=new TO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Js(t).start(),t.q_.v_()}function ay(t){return Oo(t)&&!Js(t).n_()&&t.N_.size>0}function Oo(t){return he(t).L_.size===0}function NT(t){t.Q_=void 0}async function TN(t){t.q_.set("Online")}async function SN(t){t.N_.forEach((e,n)=>{oy(t,e)})}async function PN(t,e){NT(t),ay(t)?(t.q_.M_(e),sy(t)):t.q_.set("Unknown")}async function CN(t,e,n){if(t.q_.set("Online"),e instanceof bT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Th(t,r)}else if(e instanceof Ac?t.Q_.Ke(e):e instanceof wT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await kT(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=o.N_.get(c);h&&o.N_.set(c,h.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,c)=>{const h=o.N_.get(l);if(!h)return;o.N_.set(l,h.withResumeToken(Ot.EMPTY_BYTE_STRING,h.snapshotVersion)),OT(o,l);const d=new ci(h.target,l,c,h.sequenceNumber);oy(o,d)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Th(t,r)}}async function Th(t,e,n){if(!eu(e))throw e;t.L_.add(1),await ru(t),t.q_.set("Offline"),n||(n=()=>kT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vd(t)})}function VT(t,e){return e().catch(n=>Th(t,n,e))}async function wd(t){const e=he(t),n=Ci(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;AN(e);)try{const i=await hN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,kN(e,i)}catch(i){await Th(e,i)}MT(e)&&LT(e)}function AN(t){return Oo(t)&&t.O_.length<10}function kN(t,e){t.O_.push(e);const n=Ci(t);n.r_()&&n.V_&&n.m_(e.mutations)}function MT(t){return Oo(t)&&!Ci(t).n_()&&t.O_.length>0}function LT(t){Ci(t).start()}async function RN(t){Ci(t).p_()}async function IN(t){const e=Ci(t);for(const n of t.O_)e.m_(n.mutations)}async function DN(t,e,n){const r=t.O_.shift(),i=Jg.from(r,e,n);await VT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wd(t)}async function ON(t,e){e&&Ci(t).V_&&await async function(r,i){if(function(s){return _O(s)&&s!==$.ABORTED}(i.code)){const o=r.O_.shift();Ci(r).s_(),await VT(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await wd(r)}}(t,e),MT(t)&&LT(t)}async function B1(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Oo(n);n.L_.add(3),await ru(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vd(n)}async function NN(t,e){const n=he(t);e?(n.L_.delete(2),await vd(n)):e||(n.L_.add(2),await ru(n),n.q_.set("Unknown"))}function Js(t){return t.K_||(t.K_=function(n,r,i){const o=he(n);return o.w_(),new wN(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:TN.bind(null,t),Ro:SN.bind(null,t),mo:PN.bind(null,t),d_:CN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ay(t)?sy(t):t.q_.set("Unknown")):(await t.K_.stop(),NT(t))})),t.K_}function Ci(t){return t.U_||(t.U_=function(n,r,i){const o=he(n);return o.w_(),new bN(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:RN.bind(null,t),mo:ON.bind(null,t),f_:IN.bind(null,t),g_:DN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await wd(t)):(await t.U_.stop(),t.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new ly(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uy(t,e){if($r("AsyncQueue",`${e}: ${t}`),eu(t))return new ie($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Fa(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new Es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.W_=new Ze(oe.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,i,o,s,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Fs(e,n,Es.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class MN{constructor(){this.queries=q1(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=he(n),o=i.queries;i.queries=q1(),o.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ie($.ABORTED,"Firestore shutting down"))}}function q1(){return new Ys(t=>oT(t),dd)}async function jT(t,e){const n=he(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new VN,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=uy(s,`Initialization of query '${Qo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&cy(n)}async function FT(t,e){const n=he(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LN(t,e){const n=he(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&cy(n)}function jN(t,e,n){const r=he(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function cy(t){t.Y_.forEach(e=>{e.next()})}var hm,H1;(H1=hm||(hm={})).ea="default",H1.Cache="cache";class zT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==hm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.key=e}}class BT{constructor(e){this.key=e}}class FN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=sT(e),this.Ra=new Es(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new $1,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const f=i.get(h),g=fd(this.query,d)?d:null,v=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;f&&g?f.data.isEqual(g.data)?v!==b&&(r.track({type:3,doc:g}),S=!0):this.ga(f,g)||(r.track({type:2,doc:g}),S=!0,(l&&this.Aa(g,l)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),S=!0):f&&!g&&(r.track({type:1,doc:f}),S=!0,(l||c)&&(a=!0)),S&&(g?(s=s.add(g),o=b?o.add(h):o.delete(h)):(s=s.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const h=this.query.limitType==="F"?s.last():s.first();s=s.delete(h.key),o=o.delete(h.key),r.track({type:1,doc:h})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((h,d)=>function(g,v){const b=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return b(g)-b(v)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,s.length!==0||c?{snapshot:new Fs(this.query,e.Ra,o,s,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $1,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new BT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new UT(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Fs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UN{constructor(e){this.key=e,this.va=!1}}class BN{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Ys(a=>oT(a),dd),this.Ma=new Map,this.xa=new Set,this.Oa=new Ze(oe.comparator),this.Na=new Map,this.La=new ty,this.Ba={},this.ka=new Map,this.qa=js.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $N(t,e,n=!0){const r=GT(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await $T(r,e,n,!0),i}async function qN(t,e){const n=GT(t);await $T(n,e,!0,!1)}async function $T(t,e,n,r){const i=await dN(t.localStore,cr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await HN(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&DT(t.remoteStore,i),a}async function HN(t,e,n,r,i){t.Ka=(d,f,g)=>async function(b,S,_,w){let x=S.view.ma(_);x.ns&&(x=await F1(b.localStore,S.query,!1).then(({documents:P})=>S.view.ma(P,x)));const k=w&&w.targetChanges.get(S.targetId),M=w&&w.targetMismatches.get(S.targetId)!=null,j=S.view.applyChanges(x,b.isPrimaryClient,k,M);return K1(b,S.targetId,j.wa),j.snapshot}(t,d,f,g);const o=await F1(t.localStore,e,!0),s=new FN(e,o.Ts),a=s.ma(o.documents),l=nu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(a,t.isPrimaryClient,l);K1(t,n,c.wa);const h=new zN(e,n,s);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function WN(t,e,n){const r=he(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!dd(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await cm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&iy(r.remoteStore,i.targetId),dm(r,i.targetId)}).catch(Zl)):(dm(r,i.targetId),await cm(r.localStore,i.targetId,!0))}async function KN(t,e){const n=he(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),iy(n.remoteStore,r.targetId))}async function GN(t,e,n){const r=t4(t);try{const i=await function(s,a){const l=he(s),c=yt.now(),h=a.reduce((g,v)=>g.add(v.key),ve());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=qr(),b=ve();return l.cs.getEntries(g,h).next(S=>{v=S,v.forEach((_,w)=>{w.isValidDocument()||(b=b.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,v)).next(S=>{d=S;const _=[];for(const w of a){const x=gO(w,d.get(w.key).overlayedDocument);x!=null&&_.push(new Do(w.key,x,JE(x.value.mapValue),Ir.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,_,a)}).next(S=>{f=S;const _=S.applyToLocalDocumentSet(d,b);return l.documentOverlayCache.saveOverlays(g,S.batchId,_)})}).then(()=>({batchId:f.batchId,changes:lT(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let c=s.Ba[s.currentUser.toKey()];c||(c=new Ze(Ae)),c=c.insert(a,l),s.Ba[s.currentUser.toKey()]=c}(r,i.batchId,n),await iu(r,i.changes),await wd(r.remoteStore)}catch(i){const o=uy(i,"Failed to persist write");n.reject(o)}}async function qT(t,e){const n=he(t);try{const r=await uN(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Ie(s.va):i.removedDocuments.size>0&&(Ie(s.va),s.va=!1))}),await iu(n,r,e)}catch(r){await Zl(r)}}function W1(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=he(s);l.onlineState=a;let c=!1;l.queries.forEach((h,d)=>{for(const f of d.j_)f.Z_(a)&&(c=!0)}),c&&cy(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QN(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new Ze(oe.comparator);s=s.insert(o,Ht.newNoDocument(o,ce.min()));const a=ve().add(o),l=new gd(ce.min(),new Map,new Ze(Ae),s,a);await qT(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),hy(r)}else await cm(r.localStore,e,!1).then(()=>dm(r,e,n)).catch(Zl)}async function XN(t,e){const n=he(t),r=e.batch.batchId;try{const i=await lN(n.localStore,e);WT(n,r,null),HT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await iu(n,i)}catch(i){await Zl(i)}}async function YN(t,e,n){const r=he(t);try{const i=await function(s,a){const l=he(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(Ie(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);WT(r,e,n),HT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await iu(r,i)}catch(i){await Zl(i)}}function HT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function WT(t,e,n){const r=he(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function dm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||KT(t,r)})}function KT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(iy(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),hy(t))}function K1(t,e,n){for(const r of n)r instanceof UT?(t.La.addReference(r.key,e),JN(t,r)):r instanceof BT?(J("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||KT(t,r.key)):le()}function JN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(J("SyncEngine","New document in limbo: "+n),t.xa.add(r),hy(t))}function hy(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new oe(We.fromString(e)),r=t.qa.next();t.Na.set(r,new UN(n)),t.Oa=t.Oa.insert(n,r),DT(t.remoteStore,new ci(cr(Xg(n.path)),r,"TargetPurposeLimboResolution",qg.oe))}}async function iu(t,e,n){const r=he(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const d=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=ry.Wi(l.targetId,c);o.push(d)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(l,c){const h=he(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>q.forEach(c,f=>q.forEach(f.$i,g=>h.persistence.referenceDelegate.addReference(d,f.targetId,g)).next(()=>q.forEach(f.Ui,g=>h.persistence.referenceDelegate.removeReference(d,f.targetId,g)))))}catch(d){if(!eu(d))throw d;J("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const f=d.targetId;if(!d.fromCache){const g=h.os.get(f),v=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(v);h.os=h.os.insert(f,b)}}}(r.localStore,o))}async function ZN(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await AT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(l=>{l.reject(new ie($.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await iu(n,r.hs)}}function e4(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let i=ve();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function GT(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=e4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QN.bind(null,e),e.Ca.d_=LN.bind(null,e.eventManager),e.Ca.$a=jN.bind(null,e.eventManager),e}function t4(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YN.bind(null,e),e}class Sh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return aN(this.persistence,new oN,e.initialUser,this.serializer)}Ga(e){return new nN(ny.Zr,this.serializer)}Wa(e){return new pN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sh.provider={build:()=>new Sh};class fm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>W1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZN.bind(null,this.syncEngine),await NN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MN}()}createDatastore(e){const n=yd(e.databaseInfo.databaseId),r=function(o){return new vN(o)}(e.databaseInfo);return function(o,s,a,l){return new _N(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new EN(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>W1(this.syncEngine,n,0),function(){return U1.D()?new U1:new mN}())}createSyncEngine(e,n){return function(i,o,s,a,l,c,h){const d=new BN(i,o,s,a,l,c);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=he(i);J("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await ru(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}fm.provider={build:()=>new fm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=QE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kf(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function G1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await r4(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>B1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>B1(e.remoteStore,i)),t._onlineComponents=e}async function r4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await kf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ns("Error using user provided cache. Falling back to memory cache: "+n),await kf(t,new Sh)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await kf(t,new Sh);return t._offlineComponents}async function XT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await G1(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await G1(t,new fm))),t._onlineComponents}function i4(t){return XT(t).then(e=>e.syncEngine)}async function YT(t){const e=await XT(t),n=e.eventManager;return n.onListen=$N.bind(null,e.syncEngine),n.onUnlisten=WN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KN.bind(null,e.syncEngine),n}function o4(t,e,n={}){const r=new Rr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,c){const h=new QT({next:f=>{h.Za(),s.enqueueAndForget(()=>FT(o,d));const g=f.docs.has(a);!g&&f.fromCache?c.reject(new ie($.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&l&&l.source==="server"?c.reject(new ie($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),d=new zT(Xg(a.path),h,{includeMetadataChanges:!0,_a:!0});return jT(o,d)}(await YT(t),t.asyncQueue,e,n,r)),r.promise}function s4(t,e,n={}){const r=new Rr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,c){const h=new QT({next:f=>{h.Za(),s.enqueueAndForget(()=>FT(o,d)),f.fromCache&&l.source==="server"?c.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),d=new zT(a,h,{includeMetadataChanges:!0,_a:!0});return jT(o,d)}(await YT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e,n){if(!n)throw new ie($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function a4(t,e,n,r){if(e===!0&&r===!0)throw new ie($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function X1(t){if(!oe.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y1(t){if(oe.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function zs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dy(t);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}a4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new J1({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new J1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TD;switch(r.type){case"firstParty":return new AD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Q1.get(n);r&&(J("ComponentProvider","Removing Datastore"),Q1.delete(n),r.terminate())}(this),Promise.resolve()}}function l4(t,e,n,r={}){var i;const o=(t=zs(t,bd))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=$t.MOCK_USER;else{a=o5(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new $t(c)}t._authCredentials=new SD(new GE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _d(this.firestore,e,this._query)}}class Dn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dn(this.firestore,e,this._key)}}class _i extends _d{constructor(e,n,r){super(e,n,Xg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dn(this.firestore,null,new oe(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function Li(t,e,...n){if(t=Rl(t),ZT("collection","path",e),t instanceof bd){const r=We.fromString(e,...n);return Y1(r),new _i(t,null,r)}{if(!(t instanceof Dn||t instanceof _i))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return Y1(r),new _i(t.firestore,null,r)}}function eS(t,e,...n){if(t=Rl(t),arguments.length===1&&(e=QE.newId()),ZT("doc","path",e),t instanceof bd){const r=We.fromString(e,...n);return X1(r),new Dn(t,null,new oe(r))}{if(!(t instanceof Dn||t instanceof _i))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return X1(r),new Dn(t.firestore,t instanceof _i?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new RT(this,"async_queue_retry"),this.Vu=()=>{const r=Af();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Af();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Rr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!eu(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw $r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ly.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class xd extends bd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Z1,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Z1(e),this._firestoreClient=void 0,await e}}}function tS(t,e){const n=typeof t=="object"?t:pD(),r=typeof t=="string"?t:"(default)",i=cD(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=r5("firestore");o&&l4(i,...o)}return i}function fy(t){if(t._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||u4(t),t._firestoreClient}function u4(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,c,h){return new UD(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,JT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new n4(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(Ot.fromBase64String(e))}catch(n){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=/^__.*__$/;class h4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Do(e,this.data,this.fieldMask,n,this.fieldTransforms):new tu(e,this.data,n,this.fieldTransforms)}}function rS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class yy{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ph(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(rS(this.Cu)&&c4.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class d4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yd(e)}Qu(e,n,r,i=!1){return new yy({Cu:e,methodName:n,qu:r,path:kt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function f4(t){const e=t._freezeSettings(),n=yd(t._databaseId);return new d4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function p4(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);aS("Data must be an object, but it was:",s,r);const a=oS(r,s);let l,c;if(o.merge)l=new Gn(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const d of o.mergeFields){const f=m4(e,d,n);if(!s.contains(f))throw new ie($.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);y4(h,f)||h.push(f)}l=new Gn(h),c=s.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=s.fieldTransforms;return new h4(new kn(a),l,c)}function iS(t,e){if(sS(t=Rl(t)))return aS("Unsupported field value:",e,t),oS(t,e);if(t instanceof nS)return function(r,i){if(!rS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=iS(a,i.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Rl(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=yt.fromDate(r);return{timestampValue:Eh(i.serializer,o)}}if(r instanceof yt){const o=new yt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eh(i.serializer,o)}}if(r instanceof my)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Us)return{bytesValue:_T(i.serializer,r._byteString)};if(r instanceof Dn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ey(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gy)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Yg(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${dy(r)}`)}(t,e)}function oS(t,e){const n={};return XE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(r,i)=>{const o=iS(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function sS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof yt||t instanceof my||t instanceof Us||t instanceof Dn||t instanceof nS||t instanceof gy)}function aS(t,e,n){if(!sS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=dy(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function m4(t,e,n){if((e=Rl(e))instanceof py)return e._internalPath;if(typeof e=="string")return lS(t,e);throw Ph("Field path arguments must be of type string or ",t,!1,void 0,n)}const g4=new RegExp("[~\\*/\\[\\]]");function lS(t,e,n){if(e.search(g4)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new py(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ph(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new ie($.INVALID_ARGUMENT,a+t+l)}function y4(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class v4 extends uS{data(){return super.data()}}function cS(t,e){return typeof e=="string"?lS(t,e):e instanceof py?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b4{convertValue(e,n="none"){switch(ko(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ao(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xs(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>it(s.doubleValue));return new gy(o)}convertGeoPoint(e){return new my(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Nl(e));default:return null}}convertTimestamp(e){const n=Pi(e);return new yt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Ie(CT(r));const i=new Vl(r.get(1),r.get(3)),o=new oe(r.popFirst(5));return i.isEqual(n)||$r(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hS extends uS{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class kc extends hS{data(e={}){return super.data(e)}}class x4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ua(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new kc(this._firestore,this._userDataWriter,r.key,r,new Ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new kc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ua(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new kc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ua(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),h=s.indexOf(a.doc.key)),{type:E4(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function E4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(t){t=zs(t,Dn);const e=zs(t.firestore,xd);return o4(fy(e),t._key).then(n=>C4(e,t,n))}class dS extends b4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dn(this.firestore,null,n)}}function No(t){t=zs(t,_d);const e=zs(t.firestore,xd),n=fy(e),r=new dS(e);return w4(t._query),s4(n,t._query).then(i=>new x4(e,r,t,i))}function S4(t,e){const n=zs(t.firestore,xd),r=eS(t),i=_4(t.converter,e);return P4(n,[p4(f4(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ir.exists(!1))]).then(()=>r)}function P4(t,e){return function(r,i){const o=new Rr;return r.asyncQueue.enqueueAndForget(async()=>GN(await i4(r),i,o)),o.promise}(fy(t),e)}function C4(t,e,n){const r=n.docs.get(e._key),i=new dS(t);return new hS(t,i,e._key,r,new Ua(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Qs=i})(fD),yh(new Il("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new xd(new PD(r.getProvider("auth-internal")),new RD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vl(c.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),xs(v1,"4.7.3",e),xs(v1,"4.7.3","esm2017")})();var A4="firebase",k4="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xs(A4,k4,"app");const R4={apiKey:"AIzaSyBE81rlHEfZPxWz6UfvXd2grfFFrGz-rpM",authDomain:"ibmu-4e64e.firebaseapp.com",projectId:"ibmu-4e64e",storageBucket:"ibmu-4e64e.appspot.com",messagingSenderId:"117476606921",appId:"1:117476606921:web:b2ac4861d649632cae1e18",measurementId:"G-J2773JSV2N"},I4=FE(R4),ji=tS(I4),Rc=Fg("data/Headquarter",async()=>{const t=await No(Li(ji,"Headquarter")),e=[];return t.forEach(n=>{e.push({id:n.id,...n.data()})}),e[0]}),D4=zg({name:"data",initialState:{headquarterData:[],loading:!1,error:null},reducers:{},extraReducers:t=>{t.addCase(Rc.pending,e=>{e.loading=!0}).addCase(Rc.fulfilled,(e,n)=>{e.headquarterData=n.payload,e.loading=!1,e.error=null}).addCase(Rc.rejected,(e,n)=>{e.error=n.error.message,e.loading=!1})}}),O4=D4.reducer,Ic=Fg("data/AboutUs",async()=>{const t=await No(Li(ji,"aboutUs")),e=[];return t.forEach(n=>{e.push({id:n.id,...n.data()})}),e[0]}),N4=zg({name:"data",initialState:{aboutUsData:null,loading:!1,error:null},reducers:{},extraReducers:t=>{t.addCase(Ic.pending,e=>{e.loading=!0}).addCase(Ic.fulfilled,(e,n)=>{e.aboutUsData=n.payload,e.loading=!1,e.error=null}).addCase(Ic.rejected,(e,n)=>{e.error=n.error.message,e.loading=!1})}}),V4=N4.reducer,Ch="/assets/logo-D5iu2EfC.jpg",M4="/assets/Flag_of_Iraq.svg-B07QZHQN.png",L4="/assets/Flag_of_UK-BcLj8AEy.png",j4=(...t)=>{console!=null&&console.warn&&(yo(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t))},ew={},pm=(...t)=>{yo(t[0])&&ew[t[0]]||(yo(t[0])&&(ew[t[0]]=new Date),j4(...t))},fS=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},tw=(t,e,n)=>{t.loadNamespaces(e,fS(t,n))},nw=(t,e,n,r)=>{yo(n)&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,fS(t,r))},F4=(t,e,n={})=>!e.languages||!e.languages.length?(pm("i18n.languages were undefined or empty",e.languages),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(r,i)=>{var o;if(((o=n.bindI18n)==null?void 0:o.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,t))return!1}}),yo=t=>typeof t=="string",z4=t=>typeof t=="object"&&t!==null,U4=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,B4={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},$4=t=>B4[t],q4=t=>t.replace(U4,$4);let H4={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:q4};const W4=()=>H4;let K4;const G4=()=>K4,pS=N.createContext();class Q4{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const X4=(t,e)=>{const n=N.useRef();return N.useEffect(()=>{n.current=t},[t,e]),n.current},mS=(t,e,n,r)=>t.getFixedT(e,n,r),Y4=(t,e,n,r)=>N.useCallback(mS(t,e,n,r),[t,e,n,r]),tn=(t,e={})=>{var k,M,j;const{i18n:n}=e,{i18n:r,defaultNS:i}=N.useContext(pS)||{},o=n||r||G4();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new Q4),!o){pm("You will need to pass in an i18next instance by using initReactI18next");const P=(T,A)=>yo(A)?A:z4(A)&&yo(A.defaultValue)?A.defaultValue:Array.isArray(T)?T[T.length-1]:T,m=[P,{},!1];return m.t=P,m.i18n={},m.ready=!1,m}(k=o.options.react)!=null&&k.wait&&pm("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...W4(),...o.options.react,...e},{useSuspense:a,keyPrefix:l}=s;let c=t;c=yo(c)?[c]:c||["translation"],(j=(M=o.reportNamespaces).addUsedNamespaces)==null||j.call(M,c);const h=(o.isInitialized||o.initializedStoreOnce)&&c.every(P=>F4(P,o,s)),d=Y4(o,e.lng||null,s.nsMode==="fallback"?c:c[0],l),f=()=>d,g=()=>mS(o,e.lng||null,s.nsMode==="fallback"?c:c[0],l),[v,b]=N.useState(f);let S=c.join();e.lng&&(S=`${e.lng}${S}`);const _=X4(S),w=N.useRef(!0);N.useEffect(()=>{const{bindI18n:P,bindI18nStore:m}=s;w.current=!0,!h&&!a&&(e.lng?nw(o,e.lng,c,()=>{w.current&&b(g)}):tw(o,c,()=>{w.current&&b(g)})),h&&_&&_!==S&&w.current&&b(g);const T=()=>{w.current&&b(g)};return P&&(o==null||o.on(P,T)),m&&(o==null||o.store.on(m,T)),()=>{w.current=!1,o&&(P==null||P.split(" ").forEach(A=>o.off(A,T))),m&&o&&m.split(" ").forEach(A=>o.store.off(A,T))}},[o,S]),N.useEffect(()=>{w.current&&h&&b(f)},[o,l,h]);const x=[v,o,h];if(x.t=v,x.i18n=o,x.ready=h,h||!h&&!a)return x;throw new Promise(P=>{e.lng?nw(o,e.lng,c,()=>P()):tw(o,c,()=>P())})};function J4({i18n:t,defaultNS:e,children:n}){const r=N.useMemo(()=>({i18n:t,defaultNS:e}),[t,e]);return N.createElement(pS.Provider,{value:r},n)}var gS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rw=me.createContext&&me.createContext(gS),Z4=["attr","size","title"];function eV(t,e){if(t==null)return{};var n=tV(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function tV(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Ah(){return Ah=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ah.apply(this,arguments)}function iw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kh(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?iw(Object(n),!0).forEach(function(r){nV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):iw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nV(t,e,n){return e=rV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rV(t){var e=iV(t,"string");return typeof e=="symbol"?e:e+""}function iV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yS(t){return t&&t.map((e,n)=>me.createElement(e.tag,kh({key:n},e.attr),yS(e.child)))}function er(t){return e=>me.createElement(oV,Ah({attr:kh({},t.attr)},e),yS(t.child))}function oV(t){var e=n=>{var{attr:r,size:i,title:o}=t,s=eV(t,Z4),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),me.createElement("svg",Ah({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:kh(kh({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&me.createElement("title",null,o),t.children)};return rw!==void 0?me.createElement(rw.Consumer,null,n=>e(n)):e(gS)}function sV(t){return er({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(t)}function vS(t){return er({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"},child:[]}]})(t)}function aV(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}function Fl(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const mm=t=>Array.isArray(t);function wS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function zl(t){return typeof t=="string"||Array.isArray(t)}function ow(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function vy(t,e,n,r){if(typeof e=="function"){const[i,o]=ow(r);e=e(n!==void 0?n:t.custom,i,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,o]=ow(r);e=e(n!==void 0?n:t.custom,i,o)}return e}function Ed(t,e,n){const r=t.getProps();return vy(r,e,n!==void 0?n:r.custom,t)}const wy=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],by=["initial",...wy],ou=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fi=new Set(ou),Dr=t=>t*1e3,Or=t=>t/1e3,lV={type:"spring",stiffness:500,damping:25,restSpeed:10},uV=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),cV={type:"keyframes",duration:.8},hV={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dV=(t,{keyframes:e})=>e.length>2?cV:Fi.has(t)?t.startsWith("scale")?uV(e[1]):lV:hV;function _y(t,e){return t?t[e]||t.default||t:void 0}const fV={skipAnimations:!1,useManualTiming:!1},pV=t=>t!==null;function Td(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(pV),o=e&&n!=="loop"&&e%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Kt=t=>t;function mV(t){let e=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(c){o.has(c)&&(l.schedule(c),t()),c(s)}const l={schedule:(c,h=!1,d=!1)=>{const g=d&&r?e:n;return h&&o.add(c),g.has(c)||g.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(s=c,r){i=!0;return}r=!0,[e,n]=[n,e],n.clear(),e.forEach(a),r=!1,i&&(i=!1,l.process(c))}};return l}const ec=["read","resolveKeyframes","update","preRender","render","postRender"],gV=40;function bS(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=ec.reduce((_,w)=>(_[w]=mV(o),_),{}),{read:a,resolveKeyframes:l,update:c,preRender:h,render:d,postRender:f}=s,g=()=>{const _=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(_-i.timestamp,gV),1),i.timestamp=_,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),h.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(g))},v=()=>{n=!0,r=!0,i.isProcessing||t(g)};return{schedule:ec.reduce((_,w)=>{const x=s[w];return _[w]=(k,M=!1,j=!1)=>(n||v(),x.schedule(k,M,j)),_},{}),cancel:_=>{for(let w=0;w<ec.length;w++)s[ec[w]].cancel(_)},state:i,steps:s}}const{schedule:Ne,cancel:Ai,state:Ct,steps:Rf}=bS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Kt,!0),_S=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,yV=1e-7,vV=12;function wV(t,e,n,r,i){let o,s,a=0;do s=e+(n-e)/2,o=_S(s,r,i)-t,o>0?n=s:e=s;while(Math.abs(o)>yV&&++a<vV);return s}function su(t,e,n,r){if(t===e&&n===r)return Kt;const i=o=>wV(o,0,1,t,n);return o=>o===0||o===1?o:_S(i(o),e,r)}const xS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ES=t=>e=>1-t(1-e),TS=su(.33,1.53,.69,.99),xy=ES(TS),SS=xS(xy),PS=t=>(t*=2)<1?.5*xy(t):.5*(2-Math.pow(2,-10*(t-1))),Ey=t=>1-Math.sin(Math.acos(t)),CS=ES(Ey),AS=xS(Ey),kS=t=>/^0[^.\s]+$/u.test(t);function bV(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||kS(t):!0}let gm=Kt;const RS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),IS=t=>e=>typeof e=="string"&&e.startsWith(t),DS=IS("--"),_V=IS("var(--"),Ty=t=>_V(t)?xV.test(t.split("/*")[0].trim()):!1,xV=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,EV=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TV(t){const e=EV.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function OS(t,e,n=1){const[r,i]=TV(t);if(!r)return;const o=window.getComputedStyle(e).getPropertyValue(r);if(o){const s=o.trim();return RS(s)?parseFloat(s):s}return Ty(i)?OS(i,e,n+1):i}const ki=(t,e,n)=>n>e?e:n<t?t:n,Zs={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ul={...Zs,transform:t=>ki(0,1,t)},tc={...Zs,default:1},au=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ni=au("deg"),dr=au("%"),se=au("px"),SV=au("vh"),PV=au("vw"),sw={...dr,parse:t=>dr.parse(t)/100,transform:t=>dr.transform(t*100)},CV=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),aw=t=>t===Zs||t===se,lw=(t,e)=>parseFloat(t.split(", ")[e]),uw=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return lw(i[1],e);{const o=r.match(/^matrix\((.+)\)$/u);return o?lw(o[1],t):0}},AV=new Set(["x","y","z"]),kV=ou.filter(t=>!AV.has(t));function RV(t){const e=[];return kV.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Bs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:uw(4,13),y:uw(5,14)};Bs.translateX=Bs.x;Bs.translateY=Bs.y;const NS=t=>e=>e.test(t),IV={test:t=>t==="auto",parse:t=>t},VS=[Zs,se,dr,ni,PV,SV,IV],cw=t=>VS.find(NS(t)),vo=new Set;let ym=!1,vm=!1;function MS(){if(vm){const t=Array.from(vo).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=RV(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}vm=!1,ym=!1,vo.forEach(t=>t.complete()),vo.clear()}function LS(){vo.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(vm=!0)})}function DV(){LS(),MS()}class Sy{constructor(e,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(vo.add(this),ym||(ym=!0,Ne.read(LS),Ne.resolveKeyframes(MS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;for(let o=0;o<e.length;o++)if(e[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=e[e.length-1];if(s!==void 0)e[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),i&&s===void 0&&i.set(e[0])}else e[o]=e[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),vo.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,vo.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ol=t=>Math.round(t*1e5)/1e5,Py=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function OV(t){return t==null}const NV=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cy=(t,e)=>n=>!!(typeof n=="string"&&NV.test(n)&&n.startsWith(t)||e&&!OV(n)&&Object.prototype.hasOwnProperty.call(n,e)),jS=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Py);return{[t]:parseFloat(i),[e]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},VV=t=>ki(0,255,t),If={...Zs,transform:t=>Math.round(VV(t))},fo={test:Cy("rgb","red"),parse:jS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+If.transform(t)+", "+If.transform(e)+", "+If.transform(n)+", "+ol(Ul.transform(r))+")"};function MV(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const wm={test:Cy("#"),parse:MV,transform:fo.transform},hs={test:Cy("hsl","hue"),parse:jS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+dr.transform(ol(e))+", "+dr.transform(ol(n))+", "+ol(Ul.transform(r))+")"},Bt={test:t=>fo.test(t)||wm.test(t)||hs.test(t),parse:t=>fo.test(t)?fo.parse(t):hs.test(t)?hs.parse(t):wm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?fo.transform(t):hs.transform(t)},LV=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function jV(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Py))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(LV))===null||n===void 0?void 0:n.length)||0)>0}const FS="number",zS="color",FV="var",zV="var(",hw="${}",UV=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Bl(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=e.replace(UV,l=>(Bt.test(l)?(r.color.push(o),i.push(zS),n.push(Bt.parse(l))):l.startsWith(zV)?(r.var.push(o),i.push(FV),n.push(l)):(r.number.push(o),i.push(FS),n.push(parseFloat(l))),++o,hw)).split(hw);return{values:n,split:a,indexes:r,types:i}}function US(t){return Bl(t).values}function BS(t){const{split:e,types:n}=Bl(t),r=e.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=e[s],i[s]!==void 0){const a=n[s];a===FS?o+=ol(i[s]):a===zS?o+=Bt.transform(i[s]):o+=i[s]}return o}}const BV=t=>typeof t=="number"?0:t;function $V(t){const e=US(t);return BS(t)(e.map(BV))}const Ri={test:jV,parse:US,createTransformer:BS,getAnimatableNone:$V},qV=new Set(["brightness","contrast","saturate","opacity"]);function HV(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Py)||[];if(!r)return t;const i=n.replace(r,"");let o=qV.has(e)?1:0;return r!==n&&(o*=100),e+"("+o+i+")"}const WV=/\b([a-z-]*)\(.*?\)/gu,bm={...Ri,getAnimatableNone:t=>{const e=t.match(WV);return e?e.map(HV).join(" "):t}},KV={borderWidth:se,borderTopWidth:se,borderRightWidth:se,borderBottomWidth:se,borderLeftWidth:se,borderRadius:se,radius:se,borderTopLeftRadius:se,borderTopRightRadius:se,borderBottomRightRadius:se,borderBottomLeftRadius:se,width:se,maxWidth:se,height:se,maxHeight:se,top:se,right:se,bottom:se,left:se,padding:se,paddingTop:se,paddingRight:se,paddingBottom:se,paddingLeft:se,margin:se,marginTop:se,marginRight:se,marginBottom:se,marginLeft:se,backgroundPositionX:se,backgroundPositionY:se},GV={rotate:ni,rotateX:ni,rotateY:ni,rotateZ:ni,scale:tc,scaleX:tc,scaleY:tc,scaleZ:tc,skew:ni,skewX:ni,skewY:ni,distance:se,translateX:se,translateY:se,translateZ:se,x:se,y:se,z:se,perspective:se,transformPerspective:se,opacity:Ul,originX:sw,originY:sw,originZ:se},dw={...Zs,transform:Math.round},Ay={...KV,...GV,zIndex:dw,size:se,fillOpacity:Ul,strokeOpacity:Ul,numOctaves:dw},QV={...Ay,color:Bt,backgroundColor:Bt,outlineColor:Bt,fill:Bt,stroke:Bt,borderColor:Bt,borderTopColor:Bt,borderRightColor:Bt,borderBottomColor:Bt,borderLeftColor:Bt,filter:bm,WebkitFilter:bm},ky=t=>QV[t];function $S(t,e){let n=ky(t);return n!==bm&&(n=Ri),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const XV=new Set(["auto","none","0"]);function YV(t,e,n){let r=0,i;for(;r<t.length&&!i;){const o=t[r];typeof o=="string"&&!XV.has(o)&&Bl(o).values.length&&(i=t[r]),r++}if(i&&n)for(const o of e)t[o]=$S(n,i)}class qS extends Sy{constructor(e,n,r,i,o){super(e,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Ty(c))){const h=OS(c,n.current);h!==void 0&&(e[l]=h),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!CV.has(r)||e.length!==2)return;const[i,o]=e,s=cw(i),a=cw(o);if(s!==a)if(aw(s)&&aw(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)bV(e[i])&&r.push(i);r.length&&YV(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bs[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Bs[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Ry(t){return typeof t=="function"}let Dc;function JV(){Dc=void 0}const fr={now:()=>(Dc===void 0&&fr.set(Ct.isProcessing||fV.useManualTiming?Ct.timestamp:performance.now()),Dc),set:t=>{Dc=t,queueMicrotask(JV)}},fw=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ri.test(t)||t==="0")&&!t.startsWith("url("));function ZV(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function eM(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const o=t[t.length-1],s=fw(i,e),a=fw(o,e);return!s||!a?!1:ZV(t)||(n==="spring"||Ry(n))&&r}const tM=40;class HS{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=fr.now(),this.options={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>tM?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&DV(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=fr.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!eM(e,r,i,o))if(s)this.options.duration=0;else{l==null||l(Td(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const h=this.initPlayback(e,n);h!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function WS(t,e){return e?t*(1e3/e):0}const nM=5;function KS(t,e,n){const r=Math.max(e-nM,0);return WS(n-t(r),e-r)}const Df=.001,rM=.01,iM=10,oM=.05,sM=1;function aM({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,o,s=1-e;s=ki(oM,sM,s),t=ki(rM,iM,Or(t)),s<1?(i=c=>{const h=c*s,d=h*t,f=h-n,g=_m(c,s),v=Math.exp(-d);return Df-f/g*v},o=c=>{const d=c*s*t,f=d*n+n,g=Math.pow(s,2)*Math.pow(c,2)*t,v=Math.exp(-d),b=_m(Math.pow(c,2),s);return(-i(c)+Df>0?-1:1)*((f-g)*v)/b}):(i=c=>{const h=Math.exp(-c*t),d=(c-n)*t+1;return-Df+h*d},o=c=>{const h=Math.exp(-c*t),d=(n-c)*(t*t);return h*d});const a=5/t,l=uM(i,o,a);if(t=Dr(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:t}}}const lM=12;function uM(t,e,n){let r=n;for(let i=1;i<lM;i++)r=r-t(r)/e(r);return r}function _m(t,e){return t*Math.sqrt(1-e*e)}const cM=["duration","bounce"],hM=["stiffness","damping","mass"];function pw(t,e){return e.some(n=>t[n]!==void 0)}function dM(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!pw(t,hM)&&pw(t,cM)){const n=aM(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function GS({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],o=t[t.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:h,velocity:d,isResolvedFromDuration:f}=dM({...r,velocity:-Or(r.velocity||0)}),g=d||0,v=l/(2*Math.sqrt(a*c)),b=o-i,S=Or(Math.sqrt(a/c)),_=Math.abs(b)<5;n||(n=_?.01:2),e||(e=_?.005:.5);let w;if(v<1){const x=_m(S,v);w=k=>{const M=Math.exp(-v*S*k);return o-M*((g+v*S*b)/x*Math.sin(x*k)+b*Math.cos(x*k))}}else if(v===1)w=x=>o-Math.exp(-S*x)*(b+(g+S*b)*x);else{const x=S*Math.sqrt(v*v-1);w=k=>{const M=Math.exp(-v*S*k),j=Math.min(x*k,300);return o-M*((g+v*S*b)*Math.sinh(j)+x*b*Math.cosh(j))/x}}return{calculatedDuration:f&&h||null,next:x=>{const k=w(x);if(f)s.done=x>=h;else{let M=0;v<1&&(M=x===0?Dr(g):KS(w,x,k));const j=Math.abs(M)<=n,P=Math.abs(o-k)<=e;s.done=j&&P}return s.value=s.done?o:k,s}}}function mw({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:h}){const d=t[0],f={done:!1,value:d},g=m=>a!==void 0&&m<a||l!==void 0&&m>l,v=m=>a===void 0?l:l===void 0||Math.abs(a-m)<Math.abs(l-m)?a:l;let b=n*e;const S=d+b,_=s===void 0?S:s(S);_!==S&&(b=_-d);const w=m=>-b*Math.exp(-m/r),x=m=>_+w(m),k=m=>{const T=w(m),A=x(m);f.done=Math.abs(T)<=c,f.value=f.done?_:A};let M,j;const P=m=>{g(f.value)&&(M=m,j=GS({keyframes:[f.value,v(f.value)],velocity:KS(x,m,f.value),damping:i,stiffness:o,restDelta:c,restSpeed:h}))};return P(0),{calculatedDuration:null,next:m=>{let T=!1;return!j&&M===void 0&&(T=!0,k(m),P(m)),M!==void 0&&m>=M?j.next(m-M):(!T&&k(m),f)}}}const fM=su(.42,0,1,1),pM=su(0,0,.58,1),QS=su(.42,0,.58,1),mM=t=>Array.isArray(t)&&typeof t[0]!="number",Iy=t=>Array.isArray(t)&&typeof t[0]=="number",gw={linear:Kt,easeIn:fM,easeInOut:QS,easeOut:pM,circIn:Ey,circInOut:AS,circOut:CS,backIn:xy,backInOut:SS,backOut:TS,anticipate:PS},yw=t=>{if(Iy(t)){gm(t.length===4);const[e,n,r,i]=t;return su(e,n,r,i)}else if(typeof t=="string")return gm(gw[t]!==void 0),gw[t];return t},gM=(t,e)=>n=>e(t(n)),Nr=(...t)=>t.reduce(gM),$s=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Xe=(t,e,n)=>t+(e-t)*n;function Of(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function yM({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,o=0,s=0;if(!e)i=o=s=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Of(l,a,t+1/3),o=Of(l,a,t),s=Of(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Rh(t,e){return n=>n>0?e:t}const Nf=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},vM=[wm,fo,hs],wM=t=>vM.find(e=>e.test(t));function vw(t){const e=wM(t);if(!e)return!1;let n=e.parse(t);return e===hs&&(n=yM(n)),n}const ww=(t,e)=>{const n=vw(t),r=vw(e);if(!n||!r)return Rh(t,e);const i={...n};return o=>(i.red=Nf(n.red,r.red,o),i.green=Nf(n.green,r.green,o),i.blue=Nf(n.blue,r.blue,o),i.alpha=Xe(n.alpha,r.alpha,o),fo.transform(i))},xm=new Set(["none","hidden"]);function bM(t,e){return xm.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function _M(t,e){return n=>Xe(t,e,n)}function Dy(t){return typeof t=="number"?_M:typeof t=="string"?Ty(t)?Rh:Bt.test(t)?ww:TM:Array.isArray(t)?XS:typeof t=="object"?Bt.test(t)?ww:xM:Rh}function XS(t,e){const n=[...t],r=n.length,i=t.map((o,s)=>Dy(o)(o,e[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function xM(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=Dy(t[i])(t[i],e[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function EM(t,e){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const s=e.types[o],a=t.indexes[s][i[s]],l=(n=t.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const TM=(t,e)=>{const n=Ri.createTransformer(e),r=Bl(t),i=Bl(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?xm.has(t)&&!i.values.length||xm.has(e)&&!r.values.length?bM(t,e):Nr(XS(EM(r,i),i.values),n):Rh(t,e)};function YS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Xe(t,e,n):Dy(t)(t,e)}function SM(t,e,n){const r=[],i=n||YS,o=t.length-1;for(let s=0;s<o;s++){let a=i(t[s],t[s+1]);if(e){const l=Array.isArray(e)?e[s]||Kt:e;a=Nr(l,a)}r.push(a)}return r}function PM(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const o=t.length;if(gm(o===e.length),o===1)return()=>e[0];if(o===2&&t[0]===t[1])return()=>e[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const s=SM(e,r,i),a=s.length,l=c=>{let h=0;if(a>1)for(;h<t.length-2&&!(c<t[h+1]);h++);const d=$s(t[h],t[h+1],c);return s[h](d)};return n?c=>l(ki(t[0],t[o-1],c)):l}function CM(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=$s(0,e,r);t.push(Xe(n,1,i))}}function AM(t){const e=[0];return CM(e,t.length-1),e}function kM(t,e){return t.map(n=>n*e)}function RM(t,e){return t.map(()=>e||QS).splice(0,t.length-1)}function Ih({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=mM(r)?r.map(yw):yw(r),o={done:!1,value:e[0]},s=kM(n&&n.length===e.length?n:AM(e),t),a=PM(s,e,{ease:Array.isArray(i)?i:RM(e,i)});return{calculatedDuration:t,next:l=>(o.value=a(l),o.done=l>=t,o)}}const bw=2e4;function IM(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<bw;)e+=n,r=t.next(e);return e>=bw?1/0:e}const DM=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Ne.update(e,!0),stop:()=>Ai(e),now:()=>Ct.isProcessing?Ct.timestamp:fr.now()}},OM={decay:mw,inertia:mw,tween:Ih,keyframes:Ih,spring:GS},NM=t=>t/100;class Oy extends HS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||Sy,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=Ry(n)?n:OM[n]||Ih;let l,c;a!==Ih&&typeof e[0]!="number"&&(l=Nr(NM,YS(e[0],e[1])),e=[0,100]);const h=a({...this.options,keyframes:e});o==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-s})),h.calculatedDuration===null&&(h.calculatedDuration=IM(h));const{calculatedDuration:d}=h,f=d+i,g=f*(r+1)-i;return{generator:h,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:g}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:r}=this;if(!r){const{keyframes:m}=this.options;return{done:!0,value:m[m.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:h,resolvedDuration:d}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:g,repeatType:v,repeatDelay:b,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-h/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const _=this.currentTime-f*(this.speed>=0?1:-1),w=this.speed>=0?_<0:_>h;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let x=this.currentTime,k=o;if(g){const m=Math.min(this.currentTime,h)/d;let T=Math.floor(m),A=m%1;!A&&m>=1&&(A=1),A===1&&T--,T=Math.min(T,g+1),!!(T%2)&&(v==="reverse"?(A=1-A,b&&(A-=b/d)):v==="mirror"&&(k=s)),x=ki(0,1,A)*d}const M=w?{done:!1,value:l[0]}:k.next(x);a&&(M.value=a(M.value));let{done:j}=M;!w&&c!==null&&(j=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return P&&i!==void 0&&(M.value=Td(l,this.options,i)),S&&S(M.value),P&&this.finish(),M}get duration(){const{resolved:e}=this;return e?Or(e.calculatedDuration):0}get time(){return Or(this.currentTime)}set time(e){e=Dr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Or(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=DM,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const JS=new Set(["opacity","clipPath","filter","transform"]),VM=10,MM=(t,e)=>{let n="";const r=Math.max(Math.round(e/VM),2);for(let i=0;i<r;i++)n+=t($s(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Ny(t){let e;return()=>(e===void 0&&(e=t()),e)}const LM={linearEasing:void 0};function jM(t,e){const n=Ny(t);return()=>{var r;return(r=LM[e])!==null&&r!==void 0?r:n()}}const Dh=jM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function ZS(t){return!!(typeof t=="function"&&Dh()||!t||typeof t=="string"&&(t in Em||Dh())||Iy(t)||Array.isArray(t)&&t.every(ZS))}const Ba=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,Em={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ba([0,.65,.55,1]),circOut:Ba([.55,0,1,.45]),backIn:Ba([.31,.01,.66,-.59]),backOut:Ba([.33,1.53,.69,.99])};function eP(t,e){if(t)return typeof t=="function"&&Dh()?MM(t,e):Iy(t)?Ba(t):Array.isArray(t)?t.map(n=>eP(n,e)||Em.easeOut):Em[t]}function FM(t,e,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const h=eP(a,i);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function _w(t,e){t.timeline=e,t.onfinish=null}const zM=Ny(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Oh=10,UM=2e4;function BM(t){return Ry(t.type)||t.type==="spring"||!ZS(t.ease)}function $M(t,e){const n=new Oy({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:t[0]};const i=[];let o=0;for(;!r.done&&o<UM;)r=n.sample(o),i.push(r.value),o+=Oh;return{times:void 0,keyframes:i,duration:o-Oh,ease:"linear"}}const tP={anticipate:PS,backInOut:SS,circInOut:AS};function qM(t){return t in tP}class xw extends HS{constructor(e){super(e);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new qS(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(e,n){var r;let{duration:i=300,times:o,ease:s,type:a,motionValue:l,name:c,startTime:h}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof s=="string"&&Dh()&&qM(s)&&(s=tP[s]),BM(this.options)){const{onComplete:f,onUpdate:g,motionValue:v,element:b,...S}=this.options,_=$M(e,S);e=_.keyframes,e.length===1&&(e[1]=e[0]),i=_.duration,o=_.times,s=_.ease,a="keyframes"}const d=FM(l.owner.current,c,e,{...this.options,duration:i,times:o,ease:s});return d.startTime=h??this.calcStartTime(),this.pendingTimeline?(_w(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(Td(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:o,type:a,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Or(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Or(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Dr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Kt;const{animation:r}=n;_w(r,e)}return Kt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:h,onComplete:d,element:f,...g}=this.options,v=new Oy({...g,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),b=Dr(this.time);c.setWithVelocity(v.sample(b-Oh).value,v.sample(b).value,Oh)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=e;return zM()&&r&&JS.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const HM=Ny(()=>window.ScrollTimeline!==void 0);class WM{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e,n){const r=this.animations.map(i=>HM()&&i.attachTimeline?i.attachTimeline(e):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function KM({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...h}){return!!Object.keys(h).length}const Vy=(t,e,n,r={},i,o)=>s=>{const a=_y(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Dr(l);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:i};KM(a)||(h={...h,...dV(t,h)}),h.duration&&(h.duration=Dr(h.duration)),h.repeatDelay&&(h.repeatDelay=Dr(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let d=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(d=!0)),d&&!o&&e.get()!==void 0){const f=Td(h.keyframes,a);if(f!==void 0)return Ne.update(()=>{h.onUpdate(f),h.onComplete()}),new WM([])}return!o&&xw.supports(h)?new xw(h):new Oy(h)},GM=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),QM=t=>mm(t)?t[t.length-1]||0:t;function My(t,e){t.indexOf(e)===-1&&t.push(e)}function Ly(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class jy{constructor(){this.subscriptions=[]}add(e){return My(this.subscriptions,e),()=>Ly(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ew=30,XM=t=>!isNaN(parseFloat(t));class YM{constructor(e,n={}){this.version="11.11.4",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=fr.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=fr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=XM(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new jy);const r=this.events[e].add(n);return e==="change"?()=>{r(),Ne.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=fr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ew)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ew);return WS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function $l(t,e){return new YM(t,e)}function JM(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,$l(n))}function ZM(t,e){const n=Ed(t,e);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=QM(o[s]);JM(t,s,a)}}const Sd=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),eL="framerAppearId",nP="data-"+Sd(eL);function rP(t){return t.props[nP]}const Wt=t=>!!(t&&t.getVelocity);function tL(t){return!!(Wt(t)&&t.add)}function iP(t){if(Fi.has(t))return"transform";if(JS.has(t))return Sd(t)}function Tm(t,e){var n;if(!t.applyWillChange)return;const r=t.getValue("willChange");if(tL(r))return r.add(e);!(!((n=t.props.style)===null||n===void 0)&&n.willChange)&&iP(e)&&t.setStaticValue("willChange","transform")}function nL({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function oP(t,e,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=t.getDefaultTransition(),transitionEnd:a,...l}=e;r&&(s=r);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const d in l){const f=t.getValue(d,(o=t.latestValues[d])!==null&&o!==void 0?o:null),g=l[d];if(g===void 0||h&&nL(h,d))continue;const v={delay:n,..._y(s||{},d)};let b=!1;if(window.MotionHandoffAnimation){const _=rP(t);if(_){const w=window.MotionHandoffAnimation(_,d,Ne);w!==null&&(v.startTime=w,b=!0)}}Tm(t,d),f.start(Vy(d,f,g,t.shouldReduceMotion&&Fi.has(d)?{type:!1}:v,t,b));const S=f.animation;S&&c.push(S)}return a&&Promise.all(c).then(()=>{Ne.update(()=>{a&&ZM(t,a)})}),c}function Sm(t,e,n={}){var r;const i=Ed(t,e,n.type==="exit"?(r=t.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(oP(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:h=0,staggerChildren:d,staggerDirection:f}=o;return rL(t,e,h+c,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,h]=l==="beforeChildren"?[s,a]:[a,s];return c().then(()=>h())}else return Promise.all([s(),a(n.delay)])}function rL(t,e,n=0,r=0,i=1,o){const s=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(iL).forEach((c,h)=>{c.notify("AnimationStart",e),s.push(Sm(c,e,{...o,delay:n+l(h)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(s)}function iL(t,e){return t.sortNodePosition(e)}function oL(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(o=>Sm(t,o,n));r=Promise.all(i)}else if(typeof e=="string")r=Sm(t,e,n);else{const i=typeof e=="function"?Ed(t,e,n.custom):e;r=Promise.all(oP(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const sL=by.length;function sP(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?sP(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<sL;n++){const r=by[n],i=t.props[r];(zl(i)||i===!1)&&(e[r]=i)}return e}const aL=[...wy].reverse(),lL=wy.length;function uL(t){return e=>Promise.all(e.map(({animation:n,options:r})=>oL(t,n,r)))}function cL(t){let e=uL(t),n=Tw(),r=!0;const i=l=>(c,h)=>{var d;const f=Ed(t,h,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:g,transitionEnd:v,...b}=f;c={...c,...b,...v}}return c};function o(l){e=l(t)}function s(l){const{props:c}=t,h=sP(t.parent)||{},d=[],f=new Set;let g={},v=1/0;for(let S=0;S<lL;S++){const _=aL[S],w=n[_],x=c[_]!==void 0?c[_]:h[_],k=zl(x),M=_===l?w.isActive:null;M===!1&&(v=S);let j=x===h[_]&&x!==c[_]&&k;if(j&&r&&t.manuallyAnimateOnMount&&(j=!1),w.protectedKeys={...g},!w.isActive&&M===null||!x&&!w.prevProp||Fl(x)||typeof x=="boolean")continue;const P=hL(w.prevProp,x);let m=P||_===l&&w.isActive&&!j&&k||S>v&&k,T=!1;const A=Array.isArray(x)?x:[x];let I=A.reduce(i(_),{});M===!1&&(I={});const{prevResolvedValues:V={}}=w,R={...V,...I},de=xe=>{m=!0,f.has(xe)&&(T=!0,f.delete(xe)),w.needsAnimating[xe]=!0;const B=t.getValue(xe);B&&(B.liveStyle=!1)};for(const xe in R){const B=I[xe],G=V[xe];if(g.hasOwnProperty(xe))continue;let re=!1;mm(B)&&mm(G)?re=!wS(B,G):re=B!==G,re?B!=null?de(xe):f.add(xe):B!==void 0&&f.has(xe)?de(xe):w.protectedKeys[xe]=!0}w.prevProp=x,w.prevResolvedValues=I,w.isActive&&(g={...g,...I}),r&&t.blockInitialAnimation&&(m=!1),m&&(!(j&&P)||T)&&d.push(...A.map(xe=>({animation:xe,options:{type:_}})))}if(f.size){const S={};f.forEach(_=>{const w=t.getBaseTarget(_),x=t.getValue(_);x&&(x.liveStyle=!0),S[_]=w??null}),d.push({animation:S})}let b=!!d.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(b=!1),r=!1,b?e(d):Promise.resolve()}function a(l,c){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(f=>{var g;return(g=f.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const d=s(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Tw(),r=!0}}}function hL(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!wS(e,t):!1}function Ji(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Tw(){return{animate:Ji(!0),whileInView:Ji(),whileHover:Ji(),whileTap:Ji(),whileDrag:Ji(),whileFocus:Ji(),exit:Ji()}}class zi{constructor(e){this.isMounted=!1,this.node=e}update(){}}class dL extends zi{constructor(e){super(e),e.animationState||(e.animationState=cL(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Fl(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let fL=0;class pL extends zi{constructor(){super(...arguments),this.id=fL++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const mL={animation:{Feature:dL},exit:{Feature:pL}},aP=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Pd(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}const gL=t=>e=>aP(e)&&t(e,Pd(e));function Pr(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function Vr(t,e,n,r){return Pr(t,e,gL(n),r)}const Sw=(t,e)=>Math.abs(t-e);function yL(t,e){const n=Sw(t.x,e.x),r=Sw(t.y,e.y);return Math.sqrt(n**2+r**2)}class lP{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Mf(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=yL(d.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:v}=d,{timestamp:b}=Ct;this.history.push({...v,timestamp:b});const{onStart:S,onMove:_}=this.handlers;f||(S&&S(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Vf(f,this.transformPagePoint),Ne.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Mf(d.type==="pointercancel"?this.lastMoveEventInfo:Vf(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,S),v&&v(d,S)},!aP(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Pd(e),a=Vf(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ct;this.history=[{...l,timestamp:c}];const{onSessionStart:h}=n;h&&h(e,Mf(a,this.history)),this.removeListeners=Nr(Vr(this.contextWindow,"pointermove",this.handlePointerMove),Vr(this.contextWindow,"pointerup",this.handlePointerUp),Vr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ai(this.updatePoint)}}function Vf(t,e){return e?{point:e(t.point)}:t}function Pw(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Mf({point:t},e){return{point:t,delta:Pw(t,uP(e)),offset:Pw(t,vL(e)),velocity:wL(e,.1)}}function vL(t){return t[0]}function uP(t){return t[t.length-1]}function wL(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=uP(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Dr(e)));)n--;if(!r)return{x:0,y:0};const o=Or(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function cP(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Cw=cP("dragHorizontal"),Aw=cP("dragVertical");function hP(t){let e=!1;if(t==="y")e=Aw();else if(t==="x")e=Cw();else{const n=Cw(),r=Aw();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function dP(){const t=hP(!0);return t?(t(),!1):!0}function ds(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const fP=1e-4,bL=1-fP,_L=1+fP,pP=.01,xL=0-pP,EL=0+pP;function wn(t){return t.max-t.min}function TL(t,e,n){return Math.abs(t-e)<=n}function kw(t,e,n,r=.5){t.origin=r,t.originPoint=Xe(e.min,e.max,t.origin),t.scale=wn(n)/wn(e),t.translate=Xe(n.min,n.max,t.origin)-t.originPoint,(t.scale>=bL&&t.scale<=_L||isNaN(t.scale))&&(t.scale=1),(t.translate>=xL&&t.translate<=EL||isNaN(t.translate))&&(t.translate=0)}function sl(t,e,n,r){kw(t.x,e.x,n.x,r?r.originX:void 0),kw(t.y,e.y,n.y,r?r.originY:void 0)}function Rw(t,e,n){t.min=n.min+e.min,t.max=t.min+wn(e)}function SL(t,e,n){Rw(t.x,e.x,n.x),Rw(t.y,e.y,n.y)}function Iw(t,e,n){t.min=e.min-n.min,t.max=t.min+wn(e)}function al(t,e,n){Iw(t.x,e.x,n.x),Iw(t.y,e.y,n.y)}function PL(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Xe(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Xe(n,t,r.max):Math.min(t,n)),t}function Dw(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function CL(t,{top:e,left:n,bottom:r,right:i}){return{x:Dw(t.x,n,i),y:Dw(t.y,e,r)}}function Ow(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function AL(t,e){return{x:Ow(t.x,e.x),y:Ow(t.y,e.y)}}function kL(t,e){let n=.5;const r=wn(t),i=wn(e);return i>r?n=$s(e.min,e.max-r,t.min):r>i&&(n=$s(t.min,t.max-i,e.min)),ki(0,1,n)}function RL(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Pm=.35;function IL(t=Pm){return t===!1?t=0:t===!0&&(t=Pm),{x:Nw(t,"left","right"),y:Nw(t,"top","bottom")}}function Nw(t,e,n){return{min:Vw(t,e),max:Vw(t,n)}}function Vw(t,e){return typeof t=="number"?t:t[e]||0}const Mw=()=>({translate:0,scale:1,origin:0,originPoint:0}),fs=()=>({x:Mw(),y:Mw()}),Lw=()=>({min:0,max:0}),rt=()=>({x:Lw(),y:Lw()});function Pn(t){return[t("x"),t("y")]}function mP({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function DL({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function OL(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Lf(t){return t===void 0||t===1}function Cm({scale:t,scaleX:e,scaleY:n}){return!Lf(t)||!Lf(e)||!Lf(n)}function io(t){return Cm(t)||gP(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function gP(t){return jw(t.x)||jw(t.y)}function jw(t){return t&&t!=="0%"}function Nh(t,e,n){const r=t-n,i=e*r;return n+i}function Fw(t,e,n,r,i){return i!==void 0&&(t=Nh(t,i,r)),Nh(t,n,r)+e}function Am(t,e=0,n=1,r,i){t.min=Fw(t.min,e,n,r,i),t.max=Fw(t.max,e,n,r,i)}function yP(t,{x:e,y:n}){Am(t.x,e.translate,e.scale,e.originPoint),Am(t.y,n.translate,n.scale,n.originPoint)}const zw=.999999999999,Uw=1.0000000000001;function NL(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ms(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,yP(t,s)),r&&io(o.latestValues)&&ms(t,o.latestValues))}e.x<Uw&&e.x>zw&&(e.x=1),e.y<Uw&&e.y>zw&&(e.y=1)}function ps(t,e){t.min=t.min+e,t.max=t.max+e}function Bw(t,e,n,r,i=.5){const o=Xe(t.min,t.max,i);Am(t,e,n,o,r)}function ms(t,e){Bw(t.x,e.x,e.scaleX,e.scale,e.originX),Bw(t.y,e.y,e.scaleY,e.scale,e.originY)}function vP(t,e){return mP(OL(t.getBoundingClientRect(),e))}function VL(t,e,n){const r=vP(t,n),{scroll:i}=e;return i&&(ps(r.x,i.offset.x),ps(r.y,i.offset.y)),r}const wP=({current:t})=>t?t.ownerDocument.defaultView:null,ML=new WeakMap;class LL{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Pd(h,"page").point)},o=(h,d)=>{const{drag:f,dragPropagation:g,onDragStart:v}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=hP(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Pn(S=>{let _=this.getAxisMotionValue(S).get()||0;if(dr.test(_)){const{projection:w}=this.visualElement;if(w&&w.layout){const x=w.layout.layoutBox[S];x&&(_=wn(x)*(parseFloat(_)/100))}}this.originPoint[S]=_}),v&&Ne.postRender(()=>v(h,d)),Tm(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},s=(h,d)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:v,onDrag:b}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:S}=d;if(g&&this.currentDirection===null){this.currentDirection=jL(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,S),this.updateAxis("y",d.point,S),this.visualElement.render(),b&&b(h,d)},a=(h,d)=>this.stop(h,d),l=()=>Pn(h=>{var d;return this.getAnimationState(h)==="paused"&&((d=this.getAxisMotionValue(h).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new lP(e,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:wP(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&Ne.postRender(()=>o(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!nc(e,i,this.currentDirection))return;const o=this.getAxisMotionValue(e);let s=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(s=PL(s,this.constraints[e],this.elastic[e])),o.set(s)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,o=this.constraints;n&&ds(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=CL(i.layoutBox,n):this.constraints=!1,this.elastic=IL(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Pn(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=RL(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ds(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=VL(r,i.root,this.visualElement.getTransformPagePoint());let s=AL(i.layout.layoutBox,o);if(n){const a=n(DL(s));this.hasMutatedConstraints=!!a,a&&(s=mP(a))}return s}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Pn(h=>{if(!nc(h,n,this.currentDirection))return;let d=l&&l[h]||{};s&&(d={min:0,max:0});const f=i?200:1e6,g=i?40:1e7,v={type:"inertia",velocity:r?e[h]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(h,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Tm(this.visualElement,e),r.start(Vy(e,r,0,n,this.visualElement,!1))}stopAnimation(){Pn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Pn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Pn(n=>{const{drag:r}=this.getProps();if(!nc(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(e[n]-Xe(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ds(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Pn(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=kL({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Pn(s=>{if(!nc(s,e,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(Xe(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;ML.set(this.visualElement,this);const e=this.visualElement.current,n=Vr(e,"pointerdown",l=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ds(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Ne.read(r);const s=Pr(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Pn(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=l[h].translate,d.set(d.get()+l[h].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Pm,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function nc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function jL(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class FL extends zi{constructor(e){super(e),this.removeGroupControls=Kt,this.removeListeners=Kt,this.controls=new LL(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Kt}unmount(){this.removeGroupControls(),this.removeListeners()}}const $w=t=>(e,n)=>{t&&Ne.postRender(()=>t(e,n))};class zL extends zi{constructor(){super(...arguments),this.removePointerDownListener=Kt}onPointerDown(e){this.session=new lP(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wP(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:$w(e),onStart:$w(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&Ne.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Vr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Cd=N.createContext(null);function UL(){const t=N.useContext(Cd);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=N.useId();N.useEffect(()=>r(i),[]);const o=N.useCallback(()=>n&&n(i),[i,n]);return!e&&n?[!1,o]:[!0]}const Fy=N.createContext({}),bP=N.createContext({}),Oc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function qw(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const ka={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(se.test(t))t=parseFloat(t);else return t;const n=qw(t,e.target.x),r=qw(t,e.target.y);return`${n}% ${r}%`}},BL={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Ri.parse(t);if(i.length>5)return r;const o=Ri.createTransformer(t),s=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+s]/=a,i[1+s]/=l;const c=Xe(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}},Vh={};function $L(t){Object.assign(Vh,t)}const{schedule:zy,cancel:D3}=bS(queueMicrotask,!1);class qL extends N.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=e;$L(HL),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Oc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||e.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?s.promote():s.relegate()||Ne.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),zy.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function _P(t){const[e,n]=UL(),r=N.useContext(Fy);return C.jsx(qL,{...t,layoutGroup:r,switchLayoutGroup:N.useContext(bP),isPresent:e,safeToRemove:n})}const HL={borderRadius:{...ka,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ka,borderTopRightRadius:ka,borderBottomLeftRadius:ka,borderBottomRightRadius:ka,boxShadow:BL},xP=["TopLeft","TopRight","BottomLeft","BottomRight"],WL=xP.length,Hw=t=>typeof t=="string"?parseFloat(t):t,Ww=t=>typeof t=="number"||se.test(t);function KL(t,e,n,r,i,o){i?(t.opacity=Xe(0,n.opacity!==void 0?n.opacity:1,GL(r)),t.opacityExit=Xe(e.opacity!==void 0?e.opacity:1,0,QL(r))):o&&(t.opacity=Xe(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<WL;s++){const a=`border${xP[s]}Radius`;let l=Kw(e,a),c=Kw(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Ww(l)===Ww(c)?(t[a]=Math.max(Xe(Hw(l),Hw(c),r),0),(dr.test(c)||dr.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Xe(e.rotate||0,n.rotate||0,r))}function Kw(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const GL=EP(0,.5,CS),QL=EP(.5,.95,Kt);function EP(t,e,n){return r=>r<t?0:r>e?1:n($s(t,e,r))}function Gw(t,e){t.min=e.min,t.max=e.max}function Sn(t,e){Gw(t.x,e.x),Gw(t.y,e.y)}function Qw(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Xw(t,e,n,r,i){return t-=e,t=Nh(t,1/n,r),i!==void 0&&(t=Nh(t,1/i,r)),t}function XL(t,e=0,n=1,r=.5,i,o=t,s=t){if(dr.test(e)&&(e=parseFloat(e),e=Xe(s.min,s.max,e/100)-s.min),typeof e!="number")return;let a=Xe(o.min,o.max,r);t===o&&(a-=e),t.min=Xw(t.min,e,n,a,i),t.max=Xw(t.max,e,n,a,i)}function Yw(t,e,[n,r,i],o,s){XL(t,e[n],e[r],e[i],e.scale,o,s)}const YL=["x","scaleX","originX"],JL=["y","scaleY","originY"];function Jw(t,e,n,r){Yw(t.x,e,YL,n?n.x:void 0,r?r.x:void 0),Yw(t.y,e,JL,n?n.y:void 0,r?r.y:void 0)}function Zw(t){return t.translate===0&&t.scale===1}function TP(t){return Zw(t.x)&&Zw(t.y)}function eb(t,e){return t.min===e.min&&t.max===e.max}function ZL(t,e){return eb(t.x,e.x)&&eb(t.y,e.y)}function tb(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function SP(t,e){return tb(t.x,e.x)&&tb(t.y,e.y)}function nb(t){return wn(t.x)/wn(t.y)}function rb(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class e6{constructor(){this.members=[]}add(e){My(this.members,e),e.scheduleRender()}remove(e){if(Ly(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function t6(t,e,n){let r="";const i=t.x.translate/e.x,o=t.y.translate/e.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:h,rotateX:d,rotateY:f,skewX:g,skewY:v}=n;c&&(r=`perspective(${c}px) ${r}`),h&&(r+=`rotate(${h}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),g&&(r+=`skewX(${g}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const n6=(t,e)=>t.depth-e.depth;class r6{constructor(){this.children=[],this.isDirty=!1}add(e){My(this.children,e),this.isDirty=!0}remove(e){Ly(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(n6),this.isDirty=!1,this.children.forEach(e)}}function Nc(t){const e=Wt(t)?t.get():t;return GM(e)?e.toValue():e}function i6(t,e){const n=fr.now(),r=({timestamp:i})=>{const o=i-n;o>=e&&(Ai(r),t(o-e))};return Ne.read(r,!0),()=>Ai(r)}function o6(t){return t instanceof SVGElement&&t.tagName!=="svg"}function s6(t,e,n){const r=Wt(t)?t:$l(t);return r.start(Vy("",r,e,n)),r.animation}const oo={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},$a=typeof window<"u"&&window.MotionDebug!==void 0,jf=["","X","Y","Z"],a6={visibility:"hidden"},ib=1e3;let l6=0;function Ff(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function PP(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=rP(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Ne,!(i||o))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&PP(r)}function CP({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=e==null?void 0:e()){this.id=l6++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,$a&&(oo.totalNodes=oo.resolvedTargetDeltas=oo.recalculatedProjection=0),this.nodes.forEach(h6),this.nodes.forEach(g6),this.nodes.forEach(y6),this.nodes.forEach(d6),$a&&window.MotionDebug.record(oo)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new r6)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new jy),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=o6(s),this.instance=s;const{layoutId:l,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=i6(f,250),Oc.hasAnimatedSinceResize&&(Oc.hasAnimatedSinceResize=!1,this.nodes.forEach(sb))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||x6,{onLayoutAnimationStart:S,onLayoutAnimationComplete:_}=h.getProps(),w=!this.targetLayout||!SP(this.targetLayout,v)||g,x=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||f&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,x);const k={..._y(b,"layout"),onPlay:S,onComplete:_};(h.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else f||sb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ai(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(v6),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&PP(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const d=this.path[h];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ob);return}this.isUpdating||this.nodes.forEach(p6),this.isUpdating=!1,this.nodes.forEach(m6),this.nodes.forEach(u6),this.nodes.forEach(c6),this.clearAllSnapshots();const a=fr.now();Ct.delta=ki(0,1e3/60,a-Ct.timestamp),Ct.timestamp=a,Ct.isProcessing=!0,Rf.update.process(Ct),Rf.preRender.process(Ct),Rf.render.process(Ct),Ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,zy.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(f6),this.sharedNodes.forEach(w6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!TP(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;s&&(a||io(this.latestValues)||h)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),E6(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return rt();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(T6))){const{scroll:h}=this.root;h&&(ps(l.x,h.offset.x),ps(l.y,h.offset.y))}return l}removeElementScroll(s){var a;const l=rt();if(Sn(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const h=this.path[c],{scroll:d,options:f}=h;h!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Sn(l,s),ps(l.x,d.offset.x),ps(l.y,d.offset.y))}return l}applyTransform(s,a=!1){const l=rt();Sn(l,s);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&ms(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),io(h.latestValues)&&ms(l,h.latestValues)}return io(this.latestValues)&&ms(l,this.latestValues),l}removeTransform(s){const a=rt();Sn(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!io(c.latestValues))continue;Cm(c.latestValues)&&c.updateSnapshot();const h=rt(),d=c.measurePageBox();Sn(h,d),Jw(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return io(this.latestValues)&&Jw(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Ct.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rt(),this.relativeTargetOrigin=rt(),al(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=rt(),this.targetWithTransforms=rt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),SL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Sn(this.target,this.layout.layoutBox),yP(this.target,this.targetDelta)):Sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rt(),this.relativeTargetOrigin=rt(),al(this.relativeTargetOrigin,this.target,g.target),Sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}$a&&oo.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Cm(this.parent.latestValues)||gP(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ct.timestamp&&(c=!1),c)return;const{layout:h,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||d))return;Sn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;NL(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=rt());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Qw(this.prevProjectionDelta.x,this.projectionDelta.x),Qw(this.prevProjectionDelta.y,this.projectionDelta.y)),sl(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==g||!rb(this.projectionDelta.x,this.prevProjectionDelta.x)||!rb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),$a&&oo.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=fs(),this.projectionDelta=fs(),this.projectionDeltaWithTransform=fs()}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},h={...this.latestValues},d=fs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=rt(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,b=g!==v,S=this.getStack(),_=!S||S.members.length<=1,w=!!(b&&!_&&this.options.crossfade===!0&&!this.path.some(_6));this.animationProgress=0;let x;this.mixTargetDelta=k=>{const M=k/1e3;ab(d.x,s.x,M),ab(d.y,s.y,M),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(al(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),b6(this.relativeTarget,this.relativeTargetOrigin,f,M),x&&ZL(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=rt()),Sn(x,this.relativeTarget)),b&&(this.animationValues=h,KL(h,c,this.latestValues,M,w,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ai(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ne.update(()=>{Oc.hasAnimatedSinceResize=!0,this.currentAnimation=s6(0,ib,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ib),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:h}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&AP(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||rt();const d=wn(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=wn(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}Sn(a,l),ms(a,h),sl(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new e6),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Ff("z",s,c,this.animationValues);for(let h=0;h<jf.length;h++)Ff(`rotate${jf[h]}`,s,c,this.animationValues),Ff(`skew${jf[h]}`,s,c,this.animationValues);s.render();for(const h in c)s.setStaticValue(h,c[h]),this.animationValues&&(this.animationValues[h]=c[h]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return a6;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Nc(s==null?void 0:s.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Nc(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!io(this.latestValues)&&(b.transform=h?h({},""):"none",this.hasProjected=!1),b}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=t6(this.projectionDeltaWithTransform,this.treeScale,f),h&&(c.transform=h(f,c.transform));const{x:g,y:v}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const b in Vh){if(f[b]===void 0)continue;const{correct:S,applyTo:_}=Vh[b],w=c.transform==="none"?f[b]:S(f[b],d);if(_){const x=_.length;for(let k=0;k<x;k++)c[_[k]]=w}else c[b]=w}return this.options.layoutId&&(c.pointerEvents=d===this?Nc(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(ob),this.root.sharedNodes.clear()}}}function u6(t){t.updateLayout()}function c6(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:o}=t.options,s=n.source!==t.layout.source;o==="size"?Pn(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=wn(f);f.min=r[d].min,f.max=f.min+g}):AP(o,n.layoutBox,r)&&Pn(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=wn(r[d]);f.max=f.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+g)});const a=fs();sl(a,r,n.layoutBox);const l=fs();s?sl(l,t.applyTransform(i,!0),n.measuredBox):sl(l,r,n.layoutBox);const c=!TP(a);let h=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:g}=d;if(f&&g){const v=rt();al(v,n.layoutBox,f.layoutBox);const b=rt();al(b,r,g.layoutBox),SP(v,b)||(h=!0),d.options.layoutRoot&&(t.relativeTarget=b,t.relativeTargetOrigin=v,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function h6(t){$a&&oo.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function d6(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function f6(t){t.clearSnapshot()}function ob(t){t.clearMeasurements()}function p6(t){t.isLayoutDirty=!1}function m6(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function sb(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function g6(t){t.resolveTargetDelta()}function y6(t){t.calcProjection()}function v6(t){t.resetSkewAndRotation()}function w6(t){t.removeLeadSnapshot()}function ab(t,e,n){t.translate=Xe(e.translate,0,n),t.scale=Xe(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function lb(t,e,n,r){t.min=Xe(e.min,n.min,r),t.max=Xe(e.max,n.max,r)}function b6(t,e,n,r){lb(t.x,e.x,n.x,r),lb(t.y,e.y,n.y,r)}function _6(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const x6={duration:.45,ease:[.4,0,.1,1]},ub=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),cb=ub("applewebkit/")&&!ub("chrome/")?Math.round:Kt;function hb(t){t.min=cb(t.min),t.max=cb(t.max)}function E6(t){hb(t.x),hb(t.y)}function AP(t,e,n){return t==="position"||t==="preserve-aspect"&&!TL(nb(e),nb(n),.2)}function T6(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const S6=CP({attachResizeListener:(t,e)=>Pr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),zf={current:void 0},kP=CP({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!zf.current){const t=new S6({});t.mount(window),t.setOptions({layoutScroll:!0}),zf.current=t}return zf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),P6={pan:{Feature:zL},drag:{Feature:FL,ProjectionNode:kP,MeasureLayout:_P}};function db(t,e){const n=e?"pointerenter":"pointerleave",r=e?"onHoverStart":"onHoverEnd",i=(o,s)=>{if(o.pointerType==="touch"||dP())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e);const l=a[r];l&&Ne.postRender(()=>l(o,s))};return Vr(t.current,n,i,{passive:!t.getProps()[r]})}class C6 extends zi{mount(){this.unmount=Nr(db(this.node,!0),db(this.node,!1))}unmount(){}}class A6 extends zi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Nr(Pr(this.node.current,"focus",()=>this.onFocus()),Pr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const RP=(t,e)=>e?t===e?!0:RP(t,e.parentElement):!1;function Uf(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Pd(n))}class k6 extends zi{constructor(){super(...arguments),this.removeStartListeners=Kt,this.removeEndListeners=Kt,this.removeAccessibleListeners=Kt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Vr(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:h,globalTapTarget:d}=this.node.getProps(),f=!d&&!RP(this.node.current,a.target)?h:c;f&&Ne.update(()=>f(a,l))},{passive:!(r.onTap||r.onPointerUp)}),s=Vr(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Nr(o,s),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Uf("up",(l,c)=>{const{onTap:h}=this.node.getProps();h&&Ne.postRender(()=>h(l,c))})};this.removeEndListeners(),this.removeEndListeners=Pr(this.node.current,"keyup",s),Uf("down",(a,l)=>{this.startPress(a,l)})},n=Pr(this.node.current,"keydown",e),r=()=>{this.isPressing&&Uf("cancel",(o,s)=>this.cancelPress(o,s))},i=Pr(this.node.current,"blur",r);this.removeAccessibleListeners=Nr(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Ne.postRender(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!dP()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Ne.postRender(()=>r(e,n))}mount(){const e=this.node.getProps(),n=Vr(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=Pr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Nr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const km=new WeakMap,Bf=new WeakMap,R6=t=>{const e=km.get(t.target);e&&e(t)},I6=t=>{t.forEach(R6)};function D6({root:t,...e}){const n=t||document;Bf.has(n)||Bf.set(n,{});const r=Bf.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(I6,{root:t,...e})),r[i]}function O6(t,e,n){const r=D6(e);return km.set(t,n),r.observe(t),()=>{km.delete(t),r.unobserve(t)}}const N6={some:0,all:1};class V6 extends zi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=e,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:N6[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),f=c?h:d;f&&f(l)};return O6(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(M6(e,n))&&this.startObserver()}unmount(){}}function M6({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const L6={inView:{Feature:V6},tap:{Feature:k6},focus:{Feature:A6},hover:{Feature:C6}},j6={layout:{ProjectionNode:kP,MeasureLayout:_P}},Uy=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Ad=N.createContext({}),By=typeof window<"u",IP=By?N.useLayoutEffect:N.useEffect,DP=N.createContext({strict:!1});function F6(t,e,n,r,i){var o,s;const{visualElement:a}=N.useContext(Ad),l=N.useContext(DP),c=N.useContext(Cd),h=N.useContext(Uy).reducedMotion,d=N.useRef();r=r||l.renderer,!d.current&&r&&(d.current=r(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:h}));const f=d.current,g=N.useContext(bP);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&z6(d.current,n,i,g),N.useInsertionEffect(()=>{f&&f.update(n,c)});const v=n[nP],b=N.useRef(!!v&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,v))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,v)));return IP(()=>{f&&(window.MotionIsMounted=!0,f.updateFeatures(),zy.render(f.render),b.current&&f.animationState&&f.animationState.animateChanges())}),N.useEffect(()=>{f&&(!b.current&&f.animationState&&f.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)===null||S===void 0||S.call(window,v)}),b.current=!1))}),f}function z6(t,e,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:OP(t.parent)),t.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&ds(a),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function OP(t){if(t)return t.options.allowProjection!==!1?t.projection:OP(t.parent)}function U6(t,e,n){return N.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):ds(n)&&(n.current=r))},[e])}function kd(t){return Fl(t.animate)||by.some(e=>zl(t[e]))}function NP(t){return!!(kd(t)||t.variants)}function B6(t,e){if(kd(t)){const{initial:n,animate:r}=t;return{initial:n===!1||zl(n)?n:void 0,animate:zl(r)?r:void 0}}return t.inherit!==!1?e:{}}function $6(t){const{initial:e,animate:n}=B6(t,N.useContext(Ad));return N.useMemo(()=>({initial:e,animate:n}),[fb(e),fb(n)])}function fb(t){return Array.isArray(t)?t.join(" "):t}const pb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qs={};for(const t in pb)qs[t]={isEnabled:e=>pb[t].some(n=>!!e[n])};function q6(t){for(const e in t)qs[e]={...qs[e],...t[e]}}const H6=Symbol.for("motionComponentSymbol");function W6({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&q6(t);function o(a,l){let c;const h={...N.useContext(Uy),...a,layoutId:K6(a)},{isStatic:d}=h,f=$6(a),g=r(a,d);if(!d&&By){G6();const v=Q6(h);c=v.MeasureLayout,f.visualElement=F6(i,g,h,e,v.ProjectionNode)}return C.jsxs(Ad.Provider,{value:f,children:[c&&f.visualElement?C.jsx(c,{visualElement:f.visualElement,...h}):null,n(i,a,U6(g,f.visualElement,l),g,d,f.visualElement)]})}const s=N.forwardRef(o);return s[H6]=i,s}function K6({layoutId:t}){const e=N.useContext(Fy).id;return e&&t!==void 0?e+"-"+t:t}function G6(t,e){N.useContext(DP).strict}function Q6(t){const{drag:e,layout:n}=qs;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const X6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $y(t){return typeof t!="string"||t.includes("-")?!1:!!(X6.indexOf(t)>-1||/[A-Z]/u.test(t))}function VP(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const o in n)t.style.setProperty(o,n[o])}const MP=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function LP(t,e,n,r){VP(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(MP.has(i)?i:Sd(i),e.attrs[i])}function jP(t,{layout:e,layoutId:n}){return Fi.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Vh[t]||t==="opacity")}function qy(t,e,n){var r;const{style:i}=t,o={};for(const s in i)(Wt(i[s])||e.style&&Wt(e.style[s])||jP(s,t)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),o}function FP(t,e,n){const r=qy(t,e,n);for(const i in t)if(Wt(t[i])||Wt(e[i])){const o=ou.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=t[i]}return r}function Hy(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}function Y6({applyWillChange:t=!1,scrapeMotionValuesFromProps:e,createRenderState:n,onMount:r},i,o,s,a){const l={latestValues:J6(i,o,s,a?!1:t,e),renderState:n()};return r&&(l.mount=c=>r(i,c,l)),l}const zP=t=>(e,n)=>{const r=N.useContext(Ad),i=N.useContext(Cd),o=()=>Y6(t,e,r,i,n);return n?o():Hy(o)};function mb(t,e,n){const r=Array.isArray(e)?e:[e];for(let i=0;i<r.length;i++){const o=vy(t,r[i]);if(o){const{transitionEnd:s,transition:a,...l}=o;n(l,s)}}}function J6(t,e,n,r,i){var o;const s={};let a=r&&((o=t.style)===null||o===void 0?void 0:o.willChange)===void 0;const l=i(t,{});for(const b in l)s[b]=Nc(l[b]);let{initial:c,animate:h}=t;const d=kd(t),f=NP(t);e&&f&&!d&&t.inherit!==!1&&(c===void 0&&(c=e.initial),h===void 0&&(h=e.animate));let g=n?n.initial===!1:!1;g=g||c===!1;const v=g?h:c;return v&&typeof v!="boolean"&&!Fl(v)&&mb(t,v,(b,S)=>{for(const _ in b){let w=b[_];if(Array.isArray(w)){const x=g?w.length-1:0;w=w[x]}w!==null&&(s[_]=w)}for(const _ in S)s[_]=S[_]}),a&&h&&c!==!1&&!Fl(h)&&mb(t,h,b=>{for(const S in b)if(iP(S)){s.willChange="transform";return}}),s}const Wy=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),UP=()=>({...Wy(),attrs:{}}),BP=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Z6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ej=ou.length;function tj(t,e,n){let r="",i=!0;for(let o=0;o<ej;o++){const s=ou[o],a=t[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=BP(a,Ay[s]);if(!l){i=!1;const h=Z6[s]||s;r+=`${h}(${c}) `}n&&(e[s]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Ky(t,e,n){const{style:r,vars:i,transformOrigin:o}=t;let s=!1,a=!1;for(const l in e){const c=e[l];if(Fi.has(l)){s=!0;continue}else if(DS(l)){i[l]=c;continue}else{const h=BP(c,Ay[l]);l.startsWith("origin")?(a=!0,o[l]=h):r[l]=h}}if(e.transform||(s||n?r.transform=tj(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:h=0}=o;r.transformOrigin=`${l} ${c} ${h}`}}function gb(t,e,n){return typeof t=="string"?t:se.transform(e+n*t)}function nj(t,e,n){const r=gb(e,t.x,t.width),i=gb(n,t.y,t.height);return`${r} ${i}`}const rj={offset:"stroke-dashoffset",array:"stroke-dasharray"},ij={offset:"strokeDashoffset",array:"strokeDasharray"};function oj(t,e,n=1,r=0,i=!0){t.pathLength=1;const o=i?rj:ij;t[o.offset]=se.transform(-r);const s=se.transform(e),a=se.transform(n);t[o.array]=`${s} ${a}`}function Gy(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},h,d){if(Ky(t,c,d),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:g,dimensions:v}=t;f.transform&&(v&&(g.transform=f.transform),delete f.transform),v&&(i!==void 0||o!==void 0||g.transform)&&(g.transformOrigin=nj(v,i!==void 0?i:.5,o!==void 0?o:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),s!==void 0&&oj(f,s,a,l,!1)}const Qy=t=>typeof t=="string"&&t.toLowerCase()==="svg",sj={useVisualState:zP({scrapeMotionValuesFromProps:FP,createRenderState:UP,onMount:(t,e,{renderState:n,latestValues:r})=>{Ne.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Ne.render(()=>{Gy(n,r,Qy(e.tagName),t.transformTemplate),LP(e,n)})}})},aj={useVisualState:zP({applyWillChange:!0,scrapeMotionValuesFromProps:qy,createRenderState:Wy})};function $P(t,e,n){for(const r in e)!Wt(e[r])&&!jP(r,n)&&(t[r]=e[r])}function lj({transformTemplate:t},e){return N.useMemo(()=>{const n=Wy();return Ky(n,e,t),Object.assign({},n.vars,n.style)},[e])}function uj(t,e){const n=t.style||{},r={};return $P(r,n,t),Object.assign(r,lj(t,e)),r}function cj(t,e){const n={},r=uj(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const hj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Mh(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||hj.has(t)}let qP=t=>!Mh(t);function dj(t){t&&(qP=e=>e.startsWith("on")?!Mh(e):t(e))}try{dj(require("@emotion/is-prop-valid").default)}catch{}function fj(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(qP(i)||n===!0&&Mh(i)||!e&&!Mh(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function pj(t,e,n,r){const i=N.useMemo(()=>{const o=UP();return Gy(o,e,Qy(r),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};$P(o,t.style,t),i.style={...o,...i.style}}return i}function mj(t=!1){return(n,r,i,{latestValues:o},s)=>{const l=($y(n)?pj:cj)(r,o,s,n),c=fj(r,typeof n=="string",t),h=n!==N.Fragment?{...c,...l,ref:i}:{},{children:d}=r,f=N.useMemo(()=>Wt(d)?d.get():d,[d]);return N.createElement(n,{...h,children:f})}}function gj(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...$y(r)?sj:aj,preloadedFeatures:t,useRender:mj(i),createVisualElement:e,Component:r};return W6(s)}}const Rm={current:null},HP={current:!1};function yj(){if(HP.current=!0,!!By)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Rm.current=t.matches;t.addListener(e),e()}else Rm.current=!1}function vj(t,e,n){for(const r in e){const i=e[r],o=n[r];if(Wt(i))t.addValue(r,i);else if(Wt(o))t.addValue(r,$l(i,{owner:t}));else if(o!==i)if(t.hasValue(r)){const s=t.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=t.getStaticValue(r);t.addValue(r,$l(s!==void 0?s:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const yb=new WeakMap,wj=[...VS,Bt,Ri],bj=t=>wj.find(NS(t)),vb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _j{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Sy,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=fr.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,Ne.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=kd(n),this.isVariantNode=NP(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const g=d[f];l[f]!==void 0&&Wt(g)&&g.set(l[f],!1)}}mount(e){this.current=e,yb.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),HP.current||yj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Rm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){yb.delete(this.current),this.projection&&this.projection.unmount(),Ai(this.notifyUpdate),Ai(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Fi.has(e),i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Ne.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in qs){const n=qs[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<vb.length;r++){const i=vb[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=e[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=vj(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=$l(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){var r;let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(RS(i)||kS(i))?i=parseFloat(i):!bj(i)&&Ri.test(n)&&(i=$S(e,n)),this.setBaseTarget(e,Wt(i)?i.get():i)),Wt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=vy(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[e])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Wt(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new jy),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class WP extends _j{constructor(){super(...arguments),this.KeyframeResolver=qS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}}function xj(t){return window.getComputedStyle(t)}class Ej extends WP{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=VP}readValueFromInstance(e,n){if(Fi.has(n)){const r=ky(n);return r&&r.default||0}else{const r=xj(e),i=(DS(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return vP(e,n)}build(e,n,r){Ky(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return qy(e,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Wt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Tj extends WP{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=rt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Fi.has(n)){const r=ky(n);return r&&r.default||0}return n=MP.has(n)?n:Sd(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return FP(e,n,r)}build(e,n,r){Gy(e,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,r,i){LP(e,n,r,i)}mount(e){this.isSVGTag=Qy(e.tagName),super.mount(e)}}const Sj=(t,e)=>$y(t)?new Tj(e):new Ej(e,{allowProjection:t!==N.Fragment}),Pj=gj({...mL,...L6,...P6,...j6},Sj),Cj=aV(Pj);class Aj extends N.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function kj({children:t,isPresent:e}){const n=N.useId(),r=N.useRef(null),i=N.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=N.useContext(Uy);return N.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:c}=i.current;if(e||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const h=document.createElement("style");return o&&(h.nonce=o),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[e]),C.jsx(Aj,{isPresent:e,childRef:r,sizeRef:i,children:N.cloneElement(t,{ref:r})})}const Rj=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Hy(Ij),l=N.useId(),c=N.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},[a,r]),h=N.useMemo(()=>({id:l,initial:e,isPresent:n,custom:i,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),o?[Math.random(),c]:[n,c]);return N.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),N.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(t=C.jsx(kj,{isPresent:n,children:t})),C.jsx(Cd.Provider,{value:h,children:t})};function Ij(){return new Map}const rc=t=>t.key||"";function wb(t){const e=[];return N.Children.forEach(t,n=>{N.isValidElement(n)&&e.push(n)}),e}const Dj=({children:t,exitBeforeEnter:e,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=N.useMemo(()=>wb(t),[t]),l=a.map(rc),c=N.useRef(!0),h=N.useRef(a),d=Hy(()=>new Map),[f,g]=N.useState(a),[v,b]=N.useState(a);IP(()=>{c.current=!1,h.current=a;for(let w=0;w<v.length;w++){const x=rc(v[w]);l.includes(x)?d.delete(x):d.get(x)!==!0&&d.set(x,!1)}},[v,l.length,l.join("-")]);const S=[];if(a!==f){let w=[...a];for(let x=0;x<v.length;x++){const k=v[x],M=rc(k);l.includes(M)||(w.splice(x,0,k),S.push(k))}s==="wait"&&S.length&&(w=S),b(wb(w)),g(a);return}const{forceRender:_}=N.useContext(Fy);return C.jsx(C.Fragment,{children:v.map(w=>{const x=rc(w),k=a===v||l.includes(x),M=()=>{if(d.has(x))d.set(x,!0);else return;let j=!0;d.forEach(P=>{P||(j=!1)}),j&&(_==null||_(),b(h.current),i&&i())};return C.jsx(Rj,{isPresent:k,initial:!c.current||r?void 0:!1,custom:k?void 0:n,presenceAffectsLayout:o,mode:s,onExitComplete:k?void 0:M,children:w},x)})})};function Oj(t){return er({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"},child:[]}]})(t)}function Nj(t){return er({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"},child:[]}]})(t)}function Vj(t){return er({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"},child:[]}]})(t)}function Mj(t){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"},child:[]}]})(t)}function Lj(t){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"},child:[]}]})(t)}function jj(t){return er({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(t)}function KP(t){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(t)}const Fj=()=>{const[t,e]=N.useState(!1),{headquarterData:n}=Zn(v=>v.headquarter),[r,i]=N.useState(!1),{t:o,i18n:s}=tn("global"),a=Mi(),l=()=>{e(!t)},c=v=>{localStorage.setItem("language",v),s.changeLanguage(v)},h=()=>{i(!0)},d=()=>{i(!1)},f=v=>{v.preventDefault(),i(!r)},g=a.pathname.startsWith("/news-events");return C.jsxs("header",{className:"relative text-white",children:[C.jsx("div",{className:"bg-black",children:C.jsx("div",{className:"container mx-auto px-4 py-2 max-w-screen",children:C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsxs("div",{className:"flex items-center",children:[C.jsx("button",{onClick:()=>c("en"),className:"text-white mx-1",children:C.jsx("img",{src:L4,alt:"",className:"w-8"})}),C.jsx("button",{onClick:()=>c("ar"),className:"text-white mx-1",children:C.jsx("img",{src:M4,alt:"",className:"w-8"})})]}),C.jsx("div",{className:"flex items-center mx-1 gap-1 md:gap-3",children:n&&Object.keys(n).length>0&&C.jsxs(C.Fragment,{children:[C.jsxs("a",{href:`mailto:${n.email}`,className:"text-white mx-1 hover:text-yellow-400 flex items-center gap-1 text-xs sm:text-lg",children:[C.jsx(vS,{className:"h-full text-yellow-400"}),n.email]}),C.jsxs("a",{href:`tel:${n.phone}`,className:"text-white mx-1 hover:text-yellow-400 flex items-center gap-1 text-xs sm:text-lg",children:[C.jsx(KP,{className:"h-full text-yellow-400"}),C.jsx("p",{style:{direction:"ltr"},children:n.phone})]})]})})]})})}),C.jsxs("div",{className:"md:hidden absolute z-40 w-full flex justify-between py-1 px-4",style:{backgroundColor:"#00000075"},children:[C.jsx("button",{onClick:l,className:"text-black",children:C.jsx(sV,{className:"text-3xl sm:text-5xl text-white"})}),C.jsx(Wn,{to:"/",className:"px-4",children:C.jsx("img",{src:Ch,className:"w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl",alt:""})})]}),!t&&C.jsx("nav",{className:"hidden md:block absolute z-40 w-full py-3",style:{backgroundColor:"#00000075"},children:C.jsxs("ul",{className:"flex justify-center items-center gap-4 text-lg",children:[C.jsx("li",{children:C.jsx(to,{to:"/",className:({isActive:v})=>v?"text-yellow-400 border-b-2 border-yellow-400 pb-1":"text-white hover:text-yellow-400 pb-1",children:o("common.home")})}),C.jsx("li",{children:C.jsx(to,{to:"/about-us",className:({isActive:v})=>v?"text-yellow-400 border-b-2 border-yellow-400 pb-1":"text-white hover:text-yellow-400 pb-1",children:o("common.about")})}),C.jsx("li",{children:C.jsx(Wn,{to:"/",children:C.jsx("img",{src:Ch,className:"w-24 h-24 rounded-2xl",alt:""})})}),C.jsxs("li",{onMouseEnter:h,onMouseLeave:d,className:"relative",children:[C.jsx(to,{to:"/news-events/news",onClick:f,className:g?"text-yellow-400 border-b-2 border-yellow-400 pb-1":"text-white hover:text-yellow-400 pb-1",children:o("common.news_events")}),C.jsx(Dj,{children:r&&C.jsxs(Cj.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:15},transition:{duration:.3,ease:"easeOut"},className:"absolute left-0 mt-2 bg-white text-black p-4 shadow-xl rounded-lg",style:{width:"max-content"},children:[C.jsx("div",{className:"absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"}),C.jsxs("ul",{children:[C.jsx("li",{children:C.jsx(to,{to:"/news-events/news",className:"block px-4 py-2 hover:bg-gray-200",children:o("common.news")})}),C.jsx("li",{children:C.jsx(to,{to:"/news-events/events",className:"block px-4 py-2 hover:bg-gray-200",children:o("common.events")})})]})]})})]}),C.jsx("li",{children:C.jsx(to,{to:"/contact-us",className:({isActive:v})=>v?"text-yellow-400 border-b-2 border-yellow-400 pb-1":"text-white hover:text-yellow-400 pb-1",children:o("common.contact_us")})})]})})]})},zj=()=>{const{t,i18n:e}=tn("global"),{headquarterData:n}=Zn(r=>r.headquarter);return C.jsx("footer",{className:"bg-black text-white py-8",children:C.jsxs("div",{className:"container mx-auto px-4 max-w-screen",children:[C.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-8",children:[C.jsxs("div",{className:"flex flex-col items-start",children:[C.jsx("img",{src:Ch,className:"w-24 h-24 mb-4 rounded-2xl",alt:"Logo"}),C.jsx("p",{className:"text-sm",children:t("footer.description")})]}),C.jsxs("div",{className:"flex flex-col items-start",children:[C.jsx("h3",{className:"font-semibold text-gray-200 text-lg mb-4",children:t("footer.quick_links")}),C.jsxs("ul",{className:"space-y-2",children:[C.jsx("li",{children:C.jsx(Wn,{to:"/",className:"hover:text-yellow-400",children:t("common.home")})}),C.jsx("li",{children:C.jsx(Wn,{to:"/about-us",className:"hover:text-yellow-400",children:t("common.about")})}),C.jsx("li",{children:C.jsx(Wn,{to:"/news-events/news",className:"hover:text-yellow-400",children:t("common.news_and_research")})}),C.jsx("li",{children:C.jsx(Wn,{to:"/news-events/events",className:"hover:text-yellow-400",children:t("common.news_events")})}),C.jsx("li",{children:C.jsx(Wn,{to:"/contact-us",className:"hover:text-yellow-400",children:t("common.contact_us")})})]})]}),n&&Object.keys(n).length>0&&C.jsxs("div",{className:"flex flex-col items-start",children:[C.jsx("h3",{className:"font-semibold text-gray-200 text-lg mb-4",children:t("common.contact_us")}),C.jsx("p",{className:"mb-2",children:C.jsx("a",{href:"mailto:info@ifb-us.org",className:"hover:text-yellow-400",children:n.email})}),C.jsx("p",{className:"mb-2",children:C.jsx("a",{href:`tel:${n.phone}`,className:"hover:text-yellow-400",children:C.jsx("p",{style:{direction:"ltr"},children:n.phone})})}),C.jsx("p",{className:"mb-2",children:C.jsx("a",{href:n.locationLink,className:"hover:text-yellow-400",children:t("footer.address")+" "+n.locationText[e.language]})})]})]}),C.jsx("div",{className:"text-center mt-8 text-sm",children:C.jsxs("p",{children:["© 2024 ",t("footer.copyright")," - ",t("footer.rights_reserved")]})})]})})};function wt(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}wt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var pe=function(){return pe=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},pe.apply(this,arguments)};function Lh(t){return Lh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lh(t)}var Uj=/^\s+/,Bj=/\s+$/;function ee(t,e){if(e=e||{},(t=t||"")instanceof ee)return t;if(!(this instanceof ee))return new ee(t,e);var n=function(r){var i={r:0,g:0,b:0},o=1,s=null,a=null,l=null,c=!1,h=!1;typeof r=="string"&&(r=function(v){v=v.replace(Uj,"").replace(Bj,"").toLowerCase();var b,S=!1;if(Im[v])v=Im[v],S=!0;else if(v=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(b=Un.rgb.exec(v))?{r:b[1],g:b[2],b:b[3]}:(b=Un.rgba.exec(v))?{r:b[1],g:b[2],b:b[3],a:b[4]}:(b=Un.hsl.exec(v))?{h:b[1],s:b[2],l:b[3]}:(b=Un.hsla.exec(v))?{h:b[1],s:b[2],l:b[3],a:b[4]}:(b=Un.hsv.exec(v))?{h:b[1],s:b[2],v:b[3]}:(b=Un.hsva.exec(v))?{h:b[1],s:b[2],v:b[3],a:b[4]}:(b=Un.hex8.exec(v))?{r:cn(b[1]),g:cn(b[2]),b:cn(b[3]),a:Sb(b[4]),format:S?"name":"hex8"}:(b=Un.hex6.exec(v))?{r:cn(b[1]),g:cn(b[2]),b:cn(b[3]),format:S?"name":"hex"}:(b=Un.hex4.exec(v))?{r:cn(b[1]+""+b[1]),g:cn(b[2]+""+b[2]),b:cn(b[3]+""+b[3]),a:Sb(b[4]+""+b[4]),format:S?"name":"hex8"}:(b=Un.hex3.exec(v))?{r:cn(b[1]+""+b[1]),g:cn(b[2]+""+b[2]),b:cn(b[3]+""+b[3]),format:S?"name":"hex"}:!1}(r)),Lh(r)=="object"&&(_r(r.r)&&_r(r.g)&&_r(r.b)?(d=r.r,f=r.g,g=r.b,i={r:255*qe(d,255),g:255*qe(f,255),b:255*qe(g,255)},c=!0,h=String(r.r).substr(-1)==="%"?"prgb":"rgb"):_r(r.h)&&_r(r.s)&&_r(r.v)?(s=qa(r.s),a=qa(r.v),i=function(v,b,S){v=6*qe(v,360),b=qe(b,100),S=qe(S,100);var _=Math.floor(v),w=v-_,x=S*(1-b),k=S*(1-w*b),M=S*(1-(1-w)*b),j=_%6,P=[S,k,x,x,M,S][j],m=[M,S,S,k,x,x][j],T=[x,x,M,S,S,k][j];return{r:255*P,g:255*m,b:255*T}}(r.h,s,a),c=!0,h="hsv"):_r(r.h)&&_r(r.s)&&_r(r.l)&&(s=qa(r.s),l=qa(r.l),i=function(v,b,S){var _,w,x;function k(P,m,T){return T<0&&(T+=1),T>1&&(T-=1),T<1/6?P+6*(m-P)*T:T<.5?m:T<2/3?P+(m-P)*(2/3-T)*6:P}if(v=qe(v,360),b=qe(b,100),S=qe(S,100),b===0)_=w=x=S;else{var M=S<.5?S*(1+b):S+b-S*b,j=2*S-M;_=k(j,M,v+1/3),w=k(j,M,v),x=k(j,M,v-1/3)}return{r:255*_,g:255*w,b:255*x}}(r.h,s,l),c=!0,h="hsl"),r.hasOwnProperty("a")&&(o=r.a));var d,f,g;return o=GP(o),{ok:c,format:r.format||h,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:o}}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function bb(t,e,n){t=qe(t,255),e=qe(e,255),n=qe(n,255);var r,i,o=Math.max(t,e,n),s=Math.min(t,e,n),a=(o+s)/2;if(o==s)r=i=0;else{var l=o-s;switch(i=a>.5?l/(2-o-s):l/(o+s),o){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,l:a}}function _b(t,e,n){t=qe(t,255),e=qe(e,255),n=qe(n,255);var r,i,o=Math.max(t,e,n),s=Math.min(t,e,n),a=o,l=o-s;if(i=o===0?0:l/o,o==s)r=0;else{switch(o){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,v:a}}function xb(t,e,n,r){var i=[Qn(Math.round(t).toString(16)),Qn(Math.round(e).toString(16)),Qn(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Eb(t,e,n,r){return[Qn(QP(r)),Qn(Math.round(t).toString(16)),Qn(Math.round(e).toString(16)),Qn(Math.round(n).toString(16))].join("")}function $j(t,e){e=e===0?0:e||10;var n=ee(t).toHsl();return n.s-=e/100,n.s=Rd(n.s),ee(n)}function qj(t,e){e=e===0?0:e||10;var n=ee(t).toHsl();return n.s+=e/100,n.s=Rd(n.s),ee(n)}function Hj(t){return ee(t).desaturate(100)}function Wj(t,e){e=e===0?0:e||10;var n=ee(t).toHsl();return n.l+=e/100,n.l=Rd(n.l),ee(n)}function Kj(t,e){e=e===0?0:e||10;var n=ee(t).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-e/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-e/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-e/100*255))),ee(n)}function Gj(t,e){e=e===0?0:e||10;var n=ee(t).toHsl();return n.l-=e/100,n.l=Rd(n.l),ee(n)}function Qj(t,e){var n=ee(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,ee(n)}function Xj(t){var e=ee(t).toHsl();return e.h=(e.h+180)%360,ee(e)}function Tb(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var n=ee(t).toHsl(),r=[ee(t)],i=360/e,o=1;o<e;o++)r.push(ee({h:(n.h+o*i)%360,s:n.s,l:n.l}));return r}function Yj(t){var e=ee(t).toHsl(),n=e.h;return[ee(t),ee({h:(n+72)%360,s:e.s,l:e.l}),ee({h:(n+216)%360,s:e.s,l:e.l})]}function Jj(t,e,n){e=e||6,n=n||30;var r=ee(t).toHsl(),i=360/n,o=[ee(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,o.push(ee(r));return o}function Zj(t,e){e=e||6;for(var n=ee(t).toHsv(),r=n.h,i=n.s,o=n.v,s=[],a=1/e;e--;)s.push(ee({h:r,s:i,v:o})),o=(o+a)%1;return s}ee.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,r=this.toRgb();return t=r.r/255,e=r.g/255,n=r.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=GP(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=_b(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=_b(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.v);return this._a==1?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=bb(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=bb(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.l);return this._a==1?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return xb(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(e,n,r,i,o){var s=[Qn(Math.round(e).toString(16)),Qn(Math.round(n).toString(16)),Qn(Math.round(r).toString(16)),Qn(QP(i))];return o&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*qe(this._r,255))+"%",g:Math.round(100*qe(this._g,255))+"%",b:Math.round(100*qe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*qe(this._r,255))+"%, "+Math.round(100*qe(this._g,255))+"%, "+Math.round(100*qe(this._b,255))+"%)":"rgba("+Math.round(100*qe(this._r,255))+"%, "+Math.round(100*qe(this._g,255))+"%, "+Math.round(100*qe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(eF[xb(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+Eb(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";if(t){var i=ee(t);n="#"+Eb(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ee(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Wj,arguments)},brighten:function(){return this._applyModification(Kj,arguments)},darken:function(){return this._applyModification(Gj,arguments)},desaturate:function(){return this._applyModification($j,arguments)},saturate:function(){return this._applyModification(qj,arguments)},greyscale:function(){return this._applyModification(Hj,arguments)},spin:function(){return this._applyModification(Qj,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(Jj,arguments)},complement:function(){return this._applyCombination(Xj,arguments)},monochromatic:function(){return this._applyCombination(Zj,arguments)},splitcomplement:function(){return this._applyCombination(Yj,arguments)},triad:function(){return this._applyCombination(Tb,[3])},tetrad:function(){return this._applyCombination(Tb,[4])}},ee.fromRatio=function(t,e){if(Lh(t)=="object"){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=r==="a"?t[r]:qa(t[r]));t=n}return ee(t,e)},ee.equals=function(t,e){return!(!t||!e)&&ee(t).toRgbString()==ee(e).toRgbString()},ee.random=function(){return ee.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ee.mix=function(t,e,n){n=n===0?0:n||50;var r=ee(t).toRgb(),i=ee(e).toRgb(),o=n/100;return ee({r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a})},ee.readability=function(t,e){var n=ee(t),r=ee(e);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},ee.isReadable=function(t,e,n){var r,i,o=ee.readability(t,e);switch(i=!1,(r=function(s){var a,l;return a=((s=s||{level:"AA",size:"small"}).level||"AA").toUpperCase(),l=(s.size||"small").toLowerCase(),a!=="AA"&&a!=="AAA"&&(a="AA"),l!=="small"&&l!=="large"&&(l="small"),{level:a,size:l}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7}return i},ee.mostReadable=function(t,e,n){var r,i,o,s,a=null,l=0;i=(n=n||{}).includeFallbackColors,o=n.level,s=n.size;for(var c=0;c<e.length;c++)(r=ee.readability(t,e[c]))>l&&(l=r,a=ee(e[c]));return ee.isReadable(t,a,{level:o,size:s})||!i?a:(n.includeFallbackColors=!1,ee.mostReadable(t,["#fff","#000"],n))};var Im=ee.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},eF=ee.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(Im);function GP(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function qe(t,e){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(t)&&(t="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function Rd(t){return Math.min(1,Math.max(0,t))}function cn(t){return parseInt(t,16)}function Qn(t){return t.length==1?"0"+t:""+t}function qa(t){return t<=1&&(t=100*t+"%"),t}function QP(t){return Math.round(255*parseFloat(t)).toString(16)}function Sb(t){return cn(t)/255}var ei,ic,oc,Un=(ic="[\\s|\\(]+("+(ei="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ei+")[,|\\s]+("+ei+")\\s*\\)?",oc="[\\s|\\(]+("+ei+")[,|\\s]+("+ei+")[,|\\s]+("+ei+")[,|\\s]+("+ei+")\\s*\\)?",{CSS_UNIT:new RegExp(ei),rgb:new RegExp("rgb"+ic),rgba:new RegExp("rgba"+oc),hsl:new RegExp("hsl"+ic),hsla:new RegExp("hsla"+oc),hsv:new RegExp("hsv"+ic),hsva:new RegExp("hsva"+oc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function _r(t){return!!Un.CSS_UNIT.exec(t)}var lu=function(t,e){var n=(typeof t=="string"?parseInt(t):t)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(e),o=i+r*(i/5)*-1;return(o==0||o<=Number.EPSILON)&&(o=.1),{animationPeriod:o+"s"}}return{animationPeriod:e}},uu=function(t,e){var n=t||{},r="";switch(e){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var i={};if(n.fontSize){var o=n.fontSize;i=function(s,a){var l={};for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&a.indexOf(c)<0&&(l[c]=s[c]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var h=0;for(c=Object.getOwnPropertySymbols(s);h<c.length;h++)a.indexOf(c[h])<0&&Object.prototype.propertyIsEnumerable.call(s,c[h])&&(l[c[h]]=s[c[h]])}return l}(n,["fontSize"]),r=o}return{fontSize:r,styles:i}},tF={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},cu=function(t){var e=t.className,n=t.text,r=t.textColor,i=t.staticText,o=t.style;return n?me.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(e||"").trim(),style:pe(pe(pe({},i&&tF),r&&{color:r,mixBlendMode:"unset"}),o&&o)},typeof n=="string"&&n.length?n:"loading"):null},Cr="rgb(50, 205, 50)";function hu(t,e){e===void 0&&(e=0);var n=[];return function r(i,o){return o===void 0&&(o=0),n.push.apply(n,i),n.length<o&&r(n,o),n.slice(0,o)}(t,e)}wt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ee(Cr).toRgb();Array.from({length:4},function(t,e){return"--atom-phase".concat(e+1,"-rgb")});wt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--commet-phase".concat(e+1,"-color")});wt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var sc=Array.from({length:4},function(t,e){return"--OP-annulus-phase".concat(e+1,"-color")}),nF=function(t){var e,n=uu(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=lu(t==null?void 0:t.speedPlus,"1.5s").animationPeriod,a=function(c){var h={},d=sc.length;if(c instanceof Array){for(var f=hu(c,d),g=0;g<f.length&&!(g>=4);g++)h[sc[g]]=f[g];return h}try{if(typeof c!="string")throw new Error("Color String expected");for(var v=0;v<d;v++)h[sc[v]]=c}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof c,'" instead with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),v=0;v<d;v++)h[sc[v]]=Cr}return h}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),l=t!=null&&t.dense?4.3:2.9;return me.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:pe(pe(pe(pe(pe({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},me.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},me.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},me.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:l,strokeMiterlimit:"10"})),me.createElement(cu,{className:"OP-annulus-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};function $f(t){return t&&t.Math===Math&&t}wt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Wo=$f(typeof window=="object"&&window)||$f(typeof self=="object"&&self)||$f(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function XP(){var t,e;return!((t=Wo==null?void 0:Wo.crypto)===null||t===void 0)&&t.randomUUID?Wo.crypto.randomUUID():!((e=Wo==null?void 0:Wo.btoa)===null||e===void 0)&&e.name?Wo.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ac=Array.from({length:4},function(t,e){return"--OP-dotted-phase".concat(e+1,"-color")}),rF=function(t){var e,n=uu(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=lu(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,a=function(c){var h={},d=ac.length;if(c instanceof Array){for(var f=hu(c,d),g=0;g<f.length&&!(g>=4);g++)h[ac[g]]=f[g];return h}try{if(typeof c!="string")throw new Error("Color String expected");for(var v=0;v<d;v++)h[ac[v]]=c}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof c,'" with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),v=0;v<d;v++)h[ac[v]]=Cr}return h}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),l=t!=null&&t.dense?16:12;return me.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:pe(pe(pe(pe(pe({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},me.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:l}).map(function(c,h){var d=function(v,b,S){if(b===16){var _=360*v/b,w=b-v,x=Number.parseFloat(S)/b*w*-1;return{transform:"rotate(".concat(_,"deg)"),animationDelay:"".concat(x,"s")}}return{transform:"",animationDelay:""}}(h,l,s),f=d.animationDelay,g=d.transform;return me.createElement("span",{key:XP(),className:"rli-d-i-b dot-shape-holder",style:g?{transform:g}:void 0},me.createElement("span",{className:"dot",style:f?{animationDelay:f}:void 0}))}),me.createElement(cu,{className:"OP-dotted-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};wt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var lc=Array.from({length:4},function(t,e){return"--OP-spokes-phase".concat(e+1,"-color")}),iF=function(t){var e,n=uu(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=lu(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,a=function(c){var h={},d=lc.length;if(c instanceof Array){for(var f=hu(c,d),g=0;g<f.length&&!(g>=4);g++)h[lc[g]]=f[g];return h}try{if(typeof c!="string")throw new Error("Color String expected");for(var v=0;v<d;v++)h[lc[v]]=c}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof c,'" instead with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),v=0;v<d;v++)h[lc[v]]=Cr}return h}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),l=t!=null&&t.dense?16:12;return me.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:pe(pe(pe(pe(pe({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},me.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:l},function(c,h){return me.createElement("span",{key:XP(),className:"rli-d-i-b spoke",style:oF(h,l,s)})})),me.createElement(cu,{text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};function oF(t,e,n){if(e===16){var r=e-t,i=Number.parseFloat(n)/e;return{transform:"rotate(".concat(360*t/e,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*i*-1,"s")}}}wt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var uc=Array.from({length:4},function(t,e){return"--OP-annulus-dual-sectors-phase".concat(e+1,"-color")}),sF=function(t){var e,n=uu(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=lu(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,a=function(c){var h={},d=uc.length;if(c instanceof Array){for(var f=hu(c,d),g=0;g<f.length&&!(g>=4);g++)h[uc[g]]=f[g];return h}try{if(typeof c!="string")throw new Error("Color String expected");for(var v=0;v<d;v++)h[uc[v]]=c}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof c,'" with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),v=0;v<d;v++)h[uc[v]]=Cr}return h}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),l=t.dense?"0.45em":"";return me.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:pe(pe(pe(pe(pe({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},me.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},me.createElement("span",{className:"rli-d-i-b annulus-sectors",style:pe({},l&&{borderWidth:l})}),me.createElement(cu,{className:"OP-annulus-dual-sectors-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};wt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Ra=Array.from({length:4},function(t,e){return["--OP-annulus-track-phase".concat(e+1,"-color"),"--OP-annulus-sector-phase".concat(e+1,"-color")]}),cc=function(t){return t===void 0&&(t=1),.25*t},aF=function(t){var e,n=uu(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,o=t==null?void 0:t.easing,s=lu(t==null?void 0:t.speedPlus,"1s").animationPeriod,a=function(c){var h={},d=Ra.length;if(c instanceof Array){for(var f=hu(c,d),g=0;g<f.length&&!(g>=4);g++){var v=Ra[g];try{if(!(_=ee(f[g])).isValid())throw new Error("Invalid Color: ".concat(_.getOriginalInput()));var b=_.setAlpha(cc(_.getAlpha())).toRgbString(),S=f[g];h[v[0]]=b,h[v[1]]=S}catch{S=Cr,b=(_=ee(Cr)).setAlpha(cc(_.getAlpha())).toRgbString(),h[v[0]]=b,h[v[1]]=S}}return h}try{var _=ee(c);if(typeof c!="string")throw new Error("Color String expected");if(!_.isValid())throw new Error("Invalid Color: ".concat(_.getOriginalInput()));S=c,b=_.setAlpha(cc(_.getAlpha())).toRgbString();for(var w=0;w<d;w++)h[(v=Ra[w])[0]]=b,h[v[1]]=S}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof c,'" with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=Cr,b=(_=ee(Cr)).setAlpha(cc(_.getAlpha())).toRgbString(),w=0;w<Ra.length;w++)h[(v=Ra[w])[0]]=b,h[v[1]]=S}return h}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),l=t.dense?"0.45em":"";return me.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:pe(pe(pe(pe(pe({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),o&&{"--rli-animation-function":o}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},me.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},me.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:pe({},l&&{borderWidth:l})}),me.createElement(cu,{className:"OP-annulus-sector-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))},YP=function(t){var e=Object(t).variant,n=e===void 0?"disc":e;return n==="dotted"?me.createElement(rF,pe({},t)):n==="spokes"?me.createElement(iF,pe({},t)):n==="disc"?me.createElement(nF,pe({},t)):n==="split-disc"?me.createElement(sF,pe({},t)):n==="track-disc"?me.createElement(aF,pe({},t)):null};wt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--four-square-phase".concat(e+1,"-color")});wt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--mosaic-phase".concat(e+1,"-color")});wt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--riple-phase".concat(e+1,"-color")});wt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--TD-pulsate-phase".concat(e+1,"-color")});wt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--TD-brick-stack-phase".concat(e+1,"-color")});wt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--TD-bob-phase".concat(e+1,"-color")});wt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--TD-bounce-phase".concat(e+1,"-color")});wt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--shape-phase".concat(e+1,"-color")});wt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--trophySpin-phase".concat(e+1,"-color")});wt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--slab-phase".concat(e+1,"-color")});wt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--life-line-phase".concat(e+1,"-color")});const lF=()=>{const t=wE(),{headquarterData:e,loading:n,error:r}=Zn(c=>c.headquarter),{loading:i,error:o}=Zn(c=>c.aboutUs),s=n||i,a=r||o;N.useEffect(()=>{t(Rc()),t(Ic())},[t]);const l=()=>{const{pathname:c}=Mi();return N.useEffect(()=>{window.scrollTo(0,0)},[c]),null};return C.jsxs(C.Fragment,{children:[s&&C.jsx("div",{className:"h-screen w-screen flex justify-center items-center",children:C.jsx(YP,{variant:"dotted",color:"#32cd32",size:"large",text:"",textColor:"#520d0d"})}),a&&C.jsxs("p",{children:["Error: ",a]}),!s&&!a&&e&&C.jsxs("div",{children:[C.jsx(l,{}),C.jsx(Fj,{}),C.jsx(uR,{}),C.jsx(zj,{})]})]})};function uF(){const[t,e]=N.useState([]),[n,r]=N.useState(0),{i18n:i}=tn("global");N.useEffect(()=>{(async()=>{const l=tS(),c=Li(l,"imageSliderData"),d=(await No(c)).docs.map(f=>({url:f.data().url,title:f.data().title,description:f.data().description}));e(d)})()},[]);function o(){r(a=>a===t.length-1?0:a+1)}function s(){r(a=>a===0?t.length-1:a-1)}return N.useEffect(()=>{const a=setInterval(o,5e3);return()=>clearInterval(a)},[t.length]),C.jsxs("section",{"aria-label":"Image Slider",dir:"ltr",style:{width:"100%",height:"100%",position:"relative"},children:[C.jsx("div",{style:{width:"100%",height:"100%",display:"flex",overflow:"hidden"},children:t.map(({url:a,title:l,description:c},h)=>C.jsxs("div",{style:{position:"relative",flexShrink:0,width:"100%",height:"100%",translate:`${-100*n}%`},className:"img-slider-img",children:[C.jsx("img",{src:a,alt:"","aria-hidden":n!==h,style:{width:"100%",height:"100%",objectFit:"cover",filter:t.length>1?"brightness(50%)":"brightness(100%)"}}),C.jsxs("div",{className:"absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 text-center",children:[C.jsx("h1",{className:"image-title text-xl md:text-3xl py-4",children:(l==null?void 0:l[i.language==="ar"?"ar":"en"])||""}),C.jsx("p",{className:"image-description text-md md:text-2xl py-2",children:(c==null?void 0:c[i.language==="ar"?"ar":"en"])||""})]})]},a))}),t.length>1&&C.jsxs(C.Fragment,{children:[C.jsx("button",{onClick:s,className:"img-slider-btn",style:{left:0},"aria-label":"View Previous Image",children:C.jsx(Oj,{"aria-hidden":!0})}),C.jsx("button",{onClick:o,className:"img-slider-btn",style:{right:0},"aria-label":"View Next Image",children:C.jsx(Nj,{"aria-hidden":!0})}),C.jsx("div",{style:{position:"absolute",bottom:".5rem",left:"50%",translate:"-50%",display:"flex",gap:".25rem"},children:t.map((a,l)=>C.jsx("button",{className:"img-slider-dot-btn","aria-label":`View Image ${l+1}`,onClick:()=>r(l),children:l===n?C.jsx(Lj,{"aria-hidden":!0}):C.jsx(Mj,{"aria-hidden":!0})},l))})]}),C.jsx("div",{id:"after-image-slider-controls"})]})}const JP=()=>{const t=Mi(),{aboutUsData:e}=Zn(i=>i.aboutUs),{t:n,i18n:r}=tn("global");return C.jsx("div",{className:"container px-4 py-20 md:py-30 mx-auto max-w-screen",children:C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[C.jsx("div",{className:"lg:col-span-5",children:C.jsx("img",{src:e?e.img:"",alt:"Business Image",className:"rounded-lg w-full"})}),e&&C.jsxs("div",{className:"lg:col-span-7",children:[C.jsx("h2",{className:"text-gray-700 text-xl font-semibold mb-4",children:n("home.aboutUs.title")}),C.jsx("div",{className:"w-16 h-[2px] bg-yellow-600 mb-6"}),C.jsx("h1",{className:"text-xl md:text-3xl font-bold mb-6",children:e.title[r.language]}),C.jsx("p",{className:"text-md md:text-lg leading-7 text-gray-600 mb-8",children:e.subtitle[r.language]}),t.pathname!=="/about-us"&&C.jsx(Wn,{to:"/about-us",className:"text-yellow-600 font-semibold hover:underline",children:n("home.aboutUs.linkText")})]})]})})},ZP=({post:t})=>{const{t:e,i18n:n}=tn("global");return C.jsx("div",{className:"bg-white rounded-sm overflow-hidden hover:border border-yellow-400 cursor-pointer",children:C.jsxs(to,{to:"/news-events/news/"+t.id,children:[C.jsx("img",{src:t.img?t.img:Ch,alt:t.title[n.language],className:"w-full h-60 object-cover"}),C.jsxs("div",{className:"p-4",children:[C.jsx("span",{className:"text-xs text-yellow-600",children:e("common.news")}),C.jsx("p",{className:"mt-2 text-lg leading-7 text-gray-600 mb-8",children:t.title[n.language]})]})]})})},cF=()=>{const{t}=tn("global"),[e,n]=N.useState([]);return N.useEffect(()=>{(async()=>{try{const o=(await No(Li(ji,"news"))).docs.map(s=>({id:s.id,...s.data()}));n(o.slice(-5))}catch(i){console.error("Error fetching news posts: ",i)}})()},[]),C.jsxs("section",{className:"bg-gray-100 py-20 md:py-30",children:[C.jsx("div",{className:"container mx-auto px-4 max-w-screen",children:C.jsxs("div",{className:"flex justify-between items-center mb-6",children:[C.jsx("h2",{className:"text-md md:text-2xl font-semibold",children:t("home.blogSection.title")}),C.jsx("div",{className:"flex space-x-2",children:C.jsx(Wn,{to:"/news-events/news",className:"p-2 hover:text-yellow-500 text-sm md:text-lg underline rounded-full",children:t("home.blogSection.seeMore")})})]})}),C.jsx("div",{className:"container mx-auto px-4 max-w-screen",children:C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6",children:e.map((r,i)=>C.jsx(ZP,{post:r},i))})})]})},hF=()=>C.jsxs(C.Fragment,{children:[C.jsx("div",{style:{width:"100%",maxHeight:"80vh",aspectRatio:"10 / 6",margin:"0 auto"},children:C.jsx(uF,{})}),C.jsx(JP,{}),C.jsx(cF,{})]}),dF=()=>{const{t}=tn("global");return C.jsxs("section",{className:"text-center flex flex-col justify-center items-center h-96",children:[C.jsx(jj,{className:"text-yellow-400 text-6xl mb-4"}),C.jsx("h1",{className:"text-6xl font-bold mb-4",children:t("notFound.title")}),C.jsx("p",{className:"text-xl mb-5",children:t("notFound.description")}),C.jsx(Wn,{to:"/",className:"text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4",children:t("notFound.goBack")})]})},fF=()=>{var o,s,a,l,c,h,d,f;const{i18n:t}=tn("global"),{aboutUsData:e}=Zn(g=>g.aboutUs),[n,r]=N.useState("message");if(!e)return C.jsx("div",{children:"Loading..."});const i={values:{title:((o=e==null?void 0:e.values)==null?void 0:o.title)||"",content:((s=e==null?void 0:e.values)==null?void 0:s.content)||""},vision:{title:((a=e==null?void 0:e.vision)==null?void 0:a.title)||"",content:((l=e==null?void 0:e.vision)==null?void 0:l.content)||""},goals:{title:((c=e==null?void 0:e.goals)==null?void 0:c.title)||"",content:((h=e==null?void 0:e.goals)==null?void 0:h.content)||""},message:{title:((d=e==null?void 0:e.message)==null?void 0:d.title)||"",content:((f=e==null?void 0:e.message)==null?void 0:f.content)||""}};return C.jsx("section",{className:"section bg-white py-20",children:C.jsxs("div",{className:"container mx-auto px-4 max-w-screen",children:[C.jsx("div",{className:"flex justify-center space-x-4 mb-6",children:Object.keys(i).map(g=>C.jsx("button",{className:`tab px-4 py-2 text-md md:text-xl focus:outline-none ${n===g?"text-black font-bold border-b-2 border-yellow-500":"text-gray-500"}`,onClick:()=>r(g),children:i[g].title[t.language]},g))}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-2xl font-semibold mb-4",children:i[n].title[t.language]}),C.jsx("p",{className:"text-gray-700 text-md md:text-lg",children:i[n].content[t.language]})]})]})})},pF=()=>{const{aboutUsData:t}=Zn(e=>e.aboutUs);return C.jsx("section",{className:"bg-gray-100 py-10",children:C.jsx("div",{className:"container mx-auto px-4 max-w-screen",children:C.jsx("div",{className:"w-full border rounded-lg shadow",children:t&&(t==null?void 0:t.pdf)&&C.jsx("iframe",{src:t.pdf,width:"100%",style:{height:"90vh"}})})})})},mF="/assets/about-us-B2i37Y5W.jpg",gF=()=>{const{t}=tn("global"),{aboutUsData:e}=Zn(n=>n.aboutUs);return N.useEffect(()=>{e&&window.scrollTo(0,0)},[e]),C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto",children:C.jsxs("div",{className:"relative img-slider-img",children:[C.jsx("img",{src:mF,alt:"",className:"w-full h-full object-cover brightness-50"}),C.jsx("div",{className:"absolute w-full top-1/2 text-white transform -translate-y-1/2",children:C.jsxs("div",{className:"container mx-auto px-4 max-w-screen",children:[C.jsx("p",{className:"image-description text-gray-300 text-xl sm:text-2xl md:text-5xl lg:text-6xl py-2",children:t("about.title")}),C.jsx("h1",{className:"image-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4",children:t("about.content")})]})})]})}),e&&C.jsxs(C.Fragment,{children:[C.jsx(JP,{}),C.jsx(pF,{}),C.jsx(fF,{})]})]})};function yF(t){return er({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"},child:[]}]})(t)}const Vc=Fg("data/Branches",async()=>{const t=await No(Li(ji,"branches")),e=[];return t.forEach(n=>{e.push({id:n.id,...n.data()})}),e}),vF=zg({name:"data",initialState:{branches:[],loading:!1,error:null},reducers:{},extraReducers:t=>{t.addCase(Vc.pending,e=>{e.loading=!0}).addCase(Vc.fulfilled,(e,n)=>{e.branches=n.payload,e.loading=!1,e.error=null}).addCase(Vc.rejected,(e,n)=>{e.error=n.error.message,e.loading=!1})}}),wF=vF.reducer,bF=()=>{const t=wE(),{t:e,i18n:n}=tn("global"),{headquarterData:r}=Zn(v=>v.headquarter),{branches:i,loading:o}=Zn(v=>v.branches),[s,a]=N.useState({name:"",email:"",phone:"",title:"",content:""}),[l,c]=N.useState(!1),[h,d]=N.useState(!1);N.useEffect(()=>{t(Vc())},[t]);const f=v=>{a({...s,[v.target.name]:v.target.value})},g=async v=>{v.preventDefault(),c(!0);try{await S4(Li(ji,"Message"),{name:s.name,email:s.email,phone:s.phone,title:s.title,content:s.content,status:"new",timestamp:new Date}),a({name:"",email:"",phone:"",title:"",content:""}),d(!0)}catch(b){console.error("Error submitting form: ",b)}finally{c(!1)}};return C.jsxs("div",{className:"container mx-auto px-4 py-32 max-w-screen",children:[C.jsxs("div",{className:"text-center",children:[C.jsx("p",{className:"text-gray-400 font-bold",children:e("ContactUs.content")}),C.jsx("h1",{className:"font-bold text-2xl md:text-4xl",children:e("ContactUs.sendMessage")})]}),C.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center py-12 gap-10",children:[C.jsx("div",{className:"w-full md:w-1/2 space-y-4 mx-3",children:r&&Object.keys(r).length>0?C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"flex justify-between pb-6 border-b border-yellow-400 mt-6",children:[C.jsx("h2",{children:e("ContactUs.phone")}),C.jsx("div",{className:"text-gray-400 text-sm",children:C.jsx("p",{style:{direction:"ltr"},children:r.phone})}),C.jsx("span",{className:"text-yellow-200 px-2",children:C.jsx(KP,{})})]}),C.jsxs("div",{className:"flex justify-between pb-6 border-b border-yellow-400 mt-6",children:[C.jsx("h2",{children:e("ContactUs.address")}),C.jsxs("div",{className:"text-gray-400 text-sm",children:[C.jsx("p",{children:C.jsx("a",{href:r.locationLink,target:"_blank",rel:"noopener noreferrer",children:r.locationText[n.language]})}),!o&&C.jsx(C.Fragment,{children:i.map(v=>C.jsx("p",{children:C.jsx("a",{href:v.locationLink,target:"_blank",rel:"noopener noreferrer",children:v.locationText[n.language]})},v.id))})]}),C.jsx("span",{className:"text-yellow-200 px-2",children:C.jsx(yF,{})})]}),C.jsxs("div",{className:"flex justify-between pb-6 border-b border-yellow-400 mt-6",children:[C.jsx("h2",{children:e("ContactUs.email")}),C.jsx("div",{className:"text-gray-400 text-sm",children:C.jsx("p",{children:r.email})}),C.jsx("span",{className:"text-yellow-200 px-2",children:C.jsx(vS,{})})]}),C.jsxs("div",{className:"flex justify-between pb-6 border-b border-yellow-400 mt-6",children:[C.jsx("h2",{children:e("ContactUs.workingTime")}),C.jsxs("div",{className:"text-gray-400 text-sm",children:[C.jsx("p",{children:r.workingTimes.days[n.language]}),C.jsx("p",{children:r.workingTimes.time[n.language]})]}),C.jsx("span",{className:"text-yellow-200 px-2",children:C.jsx(Vj,{})})]})]}):C.jsx("p",{children:"Loading..."})}),C.jsxs("div",{className:"w-full md:w-1/2 mx-8",children:[C.jsx("h2",{className:"text-xl md:text-2xl font-bold mb-4",children:e("ContactUs.sendMessage")}),C.jsxs("form",{className:"space-y-4",onSubmit:g,children:[C.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[C.jsx("input",{type:"text",name:"name",value:s.name,onChange:f,placeholder:e("ContactUs.name"),className:"border p-2 rounded w-full",required:!0}),C.jsx("input",{type:"email",name:"email",value:s.email,onChange:f,placeholder:e("ContactUs.email"),className:"border p-2 rounded w-full",required:!0})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[C.jsx("input",{type:"text",name:"phone",value:s.phone,onChange:f,placeholder:e("ContactUs.phone"),className:"border p-2 rounded w-full"}),C.jsx("input",{type:"text",name:"title",value:s.title,onChange:f,placeholder:e("ContactUs.messageTitle"),className:"border p-2 rounded w-full",required:!0})]}),C.jsx("textarea",{name:"content",value:s.content,onChange:f,placeholder:e("ContactUs.message"),className:"border p-2 rounded w-full h-32",style:{resize:"none"},required:!0}),C.jsx("button",{type:"submit",className:"bg-yellow-500 text-white p-2 rounded w-full",disabled:l,children:e(l?"ContactUs.sending":"ContactUs.send_message")}),h&&C.jsx("p",{className:"text-green-500 mt-2",children:"Message sent successfully!"})]})]})]})]})},_F="/assets/contact-BmMN1k8j.jpg";function xF(){const{headquarterData:t}=Zn(e=>e.headquarter);return C.jsx("div",{className:"h-96 mx-auto border-t-8 border-yellow-300",children:t&&Object.keys(t).length>0&&C.jsx("iframe",{src:t.embedLocation,width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}const EF=()=>{const{t}=tn("global");return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto",children:C.jsxs("div",{className:"relative img-slider-img",children:[C.jsx("img",{src:_F,alt:"",className:"w-full h-full object-cover brightness-50"}),C.jsx("div",{className:"absolute w-full top-1/2 text-white transform -translate-y-1/2",children:C.jsxs("div",{className:"container mx-auto px-4 max-w-screen",children:[C.jsx("p",{className:"image-description text-gray-300 text-xl sm:text-3xl md:text-5xl lg:text-6xl py-2",children:t("ContactUs.title")}),C.jsx("h1",{className:"image-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4",children:t("ContactUs.content")})]})})]})}),C.jsx(bF,{}),C.jsx(xF,{})]})},e2="/assets/news-B8noY_Yy.webp",TF=()=>{const{t}=tn("global"),[e,n]=N.useState([]);return N.useEffect(()=>{(async()=>{try{const o=(await No(Li(ji,"news"))).docs.map(s=>({id:s.id,...s.data()}));n(o)}catch(i){console.error("Error fetching news posts: ",i)}})()},[]),C.jsxs("div",{className:"bg-gray-100",children:[C.jsx("div",{className:"w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto",children:C.jsxs("div",{className:"relative img-slider-img",children:[C.jsx("img",{src:e2,alt:"",className:"w-full h-full object-cover brightness-50"}),C.jsx("div",{className:"absolute w-full top-1/2 text-white transform -translate-y-1/2",children:C.jsxs("div",{className:"container mx-auto px-4 max-w-screen",children:[C.jsx("p",{className:"image-description text-gray-300 text-xl sm:text-2xl md:text-5xl lg:text-6xl py-2",children:t("news.title")}),C.jsx("h1",{className:"image-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4",children:t("news.content")})]})})]})}),C.jsx("div",{className:"max-w-screen",children:C.jsx("div",{className:"container mx-auto px-4 py-20 max-w-screen",children:C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:e.map((r,i)=>C.jsx("div",{children:C.jsx(ZP,{post:r})},i))})})})]})};function SF(t){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"192",r:"32"},child:[]},{tag:"path",attr:{d:"M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"},child:[]}]})(t)}const PF=({event:t})=>{const{i18n:e}=tn("global");return C.jsxs("div",{className:"overflow-hidden",children:[C.jsx("img",{src:t.img,alt:t.title[e.language],className:"w-11/12 h-72 max-w-5xl object-cover mx-auto"}),C.jsxs("div",{className:"py-6",children:[C.jsxs("div",{className:"flex justify-between flex-col-reverse md:flex-row align-center",children:[C.jsx("h3",{className:"text-lg font-semibold mb-4",children:t.title[e.language]}),C.jsxs("a",{href:t.locationLink,target:"_blank",className:`flex hover:text-yellow-400 mb-4 ${e.language==="ar"?"mr-auto":"ml-auto"}`,children:[C.jsx("span",{children:t.eventTime.toDate().toLocaleString()}),C.jsx("span",{className:"text-yellow-400 text-2xl",children:C.jsx(SF,{})})]})]}),C.jsx("p",{dangerouslySetInnerHTML:{__html:t.description[e.language]}})]})]})},CF=()=>{const{t}=tn("global"),[e,n]=N.useState([]);return N.useEffect(()=>{(async()=>{try{const o=(await No(Li(ji,"events"))).docs.map(s=>({id:s.id,...s.data()}));n(o)}catch(i){console.error("Error fetching news posts: ",i)}})()},[]),C.jsxs("div",{className:"bg-gray-100",children:[C.jsx("div",{className:"w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto bg-gray-100",children:C.jsxs("div",{className:"relative img-slider-img",children:[C.jsx("img",{src:e2,alt:"",className:"w-full h-full object-cover brightness-50"}),C.jsx("div",{className:"absolute w-full top-1/2 text-white transform -translate-y-1/2",children:C.jsxs("div",{className:"container mx-auto px-4 max-w-screen",children:[C.jsx("p",{className:"image-description text-gray-300 text-xl sm:text-3xl md:text-5xl lg:text-6xl py-2",children:t("events.title")}),C.jsx("h1",{className:"image-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4",children:t("events.content")})]})})]})}),C.jsxs("div",{className:"container px-4 py-8 mx-auto max-w-screen",children:[C.jsx("h2",{className:"text-center text-2xl font-semibold text-gray-800 mb-6",children:t("events.content")}),C.jsx("div",{className:"space-y-8",children:e.map(r=>C.jsx(PF,{event:r},r.id))})]})]})},AF=()=>{const{i18n:t}=tn("global"),{id:e}=Yk(),[n,r]=N.useState(null),[i,o]=N.useState(!1);return N.useEffect(()=>{(async()=>{o(!0);try{if(!e){console.error("No ID provided in URL parameters.");return}const a=eS(ji,"news",e),l=await T4(a);l.exists()?r(l.data()):console.log("No such document!")}catch(a){console.error("Error fetching news post: ",a)}finally{o(!1)}})()},[e]),i?C.jsx("div",{className:"h-screen w-screen flex justify-center items-center",children:C.jsx(YP,{variant:"dotted",color:"#32cd32",size:"large",text:"",textColor:"#520d0d"})}):n?C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto",children:C.jsxs("div",{className:"relative img-slider-img",children:[C.jsx("img",{src:n.img,alt:"",className:"w-full h-full object-cover brightness-50"}),C.jsx("div",{className:"absolute w-full top-1/2 text-white transform -translate-y-1/2",children:C.jsx("div",{className:"container mx-auto px-4 max-w-screen",children:C.jsx("h1",{className:"image-title text-xl md:text-3xl lg:text-4xl py-4",children:n.title[t.language]})})})]})}),C.jsx("div",{className:"container my-10 mx-auto px-4 max-w-screen",children:C.jsx("div",{className:"default-styles",dangerouslySetInnerHTML:{__html:n.content[t.language]}})})]}):C.jsx("div",{className:"h-screen w-screen flex justify-center items-center",children:C.jsx("h1",{children:"No news found"})})},kF=[{element:C.jsx(lF,{}),children:[{path:"/",element:C.jsx(hF,{})},{path:"/about-us",element:C.jsx(gF,{})},{path:"/contact-us",element:C.jsx(EF,{})},{path:"/news-events/news",element:C.jsx(TF,{})},{path:"/news-events/news/:id",element:C.jsx(AF,{})},{path:"/news-events/events",element:C.jsx(CF,{})},{path:"*",element:C.jsx(dF,{})}]}],RF=yR(kF),IF=()=>C.jsx(SR,{router:RF}),DF={title:"Home",aboutUs:{title:"About Us",subtitle:"Iraq Businessmen Union",description:"The Iraqi Businessmen's Union is a non-profit organization dedicated to promoting economic growth and sustainable development in Iraq by supporting and developing the private sector. The union was established to empower Iraqi businessmen and provide a conducive environment for communication and collaboration among local and international businesses and economic institutions. We work to support economic and investment initiatives and to enhance economic policies that contribute to the growth and stability of the Iraqi economy. We strive to represent the interests of our members across various economic sectors, providing consultancy and assistance to enhance business opportunities both in Iraq and abroad. We are committed to building a strong network of strategic partnerships that contribute to elevating the business landscape in Iraq, with a focus on innovation, sustainability, and social responsibility.",linkText:"Read more about the federation"},blogSection:{title:"Read Our Latest Articles",seeMore:"See More"},connectUs:{title:"Start Your Project Now with Our Experts!",description:"Contact us now and get all the necessary consultations for your business!",buttonText:"Contact Us"}},OF={title:"404 Not Found",description:"This page does not exist",goBack:"Go Back"},NF={blog:"Blog",home:"Home",about:"About the Union",members:"Members",news:"news",news_and_research:"news and research",news_events:"News and Events",events:"Events",contact_us:"Contact Us"},VF={description:"Iraqi Businessmen's Union",quick_links:"Quick Links",address:"Address:",copyright:"Copyright",rights_reserved:"All rights reserved"},MF={title:"About Us",content:"about the union",achievements:{title:"Achievements of the Federation",description:"Supporting and empowering business leaders worldwide by enhancing trade exchange and improving economic systems."}},LF={values:{title:"Our Values",content:"Details about the federation's values..."},vision:{title:"Our Vision",content:"Details about our vision..."},goals:{title:"Our Goals",content:"Details about our goals..."},message:{title:"Our Message",content:"Supporting and empowering business leaders worldwide by enhancing trade exchange, improving economic systems, and collaborating with governments to create sustainable global investment opportunities."}},jF={name:"Name",messageTitle:"Title",message:"Message",title:"Stay in touch with us!",content:"Contact us",phone:"phone",address:"address",workingTime:"working time",email:"email",sendMessage:"Send us a message",send_message:"send message",sending:"sending..."},FF={info:"info@ifb-us.org",phone:"07809141940",language_switch:{en:"EN",ar:"AR"}},zF={title:"All Union news and research",content:"News and research"},UF={title:"Union events and forums",content:"events and forums"},BF={home:DF,notFound:OF,common:NF,footer:VF,about:MF,tabs:LF,ContactUs:jF,nav:FF,news:zF,events:UF},$F={title:"الصفحة الرئيسية",aboutUs:{title:"نبذة عن الاتحاد",subtitle:"اتحاد رجال الاعمال العراقيين",description:"الاتحاد الدولي لرجال وسيدات الأعمال هو منظمة اقتصادية غير ربحية تأسست في الولايات المتحدة الأمريكية. يهدف الاتحاد إلى تقديم مجموعة واسعة من الخدمات الاقتصادية والإدارية والقانونية لأعضائه، بهدف تسهيل عملهم وتأمين اتحاد رجال الأعمال العراقيين هو منظمة غير ربحية تسعى إلى تعزيز النمو الاقتصادي والتنمية المستدامة في العراق من خلال دعم وتطوير القطاع الخاص. تأسس الاتحاد بهدف تمكين رجال الأعمال العراقيين، وتوفير بيئة ملائمة للتواصل والتعاون بين الشركات والمؤسسات الاقتصادية المحلية والدولية. نعمل على دعم المبادرات الاقتصادية والاستثمارية، وتعزيز السياسات الاقتصادية التي تسهم في نمو واستقرار الاقتصاد العراقي. كما نسعى جاهدين إلى تمثيل مصالح أعضائنا في مختلف القطاعات الاقتصادية، وتقديم الاستشارات والمساعدة لتعزيز الفرص التجارية والتجارية في العراق وخارجه. نحن ملتزمون ببناء شبكة قوية من الشراكات الاستراتيجية التي تساهم في رفع مستوى الأعمال التجارية في العراق، مع التركيز على الابتكار، والاستدامة، والمسؤولية الاجتماعية.",linkText:"اقرأ المزيد عن الاتحاد"},blogSection:{title:"اقرأ جديد مقالاتنا",seeMore:"رؤية المزيد"},connectUs:{title:"إبدأ مشروعك الآن مع خبرائنا !",description:"تواصل معنا الآن واحصل على كافة الإستشارات اللازمة لأعمالك !",buttonText:"تواصل معنا"}},qF={title:"404 Not Found",description:"هذه الصفحة غير موجودة",goBack:"Go Back"},HF={blog:"المدونة",home:"الصفحة الرئيسية",about:"عن الاتحاد",members:"الأعضاء",news_events:"الأخبار والفعاليات",news:"اخبار",news_and_research:"اخبار و بحوث",events:"فعاليات",contact_us:"اتصل بنا"},WF={description:" اتحاد رجال الأعمال العراقيين.",quick_links:"روابط سريعة",address:"العنوان:",copyright:"حقوق الطبع والنشر",rights_reserved:"جميع الحقوق محفوظة"},KF={title:"من نحن",content:"عن الاتحاد",achievements:{title:"إنجازات الاتحاد",description:"دعم وتمكين قادة الأعمال حول العالم من خلال تعزيز التبادل التجاري، وتحسين الأنظمة الاقتصادية."}},GF={values:{title:"قيمنا",content:"تفاصيل حول قيم الاتحاد..."},vision:{title:"رؤيتنا",content:"تفاصيل حول رؤيتنا..."},goals:{title:"أهدافنا",content:"تفاصيل حول أهدافنا..."},message:{title:"رسالتنا",content:"دعم وتمكين قادة الأعمال حول العالم من خلال تعزيز التبادل التجاري، وتحسين الأنظمة الاقتصادية، والتعاون مع الحكومات لخلق فرص مستدامة للاستثمار العالمي."}},QF={name:"الاسم",messageTitle:"عنوان الرسالة",message:"الرسالة",title:"ابق على تواصل معنا !",content:"اتصل بنا",phone:"الهاتف",address:"العنوان",workingTime:"اوقات العمل",email:"البريد الالكتروني",sendMessage:"ارسل رسالة ",send_message:"ارسال الرسالة",sending:"يتم الارسال"},XF={info:"info@ifb-us.org",phone:"07809141940",language_switch:{en:"EN",ar:"AR"}},YF={title:"جميع اخبار و بحوث الاتحاد",content:"اخبار و بحوث "},JF={title:"احداث ومنتديات الاتحات",content:"احداث ومنتديات"},ZF={home:$F,notFound:qF,common:HF,footer:WF,about:KF,tabs:GF,ContactUs:QF,nav:XF,news:YF,events:JF},e3={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class jh{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||e3,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,i){return i&&!this.debug?null:(typeof e[0]=="string"&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new jh(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new jh(this.logger,e)}}var sr=new jh;class Id{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(s=>{let[a,l]=s;for(let c=0;c<l;c++)a(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(s=>{let[a,l]=s;for(let c=0;c<l;c++)a.apply(a,[e,...r])})}}const Ia=()=>{let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n},Pb=t=>t==null?"":""+t,t3=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},n3=/###/g,Cb=t=>t&&t.indexOf("###")>-1?t.replace(n3,"."):t,Ab=t=>!t||typeof t=="string",ll=(t,e,n)=>{const r=typeof e!="string"?e:e.split(".");let i=0;for(;i<r.length-1;){if(Ab(t))return{};const o=Cb(r[i]);!t[o]&&n&&(t[o]=new n),Object.prototype.hasOwnProperty.call(t,o)?t=t[o]:t={},++i}return Ab(t)?{}:{obj:t,k:Cb(r[i])}},kb=(t,e,n)=>{const{obj:r,k:i}=ll(t,e,Object);if(r!==void 0||e.length===1){r[i]=n;return}let o=e[e.length-1],s=e.slice(0,e.length-1),a=ll(t,s,Object);for(;a.obj===void 0&&s.length;)o=`${s[s.length-1]}.${o}`,s=s.slice(0,s.length-1),a=ll(t,s,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=n},r3=(t,e,n,r)=>{const{obj:i,k:o}=ll(t,e,Object);i[o]=i[o]||[],i[o].push(n)},Fh=(t,e)=>{const{obj:n,k:r}=ll(t,e);if(n)return n[r]},i3=(t,e,n)=>{const r=Fh(t,n);return r!==void 0?r:Fh(e,n)},t2=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?typeof t[r]=="string"||t[r]instanceof String||typeof e[r]=="string"||e[r]instanceof String?n&&(t[r]=e[r]):t2(t[r],e[r],n):t[r]=e[r]);return t},Ko=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var o3={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const s3=t=>typeof t=="string"?t.replace(/[&<>"'\/]/g,e=>o3[e]):t;class a3{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const l3=[" ",",","?","!",";"],u3=new a3(20),c3=(t,e,n)=>{e=e||"",n=n||"";const r=l3.filter(s=>e.indexOf(s)<0&&n.indexOf(s)<0);if(r.length===0)return!0;const i=u3.getRegExp(`(${r.map(s=>s==="?"?"\\?":s).join("|")})`);let o=!i.test(t);if(!o){const s=t.indexOf(n);s>0&&!i.test(t.substring(0,s))&&(o=!0)}return o},Dm=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const r=e.split(n);let i=t;for(let o=0;o<r.length;){if(!i||typeof i!="object")return;let s,a="";for(let l=o;l<r.length;++l)if(l!==o&&(a+=n),a+=r[l],s=i[a],s!==void 0){if(["string","number","boolean"].indexOf(typeof s)>-1&&l<r.length-1)continue;o+=l-o+1;break}i=s}return i},zh=t=>t&&t.indexOf("_")>0?t.replace("_","-"):t;class Rb extends Id{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,s=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],r&&(Array.isArray(r)?a.push(...r):typeof r=="string"&&o?a.push(...r.split(o)):a.push(r)));const l=Fh(this.data,a);return!l&&!n&&!r&&e.indexOf(".")>-1&&(e=a[0],n=a[1],r=a.slice(2).join(".")),l||!s||typeof r!="string"?l:Dm(this.data&&this.data[e]&&this.data[e][n],r,o)}addResource(e,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[e,n];r&&(a=a.concat(s?r.split(s):r)),e.indexOf(".")>-1&&(a=e.split("."),i=n,n=a[1]),this.addNamespaces(n),kb(this.data,a,i),o.silent||this.emit("added",e,n,r,i)}addResources(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Array.isArray(r[o]))&&this.addResource(e,n,o,r[o],{silent:!0});i.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let l=Fh(this.data,a)||{};s.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?t2(l,r,o):l={...l,...r},kb(this.data,a,l),s.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var n2={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,i){return t.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,n,r,i))}),e}};const Ib={};class Uh extends Id{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),t3(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=sr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,n);return r&&r.res!==void 0}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const s=r&&e.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!c3(e,r,i);if(s&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:o};const c=e.split(r);(r!==i||r===i&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),e=c.join(i)}return typeof o=="string"&&(o=[o]),{key:e,namespaces:o}}translate(e,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:s,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1],c=n.lng||this.language,h=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(h){const k=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${k}${s}`,usedKey:s,exactUsedKey:s,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${k}${s}`}return i?{res:s,usedKey:s,exactUsedKey:s,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:s}const d=this.resolve(e,n);let f=d&&d.res;const g=d&&d.usedKey||s,v=d&&d.exactUsedKey||s,b=Object.prototype.toString.apply(f),S=["[object Number]","[object Function]","[object RegExp]"],_=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject;if(w&&f&&(typeof f!="string"&&typeof f!="boolean"&&typeof f!="number")&&S.indexOf(b)<0&&!(typeof _=="string"&&Array.isArray(f))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const k=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,f,{...n,ns:a}):`key '${s} (${this.language})' returned an object instead of string.`;return i?(d.res=k,d.usedParams=this.getUsedParamsDetails(n),d):k}if(o){const k=Array.isArray(f),M=k?[]:{},j=k?v:g;for(const P in f)if(Object.prototype.hasOwnProperty.call(f,P)){const m=`${j}${o}${P}`;M[P]=this.translate(m,{...n,joinArrays:!1,ns:a}),M[P]===m&&(M[P]=f[P])}f=M}}else if(w&&typeof _=="string"&&Array.isArray(f))f=f.join(_),f&&(f=this.extendTranslation(f,e,n,r));else{let k=!1,M=!1;const j=n.count!==void 0&&typeof n.count!="string",P=Uh.hasDefaultValue(n),m=j?this.pluralResolver.getSuffix(c,n.count,n):"",T=n.ordinal&&j?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",A=j&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),I=A&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${m}`]||n[`defaultValue${T}`]||n.defaultValue;!this.isValidLookup(f)&&P&&(k=!0,f=I),this.isValidLookup(f)||(M=!0,f=s);const R=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&M?void 0:f,de=P&&I!==f&&this.options.updateMissing;if(M||k||de){if(this.logger.log(de?"updateKey":"missingKey",c,l,s,de?I:f),o){const B=this.resolve(s,{...n,keySeparator:!1});B&&B.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Ke=[];const ht=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ht&&ht[0])for(let B=0;B<ht.length;B++)Ke.push(ht[B]);else this.options.saveMissingTo==="all"?Ke=this.languageUtils.toResolveHierarchy(n.lng||this.language):Ke.push(n.lng||this.language);const xe=(B,G,re)=>{const Pe=P&&re!==f?re:R;this.options.missingKeyHandler?this.options.missingKeyHandler(B,l,G,Pe,de,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(B,l,G,Pe,de,n),this.emit("missingKey",B,l,G,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&j?Ke.forEach(B=>{const G=this.pluralResolver.getSuffixes(B,n);A&&n[`defaultValue${this.options.pluralSeparator}zero`]&&G.indexOf(`${this.options.pluralSeparator}zero`)<0&&G.push(`${this.options.pluralSeparator}zero`),G.forEach(re=>{xe([B],s+re,n[`defaultValue${re}`]||I)})}):xe(Ke,s,I))}f=this.extendTranslation(f,e,n,d,r),M&&f===s&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${s}`),(M||k)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${s}`:s,k?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(d.res=f,d.usedParams=this.getUsedParamsDetails(n),d):f}extendTranslation(e,n,r,i,o){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const c=typeof e=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(c){const f=e.match(this.interpolator.nestingRegexp);h=f&&f.length}let d=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,r.lng||this.language||i.usedLng,r),c){const f=e.match(this.interpolator.nestingRegexp),g=f&&f.length;h<g&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var f=arguments.length,g=new Array(f),v=0;v<f;v++)g[v]=arguments[v];return o&&o[0]===g[0]&&!r.context?(s.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`),null):s.translate(...g,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,l=typeof a=="string"?[a]:a;return e!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(e=n2.handle(l,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,s,a;return typeof e=="string"&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(r))return;const c=this.extractFromKey(l,n),h=c.key;i=h;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const f=n.count!==void 0&&typeof n.count!="string",g=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",b=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(S=>{this.isValidLookup(r)||(a=S,!Ib[`${b[0]}-${S}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Ib[`${b[0]}-${S}`]=!0,this.logger.warn(`key "${i}" for languages "${b.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),b.forEach(_=>{if(this.isValidLookup(r))return;s=_;const w=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(w,h,_,S,n);else{let k;f&&(k=this.pluralResolver.getSuffix(_,n.count,n));const M=`${this.options.pluralSeparator}zero`,j=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(w.push(h+k),n.ordinal&&k.indexOf(j)===0&&w.push(h+k.replace(j,this.options.pluralSeparator)),g&&w.push(h+M)),v){const P=`${h}${this.options.contextSeparator}${n.context}`;w.push(P),f&&(w.push(P+k),n.ordinal&&k.indexOf(j)===0&&w.push(P+k.replace(j,this.options.pluralSeparator)),g&&w.push(P+M))}}let x;for(;x=w.pop();)this.isValidLookup(r)||(o=x,r=this.getResource(_,S,x,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:s,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,r,i):this.resourceStore.getResource(e,n,r,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&typeof e.replace!="string";let i=r?e.replace:e;if(r&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const o of n)delete i[o]}return i}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n===r.substring(0,n.length)&&e[r]!==void 0)return!0;return!1}}const qf=t=>t.charAt(0).toUpperCase()+t.slice(1);class Db{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=sr.create("languageUtils")}getScriptPartFromCode(e){if(e=zh(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=zh(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(typeof e=="string"&&e.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=e.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=qf(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=qf(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=qf(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&(o.indexOf("-")>0&&i.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===i||o.indexOf(i)===0&&i.length>1))return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),typeof e=="string"&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],o=s=>{s&&(this.isSupportedCode(s)?i.push(s):this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))};return typeof e=="string"&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):typeof e=="string"&&o(this.formatLanguageCode(e)),r.forEach(s=>{i.indexOf(s)<0&&o(this.formatLanguageCode(s))}),i}}let h3=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],d3={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const f3=["v1","v2","v3"],p3=["v4"],Ob={zero:0,one:1,two:2,few:3,many:4,other:5},m3=()=>{const t={};return h3.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:d3[e.fc]}})}),t};class g3{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=sr.create("pluralResolver"),(!this.options.compatibilityJSON||p3.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=m3(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{const r=zh(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:r,type:i});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];const s=new Intl.PluralRules(r,{type:i});return this.pluralRulesCache[o]=s,s}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>Ob[i]-Ob[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const r=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[r];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!f3.includes(this.options.compatibilityJSON)}}const Nb=function(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=i3(t,e,n);return!o&&i&&typeof n=="string"&&(o=Dm(t,n,r),o===void 0&&(o=Dm(e,n,r))),o},Hf=t=>t.replace(/\$/g,"$$$$");class y3{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=sr.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:o,prefixEscaped:s,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:h,unescapePrefix:d,nestingPrefix:f,nestingPrefixEscaped:g,nestingSuffix:v,nestingSuffixEscaped:b,nestingOptionsSeparator:S,maxReplaces:_,alwaysFormat:w}=e.interpolation;this.escape=n!==void 0?n:s3,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=o?Ko(o):s||"{{",this.suffix=a?Ko(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=h?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=f?Ko(f):g||Ko("$t("),this.nestingSuffix=v?Ko(v):b||Ko(")"),this.nestingOptionsSeparator=S||",",this.maxReplaces=_||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,r,i){let o,s,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(g.indexOf(this.formatSeparator)<0){const _=Nb(n,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,r,{...i,...n,interpolationkey:g}):_}const v=g.split(this.formatSeparator),b=v.shift().trim(),S=v.join(this.formatSeparator).trim();return this.format(Nb(n,l,b,this.options.keySeparator,this.options.ignoreJSONStructure),S,r,{...i,...n,interpolationkey:b})};this.resetRegExp();const h=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Hf(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Hf(this.escape(g)):Hf(g)}].forEach(g=>{for(a=0;o=g.regex.exec(e);){const v=o[1].trim();if(s=c(v),s===void 0)if(typeof h=="function"){const S=h(e,o,i);s=typeof S=="string"?S:""}else if(i&&Object.prototype.hasOwnProperty.call(i,v))s="";else if(d){s=o[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`),s="";else typeof s!="string"&&!this.useRawValueToEscape&&(s=Pb(s));const b=g.safeValue(s);if(e=e.replace(o[0],b),d?(g.regex.lastIndex+=s.length,g.regex.lastIndex-=o[0].length):g.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,s;const a=(l,c)=>{const h=this.nestingOptionsSeparator;if(l.indexOf(h)<0)return l;const d=l.split(new RegExp(`${h}[ ]*{`));let f=`{${d[1]}`;l=d[0],f=this.interpolate(f,s);const g=f.match(/'/g),v=f.match(/"/g);(g&&g.length%2===0&&!v||v.length%2!==0)&&(f=f.replace(/'/g,'"'));try{s=JSON.parse(f),c&&(s={...c,...s})}catch(b){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,b),`${l}${h}${f}`}return s.defaultValue&&s.defaultValue.indexOf(this.prefix)>-1&&delete s.defaultValue,l};for(;i=this.nestingRegexp.exec(e);){let l=[];s={...r},s=s.replace&&typeof s.replace!="string"?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const h=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=h.shift(),l=h,c=!0}if(o=n(a.call(this,i[1].trim(),s),s),o&&i[0]===e&&typeof o!="string")return o;typeof o!="string"&&(o=Pb(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),o=""),c&&(o=l.reduce((h,d)=>this.format(h,d,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),e=e.replace(i[0],o),this.regexp.lastIndex=0}return e}}const v3=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(s=>{if(s){const[a,...l]=s.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),h=a.trim();n[h]||(n[h]=c),c==="false"&&(n[h]=!1),c==="true"&&(n[h]=!0),isNaN(c)||(n[h]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},Go=t=>{const e={};return(n,r,i)=>{let o=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(o={...o,[i.interpolationkey]:void 0});const s=r+JSON.stringify(o);let a=e[s];return a||(a=t(zh(r),i),e[s]=a),a(n)}};class w3{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=sr.create("formatter"),this.options=e,this.formats={number:Go((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Go((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Go((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Go((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Go((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(e)}init(e){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=Go(n)}format(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=n.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:c,formatOptions:h}=v3(l);if(this.formats[c]){let d=a;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},g=f.locale||f.lng||i.locale||i.lng||r;d=this.formats[c](a,g,{...h,...i,...f})}catch(f){this.logger.warn(f)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const b3=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class _3 extends Id{constructor(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=sr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(e,n,r,i){const o={},s={},a={},l={};return e.forEach(c=>{let h=!0;n.forEach(d=>{const f=`${c}|${d}`;!r.reload&&this.store.hasResourceBundle(c,d)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?s[f]===void 0&&(s[f]=!0):(this.state[f]=1,h=!1,s[f]===void 0&&(s[f]=!0),o[f]===void 0&&(o[f]=!0),l[d]===void 0&&(l[d]=!0)))}),h||(a[c]=!0)}),(Object.keys(o).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,n,r){const i=e.split("|"),o=i[0],s=i[1];n&&this.emit("failedLoading",o,s,n),!n&&r&&this.store.addResourceBundle(o,s,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const a={};this.queue.forEach(l=>{r3(l.loaded,[o],s),b3(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const h=l.loaded[c];h.length&&h.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;if(!e.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:i,wait:o,callback:s});return}this.readingCalls++;const a=(c,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&h&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,r,i+1,o*2,s)},o);return}s(c,h)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const c=l(e,n);c&&typeof c.then=="function"?c.then(h=>a(null,h)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,n,a)}prepareLoading(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof e=="string"&&(e=this.languageUtils.toResolveHierarchy(e)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(e,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(s=>{this.loadOne(s)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(s,a)=>{s&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,s),!s&&a&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,a),this.loaded(e,s,a)})}saveMissing(e,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...s,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let h;c.length===5?h=c(e,n,r,i,l):h=c(e,n,r,i),h&&typeof h.then=="function"?h.then(d=>a(null,d)).catch(a):a(null,h)}catch(h){a(h)}else c(e,n,r,i,a,l)}!e||!e[0]||this.store.addResource(e[0],n,r,i)}}}const Vb=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),typeof t[1]=="string"&&(e.defaultValue=t[1]),typeof t[2]=="string"&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Mb=t=>(typeof t.ns=="string"&&(t.ns=[t.ns]),typeof t.fallbackLng=="string"&&(t.fallbackLng=[t.fallbackLng]),typeof t.fallbackNS=="string"&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),hc=()=>{},x3=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class ql extends Id{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Mb(e),this.services={},this.logger=sr,this.modules={external:[]},x3(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Vb();this.options={...i,...this.options,...Mb(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const o=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?sr.init(o(this.modules.logger),this.options):sr.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:typeof Intl<"u"&&(h=w3);const d=new Db(this.options);this.store=new Rb(this.options.resources,this.options);const f=this.services;f.logger=sr,f.resourceStore=this.store,f.languageUtils=d,f.pluralResolver=new g3(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=o(h),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new y3(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new _3(o(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(g){for(var v=arguments.length,b=new Array(v>1?v-1:0),S=1;S<v;S++)b[S-1]=arguments[S];e.emit(g,...b)}),this.modules.languageDetector&&(f.languageDetector=o(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=o(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new Uh(this.services,this.options),this.translator.on("*",function(g){for(var v=arguments.length,b=new Array(v>1?v-1:0),S=1;S<v;S++)b[S-1]=arguments[S];e.emit(g,...b)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,r||(r=hc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return e.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return e.store[h](...arguments),e}});const l=Ia(),c=()=>{const h=(d,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),r(d,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hc;const i=typeof e=="string"?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const o=[],s=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};i?s(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>s(l)),this.options.preload&&this.options.preload.forEach(a=>s(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(e,n,r){const i=Ia();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=hc),this.services.backendConnector.reload(e,n,o=>{i.resolve(),r(o)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&n2.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,n){var r=this;this.isLanguageChangingTo=e;const i=Ia();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},s=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,h=>{s(h,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,n,r){var i=this;const o=function(s,a){let l;if(typeof a!="object"){for(var c=arguments.length,h=new Array(c>2?c-2:0),d=2;d<c;d++)h[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([s,a].concat(h))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||r||o.keyPrefix);const f=i.options.keySeparator||".";let g;return l.keyPrefix&&Array.isArray(s)?g=s.map(v=>`${l.keyPrefix}${f}${v}`):g=l.keyPrefix?`${l.keyPrefix}${f}${s}`:s,i.t(g,l)};return typeof e=="string"?o.lng=e:o.lngs=e,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(n.precheck){const a=n.precheck(this,s);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(r,e)&&(!i||s(o,e)))}loadNamespaces(e,n){const r=Ia();return this.options.ns?(typeof e=="string"&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=Ia();typeof e=="string"&&(e=[e]);const i=this.options.preload||[],o=e.filter(s=>i.indexOf(s)<0&&this.services.languageUtils.isSupportedCode(s));return o.length?(this.options.preload=i.concat(o),this.loadResources(s=>{r.resolve(),n&&n(s)}),r):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Db(Vb());return n.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new ql(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hc;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},o=new ql(i);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new Rb(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Uh(o.services,i),o.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),h=1;h<l;h++)c[h-1]=arguments[h];o.emit(a,...c)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const vt=ql.createInstance();vt.createInstance=ql.createInstance;vt.createInstance;vt.dir;vt.init;vt.loadResources;vt.reloadResources;vt.use;vt.changeLanguage;vt.getFixedT;vt.t;vt.exists;vt.setDefaultNamespace;vt.hasLoadedNamespace;vt.loadNamespaces;vt.loadLanguages;const E3=AI({reducer:{headquarter:O4,branches:wF,aboutUs:V4}}),T3=localStorage.getItem("language")||"ar";vt.init({interpolation:{escapeValue:!1},lng:T3,resources:{en:{global:BF},ar:{global:ZF}}});const Lb=t=>{t==="ar"?document.documentElement.dir="rtl":document.documentElement.dir="ltr"},S3=()=>(N.useEffect(()=>{Lb(vt.language),vt.on("languageChanged",t=>{Lb(t)})},[]),C.jsx(ZR,{store:E3,children:C.jsx(J4,{i18n:vt,children:C.jsx(IF,{})})}));Jx(document.getElementById("root")).render(C.jsx(S3,{}));
