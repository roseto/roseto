/**
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
 */const Ee=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Ue=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=t[n++];e[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=t[n++],i=t[n++],c=t[n++],a=((o&7)<<18|(s&63)<<12|(i&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],i=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|i&63)}}return e.join("")},q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const s=t[o],i=o+1<t.length,c=i?t[o+1]:0,a=o+2<t.length,h=a?t[o+2]:0,v=s>>2,u=(s&3)<<4|c>>4;let S=(c&15)<<2|h>>6,k=h&63;a||(k=64,i||(S=64)),r.push(n[v],n[u],n[S],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ee(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ue(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const s=n[t.charAt(o++)],c=o<t.length?n[t.charAt(o)]:0;++o;const h=o<t.length?n[t.charAt(o)]:64;++o;const u=o<t.length?n[t.charAt(o)]:64;if(++o,s==null||c==null||h==null||u==null)throw new Ve;const S=s<<2|c>>4;if(r.push(S),h!==64){const k=c<<4&240|h>>2;if(r.push(k),u!==64){const ze=h<<6&192|u;r.push(ze)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ve extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const We=function(t){const e=Ee(t);return q.encodeByteArray(e,!0)},_e=function(t){return We(t).replace(/\./g,"")},Ke=function(t){try{return q.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ve(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ge=()=>ve().__FIREBASE_DEFAULTS__,qe=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xe=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ke(t[1]);return e&&JSON.parse(e)},X=()=>{try{return Ge()||qe()||Xe()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sr=t=>{var e,n;return(n=(e=X())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},we=()=>{var t;return(t=X())===null||t===void 0?void 0:t.config},ir=t=>{var e;return(e=X())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ar(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function cr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hr(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y(){try{return typeof indexedDB=="object"}catch{return!1}}function Ye(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;e(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Je="FirebaseError";class C extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Je,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J.prototype.create)}}class J{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,s=this.errors[e],i=s?Qe(s,r):"Error",c=`${this.serviceName}: ${i} (${o}).`;return new C(o,c,r)}}function Qe(t,e){return t.replace(Ze,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Ze=/\{\$([^}]+)}/g;function dr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const s=t[o],i=e[o];if(oe(s)&&oe(i)){if(!F(s,i))return!1}else if(s!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function oe(t){return t!==null&&typeof t=="object"}/**
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
 */function ur(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fr(t,e){const n=new et(t,e);return n.subscribe.bind(n)}class et{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tt(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=P),o.error===void 0&&(o.error=P),o.complete===void 0&&(o.complete=P);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tt(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function P(){}/**
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
 */const nt=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const rt=1e3,ot=2,st=4*60*60*1e3,it=.5;function at(t,e=rt,n=ot){const r=e*Math.pow(n,t),o=Math.round(it*r*(Math.random()-.5)*2);return Math.min(st,r+o)}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class _{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const m="[DEFAULT]";/**
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
 */class lt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new y;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),o=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dt(e))try{this.getOrInitializeService({instanceIdentifier:m})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(e=m){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=m){return this.instances.has(e)}getOptions(e=m){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&i.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(o,s);const i=this.instances.get(o);return i&&e(i,o),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ht(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=m){return this.component?this.component.multipleInstances?e:m:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ht(t){return t===m?void 0:t}function dt(t){return t.instantiationMode==="EAGER"}/**
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
 */class ut{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var l;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(l||(l={}));const ft={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},pt=l.INFO,gt={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},mt=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=gt[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ae{constructor(e){this.name=e,this._logLevel=pt,this._logHandler=mt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ft[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...e),this._logHandler(this,l.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...e),this._logHandler(this,l.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l.INFO,...e),this._logHandler(this,l.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l.WARN,...e),this._logHandler(this,l.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...e),this._logHandler(this,l.ERROR,...e)}}const bt=(t,e)=>e.some(n=>t instanceof n);let se,ie;function Et(){return se||(se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _t(){return ie||(ie=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ie=new WeakMap,j=new WeakMap,Te=new WeakMap,M=new WeakMap,Q=new WeakMap;function vt(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{n(p(t.result)),o()},i=()=>{r(t.error),o()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Ie.set(n,t)}).catch(()=>{}),Q.set(e,t),e}function wt(t){if(j.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{n(),o()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});j.set(t,e)}let z={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return j.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Te.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yt(t){z=t(z)}function At(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(N(this),e,...n);return Te.set(r,e.sort?e.sort():[e]),p(r)}:_t().includes(t)?function(...e){return t.apply(N(this),e),p(Ie.get(this))}:function(...e){return p(t.apply(N(this),e))}}function It(t){return typeof t=="function"?At(t):(t instanceof IDBTransaction&&wt(t),bt(t,Et())?new Proxy(t,z):t)}function p(t){if(t instanceof IDBRequest)return vt(t);if(M.has(t))return M.get(t);const e=It(t);return e!==t&&(M.set(t,e),Q.set(e,t)),e}const N=t=>Q.get(t);function Tt(t,e,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(t,e),c=p(i);return r&&i.addEventListener("upgradeneeded",a=>{r(p(i.result),a.oldVersion,a.newVersion,p(i.transaction),a)}),n&&i.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),o&&a.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Dt=["get","getKey","getAll","getAllKeys","count"],Ct=["put","add","delete","clear"],$=new Map;function ae(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($.get(e))return $.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Ct.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Dt.includes(n)))return;const s=async function(i,...c){const a=this.transaction(i,o?"readwrite":"readonly");let h=a.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),o&&a.done]))[0]};return $.set(e,s),s}yt(t=>({...t,get:(e,n,r)=>ae(e,n)||t.get(e,n,r),has:(e,n)=>!!ae(e,n)||t.has(e,n)}));/**
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
 */class St{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kt(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kt(t){const e=t.getComponent();return e?.type==="VERSION"}const U="@firebase/app",ce="0.9.15";/**
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
 */const b=new Ae("@firebase/app"),Ot="@firebase/app-compat",Rt="@firebase/analytics-compat",Bt="@firebase/analytics",xt="@firebase/app-check-compat",Pt="@firebase/app-check",Mt="@firebase/auth",Nt="@firebase/auth-compat",$t="@firebase/database",Lt="@firebase/database-compat",Ht="@firebase/functions",Ft="@firebase/functions-compat",jt="@firebase/installations",zt="@firebase/installations-compat",Ut="@firebase/messaging",Vt="@firebase/messaging-compat",Wt="@firebase/performance",Kt="@firebase/performance-compat",Gt="@firebase/remote-config",qt="@firebase/remote-config-compat",Xt="@firebase/storage",Yt="@firebase/storage-compat",Jt="@firebase/firestore",Qt="@firebase/firestore-compat",Zt="firebase",en="10.1.0";/**
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
 */const V="[DEFAULT]",tn={[U]:"fire-core",[Ot]:"fire-core-compat",[Bt]:"fire-analytics",[Rt]:"fire-analytics-compat",[Pt]:"fire-app-check",[xt]:"fire-app-check-compat",[Mt]:"fire-auth",[Nt]:"fire-auth-compat",[$t]:"fire-rtdb",[Lt]:"fire-rtdb-compat",[Ht]:"fire-fn",[Ft]:"fire-fn-compat",[jt]:"fire-iid",[zt]:"fire-iid-compat",[Ut]:"fire-fcm",[Vt]:"fire-fcm-compat",[Wt]:"fire-perf",[Kt]:"fire-perf-compat",[Gt]:"fire-rc",[qt]:"fire-rc-compat",[Xt]:"fire-gcs",[Yt]:"fire-gcs-compat",[Jt]:"fire-fst",[Qt]:"fire-fst-compat","fire-js":"fire-js",[Zt]:"fire-js-all"};/**
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
 */const B=new Map,W=new Map;function nn(t,e){try{t.container.addComponent(e)}catch(n){b.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function A(t){const e=t.name;if(W.has(e))return b.debug(`There were multiple attempts to register component ${e}.`),!1;W.set(e,t);for(const n of B.values())nn(n,t);return!0}function De(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const rn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},g=new J("app","Firebase",rn);/**
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
 */class on{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw g.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=en;function Ce(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:V,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw g.create("bad-app-name",{appName:String(o)});if(n||(n=we()),!n)throw g.create("no-options");const s=B.get(o);if(s){if(F(n,s.options)&&F(r,s.config))return s;throw g.create("duplicate-app",{appName:o})}const i=new ut(o);for(const a of W.values())i.addComponent(a);const c=new on(n,r,i);return B.set(o,c),c}function sn(t=V){const e=B.get(t);if(!e&&t===V&&we())return Ce();if(!e)throw g.create("no-app",{appName:t});return e}function w(t,e,n){var r;let o=(r=tn[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const c=[`Unable to register library "${o}" with version "${e}":`];s&&c.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),b.warn(c.join(" "));return}A(new _(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const an="firebase-heartbeat-database",cn=1,I="firebase-heartbeat-store";let L=null;function Se(){return L||(L=Tt(an,cn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(I)}}}).catch(t=>{throw g.create("idb-open",{originalErrorMessage:t.message})})),L}async function ln(t){try{return await(await Se()).transaction(I).objectStore(I).get(ke(t))}catch(e){if(e instanceof C)b.warn(e.message);else{const n=g.create("idb-get",{originalErrorMessage:e?.message});b.warn(n.message)}}}async function le(t,e){try{const r=(await Se()).transaction(I,"readwrite");await r.objectStore(I).put(e,ke(t)),await r.done}catch(n){if(n instanceof C)b.warn(n.message);else{const r=g.create("idb-set",{originalErrorMessage:n?.message});b.warn(r.message)}}}function ke(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hn=1024,dn=30*24*60*60*1e3;class un{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=he();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=dn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=he(),{heartbeatsToSend:n,unsentEntries:r}=fn(this._heartbeatsCache.heartbeats),o=_e(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function he(){return new Date().toISOString().substring(0,10)}function fn(t,e=hn){const n=[];let r=t.slice();for(const o of t){const s=n.find(i=>i.agent===o.agent);if(s){if(s.dates.push(o.date),de(n)>e){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),de(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y()?Ye().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ln(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return le(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return le(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function de(t){return _e(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gn(t){A(new _("platform-logger",e=>new St(e),"PRIVATE")),A(new _("heartbeat",e=>new un(e),"PRIVATE")),w(U,ce,t),w(U,ce,"esm2017"),w("fire-js","")}gn("");var mn="firebase",bn="10.1.0";/**
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
 */w(mn,bn,"app");/**
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
 */const K=new Map,Oe={activated:!1,tokenObservers:[]},En={initialized:!1,enabled:!1};function d(t){return K.get(t)||Object.assign({},Oe)}function _n(t,e){return K.set(t,e),K.get(t)}function x(){return En}/**
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
 */const Re="https://content-firebaseappcheck.googleapis.com/v1",vn="exchangeRecaptchaV3Token",wn="exchangeDebugToken",ue={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},yn=24*60*60*1e3;/**
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
 */class An{constructor(e,n,r,o,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=o,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=o,o>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new y,await In(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new y,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function In(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const Tn={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},f=new J("appCheck","AppCheck",Tn);/**
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
 */function fe(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function Z(t){if(!d(t).activated)throw f.create("use-before-activation",{appName:t.name})}function Be(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),o=Math.floor((e-n*3600*24-r*3600)/60),s=e-n*3600*24-r*3600-o*60;let i="";return n&&(i+=O(n)+"d:"),r&&(i+=O(r)+"h:"),i+=O(o)+"m:"+O(s)+"s",i}function O(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function ee({url:t,body:e},n){const r={"Content-Type":"application/json"},o=n.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&(r["X-Firebase-Client"]=u)}const s={method:"POST",body:JSON.stringify(e),headers:r};let i;try{i=await fetch(t,s)}catch(u){throw f.create("fetch-network-error",{originalErrorMessage:u?.message})}if(i.status!==200)throw f.create("fetch-status-error",{httpStatus:i.status});let c;try{c=await i.json()}catch(u){throw f.create("fetch-parse-error",{originalErrorMessage:u?.message})}const a=c.ttl.match(/^([\d.]+)(s)$/);if(!a||!a[2]||isNaN(Number(a[1])))throw f.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const h=Number(a[1])*1e3,v=Date.now();return{token:c.token,expireTimeMillis:v+h,issuedAtTimeMillis:v}}function Dn(t,e){const{projectId:n,appId:r,apiKey:o}=t.options;return{url:`${Re}/projects/${n}/apps/${r}:${vn}?key=${o}`,body:{recaptcha_v3_token:e}}}function xe(t,e){const{projectId:n,appId:r,apiKey:o}=t.options;return{url:`${Re}/projects/${n}/apps/${r}:${wn}?key=${o}`,body:{debug_token:e}}}/**
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
 */const Cn="firebase-app-check-database",Sn=1,T="firebase-app-check-store",Pe="debug-token";let R=null;function Me(){return R||(R=new Promise((t,e)=>{try{const n=indexedDB.open(Cn,Sn);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var o;e(f.create("storage-open",{originalErrorMessage:(o=r.target.error)===null||o===void 0?void 0:o.message}))},n.onupgradeneeded=r=>{const o=r.target.result;switch(r.oldVersion){case 0:o.createObjectStore(T,{keyPath:"compositeKey"})}}}catch(n){e(f.create("storage-open",{originalErrorMessage:n?.message}))}}),R)}function kn(t){return $e(Le(t))}function On(t,e){return Ne(Le(t),e)}function Rn(t){return Ne(Pe,t)}function Bn(){return $e(Pe)}async function Ne(t,e){const r=(await Me()).transaction(T,"readwrite"),s=r.objectStore(T).put({compositeKey:t,value:e});return new Promise((i,c)=>{s.onsuccess=a=>{i()},r.onerror=a=>{var h;c(f.create("storage-set",{originalErrorMessage:(h=a.target.error)===null||h===void 0?void 0:h.message}))}})}async function $e(t){const n=(await Me()).transaction(T,"readonly"),o=n.objectStore(T).get(t);return new Promise((s,i)=>{o.onsuccess=c=>{const a=c.target.result;s(a?a.value:void 0)},n.onerror=c=>{var a;i(f.create("storage-get",{originalErrorMessage:(a=c.target.error)===null||a===void 0?void 0:a.message}))}})}function Le(t){return`${t.options.appId}-${t.name}`}/**
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
 */const D=new Ae("@firebase/app-check");/**
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
 */async function xn(t){if(Y()){let e;try{e=await kn(t)}catch(n){D.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function H(t,e){return Y()?On(t,e).catch(n=>{D.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function Pn(){let t;try{t=await Bn()}catch{}if(t)return t;{const e=nt();return Rn(e).catch(n=>D.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function te(){return x().enabled}async function ne(){const t=x();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Mn(){const t=ve(),e=x();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new y;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Pn())}/**
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
 */const Nn={error:"UNKNOWN_ERROR"};function $n(t){return q.encodeString(JSON.stringify(t),!1)}async function G(t,e=!1){const n=t.app;Z(n);const r=d(n);let o=r.token,s;if(o&&!E(o)&&(r.token=void 0,o=void 0),!o){const a=await r.cachedTokenPromise;a&&(E(a)?o=a:await H(n,void 0))}if(!e&&o&&E(o))return{token:o.token};let i=!1;if(te()){r.exchangeTokenPromise||(r.exchangeTokenPromise=ee(xe(n,await ne()),t.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),i=!0);const a=await r.exchangeTokenPromise;return await H(n,a),r.token=a,{token:a.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),i=!0),o=await d(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?D.warn(a.message):D.error(a),s=a}let c;return o?s?E(o)?c={token:o.token,internalError:s}:c=ge(s):(c={token:o.token},r.token=o,await H(n,o)):c=ge(s),i&&je(n,c),c}async function Ln(t){const e=t.app;Z(e);const{provider:n}=d(e);if(te()){const r=await ne(),{token:o}=await ee(xe(e,r),t.heartbeatServiceProvider);return{token:o}}else{const{token:r}=await n.getToken();return{token:r}}}function He(t,e,n,r){const{app:o}=t,s=d(o),i={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,i],s.token&&E(s.token)){const c=s.token;Promise.resolve().then(()=>{n({token:c.token}),pe(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>pe(t))}function Fe(t,e){const n=d(t),r=n.tokenObservers.filter(o=>o.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function pe(t){const{app:e}=t,n=d(e);let r=n.tokenRefresher;r||(r=Hn(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Hn(t){const{app:e}=t;return new An(async()=>{const n=d(e);let r;if(n.token?r=await G(t,!0):r=await G(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=d(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const o=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,o),Math.max(0,r-Date.now())}else return 0},ue.RETRIAL_MIN_WAIT,ue.RETRIAL_MAX_WAIT)}function je(t,e){const n=d(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function E(t){return t.expireTimeMillis-Date.now()>0}function ge(t){return{token:$n(Nn),error:t}}/**
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
 */class Fn{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=d(this.app);for(const n of e)Fe(this.app,n.next);return Promise.resolve()}}function jn(t,e){return new Fn(t,e)}function zn(t){return{getToken:e=>G(t,e),getLimitedUseToken:()=>Ln(t),addTokenListener:e=>He(t,"INTERNAL",e),removeTokenListener:e=>Fe(t.app,e)}}const Un="@firebase/app-check",Vn="0.8.0";/**
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
 */const Wn="https://www.google.com/recaptcha/api.js";function Kn(t,e){const n=new y,r=d(t);r.reCAPTCHAState={initialized:n};const o=Gn(t),s=fe(!1);return s?me(t,e,s,o,n):Yn(()=>{const i=fe(!1);if(!i)throw new Error("no recaptcha");me(t,e,i,o,n)}),n.promise}function me(t,e,n,r,o){n.ready(()=>{Xn(t,e,n,r),o.resolve(n)})}function Gn(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function qn(t){Z(t);const n=await d(t).reCAPTCHAState.initialized.promise;return new Promise((r,o)=>{const s=d(t).reCAPTCHAState;n.ready(()=>{r(n.execute(s.widgetId,{action:"fire_app_check"}))})})}function Xn(t,e,n,r){const o=n.render(r,{sitekey:e,size:"invisible",callback:()=>{d(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{d(t).reCAPTCHAState.succeeded=!1}}),s=d(t);s.reCAPTCHAState=Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:o})}function Yn(t){const e=document.createElement("script");e.src=Wn,e.onload=t,document.head.appendChild(e)}/**
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
 */class re{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;Qn(this._throttleData);const o=await qn(this._app).catch(i=>{throw f.create("recaptcha-error")});if(!(!((e=d(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw f.create("recaptcha-error");let s;try{s=await ee(Dn(this._app,o),this._heartbeatServiceProvider)}catch(i){throw!((n=i.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=Jn(Number((r=i.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),f.create("throttled",{time:Be(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=De(e,"heartbeat"),Kn(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof re?this._siteKey===e._siteKey:!1}}function Jn(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+yn,httpStatus:t};{const n=e?e.backoffCount:0,r=at(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function Qn(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw f.create("throttled",{time:Be(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function Zn(t=sn(),e){t=ct(t);const n=De(t,"app-check");if(x().initialized||Mn(),te()&&ne().then(o=>console.log(`App Check debug token: ${o}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const o=n.getImmediate(),s=n.getOptions();if(s.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&s.provider.isEqual(e.provider))return o;throw f.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return er(t,e.provider,e.isTokenAutoRefreshEnabled),d(t).isTokenAutoRefreshEnabled&&He(r,"INTERNAL",()=>{}),r}function er(t,e,n){const r=_n(t,Object.assign({},Oe));r.activated=!0,r.provider=e,r.cachedTokenPromise=xn(t).then(o=>(o&&E(o)&&(r.token=o,je(t,{token:o.token})),o)),r.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,r.provider.initialize(t)}const tr="app-check",be="app-check-internal";function nr(){A(new _(tr,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return jn(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(be).initialize()})),A(new _(be,t=>{const e=t.getProvider("app-check").getImmediate();return zn(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),w(Un,Vn)}nr();const rr={apiKey:"AIzaSyAFo1Srete0yGbKOVHJB0whtwhYiUH3arQ",authDomain:"auth.roseto.space",projectId:"rosetodotspace",storageBucket:"rosetodotspace.appspot.com",messagingSenderId:"420637582866",appId:"1:420637582866:web:7264f4dc54b65261311acb"},or=Ce(rr),gr=()=>{Zn(or,{provider:new re("6LcfD7snAAAAAEyEd6WPYLIBk5hJiTTu29tgDd0J")})};export{_ as C,J as E,C as F,l as L,pr as S,A as _,ar as a,lr as b,De as c,sr as d,sn as e,cr as f,ir as g,ct as h,gr as i,fr as j,F as k,ye as l,Ae as m,hr as n,Ke as o,dr as p,ur as q,w as r,or as s};
