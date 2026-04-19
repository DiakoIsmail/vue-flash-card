(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function br(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ee={},Tt=[],Ge=()=>{},qi=()=>!1,Rn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xn=e=>e.startsWith("onUpdate:"),ce=Object.assign,yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ns=Object.prototype.hasOwnProperty,Q=(e,t)=>ns.call(e,t),N=Array.isArray,Ot=e=>an(e)==="[object Map]",Mi=e=>an(e)==="[object Set]",Kr=e=>an(e)==="[object Date]",F=e=>typeof e=="function",ie=e=>typeof e=="string",Ue=e=>typeof e=="symbol",W=e=>e!==null&&typeof e=="object",Ni=e=>(W(e)||F(e))&&F(e.then)&&F(e.catch),Vi=Object.prototype.toString,an=e=>Vi.call(e),rs=e=>an(e).slice(8,-1),Fi=e=>an(e)==="[object Object]",Sr=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kt=br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},is=/-\w/g,ke=wn(e=>e.replace(is,t=>t.slice(1).toUpperCase())),as=/\B([A-Z])/g,Et=wn(e=>e.replace(as,"-$1").toLowerCase()),Tn=wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=wn(e=>e?`on${Tn(e)}`:""),Ke=(e,t)=>!Object.is(e,t),Bn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Hi=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ss=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Gr;const On=()=>Gr||(Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function In(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ie(r)?us(r):In(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(ie(e)||W(e))return e}const os=/;(?![^(]*\))/g,ls=/:([^]+)/,cs=/\/\*[^]*?\*\//g;function us(e){const t={};return e.replace(cs,"").split(os).forEach(n=>{if(n){const r=n.split(ls);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function sn(e){let t="";if(ie(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=sn(e[n]);r&&(t+=r+" ")}else if(W(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ds="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fs=br(ds);function Ji(e){return!!e||e===""}function ps(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ar(e[r],t[r]);return n}function Ar(e,t){if(e===t)return!0;let n=Kr(e),r=Kr(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ue(e),r=Ue(t),n||r)return e===t;if(n=N(e),r=N(t),n||r)return n&&r?ps(e,t):!1;if(n=W(e),r=W(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const s in e){const o=e.hasOwnProperty(s),l=t.hasOwnProperty(s);if(o&&!l||!o&&l||!Ar(e[s],t[s]))return!1}}return String(e)===String(t)}const Bi=e=>!!(e&&e.__v_isRef===!0),Se=e=>ie(e)?e:e==null?"":N(e)||W(e)&&(e.toString===Vi||!F(e.toString))?Bi(e)?Se(e.value):JSON.stringify(e,Ki,2):String(e),Ki=(e,t)=>Bi(t)?Ki(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[Kn(r,a)+" =>"]=i,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Kn(n))}:Ue(t)?Kn(t):W(t)&&!N(t)&&!Fi(t)?String(t):t,Kn=(e,t="")=>{var n;return Ue(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ye;class ms{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){++this._on===1&&(this.prevScope=ye,ye=this)}off(){this._on>0&&--this._on===0&&(ye=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function gs(){return ye}let X;const Gn=new WeakSet;class Gi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ye&&ye.active&&ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gn.has(this)&&(Gn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ui(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qr(this),Wi(this);const t=X,n=Te;X=this,Te=!0;try{return this.fn()}finally{zi(this),X=t,Te=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_r(t);this.deps=this.depsTail=void 0,Qr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rr(this)&&this.run()}get dirty(){return rr(this)}}let Qi=0,Gt,Qt;function Ui(e,t=!1){if(e.flags|=8,t){e.next=Qt,Qt=e;return}e.next=Gt,Gt=e}function Er(){Qi++}function Cr(){if(--Qi>0)return;if(Qt){let t=Qt;for(Qt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Gt;){let t=Gt;for(Gt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Wi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zi(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),_r(r),hs(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function rr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&($i(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function $i(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Zt)||(e.globalVersion=Zt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!rr(e))))return;e.flags|=2;const t=e.dep,n=X,r=Te;X=e,Te=!0;try{Wi(e);const i=e.fn(e._value);(t.version===0||Ke(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{X=n,Te=r,zi(e),e.flags&=-3}}function _r(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let a=n.computed.deps;a;a=a.nextDep)_r(a,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function hs(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Te=!0;const Yi=[];function tt(){Yi.push(Te),Te=!1}function nt(){const e=Yi.pop();Te=e===void 0?!0:e}function Qr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=X;X=void 0;try{t()}finally{X=n}}}let Zt=0;class ks{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!X||!Te||X===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==X)n=this.activeLink=new ks(X,this),X.deps?(n.prevDep=X.depsTail,X.depsTail.nextDep=n,X.depsTail=n):X.deps=X.depsTail=n,Zi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=X.depsTail,n.nextDep=void 0,X.depsTail.nextDep=n,X.depsTail=n,X.deps===n&&(X.deps=r)}return n}trigger(t){this.version++,Zt++,this.notify(t)}notify(t){Er();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cr()}}}function Zi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Zi(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ir=new WeakMap,St=Symbol(""),ar=Symbol(""),Xt=Symbol("");function ue(e,t,n){if(Te&&X){let r=ir.get(e);r||ir.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Pr),i.map=r,i.key=n),i.track()}}function et(e,t,n,r,i,a){const s=ir.get(e);if(!s){Zt++;return}const o=l=>{l&&l.trigger()};if(Er(),t==="clear")s.forEach(o);else{const l=N(e),f=l&&Sr(n);if(l&&n==="length"){const u=Number(r);s.forEach((p,g)=>{(g==="length"||g===Xt||!Ue(g)&&g>=u)&&o(p)})}else switch((n!==void 0||s.has(void 0))&&o(s.get(n)),f&&o(s.get(Xt)),t){case"add":l?f&&o(s.get("length")):(o(s.get(St)),Ot(e)&&o(s.get(ar)));break;case"delete":l||(o(s.get(St)),Ot(e)&&o(s.get(ar)));break;case"set":Ot(e)&&o(s.get(St));break}}Cr()}function Rt(e){const t=G(e);return t===e?t:(ue(t,"iterate",Xt),Re(e)?t:t.map(Oe))}function Dn(e){return ue(e=G(e),"iterate",Xt),e}function Je(e,t){return rt(e)?jt(At(e)?Oe(t):t):Oe(t)}const vs={__proto__:null,[Symbol.iterator](){return Qn(this,Symbol.iterator,e=>Je(this,e))},concat(...e){return Rt(this).concat(...e.map(t=>N(t)?Rt(t):t))},entries(){return Qn(this,"entries",e=>(e[1]=Je(this,e[1]),e))},every(e,t){return $e(this,"every",e,t,void 0,arguments)},filter(e,t){return $e(this,"filter",e,t,n=>n.map(r=>Je(this,r)),arguments)},find(e,t){return $e(this,"find",e,t,n=>Je(this,n),arguments)},findIndex(e,t){return $e(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $e(this,"findLast",e,t,n=>Je(this,n),arguments)},findLastIndex(e,t){return $e(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $e(this,"forEach",e,t,void 0,arguments)},includes(...e){return Un(this,"includes",e)},indexOf(...e){return Un(this,"indexOf",e)},join(e){return Rt(this).join(e)},lastIndexOf(...e){return Un(this,"lastIndexOf",e)},map(e,t){return $e(this,"map",e,t,void 0,arguments)},pop(){return Ft(this,"pop")},push(...e){return Ft(this,"push",e)},reduce(e,...t){return Ur(this,"reduce",e,t)},reduceRight(e,...t){return Ur(this,"reduceRight",e,t)},shift(){return Ft(this,"shift")},some(e,t){return $e(this,"some",e,t,void 0,arguments)},splice(...e){return Ft(this,"splice",e)},toReversed(){return Rt(this).toReversed()},toSorted(e){return Rt(this).toSorted(e)},toSpliced(...e){return Rt(this).toSpliced(...e)},unshift(...e){return Ft(this,"unshift",e)},values(){return Qn(this,"values",e=>Je(this,e))}};function Qn(e,t,n){const r=Dn(e),i=r[t]();return r!==e&&!Re(e)&&(i._next=i.next,i.next=()=>{const a=i._next();return a.done||(a.value=n(a.value)),a}),i}const bs=Array.prototype;function $e(e,t,n,r,i,a){const s=Dn(e),o=s!==e&&!Re(e),l=s[t];if(l!==bs[t]){const p=l.apply(e,a);return o?Oe(p):p}let f=n;s!==e&&(o?f=function(p,g){return n.call(this,Je(e,p),g,e)}:n.length>2&&(f=function(p,g){return n.call(this,p,g,e)}));const u=l.call(s,f,r);return o&&i?i(u):u}function Ur(e,t,n,r){const i=Dn(e),a=i!==e&&!Re(e);let s=n,o=!1;i!==e&&(a?(o=r.length===0,s=function(f,u,p){return o&&(o=!1,f=Je(e,f)),n.call(this,f,Je(e,u),p,e)}):n.length>3&&(s=function(f,u,p){return n.call(this,f,u,p,e)}));const l=i[t](s,...r);return o?Je(e,l):l}function Un(e,t,n){const r=G(e);ue(r,"iterate",Xt);const i=r[t](...n);return(i===-1||i===!1)&&wr(n[0])?(n[0]=G(n[0]),r[t](...n)):i}function Ft(e,t,n=[]){tt(),Er();const r=G(e)[t].apply(e,n);return Cr(),nt(),r}const ys=br("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ue));function Ss(e){Ue(e)||(e=String(e));const t=G(this);return ue(t,"has",e),t.hasOwnProperty(e)}class ea{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?Os:ia:a?ra:na).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=N(t);if(!i){let l;if(s&&(l=vs[n]))return l;if(n==="hasOwnProperty")return Ss}const o=Reflect.get(t,n,fe(t)?t:r);if((Ue(n)?Xi.has(n):ys(n))||(i||ue(t,"get",n),a))return o;if(fe(o)){const l=s&&Sr(n)?o:o.value;return i&&W(l)?or(l):l}return W(o)?i?or(o):jn(o):o}}class ta extends ea{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];const s=N(t)&&Sr(n);if(!this._isShallow){const f=rt(a);if(!Re(r)&&!rt(r)&&(a=G(a),r=G(r)),!s&&fe(a)&&!fe(r))return f||(a.value=r),!0}const o=s?Number(n)<t.length:Q(t,n),l=Reflect.set(t,n,r,fe(t)?t:i);return t===G(i)&&(o?Ke(r,a)&&et(t,"set",n,r):et(t,"add",n,r)),l}deleteProperty(t,n){const r=Q(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&et(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Ue(n)||!Xi.has(n))&&ue(t,"has",n),r}ownKeys(t){return ue(t,"iterate",N(t)?"length":St),Reflect.ownKeys(t)}}class As extends ea{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Es=new ta,Cs=new As,_s=new ta(!0);const sr=e=>e,un=e=>Reflect.getPrototypeOf(e);function Ps(e,t,n){return function(...r){const i=this.__v_raw,a=G(i),s=Ot(a),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,f=i[e](...r),u=n?sr:t?jt:Oe;return!t&&ue(a,"iterate",l?ar:St),ce(Object.create(f),{next(){const{value:p,done:g}=f.next();return g?{value:p,done:g}:{value:o?[u(p[0]),u(p[1])]:u(p),done:g}}})}}function dn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Rs(e,t){const n={get(i){const a=this.__v_raw,s=G(a),o=G(i);e||(Ke(i,o)&&ue(s,"get",i),ue(s,"get",o));const{has:l}=un(s),f=t?sr:e?jt:Oe;if(l.call(s,i))return f(a.get(i));if(l.call(s,o))return f(a.get(o));a!==s&&a.get(i)},get size(){const i=this.__v_raw;return!e&&ue(G(i),"iterate",St),i.size},has(i){const a=this.__v_raw,s=G(a),o=G(i);return e||(Ke(i,o)&&ue(s,"has",i),ue(s,"has",o)),i===o?a.has(i):a.has(i)||a.has(o)},forEach(i,a){const s=this,o=s.__v_raw,l=G(o),f=t?sr:e?jt:Oe;return!e&&ue(l,"iterate",St),o.forEach((u,p)=>i.call(a,f(u),f(p),s))}};return ce(n,e?{add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear")}:{add(i){const a=G(this),s=un(a),o=G(i),l=!t&&!Re(i)&&!rt(i)?o:i;return s.has.call(a,l)||Ke(i,l)&&s.has.call(a,i)||Ke(o,l)&&s.has.call(a,o)||(a.add(l),et(a,"add",l,l)),this},set(i,a){!t&&!Re(a)&&!rt(a)&&(a=G(a));const s=G(this),{has:o,get:l}=un(s);let f=o.call(s,i);f||(i=G(i),f=o.call(s,i));const u=l.call(s,i);return s.set(i,a),f?Ke(a,u)&&et(s,"set",i,a):et(s,"add",i,a),this},delete(i){const a=G(this),{has:s,get:o}=un(a);let l=s.call(a,i);l||(i=G(i),l=s.call(a,i)),o&&o.call(a,i);const f=a.delete(i);return l&&et(a,"delete",i,void 0),f},clear(){const i=G(this),a=i.size!==0,s=i.clear();return a&&et(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ps(i,e,t)}),n}function Rr(e,t){const n=Rs(e,t);return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,a)}const xs={get:Rr(!1,!1)},ws={get:Rr(!1,!0)},Ts={get:Rr(!0,!1)};const na=new WeakMap,ra=new WeakMap,ia=new WeakMap,Os=new WeakMap;function Is(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ds(e){return e.__v_skip||!Object.isExtensible(e)?0:Is(rs(e))}function jn(e){return rt(e)?e:xr(e,!1,Es,xs,na)}function aa(e){return xr(e,!1,_s,ws,ra)}function or(e){return xr(e,!0,Cs,Ts,ia)}function xr(e,t,n,r,i){if(!W(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=Ds(e);if(a===0)return e;const s=i.get(e);if(s)return s;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function At(e){return rt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function rt(e){return!!(e&&e.__v_isReadonly)}function Re(e){return!!(e&&e.__v_isShallow)}function wr(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function js(e){return!Q(e,"__v_skip")&&Object.isExtensible(e)&&Hi(e,"__v_skip",!0),e}const Oe=e=>W(e)?jn(e):e,jt=e=>W(e)?or(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Tr(e){return sa(e,!1)}function Ls(e){return sa(e,!0)}function sa(e,t){return fe(e)?e:new qs(e,t)}class qs{constructor(t,n){this.dep=new Pr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:G(t),this._value=n?t:Oe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Re(t)||rt(t);t=r?t:G(t),Ke(t,n)&&(this._rawValue=t,this._value=r?t:Oe(t),this.dep.trigger())}}function pt(e){return fe(e)?e.value:e}const Ms={get:(e,t,n)=>t==="__v_raw"?e:pt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function oa(e){return At(e)?e:new Proxy(e,Ms)}class Ns{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Pr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&X!==this)return Ui(this,!0),!0}get value(){const t=this.dep.track();return $i(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Vs(e,t,n=!1){let r,i;return F(e)?r=e:(r=e.get,i=e.set),new Ns(r,i,n)}const fn={},vn=new WeakMap;let bt;function Fs(e,t=!1,n=bt){if(n){let r=vn.get(n);r||vn.set(n,r=[]),r.push(e)}}function Hs(e,t,n=ee){const{immediate:r,deep:i,once:a,scheduler:s,augmentJob:o,call:l}=n,f=O=>i?O:Re(O)||i===!1||i===0?dt(O,1):dt(O);let u,p,g,h,T=!1,_=!1;if(fe(e)?(p=()=>e.value,T=Re(e)):At(e)?(p=()=>f(e),T=!0):N(e)?(_=!0,T=e.some(O=>At(O)||Re(O)),p=()=>e.map(O=>{if(fe(O))return O.value;if(At(O))return f(O);if(F(O))return l?l(O,2):O()})):F(e)?t?p=l?()=>l(e,2):e:p=()=>{if(g){tt();try{g()}finally{nt()}}const O=bt;bt=u;try{return l?l(e,3,[h]):e(h)}finally{bt=O}}:p=Ge,t&&i){const O=p,$=i===!0?1/0:i;p=()=>dt(O(),$)}const V=gs(),q=()=>{u.stop(),V&&V.active&&yr(V.effects,u)};if(a&&t){const O=t;t=(...$)=>{O(...$),q()}}let x=_?new Array(e.length).fill(fn):fn;const I=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(t){const $=u.run();if(i||T||(_?$.some((oe,te)=>Ke(oe,x[te])):Ke($,x))){g&&g();const oe=bt;bt=u;try{const te=[$,x===fn?void 0:_&&x[0]===fn?[]:x,h];x=$,l?l(t,3,te):t(...te)}finally{bt=oe}}}else u.run()};return o&&o(I),u=new Gi(p),u.scheduler=s?()=>s(I,!1):I,h=O=>Fs(O,!1,u),g=u.onStop=()=>{const O=vn.get(u);if(O){if(l)l(O,4);else for(const $ of O)$();vn.delete(u)}},t?r?I(!0):x=u.run():s?s(I.bind(null,!0),!0):u.run(),q.pause=u.pause.bind(u),q.resume=u.resume.bind(u),q.stop=q,q}function dt(e,t=1/0,n){if(t<=0||!W(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,fe(e))dt(e.value,t,n);else if(N(e))for(let r=0;r<e.length;r++)dt(e[r],t,n);else if(Mi(e)||Ot(e))e.forEach(r=>{dt(r,t,n)});else if(Fi(e)){for(const r in e)dt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&dt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function on(e,t,n,r){try{return r?e(...r):e()}catch(i){Ln(i,t,n)}}function We(e,t,n,r){if(F(e)){const i=on(e,t,n,r);return i&&Ni(i)&&i.catch(a=>{Ln(a,t,n)}),i}if(N(e)){const i=[];for(let a=0;a<e.length;a++)i.push(We(e[a],t,n,r));return i}}function Ln(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||ee;if(t){let o=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,f)===!1)return}o=o.parent}if(a){tt(),on(a,null,10,[e,l,f]),nt();return}}Js(e,n,i,r,s)}function Js(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const ge=[];let He=-1;const It=[];let ct=null,xt=0;const la=Promise.resolve();let bn=null;function ca(e){const t=bn||la;return e?t.then(this?e.bind(this):e):t}function Bs(e){let t=He+1,n=ge.length;for(;t<n;){const r=t+n>>>1,i=ge[r],a=en(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Or(e){if(!(e.flags&1)){const t=en(e),n=ge[ge.length-1];!n||!(e.flags&2)&&t>=en(n)?ge.push(e):ge.splice(Bs(t),0,e),e.flags|=1,ua()}}function ua(){bn||(bn=la.then(fa))}function Ks(e){N(e)?It.push(...e):ct&&e.id===-1?ct.splice(xt+1,0,e):e.flags&1||(It.push(e),e.flags|=1),ua()}function Wr(e,t,n=He+1){for(;n<ge.length;n++){const r=ge[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ge.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function da(e){if(It.length){const t=[...new Set(It)].sort((n,r)=>en(n)-en(r));if(It.length=0,ct){ct.push(...t);return}for(ct=t,xt=0;xt<ct.length;xt++){const n=ct[xt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ct=null,xt=0}}const en=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fa(e){try{for(He=0;He<ge.length;He++){const t=ge[He];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),on(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;He<ge.length;He++){const t=ge[He];t&&(t.flags&=-2)}He=-1,ge.length=0,da(),bn=null,(ge.length||It.length)&&fa()}}let we=null,pa=null;function yn(e){const t=we;return we=e,pa=e&&e.type.__scopeId||null,t}function Sn(e,t=we,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Cn(-1);const a=yn(t);let s;try{s=e(...i)}finally{yn(a),r._d&&Cn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function kt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let s=0;s<i.length;s++){const o=i[s];a&&(o.oldValue=a[s].value);let l=o.dir[r];l&&(tt(),We(l,n,8,[e.el,o,e,t]),nt())}}function pn(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=Uo();if(r||Dt){let i=Dt?Dt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&F(t)?t.call(r&&r.proxy):t}}const Gs=Symbol.for("v-scx"),Qs=()=>Qe(Gs);function mn(e,t,n){return ma(e,t,n)}function ma(e,t,n=ee){const{immediate:r,deep:i,flush:a,once:s}=n,o=ce({},n),l=t&&r||!t&&a!=="post";let f;if(nn){if(a==="sync"){const h=Qs();f=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ge,h.resume=Ge,h.pause=Ge,h}}const u=de;o.call=(h,T,_)=>We(h,u,T,_);let p=!1;a==="post"?o.scheduler=h=>{be(h,u&&u.suspense)}:a!=="sync"&&(p=!0,o.scheduler=(h,T)=>{T?h():Or(h)}),o.augmentJob=h=>{t&&(h.flags|=4),p&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const g=Hs(e,t,o);return nn&&(f?f.push(g):l&&g()),g}function Us(e,t,n){const r=this.proxy,i=ie(e)?e.includes(".")?ga(r,e):()=>r[e]:e.bind(r,r);let a;F(t)?a=t:(a=t.handler,n=t);const s=cn(this),o=ma(i,a.bind(r),n);return s(),o}function ga(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Ws=Symbol("_vte"),zs=e=>e.__isTeleport,$s=Symbol("_leaveCb");function Ir(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ir(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ln(e,t){return F(e)?ce({name:e.name},t,{setup:e}):e}function ha(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function zr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const An=new WeakMap;function Ut(e,t,n,r,i=!1){if(N(e)){e.forEach((_,V)=>Ut(_,t&&(N(t)?t[V]:t),n,r,i));return}if(Wt(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ut(e,t,n,r.component.subTree);return}const a=r.shapeFlag&4?Mr(r.component):r.el,s=i?null:a,{i:o,r:l}=e,f=t&&t.r,u=o.refs===ee?o.refs={}:o.refs,p=o.setupState,g=G(p),h=p===ee?qi:_=>zr(u,_)?!1:Q(g,_),T=(_,V)=>!(V&&zr(u,V));if(f!=null&&f!==l){if($r(t),ie(f))u[f]=null,h(f)&&(p[f]=null);else if(fe(f)){const _=t;T(f,_.k)&&(f.value=null),_.k&&(u[_.k]=null)}}if(F(l))on(l,o,12,[s,u]);else{const _=ie(l),V=fe(l);if(_||V){const q=()=>{if(e.f){const x=_?h(l)?p[l]:u[l]:T()||!e.k?l.value:u[e.k];if(i)N(x)&&yr(x,a);else if(N(x))x.includes(a)||x.push(a);else if(_)u[l]=[a],h(l)&&(p[l]=u[l]);else{const I=[a];T(l,e.k)&&(l.value=I),e.k&&(u[e.k]=I)}}else _?(u[l]=s,h(l)&&(p[l]=s)):V&&(T(l,e.k)&&(l.value=s),e.k&&(u[e.k]=s))};if(s){const x=()=>{q(),An.delete(e)};x.id=-1,An.set(e,x),be(x,n)}else $r(e),q()}}}function $r(e){const t=An.get(e);t&&(t.flags|=8,An.delete(e))}On().requestIdleCallback;On().cancelIdleCallback;const Wt=e=>!!e.type.__asyncLoader,ka=e=>e.type.__isKeepAlive;function Ys(e,t){va(e,"a",t)}function Zs(e,t){va(e,"da",t)}function va(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(qn(t,r,n),n){let i=n.parent;for(;i&&i.parent;)ka(i.parent.vnode)&&Xs(r,t,n,i),i=i.parent}}function Xs(e,t,n,r){const i=qn(t,e,r,!0);ba(()=>{yr(r[t],i)},n)}function qn(e,t,n=de,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{tt();const o=cn(n),l=We(t,n,e,s);return o(),nt(),l});return r?i.unshift(a):i.push(a),a}}const it=e=>(t,n=de)=>{(!nn||e==="sp")&&qn(e,(...r)=>t(...r),n)},eo=it("bm"),to=it("m"),no=it("bu"),ro=it("u"),io=it("bum"),ba=it("um"),ao=it("sp"),so=it("rtg"),oo=it("rtc");function lo(e,t=de){qn("ec",e,t)}const co="components";function Dr(e,t){return fo(co,e,!0,t)||e}const uo=Symbol.for("v-ndc");function fo(e,t,n=!0,r=!1){const i=we||de;if(i){const a=i.type;{const o=Zo(a,!1);if(o&&(o===t||o===ke(t)||o===Tn(ke(t))))return a}const s=Yr(i[e]||a[e],t)||Yr(i.appContext[e],t);return!s&&r?a:s}}function Yr(e,t){return e&&(e[t]||e[ke(t)]||e[Tn(ke(t))])}function ya(e,t,n,r){let i;const a=n,s=N(e);if(s||ie(e)){const o=s&&At(e);let l=!1,f=!1;o&&(l=!Re(e),f=rt(e),e=Dn(e)),i=new Array(e.length);for(let u=0,p=e.length;u<p;u++)i[u]=t(l?f?jt(Oe(e[u])):Oe(e[u]):e[u],u,void 0,a)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a)}else if(W(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,a));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,f=o.length;l<f;l++){const u=o[l];i[l]=t(e[u],u,l,a)}}else i=[];return i}const lr=e=>e?Fa(e)?Mr(e):lr(e.parent):null,zt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>lr(e.parent),$root:e=>lr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Aa(e),$forceUpdate:e=>e.f||(e.f=()=>{Or(e.update)}),$nextTick:e=>e.n||(e.n=ca.bind(e.proxy)),$watch:e=>Us.bind(e)}),Wn=(e,t)=>e!==ee&&!e.__isScriptSetup&&Q(e,t),po={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:s,type:o,appContext:l}=e;if(t[0]!=="$"){const g=s[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Wn(r,t))return s[t]=1,r[t];if(i!==ee&&Q(i,t))return s[t]=2,i[t];if(Q(a,t))return s[t]=3,a[t];if(n!==ee&&Q(n,t))return s[t]=4,n[t];cr&&(s[t]=0)}}const f=zt[t];let u,p;if(f)return t==="$attrs"&&ue(e.attrs,"get",""),f(e);if((u=o.__cssModules)&&(u=u[t]))return u;if(n!==ee&&Q(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,Q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Wn(i,t)?(i[t]=n,!0):r!==ee&&Q(r,t)?(r[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:s}},o){let l;return!!(n[o]||e!==ee&&o[0]!=="$"&&Q(e,o)||Wn(t,o)||Q(a,o)||Q(r,o)||Q(zt,o)||Q(i.config.globalProperties,o)||(l=s.__cssModules)&&l[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Zr(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let cr=!0;function mo(e){const t=Aa(e),n=e.proxy,r=e.ctx;cr=!1,t.beforeCreate&&Xr(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:s,watch:o,provide:l,inject:f,created:u,beforeMount:p,mounted:g,beforeUpdate:h,updated:T,activated:_,deactivated:V,beforeDestroy:q,beforeUnmount:x,destroyed:I,unmounted:O,render:$,renderTracked:oe,renderTriggered:te,errorCaptured:De,serverPrefetch:at,expose:je,inheritAttrs:st,components:gt,directives:Le,filters:Nt}=t;if(f&&go(f,r,null),s)for(const z in s){const B=s[z];F(B)&&(r[z]=B.bind(n))}if(i){const z=i.call(n,n);W(z)&&(e.data=jn(z))}if(cr=!0,a)for(const z in a){const B=a[z],ze=F(B)?B.bind(n,n):F(B.get)?B.get.bind(n,n):Ge,ot=!F(B)&&F(B.set)?B.set.bind(n):Ge,qe=Ee({get:ze,set:ot});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>qe.value,set:ve=>qe.value=ve})}if(o)for(const z in o)Sa(o[z],r,n,z);if(l){const z=F(l)?l.call(n):l;Reflect.ownKeys(z).forEach(B=>{pn(B,z[B])})}u&&Xr(u,e,"c");function se(z,B){N(B)?B.forEach(ze=>z(ze.bind(n))):B&&z(B.bind(n))}if(se(eo,p),se(to,g),se(no,h),se(ro,T),se(Ys,_),se(Zs,V),se(lo,De),se(oo,oe),se(so,te),se(io,x),se(ba,O),se(ao,at),N(je))if(je.length){const z=e.exposed||(e.exposed={});je.forEach(B=>{Object.defineProperty(z,B,{get:()=>n[B],set:ze=>n[B]=ze,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===Ge&&(e.render=$),st!=null&&(e.inheritAttrs=st),gt&&(e.components=gt),Le&&(e.directives=Le),at&&ha(e)}function go(e,t,n=Ge){N(e)&&(e=ur(e));for(const r in e){const i=e[r];let a;W(i)?"default"in i?a=Qe(i.from||r,i.default,!0):a=Qe(i.from||r):a=Qe(i),fe(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):t[r]=a}}function Xr(e,t,n){We(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Sa(e,t,n,r){let i=r.includes(".")?ga(n,r):()=>n[r];if(ie(e)){const a=t[e];F(a)&&mn(i,a)}else if(F(e))mn(i,e.bind(n));else if(W(e))if(N(e))e.forEach(a=>Sa(a,t,n,r));else{const a=F(e.handler)?e.handler.bind(n):t[e.handler];F(a)&&mn(i,a,e)}}function Aa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,o=a.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>En(l,f,s,!0)),En(l,t,s)),W(t)&&a.set(t,l),l}function En(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&En(e,a,n,!0),i&&i.forEach(s=>En(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=ho[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const ho={data:ei,props:ti,emits:ti,methods:Bt,computed:Bt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:Bt,directives:Bt,watch:vo,provide:ei,inject:ko};function ei(e,t){return t?e?function(){return ce(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function ko(e,t){return Bt(ur(e),ur(t))}function ur(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?ce(Object.create(null),e,t):t}function ti(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:ce(Object.create(null),Zr(e),Zr(t??{})):t}function vo(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=pe(e[r],t[r]);return n}function Ea(){return{app:null,config:{isNativeTag:qi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bo=0;function yo(e,t){return function(r,i=null){F(r)||(r=ce({},r)),i!=null&&!W(i)&&(i=null);const a=Ea(),s=new WeakSet,o=[];let l=!1;const f=a.app={_uid:bo++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:el,get config(){return a.config},set config(u){},use(u,...p){return s.has(u)||(u&&F(u.install)?(s.add(u),u.install(f,...p)):F(u)&&(s.add(u),u(f,...p))),f},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),f},component(u,p){return p?(a.components[u]=p,f):a.components[u]},directive(u,p){return p?(a.directives[u]=p,f):a.directives[u]},mount(u,p,g){if(!l){const h=f._ceVNode||he(r,i);return h.appContext=a,g===!0?g="svg":g===!1&&(g=void 0),e(h,u,g),l=!0,f._container=u,u.__vue_app__=f,Mr(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(We(o,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,p){return a.provides[u]=p,f},runWithContext(u){const p=Dt;Dt=f;try{return u()}finally{Dt=p}}};return f}}let Dt=null;const So=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ke(t)}Modifiers`]||e[`${Et(t)}Modifiers`];function Ao(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let i=n;const a=t.startsWith("update:"),s=a&&So(r,t.slice(7));s&&(s.trim&&(i=n.map(u=>ie(u)?u.trim():u)),s.number&&(i=n.map(ss)));let o,l=r[o=Jn(t)]||r[o=Jn(ke(t))];!l&&a&&(l=r[o=Jn(Et(t))]),l&&We(l,e,6,i);const f=r[o+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,We(f,e,6,i)}}const Eo=new WeakMap;function Ca(e,t,n=!1){const r=n?Eo:t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let s={},o=!1;if(!F(e)){const l=f=>{const u=Ca(f,t,!0);u&&(o=!0,ce(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!o?(W(e)&&r.set(e,null),null):(N(a)?a.forEach(l=>s[l]=null):ce(s,a),W(e)&&r.set(e,s),s)}function Mn(e,t){return!e||!Rn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,Et(t))||Q(e,t))}function ni(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:o,emit:l,render:f,renderCache:u,props:p,data:g,setupState:h,ctx:T,inheritAttrs:_}=e,V=yn(e);let q,x;try{if(n.shapeFlag&4){const O=i||r,$=O;q=Be(f.call($,O,u,p,h,g,T)),x=o}else{const O=t;q=Be(O.length>1?O(p,{attrs:o,slots:s,emit:l}):O(p,null)),x=t.props?o:Co(o)}}catch(O){$t.length=0,Ln(O,e,1),q=he(mt)}let I=q;if(x&&_!==!1){const O=Object.keys(x),{shapeFlag:$}=I;O.length&&$&7&&(a&&O.some(xn)&&(x=_o(x,a)),I=Lt(I,x,!1,!0))}return n.dirs&&(I=Lt(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&Ir(I,n.transition),q=I,yn(V),q}const Co=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rn(n))&&((t||(t={}))[n]=e[n]);return t},_o=(e,t)=>{const n={};for(const r in e)(!xn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Po(e,t,n){const{props:r,children:i,component:a}=e,{props:s,children:o,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ri(r,s,f):!!s;if(l&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(_a(s,r,g)&&!Mn(f,g))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?ri(r,s,f):!0:!!s;return!1}function ri(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(_a(t,e,a)&&!Mn(n,a))return!0}return!1}function _a(e,t,n){const r=e[n],i=t[n];return n==="style"&&W(r)&&W(i)?!Ar(r,i):r!==i}function Ro({vnode:e,parent:t,suspense:n},r){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=r,e=i),i===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Pa={},Ra=()=>Object.create(Pa),xa=e=>Object.getPrototypeOf(e)===Pa;function xo(e,t,n,r=!1){const i={},a=Ra();e.propsDefaults=Object.create(null),wa(e,t,i,a);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:aa(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function wo(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:s}}=e,o=G(i),[l]=e.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(Mn(e.emitsOptions,g))continue;const h=t[g];if(l)if(Q(a,g))h!==a[g]&&(a[g]=h,f=!0);else{const T=ke(g);i[T]=dr(l,o,T,h,e,!1)}else h!==a[g]&&(a[g]=h,f=!0)}}}else{wa(e,t,i,a)&&(f=!0);let u;for(const p in o)(!t||!Q(t,p)&&((u=Et(p))===p||!Q(t,u)))&&(l?n&&(n[p]!==void 0||n[u]!==void 0)&&(i[p]=dr(l,o,p,void 0,e,!0)):delete i[p]);if(a!==o)for(const p in a)(!t||!Q(t,p))&&(delete a[p],f=!0)}f&&et(e.attrs,"set","")}function wa(e,t,n,r){const[i,a]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Kt(l))continue;const f=t[l];let u;i&&Q(i,u=ke(l))?!a||!a.includes(u)?n[u]=f:(o||(o={}))[u]=f:Mn(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,s=!0)}if(a){const l=G(n),f=o||ee;for(let u=0;u<a.length;u++){const p=a[u];n[p]=dr(i,l,p,f[p],e,!Q(f,p))}}return s}function dr(e,t,n,r,i,a){const s=e[n];if(s!=null){const o=Q(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&F(l)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const u=cn(i);r=f[n]=l.call(null,t),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}s[0]&&(a&&!o?r=!1:s[1]&&(r===""||r===Et(n))&&(r=!0))}return r}const To=new WeakMap;function Ta(e,t,n=!1){const r=n?To:t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},o=[];let l=!1;if(!F(e)){const u=p=>{l=!0;const[g,h]=Ta(p,t,!0);ce(s,g),h&&o.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return W(e)&&r.set(e,Tt),Tt;if(N(a))for(let u=0;u<a.length;u++){const p=ke(a[u]);ii(p)&&(s[p]=ee)}else if(a)for(const u in a){const p=ke(u);if(ii(p)){const g=a[u],h=s[p]=N(g)||F(g)?{type:g}:ce({},g),T=h.type;let _=!1,V=!0;if(N(T))for(let q=0;q<T.length;++q){const x=T[q],I=F(x)&&x.name;if(I==="Boolean"){_=!0;break}else I==="String"&&(V=!1)}else _=F(T)&&T.name==="Boolean";h[0]=_,h[1]=V,(_||Q(h,"default"))&&o.push(p)}}const f=[s,o];return W(e)&&r.set(e,f),f}function ii(e){return e[0]!=="$"&&!Kt(e)}const jr=e=>e==="_"||e==="_ctx"||e==="$stable",Lr=e=>N(e)?e.map(Be):[Be(e)],Oo=(e,t,n)=>{if(t._n)return t;const r=Sn((...i)=>Lr(t(...i)),n);return r._c=!1,r},Oa=(e,t,n)=>{const r=e._ctx;for(const i in e){if(jr(i))continue;const a=e[i];if(F(a))t[i]=Oo(i,a,r);else if(a!=null){const s=Lr(a);t[i]=()=>s}}},Ia=(e,t)=>{const n=Lr(t);e.slots.default=()=>n},Da=(e,t,n)=>{for(const r in t)(n||!jr(r))&&(e[r]=t[r])},Io=(e,t,n)=>{const r=e.slots=Ra();if(e.vnode.shapeFlag&32){const i=t._;i?(Da(r,t,n),n&&Hi(r,"_",i,!0)):Oa(t,r)}else t&&Ia(e,t)},Do=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=ee;if(r.shapeFlag&32){const o=t._;o?n&&o===1?a=!1:Da(i,t,n):(a=!t.$stable,Oa(t,i)),s=t}else t&&(Ia(e,t),s={default:1});if(a)for(const o in i)!jr(o)&&s[o]==null&&delete i[o]},be=No;function jo(e){return Lo(e)}function Lo(e,t){const n=On();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:s,createText:o,createComment:l,setText:f,setElementText:u,parentNode:p,nextSibling:g,setScopeId:h=Ge,insertStaticContent:T}=e,_=(c,d,m,k=null,y=null,v=null,C=void 0,E=null,A=!!d.dynamicChildren)=>{if(c===d)return;c&&!Ht(c,d)&&(k=b(c),ve(c,y,v,!0),c=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:S,ref:L,shapeFlag:R}=d;switch(S){case Nn:V(c,d,m,k);break;case mt:q(c,d,m,k);break;case $n:c==null&&x(d,m,k,C);break;case xe:gt(c,d,m,k,y,v,C,E,A);break;default:R&1?$(c,d,m,k,y,v,C,E,A):R&6?Le(c,d,m,k,y,v,C,E,A):(R&64||R&128)&&S.process(c,d,m,k,y,v,C,E,A,D)}L!=null&&y?Ut(L,c&&c.ref,v,d||c,!d):L==null&&c&&c.ref!=null&&Ut(c.ref,null,v,c,!0)},V=(c,d,m,k)=>{if(c==null)r(d.el=o(d.children),m,k);else{const y=d.el=c.el;d.children!==c.children&&f(y,d.children)}},q=(c,d,m,k)=>{c==null?r(d.el=l(d.children||""),m,k):d.el=c.el},x=(c,d,m,k)=>{[c.el,c.anchor]=T(c.children,d,m,k,c.el,c.anchor)},I=({el:c,anchor:d},m,k)=>{let y;for(;c&&c!==d;)y=g(c),r(c,m,k),c=y;r(d,m,k)},O=({el:c,anchor:d})=>{let m;for(;c&&c!==d;)m=g(c),i(c),c=m;i(d)},$=(c,d,m,k,y,v,C,E,A)=>{if(d.type==="svg"?C="svg":d.type==="math"&&(C="mathml"),c==null)oe(d,m,k,y,v,C,E,A);else{const S=c.el&&c.el._isVueCE?c.el:null;try{S&&S._beginPatch(),at(c,d,y,v,C,E,A)}finally{S&&S._endPatch()}}},oe=(c,d,m,k,y,v,C,E)=>{let A,S;const{props:L,shapeFlag:R,transition:j,dirs:M}=c;if(A=c.el=s(c.type,v,L&&L.is,L),R&8?u(A,c.children):R&16&&De(c.children,A,null,k,y,zn(c,v),C,E),M&&kt(c,null,k,"created"),te(A,c,c.scopeId,C,k),L){for(const Y in L)Y!=="value"&&!Kt(Y)&&a(A,Y,null,L[Y],v,k);"value"in L&&a(A,"value",null,L.value,v),(S=L.onVnodeBeforeMount)&&Fe(S,k,c)}M&&kt(c,null,k,"beforeMount");const J=qo(y,j);J&&j.beforeEnter(A),r(A,d,m),((S=L&&L.onVnodeMounted)||J||M)&&be(()=>{try{S&&Fe(S,k,c),J&&j.enter(A),M&&kt(c,null,k,"mounted")}finally{}},y)},te=(c,d,m,k,y)=>{if(m&&h(c,m),k)for(let v=0;v<k.length;v++)h(c,k[v]);if(y){let v=y.subTree;if(d===v||Ma(v.type)&&(v.ssContent===d||v.ssFallback===d)){const C=y.vnode;te(c,C,C.scopeId,C.slotScopeIds,y.parent)}}},De=(c,d,m,k,y,v,C,E,A=0)=>{for(let S=A;S<c.length;S++){const L=c[S]=E?Xe(c[S]):Be(c[S]);_(null,L,d,m,k,y,v,C,E)}},at=(c,d,m,k,y,v,C)=>{const E=d.el=c.el;let{patchFlag:A,dynamicChildren:S,dirs:L}=d;A|=c.patchFlag&16;const R=c.props||ee,j=d.props||ee;let M;if(m&&vt(m,!1),(M=j.onVnodeBeforeUpdate)&&Fe(M,m,d,c),L&&kt(d,c,m,"beforeUpdate"),m&&vt(m,!0),(R.innerHTML&&j.innerHTML==null||R.textContent&&j.textContent==null)&&u(E,""),S?je(c.dynamicChildren,S,E,m,k,zn(d,y),v):C||B(c,d,E,null,m,k,zn(d,y),v,!1),A>0){if(A&16)st(E,R,j,m,y);else if(A&2&&R.class!==j.class&&a(E,"class",null,j.class,y),A&4&&a(E,"style",R.style,j.style,y),A&8){const J=d.dynamicProps;for(let Y=0;Y<J.length;Y++){const Z=J[Y],re=R[Z],le=j[Z];(le!==re||Z==="value")&&a(E,Z,re,le,y,m)}}A&1&&c.children!==d.children&&u(E,d.children)}else!C&&S==null&&st(E,R,j,m,y);((M=j.onVnodeUpdated)||L)&&be(()=>{M&&Fe(M,m,d,c),L&&kt(d,c,m,"updated")},k)},je=(c,d,m,k,y,v,C)=>{for(let E=0;E<d.length;E++){const A=c[E],S=d[E],L=A.el&&(A.type===xe||!Ht(A,S)||A.shapeFlag&198)?p(A.el):m;_(A,S,L,null,k,y,v,C,!0)}},st=(c,d,m,k,y)=>{if(d!==m){if(d!==ee)for(const v in d)!Kt(v)&&!(v in m)&&a(c,v,d[v],null,y,k);for(const v in m){if(Kt(v))continue;const C=m[v],E=d[v];C!==E&&v!=="value"&&a(c,v,E,C,y,k)}"value"in m&&a(c,"value",d.value,m.value,y)}},gt=(c,d,m,k,y,v,C,E,A)=>{const S=d.el=c?c.el:o(""),L=d.anchor=c?c.anchor:o("");let{patchFlag:R,dynamicChildren:j,slotScopeIds:M}=d;M&&(E=E?E.concat(M):M),c==null?(r(S,m,k),r(L,m,k),De(d.children||[],m,L,y,v,C,E,A)):R>0&&R&64&&j&&c.dynamicChildren&&c.dynamicChildren.length===j.length?(je(c.dynamicChildren,j,m,y,v,C,E),(d.key!=null||y&&d===y.subTree)&&ja(c,d,!0)):B(c,d,m,L,y,v,C,E,A)},Le=(c,d,m,k,y,v,C,E,A)=>{d.slotScopeIds=E,c==null?d.shapeFlag&512?y.ctx.activate(d,m,k,C,A):Nt(d,m,k,y,v,C,A):Ct(c,d,A)},Nt=(c,d,m,k,y,v,C)=>{const E=c.component=Qo(c,k,y);if(ka(c)&&(E.ctx.renderer=D),Wo(E,!1,C),E.asyncDep){if(y&&y.registerDep(E,se,C),!c.el){const A=E.subTree=he(mt);q(null,A,d,m),c.placeholder=A.el}}else se(E,c,d,m,y,v,C)},Ct=(c,d,m)=>{const k=d.component=c.component;if(Po(c,d,m))if(k.asyncDep&&!k.asyncResolved){z(k,d,m);return}else k.next=d,k.update();else d.el=c.el,k.vnode=d},se=(c,d,m,k,y,v,C)=>{const E=()=>{if(c.isMounted){let{next:R,bu:j,u:M,parent:J,vnode:Y}=c;{const Ne=La(c);if(Ne){R&&(R.el=Y.el,z(c,R,C)),Ne.asyncDep.then(()=>{be(()=>{c.isUnmounted||S()},y)});return}}let Z=R,re;vt(c,!1),R?(R.el=Y.el,z(c,R,C)):R=Y,j&&Bn(j),(re=R.props&&R.props.onVnodeBeforeUpdate)&&Fe(re,J,R,Y),vt(c,!0);const le=ni(c),Me=c.subTree;c.subTree=le,_(Me,le,p(Me.el),b(Me),c,y,v),R.el=le.el,Z===null&&Ro(c,le.el),M&&be(M,y),(re=R.props&&R.props.onVnodeUpdated)&&be(()=>Fe(re,J,R,Y),y)}else{let R;const{el:j,props:M}=d,{bm:J,m:Y,parent:Z,root:re,type:le}=c,Me=Wt(d);vt(c,!1),J&&Bn(J),!Me&&(R=M&&M.onVnodeBeforeMount)&&Fe(R,Z,d),vt(c,!0);{re.ce&&re.ce._hasShadowRoot()&&re.ce._injectChildStyle(le,c.parent?c.parent.type:void 0);const Ne=c.subTree=ni(c);_(null,Ne,m,k,c,y,v),d.el=Ne.el}if(Y&&be(Y,y),!Me&&(R=M&&M.onVnodeMounted)){const Ne=d;be(()=>Fe(R,Z,Ne),y)}(d.shapeFlag&256||Z&&Wt(Z.vnode)&&Z.vnode.shapeFlag&256)&&c.a&&be(c.a,y),c.isMounted=!0,d=m=k=null}};c.scope.on();const A=c.effect=new Gi(E);c.scope.off();const S=c.update=A.run.bind(A),L=c.job=A.runIfDirty.bind(A);L.i=c,L.id=c.uid,A.scheduler=()=>Or(L),vt(c,!0),S()},z=(c,d,m)=>{d.component=c;const k=c.vnode.props;c.vnode=d,c.next=null,wo(c,d.props,k,m),Do(c,d.children,m),tt(),Wr(c),nt()},B=(c,d,m,k,y,v,C,E,A=!1)=>{const S=c&&c.children,L=c?c.shapeFlag:0,R=d.children,{patchFlag:j,shapeFlag:M}=d;if(j>0){if(j&128){ot(S,R,m,k,y,v,C,E,A);return}else if(j&256){ze(S,R,m,k,y,v,C,E,A);return}}M&8?(L&16&&_e(S,y,v),R!==S&&u(m,R)):L&16?M&16?ot(S,R,m,k,y,v,C,E,A):_e(S,y,v,!0):(L&8&&u(m,""),M&16&&De(R,m,k,y,v,C,E,A))},ze=(c,d,m,k,y,v,C,E,A)=>{c=c||Tt,d=d||Tt;const S=c.length,L=d.length,R=Math.min(S,L);let j;for(j=0;j<R;j++){const M=d[j]=A?Xe(d[j]):Be(d[j]);_(c[j],M,m,null,y,v,C,E,A)}S>L?_e(c,y,v,!0,!1,R):De(d,m,k,y,v,C,E,A,R)},ot=(c,d,m,k,y,v,C,E,A)=>{let S=0;const L=d.length;let R=c.length-1,j=L-1;for(;S<=R&&S<=j;){const M=c[S],J=d[S]=A?Xe(d[S]):Be(d[S]);if(Ht(M,J))_(M,J,m,null,y,v,C,E,A);else break;S++}for(;S<=R&&S<=j;){const M=c[R],J=d[j]=A?Xe(d[j]):Be(d[j]);if(Ht(M,J))_(M,J,m,null,y,v,C,E,A);else break;R--,j--}if(S>R){if(S<=j){const M=j+1,J=M<L?d[M].el:k;for(;S<=j;)_(null,d[S]=A?Xe(d[S]):Be(d[S]),m,J,y,v,C,E,A),S++}}else if(S>j)for(;S<=R;)ve(c[S],y,v,!0),S++;else{const M=S,J=S,Y=new Map;for(S=J;S<=j;S++){const Ae=d[S]=A?Xe(d[S]):Be(d[S]);Ae.key!=null&&Y.set(Ae.key,S)}let Z,re=0;const le=j-J+1;let Me=!1,Ne=0;const Vt=new Array(le);for(S=0;S<le;S++)Vt[S]=0;for(S=M;S<=R;S++){const Ae=c[S];if(re>=le){ve(Ae,y,v,!0);continue}let Ve;if(Ae.key!=null)Ve=Y.get(Ae.key);else for(Z=J;Z<=j;Z++)if(Vt[Z-J]===0&&Ht(Ae,d[Z])){Ve=Z;break}Ve===void 0?ve(Ae,y,v,!0):(Vt[Ve-J]=S+1,Ve>=Ne?Ne=Ve:Me=!0,_(Ae,d[Ve],m,null,y,v,C,E,A),re++)}const Hr=Me?Mo(Vt):Tt;for(Z=Hr.length-1,S=le-1;S>=0;S--){const Ae=J+S,Ve=d[Ae],Jr=d[Ae+1],Br=Ae+1<L?Jr.el||qa(Jr):k;Vt[S]===0?_(null,Ve,m,Br,y,v,C,E,A):Me&&(Z<0||S!==Hr[Z]?qe(Ve,m,Br,2):Z--)}}},qe=(c,d,m,k,y=null)=>{const{el:v,type:C,transition:E,children:A,shapeFlag:S}=c;if(S&6){qe(c.component.subTree,d,m,k);return}if(S&128){c.suspense.move(d,m,k);return}if(S&64){C.move(c,d,m,D);return}if(C===xe){r(v,d,m);for(let R=0;R<A.length;R++)qe(A[R],d,m,k);r(c.anchor,d,m);return}if(C===$n){I(c,d,m);return}if(k!==2&&S&1&&E)if(k===0)E.beforeEnter(v),r(v,d,m),be(()=>E.enter(v),y);else{const{leave:R,delayLeave:j,afterLeave:M}=E,J=()=>{c.ctx.isUnmounted?i(v):r(v,d,m)},Y=()=>{v._isLeaving&&v[$s](!0),R(v,()=>{J(),M&&M()})};j?j(v,J,Y):Y()}else r(v,d,m)},ve=(c,d,m,k=!1,y=!1)=>{const{type:v,props:C,ref:E,children:A,dynamicChildren:S,shapeFlag:L,patchFlag:R,dirs:j,cacheIndex:M,memo:J}=c;if(R===-2&&(y=!1),E!=null&&(tt(),Ut(E,null,m,c,!0),nt()),M!=null&&(d.renderCache[M]=void 0),L&256){d.ctx.deactivate(c);return}const Y=L&1&&j,Z=!Wt(c);let re;if(Z&&(re=C&&C.onVnodeBeforeUnmount)&&Fe(re,d,c),L&6)ht(c.component,m,k);else{if(L&128){c.suspense.unmount(m,k);return}Y&&kt(c,null,d,"beforeUnmount"),L&64?c.type.remove(c,d,m,D,k):S&&!S.hasOnce&&(v!==xe||R>0&&R&64)?_e(S,d,m,!1,!0):(v===xe&&R&384||!y&&L&16)&&_e(A,d,m),k&&_t(c)}const le=J!=null&&M==null;(Z&&(re=C&&C.onVnodeUnmounted)||Y||le)&&be(()=>{re&&Fe(re,d,c),Y&&kt(c,null,d,"unmounted"),le&&(c.el=null)},m)},_t=c=>{const{type:d,el:m,anchor:k,transition:y}=c;if(d===xe){Pt(m,k);return}if(d===$n){O(c);return}const v=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(c.shapeFlag&1&&y&&!y.persisted){const{leave:C,delayLeave:E}=y,A=()=>C(m,v);E?E(c.el,v,A):A()}else v()},Pt=(c,d)=>{let m;for(;c!==d;)m=g(c),i(c),c=m;i(d)},ht=(c,d,m)=>{const{bum:k,scope:y,job:v,subTree:C,um:E,m:A,a:S}=c;ai(A),ai(S),k&&Bn(k),y.stop(),v&&(v.flags|=8,ve(C,c,d,m)),E&&be(E,d),be(()=>{c.isUnmounted=!0},d)},_e=(c,d,m,k=!1,y=!1,v=0)=>{for(let C=v;C<c.length;C++)ve(c[C],d,m,k,y)},b=c=>{if(c.shapeFlag&6)return b(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const d=g(c.anchor||c.el),m=d&&d[Ws];return m?g(m):d};let w=!1;const P=(c,d,m)=>{let k;c==null?d._vnode&&(ve(d._vnode,null,null,!0),k=d._vnode.component):_(d._vnode||null,c,d,null,null,null,m),d._vnode=c,w||(w=!0,Wr(k),da(),w=!1)},D={p:_,um:ve,m:qe,r:_t,mt:Nt,mc:De,pc:B,pbc:je,n:b,o:e};return{render:P,hydrate:void 0,createApp:yo(P)}}function zn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function qo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ja(e,t,n=!1){const r=e.children,i=t.children;if(N(r)&&N(i))for(let a=0;a<r.length;a++){const s=r[a];let o=i[a];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[a]=Xe(i[a]),o.el=s.el),!n&&o.patchFlag!==-2&&ja(s,o)),o.type===Nn&&(o.patchFlag===-1&&(o=i[a]=Xe(o)),o.el=s.el),o.type===mt&&!o.el&&(o.el=s.el)}}function Mo(e){const t=e.slice(),n=[0];let r,i,a,s,o;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,s=n.length-1;a<s;)o=a+s>>1,e[n[o]]<f?a=o+1:s=o;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=t[s];return n}function La(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:La(t)}function ai(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function qa(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?qa(t.subTree):null}const Ma=e=>e.__isSuspense;function No(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):Ks(e)}const xe=Symbol.for("v-fgt"),Nn=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),$t=[];let Ce=null;function Pe(e=!1){$t.push(Ce=e?null:[])}function Vo(){$t.pop(),Ce=$t[$t.length-1]||null}let tn=1;function Cn(e,t=!1){tn+=e,e<0&&Ce&&t&&(Ce.hasOnce=!0)}function Na(e){return e.dynamicChildren=tn>0?Ce||Tt:null,Vo(),tn>0&&Ce&&Ce.push(e),e}function ft(e,t,n,r,i,a){return Na(U(e,t,n,r,i,a,!0))}function Vn(e,t,n,r,i){return Na(he(e,t,n,r,i,!0))}function _n(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Va=({key:e})=>e??null,gn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||fe(e)||F(e)?{i:we,r:e,k:t,f:!!n}:e:null);function U(e,t=null,n=null,r=0,i=null,a=e===xe?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Va(t),ref:t&&gn(t),scopeId:pa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:we};return o?(qr(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),tn>0&&!s&&Ce&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ce.push(l),l}const he=Fo;function Fo(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===uo)&&(e=mt),_n(e)){const o=Lt(e,t,!0);return n&&qr(o,n),tn>0&&!a&&Ce&&(o.shapeFlag&6?Ce[Ce.indexOf(e)]=o:Ce.push(o)),o.patchFlag=-2,o}if(Xo(e)&&(e=e.__vccOpts),t){t=Ho(t);let{class:o,style:l}=t;o&&!ie(o)&&(t.class=sn(o)),W(l)&&(wr(l)&&!N(l)&&(l=ce({},l)),t.style=In(l))}const s=ie(e)?1:Ma(e)?128:zs(e)?64:W(e)?4:F(e)?2:0;return U(e,t,n,r,i,s,a,!0)}function Ho(e){return e?wr(e)||xa(e)?ce({},e):e:null}function Lt(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:s,children:o,transition:l}=e,f=t?Bo(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Va(f),ref:t&&t.ref?n&&a?N(a)?a.concat(gn(t)):[a,gn(t)]:gn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Ir(u,l.clone(u)),u}function fr(e=" ",t=0){return he(Nn,null,e,t)}function Jo(e="",t=!1){return t?(Pe(),Vn(mt,null,e)):he(mt,null,e)}function Be(e){return e==null||typeof e=="boolean"?he(mt):N(e)?he(xe,null,e.slice()):_n(e)?Xe(e):he(Nn,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function qr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),qr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!xa(t)?t._ctx=we:i===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[fr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bo(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=sn([t.class,r.class]));else if(i==="style")t.style=In([t.style,r.style]);else if(Rn(i)){const a=t[i],s=r[i];s&&a!==s&&!(N(a)&&a.includes(s))?t[i]=a?[].concat(a,s):s:s==null&&a==null&&!xn(i)&&(t[i]=s)}else i!==""&&(t[i]=r[i])}return t}function Fe(e,t,n,r=null){We(e,t,7,[n,r])}const Ko=Ea();let Go=0;function Qo(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Ko,a={uid:Go++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ta(r,i),emitsOptions:Ca(r,i),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ao.bind(null,a),e.ce&&e.ce(a),a}let de=null;const Uo=()=>de||we;let Pn,pr;{const e=On(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(s=>s(a)):i[0](a)}};Pn=t("__VUE_INSTANCE_SETTERS__",n=>de=n),pr=t("__VUE_SSR_SETTERS__",n=>nn=n)}const cn=e=>{const t=de;return Pn(e),e.scope.on(),()=>{e.scope.off(),Pn(t)}},si=()=>{de&&de.scope.off(),Pn(null)};function Fa(e){return e.vnode.shapeFlag&4}let nn=!1;function Wo(e,t=!1,n=!1){t&&pr(t);const{props:r,children:i}=e.vnode,a=Fa(e);xo(e,r,a,t),Io(e,i,n||t);const s=a?zo(e,t):void 0;return t&&pr(!1),s}function zo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,po);const{setup:r}=n;if(r){tt();const i=e.setupContext=r.length>1?Yo(e):null,a=cn(e),s=on(r,e,0,[e.props,i]),o=Ni(s);if(nt(),a(),(o||e.sp)&&!Wt(e)&&ha(e),o){if(s.then(si,si),t)return s.then(l=>{oi(e,l)}).catch(l=>{Ln(l,e,0)});e.asyncDep=s}else oi(e,s)}else Ha(e)}function oi(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:W(t)&&(e.setupState=oa(t)),Ha(e)}function Ha(e,t,n){const r=e.type;e.render||(e.render=r.render||Ge);{const i=cn(e);tt();try{mo(e)}finally{nt(),i()}}}const $o={get(e,t){return ue(e,"get",""),e[t]}};function Yo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,$o),slots:e.slots,emit:e.emit,expose:t}}function Mr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(oa(js(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zt)return zt[n](e)},has(t,n){return n in t||n in zt}})):e.proxy}function Zo(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function Xo(e){return F(e)&&"__vccOpts"in e}const Ee=(e,t)=>Vs(e,t,nn);function Ja(e,t,n){try{Cn(-1);const r=arguments.length;return r===2?W(t)&&!N(t)?_n(t)?he(e,null,[t]):he(e,t):he(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_n(n)&&(n=[n]),he(e,t,n))}finally{Cn(1)}}const el="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mr;const li=typeof window<"u"&&window.trustedTypes;if(li)try{mr=li.createPolicy("vue",{createHTML:e=>e})}catch{}const Ba=mr?e=>mr.createHTML(e):e=>e,tl="http://www.w3.org/2000/svg",nl="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,ci=Ze&&Ze.createElement("template"),rl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Ze.createElementNS(tl,e):t==="mathml"?Ze.createElementNS(nl,e):n?Ze.createElement(e,{is:n}):Ze.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ze.createTextNode(e),createComment:e=>Ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const s=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ci.innerHTML=Ba(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=ci.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},il=Symbol("_vtc");function al(e,t,n){const r=e[il];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ui=Symbol("_vod"),sl=Symbol("_vsh"),ol=Symbol(""),ll=/(?:^|;)\s*display\s*:/;function cl(e,t,n){const r=e.style,i=ie(n);let a=!1;if(n&&!i){if(t)if(ie(t))for(const s of t.split(";")){const o=s.slice(0,s.indexOf(":")).trim();n[o]==null&&hn(r,o,"")}else for(const s in t)n[s]==null&&hn(r,s,"");for(const s in n)s==="display"&&(a=!0),hn(r,s,n[s])}else if(i){if(t!==n){const s=r[ol];s&&(n+=";"+s),r.cssText=n,a=ll.test(n)}}else t&&e.removeAttribute("style");ui in e&&(e[ui]=a?r.display:"",e[sl]&&(r.display="none"))}const di=/\s*!important$/;function hn(e,t,n){if(N(n))n.forEach(r=>hn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ul(e,t);di.test(n)?e.setProperty(Et(r),n.replace(di,""),"important"):e[r]=n}}const fi=["Webkit","Moz","ms"],Yn={};function ul(e,t){const n=Yn[t];if(n)return n;let r=ke(t);if(r!=="filter"&&r in e)return Yn[t]=r;r=Tn(r);for(let i=0;i<fi.length;i++){const a=fi[i]+r;if(a in e)return Yn[t]=a}return t}const pi="http://www.w3.org/1999/xlink";function mi(e,t,n,r,i,a=fs(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(pi,t.slice(6,t.length)):e.setAttributeNS(pi,t,n):n==null||a&&!Ji(n)?e.removeAttribute(t):e.setAttribute(t,a?"":Ue(n)?String(n):n)}function gi(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ba(n):n);return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const o=a==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Ji(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function dl(e,t,n,r){e.addEventListener(t,n,r)}function fl(e,t,n,r){e.removeEventListener(t,n,r)}const hi=Symbol("_vei");function pl(e,t,n,r,i=null){const a=e[hi]||(e[hi]={}),s=a[t];if(r&&s)s.value=r;else{const[o,l]=ml(t);if(r){const f=a[t]=kl(r,i);dl(e,o,f,l)}else s&&(fl(e,o,s,l),a[t]=void 0)}}const ki=/(?:Once|Passive|Capture)$/;function ml(e){let t;if(ki.test(e)){t={};let r;for(;r=e.match(ki);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Et(e.slice(2)),t]}let Zn=0;const gl=Promise.resolve(),hl=()=>Zn||(gl.then(()=>Zn=0),Zn=Date.now());function kl(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;We(vl(r,n.value),t,5,[r])};return n.value=e,n.attached=hl(),n}function vl(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const vi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,bl=(e,t,n,r,i,a)=>{const s=i==="svg";t==="class"?al(e,r,s):t==="style"?cl(e,n,r):Rn(t)?xn(t)||pl(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yl(e,t,r,s))?(gi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&mi(e,t,r,s,a,t!=="value")):e._isVueCE&&(Sl(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ie(r)))?gi(e,ke(t),r,a,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),mi(e,t,r,s))};function yl(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&vi(t)&&F(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return vi(t)&&ie(n)?!1:t in e}function Sl(e,t){const n=e._def.props;if(!n)return!1;const r=ke(t);return Array.isArray(n)?n.some(i=>ke(i)===r):Object.keys(n).some(i=>ke(i)===r)}const Al=ce({patchProp:bl},rl);let bi;function El(){return bi||(bi=jo(Al))}const Cl=(...e)=>{const t=El().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Pl(r);if(!i)return;const a=t._component;!F(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,_l(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function _l(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Pl(e){return ie(e)?document.querySelector(e):e}const Fn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Rl={};function xl(e,t){const n=Dr("RouterView");return Pe(),Vn(n)}const wl=Fn(Rl,[["render",xl]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const wt=typeof document<"u";function Ka(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ka(e.default)}const K=Object.assign;function Xn(e,t){const n={};for(const r in t){const i=t[r];n[r]=Ie(i)?i.map(e):e(i)}return n}const Yt=()=>{},Ie=Array.isArray;function yi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Ga=/#/g,Ol=/&/g,Il=/\//g,Dl=/=/g,jl=/\?/g,Qa=/\+/g,Ll=/%5B/g,ql=/%5D/g,Ua=/%5E/g,Ml=/%60/g,Wa=/%7B/g,Nl=/%7C/g,za=/%7D/g,Vl=/%20/g;function Nr(e){return e==null?"":encodeURI(""+e).replace(Nl,"|").replace(Ll,"[").replace(ql,"]")}function Fl(e){return Nr(e).replace(Wa,"{").replace(za,"}").replace(Ua,"^")}function gr(e){return Nr(e).replace(Qa,"%2B").replace(Vl,"+").replace(Ga,"%23").replace(Ol,"%26").replace(Ml,"`").replace(Wa,"{").replace(za,"}").replace(Ua,"^")}function Hl(e){return gr(e).replace(Dl,"%3D")}function Jl(e){return Nr(e).replace(Ga,"%23").replace(jl,"%3F")}function Bl(e){return Jl(e).replace(Il,"%2F")}function rn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Kl=/\/$/,Gl=e=>e.replace(Kl,"");function er(e,t,n="/"){let r,i={},a="",s="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(r=t.slice(0,l),a=t.slice(l,o>0?o:t.length),i=e(a.slice(1))),o>=0&&(r=r||t.slice(0,o),s=t.slice(o,t.length)),r=zl(r??t,n),{fullPath:r+a+s,path:r,query:i,hash:rn(s)}}function Ql(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Si(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ul(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&qt(t.matched[r],n.matched[i])&&$a(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $a(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Wl(e[n],t[n]))return!1;return!0}function Wl(e,t){return Ie(e)?Ai(e,t):Ie(t)?Ai(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ai(e,t){return Ie(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function zl(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let a=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let hr=function(e){return e.pop="pop",e.push="push",e}({}),tr=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function $l(e){if(!e)if(wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gl(e)}const Yl=/^[^#]+#/;function Zl(e,t){return e.replace(Yl,"#")+t}function Xl(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Hn=()=>({left:window.scrollX,top:window.scrollY});function ec(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Xl(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ei(e,t){return(history.state?history.state.position-t:-1)+e}const kr=new Map;function tc(e,t){kr.set(e,t)}function nc(e){const t=kr.get(e);return kr.delete(e),t}function rc(e){return typeof e=="string"||e&&typeof e=="object"}function Ya(e){return typeof e=="string"||typeof e=="symbol"}let ne=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Za=Symbol("");ne.MATCHER_NOT_FOUND+"",ne.NAVIGATION_GUARD_REDIRECT+"",ne.NAVIGATION_ABORTED+"",ne.NAVIGATION_CANCELLED+"",ne.NAVIGATION_DUPLICATED+"";function Mt(e,t){return K(new Error,{type:e,[Za]:!0},t)}function Ye(e,t){return e instanceof Error&&Za in e&&(t==null||!!(e.type&t))}const ic=["params","query","hash"];function ac(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of ic)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function sc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(Qa," "),a=i.indexOf("="),s=rn(a<0?i:i.slice(0,a)),o=a<0?null:rn(i.slice(a+1));if(s in t){let l=t[s];Ie(l)||(l=t[s]=[l]),l.push(o)}else t[s]=o}return t}function Ci(e){let t="";for(let n in e){const r=e[n];if(n=Hl(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ie(r)?r.map(i=>i&&gr(i)):[r&&gr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function oc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ie(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const lc=Symbol(""),_i=Symbol(""),Vr=Symbol(""),Fr=Symbol(""),vr=Symbol("");function Jt(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ut(e,t,n,r,i,a=s=>s()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const f=g=>{g===!1?l(Mt(ne.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?l(g):rc(g)?l(Mt(ne.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(s&&r.enterCallbacks[i]===s&&typeof g=="function"&&s.push(g),o())},u=a(()=>e.call(r&&r.instances[i],t,n,f));let p=Promise.resolve(u);e.length<3&&(p=p.then(f)),p.catch(g=>l(g))})}function nr(e,t,n,r,i=a=>a()){const a=[];for(const s of e)for(const o in s.components){let l=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(Ka(l)){const f=(l.__vccOpts||l)[t];f&&a.push(ut(f,n,r,s,o,i))}else{let f=l();a.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${s.path}"`);const p=Tl(u)?u.default:u;s.mods[o]=u,s.components[o]=p;const g=(p.__vccOpts||p)[t];return g&&ut(g,n,r,s,o,i)()}))}}return a}function cc(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const o=t.matched[s];o&&(e.matched.find(f=>qt(f,o))?r.push(o):n.push(o));const l=e.matched[s];l&&(t.matched.find(f=>qt(f,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let uc=()=>location.protocol+"//"+location.host;function Xa(e,t){const{pathname:n,search:r,hash:i}=t,a=e.indexOf("#");if(a>-1){let s=i.includes(e.slice(a))?e.slice(a).length:1,o=i.slice(s);return o[0]!=="/"&&(o="/"+o),Si(o,"")}return Si(n,e)+r+i}function dc(e,t,n,r){let i=[],a=[],s=null;const o=({state:g})=>{const h=Xa(e,location),T=n.value,_=t.value;let V=0;if(g){if(n.value=h,t.value=g,s&&s===T){s=null;return}V=_?g.position-_.position:0}else r(h);i.forEach(q=>{q(n.value,T,{delta:V,type:hr.pop,direction:V?V>0?tr.forward:tr.back:tr.unknown})})};function l(){s=n.value}function f(g){i.push(g);const h=()=>{const T=i.indexOf(g);T>-1&&i.splice(T,1)};return a.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(K({},g.state,{scroll:Hn()}),"")}}function p(){for(const g of a)g();a=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:f,destroy:p}}function Pi(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Hn():null}}function fc(e){const{history:t,location:n}=window,r={value:Xa(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,f,u){const p=e.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:uc()+e+l;try{t[u?"replaceState":"pushState"](f,"",g),i.value=f}catch(h){console.error(h),n[u?"replace":"assign"](g)}}function s(l,f){a(l,K({},t.state,Pi(i.value.back,l,i.value.forward,!0),f,{position:i.value.position}),!0),r.value=l}function o(l,f){const u=K({},i.value,t.state,{forward:l,scroll:Hn()});a(u.current,u,!0),a(l,K({},Pi(r.value,l,null),{position:u.position+1},f),!1),r.value=l}return{location:r,state:i,push:o,replace:s}}function pc(e){e=$l(e);const t=fc(e),n=dc(e,t.state,t.location,t.replace);function r(a,s=!0){s||n.pauseListeners(),history.go(a)}const i=K({location:"",base:e,go:r,createHref:Zl.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}let yt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var ae=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(ae||{});const mc={type:yt.Static,value:""},gc=/[a-zA-Z0-9_]/;function hc(e){if(!e)return[[]];if(e==="/")return[[mc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${f}": ${h}`)}let n=ae.Static,r=n;const i=[];let a;function s(){a&&i.push(a),a=[]}let o=0,l,f="",u="";function p(){f&&(n===ae.Static?a.push({type:yt.Static,value:f}):n===ae.Param||n===ae.ParamRegExp||n===ae.ParamRegExpEnd?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:yt.Param,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function g(){f+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==ae.ParamRegExp){r=n,n=ae.EscapeNext;continue}switch(n){case ae.Static:l==="/"?(f&&p(),s()):l===":"?(p(),n=ae.Param):g();break;case ae.EscapeNext:g(),n=r;break;case ae.Param:l==="("?n=ae.ParamRegExp:gc.test(l)?g():(p(),n=ae.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case ae.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=ae.ParamRegExpEnd:u+=l;break;case ae.ParamRegExpEnd:p(),n=ae.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===ae.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),p(),s(),i}const Ri="[^/]+?",kc={sensitive:!1,strict:!1,start:!0,end:!0};var me=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(me||{});const vc=/[.+*?^${}()[\]/\\]/g;function bc(e,t){const n=K({},kc,t),r=[];let i=n.start?"^":"";const a=[];for(const f of e){const u=f.length?[]:[me.Root];n.strict&&!f.length&&(i+="/");for(let p=0;p<f.length;p++){const g=f[p];let h=me.Segment+(n.sensitive?me.BonusCaseSensitive:0);if(g.type===yt.Static)p||(i+="/"),i+=g.value.replace(vc,"\\$&"),h+=me.Static;else if(g.type===yt.Param){const{value:T,repeatable:_,optional:V,regexp:q}=g;a.push({name:T,repeatable:_,optional:V});const x=q||Ri;if(x!==Ri){h+=me.BonusCustomRegExp;try{`${x}`}catch(O){throw new Error(`Invalid custom RegExp for param "${T}" (${x}): `+O.message)}}let I=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(I=V&&f.length<2?`(?:/${I})`:"/"+I),V&&(I+="?"),i+=I,h+=me.Dynamic,V&&(h+=me.BonusOptional),_&&(h+=me.BonusRepeatable),x===".*"&&(h+=me.BonusWildcard)}u.push(h)}r.push(u)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=me.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function o(f){const u=f.match(s),p={};if(!u)return null;for(let g=1;g<u.length;g++){const h=u[g]||"",T=a[g-1];p[T.name]=h&&T.repeatable?h.split("/"):h}return p}function l(f){let u="",p=!1;for(const g of e){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const h of g)if(h.type===yt.Static)u+=h.value;else if(h.type===yt.Param){const{value:T,repeatable:_,optional:V}=h,q=T in f?f[T]:"";if(Ie(q)&&!_)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const x=Ie(q)?q.join("/"):q;if(!x)if(V)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${T}"`);u+=x}}return u||"/"}return{re:s,score:r,keys:a,parse:o,stringify:l}}function yc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===me.Static+me.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===me.Static+me.Segment?1:-1:0}function es(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=yc(r[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-r.length)===1){if(xi(r))return 1;if(xi(i))return-1}return i.length-r.length}function xi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Sc={strict:!1,end:!0,sensitive:!1};function Ac(e,t,n){const r=bc(hc(e.path),n),i=K(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Ec(e,t){const n=[],r=new Map;t=yi(Sc,t);function i(p){return r.get(p)}function a(p,g,h){const T=!h,_=Ti(p);_.aliasOf=h&&h.record;const V=yi(t,p),q=[_];if("alias"in p){const O=typeof p.alias=="string"?[p.alias]:p.alias;for(const $ of O)q.push(Ti(K({},_,{components:h?h.record.components:_.components,path:$,aliasOf:h?h.record:_})))}let x,I;for(const O of q){const{path:$}=O;if(g&&$[0]!=="/"){const oe=g.record.path,te=oe[oe.length-1]==="/"?"":"/";O.path=g.record.path+($&&te+$)}if(x=Ac(O,g,V),h?h.alias.push(x):(I=I||x,I!==x&&I.alias.push(x),T&&p.name&&!Oi(x)&&s(p.name)),ts(x)&&l(x),_.children){const oe=_.children;for(let te=0;te<oe.length;te++)a(oe[te],x,h&&h.children[te])}h=h||x}return I?()=>{s(I)}:Yt}function s(p){if(Ya(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(s),g.alias.forEach(s))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(s),p.alias.forEach(s))}}function o(){return n}function l(p){const g=Pc(p,n);n.splice(g,0,p),p.record.name&&!Oi(p)&&r.set(p.record.name,p)}function f(p,g){let h,T={},_,V;if("name"in p&&p.name){if(h=r.get(p.name),!h)throw Mt(ne.MATCHER_NOT_FOUND,{location:p});V=h.record.name,T=K(wi(g.params,h.keys.filter(I=>!I.optional).concat(h.parent?h.parent.keys.filter(I=>I.optional):[]).map(I=>I.name)),p.params&&wi(p.params,h.keys.map(I=>I.name))),_=h.stringify(T)}else if(p.path!=null)_=p.path,h=n.find(I=>I.re.test(_)),h&&(T=h.parse(_),V=h.record.name);else{if(h=g.name?r.get(g.name):n.find(I=>I.re.test(g.path)),!h)throw Mt(ne.MATCHER_NOT_FOUND,{location:p,currentLocation:g});V=h.record.name,T=K({},g.params,p.params),_=h.stringify(T)}const q=[];let x=h;for(;x;)q.unshift(x.record),x=x.parent;return{name:V,path:_,params:T,matched:q,meta:_c(q)}}e.forEach(p=>a(p));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:f,removeRoute:s,clearRoutes:u,getRoutes:o,getRecordMatcher:i}}function wi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ti(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Cc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Cc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Oi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _c(e){return e.reduce((t,n)=>K(t,n.meta),{})}function Pc(e,t){let n=0,r=t.length;for(;n!==r;){const a=n+r>>1;es(e,t[a])<0?r=a:n=a+1}const i=Rc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Rc(e){let t=e;for(;t=t.parent;)if(ts(t)&&es(e,t)===0)return t}function ts({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ii(e){const t=Qe(Vr),n=Qe(Fr),r=Ee(()=>{const l=pt(e.to);return t.resolve(l)}),i=Ee(()=>{const{matched:l}=r.value,{length:f}=l,u=l[f-1],p=n.matched;if(!u||!p.length)return-1;const g=p.findIndex(qt.bind(null,u));if(g>-1)return g;const h=Di(l[f-2]);return f>1&&Di(u)===h&&p[p.length-1].path!==h?p.findIndex(qt.bind(null,l[f-2])):g}),a=Ee(()=>i.value>-1&&Ic(n.params,r.value.params)),s=Ee(()=>i.value>-1&&i.value===n.matched.length-1&&$a(n.params,r.value.params));function o(l={}){if(Oc(l)){const f=t[pt(e.replace)?"replace":"push"](pt(e.to)).catch(Yt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:a,isExactActive:s,navigate:o}}function xc(e){return e.length===1?e[0]:e}const wc=ln({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ii,setup(e,{slots:t}){const n=jn(Ii(e)),{options:r}=Qe(Vr),i=Ee(()=>({[ji(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ji(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&xc(t.default(n));return e.custom?a:Ja("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),Tc=wc;function Oc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ic(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ie(i)||i.length!==r.length||r.some((a,s)=>a.valueOf()!==i[s].valueOf()))return!1}return!0}function Di(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ji=(e,t,n)=>e??t??n,Dc=ln({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Qe(vr),i=Ee(()=>e.route||r.value),a=Qe(_i,0),s=Ee(()=>{let f=pt(a);const{matched:u}=i.value;let p;for(;(p=u[f])&&!p.components;)f++;return f}),o=Ee(()=>i.value.matched[s.value]);pn(_i,Ee(()=>s.value+1)),pn(lc,o),pn(vr,i);const l=Tr();return mn(()=>[l.value,o.value,e.name],([f,u,p],[g,h,T])=>{u&&(u.instances[p]=f,h&&h!==u&&f&&f===g&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),f&&u&&(!h||!qt(u,h)||!g)&&(u.enterCallbacks[p]||[]).forEach(_=>_(f))},{flush:"post"}),()=>{const f=i.value,u=e.name,p=o.value,g=p&&p.components[u];if(!g)return Li(n.default,{Component:g,route:f});const h=p.props[u],T=h?h===!0?f.params:typeof h=="function"?h(f):h:null,V=Ja(g,K({},T,t,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[u]=null)},ref:l}));return Li(n.default,{Component:V,route:f})||V}}});function Li(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const jc=Dc;function Lc(e){const t=Ec(e.routes,e),n=e.parseQuery||sc,r=e.stringifyQuery||Ci,i=e.history,a=Jt(),s=Jt(),o=Jt(),l=Ls(lt);let f=lt;wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xn.bind(null,b=>""+b),p=Xn.bind(null,Bl),g=Xn.bind(null,rn);function h(b,w){let P,D;return Ya(b)?(P=t.getRecordMatcher(b),D=w):D=b,t.addRoute(D,P)}function T(b){const w=t.getRecordMatcher(b);w&&t.removeRoute(w)}function _(){return t.getRoutes().map(b=>b.record)}function V(b){return!!t.getRecordMatcher(b)}function q(b,w){if(w=K({},w||l.value),typeof b=="string"){const m=er(n,b,w.path),k=t.resolve({path:m.path},w),y=i.createHref(m.fullPath);return K(m,k,{params:g(k.params),hash:rn(m.hash),redirectedFrom:void 0,href:y})}let P;if(b.path!=null)P=K({},b,{path:er(n,b.path,w.path).path});else{const m=K({},b.params);for(const k in m)m[k]==null&&delete m[k];P=K({},b,{params:p(m)}),w.params=p(w.params)}const D=t.resolve(P,w),H=b.hash||"";D.params=u(g(D.params));const c=Ql(r,K({},b,{hash:Fl(H),path:D.path})),d=i.createHref(c);return K({fullPath:c,hash:H,query:r===Ci?oc(b.query):b.query||{}},D,{redirectedFrom:void 0,href:d})}function x(b){return typeof b=="string"?er(n,b,l.value.path):K({},b)}function I(b,w){if(f!==b)return Mt(ne.NAVIGATION_CANCELLED,{from:w,to:b})}function O(b){return te(b)}function $(b){return O(K(x(b),{replace:!0}))}function oe(b,w){const P=b.matched[b.matched.length-1];if(P&&P.redirect){const{redirect:D}=P;let H=typeof D=="function"?D(b,w):D;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=x(H):{path:H},H.params={}),K({query:b.query,hash:b.hash,params:H.path!=null?{}:b.params},H)}}function te(b,w){const P=f=q(b),D=l.value,H=b.state,c=b.force,d=b.replace===!0,m=oe(P,D);if(m)return te(K(x(m),{state:typeof m=="object"?K({},H,m.state):H,force:c,replace:d}),w||P);const k=P;k.redirectedFrom=w;let y;return!c&&Ul(r,D,P)&&(y=Mt(ne.NAVIGATION_DUPLICATED,{to:k,from:D}),qe(D,D,!0,!1)),(y?Promise.resolve(y):je(k,D)).catch(v=>Ye(v)?Ye(v,ne.NAVIGATION_GUARD_REDIRECT)?v:ot(v):B(v,k,D)).then(v=>{if(v){if(Ye(v,ne.NAVIGATION_GUARD_REDIRECT))return te(K({replace:d},x(v.to),{state:typeof v.to=="object"?K({},H,v.to.state):H,force:c}),w||k)}else v=gt(k,D,!0,d,H);return st(k,D,v),v})}function De(b,w){const P=I(b,w);return P?Promise.reject(P):Promise.resolve()}function at(b){const w=Pt.values().next().value;return w&&typeof w.runWithContext=="function"?w.runWithContext(b):b()}function je(b,w){let P;const[D,H,c]=cc(b,w);P=nr(D.reverse(),"beforeRouteLeave",b,w);for(const m of D)m.leaveGuards.forEach(k=>{P.push(ut(k,b,w))});const d=De.bind(null,b,w);return P.push(d),_e(P).then(()=>{P=[];for(const m of a.list())P.push(ut(m,b,w));return P.push(d),_e(P)}).then(()=>{P=nr(H,"beforeRouteUpdate",b,w);for(const m of H)m.updateGuards.forEach(k=>{P.push(ut(k,b,w))});return P.push(d),_e(P)}).then(()=>{P=[];for(const m of c)if(m.beforeEnter)if(Ie(m.beforeEnter))for(const k of m.beforeEnter)P.push(ut(k,b,w));else P.push(ut(m.beforeEnter,b,w));return P.push(d),_e(P)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),P=nr(c,"beforeRouteEnter",b,w,at),P.push(d),_e(P))).then(()=>{P=[];for(const m of s.list())P.push(ut(m,b,w));return P.push(d),_e(P)}).catch(m=>Ye(m,ne.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function st(b,w,P){o.list().forEach(D=>at(()=>D(b,w,P)))}function gt(b,w,P,D,H){const c=I(b,w);if(c)return c;const d=w===lt,m=wt?history.state:{};P&&(D||d?i.replace(b.fullPath,K({scroll:d&&m&&m.scroll},H)):i.push(b.fullPath,H)),l.value=b,qe(b,w,P,d),ot()}let Le;function Nt(){Le||(Le=i.listen((b,w,P)=>{if(!ht.listening)return;const D=q(b),H=oe(D,ht.currentRoute.value);if(H){te(K(H,{replace:!0,force:!0}),D).catch(Yt);return}f=D;const c=l.value;wt&&tc(Ei(c.fullPath,P.delta),Hn()),je(D,c).catch(d=>Ye(d,ne.NAVIGATION_ABORTED|ne.NAVIGATION_CANCELLED)?d:Ye(d,ne.NAVIGATION_GUARD_REDIRECT)?(te(K(x(d.to),{force:!0}),D).then(m=>{Ye(m,ne.NAVIGATION_ABORTED|ne.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===hr.pop&&i.go(-1,!1)}).catch(Yt),Promise.reject()):(P.delta&&i.go(-P.delta,!1),B(d,D,c))).then(d=>{d=d||gt(D,c,!1),d&&(P.delta&&!Ye(d,ne.NAVIGATION_CANCELLED)?i.go(-P.delta,!1):P.type===hr.pop&&Ye(d,ne.NAVIGATION_ABORTED|ne.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),st(D,c,d)}).catch(Yt)}))}let Ct=Jt(),se=Jt(),z;function B(b,w,P){ot(b);const D=se.list();return D.length?D.forEach(H=>H(b,w,P)):console.error(b),Promise.reject(b)}function ze(){return z&&l.value!==lt?Promise.resolve():new Promise((b,w)=>{Ct.add([b,w])})}function ot(b){return z||(z=!b,Nt(),Ct.list().forEach(([w,P])=>b?P(b):w()),Ct.reset()),b}function qe(b,w,P,D){const{scrollBehavior:H}=e;if(!wt||!H)return Promise.resolve();const c=!P&&nc(Ei(b.fullPath,0))||(D||!P)&&history.state&&history.state.scroll||null;return ca().then(()=>H(b,w,c)).then(d=>d&&ec(d)).catch(d=>B(d,b,w))}const ve=b=>i.go(b);let _t;const Pt=new Set,ht={currentRoute:l,listening:!0,addRoute:h,removeRoute:T,clearRoutes:t.clearRoutes,hasRoute:V,getRoutes:_,resolve:q,options:e,push:O,replace:$,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:a.add,beforeResolve:s.add,afterEach:o.add,onError:se.add,isReady:ze,install(b){b.component("RouterLink",Tc),b.component("RouterView",jc),b.config.globalProperties.$router=ht,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(l)}),wt&&!_t&&l.value===lt&&(_t=!0,O(i.location).catch(D=>{}));const w={};for(const D in lt)Object.defineProperty(w,D,{get:()=>l.value[D],enumerable:!0});b.provide(Vr,ht),b.provide(Fr,aa(w)),b.provide(vr,l);const P=b.unmount;Pt.add(b),b.unmount=function(){Pt.delete(b),Pt.size<1&&(f=lt,Le&&Le(),Le=null,l.value=lt,_t=!1,z=!1),P()}}};function _e(b){return b.reduce((w,P)=>w.then(()=>at(P)),Promise.resolve())}return ht}function qc(e){return Qe(Fr)}const kn=[{id:"java-grunder",title:"Java – Grunder och avancerat",color:"#1e40af",icon:"☕",questions:[{id:1,question:"Vad är skillnaden mellan en abstrakt klass och ett interface i Java?",answer:`En abstrakt klass kan ha tillstånd (fält), konstruktorer och konkreta metoder, medan ett interface (sedan Java 8) kan ha default- och statiska metoder men inget tillstånd. En klass kan bara ärva från en abstrakt klass men implementera flera interfaces.

Använd abstrakt klass när klasser delar implementering; interface när du vill definiera ett kontrakt.`,tip:"Nämn ett exempel från ett projekt där du valde det ena framför det andra och varför."},{id:2,question:"Förklara skillnaden mellan HashMap och ConcurrentHashMap.",answer:`HashMap är inte trådsäker – om flera trådar skriver samtidigt kan det orsaka race conditions. ConcurrentHashMap använder segment-locking (Java 7) eller CAS-operationer (Java 8+) för att möjliggöra parallell läsning och skrivning utan att låsa hela kartan.

Lämplig i flertrådade miljöer som en mikroserviceapplikation.`,tip:"Systemet hanterar höga volymer – trådsäkerhet är relevant att lyfta."},{id:3,question:"Vad är Java Streams och ge ett exempel på användning?",answer:`Streams (Java 8+) erbjuder ett funktionellt sätt att bearbeta kollektioner med operationer som filter(), map(), reduce() och collect().

Exempel:
list.stream().filter(e -> e.isActive()).map(Employee::getName).collect(Collectors.toList())

Lazy evaluation gör det effektivt; parallelStream() möjliggör parallell bearbetning.`,tip:"Visa att du kan skriva ren, modern Java-kod."},{id:4,question:"Vad innebär Optional och varför används det?",answer:`Optional är en container som antingen innehåller ett värde eller är tom. Det ersätter null-returvärden och tvingar anroparen att hantera avsaknad av värde explicit med isPresent(), orElse() eller ifPresent().

Det minskar risken för NullPointerException och gör API:er mer expressiva.`},{id:5,question:"Förklara minnesbehantning och Garbage Collection i JVM.",answer:`JVM delar heap i Young Generation (Eden + Survivor) och Old Generation. Kortlivade objekt samlas i Young Gen av Minor GC; långlivade objekt befordras till Old Gen. Major/Full GC rensar Old Gen men är dyrare. G1GC och ZGC är moderna low-pause-collectorer.

Vanliga problem: minneläckor via ej borttagna lyssnare, eller för stora heap-storleksinställningar.`},{id:19,question:"Förklara Java Memory Model (JMM) och vad volatile innebär.",answer:`JMM definierar hur trådar ser varandras skrivningar till minnet. Utan synkronisering kan en tråd se ett inaktuellt cachat värde. volatile garanterar att en variabels värde alltid läses direkt från huvudminnet och att skrivningar omedelbart är synliga för andra trådar.

Det löser visibility-problemet men inte atomicitet – för det används AtomicInteger/AtomicReference eller synchronized-block.`,tip:"Vanlig intervjufråga för senior-nivå."},{id:20,question:"Vad är skillnaden mellan synchronized, ReentrantLock och StampedLock?",answer:`synchronized är enklast – JVM hanterar låsning och upplåsning automatiskt, men erbjuder ingen fairness-garanti eller timeout.

ReentrantLock (java.util.concurrent) ger mer kontroll: tryLock() med timeout, fairness-läge och explicit lock/unlock.

StampedLock (Java 8+) ger optimistisk läsning utan lås – perfekt för read-heavy scenarier. Undvik over-synkronisering; preferera immutable objekt och trådsäkra datastrukturer när möjligt.`},{id:21,question:"Förklara CompletableFuture och asynkron programmering i Java.",answer:`CompletableFuture (Java 8+) möjliggör non-blocking asynkron kod med callbacks. supplyAsync() kör en uppgift i en tråd-pool; thenApply() transformerar resultatet; thenCompose() kedjar asynkrona operationer; exceptionally() hanterar fel.

Exempel:
CompletableFuture.supplyAsync(() -> fetchData()).thenApply(this::transform).join()

I mikrotjänster kan detta användas för att anropa flera tjänster parallellt och kombinera resultaten.`,tip:"Relevant för integrationer mot externa system parallellt."},{id:22,question:"Vad är design patterns och vilka använder du mest i Java?",answer:`Vanliga mönster i Java-backend:
• Singleton (Spring beans är singletons per default)
• Builder (skapar komplexa objekt stegvis – t.ex. Lombok @Builder)
• Factory (skapar objekt utan att exponera skapandelogik)
• Strategy (utbytbar algoritm)
• Observer (event-driven)

I Spring-kontext: Dependency Injection är IoC-mönstret som genomsyrar hela ramverket. Decorator används ofta i Spring Security (filter-kedjor).`,tip:"Lyft ett konkret exempel där du löste ett problem med ett designmönster."},{id:23,question:"Vad är skillnaden mellan checked och unchecked exceptions, och hur designar du felhantering?",answer:`Checked exceptions (t.ex. IOException) måste deklareras eller fångas – de representerar förväntade felfall som anroparen bör hantera.

Unchecked exceptions (RuntimeException och subklasser) behöver inte deklareras och används för programmeringsfel.

Modern Java-praxis: kasta specifika unchecked exceptions, använd custom exception-klasser med meningsfulla meddelanden, och fånga exceptions högt upp i stacken (t.ex. i en global @ControllerAdvice i Spring).

Logga alltid stack trace men exponera inte det till klienten.`}]},{id:"backend-rest",title:"Backend, REST och mikrotjänster",color:"#6d28d9",icon:"🌐",questions:[{id:6,question:"Hur designar du ett RESTful API på ett korrekt sätt?",answer:`Använd rätt HTTP-verb: GET (hämta), POST (skapa), PUT/PATCH (uppdatera), DELETE (ta bort). Resurser namnges med substantiv i plural (/users, /claims).

Returnera korrekta HTTP-statuskoder (200, 201, 400, 404, 500). Versionshantera API:et (/api/v1/).

Använd HATEOAS där det ger värde. Dokumentera med OpenAPI/Swagger.`,tip:"Integration mot externa system – robust API-design är centralt."},{id:7,question:"Vad är mikrotjänster och vilka fördelar/nackdelar har de jämfört med monolit?",answer:`Mikrotjänster är små, självständiga tjänster med enskilt ansvar som kommunicerar via API eller meddelandekö.

Fördelar: oberoende driftsättning, skalbarhet per tjänst, teknikfrihet.

Nackdelar: ökad komplexitet i nätverk och testning, distributed system-problem (latens, konsistens). Platsannonsen nämner mikrotjänster i OpenShift – förtrogenhet med detta är meriterande.`},{id:8,question:"Vad är OpenShift och hur skiljer det sig från Kubernetes?",answer:`OpenShift är Red Hats enterprise-plattform byggd ovanpå Kubernetes. Det lägger till: inbyggd CI/CD (Pipelines), Source-to-Image (S2I), strängare säkerhetspolicyer (SCC), och ett grafiskt webbgränssnitt.

Kubernetes är det underliggande orkestreringslagret. Om du jobbat med kubectl-kommandon och YAML-manifest är kompetensen delvis överförbar.`,tip:"Även om du saknar direkt OpenShift-erfarenhet, lyft Kubernetes/Docker-kunskaper."},{id:9,question:"Hur hanterar du fel och undantag i ett distribuerat system?",answer:`Använd circuit breaker-mönster (t.ex. Resilience4j) för att undvika kaskadfel. Implementera retry med exponential backoff. Logga korrelations-ID:n för att spåra anrop mellan tjänster.

Returnera meningsfulla felmeddelanden utan att exponera interna detaljer. Distinguera mellan client errors (4xx) och server errors (5xx).`}]},{id:"frontend",title:"Frontend – Vue & Angular",color:"#0f766e",icon:"🖥️",questions:[{id:10,question:"Vad är skillnaden mellan Vue och Angular, och när väljer du vilket?",answer:`Angular är ett fullständigt ramverk med inbyggt DI, routing, RxJS och TypeScript-tvång. Vue är progressivt och lättare att börja med, men kan skalas upp med Pinia/Vuex och Vue Router.

Angular passar stora team med strikta konventioner; Vue passar snabb prototyputveckling eller team med blandad bakgrund. Båda ramverk nämns i annonsen – visa att du känner till skillnaderna.`},{id:11,question:"Förklara component-based arkitektur i frontend.",answer:`En komponent kapslar in HTML, CSS och logik i en återanvändbar enhet. Data flödar nedåt via props (Vue) / @Input (Angular), och händelser uppåt via emit / @Output.

State som delas mellan komponenter hanteras med ett state management-bibliotek (Pinia, NgRx). Det möjliggör testning per komponent och återanvändbarhet.`}]},{id:"devops",title:"DevOps, CI/CD och verktyg",color:"#c2410c",icon:"⚙️",questions:[{id:12,question:"Vad innebär DevOps och hur har du arbetat i en DevOps-kultur?",answer:`DevOps bryter ner silos mellan utveckling och drift. Praktiskt innebär det: automatiserade pipelines (CI/CD), infrastructure as code, kontinuerlig monitorering, och ett ansvar hela vägen från kod till produktion.

I agila team innebär det att utvecklarna också driftsätter och övervakar sin kod.`,tip:"Berätta om en pipeline du byggt eller förbättrat, gärna med Jenkins."},{id:13,question:"Förklara Git-flöden – vad är skillnaden mellan merge och rebase?",answer:`Merge skapar en ny merge-commit och bevarar historiken som den var. Rebase skriver om commit-historiken för att lägga dina commits ovanpå en annan branch – ger en linjärare historik men bör undvikas på delade branches.

Feature branch-workflow (GitHub Flow / Gitflow) är vanliga mönster. Bitbucket och Git används i projektet – visa att du är van vid code reviews och PR-processer.`},{id:14,question:"Vad är Jenkins och hur sätter du upp en enkel CI-pipeline?",answer:`Jenkins är en open source automationsserver. En pipeline (Jenkinsfile) definieras i kod och innehåller stages som: Checkout, Build (mvn package), Test (mvn test / Cucumber), Code Quality (SonarQube), och Deploy till OpenShift.

Multibranch pipelines triggas automatiskt vid push till Bitbucket.`},{id:15,question:"Hur jobbar du med databaser och SQL i ett Java-projekt?",answer:`I Java används ofta JPA/Hibernate som ORM, eller Spring Data JPA med repositories. För komplexa queries används JPQL eller native SQL.

Det är viktigt att förstå N+1-problemet och hur man löser det med JOIN FETCH eller projections. Systemet hanterar känslig data – transaktionshantering (ACID) och korrekt index-design är centralt.`}]},{id:"agilt",title:"Agila arbetssätt och personliga frågor",color:"#9d174d",icon:"🔄",questions:[{id:16,question:"Hur arbetar du i ett agilt team? Berätta om din erfarenhet av Scrum/Kanban.",answer:`I Scrum jobbar man i sprintar (1-4 veckor) med daily standups, sprint planning, review och retrospektiv. Jira används för att hantera backlog och spåra tasks, Confluence för dokumentation.

Min roll inkluderar att ta egna stories från backlog till deploy, delta i code reviews och bidra till team-ens förbättringsarbete i retrospektiv.`,tip:"Rollen betonar eget ansvar och vilja att ständigt förbättra – lyft detta."},{id:17,question:"Hur hanterar du säkerhet och sekretessbelagd data i kod?",answer:`Systemet hanterar känsliga personuppgifter (personnummer, hälsodata). Viktiga principer: kryptering i vila och transit (TLS, AES), rollbaserad åtkomstkontroll, minsta rättighetsprincipen, audit-loggning, och att aldrig logga PII.

GDPR och Dataskyddslagen styr hur data hanteras. Bakgrundskontroll genomförs i rekryteringen.`,tip:"Visa ett högt säkerhetsmedvetande – det lyfts explicit i annonsen."},{id:18,question:"Berätta om en komplex teknisk utmaning du löst.",answer:`Strukturera svaret med STAR-metoden:
• Situation (kontext)
• Task (din uppgift)
• Action (vad du konkret gjorde – t.ex. refaktorerade en legacy-tjänst, optimerade en SQL-query, implementerade retry-logik)
• Result (mätbart resultat – lägre latens, färre fel, nöjdare användare)

Välj ett exempel relevant för back-end Java eller integration.`,tip:"Förbered 2-3 konkreta exempel i förväg."}]},{id:"hibernate-jpa",title:"Hibernate och JPA",color:"#166534",icon:"🗄️",questions:[{id:24,question:"Förklara Hibernate och JPA – vad är skillnaden?",answer:`JPA (Jakarta Persistence API) är en specifikation som definierar hur Java-objekt mappas mot relationsdatabaser via @Entity, @Table, @Column och liknande annotationer. Hibernate är den vanligaste implementationen av JPA-specifikationen.

Man kan programmera mot JPA-interfacet (EntityManager) och byta ut Hibernate mot t.ex. EclipseLink.

I Spring Boot används Spring Data JPA som ett lager ovanpå JPA/Hibernate med repositories.`},{id:25,question:"Vad är N+1-problemet i Hibernate och hur löser du det?",answer:`N+1 uppstår när Hibernate gör 1 query för att hämta en lista, sedan N separata queries för att hämta relaterade entiteter (t.ex. varje orders rad-items).

Lösningar:
1. JOIN FETCH i JPQL: SELECT o FROM Order o JOIN FETCH o.items
2. @EntityGraph för att deklarativt specificera vad som ska laddas
3. @BatchSize för att batcha lazy-laddning
4. DTO-projektioner med @Query när du bara behöver ett subset av fält`,tip:"Vanlig fråga – ha ett konkret kodexempel redo."},{id:26,question:"Förklara Hibernates caching-nivåer.",answer:`First-level cache (L1) är kopplad till EntityManager/Session och är alltid aktiv – inom samma session returneras redan laddade entiteter från minnet.

Second-level cache (L2) delas mellan sessioner och konfigureras med t.ex. Ehcache eller Infinispan. Aktiveras med @Cache-annotationen på entiteten.

Query cache cacchar resultatet av specifika queries. L2-cache ökar prestanda men kräver noggrann hantering av cache-invalidering för att undvika dirty reads.`},{id:27,question:"Vad är skillnaden mellan EAGER och LAZY loading i JPA?",answer:`EAGER loading hämtar relaterade entiteter direkt när huvudentiteten laddas – enkelt men kan orsaka onödiga queries och minnesproblem.

LAZY loading (default för collections: @OneToMany, @ManyToMany) laddar relaterade entiteter först när de accessas.

Risk: LazyInitializationException om sessionen är stängd.

Best practice: använd LAZY som default, hämta EAGER med JOIN FETCH när du vet att du behöver relationen.`},{id:28,question:"Hur hanterar du databas-migrationer i ett Java-projekt?",answer:`Flyway och Liquibase är de vanligaste verktygen.

Flyway använder versionsnumrerade SQL-skript (V1__create_table.sql, V2__add_column.sql) som körs i ordning och aldrig ändras efteråt.

Liquibase använder XML/YAML/JSON-changesets med rollback-stöd. I en DevOps-miljö körs migrationerna automatiskt vid applikationsstart eller som ett separat steg i CI/CD-pipelinen.

Det är kritiskt att migrationer är bakåtkompatibla vid zero-downtime-driftsättning.`,tip:"Driftsättning mot OpenShift – zero-downtime är relevant."}]},{id:"quarkus",title:"Quarkus",color:"#7c3aed",icon:"⚡",questions:[{id:29,question:"Vad är Quarkus och varför används det i mikrotjänster?",answer:`Quarkus är ett Kubernetes-nativt Java-ramverk optimerat för snabb starttid och låg minnesanvändning. Det kompileras med GraalVM till native image (native binary utan JVM) vilket ger starttider under 100ms och dramatiskt lägre minnesförbrukning jämfört med traditionell Spring Boot.

Quarkus stöder MicroProfile, JAX-RS, CDI och Hibernate Panache. Perfekt för mikrotjänster i OpenShift/Kubernetes där containers startas och stoppas ofta.`,tip:"Vid mikrotjänster i OpenShift är Quarkus ett naturligt val i det ekosystemet."},{id:30,question:"Vad är skillnaden mellan Quarkus JVM-läge och native-läge?",answer:`JVM-läge: Quarkus körs på vanlig JVM – snabbare kompilering (mvn quarkus:dev), bra för development.

Native-läge: Kompileras med GraalVM AOT (Ahead-of-Time) till en plattformsspecifik binär.

Fördelar: ~10x snabbare start, ~5x lägre minnesanvändning.
Nackdelar: längre byggtid (5-20 min), reflektionskod måste registreras explicit.

Native passar produktion i Kubernetes; JVM-läget används under utveckling med hot-reload (quarkus:dev).`},{id:31,question:"Vad är Hibernate Panache och hur skiljer det sig från standard JPA?",answer:`Panache är Quarkus-tillägget för Hibernate som förenklar databaskod med antingen:

• Active Record-mönstret (entiteten ärver PanacheEntity och har inbyggda find/persist/delete-metoder)
• Repository-mönstret (en separat PanacheRepository-klass)

Exempel med Active Record:
Person.find("name", "Anna").list()

istället för EntityManager-queries.

Panache eliminerar mycket boilerplate och stöder Quarkus reaktiva databasklienter.`},{id:32,question:"Hur hanterar Quarkus dependency injection (CDI)?",answer:`Quarkus implementerar CDI (Contexts and Dependency Injection) – Javas standardspecifikation för DI.

Scopes:
• @ApplicationScoped (singleton per applikation)
• @RequestScoped (per HTTP-request)
• @SessionScoped

Injicering med @Inject. Quarkus gör CDI-scanning vid kompilering (inte runtime), vilket bidrar till snabb starttid.

Jämfört med Spring: @ApplicationScoped ~ @Singleton/Spring bean; @Inject ~ @Autowired.`,tip:"Om du kan Spring DI kan du Quarkus CDI – lyft parallellerna."},{id:33,question:"Hur exponerar du ett REST-API i Quarkus?",answer:`Quarkus använder JAX-RS (RESTEasy) eller den reaktiva varianten RESTEasy Reactive.

Annotationer:
• @Path("/api/claims")
• @GET, @POST
• @Produces(MediaType.APPLICATION_JSON)

JSON-serialisering sker via Jackson eller JSON-B. OpenAPI-dokumentation genereras automatiskt med quarkus-smallrye-openapi-tillägget.

Reaktiv: @GET kombinerat med Uni (Mutiny) för non-blocking endpoints.`}]},{id:"openshift-tekton",title:"OpenShift, Tekton och ArgoCD",color:"#0e7490",icon:"🚀",questions:[{id:34,question:"Vad är Tekton och hur används det i en CI-pipeline på OpenShift?",answer:`Tekton är ett Kubernetes-nativt CI/CD-ramverk som kör pipelines som Kubernetes-resurser (CRD:er).

Grundbegrepp:
• Task (en eller flera Steps som körs i en container)
• Pipeline (kedjor av Tasks)
• PipelineRun (en konkret körning)
• EventListener + TriggerBinding (för automatisk trigger vid git push)

Fördel jämfört med Jenkins: Tekton-pipelines är portabla YAML-manifest som versionshantera i Git, körs nativt i OpenShift Pipelines, och skalar automatiskt.`,tip:"OpenShift Pipelines är Red Hats paketerade Tekton – begreppsmässigt samma sak."},{id:35,question:"Beskriv ett typiskt Tekton-flöde från git push till deploy.",answer:`1. Utvecklaren pushar kod till Bitbucket/Git
2. En webhook triggar EventListener i OpenShift
3. En PipelineRun startas automatiskt med Tasks:
   a) git-clone – hämtar koden
   b) maven-build – kompilerar och kör enhetstester
   c) sonar-scan – statisk kodanalys
   d) buildah/kaniko – bygger container-image
   e) update-manifest – uppdaterar image-taggen i GitOps-repot
