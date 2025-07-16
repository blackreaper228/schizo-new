(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".preLoader"),e=document.body;o&&(e.style.overflow="hidden",window.addEventListener("load",()=>{o.classList.add("preLoader--hidden"),setTimeout(()=>{o.style.display="none",e.style.overflow=""},500)}))});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("._Q_BurgerIcon"),e=document.querySelector("._Q_BurgerMenu"),n=document.querySelector("#burgerMenuBG-01"),a=()=>{e.classList.toggle("active"),e.classList.contains("active")?(o.src=q_burgerIconClose,document.body.style.overflow="hidden"):(o.src=q_burgerIcon,document.body.style.overflow="")};o&&n&&(o.addEventListener("click",a),n.addEventListener("click",a))});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".Q_SearchIconMobile"),e=document.querySelector(".O_SearchBar"),n=document.querySelector(".O_Header"),a=document.body,r=()=>{e.classList.toggle("active"),e.classList.contains("active")?(a.style.overflow="hidden",n.style.display="none"):(a.style.overflow="",n.style.display="")};o&&o.addEventListener("click",r);const c=document.querySelector(".A_SearchBarClose");c&&c.addEventListener("click",r);const u=document.querySelector("#burgerMenuBG-02");u&&u.addEventListener("click",r)});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#articles"),e=document.querySelector(".M_HeaderNavbar.invert"),n=document.querySelector("#main_nav"),a=document.querySelector("#ArticleMobile"),r=document.querySelector("#ArticlesDropdown");if(document.querySelector("#GensMobile"),!o||!e||!n)return;let c=!1,u=!1;o.addEventListener("mouseenter",()=>{e.style.display="flex"}),e.addEventListener("mouseenter",()=>{c=!0}),n.addEventListener("mouseenter",()=>{c=!0}),e.addEventListener("mouseleave",()=>{c=!1,setTimeout(()=>{c||(e.style.display="none")},100)}),n.addEventListener("mouseleave",()=>{c=!1,setTimeout(()=>{c||(e.style.display="none")},100)}),o.addEventListener("mouseleave",()=>{c=!1,setTimeout(()=>{c||(e.style.display="none")},100)}),a.addEventListener("click",()=>{u?(u=!1,r.style.display="none"):(u=!0,r.style.display="flex")})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#gensBtn"),e=document.querySelector("#gens"),n=document.querySelector("#main_nav");if(!o||!e||!n)return;let a=!1;o.addEventListener("mouseenter",()=>{e.style.display="flex"}),e.addEventListener("mouseenter",()=>{a=!0}),n.addEventListener("mouseenter",()=>{a=!0}),e.addEventListener("mouseleave",()=>{a=!1,setTimeout(()=>{a||(e.style.display="none")},100)}),n.addEventListener("mouseleave",()=>{a=!1,setTimeout(()=>{a||(e.style.display="none")},100)}),o.addEventListener("mouseleave",()=>{a=!1,setTimeout(()=>{a||(e.style.display="none")},100)})});const _S=()=>{const o=document.getElementById("my_audio"),e=document.querySelector(".A_MuteSound");let n=!1;function a(){n?(o.pause(),e.classList.remove("playing")):(o.play().catch(r=>{console.log("Error playing audio:",r)}),e.classList.add("playing")),n=!n}e&&e.addEventListener("click",a)};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="177",vS=0,J_=1,yS=2,U0=1,xS=2,ha=3,va=0,zn=1,Oi=2,as=0,Nr=1,$_=2,ev=3,tv=4,SS=5,Os=100,MS=101,ES=102,TS=103,bS=104,AS=200,RS=201,wS=202,CS=203,fd=204,hd=205,DS=206,LS=207,US=208,NS=209,OS=210,PS=211,IS=212,BS=213,FS=214,dd=0,pd=1,md=2,Br=3,gd=4,_d=5,vd=6,yd=7,N0=0,zS=1,HS=2,ss=0,GS=1,VS=2,kS=3,XS=4,WS=5,qS=6,YS=7,nv="attached",jS="detached",O0=300,Fr=301,zr=302,xd=303,Sd=304,hu=306,Hr=1e3,ns=1001,ou=1002,Hn=1003,P0=1004,tl=1005,si=1006,eu=1007,pa=1008,Ii=1009,I0=1010,B0=1011,rl=1012,ap=1013,Fs=1014,Ti=1015,dl=1016,sp=1017,rp=1018,ol=1020,F0=35902,z0=1021,H0=1022,mi=1023,ll=1026,cl=1027,op=1028,lp=1029,G0=1030,cp=1031,up=1033,tu=33776,nu=33777,iu=33778,au=33779,Md=35840,Ed=35841,Td=35842,bd=35843,Ad=36196,Rd=37492,wd=37496,Cd=37808,Dd=37809,Ld=37810,Ud=37811,Nd=37812,Od=37813,Pd=37814,Id=37815,Bd=37816,Fd=37817,zd=37818,Hd=37819,Gd=37820,Vd=37821,su=36492,kd=36494,Xd=36495,V0=36283,Wd=36284,qd=36285,Yd=36286,ul=2300,fl=2301,_h=2302,iv=2400,av=2401,sv=2402,KS=2500,ZS=0,k0=1,jd=2,QS=3200,JS=3201,X0=0,$S=1,ts="",wn="srgb",Vn="srgb-linear",lu="linear",Vt="srgb",_r=7680,rv=519,eM=512,tM=513,nM=514,W0=515,iM=516,aM=517,sM=518,rM=519,Kd=35044,ov="300 es",ma=2e3,cu=2001;class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lv=1234567;const il=Math.PI/180,Gr=180/Math.PI;function bi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function fp(o,e){return(o%e+e)%e}function oM(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function lM(o,e,n){return o!==e?(n-o)/(e-o):0}function al(o,e,n){return(1-n)*o+n*e}function cM(o,e,n,a){return al(o,e,1-Math.exp(-n*a))}function uM(o,e=1){return e-Math.abs(fp(o,e*2)-e)}function fM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function hM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function dM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function pM(o,e){return o+Math.random()*(e-o)}function mM(o){return o*(.5-Math.random())}function gM(o){o!==void 0&&(lv=o);let e=lv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _M(o){return o*il}function vM(o){return o*Gr}function yM(o){return(o&o-1)===0&&o!==0}function xM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function SM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function MM(o,e,n,a,r){const c=Math.cos,u=Math.sin,h=c(n/2),d=u(n/2),p=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),x=c((a-e)/2),E=u((a-e)/2);switch(r){case"XYX":o.set(h*g,d*_,d*v,h*p);break;case"YZY":o.set(d*v,h*g,d*_,h*p);break;case"ZXZ":o.set(d*_,d*v,h*g,h*p);break;case"XZX":o.set(h*g,d*E,d*x,h*p);break;case"YXY":o.set(d*x,h*g,d*E,h*p);break;case"ZYZ":o.set(d*E,d*x,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function It(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const EM={DEG2RAD:il,RAD2DEG:Gr,generateUUID:bi,clamp:gt,euclideanModulo:fp,mapLinear:oM,inverseLerp:lM,lerp:al,damp:cM,pingpong:uM,smoothstep:fM,smootherstep:hM,randInt:dM,randFloat:pM,randFloatSpread:mM,seededRandom:gM,degToRad:_M,radToDeg:vM,isPowerOfTwo:yM,ceilPowerOfTwo:xM,floorPowerOfTwo:SM,setQuaternionFromProperEuler:MM,normalize:It,denormalize:Mi};class Mt{constructor(e=0,n=0){Mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rs{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,h){let d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];const v=c[u+0],x=c[u+1],E=c[u+2],T=c[u+3];if(h===0){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=v,e[n+1]=x,e[n+2]=E,e[n+3]=T;return}if(_!==T||d!==v||p!==x||g!==E){let S=1-h;const y=d*v+p*x+g*E+_*T,N=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const B=Math.sqrt(L),z=Math.atan2(B,y*N);S=Math.sin(S*z)/B,h=Math.sin(h*z)/B}const C=h*N;if(d=d*S+v*C,p=p*S+x*C,g=g*S+E*C,_=_*S+T*C,S===1-h){const B=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=B,p*=B,g*=B,_*=B}}e[n]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,r,c,u){const h=a[r],d=a[r+1],p=a[r+2],g=a[r+3],_=c[u],v=c[u+1],x=c[u+2],E=c[u+3];return e[n]=h*E+g*_+d*x-p*v,e[n+1]=d*E+g*v+p*_-h*x,e[n+2]=p*E+g*x+h*v-d*_,e[n+3]=g*E-h*_-d*v-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(r/2),_=h(c/2),v=d(a/2),x=d(r/2),E=d(c/2);switch(u){case"XYZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"YZX":this._x=v*g*_+p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_-v*x*E;break;case"XZY":this._x=v*g*_-p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-d)*x,this._y=(c-p)*x,this._z=(u-r)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-d)/x,this._x=.25*x,this._y=(r+u)/x,this._z=(c+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-p)/x,this._x=(r+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-r)/x,this._x=(c+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+r*p-c*d,this._y=r*g+u*d+c*h-a*p,this._z=c*g+u*p+a*d-r*h,this._w=u*g-a*h-r*d-c*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,r=this._y,c=this._z,u=this._w;let h=u*e._w+a*e._x+r*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=a,this._y=r,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*r+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,a=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*r-h*a),g=2*(h*n-c*r),_=2*(c*a-u*n);return this.x=n+d*p+u*_-h*g,this.y=a+d*g+h*p-c*_,this.z=r+d*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,h=n.y,d=n.z;return this.x=r*d-c*h,this.y=c*u-a*d,this.z=a*h-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new Y,cv=new rs;class ot{constructor(e,n,a,r,c,u,h,d,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,d,p)}set(e,n,a,r,c,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[3],d=a[6],p=a[1],g=a[4],_=a[7],v=a[2],x=a[5],E=a[8],T=r[0],S=r[3],y=r[6],N=r[1],L=r[4],C=r[7],B=r[2],z=r[5],F=r[8];return c[0]=u*T+h*N+d*B,c[3]=u*S+h*L+d*z,c[6]=u*y+h*C+d*F,c[1]=p*T+g*N+_*B,c[4]=p*S+g*L+_*z,c[7]=p*y+g*C+_*F,c[2]=v*T+x*N+E*B,c[5]=v*S+x*L+E*z,c[8]=v*y+x*C+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return n*u*g-n*h*p-a*c*g+a*h*d+r*c*p-r*u*d}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=g*u-h*p,v=h*d-g*c,x=p*c-u*d,E=n*_+a*v+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(r*p-g*a)*T,e[2]=(h*a-r*u)*T,e[3]=v*T,e[4]=(g*n-r*d)*T,e[5]=(r*c-h*n)*T,e[6]=x*T,e[7]=(a*d-p*n)*T,e[8]=(u*n-a*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*u+p*h)+u+e,-r*p,r*d,-r*(-p*u+d*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(yh.makeScale(e,n)),this}rotate(e){return this.premultiply(yh.makeRotation(-e)),this}translate(e,n){return this.premultiply(yh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new ot;function q0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function hl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function TM(){const o=hl("canvas");return o.style.display="block",o}const uv={};function Or(o){o in uv||(uv[o]=!0,console.warn(o))}function bM(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function AM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function RM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fv=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){const o={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Vt&&(r.r=ga(r.r),r.g=ga(r.g),r.b=ga(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Vt&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},workingToColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},colorSpaceToWorking:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ts?lu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,c){return Or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,c)},toWorkingColorSpace:function(r,c){return Or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Vn]:{primaries:e,whitePoint:a,transfer:lu,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:a,transfer:Vt,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),o}const bt=wM();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Pr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class CM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{vr===void 0&&(vr=hl("canvas")),vr.width=e.width,vr.height=e.height;const r=vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=vr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=ga(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ga(n[a]/255)*255):n[a]=ga(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DM=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push(xh(r[u].image)):c.push(xh(r[u]))}else c=xh(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function xh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?CM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LM=0;const Sh=new Y;class Sn extends qr{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,a=ns,r=ns,c=si,u=pa,h=mi,d=Ii,p=Sn.DEFAULT_ANISOTROPY,g=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=bi(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=O0;Sn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,a=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const d=e.elements,p=d[0],g=d[4],_=d[8],v=d[1],x=d[5],E=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,C=(x+1)/2,B=(y+1)/2,z=(g+v)/4,F=(_+T)/4,q=(E+S)/4;return L>C&&L>B?L<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(L),r=z/a,c=F/a):C>B?C<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(C),a=z/r,c=q/r):B<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(B),a=F/c,r=q/c),this.set(a,r,c,n),this}let N=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(_-T)/N,this.z=(v-g)/N,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UM extends qr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:a.depth},c=new Sn(r);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new hp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends UM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Y0 extends Sn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends Sn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,yi):yi.fromBufferAttribute(c,u),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Rc.copy(a.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),wc.subVectors(this.max,Xo),yr.subVectors(e.a,Xo),xr.subVectors(e.b,Xo),Sr.subVectors(e.c,Xo),Ya.subVectors(xr,yr),ja.subVectors(Sr,xr),As.subVectors(yr,Sr);let n=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-As.z,As.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,As.z,0,-As.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-As.y,As.x,0];return!Mh(n,yr,xr,Sr,wc)||(n=[1,0,0,0,1,0,0,0,1],!Mh(n,yr,xr,Sr,wc))?!1:(Cc.crossVectors(Ya,ja),n=[Cc.x,Cc.y,Cc.z],Mh(n,yr,xr,Sr,wc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],yi=new Y,Rc=new xa,yr=new Y,xr=new Y,Sr=new Y,Ya=new Y,ja=new Y,As=new Y,Xo=new Y,wc=new Y,Cc=new Y,Rs=new Y;function Mh(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Rs.fromArray(o,c);const h=r.x*Math.abs(Rs.x)+r.y*Math.abs(Rs.y)+r.z*Math.abs(Rs.z),d=e.dot(Rs),p=n.dot(Rs),g=a.dot(Rs);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const OM=new xa,Wo=new Y,Eh=new Y;class Fi{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):OM.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const n=Wo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Wo,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Eh)),this.expandByPoint(Wo.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new Y,Th=new Y,Dc=new Y,Ka=new Y,bh=new Y,Lc=new Y,Ah=new Y;class pl{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,n),oa.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){Th.copy(e).add(n).multiplyScalar(.5),Dc.copy(n).sub(e).normalize(),Ka.copy(this.origin).sub(Th);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Dc),h=Ka.dot(this.direction),d=-Ka.dot(Dc),p=Ka.lengthSq(),g=Math.abs(1-u*u);let _,v,x,E;if(g>0)if(_=u*d-h,v=u*h-d,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,x=_*(_+u*v+2*h)+v*(u*_+v+2*d)+p}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-d),c),x=-_*_+v*(v+2*d)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-d),c),x=v*(v+2*d)+p):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-d),c),x=-_*_+v*(v+2*d)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Th).addScaledVector(Dc,v),x}intersectSphere(e,n){oa.subVectors(e.center,this.origin);const a=oa.dot(this.direction),r=oa.dot(oa)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=a-u,d=a+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,r=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,r=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),_>=0?(h=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),a>d||h>r)||((h>a||a!==a)&&(a=h),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,n,a,r,c){bh.subVectors(n,e),Lc.subVectors(a,e),Ah.crossVectors(bh,Lc);let u=this.direction.dot(Ah),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ka.subVectors(this.origin,e);const d=h*this.direction.dot(Lc.crossVectors(Ka,Lc));if(d<0)return null;const p=h*this.direction.dot(bh.cross(Ka));if(p<0||d+p>u)return null;const g=-h*Ka.dot(Ah);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,n,a,r,c,u,h,d,p,g,_,v,x,E,T,S){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,d,p,g,_,v,x,E,T,S)}set(e,n,a,r,c,u,h,d,p,g,_,v,x,E,T,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=r,y[1]=c,y[5]=u,y[9]=h,y[13]=d,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=E,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),c=1/Mr.setFromMatrixColumn(e,1).length(),u=1/Mr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),d=Math.cos(r),p=Math.sin(r),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,E=h*g,T=h*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=x+E*p,n[5]=v-T*p,n[9]=-h*d,n[2]=T-v*p,n[6]=E+x*p,n[10]=u*d}else if(e.order==="YXZ"){const v=d*g,x=d*_,E=p*g,T=p*_;n[0]=v+T*h,n[4]=E*h-x,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-E,n[6]=T+v*h,n[10]=u*d}else if(e.order==="ZXY"){const v=d*g,x=d*_,E=p*g,T=p*_;n[0]=v-T*h,n[4]=-u*_,n[8]=E+x*h,n[1]=x+E*h,n[5]=u*g,n[9]=T-v*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(e.order==="ZYX"){const v=u*g,x=u*_,E=h*g,T=h*_;n[0]=d*g,n[4]=E*p-x,n[8]=v*p+T,n[1]=d*_,n[5]=T*p+v,n[9]=x*p-E,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*p,E=h*d,T=h*p;n[0]=d*g,n[4]=T-v*_,n[8]=E*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=x*_+E,n[10]=v-T*_}else if(e.order==="XZY"){const v=u*d,x=u*p,E=h*d,T=h*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+T,n[5]=u*g,n[9]=x*_-E,n[2]=E*_-x,n[6]=h*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,IM)}lookAt(e,n,a){const r=this.elements;return ii.subVectors(e,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(a,ii),Za.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(a,ii)),Za.normalize(),Uc.crossVectors(ii,Za),r[0]=Za.x,r[4]=Uc.x,r[8]=ii.x,r[1]=Za.y,r[5]=Uc.y,r[9]=ii.y,r[2]=Za.z,r[6]=Uc.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[4],d=a[8],p=a[12],g=a[1],_=a[5],v=a[9],x=a[13],E=a[2],T=a[6],S=a[10],y=a[14],N=a[3],L=a[7],C=a[11],B=a[15],z=r[0],F=r[4],q=r[8],D=r[12],w=r[1],k=r[5],le=r[9],re=r[13],ue=r[2],_e=r[6],P=r[10],ee=r[14],j=r[3],Me=r[7],U=r[11],$=r[15];return c[0]=u*z+h*w+d*ue+p*j,c[4]=u*F+h*k+d*_e+p*Me,c[8]=u*q+h*le+d*P+p*U,c[12]=u*D+h*re+d*ee+p*$,c[1]=g*z+_*w+v*ue+x*j,c[5]=g*F+_*k+v*_e+x*Me,c[9]=g*q+_*le+v*P+x*U,c[13]=g*D+_*re+v*ee+x*$,c[2]=E*z+T*w+S*ue+y*j,c[6]=E*F+T*k+S*_e+y*Me,c[10]=E*q+T*le+S*P+y*U,c[14]=E*D+T*re+S*ee+y*$,c[3]=N*z+L*w+C*ue+B*j,c[7]=N*F+L*k+C*_e+B*Me,c[11]=N*q+L*le+C*P+B*U,c[15]=N*D+L*re+C*ee+B*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],_=e[6],v=e[10],x=e[14],E=e[3],T=e[7],S=e[11],y=e[15];return E*(+c*d*_-r*p*_-c*h*v+a*p*v+r*h*x-a*d*x)+T*(+n*d*x-n*p*v+c*u*v-r*u*x+r*p*g-c*d*g)+S*(+n*p*_-n*h*x-c*u*_+a*u*x+c*h*g-a*p*g)+y*(-r*h*g-n*d*_+n*h*v+r*u*_-a*u*v+a*d*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=e[9],v=e[10],x=e[11],E=e[12],T=e[13],S=e[14],y=e[15],N=_*S*p-T*v*p+T*d*x-h*S*x-_*d*y+h*v*y,L=E*v*p-g*S*p-E*d*x+u*S*x+g*d*y-u*v*y,C=g*T*p-E*_*p+E*h*x-u*T*x-g*h*y+u*_*y,B=E*_*d-g*T*d-E*h*v+u*T*v+g*h*S-u*_*S,z=n*N+a*L+r*C+c*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=N*F,e[1]=(T*v*c-_*S*c-T*r*x+a*S*x+_*r*y-a*v*y)*F,e[2]=(h*S*c-T*d*c+T*r*p-a*S*p-h*r*y+a*d*y)*F,e[3]=(_*d*c-h*v*c-_*r*p+a*v*p+h*r*x-a*d*x)*F,e[4]=L*F,e[5]=(g*S*c-E*v*c+E*r*x-n*S*x-g*r*y+n*v*y)*F,e[6]=(E*d*c-u*S*c-E*r*p+n*S*p+u*r*y-n*d*y)*F,e[7]=(u*v*c-g*d*c+g*r*p-n*v*p-u*r*x+n*d*x)*F,e[8]=C*F,e[9]=(E*_*c-g*T*c-E*a*x+n*T*x+g*a*y-n*_*y)*F,e[10]=(u*T*c-E*h*c+E*a*p-n*T*p-u*a*y+n*h*y)*F,e[11]=(g*h*c-u*_*c-g*a*p+n*_*p+u*a*x-n*h*x)*F,e[12]=B*F,e[13]=(g*T*r-E*_*r+E*a*v-n*T*v-g*a*S+n*_*S)*F,e[14]=(E*h*r-u*T*r-E*a*d+n*T*d+u*a*S-n*h*S)*F,e[15]=(u*_*r-g*h*r+g*a*d-n*_*d-u*a*v+n*h*v)*F,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,h=e.y,d=e.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-r*d,p*d+r*h,0,p*h+r*d,g*h+a,g*d-r*u,0,p*d-r*h,g*d+r*u,c*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,h=n._z,d=n._w,p=c+c,g=u+u,_=h+h,v=c*p,x=c*g,E=c*_,T=u*g,S=u*_,y=h*_,N=d*p,L=d*g,C=d*_,B=a.x,z=a.y,F=a.z;return r[0]=(1-(T+y))*B,r[1]=(x+C)*B,r[2]=(E-L)*B,r[3]=0,r[4]=(x-C)*z,r[5]=(1-(v+y))*z,r[6]=(S+N)*z,r[7]=0,r[8]=(E+L)*F,r[9]=(S-N)*F,r[10]=(1-(v+T))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let c=Mr.set(r[0],r[1],r[2]).length();const u=Mr.set(r[4],r[5],r[6]).length(),h=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),e.x=r[12],e.y=r[13],e.z=r[14],xi.copy(this);const p=1/c,g=1/u,_=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,n.setFromRotationMatrix(xi),a.x=c,a.y=u,a.z=h,this}makePerspective(e,n,a,r,c,u,h=ma){const d=this.elements,p=2*c/(n-e),g=2*c/(a-r),_=(n+e)/(n-e),v=(a+r)/(a-r);let x,E;if(h===ma)x=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===cu)x=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,c,u,h=ma){const d=this.elements,p=1/(n-e),g=1/(a-r),_=1/(u-c),v=(n+e)*p,x=(a+r)*g;let E,T;if(h===ma)E=(u+c)*_,T=-2*_;else if(h===cu)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=T,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Mr=new Y,xi=new st,PM=new Y(0,0,0),IM=new Y(1,1,1),Za=new Y,Uc=new Y,ii=new Y,dv=new st,pv=new rs;class Bi{constructor(e=0,n=0,a=0,r=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],h=r[8],d=r[1],p=r[5],g=r[9],_=r[2],v=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pv.setFromEuler(this),this.setFromQuaternion(pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BM=0;const mv=new Y,Er=new rs,la=new st,Nc=new Y,qo=new Y,FM=new Y,zM=new rs,gv=new Y(1,0,0),_v=new Y(0,1,0),vv=new Y(0,0,1),yv={type:"added"},HM={type:"removed"},Tr={type:"childadded",child:null},Rh={type:"childremoved",child:null};class Qt extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new Y,n=new Bi,a=new rs,r=new Y(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new ot}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Er.setFromAxisAngle(e,n),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,n){return Er.setFromAxisAngle(e,n),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(gv,e)}rotateY(e){return this.rotateOnAxis(_v,e)}rotateZ(e){return this.rotateOnAxis(vv,e)}translateOnAxis(e,n){return mv.copy(e).applyQuaternion(this.quaternion),this.position.add(mv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gv,e)}translateY(e){return this.translateOnAxis(_v,e)}translateZ(e){return this.translateOnAxis(vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Nc.copy(e):Nc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(qo,Nc,this.up):la.lookAt(Nc,qo,this.up),this.quaternion.setFromRotationMatrix(la),r&&(la.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(la),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HM),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,zM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];c(e.shapes,_)}else c(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(e.materials,this.material[d]));r.material=h}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];r.animations.push(c(e.animations,d))}}if(n){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=r,a;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new Y(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new Y,ca=new Y,wh=new Y,ua=new Y,br=new Y,Ar=new Y,xv=new Y,Ch=new Y,Dh=new Y,Lh=new Y,Uh=new Ut,Nh=new Ut,Oh=new Ut;class Ei{constructor(e=new Y,n=new Y,a=new Y){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Si.subVectors(e,n),r.cross(Si);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Si.subVectors(r,n),ca.subVectors(a,n),wh.subVectors(e,n);const u=Si.dot(Si),h=Si.dot(ca),d=Si.dot(wh),p=ca.dot(ca),g=ca.dot(wh),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(p*d-h*g)*v,E=(u*g-h*d)*v;return c.set(1-x-E,E,x)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,n,a,r,c,u,h,d){return this.getBarycoord(e,n,a,r,ua)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,ua.x),d.addScaledVector(u,ua.y),d.addScaledVector(h,ua.z),d)}static getInterpolatedAttribute(e,n,a,r,c,u){return Uh.setScalar(0),Nh.setScalar(0),Oh.setScalar(0),Uh.fromBufferAttribute(e,n),Nh.fromBufferAttribute(e,a),Oh.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Uh,c.x),u.addScaledVector(Nh,c.y),u.addScaledVector(Oh,c.z),u}static isFrontFacing(e,n,a,r){return Si.subVectors(a,n),ca.subVectors(e,n),Si.cross(ca).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Si.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return Ei.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,h;br.subVectors(r,a),Ar.subVectors(c,a),Ch.subVectors(e,a);const d=br.dot(Ch),p=Ar.dot(Ch);if(d<=0&&p<=0)return n.copy(a);Dh.subVectors(e,r);const g=br.dot(Dh),_=Ar.dot(Dh);if(g>=0&&_<=g)return n.copy(r);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(br,u);Lh.subVectors(e,c);const x=br.dot(Lh),E=Ar.dot(Lh);if(E>=0&&x<=E)return n.copy(c);const T=x*p-d*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(Ar,h);const S=g*E-x*_;if(S<=0&&_-g>=0&&x-E>=0)return xv.subVectors(c,r),h=(_-g)/(_-g+(x-E)),n.copy(r).addScaledVector(xv,h);const y=1/(S+T+v);return u=T*y,h=v*y,n.copy(a).addScaledVector(br,u).addScaledVector(Ar,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function Ph(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class at{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=bt.workingColorSpace){return this.r=e,this.g=n,this.b=a,bt.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=bt.workingColorSpace){if(e=fp(e,1),n=gt(n,0,1),a=gt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Ph(u,c,e+1/3),this.g=Ph(u,c,e),this.b=Ph(u,c,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,n=wn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const a=j0[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return bt.workingToColorSpace(Nn.copy(this),e),Math.round(gt(Nn.r*255,0,255))*65536+Math.round(gt(Nn.g*255,0,255))*256+Math.round(gt(Nn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(Nn.copy(this),n);const a=Nn.r,r=Nn.g,c=Nn.b,u=Math.max(a,r,c),h=Math.min(a,r,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:d=(r-c)/_+(r<c?6:0);break;case r:d=(c-a)/_+2;break;case c:d=(a-r)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(Nn.copy(this),n),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=wn){bt.workingToColorSpace(Nn.copy(this),e);const n=Nn.r,a=Nn.g,r=Nn.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+n,Qa.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Qa),e.getHSL(Oc);const a=al(Qa.h,Oc.h,n),r=al(Qa.s,Oc.s,n),c=al(Qa.l,Oc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new at;at.NAMES=j0;let GM=0;class Pi extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Nr,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(a.blending=this.blending),this.side!==va&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==fd&&(a.blendSrc=this.blendSrc),this.blendDst!==hd&&(a.blendDst=this.blendDst),this.blendEquation!==Os&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(a.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Is extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new Y,Pc=new Mt;let VM=0;class Gn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Kd,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Pc.fromBufferAttribute(this,n),Pc.applyMatrix3(e),this.setXY(n,Pc.x,Pc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Mi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=It(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Mi(n,this.array)),n}setX(e,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Mi(n,this.array)),n}setY(e,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Mi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Mi(n,this.array)),n}setW(e,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=It(n,this.array),a=It(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=It(n,this.array),a=It(a,this.array),r=It(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=It(n,this.array),a=It(a,this.array),r=It(r,this.array),c=It(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kd&&(e.usage=this.usage),e}}class K0 extends Gn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Z0 extends Gn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class _a extends Gn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let kM=0;const di=new st,Ih=new Qt,Rr=new Y,ai=new xa,Yo=new xa,xn=new Y;class zi extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?Z0:K0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ot().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,n,a){return di.makeTranslation(e,n,a),this.applyMatrix4(di),this}scale(e,n,a){return di.makeScale(e,n,a),this.applyMatrix4(di),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new _a(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Yo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(ai.min,Yo.min),ai.expandByPoint(xn),xn.addVectors(ai.max,Yo.max),ai.expandByPoint(xn)):(ai.expandByPoint(Yo.min),ai.expandByPoint(Yo.max))}ai.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)xn.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(xn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)xn.fromBufferAttribute(h,p),d&&(Rr.fromBufferAttribute(e,p),xn.add(Rr)),r=Math.max(r,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let q=0;q<a.count;q++)h[q]=new Y,d[q]=new Y;const p=new Y,g=new Y,_=new Y,v=new Mt,x=new Mt,E=new Mt,T=new Y,S=new Y;function y(q,D,w){p.fromBufferAttribute(a,q),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,w),v.fromBufferAttribute(c,q),x.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),x.sub(v),E.sub(v);const k=1/(x.x*E.y-E.x*x.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(k),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(k),h[q].add(T),h[D].add(T),h[w].add(T),d[q].add(S),d[D].add(S),d[w].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let q=0,D=N.length;q<D;++q){const w=N[q],k=w.start,le=w.count;for(let re=k,ue=k+le;re<ue;re+=3)y(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const L=new Y,C=new Y,B=new Y,z=new Y;function F(q){B.fromBufferAttribute(r,q),z.copy(B);const D=h[q];L.copy(D),L.sub(B.multiplyScalar(B.dot(D))).normalize(),C.crossVectors(z,D);const k=C.dot(d[q])<0?-1:1;u.setXYZW(q,L.x,L.y,L.z,k)}for(let q=0,D=N.length;q<D;++q){const w=N[q],k=w.start,le=w.count;for(let re=k,ue=k+le;re<ue;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const r=new Y,c=new Y,u=new Y,h=new Y,d=new Y,p=new Y,g=new Y,_=new Y;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);r.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),h.fromBufferAttribute(a,E),d.fromBufferAttribute(a,T),p.fromBufferAttribute(a,S),h.add(g),d.add(g),p.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,x=n.count;v<x;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)xn.fromBufferAttribute(e,n),xn.normalize(),e.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let x=0,E=0;for(let T=0,S=d.length;T<S;T++){h.isInterleavedBufferAttribute?x=d[T]*h.data.stride+h.offset:x=d[T]*g;for(let y=0;y<g;y++)v[E++]=p[x++]}return new Gn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,a=this.index.array,r=this.attributes;for(const h in r){const d=r[h],p=e(d,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=e(v,a);d.push(x)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(e.data))}g.length>0&&(r[d]=g,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sv=new st,ws=new pl,Ic=new Fi,Mv=new Y,Bc=new Y,Fc=new Y,zc=new Y,Bh=new Y,Hc=new Y,Ev=new Y,Gc=new Y;class jn extends Qt{constructor(e=new zi,n=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(c&&h){Hc.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],_=c[d];g!==0&&(Bh.fromBufferAttribute(_,e),u?Hc.addScaledVector(Bh,g):Hc.addScaledVector(Bh.sub(n),g))}n.add(Hc)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ic.copy(a.boundingSphere),Ic.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(Ic.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Ic,Mv)===null||ws.origin.distanceToSquared(Mv)>(e.far-e.near)**2))&&(Sv.copy(c).invert(),ws.copy(e.ray).applyMatrix4(Sv),!(a.boundingBox!==null&&ws.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,ws)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],y=u[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let C=N,B=L;C<B;C+=3){const z=h.getX(C),F=h.getX(C+1),q=h.getX(C+2);r=Vc(this,y,e,a,p,g,_,z,F,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const E=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const N=h.getX(S),L=h.getX(S+1),C=h.getX(S+2);r=Vc(this,u,e,a,p,g,_,N,L,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],y=u[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=N,B=L;C<B;C+=3){const z=C,F=C+1,q=C+2;r=Vc(this,y,e,a,p,g,_,z,F,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const N=S,L=S+1,C=S+2;r=Vc(this,u,e,a,p,g,_,N,L,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function XM(o,e,n,a,r,c,u,h){let d;if(e.side===zn?d=a.intersectTriangle(u,c,r,!0,h):d=a.intersectTriangle(r,c,u,e.side===va,h),d===null)return null;Gc.copy(h),Gc.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(Gc);return p<n.near||p>n.far?null:{distance:p,point:Gc.clone(),object:o}}function Vc(o,e,n,a,r,c,u,h,d,p){o.getVertexPosition(h,Bc),o.getVertexPosition(d,Fc),o.getVertexPosition(p,zc);const g=XM(o,e,n,a,Bc,Fc,zc,Ev);if(g){const _=new Y;Ei.getBarycoord(Ev,Bc,Fc,zc,_),r&&(g.uv=Ei.getInterpolatedAttribute(r,h,d,p,_,new Mt)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,h,d,p,_,new Mt)),u&&(g.normal=Ei.getInterpolatedAttribute(u,h,d,p,_,new Y),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:d,c:p,normal:new Y,materialIndex:0};Ei.getNormal(Bc,Fc,zc,v.normal),g.face=v,g.barycoord=_}return g}class ml extends zi{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,r,u,2),E("x","z","y",1,-1,e,a,-n,r,u,3),E("x","y","z",1,-1,e,n,a,r,c,4),E("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(d),this.setAttribute("position",new _a(p,3)),this.setAttribute("normal",new _a(g,3)),this.setAttribute("uv",new _a(_,2));function E(T,S,y,N,L,C,B,z,F,q,D){const w=C/F,k=B/q,le=C/2,re=B/2,ue=z/2,_e=F+1,P=q+1;let ee=0,j=0;const Me=new Y;for(let U=0;U<P;U++){const $=U*k-re;for(let ve=0;ve<_e;ve++){const xe=ve*w-le;Me[T]=xe*N,Me[S]=$*L,Me[y]=ue,p.push(Me.x,Me.y,Me.z),Me[T]=0,Me[S]=0,Me[y]=z>0?1:-1,g.push(Me.x,Me.y,Me.z),_.push(ve/F),_.push(1-U/q),ee+=1}}for(let U=0;U<q;U++)for(let $=0;$<F;$++){const ve=v+$+_e*U,xe=v+$+_e*(U+1),Q=v+($+1)+_e*(U+1),pe=v+($+1)+_e*U;d.push(ve,xe,pe),d.push(xe,Q,pe),j+=6}h.addGroup(x,j,D),x+=j,v+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function Bn(o){const e={};for(let n=0;n<o.length;n++){const a=Vr(o[n]);for(const r in a)e[r]=a[r]}return e}function WM(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Q0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const qM={clone:Vr,merge:Bn};var YM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ya extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YM,this.fragmentShader=jM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=WM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class J0 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=ma}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new Y,Tv=new Mt,bv=new Mt;class Fn extends J0{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,n){return this.getViewBounds(e,Tv,bv),n.subVectors(bv,Tv)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(il*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*r/d,n-=u.offsetY*a/p,r*=u.width/d,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wr=-90,Cr=1;class KM extends Qt{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(wr,Cr,e,n);r.layers=this.layers,this.add(r);const c=new Fn(wr,Cr,e,n);c.layers=this.layers,this.add(c);const u=new Fn(wr,Cr,e,n);u.layers=this.layers,this.add(u);const h=new Fn(wr,Cr,e,n);h.layers=this.layers,this.add(h);const d=new Fn(wr,Cr,e,n);d.layers=this.layers,this.add(d);const p=new Fn(wr,Cr,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,h,d]=n;for(const p of n)this.remove(p);if(e===ma)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===cu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,c),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,h),e.setRenderTarget(a,3,r),e.render(n,d),e.setRenderTarget(a,4,r),e.render(n,p),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,r),e.render(n,g),e.setRenderTarget(_,v,x),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class $0 extends Sn{constructor(e=[],n=Fr,a,r,c,u,h,d,p,g){super(e,n,a,r,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZM extends zs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new $0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ml(5,5,5),c=new ya({name:"CubemapFromEquirect",uniforms:Vr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:zn,blending:as});c.uniforms.tEquirect.value=n;const u=new jn(r,c),h=n.minFilter;return n.minFilter===pa&&(n.minFilter=si),new KM(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}class Bs extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,a),y=this._getHandJoint(p,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;p.inputState.pinching&&v>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return h!==null&&(h.visible=r!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Bs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class JM extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $M{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Kd,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new Y;class pp{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyMatrix4(e),this.setXYZ(n,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyNormalMatrix(e),this.setXYZ(n,In.x,In.y,In.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.transformDirection(e),this.setXYZ(n,In.x,In.y,In.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Mi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=It(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Mi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Mi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Mi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Mi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=It(n,this.array),a=It(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=It(n,this.array),a=It(a,this.array),r=It(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=It(n,this.array),a=It(a,this.array),r=It(r,this.array),c=It(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new Gn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Av=new Y,Rv=new Ut,wv=new Ut,eE=new Y,Cv=new st,kc=new Y,zh=new Fi,Dv=new st,Hh=new pl;class tE extends jn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nv,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xa),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,kc),this.boundingBox.expandByPoint(kc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,kc),this.boundingSphere.expandByPoint(kc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zh.copy(this.boundingSphere),zh.applyMatrix4(r),e.ray.intersectsSphere(zh)!==!1&&(Dv.copy(r).invert(),Hh.copy(e.ray).applyMatrix4(Dv),!(this.boundingBox!==null&&Hh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Hh)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;Rv.fromBufferAttribute(r.attributes.skinIndex,e),wv.fromBufferAttribute(r.attributes.skinWeight,e),Av.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=wv.getComponent(c);if(u!==0){const h=Rv.getComponent(c);Cv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(eE.copy(Av).applyMatrix4(Cv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class ey extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ty extends Sn{constructor(e=null,n=1,a=1,r,c,u,h,d,p=Hn,g=Hn,_,v){super(null,u,h,d,p,g,r,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lv=new st,nE=new st;class mp{constructor(e=[],n=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new st;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:nE;Lv.multiplyMatrices(h,n[c]),Lv.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new mp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new ty(n,e,e,mi,Ti);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),u=new ey),this.bones.push(u),this.boneInverses.push(new st().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const h=a[r];e.boneInverses.push(h.toArray())}return e}}class Zd extends Gn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Dr=new st,Uv=new st,Xc=[],Nv=new xa,iE=new st,jo=new jn,Ko=new Fi;class aE extends jn{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Zd(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,iE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new xa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Dr),Nv.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Nv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Dr),Ko.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Ko)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(jo.geometry=this.geometry,jo.material=this.material,jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(a),e.ray.intersectsSphere(Ko)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Dr),Uv.multiplyMatrices(a,Dr),jo.matrixWorld=Uv,jo.raycast(e,Xc);for(let u=0,h=Xc.length;u<h;u++){const d=Xc[u];d.instanceId=c,d.object=this,n.push(d)}Xc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Zd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new ty(new Float32Array(r*this.count),r,this.count,op,Ti));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const h=this.geometry.morphTargetsRelative?1:1-u,d=r*e;c[d]=h,c.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gh=new Y,sE=new Y,rE=new ot;class es{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=Gh.subVectors(a,n).cross(sE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Gh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||rE.getNormalMatrix(e),r=this.coplanarPoint(Gh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Fi,Wc=new Y;class gp{constructor(e=new es,n=new es,a=new es,r=new es,c=new es,u=new es){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ma){const a=this.planes,r=e.elements,c=r[0],u=r[1],h=r[2],d=r[3],p=r[4],g=r[5],_=r[6],v=r[7],x=r[8],E=r[9],T=r[10],S=r[11],y=r[12],N=r[13],L=r[14],C=r[15];if(a[0].setComponents(d-c,v-p,S-x,C-y).normalize(),a[1].setComponents(d+c,v+p,S+x,C+y).normalize(),a[2].setComponents(d+u,v+g,S+E,C+N).normalize(),a[3].setComponents(d-u,v-g,S-E,C-N).normalize(),a[4].setComponents(d-h,v-_,S-T,C-L).normalize(),n===ma)a[5].setComponents(d+h,v+_,S+T,C+L).normalize();else if(n===cu)a[5].setComponents(h,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Wc.x=r.normal.x>0?e.max.x:e.min.x,Wc.y=r.normal.y>0?e.max.y:e.min.y,Wc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ny extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new Y,fu=new Y,Ov=new st,Zo=new pl,qc=new Fi,Vh=new Y,Pv=new Y;class _p extends Qt{constructor(e=new zi,n=new ny){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)uu.fromBufferAttribute(n,r-1),fu.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=uu.distanceTo(fu);e.setAttribute("lineDistance",new _a(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(r),qc.radius+=c,e.ray.intersectsSphere(qc)===!1)return;Ov.copy(r).invert(),Zo.copy(e.ray).applyMatrix4(Ov);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let T=x,S=E-1;T<S;T+=p){const y=g.getX(T),N=g.getX(T+1),L=Yc(this,e,Zo,d,y,N,T);L&&n.push(L)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(x),y=Yc(this,e,Zo,d,T,S,E-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=x,S=E-1;T<S;T+=p){const y=Yc(this,e,Zo,d,T,T+1,T);y&&n.push(y)}if(this.isLineLoop){const T=Yc(this,e,Zo,d,E-1,x,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Yc(o,e,n,a,r,c,u){const h=o.geometry.attributes.position;if(uu.fromBufferAttribute(h,r),fu.fromBufferAttribute(h,c),n.distanceSqToSegment(uu,fu,Vh,Pv)>a)return;Vh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Vh);if(!(p<e.near||p>e.far))return{distance:p,point:Pv.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Iv=new Y,Bv=new Y;class oE extends _p{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)Iv.fromBufferAttribute(n,r),Bv.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+Iv.distanceTo(Bv);e.setAttribute("lineDistance",new _a(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lE extends _p{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class iy extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fv=new st,Qd=new pl,jc=new Fi,Kc=new Y;class cE extends Qt{constructor(e=new zi,n=new iy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),jc.copy(a.boundingSphere),jc.applyMatrix4(r),jc.radius+=c,e.ray.intersectsSphere(jc)===!1)return;Fv.copy(r).invert(),Qd.copy(e.ray).applyMatrix4(Fv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let E=v,T=x;E<T;E++){const S=p.getX(E);Kc.fromBufferAttribute(_,S),zv(Kc,S,d,r,e,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let E=v,T=x;E<T;E++)Kc.fromBufferAttribute(_,E),zv(Kc,E,d,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zv(o,e,n,a,r,c,u){const h=Qd.distanceSqToPoint(o);if(h<n){const d=new Y;Qd.closestPointToPoint(o,d),d.applyMatrix4(a);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class ay extends Sn{constructor(e,n,a=Fs,r,c,u,h=Hn,d=Hn,p,g=ll,_=1){if(g!==ll&&g!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,r,c,u,h,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class du extends zi{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,h=Math.floor(a),d=Math.floor(r),p=h+1,g=d+1,_=e/h,v=n/d,x=[],E=[],T=[],S=[];for(let y=0;y<g;y++){const N=y*v-u;for(let L=0;L<p;L++){const C=L*_-c;E.push(C,-N,0),T.push(0,0,1),S.push(L/h),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let N=0;N<h;N++){const L=N+p*y,C=N+p*(y+1),B=N+1+p*(y+1),z=N+1+p*y;x.push(L,C,z),x.push(C,B,z)}this.setIndex(x),this.setAttribute("position",new _a(E,3)),this.setAttribute("normal",new _a(T,3)),this.setAttribute("uv",new _a(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}class vp extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X0,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hi extends vp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class uE extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fE extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Zc(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function hE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function dE(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function Hv(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let d=0;d!==e;++d)r[u++]=o[h+d]}return r}function sy(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class gl{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let h=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let d=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===d)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pE extends gl{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iv,endingEnd:iv}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,h=r[c],d=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case av:c=e,h=2*n-a;break;case sv:c=r.length-2,h=n+r[c]-r[c+1];break;default:c=e,h=a}if(d===void 0)switch(this.getSettings_().endingEnd){case av:u=e,d=2*a-n;break;case sv:u=1,d=a+r[1]-r[0];break;default:u=e-1,d=n}const p=(a-n)*.5,g=this.valueSize;this._weightPrev=p/(n-h),this._weightNext=p/(d-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=e*h,p=d-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,E=(a-n)/(r-n),T=E*E,S=T*E,y=-v*S+2*v*T-v*E,N=(1+v)*S+(-1.5-2*v)*T+(-.5+v)*E+1,L=(-1-x)*S+(1.5+x)*T+.5*E,C=x*S-x*T;for(let B=0;B!==h;++B)c[B]=y*u[g+B]+N*u[p+B]+L*u[d+B]+C*u[_+B];return c}}class mE extends gl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=e*h,p=d-h,g=(a-n)/(r-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[p+v]*_+u[d+v]*g;return c}}class gE extends gl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ai{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zc(n,this.TimeBufferType),this.values=Zc(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Zc(e.times,Array),values:Zc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new gE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case ul:n=this.InterpolantFactoryMethodDiscrete;break;case fl:n=this.InterpolantFactoryMethodLinear;break;case _h:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ul;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const d=a[h];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,d,u),e=!1;break}u=d}if(r!==void 0&&hE(r))for(let h=0,d=r.length;h!==d;++h){const p=r[h];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,p),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===_h,c=e.length-1;let u=1;for(let h=1;h<c;++h){let d=!1;const p=e[h],g=e[h+1];if(p!==g&&(h!==1||p!==e[0]))if(r)d=!0;else{const _=h*a,v=_-a,x=_+a;for(let E=0;E!==a;++E){const T=n[_+E];if(T!==n[v+E]||T!==n[x+E]){d=!0;break}}}if(d){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let x=0;x!==a;++x)n[v+x]=n[_+x]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,d=u*a,p=0;p!==a;++p)n[d+p]=n[h+p];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=fl;class Yr extends Ai{constructor(e,n,a){super(e,n,a)}}Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=ul;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class ry extends Ai{constructor(e,n,a,r){super(e,n,a,r)}}ry.prototype.ValueTypeName="color";class kr extends Ai{constructor(e,n,a,r){super(e,n,a,r)}}kr.prototype.ValueTypeName="number";class _E extends gl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=(a-n)/(r-n);let p=e*h;for(let g=p+h;p!==g;p+=4)rs.slerpFlat(c,0,u,p-h,u,p,d);return c}}class Xr extends Ai{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new _E(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends Ai{constructor(e,n,a){super(e,n,a)}}jr.prototype.ValueTypeName="string";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=ul;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends Ai{constructor(e,n,a,r){super(e,n,a,r)}}Wr.prototype.ValueTypeName="vector";class vE{constructor(e="",n=-1,a=[],r=KS){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(xE(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let c=0,u=a.length;c!==u;++c)n.push(Ai.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let h=0;h<c;h++){let d=[],p=[];d.push((h+c-1)%c,h,(h+1)%c),p.push(0,1,0);const g=dE(d);d=Hv(d,1,g),p=Hv(p,1,g),!r&&d[0]===0&&(d.push(c),p.push(p[0])),u.push(new kr(".morphTargetInfluences["+n[h].name+"]",d,p).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,d=e.length;h<d;h++){const p=e[h],g=p.name.match(c);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(p)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],n,a));return u}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,x,E,T){if(x.length!==0){const S=[],y=[];sy(x,S,y,E),S.length!==0&&T.push(new _(v,S,y))}},r=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let d=e.length||-1;const p=e.hierarchy||[];for(let _=0;_<p.length;_++){const v=p[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let T=0;T<v[E].morphTargets.length;T++)x[v[E].morphTargets[T]]=-1;for(const T in x){const S=[],y=[];for(let N=0;N!==v[E].morphTargets.length;++N){const L=v[E];S.push(L.time),y.push(L.morphTarget===T?1:0)}r.push(new kr(".morphTargetInfluence["+T+"]",S,y))}d=x.length*u}else{const x=".bones["+n[_].name+"]";a(Wr,x+".position",v,"pos",r),a(Xr,x+".quaternion",v,"rot",r),a(Wr,x+".scale",v,"scl",r)}}return r.length===0?null:new this(c,d,r,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return Wr;case"color":return ry;case"quaternion":return Xr;case"bool":case"boolean":return Yr;case"string":return jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function xE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yE(o.type);if(o.times===void 0){const n=[],a=[];sy(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const is={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class SE{constructor(e,n,a){const r=this;let c=!1,u=0,h=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&r.onStart!==void 0&&r.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const x=p[_],E=p[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return E}return null}}}const ME=new SE;class Kr{constructor(e){this.manager=e!==void 0?e:ME,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const fa={};class EE extends Error{constructor(e,n){super(e),this.response=n}}class oy extends Kr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=is.get(e);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(fa[e]!==void 0){fa[e].push({onLoad:n,onProgress:a,onError:r});return}fa[e]=[],fa[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,d=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=fa[e],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),x=v?parseInt(v):0,E=x!==0;let T=0;const S=new ReadableStream({start(y){N();function N(){_.read().then(({done:L,value:C})=>{if(L)y.close();else{T+=C.byteLength;const B=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:x});for(let z=0,F=g.length;z<F;z++){const q=g[z];q.onProgress&&q.onProgress(B)}y.enqueue(C),N()}},L=>{y.error(L)})}}});return new Response(S)}else throw new EE(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return p.arrayBuffer().then(E=>x.decode(E))}}}).then(p=>{is.add(e,p);const g=fa[e];delete fa[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(p)}}).catch(p=>{const g=fa[e];if(g===void 0)throw this.manager.itemError(e),p;delete fa[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class TE extends Kr{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=is.get(e);if(u!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u;const h=hl("img");function d(){g(),is.add(e,this),n&&n(this),c.manager.itemEnd(e)}function p(_){g(),r&&r(_),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",d,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",d,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(e),h.src=e,h}}class bE extends Kr{constructor(e){super(e)}load(e,n,a,r){const c=new Sn,u=new TE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class yp extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const kh=new st,Gv=new Y,Vv=new Y;class xp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vv),n.updateMatrixWorld(),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AE extends xp{constructor(){super(new Fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=Gr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RE extends yp{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new AE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kv=new st,Qo=new Y,Xh=new Y;class wE extends xp{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,r=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),Qo.setFromMatrixPosition(e.matrixWorld),a.position.copy(Qo),Xh.copy(a.position),Xh.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Xh),a.updateMatrixWorld(),r.makeTranslation(-Qo.x,-Qo.y,-Qo.z),kv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kv)}}class CE extends yp{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new wE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sp extends J0{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DE extends xp{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jd extends yp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new DE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Wh=new WeakMap;class LE extends Kr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=is.get(e);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(p=>{if(Wh.has(u)===!0)r&&r(Wh.get(u)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(p),c.manager.itemEnd(e),p});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const d=fetch(e,h).then(function(p){return p.blob()}).then(function(p){return createImageBitmap(p,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(p){return is.add(e,p),n&&n(p),c.manager.itemEnd(e),p}).catch(function(p){r&&r(p),Wh.set(d,p),is.remove(e),c.manager.itemError(e),c.manager.itemEnd(e)});is.add(e,d),c.manager.itemStart(e)}}class UE extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mp="\\[\\]\\.:\\/",NE=new RegExp("["+Mp+"]","g"),Ep="[^"+Mp+"]",OE="[^"+Mp.replace("\\.","")+"]",PE=/((?:WC+[\/:])*)/.source.replace("WC",Ep),IE=/(WCOD+)?/.source.replace("WCOD",OE),BE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ep),FE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ep),zE=new RegExp("^"+PE+IE+BE+FE+"$"),HE=["material","materials","bones","map"];class GE{constructor(e,n,a){const r=a||Bt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Bt{constructor(e,n,a){this.path=n,this.parsedPath=a||Bt.parseTrackName(n),this.node=Bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Bt.Composite(e,n,a):new Bt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(NE,"")}static parseTrackName(e){const n=zE.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);HE.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const d=a(h.children);if(d)return d}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=Bt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let p=n.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===p){p=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(p!==void 0){if(e[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}const u=e[r];if(u===void 0){const p=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Bt.Composite=GE;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Xv=new st;class VE{constructor(e,n,a=0,r=1/0){this.ray=new pl(e,n),this.near=a,this.far=r,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Xv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xv),this}intersectObject(e,n=!0,a=[]){return $d(e,this,a,n),a.sort(Wv),a}intersectObjects(e,n=!0,a=[]){for(let r=0,c=e.length;r<c;r++)$d(e[r],this,a,n);return a.sort(Wv),a}}function Wv(o,e){return o.distance-e.distance}function $d(o,e,n,a){let r=!0;if(o.layers.test(e.layers)&&o.raycast(e,n)===!1&&(r=!1),r===!0&&a===!0){const c=o.children;for(let u=0,h=c.length;u<h;u++)$d(c[u],e,n,!0)}}function qv(o,e,n,a){const r=kE(a);switch(n){case z0:return o*e;case op:return o*e/r.components*r.byteLength;case lp:return o*e/r.components*r.byteLength;case G0:return o*e*2/r.components*r.byteLength;case cp:return o*e*2/r.components*r.byteLength;case H0:return o*e*3/r.components*r.byteLength;case mi:return o*e*4/r.components*r.byteLength;case up:return o*e*4/r.components*r.byteLength;case tu:case nu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case iu:case au:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ed:case bd:return Math.max(o,16)*Math.max(e,8)/4;case Md:case Td:return Math.max(o,8)*Math.max(e,8)/2;case Ad:case Rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case su:case kd:case Xd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case V0:case Wd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case qd:case Yd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kE(o){switch(o){case Ii:case I0:return{byteLength:1,components:1};case rl:case B0:case dl:return{byteLength:2,components:1};case sp:case rp:return{byteLength:2,components:4};case Fs:case ap:case Ti:return{byteLength:4,components:1};case F0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ly(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function XE(o){const e=new WeakMap;function n(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,d,p){const g=d.array,_=d.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],T=_[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const T=_[x];o.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(o.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:r,remove:c,update:u}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",MT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ET=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:WE,alphahash_pars_fragment:qE,alphamap_fragment:YE,alphamap_pars_fragment:jE,alphatest_fragment:KE,alphatest_pars_fragment:ZE,aomap_fragment:QE,aomap_pars_fragment:JE,batching_pars_vertex:$E,batching_vertex:eT,begin_vertex:tT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:aT,bumpmap_pars_fragment:sT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:oT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:cT,color_fragment:uT,color_pars_fragment:fT,color_pars_vertex:hT,color_vertex:dT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:_T,displacementmap_vertex:vT,emissivemap_fragment:yT,emissivemap_pars_fragment:xT,colorspace_fragment:ST,colorspace_pars_fragment:MT,envmap_fragment:ET,envmap_common_pars_fragment:TT,envmap_pars_fragment:bT,envmap_pars_vertex:AT,envmap_physical_pars_fragment:BT,envmap_vertex:RT,fog_vertex:wT,fog_pars_vertex:CT,fog_fragment:DT,fog_pars_fragment:LT,gradientmap_pars_fragment:UT,lightmap_pars_fragment:NT,lights_lambert_fragment:OT,lights_lambert_pars_fragment:PT,lights_pars_begin:IT,lights_toon_fragment:FT,lights_toon_pars_fragment:zT,lights_phong_fragment:HT,lights_phong_pars_fragment:GT,lights_physical_fragment:VT,lights_physical_pars_fragment:kT,lights_fragment_begin:XT,lights_fragment_maps:WT,lights_fragment_end:qT,logdepthbuf_fragment:YT,logdepthbuf_pars_fragment:jT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:ZT,map_fragment:QT,map_pars_fragment:JT,map_particle_fragment:$T,map_particle_pars_fragment:eb,metalnessmap_fragment:tb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:ab,morphnormal_vertex:sb,morphtarget_pars_vertex:rb,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:cb,normal_pars_fragment:ub,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:vb,packing:yb,premultiplied_alpha_fragment:xb,project_vertex:Sb,dithering_fragment:Mb,dithering_pars_fragment:Eb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Rb,shadowmap_vertex:wb,shadowmask_pars_fragment:Cb,skinbase_vertex:Db,skinning_pars_vertex:Lb,skinning_vertex:Ub,skinnormal_vertex:Nb,specularmap_fragment:Ob,specularmap_pars_fragment:Pb,tonemapping_fragment:Ib,tonemapping_pars_fragment:Bb,transmission_fragment:Fb,transmission_pars_fragment:zb,uv_pars_fragment:Hb,uv_pars_vertex:Gb,uv_vertex:Vb,worldpos_vertex:kb,background_vert:Xb,background_frag:Wb,backgroundCube_vert:qb,backgroundCube_frag:Yb,cube_vert:jb,cube_frag:Kb,depth_vert:Zb,depth_frag:Qb,distanceRGBA_vert:Jb,distanceRGBA_frag:$b,equirect_vert:eA,equirect_frag:tA,linedashed_vert:nA,linedashed_frag:iA,meshbasic_vert:aA,meshbasic_frag:sA,meshlambert_vert:rA,meshlambert_frag:oA,meshmatcap_vert:lA,meshmatcap_frag:cA,meshnormal_vert:uA,meshnormal_frag:fA,meshphong_vert:hA,meshphong_frag:dA,meshphysical_vert:pA,meshphysical_frag:mA,meshtoon_vert:gA,meshtoon_frag:_A,points_vert:vA,points_frag:yA,shadow_vert:xA,shadow_frag:SA,sprite_vert:MA,sprite_frag:EA},Ue={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ni={basic:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Bn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Bn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Bn([Ue.points,Ue.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Bn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Bn([Ue.common,Ue.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Bn([Ue.sprite,Ue.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Bn([Ue.common,Ue.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Bn([Ue.lights,Ue.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ni.physical={uniforms:Bn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Qc={r:0,b:0,g:0},Ds=new Bi,TA=new st;function bA(o,e,n,a,r,c,u){const h=new at(0);let d=c===!0?0:1,p,g,_=null,v=0,x=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function T(L){let C=!1;const B=E(L);B===null?y(h,d):B&&B.isColor&&(y(B,1),C=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const B=E(C);B&&(B.isCubeTexture||B.mapping===hu)?(g===void 0&&(g=new jn(new ml(1,1,1),new ya({name:"BackgroundCubeMaterial",uniforms:Vr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ds.copy(C.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(TA.makeRotationFromEuler(Ds)),g.material.toneMapped=bt.getTransfer(B.colorSpace)!==Vt,(_!==B||v!==B.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,_=B,v=B.version,x=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new jn(new du(2,2),new ya({name:"BackgroundMaterial",uniforms:Vr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=bt.getTransfer(B.colorSpace)!==Vt,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||v!==B.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,_=B,v=B.version,x=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function y(L,C){L.getRGB(Qc,Q0(o)),a.buffers.color.setClear(Qc.r,Qc.g,Qc.b,C,u)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,C=1){h.set(L),d=C,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,y(h,d)},render:T,addToRenderList:S,dispose:N}}function AA(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function h(w,k,le,re,ue){let _e=!1;const P=_(re,le,k);c!==P&&(c=P,p(c.object)),_e=x(w,re,le,ue),_e&&E(w,re,le,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(_e||u)&&(u=!1,C(w,k,le,re),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function _(w,k,le){const re=le.wireframe===!0;let ue=a[w.id];ue===void 0&&(ue={},a[w.id]=ue);let _e=ue[k.id];_e===void 0&&(_e={},ue[k.id]=_e);let P=_e[re];return P===void 0&&(P=v(d()),_e[re]=P),P}function v(w){const k=[],le=[],re=[];for(let ue=0;ue<n;ue++)k[ue]=0,le[ue]=0,re[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:le,attributeDivisors:re,object:w,attributes:{},index:null}}function x(w,k,le,re){const ue=c.attributes,_e=k.attributes;let P=0;const ee=le.getAttributes();for(const j in ee)if(ee[j].location>=0){const U=ue[j];let $=_e[j];if($===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return c.attributesNum!==P||c.index!==re}function E(w,k,le,re){const ue={},_e=k.attributes;let P=0;const ee=le.getAttributes();for(const j in ee)if(ee[j].location>=0){let U=_e[j];U===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ue[j]=$,P++}c.attributes=ue,c.attributesNum=P,c.index=re}function T(){const w=c.newAttributes;for(let k=0,le=w.length;k<le;k++)w[k]=0}function S(w){y(w,0)}function y(w,k){const le=c.newAttributes,re=c.enabledAttributes,ue=c.attributeDivisors;le[w]=1,re[w]===0&&(o.enableVertexAttribArray(w),re[w]=1),ue[w]!==k&&(o.vertexAttribDivisor(w,k),ue[w]=k)}function N(){const w=c.newAttributes,k=c.enabledAttributes;for(let le=0,re=k.length;le<re;le++)k[le]!==w[le]&&(o.disableVertexAttribArray(le),k[le]=0)}function L(w,k,le,re,ue,_e,P){P===!0?o.vertexAttribIPointer(w,k,le,ue,_e):o.vertexAttribPointer(w,k,le,re,ue,_e)}function C(w,k,le,re){T();const ue=re.attributes,_e=le.getAttributes(),P=k.defaultAttributeValues;for(const ee in _e){const j=_e[ee];if(j.location>=0){let Me=ue[ee];if(Me===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const U=Me.normalized,$=Me.itemSize,ve=e.get(Me);if(ve===void 0)continue;const xe=ve.buffer,Q=ve.type,pe=ve.bytesPerElement,Se=Q===o.INT||Q===o.UNSIGNED_INT||Me.gpuType===ap;if(Me.isInterleavedBufferAttribute){const Ae=Me.data,we=Ae.stride,lt=Me.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ze=0;Ze<j.locationSize;Ze++)y(j.location+Ze,Ae.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ze=0;Ze<j.locationSize;Ze++)S(j.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let Ze=0;Ze<j.locationSize;Ze++)L(j.location+Ze,$/j.locationSize,Q,U,we*pe,(lt+$/j.locationSize*Ze)*pe,Se)}else{if(Me.isInstancedBufferAttribute){for(let Ae=0;Ae<j.locationSize;Ae++)y(j.location+Ae,Me.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)S(j.location+Ae);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let Ae=0;Ae<j.locationSize;Ae++)L(j.location+Ae,$/j.locationSize,Q,U,$*pe,$/j.locationSize*Ae*pe,Se)}}else if(P!==void 0){const U=P[ee];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(j.location,U);break;case 3:o.vertexAttrib3fv(j.location,U);break;case 4:o.vertexAttrib4fv(j.location,U);break;default:o.vertexAttrib1fv(j.location,U)}}}}N()}function B(){q();for(const w in a){const k=a[w];for(const le in k){const re=k[le];for(const ue in re)g(re[ue].object),delete re[ue];delete k[le]}delete a[w]}}function z(w){if(a[w.id]===void 0)return;const k=a[w.id];for(const le in k){const re=k[le];for(const ue in re)g(re[ue].object),delete re[ue];delete k[le]}delete a[w.id]}function F(w){for(const k in a){const le=a[k];if(le[w.id]===void 0)continue;const re=le[w.id];for(const ue in re)g(re[ue].object),delete re[ue];delete le[w.id]}}function q(){D(),u=!0,c!==r&&(c=r,p(c.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:q,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:N}}function RA(o,e,n){let a;function r(p){a=p}function c(p,g){o.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(o.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];n.update(x,a,1)}function d(p,g,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)u(p[E],g[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];n.update(E,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function wA(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(F){return!(F!==mi&&a.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const q=F===dl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ii&&a.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ti&&!q)}function d(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:B,maxSamples:z}}function CA(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new es,h=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||r;return r=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,y=o.get(_);if(!r||E===null||E.length===0||c&&!S)c?g(null):p();else{const N=c?0:a,L=N*4;let C=y.clippingState||null;d.value=C,C=g(E,v,L,x);for(let B=0;B!==L;++B)C[B]=n[B];y.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=d.value,E!==!0||S===null){const y=x+T*4,N=v.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,C=x;L!==T;++L,C+=4)u.copy(_[L]).applyMatrix4(N,h),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function DA(o){let e=new WeakMap;function n(u,h){return h===xd?u.mapping=Fr:h===Sd&&(u.mapping=zr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===xd||h===Sd)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new ZM(d.height);return p.fromEquirectangularTexture(o,u),e.set(u,p),u.addEventListener("dispose",r),n(p.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Ur=4,Yv=[.125,.215,.35,.446,.526,.582],Ps=20,qh=new Sp,jv=new at;let Yh=null,jh=0,Kh=0,Zh=!1;const Ns=(1+Math.sqrt(5))/2,Lr=1/Ns,Kv=[new Y(-Ns,Lr,0),new Y(Ns,Lr,0),new Y(-Lr,0,Ns),new Y(Lr,0,Ns),new Y(0,Ns,-Lr),new Y(0,Ns,Lr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],LA=new Y;class Zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:h=LA}=c;Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,r,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,jh,Kh),this._renderer.xr.enabled=Zh,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:si,minFilter:si,generateMipmaps:!1,type:dl,format:mi,colorSpace:Vn,depthBuffer:!1},r=Qv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qv(e,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UA(c)),this._blurMaterial=NA(c,e,n)}return r}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,qh)}_sceneToCubeUV(e,n,a,r,c){const d=new Fn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(jv),_.toneMapping=ss,_.autoClear=!1;const E=new Is({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),T=new jn(new ml,E);let S=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,S=!0):(E.color.copy(jv),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(d.up.set(0,p[N],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[N],c.y,c.z)):L===1?(d.up.set(0,0,p[N]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[N],c.z)):(d.up.set(0,p[N],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[N]));const C=this._cubeSize;Jc(r,L*C,N>2?C:0,C,C),_.setRenderTarget(r),S&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===Fr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jv());const c=r?this._cubemapMaterial:this._equirectMaterial,u=new jn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const d=this._cubeSize;Jc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,qh)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let c=1;c<r;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Kv[(r-c-1)%Kv.length];this._blur(e,c-1,c,u,h)}n.autoClear=a}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new jn(this._lodPlanes[r],p),v=p.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ps-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Ps;S>Ps&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ps}`);const y=[];let N=0;for(let F=0;F<Ps;++F){const q=F/T,D=Math.exp(-q*q/2);y.push(D),F===0?N+=D:F<S&&(N+=2*D)}for(let F=0;F<y.length;F++)y[F]=y[F]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const C=this._sizeLods[r],B=3*C*(r>L-Ur?r-L+Ur:0),z=4*(this._cubeSize-C);Jc(n,B,z,3*C,2*C),d.setRenderTarget(n),d.render(_,qh)}}function UA(o){const e=[],n=[],a=[];let r=o;const c=o-Ur+1+Yv.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);n.push(h);let d=1/h;u>o-Ur?d=Yv[u-o+Ur-1]:u===0&&(d=0),a.push(d);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,T=3,S=2,y=1,N=new Float32Array(T*E*x),L=new Float32Array(S*E*x),C=new Float32Array(y*E*x);for(let z=0;z<x;z++){const F=z%3*2/3-1,q=z>2?0:-1,D=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];N.set(D,T*E*z),L.set(v,S*E*z);const w=[z,z,z,z,z,z];C.set(w,y*E*z)}const B=new zi;B.setAttribute("position",new Gn(N,T)),B.setAttribute("uv",new Gn(L,S)),B.setAttribute("faceIndex",new Gn(C,y)),e.push(B),r>Ur&&r--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function Qv(o,e,n){const a=new zs(o,e,n);return a.texture.mapping=hu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Jc(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function NA(o,e,n){const a=new Float32Array(Ps),r=new Y(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Jv(){return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function $v(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Tp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OA(o){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===xd||d===Sd,g=d===Fr||d===zr;if(p||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new Zv(o)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return p&&x&&x.height>0||g&&x&&r(x)?(n===null&&(n=new Zv(o)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function r(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function PA(o){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Or("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function IA(o,e,n,a){const r={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const x in v)e.update(v[x],o.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,E=_.attributes.position;let T=0;if(x!==null){const N=x.array;T=x.version;for(let L=0,C=N.length;L<C;L+=3){const B=N[L+0],z=N[L+1],F=N[L+2];v.push(B,z,z,F,F,B)}}else if(E!==void 0){const N=E.array;T=E.version;for(let L=0,C=N.length/3-1;L<C;L+=3){const B=L+0,z=L+1,F=L+2;v.push(B,z,z,F,F,B)}}else return;const S=new(q0(v)?Z0:K0)(v,1);S.version=T;const y=c.get(_);y&&e.remove(y),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function BA(o,e,n){let a;function r(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function d(v,x){o.drawElements(a,x,c,v*u),n.update(x,a,1)}function p(v,x,E){E!==0&&(o.drawElementsInstanced(a,x,c,v*u,E),n.update(x,a,E))}function g(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];n.update(S,a,1)}function _(v,x,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)p(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,c,v,0,T,0,E);let y=0;for(let N=0;N<E;N++)y+=x[N]*T[N];n.update(y,a,1)}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function FA(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=h*(c/3);break;case o.LINES:n.lines+=h*(c/2);break;case o.LINE_STRIP:n.lines+=h*(c-1);break;case o.LINE_LOOP:n.lines+=h*c;break;case o.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function zA(o,e,n){const a=new WeakMap,r=new Ut;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let D=function(){F.dispose(),a.delete(h),h.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),E===!0&&(L=2),T===!0&&(L=3);let C=h.attributes.position.count*L,B=1;C>e.maxTextureSize&&(B=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const z=new Float32Array(C*B*4*_),F=new Y0(z,C,B,_);F.type=Ti,F.needsUpdate=!0;const q=L*4;for(let w=0;w<_;w++){const k=S[w],le=y[w],re=N[w],ue=C*B*4*w;for(let _e=0;_e<k.count;_e++){const P=_e*q;x===!0&&(r.fromBufferAttribute(k,_e),z[ue+P+0]=r.x,z[ue+P+1]=r.y,z[ue+P+2]=r.z,z[ue+P+3]=0),E===!0&&(r.fromBufferAttribute(le,_e),z[ue+P+4]=r.x,z[ue+P+5]=r.y,z[ue+P+6]=r.z,z[ue+P+7]=0),T===!0&&(r.fromBufferAttribute(re,_e),z[ue+P+8]=r.x,z[ue+P+9]=r.y,z[ue+P+10]=r.z,z[ue+P+11]=re.itemSize===4?r.w:1)}}v={count:_,texture:F,size:new Mt(C,B)},a.set(h,v),h.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let x=0;for(let T=0;T<p.length;T++)x+=p[T];const E=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function HA(o,e,n,a){let r=new WeakMap;function c(d){const p=a.render.frame,g=d.geometry,_=e.get(d,g);if(r.get(_)!==p&&(e.update(_),r.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function u(){r=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const cy=new Sn,e0=new ay(1,1),uy=new Y0,fy=new NM,hy=new $0,t0=[],n0=[],i0=new Float32Array(16),a0=new Float32Array(9),s0=new Float32Array(4);function Zr(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=t0[r];if(c===void 0&&(c=new Float32Array(r),t0[r]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,o[u].toArray(c,h)}return c}function dn(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function pn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function pu(o,e){let n=n0[e];n===void 0&&(n=new Int32Array(e),n0[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function GA(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function VA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;o.uniform2fv(this.addr,e),pn(n,e)}}function kA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dn(n,e))return;o.uniform3fv(this.addr,e),pn(n,e)}}function XA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;o.uniform4fv(this.addr,e),pn(n,e)}}function WA(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;s0.set(a),o.uniformMatrix2fv(this.addr,!1,s0),pn(n,a)}}function qA(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;a0.set(a),o.uniformMatrix3fv(this.addr,!1,a0),pn(n,a)}}function YA(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;i0.set(a),o.uniformMatrix4fv(this.addr,!1,i0),pn(n,a)}}function jA(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function KA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;o.uniform2iv(this.addr,e),pn(n,e)}}function ZA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;o.uniform3iv(this.addr,e),pn(n,e)}}function QA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;o.uniform4iv(this.addr,e),pn(n,e)}}function JA(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function $A(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;o.uniform2uiv(this.addr,e),pn(n,e)}}function e1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;o.uniform3uiv(this.addr,e),pn(n,e)}}function t1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;o.uniform4uiv(this.addr,e),pn(n,e)}}function n1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(e0.compareFunction=W0,c=e0):c=cy,n.setTexture2D(e||c,r)}function i1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||fy,r)}function a1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||hy,r)}function s1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||uy,r)}function r1(o){switch(o){case 5126:return GA;case 35664:return VA;case 35665:return kA;case 35666:return XA;case 35674:return WA;case 35675:return qA;case 35676:return YA;case 5124:case 35670:return jA;case 35667:case 35671:return KA;case 35668:case 35672:return ZA;case 35669:case 35673:return QA;case 5125:return JA;case 36294:return $A;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return s1}}function o1(o,e){o.uniform1fv(this.addr,e)}function l1(o,e){const n=Zr(e,this.size,2);o.uniform2fv(this.addr,n)}function c1(o,e){const n=Zr(e,this.size,3);o.uniform3fv(this.addr,n)}function u1(o,e){const n=Zr(e,this.size,4);o.uniform4fv(this.addr,n)}function f1(o,e){const n=Zr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function h1(o,e){const n=Zr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function d1(o,e){const n=Zr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function p1(o,e){o.uniform1iv(this.addr,e)}function m1(o,e){o.uniform2iv(this.addr,e)}function g1(o,e){o.uniform3iv(this.addr,e)}function _1(o,e){o.uniform4iv(this.addr,e)}function v1(o,e){o.uniform1uiv(this.addr,e)}function y1(o,e){o.uniform2uiv(this.addr,e)}function x1(o,e){o.uniform3uiv(this.addr,e)}function S1(o,e){o.uniform4uiv(this.addr,e)}function M1(o,e,n){const a=this.cache,r=e.length,c=pu(n,r);dn(a,c)||(o.uniform1iv(this.addr,c),pn(a,c));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||cy,c[u])}function E1(o,e,n){const a=this.cache,r=e.length,c=pu(n,r);dn(a,c)||(o.uniform1iv(this.addr,c),pn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||fy,c[u])}function T1(o,e,n){const a=this.cache,r=e.length,c=pu(n,r);dn(a,c)||(o.uniform1iv(this.addr,c),pn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||hy,c[u])}function b1(o,e,n){const a=this.cache,r=e.length,c=pu(n,r);dn(a,c)||(o.uniform1iv(this.addr,c),pn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||uy,c[u])}function A1(o){switch(o){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return y1;case 36295:return x1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return b1}}class R1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=r1(n.type)}}class w1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=A1(n.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(e,n[h.id],a)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function r0(o,e){o.seq.push(e),o.map[e.id]=e}function D1(o,e,n){const a=o.name,r=a.length;for(Qh.lastIndex=0;;){const c=Qh.exec(a),u=Qh.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===r){r0(n,p===void 0?new R1(h,o,e):new w1(h,o,e));break}else{let _=n.map[h];_===void 0&&(_=new C1(h),r0(n,_)),n=_}}}class ru{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const c=e.getActiveUniform(n,r),u=e.getUniformLocation(n,c.name);D1(c,u,this)}}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const h=n[c],d=a[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function o0(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const L1=37297;let U1=0;function N1(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const l0=new ot;function O1(o){bt._getMatrix(l0,bt.workingColorSpace,o);const e=`mat3( ${l0.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(o)){case lu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function c0(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(a&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+r+`

