(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Er(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},Nt=[],et=()=>{},Ka=()=>!1,qn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Vn=e=>e.startsWith("onUpdate:"),ye=Object.assign,Tr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ps=Object.prototype.hasOwnProperty,z=(e,t)=>ps.call(e,t),N=Array.isArray,Ht=e=>Sn(e)==="[object Map]",Wa=e=>Sn(e)==="[object Set]",Yr=e=>Sn(e)==="[object Date]",H=e=>typeof e=="function",de=e=>typeof e=="string",nt=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Qa=e=>(X(e)||H(e))&&H(e.then)&&H(e.catch),$a=Object.prototype.toString,Sn=e=>$a.call(e),ms=e=>Sn(e).slice(8,-1),za=e=>Sn(e)==="[object Object]",Rr=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,on=Er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fs=/-\w/g,Te=Fn(e=>e.replace(fs,t=>t.slice(1).toUpperCase())),gs=/\B([A-Z])/g,Lt=Fn(e=>e.replace(gs,"-$1").toLowerCase()),Nn=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),zn=Fn(e=>e?`on${Nn(e)}`:""),Ze=(e,t)=>!Object.is(e,t),Xn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Xa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},hs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zr;const Hn=()=>Zr||(Zr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oe(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=de(r)?ys(r):Oe(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(de(e)||X(e))return e}const ks=/;(?![^(]*\))/g,vs=/:([^]+)/,bs=/\/\*[^]*?\*\//g;function ys(e){const t={};return e.replace(bs,"").split(ks).forEach(n=>{if(n){const r=n.split(vs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ve(e){let t="";if(de(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=ve(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ss="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ws=Er(Ss);function Ya(e){return!!e||e===""}function As(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=jr(e[r],t[r]);return n}function jr(e,t){if(e===t)return!0;let n=Yr(e),r=Yr(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=nt(e),r=nt(t),n||r)return e===t;if(n=N(e),r=N(t),n||r)return n&&r?As(e,t):!1;if(n=X(e),r=X(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const s in e){const o=e.hasOwnProperty(s),l=t.hasOwnProperty(s);if(o&&!l||!o&&l||!jr(e[s],t[s]))return!1}}return String(e)===String(t)}const Za=e=>!!(e&&e.__v_isRef===!0),B=e=>de(e)?e:e==null?"":N(e)||X(e)&&(e.toString===$a||!H(e.toString))?Za(e)?B(e.value):JSON.stringify(e,ei,2):String(e),ei=(e,t)=>Za(t)?ei(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[Yn(r,i)+" =>"]=a,n),{})}:Wa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Yn(n))}:nt(t)?Yn(t):X(t)&&!N(t)&&!za(t)?String(t):t,Yn=(e,t="")=>{var n;return nt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Cs{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){++this._on===1&&(this.prevScope=Pe,Pe=this)}off(){this._on>0&&--this._on===0&&(Pe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function xs(){return Pe}let re;const Zn=new WeakSet;class ti{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&Pe.active&&Pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zn.has(this)&&(Zn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ri(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ea(this),ai(this);const t=re,n=Be;re=this,Be=!0;try{return this.fn()}finally{ii(this),re=t,Be=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Mr(t);this.deps=this.depsTail=void 0,ea(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ur(this)&&this.run()}get dirty(){return ur(this)}}let ni=0,ln,cn;function ri(e,t=!1){if(e.flags|=8,t){e.next=cn,cn=e;return}e.next=ln,ln=e}function Pr(){ni++}function Ir(){if(--ni>0)return;if(cn){let t=cn;for(cn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ln;){let t=ln;for(ln=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function ai(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ii(e){let t,n=e.depsTail,r=n;for(;r;){const a=r.prevDep;r.version===-1?(r===n&&(n=a),Mr(r),Es(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=a}e.deps=t,e.depsTail=n}function ur(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(si(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function si(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===gn)||(e.globalVersion=gn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ur(e))))return;e.flags|=2;const t=e.dep,n=re,r=Be;re=e,Be=!0;try{ai(e);const a=e.fn(e._value);(t.version===0||Ze(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{re=n,Be=r,ii(e),e.flags&=-3}}function Mr(e,t=!1){const{dep:n,prevSub:r,nextSub:a}=e;if(r&&(r.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Es(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Be=!0;const oi=[];function ut(){oi.push(Be),Be=!1}function pt(){const e=oi.pop();Be=e===void 0?!0:e}function ea(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=re;re=void 0;try{t()}finally{re=n}}}let gn=0;class Ts{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Or{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!re||!Be||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Ts(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,li(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=r)}return n}trigger(t){this.version++,gn++,this.notify(t)}notify(t){Pr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ir()}}}function li(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)li(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const pr=new WeakMap,Mt=Symbol(""),mr=Symbol(""),hn=Symbol("");function Se(e,t,n){if(Be&&re){let r=pr.get(e);r||pr.set(e,r=new Map);let a=r.get(n);a||(r.set(n,a=new Or),a.map=r,a.key=n),a.track()}}function ct(e,t,n,r,a,i){const s=pr.get(e);if(!s){gn++;return}const o=l=>{l&&l.trigger()};if(Pr(),t==="clear")s.forEach(o);else{const l=N(e),p=l&&Rr(n);if(l&&n==="length"){const d=Number(r);s.forEach((m,g)=>{(g==="length"||g===hn||!nt(g)&&g>=d)&&o(m)})}else switch((n!==void 0||s.has(void 0))&&o(s.get(n)),p&&o(s.get(hn)),t){case"add":l?p&&o(s.get("length")):(o(s.get(Mt)),Ht(e)&&o(s.get(mr)));break;case"delete":l||(o(s.get(Mt)),Ht(e)&&o(s.get(mr)));break;case"set":Ht(e)&&o(s.get(Mt));break}}Ir()}function qt(e){const t=$(e);return t===e?t:(Se(t,"iterate",hn),De(e)?t:t.map(qe))}function Gn(e){return Se(e=$(e),"iterate",hn),e}function Xe(e,t){return mt(e)?Kt(Ot(e)?qe(t):t):qe(t)}const Rs={__proto__:null,[Symbol.iterator](){return er(this,Symbol.iterator,e=>Xe(this,e))},concat(...e){return qt(this).concat(...e.map(t=>N(t)?qt(t):t))},entries(){return er(this,"entries",e=>(e[1]=Xe(this,e[1]),e))},every(e,t){return it(this,"every",e,t,void 0,arguments)},filter(e,t){return it(this,"filter",e,t,n=>n.map(r=>Xe(this,r)),arguments)},find(e,t){return it(this,"find",e,t,n=>Xe(this,n),arguments)},findIndex(e,t){return it(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return it(this,"findLast",e,t,n=>Xe(this,n),arguments)},findLastIndex(e,t){return it(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return it(this,"forEach",e,t,void 0,arguments)},includes(...e){return tr(this,"includes",e)},indexOf(...e){return tr(this,"indexOf",e)},join(e){return qt(this).join(e)},lastIndexOf(...e){return tr(this,"lastIndexOf",e)},map(e,t){return it(this,"map",e,t,void 0,arguments)},pop(){return nn(this,"pop")},push(...e){return nn(this,"push",e)},reduce(e,...t){return ta(this,"reduce",e,t)},reduceRight(e,...t){return ta(this,"reduceRight",e,t)},shift(){return nn(this,"shift")},some(e,t){return it(this,"some",e,t,void 0,arguments)},splice(...e){return nn(this,"splice",e)},toReversed(){return qt(this).toReversed()},toSorted(e){return qt(this).toSorted(e)},toSpliced(...e){return qt(this).toSpliced(...e)},unshift(...e){return nn(this,"unshift",e)},values(){return er(this,"values",e=>Xe(this,e))}};function er(e,t,n){const r=Gn(e),a=r[t]();return r!==e&&!De(e)&&(a._next=a.next,a.next=()=>{const i=a._next();return i.done||(i.value=n(i.value)),i}),a}const js=Array.prototype;function it(e,t,n,r,a,i){const s=Gn(e),o=s!==e&&!De(e),l=s[t];if(l!==js[t]){const m=l.apply(e,i);return o?qe(m):m}let p=n;s!==e&&(o?p=function(m,g){return n.call(this,Xe(e,m),g,e)}:n.length>2&&(p=function(m,g){return n.call(this,m,g,e)}));const d=l.call(s,p,r);return o&&a?a(d):d}function ta(e,t,n,r){const a=Gn(e),i=a!==e&&!De(e);let s=n,o=!1;a!==e&&(i?(o=r.length===0,s=function(p,d,m){return o&&(o=!1,p=Xe(e,p)),n.call(this,p,Xe(e,d),m,e)}):n.length>3&&(s=function(p,d,m){return n.call(this,p,d,m,e)}));const l=a[t](s,...r);return o?Xe(e,l):l}function tr(e,t,n){const r=$(e);Se(r,"iterate",hn);const a=r[t](...n);return(a===-1||a===!1)&&Dr(n[0])?(n[0]=$(n[0]),r[t](...n)):a}function nn(e,t,n=[]){ut(),Pr();const r=$(e)[t].apply(e,n);return Ir(),pt(),r}const Ps=Er("__proto__,__v_isRef,__isVue"),ci=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nt));function Is(e){nt(e)||(e=String(e));const t=$(this);return Se(t,"has",e),t.hasOwnProperty(e)}class di{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Fs:fi:i?mi:pi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=N(t);if(!a){let l;if(s&&(l=Rs[n]))return l;if(n==="hasOwnProperty")return Is}const o=Reflect.get(t,n,Ae(t)?t:r);if((nt(n)?ci.has(n):Ps(n))||(a||Se(t,"get",n),i))return o;if(Ae(o)){const l=s&&Rr(n)?o:o.value;return a&&X(l)?gr(l):l}return X(o)?a?gr(o):Yt(o):o}}class ui extends di{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];const s=N(t)&&Rr(n);if(!this._isShallow){const p=mt(i);if(!De(r)&&!mt(r)&&(i=$(i),r=$(r)),!s&&Ae(i)&&!Ae(r))return p||(i.value=r),!0}const o=s?Number(n)<t.length:z(t,n),l=Reflect.set(t,n,r,Ae(t)?t:a);return t===$(a)&&(o?Ze(r,i)&&ct(t,"set",n,r):ct(t,"add",n,r)),l}deleteProperty(t,n){const r=z(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&ct(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!nt(n)||!ci.has(n))&&Se(t,"has",n),r}ownKeys(t){return Se(t,"iterate",N(t)?"length":Mt),Reflect.ownKeys(t)}}class Ms extends di{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Os=new ui,_s=new Ms,Ls=new ui(!0);const fr=e=>e,Cn=e=>Reflect.getPrototypeOf(e);function Ds(e,t,n){return function(...r){const a=this.__v_raw,i=$(a),s=Ht(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,p=a[e](...r),d=n?fr:t?Kt:qe;return!t&&Se(i,"iterate",l?mr:Mt),ye(Object.create(p),{next(){const{value:m,done:g}=p.next();return g?{value:m,done:g}:{value:o?[d(m[0]),d(m[1])]:d(m),done:g}}})}}function xn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Js(e,t){const n={get(a){const i=this.__v_raw,s=$(i),o=$(a);e||(Ze(a,o)&&Se(s,"get",a),Se(s,"get",o));const{has:l}=Cn(s),p=t?fr:e?Kt:qe;if(l.call(s,a))return p(i.get(a));if(l.call(s,o))return p(i.get(o));i!==s&&i.get(a)},get size(){const a=this.__v_raw;return!e&&Se($(a),"iterate",Mt),a.size},has(a){const i=this.__v_raw,s=$(i),o=$(a);return e||(Ze(a,o)&&Se(s,"has",a),Se(s,"has",o)),a===o?i.has(a):i.has(a)||i.has(o)},forEach(a,i){const s=this,o=s.__v_raw,l=$(o),p=t?fr:e?Kt:qe;return!e&&Se(l,"iterate",Mt),o.forEach((d,m)=>a.call(i,p(d),p(m),s))}};return ye(n,e?{add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear")}:{add(a){const i=$(this),s=Cn(i),o=$(a),l=!t&&!De(a)&&!mt(a)?o:a;return s.has.call(i,l)||Ze(a,l)&&s.has.call(i,a)||Ze(o,l)&&s.has.call(i,o)||(i.add(l),ct(i,"add",l,l)),this},set(a,i){!t&&!De(i)&&!mt(i)&&(i=$(i));const s=$(this),{has:o,get:l}=Cn(s);let p=o.call(s,a);p||(a=$(a),p=o.call(s,a));const d=l.call(s,a);return s.set(a,i),p?Ze(i,d)&&ct(s,"set",a,i):ct(s,"add",a,i),this},delete(a){const i=$(this),{has:s,get:o}=Cn(i);let l=s.call(i,a);l||(a=$(a),l=s.call(i,a)),o&&o.call(i,a);const p=i.delete(a);return l&&ct(i,"delete",a,void 0),p},clear(){const a=$(this),i=a.size!==0,s=a.clear();return i&&ct(a,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=Ds(a,e,t)}),n}function _r(e,t){const n=Js(e,t);return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Bs={get:_r(!1,!1)},qs={get:_r(!1,!0)},Vs={get:_r(!0,!1)};const pi=new WeakMap,mi=new WeakMap,fi=new WeakMap,Fs=new WeakMap;function Ns(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hs(e){return e.__v_skip||!Object.isExtensible(e)?0:Ns(ms(e))}function Yt(e){return mt(e)?e:Lr(e,!1,Os,Bs,pi)}function gi(e){return Lr(e,!1,Ls,qs,mi)}function gr(e){return Lr(e,!0,_s,Vs,fi)}function Lr(e,t,n,r,a){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Hs(e);if(i===0)return e;const s=a.get(e);if(s)return s;const o=new Proxy(e,i===2?r:n);return a.set(e,o),o}function Ot(e){return mt(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function mt(e){return!!(e&&e.__v_isReadonly)}function De(e){return!!(e&&e.__v_isShallow)}function Dr(e){return e?!!e.__v_raw:!1}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function Gs(e){return!z(e,"__v_skip")&&Object.isExtensible(e)&&Xa(e,"__v_skip",!0),e}const qe=e=>X(e)?Yt(e):e,Kt=e=>X(e)?gr(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function At(e){return hi(e,!1)}function Us(e){return hi(e,!0)}function hi(e,t){return Ae(e)?e:new Ks(e,t)}class Ks{constructor(t,n){this.dep=new Or,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:$(t),this._value=n?t:qe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||De(t)||mt(t);t=r?t:$(t),Ze(t,n)&&(this._rawValue=t,this._value=r?t:qe(t),this.dep.trigger())}}function ie(e){return Ae(e)?e.value:e}const Ws={get:(e,t,n)=>t==="__v_raw"?e:ie(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Ae(a)&&!Ae(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ki(e){return Ot(e)?e:new Proxy(e,Ws)}class Qs{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Or(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return ri(this,!0),!0}get value(){const t=this.dep.track();return si(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $s(e,t,n=!1){let r,a;return H(e)?r=e:(r=e.get,a=e.set),new Qs(r,a,n)}const En={},In=new WeakMap;let Pt;function zs(e,t=!1,n=Pt){if(n){let r=In.get(n);r||In.set(n,r=[]),r.push(e)}}function Xs(e,t,n=ae){const{immediate:r,deep:a,once:i,scheduler:s,augmentJob:o,call:l}=n,p=L=>a?L:De(L)||a===!1||a===0?St(L,1):St(L);let d,m,g,h,M=!1,C=!1;if(Ae(e)?(m=()=>e.value,M=De(e)):Ot(e)?(m=()=>p(e),M=!0):N(e)?(C=!0,M=e.some(L=>Ot(L)||De(L)),m=()=>e.map(L=>{if(Ae(L))return L.value;if(Ot(L))return p(L);if(H(L))return l?l(L,2):L()})):H(e)?t?m=l?()=>l(e,2):e:m=()=>{if(g){ut();try{g()}finally{pt()}}const L=Pt;Pt=d;try{return l?l(e,3,[h]):e(h)}finally{Pt=L}}:m=et,t&&a){const L=m,ee=a===!0?1/0:a;m=()=>St(L(),ee)}const j=xs(),O=()=>{d.stop(),j&&j.active&&Tr(j.effects,d)};if(i&&t){const L=t;t=(...ee)=>{L(...ee),O()}}let w=C?new Array(e.length).fill(En):En;const _=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(t){const ee=d.run();if(a||M||(C?ee.some((ge,se)=>Ze(ge,w[se])):Ze(ee,w))){g&&g();const ge=Pt;Pt=d;try{const se=[ee,w===En?void 0:C&&w[0]===En?[]:w,h];w=ee,l?l(t,3,se):t(...se)}finally{Pt=ge}}}else d.run()};return o&&o(_),d=new ti(m),d.scheduler=s?()=>s(_,!1):_,h=L=>zs(L,!1,d),g=d.onStop=()=>{const L=In.get(d);if(L){if(l)l(L,4);else for(const ee of L)ee();In.delete(d)}},t?r?_(!0):w=d.run():s?s(_.bind(null,!0),!0):d.run(),O.pause=d.pause.bind(d),O.resume=d.resume.bind(d),O.stop=O,O}function St(e,t=1/0,n){if(t<=0||!X(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ae(e))St(e.value,t,n);else if(N(e))for(let r=0;r<e.length;r++)St(e[r],t,n);else if(Wa(e)||Ht(e))e.forEach(r=>{St(r,t,n)});else if(za(e)){for(const r in e)St(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&St(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wn(e,t,n,r){try{return r?e(...r):e()}catch(a){Un(a,t,n)}}function rt(e,t,n,r){if(H(e)){const a=wn(e,t,n,r);return a&&Qa(a)&&a.catch(i=>{Un(i,t,n)}),a}if(N(e)){const a=[];for(let i=0;i<e.length;i++)a.push(rt(e[i],t,n,r));return a}}function Un(e,t,n,r=!0){const a=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||ae;if(t){let o=t.parent;const l=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const d=o.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,l,p)===!1)return}o=o.parent}if(i){ut(),wn(i,null,10,[e,l,p]),pt();return}}Ys(e,n,a,r,s)}function Ys(e,t,n,r=!0,a=!1){if(a)throw e;console.error(e)}const Ee=[];let ze=-1;const Gt=[];let bt=null,Vt=0;const vi=Promise.resolve();let Mn=null;function bi(e){const t=Mn||vi;return e?t.then(this?e.bind(this):e):t}function Zs(e){let t=ze+1,n=Ee.length;for(;t<n;){const r=t+n>>>1,a=Ee[r],i=kn(a);i<e||i===e&&a.flags&2?t=r+1:n=r}return t}function Jr(e){if(!(e.flags&1)){const t=kn(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=kn(n)?Ee.push(e):Ee.splice(Zs(t),0,e),e.flags|=1,yi()}}function yi(){Mn||(Mn=vi.then(wi))}function eo(e){N(e)?Gt.push(...e):bt&&e.id===-1?bt.splice(Vt+1,0,e):e.flags&1||(Gt.push(e),e.flags|=1),yi()}function na(e,t,n=ze+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Si(e){if(Gt.length){const t=[...new Set(Gt)].sort((n,r)=>kn(n)-kn(r));if(Gt.length=0,bt){bt.push(...t);return}for(bt=t,Vt=0;Vt<bt.length;Vt++){const n=bt[Vt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bt=null,Vt=0}}const kn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wi(e){try{for(ze=0;ze<Ee.length;ze++){const t=Ee[ze];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),wn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ze<Ee.length;ze++){const t=Ee[ze];t&&(t.flags&=-2)}ze=-1,Ee.length=0,Si(),Mn=null,(Ee.length||Gt.length)&&wi()}}let Je=null,Ai=null;function On(e){const t=Je;return Je=e,Ai=e&&e.type.__scopeId||null,t}function pe(e,t=Je,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Dn(-1);const i=On(t);let s;try{s=e(...a)}finally{On(i),r._d&&Dn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(ut(),rt(l,n,8,[e.el,o,e,t]),pt())}}function Tn(e,t){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[e]=t}}function tt(e,t,n=!1){const r=rl();if(r||Ut){let a=Ut?Ut._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r&&r.proxy):t}}const to=Symbol.for("v-scx"),no=()=>tt(to);function ro(e,t){return Br(e,null,t)}function _t(e,t,n){return Br(e,t,n)}function Br(e,t,n=ae){const{immediate:r,deep:a,flush:i,once:s}=n,o=ye({},n),l=t&&r||!t&&i!=="post";let p;if(bn){if(i==="sync"){const h=no();p=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=et,h.resume=et,h.pause=et,h}}const d=we;o.call=(h,M,C)=>rt(h,d,M,C);let m=!1;i==="post"?o.scheduler=h=>{je(h,d&&d.suspense)}:i!=="sync"&&(m=!0,o.scheduler=(h,M)=>{M?h():Jr(h)}),o.augmentJob=h=>{t&&(h.flags|=4),m&&(h.flags|=2,d&&(h.id=d.uid,h.i=d))};const g=Xs(e,t,o);return bn&&(p?p.push(g):l&&g()),g}function ao(e,t,n){const r=this.proxy,a=de(e)?e.includes(".")?Ci(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const s=An(this),o=Br(a,i.bind(r),n);return s(),o}function Ci(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}const io=Symbol("_vte"),so=e=>e.__isTeleport,oo=Symbol("_leaveCb");function qr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,qr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fe(e,t){return H(e)?ye({name:e.name},t,{setup:e}):e}function xi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ra(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const _n=new WeakMap;function dn(e,t,n,r,a=!1){if(N(e)){e.forEach((C,j)=>dn(C,t&&(N(t)?t[j]:t),n,r,a));return}if(un(r)&&!a){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&dn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Hr(r.component):r.el,s=a?null:i,{i:o,r:l}=e,p=t&&t.r,d=o.refs===ae?o.refs={}:o.refs,m=o.setupState,g=$(m),h=m===ae?Ka:C=>ra(d,C)?!1:z(g,C),M=(C,j)=>!(j&&ra(d,j));if(p!=null&&p!==l){if(aa(t),de(p))d[p]=null,h(p)&&(m[p]=null);else if(Ae(p)){const C=t;M(p,C.k)&&(p.value=null),C.k&&(d[C.k]=null)}}if(H(l))wn(l,o,12,[s,d]);else{const C=de(l),j=Ae(l);if(C||j){const O=()=>{if(e.f){const w=C?h(l)?m[l]:d[l]:M()||!e.k?l.value:d[e.k];if(a)N(w)&&Tr(w,i);else if(N(w))w.includes(i)||w.push(i);else if(C)d[l]=[i],h(l)&&(m[l]=d[l]);else{const _=[i];M(l,e.k)&&(l.value=_),e.k&&(d[e.k]=_)}}else C?(d[l]=s,h(l)&&(m[l]=s)):j&&(M(l,e.k)&&(l.value=s),e.k&&(d[e.k]=s))};if(s){const w=()=>{O(),_n.delete(e)};w.id=-1,_n.set(e,w),je(w,n)}else aa(e),O()}}}function aa(e){const t=_n.get(e);t&&(t.flags|=8,_n.delete(e))}Hn().requestIdleCallback;Hn().cancelIdleCallback;const un=e=>!!e.type.__asyncLoader,Ei=e=>e.type.__isKeepAlive;function lo(e,t){Ti(e,"a",t)}function co(e,t){Ti(e,"da",t)}function Ti(e,t,n=we){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Kn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ei(a.parent.vnode)&&uo(r,t,n,a),a=a.parent}}function uo(e,t,n,r){const a=Kn(t,e,r,!0);Ri(()=>{Tr(r[t],a)},n)}function Kn(e,t,n=we,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{ut();const o=An(n),l=rt(t,n,e,s);return o(),pt(),l});return r?a.unshift(i):a.push(i),i}}const ft=e=>(t,n=we)=>{(!bn||e==="sp")&&Kn(e,(...r)=>t(...r),n)},po=ft("bm"),mo=ft("m"),fo=ft("bu"),go=ft("u"),ho=ft("bum"),Ri=ft("um"),ko=ft("sp"),vo=ft("rtg"),bo=ft("rtc");function yo(e,t=we){Kn("ec",e,t)}const So="components";function Zt(e,t){return Ao(So,e,!0,t)||e}const wo=Symbol.for("v-ndc");function Ao(e,t,n=!0,r=!1){const a=Je||we;if(a){const i=a.type;{const o=ll(i,!1);if(o&&(o===t||o===Te(t)||o===Nn(Te(t))))return i}const s=ia(a[e]||i[e],t)||ia(a.appContext[e],t);return!s&&r?i:s}}function ia(e,t){return e&&(e[t]||e[Te(t)]||e[Nn(Te(t))])}function Wt(e,t,n,r){let a;const i=n,s=N(e);if(s||de(e)){const o=s&&Ot(e);let l=!1,p=!1;o&&(l=!De(e),p=mt(e),e=Gn(e)),a=new Array(e.length);for(let d=0,m=e.length;d<m;d++)a[d]=t(l?p?Kt(qe(e[d])):qe(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i)}else if(X(e))if(e[Symbol.iterator])a=Array.from(e,(o,l)=>t(o,l,void 0,i));else{const o=Object.keys(e);a=new Array(o.length);for(let l=0,p=o.length;l<p;l++){const d=o[l];a[l]=t(e[d],d,l,i)}}else a=[];return a}const hr=e=>e?Qi(e)?Hr(e):hr(e.parent):null,pn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hr(e.parent),$root:e=>hr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Pi(e),$forceUpdate:e=>e.f||(e.f=()=>{Jr(e.update)}),$nextTick:e=>e.n||(e.n=bi.bind(e.proxy)),$watch:e=>ao.bind(e)}),nr=(e,t)=>e!==ae&&!e.__isScriptSetup&&z(e,t),Co={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;if(t[0]!=="$"){const g=s[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(nr(r,t))return s[t]=1,r[t];if(a!==ae&&z(a,t))return s[t]=2,a[t];if(z(i,t))return s[t]=3,i[t];if(n!==ae&&z(n,t))return s[t]=4,n[t];kr&&(s[t]=0)}}const p=pn[t];let d,m;if(p)return t==="$attrs"&&Se(e.attrs,"get",""),p(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(n!==ae&&z(n,t))return s[t]=4,n[t];if(m=l.config.globalProperties,z(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return nr(a,t)?(a[t]=n,!0):r!==ae&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,props:i,type:s}},o){let l;return!!(n[o]||e!==ae&&o[0]!=="$"&&z(e,o)||nr(t,o)||z(i,o)||z(r,o)||z(pn,o)||z(a.config.globalProperties,o)||(l=s.__cssModules)&&l[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function sa(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let kr=!0;function xo(e){const t=Pi(e),n=e.proxy,r=e.ctx;kr=!1,t.beforeCreate&&oa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:p,created:d,beforeMount:m,mounted:g,beforeUpdate:h,updated:M,activated:C,deactivated:j,beforeDestroy:O,beforeUnmount:w,destroyed:_,unmounted:L,render:ee,renderTracked:ge,renderTriggered:se,errorCaptured:Ne,serverPrefetch:gt,expose:He,inheritAttrs:ht,components:Et,directives:Ge,filters:en}=t;if(p&&Eo(p,r,null),s)for(const Y in s){const W=s[Y];H(W)&&(r[Y]=W.bind(n))}if(a){const Y=a.call(n,n);X(Y)&&(e.data=Yt(Y))}if(kr=!0,i)for(const Y in i){const W=i[Y],at=H(W)?W.bind(n,n):H(W.get)?W.get.bind(n,n):et,kt=!H(W)&&H(W.set)?W.set.bind(n):et,Ue=oe({get:at,set:kt});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Re=>Ue.value=Re})}if(o)for(const Y in o)ji(o[Y],r,n,Y);if(l){const Y=H(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(W=>{Tn(W,Y[W])})}d&&oa(d,e,"c");function me(Y,W){N(W)?W.forEach(at=>Y(at.bind(n))):W&&Y(W.bind(n))}if(me(po,m),me(mo,g),me(fo,h),me(go,M),me(lo,C),me(co,j),me(yo,Ne),me(bo,ge),me(vo,se),me(ho,w),me(Ri,L),me(ko,gt),N(He))if(He.length){const Y=e.exposed||(e.exposed={});He.forEach(W=>{Object.defineProperty(Y,W,{get:()=>n[W],set:at=>n[W]=at,enumerable:!0})})}else e.exposed||(e.exposed={});ee&&e.render===et&&(e.render=ee),ht!=null&&(e.inheritAttrs=ht),Et&&(e.components=Et),Ge&&(e.directives=Ge),gt&&xi(e)}function Eo(e,t,n=et){N(e)&&(e=vr(e));for(const r in e){const a=e[r];let i;X(a)?"default"in a?i=tt(a.from||r,a.default,!0):i=tt(a.from||r):i=tt(a),Ae(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function oa(e,t,n){rt(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ji(e,t,n,r){let a=r.includes(".")?Ci(n,r):()=>n[r];if(de(e)){const i=t[e];H(i)&&_t(a,i)}else if(H(e))_t(a,e.bind(n));else if(X(e))if(N(e))e.forEach(i=>ji(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&_t(a,i,e)}}function Pi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(p=>Ln(l,p,s,!0)),Ln(l,t,s)),X(t)&&i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(s=>Ln(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=To[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const To={data:la,props:ca,emits:ca,methods:sn,computed:sn,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:sn,directives:sn,watch:jo,provide:la,inject:Ro};function la(e,t){return t?e?function(){return ye(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Ro(e,t){return sn(vr(e),vr(t))}function vr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function sn(e,t){return e?ye(Object.create(null),e,t):t}function ca(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:ye(Object.create(null),sa(e),sa(t??{})):t}function jo(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=Ce(e[r],t[r]);return n}function Ii(){return{app:null,config:{isNativeTag:Ka,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Po=0;function Io(e,t){return function(r,a=null){H(r)||(r=ye({},r)),a!=null&&!X(a)&&(a=null);const i=Ii(),s=new WeakSet,o=[];let l=!1;const p=i.app={_uid:Po++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:dl,get config(){return i.config},set config(d){},use(d,...m){return s.has(d)||(d&&H(d.install)?(s.add(d),d.install(p,...m)):H(d)&&(s.add(d),d(p,...m))),p},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),p},component(d,m){return m?(i.components[d]=m,p):i.components[d]},directive(d,m){return m?(i.directives[d]=m,p):i.directives[d]},mount(d,m,g){if(!l){const h=p._ceVNode||Z(r,a);return h.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),e(h,d,g),l=!0,p._container=d,d.__vue_app__=p,Hr(h.component)}},onUnmount(d){o.push(d)},unmount(){l&&(rt(o,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(d,m){return i.provides[d]=m,p},runWithContext(d){const m=Ut;Ut=p;try{return d()}finally{Ut=m}}};return p}}let Ut=null;const Mo=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Te(t)}Modifiers`]||e[`${Lt(t)}Modifiers`];function Oo(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let a=n;const i=t.startsWith("update:"),s=i&&Mo(r,t.slice(7));s&&(s.trim&&(a=n.map(d=>de(d)?d.trim():d)),s.number&&(a=n.map(hs)));let o,l=r[o=zn(t)]||r[o=zn(Te(t))];!l&&i&&(l=r[o=zn(Lt(t))]),l&&rt(l,e,6,a);const p=r[o+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,rt(p,e,6,a)}}const _o=new WeakMap;function Mi(e,t,n=!1){const r=n?_o:t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!H(e)){const l=p=>{const d=Mi(p,t,!0);d&&(o=!0,ye(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(X(e)&&r.set(e,null),null):(N(i)?i.forEach(l=>s[l]=null):ye(s,i),X(e)&&r.set(e,s),s)}function Wn(e,t){return!e||!qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Lt(t))||z(e,t))}function da(e){const{type:t,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:s,attrs:o,emit:l,render:p,renderCache:d,props:m,data:g,setupState:h,ctx:M,inheritAttrs:C}=e,j=On(e);let O,w;try{if(n.shapeFlag&4){const L=a||r,ee=L;O=Ye(p.call(ee,L,d,m,h,g,M)),w=o}else{const L=t;O=Ye(L.length>1?L(m,{attrs:o,slots:s,emit:l}):L(m,null)),w=t.props?o:Lo(o)}}catch(L){mn.length=0,Un(L,e,1),O=Z(Ct)}let _=O;if(w&&C!==!1){const L=Object.keys(w),{shapeFlag:ee}=_;L.length&&ee&7&&(i&&L.some(Vn)&&(w=Do(w,i)),_=Qt(_,w,!1,!0))}return n.dirs&&(_=Qt(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&qr(_,n.transition),O=_,On(j),O}const Lo=e=>{let t;for(const n in e)(n==="class"||n==="style"||qn(n))&&((t||(t={}))[n]=e[n]);return t},Do=(e,t)=>{const n={};for(const r in e)(!Vn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Jo(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,p=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ua(r,s,p):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(Oi(s,r,g)&&!Wn(p,g))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?ua(r,s,p):!0:!!s;return!1}function ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(Oi(t,e,i)&&!Wn(n,i))return!0}return!1}function Oi(e,t,n){const r=e[n],a=t[n];return n==="style"&&X(r)&&X(a)?!jr(r,a):r!==a}function Bo({vnode:e,parent:t,suspense:n},r){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.suspense.vnode.el=a.el=r,e=a),a===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const _i={},Li=()=>Object.create(_i),Di=e=>Object.getPrototypeOf(e)===_i;function qo(e,t,n,r=!1){const a={},i=Li();e.propsDefaults=Object.create(null),Ji(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:gi(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Vo(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=$(a),[l]=e.propsOptions;let p=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Wn(e.emitsOptions,g))continue;const h=t[g];if(l)if(z(i,g))h!==i[g]&&(i[g]=h,p=!0);else{const M=Te(g);a[M]=br(l,o,M,h,e,!1)}else h!==i[g]&&(i[g]=h,p=!0)}}}else{Ji(e,t,a,i)&&(p=!0);let d;for(const m in o)(!t||!z(t,m)&&((d=Lt(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=br(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!z(t,m))&&(delete i[m],p=!0)}p&&ct(e.attrs,"set","")}function Ji(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(on(l))continue;const p=t[l];let d;a&&z(a,d=Te(l))?!i||!i.includes(d)?n[d]=p:(o||(o={}))[d]=p:Wn(e.emitsOptions,l)||(!(l in r)||p!==r[l])&&(r[l]=p,s=!0)}if(i){const l=$(n),p=o||ae;for(let d=0;d<i.length;d++){const m=i[d];n[m]=br(a,l,m,p[m],e,!z(p,m))}}return s}function br(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=z(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&H(l)){const{propsDefaults:p}=a;if(n in p)r=p[n];else{const d=An(a);r=p[n]=l.call(null,t),d()}}else r=l;a.ce&&a.ce._setProp(n,r)}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Lt(n))&&(r=!0))}return r}const Fo=new WeakMap;function Bi(e,t,n=!1){const r=n?Fo:t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!H(e)){const d=m=>{l=!0;const[g,h]=Bi(m,t,!0);ye(s,g),h&&o.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return X(e)&&r.set(e,Nt),Nt;if(N(i))for(let d=0;d<i.length;d++){const m=Te(i[d]);pa(m)&&(s[m]=ae)}else if(i)for(const d in i){const m=Te(d);if(pa(m)){const g=i[d],h=s[m]=N(g)||H(g)?{type:g}:ye({},g),M=h.type;let C=!1,j=!0;if(N(M))for(let O=0;O<M.length;++O){const w=M[O],_=H(w)&&w.name;if(_==="Boolean"){C=!0;break}else _==="String"&&(j=!1)}else C=H(M)&&M.name==="Boolean";h[0]=C,h[1]=j,(C||z(h,"default"))&&o.push(m)}}const p=[s,o];return X(e)&&r.set(e,p),p}function pa(e){return e[0]!=="$"&&!on(e)}const Vr=e=>e==="_"||e==="_ctx"||e==="$stable",Fr=e=>N(e)?e.map(Ye):[Ye(e)],No=(e,t,n)=>{if(t._n)return t;const r=pe((...a)=>Fr(t(...a)),n);return r._c=!1,r},qi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Vr(a))continue;const i=e[a];if(H(i))t[a]=No(a,i,r);else if(i!=null){const s=Fr(i);t[a]=()=>s}}},Vi=(e,t)=>{const n=Fr(t);e.slots.default=()=>n},Fi=(e,t,n)=>{for(const r in t)(n||!Vr(r))&&(e[r]=t[r])},Ho=(e,t,n)=>{const r=e.slots=Li();if(e.vnode.shapeFlag&32){const a=t._;a?(Fi(r,t,n),n&&Xa(r,"_",a,!0)):qi(t,r)}else t&&Vi(e,t)},Go=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=ae;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:Fi(a,t,n):(i=!t.$stable,qi(t,a)),s=t}else t&&(Vi(e,t),s={default:1});if(i)for(const o in a)!Vr(o)&&s[o]==null&&delete a[o]},je=$o;function Uo(e){return Ko(e)}function Ko(e,t){const n=Hn();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:p,setElementText:d,parentNode:m,nextSibling:g,setScopeId:h=et,insertStaticContent:M}=e,C=(c,u,f,v=null,S=null,b=null,T=void 0,E=null,x=!!u.dynamicChildren)=>{if(c===u)return;c&&!rn(c,u)&&(v=y(c),Re(c,S,b,!0),c=null),u.patchFlag===-2&&(x=!1,u.dynamicChildren=null);const{type:A,ref:q,shapeFlag:P}=u;switch(A){case Qn:j(c,u,f,v);break;case Ct:O(c,u,f,v);break;case ar:c==null&&w(u,f,v,T);break;case ke:Et(c,u,f,v,S,b,T,E,x);break;default:P&1?ee(c,u,f,v,S,b,T,E,x):P&6?Ge(c,u,f,v,S,b,T,E,x):(P&64||P&128)&&A.process(c,u,f,v,S,b,T,E,x,D)}q!=null&&S?dn(q,c&&c.ref,b,u||c,!u):q==null&&c&&c.ref!=null&&dn(c.ref,null,b,c,!0)},j=(c,u,f,v)=>{if(c==null)r(u.el=o(u.children),f,v);else{const S=u.el=c.el;u.children!==c.children&&p(S,u.children)}},O=(c,u,f,v)=>{c==null?r(u.el=l(u.children||""),f,v):u.el=c.el},w=(c,u,f,v)=>{[c.el,c.anchor]=M(c.children,u,f,v,c.el,c.anchor)},_=({el:c,anchor:u},f,v)=>{let S;for(;c&&c!==u;)S=g(c),r(c,f,v),c=S;r(u,f,v)},L=({el:c,anchor:u})=>{let f;for(;c&&c!==u;)f=g(c),a(c),c=f;a(u)},ee=(c,u,f,v,S,b,T,E,x)=>{if(u.type==="svg"?T="svg":u.type==="math"&&(T="mathml"),c==null)ge(u,f,v,S,b,T,E,x);else{const A=c.el&&c.el._isVueCE?c.el:null;try{A&&A._beginPatch(),gt(c,u,S,b,T,E,x)}finally{A&&A._endPatch()}}},ge=(c,u,f,v,S,b,T,E)=>{let x,A;const{props:q,shapeFlag:P,transition:J,dirs:F}=c;if(x=c.el=s(c.type,b,q&&q.is,q),P&8?d(x,c.children):P&16&&Ne(c.children,x,null,v,S,rr(c,b),T,E),F&&Rt(c,null,v,"created"),se(x,c,c.scopeId,T,v),q){for(const te in q)te!=="value"&&!on(te)&&i(x,te,null,q[te],b,v);"value"in q&&i(x,"value",null,q.value,b),(A=q.onVnodeBeforeMount)&&$e(A,v,c)}F&&Rt(c,null,v,"beforeMount");const K=Wo(S,J);K&&J.beforeEnter(x),r(x,u,f),((A=q&&q.onVnodeMounted)||K||F)&&je(()=>{try{A&&$e(A,v,c),K&&J.enter(x),F&&Rt(c,null,v,"mounted")}finally{}},S)},se=(c,u,f,v,S)=>{if(f&&h(c,f),v)for(let b=0;b<v.length;b++)h(c,v[b]);if(S){let b=S.subTree;if(u===b||Ui(b.type)&&(b.ssContent===u||b.ssFallback===u)){const T=S.vnode;se(c,T,T.scopeId,T.slotScopeIds,S.parent)}}},Ne=(c,u,f,v,S,b,T,E,x=0)=>{for(let A=x;A<c.length;A++){const q=c[A]=E?lt(c[A]):Ye(c[A]);C(null,q,u,f,v,S,b,T,E)}},gt=(c,u,f,v,S,b,T)=>{const E=u.el=c.el;let{patchFlag:x,dynamicChildren:A,dirs:q}=u;x|=c.patchFlag&16;const P=c.props||ae,J=u.props||ae;let F;if(f&&jt(f,!1),(F=J.onVnodeBeforeUpdate)&&$e(F,f,u,c),q&&Rt(u,c,f,"beforeUpdate"),f&&jt(f,!0),(P.innerHTML&&J.innerHTML==null||P.textContent&&J.textContent==null)&&d(E,""),A?He(c.dynamicChildren,A,E,f,v,rr(u,S),b):T||W(c,u,E,null,f,v,rr(u,S),b,!1),x>0){if(x&16)ht(E,P,J,f,S);else if(x&2&&P.class!==J.class&&i(E,"class",null,J.class,S),x&4&&i(E,"style",P.style,J.style,S),x&8){const K=u.dynamicProps;for(let te=0;te<K.length;te++){const ne=K[te],ce=P[ne],he=J[ne];(he!==ce||ne==="value")&&i(E,ne,ce,he,S,f)}}x&1&&c.children!==u.children&&d(E,u.children)}else!T&&A==null&&ht(E,P,J,f,S);((F=J.onVnodeUpdated)||q)&&je(()=>{F&&$e(F,f,u,c),q&&Rt(u,c,f,"updated")},v)},He=(c,u,f,v,S,b,T)=>{for(let E=0;E<u.length;E++){const x=c[E],A=u[E],q=x.el&&(x.type===ke||!rn(x,A)||x.shapeFlag&198)?m(x.el):f;C(x,A,q,null,v,S,b,T,!0)}},ht=(c,u,f,v,S)=>{if(u!==f){if(u!==ae)for(const b in u)!on(b)&&!(b in f)&&i(c,b,u[b],null,S,v);for(const b in f){if(on(b))continue;const T=f[b],E=u[b];T!==E&&b!=="value"&&i(c,b,E,T,S,v)}"value"in f&&i(c,"value",u.value,f.value,S)}},Et=(c,u,f,v,S,b,T,E,x)=>{const A=u.el=c?c.el:o(""),q=u.anchor=c?c.anchor:o("");let{patchFlag:P,dynamicChildren:J,slotScopeIds:F}=u;F&&(E=E?E.concat(F):F),c==null?(r(A,f,v),r(q,f,v),Ne(u.children||[],f,q,S,b,T,E,x)):P>0&&P&64&&J&&c.dynamicChildren&&c.dynamicChildren.length===J.length?(He(c.dynamicChildren,J,f,S,b,T,E),(u.key!=null||S&&u===S.subTree)&&Ni(c,u,!0)):W(c,u,f,q,S,b,T,E,x)},Ge=(c,u,f,v,S,b,T,E,x)=>{u.slotScopeIds=E,c==null?u.shapeFlag&512?S.ctx.activate(u,f,v,T,x):en(u,f,v,S,b,T,x):Dt(c,u,x)},en=(c,u,f,v,S,b,T)=>{const E=c.component=nl(c,v,S);if(Ei(c)&&(E.ctx.renderer=D),al(E,!1,T),E.asyncDep){if(S&&S.registerDep(E,me,T),!c.el){const x=E.subTree=Z(Ct);O(null,x,u,f),c.placeholder=x.el}}else me(E,c,u,f,S,b,T)},Dt=(c,u,f)=>{const v=u.component=c.component;if(Jo(c,u,f))if(v.asyncDep&&!v.asyncResolved){Y(v,u,f);return}else v.next=u,v.update();else u.el=c.el,v.vnode=u},me=(c,u,f,v,S,b,T)=>{const E=()=>{if(c.isMounted){let{next:P,bu:J,u:F,parent:K,vnode:te}=c;{const We=Hi(c);if(We){P&&(P.el=te.el,Y(c,P,T)),We.asyncDep.then(()=>{je(()=>{c.isUnmounted||A()},S)});return}}let ne=P,ce;jt(c,!1),P?(P.el=te.el,Y(c,P,T)):P=te,J&&Xn(J),(ce=P.props&&P.props.onVnodeBeforeUpdate)&&$e(ce,K,P,te),jt(c,!0);const he=da(c),Ke=c.subTree;c.subTree=he,C(Ke,he,m(Ke.el),y(Ke),c,S,b),P.el=he.el,ne===null&&Bo(c,he.el),F&&je(F,S),(ce=P.props&&P.props.onVnodeUpdated)&&je(()=>$e(ce,K,P,te),S)}else{let P;const{el:J,props:F}=u,{bm:K,m:te,parent:ne,root:ce,type:he}=c,Ke=un(u);jt(c,!1),K&&Xn(K),!Ke&&(P=F&&F.onVnodeBeforeMount)&&$e(P,ne,u),jt(c,!0);{ce.ce&&ce.ce._hasShadowRoot()&&ce.ce._injectChildStyle(he,c.parent?c.parent.type:void 0);const We=c.subTree=da(c);C(null,We,f,v,c,S,b),u.el=We.el}if(te&&je(te,S),!Ke&&(P=F&&F.onVnodeMounted)){const We=u;je(()=>$e(P,ne,We),S)}(u.shapeFlag&256||ne&&un(ne.vnode)&&ne.vnode.shapeFlag&256)&&c.a&&je(c.a,S),c.isMounted=!0,u=f=v=null}};c.scope.on();const x=c.effect=new ti(E);c.scope.off();const A=c.update=x.run.bind(x),q=c.job=x.runIfDirty.bind(x);q.i=c,q.id=c.uid,x.scheduler=()=>Jr(q),jt(c,!0),A()},Y=(c,u,f)=>{u.component=c;const v=c.vnode.props;c.vnode=u,c.next=null,Vo(c,u.props,v,f),Go(c,u.children,f),ut(),na(c),pt()},W=(c,u,f,v,S,b,T,E,x=!1)=>{const A=c&&c.children,q=c?c.shapeFlag:0,P=u.children,{patchFlag:J,shapeFlag:F}=u;if(J>0){if(J&128){kt(A,P,f,v,S,b,T,E,x);return}else if(J&256){at(A,P,f,v,S,b,T,E,x);return}}F&8?(q&16&&Le(A,S,b),P!==A&&d(f,P)):q&16?F&16?kt(A,P,f,v,S,b,T,E,x):Le(A,S,b,!0):(q&8&&d(f,""),F&16&&Ne(P,f,v,S,b,T,E,x))},at=(c,u,f,v,S,b,T,E,x)=>{c=c||Nt,u=u||Nt;const A=c.length,q=u.length,P=Math.min(A,q);let J;for(J=0;J<P;J++){const F=u[J]=x?lt(u[J]):Ye(u[J]);C(c[J],F,f,null,S,b,T,E,x)}A>q?Le(c,S,b,!0,!1,P):Ne(u,f,v,S,b,T,E,x,P)},kt=(c,u,f,v,S,b,T,E,x)=>{let A=0;const q=u.length;let P=c.length-1,J=q-1;for(;A<=P&&A<=J;){const F=c[A],K=u[A]=x?lt(u[A]):Ye(u[A]);if(rn(F,K))C(F,K,f,null,S,b,T,E,x);else break;A++}for(;A<=P&&A<=J;){const F=c[P],K=u[J]=x?lt(u[J]):Ye(u[J]);if(rn(F,K))C(F,K,f,null,S,b,T,E,x);else break;P--,J--}if(A>P){if(A<=J){const F=J+1,K=F<q?u[F].el:v;for(;A<=J;)C(null,u[A]=x?lt(u[A]):Ye(u[A]),f,K,S,b,T,E,x),A++}}else if(A>J)for(;A<=P;)Re(c[A],S,b,!0),A++;else{const F=A,K=A,te=new Map;for(A=K;A<=J;A++){const Ie=u[A]=x?lt(u[A]):Ye(u[A]);Ie.key!=null&&te.set(Ie.key,A)}let ne,ce=0;const he=J-K+1;let Ke=!1,We=0;const tn=new Array(he);for(A=0;A<he;A++)tn[A]=0;for(A=F;A<=P;A++){const Ie=c[A];if(ce>=he){Re(Ie,S,b,!0);continue}let Qe;if(Ie.key!=null)Qe=te.get(Ie.key);else for(ne=K;ne<=J;ne++)if(tn[ne-K]===0&&rn(Ie,u[ne])){Qe=ne;break}Qe===void 0?Re(Ie,S,b,!0):(tn[Qe-K]=A+1,Qe>=We?We=Qe:Ke=!0,C(Ie,u[Qe],f,null,S,b,T,E,x),ce++)}const $r=Ke?Qo(tn):Nt;for(ne=$r.length-1,A=he-1;A>=0;A--){const Ie=K+A,Qe=u[Ie],zr=u[Ie+1],Xr=Ie+1<q?zr.el||Gi(zr):v;tn[A]===0?C(null,Qe,f,Xr,S,b,T,E,x):Ke&&(ne<0||A!==$r[ne]?Ue(Qe,f,Xr,2):ne--)}}},Ue=(c,u,f,v,S=null)=>{const{el:b,type:T,transition:E,children:x,shapeFlag:A}=c;if(A&6){Ue(c.component.subTree,u,f,v);return}if(A&128){c.suspense.move(u,f,v);return}if(A&64){T.move(c,u,f,D);return}if(T===ke){r(b,u,f);for(let P=0;P<x.length;P++)Ue(x[P],u,f,v);r(c.anchor,u,f);return}if(T===ar){_(c,u,f);return}if(v!==2&&A&1&&E)if(v===0)E.beforeEnter(b),r(b,u,f),je(()=>E.enter(b),S);else{const{leave:P,delayLeave:J,afterLeave:F}=E,K=()=>{c.ctx.isUnmounted?a(b):r(b,u,f)},te=()=>{b._isLeaving&&b[oo](!0),P(b,()=>{K(),F&&F()})};J?J(b,K,te):te()}else r(b,u,f)},Re=(c,u,f,v=!1,S=!1)=>{const{type:b,props:T,ref:E,children:x,dynamicChildren:A,shapeFlag:q,patchFlag:P,dirs:J,cacheIndex:F,memo:K}=c;if(P===-2&&(S=!1),E!=null&&(ut(),dn(E,null,f,c,!0),pt()),F!=null&&(u.renderCache[F]=void 0),q&256){u.ctx.deactivate(c);return}const te=q&1&&J,ne=!un(c);let ce;if(ne&&(ce=T&&T.onVnodeBeforeUnmount)&&$e(ce,u,c),q&6)Tt(c.component,f,v);else{if(q&128){c.suspense.unmount(f,v);return}te&&Rt(c,null,u,"beforeUnmount"),q&64?c.type.remove(c,u,f,D,v):A&&!A.hasOnce&&(b!==ke||P>0&&P&64)?Le(A,u,f,!1,!0):(b===ke&&P&384||!S&&q&16)&&Le(x,u,f),v&&Jt(c)}const he=K!=null&&F==null;(ne&&(ce=T&&T.onVnodeUnmounted)||te||he)&&je(()=>{ce&&$e(ce,u,c),te&&Rt(c,null,u,"unmounted"),he&&(c.el=null)},f)},Jt=c=>{const{type:u,el:f,anchor:v,transition:S}=c;if(u===ke){Bt(f,v);return}if(u===ar){L(c);return}const b=()=>{a(f),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(c.shapeFlag&1&&S&&!S.persisted){const{leave:T,delayLeave:E}=S,x=()=>T(f,b);E?E(c.el,b,x):x()}else b()},Bt=(c,u)=>{let f;for(;c!==u;)f=g(c),a(c),c=f;a(u)},Tt=(c,u,f)=>{const{bum:v,scope:S,job:b,subTree:T,um:E,m:x,a:A}=c;ma(x),ma(A),v&&Xn(v),S.stop(),b&&(b.flags|=8,Re(T,c,u,f)),E&&je(E,u),je(()=>{c.isUnmounted=!0},u)},Le=(c,u,f,v=!1,S=!1,b=0)=>{for(let T=b;T<c.length;T++)Re(c[T],u,f,v,S)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=g(c.anchor||c.el),f=u&&u[io];return f?g(f):u};let I=!1;const R=(c,u,f)=>{let v;c==null?u._vnode&&(Re(u._vnode,null,null,!0),v=u._vnode.component):C(u._vnode||null,c,u,null,null,null,f),u._vnode=c,I||(I=!0,na(v),Si(),I=!1)},D={p:C,um:Re,m:Ue,r:Jt,mt:en,mc:Ne,pc:W,pbc:He,n:y,o:e};return{render:R,hydrate:void 0,createApp:Io(R)}}function rr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ni(e,t,n=!1){const r=e.children,a=t.children;if(N(r)&&N(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=lt(a[i]),o.el=s.el),!n&&o.patchFlag!==-2&&Ni(s,o)),o.type===Qn&&(o.patchFlag===-1&&(o=a[i]=lt(o)),o.el=s.el),o.type===Ct&&!o.el&&(o.el=s.el)}}function Qo(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const p=e[r];if(p!==0){if(a=n[n.length-1],e[a]<p){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<p?i=o+1:s=o;p<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function Hi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Hi(t)}function ma(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Gi(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Gi(t.subTree):null}const Ui=e=>e.__isSuspense;function $o(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):eo(e)}const ke=Symbol.for("v-fgt"),Qn=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),ar=Symbol.for("v-stc"),mn=[];let _e=null;function V(e=!1){mn.push(_e=e?null:[])}function zo(){mn.pop(),_e=mn[mn.length-1]||null}let vn=1;function Dn(e,t=!1){vn+=e,e<0&&_e&&t&&(_e.hasOnce=!0)}function Ki(e){return e.dynamicChildren=vn>0?_e||Nt:null,zo(),vn>0&&_e&&_e.push(e),e}function G(e,t,n,r,a,i){return Ki(k(e,t,n,r,a,i,!0))}function dt(e,t,n,r,a){return Ki(Z(e,t,n,r,a,!0))}function Jn(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Wi=({key:e})=>e??null,Rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||Ae(e)||H(e)?{i:Je,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,r=0,a=null,i=e===ke?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&Rn(t),scopeId:Ai,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Je};return o?(Nr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),vn>0&&!s&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const Z=Xo;function Xo(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===wo)&&(e=Ct),Jn(e)){const o=Qt(e,t,!0);return n&&Nr(o,n),vn>0&&!i&&_e&&(o.shapeFlag&6?_e[_e.indexOf(e)]=o:_e.push(o)),o.patchFlag=-2,o}if(cl(e)&&(e=e.__vccOpts),t){t=Yo(t);let{class:o,style:l}=t;o&&!de(o)&&(t.class=ve(o)),X(l)&&(Dr(l)&&!N(l)&&(l=ye({},l)),t.style=Oe(l))}const s=de(e)?1:Ui(e)?128:so(e)?64:X(e)?4:H(e)?2:0;return k(e,t,n,r,a,s,i,!0)}function Yo(e){return e?Dr(e)||Di(e)?ye({},e):e:null}function Qt(e,t,n=!1,r=!1){const{props:a,ref:i,patchFlag:s,children:o,transition:l}=e,p=t?Zo(a||{},t):a,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Wi(p),ref:t&&t.ref?n&&i?N(i)?i.concat(Rn(t)):[i,Rn(t)]:Rn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&qr(d,l.clone(d)),d}function be(e=" ",t=0){return Z(Qn,null,e,t)}function Me(e="",t=!1){return t?(V(),dt(Ct,null,e)):Z(Ct,null,e)}function Ye(e){return e==null||typeof e=="boolean"?Z(Ct):N(e)?Z(ke,null,e.slice()):Jn(e)?lt(e):Z(Qn,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qt(e)}function Nr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Nr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!Di(t)?t._ctx=Je:a===3&&Je&&(Je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),r&64?(n=16,t=[be(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zo(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ve([t.class,r.class]));else if(a==="style")t.style=Oe([t.style,r.style]);else if(qn(a)){const i=t[a],s=r[a];s&&i!==s&&!(N(i)&&i.includes(s))?t[a]=i?[].concat(i,s):s:s==null&&i==null&&!Vn(a)&&(t[a]=s)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){rt(e,t,7,[n,r])}const el=Ii();let tl=0;function nl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||el,i={uid:tl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bi(r,a),emitsOptions:Mi(r,a),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Oo.bind(null,i),e.ce&&e.ce(i),i}let we=null;const rl=()=>we||Je;let Bn,yr;{const e=Hn(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(s=>s(i)):a[0](i)}};Bn=t("__VUE_INSTANCE_SETTERS__",n=>we=n),yr=t("__VUE_SSR_SETTERS__",n=>bn=n)}const An=e=>{const t=we;return Bn(e),e.scope.on(),()=>{e.scope.off(),Bn(t)}},fa=()=>{we&&we.scope.off(),Bn(null)};function Qi(e){return e.vnode.shapeFlag&4}let bn=!1;function al(e,t=!1,n=!1){t&&yr(t);const{props:r,children:a}=e.vnode,i=Qi(e);qo(e,r,i,t),Ho(e,a,n||t);const s=i?il(e,t):void 0;return t&&yr(!1),s}function il(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Co);const{setup:r}=n;if(r){ut();const a=e.setupContext=r.length>1?ol(e):null,i=An(e),s=wn(r,e,0,[e.props,a]),o=Qa(s);if(pt(),i(),(o||e.sp)&&!un(e)&&xi(e),o){if(s.then(fa,fa),t)return s.then(l=>{ga(e,l)}).catch(l=>{Un(l,e,0)});e.asyncDep=s}else ga(e,s)}else $i(e)}function ga(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=ki(t)),$i(e)}function $i(e,t,n){const r=e.type;e.render||(e.render=r.render||et);{const a=An(e);ut();try{xo(e)}finally{pt(),a()}}}const sl={get(e,t){return Se(e,"get",""),e[t]}};function ol(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,sl),slots:e.slots,emit:e.emit,expose:t}}function Hr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ki(Gs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pn)return pn[n](e)},has(t,n){return n in t||n in pn}})):e.proxy}function ll(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function cl(e){return H(e)&&"__vccOpts"in e}const oe=(e,t)=>$s(e,t,bn);function zi(e,t,n){try{Dn(-1);const r=arguments.length;return r===2?X(t)&&!N(t)?Jn(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jn(n)&&(n=[n]),Z(e,t,n))}finally{Dn(1)}}const dl="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sr;const ha=typeof window<"u"&&window.trustedTypes;if(ha)try{Sr=ha.createPolicy("vue",{createHTML:e=>e})}catch{}const Xi=Sr?e=>Sr.createHTML(e):e=>e,ul="http://www.w3.org/2000/svg",pl="http://www.w3.org/1998/Math/MathML",ot=typeof document<"u"?document:null,ka=ot&&ot.createElement("template"),ml={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?ot.createElementNS(ul,e):t==="mathml"?ot.createElementNS(pl,e):n?ot.createElement(e,{is:n}):ot.createElement(e);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ka.innerHTML=Xi(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=ka.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},fl=Symbol("_vtc");function gl(e,t,n){const r=e[fl];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const va=Symbol("_vod"),hl=Symbol("_vsh"),kl=Symbol(""),vl=/(?:^|;)\s*display\s*:/;function bl(e,t,n){const r=e.style,a=de(n);let i=!1;if(n&&!a){if(t)if(de(t))for(const s of t.split(";")){const o=s.slice(0,s.indexOf(":")).trim();n[o]==null&&jn(r,o,"")}else for(const s in t)n[s]==null&&jn(r,s,"");for(const s in n)s==="display"&&(i=!0),jn(r,s,n[s])}else if(a){if(t!==n){const s=r[kl];s&&(n+=";"+s),r.cssText=n,i=vl.test(n)}}else t&&e.removeAttribute("style");va in e&&(e[va]=i?r.display:"",e[hl]&&(r.display="none"))}const ba=/\s*!important$/;function jn(e,t,n){if(N(n))n.forEach(r=>jn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yl(e,t);ba.test(n)?e.setProperty(Lt(r),n.replace(ba,""),"important"):e[r]=n}}const ya=["Webkit","Moz","ms"],ir={};function yl(e,t){const n=ir[t];if(n)return n;let r=Te(t);if(r!=="filter"&&r in e)return ir[t]=r;r=Nn(r);for(let a=0;a<ya.length;a++){const i=ya[a]+r;if(i in e)return ir[t]=i}return t}const Sa="http://www.w3.org/1999/xlink";function wa(e,t,n,r,a,i=ws(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Sa,t.slice(6,t.length)):e.setAttributeNS(Sa,t,n):n==null||i&&!Ya(n)?e.removeAttribute(t):e.setAttribute(t,i?"":nt(n)?String(n):n)}function Aa(e,t,n,r,a){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Ya(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(a||t)}function Sl(e,t,n,r){e.addEventListener(t,n,r)}function wl(e,t,n,r){e.removeEventListener(t,n,r)}const Ca=Symbol("_vei");function Al(e,t,n,r,a=null){const i=e[Ca]||(e[Ca]={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Cl(t);if(r){const p=i[t]=Tl(r,a);Sl(e,o,p,l)}else s&&(wl(e,o,s,l),i[t]=void 0)}}const xa=/(?:Once|Passive|Capture)$/;function Cl(e){let t;if(xa.test(e)){t={};let r;for(;r=e.match(xa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Lt(e.slice(2)),t]}let sr=0;const xl=Promise.resolve(),El=()=>sr||(xl.then(()=>sr=0),sr=Date.now());function Tl(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rt(Rl(r,n.value),t,5,[r])};return n.value=e,n.attached=El(),n}function Rl(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ea=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jl=(e,t,n,r,a,i)=>{const s=a==="svg";t==="class"?gl(e,r,s):t==="style"?bl(e,n,r):qn(t)?Vn(t)||Al(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pl(e,t,r,s))?(Aa(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&wa(e,t,r,s,i,t!=="value")):e._isVueCE&&(Il(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!de(r)))?Aa(e,Te(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wa(e,t,r,s))};function Pl(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ea(t)&&H(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Ea(t)&&de(n)?!1:t in e}function Il(e,t){const n=e._def.props;if(!n)return!1;const r=Te(t);return Array.isArray(n)?n.some(a=>Te(a)===r):Object.keys(n).some(a=>Te(a)===r)}const Ml=ye({patchProp:jl},ml);let Ta;function Ol(){return Ta||(Ta=Uo(Ml))}const _l=(...e)=>{const t=Ol().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Dl(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const s=n(a,!1,Ll(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Ll(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Dl(e){return de(e)?document.querySelector(e):e}const Yi="java-a11y";function Jl(){try{return JSON.parse(localStorage.getItem(Yi)||"{}")}catch{return{}}}const fe=Yt({fontSize:18,lineHeight:1.8,dyslexicFont:!1,focusMode:!1,...Jl()});_t(fe,()=>{localStorage.setItem(Yi,JSON.stringify({...fe}))},{deep:!0});const Bl={class:"header-inner"},ql={class:"a11y-controls"},Vl=["aria-expanded"],Fl=Fe({__name:"AppHeader",setup(e){const t=At(!1);function n(a){fe.fontSize=Math.min(24,Math.max(14,fe.fontSize+a))}function r(){const a=[1.6,1.8,2.1],i=a.indexOf(fe.lineHeight);fe.lineHeight=a[(i+1)%a.length]}return(a,i)=>{const s=Zt("RouterLink");return V(),G("header",{class:ve(["app-header",{"focus-mode":ie(fe).focusMode}])},[k("div",Bl,[Z(s,{to:"/",class:"logo"},{default:pe(()=>[...i[8]||(i[8]=[k("span",{class:"logo-icon"},"☕",-1),k("span",{class:"logo-text"},[be("Java"),k("strong",null,".learn")],-1)])]),_:1}),k("nav",{class:ve(["main-nav",{open:t.value}])},[Z(s,{to:"/",class:"nav-link",onClick:i[0]||(i[0]=o=>t.value=!1)},{default:pe(()=>[...i[9]||(i[9]=[be("Hem",-1)])]),_:1}),Z(s,{to:"/path/grunder",class:"nav-link",onClick:i[1]||(i[1]=o=>t.value=!1)},{default:pe(()=>[...i[10]||(i[10]=[be("Tutorials",-1)])]),_:1}),Z(s,{to:"/intervju",class:"nav-link",onClick:i[2]||(i[2]=o=>t.value=!1)},{default:pe(()=>[...i[11]||(i[11]=[be("Intervjufrågor",-1)])]),_:1})],2),k("div",ql,[k("button",{class:"a11y-btn",title:"Minska textstorlek",onClick:i[3]||(i[3]=o=>n(-1))},"A−"),k("button",{class:"a11y-btn",title:"Öka textstorlek",onClick:i[4]||(i[4]=o=>n(1))},"A+"),k("button",{class:ve(["a11y-btn",{active:ie(fe).lineHeight>1.8}]),title:"Växla radavstånd",onClick:r},"≡",2),k("button",{class:ve(["a11y-btn",{active:ie(fe).dyslexicFont}]),title:"Lästeckensnitt (Lexend)",onClick:i[5]||(i[5]=o=>ie(fe).dyslexicFont=!ie(fe).dyslexicFont)},"Aa",2),k("button",{class:ve(["a11y-btn",{active:ie(fe).focusMode}]),title:"Fokusläge",onClick:i[6]||(i[6]=o=>ie(fe).focusMode=!ie(fe).focusMode)},"◎",2)]),k("button",{class:"hamburger",onClick:i[7]||(i[7]=o=>t.value=!t.value),"aria-expanded":t.value},[...i[12]||(i[12]=[k("span",null,null,-1),k("span",null,null,-1),k("span",null,null,-1)])],8,Vl)])],2)}}}),xt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Nl=xt(Fl,[["__scopeId","data-v-d1c2a9af"]]),Hl=Fe({__name:"App",setup(e){return ro(()=>{const t=document.documentElement;t.style.setProperty("--font-size",fe.fontSize+"px"),t.style.setProperty("--lh",String(fe.lineHeight)),t.style.setProperty("--font-body",fe.dyslexicFont?"'Lexend', sans-serif":"'Inter', sans-serif")}),(t,n)=>{const r=Zt("RouterView");return V(),G(ke,null,[Z(Nl),Z(r)],64)}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ft=typeof document<"u";function Zi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Gl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Zi(e.default)}const Q=Object.assign;function or(e,t){const n={};for(const r in t){const a=t[r];n[r]=Ve(a)?a.map(e):e(a)}return n}const fn=()=>{},Ve=Array.isArray;function Ra(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const es=/#/g,Ul=/&/g,Kl=/\//g,Wl=/=/g,Ql=/\?/g,ts=/\+/g,$l=/%5B/g,zl=/%5D/g,ns=/%5E/g,Xl=/%60/g,rs=/%7B/g,Yl=/%7C/g,as=/%7D/g,Zl=/%20/g;function Gr(e){return e==null?"":encodeURI(""+e).replace(Yl,"|").replace($l,"[").replace(zl,"]")}function ec(e){return Gr(e).replace(rs,"{").replace(as,"}").replace(ns,"^")}function wr(e){return Gr(e).replace(ts,"%2B").replace(Zl,"+").replace(es,"%23").replace(Ul,"%26").replace(Xl,"`").replace(rs,"{").replace(as,"}").replace(ns,"^")}function tc(e){return wr(e).replace(Wl,"%3D")}function nc(e){return Gr(e).replace(es,"%23").replace(Ql,"%3F")}function rc(e){return nc(e).replace(Kl,"%2F")}function yn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ac=/\/$/,ic=e=>e.replace(ac,"");function lr(e,t,n="/"){let r,a={},i="",s="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(r=t.slice(0,l),i=t.slice(l,o>0?o:t.length),a=e(i.slice(1))),o>=0&&(r=r||t.slice(0,o),s=t.slice(o,t.length)),r=cc(r??t,n),{fullPath:r+i+s,path:r,query:a,hash:yn(s)}}function sc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ja(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function oc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&$t(t.matched[r],n.matched[a])&&is(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function $t(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function is(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!lc(e[n],t[n]))return!1;return!0}function lc(e,t){return Ve(e)?Pa(e,t):Ve(t)?Pa(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Pa(e,t){return Ve(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function cc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s).join("/")}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ar=function(e){return e.pop="pop",e.push="push",e}({}),cr=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function dc(e){if(!e)if(Ft){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ic(e)}const uc=/^[^#]+#/;function pc(e,t){return e.replace(uc,"#")+t}function mc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const $n=()=>({left:window.scrollX,top:window.scrollY});function fc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=mc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ia(e,t){return(history.state?history.state.position-t:-1)+e}const Cr=new Map;function gc(e,t){Cr.set(e,t)}function hc(e){const t=Cr.get(e);return Cr.delete(e),t}function kc(e){return typeof e=="string"||e&&typeof e=="object"}function ss(e){return typeof e=="string"||typeof e=="symbol"}let le=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const os=Symbol("");le.MATCHER_NOT_FOUND+"",le.NAVIGATION_GUARD_REDIRECT+"",le.NAVIGATION_ABORTED+"",le.NAVIGATION_CANCELLED+"",le.NAVIGATION_DUPLICATED+"";function zt(e,t){return Q(new Error,{type:e,[os]:!0},t)}function st(e,t){return e instanceof Error&&os in e&&(t==null||!!(e.type&t))}const vc=["params","query","hash"];function bc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of vc)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function yc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const a=n[r].replace(ts," "),i=a.indexOf("="),s=yn(i<0?a:a.slice(0,i)),o=i<0?null:yn(a.slice(i+1));if(s in t){let l=t[s];Ve(l)||(l=t[s]=[l]),l.push(o)}else t[s]=o}return t}function Ma(e){let t="";for(let n in e){const r=e[n];if(n=tc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ve(r)?r.map(a=>a&&wr(a)):[r&&wr(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Sc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ve(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const wc=Symbol(""),Oa=Symbol(""),Ur=Symbol(""),Kr=Symbol(""),xr=Symbol("");function an(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function yt(e,t,n,r,a,i=s=>s()){const s=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,l)=>{const p=g=>{g===!1?l(zt(le.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?l(g):kc(g)?l(zt(le.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(s&&r.enterCallbacks[a]===s&&typeof g=="function"&&s.push(g),o())},d=i(()=>e.call(r&&r.instances[a],t,n,p));let m=Promise.resolve(d);e.length<3&&(m=m.then(p)),m.catch(g=>l(g))})}function dr(e,t,n,r,a=i=>i()){const i=[];for(const s of e)for(const o in s.components){let l=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(Zi(l)){const p=(l.__vccOpts||l)[t];p&&i.push(yt(p,n,r,s,o,a))}else{let p=l();i.push(()=>p.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${o}" at "${s.path}"`);const m=Gl(d)?d.default:d;s.mods[o]=d,s.components[o]=m;const g=(m.__vccOpts||m)[t];return g&&yt(g,n,r,s,o,a)()}))}}return i}function Ac(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const o=t.matched[s];o&&(e.matched.find(p=>$t(p,o))?r.push(o):n.push(o));const l=e.matched[s];l&&(t.matched.find(p=>$t(p,l))||a.push(l))}return[n,r,a]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Cc=()=>location.protocol+"//"+location.host;function ls(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,o=a.slice(s);return o[0]!=="/"&&(o="/"+o),ja(o,"")}return ja(n,e)+r+a}function xc(e,t,n,r){let a=[],i=[],s=null;const o=({state:g})=>{const h=ls(e,location),M=n.value,C=t.value;let j=0;if(g){if(n.value=h,t.value=g,s&&s===M){s=null;return}j=C?g.position-C.position:0}else r(h);a.forEach(O=>{O(n.value,M,{delta:j,type:Ar.pop,direction:j?j>0?cr.forward:cr.back:cr.unknown})})};function l(){s=n.value}function p(g){a.push(g);const h=()=>{const M=a.indexOf(g);M>-1&&a.splice(M,1)};return i.push(h),h}function d(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Q({},g.state,{scroll:$n()}),"")}}function m(){for(const g of i)g();i=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:p,destroy:m}}function _a(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?$n():null}}function Ec(e){const{history:t,location:n}=window,r={value:ls(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,p,d){const m=e.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:Cc()+e+l;try{t[d?"replaceState":"pushState"](p,"",g),a.value=p}catch(h){console.error(h),n[d?"replace":"assign"](g)}}function s(l,p){i(l,Q({},t.state,_a(a.value.back,l,a.value.forward,!0),p,{position:a.value.position}),!0),r.value=l}function o(l,p){const d=Q({},a.value,t.state,{forward:l,scroll:$n()});i(d.current,d,!0),i(l,Q({},_a(r.value,l,null),{position:d.position+1},p),!1),r.value=l}return{location:r,state:a,push:o,replace:s}}function Tc(e){e=dc(e);const t=Ec(e),n=xc(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const a=Q({location:"",base:e,go:r,createHref:pc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}let It=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var ue=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(ue||{});const Rc={type:It.Static,value:""},jc=/[a-zA-Z0-9_]/;function Pc(e){if(!e)return[[]];if(e==="/")return[[Rc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${p}": ${h}`)}let n=ue.Static,r=n;const a=[];let i;function s(){i&&a.push(i),i=[]}let o=0,l,p="",d="";function m(){p&&(n===ue.Static?i.push({type:It.Static,value:p}):n===ue.Param||n===ue.ParamRegExp||n===ue.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),i.push({type:It.Param,value:p,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),p="")}function g(){p+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==ue.ParamRegExp){r=n,n=ue.EscapeNext;continue}switch(n){case ue.Static:l==="/"?(p&&m(),s()):l===":"?(m(),n=ue.Param):g();break;case ue.EscapeNext:g(),n=r;break;case ue.Param:l==="("?n=ue.ParamRegExp:jc.test(l)?g():(m(),n=ue.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case ue.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=ue.ParamRegExpEnd:d+=l;break;case ue.ParamRegExpEnd:m(),n=ue.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,d="";break;default:t("Unknown state");break}}return n===ue.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),m(),s(),a}const La="[^/]+?",Ic={sensitive:!1,strict:!1,start:!0,end:!0};var xe=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(xe||{});const Mc=/[.+*?^${}()[\]/\\]/g;function Oc(e,t){const n=Q({},Ic,t),r=[];let a=n.start?"^":"";const i=[];for(const p of e){const d=p.length?[]:[xe.Root];n.strict&&!p.length&&(a+="/");for(let m=0;m<p.length;m++){const g=p[m];let h=xe.Segment+(n.sensitive?xe.BonusCaseSensitive:0);if(g.type===It.Static)m||(a+="/"),a+=g.value.replace(Mc,"\\$&"),h+=xe.Static;else if(g.type===It.Param){const{value:M,repeatable:C,optional:j,regexp:O}=g;i.push({name:M,repeatable:C,optional:j});const w=O||La;if(w!==La){h+=xe.BonusCustomRegExp;try{`${w}`}catch(L){throw new Error(`Invalid custom RegExp for param "${M}" (${w}): `+L.message)}}let _=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(_=j&&p.length<2?`(?:/${_})`:"/"+_),j&&(_+="?"),a+=_,h+=xe.Dynamic,j&&(h+=xe.BonusOptional),C&&(h+=xe.BonusRepeatable),w===".*"&&(h+=xe.BonusWildcard)}d.push(h)}r.push(d)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=xe.BonusStrict}n.strict||(a+="/?"),n.end?a+="$":n.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const s=new RegExp(a,n.sensitive?"":"i");function o(p){const d=p.match(s),m={};if(!d)return null;for(let g=1;g<d.length;g++){const h=d[g]||"",M=i[g-1];m[M.name]=h&&M.repeatable?h.split("/"):h}return m}function l(p){let d="",m=!1;for(const g of e){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of g)if(h.type===It.Static)d+=h.value;else if(h.type===It.Param){const{value:M,repeatable:C,optional:j}=h,O=M in p?p[M]:"";if(Ve(O)&&!C)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const w=Ve(O)?O.join("/"):O;if(!w)if(j)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${M}"`);d+=w}}return d||"/"}return{re:s,score:r,keys:i,parse:o,stringify:l}}function _c(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===xe.Static+xe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===xe.Static+xe.Segment?1:-1:0}function cs(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=_c(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Da(r))return 1;if(Da(a))return-1}return a.length-r.length}function Da(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lc={strict:!1,end:!0,sensitive:!1};function Dc(e,t,n){const r=Oc(Pc(e.path),n),a=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Jc(e,t){const n=[],r=new Map;t=Ra(Lc,t);function a(m){return r.get(m)}function i(m,g,h){const M=!h,C=Ba(m);C.aliasOf=h&&h.record;const j=Ra(t,m),O=[C];if("alias"in m){const L=typeof m.alias=="string"?[m.alias]:m.alias;for(const ee of L)O.push(Ba(Q({},C,{components:h?h.record.components:C.components,path:ee,aliasOf:h?h.record:C})))}let w,_;for(const L of O){const{path:ee}=L;if(g&&ee[0]!=="/"){const ge=g.record.path,se=ge[ge.length-1]==="/"?"":"/";L.path=g.record.path+(ee&&se+ee)}if(w=Dc(L,g,j),h?h.alias.push(w):(_=_||w,_!==w&&_.alias.push(w),M&&m.name&&!qa(w)&&s(m.name)),ds(w)&&l(w),C.children){const ge=C.children;for(let se=0;se<ge.length;se++)i(ge[se],w,h&&h.children[se])}h=h||w}return _?()=>{s(_)}:fn}function s(m){if(ss(m)){const g=r.get(m);g&&(r.delete(m),n.splice(n.indexOf(g),1),g.children.forEach(s),g.alias.forEach(s))}else{const g=n.indexOf(m);g>-1&&(n.splice(g,1),m.record.name&&r.delete(m.record.name),m.children.forEach(s),m.alias.forEach(s))}}function o(){return n}function l(m){const g=Vc(m,n);n.splice(g,0,m),m.record.name&&!qa(m)&&r.set(m.record.name,m)}function p(m,g){let h,M={},C,j;if("name"in m&&m.name){if(h=r.get(m.name),!h)throw zt(le.MATCHER_NOT_FOUND,{location:m});j=h.record.name,M=Q(Ja(g.params,h.keys.filter(_=>!_.optional).concat(h.parent?h.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),m.params&&Ja(m.params,h.keys.map(_=>_.name))),C=h.stringify(M)}else if(m.path!=null)C=m.path,h=n.find(_=>_.re.test(C)),h&&(M=h.parse(C),j=h.record.name);else{if(h=g.name?r.get(g.name):n.find(_=>_.re.test(g.path)),!h)throw zt(le.MATCHER_NOT_FOUND,{location:m,currentLocation:g});j=h.record.name,M=Q({},g.params,m.params),C=h.stringify(M)}const O=[];let w=h;for(;w;)O.unshift(w.record),w=w.parent;return{name:j,path:C,params:M,matched:O,meta:qc(O)}}e.forEach(m=>i(m));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:p,removeRoute:s,clearRoutes:d,getRoutes:o,getRecordMatcher:a}}function Ja(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ba(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Bc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Bc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function qa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qc(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function Vc(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;cs(e,t[i])<0?r=i:n=i+1}const a=Fc(e);return a&&(r=t.lastIndexOf(a,r-1)),r}function Fc(e){let t=e;for(;t=t.parent;)if(ds(t)&&cs(e,t)===0)return t}function ds({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Va(e){const t=tt(Ur),n=tt(Kr),r=oe(()=>{const l=ie(e.to);return t.resolve(l)}),a=oe(()=>{const{matched:l}=r.value,{length:p}=l,d=l[p-1],m=n.matched;if(!d||!m.length)return-1;const g=m.findIndex($t.bind(null,d));if(g>-1)return g;const h=Fa(l[p-2]);return p>1&&Fa(d)===h&&m[m.length-1].path!==h?m.findIndex($t.bind(null,l[p-2])):g}),i=oe(()=>a.value>-1&&Kc(n.params,r.value.params)),s=oe(()=>a.value>-1&&a.value===n.matched.length-1&&is(n.params,r.value.params));function o(l={}){if(Uc(l)){const p=t[ie(e.replace)?"replace":"push"](ie(e.to)).catch(fn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:s,navigate:o}}function Nc(e){return e.length===1?e[0]:e}const Hc=Fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Va,setup(e,{slots:t}){const n=Yt(Va(e)),{options:r}=tt(Ur),a=oe(()=>({[Na(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Na(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Nc(t.default(n));return e.custom?i:zi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Gc=Hc;function Uc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Kc(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Ve(a)||a.length!==r.length||r.some((i,s)=>i.valueOf()!==a[s].valueOf()))return!1}return!0}function Fa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Na=(e,t,n)=>e??t??n,Wc=Fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=tt(xr),a=oe(()=>e.route||r.value),i=tt(Oa,0),s=oe(()=>{let p=ie(i);const{matched:d}=a.value;let m;for(;(m=d[p])&&!m.components;)p++;return p}),o=oe(()=>a.value.matched[s.value]);Tn(Oa,oe(()=>s.value+1)),Tn(wc,o),Tn(xr,a);const l=At();return _t(()=>[l.value,o.value,e.name],([p,d,m],[g,h,M])=>{d&&(d.instances[m]=p,h&&h!==d&&p&&p===g&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!$t(d,h)||!g)&&(d.enterCallbacks[m]||[]).forEach(C=>C(p))},{flush:"post"}),()=>{const p=a.value,d=e.name,m=o.value,g=m&&m.components[d];if(!g)return Ha(n.default,{Component:g,route:p});const h=m.props[d],M=h?h===!0?p.params:typeof h=="function"?h(p):h:null,j=zi(g,Q({},M,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(m.instances[d]=null)},ref:l}));return Ha(n.default,{Component:j,route:p})||j}}});function Ha(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qc=Wc;function $c(e){const t=Jc(e.routes,e),n=e.parseQuery||yc,r=e.stringifyQuery||Ma,a=e.history,i=an(),s=an(),o=an(),l=Us(vt);let p=vt;Ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=or.bind(null,y=>""+y),m=or.bind(null,rc),g=or.bind(null,yn);function h(y,I){let R,D;return ss(y)?(R=t.getRecordMatcher(y),D=I):D=y,t.addRoute(D,R)}function M(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function C(){return t.getRoutes().map(y=>y.record)}function j(y){return!!t.getRecordMatcher(y)}function O(y,I){if(I=Q({},I||l.value),typeof y=="string"){const f=lr(n,y,I.path),v=t.resolve({path:f.path},I),S=a.createHref(f.fullPath);return Q(f,v,{params:g(v.params),hash:yn(f.hash),redirectedFrom:void 0,href:S})}let R;if(y.path!=null)R=Q({},y,{path:lr(n,y.path,I.path).path});else{const f=Q({},y.params);for(const v in f)f[v]==null&&delete f[v];R=Q({},y,{params:m(f)}),I.params=m(I.params)}const D=t.resolve(R,I),U=y.hash||"";D.params=d(g(D.params));const c=sc(r,Q({},y,{hash:ec(U),path:D.path})),u=a.createHref(c);return Q({fullPath:c,hash:U,query:r===Ma?Sc(y.query):y.query||{}},D,{redirectedFrom:void 0,href:u})}function w(y){return typeof y=="string"?lr(n,y,l.value.path):Q({},y)}function _(y,I){if(p!==y)return zt(le.NAVIGATION_CANCELLED,{from:I,to:y})}function L(y){return se(y)}function ee(y){return L(Q(w(y),{replace:!0}))}function ge(y,I){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:D}=R;let U=typeof D=="function"?D(y,I):D;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=w(U):{path:U},U.params={}),Q({query:y.query,hash:y.hash,params:U.path!=null?{}:y.params},U)}}function se(y,I){const R=p=O(y),D=l.value,U=y.state,c=y.force,u=y.replace===!0,f=ge(R,D);if(f)return se(Q(w(f),{state:typeof f=="object"?Q({},U,f.state):U,force:c,replace:u}),I||R);const v=R;v.redirectedFrom=I;let S;return!c&&oc(r,D,R)&&(S=zt(le.NAVIGATION_DUPLICATED,{to:v,from:D}),Ue(D,D,!0,!1)),(S?Promise.resolve(S):He(v,D)).catch(b=>st(b)?st(b,le.NAVIGATION_GUARD_REDIRECT)?b:kt(b):W(b,v,D)).then(b=>{if(b){if(st(b,le.NAVIGATION_GUARD_REDIRECT))return se(Q({replace:u},w(b.to),{state:typeof b.to=="object"?Q({},U,b.to.state):U,force:c}),I||v)}else b=Et(v,D,!0,u,U);return ht(v,D,b),b})}function Ne(y,I){const R=_(y,I);return R?Promise.reject(R):Promise.resolve()}function gt(y){const I=Bt.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(y):y()}function He(y,I){let R;const[D,U,c]=Ac(y,I);R=dr(D.reverse(),"beforeRouteLeave",y,I);for(const f of D)f.leaveGuards.forEach(v=>{R.push(yt(v,y,I))});const u=Ne.bind(null,y,I);return R.push(u),Le(R).then(()=>{R=[];for(const f of i.list())R.push(yt(f,y,I));return R.push(u),Le(R)}).then(()=>{R=dr(U,"beforeRouteUpdate",y,I);for(const f of U)f.updateGuards.forEach(v=>{R.push(yt(v,y,I))});return R.push(u),Le(R)}).then(()=>{R=[];for(const f of c)if(f.beforeEnter)if(Ve(f.beforeEnter))for(const v of f.beforeEnter)R.push(yt(v,y,I));else R.push(yt(f.beforeEnter,y,I));return R.push(u),Le(R)}).then(()=>(y.matched.forEach(f=>f.enterCallbacks={}),R=dr(c,"beforeRouteEnter",y,I,gt),R.push(u),Le(R))).then(()=>{R=[];for(const f of s.list())R.push(yt(f,y,I));return R.push(u),Le(R)}).catch(f=>st(f,le.NAVIGATION_CANCELLED)?f:Promise.reject(f))}function ht(y,I,R){o.list().forEach(D=>gt(()=>D(y,I,R)))}function Et(y,I,R,D,U){const c=_(y,I);if(c)return c;const u=I===vt,f=Ft?history.state:{};R&&(D||u?a.replace(y.fullPath,Q({scroll:u&&f&&f.scroll},U)):a.push(y.fullPath,U)),l.value=y,Ue(y,I,R,u),kt()}let Ge;function en(){Ge||(Ge=a.listen((y,I,R)=>{if(!Tt.listening)return;const D=O(y),U=ge(D,Tt.currentRoute.value);if(U){se(Q(U,{replace:!0,force:!0}),D).catch(fn);return}p=D;const c=l.value;Ft&&gc(Ia(c.fullPath,R.delta),$n()),He(D,c).catch(u=>st(u,le.NAVIGATION_ABORTED|le.NAVIGATION_CANCELLED)?u:st(u,le.NAVIGATION_GUARD_REDIRECT)?(se(Q(w(u.to),{force:!0}),D).then(f=>{st(f,le.NAVIGATION_ABORTED|le.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Ar.pop&&a.go(-1,!1)}).catch(fn),Promise.reject()):(R.delta&&a.go(-R.delta,!1),W(u,D,c))).then(u=>{u=u||Et(D,c,!1),u&&(R.delta&&!st(u,le.NAVIGATION_CANCELLED)?a.go(-R.delta,!1):R.type===Ar.pop&&st(u,le.NAVIGATION_ABORTED|le.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),ht(D,c,u)}).catch(fn)}))}let Dt=an(),me=an(),Y;function W(y,I,R){kt(y);const D=me.list();return D.length?D.forEach(U=>U(y,I,R)):console.error(y),Promise.reject(y)}function at(){return Y&&l.value!==vt?Promise.resolve():new Promise((y,I)=>{Dt.add([y,I])})}function kt(y){return Y||(Y=!y,en(),Dt.list().forEach(([I,R])=>y?R(y):I()),Dt.reset()),y}function Ue(y,I,R,D){const{scrollBehavior:U}=e;if(!Ft||!U)return Promise.resolve();const c=!R&&hc(Ia(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return bi().then(()=>U(y,I,c)).then(u=>u&&fc(u)).catch(u=>W(u,y,I))}const Re=y=>a.go(y);let Jt;const Bt=new Set,Tt={currentRoute:l,listening:!0,addRoute:h,removeRoute:M,clearRoutes:t.clearRoutes,hasRoute:j,getRoutes:C,resolve:O,options:e,push:L,replace:ee,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:s.add,afterEach:o.add,onError:me.add,isReady:at,install(y){y.component("RouterLink",Gc),y.component("RouterView",Qc),y.config.globalProperties.$router=Tt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ie(l)}),Ft&&!Jt&&l.value===vt&&(Jt=!0,L(a.location).catch(D=>{}));const I={};for(const D in vt)Object.defineProperty(I,D,{get:()=>l.value[D],enumerable:!0});y.provide(Ur,Tt),y.provide(Kr,gi(I)),y.provide(xr,l);const R=y.unmount;Bt.add(y),y.unmount=function(){Bt.delete(y),Bt.size<1&&(p=vt,Ge&&Ge(),Ge=null,l.value=vt,Jt=!1,Y=!1),R()}}};function Le(y){return y.reduce((I,R)=>I.then(()=>gt(R)),Promise.resolve())}return Tt}function Wr(e){return tt(Kr)}const Qr=[{id:"grunder",title:"Java Grunder",subtitle:"Lär dig Java från noll – variabler, loopar, klasser och mer",color:"#4ade80",bgColor:"#052e16",icon:"🌱",level:"beginner",lessons:[{id:"grunder-intro",title:"Välkommen till Java",emoji:"☕",estimatedMinutes:5,level:"beginner",summary:"Lär dig vad Java är, varför det används världen över och skriv ditt första program.",sections:[{type:"text",heading:"Vad är Java?",content:`**Java** är ett av världens mest populära programmeringsspråk. Det skapades av Sun Microsystems 1995 och ägs idag av Oracle.

Java används för att bygga **webbapplikationer**, **Android-appar**, **backend-system**, och mycket mer.

Många stora företag som Amazon, Google, och Netflix använder Java i sina system.`},{type:"info",heading:"Skriv en gång – kör överallt",content:`Java kompileras till **bytekod** som körs av **JVM (Java Virtual Machine)**.

Detta innebär att samma Java-program kan köras på **Windows, Mac och Linux** – utan ändringar. JVM är det som gör Java plattformsoberoende.`},{type:"text",heading:"JDK, JRE och JVM – vad är skillnaden?",content:`• **JDK** (Java Development Kit) – innehåller allt du behöver för att skriva och kompilera Java
• **JRE** (Java Runtime Environment) – miljön som kör färdiga Java-program
• **JVM** (Java Virtual Machine) – motorn som tolkar och kör bytekod

Installera **JDK 21** (Long-Term Support) för att komma igång.`},{type:"code",heading:"Ditt första Java-program",content:`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hej, världen!");
    }
}`,language:"java"},{type:"text",heading:"Kompilera och kör",content:`Spara filen som **HelloWorld.java** – filnamnet måste matcha klassnamnet.