4. ArgoCD detekterar förändringen och synkroniserar till OpenShift-klustret`,tip:"Detta flöde kombinerar Tekton (CI) med ArgoCD (CD) – det moderna GitOps-mönstret."},{id:36,question:"Vad är ArgoCD och vad innebär GitOps?",answer:`ArgoCD är ett deklarativt GitOps-verktyg för Kubernetes/OpenShift.

GitOps-principen: Git är den enda källan till sanning för infrastruktur och appkonfiguration.

ArgoCD övervakar ett Git-repo med Kubernetes-manifest (YAML/Helm/Kustomize) och säkerställer att klustrets tillstånd alltid matchar det som finns i Git. Om någon manuellt ändrar något i klustret detekterar ArgoCD avvikelsen (OutOfSync) och kan automatiskt återställa till önskat tillstånd (auto-sync).

Fördelar: auditspår via git log, enkelt rollback (git revert), separerat CI och CD.`,tip:"ArgoCD + Tekton = komplett GitOps-pipeline. Känn till detta flöde väl."},{id:37,question:"Vad är en OpenShift DeploymentConfig vs Deployment, och vad är en Route?",answer:`Deployment (Kubernetes-standard) är det rekommenderade sättet att hantera pods – deklarerar önskat antal repliker och hanterar rolling updates. DeploymentConfig är OpenShifts äldre variant med fler trigger-alternativ men håller på att fasas ut.