`+N1(o.getShaderSource(e),u)}else return r}function P1(o,e){const n=O1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function I1(o,e){let n;switch(e){case GS:n="Linear";break;case VS:n="Reinhard";break;case kS:n="Cineon";break;case XS:n="ACESFilmic";break;case qS:n="AgX";break;case YS:n="Neutral";break;case WS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $c=new Y;function B1(){bt.getLuminanceCoefficients($c);const o=$c.x.toFixed(4),e=$c.y.toFixed(4),n=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function z1(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function H1(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:h}}return n}function nl(o){return o!==""}function u0(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(o){return o.replace(G1,k1)}const V1=new Map;function k1(o,e){let n=ct[e];if(n===void 0){const a=V1.get(e);if(a!==void 0)n=ct[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return ep(n)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(o){return o.replace(X1,W1)}function W1(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function d0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===xS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ha&&(e="SHADOWMAP_TYPE_VSM"),e}function Y1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Fr:case zr:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function K1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case HS:e="ENVMAP_BLENDING_ADD";break}return e}function Z1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function Q1(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=q1(n),p=Y1(n),g=j1(n),_=K1(n),v=Z1(n),x=F1(n),E=z1(c),T=r.createProgram();let S,y,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nl).join(`
`),y.length>0&&(y+=`
`)):(S=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),y=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ss?"#define TONE_MAPPING":"",n.toneMapping!==ss?ct.tonemapping_pars_fragment:"",n.toneMapping!==ss?I1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,P1("linearToOutputTexel",n.outputColorSpace),B1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),u=ep(u),u=u0(u,n),u=f0(u,n),h=ep(h),h=u0(h,n),h=f0(h,n),u=h0(u),h=h0(h),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=N+S+u,C=N+y+h,B=o0(r,r.VERTEX_SHADER,L),z=o0(r,r.FRAGMENT_SHADER,C);r.attachShader(T,B),r.attachShader(T,z),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function F(k){if(o.debug.checkShaderErrors){const le=r.getProgramInfoLog(T).trim(),re=r.getShaderInfoLog(B).trim(),ue=r.getShaderInfoLog(z).trim();let _e=!0,P=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(_e=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,B,z);else{const ee=c0(r,B,"vertex"),j=c0(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+le+`
`+ee+`
`+j)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(re===""||ue==="")&&(P=!1);P&&(k.diagnostics={runnable:_e,programLog:le,vertexShader:{log:re,prefix:S},fragmentShader:{log:ue,prefix:y}})}r.deleteShader(B),r.deleteShader(z),q=new ru(r,T),D=H1(r,T)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(T,L1)),w},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=z,this}let J1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new eR(e),n.set(e,a)),a}}class eR{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function tR(o,e,n,a,r,c,u){const h=new dp,d=new $1,p=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,w,k,le,re){const ue=le.fog,_e=re.geometry,P=D.isMeshStandardMaterial?le.environment:null,ee=(D.isMeshStandardMaterial?n:e).get(D.envMap||P),j=ee&&ee.mapping===hu?ee.image.height:null,Me=E[D.type];D.precision!==null&&(x=r.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const U=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,$=U!==void 0?U.length:0;let ve=0;_e.morphAttributes.position!==void 0&&(ve=1),_e.morphAttributes.normal!==void 0&&(ve=2),_e.morphAttributes.color!==void 0&&(ve=3);let xe,Q,pe,Se;if(Me){const wt=Ni[Me];xe=wt.vertexShader,Q=wt.fragmentShader}else xe=D.vertexShader,Q=D.fragmentShader,d.update(D),pe=d.getVertexShaderID(D),Se=d.getFragmentShaderID(D);const Ae=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),lt=re.isInstancedMesh===!0,Ze=re.isBatchedMesh===!0,Ft=!!D.map,kt=!!D.matcap,vt=!!ee,H=!!D.aoMap,Mn=!!D.lightMap,At=!!D.bumpMap,dt=!!D.normalMap,Ge=!!D.displacementMap,yt=!!D.emissiveMap,Ye=!!D.metalnessMap,it=!!D.roughnessMap,tn=D.anisotropy>0,O=D.clearcoat>0,b=D.dispersion>0,te=D.iridescence>0,fe=D.sheen>0,de=D.transmission>0,oe=tn&&!!D.anisotropyMap,Oe=O&&!!D.clearcoatMap,De=O&&!!D.clearcoatNormalMap,He=O&&!!D.clearcoatRoughnessMap,Ve=te&&!!D.iridescenceMap,ye=te&&!!D.iridescenceThicknessMap,Pe=fe&&!!D.sheenColorMap,We=fe&&!!D.sheenRoughnessMap,qe=!!D.specularMap,Re=!!D.specularColorMap,nt=!!D.specularIntensityMap,V=de&&!!D.transmissionMap,Le=de&&!!D.thicknessMap,Ee=!!D.gradientMap,Ie=!!D.alphaMap,be=D.alphaTest>0,ge=!!D.alphaHash,Fe=!!D.extensions;let tt=ss;D.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(tt=o.toneMapping);const Nt={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:xe,fragmentShader:Q,defines:D.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&re._colorsTexture!==null,instancing:lt,instancingColor:lt&&re.instanceColor!==null,instancingMorph:lt&&re.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ae===null?o.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Vn,alphaToCoverage:!!D.alphaToCoverage,map:Ft,matcap:kt,envMap:vt,envMapMode:vt&&ee.mapping,envMapCubeUVHeight:j,aoMap:H,lightMap:Mn,bumpMap:At,normalMap:dt,displacementMap:v&&Ge,emissiveMap:yt,normalMapObjectSpace:dt&&D.normalMapType===$S,normalMapTangentSpace:dt&&D.normalMapType===X0,metalnessMap:Ye,roughnessMap:it,anisotropy:tn,anisotropyMap:oe,clearcoat:O,clearcoatMap:Oe,clearcoatNormalMap:De,clearcoatRoughnessMap:He,dispersion:b,iridescence:te,iridescenceMap:Ve,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:Pe,sheenRoughnessMap:We,specularMap:qe,specularColorMap:Re,specularIntensityMap:nt,transmission:de,transmissionMap:V,thicknessMap:Le,gradientMap:Ee,opaque:D.transparent===!1&&D.blending===Nr&&D.alphaToCoverage===!1,alphaMap:Ie,alphaTest:be,alphaHash:ge,combine:D.combine,mapUv:Ft&&T(D.map.channel),aoMapUv:H&&T(D.aoMap.channel),lightMapUv:Mn&&T(D.lightMap.channel),bumpMapUv:At&&T(D.bumpMap.channel),normalMapUv:dt&&T(D.normalMap.channel),displacementMapUv:Ge&&T(D.displacementMap.channel),emissiveMapUv:yt&&T(D.emissiveMap.channel),metalnessMapUv:Ye&&T(D.metalnessMap.channel),roughnessMapUv:it&&T(D.roughnessMap.channel),anisotropyMapUv:oe&&T(D.anisotropyMap.channel),clearcoatMapUv:Oe&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(D.sheenRoughnessMap.channel),specularMapUv:qe&&T(D.specularMap.channel),specularColorMapUv:Re&&T(D.specularColorMap.channel),specularIntensityMapUv:nt&&T(D.specularIntensityMap.channel),transmissionMapUv:V&&T(D.transmissionMap.channel),thicknessMapUv:Le&&T(D.thicknessMap.channel),alphaMapUv:Ie&&T(D.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(dt||tn),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!_e.attributes.uv&&(Ft||Ie),fog:!!ue,useFog:D.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:re.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:tt,decodeVideoTexture:Ft&&D.map.isVideoTexture===!0&&bt.getTransfer(D.map.colorSpace)===Vt,decodeVideoTextureEmissive:yt&&D.emissiveMap.isVideoTexture===!0&&bt.getTransfer(D.emissiveMap.colorSpace)===Vt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Oi,flipSided:D.side===zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Fe&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&D.extensions.multiDraw===!0||Ze)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Nt.vertexUv1s=p.has(1),Nt.vertexUv2s=p.has(2),Nt.vertexUv3s=p.has(3),p.clear(),Nt}function y(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)w.push(k),w.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(N(w,D),L(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function N(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=E[D.type];let k;if(w){const le=Ni[w];k=qM.clone(le.uniforms)}else k=D.uniforms;return k}function B(D,w){let k;for(let le=0,re=g.length;le<re;le++){const ue=g[le];if(ue.cacheKey===w){k=ue,++k.usedTimes;break}}return k===void 0&&(k=new Q1(o,w,D,c),g.push(k)),k}function z(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function F(D){d.remove(D)}function q(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:B,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:q}}function nR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function iR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function p0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function m0(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(_,v,x,E,T,S){let y=o[e];return y===void 0?(y={id:_.id,object:_,geometry:v,material:x,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},o[e]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=T,y.group=S),e++,y}function h(_,v,x,E,T,S){const y=u(_,v,x,E,T,S);x.transmission>0?a.push(y):x.transparent===!0?r.push(y):n.push(y)}function d(_,v,x,E,T,S){const y=u(_,v,x,E,T,S);x.transmission>0?a.unshift(y):x.transparent===!0?r.unshift(y):n.unshift(y)}function p(_,v){n.length>1&&n.sort(_||iR),a.length>1&&a.sort(v||p0),r.length>1&&r.sort(v||p0)}function g(){for(let _=e,v=o.length;_<v;_++){const x=o[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:h,unshift:d,finish:g,sort:p}}function aR(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new m0,o.set(a,[u])):r>=c.length?(u=new m0,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function sR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new at};break;case"SpotLight":n={position:new Y,direction:new Y,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=n,n}}}function rR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let oR=0;function lR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function cR(o){const e=new sR,n=rR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new Y);const r=new Y,c=new st,u=new st;function h(p){let g=0,_=0,v=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let x=0,E=0,T=0,S=0,y=0,N=0,L=0,C=0,B=0,z=0,F=0;p.sort(lR);for(let D=0,w=p.length;D<w;D++){const k=p[D],le=k.color,re=k.intensity,ue=k.distance,_e=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=le.r*re,_+=le.g*re,v+=le.b*re;else if(k.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(k.sh.coefficients[P],re);F++}else if(k.isDirectionalLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ee=k.shadow,j=n.get(k);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,a.directionalShadow[x]=j,a.directionalShadowMap[x]=_e,a.directionalShadowMatrix[x]=k.shadow.matrix,N++}a.directional[x]=P,x++}else if(k.isSpotLight){const P=e.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(le).multiplyScalar(re),P.distance=ue,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,a.spot[T]=P;const ee=k.shadow;if(k.map&&(a.spotLightMap[B]=k.map,B++,ee.updateMatrices(k),k.castShadow&&z++),a.spotLightMatrix[T]=ee.matrix,k.castShadow){const j=n.get(k);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,a.spotShadow[T]=j,a.spotShadowMap[T]=_e,C++}T++}else if(k.isRectAreaLight){const P=e.get(k);P.color.copy(le).multiplyScalar(re),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),a.rectArea[S]=P,S++}else if(k.isPointLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const ee=k.shadow,j=n.get(k);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,j.shadowCameraNear=ee.camera.near,j.shadowCameraFar=ee.camera.far,a.pointShadow[E]=j,a.pointShadowMap[E]=_e,a.pointShadowMatrix[E]=k.shadow.matrix,L++}a.point[E]=P,E++}else if(k.isHemisphereLight){const P=e.get(k);P.skyColor.copy(k.color).multiplyScalar(re),P.groundColor.copy(k.groundColor).multiplyScalar(re),a.hemi[y]=P,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ue.LTC_FLOAT_1,a.rectAreaLTC2=Ue.LTC_FLOAT_2):(a.rectAreaLTC1=Ue.LTC_HALF_1,a.rectAreaLTC2=Ue.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const q=a.hash;(q.directionalLength!==x||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==S||q.hemiLength!==y||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==C||q.numSpotMaps!==B||q.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=S,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=C+B-z,a.spotLightMap.length=B,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=F,q.directionalLength=x,q.pointLength=E,q.spotLength=T,q.rectAreaLength=S,q.hemiLength=y,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=C,q.numSpotMaps=B,q.numLightProbes=F,a.version=oR++)}function d(p,g){let _=0,v=0,x=0,E=0,T=0;const S=g.matrixWorldInverse;for(let y=0,N=p.length;y<N;y++){const L=p[y];if(L.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),_++}else if(L.isSpotLight){const C=a.spot[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const C=a.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:h,setupView:d,state:a}}function g0(o){const e=new cR(o),n=[],a=[];function r(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){e.setup(n)}function d(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function uR(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let h;return u===void 0?(h=new g0(o),e.set(r,[h])):c>=u.length?(h=new g0(o),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dR(o,e,n){let a=new gp;const r=new Mt,c=new Mt,u=new Ut,h=new uE({depthPacking:JS}),d=new fE,p={},g=n.maxTextureSize,_={[va]:zn,[zn]:va,[Oi]:Oi},v=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:fR,fragmentShader:hR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new jn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let y=this.type;this.render=function(z,F,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),le=o.state;le.setBlending(as),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const re=y!==ha&&this.type===ha,ue=y===ha&&this.type!==ha;for(let _e=0,P=z.length;_e<P;_e++){const ee=z[_e],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const Me=j.getFrameExtents();if(r.multiply(Me),c.copy(j.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(c.x=Math.floor(g/Me.x),r.x=c.x*Me.x,j.mapSize.x=c.x),r.y>g&&(c.y=Math.floor(g/Me.y),r.y=c.y*Me.y,j.mapSize.y=c.y)),j.map===null||re===!0||ue===!0){const $=this.type!==ha?{minFilter:Hn,magFilter:Hn}:{};j.map!==null&&j.map.dispose(),j.map=new zs(r.x,r.y,$),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const U=j.getViewportCount();for(let $=0;$<U;$++){const ve=j.getViewport($);u.set(c.x*ve.x,c.y*ve.y,c.x*ve.z,c.y*ve.w),le.viewport(u),j.updateMatrices(ee,$),a=j.getFrustum(),C(F,q,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===ha&&N(j,q),j.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(D,w,k)};function N(z,F){const q=e.update(T);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new zs(r.x,r.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(F,null,q,v,T,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(F,null,q,x,T,null)}function L(z,F,q,D){let w=null;const k=q.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)w=k;else if(w=q.isPointLight===!0?d:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const le=w.uuid,re=F.uuid;let ue=p[le];ue===void 0&&(ue={},p[le]=ue);let _e=ue[re];_e===void 0&&(_e=w.clone(),ue[re]=_e,F.addEventListener("dispose",B)),w=_e}if(w.visible=F.visible,w.wireframe=F.wireframe,D===ha?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const le=o.properties.get(w);le.light=q}return w}function C(z,F,q,D,w){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===ha)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,z.matrixWorld);const re=e.update(z),ue=z.material;if(Array.isArray(ue)){const _e=re.groups;for(let P=0,ee=_e.length;P<ee;P++){const j=_e[P],Me=ue[j.materialIndex];if(Me&&Me.visible){const U=L(z,Me,D,w);z.onBeforeShadow(o,z,F,q,re,U,j),o.renderBufferDirect(q,null,re,U,z,j),z.onAfterShadow(o,z,F,q,re,U,j)}}}else if(ue.visible){const _e=L(z,ue,D,w);z.onBeforeShadow(o,z,F,q,re,_e,null),o.renderBufferDirect(q,null,re,_e,z,null),z.onAfterShadow(o,z,F,q,re,_e,null)}}const le=z.children;for(let re=0,ue=le.length;re<ue;re++)C(le[re],F,q,D,w)}function B(z){z.target.removeEventListener("dispose",B);for(const q in p){const D=p[q],w=z.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const pR={[dd]:pd,[md]:vd,[gd]:yd,[Br]:_d,[pd]:dd,[vd]:md,[yd]:gd,[_d]:Br};function mR(o,e){function n(){let V=!1;const Le=new Ut;let Ee=null;const Ie=new Ut(0,0,0,0);return{setMask:function(be){Ee!==be&&!V&&(o.colorMask(be,be,be,be),Ee=be)},setLocked:function(be){V=be},setClear:function(be,ge,Fe,tt,Nt){Nt===!0&&(be*=tt,ge*=tt,Fe*=tt),Le.set(be,ge,Fe,tt),Ie.equals(Le)===!1&&(o.clearColor(be,ge,Fe,tt),Ie.copy(Le))},reset:function(){V=!1,Ee=null,Ie.set(-1,0,0,0)}}}function a(){let V=!1,Le=!1,Ee=null,Ie=null,be=null;return{setReversed:function(ge){if(Le!==ge){const Fe=e.get("EXT_clip_control");ge?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Le=ge;const tt=be;be=null,this.setClear(tt)}},getReversed:function(){return Le},setTest:function(ge){ge?Ae(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(ge){Ee!==ge&&!V&&(o.depthMask(ge),Ee=ge)},setFunc:function(ge){if(Le&&(ge=pR[ge]),Ie!==ge){switch(ge){case dd:o.depthFunc(o.NEVER);break;case pd:o.depthFunc(o.ALWAYS);break;case md:o.depthFunc(o.LESS);break;case Br:o.depthFunc(o.LEQUAL);break;case gd:o.depthFunc(o.EQUAL);break;case _d:o.depthFunc(o.GEQUAL);break;case vd:o.depthFunc(o.GREATER);break;case yd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=ge}},setLocked:function(ge){V=ge},setClear:function(ge){be!==ge&&(Le&&(ge=1-ge),o.clearDepth(ge),be=ge)},reset:function(){V=!1,Ee=null,Ie=null,be=null,Le=!1}}}function r(){let V=!1,Le=null,Ee=null,Ie=null,be=null,ge=null,Fe=null,tt=null,Nt=null;return{setTest:function(wt){V||(wt?Ae(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!V&&(o.stencilMask(wt),Le=wt)},setFunc:function(wt,Kn,mn){(Ee!==wt||Ie!==Kn||be!==mn)&&(o.stencilFunc(wt,Kn,mn),Ee=wt,Ie=Kn,be=mn)},setOp:function(wt,Kn,mn){(ge!==wt||Fe!==Kn||tt!==mn)&&(o.stencilOp(wt,Kn,mn),ge=wt,Fe=Kn,tt=mn)},setLocked:function(wt){V=wt},setClear:function(wt){Nt!==wt&&(o.clearStencil(wt),Nt=wt)},reset:function(){V=!1,Le=null,Ee=null,Ie=null,be=null,ge=null,Fe=null,tt=null,Nt=null}}}const c=new n,u=new a,h=new r,d=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,x=[],E=null,T=!1,S=null,y=null,N=null,L=null,C=null,B=null,z=null,F=new at(0,0,0),q=0,D=!1,w=null,k=null,le=null,re=null,ue=null;const _e=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,ee=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=ee>=1):j.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=ee>=2);let Me=null,U={};const $=o.getParameter(o.SCISSOR_BOX),ve=o.getParameter(o.VIEWPORT),xe=new Ut().fromArray($),Q=new Ut().fromArray(ve);function pe(V,Le,Ee,Ie){const be=new Uint8Array(4),ge=o.createTexture();o.bindTexture(V,ge),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Fe=0;Fe<Ee;Fe++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Le+Fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return ge}const Se={};Se[o.TEXTURE_2D]=pe(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ae(o.DEPTH_TEST),u.setFunc(Br),At(!1),dt(J_),Ae(o.CULL_FACE),H(as);function Ae(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function we(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function lt(V,Le){return _[V]!==Le?(o.bindFramebuffer(V,Le),_[V]=Le,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Le),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ze(V,Le){let Ee=x,Ie=!1;if(V){Ee=v.get(Le),Ee===void 0&&(Ee=[],v.set(Le,Ee));const be=V.textures;if(Ee.length!==be.length||Ee[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,Fe=be.length;ge<Fe;ge++)Ee[ge]=o.COLOR_ATTACHMENT0+ge;Ee.length=be.length,Ie=!0}}else Ee[0]!==o.BACK&&(Ee[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Ee)}function Ft(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const kt={[Os]:o.FUNC_ADD,[MS]:o.FUNC_SUBTRACT,[ES]:o.FUNC_REVERSE_SUBTRACT};kt[TS]=o.MIN,kt[bS]=o.MAX;const vt={[AS]:o.ZERO,[RS]:o.ONE,[wS]:o.SRC_COLOR,[fd]:o.SRC_ALPHA,[OS]:o.SRC_ALPHA_SATURATE,[US]:o.DST_COLOR,[DS]:o.DST_ALPHA,[CS]:o.ONE_MINUS_SRC_COLOR,[hd]:o.ONE_MINUS_SRC_ALPHA,[NS]:o.ONE_MINUS_DST_COLOR,[LS]:o.ONE_MINUS_DST_ALPHA,[PS]:o.CONSTANT_COLOR,[IS]:o.ONE_MINUS_CONSTANT_COLOR,[BS]:o.CONSTANT_ALPHA,[FS]:o.ONE_MINUS_CONSTANT_ALPHA};function H(V,Le,Ee,Ie,be,ge,Fe,tt,Nt,wt){if(V===as){T===!0&&(we(o.BLEND),T=!1);return}if(T===!1&&(Ae(o.BLEND),T=!0),V!==SS){if(V!==S||wt!==D){if((y!==Os||C!==Os)&&(o.blendEquation(o.FUNC_ADD),y=Os,C=Os),wt)switch(V){case Nr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $_:o.blendFunc(o.ONE,o.ONE);break;case ev:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Nr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ev:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,L=null,B=null,z=null,F.set(0,0,0),q=0,S=V,D=wt}return}be=be||Le,ge=ge||Ee,Fe=Fe||Ie,(Le!==y||be!==C)&&(o.blendEquationSeparate(kt[Le],kt[be]),y=Le,C=be),(Ee!==N||Ie!==L||ge!==B||Fe!==z)&&(o.blendFuncSeparate(vt[Ee],vt[Ie],vt[ge],vt[Fe]),N=Ee,L=Ie,B=ge,z=Fe),(tt.equals(F)===!1||Nt!==q)&&(o.blendColor(tt.r,tt.g,tt.b,Nt),F.copy(tt),q=Nt),S=V,D=!1}function Mn(V,Le){V.side===Oi?we(o.CULL_FACE):Ae(o.CULL_FACE);let Ee=V.side===zn;Le&&(Ee=!Ee),At(Ee),V.blending===Nr&&V.transparent===!1?H(as):H(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ie=V.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),yt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ae(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function At(V){w!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),w=V)}function dt(V){V!==vS?(Ae(o.CULL_FACE),V!==k&&(V===J_?o.cullFace(o.BACK):V===yS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),k=V}function Ge(V){V!==le&&(P&&o.lineWidth(V),le=V)}function yt(V,Le,Ee){V?(Ae(o.POLYGON_OFFSET_FILL),(re!==Le||ue!==Ee)&&(o.polygonOffset(Le,Ee),re=Le,ue=Ee)):we(o.POLYGON_OFFSET_FILL)}function Ye(V){V?Ae(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function it(V){V===void 0&&(V=o.TEXTURE0+_e-1),Me!==V&&(o.activeTexture(V),Me=V)}function tn(V,Le,Ee){Ee===void 0&&(Me===null?Ee=o.TEXTURE0+_e-1:Ee=Me);let Ie=U[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[Ee]=Ie),(Ie.type!==V||Ie.texture!==Le)&&(Me!==Ee&&(o.activeTexture(Ee),Me=Ee),o.bindTexture(V,Le||Se[V]),Ie.type=V,Ie.texture=Le)}function O(){const V=U[Me];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(V){xe.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),xe.copy(V))}function We(V){Q.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function qe(V,Le){let Ee=p.get(Le);Ee===void 0&&(Ee=new WeakMap,p.set(Le,Ee));let Ie=Ee.get(V);Ie===void 0&&(Ie=o.getUniformBlockIndex(Le,V.name),Ee.set(V,Ie))}function Re(V,Le){const Ie=p.get(Le).get(V);d.get(Le)!==Ie&&(o.uniformBlockBinding(Le,Ie,V.__bindingPointIndex),d.set(Le,Ie))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Me=null,U={},_={},v=new WeakMap,x=[],E=null,T=!1,S=null,y=null,N=null,L=null,C=null,B=null,z=null,F=new at(0,0,0),q=0,D=!1,w=null,k=null,le=null,re=null,ue=null,xe.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ae,disable:we,bindFramebuffer:lt,drawBuffers:Ze,useProgram:Ft,setBlending:H,setMaterial:Mn,setFlipSided:At,setCullFace:dt,setLineWidth:Ge,setPolygonOffset:yt,setScissorTest:Ye,activeTexture:it,bindTexture:tn,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:te,texImage2D:Ve,texImage3D:ye,updateUBOMapping:qe,uniformBlockBinding:Re,texStorage2D:De,texStorage3D:He,texSubImage2D:fe,texSubImage3D:de,compressedTexSubImage2D:oe,compressedTexSubImage3D:Oe,scissor:Pe,viewport:We,reset:nt}}function gR(o,e,n,a,r,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return x?new OffscreenCanvas(O,b):hl("canvas")}function T(O,b,te){let fe=1;const de=tn(O);if((de.width>te||de.height>te)&&(fe=te/Math.max(de.width,de.height)),fe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const oe=Math.floor(fe*de.width),Oe=Math.floor(fe*de.height);_===void 0&&(_=E(oe,Oe));const De=b?E(oe,Oe):_;return De.width=oe,De.height=Oe,De.getContext("2d").drawImage(O,0,0,oe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+oe+"x"+Oe+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function S(O){return O.generateMipmaps}function y(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,b,te,fe,de=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let oe=b;if(b===o.RED&&(te===o.FLOAT&&(oe=o.R32F),te===o.HALF_FLOAT&&(oe=o.R16F),te===o.UNSIGNED_BYTE&&(oe=o.R8)),b===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(oe=o.R8UI),te===o.UNSIGNED_SHORT&&(oe=o.R16UI),te===o.UNSIGNED_INT&&(oe=o.R32UI),te===o.BYTE&&(oe=o.R8I),te===o.SHORT&&(oe=o.R16I),te===o.INT&&(oe=o.R32I)),b===o.RG&&(te===o.FLOAT&&(oe=o.RG32F),te===o.HALF_FLOAT&&(oe=o.RG16F),te===o.UNSIGNED_BYTE&&(oe=o.RG8)),b===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(oe=o.RG8UI),te===o.UNSIGNED_SHORT&&(oe=o.RG16UI),te===o.UNSIGNED_INT&&(oe=o.RG32UI),te===o.BYTE&&(oe=o.RG8I),te===o.SHORT&&(oe=o.RG16I),te===o.INT&&(oe=o.RG32I)),b===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(oe=o.RGB8UI),te===o.UNSIGNED_SHORT&&(oe=o.RGB16UI),te===o.UNSIGNED_INT&&(oe=o.RGB32UI),te===o.BYTE&&(oe=o.RGB8I),te===o.SHORT&&(oe=o.RGB16I),te===o.INT&&(oe=o.RGB32I)),b===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(oe=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(oe=o.RGBA16UI),te===o.UNSIGNED_INT&&(oe=o.RGBA32UI),te===o.BYTE&&(oe=o.RGBA8I),te===o.SHORT&&(oe=o.RGBA16I),te===o.INT&&(oe=o.RGBA32I)),b===o.RGB&&te===o.UNSIGNED_INT_5_9_9_9_REV&&(oe=o.RGB9_E5),b===o.RGBA){const Oe=de?lu:bt.getTransfer(fe);te===o.FLOAT&&(oe=o.RGBA32F),te===o.HALF_FLOAT&&(oe=o.RGBA16F),te===o.UNSIGNED_BYTE&&(oe=Oe===Vt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(oe=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(oe=o.RGB5_A1)}return(oe===o.R16F||oe===o.R32F||oe===o.RG16F||oe===o.RG32F||oe===o.RGBA16F||oe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(O,b){let te;return O?b===null||b===Fs||b===ol?te=o.DEPTH24_STENCIL8:b===Ti?te=o.DEPTH32F_STENCIL8:b===rl&&(te=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fs||b===ol?te=o.DEPTH_COMPONENT24:b===Ti?te=o.DEPTH_COMPONENT32F:b===rl&&(te=o.DEPTH_COMPONENT16),te}function B(O,b){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Hn&&O.minFilter!==si?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function z(O){const b=O.target;b.removeEventListener("dispose",z),q(b),b.isVideoTexture&&g.delete(b)}function F(O){const b=O.target;b.removeEventListener("dispose",F),w(b)}function q(O){const b=a.get(O);if(b.__webglInit===void 0)return;const te=O.source,fe=v.get(te);if(fe){const de=fe[b.__cacheKey];de.usedTimes--,de.usedTimes===0&&D(O),Object.keys(fe).length===0&&v.delete(te)}a.remove(O)}function D(O){const b=a.get(O);o.deleteTexture(b.__webglTexture);const te=O.source,fe=v.get(te);delete fe[b.__cacheKey],u.memory.textures--}function w(O){const b=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let de=0;de<b.__webglFramebuffer[fe].length;de++)o.deleteFramebuffer(b.__webglFramebuffer[fe][de]);else o.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)o.deleteFramebuffer(b.__webglFramebuffer[fe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=O.textures;for(let fe=0,de=te.length;fe<de;fe++){const oe=a.get(te[fe]);oe.__webglTexture&&(o.deleteTexture(oe.__webglTexture),u.memory.textures--),a.remove(te[fe])}a.remove(O)}let k=0;function le(){k=0}function re(){const O=k;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),k+=1,O}function ue(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function _e(O,b){const te=a.get(O);if(O.isVideoTexture&&Ye(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){const fe=O.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(te,O,b);return}}n.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+b)}function P(O,b){const te=a.get(O);if(O.version>0&&te.__version!==O.version){Se(te,O,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+b)}function ee(O,b){const te=a.get(O);if(O.version>0&&te.__version!==O.version){Se(te,O,b);return}n.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+b)}function j(O,b){const te=a.get(O);if(O.version>0&&te.__version!==O.version){Ae(te,O,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+b)}const Me={[Hr]:o.REPEAT,[ns]:o.CLAMP_TO_EDGE,[ou]:o.MIRRORED_REPEAT},U={[Hn]:o.NEAREST,[P0]:o.NEAREST_MIPMAP_NEAREST,[tl]:o.NEAREST_MIPMAP_LINEAR,[si]:o.LINEAR,[eu]:o.LINEAR_MIPMAP_NEAREST,[pa]:o.LINEAR_MIPMAP_LINEAR},$={[eM]:o.NEVER,[rM]:o.ALWAYS,[tM]:o.LESS,[W0]:o.LEQUAL,[nM]:o.EQUAL,[sM]:o.GEQUAL,[iM]:o.GREATER,[aM]:o.NOTEQUAL};function ve(O,b){if(b.type===Ti&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===si||b.magFilter===eu||b.magFilter===tl||b.magFilter===pa||b.minFilter===si||b.minFilter===eu||b.minFilter===tl||b.minFilter===pa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Me[b.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Me[b.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Me[b.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,U[b.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hn||b.minFilter!==tl&&b.minFilter!==pa||b.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function xe(O,b){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",z));const fe=b.source;let de=v.get(fe);de===void 0&&(de={},v.set(fe,de));const oe=ue(b);if(oe!==O.__cacheKey){de[oe]===void 0&&(de[oe]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,te=!0),de[oe].usedTimes++;const Oe=de[O.__cacheKey];Oe!==void 0&&(de[O.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(b)),O.__cacheKey=oe,O.__webglTexture=de[oe].texture}return te}function Q(O,b,te){return Math.floor(Math.floor(O/te)/b)}function pe(O,b,te,fe){const oe=O.updateRanges;if(oe.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,te,fe,b.data);else{oe.sort((ye,Pe)=>ye.start-Pe.start);let Oe=0;for(let ye=1;ye<oe.length;ye++){const Pe=oe[Oe],We=oe[ye],qe=Pe.start+Pe.count,Re=Q(We.start,b.width,4),nt=Q(Pe.start,b.width,4);We.start<=qe+1&&Re===nt&&Q(We.start+We.count-1,b.width,4)===Re?Pe.count=Math.max(Pe.count,We.start+We.count-Pe.start):(++Oe,oe[Oe]=We)}oe.length=Oe+1;const De=o.getParameter(o.UNPACK_ROW_LENGTH),He=o.getParameter(o.UNPACK_SKIP_PIXELS),Ve=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let ye=0,Pe=oe.length;ye<Pe;ye++){const We=oe[ye],qe=Math.floor(We.start/4),Re=Math.ceil(We.count/4),nt=qe%b.width,V=Math.floor(qe/b.width),Le=Re,Ee=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),n.texSubImage2D(o.TEXTURE_2D,0,nt,V,Le,Ee,te,fe,b.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,De),o.pixelStorei(o.UNPACK_SKIP_PIXELS,He),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ve)}}function Se(O,b,te){let fe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=o.TEXTURE_3D);const de=xe(O,b),oe=b.source;n.bindTexture(fe,O.__webglTexture,o.TEXTURE0+te);const Oe=a.get(oe);if(oe.version!==Oe.__version||de===!0){n.activeTexture(o.TEXTURE0+te);const De=bt.getPrimaries(bt.workingColorSpace),He=b.colorSpace===ts?null:bt.getPrimaries(b.colorSpace),Ve=b.colorSpace===ts||De===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ye=T(b.image,!1,r.maxTextureSize);ye=it(b,ye);const Pe=c.convert(b.format,b.colorSpace),We=c.convert(b.type);let qe=L(b.internalFormat,Pe,We,b.colorSpace,b.isVideoTexture);ve(fe,b);let Re;const nt=b.mipmaps,V=b.isVideoTexture!==!0,Le=Oe.__version===void 0||de===!0,Ee=oe.dataReady,Ie=B(b,ye);if(b.isDepthTexture)qe=C(b.format===cl,b.type),Le&&(V?n.texStorage2D(o.TEXTURE_2D,1,qe,ye.width,ye.height):n.texImage2D(o.TEXTURE_2D,0,qe,ye.width,ye.height,0,Pe,We,null));else if(b.isDataTexture)if(nt.length>0){V&&Le&&n.texStorage2D(o.TEXTURE_2D,Ie,qe,nt[0].width,nt[0].height);for(let be=0,ge=nt.length;be<ge;be++)Re=nt[be],V?Ee&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Re.width,Re.height,Pe,We,Re.data):n.texImage2D(o.TEXTURE_2D,be,qe,Re.width,Re.height,0,Pe,We,Re.data);b.generateMipmaps=!1}else V?(Le&&n.texStorage2D(o.TEXTURE_2D,Ie,qe,ye.width,ye.height),Ee&&pe(b,ye,Pe,We)):n.texImage2D(o.TEXTURE_2D,0,qe,ye.width,ye.height,0,Pe,We,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&Le&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,qe,nt[0].width,nt[0].height,ye.depth);for(let be=0,ge=nt.length;be<ge;be++)if(Re=nt[be],b.format!==mi)if(Pe!==null)if(V){if(Ee)if(b.layerUpdates.size>0){const Fe=qv(Re.width,Re.height,b.format,b.type);for(const tt of b.layerUpdates){const Nt=Re.data.subarray(tt*Fe/Re.data.BYTES_PER_ELEMENT,(tt+1)*Fe/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,tt,Re.width,Re.height,1,Pe,Nt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Re.width,Re.height,ye.depth,Pe,Re.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,qe,Re.width,Re.height,ye.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ee&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Re.width,Re.height,ye.depth,Pe,We,Re.data):n.texImage3D(o.TEXTURE_2D_ARRAY,be,qe,Re.width,Re.height,ye.depth,0,Pe,We,Re.data)}else{V&&Le&&n.texStorage2D(o.TEXTURE_2D,Ie,qe,nt[0].width,nt[0].height);for(let be=0,ge=nt.length;be<ge;be++)Re=nt[be],b.format!==mi?Pe!==null?V?Ee&&n.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,Re.width,Re.height,Pe,Re.data):n.compressedTexImage2D(o.TEXTURE_2D,be,qe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ee&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Re.width,Re.height,Pe,We,Re.data):n.texImage2D(o.TEXTURE_2D,be,qe,Re.width,Re.height,0,Pe,We,Re.data)}else if(b.isDataArrayTexture)if(V){if(Le&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,qe,ye.width,ye.height,ye.depth),Ee)if(b.layerUpdates.size>0){const be=qv(ye.width,ye.height,b.format,b.type);for(const ge of b.layerUpdates){const Fe=ye.data.subarray(ge*be/ye.data.BYTES_PER_ELEMENT,(ge+1)*be/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,Pe,We,Fe)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,We,ye.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,qe,ye.width,ye.height,ye.depth,0,Pe,We,ye.data);else if(b.isData3DTexture)V?(Le&&n.texStorage3D(o.TEXTURE_3D,Ie,qe,ye.width,ye.height,ye.depth),Ee&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,We,ye.data)):n.texImage3D(o.TEXTURE_3D,0,qe,ye.width,ye.height,ye.depth,0,Pe,We,ye.data);else if(b.isFramebufferTexture){if(Le)if(V)n.texStorage2D(o.TEXTURE_2D,Ie,qe,ye.width,ye.height);else{let be=ye.width,ge=ye.height;for(let Fe=0;Fe<Ie;Fe++)n.texImage2D(o.TEXTURE_2D,Fe,qe,be,ge,0,Pe,We,null),be>>=1,ge>>=1}}else if(nt.length>0){if(V&&Le){const be=tn(nt[0]);n.texStorage2D(o.TEXTURE_2D,Ie,qe,be.width,be.height)}for(let be=0,ge=nt.length;be<ge;be++)Re=nt[be],V?Ee&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Pe,We,Re):n.texImage2D(o.TEXTURE_2D,be,qe,Pe,We,Re);b.generateMipmaps=!1}else if(V){if(Le){const be=tn(ye);n.texStorage2D(o.TEXTURE_2D,Ie,qe,be.width,be.height)}Ee&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,We,ye)}else n.texImage2D(o.TEXTURE_2D,0,qe,Pe,We,ye);S(b)&&y(fe),Oe.__version=oe.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ae(O,b,te){if(b.image.length!==6)return;const fe=xe(O,b),de=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+te);const oe=a.get(de);if(de.version!==oe.__version||fe===!0){n.activeTexture(o.TEXTURE0+te);const Oe=bt.getPrimaries(bt.workingColorSpace),De=b.colorSpace===ts?null:bt.getPrimaries(b.colorSpace),He=b.colorSpace===ts||Oe===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ve=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let ge=0;ge<6;ge++)!Ve&&!ye?Pe[ge]=T(b.image[ge],!0,r.maxCubemapSize):Pe[ge]=ye?b.image[ge].image:b.image[ge],Pe[ge]=it(b,Pe[ge]);const We=Pe[0],qe=c.convert(b.format,b.colorSpace),Re=c.convert(b.type),nt=L(b.internalFormat,qe,Re,b.colorSpace),V=b.isVideoTexture!==!0,Le=oe.__version===void 0||fe===!0,Ee=de.dataReady;let Ie=B(b,We);ve(o.TEXTURE_CUBE_MAP,b);let be;if(Ve){V&&Le&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,nt,We.width,We.height);for(let ge=0;ge<6;ge++){be=Pe[ge].mipmaps;for(let Fe=0;Fe<be.length;Fe++){const tt=be[Fe];b.format!==mi?qe!==null?V?Ee&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,tt.width,tt.height,qe,tt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,nt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,tt.width,tt.height,qe,Re,tt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,nt,tt.width,tt.height,0,qe,Re,tt.data)}}}else{if(be=b.mipmaps,V&&Le){be.length>0&&Ie++;const ge=tn(Pe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,nt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){V?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Pe[ge].width,Pe[ge].height,qe,Re,Pe[ge].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Pe[ge].width,Pe[ge].height,0,qe,Re,Pe[ge].data);for(let Fe=0;Fe<be.length;Fe++){const Nt=be[Fe].image[ge].image;V?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,Nt.width,Nt.height,qe,Re,Nt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,nt,Nt.width,Nt.height,0,qe,Re,Nt.data)}}else{V?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,qe,Re,Pe[ge]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,qe,Re,Pe[ge]);for(let Fe=0;Fe<be.length;Fe++){const tt=be[Fe];V?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,qe,Re,tt.image[ge]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,nt,qe,Re,tt.image[ge])}}}S(b)&&y(o.TEXTURE_CUBE_MAP),oe.__version=de.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function we(O,b,te,fe,de,oe){const Oe=c.convert(te.format,te.colorSpace),De=c.convert(te.type),He=L(te.internalFormat,Oe,De,te.colorSpace),Ve=a.get(b),ye=a.get(te);if(ye.__renderTarget=b,!Ve.__hasExternalTextures){const Pe=Math.max(1,b.width>>oe),We=Math.max(1,b.height>>oe);de===o.TEXTURE_3D||de===o.TEXTURE_2D_ARRAY?n.texImage3D(de,oe,He,Pe,We,b.depth,0,Oe,De,null):n.texImage2D(de,oe,He,Pe,We,0,Oe,De,null)}n.bindFramebuffer(o.FRAMEBUFFER,O),yt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,de,ye.__webglTexture,0,Ge(b)):(de===o.TEXTURE_2D||de>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,fe,de,ye.__webglTexture,oe),n.bindFramebuffer(o.FRAMEBUFFER,null)}function lt(O,b,te){if(o.bindRenderbuffer(o.RENDERBUFFER,O),b.depthBuffer){const fe=b.depthTexture,de=fe&&fe.isDepthTexture?fe.type:null,oe=C(b.stencilBuffer,de),Oe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=Ge(b);yt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,oe,b.width,b.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,oe,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,oe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Oe,o.RENDERBUFFER,O)}else{const fe=b.textures;for(let de=0;de<fe.length;de++){const oe=fe[de],Oe=c.convert(oe.format,oe.colorSpace),De=c.convert(oe.type),He=L(oe.internalFormat,Oe,De,oe.colorSpace),Ve=Ge(b);te&&yt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ve,He,b.width,b.height):yt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ve,He,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,He,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ze(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=a.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_e(b.depthTexture,0);const de=fe.__webglTexture,oe=Ge(b);if(b.depthTexture.format===ll)yt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0);else if(b.depthTexture.format===cl)yt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ft(O){const b=a.get(O),te=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const fe=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const de=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",de)};fe.addEventListener("dispose",de),b.__depthDisposeCallback=de}b.__boundDepthTexture=fe}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const fe=O.texture.mipmaps;fe&&fe.length>0?Ze(b.__webglFramebuffer[0],O):Ze(b.__webglFramebuffer,O)}else if(te){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=o.createRenderbuffer(),lt(b.__webglDepthbuffer[fe],O,!1);else{const de=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[fe];o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,oe)}}else{const fe=O.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),lt(b.__webglDepthbuffer,O,!1);else{const de=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,oe)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(O,b,te){const fe=a.get(O);b!==void 0&&we(fe.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&Ft(O)}function vt(O){const b=O.texture,te=a.get(O),fe=a.get(b);O.addEventListener("dispose",F);const de=O.textures,oe=O.isWebGLCubeRenderTarget===!0,Oe=de.length>1;if(Oe||(fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture()),fe.__version=b.version,u.memory.textures++),oe){te.__webglFramebuffer=[];for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[De]=[];for(let He=0;He<b.mipmaps.length;He++)te.__webglFramebuffer[De][He]=o.createFramebuffer()}else te.__webglFramebuffer[De]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let De=0;De<b.mipmaps.length;De++)te.__webglFramebuffer[De]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Oe)for(let De=0,He=de.length;De<He;De++){const Ve=a.get(de[De]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=o.createTexture(),u.memory.textures++)}if(O.samples>0&&yt(O)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let De=0;De<de.length;De++){const He=de[De];te.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[De]);const Ve=c.convert(He.format,He.colorSpace),ye=c.convert(He.type),Pe=L(He.internalFormat,Ve,ye,He.colorSpace,O.isXRRenderTarget===!0),We=Ge(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Pe,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,te.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),lt(te.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(oe){n.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),ve(o.TEXTURE_CUBE_MAP,b);for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)we(te.__webglFramebuffer[De][He],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,He);else we(te.__webglFramebuffer[De],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);S(b)&&y(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let De=0,He=de.length;De<He;De++){const Ve=de[De],ye=a.get(Ve);n.bindTexture(o.TEXTURE_2D,ye.__webglTexture),ve(o.TEXTURE_2D,Ve),we(te.__webglFramebuffer,O,Ve,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),S(Ve)&&y(o.TEXTURE_2D)}n.unbindTexture()}else{let De=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(De,fe.__webglTexture),ve(De,b),b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)we(te.__webglFramebuffer[He],O,b,o.COLOR_ATTACHMENT0,De,He);else we(te.__webglFramebuffer,O,b,o.COLOR_ATTACHMENT0,De,0);S(b)&&y(De),n.unbindTexture()}O.depthBuffer&&Ft(O)}function H(O){const b=O.textures;for(let te=0,fe=b.length;te<fe;te++){const de=b[te];if(S(de)){const oe=N(O),Oe=a.get(de).__webglTexture;n.bindTexture(oe,Oe),y(oe),n.unbindTexture()}}}const Mn=[],At=[];function dt(O){if(O.samples>0){if(yt(O)===!1){const b=O.textures,te=O.width,fe=O.height;let de=o.COLOR_BUFFER_BIT;const oe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Oe=a.get(O),De=b.length>1;if(De)for(let Ve=0;Ve<b.length;Ve++)n.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const He=O.texture.mipmaps;He&&He.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ve=0;Ve<b.length;Ve++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ve]);const ye=a.get(b[Ve]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,te,fe,0,0,te,fe,de,o.NEAREST),d===!0&&(Mn.length=0,At.length=0,Mn.push(o.COLOR_ATTACHMENT0+Ve),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Mn.push(oe),At.push(oe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,At)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Mn))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let Ve=0;Ve<b.length;Ve++){n.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ve]);const ye=a.get(b[Ve]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,ye,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const b=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ge(O){return Math.min(r.maxSamples,O.samples)}function yt(O){const b=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ye(O){const b=u.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function it(O,b){const te=O.colorSpace,fe=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==Vn&&te!==ts&&(bt.getTransfer(te)===Vt?(fe!==mi||de!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function tn(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=le,this.setTexture2D=_e,this.setTexture2DArray=P,this.setTexture3D=ee,this.setTextureCube=j,this.rebindTextures=kt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=we,this.useMultisampledRTT=yt}function _R(o,e){function n(a,r=ts){let c;const u=bt.getTransfer(r);if(a===Ii)return o.UNSIGNED_BYTE;if(a===sp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===rp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===F0)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===I0)return o.BYTE;if(a===B0)return o.SHORT;if(a===rl)return o.UNSIGNED_SHORT;if(a===ap)return o.INT;if(a===Fs)return o.UNSIGNED_INT;if(a===Ti)return o.FLOAT;if(a===dl)return o.HALF_FLOAT;if(a===z0)return o.ALPHA;if(a===H0)return o.RGB;if(a===mi)return o.RGBA;if(a===ll)return o.DEPTH_COMPONENT;if(a===cl)return o.DEPTH_STENCIL;if(a===op)return o.RED;if(a===lp)return o.RED_INTEGER;if(a===G0)return o.RG;if(a===cp)return o.RG_INTEGER;if(a===up)return o.RGBA_INTEGER;if(a===tu||a===nu||a===iu||a===au)if(u===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===tu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===tu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===nu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===iu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Md||a===Ed||a===Td||a===bd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ad||a===Rd||a===wd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ad||a===Rd)return u===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===wd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Cd||a===Dd||a===Ld||a===Ud||a===Nd||a===Od||a===Pd||a===Id||a===Bd||a===Fd||a===zd||a===Hd||a===Gd||a===Vd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Cd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Dd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ld)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ud)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Nd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Od)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Pd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Id)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Bd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Fd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===zd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Hd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Gd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===su||a===kd||a===Xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===su)return u===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===V0||a===Wd||a===qd||a===Yd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===su)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ol?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const vR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,a){if(this.texture===null){const r=new Sn,c=e.properties.get(r);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ya({vertexShader:vR,fragmentShader:yR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jn(new du(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SR extends qr{constructor(e,n){super();const a=this;let r=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,x=null,E=null;const T=new xR,S=n.getContextAttributes();let y=null,N=null;const L=[],C=[],B=new Mt;let z=null;const F=new Fn;F.viewport=new Ut;const q=new Fn;q.viewport=new Ut;const D=[F,q],w=new UE;let k=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=L[Q];return pe===void 0&&(pe=new Fh,L[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=L[Q];return pe===void 0&&(pe=new Fh,L[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=L[Q];return pe===void 0&&(pe=new Fh,L[Q]=pe),pe.getHandSpace()};function re(Q){const pe=C.indexOf(Q.inputSource);if(pe===-1)return;const Se=L[pe];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,p||u),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",_e);for(let Q=0;Q<L.length;Q++){const pe=C[Q];pe!==null&&(C[Q]=null,L[Q].disconnect(pe))}k=null,le=null,T.reset(),e.setRenderTarget(y),x=null,v=null,_=null,r=null,N=null,xe.stop(),a.isPresenting=!1,e.setPixelRatio(z),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",_e),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ae=null,we=null;S.depth&&(we=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=S.stencil?cl:ll,Ae=S.stencil?ol:Fs);const lt={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:c};_=new XRWebGLBinding(r,n),v=_.createProjectionLayer(lt),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new zs(v.textureWidth,v.textureHeight,{format:mi,type:Ii,depthTexture:new ay(v.textureWidth,v.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new zs(x.framebufferWidth,x.framebufferHeight,{format:mi,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(h),xe.setContext(r),xe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function _e(Q){for(let pe=0;pe<Q.removed.length;pe++){const Se=Q.removed[pe],Ae=C.indexOf(Se);Ae>=0&&(C[Ae]=null,L[Ae].disconnect(Se))}for(let pe=0;pe<Q.added.length;pe++){const Se=Q.added[pe];let Ae=C.indexOf(Se);if(Ae===-1){for(let lt=0;lt<L.length;lt++)if(lt>=C.length){C.push(Se),Ae=lt;break}else if(C[lt]===null){C[lt]=Se,Ae=lt;break}if(Ae===-1)break}const we=L[Ae];we&&we.connect(Se)}}const P=new Y,ee=new Y;function j(Q,pe,Se){P.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);const Ae=P.distanceTo(ee),we=pe.projectionMatrix.elements,lt=Se.projectionMatrix.elements,Ze=we[14]/(we[10]-1),Ft=we[14]/(we[10]+1),kt=(we[9]+1)/we[5],vt=(we[9]-1)/we[5],H=(we[8]-1)/we[0],Mn=(lt[8]+1)/lt[0],At=Ze*H,dt=Ze*Mn,Ge=Ae/(-H+Mn),yt=Ge*-H;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(yt),Q.translateZ(Ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ye=Ze+Ge,it=Ft+Ge,tn=At-yt,O=dt+(Ae-yt),b=kt*Ft/it*Ye,te=vt*Ft/it*Ye;Q.projectionMatrix.makePerspective(tn,O,b,te,Ye,it),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Me(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let pe=Q.near,Se=Q.far;T.texture!==null&&(T.depthNear>0&&(pe=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),w.near=q.near=F.near=pe,w.far=q.far=F.far=Se,(k!==w.near||le!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,le=w.far),F.layers.mask=Q.layers.mask|2,q.layers.mask=Q.layers.mask|4,w.layers.mask=F.layers.mask|q.layers.mask;const Ae=Q.parent,we=w.cameras;Me(w,Ae);for(let lt=0;lt<we.length;lt++)Me(we[lt],Ae);we.length===2?j(w,F,q):w.projectionMatrix.copy(F.projectionMatrix),U(Q,w,Ae)};function U(Q,pe,Se){Se===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let $=null;function ve(Q,pe){if(g=pe.getViewerPose(p||u),E=pe,g!==null){const Se=g.views;x!==null&&(e.setRenderTargetFramebuffer(N,x.framebuffer),e.setRenderTarget(N));let Ae=!1;Se.length!==w.cameras.length&&(w.cameras.length=0,Ae=!0);for(let Ze=0;Ze<Se.length;Ze++){const Ft=Se[Ze];let kt=null;if(x!==null)kt=x.getViewport(Ft);else{const H=_.getViewSubImage(v,Ft);kt=H.viewport,Ze===0&&(e.setRenderTargetTextures(N,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(N))}let vt=D[Ze];vt===void 0&&(vt=new Fn,vt.layers.enable(Ze),vt.viewport=new Ut,D[Ze]=vt),vt.matrix.fromArray(Ft.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Ft.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(kt.x,kt.y,kt.width,kt.height),Ze===0&&(w.matrix.copy(vt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ae===!0&&w.cameras.push(vt)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const Ze=_.getDepthInformation(Se[0]);Ze&&Ze.isValid&&Ze.texture&&T.init(e,Ze,r.renderState)}}for(let Se=0;Se<L.length;Se++){const Ae=C[Se],we=L[Se];Ae!==null&&we!==void 0&&we.update(Ae,pe,p||u)}$&&$(Q,pe),pe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pe}),E=null}const xe=new ly;xe.setAnimationLoop(ve),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const Ls=new Bi,MR=new st;function ER(o,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,Q0(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function r(S,y,N,L,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(S,y):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(c(S,y),E(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),T(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?d(S,y,N,L):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===zn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===zn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),L=N.envMap,C=N.envMapRotation;L&&(S.envMap.value=L,Ls.copy(C),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),S.envMapRotation.value.setFromMatrix4(MR.makeRotationFromEuler(Ls)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,N,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=L*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===zn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function TR(o,e,n,a){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,L){const C=L.program;a.uniformBlockBinding(N,C)}function p(N,L){let C=r[N.id];C===void 0&&(E(N),C=g(N),r[N.id]=C,N.addEventListener("dispose",S));const B=L.program;a.updateUBOMapping(N,B);const z=e.render.frame;c[N.id]!==z&&(v(N),c[N.id]=z)}function g(N){const L=_();N.__bindingPointIndex=L;const C=o.createBuffer(),B=N.__size,z=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,B,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function _(){for(let N=0;N<h;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=r[N.id],C=N.uniforms,B=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let z=0,F=C.length;z<F;z++){const q=Array.isArray(C[z])?C[z]:[C[z]];for(let D=0,w=q.length;D<w;D++){const k=q[D];if(x(k,z,D,B)===!0){const le=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let _e=0;_e<re.length;_e++){const P=re[_e],ee=T(P);typeof P=="number"||typeof P=="boolean"?(k.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,le+ue,k.__data)):P.isMatrix3?(k.__data[0]=P.elements[0],k.__data[1]=P.elements[1],k.__data[2]=P.elements[2],k.__data[3]=0,k.__data[4]=P.elements[3],k.__data[5]=P.elements[4],k.__data[6]=P.elements[5],k.__data[7]=0,k.__data[8]=P.elements[6],k.__data[9]=P.elements[7],k.__data[10]=P.elements[8],k.__data[11]=0):(P.toArray(k.__data,ue),ue+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(N,L,C,B){const z=N.value,F=L+"_"+C;if(B[F]===void 0)return typeof z=="number"||typeof z=="boolean"?B[F]=z:B[F]=z.clone(),!0;{const q=B[F];if(typeof z=="number"||typeof z=="boolean"){if(q!==z)return B[F]=z,!0}else if(q.equals(z)===!1)return q.copy(z),!0}return!1}function E(N){const L=N.uniforms;let C=0;const B=16;for(let F=0,q=L.length;F<q;F++){const D=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,k=D.length;w<k;w++){const le=D[w],re=Array.isArray(le.value)?le.value:[le.value];for(let ue=0,_e=re.length;ue<_e;ue++){const P=re[ue],ee=T(P),j=C%B,Me=j%ee.boundary,U=j+Me;C+=Me,U!==0&&B-U<ee.storage&&(C+=B-U),le.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=ee.storage}}}const z=C%B;return z>0&&(C+=B-z),N.__size=C,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(r[L.id]),delete r[L.id],delete c[L.id]}function y(){for(const N in r)o.deleteBuffer(r[N]);u=[],r={},c={}}return{bind:d,update:p,dispose:y}}class bR{constructor(e={}){const{canvas:n=TM(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=wn;let z=0,F=0,q=null,D=-1,w=null;const k=new Ut,le=new Ut;let re=null;const ue=new at(0);let _e=0,P=n.width,ee=n.height,j=1,Me=null,U=null;const $=new Ut(0,0,P,ee),ve=new Ut(0,0,P,ee);let xe=!1;const Q=new gp;let pe=!1,Se=!1;const Ae=new st,we=new st,lt=new Y,Ze=new Ut,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function vt(){return q===null?j:1}let H=a;function Mn(R,W){return n.getContext(R,W)}try{const R={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ip}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",ge,!1),H===null){const W="webgl2";if(H=Mn(W,R),H===null)throw Mn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let At,dt,Ge,yt,Ye,it,tn,O,b,te,fe,de,oe,Oe,De,He,Ve,ye,Pe,We,qe,Re,nt,V;function Le(){At=new PA(H),At.init(),Re=new _R(H,At),dt=new wA(H,At,e,Re),Ge=new mR(H,At),dt.reverseDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),yt=new FA(H),Ye=new nR,it=new gR(H,At,Ge,Ye,dt,Re,yt),tn=new DA(C),O=new OA(C),b=new XE(H),nt=new AA(H,b),te=new IA(H,b,yt,nt),fe=new HA(H,te,b,yt),Pe=new zA(H,dt,it),He=new CA(Ye),de=new tR(C,tn,O,At,dt,nt,He),oe=new ER(C,Ye),Oe=new aR,De=new uR(At),ye=new bA(C,tn,O,Ge,fe,x,d),Ve=new dR(C,fe,dt),V=new TR(H,yt,dt,Ge),We=new RA(H,At,yt),qe=new BA(H,At,yt),yt.programs=de.programs,C.capabilities=dt,C.extensions=At,C.properties=Ye,C.renderLists=Oe,C.shadowMap=Ve,C.state=Ge,C.info=yt}Le();const Ee=new SR(C,H);this.xr=Ee,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(P,ee,!1))},this.getSize=function(R){return R.set(P,ee)},this.setSize=function(R,W,ae=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,ee=W,n.width=Math.floor(R*j),n.height=Math.floor(W*j),ae===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*j,ee*j).floor()},this.setDrawingBufferSize=function(R,W,ae){P=R,ee=W,j=ae,n.width=Math.floor(R*ae),n.height=Math.floor(W*ae),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,W,ae,se){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,ae,se),Ge.viewport(k.copy($).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(ve)},this.setScissor=function(R,W,ae,se){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,W,ae,se),Ge.scissor(le.copy(ve).multiplyScalar(j).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){Ge.setScissorTest(xe=R)},this.setOpaqueSort=function(R){Me=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ae=!0){let se=0;if(R){let K=!1;if(q!==null){const Te=q.texture.format;K=Te===up||Te===cp||Te===lp}if(K){const Te=q.texture.type,Ce=Te===Ii||Te===Fs||Te===rl||Te===ol||Te===sp||Te===rp,Ne=ye.getClearColor(),Be=ye.getClearAlpha(),Je=Ne.r,je=Ne.g,ke=Ne.b;Ce?(E[0]=Je,E[1]=je,E[2]=ke,E[3]=Be,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=Je,T[1]=je,T[2]=ke,T[3]=Be,H.clearBufferiv(H.COLOR,0,T))}else se|=H.COLOR_BUFFER_BIT}W&&(se|=H.DEPTH_BUFFER_BIT),ae&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),Oe.dispose(),De.dispose(),Ye.dispose(),tn.dispose(),O.dispose(),fe.dispose(),nt.dispose(),V.dispose(),de.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",cn),Ee.removeEventListener("sessionend",En),kn.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=yt.autoReset,W=Ve.enabled,ae=Ve.autoUpdate,se=Ve.needsUpdate,K=Ve.type;Le(),yt.autoReset=R,Ve.enabled=W,Ve.autoUpdate=ae,Ve.needsUpdate=se,Ve.type=K}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Fe(R){const W=R.target;W.removeEventListener("dispose",Fe),tt(W)}function tt(R){Nt(R),Ye.remove(R)}function Nt(R){const W=Ye.get(R).programs;W!==void 0&&(W.forEach(function(ae){de.releaseProgram(ae)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ae,se,K,Te){W===null&&(W=Ft);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Ne=cs(R,W,ae,se,K);Ge.setMaterial(se,Ce);let Be=ae.index,Je=1;if(se.wireframe===!0){if(Be=te.getWireframeAttribute(ae),Be===void 0)return;Je=2}const je=ae.drawRange,ke=ae.attributes.position;let ut=je.start*Je,Dt=(je.start+je.count)*Je;Te!==null&&(ut=Math.max(ut,Te.start*Je),Dt=Math.min(Dt,(Te.start+Te.count)*Je)),Be!==null?(ut=Math.max(ut,0),Dt=Math.min(Dt,Be.count)):ke!=null&&(ut=Math.max(ut,0),Dt=Math.min(Dt,ke.count));const qt=Dt-ut;if(qt<0||qt===1/0)return;nt.setup(K,se,Ne,ae,Be);let xt,St=We;if(Be!==null&&(xt=b.get(Be),St=qe,St.setIndex(xt)),K.isMesh)se.wireframe===!0?(Ge.setLineWidth(se.wireframeLinewidth*vt()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(K.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),Ge.setLineWidth(Ke*vt()),K.isLineSegments?St.setMode(H.LINES):K.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else K.isPoints?St.setMode(H.POINTS):K.isSprite&&St.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))St.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ke=K._multiDrawStarts,Jt=K._multiDrawCounts,Rt=K._multiDrawCount,Cn=Be?b.get(Be).bytesPerElement:1,Ta=Ye.get(se).currentProgram.getUniforms();for(let Yt=0;Yt<Rt;Yt++)Ta.setValue(H,"_gl_DrawID",Yt),St.render(Ke[Yt]/Cn,Jt[Yt])}else if(K.isInstancedMesh)St.renderInstances(ut,qt,K.count);else if(ae.isInstancedBufferGeometry){const Ke=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Jt=Math.min(ae.instanceCount,Ke);St.renderInstances(ut,qt,Jt)}else St.render(ut,qt)};function wt(R,W,ae){R.transparent===!0&&R.side===Oi&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,Ma(R,W,ae),R.side=va,R.needsUpdate=!0,Ma(R,W,ae),R.side=Oi):Ma(R,W,ae)}this.compile=function(R,W,ae=null){ae===null&&(ae=R),y=De.get(ae),y.init(W),L.push(y),ae.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==ae&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const se=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const Ne=Te[Ce];wt(Ne,ae,K),se.add(Ne)}else wt(Te,ae,K),se.add(Te)}),y=L.pop(),se},this.compileAsync=function(R,W,ae=null){const se=this.compile(R,W,ae);return new Promise(K=>{function Te(){if(se.forEach(function(Ce){Ye.get(Ce).currentProgram.isReady()&&se.delete(Ce)}),se.size===0){K(R);return}setTimeout(Te,10)}At.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Kn=null;function mn(R){Kn&&Kn(R)}function cn(){kn.stop()}function En(){kn.start()}const kn=new ly;kn.setAnimationLoop(mn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(R){Kn=R,Ee.setAnimationLoop(R),R===null?kn.stop():kn.start()},Ee.addEventListener("sessionstart",cn),Ee.addEventListener("sessionend",En),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(W),W=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,W,q),y=De.get(R,L.length),y.init(W),L.push(y),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(we),Se=this.localClippingEnabled,pe=He.init(this.clippingPlanes,Se),S=Oe.get(R,N.length),S.init(),N.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&os(Te,W,-1/0,C.sortObjects)}os(R,W,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(Me,U),kt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,kt&&ye.addToRenderList(S,R),this.info.render.frame++,pe===!0&&He.beginShadows();const ae=y.state.shadowsArray;Ve.render(ae,R,W),pe===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,K=S.transmissive;if(y.setupLights(),W.isArrayCamera){const Te=W.cameras;if(K.length>0)for(let Ce=0,Ne=Te.length;Ce<Ne;Ce++){const Be=Te[Ce];vl(se,K,R,Be)}kt&&ye.render(R);for(let Ce=0,Ne=Te.length;Ce<Ne;Ce++){const Be=Te[Ce];_l(S,R,Be,Be.viewport)}}else K.length>0&&vl(se,K,R,W),kt&&ye.render(R),_l(S,R,W);q!==null&&F===0&&(it.updateMultisampleRenderTarget(q),it.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(C,R,W),nt.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(y=L[L.length-1],pe===!0&&He.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function os(R,W,ae,se){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){se&&Ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);const Ce=fe.update(R),Ne=R.material;Ne.visible&&S.push(R,Ce,Ne,ae,Ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ce=fe.update(R),Ne=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ze.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ze.copy(Ce.boundingSphere.center)),Ze.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){const Be=Ce.groups;for(let Je=0,je=Be.length;Je<je;Je++){const ke=Be[Je],ut=Ne[ke.materialIndex];ut&&ut.visible&&S.push(R,Ce,ut,ae,Ze.z,ke)}}else Ne.visible&&S.push(R,Ce,Ne,ae,Ze.z,null)}}const Te=R.children;for(let Ce=0,Ne=Te.length;Ce<Ne;Ce++)os(Te[Ce],W,ae,se)}function _l(R,W,ae,se){const K=R.opaque,Te=R.transmissive,Ce=R.transparent;y.setupLightsView(ae),pe===!0&&He.setGlobalState(C.clippingPlanes,ae),se&&Ge.viewport(k.copy(se)),K.length>0&&ls(K,W,ae),Te.length>0&&ls(Te,W,ae),Ce.length>0&&ls(Ce,W,ae),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function vl(R,W,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[se.id]===void 0&&(y.state.transmissionRenderTarget[se.id]=new zs(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?dl:Ii,minFilter:pa,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=y.state.transmissionRenderTarget[se.id],Ce=se.viewport||k;Te.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const Ne=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(ue),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),kt&&ye.render(ae);const Be=C.toneMapping;C.toneMapping=ss;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),y.setupLightsView(se),pe===!0&&He.setGlobalState(C.clippingPlanes,se),ls(R,ae,se),it.updateMultisampleRenderTarget(Te),it.updateRenderTargetMipmap(Te),At.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ke=0,ut=W.length;ke<ut;ke++){const Dt=W[ke],qt=Dt.object,xt=Dt.geometry,St=Dt.material,Ke=Dt.group;if(St.side===Oi&&qt.layers.test(se.layers)){const Jt=St.side;St.side=zn,St.needsUpdate=!0,Sa(qt,ae,se,xt,St,Ke),St.side=Jt,St.needsUpdate=!0,je=!0}}je===!0&&(it.updateMultisampleRenderTarget(Te),it.updateRenderTargetMipmap(Te))}C.setRenderTarget(Ne),C.setClearColor(ue,_e),Je!==void 0&&(se.viewport=Je),C.toneMapping=Be}function ls(R,W,ae){const se=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Te=R.length;K<Te;K++){const Ce=R[K],Ne=Ce.object,Be=Ce.geometry,Je=Ce.group;let je=Ce.material;je.allowOverride===!0&&se!==null&&(je=se),Ne.layers.test(ae.layers)&&Sa(Ne,W,ae,Be,je,Je)}}function Sa(R,W,ae,se,K,Te){R.onBeforeRender(C,W,ae,se,K,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,W,ae,se,R,Te),K.transparent===!0&&K.side===Oi&&K.forceSinglePass===!1?(K.side=zn,K.needsUpdate=!0,C.renderBufferDirect(ae,W,se,K,R,Te),K.side=va,K.needsUpdate=!0,C.renderBufferDirect(ae,W,se,K,R,Te),K.side=Oi):C.renderBufferDirect(ae,W,se,K,R,Te),R.onAfterRender(C,W,ae,se,K,Te)}function Ma(R,W,ae){W.isScene!==!0&&(W=Ft);const se=Ye.get(R),K=y.state.lights,Te=y.state.shadowsArray,Ce=K.state.version,Ne=de.getParameters(R,K.state,Te,W,ae),Be=de.getProgramCacheKey(Ne);let Je=se.programs;se.environment=R.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(R.isMeshStandardMaterial?O:tn).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",Fe),Je=new Map,se.programs=Je);let je=Je.get(Be);if(je!==void 0){if(se.currentProgram===je&&se.lightsStateVersion===Ce)return Vi(R,Ne),je}else Ne.uniforms=de.getUniforms(R),R.onBeforeCompile(Ne,C),je=de.acquireProgram(Ne,Be),Je.set(Be,je),se.uniforms=Ne.uniforms;const ke=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=He.uniform),Vi(R,Ne),se.needsLights=sn(R),se.lightsStateVersion=Ce,se.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=je,se.uniformsList=null,je}function Gi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=ru.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Vi(R,W){const ae=Ye.get(R);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.batchingColor=W.batchingColor,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function cs(R,W,ae,se,K){W.isScene!==!0&&(W=Ft),it.resetTextureUnits();const Te=W.fog,Ce=se.isMeshStandardMaterial?W.environment:null,Ne=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Vn,Be=(se.isMeshStandardMaterial?O:tn).get(se.envMap||Ce),Je=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,je=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ke=!!ae.morphAttributes.position,ut=!!ae.morphAttributes.normal,Dt=!!ae.morphAttributes.color;let qt=ss;se.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qt=C.toneMapping);const xt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,St=xt!==void 0?xt.length:0,Ke=Ye.get(se),Jt=y.state.lights;if(pe===!0&&(Se===!0||R!==w)){const gn=R===w&&se.id===D;He.setState(se,R,gn)}let Rt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Jt.state.version||Ke.outputColorSpace!==Ne||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==Be||se.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==He.numPlanes||Ke.numIntersection!==He.numIntersection)||Ke.vertexAlphas!==Je||Ke.vertexTangents!==je||Ke.morphTargets!==ke||Ke.morphNormals!==ut||Ke.morphColors!==Dt||Ke.toneMapping!==qt||Ke.morphTargetsCount!==St)&&(Rt=!0):(Rt=!0,Ke.__version=se.version);let Cn=Ke.currentProgram;Rt===!0&&(Cn=Ma(se,W,K));let Ta=!1,Yt=!1,Xi=!1;const Xt=Cn.getUniforms(),Dn=Ke.uniforms;if(Ge.useProgram(Cn.program)&&(Ta=!0,Yt=!0,Xi=!0),se.id!==D&&(D=se.id,Yt=!0),Ta||w!==R){Ge.buffers.depth.getReversed()?(Ae.copy(R.projectionMatrix),AM(Ae),RM(Ae),Xt.setValue(H,"projectionMatrix",Ae)):Xt.setValue(H,"projectionMatrix",R.projectionMatrix),Xt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Tn=Xt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,lt.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&Xt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Xt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Yt=!0,Xi=!0)}if(K.isSkinnedMesh){Xt.setOptional(H,K,"bindMatrix"),Xt.setOptional(H,K,"bindMatrixInverse");const gn=K.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Xt.setValue(H,"boneTexture",gn.boneTexture,it))}K.isBatchedMesh&&(Xt.setOptional(H,K,"batchingTexture"),Xt.setValue(H,"batchingTexture",K._matricesTexture,it),Xt.setOptional(H,K,"batchingIdTexture"),Xt.setValue(H,"batchingIdTexture",K._indirectTexture,it),Xt.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Xt.setValue(H,"batchingColorTexture",K._colorsTexture,it));const un=ae.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Pe.update(K,ae,Cn),(Yt||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Xt.setValue(H,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Dn.envMap.value=Be,Dn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&(Dn.envMapIntensity.value=W.environmentIntensity),Yt&&(Xt.setValue(H,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&Ea(Dn,Xi),Te&&se.fog===!0&&oe.refreshFogUniforms(Dn,Te),oe.refreshMaterialUniforms(Dn,se,j,ee,y.state.transmissionRenderTarget[R.id]),ru.upload(H,Gi(Ke),Dn,it)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ru.upload(H,Gi(Ke),Dn,it),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Xt.setValue(H,"center",K.center),Xt.setValue(H,"modelViewMatrix",K.modelViewMatrix),Xt.setValue(H,"normalMatrix",K.normalMatrix),Xt.setValue(H,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gn=se.uniformsGroups;for(let Tn=0,Ri=gn.length;Tn<Ri;Tn++){const Wi=gn[Tn];V.update(Wi,Cn),V.bind(Wi,Cn)}}return Cn}function Ea(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function sn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,W,ae){const se=Ye.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=W,Ye.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const ae=Ye.get(R);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0};const yl=H.createFramebuffer();this.setRenderTarget=function(R,W=0,ae=0){q=R,z=W,F=ae;let se=!0,K=null,Te=!1,Ce=!1;if(R){const Be=Ye.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Be.__webglFramebuffer===void 0)it.setupRenderTarget(R);else if(Be.__hasExternalTextures)it.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ke=R.depthTexture;if(Be.__boundDepthTexture!==ke){if(ke!==null&&Ye.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(R)}}const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ce=!0);const je=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[W])?K=je[W][ae]:K=je[W],Te=!0):R.samples>0&&it.useMultisampledRTT(R)===!1?K=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?K=je[ae]:K=je,k.copy(R.viewport),le.copy(R.scissor),re=R.scissorTest}else k.copy($).multiplyScalar(j).floor(),le.copy(ve).multiplyScalar(j).floor(),re=xe;if(ae!==0&&(K=yl),Ge.bindFramebuffer(H.FRAMEBUFFER,K)&&se&&Ge.drawBuffers(R,K),Ge.viewport(k),Ge.scissor(le),Ge.setScissorTest(re),Te){const Be=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ae)}else if(Ce){const Be=Ye.get(R.texture),Je=W;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.__webglTexture,ae,Je)}else if(R!==null&&ae!==0){const Be=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(R,W,ae,se,K,Te,Ce,Ne=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be){Ge.bindFramebuffer(H.FRAMEBUFFER,Be);try{const Je=R.textures[Ne],je=Je.format,ke=Je.type;if(!dt.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-se&&ae>=0&&ae<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ne),H.readPixels(W,ae,se,K,Re.convert(je),Re.convert(ke),Te))}finally{const Je=q!==null?Ye.get(q).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,W,ae,se,K,Te,Ce,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be)if(W>=0&&W<=R.width-se&&ae>=0&&ae<=R.height-K){Ge.bindFramebuffer(H.FRAMEBUFFER,Be);const Je=R.textures[Ne],je=Je.format,ke=Je.type;if(!dt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ut),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ne),H.readPixels(W,ae,se,K,Re.convert(je),Re.convert(ke),0);const Dt=q!==null?Ye.get(q).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,Dt);const qt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await bM(H,qt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ut),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(ut),H.deleteSync(qt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ae=0){const se=Math.pow(2,-ae),K=Math.floor(R.image.width*se),Te=Math.floor(R.image.height*se),Ce=W!==null?W.x:0,Ne=W!==null?W.y:0;it.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,Ce,Ne,K,Te),Ge.unbindTexture()};const xl=H.createFramebuffer(),ki=H.createFramebuffer();this.copyTextureToTexture=function(R,W,ae=null,se=null,K=0,Te=null){Te===null&&(K!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=K,K=0):Te=0);let Ce,Ne,Be,Je,je,ke,ut,Dt,qt;const xt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)Ce=ae.max.x-ae.min.x,Ne=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,je=ae.min.y,ke=ae.isBox3?ae.min.z:0;else{const un=Math.pow(2,-K);Ce=Math.floor(xt.width*un),Ne=Math.floor(xt.height*un),R.isDataArrayTexture?Be=xt.depth:R.isData3DTexture?Be=Math.floor(xt.depth*un):Be=1,Je=0,je=0,ke=0}se!==null?(ut=se.x,Dt=se.y,qt=se.z):(ut=0,Dt=0,qt=0);const St=Re.convert(W.format),Ke=Re.convert(W.type);let Jt;W.isData3DTexture?(it.setTexture3D(W,0),Jt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(it.setTexture2DArray(W,0),Jt=H.TEXTURE_2D_ARRAY):(it.setTexture2D(W,0),Jt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Rt=H.getParameter(H.UNPACK_ROW_LENGTH),Cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ta=H.getParameter(H.UNPACK_SKIP_PIXELS),Yt=H.getParameter(H.UNPACK_SKIP_ROWS),Xi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,xt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),H.pixelStorei(H.UNPACK_SKIP_ROWS,je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ke);const Xt=R.isDataArrayTexture||R.isData3DTexture,Dn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const un=Ye.get(R),gn=Ye.get(W),Tn=Ye.get(un.__renderTarget),Ri=Ye.get(gn.__renderTarget);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Wi=0;Wi<Be;Wi++)Xt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,K,ke+Wi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(W).__webglTexture,Te,qt+Wi)),H.blitFramebuffer(Je,je,Ce,Ne,ut,Dt,Ce,Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ye.has(R)){const un=Ye.get(R),gn=Ye.get(W);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,xl),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,ki);for(let Tn=0;Tn<Be;Tn++)Xt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,K,ke+Tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,K),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,Te,qt+Tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,Te),K!==0?H.blitFramebuffer(Je,je,Ce,Ne,ut,Dt,Ce,Ne,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(Jt,Te,ut,Dt,qt+Tn,Je,je,Ce,Ne):H.copyTexSubImage2D(Jt,Te,ut,Dt,Je,je,Ce,Ne);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Jt,Te,ut,Dt,qt,Ce,Ne,Be,St,Ke,xt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Jt,Te,ut,Dt,qt,Ce,Ne,Be,St,xt.data):H.texSubImage3D(Jt,Te,ut,Dt,qt,Ce,Ne,Be,St,Ke,xt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,ut,Dt,Ce,Ne,St,Ke,xt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,ut,Dt,xt.width,xt.height,St,xt.data):H.texSubImage2D(H.TEXTURE_2D,Te,ut,Dt,Ce,Ne,St,Ke,xt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Rt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ta),H.pixelStorei(H.UNPACK_SKIP_ROWS,Yt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xi),Te===0&&W.generateMipmaps&&H.generateMipmap(Jt),Ge.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ae=null,se=null,K=0){return Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,ae,se,K)},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&it.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?it.setTextureCube(R,0):R.isData3DTexture?it.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?it.setTexture2DArray(R,0):it.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){z=0,F=0,q=null,Ge.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}function _0(o,e){if(e===ZS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===jd||e===k0){let n=o.getIndex();if(n===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let d=0;d<h.count;d++)u.push(d);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===jd)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class AR extends Kr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new LR(n)}),this.register(function(n){return new UR(n)}),this.register(function(n){return new GR(n)}),this.register(function(n){return new VR(n)}),this.register(function(n){return new kR(n)}),this.register(function(n){return new OR(n)}),this.register(function(n){return new PR(n)}),this.register(function(n){return new IR(n)}),this.register(function(n){return new BR(n)}),this.register(function(n){return new DR(n)}),this.register(function(n){return new FR(n)}),this.register(function(n){return new NR(n)}),this.register(function(n){return new HR(n)}),this.register(function(n){return new zR(n)}),this.register(function(n){return new wR(n)}),this.register(function(n){return new XR(n)}),this.register(function(n){return new WR(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const p=sl.extractUrlBase(e);u=sl.resolveURL(p,this.path)}else u=sl.extractUrlBase(e);this.manager.itemStart(e);const h=function(p){r?r(p):console.error(p),c.manager.itemError(e),c.manager.itemEnd(e)},d=new oy(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(p){try{c.parse(p,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},h={},d=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===dy){try{u[_t.KHR_BINARY_GLTF]=new qR(e)}catch(_){r&&r(_);return}c=JSON.parse(u[_t.KHR_BINARY_GLTF].content)}else c=JSON.parse(d.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new sw(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](p);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case _t.KHR_MATERIALS_UNLIT:u[_]=new CR;break;case _t.KHR_DRACO_MESH_COMPRESSION:u[_]=new YR(c,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:u[_]=new jR;break;case _t.KHR_MESH_QUANTIZATION:u[_]=new KR;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}p.setExtensions(u),p.setPlugins(h),p.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function RR(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wR{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,d=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let p;const g=new at(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],Vn);const _=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new Jd(g),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new CE(g),p.distance=_;break;case"spot":p=new RE(g),p.distance=_,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),da(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=n.createUniqueName(d.name||"light_"+e),r=Promise.resolve(p),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(d){return a._getNodeRef(n.cache,h,d)})}}class CR{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Is}extendParams(e,n,a){const r=[];e.color=new at(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Vn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,wn))}return Promise.all(r)}}class DR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class LR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Mt(h,h)}return Promise.all(c)}}class UR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class NR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class OR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new at(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;n.sheenColor.setRGB(h[0],h[1],h[2],Vn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,wn)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class PR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class IR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return n.attenuationColor=new at().setRGB(h[0],h[1],h[2],Vn),Promise.all(c)}}class BR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class FR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return n.specularColor=new at().setRGB(h[0],h[1],h[2],Vn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,wn)),Promise.all(c)}}class zR{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class HR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class GR{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class VR{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let d=a.textureLoader;if(h.uri){const p=a.options.manager.getHandler(h.uri);p!==null&&(d=p)}return a.loadTextureImage(e,u.source,d)}}class kR{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let d=a.textureLoader;if(h.uri){const p=a.options.manager.getHandler(h.uri);p!==null&&(d=p)}return a.loadTextureImage(e,u.source,d)}}class XR{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const d=r.byteOffset||0,p=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,d,p);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,r.mode,r.filter),x})})}else return null}}class WR{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const p of r.primitives)if(p.mode!==pi.TRIANGLES&&p.mode!==pi.TRIANGLE_STRIP&&p.mode!==pi.TRIANGLE_FAN&&p.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],d={};for(const p in u)h.push(this.parser.getDependency("accessor",u[p]).then(g=>(d[p]=g,d[p])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(p=>{const g=p.pop(),_=g.isGroup?g.children:[g],v=p[0].count,x=[];for(const E of _){const T=new st,S=new Y,y=new rs,N=new Y(1,1,1),L=new aE(E.geometry,E.material,v);for(let C=0;C<v;C++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&y.fromBufferAttribute(d.ROTATION,C),d.SCALE&&N.fromBufferAttribute(d.SCALE,C),L.setMatrixAt(C,T.compose(S,y,N));for(const C in d)if(C==="_COLOR_0"){const B=d[C];L.instanceColor=new Zd(B.array,B.itemSize,B.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&E.geometry.setAttribute(C,d[C]);Qt.prototype.copy.call(L,E),this.parser.assignFinalMaterial(L),x.push(L)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const dy="glTF",Jo=12,v0={JSON:1313821514,BIN:5130562};class qR{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,Jo),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==dy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Jo,c=new DataView(e,Jo);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const d=c.getUint32(u,!0);if(u+=4,d===v0.JSON){const p=new Uint8Array(e,Jo+u,h);this.content=a.decode(p)}else if(d===v0.BIN){const p=Jo+u;this.body=e.slice(p,p+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YR{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},d={},p={};for(const g in u){const _=tp[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=tp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],x=Ir[v.componentType];p[_]=x.name,d[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(x){for(const E in x.attributes){const T=x.attributes[E],S=d[E];S!==void 0&&(T.normalized=S)}_(x)},h,p,Vn,v)})})}}class jR{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class KR{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class py extends gl{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=h*2,p=h*3,g=r-n,_=(a-n)/g,v=_*_,x=v*_,E=e*p,T=E-p,S=-2*x+3*v,y=x-v,N=1-S,L=y-v+_;for(let C=0;C!==h;C++){const B=u[T+C+h],z=u[T+C+d]*g,F=u[E+C+h],q=u[E+C]*g;c[C]=N*B+L*z+S*F+y*q}return c}}const ZR=new rs;class QR extends py{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return ZR.fromArray(c).normalize().toArray(c),c}}const pi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},y0={9728:Hn,9729:si,9984:P0,9985:eu,9986:tl,9987:pa},x0={33071:ns,33648:ou,10497:Hr},Jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$a={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JR={CUBICSPLINE:void 0,LINEAR:fl,STEP:ul},$h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $R(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new vp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:va})),o.DefaultMaterial}function Us(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function da(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ew(o,e,n){let a=!1,r=!1,c=!1;for(let p=0,g=e.length;p<g;p++){const _=e[p];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],h=[],d=[];for(let p=0,g=e.length;p<g;p++){const _=e[p];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):o.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(p){const g=p[0],_=p[1],v=p[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function tw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nw(o){let e;const n=o.extensions&&o.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+ed(n.attributes):e=o.indices+":"+ed(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+ed(o.targets[a]);return e}function ed(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function np(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const aw=new st;class sw{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new RR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const d=h.match(/Version\/(\d+)/);r=a&&d?parseInt(d[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new bE(this.options.manager):this.textureLoader=new LE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Us(c,h,r),da(h,r),Promise.all(a._invokeAll(function(d){return d.afterRoot&&d.afterRoot(h)})).then(function(){for(const d of h.scenes)d.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let h=0,d=u.length;h<d;h++)e[u[h]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,h)=>{const d=this.associations.get(u);d!=null&&this.associations.set(h,d);for(const[p,g]of u.children.entries())c(g,h.children[p])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(sl.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=Jh[r.type],h=Ir[r.componentType],d=r.normalized===!0,p=new h(r.count*u);return Promise.resolve(new Gn(p,u,d))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],d=Jh[r.type],p=Ir[r.componentType],g=p.BYTES_PER_ELEMENT,_=g*d,v=r.byteOffset||0,x=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let T,S;if(x&&x!==_){const y=Math.floor(v/x),N="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+y+":"+r.count;let L=n.cache.get(N);L||(T=new p(h,y*x,r.count*x/g),L=new $M(T,x/g),n.cache.add(N,L)),S=new pp(L,d,v%x/g,E)}else h===null?T=new p(r.count*d):T=new p(h,v,r.count*d),S=new Gn(T,d,E);if(r.sparse!==void 0){const y=Jh.SCALAR,N=Ir[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,C=r.sparse.values.byteOffset||0,B=new N(u[1],L,r.sparse.count*y),z=new p(u[2],C,r.sparse.count*d);h!==null&&(S=new Gn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let F=0,q=B.length;F<q;F++){const D=B[F];if(S.setX(D,z[F*d]),d>=2&&S.setY(D,z[F*d+1]),d>=3&&S.setZ(D,z[F*d+2]),d>=4&&S.setW(D,z[F*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const d=a.manager.getHandler(u.uri);d!==null&&(h=d)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],h=c.images[n],d=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=y0[v.magFilter]||si,g.minFilter=y0[v.minFilter]||pa,g.wrapS=x0[v.wrapS]||Hr,g.wrapT=x0[v.wrapT]||Hr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Hn&&g.minFilter!==si,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=r.images[e],h=self.URL||self.webkitURL;let d=u.uri||"",p=!1;if(u.bufferView!==void 0)d=a.getDependency("bufferView",u.bufferView).then(function(_){p=!0;const v=new Blob([_],{type:u.mimeType});return d=h.createObjectURL(v),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(_){return new Promise(function(v,x){let E=v;n.isImageBitmapLoader===!0&&(E=function(T){const S=new Sn(T);S.needsUpdate=!0,v(S)}),n.load(sl.resolveURL(_,c.path),E,void 0,x)})}).then(function(_){return p===!0&&h.revokeObjectURL(d),da(_,u),_.userData.mimeType=u.mimeType||iw(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[_t.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const d=c.associations.get(u);u=c.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,d)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let d=this.cache.get(h);d||(d=new iy,Pi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,d.sizeAttenuation=!1,this.cache.add(h,d)),a=d}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let d=this.cache.get(h);d||(d=new ny,Pi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,this.cache.add(h,d)),a=d}if(r||c||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let d=this.cache.get(h);d||(d=a.clone(),c&&(d.vertexColors=!0),u&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(h,d),this.associations.set(d,this.associations.get(a))),a=d}e.material=a}getMaterialType(){return vp}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const h={},d=c.extensions||{},p=[];if(d[_t.KHR_MATERIALS_UNLIT]){const _=r[_t.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),p.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new at(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Vn),h.opacity=v[3]}_.baseColorTexture!==void 0&&p.push(n.assignTexture(h,"map",_.baseColorTexture,wn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(p.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),p.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),p.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=Oi);const g=c.alphaMode||$h.OPAQUE;if(g===$h.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===$h.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Is&&(p.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new Mt(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==Is&&(p.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Is){const _=c.emissiveFactor;h.emissive=new at().setRGB(_[0],_[1],_[2],Vn)}return c.emissiveTexture!==void 0&&u!==Is&&p.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,wn)),Promise.all(p).then(function(){const _=new u(h);return c.name&&(_.name=c.name),da(_,c),n.associations.set(_,{materials:e}),c.extensions&&Us(r,_,c),_})}createUniqueName(e){const n=Bt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(h){return a[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(d){return S0(d,h,n)})}const u=[];for(let h=0,d=e.length;h<d;h++){const p=e[h],g=nw(p),_=r[g];if(_)u.push(_.promise);else{let v;p.extensions&&p.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?v=c(p):v=S0(new zi,p,n),r[g]={primitive:p,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let d=0,p=u.length;d<p;d++){const g=u[d].material===void 0?$R(this.cache):this.getDependency("material",u[d].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(d){const p=d.slice(0,d.length-1),g=d[d.length-1],_=[];for(let x=0,E=g.length;x<E;x++){const T=g[x],S=u[x];let y;const N=p[x];if(S.mode===pi.TRIANGLES||S.mode===pi.TRIANGLE_STRIP||S.mode===pi.TRIANGLE_FAN||S.mode===void 0)y=c.isSkinnedMesh===!0?new tE(T,N):new jn(T,N),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===pi.TRIANGLE_STRIP?y.geometry=_0(y.geometry,k0):S.mode===pi.TRIANGLE_FAN&&(y.geometry=_0(y.geometry,jd));else if(S.mode===pi.LINES)y=new oE(T,N);else if(S.mode===pi.LINE_STRIP)y=new _p(T,N);else if(S.mode===pi.LINE_LOOP)y=new lE(T,N);else if(S.mode===pi.POINTS)y=new cE(T,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&tw(y,c),y.name=n.createUniqueName(c.name||"mesh_"+e),da(y,c),S.extensions&&Us(r,y,S),n.assignFinalMaterial(y),_.push(y)}for(let x=0,E=_.length;x<E;x++)n.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return c.extensions&&Us(r,_[0],c),_[0];const v=new Bs;c.extensions&&Us(r,v,c),n.associations.set(v,{meshes:e});for(let x=0,E=_.length;x<E;x++)v.add(_[x]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Fn(EM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new Sp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),da(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,h=[],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p];if(_){h.push(_);const v=new st;c!==null&&v.fromArray(c.array,p*16),d.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[p])}return new mp(h,d)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],h=[],d=[],p=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const x=r.channels[_],E=r.samplers[x.sampler],T=x.target,S=T.node,y=r.parameters!==void 0?r.parameters[E.input]:E.input,N=r.parameters!==void 0?r.parameters[E.output]:E.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),h.push(this.getDependency("accessor",y)),d.push(this.getDependency("accessor",N)),p.push(E),g.push(T))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d),Promise.all(p),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],E=_[2],T=_[3],S=_[4],y=[];for(let N=0,L=v.length;N<L;N++){const C=v[N],B=x[N],z=E[N],F=T[N],q=S[N];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const D=a._createAnimationTracks(C,B,z,F,q);if(D)for(let w=0;w<D.length;w++)y.push(D[w])}return new vE(c,void 0,y)})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let d=0,p=r.weights.length;d<p;d++)h.morphTargetInfluences[d]=r.weights[d]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=r.children||[];for(let p=0,g=h.length;p<g;p++)u.push(a.getDependency("node",h[p]));const d=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),d]).then(function(p){const g=p[0],_=p[1],v=p[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,aw)});for(let x=0,E=_.length;x<E;x++)g.add(_[x]);return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",h=[],d=r._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(e)});return d&&h.push(d),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(p){return r._getNodeRef(r.cameraCache,c.camera,p)})),r._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(e)}).forEach(function(p){h.push(p)}),this.nodeCache[e]=Promise.all(h).then(function(p){let g;if(c.isBone===!0?g=new ey:p.length>1?g=new Bs:p.length===1?g=p[0]:g=new Qt,g!==p[0])for(let _=0,v=p.length;_<v;_++)g.add(p[_]);if(c.name&&(g.userData.name=c.name,g.name=u),da(g,c),c.extensions&&Us(a,g,c),c.matrix!==void 0){const _=new st;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(c.mesh!==void 0&&r.meshCache.refs[c.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Bs;a.name&&(c.name=r.createUniqueName(a.name)),da(c,a),a.extensions&&Us(n,c,a);const u=a.nodes||[],h=[];for(let d=0,p=u.length;d<p;d++)h.push(r.getDependency("node",u[d]));return Promise.all(h).then(function(d){for(let g=0,_=d.length;g<_;g++)c.add(d[g]);const p=g=>{const _=new Map;for(const[v,x]of r.associations)(v instanceof Pi||v instanceof Sn)&&_.set(v,x);return g.traverse(v=>{const x=r.associations.get(v);x!=null&&_.set(v,x)}),_};return r.associations=p(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],h=e.name?e.name:e.uuid,d=[];$a[c.path]===$a.weights?e.traverse(function(v){v.morphTargetInfluences&&d.push(v.name?v.name:v.uuid)}):d.push(h);let p;switch($a[c.path]){case $a.weights:p=kr;break;case $a.rotation:p=Xr;break;case $a.translation:case $a.scale:p=Wr;break;default:switch(a.itemSize){case 1:p=kr;break;case 2:case 3:default:p=Wr;break}break}const g=r.interpolation!==void 0?JR[r.interpolation]:fl,_=this._getArrayFromAccessor(a);for(let v=0,x=d.length;v<x;v++){const E=new p(d[v]+"."+$a[c.path],n.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=np(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof Xr?QR:py;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rw(o,e,n){const a=e.attributes,r=new xa;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(r.set(new Y(d[0],d[1],d[2]),new Y(p[0],p[1],p[2])),h.normalized){const g=np(Ir[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new Y,d=new Y;for(let p=0,g=c.length;p<g;p++){const _=c[p];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],x=v.min,E=v.max;if(x!==void 0&&E!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(E[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(E[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(E[2]))),v.normalized){const T=np(Ir[v.componentType]);d.multiplyScalar(T)}h.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new Fi;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function S0(o,e,n){const a=e.attributes,r=[];function c(u,h){return n.getDependency("accessor",u).then(function(d){o.setAttribute(h,d)})}for(const u in a){const h=tp[u]||u.toLowerCase();h in o.attributes||r.push(c(a[u],h))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(h){o.setIndex(h)});r.push(u)}return bt.workingColorSpace!==Vn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),da(o,e),rw(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?ew(o,e.targets,n):o})}const ow="/assets/models/schizo_logo2.glb",lw=()=>{const o=new VE,e=new Mt,n=new Y(-.3,0,0),a=new JM,r=document.querySelector(".Q_3DLogo");if(!r)return;let c,u;function h(){const y=getComputedStyle(r);u=parseInt(y.getPropertyValue("--render-height")),c=window.innerWidth,p.setSize(c,u),d.aspect=c/u,d.updateProjectionMatrix()}const d=new Fn(5,1,.1,100);d.position.set(0,0,18);const p=new bR({antialias:!0,alpha:!0});r.appendChild(p.domElement);let g;h(),window.addEventListener("resize",h);const _=new Jd(16711680,1);_.position.set(2,2,5),a.add(_);const v=new Jd(16711680,2);v.position.set(-2,-2,3),a.add(v);const x=y=>{const L=y.geometry,C=new ya({vertexShader:`
      void main() {
        vec3 newPosition = position + normal * ${.0015};
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1.0);
      }`,fragmentShader:` 
      void main() {
        gl_FragColor = vec4(255.0, 242.0, 0.0, 1.0); // Желтый цвет
      }`,side:zn}),B=new jn(L,C);B.scale.copy(y.scale),B.position.copy(y.position),B.rotation.copy(y.rotation),y.parent.add(B)};new AR().load(ow,y=>{g=y.scene,g.scale.set(.5,.5,.5),g.position.set(-.3,0,0),a.add(g),g.lookAt(n),g.traverse(N=>{N.isMesh&&x(N)})}),document.addEventListener("mousemove",T);function T(y){const N=p.domElement.getBoundingClientRect();e.x=(y.clientX-N.left)/c*2-1,e.y=-((y.clientY-N.top)/u)*2+1,e.x*=.05,e.y*=.1,o.setFromCamera(e,d);const L=new es(new Y(0,0,2),-2);o.ray.intersectPlane(L,n),n.x-=.3}function S(){requestAnimationFrame(S),g&&g.lookAt(n),p.render(a,d)}S()},cw=()=>{const o=document.querySelector(".A_GoUp");if(!o){console.warn("Element .A_GoUp not found");return}window.addEventListener("scroll",()=>{const e=document.documentElement.scrollHeight/2;window.scrollY>e?(o.style.opacity="1",o.style.pointerEvents="auto"):(o.style.opacity="0",o.style.pointerEvents="none")}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})};var td={exports:{}},$o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function uw(){if(M0)return $o;M0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return $o.Fragment=e,$o.jsx=n,$o.jsxs=n,$o}var E0;function fw(){return E0||(E0=1,td.exports=uw()),td.exports}var Tt=fw(),nd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function hw(){if(T0)return rt;T0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(U,$,ve){this.props=U,this.context=$,this.refs=T,this.updater=ve||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(U,$,ve){this.props=U,this.context=$,this.refs=T,this.updater=ve||x}var L=N.prototype=new y;L.constructor=N,E(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function F(U,$,ve,xe,Q,pe){return ve=pe.ref,{$$typeof:o,type:U,key:$,ref:ve!==void 0?ve:null,props:pe}}function q(U,$){return F(U.type,$,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function w(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return $[ve]})}var k=/\/+/g;function le(U,$){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):$.toString(36)}function re(){}function ue(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(re,re):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function _e(U,$,ve,xe,Q){var pe=typeof U;(pe==="undefined"||pe==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(pe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case o:case e:Se=!0;break;case g:return Se=U._init,_e(Se(U._payload),$,ve,xe,Q)}}if(Se)return Q=Q(U),Se=xe===""?"."+le(U,0):xe,C(Q)?(ve="",Se!=null&&(ve=Se.replace(k,"$&/")+"/"),_e(Q,$,ve,"",function(lt){return lt})):Q!=null&&(D(Q)&&(Q=q(Q,ve+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(k,"$&/")+"/")+Se)),$.push(Q)),1;Se=0;var Ae=xe===""?".":xe+":";if(C(U))for(var we=0;we<U.length;we++)xe=U[we],pe=Ae+le(xe,we),Se+=_e(xe,$,ve,pe,Q);else if(we=v(U),typeof we=="function")for(U=we.call(U),we=0;!(xe=U.next()).done;)xe=xe.value,pe=Ae+le(xe,we++),Se+=_e(xe,$,ve,pe,Q);else if(pe==="object"){if(typeof U.then=="function")return _e(ue(U),$,ve,xe,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Se}function P(U,$,ve){if(U==null)return U;var xe=[],Q=0;return _e(U,xe,"","",function(pe){return $.call(ve,pe,Q++)}),xe}function ee(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var j=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Me(){}return rt.Children={map:P,forEach:function(U,$,ve){P(U,function(){$.apply(this,arguments)},ve)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},rt.Component=S,rt.Fragment=n,rt.Profiler=r,rt.PureComponent=N,rt.StrictMode=a,rt.Suspense=d,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,rt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},rt.cache=function(U){return function(){return U.apply(null,arguments)}},rt.cloneElement=function(U,$,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var xe=E({},U.props),Q=U.key,pe=void 0;if($!=null)for(Se in $.ref!==void 0&&(pe=void 0),$.key!==void 0&&(Q=""+$.key),$)!z.call($,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&$.ref===void 0||(xe[Se]=$[Se]);var Se=arguments.length-2;if(Se===1)xe.children=ve;else if(1<Se){for(var Ae=Array(Se),we=0;we<Se;we++)Ae[we]=arguments[we+2];xe.children=Ae}return F(U.type,Q,void 0,void 0,pe,xe)},rt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},rt.createElement=function(U,$,ve){var xe,Q={},pe=null;if($!=null)for(xe in $.key!==void 0&&(pe=""+$.key),$)z.call($,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Q[xe]=$[xe]);var Se=arguments.length-2;if(Se===1)Q.children=ve;else if(1<Se){for(var Ae=Array(Se),we=0;we<Se;we++)Ae[we]=arguments[we+2];Q.children=Ae}if(U&&U.defaultProps)for(xe in Se=U.defaultProps,Se)Q[xe]===void 0&&(Q[xe]=Se[xe]);return F(U,pe,void 0,void 0,null,Q)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(U){return{$$typeof:h,render:U}},rt.isValidElement=D,rt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ee}},rt.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},rt.startTransition=function(U){var $=B.T,ve={};B.T=ve;try{var xe=U(),Q=B.S;Q!==null&&Q(ve,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(Me,j)}catch(pe){j(pe)}finally{B.T=$}},rt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},rt.use=function(U){return B.H.use(U)},rt.useActionState=function(U,$,ve){return B.H.useActionState(U,$,ve)},rt.useCallback=function(U,$){return B.H.useCallback(U,$)},rt.useContext=function(U){return B.H.useContext(U)},rt.useDebugValue=function(){},rt.useDeferredValue=function(U,$){return B.H.useDeferredValue(U,$)},rt.useEffect=function(U,$,ve){var xe=B.H;if(typeof ve=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xe.useEffect(U,$)},rt.useId=function(){return B.H.useId()},rt.useImperativeHandle=function(U,$,ve){return B.H.useImperativeHandle(U,$,ve)},rt.useInsertionEffect=function(U,$){return B.H.useInsertionEffect(U,$)},rt.useLayoutEffect=function(U,$){return B.H.useLayoutEffect(U,$)},rt.useMemo=function(U,$){return B.H.useMemo(U,$)},rt.useOptimistic=function(U,$){return B.H.useOptimistic(U,$)},rt.useReducer=function(U,$,ve){return B.H.useReducer(U,$,ve)},rt.useRef=function(U){return B.H.useRef(U)},rt.useState=function(U){return B.H.useState(U)},rt.useSyncExternalStore=function(U,$,ve){return B.H.useSyncExternalStore(U,$,ve)},rt.useTransition=function(){return B.H.useTransition()},rt.version="19.1.0",rt}var b0;function bp(){return b0||(b0=1,nd.exports=hw()),nd.exports}bp();var id={exports:{}},el={},ad={exports:{}},sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function dw(){return A0||(A0=1,function(o){function e(P,ee){var j=P.length;P.push(ee);e:for(;0<j;){var Me=j-1>>>1,U=P[Me];if(0<r(U,ee))P[Me]=ee,P[j]=U,j=Me;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var ee=P[0],j=P.pop();if(j!==ee){P[0]=j;e:for(var Me=0,U=P.length,$=U>>>1;Me<$;){var ve=2*(Me+1)-1,xe=P[ve],Q=ve+1,pe=P[Q];if(0>r(xe,j))Q<U&&0>r(pe,xe)?(P[Me]=pe,P[Q]=j,Me=Q):(P[Me]=xe,P[ve]=j,Me=ve);else if(Q<U&&0>r(pe,j))P[Me]=pe,P[Q]=j,Me=Q;else break e}}return ee}function r(P,ee){var j=P.sortIndex-ee.sortIndex;return j!==0?j:P.id-ee.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,v=3,x=!1,E=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var ee=n(p);ee!==null;){if(ee.callback===null)a(p);else if(ee.startTime<=P)a(p),ee.sortIndex=ee.expirationTime,e(d,ee);else break;ee=n(p)}}function B(P){if(T=!1,C(P),!E)if(n(d)!==null)E=!0,z||(z=!0,le());else{var ee=n(p);ee!==null&&_e(B,ee.startTime-P)}}var z=!1,F=-1,q=5,D=-1;function w(){return S?!0:!(o.unstable_now()-D<q)}function k(){if(S=!1,z){var P=o.unstable_now();D=P;var ee=!0;try{e:{E=!1,T&&(T=!1,N(F),F=-1),x=!0;var j=v;try{t:{for(C(P),_=n(d);_!==null&&!(_.expirationTime>P&&w());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,v=_.priorityLevel;var U=Me(_.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){_.callback=U,C(P),ee=!0;break t}_===n(d)&&a(d),C(P)}else a(d);_=n(d)}if(_!==null)ee=!0;else{var $=n(p);$!==null&&_e(B,$.startTime-P),ee=!1}}break e}finally{_=null,v=j,x=!1}ee=void 0}}finally{ee?le():z=!1}}}var le;if(typeof L=="function")le=function(){L(k)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ue=re.port2;re.port1.onmessage=k,le=function(){ue.postMessage(null)}}else le=function(){y(k,0)};function _e(P,ee){F=y(function(){P(o.unstable_now())},ee)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(P){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var j=v;v=ee;try{return P()}finally{v=j}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(P,ee){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=v;v=P;try{return ee()}finally{v=j}},o.unstable_scheduleCallback=function(P,ee,j){var Me=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Me+j:Me):j=Me,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=j+U,P={id:g++,callback:ee,priorityLevel:P,startTime:j,expirationTime:U,sortIndex:-1},j>Me?(P.sortIndex=j,e(p,P),n(d)===null&&P===n(p)&&(T?(N(F),F=-1):T=!0,_e(B,j-Me))):(P.sortIndex=U,e(d,P),E||x||(E=!0,z||(z=!0,le()))),P},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(P){var ee=v;return function(){var j=v;v=ee;try{return P.apply(this,arguments)}finally{v=j}}}}(sd)),sd}var R0;function pw(){return R0||(R0=1,ad.exports=dw()),ad.exports}var rd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function mw(){if(w0)return On;w0=1;var o=bp();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,On.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(d,p,null,g)},On.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},On.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},On.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},On.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},On.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},On.requestFormReset=function(d){a.d.r(d)},On.unstable_batchedUpdates=function(d,p){return d(p)},On.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},On.useFormStatus=function(){return u.H.useHostTransitionStatus()},On.version="19.1.0",On}var C0;function gw(){if(C0)return rd.exports;C0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rd.exports=mw(),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function _w(){if(D0)return el;D0=1;var o=pw(),e=bp(),n=gw();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===l)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,A=f.child;A;){if(A===s){M=!0,s=f,l=m;break}if(A===l){M=!0,l=f,s=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===s){M=!0,s=m,l=f;break}if(A===l){M=!0,l=m,s=f;break}A=A.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case L:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case q:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}var _e=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Me=[],U=-1;function $(t){return{current:t}}function ve(t){0>U||(t.current=Me[U],Me[U]=null,U--)}function xe(t,i){U++,Me[U]=t.current,t.current=i}var Q=$(null),pe=$(null),Se=$(null),Ae=$(null);function we(t,i){switch(xe(Se,i),xe(pe,t),xe(Q,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?A_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=A_(i),t=R_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ve(Q),xe(Q,t)}function lt(){ve(Q),ve(pe),ve(Se)}function Ze(t){t.memoizedState!==null&&xe(Ae,t);var i=Q.current,s=R_(i,t.type);i!==s&&(xe(pe,t),xe(Q,s))}function Ft(t){pe.current===t&&(ve(Q),ve(pe)),Ae.current===t&&(ve(Ae),zo._currentValue=j)}var kt=Object.prototype.hasOwnProperty,vt=o.unstable_scheduleCallback,H=o.unstable_cancelCallback,Mn=o.unstable_shouldYield,At=o.unstable_requestPaint,dt=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,yt=o.unstable_ImmediatePriority,Ye=o.unstable_UserBlockingPriority,it=o.unstable_NormalPriority,tn=o.unstable_LowPriority,O=o.unstable_IdlePriority,b=o.log,te=o.unstable_setDisableYieldValue,fe=null,de=null;function oe(t){if(typeof b=="function"&&te(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(fe,t)}catch{}}var Oe=Math.clz32?Math.clz32:Ve,De=Math.log,He=Math.LN2;function Ve(t){return t>>>=0,t===0?32:31-(De(t)/He|0)|0}var ye=256,Pe=4194304;function We(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=We(l):(M&=A,M!==0?f=We(M):s||(s=A&~t,s!==0&&(f=We(s))))):(A=l&~m,A!==0?f=We(A):M!==0?f=We(M):s||(s=l&~t,s!==0&&(f=We(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Re(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function nt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=ye;return ye<<=1,(ye&4194048)===0&&(ye=256),t}function Le(){var t=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),t}function Ee(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ie(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function be(t,i,s,l,f,m){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,J=t.hiddenUpdates;for(s=M&~s;0<s;){var ce=31-Oe(s),me=1<<ce;A[ce]=0,I[ce]=-1;var ne=J[ce];if(ne!==null)for(J[ce]=null,ce=0;ce<ne.length;ce++){var ie=ne[ce];ie!==null&&(ie.lane&=-536870913)}s&=~me}l!==0&&ge(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(M&~i))}function ge(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Oe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Fe(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function tt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Nt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wt(){var t=ee.p;return t!==0?t:(t=window.event,t===void 0?32:q_(t.type))}function Kn(t,i){var s=ee.p;try{return ee.p=t,i()}finally{ee.p=s}}var mn=Math.random().toString(36).slice(2),cn="__reactFiber$"+mn,En="__reactProps$"+mn,kn="__reactContainer$"+mn,os="__reactEvents$"+mn,_l="__reactListeners$"+mn,vl="__reactHandles$"+mn,ls="__reactResources$"+mn,Sa="__reactMarker$"+mn;function Ma(t){delete t[cn],delete t[En],delete t[os],delete t[_l],delete t[vl]}function Gi(t){var i=t[cn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[kn]||s[cn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=L_(t);t!==null;){if(s=t[cn])return s;t=L_(t)}return i}t=s,s=t.parentNode}return null}function Vi(t){if(t=t[cn]||t[kn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function cs(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ea(t){var i=t[ls];return i||(i=t[ls]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function sn(t){t[Sa]=!0}var yl=new Set,xl={};function ki(t,i){R(t,i),R(t+"Capture",i)}function R(t,i){for(xl[t]=i,t=0;t<i.length;t++)yl.add(i[t])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},se={};function K(t){return kt.call(se,t)?!0:kt.call(ae,t)?!1:W.test(t)?se[t]=!0:(ae[t]=!0,!1)}function Te(t,i,s){if(K(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ce(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ne(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var Be,Je;function je(t){if(Be===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Be=i&&i[1]||"",Je=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+Je}var ke=!1;function ut(t,i){if(!t||ke)return"";ke=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(ie){var ne=ie}Reflect.construct(t,[],me)}else{try{me.call()}catch(ie){ne=ie}t.call(me.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var I=M.split(`
