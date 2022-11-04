/*! For license information please see chunk.639.04afaf47ee0b7dcb079a.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[639],{447:(t,e,n)=>{n.d(e,{BH:()=>h,L:()=>s,LL:()=>p,P0:()=>l,Sg:()=>d,ZR:()=>f,aH:()=>c,eu:()=>a,hl:()=>o,m9:()=>w,vZ:()=>g})
const r=function(t){const e=[]
let n=0
for(let r=0;r<t.length;r++){let i=t.charCodeAt(r)
i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter")
this.init_()
const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[]
for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,l=e>>2,c=(3&e)<<4|o>>4
let h=(15&o)<<2|u>>6,d=63&u
a||(d=64,s||(h=64)),r.push(n[l],n[c],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[]
let n=0,r=0
for(;n<t.length;){const i=t[n++]
if(i<128)e[r++]=String.fromCharCode(i)
else if(i>191&&i<224){const s=t[n++]
e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536
e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++]
e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_()
const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[]
for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length?n[t.charAt(i)]:0;++i
const o=i<t.length?n[t.charAt(i)]:64;++i
const a=i<t.length?n[t.charAt(i)]:64
if(++i,null==e||null==s||null==o||null==a)throw Error()
const u=e<<2|s>>4
if(r.push(u),64!==o){const t=s<<4&240|o>>2
if(r.push(t),64!==a){const t=o<<6&192|a
r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={}
for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){return function(t){const e=r(t)
return i.encodeByteArray(e,!0)}(t).replace(/\./g,"")}
function o(){return"object"==typeof indexedDB}function a(){return new Promise(((t,e)=>{try{let n=!0
const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r)
i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t
e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}const u=()=>{try{return function(){if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process||void 0===process.env)return
const t=process.env.__FIREBASE_DEFAULTS__
return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return
let t
try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return i.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1])
return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},l=t=>{const e=(t=>{var e,n
return null===(n=null===(e=u())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t)
if(!e)return
const n=e.lastIndexOf(":")
if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`)
const r=parseInt(e.substring(n+1),10)
return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},c=()=>{var t
return null===(t=u())||void 0===t?void 0:t.config}
class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.')
const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id
if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t)
return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}class f extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,f.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t){const e=(arguments.length<=1?void 0:arguments[1])||{},n=`${this.service}/${t}`,r=this.errors[t],i=r?function(t,e){return t.replace(m,((t,n)=>{const r=e[n]
return null!=r?String(r):`<${n}?>`}))}(r,e):"Error",s=`${this.serviceName}: ${i} (${n}).`
return new f(n,s,e)}}const m=/\{\$([^}]+)}/g
function g(t,e){if(t===e)return!0
const n=Object.keys(t),r=Object.keys(e)
for(const i of n){if(!r.includes(i))return!1
const n=t[i],s=e[i]
if(y(n)&&y(s)){if(!g(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1
return!0}function y(t){return null!==t&&"object"==typeof t}function w(t){return t&&t._delegate?t._delegate:t}},456:(t,e,n)=>{n.r(e),n.d(e,{FirebaseError:()=>r.ZR,SDK_VERSION:()=>r.Jn,_DEFAULT_ENTRY_NAME:()=>r.l4,_addComponent:()=>r.H9,_addOrOverwriteComponent:()=>r.Vr,_apps:()=>r.Af,_clearComponents:()=>r.Z8,_components:()=>r.lz,_getProvider:()=>r.qX,_registerComponent:()=>r.Xd,_removeServiceInstance:()=>r.wN,deleteApp:()=>r.P2,getApp:()=>r.Mq,getApps:()=>r.C6,initializeApp:()=>r.ZF,onLog:()=>r.TP,registerVersion:()=>r.KN,setLogLevel:()=>r.Ub})
var r=n(549);(0,r.KN)("firebase","9.13.0","app")},983:(t,e,n)=>{n.r(e),n.d(e,{AggregateField:()=>nn,AggregateQuerySnapshot:()=>rn,Bytes:()=>pn,CollectionReference:()=>un,DocumentReference:()=>on,DocumentSnapshot:()=>Hn,FieldPath:()=>mn,FieldValue:()=>yn,Firestore:()=>Ze,FirestoreError:()=>L,GeoPoint:()=>wn,Query:()=>an,QueryConstraint:()=>Yn,QueryDocumentSnapshot:()=>Wn,QuerySnapshot:()=>Kn,Timestamp:()=>dt,Transaction:()=>Mr,WriteBatch:()=>Cr,addDoc:()=>Er,aggregateQuerySnapshotEqual:()=>Ir,arrayRemove:()=>kr,arrayUnion:()=>Dr,collection:()=>ln,collectionGroup:()=>cn,connectFirestoreEmulator:()=>tn,deleteDoc:()=>br,deleteField:()=>Ar,doc:()=>hn,documentId:()=>gn,endAt:()=>cr,endBefore:()=>lr,getCount:()=>Sr,getDoc:()=>yr,getDocs:()=>wr,getFirestore:()=>Xe,increment:()=>Nr,initializeFirestore:()=>Je,limit:()=>rr,limitToLast:()=>ir,orderBy:()=>er,query:()=>Zn,queryEqual:()=>fn,refEqual:()=>dn,runTransaction:()=>qr,serverTimestamp:()=>Tr,setDoc:()=>vr,setLogLevel:()=>c,snapshotEqual:()=>Gn,startAfter:()=>ar,startAt:()=>or,terminate:()=>en,updateDoc:()=>_r,where:()=>Xn,writeBatch:()=>Lr})
var r=n(549),i=n(619),s=n(923),o=n(447)
class a{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user")
let u="9.13.0"
const l=new s.Yd("@firebase/firestore")
function c(t){l.setLogLevel(t)}function h(t){if(l.logLevel<=s.in.DEBUG){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
const i=n.map(p)
l.debug(`Firestore (${u}): ${t}`,...i)}}function d(t){if(l.logLevel<=s.in.ERROR){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
const i=n.map(p)
l.error(`Firestore (${u}): ${t}`,...i)}}function f(t){if(l.logLevel<=s.in.WARN){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
const i=n.map(p)
l.warn(`Firestore (${u}): ${t}`,...i)}}function p(t){if("string"==typeof t)return t
try{return e=t,JSON.stringify(e)}catch(e){return t}var e}function m(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state"
const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t
throw d(e),new Error(e)}function g(t,e){t||m()}function y(t,e){return t}const w="cancelled",v="unknown",_="invalid-argument",b="deadline-exceeded",E="not-found",S="permission-denied",I="unauthenticated",A="resource-exhausted",T="failed-precondition",D="aborted",k="out-of-range",N="unimplemented",C="internal",V="unavailable"
class L extends o.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class O{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}class R{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(a.UNAUTHENTICATED)))}shutdown(){}}class P{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class x{constructor(t){this.auth=null,t.onInit((t=>{this.auth=t}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(g("string"==typeof t.accessToken),new R(t.accessToken,new a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class B{constructor(t,e,n,r){this.t=t,this.i=e,this.o=n,this.u=r,this.type="FirstParty",this.user=a.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(g(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i)
const t=this.l()
return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class M{constructor(t,e,n,r){this.t=t,this.i=e,this.o=n,this.u=r}getToken(){return Promise.resolve(new B(this.t,this.i,this.o,this.u))}start(t,e){t.enqueueRetryable((()=>e(a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class q{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ${constructor(t){this.m=t,this.appCheck=null,t.onInit((t=>{this.appCheck=t}))}getToken(){return this.appCheck?this.appCheck.getToken().then((t=>t?(g("string"==typeof t.token),new q(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class U{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class j{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new j("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof j&&t.projectId===this.projectId&&t.database===this.database}}class z{constructor(t,e,n){void 0===e?e=0:e>t.length&&m(),void 0===n?n=t.length-e:n>t.length-e&&m(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===z.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit())
return t instanceof z?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1
for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1
for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length)
for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r)
if(n<i)return-1
if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends z{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(){const t=[]
for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
for(const i of n){if(i.indexOf("//")>=0)throw new L(_,`Invalid segment (${i}). Paths must not contain // in them.`)
t.push(...i.split("/").filter((t=>t.length>0)))}return new H(t)}static emptyPath(){return new H([])}}const W=/^[_a-zA-Z][_a-zA-Z0-9]*$/
class K extends z{construct(t,e,n){return new K(t,e,n)}static isValidIdentifier(t){return W.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const e=[]
let n="",r=0
const i=()=>{if(0===n.length)throw new L(_,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`)
e.push(n),n=""}
let s=!1
for(;r<t.length;){const e=t[r]
if("\\"===e){if(r+1===t.length)throw new L(_,"Path has trailing escape character: "+t)
const e=t[r+1]
if("\\"!==e&&"."!==e&&"`"!==e)throw new L(_,"Path has invalid escape sequence: "+t)
n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new L(_,"Unterminated ` in path: "+t)
return new K(e)}static emptyPath(){return new K([])}}class G{constructor(t){this.path=t}static fromPath(t){return new G(H.fromString(t))}static fromName(t){return new G(H.fromString(t).popFirst(5))}static empty(){return new G(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===H.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new H(t.slice()))}}function Q(t,e,n){if(!n)throw new L(_,`Function ${t}() cannot be called with an empty ${e}.`)}function Y(t){if(!G.isDocumentKey(t))throw new L(_,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Z(t){if(G.isDocumentKey(t))throw new L(_,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function J(t){if(void 0===t)return"undefined"
if(null===t)return"null"
if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t)
if("number"==typeof t||"boolean"==typeof t)return""+t
if("object"==typeof t){if(t instanceof Array)return"an array"
{const e=function(t){return t.constructor?t.constructor.name:null}(t)
return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":m()}function X(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(_,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?")
{const n=J(t)
throw new L(_,`Expected type '${e.name}', but it was: ${n}`)}}return t}function tt(t,e){if(e<=0)throw new L(_,`Function ${t}() requires a positive number, but it was: ${e}.`)}function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}const rt={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"}
var it,st
function ot(t){if(void 0===t)return d("RPC_ERROR","HTTP error has no status"),v
switch(t){case 200:return"ok"
case 400:return T
case 401:return I
case 403:return S
case 404:return E
case 409:return D
case 416:return k
case 429:return A
case 499:return w
case 500:return v
case 501:return N
case 503:return V
case 504:return b
default:return t>=200&&t<300?"ok":t>=400&&t<500?T:t>=500&&t<600?C:v}}(st=it||(it={}))[st.OK=0]="OK",st[st.CANCELLED=1]="CANCELLED",st[st.UNKNOWN=2]="UNKNOWN",st[st.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",st[st.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",st[st.NOT_FOUND=5]="NOT_FOUND",st[st.ALREADY_EXISTS=6]="ALREADY_EXISTS",st[st.PERMISSION_DENIED=7]="PERMISSION_DENIED",st[st.UNAUTHENTICATED=16]="UNAUTHENTICATED",st[st.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",st[st.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",st[st.ABORTED=10]="ABORTED",st[st.OUT_OF_RANGE=11]="OUT_OF_RANGE",st[st.UNIMPLEMENTED=12]="UNIMPLEMENTED",st[st.INTERNAL=13]="INTERNAL",st[st.UNAVAILABLE=14]="UNAVAILABLE",st[st.DATA_LOSS=15]="DATA_LOSS"
class at extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId
const e=t.ssl?"https":"http"
this.p=e+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(t,e,n,r,i){const s=this.T(t,e)
h("RestConnection","Sending: ",s,n)
const o={}
return this.A(o,r,i),this.R(t,s,o,n).then((t=>(h("RestConnection","Received: ",t),t)),(e=>{throw f("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}P(t,e,n,r,i,s){return this.I(t,e,n,r,i)}A(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}T(t,e){const n=rt[t]
return`${this.p}/v1/${e}:${n}`}}{constructor(t,e){super(t),this.V=e}N(t,e){throw new Error("Not supported by FetchConnection")}async R(t,e,n,r){const i=JSON.stringify(r)
let s
try{s=await this.V(e,{method:"POST",headers:n,body:i})}catch(t){throw new L(ot(t.status),"Request failed with error: "+t.statusText)}if(!s.ok)throw new L(ot(s.status),"Request failed with error: "+s.statusText)
return s.json()}}function ut(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t)
if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n)
else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random())
return n}class lt{static D(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length
let n=""
for(;n.length<20;){const r=ut(40)
for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function ct(t,e){return t<e?-1:t>e?1:0}function ht(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(_,"Timestamp nanoseconds out of range: "+e)
if(e>=1e9)throw new L(_,"Timestamp nanoseconds out of range: "+e)
if(t<-62135596800)throw new L(_,"Timestamp seconds out of range: "+t)
if(t>=253402300800)throw new L(_,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e))
return new dt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800
return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}class ft{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ft(t)}static min(){return new ft(new dt(0,0))}static max(){return new ft(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}function pt(t){let e=0
for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++
return e}function mt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}class gt{constructor(t,e){this.comparator=t,this.root=e||wt.EMPTY}insert(t,e){return new gt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(t){return new gt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wt.BLACK,null,null))}get(t){let e=this.root
for(;!e.isEmpty();){const n=this.comparator(t,e.key)
if(0===n)return e.value
n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root
for(;!n.isEmpty();){const r=this.comparator(t,n.key)
if(0===r)return e+n.left.size
r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[]
return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yt(this.root,t,this.comparator,!1)}getReverseIterator(){return new yt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yt(this.root,t,this.comparator,!0)}}class yt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[]
let i=1
for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right
else{if(0===i){this.nodeStack.push(t)
break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop()
const e={key:t.key,value:t.value}
if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right
else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left
return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null
const t=this.nodeStack[this.nodeStack.length-1]
return{key:t.key,value:t.value}}}class wt{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:wt.RED,this.left=null!=r?r:wt.EMPTY,this.right=null!=i?i:wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new wt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this
const i=n(t,r.key)
return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY
let t=this
return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this
if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null)
else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return wt.EMPTY
n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this
return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip()
return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip()
return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wt.RED,null,this.right.left)
return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wt.RED,this.left.right,null)
return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null)
return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check()
return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw m()
if(this.right.isRed())throw m()
const t=this.left.check()
if(t!==this.right.check())throw m()
return t+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1,wt.EMPTY=new class{constructor(){this.size=0}get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(t,e,n,r,i){return this}insert(t,e,n){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}}
class vt{constructor(t){this.comparator=t,this.data=new gt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0])
for(;n.hasNext();){const r=n.getNext()
if(this.comparator(r.key,t[1])>=0)return
e(r.key)}}forEachWhile(t,e){let n
for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t)
return e.hasNext()?e.getNext().key:null}getIterator(){return new _t(this.data.getIterator())}getIteratorFrom(t){return new _t(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this
return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof vt))return!1
if(this.size!==t.size)return!1
const e=this.data.getIterator(),n=t.data.getIterator()
for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key
if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[]
return this.forEach((e=>{t.push(e)})),t}toString(){const t=[]
return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new vt(this.comparator)
return e.data=t,e}}class _t{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class bt{constructor(t){this.fields=t,t.sort(K.comparator)}static empty(){return new bt([])}unionWith(t){let e=new vt(K.comparator)
for(const n of this.fields)e=e.add(n)
for(const n of t)e=e.add(n)
return new bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0
return!1}isEqual(t){return ht(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}class Et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t)
return new Et(e)}static fromUint8Array(t){const e=function(t){let e=""
for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n])
return e}(t)
return new Et(e)}[Symbol.iterator](){let t=0
return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t)
var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length)
for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n)
return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Et.EMPTY_BYTE_STRING=new Et("")
const St=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function It(t){if(g(!!t),"string"==typeof t){let e=0
const n=St.exec(t)
if(g(!!n),n[1]){let t=n[1]
t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t)
return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:At(t.seconds),nanos:At(t.nanos)}}function At(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Tt(t){return"string"==typeof t?Et.fromBase64String(t):Et.fromUint8Array(t)}function Dt(t){var e,n
return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function kt(t){const e=t.mapValue.fields.__previous_value__
return Dt(e)?kt(e):e}function Nt(t){const e=It(t.mapValue.fields.__local_write_time__.timestampValue)
return new dt(e.seconds,e.nanos)}const Ct={fields:{__type__:{stringValue:"__max__"}}}
function Vt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dt(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}(t)?9007199254740991:10:m()}function Lt(t,e){if(t===e)return!0
const n=Vt(t)
if(n!==Vt(e))return!1
switch(n){case 0:case 9007199254740991:return!0
case 1:return t.booleanValue===e.booleanValue
case 4:return Nt(t).isEqual(Nt(e))
case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue
const n=It(t.timestampValue),r=It(e.timestampValue)
return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e)
case 5:return t.stringValue===e.stringValue
case 6:return function(t,e){return Tt(t.bytesValue).isEqual(Tt(e.bytesValue))}(t,e)
case 7:return t.referenceValue===e.referenceValue
case 8:return function(t,e){return At(t.geoPointValue.latitude)===At(e.geoPointValue.latitude)&&At(t.geoPointValue.longitude)===At(e.geoPointValue.longitude)}(t,e)
case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return At(t.integerValue)===At(e.integerValue)
if("doubleValue"in t&&"doubleValue"in e){const n=At(t.doubleValue),r=At(e.doubleValue)
return n===r?nt(n)===nt(r):isNaN(n)&&isNaN(r)}return!1}(t,e)
case 9:return ht(t.arrayValue.values||[],e.arrayValue.values||[],Lt)
case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{}
if(pt(n)!==pt(r))return!1
for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Lt(n[i],r[i])))return!1
return!0}(t,e)
default:return m()}}function Ot(t,e){return void 0!==(t.values||[]).find((t=>Lt(t,e)))}function Rt(t,e){if(t===e)return 0
const n=Vt(t),r=Vt(e)
if(n!==r)return ct(n,r)
switch(n){case 0:case 9007199254740991:return 0
case 1:return ct(t.booleanValue,e.booleanValue)
case 2:return function(t,e){const n=At(t.integerValue||t.doubleValue),r=At(e.integerValue||e.doubleValue)
return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e)
case 3:return Ft(t.timestampValue,e.timestampValue)
case 4:return Ft(Nt(t),Nt(e))
case 5:return ct(t.stringValue,e.stringValue)
case 6:return function(t,e){const n=Tt(t),r=Tt(e)
return n.compareTo(r)}(t.bytesValue,e.bytesValue)
case 7:return function(t,e){const n=t.split("/"),r=e.split("/")
for(let i=0;i<n.length&&i<r.length;i++){const t=ct(n[i],r[i])
if(0!==t)return t}return ct(n.length,r.length)}(t.referenceValue,e.referenceValue)
case 8:return function(t,e){const n=ct(At(t.latitude),At(e.latitude))
return 0!==n?n:ct(At(t.longitude),At(e.longitude))}(t.geoPointValue,e.geoPointValue)
case 9:return function(t,e){const n=t.values||[],r=e.values||[]
for(let i=0;i<n.length&&i<r.length;++i){const t=Rt(n[i],r[i])
if(t)return t}return ct(n.length,r.length)}(t.arrayValue,e.arrayValue)
case 10:return function(t,e){if(t===Ct&&e===Ct)return 0
if(t===Ct)return 1
if(e===Ct)return-1
const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i)
r.sort(),s.sort()
for(let o=0;o<r.length&&o<s.length;++o){const t=ct(r[o],s[o])
if(0!==t)return t
const e=Rt(n[r[o]],i[s[o]])
if(0!==e)return e}return ct(r.length,s.length)}(t.mapValue,e.mapValue)
default:throw m()}}function Ft(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ct(t,e)
const n=It(t),r=It(e),i=ct(n.seconds,r.seconds)
return 0!==i?i:ct(n.nanos,r.nanos)}function Pt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xt(t){return!!t&&"arrayValue"in t}function Bt(t){return!!t&&"nullValue"in t}function Mt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qt(t){return!!t&&"mapValue"in t}function $t(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)}
if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)}
if(t.mapValue){const e={mapValue:{fields:{}}}
return mt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=$t(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}}
for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$t(t.arrayValue.values[n])
return e}return Object.assign({},t)}class Ut{constructor(t){this.value=t}static empty(){return new Ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value
{let e=this.value
for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!qt(e))return null
return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=$t(e)}setAll(t){let e=K.emptyPath(),n={},r=[]
t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e)
this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=$t(t):r.push(i.lastSegment())}))
const i=this.getFieldsMap(e)
this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast())
qt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value
e.mapValue.fields||(e.mapValue={fields:{}})
for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)]
qt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){mt(e,((e,n)=>t[e]=n))
for(const r of n)delete t[r]}clone(){return new Ut($t(this.value))}}class jt{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new jt(t,0,ft.min(),ft.min(),Ut.empty(),0)}static newFoundDocument(t,e,n){return new jt(t,1,e,ft.min(),n,0)}static newNoDocument(t,e){return new jt(t,2,e,ft.min(),Ut.empty(),0)}static newUnknownDocument(t,e){return new jt(t,3,e,ft.min(),Ut.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ft.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class zt{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null
this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.$=null}}function Ht(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null
return new zt(t,e,n,r,i,s,o)}class Wt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.F(t,e,n):new Kt(t,e,n):"array-contains"===e?new Zt(t,n):"in"===e?new Jt(t,n):"not-in"===e?new Xt(t,n):"array-contains-any"===e?new te(t,n):new Wt(t,e,n)}static F(t,e,n){return"in"===e?new Gt(t,n):new Qt(t,n)}matches(t){const e=t.data.field(this.field)
return"!="===this.op?null!==e&&this.S(Rt(e,this.value)):null!==e&&Vt(this.value)===Vt(e)&&this.S(Rt(e,this.value))}S(t){switch(this.op){case"<":return t<0
case"<=":return t<=0
case"==":return 0===t
case"!=":return 0!==t
case">":return t>0
case">=":return t>=0
default:return m()}}q(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Kt extends Wt{constructor(t,e,n){super(t,e,n),this.key=G.fromName(n.referenceValue)}matches(t){const e=G.comparator(t.key,this.key)
return this.S(e)}}class Gt extends Wt{constructor(t,e){super(t,"in",e),this.keys=Yt(0,e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Qt extends Wt{constructor(t,e){super(t,"not-in",e),this.keys=Yt(0,e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Yt(t,e){var n
return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>G.fromName(t.referenceValue)))}class Zt extends Wt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field)
return xt(e)&&Ot(e.arrayValue,this.value)}}class Jt extends Wt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field)
return null!==e&&Ot(this.value.arrayValue,e)}}class Xt extends Wt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ot(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1
const e=t.data.field(this.field)
return null!==e&&!Ot(this.value.arrayValue,e)}}class te extends Wt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field)
return!(!xt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ot(this.value.arrayValue,t)))}}class ee{constructor(t,e){this.position=t,this.inclusive=e}}class ne{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc"
this.field=t,this.dir=e}}function re(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ie(t,e){if(null===t)return null===e
if(null===e)return!1
if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1
for(let n=0;n<t.position.length;n++)if(!Lt(t.position[n],e.position[n]))return!1
return!0}class se{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null
this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.O=null,this.k=null,this.startAt,this.endAt}}function oe(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ae(t){for(const e of t.filters)if(e.q())return e.field
return null}function ue(t){return null!==t.collectionGroup}function le(t){const e=y(t)
if(null===e.O){e.O=[]
const t=ae(e),n=oe(e)
if(null!==t&&null===n)t.isKeyField()||e.O.push(new ne(t)),e.O.push(new ne(K.keyField(),"asc"))
else{let t=!1
for(const n of e.explicitOrderBy)e.O.push(n),n.field.isKeyField()&&(t=!0)
if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc"
e.O.push(new ne(K.keyField(),t))}}}return e.O}function ce(t){const e=y(t)
if(!e.k)if("F"===e.limitType)e.k=Ht(e.path,e.collectionGroup,le(e),e.filters,e.limit,e.startAt,e.endAt)
else{const t=[]
for(const i of le(e)){const e="desc"===i.dir?"asc":"desc"
t.push(new ne(i.field,e))}const n=e.endAt?new ee(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ee(e.startAt.position,e.startAt.inclusive):null
e.k=Ht(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.k}function he(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"}
if(e===1/0)return{doubleValue:"Infinity"}
if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}(t,e)}class de{constructor(){this._=void 0}}class fe extends de{}class pe extends de{constructor(t){super(),this.elements=t}}class me extends de{constructor(t){super(),this.elements=t}}class ge extends de{constructor(t,e){super(),this.L=t,this.M=e}}class ye{constructor(t,e){this.field=t,this.transform=e}}class we{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new we}static exists(t){return new we(void 0,t)}static updateTime(t){return new we(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class ve{}class _e extends ve{constructor(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[]
super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class be extends ve{constructor(t,e,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[]
super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Ee extends ve{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Se extends ve{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}const Ie={asc:"ASCENDING",desc:"DESCENDING"},Ae={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}
class Te{constructor(t,e){this.databaseId=t,this.C=e}}function De(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ke(t,e){return t.C?e.toBase64():e.toUint8Array()}function Ne(t,e){return De(t,e.toTimestamp())}function Ce(t){return g(!!t),ft.fromTimestamp(function(t){const e=It(t)
return new dt(e.seconds,e.nanos)}(t))}function Ve(t,e){return function(t){return new H(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Le(t,e){return Ve(t.databaseId,e.path)}function Oe(t,e){const n=function(t){const e=H.fromString(t)
return g(Ue(e)),e}(e)
if(n.get(1)!==t.databaseId.projectId)throw new L(_,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId)
if(n.get(3)!==t.databaseId.database)throw new L(_,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database)
return new G((g((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)))
var r}function Re(t,e){return Ve(t.databaseId,e)}function Fe(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pe(t,e,n){return{name:Le(t,e),fields:n.value.mapValue.fields}}function xe(t,e){const n={structuredQuery:{}},r=e.path
null!==e.collectionGroup?(n.parent=Re(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Re(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}])
const i=function(t){if(0===t.length)return
const e=t.map((t=>function(t){if("=="===t.op){if(Mt(t.value))return{unaryFilter:{field:qe(t.field),op:"IS_NAN"}}
if(Bt(t.value))return{unaryFilter:{field:qe(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Mt(t.value))return{unaryFilter:{field:qe(t.field),op:"IS_NOT_NAN"}}
if(Bt(t.value))return{unaryFilter:{field:qe(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qe(t.field),op:Me(t.op),value:t.value}}}(t)))
return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters)
i&&(n.structuredQuery.where=i)
const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:qe(t.field),direction:Be(t.dir)}}(t)))}(e.orderBy)
s&&(n.structuredQuery.orderBy=s)
const o=function(t,e){return t.C||et(e)?e:{value:e}}(t,e.limit)
var a
return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Be(t){return Ie[t]}function Me(t){return Ae[t]}function qe(t){return{fieldPath:t.canonicalString()}}function $e(t){const e=[]
return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ue(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function je(t){return new Te(t,!0)}class ze{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4
this.U=t,this.timerId=e,this.j=n,this.B=r,this.G=i,this.W=0,this.K=null,this.Y=Date.now(),this.reset()}reset(){this.W=0}H(){this.W=this.G}J(t){this.cancel()
const e=Math.floor(this.W+this.X()),n=Math.max(0,Date.now()-this.Y),r=Math.max(0,e-n)
r>0&&h("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.W} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.K=this.U.enqueueAfterDelay(this.timerId,r,(()=>(this.Y=Date.now(),t()))),this.W*=this.B,this.W<this.j&&(this.W=this.j),this.W>this.G&&(this.W=this.G)}Z(){null!==this.K&&(this.K.skipDelay(),this.K=null)}cancel(){null!==this.K&&(this.K.cancel(),this.K=null)}X(){return(Math.random()-.5)*this.W}}class He extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.L=r,this.tt=!1}et(){if(this.tt)throw new L(T,"The client has already been terminated.")}I(t,e,n){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((r=>{let[i,s]=r
return this.connection.I(t,e,n,i,s)})).catch((t=>{throw"FirebaseError"===t.name?(t.code===I&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(v,t.toString())}))}P(t,e,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((i=>{let[s,o]=i
return this.connection.P(t,e,n,s,o,r)})).catch((t=>{throw"FirebaseError"===t.name?(t.code===I&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(v,t.toString())}))}terminate(){this.tt=!0}}async function We(t,e){const n=y(t),r=Fe(n.L)+"/documents",i={writes:e.map((t=>function(t,e){let n
if(e instanceof _e)n={update:Pe(t,e.key,e.value)}
else if(e instanceof Ee)n={delete:Le(t,e.key)}
else if(e instanceof be)n={update:Pe(t,e.key,e.data),updateMask:$e(e.fieldMask)}
else{if(!(e instanceof Se))return m()
n={verify:Le(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform
if(n instanceof fe)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"}
if(n instanceof pe)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}}
if(n instanceof me)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}}
if(n instanceof ge)return{fieldPath:e.field.canonicalString(),increment:n.M}
throw m()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ne(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:m()}(t,e.precondition)),n}(n.L,t)))}
await n.I("Commit",r,i)}async function Ke(t,e){const n=y(t),r=Fe(n.L)+"/documents",i={documents:e.map((t=>Le(n.L,t)))},s=await n.P("BatchGetDocuments",r,i,e.length),o=new Map
s.forEach((t=>{const e=function(t,e){return"found"in e?function(t,e){g(!!e.found),e.found.name,e.found.updateTime
const n=Oe(t,e.found.name),r=Ce(e.found.updateTime),i=new Ut({mapValue:{fields:e.found.fields}})
return jt.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){g(!!e.missing),g(!!e.readTime)
const n=Oe(t,e.missing),r=Ce(e.readTime)
return jt.newNoDocument(n,r)}(t,e):m()}(n.L,t)
o.set(e.key.toString(),e)}))
const a=[]
return e.forEach((t=>{const e=o.get(t.toString())
g(!!e),a.push(e)})),a}const Ge=new Map
function Qe(t){if(t._terminated)throw new L(T,"The client has already been terminated.")
if(!Ge.has(t)){h("ComponentProvider","Initializing Datastore")
const s=function(t){return new at(t,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,i=t._freezeSettings(),new U(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=je(t._databaseId),a=function(t,e,n,r){return new He(t,e,n,r)}(t._authCredentials,t._appCheckCredentials,s,o)
Ge.set(t,a)}var e,n,r,i
return Ge.get(t)}class Ye{constructor(t){var e
if(void 0===t.host){if(void 0!==t.ssl)throw new L(_,"Can't provide ssl option if host option is not set")
this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e
if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040
else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new L(_,"cacheSizeBytes must be at least 1048576")
this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new L(_,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ze{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ye({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T,"Firestore was not initialized using the Firebase SDK. 'app' is not available")
return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(T,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.")
this._settings=new Ye(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F
switch(t.type){case"gapi":const e=t.client
return new M(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null)
case"provider":return t.client
default:throw new L(_,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ge.get(t)
e&&(h("ComponentProvider","Removing Datastore"),Ge.delete(t),e.terminate())}(this),Promise.resolve()}}function Je(t,e,n){n||(n="(default)")
const i=(0,r.qX)(t,"firestore/lite")
if(i.isInitialized(n))throw new L(T,"Firestore can only be initialized once per app.")
return i.initialize({options:e,instanceIdentifier:n})}function Xe(t,e){const n="object"==typeof t?t:(0,r.Mq)(),i="string"==typeof t?t:e||"(default)",s=(0,r.qX)(n,"firestore/lite").getImmediate({identifier:i})
if(!s._initialized){const t=(0,o.P0)("firestore")
t&&tn(s,...t)}return s}function tn(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
var i
const s=(t=X(t,Ze))._getSettings()
if("firestore.googleapis.com"!==s.host&&s.host!==e&&f("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n
if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=a.MOCK_USER
else{e=(0,o.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId)
const s=r.mockUserToken.sub||r.mockUserToken.user_id
if(!s)throw new L(_,"mockUserToken must contain 'sub' or 'user_id' field!")
n=new a(s)}t._authCredentials=new P(new R(e,n))}}function en(t){return t=X(t,Ze),(0,r.wN)(t.app,"firestore/lite"),t._delete()}class nn{constructor(){this.type="AggregateField"}}class rn{constructor(t,e){this._data=e,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._data}}class sn{constructor(t,e,n){this.query=t,this.datastore=e,this.userDataWriter=n}run(){return async function(t,e){const n=y(t),r=function(t,e){const n=xe(t,e)
return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:n.structuredQuery},parent:n.parent}}(n.L,ce(e)),i=r.parent
return n.connection.v||delete r.parent,(await n.P("RunAggregationQuery",i,r,1)).filter((t=>!!t.result)).map((t=>t.result.aggregateFields))}(this.datastore,this.query._query).then((t=>{g(void 0!==t[0])
const e=Object.entries(t[0]).filter((t=>{let[e,n]=t
return"count_alias"===e})).map((t=>{let[e,n]=t
return this.userDataWriter.convertValue(n)}))[0]
return g("number"==typeof e),Promise.resolve(new rn(this.query,{count:e}))}))}}class on{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new on(this.firestore,t,this._key)}}class an{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new an(this.firestore,t,this._query)}}class un extends an{constructor(t,e,n){super(t,e,new se(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast()
return t.isEmpty()?null:new on(this.firestore,null,new G(t))}withConverter(t){return new un(this.firestore,t,this._path)}}function ln(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
if(t=(0,o.m9)(t),Q("collection","path",e),t instanceof Ze){const n=H.fromString(e,...r)
return Z(n),new un(t,null,n)}{if(!(t instanceof on||t instanceof un))throw new L(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore")
const n=t._path.child(H.fromString(e,...r))
return Z(n),new un(t.firestore,null,n)}}function cn(t,e){if(t=X(t,Ze),Q("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new L(_,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`)
return new an(t,null,function(t){return new se(H.emptyPath(),t)}(e))}function hn(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
if(t=(0,o.m9)(t),1===arguments.length&&(e=lt.D()),Q("doc","path",e),t instanceof Ze){const n=H.fromString(e,...r)
return Y(n),new on(t,null,new G(n))}{if(!(t instanceof on||t instanceof un))throw new L(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore")
const n=t._path.child(H.fromString(e,...r))
return Y(n),new on(t.firestore,t instanceof un?t.converter:null,new G(n))}}function dn(t,e){return t=(0,o.m9)(t),e=(0,o.m9)(e),(t instanceof on||t instanceof un)&&(e instanceof on||e instanceof un)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function fn(t,e){return t=(0,o.m9)(t),e=(0,o.m9)(e),t instanceof an&&e instanceof an&&t.firestore===e.firestore&&function(t,e){return function(t,e){if(t.limit!==e.limit)return!1
if(t.orderBy.length!==e.orderBy.length)return!1
for(let i=0;i<t.orderBy.length;i++)if(!re(t.orderBy[i],e.orderBy[i]))return!1
if(t.filters.length!==e.filters.length)return!1
for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Lt(n.value,r.value))return!1
var n,r
return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ie(t.startAt,e.startAt)&&ie(t.endAt,e.endAt)}(ce(t),ce(e))&&t.limitType===e.limitType}(t._query,e._query)&&t.converter===e.converter}class pn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pn(Et.fromBase64String(t))}catch(t){throw new L(_,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new pn(Et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}class mn{constructor(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
for(let r=0;r<e.length;++r)if(0===e[r].length)throw new L(_,"Invalid field name at argument $(i + 1). Field names must not be empty.")
this._internalPath=new K(e)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function gn(){return new mn("__name__")}class yn{constructor(t){this._methodName=t}}class wn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(_,"Latitude must be a number between -90 and 90, but was: "+t)
if(!isFinite(e)||e<-180||e>180)throw new L(_,"Longitude must be a number between -180 and 180, but was: "+e)
this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}}const vn=/^__.*__$/
class _n{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new be(t,this.data,this.fieldMask,e,this.fieldTransforms):new _e(t,this.data,e,this.fieldTransforms)}}class bn{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new be(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function En(t){switch(t){case 0:case 2:case 1:return!0
case 3:case 4:return!1
default:throw m()}}class Sn{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.L=n,this.ignoreUndefinedProperties=r,void 0===i&&this.nt(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}st(t){return new Sn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(t){var e
const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.st({path:n,ot:!1})
return r.ut(t),r}ct(t){var e
const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.st({path:n,ot:!1})
return r.nt(),r}at(t){return this.st({path:void 0,ot:!0})}ht(t){return jn(t,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}nt(){if(this.path)for(let t=0;t<this.path.length;t++)this.ut(this.path.get(t))}ut(t){if(0===t.length)throw this.ht("Document fields must not be empty")
if(En(this.rt)&&vn.test(t))throw this.ht('Document fields cannot begin and end with "__"')}}class In{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.L=n||je(t)}dt(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return new Sn({rt:t,methodName:e,ft:n,path:K.emptyPath(),ot:!1,lt:r},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function An(t){const e=t._freezeSettings(),n=je(t._databaseId)
return new In(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tn(t,e,n,r,i){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{}
const o=t.dt(s.merge||s.mergeFields?2:0,e,n,i)
Mn("Data must be an object, but it was:",o,r)
const a=xn(r,o)
let u,l
if(s.merge)u=new bt(o.fieldMask),l=o.fieldTransforms
else if(s.mergeFields){const t=[]
for(const r of s.mergeFields){const i=qn(e,r,n)
if(!o.contains(i))throw new L(_,`Field '${i}' is specified in your field mask but missing from your input data.`)
zn(t,i)||t.push(i)}u=new bt(t),l=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,l=o.fieldTransforms
return new _n(new Ut(a),u,l)}class Dn extends yn{_toFieldTransform(t){if(2!==t.rt)throw 1===t.rt?t.ht(`${this._methodName}() can only appear at the top level of your update data`):t.ht(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`)
return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Dn}}function kn(t,e,n){return new Sn({rt:3,ft:e.settings.ft,methodName:t._methodName,ot:n},e.databaseId,e.L,e.ignoreUndefinedProperties)}class Nn extends yn{_toFieldTransform(t){return new ye(t.path,new fe)}isEqual(t){return t instanceof Nn}}class Cn extends yn{constructor(t,e){super(t),this.wt=e}_toFieldTransform(t){const e=kn(this,t,!0),n=this.wt.map((t=>Pn(t,e))),r=new pe(n)
return new ye(t.path,r)}isEqual(t){return this===t}}class Vn extends yn{constructor(t,e){super(t),this.wt=e}_toFieldTransform(t){const e=kn(this,t,!0),n=this.wt.map((t=>Pn(t,e))),r=new me(n)
return new ye(t.path,r)}isEqual(t){return this===t}}class Ln extends yn{constructor(t,e){super(t),this.yt=e}_toFieldTransform(t){const e=new ge(t.L,he(t.L,this.yt))
return new ye(t.path,e)}isEqual(t){return this===t}}function On(t,e,n,r){const i=t.dt(1,e,n)
Mn("Data must be an object, but it was:",i,r)
const s=[],a=Ut.empty()
mt(r,((t,r)=>{const u=Un(e,t,n)
r=(0,o.m9)(r)
const l=i.ct(u)
if(r instanceof Dn)s.push(u)
else{const t=Pn(r,l)
null!=t&&(s.push(u),a.set(u,t))}}))
const u=new bt(s)
return new bn(a,u,i.fieldTransforms)}function Rn(t,e,n,r,i,s){const a=t.dt(1,e,n),u=[qn(e,r,n)],l=[i]
if(s.length%2!=0)throw new L(_,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`)
for(let o=0;o<s.length;o+=2)u.push(qn(e,s[o])),l.push(s[o+1])
const c=[],h=Ut.empty()
for(let f=u.length-1;f>=0;--f)if(!zn(c,u[f])){const t=u[f]
let e=l[f]
e=(0,o.m9)(e)
const n=a.ct(t)
if(e instanceof Dn)c.push(t)
else{const r=Pn(e,n)
null!=r&&(c.push(t),h.set(t,r))}}const d=new bt(c)
return new bn(h,d,a.fieldTransforms)}function Fn(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return Pn(n,t.dt(r?4:3,e))}function Pn(t,e){if(Bn(t=(0,o.m9)(t)))return Mn("Unsupported field value:",e,t),xn(t,e)
if(t instanceof yn)return function(t,e){if(!En(e.rt))throw e.ht(`${t._methodName}() can only be used with update() and set()`)
if(!e.path)throw e.ht(`${t._methodName}() is not currently supported inside arrays`)
const n=t._toFieldTransform(e)
n&&e.fieldTransforms.push(n)}(t,e),null
if(void 0===t&&e.ignoreUndefinedProperties)return null
if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&4!==e.rt)throw e.ht("Nested arrays are not supported")
return function(t,e){const n=[]
let r=0
for(const i of t){let t=Pn(i,e.at(r))
null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,o.m9)(t)))return{nullValue:"NULL_VALUE"}
if("number"==typeof t)return he(e.L,t)
if("boolean"==typeof t)return{booleanValue:t}
if("string"==typeof t)return{stringValue:t}
if(t instanceof Date){const n=dt.fromDate(t)
return{timestampValue:De(e.L,n)}}if(t instanceof dt){const n=new dt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3))
return{timestampValue:De(e.L,n)}}if(t instanceof wn)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}}
if(t instanceof pn)return{bytesValue:ke(e.L,t._byteString)}
if(t instanceof on){const n=e.databaseId,r=t.firestore._databaseId
if(!r.isEqual(n))throw e.ht(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`)
return{referenceValue:Ve(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ht(`Unsupported field value: ${J(t)}`)}(t,e)}function xn(t,e){const n={}
return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1
return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mt(t,((t,r)=>{const i=Pn(r,e.it(t))
null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Bn(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof wn||t instanceof pn||t instanceof on||t instanceof yn)}function Mn(t,e,n){if(!Bn(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=J(n)
throw"an object"===r?e.ht(t+" a custom object"):e.ht(t+" "+r)}}function qn(t,e,n){if((e=(0,o.m9)(e))instanceof mn)return e._internalPath
if("string"==typeof e)return Un(t,e)
throw jn("Field path arguments must be of type string or ",t,!1,void 0,n)}const $n=new RegExp("[~\\*/\\[\\]]")
function Un(t,e,n){if(e.search($n)>=0)throw jn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n)
try{return new mn(...e.split("."))._internalPath}catch(r){throw jn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jn(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i
let a=`Function ${e}() called with invalid data`
n&&(a+=" (via `toFirestore()`)"),a+=". "
let u=""
return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new L(_,a+t+u)}function zn(t,e){return t.some((t=>t.isEqual(e)))}class Hn{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Wn(this._firestore,this._userDataWriter,this._key,this._document,null)
return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Qn("DocumentSnapshot.get",t))
if(null!==e)return this._userDataWriter.convertValue(e)}}}class Wn extends Hn{data(){return super.data()}}class Kn{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(t,e){this._docs.forEach(t,e)}}function Gn(t,e){return t=(0,o.m9)(t),e=(0,o.m9)(e),t instanceof Hn&&e instanceof Hn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Kn&&e instanceof Kn&&fn(t.query,e.query)&&ht(t.docs,e.docs,Gn)}function Qn(t,e){return"string"==typeof e?Un(t,e):e instanceof mn?e._internalPath:e._delegate._internalPath}class Yn{}function Zn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
for(const i of n)t=i._apply(t)
return t}class Jn extends Yn{constructor(t,e,n){super(),this._t=t,this.gt=e,this.vt=n,this.type="where"}_apply(t){const e=An(t.firestore),n=function(t,e,n,r,i,s,o){let a
if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new L(_,`Invalid Query. You can't perform '${s}' queries on documentId().`)
if("in"===s||"not-in"===s){fr(o,s)
const e=[]
for(const n of o)e.push(dr(r,t,n))
a={arrayValue:{values:e}}}else a=dr(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||fr(o,s),a=Fn(n,"where",o,"in"===s||"not-in"===s)
const u=Wt.create(i,s,a)
return function(t,e){if(e.q()){const n=ae(t)
if(null!==n&&!n.isEqual(e.field))throw new L(_,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`)
const r=oe(t)
null!==r&&pr(0,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op
return null}(t,function(t){switch(t){case"!=":return["!=","not-in"]
case"array-contains":return["array-contains","array-contains-any","not-in"]
case"in":return["array-contains-any","in","not-in"]
case"array-contains-any":return["array-contains","array-contains-any","in","not-in"]
case"not-in":return["array-contains","array-contains-any","in","not-in","!="]
default:return[]}}(e.op))
if(null!==n)throw n===e.op?new L(_,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(_,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,u),u}(t._query,0,e,t.firestore._databaseId,this._t,this.gt,this.vt)
return new an(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e])
return new se(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Xn(t,e,n){const r=e,i=Qn("where",t)
return new Jn(i,r,n)}class tr extends Yn{constructor(t,e){super(),this._t=t,this.bt=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new L(_,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().")
if(null!==t.endAt)throw new L(_,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().")
const r=new ne(e,n)
return function(t,e){if(null===oe(t)){const n=ae(t)
null!==n&&pr(0,n,e.field)}}(t,r),r}(t._query,this._t,this.bt)
return new an(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e])
return new se(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function er(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc"
const n=e,r=Qn("orderBy",t)
return new tr(r,n)}class nr extends Yn{constructor(t,e,n){super(),this.type=t,this.Et=e,this.It=n}_apply(t){return new an(t.firestore,t.converter,function(t,e,n){return new se(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(t._query,this.Et,this.It))}}function rr(t){return tt("limit",t),new nr("limit",t,"F")}function ir(t){return tt("limitToLast",t),new nr("limitToLast",t,"L")}class sr extends Yn{constructor(t,e,n){super(),this.type=t,this.Tt=e,this.At=n}_apply(t){const e=hr(t,this.type,this.Tt,this.At)
return new an(t.firestore,t.converter,function(t,e){return new se(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function or(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return new sr("startAt",e,!0)}function ar(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return new sr("startAfter",e,!1)}class ur extends Yn{constructor(t,e,n){super(),this.type=t,this.Tt=e,this.At=n}_apply(t){const e=hr(t,this.type,this.Tt,this.At)
return new an(t.firestore,t.converter,function(t,e){return new se(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function lr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return new ur("endBefore",e,!1)}function cr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return new ur("endAt",e,!0)}function hr(t,e,n,r){if(n[0]=(0,o.m9)(n[0]),n[0]instanceof Hn)return function(t,e,n,r,i){if(!r)throw new L(E,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`)
const s=[]
for(const o of le(t))if(o.field.isKeyField())s.push(Pt(e,r.key))
else{const t=r.data.field(o.field)
if(Dt(t))throw new L(_,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)')
if(null===t){const t=o.field.canonicalString()
throw new L(_,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new ee(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r)
{const i=An(t.firestore)
return function(t,e,n,r,i,s){const o=t.explicitOrderBy
if(i.length>o.length)throw new L(_,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`)
const a=[]
for(let u=0;u<i.length;u++){const s=i[u]
if(o[u].field.isKeyField()){if("string"!=typeof s)throw new L(_,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`)
if(!ue(t)&&-1!==s.indexOf("/"))throw new L(_,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`)
const n=t.path.child(H.fromString(s))
if(!G.isDocumentKey(n))throw new L(_,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`)
const i=new G(n)
a.push(Pt(e,i))}else{const t=Fn(n,r,s)
a.push(t)}}return new ee(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function dr(t,e,n){if("string"==typeof(n=(0,o.m9)(n))){if(""===n)throw new L(_,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.")
if(!ue(e)&&-1!==n.indexOf("/"))throw new L(_,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`)
const r=e.path.child(H.fromString(n))
if(!G.isDocumentKey(r))throw new L(_,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`)
return Pt(t,new G(r))}if(n instanceof on)return Pt(t,n._key)
throw new L(_,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${J(n)}.`)}function fr(t,e){if(!Array.isArray(t)||0===t.length)throw new L(_,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)
if(t.length>10)throw new L(_,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function pr(t,e,n){if(!n.isEqual(e))throw new L(_,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}function mr(t,e,n){let r
return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class gr extends class{convertValue(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none"
switch(Vt(t)){case 0:return null
case 1:return t.booleanValue
case 2:return At(t.integerValue||t.doubleValue)
case 3:return this.convertTimestamp(t.timestampValue)
case 4:return this.convertServerTimestamp(t,e)
case 5:return t.stringValue
case 6:return this.convertBytes(Tt(t.bytesValue))
case 7:return this.convertReference(t.referenceValue)
case 8:return this.convertGeoPoint(t.geoPointValue)
case 9:return this.convertArray(t.arrayValue,e)
case 10:return this.convertObject(t.mapValue,e)
default:throw m()}}convertObject(t,e){const n={}
return mt(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new wn(At(t.latitude),At(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=kt(t)
return null==n?null:this.convertValue(n,e)
case"estimate":return this.convertTimestamp(Nt(t))
default:return null}}convertTimestamp(t){const e=It(t)
return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t)
g(Ue(n))
const r=new j(n.get(1),n.get(3)),i=new G(n.popFirst(5))
return r.isEqual(e)||d(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new pn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId)
return new on(this.firestore,null,e)}}function yr(t){const e=Qe((t=X(t,on)).firestore),n=new gr(t.firestore)
return Ke(e,[t._key]).then((e=>{g(1===e.length)
const r=e[0]
return new Hn(t.firestore,n,t._key,r.isFoundDocument()?r:null,t.converter)}))}function wr(t){!function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new L(N,"limitToLast() queries require specifying at least one orderBy() clause")}((t=X(t,an))._query)
const e=Qe(t.firestore),n=new gr(t.firestore)
return async function(t,e){const n=y(t),r=xe(n.L,ce(e))
return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((t=>!!t.document)).map((t=>function(t,e,n){const r=Oe(t,e.name),i=Ce(e.updateTime),s=new Ut({mapValue:{fields:e.fields}})
return jt.newFoundDocument(r,i,s)}(n.L,t.document)))}(e,t._query).then((e=>{const r=e.map((e=>new Wn(t.firestore,n,e.key,e,t.converter)))
return"L"===t._query.limitType&&r.reverse(),new Kn(t,r)}))}function vr(t,e,n){const r=mr((t=X(t,on)).converter,e,n),i=Tn(An(t.firestore),"setDoc",t._key,r,null!==t.converter,n)
return We(Qe(t.firestore),[i.toMutation(t._key,we.none())])}function _r(t,e,n){const r=An((t=X(t,on)).firestore)
let i
for(var s=arguments.length,a=new Array(s>3?s-3:0),u=3;u<s;u++)a[u-3]=arguments[u]
return i="string"==typeof(e=(0,o.m9)(e))||e instanceof mn?Rn(r,"updateDoc",t._key,e,n,a):On(r,"updateDoc",t._key,e),We(Qe(t.firestore),[i.toMutation(t._key,we.exists(!0))])}function br(t){return We(Qe((t=X(t,on)).firestore),[new Ee(t._key,we.none())])}function Er(t,e){const n=hn(t=X(t,un)),r=mr(t.converter,e),i=Tn(An(t.firestore),"addDoc",n._key,r,null!==n.converter,{})
return We(Qe(t.firestore),[i.toMutation(n._key,we.exists(!1))]).then((()=>n))}function Sr(t){const e=X(t.firestore,Ze),n=Qe(e),r=new gr(e)
return new sn(t,n,r).run()}function Ir(t,e){return fn(t.query,e.query)&&(0,o.vZ)(t.data(),e.data())}function Ar(){return new Dn("deleteField")}function Tr(){return new Nn("serverTimestamp")}function Dr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return new Cn("arrayUnion",e)}function kr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return new Vn("arrayRemove",e)}function Nr(t){return new Ln("increment",t)}class Cr{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=An(t)}set(t,e,n){this._verifyNotCommitted()
const r=Vr(t,this._firestore),i=mr(r.converter,e,n),s=Tn(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n)
return this._mutations.push(s.toMutation(r._key,we.none())),this}update(t,e,n){this._verifyNotCommitted()
const r=Vr(t,this._firestore)
let i
for(var s=arguments.length,a=new Array(s>3?s-3:0),u=3;u<s;u++)a[u-3]=arguments[u]
return i="string"==typeof(e=(0,o.m9)(e))||e instanceof mn?Rn(this._dataReader,"WriteBatch.update",r._key,e,n,a):On(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(i.toMutation(r._key,we.exists(!0))),this}delete(t){this._verifyNotCommitted()
const e=Vr(t,this._firestore)
return this._mutations=this._mutations.concat(new Ee(e._key,we.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(T,"A write batch can no longer be used after commit() has been called.")}}function Vr(t,e){if((t=(0,o.m9)(t)).firestore!==e)throw new L(_,"Provided document reference is from a different Firestore instance.")
return t}function Lr(t){const e=Qe(t=X(t,Ze))
return new Cr(t,(t=>We(e,t)))}class Or{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new L(_,"Firestore transactions require all reads to be executed before all writes.")
const e=await Ke(this.datastore,t)
return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ee(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError
const t=this.readVersions
this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=G.fromPath(e)
this.mutations.push(new Se(n,this.precondition(n)))})),await We(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e
if(t.isFoundDocument())e=t.version
else{if(!t.isNoDocument())throw m()
e=ft.min()}const n=this.readVersions.get(t.key.toString())
if(n){if(!e.isEqual(n))throw new L(D,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString())
return!this.writtenDocs.has(t.toString())&&e?e.isEqual(ft.min())?we.exists(!1):we.updateTime(e):we.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString())
if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(ft.min()))throw new L(_,"Can't update a document that doesn't exist.")
return we.updateTime(e)}return we.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}const Rr={maxAttempts:5}
class Fr{constructor(t,e,n,r,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=i,this.Rt=n.maxAttempts,this.Pt=new ze(this.asyncQueue,"transaction_retry")}run(){this.Rt-=1,this.Vt()}Vt(){this.Pt.J((async()=>{const t=new Or(this.datastore),e=this.Nt(t)
e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Dt(t)}))))})).catch((t=>{this.Dt(t)}))}))}Nt(t){try{const e=this.updateFunction(t)
return!et(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Dt(t){this.Rt>0&&this.$t(t)?(this.Rt-=1,this.asyncQueue.enqueueAndForget((()=>(this.Vt(),Promise.resolve())))):this.deferred.reject(t)}$t(t){if("FirebaseError"===t.name){const e=t.code
return"aborted"===e||"failed-precondition"===e||!function(t){switch(t){default:return m()
case w:case v:case b:case A:case C:case V:case I:return!1
case _:case E:case"already-exists":case S:case T:case D:case k:case N:case"data-loss":return!0}}(e)}return!1}}function Pr(){return"undefined"!=typeof document?document:null}class xr{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new O,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new xr(t,e,s,r,i)
return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(w,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class Br{constructor(){this.xt=Promise.resolve(),this.Ft=[],this.St=!1,this.qt=[],this.Ot=null,this.kt=!1,this.Ct=!1,this.Lt=[],this.Pt=new ze(this,"async_queue_retry"),this.Mt=()=>{const t=Pr()
t&&h("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Pt.Z()}
const t=Pr()
t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Mt)}get isShuttingDown(){return this.St}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ut(),this.jt(t)}enterRestrictedMode(t){if(!this.St){this.St=!0,this.Ct=t||!1
const e=Pr()
e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Mt)}}enqueue(t){if(this.Ut(),this.St)return new Promise((()=>{}))
const e=new O
return this.jt((()=>this.St&&this.Ct?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ft.push(t),this.Bt())))}async Bt(){if(0!==this.Ft.length){try{await this.Ft[0](),this.Ft.shift(),this.Pt.reset()}catch(t){if(!function(t){return"IndexedDbTransactionError"===t.name}(t))throw t
h("AsyncQueue","Operation failed with retryable error: "+t)}this.Ft.length>0&&this.Pt.J((()=>this.Bt()))}}jt(t){const e=this.xt.then((()=>(this.kt=!0,t().catch((t=>{this.Ot=t,this.kt=!1
const e=function(t){let e=t.message||""
return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)
throw d("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.kt=!1,t))))))
return this.xt=e,e}enqueueAfterDelay(t,e,n){this.Ut(),this.Lt.indexOf(t)>-1&&(e=0)
const r=xr.createAndSchedule(this,t,e,n,(t=>this.Qt(t)))
return this.qt.push(r),r}Ut(){this.Ot&&m()}verifyOperationInProgress(){}async zt(){let t
do{t=this.xt,await t}while(t!==this.xt)}Gt(t){for(const e of this.qt)if(e.timerId===t)return!0
return!1}Wt(t){return this.zt().then((()=>{this.qt.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs))
for(const e of this.qt)if(e.skipDelay(),"all"!==t&&e.timerId===t)break
return this.zt()}))}Kt(t){this.Lt.push(t)}Qt(t){const e=this.qt.indexOf(t)
this.qt.splice(e,1)}}class Mr{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=An(t)}get(t){const e=Vr(t,this._firestore),n=new gr(this._firestore)
return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return m()
const r=t[0]
if(r.isFoundDocument())return new Hn(this._firestore,n,r.key,r,e.converter)
if(r.isNoDocument())return new Hn(this._firestore,n,e._key,null,e.converter)
throw m()}))}set(t,e,n){const r=Vr(t,this._firestore),i=mr(r.converter,e,n),s=Tn(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n)
return this._transaction.set(r._key,s),this}update(t,e,n){const r=Vr(t,this._firestore)
let i
for(var s=arguments.length,a=new Array(s>3?s-3:0),u=3;u<s;u++)a[u-3]=arguments[u]
return i="string"==typeof(e=(0,o.m9)(e))||e instanceof mn?Rn(this._dataReader,"Transaction.update",r._key,e,n,a):On(this._dataReader,"Transaction.update",r._key,e),this._transaction.update(r._key,i),this}delete(t){const e=Vr(t,this._firestore)
return this._transaction.delete(e._key),this}}function qr(t,e,n){const r=Qe(t=X(t,Ze)),i=Object.assign(Object.assign({},Rr),n)
!function(t){if(t.maxAttempts<1)throw new L(_,"Max attempts must be at least 1")}(i)
const s=new O
return new Fr(new Br,r,i,(n=>e(new Mr(t,n))),s).run(),s.promise}var $r
$r=`${r.Jn}_lite`,u=$r,(0,r.Xd)(new i.wA("firestore/lite",((t,e)=>{let{instanceIdentifier:n,options:r}=e
const i=t.getProvider("app").getImmediate(),s=new Ze(new x(t.getProvider("auth-internal")),new $(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(_,'"projectId" not provided in firebase.initializeApp.')
return new j(t.options.projectId,e)}(i,n),i)
return r&&s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)("firestore-lite","3.7.2",""),(0,r.KN)("firestore-lite","3.7.2","esm2017")},549:(t,e,n)=>{n.d(e,{ZR:()=>s.ZR,Jn:()=>x,l4:()=>A,H9:()=>N,Vr:()=>C,Af:()=>D,Z8:()=>R,lz:()=>k,qX:()=>L,Xd:()=>V,wN:()=>O,P2:()=>$,Mq:()=>M,C6:()=>q,ZF:()=>B,TP:()=>j,KN:()=>U,Ub:()=>z})
var r=n(619),i=n(923),s=n(447)
let o,a
const u=new WeakMap,l=new WeakMap,c=new WeakMap,h=new WeakMap,d=new WeakMap
let f={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return l.get(t)
if("objectStoreNames"===e)return t.objectStoreNames||c.get(t)
if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}
function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(p(t.result)),r()},s=()=>{n(t.error),r()}
t.addEventListener("success",i),t.addEventListener("error",s)}))
return e.then((e=>{e instanceof IDBCursor&&u.set(e,t)})).catch((()=>{})),d.set(e,t),e}(t)
if(h.has(t))return h.get(t)
const e=function(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(m(this),n),p(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return p(e.apply(m(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
const s=e.call(m(this),t,...r)
return c.set(s,t.sort?t.sort():[t]),p(s)}:(t instanceof IDBTransaction&&function(t){if(l.has(t))return
const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()}
t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}))
l.set(t,e)}(t),n=t,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>n instanceof t))?new Proxy(t,f):t)
var e,n}(t)
return e!==t&&(h.set(t,e),d.set(e,t)),e}const m=t=>d.get(t),g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],w=new Map
function v(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return
if(w.get(e))return w.get(e)
const n=e.replace(/FromIndex$/,""),r=e!==n,i=y.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!g.includes(n))return
const s=async function(t){const e=this.transaction(t,i?"readwrite":"readonly")
let s=e.store
for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u]
return r&&(s=s.index(a.shift())),(await Promise.all([s[n](...a),i&&e.done]))[0]}
return w.set(e,s),s}var _
_=f,f={..._,get:(t,e,n)=>v(t,e)||_.get(t,e,n),has:(t,e)=>!!v(t,e)||_.has(t,e)}
class b{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent()
return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate()
return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const E="@firebase/app",S="0.8.3",I=new i.Yd("@firebase/app"),A="[DEFAULT]",T={[E]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},D=new Map,k=new Map
function N(t,e){try{t.container.addComponent(e)}catch(n){I.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function C(t,e){t.container.addOrOverwriteComponent(e)}function V(t){const e=t.name
if(k.has(e))return I.debug(`There were multiple attempts to register component ${e}.`),!1
k.set(e,t)
for(const n of D.values())N(n,t)
return!0}function L(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0})
return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function O(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:A
L(t,e).clearInstance(n)}function R(){k.clear()}const F=new s.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."})
class P{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw F.create("app-deleted",{appName:this._name})}}const x="9.13.0"
function B(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t
"object"!=typeof e&&(e={name:e})
const i=Object.assign({name:A,automaticDataCollectionEnabled:!1},e),o=i.name
if("string"!=typeof o||!o)throw F.create("bad-app-name",{appName:String(o)})
if(n||(n=(0,s.aH)()),!n)throw F.create("no-options")
const a=D.get(o)
if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a
throw F.create("duplicate-app",{appName:o})}const u=new r.H0(o)
for(const r of k.values())u.addComponent(r)
const l=new P(n,i,u)
return D.set(o,l),l}function M(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A
const e=D.get(t)
if(!e&&t===A)return B()
if(!e)throw F.create("no-app",{appName:t})
return e}function q(){return Array.from(D.values())}async function $(t){const e=t.name
D.has(e)&&(D.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function U(t,e,n){var i
let s=null!==(i=T[t])&&void 0!==i?i:t
n&&(s+=`-${n}`)
const o=s.match(/\s|\//),a=e.match(/\s|\//)
if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`]
return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void I.warn(t.join(" "))}V(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}function j(t,e){if(null!==t&&"function"!=typeof t)throw F.create("invalid-log-argument");(0,i.Am)(t,e)}function z(t){(0,i.Ub)(t)}const H="firebase-heartbeat-store"
let W=null
function K(){return W||(W=function(t,e){let{blocked:n,upgrade:r,blocking:i,terminated:s}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const o=indexedDB.open(t,e),a=p(o)
return r&&o.addEventListener("upgradeneeded",(t=>{r(p(o.result),t.oldVersion,t.newVersion,p(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(H)}}).catch((t=>{throw F.create("idb-open",{originalErrorMessage:t.message})}))),W}async function G(t,e){var n
try{const n=(await K()).transaction(H,"readwrite"),r=n.objectStore(H)
return await r.put(e,Q(t)),n.done}catch(t){if(t instanceof s.ZR)I.warn(t.message)
else{const e=F.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})
I.warn(e.message)}}}function Q(t){return`${t.name}!${t.options.appId}`}class Y{constructor(t){this.container=t,this._heartbeatsCache=null
const e=this.container.getProvider("app").getImmediate()
this._storage=new J(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Z()
if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf()
return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return""
const t=Z(),{heartbeatsToSend:e,unsentEntries:n}=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024
const n=[]
let r=t.slice()
for(const i of t){const t=n.find((t=>t.agent===i.agent))
if(t){if(t.dates.push(i.date),X(n)>e){t.dates.pop()
break}}else if(n.push({agent:i.agent,dates:[i.date]}),X(n)>e){n.pop()
break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}))
return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Z(){return(new Date).toISOString().substring(0,10)}class J{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){return await this._canUseIndexedDBPromise&&await async function(t){var e
try{return(await K()).transaction(H).objectStore(H).get(Q(t))}catch(t){if(t instanceof s.ZR)I.warn(t.message)
else{const n=F.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})
I.warn(n.message)}}}(this.app)||{heartbeats:[]}}async overwrite(t){var e
if(await this._canUseIndexedDBPromise){const n=await this.read()
return G(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e
if(await this._canUseIndexedDBPromise){const n=await this.read()
return G(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function X(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}V(new r.wA("platform-logger",(t=>new b(t)),"PRIVATE")),V(new r.wA("heartbeat",(t=>new Y(t)),"PRIVATE")),U(E,S,""),U(E,S,"esm2017"),U("fire-js","")},619:(t,e,n)=>{n.d(e,{H0:()=>a,wA:()=>i})
var r=n(447)
class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}const s="[DEFAULT]"
class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t)
if(!this.instancesDeferred.has(e)){const n=new r.BH
if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:e})
t&&n.resolve(t)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e
const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e
if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null
throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null
throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`)
if(this.component)throw Error(`Component for ${this.name} has already been provided`)
if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e)
try{const t=this.getOrInitializeService({instanceIdentifier:r})
n.resolve(t)}catch(t){}}}}clearInstance(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s
this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values())
await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s
return this.instances.has(t)}getOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s
return this.instancesOptions.get(t)||{}}initialize(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier)
if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`)
if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`)
const r=this.getOrInitializeService({instanceIdentifier:n,options:e})
for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)
return r}onInit(t,e){var n
const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set
i.add(t),this.onInitCallbacks.set(r,i)
const s=this.instances.get(r)
return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e)
if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService(t){let{instanceIdentifier:e,options:n={}}=t,r=this.instances.get(e)
if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===s?void 0:i),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(t){}var i
return r||null}normalizeInstanceIdentifier(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s
return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name)
if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`)
e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t)
const e=new o(t,this)
return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},923:(t,e,n)=>{n.d(e,{Am:()=>h,Ub:()=>c,Yd:()=>l,in:()=>i})
const r=[]
var i
!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(i||(i={}))
const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=function(t,e){if(e<t.logLevel)return
const n=(new Date).toISOString(),r=a[e]
if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
for(var i=arguments.length,s=new Array(i>2?i-2:0),o=2;o<i;o++)s[o-2]=arguments[o]
console[r](`[${n}]  ${t.name}:`,...s)}
class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``)
this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function")
this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function c(t){r.forEach((e=>{e.setLogLevel(t)}))}function h(t,e){for(const n of r){let r=null
e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:function(e,n){for(var s=arguments.length,o=new Array(s>2?s-2:0),a=2;a<s;a++)o[a-2]=arguments[a]
const u=o.map((t=>{if(null==t)return null
if("string"==typeof t)return t
if("number"==typeof t||"boolean"==typeof t)return t.toString()
if(t instanceof Error)return t.message
try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ")
n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:u,args:o,type:e.name})}}}}}])