Route är OpenShifts resurser (motsvarar Kubernetes Ingress) som exponerar en Service mot externa HTTP/HTTPS-anrop. En Route kopplas till en Service och kan ha TLS-terminering, antingen Edge (TLS termineras vid routern) eller Passthrough (krypterat ändå till poden).`},{id:38,question:"Hur hanterar du konfiguration och hemligheter i OpenShift?",answer:`ConfigMap används för icke-känslig konfiguration (miljövariabler, config-filer) injicerad i pods.

Secret används för känsliga värden (lösenord, API-nycklar, certifikat) – base64-kodade i etcd.

I produktionsmiljöer integreras OpenShift ofta med HashiCorp Vault eller OpenShift Secrets Management för rotation och centraliserad hantering. I en Quarkus-applikation läses värden via @ConfigProperty("db.password") som mappas mot en Secret-monterad miljövariabel.`,tip:"Systemet hanterar känslig data – säker secrets-hantering är kritiskt."},{id:39,question:"Förklara liveness, readiness och startup probes i Kubernetes/OpenShift.",answer:`Liveness probe: kontrollerar om containern lever – om den misslyckas startas containern om.

Readiness probe: kontrollerar om containern är redo att ta emot trafik – om den misslyckas tas poden bort från Service-balansen men startas inte om.