Kompilera med:
\`javac HelloWorld.java\`

Kör programmet med:
\`java HelloWorld\`

Du ser: **Hej, världen!** i terminalen.`},{type:"tip",content:"Använd **IntelliJ IDEA** (gratis Community Edition) eller **VS Code** som editor. De markerar fel direkt och hjälper dig skriva kod snabbare."}]},{id:"grunder-variabler",title:"Variabler och Datatyper",emoji:"📦",estimatedMinutes:8,level:"beginner",summary:"Lär dig hur du lagrar data i variabler och vilka datatyper Java har.",sections:[{type:"text",heading:"Vad är en variabel?",content:`En **variabel** är en namngiven plats i minnet där du kan lagra ett värde.

I Java måste du alltid ange **typen** på variabeln när du skapar den. Typen berättar för Java vad slags data variabeln ska hålla.`},{type:"code",heading:"De 8 primitiva datatyperna",content:`// Heltal
byte  litet   = 127;           // -128 till 127
short mellanstor = 32000;      // -32 768 till 32 767
int   vanligt = 1_000_000;     // mest använd för heltal
long  stort   = 9_000_000_000L; // notera L på slutet

// Decimaltal
float  enkel = 3.14f;   // notera f på slutet
double dubbel = 3.14159; // mest använd för decimaltal

// Tecken och sant/falskt
char    bokstav = 'A';   // ett enda tecken, enkelfnutt
boolean villkor = true;  // true eller false`,language:"java"},{type:"info",heading:"Referenstyper – objekt och strängar",content:`Förutom primitiver finns **referenstyper** – dessa lagrar en referens (adress) till ett objekt i minnet.

Vanligast är **String** för text:
\`String namn = "Anna";\`

Referenstyper kan vara **null** (saknar värde). Primitiver kan aldrig vara null.`},{type:"code",heading:"Variabler i praktiken",content:`public class Variabler {
    public static void main(String[] args) {
        String namn = "Anna";
        int alder = 28;
        double lon = 45_000.50;
        boolean arAnstald = true;

        System.out.println(namn + " är " + alder + " år");
        System.out.println("Lön: " + lon + " kr");
        System.out.println("Anställd: " + arAnstald);
    }
}`,language:"java"},{type:"text",heading:"Typkonvertering (casting)",content:"**Implicit konvertering** sker automatiskt när du konverterar till en större typ:\n`int x = 5; double d = x;` – fungerar utan problem.\n\n**Explicit casting** krävs när du konverterar till en **mindre** typ (risk för datförlust):\n`double pi = 3.14; int heltal = (int) pi;` – ger 3, decimalen klipps bort."},{type:"tip",content:"Använd **int** för heltal och **double** för decimaltal i de flesta fall. Välj **long** bara när du behöver riktigt stora tal."}]},{id:"grunder-kontrollflode",title:"Kontrollflöde: if och switch",emoji:"🔀",estimatedMinutes:8,level:"beginner",summary:"Lär dig hur programmet kan fatta beslut med if/else och switch.",sections:[{type:"text",heading:"Fatta beslut med if/else",content:"Med **if** kan ditt program göra olika saker beroende på ett villkor.\n\nVillkoret måste vara ett **boolean-uttryck** – något som är antingen sant (`true`) eller falskt (`false`)."},{type:"code",heading:"if / else if / else",content:`int poang = 75;

if (poang >= 90) {
    System.out.println("Betyg: A");
} else if (poang >= 70) {
    System.out.println("Betyg: B");
} else if (poang >= 50) {
    System.out.println("Betyg: C");
} else {
    System.out.println("Underkänd");
}
// Skriver ut: Betyg: B`,language:"java"},{type:"text",heading:"Ternär operator – ett kortare alternativ",content:'För enkla if/else kan du använda den **ternära operatorn**:\n`typ variabel = villkor ? värdOmSant : värdOmFalskt;`\n\nExempel:\n`String text = alder >= 18 ? "Vuxen" : "Minderårig";`'},{type:"code",heading:"Switch-uttryck (Java 14+)",content:`String dag = "MÅNDAG";

String typ = switch (dag) {
    case "MÅNDAG", "TISDAG", "ONSDAG", "TORSDAG", "FREDAG" -> "Vardag";
    case "LÖRDAG", "SÖNDAG" -> "Helg";
    default -> "Okänd dag";
};

System.out.println(dag + " är en " + typ);
// Skriver ut: MÅNDAG är en Vardag`,language:"java"},{type:"tip",content:"Använd det moderna **switch-uttrycket** (med `->`) istället för det gamla switch-blocket. Det är kortare, tydligare och undviker glömda `break`-satser."}]},{id:"grunder-loopar",title:"Loopar",emoji:"🔄",estimatedMinutes:8,level:"beginner",summary:"Lär dig upprepa kod med for, while, do-while och for-each.",sections:[{type:"text",heading:"Varför behöver vi loopar?",content:`En **loop** låter dig upprepa ett kodblock ett antal gånger – utan att skriva samma kod om och om igen.

Java har fyra typer av loopar: **for**, **while**, **do-while** och **for-each**.`},{type:"code",heading:"for-loopen – när du vet antal upprepningar",content:`// Räkna från 1 till 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Steg " + i);
}

// Iterera över en array
int[] tal = {10, 20, 30, 40};
for (int i = 0; i < tal.length; i++) {
    System.out.println(tal[i]);
}`,language:"java"},{type:"code",heading:"while och do-while",content:`// while – kör om villkoret är sant
int n = 1;
while (n <= 3) {
    System.out.println("n = " + n);
    n++;
}

// do-while – kör ALLTID minst en gång
int x = 10;
do {
    System.out.println("x = " + x);
    x++;
} while (x < 5);
// Skriver ut x = 10 trots att villkoret är falskt`,language:"java"},{type:"code",heading:"for-each – enklaste sättet att iterera",content:`String[] frukter = {"äpple", "banan", "körsbär"};

for (String frukt : frukter) {
    System.out.println(frukt);
}
// äpple
// banan
// körsbär`,language:"java"},{type:"text",heading:"break och continue",content:`**break** – avslutar loopen omedelbart.
**continue** – hoppar till nästa iteration, hoppar över resten av kroppen.

Använd dem sparsamt – för många break/continue gör koden svår att följa.`},{type:"warning",content:"Glöm inte att uppdatera loop-variabeln i en while-loop! Annars får du en **oändlig loop** som fryser programmet."}]},{id:"grunder-metoder",title:"Metoder",emoji:"🔧",estimatedMinutes:8,level:"beginner",summary:"Lär dig skapa återanvändbara kodblock med metoder, parametrar och returvärden.",sections:[{type:"text",heading:"Vad är en metod?",content:`En **metod** är ett namngivet kodblock du kan anropa när som helst.

Metoder gör koden **återanvändbar** och **lättläst** – istället för att skriva samma kod flera gånger, skriver du den en gång i en metod och anropar den.`},{type:"code",heading:"Definiera och anropa metoder",content:`public class Miniräknare {

    // Metod med parametrar och returvärde
    static int addera(int a, int b) {
        return a + b;
    }

    // Metod utan returvärde (void)
    static void halsa(String namn) {
        System.out.println("Hej, " + namn + "!");
    }

    public static void main(String[] args) {
        int summa = addera(3, 7);
        System.out.println("3 + 7 = " + summa); // 10

        halsa("Anna");  // Hej, Anna!
        halsa("Björn"); // Hej, Björn!
    }
}`,language:"java"},{type:"info",heading:"Metod-överlagring (overloading)",content:`Du kan ha **flera metoder med samma namn** så länge de har olika parametrar. Java väljer rätt metod baserat på vad du skickar in.

Detta kallas **method overloading** och är ett exempel på kompileringstids-polymorfism.`},{type:"code",heading:"Exempel på overloading",content:`static double area(double radie) {
    return Math.PI * radie * radie; // Cirkelarea
}

static double area(double bredd, double hojd) {
    return bredd * hojd; // Rektangelarea
}

// Java väljer rätt metod automatiskt:
System.out.println(area(5.0));       // Cirkel
System.out.println(area(4.0, 6.0)); // Rektangel`,language:"java"},{type:"tip",content:"Håll metoder **korta och fokuserade** – en metod ska göra en sak. Om en metod blir längre än ~15 rader, fundera på att dela upp den."}]},{id:"grunder-klasser",title:"Klasser och Objekt",emoji:"🏗️",estimatedMinutes:10,level:"beginner",summary:"Lär dig grunderna i objektorienterad programmering – klasser, objekt och konstruktorer.",sections:[{type:"text",heading:"Klasser och objekt",content:`En **klass** är en mall eller ritning. Ett **objekt** är en konkret instans av den mallen.

Tänk på det så här: **Klass** = ritning för ett hus. **Objekt** = det faktiska huset byggt från ritningen.

En klass samlar **data (fält)** och **beteende (metoder)** på ett ställe.`},{type:"code",heading:"Definiera en klass",content:`public class Person {
    // Fält – varje Person har ett namn och en ålder
    String namn;
    int alder;

    // Konstruktor – körs när ett objekt skapas
    public Person(String namn, int alder) {
        this.namn = namn;   // this.namn = fältet, namn = parametern
        this.alder = alder;
    }

    // Metod
    public void halsa() {
        System.out.println("Hej! Jag heter " + namn + " och är " + alder + " år.");
    }
}`,language:"java"},{type:"code",heading:"Skapa och använda objekt",content:`public class Main {
    public static void main(String[] args) {
        // Skapa objekt med new
        Person p1 = new Person("Anna", 28);
        Person p2 = new Person("Björn", 35);

        // Anropa metoder
        p1.halsa(); // Hej! Jag heter Anna och är 28 år.
        p2.halsa(); // Hej! Jag heter Björn och är 35 år.

        // Kom åt fält direkt (undvik detta – se tips)
        System.out.println(p1.namn);
    }
}`,language:"java"},{type:"info",heading:"Inkapsling – gör fält privata",content:"Det är god praxis att göra fält **private** och använda **getters/setters** för att komma åt dem.\n\nDetta kallas **inkapsling** – du kontrollerar hur data läses och ändras.\n\n`private String namn;`\n`public String getNamn() { return namn; }`\n`public void setNamn(String namn) { this.namn = namn; }`"},{type:"tip",content:"I moderna Java-projekt används ofta **Lombok** som genererar getters, setters och konstruktorer automatiskt med annotationer som `@Data` och `@AllArgsConstructor`."}]},{id:"grunder-arv",title:"Arv och Interface",emoji:"🧬",estimatedMinutes:10,level:"beginner",summary:"Förstå hur klasser kan ärva egenskaper och hur interface definierar kontrakt.",sections:[{type:"text",heading:"Arv med extends",content:`**Arv** låter en klass ärva fält och metoder från en annan klass.

Klassen som ärver kallas **subklass** (eller barnklass). Klassen som ärvs från kallas **superklass** (eller föräldraklass).

I Java används nyckelordet **extends** för arv.`},{type:"code",heading:"Arv i praktiken",content:`// Superklass
public class Djur {
    String namn;

    public Djur(String namn) {
        this.namn = namn;
    }

    public void lat() {
        System.out.println(namn + " låter...");
    }
}

// Subklass – ärver från Djur
public class Hund extends Djur {

    public Hund(String namn) {
        super(namn); // Anropar Djurs konstruktor
    }

    @Override // Överskriver förälderns metod
    public void lat() {
        System.out.println(namn + " skäller: Vov!");
    }
}`,language:"java"},{type:"text",heading:"Interface – definiera ett kontrakt",content:`Ett **interface** definierar **vad** en klass ska kunna göra – men inte **hur**.

En klass kan **implementera** flera interface (men bara ärva från en klass).

Sedan Java 8 kan interface ha \`default\`-metoder med implementation.`},{type:"code",heading:"Interface i praktiken",content:`public interface Springbar {
    void spring(int hastighet); // Abstrakt – ingen implementation
}

public interface Sumbar {
    void sum(double meter);
}

// Klassen implementerar BÅDA interface
public class Triathlet implements Springbar, Sumbar {

    @Override
    public void spring(int hastighet) {
        System.out.println("Springer " + hastighet + " km/h");
    }

    @Override
    public void sum(double meter) {
        System.out.println("Simmar " + meter + " meter");
    }
}`,language:"java"},{type:"info",heading:"Abstrakt klass vs Interface",content:`**Abstrakt klass:** kan ha fält, konstruktorer och konkreta metoder. En klass kan bara ärva från **en** abstrakt klass.

**Interface:** inget tillstånd (inga fält), bara kontrakt. En klass kan implementera **många** interface.

Tumregel: välj **interface** när du definierar ett kontrakt. Välj **abstrakt klass** när du delar konkret implementation.`}]}]},{id:"mellanniva",title:"Java Mellannivå",subtitle:"Kollektioner, undantag, lambda, streams och moderna Java-funktioner",color:"#60a5fa",bgColor:"#0c1a2e",icon:"📖",level:"intermediate",lessons:[{id:"mellanniva-kollektioner",title:"Kollektioner",emoji:"📚",estimatedMinutes:10,level:"intermediate",summary:"Lär dig använda List, Set och Map – Javas inbyggda datastrukturer.",sections:[{type:"text",heading:"Java Collections Framework",content:`Javas **Collections Framework** är ett bibliotek med färdiga datastrukturer.

De viktigaste gränssnitten:
• **List** – ordnad sekvens, tillåter dubbletter
• **Set** – inga dubbletter
• **Map** – nyckel-värde-par`},{type:"code",heading:"ArrayList – dynamisk lista",content:`import java.util.ArrayList;
import java.util.List;

List<String> frukter = new ArrayList<>();
frukter.add("äpple");
frukter.add("banan");
frukter.add("körsbär");

System.out.println(frukter.size());    // 3
System.out.println(frukter.get(0));    // äpple
frukter.remove("banan");
System.out.println(frukter);           // [äpple, körsbär]

// Iterera
for (String frukt : frukter) {
    System.out.println(frukt);
}`,language:"java"},{type:"code",heading:"HashSet och HashMap",content:`import java.util.*;

// Set – inga dubbletter
Set<String> unika = new HashSet<>();
unika.add("java");
unika.add("python");
unika.add("java"); // Ignoreras – redan finns
System.out.println(unika.size()); // 2

// Map – nyckel → värde
Map<String, Integer> poang = new HashMap<>();
poang.put("Anna", 95);
poang.put("Björn", 82);
System.out.println(poang.get("Anna"));  // 95

// Iterera Map
for (Map.Entry<String, Integer> e : poang.entrySet()) {
    System.out.println(e.getKey() + ": " + e.getValue());
}`,language:"java"},{type:"info",heading:"Vilken ska du välja?",content:`• **ArrayList** – snabb åtkomst med index O(1), långsam insert mitt i O(n)
• **LinkedList** – snabb insert/ta bort O(1), långsam indexåtkomst O(n)
• **HashSet** – snabb contains() och add() O(1), ingen ordning
• **TreeSet** – sorterad, O(log n) för alla operationer
• **HashMap** – snabb get/put O(1), ingen garanterad ordning
• **LinkedHashMap** – behåller insättningsordning`},{type:"tip",content:"Deklarera alltid mot **gränssnittet**: `List<String> lista = new ArrayList<>()`. Då kan du enkelt byta implementation senare."}]},{id:"mellanniva-undantag",title:"Undantag (Exceptions)",emoji:"⚠️",estimatedMinutes:8,level:"intermediate",summary:"Lär dig hantera fel elegant med try/catch och skapa egna exception-klasser.",sections:[{type:"text",heading:"Vad är ett undantag?",content:`Ett **undantag** (exception) är ett fel som uppstår när programmet körs.

Om ett undantag inte hanteras kraschar programmet och visar en **stack trace** – en lista av metodanrop som ledde till felet.

I Java är undantag objekt som ärver från klassen \`Throwable\`.`},{type:"code",heading:"try / catch / finally",content:`try {
    int[] tal = {1, 2, 3};
    System.out.println(tal[10]); // Kastar ArrayIndexOutOfBoundsException

} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Fel: Index finns inte – " + e.getMessage());

} catch (Exception e) {
    System.out.println("Oväntat fel: " + e.getMessage());

} finally {
    // Körs ALLTID – oavsett om undantag uppstod
    System.out.println("Klart!");
}`,language:"java"},{type:"info",heading:"Checked vs Unchecked",content:"**Checked exceptions** – kompilatorn tvingar dig att hantera dem (t.ex. `IOException`).\n**Unchecked exceptions** – ärver från `RuntimeException`, kompilatorn kräver ingen hantering (t.ex. `NullPointerException`, `IllegalArgumentException`).\n\nModern Java-stil: använd **unchecked** exceptions i applikationskod. Skapa egna exception-klasser med tydliga meddelanden."},{type:"code",heading:"Eget exception och try-with-resources",content:`// Eget exception
public class UngiltinBelopppException extends RuntimeException {
    public UngiltinBelopppException(double belopp) {
        super("Ogiltigt belopp: " + belopp + ". Måste vara positivt.");
    }
}

// Try-with-resources – stänger resurser automatiskt
try (var reader = new BufferedReader(new FileReader("fil.txt"))) {
    String rad = reader.readLine();
    System.out.println(rad);
} catch (IOException e) {
    System.out.println("Kunde inte läsa filen: " + e.getMessage());
}`,language:"java"},{type:"tip",content:"Fånga alltid det **mest specifika** undantaget. Fånga `Exception` som en sista utväg – aldrig som enda catch."}]},{id:"mellanniva-lambda",title:"Lambda och Streams",emoji:"⚡",estimatedMinutes:12,level:"intermediate",summary:"Skriv kortare och mer läsbar kod med lambda-uttryck och Stream-API:et.",sections:[{type:"text",heading:"Lambda-uttryck",content:"Ett **lambda-uttryck** är en anonym funktion – en funktion utan namn.\n\nSyntax: `(parametrar) -> {kropp}`\n\nLambda kräver ett **funktionellt interface** – ett interface med exakt en abstrakt metod (t.ex. `Runnable`, `Comparator`, `Predicate`)."},{type:"code",heading:"Lambda-exempel",content:`import java.util.*;

List<String> namn = Arrays.asList("Charlie", "Anna", "Björn");

// Gammalt sätt med anonym klass
Collections.sort(namn, new Comparator<String>() {
    public int compare(String a, String b) { return a.compareTo(b); }
});

// Med lambda – mycket kortare!
Collections.sort(namn, (a, b) -> a.compareTo(b));

// Ännu kortare med metodreferens
namn.sort(String::compareTo);

System.out.println(namn); // [Anna, Björn, Charlie]`,language:"java"},{type:"text",heading:"Stream-API:et",content:"En **Stream** är en pipeline för att bearbeta kollektioner på ett deklarativt sätt.\n\nEn stream-pipeline har tre delar:\n1. **Källa** – `collection.stream()`\n2. **Mellanoperationer** (lazy) – `filter()`, `map()`, `sorted()`\n3. **Terminaloperation** – `collect()`, `forEach()`, `count()`\n\nIngenting körs förrän terminaloperationen anropas!"},{type:"code",heading:"Streams i praktiken",content:`import java.util.*;
import java.util.stream.*;

List<Integer> tal = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filtrera, transformera och samla
List<Integer> jamnaTal = tal.stream()
    .filter(n -> n % 2 == 0)        // Bara jämna
    .map(n -> n * n)                  // Kvadrera
    .collect(Collectors.toList());   // Samla till lista

System.out.println(jamnaTal); // [4, 16, 36, 64, 100]

// Summera
int summa = tal.stream()
    .reduce(0, Integer::sum);
System.out.println("Summa: " + summa); // 55

// Gruppera med Collectors
Map<Boolean, List<Integer>> grupper = tal.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));`,language:"java"},{type:"tip",content:"Använd **metodreferenser** (`ClassName::methodName`) istället för lambdas när det bara är ett metodanrop – det gör koden ännu läsbarare."}]},{id:"mellanniva-optional",title:"Optional",emoji:"🎁",estimatedMinutes:6,level:"intermediate",summary:"Hantera saknade värden elegant och undvik NullPointerException med Optional.",sections:[{type:"text",heading:"Problemet med null",content:"`NullPointerException` är ett av de vanligaste felen i Java. Det uppstår när du försöker använda en variabel som är `null`.\n\n`Optional<T>` löser detta – det är en container som **antingen innehåller ett värde eller är tom**. Istället för att returnera `null` returnerar du `Optional.empty()`."},{type:"code",heading:"Skapa och använda Optional",content:`import java.util.Optional;

// Skapa
Optional<String> med   = Optional.of("Anna");
Optional<String> tom   = Optional.empty();
Optional<String> kansk = Optional.ofNullable(nullableVarde);

// Kontrollera och hämta
if (med.isPresent()) {
    System.out.println(med.get()); // Anna
}

// orElse – standardvärde om tom
String namn = tom.orElse("Anonym");

// orElseGet – kör supplier om tom (lat evaluering)
String namn2 = tom.orElseGet(() -> beraknaStandardNamn());

// map – transformera om värdet finns
Optional<Integer> langd = med.map(String::length); // Optional[4]

// ifPresent – kör kod om värdet finns
med.ifPresent(n -> System.out.println("Hittade: " + n));`,language:"java"},{type:"warning",content:"Använd **inte** Optional som fält i klasser eller som metodparametrar – det är designat för returvärden. Undvik också `.get()` utan att kolla `.isPresent()` – det ger samma problem som null!"},{type:"tip",content:"Kedja operationer med `map()` och `flatMap()` istället för att nästla `isPresent()`-kontroller. Det gör koden mer läsbar."}]},{id:"mellanniva-generics",title:"Generics",emoji:"🧩",estimatedMinutes:8,level:"intermediate",summary:"Skriv typssäker och återanvändbar kod med generiska klasser och metoder.",sections:[{type:"text",heading:"Vad är generics?",content:"**Generics** låter dig skriva klasser och metoder som fungerar med **vilken typ som helst**, utan att förlora typsäkerheten.\n\nDu har redan använt generics – `List<String>` och `Map<String, Integer>` är generiska typer!"},{type:"code",heading:"Generisk klass och metod",content:`// Generisk klass – T är en typ-parameter
public class Box<T> {
    private T innehall;

    public Box(T innehall) { this.innehall = innehall; }
    public T hamta() { return innehall; }
}

// Användning
Box<String> textBox = new Box<>("Hej!");
Box<Integer> talBox  = new Box<>(42);

System.out.println(textBox.hamta()); // Hej!
System.out.println(talBox.hamta());  // 42

// Generisk metod
public static <T extends Comparable<T>> T storst(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

System.out.println(storst(10, 7));       // 10
System.out.println(storst("apa", "bi")); // bi`,language:"java"},{type:"info",heading:"Wildcards och PECS-regeln",content:"`?` är en **wildcard** – okänd typ.\n\n• `List<?>` – lista av okänd typ (läs bara)\n• `List<? extends Number>` – lista av Number eller subklass (**Producer Extends**)\n• `List<? super Integer>` – lista av Integer eller superklass (**Consumer Super**)\n\n**PECS** – Producer Extends, Consumer Super – hjälper dig välja rätt wildcard."},{type:"warning",content:"**Type erasure** – vid körtid finns ingen generisk typinformation kvar. `List<String>` och `List<Integer>` är båda bara `List` i bytekoden. Därför kan du inte göra `new T[]` eller `instanceof List<String>`."}]},{id:"mellanniva-nyheter",title:"Java 8–21: Moderna Funktioner",emoji:"🚀",estimatedMinutes:10,level:"intermediate",summary:"Utforska de viktigaste nyheterna från Java 8 till Java 21 – records, var, textblock och mer.",sections:[{type:"text",heading:"Java har förändrats mycket",content:`Java har fått många nya funktioner sedan version 8. Här är de viktigaste du bör känna till.

Dessa funktioner gör koden **kortare, tydligare och mer modern**.`},{type:"code",heading:"Records (Java 14+) – immutable dataklasser",content:`// Gammal stil kräver: fält, konstruktor, getters, equals, hashCode, toString
public class Point {
    private final int x, y;
    public Point(int x, int y) { this.x = x; this.y = y; }
    public int x() { return x; }
    public int y() { return y; }
    // ... equals, hashCode, toString
}

// Med record – allt genereras automatiskt!
public record Point(int x, int y) {}

Point p = new Point(3, 4);
System.out.println(p.x());       // 3
System.out.println(p);           // Point[x=3, y=4]`,language:"java"},{type:"code",heading:"var, textblock och switch-uttryck",content:`// var (Java 10+) – lokalt typinferens
var lista = new ArrayList<String>(); // kompilatorn känner till typen
var namn  = "Anna";                  // String

// Textblock (Java 13+) – flerradiga strängar
String json = """
        {
          "namn": "Anna",
          "alder": 28
        }
        """;

// Switch-uttryck (Java 14+)
int dag = 3;
String dagNamn = switch (dag) {
    case 1 -> "Måndag";
    case 2 -> "Tisdag";
    case 3 -> "Onsdag";
    default -> "Annan dag";
};`,language:"java"},{type:"code",heading:"Pattern matching (Java 16+)",content:`// Gammalt sätt
if (obj instanceof String) {
    String s = (String) obj; // Manuell cast
    System.out.println(s.toUpperCase());
}

// Pattern matching – automatisk cast
if (obj instanceof String s) {
    System.out.println(s.toUpperCase()); // s finns direkt!
}

// I switch (Java 21)
String beskriv(Object obj) {
    return switch (obj) {
        case Integer i -> "Heltal: " + i;
        case String s  -> "Text: " + s;
        case null      -> "null";
        default        -> "Okänt";
    };
}`,language:"java"},{type:"tip",content:"Använd **Java 21 (LTS)**. Det innehåller alla dessa funktioner plus virtuella trådar (Project Loom) som revolutionerar hur du skriver asynkron kod."}]}]},{id:"tradar",title:"Trådar & Concurrens",subtitle:"Förstå parallell körning, synkronisering och moderna asynkrona mönster",color:"#fb923c",bgColor:"#1c0a00",icon:"🧵",level:"advanced",lessons:[{id:"tradar-intro",title:"Introduktion till Trådar",emoji:"🧵",estimatedMinutes:10,level:"advanced",summary:"Lär dig vad trådar är, hur du skapar dem och förstå trådlivscykeln.",sections:[{type:"text",heading:"Vad är en tråd?",content:`En **tråd** är en oberoende exekveringsväg inom ett program. Flera trådar delar samma minne (heap) men har egna stackar.

Med trådar kan ditt program göra **flera saker samtidigt** – t.ex. hantera många nätverksanrop parallellt eller köra beräkningar i bakgrunden.`},{type:"code",heading:"Tre sätt att skapa trådar",content:`// Sätt 1: Ärv Thread
class MinTrad extends Thread {
    public void run() {
        System.out.println("Thread kör: " + getName());
    }
}
new MinTrad().start();

// Sätt 2: Implementera Runnable (föredras)
Thread t = new Thread(() -> {
    System.out.println("Runnable kör!");
});
t.start();

// Sätt 3: Callable (kan returnera värde och kasta exception)
Callable<Integer> uppgift = () -> {
    Thread.sleep(100);
    return 42;
};
// Används med ExecutorService (se nästa lektion)`,language:"java"},{type:"info",heading:"Trådlivscykeln",content:`En tråd går igenom dessa tillstånd:

• **NEW** – skapad, start() ej anropad
• **RUNNABLE** – redo att köra eller kör just nu på CPU
• **BLOCKED** – väntar på att låsa ett monitor-lås
• **WAITING** – väntar utan tidsgräns (wait(), join())
• **TIMED_WAITING** – väntar med tidsgräns (sleep(ms))
• **TERMINATED** – run() är klar

Kontrollera tillstånd med \`thread.getState()\`.`},{type:"warning",content:"Anropa alltid **start()** – INTE run(). Om du anropar run() direkt körs koden på din nuvarande tråd, inte i en ny."},{type:"tip",content:"I moderna Java-projekt skapar du sällan trådar direkt. Använd istället **ExecutorService** (sköter en trådpool) eller **virtuella trådar** (Java 21). Se kommande lektioner."}]},{id:"tradar-sync",title:"Synkronisering",emoji:"🔒",estimatedMinutes:10,level:"advanced",summary:"Förstå race conditions och hur synchronized skyddar delat tillstånd.",sections:[{type:"text",heading:"Race conditions – problemet",content:`En **race condition** uppstår när två trådar läser och ändrar delat tillstånd utan koordinering.

Resultatet beror på i vilken ordning trådarna körs – vilket är oförutsägbart. Räknaren nedan borde visa 2000, men visar ofta ett lägre tal.`},{type:"code",heading:"Race condition i praktiken",content:`public class Raknare {
    int antal = 0; // Delat tillstånd – FARLIGT!

    void oka() { antal++; } // Tre steg: läs, öka, skriv
}

Raknare r = new Raknare();

// 1000 trådar ökar var sin gång
for (int i = 0; i < 1000; i++) {
    new Thread(r::oka).start();
}

// antal kan vara allt från ~900 till 1000 – oförutsägbart!`,language:"java"},{type:"code",heading:"synchronized – lösningen",content:`public class TradSakrRaknare {
    private int antal = 0;

    // synchronized – bara en tråd i taget
    public synchronized void oka() {
        antal++;
    }

    // Synchronized block – minimera låst kod
    public void oka2() {
        synchronized (this) {
            antal++;
        }
    }

    public synchronized int getAntal() { return antal; }
}`,language:"java"},{type:"info",heading:"Deadlock – fällan att undvika",content:`**Deadlock** uppstår när tråd A väntar på lås X (hålls av B), och tråd B väntar på lås Y (hålls av A) – båda väntar för evigt.

Förebygga deadlock:
• Lås alltid i samma ordning
• Använd \`tryLock()\` med tidsgräns (ReentrantLock)
• Minimera antalet lås du håller samtidigt`},{type:"tip",content:"Föredra **oföränderliga (immutable) objekt** och **trådsäkra samlingar** (ConcurrentHashMap, CopyOnWriteArrayList) framför manuell synkronisering."}]},{id:"tradar-jmm",title:"Java Memory Model & volatile",emoji:"🧠",estimatedMinutes:10,level:"advanced",summary:"Förstå hur trådar ser varandras skrivningar och vad volatile garanterar.",sections:[{type:"text",heading:"Synlighetsproblem",content:`Moderna processorer cachar variabler i **registerminne/CPU-cache**. En tråds skrivning kanske inte syns för en annan tråd direkt.

**Java Memory Model (JMM)** definierar regler för när och hur trådar ser varandras skrivningar.`},{type:"code",heading:"volatile – garanterar synlighet",content:`public class Server {
    // volatile – garanterar att värdet alltid läses från huvudminnet
    private volatile boolean korrning = true;

    public void starta() {
        while (korrning) {
            behandlaForfragningar();
        }
    }

    public void stoppa() {
        korrning = false; // Syns omedelbart för alla trådar
    }
}`,language:"java"},{type:"warning",content:"**volatile** löser synligheten men INTE atomicitet!\n\n`count++` är tre operationer (läs, öka, skriv). Volatile skyddar inte mot race conditions på sammansatta operationer.\n\nFör atomiska operationer – använd `AtomicInteger` (se lektionen om Locks och Atomics)."},{type:"info",heading:"Happens-before – JMMs nyckelbegrepp",content:`**Happens-before** garanterar att en åtgärd är synlig för en annan.

Viktiga happens-before-relationer:
• Upplåsning av monitor → efterföljande lås av samma monitor
• Skrivning till volatile fält → efterföljande läsning av samma fält
• \`Thread.start()\` → alla åtgärder i den startade tråden
• Alla åtgärder → \`Thread.join()\` returnerar`},{type:"tip",content:"Utan en happens-before-relation kan kompilatorn och CPU:n **ordna om instruktioner**. Det är därför synkronisering behövs – inte bara för ömsesidig exkludering utan också för **korrekt synlighet**."}]},{id:"tradar-executor",title:"ExecutorService och Trådpooler",emoji:"🏭",estimatedMinutes:10,level:"advanced",summary:"Hantera trådar effektivt med ExecutorService och trådpooler.",sections:[{type:"text",heading:"Varför trådpooler?",content:"Att skapa en ny tråd för varje uppgift är **dyrt** – det tar tid och minne.\n\nEn **trådpool** återanvänder ett fast antal trådar för att utföra uppgifter. `ExecutorService` är gränssnittet för att arbeta med trådpooler i Java."},{type:"code",heading:"ExecutorService – grundläggande användning",content:`import java.util.concurrent.*;

// Skapa en trådpool med 4 trådar
ExecutorService pool = Executors.newFixedThreadPool(4);

// Skicka in uppgifter
pool.execute(() -> System.out.println("Uppgift 1"));

Future<String> framtid = pool.submit(() -> {
    Thread.sleep(500);
    return "Resultat!";
});

// Hämta resultat (blockar tills klart)
String svar = framtid.get();
System.out.println(svar); // Resultat!

// Stäng alltid poolen – annars körs JVM vidare
pool.shutdown();
pool.awaitTermination(10, TimeUnit.SECONDS);`,language:"java"},{type:"info",heading:"Typer av trådpooler",content:"• `newFixedThreadPool(n)` – n trådar, kö för väntande uppgifter\n• `newCachedThreadPool()` – skapar trådar vid behov, återanvänder lediga\n• `newSingleThreadExecutor()` – en tråd, uppgifter körs i ordning\n• `newScheduledThreadPool(n)` – för schemalagda och upprepade uppgifter\n\nFör Java 21+: `Executors.newVirtualThreadPerTaskExecutor()` – en virtuell tråd per uppgift."},{type:"tip",content:"Anropa alltid **shutdown()** på din ExecutorService. Annars hålls JVM-processen vid liv av de icke-daemon-trådar som poolen skapar."}]},{id:"tradar-completable",title:"CompletableFuture",emoji:"🔗",estimatedMinutes:12,level:"advanced",summary:"Skriv icke-blockerande asynkron kod med CompletableFuture.",sections:[{type:"text",heading:"Problemet med Future.get()",content:"Vanlig `Future.get()` **blockerar tråden** tills resultatet är klart. Det skapar flaskhalsar.\n\n`CompletableFuture` löser detta – du registrerar **callbacks** som körs när resultatet finns, utan att blockera."},{type:"code",heading:"CompletableFuture – grundmönster",content:`import java.util.concurrent.*;

// Starta async beräkning
CompletableFuture<String> cf = CompletableFuture
    .supplyAsync(() -> hamtaData())      // Kör i ForkJoinPool
    .thenApply(data -> behandla(data))   // Transformera resultatet
    .thenApply(String::toUpperCase);     // Kedja fler steg

// Lägg till felhantering
cf.exceptionally(ex -> {
    System.out.println("Fel: " + ex.getMessage());
    return "standardvärde";
});

// Hämta resultatet (blockar – använd bara i main/test)
String svar = cf.join();`,language:"java"},{type:"code",heading:"Kombinera flera futures",content:`// Kör två anrop PARALLELLT och kombinera
CompletableFuture<String> anropA = CompletableFuture.supplyAsync(() -> hamtaAnvandare(1));
CompletableFuture<String> anropB = CompletableFuture.supplyAsync(() -> hamtaOrder(1));

CompletableFuture<String> kombination = anropA.thenCombine(
    anropB,
    (anvandare, order) -> anvandare + " beställde " + order
);

// Vänta på ATT ALLA är klara
CompletableFuture.allOf(anropA, anropB).join();

// Vänta på att DEN FÖRSTA är klar
CompletableFuture.anyOf(anropA, anropB).join();`,language:"java"},{type:"tip",content:"Använd `thenApplyAsync()` istället för `thenApply()` om callback-koden är tung – det kör callbacken i trådpoolen istället för den anropande tråden."}]},{id:"tradar-locks",title:"Locks, Atomics och Semaforer",emoji:"⚙️",estimatedMinutes:10,level:"advanced",summary:"Utforska avancerade synkroniseringsverktyg: ReentrantLock, AtomicInteger och Semaphore.",sections:[{type:"text",heading:"Bortom synchronized",content:"`synchronized` är enkelt men begränsat. `java.util.concurrent.locks` erbjuder kraftfullare alternativ:\n\n• **ReentrantLock** – explicit lås med tryLock(), fairness-läge\n• **ReadWriteLock** – läs-/skriv-separation\n• **StampedLock** – optimistisk läsning (Java 8+)"},{type:"code",heading:"ReentrantLock",content:`import java.util.concurrent.locks.*;

ReentrantLock las = new ReentrantLock();

public void safKritiskKod() {
    las.lock();
    try {
        // Kritisk sektion – bara en tråd åt gången
        raknare++;
    } finally {
        las.unlock(); // Låses alltid upp i finally!
    }
}

// tryLock – försök utan att blockera
if (las.tryLock(500, TimeUnit.MILLISECONDS)) {
    try {
        // Fick låset!
    } finally {
        las.unlock();
    }
} else {
    System.out.println("Kunde inte få låset – försöker igen");
}`,language:"java"},{type:"code",heading:"AtomicInteger – lås-fri atomicitet",content:`import java.util.concurrent.atomic.*;

AtomicInteger raknare = new AtomicInteger(0);

// Atomisk ökning – trådsäker utan synchronized
raknare.incrementAndGet(); // ++
raknare.addAndGet(5);      // += 5
int gammalt = raknare.getAndSet(0); // Hämta och återställ

// Compare-and-swap (CAS) – grunden för lock-free programmering
boolean lyckades = raknare.compareAndSet(10, 20);
// Sätter till 20 bara om värdet ÄR 10

// Semaphore – begränsa antal parallella åtkomster
Semaphore semaphore = new Semaphore(3); // Max 3 trådar
semaphore.acquire(); // Minska räknaren (blockar om 0)
try {
    // Max 3 trådar här samtidigt
} finally {
    semaphore.release(); // Öka räknaren
}`,language:"java"},{type:"tip",content:"`AtomicInteger` är snabbare än `synchronized` vid låg contention. Vid hög contention (många trådar skriver) – använd **LongAdder** som är optimerad för det fallet."}]},{id:"tradar-virtual",title:"Virtuella Trådar (Java 21)",emoji:"✨",estimatedMinutes:8,level:"advanced",summary:"Project Loom revolutionerar concurrens – skapa miljoner lättviktiga trådar.",sections:[{type:"text",heading:"Problemet med plattformstrådar",content:`En traditionell Java-tråd är bunden till en **OS-tråd** och tar ~1 MB RAM. Du kan inte skapa fler än ~10 000 sådana trådar innan systemet kämpar.

**Virtuella trådar** (Project Loom, Java 21) löser detta – de hanteras av JVM, inte OS, och tar bara ~KB i RAM. Du kan skapa **miljoner** av dem.`},{type:"code",heading:"Skapa virtuella trådar",content:`// Skapa och starta en virtuell tråd
Thread vt = Thread.ofVirtual().start(() -> {
    System.out.println("Virtuell tråd kör!");
});

// Eller med ExecutorService
try (var pool = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 1_000_000; i++) {
        pool.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1));
            return "klar";
        });
    }
} // Stängs automatiskt med try-with-resources
// En miljon trådar! Omöjligt med plattformstrådar.`,language:"java"},{type:"info",heading:"Hur fungerar virtuella trådar?",content:`Virtuella trådar **monteras** på carrier-trådar (plattformstrådar). När en virtuell tråd blockerar på I/O, demonteras den – carrier-tråden frigörs för att köra en annan virtuell tråd.

Detta är som asynkron programmering (Reactive, CompletableFuture) – men du skriver **vanlig blockerande kod**! Ingen callback-hell.`},{type:"code",heading:"Praktiskt exempel",content:`// Gammalt reaktivt sätt (komplext)
CompletableFuture
    .supplyAsync(this::hamtaAnvandare)
    .thenCompose(u -> CompletableFuture.supplyAsync(() -> hamtaOrder(u)))
    .thenAccept(System.out::println);

// Med virtuella trådar – samma prestanda, enkel kod!
try (var pool = Executors.newVirtualThreadPerTaskExecutor()) {
    pool.submit(() -> {
        var anvandare = hamtaAnvandare();  // Blockerar OK!
        var order = hamtaOrder(anvandare); // Blockerar OK!
        System.out.println(order);
    });
}`,language:"java"},{type:"tip",content:"Virtuella trådar är bäst för **I/O-bundna** uppgifter (databas, HTTP, fil). För CPU-bundna uppgifter – använd fortfarande en trådpool med `Runtime.getRuntime().availableProcessors()` trådar."}]}]},{id:"jvm",title:"JVM & Hur Java Fungerar",subtitle:"Förstå JVM:s arkitektur, bytekod, JIT och garbage collection på djupet",color:"#c084fc",bgColor:"#1a0a2e",icon:"🔬",level:"expert",lessons:[{id:"jvm-arkitektur",title:"JVM Arkitektur",emoji:"🏛️",estimatedMinutes:10,level:"expert",summary:"Förstå JVM:s tre huvuddelar: ClassLoader, runtime dataareaer och exekveringsmotorn.",sections:[{type:"text",heading:"JVM i tre delar",content:`JVM (Java Virtual Machine) har tre huvuddelar:

1. **ClassLoader-subsystem** – laddar, verifierar och initialiserar klasser
2. **Runtime dataareaer** – minnesutrymmen för körande program
3. **Exekveringsmotor** – tolkar och kompilerar bytekod till maskinkod`},{type:"info",heading:"Runtime dataareaer",content:`• **Heap** (delat) – alla objekt och arrayer lagras här. GC körs här.
• **Method Area / Metaspace** (delat) – klassmetadata, statiska fält, konstanter
• **JVM Stack** (per tråd) – frames för varje metodanrop (lokala variabler, operandstack)
• **PC Register** (per tråd) – pekar på aktuell bytekodsinstruktion
• **Native Method Stack** (per tråd) – för JNI/native-metoder`},{type:"code",heading:"ClassLoader-hierarkin",content:`// Java har tre inbyggda ClassLoaders:
// 1. Bootstrap ClassLoader – laddar java.lang.*, java.util.* etc.
//    Skriven i C++, inte synlig som Java-objekt.

// 2. Platform ClassLoader (Java 9+) – laddar java.sql.*, javax.* etc.

// 3. Application ClassLoader – laddar din applikations klasser
//    (CLASSPATH / module-path)

// Delegationsmodellen: en ClassLoader frågar alltid sin förälder FÖRST
// Bootstrap → Platform → Application

// Du kan skriva egna ClassLoaders:
public class MinClassLoader extends ClassLoader {
    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        byte[] bytekod = laddaFranKrypterad(name);
        return defineClass(name, bytekod, 0, bytekod.length);
    }
}`,language:"java"},{type:"text",heading:"Klassladdningsprocessen",content:`En klass laddas i tre steg:

1. **Laddning** – bytekod läses från .class-filen
2. **Länkning** – tre delar:
   • Verifiering – bytekoden kontrolleras så den är giltig och säker
   • Förberedelse – statiska fält tilldelas standardvärden
   • Upplösning – symboliska referenser ersätts med direkta
3. **Initialisering** – statiska initieringsblock och statiska fälts startvärden körs`},{type:"tip",content:"Klasser laddas **lazily** – en klass laddas inte förrän den används för första gången. Det är därför JVM-uppstartstiden är kortare än man kan tro."}]},{id:"jvm-bytekod",title:"Bytekod och Kompilering",emoji:"📟",estimatedMinutes:8,level:"expert",summary:"Förstå vad bytekod är, hur den ser ut och vad javap-verktyget visar.",sections:[{type:"text",heading:"Från källkod till exekvering",content:`1. Du skriver **HelloWorld.java** (källkod)
2. \`javac\` kompilerar till **HelloWorld.class** (bytekod)
3. JVM laddar .class-filen
4. **Interpreter** kör bytekoden direkt
5. **JIT-kompilatorn** kompilerar heta metoder till maskinkod

Bytekod är ett plattformsoberoende mellanlager – det är därför samma .class-fil körs på Windows, Mac och Linux.`},{type:"code",heading:"Visa bytekod med javap",content:`// Java-kod:
public class Addera {
    public static int addera(int a, int b) {
        return a + b;
    }
}

// Kör: javap -c Addera.class
// Visar bytekod:
// public static int addera(int, int);
//   Code:
//     0: iload_0   <- Ladda parameter a från lokala variabler
//     1: iload_1   <- Ladda parameter b
//     2: iadd      <- Addera topp-2 värden på stacken
//     3: ireturn   <- Returnera int-värdet

// JVM är en STACK-baserad VM.
// Operander pushas på operandstacken och operationer konsumerar dem.`,language:"java"},{type:"info",heading:"invokedynamic – grunden för lambda",content:"Sedan Java 7 finns `invokedynamic` – en bytekodsinstruktion som löser metoden vid **körning** istället för kompileringstid.\n\nNär du skriver en lambda genererar kompilatorn `invokedynamic`. JVM:s `LambdaMetafactory` skapar vid första körning en optimerad implementationsklass och cachar den.\n\nDetta är snabbare och mer minneseffektivt än gamla anonyma inner classes."},{type:"tip",content:'Kotlin, Scala, Groovy och Clojure kompilerar alla till .class-filer och körs på JVM. Bytekod är det gemensamma språket – "skriv i Kotlin, kör på JVM" fungerar tack vare detta.'}]},{id:"jvm-jit",title:"JIT-kompilering",emoji:"⚡",estimatedMinutes:8,level:"expert",summary:"Förstå hur HotSpots JIT förvandlar bytekod till snabb maskinkod med avancerade optimeringar.",sections:[{type:"text",heading:"Interpretering vs JIT",content:`**Interpretering** – varje bytekodsinstruktion tolkas och körs. Enkelt men långsamt (100–1000x långsammare än maskinkod).

**JIT (Just-In-Time)** – kompilatorn identifierar "heta" metoder (körs ofta) och kompilerar dem till snabb native maskinkod. Resultatet cachas och återanvänds.`},{type:"info",heading:"HotSpots tiered compilation",content:`HotSpot JVM (OpenJDK) använder **tiered compilation** med 5 nivåer:

• **Tier 0** – Interpreter (samlar profildata)
• **Tier 1–3** – C1 (Client Compiler), snabb kompilering med lätta optimeringar
• **Tier 4** – C2 (Server Compiler), aggressiv optimering av de allra hetaste metoderna

En metod är "het" efter ~10 000 anrop. C2-kod kan vara nära C++-hastighet.`},{type:"code",heading:"JIT-optimeringar",content:`// 1. INLINING – metoden kopieras in i anroparen
// Före JIT:
int resultat = addera(3, 7); // Metodanrop
// Efter inlining av JIT:
int resultat = 3 + 7; // Ingen overhead!

// 2. ESCAPE ANALYSIS – objekt som inte "lämnar" metoden
//    allokeras på stacken (inte heap) → noll GC-tryck
void berakna() {
    Point p = new Point(3, 4); // Skapar objekt...
    System.out.println(p.x()); // ...men p "lämnar" aldrig metoden
    // JIT kan eliminera allokeringen helt!
}

// 3. LOOP UNROLLING
// Kompilatorn kan förvandla en loop med 4 iterationer
// till 4 separata instruktioner – eliminerar loop-overhead

// 4. DEOPTIMERING – JIT kan backa om antaganden bryts
// Om en ny subklass laddas, kan inlinjad kod bli ogiltig.`,language:"java"},{type:"tip",content:"Java är **snabbast under steady-state** (efter JVM värmt upp). Benchmarka alltid med uppvärmning. Använd **JMH** (Java Microbenchmark Harness) för rättvisande mätningar."}]},{id:"jvm-gc",title:"Garbage Collection",emoji:"🗑️",estimatedMinutes:12,level:"expert",summary:"Förstå heapstruktur, generationer, GC-algoritmer och hur du väljer rätt GC.",sections:[{type:"text",heading:"Automatisk minneshantering",content:"**Garbage Collection (GC)** frigör automatiskt minnet för objekt som inte längre används. Du behöver aldrig `free()` som i C/C++.\n\nGC hittar oanvända objekt genom att spåra **GC-rötter** (statiska fält, tråd-stackar, JNI-referenser) och markera allt som kan nås därifrån."},{type:"info",heading:"Heap-generationer",content:`Heapen delas upp baserat på **the generational hypothesis**: de flesta objekt dör unga.

• **Young Generation**
  – **Eden** – nya objekt allokeras här
  – **Survivor S0 & S1** – objekt som överlever en GC kopieras hit
• **Old Generation (Tenured)** – långlivade objekt befordras hit
• **Metaspace** (utanför heap) – klassmetadata

**Minor GC** rensar Young Gen – snabb (ms). **Major/Full GC** rensar Old Gen – långsammare.`},{type:"code",heading:"Välj rätt GC med JVM-flaggor",content:`// G1GC – Standard sedan Java 9, bra balans
java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -jar app.jar

// ZGC – Sub-millisekunds pauser, Java 15+ produktionsklar
java -XX:+UseZGC -jar app.jar

// Parallel GC – Hög genomströmning, längre pauser
java -XX:+UseParallelGC -jar app.jar

// Diagnostikflaggor
java -Xlog:gc*:file=gc.log:time,uptime \\
     -XX:+HeapDumpOnOutOfMemoryError \\
     -XX:HeapDumpPath=/tmp/heap.hprof \\
     -jar app.jar

// Heapstorlek
java -Xms512m -Xmx4g -jar app.jar
// -Xms = initial heap, -Xmx = max heap
// Sätt dem lika i produktion för att undvika omstorlekning`,language:"java"},{type:"text",heading:"Minneläckor i Java",content:`Java kan ha **minneläckor** trots GC. Orsaker:

• **Statiska samlingar** som växer utan begränsning
• **ThreadLocal** som inte tas bort i trådpooler
• **Lyssnare/callbacks** som aldrig avregistreras
• **Cachar** utan eviction-policy

Diagnostisera med: \`jstat -gcutil <pid> 5000\` (se om Old Gen växer) och heap dump-analys med Eclipse MAT.`},{type:"warning",content:"Sätt alltid `-Xms` och `-Xmx` till **samma värde** i produktion. Annars spenderar JVM tid på att ändra storleken på heapen under körning."}]},{id:"jvm-minne",title:"Minneshantering på djupet",emoji:"💾",estimatedMinutes:10,level:"expert",summary:"String pool, escape analysis, off-heap minne och hur objekt layoutas i minnet.",sections:[{type:"text",heading:"Objekt i minnet",content:"Varje Java-objekt på heapen har:\n• **Object header** (~12–16 bytes) – klass-pekare, mark word (GC-info, lås, hash)\n• **Fält** – instansfälten i ordning (med alignment-padding)\n\nEn `Integer` tar alltså ~16 bytes – en `int` tar 4 bytes. Undvik boxing i prestandakritisk kod."},{type:"info",heading:"String Pool – intern caching",content:'Strängliteraler (`"hej"`) lagras i **String Pool** (på heapen sedan Java 7). JVM håller exakt en instans per unikt strängvärde.\n\n`String a = "hej"; String b = "hej"; a == b // true` – samma objekt!\n\n`String c = new String("hej"); a == c // false` – ny instans\n\n`c.intern()` lägger till c i poolen och returnerar pool-instansen.\n\nAnvänd `equals()`, aldrig `==`, för att jämföra strängar.'},{type:"code",heading:"Off-heap minne",content:`// ByteBuffer.allocateDirect – allokerar utanför heap
// Bra för: stora cachar, I/O-buffertar, delat minne
ByteBuffer buf = ByteBuffer.allocateDirect(1024 * 1024); // 1 MB

// Java 22+ Foreign Memory API (stable) – säker off-heap
try (Arena arena = Arena.ofConfined()) {
    MemorySegment segment = arena.allocate(1024);
    segment.set(ValueLayout.JAVA_INT, 0, 42);
    int val = segment.get(ValueLayout.JAVA_INT, 0);
    System.out.println(val); // 42
} // Minnet frigörs automatiskt när arena stängs`,language:"java"},{type:"tip",content:'**Escape analysis** är en JIT-optimering som avgör om ett objekt "lämnar" metoden. Om inte – kan JIT allokera objektet på stacken istället för heapen. Ingen GC-kostnad! Håll metoder korta och objekt lokala för att aktivera detta.'}]},{id:"jvm-graalvm",title:"GraalVM och Native Image",emoji:"🦅",estimatedMinutes:8,level:"expert",summary:"Lär dig hur GraalVM kompilerar Java till snabb native kod utan JVM.",sections:[{type:"text",heading:"Vad är GraalVM?",content:`**GraalVM** är en polyglot VM från Oracle. Den innehåller:

• En ny **JIT-kompilator** (skriven i Java) som ersätter C2
• **Native Image** – AOT-kompilering av Java till standalone binärer
• Stöd för att köra JavaScript, Python, Ruby och R på JVM

Native Image används av **Quarkus** och **Micronaut** för snabba mikrotjänster.`},{type:"info",heading:"Native Image: fördelar och begränsningar",content:`**Fördelar:**
• Uppstartstid < 100ms (vs ~1–5s för JVM)
• ~5x lägre minnesanvändning
• Ingen JVM krävs för att köra
• Perfekt för serverless, CLI-verktyg, containers

**Begränsningar:**
• Längre byggtid (5–20 min)
• Dynamisk reflektions-, klassladnings- och proxy-kod måste registreras
• Ingen JIT vid körning – ingen profilering och adaptiv optimering`},{type:"code",heading:"Bygga och köra Native Image",content:`# Installera GraalVM och native-image
sdk install java 21.0.0-graal
gu install native-image

# Kompilera din JAR till native
native-image -jar minapp.jar minapp-native

# Kör binären – ingen JVM behövs!
./minapp-native

# Med Quarkus – inbyggt stöd
mvn package -Pnative
./target/minapp-1.0.0-runner`,language:"java"},{type:"text",heading:"Closed World Assumption",content:`Native Image kräver att alla klasser som används är kända vid **byggtid** – det kan inte dynamiskt ladda okända klasser.

Detta kallas **Closed World Assumption**.

Ramverk som Quarkus och Micronaut är byggda från grunden för att fungera med detta. Spring stöder det sedan Spring 3 men kräver mer konfiguration.`},{type:"tip",content:"Börja **inte** med Native Image direkt – bygg och testa på vanlig JVM först. Native Image är ett optimeringssteg för driftsättning, inte ett krav för att köra Java."}]}]},{id:"quarkus",title:"Quarkus",subtitle:"Bygg molnbaserade Java-applikationer – från nybörjare till expert",color:"#f97316",bgColor:"#431407",icon:"⚡",level:"intermediate",lessons:[{id:"quarkus-intro",title:"Vad är Quarkus?",emoji:"⚡",estimatedMinutes:6,level:"beginner",summary:"Förstå vad Quarkus är, varför det skapades och hur det skiljer sig från Spring Boot.",sections:[{type:"text",heading:"Quarkus – Java för molnet",content:`**Quarkus** är ett modernt Java-ramverk skapat av Red Hat och lanserat 2019. Det är designat för att köra Java i **molnet och Kubernetes** med extremt snabb starttid och minimalt minnesavtryck.

Målet är att göra Java till ett förstklassigt alternativ för **container-baserade miljöer** och **serverless-funktioner** – miljöer där snabb uppstart och låg minneskonsumtion är avgörande.`},{type:"info",heading:"Varför Quarkus och inte Spring Boot?",content:`Spring Boot är fantastiskt men byggdes för servermiljöer på 2000-talet. Quarkus är byggt **uppifrån och ned för containrar**.

Jämförelse (typiska siffror):
• **Starttid** – Spring Boot: ~2–5 sekunder, Quarkus JVM: ~0.5 s, Quarkus native: ~0.01 s
• **Minne (RSS)** – Spring Boot: ~200 MB, Quarkus JVM: ~100 MB, Quarkus native: ~15–30 MB
• **Ekosystem** – Quarkus stöder Jakarta EE, MicroProfile, Vert.x och Mutiny`},{type:"text",heading:"Hur fungerar det?",content:`Quarkus gör **build-time processing** – saker som Spring gör vid uppstart (annotation-scanning, DI-konfiguration) gör Quarkus vid **kompilering**.

Resultatet är att applikationen startar blixtsnabbt eftersom allt redan är förberett.

Det finns två körlägen:
• **JVM-läge** – körs på vanlig JVM, snabbare än Spring
• **Native-läge** – kompileras till maskinkod med GraalVM, startar på millisekunder`},{type:"code",heading:"Skapa ett nytt Quarkus-projekt",content:`# Alternativ 1: Quarkus CLI (rekommenderat)
quarkus create app org.acme:my-app \\
  --extension='rest,hibernate-orm-panache,jdbc-postgresql'

# Alternativ 2: Maven
mvn io.quarkus.platform:quarkus-maven-plugin:3.x:create \\
  -DprojectGroupId=org.acme \\
  -DprojectArtifactId=my-app \\
  -Dextensions="rest"

# Alternativ 3: Webbgränssnitt
# Besök: https://code.quarkus.io`,language:"bash"},{type:"code",heading:"Starta i dev-läge",content:`# Dev-läge med Live Reload (koden uppdateras automatiskt)
./mvnw quarkus:dev

# Applikationen startar på http://localhost:8080
# Dev UI finns på http://localhost:8080/q/dev

# Quarkus Dev Services startar automatiskt databaser (PostgreSQL, MySQL etc.)
# via Docker/Podman – inga manuella inställningar behövs!`,language:"bash"},{type:"tip",content:"Installera **Quarkus CLI** med `sdk install quarkus` (SDKMAN) eller `brew install quarkusio/tap/quarkus` (Mac). Det är det smidigaste sättet att skapa och hantera Quarkus-projekt."}]},{id:"quarkus-rest",title:"REST API med Quarkus REST",emoji:"🌐",estimatedMinutes:8,level:"beginner",summary:"Bygg ett REST API med Quarkus REST (RESTEasy Reactive) och Jakarta REST-annotationer.",sections:[{type:"text",heading:"Quarkus REST – det reaktiva REST-ramverket",content:"**Quarkus REST** (tidigare RESTEasy Reactive) är det primära sättet att bygga REST API:er i Quarkus. Det är byggt ovanpå Vert.x och är icke-blockerande by default.\n\nDu använder välkända **Jakarta REST-annotationer** (JAX-RS) som `@GET`, `@POST`, `@Path`, `@Produces` – precis som i vanlig Java EE."},{type:"code",heading:"En enkel REST-resurs",content:`import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/api/bocker")          // Base path för hela klassen
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BokResource {

    @GET
    public List<String> allaBocker() {
        return List.of("Dune", "Neuromancer", "Ender's Game");
    }

    @GET
    @Path("/{id}")            // Path-parameter
    public String hamtaBok(@PathParam("id") Long id) {
        return "Bok med id: " + id;
    }

    @POST
    public String laggTillBok(String titel) {
        return "Lade till: " + titel;
    }

    @DELETE
    @Path("/{id}")
    public void taBortBok(@PathParam("id") Long id) {
        // Ta bort boken...
    }
}`,language:"java"},{type:"code",heading:"Query-parametrar och Response",content:`import jakarta.ws.rs.core.Response;

@GET
@Path("/sok")
public List<String> sokBocker(
    @QueryParam("q") String sokning,          // ?q=dune
    @QueryParam("sida") @DefaultValue("0") int sida  // ?sida=2
) {
    // Sök och returnera resultaten...
    return List.of();
}

// Returnera med HTTP-statuskod
@POST
@Path("/skapa")
public Response skapaRessurs(String data) {
    // Skapa resursen...
    return Response
        .status(Response.Status.CREATED)   // 201 Created
        .entity(data)
        .header("Location", "/api/bocker/1")
        .build();
}`,language:"java"},{type:"code",heading:"Exceptionhantering med @ServerExceptionMapper",content:`import io.quarkus.rest.runtime.core.QuarkusRestRequestContext;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class BokEjHittadMapper implements ExceptionMapper<BokEjHittadException> {

    @Override
    public Response toResponse(BokEjHittadException e) {
        return Response
            .status(Response.Status.NOT_FOUND)  // 404
            .entity(new FelSvar(e.getMessage()))
            .build();
    }
}

record FelSvar(String meddelande) {}`,language:"java"},{type:"info",heading:"Testa med Dev UI",content:"I **dev-läge** (`./mvnw quarkus:dev`) öppnar du `http://localhost:8080/q/dev` och hittar **Swagger UI** automatiskt.\n\nDu kan testa alla dina endpoints direkt i webbläsaren – inga externa verktyg behövs."},{type:"tip",content:"Lägg till `quarkus-smallrye-openapi` i beroenden för att automatiskt generera **OpenAPI-specifikation** och aktivera Swagger UI. Quarkus skapar dokumentationen från dina annotationer."}]},{id:"quarkus-cdi",title:"CDI – Dependency Injection",emoji:"🔌",estimatedMinutes:9,level:"beginner",summary:"Lär dig hur Quarkus hanterar dependency injection med ArC – en build-time CDI-implementation.",sections:[{type:"text",heading:"ArC – Quarkus DI-container",content:"**ArC** är Quarkus inbyggda dependency injection-motor, baserad på **Jakarta CDI 4** men optimerad för build-time.\n\nTill skillnad från Spring, som skannar annotations vid uppstart, analyserar ArC alla beroenden vid **kompileringen**. Fel hittas tidigt och uppstarten är blixtsnabb.\n\nDu använder välbekanta annotationer: `@ApplicationScoped`, `@RequestScoped`, `@Inject`, `@Produces`, `@Named`."},{type:"code",heading:"Scopes – bönors livscykel",content:`import jakarta.enterprise.context.*;
import jakarta.inject.Singleton;

// En instans per applikation (vanligast för services)
@ApplicationScoped
public class BokService {
    public List<Bok> allaBocker() { return List.of(); }
}

// En instans per HTTP-request
@RequestScoped
public class LokalService {
    private String anvandarId; // Säker att sätta per request
}

// Exakt en instans – ingen proxy (snabbare men sämre testbarhet)
@Singleton
public class KonfigService { }

// Ny instans varje gång (ingen cache)
@Dependent
public class MailBuilder { }`,language:"java"},{type:"code",heading:"@Inject – injicera beroenden",content:`@Path("/api/bocker")
@Produces(MediaType.APPLICATION_JSON)
public class BokResource {

    @Inject
    BokService bokService;          // Fält-injektion

    // Eller via konstruktor (rekommenderas för testbarhet)
    private final BokService service;

    @Inject
    public BokResource(BokService service) {
        this.service = service;
    }

    @GET
    public List<Bok> allaBocker() {
        return service.allaBocker();
    }
}`,language:"java"},{type:"code",heading:"Qualifiers och @Produces",content:`import jakarta.inject.*;

// Definiera en qualifier
@Qualifier
@Retention(RUNTIME)
@Target({METHOD, FIELD, PARAMETER, TYPE})
public @interface Premium { }

// Två implementationer av samma interface
public interface Rabatt {
    double berakna(double pris);
}

@ApplicationScoped
public class VanligRabatt implements Rabatt {
    public double berakna(double pris) { return pris * 0.05; }
}

@ApplicationScoped
@Premium
public class PremiumRabatt implements Rabatt {
    public double berakna(double pris) { return pris * 0.20; }
}

// Injicera rätt implementation
@Inject @Premium
Rabatt premiumRabatt;

// @Produces – skapa bönor programmatiskt
@ApplicationScoped
public class KonfigProducent {
    @Produces
    @ApplicationScoped
    public AppKonfig skapaKonfig() {
        return new AppKonfig(System.getenv("APP_URL"));
    }
}`,language:"java"},{type:"info",heading:"Build-time vs runtime DI",content:`ArC analyserar alla beroenden vid **byggtid** och genererar kod för att koppla ihop dem.

Fördelen: om ett beroende saknas får du ett **kompileringsfel**, inte ett runtime-fel. Du kan inte deploya en trasig applikation av misstag.`}]},{id:"quarkus-panache",title:"Databas med Panache",emoji:"🗄️",estimatedMinutes:10,level:"intermediate",summary:"Använd Hibernate ORM med Panache för att jobba med databaser på ett enkelt och modernt sätt.",sections:[{type:"text",heading:"Panache – förenklat databasarbete",content:"**Panache** är ett Quarkus-tillägg ovanpå Hibernate ORM som eliminerar boilerplate-kod.\n\nDet finns två mönster:\n• **Active Record** – entiteten hanterar sig själv (klassen ärver `PanacheEntity`)\n• **Repository** – separat repository-klass (bättre separation, lättare att testa)\n\nBåda ger automatiska metoder: `findById()`, `listAll()`, `persist()`, `delete()` och JPQL-queries."},{type:"code",heading:"Konfigurera databas i application.properties",content:`# application.properties

# Dev Services sköter detta automatiskt i dev-läge!
# Produktionsinställningar:
quarkus.datasource.db-kind=postgresql
quarkus.datasource.username=user
quarkus.datasource.password=secret
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/mindb

# Hibernate – uppdatera schema automatiskt i dev
quarkus.hibernate-orm.database.generation=update

# Logga SQL (hjälpsamt vid felsökning)
quarkus.hibernate-orm.log.sql=true`,language:"properties"},{type:"code",heading:"Active Record-mönstret",content:`import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "bocker")
public class Bok extends PanacheEntity {   // id skapas automatiskt

    @Column(nullable = false)
    public String titel;

    public String forffattare;

    public int ar;

    // Statiska finder-metoder direkt i entiteten
    public static List<Bok> finnaAvForfattare(String forfattare) {
        return list("forffattare", forfattare);
    }

    public static long raknaSenareAn(int ar) {
        return count("ar > ?1", ar);
    }
}

// Användning i resurs:
// Bok.findById(1L)
// Bok.listAll()
// Bok.finnaAvForfattare("Tolkien")
// ny.persist()`,language:"java"},{type:"code",heading:"Repository-mönstret",content:`import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class BokRepository implements PanacheRepository<Bok> {

    public List<Bok> finnaAvForfattare(String forfattare) {
        return list("forffattare = ?1", forfattare);
    }

    public Optional<Bok> finnaFoerstaEfterAr(int ar) {
        return find("ar > ?1 ORDER BY ar ASC", ar).firstResultOptional();
    }

    // PanacheRepository ger gratis: findById, listAll, persist,
    // delete, count, deleteAll, update, stream m.m.
}

// I resursen:
@Inject BokRepository bokRepo;

@GET
public List<Bok> allaBocker() {
    return bokRepo.listAll(Sort.by("titel"));
}`,language:"java"},{type:"code",heading:"Transaktioner med @Transactional",content:`import jakarta.transaction.Transactional;

@ApplicationScoped
public class BokService {

    @Inject BokRepository bokRepo;

    @Transactional                          // Öppnar en DB-transaktion
    public Bok skapaBok(String titel, String forfattare, int ar) {
        Bok bok = new Bok();
        bok.titel = titel;
        bok.forffattare = forfattare;
        bok.ar = ar;
        bokRepo.persist(bok);              // Sparas i databasen
        return bok;
    }

    @Transactional
    public void uppdateraTitel(Long id, String nyTitel) {
        Bok bok = bokRepo.findById(id);
        if (bok == null) throw new BokEjHittadException(id);
        bok.titel = nyTitel;               // Hibernate spårar ändringen
    }                                      // Commit vid metodens slut
}`,language:"java"},{type:"tip",content:"I **dev-läge** startar Quarkus automatiskt en PostgreSQL-container via **Dev Services** (kräver Docker/Podman). Du behöver inte konfigurera någonting – det fungerar direkt ur lådan."}]},{id:"quarkus-reaktiv",title:"Reaktiv Programmering med Mutiny",emoji:"🌊",estimatedMinutes:11,level:"advanced",summary:"Förstå asynkron och icke-blockerande programmering med Quarkus reaktiva stack – Vert.x och Mutiny.",sections:[{type:"text",heading:"Varför reaktiv?",content:`Traditionell Java-kod **blockerar en tråd** för varje HTTP-request. Om requesten väntar på en databas eller ett externt API sitter tråden och gör ingenting.

Med **reaktiv programmering** frigörs tråden medan den väntar och kan hantera andra requests. Resultatet är att applikationen klarar **fler samtida requests** med **färre resurser**.

Quarkus reaktiva stack bygger på:
• **Vert.x** – händelsedriven I/O-motor
• **Mutiny** – reaktiv programmering med \`Uni<T>\` och \`Multi<T>\``},{type:"info",heading:"Uni och Multi – de två primitiva typerna",content:"**`Uni<T>`** – representerar noll eller ett framtida värde (som `CompletableFuture` men bättre)\n• Används för: databasförfrågningar, HTTP-anrop, enskilda beräkningar\n\n**`Multi<T>`** – representerar en ström av noll till många värden (som `Flux` i Project Reactor)\n• Används för: streaming, Kafka-meddelanden, Server-Sent Events\n\nBåda är **lata** – inget händer förrän du prenumererar (`subscribe()`)."},{type:"code",heading:"Reaktiva REST-endpoints med Uni",content:`import io.smallrye.mutiny.Uni;
import jakarta.ws.rs.*;

@Path("/api/bocker")
@Produces(MediaType.APPLICATION_JSON)
public class BokResource {

    @Inject BokRepository bokRepo;

    // Reaktiv GET – tråden blockeras INTE
    @GET
    @Path("/{id}")
    public Uni<Bok> hamtaBok(@PathParam("id") Long id) {
        return bokRepo.findById(id)          // Returnerar Uni<Bok>
            .onItem().ifNull()
            .failWith(() -> new NotFoundException("Bok " + id + " ej hittad"));
    }

    // Kedja operationer
    @GET
    @Path("/{id}/recension")
    public Uni<String> hamtaRecension(@PathParam("id") Long id) {
        return bokRepo.findById(id)
            .onItem().transformToUni(bok ->
                recensionService.hamtaForBok(bok.titel)  // Andra asynkr. anrop
            );
    }

    // Multi – strömma alla böcker
    @GET
    @Produces(MediaType.SERVER_SENT_EVENTS)
    public Multi<Bok> strommaBocker() {
        return bokRepo.streamAll();
    }
}`,language:"java"},{type:"code",heading:"Vanliga Mutiny-operationer",content:`// Skapa en Uni
Uni<String> uni = Uni.createFrom().item("Hej!")
Uni<String> fran_fut = Uni.createFrom().completionStage(future);
Uni<Void> misslyckas = Uni.createFrom().failure(new RuntimeException("Fel"));

// Transformera värdet
uni.onItem().transform(s -> s.toUpperCase())    // Hej! -> HEJ!
   .onItem().transform(String::length)          // -> 4

// Hantera fel
uni.onFailure().recoverWithItem("standard")     // Återhämta med värde
   .onFailure(NotFoundException.class)
        .recoverWithNull()                      // null om inte hittad

// Kedja asynkrona anrop
bokRepo.findById(1L)
    .onItem().transformToUni(bok ->
        recensionService.hamta(bok)             // Annat Uni-anrop
    )
    .onItem().transform(rec -> "Betyg: " + rec.betyg)
    .subscribe().with(
        resultat -> log.info(resultat),         // Lyckades
        fel -> log.error("Fel: " + fel)         // Misslyckades
    );`,language:"java"},{type:"code",heading:"Reaktiv Panache",content:`import io.quarkus.hibernate.reactive.panache.PanacheRepository;
import io.smallrye.mutiny.Uni;

// Reaktivt repository – allt returnerar Uni/Multi
@ApplicationScoped
public class BokRepository implements PanacheRepository<Bok> {
    // findById, persist, listAll returnerar nu Uni/Multi!
}

// Reaktiv service
@ApplicationScoped
public class BokService {

    @Inject BokRepository bokRepo;

    @ReactiveTransactional               // Reaktiv transaktion
    public Uni<Bok> skapaBok(String titel) {
        Bok bok = new Bok();
        bok.titel = titel;
        return bokRepo.persist(bok);
    }

    public Uni<List<Bok>> toppBocker(int limit) {
        return bokRepo.find("ORDER BY betyg DESC")
            .page(0, limit)
            .list();
    }
}`,language:"java"},{type:"warning",content:"**Blockera aldrig** den reaktiva tråden! Anrop som `Thread.sleep()`, blockerande I/O eller `.await().indefinitely()` i en reaktiv kontext ger degraderad prestanda och kan krascha applikationen. Använd alltid reaktiva API:er i reaktiva metoder."}]},{id:"quarkus-native",title:"Native Build, Testning & Kubernetes",emoji:"🚀",estimatedMinutes:13,level:"expert",summary:"Kompilera till native executable med GraalVM, skriv effektiva tester och deploya till Kubernetes.",sections:[{type:"text",heading:"Native Image – Java som maskinkod",content:`**GraalVM Native Image** kompilerar Java-kod direkt till en **plattformsspecifik binärfil** – ingen JVM behövs vid körning.

Resultatet:
• Startar på **10–50 millisekunder** (JVM tar sekunder)
• Förbrukar **30–100 MB RAM** (JVM tar 200+ MB)
• Perfekt för **Kubernetes, serverless och microservices**

Priset är längre byggtid (1–5 minuter) och vissa begränsningar (reflection, dynamisk klassladdning).`},{type:"code",heading:"Bygg native executable",content:`# Kräver GraalVM installerat lokalt
./mvnw package -Pnative

# ELLER: bygg med Docker/Podman (inget lokal GraalVM behövs)
./mvnw package -Pnative -Dquarkus.native.container-build=true

# Kör den kompilerade binären (mycket snabbt!)
./target/my-app-1.0-runner

# Bygg en minimal Docker-image (distroless)
docker build -f src/main/docker/Dockerfile.native-micro -t my-app:native .

# Jämförelse med JVM-image:
# JVM image:    ~200 MB,  startar ~2 s
# Native image: ~50 MB,   startar ~0.02 s`,language:"bash"},{type:"code",heading:"Hantera reflection i native mode",content:`// Klasser som används via reflection måste registreras
import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection          // Tillåt reflection på denna klass
public class MinDto {
    public String namn;
    public int alder;
}

// Registrera externa klasser (t.ex. biblioteksberoenden)
// I META-INF/native-image/reflect-config.json:
// [
//   { "name": "com.externt.Klass",
//     "allDeclaredFields": true,
//     "allDeclaredMethods": true }
// ]

// Quarkus-tillägg sköter detta automatiskt för sina API:er
// Hibernate, Jackson, RESTEasy etc. är redan konfigurerade`,language:"java"},{type:"code",heading:"Testning med @QuarkusTest",content:`import io.quarkus.test.junit.QuarkusTest;
import io.restassured.RestAssured;
import org.junit.jupiter.api.*;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@QuarkusTest                            // Startar applikationen
class BokResourceTest {

    @Test
    void testaHamtaAllaBocker() {
        given()
            .when().get("/api/bocker")
            .then()
                .statusCode(200)
                .body("size()", greaterThan(0));
    }

    @Test
    void testaSkapaBok() {
        given()
            .contentType("application/json")
            .body("""{"titel":"Dune","forfattare":"Herbert"}""")
            .when().post("/api/bocker")
            .then()
                .statusCode(201)
                .body("titel", equalTo("Dune"));
    }
}

// Test av native executable (körs i CI):
@QuarkusIntegrationTest             // Testar den kompilerade native binären
class BokResourceNativeTest extends BokResourceTest { }`,language:"java"},{type:"code",heading:"Deploya till Kubernetes",content:`# Lägg till Kubernetes-tillägget
quarkus ext add kubernetes

# application.properties – Kubernetes-konfiguration
quarkus.kubernetes.namespace=min-namespace
quarkus.kubernetes.image-pull-policy=Always
quarkus.container-image.group=mitt-register
quarkus.container-image.name=min-app

# Bygg och deploya med ett kommando
./mvnw package -Dquarkus.kubernetes.deploy=true \\
               -Dquarkus.container-image.push=true

# Quarkus genererar automatiskt:
# - Deployment.yaml
# - Service.yaml
# - ConfigMap.yaml (från application.properties)
# - Liveness/Readiness probes (/q/health/live, /q/health/ready)`,language:"bash"},{type:"code",heading:"Health Checks och Metrics",content:`# Lägg till tilläggen
quarkus ext add smallrye-health smallrye-metrics

// Anpassad health check
import org.eclipse.microprofile.health.*;
import jakarta.enterprise.context.ApplicationScoped;

@Readiness                              // /q/health/ready
@ApplicationScoped
public class DatabaseHälsokontroll implements HealthCheck {

    @Inject DataSource datakalla;

    @Override
    public HealthCheckResponse call() {
        try {
            datakalla.getConnection().close();
            return HealthCheckResponse.up("databas");
        } catch (Exception e) {
            return HealthCheckResponse
                .builder("databas")
                .down()
                .withData("fel", e.getMessage())
                .build();
        }
    }
}

// Endpoints:
// /q/health       – alla hälsokontroller
// /q/health/live  – liveness (är appen vid liv?)
// /q/health/ready – readiness (klar att ta emot trafik?)
// /q/metrics      – Prometheus-metrics`,language:"java"},{type:"tip",content:"Använd **Quarkus Dev Services** med `@QuarkusTest` – testerna startar automatiskt en PostgreSQL-container via Testcontainers. Du slipper mocka databasen och får riktiga integrationstester utan konfiguration."}]}]},{id:"springboot",title:"Spring Boot",subtitle:"Det mest populära Java-ramverket – från grunder till molnbaserade microservices",color:"#6ee7b7",bgColor:"#022c22",icon:"🍃",level:"intermediate",lessons:[{id:"spring-intro",title:"Introduktion till Spring Boot",emoji:"🍃",estimatedMinutes:6,level:"beginner",summary:"Förstå vad Spring Boot är, hur det skiljer sig från Spring Framework och skapa ditt första projekt.",sections:[{type:"text",heading:"Vad är Spring Boot?",content:`**Spring Boot** är ett ramverk som förenklar skapandet av produktionsklara Java-applikationer. Det lanserades 2014 av Pivotal (numera VMware/Broadcom) och är idag det **mest använda Java-ramverket** i världen.

Spring Boot bygger ovanpå **Spring Framework** men eliminerar all manuell XML-konfiguration genom att använda **auto-konfiguration** – ramverket gissar vad du behöver baserat på vad som finns i classpath.`},{type:"info",heading:"Spring Boot vs Spring Framework",content:`Med **Spring Framework** konfigurerade du allt manuellt (XML eller @Configuration-klasser). Det var kraftfullt men krävde mycket boilerplate.

**Spring Boot** lägger till:
• **Auto-konfiguration** – lägger du till JPA-beroende konfigureras Hibernate automatiskt
• **Inbyggd server** – Tomcat, Jetty eller Undertow är inbyggda, ingen WAR-deployment behövs
• **Starters** – förkonfigurerade beroenden (\`spring-boot-starter-web\`, \`spring-boot-starter-data-jpa\`)
• **Actuator** – inbyggd hälsoövervakning och metrics`},{type:"code",heading:"Skapa ett projekt med Spring Initializr",content:`# Alternativ 1: Webbgränssnitt
# Besök: https://start.spring.io
# Välj: Maven, Java, Spring Boot 3.x
# Beroenden: Spring Web, Spring Data JPA, H2 Database

# Alternativ 2: Spring Boot CLI
spring init --dependencies=web,data-jpa,h2 my-app

# Alternativ 3: curl
curl https://start.spring.io/starter.zip \\
  -d dependencies=web,data-jpa,h2 \\
  -d name=my-app \\
  -o my-app.zip`,language:"bash"},{type:"code",heading:"Startpunkten – @SpringBootApplication",content:`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication   // = @Configuration + @EnableAutoConfiguration + @ComponentScan
public class MinApp {

    public static void main(String[] args) {
        SpringApplication.run(MinApp.class, args);
        // Startar inbyggd Tomcat på port 8080
    }
}`,language:"java"},{type:"code",heading:"application.properties – grundläggande konfiguration",content:`# Server
server.port=8080

# Databas (H2 in-memory för test/dev)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.h2.console.enabled=true          # /h2-console i webbläsaren

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update    # Uppdatera schema automatiskt
spring.jpa.show-sql=true                # Logga SQL-frågor

# Loggning
logging.level.org.springframework=INFO
logging.level.com.minapp=DEBUG`,language:"properties"},{type:"tip",content:'Använd **Spring Initializr** på `start.spring.io` för att skapa projekt – det är det snabbaste sättet. IntelliJ IDEA Ultimate har det inbyggt direkt i "New Project"-dialogen.'}]},{id:"spring-rest",title:"REST API med Spring MVC",emoji:"🌐",estimatedMinutes:9,level:"beginner",summary:"Bygg ett komplett REST API med @RestController, @GetMapping, validering och global felhantering.",sections:[{type:"text",heading:"Spring MVC och REST",content:"**Spring MVC** är Spring:s webbramverk. Med `@RestController` kombinerar du `@Controller` och `@ResponseBody` – alla metoder returnerar automatiskt JSON.\n\nSpring Boot konfigurerar **Jackson** automatiskt för JSON-serialisering. Du behöver bara definiera dina klasser och returtyper."},{type:"code",heading:"En komplett REST-kontroller",content:`import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.List;

@RestController
@RequestMapping("/api/bocker")          // Base path
public class BokController {

    private final BokService bokService;

    public BokController(BokService bokService) {  // Konstruktor-injektion
        this.bokService = bokService;
    }

    @GetMapping                         // GET /api/bocker
    public List<Bok> allaBocker() {
        return bokService.hamtaAlla();
    }

    @GetMapping("/{id}")                // GET /api/bocker/1
    public ResponseEntity<Bok> hamtaBok(@PathVariable Long id) {
        return bokService.hamtaEn(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping                        // POST /api/bocker
    @ResponseStatus(HttpStatus.CREATED) // 201 Created
    public Bok skapaBok(@RequestBody @Valid BokDto dto) {
        return bokService.skapa(dto);
    }

    @PutMapping("/{id}")
    public Bok uppdatera(@PathVariable Long id, @RequestBody @Valid BokDto dto) {
        return bokService.uppdatera(id, dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)  // 204 No Content
    public void taBort(@PathVariable Long id) {
        bokService.taBort(id);
    }
}`,language:"java"},{type:"code",heading:"Validering med Jakarta Bean Validation",content:`import jakarta.validation.constraints.*;

// DTO med valideringsregler
public record BokDto(
    @NotBlank(message = "Titel får inte vara tom")
    @Size(max = 200)
    String titel,

    @NotBlank
    String forfattare,

    @Min(value = 1000, message = "Ogiltigt år")
    @Max(value = 2100)
    int ar,

    @Email
    String kontaktEmail
) {}

// I controller: @Valid aktiverar valideringen
// @RequestBody @Valid BokDto dto`,language:"java"},{type:"code",heading:"Global felhantering med @ControllerAdvice",content:`import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;

@RestControllerAdvice               // Hanterar fel från alla controllers
public class GlobalFelhanterare {

    // Valideringsfel (400 Bad Request)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> hanteraValideringsfel(
        MethodArgumentNotValidException ex) {
        Map<String, String> fel = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(e -> fel.put(e.getField(), e.getDefaultMessage()));
        return fel;
    }

    // Resurs ej hittad (404)
    @ExceptionHandler(BokEjHittadException.class)
    public ResponseEntity<String> hanteraBokEjHittad(BokEjHittadException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    // Generellt fel (500)
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String hanteraGenerelltFel(Exception ex) {
        return "Internt serverfel: " + ex.getMessage();
    }
}`,language:"java"},{type:"tip",content:"Använd `@RequestParam` för query-parametrar (`?sida=2&storlek=10`) och `@PathVariable` för path-parametrar (`/bocker/42`). Spring binder dem automatiskt till rätt Java-typer."}]},{id:"spring-jpa",title:"Databas med Spring Data JPA",emoji:"🗄️",estimatedMinutes:10,level:"intermediate",summary:"Använd Spring Data JPA och Hibernate för att spara och hämta data utan att skriva SQL.",sections:[{type:"text",heading:"Spring Data JPA – repositories utan SQL",content:`**Spring Data JPA** genererar databasanrop automatiskt baserat på metodnamn i dina repository-interface. Du definierar ett interface och Spring skapar implementationen vid uppstart.

Under huven använder Spring Data JPA **Hibernate** som JPA-implementationen, men du arbetar med JPA-annotationer och behöver sällan tänka på Hibernate direkt.`},{type:"code",heading:"Entitet och Repository",content:`import jakarta.persistence.*;

@Entity
@Table(name = "bocker")
public class Bok {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String titel;

    private String forfattare;
    private int ar;

    // Getters, setters, konstruktorer...
    // Eller använd Lombok: @Data @NoArgsConstructor @AllArgsConstructor
}

// Repository – Spring genererar all SQL
import org.springframework.data.jpa.repository.JpaRepository;

public interface BokRepository extends JpaRepository<Bok, Long> {
    // Gratis: findById, findAll, save, delete, count, existsById...

    // Genererade metoder från metodnamnet:
    List<Bok> findByForfattare(String forfattare);
    List<Bok> findByArGreaterThan(int ar);
    Optional<Bok> findFirstByTitelContainingIgnoreCase(String del);
    boolean existsByTitelAndForfattare(String titel, String forfattare);
}`,language:"java"},{type:"code",heading:"JPQL och @Query",content:`import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;

public interface BokRepository extends JpaRepository<Bok, Long> {

    // JPQL (objektorienterat SQL)
    @Query("SELECT b FROM Bok b WHERE b.ar BETWEEN :fran AND :till ORDER BY b.titel")
    List<Bok> finnaMellanAr(@Param("fran") int fran, @Param("till") int till);

    // Nativ SQL (använd sparsamt)
    @Query(value = "SELECT * FROM bocker WHERE forfattare ILIKE %:namn%",
           nativeQuery = true)
    List<Bok> sokForfattare(@Param("namn") String namn);

    // Uppdatera med @Modifying
    @Modifying
    @Query("UPDATE Bok b SET b.ar = :nyttAr WHERE b.id = :id")
    int uppdateraAr(@Param("id") Long id, @Param("nyttAr") int nyttAr);
}`,language:"java"},{type:"code",heading:"Service-lager med @Transactional",content:`import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BokService {

    private final BokRepository bokRepo;

    public BokService(BokRepository bokRepo) {
        this.bokRepo = bokRepo;
    }

    @Transactional(readOnly = true)     // Optimerar för läsning
    public List<Bok> hamtaAlla() {
        return bokRepo.findAll(Sort.by("titel"));
    }

    @Transactional(readOnly = true)
    public Optional<Bok> hamtaEn(Long id) {
        return bokRepo.findById(id);
    }

    @Transactional                      // Skrivtransaktion
    public Bok skapa(BokDto dto) {
        Bok bok = new Bok();
        bok.setTitel(dto.titel());
        bok.setForfattare(dto.forfattare());
        bok.setAr(dto.ar());
        return bokRepo.save(bok);
    }

    @Transactional
    public void taBort(Long id) {
        if (!bokRepo.existsById(id)) {
            throw new BokEjHittadException(id);
        }
        bokRepo.deleteById(id);
    }
}`,language:"java"},{type:"info",heading:"Paginering och sortering",content:'Spring Data JPA har inbyggt stöd för paginering med `Pageable`:\n\n`Page<Bok> sida = bokRepo.findAll(PageRequest.of(0, 10, Sort.by("titel")))`\n\nResultatet innehåller `content` (listan), `totalElements`, `totalPages` och `hasNext()`.'}]},{id:"spring-security",title:"Spring Security & JWT",emoji:"🔒",estimatedMinutes:12,level:"intermediate",summary:"Skydda ditt API med Spring Security, JWT-tokens och rollbaserad åtkomstkontroll.",sections:[{type:"text",heading:"Spring Security – autentisering och auktorisering",content:`**Spring Security** är den standard security-lösningen för Spring-applikationer. Den hanterar:
• **Autentisering** – vem är du? (login, JWT, OAuth2)
• **Auktorisering** – vad får du göra? (roller, behörigheter)

För moderna REST API:er används **JWT (JSON Web Token)** – klienten loggar in och får ett token som skickas med varje request i \`Authorization: Bearer <token>\`-headern.`},{type:"code",heading:"SecurityFilterChain – konfigurera säkerheten",content:`import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SäkerhetsKonfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())          // REST API behöver inte CSRF
            .sessionManagement(session ->
                session.sessionCreationPolicy(STATELESS))  // Ingen session – JWT
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()   // Öppna endpoints
                .requestMatchers("/api/admin/**").hasRole("ADMIN")  // Endast admin
                .anyRequest().authenticated()                  // Allt annat kräver login
            )
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();    // Hasha lösenord med BCrypt
    }
}`,language:"java"},{type:"code",heading:"JWT-filter och token-hantering",content:`import io.jsonwebtoken.*;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Value("\${jwt.secret}")
    private String hemligNyckel;

    @Override
    protected void doFilterInternal(HttpServletRequest req,
                                    HttpServletResponse res,
                                    FilterChain chain) throws Exception {
        String header = req.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            try {
                Claims ansprak = Jwts.parserBuilder()
                    .setSigningKey(hemligNyckel.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

                String anvandarnamn = ansprak.getSubject();
                // Sätt autentisering i SecurityContext
                UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(
                        anvandarnamn, null,
                        List.of(new SimpleGrantedAuthority("ROLE_USER")));
                SecurityContextHolder.getContext().setAuthentication(auth);
            } catch (JwtException e) {
                res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }
        }
        chain.doFilter(req, res);
    }
}`,language:"java"},{type:"code",heading:"Login-endpoint och token-generering",content:`@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Inject AnvandarService anvandarService;
    @Value("\${jwt.secret}") String hemligNyckel;

    @PostMapping("/login")
    public ResponseEntity<TokenSvar> login(@RequestBody LoginDto dto) {
        // Verifiera lösenord
        Anvandare anvandare = anvandarService.verifiera(dto.anvandarnamn(), dto.losenord());

        // Skapa JWT-token (giltig 24h)
        String token = Jwts.builder()
            .setSubject(anvandare.getAnvandarnamn())
            .claim("roller", anvandare.getRoller())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86_400_000L))
            .signWith(SignatureAlgorithm.HS256, hemligNyckel.getBytes())
            .compact();

        return ResponseEntity.ok(new TokenSvar(token));
    }
}

record LoginDto(String anvandarnamn, String losenord) {}
record TokenSvar(String token) {}`,language:"java"},{type:"tip",content:'Lagra JWT-hemligheten i **miljövariabler** (aldrig i kod eller `application.properties` som checkas in). Använd `@Value("${jwt.secret}")` och sätt `JWT_SECRET` som miljövariabel i produktionsmiljön.'}]},{id:"spring-testing",title:"Testning med JUnit & Mockito",emoji:"🧪",estimatedMinutes:11,level:"intermediate",summary:"Skriv enhetstester, integrationstester och API-tester för Spring Boot-applikationer.",sections:[{type:"text",heading:"Testpyramiden i Spring Boot",content:"Spring Boot erbjuder tre testnivåer:\n\n• **Enhetstester** – testar enskild klass isolerat (snabba, många)\n• **Integrationstester** – testar flera lager ihop, `@SpringBootTest` startar applikationen\n• **API-tester** – testar HTTP-endpoints via `MockMvc` eller `WebTestClient`\n\n`spring-boot-starter-test` inkluderar **JUnit 5**, **Mockito**, **AssertJ** och **MockMvc** – allt du behöver."},{type:"code",heading:"Enhetstester med Mockito",content:`import org.junit.jupiter.api.*;
import org.mockito.*;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class BokServiceTest {

    @Mock
    BokRepository bokRepo;          // Fejkad implementation

    @InjectMocks
    BokService bokService;          // Klassen vi testar

    @Test
    void skapa_bok_sparas_och_returneras() {
        // Given – förbered testdata
        BokDto dto = new BokDto("Dune", "Frank Herbert", 1965, null);
        Bok sparadBok = new Bok(1L, "Dune", "Frank Herbert", 1965);
        when(bokRepo.save(any(Bok.class))).thenReturn(sparadBok);

        // When – kör metoden vi testar
        Bok resultat = bokService.skapa(dto);

        // Then – kontrollera resultatet
        assertThat(resultat.getTitel()).isEqualTo("Dune");
        assertThat(resultat.getId()).isNotNull();
        verify(bokRepo, times(1)).save(any(Bok.class));
    }

    @Test
    void hamta_ej_existerande_kastar_exception() {
        when(bokRepo.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> bokService.hamtaEn(99L))
            .isInstanceOf(BokEjHittadException.class);
    }
}`,language:"java"},{type:"code",heading:"API-tester med MockMvc",content:`import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BokController.class)     // Laddar bara webb-lagret (snabbt)
class BokControllerTest {

    @Autowired MockMvc mockMvc;
    @MockBean  BokService bokService; // Mockar service-lagret

    @Test
    void GET_alla_bocker_returnerar_200() throws Exception {
        when(bokService.hamtaAlla())
            .thenReturn(List.of(new Bok(1L, "Dune", "Herbert", 1965)));

        mockMvc.perform(get("/api/bocker")
                .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].titel").value("Dune"))
            .andExpect(jsonPath("$.length()").value(1));
    }

    @Test
    void POST_ogiltig_bok_returnerar_400() throws Exception {
        String ogiltigJson = """{"titel":"","forfattare":"","ar":0}""";

        mockMvc.perform(post("/api/bocker")
                .contentType(MediaType.APPLICATION_JSON)
                .content(ogiltigJson))
            .andExpect(status().isBadRequest());
    }
}`,language:"java"},{type:"code",heading:"Integrationstester med @SpringBootTest",content:`import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BokIntegrationsTest {

    @LocalServerPort int port;
    @Autowired TestRestTemplate restTemplate;

    @Test
    void skapa_och_hamta_bok() {
        // Skapa en bok via POST
        BokDto ny = new BokDto("Neuromancer", "Gibson", 1984, null);
        ResponseEntity<Bok> svar = restTemplate
            .postForEntity("/api/bocker", ny, Bok.class);

        assertThat(svar.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        Long id = svar.getBody().getId();

        // Hämta den skapade boken via GET
        Bok hamtad = restTemplate.getForObject("/api/bocker/" + id, Bok.class);
        assertThat(hamtad.getTitel()).isEqualTo("Neuromancer");
    }
}`,language:"java"},{type:"info",heading:"Testdatabas med H2",content:"Lägg till H2 som `test`-beroende i `pom.xml` och Spring Boot byter automatiskt till en **in-memory H2-databas** under tester. Ingen PostgreSQL behövs vid testning.\n\nVill du testa mot riktig databas? Använd **Testcontainers** med `@Testcontainers` och `@Container` – det startar en riktig PostgreSQL i Docker under testerna."}]},{id:"spring-avancerat",title:"WebFlux, Actuator & Kubernetes",emoji:"🚀",estimatedMinutes:13,level:"expert",summary:"Reaktiv programmering med WebFlux, produktionsövervakning med Actuator och driftsättning på Kubernetes.",sections:[{type:"text",heading:"Spring WebFlux – reaktivt Spring",content:`**Spring WebFlux** är Spring:s reaktiva webbramverk – ett alternativ till Spring MVC för **hög-konkurrens**-scenarion.

Isället för en tråd per request används **händelsedriven I/O** med **Project Reactor**:
• \`Mono<T>\` – noll eller ett framtida värde
• \`Flux<T>\` – en ström av noll till många värden

Använd WebFlux när du har: streaming, SSE, WebSocket, eller väldigt många samtida anslutningar.`},{type:"code",heading:"Reaktiv controller med WebFlux",content:`import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bocker")
public class BokController {

    private final BokRepository bokRepo;   // R2DBC repository (reaktivt)

    // Mono – ett svar
    @GetMapping("/{id}")
    public Mono<ResponseEntity<Bok>> hamtaBok(@PathVariable Long id) {
        return bokRepo.findById(id)
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    // Flux – ström av svar
    @GetMapping
    public Flux<Bok> allaBocker() {
        return bokRepo.findAll();
    }

    // Server-Sent Events – strömma uppdateringar
    @GetMapping(value = "/strom", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Bok> strommaBocker() {
        return bokRepo.findAll()
            .delayElements(Duration.ofMillis(100));  // Skicka en per 100ms
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Bok> skapaBok(@RequestBody @Valid BokDto dto) {
        return bokRepo.save(new Bok(dto));
    }
}`,language:"java"},{type:"code",heading:"Spring Boot Actuator – hälsa och metrics",content:`# pom.xml: spring-boot-starter-actuator

# application.properties
management.endpoints.web.exposure.include=health,info,metrics,prometheus
management.endpoint.health.show-details=always

# Endpoints som skapas automatiskt:
# GET /actuator/health    – applikationshälsa (UP/DOWN)
# GET /actuator/info      – applikationsinfo
# GET /actuator/metrics   – lista tillgängliga metrics
# GET /actuator/metrics/jvm.memory.used  – specifik metric
# GET /actuator/prometheus  – Prometheus-format (kräver Micrometer)`,language:"properties"},{type:"code",heading:"Anpassade health checks och metrics",content:`import org.springframework.boot.actuate.health.*;
import io.micrometer.core.instrument.MeterRegistry;

// Anpassad hälsokontroll
@Component
public class DatabasHalsa implements HealthIndicator {

    private final DataSource ds;

    @Override
    public Health health() {
        try {
            ds.getConnection().close();
            return Health.up().withDetail("databas", "nåbar").build();
        } catch (Exception e) {
            return Health.down().withDetail("fel", e.getMessage()).build();
        }
    }
}

// Anpassade metrics med Micrometer
@Service
public class BokService {

    private final Counter bokCounter;

    public BokService(MeterRegistry registry) {
        this.bokCounter = Counter.builder("bocker.skapade")
            .description("Antal skapade böcker")
            .register(registry);
    }

    public Bok skapa(BokDto dto) {
        Bok bok = bokRepo.save(new Bok(dto));
        bokCounter.increment();             // Öka räknaren
        return bok;
    }
}`,language:"java"},{type:"code",heading:"Driftsätta på Kubernetes",content:`# application.properties – miljövariabler i Kubernetes
spring.datasource.url=\${DB_URL}
spring.datasource.username=\${DB_USER}
spring.datasource.password=\${DB_PASSWORD}

# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bok-app
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: bok-app
        image: mitt-register/bok-app:1.0
        ports:
        - containerPort: 8080
        env:
        - name: DB_URL
          valueFrom:
            secretKeyRef:
              name: db-hemligheter
              key: url
        # Actuator health för Kubernetes probes
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 30
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080`,language:"yaml"},{type:"tip",content:"Aktivera **liveness** och **readiness** probes separat med `management.endpoint.health.probes.enabled=true`. Kubernetes använder `/actuator/health/liveness` för att avgöra om en pod ska startas om, och `/actuator/health/readiness` för att avgöra om trafik ska skickas dit."}]}]}],Pn=[{id:"java-basics",title:"Java – Basics",color:"#1e40af",icon:"☕",questions:[{id:101,question:"What is Java and what makes it platform-independent?",answer:`Java is a compiled, object-oriented language. Source code (.java) is compiled by javac into bytecode (.class). The JVM (Java Virtual Machine) interprets and executes that bytecode on any OS.

"Write once, run anywhere" — the JVM is the portability layer. Each OS has its own JVM implementation (HotSpot, OpenJ9, etc.) but all understand the same bytecode format.`,tip:"Know the difference: JDK (compiler + JRE), JRE (JVM + standard library), JVM (execution engine)."},{id:102,question:"What are the eight primitive types in Java?",answer:`byte (8-bit), short (16-bit), int (32-bit), long (64-bit), float (32-bit IEEE 754), double (64-bit IEEE 754), char (16-bit Unicode), boolean (true/false).

Primitives are stored on the stack (or inline in an object on the heap). They have no methods and cannot be null. Each has a corresponding wrapper class: Integer, Double, Boolean, etc.`},{id:103,question:"What is the difference between == and .equals()?",answer:`== compares references (memory addresses) for objects, or values for primitives.
.equals() compares logical equality — what the object considers "equal."

String s1 = new String("hi");
String s2 = new String("hi");
s1 == s2     // false — different objects
s1.equals(s2) // true — same content

Always use .equals() for objects. For null-safety: Objects.equals(a, b).`},{id:104,question:"What are access modifiers in Java?",answer:`• public — accessible everywhere
• protected — same package + subclasses
• (default/package-private) — same package only
• private — class only

Rule of thumb: use the most restrictive modifier that still works. Fields should almost always be private; expose behaviour through methods.`},{id:105,question:"What is a constructor and what is constructor overloading?",answer:`A constructor initialises an object when it is created with new. It has the same name as the class and no return type.

Constructor overloading means having multiple constructors with different parameter lists. One constructor can call another with this(...):

public User(String name) { this(name, 0); }
public User(String name, int age) { ... }

If no constructor is written, Java provides a no-arg default constructor automatically.`},{id:106,question:"Explain the four pillars of OOP in Java.",answer:`1. Encapsulation — hide internal state behind private fields and public methods (getters/setters).
2. Inheritance — a subclass extends a parent class, reusing and overriding behaviour (extends keyword).
3. Polymorphism — the same method call behaves differently based on the runtime type (method overriding). Also: method overloading (compile-time).
4. Abstraction — expose only what is necessary; hide implementation details (abstract classes, interfaces).`},{id:107,question:"What is the difference between an abstract class and an interface?",answer:`Abstract class:
• Can have fields (state), constructors, concrete methods.
• A class can extend only ONE abstract class.
• Use when subclasses share implementation.

Interface:
• No state (only constants). Since Java 8: default and static methods. Since Java 9: private methods.
• A class can implement MANY interfaces.
• Use to define a contract (capability).

If in doubt: prefer interfaces for flexibility.`},{id:108,question:'What is the "final" keyword and where can you use it?',answer:`• final variable — value cannot be reassigned after initialisation (effectively a constant).
• final method — cannot be overridden by subclasses.
• final class — cannot be subclassed (e.g., String, Integer).

final fields that are also static are compile-time constants: public static final int MAX = 100;`},{id:109,question:"How does String work in Java? What is the String pool?",answer:`String is immutable — every "modification" creates a new object. Strings created with double quotes (e.g., "hello") are interned: the JVM stores one shared instance in the String pool (inside the heap since Java 7).

String s1 = "hi";    // from pool
String s2 = "hi";    // same pool object → s1 == s2 is true
String s3 = new String("hi"); // forced new object

Use StringBuilder for mutable string building in loops.`},{id:110,question:"What is the difference between static and instance members?",answer:`static members (fields, methods) belong to the class, not to any object. They are shared across all instances and accessible without creating an object: Math.max(), Collections.sort().

Instance members belong to each individual object and require an instance to be accessed.

static methods cannot use "this" and cannot call non-static methods directly.`},{id:111,question:"What are arrays in Java and what are their limitations?",answer:`An array is a fixed-size, ordered container of elements of the same type.
int[] nums = new int[5]; or int[] nums = {1, 2, 3};

Limitations:
• Fixed size — cannot grow or shrink.
• Only stores one type.
• No built-in methods for searching, sorting (need Arrays utility).

For resizable collections use ArrayList; for primitive-heavy performance-critical code, arrays are still fastest.`},{id:112,question:"What is autoboxing and unboxing?",answer:`Autoboxing is the automatic conversion from a primitive to its wrapper class.
Unboxing is the reverse.

List<Integer> list = new ArrayList<>();
list.add(42); // autoboxing: int → Integer
int x = list.get(0); // unboxing: Integer → int

Caveat: NullPointerException if you unbox a null wrapper. Also: Integer.valueOf() is cached for -128..127, so == can be misleadingly true in that range.`},{id:113,question:"What is the difference between method overloading and overriding?",answer:`Overloading (compile-time polymorphism): same method name, different parameter types/count in the SAME class. Resolved at compile time.

void print(int x) {}
void print(String s) {} // overloaded

Overriding (runtime polymorphism): subclass provides its own implementation of a method declared in the parent. Annotate with @Override. Resolved at runtime based on actual object type.`},{id:114,question:"What are enums in Java?",answer:`Enums are type-safe named constants. They are a special class under the hood.

enum Day { MON, TUE, WED, ... }

Enums can have fields, methods, and constructors:
enum Planet { EARTH(5.97e24, 6.37e6); final double mass, radius; ... }

Useful with switch expressions. Enums are singletons — each constant is exactly one instance.`},{id:115,question:'What does "this" and "super" refer to in Java?',answer:`"this" refers to the current object instance. Uses: disambiguate fields from parameters, call another constructor (this(...)).

"super" refers to the parent class. Uses: call parent constructor (must be first line in constructor), call overridden parent method (super.method()), access hidden parent field.

Neither can be used in static context.`}]},{id:"java-intermediate",title:"Java – Intermediate",color:"#0369a1",icon:"📚",questions:[{id:121,question:"What is the Java Collections Framework?",answer:`A hierarchy of interfaces and classes for storing and manipulating groups of objects.

Core interfaces:
• Collection → List, Set, Queue
• Map (separate hierarchy)

Key implementations:
• ArrayList – dynamic array, fast random access O(1)
• LinkedList – doubly linked, fast insert/delete at ends O(1)
• HashSet – O(1) add/contains, unordered
• TreeSet – O(log n), sorted
• HashMap – O(1) get/put average
• TreeMap – O(log n), sorted by key
• LinkedHashMap – insertion-order HashMap`},{id:122,question:"How does HashMap work internally?",answer:`HashMap uses an array of "buckets." The key's hashCode() determines the bucket index (index = hash & (n-1)).

Collisions are handled by a linked list in each bucket. Since Java 8, when a bucket exceeds 8 entries, it converts to a balanced red-black tree (O(log n) instead of O(n)).

Default load factor is 0.75. When (size / capacity) > 0.75, the map resizes (doubles) and rehashes.

Always override both hashCode() and equals() together on key objects.`},{id:123,question:"What are generics in Java and why are they useful?",answer:`Generics allow writing type-safe code that works with different types without casting.

List<String> list = new ArrayList<>();
list.add("hello");
String s = list.get(0); // no cast needed

Type erasure: generic type info is removed at compile time; at runtime there is no difference between List<String> and List<Integer>.

Wildcards: List<?> (unknown), List<? extends Number> (upper bound), List<? super Integer> (lower bound — for producers use extends, for consumers use super: PECS rule).`},{id:124,question:"What are lambda expressions and functional interfaces?",answer:`A lambda is an anonymous function: (params) -> body.
A functional interface is any interface with exactly one abstract method (annotate with @FunctionalInterface).

Built-in functional interfaces (java.util.function):
• Predicate<T> — T → boolean
• Function<T,R> — T → R
• Consumer<T> — T → void
• Supplier<T> — () → T
• BiFunction<T,U,R>

Lambdas can capture effectively final variables from the enclosing scope.`},{id:125,question:"What are Java Streams and how do they work?",answer:`Streams (Java 8+) provide a declarative pipeline for processing collections.

Stages:
1. Source: collection.stream() or Stream.of(...)
2. Intermediate (lazy): filter(), map(), flatMap(), sorted(), distinct(), limit()
3. Terminal (triggers execution): collect(), forEach(), reduce(), count(), findFirst()

List<String> names = employees.stream()
  .filter(Employee::isActive)
  .map(Employee::getName)
  .sorted()
  .collect(Collectors.toList());

Streams are lazy — nothing runs until a terminal operation is called.`},{id:126,question:"What is Optional and how should you use it?",answer:`Optional<T> is a container that may or may not hold a non-null value. Replaces returning null.

Creating: Optional.of(val), Optional.ofNullable(val), Optional.empty()
Consuming: isPresent(), get(), orElse(default), orElseGet(supplier), orElseThrow(), ifPresent(consumer), map(), flatMap()

Do NOT use Optional as a field or parameter — it is designed for return types only. Avoid .get() without checking — use orElseThrow() for explicit failure.`},{id:127,question:"Explain checked vs unchecked exceptions.",answer:`Checked exceptions extend Exception (but not RuntimeException). The compiler forces you to catch or declare them with throws. Examples: IOException, SQLException.

Unchecked exceptions extend RuntimeException. No compiler enforcement. Examples: NullPointerException, IllegalArgumentException, ArrayIndexOutOfBoundsException.

Modern Java style: prefer unchecked for most application code. Use checked when callers are expected to meaningfully handle the failure (e.g., file not found).

Always create custom exception classes that carry context.`},{id:128,question:"What is the try-with-resources statement?",answer:`Automatically closes resources that implement AutoCloseable, even if an exception is thrown.

try (FileInputStream fis = new FileInputStream("file.txt");
     BufferedReader br = new BufferedReader(new InputStreamReader(fis))) {
  String line = br.readLine();
} // fis and br are closed here automatically

Resources are closed in reverse order of declaration. Replaces the verbose try/catch/finally boilerplate. Essential for I/O, database connections, and sockets.`},{id:129,question:"What is method reference syntax in Java?",answer:`Method references are shorthand lambdas that point directly to a method.

4 forms:
• Static: Integer::parseInt  → s -> Integer.parseInt(s)
• Instance (on type): String::toUpperCase  → s -> s.toUpperCase()
• Instance (on object): myObj::doWork  → () -> myObj.doWork()
• Constructor: ArrayList::new  → () -> new ArrayList<>()

They improve readability when the lambda does nothing but call an existing method.`},{id:130,question:"What are the key additions in Java 8?",answer:`• Lambda expressions and functional interfaces
• Stream API
• Optional
• Default and static interface methods
• New Date/Time API (java.time) — LocalDate, LocalDateTime, ZonedDateTime, Duration, Period
• CompletableFuture
• Nashorn JavaScript engine (removed in Java 15)
• Base64 encoding in standard library
• Method references

Java 8 is the most impactful Java release since Java 5.`},{id:131,question:"What is the Java Date/Time API (java.time)?",answer:`Introduced in Java 8, replacing the broken java.util.Date and Calendar.

• LocalDate — date without time (2024-01-15)
• LocalTime — time without date (14:30:00)
• LocalDateTime — date + time, no timezone
• ZonedDateTime — date + time + timezone
• Instant — machine timestamp (epoch milliseconds)
• Duration — amount of time in seconds/nanos
• Period — amount of time in years/months/days
• DateTimeFormatter — thread-safe formatting

All classes are immutable and thread-safe.`},{id:132,question:"How does the Iterator and for-each pattern work?",answer:`Any class implementing Iterable<T> can be used in a for-each loop. Iterable requires iterator() which returns an Iterator<T> with hasNext() and next().

for (String s : list) { ... }
// equivalent to:
Iterator<String> it = list.iterator();
while (it.hasNext()) { String s = it.next(); ... }

Use iterator.remove() to safely remove elements during iteration. ConcurrentModificationException is thrown if you modify a collection structurally during iteration without using the iterator.`},{id:133,question:"What is the Comparable vs Comparator interface?",answer:`Comparable<T> (java.lang): defines the natural ordering of a class. Implement compareTo(T other). Sorts the class itself.

Comparator<T> (java.util): defines an external ordering. Implement compare(T o1, T o2). Can sort any class without modifying it.

Comparator.comparing(Employee::getSalary).thenComparing(Employee::getName)

Use Comparable for a single, natural order. Use Comparator for multiple or ad-hoc orderings.`},{id:134,question:"What are records in Java (Java 14+)?",answer:`Records are immutable data classes. The compiler generates the constructor, getters, equals(), hashCode(), and toString() automatically.

record Point(int x, int y) {}

Point p = new Point(3, 4);
p.x();  // getter

Records cannot extend other classes (they implicitly extend Record), fields are final, but they can implement interfaces and have extra methods.

Ideal for DTOs, value objects, and data carriers.`},{id:135,question:"What is the var keyword in Java (Java 10+)?",answer:`var enables local variable type inference — the compiler infers the type from the right-hand side.

var list = new ArrayList<String>(); // inferred as ArrayList<String>
var name = "Alice";                  // inferred as String

var is NOT a runtime type — it is resolved at compile time. Restrictions: cannot use as field, method parameter, or return type. Cannot be used with null literals or uninitialized variables.

Use where the type is obvious from context; avoid when it harms readability.`}]},{id:"java-threading",title:"Java – Threading & Concurrency",color:"#b45309",icon:"🧵",questions:[{id:141,question:"What is a thread and how do you create one in Java?",answer:`A thread is an independent path of execution within a process. All threads share the same heap but have their own stack.

3 ways to create threads:
1. Extend Thread: class MyThread extends Thread { public void run() {...} }
2. Implement Runnable: new Thread(() -> {...}).start();
3. Implement Callable<V> (returns a value, can throw): submit to an ExecutorService → returns a Future<V>

Always call start() — not run() directly. run() just executes the method on the current thread.`},{id:142,question:"What are the thread lifecycle states in Java?",answer:`A Thread can be in one of these states (Thread.State enum):

1. NEW — created, start() not yet called
2. RUNNABLE — eligible to run or currently running on CPU
3. BLOCKED — waiting to acquire a synchronized monitor lock
4. WAITING — waiting indefinitely (Object.wait(), Thread.join() with no timeout)
5. TIMED_WAITING — waiting with a timeout (Thread.sleep(ms), wait(ms), join(ms))
6. TERMINATED — run() has completed

Use Thread.getState() or jstack to inspect live threads.`},{id:143,question:"What is race condition and how does synchronization fix it?",answer:`A race condition occurs when two threads access shared mutable state concurrently and the final result depends on the scheduling order.

Example: two threads incrementing a shared counter — each reads, increments, and writes back, so increments can be lost.

synchronized fixes it by making the code block mutually exclusive — only one thread can hold the monitor lock at a time:

synchronized (this) { count++; }
or: synchronized method:
public synchronized void increment() { count++; }`},{id:144,question:"What is the Java Memory Model (JMM)?",answer:`The JMM defines the rules for how threads see each other's writes to shared memory.

Without synchronization, CPUs and JIT may cache values in registers or CPU caches — one thread may not see updates made by another.

The JMM guarantees visibility through happens-before relationships:
• Unlocking a monitor happens-before any subsequent lock of that monitor
• A write to a volatile field happens-before any subsequent read of that field
• Thread.start() happens-before any action in the started thread
• All actions in a thread happen-before Thread.join() returns`},{id:145,question:"What does volatile do and when is it not enough?",answer:`volatile guarantees:
1. Visibility — writes are immediately flushed to main memory; reads always come from main memory.
2. Prevents instruction reordering around the volatile access.

volatile is NOT enough for compound operations like check-then-act or read-modify-write:
private volatile int count = 0;
count++; // NOT atomic: read, increment, write — three steps

For atomic compound operations use AtomicInteger, AtomicReference, or synchronized.`},{id:146,question:"What is deadlock and how do you prevent it?",answer:`Deadlock: two or more threads each hold a lock the other needs, so all are blocked forever.

Thread A: locks X, waits for Y
Thread B: locks Y, waits for X

Prevention strategies:
1. Lock ordering — always acquire locks in the same global order
2. Lock timeout — use ReentrantLock.tryLock(timeout)
3. Avoid nested locks where possible
4. Use higher-level concurrency utilities (ConcurrentHashMap, queues) that avoid explicit locking

Detect with jstack — look for "deadlock" in the output.`},{id:147,question:"What is ExecutorService and why use it over raw threads?",answer:`ExecutorService manages a pool of threads and a queue of tasks. Creating threads is expensive; a pool reuses them.

ExecutorService ex = Executors.newFixedThreadPool(4);
Future<String> f = ex.submit(() -> computeResult());
ex.shutdown();

Factory methods:
• newFixedThreadPool(n) — n threads
• newCachedThreadPool() — grows/shrinks as needed
• newSingleThreadExecutor() — one thread, sequential
• newScheduledThreadPool(n) — for scheduled/recurring tasks

Always shutdown() the executor; otherwise the JVM may not exit.`},{id:148,question:"What is the difference between Future and CompletableFuture?",answer:`Future<V>: represents a pending result. You can check isDone() or call get() (blocking). No callback/composition support.

CompletableFuture<V> (Java 8+): a Future you can compose:
• supplyAsync(() -> fetch())  — run async
• thenApply(r -> transform(r))  — map result
• thenCompose(r -> anotherAsync(r))  — flatMap
• thenCombine(other, (a,b) -> merge(a,b))  — combine two futures
• exceptionally(ex -> fallback)  — handle errors
• allOf(f1, f2, f3).join()  — wait for all

Non-blocking and composable — the preferred choice.`},{id:149,question:"What are atomic classes and when do you use them?",answer:`java.util.concurrent.atomic provides lock-free thread-safe variables using CPU-level compare-and-swap (CAS).

Key classes:
• AtomicInteger / AtomicLong — int/long with atomic ops
• AtomicBoolean
• AtomicReference<V> — object reference
• AtomicStampedReference — reference + version stamp (prevent ABA problem)
• LongAdder / LongAccumulator — high-contention counters (faster than AtomicLong under heavy write)

AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet(); // atomic
counter.compareAndSet(expected, update); // CAS`},{id:150,question:"What is ReentrantLock and how does it differ from synchronized?",answer:`ReentrantLock is an explicit lock in java.util.concurrent.locks.

Advantages over synchronized:
• tryLock() — attempt without blocking; tryLock(timeout, unit) with timeout
• lockInterruptibly() — can be interrupted while waiting
• Fairness policy: new ReentrantLock(true) — longest-waiting thread gets the lock first
• Multiple Condition objects for fine-grained wait/notify

ReentrantLock lock = new ReentrantLock();
lock.lock();
try { ... } finally { lock.unlock(); } // always unlock in finally

Downside: must manually unlock — forgetting causes deadlock.`},{id:151,question:"What is ReadWriteLock and StampedLock?",answer:`ReadWriteLock (ReentrantReadWriteLock): multiple concurrent readers OR one exclusive writer. Ideal for read-heavy scenarios.

readLock().lock() — shared; multiple threads allowed simultaneously
writeLock().lock() — exclusive; all other threads block

StampedLock (Java 8+): higher performance. Offers:
• writeLock() / readLock() — like ReadWriteLock
• tryOptimisticRead() — read without acquiring a lock; validate() afterward. If not valid, fall back to read lock.

StampedLock is not reentrant — do not call it from code that already holds the lock.`},{id:152,question:"What are BlockingQueue implementations and when do you use them?",answer:`BlockingQueue bridges producer and consumer threads. put() blocks if full; take() blocks if empty.

Implementations:
• ArrayBlockingQueue — bounded, backed by array, fair/unfair
• LinkedBlockingQueue — optionally bounded, usually higher throughput
• PriorityBlockingQueue — unbounded, priority-ordered
• SynchronousQueue — no storage; each put must pair with a take
• DelayQueue — elements become available after a delay

Use in the Producer-Consumer pattern to decouple producers from consumers without busy-waiting.`},{id:153,question:"What are CountDownLatch, CyclicBarrier, and Semaphore?",answer:`CountDownLatch: one-shot gate. N threads call countDown(); waiting thread(s) block on await() until count reaches 0.
Typical use: wait for N services to initialise before starting.

CyclicBarrier: all N threads must call await(); all are released together. Can be reset and reused.
Typical use: coordinate phases of parallel computation.

Semaphore: controls access to a limited resource. acquire() decrements permits (blocks if 0); release() increments.
Typical use: connection pool limiting concurrent access to 10 DB connections.`},{id:154,question:"What is ThreadLocal and when is it useful?",answer:`ThreadLocal<T> provides each thread its own independent copy of a variable — threads do not share the value.

private static final ThreadLocal<DateFormat> formatter =
  ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyy-MM-dd"));

Use cases:
• Storing per-request context (user ID, transaction ID) without passing it through every method call
• Thread-safety for non-thread-safe objects like SimpleDateFormat

Critical: always remove() the value in a finally block when using thread pools — threads are reused and values leak between requests.`},{id:155,question:"What is the ForkJoinPool and parallel streams?",answer:`ForkJoinPool (Java 7+) implements a work-stealing algorithm. Tasks recursively split (fork) into sub-tasks, results are joined. Used internally by parallel streams and CompletableFuture.

RecursiveTask<V> (returns result) or RecursiveAction (no result).

Parallel streams: list.parallelStream().filter(...).map(...).collect(...)
They use the common ForkJoinPool (size = CPU cores - 1).

Use for CPU-bound work that can be divided. Avoid for I/O-bound tasks — you will exhaust threads. Set pool size carefully with -Djava.util.concurrent.ForkJoinPool.common.parallelism=N.`},{id:156,question:"What are virtual threads (Project Loom, Java 21)?",answer:`Virtual threads are lightweight threads managed by the JVM, not the OS. You can create millions of them without exhausting OS thread limits.

Thread.ofVirtual().start(() -> handleRequest());
or: Executors.newVirtualThreadPerTaskExecutor()

Virtual threads are mounted on carrier (platform) threads. When a virtual thread blocks on I/O, the carrier thread is released to run other virtual threads.

Key benefit: write simple blocking code (no callbacks/reactive) with the throughput of async programming.
Not suitable for CPU-bound work — use platform threads for that.`},{id:157,question:"How do you safely publish objects to other threads?",answer:`Safe publication ensures other threads see the fully constructed object.

Methods:
1. Initialise a field in a static initialiser (class loading is thread-safe)
2. Store in a volatile field
3. Store in a final field (constructor guarantees visibility)
4. Use proper synchronization (synchronized block, Lock)
5. Use a concurrent collection (ConcurrentHashMap, BlockingQueue)

Incorrect publication: storing a reference in a shared variable without synchronization can expose a partially constructed object (fields at default values).`},{id:158,question:"What is livelock and starvation?",answer:`Livelock: threads are not blocked but continuously change state in response to each other without making progress. Like two people in a corridor both stepping aside in the same direction forever.

Starvation: a thread never gets CPU time because other higher-priority threads or unfair locking always win.

Prevention:
• Use fair locks: new ReentrantLock(true)
• Avoid holding locks for long periods
• Do not use Thread.setPriority() to discriminate heavily
• Use timeouts to break cycles`},{id:159,question:"What is the happens-before relationship and why does it matter?",answer:`happens-before (hb) is a formal guarantee that actions in one thread are visible to another in the correct order.

Key rules:
• Program order: each action in a thread hb the next action in that thread
• Monitor lock: unlock hb subsequent lock of same monitor
• volatile write: hb subsequent volatile read of same field
• Thread.start(): hb all actions in the started thread
• All actions hb Thread.join() on that thread

Without a hb edge, data races are possible and the JVM is free to reorder operations — leading to subtle, hard-to-reproduce bugs.`},{id:160,question:"What is structured concurrency (Java 21 preview)?",answer:`Structured concurrency (JEP 428/453) treats multiple concurrent tasks as a unit — they start together and complete together, simplifying cancellation and error handling.

try (var scope = StructuredTaskScope.ShutdownOnFailure()) {
  Future<User> user = scope.fork(() -> fetchUser(id));
  Future<Order> order = scope.fork(() -> fetchOrder(id));
  scope.join().throwIfFailed();
  return new Result(user.resultNow(), order.resultNow());
}

If one subtask fails, the scope cancels the others. Compare to CompletableFuture.allOf() but with better error propagation and resource safety.`}]},{id:"java-internals",title:"Java – How Java is Built",color:"#065f46",icon:"🔧",questions:[{id:166,question:"How does Java code go from source to execution?",answer:`1. Write source code: Hello.java
2. javac compiles it to bytecode: Hello.class (platform-neutral binary)
3. JVM loads the .class file via the ClassLoader
4. Bytecode Verifier checks the bytecode is safe
5. Interpreter executes bytecode immediately
6. JIT (Just-in-Time) compiler monitors hot methods and compiles them to native machine code
7. Garbage Collector manages memory automatically

The key insight: compilation is to bytecode (not machine code), and the JVM bridges to native at runtime.`},{id:167,question:"What is bytecode and how can you read it?",answer:`Bytecode is a compact binary instruction set for the JVM — a stack-based virtual machine. Each instruction is 1 byte opcode + optional operands.

Examples: iload_1 (load int from local var 1), iadd (add two ints from stack), invokevirtual (call virtual method), return.

View bytecode:
javap -c Hello.class
javap -verbose Hello.class

Bytecode is the lingua franca — Kotlin, Scala, Groovy, Clojure all compile to .class files and run on the JVM.`},{id:168,question:"Explain the JVM architecture.",answer:`The JVM has three main subsystems:

1. Class Loader Subsystem — loads, links (verify → prepare → resolve), and initialises class files

2. Runtime Data Areas:
   • Heap (shared) — objects and arrays
   • Method Area / Metaspace (shared) — class metadata, static fields, constants
   • JVM Stack (per-thread) — frames for each method call
   • PC Register (per-thread) — current instruction pointer
   • Native Method Stack (per-thread) — for JNI/native methods

3. Execution Engine — interpreter + JIT + GC`},{id:169,question:"What are the ClassLoader hierarchy and delegation model?",answer:`3 built-in ClassLoaders (parent-delegation model):
1. Bootstrap ClassLoader — loads core JDK classes (java.lang.*) from rt.jar / modules. Written in C++.
2. Platform/Extension ClassLoader — loads java.sql, javax.*, etc.
3. Application ClassLoader — loads classes from the classpath (your code).

When loading a class, a ClassLoader first delegates to its parent. Only if the parent cannot find it does it search itself. This prevents classes from shadowing core JDK classes.

You can write custom ClassLoaders for hot-reload, encryption, or plugin isolation.`},{id:170,question:"How does JIT compilation work in HotSpot?",answer:`HotSpot JVM uses two JIT compilers:
• C1 (Client Compiler) — fast compilation, lighter optimisations. Used first.
• C2 (Server Compiler) — slower compilation, aggressive optimisations (inlining, loop unrolling, escape analysis, SIMD). Used for hot code.

Tiered compilation (default since Java 8):
• Tier 0: interpreter (collects profiling data)
• Tier 1–3: C1 with increasing optimisation
• Tier 4: C2 for "hot" methods

A method is considered hot after ~10,000 invocations. The JIT can de-optimise (decompile back) if assumptions break (e.g., a new subclass is loaded).`},{id:171,question:"What is the JVM Heap structure and Garbage Collection generations?",answer:`Heap (default GC layout):
• Young Generation
  – Eden: new objects are allocated here
  – Survivor S0 and S1: objects that survive GC are copied between these
• Old Generation (Tenured): long-lived objects promoted from Young Gen
• Metaspace (off-heap): class metadata (replaced PermGen in Java 8)

Minor GC: cleans Young Gen — fast, frequent
Major GC: cleans Old Gen — slower
Full GC: cleans everything — most expensive, causes stop-the-world pauses

Most objects die young — the generational hypothesis behind this design.`},{id:172,question:"What GC algorithms are available in the JVM?",answer:`• Serial GC (-XX:+UseSerialGC) — single-threaded, stop-the-world. Good for small heaps.
• Parallel GC (-XX:+UseParallelGC) — multi-threaded. High throughput, longer pauses. Default before Java 9.
• G1GC (-XX:+UseG1GC) — divides heap into equal regions. Aims for predictable pause targets. Default since Java 9.
• ZGC (-XX:+UseZGC) — sub-millisecond pauses, concurrent. Production-ready since Java 15. Scales to TB heaps.
• Shenandoah — concurrent like ZGC, from Red Hat. Low-pause.

Choose based on: latency requirements, throughput needs, and heap size.`},{id:173,question:"What is escape analysis and how does it affect performance?",answer:`Escape analysis is a JIT optimisation that determines whether an object "escapes" a method or thread.

If an object does NOT escape (only used locally):
• Stack allocation: object is allocated on the stack instead of heap → no GC pressure
• Scalar replacement: object fields are split into local variables — no object allocation at all
• Lock elision: synchronized on an object that cannot be shared → lock removed entirely

This is why Java code with lots of small objects can be faster than it looks — the JIT often eliminates the allocations entirely.`},{id:174,question:"What is the String pool and how does intern() work?",answer:`The String pool is a cache in the heap (since Java 7) for string literals. When the compiler encounters "hello", it creates one String object in the pool and reuses it for all identical literals.

String a = "hello";  // from pool
String b = "hello";  // same object
a == b // true

String.intern() manually adds a string to the pool and returns the canonical instance:
String c = new String("hello").intern();
a == c // true

Internment saves memory when there are many duplicate strings (e.g., repeated city names). But the pool is not GC'd as aggressively — avoid over-interning.`},{id:175,question:"What is the Java Module System (JPMS, Java 9)?",answer:`The Java Platform Module System (Project Jigsaw) partitions the JDK itself and allows applications to declare modules.

A module has a module-info.java:
module com.myapp.service {
  requires java.sql;
  requires com.myapp.model;
  exports com.myapp.service.api;
}

Benefits:
• Strong encapsulation — internal packages not exposed unless exported
• Reliable configuration — missing/conflicting modules caught at startup
• Smaller JRE with jlink — build a minimal runtime containing only required modules

Most large projects still use the classpath for compatibility.`},{id:176,question:"What is reflection in Java and what are its costs?",answer:`Reflection (java.lang.reflect) allows inspecting and manipulating classes, methods, and fields at runtime.

Class<?> clazz = Class.forName("com.example.Foo");
Method m = clazz.getDeclaredMethod("bar", int.class);
m.setAccessible(true);
m.invoke(instance, 42);

Use cases: frameworks (Spring DI, Jackson, JUnit), serialization, plugins.

Costs:
• Slower than direct calls (no JIT optimisations, bypasses type-check)
• Breaks encapsulation (setAccessible)
• Requires more permissions in modules
• Hard to detect errors at compile time

Minimise reflection in hot paths.`},{id:177,question:"What is a Java agent and how is it used?",answer:`A Java agent is a JAR that instruments bytecode at load time (or attach to running JVM) using the java.lang.instrument API.

Specify in manifest: Premain-Class: com.example.MyAgent
Add at startup: java -javaagent:agent.jar -jar app.jar

The agent's premain(String args, Instrumentation inst) method can:
• Retransform classes via bytecode modification (ASM, Javassist, ByteBuddy)
• Collect profiling data
• Inject tracing/logging (APM tools like DataDog, NewRelic, OpenTelemetry)

Agents power most Java observability and mocking frameworks (Mockito uses ByteBuddy).`},{id:178,question:"What is GraalVM and Ahead-of-Time (AOT) compilation?",answer:`GraalVM is a polyglot VM that includes:
• A JIT compiler (written in Java) to replace C2
• Native Image: AOT compilation of Java apps to standalone native binaries

Native Image (used by Quarkus, Micronaut):
• Compiles Java to a native executable at build time
• No JVM at runtime — startup in milliseconds, 5x lower memory
• Tradeoffs: no dynamic class loading at runtime, reflection must be configured, longer build times

Ideal for CLI tools, serverless functions, and microservices where startup time and memory matter more than peak throughput.`},{id:179,question:"What is JVM stack frame structure?",answer:`Each method invocation pushes a Stack Frame onto the thread's JVM stack. The frame contains:
• Local variable array — index 0 is "this" for instance methods, then parameters, then local vars
• Operand stack — used to hold intermediate values during bytecode execution
• Constant pool reference — points to the class's constant pool for symbols
• Return address — where to return after the method completes

When the method returns, the frame is popped. StackOverflowError occurs when the stack has no more space (infinite recursion).`},{id:180,question:"How does the JVM handle invokedynamic and lambdas internally?",answer:`invokedynamic (Java 7, indy) allows the JVM to resolve method calls at runtime via a bootstrap method — making it flexible for dynamic languages and lambdas.

When the compiler sees a lambda, instead of generating an anonymous inner class, it emits invokedynamic. The bootstrap method (LambdaMetafactory) generates a class at first invocation and caches it.

This is faster and more memory-efficient than pre-Java 8 anonymous inner classes: no .class file is generated at compile time; the JVM creates an optimised implementation on first call and JIT-compiles it like any method.`}]},{id:"java-advanced",title:"Java – Advanced",color:"#4c1d95",icon:"🚀",questions:[{id:186,question:"What is the difference between HashMap and ConcurrentHashMap?",answer:`HashMap is not thread-safe — concurrent writes can corrupt internal state (lost updates, infinite loops in Java 7).

ConcurrentHashMap:
• Java 7: divides array into 16 segments, each independently locked
• Java 8+: uses CAS (Compare-and-Swap) for lock-free reads; only bins/tree nodes are locked on write
• Provides atomic operations: putIfAbsent(), computeIfAbsent(), merge()
• Never locks the whole map — readers never block

getOrDefault, forEach, reduce, search run on snapshots without locking.

Do NOT use Collections.synchronizedMap(map) for high concurrency — it locks the whole map.`},{id:187,question:"Explain Java generics type erasure and its implications.",answer:`At compile time, generic type parameters are erased and replaced with Object (or the upper bound). The bytecode contains no generic type information.

Implications:
• Cannot create generic arrays: new T[] is illegal
• Cannot use instanceof with parameterized type: x instanceof List<String> is illegal
• Cannot call T.class
• Casts are inserted by compiler where needed
• Overloading on generic type alone is impossible (same erasure)

Workaround: pass a Class<T> token at runtime (reified generics via supertype token).
Some frameworks use TypeToken/ParameterizedType to recover type info from generic superclasses.`},{id:188,question:"What are sealed classes and pattern matching (Java 17+)?",answer:`Sealed classes restrict which classes can extend/implement them:

public sealed interface Shape permits Circle, Rectangle, Triangle {}

Every permitted subtype must be final, sealed, or non-sealed.

Combined with pattern matching in switch (Java 21):
switch (shape) {
  case Circle c -> Math.PI * c.radius() * c.radius();
  case Rectangle r -> r.width() * r.height();
  case Triangle t -> triangleArea(t);
}

The compiler verifies exhaustiveness — no default needed. Enables algebraic data types (like Rust enums or Haskell ADTs) in Java.`},{id:189,question:"What is CompletableFuture composition in depth?",answer:`CompletableFuture chains:
• thenApply(fn) — sync transform, same thread
• thenApplyAsync(fn) — transform on ForkJoinPool.commonPool()
• thenApplyAsync(fn, executor) — transform on custom executor
• thenCompose(fn → CF) — flatMap: fn returns a new CF, flattens it
• thenCombine(other, (a,b) → r) — zip two CFs
• thenAccept(consumer) — consume result, returns CF<Void>
• whenComplete((result, ex) -> ...) — run always
• handle((result, ex) -> ...) — like whenComplete but transforms
• allOf(cf1,cf2,...) — wait for all, returns CF<Void>
• anyOf(cf1,cf2,...) — first to complete wins`},{id:190,question:"What are design patterns and which are most used in Java?",answer:`Creational:
• Singleton — one instance (Spring beans)
• Builder — step-by-step construction (Lombok @Builder, StringBuilder)
• Factory Method / Abstract Factory — decouple creation from use

Structural:
• Proxy — wrap object to add behaviour (Spring AOP, dynamic proxies)
• Decorator — wrap to extend functionality (Java I/O streams)
• Adapter — interface translation

Behavioural:
• Strategy — swap algorithms at runtime
• Observer — event listeners
• Command — encapsulate an operation
• Template Method — skeleton algorithm with overridable steps

In Spring: IoC/DI = Inversion of Control; AOP = Proxy + Decorator.`},{id:191,question:"How does Spring dependency injection work under the hood?",answer:`Spring creates an ApplicationContext that manages beans (objects).

At startup:
1. Scans @Component, @Service, @Repository, @Controller, @Bean
2. Builds a dependency graph
3. Instantiates beans in order, injecting dependencies via constructor, setter, or field injection
4. Wraps beans in CGLIB proxies for AOP (@Transactional, @Cacheable, etc.)

Injection styles:
• Constructor injection (preferred — immutable, testable)
• Setter injection
• @Autowired field injection (avoid — hides dependencies, hard to test)

Beans are singletons by default (@Scope("prototype") for new instance per request).`},{id:192,question:"What is Spring AOP and how are proxies created?",answer:`Aspect-Oriented Programming lets you add cross-cutting concerns (logging, transactions, security) without modifying business code.

@Aspect class with advice:
@Around("@annotation(Transactional)") → wraps method call
@Before, @After, @AfterReturning, @AfterThrowing

Proxy types:
• JDK dynamic proxy — if bean implements an interface
• CGLIB proxy — if no interface (subclasses the class)

Limitation: AOP only intercepts calls through the proxy. A method calling another method on the same object bypasses AOP — use self-injection or AspectJ weaving to fix.`},{id:193,question:"What is @Transactional and how does it work?",answer:`@Transactional on a method means Spring wraps it in a transaction:
1. Begins a transaction before the method
2. Commits if method returns normally
3. Rolls back if an unchecked exception (RuntimeException) is thrown

Key attributes:
• propagation (REQUIRED, REQUIRES_NEW, SUPPORTS, etc.)
• isolation (READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE)
• rollbackFor — also rollback for checked exceptions
• readOnly = true — hints to DB optimise the query

Caveat: calls to @Transactional methods within the same class bypass the proxy — transaction does NOT start.`},{id:194,question:"What is Java NIO and how does it differ from IO?",answer:`Classic java.io (Streams): blocking, byte-at-a-time, thread-per-connection model.

java.nio (New I/O, Java 4):
• Buffer — fixed-size container; data is read/written in blocks
• Channel — bidirectional, can be non-blocking
• Selector — one thread monitors multiple channels for events (readable, writable) — event-driven I/O
• Non-blocking mode: channel.configureBlocking(false)

NIO2 (Java 7, java.nio.file): Path, Files, WatchService, AsynchronousFileChannel with callbacks.

Use NIO for high-connection servers. For application code, prefer the higher-level abstractions (Spring WebFlux, Netty, Vertx) that wrap NIO.`},{id:195,question:"What are annotations and how do you create a custom annotation?",answer:`@interface declares an annotation:

@Retention(RetentionPolicy.RUNTIME)  // visible at runtime via reflection
@Target(ElementType.METHOD)           // applicable to methods
public @interface Timed {
  String value() default "";
  TimeUnit unit() default TimeUnit.MILLISECONDS;
}

Retention policies:
• SOURCE — discarded after compilation (e.g., @Override)
• CLASS — in bytecode, not at runtime (default)
• RUNTIME — available via reflection (most framework annotations)

Process annotations at runtime with reflection or at compile time with an Annotation Processor (AbstractProcessor, used by Lombok, MapStruct).`},{id:196,question:"What is serialization in Java and what are its pitfalls?",answer:`Java serialization converts an object graph to bytes (ObjectOutputStream) and back (ObjectInputStream). A class must implement Serializable.

Pitfalls:
• Security: deserializing untrusted data can execute arbitrary code (gadget chains) — serious CVEs
• Versioning: adding/removing fields breaks compatibility unless serialVersionUID is managed
• Performance: slow and verbose
• Serializes everything: transient keyword excludes fields

Modern alternatives: JSON (Jackson, Gson), Protocol Buffers, Avro, Kryo.

Never deserialize data from untrusted sources using Java native serialization.`},{id:197,question:"What are dynamic proxies in Java?",answer:`java.lang.reflect.Proxy creates an implementation of one or more interfaces at runtime.

InvocationHandler handler = (proxy, method, args) -> {
  System.out.println("Before " + method.getName());
  return method.invoke(realObject, args);
};
MyService proxy = (MyService) Proxy.newProxyInstance(
  MyService.class.getClassLoader(),
  new Class[]{MyService.class},
  handler
);

Every method call on proxy goes through the InvocationHandler.

Used by: Spring AOP (for interface-based beans), Mockito, Hibernate lazy proxies, remote service stubs (RMI, JAX-RS clients).`},{id:198,question:"What is the difference between String, StringBuilder, and StringBuffer?",answer:`String: immutable. Every "modification" creates a new object. Thread-safe (immutability). Use for literals and values that do not change.

StringBuilder: mutable, NOT thread-safe. Best performance for single-threaded string building. Use in loops.

StringBuffer: mutable, thread-safe (all methods synchronized). Slower than StringBuilder. Rarely needed — prefer StringBuilder + external synchronization if needed.

The Java compiler automatically replaces String concatenation in simple expressions with StringBuilder. But inside loops, write StringBuilder explicitly to avoid creating many intermediate String objects.`},{id:199,question:"What are text blocks (Java 13+) and pattern matching instanceof (Java 16+)?",answer:`Text blocks — multiline string literals with automatic indent stripping:
String json = """
    {
      "name": "Alice",
      "age": 30
    }
    """;

Pattern matching for instanceof — eliminates cast:
// Old:
if (obj instanceof String) { String s = (String) obj; ... }
// New:
if (obj instanceof String s) { s.toUpperCase(); } // s is in scope

Also in switch expressions (Java 14+):
int result = switch (day) {
  case MON, FRI -> 6;
  case WED -> 4;
  default -> 5;
};`},{id:200,question:"How does garbage collection impact application latency and how do you tune it?",answer:`GC stop-the-world pauses freeze the application. For latency-sensitive apps, minimize pause duration.

Key flags:
• -Xms/-Xmx: initial/max heap
• -XX:+UseG1GC / -XX:+UseZGC
• -XX:MaxGCPauseMillis=200: G1 pause target
• -XX:G1HeapRegionSize=n: G1 region size
• -Xlog:gc*: GC log
• -XX:+PrintGCDetails (legacy)

Diagnosis tools:
• GCEasy, GCViewer — analyze GC logs
• Java Flight Recorder (JFR) — low-overhead profiler built into JDK
• jstat -gcutil <pid> 1000 — live GC stats

General: avoid large object allocations on hot paths, minimize long-lived objects in Old Gen.`}]},{id:"java-expert",title:"Java – Expert Level",color:"#7f1d1d",icon:"🏆",questions:[{id:206,question:"What is JVM ergonomics and how does the JVM auto-tune itself?",answer:`JVM ergonomics automatically selects defaults based on the host machine:
• GC algorithm: G1GC on machines with ≥ 2 CPUs and ≥ 1792MB heap
• Heap size: -Xmx defaults to ~25% of physical RAM
• GC thread count: scales with CPU count

In containers (Docker/Kubernetes), the JVM historically read host RAM, not cgroup limits → OOMKilled. Fixed in Java 8u191+ with UseContainerSupport=true (default).

Always set -XX:MaxRAMPercentage=75.0 in containers and verify with: java -XshowSettings:all -version`},{id:207,question:"What is class data sharing (CDS) and how does it improve startup?",answer:`AppCDS (Application Class Data Sharing) dumps a shared archive of loaded class metadata to a file. On subsequent JVM starts, multiple JVM processes map the archive into read-only shared memory — skipping parsing and linking for those classes.

Steps:
1. java -XX:DumpLoadedClassList=classes.lst -jar app.jar
2. java -Xshare:dump -XX:SharedClassListFile=classes.lst -XX:SharedArchiveFile=app.jsa ...
3. java -Xshare:on -XX:SharedArchiveFile=app.jsa -jar app.jar

Java 13+: Dynamic CDS archives are created automatically on first run. Startup improvements of 20-50% are typical for framework-heavy apps.`},{id:208,question:"What is JVM memory leak detection and how do you diagnose it?",answer:`A memory leak in Java: objects accumulate in memory because live references prevent GC from collecting them.

Common causes:
• Static collections holding references indefinitely
• ThreadLocal not removed in thread pools
• Listeners/callbacks not de-registered
• Caches without eviction policies

Diagnosis steps:
1. Monitor heap with jstat -gcutil <pid> 5000 — growing Old Gen after Full GC indicates a leak
2. Capture heap dump: jmap -dump:format=b,file=heap.hprof <pid> or -XX:+HeapDumpOnOutOfMemoryError
3. Analyze with Eclipse MAT or IntelliJ heap analyser — look for Dominator Tree, Retained Heap
4. Find the GC root path for the retained objects`},{id:209,question:"What is Java Flight Recorder (JFR) and how do you use it?",answer:`JFR is a low-overhead (~1%) continuous profiling framework built into the JDK (open-sourced in Java 11).

Captures: CPU profiling, GC events, thread activities, lock contention, I/O, class loading, exceptions, JIT compilation.

Usage:
• Start with JVM flags: -XX:StartFlightRecording=duration=60s,filename=app.jfr
• On running JVM: jcmd <pid> JFR.start duration=60s filename=app.jfr
• Analyse in JDK Mission Control (JMC)

JFR is the first tool to reach for in production performance investigations — always-on, minimal overhead.`},{id:210,question:"What is the ABA problem in lock-free programming and how is it solved?",answer:`The ABA problem: a CAS reads value A, another thread changes A→B→A, the CAS succeeds even though the state has changed underneath.

Example: lock-free stack — node removed and re-added; CAS sees same pointer but stack is different.

Solution: tag the reference with a version stamp:
AtomicStampedReference<Node> head = new AtomicStampedReference<>(node, 0);
head.compareAndSet(expected, newVal, stampBefore, stampBefore + 1);

The stamp changes on every update, so A→B→A has a different stamp each time. AtomicMarkableReference is a boolean-tagged variant for simpler "marked for deletion" use cases.`},{id:211,question:"What is false sharing in CPU caches and how do you prevent it?",answer:`A CPU cache line is typically 64 bytes. When two threads write to different variables that happen to be in the same cache line, each write invalidates the other core's cache line — causing excessive cache misses.

Example: two AtomicLong counters adjacent in memory.

Prevention:
1. Pad fields to 64 bytes: add 7 long padding fields around the hot field
2. @Contended annotation (JDK internal, -XX:-RestrictContended required before Java 9): JVM pads the field automatically
3. Use LongAdder for high-contention counters — internally uses Striped64 with per-thread cells that are cache-line padded

False sharing can cause 10x slowdown in tight concurrent loops.`},{id:212,question:"What is off-heap memory and when would you use it?",answer:`Off-heap memory is allocated outside the JVM heap — not managed by GC.

APIs:
• ByteBuffer.allocateDirect(n) — direct buffer, backed by native memory
• sun.misc.Unsafe.allocateMemory(n) — raw native malloc (use with extreme caution)
• Java 22+: MemorySegment (Foreign Memory API, stable) — safe, structured off-heap

Use cases:
• Large caches (GBs of data without GC pauses)
• I/O buffers (zero-copy between JVM and OS)
• Shared memory between JVM processes
• Interop with native libraries via JNI/FFI

Risk: memory leaks — you must manually free allocations (ByteBuffer via Cleaner, MemorySegment via SegmentScope).`},{id:213,question:"What is benchmarking with JMH and why is it necessary?",answer:`JMH (Java Microbenchmark Harness) is the standard tool for measuring Java performance. Naive microbenchmarks are wrong because:
• JVM warms up (JIT compilation) changes performance
• Dead code elimination removes your test code
• GC pauses skew results
• CPU frequency scaling, branch predictor effects

JMH handles all of this:
@Benchmark
@Warmup(iterations = 5)
@Measurement(iterations = 10)
@BenchmarkMode(Mode.AverageTime)
public int myBenchmark(MyState state) { return state.list.size(); }

Always benchmark before optimising. Never trust "intuition" about Java performance.`},{id:214,question:"How do you implement a thread-safe singleton in Java?",answer:`1. Enum singleton (best — JVM guarantees exactly one instance, serialization-safe):
enum Singleton { INSTANCE; void doWork() {...} }

2. Initialization-on-demand holder (lazy, thread-safe, no synchronization overhead):
public class Singleton {
  private static class Holder { static final Singleton INSTANCE = new Singleton(); }
  public static Singleton get() { return Holder.INSTANCE; }
}

3. Double-checked locking (verbose but common):
private static volatile Singleton instance;
public static Singleton get() {
  if (instance == null) synchronized (Singleton.class) {
    if (instance == null) instance = new Singleton();
  }
  return instance;
}
Note: volatile is mandatory — without it, partially constructed objects can be observed.`},{id:215,question:"What are common JVM flags for production tuning?",answer:`Memory:
-Xms=4g -Xmx=4g (set equal to avoid resizing)
-XX:MaxMetaspaceSize=512m
-XX:MaxRAMPercentage=75 (containers)

GC:
-XX:+UseG1GC -XX:MaxGCPauseMillis=200
-XX:+UseZGC (Java 15+ for latency-sensitive)
-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=20m

Diagnostics:
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/heap.hprof
-XX:+ExitOnOutOfMemoryError (fail fast in containers)
-XX:StartFlightRecording=maxsize=128m,maxage=1d

JIT:
-XX:+PrintCompilation (development)
-XX:CompileThreshold=10000`},{id:216,question:"What is the Reactor pattern and reactive programming in Java?",answer:`Reactive programming models data as asynchronous streams that can be observed and transformed.

Reactive Streams spec defines: Publisher, Subscriber, Subscription, Processor.

Project Reactor (Spring WebFlux):
• Mono<T> — 0 or 1 element
• Flux<T> — 0 to N elements

Flux.fromIterable(users)
  .filter(User::isActive)
  .flatMap(u -> fetchOrdersAsync(u.getId()))
  .collectList()
  .subscribe(result -> ...);

Backpressure: subscriber signals demand to publisher — prevents buffer overflow.

Best for: high-concurrency I/O-bound services. Poor fit for CPU-bound or simple CRUD (adds complexity without benefit).`},{id:217,question:"What is the difference between optimistic and pessimistic locking in databases from a Java perspective?",answer:`Pessimistic locking: acquire a database lock immediately.
@Lock(LockModeType.PESSIMISTIC_WRITE) → SELECT ... FOR UPDATE
Blocks concurrent readers/writers until your transaction commits.
Use when conflicts are frequent.

Optimistic locking: no DB lock; detect conflict at commit time.
@Version private Long version; on entity.
Hibernate adds WHERE version=? to UPDATE — if 0 rows updated, throws OptimisticLockException.
Use when conflicts are rare (most reads, few writes).

Retry with optimistic:
catch (OptimisticLockException e) { retry the transaction; }

Optimistic is default in most web apps — better throughput, no DB locks held across slow operations.`},{id:218,question:"What is Java security and the principle of least privilege in the JVM?",answer:`Key concepts:
• SecurityManager (removed in Java 17): controlled access to file, network, reflection. Replaced by OS-level isolation.
• Code Signing: JARs can be signed; policy files grant permissions based on signer.
• Module system (Java 9+): strong encapsulation prevents access to internal JDK APIs.
• --add-opens: explicitly opens a module package for reflection (necessary for some frameworks).

Best practices:
• Keep dependencies minimal and up-to-date (CVE scanning: Dependabot, Snyk)
• Never deserialize untrusted data
• Use prepared statements (prevent SQL injection)
• Sanitize inputs, encode outputs (prevent XSS)
• Run containers as non-root, use seccomp profiles`},{id:219,question:"What are the SOLID principles and how do they apply to Java?",answer:`S — Single Responsibility: one class = one reason to change. Split big service classes.
O — Open/Closed: open for extension, closed for modification. Use interfaces + strategy pattern.
L — Liskov Substitution: subclasses must be usable wherever the parent is used. Do not override methods to throw exceptions.
I — Interface Segregation: prefer many small specific interfaces over one fat interface. Clients should not depend on methods they do not use.
D — Dependency Inversion: depend on abstractions, not concretions. Inject interfaces, not implementations (enabled by Spring DI).

In practice: SOLID guides you toward loosely coupled, testable code. Do not apply it dogmatically — 5 classes where 1 works is worse.`},{id:220,question:"How do you write high-performance Java code?",answer:`Profile first — never optimise without data (JFR, async-profiler).

Object allocation:
• Avoid unnecessary allocations on hot paths (object pooling, value types in Project Valhalla)
• Reuse buffers, arrays
• Avoid boxing primitives in collections — use Eclipse Collections or int[]

Cache-friendly data:
• Prefer arrays over linked structures (cache line locality)
• Process data sequentially

Collections:
• Size collections at construction to avoid rehashing
• EnumSet/EnumMap for enum-keyed maps

I/O:
• Buffer all I/O (BufferedReader, BufferedOutputStream)
• Use NIO for high-connection servers

JIT-friendly:
• Keep methods small so the JIT can inline them
• Avoid megamorphic call sites (> 2 different subtypes at same call site)`}]},{id:"backend-rest",title:"Backend, REST och mikrotjänster",color:"#6d28d9",icon:"🌐",questions:[{id:6,question:"Hur designar du ett RESTful API på ett korrekt sätt?",answer:`Använd rätt HTTP-verb: GET (hämta), POST (skapa), PUT/PATCH (uppdatera), DELETE (ta bort). Resurser namnges med substantiv i plural (/users, /claims).

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

Native image i produktion för snabb skalning i Kubernetes/OpenShift.`,tip:"En fråga som sammanför allt – visa helhetsbild och förmåga att sätta ihop pusslet."}]}],us="java-progress";function zc(){try{return JSON.parse(localStorage.getItem(us)||"{}")}catch{return{}}}const Xt=Yt(zc());function Xc(e){Xt[e]=!0}function Yc(e){delete Xt[e]}function wt(e){return!!Xt[e]}_t(Xt,()=>{localStorage.setItem(us,JSON.stringify({...Xt}))},{deep:!0});const Zc={class:"home"},ed={class:"hero"},td={class:"hero-inner"},nd={class:"section"},rd={class:"path-grid"},ad={class:"path-icon"},id={class:"path-body"},sd={class:"path-title"},od={class:"path-sub"},ld={class:"path-meta"},cd={key:0,class:"path-progress-text"},dd={key:0,class:"path-progress-bar"},ud={class:"section alt-bg"},pd={class:"section-sub"},md={class:"cat-grid"},fd={class:"cat-icon"},gd={class:"cat-body"},hd={class:"cat-title"},kd={class:"cat-count"},vd=Fe({__name:"HomeView",setup(e){const t=oe(()=>Pn.reduce((i,s)=>i+s.questions.length,0));function n(i){return{beginner:"Nybörjare",intermediate:"Mellannivå",advanced:"Avancerat",expert:"Expert"}[i]??i}function r(i){return i.lessons.reduce((s,o)=>s+o.estimatedMinutes,0)}function a(i){if(!i.lessons.length)return 0;const s=i.lessons.filter(o=>Xt[o.id]).length;return Math.round(s/i.lessons.length*100)}return(i,s)=>{const o=Zt("RouterLink");return V(),G("div",Zc,[k("section",ed,[k("div",td,[s[1]||(s[1]=k("div",{class:"hero-badge"},"☕ Lär dig Java",-1)),s[2]||(s[2]=k("h1",{class:"hero-title"},[be("Från nybörjare"),k("br"),be("till expert")],-1)),s[3]||(s[3]=k("p",{class:"hero-sub"}," Tydliga lektioner. Riktiga kodexempel. Designad för alla hjärnor. ",-1)),Z(o,{to:"/path/grunder",class:"hero-cta"},{default:pe(()=>[...s[0]||(s[0]=[be("Börja lära dig →",-1)])]),_:1})])]),k("section",nd,[s[5]||(s[5]=k("h2",{class:"section-title"},"Välj din väg",-1)),s[6]||(s[6]=k("p",{class:"section-sub"},"Fyra strukturerade lärstigar – börja var du vill.",-1)),k("div",rd,[(V(!0),G(ke,null,Wt(ie(Qr),l=>(V(),dt(o,{key:l.id,to:`/path/${l.id}`,class:"path-card",style:Oe({"--accent":l.color,"--bg":l.bgColor})},{default:pe(()=>[k("div",ad,B(l.icon),1),k("div",id,[k("div",{class:"path-level",style:Oe({color:l.color})},B(n(l.level)),5),k("h3",sd,B(l.title),1),k("p",od,B(l.subtitle),1),k("div",ld,[k("span",null,B(l.lessons.length)+" lektioner",1),k("span",null,B(r(l))+" min",1),a(l)>0?(V(),G("span",cd,B(a(l))+"% klart ",1)):Me("",!0)])]),s[4]||(s[4]=k("div",{class:"path-arrow"},"→",-1)),a(l)>0?(V(),G("div",dd,[k("div",{class:"path-progress-fill",style:Oe({width:a(l)+"%",background:l.color})},null,4)])):Me("",!0)]),_:2},1032,["to","style"]))),128))])]),k("section",ud,[s[7]||(s[7]=k("h2",{class:"section-title"},"🎯 Intervjuförberedelse",-1)),k("p",pd," Öva på "+B(t.value)+" frågor fördelade på "+B(ie(Pn).length)+" kategorier – med flashkort. ",1),k("div",md,[(V(!0),G(ke,null,Wt(ie(Pn),l=>(V(),dt(o,{key:l.id,to:`/category/${l.id}`,class:"cat-card",style:Oe({"--accent":l.color})},{default:pe(()=>[k("span",fd,B(l.icon),1),k("div",gd,[k("span",hd,B(l.title),1),k("span",kd,B(l.questions.length)+" frågor",1)])]),_:2},1032,["to","style"]))),128))])]),s[8]||(s[8]=k("section",{class:"a11y-hint"},[k("div",{class:"a11y-hint-inner"},[k("span",{class:"a11y-hint-icon"},"♿"),k("div",null,[k("strong",null,"Anpassa din läsupplevelse"),k("p",null,"Justera textstorlek, radavstånd och teckensnitt med knapparna uppe i hörnet.")])])],-1))])}}}),Ga=xt(vd,[["__scopeId","data-v-5515c6ad"]]),bd={class:"face front"},yd={class:"label"},Sd={class:"text"},wd={class:"face back"},Ad={class:"text"},Cd={key:0,class:"tip"},xd=Fe({__name:"FlashCard",props:{question:{}},setup(e){const t=At(!1);return(n,r)=>(V(),G("div",{class:"card-wrapper",onClick:r[0]||(r[0]=a=>t.value=!t.value)},[k("div",{class:ve(["card",{flipped:t.value}])},[k("div",bd,[k("span",yd,"Fråga "+B(e.question.id),1),k("p",Sd,B(e.question.question),1),r[1]||(r[1]=k("span",{class:"hint"},"Klicka för att se svaret",-1))]),k("div",wd,[r[2]||(r[2]=k("span",{class:"label"},"Svar",-1)),k("p",Ad,B(e.question.answer),1),e.question.tip?(V(),G("p",Cd,"💡 "+B(e.question.tip),1)):Me("",!0),r[3]||(r[3]=k("span",{class:"hint"},"Klicka för att se frågan igen",-1))])],2)]))}}),Ed=xt(xd,[["__scopeId","data-v-588a2765"]]),Td={key:0,class:"page"},Rd={class:"navbar"},jd={class:"meta"},Pd={class:"icon"},Id={class:"title"},Md={class:"progress"},Od={class:"content"},_d={class:"controls"},Ld=["disabled"],Dd={class:"dots"},Jd=["onClick"],Bd=["disabled"],qd={key:1,class:"not-found"},Vd=Fe({__name:"CategoryView",setup(e){const t=Wr(),n=At(0),r=oe(()=>Pn.find(a=>a.id===t.params.id));return(a,i)=>{const s=Zt("RouterLink");return r.value?(V(),G("div",Td,[k("nav",Rd,[Z(s,{to:"/",class:"back"},{default:pe(()=>[...i[2]||(i[2]=[be("← Alla ämnen",-1)])]),_:1}),k("div",jd,[k("span",Pd,B(r.value.icon),1),k("span",Id,B(r.value.title),1)]),k("span",Md,B(n.value+1)+" / "+B(r.value.questions.length),1)]),k("main",Od,[(V(),dt(Ed,{key:n.value,question:r.value.questions[n.value]},null,8,["question"])),k("div",_d,[k("button",{disabled:n.value===0,onClick:i[0]||(i[0]=o=>n.value--)},"← Föregående",8,Ld),k("div",Dd,[(V(!0),G(ke,null,Wt(r.value.questions,(o,l)=>(V(),G("button",{key:l,class:ve(["dot",{active:l===n.value}]),onClick:p=>n.value=l},null,10,Jd))),128))]),k("button",{disabled:n.value===r.value.questions.length-1,onClick:i[1]||(i[1]=o=>n.value++)}," Nästa → ",8,Bd)])])])):(V(),G("div",qd,[i[4]||(i[4]=k("p",null,"Kategorin hittades inte.",-1)),Z(s,{to:"/"},{default:pe(()=>[...i[3]||(i[3]=[be("← Tillbaka",-1)])]),_:1})]))}}}),Fd=xt(Vd,[["__scopeId","data-v-b8973292"]]),Nd={key:0,class:"path-view"},Hd={class:"path-hero-inner"},Gd={class:"path-hero-icon"},Ud={class:"path-hero-title"},Kd={class:"path-hero-sub"},Wd={class:"path-stats"},Qd={key:0},$d={key:0,class:"path-overall-bar"},zd={class:"lesson-list-wrap"},Xd={class:"lesson-list"},Yd={class:"lesson-num"},Zd={key:0,class:"done-check"},eu={key:1},tu={class:"lesson-info"},nu={class:"lesson-emoji"},ru={class:"lesson-text"},au={class:"lesson-title"},iu={class:"lesson-summary"},su={class:"lesson-meta"},ou={class:"lesson-time"},lu={key:1,class:"not-found"},cu=Fe({__name:"TutorialPathView",setup(e){const t=Wr(),n=oe(()=>Qr.find(o=>o.id===t.params.pathId)),r=oe(()=>{var o;return((o=n.value)==null?void 0:o.lessons.reduce((l,p)=>l+p.estimatedMinutes,0))??0}),a=oe(()=>{var o;return((o=n.value)==null?void 0:o.lessons.filter(l=>wt(l.id)).length)??0}),i=oe(()=>{var o;return(o=n.value)!=null&&o.lessons.length?Math.round(a.value/n.value.lessons.length*100):0});function s(o){return{beginner:"Nybörjare",intermediate:"Mellannivå",advanced:"Avancerat",expert:"Expert"}[o]??o}return(o,l)=>{const p=Zt("RouterLink");return n.value?(V(),G("div",Nd,[k("div",{class:"path-hero",style:Oe({background:`linear-gradient(135deg, ${n.value.bgColor} 0%, #0f172a 100%)`})},[k("div",Hd,[Z(p,{to:"/",class:"back-link"},{default:pe(()=>[...l[0]||(l[0]=[be("← Tillbaka",-1)])]),_:1}),k("div",Gd,B(n.value.icon),1),k("h1",Ud,B(n.value.title),1),k("p",Kd,B(n.value.subtitle),1),k("div",Wd,[k("span",{style:Oe({color:n.value.color})},B(s(n.value.level)),5),k("span",null,B(n.value.lessons.length)+" lektioner",1),k("span",null,B(r.value)+" min totalt",1),a.value>0?(V(),G("span",Qd,B(a.value)+"/"+B(n.value.lessons.length)+" klara",1)):Me("",!0)]),a.value>0?(V(),G("div",$d,[k("div",{class:"path-overall-fill",style:Oe({width:i.value+"%",background:n.value.color})},null,4)])):Me("",!0)])],4),k("div",zd,[k("div",Xd,[(V(!0),G(ke,null,Wt(n.value.lessons,(d,m)=>(V(),dt(p,{key:d.id,to:`/path/${n.value.id}/lektion/${d.id}`,class:ve(["lesson-row",{done:ie(wt)(d.id)}]),style:Oe({"--accent":n.value.color})},{default:pe(()=>[k("div",Yd,[ie(wt)(d.id)?(V(),G("span",Zd,"✓")):(V(),G("span",eu,B(m+1),1))]),k("div",tu,[k("div",nu,B(d.emoji),1),k("div",ru,[k("h3",au,B(d.title),1),k("p",iu,B(d.summary),1)])]),k("div",su,[k("span",ou,B(d.estimatedMinutes)+" min",1)]),l[1]||(l[1]=k("div",{class:"lesson-arrow"},"→",-1))]),_:2},1032,["to","class","style"]))),128))])])])):(V(),G("div",lu,[l[3]||(l[3]=k("p",null,"Kursen hittades inte.",-1)),Z(p,{to:"/"},{default:pe(()=>[...l[2]||(l[2]=[be("← Tillbaka till startsidan",-1)])]),_:1})]))}}}),du=xt(cu,[["__scopeId","data-v-a2a459c3"]]),uu={class:"code-block"},pu={class:"code-header"},mu={class:"code-lang"},fu={class:"code-pre"},gu=Fe({__name:"CodeBlock",props:{code:{},lang:{}},setup(e){const t=e,n=At(!1);async function r(){await navigator.clipboard.writeText(t.code),n.value=!0,setTimeout(()=>n.value=!1,2e3)}return(a,i)=>(V(),G("div",uu,[k("div",pu,[k("span",mu,B(e.lang),1),k("button",{class:ve(["copy-btn",{copied:n.value}]),onClick:r},B(n.value?"✓ Kopierat":"Kopiera"),3)]),k("pre",fu,[k("code",null,B(e.code),1)])]))}}),hu=xt(gu,[["__scopeId","data-v-8c832b2f"]]),ku={class:"callout-icon"},vu={class:"callout-body"},bu={key:0,class:"callout-heading"},yu=["innerHTML"],Su=Fe({__name:"CalloutBox",props:{type:{},heading:{},content:{}},setup(e){const t=e;function n(s){return{tip:"💡",warning:"⚠️",info:"ℹ️",text:"",code:""}[s]??"💡"}function r(s){return s.split(`

`).map(o=>{const l=o.split(`
`);return l.some(p=>p.startsWith("• "))?`<ul>${l.map(d=>d.startsWith("• ")?`<li>${a(d.slice(2))}</li>`:`<p>${a(d)}</p>`).join("")}</ul>`:`<p>${a(o.replace(/\n/g,"<br>"))}</p>`}).join("")}function a(s){return s.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>")}const i=oe(()=>r(t.content));return(s,o)=>(V(),G("div",{class:ve(["callout",e.type])},[k("div",ku,B(n(e.type)),1),k("div",vu,[e.heading?(V(),G("p",bu,B(e.heading),1)):Me("",!0),k("div",{class:"callout-text",innerHTML:i.value},null,8,yu)])],2))}}),wu=xt(Su,[["__scopeId","data-v-b8db0570"]]),Au={class:"lesson-layout"},Cu={class:"sidebar-header"},xu={class:"sidebar-nav"},Eu={class:"sidebar-num"},Tu={key:0},Ru={key:1},ju={class:"sidebar-label"},Pu={class:"lesson-header"},Iu={class:"lesson-meta-bar"},Mu={class:"lesson-emoji-lg"},Ou={class:"lesson-time-est"},_u={class:"lesson-title"},Lu={class:"lesson-summary"},Du={class:"lesson-sections"},Ju={key:0,class:"section-text"},Bu={key:0,class:"section-heading"},qu=["innerHTML"],Vu={key:1,class:"section-code"},Fu={key:0,class:"section-heading"},Nu={key:2,class:"section-callout"},Hu={key:0,class:"section-heading"},Gu={class:"lesson-footer"},Uu={key:0},Ku={key:1},Wu={class:"nav-btns"},Qu={key:1,class:"not-found"},$u=Fe({__name:"TutorialLessonView",setup(e){const t=Wr(),n=At(null),r=At(!1),a=At(0),i=oe(()=>Qr.find(C=>C.id===t.params.pathId)),s=oe(()=>{var C;return(C=i.value)==null?void 0:C.lessons.find(j=>j.id===t.params.lessonId)}),o=oe(()=>{var C;return((C=i.value)==null?void 0:C.lessons.findIndex(j=>{var O;return j.id===((O=s.value)==null?void 0:O.id)}))??-1}),l=oe(()=>o.value>0?i.value.lessons[o.value-1]:null),p=oe(()=>!i.value||o.value<0?null:o.value<i.value.lessons.length-1?i.value.lessons[o.value+1]:null);function d(C){return{beginner:"Nybörjare",intermediate:"Mellannivå",advanced:"Avancerat",expert:"Expert"}[C]??C}function m(){s.value&&(wt(s.value.id)?Yc(s.value.id):Xc(s.value.id))}function g(){const C=n.value;if(!C)return;const j=C.scrollHeight-C.clientHeight;a.value=j>0?Math.round(C.scrollTop/j*100):100}_t(()=>t.params.lessonId,()=>{a.value=0,r.value=!1,n.value&&(n.value.scrollTop=0)});function h(C){return C.split(`

`).map(j=>{const O=j.split(`
`);return O.some(w=>w.startsWith("• "))?`<ul>${O.map(_=>_.startsWith("• ")?`<li>${M(_.slice(2))}</li>`:"").join("")}</ul>`:O.some(w=>/^\d+\. /.test(w))?`<ol>${O.map(_=>{const L=_.match(/^\d+\. (.*)/);return L?`<li>${M(L[1])}</li>`:""}).join("")}</ol>`:`<p>${M(j.replace(/\n/g,"<br>"))}</p>`}).join("")}function M(C){return C.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>")}return(C,j)=>{const O=Zt("RouterLink");return s.value&&i.value?(V(),G("div",{key:0,class:ve(["lesson-view",{"focus-mode":ie(fe).focusMode}])},[k("div",{class:"read-bar",style:Oe({width:a.value+"%",background:i.value.color})},null,4),k("div",Au,[k("aside",{class:ve(["sidebar",{open:r.value}])},[k("div",Cu,[Z(O,{to:`/path/${i.value.id}`,class:"back-link"},{default:pe(()=>[be("← "+B(i.value.title),1)]),_:1},8,["to"]),k("button",{class:"sidebar-close",onClick:j[0]||(j[0]=w=>r.value=!1)},"✕")]),k("nav",xu,[(V(!0),G(ke,null,Wt(i.value.lessons,(w,_)=>(V(),dt(O,{key:w.id,to:`/path/${i.value.id}/lektion/${w.id}`,class:ve(["sidebar-item",{active:w.id===s.value.id,done:ie(wt)(w.id)}]),onClick:j[1]||(j[1]=L=>r.value=!1)},{default:pe(()=>[k("span",Eu,[ie(wt)(w.id)?(V(),G("span",Tu,"✓")):(V(),G("span",Ru,B(_+1),1))]),k("span",ju,B(w.title),1)]),_:2},1032,["to","class"]))),128))])],2),r.value?(V(),G("div",{key:0,class:"sidebar-overlay",onClick:j[2]||(j[2]=w=>r.value=!1)})):Me("",!0),k("main",{class:"lesson-main",ref_key:"mainRef",ref:n,onScroll:g},[k("div",Pu,[k("button",{class:"menu-btn",onClick:j[3]||(j[3]=w=>r.value=!0)},"☰ Lektioner"),k("div",Iu,[k("span",Mu,B(s.value.emoji),1),k("div",null,[k("div",{class:"lesson-level",style:Oe({color:i.value.color})},B(d(s.value.level)),5),k("div",Ou,"⏱ "+B(s.value.estimatedMinutes)+" min",1)])]),k("h1",_u,B(s.value.title),1),k("p",Lu,B(s.value.summary),1)]),k("div",Du,[(V(!0),G(ke,null,Wt(s.value.sections,(w,_)=>(V(),G(ke,{key:_},[w.type==="text"?(V(),G("div",Ju,[w.heading?(V(),G("h2",Bu,B(w.heading),1)):Me("",!0),k("div",{class:"prose",innerHTML:h(w.content)},null,8,qu)])):w.type==="code"?(V(),G("div",Vu,[w.heading?(V(),G("h2",Fu,B(w.heading),1)):Me("",!0),Z(hu,{code:w.content,lang:w.language??"java"},null,8,["code","lang"])])):(V(),G("div",Nu,[w.heading?(V(),G("h2",Hu,B(w.heading),1)):Me("",!0),Z(wu,{type:w.type,heading:w.heading&&!w.heading?w.heading:void 0,content:w.content},null,8,["type","heading","content"])]))],64))),128))]),k("div",Gu,[k("button",{class:ve(["complete-btn",{done:ie(wt)(s.value.id)}]),onClick:m},[ie(wt)(s.value.id)?(V(),G("span",Uu,"✓ Avklarad")):(V(),G("span",Ku,"Markera som klar"))],2),k("div",Wu,[l.value?(V(),dt(O,{key:0,to:`/path/${i.value.id}/lektion/${l.value.id}`,class:"nav-btn prev"},{default:pe(()=>[be(" ← "+B(l.value.title),1)]),_:1},8,["to"])):Me("",!0),p.value?(V(),dt(O,{key:1,to:`/path/${i.value.id}/lektion/${p.value.id}`,class:"nav-btn next"},{default:pe(()=>[be(B(p.value.title)+" → ",1)]),_:1},8,["to"])):Me("",!0),p.value?Me("",!0):(V(),dt(O,{key:2,to:`/path/${i.value.id}`,class:"nav-btn next done-path"},{default:pe(()=>[...j[4]||(j[4]=[be(" Klar med kursen! 🎉 ",-1)])]),_:1},8,["to"]))])])],544)])],2)):(V(),G("div",Qu,[j[6]||(j[6]=k("p",null,"Lektionen hittades inte.",-1)),Z(O,{to:"/"},{default:pe(()=>[...j[5]||(j[5]=[be("← Startsida",-1)])]),_:1})]))}}}),zu=xt($u,[["__scopeId","data-v-931dda40"]]),Xu=$c({history:Tc("/vue-flash-card"),routes:[{path:"/",component:Ga},{path:"/intervju",component:Ga},{path:"/category/:id",component:Fd},{path:"/path/:pathId",component:du},{path:"/path/:pathId/lektion/:lessonId",component:zu}],scrollBehavior(){return{top:0}}}),Ua=new URLSearchParams(window.location.search).get("p");if(Ua){const e=new URL(window.location.href);e.searchParams.delete("p"),e.pathname="/vue-flash-card"+Ua,window.history.replaceState(null,"",e)}_l(Hl).use(Xu).mount("#app");
