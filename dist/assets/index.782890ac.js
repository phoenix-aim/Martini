(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Mn(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ai="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oi=Mn(Ai);function Ps(e){return!!e||e===""}function In(e){if(k(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Q(s)?Pi(s):In(s);if(i)for(const o in i)t[o]=i[o]}return t}else{if(Q(e))return e;if(q(e))return e}}const Mi=/;(?![^(]*\))/g,Ii=/:(.+)/;function Pi(e){const t={};return e.split(Mi).forEach(n=>{if(n){const s=n.split(Ii);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function xt(e){let t="";if(Q(e))t=e;else if(k(e))for(let n=0;n<e.length;n++){const s=xt(e[n]);s&&(t+=s+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Fi(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=qt(e[s],t[s]);return n}function qt(e,t){if(e===t)return!0;let n=es(e),s=es(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=mt(e),s=mt(t),n||s)return e===t;if(n=k(e),s=k(t),n||s)return n&&s?Fi(e,t):!1;if(n=q(e),s=q(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const r in e){const c=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(c&&!a||!c&&a||!qt(e[r],t[r]))return!1}}return String(e)===String(t)}function Si(e,t){return e.findIndex(n=>qt(n,t))}const Ni=e=>Q(e)?e:e==null?"":k(e)||q(e)&&(e.toString===Ns||!M(e.toString))?JSON.stringify(e,Fs,2):String(e),Fs=(e,t)=>t&&t.__v_isRef?Fs(e,t.value):nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Vt(t)?{[`Set(${t.size})`]:[...t.values()]}:q(t)&&!k(t)&&!Rs(t)?String(t):t,U={},tt=[],ge=()=>{},Ri=()=>!1,Li=/^on[^a-z]/,Wt=e=>Li.test(e),Pn=e=>e.startsWith("onUpdate:"),ee=Object.assign,Fn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ji=Object.prototype.hasOwnProperty,P=(e,t)=>ji.call(e,t),k=Array.isArray,nt=e=>zt(e)==="[object Map]",Vt=e=>zt(e)==="[object Set]",es=e=>zt(e)==="[object Date]",M=e=>typeof e=="function",Q=e=>typeof e=="string",mt=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Ss=e=>q(e)&&M(e.then)&&M(e.catch),Ns=Object.prototype.toString,zt=e=>Ns.call(e),$i=e=>zt(e).slice(8,-1),Rs=e=>zt(e)==="[object Object]",Sn=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pt=Mn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Hi=/-(\w)/g,Ce=Yt(e=>e.replace(Hi,(t,n)=>n?n.toUpperCase():"")),Bi=/\B([A-Z])/g,rt=Yt(e=>e.replace(Bi,"-$1").toLowerCase()),Jt=Yt(e=>e.charAt(0).toUpperCase()+e.slice(1)),cn=Yt(e=>e?`on${Jt(e)}`:""),Rt=(e,t)=>!Object.is(e,t),Ft=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Lt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},jt=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ts;const Ui=()=>ts||(ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ye;class Di{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ye&&(this.parent=ye,this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Ki(e,t=ye){t&&t.active&&t.effects.push(e)}const Nn=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ls=e=>(e.w&Le)>0,js=e=>(e.n&Le)>0,qi=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Le},Wi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];Ls(i)&&!js(i)?i.delete(e):t[n++]=i,i.w&=~Le,i.n&=~Le}t.length=n}},mn=new WeakMap;let ht=0,Le=1;const _n=30;let me;const Je=Symbol(""),gn=Symbol("");class Rn{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ki(this,s)}run(){if(!this.active)return this.fn();let t=me,n=Ne;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=me,me=this,Ne=!0,Le=1<<++ht,ht<=_n?qi(this):ns(this),this.fn()}finally{ht<=_n&&Wi(this),Le=1<<--ht,me=this.parent,Ne=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){me===this?this.deferStop=!0:this.active&&(ns(this),this.onStop&&this.onStop(),this.active=!1)}}function ns(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ne=!0;const $s=[];function lt(){$s.push(Ne),Ne=!1}function ct(){const e=$s.pop();Ne=e===void 0?!0:e}function ce(e,t,n){if(Ne&&me){let s=mn.get(e);s||mn.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=Nn()),Hs(i)}}function Hs(e,t){let n=!1;ht<=_n?js(e)||(e.n|=Le,n=!Ls(e)):n=!e.has(me),n&&(e.add(me),me.deps.push(e))}function Me(e,t,n,s,i,o){const r=mn.get(e);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(n==="length"&&k(e))r.forEach((a,d)=>{(d==="length"||d>=s)&&c.push(a)});else switch(n!==void 0&&c.push(r.get(n)),t){case"add":k(e)?Sn(n)&&c.push(r.get("length")):(c.push(r.get(Je)),nt(e)&&c.push(r.get(gn)));break;case"delete":k(e)||(c.push(r.get(Je)),nt(e)&&c.push(r.get(gn)));break;case"set":nt(e)&&c.push(r.get(Je));break}if(c.length===1)c[0]&&bn(c[0]);else{const a=[];for(const d of c)d&&a.push(...d);bn(Nn(a))}}function bn(e,t){const n=k(e)?e:[...e];for(const s of n)s.computed&&ss(s);for(const s of n)s.computed||ss(s)}function ss(e,t){(e!==me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Vi=Mn("__proto__,__v_isRef,__isVue"),Bs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mt)),Yi=Ln(),Ji=Ln(!1,!0),Xi=Ln(!0),is=Zi();function Zi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=j(this);for(let o=0,r=this.length;o<r;o++)ce(s,"get",o+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){lt();const s=j(this)[t].apply(this,n);return ct(),s}}),e}function Ln(e=!1,t=!1){return function(s,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?po:Ws:t?qs:Ks).get(s))return s;const r=k(s);if(!e&&r&&P(is,i))return Reflect.get(is,i,o);const c=Reflect.get(s,i,o);return(mt(i)?Bs.has(i):Vi(i))||(e||ce(s,"get",i),t)?c:ne(c)?r&&Sn(i)?c:c.value:q(c)?e?Vs(c):$e(c):c}}const Qi=Us(),Gi=Us(!0);function Us(e=!1){return function(n,s,i,o){let r=n[s];if(_t(r)&&ne(r)&&!ne(i))return!1;if(!e&&(!vn(i)&&!_t(i)&&(r=j(r),i=j(i)),!k(n)&&ne(r)&&!ne(i)))return r.value=i,!0;const c=k(n)&&Sn(s)?Number(s)<n.length:P(n,s),a=Reflect.set(n,s,i,o);return n===j(o)&&(c?Rt(i,r)&&Me(n,"set",s,i):Me(n,"add",s,i)),a}}function eo(e,t){const n=P(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Me(e,"delete",t,void 0),s}function to(e,t){const n=Reflect.has(e,t);return(!mt(t)||!Bs.has(t))&&ce(e,"has",t),n}function no(e){return ce(e,"iterate",k(e)?"length":Je),Reflect.ownKeys(e)}const Ds={get:Yi,set:Qi,deleteProperty:eo,has:to,ownKeys:no},so={get:Xi,set(e,t){return!0},deleteProperty(e,t){return!0}},io=ee({},Ds,{get:Ji,set:Gi}),jn=e=>e,Xt=e=>Reflect.getPrototypeOf(e);function kt(e,t,n=!1,s=!1){e=e.__v_raw;const i=j(e),o=j(t);n||(t!==o&&ce(i,"get",t),ce(i,"get",o));const{has:r}=Xt(i),c=s?jn:n?Un:Bn;if(r.call(i,t))return c(e.get(t));if(r.call(i,o))return c(e.get(o));e!==i&&e.get(t)}function At(e,t=!1){const n=this.__v_raw,s=j(n),i=j(e);return t||(e!==i&&ce(s,"has",e),ce(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ot(e,t=!1){return e=e.__v_raw,!t&&ce(j(e),"iterate",Je),Reflect.get(e,"size",e)}function os(e){e=j(e);const t=j(this);return Xt(t).has.call(t,e)||(t.add(e),Me(t,"add",e,e)),this}function rs(e,t){t=j(t);const n=j(this),{has:s,get:i}=Xt(n);let o=s.call(n,e);o||(e=j(e),o=s.call(n,e));const r=i.call(n,e);return n.set(e,t),o?Rt(t,r)&&Me(n,"set",e,t):Me(n,"add",e,t),this}function ls(e){const t=j(this),{has:n,get:s}=Xt(t);let i=n.call(t,e);i||(e=j(e),i=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return i&&Me(t,"delete",e,void 0),o}function cs(){const e=j(this),t=e.size!==0,n=e.clear();return t&&Me(e,"clear",void 0,void 0),n}function Mt(e,t){return function(s,i){const o=this,r=o.__v_raw,c=j(r),a=t?jn:e?Un:Bn;return!e&&ce(c,"iterate",Je),r.forEach((d,_)=>s.call(i,a(d),a(_),o))}}function It(e,t,n){return function(...s){const i=this.__v_raw,o=j(i),r=nt(o),c=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,d=i[e](...s),_=n?jn:t?Un:Bn;return!t&&ce(o,"iterate",a?gn:Je),{next(){const{value:y,done:z}=d.next();return z?{value:y,done:z}:{value:c?[_(y[0]),_(y[1])]:_(y),done:z}},[Symbol.iterator](){return this}}}}function Fe(e){return function(...t){return e==="delete"?!1:this}}function oo(){const e={get(o){return kt(this,o)},get size(){return Ot(this)},has:At,add:os,set:rs,delete:ls,clear:cs,forEach:Mt(!1,!1)},t={get(o){return kt(this,o,!1,!0)},get size(){return Ot(this)},has:At,add:os,set:rs,delete:ls,clear:cs,forEach:Mt(!1,!0)},n={get(o){return kt(this,o,!0)},get size(){return Ot(this,!0)},has(o){return At.call(this,o,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Mt(!0,!1)},s={get(o){return kt(this,o,!0,!0)},get size(){return Ot(this,!0)},has(o){return At.call(this,o,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Mt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=It(o,!1,!1),n[o]=It(o,!0,!1),t[o]=It(o,!1,!0),s[o]=It(o,!0,!0)}),[e,n,t,s]}const[ro,lo,co,ao]=oo();function $n(e,t){const n=t?e?ao:co:e?lo:ro;return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(P(n,i)&&i in s?n:s,i,o)}const uo={get:$n(!1,!1)},fo={get:$n(!1,!0)},ho={get:$n(!0,!1)},Ks=new WeakMap,qs=new WeakMap,Ws=new WeakMap,po=new WeakMap;function mo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _o(e){return e.__v_skip||!Object.isExtensible(e)?0:mo($i(e))}function $e(e){return _t(e)?e:Hn(e,!1,Ds,uo,Ks)}function go(e){return Hn(e,!1,io,fo,qs)}function Vs(e){return Hn(e,!0,so,ho,Ws)}function Hn(e,t,n,s,i){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const r=_o(e);if(r===0)return e;const c=new Proxy(e,r===2?s:n);return i.set(e,c),c}function st(e){return _t(e)?st(e.__v_raw):!!(e&&e.__v_isReactive)}function _t(e){return!!(e&&e.__v_isReadonly)}function vn(e){return!!(e&&e.__v_isShallow)}function Ys(e){return st(e)||_t(e)}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function Js(e){return Lt(e,"__v_skip",!0),e}const Bn=e=>q(e)?$e(e):e,Un=e=>q(e)?Vs(e):e;function bo(e){Ne&&me&&(e=j(e),Hs(e.dep||(e.dep=Nn())))}function vo(e,t){e=j(e),e.dep&&bn(e.dep)}function ne(e){return!!(e&&e.__v_isRef===!0)}function yo(e){return ne(e)?e.value:e}const xo={get:(e,t,n)=>yo(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return ne(i)&&!ne(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Xs(e){return st(e)?e:new Proxy(e,xo)}var Zs;class zo{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zs]=!1,this._dirty=!0,this.effect=new Rn(t,()=>{this._dirty||(this._dirty=!0,vo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=j(this);return bo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zs="__v_isReadonly";function wo(e,t,n=!1){let s,i;const o=M(e);return o?(s=e,i=ge):(s=e.get,i=e.set),new zo(s,i,o||!i,n)}function Re(e,t,n,s){let i;try{i=s?e(...s):e()}catch(o){Zt(o,t,n)}return i}function de(e,t,n,s){if(M(e)){const o=Re(e,t,n,s);return o&&Ss(o)&&o.catch(r=>{Zt(r,t,n)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(de(e[o],t,n,s));return i}function Zt(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,c=n;for(;o;){const d=o.ec;if(d){for(let _=0;_<d.length;_++)if(d[_](e,r,c)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){Re(a,null,10,[e,r,c]);return}}Co(e,n,i,s)}function Co(e,t,n,s=!0){console.error(e)}let gt=!1,yn=!1;const G=[];let we=0;const it=[];let Ae=null,Ke=0;const Qs=Promise.resolve();let Dn=null;function To(e){const t=Dn||Qs;return e?t.then(this?e.bind(this):e):t}function Eo(e){let t=we+1,n=G.length;for(;t<n;){const s=t+n>>>1;bt(G[s])<e?t=s+1:n=s}return t}function Kn(e){(!G.length||!G.includes(e,gt&&e.allowRecurse?we+1:we))&&(e.id==null?G.push(e):G.splice(Eo(e.id),0,e),Gs())}function Gs(){!gt&&!yn&&(yn=!0,Dn=Qs.then(ti))}function ko(e){const t=G.indexOf(e);t>we&&G.splice(t,1)}function Ao(e){k(e)?it.push(...e):(!Ae||!Ae.includes(e,e.allowRecurse?Ke+1:Ke))&&it.push(e),Gs()}function as(e,t=gt?we+1:0){for(;t<G.length;t++){const n=G[t];n&&n.pre&&(G.splice(t,1),t--,n())}}function ei(e){if(it.length){const t=[...new Set(it)];if(it.length=0,Ae){Ae.push(...t);return}for(Ae=t,Ae.sort((n,s)=>bt(n)-bt(s)),Ke=0;Ke<Ae.length;Ke++)Ae[Ke]();Ae=null,Ke=0}}const bt=e=>e.id==null?1/0:e.id,Oo=(e,t)=>{const n=bt(e)-bt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ti(e){yn=!1,gt=!0,G.sort(Oo);const t=ge;try{for(we=0;we<G.length;we++){const n=G[we];n&&n.active!==!1&&Re(n,null,14)}}finally{we=0,G.length=0,ei(),gt=!1,Dn=null,(G.length||it.length)&&ti()}}function Mo(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||U;let i=n;const o=t.startsWith("update:"),r=o&&t.slice(7);if(r&&r in s){const _=`${r==="modelValue"?"model":r}Modifiers`,{number:y,trim:z}=s[_]||U;z&&(i=n.map(A=>A.trim())),y&&(i=n.map(jt))}let c,a=s[c=cn(t)]||s[c=cn(Ce(t))];!a&&o&&(a=s[c=cn(rt(t))]),a&&de(a,e,6,i);const d=s[c+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,de(d,e,6,i)}}function ni(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let r={},c=!1;if(!M(e)){const a=d=>{const _=ni(d,t,!0);_&&(c=!0,ee(r,_))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!c?(q(e)&&s.set(e,null),null):(k(o)?o.forEach(a=>r[a]=null):ee(r,o),q(e)&&s.set(e,r),r)}function Qt(e,t){return!e||!Wt(t)?!1:(t=t.slice(2).replace(/Once$/,""),P(e,t[0].toLowerCase()+t.slice(1))||P(e,rt(t))||P(e,t))}let fe=null,si=null;function $t(e){const t=fe;return fe=e,si=e&&e.type.__scopeId||null,t}function Io(e,t=fe,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ys(-1);const o=$t(t),r=e(...i);return $t(o),s._d&&ys(1),r};return s._n=!0,s._c=!0,s._d=!0,s}function an(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:o,propsOptions:[r],slots:c,attrs:a,emit:d,render:_,renderCache:y,data:z,setupState:A,ctx:L,inheritAttrs:R}=e;let I,F;const ae=$t(e);try{if(n.shapeFlag&4){const Y=i||s;I=ze(_.call(Y,Y,y,o,A,z,L)),F=a}else{const Y=t;I=ze(Y.length>1?Y(o,{attrs:a,slots:c,emit:d}):Y(o,null)),F=t.props?a:Po(a)}}catch(Y){pt.length=0,Zt(Y,e,1),I=$(Oe)}let X=I;if(F&&R!==!1){const Y=Object.keys(F),{shapeFlag:se}=X;Y.length&&se&7&&(r&&Y.some(Pn)&&(F=Fo(F,r)),X=je(X,F))}return n.dirs&&(X=je(X),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&(X.transition=n.transition),I=X,$t(ae),I}const Po=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wt(n))&&((t||(t={}))[n]=e[n]);return t},Fo=(e,t)=>{const n={};for(const s in e)(!Pn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function So(e,t,n){const{props:s,children:i,component:o}=e,{props:r,children:c,patchFlag:a}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?us(s,r,d):!!r;if(a&8){const _=t.dynamicProps;for(let y=0;y<_.length;y++){const z=_[y];if(r[z]!==s[z]&&!Qt(d,z))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===r?!1:s?r?us(s,r,d):!0:!!r;return!1}function us(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(t[o]!==e[o]&&!Qt(n,o))return!0}return!1}function No({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ro=e=>e.__isSuspense;function Lo(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):Ao(e)}function jo(e,t){if(Z){let n=Z.provides;const s=Z.parent&&Z.parent.provides;s===n&&(n=Z.provides=Object.create(s)),n[e]=t}}function un(e,t,n=!1){const s=Z||fe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&M(t)?t.call(s.proxy):t}}const fs={};function fn(e,t,n){return ii(e,t,n)}function ii(e,t,{immediate:n,deep:s,flush:i,onTrack:o,onTrigger:r}=U){const c=Z;let a,d=!1,_=!1;if(ne(e)?(a=()=>e.value,d=vn(e)):st(e)?(a=()=>e,s=!0):k(e)?(_=!0,d=e.some(F=>st(F)||vn(F)),a=()=>e.map(F=>{if(ne(F))return F.value;if(st(F))return Ye(F);if(M(F))return Re(F,c,2)})):M(e)?t?a=()=>Re(e,c,2):a=()=>{if(!(c&&c.isUnmounted))return y&&y(),de(e,c,3,[z])}:a=ge,t&&s){const F=a;a=()=>Ye(F())}let y,z=F=>{y=I.onStop=()=>{Re(F,c,4)}};if(yt)return z=ge,t?n&&de(t,c,3,[a(),_?[]:void 0,z]):a(),ge;let A=_?[]:fs;const L=()=>{if(!!I.active)if(t){const F=I.run();(s||d||(_?F.some((ae,X)=>Rt(ae,A[X])):Rt(F,A)))&&(y&&y(),de(t,c,3,[F,A===fs?void 0:A,z]),A=F)}else I.run()};L.allowRecurse=!!t;let R;i==="sync"?R=L:i==="post"?R=()=>re(L,c&&c.suspense):(L.pre=!0,c&&(L.id=c.uid),R=()=>Kn(L));const I=new Rn(a,R);return t?n?L():A=I.run():i==="post"?re(I.run.bind(I),c&&c.suspense):I.run(),()=>{I.stop(),c&&c.scope&&Fn(c.scope.effects,I)}}function $o(e,t,n){const s=this.proxy,i=Q(e)?e.includes(".")?oi(s,e):()=>s[e]:e.bind(s,s);let o;M(t)?o=t:(o=t.handler,n=t);const r=Z;ot(this);const c=ii(i,o.bind(s),n);return r?ot(r):Xe(),c}function oi(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ye(e,t){if(!q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))Ye(e.value,t);else if(k(e))for(let n=0;n<e.length;n++)Ye(e[n],t);else if(Vt(e)||nt(e))e.forEach(n=>{Ye(n,t)});else if(Rs(e))for(const n in e)Ye(e[n],t);return e}function Ho(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ai(()=>{e.isMounted=!0}),ui(()=>{e.isUnmounting=!0}),e}const ue=[Function,Array],Bo={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ue,onEnter:ue,onAfterEnter:ue,onEnterCancelled:ue,onBeforeLeave:ue,onLeave:ue,onAfterLeave:ue,onLeaveCancelled:ue,onBeforeAppear:ue,onAppear:ue,onAfterAppear:ue,onAppearCancelled:ue},setup(e,{slots:t}){const n=kr(),s=Ho();let i;return()=>{const o=t.default&&li(t.default(),!0);if(!o||!o.length)return;let r=o[0];if(o.length>1){for(const R of o)if(R.type!==Oe){r=R;break}}const c=j(e),{mode:a}=c;if(s.isLeaving)return dn(r);const d=ds(r);if(!d)return dn(r);const _=xn(d,c,s,n);zn(d,_);const y=n.subTree,z=y&&ds(y);let A=!1;const{getTransitionKey:L}=d.type;if(L){const R=L();i===void 0?i=R:R!==i&&(i=R,A=!0)}if(z&&z.type!==Oe&&(!qe(d,z)||A)){const R=xn(z,c,s,n);if(zn(z,R),a==="out-in")return s.isLeaving=!0,R.afterLeave=()=>{s.isLeaving=!1,n.update()},dn(r);a==="in-out"&&d.type!==Oe&&(R.delayLeave=(I,F,ae)=>{const X=ri(s,z);X[String(z.key)]=z,I._leaveCb=()=>{F(),I._leaveCb=void 0,delete _.delayedLeave},_.delayedLeave=ae})}return r}}},Uo=Bo;function ri(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function xn(e,t,n,s){const{appear:i,mode:o,persisted:r=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:d,onEnterCancelled:_,onBeforeLeave:y,onLeave:z,onAfterLeave:A,onLeaveCancelled:L,onBeforeAppear:R,onAppear:I,onAfterAppear:F,onAppearCancelled:ae}=t,X=String(e.key),Y=ri(n,e),se=(S,W)=>{S&&de(S,s,9,W)},Ze=(S,W)=>{const J=W[1];se(S,W),k(S)?S.every(ie=>ie.length<=1)&&J():S.length<=1&&J()},He={mode:o,persisted:r,beforeEnter(S){let W=c;if(!n.isMounted)if(i)W=R||c;else return;S._leaveCb&&S._leaveCb(!0);const J=Y[X];J&&qe(e,J)&&J.el._leaveCb&&J.el._leaveCb(),se(W,[S])},enter(S){let W=a,J=d,ie=_;if(!n.isMounted)if(i)W=I||a,J=F||d,ie=ae||_;else return;let he=!1;const Te=S._enterCb=Tt=>{he||(he=!0,Tt?se(ie,[S]):se(J,[S]),He.delayedLeave&&He.delayedLeave(),S._enterCb=void 0)};W?Ze(W,[S,Te]):Te()},leave(S,W){const J=String(e.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return W();se(y,[S]);let ie=!1;const he=S._leaveCb=Te=>{ie||(ie=!0,W(),Te?se(L,[S]):se(A,[S]),S._leaveCb=void 0,Y[J]===e&&delete Y[J])};Y[J]=e,z?Ze(z,[S,he]):he()},clone(S){return xn(S,t,n,s)}};return He}function dn(e){if(Gt(e))return e=je(e),e.children=null,e}function ds(e){return Gt(e)?e.children?e.children[0]:void 0:e}function zn(e,t){e.shapeFlag&6&&e.component?zn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function li(e,t=!1,n){let s=[],i=0;for(let o=0;o<e.length;o++){let r=e[o];const c=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===xe?(r.patchFlag&128&&i++,s=s.concat(li(r.children,t,c))):(t||r.type!==Oe)&&s.push(c!=null?je(r,{key:c}):r)}if(i>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}const St=e=>!!e.type.__asyncLoader,Gt=e=>e.type.__isKeepAlive;function Do(e,t){ci(e,"a",t)}function Ko(e,t){ci(e,"da",t)}function ci(e,t,n=Z){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(en(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Gt(i.parent.vnode)&&qo(s,t,n,i),i=i.parent}}function qo(e,t,n,s){const i=en(t,e,s,!0);fi(()=>{Fn(s[t],i)},n)}function en(e,t,n=Z,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;lt(),ot(n);const c=de(t,n,e,r);return Xe(),ct(),c});return s?i.unshift(o):i.push(o),o}}const Ie=e=>(t,n=Z)=>(!yt||e==="sp")&&en(e,t,n),Wo=Ie("bm"),ai=Ie("m"),Vo=Ie("bu"),Yo=Ie("u"),ui=Ie("bum"),fi=Ie("um"),Jo=Ie("sp"),Xo=Ie("rtg"),Zo=Ie("rtc");function Qo(e,t=Z){en("ec",e,t)}function di(e,t){const n=fe;if(n===null)return e;const s=nn(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,c,a,d=U]=t[o];M(r)&&(r={mounted:r,updated:r}),r.deep&&Ye(c),i.push({dir:r,instance:s,value:c,oldValue:void 0,arg:a,modifiers:d})}return e}function Be(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let r=0;r<i.length;r++){const c=i[r];o&&(c.oldValue=o[r].value);let a=c.dir[s];a&&(lt(),de(a,n,8,[e.el,c,e,t]),ct())}}const hi="components";function Ht(e,t){return er(hi,e,!0,t)||e}const Go=Symbol();function er(e,t,n=!0,s=!1){const i=fe||Z;if(i){const o=i.type;if(e===hi){const c=Pr(o,!1);if(c&&(c===t||c===Ce(t)||c===Jt(Ce(t))))return o}const r=hs(i[e]||o[e],t)||hs(i.appContext[e],t);return!r&&s?o:r}}function hs(e,t){return e&&(e[t]||e[Ce(t)]||e[Jt(Ce(t))])}const wn=e=>e?wi(e)?nn(e)||e.proxy:wn(e.parent):null,Bt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wn(e.parent),$root:e=>wn(e.root),$emit:e=>e.emit,$options:e=>qn(e),$forceUpdate:e=>e.f||(e.f=()=>Kn(e.update)),$nextTick:e=>e.n||(e.n=To.bind(e.proxy)),$watch:e=>$o.bind(e)}),tr={get({_:e},t){const{ctx:n,setupState:s,data:i,props:o,accessCache:r,type:c,appContext:a}=e;let d;if(t[0]!=="$"){const A=r[t];if(A!==void 0)switch(A){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(s!==U&&P(s,t))return r[t]=1,s[t];if(i!==U&&P(i,t))return r[t]=2,i[t];if((d=e.propsOptions[0])&&P(d,t))return r[t]=3,o[t];if(n!==U&&P(n,t))return r[t]=4,n[t];Cn&&(r[t]=0)}}const _=Bt[t];let y,z;if(_)return t==="$attrs"&&ce(e,"get",t),_(e);if((y=c.__cssModules)&&(y=y[t]))return y;if(n!==U&&P(n,t))return r[t]=4,n[t];if(z=a.config.globalProperties,P(z,t))return z[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return i!==U&&P(i,t)?(i[t]=n,!0):s!==U&&P(s,t)?(s[t]=n,!0):P(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:o}},r){let c;return!!n[r]||e!==U&&P(e,r)||t!==U&&P(t,r)||(c=o[0])&&P(c,r)||P(s,r)||P(Bt,r)||P(i.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:P(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Cn=!0;function nr(e){const t=qn(e),n=e.proxy,s=e.ctx;Cn=!1,t.beforeCreate&&ps(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:c,provide:a,inject:d,created:_,beforeMount:y,mounted:z,beforeUpdate:A,updated:L,activated:R,deactivated:I,beforeDestroy:F,beforeUnmount:ae,destroyed:X,unmounted:Y,render:se,renderTracked:Ze,renderTriggered:He,errorCaptured:S,serverPrefetch:W,expose:J,inheritAttrs:ie,components:he,directives:Te,filters:Tt}=t;if(d&&sr(d,s,null,e.appContext.config.unwrapInjectedRef),r)for(const V in r){const D=r[V];M(D)&&(s[V]=D.bind(n))}if(i){const V=i.call(n,n);q(V)&&(e.data=$e(V))}if(Cn=!0,o)for(const V in o){const D=o[V],Ee=M(D)?D.bind(n,n):M(D.get)?D.get.bind(n,n):ge,on=!M(D)&&M(D.set)?D.set.bind(n):ge,ft=Sr({get:Ee,set:on});Object.defineProperty(s,V,{enumerable:!0,configurable:!0,get:()=>ft.value,set:Qe=>ft.value=Qe})}if(c)for(const V in c)pi(c[V],s,n,V);if(a){const V=M(a)?a.call(n):a;Reflect.ownKeys(V).forEach(D=>{jo(D,V[D])})}_&&ps(_,e,"c");function oe(V,D){k(D)?D.forEach(Ee=>V(Ee.bind(n))):D&&V(D.bind(n))}if(oe(Wo,y),oe(ai,z),oe(Vo,A),oe(Yo,L),oe(Do,R),oe(Ko,I),oe(Qo,S),oe(Zo,Ze),oe(Xo,He),oe(ui,ae),oe(fi,Y),oe(Jo,W),k(J))if(J.length){const V=e.exposed||(e.exposed={});J.forEach(D=>{Object.defineProperty(V,D,{get:()=>n[D],set:Ee=>n[D]=Ee})})}else e.exposed||(e.exposed={});se&&e.render===ge&&(e.render=se),ie!=null&&(e.inheritAttrs=ie),he&&(e.components=he),Te&&(e.directives=Te)}function sr(e,t,n=ge,s=!1){k(e)&&(e=Tn(e));for(const i in e){const o=e[i];let r;q(o)?"default"in o?r=un(o.from||i,o.default,!0):r=un(o.from||i):r=un(o),ne(r)&&s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):t[i]=r}}function ps(e,t,n){de(k(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function pi(e,t,n,s){const i=s.includes(".")?oi(n,s):()=>n[s];if(Q(e)){const o=t[e];M(o)&&fn(i,o)}else if(M(e))fn(i,e.bind(n));else if(q(e))if(k(e))e.forEach(o=>pi(o,t,n,s));else{const o=M(e.handler)?e.handler.bind(n):t[e.handler];M(o)&&fn(i,o,e)}}function qn(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,c=o.get(t);let a;return c?a=c:!i.length&&!n&&!s?a=t:(a={},i.length&&i.forEach(d=>Ut(a,d,r,!0)),Ut(a,t,r)),q(t)&&o.set(t,a),a}function Ut(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&Ut(e,o,n,!0),i&&i.forEach(r=>Ut(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const c=ir[r]||n&&n[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const ir={data:ms,props:De,emits:De,methods:De,computed:De,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:De,directives:De,watch:rr,provide:ms,inject:or};function ms(e,t){return t?e?function(){return ee(M(e)?e.call(this,this):e,M(t)?t.call(this,this):t)}:t:e}function or(e,t){return De(Tn(e),Tn(t))}function Tn(e){if(k(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function De(e,t){return e?ee(ee(Object.create(null),e),t):t}function rr(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const s in t)n[s]=te(e[s],t[s]);return n}function lr(e,t,n,s=!1){const i={},o={};Lt(o,tn,1),e.propsDefaults=Object.create(null),mi(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=s?i:go(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function cr(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,c=j(i),[a]=e.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const _=e.vnode.dynamicProps;for(let y=0;y<_.length;y++){let z=_[y];if(Qt(e.emitsOptions,z))continue;const A=t[z];if(a)if(P(o,z))A!==o[z]&&(o[z]=A,d=!0);else{const L=Ce(z);i[L]=En(a,c,L,A,e,!1)}else A!==o[z]&&(o[z]=A,d=!0)}}}else{mi(e,t,i,o)&&(d=!0);let _;for(const y in c)(!t||!P(t,y)&&((_=rt(y))===y||!P(t,_)))&&(a?n&&(n[y]!==void 0||n[_]!==void 0)&&(i[y]=En(a,c,y,void 0,e,!0)):delete i[y]);if(o!==c)for(const y in o)(!t||!P(t,y)&&!0)&&(delete o[y],d=!0)}d&&Me(e,"set","$attrs")}function mi(e,t,n,s){const[i,o]=e.propsOptions;let r=!1,c;if(t)for(let a in t){if(Pt(a))continue;const d=t[a];let _;i&&P(i,_=Ce(a))?!o||!o.includes(_)?n[_]=d:(c||(c={}))[_]=d:Qt(e.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,r=!0)}if(o){const a=j(n),d=c||U;for(let _=0;_<o.length;_++){const y=o[_];n[y]=En(i,a,y,d[y],e,!P(d,y))}}return r}function En(e,t,n,s,i,o){const r=e[n];if(r!=null){const c=P(r,"default");if(c&&s===void 0){const a=r.default;if(r.type!==Function&&M(a)){const{propsDefaults:d}=i;n in d?s=d[n]:(ot(i),s=d[n]=a.call(null,t),Xe())}else s=a}r[0]&&(o&&!c?s=!1:r[1]&&(s===""||s===rt(n))&&(s=!0))}return s}function _i(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const o=e.props,r={},c=[];let a=!1;if(!M(e)){const _=y=>{a=!0;const[z,A]=_i(y,t,!0);ee(r,z),A&&c.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(_),e.extends&&_(e.extends),e.mixins&&e.mixins.forEach(_)}if(!o&&!a)return q(e)&&s.set(e,tt),tt;if(k(o))for(let _=0;_<o.length;_++){const y=Ce(o[_]);_s(y)&&(r[y]=U)}else if(o)for(const _ in o){const y=Ce(_);if(_s(y)){const z=o[_],A=r[y]=k(z)||M(z)?{type:z}:z;if(A){const L=vs(Boolean,A.type),R=vs(String,A.type);A[0]=L>-1,A[1]=R<0||L<R,(L>-1||P(A,"default"))&&c.push(y)}}}const d=[r,c];return q(e)&&s.set(e,d),d}function _s(e){return e[0]!=="$"}function gs(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function bs(e,t){return gs(e)===gs(t)}function vs(e,t){return k(t)?t.findIndex(n=>bs(n,e)):M(t)&&bs(t,e)?0:-1}const gi=e=>e[0]==="_"||e==="$stable",Wn=e=>k(e)?e.map(ze):[ze(e)],ar=(e,t,n)=>{if(t._n)return t;const s=Io((...i)=>Wn(t(...i)),n);return s._c=!1,s},bi=(e,t,n)=>{const s=e._ctx;for(const i in e){if(gi(i))continue;const o=e[i];if(M(o))t[i]=ar(i,o,s);else if(o!=null){const r=Wn(o);t[i]=()=>r}}},vi=(e,t)=>{const n=Wn(t);e.slots.default=()=>n},ur=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=j(t),Lt(t,"_",n)):bi(t,e.slots={})}else e.slots={},t&&vi(e,t);Lt(e.slots,tn,1)},fr=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,r=U;if(s.shapeFlag&32){const c=t._;c?n&&c===1?o=!1:(ee(i,t),!n&&c===1&&delete i._):(o=!t.$stable,bi(t,i)),r=t}else t&&(vi(e,t),r={default:1});if(o)for(const c in i)!gi(c)&&!(c in r)&&delete i[c]};function yi(){return{app:null,config:{isNativeTag:Ri,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dr=0;function hr(e,t){return function(s,i=null){M(s)||(s=Object.assign({},s)),i!=null&&!q(i)&&(i=null);const o=yi(),r=new Set;let c=!1;const a=o.app={_uid:dr++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:Nr,get config(){return o.config},set config(d){},use(d,..._){return r.has(d)||(d&&M(d.install)?(r.add(d),d.install(a,..._)):M(d)&&(r.add(d),d(a,..._))),a},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),a},component(d,_){return _?(o.components[d]=_,a):o.components[d]},directive(d,_){return _?(o.directives[d]=_,a):o.directives[d]},mount(d,_,y){if(!c){const z=$(s,i);return z.appContext=o,_&&t?t(z,d):e(z,d,y),c=!0,a._container=d,d.__vue_app__=a,nn(z.component)||z.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,_){return o.provides[d]=_,a}};return a}}function kn(e,t,n,s,i=!1){if(k(e)){e.forEach((z,A)=>kn(z,t&&(k(t)?t[A]:t),n,s,i));return}if(St(s)&&!i)return;const o=s.shapeFlag&4?nn(s.component)||s.component.proxy:s.el,r=i?null:o,{i:c,r:a}=e,d=t&&t.r,_=c.refs===U?c.refs={}:c.refs,y=c.setupState;if(d!=null&&d!==a&&(Q(d)?(_[d]=null,P(y,d)&&(y[d]=null)):ne(d)&&(d.value=null)),M(a))Re(a,c,12,[r,_]);else{const z=Q(a),A=ne(a);if(z||A){const L=()=>{if(e.f){const R=z?_[a]:a.value;i?k(R)&&Fn(R,o):k(R)?R.includes(o)||R.push(o):z?(_[a]=[o],P(y,a)&&(y[a]=_[a])):(a.value=[o],e.k&&(_[e.k]=a.value))}else z?(_[a]=r,P(y,a)&&(y[a]=r)):A&&(a.value=r,e.k&&(_[e.k]=r))};r?(L.id=-1,re(L,n)):L()}}}const re=Lo;function pr(e){return mr(e)}function mr(e,t){const n=Ui();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:r,createText:c,createComment:a,setText:d,setElementText:_,parentNode:y,nextSibling:z,setScopeId:A=ge,cloneNode:L,insertStaticContent:R}=e,I=(l,u,f,p=null,h=null,b=null,x=!1,g=null,v=!!u.dynamicChildren)=>{if(l===u)return;l&&!qe(l,u)&&(p=Et(l),Pe(l,h,b,!0),l=null),u.patchFlag===-2&&(v=!1,u.dynamicChildren=null);const{type:m,ref:T,shapeFlag:w}=u;switch(m){case Vn:F(l,u,f,p);break;case Oe:ae(l,u,f,p);break;case hn:l==null&&X(u,f,p,x);break;case xe:Te(l,u,f,p,h,b,x,g,v);break;default:w&1?Ze(l,u,f,p,h,b,x,g,v):w&6?Tt(l,u,f,p,h,b,x,g,v):(w&64||w&128)&&m.process(l,u,f,p,h,b,x,g,v,Ge)}T!=null&&h&&kn(T,l&&l.ref,b,u||l,!u)},F=(l,u,f,p)=>{if(l==null)s(u.el=c(u.children),f,p);else{const h=u.el=l.el;u.children!==l.children&&d(h,u.children)}},ae=(l,u,f,p)=>{l==null?s(u.el=a(u.children||""),f,p):u.el=l.el},X=(l,u,f,p)=>{[l.el,l.anchor]=R(l.children,u,f,p,l.el,l.anchor)},Y=({el:l,anchor:u},f,p)=>{let h;for(;l&&l!==u;)h=z(l),s(l,f,p),l=h;s(u,f,p)},se=({el:l,anchor:u})=>{let f;for(;l&&l!==u;)f=z(l),i(l),l=f;i(u)},Ze=(l,u,f,p,h,b,x,g,v)=>{x=x||u.type==="svg",l==null?He(u,f,p,h,b,x,g,v):J(l,u,h,b,x,g,v)},He=(l,u,f,p,h,b,x,g)=>{let v,m;const{type:T,props:w,shapeFlag:E,transition:O,patchFlag:N,dirs:H}=l;if(l.el&&L!==void 0&&N===-1)v=l.el=L(l.el);else{if(v=l.el=r(l.type,b,w&&w.is,w),E&8?_(v,l.children):E&16&&W(l.children,v,null,p,h,b&&T!=="foreignObject",x,g),H&&Be(l,null,p,"created"),w){for(const K in w)K!=="value"&&!Pt(K)&&o(v,K,null,w[K],b,l.children,p,h,ke);"value"in w&&o(v,"value",null,w.value),(m=w.onVnodeBeforeMount)&&ve(m,p,l)}S(v,l,l.scopeId,x,p)}H&&Be(l,null,p,"beforeMount");const B=(!h||h&&!h.pendingBranch)&&O&&!O.persisted;B&&O.beforeEnter(v),s(v,u,f),((m=w&&w.onVnodeMounted)||B||H)&&re(()=>{m&&ve(m,p,l),B&&O.enter(v),H&&Be(l,null,p,"mounted")},h)},S=(l,u,f,p,h)=>{if(f&&A(l,f),p)for(let b=0;b<p.length;b++)A(l,p[b]);if(h){let b=h.subTree;if(u===b){const x=h.vnode;S(l,x,x.scopeId,x.slotScopeIds,h.parent)}}},W=(l,u,f,p,h,b,x,g,v=0)=>{for(let m=v;m<l.length;m++){const T=l[m]=g?Se(l[m]):ze(l[m]);I(null,T,u,f,p,h,b,x,g)}},J=(l,u,f,p,h,b,x)=>{const g=u.el=l.el;let{patchFlag:v,dynamicChildren:m,dirs:T}=u;v|=l.patchFlag&16;const w=l.props||U,E=u.props||U;let O;f&&Ue(f,!1),(O=E.onVnodeBeforeUpdate)&&ve(O,f,u,l),T&&Be(u,l,f,"beforeUpdate"),f&&Ue(f,!0);const N=h&&u.type!=="foreignObject";if(m?ie(l.dynamicChildren,m,g,f,p,N,b):x||Ee(l,u,g,null,f,p,N,b,!1),v>0){if(v&16)he(g,u,w,E,f,p,h);else if(v&2&&w.class!==E.class&&o(g,"class",null,E.class,h),v&4&&o(g,"style",w.style,E.style,h),v&8){const H=u.dynamicProps;for(let B=0;B<H.length;B++){const K=H[B],pe=w[K],et=E[K];(et!==pe||K==="value")&&o(g,K,pe,et,h,l.children,f,p,ke)}}v&1&&l.children!==u.children&&_(g,u.children)}else!x&&m==null&&he(g,u,w,E,f,p,h);((O=E.onVnodeUpdated)||T)&&re(()=>{O&&ve(O,f,u,l),T&&Be(u,l,f,"updated")},p)},ie=(l,u,f,p,h,b,x)=>{for(let g=0;g<u.length;g++){const v=l[g],m=u[g],T=v.el&&(v.type===xe||!qe(v,m)||v.shapeFlag&70)?y(v.el):f;I(v,m,T,null,p,h,b,x,!0)}},he=(l,u,f,p,h,b,x)=>{if(f!==p){for(const g in p){if(Pt(g))continue;const v=p[g],m=f[g];v!==m&&g!=="value"&&o(l,g,m,v,x,u.children,h,b,ke)}if(f!==U)for(const g in f)!Pt(g)&&!(g in p)&&o(l,g,f[g],null,x,u.children,h,b,ke);"value"in p&&o(l,"value",f.value,p.value)}},Te=(l,u,f,p,h,b,x,g,v)=>{const m=u.el=l?l.el:c(""),T=u.anchor=l?l.anchor:c("");let{patchFlag:w,dynamicChildren:E,slotScopeIds:O}=u;O&&(g=g?g.concat(O):O),l==null?(s(m,f,p),s(T,f,p),W(u.children,f,T,h,b,x,g,v)):w>0&&w&64&&E&&l.dynamicChildren?(ie(l.dynamicChildren,E,f,h,b,x,g),(u.key!=null||h&&u===h.subTree)&&xi(l,u,!0)):Ee(l,u,f,T,h,b,x,g,v)},Tt=(l,u,f,p,h,b,x,g,v)=>{u.slotScopeIds=g,l==null?u.shapeFlag&512?h.ctx.activate(u,f,p,x,v):sn(u,f,p,h,b,x,v):oe(l,u,v)},sn=(l,u,f,p,h,b,x)=>{const g=l.component=Er(l,p,h);if(Gt(l)&&(g.ctx.renderer=Ge),Ar(g),g.asyncDep){if(h&&h.registerDep(g,V),!l.el){const v=g.subTree=$(Oe);ae(null,v,u,f)}return}V(g,l,u,f,h,b,x)},oe=(l,u,f)=>{const p=u.component=l.component;if(So(l,u,f))if(p.asyncDep&&!p.asyncResolved){D(p,u,f);return}else p.next=u,ko(p.update),p.update();else u.el=l.el,p.vnode=u},V=(l,u,f,p,h,b,x)=>{const g=()=>{if(l.isMounted){let{next:T,bu:w,u:E,parent:O,vnode:N}=l,H=T,B;Ue(l,!1),T?(T.el=N.el,D(l,T,x)):T=N,w&&Ft(w),(B=T.props&&T.props.onVnodeBeforeUpdate)&&ve(B,O,T,N),Ue(l,!0);const K=an(l),pe=l.subTree;l.subTree=K,I(pe,K,y(pe.el),Et(pe),l,h,b),T.el=K.el,H===null&&No(l,K.el),E&&re(E,h),(B=T.props&&T.props.onVnodeUpdated)&&re(()=>ve(B,O,T,N),h)}else{let T;const{el:w,props:E}=u,{bm:O,m:N,parent:H}=l,B=St(u);if(Ue(l,!1),O&&Ft(O),!B&&(T=E&&E.onVnodeBeforeMount)&&ve(T,H,u),Ue(l,!0),w&&ln){const K=()=>{l.subTree=an(l),ln(w,l.subTree,l,h,null)};B?u.type.__asyncLoader().then(()=>!l.isUnmounted&&K()):K()}else{const K=l.subTree=an(l);I(null,K,f,p,l,h,b),u.el=K.el}if(N&&re(N,h),!B&&(T=E&&E.onVnodeMounted)){const K=u;re(()=>ve(T,H,K),h)}(u.shapeFlag&256||H&&St(H.vnode)&&H.vnode.shapeFlag&256)&&l.a&&re(l.a,h),l.isMounted=!0,u=f=p=null}},v=l.effect=new Rn(g,()=>Kn(m),l.scope),m=l.update=()=>v.run();m.id=l.uid,Ue(l,!0),m()},D=(l,u,f)=>{u.component=l;const p=l.vnode.props;l.vnode=u,l.next=null,cr(l,u.props,p,f),fr(l,u.children,f),lt(),as(),ct()},Ee=(l,u,f,p,h,b,x,g,v=!1)=>{const m=l&&l.children,T=l?l.shapeFlag:0,w=u.children,{patchFlag:E,shapeFlag:O}=u;if(E>0){if(E&128){ft(m,w,f,p,h,b,x,g,v);return}else if(E&256){on(m,w,f,p,h,b,x,g,v);return}}O&8?(T&16&&ke(m,h,b),w!==m&&_(f,w)):T&16?O&16?ft(m,w,f,p,h,b,x,g,v):ke(m,h,b,!0):(T&8&&_(f,""),O&16&&W(w,f,p,h,b,x,g,v))},on=(l,u,f,p,h,b,x,g,v)=>{l=l||tt,u=u||tt;const m=l.length,T=u.length,w=Math.min(m,T);let E;for(E=0;E<w;E++){const O=u[E]=v?Se(u[E]):ze(u[E]);I(l[E],O,f,null,h,b,x,g,v)}m>T?ke(l,h,b,!0,!1,w):W(u,f,p,h,b,x,g,v,w)},ft=(l,u,f,p,h,b,x,g,v)=>{let m=0;const T=u.length;let w=l.length-1,E=T-1;for(;m<=w&&m<=E;){const O=l[m],N=u[m]=v?Se(u[m]):ze(u[m]);if(qe(O,N))I(O,N,f,null,h,b,x,g,v);else break;m++}for(;m<=w&&m<=E;){const O=l[w],N=u[E]=v?Se(u[E]):ze(u[E]);if(qe(O,N))I(O,N,f,null,h,b,x,g,v);else break;w--,E--}if(m>w){if(m<=E){const O=E+1,N=O<T?u[O].el:p;for(;m<=E;)I(null,u[m]=v?Se(u[m]):ze(u[m]),f,N,h,b,x,g,v),m++}}else if(m>E)for(;m<=w;)Pe(l[m],h,b,!0),m++;else{const O=m,N=m,H=new Map;for(m=N;m<=E;m++){const le=u[m]=v?Se(u[m]):ze(u[m]);le.key!=null&&H.set(le.key,m)}let B,K=0;const pe=E-N+1;let et=!1,Zn=0;const dt=new Array(pe);for(m=0;m<pe;m++)dt[m]=0;for(m=O;m<=w;m++){const le=l[m];if(K>=pe){Pe(le,h,b,!0);continue}let be;if(le.key!=null)be=H.get(le.key);else for(B=N;B<=E;B++)if(dt[B-N]===0&&qe(le,u[B])){be=B;break}be===void 0?Pe(le,h,b,!0):(dt[be-N]=m+1,be>=Zn?Zn=be:et=!0,I(le,u[be],f,null,h,b,x,g,v),K++)}const Qn=et?_r(dt):tt;for(B=Qn.length-1,m=pe-1;m>=0;m--){const le=N+m,be=u[le],Gn=le+1<T?u[le+1].el:p;dt[m]===0?I(null,be,f,Gn,h,b,x,g,v):et&&(B<0||m!==Qn[B]?Qe(be,f,Gn,2):B--)}}},Qe=(l,u,f,p,h=null)=>{const{el:b,type:x,transition:g,children:v,shapeFlag:m}=l;if(m&6){Qe(l.component.subTree,u,f,p);return}if(m&128){l.suspense.move(u,f,p);return}if(m&64){x.move(l,u,f,Ge);return}if(x===xe){s(b,u,f);for(let w=0;w<v.length;w++)Qe(v[w],u,f,p);s(l.anchor,u,f);return}if(x===hn){Y(l,u,f);return}if(p!==2&&m&1&&g)if(p===0)g.beforeEnter(b),s(b,u,f),re(()=>g.enter(b),h);else{const{leave:w,delayLeave:E,afterLeave:O}=g,N=()=>s(b,u,f),H=()=>{w(b,()=>{N(),O&&O()})};E?E(b,N,H):H()}else s(b,u,f)},Pe=(l,u,f,p=!1,h=!1)=>{const{type:b,props:x,ref:g,children:v,dynamicChildren:m,shapeFlag:T,patchFlag:w,dirs:E}=l;if(g!=null&&kn(g,null,f,l,!0),T&256){u.ctx.deactivate(l);return}const O=T&1&&E,N=!St(l);let H;if(N&&(H=x&&x.onVnodeBeforeUnmount)&&ve(H,u,l),T&6)ki(l.component,f,p);else{if(T&128){l.suspense.unmount(f,p);return}O&&Be(l,null,u,"beforeUnmount"),T&64?l.type.remove(l,u,f,h,Ge,p):m&&(b!==xe||w>0&&w&64)?ke(m,u,f,!1,!0):(b===xe&&w&384||!h&&T&16)&&ke(v,u,f),p&&Jn(l)}(N&&(H=x&&x.onVnodeUnmounted)||O)&&re(()=>{H&&ve(H,u,l),O&&Be(l,null,u,"unmounted")},f)},Jn=l=>{const{type:u,el:f,anchor:p,transition:h}=l;if(u===xe){Ei(f,p);return}if(u===hn){se(l);return}const b=()=>{i(f),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(l.shapeFlag&1&&h&&!h.persisted){const{leave:x,delayLeave:g}=h,v=()=>x(f,b);g?g(l.el,b,v):v()}else b()},Ei=(l,u)=>{let f;for(;l!==u;)f=z(l),i(l),l=f;i(u)},ki=(l,u,f)=>{const{bum:p,scope:h,update:b,subTree:x,um:g}=l;p&&Ft(p),h.stop(),b&&(b.active=!1,Pe(x,l,u,f)),g&&re(g,u),re(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ke=(l,u,f,p=!1,h=!1,b=0)=>{for(let x=b;x<l.length;x++)Pe(l[x],u,f,p,h)},Et=l=>l.shapeFlag&6?Et(l.component.subTree):l.shapeFlag&128?l.suspense.next():z(l.anchor||l.el),Xn=(l,u,f)=>{l==null?u._vnode&&Pe(u._vnode,null,null,!0):I(u._vnode||null,l,u,null,null,null,f),as(),ei(),u._vnode=l},Ge={p:I,um:Pe,m:Qe,r:Jn,mt:sn,mc:W,pc:Ee,pbc:ie,n:Et,o:e};let rn,ln;return t&&([rn,ln]=t(Ge)),{render:Xn,hydrate:rn,createApp:hr(Xn,rn)}}function Ue({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xi(e,t,n=!1){const s=e.children,i=t.children;if(k(s)&&k(i))for(let o=0;o<s.length;o++){const r=s[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=Se(i[o]),c.el=r.el),n||xi(r,c))}}function _r(e){const t=e.slice(),n=[0];let s,i,o,r,c;const a=e.length;for(s=0;s<a;s++){const d=e[s];if(d!==0){if(i=n[n.length-1],e[i]<d){t[s]=i,n.push(s);continue}for(o=0,r=n.length-1;o<r;)c=o+r>>1,e[n[c]]<d?o=c+1:r=c;d<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}const gr=e=>e.__isTeleport,xe=Symbol(void 0),Vn=Symbol(void 0),Oe=Symbol(void 0),hn=Symbol(void 0),pt=[];let _e=null;function at(e=!1){pt.push(_e=e?null:[])}function br(){pt.pop(),_e=pt[pt.length-1]||null}let vt=1;function ys(e){vt+=e}function vr(e){return e.dynamicChildren=vt>0?_e||tt:null,br(),vt>0&&_e&&_e.push(e),e}function ut(e,t,n,s,i,o){return vr(C(e,t,n,s,i,o,!0))}function yr(e){return e?e.__v_isVNode===!0:!1}function qe(e,t){return e.type===t.type&&e.key===t.key}const tn="__vInternal",zi=({key:e})=>e!=null?e:null,Nt=({ref:e,ref_key:t,ref_for:n})=>e!=null?Q(e)||ne(e)||M(e)?{i:fe,r:e,k:t,f:!!n}:e:null;function C(e,t=null,n=null,s=0,i=null,o=e===xe?0:1,r=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zi(t),ref:t&&Nt(t),scopeId:si,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(Yn(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=Q(n)?8:16),vt>0&&!r&&_e&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&_e.push(a),a}const $=xr;function xr(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===Go)&&(e=Oe),yr(e)){const c=je(e,t,!0);return n&&Yn(c,n),vt>0&&!o&&_e&&(c.shapeFlag&6?_e[_e.indexOf(e)]=c:_e.push(c)),c.patchFlag|=-2,c}if(Fr(e)&&(e=e.__vccOpts),t){t=zr(t);let{class:c,style:a}=t;c&&!Q(c)&&(t.class=xt(c)),q(a)&&(Ys(a)&&!k(a)&&(a=ee({},a)),t.style=In(a))}const r=Q(e)?1:Ro(e)?128:gr(e)?64:q(e)?4:M(e)?2:0;return C(e,t,n,s,i,r,o,!0)}function zr(e){return e?Ys(e)||tn in e?ee({},e):e:null}function je(e,t,n=!1){const{props:s,ref:i,patchFlag:o,children:r}=e,c=t?wr(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&zi(c),ref:t&&t.ref?n&&i?k(i)?i.concat(Nt(t)):[i,Nt(t)]:Nt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&je(e.ssContent),ssFallback:e.ssFallback&&je(e.ssFallback),el:e.el,anchor:e.anchor}}function wt(e=" ",t=0){return $(Vn,null,e,t)}function ze(e){return e==null||typeof e=="boolean"?$(Oe):k(e)?$(xe,null,e.slice()):typeof e=="object"?Se(e):$(Vn,null,String(e))}function Se(e){return e.el===null||e.memo?e:je(e)}function Yn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(k(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Yn(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(tn in t)?t._ctx=fe:i===3&&fe&&(fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else M(t)?(t={default:t,_ctx:fe},n=32):(t=String(t),s&64?(n=16,t=[wt(t)]):n=8);e.children=t,e.shapeFlag|=n}function wr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=xt([t.class,s.class]));else if(i==="style")t.style=In([t.style,s.style]);else if(Wt(i)){const o=t[i],r=s[i];r&&o!==r&&!(k(o)&&o.includes(r))&&(t[i]=o?[].concat(o,r):r)}else i!==""&&(t[i]=s[i])}return t}function ve(e,t,n,s=null){de(e,t,7,[n,s])}const Cr=yi();let Tr=0;function Er(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Cr,o={uid:Tr++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_i(s,i),emitsOptions:ni(s,i),emit:null,emitted:null,propsDefaults:U,inheritAttrs:s.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Mo.bind(null,o),e.ce&&e.ce(o),o}let Z=null;const kr=()=>Z||fe,ot=e=>{Z=e,e.scope.on()},Xe=()=>{Z&&Z.scope.off(),Z=null};function wi(e){return e.vnode.shapeFlag&4}let yt=!1;function Ar(e,t=!1){yt=t;const{props:n,children:s}=e.vnode,i=wi(e);lr(e,n,i,t),ur(e,s);const o=i?Or(e,t):void 0;return yt=!1,o}function Or(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Js(new Proxy(e.ctx,tr));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?Ir(e):null;ot(e),lt();const o=Re(s,e,0,[e.props,i]);if(ct(),Xe(),Ss(o)){if(o.then(Xe,Xe),t)return o.then(r=>{xs(e,r,t)}).catch(r=>{Zt(r,e,0)});e.asyncDep=o}else xs(e,o,t)}else Ci(e,t)}function xs(e,t,n){M(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=Xs(t)),Ci(e,n)}let zs;function Ci(e,t,n){const s=e.type;if(!e.render){if(!t&&zs&&!s.render){const i=s.template||qn(e).template;if(i){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:c,compilerOptions:a}=s,d=ee(ee({isCustomElement:o,delimiters:c},r),a);s.render=zs(i,d)}}e.render=s.render||ge}ot(e),lt(),nr(e),ct(),Xe()}function Mr(e){return new Proxy(e.attrs,{get(t,n){return ce(e,"get","$attrs"),t[n]}})}function Ir(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Mr(e))},slots:e.slots,emit:e.emit,expose:t}}function nn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xs(Js(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bt)return Bt[n](e)}}))}function Pr(e,t=!0){return M(e)?e.displayName||e.name:e.name||t&&e.__name}function Fr(e){return M(e)&&"__vccOpts"in e}const Sr=(e,t)=>wo(e,t,yt),Nr="3.2.39",Rr="http://www.w3.org/2000/svg",We=typeof document<"u"?document:null,ws=We&&We.createElement("template"),Lr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?We.createElementNS(Rr,e):We.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,i,o){const r=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{ws.innerHTML=s?`<svg>${e}</svg>`:e;const c=ws.content;if(s){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jr(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function $r(e,t,n){const s=e.style,i=Q(n);if(n&&!i){for(const o in n)An(s,o,n[o]);if(t&&!Q(t))for(const o in t)n[o]==null&&An(s,o,"")}else{const o=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Cs=/\s*!important$/;function An(e,t,n){if(k(n))n.forEach(s=>An(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Hr(e,t);Cs.test(n)?e.setProperty(rt(s),n.replace(Cs,""),"important"):e[s]=n}}const Ts=["Webkit","Moz","ms"],pn={};function Hr(e,t){const n=pn[t];if(n)return n;let s=Ce(t);if(s!=="filter"&&s in e)return pn[t]=s;s=Jt(s);for(let i=0;i<Ts.length;i++){const o=Ts[i]+s;if(o in e)return pn[t]=o}return t}const Es="http://www.w3.org/1999/xlink";function Br(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Es,t.slice(6,t.length)):e.setAttributeNS(Es,t,n);else{const o=Oi(t);n==null||o&&!Ps(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Ur(e,t,n,s,i,o,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,i,o),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ps(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}const[Ti,Dr]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let On=0;const Kr=Promise.resolve(),qr=()=>{On=0},Wr=()=>On||(Kr.then(qr),On=Ti());function Ve(e,t,n,s){e.addEventListener(t,n,s)}function Vr(e,t,n,s){e.removeEventListener(t,n,s)}function Yr(e,t,n,s,i=null){const o=e._vei||(e._vei={}),r=o[t];if(s&&r)r.value=s;else{const[c,a]=Jr(t);if(s){const d=o[t]=Xr(s,i);Ve(e,c,d,a)}else r&&(Vr(e,c,r,a),o[t]=void 0)}}const ks=/(?:Once|Passive|Capture)$/;function Jr(e){let t;if(ks.test(e)){t={};let s;for(;s=e.match(ks);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rt(e.slice(2)),t]}function Xr(e,t){const n=s=>{const i=s.timeStamp||Ti();(Dr||i>=n.attached-1)&&de(Zr(s,n.value),t,5,[s])};return n.value=e,n.attached=Wr(),n}function Zr(e,t){if(k(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const As=/^on[a-z]/,Qr=(e,t,n,s,i=!1,o,r,c,a)=>{t==="class"?jr(e,s,i):t==="style"?$r(e,n,s):Wt(t)?Pn(t)||Yr(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gr(e,t,s,i))?Ur(e,t,s,o,r,c,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Br(e,t,s,i))};function Gr(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&As.test(t)&&M(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||As.test(t)&&Q(n)?!1:t in e}const el={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Uo.props;const Dt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return k(t)?n=>Ft(t,n):t};function tl(e){e.target.composing=!0}function Os(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const nl={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Dt(i);const o=s||i.props&&i.props.type==="number";Ve(e,t?"change":"input",r=>{if(r.target.composing)return;let c=e.value;n&&(c=c.trim()),o&&(c=jt(c)),e._assign(c)}),n&&Ve(e,"change",()=>{e.value=e.value.trim()}),t||(Ve(e,"compositionstart",tl),Ve(e,"compositionend",Os),Ve(e,"change",Os))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=Dt(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&jt(e.value)===t))return;const r=t==null?"":t;e.value!==r&&(e.value=r)}},sl={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const i=Vt(t);Ve(e,"change",()=>{const o=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>n?jt(Kt(r)):Kt(r));e._assign(e.multiple?i?new Set(o):o:o[0])}),e._assign=Dt(s)},mounted(e,{value:t}){Ms(e,t)},beforeUpdate(e,t,n){e._assign=Dt(n)},updated(e,{value:t}){Ms(e,t)}};function Ms(e,t){const n=e.multiple;if(!(n&&!k(t)&&!Vt(t))){for(let s=0,i=e.options.length;s<i;s++){const o=e.options[s],r=Kt(o);if(n)k(t)?o.selected=Si(t,r)>-1:o.selected=t.has(r);else if(qt(Kt(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Kt(e){return"_value"in e?e._value:e.value}const il=ee({patchProp:Qr},Lr);let Is;function ol(){return Is||(Is=pr(il))}const rl=(...e)=>{const t=ol().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=ll(s);if(!i)return;const o=t._component;!M(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const r=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function ll(e){return Q(e)?document.querySelector(e):e}const Ct=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},cl={name:"Range",props:{label:{type:String,required:!0},tooltip:{type:String,required:!0},name:{type:String,required:!0},value:{type:String,required:!0},step:{type:String,required:!0},min:{type:String,required:!0},max:{type:String,required:!0}},data(){return{labelValue:this.value,value:this.value,update:e=>{this.labelValue=e.target.value,this.value=e.target.value}}},setup(e,{emit:t}){return e=$e(e),{}},methods:{}},al={class:"form-control position-relative"},ul=["innerHTML"],fl=["innerHTML"],dl=["title"],hl=C("i",{class:"bx bxs-info-circle text-primary"},null,-1),pl=[hl],ml=["name","max","min","step"];function _l(e,t,n,s,i,o){return at(),ut("div",al,[C("label",{for:"customRange1",class:"form-label text-start d-block",innerHTML:n.label},null,8,ul),C("span",{class:"position-absolute",style:{right:"10px",top:"10px"},innerHTML:i.labelValue},null,8,fl),C("span",{class:"position-absolute",style:{left:"-15px",top:"2px","font-size":"24px",cursor:"help"},title:n.tooltip},pl,8,dl),di(C("input",{type:"range",name:n.name,class:"form-range js-setting",id:"customRange1",onChange:t[0]||(t[0]=(...r)=>i.update&&i.update(...r)),max:n.max,"onUpdate:modelValue":t[1]||(t[1]=r=>i.value=r),min:n.min,step:n.step},null,40,ml),[[nl,i.value]])])}const gl=Ct(cl,[["render",_l]]),bl={name:"Toggle",props:{label:{type:String,required:!0},name:{type:String,required:!0},tooltip:{type:String,required:!0},checked:{type:String,required:!1}},data(){return{value:this.value,update:e=>{this.value=e.target.value}}},setup(e,{emit:t}){return e=$e(e),{}},methods:{}},vl={class:"form-check form-switch"},yl=["name","checked"],xl=["innerHTML"],zl=["title"];function wl(e,t,n,s,i,o){return at(),ut("div",vl,[C("input",{class:"form-check-input js-setting",type:"checkbox",id:"mySwitch",name:n.name,checked:n.checked==="true"},null,8,yl),C("label",{class:"form-check-label",for:"mySwitch",innerHTML:n.label},null,8,xl),C("i",{class:xt(["bx bxs-info-circle text-primary ms-2",{"d-none":n.tooltip===""}]),style:{position:"relative",top:"5px","font-size":"24px",cursor:"help"},title:n.tooltip},null,10,zl)])}const Cl=Ct(bl,[["render",wl]]),Tl={name:"Sidebar",components:{Toggle:Cl,Range:gl},props:{title:{type:String,required:!0}},data(){return{}},setup(e,{emit:t}){return e=$e(e),{}},methods:{collapseGroup:function(e){e.target.parentNode.classList.contains("active")?e.target.parentNode.classList.remove("active"):e.target.parentNode.classList.add("active")}}},El={class:"c-sidebar__wrapper"},kl={class:"c-sidebar__header row align-items-center"},Al=C("div",{class:"c-sidebar__header__collapse col-2"},[C("i",{class:"bx bxs-cog"})],-1),Ol=["textContent"],Ml={class:"row c-sidebar__settings mt-3"},Il={class:"c-collapsable-group"},Pl=wt(" Network Size "),Fl=C("i",{class:"c-collapsable-group__chevron bx bx-chevron-right float-end"},null,-1),Sl=[Pl,Fl],Nl={class:"c-collapsable-group__container"},Rl={class:"col-12 mb-3"},Ll={class:"col-12 mb-3"},jl={class:"col-12"},$l={class:"c-collapsable-group"},Hl=wt(" Configuration "),Bl=C("i",{class:"c-collapsable-group__chevron bx bx-chevron-right float-end"},null,-1),Ul=[Hl,Bl],Dl={class:"c-collapsable-group__container"},Kl={class:"col-12 mb-3"},ql={class:"col-12 mb-3"},Wl={class:"col-12 mb-3"},Vl={class:"col-12 mb-3"},Yl={class:"col-12> mb-3"},Jl={class:"col-12 mb-3"},Xl={class:"col-12 mb-3"},Zl={class:"col-12"},Ql={class:"c-collapsable-group"},Gl=wt(" Augmentation "),ec=C("i",{class:"c-collapsable-group__chevron bx bx-chevron-right float-end"},null,-1),tc=[Gl,ec],nc={class:"c-collapsable-group__container"},sc={class:"col-12 mb-3"},ic={class:"col-12 mb-3"},oc={class:"col-12 mb-3"},rc={class:"col-12 mb-3"},lc={class:"col-12 mb-3"},cc={class:"col-12 mb-3"},ac={class:"col-12"};function uc(e,t,n,s,i,o){const r=Ht("Range"),c=Ht("Toggle");return at(),ut("div",{class:xt(["c-sidebar",{"c-sidebar--collapsed":e.collapsed}])},[C("div",El,[C("div",kl,[Al,C("div",{class:"c-sidebar__header__title col-10 text-end",textContent:Ni(n.title)},null,8,Ol)]),C("div",Ml,[C("div",Il,[C("h4",{class:"mb-3 d-block c-collapsable-group__button",onClick:t[0]||(t[0]=(...a)=>o.collapseGroup&&o.collapseGroup(...a))},Sl),C("div",Nl,[C("div",Rl,[$(r,{name:"width",tooltip:"Network size (width), so every image will be resized to the network size during Training and Detection",label:"Width",max:"1024",min:"32",value:"416",step:"32"})]),C("div",Ll,[$(r,{name:"height",tooltip:"Network size (height), so every image will be resized to the network size during Training and Detection",label:"Height",max:"1024",min:"32",value:"416",step:"32"})]),C("div",jl,[$(r,{name:"classes",tooltip:"The number of labeled classifiers in your image set.",label:"Number of Classifiers",max:"1000",min:"1",value:"1",step:"1"})])])]),C("div",$l,[C("h4",{class:"mb-3 d-block c-collapsable-group__button",onClick:t[1]||(t[1]=(...a)=>o.collapseGroup&&o.collapseGroup(...a))},Ul),C("div",Dl,[C("div",Kl,[$(r,{name:"batch",tooltip:"The number of samples (images, letters, ...) which will be processed in one batch.",label:"Batch Size",max:"320",min:"2",value:"64",step:"2"})]),C("div",ql,[$(r,{name:"sub_divisions",tooltip:"The number of mini_batches in one batch, size mini_batch = batch/subdivisions, so GPU processes.",label:"Sub Divisions",max:"320",min:"2",value:"12",step:"2"})]),C("div",Wl,[$(r,{name:"channels",tooltip:"The network size (channels), so every image will be converted to this number of channels during Training and Detection.",label:"Channels",max:"4",min:"1",value:"3",step:"1"})]),C("div",Vl,[$(r,{name:"momentum",tooltip:"Accumulation of movement, how much the history affects the further change of weights (optimizer).",label:"Momentum",max:"10",min:"0.01",value:"0.9",step:"0.01"})]),C("div",Yl,[$(r,{name:"decay",tooltip:"A weaker updating of the weights for typical features, it eliminates unbalance in the dataset (optimizer).",label:"Decay",max:"1",min:"0.0001",value:"0.0005",step:"0.0001"})]),C("div",Jl,[$(r,{name:"learning_rate",tooltip:"The initial learning rate for training.",label:"Learning Rate",max:"1",min:"0.00001",value:"0.00261",step:"0.00001"})]),C("div",Xl,[$(r,{name:"burn_in",tooltip:"The initial burn_in will be processed for the first 1000 iterations.",label:"Burn-In",max:"10000",min:"1",value:"250",step:"1"})]),C("div",Zl,[$(c,{name:"random",tooltip:"",label:"My Images are Different Resolutions",checked:"false"})])])]),C("div",Ql,[C("h4",{class:"mb-3 d-block c-collapsable-group__button",onClick:t[2]||(t[2]=(...a)=>o.collapseGroup&&o.collapseGroup(...a))},tc),C("div",nc,[C("div",sc,[$(r,{name:"angle",tooltip:"Randomly rotates images during training (classification only).",label:"Angle",max:"5",min:"0",value:"0.05",step:"0.01"})]),C("div",ic,[$(r,{name:"saturation",tooltip:"Randomly changes saturation of images during training.",label:"Saturation",max:"5",min:"0",value:"1.5",step:"0.01"})]),C("div",oc,[$(r,{name:"exposure",tooltip:"Randomly changes exposure (brightness) during training.",label:"Exposure",max:"5",min:"0",value:"1.5",step:"0.01"})]),C("div",rc,[$(r,{name:"hue",tooltip:"Randomly changes hue (color) during training.",label:"Hue",max:"5",min:"0",value:"0.1",step:"0.01"})]),C("div",lc,[$(c,{name:"mosaic",tooltip:"Use Mosaic data augmentation (4 images in one).",label:"Mosaic",checked:"true"})]),C("div",cc,[$(c,{name:"mixup",tooltip:"Randomly overlay images at 50% opacity.",label:"Mix-up",checked:"true"})]),C("div",ac,[$(c,{name:"blur",tooltip:"Blur will be applied randomly.",label:"Blur",checked:"false"})])])])])])],2)}const fc=Ct(Tl,[["render",uc]]),dc={name:"Config",props:{},data(){return{content:"",activeTemplate:"yolov4-tiny",templates:{"yolov4-tiny":`[net]
batch=[batch]
subdivisions=[sub_divisions]
width=[width]
height=[height]
channels=[channels]
momentum=[momentum]
decay=[decay]

angle=[angle]
saturation=[saturation]
exposure=[exposure]
hue=[hue]
blur=[blur]
mosaic=[mosaic]
mixup=[mixup]
learning_rate=[learning_rate]
burn_in=[burn_in]
max_batches=[max_batches_calced]
policy=steps
steps=[steps]
scales=[scales]

[convolutional]
batch_normalize=1
filters=32
size=3
stride=2
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=2
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers=-1
groups=2
group_id=1

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -1,-2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -6,-1

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[route]
layers=-1
groups=2
group_id=1

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -1,-2

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -6,-1

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=256
size=3
stride=1
pad=1
activation=leaky

[route]
layers=-1
groups=2
group_id=1

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -1,-2

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -6,-1

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=512
size=3
stride=1
pad=1
activation=leaky

##################################

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=512
size=3
stride=1
pad=1
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
activation=linear



[yolo]
mask = 3,4,5
anchors = 10,14,  23,27,  37,58,  81,82,  135,169,  344,319
classes=[classes]
num=6
jitter=.3
scale_x_y = 1.05
cls_normalizer=1.0
iou_normalizer=0.07
iou_loss=ciou
ignore_thresh = .7
truth_thresh = 1
random=[random]
resize=1.5
nms_kind=greedynms
beta_nms=0.6

[route]
layers = -4

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[upsample]
stride=2

[route]
layers = -1, 23

[convolutional]
batch_normalize=1
filters=256
size=3
stride=1
pad=1
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
activation=linear

[yolo]
mask = 0,1,2
anchors = 10,14,  23,27,  37,58,  81,82,  135,169,  344,319
classes=[classes]
num=6
jitter=.3
scale_x_y = 1.05
cls_normalizer=1.0
iou_normalizer=0.07
iou_loss=ciou
ignore_thresh = .7
truth_thresh = 1
random=[random]
resize=1.5
nms_kind=greedynms
beta_nms=0.6
        `,"yolov7-tiny":`[net]
batch=[batch]
subdivisions=[sub_divisions]
width=[width]
height=[height]
channels=[channels]
momentum=[momentum]
decay=[decay]

angle=[angle]
saturation=[saturation]
exposure=[exposure]
hue=[hue]
blur=[blur]
mosaic=[mosaic]
mixup=[mixup]
learning_rate=[learning_rate]
burn_in=[burn_in]
max_batches=[max_batches_calced]
policy=steps
steps=[steps]
scales=[scales]

# 0
[convolutional]
batch_normalize=1
filters=32
size=3
stride=2
pad=1
activation=leaky

# 1
[convolutional]
batch_normalize=1
filters=64
size=3
stride=2
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=32
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 8
[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 16
[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 24
[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[maxpool]
size=2
stride=2

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=256
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=256
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 32
[convolutional]
batch_normalize=1
filters=512
size=1
stride=1
pad=1
activation=leaky


##################################

### SPPCSP ###
[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -2

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

### SPP ###
[maxpool]
stride=1
size=5

[route]
layers=-2

[maxpool]
stride=1
size=9

[route]
layers=-4

[maxpool]
stride=1
size=13

[route]
layers=-1,-3,-5,-6
### End SPP ###

[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -10,-1

# 44
[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky
### End SPPCSP ###

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[upsample]
stride=2

[route]
layers = 24

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -1,-3

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 56
[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[upsample]
stride=2

[route]
layers = 16

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers = -1,-3

[convolutional]
batch_normalize=1
filters=32
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=32
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=32
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 68
[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

##########################

[convolutional]
batch_normalize=1
size=3
stride=2
pad=1
filters=128
activation=leaky

[route]
layers = -1,56

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=64
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=64
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 77
[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
size=3
stride=2
pad=1
filters=256
activation=leaky

[route]
layers = -1,44

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[route]
layers=-2

[convolutional]
batch_normalize=1
filters=128
size=1
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[convolutional]
batch_normalize=1
filters=128
size=3
stride=1
pad=1
activation=leaky

[route]
layers = -5,-3,-2,-1

# 86
[convolutional]
batch_normalize=1
filters=256
size=1
stride=1
pad=1
activation=leaky

#############################

# ============ End of Neck ============ #

# ============ Head ============ #


# P3
[route]
layers = 68

[convolutional]
batch_normalize=1
size=3
stride=1
pad=1
filters=128
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
#activation=linear
activation=logistic

[yolo]
mask = 0,1,2
anchors = 10,13, 16,30, 33,23, 30,61, 62,45, 59,119, 116,90, 156,198, 373,326
classes=[classes]
num=9
jitter=.1
scale_x_y = 2.0
objectness_smooth=1
ignore_thresh = .7
truth_thresh = 1
#random=1
resize=1.5
iou_thresh=0.2
iou_normalizer=0.05
cls_normalizer=0.5
obj_normalizer=1.0
iou_loss=ciou
nms_kind=diounms
beta_nms=0.6
new_coords=1
max_delta=2


# P4
[route]
layers = 77

[convolutional]
batch_normalize=1
size=3
stride=1
pad=1
filters=256
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
#activation=linear
activation=logistic

[yolo]
mask = 3,4,5
anchors = 10,13, 16,30, 33,23, 30,61, 62,45, 59,119, 116,90, 156,198, 373,326
classes=[classes]
num=9
jitter=.1
scale_x_y = 2.0
objectness_smooth=1
ignore_thresh = .7
truth_thresh = 1
#random=1
resize=1.5
iou_thresh=0.2
iou_normalizer=0.05
cls_normalizer=0.5
obj_normalizer=1.0
iou_loss=ciou
nms_kind=diounms
beta_nms=0.6
new_coords=1
max_delta=2


# P5
[route]
layers = 86

[convolutional]
batch_normalize=1
size=3
stride=1
pad=1
filters=512
activation=leaky

[convolutional]
size=1
stride=1
pad=1
filters=[filters]
#activation=linear
activation=logistic

[yolo]
mask = 6,7,8
anchors = 10,13, 16,30, 33,23, 30,61, 62,45, 59,119, 116,90, 156,198, 373,326
classes=[classes]
num=9
jitter=.1
scale_x_y = 2.0
objectness_smooth=1
ignore_thresh = .7
truth_thresh = 1
#random=1
resize=1.5
iou_thresh=0.2
iou_normalizer=0.05
cls_normalizer=0.5
obj_normalizer=1.0
iou_loss=ciou
nms_kind=diounms
beta_nms=0.6
new_coords=1
max_delta=2
        `},parseTemplate:()=>{let e=this.templates[this.activeTemplate],t={};document.querySelectorAll(".js-setting").forEach(function(r,c){let a=r.name,d=r.value;r.type==="checkbox"?(t[a]=r.checked?"1":"0",e=e.replaceAll("["+a+"]",t[a])):(t[a]=d,e=e.replaceAll("["+a+"]",d))});let n=parseInt(t.classes),s=Math.round(2e3*n),i=[Math.round(s*.8),Math.round(s*.9)],o=[2.5,.5];e=e.replaceAll("[steps]",i.join(",")),e=e.replaceAll("[scales]",o.join(",")),e=e.replaceAll("[max_batches_calced]",s),e=e.replaceAll("[filters]",Math.round((n+5)*3)),this.content=e}}},setup(e,{emit:t}){return e=$e(e),{}},methods:{},mounted(){let e=this;this.content=this.templates[this.activeTemplate],setTimeout(function(){e.parseTemplate()}),window.addEventListener("change",function(){e.parseTemplate()})}},hc={class:"c-config"},pc={class:"row"},mc=C("div",{class:"col-8"},[C("h3",{class:"fw-bolder mb-3"},[C("i",{class:"bx bxs-drink"}),wt(" MARTINI "),C("span",{style:{"font-size":"12px"}},"(YOLO Configurator)")])],-1),_c={class:"col-4"},gc=C("option",{value:"yolov4-tiny"},"YOLO v4 Tiny",-1),bc=C("option",{value:"yolov7-tiny"},"YOLO v7 Tiny",-1),vc=[gc,bc],yc={class:"col-12"},xc=["value"];function zc(e,t,n,s,i,o){return at(),ut("div",hc,[C("div",pc,[mc,C("div",_c,[di(C("select",{class:"from-select w-100 form-control-sm","onUpdate:modelValue":t[0]||(t[0]=r=>i.activeTemplate=r)},vc,512),[[sl,i.activeTemplate]])]),C("div",yc,[C("textarea",{value:i.content,onKeydown:t[1]||(t[1]=(...r)=>i.parseTemplate&&i.parseTemplate(...r)),readonly:""},null,40,xc)])])])}const wc=Ct(dc,[["render",zc]]),Cc={name:"LabelerContainer",components:{Config:wc,Sidebar:fc},props:{},setup(e,{emit:t}){return e=$e(e),{}}},Tc={class:"row"},Ec={class:"col-sm-6 col-md-8 col-xl-9 col-xxl-10 p-0"},kc={class:"col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-0"};function Ac(e,t,n,s,i,o){const r=Ht("Config"),c=Ht("Sidebar");return at(),ut("div",Tc,[C("div",Ec,[$(r)]),C("div",kc,[$(c,{title:"Settings"})])])}const Oc=Ct(Cc,[["render",Ac]]);const Mc={class:"container-fluid"},Ic={__name:"App",setup(e){return(t,n)=>(at(),ut("main",Mc,[$(Oc)]))}};rl(Ic).mount("#app");