Startup probe (Kubernetes 1.16+): ger långsamt startande applikationer tid att initieras innan liveness-proben aktiveras.

I Quarkus exponeras dessa automatiskt via quarkus-smallrye-health tillägget på /q/health/live och /q/health/ready.`}]},{id:"spring-boot",title:"Spring Boot och Spring-ekosystemet",color:"#991b1b",icon:"🌱",questions:[{id:40,question:"Vad är Spring Boot och hur skiljer det sig från Spring Framework?",answer:`Spring Framework är grunden med IoC-container, AOP och moduler som Spring MVC och Spring Data.

Spring Boot bygger ovanpå och tillhandahåller:
• Auto-konfiguration (minimerar XML/Java-config)
• Inbäddad server (Tomcat/Netty)
• Starter-beroenden (spring-boot-starter-web drar in allt behövligt)
• Production-ready funktioner via Actuator

Resultat: en applikation kan startas med en main()-metod och @SpringBootApplication på några minuter.`},{id:41,question:"Förklara Spring Security och hur du skyddar ett REST API.",answer:`Spring Security hanterar autentisering (vem är du?) och auktorisering (vad får du göra?).

För REST-API:er används ofta JWT (JSON Web Token): klienten autentiserar sig, får en token, och skickar den i Authorization: Bearer-headern vid varje anrop.

