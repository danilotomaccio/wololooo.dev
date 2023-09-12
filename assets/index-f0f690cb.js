var lR=Object.defineProperty;var cR=(t,e,n)=>e in t?lR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Se=(t,e,n)=>(cR(t,typeof e!="symbol"?e+"":e,n),n),uR=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var Ah=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Al=(t,e,n)=>(uR(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function pp(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const We={},vs=[],On=()=>{},hR=()=>!1,dR=/^on[^a-z]/,du=t=>dR.test(t),gp=t=>t.startsWith("onUpdate:"),_t=Object.assign,mp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fR=Object.prototype.hasOwnProperty,be=(t,e)=>fR.call(t,e),oe=Array.isArray,ws=t=>fu(t)==="[object Map]",Gw=t=>fu(t)==="[object Set]",fe=t=>typeof t=="function",ht=t=>typeof t=="string",_p=t=>typeof t=="symbol",Ge=t=>t!==null&&typeof t=="object",Qw=t=>Ge(t)&&fe(t.then)&&fe(t.catch),Yw=Object.prototype.toString,fu=t=>Yw.call(t),pR=t=>fu(t).slice(8,-1),Xw=t=>fu(t)==="[object Object]",yp=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yl=pp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gR=/-(\w)/g,ri=pu(t=>t.replace(gR,(e,n)=>n?n.toUpperCase():"")),mR=/\B([A-Z])/g,Xs=pu(t=>t.replace(mR,"-$1").toLowerCase()),gu=pu(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ch=pu(t=>t?`on${gu(t)}`:""),na=(t,e)=>!Object.is(t,e),Rh=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},dc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_R=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jm;const xd=()=>Jm||(Jm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ia(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ht(i)?bR(i):ia(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ht(t))return t;if(Ge(t))return t}}const yR=/;(?![^(]*\))/g,vR=/:([^]+)/,wR=/\/\*[^]*?\*\//g;function bR(t){const e={};return t.replace(wR,"").split(yR).forEach(n=>{if(n){const i=n.split(vR);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function mi(t){let e="";if(ht(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const i=mi(t[n]);i&&(e+=i+" ")}else if(Ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ER="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",IR=pp(ER);function Jw(t){return!!t||t===""}const Xe=t=>ht(t)?t:t==null?"":oe(t)||Ge(t)&&(t.toString===Yw||!fe(t.toString))?JSON.stringify(t,Zw,2):String(t),Zw=(t,e)=>e&&e.__v_isRef?Zw(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Gw(e)?{[`Set(${e.size})`]:[...e.values()]}:Ge(e)&&!oe(e)&&!Xw(e)?String(e):e;let dn;class eb{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=dn;try{return dn=this,e()}finally{dn=n}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function vp(t){return new eb(t)}function TR(t,e=dn){e&&e.active&&e.effects.push(t)}function wp(){return dn}function tb(t){dn&&dn.cleanups.push(t)}const bp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},nb=t=>(t.w&tr)>0,ib=t=>(t.n&tr)>0,AR=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=tr},CR=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];nb(r)&&!ib(r)?r.delete(t):e[n++]=r,r.w&=~tr,r.n&=~tr}e.length=n}},fc=new WeakMap;let ko=0,tr=1;const Dd=30;let Sn;const kr=Symbol(""),Nd=Symbol("");class Ep{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,TR(this,i)}run(){if(!this.active)return this.fn();let e=Sn,n=Ki;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Sn,Sn=this,Ki=!0,tr=1<<++ko,ko<=Dd?AR(this):Zm(this),this.fn()}finally{ko<=Dd&&CR(this),tr=1<<--ko,Sn=this.parent,Ki=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Sn===this?this.deferStop=!0:this.active&&(Zm(this),this.onStop&&this.onStop(),this.active=!1)}}function Zm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ki=!0;const rb=[];function Js(){rb.push(Ki),Ki=!1}function Zs(){const t=rb.pop();Ki=t===void 0?!0:t}function un(t,e,n){if(Ki&&Sn){let i=fc.get(t);i||fc.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=bp()),sb(r)}}function sb(t,e){let n=!1;ko<=Dd?ib(t)||(t.n|=tr,n=!nb(t)):n=!t.has(Sn),n&&(t.add(Sn),Sn.deps.push(t))}function Ci(t,e,n,i,r,s){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?yp(n)&&a.push(o.get("length")):(a.push(o.get(kr)),ws(t)&&a.push(o.get(Nd)));break;case"delete":oe(t)||(a.push(o.get(kr)),ws(t)&&a.push(o.get(Nd)));break;case"set":ws(t)&&a.push(o.get(kr));break}if(a.length===1)a[0]&&Od(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Od(bp(l))}}function Od(t,e){const n=oe(t)?t:[...t];for(const i of n)i.computed&&e_(i);for(const i of n)i.computed||e_(i)}function e_(t,e){(t!==Sn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function RR(t,e){var n;return(n=fc.get(t))==null?void 0:n.get(e)}const SR=pp("__proto__,__v_isRef,__isVue"),ob=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_p)),kR=Ip(),PR=Ip(!1,!0),xR=Ip(!0),t_=DR();function DR(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ie(this);for(let s=0,o=this.length;s<o;s++)un(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(Ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Js();const i=Ie(this)[e].apply(this,n);return Zs(),i}}),t}function NR(t){const e=Ie(this);return un(e,"has",t),e.hasOwnProperty(t)}function Ip(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?QR:hb:e?ub:cb).get(i))return i;const o=oe(i);if(!t){if(o&&be(t_,r))return Reflect.get(t_,r,s);if(r==="hasOwnProperty")return NR}const a=Reflect.get(i,r,s);return(_p(r)?ob.has(r):SR(r))||(t||un(i,"get",r),e)?a:Je(a)?o&&yp(r)?a:a.value:Ge(a)?t?fb(a):eo(a):a}}const OR=ab(),MR=ab(!0);function ab(t=!1){return function(n,i,r,s){let o=n[i];if(Ps(o)&&Je(o)&&!Je(r))return!1;if(!t&&(!pc(r)&&!Ps(r)&&(o=Ie(o),r=Ie(r)),!oe(n)&&Je(o)&&!Je(r)))return o.value=r,!0;const a=oe(n)&&yp(i)?Number(i)<n.length:be(n,i),l=Reflect.set(n,i,r,s);return n===Ie(s)&&(a?na(r,o)&&Ci(n,"set",i,r):Ci(n,"add",i,r)),l}}function LR(t,e){const n=be(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ci(t,"delete",e,void 0),i}function $R(t,e){const n=Reflect.has(t,e);return(!_p(e)||!ob.has(e))&&un(t,"has",e),n}function VR(t){return un(t,"iterate",oe(t)?"length":kr),Reflect.ownKeys(t)}const lb={get:kR,set:OR,deleteProperty:LR,has:$R,ownKeys:VR},FR={get:xR,set(t,e){return!0},deleteProperty(t,e){return!0}},UR=_t({},lb,{get:PR,set:MR}),Tp=t=>t,mu=t=>Reflect.getPrototypeOf(t);function Cl(t,e,n=!1,i=!1){t=t.__v_raw;const r=Ie(t),s=Ie(e);n||(e!==s&&un(r,"get",e),un(r,"get",s));const{has:o}=mu(r),a=i?Tp:n?Rp:ra;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Rl(t,e=!1){const n=this.__v_raw,i=Ie(n),r=Ie(t);return e||(t!==r&&un(i,"has",t),un(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Sl(t,e=!1){return t=t.__v_raw,!e&&un(Ie(t),"iterate",kr),Reflect.get(t,"size",t)}function n_(t){t=Ie(t);const e=Ie(this);return mu(e).has.call(e,t)||(e.add(t),Ci(e,"add",t,t)),this}function i_(t,e){e=Ie(e);const n=Ie(this),{has:i,get:r}=mu(n);let s=i.call(n,t);s||(t=Ie(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?na(e,o)&&Ci(n,"set",t,e):Ci(n,"add",t,e),this}function r_(t){const e=Ie(this),{has:n,get:i}=mu(e);let r=n.call(e,t);r||(t=Ie(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Ci(e,"delete",t,void 0),s}function s_(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Ci(t,"clear",void 0,void 0),n}function kl(t,e){return function(i,r){const s=this,o=s.__v_raw,a=Ie(o),l=e?Tp:t?Rp:ra;return!t&&un(a,"iterate",kr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Pl(t,e,n){return function(...i){const r=this.__v_raw,s=Ie(r),o=ws(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Tp:e?Rp:ra;return!e&&un(s,"iterate",l?Nd:kr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:this}}function BR(){const t={get(s){return Cl(this,s)},get size(){return Sl(this)},has:Rl,add:n_,set:i_,delete:r_,clear:s_,forEach:kl(!1,!1)},e={get(s){return Cl(this,s,!1,!0)},get size(){return Sl(this)},has:Rl,add:n_,set:i_,delete:r_,clear:s_,forEach:kl(!1,!0)},n={get(s){return Cl(this,s,!0)},get size(){return Sl(this,!0)},has(s){return Rl.call(this,s,!0)},add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear"),forEach:kl(!0,!1)},i={get(s){return Cl(this,s,!0,!0)},get size(){return Sl(this,!0)},has(s){return Rl.call(this,s,!0)},add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear"),forEach:kl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Pl(s,!1,!1),n[s]=Pl(s,!0,!1),e[s]=Pl(s,!1,!0),i[s]=Pl(s,!0,!0)}),[t,n,e,i]}const[zR,jR,HR,qR]=BR();function Ap(t,e){const n=e?t?qR:HR:t?jR:zR;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(be(n,r)&&r in i?n:i,r,s)}const WR={get:Ap(!1,!1)},KR={get:Ap(!1,!0)},GR={get:Ap(!0,!1)},cb=new WeakMap,ub=new WeakMap,hb=new WeakMap,QR=new WeakMap;function YR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function XR(t){return t.__v_skip||!Object.isExtensible(t)?0:YR(pR(t))}function eo(t){return Ps(t)?t:Cp(t,!1,lb,WR,cb)}function db(t){return Cp(t,!1,UR,KR,ub)}function fb(t){return Cp(t,!0,FR,GR,hb)}function Cp(t,e,n,i,r){if(!Ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=XR(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Gi(t){return Ps(t)?Gi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ps(t){return!!(t&&t.__v_isReadonly)}function pc(t){return!!(t&&t.__v_isShallow)}function pb(t){return Gi(t)||Ps(t)}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function _u(t){return dc(t,"__v_skip",!0),t}const ra=t=>Ge(t)?eo(t):t,Rp=t=>Ge(t)?fb(t):t;function gb(t){Ki&&Sn&&(t=Ie(t),sb(t.dep||(t.dep=bp())))}function mb(t,e){t=Ie(t);const n=t.dep;n&&Od(n)}function Je(t){return!!(t&&t.__v_isRef===!0)}function Fe(t){return yb(t,!1)}function _b(t){return yb(t,!0)}function yb(t,e){return Je(t)?t:new JR(t,e)}class JR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:ra(e)}get value(){return gb(this),this._value}set value(e){const n=this.__v_isShallow||pc(e)||Ps(e);e=n?e:Ie(e),na(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ra(e),mb(this))}}function H(t){return Je(t)?t.value:t}const ZR={get:(t,e,n)=>H(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Je(r)&&!Je(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function vb(t){return Gi(t)?t:new Proxy(t,ZR)}function eS(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=nS(t,n);return e}class tS{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return RR(Ie(this._object),this._key)}}function nS(t,e,n){const i=t[e];return Je(i)?i:new tS(t,e,n)}class iS{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ep(e,()=>{this._dirty||(this._dirty=!0,mb(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ie(this);return gb(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rS(t,e,n=!1){let i,r;const s=fe(t);return s?(i=t,r=On):(i=t.get,r=t.set),new iS(i,r,s||!r,n)}function Qi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){yu(s,e,n)}return r}function Mn(t,e,n,i){if(fe(t)){const s=Qi(t,e,n,i);return s&&Qw(s)&&s.catch(o=>{yu(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Mn(t[s],e,n,i));return r}function yu(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Qi(l,null,10,[t,o,a]);return}}sS(t,n,r,i)}function sS(t,e,n,i=!0){console.error(t)}let sa=!1,Md=!1;const $t=[];let Wn=0;const bs=[];let pi=null,wr=0;const wb=Promise.resolve();let Sp=null;function kp(t){const e=Sp||wb;return t?e.then(this?t.bind(this):t):e}function oS(t){let e=Wn+1,n=$t.length;for(;e<n;){const i=e+n>>>1;oa($t[i])<t?e=i+1:n=i}return e}function Pp(t){(!$t.length||!$t.includes(t,sa&&t.allowRecurse?Wn+1:Wn))&&(t.id==null?$t.push(t):$t.splice(oS(t.id),0,t),bb())}function bb(){!sa&&!Md&&(Md=!0,Sp=wb.then(Ib))}function aS(t){const e=$t.indexOf(t);e>Wn&&$t.splice(e,1)}function lS(t){oe(t)?bs.push(...t):(!pi||!pi.includes(t,t.allowRecurse?wr+1:wr))&&bs.push(t),bb()}function o_(t,e=sa?Wn+1:0){for(;e<$t.length;e++){const n=$t[e];n&&n.pre&&($t.splice(e,1),e--,n())}}function Eb(t){if(bs.length){const e=[...new Set(bs)];if(bs.length=0,pi){pi.push(...e);return}for(pi=e,pi.sort((n,i)=>oa(n)-oa(i)),wr=0;wr<pi.length;wr++)pi[wr]();pi=null,wr=0}}const oa=t=>t.id==null?1/0:t.id,cS=(t,e)=>{const n=oa(t)-oa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ib(t){Md=!1,sa=!0,$t.sort(cS);const e=On;try{for(Wn=0;Wn<$t.length;Wn++){const n=$t[Wn];n&&n.active!==!1&&Qi(n,null,14)}}finally{Wn=0,$t.length=0,Eb(),sa=!1,Sp=null,($t.length||bs.length)&&Ib()}}function uS(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||We;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||We;d&&(r=n.map(f=>ht(f)?f.trim():f)),h&&(r=n.map(_R))}let a,l=i[a=Ch(e)]||i[a=Ch(ri(e))];!l&&s&&(l=i[a=Ch(Xs(e))]),l&&Mn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mn(c,t,6,r)}}function Tb(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!fe(t)){const l=c=>{const u=Tb(c,e,!0);u&&(a=!0,_t(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ge(t)&&i.set(t,null),null):(oe(s)?s.forEach(l=>o[l]=null):_t(o,s),Ge(t)&&i.set(t,o),o)}function vu(t,e){return!t||!du(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Xs(e))||be(t,e))}let Tt=null,wu=null;function gc(t){const e=Tt;return Tt=t,wu=t&&t.type.__scopeId||null,e}function Ba(t){wu=t}function za(){wu=null}function Xt(t,e=Tt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&__(-1);const s=gc(e);let o;try{o=t(...r)}finally{gc(s),i._d&&__(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Sh(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let v,b;const I=gc(t);try{if(n.shapeFlag&4){const E=r||i;v=qn(u.call(E,E,h,s,f,d,g)),b=l}else{const E=e;v=qn(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),b=e.props?l:hS(l)}}catch(E){Fo.length=0,yu(E,t,1),v=Be(nr)}let R=v;if(b&&y!==!1){const E=Object.keys(b),{shapeFlag:x}=R;E.length&&x&7&&(o&&E.some(gp)&&(b=dS(b,o)),R=xs(R,b))}return n.dirs&&(R=xs(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),v=R,gc(I),v}const hS=t=>{let e;for(const n in t)(n==="class"||n==="style"||du(n))&&((e||(e={}))[n]=t[n]);return e},dS=(t,e)=>{const n={};for(const i in t)(!gp(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function fS(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?a_(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!vu(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?a_(i,o,c):!0:!!o;return!1}function a_(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!vu(n,s))return!0}return!1}function pS({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const gS=t=>t.__isSuspense;function mS(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):lS(t)}const xl={};function Ii(t,e,n){return Ab(t,e,n)}function Ab(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=We){var a;const l=wp()===((a=lt)==null?void 0:a.scope)?lt:null;let c,u=!1,h=!1;if(Je(t)?(c=()=>t.value,u=pc(t)):Gi(t)?(c=()=>t,i=!0):oe(t)?(h=!0,u=t.some(E=>Gi(E)||pc(E)),c=()=>t.map(E=>{if(Je(E))return E.value;if(Gi(E))return ps(E);if(fe(E))return Qi(E,l,2)})):fe(t)?e?c=()=>Qi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Mn(t,l,3,[f])}:c=On,e&&i){const E=c;c=()=>ps(E())}let d,f=E=>{d=I.onStop=()=>{Qi(E,l,4)}},g;if(ca)if(f=On,e?n&&Mn(e,l,3,[c(),h?[]:void 0,f]):c(),r==="sync"){const E=lk();g=E.__watcherHandles||(E.__watcherHandles=[])}else return On;let y=h?new Array(t.length).fill(xl):xl;const v=()=>{if(I.active)if(e){const E=I.run();(i||u||(h?E.some((x,$)=>na(x,y[$])):na(E,y)))&&(d&&d(),Mn(e,l,3,[E,y===xl?void 0:h&&y[0]===xl?[]:y,f]),y=E)}else I.run()};v.allowRecurse=!!e;let b;r==="sync"?b=v:r==="post"?b=()=>sn(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),b=()=>Pp(v));const I=new Ep(c,b);e?n?v():y=I.run():r==="post"?sn(I.run.bind(I),l&&l.suspense):I.run();const R=()=>{I.stop(),l&&l.scope&&mp(l.scope.effects,I)};return g&&g.push(R),R}function _S(t,e,n){const i=this.proxy,r=ht(t)?t.includes(".")?Cb(i,t):()=>i[t]:t.bind(i,i);let s;fe(e)?s=e:(s=e.handler,n=e);const o=lt;Ds(this);const a=Ab(r,s.bind(i),n);return o?Ds(o):Pr(),a}function Cb(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ps(t,e){if(!Ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Je(t))ps(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)ps(t[n],e);else if(Gw(t)||ws(t))t.forEach(n=>{ps(n,e)});else if(Xw(t))for(const n in t)ps(t[n],e);return t}function gr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Js(),Mn(l,n,8,[t.el,a,t,e]),Zs())}}function Rt(t,e){return fe(t)?(()=>_t({name:t.name},e,{setup:t}))():t}const $o=t=>!!t.type.__asyncLoader,Rb=t=>t.type.__isKeepAlive;function yS(t,e){Sb(t,"a",e)}function vS(t,e){Sb(t,"da",e)}function Sb(t,e,n=lt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(bu(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Rb(r.parent.vnode)&&wS(i,e,n,r),r=r.parent}}function wS(t,e,n,i){const r=bu(e,t,i,!0);xp(()=>{mp(i[e],r)},n)}function bu(t,e,n=lt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Js(),Ds(n);const a=Mn(e,n,t,o);return Pr(),Zs(),a});return i?r.unshift(s):r.push(s),s}}const Di=t=>(e,n=lt)=>(!ca||t==="sp")&&bu(t,(...i)=>e(...i),n),bS=Di("bm"),kb=Di("m"),ES=Di("bu"),IS=Di("u"),TS=Di("bum"),xp=Di("um"),Pb=Di("sp"),AS=Di("rtg"),CS=Di("rtc");function RS(t,e=lt){bu("ec",t,e)}const xb="components";function ja(t,e){return kS(xb,t,!0,e)||t}const SS=Symbol.for("v-ndc");function kS(t,e,n=!0,i=!1){const r=Tt||lt;if(r){const s=r.type;if(t===xb){const a=sk(s,!1);if(a&&(a===e||a===ri(e)||a===gu(ri(e))))return s}const o=l_(r[t]||s[t],e)||l_(r.appContext[t],e);return!o&&i?s:o}}function l_(t,e){return t&&(t[e]||t[ri(e)]||t[gu(ri(e))])}function _i(t,e,n,i){let r;const s=n&&n[i];if(oe(t)||ht(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Ge(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function Hn(t,e,n={},i,r){if(Tt.isCE||Tt.parent&&$o(Tt.parent)&&Tt.parent.isCE)return e!=="default"&&(n.name=e),Be("slot",n,i&&i());let s=t[e];s&&s._c&&(s._d=!1),X();const o=s&&Db(s(n)),a=si(tt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Db(t){return t.some(e=>_c(e)?!(e.type===nr||e.type===tt&&!Db(e.children)):!0)?t:null}const Ld=t=>t?Hb(t)?Lp(t)||t.proxy:Ld(t.parent):null,Vo=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ld(t.parent),$root:t=>Ld(t.root),$emit:t=>t.emit,$options:t=>Dp(t),$forceUpdate:t=>t.f||(t.f=()=>Pp(t.update)),$nextTick:t=>t.n||(t.n=kp.bind(t.proxy)),$watch:t=>_S.bind(t)}),kh=(t,e)=>t!==We&&!t.__isScriptSetup&&be(t,e),PS={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(kh(i,e))return o[e]=1,i[e];if(r!==We&&be(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&be(c,e))return o[e]=3,s[e];if(n!==We&&be(n,e))return o[e]=4,n[e];$d&&(o[e]=0)}}const u=Vo[e];let h,d;if(u)return e==="$attrs"&&un(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==We&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return kh(r,e)?(r[e]=n,!0):i!==We&&be(i,e)?(i[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==We&&be(t,o)||kh(e,o)||(a=s[0])&&be(a,o)||be(i,o)||be(Vo,o)||be(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function c_(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $d=!0;function xS(t){const e=Dp(t),n=t.proxy,i=t.ctx;$d=!1,e.beforeCreate&&u_(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:I,destroyed:R,unmounted:E,render:x,renderTracked:$,renderTriggered:J,errorCaptured:Y,serverPrefetch:le,expose:Ae,inheritAttrs:dt,components:St,directives:kt,filters:hi}=e;if(c&&DS(c,i,null),o)for(const De in o){const Te=o[De];fe(Te)&&(i[De]=Te.bind(n))}if(r){const De=r.call(n,n);Ge(De)&&(t.data=eo(De))}if($d=!0,s)for(const De in s){const Te=s[De],An=fe(Te)?Te.bind(n,n):fe(Te.get)?Te.get.bind(n,n):On,Cn=!fe(Te)&&fe(Te.set)?Te.set.bind(n):On,wn=Ce({get:An,set:Cn});Object.defineProperty(i,De,{enumerable:!0,configurable:!0,get:()=>wn.value,set:wt=>wn.value=wt})}if(a)for(const De in a)Nb(a[De],i,n,De);if(l){const De=fe(l)?l.call(n):l;Reflect.ownKeys(De).forEach(Te=>{Xl(Te,De[Te])})}u&&u_(u,t,"c");function we(De,Te){oe(Te)?Te.forEach(An=>De(An.bind(n))):Te&&De(Te.bind(n))}if(we(bS,h),we(kb,d),we(ES,f),we(IS,g),we(yS,y),we(vS,v),we(RS,Y),we(CS,$),we(AS,J),we(TS,I),we(xp,E),we(Pb,le),oe(Ae))if(Ae.length){const De=t.exposed||(t.exposed={});Ae.forEach(Te=>{Object.defineProperty(De,Te,{get:()=>n[Te],set:An=>n[Te]=An})})}else t.exposed||(t.exposed={});x&&t.render===On&&(t.render=x),dt!=null&&(t.inheritAttrs=dt),St&&(t.components=St),kt&&(t.directives=kt)}function DS(t,e,n=On){oe(t)&&(t=Vd(t));for(const i in t){const r=t[i];let s;Ge(r)?"default"in r?s=an(r.from||i,r.default,!0):s=an(r.from||i):s=an(r),Je(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function u_(t,e,n){Mn(oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nb(t,e,n,i){const r=i.includes(".")?Cb(n,i):()=>n[i];if(ht(t)){const s=e[t];fe(s)&&Ii(r,s)}else if(fe(t))Ii(r,t.bind(n));else if(Ge(t))if(oe(t))t.forEach(s=>Nb(s,e,n,i));else{const s=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(s)&&Ii(r,s,t)}}function Dp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>mc(l,c,o,!0)),mc(l,e,o)),Ge(e)&&s.set(e,l),l}function mc(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&mc(t,s,n,!0),r&&r.forEach(o=>mc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=NS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const NS={data:h_,props:d_,emits:d_,methods:Po,computed:Po,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Po,directives:Po,watch:MS,provide:h_,inject:OS};function h_(t,e){return e?t?function(){return _t(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function OS(t,e){return Po(Vd(t),Vd(e))}function Vd(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qt(t,e){return t?[...new Set([].concat(t,e))]:e}function Po(t,e){return t?_t(Object.create(null),t,e):e}function d_(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:_t(Object.create(null),c_(t),c_(e??{})):e}function MS(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const i in e)n[i]=Qt(t[i],e[i]);return n}function Ob(){return{app:null,config:{isNativeTag:hR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let LS=0;function $S(t,e){return function(i,r=null){fe(i)||(i=_t({},i)),r!=null&&!Ge(r)&&(r=null);const s=Ob(),o=new Set;let a=!1;const l=s.app={_uid:LS++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ck,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&fe(c.install)?(o.add(c),c.install(l,...u)):fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const d=Be(i,r);return d.appContext=s,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Lp(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){aa=l;try{return c()}finally{aa=null}}};return l}}let aa=null;function Xl(t,e){if(lt){let n=lt.provides;const i=lt.parent&&lt.parent.provides;i===n&&(n=lt.provides=Object.create(i)),n[t]=e}}function an(t,e,n=!1){const i=lt||Tt;if(i||aa){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:aa._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(e)?e.call(i&&i.proxy):e}}function VS(){return!!(lt||Tt||aa)}function FS(t,e,n,i=!1){const r={},s={};dc(s,Iu,1),t.propsDefaults=Object.create(null),Mb(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:db(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function US(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Ie(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(vu(t.emitsOptions,d))continue;const f=e[d];if(l)if(be(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const g=ri(d);r[g]=Fd(l,a,g,f,t,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{Mb(t,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=Xs(h))===h||!be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Fd(l,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!be(e,h))&&(delete s[h],c=!0)}c&&Ci(t,"set","$attrs")}function Mb(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yl(l))continue;const c=e[l];let u;r&&be(r,u=ri(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:vu(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ie(n),c=a||We;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Fd(r,l,h,c[h],t,!be(c,h))}}return o}function Fd(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Ds(r),i=c[n]=l.call(null,e),Pr())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Xs(n))&&(i=!0))}return i}function Lb(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!fe(t)){const u=h=>{l=!0;const[d,f]=Lb(h,e,!0);_t(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ge(t)&&i.set(t,vs),vs;if(oe(s))for(let u=0;u<s.length;u++){const h=ri(s[u]);f_(h)&&(o[h]=We)}else if(s)for(const u in s){const h=ri(u);if(f_(h)){const d=s[u],f=o[h]=oe(d)||fe(d)?{type:d}:_t({},d);if(f){const g=m_(Boolean,f.type),y=m_(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||be(f,"default"))&&a.push(h)}}}const c=[o,a];return Ge(t)&&i.set(t,c),c}function f_(t){return t[0]!=="$"}function p_(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function g_(t,e){return p_(t)===p_(e)}function m_(t,e){return oe(e)?e.findIndex(n=>g_(n,t)):fe(e)&&g_(e,t)?0:-1}const $b=t=>t[0]==="_"||t==="$stable",Np=t=>oe(t)?t.map(qn):[qn(t)],BS=(t,e,n)=>{if(e._n)return e;const i=Xt((...r)=>Np(e(...r)),n);return i._c=!1,i},Vb=(t,e,n)=>{const i=t._ctx;for(const r in t){if($b(r))continue;const s=t[r];if(fe(s))e[r]=BS(r,s,i);else if(s!=null){const o=Np(s);e[r]=()=>o}}},Fb=(t,e)=>{const n=Np(e);t.slots.default=()=>n},zS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ie(e),dc(e,"_",n)):Vb(e,t.slots={})}else t.slots={},e&&Fb(t,e);dc(t.slots,Iu,1)},jS=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=We;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(_t(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Vb(e,r)),o=e}else e&&(Fb(t,e),o={default:1});if(s)for(const a in r)!$b(a)&&!(a in o)&&delete r[a]};function Ud(t,e,n,i,r=!1){if(oe(t)){t.forEach((d,f)=>Ud(d,e&&(oe(e)?e[f]:e),n,i,r));return}if($o(i)&&!r)return;const s=i.shapeFlag&4?Lp(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===We?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ht(c)?(u[c]=null,be(h,c)&&(h[c]=null)):Je(c)&&(c.value=null)),fe(l))Qi(l,a,12,[o,u]);else{const d=ht(l),f=Je(l);if(d||f){const g=()=>{if(t.f){const y=d?be(h,l)?h[l]:u[l]:l.value;r?oe(y)&&mp(y,s):oe(y)?y.includes(s)||y.push(s):d?(u[l]=[s],be(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,be(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,sn(g,n)):g()}}}const sn=mS;function HS(t){return qS(t)}function qS(t,e){const n=xd();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=On,insertStaticContent:g}=t,y=(p,m,w,A=null,C=null,P=null,j=!1,M=null,L=!!m.dynamicChildren)=>{if(p===m)return;p&&!vo(p,m)&&(A=_(p),wt(p,C,P,!0),p=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:N,ref:ee,shapeFlag:K}=m;switch(N){case Eu:v(p,m,w,A);break;case nr:b(p,m,w,A);break;case Ph:p==null&&I(m,w,A,j);break;case tt:St(p,m,w,A,C,P,j,M,L);break;default:K&1?x(p,m,w,A,C,P,j,M,L):K&6?kt(p,m,w,A,C,P,j,M,L):(K&64||K&128)&&N.process(p,m,w,A,C,P,j,M,L,S)}ee!=null&&C&&Ud(ee,p&&p.ref,P,m||p,!m)},v=(p,m,w,A)=>{if(p==null)i(m.el=a(m.children),w,A);else{const C=m.el=p.el;m.children!==p.children&&c(C,m.children)}},b=(p,m,w,A)=>{p==null?i(m.el=l(m.children||""),w,A):m.el=p.el},I=(p,m,w,A)=>{[p.el,p.anchor]=g(p.children,m,w,A,p.el,p.anchor)},R=({el:p,anchor:m},w,A)=>{let C;for(;p&&p!==m;)C=d(p),i(p,w,A),p=C;i(m,w,A)},E=({el:p,anchor:m})=>{let w;for(;p&&p!==m;)w=d(p),r(p),p=w;r(m)},x=(p,m,w,A,C,P,j,M,L)=>{j=j||m.type==="svg",p==null?$(m,w,A,C,P,j,M,L):le(p,m,C,P,j,M,L)},$=(p,m,w,A,C,P,j,M)=>{let L,N;const{type:ee,props:K,shapeFlag:te,transition:ce,dirs:pe}=p;if(L=p.el=o(p.type,P,K&&K.is,K),te&8?u(L,p.children):te&16&&Y(p.children,L,null,A,C,P&&ee!=="foreignObject",j,M),pe&&gr(p,null,A,"created"),J(L,p,p.scopeId,j,A),K){for(const $e in K)$e!=="value"&&!Yl($e)&&s(L,$e,null,K[$e],P,p.children,A,C,et);"value"in K&&s(L,"value",null,K.value),(N=K.onVnodeBeforeMount)&&jn(N,A,p)}pe&&gr(p,null,A,"beforeMount");const Ue=(!C||C&&!C.pendingBranch)&&ce&&!ce.persisted;Ue&&ce.beforeEnter(L),i(L,m,w),((N=K&&K.onVnodeMounted)||Ue||pe)&&sn(()=>{N&&jn(N,A,p),Ue&&ce.enter(L),pe&&gr(p,null,A,"mounted")},C)},J=(p,m,w,A,C)=>{if(w&&f(p,w),A)for(let P=0;P<A.length;P++)f(p,A[P]);if(C){let P=C.subTree;if(m===P){const j=C.vnode;J(p,j,j.scopeId,j.slotScopeIds,C.parent)}}},Y=(p,m,w,A,C,P,j,M,L=0)=>{for(let N=L;N<p.length;N++){const ee=p[N]=M?Ui(p[N]):qn(p[N]);y(null,ee,m,w,A,C,P,j,M)}},le=(p,m,w,A,C,P,j)=>{const M=m.el=p.el;let{patchFlag:L,dynamicChildren:N,dirs:ee}=m;L|=p.patchFlag&16;const K=p.props||We,te=m.props||We;let ce;w&&mr(w,!1),(ce=te.onVnodeBeforeUpdate)&&jn(ce,w,m,p),ee&&gr(m,p,w,"beforeUpdate"),w&&mr(w,!0);const pe=C&&m.type!=="foreignObject";if(N?Ae(p.dynamicChildren,N,M,w,A,pe,P):j||Te(p,m,M,null,w,A,pe,P,!1),L>0){if(L&16)dt(M,m,K,te,w,A,C);else if(L&2&&K.class!==te.class&&s(M,"class",null,te.class,C),L&4&&s(M,"style",K.style,te.style,C),L&8){const Ue=m.dynamicProps;for(let $e=0;$e<Ue.length;$e++){const nt=Ue[$e],Rn=K[nt],rs=te[nt];(rs!==Rn||nt==="value")&&s(M,nt,Rn,rs,C,p.children,w,A,et)}}L&1&&p.children!==m.children&&u(M,m.children)}else!j&&N==null&&dt(M,m,K,te,w,A,C);((ce=te.onVnodeUpdated)||ee)&&sn(()=>{ce&&jn(ce,w,m,p),ee&&gr(m,p,w,"updated")},A)},Ae=(p,m,w,A,C,P,j)=>{for(let M=0;M<m.length;M++){const L=p[M],N=m[M],ee=L.el&&(L.type===tt||!vo(L,N)||L.shapeFlag&70)?h(L.el):w;y(L,N,ee,null,A,C,P,j,!0)}},dt=(p,m,w,A,C,P,j)=>{if(w!==A){if(w!==We)for(const M in w)!Yl(M)&&!(M in A)&&s(p,M,w[M],null,j,m.children,C,P,et);for(const M in A){if(Yl(M))continue;const L=A[M],N=w[M];L!==N&&M!=="value"&&s(p,M,N,L,j,m.children,C,P,et)}"value"in A&&s(p,"value",w.value,A.value)}},St=(p,m,w,A,C,P,j,M,L)=>{const N=m.el=p?p.el:a(""),ee=m.anchor=p?p.anchor:a("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:ce}=m;ce&&(M=M?M.concat(ce):ce),p==null?(i(N,w,A),i(ee,w,A),Y(m.children,w,ee,C,P,j,M,L)):K>0&&K&64&&te&&p.dynamicChildren?(Ae(p.dynamicChildren,te,w,C,P,j,M),(m.key!=null||C&&m===C.subTree)&&Ub(p,m,!0)):Te(p,m,w,ee,C,P,j,M,L)},kt=(p,m,w,A,C,P,j,M,L)=>{m.slotScopeIds=M,p==null?m.shapeFlag&512?C.ctx.activate(m,w,A,j,L):hi(m,w,A,C,P,j,L):rn(p,m,L)},hi=(p,m,w,A,C,P,j)=>{const M=p.component=ek(p,A,C);if(Rb(p)&&(M.ctx.renderer=S),tk(M),M.asyncDep){if(C&&C.registerDep(M,we),!p.el){const L=M.subTree=Be(nr);b(null,L,m,w)}return}we(M,p,m,w,C,P,j)},rn=(p,m,w)=>{const A=m.component=p.component;if(fS(p,m,w))if(A.asyncDep&&!A.asyncResolved){De(A,m,w);return}else A.next=m,aS(A.update),A.update();else m.el=p.el,A.vnode=m},we=(p,m,w,A,C,P,j)=>{const M=()=>{if(p.isMounted){let{next:ee,bu:K,u:te,parent:ce,vnode:pe}=p,Ue=ee,$e;mr(p,!1),ee?(ee.el=pe.el,De(p,ee,j)):ee=pe,K&&Rh(K),($e=ee.props&&ee.props.onVnodeBeforeUpdate)&&jn($e,ce,ee,pe),mr(p,!0);const nt=Sh(p),Rn=p.subTree;p.subTree=nt,y(Rn,nt,h(Rn.el),_(Rn),p,C,P),ee.el=nt.el,Ue===null&&pS(p,nt.el),te&&sn(te,C),($e=ee.props&&ee.props.onVnodeUpdated)&&sn(()=>jn($e,ce,ee,pe),C)}else{let ee;const{el:K,props:te}=m,{bm:ce,m:pe,parent:Ue}=p,$e=$o(m);if(mr(p,!1),ce&&Rh(ce),!$e&&(ee=te&&te.onVnodeBeforeMount)&&jn(ee,Ue,m),mr(p,!0),K&&D){const nt=()=>{p.subTree=Sh(p),D(K,p.subTree,p,C,null)};$e?m.type.__asyncLoader().then(()=>!p.isUnmounted&&nt()):nt()}else{const nt=p.subTree=Sh(p);y(null,nt,w,A,p,C,P),m.el=nt.el}if(pe&&sn(pe,C),!$e&&(ee=te&&te.onVnodeMounted)){const nt=m;sn(()=>jn(ee,Ue,nt),C)}(m.shapeFlag&256||Ue&&$o(Ue.vnode)&&Ue.vnode.shapeFlag&256)&&p.a&&sn(p.a,C),p.isMounted=!0,m=w=A=null}},L=p.effect=new Ep(M,()=>Pp(N),p.scope),N=p.update=()=>L.run();N.id=p.uid,mr(p,!0),N()},De=(p,m,w)=>{m.component=p;const A=p.vnode.props;p.vnode=m,p.next=null,US(p,m.props,A,w),jS(p,m.children,w),Js(),o_(),Zs()},Te=(p,m,w,A,C,P,j,M,L=!1)=>{const N=p&&p.children,ee=p?p.shapeFlag:0,K=m.children,{patchFlag:te,shapeFlag:ce}=m;if(te>0){if(te&128){Cn(N,K,w,A,C,P,j,M,L);return}else if(te&256){An(N,K,w,A,C,P,j,M,L);return}}ce&8?(ee&16&&et(N,C,P),K!==N&&u(w,K)):ee&16?ce&16?Cn(N,K,w,A,C,P,j,M,L):et(N,C,P,!0):(ee&8&&u(w,""),ce&16&&Y(K,w,A,C,P,j,M,L))},An=(p,m,w,A,C,P,j,M,L)=>{p=p||vs,m=m||vs;const N=p.length,ee=m.length,K=Math.min(N,ee);let te;for(te=0;te<K;te++){const ce=m[te]=L?Ui(m[te]):qn(m[te]);y(p[te],ce,w,null,C,P,j,M,L)}N>ee?et(p,C,P,!0,!1,K):Y(m,w,A,C,P,j,M,L,K)},Cn=(p,m,w,A,C,P,j,M,L)=>{let N=0;const ee=m.length;let K=p.length-1,te=ee-1;for(;N<=K&&N<=te;){const ce=p[N],pe=m[N]=L?Ui(m[N]):qn(m[N]);if(vo(ce,pe))y(ce,pe,w,null,C,P,j,M,L);else break;N++}for(;N<=K&&N<=te;){const ce=p[K],pe=m[te]=L?Ui(m[te]):qn(m[te]);if(vo(ce,pe))y(ce,pe,w,null,C,P,j,M,L);else break;K--,te--}if(N>K){if(N<=te){const ce=te+1,pe=ce<ee?m[ce].el:A;for(;N<=te;)y(null,m[N]=L?Ui(m[N]):qn(m[N]),w,pe,C,P,j,M,L),N++}}else if(N>te)for(;N<=K;)wt(p[N],C,P,!0),N++;else{const ce=N,pe=N,Ue=new Map;for(N=pe;N<=te;N++){const hn=m[N]=L?Ui(m[N]):qn(m[N]);hn.key!=null&&Ue.set(hn.key,N)}let $e,nt=0;const Rn=te-pe+1;let rs=!1,Qm=0;const yo=new Array(Rn);for(N=0;N<Rn;N++)yo[N]=0;for(N=ce;N<=K;N++){const hn=p[N];if(nt>=Rn){wt(hn,C,P,!0);continue}let zn;if(hn.key!=null)zn=Ue.get(hn.key);else for($e=pe;$e<=te;$e++)if(yo[$e-pe]===0&&vo(hn,m[$e])){zn=$e;break}zn===void 0?wt(hn,C,P,!0):(yo[zn-pe]=N+1,zn>=Qm?Qm=zn:rs=!0,y(hn,m[zn],w,null,C,P,j,M,L),nt++)}const Ym=rs?WS(yo):vs;for($e=Ym.length-1,N=Rn-1;N>=0;N--){const hn=pe+N,zn=m[hn],Xm=hn+1<ee?m[hn+1].el:A;yo[N]===0?y(null,zn,w,Xm,C,P,j,M,L):rs&&($e<0||N!==Ym[$e]?wn(zn,w,Xm,2):$e--)}}},wn=(p,m,w,A,C=null)=>{const{el:P,type:j,transition:M,children:L,shapeFlag:N}=p;if(N&6){wn(p.component.subTree,m,w,A);return}if(N&128){p.suspense.move(m,w,A);return}if(N&64){j.move(p,m,w,S);return}if(j===tt){i(P,m,w);for(let K=0;K<L.length;K++)wn(L[K],m,w,A);i(p.anchor,m,w);return}if(j===Ph){R(p,m,w);return}if(A!==2&&N&1&&M)if(A===0)M.beforeEnter(P),i(P,m,w),sn(()=>M.enter(P),C);else{const{leave:K,delayLeave:te,afterLeave:ce}=M,pe=()=>i(P,m,w),Ue=()=>{K(P,()=>{pe(),ce&&ce()})};te?te(P,pe,Ue):Ue()}else i(P,m,w)},wt=(p,m,w,A=!1,C=!1)=>{const{type:P,props:j,ref:M,children:L,dynamicChildren:N,shapeFlag:ee,patchFlag:K,dirs:te}=p;if(M!=null&&Ud(M,null,w,p,!0),ee&256){m.ctx.deactivate(p);return}const ce=ee&1&&te,pe=!$o(p);let Ue;if(pe&&(Ue=j&&j.onVnodeBeforeUnmount)&&jn(Ue,m,p),ee&6)pr(p.component,w,A);else{if(ee&128){p.suspense.unmount(w,A);return}ce&&gr(p,null,m,"beforeUnmount"),ee&64?p.type.remove(p,m,w,C,S,A):N&&(P!==tt||K>0&&K&64)?et(N,m,w,!1,!0):(P===tt&&K&384||!C&&ee&16)&&et(L,m,w),A&&di(p)}(pe&&(Ue=j&&j.onVnodeUnmounted)||ce)&&sn(()=>{Ue&&jn(Ue,m,p),ce&&gr(p,null,m,"unmounted")},w)},di=p=>{const{type:m,el:w,anchor:A,transition:C}=p;if(m===tt){Mi(w,A);return}if(m===Ph){E(p);return}const P=()=>{r(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:j,delayLeave:M}=C,L=()=>j(w,P);M?M(p.el,P,L):L()}else P()},Mi=(p,m)=>{let w;for(;p!==m;)w=d(p),r(p),p=w;r(m)},pr=(p,m,w)=>{const{bum:A,scope:C,update:P,subTree:j,um:M}=p;A&&Rh(A),C.stop(),P&&(P.active=!1,wt(j,p,m,w)),M&&sn(M,m),sn(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},et=(p,m,w,A=!1,C=!1,P=0)=>{for(let j=P;j<p.length;j++)wt(p[j],m,w,A,C)},_=p=>p.shapeFlag&6?_(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),T=(p,m,w)=>{p==null?m._vnode&&wt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,w),o_(),Eb(),m._vnode=p},S={p:y,um:wt,m:wn,r:di,mt:hi,mc:Y,pc:Te,pbc:Ae,n:_,o:t};let U,D;return e&&([U,D]=e(S)),{render:T,hydrate:U,createApp:$S(T,U)}}function mr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ub(t,e,n=!1){const i=t.children,r=e.children;if(oe(i)&&oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ui(r[s]),a.el=o.el),n||Ub(o,a)),a.type===Eu&&(a.el=o.el)}}function WS(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const KS=t=>t.__isTeleport,tt=Symbol.for("v-fgt"),Eu=Symbol.for("v-txt"),nr=Symbol.for("v-cmt"),Ph=Symbol.for("v-stc"),Fo=[];let xn=null;function X(t=!1){Fo.push(xn=t?null:[])}function GS(){Fo.pop(),xn=Fo[Fo.length-1]||null}let la=1;function __(t){la+=t}function Bb(t){return t.dynamicChildren=la>0?xn||vs:null,GS(),la>0&&xn&&xn.push(t),t}function se(t,e,n,i,r,s){return Bb(B(t,e,n,i,r,s,!0))}function si(t,e,n,i,r){return Bb(Be(t,e,n,i,r,!0))}function _c(t){return t?t.__v_isVNode===!0:!1}function vo(t,e){return t.type===e.type&&t.key===e.key}const Iu="__vInternal",zb=({key:t})=>t??null,Jl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||Je(t)||fe(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,i=0,r=null,s=t===tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zb(e),ref:e&&Jl(e),scopeId:wu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Op(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ht(n)?8:16),la>0&&!o&&xn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xn.push(l),l}const Be=QS;function QS(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===SS)&&(t=nr),_c(t)){const a=xs(t,e,!0);return n&&Op(a,n),la>0&&!s&&xn&&(a.shapeFlag&6?xn[xn.indexOf(t)]=a:xn.push(a)),a.patchFlag|=-2,a}if(ok(t)&&(t=t.__vccOpts),e){e=YS(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=mi(a)),Ge(l)&&(pb(l)&&!oe(l)&&(l=_t({},l)),e.style=ia(l))}const o=ht(t)?1:gS(t)?128:KS(t)?64:Ge(t)?4:fe(t)?2:0;return B(t,e,n,i,r,o,s,!0)}function YS(t){return t?pb(t)||Iu in t?_t({},t):t:null}function xs(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?XS(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zb(a),ref:e&&e.ref?n&&r?oe(r)?r.concat(Jl(e)):[r,Jl(e)]:Jl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xs(t.ssContent),ssFallback:t.ssFallback&&xs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Nt(t=" ",e=0){return Be(Eu,null,t,e)}function rt(t="",e=!1){return e?(X(),si(nr,null,t)):Be(nr,null,t)}function qn(t){return t==null||typeof t=="boolean"?Be(nr):oe(t)?Be(tt,null,t.slice()):typeof t=="object"?Ui(t):Be(Eu,null,String(t))}function Ui(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xs(t)}function Op(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Op(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Iu in e)?e._ctx=Tt:r===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),i&64?(n=16,e=[Nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function XS(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=mi([e.class,i.class]));else if(r==="style")e.style=ia([e.style,i.style]);else if(du(r)){const s=e[r],o=i[r];o&&s!==o&&!(oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function jn(t,e,n,i=null){Mn(t,e,7,[n,i])}const JS=Ob();let ZS=0;function ek(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||JS,s={uid:ZS++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new eb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lb(i,r),emitsOptions:Tb(i,r),emit:null,emitted:null,propsDefaults:We,inheritAttrs:i.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=uS.bind(null,s),t.ce&&t.ce(s),s}let lt=null;const jb=()=>lt||Tt;let Mp,ss,y_="__VUE_INSTANCE_SETTERS__";(ss=xd()[y_])||(ss=xd()[y_]=[]),ss.push(t=>lt=t),Mp=t=>{ss.length>1?ss.forEach(e=>e(t)):ss[0](t)};const Ds=t=>{Mp(t),t.scope.on()},Pr=()=>{lt&&lt.scope.off(),Mp(null)};function Hb(t){return t.vnode.shapeFlag&4}let ca=!1;function tk(t,e=!1){ca=e;const{props:n,children:i}=t.vnode,r=Hb(t);FS(t,n,r,e),zS(t,i);const s=r?nk(t,e):void 0;return ca=!1,s}function nk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_u(new Proxy(t.ctx,PS));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?rk(t):null;Ds(t),Js();const s=Qi(i,t,0,[t.props,r]);if(Zs(),Pr(),Qw(s)){if(s.then(Pr,Pr),e)return s.then(o=>{v_(t,o,e)}).catch(o=>{yu(o,t,0)});t.asyncDep=s}else v_(t,s,e)}else qb(t,e)}function v_(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ge(e)&&(t.setupState=vb(e)),qb(t,n)}let w_;function qb(t,e,n){const i=t.type;if(!t.render){if(!e&&w_&&!i.render){const r=i.template||Dp(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=_t(_t({isCustomElement:s,delimiters:a},o),l);i.render=w_(r,c)}}t.render=i.render||On}Ds(t),Js(),xS(t),Zs(),Pr()}function ik(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return un(t,"get","$attrs"),e[n]}}))}function rk(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ik(t)},slots:t.slots,emit:t.emit,expose:e}}function Lp(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vb(_u(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vo)return Vo[n](t)},has(e,n){return n in e||n in Vo}}))}function sk(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function ok(t){return fe(t)&&"__vccOpts"in t}const Ce=(t,e)=>rS(t,e,ca);function Wb(t,e,n){const i=arguments.length;return i===2?Ge(e)&&!oe(e)?_c(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&_c(n)&&(n=[n]),Be(t,e,n))}const ak=Symbol.for("v-scx"),lk=()=>an(ak),ck="3.3.4",uk="http://www.w3.org/2000/svg",br=typeof document<"u"?document:null,b_=br&&br.createElement("template"),hk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?br.createElementNS(uk,t):br.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>br.createTextNode(t),createComment:t=>br.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>br.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{b_.innerHTML=i?`<svg>${t}</svg>`:t;const a=b_.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dk(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function fk(t,e,n){const i=t.style,r=ht(n);if(n&&!r){if(e&&!ht(e))for(const s in e)n[s]==null&&Bd(i,s,"");for(const s in n)Bd(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const E_=/\s*!important$/;function Bd(t,e,n){if(oe(n))n.forEach(i=>Bd(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=pk(t,e);E_.test(n)?t.setProperty(Xs(i),n.replace(E_,""),"important"):t[i]=n}}const I_=["Webkit","Moz","ms"],xh={};function pk(t,e){const n=xh[e];if(n)return n;let i=ri(e);if(i!=="filter"&&i in t)return xh[e]=i;i=gu(i);for(let r=0;r<I_.length;r++){const s=I_[r]+i;if(s in t)return xh[e]=s}return e}const T_="http://www.w3.org/1999/xlink";function gk(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(T_,e.slice(6,e.length)):t.setAttributeNS(T_,e,n);else{const s=IR(e);n==null||s&&!Jw(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function mk(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jw(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _k(t,e,n,i){t.addEventListener(e,n,i)}function yk(t,e,n,i){t.removeEventListener(e,n,i)}function vk(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=wk(e);if(i){const c=s[e]=Ik(i,r);_k(t,a,c,l)}else o&&(yk(t,a,o,l),s[e]=void 0)}}const A_=/(?:Once|Passive|Capture)$/;function wk(t){let e;if(A_.test(t)){e={};let i;for(;i=t.match(A_);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xs(t.slice(2)),e]}let Dh=0;const bk=Promise.resolve(),Ek=()=>Dh||(bk.then(()=>Dh=0),Dh=Date.now());function Ik(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Mn(Tk(i,n.value),e,5,[i])};return n.value=t,n.attached=Ek(),n}function Tk(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const C_=/^on[a-z]/,Ak=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?dk(t,i,r):e==="style"?fk(t,n,i):du(e)?gp(e)||vk(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ck(t,e,i,r))?mk(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),gk(t,e,i,r))};function Ck(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&C_.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||C_.test(e)&&ht(n)?!1:e in t}const Rk=["ctrl","shift","alt","meta"],Sk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rk.some(n=>t[`${n}Key`]&&!e.includes(n))},os=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=Sk[e[r]];if(s&&s(n,e))return}return t(n,...i)},kk=_t({patchProp:Ak},hk);let R_;function Pk(){return R_||(R_=HS(kk))}const xk=(...t)=>{const e=Pk().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Dk(i);if(!r)return;const s=e._component;!fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dk(t){return ht(t)?document.querySelector(t):t}/**
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
 */const Kb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const V=function(t,e){if(!t)throw to(e)},to=function(t){return new Error("Firebase Database ("+Kb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Gb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Nk=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new Ok;const d=s<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const g=c<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ok extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qb=function(t){const e=Gb(t);return Tu.encodeByteArray(e,!0)},yc=function(t){return Qb(t).replace(/\./g,"")},vc=function(t){try{return Tu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mk(t){return Yb(void 0,t)}function Yb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lk(n)||(t[n]=Yb(t[n],e[n]));return t}function Lk(t){return t!=="__proto__"}/**
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
 */function $k(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vk=()=>$k().__FIREBASE_DEFAULTS__,Fk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vc(t[1]);return e&&JSON.parse(e)},$p=()=>{try{return Vk()||Fk()||Uk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xb=t=>{var e,n;return(n=(e=$p())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bk=t=>{const e=Xb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Jb=()=>{var t;return(t=$p())===null||t===void 0?void 0:t.config},Zb=t=>{var e;return(e=$p())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ua{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function zk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yc(JSON.stringify(n)),yc(JSON.stringify(o)),a].join(".")}/**
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
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function eE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jk(){const t=qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nE(){return Kb.NODE_ADMIN===!0}function Au(){try{return typeof indexedDB=="object"}catch{return!1}}function Fp(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function iE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hk="FirebaseError";class Tn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Hk,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?qk(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Tn(r,a,i)}}function qk(t,e){return t.replace(Wk,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Wk=/\{\$([^}]+)}/g;/**
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
 */function ha(t){return JSON.parse(t)}function It(t){return JSON.stringify(t)}/**
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
 */const rE=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=ha(vc(s[0])||""),n=ha(vc(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Kk=function(t){const e=rE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Gk=function(t){const e=rE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Oi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ns(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wc(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function da(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(S_(s)&&S_(o)){if(!da(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function S_(t){return t!==null&&typeof t=="object"}/**
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
 */function no(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Qk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Yk(t,e){const n=new Xk(t,e);return n.subscribe.bind(n)}class Xk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Jk(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Nh),r.error===void 0&&(r.error=Nh),r.complete===void 0&&(r.complete=Nh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nh(){}function Zk(t,e){return`${t} failed: ${e} argument `}/**
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
 */const eP=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,V(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Cu=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const tP=1e3,nP=2,iP=4*60*60*1e3,rP=.5;function k_(t,e=tP,n=nP){const i=e*Math.pow(n,t),r=Math.round(rP*i*(Math.random()-.5)*2);return Math.min(iP,i+r)}/**
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
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Ct{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class sP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ua;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aP(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:oP(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oP(t){return t===yr?void 0:t}function aP(t){return t.instantiationMode==="EAGER"}/**
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
 */class lP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const cP={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},uP=Ee.INFO,hP={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},dP=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=hP[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class io{constructor(e){this.name=e,this._logLevel=uP,this._logHandler=dP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const fP=(t,e)=>e.some(n=>t instanceof n);let P_,x_;function pP(){return P_||(P_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gP(){return x_||(x_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sE=new WeakMap,jd=new WeakMap,oE=new WeakMap,Oh=new WeakMap,Up=new WeakMap;function mP(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yi(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sE.set(n,t)}).catch(()=>{}),Up.set(e,t),e}function _P(t){if(jd.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jd.set(t,e)}let Hd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yP(t){Hd=t(Hd)}function vP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Mh(this),e,...n);return oE.set(i,e.sort?e.sort():[e]),Yi(i)}:gP().includes(t)?function(...e){return t.apply(Mh(this),e),Yi(sE.get(this))}:function(...e){return Yi(t.apply(Mh(this),e))}}function wP(t){return typeof t=="function"?vP(t):(t instanceof IDBTransaction&&_P(t),fP(t,pP())?new Proxy(t,Hd):t)}function Yi(t){if(t instanceof IDBRequest)return mP(t);if(Oh.has(t))return Oh.get(t);const e=wP(t);return e!==t&&(Oh.set(t,e),Up.set(e,t)),e}const Mh=t=>Up.get(t);function bP(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Yi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Yi(o.result),l.oldVersion,l.newVersion,Yi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const EP=["get","getKey","getAll","getAllKeys","count"],IP=["put","add","delete","clear"],Lh=new Map;function D_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lh.get(e))return Lh.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=IP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||EP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Lh.set(e,s),s}yP(t=>({...t,get:(e,n,i)=>D_(e,n)||t.get(e,n,i),has:(e,n)=>!!D_(e,n)||t.has(e,n)}));/**
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
 */class TP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function AP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qd="@firebase/app",N_="0.9.15";/**
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
 */const Or=new io("@firebase/app"),CP="@firebase/app-compat",RP="@firebase/analytics-compat",SP="@firebase/analytics",kP="@firebase/app-check-compat",PP="@firebase/app-check",xP="@firebase/auth",DP="@firebase/auth-compat",NP="@firebase/database",OP="@firebase/database-compat",MP="@firebase/functions",LP="@firebase/functions-compat",$P="@firebase/installations",VP="@firebase/installations-compat",FP="@firebase/messaging",UP="@firebase/messaging-compat",BP="@firebase/performance",zP="@firebase/performance-compat",jP="@firebase/remote-config",HP="@firebase/remote-config-compat",qP="@firebase/storage",WP="@firebase/storage-compat",KP="@firebase/firestore",GP="@firebase/firestore-compat",QP="firebase",YP="10.1.0";/**
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
 */const Wd="[DEFAULT]",XP={[qd]:"fire-core",[CP]:"fire-core-compat",[SP]:"fire-analytics",[RP]:"fire-analytics-compat",[PP]:"fire-app-check",[kP]:"fire-app-check-compat",[xP]:"fire-auth",[DP]:"fire-auth-compat",[NP]:"fire-rtdb",[OP]:"fire-rtdb-compat",[MP]:"fire-fn",[LP]:"fire-fn-compat",[$P]:"fire-iid",[VP]:"fire-iid-compat",[FP]:"fire-fcm",[UP]:"fire-fcm-compat",[BP]:"fire-perf",[zP]:"fire-perf-compat",[jP]:"fire-rc",[HP]:"fire-rc-compat",[qP]:"fire-gcs",[WP]:"fire-gcs-compat",[KP]:"fire-fst",[GP]:"fire-fst-compat","fire-js":"fire-js",[QP]:"fire-js-all"};/**
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
 */const bc=new Map,Kd=new Map;function JP(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wt(t){const e=t.name;if(Kd.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;Kd.set(e,t);for(const n of bc.values())JP(n,t);return!0}function lr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ZP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xi=new Ni("app","Firebase",ZP);/**
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
 */class ex{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xi.create("app-deleted",{appName:this._name})}}/**
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
 */const cr=YP;function aE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Wd,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Xi.create("bad-app-name",{appName:String(r)});if(n||(n=Jb()),!n)throw Xi.create("no-options");const s=bc.get(r);if(s){if(da(n,s.options)&&da(i,s.config))return s;throw Xi.create("duplicate-app",{appName:r})}const o=new lP(r);for(const l of Kd.values())o.addComponent(l);const a=new ex(n,i,o);return bc.set(r,a),a}function Ha(t=Wd){const e=bc.get(t);if(!e&&t===Wd&&Jb())return aE();if(!e)throw Xi.create("no-app",{appName:t});return e}function ut(t,e,n){var i;let r=(i=XP[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(a.join(" "));return}Wt(new Ct(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tx="firebase-heartbeat-database",nx=1,fa="firebase-heartbeat-store";let $h=null;function lE(){return $h||($h=bP(tx,nx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fa)}}}).catch(t=>{throw Xi.create("idb-open",{originalErrorMessage:t.message})})),$h}async function ix(t){try{return await(await lE()).transaction(fa).objectStore(fa).get(cE(t))}catch(e){if(e instanceof Tn)Or.warn(e.message);else{const n=Xi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(n.message)}}}async function O_(t,e){try{const i=(await lE()).transaction(fa,"readwrite");await i.objectStore(fa).put(e,cE(t)),await i.done}catch(n){if(n instanceof Tn)Or.warn(n.message);else{const i=Xi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Or.warn(i.message)}}}function cE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rx=1024,sx=30*24*60*60*1e3;class ox{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lx(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=M_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=sx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=M_(),{heartbeatsToSend:n,unsentEntries:i}=ax(this._heartbeatsCache.heartbeats),r=yc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function M_(){return new Date().toISOString().substring(0,10)}function ax(t,e=rx){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),L_(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),L_(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class lx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Au()?Fp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ix(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return O_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return O_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function L_(t){return yc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cx(t){Wt(new Ct("platform-logger",e=>new TP(e),"PRIVATE")),Wt(new Ct("heartbeat",e=>new ox(e),"PRIVATE")),ut(qd,N_,t),ut(qd,N_,"esm2017"),ut("fire-js","")}cx("");function Bp(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function uE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ux=uE,hE=new Ni("auth","Firebase",uE());/**
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
 */const Ec=new io("@firebase/auth");function hx(t,...e){Ec.logLevel<=Ee.WARN&&Ec.warn(`Auth (${cr}): ${t}`,...e)}function Zl(t,...e){Ec.logLevel<=Ee.ERROR&&Ec.error(`Auth (${cr}): ${t}`,...e)}/**
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
 */function oi(t,...e){throw zp(t,...e)}function ti(t,...e){return zp(t,...e)}function dE(t,e,n){const i=Object.assign(Object.assign({},ux()),{[e]:n});return new Ni("auth","Firebase",i).create(e,{appName:t.name})}function dx(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&oi(t,"argument-error"),dE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return hE.create(t,...e)}function ue(t,e,...n){if(!t)throw zp(e,...n)}function vi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function Ri(t,e){t||vi(e)}/**
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
 */function Gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fx(){return $_()==="http:"||$_()==="https:"}function $_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function px(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fx()||eE()||"connection"in navigator)?navigator.onLine:!0}function gx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ri(n>e,"Short delay should be less than long delay!"),this.isMobile=Vp()||tE()}get(){return px()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jp(t,e){Ri(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _x=new qa(3e4,6e4);function pE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wa(t,e,n,i,r={}){return gE(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=no(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fE.fetch()(mE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function gE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},mx),e);try{const r=new vx(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Dl(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw dE(t,u,c);oi(t,u)}}catch(r){if(r instanceof Tn)throw r;oi(t,"network-request-failed",{message:String(r)})}}async function yx(t,e,n,i,r={}){const s=await Wa(t,e,n,i,r);return"mfaPendingCredential"in s&&oi(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mE(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?jp(t.config,r):`${t.config.apiScheme}://${r}`}class vx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ti(this.auth,"network-request-failed")),_x.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ti(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function wx(t,e){return Wa(t,"POST","/v1/accounts:delete",e)}async function bx(t,e){return Wa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ex(t,e=!1){const n=Qe(t),i=await n.getIdToken(e),r=Hp(i);ue(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Uo(Vh(r.auth_time)),issuedAtTime:Uo(Vh(r.iat)),expirationTime:Uo(Vh(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vh(t){return Number(t)*1e3}function Hp(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const r=vc(n);return r?JSON.parse(r):(Zl("Failed to decode base64 JWT payload"),null)}catch(r){return Zl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ix(t){const e=Hp(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pa(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Tn&&Tx(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Tx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ax{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _E{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uo(this.lastLoginAt),this.creationTime=Uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ic(t){var e;const n=t.auth,i=await t.getIdToken(),r=await pa(t,bx(n,{idToken:i}));ue(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Sx(s.providerUserInfo):[],a=Rx(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _E(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Cx(t){const e=Qe(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rx(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Sx(t){return t.map(e=>{var{providerId:n}=e,i=Bp(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function kx(t,e){const n=await gE(t,{},async()=>{const i=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=mE(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ix(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await kx(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ga;return i&&(ue(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(ue(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(ue(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ga,this.toJSON())}_performRefresh(){return vi("not implemented")}}/**
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
 */function $i(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ax(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _E(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pa(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ex(this,e)}reload(){return Cx(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pa(this,wx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:E,isAnonymous:x,providerData:$,stsTokenManager:J}=n;ue(R&&J,e,"internal-error");const Y=ga.fromJSON(this.name,J);ue(typeof R=="string",e,"internal-error"),$i(h,e.name),$i(d,e.name),ue(typeof E=="boolean",e,"internal-error"),ue(typeof x=="boolean",e,"internal-error"),$i(f,e.name),$i(g,e.name),$i(y,e.name),$i(v,e.name),$i(b,e.name),$i(I,e.name);const le=new xr({uid:R,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:x,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:Y,createdAt:b,lastLoginAt:I});return $&&Array.isArray($)&&(le.providerData=$.map(Ae=>Object.assign({},Ae))),v&&(le._redirectEventId=v),le}static async _fromIdTokenResponse(e,n,i=!1){const r=new ga;r.updateFromServerResponse(n);const s=new xr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ic(s),s}}/**
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
 */const V_=new Map;function wi(t){Ri(t instanceof Function,"Expected a class definition");let e=V_.get(t);return e?(Ri(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,V_.set(t,e),e)}/**
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
 */class yE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yE.type="NONE";const F_=yE;/**
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
 */function ec(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ec(this.userKey,r.apiKey,s),this.fullPersistenceKey=ec("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Es(wi(F_),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||wi(F_);const o=ec(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=xr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Es(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Es(s,e,i))}}/**
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
 */function U_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(IE(e))return"Blackberry";if(TE(e))return"Webos";if(qp(e))return"Safari";if((e.includes("chrome/")||wE(e))&&!e.includes("edge/"))return"Chrome";if(EE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vE(t=qt()){return/firefox\//i.test(t)}function qp(t=qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wE(t=qt()){return/crios\//i.test(t)}function bE(t=qt()){return/iemobile/i.test(t)}function EE(t=qt()){return/android/i.test(t)}function IE(t=qt()){return/blackberry/i.test(t)}function TE(t=qt()){return/webos/i.test(t)}function Ru(t=qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Px(t=qt()){var e;return Ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xx(){return jk()&&document.documentMode===10}function AE(t=qt()){return Ru(t)||EE(t)||TE(t)||IE(t)||/windows phone/i.test(t)||bE(t)}function Dx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function CE(t,e=[]){let n;switch(t){case"Browser":n=U_(qt());break;case"Worker":n=`${U_(qt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${i}`}async function RE(t,e){return Wa(t,"GET","/v2/recaptchaConfig",pE(t,e))}function B_(t){return t!==void 0&&t.enterprise!==void 0}class SE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Nx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=ti("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Nx().appendChild(i)})}function Ox(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Mx="https://www.google.com/recaptcha/enterprise.js?render=",Lx="recaptcha-enterprise",$x="NO_RECAPTCHA";class Vx{constructor(e){this.type=Lx,this.auth=ro(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{RE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new SE(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;B_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o($x)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&B_(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}kE(Mx+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Fx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Ux{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new z_(this),this.idTokenSubscription=new z_(this),this.beforeStateQueue=new Fx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wi(e))})}async initializeRecaptchaConfig(){const e=await RE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new SE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Vx(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wi(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[wi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ue(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ro(t){return Qe(t)}class z_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yk(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Bx(t,e){const n=lr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(da(s,e??{}))return r;oi(r,"already-initialized")}return n.initialize({options:e})}function zx(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(wi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function jx(t,e,n){const i=ro(t);ue(i._canInitEmulator,i,"emulator-config-failed"),ue(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=PE(e),{host:o,port:a}=Hx(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qx()}function PE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hx(t){const e=PE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:j_(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:j_(o)}}}function j_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vi("not implemented")}_getIdTokenResponse(e){return vi("not implemented")}_linkToIdToken(e,n){return vi("not implemented")}_getReauthenticationResolver(e){return vi("not implemented")}}/**
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
 */async function Is(t,e){return yx(t,"POST","/v1/accounts:signInWithIdp",pE(t,e))}/**
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
 */const Wx="http://localhost";class Mr extends xE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):oi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Bp(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Mr(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Is(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:Wx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
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
 */class Wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends Wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zi extends Ka{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zi.credential(e.oauthAccessToken)}catch{return null}}}zi.FACEBOOK_SIGN_IN_METHOD="facebook.com";zi.PROVIDER_ID="facebook.com";/**
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
 */class yi extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return yi.credential(n,i)}catch{return null}}}yi.GOOGLE_SIGN_IN_METHOD="google.com";yi.PROVIDER_ID="google.com";/**
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
 */class ji extends Ka{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}}ji.GITHUB_SIGN_IN_METHOD="github.com";ji.PROVIDER_ID="github.com";/**
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
 */class Hi extends Ka{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hi.credentialFromTaggedObject(e)}static credentialFromError(e){return Hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Hi.credential(n,i)}catch{return null}}}Hi.TWITTER_SIGN_IN_METHOD="twitter.com";Hi.PROVIDER_ID="twitter.com";/**
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
 */class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await xr._fromIdTokenResponse(e,i,r),o=H_(i);return new Os({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=H_(i);return new Os({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function H_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tc extends Tn{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Tc(e,n,i,r)}}function DE(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(t,s,e,i):s})}async function Kx(t,e,n=!1){const i=await pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Os._forOperation(t,"link",i)}/**
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
 */async function Gx(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await pa(t,DE(i,r,e,t),n);ue(s.idToken,i,"internal-error");const o=Hp(s.idToken);ue(o,i,"internal-error");const{sub:a}=o;return ue(t.uid===a,i,"user-mismatch"),Os._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&oi(i,"user-mismatch"),s}}/**
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
 */async function Qx(t,e,n=!1){const i="signIn",r=await DE(t,i,e),s=await Os._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function NE(t,e,n,i){return Qe(t).onIdTokenChanged(e,n,i)}function Yx(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}const Ac="__sak";/**
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
 */class OE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Xx(){const t=qt();return qp(t)||Ru(t)}const Jx=1e3,Zx=10;class ME extends OE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xx()&&Dx(),this.fallbackToPolling=AE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);xx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Zx):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ME.type="LOCAL";const e1=ME;/**
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
 */class LE extends OE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}LE.type="SESSION";const $E=LE;/**
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
 */function t1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Su(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await t1(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
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
 */function Kp(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class n1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Kp("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ni(){return window}function i1(t){ni().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function VE(){return typeof ni().WorkerGlobalScope<"u"&&typeof ni().importScripts=="function"}async function r1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function s1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function o1(){return VE()?self:null}/**
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
 */const FE="firebaseLocalStorageDb",a1=1,Cc="firebaseLocalStorage",UE="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function l1(){const t=indexedDB.deleteDatabase(FE);return new Ga(t).toPromise()}function Qd(){const t=indexedDB.open(FE,a1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Cc,{keyPath:UE})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Cc)?e(i):(i.close(),await l1(),e(await Qd()))})})}async function q_(t,e,n){const i=ku(t,!0).put({[UE]:e,value:n});return new Ga(i).toPromise()}async function c1(t,e){const n=ku(t,!1).get(e),i=await new Ga(n).toPromise();return i===void 0?null:i.value}function W_(t,e){const n=ku(t,!0).delete(e);return new Ga(n).toPromise()}const u1=800,h1=3;class BE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>h1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(o1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await r1(),!this.activeServiceWorker)return;this.sender=new n1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||s1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await q_(e,Ac,"1"),await W_(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>q_(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>c1(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>W_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ku(r,!1).getAll();return new Ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BE.type="LOCAL";const d1=BE;new qa(3e4,6e4);/**
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
 */function zE(t,e){return e?wi(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gp extends xE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function f1(t){return Qx(t.auth,new Gp(t),t.bypassAuthState)}function p1(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Gx(n,new Gp(t),t.bypassAuthState)}async function g1(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Kx(n,new Gp(t),t.bypassAuthState)}/**
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
 */class jE{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return f1;case"linkViaPopup":case"linkViaRedirect":return g1;case"reauthViaPopup":case"reauthViaRedirect":return p1;default:oi(this.auth,"internal-error")}}resolve(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const m1=new qa(2e3,1e4);async function _1(t,e,n){const i=ro(t);dx(t,e,Wp);const r=zE(i,n);return new Er(i,"signInViaPopup",e,r).executeNotNull()}class Er extends jE{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Ri(this.filter.length===1,"Popup operations only handle one event");const e=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ti(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ti(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ti(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m1.get())};e()}}Er.currentPopupAction=null;/**
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
 */const y1="pendingRedirect",tc=new Map;class v1 extends jE{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const i=await w1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w1(t,e){const n=I1(e),i=E1(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function b1(t,e){tc.set(t._key(),e)}function E1(t){return wi(t._redirectPersistence)}function I1(t){return ec(y1,t.config.apiKey,t.name)}async function T1(t,e){return await ro(t)._initializationPromise,HE(t,e,!1)}async function HE(t,e,n=!1){const i=ro(t),r=zE(i,e),o=await new v1(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const A1=10*60*1e3;class C1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!qE(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ti(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A1&&this.cachedEventUids.clear(),this.cachedEventUids.has(K_(e))}saveEventToCache(e){this.cachedEventUids.add(K_(e)),this.lastProcessedEventTime=Date.now()}}function K_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qE(t);default:return!1}}/**
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
 */async function S1(t,e={}){return Wa(t,"GET","/v1/projects",e)}/**
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
 */const k1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P1=/^https?/;async function x1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await S1(t);for(const n of e)try{if(D1(n))return}catch{}oi(t,"unauthorized-domain")}function D1(t){const e=Gd(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!P1.test(n))return!1;if(k1.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const N1=new qa(3e4,6e4);function G_(){const t=ni().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O1(t){return new Promise((e,n)=>{var i,r,s;function o(){G_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{G_(),n(ti(t,"network-request-failed"))},timeout:N1.get()})}if(!((r=(i=ni().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ni().gapi)===null||s===void 0)&&s.load)o();else{const a=Ox("iframefcb");return ni()[a]=()=>{gapi.load?o():n(ti(t,"network-request-failed"))},kE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nc=null,e})}let nc=null;function M1(t){return nc=nc||O1(t),nc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const L1=new qa(5e3,15e3),$1="__/auth/iframe",V1="emulator/auth/iframe",F1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B1(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jp(e,V1):`https://${t.config.authDomain}/${$1}`,i={apiKey:e.apiKey,appName:t.name,v:cr},r=U1.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${no(i).slice(1)}`}async function z1(t){const e=await M1(t),n=ni().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:B1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F1,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=ti(t,"network-request-failed"),a=ni().setTimeout(()=>{s(o)},L1.get());function l(){ni().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const j1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H1=500,q1=600,W1="_blank",K1="http://localhost";class Q_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G1(t,e,n,i=H1,r=q1){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},j1),{width:i.toString(),height:r.toString(),top:s,left:o}),c=qt().toLowerCase();n&&(a=wE(c)?W1:n),vE(c)&&(e=e||K1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Px(c)&&a!=="_self")return Q1(e||"",a),new Q_(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new Q_(h)}function Q1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Y1="__/auth/handler",X1="emulator/auth/handler",J1=encodeURIComponent("fac");async function Y_(t,e,n,i,r,s){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:cr,eventId:r};if(e instanceof Wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Ka){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${J1}=${encodeURIComponent(l)}`:"";return`${Z1(t)}?${no(a).slice(1)}${c}`}function Z1({config:t}){return t.emulator?jp(t,X1):`https://${t.authDomain}/${Y1}`}/**
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
 */const Fh="webStorageSupport";class eD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$E,this._completeRedirectFn=HE,this._overrideRedirectResult=b1}async _openPopup(e,n,i,r){var s;Ri((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Y_(e,n,i,Gd(),r);return G1(e,o,Kp())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Y_(e,n,i,Gd(),r);return i1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Ri(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await z1(e),i=new C1(e);return n.register("authEvent",r=>(ue(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fh,{type:Fh},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Fh];o!==void 0&&n(!!o),oi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return AE()||qp()||Ru()}}const tD=eD;var X_="@firebase/auth",J_="1.1.0";/**
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
 */class nD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rD(t){Wt(new Ct("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CE(t)},c=new Ux(i,r,s,l);return zx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Wt(new Ct("auth-internal",e=>{const n=ro(e.getProvider("auth").getImmediate());return(i=>new nD(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(X_,J_,iD(t)),ut(X_,J_,"esm2017")}/**
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
 */const sD=5*60,oD=Zb("authIdTokenMaxAge")||sD;let Z_=null;const aD=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>oD)return;const r=n==null?void 0:n.token;Z_!==r&&(Z_=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function WE(t=Ha()){const e=lr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bx(t,{popupRedirectResolver:tD,persistence:[d1,e1,$E]}),i=Zb("authTokenSyncURL");if(i){const s=aD(i);Yx(n,s,()=>s(n.currentUser)),NE(n,o=>s(o))}const r=Xb("auth");return r&&jx(n,`http://${r}`),n}rD("Browser");var lD=!1;/**
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
 */const cD=new Map,uD={activated:!1,tokenObservers:[]};function $n(t){return cD.get(t)||Object.assign({},uD)}const ey={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class hD{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ua,await dD(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ua,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function dD(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const fD={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Rc=new Ni("appCheck","AppCheck",fD);function KE(t){if(!$n(t).activated)throw Rc.create("use-before-activation",{appName:t.name})}/**
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
 */const pD="firebase-app-check-database",gD=1,Yd="firebase-app-check-store";let Nl=null;function mD(){return Nl||(Nl=new Promise((t,e)=>{try{const n=indexedDB.open(pD,gD);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(Rc.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(Yd,{keyPath:"compositeKey"})}}}catch(n){e(Rc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Nl)}function _D(t,e){return yD(vD(t),e)}async function yD(t,e){const i=(await mD()).transaction(Yd,"readwrite"),s=i.objectStore(Yd).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Rc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function vD(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Xd=new io("@firebase/app-check");function ty(t,e){return Au()?_D(t,e).catch(n=>{Xd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const wD={error:"UNKNOWN_ERROR"};function bD(t){return Tu.encodeString(JSON.stringify(t),!1)}async function Jd(t,e=!1){const n=t.app;KE(n);const i=$n(n);let r=i.token,s;if(r&&!xo(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(xo(l)?r=l:await ty(n,void 0))}if(!e&&r&&xo(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await $n(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Xd.warn(l.message):Xd.error(l),s=l}let a;return r?s?xo(r)?a={token:r.token,internalError:s}:a=iy(s):(a={token:r.token},i.token=r,await ty(n,r)):a=iy(s),o&&AD(n,a),a}async function ED(t){const e=t.app;KE(e);const{provider:n}=$n(e);{const{token:i}=await n.getToken();return{token:i}}}function ID(t,e,n,i){const{app:r}=t,s=$n(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&xo(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),ny(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>ny(t))}function GE(t,e){const n=$n(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function ny(t){const{app:e}=t,n=$n(e);let i=n.tokenRefresher;i||(i=TD(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function TD(t){const{app:e}=t;return new hD(async()=>{const n=$n(e);let i;if(n.token?i=await Jd(t,!0):i=await Jd(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=$n(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},ey.RETRIAL_MIN_WAIT,ey.RETRIAL_MAX_WAIT)}function AD(t,e){const n=$n(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function xo(t){return t.expireTimeMillis-Date.now()>0}function iy(t){return{token:bD(wD),error:t}}/**
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
 */class CD{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=$n(this.app);for(const n of e)GE(this.app,n.next);return Promise.resolve()}}function RD(t,e){return new CD(t,e)}function SD(t){return{getToken:e=>Jd(t,e),getLimitedUseToken:()=>ED(t),addTokenListener:e=>ID(t,"INTERNAL",e),removeTokenListener:e=>GE(t.app,e)}}const kD="@firebase/app-check",PD="0.8.0",xD="app-check",ry="app-check-internal";function DD(){Wt(new Ct(xD,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return RD(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(ry).initialize()})),Wt(new Ct(ry,t=>{const e=t.getProvider("app-check").getImmediate();return SD(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ut(kD,PD)}DD();var ND="firebase",OD="10.1.0";/**
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
 */ut(ND,OD,"app");const QE=Symbol("firebaseApp");function Qa(t){return jb()&&an(QE,null)||Ha(t)}const Gn=()=>{},MD=typeof window<"u";function Qp(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function LD(t,e,n){const i=(""+e).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function Yr(t){return!!t&&typeof t=="object"}const $D=Object.prototype;function VD(t){return Yr(t)&&Object.getPrototypeOf(t)===$D}function Yp(t){return Yr(t)&&t.type==="document"}function FD(t){return Yr(t)&&t.type==="collection"}function UD(t){return Yp(t)||FD(t)}function BD(t){return Yr(t)&&t.type==="query"}function zD(t){return Yr(t)&&"ref"in t}function jD(t){return Yr(t)&&typeof t.bucket=="string"}function HD(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const qD=Symbol.for("v-scx");function WD(){return!!an(qD,0)}const Ol=new WeakMap;function KD(t,e){if(!Ol.has(t)){const n=vp(!0);Ol.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),Ol.delete(t)}}return Ol.get(t)}const YE=new WeakMap;function Xr(t){return YE.get(Qa(t))}const Ml=new WeakMap;function XE(t){const e=Qa(t);if(!Ml.has(e)){let n;const r=[new Promise(s=>{n=s}),s=>{Ml.set(e,s),n(s.value)}];Ml.set(e,r)}return Ml.get(e)}function sy(t){const e=XE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function GD(t,e){const n=WE(e);NE(n,i=>{const r=XE();t.value=i,Array.isArray(r)&&r[1](t)})}const oy="@firebase/database",ay="1.0.1";/**
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
 */let JE="";function QD(t){JE=t}/**
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
 */class YD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),It(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ha(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class XD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Oi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ZE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new YD(e)}}catch{}return new XD},Ir=ZE("localStorage"),Zd=ZE("sessionStorage");/**
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
 */const Ts=new io("@firebase/database"),JD=function(){let t=1;return function(){return t++}}(),e0=function(t){const e=eP(t),n=new Qk;n.update(e);const i=n.digest();return Tu.encodeByteArray(i)},Ya=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ya.apply(null,i):typeof i=="object"?e+=It(i):e+=i,e+=" "}return e};let Dr=null,ly=!0;const ZD=function(t,e){V(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ts.logLevel=Ee.VERBOSE,Dr=Ts.log.bind(Ts),e&&Zd.set("logging_enabled",!0)):typeof t=="function"?Dr=t:(Dr=null,Zd.remove("logging_enabled"))},Ot=function(...t){if(ly===!0&&(ly=!1,Dr===null&&Zd.get("logging_enabled")===!0&&ZD(!0)),Dr){const e=Ya.apply(null,t);Dr(e)}},Xa=function(t){return function(...e){Ot(t,...e)}},ef=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ya(...t);Ts.error(e)},Lr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ya(...t)}`;throw Ts.error(e),new Error(e)},gn=function(...t){const e="FIREBASE WARNING: "+Ya(...t);Ts.warn(e)},eN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},t0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ms="[MIN_NAME]",$r="[MAX_NAME]",so=function(t,e){if(t===e)return 0;if(t===Ms||e===$r)return-1;if(e===Ms||t===$r)return 1;{const n=cy(t),i=cy(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},nN=function(t,e){return t===e?0:t<e?-1:1},wo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+It(e))},Xp=function(t){if(typeof t!="object"||t===null)return It(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=It(e[i]),n+=":",n+=Xp(t[e[i]]);return n+="}",n},n0=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function In(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const i0=function(t){V(!t0(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},iN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},sN=new RegExp("^-?(0*)\\d{1,10}$"),oN=-2147483648,aN=2147483647,cy=function(t){if(sN.test(t)){const e=Number(t);if(e>=oN&&e<=aN)return e}return null},Ja=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gn("Exception was thrown by user callback.",n),e},Math.floor(0))}},lN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){gn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class uN{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gn(e)}}class tf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tf.OWNER="owner";/**
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
 */const Jp="5",r0="v",s0="s",o0="r",a0="f",l0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,c0="ls",u0="p",nf="ac",h0="websocket",d0="long_polling";/**
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
 */class hN{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function f0(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let i;if(e===h0)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===d0)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dN(t)&&(n.ns=t.namespace);const r=[];return In(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class fN{constructor(){this.counters_={}}incrementCounter(e,n=1){Oi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Mk(this.counters_)}}/**
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
 */const Uh={},Bh={};function Zp(t){const e=t.toString();return Uh[e]||(Uh[e]=new fN),Uh[e]}function pN(t,e){const n=t.toString();return Bh[n]||(Bh[n]=e()),Bh[n]}/**
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
 */class gN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Ja(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const uy="start",mN="close",_N="pLPCommand",yN="pRTLPCB",p0="id",g0="pw",m0="ser",vN="cb",wN="seg",bN="ts",EN="d",IN="dframe",_0=1870,y0=30,TN=_0-y0,AN=25e3,CN=3e4;class gs{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xa(e),this.stats_=Zp(n),this.urlFn=l=>(this.appCheckToken&&(l[nf]=this.appCheckToken),f0(n,d0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CN)),tN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new eg((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===uy)this.id=a,this.password=l;else if(o===mN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[uy]="t",i[m0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[vN]=this.scriptTagHolder.uniqueCallbackIdentifier),i[r0]=Jp,this.transportSessionId&&(i[s0]=this.transportSessionId),this.lastSessionId&&(i[c0]=this.lastSessionId),this.applicationId&&(i[u0]=this.applicationId),this.appCheckToken&&(i[nf]=this.appCheckToken),typeof location<"u"&&location.hostname&&l0.test(location.hostname)&&(i[o0]=a0);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gs.forceAllow_=!0}static forceDisallow(){gs.forceDisallow_=!0}static isAvailable(){return gs.forceAllow_?!0:!gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iN()&&!rN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=It(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Qb(n),r=n0(i,TN);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[IN]="t",i[p0]=e,i[g0]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=It(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class eg{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JD(),window[_N+this.uniqueCallbackIdentifier]=e,window[yN+this.uniqueCallbackIdentifier]=n,this.myIFrame=eg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ot("frame writing exception"),a.stack&&Ot(a.stack),Ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ot("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[p0]=this.myID,e[g0]=this.myPW,e[m0]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+y0+i.length<=_0;){const o=this.pendingSegs.shift();i=i+"&"+wN+r+"="+o.seg+"&"+bN+r+"="+o.ts+"&"+EN+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(AN)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const RN=16384,SN=45e3;let Sc=null;typeof MozWebSocket<"u"?Sc=MozWebSocket:typeof WebSocket<"u"&&(Sc=WebSocket);class kn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xa(this.connId),this.stats_=Zp(n),this.connURL=kn.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[r0]=Jp,typeof location<"u"&&location.hostname&&l0.test(location.hostname)&&(o[o0]=a0),n&&(o[s0]=n),i&&(o[c0]=i),r&&(o[nf]=r),s&&(o[u0]=s),f0(e,h0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let i;nE(),this.mySock=new Sc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Sc!==null&&!kn.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ha(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=It(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=n0(n,RN);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kn.responsesRequiredToBeHealthy=2;kn.healthyTimeout=3e4;/**
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
 */class ma{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gs,kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=kn&&kn.isAvailable();let i=n&&!kn.previouslyFailed();if(e.webSocketOnly&&(n||gn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[kn];else{const r=this.transports_=[];for(const s of ma.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);ma.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ma.globalTransportInitialized_=!1;/**
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
 */const kN=6e4,PN=5e3,xN=10*1024,DN=100*1024,zh="t",hy="d",NN="s",dy="r",ON="e",fy="o",py="a",gy="n",my="p",MN="h";class LN{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xa("c:"+this.id+":"),this.transportManager_=new ma(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zh in e){const n=e[zh];n===py?this.upgradeIfSecondaryHealthy_():n===dy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wo("t",e),i=wo("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:my,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:py,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wo("t",e),i=wo("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wo(zh,e);if(hy in e){const i=e[hy];if(n===MN){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===gy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NN?this.onConnectionShutdown_(i):n===dy?this.onReset_(i):n===ON?ef("Server Error: "+i):n===fy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ef("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jp!==i&&gn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:my,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class v0{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class w0{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class kc extends w0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kc}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _y=32,yy=768;class qe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ve(){return new qe("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ir(t){return t.pieces_.length-t.pieceNum_}function je(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new qe(t.pieces_,e)}function b0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $N(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function E0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function I0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new qe(e,0)}function mt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof qe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new qe(n,0)}function me(t){return t.pieceNum_>=t.pieces_.length}function En(t,e){const n=ye(t),i=ye(e);if(n===null)return e;if(n===i)return En(je(t),je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function T0(t,e){if(ir(t)!==ir(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Dn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ir(t)>ir(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class VN{constructor(e,n){this.errorPrefix_=n,this.parts_=E0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Cu(this.parts_[i]);A0(this)}}function FN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Cu(e),A0(t)}function UN(t){const e=t.parts_.pop();t.byteLength_-=Cu(e),t.parts_.length>0&&(t.byteLength_-=1)}function A0(t){if(t.byteLength_>yy)throw new Error(t.errorPrefix_+"has a key path longer than "+yy+" bytes ("+t.byteLength_+").");if(t.parts_.length>_y)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_y+") or object contains a cycle "+vr(t))}function vr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class tg extends w0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new tg}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const bo=1e3,BN=60*5*1e3,vy=30*1e3,zN=1.3,jN=3e4,HN="server_kill",wy=3;class Ti extends v0{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ti.nextPersistentConnectionId_++,this.log_=Xa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bo,this.maxReconnectDelay_=BN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!nE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(It(s)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new ua,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Ti.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Oi(e,"w")){const i=Ns(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();gn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Kk(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+It(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ef("Unrecognized action received from server: "+It(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jN&&(this.reconnectDelay_=bo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ti.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ot("getToken() completed but was canceled"):(Ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new LN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{gn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(HN)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&gn(h),l())}}}interrupt(e){Ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zd(this.interruptReasons_)&&(this.reconnectDelay_=bo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Xp(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new qe(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wy&&(this.reconnectDelay_=vy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+JE.replace(/\./g,"-")]=1,Vp()?e["framework.cordova"]=1:tE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kc.getInstance().currentlyOnline();return zd(this.interruptReasons_)&&e}}Ti.nextPersistentConnectionId_=0;Ti.nextConnectionId_=0;/**
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
 */class ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ve(e,n)}}/**
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
 */class Pu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ve(Ms,e),r=new ve(Ms,n);return this.compare(i,r)!==0}minPost(){return ve.MIN}}/**
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
 */let Ll;class C0 extends Pu{static get __EMPTY_NODE(){return Ll}static set __EMPTY_NODE(e){Ll=e}compare(e,n){return so(e.name,n.name)}isDefinedOn(e){throw to("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve($r,Ll)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,Ll)}toString(){return".key"}}const As=new C0;/**
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
 */let $l=class{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},fn=class Do{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??Do.RED,this.left=r??Qn.EMPTY_NODE,this.right=s??Qn.EMPTY_NODE}copy(e,n,i,r,s){return new Do(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Qn.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Do.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Do.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};fn.RED=!0;fn.BLACK=!1;class qN{copy(e,n,i,r,s){return this}insert(e,n,i){return new fn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Qn=class ic{constructor(e,n=ic.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ic(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fn.BLACK,null,null))}remove(e){return new ic(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fn.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $l(this.root_,null,this.comparator_,!0,e)}};Qn.EMPTY_NODE=new qN;/**
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
 */function WN(t,e){return so(t.name,e.name)}function ng(t,e){return so(t,e)}/**
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
 */let rf;function KN(t){rf=t}const R0=function(t){return typeof t=="number"?"number:"+i0(t):"string:"+t},S0=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Oi(e,".sv"),"Priority must be a string or number.")}else V(t===rf||t.isEmpty(),"priority of unexpected type.");V(t===rf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let by;class ft{constructor(e,n=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),S0(this.priorityNode_)}static set __childrenNodeConstructor(e){by=e}static get __childrenNodeConstructor(){return by}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:ye(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ye(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(V(i!==".priority"||ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(je(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+R0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=i0(this.value_):e+=this.value_,this.lazyHash_=e0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=ft.VALUE_TYPE_ORDER.indexOf(n),s=ft.VALUE_TYPE_ORDER.indexOf(i);return V(r>=0,"Unknown leaf type: "+n),V(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let k0,P0;function GN(t){k0=t}function QN(t){P0=t}class YN extends Pu{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?so(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve($r,new ft("[PRIORITY-POST]",P0))}makePost(e,n){const i=k0(e);return new ve(n,new ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ft=new YN;/**
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
 */const XN=Math.log(2);class JN{constructor(e){const n=s=>parseInt(Math.log(s)/XN,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pc=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new fn(d,h.node,fn.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=r(l,f),y=r(f+1,c);return h=t[f],d=n?n(h):h,new fn(d,h.node,fn.BLACK,g,y)}},s=function(l){let c=null,u=null,h=t.length;const d=function(g,y){const v=h-g,b=h;h-=g;const I=r(v+1,b),R=t[v],E=n?n(R):R;f(new fn(E,R.node,y,null,I))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));y?d(v,fn.BLACK):(d(v,fn.BLACK),d(v,fn.RED))}return u},o=new JN(t.length),a=s(o);return new Qn(i||e,a)};/**
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
 */let jh;const as={};class bi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(as&&Ft,"ChildrenNode.ts has not been loaded"),jh=jh||new bi({".priority":as},{".priority":Ft}),jh}get(e){const n=Ns(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qn?n:null}hasIndex(e){return Oi(this.indexSet_,e.toString())}addIndex(e,n){V(e!==As,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(ve.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Pc(i,e.getCompare()):a=as;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new bi(u,c)}addToIndexes(e,n){const i=wc(this.indexes_,(r,s)=>{const o=Ns(this.indexSet_,s);if(V(o,"Missing index implementation for "+s),r===as)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ve.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Pc(a,o.getCompare())}else return as;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ve(e.name,a))),l.insert(e,e.node)}});return new bi(i,this.indexSet_)}removeFromIndexes(e,n){const i=wc(this.indexes_,r=>{if(r===as)return r;{const s=n.get(e.name);return s?r.remove(new ve(e.name,s)):r}});return new bi(i,this.indexSet_)}}/**
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
 */let Eo;class ke{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&S0(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Eo||(Eo=new ke(new Qn(ng),null,bi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Eo}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Eo:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ve(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Eo:this.priorityNode_;return new ke(r,o,s)}}updateChild(e,n){const i=ye(e);if(i===null)return n;{V(ye(e)!==".priority"||ir(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(je(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Ft,(o,a)=>{n[o]=a.val(e),i++,s&&ke.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+R0(this.getPriority().val())+":"),this.forEachChild(Ft,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":e0(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new ve(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ve.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Za?-1:0}withIndex(e){if(e===As||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===As||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ft),r=n.getIterator(Ft);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===As?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZN extends ke{constructor(){super(new Qn(ng),ke.EMPTY_NODE,bi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const Za=new ZN;Object.defineProperties(ve,{MIN:{value:new ve(Ms,ke.EMPTY_NODE)},MAX:{value:new ve($r,Za)}});C0.__EMPTY_NODE=ke.EMPTY_NODE;ft.__childrenNodeConstructor=ke;KN(Za);QN(Za);/**
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
 */const eO=!0;function Mt(t,e=null){if(t===null)return ke.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ft(n,Mt(e))}if(!(t instanceof Array)&&eO){const n=[];let i=!1;if(In(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Mt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ve(o,l)))}}),n.length===0)return ke.EMPTY_NODE;const s=Pc(n,WN,o=>o.name,ng);if(i){const o=Pc(n,Ft.getCompare());return new ke(s,Mt(e),new bi({".priority":o},{".priority":Ft}))}else return new ke(s,Mt(e),bi.Default)}else{let n=ke.EMPTY_NODE;return In(t,(i,r)=>{if(Oi(t,i)&&i.substring(0,1)!=="."){const s=Mt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Mt(e))}}GN(Mt);/**
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
 */class tO extends Pu{constructor(e){super(),this.indexPath_=e,V(!me(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?so(e.name,n.name):s}makePost(e,n){const i=Mt(e),r=ke.EMPTY_NODE.updateChild(this.indexPath_,i);return new ve(n,r)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,Za);return new ve($r,e)}toString(){return E0(this.indexPath_,0).join("/")}}/**
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
 */class nO extends Pu{compare(e,n){const i=e.node.compareTo(n.node);return i===0?so(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const i=Mt(e);return new ve(n,i)}toString(){return".value"}}const iO=new nO;/**
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
 */function rO(t){return{type:"value",snapshotNode:t}}function sO(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function oO(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ey(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ig{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ms}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ft}copy(){const e=new ig;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Iy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ft?n="$priority":t.index_===iO?n="$value":t.index_===As?n="$key":(V(t.index_ instanceof tO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=It(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=It(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+It(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=It(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+It(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ty(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ft&&(e.i=t.index_.toString()),e}/**
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
 */class xc extends v0{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Xa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=xc.getListenId_(e,i),a={};this.listens_[o]=a;const l=Iy(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),Ns(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=xc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Iy(e._queryParams),i=e._path.toString(),r=new ua;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+no(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ha(a.responseText)}catch{gn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&gn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class lO{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Dc(){return{value:null,children:new Map}}function x0(t,e,n){if(me(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ye(e);t.children.has(i)||t.children.set(i,Dc());const r=t.children.get(i);e=je(e),x0(r,e,n)}}function sf(t,e,n){t.value!==null?n(e,t.value):cO(t,(i,r)=>{const s=new qe(e.toString()+"/"+i);sf(r,s,n)})}function cO(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class uO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&In(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Ay=10*1e3,hO=30*1e3,dO=5*60*1e3;class fO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uO(e);const i=Ay+(hO-Ay)*Math.random();Bo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;In(e,(r,s)=>{s>0&&Oi(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*dO))}}/**
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
 */var Yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));function D0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function N0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function O0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Nc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Yn.ACK_USER_WRITE,this.source=D0()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new qe(e));return new Nc(Ve(),n,this.revert)}}else return V(ye(this.path)===e,"operationForChild called for unrelated child."),new Nc(je(this.path),this.affectedTree,this.revert)}}/**
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
 */class Vr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Yn.OVERWRITE}operationForChild(e){return me(this.path)?new Vr(this.source,Ve(),this.snap.getImmediateChild(e)):new Vr(this.source,je(this.path),this.snap)}}/**
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
 */class _a{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Yn.MERGE}operationForChild(e){if(me(this.path)){const n=this.children.subtree(new qe(e));return n.isEmpty()?null:n.value?new Vr(this.source,Ve(),n.value):new _a(this.source,Ve(),n)}else return V(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _a(this.source,je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rg{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function pO(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(aO(o.childName,o.snapshotNode))}),Io(t,r,"child_removed",e,i,n),Io(t,r,"child_added",e,i,n),Io(t,r,"child_moved",s,i,n),Io(t,r,"child_changed",e,i,n),Io(t,r,"value",e,i,n),r}function Io(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>mO(t,a,l)),o.forEach(a=>{const l=gO(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function gO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function mO(t,e,n){if(e.childName==null||n.childName==null)throw to("Should only compare child_ events.");const i=new ve(e.childName,e.snapshotNode),r=new ve(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function M0(t,e){return{eventCache:t,serverCache:e}}function zo(t,e,n,i){return M0(new rg(e,n,i),t.serverCache)}function L0(t,e,n,i){return M0(t.eventCache,new rg(e,n,i))}function of(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Hh;const _O=()=>(Hh||(Hh=new Qn(nN)),Hh);class ze{constructor(e,n=_O()){this.value=e,this.children=n}static fromObject(e){let n=new ze(null);return In(e,(i,r)=>{n=n.set(new qe(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ve(),value:this.value};if(me(e))return null;{const i=ye(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(je(e),n);return s!=null?{path:mt(new qe(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const n=ye(e),i=this.children.get(n);return i!==null?i.subtree(je(e)):new ze(null)}}set(e,n){if(me(e))return new ze(n,this.children);{const i=ye(e),s=(this.children.get(i)||new ze(null)).set(je(e),n),o=this.children.insert(i,s);return new ze(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new ze(null):new ze(null,this.children);{const n=ye(e),i=this.children.get(n);if(i){const r=i.remove(je(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ze(null):new ze(this.value,s)}else return this}}get(e){if(me(e))return this.value;{const n=ye(e),i=this.children.get(n);return i?i.get(je(e)):null}}setTree(e,n){if(me(e))return n;{const i=ye(e),s=(this.children.get(i)||new ze(null)).setTree(je(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ze(this.value,o)}}fold(e){return this.fold_(Ve(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(mt(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ve(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(me(e))return null;{const s=ye(e),o=this.children.get(s);return o?o.findOnPath_(je(e),mt(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ve(),n)}foreachOnPath_(e,n,i){if(me(e))return this;{this.value&&i(n,this.value);const r=ye(e),s=this.children.get(r);return s?s.foreachOnPath_(je(e),mt(n,r),i):new ze(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(mt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Ln{constructor(e){this.writeTree_=e}static empty(){return new Ln(new ze(null))}}function jo(t,e,n){if(me(e))return new Ln(new ze(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=En(r,e);return s=s.updateChild(o,n),new Ln(t.writeTree_.set(r,s))}else{const r=new ze(n),s=t.writeTree_.setTree(e,r);return new Ln(s)}}}function Cy(t,e,n){let i=t;return In(n,(r,s)=>{i=jo(i,mt(e,r),s)}),i}function Ry(t,e){if(me(e))return Ln.empty();{const n=t.writeTree_.setTree(e,new ze(null));return new Ln(n)}}function af(t,e){return Jr(t,e)!=null}function Jr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(En(n.path,e)):null}function Sy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ft,(i,r)=>{e.push(new ve(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new ve(i,r.value))}),e}function Ji(t,e){if(me(e))return t;{const n=Jr(t,e);return n!=null?new Ln(new ze(n)):new Ln(t.writeTree_.subtree(e))}}function lf(t){return t.writeTree_.isEmpty()}function Ls(t,e){return $0(Ve(),t.writeTree_,e)}function $0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(V(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=$0(mt(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(mt(t,".priority"),i)),n}}/**
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
 */function V0(t,e){return j0(e,t)}function yO(t,e,n,i,r){V(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=jo(t.visibleWrites,e,n)),t.lastWriteId=i}function vO(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function wO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bO(a,i.path)?r=!1:Dn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return EO(t),!0;if(i.snap)t.visibleWrites=Ry(t.visibleWrites,i.path);else{const a=i.children;In(a,l=>{t.visibleWrites=Ry(t.visibleWrites,mt(i.path,l))})}return!0}else return!1}function bO(t,e){if(t.snap)return Dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Dn(mt(t.path,n),e))return!0;return!1}function EO(t){t.visibleWrites=F0(t.allWrites,IO,Ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function IO(t){return t.visible}function F0(t,e,n){let i=Ln.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Dn(n,o)?(a=En(n,o),i=jo(i,a,s.snap)):Dn(o,n)&&(a=En(o,n),i=jo(i,Ve(),s.snap.getChild(a)));else if(s.children){if(Dn(n,o))a=En(n,o),i=Cy(i,a,s.children);else if(Dn(o,n))if(a=En(o,n),me(a))i=Cy(i,Ve(),s.children);else{const l=Ns(s.children,ye(a));if(l){const c=l.getChild(je(a));i=jo(i,Ve(),c)}}}else throw to("WriteRecord should have .snap or .children")}}return i}function U0(t,e,n,i,r){if(!i&&!r){const s=Jr(t.visibleWrites,e);if(s!=null)return s;{const o=Ji(t.visibleWrites,e);if(lf(o))return n;if(n==null&&!af(o,Ve()))return null;{const a=n||ke.EMPTY_NODE;return Ls(o,a)}}}else{const s=Ji(t.visibleWrites,e);if(!r&&lf(s))return n;if(!r&&n==null&&!af(s,Ve()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Dn(c.path,e)||Dn(e,c.path))},a=F0(t.allWrites,o,e),l=n||ke.EMPTY_NODE;return Ls(a,l)}}}function TO(t,e,n){let i=ke.EMPTY_NODE;const r=Jr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ft,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Ji(t.visibleWrites,e);return n.forEachChild(Ft,(o,a)=>{const l=Ls(Ji(s,new qe(o)),a);i=i.updateImmediateChild(o,l)}),Sy(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Ji(t.visibleWrites,e);return Sy(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function AO(t,e,n,i,r){V(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=mt(e,n);if(af(t.visibleWrites,s))return null;{const o=Ji(t.visibleWrites,s);return lf(o)?r.getChild(n):Ls(o,r.getChild(n))}}function CO(t,e,n,i){const r=mt(e,n),s=Jr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Ji(t.visibleWrites,r);return Ls(o,i.getNode().getImmediateChild(n))}else return null}function RO(t,e){return Jr(t.visibleWrites,e)}function SO(t,e,n,i,r,s,o){let a;const l=Ji(t.visibleWrites,e),c=Jr(l,Ve());if(c!=null)a=c;else if(n!=null)a=Ls(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<r;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function kO(){return{visibleWrites:Ln.empty(),allWrites:[],lastWriteId:-1}}function cf(t,e,n,i){return U0(t.writeTree,t.treePath,e,n,i)}function B0(t,e){return TO(t.writeTree,t.treePath,e)}function ky(t,e,n,i){return AO(t.writeTree,t.treePath,e,n,i)}function Oc(t,e){return RO(t.writeTree,mt(t.treePath,e))}function PO(t,e,n,i,r,s){return SO(t.writeTree,t.treePath,e,n,i,r,s)}function sg(t,e,n){return CO(t.writeTree,t.treePath,e,n)}function z0(t,e){return j0(mt(t.treePath,e),t.writeTree)}function j0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class xO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Ey(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,oO(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,sO(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Ey(i,e.snapshotNode,r.oldSnap));else throw to("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class DO{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const H0=new DO;class og{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new rg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sg(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fr(this.viewCache_),s=PO(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function NO(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OO(t,e,n,i,r){const s=new xO;let o,a;if(n.type===Yn.OVERWRITE){const c=n;c.source.fromUser?o=uf(t,e,c.path,c.snap,i,r,s):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!me(c.path),o=Mc(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Yn.MERGE){const c=n;c.source.fromUser?o=LO(t,e,c.path,c.children,i,r,s):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=hf(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Yn.ACK_USER_WRITE){const c=n;c.revert?o=FO(t,e,c.path,i,r,s):o=$O(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Yn.LISTEN_COMPLETE)o=VO(t,e,n.path,i,s);else throw to("Unknown operation type: "+n.type);const l=s.getChanges();return MO(e,o,l),{viewCache:o,changes:l}}function MO(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=of(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(rO(of(e)))}}function q0(t,e,n,i,r,s){const o=e.eventCache;if(Oc(i,n)!=null)return e;{let a,l;if(me(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fr(e),u=c instanceof ke?c:ke.EMPTY_NODE,h=B0(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=cf(i,Fr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ye(n);if(c===".priority"){V(ir(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ky(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=je(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ky(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=sg(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return zo(e,a,o.isFullyInitialized()||me(n),t.filter.filtersNodes())}}function Mc(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(me(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ye(n);if(!l.isCompleteForPath(n)&&ir(n)>1)return e;const g=je(n),v=l.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,g,H0,null)}const h=L0(e,c,l.isFullyInitialized()||me(n),u.filtersNodes()),d=new og(r,h,s);return q0(t,h,n,r,d,a)}function uf(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new og(r,e,s);if(me(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=zo(e,c,!0,t.filter.filtersNodes());else{const h=ye(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=zo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=je(n),f=a.getNode().getImmediateChild(h);let g;if(me(d))g=i;else{const y=u.getCompleteChild(h);y!=null?b0(d)===".priority"&&y.getChild(I0(d)).isEmpty()?g=y:g=y.updateChild(d,i):g=ke.EMPTY_NODE}if(f.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=zo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Py(t,e){return t.eventCache.isCompleteForChild(e)}function LO(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=mt(n,l);Py(e,ye(u))&&(a=uf(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=mt(n,l);Py(e,ye(u))||(a=uf(t,a,u,c,r,s,o))}),a}function xy(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function hf(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;me(n)?c=i:c=new ze(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=xy(t,f,d);l=Mc(t,l,new qe(h),g,r,s,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),y=xy(t,g,d);l=Mc(t,l,new qe(h),y,r,s,o,a)}}),l}function $O(t,e,n,i,r,s,o){if(Oc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(me(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Mc(t,e,n,l.getNode().getChild(n),r,s,a,o);if(me(n)){let c=new ze(null);return l.getNode().forEachChild(As,(u,h)=>{c=c.set(new qe(u),h)}),hf(t,e,n,c,r,s,a,o)}else return e}else{let c=new ze(null);return i.foreach((u,h)=>{const d=mt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),hf(t,e,n,c,r,s,a,o)}}function VO(t,e,n,i,r){const s=e.serverCache,o=L0(e,s.getNode(),s.isFullyInitialized()||me(n),s.isFiltered());return q0(t,o,n,i,H0,r)}function FO(t,e,n,i,r,s){let o;if(Oc(i,n)!=null)return e;{const a=new og(i,e,r),l=e.eventCache.getNode();let c;if(me(n)||ye(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=cf(i,Fr(e));else{const h=e.serverCache.getNode();V(h instanceof ke,"serverChildren would be complete if leaf node"),u=B0(i,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=ye(n);let h=sg(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,je(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ke.EMPTY_NODE,je(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cf(i,Fr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Oc(i,Ve())!=null,zo(e,c,o,t.filter.filtersNodes())}}function UO(t,e){const n=Fr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!me(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function Dy(t,e,n,i){e.type===Yn.MERGE&&e.source.queryId!==null&&(V(Fr(t.viewCache_),"We should always have a full cache before handling merges"),V(of(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=OO(t.processor_,r,e,n,i);return NO(t.processor_,s.viewCache),V(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,BO(t,s.changes,s.viewCache.eventCache.getNode(),null)}function BO(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return pO(t.eventGenerator_,e,n,r)}/**
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
 */let Ny;function zO(t){V(!Ny,"__referenceConstructor has already been defined"),Ny=t}function ag(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return V(s!=null,"SyncTree gave us an op for an invalid query."),Dy(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Dy(o,e,n,i));return s}}function lg(t,e){let n=null;for(const i of t.views.values())n=n||UO(i,e);return n}/**
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
 */let Oy;function jO(t){V(!Oy,"__referenceConstructor has already been defined"),Oy=t}class My{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ze(null),this.pendingWriteTree_=kO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function HO(t,e,n,i,r){return yO(t.pendingWriteTree_,e,n,i,r),r?Du(t,new Vr(D0(),e,n)):[]}function ms(t,e,n=!1){const i=vO(t.pendingWriteTree_,e);if(wO(t.pendingWriteTree_,e)){let s=new ze(null);return i.snap!=null?s=s.set(Ve(),!0):In(i.children,o=>{s=s.set(new qe(o),!0)}),Du(t,new Nc(i.path,s,n))}else return[]}function xu(t,e,n){return Du(t,new Vr(N0(),e,n))}function qO(t,e,n){const i=ze.fromObject(n);return Du(t,new _a(N0(),e,i))}function WO(t,e,n,i){const r=Q0(t,i);if(r!=null){const s=Y0(r),o=s.path,a=s.queryId,l=En(o,e),c=new Vr(O0(a),l,n);return X0(t,o,c)}else return[]}function KO(t,e,n,i){const r=Q0(t,i);if(r){const s=Y0(r),o=s.path,a=s.queryId,l=En(o,e),c=ze.fromObject(n),u=new _a(O0(a),l,c);return X0(t,o,u)}else return[]}function W0(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=En(o,e),c=lg(a,l);if(c)return c});return U0(r,e,s,n,!0)}function Du(t,e){return K0(e,t.syncPointTree_,null,V0(t.pendingWriteTree_,Ve()))}function K0(t,e,n,i){if(me(t.path))return G0(t,e,n,i);{const r=e.get(Ve());n==null&&r!=null&&(n=lg(r,Ve()));let s=[];const o=ye(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=z0(i,o);s=s.concat(K0(a,l,c,u))}return r&&(s=s.concat(ag(r,t,i,n))),s}}function G0(t,e,n,i){const r=e.get(Ve());n==null&&r!=null&&(n=lg(r,Ve()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=z0(i,o),u=t.operationForChild(o);u&&(s=s.concat(G0(u,a,l,c)))}),r&&(s=s.concat(ag(r,t,i,n))),s}function Q0(t,e){return t.tagToQueryMap.get(e)}function Y0(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new qe(t.substr(0,e))}}function X0(t,e,n){const i=t.syncPointTree_.get(e);V(i,"Missing sync point for query tag that we're tracking");const r=V0(t.pendingWriteTree_,e);return ag(i,n,r,null)}/**
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
 */class cg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cg(n)}node(){return this.node_}}class ug{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=mt(this.path_,e);return new ug(this.syncTree_,n)}node(){return W0(this.syncTree_,this.path_)}}const GO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ly=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return YO(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},YO=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&V(!1,"Unexpected increment value: "+i);const r=e.node();if(V(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},XO=function(t,e,n,i){return hg(e,new ug(n,t),i)},JO=function(t,e,n){return hg(t,new cg(e),n)};function hg(t,e,n){const i=t.getPriority().val(),r=Ly(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ly(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ft(a,Mt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new ft(r))),o.forEachChild(Ft,(a,l)=>{const c=hg(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class dg{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function fg(t,e){let n=e instanceof qe?e:new qe(e),i=t,r=ye(n);for(;r!==null;){const s=Ns(i.node.children,r)||{children:{},childCount:0};i=new dg(r,i,s),n=je(n),r=ye(n)}return i}function oo(t){return t.node.value}function J0(t,e){t.node.value=e,df(t)}function Z0(t){return t.node.childCount>0}function ZO(t){return oo(t)===void 0&&!Z0(t)}function Nu(t,e){In(t.node.children,(n,i)=>{e(new dg(n,t,i))})}function eI(t,e,n,i){n&&!i&&e(t),Nu(t,r=>{eI(r,e,!0,i)}),n&&i&&e(t)}function eM(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function el(t){return new qe(t.parent===null?t.name:el(t.parent)+"/"+t.name)}function df(t){t.parent!==null&&tM(t.parent,t.name,t)}function tM(t,e,n){const i=ZO(n),r=Oi(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,df(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,df(t))}/**
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
 */const nM=/[\[\].#$\/\u0000-\u001F\u007F]/,iM=/[\[\].#$\u0000-\u001F\u007F]/,qh=10*1024*1024,tI=function(t){return typeof t=="string"&&t.length!==0&&!nM.test(t)},rM=function(t){return typeof t=="string"&&t.length!==0&&!iM.test(t)},sM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rM(t)},nI=function(t,e,n){const i=n instanceof qe?new VN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vr(i));if(typeof e=="function")throw new Error(t+"contains a function "+vr(i)+" with contents = "+e.toString());if(t0(e))throw new Error(t+"contains "+e.toString()+" "+vr(i));if(typeof e=="string"&&e.length>qh/3&&Cu(e)>qh)throw new Error(t+"contains a string greater than "+qh+" utf8 bytes "+vr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(In(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tI(o)))throw new Error(t+" contains an invalid key ("+o+") "+vr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FN(i,o),nI(t,a,i),UN(i)}),r&&s)throw new Error(t+' contains ".value" child '+vr(i)+" in addition to actual children.")}},oM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sM(n))throw new Error(Zk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class aM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lM(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!T0(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Zr(t,e,n){lM(t,n),cM(t,i=>Dn(i,e)||Dn(e,i))}function cM(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(uM(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Dr&&Ot("event: "+n.toString()),Ja(i)}}}/**
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
 */const hM="repo_interrupt",dM=25;class fM{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dc(),this.transactionQueueTree_=new dg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pM(t,e,n){if(t.stats_=Zp(t.repoInfo_),t.forceRestClient_||lN())t.server_=new xc(t.repoInfo_,(i,r,s,o)=>{$y(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{It(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ti(t.repoInfo_,e,(i,r,s,o)=>{$y(t,i,r,s,o)},i=>{Vy(t,i)},i=>{mM(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=pN(t.repoInfo_,()=>new fO(t.stats_,t.server_)),t.infoData_=new lO,t.infoSyncTree_=new My({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=xu(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pg(t,"connected",!1),t.serverSyncTree_=new My({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Zr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function gM(t){const n=t.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function iI(t){return GO({timestamp:gM(t)})}function $y(t,e,n,i,r){t.dataUpdateCount++;const s=new qe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=wc(n,c=>Mt(c));o=KO(t.serverSyncTree_,s,l,r)}else{const l=Mt(n);o=WO(t.serverSyncTree_,s,l,r)}else if(i){const l=wc(n,c=>Mt(c));o=qO(t.serverSyncTree_,s,l)}else{const l=Mt(n);o=xu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=mg(t,s)),Zr(t.eventQueue_,a,o)}function Vy(t,e){pg(t,"connected",e),e===!1&&yM(t)}function mM(t,e){In(e,(n,i)=>{pg(t,n,i)})}function pg(t,e,n){const i=new qe("/.info/"+e),r=Mt(n);t.infoData_.updateSnapshot(i,r);const s=xu(t.infoSyncTree_,i,r);Zr(t.eventQueue_,i,s)}function _M(t){return t.nextWriteId_++}function yM(t){rI(t,"onDisconnectEvents");const e=iI(t),n=Dc();sf(t.onDisconnect_,Ve(),(r,s)=>{const o=XO(r,s,t.serverSyncTree_,e);x0(n,r,o)});let i=[];sf(n,Ve(),(r,s)=>{i=i.concat(xu(t.serverSyncTree_,r,s));const o=EM(t,r);mg(t,o)}),t.onDisconnect_=Dc(),Zr(t.eventQueue_,Ve(),i)}function vM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hM)}function rI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ot(n,...e)}function sI(t,e,n){return W0(t.serverSyncTree_,e,n)||ke.EMPTY_NODE}function gg(t,e=t.transactionQueueTree_){if(e||Ou(t,e),oo(e)){const n=aI(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&wM(t,el(e),n)}else Z0(e)&&Nu(e,n=>{gg(t,n)})}function wM(t,e,n){const i=n.map(c=>c.currentWriteId),r=sI(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];V(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=En(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{rI(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ms(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ou(t,fg(t.transactionQueueTree_,e)),gg(t,t.transactionQueueTree_),Zr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ja(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{gn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}mg(t,e)}},o)}function mg(t,e){const n=oI(t,e),i=el(n),r=aI(t,n);return bM(t,r,i),i}function bM(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=En(n,l.path);let u=!1,h;if(V(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(ms(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dM)u=!0,h="maxretry",r=r.concat(ms(t.serverSyncTree_,l.currentWriteId,!0));else{const d=sI(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){nI("transaction failed: Data returned ",f,l.path);let g=Mt(f);typeof f=="object"&&f!=null&&Oi(f,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,b=iI(t),I=JO(g,d,b);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=I,l.currentWriteId=_M(t),o.splice(o.indexOf(v),1),r=r.concat(HO(t.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),r=r.concat(ms(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",r=r.concat(ms(t.serverSyncTree_,l.currentWriteId,!0))}Zr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ou(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ja(i[a]);gg(t,t.transactionQueueTree_)}function oI(t,e){let n,i=t.transactionQueueTree_;for(n=ye(e);n!==null&&oo(i)===void 0;)i=fg(i,n),e=je(e),n=ye(e);return i}function aI(t,e){const n=[];return lI(t,e,n),n.sort((i,r)=>i.order-r.order),n}function lI(t,e,n){const i=oo(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Nu(e,r=>{lI(t,r,n)})}function Ou(t,e){const n=oo(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,J0(e,n.length>0?n:void 0)}Nu(e,i=>{Ou(t,i)})}function EM(t,e){const n=el(oI(t,e)),i=fg(t.transactionQueueTree_,e);return eM(i,r=>{Wh(t,r)}),Wh(t,i),eI(i,r=>{Wh(t,r)}),n}function Wh(t,e){const n=oo(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ms(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?J0(e,void 0):n.length=s+1,Zr(t.eventQueue_,el(e),r);for(let o=0;o<i.length;o++)Ja(i[o])}}/**
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
 */function IM(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function TM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):gn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fy=function(t,e){const n=AM(t),i=n.namespace;n.domain==="firebase.com"&&Lr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eN();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hN(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new qe(n.pathString)}},AM=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=IM(t.substring(u,h)));const d=TM(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class _g{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return me(this._path)?null:b0(this._path)}get ref(){return new ao(this._repo,this._path)}get _queryIdentifier(){const e=Ty(this._queryParams),n=Xp(e);return n==="{}"?"default":n}get _queryObject(){return Ty(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof _g))return!1;const n=this._repo===e._repo,i=T0(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+$N(this._path)}}class ao extends _g{constructor(e,n){super(e,n,new ig,!1)}get parent(){const e=I0(this._path);return e===null?null:new ao(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}zO(ao);jO(ao);/**
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
 */const CM="FIREBASE_DATABASE_EMULATOR_HOST",ff={};let RM=!1;function SM(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fy(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[CM]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Fy(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new tf(tf.OWNER):new uN(t.name,t.options,e);oM("Invalid Firebase Database URL",o),me(o.path)||Lr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=PM(a,t,u,new cN(t.name,n));return new xM(h,t)}function kM(t,e){const n=ff[e];(!n||n[t.key]!==t)&&Lr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vM(t),delete n[t.key]}function PM(t,e,n,i){let r=ff[e.name];r||(r={},ff[e.name]=r);let s=r[t.toURLString()];return s&&Lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new fM(t,RM,n,i),r[t.toURLString()]=s,s}class xM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ao(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function DM(t){QD(cr),Wt(new Ct("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return SM(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),ut(oy,ay,t),ut(oy,ay,"esm2017")}Ti.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ti.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DM();var NM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,yg=yg||{},ae=NM||self;function Mu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function tl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function OM(t){return Object.prototype.hasOwnProperty.call(t,Kh)&&t[Kh]||(t[Kh]=++MM)}var Kh="closure_uid_"+(1e9*Math.random()>>>0),MM=0;function LM(t,e,n){return t.call.apply(t.bind,arguments)}function $M(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=LM:Ut=$M,Ut.apply(null,arguments)}function Vl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function ur(){this.s=this.s,this.o=this.o}var VM=0;ur.prototype.s=!1;ur.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),VM!=0)&&OM(this)};ur.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vg(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Uy(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Mu(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function Bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var FM=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",()=>{},e),ae.removeEventListener("test",()=>{},e)}catch{}return t}();function ya(t){return/^[\s\xa0]*$/.test(t)}function Lu(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function Kn(t){return Lu().indexOf(t)!=-1}function wg(t){return wg[" "](t),t}wg[" "]=function(){};function UM(t,e){var n=DL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var BM=Kn("Opera"),$s=Kn("Trident")||Kn("MSIE"),uI=Kn("Edge"),pf=uI||$s,hI=Kn("Gecko")&&!(Lu().toLowerCase().indexOf("webkit")!=-1&&!Kn("Edge"))&&!(Kn("Trident")||Kn("MSIE"))&&!Kn("Edge"),zM=Lu().toLowerCase().indexOf("webkit")!=-1&&!Kn("Edge");function dI(){var t=ae.document;return t?t.documentMode:void 0}var gf;e:{var Gh="",Qh=function(){var t=Lu();if(hI)return/rv:([^\);]+)(\)|;)/.exec(t);if(uI)return/Edge\/([\d\.]+)/.exec(t);if($s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zM)return/WebKit\/(\S+)/.exec(t);if(BM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qh&&(Gh=Qh?Qh[1]:""),$s){var Yh=dI();if(Yh!=null&&Yh>parseFloat(Gh)){gf=String(Yh);break e}}gf=Gh}var mf;if(ae.document&&$s){var By=dI();mf=By||parseInt(gf,10)||void 0}else mf=void 0;var jM=mf;function va(t,e){if(Bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hI){e:{try{wg(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&va.$.h.call(this)}}vt(va,Bt);var HM={2:"touch",3:"pen",4:"mouse"};va.prototype.h=function(){va.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nl="closure_listenable_"+(1e6*Math.random()|0),qM=0;function WM(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++qM,this.fa=this.ia=!1}function $u(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bg(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function KM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function fI(t){const e={};for(const n in t)e[n]=t[n];return e}const zy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pI(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<zy.length;s++)n=zy[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Vu(t){this.src=t,this.g={},this.h=0}Vu.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=yf(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new WM(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function _f(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=cI(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&($u(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yf(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var Eg="closure_lm_"+(1e6*Math.random()|0),Xh={};function gI(t,e,n,i,r){if(i&&i.once)return _I(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gI(t,e[s],n,i,r);return null}return n=Ag(n),t&&t[nl]?t.O(e,n,tl(i)?!!i.capture:!!i,r):mI(t,e,n,!1,i,r)}function mI(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=tl(r)?!!r.capture:!!r,a=Tg(t);if(a||(t[Eg]=a=new Vu(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=GM(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)FM||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(vI(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GM(){function t(n){return e.call(t.src,t.listener,n)}const e=QM;return t}function _I(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_I(t,e[s],n,i,r);return null}return n=Ag(n),t&&t[nl]?t.P(e,n,tl(i)?!!i.capture:!!i,r):mI(t,e,n,!0,i,r)}function yI(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)yI(t,e[s],n,i,r);else i=tl(i)?!!i.capture:!!i,n=Ag(n),t&&t[nl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=yf(s,n,i,r),-1<n&&($u(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yf(e,n,i,r)),(n=-1<t?e[t]:null)&&Ig(n))}function Ig(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[nl])_f(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(vI(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Tg(e))?(_f(n,t),n.h==0&&(n.src=null,e[Eg]=null)):$u(t)}}}function vI(t){return t in Xh?Xh[t]:Xh[t]="on"+t}function QM(t,e){if(t.fa)t=!0;else{e=new va(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Ig(t),t=n.call(i,e)}return t}function Tg(t){return t=t[Eg],t instanceof Vu?t:null}var Jh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ag(t){return typeof t=="function"?t:(t[Jh]||(t[Jh]=function(e){return t.handleEvent(e)}),t[Jh])}function yt(){ur.call(this),this.i=new Vu(this),this.S=this,this.J=null}vt(yt,ur);yt.prototype[nl]=!0;yt.prototype.removeEventListener=function(t,e,n,i){yI(this,t,e,n,i)};function At(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Bt(e,t);else if(e instanceof Bt)e.target=e.target||t;else{var r=e;e=new Bt(i,t),pI(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Fl(o,i,!0,e)&&r}if(o=e.g=t,r=Fl(o,i,!0,e)&&r,r=Fl(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Fl(o,i,!1,e)&&r}yt.prototype.N=function(){if(yt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)$u(n[i]);delete t.g[e],t.h--}}this.J=null};yt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};yt.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Fl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_f(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var Cg=ae.JSON.stringify;class YM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function XM(){var t=Rg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JM{constructor(){this.h=this.g=null}add(e,n){const i=wI.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var wI=new YM(()=>new ZM,t=>t.reset());class ZM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tL(t){ae.setTimeout(()=>{throw t},0)}let wa,ba=!1,Rg=new JM,bI=()=>{const t=ae.Promise.resolve(void 0);wa=()=>{t.then(nL)}};var nL=()=>{for(var t;t=XM();){try{t.h.call(t.g)}catch(n){tL(n)}var e=wI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ba=!1};function Fu(t,e){yt.call(this),this.h=t||1,this.g=e||ae,this.j=Ut(this.qb,this),this.l=Date.now()}vt(Fu,yt);F=Fu.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(Sg(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){Fu.$.N.call(this),Sg(this),delete this.g};function kg(t,e,n){if(typeof t=="function")n&&(t=Ut(t,n));else if(t&&typeof t.handleEvent=="function")t=Ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function EI(t){t.g=kg(()=>{t.g=null,t.i&&(t.i=!1,EI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class iL extends ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:EI(this)}N(){super.N(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ea(t){ur.call(this),this.h=t,this.g={}}vt(Ea,ur);var jy=[];function II(t,e,n,i){Array.isArray(n)||(n&&(jy[0]=n.toString()),n=jy);for(var r=0;r<n.length;r++){var s=gI(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function TI(t){bg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ig(e)},t),t.g={}}Ea.prototype.N=function(){Ea.$.N.call(this),TI(this)};Ea.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uu(){this.g=!0}Uu.prototype.Ea=function(){this.g=!1};function rL(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function sL(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function _s(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aL(t,n)+(i?" "+i:"")})}function oL(t,e){t.info(function(){return"TIMEOUT: "+e})}Uu.prototype.info=function(){};function aL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Cg(n)}catch{return e}}var es={},Hy=null;function Bu(){return Hy=Hy||new yt}es.Ta="serverreachability";function AI(t){Bt.call(this,es.Ta,t)}vt(AI,Bt);function Ia(t){const e=Bu();At(e,new AI(e))}es.STAT_EVENT="statevent";function CI(t,e){Bt.call(this,es.STAT_EVENT,t),this.stat=e}vt(CI,Bt);function en(t){const e=Bu();At(e,new CI(e,t))}es.Ua="timingevent";function RI(t,e){Bt.call(this,es.Ua,t),this.size=e}vt(RI,Bt);function il(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var zu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},SI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Pg(){}Pg.prototype.h=null;function qy(t){return t.h||(t.h=t.i())}function kI(){}var rl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xg(){Bt.call(this,"d")}vt(xg,Bt);function Dg(){Bt.call(this,"c")}vt(Dg,Bt);var vf;function ju(){}vt(ju,Pg);ju.prototype.g=function(){return new XMLHttpRequest};ju.prototype.i=function(){return{}};vf=new ju;function sl(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Ea(this),this.P=lL,t=pf?125:void 0,this.V=new Fu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new PI}function PI(){this.i=null,this.g="",this.h=!1}var lL=45e3,wf={},Lc={};F=sl.prototype;F.setTimeout=function(t){this.P=t};function bf(t,e,n){t.L=1,t.v=qu(Si(e)),t.s=n,t.S=!0,xI(t,null)}function xI(t,e){t.G=Date.now(),ol(t),t.A=Si(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),FI(n.i,"t",i),t.C=0,n=t.l.J,t.h=new PI,t.g=oT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new iL(Ut(t.Pa,t,t.g),t.O)),II(t.U,t.g,"readystatechange",t.nb),e=t.I?fI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ia(),rL(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&Xn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const u=Xn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||pf||this.g&&(this.h.h||this.g.ja()||Qy(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ia(3):Ia(2)),Hu(this);var n=this.g.da();this.ca=n;t:if(DI(this)){var i=Qy(this.g);t="";var r=i.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),Ho(this);var o="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ya(a)){var c=a;break t}}c=null}if(n=c)_s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ef(this,n);else{this.i=!1,this.o=3,en(12),Tr(this),Ho(this);break e}}this.S?(NI(this,u,o),pf&&this.i&&u==3&&(II(this.U,this.V,"tick",this.mb),this.V.start())):(_s(this.j,this.m,o,null),Ef(this,o)),u==4&&Tr(this),this.i&&!this.J&&(u==4?nT(this.l,this):(this.i=!1,ol(this)))}else kL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,en(12)):(this.o=0,en(13)),Tr(this),Ho(this)}}}catch{}finally{}};function DI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function NI(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=cL(t,n),r==Lc){e==4&&(t.o=4,en(14),i=!1),_s(t.j,t.m,null,"[Incomplete Response]");break}else if(r==wf){t.o=4,en(15),_s(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else _s(t.j,t.m,r,null),Ef(t,r);DI(t)&&r!=Lc&&r!=wf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,en(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vg(e),e.M=!0,en(11))):(_s(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),Ho(t))}F.mb=function(){if(this.g){var t=Xn(this.g),e=this.g.ja();this.C<e.length&&(Hu(this),NI(this,t,e),this.i&&t!=4&&ol(this))}};function cL(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Lc:(n=Number(e.substring(n,i)),isNaN(n)?wf:(i+=1,i+n>e.length?Lc:(e=e.slice(i,i+n),t.C=i+n,e)))}F.cancel=function(){this.J=!0,Tr(this)};function ol(t){t.Y=Date.now()+t.P,OI(t,t.P)}function OI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=il(Ut(t.lb,t),e)}function Hu(t){t.B&&(ae.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(oL(this.j,this.A),this.L!=2&&(Ia(),en(17)),Tr(this),this.o=2,Ho(this)):OI(this,this.Y-t)};function Ho(t){t.l.H==0||t.J||nT(t.l,t)}function Tr(t){Hu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Sg(t.V),TI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ef(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||If(n.i,t))){if(!t.K&&If(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Fc(n),Gu(n);else break e;$g(n),en(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=il(Ut(n.ib,n),6e3));if(1>=zI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ar(n,11)}else if((t.K||n.g==t)&&Fc(n),!ya(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=i.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ng(s,s.h),s.h=null))}if(i.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,He(i.I,i.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=sT(i,i.J?i.pa:null,i.Y),o.K){jI(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Hu(a),ol(a)),i.g=o}else eT(i);0<n.j.length&&Qu(n)}else c[0]!="stop"&&c[0]!="close"||Ar(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ar(n,7):Lg(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ia(4)}catch{}}function uL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Mu(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function hL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Mu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function MI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hL(t),i=uL(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var LI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Nr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Nr){this.h=t.h,$c(this,t.j),this.s=t.s,this.g=t.g,Vc(this,t.m),this.l=t.l;var e=t.i,n=new Ta;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wy(this,n),this.o=t.o}else t&&(e=String(t).match(LI))?(this.h=!1,$c(this,e[1]||"",!0),this.s=No(e[2]||""),this.g=No(e[3]||"",!0),Vc(this,e[4]),this.l=No(e[5]||"",!0),Wy(this,e[6]||"",!0),this.o=No(e[7]||"")):(this.h=!1,this.i=new Ta(null,this.h))}Nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Oo(e,Ky,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Oo(e,Ky,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Oo(n,n.charAt(0)=="/"?gL:pL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Oo(n,_L)),t.join("")};function Si(t){return new Nr(t)}function $c(t,e,n){t.j=n?No(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wy(t,e,n){e instanceof Ta?(t.i=e,yL(t.i,t.h)):(n||(e=Oo(e,mL)),t.i=new Ta(e,t.h))}function He(t,e,n){t.i.set(e,n)}function qu(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function No(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ky=/[#\/\?@]/g,pL=/[#\?:]/g,gL=/[#\?]/g,mL=/[#\?@]/g,_L=/#/g;function Ta(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hr(t){t.g||(t.g=new Map,t.h=0,t.i&&dL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Ta.prototype;F.add=function(t,e){hr(this),this.i=null,t=lo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $I(t,e){hr(t),e=lo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function VI(t,e){return hr(t),e=lo(t,e),t.g.has(e)}F.forEach=function(t,e){hr(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};F.ta=function(){hr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};F.Z=function(t){hr(this);let e=[];if(typeof t=="string")VI(this,t)&&(e=e.concat(this.g.get(lo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return hr(this),this.i=null,t=lo(this,t),VI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function FI(t,e,n){$I(t,e),0<n.length&&(t.i=null,t.g.set(lo(t,e),vg(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function lo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yL(t,e){e&&!t.j&&(hr(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&($I(this,i),FI(this,r,n))},t)),t.j=e}var vL=class{constructor(t,e){this.g=t,this.map=e}};function UI(t){this.l=t||wL,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ka&&ae.g.Ka()&&ae.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wL=10;function BI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zI(t){return t.h?1:t.g?t.g.size:0}function If(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ng(t,e){t.g?t.g.add(e):t.h=e}function jI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}UI.prototype.cancel=function(){if(this.i=HI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function HI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return vg(t.i)}var bL=class{stringify(t){return ae.JSON.stringify(t,void 0)}parse(t){return ae.JSON.parse(t,void 0)}};function EL(){this.g=new bL}function IL(t,e,n){const i=n||"";try{MI(t,function(r,s){let o=r;tl(r)&&(o=Cg(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function TL(t,e){const n=new Uu;if(ae.Image){const i=new Image;i.onload=Vl(Ul,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Vl(Ul,n,i,"TestLoadImage: error",!1,e),i.onabort=Vl(Ul,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Vl(Ul,n,i,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ul(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function al(t){this.l=t.fc||null,this.j=t.ob||!1}vt(al,Pg);al.prototype.g=function(){return new Wu(this.l,this.j)};al.prototype.i=function(t){return function(){return t}}({});function Wu(t,e){yt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Og,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(Wu,yt);var Og=0;F=Wu.prototype;F.open=function(t,e){if(this.readyState!=Og)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Aa(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ll(this)),this.readyState=Og};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Aa(this)),this.g&&(this.readyState=3,Aa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ll(this):Aa(this),this.readyState==3&&qI(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,ll(this))};F.Ya=function(t){this.g&&(this.response=t,ll(this))};F.ka=function(){this.g&&ll(this)};function ll(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Aa(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Aa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AL=ae.JSON.parse;function Ze(t){yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=WI,this.L=this.M=!1}vt(Ze,yt);var WI="",CL=/^https?$/i,RL=["POST","PUT"];F=Ze.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vf.g(),this.C=this.u?qy(this.u):qy(vf),this.g.onreadystatechange=Ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Gy(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=ae.FormData&&t instanceof ae.FormData,!(0<=cI(RL,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{QI(this),0<this.B&&((this.L=SL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.ua,this)):this.A=kg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Gy(this,s)}};function SL(t){return $s&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof yg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function Gy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,KI(t),Ku(t)}function KI(t){t.F||(t.F=!0,At(t,"complete"),At(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Ku(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ku(this,!0)),Ze.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?GI(this):this.kb())};F.kb=function(){GI(this)};function GI(t){if(t.h&&typeof yg<"u"&&(!t.C[1]||Xn(t)!=4||t.da()!=2)){if(t.v&&Xn(t)==4)kg(t.La,0,t);else if(At(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(LI)[1]||null;!r&&ae.self&&ae.self.location&&(r=ae.self.location.protocol.slice(0,-1)),i=!CL.test(r?r.toLowerCase():"")}n=i}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var s=2<Xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",KI(t)}}finally{Ku(t)}}}}function Ku(t,e){if(t.g){QI(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||At(t,"ready");try{n.onreadystatechange=i}catch{}}}function QI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function Xn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AL(e)}};function Qy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case WI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kL(t){const e={};t=(t.g&&2<=Xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(ya(t[i]))continue;var n=eL(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}KM(e,function(i){return i.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function YI(t){let e="";return bg(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Mg(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=YI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):He(t,e,n))}function To(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function XI(t){this.Ga=0,this.j=[],this.l=new Uu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=To("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=To("baseRetryDelayMs",5e3,t),this.hb=To("retryDelaySeedMs",1e4,t),this.eb=To("forwardChannelMaxRetries",2,t),this.xa=To("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new UI(t&&t.concurrentRequestLimit),this.Ja=new EL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=XI.prototype;F.ra=8;F.H=1;function Lg(t){if(JI(t),t.H==3){var e=t.W++,n=Si(t.I);if(He(n,"SID",t.K),He(n,"RID",e),He(n,"TYPE","terminate"),cl(t,n),e=new sl(t,t.l,e),e.L=2,e.v=qu(Si(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon)try{n=ae.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ae.Image&&(new Image().src=e.v,n=!0),n||(e.g=oT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ol(e)}rT(t)}function Gu(t){t.g&&(Vg(t),t.g.cancel(),t.g=null)}function JI(t){Gu(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Fc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function Qu(t){if(!BI(t.i)&&!t.m){t.m=!0;var e=t.Na;wa||bI(),ba||(wa(),ba=!0),Rg.add(e,t),t.C=0}}function PL(t,e){return zI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=il(Ut(t.Na,t,e),iT(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new sl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=fI(s),pI(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ZI(this,r,e),n=Si(this.I),He(n,"RID",t),He(n,"CVER",22),this.F&&He(n,"X-HTTP-Session-Id",this.F),cl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(YI(s)))+"&"+e:this.o&&Mg(n,this.o,s)),Ng(this.i,r),this.bb&&He(n,"TYPE","init"),this.P?(He(n,"$req",e),He(n,"SID","null"),r.aa=!0,bf(r,n,null)):bf(r,n,e),this.H=2}}else this.H==3&&(t?Yy(this,t):this.j.length==0||BI(this.i)||Yy(this))};function Yy(t,e){var n;e?n=e.m:n=t.W++;const i=Si(t.I);He(i,"SID",t.K),He(i,"RID",n),He(i,"AID",t.V),cl(t,i),t.o&&t.s&&Mg(i,t.o,t.s),n=new sl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ZI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ng(t.i,n),bf(n,i,e)}function cl(t,e){t.na&&bg(t.na,function(n,i){He(e,i,n)}),t.h&&MI({},function(n,i){He(e,i,n)})}function ZI(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Ut(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=s,0>c)s=Math.max(0,r[l].g-100),a=!1;else try{IL(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function eT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wa||bI(),ba||(wa(),ba=!0),Rg.add(e,t),t.A=0}}function $g(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=il(Ut(t.Ma,t),iT(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,tT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=il(Ut(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,en(10),Gu(this),tT(this))};function Vg(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function tT(t){t.g=new sl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Si(t.wa);He(e,"RID","rpc"),He(e,"SID",t.K),He(e,"AID",t.V),He(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&He(e,"TO",t.qa),He(e,"TYPE","xmlhttp"),cl(t,e),t.o&&t.s&&Mg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qu(Si(e)),n.s=null,n.S=!0,xI(n,t)}F.ib=function(){this.v!=null&&(this.v=null,Gu(this),$g(this),en(19))};function Fc(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function nT(t,e){var n=null;if(t.g==e){Fc(t),Vg(t),t.g=null;var i=2}else if(If(t.i,e))n=e.F,jI(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=Bu(),At(i,new RI(i,n)),Qu(t)}else eT(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&PL(t,e)||i==2&&$g(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ar(t,5);break;case 4:Ar(t,10);break;case 3:Ar(t,6);break;default:Ar(t,2)}}}function iT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ar(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Ut(t.pb,t);n||(n=new Nr("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||$c(n,"https"),qu(n)),TL(n.toString(),i)}else en(2);t.H=0,t.h&&t.h.za(e),rT(t),JI(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),en(2)):(this.l.info("Failed to ping google.com"),en(1))};function rT(t){if(t.H=0,t.ma=[],t.h){const e=HI(t.i);(e.length!=0||t.j.length!=0)&&(Uy(t.ma,e),Uy(t.ma,t.j),t.i.i.length=0,vg(t.j),t.j.length=0),t.h.ya()}}function sT(t,e,n){var i=n instanceof Nr?Si(n):new Nr(n);if(i.g!="")e&&(i.g=e+"."+i.g),Vc(i,i.m);else{var r=ae.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Nr(null);i&&$c(s,i),e&&(s.g=e),r&&Vc(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&He(i,n,e),He(i,"VER",t.ra),cl(t,i),i}function oT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ze(new al({ob:!0})):new Ze(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function aT(){}F=aT.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function Uc(){if($s&&!(10<=Number(jM)))throw Error("Environmental error: no available transport.")}Uc.prototype.g=function(t,e){return new vn(t,e)};function vn(t,e){yt.call(this),this.g=new XI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ya(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new co(this)}vt(vn,yt);vn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;en(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=sT(t,null,t.Y),Qu(t)};vn.prototype.close=function(){Lg(this.g)};vn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Cg(t),t=n);e.j.push(new vL(e.fb++,t)),e.H==3&&Qu(e)};vn.prototype.N=function(){this.g.h=null,delete this.j,Lg(this.g),delete this.g,vn.$.N.call(this)};function lT(t){xg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}vt(lT,xg);function cT(){Dg.call(this),this.status=1}vt(cT,Dg);function co(t){this.g=t}vt(co,aT);co.prototype.Ba=function(){At(this.g,"a")};co.prototype.Aa=function(t){At(this.g,new lT(t))};co.prototype.za=function(t){At(this.g,new cT)};co.prototype.ya=function(){At(this.g,"b")};function xL(){this.blockSize=-1}function Vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}vt(Vn,xL);Vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Zh(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}Vn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)Zh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Zh(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Zh(this,i),r=0;break}}this.h=r,this.i+=e};Vn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function Me(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var DL={};function Fg(t){return-128<=t&&128>t?UM(t,function(e){return new Me([e|0],0>e?-1:0)}):new Me([t|0],0>t?-1:0)}function Jn(t){if(isNaN(t)||!isFinite(t))return Cs;if(0>t)return Et(Jn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Tf;return new Me(e,0)}function uT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Et(uT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jn(Math.pow(e,8)),i=Cs,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=Jn(Math.pow(e,s)),i=i.R(s).add(Jn(o))):(i=i.R(n),i=i.add(Jn(o)))}return i}var Tf=4294967296,Cs=Fg(0),Af=Fg(1),Xy=Fg(16777216);F=Me.prototype;F.ea=function(){if(bn(this))return-Et(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Tf+i)*e,e*=Tf}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ei(this))return"0";if(bn(this))return"-"+Et(this).toString(t);for(var e=Jn(Math.pow(t,6)),n=this,i="";;){var r=zc(n,e).g;n=Bc(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Ei(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ei(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bn(t){return t.h==-1}F.X=function(t){return t=Bc(this,t),bn(t)?-1:Ei(t)?0:1};function Et(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Me(n,~t.h).add(Af)}F.abs=function(){return bn(this)?Et(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new Me(n,n[n.length-1]&-2147483648?-1:0)};function Bc(t,e){return t.add(Et(e))}F.R=function(t){if(Ei(this)||Ei(t))return Cs;if(bn(this))return bn(t)?Et(this).R(Et(t)):Et(Et(this).R(t));if(bn(t))return Et(this.R(Et(t)));if(0>this.X(Xy)&&0>t.X(Xy))return Jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*i+2*r]+=o*l,Bl(n,2*i+2*r),n[2*i+2*r+1]+=s*l,Bl(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Bl(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Bl(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Me(n,0)};function Bl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ao(t,e){this.g=t,this.h=e}function zc(t,e){if(Ei(e))throw Error("division by zero");if(Ei(t))return new Ao(Cs,Cs);if(bn(t))return e=zc(Et(t),e),new Ao(Et(e.g),Et(e.h));if(bn(e))return e=zc(t,Et(e)),new Ao(Et(e.g),e.h);if(30<t.g.length){if(bn(t)||bn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Af,i=e;0>=i.X(t);)n=Jy(n),i=Jy(i);var r=ls(n,1),s=ls(i,1);for(i=ls(i,2),n=ls(n,2);!Ei(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=ls(i,1),n=ls(n,1)}return e=Bc(t,r.R(e)),new Ao(r,e)}for(r=Cs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Jn(n),o=s.R(e);bn(o)||0<o.X(t);)n-=i,s=Jn(n),o=s.R(e);Ei(s)&&(s=Af),r=r.add(s),t=Bc(t,o)}return new Ao(r,t)}F.gb=function(t){return zc(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Me(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Me(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Me(n,this.h^t.h)};function Jy(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Me(n,t.h)}function ls(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Me(r,t.h)}Uc.prototype.createWebChannel=Uc.prototype.g;vn.prototype.send=vn.prototype.u;vn.prototype.open=vn.prototype.m;vn.prototype.close=vn.prototype.close;zu.NO_ERROR=0;zu.TIMEOUT=8;zu.HTTP_ERROR=6;SI.COMPLETE="complete";kI.EventType=rl;rl.OPEN="a";rl.CLOSE="b";rl.ERROR="c";rl.MESSAGE="d";yt.prototype.listen=yt.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;Vn.prototype.digest=Vn.prototype.l;Vn.prototype.reset=Vn.prototype.reset;Vn.prototype.update=Vn.prototype.j;Me.prototype.add=Me.prototype.add;Me.prototype.multiply=Me.prototype.R;Me.prototype.modulo=Me.prototype.gb;Me.prototype.compare=Me.prototype.X;Me.prototype.toNumber=Me.prototype.ea;Me.prototype.toString=Me.prototype.toString;Me.prototype.getBits=Me.prototype.D;Me.fromNumber=Jn;Me.fromString=uT;var NL=function(){return new Uc},OL=function(){return Bu()},ed=zu,ML=SI,LL=es,Zy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$L=al,zl=kI,VL=Ze,FL=Vn,Rs=Me;const ev="@firebase/firestore";/**
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
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let uo="10.1.0";/**
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
 */const Ur=new io("@firebase/firestore");function tv(){return Ur.logLevel}function G(t,...e){if(Ur.logLevel<=Ee.DEBUG){const n=e.map(Ug);Ur.debug(`Firestore (${uo}): ${t}`,...n)}}function ki(t,...e){if(Ur.logLevel<=Ee.ERROR){const n=e.map(Ug);Ur.error(`Firestore (${uo}): ${t}`,...n)}}function Vs(t,...e){if(Ur.logLevel<=Ee.WARN){const n=e.map(Ug);Ur.warn(`Firestore (${uo}): ${t}`,...n)}}function Ug(t){if(typeof t=="string")return t;try{/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${uo}) INTERNAL ASSERTION FAILED: `+t;throw ki(e),new Error(e)}function Oe(t,e){t||ie()}function he(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ii{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class BL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zL{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ii,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ii)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Oe(typeof i.accessToken=="string"),new hT(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new Dt(e)}}class jL{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class HL{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new jL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new qL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function KL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class dT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=KL(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Re(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new ot(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new ot(0,0))}static max(){return new re(new ot(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ca{constructor(e,n,i){n===void 0?n=0:n>e.length&&ie(),i===void 0?i=e.length-n:i>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ca?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ke extends Ca{construct(e,n,i){return new Ke(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new W(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const GL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends Ca{construct(e,n,i){return new Vt(e,n,i)}static isValidIdentifier(e){return GL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Vt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new W(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new W(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(n)}static emptyPath(){return new Vt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ke.fromString(e))}static fromName(e){return new ne(Ke.fromString(e).popFirst(5))}static empty(){return new ne(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ke(e.slice()))}}function QL(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=re.fromTimestamp(i===1e9?new ot(n+1,0):new ot(n,i));return new rr(r,ne.empty(),e)}function YL(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new rr(re.min(),ne.empty(),-1)}static max(){return new rr(re.max(),ne.empty(),-1)}}function XL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const JL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ul(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==JL)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,i)=>{n(e)})}static reject(e){return new O((n,i)=>{i(e)})}static waitFor(e){return new O((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=O.resolve(!1);for(const i of e)n=n.next(r=>r?O.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new O((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new O((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function hl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Bg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.oe(i),this._e=i=>n.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Bg.ae=-1;function dl(t){return t==null}function jc(t){return t===0&&1/t==-1/0}function e$(t){return typeof t=="number"&&Number.isInteger(t)&&!jc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function nv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jl(this.root,e,this.comparator,!0)}}class jl{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??bt.RED,this.left=r??bt.EMPTY,this.right=s??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new bt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return bt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,i,r,s){return this}insert(e,n,i){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class zt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new zt(this.comparator);return n.data=e,n}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new pn([])}unionWith(e){let n=new zt(Vt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class pT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pT("Invalid base64 string: "+s):s}}(e);return new Kt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const t$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=t$.exec(t);if(Oe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?Kt.fromBase64String(t):Kt.fromUint8Array(t)}/**
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
 */function zg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jg(t){const e=t.mapValue.fields.__previous_value__;return zg(e)?jg(e):e}function Ra(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class n${constructor(e,n,i,r,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Sa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Hl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zg(t)?4:i$(t)?9007199254740991:10:ie()}function ai(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=sr(r.timestampValue),a=sr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Br(r.bytesValue).isEqual(Br(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return st(r.geoPointValue.latitude)===st(s.geoPointValue.latitude)&&st(r.geoPointValue.longitude)===st(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return st(r.integerValue)===st(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=st(r.doubleValue),a=st(s.doubleValue);return o===a?jc(o)===jc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],ai);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(nv(o)!==nv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ai(o[l],a[l])))return!1;return!0}(t,e);default:return ie()}}function ka(t,e){return(t.values||[]).find(n=>ai(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=zr(t),i=zr(e);if(n!==i)return Re(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=st(s.integerValue||s.doubleValue),l=st(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return rv(t.timestampValue,e.timestampValue);case 4:return rv(Ra(t),Ra(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Br(s),l=Br(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Re(a[c],l[c]);if(u!==0)return u}return Re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Re(st(s.latitude),st(o.latitude));return a!==0?a:Re(st(s.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Us(a[c],l[c]);if(u)return u}return Re(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Hl.mapValue&&o===Hl.mapValue)return 0;if(s===Hl.mapValue)return 1;if(o===Hl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Re(l[h],u[h]);if(d!==0)return d;const f=Us(a[l[h]],c[u[h]]);if(f!==0)return f}return Re(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ie()}}function rv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=sr(t),i=sr(e),r=Re(n.seconds,i.seconds);return r!==0?r:Re(n.nanos,i.nanos)}function Bs(t){return Cf(t)}function Cf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=sr(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=Cf(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${Cf(n.fields[o])}`;return r+"}"}(t.mapValue):ie()}function Rf(t){return!!t&&"integerValue"in t}function Hg(t){return!!t&&"arrayValue"in t}function sv(t){return!!t&&"nullValue"in t}function ov(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rc(t){return!!t&&"mapValue"in t}function qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=qo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function i$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!rc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=Vt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=qo(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());rc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ai(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];rc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){ts(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Jt(qo(this.value))}}function gT(t){const e=[];return ts(t.fields,(n,i)=>{const r=new Vt([n]);if(rc(i)){const s=gT(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new pn(e)}/**
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
 */class gt{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,re.min(),re.min(),re.min(),Jt.empty(),0)}static newFoundDocument(e,n,i,r){return new gt(e,1,n,re.min(),i,r,0)}static newNoDocument(e,n){return new gt(e,2,n,re.min(),re.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,re.min(),re.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hc{constructor(e,n){this.position=e,this.inclusive=n}}function av(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=ne.comparator(ne.fromName(o.referenceValue),n.key):i=Us(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function lv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ai(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function r$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mT{}class ct extends mT{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new o$(e,n,i):n==="array-contains"?new c$(e,i):n==="in"?new u$(e,i):n==="not-in"?new h$(e,i):n==="array-contains-any"?new d$(e,i):new ct(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new a$(e,i):new l$(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Us(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class li extends mT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new li(e,n)}matches(e){return _T(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function _T(t){return t.op==="and"}function yT(t){return s$(t)&&_T(t)}function s$(t){for(const e of t.filters)if(e instanceof li)return!1;return!0}function Sf(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(yT(t))return t.filters.map(e=>Sf(e)).join(",");{const e=t.filters.map(n=>Sf(n)).join(",");return`${t.op}(${e})`}}function vT(t,e){return t instanceof ct?function(i,r){return r instanceof ct&&i.op===r.op&&i.field.isEqual(r.field)&&ai(i.value,r.value)}(t,e):t instanceof li?function(i,r){return r instanceof li&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&vT(o,r.filters[a]),!0):!1}(t,e):void ie()}function wT(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`}(t):t instanceof li?function(n){return n.op.toString()+" {"+n.getFilters().map(wT).join(" ,")+"}"}(t):"Filter"}class o$ extends ct{constructor(e,n,i){super(e,n,i),this.key=ne.fromName(i.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class a$ extends ct{constructor(e,n){super(e,"in",n),this.keys=bT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class l$ extends ct{constructor(e,n){super(e,"not-in",n),this.keys=bT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ne.fromName(i.referenceValue))}class c$ extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hg(n)&&ka(n.arrayValue,this.value)}}class u$ extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class h$ extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ka(this.value.arrayValue,n)}}class d$ extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ka(this.value.arrayValue,i))}}/**
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
 */class f${constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function cv(t,e=null,n=[],i=[],r=null,s=null,o=null){return new f$(t,e,n,i,r,s,o)}function qg(t){const e=he(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Sf(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),dl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Bs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Bs(i)).join(",")),e.he=n}return e.he}function Wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lv(t.startAt,e.startAt)&&lv(t.endAt,e.endAt)}function kf(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Yu{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function p$(t,e,n,i,r,s,o,a){return new Yu(t,e,n,i,r,s,o,a)}function Xu(t){return new Yu(t)}function uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function g$(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function m$(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _$(t){return t.collectionGroup!==null}function Ss(t){const e=he(t);if(e.Pe===null){e.Pe=[];const n=m$(e),i=g$(e);if(n!==null&&i===null)n.isKeyField()||e.Pe.push(new Wo(n)),e.Pe.push(new Wo(Vt.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Wo(Vt.keyField(),s))}}}return e.Pe}function Pi(t){const e=he(t);if(!e.Ie)if(e.limitType==="F")e.Ie=cv(e.path,e.collectionGroup,Ss(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ss(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Wo(s.field,o))}const i=e.endAt?new Hc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Hc(e.startAt.position,e.startAt.inclusive):null;e.Ie=cv(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.Ie}function Pf(t,e,n){return new Yu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ju(t,e){return Wg(Pi(t),Pi(e))&&t.limitType===e.limitType}function ET(t){return`${qg(Pi(t))}|lt:${t.limitType}`}function xf(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>wT(r)).join(", ")}]`),dl(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>Bs(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>Bs(r)).join(",")),`Target(${i})`}(Pi(t))}; limitType=${t.limitType})`}function Zu(t,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):ne.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(t,e)&&function(i,r){for(const s of Ss(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(i,r){return!(i.startAt&&!function(o,a,l){const c=av(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,Ss(i),r)||i.endAt&&!function(o,a,l){const c=av(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,Ss(i),r))}(t,e)}function y$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function IT(t){return(e,n)=>{let i=!1;for(const r of Ss(t)){const s=v$(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function v$(t,e,n){const i=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Us(l,c):ie()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ie()}}/**
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
 */class ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return fT(this.inner)}size(){return this.innerSize}}/**
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
 */const w$=new Ye(ne.comparator);function xi(){return w$}const TT=new Ye(ne.comparator);function Mo(...t){let e=TT;for(const n of t)e=e.insert(n.key,n);return e}function AT(t){let e=TT;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Cr(){return Ko()}function CT(){return Ko()}function Ko(){return new ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const b$=new Ye(ne.comparator),E$=new zt(ne.comparator);function ge(...t){let e=E$;for(const n of t)e=e.add(n);return e}const I$=new zt(Re);function T$(){return I$}/**
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
 */function RT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(e)?"-0":e}}function ST(t){return{integerValue:""+t}}function kT(t,e){return e$(e)?ST(e):RT(t,e)}/**
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
 */class eh{constructor(){this._=void 0}}function A$(t,e,n){return t instanceof qc?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&zg(s)&&(s=jg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof zs?xT(t,e):t instanceof js?DT(t,e):function(r,s){const o=PT(r,s),a=hv(o)+hv(r.Te);return Rf(o)&&Rf(r.Te)?ST(a):RT(r.serializer,a)}(t,e)}function C$(t,e,n){return t instanceof zs?xT(t,e):t instanceof js?DT(t,e):n}function PT(t,e){return t instanceof Pa?function(i){return Rf(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class qc extends eh{}class zs extends eh{constructor(e){super(),this.elements=e}}function xT(t,e){const n=NT(e);for(const i of t.elements)n.some(r=>ai(r,i))||n.push(i);return{arrayValue:{values:n}}}class js extends eh{constructor(e){super(),this.elements=e}}function DT(t,e){let n=NT(e);for(const i of t.elements)n=n.filter(r=>!ai(r,i));return{arrayValue:{values:n}}}class Pa extends eh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function hv(t){return st(t.integerValue||t.doubleValue)}function NT(t){return Hg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Kg{constructor(e,n){this.field=e,this.transform=n}}function R$(t,e){return t.field.isEqual(e.field)&&function(i,r){return i instanceof zs&&r instanceof zs||i instanceof js&&r instanceof js?Fs(i.elements,r.elements,ai):i instanceof Pa&&r instanceof Pa?ai(i.Te,r.Te):i instanceof qc&&r instanceof qc}(t.transform,e.transform)}class S${constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function OT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gg(t.key,Zt.none()):new fl(t.key,t.data,Zt.none());{const n=t.data,i=Jt.empty();let r=new zt(Vt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new dr(t.key,i,new pn(r.toArray()),Zt.none())}}function k$(t,e,n){t instanceof fl?function(r,s,o){const a=r.value.clone(),l=fv(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(r,s,o){if(!sc(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=fv(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(MT(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Go(t,e,n,i){return t instanceof fl?function(s,o,a,l){if(!sc(s.precondition,o))return a;const c=s.value.clone(),u=pv(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof dr?function(s,o,a,l){if(!sc(s.precondition,o))return a;const c=pv(s.fieldTransforms,l,o),u=o.data;return u.setAll(MT(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(s,o,a){return sc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function P$(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=PT(i.transform,r||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(i.field,s))}return n||null}function dv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Fs(i,r,(s,o)=>R$(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fl extends th{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class dr extends th{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function MT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function fv(t,e,n){const i=new Map;Oe(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,C$(o,a,n[r]))}return i}function pv(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,A$(s,o,e))}return i}class Gg extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LT extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class x${constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&k$(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Go(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Go(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=CT();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=OT(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,i)=>dv(n,i))&&Fs(this.baseMutations,e.baseMutations,(n,i)=>dv(n,i))}}class Qg{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Oe(e.mutations.length===i.length);let r=function(){return b$}();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Qg(e,n,i,r)}}/**
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
 */class D${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class N${constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,_e;function $T(t){switch(t){default:return ie();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function VT(t){if(t===void 0)return ki("GRPC error has no .code"),k.UNKNOWN;switch(t){case it.OK:return k.OK;case it.CANCELLED:return k.CANCELLED;case it.UNKNOWN:return k.UNKNOWN;case it.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case it.INTERNAL:return k.INTERNAL;case it.UNAVAILABLE:return k.UNAVAILABLE;case it.UNAUTHENTICATED:return k.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case it.NOT_FOUND:return k.NOT_FOUND;case it.ALREADY_EXISTS:return k.ALREADY_EXISTS;case it.PERMISSION_DENIED:return k.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case it.ABORTED:return k.ABORTED;case it.OUT_OF_RANGE:return k.OUT_OF_RANGE;case it.UNIMPLEMENTED:return k.UNIMPLEMENTED;case it.DATA_LOSS:return k.DATA_LOSS;default:return ie()}}(_e=it||(it={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Yg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ql}static getOrCreateInstance(){return ql===null&&(ql=new Yg),ql}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ql=null;/**
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
 */function O$(){return new TextEncoder}/**
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
 */const M$=new Rs([4294967295,4294967295],0);function gv(t){const e=O$().encode(t),n=new FL;return n.update(e),new Uint8Array(n.digest())}function mv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Rs([n,i],0),new Rs([r,s],0)]}class Xg{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Lo(`Invalid padding: ${n}`);if(i<0)throw new Lo(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Lo(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Lo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Rs.fromNumber(this.de)}Re(e,n,i){let r=e.add(n.multiply(Rs.fromNumber(i)));return r.compare(M$)===1&&(r=new Rs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=gv(e),[i,r]=mv(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(i,r,s);if(!this.Ve(o))return!1}return!0}static create(e,n,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xg(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=gv(e),[i,r]=mv(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(i,r,s);this.me(o)}}me(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nh{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,pl.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new nh(re.min(),r,new Ye(Re),xi(),ge())}}class pl{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new pl(i,n,ge(),ge(),ge())}}/**
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
 */class oc{constructor(e,n,i,r){this.fe=e,this.removedTargetIds=n,this.key=i,this.ge=r}}class FT{constructor(e,n){this.targetId=e,this.pe=n}}class UT{constructor(e,n,i=Kt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class _v{constructor(){this.ye=0,this.we=vv(),this.Se=Kt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ge(),n=ge(),i=ge();return this.we.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:ie()}}),new pl(this.Se,this.be,e,n,i)}xe(){this.De=!1,this.we=vv()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class L${constructor(e){this.qe=e,this.Qe=new Map,this.Ke=xi(),this.$e=yv(),this.Ue=new Ye(Re)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const i=this.He(n);switch(e.state){case 0:this.Je(n)&&i.Fe(e.resumeToken);break;case 1:i.Le(),i.ve||i.xe(),i.Fe(e.resumeToken);break;case 2:i.Le(),i.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(i.ke(),i.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),i.Fe(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((i,r)=>{this.Je(r)&&n(r)})}Ze(e){var n,i;const r=e.targetId,s=e.pe.count,o=this.Xe(r);if(o){const a=o.target;if(kf(a))if(s===0){const l=new ne(a.path);this.ze(r,l,gt.newNoDocument(l,re.min()))}else Oe(s===1);else{const l=this.et(r);if(l!==s){const c=this.tt(e,l);if(c.status!==0){this.Ye(r);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,u)}(n=Yg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,g){var y,v,b,I,R,E;const x={localCacheCount:f,existenceFilterCount:g.count},$=g.unchangedNames;return $&&(x.bloomFilter={applied:h===0,hashCount:(y=$==null?void 0:$.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(I=(b=(v=$==null?void 0:$.bits)===null||v===void 0?void 0:v.bitmap)===null||b===void 0?void 0:b.length)!==null&&I!==void 0?I:0,padding:(E=(R=$==null?void 0:$.bits)===null||R===void 0?void 0:R.padding)!==null&&E!==void 0?E:0},d&&(x.bloomFilter.mightContain=d)),x}(c.status,(i=c.nt)!==null&&i!==void 0?i:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:i,count:r}=e.pe;if(!i||!i.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=Br(s).toUint8Array()}catch(h){if(h instanceof pT)return Vs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Xg(l,o,a)}catch(h){return Vs(h instanceof Lo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:r===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const i=this.qe.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),r++)}),r}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&kf(a.target)){const l=new ne(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,gt.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let i=ge();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const r=new nh(e,n,this.Ue,this.Ke,i);return this.Ke=xi(),this.$e=yv(),this.Ue=new Ye(Re),r}Ge(e,n){if(!this.Je(e))return;const i=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,i),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,i){if(!this.Je(e))return;const r=this.He(e);this.ot(e,n)?r.Oe(n,1):r.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),i&&(this.Ke=this.Ke.insert(n,i))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new _v,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new zt(Re),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new _v),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function yv(){return new Ye(ne.comparator)}function vv(){return new Ye(ne.comparator)}const $$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),V$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),F$=(()=>({and:"AND",or:"OR"}))();class U${constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Df(t,e){return t.useProto3Json||dl(e)?e:{value:e}}function Wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function B$(t,e){return Wc(t,e.toTimestamp())}function mn(t){return Oe(!!t),re.fromTimestamp(function(n){const i=sr(n);return new ot(i.seconds,i.nanos)}(t))}function Jg(t,e){return function(i){return new Ke(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function zT(t){const e=Ke.fromString(t);return Oe(KT(e)),e}function Kc(t,e){return Jg(t.databaseId,e.path)}function Qo(t,e){const n=zT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(jT(n))}function Nf(t,e){return Jg(t.databaseId,e)}function z$(t){const e=zT(t);return e.length===4?Ke.emptyPath():jT(e)}function xa(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jT(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wv(t,e,n){return{name:Kc(t,e),fields:n.value.mapValue.fields}}function j$(t,e){return"found"in e?function(i,r){Oe(!!r.found),r.found.name,r.found.updateTime;const s=Qo(i,r.found.name),o=mn(r.found.updateTime),a=r.found.createTime?mn(r.found.createTime):re.min(),l=new Jt({mapValue:{fields:r.found.fields}});return gt.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(i,r){Oe(!!r.missing),Oe(!!r.readTime);const s=Qo(i,r.missing),o=mn(r.readTime);return gt.newNoDocument(s,o)}(t,e):ie()}function H$(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Oe(u===void 0||typeof u=="string"),Kt.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),Kt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?k.UNKNOWN:VT(c.code);return new W(u,c.message||"")}(o);n=new UT(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Qo(t,i.document.name),s=mn(i.document.updateTime),o=i.document.createTime?mn(i.document.createTime):re.min(),a=new Jt({mapValue:{fields:i.document.fields}}),l=gt.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new oc(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Qo(t,i.document),s=i.readTime?mn(i.readTime):re.min(),o=gt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Qo(t,i.document),s=i.removedTargetIds||[];n=new oc([],s,r,null)}else{if(!("filter"in e))return ie();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new N$(r,s),a=i.targetId;n=new FT(a,o)}}return n}function HT(t,e){let n;if(e instanceof fl)n={update:wv(t,e.key,e.value)};else if(e instanceof Gg)n={delete:Kc(t,e.key)};else if(e instanceof dr)n={update:wv(t,e.key,e.data),updateMask:Z$(e.fieldMask)};else{if(!(e instanceof LT))return ie();n={verify:Kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof qc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof js)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ie()}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:B$(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function q$(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(r,s){let o=r.updateTime?mn(r.updateTime):mn(s);return o.isEqual(re.min())&&(o=mn(s)),new S$(o,r.transformResults||[])}(n,e))):[]}function W$(t,e){return{documents:[Nf(t,e.path)]}}function K$(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Nf(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nf(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length!==0)return WT(li.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:us(h.field),direction:Y$(h.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Df(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function G$(t){let e=z$(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Oe(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=qT(h);return d instanceof li&&yT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Wo(hs(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,dl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Hc(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Hc(f,d)}(n.endAt)),p$(e,r,o,s,a,"F",l,c)}function Q$(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=hs(n.unaryFilter.field);return ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=hs(n.unaryFilter.field);return ct.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hs(n.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(hs(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return li.create(n.compositeFilter.filters.map(i=>qT(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function Y$(t){return $$[t]}function X$(t){return V$[t]}function J$(t){return F$[t]}function us(t){return{fieldPath:t.canonicalString()}}function hs(t){return Vt.fromServerFormat(t.fieldPath)}function WT(t){return t instanceof ct?function(n){if(n.op==="=="){if(ov(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NAN"}};if(sv(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ov(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NAN"}};if(sv(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(n.field),op:X$(n.op),value:n.value}}}(t):t instanceof li?function(n){const i=n.getFilters().map(r=>WT(r));return i.length===1?i[0]:{compositeFilter:{op:J$(n.op),filters:i}}}(t):ie()}function Z$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wi{constructor(e,n,i,r,s=re.min(),o=re.min(),a=Kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eV{constructor(e){this.ct=e}}function tV(t){const e=G$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pf(e,e.limit,"L"):e}/**
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
 */class nV{constructor(){this.sn=new iV}addToCollectionParentIndex(e,n){return this.sn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(rr.min())}updateCollectionGroup(e,n,i){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class iV{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new zt(Ke.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new zt(Ke.comparator)).toArray()}}/**
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
 */class Hs{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Hs(0)}static On(){return new Hs(-1)}}/**
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
 */class rV{constructor(){this.changes=new ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?O.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class oV{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Go(i.mutation,r,pn.empty(),ot.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ge()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ge()){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Mo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ge()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=xi();const o=Ko(),a=function(){return Ko()}();return n.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof dr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Go(u.mutation,c,u.mutation.getFieldMask(),ot.now())):o.set(c.key,pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new sV(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ko();let r=new Ye((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||pn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(r.get(a.batchId)||ge()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=CT();u.forEach(d=>{if(!s.has(d)){const f=OT(n.get(d),i.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return ne.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):O.resolve(Cr());let a=-1,l=s;return o.next(c=>O.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?O.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ge())).next(u=>({batchId:a,changes:AT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(i=>{let r=Mo();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Mo();return this.indexManager.getCollectionParents(e,r).next(o=>O.forEach(o,a=>{const l=function(u,h){return new Yu(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,gt.newInvalidDocument(c)))});let o=Mo();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Go(c.mutation,l,pn.empty(),ot.now()),Zu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class aV{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return O.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(r){return{id:r.id,version:r.version,createTime:mn(r.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(r){return{name:r.name,query:tV(r.bundledQuery),readTime:mn(r.readTime)}}(n)),O.resolve()}}/**
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
 */class lV{constructor(){this.overlays=new Ye(ne.comparator),this.cr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Cr();return O.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.cr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(i)),O.resolve()}getOverlaysForCollection(e,n,i){const r=Cr(),s=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return O.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new Ye((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=s.get(c.largestBatchId);u===null&&(u=Cr(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Cr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return O.resolve(a)}ht(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.cr.get(r.largestBatchId).delete(i.key);this.cr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new D$(n,i));let s=this.cr.get(n);s===void 0&&(s=ge(),this.cr.set(n,s)),this.cr.set(n,s.add(i.key))}}/**
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
 */class Zg{constructor(){this.lr=new zt(pt.hr),this.Pr=new zt(pt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const i=new pt(e,n);this.lr=this.lr.add(i),this.Pr=this.Pr.add(i)}Tr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Er(new pt(e,n))}dr(e,n){e.forEach(i=>this.removeReference(i,n))}Ar(e){const n=new ne(new Ke([])),i=new pt(n,e),r=new pt(n,e+1),s=[];return this.Pr.forEachInRange([i,r],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new ne(new Ke([])),i=new pt(n,e),r=new pt(n,e+1);let s=ge();return this.Pr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new pt(e,0),i=this.lr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class pt{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return ne.comparator(e.key,n.key)||Re(e.mr,n.mr)}static Ir(e,n){return Re(e.mr,n.mr)||ne.comparator(e.key,n.key)}}/**
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
 */class cV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new zt(pt.hr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new x$(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.pr=this.pr.add(new pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.wr(i),s=r<0?0:r;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new pt(n,0),r=new pt(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([i,r],o=>{const a=this.yr(o.mr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new zt(Re);return n.forEach(r=>{const s=new pt(r,0),o=new pt(r,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{i=i.add(a.mr)})}),O.resolve(this.Sr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;ne.isDocumentKey(s)||(s=s.child(""));const o=new pt(new ne(s),0);let a=new zt(Re);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.mr)),!0)},o),O.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(i=>{const r=this.yr(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Oe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.pr;return O.forEach(n.mutations,r=>{const s=new pt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.pr=i})}Cn(e){}containsKey(e,n){const i=new pt(n,0),r=this.pr.firstAfterOrEqual(i);return O.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class uV{constructor(e){this.Dr=e,this.docs=function(){return new Ye(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Dr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return O.resolve(i?i.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let i=xi();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():gt.newInvalidDocument(r))}),O.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=xi();const o=n.path,a=new ne(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||XL(YL(u),i)<=0||(r.has(u.key)||Zu(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,i,r){ie()}vr(e,n){return O.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new hV(this)}getSize(e){return O.resolve(this.size)}}class hV extends rV{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.sr.addEntry(e,r)):this.sr.removeEntry(i)}),O.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class dV{constructor(e){this.persistence=e,this.Cr=new ho(n=>qg(n),Wg),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Zg,this.targetCount=0,this.Or=Hs.xn()}forEachTarget(e,n){return this.Cr.forEach((i,r)=>n(r)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Fr&&(this.Fr=n),O.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Ln(n),O.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),O.waitFor(s).next(()=>r)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const i=this.Cr.get(n)||null;return O.resolve(i)}addMatchingKeys(e,n,i){return this.Mr.Tr(n,i),O.resolve()}removeMatchingKeys(e,n,i){this.Mr.dr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),O.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Mr.Vr(n);return O.resolve(i)}containsKey(e,n){return O.resolve(this.Mr.containsKey(n))}}/**
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
 */class fV{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Bg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new dV(this),this.indexManager=new nV,this.remoteDocumentCache=function(r){return new uV(r)}(i=>this.referenceDelegate.qr(i)),this.serializer=new eV(n),this.Qr=new aV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Nr[e.toKey()];return i||(i=new cV(n,this.referenceDelegate),this.Nr[e.toKey()]=i),i}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,i){G("MemoryPersistence","Starting transaction:",e);const r=new pV(this.Br.next());return this.referenceDelegate.Kr(),i(r).next(s=>this.referenceDelegate.$r(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ur(e,n){return O.or(Object.values(this.Nr).map(i=>()=>i.containsKey(e,n)))}}class pV extends ZL{constructor(e){super(),this.currentSequenceNumber=e}}class em{constructor(e){this.persistence=e,this.Wr=new Zg,this.Gr=null}static zr(e){return new em(e)}get jr(){if(this.Gr)return this.Gr;throw ie()}addReference(e,n,i){return this.Wr.addReference(i,n),this.jr.delete(i.toString()),O.resolve()}removeReference(e,n,i){return this.Wr.removeReference(i,n),this.jr.add(i.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(r=>this.jr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.jr.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.jr,i=>{const r=ne.fromPath(i);return this.Hr(e,r).next(s=>{s||n.removeEntry(r,re.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(i=>{i?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return O.or([()=>O.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class tm{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Li=i,this.ki=r}static qi(e,n){let i=ge(),r=ge();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new tm(e,n.fromCache,i,r)}}/**
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
 */class gV{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,i,r){return this.$i(e,n).next(s=>s||this.Ui(e,n,r,i)).next(s=>s||this.Wi(e,n))}$i(e,n){if(uv(n))return O.resolve(null);let i=Pi(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Pf(n,null,"F"),i=Pi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=ge(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,Pf(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,i,r){return uv(n)||r.isEqual(re.min())?this.Wi(e,n):this.Ki.getDocuments(e,i).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,i,r)?this.Wi(e,n):(tv()<=Ee.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xf(n)),this.ji(e,o,n,QL(r,-1)))})}Gi(e,n){let i=new zt(IT(e));return n.forEach((r,s)=>{Zu(e,s)&&(i=i.add(s))}),i}zi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Wi(e,n){return tv()<=Ee.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",xf(n)),this.Ki.getDocumentsMatchingQuery(e,n,rr.min())}ji(e,n,i,r){return this.Ki.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class mV{constructor(e,n,i,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Ye(Re),this.Yi=new ho(s=>qg(s),Wg),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(i)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function _V(t,e,n,i){return new mV(t,e,n,i)}async function GT(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.es(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=ge();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function yV(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=O.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(y=>{const v=c.docVersions.get(g);Oe(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function QT(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function vV(t,e){const n=he(t),i=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Kt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),r=r.insert(h,f),function(y,v,b){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(s,f))});let l=xi(),c=ge();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(wV(s,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!i.isEqual(re.min())){const u=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Ji=r,s))}function wV(t,e,n){let i=ge(),r=ge();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=xi();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:r}})}function bV(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function EV(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.kr.getTargetData(i,e).next(s=>s?(r=s,O.resolve(r)):n.kr.allocateTargetId(i).next(o=>(r=new Wi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.kr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Ji.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function Of(t,e,n){const i=he(t),r=i.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!hl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(r.target)}function bv(t,e,n){const i=he(t);let r=re.min(),s=ge();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=he(l),d=h.Yi.get(u);return d!==void 0?O.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(i,o,Pi(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?r:re.min(),n?s:ge())).next(a=>(IV(i,y$(e),a),{documents:a,ss:s})))}function IV(t,e,n){let i=t.Zi.get(e)||re.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Zi.set(e,i)}class Ev{constructor(){this.activeTargetIds=T$()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TV{constructor(){this.Hs=new Ev,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,i){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Ev,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class AV{Ys(e){}shutdown(){}}/**
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
 */class Iv{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wl=null;function td(){return Wl===null?Wl=function(){return 268435456+Math.round(2147483648*Math.random())}():Wl++,"0x"+Wl.toString(16)}/**
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
 */const CV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class RV{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const Pt="WebChannelConnection";class SV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=i+"://"+n.host,this.Eo=`projects/${r}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Ro(){return!1}Vo(n,i,r,s,o){const a=td(),l=this.mo(n,i);G("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,s,o),this.po(n,l,c,r).then(u=>(G("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Vs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}yo(n,i,r,s,o,a){return this.Vo(n,i,r,s,o)}fo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+uo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}mo(n,i){const r=CV[n];return`${this.To}/v1/${i}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,i,r){const s=td();return new Promise((o,a)=>{const l=new VL;l.setWithCredentials(!0),l.listenOnce(ML.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ed.NO_ERROR:const u=l.getResponseJson();G(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ed.TIMEOUT:G(Pt,`RPC '${e}' ${s} timed out`),a(new W(k.DEADLINE_EXCEEDED,"Request time out"));break;case ed.HTTP_ERROR:const h=l.getStatus();if(G(Pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(b)>=0?b:k.UNKNOWN}(f.status);a(new W(g,f.message))}else a(new W(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(k.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{G(Pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);G(Pt,`RPC '${e}' ${s} sending request:`,r),l.send(n,"POST",c,i,15)})}wo(e,n,i){const r=td(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NL(),a=OL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new $L({})),this.fo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=s.join("");G(Pt,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new RV({so:v=>{f?G(Pt,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(d||(G(Pt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),G(Pt,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,b,I)=>{v.listen(b,R=>{try{I(R)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,zl.EventType.OPEN,()=>{f||G(Pt,`RPC '${e}' stream ${r} transport opened.`)}),y(h,zl.EventType.CLOSE,()=>{f||(f=!0,G(Pt,`RPC '${e}' stream ${r} transport closed`),g.Po())}),y(h,zl.EventType.ERROR,v=>{f||(f=!0,Vs(Pt,`RPC '${e}' stream ${r} transport errored:`,v),g.Po(new W(k.UNAVAILABLE,"The operation could not be completed")))}),y(h,zl.EventType.MESSAGE,v=>{var b;if(!f){const I=v.data[0];Oe(!!I);const R=I,E=R.error||((b=R[0])===null||b===void 0?void 0:b.error);if(E){G(Pt,`RPC '${e}' stream ${r} received error:`,E);const x=E.status;let $=function(le){const Ae=it[le];if(Ae!==void 0)return VT(Ae)}(x),J=E.message;$===void 0&&($=k.INTERNAL,J="Unknown error status: "+x+" with message "+E.message),f=!0,g.Po(new W($,J)),h.close()}else G(Pt,`RPC '${e}' stream ${r} received:`,I),g.Io(I)}}),y(a,LL.STAT_EVENT,v=>{v.stat===Zy.PROXY?G(Pt,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Zy.NOPROXY&&G(Pt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}function nd(){return typeof document<"u"?document:null}/**
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
 */function ih(t){return new U$(t,!0)}/**
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
 */class nm{constructor(e,n,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=i,this.bo=r,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),r=Math.max(0,n-i);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class YT{constructor(e,n,i,r,s,o,a,l){this.ii=e,this.Bo=i,this.Lo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new nm(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(ki(n.toString()),ki("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.ko===n&&this.e_(i,r)},i=>{e(()=>{const r=new W(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.t_(r)})})}e_(e,n){const i=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{i(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(r=>{i(()=>this.t_(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kV extends YT{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=H$(this.serializer,e),i=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?mn(o.readTime):re.min()}(e);return this.listener.r_(n,i)}i_(e){const n={};n.database=xa(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=kf(l)?{documents:W$(s,l)}:{query:K$(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=BT(s,o.resumeToken);const c=Df(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=Wc(s,o.snapshotVersion.toTimestamp());const c=Df(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=Q$(this.serializer,e);i&&(n.labels=i),this.Ho(n)}s_(e){const n={};n.database=xa(this.serializer),n.removeTarget=e,this.Ho(n)}}class PV extends YT{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=q$(e.writeResults,e.commitTime),i=mn(e.commitTime);return this.listener.u_(i,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=xa(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>HT(this.serializer,i))};this.Ho(n)}}/**
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
 */class xV extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Vo(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(k.UNKNOWN,r.toString())})}yo(e,n,i,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(k.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class DV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ki(n),this.d_=!1):G("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class NV{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{i.enqueueAndForget(async()=>{ns(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=he(l);c.y_.add(4),await gl(c),c.b_.set("Unknown"),c.y_.delete(4),await rh(c)}(this))})}),this.b_=new DV(i,r)}}async function rh(t){if(ns(t))for(const e of t.w_)await e(!0)}async function gl(t){for(const e of t.w_)await e(!1)}function XT(t,e){const n=he(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),sm(n)?rm(n):fo(n).Uo()&&im(n,e))}function JT(t,e){const n=he(t),i=fo(n);n.p_.delete(e),i.Uo()&&ZT(n,e),n.p_.size===0&&(i.Uo()?i.zo():ns(n)&&n.b_.set("Unknown"))}function im(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fo(t).i_(e)}function ZT(t,e){t.D_.Be(e),fo(t).s_(e)}function rm(t){t.D_=new L$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),fo(t).start(),t.b_.A_()}function sm(t){return ns(t)&&!fo(t).$o()&&t.p_.size>0}function ns(t){return he(t).y_.size===0}function eA(t){t.D_=void 0}async function OV(t){t.p_.forEach((e,n)=>{im(t,e)})}async function MV(t,e){eA(t),sm(t)?(t.b_.m_(e),rm(t)):t.b_.set("Unknown")}async function LV(t,e,n){if(t.b_.set("Online"),e instanceof UT&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.p_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.p_.delete(a),r.D_.removeTarget(a))}(t,e)}catch(i){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Gc(t,i)}else if(e instanceof oc?t.D_.We(e):e instanceof FT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(re.min()))try{const i=await QT(t.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.p_.get(c);u&&s.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.p_.get(l);if(!u)return;s.p_.set(l,u.withResumeToken(Kt.EMPTY_BYTE_STRING,u.snapshotVersion)),ZT(s,l);const h=new Wi(u.target,l,c,u.sequenceNumber);im(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){G("RemoteStore","Failed to raise snapshot:",i),await Gc(t,i)}}async function Gc(t,e,n){if(!hl(e))throw e;t.y_.add(1),await gl(t),t.b_.set("Offline"),n||(n=()=>QT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await rh(t)})}function tA(t,e){return e().catch(n=>Gc(t,n,e))}async function sh(t){const e=he(t),n=or(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;$V(e);)try{const r=await bV(e.localStore,i);if(r===null){e.g_.length===0&&n.zo();break}i=r.batchId,VV(e,r)}catch(r){await Gc(e,r)}nA(e)&&iA(e)}function $V(t){return ns(t)&&t.g_.length<10}function VV(t,e){t.g_.push(e);const n=or(t);n.Uo()&&n.__&&n.a_(e.mutations)}function nA(t){return ns(t)&&!or(t).$o()&&t.g_.length>0}function iA(t){or(t).start()}async function FV(t){or(t).l_()}async function UV(t){const e=or(t);for(const n of t.g_)e.a_(n.mutations)}async function BV(t,e,n){const i=t.g_.shift(),r=Qg.from(i,e,n);await tA(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await sh(t)}async function zV(t,e){e&&or(t).__&&await async function(i,r){if(function(o){return $T(o)&&o!==k.ABORTED}(r.code)){const s=i.g_.shift();or(i).Go(),await tA(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await sh(i)}}(t,e),nA(t)&&iA(t)}async function Tv(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const i=ns(n);n.y_.add(3),await gl(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await rh(n)}async function jV(t,e){const n=he(t);e?(n.y_.delete(2),await rh(n)):e||(n.y_.add(2),await gl(n),n.b_.set("Unknown"))}function fo(t){return t.v_||(t.v_=function(n,i,r){const s=he(n);return s.P_(),new kV(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{_o:OV.bind(null,t),uo:MV.bind(null,t),r_:LV.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),sm(t)?rm(t):t.b_.set("Unknown")):(await t.v_.stop(),eA(t))})),t.v_}function or(t){return t.C_||(t.C_=function(n,i,r){const s=he(n);return s.P_(),new PV(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{_o:FV.bind(null,t),uo:zV.bind(null,t),c_:UV.bind(null,t),u_:BV.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await sh(t)):(await t.C_.stop(),t.g_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class om{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new om(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function am(t,e){if(ki("AsyncQueue",`${e}: ${t}`),hl(t))return new W(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ks{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ne.comparator(n.key,i.key):(n,i)=>ne.comparator(n.key,i.key),this.keyedMap=Mo(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new ks(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new ks;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class Av{constructor(){this.F_=new Ye(ne.comparator)}track(e){const n=e.doc.key,i=this.F_.get(n);i?e.type!==0&&i.type===3?this.F_=this.F_.insert(n,e):e.type===3&&i.type!==1?this.F_=this.F_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.F_=this.F_.remove(n):e.type===1&&i.type===2?this.F_=this.F_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):ie():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,i)=>{e.push(i)}),e}}class qs{constructor(e,n,i,r,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qs(e,n,ks.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class HV{constructor(){this.x_=void 0,this.listeners=[]}}class qV{constructor(){this.queries=new ho(e=>ET(e),Ju),this.onlineState="Unknown",this.O_=new Set}}async function lm(t,e){const n=he(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new HV),r)try{s.x_=await n.onListen(i)}catch(o){const a=am(o,`Initialization of query '${xf(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&um(n)}async function cm(t,e){const n=he(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function WV(t,e){const n=he(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(r)&&(i=!0);o.x_=r}}i&&um(n)}function KV(t,e,n){const i=he(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function um(t){t.O_.forEach(e=>{e.next()})}class hm{constructor(e,n,i){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=i||{}}B_(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new qs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.W_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class rA{constructor(e){this.key=e}}class sA{constructor(e){this.key=e}}class GV{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ge(),this.mutatedKeys=ge(),this.na=IT(e),this.ra=new ks(this.na)}get ia(){return this.X_}sa(e,n){const i=n?n.oa:new Av,r=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=Zu(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(i.track({type:3,doc:f}),v=!0):this._a(d,f)||(i.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),v=!0):d&&!f&&(i.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{ra:o,oa:i,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((c,u)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return g(d)-g(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(i);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new qs(this.query,e.ra,r,s,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Av,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ge(),this.ra.forEach(i=>{this.la(i.key)&&(this.ta=this.ta.add(i.key))});const n=[];return e.forEach(i=>{this.ta.has(i)||n.push(new sA(i))}),this.ta.forEach(i=>{e.has(i)||n.push(new rA(i))}),n}ha(e){this.X_=e.ss,this.ta=ge();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return qs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class QV{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class YV{constructor(e){this.key=e,this.Ia=!1}}class XV{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ho(a=>ET(a),Ju),this.da=new Map,this.Aa=new Set,this.Ra=new Ye(ne.comparator),this.Va=new Map,this.ma=new Zg,this.fa={},this.ga=new Map,this.pa=Hs.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function JV(t,e){const n=lF(t);let i,r;const s=n.Ea.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Pa();else{const o=await EV(n.localStore,Pi(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await ZV(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&XT(n.remoteStore,o)}return r}async function ZV(t,e,n,i,r){t.wa=(h,d,f)=>async function(y,v,b,I){let R=v.view.sa(b);R.zi&&(R=await bv(y.localStore,v.query,!1).then(({documents:$})=>v.view.sa($,R)));const E=I&&I.targetChanges.get(v.targetId),x=v.view.applyChanges(R,y.isPrimaryClient,E);return Rv(y,v.targetId,x.ca),x.snapshot}(t,h,d,f);const s=await bv(t.localStore,e,!0),o=new GV(e,s.ss),a=o.sa(s.documents),l=pl.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Rv(t,n,c.ca);const u=new QV(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function eF(t,e){const n=he(t),i=n.Ea.get(e),r=n.da.get(i.targetId);if(r.length>1)return n.da.set(i.targetId,r.filter(s=>!Ju(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Of(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),JT(n.remoteStore,i.targetId),Mf(n,i.targetId)}).catch(ul)):(Mf(n,i.targetId),await Of(n.localStore,i.targetId,!0))}async function tF(t,e,n){const i=cF(t);try{const r=await function(o,a){const l=he(o),c=ot.now(),u=a.reduce((f,g)=>f.add(g.key),ge());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=xi(),y=ge();return l.Xi.getEntries(f,u).next(v=>{g=v,g.forEach((b,I)=>{I.isValidDocument()||(y=y.add(b))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const b=[];for(const I of a){const R=P$(I,h.get(I.key).overlayedDocument);R!=null&&b.push(new dr(I.key,R,gT(R.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,b,a)}).next(v=>{d=v;const b=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,b)})}).then(()=>({batchId:d.batchId,changes:AT(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Ye(Re)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(i,r.batchId,n),await ml(i,r.changes),await sh(i.remoteStore)}catch(r){const s=am(r,"Failed to persist write");n.reject(s)}}async function oA(t,e){const n=he(t);try{const i=await vV(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Va.get(s);o&&(Oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ia=!0:r.modifiedDocuments.size>0?Oe(o.Ia):r.removedDocuments.size>0&&(Oe(o.Ia),o.Ia=!1))}),await ml(n,i,e)}catch(i){await ul(i)}}function Cv(t,e,n){const i=he(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=he(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&um(l)}(i.eventManager,e),r.length&&i.Ta.r_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nF(t,e,n){const i=he(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Va.get(e),s=r&&r.key;if(s){let o=new Ye(ne.comparator);o=o.insert(s,gt.newNoDocument(s,re.min()));const a=ge().add(s),l=new nh(re.min(),new Map,new Ye(Re),o,a);await oA(i,l),i.Ra=i.Ra.remove(s),i.Va.delete(e),dm(i)}else await Of(i.localStore,e,!1).then(()=>Mf(i,e,n)).catch(ul)}async function iF(t,e){const n=he(t),i=e.batch.batchId;try{const r=await yV(n.localStore,e);lA(n,i,null),aA(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ml(n,r)}catch(r){await ul(r)}}async function rF(t,e,n){const i=he(t);try{const r=await function(o,a){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Oe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,e);lA(i,e,n),aA(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ml(i,r)}catch(r){await ul(r)}}function aA(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function lA(t,e,n){const i=he(t);let r=i.fa[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.fa[i.currentUser.toKey()]=r}}function Mf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.da.get(e))t.Ea.delete(i),n&&t.Ta.Sa(i,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(i=>{t.ma.containsKey(i)||cA(t,i)})}function cA(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(JT(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),dm(t))}function Rv(t,e,n){for(const i of n)i instanceof rA?(t.ma.addReference(i.key,e),sF(t,i)):i instanceof sA?(G("SyncEngine","Document no longer in limbo: "+i.key),t.ma.removeReference(i.key,e),t.ma.containsKey(i.key)||cA(t,i.key)):ie()}function sF(t,e){const n=e.key,i=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(i)||(G("SyncEngine","New document in limbo: "+n),t.Aa.add(i),dm(t))}function dm(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new ne(Ke.fromString(e)),i=t.pa.next();t.Va.set(i,new YV(n)),t.Ra=t.Ra.insert(n,i),XT(t.remoteStore,new Wi(Pi(Xu(n.path)),i,"TargetPurposeLimboResolution",Bg.ae))}}async function ml(t,e,n){const i=he(t),r=[],s=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach((a,l)=>{o.push(i.wa(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=tm.qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.Ta.r_(r),await async function(l,c){const u=he(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,d=>O.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>O.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!hl(h))throw h;G("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(d,y)}}}(i.localStore,s))}async function oF(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const i=await GT(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new W(k.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ml(n,i.ts)}}function aF(t,e){const n=he(t),i=n.Va.get(e);if(i&&i.Ia)return ge().add(i.key);{let r=ge();const s=n.da.get(e);if(!s)return r;for(const o of s){const a=n.Ea.get(o);r=r.unionWith(a.view.ia)}return r}}function lF(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nF.bind(null,e),e.Ta.r_=WV.bind(null,e.eventManager),e.Ta.Sa=KV.bind(null,e.eventManager),e}function cF(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rF.bind(null,e),e}class Sv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ih(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _V(this.persistence,new gV,e.initialUser,this.serializer)}createPersistence(e){return new fV(em.zr,this.serializer)}createSharedClientState(e){return new TV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Cv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=oF.bind(null,this.syncEngine),await jV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qV}()}createDatastore(e){const n=ih(e.databaseInfo.databaseId),i=function(s){return new SV(s)}(e.databaseInfo);return function(s,o,a,l){return new xV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,r,s,o,a){return new NV(i,r,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Cv(this.syncEngine,n,0),function(){return Iv.v()?new Iv:new AV}())}createSyncEngine(e,n){return function(r,s,o,a,l,c,u){const h=new XV(r,s,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=he(n);G("RemoteStore","RemoteStore shutting down."),i.y_.add(5),await gl(i),i.S_.shutdown(),i.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class fm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ki("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class hF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new W(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,s){const o=he(r),a=xa(o.serializer)+"/documents",l={documents:s.map(d=>Kc(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,s.length),u=new Map;c.forEach(d=>{const f=j$(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=u.get(d.toString());Oe(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Gg(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=ne.fromPath(i);this.mutations.push(new LT(r,this.precondition(r)))}),await async function(i,r){const s=he(i),o=xa(s.serializer)+"/documents",a={writes:r.map(l=>HT(s.serializer,l))};await s.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ie();n=re.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new W(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(re.min())?Zt.exists(!1):Zt.updateTime(n):Zt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(re.min()))throw new W(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Zt.updateTime(n)}return Zt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class dF{constructor(e,n,i,r,s){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=s,this.qa=i.maxAttempts,this.Ko=new nm(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new hF(this.datastore),n=this.Ka(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.$a(r)}))}).catch(i=>{this.$a(i)})})}Ka(e){try{const n=this.updateFunction(e);return!dl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!$T(n)}return!1}}/**
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
 */class fF{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Dt.UNAUTHENTICATED,this.clientId=dT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=am(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function id(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await GT(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gF(t);G("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Tv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Tv(e.remoteStore,s)),t._onlineComponents=e}function pF(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function gF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await id(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!pF(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await id(t,new Sv)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await id(t,new Sv);return t._offlineComponents}async function pm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await kv(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await kv(t,new uF))),t._onlineComponents}function mF(t){return pm(t).then(e=>e.syncEngine)}function _F(t){return pm(t).then(e=>e.datastore)}async function Qc(t){const e=await pm(t),n=e.eventManager;return n.onListen=JV.bind(null,e.syncEngine),n.onUnlisten=eF.bind(null,e.syncEngine),n}function yF(t,e,n={}){const i=new ii;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new fm({next:d=>{o.enqueueAndForget(()=>cm(s,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new W(k.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new W(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new hm(Xu(a.path),u,{includeMetadataChanges:!0,W_:!0});return lm(s,h)}(await Qc(t),t.asyncQueue,e,n,i)),i.promise}function vF(t,e,n={}){const i=new ii;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new fm({next:d=>{o.enqueueAndForget(()=>cm(s,h)),d.fromCache&&l.source==="server"?c.reject(new W(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new hm(a,u,{includeMetadataChanges:!0,W_:!0});return lm(s,h)}(await Qc(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function uA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Pv=new Map;/**
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
 */function hA(t,e,n){if(!n)throw new W(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wF(t,e,n,i){if(e===!0&&i===!0)throw new W(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xv(t){if(!ne.isDocumentKey(t))throw new W(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dv(t){if(ne.isDocumentKey(t))throw new W(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gm(t);throw new W(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Nv{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new W(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uA((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oh{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new UL;switch(i.type){case"firstParty":return new HL(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new W(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Pv.get(n);i&&(G("ComponentProvider","Removing Datastore"),Pv.delete(n),i.terminate())}(this),Promise.resolve()}}function bF(t,e,n,i={}){var r;const s=(t=_n(t,oh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Dt.MOCK_USER;else{a=zk(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new W(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Dt(c)}t._authCredentials=new BL(new hT(a,l))}}/**
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
 */class _l{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new _l(this.firestore,e,this._query)}}class jt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class Zi extends _l{constructor(e,n,i){super(e,n,Xu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new ne(e))}withConverter(e){return new Zi(this.firestore,e,this._path)}}function dA(t,e,...n){if(t=Qe(t),hA("collection","path",e),t instanceof oh){const i=Ke.fromString(e,...n);return Dv(i),new Zi(t,null,i)}{if(!(t instanceof jt||t instanceof Zi))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ke.fromString(e,...n));return Dv(i),new Zi(t.firestore,null,i)}}function Pn(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=dT.V()),hA("doc","path",e),t instanceof oh){const i=Ke.fromString(e,...n);return xv(i),new jt(t,null,new ne(i))}{if(!(t instanceof jt||t instanceof Zi))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ke.fromString(e,...n));return xv(i),new jt(t.firestore,t instanceof Zi?t.converter:null,new ne(i))}}/**
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
 */class EF{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new nm(this,"async_queue_retry"),this.Xa=()=>{const n=nd();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=nd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new ii;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!hl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw ki("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ja=!1,i))));return this.Wa=n,n}enqueueAfterDelay(e,n,i){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const r=om.createAndSchedule(this,e,n,i,s=>this.ru(s));return this.ja.push(r),r}eu(){this.Ha&&ie()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Ov(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ar extends oh{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new EF}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fA(this),this._firestoreClient.terminate()}}function IF(t,e){const n=typeof t=="object"?t:Ha(),i=typeof t=="string"?t:e||"(default)",r=lr(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Bk("firestore");s&&bF(r,...s)}return r}function yl(t){return t._firestoreClient||fA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fA(t){var e,n,i;const r=t._freezeSettings(),s=function(a,l,c,u){return new n$(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,uA(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new fF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jr(Kt.fromBase64String(e))}catch(n){throw new W(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jr(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class po{constructor(e){this._methodName=e}}/**
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
 */class ah{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */const TF=/^__.*__$/;class AF{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fl(e,this.data,n,this.fieldTransforms)}}class pA{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class lh{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.cu({path:i,hu:!1});return r.Pu(e),r}Iu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.cu({path:i,hu:!1});return r.au(),r}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Yc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(gA(this.uu)&&TF.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class CF{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||ih(e)}Ru(e,n,i,r=!1){return new lh({uu:e,methodName:n,Au:i,path:Vt.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mm(t){const e=t._freezeSettings(),n=ih(t._databaseId);return new CF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mA(t,e,n,i,r,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,r);_m("Data must be an object, but it was:",o,i);const a=wA(i,o);let l,c;if(s.merge)l=new pn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Lf(e,h,n);if(!o.contains(d))throw new W(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);EA(u,d)||u.push(d)}l=new pn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new AF(new Jt(a),l,c)}class ch extends po{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}function _A(t,e,n){return new lh({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class RF extends po{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=_A(this,e,!0),i=this.Vu.map(s=>go(s,n)),r=new zs(i);return new Kg(e.path,r)}isEqual(e){return this===e}}class SF extends po{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=_A(this,e,!0),i=this.Vu.map(s=>go(s,n)),r=new js(i);return new Kg(e.path,r)}isEqual(e){return this===e}}class kF extends po{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new Pa(e.serializer,kT(e.serializer,this.mu));return new Kg(e.path,n)}isEqual(e){return this===e}}function yA(t,e,n,i){const r=t.Ru(1,e,n);_m("Data must be an object, but it was:",r,i);const s=[],o=Jt.empty();ts(i,(l,c)=>{const u=ym(e,l,n);c=Qe(c);const h=r.Iu(u);if(c instanceof ch)s.push(u);else{const d=go(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new pn(s);return new pA(o,a,r.fieldTransforms)}function vA(t,e,n,i,r,s){const o=t.Ru(1,e,n),a=[Lf(e,i,n)],l=[r];if(s.length%2!=0)throw new W(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Lf(e,s[d])),l.push(s[d+1]);const c=[],u=Jt.empty();for(let d=a.length-1;d>=0;--d)if(!EA(c,a[d])){const f=a[d];let g=l[d];g=Qe(g);const y=o.Iu(f);if(g instanceof ch)c.push(f);else{const v=go(g,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new pn(c);return new pA(u,h,o.fieldTransforms)}function go(t,e){if(bA(t=Qe(t)))return _m("Unsupported field value:",e,t),wA(t,e);if(t instanceof po)return function(i,r){if(!gA(r.uu))throw r.Eu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Eu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=go(a,r.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(i,r){if((i=Qe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return kT(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=ot.fromDate(i);return{timestampValue:Wc(r.serializer,s)}}if(i instanceof ot){const s=new ot(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Wc(r.serializer,s)}}if(i instanceof ah)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof jr)return{bytesValue:BT(r.serializer,i._byteString)};if(i instanceof jt){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jg(i.firestore._databaseId||r.databaseId,i._key.path)}}throw r.Eu(`Unsupported field value: ${gm(i)}`)}(t,e)}function wA(t,e){const n={};return fT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(i,r)=>{const s=go(r,e.lu(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function bA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof ah||t instanceof jr||t instanceof jt||t instanceof po)}function _m(t,e,n){if(!bA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=gm(n);throw i==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}}function Lf(t,e,n){if((e=Qe(e))instanceof vl)return e._internalPath;if(typeof e=="string")return ym(t,e);throw Yc("Field path arguments must be of type string or ",t,!1,void 0,n)}const PF=new RegExp("[~\\*/\\[\\]]");function ym(t,e,n){if(e.search(PF)>=0)throw Yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch{throw Yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yc(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new W(k.INVALID_ARGUMENT,a+t+l)}function EA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Xc{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(IA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xF extends Xc{data(){return super.data()}}function IA(t,e){return typeof e=="string"?ym(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
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
 */function TA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class AA{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ts(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new ah(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=jg(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=sr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ke.fromString(e);Oe(KT(i));const r=new Sa(i.get(1),i.get(3)),s=new ne(i.popFirst(5));return r.isEqual(n)||ki(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function CA(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class DF extends AA{constructor(e){super(),this.firestore=e}convertBytes(e){return new jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}/**
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
 */class ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vm extends Xc{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(IA("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ac extends vm{data(e={}){return super.data(e)}}class RA{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ys(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ac(this._firestore,this._userDataWriter,i.key,i,new ys(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new ac(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ys(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ac(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ys(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:NF(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function uh(t){t=_n(t,jt);const e=_n(t.firestore,ar);return yF(yl(e),t._key).then(n=>PA(e,t,n))}class hh extends AA{constructor(e){super(),this.firestore=e}convertBytes(e){return new jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function OF(t){t=_n(t,_l);const e=_n(t.firestore,ar),n=yl(e),i=new hh(e);return TA(t._query),vF(n,t._query).then(r=>new RA(e,i,t,r))}function Mv(t,e,n){t=_n(t,jt);const i=_n(t.firestore,ar),r=CA(t.converter,e,n);return kA(i,[mA(mm(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Zt.none())])}function SA(t,e,n,...i){t=_n(t,jt);const r=_n(t.firestore,ar),s=mm(r);let o;return o=typeof(e=Qe(e))=="string"||e instanceof vl?vA(s,"updateDoc",t._key,e,n,i):yA(s,"updateDoc",t._key,e),kA(r,[o.toMutation(t._key,Zt.exists(!0))])}function wm(t,...e){var n,i,r;t=Qe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ov(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ov(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof jt)c=_n(t.firestore,ar),u=Xu(t._key.path),l={next:h=>{e[o]&&e[o](PA(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_n(t,_l);c=_n(h.firestore,ar),u=h._query;const d=new hh(c);l={next:f=>{e[o]&&e[o](new RA(c,d,h,f))},error:e[o+1],complete:e[o+2]},TA(t._query)}return function(d,f,g,y){const v=new fm(y),b=new hm(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>lm(await Qc(d),b)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>cm(await Qc(d),b))}}(yl(c),u,a,l)}function kA(t,e){return function(i,r){const s=new ii;return i.asyncQueue.enqueueAndForget(async()=>tF(await mF(i),r,s)),s.promise}(yl(t),e)}function PA(t,e,n){const i=n.docs.get(e._key),r=new hh(t);return new vm(t,r,e._key,i,new ys(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const MF={maxAttempts:5};function Co(t,e){if((t=Qe(t)).firestore!==e)throw new W(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class LF extends class{constructor(n,i){this._firestore=n,this._transaction=i,this._dataReader=mm(n)}get(n){const i=Co(n,this._firestore),r=new DF(this._firestore);return this._transaction.lookup([i._key]).then(s=>{if(!s||s.length!==1)return ie();const o=s[0];if(o.isFoundDocument())return new Xc(this._firestore,r,o.key,o,i.converter);if(o.isNoDocument())return new Xc(this._firestore,r,i._key,null,i.converter);throw ie()})}set(n,i,r){const s=Co(n,this._firestore),o=CA(s.converter,i,r),a=mA(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(n,i,r,...s){const o=Co(n,this._firestore);let a;return a=typeof(i=Qe(i))=="string"||i instanceof vl?vA(this._dataReader,"Transaction.update",o._key,i,r,s):yA(this._dataReader,"Transaction.update",o._key,i),this._transaction.update(o._key,a),this}delete(n){const i=Co(n,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Co(e,this._firestore),i=new hh(this._firestore);return super.get(e).then(r=>new vm(this._firestore,i,n._key,r._document,new ys(!1,!1),n.converter))}}function $F(t,e,n){t=_n(t,ar);const i=Object.assign(Object.assign({},MF),n);return function(s){if(s.maxAttempts<1)throw new W(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,o,a){const l=new ii;return s.asyncQueue.enqueueAndForget(async()=>{const c=await _F(s);new dF(s.asyncQueue,c,a,o,l).run()}),l.promise}(yl(t),r=>e(new LF(t,r)),i)}function VF(...t){return new RF("arrayUnion",t)}function FF(...t){return new SF("arrayRemove",t)}function UF(t){return new kF("increment",t)}(function(e,n=!0){(function(r){uo=r})(cr),Wt(new Ct("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new ar(new zL(i.getProvider("auth-internal")),new WL(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sa(c.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ut(ev,"4.1.0",e),ut(ev,"4.1.0","esm2017")})();/**
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
 */const xA="firebasestorage.googleapis.com",BF="storageBucket",zF=2*60*1e3,jF=10*60*1e3;/**
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
 */class ui extends Tn{constructor(e,n,i=0){super(rd(e),`Firebase Storage: ${n} (${rd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ui.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ci;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ci||(ci={}));function rd(t){return"storage/"+t}function HF(){const t="An unknown error occurred, please check the error payload for server response.";return new ui(ci.UNKNOWN,t)}function qF(){return new ui(ci.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function WF(){return new ui(ci.CANCELED,"User canceled the upload/download.")}function KF(t){return new ui(ci.INVALID_URL,"Invalid URL '"+t+"'.")}function GF(t){return new ui(ci.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lv(t){return new ui(ci.INVALID_ARGUMENT,t)}function DA(){return new ui(ci.APP_DELETED,"The Firebase app was deleted.")}function QF(t){return new ui(ci.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Nn.makeFromUrl(e,n)}catch{return new Nn(e,"")}if(i.path==="")return i;throw GF(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},y=n===xA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",b=new RegExp(`^https?://${y}/${r}/${v}`,"i"),R=[{regex:a,indices:l,postModify:s},{regex:f,indices:g,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<R.length;E++){const x=R[E],$=x.regex.exec(e);if($){const J=$[x.indices.bucket];let Y=$[x.indices.path];Y||(Y=""),i=new Nn(J,Y),x.postModify(i);break}}if(i==null)throw KF(e);return i}}class YF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function XF(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(f,l())},v)}function d(){s&&clearTimeout(s)}function f(v,...b){if(c){d();return}if(v){d(),u.call(null,v,...b);return}if(l()||o){d(),u.call(null,v,...b);return}i<64&&(i*=2);let R;a===1?(a=2,R=0):R=(i+Math.random())*1e3,h(R)}let g=!1;function y(v){g||(g=!0,d(),!c&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function JF(t){t(!1)}/**
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
 */function ZF(t){return t!==void 0}function $v(t,e,n,i){if(i<e)throw Lv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Lv(`Invalid value for '${t}'. Expected ${n} or less.`)}function e2(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Jc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jc||(Jc={}));/**
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
 */function t2(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class n2{constructor(e,n,i,r,s,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Kl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Jc.NO_ERROR,l=s.getStatus();if(!a||t2(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Jc.ABORT;i(!1,new Kl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Kl(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ZF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=HF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?DA():WF();o(l)}else{const l=qF();o(l)}};this.canceled_?n(!1,new Kl(!1,null,!0)):this.backoffId_=XF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&JF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function i2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function r2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function s2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function o2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function a2(t,e,n,i,r,s,o=!0){const a=e2(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return s2(c,e),i2(c,n),r2(c,s),o2(c,i),new n2(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function l2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function c2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Zc{constructor(e,n){this._service=e,n instanceof Nn?this._location=n:this._location=Nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zc(e,n)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return c2(this._location.path)}get storage(){return this._service}get parent(){const e=l2(this._location.path);if(e===null)return null;const n=new Nn(this._location.bucket,e);return new Zc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw QF(e)}}function Vv(t,e){const n=e==null?void 0:e[BF];return n==null?null:Nn.makeFromBucketSpec(n,t)}class u2{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=xA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zF,this._maxUploadRetryTime=jF,this._requests=new Set,r!=null?this._bucket=Nn.makeFromBucketSpec(r,this._host):this._bucket=Vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=Vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$v("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$v("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new YF(DA());{const o=a2(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const Fv="@firebase/storage",Uv="0.11.2";/**
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
 */const h2="storage";function d2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new u2(n,i,r,e,cr)}function f2(){Wt(new Ct(h2,d2,"PUBLIC").setMultipleInstances(!0)),ut(Fv,Uv,""),ut(Fv,Uv,"esm2017")}f2();const sd=new WeakMap;function NA(t,e){return sd.has(e)||sd.set(e,t||{f:{},r:{},s:{},u:{}}),sd.get(e)}function p2(t,e,n,i){if(!t)return n;const[r,s]=OA(t);if(!r)return n;const o=NA(void 0,i)[r]||{},a=e||s;return a&&a in o?o[a]:n}function g2(t,e,n,i){if(!t)return;const[r,s]=OA(t);if(!r)return;const o=NA(void 0,i)[r],a=e||s;if(a)return n.then(l=>{o[a]=l}).catch(Gn),a}function OA(t){return UD(t)||BD(t)?["f",t.path]:zD(t)?["r",t.toString()]:jD(t)?["s",t.toString()]:[]}const od=new WeakMap;function m2(t,e,n){const i=Qa();od.has(i)||od.set(i,new Map);const r=od.get(i),s=g2(e,n,t,i);return s&&r.set(s,t),s?()=>r.delete(s):Gn}const _2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function $f(t,e,n,i){if(!VD(t))return[t,{}];const r=[{},{}],s=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof ot||g instanceof ah)h[f]=g;else if(Yp(g)){const y=c+f;h[f]=y in n?l[f]:g.path,d[y]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let y=0;y<g.length;y++){const v=g[y];v&&v.path in s&&(h[f][y]=s[v.path])}o(g,l[f]||h[f],c+f+".",[h[f],d])}else Yr(g)?(h[f]={},o(g,l[f],c+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",r),r}const bm={reset:!1,wait:!0,maxRefDepth:2,converter:_2,snapshotOptions:{serverTimestamps:"estimate"}};function eu(t){for(const e in t)t[e].unsub()}function Vf(t,e,n,i,r,s,o,a,l){const[c,u]=$f(i.data(t.snapshotOptions),Qp(e,n),r,t);s.set(e,n,c),Ff(t,e,n,r,u,s,o,a,l)}function y2({ref:t,target:e,path:n,depth:i,resolve:r,reject:s,ops:o},a){const l=Object.create(null);let c=Gn;return a.once?uh(t).then(u=>{u.exists()?Vf(a,e,n,u,l,o,i,r,s):(o.set(e,n,null),r())}).catch(s):c=wm(t,u=>{u.exists()?Vf(a,e,n,u,l,o,i,r,s):(o.set(e,n,null),r())},s),()=>{c(),eu(l)}}function Ff(t,e,n,i,r,s,o,a,l){const c=Object.keys(r);if(Object.keys(i).filter(y=>c.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function g(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=i[y],b=r[y],I=`${n}.${y}`;if(f[I]=!0,v)if(v.path!==b.path)v.unsub();else return;i[y]={data:()=>Qp(e,I),unsub:y2({ref:b,target:e,path:I,depth:o,ops:s,resolve:g.bind(null,I),reject:l},t),path:b.path}})}function v2(t,e,n,i,r,s){const o=Object.assign({},bm,s),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Fe(c?[]:t.value);c||n.set(t,h,[]);const f=i;let g,y=Gn;const v=[],b={added:({newIndex:R,doc:E})=>{v.splice(R,0,Object.create(null));const x=v[R],[$,J]=$f(E.data(l),void 0,x,o);n.add(H(d),R,$),Ff(o,d,`${h}.${R}`,x,J,n,0,i.bind(null,E),r)},modified:({oldIndex:R,newIndex:E,doc:x})=>{const $=H(d),J=v[R],Y=$[R],[le,Ae]=$f(x.data(l),Y,J,o);v.splice(E,0,J),n.remove($,R),n.add($,E,le),Ff(o,d,`${h}.${E}`,J,Ae,n,0,i,r)},removed:({oldIndex:R})=>{const E=H(d);n.remove(E,R),eu(v.splice(R,1)[0])}};function I(R){const E=R.docChanges(a);if(!g&&E.length){g=!0;let x=0;const $=E.length,J=Object.create(null);for(let Y=0;Y<$;Y++)J[E[Y].doc.id]=!0;i=Y=>{Y&&Y.id in J&&++x>=$&&(c&&(n.set(t,h,H(d)),d=t),f(H(d)),i=Gn)}}E.forEach(x=>{b[x.type](x)}),E.length||(c&&(n.set(t,h,H(d)),d=t),i(H(d)))}return u?OF(e).then(I).catch(r):y=wm(e,I,r),R=>{if(y(),R){const E=typeof R=="function"?R():[];n.set(t,h,E)}v.forEach(eu)}}function w2(t,e,n,i,r,s){const o=Object.assign({},bm,s),a="value",l=Object.create(null);i=HD(i,()=>Qp(t,a));let c=Gn;function u(h){h.exists()?Vf(o,t,a,h,l,n,0,i,r):(n.set(t,a,null),i(null))}return o.once?uh(e).then(u).catch(r):c=wm(e,u,r),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}eu(l)}}const Bv=Symbol();function MA(t,e){let n=Gn;const i=Object.assign({},bm,e),r=H(t),s=i.target||Fe();WD()&&(i.once=!0);const o=p2(r,i.ssrKey,Bv,Qa()),a=o!==Bv;a&&(s.value=o);let l=!a;const c=Fe(!1),u=Fe(),h=_b(),d=wp();let f=Gn;function g(){let b=H(t);const I=new Promise((R,E)=>{if(n(i.reset),!b)return n=Gn,R(null);c.value=l,l=!0,b.converter||(b=b.withConverter(i.converter)),n=(Yp(b)?w2:v2)(s,b,b2,R,E,i)}).catch(R=>(h.value===I&&(u.value=R),Promise.reject(R))).finally(()=>{h.value===I&&(c.value=!1)});h.value=I}let y=Gn;Je(t)&&(y=Ii(t,g)),g(),r&&(f=m2(h.value,r,i.ssrKey)),jb()&&Pb(()=>h.value),d&&tb(v);function v(b=i.reset){y(),f(),n(b)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const b2={set:(t,e,n)=>LD(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function LA(t,e){return MA(t,{target:Fe([]),...e})}function Em(t,e){return MA(t,e)}function E2(t){return(e,n)=>{const i=KD(e,n).run(()=>Fe(t));YE.set(e,i),GD(i,e)}}function I2(t){return MD?WE(Qa(t)):null}function T2(t,{firebaseApp:e,modules:n=[]}){t.provide(QE,e);for(const i of n)i(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let $A;const dh=t=>$A=t,VA=Symbol();function Uf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Yo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yo||(Yo={}));function A2(){const t=vp(!0),e=t.run(()=>Fe({}));let n=[],i=[];const r=_u({install(s){dh(r),r._a=s,s.provide(VA,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!lD?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const FA=()=>{};function zv(t,e,n,i=FA){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&wp()&&tb(r),r}function cs(t,...e){t.slice().forEach(n=>{n(...e)})}const C2=t=>t();function Bf(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Uf(r)&&Uf(i)&&t.hasOwnProperty(n)&&!Je(i)&&!Gi(i)?t[n]=Bf(r,i):t[n]=i}return t}const R2=Symbol();function S2(t){return!Uf(t)||!t.hasOwnProperty(R2)}const{assign:Fi}=Object;function k2(t){return!!(Je(t)&&t.effect)}function P2(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=eS(n.state.value[t]);return Fi(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=_u(Ce(()=>{dh(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=UA(t,c,e,n,i,!0),l}function UA(t,e,n={},i,r,s){let o;const a=Fi({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),Fe({});let y;function v(Y){let le;c=u=!1,typeof Y=="function"?(Y(i.state.value[t]),le={type:Yo.patchFunction,storeId:t,events:f}):(Bf(i.state.value[t],Y),le={type:Yo.patchObject,payload:Y,storeId:t,events:f});const Ae=y=Symbol();kp().then(()=>{y===Ae&&(c=!0)}),u=!0,cs(h,le,i.state.value[t])}const b=s?function(){const{state:le}=n,Ae=le?le():{};this.$patch(dt=>{Fi(dt,Ae)})}:FA;function I(){o.stop(),h=[],d=[],i._s.delete(t)}function R(Y,le){return function(){dh(i);const Ae=Array.from(arguments),dt=[],St=[];function kt(we){dt.push(we)}function hi(we){St.push(we)}cs(d,{args:Ae,name:Y,store:x,after:kt,onError:hi});let rn;try{rn=le.apply(this&&this.$id===t?this:x,Ae)}catch(we){throw cs(St,we),we}return rn instanceof Promise?rn.then(we=>(cs(dt,we),we)).catch(we=>(cs(St,we),Promise.reject(we))):(cs(dt,rn),rn)}}const E={_p:i,$id:t,$onAction:zv.bind(null,d),$patch:v,$reset:b,$subscribe(Y,le={}){const Ae=zv(h,Y,le.detached,()=>dt()),dt=o.run(()=>Ii(()=>i.state.value[t],St=>{(le.flush==="sync"?u:c)&&Y({storeId:t,type:Yo.direct,events:f},St)},Fi({},l,le)));return Ae},$dispose:I},x=eo(E);i._s.set(t,x);const $=i._a&&i._a.runWithContext||C2,J=i._e.run(()=>(o=vp(),$(()=>o.run(e))));for(const Y in J){const le=J[Y];if(Je(le)&&!k2(le)||Gi(le))s||(g&&S2(le)&&(Je(le)?le.value=g[Y]:Bf(le,g[Y])),i.state.value[t][Y]=le);else if(typeof le=="function"){const Ae=R(Y,le);J[Y]=Ae,a.actions[Y]=le}}return Fi(x,J),Fi(Ie(x),J),Object.defineProperty(x,"$state",{get:()=>i.state.value[t],set:Y=>{v(le=>{Fi(le,Y)})}}),i._p.forEach(Y=>{Fi(x,o.run(()=>Y({store:x,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(x.$state,g),c=!0,u=!0,x}function x2(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=VS();return a=a||(c?an(VA,null):null),a&&dh(a),a=$A,a._s.has(i)||(s?UA(i,e,r,a):P2(i,r,a)),a._s.get(i)}return o.$id=i,o}const D2=(t,e)=>e.some(n=>t instanceof n);let jv,Hv;function N2(){return jv||(jv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O2(){return Hv||(Hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BA=new WeakMap,zf=new WeakMap,zA=new WeakMap,ad=new WeakMap,Im=new WeakMap;function M2(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&BA.set(n,t)}).catch(()=>{}),Im.set(e,t),e}function L2(t){if(zf.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zf.set(t,e)}let jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $2(t){jf=t(jf)}function V2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ld(this),e,...n);return zA.set(i,e.sort?e.sort():[e]),er(i)}:O2().includes(t)?function(...e){return t.apply(ld(this),e),er(BA.get(this))}:function(...e){return er(t.apply(ld(this),e))}}function F2(t){return typeof t=="function"?V2(t):(t instanceof IDBTransaction&&L2(t),D2(t,N2())?new Proxy(t,jf):t)}function er(t){if(t instanceof IDBRequest)return M2(t);if(ad.has(t))return ad.get(t);const e=F2(t);return e!==t&&(ad.set(t,e),Im.set(e,t)),e}const ld=t=>Im.get(t);function U2(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=er(o);return i&&o.addEventListener("upgradeneeded",l=>{i(er(o.result),l.oldVersion,l.newVersion,er(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const B2=["get","getKey","getAll","getAllKeys","count"],z2=["put","add","delete","clear"],cd=new Map;function qv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cd.get(e))return cd.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=z2.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||B2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return cd.set(e,s),s}$2(t=>({...t,get:(e,n,i)=>qv(e,n)||t.get(e,n,i),has:(e,n)=>!!qv(e,n)||t.has(e,n)}));const jA="@firebase/installations",Tm="0.6.4";/**
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
 */const HA=1e4,qA=`w:${Tm}`,WA="FIS_v2",j2="https://firebaseinstallations.googleapis.com/v1",H2=60*60*1e3,q2="installations",W2="Installations";/**
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
 */const K2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hr=new Ni(q2,W2,K2);function KA(t){return t instanceof Tn&&t.code.includes("request-failed")}/**
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
 */function GA({projectId:t}){return`${j2}/projects/${t}/installations`}function QA(t){return{token:t.token,requestStatus:2,expiresIn:Q2(t.expiresIn),creationTime:Date.now()}}async function YA(t,e){const i=(await e.json()).error;return Hr.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function XA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function G2(t,{refreshToken:e}){const n=XA(t);return n.append("Authorization",Y2(e)),n}async function JA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Q2(t){return Number(t.replace("s","000"))}function Y2(t){return`${WA} ${t}`}/**
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
 */async function X2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=GA(t),r=XA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:WA,appId:t.appId,sdkVersion:qA},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await JA(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:QA(c.authToken)}}else throw await YA("Create Installation",l)}/**
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
 */function ZA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function J2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Z2=/^[cdef][\w-]{21}$/,Hf="";function eU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tU(t);return Z2.test(n)?n:Hf}catch{return Hf}}function tU(t){return J2(t).substr(0,22)}/**
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
 */function fh(t){return`${t.appName}!${t.appId}`}/**
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
 */const eC=new Map;function tC(t,e){const n=fh(t);nC(n,e),nU(n,e)}function nC(t,e){const n=eC.get(t);if(n)for(const i of n)i(e)}function nU(t,e){const n=iU();n&&n.postMessage({key:t,fid:e}),rU()}let Rr=null;function iU(){return!Rr&&"BroadcastChannel"in self&&(Rr=new BroadcastChannel("[Firebase] FID Change"),Rr.onmessage=t=>{nC(t.data.key,t.data.fid)}),Rr}function rU(){eC.size===0&&Rr&&(Rr.close(),Rr=null)}/**
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
 */const sU="firebase-installations-database",oU=1,qr="firebase-installations-store";let ud=null;function Am(){return ud||(ud=U2(sU,oU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qr)}}})),ud}async function tu(t,e){const n=fh(t),r=(await Am()).transaction(qr,"readwrite"),s=r.objectStore(qr),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&tC(t,e.fid),e}async function iC(t){const e=fh(t),i=(await Am()).transaction(qr,"readwrite");await i.objectStore(qr).delete(e),await i.done}async function ph(t,e){const n=fh(t),r=(await Am()).transaction(qr,"readwrite"),s=r.objectStore(qr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&tC(t,a.fid),a}/**
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
 */async function Cm(t){let e;const n=await ph(t.appConfig,i=>{const r=aU(i),s=lU(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===Hf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function aU(t){const e=t||{fid:eU(),registrationStatus:0};return rC(e)}function lU(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Hr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=cU(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uU(t)}:{installationEntry:e}}async function cU(t,e){try{const n=await X2(t,e);return tu(t.appConfig,n)}catch(n){throw KA(n)&&n.customData.serverCode===409?await iC(t.appConfig):await tu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uU(t){let e=await Wv(t.appConfig);for(;e.registrationStatus===1;)await ZA(100),e=await Wv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Cm(t);return i||n}return e}function Wv(t){return ph(t,e=>{if(!e)throw Hr.create("installation-not-found");return rC(e)})}function rC(t){return hU(t)?{fid:t.fid,registrationStatus:0}:t}function hU(t){return t.registrationStatus===1&&t.registrationTime+HA<Date.now()}/**
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
 */async function dU({appConfig:t,heartbeatServiceProvider:e},n){const i=fU(t,n),r=G2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:qA,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await JA(()=>fetch(i,a));if(l.ok){const c=await l.json();return QA(c)}else throw await YA("Generate Auth Token",l)}function fU(t,{fid:e}){return`${GA(t)}/${e}/authTokens:generate`}/**
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
 */async function Rm(t,e=!1){let n;const i=await ph(t.appConfig,s=>{if(!sC(s))throw Hr.create("not-registered");const o=s.authToken;if(!e&&mU(o))return s;if(o.requestStatus===1)return n=pU(t,e),s;{if(!navigator.onLine)throw Hr.create("app-offline");const a=yU(s);return n=gU(t,a),a}});return n?await n:i.authToken}async function pU(t,e){let n=await Kv(t.appConfig);for(;n.authToken.requestStatus===1;)await ZA(100),n=await Kv(t.appConfig);const i=n.authToken;return i.requestStatus===0?Rm(t,e):i}function Kv(t){return ph(t,e=>{if(!sC(e))throw Hr.create("not-registered");const n=e.authToken;return vU(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gU(t,e){try{const n=await dU(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await tu(t.appConfig,i),n}catch(n){if(KA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await iC(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await tu(t.appConfig,i)}throw n}}function sC(t){return t!==void 0&&t.registrationStatus===2}function mU(t){return t.requestStatus===2&&!_U(t)}function _U(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+H2}function yU(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vU(t){return t.requestStatus===1&&t.requestTime+HA<Date.now()}/**
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
 */async function wU(t){const e=t,{installationEntry:n,registrationPromise:i}=await Cm(e);return i?i.catch(console.error):Rm(e).catch(console.error),n.fid}/**
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
 */async function bU(t,e=!1){const n=t;return await EU(n),(await Rm(n,e)).token}async function EU(t){const{registrationPromise:e}=await Cm(t);e&&await e}/**
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
 */function IU(t){if(!t||!t.options)throw hd("App Configuration");if(!t.name)throw hd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hd(t){return Hr.create("missing-app-config-values",{valueName:t})}/**
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
 */const oC="installations",TU="installations-internal",AU=t=>{const e=t.getProvider("app").getImmediate(),n=IU(e),i=lr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},CU=t=>{const e=t.getProvider("app").getImmediate(),n=lr(e,oC).getImmediate();return{getId:()=>wU(n),getToken:r=>bU(n,r)}};function RU(){Wt(new Ct(oC,AU,"PUBLIC")),Wt(new Ct(TU,CU,"PRIVATE"))}RU();ut(jA,Tm);ut(jA,Tm,"esm2017");/**
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
 */const nu="analytics",SU="firebase_id",kU="origin",PU=60*1e3,xU="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sm="https://www.googletagmanager.com/gtag/js";/**
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
 */const ln=new io("@firebase/analytics");/**
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
 */const DU={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new Ni("analytics","Analytics",DU);/**
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
 */function NU(t){if(!t.startsWith(Sm)){const e=yn.create("invalid-gtag-resource",{gtagURL:t});return ln.warn(e.message),""}return t}function aC(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function OU(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MU(t,e){const n=OU("firebase-js-sdk-policy",{createScriptURL:NU}),i=document.createElement("script"),r=`${Sm}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function LU(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $U(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await aC(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){ln.error(a)}t("config",r,s)}async function VU(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await aC(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){ln.error(s)}}function FU(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await VU(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await $U(t,e,n,i,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){ln.error(a)}}return r}function UU(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=FU(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function BU(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sm)&&n.src.includes(t))return n;return null}/**
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
 */const zU=30,jU=1e3;class HU{constructor(e={},n=jU){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lC=new HU;function qU(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function WU(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:qU(i)},s=xU.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function KU(t,e=lC,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw yn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw yn.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new YU;return setTimeout(async()=>{a.abort()},n!==void 0?n:PU),cC({appId:i,apiKey:r,measurementId:s},o,a,e)}async function cC(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=lC){var s;const{appId:o,measurementId:a}=t;try{await GU(i,e)}catch(l){if(a)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await WU(t);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!QU(c)){if(r.deleteThrottleMetadata(o),a)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?k_(n,r.intervalMillis,zU):k_(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),ln.debug(`Calling attemptFetch again in ${u} millis`),cC(t,h,i,r)}}function GU(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(yn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function QU(t){if(!(t instanceof Tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class YU{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function XU(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
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
 */async function JU(){if(Au())try{await Fp()}catch(t){return ln.warn(yn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ln.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZU(t,e,n,i,r,s,o){var a;const l=KU(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ln.error(f)),e.push(l);const c=JU().then(f=>{if(f)return i.getId()}),[u,h]=await Promise.all([l,c]);BU(s)||MU(s,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[kU]="firebase",d.update=!0,h!=null&&(d[SU]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class eB{constructor(e){this.app=e}_delete(){return delete Xo[this.app.options.appId],Promise.resolve()}}let Xo={},Gv=[];const Qv={};let dd="dataLayer",tB="gtag",Yv,uC,Xv=!1;function nB(){const t=[];if(eE()&&t.push("This is a browser extension environment."),iE()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:e});ln.warn(n.message)}}function iB(t,e,n){nB();const i=t.options.appId;if(!i)throw yn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(Xo[i]!=null)throw yn.create("already-exists",{id:i});if(!Xv){LU(dd);const{wrappedGtag:s,gtagCore:o}=UU(Xo,Gv,Qv,dd,tB);uC=s,Yv=o,Xv=!0}return Xo[i]=ZU(t,Gv,Qv,e,Yv,dd,n),new eB(t)}function rB(t=Ha()){t=Qe(t);const e=lr(t,nu);return e.isInitialized()?e.getImmediate():sB(t)}function sB(t,e={}){const n=lr(t,nu);if(n.isInitialized()){const r=n.getImmediate();if(da(e,n.getOptions()))return r;throw yn.create("already-initialized")}return n.initialize({options:e})}function Jo(t,e,n,i){t=Qe(t),XU(uC,Xo[t.app.options.appId],e,n,i).catch(r=>ln.error(r))}const Jv="@firebase/analytics",Zv="0.10.0";function oB(){Wt(new Ct(nu,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return iB(i,r,n)},"PUBLIC")),Wt(new Ct("analytics-internal",t,"PRIVATE")),ut(Jv,Zv),ut(Jv,Zv,"esm2017");function t(e){try{const n=e.getProvider(nu).getImmediate();return{logEvent:(i,r,s)=>Jo(n,i,r,s)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}oB();const aB=(t,e)=>e.some(n=>t instanceof n);let ew,tw;function lB(){return ew||(ew=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cB(){return tw||(tw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hC=new WeakMap,qf=new WeakMap,dC=new WeakMap,fd=new WeakMap,km=new WeakMap;function uB(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ai(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hC.set(n,t)}).catch(()=>{}),km.set(e,t),e}function hB(t){if(qf.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qf.set(t,e)}let Wf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ai(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dB(t){Wf=t(Wf)}function fB(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(pd(this),e,...n);return dC.set(i,e.sort?e.sort():[e]),Ai(i)}:cB().includes(t)?function(...e){return t.apply(pd(this),e),Ai(hC.get(this))}:function(...e){return Ai(t.apply(pd(this),e))}}function pB(t){return typeof t=="function"?fB(t):(t instanceof IDBTransaction&&hB(t),aB(t,lB())?new Proxy(t,Wf):t)}function Ai(t){if(t instanceof IDBRequest)return uB(t);if(fd.has(t))return fd.get(t);const e=pB(t);return e!==t&&(fd.set(t,e),km.set(e,t)),e}const pd=t=>km.get(t);function fC(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ai(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ai(o.result),l.oldVersion,l.newVersion,Ai(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}function gd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),Ai(n).then(()=>{})}const gB=["get","getKey","getAll","getAllKeys","count"],mB=["put","add","delete","clear"],md=new Map;function nw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=mB.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||gB.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return md.set(e,s),s}dB(t=>({...t,get:(e,n,i)=>nw(e,n)||t.get(e,n,i),has:(e,n)=>!!nw(e,n)||t.has(e,n)}));/**
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
 */const _B="/firebase-messaging-sw.js",yB="/firebase-cloud-messaging-push-scope",pC="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",vB="https://fcmregistrations.googleapis.com/v1",gC="google.c.a.c_id",wB="google.c.a.c_l",bB="google.c.a.ts",EB="google.c.a.e";var iw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(iw||(iw={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Da;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Da||(Da={}));/**
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
 */function gi(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function IB(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}/**
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
 */const _d="fcm_token_details_db",TB=5,rw="fcm_token_object_Store";async function AB(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(_d))return null;let e=null;return(await fC(_d,TB,{upgrade:async(i,r,s,o)=>{var a;if(r<2||!i.objectStoreNames.contains(rw))return;const l=o.objectStore(rw),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(r===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:gi(u.vapidKey)}}}else if(r===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:gi(u.auth),p256dh:gi(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:gi(u.vapidKey)}}}else if(r===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:gi(u.auth),p256dh:gi(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:gi(u.vapidKey)}}}}}})).close(),await gd(_d),await gd("fcm_vapid_details_db"),await gd("undefined"),CB(e)?e:null}function CB(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const RB="firebase-messaging-database",SB=1,Wr="firebase-messaging-store";let yd=null;function Pm(){return yd||(yd=fC(RB,SB,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wr)}}})),yd}async function mC(t){const e=Dm(t),i=await(await Pm()).transaction(Wr).objectStore(Wr).get(e);if(i)return i;{const r=await AB(t.appConfig.senderId);if(r)return await xm(t,r),r}}async function xm(t,e){const n=Dm(t),r=(await Pm()).transaction(Wr,"readwrite");return await r.objectStore(Wr).put(e,n),await r.done,e}async function kB(t){const e=Dm(t),i=(await Pm()).transaction(Wr,"readwrite");await i.objectStore(Wr).delete(e),await i.done}function Dm({appConfig:t}){return t.appId}/**
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
 */const PB={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ht=new Ni("messaging","Messaging",PB);/**
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
 */async function xB(t,e){const n=await Om(t),i=yC(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(Nm(t.appConfig),r)).json()}catch(o){throw Ht.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ht.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Ht.create("token-subscribe-no-token");return s.token}async function DB(t,e){const n=await Om(t),i=yC(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(`${Nm(t.appConfig)}/${e.token}`,r)).json()}catch(o){throw Ht.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ht.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Ht.create("token-update-no-token");return s.token}async function _C(t,e){const i={method:"DELETE",headers:await Om(t)};try{const s=await(await fetch(`${Nm(t.appConfig)}/${e}`,i)).json();if(s.error){const o=s.error.message;throw Ht.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw Ht.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function Nm({projectId:t}){return`${vB}/projects/${t}/registrations`}async function Om({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function yC({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==pC&&(r.web.applicationPubKey=i),r}/**
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
 */const NB=7*24*60*60*1e3;async function OB(t){const e=await $B(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:gi(e.getKey("auth")),p256dh:gi(e.getKey("p256dh"))},i=await mC(t.firebaseDependencies);if(i){if(VB(i.subscriptionOptions,n))return Date.now()>=i.createTime+NB?LB(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await _C(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return sw(t.firebaseDependencies,n)}else return sw(t.firebaseDependencies,n)}async function MB(t){const e=await mC(t.firebaseDependencies);e&&(await _C(t.firebaseDependencies,e.token),await kB(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function LB(t,e){try{const n=await DB(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await xm(t.firebaseDependencies,i),n}catch(n){throw await MB(t),n}}async function sw(t,e){const i={token:await xB(t,e),createTime:Date.now(),subscriptionOptions:e};return await xm(t,i),i.token}async function $B(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:IB(e)})}function VB(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}/**
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
 */function ow(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return FB(e,t),UB(e,t),BB(e,t),e}function FB(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r);const s=e.notification.icon;s&&(t.notification.icon=s)}function UB(t,e){e.data&&(t.data=e.data)}function BB(t,e){var n,i,r,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(r=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&r!==void 0?r:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function zB(t){return typeof t=="object"&&!!t&&gC in t}/**
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
 */vC("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");vC("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function vC(t,e){const n=[];for(let i=0;i<t.length;i++)n.push(t.charAt(i)),i<e.length&&n.push(e.charAt(i));return n.join("")}/**
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
 */function jB(t){if(!t||!t.options)throw vd("App Configuration Object");if(!t.name)throw vd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw vd(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function vd(t){return Ht.create("missing-app-config-values",{valueName:t})}/**
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
 */class HB{constructor(e,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=jB(e);this.firebaseDependencies={app:e,appConfig:r,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function qB(t){try{t.swRegistration=await navigator.serviceWorker.register(_B,{scope:yB}),t.swRegistration.update().catch(()=>{})}catch(e){throw Ht.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function WB(t,e){if(!e&&!t.swRegistration&&await qB(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ht.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function KB(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=pC)}/**
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
 */async function wC(t,e){if(!navigator)throw Ht.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ht.create("permission-blocked");return await KB(t,e==null?void 0:e.vapidKey),await WB(t,e==null?void 0:e.serviceWorkerRegistration),OB(t)}/**
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
 */async function GB(t,e,n){const i=QB(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[gC],message_name:n[wB],message_time:n[bB],message_device_time:Math.floor(Date.now()/1e3)})}function QB(t){switch(t){case Da.NOTIFICATION_CLICKED:return"notification_open";case Da.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function YB(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Da.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(ow(n)):t.onMessageHandler.next(ow(n)));const i=n.data;zB(i)&&i[EB]==="1"&&await GB(t,n.messageType,i)}const aw="@firebase/messaging",lw="0.12.4";/**
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
 */const XB=t=>{const e=new HB(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>YB(e,n)),e},JB=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:i=>wC(e,i)}};function ZB(){Wt(new Ct("messaging",XB,"PUBLIC")),Wt(new Ct("messaging-internal",JB,"PRIVATE")),ut(aw,lw),ut(aw,lw,"esm2017")}/**
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
 */async function e4(){try{await Fp()}catch{return!1}return typeof window<"u"&&Au()&&iE()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function t4(t,e){if(!navigator)throw Ht.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function n4(t=Ha()){return e4().then(e=>{if(!e)throw Ht.create("unsupported-browser")},e=>{throw Ht.create("indexed-db-unsupported")}),lr(Qe(t),"messaging").getImmediate()}async function i4(t,e){return t=Qe(t),wC(t,e)}function r4(t,e){return t=Qe(t),t4(t,e)}ZB();const gh=aE({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),on=IF(gh),lc=rB(gh),bC=n4(gh);r4(bC,t=>{console.log("Message received. ",t)});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ds=typeof window<"u";function s4(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function wd(t,e){const n={};for(const i in e){const r=e[i];n[i]=Fn(r)?r.map(t):t(r)}return n}const Zo=()=>{},Fn=Array.isArray,o4=/\/$/,a4=t=>t.replace(o4,"");function bd(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=h4(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function l4(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cw(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function c4(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ws(e.matched[i],n.matched[r])&&EC(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function EC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!u4(t[n],e[n]))return!1;return!0}function u4(t,e){return Fn(t)?uw(t,e):Fn(e)?uw(e,t):t===e}function uw(t,e){return Fn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function h4(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Na;(function(t){t.pop="pop",t.push="push"})(Na||(Na={}));var ea;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ea||(ea={}));function d4(t){if(!t)if(ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),a4(t)}const f4=/^[^#]+#/;function p4(t,e){return t.replace(f4,"#")+e}function g4(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const mh=()=>({left:window.pageXOffset,top:window.pageYOffset});function m4(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=g4(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hw(t,e){return(history.state?history.state.position-e:-1)+t}const Kf=new Map;function _4(t,e){Kf.set(t,e)}function y4(t){const e=Kf.get(t);return Kf.delete(t),e}let v4=()=>location.protocol+"//"+location.host;function IC(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),cw(l,"")}return cw(n,t)+i+r}function w4(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const f=IC(t,location),g=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}v=y?d.position-y.position:0}else i(f);r.forEach(b=>{b(n.value,g,{delta:v,type:Na.pop,direction:v?v>0?ea.forward:ea.back:ea.unknown})})};function l(){o=n.value}function c(d){r.push(d);const f=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ne({},d.state,{scroll:mh()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function dw(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?mh():null}}function b4(t){const{history:e,location:n}=window,i={value:IC(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:v4()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ne({},e.state,dw(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ne({},r.value,e.state,{forward:l,scroll:mh()});s(u.current,u,!0);const h=Ne({},dw(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function E4(t){t=d4(t);const e=b4(t),n=w4(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ne({location:"",base:t,go:i,createHref:p4.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function I4(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),E4(t)}function T4(t){return typeof t=="string"||t&&typeof t=="object"}function TC(t){return typeof t=="string"||typeof t=="symbol"}const Vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},AC=Symbol("");var fw;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fw||(fw={}));function Ks(t,e){return Ne(new Error,{type:t,[AC]:!0},e)}function fi(t,e){return t instanceof Error&&AC in t&&(e==null||!!(t.type&e))}const pw="[^/]+?",A4={sensitive:!1,strict:!1,start:!0,end:!0},C4=/[.+*?^${}()[\]/\\]/g;function R4(t,e){const n=Ne({},A4,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(C4,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:v,regexp:b}=d;s.push({name:g,repeatable:y,optional:v});const I=b||pw;if(I!==pw){f+=10;try{new RegExp(`(${I})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${I}): `+E.message)}}let R=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;h||(R=v&&c.length<2?`(?:/${R})`:"/"+R),v&&(R+="?"),r+=R,f+=20,v&&(f+=-8),y&&(f+=-20),I===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:v}=f,b=g in c?c[g]:"";if(Fn(b)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const I=Fn(b)?b.join("/"):b;if(!I)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=I}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function S4(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function k4(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=S4(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(gw(i))return 1;if(gw(r))return-1}return r.length-i.length}function gw(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const P4={type:0,value:""},x4=/[a-zA-Z0-9_]/;function D4(t){if(!t)return[[]];if(t==="/")return[[P4]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:x4.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function N4(t,e,n){const i=R4(D4(t.path),n),r=Ne(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function O4(t,e){const n=[],i=new Map;e=yw({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,d){const f=!d,g=M4(u);g.aliasOf=d&&d.record;const y=yw(e,u),v=[g];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of R)v.push(Ne({},g,{components:d?d.record.components:g.components,path:E,aliasOf:d?d.record:g}))}let b,I;for(const R of v){const{path:E}=R;if(h&&E[0]!=="/"){const x=h.record.path,$=x[x.length-1]==="/"?"":"/";R.path=h.record.path+(E&&$+E)}if(b=N4(R,h,y),d?d.alias.push(b):(I=I||b,I!==b&&I.alias.push(b),f&&u.name&&!_w(b)&&o(u.name)),g.children){const x=g.children;for(let $=0;$<x.length;$++)s(x[$],b,d&&d.children[$])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return I?()=>{o(I)}:Zo}function o(u){if(TC(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&k4(u,n[h])>=0&&(u.record.path!==n[h].record.path||!CC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_w(u)&&i.set(u.record.name,u)}function c(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Ks(1,{location:u});y=d.record.name,f=Ne(mw(h.params,d.keys.filter(I=>!I.optional).map(I=>I.name)),u.params&&mw(u.params,d.keys.map(I=>I.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(I=>I.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?i.get(h.name):n.find(I=>I.re.test(h.path)),!d)throw Ks(1,{location:u,currentLocation:h});y=d.record.name,f=Ne({},h.params,u.params),g=d.stringify(f)}const v=[];let b=d;for(;b;)v.unshift(b.record),b=b.parent;return{name:y,path:g,params:f,matched:v,meta:$4(v)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function mw(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function M4(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:L4(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function L4(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function _w(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $4(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function yw(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function CC(t,e){return e.children.some(n=>n===t||CC(t,n))}const RC=/#/g,V4=/&/g,F4=/\//g,U4=/=/g,B4=/\?/g,SC=/\+/g,z4=/%5B/g,j4=/%5D/g,kC=/%5E/g,H4=/%60/g,PC=/%7B/g,q4=/%7C/g,xC=/%7D/g,W4=/%20/g;function Mm(t){return encodeURI(""+t).replace(q4,"|").replace(z4,"[").replace(j4,"]")}function K4(t){return Mm(t).replace(PC,"{").replace(xC,"}").replace(kC,"^")}function Gf(t){return Mm(t).replace(SC,"%2B").replace(W4,"+").replace(RC,"%23").replace(V4,"%26").replace(H4,"`").replace(PC,"{").replace(xC,"}").replace(kC,"^")}function G4(t){return Gf(t).replace(U4,"%3D")}function Q4(t){return Mm(t).replace(RC,"%23").replace(B4,"%3F")}function Y4(t){return t==null?"":Q4(t).replace(F4,"%2F")}function iu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function X4(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(SC," "),o=s.indexOf("="),a=iu(o<0?s:s.slice(0,o)),l=o<0?null:iu(s.slice(o+1));if(a in e){let c=e[a];Fn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function vw(t){let e="";for(let n in t){const i=t[n];if(n=G4(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fn(i)?i.map(s=>s&&Gf(s)):[i&&Gf(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function J4(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Fn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Z4=Symbol(""),ww=Symbol(""),_h=Symbol(""),Lm=Symbol(""),Qf=Symbol("");function Ro(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bi(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ks(4,{from:n,to:e})):h instanceof Error?a(h):T4(h)?a(Ks(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ed(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(ez(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Bi(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=s4(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Bi(d,n,i,s,o)()}))}}return r}function ez(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bw(t){const e=an(_h),n=an(Lm),i=Ce(()=>e.resolve(H(t.to))),r=Ce(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ws.bind(null,u));if(d>-1)return d;const f=Ew(l[c-2]);return c>1&&Ew(u)===f&&h[h.length-1].path!==f?h.findIndex(Ws.bind(null,l[c-2])):d}),s=Ce(()=>r.value>-1&&rz(n.params,i.value.params)),o=Ce(()=>r.value>-1&&r.value===n.matched.length-1&&EC(n.params,i.value.params));function a(l={}){return iz(l)?e[H(t.replace)?"replace":"push"](H(t.to)).catch(Zo):Promise.resolve()}return{route:i,href:Ce(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const tz=Rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bw,setup(t,{slots:e}){const n=eo(bw(t)),{options:i}=an(_h),r=Ce(()=>({[Iw(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Iw(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wb("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),nz=tz;function iz(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rz(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Fn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ew(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Iw=(t,e,n)=>t??e??n,sz=Rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=an(Qf),r=Ce(()=>t.route||i.value),s=an(ww,0),o=Ce(()=>{let c=H(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ce(()=>r.value.matched[o.value]);Xl(ww,Ce(()=>o.value+1)),Xl(Z4,a),Xl(Qf,r);const l=Fe();return Ii(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ws(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Tw(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Wb(d,Ne({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Tw(n.default,{Component:v,route:c})||v}}});function Tw(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const DC=sz;function oz(t){const e=O4(t.routes,t),n=t.parseQuery||X4,i=t.stringifyQuery||vw,r=t.history,s=Ro(),o=Ro(),a=Ro(),l=_b(Vi);let c=Vi;ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=wd.bind(null,_=>""+_),h=wd.bind(null,Y4),d=wd.bind(null,iu);function f(_,T){let S,U;return TC(_)?(S=e.getRecordMatcher(_),U=T):U=_,e.addRoute(U,S)}function g(_){const T=e.getRecordMatcher(_);T&&e.removeRoute(T)}function y(){return e.getRoutes().map(_=>_.record)}function v(_){return!!e.getRecordMatcher(_)}function b(_,T){if(T=Ne({},T||l.value),typeof _=="string"){const w=bd(n,_,T.path),A=e.resolve({path:w.path},T),C=r.createHref(w.fullPath);return Ne(w,A,{params:d(A.params),hash:iu(w.hash),redirectedFrom:void 0,href:C})}let S;if("path"in _)S=Ne({},_,{path:bd(n,_.path,T.path).path});else{const w=Ne({},_.params);for(const A in w)w[A]==null&&delete w[A];S=Ne({},_,{params:h(w)}),T.params=h(T.params)}const U=e.resolve(S,T),D=_.hash||"";U.params=u(d(U.params));const p=l4(i,Ne({},_,{hash:K4(D),path:U.path})),m=r.createHref(p);return Ne({fullPath:p,hash:D,query:i===vw?J4(_.query):_.query||{}},U,{redirectedFrom:void 0,href:m})}function I(_){return typeof _=="string"?bd(n,_,l.value.path):Ne({},_)}function R(_,T){if(c!==_)return Ks(8,{from:T,to:_})}function E(_){return J(_)}function x(_){return E(Ne(I(_),{replace:!0}))}function $(_){const T=_.matched[_.matched.length-1];if(T&&T.redirect){const{redirect:S}=T;let U=typeof S=="function"?S(_):S;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=I(U):{path:U},U.params={}),Ne({query:_.query,hash:_.hash,params:"path"in U?{}:_.params},U)}}function J(_,T){const S=c=b(_),U=l.value,D=_.state,p=_.force,m=_.replace===!0,w=$(S);if(w)return J(Ne(I(w),{state:typeof w=="object"?Ne({},D,w.state):D,force:p,replace:m}),T||S);const A=S;A.redirectedFrom=T;let C;return!p&&c4(i,U,S)&&(C=Ks(16,{to:A,from:U}),wn(U,U,!0,!1)),(C?Promise.resolve(C):Ae(A,U)).catch(P=>fi(P)?fi(P,2)?P:Cn(P):Te(P,A,U)).then(P=>{if(P){if(fi(P,2))return J(Ne({replace:m},I(P.to),{state:typeof P.to=="object"?Ne({},D,P.to.state):D,force:p}),T||A)}else P=St(A,U,!0,m,D);return dt(A,U,P),P})}function Y(_,T){const S=R(_,T);return S?Promise.reject(S):Promise.resolve()}function le(_){const T=Mi.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(_):_()}function Ae(_,T){let S;const[U,D,p]=az(_,T);S=Ed(U.reverse(),"beforeRouteLeave",_,T);for(const w of U)w.leaveGuards.forEach(A=>{S.push(Bi(A,_,T))});const m=Y.bind(null,_,T);return S.push(m),et(S).then(()=>{S=[];for(const w of s.list())S.push(Bi(w,_,T));return S.push(m),et(S)}).then(()=>{S=Ed(D,"beforeRouteUpdate",_,T);for(const w of D)w.updateGuards.forEach(A=>{S.push(Bi(A,_,T))});return S.push(m),et(S)}).then(()=>{S=[];for(const w of p)if(w.beforeEnter)if(Fn(w.beforeEnter))for(const A of w.beforeEnter)S.push(Bi(A,_,T));else S.push(Bi(w.beforeEnter,_,T));return S.push(m),et(S)}).then(()=>(_.matched.forEach(w=>w.enterCallbacks={}),S=Ed(p,"beforeRouteEnter",_,T),S.push(m),et(S))).then(()=>{S=[];for(const w of o.list())S.push(Bi(w,_,T));return S.push(m),et(S)}).catch(w=>fi(w,8)?w:Promise.reject(w))}function dt(_,T,S){a.list().forEach(U=>le(()=>U(_,T,S)))}function St(_,T,S,U,D){const p=R(_,T);if(p)return p;const m=T===Vi,w=ds?history.state:{};S&&(U||m?r.replace(_.fullPath,Ne({scroll:m&&w&&w.scroll},D)):r.push(_.fullPath,D)),l.value=_,wn(_,T,S,m),Cn()}let kt;function hi(){kt||(kt=r.listen((_,T,S)=>{if(!pr.listening)return;const U=b(_),D=$(U);if(D){J(Ne(D,{replace:!0}),U).catch(Zo);return}c=U;const p=l.value;ds&&_4(hw(p.fullPath,S.delta),mh()),Ae(U,p).catch(m=>fi(m,12)?m:fi(m,2)?(J(m.to,U).then(w=>{fi(w,20)&&!S.delta&&S.type===Na.pop&&r.go(-1,!1)}).catch(Zo),Promise.reject()):(S.delta&&r.go(-S.delta,!1),Te(m,U,p))).then(m=>{m=m||St(U,p,!1),m&&(S.delta&&!fi(m,8)?r.go(-S.delta,!1):S.type===Na.pop&&fi(m,20)&&r.go(-1,!1)),dt(U,p,m)}).catch(Zo)}))}let rn=Ro(),we=Ro(),De;function Te(_,T,S){Cn(_);const U=we.list();return U.length?U.forEach(D=>D(_,T,S)):console.error(_),Promise.reject(_)}function An(){return De&&l.value!==Vi?Promise.resolve():new Promise((_,T)=>{rn.add([_,T])})}function Cn(_){return De||(De=!_,hi(),rn.list().forEach(([T,S])=>_?S(_):T()),rn.reset()),_}function wn(_,T,S,U){const{scrollBehavior:D}=t;if(!ds||!D)return Promise.resolve();const p=!S&&y4(hw(_.fullPath,0))||(U||!S)&&history.state&&history.state.scroll||null;return kp().then(()=>D(_,T,p)).then(m=>m&&m4(m)).catch(m=>Te(m,_,T))}const wt=_=>r.go(_);let di;const Mi=new Set,pr={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:y,resolve:b,options:t,push:E,replace:x,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:An,install(_){const T=this;_.component("RouterLink",nz),_.component("RouterView",DC),_.config.globalProperties.$router=T,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>H(l)}),ds&&!di&&l.value===Vi&&(di=!0,E(r.location).catch(D=>{}));const S={};for(const D in Vi)Object.defineProperty(S,D,{get:()=>l.value[D],enumerable:!0});_.provide(_h,T),_.provide(Lm,db(S)),_.provide(Qf,l);const U=_.unmount;Mi.add(_),_.unmount=function(){Mi.delete(_),Mi.size<1&&(c=Vi,kt&&kt(),kt=null,l.value=Vi,di=!1,De=!1),U()}}};function et(_){return _.reduce((T,S)=>T.then(()=>le(S)),Promise.resolve())}return pr}function az(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ws(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ws(c,l))||r.push(l))}return[n,i,r]}function lz(){return an(_h)}function cz(){return an(Lm)}const NC=x2("settings",()=>({installEvent:Fe()})),uz=Rt({__name:"App",setup(t){const e=Xr(),n=lz(),i=cz();Ii(e,async(s,o)=>{if(!s&&o&&i.meta.requiresAuth)return n.push({name:"login"});if(s&&typeof i.query.redirect=="string")return n.push(i.query.redirect)}),window.addEventListener("beforeinstallprompt",s=>{NC().installEvent=s});async function r(){if(await Notification.requestPermission()==="granted")return await i4(bC,{vapidKey:"BIa7TvICWrE9yLt4EBWFWTTjcoZryJuFtU8JbGpFPVauTyQCBzPYF72F1T7GpTXWccN-fDJxrdLnxtMvWQGy0f4"})}return Ii(e,async(s,o)=>{if(s){const a=Pn(on,`users/${s.uid}`),l=await Em(a,{once:!0}).promise.value;if(l&&!l.fcmToken){const c=await r();c&&SA(a,{fcmToken:c})}}}),(s,o)=>(X(),si(H(DC)))}}),hz="modulepreload",dz=function(t){return"/"+t},Aw={},fz=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=dz(s),s in Aw)return;Aw[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":hz,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function Q(t,e,n,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=t=>e=>typeof e=="function"?((n,i)=>(customElements.define(n,i),i))(t,e):((n,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pz=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},gz=(t,e,n)=>{e.constructor.createProperty(n,t)};function Le(t){return(e,n)=>n!==void 0?gz(t,e,n):pz(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fr(t){return Le({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const OC=({finisher:t,descriptor:e})=>(n,i)=>{var r;if(i===void 0){const s=(r=n.originalKey)!==null&&r!==void 0?r:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(a){t(a,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,i,e(i)),t==null||t(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bn(t,e){return OC({descriptor:n=>{const i={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof n=="symbol"?Symbol():"__"+n;i.get=function(){var s,o;return this[r]===void 0&&(this[r]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Id;const mz=((Id=window.HTMLSlotElement)===null||Id===void 0?void 0:Id.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function _z(t){const{slot:e,selector:n}=t??{};return OC({descriptor:i=>({get(){var r;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s),a=o!=null?mz(o,t):[];return n?a.filter(l=>l.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cc=window,$m=cc.ShadowRoot&&(cc.ShadyCSS===void 0||cc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vm=Symbol(),Cw=new WeakMap;let MC=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==Vm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if($m&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=Cw.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Cw.set(n,e))}return e}toString(){return this.cssText}};const yz=t=>new MC(typeof t=="string"?t:t+"",void 0,Vm),nn=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new MC(n,t,Vm)},vz=(t,e)=>{$m?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),r=cc.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)})},Rw=$m?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return yz(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Td;const ru=window,Sw=ru.trustedTypes,wz=Sw?Sw.emptyScript:"",kw=ru.reactiveElementPolyfillSupport,Yf={toAttribute(t,e){switch(e){case Boolean:t=t?wz:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},LC=(t,e)=>e!==t&&(e==e||t==t),Ad={attribute:!0,type:String,converter:Yf,reflect:!1,hasChanged:LC},Xf="finalized";let fs=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const r=this._$Ep(i,n);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,n=Ad){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,n);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(r){const s=this[e];this[n]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ad}static finalize(){if(this.hasOwnProperty(Xf))return!1;this[Xf]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const r of i)this.createProperty(r,n[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(Rw(r))}else e!==void 0&&n.push(Rw(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return vz(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=Ad){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Yf).toAttribute(n,i.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=r.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Yf;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||LC)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw n=!1,this._$Ek(),r}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};fs[Xf]=!0,fs.elementProperties=new Map,fs.elementStyles=[],fs.shadowRootOptions={mode:"open"},kw==null||kw({ReactiveElement:fs}),((Td=ru.reactiveElementVersions)!==null&&Td!==void 0?Td:ru.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cd;const su=window,Gs=su.trustedTypes,Pw=Gs?Gs.createPolicy("lit-html",{createHTML:t=>t}):void 0,Jf="$lit$",qi=`lit$${(Math.random()+"").slice(9)}$`,$C="?"+qi,bz=`<${$C}>`,Kr=document,Oa=()=>Kr.createComment(""),Ma=t=>t===null||typeof t!="object"&&typeof t!="function",VC=Array.isArray,Ez=t=>VC(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Rd=`[ 	
\f\r]`,So=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xw=/-->/g,Dw=/>/g,_r=RegExp(`>|${Rd}(?:([^\\s"'>=/]+)(${Rd}*=${Rd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nw=/'/g,Ow=/"/g,FC=/^(?:script|style|textarea|title)$/i,Iz=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Lt=Iz(1),Gr=Symbol.for("lit-noChange"),de=Symbol.for("lit-nothing"),Mw=new WeakMap,Sr=Kr.createTreeWalker(Kr,129,null,!1);function UC(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pw!==void 0?Pw.createHTML(e):e}const Tz=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":"",o=So;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===So?u[1]==="!--"?o=xw:u[1]!==void 0?o=Dw:u[2]!==void 0?(FC.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=_r):u[3]!==void 0&&(o=_r):o===_r?u[0]===">"?(o=r??So,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?_r:u[3]==='"'?Ow:Nw):o===Ow||o===Nw?o=_r:o===xw||o===Dw?o=So:(o=_r,r=void 0);const f=o===_r&&t[a+1].startsWith("/>")?" ":"";s+=o===So?l+bz:h>=0?(i.push(c),l.slice(0,h)+Jf+l.slice(h)+qi+f):l+qi+(h===-2?(i.push(void 0),a):f)}return[UC(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class La{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[c,u]=Tz(e,n);if(this.el=La.createElement(c,i),Sr.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(r=Sr.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes()){const h=[];for(const d of r.getAttributeNames())if(d.endsWith(Jf)||d.startsWith(qi)){const f=u[o++];if(h.push(d),f!==void 0){const g=r.getAttribute(f.toLowerCase()+Jf).split(qi),y=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:y[2],strings:g,ctor:y[1]==="."?Cz:y[1]==="?"?Sz:y[1]==="@"?kz:yh})}else l.push({type:6,index:s})}for(const d of h)r.removeAttribute(d)}if(FC.test(r.tagName)){const h=r.textContent.split(qi),d=h.length-1;if(d>0){r.textContent=Gs?Gs.emptyScript:"";for(let f=0;f<d;f++)r.append(h[f],Oa()),Sr.nextNode(),l.push({type:2,index:++s});r.append(h[d],Oa())}}}else if(r.nodeType===8)if(r.data===$C)l.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(qi,h+1))!==-1;)l.push({type:7,index:s}),h+=qi.length-1}s++}}static createElement(e,n){const i=Kr.createElement("template");return i.innerHTML=e,i}}function Qs(t,e,n=t,i){var r,s,o,a;if(e===Gr)return e;let l=i!==void 0?(r=n._$Co)===null||r===void 0?void 0:r[i]:n._$Cl;const c=Ma(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,i)),i!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:n._$Cl=l),l!==void 0&&(e=Qs(t,l._$AS(t,e.values),l,i)),e}class Az{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:r}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Kr).importNode(i,!0);Sr.currentNode=s;let o=Sr.nextNode(),a=0,l=0,c=r[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new wl(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new Pz(o,this,e)),this._$AV.push(u),c=r[++l]}a!==(c==null?void 0:c.index)&&(o=Sr.nextNode(),a++)}return Sr.currentNode=Kr,s}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class wl{constructor(e,n,i,r){var s;this.type=2,this._$AH=de,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Qs(this,e,n),Ma(e)?e===de||e==null||e===""?(this._$AH!==de&&this._$AR(),this._$AH=de):e!==this._$AH&&e!==Gr&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ez(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==de&&Ma(this._$AH)?this._$AA.nextSibling.data=e:this.$(Kr.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=La.createElement(UC(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(i);else{const o=new Az(s,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let n=Mw.get(e.strings);return n===void 0&&Mw.set(e.strings,n=new La(e)),n}T(e){VC(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new wl(this.k(Oa()),this.k(Oa()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class yh{constructor(e,n,i,r,s){this.type=1,this._$AH=de,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=de}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=Qs(this,e,n,0),o=!Ma(e)||e!==this._$AH&&e!==Gr,o&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=Qs(this,a[i+l],n,l),c===Gr&&(c=this._$AH[l]),o||(o=!Ma(c)||c!==this._$AH[l]),c===de?e=de:e!==de&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!r&&this.j(e)}j(e){e===de?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Cz=class extends yh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===de?void 0:e}};const Rz=Gs?Gs.emptyScript:"";let Sz=class extends yh{constructor(){super(...arguments),this.type=4}j(e){e&&e!==de?this.element.setAttribute(this.name,Rz):this.element.removeAttribute(this.name)}};class kz extends yh{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){var i;if((e=(i=Qs(this,e,n,0))!==null&&i!==void 0?i:de)===Gr)return;const r=this._$AH,s=e===de&&r!==de||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==de&&(r===de||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Pz{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Qs(this,e)}}const Lw=su.litHtmlPolyfillSupport;Lw==null||Lw(La,wl),((Cd=su.litHtmlVersions)!==null&&Cd!==void 0?Cd:su.litHtmlVersions=[]).push("2.8.0");const xz=(t,e,n)=>{var i,r;const s=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let o=s._$litPart$;if(o===void 0){const a=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=o=new wl(e.insertBefore(Oa(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sd,kd;let cn=class extends fs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xz(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Gr}};cn.finalized=!0,cn._$litElement$=!0,(Sd=globalThis.litElementHydrateSupport)===null||Sd===void 0||Sd.call(globalThis,{LitElement:cn});const $w=globalThis.litElementPolyfillSupport;$w==null||$w({LitElement:cn});((kd=globalThis.litElementVersions)!==null&&kd!==void 0?kd:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Dz extends cn{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Lt`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Nz=nn`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zf=class extends Dz{};Zf.styles=[Nz];Zf=Q([Un("md-elevation")],Zf);const BC=t=>(Ba("data-v-eabfc1cc"),t=t(),za(),t),Oz=BC(()=>B("md-elevation",null,null,-1)),Mz={class:"title headline-large"},Lz={class:"content body-large"},$z={key:1,class:"card"},Vz=BC(()=>B("md-elevation",null,null,-1)),Fz={class:"title headline-large"},Uz={class:"content body-large"},Bz=Rt({__name:"ListItem",props:{path:{type:String,required:!1}},setup(t){return(e,n)=>{const i=ja("RouterLink");return t.path?(X(),si(i,{key:0,to:t.path,class:"route card"},{default:Xt(()=>[B("div",null,[Oz,B("div",Mz,[Hn(e.$slots,"title",{},void 0,!0)]),B("div",Lz,[Hn(e.$slots,"content",{},void 0,!0)])])]),_:3},8,["to"])):(X(),se("div",$z,[Vz,B("div",Fz,[Hn(e.$slots,"title",{},void 0,!0)]),B("div",Uz,[Hn(e.$slots,"content",{},void 0,!0)])]))}}});const bl=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Pd=bl(Bz,[["__scopeId","data-v-eabfc1cc"]]),zz=t=>(Ba("data-v-27e31cd3"),t=t(),za(),t),jz=["src"],Hz=zz(()=>B("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),qz=Rt({__name:"AccountImage",setup(t){var i;const e=Xr(),n=Fe((i=e.value)==null?void 0:i.providerData[0].photoURL);return(r,s)=>{const o=ja("RouterLink");return X(),se("div",null,[H(e)?(X(),si(o,{key:0,to:"/myAccount"},{default:Xt(()=>[B("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,jz)]),_:1})):(X(),si(o,{key:1,to:"/myAccount"},{default:Xt(()=>[Hz]),_:1}))])}}});const Wz=bl(qz,[["__scopeId","data-v-27e31cd3"]]),$a=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],Kz="read_rules_event",Vw="start_book_event",Gz="complete_book_event";/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Qz extends cn{render(){return Lt`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Yz=nn`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ep=class extends Qz{};ep.styles=[Yz];ep=Q([Un("md-icon")],ep);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zC=Symbol("attachableController");let uc;uc=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[zC])==null||e.hostConnected()});class jC{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[zC]=this,uc==null||uc.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xz=["focusin","focusout","pointerdown"];class Fm extends cn{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new jC(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var n;if(!e[Fw]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Fw]=!0}}onControlChange(e,n){for(const i of Xz)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}Q([Le({type:Boolean,reflect:!0})],Fm.prototype,"visible",void 0);Q([Le({type:Boolean,reflect:!0})],Fm.prototype,"inward",void 0);const Fw=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Jz=nn`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let tp=class extends Fm{};tp.styles=[Jz];tp=Q([Un("md-focus-ring")],tp);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zz={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e9=t=>(...e)=>({_$litDirective$:t,values:e});let t9=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const El=e9(class extends t9{constructor(t){var e;if(super(t),t.type!==Zz.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const r=t.element.classList;this.it.forEach(s=>{s in e||(r.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((i=this.nt)===null||i===void 0)&&i.has(s)||(o?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return Gr}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Va={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const n9=450,Uw=225,i9=.2,r9=10,s9=75,o9=.35,a9="::after",l9="forwards";var Yt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(Yt||(Yt={}));const c9=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],u9=150;class Il extends cn{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Yt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new jC(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Lt`<div class="surface ${El(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Yt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===Yt.HOLDING){this.state=Yt.WAITING_FOR_CLICK;return}if(this.state===Yt.TOUCH_DELAY){this.state=Yt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=Yt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Yt.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,u9)}),this.state===Yt.TOUCH_DELAY&&(this.state=Yt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===Yt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===Yt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),i=Math.max(e,n),r=Math.max(o9*i,s9),s=Math.floor(i*i9),a=Math.sqrt(n**2+e**2)+r9;this.initialSize=s,this.rippleScale=`${(a+r)/s}`,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:i}=window,{left:r,top:s}=this.getBoundingClientRect(),o=n+r,a=i+s,{pageX:l,pageY:c}=e;return{x:l-o,y:c-a}}getTranslationCoordinates(e){const{height:n,width:i}=this.getBoundingClientRect(),r={x:(i-this.initialSize)/2,y:(n-this.initialSize)/2};let s;return e instanceof PointerEvent?s=this.getNormalizedPointerEventCoords(e):s={x:i/2,y:n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:r}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:i}=this.getTranslationCoordinates(e),r=`${n.x}px, ${n.y}px`,s=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:a9,duration:n9,easing:Va.STANDARD,fill:l9})}async endPressAnimation(){this.state=Yt.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=Uw){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,Uw-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:i,left:r,bottom:s,right:o}=this.getBoundingClientRect();return e>=r&&e<=o&&n>=i&&n<=s}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const i of c9)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}}Q([Le({type:Boolean,reflect:!0})],Il.prototype,"disabled",void 0);Q([fr()],Il.prototype,"hovered",void 0);Q([fr()],Il.prototype,"pressed",void 0);Q([Bn(".surface")],Il.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const h9=nn`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let np=class extends Il{};np.styles=[h9];np=Q([Un("md-ripple")],np);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const HC=Symbol.for(""),d9=t=>{if((t==null?void 0:t.r)===HC)return t==null?void 0:t._$litStatic$},ou=(t,...e)=>({_$litStatic$:e.reduce((n,i,r)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:HC}),Bw=new Map,f9=t=>(e,...n)=>{const i=n.length;let r,s;const o=[],a=[];let l,c=0,u=!1;for(;c<i;){for(l=e[c];c<i&&(s=n[c],(r=d9(s))!==void 0);)l+=r+e[++c],u=!0;c!==i&&a.push(s),o.push(l),c++}if(c===i&&o.push(e[i]),u){const h=o.join("$$lit$$");(e=Bw.get(h))===void 0&&(o.raw=o,Bw.set(h,e=o)),n=a}return t(e,...n)},qC=f9(Lt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const vh=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];vh.map(Um);function Um(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function p9(t,{focusable:e}={}){if(e!==!1&&t.addInitializer(n=>{n.addController({hostConnected(){n.hasAttribute("tabindex")||(n.tabIndex=0)}})}),!("role"in Element.prototype)){for(const n of vh)t.createProperty(n,{attribute:Um(n),reflect:!0});t.createProperty("role",{reflect:!0})}}function g9(t,e){if(m9(e))return e;if(!("role"in t))throw new Error("Missing setupHostAria()");let n=[],i=!1;for(const s of vh){let o=null;Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get(){return i?t[s]:o},set(a){const l=()=>{t[s]=a};if(!i){o=a,n.push(l);return}l()}})}let r=null;return Object.defineProperty(e,"role",{enumerable:!0,configurable:!0,get(){return i?t.getAttribute("role"):r},set(s){const o=()=>{s===null?t.removeAttribute("role"):t.setAttribute("role",s)};if(!i){r=s,n.push(o);return}o()}}),t.addController({hostConnected(){if(!i){i=!0;for(const s of n)s();n=[]}}}),e}function m9(t){return"role"in t}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Bm(t){for(const e of vh)t.createProperty(e,{attribute:Um(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ys=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function WC(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async i=>{const{type:r,[Ys]:s}=n,{form:o}=s;if(!(!o||r==="button")&&(await new Promise(a=>{a()}),!i.defaultPrevented)){if(r==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),s.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function zw(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var KC;class tn extends cn{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=zw(this,this.flipIconInRtl),this[KC]=this.attachInternals()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Ys].form}get labels(){return this[Ys].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?ou`div`:ou`button`,{ariaLabel:n,ariaHasPopup:i,ariaExpanded:r}=this,s=n&&this.ariaLabelSelected,o=this.toggle?this.selected:de;let a=de;return this.href||(a=s&&this.selected?this.ariaLabelSelected:n),qC`<${e}
        class="icon-button ${El(this.getRenderClasses())}"
        id="button"
        aria-label="${a||de}"
        aria-haspopup="${!this.href&&i||de}"
        aria-expanded="${!this.href&&r||de}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?de:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():de}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Lt`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||de}"
        aria-label="${e||de}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Lt`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Lt`<span class="icon icon--selected"><slot name="selected"><slot></slot></slot></span>`}renderTouchTarget(){return Lt`<span class="touch"></span>`}renderFocusRing(){return Lt`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Lt`<md-ripple
      for=${this.href?"link":de}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=zw(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}KC=Ys;Bm(tn),WC(tn);tn.formAssociated=!0;tn.shadowRootOptions={mode:"open",delegatesFocus:!0};Q([Le({type:Boolean,reflect:!0})],tn.prototype,"disabled",void 0);Q([Le({type:Boolean,attribute:"flip-icon-in-rtl"})],tn.prototype,"flipIconInRtl",void 0);Q([Le()],tn.prototype,"href",void 0);Q([Le()],tn.prototype,"target",void 0);Q([Le({attribute:"aria-label-selected"})],tn.prototype,"ariaLabelSelected",void 0);Q([Le({type:Boolean})],tn.prototype,"toggle",void 0);Q([Le({type:Boolean,reflect:!0})],tn.prototype,"selected",void 0);Q([Le()],tn.prototype,"type",void 0);Q([Le()],tn.prototype,"value",void 0);Q([fr()],tn.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const _9=nn`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const y9=nn`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-size: 0;height:var(--_state-layer-size);width:var(--_state-layer-size)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ip=class extends tn{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};ip.styles=[_9,y9];ip=Q([Un("md-icon-button")],ip);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wh extends cn{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}Q([Le({type:Boolean,reflect:!0})],wh.prototype,"inset",void 0);Q([Le({type:Boolean,reflect:!0,attribute:"inset-start"})],wh.prototype,"insetStart",void 0);Q([Le({type:Boolean,reflect:!0,attribute:"inset-end"})],wh.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const v9=nn`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let rp=class extends wh{};rp.styles=[v9];rp=Q([Un("md-divider")],rp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function w9(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),i=t.dispatchEvent(n);return i||e.preventDefault(),i}function b9(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function GC(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!E9(t)}function E9(t){const e=sp;return e&&(t.preventDefault(),t.stopImmediatePropagation()),I9(),e}let sp=!1;async function I9(){sp=!0,await null,sp=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const T9={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Va.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Va.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},A9={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Va.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Va.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class at extends cn{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>T9,this.getCloseAnimation=()=>A9,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var i;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(i=this.querySelector("[autofocus]"))==null||i.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const n=this.dialog;if(!n.open||this.isOpening){this.open=!1;return}const i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:i}=this;return Lt`
      <div class="scrim"></div>
      <dialog
        class=${El(n)}
        aria-label=${i||de}
        aria-labelledby=${this.hasHeadline?"headline":de}
        role=${this.type==="alert"?"alertdialog":de}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||de}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||de}>
              <slot name="headline"
                  @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions"
              @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:i}=e;n.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!w9(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:i,container:r,headline:s,content:o,actions:a}=this;if(!n||!i||!r||!s||!o||!a)return;const{container:l,dialog:c,scrim:u,headline:h,content:d,actions:f}=e,g=[[n,c??[]],[i,u??[]],[r,l??[]],[s,h??[]],[o,d??[]],[a,f??[]]],y=[];for(const[v,b]of g)for(const I of b)y.push(v.animate(...I));await Promise.all(y.map(v=>v.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:i}=e;n===this.topAnchor&&(this.isAtScrollTop=i),n===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}}Bm(at);at.shadowRootOptions={...cn.shadowRootOptions,delegatesFocus:!0};Q([Le({type:Boolean})],at.prototype,"open",null);Q([Le({attribute:!1})],at.prototype,"returnValue",void 0);Q([Le()],at.prototype,"type",void 0);Q([Bn("dialog")],at.prototype,"dialog",void 0);Q([Bn(".scrim")],at.prototype,"scrim",void 0);Q([Bn(".container")],at.prototype,"container",void 0);Q([Bn(".headline")],at.prototype,"headline",void 0);Q([Bn(".content")],at.prototype,"content",void 0);Q([Bn(".actions")],at.prototype,"actions",void 0);Q([fr()],at.prototype,"isAtScrollTop",void 0);Q([fr()],at.prototype,"isAtScrollBottom",void 0);Q([Bn(".scroller")],at.prototype,"scroller",void 0);Q([Bn(".top.anchor")],at.prototype,"topAnchor",void 0);Q([Bn(".bottom.anchor")],at.prototype,"bottomAnchor",void 0);Q([fr()],at.prototype,"hasHeadline",void 0);Q([fr()],at.prototype,"hasActions",void 0);Q([fr()],at.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const C9=nn`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-font: var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));--_headline-line-height: var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));--_headline-size: var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));--_headline-weight: var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));--_supporting-text-size: var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));--_supporting-text-weight: var(--md-dialog-supporting-text-weight, var(--md-ref-typeface-weight-regular, 400));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font-family:var(--_headline-font);font-size:var(--_headline-size);line-height:var(--_headline-line-height);font-weight:var(--_headline-weight);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);height:min-content;position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let op=class extends at{};op.styles=[C9];op=Q([Un("md-dialog")],op);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const zm=nn`:host{display:inline-flex;height:var(--_container-height);outline:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var QC;class Gt extends cn{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Ys].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[QC]=this.attachInternals(),this.handleActivationClick=e=>{!GC(e)||!this.buttonElement||(this.focus(),b9(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?ou`a`:ou`button`,{ariaLabel:i,ariaHasPopup:r,ariaExpanded:s}=this;return qC`
      <${n}
        class="button ${El(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${i||de}"
        aria-haspopup="${r||de}"
        aria-expanded="${s||de}"
        href=${this.href||de}
        target=${this.target||de}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var i,r;const e=this.disabled&&!this.href,n=Lt`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return Lt`
      ${(i=this.renderElevation)==null?void 0:i.call(this)}
      ${(r=this.renderOutline)==null?void 0:r.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?de:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:de}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}QC=Ys;Bm(Gt),WC(Gt);Gt.formAssociated=!0;Gt.shadowRootOptions={mode:"open",delegatesFocus:!0};Q([Le({type:Boolean,reflect:!0})],Gt.prototype,"disabled",void 0);Q([Le()],Gt.prototype,"href",void 0);Q([Le()],Gt.prototype,"target",void 0);Q([Le({type:Boolean,attribute:"trailing-icon"})],Gt.prototype,"trailingIcon",void 0);Q([Le({type:Boolean,attribute:"has-icon"})],Gt.prototype,"hasIcon",void 0);Q([Le()],Gt.prototype,"type",void 0);Q([Le()],Gt.prototype,"value",void 0);Q([Bn(".button")],Gt.prototype,"buttonElement",void 0);Q([_z({slot:"icon",flatten:!0})],Gt.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class R9 extends Gt{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const S9=nn`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ap=class extends R9{};ap.styles=[zm,S9];ap=Q([Un("md-text-button")],ap);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class k9 extends Gt{renderOutline(){return Lt`<span class="button__outline"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const P9=nn`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let lp=class extends k9{};lp.styles=[zm,P9];lp=Q([Un("md-outlined-button")],lp);const bh=t=>(Ba("data-v-d890dc55"),t=t(),za(),t),x9={key:0,id:"user"},D9={class:"body-large admonitions"},N9={key:0,class:"section slots"},O9=bh(()=>B("div",{class:"label"}," Slot prenotati: ",-1)),M9={key:0},L9={key:1,class:"bookedSlots"},$9=bh(()=>B("md-elevation",null,null,-1)),V9=["onClick"],F9=bh(()=>B("md-icon",null,"close",-1)),U9=[F9],B9=["open"],z9=bh(()=>B("div",{slot:"headline"},"Conferma rimozione",-1)),j9={key:0,slot:"content",id:"form-id",method:"dialog"},H9={key:0},q9={slot:"actions"},W9={key:1,class:"section button"},K9=Rt({__name:"UserView",setup(t){var h,d;const e=Xr(),n=Em(Pn(on,`users/${(h=e.value)==null?void 0:h.uid}`)),i=LA(dA(on,`users/${(d=e.value)==null?void 0:d.uid}/availabilities`)),r=NC(),s=Fe(!1),o=Fe(),a=Ce(()=>i.value.filter(f=>f.date.toDate()>new Date));function l(f){s.value=!0,o.value=f}async function c(){var I,R;if(o.value===null)return;const f=(I=o.value)==null?void 0:I.id,g=(R=e.value)==null?void 0:R.uid,y=Pn(on,`users/${g}/availabilities/${f}`),v=Pn(on,`users/${g}`),b=Pn(on,`availabilities/${f}`);await $F(on,async E=>{var x;E.update(b,{players:FF(v)}),E.delete(y),((x=o.value)==null?void 0:x.date.seconds)-Math.round(new Date().getTime()/1e3)<24*60*60&&E.update(v,{admonitionCount:UF(1)})}),s.value=!1}function u(){r.installEvent,r.installEvent&&r.installEvent.prompt()}return(f,g)=>{const y=ja("RouterLink");return H(n)?(X(),se("div",x9,[B("div",null,[B("h2",null,Xe(H(n).username),1)]),B("div",null,[B("div",D9," Ammonizioni: "+Xe(H(n).admonitionCount),1)]),a.value.length>0?(X(),se("div",N9,[O9,H(n).admonitionCount>=2?(X(),se("div",M9," Anche se hai prenotato questi slot, avendo due o più ammonizioni non verranno presi in considerazione ")):rt("",!0),a.value.length>0?(X(),se("div",L9,[(X(!0),se(tt,null,_i(a.value,v=>(X(),se("div",{class:"bookedSlot",key:v.id},[$9,Nt(" "+Xe(v.date.toDate().getDate())+" "+Xe(H($a)[v.date.toDate().getMonth()])+" "+Xe(v.timeSlot)+" ",1),B("md-icon-button",{onClick:b=>l(v)},U9,8,V9),B("md-dialog",{class:"removeDialog",type:"alert",open:s.value},[z9,o.value?(X(),se("form",j9,[B("div",null," Sei sicuro di voler disdire per il "+Xe(o.value.date.toDate().getDate())+" "+Xe(H($a)[o.value.date.toDate().getMonth()])+" "+Xe(o.value.timeSlot)+"? ",1),o.value.date.seconds-Math.round(new Date().getTime()/1e3)<24*60*60?(X(),se("p",H9," Lo slot è fra meno di 24 ore. La disdetta ti costerà un'ammonizione ")):rt("",!0)])):rt("",!0),B("div",q9,[B("md-text-button",{form:"form-id",value:"cancel",onClick:g[0]||(g[0]=b=>s.value=!1)},"Annulla"),B("md-text-button",{form:"form-id",value:"delete",onClick:c},"Disdici")])],8,B9)]))),128))])):rt("",!0)])):rt("",!0),H(n).role==="admin"?(X(),se("div",W9,[Be(y,{to:"/adminPanel"},{default:Xt(()=>[Nt(" Admin ")]),_:1})])):rt("",!0),H(r)&&H(r).installEvent?(X(),se("div",{key:2,class:"section button",onClick:u}," Installa app ")):rt("",!0)])):rt("",!0)}}});const YC=bl(K9,[["__scopeId","data-v-d890dc55"]]),G9=t=>(Ba("data-v-a529ec71"),t=t(),za(),t),Q9={id:"home"},Y9=G9(()=>B("h1",{class:"title display-medium"},"Fonti Paintball",-1)),X9={class:"content"},J9=Rt({__name:"HomeView",setup(t){const e=Fe(window.innerWidth),n=()=>e.value=window.innerWidth;window.addEventListener("resize",n),xp(()=>window.removeEventListener("resize",n));const i=Xr();return(r,s)=>(X(),se("div",Q9,[e.value<900||!H(i)?(X(),si(Wz,{key:0})):rt("",!0),Y9,B("div",X9,[B("main",null,[Be(Pd,{path:"/rules"},{title:Xt(()=>[Nt(" Regolamento ")]),content:Xt(()=>[Nt(" Da leggere prima di prenotare. Scopri come, quando e quanto puoi farlo ")]),_:1}),Be(Pd,{path:"/availability"},{title:Xt(()=>[Nt(" Calendario ")]),content:Xt(()=>[Nt(" Inserisci qui la tua disponibilità prenotando uno slot ")]),_:1}),Be(Pd,null,{title:Xt(()=>[Nt(" Statistiche giocatori ")]),content:Xt(()=>[Nt(" Qui verranno raccolti i tuoi dati su vittorie, sconfitte e uccisioni (prossimamente...) ")]),_:1})]),e.value>900&&H(i)?(X(),si(YC,{key:0})):rt("",!0)])]))}});const Z9=bl(J9,[["__scopeId","data-v-a529ec71"]]);function jm(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let is=jm();function XC(t){is=t}const JC=/[&<>"']/,ej=new RegExp(JC.source,"g"),ZC=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,tj=new RegExp(ZC.source,"g"),nj={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jw=t=>nj[t];function xt(t,e){if(e){if(JC.test(t))return t.replace(ej,jw)}else if(ZC.test(t))return t.replace(tj,jw);return t}const ij=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function eR(t){return t.replace(ij,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const rj=/(^|[^\[])\^/g;function xe(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(i,r)=>(r=typeof r=="object"&&"source"in r?r.source:r,r=r.replace(rj,"$1"),t=t.replace(i,r),n),getRegex:()=>new RegExp(t,e)};return n}const sj=/[^\w:]/g,oj=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Hw(t,e,n){if(t){let i;try{i=decodeURIComponent(eR(n)).replace(sj,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!oj.test(n)&&(n=uj(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Gl={},aj=/^[^:]+:\/*[^/]*$/,lj=/^([^:]+:)[\s\S]*$/,cj=/^([^:]+:\/*[^/]*)[\s\S]*$/;function uj(t,e){Gl[" "+t]||(aj.test(t)?Gl[" "+t]=t+"/":Gl[" "+t]=hc(t,"/",!0)),t=Gl[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(lj,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(cj,"$1")+e:t+e}const au={exec:()=>null};function qw(t,e){const n=t.replace(/\|/g,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=n.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function hc(t,e,n){const i=t.length;if(i===0)return"";let r=0;for(;r<i;){const s=t.charAt(i-r-1);if(s===e&&!n)r++;else if(s!==e&&n)r++;else break}return t.slice(0,i-r)}function hj(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let i=0,r=0;for(;r<n;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])i++;else if(t[r]===e[1]&&(i--,i<0))return r;return-1}function dj(t,e){!t||t.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(t.sanitize||t.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(t.highlight||t.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),t.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),t.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),t.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),t.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(t.headerIds||t.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function Ww(t,e,n,i){const r=e.href,s=e.title?xt(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:n,href:r,title:s,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:n,href:r,title:s,text:xt(o)}}function fj(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const i=n[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[o]=s;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}class lu{constructor(e){Se(this,"options");Se(this,"rules");Se(this,"lexer");this.options=e||is}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:hc(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],r=fj(i,n[3]||"");return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:r}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(/#$/.test(i)){const r=hc(i,"#");(this.options.pedantic||!r||/ $/.test(r))&&(i=r.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const i=n[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(i);return this.lexer.state.top=r,{type:"blockquote",raw:n[0],tokens:s,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i,r,s,o,a,l,c,u,h,d,f,g,y=n[1].trim();const v=y.length>1,b={type:"list",raw:"",ordered:v,start:v?+y.slice(0,-1):"",loose:!1,items:[]};y=v?`\\d{1,9}\\${y.slice(-1)}`:`\\${y}`,this.options.pedantic&&(y=v?y:"[*+-]");const I=new RegExp(`^( {0,3}${y})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(n=I.exec(e))||this.rules.block.hr.test(e)));){if(i=n[0],e=e.substring(i.length),u=n[2].split(`
`,1)[0].replace(/^\t+/,E=>" ".repeat(3*E.length)),h=e.split(`
`,1)[0],this.options.pedantic?(o=2,f=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,f=u.slice(o),o+=n[1].length),l=!1,!u&&/^ *$/.test(h)&&(i+=h+`
`,e=e.substring(h.length+1),g=!0),!g){const E=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),$=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),J=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],h=d,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!($.test(h)||J.test(h)||E.test(h)||x.test(e)));){if(h.search(/[^ ]/)>=o||!h.trim())f+=`
`+h.slice(o);else{if(l||u.search(/[^ ]/)>=4||$.test(u)||J.test(u)||x.test(u))break;f+=`
`+h}!l&&!h.trim()&&(l=!0),i+=d+`
`,e=e.substring(d.length+1),u=h.slice(o)}}b.loose||(c?b.loose=!0:/\n *\n *$/.test(i)&&(c=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(f),r&&(s=r[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:i,task:!!r,checked:s,loose:!1,text:f}),b.raw+=i}b.items[b.items.length-1].raw=i.trimRight(),b.items[b.items.length-1].text=f.trimRight(),b.raw=b.raw.trimRight();const R=b.items.length;for(a=0;a<R;a++)if(this.lexer.state.top=!1,b.items[a].tokens=this.lexer.blockTokens(b.items[a].text,[]),!b.loose){const E=b.items[a].tokens.filter($=>$.type==="space"),x=E.length>0&&E.some($=>/\n.*\n/.test($.raw));b.loose=x}if(b.loose)for(a=0;a<R;a++)b.items[a].loose=!0;return b}}html(e){const n=this.rules.block.html.exec(e);if(n){const i={type:"html",block:!0,raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(n[0]):xt(n[0]),s=i;s.type="paragraph",s.text=r,s.tokens=this.lexer.inline(r)}return i}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(/\s+/g," "),r=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:r,title:s}}}table(e){const n=this.rules.block.table.exec(e);if(n){const i={type:"table",raw:n[0],header:qw(n[1]).map(r=>({text:r})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){let r=i.align.length,s,o,a,l;for(s=0;s<r;s++)/^ *-+: *$/.test(i.align[s])?i.align[s]="right":/^ *:-+: *$/.test(i.align[s])?i.align[s]="center":/^ *:-+ *$/.test(i.align[s])?i.align[s]="left":i.align[s]=null;for(r=i.rows.length,s=0;s<r;s++)i.rows[s]=qw(i.rows[s],i.header.length).map(c=>({text:c}));for(r=i.header.length,o=0;o<r;o++)i.header[o].tokens=this.lexer.inline(i.header[o].text);for(r=i.rows.length,o=0;o<r;o++)for(l=i.rows[o],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return i}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:xt(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):xt(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=hc(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=hj(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let r=n[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);o&&(r=o[1],s=o[3])}else s=n[3]?n[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(i)?r=r.slice(1):r=r.slice(1,-1)),Ww(n,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let r=(i[2]||i[1]).replace(/\s+/g," ");if(r=n[r.toLowerCase()],!r){const s=i[0].charAt(0);return{type:"text",raw:s,text:s}}return Ww(i,r,i[0],this.lexer)}}emStrong(e,n,i=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...r[0]].length-1;let a,l,c=o,u=0;const h=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+o);(r=h.exec(n))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const d=[...e].slice(0,o+r.index+l+1).join("");if(Math.min(o,l)%2){const g=d.slice(1,-1);return{type:"em",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}const f=d.slice(2,-2);return{type:"strong",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(/\n/g," ");const r=/[^ ]/.test(i),s=/^ /.test(i)&&/ $/.test(i);return r&&s&&(i=i.substring(1,i.length-1)),i=xt(i,!0),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const i=this.rules.inline.autolink.exec(e);if(i){let r,s;return i[2]==="@"?(r=xt(this.options.mangle?n(i[1]):i[1]),s="mailto:"+r):(r=xt(i[1]),s=r),{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(e,n){let i;if(i=this.rules.inline.url.exec(e)){let r,s;if(i[2]==="@")r=xt(this.options.mangle?n(i[0]):i[0]),s="mailto:"+r;else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(o!==i[0]);r=xt(i[0]),i[1]==="www."?s="http://"+i[0]:s=i[0]}return{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e,n){const i=this.rules.inline.text.exec(e);if(i){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):xt(i[0]):i[0]:r=xt(this.options.smartypants?n(i[0]):i[0]),{type:"text",raw:i[0],text:r}}}}const Z={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:au,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};Z._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;Z._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;Z.def=xe(Z.def).replace("label",Z._label).replace("title",Z._title).getRegex();Z.bullet=/(?:[*+-]|\d{1,9}[.)])/;Z.listItemStart=xe(/^( *)(bull) */).replace("bull",Z.bullet).getRegex();Z.list=xe(Z.list).replace(/bull/g,Z.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Z.def.source+")").getRegex();Z._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";Z._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;Z.html=xe(Z.html,"i").replace("comment",Z._comment).replace("tag",Z._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();Z.lheading=xe(Z.lheading).replace(/bull/g,Z.bullet).getRegex();Z.paragraph=xe(Z._paragraph).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex();Z.blockquote=xe(Z.blockquote).replace("paragraph",Z.paragraph).getRegex();Z.normal={...Z};Z.gfm={...Z.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};Z.gfm.table=xe(Z.gfm.table).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex();Z.gfm.paragraph=xe(Z._paragraph).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Z.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex();Z.pedantic={...Z.normal,html:xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Z._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:au,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:xe(Z.normal._paragraph).replace("hr",Z.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Z.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const z={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:au,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:au,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};z._punctuation="\\p{P}$+<=>`^|~";z.punctuation=xe(z.punctuation,"u").replace(/punctuation/g,z._punctuation).getRegex();z.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;z.anyPunctuation=/\\[punct]/g;z._escapes=/\\([punct])/g;z._comment=xe(Z._comment).replace("(?:-->|$)","-->").getRegex();z.emStrong.lDelim=xe(z.emStrong.lDelim,"u").replace(/punct/g,z._punctuation).getRegex();z.emStrong.rDelimAst=xe(z.emStrong.rDelimAst,"gu").replace(/punct/g,z._punctuation).getRegex();z.emStrong.rDelimUnd=xe(z.emStrong.rDelimUnd,"gu").replace(/punct/g,z._punctuation).getRegex();z.anyPunctuation=xe(z.anyPunctuation,"gu").replace(/punct/g,z._punctuation).getRegex();z._escapes=xe(z._escapes,"gu").replace(/punct/g,z._punctuation).getRegex();z._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;z._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;z.autolink=xe(z.autolink).replace("scheme",z._scheme).replace("email",z._email).getRegex();z._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;z.tag=xe(z.tag).replace("comment",z._comment).replace("attribute",z._attribute).getRegex();z._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;z._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;z._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;z.link=xe(z.link).replace("label",z._label).replace("href",z._href).replace("title",z._title).getRegex();z.reflink=xe(z.reflink).replace("label",z._label).replace("ref",Z._label).getRegex();z.nolink=xe(z.nolink).replace("ref",Z._label).getRegex();z.reflinkSearch=xe(z.reflinkSearch,"g").replace("reflink",z.reflink).replace("nolink",z.nolink).getRegex();z.normal={...z};z.pedantic={...z.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:xe(/^!?\[(label)\]\((.*?)\)/).replace("label",z._label).getRegex(),reflink:xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",z._label).getRegex()};z.gfm={...z.normal,escape:xe(z.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};z.gfm.url=xe(z.gfm.url,"i").replace("email",z.gfm._extended_email).getRegex();z.breaks={...z.gfm,br:xe(z.br).replace("{2,}","*").getRegex(),text:xe(z.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function pj(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Kw(t){let e="",n,i;const r=t.length;for(n=0;n<r;n++)i=t.charCodeAt(n),Math.random()>.5&&(i="x"+i.toString(16)),e+="&#"+i+";";return e}class Zn{constructor(e){Se(this,"tokens");Se(this,"options");Se(this,"state");Se(this,"tokenizer");Se(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||is,this.options.tokenizer=this.options.tokenizer||new lu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Z.normal,inline:z.normal};this.options.pedantic?(n.block=Z.pedantic,n.inline=z.pedantic):this.options.gfm&&(n.block=Z.gfm,this.options.breaks?n.inline=z.breaks:n.inline=z.gfm),this.tokenizer.rules=n}static get rules(){return{block:Z,inline:z}}static lex(e,n){return new Zn(n).lex(e)}static lexInline(e,n){return new Zn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let i,r,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){r=n[n.length-1],o&&r.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i),o=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&r.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i,r,s,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=n[n.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.autolink(e,Kw)){e=e.substring(i.raw.length),n.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,Kw))){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(s,pj)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,r=n[n.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class cu{constructor(e){Se(this,"options");this.options=e||is}code(e,n,i){const r=(n||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,r);s!=null&&s!==e&&(i=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+xt(r)+'">'+(i?e:xt(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:xt(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,i,r){if(this.options.headerIds){const s=this.options.headerPrefix+r.slug(i);return`<h${n} id="${s}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,i){const r=n?"ol":"ul",s=n&&i!==1?' start="'+i+'"':"";return"<"+r+s+`>
`+e+"</"+r+`>
`}listitem(e,n,i){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const i=n.header?"th":"td";return(n.align?`<${i} align="${n.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,i){if(e=Hw(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let r='<a href="'+e+'"';return n&&(r+=' title="'+n+'"'),r+=">"+i+"</a>",r}image(e,n,i){if(e=Hw(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let r=`<img src="${e}" alt="${i}"`;return n&&(r+=` title="${n}"`),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class Hm{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,i){return""+i}image(e,n,i){return""+i}br(){return""}}class qm{constructor(){Se(this,"seen");this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let i=e,r=0;if(this.seen.hasOwnProperty(i)){r=this.seen[e];do r++,i=e+"-"+r;while(this.seen.hasOwnProperty(i))}return n||(this.seen[e]=r,this.seen[i]=0),i}slug(e,n={}){const i=this.serialize(e);return this.getNextSafeSlug(i,n.dryrun)}}class ei{constructor(e){Se(this,"options");Se(this,"renderer");Se(this,"textRenderer");Se(this,"slugger");this.options=e||is,this.options.renderer=this.options.renderer||new cu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Hm,this.slugger=new qm}static parse(e,n){return new ei(n).parse(e)}static parseInline(e,n){return new ei(n).parseInline(e)}parse(e,n=!0){let i="",r,s,o,a,l,c,u,h,d,f,g,y,v,b,I,R,E,x,$;const J=e.length;for(r=0;r<J;r++){if(f=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&($=this.options.extensions.renderers[f.type].call({parser:this},f),$!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){i+=$||"";continue}switch(f.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{i+=this.renderer.heading(this.parseInline(f.tokens),f.depth,eR(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{i+=this.renderer.code(f.text,f.lang,!!f.escaped);continue}case"table":{for(h="",u="",a=f.header.length,s=0;s<a;s++)u+=this.renderer.tablecell(this.parseInline(f.header[s].tokens),{header:!0,align:f.align[s]});for(h+=this.renderer.tablerow(u),d="",a=f.rows.length,s=0;s<a;s++){for(c=f.rows[s],u="",l=c.length,o=0;o<l;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:f.align[o]});d+=this.renderer.tablerow(u)}i+=this.renderer.table(h,d);continue}case"blockquote":{d=this.parse(f.tokens),i+=this.renderer.blockquote(d);continue}case"list":{for(g=f.ordered,y=f.start,v=f.loose,a=f.items.length,d="",s=0;s<a;s++)I=f.items[s],R=I.checked,E=I.task,b="",I.task&&(x=this.renderer.checkbox(!!R),v?I.tokens.length>0&&I.tokens[0].type==="paragraph"?(I.tokens[0].text=x+" "+I.tokens[0].text,I.tokens[0].tokens&&I.tokens[0].tokens.length>0&&I.tokens[0].tokens[0].type==="text"&&(I.tokens[0].tokens[0].text=x+" "+I.tokens[0].tokens[0].text)):I.tokens.unshift({type:"text",text:x}):b+=x),b+=this.parse(I.tokens,v),d+=this.renderer.listitem(b,E,!!R);i+=this.renderer.list(d,g,y);continue}case"html":{i+=this.renderer.html(f.text,f.block);continue}case"paragraph":{i+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(d=f.tokens?this.parseInline(f.tokens):f.text;r+1<J&&e[r+1].type==="text";)f=e[++r],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);i+=n?this.renderer.paragraph(d):d;continue}default:{const Y='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(Y),"";throw new Error(Y)}}}return i}parseInline(e,n){n=n||this.renderer;let i="",r,s,o;const a=e.length;for(r=0;r<a;r++){if(s=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(o=this.options.extensions.renderers[s.type].call({parser:this},s),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){i+=o||"";continue}switch(s.type){case"escape":{i+=n.text(s.text);break}case"html":{i+=n.html(s.text);break}case"link":{i+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{i+=n.image(s.href,s.title,s.text);break}case"strong":{i+=n.strong(this.parseInline(s.tokens,n));break}case"em":{i+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{i+=n.codespan(s.text);break}case"br":{i+=n.br();break}case"del":{i+=n.del(this.parseInline(s.tokens,n));break}case"text":{i+=n.text(s.text);break}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}}class ta{constructor(e){Se(this,"options");this.options=e||is}preprocess(e){return e}postprocess(e){return e}}Se(ta,"passThroughHooks",new Set(["preprocess","postprocess"]));var Ua,cp,hu,tR;class gj{constructor(...e){Ah(this,Ua);Ah(this,hu);Se(this,"defaults",jm());Se(this,"options",this.setOptions);Se(this,"parse",Al(this,Ua,cp).call(this,Zn.lex,ei.parse));Se(this,"parseInline",Al(this,Ua,cp).call(this,Zn.lexInline,ei.parseInline));Se(this,"Parser",ei);Se(this,"parser",ei.parse);Se(this,"Renderer",cu);Se(this,"TextRenderer",Hm);Se(this,"Lexer",Zn);Se(this,"lexer",Zn.lex);Se(this,"Tokenizer",lu);Se(this,"Slugger",qm);Se(this,"Hooks",ta);this.use(...e)}walkTokens(e,n){let i=[];for(const r of e)switch(i=i.concat(n.call(this,r)),r.type){case"table":{for(const s of r.header)i=i.concat(this.walkTokens(s.tokens,n));for(const s of r.rows)for(const o of s)i=i.concat(this.walkTokens(o.tokens,n));break}case"list":{i=i.concat(this.walkTokens(r.items,n));break}default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{i=i.concat(this.walkTokens(r[s],n))}):r.tokens&&(i=i.concat(this.walkTokens(r.tokens,n)))}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=n.renderers[s.name];o?n.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[s.level]?n[s.level].unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),r.extensions=n),i.renderer){const s=this.defaults.renderer||new cu(this.defaults);for(const o in i.renderer){const a=i.renderer[o],l=o,c=s[l];s[l]=(...u)=>{let h=a.apply(s,u);return h===!1&&(h=c.apply(s,u)),h||""}}r.renderer=s}if(i.tokenizer){const s=this.defaults.tokenizer||new lu(this.defaults);for(const o in i.tokenizer){const a=i.tokenizer[o],l=o,c=s[l];s[l]=(...u)=>{let h=a.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}r.tokenizer=s}if(i.hooks){const s=this.defaults.hooks||new ta;for(const o in i.hooks){const a=i.hooks[o],l=o,c=s[l];ta.passThroughHooks.has(o)?s[l]=u=>{if(this.defaults.async)return Promise.resolve(a.call(s,u)).then(d=>c.call(s,d));const h=a.call(s,u);return c.call(s,h)}:s[l]=(...u)=>{let h=a.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}r.hooks=s}if(i.walkTokens){const s=this.defaults.walkTokens;r.walkTokens=function(o){let a=[];return a.push(i.walkTokens.call(this,o)),s&&(a=a.concat(s.call(this,o))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}Ua=new WeakSet,cp=function(e,n){return(i,r,s)=>{typeof r=="function"&&(s=r,r=null);const o={...r},a={...this.defaults,...o},l=Al(this,hu,tR).call(this,!!a.silent,!!a.async,s);if(typeof i>"u"||i===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(dj(a,s),a.hooks&&(a.hooks.options=a),s){const c=a.highlight;let u;try{a.hooks&&(i=a.hooks.preprocess(i)),u=e(i,a)}catch(f){return l(f)}const h=f=>{let g;if(!f)try{a.walkTokens&&this.walkTokens(u,a.walkTokens),g=n(u,a),a.hooks&&(g=a.hooks.postprocess(g))}catch(y){f=y}return a.highlight=c,f?l(f):s(null,g)};if(!c||c.length<3||(delete a.highlight,!u.length))return h();let d=0;this.walkTokens(u,f=>{f.type==="code"&&(d++,setTimeout(()=>{c(f.text,f.lang,(g,y)=>{if(g)return h(g);y!=null&&y!==f.text&&(f.text=y,f.escaped=!0),d--,d===0&&h()})},0))}),d===0&&h();return}if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(i):i).then(c=>e(c,a)).then(c=>a.walkTokens?Promise.all(this.walkTokens(c,a.walkTokens)).then(()=>c):c).then(c=>n(c,a)).then(c=>a.hooks?a.hooks.postprocess(c):c).catch(l);try{a.hooks&&(i=a.hooks.preprocess(i));const c=e(i,a);a.walkTokens&&this.walkTokens(c,a.walkTokens);let u=n(c,a);return a.hooks&&(u=a.hooks.postprocess(u)),u}catch(c){return l(c)}}},hu=new WeakSet,tR=function(e,n,i){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+xt(r.message+"",!0)+"</pre>";if(n)return Promise.resolve(s);if(i){i(null,s);return}return s}if(n)return Promise.reject(r);if(i){i(r);return}throw r}};const Qr=new gj;function Pe(t,e,n){return Qr.parse(t,e,n)}Pe.options=Pe.setOptions=function(t){return Qr.setOptions(t),Pe.defaults=Qr.defaults,XC(Pe.defaults),Pe};Pe.getDefaults=jm;Pe.defaults=is;Pe.use=function(...t){return Qr.use(...t),Pe.defaults=Qr.defaults,XC(Pe.defaults),Pe};Pe.walkTokens=function(t,e){return Qr.walkTokens(t,e)};Pe.parseInline=Qr.parseInline;Pe.Parser=ei;Pe.parser=ei.parse;Pe.Renderer=cu;Pe.TextRenderer=Hm;Pe.Lexer=Zn;Pe.lexer=Zn.lex;Pe.Tokenizer=lu;Pe.Slugger=qm;Pe.Hooks=ta;Pe.parse=Pe;Pe.options;Pe.setOptions;Pe.use;Pe.walkTokens;Pe.parseInline;ei.parse;Zn.lex;const uu=2,mj=`
# Cosa c'è di nuovo
- L'acquisto delle paintballs usate dal singolo giocatore sarà a carico del giocatore stesso al costo di **4,50€/caricatore** (circa 200 paintballs)
- Una volta acquistate le paintballs il giocatore può farne l'utilizzo che più ritiene opportuno e può quindi anche condividerle con altri giocatori

# Come funziona
Per prenotare basta aprire il calendario e prenotare uno degli slot già aperti o crearne uno nuovo cliccando su un giorno. Gli slot disponibili ogni giorno sono due:
- mattina: 8:00/10:30 circa
- pomeriggio: 17:00/19:30 circa

Si gioca se si raggiunge il numero necessario di giocatori. **Gli orari potrebbero variare e anche se si raggiunge il numero necessario di giocatori si potrebbe non giocare**. Per ogni slot prenotato i giocatori riceveranno una conferma e gli orari esatti nel caso in cui si giochi.

# Regolamento
- Ogni giocatore può segnarsi per un numero illimitato di slot. Ogni giorno ci sono 2 slot disponibili: uno per la mattina e uno per il pomeriggio
- Segnarsi per uno slot vuol dire dare la disponibilità a giocare a paintball per quel giorno e quella fascia oraria
- Ogni slot ha 3 posti disponibili
- La prenotazione dà la garanzia di giocare nel caso in cui venga raggiunto il numero necessario di giocatori (4) e nel caso in cui venga fatta una partita
- Raggiungere il numero necessario di giocatori non garantisce che venga fatta una partita
- I giocatori che prenotano uno slot e annullano e/o non si presentano vengono ammoniti
- Questo regolamento potrà subire variazioni. Sarà premura di chi lo accetta accertarsi di aver letto l'ultima rulesVersione
- I giocatori sono responsabili dell'attrezzatura offerta e, in caso di danno, del pagamento della riparazione/sostituzione dell'attrezzatura danneggiata
- L'acquisto delle paintballs usate dal singolo giocatore sarà a carico del giocatore stesso al costo di 4,50€/caricatore (circa 200 paintballs)
- Una volta acquistate le paintballs il giocatore può farne l'utilizzo che più ritiene opportuno e può quindi anche condividerle con altri giocatori

## Ammonizioni
Essere ammoniti implica avere delle limitazioni.

Il giocatore con **una ammonizione**:
- può prenotarsi ma se un giocatore senza ammonizione vuole prendere il suo slot avrà la precedenza. Da ciò deriva che il giocatore ammonito non ha la garanzia di giocare anche se ha prenotato

Il giocatore con **due ammonizioni**:
- non può prenotarsi
- verrà contattato solo come possibile sostituto
- ogni rifiuto costerà una ammonizione aggiuntiva
- i giocatori con meno ammonizioni hanno la precedenza sui giocatori con più ammonizioni

## Riduzione ammonizioni
- Ogni presenza eliminerà una ammonizione
- Il giocatore con una sola ammonizione dovrà partecipare a due partite per eliminare la restante ammonizione

**Le ammonizioni sono retroattive ed hanno perciò effetto anche sulle prenotazioni effettuate prima della ricezione delle ammonizioni.**

# Abbigliamento e protezioni
L'unica protezione fornita è un casco che copre interamente viso e orecchie. 
Sono consigliati pantaloni lunghi e scarpe da trekking (o comunque adatte al bosco). 
Altre protezioni utili potrebbero essere: ginocchiere, guanti, protezione per il collo, pettorina rinforzata.
<br />

**NB:** 
Questa webapp è stata creata in poco tempo, ci sono sicuramente bug e dimenticanze (che si spera verranno risolte in futuro). Qualunque cosa permessa dall'app ma non dal regolamento e qualunque altro utilizzo scorretto dell'app varrà due ammonizioni 

<br />
<br />

v. ${uu}
`,_j=["innerHTML"],yj=Rt({__name:"RulesView",setup(t){localStorage.setItem("lastRulesRead",uu.toString()),Jo(lc,Kz,{lastRulesRead:uu.toString()});const e=Pe(mj);return(n,i)=>(X(),se("div",{class:"output",innerHTML:H(e)},null,8,_j))}});/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const vj=nn`@media(forced-colors: active){:host{--md-radio-disabled-selected-icon-color: GrayText;--md-radio-disabled-selected-icon-opacity: 1;--md-radio-disabled-unselected-icon-color: GrayText;--md-radio-disabled-unselected-icon-opacity: 1;--md-radio-selected-icon-color: CanvasText;--md-radio-selected-hover-icon-color: CanvasText;--md-radio-selected-focus-icon-color: CanvasText;--md-radio-selected-pressed-icon-color: CanvasText;--md-radio-icon-color: CanvasText;--md-radio-hover-icon-color: CanvasText;--md-radio-focus-icon-color: CanvasText;--md-radio-pressed-icon-color: CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wj{constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=n=>{const i=n.key==="ArrowDown",r=n.key==="ArrowUp",s=n.key==="ArrowLeft",o=n.key==="ArrowRight";if(!s&&!o&&!i&&!r)return;const a=this.getNamedSiblings();if(!a.length)return;n.preventDefault();const c=getComputedStyle(this.host).direction==="rtl"?s||i:o||i,u=a.indexOf(this.host);let h=c?u+1:u-1;for(;h!==u;){h>=a.length?h=0:h<0&&(h=a.length-1);const d=a[h];if(d.hasAttribute("disabled")){c?h++:h--;continue}for(const f of a)f!==d&&(f.checked=!1,f.tabIndex=-1,f.blur());d.checked=!0,d.tabIndex=0,d.focus(),d.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.getNamedSiblings())e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.getNamedSiblings(),n=e.find(i=>i.checked);if(n||this.focused){const i=n||this.host;i.tabIndex=0;for(const r of e)r!==i&&(r.tabIndex=-1);return}for(const i of e)i.tabIndex=0}getNamedSiblings(){const e=this.host.getAttribute("name");return!e||!this.root?[]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var nR;const up=Symbol("checked");let bj=0;class mo extends cn{get checked(){return this[up]}set checked(e){const n=this.checked;if(n===e)return;this[up]=e;const i=String(e);this.internals.setFormValue(this.checked?this.value:null,i),this.requestUpdate("checked",n),this.selectionController.handleCheckedChange()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.maskId=`cutout${++bj}`,this[nR]=!1,this.disabled=!1,this.value="on",this.selectionController=new wj(this),this.internals=g9(this,this.attachInternals()),this.addController(this.selectionController),this.internals.role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return Lt`
      <div class="container ${El(e)}" aria-hidden="true">
        <md-ripple part="ripple" .control=${this}
            ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle class="outer circle" cx="10" cy="10" r="10"
              mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>

        <input
          id="input"
          type="radio"
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled}
        >
      </div>
    `}updated(){this.internals.ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(GC(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}}nR=up;p9(mo);mo.formAssociated=!0;Q([Le({type:Boolean})],mo.prototype,"checked",null);Q([Le({type:Boolean,reflect:!0})],mo.prototype,"disabled",void 0);Q([Le()],mo.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Ej=nn`:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_focus-icon-color: var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;height:var(--_icon-size);outline:none;position:relative;vertical-align:top;width:var(--_icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_icon-size))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.icon{fill:var(--_icon-color);inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--_selected-icon-color)}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_hover-icon-color)}:host(:focus-within) .icon{fill:var(--_focus-icon-color)}:host(:active) .icon{fill:var(--_pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host(:hover) .checked .icon{fill:var(--_selected-hover-icon-color)}:host(:focus-within) .checked .icon{fill:var(--_selected-focus-icon-color)}:host(:active) .checked .icon{fill:var(--_selected-pressed-icon-color)}:host([disabled]) .checked .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=radio-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let hp=class extends mo{};hp.styles=[Ej,vj];hp=Q([Un("md-radio")],hp);const Ij=B("span",{"aria-hidden":"true"},"Mattina",-1),Tj=B("span",{"aria-hidden":"true"},"Pomeriggio",-1),Aj={props:{date:{type:Date,required:!0}},methods:{onSelect(t){this.$emit("select",{timeSlot:t})}}},Cj=Rt({...Aj,__name:"BookSlot",setup(t){return(e,n)=>(X(),se("div",null,[B("h2",null,"Dai la disponibilità per il "+Xe(t.date.getDate())+" "+Xe(H($a)[t.date.getMonth()]),1),B("form",null,[B("label",null,[B("md-radio",{onChange:n[0]||(n[0]=i=>e.onSelect("mattina")),type:"radio",name:"time",value:"mattina","aria-label":"Mattina","touch-target":"wrapper",checked:""},null,32),Ij]),B("label",null,[B("md-radio",{onChange:n[1]||(n[1]=i=>e.onSelect("pomeriggio")),type:"radio",name:"time",value:"pomeriggio","aria-label":"Pomeriggio","touch-target":"wrapper"},null,32),Tj])])]))}});const Rj={props:{date:{type:Date,required:!0},time:{type:String,required:!0}}},Sj=Rt({...Rj,__name:"ExistingSlot",setup(t){return(e,n)=>(X(),se("div",null,[B("h2",null,"Dai la disponibilità per il "+Xe(t.date.getDate())+" "+Xe(H($a)[t.date.getMonth()])+" "+Xe(t.time),1)]))}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class kj extends Gt{renderElevation(){return Lt`<md-elevation></md-elevation>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Pj=nn`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const xj=nn`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let dp=class extends kj{};dp.styles=[zm,xj,Pj];dp=Q([Un("md-filled-tonal-button")],dp);var Dj=Object.defineProperty,Nj=(t,e,n)=>e in t?Dj(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ql=(t,e,n)=>(Nj(t,typeof e!="symbol"?e+"":e,n),n);const Tl=()=>Eh(new Date),Oj=(t,e,n)=>{switch(e){case"year":return new Date(t.getFullYear(),0);case"month":return new Date(t.getFullYear(),t.getMonth());case"week":return Wm(t,n);default:return t}},Mj=t=>[...Array(7)].map((e,n)=>_o(t,n)),_o=(t,e)=>new Date(t.getFullYear(),t.getMonth(),t.getDate()+e,t.getHours(),t.getMinutes(),t.getSeconds()),Wm=(t,e)=>_o(t,(e-t.getDay()-7)%-7),Lj=(t,e)=>_o(Wm(t,e),7),Fa=t=>new Date(t.getFullYear(),t.getMonth()),$j=t=>Math.ceil(t.getDate()/7),Vj=(t,e,n)=>new Date(t.getFullYear()+(e=="year"?n:0),t.getMonth()+(e=="month"?n:0),t.getDate()+(e=="week"?n*7:0)),Km=t=>("0"+String(t.getMonth()+1)).slice(-2),Gm=t=>("0"+String(t.getDate())).slice(-2),iR=t=>t.getFullYear()+"-"+Km(t),Fj=t=>iR(t)+"-"+Gm(t),Uj=t=>Km(t)+"-"+Gm(t),Bj=(t,e,n)=>{if(t.getHours()===0&&t.getMinutes()===0&&t.getSeconds()===0)return"";if(!Ih()){var i=new Date().getTimezoneOffset()*6e4;return new Date(t.getTime()-i).toISOString().slice(11,16)}return t.toLocaleTimeString(e,n)},zj=(t,e,n,i)=>{const r=t.getFullYear()===e.getFullYear(),s=sR(t,e),o=n!=="year"&&n!=="month";let a=[];return a.push(i[t.getMonth()]),o&&(a.push(" "),a.push(t.getDate())),r||(a.push(o?", ":" "),a.push(t.getFullYear())),!s||!r?(a.push(" – "),s||a.push(i[e.getMonth()]),o&&a.push(" ")):o&&a.push(" – "),o?(a.push(e.getDate()),a.push(", ")):a.push(" "),a.push(e.getFullYear()),a.join("")},rR=(t,e)=>{const n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return(n-i)/864e5},jj=(t,e)=>!!t&&!!e&&rR(t,e)===0,Hj=(t,e)=>!!t&&!!e&&t.getTime()===e.getTime(),sR=(t,e)=>!!t&&!!e&&t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth(),qj=t=>Fa(t)<Fa(Tl()),Wj=t=>Fa(t)>Fa(Tl()),Kj=t=>Eh(t)>Tl(),Gj=t=>Eh(t)<Tl(),Qj=t=>t.getMonth()!==_o(t,7).getMonth(),Yj=t=>t.getMonth()!==_o(t,1).getMonth(),oR=t=>{let e=[...Array(7)].map(n=>0);return t.split(/\D/,7).forEach((n,i)=>e[i]=Number(n)),e[1]--,new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6])},fp=t=>typeof t=="string"?oR(t):new Date(t),Eh=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},Xj=t=>t.substring(0,2),Ih=()=>typeof Intl<"u",Jj=(t,e)=>{if(!Ih())return[...Array(12)].map(i=>"");const n=new Intl.DateTimeFormat(t,{month:e});return[...Array(12)].map((i,r)=>n.format(new Date(2017,r,1)))},Zj=(t,e,n)=>{if(!Ih())return[...Array(7)].map(r=>"");const i=new Intl.DateTimeFormat(t,{weekday:e});return[...Array(7)].map((r,s)=>i.format(new Date(2017,0,(s+1+n)%7)))},eH=()=>typeof navigator>"u"?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).toLowerCase(),tH=(t,e)=>{const n=t.classes?[...t.classes]:[];return e&&n.push("isHovered"),{originalItem:t,startDate:fp(t.startDate),endDate:fp(t.endDate||t.startDate),classes:n,title:t.title||"Untitled",id:t.id,url:t.url,tooltip:t.tooltip??t.title}},q={addDays:_o,beginningOfMonth:Fa,beginningOfPeriod:Oj,beginningOfWeek:Wm,dateOnly:Eh,dayDiff:rR,daysOfWeek:Mj,endOfWeek:Lj,formattedPeriod:zj,formattedTime:Bj,fromIsoStringToLocalDate:oR,getDefaultBrowserLocale:eH,getFormattedMonthNames:Jj,getFormattedWeekdayNames:Zj,incrementPeriod:Vj,instanceOfMonth:$j,isFutureMonth:Wj,isInFuture:Kj,isInPast:Gj,isLastDayOfMonth:Yj,isLastInstanceOfMonth:Qj,isoMonthDay:Uj,isoYearMonth:iR,isoYearMonthDay:Fj,isPastMonth:qj,isSameDate:jj,isSameDateTime:Hj,isSameMonth:sR,languageCode:Xj,normalizeItem:tH,paddedDay:Gm,paddedMonth:Km,supportsIntl:Ih,today:Tl,toLocalDate:fp};class nH{constructor(){Ql(this,"currentDragItem"),Ql(this,"dateSelectionOrigin"),Ql(this,"currentHoveredItemId",""),Ql(this,"CalendarMath",q)}}const iH={class:"cv-header-days"},rH={key:0,class:"cv-weeknumber"},sH=["aria-multiselectable"],oH={key:0,class:"cv-weeknumber"},aH={class:"cv-weekdays"},lH=["draggable","aria-grabbed","aria-label","aria-selected","aria-dropeffect","onClick","onDragstart","onDrop","onDragover","onDragenter","onDragleave"],cH={class:"cv-day-number"},uH=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick","innerHTML"],hH=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick"],dH=Rt({__name:"CalendarView",props:{showDate:{default:void 0},displayPeriodUom:{default:"month"},displayPeriodCount:{default:1},displayWeekNumbers:{type:Boolean,default:!1},locale:{default:void 0},monthNameFormat:{default:"long"},weekdayNameFormat:{default:"short"},showTimes:{type:Boolean,default:!1},timeFormatOptions:{default:()=>({})},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},enableDateSelection:{type:Boolean,default:!1},selectionStart:{default:void 0},selectionEnd:{default:void 0},enableDragDrop:{type:Boolean,default:!1},startingDayOfWeek:{default:0},items:{default:()=>[]},dateClasses:{default:()=>({})},itemTop:{default:"1.4em"},itemContentHeight:{default:"1.4em"},itemBorderHeight:{default:"2px"},periodChangedCallback:{type:Function,default:void 0},currentPeriodLabel:{default:""},currentPeriodLabelIcons:{default:"⇤-⇥"},doEmitItemMouseEvents:{type:Boolean,default:!1},enableHtmlTitles:{type:Boolean,default:!0}},emits:["period-changed","click-date","click-item","item-mouseenter","item-mouseleave","drag-start","drag-over-date","drag-enter-date","drag-leave-date","drop-on-date","date-selection","date-selection-start","date-selection-finish"],setup(t,{emit:e}){const n=t,i=eo(new nH),r=Ce(()=>n.locale||q.getDefaultBrowserLocale()),s=Ce(()=>n.showDate?q.dateOnly(n.showDate):q.today()),o=Ce(()=>q.beginningOfPeriod(s.value,n.displayPeriodUom,n.startingDayOfWeek)),a=Ce(()=>q.addDays(q.incrementPeriod(o.value,n.displayPeriodUom,n.displayPeriodCount),-1)),l=Ce(()=>{const _=q.beginningOfWeek(q.beginningOfPeriod(o.value,"year",0),n.startingDayOfWeek),T=q.beginningOfWeek(o.value,n.startingDayOfWeek);return 1+Math.floor(q.dayDiff(_,T)/7)}),c=Ce(()=>q.beginningOfWeek(o.value,n.startingDayOfWeek)),u=Ce(()=>q.endOfWeek(a.value,n.startingDayOfWeek)),h=Ce(()=>{const _=Math.floor((q.dayDiff(c.value,u.value)+1)/7);return[...Array(_)].map((T,S)=>q.addDays(c.value,S*7))}),d=Ce(()=>q.getFormattedMonthNames(r.value,n.monthNameFormat)),f=Ce(()=>q.getFormattedWeekdayNames(r.value,n.weekdayNameFormat,n.startingDayOfWeek)),g=Ce(()=>n.items?n.items.map(_=>q.normalizeItem(_,_.id===i.currentHoveredItemId)):[]),y=Ce(()=>q.beginningOfPeriod(q.today(),n.displayPeriodUom,n.startingDayOfWeek)),v=Ce(()=>q.addDays(q.incrementPeriod(y.value,n.displayPeriodUom,n.displayPeriodCount),-1)),b=Ce(()=>q.formattedPeriod(o.value,a.value,n.displayPeriodUom,d.value)),I=Ce(()=>{const _=y.value,T=o.value;return n.currentPeriodLabel?n.currentPeriodLabel==="icons"?n.currentPeriodLabelIcons[Math.sign(_.getTime()-T.getTime())+1]:n.currentPeriodLabel:q.formattedPeriod(_,v.value,n.displayPeriodUom,d.value)}),R=Ce(()=>({previousYear:Y(-12),previousPeriod:Y(-1),nextPeriod:Y(1),previousFullPeriod:Y(-n.displayPeriodCount),nextFullPeriod:Y(n.displayPeriodCount),nextYear:Y(12),currentPeriod:y.value,currentPeriodLabel:I.value,periodStart:o.value,periodEnd:a.value,displayLocale:r.value,displayFirstDate:c.value,displayLastDate:u.value,monthNames:d.value,fixedItems:g.value,periodLabel:b.value})),E=Ce(()=>({periodStart:o,periodEnd:a,displayFirstDate:c,displayLastDate:u}));Ii(()=>E,_=>{n.periodChangedCallback&&(e("period-changed"),n.periodChangedCallback(_,"watch"))},{immediate:!0,deep:!0});const x=(_,T)=>{n.disablePast&&q.isInPast(_)||n.disableFuture&&q.isInFuture(_)||e("click-date",_,Cn(_,_),T)},$=(_,T)=>e("click-item",_,T),J=_=>"dow"+(_+n.startingDayOfWeek)%7,Y=_=>{const T=q.incrementPeriod(o.value,n.displayPeriodUom,_),S=q.incrementPeriod(T,n.displayPeriodUom,n.displayPeriodCount);return n.disablePast&&S<=q.today()||n.disableFuture&&T>q.today()?null:T},le=(_,T)=>{i.currentHoveredItemId=_.id,n.doEmitItemMouseEvents&&e("item-mouseenter",_,T)},Ae=(_,T)=>{i.currentHoveredItemId="",n.doEmitItemMouseEvents&&e("item-mouseleave",_,T)},dt=(_,T)=>{var S,U;if(!n.enableDateSelection)return!1;(S=T.dataTransfer)==null||S.setData("text",_.toString());let D=new Image;return D.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",(U=T.dataTransfer)==null||U.setDragImage(D,10,10),i.dateSelectionOrigin=_,e("date-selection-start",kt(_),T),!0},St=(_,T)=>{var S;return n.enableDragDrop?((S=T.dataTransfer)==null||S.setData("text",_.id),i.currentDragItem=_,i.dateSelectionOrigin=void 0,e("drag-start",_,T),!0):!1},kt=_=>_<=i.dateSelectionOrigin?[_,i.dateSelectionOrigin]:[i.dateSelectionOrigin,_],hi=(_,T)=>{n.enableDragDrop&&e("drag-over-date",i.currentDragItem,_,T)},rn=(_,T)=>{n.enableDateSelection&&i.dateSelectionOrigin&&e("date-selection",kt(_),T),n.enableDragDrop&&(e("drag-enter-date",i.currentDragItem,_,T),T.target.classList.add("draghover"))},we=(_,T)=>{n.enableDateSelection&&n.selectionStart||!n.enableDragDrop||(e("drag-leave-date",i.currentDragItem,_,T),T.target.classList.remove("draghover"))},De=(_,T)=>{if(n.enableDateSelection&&i.dateSelectionOrigin){e("date-selection-finish",kt(_),T);return}n.enableDragDrop&&(e("drop-on-date",i.currentDragItem,_,T),T.target.classList.remove("draghover"))},Te=(_,T)=>_.startDate<T.startDate?-1:T.startDate<_.startDate?1:_.endDate>T.endDate?-1:T.endDate>_.endDate?1:_.id<T.id?-1:1,An=_=>Cn(_,q.addDays(_,6)),Cn=(_,T)=>g.value.filter(S=>S.endDate>=_&&q.dateOnly(S.startDate)<=T,this).sort(Te),wn=_=>!!g.value.find(T=>T.endDate>=_&&q.dateOnly(T.startDate)<=_),wt=_=>!(!n.selectionStart||!n.selectionEnd||_<q.dateOnly(n.selectionStart)||_>q.dateOnly(n.selectionEnd)),di=_=>{const T=An(_),S=[],U=[[],[],[],[],[],[],[]];if(!T)return S;for(let D=0;D<T.length;D++){const p=Object.assign({},T[D],{classes:[...T[D].classes],itemRow:0}),m=p.startDate<_,w=m?0:q.dayDiff(_,p.startDate),A=Math.min(7-w,q.dayDiff(q.addDays(_,w),p.endDate)+1);m&&p.classes.push("continued"),q.dayDiff(_,p.endDate)>6&&p.classes.push("toBeContinued"),q.isInPast(p.endDate)&&p.classes.push("past"),p.originalItem.url&&p.classes.push("hasUrl");for(let C=0;C<7;C++)if(C===w){let P=0;for(;U[C][P];)P++;p.itemRow=P,U[C][P]=!0}else C<w+A&&(U[C][p.itemRow]=!0);p.classes.push(`offset${w}`),p.classes.push(`span${A}`),S.push(p)}return S},Mi=_=>{const T='<span class="startTime">'+q.formattedTime(_.startDate,r.value,n.timeFormatOptions)+"</span>";let S="";return q.isSameDateTime(_.startDate,_.endDate)||(S='<span class="endTime">'+q.formattedTime(_.endDate,r.value,n.timeFormatOptions)+"</span>"),T+S},pr=_=>n.showTimes?Mi(_)+" "+_.title:_.title,et=_=>{const T=_.itemRow,S=n.itemContentHeight,U=n.itemBorderHeight;return`calc(${n.itemTop} + ${T}*${S} + ${T}*${U})`};return(_,T)=>(X(),se("div",{"aria-label":"Calendar",class:mi(["cv-wrapper",`locale-${H(q).languageCode(H(r))}`,`locale-${H(r)}`,`y${H(o).getFullYear()}`,`m${H(q).paddedMonth(H(o))}`,`period-${t.displayPeriodUom}`,`periodCount-${t.displayPeriodCount}`,{past:H(q).isPastMonth(H(o)),future:H(q).isFutureMonth(H(o)),noIntl:!H(q).supportsIntl}])},[Hn(_.$slots,"header",{headerProps:H(R)}),B("div",iH,[t.displayWeekNumbers?(X(),se("div",rH)):rt("",!0),(X(!0),se(tt,null,_i(H(f),(S,U)=>Hn(_.$slots,"dayHeader",{index:J(U),label:S},()=>[(X(),se("div",{key:J(U),class:mi([J(U),"cv-header-day"])},Xe(S),3))])),256))]),B("div",{"aria-multiselectable":t.enableDateSelection,class:"cv-weeks"},[(X(!0),se(tt,null,_i(H(h),(S,U)=>(X(),se("div",{key:`${U}-week`,class:mi(["cv-week",`week${U+1}`,`ws${H(q).isoYearMonthDay(S)}`])},[t.displayWeekNumbers?(X(),se("div",oH,[Hn(_.$slots,"weekNumber",{date:S,numberInYear:H(l)+U,numberInPeriod:U+1},()=>[B("span",null,Xe(H(l)+U),1)])])):rt("",!0),B("div",aH,[(X(!0),se(tt,null,_i(H(q).daysOfWeek(S),(D,p)=>(X(),se("div",{key:J(p),draggable:t.enableDateSelection,class:mi(["cv-day",J(p),`d${H(q).isoYearMonthDay(D)}`,`d${H(q).isoMonthDay(D)}`,`d${H(q).paddedDay(D)}`,`instance${H(q).instanceOfMonth(D)}`,{today:H(q).isSameDate(D,H(q).today()),outsideOfMonth:!H(q).isSameMonth(D,H(s)),past:H(q).isInPast(D),future:H(q).isInFuture(D),last:H(q).isLastDayOfMonth(D),lastInstance:H(q).isLastInstanceOfMonth(D),hasItems:wn(D),selectionStart:H(q).isSameDate(D,t.selectionStart),selectionEnd:H(q).isSameDate(D,t.selectionEnd)},...t.dateClasses&&t.dateClasses[H(q).isoYearMonthDay(D)]||[]]),"aria-grabbed":t.enableDateSelection?wt(D):void 0,"aria-label":D.getDate().toString(),"aria-selected":wt(D),"aria-dropeffect":t.enableDragDrop&&i.currentDragItem?"move":t.enableDateSelection&&i.dateSelectionOrigin?"execute":"none",onClick:m=>x(D,m),onDragstart:m=>dt(D,m),onDrop:os(m=>De(D,m),["prevent"]),onDragover:os(m=>hi(D,m),["prevent"]),onDragenter:os(m=>rn(D,m),["prevent"]),onDragleave:os(m=>we(D,m),["prevent"])},[B("div",cH,Xe(D.getDate()),1),Hn(_.$slots,"dayContent",{day:D})],42,lH))),128)),n.enableHtmlTitles?(X(!0),se(tt,{key:0},_i(di(S),D=>Hn(_.$slots,"item",{value:D,weekStartDate:S,top:et(D)},()=>[(X(),se("div",{key:D.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?D==i.currentDragItem:void 0,class:mi([D.classes,"cv-item"]),title:D.tooltip||D.title,style:ia(`top:${et(D)};${D.originalItem.style}`),onDragstart:p=>St(D,p),onMouseenter:p=>le(D,p),onMouseleave:p=>Ae(D,p),onClick:os(p=>$(D,p),["stop"]),innerHTML:pr(D)},null,46,uH))])),256)):(X(!0),se(tt,{key:1},_i(di(S),D=>Hn(_.$slots,"item",{value:D,weekStartDate:S,top:et(D)},()=>[(X(),se("div",{key:D.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?D==i.currentDragItem:void 0,class:mi([D.classes,"cv-item"]),title:D.tooltip||D.title,style:ia(`top:${et(D)};${D.originalItem.style}`),onDragstart:p=>St(D,p),onMouseenter:p=>le(D,p),onMouseleave:p=>Ae(D,p),onClick:os(p=>$(D,p),["stop"])},Xe(pr(D)),47,hH)),Nt(" div> ")])),256))])],2))),128))],8,sH)],2))}}),fH={class:"calendarHeader"},pH=B("md-icon",null,"chevron_left",-1),gH=[pH],mH=B("md-icon",null,"today",-1),_H=[mH],yH=B("md-icon",null,"chevron_right",-1),vH=[yH],wH={class:"date"},bH=Rt({__name:"CalendarHeader",props:{headerProps:{type:Object,required:!0}},emits:["input"],setup(t,{emit:e}){const n=t;function i(){e("input",n.headerProps.nextPeriod)}function r(){e("input",n.headerProps.currentPeriod)}function s(){e("input",n.headerProps.previousPeriod)}return(o,a)=>(X(),se("div",fH,[B("div",{class:"navButtons"},[B("md-icon-button",{onClick:s},gH),B("md-icon-button",{onClick:r},_H),B("md-icon-button",{onClick:i},vH)]),B("div",wH,Xe(H($a)[n.headerProps.periodStart.getMonth()]),1)]))}});const EH={class:"calendarContainer"},IH={id:"calendar-component"},TH=Rt({__name:"Calendar",emits:["onClickDay","onClickItem"],setup(t,{emit:e}){var d;let n=Fe(new Date);const i=(d=Xr().value)==null?void 0:d.uid;function r(f){return f.map(y=>{const v=y.id.substring(0,8),b=y.id.charAt(y.id.length-1);let I;if(b==="M")I=8;else if(b==="P")I=15;else throw new Error("Formato ID non riconosciuto");const R=new Date(parseInt(v.substring(0,4),10),parseInt(v.substring(4,6),10)-1,parseInt(v.substring(6,8),10),I),E=new Date(R);E.setHours(R.getHours()+4);const x=y.players||y.users,$=x.filter(J=>J.id===i).length>0;return{id:y.id,startDate:R,endDate:E,title:x.length>=3?"Al completo":`${3-x.length} posti disponibili`,classes:$?["bookedByUser"]:["green"],slotAvailables:3-x.length,playersNames:x.map(J=>J.username),bookedByUser:$}})}const s=dA(on,"availabilities"),o=LA(s,{wait:!0}),a=Ce(()=>r(o.value));function l(f,g){return g.filter(y=>y.slotAvailables===0&&y.startDate.getFullYear()===f.getFullYear()&&y.startDate.getMonth()===f.getMonth()&&y.startDate.getDate()===f.getDate())}function c(f){n.value=f}function u(f){l(f,a.value).length>=1||e("onClickDay",f)}function h(f){f.endDate<new Date||e("onClickItem",f)}return(f,g)=>(X(),se("div",EH,[B("div",IH,[Be(H(dH),{"show-date":H(n),class:"theme-default",onClickDate:u,onClickItem:h,items:a.value,"disable-past":!0,"current-period-label":"icons","display-period-uom":"month",startingDayOfWeek:1},{header:Xt(({headerProps:y})=>[Be(bH,{headerProps:y,onInput:c},null,8,["headerProps"])]),_:1},8,["show-date","items"])])]))}});const AH={class:"squadGen"},CH={key:0,class:"squads"},RH={class:"squad"},SH=Rt({__name:"SquadGenerator",props:{players:{}},setup(t){const e=t,n=Fe();function i(s){const o=[],a=s.slice().sort(()=>Math.random()-.5);for(let l=a.length-1;l>=0;l--)l%2!==0&&o.push(a.splice(l,1)[0]);return[a,o]}function r(){n.value=i(e.players)}return(s,o)=>(X(),se("div",AH,[n.value&&n.value.length>0?(X(),se("div",CH,[(X(!0),se(tt,null,_i(n.value,(a,l)=>(X(),se("div",RH,[B("b",null," Squadra "+Xe(l+1),1),(X(!0),se(tt,null,_i(a,c=>(X(),se("div",null,Xe(c),1))),256))]))),256))])):rt("",!0),B("md-filled-tonal-button",{onClick:r}," Genera squadre ")]))}});const kH={class:"availabilityView"},PH=B("div",{class:"istruzioni"}," Per prenotare, clicca su un giorno vuoto o su uno slot già creato ",-1),xH=["open"],DH=B("div",{slot:"headline"},"Non puoi prenotare",-1),NH=B("form",{id:"form",slot:"content",method:"dialog"}," Hai ricevuto due o più ammonizioni e non puoi più prenotare. Dai un'occhiata al regolamento se vuoi sapere come ridurre le tue ammonizioni. ",-1),OH={slot:"actions"},MH=["open"],LH=B("div",{slot:"headline"},"Slot prenotato",-1),$H={slot:"content",id:"form-id",method:"dialog"},VH=["open"],FH=B("div",{slot:"headline"},"Prenota slot",-1),UH={slot:"content",id:"form-id",method:"dialog"},BH={key:0,class:"error-text alert"},zH={key:3,class:"clausola"},jH={slot:"actions"},HH={key:0},qH=B("a",{target:"_blank",rel:"noopener noreferrer",href:"https://calendar.google.com/calendar/embed?src=rho5n91oc32t7pdipjecqvpe9s%40group.calendar.google.com&ctz=Europe%2FRome"},[B("md-filled-tonal-button",{id:"addToCalendar"},[Nt(" Aggiungi calendario a Google Calendar "),B("md-icon",{slot:"icon"},"calendar_add_on")])],-1),WH=Rt({__name:"AvailabilityView",setup(t){var R;const e=Fe(!1),n=Fe(!1),i=Fe(!1),r=Fe(new Date),s=Fe("mattina"),o=Fe(!1),a=Fe(!1),l=Fe(!1),c=Fe(!1),u=Fe(!1),h=Fe([]),d=(R=Xr().value)==null?void 0:R.uid,f=Em(Pn(on,`users/${d}`));function g(E,x){return`availabilities/${E.getFullYear()}${(E.getMonth()+1).toString().padStart(2,"0")}${E.getDate().toString().padStart(2,"0")}-${x==="mattina"?"M":"P"}`}async function y(){if(c.value=!1,r.value==null||s.value==null){console.error("Ma che cazz");return}Jo(lc,Gz,{date:r.value,slot:s.value,lastRulesRead:localStorage.getItem("lastRulesRead")}),o.value=!0;const E=Pn(on,g(r.value,s.value)),x=Pn(on,`users/${d}/${g(r.value,s.value)}`);(await uh(E)).exists()?SA(E,{players:VF(Pn(on,`users/${d}`))}):Mv(E,{players:[Pn(on,`users/${d}`)]}),Mv(x,{date:r.value,timeSlot:s.value}),o.value=!1,a.value=!0,n.value=!1,e.value=!1}function v(E){var x,$;if(Jo(lc,Vw,{date:E.toISOString(),lastRulesRead:localStorage.getItem("lastRulesRead"),admonitionCount:(x=f.value)==null?void 0:x.admonitionCount}),(($=f.value)==null?void 0:$.admonitionCount)>=2){l.value=!0;return}i.value=!I(),c.value=!0,a.value=!1,r.value=E,n.value=!1,e.value=!0}function b(E){var x,$;if(i.value=!I(),E.originalItem.bookedByUser){u.value=!0,h.value=["Danilo",...E.originalItem.playersNames];return}if(Jo(lc,Vw,{date:E.startDate,lastRulesRead:localStorage.getItem("lastRulesRead"),admonitionCount:(x=f.value)==null?void 0:x.admonitionCount}),(($=f.value)==null?void 0:$.admonitionCount)>=2){l.value=!0;return}a.value=!1,c.value=!0,E.originalItem.slotAvailables>0&&(s.value=E.id.charAt(E.id.length-1)==="M"?"mattina":"pomeriggio",r.value=E.startDate,n.value=!0,e.value=!1)}function I(){const E=localStorage.getItem("lastRulesRead");return E!=null&&E===uu.toString()}return(E,x)=>{const $=ja("RouterLink");return X(),se("div",kH,[PH,Be(TH,{onOnClickDay:v,onOnClickItem:b}),B("md-dialog",{type:"alert",open:l.value},[DH,NH,B("div",OH,[B("md-text-button",{form:"form",value:"ok",onClick:x[0]||(x[0]=J=>l.value=!1)},"OK")])],8,xH),B("md-dialog",{type:"alert",open:u.value,onClose:x[1]||(x[1]=J=>u.value=!1)},[LH,B("div",$H,[Nt(" Giocatori: "),B("ul",null,[(X(!0),se(tt,null,_i(h.value,J=>(X(),se("li",null,Xe(J),1))),256))]),Be(SH,{players:h.value},null,8,["players"])])],40,MH),B("md-dialog",{type:"alert",open:c.value},[FH,B("form",UH,[i.value?(X(),se("div",BH,[Nt("Dall'ultima volta che hai letto il regolamento ci sono state delle modifiche! Leggi il "),Be($,{class:"link",to:"/rules"},{default:Xt(()=>[Nt("regolamento aggiornato qui")]),_:1})])):rt("",!0),e.value&&!o.value?(X(),si(Cj,{key:1,date:r.value,onSelect:x[2]||(x[2]=J=>s.value=J.timeSlot)},null,8,["date"])):rt("",!0),n.value&&!o.value?(X(),si(Sj,{key:2,date:r.value,time:s.value},null,8,["date","time"])):rt("",!0),!o.value&&(e.value||n.value)?(X(),se("div",zH,[Nt("Confermando accetti "),Be($,{class:"link",to:"/rules"},{default:Xt(()=>[Nt(" il regolamento")]),_:1})])):rt("",!0)]),B("div",jH,[B("md-text-button",{form:"form-id",value:"cancel",onClick:x[3]||(x[3]=J=>c.value=!1)},"Annulla"),B("md-text-button",{form:"form-id",value:"delete",onClick:y},"Conferma")])],8,VH),a.value?(X(),se("div",HH,"Prenotato")):rt("",!0),qH])}}});const KH="/assets/btn_google_light_normal_ios-464e961b.svg",GH={key:0},QH={key:1},YH=new yi,XH=Rt({__name:"Login",setup(t){const e=I2();function n(){_1(e,YH).catch(r=>{console.error("Failed signinRedirect",r)})}kb(()=>{T1(e).catch(r=>{console.error("Failed redirect result",r)})});const i=Xr();return(r,s)=>(X(),se(tt,null,[H(i)?rt("",!0):(X(),se("p",GH,"Effettua il login con Google")),B("img",{onClick:n,alt:"Login button",class:"loginBtn",src:KH,width:"125",height:"125"}),H(i)?(X(),se("p",QH,"Loggato come "+Xe(H(i).providerData[0].displayName),1)):rt("",!0)],64))}});const JH=t=>(Ba("data-v-715d64c9"),t=t(),za(),t),ZH=JH(()=>B("div",null,"Ritorna alla home",-1)),eq=Rt({__name:"LoginView",setup(t){return(e,n)=>{const i=ja("RouterLink");return X(),se("main",null,[Be(XH),Be(i,{to:"/"},{default:Xt(()=>[ZH]),_:1})])}}});const tq=bl(eq,[["__scopeId","data-v-715d64c9"]]),aR=oz({history:I4("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:Z9},{path:"/login",name:"login",component:tq},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:WH},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:YC},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:yj},{path:"/adminPanel",name:"adminPanel",meta:{requiresAdmin:!0},component:()=>fz(()=>import("./AdminView-c4eba928.js"),["assets/AdminView-c4eba928.js","assets/AdminView-db567cca.css"])}]});aR.beforeEach(async t=>{var e;if(t.meta.requiresAuth&&!await sy())return{path:"/login",query:{redirect:t.fullPath}};if(t.meta.requiresAdmin){const n=await sy();if(!n)return{path:"/login",query:{redirect:t.fullPath}};const i=await uh(Pn(on,`users/${n.uid}`));if(!i.exists()||((e=i.data())==null?void 0:e.role)!=="admin")return{path:"/login",query:{redirect:t.fullPath}}}});const Th=xk(uz);Th.use(A2());Th.use(aR);Th.use(T2,{firebaseApp:gh,modules:[E2()]});Th.mount("#app");export{tt as F,bl as _,Ce as a,se as b,dA as c,Rt as d,B as e,on as f,rt as g,za as h,$a as m,X as o,Ba as p,_i as r,Xe as t,LA as u};
