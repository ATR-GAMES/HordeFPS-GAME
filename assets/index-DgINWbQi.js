(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,j=1030,ee=1031,M=1033,te=33776,ne=33777,N=33778,re=33779,P=35840,ie=35841,F=35842,ae=35843,oe=36196,se=37492,I=37496,ce=37488,le=37489,L=37490,ue=37491,de=37808,fe=37809,pe=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,R=37816,ye=37817,be=37818,xe=37819,Se=37820,Ce=37821,we=36492,Te=36494,Ee=36495,De=36283,Oe=36284,ke=36285,z=36286,Ae=2300,je=2301,Me=2302,B=2303,Ne=2400,V=2401,Pe=2402,Fe=3200,Ie=`srgb`,Le=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=2e3;function Ue(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function We(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function H(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ge(){let e=H(`canvas`);return e.style.display=`block`,e}var Ke={};function qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Je(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ye(...e){let t=e.join(` `);t in Ke||(Ke[t]=!0,U(...e))}function Xe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ze={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Qe=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},$e=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),et=1234567,tt=Math.PI/180,nt=180/Math.PI;function rt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($e[e&255]+$e[e>>8&255]+$e[e>>16&255]+$e[e>>24&255]+`-`+$e[t&255]+$e[t>>8&255]+`-`+$e[t>>16&15|64]+$e[t>>24&255]+`-`+$e[n&63|128]+$e[n>>8&255]+`-`+$e[n>>16&255]+$e[n>>24&255]+$e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]).toLowerCase()}function it(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function st(e,t,n){return e===t?0:(n-e)/(t-e)}function ct(e,t,n){return(1-n)*e+n*t}function lt(e,t,n,r){return ct(e,t,1-Math.exp(-n*r))}function ut(e,t=1){return t-Math.abs(at(e,t*2)-t)}function dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function pt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function mt(e,t){return e+Math.random()*(t-e)}function ht(e){return e*(.5-Math.random())}function gt(e){e!==void 0&&(et=e);let t=et+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _t(e){return e*tt}function vt(e){return e*nt}function yt(e){return(e&e-1)==0&&e!==0}function bt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function xt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function St(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Tt={DEG2RAD:tt,RAD2DEG:nt,generateUUID:rt,clamp:it,euclideanModulo:at,mapLinear:ot,inverseLerp:st,lerp:ct,damp:lt,pingpong:ut,smoothstep:dt,smootherstep:ft,randInt:pt,randFloat:mt,randFloatSpread:ht,seededRandom:gt,degToRad:_t,radToDeg:vt,isPowerOfTwo:yt,ceilPowerOfTwo:bt,floorPowerOfTwo:xt,setQuaternionFromProperEuler:St,normalize:wt,denormalize:Ct},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ot.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ot.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dt.copy(this).projectOnVector(e),this.sub(Dt)}reflect(e){return this.sub(Dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dt=new K,Ot=new Et,kt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ye(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(At.makeScale(e,t)),this}rotate(e){return Ye(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(At.makeRotation(-e)),this}translate(e,t){return Ye(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(At.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},At=new kt,jt=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mt=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nt(){let e={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ye(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ye(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Le]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),e}var Pt=Nt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=H(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=H(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}else return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=rt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new K,Wt=class e extends Qe{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=rt(),this.name=``,this.source=new Bt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends Qe{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=new Wt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*N,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*N,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*N,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new K,Qt=new Xt,$t=new K(0,0,0),en=new K(1,1,1),tn=new K,nn=new K,rn=new K,an=new Xt,on=new Et,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-it(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},ln=0,un=new K,dn=new Et,fn=new Xt,pn=new K,mn=new K,hn=new K,gn=new Et,_n=new K(1,0,0),vn=new K(0,1,0),yn=new K(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends Qe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=rt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new sn,r=new Et,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new kt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};wn.DEFAULT_UP=new K(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var q=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new q,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new q,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new q,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new q;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var jn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=at(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=Dn[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return Pt.workingToColorSpace(Mn.copy(this),e),Math.round(it(Mn.r*255,0,255))*65536+Math.round(it(Mn.g*255,0,255))*256+Math.round(it(Mn.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ie){Pt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=ct(On.h,kn.h,t),r=ct(On.s,kn.s,t),i=ct(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new jn;jn.NAMES=Dn;var Nn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new jn(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new K,In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new Gt,Kn=new Gt,qn=new Gt,Jn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fn.subVectors(r,t),In.subVectors(n,t),Ln.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(In),s=Fn.dot(Ln),c=In.dot(In),l=In.dot(Ln),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rn.x),s.addScaledVector(a,Rn.y),s.addScaledVector(o,Rn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gn.setScalar(0),Kn.setScalar(0),qn.setScalar(0),Gn.fromBufferAttribute(e,t),Kn.fromBufferAttribute(e,n),qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gn,i.x),a.addScaledVector(Kn,i.y),a.addScaledVector(qn,i.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),In.subVectors(e,t),Fn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zn.subVectors(r,n),Bn.subVectors(i,n),Hn.subVectors(e,n);let s=zn.dot(Hn),c=Bn.dot(Hn);if(s<=0&&c<=0)return t.copy(n);Un.subVectors(e,r);let l=zn.dot(Un),u=Bn.dot(Un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(zn,a);Wn.subVectors(e,i);let f=zn.dot(Wn),p=Bn.dot(Wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zn):Zn.fromBufferAttribute(r,t),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qn.copy(e.boundingBox)),Qn.applyMatrix4(e.matrixWorld),this.union(Qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),or.subVectors(this.max,ar),$n.subVectors(e.a,ar),er.subVectors(e.b,ar),tr.subVectors(e.c,ar),nr.subVectors(er,$n),rr.subVectors(tr,er),ir.subVectors($n,tr);let t=[0,-nr.z,nr.y,0,-rr.z,rr.y,0,-ir.z,ir.y,nr.z,0,-nr.x,rr.z,0,-rr.x,ir.z,0,-ir.x,-nr.y,nr.x,0,-rr.y,rr.x,0,-ir.y,ir.x,0];return!lr(t,$n,er,tr,or)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,$n,er,tr,or))?!1:(sr.crossVectors(nr,rr),t=[sr.x,sr.y,sr.z],lr(t,$n,er,tr,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new K,new K,new K,new K,new K,new K,new K,new K],Zn=new K,Qn=new Yn,$n=new K,er=new K,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K,sr=new K,cr=new K;function lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cr.fromArray(e,a);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),s=t.dot(cr),c=n.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ur=new K,dr=new G,fr=0,pr=class extends Qe{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix4(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyNormalMatrix(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.transformDirection(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ct(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ct(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ct(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ct(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},gr=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},_r=new Yn,vr=new K,yr=new K,br=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_r.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(yr)),this.expandByPoint(vr.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xr=0,Sr=new Xt,Cr=new wn,wr=new K,Tr=new Yn,Er=new Yn,Dr=new K,Or=class e extends Qe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=rt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ue(e)?hr:mr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new kt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,n){return Sr.makeTranslation(e,t,n),this.applyMatrix4(Sr),this}scale(e,t,n){return Sr.makeScale(e,t,n),this.applyMatrix4(Sr),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new gr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(this.boundingBox.min,Tr.min),this.boundingBox.expandByPoint(Dr),Dr.addVectors(this.boundingBox.max,Tr.max),this.boundingBox.expandByPoint(Dr)):(this.boundingBox.expandByPoint(Tr.min),this.boundingBox.expandByPoint(Tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(Tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(Tr.min,Er.min),Tr.expandByPoint(Dr),Dr.addVectors(Tr.max,Er.max),Tr.expandByPoint(Dr)):(Tr.expandByPoint(Er.min),Tr.expandByPoint(Er.max))}Tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dr.fromBufferAttribute(a,t),o&&(wr.fromBufferAttribute(e,t),Dr.add(wr)),r=Math.max(r,n.distanceToSquared(Dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dr.fromBufferAttribute(e,t),Dr.normalize(),e.setXYZ(t,Dr.x,Dr.y,Dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},kr=0,Ar=class extends Qe{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kr++}),this.uuid=rt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new jn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},jr=new K,Mr=new K,Nr=new K,Pr=new K,Fr=new K,Ir=new K,Lr=new K,Rr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jr.copy(this.origin).addScaledVector(this.direction,t),jr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Mr.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Mr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Pr.dot(this.direction),s=-Pr.dot(Nr),c=Pr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Mr).addScaledVector(Nr,d),f}intersectSphere(e,t){jr.subVectors(e.center,this.origin);let n=jr.dot(this.direction),r=jr.dot(jr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jr)!==null}intersectTriangle(e,t,n,r,i){Fr.subVectors(t,e),Ir.subVectors(n,e),Lr.crossVectors(Fr,Ir);let a=this.direction.dot(Lr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pr.subVectors(this.origin,e);let s=o*this.direction.dot(Ir.crossVectors(Pr,Ir));if(s<0)return null;let c=o*this.direction.dot(Fr.cross(Pr));if(c<0||s+c>a)return null;let l=-o*Pr.dot(Lr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zr=class extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new jn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Br=new Xt,Vr=new Rr,Hr=new br,Ur=new K,Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=new K,Yr=new K,Xr=new K,J=class extends wn{constructor(e=new Or,t=new zr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Jr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qr.fromBufferAttribute(s,e),a?Jr.addScaledVector(qr,r):Jr.addScaledVector(qr.sub(t),r))}t.add(Jr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Vr.copy(e.ray).recast(e.near),!(Hr.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Hr,Ur)===null||Vr.origin.distanceToSquared(Ur)>(e.far-e.near)**2))&&(Br.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Br),!(n.boundingBox!==null&&Vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Zr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xr.copy(s),Xr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xr);return l<n.near||l>n.far?null:{distance:l,point:Xr.clone(),object:e}}function Qr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wr),e.getVertexPosition(c,Gr),e.getVertexPosition(l,Kr);let u=Zr(e,t,n,r,Wr,Gr,Kr,Yr);if(u){let e=new K;Jn.getBarycoord(Yr,Wr,Gr,Kr,e),i&&(u.uv=Jn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Jn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Jn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Jn.getNormal(Wr,Gr,Kr,t.normal),u.face=t,u.barycoord=e}return u}var $r=class extends Wt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ei=new K,ti=new K,ni=new kt,ri=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ei.subVectors(n,t).cross(ti.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ei),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ni.getNormalMatrix(e),r=this.coplanarPoint(ei).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new br,ai=new G(.5,.5),oi=new K,si=class{constructor(e=new ri,t=new ri,n=new ri,r=new ri,i=new ri,a=new ri){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476+ai.distanceTo(e.center),ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oi.x=r.normal.x>0?e.max.x:e.min.x,oi.y=r.normal.y>0?e.max.y:e.min.y,oi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ci=class extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new jn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},li=new K,ui=new K,di=new Xt,fi=new Rr,pi=new br,mi=new K,hi=new K,gi=class extends wn{constructor(e=new Or,t=new ci){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)li.fromBufferAttribute(t,e-1),ui.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=li.distanceTo(ui);e.setAttribute(`lineDistance`,new gr(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pi.copy(n.boundingSphere),pi.applyMatrix4(r),pi.radius+=i,e.ray.intersectsSphere(pi)===!1)return;di.copy(r).invert(),fi.copy(e.ray).applyMatrix4(di);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=_i(this,e,fi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=_i(this,e,fi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=_i(this,e,fi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=_i(this,e,fi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function _i(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(li.fromBufferAttribute(s,i),ui.fromBufferAttribute(s,a),n.distanceSqToSegment(li,ui,mi,hi)>r)return;mi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(mi);if(!(c<t.near||c>t.far))return{distance:c,point:hi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var vi=new K,yi=new K,bi=class extends gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)vi.fromBufferAttribute(t,e),yi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+vi.distanceTo(yi);e.setAttribute(`lineDistance`,new gr(n,1))}else U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},xi=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Si=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ci=class extends Wt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wi=class extends Ci{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ti=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Y=class e extends Or{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new gr(c,3)),this.setAttribute(`normal`,new gr(l,3)),this.setAttribute(`uv`,new gr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ei=class e extends Or{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new gr(a,3)),this.setAttribute(`normal`,new gr(o,3)),this.setAttribute(`uv`,new gr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},X=class e extends Or{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new gr(u,3)),this.setAttribute(`normal`,new gr(d,3)),this.setAttribute(`uv`,new gr(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Di=class e extends X{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oi=class e extends Or{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new gr(i,3)),this.setAttribute(`normal`,new gr(i.slice(),3)),this.setAttribute(`uv`,new gr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ki=class e extends Oi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ai=class e extends Or{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ji=class e extends Or{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new gr(s,3)),this.setAttribute(`normal`,new gr(c,3)),this.setAttribute(`uv`,new gr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Mi=class e extends Or{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ni=class e extends Or{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new gr(c,3)),this.setAttribute(`normal`,new gr(l,3)),this.setAttribute(`uv`,new gr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Pi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ii(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Ii(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Fi(e){let t={};for(let n=0;n<e.length;n++){let r=Pi(e[n]);for(let e in r)t[e]=r[e]}return t}function Ii(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Li(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ri(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}var zi={clone:Pi,merge:Fi},Bi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hi=class extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bi,this.fragmentShader=Vi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=Li(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new jn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new kt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ui=class extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Z=class extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new jn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wi=class extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Fe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gi=class extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ki(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var qi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ji=class extends qi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ne,endingEnd:Ne}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case V:i=e,o=2*t-n;break;case Pe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case V:a=e,s=2*n-t;break;case Pe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Yi=class extends qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xi=class extends qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zi=class extends qi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Qi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ki(t,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ki(e.times,Array),values:Ki(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ji(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ae:t=this.InterpolantFactoryMethodDiscrete;break;case je:t=this.InterpolantFactoryMethodLinear;break;case Me:t=this.InterpolantFactoryMethodSmooth;break;case B:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ae;case this.InterpolantFactoryMethodLinear:return je;case this.InterpolantFactoryMethodSmooth:return Me;case this.InterpolantFactoryMethodBezier:return B}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&We(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Me,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Qi.prototype.ValueTypeName=``,Qi.prototype.TimeBufferType=Float32Array,Qi.prototype.ValueBufferType=Float32Array,Qi.prototype.DefaultInterpolation=je;var $i=class extends Qi{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName=`bool`,$i.prototype.ValueBufferType=Array,$i.prototype.DefaultInterpolation=Ae,$i.prototype.InterpolantFactoryMethodLinear=void 0,$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};ea.prototype.ValueTypeName=`color`;var ta=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};ta.prototype.ValueTypeName=`number`;var na=class extends qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Et.slerpFlat(i,0,a,c-o,a,c,s);return i}},ra=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName=`quaternion`,ra.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Qi{constructor(e,t,n){super(e,t,n)}};ia.prototype.ValueTypeName=`string`,ia.prototype.ValueBufferType=Array,ia.prototype.DefaultInterpolation=Ae,ia.prototype.InterpolantFactoryMethodLinear=void 0,ia.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};aa.prototype.ValueTypeName=`vector`;var oa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},sa=class{constructor(e){this.manager=e===void 0?oa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sa.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ca=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new jn(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},la=class extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ua=new Xt,da=new K,fa=new K,pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new si,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;da.setFromMatrixPosition(e.matrixWorld),t.position.copy(da),fa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fa),t.updateMatrixWorld(),ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ma=new K,ha=new Et,ga=new K,_a=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ha,ga),ga.x===1&&ga.y===1&&ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ha,ga.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ma,ha,ga),ga.x===1&&ga.y===1&&ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ha,ga.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},va=new K,ya=new G,ba=new G,xa=class extends _a{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nt*2*Math.atan(Math.tan(tt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(va.x,va.y).multiplyScalar(-e/va.z),va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(va.x,va.y).multiplyScalar(-e/va.z)}getViewSize(e,t){return this.getViewBounds(e,ya,ba),t.subVectors(ba,ya)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sa=class extends pa{constructor(){super(new xa(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=nt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ca=class extends ca{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Sa}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},wa=class extends pa{constructor(){super(new xa(90,1,.5,500)),this.isPointLightShadow=!0}},Ta=class extends ca{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new wa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ea=class extends _a{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Da=class extends pa{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oa=class extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Da}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ka=class extends ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Aa=-90,ja=1,Ma=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xa(Aa,ja,e,t);r.layers=this.layers,this.add(r);let i=new xa(Aa,ja,e,t);i.layers=this.layers,this.add(i);let a=new xa(Aa,ja,e,t);a.layers=this.layers,this.add(a);let o=new xa(Aa,ja,e,t);o.layers=this.layers,this.add(o);let s=new xa(Aa,ja,e,t);s.layers=this.layers,this.add(s);let c=new xa(Aa,ja,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Na=class extends xa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Pa=`\\[\\]\\.:\\/`,Fa=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ia=`[^\\[\\]\\.:\\/]`,La=`[^`+Pa.replace(`\\.`,``)+`]`,Ra=`((?:WC+[\\/:])*)`.replace(`WC`,Ia),za=`(WCOD+)?`.replace(`WCOD`,La),Ba=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ia),Va=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ia),Ha=RegExp(`^`+Ra+za+Ba+Va+`$`),Ua=[`material`,`materials`,`bones`,`map`],Wa=class{constructor(e,t,n){let r=n||Ga.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ga=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Fa,``)}static parseTrackName(e){let t=Ha.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ua.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ga.Composite=Wa,Ga.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ga.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ga.prototype.GetterByBindingType=[Ga.prototype._getValue_direct,Ga.prototype._getValue_array,Ga.prototype._getValue_arrayElement,Ga.prototype._getValue_toArray],Ga.prototype.SetterByBindingTypeAndVersioning=[[Ga.prototype._setValue_direct,Ga.prototype._setValue_direct_setNeedsUpdate,Ga.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ga.prototype._setValue_array,Ga.prototype._setValue_array_setNeedsUpdate,Ga.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ga.prototype._setValue_arrayElement,Ga.prototype._setValue_arrayElement_setNeedsUpdate,Ga.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ga.prototype._setValue_fromArray,Ga.prototype._setValue_fromArray_setNeedsUpdate,Ga.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ka=new Xt,qa=class{constructor(e,t,n=0,r=1/0){this.ray=new Rr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ka.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ka),this}intersectObject(e,t=!0,n=[]){return Ya(e,this,n,t),n.sort(Ja),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ya(e[r],this,n,t);return n.sort(Ja),n}};function Ja(e,t){return e.distance-t.distance}function Ya(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ya(r[e],t,n,!0)}}var Xa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,U(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Za=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=it(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Qa=class extends bi{constructor(e=10,t=10,n=4473924,r=8947848){n=new jn(n),r=new jn(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Or;l.setAttribute(`position`,new gr(s,3)),l.setAttribute(`color`,new gr(c,3));let u=new ci({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}},$a=class extends Qe{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){U(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function eo(e,t,n,r){let i=to(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case te:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case ae:return Math.max(e,16)*Math.max(t,8)/4;case P:case F:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case L:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case R:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case we:case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ke:case z:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function to(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function no(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ro(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var io={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new jn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new jn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new jn(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ao={basic:{uniforms:Fi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:io.meshbasic_vert,fragmentShader:io.meshbasic_frag},lambert:{uniforms:Fi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new jn(0)},envMapIntensity:{value:1}}]),vertexShader:io.meshlambert_vert,fragmentShader:io.meshlambert_frag},phong:{uniforms:Fi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new jn(0)},specular:{value:new jn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:io.meshphong_vert,fragmentShader:io.meshphong_frag},standard:{uniforms:Fi([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new jn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:io.meshphysical_vert,fragmentShader:io.meshphysical_frag},toon:{uniforms:Fi([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new jn(0)}}]),vertexShader:io.meshtoon_vert,fragmentShader:io.meshtoon_frag},matcap:{uniforms:Fi([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:io.meshmatcap_vert,fragmentShader:io.meshmatcap_frag},points:{uniforms:Fi([Q.points,Q.fog]),vertexShader:io.points_vert,fragmentShader:io.points_frag},dashed:{uniforms:Fi([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:io.linedashed_vert,fragmentShader:io.linedashed_frag},depth:{uniforms:Fi([Q.common,Q.displacementmap]),vertexShader:io.depth_vert,fragmentShader:io.depth_frag},normal:{uniforms:Fi([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:io.meshnormal_vert,fragmentShader:io.meshnormal_frag},sprite:{uniforms:Fi([Q.sprite,Q.fog]),vertexShader:io.sprite_vert,fragmentShader:io.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:io.background_vert,fragmentShader:io.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:io.backgroundCube_vert,fragmentShader:io.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:io.cube_vert,fragmentShader:io.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:io.equirect_vert,fragmentShader:io.equirect_frag},distance:{uniforms:Fi([Q.common,Q.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:io.distance_vert,fragmentShader:io.distance_frag},shadow:{uniforms:Fi([Q.lights,Q.fog,{color:{value:new jn(0)},opacity:{value:1}}]),vertexShader:io.shadow_vert,fragmentShader:io.shadow_frag}};ao.physical={uniforms:Fi([ao.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new jn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new jn(0)},specularColor:{value:new jn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:io.meshphysical_vert,fragmentShader:io.meshphysical_frag};var oo={r:0,b:0,g:0},so=new Xt,co=new kt;co.set(-1,0,0,0,1,0,0,0,1);function lo(e,t,n,r,i,a){let o=new jn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new Y(1,1,1),new Hi({name:`BackgroundCubeMaterial`,uniforms:Pi(ao.backgroundCube.uniforms),vertexShader:ao.backgroundCube.vertexShader,fragmentShader:ao.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(so.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(co),l.material.toneMapped=Pt.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new Ai(2,2),new Hi({name:`BackgroundMaterial`,uniforms:Pi(ao.background.uniforms),vertexShader:ao.background.vertexShader,fragmentShader:ao.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(oo,Ri(e)),n.buffers.color.setClear(oo.r,oo.g,oo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function uo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function fo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function po(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function mo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ri,s=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ho=4,go=[.125,.215,.35,.446,.526,.582],_o=20,vo=256,yo=new Ea,bo=new jn,xo=null,So=0,Co=0,wo=!1,To=new K,Eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=To}=i;xo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,So,Co),this._renderer.xr.enabled=wo,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Le,depthBuffer:!1},r=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Do(r)),this._blurMaterial=jo(r,e,t),this._ggxMaterial=Ao(r,e,t)}return r}_compileMaterial(e){let t=new J(new Or,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,r,i){let a=new xa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(bo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Y,new zr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(bo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ko(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ko(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,yo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ho?n-d+ho:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ko(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,yo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ko(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,yo)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&W(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*_o-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):_o;m>_o&&U(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_o}`);let h=[],g=0;for(let e=0;e<_o;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];ko(t,3*v*(r>_-ho?r-_+ho:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,yo)}};function Do(e){let t=[],n=[],r=[],i=e,a=e-ho+1+go.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-ho?s=go[o-e+ho-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Or;h.setAttribute(`position`,new pr(f,3)),h.setAttribute(`uv`,new pr(p,2)),h.setAttribute(`faceIndex`,new pr(m,1)),r.push(new J(h,null)),i>ho&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Oo(e,t,n){let r=new qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ko(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ao(e,t,n){return new Hi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:vo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jo(e,t,n){let r=new Float32Array(_o),i=new K(0,1,0);return new Hi({name:`SphericalGaussianBlur`,defines:{n:_o,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Po(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mo(){return new Hi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function No(){return new Hi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Po(){return`

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
	`}var Fo=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Y(5,5,5),i=new Hi({name:`CubemapFromEquirect`,uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new Ma(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Io(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Fo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Eo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Eo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Lo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ye(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ro(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?hr:mr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function zo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Bo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Vo(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Jt(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ho(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Uo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Wo(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Ci(t,n):void 0}),s=new qt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new Or;c.setAttribute(`position`,new gr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new gr([0,2,0,0,2,0],2));let l=new Ui({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new J(c,l),d=new Ea(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,y=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Pt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Uo[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Go=new Wt,Ko=new Ci(1,1),qo=new Jt,Jo=new Yt,Yo=new xi,Xo=[],Zo=[],Qo=new Float32Array(16),$o=new Float32Array(9),es=new Float32Array(4);function ts(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Xo[i];if(a===void 0&&(a=new Float32Array(i),Xo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ns(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function rs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function is(e,t){let n=Zo[t];n===void 0&&(n=new Int32Array(t),Zo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function as(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ns(n,t))return;e.uniform2fv(this.addr,t),rs(n,t)}}function ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ns(n,t))return;e.uniform3fv(this.addr,t),rs(n,t)}}function cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ns(n,t))return;e.uniform4fv(this.addr,t),rs(n,t)}}function ls(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ns(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),rs(n,t)}else{if(ns(n,r))return;es.set(r),e.uniformMatrix2fv(this.addr,!1,es),rs(n,r)}}function us(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ns(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),rs(n,t)}else{if(ns(n,r))return;$o.set(r),e.uniformMatrix3fv(this.addr,!1,$o),rs(n,r)}}function ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ns(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),rs(n,t)}else{if(ns(n,r))return;Qo.set(r),e.uniformMatrix4fv(this.addr,!1,Qo),rs(n,r)}}function fs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ns(n,t))return;e.uniform2iv(this.addr,t),rs(n,t)}}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ns(n,t))return;e.uniform3iv(this.addr,t),rs(n,t)}}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ns(n,t))return;e.uniform4iv(this.addr,t),rs(n,t)}}function gs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ns(n,t))return;e.uniform2uiv(this.addr,t),rs(n,t)}}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ns(n,t))return;e.uniform3uiv(this.addr,t),rs(n,t)}}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ns(n,t))return;e.uniform4uiv(this.addr,t),rs(n,t)}}function bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ko.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ko):a=Go,n.setTexture2D(t||a,i)}function xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Jo,i)}function Ss(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Yo,i)}function Cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||qo,i)}function ws(e){switch(e){case 5126:return as;case 35664:return os;case 35665:return ss;case 35666:return cs;case 35674:return ls;case 35675:return us;case 35676:return ds;case 5124:case 35670:return fs;case 35667:case 35671:return ps;case 35668:case 35672:return ms;case 35669:case 35673:return hs;case 5125:return gs;case 36294:return _s;case 36295:return vs;case 36296:return ys;case 35678:case 36198:case 36298:case 36306:case 35682:return bs;case 35679:case 36299:case 36307:return xs;case 35680:case 36300:case 36308:case 36293:return Ss;case 36289:case 36303:case 36311:case 36292:return Cs}}function Ts(e,t){e.uniform1fv(this.addr,t)}function Es(e,t){let n=ts(t,this.size,2);e.uniform2fv(this.addr,n)}function Ds(e,t){let n=ts(t,this.size,3);e.uniform3fv(this.addr,n)}function Os(e,t){let n=ts(t,this.size,4);e.uniform4fv(this.addr,n)}function ks(e,t){let n=ts(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function As(e,t){let n=ts(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function js(e,t){let n=ts(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ms(e,t){e.uniform1iv(this.addr,t)}function Ns(e,t){e.uniform2iv(this.addr,t)}function Ps(e,t){e.uniform3iv(this.addr,t)}function Fs(e,t){e.uniform4iv(this.addr,t)}function Is(e,t){e.uniform1uiv(this.addr,t)}function Ls(e,t){e.uniform2uiv(this.addr,t)}function Rs(e,t){e.uniform3uiv(this.addr,t)}function zs(e,t){e.uniform4uiv(this.addr,t)}function Bs(e,t,n){let r=this.cache,i=t.length,a=is(n,i);ns(r,a)||(e.uniform1iv(this.addr,a),rs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ko:Go;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Vs(e,t,n){let r=this.cache,i=t.length,a=is(n,i);ns(r,a)||(e.uniform1iv(this.addr,a),rs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Jo,a[e])}function Hs(e,t,n){let r=this.cache,i=t.length,a=is(n,i);ns(r,a)||(e.uniform1iv(this.addr,a),rs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Yo,a[e])}function Us(e,t,n){let r=this.cache,i=t.length,a=is(n,i);ns(r,a)||(e.uniform1iv(this.addr,a),rs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||qo,a[e])}function Ws(e){switch(e){case 5126:return Ts;case 35664:return Es;case 35665:return Ds;case 35666:return Os;case 35674:return ks;case 35675:return As;case 35676:return js;case 5124:case 35670:return Ms;case 35667:case 35671:return Ns;case 35668:case 35672:return Ps;case 35669:case 35673:return Fs;case 5125:return Is;case 36294:return Ls;case 36295:return Rs;case 36296:return zs;case 35678:case 36198:case 36298:case 36306:case 35682:return Bs;case 35679:case 36299:case 36307:return Vs;case 35680:case 36300:case 36308:case 36293:return Hs;case 36289:case 36303:case 36311:case 36292:return Us}}var Gs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ws(t.type)}},Ks=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ws(t.type)}},qs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Js=/(\w+)(\])?(\[|\.)?/g;function Ys(e,t){e.seq.push(t),e.map[t.id]=t}function Xs(e,t,n){let r=e.name,i=r.length;for(Js.lastIndex=0;;){let a=Js.exec(r),o=Js.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ys(n,l===void 0?new Gs(s,e,t):new Ks(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new qs(s),Ys(n,e)),n=e}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Xs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Qs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var $s=37297,ec=0;function tc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var nc=new kt;function rc(e){Pt._getMatrix(nc,Pt.workingColorSpace,e);let t=`mat3( ${nc.elements.map(e=>e.toFixed(4))} )`;switch(Pt.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ic(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+tc(e.getShaderSource(t),r)}else return i}function ac(e,t){let n=rc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var oc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function sc(e,t){let n=oc[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var cc=new K;function lc(){return Pt.getLuminanceCoefficients(cc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${cc.x.toFixed(4)}, ${cc.y.toFixed(4)}, ${cc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function uc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(pc).join(`
`)}function dc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function fc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function pc(e){return e!==``}function mc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gc=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(e){return e.replace(gc,yc)}var vc=new Map;function yc(e,t){let n=io[t];if(n===void 0){let e=vc.get(t);if(e!==void 0)n=io[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return _c(n)}var bc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(e){return e.replace(bc,Sc)}function Sc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Cc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var wc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Tc(e){return wc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ec={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Dc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ec[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Oc={302:`ENVMAP_MODE_REFRACTION`};function kc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Oc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ac={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function jc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ac[e.combine]||`ENVMAP_BLENDING_NONE`}function Mc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Nc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Tc(n),l=Dc(n),u=kc(n),d=jc(n),f=Mc(n),p=uc(n),m=dc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(pc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(pc).join(`
`),_.length>0&&(_+=`
`)):(g=[Cc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(pc).join(`
`),_=[Cc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:io.tonemapping_pars_fragment,n.toneMapping===0?``:sc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,io.colorspace_pars_fragment,ac(`linearToOutputTexel`,n.outputColorSpace),lc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(pc).join(`
`)),o=_c(o),o=mc(o,n),o=hc(o,n),s=_c(s),s=mc(s,n),s=hc(s,n),o=xc(o),s=xc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Qs(i,i.VERTEX_SHADER,y),S=Qs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ic(i,x,`vertex`),n=ic(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Zs(i,h),T=fc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,$s)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ec++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Pc=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ic(e),t.set(e,n)),n}},Ic=class{constructor(e){this.id=Pc++,this.code=e,this.usedTimes=0}};function Lc(e){return e===1030||e===37490||e===36285}function Rc(e,t,n,r,i,a){let o=new cn,s=new Fc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ao[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,P=!!i.aoMap,ie=!!i.lightMap,F=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,L=i.clearcoat>0,ue=i.dispersion>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=le&&!!i.anisotropyMap,he=L&&!!i.clearcoatMap,ge=L&&!!i.clearcoatNormalMap,_e=L&&!!i.clearcoatRoughnessMap,ve=de&&!!i.iridescenceMap,R=de&&!!i.iridescenceThicknessMap,ye=fe&&!!i.sheenColorMap,be=fe&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=pe&&!!i.transmissionMap,Te=pe&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,ke=!!i.alphaHash,z=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:P,lightMap:ie,bumpMap:F,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Lc(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:me,clearcoat:L,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:ue,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:R,sheen:fe,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:pe,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:P&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:F&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:R&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&Pt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:z&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(z&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ao[t];n=zi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Nc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function zc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Bc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Bc),r.length>1&&r.sort(t||Vc),i.length>1&&i.sort(t||Vc),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Uc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Hc,e.set(t,[i])):n>=r.length?(i=new Hc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Wc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new jn};break;case`SpotLight`:n={position:new K,direction:new K,color:new jn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new jn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new jn,groundColor:new jn};break;case`RectAreaLight`:n={color:new jn,position:new K,halfWidth:new K,halfHeight:new K};break}return e[t.id]=n,n}}}function Gc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Kc=0;function qc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Jc(e){let t=new Wc,n=Gc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(qc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Kc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Yc(e){let t=new Jc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Xc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Yc(e),t.set(n,[a])):r>=i.length?(a=new Yc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$c=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],el=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],tl=new Xt,nl=new K,rl=new K;function il(e,t,n){let r=new si,i=new G,o=new G,s=new Gt,l=new Wi,u=new Gi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Zc,fragmentShader:Qc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Or;y.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){U(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(i.x,i.y,{format:j,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ci(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new Fo(i.x),p.map.depthTexture=new wi(i.x,g)):(p.map=new qt(i.x,i.y),p.map.depthTexture=new Ci(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),nl.setFromMatrixPosition(d.matrixWorld),e.position.copy(nl),rl.copy(e.position),rl.add($c[t]),e.up.copy(el[t]),e.lookAt(rl),e.updateMatrixWorld(),n.makeTranslation(-nl.x,-nl.y,-nl.z),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new qt(i.x,i.y,{format:j,type:v})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function al(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ze[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new jn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let N=null,re={},P=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),F=new Gt().fromArray(P),ae=new Gt().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),I(e.CULL_FACE),pe(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function L(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ce(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(M&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function R(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+ee-1),N!==t&&(e.activeTexture(t),N=t)}function be(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+ee-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function xe(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function z(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function B(t){F.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),F.copy(t))}function Ne(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function V(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new jn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,F.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:L,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:R,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:z,texImage3D:Ae,pixelStorei:Me,getParameter:je,updateUBOMapping:V,uniformBlockBinding:Pe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:B,viewport:Ne,reset:Fe}}function ol(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):H(`canvas`)}function T(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Re:Pt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function re(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let P=0;function ie(){P=0}function F(){return P}function ae(e){P=e}function oe(){let e=P;return e>=p.maxTextures&&U(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),P+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(t,n){let r=f.get(t);if(t.isVideoTexture&&z(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ce(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){_e(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function le(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){_e(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function L(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){ve(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ue={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},de={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=se(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=he(r.start,n.width,4),c=he(t.start,n.width,4);r.start<=i+1&&s===c&&he(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function _e(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=me(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Pt.getPrimaries(Pt.workingColorSpace),r=n.colorSpace===``?null:Pt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ae(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=A(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);pe(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ee(n,t);if(n.isDepthTexture)u=j(n.format===O,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&ge(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023)if(c!==null)if(g){if(v)if(n.layerUpdates.size>0){let t=eo(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0);else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data)}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}else if(n.isDataArrayTexture)if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v)if(n.layerUpdates.size>0){let r=eo(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_)if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=je(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=je(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&D(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ve(t,n,r){if(n.image.length!==6)return;let i=me(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Pt.getPrimaries(Pt.workingColorSpace),s=n.colorSpace===``?null:Pt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ae(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=A(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ee(n,h);pe(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=je(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&D(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function R(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=A(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),ke(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Oe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ke(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);ke(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,M)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),pe(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else I(n.depthTexture,0);let o=a.__webglTexture,s=Oe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)ke(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)ke(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)be(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?be(n.__webglFramebuffer[0],t,0):be(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ye(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){let i=f.get(t);n!==void 0&&R(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&xe(t)}function Ce(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,te);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&ke(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=A(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Oe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),pe(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)R(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else R(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&D(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),pe(s,i),R(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&D(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),pe(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)R(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else R(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&D(a),d.unbindTexture()}t.depthBuffer&&xe(t)}function we(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let Te=[],Ee=[];function De(t){if(t.samples>0){if(ke(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Te.push(o),Ee.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(p.maxSamples,e.samples)}function ke(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function z(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Pt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=oe,this.resetTextureUnits=ie,this.getTextureUnits=F,this.setTextureUnits=ae,this.setTexture2D=I,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=L,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=R,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function sl(e,t){function n(n,r=``){let i,a=Pt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var cl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ll=`
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

}`,ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ti(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hi({vertexShader:cl,fragmentShader:ll,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dl=class extends Qe{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new ul,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new G,k=null,A=new xa;A.viewport=new Gt;let j=new xa;j.viewport=new Gt;let ee=[A,j],M=new Na,te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getHandSpace()};function N(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,P);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}te=null,ne=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,P),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new Ci(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function P(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new K,F=new K;function ae(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=A.near=t,M.far=j.far=A.far=n,(te!==M.near||ne!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),te=M.near,ne=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;oe(M,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(M,A,j):M.projectionMatrix.copy(A.projectionMatrix),se(e,M,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=nt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let I=null;function ce(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[n];o===void 0&&(o=new xa,o.layers.enable(n),o.viewport=new Gt,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ti,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}I&&I(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let le=new no;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},fl=new Xt,pl=new kt;pl.set(-1,0,0,0,1,0,0,0,1);function ml(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ri(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(fl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(pl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function hl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var gl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_l=null;function vl(){return _l===null&&(_l=new $r(gl,16,16,j,v),_l.name=`DFG_LUT`,_l.minFilter=c,_l.magFilter=c,_l.wrapS=r,_l.wrapT=r,_l.generateMipmaps=!1,_l.needsUpdate=!0),_l}var yl=class{constructor(e={}){let{canvas:t=Ge(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([M,ee,A]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D=new K,O=null,k=null,j=[],te=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,P=null,ie=null,F=null,ae=null;this._outputColorSpace=Ie;let oe=0,se=0,I=null,ce=-1,le=null,L=new Gt,ue=new Gt,de=null,fe=new jn(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,R=new Gt(0,0,me,he),ye=new Gt(0,0,me,he),be=!1,xe=new si,Se=!1,Ce=!1,we=new Xt,Te=new K,Ee=new Gt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return I===null?ge:1}let z=n;function Ae(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),z===null){let t=`webgl2`;if(z=Ae(t,e),z===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw W(`WebGLRenderer: `+e.message),e}let je,Me,B,Ne,V,Pe,Fe,Le,Re,ze,Be,Ve,Ue,We,H,Ke,Je,Ye,Ze,Qe,$e,et,tt;function nt(){je=new Lo(z),je.init(),$e=new sl(z,je),Me=new po(z,je,e,$e),B=new al(z,je),Me.reversedDepthBuffer&&p&&B.buffers.depth.setReversed(!0),ie=z.createFramebuffer(),F=z.createFramebuffer(),ae=z.createFramebuffer(),Ne=new Bo(z),V=new zc,Pe=new ol(z,je,B,V,Me,$e,Ne),Fe=new Io(N),Le=new ro(z),et=new uo(z,Le),Re=new Ro(z,Le,Ne,et),ze=new Ho(z,Re,Le,et,Ne),Ye=new Vo(z,Me,Pe),H=new mo(V),Be=new Rc(N,Fe,je,Me,et,H),Ve=new ml(N,V),Ue=new Uc,We=new Xc(je),Je=new lo(N,Fe,B,ze,_,s),Ke=new il(N,ze,Me),tt=new hl(z,Ne,Me,B),Ze=new fo(z,je,Ne),Qe=new zo(z,je,Ne),Ne.programs=Be.programs,N.capabilities=Me,N.extensions=je,N.properties=V,N.renderLists=Ue,N.shadowMap=Ke,N.state=B,N.info=Ne}nt(),S!==1009&&(ne=new Wo(S,t.width,t.height,o,r,i));let rt=new dl(N,z);this.xr=rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){if(rt.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(L)},this.getViewport=function(e){return e.copy(R)},this.setViewport=function(e,t,n,r){e.isVector4?R.set(e.x,e.y,e.z,e.w):R.set(e,t,n,r),B.viewport(L.copy(R).multiplyScalar(ge).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(ue.copy(ye).multiplyScalar(ge).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=C.has(t)}if(e){let e=I.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferuiv(z.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,z.clearBufferiv(z.COLOR,0,E))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Je.dispose(),Ue.dispose(),We.dispose(),V.dispose(),Fe.dispose(),ze.dispose(),et.dispose(),tt.dispose(),Be.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,pt),rt.removeEventListener(`sessionend`,mt),ht.stop()};function it(e){e.preventDefault(),qe(`WebGLRenderer: Context Lost.`),re=!0}function at(){qe(`WebGLRenderer: Context Restored.`),re=!1;let e=Ne.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;nt(),Ne.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function ot(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),V.remove(e)}function lt(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Le.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ke()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh)if(je.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,n),e.side=0,e.needsUpdate=!0,xt(e,t,n),e.side=2):xt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=We.get(n),k.init(t),te.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ut(a,n,e),r.add(a)}else ut(t,n,e),r.add(t)}),k=te.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){V.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new no;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,rt.setAnimationLoop(e),e===null?ht.stop():ht.start()},rt.addEventListener(`sessionstart`,pt),rt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;P!==null&&P.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=ne!==null&&(I===null||n)&&ne.begin(N,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,I),k=We.get(e,te.length),k.init(t),k.state.textureUnits=Pe.getTextureUnits(),te.push(k),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(we,He,t.reversedDepth),Ce=this.localClippingEnabled,Se=H.init(this.clippingPlanes,Ce),O=Ue.get(e,j.length),O.init(),j.push(O),rt.enabled===!0&&rt.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,N.sortObjects)}gt(e,t,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(_e,ve,t.reversedDepth),Oe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Oe&&Je.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&H.beginShadows();let i=k.state.shadowsArray;if(Ke.render(i,e,t),Se===!0&&H.endShadows(),(r&&ne.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Oe&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(O,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Oe&&Je.render(e),_t(O,e,t)}I!==null&&se===0&&(Pe.updateMultisampleRenderTarget(I),Pe.updateRenderTargetMipmap(I)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),et.resetDefaultState(),ce=-1,le=null,te.pop(),te.length>0?(k=te[te.length-1],Pe.setTextureUnits(k.state.textureUnits),Se===!0&&H.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,j.pop(),O=j.length>0?j[j.length-1]:null,P!==null&&P.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||xe.intersectsSprite(e)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let t=ze.update(e),i=e.material;i.visible&&O.push(e,t,i,n,Ee.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||xe.intersectsObject(e))){let t=ze.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ee.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,Ee.z,o)}}else i.visible&&O.push(e,t,i,n,Ee.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Se===!0&&H.setGlobalState(N.clippingPlanes,n),r&&B.viewport(L.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||L;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(fe),pe=N.getClearAlpha(),pe<1&&N.setClearColor(16777215,.5),N.clear(),Oe&&Je.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Se===!0&&H.setGlobalState(N.clippingPlanes,r),yt(e,n,r),Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(fe,pe),p!==void 0&&(r.viewport=p),N.toneMapping=f}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=De);let r=V.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Be.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=Be.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=Be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=H.uniform),Ct(e,s),r.needsLights=Et(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Zs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=De),Pe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?N.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Pt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=k.state.lights;if(Se===!0&&(Ce===!0||e!==le)){let t=e===le&&r.id===ce;H.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==H.numPlanes||v.numIntersection!==H.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=xt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(B.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=wt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(z,`projectionMatrix`,e.projectionMatrix),T.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(z,Te.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&T.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,Pe),y.state.spotShadowMap.length>0&&T.setValue(z,`spotShadowMap`,y.state.spotShadowMap,Pe),y.state.pointShadowMap.length>0&&T.setValue(z,`pointShadowMap`,y.state.pointShadowMap,Pe)),i.isSkinnedMesh){T.setOptional(z,i,`bindMatrix`),T.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(z,`boneTexture`,e.boneTexture,Pe))}i.isBatchedMesh&&(T.setOptional(z,i,`batchingTexture`),T.setValue(z,`batchingTexture`,i._matricesTexture,Pe),T.setOptional(z,i,`batchingIdTexture`),T.setValue(z,`batchingIdTexture`,i._indirectTexture,Pe),T.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(z,`batchingColorTexture`,i._colorsTexture,Pe));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ye.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=vl()),C){if(T.setValue(z,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&G(E,w),a&&r.fog===!0&&Ve.refreshFogUniforms(E,a),Ve.refreshMaterialUniforms(E,r,ge,he,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Zs.upload(z,St(v),E,Pe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Zs.upload(z,St(v),E,Pe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(z,`center`,i.center),T.setValue(z,`modelViewMatrix`,i.modelViewMatrix),T.setValue(z,`normalMatrix`,i.normalMatrix),T.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function G(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),L.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,B.viewport(L),B.scissor(ue),B.setScissorTest(de),ce=-1;return}else if(o.__webglFramebuffer===void 0)Pe.setupRenderTarget(e);else if(o.__hasExternalTextures)Pe.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Pe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Pe.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,L.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else L.copy(R).multiplyScalar(ge).floor(),ue.copy(ye).multiplyScalar(ge).floor(),de=be;if(n!==0&&(r=ie),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(L),B.scissor(ue),B.setScissorTest(de),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}ce=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Me.textureFormatReadable(c)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Me.textureTypeReadable(l)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=I===null?null:V.get(I).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Me.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Me.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0);let f=I===null?null:V.get(I).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,f);let p=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xe(z,p,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.deleteBuffer(d),z.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Pe.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Pe.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Pe.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(Pe.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,F),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&Pe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Pe.setTextureCube(e,0):e.isData3DTexture?Pe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Pe.setTexture2DArray(e,0):Pe.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,B.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}};function bl(e,t,n){return e.minY===void 0||e.maxY===void 0||n>=e.minY&&t<=e.maxY}function xl(e,t,n,r){for(let r of n)if(e>=r.minX&&e<=r.maxX&&t>=r.minZ&&t<=r.maxZ)return r.height;for(let n of r)if(e>=n.minX&&e<=n.maxX&&t>=n.minZ&&t<=n.maxZ){let r=n.axis===`x`?e:t,i=Math.max(0,Math.min(1,(r-n.from)/(n.to-n.from)));return n.baseHeight+(n.topHeight-n.baseHeight)*i}return 0}var Sl=44,Cl=8,wl=1,Tl=8,El=4.5,Dl=.6,Ol=22,kl=6,Al=3,jl=12,Ml=kl,Nl=2,Pl=[[-3,3],[30,36],[-36,-30]];function Fl(e,t,n,r){return{minX:e-n/2,maxX:e+n/2,minZ:t-r/2,maxZ:t+r/2}}function Il(){let e=new q,t=[],n=[],r=[],i=[],a=[],o=new Z({color:9146522,roughness:.9,metalness:.05}),s=new Z({color:10923190,roughness:.85,metalness:.08}),c=new Z({color:9870502,roughness:.85,metalness:.08}),l=new Z({color:8686227,roughness:.85,metalness:.08}),u=new Z({color:9080986,roughness:.5,metalness:.3}),d=new Z({color:5922406,roughness:.9,metalness:.05,side:2}),f=new Z({color:4870232,roughness:.5,metalness:.7}),p=new Z({color:3028288,roughness:.55,metalness:.5}),m=new Z({color:3729151,emissive:2213856,emissiveIntensity:1.6,roughness:.3}),h=new Z({color:1191992,emissive:2079190,emissiveIntensity:.9,roughness:.3}),g=new Z({color:16774365,emissive:16772559,emissiveIntensity:1.1,roughness:.5}),_=new Z({color:11703327,roughness:.8}),v=1.15,y=new Z({color:1586234,emissive:1959679,emissiveIntensity:v,roughness:.25,metalness:.4}),b=new J(new Ai(Sl*2,Sl*2),o);b.rotation.x=-Math.PI/2,b.receiveShadow=!0,e.add(b),r.push(b);let x=new J(new Ai(Sl*2,Sl*2),d);x.rotation.x=Math.PI/2,x.position.y=Tl,e.add(x),r.push(x);let S=new J(new ji(12.4,13.4,48),_);S.rotation.x=-Math.PI/2,S.position.y=.02,e.add(S);let C=new J(new ji(kl,6.3,48),m);C.rotation.x=-Math.PI/2,C.position.y=.02,e.add(C);function w(n,i,a,o,s,c,l=!1){let u=new J(new Y(a,s,o),c);if(u.position.set(n,s/2,i),u.castShadow=!0,u.receiveShadow=!0,e.add(u),t.push(Fl(n,i,a,o)),r.push(u),l){let t=a>=o,r=new J(new Y(t?a:.1,.1,t?.1:o),m);r.position.set(n,s-.2,i),e.add(r)}}function T(e,t,n,r,i){let a=[...i].sort((e,t)=>e[0]-t[0]),o=n,c=(n,r)=>{if(r-n<.05)return;let i=(n+r)/2,a=r-n;e===`x`?w(t,i,Dl,a,El,s,!0):w(i,t,a,Dl,El,s,!0)};for(let[e,t]of a)e>o&&c(o,e),o=Math.max(o,t);o<r&&c(o,r)}w(0,-44-wl/2,90,wl,Cl,c,!0),w(0,44.5,90,wl,Cl,c,!0),w(-44-wl/2,0,wl,Sl*2,Cl,c,!0),w(44.5,0,wl,Sl*2,Cl,c,!0),T(`x`,Ol,-44,Sl,Pl),T(`x`,-22,-44,Sl,Pl),T(`z`,Ol,-44,Sl,Pl),T(`z`,-22,-44,Sl,Pl);let E=new J(new Y(kl*2,Al,kl*2),s);E.position.set(0,Al/2,0),E.castShadow=!0,E.receiveShadow=!0,e.add(E),r.push(E),i.push({minX:-6,maxX:kl,minZ:-6,maxZ:kl,height:Al});let D=new J(new Y(12.1,.1,12.1),m);D.position.set(0,3.01,0),e.add(D);let O=1.5,k=new J(new X(1.9,2.1,.5,20),l);k.position.set(0,3.25,0),k.castShadow=!0,e.add(k),r.push(k);let A=new J(new X(O,O,3.6,20),y);A.position.set(0,5.3,0),e.add(A);let j=new J(new X(2.1,1.7,.7,20),u);j.position.set(0,7.449999999999999,0),j.castShadow=!0,e.add(j),r.push(j);let ee=new Ta(3135743,14,26,2);ee.position.set(0,5.6,0),e.add(ee),n.push({cx:0,cz:0,radius:2});function M(t,n){let r=n*jl,i=n*Ml;t===`x`?a.push({minX:Math.min(i,r),maxX:Math.max(i,r),minZ:-2,maxZ:Nl,axis:t,from:r,to:i,baseHeight:0,topHeight:Al}):a.push({minX:-2,maxX:Nl,minZ:Math.min(i,r),maxZ:Math.max(i,r),axis:t,from:r,to:i,baseHeight:0,topHeight:Al});for(let r=0;r<7;r++){let i=r/7,a=(r+1)/7,o=Al*a,c=jl-(jl-Ml)*i,u=jl-(jl-Ml)*a,d=n*(c+u)/2,f=Math.abs(c-u),p=new J(t===`x`?new Y(f,o,Nl*2):new Y(Nl*2,o,f),r%2==0?s:l);t===`x`?p.position.set(d,o/2,0):p.position.set(0,o/2,d),p.castShadow=!0,p.receiveShadow=!0,e.add(p)}}M(`x`,1),M(`x`,-1),M(`z`,1),M(`z`,-1);let te=.35;function ne(n,i){let a=kl-Nl;for(let o of[-1,1]){let s=o*4,c=i*kl,l=n===`x`?c:s,d=n===`x`?s:c,f=n===`x`?te:a,p=n===`x`?a:te,h=new J(new Y(f,1,p),u);h.position.set(l,3.5,d),h.castShadow=!0,e.add(h),r.push(h),t.push(Fl(l,d,f,p));let g=new J(new Y(f+.02,.06,p+.02),m);g.position.set(l,4,d),e.add(g)}}ne(`x`,1),ne(`x`,-1),ne(`z`,1),ne(`z`,-1);function N(n,i,a){let o=new q;o.position.set(n,0,i),o.rotation.y=a;let s=new J(new Y(2.4,1.1,.9),p);s.position.y=.55,s.castShadow=!0,s.receiveShadow=!0,o.add(s);let c=new J(new Y(2,.6,.05),h);c.position.set(0,1,.48),o.add(c),e.add(o),r.push(s);let l=Math.abs(Math.cos(a))*1.2+Math.abs(Math.sin(a))*.45,u=Math.abs(Math.sin(a))*1.2+Math.abs(Math.cos(a))*.45;t.push(Fl(n,i,l*2,u*2))}function re(t,i,a,o){let s=new J(new X(a,a,o,16),f);s.position.set(t,o/2,i),s.castShadow=!0,s.receiveShadow=!0,e.add(s),r.push(s);let c=new J(new X(a+.04,a+.04,.2,16),_);c.position.set(t,o*.6,i),e.add(c),n.push({cx:t,cz:i,radius:a+.15})}function P(n,i){let a=[1.2,1,.8],o=0;for(let t=0;t<2;t++){let s=a[t],c=new J(new Y(s,s,s),t%2==0?p:l);c.position.set(n+(t===1?.2:0),o+s/2,i+(t===1?.15:0)),c.castShadow=!0,c.receiveShadow=!0,e.add(c),r.push(c),o+=s}t.push(Fl(n,i,1.4,1.4))}re(38,38,2.2,5.5),P(27,39),re(-38,38,2.4,6),P(-39,27),re(38,-38,2,5),P(39,-27),re(-38,-38,2.3,5.8),P(-27,-39),N(0,30,0),N(0,-30,Math.PI),N(30,0,-Math.PI/2),N(-30,0,Math.PI/2);let ie=new ka(14673648,2.6);e.add(ie);let F=new la(16777215,8950944,1.8);e.add(F);function ae(t,n,r){let i=new J(new Y(3,.12,1),g);i.position.set(t,Tl-.5,n),e.add(i);let a=new Ta(16773078,r,30,2);a.position.set(t,Tl-1,n),e.add(a)}for(let e of[-33,0,33])for(let t of[-33,0,33])e===0&&t===0||ae(e,t,10);ae(0,14,7),ae(0,-14,7);let oe=document.createElement(`canvas`);oe.width=128,oe.height=128;let se=oe.getContext(`2d`),I=se.createRadialGradient(64,64,0,64,64,64);I.addColorStop(0,`rgba(140,210,235,0.4)`),I.addColorStop(.6,`rgba(90,170,200,0.16)`),I.addColorStop(1,`rgba(60,140,170,0)`),se.fillStyle=I,se.fillRect(0,0,128,128);let ce=new zr({map:new Si(oe),transparent:!0,depthWrite:!1,blending:2}),le=new Ai(1,1),L=[];for(let t=0;t<28;t++){let t=new J(le,ce),n=5+Math.random()*6;t.scale.set(n,n,1),t.rotation.x=-Math.PI/2;let r=(Math.random()-.5)*Sl*1.8,i=(Math.random()-.5)*Sl*1.8;t.position.set(r,.14+Math.random()*.18,i),t.renderOrder=1,e.add(t),L.push({mesh:t,baseX:r,baseZ:i,speed:.09+Math.random()*.14,radius:1.3+Math.random()*2.2,phase:Math.random()*Math.PI*2})}let ue=[new K(34,0,34),new K(-34,0,34),new K(34,0,-34),new K(-34,0,-34),new K(0,0,38),new K(0,0,-38),new K(38,0,0),new K(-38,0,0)];function de(e){for(let t of L)t.mesh.position.x=t.baseX+Math.sin(e*t.speed+t.phase)*t.radius,t.mesh.position.z=t.baseZ+Math.cos(e*t.speed*.8+t.phase)*t.radius,t.mesh.rotation.z=e*.02+t.phase;let t=.5+.5*Math.sin(e*1.6),n=.5+.5*Math.sin(e*11+1.3),r=t*.85+n*.15;y.emissiveIntensity=v*(.7+.6*r),ee.intensity=10+8*r,A.scale.setScalar(.97+.05*t)}return{group:e,collisionBoxes:t,collisionCircles:n,solidMeshes:r,bounds:Fl(0,0,Sl*2,Sl*2),spawnPoints:ue,playerStart:new K(0,0,16),groundHeightAt:(e,t)=>xl(e,t,i,a),updateMist:de}}var Ll=1.7,Rl=1.85,zl=.4,Bl=5.4,Vl=7.3,Hl=12,Ul=10,Wl=6.2,Gl=-18,Kl=.0022,ql=.0032,Jl=.55,Yl=.72,Xl=`hordefps.sensitivity`,Zl=1,Ql=.25,$l=3,eu={min:Ql,max:$l};function tu(){let e=Number(localStorage.getItem(Xl));return Number.isFinite(e)&&e>=Ql&&e<=$l?e:Zl}function nu(e){let t=Math.max(Ql,Math.min($l,e));return localStorage.setItem(Xl,String(t)),t}var ru=1.8,iu=.028,au=.015,ou=8,su=.35,cu=9,lu=class{camera;domElement;collisionBoxes;collisionCircles;bounds;groundHeightAt;onLockChange;yaw=0;pitch=0;recoilPitch=0;recoilYaw=0;baseFov;sensitivity=Zl;position=new G(0,0);velocity=new G(0,0);verticalVelocity=0;altitude=0;grounded=!0;keys=new Set;touchMoveX=0;touchMoveZ=0;_locked=!1;aiming=!1;wishLen=0;sprinting=!1;carrying=!1;inputLocked=!1;cameraOverride=null;_bobPhase=0;bobDampen=0;constructor(e,t,n,r,i,a,o,s){this.camera=e,this.baseFov=e.fov,this.domElement=t,this.collisionBoxes=n,this.collisionCircles=r,this.bounds=i,this.groundHeightAt=o,this.onLockChange=s,this.position.set(a.x,a.z),this.altitude=o(a.x,a.z),this.sensitivity=tu(),this.camera.rotation.order=`YXZ`,this.camera.position.set(this.position.x,this.altitude+Ll,this.position.y),document.addEventListener(`keydown`,e=>this.keys.add(e.code)),document.addEventListener(`keyup`,e=>this.keys.delete(e.code)),document.addEventListener(`mousemove`,e=>this.handleMouseMove(e)),document.addEventListener(`pointerlockchange`,()=>this.handleLockChange())}get locked(){return this._locked}lock(){this.domElement.requestPointerLock()}enableTouch(){this._locked=!0,this.onLockChange(!0)}press(e){this.keys.add(e)}release(e){this.keys.delete(e)}setTouchMove(e,t){this.touchMoveX=e,this.touchMoveZ=t}setAiming(e){this.aiming=e}setCarrying(e){this.carrying=e}setInputLocked(e){this.inputLocked=e}setCameraOverride(e){this.cameraOverride=e}get isMoving(){return this.wishLen>.01}get isSprinting(){return this.sprinting}get bobPhase(){return this._bobPhase}get facingYaw(){return this.yaw}get lookPitch(){return this.pitch}get eyePosition(){return new K(this.position.x,this.altitude+Ll,this.position.y)}get bobIntensity(){return this.bobDampen*Math.min(1.5,this.velocity.length()/Bl)}addLookDelta(e,t){if(this.inputLocked)return;let n=ql*this.sensitivity*(this.baseFov/this.camera.fov);this.applyLook(e*n,t*n)}get sensitivityValue(){return this.sensitivity}setSensitivity(e){this.sensitivity=nu(e)}addRecoilKick(e,t=0){this.recoilPitch+=e,this.recoilYaw+=t}handleLockChange(){this._locked=document.pointerLockElement===this.domElement,this.onLockChange(this._locked)}handleMouseMove(e){if(!this._locked||this.inputLocked)return;let t=Kl*this.sensitivity*(this.baseFov/this.camera.fov);this.applyLook(e.movementX*t,e.movementY*t)}applyLook(e,t){this.yaw-=e,this.pitch-=t;let n=Math.PI/2-.05;this.pitch=Math.max(-n,Math.min(n,this.pitch)),this.applyCameraRotation()}applyCameraRotation(){let e=Math.PI/2-.05;this.camera.rotation.y=this.yaw+this.recoilYaw,this.camera.rotation.x=Math.max(-e,Math.min(e,this.pitch+this.recoilPitch))}resolveCollision(e){e.x=Math.max(this.bounds.minX+zl,Math.min(this.bounds.maxX-zl,e.x)),e.y=Math.max(this.bounds.minZ+zl,Math.min(this.bounds.maxZ-zl,e.y));let t=this.altitude,n=this.altitude+Rl;for(let r of this.collisionBoxes){if(!bl(r,t,n))continue;let i=Math.max(r.minX,Math.min(e.x,r.maxX)),a=Math.max(r.minZ,Math.min(e.y,r.maxZ)),o=e.x-i,s=e.y-a,c=o*o+s*s;if(c<zl*zl&&c>1e-9){let t=Math.sqrt(c),n=zl-t;e.x+=o/t*n,e.y+=s/t*n}}for(let t of this.collisionCircles){let n=e.x-t.cx,r=e.y-t.cz,i=n*n+r*r,a=t.radius+zl;if(i<a*a&&i>1e-9){let t=Math.sqrt(i),o=a-t;e.x+=n/t*o,e.y+=r/t*o}}}update(e){let t=new G(-Math.sin(this.yaw),-Math.cos(this.yaw)),n=new G(-t.y,t.x),r=0,i=0;this.inputLocked||(r=this.touchMoveX,i=this.touchMoveZ,this.keys.has(`KeyW`)&&(i+=1),this.keys.has(`KeyS`)&&--i,this.keys.has(`KeyD`)&&(r+=1),this.keys.has(`KeyA`)&&--r);let a=new G().addScaledVector(t,i).addScaledVector(n,r);a.lengthSq()>1&&a.normalize(),this.wishLen=a.length(),this.sprinting=!this.carrying&&this.wishLen>.01&&(this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`));let o=(this.sprinting?Vl:Bl)*(this.aiming?Jl:1)*(this.carrying?Yl:1),s=a.clone().multiplyScalar(o),c=a.lengthSq()>0?Hl:Ul,l=Math.min(1,c*e);this.velocity.x+=(s.x-this.velocity.x)*l,this.velocity.y+=(s.y-this.velocity.y)*l;let u=this.position.clone().addScaledVector(this.velocity,e);this.resolveCollision(u),this.position.copy(u),!this.inputLocked&&this.grounded&&this.keys.has(`Space`)&&(this.verticalVelocity=Wl,this.grounded=!1),this.verticalVelocity+=Gl*e,this.altitude+=this.verticalVelocity*e;let d=this.groundHeightAt(this.position.x,this.position.y);if(this.altitude<=d?(this.altitude=d,this.verticalVelocity=0,this.grounded=!0):this.grounded=!1,this.bobDampen+=(1-this.bobDampen)*Math.min(1,ou*e),this._bobPhase+=this.velocity.length()*e*ru,this.recoilPitch=Math.max(0,this.recoilPitch-cu*e*this.recoilPitch),this.recoilYaw-=cu*e*this.recoilYaw,this.cameraOverride)this.camera.position.copy(this.cameraOverride.position),this.camera.rotation.set(this.cameraOverride.pitch,this.cameraOverride.yaw,0);else{let e=this.bobIntensity*(this.aiming?su:1),t=Math.abs(Math.sin(this._bobPhase))*iu*e,n=Math.sin(this._bobPhase*.5)*au*e;this.camera.position.set(this.position.x,this.altitude+Ll+t,this.position.y),this.camera.rotation.z=n,this.applyCameraRotation()}}},uu={pistol:`<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M4 10h16v3h5a1 1 0 0 1 1 1v3h-8v-2h-3l-3 6H7l2-6H4z"/></svg>`,rifle:`<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M2 13l5-1 2-2h11v3h4v-2h2v6h-2v-2h-4v2h-8l-1 4h-4l1-4H6l-1 3H2z"/></svg>`,shotgun:`<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M2 13h20v3H2z M9 17h6v4H9z M22 11l8 2v8l-8 2z"/></svg>`,knife:`<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M27 4 13 18l1 3 3 1L28 8zM11 20l-6 6 1 2 2 1 6-6z"/></svg>`,medkit:`<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M5 11a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm7-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3H12zM14 14v3h-3v4h3v3h4v-3h3v-4h-3v-3z"/></svg>`},du=[{key:`6`,glyph:`⛁`,label:`Recargar munición`},{key:`7`,glyph:`✚`,label:`Botiquín`},{key:`8`,glyph:`♥`,label:`Vida máxima`}],fu=55,pu={pistol:`Pistola`,rifle:`Fusil`,shotgun:`Escopeta`,knife:`Cuchillo`,medkit:`Botiquín`};function mu(){let e=`ontouchstart`in window||navigator.maxTouchPoints>0,t=window.matchMedia(`(pointer: coarse)`).matches;return e&&t}var hu=class{root;joystickTouchId=null;joystickCenter={x:0,y:0};lookTouchId=null;lastLookX=0;lastLookY=0;fireTouchId=null;lastFireX=0;lastFireY=0;weaponSlots=[];shopDock;crateBtn;rescueBtn;cabinetBtn;constructor(e,t){this.root=document.createElement(`div`),this.root.id=`mobile-controls`,this.root.style.display=`none`;let n=[`pistol`,`rifle`,`knife`,`medkit`,`shotgun`].map((e,t)=>`
        <button class="weapon-slot" data-slot="${e}" aria-label="${pu[e]}">
          <span class="weapon-key">${t+1}</span>
          <span class="weapon-icon">${uu[e]}</span>
        </button>`).join(``),r=du.map(e=>`
        <button class="mobile-btn shop-buy-btn" data-key="${e.key}" aria-label="${e.label}">
          <span class="btn-glyph">${e.glyph}</span>
        </button>`).join(``);this.root.innerHTML=`
      <div id="touch-look-layer"></div>
      <div id="joystick-base"><div id="joystick-knob"></div></div>
      <div id="shop-dock">${r}</div>
      <div id="weapon-dock">${n}</div>
      <button class="mobile-btn" id="btn-reload" aria-label="Recargar"><span class="btn-glyph">⟳</span></button>
      <button class="mobile-btn" id="btn-jump" aria-label="Saltar"><span class="btn-glyph">▲</span></button>
      <button class="mobile-btn" id="btn-inventory" aria-label="Mochila"><span class="btn-glyph">☰</span></button>
      <button class="mobile-btn hidden" id="btn-crate" aria-label="Abrir caja"><span class="btn-glyph">⛁</span></button>
      <button class="mobile-btn hidden" id="btn-rescue" aria-label="Curar"><span class="btn-glyph">✚</span></button>
      <button class="mobile-btn hidden" id="btn-cabinet" aria-label="Abrir arsenal"><span class="btn-glyph">🔫</span></button>
      <!-- Hidden while third person is disabled (see THIRD_PERSON_ENABLED in main.ts). -->
      <button class="mobile-btn hidden" id="btn-view" aria-label="Cambiar cámara"><span class="btn-glyph">⟲</span></button>
      <button class="mobile-btn mobile-btn-fire" id="btn-fire" aria-label="Disparar"></button>
    `,e.appendChild(this.root);let i=this.root.querySelector(`#touch-look-layer`),a=this.root.querySelector(`#joystick-base`),o=this.root.querySelector(`#joystick-knob`),s=this.root.querySelector(`#btn-fire`),c=this.root.querySelector(`#btn-jump`),l=this.root.querySelector(`#btn-reload`),u=this.root.querySelector(`#btn-inventory`);this.crateBtn=this.root.querySelector(`#btn-crate`),this.rescueBtn=this.root.querySelector(`#btn-rescue`),this.cabinetBtn=this.root.querySelector(`#btn-cabinet`);let d=this.root.querySelector(`#btn-view`);this.shopDock=this.root.querySelector(`#shop-dock`),this.setupJoystick(a,o,t.onMove),this.setupLook(i,t.onLook),this.setupFireLookButton(s,t.onFireStart,t.onFireEnd,t.onLook),this.setupHoldButton(c,t.onJumpStart,t.onJumpEnd),this.setupTapButton(l,t.onReload),this.setupTapButton(u,t.onToggleInventory),this.setupTapButton(this.crateBtn,t.onOpenCrate),this.setupTapButton(this.cabinetBtn,t.onOpenCabinet),this.setupHoldButton(this.rescueBtn,t.onRescueStart,t.onRescueEnd),this.setupTapButton(d,t.onToggleView),this.weaponSlots=Array.from(this.root.querySelectorAll(`.weapon-slot`));for(let e of this.weaponSlots){let n=e.dataset.slot;this.setupTapButton(e,()=>t.onSelectWeapon(n))}for(let e of this.root.querySelectorAll(`.shop-buy-btn`)){let n=e.dataset.key;this.setupTapButton(e,()=>t.onBuy(n))}}setShopVisible(e){this.shopDock.style.display=e?`flex`:`none`}setCrateAvailable(e){this.crateBtn.classList.toggle(`hidden`,!e)}setRescueAvailable(e){this.rescueBtn.classList.toggle(`hidden`,!e)}setCabinetAvailable(e){this.cabinetBtn.classList.toggle(`hidden`,!e)}setActiveWeapon(e){for(let t of this.weaponSlots)t.classList.toggle(`active`,t.dataset.slot===e)}setWeaponLocked(e,t){this.weaponSlots.find(t=>t.dataset.slot===e)?.classList.toggle(`locked`,t)}setVisible(e){this.root.style.display=e?`block`:`none`}findTouch(e,t){if(t===null)return null;for(let n=0;n<e.length;n++)if(e[n].identifier===t)return e[n];return null}setupJoystick(e,t,n){e.addEventListener(`touchstart`,t=>{if(this.joystickTouchId!==null)return;let n=t.changedTouches[0];this.joystickTouchId=n.identifier;let r=e.getBoundingClientRect();this.joystickCenter={x:r.left+r.width/2,y:r.top+r.height/2},t.preventDefault()},{passive:!1}),e.addEventListener(`touchmove`,e=>{let r=this.findTouch(e.changedTouches,this.joystickTouchId);if(!r)return;let i=r.clientX-this.joystickCenter.x,a=r.clientY-this.joystickCenter.y,o=Math.hypot(i,a);o>fu&&(i=i/o*fu,a=a/o*fu),t.style.transform=`translate(${i}px, ${a}px)`,n(i/fu,-a/fu),e.preventDefault()},{passive:!1});let r=e=>{this.findTouch(e.changedTouches,this.joystickTouchId)&&(this.joystickTouchId=null,t.style.transform=`translate(0px, 0px)`,n(0,0))};e.addEventListener(`touchend`,r),e.addEventListener(`touchcancel`,r)}setupLook(e,t){e.addEventListener(`touchstart`,e=>{if(this.lookTouchId!==null)return;let t=e.changedTouches[0];this.lookTouchId=t.identifier,this.lastLookX=t.clientX,this.lastLookY=t.clientY,e.preventDefault()},{passive:!1}),e.addEventListener(`touchmove`,e=>{let n=this.findTouch(e.changedTouches,this.lookTouchId);if(!n)return;let r=n.clientX-this.lastLookX,i=n.clientY-this.lastLookY;this.lastLookX=n.clientX,this.lastLookY=n.clientY,t(r,i),e.preventDefault()},{passive:!1});let n=e=>{this.findTouch(e.changedTouches,this.lookTouchId)&&(this.lookTouchId=null)};e.addEventListener(`touchend`,n),e.addEventListener(`touchcancel`,n)}setupFireLookButton(e,t,n,r){e.addEventListener(`touchstart`,e=>{if(e.preventDefault(),e.stopPropagation(),this.fireTouchId!==null)return;let n=e.changedTouches[0];this.fireTouchId=n.identifier,this.lastFireX=n.clientX,this.lastFireY=n.clientY,t()},{passive:!1}),e.addEventListener(`touchmove`,e=>{let t=this.findTouch(e.changedTouches,this.fireTouchId);if(!t)return;e.preventDefault(),e.stopPropagation();let n=t.clientX-this.lastFireX,i=t.clientY-this.lastFireY;this.lastFireX=t.clientX,this.lastFireY=t.clientY,r(n,i)},{passive:!1});let i=e=>{this.findTouch(e.changedTouches,this.fireTouchId)&&(e.preventDefault(),e.stopPropagation(),this.fireTouchId=null,n())};e.addEventListener(`touchend`,i),e.addEventListener(`touchcancel`,i)}setupHoldButton(e,t,n){e.addEventListener(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),t()},{passive:!1});let r=e=>{e.preventDefault(),e.stopPropagation(),n()};e.addEventListener(`touchend`,r),e.addEventListener(`touchcancel`,r)}setupTapButton(e,t){e.addEventListener(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),t()},{passive:!1})}};function gu(){let e=new Z({color:14868700,roughness:.7,emissive:3947320,emissiveIntensity:.45}),t=new Z({color:3093048,roughness:.9,emissive:1381914,emissiveIntensity:.5}),n=new q;n.position.set(.055,-.095,.05),n.rotation.set(.24,.34,-.3);let r=new J(new Y(.088,.086,.055),e);r.position.set(0,-.01,.03),n.add(r);let i=new J(new Y(.082,.08,.62),t);return i.position.set(0,-.014,.368),n.add(i),n}function _u(){let e=new Z({color:14868700,roughness:.7,emissive:3947320,emissiveIntensity:.45}),t=new Z({color:3093048,roughness:.9,emissive:1381914,emissiveIntensity:.5}),n=new q,r=new J(new Y(.075,.062,.08),e);n.add(r);let i=new J(new Y(.078,.026,.05),e);i.position.set(0,.03,-.02),n.add(i);let a=new J(new Y(.078,.072,.42),t);return a.position.set(-.06,-.055,.24),a.rotation.set(.28,.42,.28),n.add(a),n}function vu(){let e=new Z({color:8225676,roughness:.35,metalness:.8,emissive:3159098,emissiveIntensity:.7}),t=new Z({color:5791077,roughness:.55,metalness:.6,emissive:2435117,emissiveIntensity:.7}),n=new zr({color:16774872}),r=new q,i=new J(new X(.022,.022,.24,10),t);i.rotation.x=Math.PI/2,r.add(i);for(let t=0;t<3;t++){let n=new J(new X(.024,.024,.01,10),e);n.rotation.x=Math.PI/2,n.position.set(0,0,.02+t*.032),r.add(n)}let a=new J(new X(.029,.023,.04,10),e);a.rotation.x=Math.PI/2,a.position.set(0,0,-.24/2-.018),r.add(a);let o=new J(new Ei(.026,12),n);o.position.set(0,0,-.24/2-.039),r.add(o);let s=new J(new X(.02,.023,.026,10),e);s.rotation.x=Math.PI/2,s.position.set(0,0,.131),r.add(s);let c=new wn;return c.position.set(0,0,-.24/2-.06),r.add(c),r.userData.emitter=c,r}function yu(e,t){e.quaternion.setFromUnitVectors(new K(0,0,-1),t.clone().normalize())}var bu=new K(-1,-.34,.5);function xu(){let e=new Z({color:14868700,roughness:.7,emissive:3947320,emissiveIntensity:.45}),t=new Z({color:3093048,roughness:.9,emissive:1381914,emissiveIntensity:.5}),n=new q,r=new q;yu(r,bu),n.add(r);let i=new J(new Y(.085,.078,.105),e);r.add(i);let a=new J(new Y(.076,.07,.04),e);a.position.z=-.07,r.add(a);let o=new Y(.066,.06,.44);o.translate(0,0,-.44/2);let s=new J(o,t);s.position.z=-.06,r.add(s);let c=vu();return c.position.set(.012,-.045,-.11),n.add(c),n.userData.flashlight=c,n}function Su(){let e=new Z({color:14868700,roughness:.7,emissive:3947320,emissiveIntensity:.45}),t=new Z({color:3093048,roughness:.9,emissive:1381914,emissiveIntensity:.5}),n=new q;n.rotation.set(.4,-.5,.35);let r=new J(new Y(.078,.07,.075),e);r.position.set(0,-.01,0),n.add(r);let i=new J(new Y(.086,.084,.05),e);i.position.set(0,-.02,.06),n.add(i);let a=new J(new Y(.08,.078,.5),t);return a.position.set(0,-.02,.335),n.add(a),n}var Cu=null,$=null,wu=null,Tu=`hordefps.volume`,Eu=.6;function Du(){let e=localStorage.getItem(Tu);if(e===null)return Eu;let t=Number(e);return Number.isFinite(t)&&t>=0&&t<=1?t:Eu}function Ou(e){let t=Math.max(0,Math.min(1,e));localStorage.setItem(Tu,String(t)),$&&($.gain.value=t)}function ku(){return $?$.gain.value:Du()}function Au(){if(Cu)return Cu;let e=window.AudioContext??window.webkitAudioContext;return e?(Cu=new e,$=Cu.createGain(),$.gain.value=Du(),$.connect(Cu.destination),Cu):null}function ju(){let e=Au();e&&e.state===`suspended`&&e.resume()}function Mu(e){if(wu)return wu;let t=e.sampleRate;wu=e.createBuffer(1,t,e.sampleRate);let n=wu.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1;return wu}function Nu(e,t){let n=e.createBufferSource(),r=Mu(e);n.buffer=r;let i=Math.max(0,r.duration-t-.05),a=e.currentTime;return n.start(a,Math.random()*i),n.stop(a+t+.02),n}function Pu(e,t,n){let{duration:r,filterType:i=`bandpass`,freq:a,freqEnd:o,q:s=1,gainPeak:c=.6,attack:l=.002}=n,u=Nu(e,r),d=e.createBiquadFilter();d.type=i,d.Q.value=s;let f=e.createGain(),p=e.currentTime;d.frequency.setValueAtTime(a,p),o!==void 0&&o!==a&&d.frequency.exponentialRampToValueAtTime(Math.max(1,o),p+r),f.gain.setValueAtTime(1e-4,p),f.gain.linearRampToValueAtTime(c,p+l),f.gain.exponentialRampToValueAtTime(.001,p+r),u.connect(d),d.connect(f),f.connect(t)}function Fu(e,t,n){let{freqStart:r,freqEnd:i=r,type:a=`sine`,duration:o,gainPeak:s=.4,attack:c=.002}=n,l=e.createOscillator();l.type=a;let u=e.currentTime;l.frequency.setValueAtTime(r,u),l.frequency.exponentialRampToValueAtTime(Math.max(1,i),u+o);let d=e.createGain();d.gain.setValueAtTime(1e-4,u),d.gain.linearRampToValueAtTime(s,u+c),d.gain.exponentialRampToValueAtTime(.001,u+o),l.connect(d),d.connect(t),l.start(u),l.stop(u+o+.02)}function Iu(){let e=Au();!e||!$||(Pu(e,$,{duration:.09,freq:1600,q:.7,gainPeak:.5}),Fu(e,$,{freqStart:180,freqEnd:60,type:`triangle`,duration:.08,gainPeak:.35}))}function Lu(){let e=Au();!e||!$||(Pu(e,$,{duration:.1,freq:2200,q:.6,gainPeak:.6}),Fu(e,$,{freqStart:140,freqEnd:45,type:`sawtooth`,duration:.09,gainPeak:.4}))}function Ru(){let e=Au();!e||!$||(Pu(e,$,{duration:.16,freq:1200,freqEnd:350,q:.5,gainPeak:.75}),Fu(e,$,{freqStart:110,freqEnd:32,type:`sawtooth`,duration:.14,gainPeak:.5}))}function zu(){let e=Au();!e||!$||Bu(e,$,.4,4200)}function Bu(e,t,n,r=3e3){Pu(e,t,{duration:.015,filterType:`highpass`,freq:r,q:.6,gainPeak:n,attack:3e-4})}function Vu(e,t,n,r=220,i=.06){Pu(e,t,{duration:i,filterType:`lowpass`,freq:r*2,freqEnd:r*.5,q:.7,gainPeak:n,attack:5e-4})}function Hu(e,t){let{duration:n,grains:r,freq:i,gainPeak:a}=t;for(let t=0;t<r;t++){let o=t/r*n+(Math.random()-.5)*(n/r)*.7;setTimeout(()=>{let t=Au();t&&Pu(t,e,{duration:.008+Math.random()*.012,filterType:`bandpass`,freq:i*(.7+Math.random()*.6),q:.5,gainPeak:a*(.55+Math.random()*.45),attack:8e-4})},Math.max(0,o)*1e3)}}function Uu(e,t){let{startDelay:n,taps:r,freq:i,gainPeak:a}=t;for(let t=0;t<r;t++){let r=n+t*(7+Math.random()*9),o=.5**t;setTimeout(()=>{let t=Au();t&&Pu(t,e,{duration:.01,filterType:`highpass`,freq:i*(.85+Math.random()*.3),q:.6,gainPeak:a*o,attack:3e-4})},r)}}function Wu(){let e=Au();!e||!$||Bu(e,$,.6,3400)}function Gu(){!Au()||!$||(Hu($,{duration:.07,grains:5,freq:1200,gainPeak:.3}),setTimeout(()=>{let e=Au();!e||!$||(Vu(e,$,.8,260,.055),Uu($,{startDelay:10,taps:3,freq:2200,gainPeak:.4}))},70))}function Ku(){!Au()||!$||(Hu($,{duration:.05,grains:6,freq:900,gainPeak:.38}),setTimeout(()=>{let e=Au();!e||!$||(Vu(e,$,1.15,210,.08),Bu(e,$,.65,3200),Uu($,{startDelay:15,taps:4,freq:3400,gainPeak:.52}))},50))}function qu(){!Au()||!$||(Hu($,{duration:.09,grains:7,freq:1600,gainPeak:.4}),setTimeout(()=>{let e=Au();!e||!$||(Vu(e,$,1.2,250,.07),Bu(e,$,.6,3e3),Uu($,{startDelay:15,taps:4,freq:3e3,gainPeak:.55}))},110))}function Ju(e,t,n){let{duration:r,freqStart:i,freqPeak:a,freqEnd:o,q:s,gainPeak:c,swell:l}=n,u=Nu(e,r),d=e.createBiquadFilter();d.type=`bandpass`,d.Q.value=s;let f=e.currentTime,p=f+r*l;d.frequency.setValueAtTime(i,f),d.frequency.linearRampToValueAtTime(a,p),d.frequency.linearRampToValueAtTime(Math.max(1,o),f+r);let m=e.createGain();m.gain.setValueAtTime(1e-4,f),m.gain.linearRampToValueAtTime(c,p),m.gain.exponentialRampToValueAtTime(.001,f+r),u.connect(d),d.connect(m),m.connect(t)}function Yu(e,t,n){let{freqs:r,duration:i,gainPeak:a}=n,o=e.currentTime,s=Nu(e,i);r.forEach((n,c)=>{let l=e.createBiquadFilter();l.type=`bandpass`,l.frequency.value=n*(.97+Math.random()*.06),l.Q.value=14+c*8;let u=i*(1-c*.2),d=e.createGain();d.gain.setValueAtTime(1e-4,o),d.gain.linearRampToValueAtTime(a/r.length,o+.004),d.gain.exponentialRampToValueAtTime(.001,o+u),s.connect(l),l.connect(d),d.connect(t)})}function Xu(){let e=Au();!e||!$||(Ju(e,$,{duration:.17,freqStart:900,freqPeak:5400,freqEnd:1300,q:1.1,gainPeak:.4,swell:.45}),Yu(e,$,{freqs:[5400,8e3],duration:.11,gainPeak:.2}))}function Zu(){let e=Au();!e||!$||(Ju(e,$,{duration:.08,freqStart:2e3,freqPeak:6600,freqEnd:1700,q:1.4,gainPeak:.65,swell:.3}),Yu(e,$,{freqs:[4800,7200,9600],duration:.18,gainPeak:.45}))}function Qu(){let e=Au();!e||!$||(Pu(e,$,{duration:.09,filterType:`lowpass`,freq:320,q:.8,gainPeak:1.2,attack:2e-4}),Pu(e,$,{duration:.04,filterType:`bandpass`,freq:640,q:1,gainPeak:.5,attack:3e-4}),Pu(e,$,{duration:.03,filterType:`bandpass`,freq:1800,freqEnd:2800,q:.4,gainPeak:.7,attack:2e-4}),Hu($,{duration:.045,grains:4,freq:2400,gainPeak:.16}))}function $u(){let e=Au();!e||!$||(Pu(e,$,{duration:.15,freq:300,q:.6,gainPeak:.35}),Fu(e,$,{freqStart:110,freqEnd:50,type:`sine`,duration:.15,gainPeak:.3}))}var ed=30,td=1.6,nd=.11,rd=26,id=60,ad=.045,od=9,sd=.028,cd=.008,ld=2.1,ud=new K(-.2,.05,.28),dd=10,fd=1.6,pd=.3,md=1.4,hd=.5,gd=.32,_d=.55,vd=new K(.05,-.44,.16),yd=-.8,bd=.55,xd=.018,Sd=.016,Cd=.035,wd=.06,Td=8,Ed=new K(.05,-.12,.08),Dd=new sn(-.16,0,-.14);function Od(){let e=new q,t=new Z({color:10462636,roughness:.35,metalness:.85,emissive:2830132,emissiveIntensity:.6}),n=new Z({color:2303273,roughness:.8,metalness:.1,emissive:1316120,emissiveIntensity:.7}),r=new Z({color:4869974,roughness:.45,metalness:.8,emissive:1842979,emissiveIntensity:.6}),i=new J(new Y(.05,.055,.19),n);e.add(i);let a=-.055/2,o=.058,s=.052,c=.3,l=.0535,u=-.02,d=new J(new Y(o,s,c),t);d.position.set(0,l,u),e.add(d);let f=u-c/2,p=.13;for(let t=0;t<6;t++){let n=p-.018-t*.016;for(let t of[-1,1]){let i=new J(new Y(.004,s*.72,.006),r);i.position.set(o/2*t,l,n),e.add(i)}}let m=new J(new Y(.006,.026,.07),n);m.position.set(o/2-.001,.0615,u-.05),e.add(m);let h=new J(new X(.0135,.0135,.03,12),r);h.rotation.x=Math.PI/2,h.position.set(0,l,f-.014),e.add(h);let g=new J(new Ni(.014,.004,6,14),r);g.position.set(0,l,f-.001),e.add(g);let _=new J(new Y(.008,.014,.012),r);_.position.set(0,.08650000000000001,-.148),e.add(_);let v=new J(new Y(.03,.012,.016),r);v.position.set(0,.0855,p-.026),e.add(v);let y=new J(new Y(.016,.026,.012),r);y.position.set(0,.0415,.087),e.add(y);let b=new J(new Y(.042,.014,.045),n);b.position.set(0,.0235,.107),b.rotation.x=.35,e.add(b);let x=new J(new Ni(.03,.006,6,16,Math.PI*1.35),n);x.rotation.set(0,Math.PI/2,Math.PI*.12),x.position.set(0,a-.028,-.035),e.add(x);let S=new J(new Y(.008,.028,.009),r);S.position.set(0,a-.019,-.035),e.add(S);let C=.05,w=.135,T=.062,E=new q;E.position.set(0,a,.028),E.rotation.x=-.26,e.add(E);let D=new J(new Y(C,w,T),n);D.position.set(0,-.135/2,0),E.add(D);for(let e=0;e<5;e++){let t=new J(new Y(.053000000000000005,.006,.004),r);t.position.set(0,-.03-e*.021,-.028999999999999998),E.add(t)}let O=new q,k=new J(new Y(C-.004,w*.95,T-.006),t);k.position.set(0,-.135/2,0),O.add(k);let A=new J(new Y(.058,.014,.07),r);A.position.set(0,-.139,0),O.add(A),E.add(O);let j=new zr({color:16764779,transparent:!0,opacity:0}),ee=new J(new Di(.05,.15,8),j);ee.rotation.x=-Math.PI/2,ee.position.set(0,l,f-.085),e.add(ee);let M=new Ta(16757575,0,4);return M.position.set(0,l,f-.06),e.add(M),e.userData.slide=d,e.userData.slideRestZ=u,e.userData.magGroup=O,e.userData.muzzleFlash=ee,e.userData.muzzleLight=M,e.userData.gripPivot=E,e.userData.gripHeight=w,e.userData.gripDepth=T,e.userData.harriesAnchor=new K(.27,a-.05,-.1),e}var kd=class{ammoInMag=ed;phase=`idle`;stowTimer=0;harriesAway=0;camera;controller;inventory;reloadTimer=0;reloadStage=0;cooldown=0;raycaster=new qa;viewModel;muzzleFlash;muzzleLight;muzzleFlashTimer=0;recoil=0;basePosition;slide;slideRestZ=0;magGroup;reloadHand;harriesHand;harriesEmitter;harriesAnchor=new K;presentTimer=0;gripPivot;tmpVec=new K;switchOffset=0;aiming=!1;aimAmount=0;sprintAmount=0;constructor(e,t,n){this.camera=e,this.controller=t,this.inventory=n,this.raycaster.far=id,this.viewModel=new q;let r=.85,i=Od();i.position.set(0,0,0),i.rotation.set(0,.12,.04),i.scale.setScalar(r),this.viewModel.add(i),this.slide=i.userData.slide,this.slideRestZ=i.userData.slideRestZ,this.magGroup=i.userData.magGroup,this.muzzleFlash=i.userData.muzzleFlash,this.muzzleLight=i.userData.muzzleLight;let a=gu();a.scale.setScalar(1/r),a.position.y+=.05,a.rotation.y-=.26,i.add(a),this.gripPivot=i.userData.gripPivot;let o=_u();o.scale.setScalar(1/r),o.visible=!1,i.add(o),this.reloadHand=o;let s=xu();s.scale.setScalar(1/r),this.harriesAnchor.copy(i.userData.harriesAnchor),s.position.copy(this.harriesAnchor),i.add(s),this.harriesHand=s;let c=s.userData.flashlight;this.harriesEmitter=c.userData.emitter;let l=new Ta(16773856,.85,3);l.position.set(.35,.4,.5),this.viewModel.add(l);let u=new Ta(10335440,.5,3);u.position.set(-.4,.2,-.4),this.viewModel.add(u),this.viewModel.scale.setScalar(ld),this.basePosition=new K(.2,-.24,-.95),this.viewModel.position.copy(this.basePosition),e.add(this.viewModel)}setActive(e){this.viewModel.visible=e}setSwitchOffset(e){this.switchOffset=e}setAiming(e){this.aiming=e}get reserveAmmo(){return this.inventory.countItem(`pistol_ammo`)}get damage(){return rd}get isReloading(){return this.phase===`stow`||this.phase===`reload`}get flashlightBlend(){return 1-this.harriesAway}getFlashlightEmitter(e){return this.harriesEmitter.getWorldPosition(e)}startPresent(){this.isReloading||(this.phase=`present`,this.presentTimer=_d,this.harriesAway=1,this.updateHarriesHand())}get reloadProgress(){return this.phase===`reload`?1-this.reloadTimer/td:0}canFire(){return!this.isReloading&&this.ammoInMag>0&&this.cooldown<=0}tryReload(){this.isReloading||this.ammoInMag===ed||this.reserveAmmo===0||(this.phase=`stow`,this.stowTimer=gd*(1-this.harriesAway))}fire(e){if(!this.canFire())return this.ammoInMag===0&&!this.isReloading&&(this.reserveAmmo>0?this.tryReload():zu()),null;--this.ammoInMag,this.cooldown=nd;let t=1-this.aimAmount*.5;this.recoil=ad*t,this.controller.addRecoilKick(sd*t,(Math.random()-.5)*2*cd*t),this.muzzleFlashTimer=.05,Iu(),this.raycaster.setFromCamera(new G(0,0),this.camera);let n=this.raycaster.intersectObjects(e,!0);if(n.length===0)return null;let r=n[0];return{object:r.object,point:r.point,distance:r.distance}}applyReloadPose(e){let t=e<.12?e/.12:e>.9?Math.max(0,(1-e)/.1):1,n=e>.66&&e<.82?Math.sin((e-.66)/.16*Math.PI):0;this.viewModel.position.set(this.basePosition.x-.04*t,this.basePosition.y-.08*t+.03*n,this.basePosition.z+.04*t),this.viewModel.rotation.set(.45*t-.12*n,.28*t,.45*t);let r=0;if(e>=.18&&e<.4?r=-.3*((e-.18)/.22):e>=.4&&e<.44?r=-.3:e>=.44&&e<.58&&(r=-.3*(1-(e-.44)/.14)),this.magGroup.position.y=r,this.slide.position.z=this.slideRestZ+n*.12,e>.1&&e<.9){this.reloadHand.visible=!0,this.gripPivot.updateMatrix();let t=this.tmpVec.copy(this.magGroup.position).applyMatrix4(this.gripPivot.matrix),n=t.x-.02,r=t.y-.01,i=t.z-.03,a=this.slide.position.x,o=this.slide.position.y+.02,s=this.slide.position.z-.03,c=-.14,l=-.34,u=.08,d,f,p;if(e<.18){let t=(e-.1)/.08;d=c+(n-c)*t,f=l+(r-l)*t,p=u+(i-u)*t}else if(e<.58)d=n,f=r,p=i;else if(e<.66){let t=(e-.58)/.08,c=Math.max(r,o)+.06,l=(i+s)/2+.03,u=1-t;d=u*u*n+2*u*t*-.13+t*t*a,f=u*u*r+2*u*t*c+t*t*o,p=u*u*i+2*u*t*l+t*t*s}else if(e<.82)d=a,f=o,p=s;else{let t=(e-.82)/.08;d=a+(c-a)*t,f=o+(l-o)*t,p=s+(u-s)*t}this.reloadHand.position.set(d,f,p)}else this.reloadHand.visible=!1}updateReloadSequence(e){switch(this.phase){case`stow`:{this.stowTimer=Math.max(0,this.stowTimer-e);let t=1-this.stowTimer/gd;this.harriesAway=t*t,this.stowTimer<=0&&(this.harriesAway=1,this.phase=`reload`,this.reloadTimer=td,this.reloadStage=0,Wu());break}case`reload`:{this.harriesAway=1,this.reloadTimer-=e;let t=1-this.reloadTimer/td;if(this.reloadStage===0&&t>=.4?(this.reloadStage=1,Gu()):this.reloadStage===1&&t>=.58?(this.reloadStage=2,Ku()):this.reloadStage===2&&t>=.74&&(this.reloadStage=3,qu()),this.reloadTimer<=0){let e=ed-this.ammoInMag,t=this.inventory.removeItem(`pistol_ammo`,e);this.ammoInMag+=t,this.phase=`present`,this.presentTimer=_d}break}case`present`:{this.presentTimer=Math.max(0,this.presentTimer-e);let t=1-this.presentTimer/_d;this.harriesAway=(1-t)**3,this.presentTimer<=0&&(this.harriesAway=0,this.phase=`idle`);break}default:this.harriesAway=0}}updateHarriesHand(){this.harriesHand.visible=this.phase!==`reload`;let e=this.harriesAway;this.harriesHand.position.copy(this.harriesAnchor).addScaledVector(vd,e),this.harriesHand.rotation.set(bd*e,0,yd*e)}computeSway(e,t){let n=t*(1-this.aimAmount*.75);return{pos:new K(Math.cos(e*.5)*xd*n,Math.abs(Math.sin(e))*Sd*n,0),rot:new sn(-Math.abs(Math.sin(e))*Cd*n,0,Math.sin(e*.5)*wd*n)}}update(e,t=0,n=0,r=!1){if(this.cooldown>0&&(this.cooldown=Math.max(0,this.cooldown-e)),this.aimAmount+=(+!!this.aiming-this.aimAmount)*Math.min(1,dd*e),this.sprintAmount+=(+!!r-this.sprintAmount)*Math.min(1,Td*e),this.updateReloadSequence(e),this.updateHarriesHand(),this.recoil=Math.max(0,this.recoil-od*e*this.recoil),this.phase===`reload`){this.applyReloadPose(1-this.reloadTimer/td);let e=this.computeSway(t,n),r=this.sprintAmount*(1-this.aimAmount);this.viewModel.position.x+=e.pos.x+ud.x*this.aimAmount+Ed.x*r,this.viewModel.position.y+=e.pos.y+ud.y*this.aimAmount+Ed.y*r,this.viewModel.position.z+=e.pos.z+ud.z*this.aimAmount+Ed.z*r,this.viewModel.rotation.x+=e.rot.x+Dd.x*r,this.viewModel.rotation.y+=e.rot.y+Dd.y*r,this.viewModel.rotation.z+=e.rot.z+Dd.z*r}else{let e=this.computeSway(t,n),r=this.sprintAmount*(1-this.aimAmount);this.viewModel.position.set(this.basePosition.x+ud.x*this.aimAmount+e.pos.x+Ed.x*r,this.basePosition.y+this.recoil*.4+ud.y*this.aimAmount+e.pos.y+Ed.y*r,this.basePosition.z+this.recoil+ud.z*this.aimAmount+e.pos.z+Ed.z*r),this.viewModel.rotation.set(e.rot.x+Dd.x*r,e.rot.y+Dd.y*r,e.rot.z+Dd.z*r),this.magGroup.position.y=0,this.slide.position.z=this.slideRestZ,this.reloadHand.visible=!1}if(this.muzzleFlashTimer>0){this.muzzleFlashTimer-=e;let t=this.muzzleFlash.material;t.opacity=Math.max(0,this.muzzleFlashTimer/.05),this.muzzleLight.intensity=t.opacity*6}else this.muzzleLight.intensity=0;this.switchOffset!==0&&(this.viewModel.position.y-=this.switchOffset*fd,this.viewModel.position.z-=this.switchOffset*pd,this.viewModel.rotation.x+=this.switchOffset*md,this.viewModel.rotation.z+=this.switchOffset*hd)}},Ad=30,jd=2.1,Md=.075,Nd=22,Pd=90,Fd=.03,Id=10,Ld=.02,Rd=.014,zd=2.1,Bd=new K(-.22,.06,.3),Vd=10,Hd=1.6,Ud=.3,Wd=1.4,Gd=.5,Kd=.8,qd=.62,Jd=.7,Yd=new K(-.16,-.14,.2),Xd=.01,Zd=.012,Qd=.018,$d=.02,ef=8,tf=new K(.03,-.07,.05),nf=new sn(-.1,-.08,-.05);function rf(){let e=new q,t=new Z({color:2829617,roughness:.6,metalness:.55,emissive:1381913,emissiveIntensity:.6}),n=new Z({color:1842464,roughness:.7,metalness:.5,emissive:1052947,emissiveIntensity:.6}),r=new Z({color:4869974,roughness:.4,metalness:.85,emissive:1842979,emissiveIntensity:.55}),i=new Z({color:2237480,roughness:.85,metalness:.1,emissive:1184535,emissiveIntensity:.65}),a=.24,o=.02,s=new J(new Y(.05,.062,a),t);s.position.set(0,0,o),e.add(s);let c=.13999999999999999,l=new J(new Y(.054000000000000006,.05,.05),t);l.position.set(0,-.062/2-.02,o-.03),e.add(l);let u=new q;u.position.set(0,-.062/2-.03,o-.03),u.rotation.x=.32,e.add(u);let d=new J(new Y(.046,.16,.046),i);d.position.set(0,-.08,0),u.add(d);let f=new J(new Y(.052,.014,.052),n);f.position.set(0,-.164,0),u.add(f);let p=new J(new Y(.03,.014,a-.02),n);p.position.set(0,.038,o),e.add(p);for(let n=0;n<10;n++){let r=new J(new Y(.034,.005,.006),t);r.position.set(0,.047,c-.03-n*.02),e.add(r)}let m=new J(new Y(.026,.03,.05),t);m.position.set(0,.063,c-.03),e.add(m);let h=new J(new Ni(.009,.003,6,12),r);h.position.set(0,.067,c-.05),e.add(h);let g=new J(new Y(.03,.014,.02),r);g.position.set(0,.035,.148),e.add(g);let _=new J(new X(.008,.008,.016,10),r);_.rotation.z=Math.PI/2,_.position.set(.030000000000000002,.006,c-.05),e.add(_);let v=.26,y=-.09999999999999999-v/2,b=new J(new X(.032,.03,v,14),n);b.rotation.x=Math.PI/2,b.position.set(0,0,y),e.add(b);for(let n=0;n<3;n++){let r=new J(new X(.006,.006,.07,8),t);r.rotation.z=Math.PI/2,r.position.set(0,.006,-.21-n*.05),e.add(r)}let x=new J(new Y(.024,.01,v),n);x.position.set(0,.036,y),e.add(x);let S=new J(new Y(.01,.022,v*.8),n);S.position.set(-.036,0,y),e.add(S);let C=y-v/2,w=new J(new X(.013,.013,.12,12),r);w.rotation.x=Math.PI/2,w.position.set(0,0,C-.06),e.add(w);let T=new J(new Y(.026,.05,.026),t);T.position.set(0,.03,C-.02),e.add(T);let E=new J(new X(.003,.003,.02,6),r);E.position.set(0,.058,C-.02),e.add(E);let D=C-.12,O=new J(new X(.017,.015,.05,12),r);O.rotation.x=Math.PI/2,O.position.set(0,0,D-.02),e.add(O);let k=new J(new Ni(.028,.005,6,16,Math.PI*1.3),i);k.rotation.set(0,Math.PI/2,Math.PI*.1),k.position.set(0,-.062/2-.026,.07),e.add(k);let A=new J(new Y(.008,.024,.008),r);A.position.set(0,-.062/2-.018,.07),e.add(A);let j=new q;j.position.set(0,-.062/2,.095),j.rotation.x=-.28,e.add(j);let ee=new J(new Y(.044,.12,.05),i);ee.position.set(0,-.06,0),j.add(ee);for(let e=0;e<4;e++){let t=new J(new Y(.048,.005,.004),n);t.position.set(0,-.03-e*.022,-.025),j.add(t)}let M=new J(new X(.018,.018,.1,12),t);M.rotation.x=Math.PI/2,M.position.set(0,.006,.19),e.add(M);let te=new J(new Y(.05,.07,.09),i);te.position.set(0,0,.24),e.add(te);let ne=new zr({color:16764779,transparent:!0,opacity:0}),N=new J(new Di(.055,.18,8),ne);N.rotation.x=-Math.PI/2,N.position.set(0,0,D-.11),e.add(N);let re=new Ta(16757575,0,4);return re.position.set(0,0,D-.08),e.add(re),e.userData.magPivot=u,e.userData.magRestY=u.position.y,e.userData.chargingHandle=g,e.userData.chargeRestZ=.148,e.userData.muzzleFlash=N,e.userData.muzzleLight=re,e.userData.gripPivot=j,e.userData.supportAnchor=new K(0,-.028,-.21),e.userData.railAnchor=new K(-.062,0,y-.01),e}var af=class{ammoInMag=Ad;isReloading=!1;camera;controller;inventory;reloadTimer=0;reloadStage=0;cooldown=0;raycaster=new qa;viewModel;muzzleFlash;muzzleLight;muzzleFlashTimer=0;recoil=0;basePosition;magPivot;magRestY=0;chargingHandle;chargeRestZ=0;supportHand;supportAnchor=new K;switchOffset=0;aiming=!1;aimAmount=0;sprintAmount=0;mountedLight;mountEmitter;railAnchor=new K;mountTimer=0;tmpA=new K;tmpB=new K;constructor(e,t,n){this.camera=e,this.controller=t,this.inventory=n,this.raycaster.far=Pd,this.viewModel=new q;let r=.78,i=rf();i.position.set(0,0,0),i.rotation.set(0,.1,.03),i.scale.setScalar(r),this.viewModel.add(i),this.magPivot=i.userData.magPivot,this.magRestY=i.userData.magRestY,this.chargingHandle=i.userData.chargingHandle,this.chargeRestZ=i.userData.chargeRestZ,this.muzzleFlash=i.userData.muzzleFlash,this.muzzleLight=i.userData.muzzleLight;let a=gu();a.scale.setScalar(1/r),i.userData.gripPivot.add(a);let o=new q;o.position.copy(i.userData.supportAnchor),o.scale.setScalar(1/r),o.add(Su()),i.add(o),this.supportHand=o,this.supportAnchor.copy(o.position);let s=vu();s.scale.setScalar(1/r),this.railAnchor.copy(i.userData.railAnchor),s.position.copy(this.railAnchor),i.add(s),this.mountedLight=s,this.mountEmitter=s.userData.emitter;let c=new Ta(16773856,.85,3);c.position.set(.35,.4,.5),this.viewModel.add(c);let l=new Ta(10335440,.5,3);l.position.set(-.4,.2,-.4),this.viewModel.add(l),this.viewModel.scale.setScalar(zd),this.basePosition=new K(.24,-.26,-.95),this.viewModel.position.copy(this.basePosition),e.add(this.viewModel),this.viewModel.visible=!1}setActive(e){this.viewModel.visible=e}setSwitchOffset(e){this.switchOffset=e}setAiming(e){this.aiming=e}get reserveAmmo(){return this.inventory.countItem(`rifle_ammo`)}get damage(){return Nd}startMount(){this.mountTimer=Kd}get flashlightBlend(){if(this.mountTimer<=0)return 1;let e=1-this.mountTimer/Kd;return e<Jd?0:(e-Jd)/(1-Jd)}getFlashlightEmitter(e){return this.mountEmitter.getWorldPosition(e)}get reloadProgress(){return this.isReloading?1-this.reloadTimer/jd:0}canFire(){return!this.isReloading&&this.ammoInMag>0&&this.cooldown<=0}tryReload(){this.isReloading||this.ammoInMag===Ad||this.reserveAmmo===0||(this.mountTimer>0&&(this.mountTimer=0,this.mountedLight.position.copy(this.railAnchor),this.mountedLight.rotation.set(0,0,0)),this.isReloading=!0,this.reloadTimer=jd,this.reloadStage=0,Wu())}fire(e){if(!this.canFire())return this.ammoInMag===0&&!this.isReloading&&(this.reserveAmmo>0?this.tryReload():this.cooldown<=0&&(this.cooldown=Md,zu())),null;--this.ammoInMag,this.cooldown=Md;let t=1-this.aimAmount*.5;this.recoil=Fd*t,this.controller.addRecoilKick(Ld*t,(Math.random()-.5)*2*Rd*t),this.muzzleFlashTimer=.05,Lu(),this.raycaster.setFromCamera(new G(0,0),this.camera);let n=this.raycaster.intersectObjects(e,!0);if(n.length===0)return null;let r=n[0];return{object:r.object,point:r.point,distance:r.distance}}applyReloadPose(e){let t=e<.12?e/.12:e>.88?Math.max(0,(1-e)/.12):1,n=e>.62&&e<.86?Math.sin((e-.62)/.24*Math.PI):0;this.viewModel.position.set(this.basePosition.x+.03*t,this.basePosition.y-.1*t+.03*n,this.basePosition.z+.05*t-.03*n),this.viewModel.rotation.set(.4*t-.12*n,-.3*t,-.38*t);let r=0;e>=.18&&e<.4?r=-.26*((e-.18)/.22):e>=.4&&e<.44?r=-.26:e>=.44&&e<.58&&(r=-.26*(1-(e-.44)/.14)),this.magPivot.position.y=this.magRestY+r;let i=.02,a=-.17+r,o=-.02,s=this.supportAnchor.x,c=this.supportAnchor.y,l=this.supportAnchor.z,u=s,d=c,f=l;if(!(e<.1)){if(e<.18){let t=(e-.1)/.08;u=s+(i-s)*t,d=c+(a-c)*t,f=l+(o-l)*t}else if(e<.58)u=i,d=a,f=o;else if(e<.74){let t=(e-.58)/.16,n=Math.min(a,c)-.05,r=1-t;u=i+(s-i)*t,d=r*r*a+2*r*t*n+t*t*c,f=o+(l-o)*t}}this.supportHand.position.set(u,d,f),this.chargingHandle.position.z=this.chargeRestZ+n*.09}applyMountPose(e){if(this.mountTimer<=0)return!1;this.mountTimer=Math.max(0,this.mountTimer-e);let t=1-this.mountTimer/Kd,n=this.tmpA.copy(this.railAnchor).add(Yd),r=this.tmpB;if(t<qd){let e=1-(1-t/qd)**3;r.copy(n).lerp(this.railAnchor,e)}else{let e=Math.min(1,(t-qd)/.12),n=Math.sin(e*Math.PI)*.008;r.copy(this.railAnchor),r.x+=n}this.mountedLight.position.copy(r);let i=t<qd?(1-t/qd)*.5:0;if(this.mountedLight.rotation.set(i*.4,-i*.6,i),t<qd)this.supportHand.position.set(r.x-.02,r.y-.03,r.z+.05);else{let e=1-(1-Math.min(1,(t-qd)/(1-qd)))**2;this.supportHand.position.set(r.x-.02+(this.supportAnchor.x-(r.x-.02))*e,r.y-.03+(this.supportAnchor.y-(r.y-.03))*e,r.z+.05+(this.supportAnchor.z-(r.z+.05))*e)}return this.mountTimer<=0&&(this.mountedLight.position.copy(this.railAnchor),this.mountedLight.rotation.set(0,0,0),this.supportHand.position.copy(this.supportAnchor)),!0}computeSway(e,t){let n=t*(1-this.aimAmount*.75);return{pos:new K(Math.cos(e*.5)*Xd*n,Math.abs(Math.sin(e))*Zd*n,0),rot:new sn(-Math.abs(Math.sin(e))*Qd*n,0,Math.sin(e*.5)*$d*n)}}update(e,t=0,n=0,r=!1){if(this.cooldown>0&&(this.cooldown=Math.max(0,this.cooldown-e)),this.aimAmount+=(+!!this.aiming-this.aimAmount)*Math.min(1,Vd*e),this.sprintAmount+=(+!!r-this.sprintAmount)*Math.min(1,ef*e),this.isReloading){this.reloadTimer-=e;let t=1-this.reloadTimer/jd;if(this.reloadStage===0&&t>=.4?(this.reloadStage=1,Gu()):this.reloadStage===1&&t>=.58?(this.reloadStage=2,Ku()):this.reloadStage===2&&t>=.74&&(this.reloadStage=3,qu()),this.reloadTimer<=0){let e=Ad-this.ammoInMag,t=this.inventory.removeItem(`rifle_ammo`,e);this.ammoInMag+=t,this.isReloading=!1}}if(this.recoil=Math.max(0,this.recoil-Id*e*this.recoil),this.isReloading){this.applyReloadPose(1-this.reloadTimer/jd);let e=this.computeSway(t,n),r=this.sprintAmount*(1-this.aimAmount);this.viewModel.position.x+=e.pos.x+Bd.x*this.aimAmount+tf.x*r,this.viewModel.position.y+=e.pos.y+Bd.y*this.aimAmount+tf.y*r,this.viewModel.position.z+=e.pos.z+Bd.z*this.aimAmount+tf.z*r,this.viewModel.rotation.x+=e.rot.x+nf.x*r,this.viewModel.rotation.y+=e.rot.y+nf.y*r,this.viewModel.rotation.z+=e.rot.z+nf.z*r}else{let r=this.computeSway(t,n),i=this.sprintAmount*(1-this.aimAmount);this.viewModel.position.set(this.basePosition.x+Bd.x*this.aimAmount+r.pos.x+tf.x*i,this.basePosition.y+this.recoil*.4+Bd.y*this.aimAmount+r.pos.y+tf.y*i,this.basePosition.z+this.recoil+Bd.z*this.aimAmount+r.pos.z+tf.z*i),this.viewModel.rotation.set(r.rot.x+nf.x*i,r.rot.y+nf.y*i,r.rot.z+nf.z*i),this.magPivot.position.y=this.magRestY,this.chargingHandle.position.z=this.chargeRestZ,this.applyMountPose(e)||this.supportHand.position.copy(this.supportAnchor)}if(this.muzzleFlashTimer>0){this.muzzleFlashTimer-=e;let t=this.muzzleFlash.material;t.opacity=Math.max(0,this.muzzleFlashTimer/.05),this.muzzleLight.intensity=t.opacity*6}else this.muzzleLight.intensity=0;this.switchOffset!==0&&(this.viewModel.position.y-=this.switchOffset*Hd,this.viewModel.position.z-=this.switchOffset*Ud,this.viewModel.rotation.x+=this.switchOffset*Wd,this.viewModel.rotation.z+=this.switchOffset*Gd)}},of=6,sf=1.9,cf=.7,lf=8,uf=14,df=34,ff=.05,pf=.09,mf=7,hf=.05,gf=.02,_f=2.1,vf=new K(-.2,.055,.3),yf=10,bf=1.6,xf=.3,Sf=1.4,Cf=.5,wf=.32,Tf=.05,Ef=.012,Df=.014,Of=.02,kf=.024,Af=8,jf=new K(.03,-.08,.05),Mf=new sn(-.12,-.06,-.06);function Nf(){let e=new q,t=new Z({color:1710878,roughness:.6,metalness:.35,emissive:789775,emissiveIntensity:.55}),n=new Z({color:3816770,roughness:.4,metalness:.85,emissive:1513756,emissiveIntensity:.5}),r=new Z({color:2829617,roughness:.5,metalness:.6,emissive:1316120,emissiveIntensity:.55}),i=new J(new Y(.052,.06,.155),t);e.add(i);let a=-.155/2,o=new J(new Y(.004,.022,.05),r);o.position.set(.027,.004,.01),e.add(o);let s=.58,c=.016,l=new J(new X(.015,.015,s,10),n);l.rotation.x=Math.PI/2,l.position.set(0,c,a-s/2),e.add(l);let u=a-s,d=s-.07,f=new J(new X(.013,.013,d,10),n);f.rotation.x=Math.PI/2,f.position.set(0,-.02,a-d/2-.01),e.add(f);let p=a-s*.58,m=new q;m.position.set(0,-.004/2,p),e.add(m);let h=new J(new Y(.046,.05,.15),t);m.add(h);for(let e=0;e<7;e++){let t=new J(new Y(.05,.052,.01),n);t.position.set(0,0,-.063+e*.021),m.add(t)}let g=.0375,_=new J(new Ni(.024,.005,6,16,Math.PI*1.3),t);_.rotation.set(0,Math.PI/2,Math.PI*.1),_.position.set(0,-.06/2-.02,g),e.add(_);let v=new J(new Y(.007,.018,.007),n);v.position.set(0,-.06/2-.012,g),e.add(v);let y=new q;y.position.set(0,-.06/2,.0615),y.rotation.x=-.32,e.add(y);let b=new J(new Y(.042,.12,.05),t);b.position.set(0,-.058,0),y.add(b);let x=new J(new Y(.042,.03,.03),t);x.position.set(0,-.118,-.012),y.add(x);let S=new J(new X(.017,.017,.057999999999999996,10),n);S.rotation.z=Math.PI/2,S.position.set(0,.026,.08549999999999999),e.add(S);let C=.036,w=new J(new Y(.03,.024,.2),r);w.position.set(0,C,.1915),e.add(w);for(let t=0;t<4;t++){let r=new J(new Ei(.009,10),n);r.rotation.x=-Math.PI/2,r.position.set(0,.0481,.1275+t*.045),e.add(r)}let T=new J(new Y(.014,.09,.05),t);T.position.set(0,C,.29150000000000004),e.add(T);let E=new zr({color:16764779,transparent:!0,opacity:0}),D=new J(new Di(.065,.2,8),E);D.rotation.x=-Math.PI/2,D.position.set(0,c,u-.07),e.add(D);let O=new Ta(16757575,0,4.5);return O.position.set(0,c,u-.04),e.add(O),e.userData.pumpForegrip=m,e.userData.pumpRestZ=p,e.userData.muzzleFlash=D,e.userData.muzzleLight=O,e.userData.gripPivot=y,e.userData.supportAnchor=new K(0,-.004/2-.014,p),e}var Pf=class{ammoInMag=of;isReloading=!1;camera;controller;inventory;reloadTimer=0;cooldown=0;raycaster=new qa;viewModel;muzzleFlash;muzzleLight;muzzleFlashTimer=0;recoil=0;basePosition;pumpForegrip;pumpRestZ=0;pumpTimer=0;supportHand;supportAnchor=new K;switchOffset=0;aiming=!1;aimAmount=0;sprintAmount=0;constructor(e,t,n){this.camera=e,this.controller=t,this.inventory=n,this.raycaster.far=df,this.viewModel=new q;let r=.8,i=Nf();i.position.set(0,0,0),i.rotation.set(0,.1,.03),i.scale.setScalar(r),this.viewModel.add(i),this.pumpForegrip=i.userData.pumpForegrip,this.pumpRestZ=i.userData.pumpRestZ,this.muzzleFlash=i.userData.muzzleFlash,this.muzzleLight=i.userData.muzzleLight;let a=gu();a.scale.setScalar(1/r),i.userData.gripPivot.add(a);let o=new q;o.position.copy(i.userData.supportAnchor),o.scale.setScalar(1/r),o.add(Su()),i.add(o),this.supportHand=o,this.supportAnchor.copy(o.position);let s=new Ta(16773856,.85,3);s.position.set(.35,.4,.5),this.viewModel.add(s);let c=new Ta(10335440,.5,3);c.position.set(-.4,.2,-.4),this.viewModel.add(c),this.viewModel.scale.setScalar(_f),this.basePosition=new K(.24,-.27,-.95),this.viewModel.position.copy(this.basePosition),e.add(this.viewModel),this.viewModel.visible=!1}setActive(e){this.viewModel.visible=e}setSwitchOffset(e){this.switchOffset=e}setAiming(e){this.aiming=e}get reserveAmmo(){return this.inventory.countItem(`shotgun_ammo`)}get damage(){return uf}get reloadProgress(){return this.isReloading?1-this.reloadTimer/sf:0}canFire(){return!this.isReloading&&this.ammoInMag>0&&this.cooldown<=0}tryReload(){this.isReloading||this.ammoInMag===of||this.reserveAmmo===0||(this.isReloading=!0,this.reloadTimer=sf,Wu())}fire(e){if(!this.canFire())return this.ammoInMag===0&&!this.isReloading&&(this.reserveAmmo>0?this.tryReload():this.cooldown<=0&&(this.cooldown=cf,zu())),[];--this.ammoInMag,this.cooldown=cf,this.pumpTimer=wf;let t=1-this.aimAmount*.5;this.recoil=pf*t,this.controller.addRecoilKick(hf*t,(Math.random()-.5)*2*gf*t),this.muzzleFlashTimer=.06,Ru();let n=[],r=ff*(1-this.aimAmount*.4),i=new G;for(let t=0;t<lf;t++){i.set((Math.random()-.5)*2*r,(Math.random()-.5)*2*r),this.raycaster.setFromCamera(i,this.camera);let t=this.raycaster.intersectObjects(e,!0);if(t.length>0){let e=t[0];n.push({object:e.object,point:e.point,distance:e.distance})}}return n}applyReloadPose(e){let t=e<.15?e/.15:e>.8?Math.max(0,(1-e)/.2):1;this.viewModel.position.set(this.basePosition.x+.02*t,this.basePosition.y-.09*t,this.basePosition.z+.05*t),this.viewModel.rotation.set(.32*t,-.22*t,-.28*t);let n=new K(.015,-.11,this.pumpRestZ+.16),r=e<.5?Math.min(1,e/.2):Math.max(0,1-(e-.5)/.35);this.supportHand.position.lerpVectors(this.supportAnchor,n,r)}computeSway(e,t){let n=t*(1-this.aimAmount*.75);return{pos:new K(Math.cos(e*.5)*Ef*n,Math.abs(Math.sin(e))*Df*n,0),rot:new sn(-Math.abs(Math.sin(e))*Of*n,0,Math.sin(e*.5)*kf*n)}}update(e,t=0,n=0,r=!1){if(this.cooldown>0&&(this.cooldown=Math.max(0,this.cooldown-e)),this.aimAmount+=(+!!this.aiming-this.aimAmount)*Math.min(1,yf*e),this.sprintAmount+=(+!!r-this.sprintAmount)*Math.min(1,Af*e),this.isReloading&&(this.reloadTimer-=e,this.reloadTimer<=.7&&this.reloadTimer+e>.7&&qu(),this.reloadTimer<=0)){let e=of-this.ammoInMag,t=this.inventory.removeItem(`shotgun_ammo`,e);this.ammoInMag+=t,this.isReloading=!1}this.recoil=Math.max(0,this.recoil-mf*e*this.recoil),this.pumpTimer>0&&(this.pumpTimer=Math.max(0,this.pumpTimer-e));let i=1-this.pumpTimer/wf,a=this.pumpTimer>0?(i<.5?i/.5:1-(i-.5)/.5)*Tf:0;if(this.pumpForegrip.position.z=this.pumpRestZ+a,this.isReloading){this.applyReloadPose(1-this.reloadTimer/sf);let e=this.computeSway(t,n),r=this.sprintAmount*(1-this.aimAmount);this.viewModel.position.x+=e.pos.x+vf.x*this.aimAmount+jf.x*r,this.viewModel.position.y+=e.pos.y+vf.y*this.aimAmount+jf.y*r,this.viewModel.position.z+=e.pos.z+vf.z*this.aimAmount+jf.z*r,this.viewModel.rotation.x+=e.rot.x+Mf.x*r,this.viewModel.rotation.y+=e.rot.y+Mf.y*r,this.viewModel.rotation.z+=e.rot.z+Mf.z*r}else{let e=this.computeSway(t,n),r=this.sprintAmount*(1-this.aimAmount);this.viewModel.position.set(this.basePosition.x+vf.x*this.aimAmount+e.pos.x+jf.x*r,this.basePosition.y+this.recoil*.5+vf.y*this.aimAmount+e.pos.y+jf.y*r,this.basePosition.z+this.recoil+vf.z*this.aimAmount+e.pos.z+jf.z*r),this.viewModel.rotation.set(e.rot.x+Mf.x*r,e.rot.y+Mf.y*r,e.rot.z+Mf.z*r),this.supportHand.position.copy(this.supportAnchor)}if(this.muzzleFlashTimer>0){this.muzzleFlashTimer-=e;let t=this.muzzleFlash.material;t.opacity=Math.max(0,this.muzzleFlashTimer/.06),this.muzzleLight.intensity=t.opacity*7}else this.muzzleLight.intensity=0;this.switchOffset!==0&&(this.viewModel.position.y-=this.switchOffset*bf,this.viewModel.position.z-=this.switchOffset*xf,this.viewModel.rotation.x+=this.switchOffset*Sf,this.viewModel.rotation.z+=this.switchOffset*Cf)}},Ff=.16,If=.14,Lf=.13,Rf=.37,zf=.56,Bf=zf,Vf=55,Hf=2.4,Uf=10,Wf=.16,Gf=.1,Kf=.35,qf=2.1,Jf=1.6,Yf=.3,Xf=1.4,Zf=.5,Qf={pos:new K(0,0,0),rot:new sn(0,0,0)},$f={pos:new K(.03,-.32,.28),rot:new sn(.3,.03,.05)},ep={pos:new K(-.1,.02,-.58),rot:new sn(-.5,0,.35)},tp=.03,np=.022,rp=.05,ip=.04,ap=.09,op=8,sp=new K(.08,-.1,.1),cp=new sn(-.18,.25,-.15);function lp(e){let t=Math.min(1,Math.max(0,e));return t<.5?2*t*t:1-(-2*t+2)**2/2}function up(e){return 1-(1-Math.min(1,Math.max(0,e)))**3}function dp(e,t,n){return new sn(e.x+(t.x-e.x)*n,e.y+(t.y-e.y)*n,e.z+(t.z-e.z)*n)}function fp(){let e=new q,t=new Z({color:13093841,roughness:.25,metalness:.9,emissive:3816770,emissiveIntensity:.55}),n=new Z({color:3487805,roughness:.5,metalness:.8,emissive:1381914,emissiveIntensity:.6}),r=new Z({color:1842463,roughness:.85,metalness:.1,emissive:921104,emissiveIntensity:.6}),i=new J(new Y(.036,.11,.045),r);i.position.set(0,-.11/2,.05),e.add(i);for(let t=0;t<4;t++){let r=new J(new Y(.039999999999999994,.014,.049),n);r.position.set(0,-.02-t*.024,.05),e.add(r)}let a=new J(new Y(.042,.02,.05),n);a.position.set(0,-.116,.05),e.add(a);let o=new J(new Y(.09,.016,.03),n);o.position.set(0,.006,.05),e.add(o);let s=.19,c=new J(new Y(.028,s,.006),t);c.position.set(0,.109,.05),e.add(c);let l=new J(new Y(.009,s,.007),t);l.position.set(.0135,.109,.05),e.add(l);let u=.06,d=new X(0,.021,u,4);d.rotateY(Math.PI/4),d.scale(1,1,.22);let f=new J(d,t);return f.position.set(0,.222,.05),e.add(f),e.userData.tipY=f.position.y+u/2,e}var pp=class{camera;raycaster=new qa;viewModel;basePosition;cooldown=0;swinging=!1;swingElapsed=0;slashTrail;switchOffset=0;sprintAmount=0;impactAmount=0;impactTriggered=!1;pendingImpact=!1;constructor(e){this.camera=e,this.raycaster.far=Hf,this.viewModel=new q;let t=fp();t.rotation.set(-.15,.12,.04),this.viewModel.add(t);let n=gu();t.add(n);let r=new zr({color:15267583,transparent:!0,opacity:0,blending:2,side:2,depthWrite:!1});this.slashTrail=new J(new ji(.02,.09,20),r),this.slashTrail.position.set(0,t.userData.tipY,.05),t.add(this.slashTrail);let i=new Ta(16773856,.85,3);i.position.set(.35,.4,.5),this.viewModel.add(i);let a=new Ta(10335440,.5,3);a.position.set(-.4,.2,-.4),this.viewModel.add(a),this.viewModel.scale.setScalar(qf),this.basePosition=new K(.2,-.22,-.95),this.viewModel.position.copy(this.basePosition),e.add(this.viewModel),this.viewModel.visible=!1}get damage(){return Vf}setActive(e){this.viewModel.visible=e}setSwitchOffset(e){this.switchOffset=e}canSwing(){return this.cooldown<=0}get hasPendingImpact(){return this.pendingImpact}swing(){this.canSwing()&&(this.cooldown=Bf,this.swinging=!0,this.swingElapsed=0,this.impactTriggered=!1,Xu())}consumeImpact(e){if(!this.pendingImpact)return null;this.pendingImpact=!1,this.raycaster.setFromCamera(new G(0,0),this.camera);let t=this.raycaster.intersectObjects(e,!0);if(t.length===0)return null;this.impactAmount=1;let n=t[0];return{object:n.object,point:n.point,distance:n.distance}}computeSway(e,t){return{pos:new K(Math.cos(e*.5)*tp*t,Math.abs(Math.sin(e))*np*t,0),rot:new sn(-Math.abs(Math.sin(e))*rp*t,Math.cos(e*.5)*ip*t,Math.sin(e*.5)*ap*t)}}update(e,t=0,n=0,r=!1){if(this.cooldown>0&&(this.cooldown=Math.max(0,this.cooldown-e)),this.sprintAmount+=(+!!r-this.sprintAmount)*Math.min(1,op*e),this.impactAmount=Math.max(0,this.impactAmount-Uf*e),this.swinging&&(this.swingElapsed+=e,!this.impactTriggered&&this.swingElapsed>=Rf&&(this.impactTriggered=!0,this.pendingImpact=!0),this.swingElapsed>=zf?(this.swinging=!1,this.setTrailOpacity(0)):this.applySwingPose(this.swingElapsed,t,n)),!this.swinging){let e=this.computeSway(t,n);this.viewModel.position.set(this.basePosition.x+e.pos.x+sp.x*this.sprintAmount,this.basePosition.y+e.pos.y+sp.y*this.sprintAmount,this.basePosition.z+e.pos.z+sp.z*this.sprintAmount),this.viewModel.rotation.set(e.rot.x+cp.x*this.sprintAmount,e.rot.y+cp.y*this.sprintAmount,e.rot.z+cp.z*this.sprintAmount)}this.switchOffset!==0&&(this.viewModel.position.y-=this.switchOffset*Jf,this.viewModel.position.z-=this.switchOffset*Yf,this.viewModel.rotation.x+=this.switchOffset*Xf,this.viewModel.rotation.z+=this.switchOffset*Zf)}applySwingPose(e,t,n){let r,i,a=0,o=-1,s=Ff,c=.23,l=Rf,u=.43;if(e<s){let t=lp(e/Ff);r=Qf.pos.clone().lerp($f.pos,t),i=dp(Qf.rot,$f.rot,t)}else if(e<c)r=$f.pos,i=$f.rot;else if(e<l){let t=up((e-c)/If);r=$f.pos.clone().lerp(ep.pos,t),i=dp($f.rot,ep.rot,t),a=Math.sin(t*Math.PI)*.9}else if(e<u)r=ep.pos,i=ep.rot,a=.15;else{o=(e-u)/Lf;let t=up(o);r=ep.pos.clone().lerp(Qf.pos,t),i=dp(ep.rot,Qf.rot,t),a=Math.max(0,.2*(1-t))}let d=o>=0?Math.sin(Math.min(1,o/.4)*Math.PI)*this.impactAmount:0,f=this.computeSway(t,n);this.viewModel.position.set(this.basePosition.x+r.x+f.pos.x*Kf,this.basePosition.y+r.y+f.pos.y*Kf,this.basePosition.z+r.z+f.pos.z*Kf+d*Wf),this.viewModel.rotation.set(i.x+f.rot.x*Kf-d*Gf,i.y+f.rot.y*Kf,i.z+f.rot.z*Kf),this.setTrailOpacity(a)}setTrailOpacity(e){this.slashTrail.material.opacity=e}},mp=1.6,hp=2.2,gp=2,_p=1.6,vp=.3,yp=1.4,bp=.5,xp=new K(.22,-.26,-.95),Sp=new sn(.08,.15,.04),Cp=new K(-.02,-.14,-.52),wp=new sn(.32,0,-.02),Tp=7,Ep=-1.3,Dp=.02,Op=.016,kp=.035,Ap=.055,jp=8,Mp=new K(.05,-.1,.08),Np=new sn(-.15,.15,-.12);function Pp(){let e=new q,t=new Z({color:4938300,roughness:.95,metalness:.03,emissive:1317391,emissiveIntensity:.5}),n=new Z({color:2567455,roughness:.9,metalness:.05,emissive:790281,emissiveIntensity:.5}),r=new Z({color:15525331,roughness:.75,metalness:.04,emissive:3025698,emissiveIntensity:.4}),i=new Z({color:11809063,roughness:.6,metalness:.05,emissive:3804424,emissiveIntensity:.55}),a=new Z({color:7040885,roughness:.4,metalness:.75,emissive:2369066,emissiveIntensity:.5}),o=.24,s=.15,c=.07,l=new J(new Y(o,s,c),t);e.add(l);for(let t of[-.07,.07]){let r=new J(new Y(.032,.164,.084),n);r.position.set(t,0,0),e.add(r)}let u=new q;u.position.set(0,s/2,c/2),e.add(u);let d=new J(new Y(o*.98,.138,.018),t);d.position.set(0,-.138/2,.011),u.add(d);let f=new J(new Y(.1,.1,.006),r);f.position.set(0,.01,.013),d.add(f);let p=new J(new Y(.02,.07,.01),i);p.position.set(0,0,.004),f.add(p);let m=new J(new Y(.07,.02,.01),i);m.position.set(0,0,.004),f.add(m);let h=new J(new Y(.03,.018,.012),a);h.position.set(0,-.11800000000000001,.014),d.add(h);for(let t of[-.24/2-.002,.122]){let n=new J(new Ni(.014,.004,6,10),a);n.rotation.y=Math.PI/2,n.position.set(t,s/2-.02,0),e.add(n)}return{group:e,flapPivot:u}}var Fp=class{viewModel;flapPivot;switchOffset=0;sprintAmount=0;healAmount=0;progress=0;constructor(e){this.viewModel=new q;let{group:t,flapPivot:n}=Pp();t.rotation.set(0,.1,0),this.viewModel.add(t),this.flapPivot=n;let r=gu();r.position.set(0,-.02,.03),t.add(r);let i=new Ta(16773856,.85,3);i.position.set(.35,.4,.5),this.viewModel.add(i);let a=new Ta(10335440,.5,3);a.position.set(-.4,.2,-.4),this.viewModel.add(a),this.viewModel.scale.setScalar(gp),this.viewModel.position.copy(xp),this.viewModel.rotation.copy(Sp),e.add(this.viewModel),this.viewModel.visible=!1}setActive(e){this.viewModel.visible=e}setSwitchOffset(e){this.switchOffset=e}get healProgress(){return this.progress}update(e,t,n=0,r=0,i=!1){this.sprintAmount+=(+!!i-this.sprintAmount)*Math.min(1,jp*e),this.healAmount+=(+!!t-this.healAmount)*Math.min(1,Tp*e);let a=!1;t?(this.progress+=e/mp,this.progress>=1&&(this.progress=0,a=!0)):this.progress>0&&(this.progress=Math.max(0,this.progress-e*hp));let o=this.computeSway(n,r),s=this.sprintAmount*(1-this.healAmount);return this.viewModel.position.set(xp.x+(Cp.x-xp.x)*this.healAmount+o.pos.x+Mp.x*s,xp.y+(Cp.y-xp.y)*this.healAmount+o.pos.y+Mp.y*s,xp.z+(Cp.z-xp.z)*this.healAmount+o.pos.z+Mp.z*s),this.viewModel.rotation.set(Sp.x+(wp.x-Sp.x)*this.healAmount+o.rot.x+Np.x*s,Sp.y+(wp.y-Sp.y)*this.healAmount+o.rot.y+Np.y*s,Sp.z+(wp.z-Sp.z)*this.healAmount+o.rot.z+Np.z*s),this.flapPivot.rotation.x=Ep*this.progress,this.switchOffset!==0&&(this.viewModel.position.y-=this.switchOffset*_p,this.viewModel.position.z-=this.switchOffset*vp,this.viewModel.rotation.x+=this.switchOffset*yp,this.viewModel.rotation.z+=this.switchOffset*bp),a}computeSway(e,t){let n=t*(1-this.healAmount*.7);return{pos:new K(Math.cos(e*.5)*Dp*n,Math.abs(Math.sin(e))*Op*n,0),rot:new sn(-Math.abs(Math.sin(e))*kp*n,0,Math.sin(e*.5)*Ap*n)}}},Ip=3.2,Lp=2.2,Rp=2.4,zp=new K(.24,-.27,-.85),Bp=new sn(.12,.18,.06),Vp=new K(.03,-.34,-.58),Hp=new sn(.6,.04,-.04),Up=6,Wp=.06,Gp=.018,Kp=.014,qp=.03,Jp=.05,Yp=8,Xp=new K(.05,-.08,.06),Zp=new sn(-.12,.12,-.1);function Qp(){let e=new q,t=new Z({color:14477538,roughness:.25,metalness:.05,transparent:!0,opacity:.55}),n=new Z({color:14698303,roughness:.3,emissive:4853516,emissiveIntensity:.6}),r=new Z({color:12041412,roughness:.35,metalness:.8}),i=new Z({color:2829617,roughness:.7}),a=.16,o=.024,s=new J(new X(o,o,a,12,1,!0),t);s.rotation.x=Math.PI/2,e.add(s);let c=new J(new Y(.07,.012,.02),t);c.position.z=.085,e.add(c);let l=new J(new X(o*.9,o*.6,.02,10),r);l.rotation.x=Math.PI/2,l.position.z=-.16/2-.01,e.add(l);let u=.09,d=new J(new X(.0025,.0035,u,6),r);d.rotation.x=Math.PI/2,d.position.z=-.16/2-.02-u/2,e.add(d);let f=-.16*.39,p=new q;p.position.z=f,e.add(p);let m=a*.62,h=new J(new X(o*.72,o*.72,m,10),n);h.rotation.x=Math.PI/2,h.position.z=m/2,p.add(h);let g=new q;g.position.z=.03679999999999999,e.add(g);let _=.12,v=new J(new X(.006,.006,_,8),i);v.rotation.x=Math.PI/2,v.position.z=_/2,g.add(v);let y=new J(new X(.02,.02,.01,10),i);y.rotation.x=Math.PI/2,y.position.z=.125,g.add(y);let b=new J(new X(o*.78,o*.78,.014,10),i);return b.rotation.x=Math.PI/2,g.add(b),{group:e,plunger:g,fluid:h,fluidLen:m,fluidAnchorZ:f}}function $p(e){e.fluid.scale.y=Wp,e.fluid.position.z=e.fluidLen*Wp/2,e.plunger.position.z=e.fluidAnchorZ+e.fluidLen*Wp}var em=class{viewModel;plunger;fluid;fluidLen;fluidAnchorZ;switchOffset=0;sprintAmount=0;applyAmount=0;progress=0;constructor(e){this.viewModel=new q;let{group:t,plunger:n,fluid:r,fluidLen:i,fluidAnchorZ:a}=Qp();t.rotation.set(0,.15,0),this.viewModel.add(t),this.plunger=n,this.fluid=r,this.fluidLen=i,this.fluidAnchorZ=a;let o=gu();o.position.set(0,-.01,.05),t.add(o);let s=new Ta(16773856,.7,3);s.position.set(.3,.35,.4),this.viewModel.add(s),this.viewModel.scale.setScalar(Rp),this.viewModel.position.copy(zp),this.viewModel.rotation.copy(Bp),e.add(this.viewModel),this.viewModel.visible=!1}setActive(e){this.viewModel.visible=e}setSwitchOffset(e){this.switchOffset=e}get healProgress(){return this.progress}update(e,t,n=0,r=0,i=!1){this.sprintAmount+=(+!!i-this.sprintAmount)*Math.min(1,Yp*e),this.applyAmount+=(+!!t-this.applyAmount)*Math.min(1,Up*e);let a=!1;t?(this.progress+=e/Ip,this.progress>=1&&(this.progress=1,a=!0)):this.progress>0&&this.progress<1&&(this.progress=Math.max(0,this.progress-e*Lp));let o=this.computeSway(n,r),s=this.sprintAmount*(1-this.applyAmount);this.viewModel.position.set(zp.x+(Vp.x-zp.x)*this.applyAmount+o.pos.x+Xp.x*s,zp.y+(Vp.y-zp.y)*this.applyAmount+o.pos.y+Xp.y*s,zp.z+(Vp.z-zp.z)*this.applyAmount+o.pos.z+Xp.z*s),this.viewModel.rotation.set(Bp.x+(Hp.x-Bp.x)*this.applyAmount+o.rot.x+Zp.x*s,Bp.y+(Hp.y-Bp.y)*this.applyAmount+o.rot.y+Zp.y*s,Bp.z+(Hp.z-Bp.z)*this.applyAmount+o.rot.z+Zp.z*s);let c=1-this.progress*(1-Wp);return this.fluid.scale.y=c,this.fluid.position.z=this.fluidLen*c/2,this.plunger.position.z=this.fluidAnchorZ+this.fluidLen*c,this.switchOffset!==0&&(this.viewModel.position.y-=this.switchOffset*1.6,this.viewModel.position.z-=this.switchOffset*.3,this.viewModel.rotation.x+=this.switchOffset*1.4,this.viewModel.rotation.z+=this.switchOffset*.5),a}reset(){this.progress=0}computeSway(e,t){let n=t*(1-this.applyAmount*.7);return{pos:new K(Math.cos(e*.5)*Gp*n,Math.abs(Math.sin(e))*Kp*n,0),rot:new sn(-Math.abs(Math.sin(e))*qp*n,0,Math.sin(e*.5)*Jp*n)}}},tm=1.9,nm={shambler:{speed:1.8,health:60,damage:10,scale:1,attackInterval:.9},runner:{speed:4.3,health:38,damage:8,scale:.82,attackInterval:.7},brute:{speed:1.25,health:170,damage:24,scale:1.5,attackInterval:1.2}},rm=[{skin:7311194,shirt:3820138,pants:2369586,hair:2765600,eye:16723245},{skin:9084245,shirt:13134372,pants:4864038,hair:2365457,eye:16761375},{skin:12104097,shirt:13817305,pants:3356221,hair:1775895,eye:16723245},{skin:6969964,shirt:6038833,pants:1446936,hair:986384,eye:10354493}],im=1.15,am=2.2,om=.45,sm=.85,cm=1.1,lm=1.1,um=2.4,dm=.9,fm=new jn(16720418);function pm(e){return e===`brute`?`lumber`:e===`runner`?`sprint`:Math.random()<.25?`crawl`:`shamble`}var mm={shamble:.16,crawl:.07,sprint:.26,lumber:.045},hm=.72,gm=1.05,_m=7,vm=.45,ym={shamble:1.7,crawl:1.55,lumber:1.3,sprint:1},bm=new Y(.22,.8,.22),xm=new Y(.52,.68,.3),Sm=new Y(.44,.44,.44),Cm=new Y(.46,.12,.46),wm=new Y(.1,.06,.04),Tm=new Y(.2,.6,.2),Em=new Y(.6,1.5,.55),Dm=new Y(.5,.55,.5),Om=new zr({visible:!1}),km=new Y(.18,.14,.03),Am=new Y(.15,.05,.05),jm=new Y(.025,.18,.02),Mm=.8,Nm=class{group;hitboxes;kind;health;maxHealth;config;upperBody;torso;armL;armR;legL;legR;attackCooldown=0;lungeTimer=0;headBob=Math.random()*Math.PI*2;deathTimer=0;fallPitch=0;fallRoll=0;deathMats=[];instanceMats=[];flashMaterials;flashBaseEmissive;flashBaseIntensity;flashTimer=0;flashDuration=.14;gait;wobbleTime=Math.random()*10;wobblePhase=Math.random()*Math.PI*2;wobbleFreq=.55+Math.random()*.6;legPhaseOffset=(Math.random()-.5)*.6;frenzyTimer=0;frenzyCooldown=1+Math.random()*2;scratchToPlayer=new G;scratchDir=new G;scratchSeparation=new G;scratchAway=new G;scratchMove=new G;scratchNext=new G;constructor(e,t){this.kind=e,this.config=nm[e],this.health=this.config.health,this.maxHealth=this.config.health,this.gait=pm(e),this.group=new q,this.group.position.copy(t),this.group.scale.setScalar(this.config.scale);let n=rm[Math.floor(Math.random()*rm.length)],r=new Z({color:n.skin,roughness:.9}),i=new Z({color:n.shirt,roughness:.85}),a=new Z({color:n.pants,roughness:.85}),o=new Z({color:n.hair,roughness:.95}),s=new Z({color:n.eye,emissive:n.eye,emissiveIntensity:1.5});this.instanceMats=[r,i,a,o,s],this.flashMaterials=[r,i,a,o],this.flashBaseEmissive=this.flashMaterials.map(e=>e.emissive.clone()),this.flashBaseIntensity=this.flashMaterials.map(e=>e.emissiveIntensity),this.legL=new q,this.legL.position.set(-.13,Mm,0);let c=new J(bm,a);c.position.y=-.4,c.castShadow=!0,this.legL.add(c),this.legR=new q,this.legR.position.set(.13,Mm,0);let l=new J(bm,a);l.position.y=-.4,l.castShadow=!0,this.legR.add(l),this.upperBody=new q,this.upperBody.position.set(0,Mm,0),this.torso=new J(xm,i),this.torso.position.y=1.14-Mm,this.torso.castShadow=!0;let u=new J(Sm,r);u.position.y=1.7-Mm,u.castShadow=!0;let d=new jn(.35+Math.random()*.25,.01,.01),f=new Z({color:d,roughness:.35,metalness:.05,emissive:d.clone().multiplyScalar(.55),emissiveIntensity:.8});this.instanceMats.push(f);let p=new J(km,f),m=(Math.random()-.5)*.2,h=(Math.random()-.5)*.2;p.position.set(m,h,.16),p.rotation.z=(Math.random()-.5)*.6,this.torso.add(p);let g=1+Math.floor(Math.random()*2);for(let e=0;e<g;e++){let e=new J(jm,f),t=.5+Math.random()*.8;e.scale.y=t,e.position.set(m+(Math.random()-.5)*.12,h-.08-t*.09,.155),this.torso.add(e)}let _=new J(Am,f);_.position.set(0,-.14,.2),u.add(_);let v=new J(Cm,o);v.position.y=1.94-Mm;let y=new J(wm,s);y.position.set(-.1,1.72-Mm,.225);let b=y.clone();b.position.x=.1,this.armL=new q,this.armL.position.set(-.34,1.42-Mm,.02),this.armL.rotation.x=-1.4;let x=new J(Tm,r);x.position.y=-.28,x.castShadow=!0,this.armL.add(x),this.armR=new q,this.armR.position.set(.34,1.42-Mm,.02),this.armR.rotation.x=-1.4;let S=new J(Tm,r);S.position.y=-.28,S.castShadow=!0,this.armR.add(S);let C=new J(Dm,Om);C.position.y=1.74-Mm,C.userData.zombieRef=this,C.userData.zone=`head`,this.upperBody.add(this.torso,u,v,y,b,this.armL,this.armR,C),this.group.add(this.legL,this.legR,this.upperBody);let w=new J(Em,Om);w.position.y=.74,w.userData.zombieRef=this,w.userData.zone=`body`,this.group.add(w),this.hitboxes=[w,C]}get baseScale(){return this.config.scale}isAlive(){return this.health>0}takeDamage(e){this.health=Math.max(0,this.health-e)}flashHit(e){this.flashDuration=e?.2:.13,this.flashTimer=this.flashDuration}startDeath(){this.deathTimer=0,this.fallPitch=1.5+(Math.random()-.5)*.3,this.fallRoll=(Math.random()-.5)*.7,this.group.traverse(e=>{let t=e.material;t&&`opacity`in t&&!this.deathMats.includes(t)&&(t.transparent=!0,this.deathMats.push(t))})}updateDeath(e){this.deathTimer+=e;let t=Math.min(1,this.deathTimer/dm),n=Math.min(1,t/.4),r=1-(1-n)**3;this.group.rotation.x=this.fallPitch*r,this.group.rotation.z=this.fallRoll*r,this.armL.rotation.x=-1.4+r*1.5,this.armR.rotation.x=-1.4+r*1.5,this.legL.rotation.x=r*.5,this.legR.rotation.x=-r*.5;let i=n<1?Math.sin(n*Math.PI)*.12:0,a=Math.max(0,(t-.6)/.4);this.group.position.y=i-a*1.1;let o=1-a;for(let e of this.deathMats)e.opacity=o;return t>=1}dispose(){for(let e of this.instanceMats)e.dispose()}update(e,t,n,r,i,a,o){let s=a(this.group.position.x,this.group.position.z);if(this.flashTimer>0){this.flashTimer=Math.max(0,this.flashTimer-e);let t=this.flashTimer/this.flashDuration;for(let e=0;e<this.flashMaterials.length;e++){let n=this.flashMaterials[e];n.emissive.copy(this.flashBaseEmissive[e]).lerp(fm,t),n.emissiveIntensity=this.flashBaseIntensity[e]+t*3}}this.scratchToPlayer.set(t.x-this.group.position.x,t.z-this.group.position.z);let c=this.scratchToPlayer.length();this.attackCooldown=Math.max(0,this.attackCooldown-e),this.lungeTimer=Math.max(0,this.lungeTimer-e),this.frenzyCooldown-=e,this.frenzyTimer>0&&(this.frenzyTimer-=e),this.frenzyTimer<=0&&this.frenzyCooldown<=0&&c>im&&c<_m&&Math.random()<e*.3&&(this.frenzyTimer=vm,this.frenzyCooldown=1.5+Math.random()*2.5);let l=!1,u=1,d=Math.abs(t.y-s)<am;if(c<=im&&d)this.attackCooldown<=0&&!Im(this.group.position.x,this.group.position.z,t.x,t.z,r)&&(this.attackCooldown=this.config.attackInterval,this.lungeTimer=.2,l=!0);else if(c>.001){let t=o?o.sample(this.group.position.x,this.group.position.z):null;t?this.scratchDir.set(t.x,t.z):this.scratchDir.copy(this.scratchToPlayer).multiplyScalar(1/c),Fm(this.scratchDir,this.group.position.x,this.group.position.z,s,r,i);let a=mm[this.gait];if(a>0){this.wobbleTime+=e*this.wobbleFreq;let t=Math.sin(this.wobbleTime+this.wobblePhase)*a,n=Math.cos(t),r=Math.sin(t),i=this.scratchDir.x*n-this.scratchDir.y*r,o=this.scratchDir.x*r+this.scratchDir.y*n;this.scratchDir.set(i,o)}this.scratchSeparation.set(0,0);for(let e of n){if(e===this||!e.isAlive())continue;this.scratchAway.set(this.group.position.x-e.group.position.x,this.group.position.z-e.group.position.z);let t=this.scratchAway.length();t>.001&&t<lm&&this.scratchSeparation.addScaledVector(this.scratchAway.normalize(),(lm-t)/lm)}if(this.scratchMove.copy(this.scratchDir).addScaledVector(this.scratchSeparation,um),this.scratchMove.lengthSq()>0){this.scratchMove.normalize(),u=this.gait===`crawl`?hm:1,this.frenzyTimer>0&&(u*=ym[this.gait]);let t=this.scratchMove.x*this.config.speed*u*e,n=this.scratchMove.y*this.config.speed*u*e;this.scratchNext.set(this.group.position.x+t,this.group.position.z+n),Pm(this.scratchNext,s,r,i),this.group.position.x=this.scratchNext.x,this.group.position.z=this.scratchNext.y,this.group.rotation.y=Math.atan2(this.scratchMove.x,this.scratchMove.y)}}let f=c>im,p=this.gait===`sprint`?1.15:1;this.headBob+=e*(f?this.config.speed*u*p:4);let m=this.lungeTimer>0?Math.sin((.2-this.lungeTimer)/.2*Math.PI)*.25:0,h=.5,g=.15,_=.05;switch(this.gait){case`crawl`:h=.18,g=.4,_=.02;break;case`sprint`:h=.7,g=.3,_=.08;break;case`lumber`:h=.65,g=.12,_=.03;break}let v=a(this.group.position.x,this.group.position.z);this.group.position.y=v+Math.abs(Math.sin(this.headBob))*_,this.upperBody.rotation.x=this.gait===`crawl`?gm:0,this.torso.position.z=m;let y=this.headBob+(this.gait===`shamble`||this.gait===`lumber`?this.legPhaseOffset:0),b=f?Math.sin(y):0;return this.legL.rotation.x=b*h,this.legR.rotation.x=-b*h,this.armL.rotation.x=-1.4+m*1.2+b*g,this.armR.rotation.x=-1.4+m*1.2-b*g,{didAttack:l,damage:l?this.config.damage:0}}};function Pm(e,t,n,r){for(let r of n){if(!bl(r,t,t+tm))continue;let n=Math.max(r.minX,Math.min(e.x,r.maxX)),i=Math.max(r.minZ,Math.min(e.y,r.maxZ)),a=e.x-n,o=e.y-i,s=a*a+o*o;if(s<om*om&&s>1e-9){let t=Math.sqrt(s),n=om-t;e.x+=a/t*n,e.y+=o/t*n}}for(let t of r){let n=e.x-t.cx,r=e.y-t.cz,i=n*n+r*r,a=t.radius+om;if(i<a*a&&i>1e-9){let t=Math.sqrt(i),o=a-t;e.x+=n/t*o,e.y+=r/t*o}}}function Fm(e,t,n,r,i,a){let o=t+e.x*cm,s=n+e.y*cm,c=(r,i)=>{let a=r-t,o=i-n,s=e.x*o-e.y*a>0?-1:1,c=-e.y*s,l=e.x*s;e.set(e.x+c*1.1,e.y+l*1.1),e.normalize()};for(let e of i){if(!bl(e,r,r+tm))continue;let t=Math.max(e.minX,Math.min(o,e.maxX)),n=Math.max(e.minZ,Math.min(s,e.maxZ)),i=o-t,a=s-n;if(i*i+a*a<sm*sm){c((e.minX+e.maxX)/2,(e.minZ+e.maxZ)/2);return}}for(let e of a){let t=o-e.cx,n=s-e.cz,r=sm+e.radius;if(t*t+n*n<r*r){c(e.cx,e.cz);return}}}function Im(e,t,n,r,i){let a=n-e,o=r-t;for(let n of i){let r=0,i=1,s=!0;if(Math.abs(a)<1e-9)(e<n.minX||e>n.maxX)&&(s=!1);else{let t=(n.minX-e)/a,o=(n.maxX-e)/a;t>o&&([t,o]=[o,t]),r=Math.max(r,t),i=Math.min(i,o),r>i&&(s=!1)}if(s&&Math.abs(o)<1e-9)(t<n.minZ||t>n.maxZ)&&(s=!1);else if(s){let e=(n.minZ-t)/o,a=(n.maxZ-t)/o;e>a&&([e,a]=[a,e]),r=Math.max(r,e),i=Math.min(i,a),r>i&&(s=!1)}if(s)return!0}return!1}var Lm=.55,Rm=12,zm=class{waveNumber=0;state=`intermission`;intermissionRemaining=1.5;alive=[];scene;spawnPoints;collisionBoxes;collisionCircles;groundHeightAt;onZombieKilled;flowField;queue=[];spawnTimer=0;dying=[];constructor(e,t,n,r,i,a,o=null){this.scene=e,this.spawnPoints=t,this.collisionBoxes=n,this.collisionCircles=r,this.groundHeightAt=i,this.onZombieKilled=a,this.flowField=o}get zombiesRemaining(){return this.alive.length+this.queue.length}get raycastTargets(){let e=[];for(let t of this.alive)e.push(...t.hitboxes);return e}buildWaveQueue(e){let t=Math.min(4+e*3,40),n=[];for(let r=0;r<t;r++){let t=Math.random(),r=`shambler`;e>=2&&t<Math.min(.15+e*.03,.45)&&(r=`runner`),e>=3&&t>.85&&t<Math.min(.85+e*.01,.97)&&(r=`brute`),n.push(r)}return n}startWave(){this.waveNumber+=1,this.queue=this.buildWaveQueue(this.waveNumber),this.spawnTimer=0,this.state=`spawning`}spawnOne(e){let t=this.spawnPoints[Math.floor(Math.random()*this.spawnPoints.length)],n=(Math.random()-.5)*1.5,r=(Math.random()-.5)*1.5,i=new Nm(e,new K(t.x+n,0,t.z+r));this.scene.add(i.group),this.alive.push(i)}update(e,t){if(this.state===`intermission`)return this.intermissionRemaining-=e,this.intermissionRemaining<=0&&this.startWave(),{damageToPlayer:0};if(this.state===`spawning`){if(this.spawnTimer-=e,this.spawnTimer<=0&&this.queue.length>0){this.spawnTimer=Lm;let e=this.queue.shift();this.spawnOne(e)}this.queue.length===0&&(this.state=`active`)}this.flowField?.update(t.x,t.z);let n=0;for(let r of this.alive){let i=r.update(e,t,this.alive,this.collisionBoxes,this.collisionCircles,this.groundHeightAt,this.flowField);i.didAttack&&(n+=i.damage)}for(let e=this.alive.length-1;e>=0;e--){let t=this.alive[e];t.isAlive()||(this.alive.splice(e,1),t.startDeath(),this.dying.push(t),this.onZombieKilled(t.kind,t.group.position.clone()))}for(let t=this.dying.length-1;t>=0;t--)this.dying[t].updateDeath(e)&&(this.scene.remove(this.dying[t].group),this.dying[t].dispose(),this.dying.splice(t,1));return this.state===`active`&&this.alive.length===0&&this.queue.length===0&&(this.state=`intermission`,this.intermissionRemaining=Rm),{damageToPlayer:n}}},Bm=class{originX;originZ;cols;rows;cellSize;blocked;dist;dirX;dirZ;lastPlayerCell=-1;constructor(e,t,n,r=1,i=.6){this.cellSize=r,this.originX=e.minX-2,this.originZ=e.minZ-2,this.cols=Math.ceil((e.maxX-e.minX+4)/r),this.rows=Math.ceil((e.maxZ-e.minZ+4)/r);let a=this.cols*this.rows;this.blocked=new Uint8Array(a),this.dist=new Int32Array(a),this.dirX=new Float32Array(a),this.dirZ=new Float32Array(a),this.rasterize(t,n,i)}rasterize(e,t,n){for(let r=0;r<this.rows;r++)for(let i=0;i<this.cols;i++){let a=this.originX+(i+.5)*this.cellSize,o=this.originZ+(r+.5)*this.cellSize;this.pointBlocked(a,o,e,t,n)&&(this.blocked[r*this.cols+i]=1)}}pointBlocked(e,t,n,r,i){for(let r of n)if(e>=r.minX-i&&e<=r.maxX+i&&t>=r.minZ-i&&t<=r.maxZ+i)return!0;for(let n of r){let r=e-n.cx,a=t-n.cz,o=n.radius+i;if(r*r+a*a<=o*o)return!0}return!1}cellIndex(e,t){let n=Math.floor((e-this.originX)/this.cellSize),r=Math.floor((t-this.originZ)/this.cellSize);return n<0||n>=this.cols||r<0||r>=this.rows?-1:r*this.cols+n}nearestOpen(e){if(e<0)return-1;if(!this.blocked[e])return e;let t=e%this.cols,n=Math.floor(e/this.cols);for(let e=1;e<=6;e++)for(let r=-e;r<=e;r++)for(let i=-e;i<=e;i++){if(Math.abs(r)!==e&&Math.abs(i)!==e)continue;let a=n+r,o=t+i;if(a<0||a>=this.rows||o<0||o>=this.cols)continue;let s=a*this.cols+o;if(!this.blocked[s])return s}return-1}update(e,t){let n=this.cellIndex(e,t),r=this.nearestOpen(n);r<0||r===this.lastPlayerCell||(this.lastPlayerCell=r,this.flood(r))}flood(e){this.dist.fill(-1);let t=new Int32Array(this.cols*this.rows),n=0,r=0;for(this.dist[e]=0,t[r++]=e;n<r;){let e=t[n++],i=this.dist[e],a=e%this.cols,o=Math.floor(e/this.cols);for(let e=0;e<4;e++){let n=a+Vm[e][0],s=o+Vm[e][1];if(n<0||n>=this.cols||s<0||s>=this.rows)continue;let c=s*this.cols+n;this.blocked[c]||this.dist[c]!==-1||(this.dist[c]=i+1,t[r++]=c)}}this.buildDirections()}buildDirections(){for(let e=0;e<this.rows;e++)for(let t=0;t<this.cols;t++){let n=e*this.cols+t;if(this.dirX[n]=0,this.dirZ[n]=0,this.blocked[n]||this.dist[n]<0)continue;let r=this.dist[n],i=0,a=0;for(let n=0;n<8;n++){let o=Hm[n][0],s=Hm[n][1],c=t+o,l=e+s;if(c<0||c>=this.cols||l<0||l>=this.rows)continue;let u=l*this.cols+c;this.blocked[u]||this.dist[u]<0||o!==0&&s!==0&&(this.blocked[e*this.cols+c]||this.blocked[l*this.cols+t])||this.dist[u]<r&&(r=this.dist[u],i=o,a=s)}if(i===0&&a===0)continue;let o=Math.hypot(i,a);this.dirX[n]=i/o,this.dirZ[n]=a/o}}sample(e,t){let n=this.cellIndex(e,t);if(n<0)return null;let r=this.dirX[n],i=this.dirZ[n];return r===0&&i===0?null:{x:r,z:i}}},Vm=[[1,0],[-1,0],[0,1],[0,-1]],Hm=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function Um(e){let t=document.createElement(`canvas`);t.width=128,t.height=128;let n=t.getContext(`2d`),r=128*.47,i=[{freq:2+Math.floor(Math.random()*2),amp:e*(.3+Math.random()*.3),phase:Math.random()*Math.PI*2},{freq:3+Math.floor(Math.random()*3),amp:e*(.15+Math.random()*.25),phase:Math.random()*Math.PI*2}];n.beginPath();for(let e=0;e<=24;e++){let t=e/24*Math.PI*2,a=1;for(let e of i)a+=e.amp*Math.sin(t*e.freq+e.phase);a=Math.max(.55,a)*r;let o=64+Math.cos(t)*a,s=64+Math.sin(t)*a;e===0?n.moveTo(o,s):n.lineTo(o,s)}n.closePath(),n.clip();let a=n.createRadialGradient(64,64,0,64,64,r);return a.addColorStop(0,`rgba(255,255,255,1)`),a.addColorStop(.5,`rgba(255,255,255,0.95)`),a.addColorStop(.8,`rgba(255,255,255,0.45)`),a.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=a,n.fillRect(0,0,128,128),t}function Wm(){let e=document.createElement(`canvas`);e.width=32,e.height=128;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,32,0);n.addColorStop(0,`rgba(255,255,255,0)`),n.addColorStop(.5,`rgba(255,255,255,1)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,128),t.globalCompositeOperation=`destination-in`;let r=t.createLinearGradient(0,0,0,128);return r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.7,`rgba(255,255,255,1)`),r.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=r,t.fillRect(0,0,32,128),e}function Gm(){return[.35+Math.random()*.25,.01,.01]}var Km=1,qm=9,Jm=.7,Ym=.38,Xm=.5,Zm=2,Qm=260,$m=50,eh=90,th=60,nh=10,rh=2.4,ih=.5,ah=.45,oh=16,sh=3,ch=9,lh=2,uh=8,dh=1.5,fh=.9,ph=new Y(.05,.05,.05),mh=new Ai(1,1),hh=new K(0,0,1),gh=new K(0,1,0);function _h(e){let t=new Si(e);return t.needsUpdate=!0,t}var vh=Array.from({length:6},()=>_h(Um(.4))),yh=Array.from({length:6},()=>_h(Um(.5))),bh=_h(Wm());function xh(e){return e[Math.floor(Math.random()*e.length)]}function Sh(){return new jn(...Gm())}function Ch(e,t){return new Z({color:e,roughness:.4,metalness:.05,emissive:e.clone().multiplyScalar(.5),emissiveIntensity:.7,...t})}function wh(e,t){e.color.copy(t),e.emissive.copy(t).multiplyScalar(.5)}function Th(e){return 1+2.7*(e-1)**3+1.7*(e-1)**2}function Eh(e){let t=Math.min(1,Math.max(0,e));return 1-(1-t)*(1-t)}function Dh(e,t){let n=t.pop();return n===void 0?e.shift():n}var Oh=class{scene;solidMeshes;raycaster=new qa;normalMatrix=new kt;particles=[];freeParticles=[];pools=[];freePools=[];wallSplats=[];freeWallSplats=[];drips=[];freeDrips=[];constructor(e,t){this.scene=e,this.solidMeshes=t,this.raycaster.far=rh;for(let e=0;e<Qm;e++)this.freeParticles.push(this.createParticleSlot());for(let e=0;e<$m;e++)this.freePools.push(this.createDecalSlot());for(let e=0;e<eh;e++)this.freeWallSplats.push(this.createDecalSlot(!0));for(let e=0;e<th;e++)this.freeDrips.push(this.createDripSlot())}createParticleSlot(){let e=Ch(Sh()),t=new J(ph,e);return t.visible=!1,this.scene.add(t),{mesh:t,material:e,velocity:new K,angularVelocity:new K,life:0,bounces:0,settled:!1}}createDecalSlot(e=!1){let t=Ch(new jn(3802373),{transparent:!0,opacity:0,depthWrite:!1,...e?{side:2}:{}}),n=new J(mh,t);return n.visible=!1,this.scene.add(n),{mesh:n,material:t,finalScale:0,growTimer:0,life:0,baseOpacity:0}}createDripSlot(){let e=Ch(new jn(3802373),{map:bh,transparent:!0,opacity:0,depthWrite:!1,side:2}),t=new J(mh,e);return t.visible=!1,this.scene.add(t),{mesh:t,material:e,anchor:new K,sideJitter:0,width:0,targetLength:0,growElapsed:0,life:0,baseOpacity:0}}spawnHit(e,t){this.burst(e,t?11:7,1.2,2.6,1,2.2)}spawnDeath(e){this.burst(e,22,1.8,4.2,1.6,3.4),this.spawnPool(e),this.spatterNearbySurfaces(e)}burst(e,t,n,r,i,a){for(let o=0;o<t;o++){let t=Dh(this.particles,this.freeParticles);wh(t.material,Sh()),t.mesh.position.copy(e);let o=Math.random()*Math.PI*2,s=n+Math.random()*(r-n);t.velocity.set(Math.cos(o)*s,i+Math.random()*(a-i),Math.sin(o)*s);let c=1+Math.random()*1.3;t.mesh.scale.set(.5+Math.random()*.4,.5+Math.random()*.4,(.5+Math.random()*.5)*c),t.mesh.lookAt(e.clone().add(t.velocity)),t.angularVelocity.set((Math.random()-.5)*16,(Math.random()-.5)*16,(Math.random()-.5)*16),t.life=Km,t.bounces=0,t.settled=!1,t.material.opacity=1,t.material.transparent=!0,t.mesh.visible=!0,this.particles.push(t)}}spawnPool(e){let t=Dh(this.pools,this.freePools),n=.85;wh(t.material,new jn(3802373)),t.material.map=xh(vh),t.material.opacity=n,t.mesh.rotation.x=-Math.PI/2,t.mesh.rotation.z=Math.random()*Math.PI*2,t.mesh.position.set(e.x,.015,e.z),t.finalScale=.18+Math.random()*.3,t.mesh.scale.setScalar(.05),t.growTimer=ah,t.life=oh,t.baseOpacity=n,t.mesh.visible=!0,this.pools.push(t)}spawnMicroSplat(e,t){let n=Dh(this.wallSplats,this.freeWallSplats),r=.7;wh(n.material,Sh()),n.material.map=xh(yh),n.material.opacity=r;let i=new Et().setFromUnitVectors(hh,t),a=new Et().setFromAxisAngle(hh,Math.random()*Math.PI*2);n.mesh.quaternion.copy(i).multiply(a),n.mesh.position.copy(e).addScaledVector(t,.008),n.finalScale=.04+Math.random()*.08,n.mesh.scale.setScalar(n.finalScale),n.growTimer=0,n.life=ch,n.baseOpacity=r,n.mesh.visible=!0,this.wallSplats.push(n)}spatterNearbySurfaces(e){this.raycaster.far=rh;let t=new K(e.x,1.2,e.z);for(let e=0;e<nh;e++){let n=e/nh*Math.PI*2+Math.random()*.4,r=new K(Math.cos(n),(Math.random()-.5)*.35,Math.sin(n)).normalize();this.raycaster.set(t,r);let i=this.raycaster.intersectObjects(this.solidMeshes,!1);if(i.length===0||!i[0].face)continue;let a=i[0];this.normalMatrix.getNormalMatrix(a.object.matrixWorld);let o=a.face.normal.clone().applyMatrix3(this.normalMatrix).normalize();this.spawnWallSplat(a.point,o)}}spawnWallSplat(e,t){let n=Dh(this.wallSplats,this.freeWallSplats),r=.82;wh(n.material,Sh()),n.material.map=xh(yh),n.material.opacity=r;let i=new Et().setFromUnitVectors(hh,t),a=new Et().setFromAxisAngle(hh,Math.random()*Math.PI*2);if(n.mesh.quaternion.copy(i).multiply(a),n.mesh.position.copy(e).addScaledVector(t,.008),n.finalScale=.12+Math.random()*.18,n.mesh.scale.setScalar(.05),n.growTimer=ah,n.life=ch,n.baseOpacity=r,n.mesh.visible=!0,this.wallSplats.push(n),t.y<ih&&Math.random()<.7){let n=1+Math.floor(Math.random()*2);for(let r=0;r<n;r++)this.spawnDrip(e,t)}}spawnDrip(e,t){let n=Dh(this.drips,this.freeDrips),r=.75;wh(n.material,Sh()),n.material.opacity=r;let i=new Et().setFromUnitVectors(hh,t);n.mesh.quaternion.copy(i),n.width=.02+Math.random()*.025,n.targetLength=.12+Math.random()*.32,n.sideJitter=(Math.random()-.5)*.12,n.anchor.copy(e).addScaledVector(t,.006),n.mesh.scale.set(n.width,.001,1),n.mesh.position.copy(n.anchor),n.growElapsed=0,n.life=uh,n.baseOpacity=r,n.mesh.visible=!0,this.drips.push(n)}update(e){for(let t=this.particles.length-1;t>=0;t--){let n=this.particles[t];if(n.life-=e,n.life<=0){n.mesh.visible=!1,this.particles.splice(t,1),this.freeParticles.push(n);continue}if(!n.settled){let t=Math.max(0,1-Jm*e);n.velocity.x*=t,n.velocity.z*=t,n.velocity.y-=qm*e;let r=n.velocity.clone().multiplyScalar(e),i=r.length(),a=null,o=null;if(i>1e-5){this.raycaster.set(n.mesh.position,r.clone().divideScalar(i)),this.raycaster.far=i;let e=this.raycaster.intersectObjects(this.solidMeshes,!1);if(e.length>0&&e[0].face){let t=e[0];this.normalMatrix.getNormalMatrix(t.object.matrixWorld),o=t.face.normal.clone().applyMatrix3(this.normalMatrix).normalize(),a=t.point.clone()}}a&&o?(n.mesh.position.copy(a).addScaledVector(o,.01),this.settleOrBounce(n,o)):(n.mesh.position.add(r),n.mesh.position.y<.03&&(n.mesh.position.y=.03,this.settleOrBounce(n,gh))),n.mesh.rotation.x+=n.angularVelocity.x*e,n.mesh.rotation.y+=n.angularVelocity.y*e,n.mesh.rotation.z+=n.angularVelocity.z*e}n.material.opacity=Math.min(1,n.life/Km),n.material.transparent=!0}this.updateDecals(this.pools,this.freePools,e,sh),this.updateDecals(this.wallSplats,this.freeWallSplats,e,lh),this.updateDrips(e)}settleOrBounce(e,t){let n=-e.velocity.dot(t);e.bounces<Zm&&n>Xm?(e.velocity.reflect(t).multiplyScalar(Ym),e.angularVelocity.multiplyScalar(.6),e.bounces++):(e.settled=!0,e.velocity.set(0,0,0),e.angularVelocity.set(0,0,0),this.spawnMicroSplat(e.mesh.position,t),e.life=Math.min(e.life,.12))}updateDecals(e,t,n,r){for(let i=e.length-1;i>=0;i--){let a=e[i];if(a.growTimer>0){a.growTimer=Math.max(0,a.growTimer-n);let e=1-a.growTimer/ah;a.mesh.scale.setScalar(Math.max(.05,Th(e))*a.finalScale)}if(a.life-=n,a.life<=0){a.mesh.visible=!1,e.splice(i,1),t.push(a);continue}a.life<r&&(a.material.opacity=a.baseOpacity*(a.life/r))}}updateDrips(e){for(let t=this.drips.length-1;t>=0;t--){let n=this.drips[t];if(n.growElapsed<fh){n.growElapsed=Math.min(fh,n.growElapsed+e);let t=Eh(n.growElapsed/fh),r=Math.max(.001,n.targetLength*t);n.mesh.scale.set(n.width,r,1),n.mesh.position.copy(n.anchor).add(new K(n.sideJitter,-r/2,n.sideJitter*.3))}if(n.life-=e,n.life<=0){n.mesh.visible=!1,this.drips.splice(t,1),this.freeDrips.push(n);continue}n.life<dh&&(n.material.opacity=n.baseOpacity*(n.life/dh))}}},kh=Array.from({length:5},()=>Um(.5).toDataURL(`image/png`)),Ah=Wm().toDataURL(`image/png`),jh=4200,Mh=26;function Nh(e){return e[Math.floor(Math.random()*e.length)]}function Ph(){let[e,t,n]=Gm();return`rgb(${Math.round(e*255)}, ${Math.round(t*255)}, ${Math.round(n*255)})`}var Fh=class{root;active=[];constructor(e){this.root=document.createElement(`div`),this.root.id=`screen-blood`,e.appendChild(this.root)}spawnSplatter(e,t=!1){let n=Math.max(0,Math.min(1,e)),r=(t?3:2)+Math.round(n*2);for(let e=0;e<r;e++){let e=this.spawnShape(Nh(kh),16+Math.random()*20*(.6+n*.7));Math.random()<.55&&this.spawnDrip(e)}}spawnShape(e,t){let n=document.createElement(`div`);return n.className=`screen-blood-blob`,n.style.setProperty(`--mask`,`url(${e})`),n.style.setProperty(`--size`,`${t}vw`),n.style.setProperty(`--rot`,`${Math.random()*360}deg`),n.style.setProperty(`--peak`,`${.65+Math.random()*.3}`),n.style.left=`${4+Math.random()*92}%`,n.style.top=`${4+Math.random()*88}%`,n.style.backgroundColor=Ph(),this.root.appendChild(n),this.registerActive(n),requestAnimationFrame(()=>n.classList.add(`show`)),setTimeout(()=>n.classList.add(`fade`),jh),setTimeout(()=>this.remove(n),5700),n}spawnDrip(e){let t=document.createElement(`div`);t.className=`screen-blood-drip`;let n=1.2+Math.random()*1.6,r=6+Math.random()*16;t.style.setProperty(`--mask`,`url(${Ah})`),t.style.setProperty(`--w`,`${n}vw`),t.style.setProperty(`--len`,`${r}vh`),t.style.left=e.style.left,t.style.top=e.style.top,t.style.backgroundColor=Ph(),this.root.appendChild(t),this.registerActive(t),requestAnimationFrame(()=>t.classList.add(`show`)),setTimeout(()=>t.classList.add(`fade`),jh),setTimeout(()=>this.remove(t),5700)}registerActive(e){this.active.push(e),this.active.length>Mh&&this.remove(this.active[0])}remove(e){let t=this.active.indexOf(e);t!==-1&&this.active.splice(t,1),e.remove()}},Ih=class{root;overlay;overlayTitle;overlayBody;healthFill;healthNum;ammoMag;ammoReserve;waveLabel;zombiesLabel;moneyLabel;reloadIndicator;interactPrompt;healBar;healBarFill;hitFlash;hitmarker;hitmarkerTimer=null;shopPanel;shopTimer;shopItemEls=new Map;settingsBtn;exitBtn;settingsPanel;settingsCloseBtn;sensitivitySlider;sensitivityValue;constructor(e){this.root=document.createElement(`div`),this.root.id=`hud`,this.root.innerHTML=`
      <div id="vignette"></div>
      <div id="crosshair"></div>
      <div id="hitmarker"></div>
      <div id="hit-flash"></div>
      <div id="top-center">
        <div id="wave-label">Oleada 1</div>
        <div id="zombies-label">0 zombies</div>
        <div id="money-label">$0</div>
      </div>
      <div id="reload-indicator">RECARGANDO</div>
      <div id="interact-prompt"></div>
      <div id="heal-bar"><div id="heal-bar-fill"></div></div>
      <div id="health-panel">
        <svg class="hp-heart" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 21s-7.6-4.7-10.1-9.3C.2 8.4 1.9 4.9 5.3 4.9c2 0 3.4 1.1 4.2 2.4h1c.8-1.3 2.2-2.4 4.2-2.4 3.4 0 5.1 3.5 3.4 6.8C19.6 16.3 12 21 12 21Z"/></svg>
        <div id="health-track"><div id="health-fill"></div></div>
        <div id="health-num">100</div>
      </div>
      <div id="ammo-panel">
        <div id="ammo-mag">30</div>
        <div id="ammo-reserve">/ 150</div>
      </div>
      <div id="shop-panel">
        <div class="shop-title">TIENDA · siguiente oleada en <span id="shop-timer">12</span>s</div>
        <div id="shop-items"></div>
      </div>
    `,e.appendChild(this.root),this.overlay=document.createElement(`div`),this.overlay.id=`overlay`,this.overlay.className=`hidden`,this.overlay.innerHTML=`
      <div id="overlay-card">
        <h1 id="overlay-title">HORDE FPS</h1>
        <p id="overlay-body">WASD mover · Ratón apuntar · Click disparar/atacar · R recargar · 1-5 cambiar equipo · F linterna · Espacio saltar · E abrir caja / arsenal / curar herido · Tab mochila</p>
        <p class="hint">Click para continuar</p>
        <div id="overlay-actions">
          <button id="settings-btn" type="button" class="menu-btn hidden">⚙ Ajustes</button>
          <button id="exit-btn" type="button" class="menu-btn menu-btn-danger">Salir al menú principal</button>
        </div>
      </div>
    `,e.appendChild(this.overlay),this.settingsPanel=document.createElement(`div`),this.settingsPanel.id=`settings-panel`,this.settingsPanel.className=`hidden`,this.settingsPanel.innerHTML=`
      <div class="settings-box">
        <h2>Ajustes</h2>
        <div class="settings-row">
          <label for="sensitivity-slider">Sensibilidad del ratón</label>
          <input type="range" id="sensitivity-slider" min="25" max="300" step="5" value="100" />
          <span id="sensitivity-value">100%</span>
        </div>
        <button id="settings-close" type="button" class="overlay-btn">Cerrar</button>
      </div>
    `,e.appendChild(this.settingsPanel),this.healthFill=this.root.querySelector(`#health-fill`),this.healthNum=this.root.querySelector(`#health-num`),this.ammoMag=this.root.querySelector(`#ammo-mag`),this.ammoReserve=this.root.querySelector(`#ammo-reserve`),this.waveLabel=this.root.querySelector(`#wave-label`),this.zombiesLabel=this.root.querySelector(`#zombies-label`),this.moneyLabel=this.root.querySelector(`#money-label`),this.reloadIndicator=this.root.querySelector(`#reload-indicator`),this.interactPrompt=this.root.querySelector(`#interact-prompt`),this.healBar=this.root.querySelector(`#heal-bar`),this.healBarFill=this.root.querySelector(`#heal-bar-fill`),this.hitFlash=this.root.querySelector(`#hit-flash`),this.hitmarker=this.root.querySelector(`#hitmarker`),this.shopPanel=this.root.querySelector(`#shop-panel`),this.shopTimer=this.root.querySelector(`#shop-timer`),this.overlayTitle=this.overlay.querySelector(`#overlay-title`),this.overlayBody=this.overlay.querySelector(`#overlay-body`),this.settingsBtn=this.overlay.querySelector(`#settings-btn`),this.exitBtn=this.overlay.querySelector(`#exit-btn`),this.settingsCloseBtn=this.settingsPanel.querySelector(`#settings-close`),this.sensitivitySlider=this.settingsPanel.querySelector(`#sensitivity-slider`),this.sensitivityValue=this.settingsPanel.querySelector(`#sensitivity-value`),this.settingsBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.settingsPanel.classList.remove(`hidden`)}),this.exitBtn.addEventListener(`click`,e=>e.stopPropagation()),this.settingsCloseBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.settingsPanel.classList.add(`hidden`)}),this.sensitivitySlider.addEventListener(`click`,e=>e.stopPropagation()),this.sensitivitySlider.addEventListener(`input`,()=>{this.sensitivityValue.textContent=`${this.sensitivitySlider.value}%`})}showSettingsButton(e){this.settingsBtn.classList.toggle(`hidden`,!e),e||this.settingsPanel.classList.add(`hidden`)}onSensitivityChange(e){this.sensitivitySlider.addEventListener(`input`,()=>{e(Number(this.sensitivitySlider.value)/100)})}setSensitivityDisplay(e){let t=Math.round(e*100);this.sensitivitySlider.value=String(t),this.sensitivityValue.textContent=`${t}%`}setShopItems(e){let t=this.root.querySelector(`#shop-items`);t.innerHTML=e.map(e=>`
        <div class="shop-item" data-key="${e.key}">
          <span class="shop-key">${e.key}</span>
          <span class="shop-label">${e.label}</span>
          <span class="shop-price">$${e.price}</span>
        </div>`).join(``),this.shopItemEls.clear();for(let n of e)this.shopItemEls.set(n.key,t.querySelector(`[data-key="${n.key}"]`))}showShop(){this.shopPanel.classList.add(`visible`)}hideShop(){this.shopPanel.classList.remove(`visible`)}updateShop(e,t,n){this.shopTimer.textContent=String(Math.max(0,Math.ceil(t)));for(let[t,r]of this.shopItemEls)r.classList.toggle(`disabled`,!n(t)||e<0)}setMoney(e){this.moneyLabel.textContent=`$${e}`}showHitmarker(e){this.hitmarkerTimer&&clearTimeout(this.hitmarkerTimer),this.hitmarker.classList.remove(`active`,`headshot`),this.hitmarker.offsetWidth,this.hitmarker.classList.add(`active`),e&&this.hitmarker.classList.add(`headshot`),this.hitmarkerTimer=setTimeout(()=>this.hitmarker.classList.remove(`active`,`headshot`),130)}onOverlayClick(e){this.overlay.addEventListener(`click`,e)}onExitClick(e){this.exitBtn.addEventListener(`click`,e)}showOverlay(e,t){this.overlayTitle.textContent=e,this.overlayBody.textContent=t,this.overlay.classList.remove(`hidden`)}hideOverlay(){this.overlay.classList.add(`hidden`)}setOverlayInstructions(e){this.overlayBody.textContent=e}setHealth(e,t){let n=Math.max(0,Math.min(100,e/t*100));this.healthFill.style.width=`${n}%`,this.healthNum.textContent=String(Math.max(0,Math.round(e)));let r=n>55?`#4ccf6a`:n>25?`#f0a326`:`#e23b3b`;this.healthFill.style.background=r,this.root.classList.toggle(`health-critical`,n<=25)}setAmmo(e,t,n){this.ammoMag.textContent=String(e),this.ammoReserve.textContent=`/ ${t}`,this.reloadIndicator.classList.toggle(`visible`,n)}showMelee(){this.ammoMag.textContent=`CUCHILLO`,this.ammoReserve.textContent=``,this.reloadIndicator.classList.remove(`visible`)}showMedkit(e){this.ammoMag.textContent=`✚`,this.ammoReserve.textContent=e>0?`x${e} · mantén click`:`sin botiquines`,this.reloadIndicator.classList.remove(`visible`)}setHealProgress(e,t){this.healBar.classList.toggle(`visible`,t&&e>0),this.healBarFill.style.width=`${Math.min(100,Math.max(0,e*100))}%`}setWaveInfo(e,t,n,r){this.waveLabel.textContent=`Oleada ${e}`,this.zombiesLabel.textContent=n===`intermission`?`Siguiente oleada en ${Math.ceil(r)}s`:`${t} zombies restantes`}setCarrying(e){this.root.classList.toggle(`carrying`,e)}setCabinetBrowsing(e){this.root.classList.toggle(`cabinet-browsing`,e)}showInteractPrompt(e){this.interactPrompt.textContent=e,this.interactPrompt.classList.add(`visible`)}hideInteractPrompt(){this.interactPrompt.classList.remove(`visible`)}flashHit(){this.hitFlash.style.background=`rgba(214, 40, 40, 0.35)`,setTimeout(()=>{this.hitFlash.style.background=`rgba(214, 40, 40, 0)`},60)}},Lh={floor:`concrete`,ceiling:`flat`},Rh=2.5,zh=9080985,Bh=.3,Vh=6258600;function Hh(e,t=`reactor`,n=40,r=40){return{name:e,theme:t,style:{...Lh},cols:n,rows:r,cell:3,blocks:[],props:[],spawns:[],playerStart:{c:Math.floor(n/2),r:Math.floor(r/2)}}}var Uh={concrete:9080985,steel:7304833,brick:9194037,wood:8017714,panel:13028307,dark:3817288},Wh={reactor:4.5,warehouse:5,bright:4},Gh=1.8;function Kh(e,t,n,r,i){let a=Uh[String(i)]??9080985,o=Wh[r]??2.5,s=[];for(let r=0;r<t;r++){let t=-1;for(let i=0;i<=e;i++){let c=i<e&&n[r*e+i]===1;c&&t===-1&&(t=i),!(c||t===-1)&&(s.push({kind:`wall`,c0:t,r0:r,c1:i-1,r1:r,baseY:0,topY:o,color:a}),t=-1)}}return s}function qh(e,t,n){let r=[];for(let i=0;i<t;i++){let t=-1,a=0;for(let o=0;o<=e;o++){let s=o<e?n[i*e+o]:0;if(!(t!==-1&&s===a)){if(t!==-1&&a!==0){let e=a*Gh;r.push({kind:`slab`,c0:t,r0:i,c1:o-1,r1:i,baseY:e-Bh,topY:e,color:Vh})}t=o<e?o:-1,a=o<e?s:0}}}return r}function Jh(e){let t=e.cols??40,n=e.rows??40,r=t*n,i=e.theme??`reactor`,a=e.style??{},o=Array.isArray(e.blocks)?e.blocks:void 0;if(!o){let s=Array.isArray(e.walls)&&e.walls.length===r?e.walls:void 0,c=Array.isArray(e.levels)&&e.levels.length===r?e.levels:void 0;o=[...s?Kh(t,n,s,i,a.wall):[],...c?qh(t,n,c):[]]}return{name:e.name,theme:i,style:{floor:a.floor??Lh.floor,ceiling:a.ceiling??Lh.ceiling},cols:t,rows:n,cell:e.cell??3,blocks:o,props:e.props??[],spawns:e.spawns??[],playerStart:e.playerStart??{c:Math.floor(t/2),r:Math.floor(n/2)}}}function Yh(e,t,n){let r=-(e.cols*e.cell)/2,i=-(e.rows*e.cell)/2;return{x:r+(t+.5)*e.cell,z:i+(n+.5)*e.cell}}var Xh=`hordefps.maps.index`,Zh=`hordefps.map.`;function Qh(){try{let e=localStorage.getItem(Xh);return e?JSON.parse(e):[]}catch{return[]}}function $h(e){try{let t=localStorage.getItem(Zh+e);return t?Jh(JSON.parse(t)):null}catch{return null}}function eg(e){localStorage.setItem(Zh+e.name,JSON.stringify(e));let t=Qh();t.includes(e.name)||(t.push(e.name),localStorage.setItem(Xh,JSON.stringify(t)))}function tg(e){localStorage.removeItem(Zh+e);let t=Qh().filter(t=>t!==e);localStorage.setItem(Xh,JSON.stringify(t))}function ng(e){let t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`${e.name}.hordemap.json`,r.click(),URL.revokeObjectURL(n)}function rg(e){return e.text().then(e=>Jh(JSON.parse(e)))}var ig=[{id:`reactor`,name:`Reactor`,description:`Un núcleo elevado con rampas rodeado por un anillo abierto: toma la posición alta y encauza a la horda por las rampas.`}],ag=`custom:`;function og(e){return e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}var sg=class{root;mapsEl;customEl;settingsPanel;selectedMapId=ig[0].id;playHandler=null;editorHandler=null;constructor(e){this.root=document.createElement(`div`),this.root.id=`main-menu`,this.root.innerHTML=`
      <div id="menu-title-wrap">
        <h1 id="menu-title">HORDE<span>FPS</span></h1>
        <p id="menu-subtitle">Sobrevive a la horda</p>
      </div>
      <div id="menu-maps"></div>
      <div id="menu-custom"></div>
      <div id="menu-actions">
        <button id="menu-play-btn" type="button" class="menu-btn menu-btn-primary">JUGAR</button>
        <button id="menu-editor-btn" type="button" class="menu-btn">🛠 Editor de mapas</button>
        <button id="menu-settings-btn" type="button" class="menu-btn">⚙ Ajustes</button>
      </div>
    `,e.appendChild(this.root),this.settingsPanel=document.createElement(`div`),this.settingsPanel.id=`menu-settings-panel`,this.settingsPanel.className=`hidden`;let t=Math.round(tu()*100),n=Math.round(ku()*100);this.settingsPanel.innerHTML=`
      <div class="settings-box">
        <h2>Ajustes</h2>
        <div class="settings-row">
          <label for="menu-sensitivity-slider">Sensibilidad del ratón</label>
          <input type="range" id="menu-sensitivity-slider" min="${Math.round(eu.min*100)}" max="${Math.round(eu.max*100)}" step="5" value="${t}" />
          <span id="menu-sensitivity-value">${t}%</span>
        </div>
        <div class="settings-row">
          <label for="menu-volume-slider">Volumen</label>
          <input type="range" id="menu-volume-slider" min="0" max="100" step="5" value="${n}" />
          <span id="menu-volume-value">${n}%</span>
        </div>
        <button id="menu-settings-close" type="button" class="overlay-btn">Cerrar</button>
      </div>
    `,e.appendChild(this.settingsPanel),this.mapsEl=this.root.querySelector(`#menu-maps`),this.customEl=this.root.querySelector(`#menu-custom`),this.renderMaps();let r=this.root.querySelector(`#menu-play-btn`);this.root.querySelector(`#menu-editor-btn`).addEventListener(`click`,()=>this.editorHandler?.());let i=this.root.querySelector(`#menu-settings-btn`),a=this.settingsPanel.querySelector(`#menu-settings-close`),o=this.settingsPanel.querySelector(`#menu-sensitivity-slider`),s=this.settingsPanel.querySelector(`#menu-sensitivity-value`),c=this.settingsPanel.querySelector(`#menu-volume-slider`),l=this.settingsPanel.querySelector(`#menu-volume-value`);r.addEventListener(`click`,()=>this.playHandler?.(this.selectedMapId)),i.addEventListener(`click`,()=>this.settingsPanel.classList.remove(`hidden`)),a.addEventListener(`click`,()=>this.settingsPanel.classList.add(`hidden`)),o.addEventListener(`input`,()=>{let e=nu(Number(o.value)/100);s.textContent=`${Math.round(e*100)}%`}),c.addEventListener(`input`,()=>{let e=Number(c.value)/100;Ou(e),l.textContent=`${Math.round(e*100)}%`})}renderMaps(){this.renderBuiltInMaps(),this.renderCustomMaps()}renderBuiltInMaps(){this.mapsEl.innerHTML=ig.map(e=>`
        <button
          type="button"
          class="map-card${e.id===this.selectedMapId?` selected`:``}${e.locked?` locked`:``}"
          data-map-id="${e.id}"
          ${e.locked?`disabled`:``}
        >
          <span class="map-card-name">${e.name}</span>
          <span class="map-card-desc">${e.description}</span>
        </button>
      `).join(``),this.mapsEl.querySelectorAll(`.map-card:not(.locked)`).forEach(e=>{e.addEventListener(`click`,()=>{this.selectedMapId=e.dataset.mapId,this.renderMaps()})})}renderCustomMaps(){let e=Qh();if(e.length===0){this.customEl.innerHTML=``;return}this.customEl.innerHTML=`
      <h2 class="menu-section-title">Tus mapas</h2>
      <div class="menu-custom-grid">
        ${e.map(e=>{let t=ag+e,n=og(e);return`
              <div class="map-card custom${t===this.selectedMapId?` selected`:``}" data-map-id="${og(t)}">
                <span class="map-card-name">${n}</span>
                <span class="map-card-desc">Creado en el editor de mapas.</span>
                <button type="button" class="map-card-delete" data-delete="${n}" title="Borrar ${n}">✕</button>
              </div>
            `}).join(``)}
      </div>
    `,this.customEl.querySelectorAll(`.map-card.custom`).forEach(e=>{e.addEventListener(`click`,()=>{this.selectedMapId=e.dataset.mapId,this.renderMaps()})}),this.customEl.querySelectorAll(`.map-card-delete`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.delete;window.confirm(`¿Borrar "${n}" definitivamente?`)&&(tg(n),this.selectedMapId===`custom:`+n&&(this.selectedMapId=ig[0].id),this.renderMaps())})})}onPlay(e){this.playHandler=e}onEditor(e){this.editorHandler=e}show(){this.renderMaps(),this.root.classList.remove(`hidden`)}hide(){this.root.classList.add(`hidden`),this.settingsPanel.classList.add(`hidden`)}},cg={concrete:{label:`Hormigón`,color:6054249,roughness:.92,metalness:.04,pattern:`speckle`,patternMetres:8},tile:{label:`Baldosa`,color:9278364,roughness:.55,metalness:.08,pattern:`tile`,patternMetres:4},grate:{label:`Rejilla metálica`,color:7765384,roughness:.42,metalness:.55,pattern:`grate`,patternMetres:2},dirt:{label:`Tierra`,color:4997169,roughness:.98,metalness:0,pattern:`speckle`,patternMetres:6},wood:{label:`Madera`,color:7163953,roughness:.86,metalness:.02,pattern:`plank`,patternMetres:4},asphalt:{label:`Asfalto`,color:3487805,roughness:.97,metalness:.03,pattern:`speckle`,patternMetres:7}},lg={none:{label:`Sin techo`,solid:!1,beams:`none`},flat:{label:`Plano`,solid:!0,beams:`none`},beams:{label:`Con vigas`,solid:!0,beams:`single`},industrial:{label:`Industrial`,solid:!0,beams:`cross`}},ug={reactor:{wallHeight:4.5,ambient:{color:3949392,intensity:2.4},hemi:{sky:4871264,ground:855828,intensity:1.5},panelLights:!0,fog:!0,sceneFog:{color:197380,near:4,far:66}},warehouse:{wallHeight:5,ambient:{color:5918268,intensity:2.6},hemi:{sky:6970440,ground:1314828,intensity:1.6},panelLights:!0,fog:!0,sceneFog:{color:525828,near:5,far:60}},bright:{wallHeight:4,ambient:{color:14673648,intensity:2.2},hemi:{sky:16777215,ground:8950944,intensity:1.4},panelLights:!1,fog:!1,sceneFog:{color:11121858,near:30,far:260}}},dg=256,fg=new Map;function pg(e){let t=dg/2;e.fillStyle=`#ffffff`,e.fillRect(0,0,dg,dg),e.fillStyle=`#dcdcdc`,e.fillRect(0,0,t,t),e.fillRect(t,t,t,t),e.strokeStyle=`#9a9a9a`,e.lineWidth=4,e.strokeRect(0,0,t,t),e.strokeRect(t,0,t,t),e.strokeRect(0,t,t,t),e.strokeRect(t,t,t,t)}function mg(e){e.fillStyle=`#ffffff`,e.fillRect(0,0,dg,dg),e.fillStyle=`#6e6e6e`;let t=dg/4,n=t*.62,r=(t-n)/2;for(let i=0;i<4;i++)for(let a=0;a<4;a++)e.fillRect(a*t+r,i*t+r,n,n)}function hg(e){let t=dg/4;for(let n=0;n<4;n++)e.fillStyle=n%2==0?`#ffffff`:`#e2e2e2`,e.fillRect(0,n*t,dg,t),e.fillStyle=`#a08a70`,e.fillRect(0,n*t,dg,3)}function gg(e){e.fillStyle=`#ffffff`,e.fillRect(0,0,dg,dg);for(let t=0;t<1400;t++){let t=200+Math.floor(Math.random()*45);e.fillStyle=`rgb(${t},${t},${t})`;let n=1+Math.random()*3;e.fillRect(Math.random()*dg,Math.random()*dg,n,n)}}var _g={tile:pg,grate:mg,plank:hg,speckle:gg};function vg(e){let t=fg.get(e);if(t)return t;let r=document.createElement(`canvas`);r.width=dg,r.height=dg,_g[e](r.getContext(`2d`));let i=new Si(r);return i.wrapS=n,i.wrapT=n,i.colorSpace=Ie,fg.set(e,i),i}function yg(e,t,n){let r=cg[e],i=new Z({color:r.color,roughness:r.roughness,metalness:r.metalness});if(!r.pattern)return i;let a=vg(r.pattern).clone();return a.needsUpdate=!0,a.repeat.set(t/r.patternMetres,n/r.patternMetres),i.map=a,i}function bg(e){return new Z({color:e,roughness:.8,metalness:.08})}var xg={type:`change`},Sg={type:`start`},Cg={type:`end`},wg=new Rr,Tg=new ri,Eg=Math.cos(70*Tt.DEG2RAD),Dg=new K,Og=2*Math.PI,kg={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ag=1e-6,jg=class extends $a{constructor(n,r=null){super(n,r),this.state=kg.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Et,this._lastTargetPosition=new K,this._quat=new Et().setFromUnitVectors(n.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Za,this._sphericalDelta=new Za,this._scale=1,this._panOffset=new K,this._rotateStart=new G,this._rotateEnd=new G,this._rotateDelta=new G,this._panStart=new G,this._panEnd=new G,this._panDelta=new G,this._dollyStart=new G,this._dollyEnd=new G,this._dollyDelta=new G,this._dollyDirection=new K,this._mouse=new G,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ng.bind(this),this._onPointerDown=Mg.bind(this),this._onPointerUp=Pg.bind(this),this._onContextMenu=Vg.bind(this),this._onMouseWheel=Lg.bind(this),this._onKeyDown=Rg.bind(this),this._onTouchStart=zg.bind(this),this._onTouchMove=Bg.bind(this),this._onMouseDown=Fg.bind(this),this._onMouseMove=Ig.bind(this),this._interceptControlDown=Hg.bind(this),this._interceptControlUp=Ug.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xg),this.update(),this.state=kg.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Dg.copy(t).sub(this.target),Dg.applyQuaternion(this._quat),this._spherical.setFromVector3(Dg),this.autoRotate&&this.state===kg.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Og:n>Math.PI&&(n-=Og),r<-Math.PI?r+=Og:r>Math.PI&&(r-=Og),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Dg.setFromSpherical(this._spherical),Dg.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dg),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Dg.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new K(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new K(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Dg.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(wg.origin.copy(this.object.position),wg.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wg.direction))<Eg?this.object.lookAt(this.target):(Tg.setFromNormalAndCoplanarPoint(this.object.up,this.target),wg.intersectPlane(Tg,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ag||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ag||this._lastTargetPosition.distanceToSquared(this.target)>Ag?(this.dispatchEvent(xg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Og/60/60*this.autoRotateSpeed:Og/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dg.setFromMatrixColumn(t,0),Dg.multiplyScalar(-e),this._panOffset.add(Dg)}_panUp(e,t){this.screenSpacePanning===!0?Dg.setFromMatrixColumn(t,1):(Dg.setFromMatrixColumn(t,0),Dg.crossVectors(this.object.up,Dg)),Dg.multiplyScalar(e),this._panOffset.add(Dg)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Dg.copy(r).sub(this.target);let i=Dg.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Og*this._rotateDelta.x/t.clientHeight),this._rotateUp(Og*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Og*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Og*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Og*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Og*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Og*this._rotateDelta.x/t.clientHeight),this._rotateUp(Og*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new G,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Mg(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Ng(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Pg(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Cg),this.state=kg.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Fg(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=kg.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=kg.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=kg.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=kg.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=kg.PAN}break;default:this.state=kg.NONE}this.state!==kg.NONE&&this.dispatchEvent(Sg)}function Ig(e){switch(this.state){case kg.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case kg.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case kg.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Lg(e){this.enabled===!1||this.enableZoom===!1||this.state!==kg.NONE||(e.preventDefault(),this.dispatchEvent(Sg),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Cg))}function Rg(e){this.enabled!==!1&&this._handleKeyDown(e)}function zg(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=kg.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=kg.TOUCH_PAN;break;default:this.state=kg.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=kg.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=kg.TOUCH_DOLLY_ROTATE;break;default:this.state=kg.NONE}break;default:this.state=kg.NONE}this.state!==kg.NONE&&this.dispatchEvent(Sg)}function Bg(e){switch(this._trackPointer(e),this.state){case kg.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case kg.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case kg.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case kg.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=kg.NONE}}function Vg(e){this.enabled!==!1&&e.preventDefault()}function Hg(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Ug(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Wg=new qa,Gg=new K,Kg=new K,qg=new Et,Jg={X:new K(1,0,0),Y:new K(0,1,0),Z:new K(0,0,1)},Yg={type:`change`},Xg={type:`mouseDown`,mode:null},Zg={type:`mouseUp`,mode:null},Qg={type:`objectChange`},$g=class extends $a{constructor(e,t=null){super(void 0,t);let n=new b_(this);this._root=n;let r=new x_;this._gizmo=r,n.add(r);let i=new S_;this._plane=i,n.add(i);let a=this;function o(e,t){let n=t;Object.defineProperty(a,e,{get:function(){return n===void 0?t:n},set:function(t){n!==t&&(n=t,i[e]=t,r[e]=t,a.dispatchEvent({type:e+`-changed`,value:t}),a.dispatchEvent(Yg))}}),a[e]=t,i[e]=t,r[e]=t}o(`camera`,e),o(`object`,void 0),o(`enabled`,!0),o(`axis`,null),o(`mode`,`translate`),o(`translationSnap`,null),o(`rotationSnap`,null),o(`scaleSnap`,null),o(`space`,`world`),o(`size`,1),this.viewport=null,o(`dragging`,!1),o(`showX`,!0),o(`showY`,!0),o(`showZ`,!0),o(`showXY`,!0),o(`showYZ`,!0),o(`showXZ`,!0),o(`showXYZE`,!0),o(`showE`,!0),o(`minX`,-1/0),o(`maxX`,1/0),o(`minY`,-1/0),o(`maxY`,1/0),o(`minZ`,-1/0),o(`maxZ`,1/0);let s=new K,c=new K,l=new Et,u=new Et,d=new K,f=new Et,p=new K,m=new K,h=new K,g=new K;o(`worldPosition`,s),o(`worldPositionStart`,c),o(`worldQuaternion`,l),o(`worldQuaternionStart`,u),o(`cameraPosition`,d),o(`cameraQuaternion`,f),o(`pointStart`,p),o(`pointEnd`,m),o(`rotationAxis`,h),o(`rotationAngle`,0),o(`eye`,g),this._offset=new K,this._startNorm=new K,this._endNorm=new K,this._cameraScale=new K,this._parentPosition=new K,this._parentQuaternion=new Et,this._parentQuaternionInv=new Et,this._parentScale=new K,this._worldScaleStart=new K,this._worldQuaternionInv=new Et,this._worldScale=new K,this._positionStart=new K,this._quaternionStart=new Et,this._scaleStart=new K,this._getPointer=e_.bind(this),this._onPointerDown=n_.bind(this),this._onPointerHover=t_.bind(this),this._onPointerMove=r_.bind(this),this._onPointerUp=i_.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointermove`,this._onPointerHover),this.domElement.addEventListener(`pointerup`,this._onPointerUp),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerHover),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.style.touchAction=``}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Wg.setFromCamera(e,this.camera);let t=a_(this._gizmo.picker[this.mode],Wg);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Wg.setFromCamera(e,this.camera);let t=a_(this._plane,Wg,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Xg.mode=this.mode,this.dispatchEvent(Xg)}}pointerMove(e){let t=this.axis,n=this.mode,r=this.object,i=this.space;if(n===`scale`?i=`local`:(t===`E`||t===`XYZE`||t===`XYZ`)&&(i=`world`),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Wg.setFromCamera(e,this.camera);let a=a_(this._plane,Wg,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n===`translate`)this._offset.copy(this.pointEnd).sub(this.pointStart),i===`local`&&t!==`XYZ`&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf(`X`)===-1&&(this._offset.x=0),t.indexOf(`Y`)===-1&&(this._offset.y=0),t.indexOf(`Z`)===-1&&(this._offset.z=0),i===`local`&&t!==`XYZ`?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(i===`local`&&(r.position.applyQuaternion(qg.copy(this._quaternionStart).invert()),t.search(`X`)!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search(`Y`)!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search(`Z`)!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),i===`world`&&(r.getWorldPosition(Gg),t.search(`X`)!==-1&&(Gg.x=Math.round(Gg.x/this.translationSnap)*this.translationSnap),t.search(`Y`)!==-1&&(Gg.y=Math.round(Gg.y/this.translationSnap)*this.translationSnap),t.search(`Z`)!==-1&&(Gg.z=Math.round(Gg.z/this.translationSnap)*this.translationSnap),r.position.copy(r.parent.worldToLocal(Gg)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(n===`scale`){if(t.search(`XYZ`)!==-1){let e=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(e*=-1),Kg.set(e,e,e)}else Gg.copy(this.pointStart),Kg.copy(this.pointEnd),Gg.applyQuaternion(this._worldQuaternionInv),Kg.applyQuaternion(this._worldQuaternionInv),Kg.divide(Gg),t.search(`X`)===-1&&(Kg.x=1),t.search(`Y`)===-1&&(Kg.y=1),t.search(`Z`)===-1&&(Kg.z=1);r.scale.copy(this._scaleStart).multiply(Kg),this.scaleSnap&&(t.search(`X`)!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search(`Y`)!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search(`Z`)!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n===`rotate`){this._offset.copy(this.pointEnd).sub(this.pointStart);let e=20/this.worldPosition.distanceTo(Gg.setFromMatrixPosition(this.camera.matrixWorld)),n=!1;t===`XYZE`?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Gg.copy(this.rotationAxis).cross(this.eye))*e):(t===`X`||t===`Y`||t===`Z`)&&(this.rotationAxis.copy(Jg[t]),Gg.copy(Jg[t]),i===`local`&&Gg.applyQuaternion(this.worldQuaternion),Gg.cross(this.eye),Gg.length()===0?n=!0:this.rotationAngle=this._offset.dot(Gg.normalize())*e),(t===`E`||n)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),i===`local`&&t!==`E`&&t!==`XYZE`?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(qg.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(qg.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Yg),this.dispatchEvent(Qg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Zg.mode=this.mode,this.dispatchEvent(Zg)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Yg),this.dispatchEvent(Qg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Wg}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,r){let i=this._gizmo.materialLib;i.xAxis.color.set(e),i.yAxis.color.set(t),i.zAxis.color.set(n),i.active.color.set(r),i.xAxisTransparent.color.set(e),i.yAxisTransparent.color.set(t),i.zAxisTransparent.color.set(n),i.activeTransparent.color.set(r),i.xAxis._color&&i.xAxis._color.set(e),i.yAxis._color&&i.yAxis._color.set(t),i.zAxis._color&&i.zAxis._color.set(n),i.active._color&&i.active._color.set(r),i.xAxisTransparent._color&&i.xAxisTransparent._color.set(e),i.yAxisTransparent._color&&i.yAxisTransparent._color.set(t),i.zAxisTransparent._color&&i.zAxisTransparent._color.set(n),i.activeTransparent._color&&i.activeTransparent._color.set(r)}};function e_(e){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:e.button};{let t=this.domElement.getBoundingClientRect(),n=this.viewport,r,i,a,o;return n===null?(r=0,i=0,a=t.width,o=t.height):(r=n.x,i=t.height-n.y-n.w,a=n.z,o=n.w),{x:(e.clientX-t.left-r)/a*2-1,y:-(e.clientY-t.top-i)/o*2+1,button:e.button}}}function t_(e){if(this.enabled)switch(e.pointerType){case`mouse`:case`pen`:this.pointerHover(this._getPointer(e));break}}function n_(e){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.pointerHover(this._getPointer(e)),this.pointerDown(this._getPointer(e)))}function r_(e){this.enabled&&this.pointerMove(this._getPointer(e))}function i_(e){this.enabled&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.pointerUp(this._getPointer(e)))}function a_(e,t,n){let r=t.intersectObject(e,!0);for(let e=0;e<r.length;e++)if(r[e].object.visible||n)return r[e];return!1}var o_=new sn,s_=new K(0,1,0),c_=new K(0,0,0),l_=new Xt,u_=new Et,d_=new Et,f_=new K,p_=new Xt,m_=new K(1,0,0),h_=new K(0,1,0),g_=new K(0,0,1),__=new K,v_=new K,y_=new K,b_=class extends wn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error(`TransformControls: The attached 3D object must be a part of the scene graph.`):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),this.parent&&(p_.copy(this.parent.matrixWorld).invert(),p_.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},x_=class extends wn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type=`TransformControlsGizmo`;let e=new zr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ci({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let r=t.clone();r.opacity=.5;let i=e.clone();i.color.setHex(16711680);let a=e.clone();a.color.setHex(65280);let o=e.clone();o.color.setHex(255);let s=e.clone();s.color.setHex(16711680),s.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let l=e.clone();l.color.setHex(255),l.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:i,yAxis:a,zAxis:o,active:f,xAxisTransparent:s,yAxisTransparent:c,zAxisTransparent:l,activeTransparent:d};let m=new X(0,.04,.1,12);m.translate(0,.05,0);let h=new Y(.08,.08,.08);h.translate(0,.04,0);let g=new Or;g.setAttribute(`position`,new gr([0,0,0,1,0,0],3));let _=new X(.0075,.0075,.5,3);_.translate(0,.25,0);function v(e,t){let n=new Ni(e,.0075,3,64,t*Math.PI*2);return n.rotateY(Math.PI/2),n.rotateX(Math.PI/2),n}function y(){let e=new Or;return e.setAttribute(`position`,new gr([0,0,0,1,1,1],3)),e}let b={X:[[new J(m,i),[.5,0,0],[0,0,-Math.PI/2]],[new J(m,i),[-.5,0,0],[0,0,Math.PI/2]],[new J(_,i),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new J(m,a),[0,.5,0]],[new J(m,a),[0,-.5,0],[Math.PI,0,0]],[new J(_,a)]],Z:[[new J(m,o),[0,0,.5],[Math.PI/2,0,0]],[new J(m,o),[0,0,-.5],[-Math.PI/2,0,0]],[new J(_,o),null,[Math.PI/2,0,0]]],XYZ:[[new J(new ki(.1,0),u),[0,0,0]]],XY:[[new J(new Y(.15,.15,.01),l),[.15,.15,0]]],YZ:[[new J(new Y(.15,.15,.01),s),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Y(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},x={X:[[new J(new X(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new J(new X(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new J(new X(.2,0,.6,4),n),[0,.3,0]],[new J(new X(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new J(new X(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new J(new X(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new J(new ki(.2,0),n)]],XY:[[new J(new Y(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new J(new Y(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Y(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},S={START:[[new J(new ki(.01,2),r),null,null,null,`helper`]],END:[[new J(new ki(.01,2),r),null,null,null,`helper`]],DELTA:[[new gi(y(),r),null,null,null,`helper`]],X:[[new gi(g,r),[-1e3,0,0],null,[1e6,1,1],`helper`]],Y:[[new gi(g,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],`helper`]],Z:[[new gi(g,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],`helper`]]},C={XYZE:[[new J(v(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new J(v(.5,.5),i)]],Y:[[new J(v(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new J(v(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new J(v(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new gi(g,r),[-1e3,0,0],null,[1e6,1,1],`helper`]]},T={XYZE:[[new J(new Mi(.25,10,8),n)]],X:[[new J(new Ni(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new J(new Ni(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new J(new Ni(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new J(new Ni(.75,.1,2,24),n)]]},E={X:[[new J(h,i),[.5,0,0],[0,0,-Math.PI/2]],[new J(_,i),[0,0,0],[0,0,-Math.PI/2]],[new J(h,i),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new J(h,a),[0,.5,0]],[new J(_,a)],[new J(h,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new J(h,o),[0,0,.5],[Math.PI/2,0,0]],[new J(_,o),[0,0,0],[Math.PI/2,0,0]],[new J(h,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new J(new Y(.15,.15,.01),l),[.15,.15,0]]],YZ:[[new J(new Y(.15,.15,.01),s),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Y(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new J(new Y(.1,.1,.1),u)]]},D={X:[[new J(new X(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new J(new X(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new J(new X(.2,0,.6,4),n),[0,.3,0]],[new J(new X(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new J(new X(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new J(new X(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new J(new Y(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new J(new Y(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Y(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new J(new Y(.2,.2,.2),n),[0,0,0]]]},O={X:[[new gi(g,r),[-1e3,0,0],null,[1e6,1,1],`helper`]],Y:[[new gi(g,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],`helper`]],Z:[[new gi(g,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],`helper`]]};function k(e){let t=new wn;for(let n in e)for(let r=e[n].length;r--;){let i=e[n][r][0].clone(),a=e[n][r][1],o=e[n][r][2],s=e[n][r][3],c=e[n][r][4];i.name=n,i.tag=c,a&&i.position.set(a[0],a[1],a[2]),o&&i.rotation.set(o[0],o[1],o[2]),s&&i.scale.set(s[0],s[1],s[2]),i.updateMatrix();let l=i.geometry.clone();l.applyMatrix4(i.matrix),i.geometry=l,i.renderOrder=1/0,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),t.add(i)}return t}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=k(b)),this.add(this.gizmo.rotate=k(C)),this.add(this.gizmo.scale=k(E)),this.add(this.picker.translate=k(x)),this.add(this.picker.rotate=k(T)),this.add(this.picker.scale=k(D)),this.add(this.helper.translate=k(S)),this.add(this.helper.rotate=k(w)),this.add(this.helper.scale=k(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let t=(this.mode===`scale`?`local`:this.space)===`local`?this.worldQuaternion:d_;this.gizmo.translate.visible=this.mode===`translate`,this.gizmo.rotate.visible=this.mode===`rotate`,this.gizmo.scale.visible=this.mode===`scale`,this.helper.translate.visible=this.mode===`translate`,this.helper.rotate.visible=this.mode===`rotate`,this.helper.scale.visible=this.mode===`scale`;let n=[];n=n.concat(this.picker[this.mode].children),n=n.concat(this.gizmo[this.mode].children),n=n.concat(this.helper[this.mode].children);for(let e=0;e<n.length;e++){let r=n[e];r.visible=!0,r.rotation.set(0,0,0),r.position.copy(this.worldPosition);let i;if(i=this.camera.isOrthographicCamera?(this.camera.top-this.camera.bottom)/this.camera.zoom:this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),r.scale.set(1,1,1).multiplyScalar(i*this.size/4),r.tag===`helper`){r.visible=!1,r.name===`AXIS`?(r.visible=!!this.axis,this.axis===`X`&&(qg.setFromEuler(o_.set(0,0,0)),r.quaternion.copy(t).multiply(qg),Math.abs(s_.copy(m_).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`Y`&&(qg.setFromEuler(o_.set(0,0,Math.PI/2)),r.quaternion.copy(t).multiply(qg),Math.abs(s_.copy(h_).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`Z`&&(qg.setFromEuler(o_.set(0,Math.PI/2,0)),r.quaternion.copy(t).multiply(qg),Math.abs(s_.copy(g_).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`XYZE`&&(qg.setFromEuler(o_.set(0,Math.PI/2,0)),s_.copy(this.rotationAxis),r.quaternion.setFromRotationMatrix(l_.lookAt(c_,s_,h_)),r.quaternion.multiply(qg),r.visible=this.dragging),this.axis===`E`&&(r.visible=!1)):r.name===`START`?(r.position.copy(this.worldPositionStart),r.visible=this.dragging):r.name===`END`?(r.position.copy(this.worldPosition),r.visible=this.dragging):r.name===`DELTA`?(r.position.copy(this.worldPositionStart),r.quaternion.copy(this.worldQuaternionStart),Gg.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Gg.applyQuaternion(this.worldQuaternionStart.clone().invert()),r.scale.copy(Gg),r.visible=this.dragging):(r.quaternion.copy(t),this.dragging?r.position.copy(this.worldPositionStart):r.position.copy(this.worldPosition),this.axis&&(r.visible=this.axis.search(r.name)!==-1));continue}if(r.quaternion.copy(t),this.mode===`translate`||this.mode===`scale`){let e=.99,n=.2;r.name===`X`&&Math.abs(s_.copy(m_).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`Y`&&Math.abs(s_.copy(h_).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`Z`&&Math.abs(s_.copy(g_).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`XY`&&Math.abs(s_.copy(g_).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`YZ`&&Math.abs(s_.copy(m_).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`XZ`&&Math.abs(s_.copy(h_).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1)}else this.mode===`rotate`&&(u_.copy(t),s_.copy(this.eye).applyQuaternion(qg.copy(t).invert()),r.name.search(`E`)!==-1&&r.quaternion.setFromRotationMatrix(l_.lookAt(this.eye,c_,h_)),r.name===`X`&&(qg.setFromAxisAngle(m_,Math.atan2(-s_.y,s_.z)),qg.multiplyQuaternions(u_,qg),r.quaternion.copy(qg)),r.name===`Y`&&(qg.setFromAxisAngle(h_,Math.atan2(s_.x,s_.z)),qg.multiplyQuaternions(u_,qg),r.quaternion.copy(qg)),r.name===`Z`&&(qg.setFromAxisAngle(g_,Math.atan2(s_.y,s_.x)),qg.multiplyQuaternions(u_,qg),r.quaternion.copy(qg)));r.visible=r.visible&&(r.name.indexOf(`X`)===-1||this.showX),r.visible=r.visible&&(r.name.indexOf(`Y`)===-1||this.showY),r.visible=r.visible&&(r.name.indexOf(`Z`)===-1||this.showZ),r.visible=r.visible&&(r.name.indexOf(`E`)===-1||this.showX&&this.showY&&this.showZ),r.visible=r.visible&&(r.name.indexOf(`XY`)===-1||this.showXY),r.visible=r.visible&&(r.name.indexOf(`YZ`)===-1||this.showYZ),r.visible=r.visible&&(r.name.indexOf(`XZ`)===-1||this.showXZ),r.visible=r.visible&&(r.name!==`E`||this.showE),r.visible=r.visible&&(r.name!==`XYZE`||this.showXYZE),r.material._color=r.material._color||r.material.color.clone(),r.material._opacity=r.material._opacity||r.material.opacity,r.material.color.copy(r.material._color),r.material.opacity=r.material._opacity,this.enabled&&this.axis&&(r.name===this.axis||this.axis.split(``).some(function(e){return r.name===e}))&&(r.material.color.copy(this.materialLib.active.color),r.material.opacity=1)}super.updateMatrixWorld(e)}},S_=class extends J{constructor(){super(new Ai(1e5,1e5,2,2),new zr({visible:!1,wireframe:!0,side:2,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type=`TransformControlsPlane`}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode===`scale`&&(t=`local`),__.copy(m_).applyQuaternion(t===`local`?this.worldQuaternion:d_),v_.copy(h_).applyQuaternion(t===`local`?this.worldQuaternion:d_),y_.copy(g_).applyQuaternion(t===`local`?this.worldQuaternion:d_),s_.copy(v_),this.mode){case`translate`:case`scale`:switch(this.axis){case`X`:s_.copy(this.eye).cross(__),f_.copy(__).cross(s_);break;case`Y`:s_.copy(this.eye).cross(v_),f_.copy(v_).cross(s_);break;case`Z`:s_.copy(this.eye).cross(y_),f_.copy(y_).cross(s_);break;case`XY`:f_.copy(y_);break;case`YZ`:f_.copy(__);break;case`XZ`:s_.copy(y_),f_.copy(v_);break;case`XYZ`:case`E`:f_.set(0,0,0);break}break;default:f_.set(0,0,0)}f_.length()===0?this.quaternion.copy(this.cameraQuaternion):(p_.lookAt(Gg.set(0,0,0),f_,s_),this.quaternion.setFromRotationMatrix(p_)),super.updateMatrixWorld(e)}},C_=.1,w_=2764600,T_=3817544,E_=class{container;canvas;renderer;scene;camera;orbit;transform;gizmoProxy;unitCubeGeometry;groundPlane;raycaster=new qa;pointer=new G;map;blockGroup;blockMeshes=[];propGroup;tool=`wall`;gizmoMode=`move`;selectedIndex=null;createDrag=null;previewMesh=null;wallColor=zh;slabColor=Vh;onSelect=null;onBlocksChanged=null;onPropPlaced=null;raf=0;constructor(n,r){this.container=n,this.map=r,this.canvas=document.createElement(`canvas`),this.canvas.id=`ed3d-canvas`,n.appendChild(this.canvas),this.renderer=new yl({canvas:this.canvas,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1.2,this.scene=new Pn,this.scene.background=new jn(790291),this.scene.add(new ka(16777215,1.1));let i=new la(14673648,1711394,1);this.scene.add(i);let a=new Oa(16777215,.9);a.position.set(30,50,20),this.scene.add(a),this.camera=new xa(60,1,.1,500),this.blockGroup=new q,this.propGroup=new q,this.scene.add(this.blockGroup,this.propGroup),this.orbit=new jg(this.camera,this.canvas),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.12,this.orbit.maxPolarAngle=Math.PI*.49,this.orbit.minDistance=3,this.orbit.maxDistance=400,this.orbit.mouseButtons={LEFT:null,MIDDLE:e.DOLLY,RIGHT:e.ROTATE},this.orbit.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.transform=new $g(this.camera,this.canvas),this.transform.setSpace(`world`),this.scene.add(this.transform.getHelper()),this.transform.addEventListener(`dragging-changed`,e=>{this.orbit.enabled=!e.value}),this.transform.addEventListener(`objectChange`,()=>this.onGizmoChange()),this.unitCubeGeometry=new Y(1,1,1).translate(.5,.5,.5),this.gizmoProxy=new wn,this.groundPlane=new J(new Ai(1,1),new Z({color:w_,roughness:1})),this.groundPlane.rotation.x=-Math.PI/2,this.scene.add(this.groundPlane),this.wireEvents(),this.frameCamera(),this.rebuildAll(),this.animate()}onSelectionChange(e){this.onSelect=e}onChange(e){this.onBlocksChanged=e}onPlaceProp(e){this.onPropPlaced=e}setTool(e){this.tool=e,this.select(null)}setBlockColors(e,t){this.wallColor=e,this.slabColor=t}setGizmoMode(e){this.gizmoMode=e,this.selectedIndex!==null&&this.transform.object&&this.attachGizmo(this.selectedIndex)}setMap(e){this.map=e,this.select(null),this.frameCamera(),this.rebuildAll()}select(e,t=!1){this.selectedIndex=e,e===null||!t?this.transform.detach():this.attachGizmo(e),this.highlightSelection(),this.onSelect?.(e)}refreshSelected(){this.selectedIndex!==null&&(this.rebuildBlockMesh(this.selectedIndex),this.transform.object&&this.attachGizmo(this.selectedIndex),this.highlightSelection())}resize(){let e=this.container.clientWidth,t=this.container.clientHeight;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t))}dispose(){cancelAnimationFrame(this.raf),this.transform.dispose(),this.orbit.dispose(),this.renderer.dispose(),this.canvas.remove()}worldBox(e){let t=-(this.map.cols*this.map.cell)/2,n=-(this.map.rows*this.map.cell)/2;return{minX:t+e.c0*this.map.cell,maxX:t+(e.c1+1)*this.map.cell,minZ:n+e.r0*this.map.cell,maxZ:n+(e.r1+1)*this.map.cell,baseY:e.baseY,topY:e.topY}}worldToCell(e,t){let n=-(this.map.cols*this.map.cell)/2,r=-(this.map.rows*this.map.cell)/2;return{c:Math.floor((e-n)/this.map.cell),r:Math.floor((t-r)/this.map.cell)}}frameCamera(){let e=this.map.cols*this.map.cell,t=this.map.rows*this.map.cell,n=Math.max(e,t);this.camera.position.set(n*.32,n*.34,n*.32),this.orbit.target.set(0,n*.06,0),this.orbit.update(),this.groundPlane.scale.set(e+4,t+4,1),this.scene.remove(this.scene.getObjectByName(`ed3d-grid`));let r=new Qa(Math.max(e,t),Math.max(this.map.cols,this.map.rows),T_,T_);r.name=`ed3d-grid`,r.position.y=.01,this.scene.add(r)}rebuildAll(){for(let e of this.blockMeshes)this.blockGroup.remove(e);this.blockMeshes=[],this.map.blocks.forEach((e,t)=>this.rebuildBlockMesh(t))}rebuildBlockMesh(e){let t=this.map.blocks[e],n=this.blockMeshes[e];n||(n=new J(this.unitCubeGeometry,new Z({roughness:.8,metalness:.08})),n.castShadow=!0,n.userData.blockIndex=e,this.blockGroup.add(n),this.blockMeshes[e]=n);let r=this.worldBox(t);n.position.set(r.minX,r.baseY,r.minZ),n.scale.set(r.maxX-r.minX,Math.max(C_,r.topY-r.baseY),r.maxZ-r.minZ),n.material.color.setHex(t.color),n.material.transparent=!1,n.userData.blockIndex=e,n.userData.kind=t.kind}highlightSelection(){this.blockMeshes.forEach((e,t)=>{e.material.emissive.setHex(t===this.selectedIndex?5586965:0)})}attachGizmo(e){let t=this.map.blocks[e],n=this.worldBox(t);this.gizmoProxy.position.set(n.minX,n.baseY,n.minZ),this.gizmoProxy.scale.set(n.maxX-n.minX,Math.max(C_,n.topY-n.baseY),n.maxZ-n.minZ),this.gizmoProxy.parent||this.scene.add(this.gizmoProxy),this.transform.attach(this.gizmoProxy),this.transform.setMode(this.gizmoMode===`move`?`translate`:`scale`)}onGizmoChange(){if(this.selectedIndex===null)return;let e=this.map.blocks[this.selectedIndex],t=this.map.cell;if(this.gizmoMode===`move`){let n=(e.c1-e.c0+1)*t,r=(e.r1-e.r0+1)*t,i=-(this.map.cols*t)/2,a=-(this.map.rows*t)/2,o=Math.round((this.gizmoProxy.position.x-i)/t),s=Math.round((this.gizmoProxy.position.z-a)/t),c=e.topY-e.baseY;e.c0=o,e.r0=s,e.c1=o+Math.round(n/t)-1,e.r1=s+Math.round(r/t)-1,e.baseY=this.gizmoProxy.position.y,e.topY=e.baseY+c}else{let n=-(this.map.cols*t)/2,r=-(this.map.rows*t)/2,i=Math.max(1,Math.round(this.gizmoProxy.scale.x/t)),a=Math.max(1,Math.round(this.gizmoProxy.scale.z/t)),o=Math.round((this.gizmoProxy.position.x-n)/t),s=Math.round((this.gizmoProxy.position.z-r)/t);e.c0=o,e.r0=s,e.c1=o+i-1,e.r1=s+a-1,e.baseY=this.gizmoProxy.position.y,e.topY=e.baseY+Math.max(C_,this.gizmoProxy.scale.y)}this.rebuildBlockMesh(this.selectedIndex);let n=this.worldBox(e);this.gizmoProxy.position.set(n.minX,n.baseY,n.minZ),this.gizmoProxy.scale.set(n.maxX-n.minX,n.topY-n.baseY,n.maxZ-n.minZ),this.onBlocksChanged?.()}wireEvents(){this.canvas.addEventListener(`contextmenu`,e=>e.preventDefault()),this.canvas.addEventListener(`pointerdown`,e=>this.onPointerDown(e)),window.addEventListener(`pointermove`,e=>this.onPointerMove(e)),window.addEventListener(`pointerup`,()=>this.onPointerUp())}castFromEvent(e){let t=this.canvas.getBoundingClientRect();return this.pointer.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster}onPointerDown(e){if(e.button!==0||this.transform.dragging)return;let t=this.castFromEvent(e);if(e.shiftKey){let e=t.intersectObjects(this.blockMeshes,!1)[0];e&&this.select(e.object.userData.blockIndex,!0);return}if(this.selectedIndex!==null&&this.select(null),this.tool===`erase`){let e=t.intersectObjects(this.blockMeshes,!1)[0];if(!e)return;let n=e.object.userData.blockIndex;this.map.blocks.splice(n,1),this.rebuildAll(),this.onBlocksChanged?.();return}if(this.tool===`wall`||this.tool===`slab`){this.beginCreateDrag(t);return}let n=this.raySurfaceHit(t);n&&this.onPropPlaced?.(n.c,n.r)}onPointerMove(e){if(!this.createDrag)return;let t=this.castFromEvent(e),n=new ri(new K(0,1,0),-this.createDrag.planeY),r=new K;t.ray.intersectPlane(n,r)&&this.updateCreatePreview(r.x,r.z)}onPointerUp(){this.createDrag&&this.finishCreateDrag()}raySurfaceHit(e){let t=e.intersectObjects([...this.blockMeshes,this.groundPlane],!1);if(t.length===0)return null;let n=t[0],r=this.worldToCell(n.point.x,n.point.z);return r.c<0||r.c>=this.map.cols||r.r<0||r.r>=this.map.rows?null:{...r,y:n.point.y}}beginCreateDrag(e){let t=this.raySurfaceHit(e);if(!t)return;let n=Yh(this.map,t.c,t.r);this.createDrag={startX:n.x,startZ:n.z,planeY:t.y,baseY:t.y},this.updateCreatePreview(n.x,n.z)}updateCreatePreview(e,t){if(!this.createDrag)return;let n=this.worldToCell(this.createDrag.startX,this.createDrag.startZ),r=this.worldToCell(e,t),i=Math.min(n.c,r.c),a=Math.max(n.c,r.c),o=Math.min(n.r,r.r),s=Math.max(n.r,r.r),c=this.tool===`wall`?`wall`:`slab`,l=c===`wall`?Rh:2,u=c===`wall`?this.createDrag.baseY:this.createDrag.baseY+2-Bh,d=c===`wall`?this.createDrag.baseY+l:this.createDrag.baseY+2;this.previewMesh||(this.previewMesh=new J(this.unitCubeGeometry,new Z({color:16765276,transparent:!0,opacity:.45})),this.scene.add(this.previewMesh));let f=this.worldBox({kind:c,c0:i,r0:o,c1:a,r1:s,baseY:u,topY:d,color:0});this.previewMesh.position.set(f.minX,f.baseY,f.minZ),this.previewMesh.scale.set(f.maxX-f.minX,Math.max(C_,f.topY-f.baseY),f.maxZ-f.minZ),this.previewMesh.userData.footprint={c0:i,r0:o,c1:a,r1:s,baseY:u,topY:d}}finishCreateDrag(){let e=this.previewMesh?.userData.footprint;if(this.previewMesh&&=(this.scene.remove(this.previewMesh),null),this.createDrag=null,!e)return;let t=this.tool===`wall`?`wall`:`slab`,n={kind:t,...e,color:t===`wall`?this.wallColor:this.slabColor};this.map.blocks.push(n),this.rebuildBlockMesh(this.map.blocks.length-1),this.onBlocksChanged?.(),this.select(this.map.blocks.length-1)}animate=()=>{this.raf=requestAnimationFrame(this.animate),this.orbit.update(),this.renderer.render(this.scene,this.camera)}},D_=[{title:`Bloques`,tools:[{tool:`wall`,label:`Muro`,color:`#8a909a`},{tool:`slab`,label:`Losa / Plataforma`,color:`#5f7fa8`},{tool:`erase`,label:`Borrar`,color:`#40444c`}]},{title:`Puntos`,tools:[{tool:`start`,label:`Inicio jugador`,color:`#3aa0ff`},{tool:`spawn`,label:`Spawn zombis`,color:`#3ad07a`}]},{title:`Estructura`,tools:[{tool:`doorframe`,label:`Marco de puerta`,color:`#b0b7c2`},{tool:`stairs`,label:`Escalera`,color:`#7f96b5`},{tool:`beam`,label:`Viga / trabe`,color:`#6b7280`}]},{title:`Pilares`,tools:[{tool:`pillar`,label:`Pilar cuadrado`,color:`#c0c4cc`},{tool:`pillarRound`,label:`Pilar redondo`,color:`#aab2be`},{tool:`pillarNeon`,label:`Pilar de neón`,color:`#38e6ff`},{tool:`pillarTruss`,label:`Celosía`,color:`#8f98a5`}]},{title:`Objetos`,tools:[{tool:`reactor`,label:`Reactor`,color:`#2fd8ff`},{tool:`tank`,label:`Tanque`,color:`#8a7a52`},{tool:`crate`,label:`Caja`,color:`#b98b45`},{tool:`console`,label:`Consola`,color:`#4aa6c0`}]}],O_=D_.flatMap(e=>e.tools),k_={reactor:`R`,tank:`T`,crate:`C`,console:`▭`,pillar:`■`,pillarRound:`●`,pillarNeon:`◈`,pillarTruss:`▩`,doorframe:`⌐`,beam:`═`,stairs:`≡`},A_={reactor:`#2fd8ff`,tank:`#8a7a52`,crate:`#b98b45`,console:`#4aa6c0`,pillar:`#c0c4cc`,pillarRound:`#aab2be`,pillarNeon:`#38e6ff`,pillarTruss:`#8f98a5`,doorframe:`#b0b7c2`,beam:`#6b7280`,stairs:`#7f96b5`},j_=720,M_=[24,32,40,56,72],N_=[[1,0],[-1,0],[0,1],[0,-1]],P_=j_,F_=190,I_=-4,L_=9,R_=.1;function z_(e){return e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}function B_(e){return`#${e.toString(16).padStart(6,`0`)}`}function V_(e){return e.map(([e,t])=>`<option value="${e}">${z_(t)}</option>`).join(``)}var H_=class{root;canvas;ctx;sectionCanvas;sectionCtx;nameInput;themeSelect;sizeSelect;loadSelect;styleSelects;status;fileInput;cutRowLabel;wallColorInput;slabColorInput;blockEmpty;blockFields;blockColorInput;blockBaseInput;blockHeightInput;view3dContainer;view2dBtn;view3dBtn;gizmoMoveBtn;gizmoResizeBtn;editor3d=null;in3D=!1;map=Hh(`Mi mapa`);tool=`wall`;invalidSpawns=new Set;wallColor=zh;slabColor=Vh;dragStart=null;dragEnd=null;hover=null;selectedIndex=null;cutRow=0;sectionDrag=null;playHandler=null;exitHandler=null;constructor(e){this.root=document.createElement(`div`),this.root.id=`editor-root`,this.root.className=`hidden`,this.root.innerHTML=`
      <div id="editor-topbar">
        <span class="ed-brand">EDITOR</span>
        <input id="ed-name" type="text" maxlength="24" />
        <select id="ed-theme">
          <option value="reactor">Luz: Reactor</option>
          <option value="warehouse">Luz: Almacén</option>
          <option value="bright">Luz: Clara</option>
        </select>
        <select id="ed-size">${M_.map(e=>`<option value="${e}">${e}×${e}</option>`).join(``)}</select>
        <select id="ed-load"><option value="">Cargar mapa…</option></select>
        <div class="ed-spacer"></div>
        <span id="ed-status"></span>
        <button id="ed-new" class="ed-btn">Nuevo</button>
        <button id="ed-validate" class="ed-btn">Validar</button>
        <button id="ed-save" class="ed-btn">Guardar</button>
        <button id="ed-delete" class="ed-btn ed-btn-danger">Borrar mapa</button>
        <button id="ed-export" class="ed-btn">Exportar</button>
        <button id="ed-import" class="ed-btn">Importar</button>
        <button id="ed-play" class="ed-btn ed-btn-primary">▶ Probar</button>
        <button id="ed-exit" class="ed-btn">Volver</button>
        <input id="ed-file" type="file" accept=".json" />
      </div>
      <div id="editor-body">
        <div id="editor-tools"></div>
        <div id="editor-stage">
          <div id="editor-view-toggle">
            <button id="ed-view-2d" class="ed-view-btn selected">Vista 2D</button>
            <button id="ed-view-3d" class="ed-view-btn">Vista 3D</button>
            <span id="ed-3d-hint">Clic izq. dibuja · Mayús+clic izq. selecciona y mueve · clic derecho orbita · rueda = zoom</span>
          </div>
          <div id="editor-plan-row">
            <canvas id="ed-canvas" tabindex="0" width="${j_}" height="${j_}"></canvas>
            <div id="ed-color-tray">
              <label class="ed-field ed-color-field" id="ed-wallcolor-field">Color de muro
                <input type="color" id="ed-wall-color" value="${B_(zh)}" />
              </label>
              <label class="ed-field ed-color-field" id="ed-slabcolor-field">Color de losa
                <input type="color" id="ed-slab-color" value="${B_(Vh)}" />
              </label>
            </div>
          </div>
          <div id="editor-section-wrap">
            <div class="ed-section-label">Vista de corte — fila <span id="ed-cutrow-label">0</span></div>
            <canvas id="ed-section-canvas" width="${P_}" height="${F_}"></canvas>
          </div>
          <div id="editor-3d-container" class="hidden">
            <div id="ed-gizmo-mode">
              <button id="ed-gizmo-move" class="ed-btn selected">Mover</button>
              <button id="ed-gizmo-resize" class="ed-btn">Estirar</button>
            </div>
          </div>
        </div>
        <div id="editor-side">
          <div class="ed-panel" id="ed-block-panel">
            <h3>Bloque seleccionado</h3>
            <div id="ed-block-empty">Dibuja o haz clic en un muro/losa.</div>
            <div id="ed-block-fields" class="hidden">
              <label class="ed-field">Color
                <input type="color" id="ed-block-color" />
              </label>
              <label class="ed-field">Base (m)
                <input type="number" id="ed-block-base" step="0.1" />
              </label>
              <label class="ed-field">Altura (m)
                <input type="number" id="ed-block-height" step="0.1" min="${R_}" />
              </label>
              <button id="ed-block-delete" class="ed-btn ed-btn-danger">Borrar este bloque</button>
            </div>
          </div>
          <div class="ed-panel">
            <h3>Mapa</h3>
            <label class="ed-field">Suelo
              <select id="ed-floor">${V_(Object.entries(cg).map(([e,t])=>[e,t.label]))}</select>
            </label>
            <label class="ed-field">Techo
              <select id="ed-ceiling">${V_(Object.entries(lg).map(([e,t])=>[e,t.label]))}</select>
            </label>
          </div>
          <div class="ed-panel">
            <h3>Cómo se usa</h3>
            <ul>
              <li><b>Muro / Losa</b>: arrastra para dibujar el pie; suelta para crear el bloque.</li>
              <li><b>Clic</b> sin arrastrar sobre un bloque existente lo selecciona.</li>
              <li>Con el bloque seleccionado, ajusta <b>Base</b> y <b>Altura</b> a mano o arrastrando sus bordes en la <b>vista de corte</b> de abajo.</li>
              <li><b>Borrar</b>: arrastra sobre lo que quieras quitar (bloques, props, spawns).</li>
              <li><b>Teclas 1-9</b> cambian de herramienta.</li>
              <li><b>Marco de puerta</b>: dibuja dos muros con un hueco entre medio y ponlo ahí.</li>
              <li><b>Escalera</b> pegada a una losa más alta: es el único paso entre alturas, para ti y para la horda.</li>
              <li><b>Validar</b> marca en rojo spawns sin ruta.</li>
            </ul>
            <div id="editor-legend"></div>
          </div>
        </div>
      </div>
    `,e.appendChild(this.root),this.canvas=this.root.querySelector(`#ed-canvas`),this.ctx=this.canvas.getContext(`2d`),this.sectionCanvas=this.root.querySelector(`#ed-section-canvas`),this.sectionCtx=this.sectionCanvas.getContext(`2d`),this.nameInput=this.root.querySelector(`#ed-name`),this.themeSelect=this.root.querySelector(`#ed-theme`),this.sizeSelect=this.root.querySelector(`#ed-size`),this.loadSelect=this.root.querySelector(`#ed-load`),this.status=this.root.querySelector(`#ed-status`),this.fileInput=this.root.querySelector(`#ed-file`),this.cutRowLabel=this.root.querySelector(`#ed-cutrow-label`),this.wallColorInput=this.root.querySelector(`#ed-wall-color`),this.slabColorInput=this.root.querySelector(`#ed-slab-color`),this.blockEmpty=this.root.querySelector(`#ed-block-empty`),this.blockFields=this.root.querySelector(`#ed-block-fields`),this.blockColorInput=this.root.querySelector(`#ed-block-color`),this.blockBaseInput=this.root.querySelector(`#ed-block-base`),this.blockHeightInput=this.root.querySelector(`#ed-block-height`),this.view3dContainer=this.root.querySelector(`#editor-3d-container`),this.view2dBtn=this.root.querySelector(`#ed-view-2d`),this.view3dBtn=this.root.querySelector(`#ed-view-3d`),this.gizmoMoveBtn=this.root.querySelector(`#ed-gizmo-move`),this.gizmoResizeBtn=this.root.querySelector(`#ed-gizmo-resize`),this.styleSelects={floor:this.root.querySelector(`#ed-floor`),ceiling:this.root.querySelector(`#ed-ceiling`)},this.buildTools(),this.buildLegend(),this.wireEvents(),this.syncControls(),this.updateColorTray(),this.render(),this.renderSection()}onPlay(e){this.playHandler=e}onExit(e){this.exitHandler=e}show(){this.refreshLoadList(),this.root.classList.remove(`hidden`),this.render(),this.renderSection(),this.in3D&&requestAnimationFrame(()=>this.editor3d?.resize())}hide(){this.root.classList.add(`hidden`)}get visible(){return!this.root.classList.contains(`hidden`)}buildTools(){let e=this.root.querySelector(`#editor-tools`),t=0;e.innerHTML=D_.map(e=>{let n=e.tools.map(e=>{t++;let n=t<=9?`<span class="ed-key">${t}</span>`:``;return`<button class="ed-tool" data-tool="${e.tool}"><span class="ed-swatch" style="background:${e.color}"></span><span class="ed-tool-label">${e.label}</span>${n}</button>`}).join(``);return`<div class="ed-tool-group"><h4>${e.title}</h4>${n}</div>`}).join(``),e.querySelectorAll(`.ed-tool`).forEach(e=>{e.addEventListener(`click`,()=>{this.tool=e.dataset.tool,this.updateToolSelection(),this.updateColorTray(),this.editor3d?.setTool(this.tool)})}),this.updateToolSelection()}buildLegend(){let e=this.root.querySelector(`#editor-legend`);e.innerHTML=`
      <div><span class="ed-swatch" style="background:#3aa0ff"></span>Inicio del jugador</div>
      <div><span class="ed-swatch" style="background:#3ad07a"></span>Spawn de zombis</div>
      <div><span class="ed-swatch" style="background:#e5484d"></span>Spawn sin ruta (arréglalo)</div>
    `}updateToolSelection(){this.root.querySelectorAll(`.ed-tool`).forEach(e=>{e.classList.toggle(`selected`,e.dataset.tool===this.tool)})}updateColorTray(){let e=this.root.querySelector(`#ed-wallcolor-field`),t=this.root.querySelector(`#ed-slabcolor-field`);e.classList.toggle(`hidden`,this.tool!==`wall`),t.classList.toggle(`hidden`,this.tool!==`slab`)}wireEvents(){this.nameInput.addEventListener(`input`,()=>{this.map.name=this.nameInput.value.trim()||`Mi mapa`}),this.themeSelect.addEventListener(`change`,()=>{this.map.theme=this.themeSelect.value}),this.sizeSelect.addEventListener(`change`,()=>{this.resizeGrid(Number(this.sizeSelect.value))});for(let e of Object.keys(this.styleSelects)){let t=this.styleSelects[e];t.addEventListener(`change`,()=>{this.map.style={...this.map.style,[e]:t.value},this.setStatus(`Estilo actualizado — pruébalo para verlo.`)})}this.wallColorInput.addEventListener(`input`,()=>{this.wallColor=Number.parseInt(this.wallColorInput.value.slice(1),16),this.editor3d?.setBlockColors(this.wallColor,this.slabColor)}),this.slabColorInput.addEventListener(`input`,()=>{this.slabColor=Number.parseInt(this.slabColorInput.value.slice(1),16),this.editor3d?.setBlockColors(this.wallColor,this.slabColor)}),this.loadSelect.addEventListener(`change`,()=>{let e=this.loadSelect.value;if(!e)return;let t=$h(e);t&&(this.map=t,this.invalidSpawns.clear(),this.selectedIndex=null,this.syncControls(),this.editor3d?.setMap(this.map),this.setStatus(`Cargado "${e}".`),this.render(),this.renderSection()),this.loadSelect.value=``}),this.root.querySelector(`#ed-new`).addEventListener(`click`,()=>{this.map=Hh(`Mi mapa`,this.map.theme,this.map.cols,this.map.rows),this.selectedIndex=null,this.syncControls(),this.invalidSpawns.clear(),this.editor3d?.setMap(this.map),this.setStatus(`Mapa nuevo en blanco.`),this.render(),this.renderSection()}),this.root.querySelector(`#ed-validate`).addEventListener(`click`,()=>this.validate()),this.root.querySelector(`#ed-save`).addEventListener(`click`,()=>this.save()),this.root.querySelector(`#ed-delete`).addEventListener(`click`,()=>{let e=this.map.name;if(!Qh().includes(e)){this.setStatus(`Ese mapa no está guardado todavía.`,!0);return}window.confirm(`¿Borrar "${e}" definitivamente?`)&&(tg(e),this.refreshLoadList(),this.setStatus(`Borrado "${e}".`))}),this.root.querySelector(`#ed-export`).addEventListener(`click`,()=>ng(this.map)),this.root.querySelector(`#ed-import`).addEventListener(`click`,()=>this.fileInput.click()),this.fileInput.addEventListener(`change`,async()=>{let e=this.fileInput.files?.[0];if(e){try{this.map=await rg(e),this.invalidSpawns.clear(),this.selectedIndex=null,this.syncControls(),this.editor3d?.setMap(this.map),this.setStatus(`Importado "${this.map.name}".`),this.render(),this.renderSection()}catch{this.setStatus(`No se pudo importar el archivo.`,!0)}this.fileInput.value=``}}),this.root.querySelector(`#ed-play`).addEventListener(`click`,()=>this.play()),this.root.querySelector(`#ed-exit`).addEventListener(`click`,()=>this.exitHandler?.()),this.blockColorInput.addEventListener(`input`,()=>this.applySelectedField(`color`,Number.parseInt(this.blockColorInput.value.slice(1),16))),this.blockBaseInput.addEventListener(`input`,()=>this.applySelectedField(`baseY`,Number(this.blockBaseInput.value))),this.blockHeightInput.addEventListener(`input`,()=>this.applySelectedHeight(Number(this.blockHeightInput.value))),this.root.querySelector(`#ed-block-delete`).addEventListener(`click`,()=>{this.selectedIndex!==null&&(this.map.blocks.splice(this.selectedIndex,1),this.selectedIndex=null,this.updateBlockPanel(),this.editor3d?.setMap(this.map),this.render(),this.renderSection())}),this.wireCanvasEvents(),this.wireSectionEvents(),this.wireViewToggle(),window.addEventListener(`keydown`,e=>this.handleKey(e)),window.addEventListener(`resize`,()=>{this.in3D&&this.editor3d?.resize()})}wireViewToggle(){this.view2dBtn.addEventListener(`click`,()=>this.switchView(`2d`)),this.view3dBtn.addEventListener(`click`,()=>this.switchView(`3d`)),this.gizmoMoveBtn.addEventListener(`click`,()=>{this.editor3d?.setGizmoMode(`move`),this.gizmoMoveBtn.classList.add(`selected`),this.gizmoResizeBtn.classList.remove(`selected`)}),this.gizmoResizeBtn.addEventListener(`click`,()=>{this.editor3d?.setGizmoMode(`resize`),this.gizmoResizeBtn.classList.add(`selected`),this.gizmoMoveBtn.classList.remove(`selected`)})}switchView(e){if(this.in3D=e===`3d`,this.view2dBtn.classList.toggle(`selected`,e===`2d`),this.view3dBtn.classList.toggle(`selected`,e===`3d`),this.root.querySelector(`#editor-plan-row`).classList.toggle(`hidden`,this.in3D),this.root.querySelector(`#editor-section-wrap`).classList.toggle(`hidden`,this.in3D),this.view3dContainer.classList.toggle(`hidden`,!this.in3D),!this.in3D){this.render(),this.renderSection();return}this.editor3d||(this.editor3d=new E_(this.view3dContainer,this.map),this.editor3d.setBlockColors(this.wallColor,this.slabColor),this.editor3d.onSelectionChange(e=>{this.selectedIndex=e,this.updateBlockPanel()}),this.editor3d.onChange(()=>{this.render(),this.renderSection()}),this.editor3d.onPlaceProp((e,t)=>{this.placeProp(e,t),this.render()}),this.editor3d.setTool(this.tool)),requestAnimationFrame(()=>this.editor3d?.resize())}wireCanvasEvents(){this.canvas.addEventListener(`contextmenu`,e=>e.preventDefault()),this.canvas.addEventListener(`mousedown`,e=>{this.canvas.focus();let t=this.eventCell(e);if(t){if(this.tool===`wall`||this.tool===`slab`||this.tool===`erase`){this.dragStart=t,this.dragEnd=t,this.render();return}this.placeProp(t.c,t.r),this.render()}}),this.canvas.addEventListener(`mousemove`,e=>{this.hover=this.eventCell(e),this.hover&&(this.cutRow=this.hover.r,this.cutRowLabel.textContent=String(this.cutRow)),this.dragStart&&(this.dragEnd=this.hover??this.dragEnd),this.render(),this.dragStart&&this.renderSection()}),window.addEventListener(`mouseup`,()=>{this.dragStart&&this.dragEnd&&this.finishDrag(this.dragStart,this.dragEnd),this.dragStart=null,this.dragEnd=null,this.render(),this.renderSection()}),this.canvas.addEventListener(`mouseleave`,()=>{this.hover=null,this.render()})}wireSectionEvents(){this.sectionCanvas.addEventListener(`mousedown`,e=>{let t=this.sectionEventY(e);if(this.selectedIndex!==null){let e=this.map.blocks[this.selectedIndex],n=this.metresToPx(e.topY),r=this.metresToPx(e.baseY),i=`move`;Math.abs(t-n)<=7?i=`top`:Math.abs(t-r)<=7&&(i=`bottom`),this.sectionDrag={mode:i,startPy:t,baseY:e.baseY,topY:e.topY};return}let n=this.sectionEventX(e),r=this.pxToMetres(t),i=this.findBlockAtSection(n,r);i!==null&&(this.selectedIndex=i,this.updateBlockPanel(),this.render(),this.renderSection())}),window.addEventListener(`mousemove`,e=>{if(!this.sectionDrag||this.selectedIndex===null)return;let t=this.sectionEventY(e),n=this.pxToMetres(t)-this.pxToMetres(this.sectionDrag.startPy),r=this.map.blocks[this.selectedIndex];this.sectionDrag.mode===`top`?r.topY=Math.max(this.sectionDrag.baseY+R_,this.sectionDrag.topY+n):this.sectionDrag.mode===`bottom`?r.baseY=Math.min(this.sectionDrag.topY-R_,this.sectionDrag.baseY+n):(r.baseY=this.sectionDrag.baseY+n,r.topY=this.sectionDrag.topY+n),this.updateBlockPanel(),this.render(),this.renderSection()}),window.addEventListener(`mouseup`,()=>{this.sectionDrag=null})}handleKey(e){if(!this.visible)return;let t=e.target;if(t&&(t.tagName===`INPUT`||t.tagName===`SELECT`))return;if(e.key===`Escape`){this.exitHandler?.();return}if(e.ctrlKey&&e.key.toLowerCase()===`s`){e.preventDefault(),this.save();return}let n=Number(e.key);!Number.isInteger(n)||n<1||n>Math.min(9,O_.length)||(this.tool=O_[n-1].tool,this.updateToolSelection(),this.updateColorTray(),this.editor3d?.setTool(this.tool))}save(){eg(this.map),this.refreshLoadList(),this.setStatus(`Guardado "${this.map.name}".`)}computeGrids(){let{cols:e,rows:t}=this.map,n=new Float32Array(e*t),r=new Uint8Array(e*t),i=new Uint8Array(e*t);for(let a of this.map.blocks){let o=Math.max(0,a.c0),s=Math.min(e-1,a.c1),c=Math.max(0,a.r0),l=Math.min(t-1,a.r1);for(let t=c;t<=l;t++)for(let c=o;c<=s;c++){let o=t*e+c;a.kind===`wall`?i[o]=1:(!r[o]||a.topY>n[o])&&(r[o]=1,n[o]=a.topY)}}return{height:n,isWall:i}}heightAtCell(e,t,n){let{cols:r,rows:i}=this.map;return t<0||t>=r||n<0||n>=i?0:e.height[n*r+t]}isWallAtCell(e,t,n){let{cols:r,rows:i}=this.map;return t<0||t>=r||n<0||n>=i?!1:e.isWall[n*r+t]===1}findBlockAt(e,t,n){for(let r=this.map.blocks.length-1;r>=0;r--){let i=this.map.blocks[r];if(i.kind===n&&e>=i.c0&&e<=i.c1&&t>=i.r0&&t<=i.r1)return r}return null}findBlockAtSection(e,t){let n=-(this.map.cols*this.map.cell)/2;for(let r=this.map.blocks.length-1;r>=0;r--){let i=this.map.blocks[r];if(this.cutRow<i.r0||this.cutRow>i.r1)continue;let a=n+i.c0*this.map.cell,o=n+(i.c1+1)*this.map.cell;if(!(e<a||e>o)&&!(t<i.baseY||t>i.topY))return r}return null}finishDrag(e,t){let n=Math.min(e.c,t.c),r=Math.max(e.c,t.c),i=Math.min(e.r,t.r),a=Math.max(e.r,t.r),o=e.c===t.c&&e.r===t.r;if(this.tool===`erase`){this.eraseRegion(n,i,r,a);return}let s=this.tool===`wall`?`wall`:`slab`;if(o){let t=this.findBlockAt(e.c,e.r,s);if(t!==null){this.selectedIndex=t,this.cutRow=e.r,this.cutRowLabel.textContent=String(this.cutRow),this.updateBlockPanel();return}}this.createBlock(s,n,i,r,a)}createBlock(e,t,n,r,i){if(e===`wall`&&this.map.playerStart.c>=t&&this.map.playerStart.c<=r&&this.map.playerStart.r>=n&&this.map.playerStart.r<=i){this.setStatus(`No puedes tapar el inicio del jugador con un muro.`,!0);return}let a=this.computeGrids(),o=this.heightAtCell(a,t,n),s=e===`wall`?{kind:e,c0:t,r0:n,c1:r,r1:i,baseY:o,topY:o+Rh,color:this.wallColor}:{kind:e,c0:t,r0:n,c1:r,r1:i,baseY:o+2-Bh,topY:o+2,color:this.slabColor};this.map.props=this.map.props.filter(e=>!(e.c>=t&&e.c<=r&&e.r>=n&&e.r<=i)),this.map.spawns=this.map.spawns.filter(e=>!(e.c>=t&&e.c<=r&&e.r>=n&&e.r<=i)),this.map.blocks.push(s),this.selectedIndex=this.map.blocks.length-1,this.cutRow=n,this.cutRowLabel.textContent=String(this.cutRow),this.updateBlockPanel()}eraseRegion(e,t,n,r){let i=i=>i.c0<=n&&i.c1>=e&&i.r0<=r&&i.r1>=t,a=this.selectedIndex!==null&&i(this.map.blocks[this.selectedIndex]);this.map.blocks=this.map.blocks.filter(e=>!i(e)),this.map.props=this.map.props.filter(i=>!(i.c>=e&&i.c<=n&&i.r>=t&&i.r<=r)),this.map.spawns=this.map.spawns.filter(i=>!(i.c>=e&&i.c<=n&&i.r>=t&&i.r<=r)),a&&(this.selectedIndex=null,this.updateBlockPanel())}placeProp(e,t){switch(this.tool){case`start`:this.map.playerStart={c:e,r:t};break;case`spawn`:this.map.spawns.some(n=>n.c===e&&n.r===t)||this.map.spawns.push({c:e,r:t});break;default:this.map.props=this.map.props.filter(n=>!(n.c===e&&n.r===t)),this.map.props.push({type:this.tool,c:e,r:t})}}applySelectedField(e,t){if(this.selectedIndex===null||Number.isNaN(t))return;let n=this.map.blocks[this.selectedIndex];e===`baseY`?n.baseY=Math.min(t,n.topY-R_):n.color=t,this.editor3d?.refreshSelected(),this.render(),this.renderSection()}applySelectedHeight(e){if(this.selectedIndex===null||Number.isNaN(e))return;let t=this.map.blocks[this.selectedIndex];t.topY=t.baseY+Math.max(R_,e),this.editor3d?.refreshSelected(),this.render(),this.renderSection()}updateBlockPanel(){let e=this.selectedIndex===null?null:this.map.blocks[this.selectedIndex];this.blockEmpty.classList.toggle(`hidden`,e!==null),this.blockFields.classList.toggle(`hidden`,e===null),e&&(this.blockColorInput.value=B_(e.color),this.blockBaseInput.value=e.baseY.toFixed(2),this.blockHeightInput.value=(e.topY-e.baseY).toFixed(2))}resizeGrid(e){let t=this.map;if(e===t.cols&&e===t.rows)return;let n=t=>t.c<e&&t.r<e;this.map={...t,cols:e,rows:e,blocks:t.blocks.filter(t=>t.c0<e&&t.r0<e).map(t=>({...t,c1:Math.min(t.c1,e-1),r1:Math.min(t.r1,e-1)})),props:t.props.filter(n),spawns:t.spawns.filter(n),playerStart:n(t.playerStart)?t.playerStart:{c:Math.floor(e/2),r:Math.floor(e/2)}},this.invalidSpawns.clear(),this.selectedIndex=null,this.updateBlockPanel(),this.editor3d?.setMap(this.map),this.setStatus(`Rejilla ${e}×${e} (${e*t.cell} × ${e*t.cell} m).`),this.render(),this.renderSection()}syncControls(){this.nameInput.value=this.map.name,this.themeSelect.value=this.map.theme;let e=M_.includes(this.map.cols)?M_:[this.map.cols,...M_];this.sizeSelect.innerHTML=e.map(e=>`<option value="${e}">${e}×${e}</option>`).join(``),this.sizeSelect.value=String(this.map.cols);for(let e of Object.keys(this.styleSelects))this.styleSelects[e].value=this.map.style[e];this.updateBlockPanel()}refreshLoadList(){let e=Qh();this.loadSelect.innerHTML=`<option value="">Cargar mapa…</option>`+e.map(e=>`<option value="${z_(e)}">${z_(e)}</option>`).join(``)}setStatus(e,t=!1){this.status.textContent=e,this.status.style.color=t?`#e5484d`:`#9fb0c8`}eventCell(e){let t=this.canvas.getBoundingClientRect(),n=this.canvas.width/t.width,r=(e.clientX-t.left)*n,i=(e.clientY-t.top)*n,a=this.canvas.width/this.map.cols,o=Math.floor(r/a),s=Math.floor(i/a);return o<0||o>=this.map.cols||s<0||s>=this.map.rows?null:{c:o,r:s}}metresToPx(e){return F_*(1-(e-I_)/(L_-I_))}pxToMetres(e){return I_+(1-e/F_)*(L_-I_)}sectionEventY(e){let t=this.sectionCanvas.getBoundingClientRect();return(e.clientY-t.top)*this.sectionCanvas.height/t.height}sectionEventX(e){let t=this.sectionCanvas.getBoundingClientRect(),n=(e.clientX-t.left)*this.sectionCanvas.width/t.width,r=this.map.cols*this.map.cell;return-r/2+n/P_*r}validate(){let e=this.map.cols,t=this.map.playerStart,n=this.computeGrids();if(this.isWallAtCell(n,t.c,t.r))return this.setStatus(`El inicio del jugador está sobre un muro.`,!0),!1;let r=this.reachableCells(n);if(this.invalidSpawns.clear(),this.map.spawns.forEach((t,n)=>{r[t.r*e+t.c]||this.invalidSpawns.add(n)}),this.render(),this.map.spawns.length===0)return this.setStatus(`Coloca al menos un spawn de zombis.`,!0),!1;if(this.invalidSpawns.size>0)return this.setStatus(`${this.invalidSpawns.size} spawn(s) sin ruta al jugador (en rojo).`,!0),!1;let i=this.countOrphanStairs(n);if(i>0)return this.setStatus(`${i} escalera(s) no llevan a ninguna losa más alta junto a ellas.`,!0),!1;let a=this.countStrandedTerraceCells(n,r);return a>0?(this.setStatus(`${a} celda(s) de losa sin acceso — ¿falta una escalera?`,!0),!1):(this.setStatus(`Todo conectado — listo para jugar.`),!0)}countOrphanStairs(e){return this.map.props.filter(t=>t.type===`stairs`&&!this.stairHasTarget(e,t.c,t.r)).length}stairHasTarget(e,t,n){let r=this.heightAtCell(e,t,n);return N_.some(([i,a])=>this.heightAtCell(e,t+i,n+a)>r+.05)}reachableCells(e){let{cols:t,rows:n}=this.map,r=new Map;for(let i of this.map.props){if(i.type!==`stairs`)continue;let a=i.r*t+i.c,o=this.heightAtCell(e,i.c,i.r);for(let[s,c]of N_){let l=i.c+s,u=i.r+c;if(l<0||l>=t||u<0||u>=n||Math.abs(this.heightAtCell(e,l,u)-o)<.05||this.heightAtCell(e,l,u)<=o)continue;let d=u*t+l;r.set(a,d),r.set(d,a);break}}let i=new Uint8Array(t*n),a=this.map.playerStart.r*t+this.map.playerStart.c;if(this.isWallAtCell(e,this.map.playerStart.c,this.map.playerStart.r))return i;let o=[a];i[a]=1;for(let a=0;a<o.length;a++){let s=o[a],c=s%t,l=(s-c)/t,u=r=>{if(r<0||r>=t*n||i[r])return;let a=r%t;this.isWallAtCell(e,a,(r-a)/t)||(i[r]=1,o.push(r))};for(let[r,i]of N_){let a=c+r,o=l+i;a<0||a>=t||o<0||o>=n||Math.abs(this.heightAtCell(e,a,o)-this.heightAtCell(e,c,l))>.05||u(o*t+a)}let d=r.get(s);d!==void 0&&u(d)}return i}countStrandedTerraceCells(e,t){let n=0;for(let r=0;r<e.height.length;r++)e.isWall[r]===1||e.height[r]===0||t[r]||n++;return n}play(){if(this.map.spawns.length===0){this.setStatus(`Coloca al menos un spawn de zombis antes de probar.`,!0);return}this.validate(),eg(this.map),this.refreshLoadList(),this.playHandler?.(JSON.parse(JSON.stringify(this.map)))}render(){let{cols:e,rows:t}=this.map,n=this.canvas.width,r=n/e,i=this.ctx;i.fillStyle=`#161a20`,i.fillRect(0,0,n,n),i.strokeStyle=`rgba(255,255,255,0.05)`,i.lineWidth=1;for(let t=0;t<=e;t++)i.beginPath(),i.moveTo(t*r,0),i.lineTo(t*r,n),i.stroke();for(let e=0;e<=t;e++)i.beginPath(),i.moveTo(0,e*r),i.lineTo(n,e*r),i.stroke();i.textAlign=`center`,i.textBaseline=`middle`,this.map.blocks.forEach((e,t)=>{let n=e.c0*r,a=e.r0*r,o=(e.c1-e.c0+1)*r,s=(e.r1-e.r0+1)*r;i.fillStyle=B_(e.color),i.fillRect(n,a,o,s),e.kind===`slab`&&(i.fillStyle=`rgba(0,0,0,0.6)`,i.font=`700 ${Math.floor(r*.4)}px Consolas, monospace`,i.fillText(`${e.topY.toFixed(1)}m`,n+o/2,a+s/2)),t===this.selectedIndex&&(i.strokeStyle=`#ffd15c`,i.lineWidth=3,i.strokeRect(n+1.5,a+1.5,o-3,s-3))}),i.font=`${Math.floor(r*.72)}px sans-serif`;for(let e of this.map.props)i.fillStyle=A_[e.type],i.fillRect(e.c*r+1,e.r*r+1,r-2,r-2),i.fillStyle=`#0b0e12`,i.fillText(k_[e.type],(e.c+.5)*r,(e.r+.55)*r);this.map.spawns.forEach((e,t)=>{i.fillStyle=this.invalidSpawns.has(t)?`#e5484d`:`#3ad07a`,i.beginPath(),i.arc((e.c+.5)*r,(e.r+.5)*r,r*.35,0,Math.PI*2),i.fill()}),i.fillStyle=`#3aa0ff`,i.beginPath(),i.arc((this.map.playerStart.c+.5)*r,(this.map.playerStart.r+.5)*r,r*.42,0,Math.PI*2),i.fill(),i.strokeStyle=`#cfe6ff`,i.lineWidth=2,i.stroke(),i.strokeStyle=`rgba(255,209,92,0.5)`,i.lineWidth=2,i.strokeRect(0,this.cutRow*r,n,r),i.strokeStyle=`rgba(255,209,92,0.4)`,i.lineWidth=3,i.strokeRect(1.5,1.5,n-3,n-3),this.renderCursor(r)}renderCursor(e){let t=this.ctx;if(this.dragStart&&this.dragEnd){let n=Math.min(this.dragStart.c,this.dragEnd.c),r=Math.max(this.dragStart.c,this.dragEnd.c),i=Math.min(this.dragStart.r,this.dragEnd.r),a=Math.max(this.dragStart.r,this.dragEnd.r),o=this.tool===`erase`;t.fillStyle=o?`rgba(229,72,77,0.25)`:`rgba(255,209,92,0.28)`,t.fillRect(n*e,i*e,(r-n+1)*e,(a-i+1)*e),t.strokeStyle=o?`#e5484d`:`#ffd15c`,t.lineWidth=2,t.strokeRect(n*e,i*e,(r-n+1)*e,(a-i+1)*e);return}this.hover&&(t.strokeStyle=`rgba(255,255,255,0.55)`,t.lineWidth=2,t.strokeRect(this.hover.c*e+1,this.hover.r*e+1,e-2,e-2))}renderSection(){let e=this.sectionCtx,t=P_,n=F_;e.fillStyle=`#12151a`,e.fillRect(0,0,t,n),e.strokeStyle=`rgba(255,255,255,0.06)`,e.lineWidth=1,e.font=`10px Consolas, monospace`,e.fillStyle=`rgba(255,255,255,0.35)`,e.textBaseline=`middle`;for(let n=Math.ceil(I_/2)*2;n<=L_;n+=2){let r=this.metresToPx(n);e.strokeStyle=n===0?`rgba(255,209,92,0.35)`:`rgba(255,255,255,0.06)`,e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke(),e.fillText(`${n}m`,4,r-7)}let r=-(this.map.cols*this.map.cell)/2,i=this.map.cols*this.map.cell,a=e=>(e-r)/i*t;for(let t=0;t<this.map.blocks.length;t++){let n=this.map.blocks[t];if(this.cutRow<n.r0||this.cutRow>n.r1)continue;let i=a(r+n.c0*this.map.cell),o=a(r+(n.c1+1)*this.map.cell),s=this.metresToPx(n.topY),c=this.metresToPx(n.baseY);if(e.fillStyle=B_(n.color),e.fillRect(i,s,o-i,c-s),t===this.selectedIndex){e.strokeStyle=`#ffd15c`,e.lineWidth=2,e.strokeRect(i+1,s+1,o-i-2,c-s-2),e.fillStyle=`#ffd15c`;let t=(i+o)/2;e.fillRect(t-10,s-2,20,4),e.fillRect(t-10,c-2,20,4)}}this.map.blocks.every(e=>this.cutRow<e.r0||this.cutRow>e.r1)&&(e.fillStyle=`rgba(255,255,255,0.3)`,e.textAlign=`center`,e.fillText(`Nada en esta fila todavía — pasa el ratón sobre el plano para elegir otra.`,t/2,n/2),e.textAlign=`start`)}},U_=45,W_=class{root;frames=[];lastUpdate=0;visible=!1;constructor(e){this.root=document.createElement(`div`),this.root.id=`perf-hud`,this.root.className=`hidden`,e.appendChild(this.root),window.addEventListener(`keydown`,e=>{e.code===`F3`&&(e.preventDefault(),this.toggle())})}toggle(){this.visible=!this.visible,this.root.classList.toggle(`hidden`,!this.visible)}update(e,t,n,r){if(!this.visible)return;this.frames.push(e),this.frames.length>U_&&this.frames.shift();let i=performance.now();if(i-this.lastUpdate<250)return;this.lastUpdate=i;let a=[...this.frames].sort((e,t)=>e-t),o=a.reduce((e,t)=>e+t,0)/a.length,s=a[a.length-1],c=0,l=e=>{if(e.visible){e.isLight&&c++;for(let t of e.children)l(t)}};l(n);let u=t.info,d=[[`FPS`,`${(1e3/o).toFixed(0)}  (${o.toFixed(1)} ms)`],[`peor frame`,`${s.toFixed(1)} ms`],[`draw calls`,String(u.render.calls)],[`triángulos`,u.render.triangles.toLocaleString(`es`)],[`luces`,String(c)],[`programas`,String(u.programs?.length??0)],[`texturas`,String(u.memory.textures)],[`geometrías`,String(u.memory.geometries)],...Object.entries(r).map(([e,t])=>[e,String(t)])];this.root.innerHTML=d.map(([e,t])=>`<div><span>${e}</span><b>${t}</b></div>`).join(``)}};function G_(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Or,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=K_(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=K_(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function K_(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new pr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var q_=8,J_=1,Y_=8,X_=5,Z_=.6;function Q_(e,t,n,r){return{minX:e-n/2,maxX:e+n/2,minZ:t-r/2,maxZ:t+r/2}}function $_(e){let t=ug[e.theme],n=lg[e.style.ceiling],r=new q,i=[],a=[],o=[],s=[],c=[],{cols:l,rows:u,cell:d}=e,f=l*d,p=u*d,m=-f/2,h=-p/2,g=t.wallHeight,_=(e,t)=>e>=0&&e<l&&t>=0&&t<u,v=(t,n)=>Yh(e,t,n),y=new Uint8Array(l*u),b=new Uint8Array(l*u),x=new Float32Array(l*u);for(let t of e.blocks){let e=Math.max(0,t.c0),n=Math.min(l-1,t.c1),r=Math.max(0,t.r0),i=Math.min(u-1,t.r1);for(let a=r;a<=i;a++)for(let r=e;r<=n;r++){let e=a*l+r;t.kind===`wall`?y[e]=1:(!b[e]||t.topY>x[e])&&(b[e]=1,x[e]=t.topY)}}let S=(e,t)=>_(e,t)&&y[t*l+e]===1,C=(e,t)=>{if(!_(e,t))return 0;let n=t*l+e;return b[n]?x[n]:0},w=new Map;for(let t of e.props)w.set(t.r*l+t.c,t.type);let T=(e,t)=>e>=0&&e<l&&t>=0&&t<u?w.get(t*l+e):void 0,E=yg(e.style.floor,f,p),D=bg(7766156),O=new Z({color:4870232,roughness:.55,metalness:.5}),k=new Z({color:3356479,roughness:.65,metalness:.45}),A=new Z({color:6969916,roughness:.8}),j=new Z({color:3028288,roughness:.55,metalness:.4}),ee=new Z({color:1191992,emissive:2079190,emissiveIntensity:.9,roughness:.3}),M=new Z({color:3729151,emissive:2213856,emissiveIntensity:1.4,roughness:.3}),te=new Z({color:11703327,roughness:.8}),ne=new Z({color:1586234,emissive:1959679,emissiveIntensity:1.1,roughness:.25,metalness:.4}),N=new Map;function re(e){let t=N.get(e);return t||(t=bg(e),N.set(e,t)),t}let P=new Map,ie=new Map;function F(e,t,n,r){let i=e.get(t);i?i.push({geometry:n,matrix:r}):e.set(t,[{geometry:n,matrix:r}])}let ae=(e,t,n)=>new Xt().makeTranslation(e,t,n);function oe(e,t,n,r,i,a,o,s){F(e,t,new Y(a,o,s),ae(n,r,i))}function se(e,t,n,r,a,o,s=0){oe(P,o,e,s+a/2,t,n,a,r),i.push(Q_(e,t,n,r))}function I(e,t,n,r,i,a,o){oe(ie,o,e,t,n,r,i,a)}function ce(e,t){for(let[n,i]of e){let e=i.map(e=>e.geometry.clone().applyMatrix4(e.matrix)),a=G_(e,!1);for(let t of e)t.dispose();for(let e of i)e.geometry.dispose();if(!a)continue;let s=new J(a,n);s.castShadow=!0,s.receiveShadow=!0,r.add(s),t&&o.push(s)}}function le(e){let t=m+e.c0*d,n=m+(e.c1+1)*d,r=h+e.r0*d,i=h+(e.r1+1)*d;return{minX:t,maxX:n,minZ:r,maxZ:i,cx:(t+n)/2,cz:(r+i)/2,sx:n-t,sz:i-r}}for(let t of e.blocks){if(t.kind!==`wall`)continue;let{cx:e,cz:n,sx:r,sz:a}=le(t),o=t.topY-t.baseY,s=(t.baseY+t.topY)/2;oe(P,re(t.color),e,s,n,r,o,a),i.push({...Q_(e,n,r,a),minY:t.baseY,maxY:t.topY})}let L=e.blocks.filter(e=>e.kind===`slab`).sort((e,t)=>t.topY-e.topY);for(let e of L){let{cx:t,cz:n,sx:r,sz:i}=le(e),a=Math.max(.05,e.topY-e.baseY),o=e.topY-a/2;oe(P,re(e.color),t,o,n,r,a,i),s.push({minX:t-r/2,maxX:t+r/2,minZ:n-i/2,maxZ:n+i/2,height:e.topY})}for(let e=0;e<u;e++){let t=-1;for(let n=0;n<=l;n++){let r=n<l&&b[e*l+n]===0;if(r&&t===-1&&(t=n),r||t===-1)continue;let i=m+t*d,a=m+n*d,o=h+e*d,s=h+(e+1)*d,c=new Ai(a-i,s-o),u=c.attributes.uv,g=(i-m)/f,_=(a-m)/f,v=1-(s-h)/p,y=1-(o-h)/p;for(let e=0;e<u.count;e++)u.setXY(e,g+u.getX(e)*(_-g),v+u.getY(e)*(y-v));c.rotateX(-Math.PI/2),F(P,E,c,ae((i+a)/2,0,(o+s)/2)),t=-1}}if(n.solid){let e=new Z({color:1711137,roughness:.9,metalness:.05,side:2}),t=new J(new Ai(f,p),e);t.rotation.x=Math.PI/2,t.position.y=q_,r.add(t),o.push(t)}if(n.beams!==`none`){for(let e=h+12/2;e<p/2;e+=12)I(0,q_-.3,e,f,.5,.6,k);if(n.beams===`cross`)for(let e=m+12/2;e<f/2;e+=12)I(e,q_-.85,0,.6,.5,p,k)}let ue=J_,de=L.map(e=>e.topY),fe=Math.min(0,...de),pe=Math.max(0,...de),me=fe,he=pe+g-me;se(0,-p/2-ue/2,f+ue*2,ue,he,D,me),se(0,p/2+ue/2,f+ue*2,ue,he,D,me),se(-f/2-ue/2,0,ue,p,he,D,me),se(f/2+ue/2,0,ue,p,he,D,me);let ge=[[1,0],[-1,0],[0,1],[0,-1]],_e=new Map;for(let t of e.props){if(t.type!==`stairs`)continue;let e=C(t.c,t.r),n=ge.find(([n,r])=>C(t.c+n,t.r+r)>e+.05);n&&_e.set(t.r*l+t.c,n)}let ve=.36,R=.16,ye=new Set;for(let e=0;e<u;e++)for(let t=0;t<l;t++){let n=C(t,e);for(let[r,a]of ge){let o=t+r,s=e+a;if(!_(o,s))continue;let c=C(o,s);if(c>=n-.001)continue;let u=`${Math.min(t,o)},${Math.min(e,s)},${r===0?`z`:`x`}`;if(ye.has(u))continue;ye.add(u);let f=_e.get(s*l+o);if(f&&f[0]===-r&&f[1]===-a)continue;let{x:p,z:m}=v(t,e),h=n,g=c,y=p+d/2*r,b=m+d/2*a,x=(h+g)/2,S=h-g,w=r!==0,T=w?y:p,E=w?m:b;oe(P,re(3817288),T,x,E,w?ve:d,S,w?d:ve),I(T,h+.045,E,w?R:d,.08,w?d:R,M),i.push({...w?Q_(T,E,ve,d):Q_(T,E,d,ve),minY:g,maxY:h})}}for(let[e,[t,n]]of _e){let r=e%l,i=(e-r)/l,{x:a,z:o}=v(r,i),s=a-d/2,u=a+d/2,f=o-d/2,p=o+d/2,m=t===0?`z`:`x`,h=m===`x`?t>0?s:u:n>0?f:p,g=m===`x`?t>0?u:s:n>0?p:f,_=C(r,i),y=C(r+t,i+n);c.push({minX:s,maxX:u,minZ:f,maxZ:p,axis:m,from:h,to:g,baseHeight:_,topHeight:y});let b=Math.min(_,y)-1;for(let e=0;e<5;e++){let t=_+(y-_)*(e+1)/5-b,n=d/5,r=h+(g-h)*((e+.5)/5),i=e%2==0?re(9080985):O,s=m===`x`?r:a,c=m===`x`?o:r,l=b+t/2;m===`x`?oe(P,i,s,l,c,n,t,d):oe(P,i,s,l,c,d,t,n)}}let be=[],xe=0;function Se(e,t,n){let i=new ji(d*.9,d*1.1,40).rotateX(-Math.PI/2);F(ie,te,i,ae(e,n+.02,t)),F(P,j,new X(1.9,2.1,.5,20),ae(e,n+.25,t)),F(P,O,new X(2,1.6,.6,20),ae(e,n+4.4,t));let o=new J(new X(1.5,1.5,3.6,20),ne);o.position.set(e,n+2.3,t),r.add(o);let s=new Ta(3135743,14,26,2);s.position.set(e,n+3,t),r.add(s),a.push({cx:e,cz:t,radius:2}),be.push({mat:ne,light:s,glow:o})}function Ce(e,t,n){F(P,O,new X(1.6,1.6,5,16),ae(e,n+5/2,t)),F(ie,te,new X(1.64,1.64,.2,16),ae(e,n+5*.6,t)),a.push({cx:e,cz:t,radius:1.75})}function we(e,t,n){let r=0;for(let i=0;i<2;i++){let a=1.2-i*.25;oe(P,A,e+(i===1?.2:0),n+r+a/2,t+(i===1?.15:0),a,a,a),r+=a}i.push(Q_(e,t,1.5,1.5))}function Te(e,t,n){se(e,t,2.4,.9,1.1,j,n),I(e,n+1,t+.48,2,.6,.05,ee)}function Ee(e,t,n){let r=2.6;se(e,t,1.4,1.4,r,O,n),I(e,n+r-.15,t,1.6,.3,1.6,O),I(e,n+.15,t,1.7,.3,1.7,O)}function De(e,t,n){let r=2.6;F(P,O,new X(.62,.72,r,18),ae(e,n+r/2,t));for(let i of[n+.14,n+r-.14])F(ie,O,new X(.95,.95,.28,18),ae(e,i,t));a.push({cx:e,cz:t,radius:.85})}function Oe(e,t,n){let i=2.6;se(e,t,1.1,1.1,i,O,n);for(let r of[-1,1])I(e+r*.58,n+i/2,t,.06,i*.8,.5,M),I(e,n+i/2,t+r*.58,.5,i*.8,.06,M);if(xe>=X_)return;xe++;let a=new Ta(3729151,6,14,2);a.position.set(e,n+i*.6,t),r.add(a)}function ke(e,t,n){let r=2.6,a=.55;for(let i of[-.55,a])for(let o of[-.55,a])I(e+i,n+r/2,t+o,.16,r,.16,O);for(let i=1;i<=4;i++){let o=n+r*i/5;I(e,o,t-a,a*2,.12,.12,O),I(e,o,t+a,a*2,.12,.12,O),I(e-a,o,t,.12,.12,a*2,O),I(e+a,o,t,.12,.12,a*2,O)}i.push(Q_(e,t,1.3,1.3))}function z(e,t,n,r){let i=S(e.c-1,e.r)||S(e.c+1,e.r)||!(S(e.c,e.r-1)||S(e.c,e.r+1)),a=2.4,o=.42,s=d/2-o/2,c=Z_;if(i){for(let e of[-1,1])se(t+e*s,n,o,c,a,O,r);I(t,r+a+.18,n,d,.36,c,O),I(t,r+a+.38,n,d*.9,.06,c*.6,M);return}for(let e of[-1,1])se(t,n+e*s,c,o,a,O,r);I(t,r+a+.18,n,c,.36,d,O),I(t,r+a+.38,n,c*.6,.06,d*.9,M)}function Ae(e,t,r,i){let a=T(e.c-1,e.r)===`beam`||T(e.c+1,e.r)===`beam`,o=i+(n.solid?q_-i-.45:2.15);if(a){I(t,o,r,d,.5,.42,k),I(t,o-.3,r,d*.9,.12,.6,k);return}I(t,o,r,.42,.5,d,k),I(t,o-.3,r,.6,.12,d*.9,k)}let je={reactor:(e,t,n,r)=>Se(t,n,r),tank:(e,t,n,r)=>Ce(t,n,r),crate:(e,t,n,r)=>we(t,n,r),console:(e,t,n,r)=>Te(t,n,r),pillar:(e,t,n,r)=>Ee(t,n,r),pillarRound:(e,t,n,r)=>De(t,n,r),pillarNeon:(e,t,n,r)=>Oe(t,n,r),pillarTruss:(e,t,n,r)=>ke(t,n,r),doorframe:(e,t,n,r)=>z(e,t,n,r),beam:(e,t,n,r)=>Ae(e,t,n,r),stairs:()=>{}};for(let t of e.props){let{x:e,z:n}=v(t.c,t.r);je[t.type]?.(t,e,n,C(t.c,t.r))}if(r.add(new ka(t.ambient.color,t.ambient.intensity)),r.add(new la(t.hemi.sky,t.hemi.ground,t.hemi.intensity)),n.solid&&t.panelLights){let e=new Z({color:16774365,emissive:16772559,emissiveIntensity:1.1,roughness:.5}),t=[];for(let n=m+12/2;n<f/2;n+=12)for(let r=h+12/2;r<p/2;r+=12)I(n,q_-1.05,r,3,.12,1,e),t.push([n,r]);let n=Math.max(1,Math.ceil(t.length/Y_)),i=t.filter((e,t)=>t%n===0).slice(0,Y_),a=Math.max(30,12*n*1.4);for(let[e,t]of i){let n=new Ta(16773078,26,a,2);n.position.set(e,q_-1.5,t),r.add(n)}}else{let e=new Oa(14673648,n.solid?.3:.6);e.position.set(10,24,8),r.add(e)}ce(P,!0),ce(ie,!1);let Me=[];if(t.fog){let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(140,200,225,0.35)`),n.addColorStop(.6,`rgba(90,160,190,0.14)`),n.addColorStop(1,`rgba(60,140,170,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let i=new zr({map:new Si(e),transparent:!0,depthWrite:!1,blending:2}),a=new Ai(1,1),o=Math.min(26,Math.round(f*p/700));for(let e=0;e<o;e++){let e=new J(a,i),t=5+Math.random()*6;e.scale.set(t,t,1),e.rotation.x=-Math.PI/2;let n=(Math.random()-.5)*f*.95,o=(Math.random()-.5)*p*.95;e.position.set(n,.14+Math.random()*.18,o),e.renderOrder=1,r.add(e),Me.push({mesh:e,baseX:n,baseZ:o,speed:.09+Math.random()*.14,radius:1.3+Math.random()*2.2,phase:Math.random()*Math.PI*2})}}let B=(e.spawns.length>0?e.spawns:[{c:1,r:1}]).map(e=>{let t=v(e.c,e.r);return new K(t.x,0,t.z)}),Ne=v(e.playerStart.c,e.playerStart.r),V=new K(Ne.x,0,Ne.z),Pe=C(e.playerStart.c,e.playerStart.r),Fe=[];for(let t=2;t<=7;t++)for(let n=-t;n<=t;n++)for(let r=-t;r<=t;r++){if(Math.max(Math.abs(n),Math.abs(r))!==t)continue;let i=e.playerStart.c+r,a=e.playerStart.r+n;_(i,a)&&(S(i,a)||w.has(a*l+i)||Math.abs(C(i,a)-Pe)>.05||Fe.push({c:i,r:a,distance:Math.hypot(r,n)}))}Fe.sort((e,t)=>e.distance-t.distance);let Ie=[];for(let e of[2.5,0])for(let t of Fe){if(Ie.length>=4)break;let n=Ie.some(n=>Math.hypot(n.c-t.c,n.r-t.r)<e),r=Ie.some(e=>e.c===t.c&&e.r===t.r);n||r||Ie.push({c:t.c,r:t.r})}let Le=Ie.map(e=>{let t=v(e.c,e.r);return[t.x,Pe,t.z]});function Re(e){for(let t of Me)t.mesh.position.x=t.baseX+Math.sin(e*t.speed+t.phase)*t.radius,t.mesh.position.z=t.baseZ+Math.cos(e*t.speed*.8+t.phase)*t.radius;if(be.length===0)return;let t=.5+.5*Math.sin(e*1.6),n=.5+.5*Math.sin(e*11+1.3),r=t*.85+n*.15;for(let e of be)e.mat.emissiveIntensity=1.1*(.7+.6*r),e.light.intensity=10+8*r,e.glow.scale.setScalar(.97+.05*t)}return{group:r,collisionBoxes:i,collisionCircles:a,solidMeshes:o,bounds:Q_(0,0,f,p),spawnPoints:B,playerStart:V,groundHeightAt:(e,t)=>xl(e,t,s,c),updateMist:Re,cratePositions:Le,sceneFog:t.sceneFog}}var ev={pistol_ammo:{id:`pistol_ammo`,name:`Caja de munición 9mm`,description:`Munición para la pistola. Doble clic para cargarla en el arma.`,maxStack:60,icon:uu.pistol,color:`#d9b64a`},rifle_ammo:{id:`rifle_ammo`,name:`Caja de munición 5.56`,description:`Munición para el fusil. Doble clic para cargarla en el arma.`,maxStack:90,icon:uu.rifle,color:`#7fae5c`},shotgun_ammo:{id:`shotgun_ammo`,name:`Caja de cartuchos`,description:`Cartuchos para la escopeta. Doble clic para cargarlos en el arma.`,maxStack:24,icon:uu.shotgun,color:`#b5773a`},medkit:{id:`medkit`,name:`Botiquín`,description:`Restaura 50 HP. Equípalo con la tecla 4 y mantén click izquierdo para usarlo.`,maxStack:4,icon:uu.medkit,color:`#d9534f`}},tv=class{size;slots;listeners=new Set;constructor(e,t=[]){this.size=e,this.slots=Array.from({length:e},(e,n)=>t[n]??null)}onChange(e){this.listeners.add(e)}offChange(e){this.listeners.delete(e)}notify(){for(let e of this.listeners)e()}getSlot(e){return this.slots[e]??null}findFirstSlot(e){return this.slots.findIndex(t=>t?.itemId===e)}countItem(e){return this.slots.reduce((t,n)=>n?.itemId===e?t+n.quantity:t,0)}removeItem(e,t){let n=t;for(let t=0;t<this.slots.length&&n>0;t++){let r=this.slots[t];if(!r||r.itemId!==e)continue;let i=Math.min(r.quantity,n);r.quantity-=i,n-=i,r.quantity<=0&&(this.slots[t]=null)}let r=t-n;return r>0&&this.notify(),r}addItem(e,t){let n=ev[e].maxStack,r=t;for(let t of this.slots){if(r<=0)break;if(!t||t.itemId!==e||t.quantity>=n)continue;let i=Math.min(n-t.quantity,r);t.quantity+=i,r-=i}for(let t=0;t<this.slots.length&&r>0;t++){if(this.slots[t])continue;let i=Math.min(n,r);this.slots[t]={itemId:e,quantity:i},r-=i}return this.notify(),r}removeFromSlot(e,t){let n=this.slots[e];return!n||n.quantity<t?!1:(n.quantity-=t,n.quantity<=0&&(this.slots[e]=null),this.notify(),!0)}transferSlot(e,t,n){let r=this.slots[e];if(!r||t===this&&e===n)return;let i=t.slots[n];if(i&&i.itemId===r.itemId){let t=ev[i.itemId].maxStack-i.quantity,n=Math.min(t,r.quantity);i.quantity+=n,r.quantity-=n,this.slots[e]=r.quantity>0?r:null}else t.slots[n]=r,this.slots[e]=i??null;this.notify(),t!==this&&t.notify()}autoTransfer(e,t){let n=this.slots[e];if(!n)return!1;let r=t.addItem(n.itemId,n.quantity);return n.quantity-r<=0?!1:(this.slots[e]=r>0?{itemId:n.itemId,quantity:r}:null,this.notify(),!0)}},nv=.8,rv=.55,iv=.12,av=.95,ov=.14,sv=new K(0,-.56,.14),cv=.27,lv=.3,uv=new K(0,-1,0),dv=new K(0,1,0),fv=class{group;legL;legR;armL;armR;elbowL;leftGrip;rightGrip;heldMeshes;leftFlashlight;heldSlot=`pistol`;pistolSupportTarget=new K;rifleSupportTarget=new K;tmpTarget=new K;tmpDir=new K;tmpBendAxis=new K;tmpShoulderDir=new K;tmpElbowPos=new K;tmpForearmDir=new K;tmpQuat=new Et;constructor(){this.group=new q;let e=new Z({color:13081202,roughness:.85}),t=new Z({color:3093048,roughness:.75}),n=new Z({color:3817262,roughness:.85}),r=new Z({color:2369067,roughness:.85}),i=new Z({color:1381914,roughness:.55,metalness:.1}),a=new Z({color:2826006,roughness:.9}),o=nv,s=new Y(.2,.66,.2),c=new Y(.22,.14,.26),l=e=>{let t=new q;t.position.set(e*.12,o,0);let n=new J(s,r);n.position.y=-.33,n.castShadow=!0,t.add(n);let a=new J(c,i);return a.position.set(0,-.72,-.015),a.castShadow=!0,t.add(a),t};this.legL=l(-1),this.legR=l(1),this.group.add(this.legL,this.legR);let u=new J(new Y(.5,.6,.28),t);u.position.set(0,1.12,0),u.castShadow=!0,this.group.add(u);let d=new J(new Y(.38,.4,.05),n);d.position.set(0,1.1800000000000002,-.165),this.group.add(d);let f=new J(new Y(.38,.38,.38),e);f.position.set(0,1.61,0),f.castShadow=!0,this.group.add(f);let p=new J(new Y(.4,.1,.4),a);p.position.set(0,1.81,.01),this.group.add(p);let m=new Y(.17,.54,.17),h=new Y(.15,.13,.15),g=new q;g.position.set(.335,1.38,0);let _=new J(m,t);_.position.y=-.27,_.castShadow=!0,g.add(_);let v=new q;v.position.copy(sv),g.add(v),this.armR=g,this.rightGrip=v,this.group.add(this.armR);let y=new Y(.17,cv,.17),b=new Y(.15,lv,.15),x=new q;x.position.set(-.335,1.38,0);let S=new J(y,t);S.position.y=-.27/2,S.castShadow=!0,x.add(S);let C=new q;C.position.set(0,-.27,0),x.add(C);let w=new J(b,t);w.position.y=-.3/2,w.castShadow=!0,C.add(w);let T=new q;T.position.set(0,-.3,.05),C.add(T),this.armL=x,this.elbowL=C,this.leftGrip=T,this.group.add(this.armL);let E=new J(h,e);E.position.set(0,0,-.09),this.leftGrip.add(E);let D=Od();D.position.set(0,.03,-.05);let O=D.userData.gripPivot,k=new J(h,e);k.position.set(0,-.07,.01),O.add(k);let A=rf();A.position.set(0,.03,-.12);let j=vu();j.position.copy(A.userData.railAnchor),A.add(j);let ee=A.userData.gripPivot,M=new J(h,e);M.position.set(0,-.06,0),ee.add(M);let te=fp();te.rotation.set(-1.3,0,0),te.position.set(0,.02,-.02);let ne=new J(h,e);ne.position.set(0,-.05,.05),te.add(ne);let{group:N}=Pp();N.position.set(0,0,-.05);let re=new J(h,e);re.position.set(0,0,.03),N.add(re);for(let e of[D,A,te,N])e.traverse(e=>{e.isMesh&&(e.castShadow=!0)});this.rightGrip.add(D,A,te,N),this.heldMeshes={pistol:D,rifle:A,knife:te,medkit:N},this.pistolSupportTarget.copy(D.position).add(new K(.02,-.14,.05)),this.rifleSupportTarget.copy(A.position).add(new K(.02,-.04,-.08)),this.leftFlashlight=vu(),this.leftFlashlight.position.set(0,.02,-.04),this.leftGrip.add(this.leftFlashlight),this.setHeldItem(`pistol`)}setHeldItem(e){this.heldSlot=e;for(let t of Object.keys(this.heldMeshes))this.heldMeshes[t].visible=t===e;this.leftFlashlight.visible=e===`pistol`}update(e,t){let n=Math.sin(e)*rv*t;this.legL.rotation.x=n,this.legR.rotation.x=-n;let r=Math.sin(e)*iv*t;this.armR.rotation.set(av+r,ov,0);let i=this.heldSlot===`pistol`?this.pistolSupportTarget:this.heldSlot===`rifle`?this.rifleSupportTarget:null;i?(this.tmpTarget.copy(sv).applyQuaternion(this.armR.quaternion).add(this.armR.position).add(i),this.aimSupportArm(this.tmpTarget)):(this.armL.rotation.set(av-r,-.14,0),this.elbowL.rotation.set(0,0,0)),this.leftGrip.quaternion.copy(this.armL.quaternion).multiply(this.elbowL.quaternion).invert(),this.rightGrip.quaternion.copy(this.armR.quaternion).invert()}aimSupportArm(e){let t=this.tmpDir.copy(e).sub(this.armL.position),n=Math.abs(cv-lv)+.01,r=Tt.clamp(t.length(),n,.56),i=t.normalize(),a=Tt.clamp((cv*cv+r*r-lv*lv)/(2*cv*r),-1,1),o=Math.acos(a);this.tmpBendAxis.crossVectors(i,dv),this.tmpBendAxis.lengthSq()<1e-6?this.tmpBendAxis.set(1,0,0):this.tmpBendAxis.normalize(),this.tmpShoulderDir.copy(i).applyAxisAngle(this.tmpBendAxis,o),this.armL.quaternion.setFromUnitVectors(uv,this.tmpShoulderDir),this.tmpElbowPos.copy(this.armL.position).addScaledVector(this.tmpShoulderDir,cv),this.tmpForearmDir.copy(e).sub(this.tmpElbowPos).normalize(),this.tmpForearmDir.applyQuaternion(this.tmpQuat.copy(this.armL.quaternion).invert()),this.elbowL.quaternion.setFromUnitVectors(uv,this.tmpForearmDir)}},pv=class{renderer;scene;camera;model;clock=new Xa;rafId=null;constructor(e){this.renderer=new yl({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new Pn,this.camera=new xa(32,1,.1,10),this.camera.position.set(0,1.15,3.7),this.camera.lookAt(0,.93,0);let t=new Oa(16773856,1.6);t.position.set(1.6,2.6,2.2),this.scene.add(t);let n=new Ta(10335440,.7,7);n.position.set(-1.6,1.2,1.6),this.scene.add(n);let r=new ka(5265512,.65);this.scene.add(r),this.model=new fv,this.scene.add(this.model.group)}resize(){let e=this.renderer.domElement.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),n=Math.max(1,Math.round(e.height));this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}start(){if(this.rafId!==null)return;this.resize(),this.clock.start();let e=()=>{this.rafId=requestAnimationFrame(e);let t=Math.min(this.clock.getDelta(),.05);this.model.group.rotation.y+=t*.5,this.model.update(0,0),this.renderer.render(this.scene,this.camera)};e()}stop(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null}},mv=[{cls:`equip-slot-head`,label:`Cabeza`},{cls:`equip-slot-chest`,label:`Torso`},{cls:`equip-slot-legs`,label:`Piernas`}],hv=class{root;crateSection;crateTitle;crateGrid;playerGrid;tooltip;characterPreview;playerInv=null;crateInv=null;useHandler=()=>{};closeHandler=()=>{};renderPlayer=()=>this.renderGrid(this.playerGrid,this.playerInv,`player`);renderCrate=()=>this.renderGrid(this.crateGrid,this.crateInv,`crate`);constructor(e){this.root=document.createElement(`div`),this.root.id=`inventory-overlay`,this.root.className=`hidden`,this.root.innerHTML=`
      <div id="inventory-panel">
        <div class="inv-section" id="character-section">
          <div class="inv-title">PERSONAJE</div>
          <div id="character-doll">
            <canvas id="character-canvas"></canvas>
            ${mv.map(e=>`<div class="equip-slot ${e.cls}" data-label="${e.label}"></div>`).join(``)}
          </div>
        </div>
        <div class="inv-section hidden" id="crate-section">
          <div class="inv-title" id="crate-title">CAJA</div>
          <div class="inv-grid" id="crate-grid"></div>
        </div>
        <div class="inv-section" id="player-section">
          <div class="inv-title">MOCHILA</div>
          <div class="inv-grid" id="player-grid"></div>
        </div>
      </div>
      <div id="inventory-hint">Arrastra para mover · Doble clic para usar/guardar · Esc o Tab para cerrar</div>
      <button id="inventory-close-btn" type="button" aria-label="Cerrar">✕</button>
      <div id="inv-tooltip"></div>
    `,e.appendChild(this.root),this.crateSection=this.root.querySelector(`#crate-section`),this.crateTitle=this.root.querySelector(`#crate-title`),this.crateGrid=this.root.querySelector(`#crate-grid`),this.playerGrid=this.root.querySelector(`#player-grid`),this.tooltip=this.root.querySelector(`#inv-tooltip`),this.characterPreview=new pv(this.root.querySelector(`#character-canvas`)),this.root.querySelector(`#inventory-close-btn`).addEventListener(`click`,()=>this.close());for(let e of this.root.querySelectorAll(`.equip-slot`))this.attachTooltip(e,e.dataset.label??``,`Equipo de cuerpo — próximamente`);document.addEventListener(`keydown`,e=>{e.code===`Escape`&&this.isOpen&&this.close()})}get isOpen(){return!this.root.classList.contains(`hidden`)}onUse(e){this.useHandler=e}onClose(e){this.closeHandler=e}open(e,t,n=`CAJA`){this.playerInv=e,this.crateInv=t,this.playerInv.onChange(this.renderPlayer),this.crateInv?.onChange(this.renderCrate),this.crateSection.classList.toggle(`hidden`,!t),this.crateTitle.textContent=n,this.renderPlayer(),this.renderCrate(),this.root.classList.remove(`hidden`),this.characterPreview.start()}close(){this.playerInv?.offChange(this.renderPlayer),this.crateInv?.offChange(this.renderCrate),this.playerInv=null,this.crateInv=null,this.root.classList.add(`hidden`),this.hideTooltip(),this.characterPreview.stop(),this.closeHandler()}inventoryFor(e){return e===`player`?this.playerInv:this.crateInv}renderGrid(e,t,n){if(e.innerHTML=``,t)for(let r=0;r<t.size;r++)e.appendChild(this.buildSlot(t,n,r))}buildSlot(e,t,n){let r=e.getSlot(n),i=document.createElement(`div`);if(i.className=`inv-slot`,r){let e=ev[r.itemId];i.classList.add(`filled`),i.draggable=!0,i.style.setProperty(`--item-color`,e.color),i.innerHTML=`
        <span class="inv-icon">${e.icon}</span>
        ${r.quantity>1?`<span class="inv-qty">${r.quantity}</span>`:``}
      `,this.attachTooltip(i,e.name,e.description),i.addEventListener(`dragstart`,e=>{i.classList.add(`dragging`),this.hideTooltip(),e.dataTransfer?.setData(`text/plain`,JSON.stringify({container:t,index:n})),e.dataTransfer&&(e.dataTransfer.effectAllowed=`move`)}),i.addEventListener(`dragend`,()=>i.classList.remove(`dragging`)),i.addEventListener(`dblclick`,()=>this.handleUse(t,n,r.itemId))}return i.addEventListener(`dragover`,e=>{e.preventDefault(),i.classList.add(`drag-over`)}),i.addEventListener(`dragleave`,()=>i.classList.remove(`drag-over`)),i.addEventListener(`drop`,e=>{e.preventDefault(),i.classList.remove(`drag-over`);let r=e.dataTransfer?.getData(`text/plain`);if(!r)return;let a=JSON.parse(r);this.handleDrop(a,{container:t,index:n})}),i}handleDrop(e,t){let n=this.inventoryFor(e.container),r=this.inventoryFor(t.container);!n||!r||n.transferSlot(e.index,r,t.index)}handleUse(e,t,n){if(e===`crate`){this.crateInv?.autoTransfer(t,this.playerInv);return}this.useHandler(n,t)}attachTooltip(e,t,n){e.addEventListener(`mouseenter`,e=>{this.tooltip.innerHTML=`<div class="tt-name">${t}</div><div class="tt-desc">${n}</div>`,this.tooltip.classList.add(`visible`),this.positionTooltip(e)}),e.addEventListener(`mousemove`,e=>this.positionTooltip(e)),e.addEventListener(`mouseleave`,()=>this.hideTooltip())}positionTooltip(e){this.tooltip.style.left=`${e.clientX+16}px`,this.tooltip.style.top=`${e.clientY+16}px`}hideTooltip(){this.tooltip.classList.remove(`visible`)}},gv=6,_v=2.2,vv=.7,yv=.5,bv=.5,xv=.08,Sv=-Math.PI*.55,Cv=[{itemId:`pistol_ammo`,min:18,max:36,weight:3},{itemId:`rifle_ammo`,min:30,max:60,weight:3},{itemId:`shotgun_ammo`,min:6,max:12,weight:2},{itemId:`medkit`,min:1,max:1,weight:1}];function wv(e){let t=Cv.reduce((e,t)=>e+t.weight,0),n=[];for(let r=0;r<e;r++){let e=Math.random()*t,r=Cv.find(t=>(e-=t.weight)<=0)??Cv[0],i=r.min+Math.floor(Math.random()*(r.max-r.min+1));n.push({itemId:r.itemId,quantity:i})}return n}var Tv=class{mesh;inventory;position;lidPivot;bodyMat;lidMat;opened=!1;highlighted=!1;constructor(e,t){this.position=e.clone(),this.inventory=new tv(gv,t);let n=new Z({color:5980967,roughness:.85}),r=new Z({color:9079434,roughness:.5,metalness:.6});this.bodyMat=n,this.lidMat=n.clone();let i=new q,a=new J(new Y(vv,yv,bv),this.bodyMat);a.position.y=yv/2,a.castShadow=!0,a.receiveShadow=!0,i.add(a);let o=new q;o.position.set(0,yv,-.5/2),i.add(o);let s=new J(new Y(.74,xv,.54),this.lidMat);s.position.set(0,xv/2,bv/2),s.castShadow=!0,o.add(s),this.lidPivot=o;for(let[e,t]of[[-.31999999999999995,-.22],[vv/2-.03,-.22],[-.31999999999999995,bv/2-.03],[vv/2-.03,bv/2-.03]]){let n=new J(new Y(.05,yv,.05),r);n.position.set(e,yv/2,t),i.add(n)}i.position.copy(this.position),this.mesh=i}distanceTo(e){let t=e.x-this.position.x,n=e.z-this.position.z;return Math.hypot(t,n)}isInRange(e){return this.distanceTo(e)<=_v}setHighlighted(e){if(this.highlighted===e)return;this.highlighted=e;let t=e?4862480:0,n=e?.9:0;this.bodyMat.emissive.setHex(t),this.bodyMat.emissiveIntensity=n,this.lidMat.emissive.setHex(t),this.lidMat.emissiveIntensity=n}open(){this.opened||(this.opened=!0,this.lidPivot.rotation.x=Sv)}get isOpened(){return this.opened}},Ev=[`Marta`,`Diego`,`Elena`,`Iván`,`Sofía`,`Rubén`,`Lucia`,`Hugo`],Dv=new Y(.19,.42,.19),Ov=new Y(.46,.56,.28),kv=new Y(.36,.36,.36),Av=new Y(.38,.1,.38),jv=new Y(.16,.4,.16),Mv=new Y(.16,.1,.03),Nv=new Y(.02,.06,.012),Pv=new Y(.06,.02,.012),Fv=[{skin:13081202,shirt:8014394,pants:3949906,hair:2826006},{skin:11105882,shirt:4872766,pants:2764083,hair:1315344},{skin:14726287,shirt:6055024,pants:3352863,hair:7031338}],Iv={thigh:-1.9,shin:1.7,torso:.75,head:.35,arm:-1.6},Lv={thigh:-.06,shin:.08,torso:-.08,head:-.05,arm:-.18},Rv={thigh:-.3,shin:.25,torso:1.35,head:.5,arm:-.6},zv={thigh:-1.4,shin:1.5,torso:.12,head:.05,arm:-.35},Bv=class{group;name;position;state=`wounded`;highlighted=!1;bodyMats;torsoPivot;headPivot;thighL;thighR;shinL;shinR;armL;armR;idleTime=Math.random()*10;shiverPhase=Math.random()*Math.PI*2;constructor(e){this.position=e.clone(),this.name=Ev[Math.floor(Math.random()*Ev.length)];let t=Fv[Math.floor(Math.random()*Fv.length)],n=new Z({color:t.skin,roughness:.85}),r=new Z({color:t.shirt,roughness:.8}),i=new Z({color:t.pants,roughness:.8}),a=new Z({color:t.hair,roughness:.9}),o=new Z({color:15262420,roughness:.8}),s=new Z({color:11809063,roughness:.6,emissive:3804424,emissiveIntensity:.5});this.bodyMats=[n,r,i,a],this.group=new q,this.group.position.copy(this.position);let c=.42,l=e=>{let t=new q;t.position.set(e*.12,c,0);let n=new J(Dv,i);n.position.y=-.21,n.castShadow=!0,t.add(n);let r=new q;r.position.set(0,-.42,0),t.add(r);let a=new J(Dv,i);return a.position.y=-.21,a.castShadow=!0,r.add(a),{thigh:t,shin:r}},u=l(-1),d=l(1);this.thighL=u.thigh,this.shinL=u.shin,this.thighR=d.thigh,this.shinR=d.shin,this.group.add(this.thighL,this.thighR),this.torsoPivot=new q,this.torsoPivot.position.set(0,c,0),this.group.add(this.torsoPivot);let f=new J(Ov,r);f.position.y=.28,f.castShadow=!0,this.torsoPivot.add(f);let p=new J(Mv,o);p.position.set(.1,.2,.145),this.torsoPivot.add(p);let m=new J(Nv,s);m.position.set(0,0,.016),p.add(m);let h=new J(Pv,s);h.position.set(0,0,.016),p.add(h),this.headPivot=new q,this.headPivot.position.set(0,.62,0),this.torsoPivot.add(this.headPivot);let g=new J(kv,n);g.castShadow=!0,this.headPivot.add(g);let _=new J(Av,a);_.position.y=.2,this.headPivot.add(_);let v=e=>{let t=new q;t.position.set(e*.29,.42,.02);let r=new J(jv,n);return r.position.y=-.2,r.castShadow=!0,t.add(r),t};this.armL=v(-1),this.armR=v(1),this.torsoPivot.add(this.armL,this.armR),this.setWoundedPose()}setWoundedPose(){this.setPoseBlend(Iv,Iv,0)}setPoseBlend(e,t,n){let r=e.thigh+(t.thigh-e.thigh)*n,i=e.shin+(t.shin-e.shin)*n;this.thighL.rotation.x=r,this.thighR.rotation.x=r,this.shinL.rotation.x=i,this.shinR.rotation.x=i,this.torsoPivot.rotation.x=e.torso+(t.torso-e.torso)*n,this.headPivot.rotation.x=e.head+(t.head-e.head)*n;let a=e.arm+(t.arm-e.arm)*n;this.armL.rotation.x=a,this.armR.rotation.x=a}distanceTo(e){let t=e.x-this.position.x,n=e.z-this.position.z;return Math.hypot(t,n)}isInRange(e){return this.state===`wounded`&&this.distanceTo(e)<=2.2}setHighlighted(e){if(this.highlighted===e)return;this.highlighted=e;let t=e?2767378:0,n=e?.7:0;for(let e of this.bodyMats)e.emissive.setHex(t),e.emissiveIntensity=n}startCarry(){this.state=`carried`,this.setHighlighted(!1)}hideCarried(){this.group.visible=!1}completeRescue(e){this.state=`rescued`,this.position.copy(e),this.group.position.copy(e),this.group.scale.setScalar(1),this.setPoseBlend(zv,zv,0),this.group.visible=!0}update(e){if(this.state!==`carried`)if(this.idleTime+=e,this.state===`wounded`){let e=Math.sin(this.idleTime*5+this.shiverPhase)*.025;this.torsoPivot.rotation.x=Iv.torso+e,this.headPivot.rotation.x=Iv.head+e*.6}else{let e=Math.sin(this.idleTime*1.1)*.04;this.torsoPivot.rotation.x=zv.torso+e,this.headPivot.rotation.x=zv.head+e*.5}}dispose(){for(let e of this.bodyMats)e.dispose()}},Vv=class{group;position;ringMat;beamMat;time=0;constructor(e){this.position=e.clone(),this.group=new q,this.group.position.copy(this.position),this.ringMat=new zr({color:5033834,transparent:!0,opacity:.5,side:2,depthWrite:!1});let t=new J(new ji(2.88,3,48),this.ringMat);t.rotation.x=-Math.PI/2,t.position.y=.03,this.group.add(t),this.beamMat=new zr({color:5033834,transparent:!0,opacity:.1,side:2,depthWrite:!1});let n=new J(new X(3*.94,3*.94,6,32,1,!0),this.beamMat);n.position.y=3,this.group.add(n)}isInRange(e){let t=e.x-this.position.x,n=e.z-this.position.z;return Math.hypot(t,n)<=3}update(e){this.time+=e,this.ringMat.opacity=.42+Math.sin(this.time*2)*.14,this.beamMat.opacity=.08+Math.sin(this.time*1.3)*.04}},Hv=2.4,Uv=2,Wv=2,Gv=.42,Kv=.14,qv=Uv*.92,Jv=3.2,Yv=class{group;position;screenMesh;bodyMat;door;doorProgress=0;opening=!1;highlighted=!1;constructor(e){this.position=e.clone(),this.group=new q,this.group.position.copy(this.position);let t=new Z({color:1513500,roughness:.5,metalness:.65}),n=new Z({color:3816770,roughness:.4,metalness:.75}),r=new Z({color:795174,roughness:.15,metalness:.3,transparent:!0,opacity:.55}),i=new Z({color:2303016,roughness:.45,metalness:.7}),a=new Z({color:9080728,roughness:.35,metalness:.8}),o=new Z({color:3729151,emissive:2213856,emissiveIntensity:1.4,roughness:.3}),s=new Z({color:855568,roughness:.4,metalness:.6});this.bodyMat=t;let c=.05,l=new J(new Y(Uv,Wv,c),t);l.position.set(0,Wv/2,-.185),this.group.add(l);let u=new J(new Y(c,Wv,Gv),t);u.position.set(-.975,Wv/2,0),this.group.add(u);let d=u.clone();d.position.x=Uv/2-c/2,this.group.add(d);let f=new J(new Y(Uv,c,Gv),t);f.position.set(0,Wv-c/2,0),this.group.add(f);let p=f.clone();p.position.y=c/2,this.group.add(p);let m=new J(new Y(Uv-.1,Wv-.16,.04),i);m.position.set(0,Wv/2,-.15999999999999998),this.group.add(m);let h=new J(new Y(Uv-.16,.03,.03),o);h.position.set(0,Wv-.18,-.09),this.group.add(h);let g=Uv-.24,_=Wv-.5,v=1.05,y=new J(new Y(1.84,1.58,.04),s);y.position.set(0,v,-.12),this.group.add(y);let b=new J(new Ai(g,_),new zr({color:528402,side:2}));b.position.set(0,v,-.09999999999999999),this.group.add(b),this.screenMesh=b;let x=new J(new Y(2.12,Kv,.56),n);x.position.set(0,2.07,-.01),this.group.add(x);let S=new q;S.position.set(0,Wv/2,Gv/2),this.group.add(S);let C=new J(new Y(Uv-.04,Wv-.04,.035),i);S.add(C);let w=new J(new Y(Uv-.16,Wv-.16,.02),r);w.position.z=.03,S.add(w);let T=new J(new Y(.03,.34,.03),a);T.position.set(Uv/2-.14,0,.045),S.add(T),this.door=S}setScreenTexture(e){let t=this.screenMesh.material;t.map=e,t.color.setHex(16777215),t.needsUpdate=!0}distanceTo(e){let t=e.x-this.position.x,n=e.z-this.position.z;return Math.hypot(t,n)}isInRange(e){return this.distanceTo(e)<=Hv}setHighlighted(e){this.highlighted!==e&&(this.highlighted=e,this.bodyMat.emissive.setHex(e?1194562:0),this.bodyMat.emissiveIntensity=e?.6:0)}open(){this.opening=!0}close(){this.opening=!1}get isFullyOpen(){return this.doorProgress>.97}get isFullyClosed(){return this.doorProgress<.03}update(e){let t=+!!this.opening;this.doorProgress+=(t-this.doorProgress)*Math.min(1,Jv*e),this.door.position.x=qv*this.doorProgress}},Xv=(e,t,n,r,i,a)=>{e.fillStyle=a;let o=i*.16,s=n+i*.42;e.fillRect(t+r*.06,s,r*.72,o),e.fillRect(t+r*.74,s+o*.15,r*.16,o*.4),iy(e,[[t+r*.06,s+o],[t,n+i*.78],[t+r*.02,n+i*.85],[t+r*.24,s+o]]),iy(e,[[t+r*.38,s+o],[t+r*.36,n+i*.88],[t+r*.48,n+i*.88],[t+r*.5,s+o]]),iy(e,[[t+r*.56,s+o],[t+r*.54,n+i*.94],[t+r*.66,n+i*.94],[t+r*.64,s+o]])},Zv=(e,t,n,r,i,a)=>{e.fillStyle=a;let o=i*.2,s=n+i*.4;e.fillRect(t+r*.1,s,r*.68,o),e.fillRect(t+r*.14,s+o*.85,r*.42,o*.55),iy(e,[[t+r*.1,s+o],[t,n+i*.82],[t+r*.04,n+i*.88],[t+r*.3,s+o]]),iy(e,[[t+r*.4,s+o],[t+r*.38,n+i*.9],[t+r*.5,n+i*.9],[t+r*.52,s+o]])},Qv=(e,t,n,r,i,a)=>{e.fillStyle=a;let o=i*.22,s=n+i*.42;e.fillRect(t+r*.22,s,r*.5,o),e.fillRect(t+r*.7,s+o*.2,r*.1,o*.6),e.lineWidth=Math.max(2,i*.05),e.strokeStyle=a,e.beginPath(),e.moveTo(t+r*.22,s+o*.3),e.lineTo(t,n+i*.7),e.stroke(),iy(e,[[t+r*.3,s+o],[t+r*.26,n+i*.92],[t+r*.42,n+i*.92],[t+r*.42,s+o]]),iy(e,[[t+r*.46,s+o],[t+r*.44,n+i*.86],[t+r*.56,n+i*.86],[t+r*.54,s+o]])},$v=(e,t,n,r,i,a)=>{e.fillStyle=a;let o=i*.2,s=n+i*.38;e.fillRect(t+r*.28,s,r*.5,o),e.fillRect(t+r*.76,s+o*.15,r*.08,o*.7),iy(e,[[t+r*.3,s+o],[t+r*.26,n+i*.92],[t+r*.44,n+i*.92],[t+r*.48,s+o]]),iy(e,[[t+r*.48,s+o],[t+r*.46,n+i*.6],[t+r*.58,n+i*.6],[t+r*.58,s+o]])},ey=(e,t,n,r,i,a)=>{e.fillStyle=a;let o=i*.16,s=n+i*.4;e.fillRect(t+r*.5,s,r*.32,o),e.beginPath(),e.arc(t+r*.42,s+o/2,i*.16,0,Math.PI*2),e.fill(),iy(e,[[t+r*.36,s+o*.7],[t+r*.24,n+i*.92],[t+r*.4,n+i*.92],[t+r*.44,s+o*.7]])},ty=(e,t,n,r,i,a)=>{e.fillStyle=a;let o=n+i*.5;iy(e,[[t+r*.3,o-i*.08],[t+r*.92,o-i*.02],[t+r*.3,o+i*.1]]),e.fillRect(t+r*.08,o-i*.07,r*.24,i*.16)},ny=(e,t,n,r,i,a)=>{e.fillStyle=a;let o=n+i*.5;iy(e,[[t+r*.32,o-i*.16],[t+r*.94,o-i*.03],[t+r*.94,o+i*.1],[t+r*.32,o+i*.16]]),e.fillRect(t+r*.08,o-i*.09,r*.26,i*.2)},ry=(e,t,n,r,i,a)=>{e.fillStyle=a;let o=n+i*.5;iy(e,[[t+r*.06,o-i*.05],[t+r*.55,o-i*.09],[t+r*.95,o-i*.2],[t+r*.97,o],[t+r*.95,o+i*.2],[t+r*.55,o+i*.09],[t+r*.06,o+i*.05]])};function iy(e,t){e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);e.closePath(),e.fill()}var ay=[{title:`Arma principal`,cards:[{slot:`rifle`,name:`Fusil`,icon:Xv},{slot:`shotgun`,name:`Escopeta`,icon:Zv,price:350},{slot:null,name:`Subfusil`,icon:Qv}]},{title:`Arma secundaria`,cards:[{slot:`pistol`,name:`Pistola`,icon:$v},{slot:null,name:`Revólver`,icon:ey}]},{title:`Cuerpo a cuerpo`,cards:[{slot:`knife`,name:`Cuchillo`,icon:ty},{slot:null,name:`Machete`,icon:ny},{slot:null,name:`Bate`,icon:ry}]}],oy=1200,sy=1024,cy=76,ly=250,uy=220,dy=210,fy=320,py=dy+ay.length*fy+60,my=6,hy=uy*.56,gy=class{texture;canvas;ctx;content;contentCtx;cardRects=[];hoveredIndex=-1;equippedSlot=null;scrollY=0;purchased=new Set;money=0;constructor(){this.canvas=document.createElement(`canvas`),this.canvas.width=oy,this.canvas.height=sy,this.ctx=this.canvas.getContext(`2d`),this.texture=new Si(this.canvas),this.texture.colorSpace=Ie,this.content=document.createElement(`canvas`),this.content.width=oy,this.content.height=py,this.contentCtx=this.content.getContext(`2d`),this.layout(),this.drawContent()}get maxScroll(){return Math.max(0,py-sy)}scrollBy(e){let t=Math.max(0,Math.min(this.maxScroll,this.scrollY+e));t!==this.scrollY&&(this.scrollY=t,this.blit())}setEquipped(e){this.equippedSlot=e,this.hoveredIndex=-1,this.scrollY=0,this.drawContent()}setMoney(e){e!==this.money&&(this.money=e,this.drawContent())}markPurchased(e){this.purchased.add(e),this.drawContent()}hitTest(e,t){let n=e*oy,r=(1-t)*sy+this.scrollY;for(let e=0;e<this.cardRects.length;e++){let t=this.cardRects[e];if(n>=t.x&&n<=t.x+t.w&&r>=t.y&&r<=t.y+t.h)return e}return-1}setHovered(e){this.hoveredIndex!==e&&(this.hoveredIndex=e,this.drawContent())}isOwned(e){return e.price===void 0||this.purchased.has(e.slot)}get hoveredSlot(){let e=this.cardRects[this.hoveredIndex];return e&&!e.locked&&this.isOwned(e)?e.slot:null}get hoveredPurchase(){let e=this.cardRects[this.hoveredIndex];return!e||e.locked||e.slot===null||e.price===void 0||this.purchased.has(e.slot)||this.money<e.price?null:{slot:e.slot,price:e.price}}layout(){this.cardRects=[];let e=dy;for(let t of ay){let n=cy;for(let r of t.cards)this.cardRects.push({x:n,y:e,w:ly,h:uy,slot:r.slot,locked:r.slot===null,price:r.price}),n+=284;e+=fy}}drawContent(){let e=this.contentCtx;e.clearRect(0,0,oy,py),e.fillStyle=`#060a0c`,e.fillRect(0,0,oy,py),e.textBaseline=`top`,e.fillStyle=`#38e6ff`,e.font=`900 56px "Segoe UI", Arial, sans-serif`,e.fillText(`ARSENAL`,cy,50),e.fillStyle=`rgba(255, 255, 255, 0.55)`,e.font=`600 20px "Segoe UI", Arial, sans-serif`,e.fillText(`Mueve el cursor y haz click para equipar o comprar · E para salir`,cy,128);let t=0,n=dy;for(let r of ay){e.fillStyle=`rgba(255, 255, 255, 0.6)`,e.font=`800 18px "Segoe UI", Arial, sans-serif`,e.fillText(r.title.toUpperCase(),cy,n-36);for(let e of r.cards){let n=this.cardRects[t],r=n.slot!==null&&n.slot===this.equippedSlot,i=t===this.hoveredIndex&&!n.locked;this.drawCard(n,e,r,i),t++}n+=fy}this.blit()}blit(){let e=this.ctx;if(e.clearRect(0,0,oy,sy),e.drawImage(this.content,0,this.scrollY,oy,sy,0,0,oy,sy),e.strokeStyle=`rgba(56, 230, 255, 0.35)`,e.lineWidth=4,e.strokeRect(8,8,oy-16,sy-16),this.maxScroll>0){let t=sy-32,n=Math.max(40,sy/py*t),r=16+(t-n)*(this.scrollY/this.maxScroll),i=oy-my-10;e.fillStyle=`rgba(255, 255, 255, 0.08)`,e.fillRect(i,16,my,t),e.fillStyle=`rgba(56, 230, 255, 0.55)`,e.fillRect(i,r,my,n)}this.texture.needsUpdate=!0}drawCard(e,t,n,r){let i=this.contentCtx,a=e.price!==void 0&&!this.purchased.has(e.slot),o=a&&this.money>=e.price,s=n?`rgba(255, 209, 92, 0.14)`:a?r&&o?`rgba(124, 255, 158, 0.16)`:`rgba(255, 255, 255, 0.05)`:r?`rgba(56, 230, 255, 0.16)`:`rgba(255, 255, 255, 0.05)`,c=n?`#ffd15c`:a?o?r?`#7cff9e`:`rgba(124, 255, 158, 0.45)`:`rgba(255, 255, 255, 0.15)`:r?`#38e6ff`:e.locked?`rgba(255, 255, 255, 0.12)`:`rgba(255, 255, 255, 0.3)`;i.fillStyle=s,i.fillRect(e.x,e.y,e.w,e.h),i.strokeStyle=c,i.lineWidth=n||r?3:1.5,i.strokeRect(e.x+1.5,e.y+1.5,e.w-3,e.h-3);let l=n?`rgba(255, 209, 92, 0.85)`:e.locked?`rgba(255, 255, 255, 0.22)`:`rgba(255, 255, 255, 0.8)`;t.icon(i,e.x+e.w*.06,e.y+e.h*.06,e.w*.88,hy,l);let u=e.y+hy;if(i.fillStyle=e.locked?`rgba(255, 255, 255, 0.32)`:`#fff`,i.font=`700 28px "Segoe UI", Arial, sans-serif`,i.fillText(t.name,e.x+22,u+22),i.font=`800 16px "Segoe UI", Arial, sans-serif`,a?(i.fillStyle=o?`#7cff9e`:`rgba(255, 140, 140, 0.7)`,i.fillText(`$${e.price}`,e.x+22,u+58)):(i.fillStyle=n?`#ffd15c`:e.locked?`rgba(255, 255, 255, 0.35)`:r?`#38e6ff`:`rgba(255, 255, 255, 0.5)`,i.fillText(e.locked?`BLOQUEADA`:n?`EQUIPADA`:`EQUIPAR`,e.x+22,u+58)),e.locked){let t=e.x+e.w-50,n=e.y+20;i.strokeStyle=`rgba(255, 255, 255, 0.28)`,i.lineWidth=3,i.strokeRect(t,n+11,26,20),i.beginPath(),i.arc(t+13,n+11,11,Math.PI,0,!1),i.stroke()}}},_y=100,vy=2.5,yy=78,by=62,xy=10,Sy=3.5,Cy={shambler:10,runner:14,brute:35},wy=75,Ty=15,Ey=[{key:`6`,label:`Recargar munición`,price:40},{key:`7`,label:`Botiquín (+50 HP)`,price:35},{key:`8`,label:`+20 HP máxima`,price:120}],Dy=document.querySelector(`#app`),Oy=mu(),ky=new sg(Dy);ky.onPlay(e=>{if(!e.startsWith(`custom:`)){ky.hide(),jy();return}let t=$h(e.slice(ag.length));if(!t){window.alert(`Ese mapa ya no está guardado.`);return}ky.hide(),jy(t)});var Ay=null;ky.onEditor(()=>{Ay||(Ay=new H_(Dy),Ay.onExit(()=>{Ay?.hide(),ky.show()}),Ay.onPlay(e=>{Ay?.hide(),ky.hide(),jy(e)})),ky.hide(),Ay.show()});function jy(e){let t=new Pn;t.background=new jn(197380),t.fog=new Nn(197380,4,66);let n=new xa(yy,window.innerWidth/window.innerHeight,.05,100);t.add(n);let r=new Ca(16773840,110,24,Tt.degToRad(27),.5,1.7);r.position.set(.55,-.45,-1.8),n.add(r);let i=new wn;i.position.set(.55,-.45,-8),n.add(i),r.target=i;let a=!0;function o(e){a=e,r.visible=e}let s=new yl({antialias:!0}),c=Math.min(window.devicePixelRatio,2),l=Math.min(1,c);s.setPixelRatio(l),s.shadowMap.enabled=!1,s.toneMapping=7,s.toneMappingExposure=1.9,Dy.appendChild(s.domElement);function u(){let e=window.visualViewport?.width??window.innerWidth,t=window.visualViewport?.height??window.innerHeight;n.aspect=e/t,n.updateProjectionMatrix(),s.setSize(e,t),window.scrollTo(0,0)}u(),window.visualViewport?.addEventListener(`resize`,u),window.visualViewport?.addEventListener(`scroll`,u);let d=new W_(Dy),f=.6,p=.15,m=[],h=0,g=0;function _(e){let t=Math.max(f,Math.min(c,+e.toFixed(2)));Math.abs(t-l)<.01||(l=t,s.setPixelRatio(l),u())}function v(e,t){if(m.push(e),m.length<20||(m.length>20&&m.shift(),t-h<1500))return;let n=[...m].sort((e,t)=>e-t),r=n[Math.floor(n.length/2)];if(r>22&&l>f){_(l-p),h=t,m.length=0;return}r<13&&l<c&&(_(l+p),h=t,m.length=0)}let y=e?$_(e):Il();t.add(y.group),y.sceneFog&&(t.background=new jn(y.sceneFog.color),t.fog=new Nn(y.sceneFog.color,y.sceneFog.near,y.sceneFog.far));let b=[[-9,0,7],[9,0,7],[-8,0,-8],[9,0,-7]],x=(y.cratePositions??b).map(([e,n,r])=>{let i=new Tv(new K(e,n,r),wv(2+Math.floor(Math.random()*2)));return t.add(i.mesh),y.collisionBoxes.push({minX:e-.38,maxX:e+.38,minZ:r-.28,maxZ:r+.28}),i}),S=new Vv(new K(y.playerStart.x,0,y.playerStart.z));t.add(S.group);let C=[1.5,1.1],w=(y.cratePositions??b).slice(0,2).map(([e,n,r])=>{let i=new Bv(new K(e+C[0],n,r+C[1]));return t.add(i.group),i}),T=new Yv(new K(y.playerStart.x+4.2,0,y.playerStart.z-1.5));t.add(T.group),y.collisionBoxes.push({minX:T.position.x-1.25,maxX:T.position.x+1.25,minZ:T.position.z-.25,maxZ:T.position.z+.25});let E=new tv(16);E.addItem(`pistol_ammo`,60),E.addItem(`rifle_ammo`,90);let D=new Ih(Dy);D.setShopItems(Ey),Oy&&(D.setOverlayInstructions(`Joystick mover · Arrastra para mirar · Botón rojo dispara y apunta · Toca un arma para cambiar · ✚ mantén para curar heridos`),document.body.classList.add(`mobile-layout`));let O=_y,k=_y,A=0,j=!1,ee=!1,M=null,te=null,ne=null,N=null,re=!1,P=`idle`,ie=0,F=null,ae=`pistol`,oe=null,se=`idle`,I=0,ce=null,le=`pistol`,L=`idle`,ue=0,de=`pistol`,fe=`pistol`,pe=new K,me=0,he=0,ge=new K,_e=0,ve=new G(0,0),R=new lu(n,s.domElement,y.collisionBoxes,y.collisionCircles,y.bounds,y.playerStart,y.groundHeightAt,e=>{if(!e){if(vt=!1,yt=!1,bt=!1,ee||L!==`idle`)return;!j&&!Oy&&(D.showOverlay(`PAUSADO`,`Click para continuar`),D.showSettingsButton(!0),D.setSensitivityDisplay(R.sensitivityValue))}}),ye=new kd(n,R,E),be=new af(n,R,E),xe=new Pf(n,R,E),Se=new pp(n),Ce=new Fp(n),we=new em(n),Te=new q,Ee=gu();Ee.position.set(-.16,.02,0);let De=gu();De.position.set(.1,-.02,.04),Te.add(Ee,De),n.add(Te),Te.visible=!1;let Oe=new K,ke=new K,z=new K,Ae=new K,je=new K,Me=new K,B=new K,Ne=[],V=new K,Pe=.03;function Fe(){let e=Qp(),{group:r}=e;$p(e),n.getWorldDirection(V),r.position.set(n.position.x+V.x*.22,n.position.y-.32,n.position.z+V.z*.22),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),r.scale.setScalar(1.3),t.add(r);let i={group:r,velocity:new K(V.x*1.8+(Math.random()-.5)*.6,1.5,V.z*1.8+(Math.random()-.5)*.6),spin:new K(6+Math.random()*4,4+Math.random()*4,5+Math.random()*3),timer:Ty};return Ne.push(i),i}function Ie(e){for(let n=Ne.length-1;n>=0;n--){let r=Ne[n];if(r.velocity){r.velocity.y+=-14*e,r.group.position.addScaledVector(r.velocity,e),r.group.rotation.x+=r.spin.x*e,r.group.rotation.y+=r.spin.y*e,r.group.rotation.z+=r.spin.z*e;let t=y.groundHeightAt(r.group.position.x,r.group.position.z);r.group.position.y<=t+Pe&&(r.group.position.y=t+Pe,r.group.rotation.set(0,Math.random()*Math.PI*2,0),r.velocity=null);continue}if(r.timer-=e,r.timer<1){let e=Math.max(0,r.timer);r.group.traverse(t=>{let n=t.material;if(n)for(let t of Array.isArray(n)?n:[n])t.transparent=!0,t.opacity=Math.min(t.opacity,e)})}r.timer<=0&&(t.remove(r.group),r.group.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;if(n)for(let e of Array.isArray(n)?n:[n])e.dispose()}),Ne.splice(n,1))}}let Le=new fv;Le.group.visible=!1,t.add(Le.group);let Re=new hv(Dy);Re.onUse((e,t)=>{e===`medkit`&&(O>=k||(O=Math.min(k,O+50),E.removeFromSlot(t,1),D.setHealth(O,k)))}),Re.onClose(()=>{ee=!1,wt?.setVisible(!0),!Oy&&!j&&R.lock()});function ze(e){ee=!0,vt=!1,yt=!1,bt=!1,e?.open(),D.hideInteractPrompt(),wt?.setVisible(!1),Oy||document.exitPointerLock(),Re.open(E,e?.inventory??null)}let Be=new gy;T.setScreenTexture(Be.texture);let Ve=new Oh(t,y.solidMeshes),He=new Fh(Dy),Ue=new Bm(y.bounds,y.collisionBoxes,y.collisionCircles),We=new zm(t,y.spawnPoints,y.collisionBoxes,y.collisionCircles,y.groundHeightAt,(e,t)=>{A+=Cy[e],Ve.spawnDeath(t);let r=n.position.distanceTo(t);r<Sy&&He.spawnSplatter(1-r/Sy,e===`brute`)},Ue),H=`pistol`,Ge=!0;Ge&&(Be.markPurchased(`shotgun`),E.addItem(`shotgun_ammo`,18));function Ke(e){return e===`pistol`?ye:e===`rifle`?be:e===`shotgun`?xe:e===`knife`?Se:Ce}function qe(e){H=e,ye.setActive(e===`pistol`),be.setActive(e===`rifle`),xe.setActive(e===`shotgun`),Se.setActive(e===`knife`),Ce.setActive(e===`medkit`)}qe(`pistol`);let Je=.45,U=.6,W=.8,Ye=.86;function Xe(){let e=T.screenMesh.geometry,t=Math.tan(Tt.degToRad(n.fov)/2),r=t*n.aspect,i=e.parameters.height/2/(t*Ye),a=e.parameters.width/2/(r*Ye);return Math.max(i,a)}let Ze=!1,Qe=`holster`,$e=0,et=`pistol`;function tt(e){return e*e}function nt(e){return 1+2.70158*(e-1)**3+1.70158*(e-1)**2}function rt(e){return(e<.12?-.05*Math.sin(e/.12*Math.PI):0)+Math.max(0,(e-.12)/.88)**1.7}function it(e){return 1-(1-e)*(1-e)}function at(e,t,n){let r=(t-e+Math.PI)%(Math.PI*2)-Math.PI;return r<-Math.PI&&(r+=Math.PI*2),e+r*n}function ot(e,t,n,r,i){let a=1-i;e.set(a*a*t.x+2*a*i*n.x+i*i*r.x,a*a*t.y+2*a*i*n.y+i*i*r.y,a*a*t.z+2*a*i*n.z+i*i*r.z)}function st(e){e===`shotgun`&&!Ge||Ze||e===H||P!==`idle`||se!==`idle`||L!==`idle`||(Ze=!0,Qe=`holster`,$e=0,et=e)}function ct(e){if(Ze)if($e+=e,Qe===`holster`){let e=Math.min(1,$e/Je);Ke(H).setSwitchOffset(tt(e)),e>=1&&(Ke(H).setActive(!1),H=et,Ke(H).setActive(!0),Ke(H).setSwitchOffset(1),wt?.setActiveWeapon(H),Qe=`empty`,$e=0)}else if(Qe===`empty`)$e>=.16&&(lt(H),Qe=`draw`,$e=0);else{let e=Math.min(1,$e/U);Ke(H).setSwitchOffset(1-nt(e)),e>=1&&(Ke(H).setSwitchOffset(0),Ze=!1)}}function lt(e){e===`pistol`?ye.startPresent():e===`rifle`&&be.startMount()}function ut(){Ke(ae).setActive(!0),Ke(ae).setSwitchOffset(1),lt(ae),P=`drawWeapon`,ie=0}function dt(e,t,r,i){if(P===`idle`){ne=N?null:w.find(e=>e.isInRange(n.position))??null;for(let e of w)e.setHighlighted(e===ne);ne&&re&&!Ze&&!N&&L===`idle`&&(F=ne,ae=H,P=`holsterWeapon`,ie=0,vt=!1,yt=!1,bt=!1),we.update(e,!1,t,r,i);return}if(ne=null,ie+=e,P===`holsterWeapon`){let n=Math.min(1,ie/Je);Ke(ae).setSwitchOffset(tt(n)),we.update(e,!1,t,r,i),n>=1&&(Ke(ae).setActive(!1),we.setActive(!0),we.setSwitchOffset(1),P=`drawSyringe`,ie=0)}else if(P===`drawSyringe`){let n=Math.min(1,ie/U);we.setSwitchOffset(1-nt(n)),we.update(e,!1,t,r,i),n>=1&&(we.setSwitchOffset(0),P=`applying`,ie=0)}else if(P===`applying`){let a=!!F&&F.isInRange(n.position),o=a&&re;we.update(e,o,t,r,i)?(F&&(F.startCarry(),N=F,R.setCarrying(!0)),P=`dropSyringe`,ie=0):a||(P=`stowSyringe`,ie=0)}else if(P===`dropSyringe`){let n=Math.min(1,ie/.14);we.setSwitchOffset(tt(n)),we.update(e,!1,t,r,i),n>=1&&(we.setActive(!1),we.reset(),oe=Fe(),P=`syringeFalling`,ie=0)}else if(P===`syringeFalling`)(!oe||!oe.velocity)&&(oe=null,F&&Oe.copy(F.group.position),R.addRecoilKick(-.08),Te.visible=!0,P=`pickup`,ie=0);else if(P===`stowSyringe`){let n=Math.min(1,ie/Je);we.setSwitchOffset(tt(n)),we.update(e,!1,t,r,i),n>=1&&(we.setActive(!1),we.reset(),ut())}else if(P===`pickup`){let e=.16,t=.78,r=Math.min(1,ie/1.9),i=Math.min(1,r/e),a=Math.min(1,Math.max(0,r-e)/(t-e)),o=Math.min(1,Math.max(0,r-t)/(1-t)),s=nt(i),c=rt(a),l=nt(o),u=a>0&&a<1?Math.sin(ie*26)*.012*(1-c):0;if(Te.position.set(.05*l+u,-.85+.7*s+.6*c-.2*l,-.72+.22*s+.35*c+.5*l),Te.rotation.x=.85-.8*s-.2*c-.9*l,F){let i=R.facingYaw;ke.set(n.position.x-Math.sin(i)*.55,n.position.y-.18,n.position.z-Math.cos(i)*.55),z.set(n.position.x+Math.sin(i)*.22,n.position.y-.5,n.position.z+Math.cos(i)*.22),Ae.set(ke.x,Oe.y,ke.z),r<=e?(F.group.position.lerpVectors(Oe,Ae,s),F.group.rotation.set(0,i,0),F.group.scale.setScalar(1),F.setPoseBlend(Iv,Iv,0)):r<=t?(F.group.position.lerpVectors(Ae,ke,c),F.group.position.x+=Math.cos(i)*u,F.group.position.z-=Math.sin(i)*u,F.group.rotation.set(0,i,0),F.group.scale.setScalar(1),F.setPoseBlend(Iv,Lv,Tt.clamp(c,0,1))):(je.set((ke.x+z.x)/2+Math.cos(i)*.6,Math.max(ke.y,z.y)+.3,(ke.z+z.z)/2-Math.sin(i)*.6),ot(F.group.position,ke,je,z,l),F.group.rotation.x=l*1.3,F.group.rotation.y=i,F.group.scale.setScalar(Math.max(.05,1-l*.82)),F.setPoseBlend(Lv,Rv,Tt.clamp(l,0,1)))}r>=1&&(Te.visible=!1,F?.hideCarried(),ut())}else if(P===`drawWeapon`){let e=Math.min(1,ie/U);Ke(ae).setSwitchOffset(1-nt(e)),e>=1&&(Ke(ae).setSwitchOffset(0),P=`idle`,ie=0,F=null)}}function ft(e){if(N&&se===`idle`&&L===`idle`&&S.isInRange(n.position)){ce=N,le=H;let e=R.facingYaw;ce.group.position.set(n.position.x+Math.sin(e)*.22,n.position.y-.5,n.position.z+Math.cos(e)*.22),ce.group.rotation.set(1.3,e,0),ce.group.scale.setScalar(.18),ce.group.visible=!0,se=`holsterWeapon`,I=0}if(se!==`idle`){if(I+=e,se===`holsterWeapon`){let e=Math.min(1,I/Je);Ke(le).setSwitchOffset(tt(e)),e>=1&&(Ke(le).setActive(!1),Te.visible=!0,se=`takeFromBack`,I=0)}else if(se===`takeFromBack`){let e=Math.min(1,I/.3),t=nt(e);Te.position.set(.04*t,-.15+.1*t,-.1-.2*t),Te.rotation.x=-.25-.35*t,e>=1&&(se=`bringFront`,I=0)}else if(se===`bringFront`){let e=Math.min(1,I/.55),t=nt(e);if(Te.position.set(.04*(1-t),-.05-.5*t,-.3-.42*t),Te.rotation.x=-.6+.75*t,ce){let e=R.facingYaw;z.set(n.position.x+Math.sin(e)*.22,n.position.y-.5,n.position.z+Math.cos(e)*.22),ke.set(n.position.x-Math.sin(e)*.55,n.position.y-.18,n.position.z-Math.cos(e)*.55),je.set((ke.x+z.x)/2+Math.cos(e)*.6,Math.max(ke.y,z.y)+.3,(ke.z+z.z)/2-Math.sin(e)*.6),ot(ce.group.position,z,je,ke,t),ce.group.rotation.x=1.3*(1-t),ce.group.rotation.y=e,ce.group.scale.setScalar(.18+.82*t),ce.setPoseBlend(Rv,Lv,Tt.clamp(t,0,1))}if(e>=1){if(ce){Me.copy(ce.group.position);let e=R.facingYaw,t=n.position.x-Math.sin(e)*.6,r=n.position.z-Math.cos(e)*.6;B.set(t,y.groundHeightAt(t,r),r)}se=`sitDown`,I=0}}else if(se===`sitDown`){let e=Math.min(1,I/.75),t=1-(1-e)**2;Te.position.set(0,-.05-.55*t,-.72+.1*t),Te.rotation.x=.15+.55*t,ce&&(ce.group.position.lerpVectors(Me,B,t),ce.group.rotation.y=R.facingYaw,ce.setPoseBlend(Lv,zv,t)),e>=1&&(se=`release`,I=0)}else if(se===`release`){let e=Math.min(1,I/.22);Te.rotation.x=.7-.5*e,Te.position.y=-.6+.3*e,e>=1&&(Te.visible=!1,ce?.completeRescue(B),Ke(le).setActive(!0),Ke(le).setSwitchOffset(1),lt(le),se=`drawWeapon`,I=0)}else if(se===`drawWeapon`){let e=Math.min(1,I/U);Ke(le).setSwitchOffset(1-nt(e)),e>=1&&(Ke(le).setSwitchOffset(0),A+=wy,D.setMoney(A),N=null,R.setCarrying(!1),se=`idle`,I=0,ce=null)}}}function pt(){de=H,fe=H,L=`holsterWeapon`,ue=0,vt=!1,yt=!1,bt=!1}function mt(){T.close(),D.hideInteractPrompt(),D.setCabinetBrowsing(!1),!Oy&&!j&&R.lock(),L=`closing`,ue=0}function ht(){if(L!==`browsing`)return!1;let e=Be.hoveredPurchase;if(e)return A-=e.price,D.setMoney(A),e.slot===`shotgun`&&(Ge=!0,E.addItem(`shotgun_ammo`,18),wt?.setWeaponLocked(`shotgun`,!1)),Be.markPurchased(e.slot),!0;let t=Be.hoveredSlot;return t?(fe=t,mt(),!0):!1}function gt(e){if(L!==`idle`){if(ue+=e,L===`holsterWeapon`){let e=Math.min(1,ue/Je);if(Ke(de).setSwitchOffset(tt(e)),e>=1){Ke(de).setActive(!1),T.open(),pe.copy(n.position),me=n.rotation.y,he=n.rotation.x,T.screenMesh.getWorldPosition(ge);let e=ge.y;T.screenMesh.getWorldDirection(Nt),Nt.y=0,Nt.lengthSq()<1e-6&&Nt.set(0,0,1),Nt.normalize(),ge.addScaledVector(Nt,Xe()),ge.y=e,_e=Math.atan2(Nt.x,Nt.z),L=`opening`,ue=0}}else if(L===`opening`){let e=it(Math.min(1,ue/W));Pt.lerpVectors(pe,ge,e),R.setCameraOverride({position:Pt.clone(),yaw:at(me,_e,e),pitch:he*(1-e)}),T.isFullyOpen&&(R.setCameraOverride({position:ge.clone(),yaw:_e,pitch:0}),Be.setEquipped(fe===`medkit`?null:fe),Be.setMoney(A),ve.set(0,0),D.setCabinetBrowsing(!0),Oy||document.exitPointerLock(),L=`browsing`,ue=0)}else if(L===`browsing`){n.updateMatrixWorld(),Be.setMoney(A),Ft.setFromCamera(ve,n);let e=Ft.intersectObject(T.screenMesh,!1)[0];Be.setHovered(e?.uv?Be.hitTest(e.uv.x,e.uv.y):-1)}else if(L===`closing`){let e=it(Math.min(1,ue/W));Pt.lerpVectors(ge,R.eyePosition,e),R.setCameraOverride({position:Pt.clone(),yaw:at(_e,R.facingYaw,e),pitch:R.lookPitch*e}),T.isFullyClosed&&(R.setCameraOverride(null),Ke(fe).setActive(!0),Ke(fe).setSwitchOffset(1),lt(fe),H=fe,wt?.setActiveWeapon(H),L=`drawWeapon`,ue=0)}else if(L===`drawWeapon`){let e=Math.min(1,ue/U);Ke(fe).setSwitchOffset(1-nt(e)),e>=1&&(Ke(fe).setSwitchOffset(0),L=`idle`,ue=0)}}}function _t(e,t){let n=s.domElement.getBoundingClientRect();ve.x=(e-n.left)/n.width*2-1,ve.y=-((t-n.top)/n.height*2-1)}let vt=!1,yt=!1,bt=!1;function xt(){vt=!0,yt=!0}function St(){vt=!1}function Ct(e){if(We.state!==`intermission`||j)return;let t=Ey.find(t=>t.key===e);!t||A<t.price||(A-=t.price,e===`6`?(E.addItem(`pistol_ammo`,60),E.addItem(`rifle_ammo`,90),Ge&&E.addItem(`shotgun_ammo`,18)):e===`7`?O=Math.min(k,O+50):e===`8`&&(k+=20,O=Math.min(k,O+20)),D.setMoney(A))}let wt=Oy?new hu(Dy,{onMove:(e,t)=>R.setTouchMove(e,t),onLook:(e,t)=>R.addLookDelta(e,t),onFireStart:()=>{ht()||xt()},onFireEnd:()=>St(),onJumpStart:()=>R.press(`Space`),onJumpEnd:()=>R.release(`Space`),onReload:()=>{H===`pistol`?ye.tryReload():H===`rifle`?be.tryReload():H===`shotgun`&&xe.tryReload()},onSelectWeapon:e=>st(e),onBuy:e=>Ct(e),onToggleInventory:()=>{ee?Re.close():R.locked&&ze(null)},onOpenCrate:()=>{M&&ze(M)},onOpenCabinet:()=>{L===`browsing`?mt():te&&pt()},onRescueStart:()=>{re=!0},onRescueEnd:()=>{re=!1},onToggleView:()=>{}}):null;wt?.setActiveWeapon(H),wt?.setWeaponLocked(`shotgun`,!Ge),D.onSensitivityChange(e=>R.setSensitivity(e));function Et(){D.hideOverlay(),D.showSettingsButton(!1),Oy?(R.enableTouch(),wt?.setVisible(!0)):R.lock()}D.onOverlayClick(()=>{if(ju(),j){window.location.reload();return}Et()}),D.onExitClick(()=>window.location.reload()),ju(),Et(),s.domElement.addEventListener(`mousedown`,e=>{if(e.button===0){if(ht())return;xt()}e.button===2&&L===`idle`&&(bt=!0)}),window.addEventListener(`mouseup`,e=>{e.button===0&&St(),e.button===2&&(bt=!1)}),document.addEventListener(`mousemove`,e=>{L===`browsing`&&_t(e.clientX,e.clientY)});let Dt=0;document.addEventListener(`touchmove`,e=>{if(L!==`browsing`)return;let t=e.touches[0]??e.changedTouches[0];t&&(Be.scrollBy(Dt-t.clientY),Dt=t.clientY,_t(t.clientX,t.clientY))},{passive:!0}),document.addEventListener(`touchstart`,e=>{if(L!==`browsing`)return;let t=e.touches[0]??e.changedTouches[0];t&&(Dt=t.clientY,_t(t.clientX,t.clientY))},{passive:!0}),document.addEventListener(`wheel`,e=>{L===`browsing`&&(e.preventDefault(),Be.scrollBy(e.deltaY))},{passive:!1}),window.addEventListener(`keydown`,e=>{e.code===`KeyR`&&(H===`pistol`?ye.tryReload():H===`rifle`?be.tryReload():H===`shotgun`&&xe.tryReload()),e.code===`Digit1`&&st(`pistol`),e.code===`Digit2`&&st(`rifle`),e.code===`Digit3`&&st(`knife`),e.code===`Digit4`&&st(`medkit`),e.code===`Digit5`&&st(`shotgun`),e.code===`Digit6`&&Ct(`6`),e.code===`Digit7`&&Ct(`7`),e.code===`Digit8`&&Ct(`8`),e.code===`KeyF`&&o(!a),e.code===`KeyV`&&R.locked,e.code===`KeyE`&&(re=!0,ee?Re.close():L===`browsing`?mt():R.locked&&!ne&&te?pt():R.locked&&!ne&&M&&ze(M)),(e.code===`KeyI`||e.code===`Tab`)&&(e.preventDefault(),ee?Re.close():R.locked&&ze(null))}),window.addEventListener(`keyup`,e=>{e.code===`KeyE`&&(re=!1)}),window.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`resize`,u),window.addEventListener(`orientationchange`,u);function Ot(){j=!0,vt=!1,yt=!1,bt=!1,document.exitPointerLock(),wt?.setVisible(!1),D.hideShop(),wt?.setShopVisible(!1),D.showOverlay(`HAS MUERTO`,`Sobreviviste hasta la oleada ${We.waveNumber}. Click para reintentar.`),D.showSettingsButton(!1)}let kt=!1;function At(e,t,n=!1){let r=e.object.userData.zombieRef;if(r){let n=e.object.userData.zone===`head`;r.takeDamage(t*(n?vy:1)),r.flashHit(n),D.showHitmarker(n),Ve.spawnHit(e.point,n)}n?Zu():r||Qu()}let jt=new K,Mt=new K,Nt=new K;new K;let Pt=new K;new qa;let Ft=new qa,It=new Xa;function Lt(){requestAnimationFrame(Lt);let e=Math.min(It.getDelta(),.05);if(y.updateMist(It.elapsedTime),(R.locked||L!==`idle`)&&!j&&!ee){R.setInputLocked(P!==`idle`||se!==`idle`||L!==`idle`),R.update(e),Mt.copy(R.eyePosition),Le.group.position.set(Mt.x,0,Mt.z),Le.group.rotation.y=R.facingYaw,Le.setHeldItem(H===`shotgun`?`rifle`:H),Le.update(R.bobPhase,R.bobIntensity),ct(e);let t=bt&&!Ze&&H!==`knife`;ye.setAiming(t&&H===`pistol`),be.setAiming(t&&H===`rifle`),xe.setAiming(t&&H===`shotgun`),R.setAiming(t);let a=t?by:yy;Math.abs(n.fov-a)>.01&&(n.fov+=(a-n.fov)*Math.min(1,xy*e),n.updateProjectionMatrix());let o=null,s=()=>o??=[...We.raycastTargets,...y.solidMeshes];if(!Ze&&!N&&P===`idle`&&L===`idle`)if(H===`pistol`&&yt){yt=!1;let e=ye.fire(s());e&&At(e,ye.damage)}else if(H===`rifle`&&vt){let e=be.fire(s());e&&At(e,be.damage)}else if(H===`shotgun`&&yt){yt=!1;for(let e of xe.fire(s()))At(e,xe.damage)}else H===`knife`&&vt&&Se.swing();let c=R.bobPhase,l=R.bobIntensity,u=R.isSprinting;ye.update(e,c,l,u),be.update(e,c,l,u),xe.update(e,c,l,u),Se.update(e,c,l,u);let d=Se.hasPendingImpact?Se.consumeImpact(s()):null;d&&At(d,Se.damage,!0),Ve.update(e);for(let t of w)t.update(e);S.update(e),Ie(e),dt(e,c,l,u),ft(e),T.update(e),gt(e),D.setCarrying(!!N);let f=H===`medkit`&&!Ze&&P===`idle`&&se===`idle`&&L===`idle`&&vt&&O<k&&E.countItem(`medkit`)>0;if(Ce.update(e,f,c,l,u)){let e=E.findFirstSlot(`medkit`);e!==-1&&(E.removeFromSlot(e,1),O=Math.min(k,O+50),D.setHealth(O,k))}P===`idle`?D.setHealProgress(Ce.healProgress,H===`medkit`):D.setHealProgress(we.healProgress,P===`applying`);let p=1;H===`pistol`?(p=ye.flashlightBlend,ye.getFlashlightEmitter(jt)):H===`rifle`&&(p=be.flashlightBlend,be.getFlashlightEmitter(jt)),H!==`knife`&&H!==`medkit`&&H!==`shotgun`&&(n.worldToLocal(jt),r.position.copy(jt),i.position.set(jt.x,jt.y,jt.z-6)),r.intensity=110*p;let{damageToPlayer:m}=We.update(e,n.position);m>0&&(O=Math.max(0,O-m),D.flashHit(),$u(),O<=0&&!j&&Ot()),D.setHealth(O,k),D.setMoney(A),H===`pistol`?D.setAmmo(ye.ammoInMag,ye.reserveAmmo,ye.isReloading):H===`rifle`?D.setAmmo(be.ammoInMag,be.reserveAmmo,be.isReloading):H===`shotgun`?D.setAmmo(xe.ammoInMag,xe.reserveAmmo,xe.isReloading):H===`medkit`?D.showMedkit(E.countItem(`medkit`)):D.showMelee(),D.setWaveInfo(We.waveNumber,We.zombiesRemaining,We.state,We.intermissionRemaining);let h=P===`idle`&&L===`idle`&&!ne&&!N;te=h&&T.isInRange(n.position)?T:null,T.setHighlighted(!!te),M=h&&!te?x.find(e=>e.isInRange(n.position))??null:null;for(let e of x)e.setHighlighted(e===M);se===`idle`?N?D.showInteractPrompt(`Llevas a ${N.name} a cuestas · ve a la zona segura`):P===`applying`?D.showInteractPrompt(`Mantén E · curando a ${F?.name??``}`):L===`browsing`?D.showInteractPrompt(`Haz click en una opción para equiparla · E para salir`):P!==`idle`||L!==`idle`?D.hideInteractPrompt():ne?D.showInteractPrompt(`Mantén E para curar a ${ne.name}`):te?D.showInteractPrompt(`E · abrir el arsenal`):M?D.showInteractPrompt(M.isOpened?`E · revisar la caja`:`E · abrir la caja`):D.hideInteractPrompt():D.showInteractPrompt(`Dejando a ${ce?.name??``} a salvo…`),wt?.setCrateAvailable(!!M),wt?.setRescueAvailable(!!ne),wt?.setCabinetAvailable(!!te||L===`browsing`);let g=We.state===`intermission`;g!==kt&&(kt=g,kt?(D.showShop(),wt?.setShopVisible(!0)):(D.hideShop(),wt?.setShopVisible(!1))),kt&&D.updateShop(A,We.intermissionRemaining,e=>{let t=Ey.find(t=>t.key===e);return!!t&&A>=t.price})}s.render(t,n);let a=performance.now(),o=g===0?0:a-g;g=a,o>0&&(v(o,a),d.update(o,s,t,{resolución:`${l.toFixed(2)}x`,zombis:We.zombiesRemaining,posición:`${n.position.x.toFixed(1)}, ${n.position.y.toFixed(2)}, ${n.position.z.toFixed(1)}`,bloqueado:R.locked?`sí`:`no`}))}Lt()}