Spring Security-filtret validerar token och sätter SecurityContext. Roller och rättigheter konfigureras med @PreAuthorize("hasRole(ADMIN)") eller i SecurityFilterChain.

CSRF-skydd inaktiveras typiskt för stateless REST-API:er.`,tip:"Vid hantering av känslig persondata är säker autentisering centralt."},{id:42,question:"Vad är Spring Data JPA och hur använder du repositories?",answer:`Spring Data JPA abstraherar bort EntityManager-boilerplate. Du definierar ett interface som ärver JpaRepository och får CRUD-metoder gratis.

Anpassade queries via metodnamn:
findByLastNameAndCity(String ln, String city) genereras automatiskt.

För komplexa queries:
@Query("SELECT u FROM User u WHERE u.age > :age") med JPQL, eller @Query(nativeQuery=true) för ren SQL.

Paginering via Pageable-parametern och Page-returtyp.`},{id:43,question:"Vad är Spring Cloud och vilka problem löser det i mikrotjänstarkitektur?",answer:`Spring Cloud tillhandahåller lösningar för vanliga distribuerade systemproblem:

• Service Discovery (Eureka/Consul) – tjänster hittar varandra dynamiskt
• API Gateway (Spring Cloud Gateway) – centraliserad routing, rate limiting, auth
• Config Server – centraliserad konfiguration för alla mikrotjänster
• Circuit Breaker (Resilience4j-integration) – felhantering och fallback
• Distributed Tracing (Micrometer + Zipkin/Jaeger) – spåra anrop mellan tjänster

I OpenShift ersätts en del av detta av plattformens inbyggda service mesh (Istio/OpenShift Service Mesh).`},{id:44,question:"Hur fungerar transaktionshantering i Spring med @Transactional?",answer:`@Transactional på en metod eller klass innebär att Spring skapar en databastransaktion som committats vid framgång och rollbackas vid RuntimeException.

Viktiga attribut:
• propagation (REQUIRED = delta i befintlig transaktion, REQUIRES_NEW = ny alltid)
• isolation (READ_COMMITTED är vanlig default)
• rollbackFor (specificera vilka exceptions triggar rollback)

Fallgrop: self-invocation (anropa @Transactional-metod från samma klass) fungerar inte utan Spring AOP-proxy – flytta metoden till en annan bean.`}]},{id:"testning",title:"Testning – JUnit, Mockito och Cucumber",color:"#166534",icon:"🧪",questions:[{id:45,question:"Förklara testpyramiden och hur du strukturerar tester i ett Java-projekt.",answer:`Testpyramiden (bottom-up):

1. Enhetstester (unit tests) – snabba, isolerade, testar en klass/metod utan externa beroenden. Mest av dessa.

2. Integrationstester – testar samverkan med databas, andra tjänster eller Spring-kontexten. Långsammare.

3. End-to-end/systemtester – testar hela flödet. Färre men ger hög säkerhet.

Cucumber-tester är typiskt integrations- eller E2E-tester skrivna i Gherkin (Given/When/Then) som kommuniceras med verksamheten.`},{id:46,question:"Hur använder du Mockito för att isolera beroenden i enhetstester?",answer:`Mockito skapar mock-objekt som simulerar beroenden utan att anropa riktig kod.

Nyckel-annotationer:
• @Mock (skapar mock)
• @InjectMocks (injicerar mocks i testad klass)
• @Spy (real objekt med möjlighet att stubbla metoder)

Stubbing:
when(repo.findById(1L)).thenReturn(Optional.of(entity))

Verifiering:
verify(repo, times(1)).save(any(Entity.class))

ArgumentCaptor fångar argument som skickats till mocks för detaljerad verifiering.`},{id:47,question:"Vad är Cucumber och hur skriver du ett feature-test med Gherkin?",answer:`Cucumber möjliggör Behaviour Driven Development (BDD) – tester skrivs i naturligt språk.

Gherkin-syntax:
Feature: Beräkna tandvårdsersättning

Scenario: Patient med hög kostnad
  Given att patienten har en räkning på 5000 kr
  When beräkningen körs
  Then ska ersättningen vara 2500 kr

Step definitions i Java kopplar Gherkin-steg till kod. Cucumber integrerar med JUnit 5 via @CucumberOptions.`,tip:"Cucumber nämns explicit i annonsen – ha ett konkret exempel."},{id:48,question:"Hur testar du en Spring Boot REST-controller med @WebMvcTest?",answer:`@WebMvcTest laddar bara webb-lagret (controllers, filters) utan full Spring-kontext – snabbare än @SpringBootTest. Kombineras med MockMvc för att simulera HTTP-anrop:

mockMvc.perform(get("/api/claims/1").contentType(APPLICATION_JSON))
  .andExpect(status().isOk())
  .andExpect(jsonPath("$.id").value(1))

Service-beroenden mockas med @MockBean. För integrationstest mot riktig databas används @DataJpaTest med in-memory H2 eller Testcontainers.`},{id:49,question:"Vad är Testcontainers och när använder du det?",answer:`Testcontainers är ett Java-bibliotek som startar riktiga Docker-containers under integrationstester.

Typisk användning: starta en PostgreSQL-container för databastester istället för in-memory H2 (som inte stöder alla SQL-dialekter). Eller starta en Kafka-container för meddelandetester.

@Container
PostgreSQLContainer postgres = new PostgreSQLContainer("postgres:15")