`),J=A.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<J.length&&!J[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===J.length)for(l=I.length-1,f=J.length-1;1<=l&&0<=f&&I[l]!==J[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==J[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==J[f]){var ce=`
`+I[l].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=l&&0<=f);break}}}finally{ke=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?je(s):""}function Dt(t){switch(t.tag){case 26:case 27:case 5:return je(t.type);case 16:return je("Lazy");case 13:return je("Suspense");case 19:return je("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return je("Activity");default:return""}}function qt(t){try{var i="";do i+=Dt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t){var i=St(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Jt(t){t._valueTracker||(t._valueTracker=Ke(t))}function Rt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=St(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Cn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ta=/[\n"\\]/g;function Yt(t){return t.replace(Ta,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xi(t,i,s,l,f,m,M,A){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+xt(i)):t.value!==""+xt(i)&&(t.value=""+xt(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Dn(t,M,xt(i)):s!=null?Dn(t,M,xt(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+xt(A):t.removeAttribute("name")}function Xt(t,i,s,l,f,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+xt(s):"",i=i!=null?""+xt(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Dn(t,i,s){i==="number"&&Cn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function un(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+xt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function gn(t,i,s){if(i!=null&&(i=""+xt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+xt(s):""}function Tn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(_e(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=xt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Ri(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Wi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ap(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Wi.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Rp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Ap(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Ap(t,m,i[m])}function mu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var my=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(t){return gy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var gu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function wp(t){var i=Vi(t);if(i&&(t=i.stateNode)){var s=t[En]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xi(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Yt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[En]||null;if(!f)throw Error(a(90));Xi(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Rt(l)}break e;case"textarea":gn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&un(t,!!s.multiple,i,!1)}}}var vu=!1;function Cp(t,i,s){if(vu)return t(i,s);vu=!0;try{var l=t(i);return l}finally{if(vu=!1,(Hs!==null||Gs!==null)&&(rc(),Hs&&(i=Hs,t=Gs,Gs=Hs=null,wp(i),t)))for(i=0;i<t.length;i++)wp(t[i])}}function Qr(t,i){var s=t.stateNode;if(s===null)return null;var l=s[En]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(qi)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{yu=!1}var ba=null,xu=null,Ml=null;function Dp(){if(Ml)return Ml;var t,i=xu,s=i.length,l,f="value"in ba?ba.value:ba.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[m-l];l++);return Ml=f.slice(t,1<l?1-l:void 0)}function El(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function Lp(){return!1}function Xn(t){function i(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Tl:Lp,this.isPropagationStopped=Lp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Xn(us),$r=g({},us,{view:0,detail:0}),_y=Xn($r),Su,Mu,eo,Al=g({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Su=t.screenX-eo.screenX,Mu=t.screenY-eo.screenY):Mu=Su=0,eo=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),Up=Xn(Al),vy=g({},Al,{dataTransfer:0}),yy=Xn(vy),xy=g({},$r,{relatedTarget:0}),Eu=Xn(xy),Sy=g({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),My=Xn(Sy),Ey=g({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ty=Xn(Ey),by=g({},us,{data:0}),Np=Xn(by),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=wy[t])?!!i[t]:!1}function Tu(){return Cy}var Dy=g({},$r,{key:function(t){if(t.key){var i=Ay[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ly=Xn(Dy),Uy=g({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Xn(Uy),Ny=g({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Oy=Xn(Ny),Py=g({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=Xn(Py),By=g({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=Xn(By),zy=g({},us,{newState:0,oldState:0}),Hy=Xn(zy),Gy=[9,13,27,32],bu=qi&&"CompositionEvent"in window,to=null;qi&&"documentMode"in document&&(to=document.documentMode);var Vy=qi&&"TextEvent"in window&&!to,Pp=qi&&(!bu||to&&8<to&&11>=to),Ip=" ",Bp=!1;function Fp(t,i){switch(t){case"keyup":return Gy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function ky(t,i){switch(t){case"compositionend":return zp(i);case"keypress":return i.which!==32?null:(Bp=!0,Ip);case"textInput":return t=i.data,t===Ip&&Bp?null:t;default:return null}}function Xy(t,i){if(Vs)return t==="compositionend"||!bu&&Fp(t,i)?(t=Dp(),Ml=xu=ba=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pp&&i.locale!=="ko"?null:i.data;default:return null}}var Wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Wy[t.type]:i==="textarea"}function Gp(t,i,s,l){Hs?Gs?Gs.push(l):Gs=[l]:Hs=l,i=hc(i,"onChange"),0<i.length&&(s=new bl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var no=null,io=null;function qy(t){S_(t,0)}function Rl(t){var i=cs(t);if(Rt(i))return t}function Vp(t,i){if(t==="change")return i}var kp=!1;if(qi){var Au;if(qi){var Ru="oninput"in document;if(!Ru){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ru=typeof Xp.oninput=="function"}Au=Ru}else Au=!1;kp=Au&&(!document.documentMode||9<document.documentMode)}function Wp(){no&&(no.detachEvent("onpropertychange",qp),io=no=null)}function qp(t){if(t.propertyName==="value"&&Rl(io)){var i=[];Gp(i,io,t,_u(t)),Cp(qy,i)}}function Yy(t,i,s){t==="focusin"?(Wp(),no=i,io=s,no.attachEvent("onpropertychange",qp)):t==="focusout"&&Wp()}function jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(io)}function Ky(t,i){if(t==="click")return Rl(i)}function Zy(t,i){if(t==="input"||t==="change")return Rl(i)}function Qy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Qy;function ao(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!kt.call(i,f)||!Zn(t[f],i[f]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,i){var s=Yp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yp(s)}}function Kp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Kp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Cn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Cn(t.document)}return i}function wu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Jy=qi&&"documentMode"in document&&11>=document.documentMode,ks=null,Cu=null,so=null,Du=!1;function Qp(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Du||ks==null||ks!==Cn(l)||(l=ks,"selectionStart"in l&&wu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&ao(so,l)||(so=l,l=hc(Cu,"onSelect"),0<l.length&&(i=new bl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ks)))}function fs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Xs={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Lu={},Jp={};qi&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function hs(t){if(Lu[t])return Lu[t];if(!Xs[t])return t;var i=Xs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Jp)return Lu[t]=i[s];return t}var $p=hs("animationend"),em=hs("animationiteration"),tm=hs("animationstart"),$y=hs("transitionrun"),ex=hs("transitionstart"),tx=hs("transitioncancel"),nm=hs("transitionend"),im=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function gi(t,i){im.set(t,i),ki(i,[t])}var am=new WeakMap;function ri(t,i){if(typeof t=="object"&&t!==null){var s=am.get(t);return s!==void 0?s:(i={value:t,source:i,stack:qt(i)},am.set(t,i),i)}return{value:t,source:i,stack:qt(i)}}var oi=[],Ws=0,Nu=0;function wl(){for(var t=Ws,i=Nu=Ws=0;i<t;){var s=oi[i];oi[i++]=null;var l=oi[i];oi[i++]=null;var f=oi[i];oi[i++]=null;var m=oi[i];if(oi[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&sm(s,f,m)}}function Cl(t,i,s,l){oi[Ws++]=t,oi[Ws++]=i,oi[Ws++]=s,oi[Ws++]=l,Nu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ou(t,i,s,l){return Cl(t,i,s,l),Dl(t)}function qs(t,i){return Cl(t,null,null,i),Dl(t)}function sm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Oe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Dl(t){if(50<Lo)throw Lo=0,Gf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ys={};function nx(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,s,l){return new nx(t,i,s,l)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,i){var s=t.alternate;return s===null?(s=Qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function rm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ll(t,i,s,l,f,m){var M=0;if(l=t,typeof t=="function")Pu(t)&&(M=1);else if(typeof t=="string")M=aS(t,s,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Qn(31,s,i,f),t.elementType=D,t.lanes=m,t;case E:return ds(s.children,f,m,i);case T:M=8,f|=24;break;case S:return t=Qn(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case B:return t=Qn(13,s,i,f),t.elementType=B,t.lanes=m,t;case z:return t=Qn(19,s,i,f),t.elementType=z,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case L:M=10;break e;case N:M=9;break e;case C:M=11;break e;case F:M=14;break e;case q:M=16,l=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Qn(M,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function ds(t,i,s,l){return t=Qn(7,t,l,i),t.lanes=s,t}function Iu(t,i,s){return t=Qn(6,t,null,i),t.lanes=s,t}function Bu(t,i,s){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var js=[],Ks=0,Ul=null,Nl=0,li=[],ci=0,ps=null,ji=1,Ki="";function ms(t,i){js[Ks++]=Nl,js[Ks++]=Ul,Ul=t,Nl=i}function om(t,i,s){li[ci++]=ji,li[ci++]=Ki,li[ci++]=ps,ps=t;var l=ji;t=Ki;var f=32-Oe(l)-1;l&=~(1<<f),s+=1;var m=32-Oe(i)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ji=1<<32-Oe(i)+f|s<<f|l,Ki=m+t}else ji=1<<m|s<<f|l,Ki=t}function Fu(t){t.return!==null&&(ms(t,1),om(t,1,0))}function zu(t){for(;t===Ul;)Ul=js[--Ks],js[Ks]=null,Nl=js[--Ks],js[Ks]=null;for(;t===ps;)ps=li[--ci],li[ci]=null,Ki=li[--ci],li[ci]=null,ji=li[--ci],li[ci]=null}var Pn=null,$t=null,Lt=!1,gs=null,wi=!1,Hu=Error(a(519));function _s(t){var i=Error(a(418,""));throw lo(ri(i,t)),Hu}function lm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[cn]=t,i[En]=l,s){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(s=0;s<No.length;s++)mt(No[s],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":mt("invalid",i),Xt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Jt(i);break;case"select":mt("invalid",i);break;case"textarea":mt("invalid",i),Tn(i,l.value,l.defaultValue,l.children),Jt(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||b_(i.textContent,s)?(l.popover!=null&&(mt("beforetoggle",i),mt("toggle",i)),l.onScroll!=null&&mt("scroll",i),l.onScrollEnd!=null&&mt("scrollend",i),l.onClick!=null&&(i.onclick=dc),i=!0):i=!1,i||_s(t)}function cm(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Pn=Pn.return}}function ro(t){if(t!==Pn)return!1;if(!Lt)return cm(t),Lt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||ih(t.type,t.memoizedProps)),s=!s),s&&$t&&_s(t),cm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){$t=vi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}$t=null}}else i===27?(i=$t,Ga(t.type)?(t=oh,oh=null,$t=t):$t=i):$t=Pn?vi(t.stateNode.nextSibling):null;return!0}function oo(){$t=Pn=null,Lt=!1}function um(){var t=gs;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),gs=null),t}function lo(t){gs===null?gs=[t]:gs.push(t)}var Gu=$(null),vs=null,Zi=null;function Aa(t,i,s){xe(Gu,i._currentValue),i._currentValue=s}function Qi(t){t._currentValue=Gu.current,ve(Gu)}function Vu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ku(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var I=0;I<i.length;I++)if(A.context===i[I]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Vu(m.return,s,t),l||(M=null);break e}m=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),Vu(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function co(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var A=f.type;Zn(f.pendingProps.value,M.value)||(t!==null?t.push(A):t=[A])}}else if(f===Ae.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}f=f.return}t!==null&&ku(i,t,s,l),i.flags|=262144}function Ol(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ys(t){vs=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return fm(vs,t)}function Pl(t,i){return vs===null&&ys(t),fm(t,i)}function fm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Zi===null){if(t===null)throw Error(a(308));Zi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Zi=Zi.next=i;return s}var ix=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},ax=o.unstable_scheduleCallback,sx=o.unstable_NormalPriority,fn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new ix,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&ax(sx,function(){t.controller.abort()})}var fo=null,Wu=0,Zs=0,Qs=null;function rx(t,i){if(fo===null){var s=fo=[];Wu=0,Zs=jf(),Qs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Wu++,i.then(hm,hm),i}function hm(){if(--Wu===0&&fo!==null){Qs!==null&&(Qs.status="fulfilled");var t=fo;fo=null,Zs=0,Qs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ox(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var dm=P.S;P.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&rx(t,i),dm!==null&&dm(t,i)};var xs=$(null);function qu(){var t=xs.current;return t!==null?t:jt.pooledCache}function Il(t,i){i===null?xe(xs,xs.current):xe(xs,i.pool)}function pm(){var t=qu();return t===null?null:{parent:fn._currentValue,pool:t}}var ho=Error(a(460)),mm=Error(a(474)),Bl=Error(a(542)),Yu={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fl(){}function _m(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Fl,Fl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ym(t),t;default:if(typeof i.status=="string")i.then(Fl,Fl);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ym(t),t}throw po=i,ho}}var po=null;function vm(){if(po===null)throw Error(a(459));var t=po;return po=null,t}function ym(t){if(t===ho||t===Bl)throw Error(a(483))}var Ra=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ot&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Dl(t),sm(t,null,s),i}return Cl(t,l,i,s),Dl(t)}function mo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Fe(t,s)}}function Zu(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Qu=!1;function go(){if(Qu){var t=Qs;if(t!==null)throw t}}function _o(t,i,s,l){Qu=!1;var f=t.updateQueue;Ra=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,J=I.next;I.next=null,M===null?m=J:M.next=J,M=I;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,A=ce.lastBaseUpdate,A!==M&&(A===null?ce.firstBaseUpdate=J:A.next=J,ce.lastBaseUpdate=I))}if(m!==null){var me=f.baseState;M=0,ce=J=I=null,A=m;do{var ne=A.lane&-536870913,ie=ne!==A.lane;if(ie?(Et&ne)===ne:(l&ne)===ne){ne!==0&&ne===Zs&&(Qu=!0),ce!==null&&(ce=ce.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var et=t,Qe=A;ne=i;var Gt=s;switch(Qe.tag){case 1:if(et=Qe.payload,typeof et=="function"){me=et.call(Gt,me,ne);break e}me=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=Qe.payload,ne=typeof et=="function"?et.call(Gt,me,ne):et,ne==null)break e;me=g({},me,ne);break e;case 2:Ra=!0}}ne=A.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=f.callbacks,ie===null?f.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ce===null?(J=ce=ie,I=me):ce=ce.next=ie,M|=ne;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ie=A,A=ie.next,ie.next=null,f.lastBaseUpdate=ie,f.shared.pending=null}}while(!0);ce===null&&(I=me),f.baseState=I,f.firstBaseUpdate=J,f.lastBaseUpdate=ce,m===null&&(f.shared.lanes=0),Ba|=M,t.lanes=M,t.memoizedState=me}}function xm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Sm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)xm(s[t],i)}var Js=$(null),zl=$(0);function Mm(t,i){t=aa,xe(zl,t),xe(Js,i),aa=t|i.baseLanes}function Ju(){xe(zl,aa),xe(Js,Js.current)}function $u(){aa=zl.current,ve(Js),ve(zl)}var Da=0,ft=null,zt=null,rn=null,Hl=!1,$s=!1,Ss=!1,Gl=0,vo=0,er=null,lx=0;function nn(){throw Error(a(321))}function ef(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Zn(t[s],i[s]))return!1;return!0}function tf(t,i,s,l,f,m){return Da=m,ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?sg:rg,Ss=!1,m=s(l,f),Ss=!1,$s&&(m=Tm(i,s,l,f)),Em(t),m}function Em(t){P.H=Yl;var i=zt!==null&&zt.next!==null;if(Da=0,rn=zt=ft=null,Hl=!1,vo=0,er=null,i)throw Error(a(300));t===null||_n||(t=t.dependencies,t!==null&&Ol(t)&&(_n=!0))}function Tm(t,i,s,l){ft=t;var f=0;do{if($s&&(er=null),vo=0,$s=!1,25<=f)throw Error(a(301));if(f+=1,rn=zt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=mx,m=i(s,l)}while($s);return m}function cx(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?yo(i):i,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(ft.flags|=1024),i}function nf(){var t=Gl!==0;return Gl=0,t}function af(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function sf(t){if(Hl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Hl=!1}Da=0,rn=zt=ft=null,$s=!1,vo=Gl=0,er=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?ft.memoizedState=rn=t:rn=rn.next=t,rn}function on(){if(zt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var i=rn===null?ft.memoizedState:rn.next;if(i!==null)rn=i,zt=t;else{if(t===null)throw ft.alternate===null?Error(a(467)):Error(a(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},rn===null?ft.memoizedState=rn=t:rn=rn.next=t}return rn}function rf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(t){var i=vo;return vo+=1,er===null&&(er=[]),t=_m(er,t,i),i=ft,(rn===null?i.memoizedState:rn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?sg:rg),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yo(t);if(t.$$typeof===L)return Ln(t)}throw Error(a(438,String(t)))}function of(t){var i=null,s=ft.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ft.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=rf(),ft.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function Ji(t,i){return typeof i=="function"?i(t):i}function kl(t){var i=on();return lf(i,zt,t)}function lf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var A=M=null,I=null,J=i,ce=!1;do{var me=J.lane&-536870913;if(me!==J.lane?(Et&me)===me:(Da&me)===me){var ne=J.revertLane;if(ne===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),me===Zs&&(ce=!0);else if((Da&ne)===ne){J=J.next,ne===Zs&&(ce=!0);continue}else me={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=me,M=m):I=I.next=me,ft.lanes|=ne,Ba|=ne;me=J.action,Ss&&s(m,me),m=J.hasEagerState?J.eagerState:s(m,me)}else ne={lane:me,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=ne,M=m):I=I.next=ne,ft.lanes|=me,Ba|=me;J=J.next}while(J!==null&&J!==i);if(I===null?M=m:I.next=A,!Zn(m,t.memoizedState)&&(_n=!0,ce&&(s=Qs,s!==null)))throw s;t.memoizedState=m,t.baseState=M,t.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function cf(t){var i=on(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=t(m,M.action),M=M.next;while(M!==f);Zn(m,i.memoizedState)||(_n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function bm(t,i,s){var l=ft,f=on(),m=Lt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!Zn((zt||f).memoizedState,s);M&&(f.memoizedState=s,_n=!0),f=f.queue;var A=wm.bind(null,l,f,t);if(xo(2048,8,A,[t]),f.getSnapshot!==i||M||rn!==null&&rn.memoizedState.tag&1){if(l.flags|=2048,tr(9,Xl(),Rm.bind(null,l,f,s,i),null),jt===null)throw Error(a(349));m||(Da&124)!==0||Am(l,i,s)}return s}function Am(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ft.updateQueue,i===null?(i=rf(),ft.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Rm(t,i,s,l){i.value=s,i.getSnapshot=l,Cm(i)&&Dm(t)}function wm(t,i,s){return s(function(){Cm(i)&&Dm(t)})}function Cm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Zn(t,s)}catch{return!0}}function Dm(t){var i=qs(t,2);i!==null&&ni(i,t,2)}function uf(t){var i=Wn();if(typeof t=="function"){var s=t;if(t=s(),Ss){oe(!0);try{s()}finally{oe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},i}function Lm(t,i,s,l){return t.baseState=s,lf(t,zt,typeof l=="function"?l:Ji)}function ux(t,i,s,l,f){if(ql(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};P.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Um(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Um(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=P.T,M={};P.T=M;try{var A=s(f,l),I=P.S;I!==null&&I(M,A),Nm(t,i,A)}catch(J){ff(t,i,J)}finally{P.T=m}}else try{m=s(f,l),Nm(t,i,m)}catch(J){ff(t,i,J)}}function Nm(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Om(t,i,l)},function(l){return ff(t,i,l)}):Om(t,i,s)}function Om(t,i,s){i.status="fulfilled",i.value=s,Pm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Um(t,s)))}function ff(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Pm(i),i=i.next;while(i!==l)}t.action=null}function Pm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Im(t,i){return i}function Bm(t,i){if(Lt){var s=jt.formState;if(s!==null){e:{var l=ft;if(Lt){if($t){t:{for(var f=$t,m=wi;f.nodeType!==8;){if(!m){f=null;break t}if(f=vi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){$t=vi(f.nextSibling),l=f.data==="F!";break e}}_s(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:i},s.queue=l,s=ng.bind(null,ft,l),l.dispatch=s,l=uf(!1),m=gf.bind(null,ft,!1,l.queue),l=Wn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=ux.bind(null,ft,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Fm(t){var i=on();return zm(i,zt,t)}function zm(t,i,s){if(i=lf(t,i,Im)[0],t=kl(Ji)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=yo(i)}catch(M){throw M===ho?Bl:M}else l=i;i=on();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ft.flags|=2048,tr(9,Xl(),fx.bind(null,f,s),null)),[l,m,t]}function fx(t,i){t.action=i}function Hm(t){var i=on(),s=zt;if(s!==null)return zm(i,s,t);on(),i=i.memoizedState,s=on();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function tr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ft.updateQueue,i===null&&(i=rf(),ft.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Xl(){return{destroy:void 0,resource:void 0}}function Gm(){return on().memoizedState}function Wl(t,i,s,l){var f=Wn();l=l===void 0?null:l,ft.flags|=t,f.memoizedState=tr(1|i,Xl(),s,l)}function xo(t,i,s,l){var f=on();l=l===void 0?null:l;var m=f.memoizedState.inst;zt!==null&&l!==null&&ef(l,zt.memoizedState.deps)?f.memoizedState=tr(i,m,s,l):(ft.flags|=t,f.memoizedState=tr(1|i,m,s,l))}function Vm(t,i){Wl(8390656,8,t,i)}function km(t,i){xo(2048,8,t,i)}function Xm(t,i){return xo(4,2,t,i)}function Wm(t,i){return xo(4,4,t,i)}function qm(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ym(t,i,s){s=s!=null?s.concat([t]):null,xo(4,4,qm.bind(null,i,t),s)}function hf(){}function jm(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&ef(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Km(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&ef(i,l[1]))return l[0];if(l=t(),Ss){oe(!0);try{t()}finally{oe(!1)}}return s.memoizedState=[l,i],l}function df(t,i,s){return s===void 0||(Da&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=Jg(),ft.lanes|=t,Ba|=t,s)}function Zm(t,i,s,l){return Zn(s,i)?s:Js.current!==null?(t=df(t,s,l),Zn(t,i)||(_n=!0),t):(Da&42)===0?(_n=!0,t.memoizedState=s):(t=Jg(),ft.lanes|=t,Ba|=t,i)}function Qm(t,i,s,l,f){var m=ee.p;ee.p=m!==0&&8>m?m:8;var M=P.T,A={};P.T=A,gf(t,!1,i,s);try{var I=f(),J=P.S;if(J!==null&&J(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ce=ox(I,l);So(t,i,ce,ti(t))}else So(t,i,l,ti(t))}catch(me){So(t,i,{then:function(){},status:"rejected",reason:me},ti())}finally{ee.p=m,P.T=M}}function hx(){}function pf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Jm(t).queue;Qm(t,f,i,j,s===null?hx:function(){return $m(t),s(l)})}function Jm(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:j},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function $m(t){var i=Jm(t).next.queue;So(t,i,{},ti())}function mf(){return Ln(zo)}function eg(){return on().memoizedState}function tg(){return on().memoizedState}function dx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ti();t=wa(s);var l=Ca(i,t,s);l!==null&&(ni(l,i,s),mo(l,i,s)),i={cache:Xu()},t.payload=i;return}i=i.return}}function px(t,i,s){var l=ti();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ql(t)?ig(i,s):(s=Ou(t,i,s,l),s!==null&&(ni(s,t,l),ag(s,i,l)))}function ng(t,i,s){var l=ti();So(t,i,s,l)}function So(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ql(t))ig(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,A=m(M,s);if(f.hasEagerState=!0,f.eagerState=A,Zn(A,M))return Cl(t,i,f,0),jt===null&&wl(),!1}catch{}finally{}if(s=Ou(t,i,f,l),s!==null)return ni(s,t,l),ag(s,i,l),!0}return!1}function gf(t,i,s,l){if(l={lane:2,revertLane:jf(),action:l,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(i)throw Error(a(479))}else i=Ou(t,s,l,2),i!==null&&ni(i,t,2)}function ql(t){var i=t.alternate;return t===ft||i!==null&&i===ft}function ig(t,i){$s=Hl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function ag(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Fe(t,s)}}var Yl={readContext:Ln,use:Vl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},sg={readContext:Ln,use:Vl,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:Vm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Wl(4194308,4,qm.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Wl(4194308,4,t,i)},useInsertionEffect:function(t,i){Wl(4,2,t,i)},useMemo:function(t,i){var s=Wn();i=i===void 0?null:i;var l=t();if(Ss){oe(!0);try{t()}finally{oe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Wn();if(s!==void 0){var f=s(i);if(Ss){oe(!0);try{s(i)}finally{oe(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=px.bind(null,ft,t),[l.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=uf(t);var i=t.queue,s=ng.bind(null,ft,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:hf,useDeferredValue:function(t,i){var s=Wn();return df(s,t,i)},useTransition:function(){var t=uf(!1);return t=Qm.bind(null,ft,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ft,f=Wn();if(Lt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),jt===null)throw Error(a(349));(Et&124)!==0||Am(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Vm(wm.bind(null,l,m,t),[t]),l.flags|=2048,tr(9,Xl(),Rm.bind(null,l,m,s,i),null),s},useId:function(){var t=Wn(),i=jt.identifierPrefix;if(Lt){var s=Ki,l=ji;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Gl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=lx++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=gf.bind(null,ft,!0,s),s.dispatch=i,[t,i]},useMemoCache:of,useCacheRefresh:function(){return Wn().memoizedState=dx.bind(null,ft)}},rg={readContext:Ln,use:Vl,useCallback:jm,useContext:Ln,useEffect:km,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:kl,useRef:Gm,useState:function(){return kl(Ji)},useDebugValue:hf,useDeferredValue:function(t,i){var s=on();return Zm(s,zt.memoizedState,t,i)},useTransition:function(){var t=kl(Ji)[0],i=on().memoizedState;return[typeof t=="boolean"?t:yo(t),i]},useSyncExternalStore:bm,useId:eg,useHostTransitionStatus:mf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,i){var s=on();return Lm(s,zt,t,i)},useMemoCache:of,useCacheRefresh:tg},mx={readContext:Ln,use:Vl,useCallback:jm,useContext:Ln,useEffect:km,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:cf,useRef:Gm,useState:function(){return cf(Ji)},useDebugValue:hf,useDeferredValue:function(t,i){var s=on();return zt===null?df(s,t,i):Zm(s,zt.memoizedState,t,i)},useTransition:function(){var t=cf(Ji)[0],i=on().memoizedState;return[typeof t=="boolean"?t:yo(t),i]},useSyncExternalStore:bm,useId:eg,useHostTransitionStatus:mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,i){var s=on();return zt!==null?Lm(s,zt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:of,useCacheRefresh:tg},nr=null,Mo=0;function jl(t){var i=Mo;return Mo+=1,nr===null&&(nr=[]),_m(nr,t,i)}function Eo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Kl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function og(t){var i=t._init;return i(t._payload)}function lg(t){function i(X,G){if(t){var Z=X.deletions;Z===null?(X.deletions=[G],X.flags|=16):Z.push(G)}}function s(X,G){if(!t)return null;for(;G!==null;)i(X,G),G=G.sibling;return null}function l(X){for(var G=new Map;X!==null;)X.key!==null?G.set(X.key,X):G.set(X.index,X),X=X.sibling;return G}function f(X,G){return X=Yi(X,G),X.index=0,X.sibling=null,X}function m(X,G,Z){return X.index=Z,t?(Z=X.alternate,Z!==null?(Z=Z.index,Z<G?(X.flags|=67108866,G):Z):(X.flags|=67108866,G)):(X.flags|=1048576,G)}function M(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function A(X,G,Z,he){return G===null||G.tag!==6?(G=Iu(Z,X.mode,he),G.return=X,G):(G=f(G,Z),G.return=X,G)}function I(X,G,Z,he){var ze=Z.type;return ze===E?ce(X,G,Z.props.children,he,Z.key):G!==null&&(G.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===q&&og(ze)===G.type)?(G=f(G,Z.props),Eo(G,Z),G.return=X,G):(G=Ll(Z.type,Z.key,Z.props,null,X.mode,he),Eo(G,Z),G.return=X,G)}function J(X,G,Z,he){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=Bu(Z,X.mode,he),G.return=X,G):(G=f(G,Z.children||[]),G.return=X,G)}function ce(X,G,Z,he,ze){return G===null||G.tag!==7?(G=ds(Z,X.mode,he,ze),G.return=X,G):(G=f(G,Z),G.return=X,G)}function me(X,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Iu(""+G,X.mode,Z),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return Z=Ll(G.type,G.key,G.props,null,X.mode,Z),Eo(Z,G),Z.return=X,Z;case x:return G=Bu(G,X.mode,Z),G.return=X,G;case q:var he=G._init;return G=he(G._payload),me(X,G,Z)}if(_e(G)||le(G))return G=ds(G,X.mode,Z,null),G.return=X,G;if(typeof G.then=="function")return me(X,jl(G),Z);if(G.$$typeof===L)return me(X,Pl(X,G),Z);Kl(X,G)}return null}function ne(X,G,Z,he){var ze=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return ze!==null?null:A(X,G,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:return Z.key===ze?I(X,G,Z,he):null;case x:return Z.key===ze?J(X,G,Z,he):null;case q:return ze=Z._init,Z=ze(Z._payload),ne(X,G,Z,he)}if(_e(Z)||le(Z))return ze!==null?null:ce(X,G,Z,he,null);if(typeof Z.then=="function")return ne(X,G,jl(Z),he);if(Z.$$typeof===L)return ne(X,G,Pl(X,Z),he);Kl(X,Z)}return null}function ie(X,G,Z,he,ze){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return X=X.get(Z)||null,A(G,X,""+he,ze);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case v:return X=X.get(he.key===null?Z:he.key)||null,I(G,X,he,ze);case x:return X=X.get(he.key===null?Z:he.key)||null,J(G,X,he,ze);case q:var ht=he._init;return he=ht(he._payload),ie(X,G,Z,he,ze)}if(_e(he)||le(he))return X=X.get(Z)||null,ce(G,X,he,ze,null);if(typeof he.then=="function")return ie(X,G,Z,jl(he),ze);if(he.$$typeof===L)return ie(X,G,Z,Pl(G,he),ze);Kl(G,he)}return null}function et(X,G,Z,he){for(var ze=null,ht=null,Xe=G,$e=G=0,yn=null;Xe!==null&&$e<Z.length;$e++){Xe.index>$e?(yn=Xe,Xe=null):yn=Xe.sibling;var Ct=ne(X,Xe,Z[$e],he);if(Ct===null){Xe===null&&(Xe=yn);break}t&&Xe&&Ct.alternate===null&&i(X,Xe),G=m(Ct,G,$e),ht===null?ze=Ct:ht.sibling=Ct,ht=Ct,Xe=yn}if($e===Z.length)return s(X,Xe),Lt&&ms(X,$e),ze;if(Xe===null){for(;$e<Z.length;$e++)Xe=me(X,Z[$e],he),Xe!==null&&(G=m(Xe,G,$e),ht===null?ze=Xe:ht.sibling=Xe,ht=Xe);return Lt&&ms(X,$e),ze}for(Xe=l(Xe);$e<Z.length;$e++)yn=ie(Xe,X,$e,Z[$e],he),yn!==null&&(t&&yn.alternate!==null&&Xe.delete(yn.key===null?$e:yn.key),G=m(yn,G,$e),ht===null?ze=yn:ht.sibling=yn,ht=yn);return t&&Xe.forEach(function(qa){return i(X,qa)}),Lt&&ms(X,$e),ze}function Qe(X,G,Z,he){if(Z==null)throw Error(a(151));for(var ze=null,ht=null,Xe=G,$e=G=0,yn=null,Ct=Z.next();Xe!==null&&!Ct.done;$e++,Ct=Z.next()){Xe.index>$e?(yn=Xe,Xe=null):yn=Xe.sibling;var qa=ne(X,Xe,Ct.value,he);if(qa===null){Xe===null&&(Xe=yn);break}t&&Xe&&qa.alternate===null&&i(X,Xe),G=m(qa,G,$e),ht===null?ze=qa:ht.sibling=qa,ht=qa,Xe=yn}if(Ct.done)return s(X,Xe),Lt&&ms(X,$e),ze;if(Xe===null){for(;!Ct.done;$e++,Ct=Z.next())Ct=me(X,Ct.value,he),Ct!==null&&(G=m(Ct,G,$e),ht===null?ze=Ct:ht.sibling=Ct,ht=Ct);return Lt&&ms(X,$e),ze}for(Xe=l(Xe);!Ct.done;$e++,Ct=Z.next())Ct=ie(Xe,X,$e,Ct.value,he),Ct!==null&&(t&&Ct.alternate!==null&&Xe.delete(Ct.key===null?$e:Ct.key),G=m(Ct,G,$e),ht===null?ze=Ct:ht.sibling=Ct,ht=Ct);return t&&Xe.forEach(function(gS){return i(X,gS)}),Lt&&ms(X,$e),ze}function Gt(X,G,Z,he){if(typeof Z=="object"&&Z!==null&&Z.type===E&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:e:{for(var ze=Z.key;G!==null;){if(G.key===ze){if(ze=Z.type,ze===E){if(G.tag===7){s(X,G.sibling),he=f(G,Z.props.children),he.return=X,X=he;break e}}else if(G.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===q&&og(ze)===G.type){s(X,G.sibling),he=f(G,Z.props),Eo(he,Z),he.return=X,X=he;break e}s(X,G);break}else i(X,G);G=G.sibling}Z.type===E?(he=ds(Z.props.children,X.mode,he,Z.key),he.return=X,X=he):(he=Ll(Z.type,Z.key,Z.props,null,X.mode,he),Eo(he,Z),he.return=X,X=he)}return M(X);case x:e:{for(ze=Z.key;G!==null;){if(G.key===ze)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){s(X,G.sibling),he=f(G,Z.children||[]),he.return=X,X=he;break e}else{s(X,G);break}else i(X,G);G=G.sibling}he=Bu(Z,X.mode,he),he.return=X,X=he}return M(X);case q:return ze=Z._init,Z=ze(Z._payload),Gt(X,G,Z,he)}if(_e(Z))return et(X,G,Z,he);if(le(Z)){if(ze=le(Z),typeof ze!="function")throw Error(a(150));return Z=ze.call(Z),Qe(X,G,Z,he)}if(typeof Z.then=="function")return Gt(X,G,jl(Z),he);if(Z.$$typeof===L)return Gt(X,G,Pl(X,Z),he);Kl(X,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(s(X,G.sibling),he=f(G,Z),he.return=X,X=he):(s(X,G),he=Iu(Z,X.mode,he),he.return=X,X=he),M(X)):s(X,G)}return function(X,G,Z,he){try{Mo=0;var ze=Gt(X,G,Z,he);return nr=null,ze}catch(Xe){if(Xe===ho||Xe===Bl)throw Xe;var ht=Qn(29,Xe,null,X.mode);return ht.lanes=he,ht.return=X,ht}finally{}}}var ir=lg(!0),cg=lg(!1),ui=$(null),Ci=null;function La(t){var i=t.alternate;xe(hn,hn.current&1),xe(ui,t),Ci===null&&(i===null||Js.current!==null||i.memoizedState!==null)&&(Ci=t)}function ug(t){if(t.tag===22){if(xe(hn,hn.current),xe(ui,t),Ci===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ci=t)}}else Ua()}function Ua(){xe(hn,hn.current),xe(ui,ui.current)}function $i(t){ve(ui),Ci===t&&(Ci=null),ve(hn)}var hn=$(0);function Zl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||rh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function _f(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var vf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ti(),f=wa(l);f.payload=i,s!=null&&(f.callback=s),i=Ca(t,f,l),i!==null&&(ni(i,t,l),mo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ti(),f=wa(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ca(t,f,l),i!==null&&(ni(i,t,l),mo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ti(),l=wa(s);l.tag=2,i!=null&&(l.callback=i),i=Ca(t,l,s),i!==null&&(ni(i,t,s),mo(i,t,s))}};function fg(t,i,s,l,f,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!ao(s,l)||!ao(f,m):!0}function hg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&vf.enqueueReplaceState(i,i.state,null)}function Ms(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var Ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function dg(t){Ql(t)}function pg(t){console.error(t)}function mg(t){Ql(t)}function Jl(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function gg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function yf(t,i,s){return s=wa(s),s.tag=3,s.payload={element:null},s.callback=function(){Jl(t,i)},s}function _g(t){return t=wa(t),t.tag=3,t}function vg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){gg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){gg(i,s,l),typeof f!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function gx(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&co(i,s,f,!0),s=ui.current,s!==null){switch(s.tag){case 13:return Ci===null?kf():s.alternate===null&&en===0&&(en=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Yu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Wf(t,l,f)),!1;case 22:return s.flags|=65536,l===Yu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Wf(t,l,f)),!1}throw Error(a(435,s.tag))}return Wf(t,l,f),kf(),!1}if(Lt)return i=ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Hu&&(t=Error(a(422),{cause:l}),lo(ri(t,s)))):(l!==Hu&&(i=Error(a(423),{cause:l}),lo(ri(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=ri(l,s),f=yf(t.stateNode,l,f),Zu(t,f),en!==4&&(en=2)),!1;var m=Error(a(520),{cause:l});if(m=ri(m,s),Do===null?Do=[m]:Do.push(m),en!==4&&(en=2),i===null)return!0;l=ri(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=yf(s.stateNode,l,t),Zu(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Fa===null||!Fa.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=_g(f),vg(f,t,s,l),Zu(s,f),!1}s=s.return}while(s!==null);return!1}var yg=Error(a(461)),_n=!1;function bn(t,i,s,l){i.child=t===null?cg(i,null,s,l):ir(i,t.child,s,l)}function xg(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return ys(i),l=tf(t,i,s,M,m,f),A=nf(),t!==null&&!_n?(af(t,i,f),ea(t,i,f)):(Lt&&A&&Fu(i),i.flags|=1,bn(t,i,l,f),i.child)}function Sg(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!Pu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Mg(t,i,m,l,f)):(t=Ll(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Rf(t,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:ao,s(M,l)&&t.ref===i.ref)return ea(t,i,f)}return i.flags|=1,t=Yi(m,l),t.ref=i.ref,t.return=i,i.child=t}function Mg(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(ao(m,l)&&t.ref===i.ref)if(_n=!1,i.pendingProps=l=m,Rf(t,f))(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,ea(t,i,f)}return xf(t,i,s,l,f)}function Eg(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Tg(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Il(i,m!==null?m.cachePool:null),m!==null?Mm(i,m):Ju(),ug(i);else return i.lanes=i.childLanes=536870912,Tg(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Il(i,m.cachePool),Mm(i,m),Ua(),i.memoizedState=null):(t!==null&&Il(i,null),Ju(),Ua());return bn(t,i,f,s),i.child}function Tg(t,i,s,l){var f=qu();return f=f===null?null:{parent:fn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&Il(i,null),Ju(),ug(i),t!==null&&co(t,i,l,!0),null}function $l(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function xf(t,i,s,l,f){return ys(i),s=tf(t,i,s,l,void 0,f),l=nf(),t!==null&&!_n?(af(t,i,f),ea(t,i,f)):(Lt&&l&&Fu(i),i.flags|=1,bn(t,i,s,f),i.child)}function bg(t,i,s,l,f,m){return ys(i),i.updateQueue=null,s=Tm(i,l,s,f),Em(t),l=nf(),t!==null&&!_n?(af(t,i,m),ea(t,i,m)):(Lt&&l&&Fu(i),i.flags|=1,bn(t,i,s,m),i.child)}function Ag(t,i,s,l,f){if(ys(i),i.stateNode===null){var m=Ys,M=s.contextType;typeof M=="object"&&M!==null&&(m=Ln(M)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=vf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},ju(i),M=s.contextType,m.context=typeof M=="object"&&M!==null?Ln(M):Ys,m.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(_f(i,s,M,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&vf.enqueueReplaceState(m,m.state,null),_o(i,l,m,f),go(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var A=i.memoizedProps,I=Ms(s,A);m.props=I;var J=m.context,ce=s.contextType;M=Ys,typeof ce=="object"&&ce!==null&&(M=Ln(ce));var me=s.getDerivedStateFromProps;ce=typeof me=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ce||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||J!==M)&&hg(i,m,l,M),Ra=!1;var ne=i.memoizedState;m.state=ne,_o(i,l,m,f),go(),J=i.memoizedState,A||ne!==J||Ra?(typeof me=="function"&&(_f(i,s,me,l),J=i.memoizedState),(I=Ra||fg(i,s,I,l,ne,J,M))?(ce||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=J),m.props=l,m.state=J,m.context=M,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Ku(t,i),M=i.memoizedProps,ce=Ms(s,M),m.props=ce,me=i.pendingProps,ne=m.context,J=s.contextType,I=Ys,typeof J=="object"&&J!==null&&(I=Ln(J)),A=s.getDerivedStateFromProps,(J=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==me||ne!==I)&&hg(i,m,l,I),Ra=!1,ne=i.memoizedState,m.state=ne,_o(i,l,m,f),go();var ie=i.memoizedState;M!==me||ne!==ie||Ra||t!==null&&t.dependencies!==null&&Ol(t.dependencies)?(typeof A=="function"&&(_f(i,s,A,l),ie=i.memoizedState),(ce=Ra||fg(i,s,ce,l,ne,ie,I)||t!==null&&t.dependencies!==null&&Ol(t.dependencies))?(J||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ie,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ie,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ie),m.props=l,m.state=ie,m.context=I,l=ce):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,$l(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=ir(i,t.child,null,f),i.child=ir(i,null,s,f)):bn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ea(t,i,f),t}function Rg(t,i,s,l){return oo(),i.flags|=256,bn(t,i,s,l),i.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(t){return{baseLanes:t,cachePool:pm()}}function Ef(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=fi),t}function wg(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Lt){if(f?La(i):Ua(),Lt){var A=$t,I;if(I=A){e:{for(I=A,A=wi;I.nodeType!==8;){if(!A){A=null;break e}if(I=vi(I.nextSibling),I===null){A=null;break e}}A=I}A!==null?(i.memoizedState={dehydrated:A,treeContext:ps!==null?{id:ji,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},I=Qn(18,null,null,0),I.stateNode=A,I.return=i,i.child=I,Pn=i,$t=null,I=!0):I=!1}I||_s(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return rh(A)?i.lanes=32:i.lanes=536870912,null;$i(i)}return A=l.children,l=l.fallback,f?(Ua(),f=i.mode,A=ec({mode:"hidden",children:A},f),l=ds(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,f=i.child,f.memoizedState=Mf(s),f.childLanes=Ef(t,M,s),i.memoizedState=Sf,l):(La(i),Tf(i,A))}if(I=t.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(m)i.flags&256?(La(i),i.flags&=-257,i=bf(t,i,s)):i.memoizedState!==null?(Ua(),i.child=t.child,i.flags|=128,i=null):(Ua(),f=l.fallback,A=i.mode,l=ec({mode:"visible",children:l.children},A),f=ds(f,A,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,ir(i,t.child,null,s),l=i.child,l.memoizedState=Mf(s),l.childLanes=Ef(t,M,s),i.memoizedState=Sf,i=f);else if(La(i),rh(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var J=M.dgst;M=J,l=Error(a(419)),l.stack="",l.digest=M,lo({value:l,source:null,stack:null}),i=bf(t,i,s)}else if(_n||co(t,i,s,!1),M=(s&t.childLanes)!==0,_n||M){if(M=jt,M!==null&&(l=s&-s,l=(l&42)!==0?1:tt(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,qs(t,l),ni(M,t,l),yg;A.data==="$?"||kf(),i=bf(t,i,s)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,$t=vi(A.nextSibling),Pn=i,Lt=!0,gs=null,wi=!1,t!==null&&(li[ci++]=ji,li[ci++]=Ki,li[ci++]=ps,ji=t.id,Ki=t.overflow,ps=i),i=Tf(i,l.children),i.flags|=4096);return i}return f?(Ua(),f=l.fallback,A=i.mode,I=t.child,J=I.sibling,l=Yi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,J!==null?f=Yi(J,f):(f=ds(f,A,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,A=t.child.memoizedState,A===null?A=Mf(s):(I=A.cachePool,I!==null?(J=fn._currentValue,I=I.parent!==J?{parent:J,pool:J}:I):I=pm(),A={baseLanes:A.baseLanes|s,cachePool:I}),f.memoizedState=A,f.childLanes=Ef(t,M,s),i.memoizedState=Sf,l):(La(i),s=t.child,t=s.sibling,s=Yi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Tf(t,i){return i=ec({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function ec(t,i){return t=Qn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function bf(t,i,s){return ir(i,t.child,null,s),t=Tf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Cg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Vu(t.return,i,s)}function Af(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function Dg(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(bn(t,i,l.children,s),l=hn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,s,i);else if(t.tag===19)Cg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(xe(hn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Zl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Af(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Zl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Af(i,!0,s,null,m);break;case"together":Af(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ea(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ba|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(co(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=Yi(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Yi(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Rf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ol(t)))}function _x(t,i,s){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),Aa(i,fn,t.memoizedState.cache),oo();break;case 27:case 5:Ze(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:Aa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(La(i),i.flags|=128,null):(s&i.child.childLanes)!==0?wg(t,i,s):(La(i),t=ea(t,i,s),t!==null?t.sibling:null);La(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(co(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Dg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xe(hn,hn.current),l)break;return null;case 22:case 23:return i.lanes=0,Eg(t,i,s);case 24:Aa(i,fn,t.memoizedState.cache)}return ea(t,i,s)}function Lg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)_n=!0;else{if(!Rf(t,s)&&(i.flags&128)===0)return _n=!1,_x(t,i,s);_n=(t.flags&131072)!==0}else _n=!1,Lt&&(i.flags&1048576)!==0&&om(i,Nl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Pu(l)?(t=Ms(l,t),i.tag=1,i=Ag(null,i,l,t,s)):(i.tag=0,i=xf(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===C){i.tag=11,i=xg(null,i,l,t,s);break e}else if(f===F){i.tag=14,i=Sg(null,i,l,t,s);break e}}throw i=ue(l)||l,Error(a(306,i,""))}}return i;case 0:return xf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ms(l,i.pendingProps),Ag(t,i,l,f,s);case 3:e:{if(we(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Ku(t,i),_o(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Aa(i,fn,l),l!==m.cache&&ku(i,[fn],s,!0),go(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Rg(t,i,l,s);break e}else if(l!==f){f=ri(Error(a(424)),i),lo(f),i=Rg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=vi(t.firstChild),Pn=i,Lt=!0,gs=null,wi=!0,s=cg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(oo(),l===f){i=ea(t,i,s);break e}bn(t,i,l,s)}i=i.child}return i;case 26:return $l(t,i),t===null?(s=P_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Lt||(s=i.type,t=i.pendingProps,l=pc(Se.current).createElement(s),l[cn]=i,l[En]=t,Rn(l,s,t),sn(l),i.stateNode=l):i.memoizedState=P_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ze(i),t===null&&Lt&&(l=i.stateNode=U_(i.type,i.pendingProps,Se.current),Pn=i,wi=!0,f=$t,Ga(i.type)?(oh=f,$t=vi(l.firstChild)):$t=f),bn(t,i,i.pendingProps.children,s),$l(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Lt&&((f=l=$t)&&(l=Wx(l,i.type,i.pendingProps,wi),l!==null?(i.stateNode=l,Pn=i,$t=vi(l.firstChild),wi=!1,f=!0):f=!1),f||_s(i)),Ze(i),f=i.type,m=i.pendingProps,M=t!==null?t.memoizedProps:null,l=m.children,ih(f,m)?l=null:M!==null&&ih(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=tf(t,i,cx,null,null,s),zo._currentValue=f),$l(t,i),bn(t,i,l,s),i.child;case 6:return t===null&&Lt&&((t=s=$t)&&(s=qx(s,i.pendingProps,wi),s!==null?(i.stateNode=s,Pn=i,$t=null,t=!0):t=!1),t||_s(i)),null;case 13:return wg(t,i,s);case 4:return we(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ir(i,null,l,s):bn(t,i,l,s),i.child;case 11:return xg(t,i,i.type,i.pendingProps,s);case 7:return bn(t,i,i.pendingProps,s),i.child;case 8:return bn(t,i,i.pendingProps.children,s),i.child;case 12:return bn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Aa(i,i.type,l.value),bn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,ys(i),f=Ln(f),l=l(f),i.flags|=1,bn(t,i,l,s),i.child;case 14:return Sg(t,i,i.type,i.pendingProps,s);case 15:return Mg(t,i,i.type,i.pendingProps,s);case 19:return Dg(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=ec(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Yi(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Eg(t,i,s);case 24:return ys(i),l=Ln(fn),t===null?(f=qu(),f===null&&(f=jt,m=Xu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},ju(i),Aa(i,fn,f)):((t.lanes&s)!==0&&(Ku(t,i),_o(i,null,null,s),go()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Aa(i,fn,l)):(l=m.cache,Aa(i,fn,l),l!==f.cache&&ku(i,[fn],s,!0))),bn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ta(t){t.flags|=4}function Ug(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H_(i)){if(i=ui.current,i!==null&&((Et&4194048)===Et?Ci!==null:(Et&62914560)!==Et&&(Et&536870912)===0||i!==Ci))throw po=Yu,mm;t.flags|=8192}}function tc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Le():536870912,t.lanes|=i,or|=i)}function To(t,i){if(!Lt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Zt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function vx(t,i,s){var l=i.pendingProps;switch(zu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(i),null;case 1:return Zt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Qi(fn),lt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ro(i)?ta(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,um())),Zt(i),null;case 26:return s=i.memoizedState,t===null?(ta(i),s!==null?(Zt(i),Ug(i,s)):(Zt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(ta(i),Zt(i),Ug(i,s)):(Zt(i),i.flags&=-16777217):(t.memoizedProps!==l&&ta(i),Zt(i),i.flags&=-16777217),null;case 27:Ft(i),s=Se.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ta(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Zt(i),null}t=Q.current,ro(i)?lm(i):(t=U_(f,l,s),i.stateNode=t,ta(i))}return Zt(i),null;case 5:if(Ft(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ta(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Zt(i),null}if(t=Q.current,ro(i))lm(i);else{switch(f=pc(Se.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[cn]=i,t[En]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(Rn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ta(i)}}return Zt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ta(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=Se.current,ro(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Pn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[cn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||b_(t.nodeValue,s)),t||_s(i)}else t=pc(t).createTextNode(l),t[cn]=i,i.stateNode=t}return Zt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ro(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[cn]=i}else oo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zt(i),f=!1}else f=um(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?($i(i),i):($i(i),null)}if($i(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),tc(i,i.updateQueue),Zt(i),null;case 4:return lt(),t===null&&Jf(i.stateNode.containerInfo),Zt(i),null;case 10:return Qi(i.type),Zt(i),null;case 19:if(ve(hn),f=i.memoizedState,f===null)return Zt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)To(f,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Zl(t),m!==null){for(i.flags|=128,To(f,!1),t=m.updateQueue,i.updateQueue=t,tc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)rm(s,t),s=s.sibling;return xe(hn,hn.current&1|2),i.child}t=t.sibling}f.tail!==null&&dt()>ac&&(i.flags|=128,l=!0,To(f,!1),i.lanes=4194304)}else{if(!l)if(t=Zl(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,tc(i,t),To(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Lt)return Zt(i),null}else 2*dt()-f.renderingStartTime>ac&&s!==536870912&&(i.flags|=128,l=!0,To(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=dt(),i.sibling=null,t=hn.current,xe(hn,l?t&1|2:t&1),i):(Zt(i),null);case 22:case 23:return $i(i),$u(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Zt(i),i.subtreeFlags&6&&(i.flags|=8192)):Zt(i),s=i.updateQueue,s!==null&&tc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ve(xs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Qi(fn),Zt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function yx(t,i){switch(zu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Qi(fn),lt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ft(i),null;case 13:if($i(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));oo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ve(hn),null;case 4:return lt(),null;case 10:return Qi(i.type),null;case 22:case 23:return $i(i),$u(),t!==null&&ve(xs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Qi(fn),null;case 25:return null;default:return null}}function Ng(t,i){switch(zu(i),i.tag){case 3:Qi(fn),lt();break;case 26:case 27:case 5:Ft(i);break;case 4:lt();break;case 13:$i(i);break;case 19:ve(hn);break;case 10:Qi(i.type);break;case 22:case 23:$i(i),$u(),t!==null&&ve(xs);break;case 24:Qi(fn)}}function bo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(A){Wt(i,i.return,A)}}function Na(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=i;var I=s,J=A;try{J()}catch(ce){Wt(f,I,ce)}}}l=l.next}while(l!==m)}}catch(ce){Wt(i,i.return,ce)}}function Og(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Sm(i,s)}catch(l){Wt(t,t.return,l)}}}function Pg(t,i,s){s.props=Ms(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,i,l)}}function Ao(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Wt(t,i,f)}}function Di(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Wt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Wt(t,i,f)}else s.current=null}function Ig(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Wt(t,t.return,f)}}function wf(t,i,s){try{var l=t.stateNode;Hx(l,t.type,s,i),l[En]=i}catch(f){Wt(t,t.return,f)}}function Bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=dc));else if(l!==4&&(l===27&&Ga(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Df(t,i,s),t=t.sibling;t!==null;)Df(t,i,s),t=t.sibling}function nc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Ga(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(nc(t,i,s),t=t.sibling;t!==null;)nc(t,i,s),t=t.sibling}function Fg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Rn(i,l,s),i[cn]=t,i[En]=s}catch(m){Wt(t,t.return,m)}}var na=!1,an=!1,Lf=!1,zg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function xx(t,i){if(t=t.containerInfo,th=xc,t=Zp(t),wu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var M=0,A=-1,I=-1,J=0,ce=0,me=t,ne=null;t:for(;;){for(var ie;me!==s||f!==0&&me.nodeType!==3||(A=M+f),me!==m||l!==0&&me.nodeType!==3||(I=M+l),me.nodeType===3&&(M+=me.nodeValue.length),(ie=me.firstChild)!==null;)ne=me,me=ie;for(;;){if(me===t)break t;if(ne===s&&++J===f&&(A=M),ne===m&&++ce===l&&(I=M),(ie=me.nextSibling)!==null)break;me=ne,ne=me.parentNode}me=ie}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(nh={focusedElem:t,selectionRange:s},xc=!1,vn=i;vn!==null;)if(i=vn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,vn=t;else for(;vn!==null;){switch(i=vn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var et=Ms(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(et,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){Wt(s,s.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)sh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,vn=t;break}vn=i.return}}function Hg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Oa(t,s),l&4&&bo(5,s);break;case 1:if(Oa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Wt(s,s.return,M)}else{var f=Ms(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Wt(s,s.return,M)}}l&64&&Og(s),l&512&&Ao(s,s.return);break;case 3:if(Oa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Sm(t,i)}catch(M){Wt(s,s.return,M)}}break;case 27:i===null&&l&4&&Fg(s);case 26:case 5:Oa(t,s),i===null&&l&4&&Ig(s),l&512&&Ao(s,s.return);break;case 12:Oa(t,s);break;case 13:Oa(t,s),l&4&&kg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Cx.bind(null,s),Yx(t,s))));break;case 22:if(l=s.memoizedState!==null||na,!l){i=i!==null&&i.memoizedState!==null||an,f=na;var m=an;na=l,(an=i)&&!m?Pa(t,s,(s.subtreeFlags&8772)!==0):Oa(t,s),na=f,an=m}break;case 30:break;default:Oa(t,s)}}function Gg(t){var i=t.alternate;i!==null&&(t.alternate=null,Gg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ma(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,qn=!1;function ia(t,i,s){for(s=s.child;s!==null;)Vg(t,i,s),s=s.sibling}function Vg(t,i,s){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(fe,s)}catch{}switch(s.tag){case 26:an||Di(s,i),ia(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:an||Di(s,i);var l=Kt,f=qn;Ga(s.type)&&(Kt=s.stateNode,qn=!1),ia(t,i,s),Po(s.stateNode),Kt=l,qn=f;break;case 5:an||Di(s,i);case 6:if(l=Kt,f=qn,Kt=null,ia(t,i,s),Kt=l,qn=f,Kt!==null)if(qn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(s.stateNode)}catch(m){Wt(s,i,m)}else try{Kt.removeChild(s.stateNode)}catch(m){Wt(s,i,m)}break;case 18:Kt!==null&&(qn?(t=Kt,D_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),ko(t)):D_(Kt,s.stateNode));break;case 4:l=Kt,f=qn,Kt=s.stateNode.containerInfo,qn=!0,ia(t,i,s),Kt=l,qn=f;break;case 0:case 11:case 14:case 15:an||Na(2,s,i),an||Na(4,s,i),ia(t,i,s);break;case 1:an||(Di(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Pg(s,i,l)),ia(t,i,s);break;case 21:ia(t,i,s);break;case 22:an=(l=an)||s.memoizedState!==null,ia(t,i,s),an=l;break;default:ia(t,i,s)}}function kg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ko(t)}catch(s){Wt(i,i.return,s)}}function Sx(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new zg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new zg),i;default:throw Error(a(435,t.tag))}}function Uf(t,i){var s=Sx(t);i.forEach(function(l){var f=Dx.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,M=i,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Kt=A.stateNode,qn=!1;break e}break;case 5:Kt=A.stateNode,qn=!1;break e;case 3:case 4:Kt=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(Kt===null)throw Error(a(160));Vg(m,M,f),Kt=null,qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Xg(i,t),i=i.sibling}var _i=null;function Xg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(i,t),$n(t),l&4&&(Na(3,t,t.return),bo(3,t),Na(5,t,t.return));break;case 1:Jn(i,t),$n(t),l&512&&(an||s===null||Di(s,s.return)),l&64&&na&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=_i;if(Jn(i,t),$n(t),l&512&&(an||s===null||Di(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Sa]||m[cn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Rn(m,l,s),m[cn]=t,sn(m),l=m;break e;case"link":var M=F_("link","href",f).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break t}}m=f.createElement(l),Rn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=F_("meta","content",f).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break t}}m=f.createElement(l),Rn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[cn]=t,sn(m),l=m}t.stateNode=l}else z_(f,t.type,t.stateNode);else t.stateNode=B_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?z_(f,t.type,t.stateNode):B_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&wf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,t),$n(t),l&512&&(an||s===null||Di(s,s.return)),s!==null&&l&4&&wf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,t),$n(t),l&512&&(an||s===null||Di(s,s.return)),t.flags&32){f=t.stateNode;try{Ri(f,"")}catch(ie){Wt(t,t.return,ie)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,wf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Lf=!0);break;case 6:if(Jn(i,t),$n(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ie){Wt(t,t.return,ie)}}break;case 3:if(_c=null,f=_i,_i=mc(i.containerInfo),Jn(i,t),_i=f,$n(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ko(i.containerInfo)}catch(ie){Wt(t,t.return,ie)}Lf&&(Lf=!1,Wg(t));break;case 4:l=_i,_i=mc(t.stateNode.containerInfo),Jn(i,t),$n(t),_i=l;break;case 12:Jn(i,t),$n(t);break;case 13:Jn(i,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ff=dt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Uf(t,l)));break;case 22:f=t.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,J=na,ce=an;if(na=J||f,an=ce||I,Jn(i,t),an=ce,na=J,$n(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||na||an||Es(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(m=I.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=I.stateNode;var me=I.memoizedProps.style,ne=me!=null&&me.hasOwnProperty("display")?me.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Wt(I,I.return,ie)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(ie){Wt(I,I.return,ie)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Uf(t,s))));break;case 19:Jn(i,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Uf(t,l)));break;case 30:break;case 21:break;default:Jn(i,t),$n(t)}}function $n(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Bg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Cf(t);nc(t,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Ri(M,""),s.flags&=-33);var A=Cf(t);nc(t,A,M);break;case 3:case 4:var I=s.stateNode.containerInfo,J=Cf(t);Df(t,J,I);break;default:throw Error(a(161))}}catch(ce){Wt(t,t.return,ce)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Wg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Oa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Hg(t,i.alternate,i),i=i.sibling}function Es(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Na(4,i,i.return),Es(i);break;case 1:Di(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Pg(i,i.return,s),Es(i);break;case 27:Po(i.stateNode);case 26:case 5:Di(i,i.return),Es(i);break;case 22:i.memoizedState===null&&Es(i);break;case 30:Es(i);break;default:Es(i)}t=t.sibling}}function Pa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Pa(f,m,s),bo(4,m);break;case 1:if(Pa(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(J){Wt(l,l.return,J)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)xm(I[f],A)}catch(J){Wt(l,l.return,J)}}s&&M&64&&Og(m),Ao(m,m.return);break;case 27:Fg(m);case 26:case 5:Pa(f,m,s),s&&l===null&&M&4&&Ig(m),Ao(m,m.return);break;case 12:Pa(f,m,s);break;case 13:Pa(f,m,s),s&&M&4&&kg(f,m);break;case 22:m.memoizedState===null&&Pa(f,m,s),Ao(m,m.return);break;case 30:break;default:Pa(f,m,s)}i=i.sibling}}function Nf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&uo(s))}function Of(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&uo(t))}function Li(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qg(t,i,s,l),i=i.sibling}function qg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Li(t,i,s,l),f&2048&&bo(9,i);break;case 1:Li(t,i,s,l);break;case 3:Li(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&uo(t)));break;case 12:if(f&2048){Li(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Wt(i,i.return,I)}}else Li(t,i,s,l);break;case 13:Li(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Li(t,i,s,l):Ro(t,i):m._visibility&2?Li(t,i,s,l):(m._visibility|=2,ar(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&Nf(M,i);break;case 24:Li(t,i,s,l),f&2048&&Of(i.alternate,i);break;default:Li(t,i,s,l)}}function ar(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,M=i,A=s,I=l,J=M.flags;switch(M.tag){case 0:case 11:case 15:ar(m,M,A,I,f),bo(8,M);break;case 23:break;case 22:var ce=M.stateNode;M.memoizedState!==null?ce._visibility&2?ar(m,M,A,I,f):Ro(m,M):(ce._visibility|=2,ar(m,M,A,I,f)),f&&J&2048&&Nf(M.alternate,M);break;case 24:ar(m,M,A,I,f),f&&J&2048&&Of(M.alternate,M);break;default:ar(m,M,A,I,f)}i=i.sibling}}function Ro(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Ro(s,l),f&2048&&Nf(l.alternate,l);break;case 24:Ro(s,l),f&2048&&Of(l.alternate,l);break;default:Ro(s,l)}i=i.sibling}}var wo=8192;function sr(t){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)Yg(t),t=t.sibling}function Yg(t){switch(t.tag){case 26:sr(t),t.flags&wo&&t.memoizedState!==null&&rS(_i,t.memoizedState,t.memoizedProps);break;case 5:sr(t);break;case 3:case 4:var i=_i;_i=mc(t.stateNode.containerInfo),sr(t),_i=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=wo,wo=16777216,sr(t),wo=i):sr(t));break;default:sr(t)}}function jg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Co(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,Zg(l,t)}jg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Na(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ic(t)):Co(t);break;default:Co(t)}}function ic(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,Zg(l,t)}jg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Na(8,i,i.return),ic(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ic(i));break;default:ic(i)}t=t.sibling}}function Zg(t,i){for(;vn!==null;){var s=vn;switch(s.tag){case 0:case 11:case 15:Na(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:uo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,vn=l;else e:for(s=t;vn!==null;){l=vn;var f=l.sibling,m=l.return;if(Gg(l),l===s){vn=null;break e}if(f!==null){f.return=m,vn=f;break e}vn=m}}}var Mx={getCacheForType:function(t){var i=Ln(fn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Ex=typeof WeakMap=="function"?WeakMap:Map,Ot=0,jt=null,pt=null,Et=0,Pt=0,ei=null,Ia=!1,rr=!1,Pf=!1,aa=0,en=0,Ba=0,Ts=0,If=0,fi=0,or=0,Do=null,Yn=null,Bf=!1,Ff=0,ac=1/0,sc=null,Fa=null,An=0,za=null,lr=null,cr=0,zf=0,Hf=null,Qg=null,Lo=0,Gf=null;function ti(){if((Ot&2)!==0&&Et!==0)return Et&-Et;if(P.T!==null){var t=Zs;return t!==0?t:jf()}return wt()}function Jg(){fi===0&&(fi=(Et&536870912)===0||Lt?V():536870912);var t=ui.current;return t!==null&&(t.flags|=32),fi}function ni(t,i,s){(t===jt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(ur(t,0),Ha(t,Et,fi,!1)),Ie(t,s),((Ot&2)===0||t!==jt)&&(t===jt&&((Ot&2)===0&&(Ts|=s),en===4&&Ha(t,Et,fi,!1)),Ui(t))}function $g(t,i,s){if((Ot&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Re(t,i),f=l?Ax(t,i):Xf(t,i,!0),m=l;do{if(f===0){rr&&!l&&Ha(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Tx(s)){f=Xf(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var A=t;f=Do;var I=A.current.memoizedState.isDehydrated;if(I&&(ur(A,M).flags|=256),M=Xf(A,M,!1),M!==2){if(Pf&&!I){A.errorRecoveryDisabledLanes|=m,Ts|=m,f=4;break e}m=Yn,Yn=f,m!==null&&(Yn===null?Yn=m:Yn.push.apply(Yn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){ur(t,0),Ha(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ha(l,i,fi,!Ia);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Ff+300-dt(),10<f)){if(Ha(l,i,fi,!Ia),qe(l,0,!0)!==0)break e;l.timeoutHandle=w_(e_.bind(null,l,s,Yn,sc,Bf,i,fi,Ts,or,Ia,m,2,-0,0),f);break e}e_(l,s,Yn,sc,Bf,i,fi,Ts,or,Ia,m,0,-0,0)}}break}while(!0);Ui(t)}function e_(t,i,s,l,f,m,M,A,I,J,ce,me,ne,ie){if(t.timeoutHandle=-1,me=i.subtreeFlags,(me&8192||(me&16785408)===16785408)&&(Fo={stylesheets:null,count:0,unsuspend:sS},Yg(i),me=oS(),me!==null)){t.cancelPendingCommit=me(o_.bind(null,t,i,m,s,l,f,M,A,I,ce,1,ne,ie)),Ha(t,m,M,!J);return}o_(t,i,m,s,l,f,M,A,I)}function Tx(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Zn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ha(t,i,s,l){i&=~If,i&=~Ts,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Oe(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&ge(t,s,i)}function rc(){return(Ot&6)===0?(Uo(0),!1):!0}function Vf(){if(pt!==null){if(Pt===0)var t=pt.return;else t=pt,Zi=vs=null,sf(t),nr=null,Mo=0,t=pt;for(;t!==null;)Ng(t.alternate,t),t=t.return;pt=null}}function ur(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Vx(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Vf(),jt=t,pt=s=Yi(t.current,null),Et=i,Pt=0,ei=null,Ia=!1,rr=Re(t,i),Pf=!1,or=fi=If=Ts=Ba=en=0,Yn=Do=null,Bf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Oe(l),m=1<<f;i|=t[f],l&=~m}return aa=i,wl(),s}function t_(t,i){ft=null,P.H=Yl,i===ho||i===Bl?(i=vm(),Pt=3):i===mm?(i=vm(),Pt=4):Pt=i===yg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,pt===null&&(en=1,Jl(t,ri(i,t.current)))}function n_(){var t=P.H;return P.H=Yl,t===null?Yl:t}function i_(){var t=P.A;return P.A=Mx,t}function kf(){en=4,Ia||(Et&4194048)!==Et&&ui.current!==null||(rr=!0),(Ba&134217727)===0&&(Ts&134217727)===0||jt===null||Ha(jt,Et,fi,!1)}function Xf(t,i,s){var l=Ot;Ot|=2;var f=n_(),m=i_();(jt!==t||Et!==i)&&(sc=null,ur(t,i)),i=!1;var M=en;e:do try{if(Pt!==0&&pt!==null){var A=pt,I=ei;switch(Pt){case 8:Vf(),M=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(i=!0);var J=Pt;if(Pt=0,ei=null,fr(t,A,I,J),s&&rr){M=0;break e}break;default:J=Pt,Pt=0,ei=null,fr(t,A,I,J)}}bx(),M=en;break}catch(ce){t_(t,ce)}while(!0);return i&&t.shellSuspendCounter++,Zi=vs=null,Ot=l,P.H=f,P.A=m,pt===null&&(jt=null,Et=0,wl()),M}function bx(){for(;pt!==null;)a_(pt)}function Ax(t,i){var s=Ot;Ot|=2;var l=n_(),f=i_();jt!==t||Et!==i?(sc=null,ac=dt()+500,ur(t,i)):rr=Re(t,i);e:do try{if(Pt!==0&&pt!==null){i=pt;var m=ei;t:switch(Pt){case 1:Pt=0,ei=null,fr(t,i,m,1);break;case 2:case 9:if(gm(m)){Pt=0,ei=null,s_(i);break}i=function(){Pt!==2&&Pt!==9||jt!==t||(Pt=7),Ui(t)},m.then(i,i);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:gm(m)?(Pt=0,ei=null,s_(i)):(Pt=0,ei=null,fr(t,i,m,7));break;case 5:var M=null;switch(pt.tag){case 26:M=pt.memoizedState;case 5:case 27:var A=pt;if(!M||H_(M)){Pt=0,ei=null;var I=A.sibling;if(I!==null)pt=I;else{var J=A.return;J!==null?(pt=J,oc(J)):pt=null}break t}}Pt=0,ei=null,fr(t,i,m,5);break;case 6:Pt=0,ei=null,fr(t,i,m,6);break;case 8:Vf(),en=6;break e;default:throw Error(a(462))}}Rx();break}catch(ce){t_(t,ce)}while(!0);return Zi=vs=null,P.H=l,P.A=f,Ot=s,pt!==null?0:(jt=null,Et=0,wl(),en)}function Rx(){for(;pt!==null&&!Mn();)a_(pt)}function a_(t){var i=Lg(t.alternate,t,aa);t.memoizedProps=t.pendingProps,i===null?oc(t):pt=i}function s_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=bg(s,i,i.pendingProps,i.type,void 0,Et);break;case 11:i=bg(s,i,i.pendingProps,i.type.render,i.ref,Et);break;case 5:sf(i);default:Ng(s,i),i=pt=rm(i,aa),i=Lg(s,i,aa)}t.memoizedProps=t.pendingProps,i===null?oc(t):pt=i}function fr(t,i,s,l){Zi=vs=null,sf(i),nr=null,Mo=0;var f=i.return;try{if(gx(t,f,i,s,Et)){en=1,Jl(t,ri(s,t.current)),pt=null;return}}catch(m){if(f!==null)throw pt=f,m;en=1,Jl(t,ri(s,t.current)),pt=null;return}i.flags&32768?(Lt||l===1?t=!0:rr||(Et&536870912)!==0?t=!1:(Ia=t=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),r_(i,t)):oc(i)}function oc(t){var i=t;do{if((i.flags&32768)!==0){r_(i,Ia);return}t=i.return;var s=vx(i.alternate,i,aa);if(s!==null){pt=s;return}if(i=i.sibling,i!==null){pt=i;return}pt=i=t}while(i!==null);en===0&&(en=5)}function r_(t,i){do{var s=yx(t.alternate,t);if(s!==null){s.flags&=32767,pt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){pt=t;return}pt=t=s}while(t!==null);en=6,pt=null}function o_(t,i,s,l,f,m,M,A,I){t.cancelPendingCommit=null;do lc();while(An!==0);if((Ot&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Nu,be(t,s,m,M,A,I),t===jt&&(pt=jt=null,Et=0),lr=i,za=t,cr=s,zf=m,Hf=f,Qg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Lx(it,function(){return h_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=ee.p,ee.p=2,M=Ot,Ot|=4;try{xx(t,i,s)}finally{Ot=M,ee.p=f,P.T=l}}An=1,l_(),c_(),u_()}}function l_(){if(An===1){An=0;var t=za,i=lr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=ee.p;ee.p=2;var f=Ot;Ot|=4;try{Xg(i,t);var m=nh,M=Zp(t.containerInfo),A=m.focusedElem,I=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&Kp(A.ownerDocument.documentElement,A)){if(I!==null&&wu(A)){var J=I.start,ce=I.end;if(ce===void 0&&(ce=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ce,A.value.length);else{var me=A.ownerDocument||document,ne=me&&me.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),et=A.textContent.length,Qe=Math.min(I.start,et),Gt=I.end===void 0?Qe:Math.min(I.end,et);!ie.extend&&Qe>Gt&&(M=Gt,Gt=Qe,Qe=M);var X=jp(A,Qe),G=jp(A,Gt);if(X&&G&&(ie.rangeCount!==1||ie.anchorNode!==X.node||ie.anchorOffset!==X.offset||ie.focusNode!==G.node||ie.focusOffset!==G.offset)){var Z=me.createRange();Z.setStart(X.node,X.offset),ie.removeAllRanges(),Qe>Gt?(ie.addRange(Z),ie.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),ie.addRange(Z))}}}}for(me=[],ie=A;ie=ie.parentNode;)ie.nodeType===1&&me.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<me.length;A++){var he=me[A];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}xc=!!th,nh=th=null}finally{Ot=f,ee.p=l,P.T=s}}t.current=i,An=2}}function c_(){if(An===2){An=0;var t=za,i=lr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=ee.p;ee.p=2;var f=Ot;Ot|=4;try{Hg(t,i.alternate,i)}finally{Ot=f,ee.p=l,P.T=s}}An=3}}function u_(){if(An===4||An===3){An=0,At();var t=za,i=lr,s=cr,l=Qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,lr=za=null,f_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Fa=null),Nt(s),i=i.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=ee.p,ee.p=2,P.T=null;try{for(var m=t.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{P.T=i,ee.p=f}}(cr&3)!==0&&lc(),Ui(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===Gf?Lo++:(Lo=0,Gf=t):Lo=0,Uo(0)}}function f_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,uo(i)))}function lc(t){return l_(),c_(),u_(),h_()}function h_(){if(An!==5)return!1;var t=za,i=zf;zf=0;var s=Nt(cr),l=P.T,f=ee.p;try{ee.p=32>s?32:s,P.T=null,s=Hf,Hf=null;var m=za,M=cr;if(An=0,lr=za=null,cr=0,(Ot&6)!==0)throw Error(a(331));var A=Ot;if(Ot|=4,Kg(m.current),qg(m,m.current,M,s),Ot=A,Uo(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(fe,m)}catch{}return!0}finally{ee.p=f,P.T=l,f_(t,i)}}function d_(t,i,s){i=ri(s,i),i=yf(t.stateNode,i,2),t=Ca(t,i,2),t!==null&&(Ie(t,2),Ui(t))}function Wt(t,i,s){if(t.tag===3)d_(t,t,s);else for(;i!==null;){if(i.tag===3){d_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Fa===null||!Fa.has(l))){t=ri(s,t),s=_g(2),l=Ca(i,s,2),l!==null&&(vg(s,l,i,t),Ie(l,2),Ui(l));break}}i=i.return}}function Wf(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Ex;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Pf=!0,f.add(s),t=wx.bind(null,t,i,s),i.then(t,t))}function wx(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,jt===t&&(Et&s)===s&&(en===4||en===3&&(Et&62914560)===Et&&300>dt()-Ff?(Ot&2)===0&&ur(t,0):If|=s,or===Et&&(or=0)),Ui(t)}function p_(t,i){i===0&&(i=Le()),t=qs(t,i),t!==null&&(Ie(t,i),Ui(t))}function Cx(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),p_(t,s)}function Dx(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),p_(t,s)}function Lx(t,i){return vt(t,i)}var cc=null,hr=null,qf=!1,uc=!1,Yf=!1,bs=0;function Ui(t){t!==hr&&t.next===null&&(hr===null?cc=hr=t:hr=hr.next=t),uc=!0,qf||(qf=!0,Nx())}function Uo(t,i){if(!Yf&&uc){Yf=!0;do for(var s=!1,l=cc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Oe(42|t)+1)-1,m&=f&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,v_(l,m))}else m=Et,m=qe(l,l===jt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Re(l,m)||(s=!0,v_(l,m));l=l.next}while(s);Yf=!1}}function Ux(){m_()}function m_(){uc=qf=!1;var t=0;bs!==0&&(Gx()&&(t=bs),bs=0);for(var i=dt(),s=null,l=cc;l!==null;){var f=l.next,m=g_(l,i);m===0?(l.next=null,s===null?cc=f:s.next=f,f===null&&(hr=s)):(s=l,(t!==0||(m&3)!==0)&&(uc=!0)),l=f}Uo(t)}function g_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var M=31-Oe(m),A=1<<M,I=f[M];I===-1?((A&s)===0||(A&l)!==0)&&(f[M]=nt(A,i)):I<=i&&(t.expiredLanes|=A),m&=~A}if(i=jt,s=Et,s=qe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&H(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Re(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&H(l),Nt(s)){case 2:case 8:s=Ye;break;case 32:s=it;break;case 268435456:s=O;break;default:s=it}return l=__.bind(null,t),s=vt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&H(l),t.callbackPriority=2,t.callbackNode=null,2}function __(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(lc()&&t.callbackNode!==s)return null;var l=Et;return l=qe(t,t===jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:($g(t,l,i),g_(t,dt()),t.callbackNode!=null&&t.callbackNode===s?__.bind(null,t):null)}function v_(t,i){if(lc())return null;$g(t,i,!0)}function Nx(){kx(function(){(Ot&6)!==0?vt(yt,Ux):m_()})}function jf(){return bs===0&&(bs=V()),bs}function y_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sl(""+t)}function x_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Ox(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=y_((f[En]||null).action),M=l.submitter;M&&(i=(i=M[En]||null)?y_(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var A=new bl("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(bs!==0){var I=M?x_(f,M):new FormData(f);pf(s,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(A.preventDefault(),I=M?x_(f,M):new FormData(f),pf(s,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Kf=0;Kf<Uu.length;Kf++){var Zf=Uu[Kf],Px=Zf.toLowerCase(),Ix=Zf[0].toUpperCase()+Zf.slice(1);gi(Px,"on"+Ix)}gi($p,"onAnimationEnd"),gi(em,"onAnimationIteration"),gi(tm,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi($y,"onTransitionRun"),gi(ex,"onTransitionStart"),gi(tx,"onTransitionCancel"),gi(nm,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function S_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var A=l[M],I=A.instance,J=A.currentTarget;if(A=A.listener,I!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=J;try{m(f)}catch(ce){Ql(ce)}f.currentTarget=null,m=I}else for(M=0;M<l.length;M++){if(A=l[M],I=A.instance,J=A.currentTarget,A=A.listener,I!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=J;try{m(f)}catch(ce){Ql(ce)}f.currentTarget=null,m=I}}}}function mt(t,i){var s=i[os];s===void 0&&(s=i[os]=new Set);var l=t+"__bubble";s.has(l)||(M_(i,t,2,!1),s.add(l))}function Qf(t,i,s){var l=0;i&&(l|=4),M_(s,t,l,i)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[fc]){t[fc]=!0,yl.forEach(function(s){s!=="selectionchange"&&(Bx.has(s)||Qf(s,!1,t),Qf(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fc]||(i[fc]=!0,Qf("selectionchange",!1,i))}}function M_(t,i,s,l){switch(q_(i)){case 2:var f=uS;break;case 8:f=fS;break;default:f=hh}s=f.bind(null,i,s,t),f=void 0,!yu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function $f(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=Gi(A),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){l=m=M;continue e}A=A.parentNode}}l=l.return}Cp(function(){var J=m,ce=_u(s),me=[];e:{var ne=im.get(t);if(ne!==void 0){var ie=bl,et=t;switch(t){case"keypress":if(El(s)===0)break e;case"keydown":case"keyup":ie=Ly;break;case"focusin":et="focus",ie=Eu;break;case"focusout":et="blur",ie=Eu;break;case"beforeblur":case"afterblur":ie=Eu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Oy;break;case $p:case em:case tm:ie=My;break;case nm:ie=Iy;break;case"scroll":case"scrollend":ie=_y;break;case"wheel":ie=Fy;break;case"copy":case"cut":case"paste":ie=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Op;break;case"toggle":case"beforetoggle":ie=Hy}var Qe=(i&4)!==0,Gt=!Qe&&(t==="scroll"||t==="scrollend"),X=Qe?ne!==null?ne+"Capture":null:ne;Qe=[];for(var G=J,Z;G!==null;){var he=G;if(Z=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||Z===null||X===null||(he=Qr(G,X),he!=null&&Qe.push(Oo(G,he,Z))),Gt)break;G=G.return}0<Qe.length&&(ne=new ie(ne,et,null,s,ce),me.push({event:ne,listeners:Qe}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&s!==gu&&(et=s.relatedTarget||s.fromElement)&&(Gi(et)||et[kn]))break e;if((ie||ne)&&(ne=ce.window===ce?ce:(ne=ce.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(et=s.relatedTarget||s.toElement,ie=J,et=et?Gi(et):null,et!==null&&(Gt=c(et),Qe=et.tag,et!==Gt||Qe!==5&&Qe!==27&&Qe!==6)&&(et=null)):(ie=null,et=J),ie!==et)){if(Qe=Up,he="onMouseLeave",X="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=Op,he="onPointerLeave",X="onPointerEnter",G="pointer"),Gt=ie==null?ne:cs(ie),Z=et==null?ne:cs(et),ne=new Qe(he,G+"leave",ie,s,ce),ne.target=Gt,ne.relatedTarget=Z,he=null,Gi(ce)===J&&(Qe=new Qe(X,G+"enter",et,s,ce),Qe.target=Z,Qe.relatedTarget=Gt,he=Qe),Gt=he,ie&&et)t:{for(Qe=ie,X=et,G=0,Z=Qe;Z;Z=dr(Z))G++;for(Z=0,he=X;he;he=dr(he))Z++;for(;0<G-Z;)Qe=dr(Qe),G--;for(;0<Z-G;)X=dr(X),Z--;for(;G--;){if(Qe===X||X!==null&&Qe===X.alternate)break t;Qe=dr(Qe),X=dr(X)}Qe=null}else Qe=null;ie!==null&&E_(me,ne,ie,Qe,!1),et!==null&&Gt!==null&&E_(me,Gt,et,Qe,!0)}}e:{if(ne=J?cs(J):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var ze=Vp;else if(Hp(ne))if(kp)ze=Zy;else{ze=jy;var ht=Yy}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?J&&mu(J.elementType)&&(ze=Vp):ze=Ky;if(ze&&(ze=ze(t,J))){Gp(me,ze,s,ce);break e}ht&&ht(t,ne,J),t==="focusout"&&J&&ne.type==="number"&&J.memoizedProps.value!=null&&Dn(ne,"number",ne.value)}switch(ht=J?cs(J):window,t){case"focusin":(Hp(ht)||ht.contentEditable==="true")&&(ks=ht,Cu=J,so=null);break;case"focusout":so=Cu=ks=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Qp(me,s,ce);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Qp(me,s,ce)}var Xe;if(bu)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Vs?Fp(t,s)&&($e="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&($e="onCompositionStart");$e&&(Pp&&s.locale!=="ko"&&(Vs||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Vs&&(Xe=Dp()):(ba=ce,xu="value"in ba?ba.value:ba.textContent,Vs=!0)),ht=hc(J,$e),0<ht.length&&($e=new Np($e,t,null,s,ce),me.push({event:$e,listeners:ht}),Xe?$e.data=Xe:(Xe=zp(s),Xe!==null&&($e.data=Xe)))),(Xe=Vy?ky(t,s):Xy(t,s))&&($e=hc(J,"onBeforeInput"),0<$e.length&&(ht=new Np("onBeforeInput","beforeinput",null,s,ce),me.push({event:ht,listeners:$e}),ht.data=Xe)),Ox(me,t,J,s,ce)}S_(me,i)})}function Oo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function hc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Qr(t,s),f!=null&&l.unshift(Oo(t,f,m)),f=Qr(t,i),f!=null&&l.push(Oo(t,f,m))),t.tag===3)return l;t=t.return}return[]}function dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E_(t,i,s,l,f){for(var m=i._reactName,M=[];s!==null&&s!==l;){var A=s,I=A.alternate,J=A.stateNode;if(A=A.tag,I!==null&&I===l)break;A!==5&&A!==26&&A!==27||J===null||(I=J,f?(J=Qr(s,m),J!=null&&M.unshift(Oo(s,J,I))):f||(J=Qr(s,m),J!=null&&M.push(Oo(s,J,I)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Fx=/\r\n?/g,zx=/\u0000|\uFFFD/g;function T_(t){return(typeof t=="string"?t:""+t).replace(Fx,`
`).replace(zx,"")}function b_(t,i){return i=T_(i),T_(t)===i}function dc(){}function Ht(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ri(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ri(t,""+l);break;case"className":Ce(t,"class",l);break;case"tabIndex":Ce(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(t,s,l);break;case"style":Rp(t,l,m);break;case"data":if(i!=="object"){Ce(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Sl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ht(t,i,"name",f.name,f,null),Ht(t,i,"formEncType",f.formEncType,f,null),Ht(t,i,"formMethod",f.formMethod,f,null),Ht(t,i,"formTarget",f.formTarget,f,null)):(Ht(t,i,"encType",f.encType,f,null),Ht(t,i,"method",f.method,f,null),Ht(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Sl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=dc);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Sl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Te(t,"popover",l);break;case"xlinkActuate":Ne(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ne(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ne(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ne(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ne(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ne(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Te(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=my.get(s)||s,Te(t,s,l))}}function eh(t,i,s,l,f,m){switch(s){case"style":Rp(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Ri(t,l):(typeof l=="number"||typeof l=="bigint")&&Ri(t,""+l);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[En]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Te(t,s,l)}}}function Rn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ht(t,i,m,M,s,null)}}f&&Ht(t,i,"srcSet",s.srcSet,s,null),l&&Ht(t,i,"src",s.src,s,null);return;case"input":mt("invalid",t);var A=m=M=f=null,I=null,J=null;for(l in s)if(s.hasOwnProperty(l)){var ce=s[l];if(ce!=null)switch(l){case"name":f=ce;break;case"type":M=ce;break;case"checked":I=ce;break;case"defaultChecked":J=ce;break;case"value":m=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:Ht(t,i,l,ce,s,null)}}Xt(t,m,A,I,J,M,f,!1),Jt(t);return;case"select":mt("invalid",t),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Ht(t,i,f,A,s,null)}i=m,s=M,t.multiple=!!l,i!=null?un(t,!!l,i,!1):s!=null&&un(t,!!l,s,!0);return;case"textarea":mt("invalid",t),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Ht(t,i,M,A,s,null)}Tn(t,l,f,m),Jt(t);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ht(t,i,I,l,s,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(l=0;l<No.length;l++)mt(No[l],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(l=s[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ht(t,i,J,l,s,null)}return;default:if(mu(i)){for(ce in s)s.hasOwnProperty(ce)&&(l=s[ce],l!==void 0&&eh(t,i,ce,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Ht(t,i,A,l,s,null))}function Hx(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,A=null,I=null,J=null,ce=null;for(ie in s){var me=s[ie];if(s.hasOwnProperty(ie)&&me!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":I=me;default:l.hasOwnProperty(ie)||Ht(t,i,ie,null,l,me)}}for(var ne in l){var ie=l[ne];if(me=s[ne],l.hasOwnProperty(ne)&&(ie!=null||me!=null))switch(ne){case"type":m=ie;break;case"name":f=ie;break;case"checked":J=ie;break;case"defaultChecked":ce=ie;break;case"value":M=ie;break;case"defaultValue":A=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,i));break;default:ie!==me&&Ht(t,i,ne,ie,l,me)}}Xi(t,M,A,I,J,ce,m,f);return;case"select":ie=M=A=ne=null;for(m in s)if(I=s[m],s.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":ie=I;default:l.hasOwnProperty(m)||Ht(t,i,m,null,l,I)}for(f in l)if(m=l[f],I=s[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":ne=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==I&&Ht(t,i,f,m,l,I)}i=A,s=M,l=ie,ne!=null?un(t,!!s,ne,!1):!!l!=!!s&&(i!=null?un(t,!!s,i,!0):un(t,!!s,s?[]:"",!1));return;case"textarea":ie=ne=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ht(t,i,A,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":ne=f;break;case"defaultValue":ie=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Ht(t,i,M,f,l,m)}gn(t,ne,ie);return;case"option":for(var et in s)if(ne=s[et],s.hasOwnProperty(et)&&ne!=null&&!l.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Ht(t,i,et,null,l,ne)}for(I in l)if(ne=l[I],ie=s[I],l.hasOwnProperty(I)&&ne!==ie&&(ne!=null||ie!=null))switch(I){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Ht(t,i,I,ne,l,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in s)ne=s[Qe],s.hasOwnProperty(Qe)&&ne!=null&&!l.hasOwnProperty(Qe)&&Ht(t,i,Qe,null,l,ne);for(J in l)if(ne=l[J],ie=s[J],l.hasOwnProperty(J)&&ne!==ie&&(ne!=null||ie!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,i));break;default:Ht(t,i,J,ne,l,ie)}return;default:if(mu(i)){for(var Gt in s)ne=s[Gt],s.hasOwnProperty(Gt)&&ne!==void 0&&!l.hasOwnProperty(Gt)&&eh(t,i,Gt,void 0,l,ne);for(ce in l)ne=l[ce],ie=s[ce],!l.hasOwnProperty(ce)||ne===ie||ne===void 0&&ie===void 0||eh(t,i,ce,ne,l,ie);return}}for(var X in s)ne=s[X],s.hasOwnProperty(X)&&ne!=null&&!l.hasOwnProperty(X)&&Ht(t,i,X,null,l,ne);for(me in l)ne=l[me],ie=s[me],!l.hasOwnProperty(me)||ne===ie||ne==null&&ie==null||Ht(t,i,me,ne,l,ie)}var th=null,nh=null;function pc(t){return t.nodeType===9?t:t.ownerDocument}function A_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function ih(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ah=null;function Gx(){var t=window.event;return t&&t.type==="popstate"?t===ah?!1:(ah=t,!0):(ah=null,!1)}var w_=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(Xx)}:w_;function Xx(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function D_(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=t.ownerDocument;if(s&1&&Po(M.documentElement),s&2&&Po(M.body),s&4)for(s=M.head,Po(s),M=s.firstChild;M;){var A=M.nextSibling,I=M.nodeName;M[Sa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(f===0){t.removeChild(m),ko(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);ko(i)}function sh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":sh(s),Ma(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Wx(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Sa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function qx(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=vi(t.nextSibling),t===null))return null;return t}function rh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Yx(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function vi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var oh=null;function L_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function U_(t,i,s){switch(i=pc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Po(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ma(t)}var hi=new Map,N_=new Set;function mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=ee.d;ee.d={f:jx,r:Kx,D:Zx,C:Qx,L:Jx,m:$x,X:tS,S:eS,M:nS};function jx(){var t=sa.f(),i=rc();return t||i}function Kx(t){var i=Vi(t);i!==null&&i.tag===5&&i.type==="form"?$m(i):sa.r(t)}var pr=typeof document>"u"?null:document;function O_(t,i,s){var l=pr;if(l&&typeof i=="string"&&i){var f=Yt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),N_.has(f)||(N_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Rn(i,"link",t),sn(i),l.head.appendChild(i)))}}function Zx(t){sa.D(t),O_("dns-prefetch",t,null)}function Qx(t,i){sa.C(t,i),O_("preconnect",t,i)}function Jx(t,i,s){sa.L(t,i,s);var l=pr;if(l&&t&&i){var f='link[rel="preload"][as="'+Yt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Yt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Yt(s.imageSizes)+'"]')):f+='[href="'+Yt(t)+'"]';var m=f;switch(i){case"style":m=mr(t);break;case"script":m=gr(t)}hi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),hi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Io(m))||i==="script"&&l.querySelector(Bo(m))||(i=l.createElement("link"),Rn(i,"link",t),sn(i),l.head.appendChild(i)))}}function $x(t,i){sa.m(t,i);var s=pr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Yt(l)+'"][href="'+Yt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=gr(t)}if(!hi.has(m)&&(t=g({rel:"modulepreload",href:t},i),hi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Bo(m)))return}l=s.createElement("link"),Rn(l,"link",t),sn(l),s.head.appendChild(l)}}}function eS(t,i,s){sa.S(t,i,s);var l=pr;if(l&&t){var f=Ea(l).hoistableStyles,m=mr(t);i=i||"default";var M=f.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(Io(m)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=hi.get(m))&&lh(t,s);var I=M=l.createElement("link");sn(I),Rn(I,"link",t),I._p=new Promise(function(J,ce){I.onload=J,I.onerror=ce}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,gc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(m,M)}}}function tS(t,i){sa.X(t,i);var s=pr;if(s&&t){var l=Ea(s).hoistableScripts,f=gr(t),m=l.get(f);m||(m=s.querySelector(Bo(f)),m||(t=g({src:t,async:!0},i),(i=hi.get(f))&&ch(t,i),m=s.createElement("script"),sn(m),Rn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function nS(t,i){sa.M(t,i);var s=pr;if(s&&t){var l=Ea(s).hoistableScripts,f=gr(t),m=l.get(f);m||(m=s.querySelector(Bo(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=hi.get(f))&&ch(t,i),m=s.createElement("script"),sn(m),Rn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function P_(t,i,s,l){var f=(f=Se.current)?mc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=mr(s.href),s=Ea(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=mr(s.href);var m=Ea(f).hoistableStyles,M=m.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,M),(m=f.querySelector(Io(t)))&&!m._p&&(M.instance=m,M.state.loading=5),hi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(t,s),m||iS(f,t,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=gr(s),s=Ea(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function mr(t){return'href="'+Yt(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function I_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function iS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Rn(i,"link",s),sn(i),t.head.appendChild(i))}function gr(t){return'[src="'+Yt(t)+'"]'}function Bo(t){return"script[async]"+t}function B_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Yt(s.href)+'"]');if(l)return i.instance=l,sn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),sn(l),Rn(l,"style",f),gc(l,s.precedence,t),i.instance=l;case"stylesheet":f=mr(s.href);var m=t.querySelector(Io(f));if(m)return i.state.loading|=4,i.instance=m,sn(m),m;l=I_(s),(f=hi.get(f))&&lh(l,f),m=(t.ownerDocument||t).createElement("link"),sn(m);var M=m;return M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),Rn(m,"link",l),i.state.loading|=4,gc(m,s.precedence,t),i.instance=m;case"script":return m=gr(s.src),(f=t.querySelector(Bo(m)))?(i.instance=f,sn(f),f):(l=s,(f=hi.get(m))&&(l=g({},s),ch(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),sn(f),Rn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,gc(l,s.precedence,t));return i.instance}function gc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===i)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function lh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ch(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var _c=null;function F_(t,i,s){if(_c===null){var l=new Map,f=_c=new Map;f.set(s,l)}else f=_c,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Sa]||m[cn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=t+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function z_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function aS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function H_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Fo=null;function sS(){}function rS(t,i,s){if(Fo===null)throw Error(a(475));var l=Fo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=mr(s.href),m=t.querySelector(Io(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=vc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,sn(m);return}m=t.ownerDocument||t,s=I_(s),(f=hi.get(f))&&lh(s,f),m=m.createElement("link"),sn(m);var M=m;M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),Rn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=vc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function oS(){if(Fo===null)throw Error(a(475));var t=Fo;return t.stylesheets&&t.count===0&&uh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&uh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)uh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yc=null;function uh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yc=new Map,i.forEach(lS,t),yc=null,vc.call(t))}function lS(t,i){if(!(i.state.loading&4)){var s=yc.get(t);if(s)var l=s.get(null);else{s=new Map,yc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=vc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var zo={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function cS(t,i,s,l,f,m,M,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function G_(t,i,s,l,f,m,M,A,I,J,ce,me){return t=new cS(t,i,s,M,A,I,J,me),i=1,m===!0&&(i|=24),m=Qn(3,null,null,i),t.current=m,m.stateNode=t,i=Xu(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},ju(m),t}function V_(t){return t?(t=Ys,t):Ys}function k_(t,i,s,l,f,m){f=V_(f),l.context===null?l.context=f:l.pendingContext=f,l=wa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ca(t,l,i),s!==null&&(ni(s,t,i),mo(s,t,i))}function X_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function fh(t,i){X_(t,i),(t=t.alternate)&&X_(t,i)}function W_(t){if(t.tag===13){var i=qs(t,67108864);i!==null&&ni(i,t,67108864),fh(t,67108864)}}var xc=!0;function uS(t,i,s,l){var f=P.T;P.T=null;var m=ee.p;try{ee.p=2,hh(t,i,s,l)}finally{ee.p=m,P.T=f}}function fS(t,i,s,l){var f=P.T;P.T=null;var m=ee.p;try{ee.p=8,hh(t,i,s,l)}finally{ee.p=m,P.T=f}}function hh(t,i,s,l){if(xc){var f=dh(l);if(f===null)$f(t,i,l,Sc,s),Y_(t,l);else if(dS(f,t,i,s,l))l.stopPropagation();else if(Y_(t,l),i&4&&-1<hS.indexOf(t)){for(;f!==null;){var m=Vi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=We(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var I=1<<31-Oe(M);A.entanglements[1]|=I,M&=~I}Ui(m),(Ot&6)===0&&(ac=dt()+500,Uo(0))}}break;case 13:A=qs(m,2),A!==null&&ni(A,m,2),rc(),fh(m,2)}if(m=dh(l),m===null&&$f(t,i,l,Sc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else $f(t,i,l,null,s)}}function dh(t){return t=_u(t),ph(t)}var Sc=null;function ph(t){if(Sc=null,t=Gi(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Sc=t,null}function q_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case yt:return 2;case Ye:return 8;case it:case tn:return 32;case O:return 268435456;default:return 32}default:return 32}}var mh=!1,Va=null,ka=null,Xa=null,Ho=new Map,Go=new Map,Wa=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y_(t,i){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Ho.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(i.pointerId)}}function Vo(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Vi(i),i!==null&&W_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function dS(t,i,s,l,f){switch(i){case"focusin":return Va=Vo(Va,t,i,s,l,f),!0;case"dragenter":return ka=Vo(ka,t,i,s,l,f),!0;case"mouseover":return Xa=Vo(Xa,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Ho.set(m,Vo(Ho.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Go.set(m,Vo(Go.get(m)||null,t,i,s,l,f)),!0}return!1}function j_(t){var i=Gi(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Kn(t.priority,function(){if(s.tag===13){var l=ti();l=tt(l);var f=qs(s,l);f!==null&&ni(f,s,l),fh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=dh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);gu=l,s.target.dispatchEvent(l),gu=null}else return i=Vi(s),i!==null&&W_(i),t.blockedOn=s,!1;i.shift()}return!0}function K_(t,i,s){Mc(t)&&s.delete(i)}function pS(){mh=!1,Va!==null&&Mc(Va)&&(Va=null),ka!==null&&Mc(ka)&&(ka=null),Xa!==null&&Mc(Xa)&&(Xa=null),Ho.forEach(K_),Go.forEach(K_)}function Ec(t,i){t.blockedOn===i&&(t.blockedOn=null,mh||(mh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pS)))}var Tc=null;function Z_(t){Tc!==t&&(Tc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Tc===t&&(Tc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(ph(l||s)===null)continue;break}var m=Vi(s);m!==null&&(t.splice(i,3),i-=3,pf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function ko(t){function i(I){return Ec(I,t)}Va!==null&&Ec(Va,t),ka!==null&&Ec(ka,t),Xa!==null&&Ec(Xa,t),Ho.forEach(i),Go.forEach(i);for(var s=0;s<Wa.length;s++){var l=Wa[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Wa.length&&(s=Wa[0],s.blockedOn===null);)j_(s),s.blockedOn===null&&Wa.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[En]||null;if(typeof m=="function")M||Z_(s);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[En]||null)A=M.formAction;else if(ph(f)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Z_(s)}}}function gh(t){this._internalRoot=t}bc.prototype.render=gh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ti();k_(s,l,t,i,null,null)},bc.prototype.unmount=gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;k_(t.current,2,null,t,null,null),rc(),i[kn]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var i=wt();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Wa.length&&i!==0&&i<Wa[s].priority;s++);Wa.splice(s,0,t),s===0&&j_(t)}};var Q_=e.version;if(Q_!=="19.1.0")throw Error(a(527,Q_,"19.1.0"));ee.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var mS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{fe=Ac.inject(mS),de=Ac}catch{}}return el.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",f=dg,m=pg,M=mg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=G_(t,1,!1,null,null,s,l,f,m,M,A,null),t[kn]=i.current,Jf(t),new gh(i)},el.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,f="",m=dg,M=pg,A=mg,I=null,J=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&(J=s.formState)),i=G_(t,1,!0,i,s??null,l,f,m,M,A,I,J),i.context=V_(null),s=i.current,l=ti(),l=tt(l),f=wa(l),f.callback=null,Ca(s,f,l),s=l,i.current.lanes=s,Ie(i,s),Ui(i),t[kn]=i.current,Jf(t),new bc(i)},el.version="19.1.0",el}var L0;function vw(){if(L0)return id.exports;L0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=_w(),id.exports}var yw=vw();const od=""+new URL("svg/Q_BurgerIcon.svg",import.meta.url).href,ld=""+new URL("svg/Q_SearchIconMobile.svg",import.meta.url).href,cd=""+new URL("Q_LogoMobile.png",import.meta.url).href,xw=[{text:"Адренохром — эликсир вечной молодости знаменитостей ↗",href:"./adrenochrome.html"},{text:"10 прогнозов для мира в 2030 году ↗",href:"./ten-predictions.html"},{text:"Вода — это дверь. Космос — это вода ↗",href:"./water-is-door.html"},{text:"НЛО на видео Пентагона ↗",href:"./ufo-on-video.html"},{text:"Влияние ЧАЭС на распространение ВИЧ ↗",href:"./chernobyl-hiv.html"}],Sw=()=>Tt.jsxs("div",{className:"O_Header",children:[Tt.jsx("div",{className:"A_HeaderNews",children:[...Array(3)].map((o,e)=>Tt.jsx("div",{children:xw.map((n,a)=>Tt.jsx("a",{className:"A_NewsLink",href:n.href,children:n.text},a))},e))}),Tt.jsxs("div",{className:"W_HeaderNavbarsWrap",children:[Tt.jsxs("div",{className:"M_HeaderNavbar",id:"main_nav",children:[Tt.jsx("img",{className:"Q_BurgerIcon",src:od,alt:"menu"}),Tt.jsx("a",{href:"https://schizofiles.ru",className:"Q_LogoMobileLink",children:Tt.jsx("img",{className:"Q_LogoMobile",src:cd,alt:"logo"})}),Tt.jsx("img",{className:"Q_SearchIconMobile",src:ld,alt:"search"}),Tt.jsx("a",{href:"./index.html",className:"A_HeaderNavbarBtn",children:"Главная"}),Tt.jsx("div",{className:"A_HeaderNavbarBtn",id:"articles",children:"Статьи"}),Tt.jsx("a",{href:"./pages/predictions.html",className:"A_HeaderNavbarBtn",children:"Предсказание дня"}),Tt.jsx("div",{className:"A_HeaderNavbarBtn",id:"gensBtn",children:"Генераторы"}),Tt.jsx("a",{href:"./flat-earth.html",className:"A_HeaderNavbarBtn",children:"Карта истинной Земли"})]}),Tt.jsxs("div",{className:"M_HeaderNavbar invert",children:[Tt.jsx("img",{className:"Q_BurgerIcon",src:od,alt:"menu"}),Tt.jsx("img",{className:"Q_LogoMobile",src:cd,alt:"logo"}),Tt.jsx("img",{className:"Q_SearchIconMobile",src:ld,alt:"search"}),Tt.jsx("a",{href:"./bitie.html",children:Tt.jsx("div",{className:"A_HeaderNavbarBtn",id:"articles_in",children:"Бытие"})}),Tt.jsx("a",{href:"./kosmos.html",children:Tt.jsx("div",{className:"A_HeaderNavbarBtn",id:"articles_in",children:"Космос"})}),Tt.jsx("a",{href:"./proshloe.html",children:Tt.jsx("div",{className:"A_HeaderNavbarBtn",id:"articles_in",children:"Прошлое"})})]}),Tt.jsxs("div",{className:"M_HeaderNavbar invert Gen",id:"gens",children:[Tt.jsx("img",{className:"Q_BurgerIcon",src:od,alt:"menu"}),Tt.jsx("img",{className:"Q_LogoMobile",src:cd,alt:"logo"}),Tt.jsx("img",{className:"Q_SearchIconMobile",src:ld,alt:"search"}),Tt.jsx("a",{href:"./encryptor.html",children:Tt.jsx("div",{className:"A_HeaderNavbarBtn",id:"articles_in",children:"Шифровщик"})}),Tt.jsx("a",{href:"./iceberg.html",children:Tt.jsx("div",{className:"A_HeaderNavbarBtn",id:"articles_in",children:"Айсберги"})})]})]})]});let ud=null;function Mw(){const o=document.getElementById("navbar-root");o&&!ud&&(ud=yw.createRoot(o),ud.render(Tt.jsx(Sw,{})))}Mw();document.addEventListener("DOMContentLoaded",()=>{(window.location.pathname==="/"||window.location.pathname==="/index.html")&&(_S(),lw(),cw())});