Containers startas och stoppas automatiskt av JUnit 5-lifecycle.

Ger tester som är nära produktionsmiljön utan externa beroenden.`}]},{id:"observability",title:"Observability, loggning och prestanda",color:"#1e40af",icon:"📊",questions:[{id:50,question:"Hur implementerar du strukturerad loggning i ett Java-mikrotjänstprojekt?",answer:`Använd SLF4J som fasad med Logback eller Log4j2 som implementation. Strukturerad loggning (JSON-format) gör det möjligt att söka och filtrera i ELK-stack (Elasticsearch, Logback, Kibana) eller OpenShift Logging.

Nyckelprinciper:
• Inkludera correlation ID (trace ID) i alla loggrader
• Använd rätt log-nivå (DEBUG/INFO/WARN/ERROR)
• Logga aldrig PII (personnummer, hälsodata)

I Quarkus konfigureras JSON-loggning med quarkus-logging-json.`},{id:51,question:"Vad är distributed tracing och hur fungerar Micrometer/OpenTelemetry?",answer:`Distributed tracing spårar ett anrop genom ett system av mikrotjänster. Varje anrop får ett trace ID som propageras via HTTP-headers (W3C TraceContext-standard).

Spans representerar ett enskilt arbete (t.ex. ett databasanrop). Micrometer är Javas metrics-fasad (analogt med SLF4J men för metrics/tracing).

OpenTelemetry är den moderna vendor-neutrala standarden. Data skickas till Jaeger eller Zipkin för visualisering, eller direkt till OpenShift Distributed Tracing (baserat på Jaeger).`},{id:52,question:"Hur profilerar du en Java-applikation med prestandaproblem?",answer:`Steg 1: Identifiera symptomet – hög CPU, hög latens, minnesproblem (OutOfMemoryError).

Steg 2: Samla in data:
• Thread dump (jstack) för CPU-problem
• Heap dump (jmap) för minnesproblem
• JFR (Java Flight Recorder) för detaljerad profiling utan stor overhead

Steg 3: Analysera – använd JDK Mission Control, VisualVM eller async-profiler.

Vanliga bottlenecks: N+1-queries mot databas, synkroniserade block som skapar köer, onödig objektallokering i tight loops.`},{id:53,question:"Vad är caching-strategier på applikationsnivå och hur implementerar du det i Spring?",answer:`Spring Cache-abstraktion (@EnableCaching) med annotationerna:
• @Cacheable (cacchar resultatet av en metod)
• @CachePut (uppdaterar cache)
• @CacheEvict (tömmer cache)

Backend: Caffeine (in-memory, snabbt), Redis (distribuerat, persistent).

Viktiga överväganden:
• Cache-invalidering (TTL vs event-driven)
• Cache-stampede (many parallel misses)
• Konsistens mellan noder i ett kluster

I en mikrotjänstmiljö är Redis-cache vanlig för session-data och ofta accessad referensdata.`},{id:54,question:"Hur hanterar du asynkron kommunikation med meddelandeköer?",answer:`Meddelandeköer (Kafka, RabbitMQ, ActiveMQ) möjliggör asynkron, lös koppling mellan tjänster.

Kafka är event streaming – meddelanden behålls och kan konsumeras igen; passar audit-logs och event sourcing.

RabbitMQ är traditionell message broker – meddelanden försvinner när de konsumerats; passar task queues.

I Spring: @KafkaListener / @RabbitListener.
I Quarkus: SmallRye Reactive Messaging.

Viktigt: idempotent konsumtion (samma meddelande kan komma flera gånger), dead letter queue för felhantering.`}]},{id:"sakerhet",title:"Säkerhet, arkitektur och kodkvalitet",color:"#6d28d9",icon:"🔒",questions:[{id:55,question:"Förklara OAuth 2.0 och OIDC – hur fungerar inloggning i en mikrotjänstmiljö?",answer:`OAuth 2.0 är ett auktoriseringsprotokoll; OIDC (OpenID Connect) är ett identitetslager ovanpå OAuth 2.0.

Flöde (Authorization Code):
1. Användaren skickas till Identity Provider (Keycloak, Azure AD)
2. Efter inloggning returneras en authorization code
3. Backend byter koden mot access token + ID token (JWT)
4. Access token skickas med alla API-anrop och valideras av varje mikrotjänst

I OpenShift används ofta Red Hat SSO (Keycloak) som Identity Provider. Spring Security hanterar detta med spring-boot-starter-oauth2-resource-server.`},{id:56,question:"Vad är OWASP Top 10 och vilka är de vanligaste sårbarheterna i Java-applikationer?",answer:`OWASP Top 10 – relevanta för Java:

1. Injection – SQL-injection förhindras med parameteriserade queries/JPA (aldrig string-konkatenering)
2. Broken Access Control – kontrollera alltid att inloggad användare äger den data de efterfrågar
3. Cryptographic Failures – använd starka algoritmer (AES-256, bcrypt för lösenord)
4. Security Misconfiguration – inaktivera debug-endpoints i produktion, begränsa Actuator-endpoints
5. Sensitive Data Exposure – logga aldrig PII, kryptera känsliga fält i databasen`,tip:"Vid hantering av hälso- och persondata är säkerhet högt prioriterat."},{id:57,question:"Vad är SOLID-principerna och hur tillämpas de i Java?",answer:`S – Single Responsibility: en klass har ett och endast ett skäl att ändras.

O – Open/Closed: öppen för utökning, stängd för modifiering (polymorfism/interfaces).

L – Liskov Substitution: subklasser ska kunna ersätta sin bastyp utan att beteendet bryts.

I – Interface Segregation: många specifika interfaces är bättre än ett generellt.

D – Dependency Inversion: beroende på abstraktioner (interfaces), inte konkreta implementationer. I Spring är D naturlig via @Autowired.`},{id:58,question:"Vad är Domain-Driven Design (DDD) och hur kan det tillämpas?",answer:`DDD är ett arkitekturellt synsätt där mjukvarumodellen speglar verksamhetsdomänen.

Nyckelbegrepp:
• Ubiquitous Language (gemensamt språk med domänexperter)
• Bounded Context (tydliga gränser mellan domäner – t.ex. Tandvård och Internationell Vård är separata contexts)
• Aggregat (grupp entiteter med en rot som garanterar konsistens)
• Domäntjänster (affärslogik som inte hör hemma i en entitet)

I mikrotjänstarkitektur matchar ofta ett Bounded Context mot en mikrotjänst.`},{id:59,question:"Hur arbetar du med code reviews och vad tittar du på?",answer:`En god code review granskar:
• Korrekthet (löser koden problemet?)
• Läsbarhet (self-documenting code)
• Testbarhet och testtäckning
• Säkerhet (ingen PII i loggar, parameteriserade queries)
• Prestanda (inga uppenbara N+1, onödiga allokationer)
• Arkitekturell riktning (följer konventioner)

Ge konstruktiv feedback – kommentera koden, inte personen.

Använd PR-templates för att säkerställa att alla aspekter granskas.`},{id:60,question:"Vad är teknisk skuld och hur hanterar du den i ett agilt team?",answer:`Teknisk skuld är konsekvensen av snabba lösningar som sparar tid nu men kostar mer framöver i form av buggar, svårunderhållen kod och långsammare utveckling.

Hantering:
• Synliggör skulden (loggad i Jira som tech debt-tickets)
• Avsätt tid varje sprint för refaktorering (t.ex. 20% kapacitet)
• Prioritera skuld som bromsar ny feature-utveckling
• Mät via statisk kodanalys (SonarQube: code smells, duplicering, testtäckning)

I retrospektiv: diskutera vad som skapade skulden och hur ni förhindrar det framöver.`}]},{id:"reaktiv",title:"Reaktiv programmering och moderna Java-features",color:"#0f766e",icon:"♻️",questions:[{id:61,question:"Vad är reaktiv programmering och när är det relevant?",answer:`Reaktiv programmering (Reactive Streams-spec) hanterar asynkrona dataströmmar non-blocking. Istället för att blockera en tråd i väntan på ett svar frigörs tråden och en callback anropas när svaret är klart.

Bibliotek: Project Reactor (Mono/Flux – Spring WebFlux), Mutiny (Uni/Multi – Quarkus Reactive).

Passar: högt antal parallella anrop med I/O-väntan (t.ex. API-gateway).
Passar inte: CPU-intensiva beräkningar eller enkla CRUD-applikationer.`},{id:62,question:"Vad är nytt i moderna Java-versioner (Java 17–21) som är relevant i produktionskod?",answer:`Java 17 (LTS):
• Records (immutable data carriers: record Person(String name, int age){})
• Sealed classes (begränsar vilka subklasser som tillåts)
• Pattern matching for instanceof

Java 21 (LTS):
• Virtual Threads (Project Loom) – tusentals lättviktstrådar utan blocking-overhead
• Record Patterns
• Switch expressions med pattern matching

Virtual Threads i kombination med Hibernate eller JDBC ger hög throughput utan reaktiv komplexitet. Quarkus och Spring Boot 3 stöder Java 21 fullt ut.`,tip:"Visa att du följer Java-ekosystemets utveckling."},{id:63,question:"Förklara skillnaden mellan Mono och Flux i Project Reactor.",answer:`Mono representerar 0 eller 1 asynkront värde – lämplig för en enskild resurs (GET /users/1).

Flux representerar 0 till N asynkrona värden (en ström) – lämplig för en lista eller event-ström.

Operatorer liknar Stream API: map(), filter(), flatMap(), zip().

Subscription är lazy – ingenting händer förrän subscribe() anropas.

Error handling:
• onErrorReturn() (fallback-värde)
• onErrorResume() (fallback-Mono/Flux)
• retry()`},{id:64,question:"Vad är event sourcing och CQRS – när är det relevant?",answer:`CQRS (Command Query Responsibility Segregation) separerar läs- och skrivmodellen. Skrivsidan hanterar kommandon (CreateClaimCommand) och uppdaterar domäntillståndet. Läsidan har optimerade read-modeller (denormaliserade vyer) för snabba queries.

Event Sourcing: istället för att spara aktuellt tillstånd sparas en sekvens av events (ClaimCreated, ClaimApproved) – tillståndet rekonstrueras genom att spela upp events.

Ger fullständig audit trail. Komplex att implementera – använd inte i enkla CRUD-domäner.`},{id:65,question:"Hur fungerar Java modules (JPMS) och är det relevant i praktiken?",answer:`Java Platform Module System (Java 9+) introducerar module-info.java som deklarerar modulens namn, vad den exporterar och vad den kräver.

Fördelar: starkare inkapsling (inget reflektions-hack mot interna paket), snabbare starttid med jlink.

I praktiken: de flesta enterprise-applikationer (Spring Boot, Quarkus) använder inte JPMS fullt ut då tredjepartsbibliotek inte är modulifierade. Kunskap om att det existerar och varför är tillräckligt för de flesta intervjuer.`}]},{id:"databaser",title:"Databaser, SQL och datakvalitet",color:"#c2410c",icon:"🏛️",questions:[{id:66,question:"Förklara ACID och vad det innebär i praktiken.",answer:`Atomicity: en transaktion är allt eller inget – antingen committas alla operationer eller ingen.

Consistency: databasen övergår alltid från ett giltigt tillstånd till ett annat (constraints, triggers).

Isolation: parallella transaktioner påverkar inte varandra (isolation levels: READ COMMITTED, REPEATABLE READ, SERIALIZABLE).

Durability: en committad transaktion överlever systemkrascher (skrivs till disk/WAL).

I praktiken: välj rätt isolation level – SERIALIZABLE är säkrast men ger lägst prestanda; READ COMMITTED är ofta tillräckligt och är PostgreSQL:s default.`},{id:67,question:"Vad är databasindex och hur påverkar det prestanda?",answer:`Ett index är en datastruktur (vanligen B-tree) som snabbar upp sökning på en eller flera kolumner på bekostnad av extra diskutrymme och långsammare INSERT/UPDATE/DELETE.

Index hjälper vid WHERE-, JOIN- och ORDER BY-kolumner.

Composite index: CREATE INDEX idx_name_city ON users(last_name, city) – ordningen spelar roll (leftmost prefix rule).

EXPLAIN ANALYZE i PostgreSQL visar om index används eller om en seq scan görs.

Undvik att indexera kolumner med låg kardinalitet (t.ex. boolean-kolumner).`},{id:68,question:"Vad är skillnaden mellan optimistisk och pessimistisk låsning i databaser?",answer:`Pessimistisk låsning: låser raden vid läsning (SELECT FOR UPDATE) – inga andra kan ändra tills låset släpps. Säkert men skapar köer och risk för deadlock.

Optimistisk låsning: ingen lock vid läsning – en version-kolumn (@Version i JPA) kontrolleras vid update. Om versionen ändrats sedan läsning kastas OptimisticLockException.

Optimistisk passar system med låg skrivkonflikt (läsintensiva).
Pessimistisk passar kritiska finansiella transaktioner där konflikter är vanliga.`},{id:69,question:"Förklara normalisering – vad är 1NF, 2NF och 3NF?",answer:`1NF: atomiska värden i varje cell (ingen lista i ett fält), primärnyckel identifierar varje rad.

2NF: uppfyller 1NF + inga partiella beroenden (icke-nyckelkolumner är beroende av hela primärnyckeln).

3NF: uppfyller 2NF + inga transitiva beroenden (icke-nyckelkolumner beror bara på primärnyckeln).

I praktiken normaliseras OLTP-databaser för att minimera redundans; OLAP/datawarehouse-databaser denormaliseras för läsprestanda.`},{id:70,question:"Hur hanterar du databas-prestanda i en applikation med hög last?",answer:`Strategier:
1. Index-optimering
2. Query-optimering – undvik SELECT *, hämta bara nödvändiga kolumner
3. Connection pooling (HikariCP) – återanvänd databasanslutningar
4. Read replicas – skala läsningar mot replika
5. Caching (Redis) för frequently-read, rarely-changed data
6. Paginering – returnera aldrig hela tabeller
7. Databas-partitionering för historisk data
8. Async/batch-operationer för tung skrivning`}]},{id:"containers",title:"Containers, nätverk och cloud-native",color:"#9d174d",icon:"🐳",questions:[{id:71,question:"Hur bygger du en optimerad Docker-image för en Java-applikation?",answer:`Best practices:
1. Använd multi-stage builds – bygg i ett JDK-image, kör i ett JRE-image
2. Lägg beroenden i ett eget lager (de ändras sällan) – utnyttjar Docker layer cache
3. Använd distroless-images (Google) eller ubi-micro (Red Hat) för minimal attackyta
4. Kör inte som root (USER 1001)
5. Specificera exakt image-tagg (aldrig latest)

Med Quarkus native: imagen är bara ett par hundra MB istället för 300-600MB för traditionell JVM-image.

OpenShift Source-to-Image (S2I) automatiserar detta.`},{id:72,question:"Vad är en Kubernetes Service och vad är skillnaden mellan ClusterIP, NodePort och LoadBalancer?",answer:`En Service abstraherar åtkomst till en eller flera pods bakom ett stabilt DNS-namn och IP.

ClusterIP (default): intern åtkomst inom klustret – ingen extern access.

NodePort: exponerar en port på varje nods IP – möjliggör extern åtkomst men klumpigt.

LoadBalancer: skapar en extern load balancer (cloud provider) – vanlig i managed Kubernetes.

I OpenShift används Route (inte LoadBalancer) för extern HTTP/HTTPS-trafik. Intern kommunikation mellan mikrotjänster sker alltid via ClusterIP-Services.`},{id:73,question:"Vad är Helm och hur används det för att paketera Kubernetes-applikationer?",answer:`Helm är pakethanteraren för Kubernetes. Ett Helm Chart är en samling YAML-templates med parametriserbara värden (values.yaml).

Kommandon: helm install, helm upgrade, helm rollback, helm uninstall.

Fördelar:
• Återanvändbar deployment-konfiguration
• Versionshantering av releases
• Enkelt att hantera konfiguration per miljö (dev/test/prod via values-filer)

I ArgoCD deployar man ofta via Helm charts – ArgoCD kör helm template och applicerar resultatet.`},{id:74,question:"Vad är Resource Requests och Limits i Kubernetes och varför är de viktiga?",answer:`Requests: minsta garanterade resurser (CPU/minne) – påverkar scheduling (vilken nod).

Limits: maximalt tillåtna resurser – om en pod överskrider minnesgränsen termineras den (OOMKilled).

Best practice: sätt alltid både requests och limits. CPU-throttling är ofarligare än OOM.

Rätt dimensionering: mät faktisk resursanvändning med Prometheus/Grafana och justera.

Utan limits kan en felobeten pod ta ner hela noden.`},{id:75,question:"Förklara service mesh och vad OpenShift Service Mesh (Istio) tillhandahåller.",answer:`En service mesh är ett infrastrukturlager för kommunikation mellan mikrotjänster, implementerat som sidecar-proxies (Envoy) injicerade i varje pod.

Funktioner:
• mTLS (ömsesidig TLS-kryptering mellan alla tjänster)
• Traffic management (canary deployments, circuit breaking)
• Observability (automatisk distributed tracing och metrics utan kodändringar)
• Policy enforcement (vilka tjänster får prata med vilka)

OpenShift Service Mesh är Red Hats distribution av Istio. Alternativ för enklare behov: Linkerd.`},{id:76,question:"Vad är Horizontal Pod Autoscaler (HPA) och hur konfigurerar du det?",answer:`HPA skalar automatiskt antingen upp eller ned antalet pod-repliker baserat på metrics.

Default: CPU-användning (target: 70% CPU).

Konfigureras med:
kubectl autoscale deployment myapp --min=2 --max=10 --cpu-percent=70

Custom metrics: skala på HTTP-requests/sekund (via KEDA eller Prometheus Adapter).

Viktigt: pods måste ha resource requests satta för att HPA ska fungera. Vertikal skalning (mer CPU/minne per pod) hanteras av VPA (Vertical Pod Autoscaler).`},{id:77,question:"Hur hanterar du zero-downtime deployments i OpenShift?",answer:`Rolling update (default): nya pods startas gradvis medan gamla fasas ut. Konfigureras med maxSurge (extra pods under deploy) och maxUnavailable (max pods nere).

Krav för zero-downtime:
1. Korrekt readiness probe – gamla pods hanterar trafik tills nya är redo
2. Bakåtkompatibla databasmigrationer (lägg till kolumner, ta aldrig bort i samma deploy)
3. Graceful shutdown (SIGTERM-hantering – avsluta pågående requests innan shutdown)

Blå/grön deployment: kör två identiska miljöer och switcha trafik – enklare rollback.`}]},{id:"integration",title:"Integration och händelsedriven arkitektur",color:"#1e40af",icon:"🔗",questions:[{id:78,question:"Vad är skillnaden mellan synkron (REST) och asynkron (event-driven) integration?",answer:`Synkron (REST/gRPC): anroparen väntar på svar – enkelt att förstå och debugga, men skapar tight coupling och om downstream-tjänst är nere misslyckas anropet.

Asynkron (Kafka/RabbitMQ): meddelanden produceras till en kö/topic och konsumeras senare – lös koppling, bättre feltolerans, men svårare att debugga och garantera ordning.

Vid integration mot externa system: synkrona REST-anrop vid realtidsbehov, asynkrona meddelanden för batch-överföring och notifieringar.`},{id:79,question:"Vad är GraphQL och när väljer du det över REST?",answer:`GraphQL är ett frågespråk för API:er där klienten specificerar exakt vilka fält den vill ha. Löser over-fetching (för mycket data) och under-fetching (behöver göra flera anrop).

Fördelar: ett enda endpoint, flexibel för frontend-team, starkt typad schema.

Nackdelar: caching är svårare (POST-anrop), N+1-problem på serversidan (DataLoader behövs), komplex att säkra mot djupa queries.

Välj REST för enkla CRUD-API:er och offentliga API:er; GraphQL för komplexa gränssnitt med många klienter som behöver olika datamängder.`},{id:80,question:"Vad är idempotens och varför är det viktigt i distribuerade system?",answer:`En operation är idempotent om den ger samma resultat oavsett hur många gånger den utförs. GET, PUT och DELETE är per definition idempotenta i REST; POST är det vanligtvis inte.

I distribuerade system kan meddelanden levereras mer än en gång (at-least-once delivery).

Lösning: använd idempotency keys (klienten genererar ett unikt ID för varje operation; servern lagrar utförda operationer och returnerar samma svar vid duplicat).

Kafka-consumers ska alltid designas för idempotent bearbetning.`}]},{id:"soft-skills",title:"Mjuka kompetenser och yrkesscenarier",color:"#166534",icon:"💬",questions:[{id:81,question:"Hur förklarar du ett komplext tekniskt beslut för en icke-teknisk stakeholder?",answer:`Utgå från affärsbehovet och konsekvenser, inte teknik.

Exempel: istället för "vi behöver byta till event-driven arkitektur med Kafka" säg "för att medborgare ska få sin tandvårdsersättning snabbare och vi ska klara EU:s svarstider behöver vi ett system som kan hantera topp-last utan att göra medborgare väntande".

Använd analogier, visualisera med enkla diagram. Systemutvecklare arbetar ofta nära handläggare och verksamhetsexperter – kommunikation över kompetensgränser är en nyckelkompetens.`},{id:82,question:"Hur hanterar du situationen när du inte vet svaret på ett tekniskt problem?",answer:`Erkänn det direkt – det bygger förtroende.

Berätta hur du skulle angripa problemet:
• Dokumentation (officiell Javadoc, Red Hat docs, Quarkus guides)
• Community (Stack Overflow, GitHub Issues)
• Kollegor med relevant erfarenhet
• POC (Proof of Concept) för att experimentera

Viktigt: kommunicera tidsuppskattning och osäkerhet tidigt, eskalera om det behövs. I system med känslig data: säkerhetskritiska beslut ska alltid dubbelkollas.`},{id:83,question:"Hur prioriterar du tekniska tasks när du har flera parallella åtaganden?",answer:`Kommunicera med teamet och tech lead om prioritering – det är sällan en ensam persons beslut.

Verktyg: Jira-backlog med prioriterade stories, blockerat-flagga beroenden tidigt i sprinten.

Principer: värde till medborgaren (core business-funktionalitet) > teknisk skuld > nice-to-have. Om du är osäker på prioritering: fråga Product Owner.

Lär dig säga nej konstruktivt: "Det låter viktigt, låt oss ta upp det i sprintplanerinen och prioritera mot vad vi redan åtagit oss."`},{id:84,question:"Hur bidrar du till ett teams tekniska riktning och arkitekturbeslut?",answer:`Delta aktivt i arkitekturdiskussioner och kom förberedd med för- och nackdelar.

Dokumentera beslut som Architecture Decision Records (ADR) – ett kortformat med kontext, beslut och konsekvenser – versionshanterat i Git.

Dela kunskap: tech talks, lunch-and-learn, välskriven intern wiki i Confluence. Var öppen för att ditt förslag inte väljs – förstå beslutet och implementera det lojalt.

Rollen betonar samarbete och vilja att förbättra – lyft detta.`},{id:85,question:"Vad motiverar dig att jobba inom offentlig sektor jämfört med privat?",answer:`Svara autentiskt men lyft gärna:
• Samhällspåverkan (21 miljoner beslut/år som påverkar verkliga människors trygghet)
• Teknisk utmaning (en av Sveriges största IT-avdelningar, modern stack med OpenShift/mikrotjänster)
• Stabilitet (statlig arbetsgivare)
• Möjligheten att bidra till digitalisering av välfärden

Tandvård är Sveriges mest använda försäkring – att bygga ett helt nytt IT-stöd från grunden är en sällsynt möjlighet att påverka något i stor skala.

Kombinera passion för teknik med engagemang för samhällsnytta.`,tip:"Detta är ofta den avslutande frågan – förbered ett äkta och genomtänkt svar."}]},{id:"avancerad-java",title:"Avancerad Java – JVM-internals",color:"#1e3a8a",icon:"🔬",questions:[{id:86,question:"Förklara skillnaden mellan stack och heap i JVM.",answer:`Stack lagrar lokala variabler och anropsramar per tråd – LIFO-struktur, snabb allokering, begränsad storlek (StackOverflowError vid djup rekursion).

Heap är den gemensamma minnesregionen där objekt skapas. Garbage Collector ansvarar för heapen. Stack-allokering är deterministisk (variabeln lämnar scope → frigörs direkt); heapallokeringens livstid styrs av GC.

Escape analysis i JIT kan allokera objekt på stacken om de inte "flyr" metoden.`,tip:"Visa förståelse för hur JVM faktiskt hanterar minne – relevant för prestandafelsökning."},{id:87,question:"Vad är JIT-kompilering och hur påverkar det prestanda?",answer:`JVM startar med interpretation (bytekod → maskinspråk rad för rad). JIT (Just-In-Time compiler) identifierar "hot paths" – metoder som körs ofta – och kompilerar dem till optimerad maskinkod.

C1 (client) kompilerar snabbt med enkla optimeringar; C2 (server) gör djupare optimeringar efter mer profildata. Tiered compilation kombinerar båda.

Praktisk effekt: Java-applikationer "värms upp" – prestanda förbättras efter några minuter i produktion. Relevant för Kubernetes-pods med kort livstid.`},{id:88,question:"Vad är skillnaden mellan G1GC och ZGC?",answer:`G1GC (Garbage First) är regionbaserad – delar heap i lika stora regioner, förutspår paustider och är default sedan Java 9. Pauser är millisekunder.

ZGC (Java 15+ production-ready) är en low-latency collector med pauser under 1 ms oavsett heap-storlek. Använder colored pointers och load barriers.

Välj G1GC för de flesta applikationer; ZGC för realtidssystem med strikta latenskrav, t.ex. tradingplattformar eller system med SLA <10 ms.`},{id:89,question:"Vad är ClassLoader och hur fungerar ClassLoader-hierarkin?",answer:`ClassLoader laddar .class-filer till JVM vid behov. Hierarkin:
1. Bootstrap ClassLoader – laddar java.lang, java.util (inbyggd i JVM)
2. Extension/Platform ClassLoader – laddar java.se-moduler
3. Application ClassLoader – laddar applikationens classpath

Delegation model: en ClassLoader frågar sin förälder först (parent-first). Problem uppstår i OSGi, Jakarta EE (child-first) eller vid ClassCastException mellan olika ClassLoaders.

Quarkus använder Jandex-indexering och custom ClassLoading för snabb uppstart.`},{id:90,question:"Förklara Java Module System (JPMS) och när det är relevant.",answer:`Introducerat i Java 9 via Project Jigsaw. Moduler deklarerar vad de exporterar (exports) och vad de beror på (requires) i module-info.java.

Fördelar: stark inkapsling (inget mer klasspaket-hacking via reflection), mindre runtime-image med jlink, tydliga API-gränser.

I praktiken används JPMS sällan i affärssystem – de flesta bibliotek stödjer det men kräver det inte. Quarkus och Spring Boot fungerar utan det, men GraalVM native image drar nytta av modulsystemets metainformation.`},{id:91,question:"Vad är Project Loom och virtuella trådar?",answer:`Project Loom (GA i Java 21) introducerar virtuella trådar – lätta trådar hanterade av JVM, inte OS.

En JVM kan ha miljontals virtuella trådar. När en virtuell tråd blockerar (t.ex. I/O) "parkeras" den och carrier-tråden (OS-tråd) frigörs för annan virtuell tråd.

Effekt: traditionell blocking I/O-kod presterar lika bra som reaktiv kod utan komplexiteten. Spring Boot 3.2+ och Quarkus stödjer virtuella trådar. Särskilt relevant för mikroservicear med många parallella HTTP-anrop.`,tip:"Java 21 är LTS – virtuella trådar är en av de viktigaste nyheterna på länge."}]},{id:"avancerad-hibernate",title:"Avancerad Hibernate och JPA",color:"#064e3b",icon:"🗃️",questions:[{id:92,question:"Vad är N+1-problemet i Hibernate och hur löser du det?",answer:`N+1 uppstår när du hämtar N entiteter och Hibernate sedan gör N extra queries för varje lazy-laddad relation.

Lösningar:
• JOIN FETCH i JPQL: SELECT e FROM Employee e JOIN FETCH e.department
• @EntityGraph – specificera vilka relationer som ska fethas
• Hibernate BatchSize (@BatchSize(size=20)) – hämtar relationer i batchar
• Använd Blaze-Persistence eller QueryDSL för komplexa queries

Verktyg: aktivera SQL-logging (show_sql=true) eller Hibernate Statistics för att detektera problemet.`,tip:"N+1 är den vanligaste prestandaboven i JPA-applikationer."},{id:93,question:"Förklara Hibernate caching-nivåer.",answer:`L1-cache (First-Level): per EntityManager/Session. Automatiskt aktiv – samma entitet hämtas bara en gång per transaktion.

L2-cache (Second-Level): delas mellan sessioner inom samma applikation. Kräver explicit konfiguration med t.ex. Infinispan (Quarkus) eller Ehcache (Spring). Lämpligt för referensdata som ändras sällan.

Query Cache: cachar resultatlistan av en query. Används försiktigt – cachas per query + parametrar, invalideras vid entitetsändring.

I ett kluster behöver L2-cache vara distribuerat.`},{id:94,question:"Vad är optimistisk och pessimistisk locking i JPA?",answer:`Optimistisk locking: ingen databaslås. En @Version-kolumn (int/timestamp) används – om två transaktioner läser samma rad och en committar, kastar den andra OptimisticLockException. Lämpligt när konflikter är sällsynta.

Pessimistisk locking: databas-level lås via SELECT FOR UPDATE. EntityManager.lock(entity, LockModeType.PESSIMISTIC_WRITE) blockerar andra trådar. Lämpligt vid hög konfliktfrekvens men minskar genomströmning.

Välj optimistisk som default; pessimistisk bara för kritiska avsnitt.`},{id:95,question:"Hur fungerar JPA Criteria API jämfört med JPQL?",answer:`JPQL är ett strängbaserat frågespråk som liknar SQL men opererar på entiteter. Enkelt att skriva men ger kompileringsfel vid körning, inte vid kompilering.

Criteria API är typesäkert och byggbart programmatiskt:
CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
Root<Employee> r = cq.from(Employee.class);
cq.where(cb.equal(r.get("name"), "Lisa"));

Fördel: refactoring-säkert och möjliggör dynamiska queries. Nackdel: verbose. Metamodel-generering (jpamodelgen) ger typesäkra attributreferenser.`},{id:96,question:"Vad är Hibernate Envers och när används det?",answer:`Envers är ett Hibernate-tillägg för automatisk audit trail – spårar alla ändringar (INSERT, UPDATE, DELETE) i revisionstabeller.

Aktiveras med @Audited på entiteten. Envers skapar en _AUD-tabell med REVTYPE (ADD/MOD/DEL) och revisionsnummer.

Kan hämta entitetens historik: AuditReader.find(Employee.class, id, revision).

Alternativ: Spring Data Envers, custom @PreUpdate/@PrePersist listeners, eller databasens temporal tables (SQL:2011).

Relevant för system med GDPR- eller revisionskrav.`}]},{id:"avancerad-quarkus",title:"Avancerad Quarkus",color:"#4c1d95",icon:"⚡",questions:[{id:97,question:"Hur fungerar Quarkus build-time processing och varför är det snabbare?",answer:`Traditionella ramverk (Spring) gör mycket vid start: classpath-scanning, proxyskapande, dependency injection-initiering.

Quarkus flyttar detta till build-time med hjälp av Jandex (bytekod-index) och Augmentation-fasen. CDI-containern byggs och valideras vid kompilering; det som körs vid start är minimal.

Resultat: 50-100 ms starttid mot Spring Boots 3-10 sekunder. Minderanvändning av RAM. Möjliggör GraalVM native image där ännu mer pre-computas.

Extension API: byggstenar kallas BuildItems och BuildSteps.`},{id:98,question:"Vad är Quarkus Panache och hur skiljer det sig från standard JPA?",answer:`Panache är ett lager ovanpå Hibernate som minskar boilerplate via två mönster:

1. Active Record (PanacheEntity): entiteten ärver PanacheEntity och har statiska finders: Employee.find("name", "Lisa").

2. Repository Pattern (PanacheRepository): klassisk separation – repository-klassen implementerar PanacheRepository<Employee>.

Båda stödjer Kotlin och reaktiv variant (PanacheEntityBase med Hibernate Reactive).

Fördel: kraftigt reducerad kod. Nackdel: Active Record-mönstret mixar domänlogik och persistens – diskuterbart ur DDD-perspektiv.`},{id:99,question:"Hur fungerar Quarkus Dev Services?",answer:`Dev Services startar automatiskt externa tjänster (PostgreSQL, Kafka, Redis, Keycloak…) som Docker-containers under utveckling och testning, utan att du behöver konfigurera dem manuellt.

Detekterar om en tjänst saknas i application.properties och startar en Testcontainer automatiskt.

Fördel: zero-config lokal utveckling. Fungerar med @QuarkusTest.

Konfigureras via quarkus.datasource.devservices.image-name om du vill specifik version.`},{id:100,question:"Vad är skillnaden mellan @ApplicationScoped, @RequestScoped och @Singleton i Quarkus CDI?",answer:`@Singleton: en instans per JVM. Ingen proxying – snabb men inga interceptors på fält.

@ApplicationScoped: en instans per applikation men proxad – stödjer interceptors (@Transactional etc.) och lazy initialization.

@RequestScoped: ny instans per HTTP-request. Lämplig för stateful request-kontext.

I Quarkus rekommenderas @ApplicationScoped framför @Singleton för beans som behöver interceptors. @Dependent (default) skapar ny instans per injektion.`},{id:101,question:"Hur fungerar Quarkus native image-kompilering med GraalVM?",answer:`GraalVM native-image analyserar hela applikationen vid kompilering (closed-world assumption): dead code elimineras, reflection registreras explicit.

Quarkus genererar automatiskt reflect-config.json, resource-config.json etc. Extensions hanterar detta för sina bibliotek.

Begränsningar: dynamisk klassladdning, runtime byte-manipulation och JVM-specifika API:er fungerar inte. Hibernate och CDI stödjs via Quarkus-specifika lösningar.

Resultat: <5 MB binär, <50 ms start, minimal RAM – perfekt för serverless/Lambda.`},{id:102,question:"Beskriv Quarkus Reactive Routes och när de är lämpliga.",answer:`Reactive Routes är ett alternativ till JAX-RS baserat direkt på Vert.x HTTP-server utan overhead av servlet-lagret.

@Route(path = "/hello", methods = Route.HttpMethod.GET)
void hello(RoutingContext rc) { rc.response().end("Hello"); }

Fördel: maximalt genomflöde, full kontroll över Vert.x event loop.
Nackdel: mer komplex programmering, synkroniseringsregler (blockera aldrig event loop).

Välj JAX-RS för affärslogik-API:er; Reactive Routes för extremt latens-känsliga endpoints eller websocket-hantering.`}]},{id:"avancerad-openshift",title:"Avancerad OpenShift, Tekton och ArgoCD",color:"#7c2d12",icon:"🚀",questions:[{id:103,question:"Vad är en Operator i Kubernetes/OpenShift och hur fungerar den?",answer:`En Operator är en controller som kodar driftkunskap (Day-2 operations) för en applikation. Den utökar Kubernetes API med Custom Resource Definitions (CRD) och implementerar en Reconciliation Loop: observe → diff → act.

Exempel: PostgreSQL Operator – du skapar en PostgresCluster-resurs, Operatorn sköter installation, backup, failover och uppgradering.

Utvecklas med Operator SDK (Go, Ansible eller Helm). OpenShift OperatorHub erbjuder färdiga Operatorer (Strimzi/Kafka, Jaeger, Keycloak).`},{id:104,question:"Hur fungerar Tekton Pipelines i detalj?",answer:`Tekton bygger på Kubernetes-native resurser:
• Task: en grupp Steps (containers) som körs sekventiellt
• Pipeline: orkestrerar Tasks, stödjer parallellism
• PipelineRun: en konkret körning av en Pipeline med parametrar
• Workspace: delat filsystem mellan Steps/Tasks (PersistentVolumeClaim)
• Trigger/EventListener: startar PipelineRun vid git-events

Allt är YAML-deklarativt. Loggning via tekton-cli (tkn) eller Tekton Dashboard. Integrera med Vault för hemliga värden via Tekton Chains för SLSA-provenance.`},{id:105,question:"Beskriv GitOps-flödet med ArgoCD från commit till production.",answer:`1. Utvecklare pushar kod till feature-branch, skapar PR
2. CI-pipeline (Tekton) bygger, testar, skapar container-image, uppdaterar image-tag i Helm-chart/Kustomize i GitOps-repo
3. ArgoCD Application-controller upptäcker diff mellan Git-state och cluster-state
4. ArgoCD synkroniserar (manuellt eller auto-sync) – applicerar Kubernetes-manifests
5. Health checks verifierar deployment
6. Notifiering via Slack/Teams

GitOps-repot är sanningskällan. Rollback = revert commit i Git.`},{id:106,question:"Vad är OpenShift Security Context Constraints (SCC)?",answer:`SCC är OpenShifts utökning av Kubernetes PodSecurityPolicy (nu deprecated) – kontrollerar vilka säkerhetsprivilegier en pod får.

Vanliga SCCs: restricted (default, kör som slumpmässig UID), anyuid (valfri UID), privileged (full åtkomst).

Best practice: kör med restricted-v2 SCC. Definiera securityContext i deployment:
runAsNonRoot: true
allowPrivilegeEscalation: false
capabilities.drop: [ALL]

Om imagen kräver root: skriv om imagen eller använd anyuid med motivering.`},{id:107,question:"Hur fungerar Helm och vad är skillnaden mot Kustomize?",answer:`Helm: pakethanterare för Kubernetes. Chart innehåller templates (Go template-syntax) + values.yaml. helm install/upgrade renderar templates med värden och applicerar i klustret. Stödjer lifecycle hooks och dependencies.

Kustomize: deklarativ overlay-approach – en base-konfiguration och environment-specifika patches (Strategic Merge Patch eller JSON Patch). Inget template-språk, bara YAML-manipulation. Inbyggt i kubectl.

Huvudskillnad: Helm är kraftfullare men mer komplex. Kustomize är enklare och bättre för DRY-konfiguration utan programmeringslogik. Många team kombinerar båda (Helm chart som base, Kustomize overlay per miljö).`},{id:108,question:"Vad är Istio/Service Mesh och när är det motiverat?",answer:`Service mesh (Istio, Linkerd) lägger ett infrastrukturlager för kommunikation mellan mikrotjänster via sidecar proxys (Envoy).

Funktioner: mTLS (mutual TLS) automatiskt, circuit breaking, retry, traffic splitting (canary/A-B-test), distributed tracing, access policies.

När det är motiverat:
• Strikta säkerhetskrav (zero-trust network)
• Avancerad traffic management utan kodändring
• Observability utan instrumentering i varje tjänst

Kostnad: operationell komplexitet, latens-overhead (2-5 ms per anrop). Undvik om ett enklare API-gateway räcker.`}]},{id:"avancerad-testning",title:"Avancerad testning",color:"#166534",icon:"🧪",questions:[{id:109,question:"Vad är Contract Testing och hur fungerar Pact?",answer:`Contract testing verifierar att consumer och provider kommunicerar korrekt, utan att köra hela systemet.

Pact: consumer skriver ett kontrakt (pact-fil) med förväntade requests och responses. Provider verifierar kontraktet mot sin faktiska implementation.

Flöde: consumer-test → pact-fil → publiceras i Pact Broker → provider-pipeline verifierar → deployable om OK.

Fördel: snabbare feedback än end-to-end-test, identifierar breaking changes tidigt. Relevant för mikrotjänstarkitektur med separata team.`},{id:110,question:"Beskriv Mutation Testing och vad PIT är.",answer:`Mutation Testing mäter testernas effektivitet, inte bara kodtäckning. Verktyget muterar koden (ändrar + till -, != till ==, tar bort return-satser) och kontrollerar om testerna misslyckas.

PIT (Pitest) är standardverktyget för Java. Genererar mutanter, kör tester, rapporterar mutation score.

Hög täckning ≠ bra tester. 80% rad-täckning kan ha 30% mutation score om assertions saknas.

Begränsning: långsam för stora kodbaser. Kör inkrementellt eller på kritiska moduler.`},{id:111,question:"Hur designar du testbara klasser och undviker testbarhetsproblem?",answer:`Principerna:
• Dependency Injection: injicera beroenden (inte new inne i klassen) – möjliggör mockning
• Inga statiska metoder/singleton-state – svårt att isolera i tester
• Single Responsibility – stora klasser med många beroenden är svåra att testa
• Undvik "new" inne i metoder för externa tjänster – använd factory eller injection
• Föredra interfaces för beroenden – enkelt att byta mot mock/fake

Testbar design ≈ god OO-design. Om klassen är svår att testa är det ofta ett design-problem.`},{id:112,question:"Vad är TestContainers och hur används det i integrationstester?",answer:`Testcontainers är ett Java-bibliotek som startar Docker-containers programmatiskt i tester.

@Container
static PostgreSQLContainer<?> db = new PostgreSQLContainer<>("postgres:15");

Containern startas före testklassen, JDBC-URL injiceras dynamiskt via @DynamicPropertySource.

Fördel: realistiska integrationstester mot riktig databas/Kafka/Redis utan manuell setup. Inga mockade JDBC-drivrutiner.

Quarkus Dev Services använder Testcontainers under huven. Fungerar i CI om Docker är tillgängligt (GitHub Actions, GitLab CI).`}]},{id:"avancerad-sakerhet",title:"Avancerad säkerhet",color:"#7f1d1d",icon:"🔐",questions:[{id:113,question:"Förklara OAuth 2.0 Authorization Code Flow med PKCE.",answer:`PKCE (Proof Key for Code Exchange) skyddar mot authorization code interception i public clients (SPA, mobil).

Flöde:
1. Client genererar code_verifier (slumpmässig sträng) och code_challenge (SHA-256 hash)
2. Authorization request inkluderar code_challenge
3. Authorization server returnerar auth code
4. Token request inkluderar code_verifier – servern verifierar att hash matchar

Även om code interceptas kan angriparen inte byta det mot token utan code_verifier.

Keycloak stödjer PKCE. Använd alltid PKCE för SPA och mobilappar.`},{id:114,question:"Vad är OWASP Top 10 och hur adresserar du de vanligaste sårbarheterna i Java?",answer:`De viktigaste för Java/backend:

1. Injection (SQL, LDAP): PreparedStatement, ORM, input-validering
2. Broken Access Control: @RolesAllowed, Spring Security @PreAuthorize, testa med low-priv user
3. Cryptographic Failures: bcrypt/Argon2 för lösenord, TLS 1.3, inga egna krypto-implementationer
4. Insecure Design: threat modeling, principle of least privilege
5. Security Misconfiguration: hårdna default-konfigurationer, ta bort debug-endpoints, secrets i vault inte properties-filer

Verktyg: OWASP Dependency-Check för kända sårbarheter i beroenden, SonarQube för SAST.`},{id:115,question:"Hur hanterar du hemliga värden (secrets) säkert i en Kubernetes/OpenShift-miljö?",answer:`Secrets ska aldrig ligga i Git. Alternativ:

• Kubernetes Secrets: base64-kodade (inte krypterade!) – kräver RBAC och etcd-kryptering
• HashiCorp Vault: centraliserad secrets management med audit log, lease/rotation, dynamiska credentials
• OpenShift Secrets Store CSI Driver: monterar Vault-secrets som filer i pods
• Sealed Secrets (Bitnami): krypterade secrets i Git, dekrypteras av controller i klustret

Best practice: rotera regelbundet, audit-logga åtkomst, minsta möjliga behörighet per pod via ServiceAccount.`},{id:116,question:"Vad är Zero Trust-säkerhetsmodellen och hur implementerar du den i mikrotjänster?",answer:`"Never trust, always verify" – ingen trafik är implicit betrodd, inte ens intern.

Implementering:
• mTLS mellan alla tjänster (Istio/service mesh hanterar detta automatiskt)
• JWT-validering i varje tjänst, inte bara gateway
• NetworkPolicy i Kubernetes: tillåt bara nödvändig pod-to-pod-kommunikation
• RBAC för Kubernetes API, minsta möjliga ServiceAccount-rättigheter
• Audit logging av alla API-anrop
• Image scanning (Trivy, Clair) i pipeline

Zero Trust är en resa, inte en produkt – börja med nätverkspolicies och mTLS.`}]},{id:"avancerad-reaktiv",title:"Avancerad reaktiv programmering",color:"#134e4a",icon:"♻️",questions:[{id:117,question:"Vad är Backpressure och hur hanteras det i reaktiva system?",answer:`Backpressure uppstår när en producer genererar data snabbare än consumern kan hantera det.

I Reactive Streams (specifikation bakom Project Reactor, RxJava, Akka Streams): Subscriber begär (request(n)) ett antal element. Producer skickar max n element.

Strategier när buffert är full:
• DROP: kasta nya element
• BUFFER: buffra (risk för OutOfMemoryError)
• LATEST: behåll senaste, kasta gamla
• ERROR: propagera error downstream

I Quarkus Mutiny: .onOverflow().drop() eller .onOverflow().buffer(100).`},{id:118,question:"Förklara skillnaden mellan hot och cold Observables/Publishers.",answer:`Cold: publicerar data från start för varje subscriber. Varje ny subscriber får hela sekvensen från början. Exempel: HTTP-request, databasquery, läsning av fil.

Hot: publicerar data oavsett om det finns subscribers. Subscribers missar data som publicerats innan de prenumererade. Exempel: musevents, stock ticker, Kafka topic.

Converterings:
• Cold → Hot: publish().refCount() eller share() i Reactor/RxJava
• Hot med replay: replay(n) – buffrar och replayer senaste n element för nya subscribers

Quarkus Multi från Kafka är hot.`},{id:119,question:"Hur fungerar Reactive Messaging med MicroProfile och Kafka i Quarkus?",answer:`@Incoming("orders") och @Outgoing("processed-orders") kopplar metoder till Kafka topics via konfiguration:

mp.messaging.incoming.orders.connector=smallrye-kafka
mp.messaging.incoming.orders.topic=orders
mp.messaging.incoming.orders.value.deserializer=...

Metoden kan returnera Uni<Void> (asynkron), Message<T> (ger explicit ack-kontroll) eller T (automatisk ack).

Fördelar: deklarativ, testad med @QuarkusTest + In-Memory connector. Dead Letter Queue: konfigurera failure-strategy=dead-letter-queue.`},{id:120,question:"Vad är Saga-mönstret och hur implementerar du det i mikrotjänster?",answer:`Saga hanterar distribuerade transaktioner utan 2-phase commit. Varje tjänst gör lokal transaktion och publicerar event. Om något misslyckas kör kompensationsåtgärder (rollback via events).

Orchestration Saga: central Saga Orchestrator koordinerar stegen (lämpligt med Temporal.io eller Netflix Conductor).

Choreography Saga: tjänster reagerar på events utan central koordinator – enklare men svårare att debugga.

Exempel: OrderSaga → reserver lager → debitera kort → skicka. Om kortdebitering misslyckas: frilägg lager-reservation.

Implementera med idempotency keys för att hantera dubbletter.`},{id:121,question:"Vad är Event Sourcing och hur skiljer det sig från traditionell state-lagring?",answer:`Traditionell: lagra nuvarande state (UPDATE employee SET salary=50000)

Event Sourcing: lagra alla events som ledde till nuvarande state:
SalaryRaisedEvent(employeeId, from=45000, to=50000, date=2024-01-01)

Fördelar:
• Fullständig audit trail
• Temporal queries (vad var state vid tidpunkt X?)
• Event replay för ny projektion
• Naturlig källa för event-driven system

Nackdelar: komplexitet, eventual consistency, query-svårigheter (lös med CQRS-projektioner).

Implementera med EventStoreDB, Axon Framework eller Kafka (begränsad retention).`}]},{id:"avancerad-spring",title:"Avancerad Spring Boot",color:"#14532d",icon:"🌱",questions:[{id:122,question:"Hur fungerar Spring Boot Auto-configuration?",answer:`Auto-configuration klasser annoteras med @Configuration och @ConditionalOn*-annotationer.

Exempel: DataSourceAutoConfiguration aktiveras om:
• spring-jdbc finns på classpath (@ConditionalOnClass)
• Ingen DataSource bean är definierad av användaren (@ConditionalOnMissingBean)

Spring Boot skannar META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports för auto-konfigurationsklasser.

Felsökning: --debug flagga eller Actuator /actuator/conditions endpoint visar vilka auto-configs som aktiverades och varför.`},{id:123,question:"Vad är Spring Security och hur konfigurerar du det för JWT?",answer:`@EnableWebSecurity + SecurityFilterChain bean.

JWT-flöde:
1. JwtAuthenticationFilter extraherar och validerar token
2. Sätter SecurityContext med Authentication
3. Downstream kod använder @PreAuthorize("hasRole('ADMIN')")

Konfiguration:
http.oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt.decoder(jwtDecoder())))

JwtDecoder verifierar signatur mot JWKS-endpoint (Keycloak: /realms/{realm}/protocol/openid-connect/certs).

CORS, CSRF (inaktivera för stateless API), session management (STATELESS) – konfigurera allt explicit.`},{id:124,question:"Förklara Spring Boot Actuator och dess säkerhetsimplikationer.",answer:`Actuator exponerar management-endpoints: /health, /metrics, /env, /beans, /loggers, /heapdump, /threaddump.

/health: liveness/readiness för Kubernetes probes
/metrics: integrerar med Micrometer → Prometheus
/env: visar konfigurationsvärden (kan exponera secrets!)

Säkerhet:
• Exponera bara /health och /info publikt
• Skydda management-endpoints med Spring Security eller separat port (management.server.port=8081)
• Inaktivera /heapdump i produktion om inte nödvändigt
• management.endpoints.web.exposure.include=health,info,metrics`},{id:125,question:"Vad är Spring Cloud Gateway och hur konfigurerar du routes och filters?",answer:`Spring Cloud Gateway är en reaktiv API-gateway (bygger på WebFlux/Reactor Netty).

Route-konfiguration:
spring.cloud.gateway.routes[0].id=user-service
spring.cloud.gateway.routes[0].uri=lb://user-service
spring.cloud.gateway.routes[0].predicates[0]=Path=/api/users/**
spring.cloud.gateway.routes[0].filters[0]=StripPrefix=1

Filters: AddRequestHeader, CircuitBreaker (Resilience4j), RateLimiter (Redis), RewritePath, AuthenticationFilter (custom).

Internally: Netty → DispatcherHandler → RouteLocator → filter chain → proxied request.`}]},{id:"avancerade-databaser",title:"Avancerade databaser och SQL",color:"#1c1917",icon:"🏛️",questions:[{id:126,question:"Förklara EXPLAIN ANALYZE i PostgreSQL och hur du tolkar Query Plans.",answer:`EXPLAIN visar Query Plan; EXPLAIN ANALYZE kör queries och visar faktisk kostnad.

Viktiga noder:
• Seq Scan: full table scan – dåligt för stora tabeller
• Index Scan: använder index
• Nested Loop / Hash Join / Merge Join: join-strategier

Tolkning: se på "actual time", "rows", "loops". Hög "actual time" med "Seq Scan" → saknar index.

Verktyg: explain.dalibo.com visualiserar query plans grafiskt.

Optimering: lägg index på WHERE- och JOIN-kolumner, undvik SELECT *, analysera statistics med ANALYZE.`},{id:127,question:"Vad är database sharding och när är det lämpligt?",answer:`Sharding delar data horisontellt över flera databasinstanser (shards). Varje shard har en delmängd av raderna, baserat på en shard key.

Strategier: range-based (shard by date), hash-based (jämn distribution), directory-based (lookup-tabell).

När det är lämpligt: single-node databas är maxad (100M+ rader, I/O-gräns). Alternativ att utvärdera först: read replicas, connection pooling (PgBouncer), caching, arkivering av gammal data.

Komplexitet: cross-shard joins är svåra, transaktioner kräver distributed commit. CitusDB/Vitess hanterar detta för PostgreSQL/MySQL.`},{id:128,question:"Vad är CAP-teoremet och hur påverkar det val av databas?",answer:`CAP: ett distribuerat system kan garantera max två av:
• Consistency: alla noder ser samma data
• Availability: systemet svarar alltid
• Partition tolerance: systemet fungerar vid nätverkspartitionering

P är obligatorisk i distribuerade system → val är CA eller CP:
• CP (PostgreSQL, HBase, ZooKeeper): konsistens prioriteras, kan bli otillgänglig
• AP (DynamoDB, Cassandra, CouchDB): alltid tillgänglig, ev. inkonsistent data

Praktik: PACELC-teoremet är mer nyanserat (latency vs. consistency under normal drift). Välj databas utifrån faktiska konsistenskrav.`}]},{id:"avancerad-observability",title:"Avancerad observability och SRE",color:"#0c4a6e",icon:"📡",questions:[{id:129,question:"Vad är SLI, SLO och SLA och hur relaterar de till varandra?",answer:`SLI (Service Level Indicator): ett mätbart mått på tjänstens beteende. Exempel: "andel requests med svarstid < 200 ms".

SLO (Service Level Objective): internt mål för SLI. Exempel: "99.5% av requests ska svara < 200 ms under 30-dagars rullande fönster".

SLA (Service Level Agreement): juridiskt avtal med kund om SLO + konsekvenser vid brott.

Error Budget: 1 - SLO. 99.5% SLO = 0.5% error budget = ~3.6 tim/månad. Om budgeten är slut: frys releases, fokusera på reliabilitet.

SRE-approach: balansera features vs. reliabilitet via error budget.`},{id:130,question:"Förklara OpenTelemetry och hur du instrumenterar en Java-applikation.",answer:`OpenTelemetry (OTel) är en vendor-neutral standard för telemetri: traces, metrics, logs.

Java auto-instrumentation: kör med javaagent:
-javaagent:opentelemetry-javaagent.jar
-Dotel.service.name=order-service
-Dotel.exporter.otlp.endpoint=http://collector:4317

Instrumenterar automatiskt: JDBC, HTTP-klienter, JAX-RS, gRPC, Kafka.

Manuell instrumentering:
Span span = tracer.spanBuilder("processOrder").startSpan();
try (Scope s = span.makeCurrent()) { ... } finally { span.end(); }

Quarkus: quarkus-opentelemetry extension. Data exporteras till Jaeger, Tempo, Honeycomb.`},{id:131,question:"Hur designar du en effektiv alerting-strategi för en mikrotjänstapplikation?",answer:`Principer:
• Alert på symptoms (user-facing impact), inte causes (CPU hög)
• Använd SLO-baserade alerts: "error rate > 1% under 5 min"
• Avoid alert fatigue: varje alert ska vara actionable

Prometheus AlertManager-regler:
alert: HighErrorRate
expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.01
for: 2m

Routing: kritiska alerts → PagerDuty/on-call; varningar → Slack.

Runbook: varje alert ska ha en länk till runbook som beskriver diagnos och åtgärd. Granska och rensa alerts regelbundet.`}]},{id:"djupdykning-quarkus",title:"Djupdykning Quarkus – avancerade ämnen",color:"#3b0764",icon:"🔭",questions:[{id:132,question:"Hur fungerar Quarkus Arc (CDI-implementationen)?",answer:`Arc är Quarkus CDI-implementation, optimerad för build-time. Skillnad mot standard CDI:

• Fullt validerad container vid build-time – fel rapporteras vid kompilering, inte start
• Genererar konkreta proxy-klasser (ingen dynamic proxying via runtime reflection)
• Strikta regler: alla injectable beans måste vara hittbara vid build-time (closed-world)
• Stödjer subset av CDI-spec (Quarkus CDI Reference dokumenterar vad som saknas)

Felsökning: quarkus.arc.detect-unused-false-positives=false, Arc dev UI (/q/dev) visar bean-graf.`},{id:133,question:"Vad är Quarkus Funqy och hur används det för serverless?",answer:`Funqy är ett portabelt API för serverless-funktioner – skriv en gång, kör på AWS Lambda, Azure Functions, Google Cloud Functions eller Knative.

@Funq
public Output process(Input input) {
  return new Output(input.getValue() * 2);
}

Konfigurera sedan med rätt Quarkus-extension: quarkus-funqy-amazon-lambda.

Fördel: ingen plattformsspecifik kod. Stödjer HTTP-trigger och cloud-events.

Native image: kombinerat med GraalVM native ger <100 ms cold start – kritiskt för Lambda där cold start annars kan ta sekunder.`},{id:134,question:"Hur hanterar Quarkus konfigurationslager (Config Sources)?",answer:`Quarkus använder MicroProfile Config. Prioritetsordning (högre nummer = högre prioritet):
1. System properties (400)
2. Environment variables (300)
3. .env-fil (295)
4. application.properties (250)
5. Microprofile Config extensions (varies)

@ConfigProperty(name = "my.setting", defaultValue = "default")
String mySetting;

Profiler: application-{profile}.properties aktiveras med quarkus.profile=prod.

Config Sources kan utökas (t.ex. Vault ConfigSource för secrets). SmallRye Config stödjer config maps, secrets mounting i Kubernetes.`},{id:135,question:"Förklara Quarkus Hibernate Reactive och när det är lämpligt.",answer:`Hibernate Reactive är en icke-blockerande implementation av JPA som integrerar med Vert.x event loop.

Använder Mutiny API:
Uni<Employee> emp = Employee.findById(1L); // returns Uni, not Employee

Lämpligt när:
• Applikationen är genomgående reaktiv (Reactive Routes, SmallRye Reactive Messaging)
• Hög I/O-konkurrens och låg CPU

Olämpligt när:
• Du har befintlig blockerande kod som är svår att göra reaktiv
• Teamet är van vid imperativ programmering
• Virtuella trådar (Java 21) kan ge liknande genomströmning med blockerande kod`},{id:136,question:"Vad är Quarkus CLI och vilka development-verktyg finns?",answer:`quarkus CLI (eller Maven/Gradle plugin) erbjuder:

• quarkus create app: scaffolda nytt projekt med extensions
• quarkus dev: dev mode med live reload, Dev UI, kontinuerlig testning
• quarkus build --native: bygg native image
• quarkus extension add hibernate-orm-panache: lägg till extension

Dev UI (/q/dev): visualiserar beans, konfiguration, health, Dev Services.

Continuous Testing: tester körs automatiskt vid filsparning – snabb feedback loop.

Dev Services: automatisk Testcontainer för databas, Kafka, Keycloak vid dev-mode.`},{id:137,question:"Hur fungerar Quarkus OIDC-integration med Keycloak?",answer:`quarkus-oidc extension konfigureras:

quarkus.oidc.auth-server-url=http://keycloak:8080/realms/myrealm
quarkus.oidc.client-id=my-app
quarkus.oidc.credentials.secret=\${OIDC_SECRET}

Application types:
• service (default): validerar Bearer JWT
• web-app: hanterar Authorization Code Flow, sessions

@RolesAllowed("admin") på endpoints. Claims tillgängliga via SecurityIdentity eller JsonWebToken.

Multi-tenancy: quarkus.oidc.tenant-resolver för att dynamiskt välja Keycloak-realm baserat på request.

Dev Services: startar automatiskt Keycloak-container i dev mode.`},{id:138,question:"Vad är SmallRye Fault Tolerance och hur implementerar du circuit breaker?",answer:`SmallRye Fault Tolerance implementerar MicroProfile Fault Tolerance:

@CircuitBreaker(
  requestVolumeThreshold = 10,
  failureRatio = 0.5,
  delay = 5000
)
@Retry(maxRetries = 3, delay = 200)
@Timeout(value = 2, unit = ChronoUnit.SECONDS)
@Fallback(fallbackMethod = "fallback")
public Response callExternalService() {...}

Tillstånd: CLOSED (normalt) → OPEN (vid för många fel, snabb-felnivå) → HALF_OPEN (provkörs) → CLOSED.

Metrics exponeras automatiskt via Micrometer/Prometheus. Kombinera med @Bulkhead för att begränsa parallella anrop.`},{id:139,question:"Hur testar du Quarkus-applikationer med @QuarkusTest?",answer:`@QuarkusTest startar hela applikationen i testläge. Injicera beans direkt:

@QuarkusTest
class OrderServiceTest {
  @Inject OrderService service;

  @Test
  void testOrder() {
    given().when().get("/orders/1").then().statusCode(200);
  }
}

@QuarkusIntegrationTest: testar native image eller uber-jar – kör mot riktig process.

@QuarkusMock: ersätt en bean med mock för specifik test.

Dev Services hanterar automatiskt testdatabas.

RESTAssured är inbyggt och konfigurerat med rätt port automatiskt.`},{id:140,question:"Förklara Quarkus Scheduler och Quartz-integration.",answer:`Inbyggd scheduler:
@Scheduled(every = "1h", identity = "cleanup-job")
void cleanup() { ... }

Cron-syntax: @Scheduled(cron = "0 0 2 * * ?")

quarkus-quartz extension ger klusterstödd scheduling via databas (JDBC JobStore). Viktigt i Kubernetes där flera poddar körs – utan kluster-scheduling körs jobbet i varje pod.

Programmatisk kontroll: scheduler.pause("cleanup-job"), scheduler.resume(...).

Quartz stödjer job-persistens, missade exekveringar (misfire handling) och triggers med kalender-undantag.`},{id:141,question:"Vad är Quarkus gRPC-stöd och när föredrar du gRPC framför REST?",answer:`Quarkus stödjer gRPC via quarkus-grpc extension. Definiera service i .proto-fil, Quarkus genererar Java-klasser.

@GrpcService
class OrderGrpcService extends OrderServiceGrpc.OrderServiceImplBase {
  @Override
  public void getOrder(GetOrderRequest req, StreamObserver<Order> obs) {...}
}

gRPC vs REST:
• gRPC: binary (protobuf), strikta kontrakt, streaming, låg latens – perfekt för intern mikrotjänstkommunikation
• REST/JSON: universell, enkel debuggning, webb-kompatibel – för externa API:er

Välj gRPC för höga volymer intern kommunikation; REST för externa konsumenter.`},{id:142,question:"Hur hanterar du databasmigrationer i Quarkus med Flyway eller Liquibase?",answer:`Flyway (quarkus-flyway):
• Versionsbaserade migrationsfiler: V1__create_tables.sql, V2__add_column.sql
• Körs automatiskt vid start om quarkus.flyway.migrate-at-start=true
• Flyway schema_version tabell spårar körda migreringar

Liquibase (quarkus-liquibase):
• Changelog-baserad (XML, YAML, JSON, SQL)
• Stödjer rollback, preconditions, contexts
• Mer flexibel men mer komplex

Best practices:
• Aldrig modifiera körda migreringar
• En migration per förändring
• Testa migreringar i CI mot produktionslik databas
• Bakåtkompatibla schema-ändringar (additive first)`},{id:143,question:"Vad är Quarkus WebSockets och Server-Sent Events (SSE)?",answer:`WebSockets (quarkus-websockets-next, Java EE WebSocket API):
@ServerEndpoint("/chat/{user}")
class ChatSocket {
  @OnMessage
  void message(String msg, Session session) {...}
}

Bidirektionell kommunikation – lämplig för chat, live collaboration, gaming.

SSE (Server-Sent Events) via JAX-RS:
@GET @Produces(MediaType.SERVER_SENT_EVENTS)
Publisher<String> stream() { return Multi.createFrom().ticks().every(Duration.ofSeconds(1)).map(i -> "tick"); }

SSE: envägs (server → client), enklare, HTTP-kompatibel, automatisk reconnect i browsers. Lämplig för live dashboards, notifieringar.`},{id:144,question:"Hur använder du Quarkus GraphQL?",answer:`quarkus-smallrye-graphql extension. Definiera schema med annotations:

@GraphQLApi
class ProductApi {
  @Query
  public Product product(@Name("id") long id) { return service.find(id); }

  @Mutation
  public Product createProduct(Product product) { return service.create(product); }

  @Subscription
  public Multi<Product> productUpdates() { return eventStream; }
}

Schema genereras automatiskt från Java-klasser. GraphiQL UI (/q/graphql-ui) i dev mode.

Fördel: klienten begär exakt de fält den behöver (under-/over-fetching elimineras). Lämplig för BFF (Backend for Frontend) eller komplex dataaggregation.`},{id:145,question:"Sammanfatta en idealisk Quarkus-mikroservicearkitektur för ett enterprise-system.",answer:`Lager:
• API: JAX-RS med OpenAPI-spec, JWT-validering via OIDC
• Business: CDI beans med @ApplicationScoped, Fault Tolerance
• Persistence: Hibernate/Panache + Flyway migrationer
• Messaging: SmallRye Reactive Messaging (Kafka)

Observability: OpenTelemetry traces, Micrometer metrics → Prometheus, strukturerad JSON-loggning → ELK

Säkerhet: Vault for secrets, mTLS i service mesh, minimal SCC

CI/CD: Tekton pipeline → ArgoCD GitOps

Testning: @QuarkusTest + Testcontainers + Pact contract tests

Native image i produktion för snabb skalning i Kubernetes/OpenShift.`,tip:"En fråga som sammanför allt – visa helhetsbild och förmåga att sätta ihop pusslet."}]}],Mc={class:"home"},Nc={class:"hero"},Vc={class:"grid"},Fc={class:"icon"},Hc={class:"count"},Jc=ln({__name:"HomeView",setup(e){const t=Ee(()=>kn.reduce((n,r)=>n+r.questions.length,0));return(n,r)=>{const i=Dr("RouterLink");return Pe(),ft("div",Mc,[U("header",Nc,[r[0]||(r[0]=U("h1",null,"Java Intervjufrågor",-1)),U("p",null,Se(t.value)+" frågor fördelade på "+Se(pt(kn).length)+" ämnen",1)]),U("main",Vc,[(Pe(!0),ft(xe,null,ya(pt(kn),a=>(Pe(),Vn(i,{key:a.id,to:`/category/${a.id}`,class:"cat-card",style:In({"--accent":a.color})},{default:Sn(()=>[U("span",Fc,Se(a.icon),1),U("h2",null,Se(a.title),1),U("span",Hc,Se(a.questions.length)+" frågor",1),r[1]||(r[1]=U("div",{class:"bar"},null,-1))]),_:2},1032,["to","style"]))),128))])])}}}),Bc=Fn(Jc,[["__scopeId","data-v-9d811959"]]),Kc={class:"face front"},Gc={class:"label"},Qc={class:"text"},Uc={class:"face back"},Wc={class:"text"},zc={key:0,class:"tip"},$c=ln({__name:"FlashCard",props:{question:{}},setup(e){const t=Tr(!1);return(n,r)=>(Pe(),ft("div",{class:"card-wrapper",onClick:r[0]||(r[0]=i=>t.value=!t.value)},[U("div",{class:sn(["card",{flipped:t.value}])},[U("div",Kc,[U("span",Gc,"Fråga "+Se(e.question.id),1),U("p",Qc,Se(e.question.question),1),r[1]||(r[1]=U("span",{class:"hint"},"Klicka för att se svaret",-1))]),U("div",Uc,[r[2]||(r[2]=U("span",{class:"label"},"Svar",-1)),U("p",Wc,Se(e.question.answer),1),e.question.tip?(Pe(),ft("p",zc,"💡 "+Se(e.question.tip),1)):Jo("",!0),r[3]||(r[3]=U("span",{class:"hint"},"Klicka för att se frågan igen",-1))])],2)]))}}),Yc=Fn($c,[["__scopeId","data-v-588a2765"]]),Zc={key:0,class:"page"},Xc={class:"navbar"},eu={class:"meta"},tu={class:"icon"},nu={class:"title"},ru={class:"progress"},iu={class:"content"},au={class:"controls"},su=["disabled"],ou={class:"dots"},lu=["onClick"],cu=["disabled"],uu={key:1,class:"not-found"},du=ln({__name:"CategoryView",setup(e){const t=qc(),n=Tr(0),r=Ee(()=>kn.find(i=>i.id===t.params.id));return(i,a)=>{const s=Dr("RouterLink");return r.value?(Pe(),ft("div",Zc,[U("nav",Xc,[he(s,{to:"/",class:"back"},{default:Sn(()=>[...a[2]||(a[2]=[fr("← Alla ämnen",-1)])]),_:1}),U("div",eu,[U("span",tu,Se(r.value.icon),1),U("span",nu,Se(r.value.title),1)]),U("span",ru,Se(n.value+1)+" / "+Se(r.value.questions.length),1)]),U("main",iu,[(Pe(),Vn(Yc,{key:n.value,question:r.value.questions[n.value]},null,8,["question"])),U("div",au,[U("button",{disabled:n.value===0,onClick:a[0]||(a[0]=o=>n.value--)},"← Föregående",8,su),U("div",ou,[(Pe(!0),ft(xe,null,ya(r.value.questions,(o,l)=>(Pe(),ft("button",{key:l,class:sn(["dot",{active:l===n.value}]),onClick:f=>n.value=l},null,10,lu))),128))]),U("button",{disabled:n.value===r.value.questions.length-1,onClick:a[1]||(a[1]=o=>n.value++)}," Nästa → ",8,cu)])])])):(Pe(),ft("div",uu,[a[4]||(a[4]=U("p",null,"Kategorin hittades inte.",-1)),he(s,{to:"/"},{default:Sn(()=>[...a[3]||(a[3]=[fr("← Tillbaka",-1)])]),_:1})]))}}}),fu=Fn(du,[["__scopeId","data-v-b8973292"]]),pu=Lc({history:pc(),routes:[{path:"/",component:Bc},{path:"/category/:id",component:fu}]});Cl(wl).use(pu).mount("#app");
