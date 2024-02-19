var ah=Object.defineProperty;var oh=(r,i,t)=>i in r?ah(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t;var rt=(r,i,t)=>(oh(r,typeof i!="symbol"?i+"":i,t),t);import{i as U0,t as Ga,e as Y0,w as q0,j as Ka,x as j0,n as sh,r as G0,a as z,T as he,b as K0,_ as lh}from"./indexhtml-sLPHwCpt.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(r,i){return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let hh=/(url\()([^)]*)(\))/g,ch=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ze,ut;function ke(r,i){if(r&&ch.test(r)||r==="//")return r;if(Ze===void 0){Ze=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",Ze=t.href==="http://a/c%20d"}catch{}}if(i||(i=document.baseURI||window.location.href),Ze)try{return new URL(r,i).href}catch{return r}return ut||(ut=document.implementation.createHTMLDocument("temp"),ut.base=ut.createElement("base"),ut.head.appendChild(ut.base),ut.anchor=ut.createElement("a"),ut.body.appendChild(ut.anchor)),ut.base.href=i,ut.anchor.href=r,ut.anchor.href||r}function Qa(r,i){return r.replace(hh,function(t,e,n,a){return e+"'"+ke(n.replace(/["']/g,""),i)+"'"+a})}function Xa(r){return r.substring(0,r.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Q0=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const dh=Q0&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const r=new CSSStyleSheet;r.replaceSync("");const i=document.createElement("div");return i.attachShadow({mode:"open"}),i.shadowRoot.adoptedStyleSheets=[r],i.shadowRoot.adoptedStyleSheets[0]===r}catch{return!1}})();let uh=window.Polymer&&window.Polymer.rootPath||Xa(document.baseURI||window.location.href),Wi=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Le=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ph=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,X0=window.Polymer&&window.Polymer.legacyOptimizations||!1,Z0=window.Polymer&&window.Polymer.legacyWarnings||!1,fh=window.Polymer&&window.Polymer.syncInitialRender||!1,mn=window.Polymer&&window.Polymer.legacyUndefined||!1,vh=window.Polymer&&window.Polymer.orderedComputed||!1,$o=window.Polymer&&window.Polymer.removeNestedTemplates||!1,J0=window.Polymer&&window.Polymer.fastDomIf||!1,gn=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let _h=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let mh=0;const j=function(r){let i=r.__mixinApplications;i||(i=new WeakMap,r.__mixinApplications=i);let t=mh++;function e(n){let a=n.__mixinSet;if(a&&a[t])return n;let o=i,s=o.get(n);if(!s){s=r(n),o.set(n,s);let l=Object.create(s.__mixinSet||a||null);l[t]=!0,s.__mixinSet=l}return s}return e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Za={},t1={};function Lo(r,i){Za[r]=t1[r.toLowerCase()]=i}function Fo(r){return Za[r]||t1[r.toLowerCase()]}function gh(r){r.querySelector("style")&&console.warn("dom-module %s has style outside template",r.id)}class ce extends HTMLElement{static get observedAttributes(){return["id"]}static import(i,t){if(i){let e=Fo(i);return e&&t?e.querySelector(t):e}return null}attributeChangedCallback(i,t,e,n){t!==e&&this.register()}get assetpath(){if(!this.__assetpath){const i=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=ke(this.getAttribute("assetpath")||"",i.baseURI);this.__assetpath=Xa(t)}return this.__assetpath}register(i){if(i=i||this.id,i){if(Le&&Fo(i)!==void 0)throw Lo(i,null),new Error(`strictTemplatePolicy: dom-module ${i} re-registered`);this.id=i,Lo(i,this),gh(this)}}}ce.prototype.modules=Za;customElements.define("dom-module",ce);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yh="link[rel=import][type~=css]",bh="include",No="shady-unscoped";function e1(r){return ce.import(r)}function Bo(r){let i=r.body?r.body:r;const t=Qa(i.textContent,r.baseURI),e=document.createElement("style");return e.textContent=t,e}function Mh(r){const i=r.trim().split(/\s+/),t=[];for(let e=0;e<i.length;e++)t.push(...zh(i[e]));return t}function zh(r){const i=e1(r);if(!i)return console.warn("Could not find style data in module named",r),[];if(i._styles===void 0){const t=[];t.push(...i1(i));const e=i.querySelector("template");e&&t.push(...Ja(e,i.assetpath)),i._styles=t}return i._styles}function Ja(r,i){if(!r._styles){const t=[],e=r.content.querySelectorAll("style");for(let n=0;n<e.length;n++){let a=e[n],o=a.getAttribute(bh);o&&t.push(...Mh(o).filter(function(s,l,h){return h.indexOf(s)===l})),i&&(a.textContent=Qa(a.textContent,i)),t.push(a)}r._styles=t}return r._styles}function wh(r){let i=e1(r);return i?i1(i):[]}function i1(r){const i=[],t=r.querySelectorAll(yh);for(let e=0;e<t.length;e++){let n=t[e];if(n.import){const a=n.import,o=n.hasAttribute(No);if(o&&!a._unscopedStyle){const s=Bo(a);s.setAttribute(No,""),a._unscopedStyle=s}else a._style||(a._style=Bo(a));i.push(o?a._unscopedStyle:a._style)}}return i}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const L=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?r=>ShadyDOM.patch(r):r=>r;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function yn(r){return r.indexOf(".")>=0}function Ot(r){let i=r.indexOf(".");return i===-1?r:r.slice(0,i)}function r1(r,i){return r.indexOf(i+".")===0}function Fe(r,i){return i.indexOf(r+".")===0}function Ne(r,i,t){return i+t.slice(r.length)}function Ch(r,i){return r===i||r1(r,i)||Fe(r,i)}function Se(r){if(Array.isArray(r)){let i=[];for(let t=0;t<r.length;t++){let e=r[t].toString().split(".");for(let n=0;n<e.length;n++)i.push(e[n])}return i.join(".")}else return r}function n1(r){return Array.isArray(r)?Se(r).split("."):r.toString().split(".")}function st(r,i,t){let e=r,n=n1(i);for(let a=0;a<n.length;a++){if(!e)return;let o=n[a];e=e[o]}return t&&(t.path=n.join(".")),e}function Ho(r,i,t){let e=r,n=n1(i),a=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let s=n[o];if(e=e[s],!e)return}e[a]=t}else e[i]=t;return n.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ui={},xh=/-[a-z]/g,Ph=/([A-Z])/g;function a1(r){return Ui[r]||(Ui[r]=r.indexOf("-")<0?r:r.replace(xh,i=>i[1].toUpperCase()))}function Ir(r){return Ui[r]||(Ui[r]=r.replace(Ph,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Eh=0,o1=0,ne=[],Ah=0,bn=!1,s1=document.createTextNode("");new window.MutationObserver(Sh).observe(s1,{characterData:!0});function Sh(){bn=!1;const r=ne.length;for(let i=0;i<r;i++){let t=ne[i];if(t)try{t()}catch(e){setTimeout(()=>{throw e})}}ne.splice(0,r),o1+=r}const Yi={after(r){return{run(i){return window.setTimeout(i,r)},cancel(i){window.clearTimeout(i)}}},run(r,i){return window.setTimeout(r,i)},cancel(r){window.clearTimeout(r)}},Vo={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},Oh={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},to={run(r){return bn||(bn=!0,s1.textContent=Ah++),ne.push(r),Eh++},cancel(r){const i=r-o1;if(i>=0){if(!ne[i])throw new Error("invalid async handle: "+r);ne[i]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Th=to,l1=j(r=>{class i extends r{static createProperties(e){const n=this.prototype;for(let a in e)a in n||n._createPropertyAccessor(a)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,n){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,n))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[e];return n||(n=this.constructor.attributeNameForProperty(e),this.__dataAttributes[n]=e),n}_definePropertyAccessor(e,n){Object.defineProperty(this,e,{get(){return this.__data[e]},set:n?function(){}:function(a){this._setPendingProperty(e,a,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,n){this._setPendingProperty(e,n)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,n,a){let o=this.__data[e],s=this._shouldPropertyChange(e,n,o);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=o),this.__data[e]=n,this.__dataPending[e]=n),s}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Th.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,n=this.__dataPending,a=this.__dataOld;this._shouldPropertiesChange(e,n,a)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,n,a)),this.__dataCounter--}_shouldPropertiesChange(e,n,a){return!!n}_propertiesChanged(e,n,a){}_shouldPropertyChange(e,n,a){return a!==n&&(a===a||n===n)}attributeChangedCallback(e,n,a,o){n!==a&&this._attributeToProperty(e,a),super.attributeChangedCallback&&super.attributeChangedCallback(e,n,a,o)}_attributeToProperty(e,n,a){if(!this.__serializing){const o=this.__dataAttributes,s=o&&o[e]||e;this[s]=this._deserializeValue(n,a||this.constructor.typeForProperty(s))}}_propertyToAttribute(e,n,a){this.__serializing=!0,a=arguments.length<3?this[e]:a,this._valueToNodeAttribute(this,a,n||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,n,a){const o=this._serializeValue(n);(a==="class"||a==="name"||a==="slot")&&(e=L(e)),o===void 0?e.removeAttribute(a):e.setAttribute(a,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return e!=null?e.toString():void 0}}_deserializeValue(e,n){switch(n){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const h1={};let Je=HTMLElement.prototype;for(;Je;){let r=Object.getOwnPropertyNames(Je);for(let i=0;i<r.length;i++)h1[r[i]]=!0;Je=Object.getPrototypeOf(Je)}const Ih=window.trustedTypes?r=>trustedTypes.isHTML(r)||trustedTypes.isScript(r)||trustedTypes.isScriptURL(r):()=>!1;function kh(r,i){if(!h1[i]){let t=r[i];t!==void 0&&(r.__data?r._setPendingProperty(i,t):(r.__dataProto?r.hasOwnProperty(JSCompiler_renameProperty("__dataProto",r))||(r.__dataProto=Object.create(r.__dataProto)):r.__dataProto={},r.__dataProto[i]=t))}}const Dh=j(r=>{const i=l1(r);class t extends i{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let a=0;a<n.length;a++)this.prototype._createPropertyAccessor(a1(n[a]))}static attributeNameForProperty(n){return Ir(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let a in n)this._setProperty(a,n[a])}_ensureAttribute(n,a){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,a,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(Ih(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,a){let o;switch(a){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,a);break}return o}_definePropertyAccessor(n,a){kh(this,n),super._definePropertyAccessor(n,a)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rh={"dom-if":!0,"dom-repeat":!0};let Wo=!1,Uo=!1;function $h(){if(!Wo){Wo=!0;const r=document.createElement("textarea");r.placeholder="a",Uo=r.placeholder===r.textContent}return Uo}function Lh(r){$h()&&r.localName==="textarea"&&r.placeholder&&r.placeholder===r.textContent&&(r.textContent=null)}const Fh=(()=>{const r=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:i=>i});return(i,t,e)=>{const n=t.getAttribute(e);if(r&&e.startsWith("on-")){i.setAttribute(e,r.createScript(n,e));return}i.setAttribute(e,n)}})();function Nh(r){let i=r.getAttribute("is");if(i&&Rh[i]){let t=r;for(t.removeAttribute("is"),r=t.ownerDocument.createElement(i),t.parentNode.replaceChild(r,t),r.appendChild(t);t.attributes.length;){const{name:e}=t.attributes[0];Fh(r,t,e),t.removeAttribute(e)}}return r}function c1(r,i){let t=i.parentInfo&&c1(r,i.parentInfo);if(t){for(let e=t.firstChild,n=0;e;e=e.nextSibling)if(i.parentIndex===n++)return e}else return r}function Bh(r,i,t,e){e.id&&(i[e.id]=t)}function Hh(r,i,t){if(t.events&&t.events.length)for(let e=0,n=t.events,a;e<n.length&&(a=n[e]);e++)r._addMethodEventListenerToNode(i,a.name,a.value,r)}function Vh(r,i,t,e){t.templateInfo&&(i._templateInfo=t.templateInfo,i._parentTemplateInfo=e)}function Wh(r,i,t){return r=r._methodHost||r,function(n){r[t]?r[t](n,n.detail):console.warn("listener method `"+t+"` not defined")}}const Uh=j(r=>{class i extends r{static _parseTemplate(e,n){if(!e._templateInfo){let a=e._templateInfo={};a.nodeInfoList=[],a.nestedTemplate=!!n,a.stripWhiteSpace=n&&n.stripWhiteSpace||e.hasAttribute&&e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,a,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,n,a){return this._parseTemplateNode(e.content,n,a)}static _parseTemplateNode(e,n,a){let o=!1,s=e;return s.localName=="template"&&!s.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(s,n,a)||o:s.localName==="slot"&&(n.hasInsertionPoint=!0),Lh(s),s.firstChild&&this._parseTemplateChildNodes(s,n,a),s.hasAttributes&&s.hasAttributes()&&(o=this._parseTemplateNodeAttributes(s,n,a)||o),o||a.noted}static _parseTemplateChildNodes(e,n,a){if(!(e.localName==="script"||e.localName==="style"))for(let o=e.firstChild,s=0,l;o;o=l){if(o.localName=="template"&&(o=Nh(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)o.textContent+=c.textContent,l=c.nextSibling,e.removeChild(c),c=l;if(n.stripWhiteSpace&&!o.textContent.trim()){e.removeChild(o);continue}}let h={parentIndex:s,parentInfo:a};this._parseTemplateNode(o,n,h)&&(h.infoIndex=n.nodeInfoList.push(h)-1),o.parentNode&&s++}}static _parseTemplateNestedTemplate(e,n,a){let o=e,s=this._parseTemplate(o,n);return(s.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),a.templateInfo=s,!0}static _parseTemplateNodeAttributes(e,n,a){let o=!1,s=Array.from(e.attributes);for(let l=s.length-1,h;h=s[l];l--)o=this._parseTemplateNodeAttribute(e,n,a,h.name,h.value)||o;return o}static _parseTemplateNodeAttribute(e,n,a,o,s){return o.slice(0,3)==="on-"?(e.removeAttribute(o),a.events=a.events||[],a.events.push({name:o.slice(3),value:s}),!0):o==="id"?(a.id=s,!0):!1}static _contentForTemplate(e){let n=e._templateInfo;return n&&n.content||e.content}_stampTemplate(e,n){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),n=n||this.constructor._parseTemplate(e);let a=n.nodeInfoList,o=n.content||e.content,s=document.importNode(o,!0);s.__noInsertionPoint=!n.hasInsertionPoint;let l=s.nodeList=new Array(a.length);s.$={};for(let h=0,c=a.length,d;h<c&&(d=a[h]);h++){let p=l[h]=c1(s,d);Bh(this,s.$,p,d),Vh(this,p,d,n),Hh(this,p,d)}return s=s,s}_addMethodEventListenerToNode(e,n,a,o){o=o||e;let s=Wh(o,n,a);return this._addEventListenerToNode(e,n,s),s}_addEventListenerToNode(e,n,a){e.addEventListener(n,a)}_removeEventListenerFromNode(e,n,a){e.removeEventListener(n,a)}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Be=0;const He=[],T={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},d1="__computeInfo",Yh=/[A-Z]/;function Xr(r,i,t){let e=r[i];if(!e)e=r[i]={};else if(!r.hasOwnProperty(i)&&(e=r[i]=Object.create(r[i]),t))for(let n in e){let a=e[n],o=e[n]=Array(a.length);for(let s=0;s<a.length;s++)o[s]=a[s]}return e}function Oe(r,i,t,e,n,a){if(i){let o=!1;const s=Be++;for(let l in t){let h=n?Ot(l):l,c=i[h];if(c)for(let d=0,p=c.length,_;d<p&&(_=c[d]);d++)(!_.info||_.info.lastRun!==s)&&(!n||eo(l,_.trigger))&&(_.info&&(_.info.lastRun=s),_.fn(r,l,t,e,_.info,n,a),o=!0)}return o}return!1}function qh(r,i,t,e,n,a,o,s){let l=!1,h=o?Ot(e):e,c=i[h];if(c)for(let d=0,p=c.length,_;d<p&&(_=c[d]);d++)(!_.info||_.info.lastRun!==t)&&(!o||eo(e,_.trigger))&&(_.info&&(_.info.lastRun=t),_.fn(r,e,n,a,_.info,o,s),l=!0);return l}function eo(r,i){if(i){let t=i.name;return t==r||!!(i.structured&&r1(t,r))||!!(i.wildcard&&Fe(t,r))}else return!0}function Yo(r,i,t,e,n){let a=typeof n.method=="string"?r[n.method]:n.method,o=n.property;a?a.call(r,r.__data[o],e[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function jh(r,i,t,e,n){let a=r[T.NOTIFY],o,s=Be++;for(let h in i)i[h]&&(a&&qh(r,a,s,h,t,e,n)||n&&Gh(r,h,t))&&(o=!0);let l;o&&(l=r.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Gh(r,i,t){let e=Ot(i);if(e!==i){let n=Ir(e)+"-changed";return u1(r,n,t[i],i),!0}return!1}function u1(r,i,t,e){let n={value:t,queueProperty:!0};e&&(n.path=e),L(r).dispatchEvent(new CustomEvent(i,{detail:n}))}function Kh(r,i,t,e,n,a){let s=(a?Ot(i):i)!=i?i:null,l=s?st(r,s):r.__data[i];s&&l===void 0&&(l=t[i]),u1(r,n.eventName,l,s)}function Qh(r,i,t,e,n){let a,o=r.detail,s=o&&o.path;s?(e=Ne(t,e,s),a=o&&o.value):a=r.currentTarget[t],a=n?!a:a,(!i[T.READ_ONLY]||!i[T.READ_ONLY][e])&&i._setPendingPropertyOrPath(e,a,!0,!!s)&&(!o||!o.queueProperty)&&i._invalidateProperties()}function Xh(r,i,t,e,n){let a=r.__data[i];Wi&&(a=Wi(a,n.attrName,"attribute",r)),r._propertyToAttribute(i,n.attrName,a)}function Zh(r,i,t,e){let n=r[T.COMPUTE];if(n)if(vh){Be++;const a=tc(r),o=[];for(let l in i)qo(l,n,o,a,e);let s;for(;s=o.shift();)p1(r,"",i,t,s)&&qo(s.methodInfo,n,o,a,e);Object.assign(t,r.__dataOld),Object.assign(i,r.__dataPending),r.__dataPending=null}else{let a=i;for(;Oe(r,n,a,t,e);)Object.assign(t,r.__dataOld),Object.assign(i,r.__dataPending),a=r.__dataPending,r.__dataPending=null}}const Jh=(r,i,t)=>{let e=0,n=i.length-1,a=-1;for(;e<=n;){const o=e+n>>1,s=t.get(i[o].methodInfo)-t.get(r.methodInfo);if(s<0)e=o+1;else if(s>0)n=o-1;else{a=o;break}}a<0&&(a=n+1),i.splice(a,0,r)},qo=(r,i,t,e,n)=>{const a=n?Ot(r):r,o=i[a];if(o)for(let s=0;s<o.length;s++){const l=o[s];l.info.lastRun!==Be&&(!n||eo(r,l.trigger))&&(l.info.lastRun=Be,Jh(l.info,t,e))}};function tc(r){let i=r.constructor.__orderedComputedDeps;if(!i){i=new Map;const t=r[T.COMPUTE];let{counts:e,ready:n,total:a}=ec(r),o;for(;o=n.shift();){i.set(o,i.size);const s=t[o];s&&s.forEach(l=>{const h=l.info.methodInfo;--a,--e[h]===0&&n.push(h)})}a!==0&&console.warn(`Computed graph for ${r.localName} incomplete; circular?`),r.constructor.__orderedComputedDeps=i}return i}function ec(r){const i=r[d1],t={},e=r[T.COMPUTE],n=[];let a=0;for(let o in i){const s=i[o];a+=t[o]=s.args.filter(l=>!l.literal).length+(s.dynamicFn?1:0)}for(let o in e)i[o]||n.push(o);return{counts:t,ready:n,total:a}}function p1(r,i,t,e,n){let a=Mn(r,i,t,e,n);if(a===He)return!1;let o=n.methodInfo;return r.__dataHasAccessor&&r.__dataHasAccessor[o]?r._setPendingProperty(o,a,!0):(r[o]=a,!1)}function ic(r,i,t){let e=r.__dataLinkedPaths;if(e){let n;for(let a in e){let o=e[a];Fe(a,i)?(n=Ne(a,o,i),r._setPendingPropertyOrPath(n,t,!0,!0)):Fe(o,i)&&(n=Ne(o,a,i),r._setPendingPropertyOrPath(n,t,!0,!0))}}}function Zr(r,i,t,e,n,a,o){t.bindings=t.bindings||[];let s={kind:e,target:n,parts:a,literal:o,isCompound:a.length!==1};if(t.bindings.push(s),sc(s)){let{event:h,negate:c}=s.parts[0];s.listenerEvent=h||Ir(n)+"-changed",s.listenerNegate=c}let l=i.nodeInfoList.length;for(let h=0;h<s.parts.length;h++){let c=s.parts[h];c.compoundIndex=h,rc(r,i,s,c,l)}}function rc(r,i,t,e,n){if(!e.literal)if(t.kind==="attribute"&&t.target[0]==="-")console.warn("Cannot set attribute "+t.target+' because "-" is not a valid attribute starting character');else{let a=e.dependencies,o={index:n,binding:t,part:e,evaluator:r};for(let s=0;s<a.length;s++){let l=a[s];typeof l=="string"&&(l=v1(l),l.wildcard=!0),r._addTemplatePropertyEffect(i,l.rootProperty,{fn:nc,info:o,trigger:l})}}}function nc(r,i,t,e,n,a,o){let s=o[n.index],l=n.binding,h=n.part;if(a&&h.source&&i.length>h.source.length&&l.kind=="property"&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let c=t[i];i=Ne(h.source,l.target,i),s._setPendingPropertyOrPath(i,c,!1,!0)&&r._enqueueClient(s)}else{let c=n.evaluator._evaluateBinding(r,h,i,t,e,a);c!==He&&ac(r,s,l,h,c)}}function ac(r,i,t,e,n){if(n=oc(i,n,t,e),Wi&&(n=Wi(n,t.target,t.kind,i)),t.kind=="attribute")r._valueToNodeAttribute(i,n,t.target);else{let a=t.target;i.__isPropertyEffectsClient&&i.__dataHasAccessor&&i.__dataHasAccessor[a]?(!i[T.READ_ONLY]||!i[T.READ_ONLY][a])&&i._setPendingProperty(a,n)&&r._enqueueClient(i):r._setUnmanagedPropertyToNode(i,a,n)}}function oc(r,i,t,e){if(t.isCompound){let n=r.__dataCompoundStorage[t.target];n[e.compoundIndex]=i,i=n.join("")}return t.kind!=="attribute"&&(t.target==="textContent"||t.target==="value"&&(r.localName==="input"||r.localName==="textarea"))&&(i=i??""),i}function sc(r){return!!r.target&&r.kind!="attribute"&&r.kind!="text"&&!r.isCompound&&r.parts[0].mode==="{"}function lc(r,i){let{nodeList:t,nodeInfoList:e}=i;if(e.length)for(let n=0;n<e.length;n++){let a=e[n],o=t[n],s=a.bindings;if(s)for(let l=0;l<s.length;l++){let h=s[l];hc(o,h),cc(o,r,h)}o.__dataHost=r}}function hc(r,i){if(i.isCompound){let t=r.__dataCompoundStorage||(r.__dataCompoundStorage={}),e=i.parts,n=new Array(e.length);for(let o=0;o<e.length;o++)n[o]=e[o].literal;let a=i.target;t[a]=n,i.literal&&i.kind=="property"&&(a==="className"&&(r=L(r)),r[a]=i.literal)}}function cc(r,i,t){if(t.listenerEvent){let e=t.parts[0];r.addEventListener(t.listenerEvent,function(n){Qh(n,i,t.target,e.source,e.negate)})}}function jo(r,i,t,e,n,a){a=i.static||a&&(typeof a!="object"||a[i.methodName]);let o={methodName:i.methodName,args:i.args,methodInfo:n,dynamicFn:a};for(let s=0,l;s<i.args.length&&(l=i.args[s]);s++)l.literal||r._addPropertyEffect(l.rootProperty,t,{fn:e,info:o,trigger:l});return a&&r._addPropertyEffect(i.methodName,t,{fn:e,info:o}),o}function Mn(r,i,t,e,n){let a=r._methodHost||r,o=a[n.methodName];if(o){let s=r._marshalArgs(n.args,i,t);return s===He?He:o.apply(a,s)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const dc=[],f1="(?:[a-zA-Z_$][\\w.:$\\-*]*)",uc="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",pc="(?:'(?:[^'\\\\]|\\\\.)*')",fc='(?:"(?:[^"\\\\]|\\\\.)*")',vc="(?:"+pc+"|"+fc+")",Go="(?:("+f1+"|"+uc+"|"+vc+")\\s*)",_c="(?:"+Go+"(?:,\\s*"+Go+")*)",mc="(?:\\(\\s*(?:"+_c+"?)\\)\\s*)",gc="("+f1+"\\s*"+mc+"?)",yc="(\\[\\[|{{)\\s*",bc="(?:]]|}})",Mc="(?:(!)\\s*)?",zc=yc+Mc+gc+bc,Ko=new RegExp(zc,"g");function Qo(r){let i="";for(let t=0;t<r.length;t++){let e=r[t].literal;i+=e||""}return i}function Jr(r){let i=r.match(/([^\s]+?)\(([\s\S]*)\)/);if(i){let e={methodName:i[1],static:!0,args:dc};if(i[2].trim()){let n=i[2].replace(/\\,/g,"&comma;").split(",");return wc(n,e)}else return e}return null}function wc(r,i){return i.args=r.map(function(t){let e=v1(t);return e.literal||(i.static=!1),e},this),i}function v1(r){let i=r.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),t={name:i,value:"",literal:!1},e=i[0];switch(e==="-"&&(e=i[1]),e>="0"&&e<="9"&&(e="#"),e){case"'":case'"':t.value=i.slice(1,-1),t.literal=!0;break;case"#":t.value=Number(i),t.literal=!0;break}return t.literal||(t.rootProperty=Ot(i),t.structured=yn(i),t.structured&&(t.wildcard=i.slice(-2)==".*",t.wildcard&&(t.name=i.slice(0,-2)))),t}function Xo(r,i,t){let e=st(r,t);return e===void 0&&(e=i[t]),e}function _1(r,i,t,e){const n={indexSplices:e};mn&&!r._overrideLegacyUndefined&&(i.splices=n),r.notifyPath(t+".splices",n),r.notifyPath(t+".length",i.length),mn&&!r._overrideLegacyUndefined&&(n.indexSplices=[])}function ye(r,i,t,e,n,a){_1(r,i,t,[{index:e,addedCount:n,removed:a,object:i,type:"splice"}])}function Cc(r){return r[0].toUpperCase()+r.substring(1)}const io=j(r=>{const i=Uh(Dh(r));class t extends i{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return T}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(be.length){let n=be[be.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let a=this[T.READ_ONLY];for(let o in n)(!a||!a[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,a,o){this._createPropertyAccessor(n,a==T.READ_ONLY);let s=Xr(this,a,!0)[n];s||(s=this[a][n]=[]),s.push(o)}_removePropertyEffect(n,a,o){let s=Xr(this,a,!0)[n],l=s.indexOf(o);l>=0&&s.splice(l,1)}_hasPropertyEffect(n,a){let o=this[a];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,T.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,T.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,T.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,T.COMPUTE)}_setPendingPropertyOrPath(n,a,o,s){if(s||Ot(Array.isArray(n)?n[0]:n)!==n){if(!s){let l=st(this,n);if(n=Ho(this,n,a),!n||!super._shouldPropertyChange(n,a,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,a,o))return ic(this,n,a),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,a,o);this[n]=a}return!1}_setUnmanagedPropertyToNode(n,a,o){(o!==n[a]||typeof o=="object")&&(a==="className"&&(n=L(n)),n[a]=o)}_setPendingProperty(n,a,o){let s=this.__dataHasPaths&&yn(n),l=s?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,a,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),s?this.__dataTemp[n]=a:this.__data[n]=a,this.__dataPending[n]=a,(s||this[T.NOTIFY]&&this[T.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,a){this._setPendingProperty(n,a,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let a=0;a<n.length;a++){let o=n[a];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,a){for(let o in n)(a||!this[T.READ_ONLY]||!this[T.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,a,o){let s=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Zh(this,a,o,s),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(a,o,s),this._flushClients(),Oe(this,this[T.REFLECT],a,o,s),Oe(this,this[T.OBSERVE],a,o,s),l&&jh(this,l,a,o,s),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,a,o){this[T.PROPAGATE]&&Oe(this,this[T.PROPAGATE],n,a,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,a,o)}_runEffectsForTemplate(n,a,o,s){const l=(h,c)=>{Oe(this,n.propertyEffects,h,o,c,n.nodeList);for(let d=n.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,h,o,c)};n.runEffects?n.runEffects(l,a,s):l(a,s)}linkPaths(n,a){n=Se(n),a=Se(a),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=a}unlinkPaths(n){n=Se(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,a){let o={path:""},s=st(this,n,o);_1(this,s,o.path,a)}get(n,a){return st(a||this,n)}set(n,a,o){o?Ho(o,n,a):(!this[T.READ_ONLY]||!this[T.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,a,!0)&&this._invalidateProperties()}push(n,...a){let o={path:""},s=st(this,n,o),l=s.length,h=s.push(...a);return a.length&&ye(this,s,o.path,l,a.length,[]),h}pop(n){let a={path:""},o=st(this,n,a),s=!!o.length,l=o.pop();return s&&ye(this,o,a.path,o.length,0,[l]),l}splice(n,a,o,...s){let l={path:""},h=st(this,n,l);a<0?a=h.length-Math.floor(-a):a&&(a=Math.floor(a));let c;return arguments.length===2?c=h.splice(a):c=h.splice(a,o,...s),(s.length||c.length)&&ye(this,h,l.path,a,s.length,c),c}shift(n){let a={path:""},o=st(this,n,a),s=!!o.length,l=o.shift();return s&&ye(this,o,a.path,0,0,[l]),l}unshift(n,...a){let o={path:""},s=st(this,n,o),l=s.unshift(...a);return a.length&&ye(this,s,o.path,0,a.length,[]),l}notifyPath(n,a){let o;if(arguments.length==1){let s={path:""};a=st(this,n,s),o=s.path}else Array.isArray(n)?o=Se(n):o=n;this._setPendingPropertyOrPath(o,a,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,a){this._addPropertyEffect(n,T.READ_ONLY),a&&(this["_set"+Cc(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,a,o){let s={property:n,method:a,dynamicFn:!!o};this._addPropertyEffect(n,T.OBSERVE,{fn:Yo,info:s,trigger:{name:n}}),o&&this._addPropertyEffect(a,T.OBSERVE,{fn:Yo,info:s,trigger:{name:a}})}_createMethodObserver(n,a){let o=Jr(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");jo(this,o,T.OBSERVE,Mn,null,a)}_createNotifyingProperty(n){this._addPropertyEffect(n,T.NOTIFY,{fn:Kh,info:{eventName:Ir(n)+"-changed",property:n}})}_createReflectedProperty(n){let a=this.constructor.attributeNameForProperty(n);a[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+a+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,T.REFLECT,{fn:Xh,info:{attrName:a}})}_createComputedProperty(n,a,o){let s=Jr(a);if(!s)throw new Error("Malformed computed expression '"+a+"'");const l=jo(this,s,T.COMPUTE,p1,n,o);Xr(this,d1)[n]=l}_marshalArgs(n,a,o){const s=this.__data,l=[];for(let h=0,c=n.length;h<c;h++){let{name:d,structured:p,wildcard:_,value:g,literal:M}=n[h];if(!M)if(_){const y=Fe(d,a),x=Xo(s,o,y?a:d);g={path:y?a:d,value:x,base:y?st(s,d):x}}else g=p?Xo(s,o,d):s[d];if(mn&&!this._overrideLegacyUndefined&&g===void 0&&n.length>1)return He;l[h]=g}return l}static addPropertyEffect(n,a,o){this.prototype._addPropertyEffect(n,a,o)}static createPropertyObserver(n,a,o){this.prototype._createPropertyObserver(n,a,o)}static createMethodObserver(n,a){this.prototype._createMethodObserver(n,a)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,a){this.prototype._createReadOnlyProperty(n,a)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,a,o){this.prototype._createComputedProperty(n,a,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,a){let o=this.constructor._parseTemplate(n),s=this.__preBoundTemplateInfo==o;if(!s)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(a)if(o=Object.create(o),o.wasPreBound=s,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,h=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=h,h?h.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,a,o){let s=n.hostProps=n.hostProps||{};s[a]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[a]=l[a]||[]).push(o)}_stampTemplate(n,a){a=a||this._bindTemplate(n,!0),be.push(this);let o=super._stampTemplate(n,a);if(be.pop(),a.nodeList=o.nodeList,!a.wasPreBound){let s=a.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)s.push(l)}return o.templateInfo=a,lc(this,a),this.__dataClientsReady&&(this._runEffectsForTemplate(a,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const a=n.templateInfo,{previousSibling:o,nextSibling:s,parent:l}=a;o?o.nextSibling=s:l&&(l.firstChild=s),s?s.previousSibling=o:l&&(l.lastChild=o),a.nextSibling=a.previousSibling=null;let h=a.childNodes;for(let c=0;c<h.length;c++){let d=h[c];L(L(d).parentNode).removeChild(d)}}static _parseTemplateNode(n,a,o){let s=i._parseTemplateNode.call(this,n,a,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,a);l&&(n.textContent=Qo(l)||" ",Zr(this,a,o,"text","textContent",l),s=!0)}return s}static _parseTemplateNodeAttribute(n,a,o,s,l){let h=this._parseBindings(l,a);if(h){let c=s,d="property";Yh.test(s)?d="attribute":s[s.length-1]=="$"&&(s=s.slice(0,-1),d="attribute");let p=Qo(h);return p&&d=="attribute"&&(s=="class"&&n.hasAttribute("class")&&(p+=" "+n.getAttribute(s)),n.setAttribute(s,p)),d=="attribute"&&c=="disable-upgrade$"&&n.setAttribute(s,""),n.localName==="input"&&c==="value"&&n.setAttribute(c,""),n.removeAttribute(c),d==="property"&&(s=a1(s)),Zr(this,a,o,d,s,h,p),!0}else return i._parseTemplateNodeAttribute.call(this,n,a,o,s,l)}static _parseTemplateNestedTemplate(n,a,o){let s=i._parseTemplateNestedTemplate.call(this,n,a,o);const l=n.parentNode,h=o.templateInfo,c=l.localName==="dom-if",d=l.localName==="dom-repeat";$o&&(c||d)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=h,o.noted=!0,s=!1);let p=h.hostProps;if(J0&&c)p&&(a.hostProps=Object.assign(a.hostProps||{},p),$o||(o.parentInfo.noted=!0));else{let _="{";for(let g in p){let M=[{mode:_,source:g,dependencies:[g],hostProp:!0}];Zr(this,a,o,"property","_host_"+g,M)}}return s}static _parseBindings(n,a){let o=[],s=0,l;for(;(l=Ko.exec(n))!==null;){l.index>s&&o.push({literal:n.slice(s,l.index)});let h=l[1][0],c=!!l[2],d=l[3].trim(),p=!1,_="",g=-1;h=="{"&&(g=d.indexOf("::"))>0&&(_=d.substring(g+2),d=d.substring(0,g),p=!0);let M=Jr(d),y=[];if(M){let{args:x,methodName:w}=M;for(let W=0;W<x.length;W++){let F=x[W];F.literal||y.push(F)}let k=a.dynamicFns;(k&&k[w]||M.static)&&(y.push(w),M.dynamicFn=!0)}else y.push(d);o.push({source:d,mode:h,negate:c,customEvent:p,signature:M,dependencies:y,event:_}),s=Ko.lastIndex}if(s&&s<n.length){let h=n.substring(s);h&&o.push({literal:h})}return o.length?o:null}static _evaluateBinding(n,a,o,s,l,h){let c;return a.signature?c=Mn(n,o,s,l,a.signature):o!=a.source?c=st(n,a.source):h&&yn(o)?c=st(n,o):c=n.__data[o],a.negate&&(c=!c),c}}return t}),be=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function xc(r){const i={};for(let t in r){const e=r[t];i[t]=typeof e=="function"?{type:e}:e}return i}const Pc=j(r=>{const i=l1(r);function t(a){const o=Object.getPrototypeOf(a);return o.prototype instanceof n?o:null}function e(a){if(!a.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",a))){let o=null;if(a.hasOwnProperty(JSCompiler_renameProperty("properties",a))){const s=a.properties;s&&(o=xc(s))}a.__ownProperties=o}return a.__ownProperties}class n extends i{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(s=>this.prototype._addPropertyToAttributeMap(s)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=t(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=e(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=t(this);this.__properties=Object.assign({},o&&o._properties,e(this))}return this.__properties}static typeForProperty(o){const s=this._properties[o];return s&&s.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ec="3.5.1",Zo=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ac=j(r=>{const i=Pc(io(r));function t(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let h=l._properties;for(let c in h){let d=h[c];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=d)}}return l.__propertyDefaults}function e(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,h,c,d){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(h)?console.warn(`Cannot redefine computed property '${h}'.`):l._createComputedProperty(h,c.computed,d)),c.readOnly&&!l._hasReadOnlyEffect(h)?l._createReadOnlyProperty(h,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(h)&&console.warn(`Cannot make readOnly property '${h}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(h)?l._createReflectedProperty(h):c.reflectToAttribute===!1&&l._hasReflectEffect(h)&&console.warn(`Cannot make reflected property '${h}' non-reflected.`),c.notify&&!l._hasNotifyEffect(h)?l._createNotifyingProperty(h):c.notify===!1&&l._hasNotifyEffect(h)&&console.warn(`Cannot make notify property '${h}' non-notify.`),c.observer&&l._createPropertyObserver(h,c.observer,d[c.observer]),l._addPropertyToAttributeMap(h)}function a(l,h,c,d){if(!Zo){const p=h.content.querySelectorAll("style"),_=Ja(h),g=wh(c),M=h.content.firstElementChild;for(let x=0;x<g.length;x++){let w=g[x];w.textContent=l._processStyleText(w.textContent,d),h.content.insertBefore(w,M)}let y=0;for(let x=0;x<_.length;x++){let w=_[x],k=p[y];k!==w?(w=w.cloneNode(!0),k.parentNode.insertBefore(w,k)):y++,w.textContent=l._processStyleText(w.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(h,c),_h&&Zo&&dh){const p=h.content.querySelectorAll("style");if(p){let _="";Array.from(p).forEach(g=>{_+=g.textContent,g.parentNode.removeChild(g)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(_)}}}function o(l){let h=null;if(l&&(!Le||ph)&&(h=ce.import(l,"template"),Le&&!h))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return h}class s extends i{static get polymerElementVersion(){return Ec}static _finalizeClass(){i._finalizeClass.call(this);const h=e(this);h&&this.createObservers(h,this._properties),this._prepareTemplate()}static _prepareTemplate(){let h=this.template;h&&(typeof h=="string"?(console.error("template getter must return HTMLTemplateElement"),h=null):X0||(h=h.cloneNode(!0))),this.prototype._template=h}static createProperties(h){for(let c in h)n(this.prototype,c,h[c],h)}static createObservers(h,c){const d=this.prototype;for(let p=0;p<h.length;p++)d._createMethodObserver(h[p],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let h=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof h=="function"&&(h=h()),this._template=h!==void 0?h:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(h){this._template=h}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const h=this.importMeta;if(h)this._importPath=Xa(h.url);else{const c=ce.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=uh,this.importPath=this.constructor.importPath;let h=t(this.constructor);if(h)for(let c in h){let d=h[c];if(this._canApplyPropertyDefault(c)){let p=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(c)?this._setPendingProperty(c,p,!0):this[c]=p}}}_canApplyPropertyDefault(h){return!this.hasOwnProperty(h)}static _processStyleText(h,c){return Qa(h,c)}static _finalizeTemplate(h){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const d=this.importPath,p=d?ke(d):"";a(this,c,h,p),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(h){const c=L(this);if(c.attachShadow)return h?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:h}),c.shadowRoot.appendChild(h),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),fh&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(h){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,h)}resolveUrl(h,c){return!c&&this.importPath&&(c=ke(this.importPath)),ke(h,c)}static _parseTemplateContent(h,c,d){return c.dynamicFns=c.dynamicFns||this._properties,i._parseTemplateContent.call(this,h,c,d)}static _addTemplatePropertyEffect(h,c,d){return Z0&&!(c in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!h.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),i._addTemplatePropertyEffect.call(this,h,c,d)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Jo=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:r=>r});class m1{constructor(i,t){y1(i,t);const e=t.reduce((n,a,o)=>n+g1(a)+i[o+1],i[0]);this.value=e.toString()}toString(){return this.value}}function g1(r){if(r instanceof m1)return r.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${r}`)}function Sc(r){if(r instanceof HTMLTemplateElement)return r.innerHTML;if(r instanceof m1)return g1(r);throw new Error(`non-template value passed to Polymer's html function: ${r}`)}const R=function(i,...t){y1(i,t);const e=document.createElement("template");let n=t.reduce((a,o,s)=>a+Sc(o)+i[s+1],i[0]);return Jo&&(n=Jo.createHTML(n)),e.innerHTML=n,e},y1=(r,i)=>{if(!Array.isArray(r)||!Array.isArray(r.raw)||i.length!==r.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O=Ac(HTMLElement);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Rt=class zn{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,t){this._asyncModule=i,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Ve.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ve.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(i,t,e){return i instanceof zn?i._cancelAsync():i=new zn,i.setConfig(t,e),i}},Ve=new Set;const b1=function(r){Ve.add(r)},Oc=function(){const r=!!Ve.size;return Ve.forEach(i=>{try{i.flush()}catch(t){setTimeout(()=>{throw t})}}),r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ro=function(){let r,i;do r=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),i=Oc();while(r||i)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ts=!1;function M1(){if(X0&&!Q0){if(!ts){ts=!0;const r=document.createElement("style");r.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(r)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function no(r,i,t,e,n){let a;n&&(a=typeof t=="object"&&t!==null,a&&(e=r.__dataTemp[i]));let o=e!==t&&(e===e||t===t);return a&&o&&(r.__dataTemp[i]=t),o}const ao=j(r=>{class i extends r{_shouldPropertyChange(e,n,a){return no(this,e,n,a,!0)}}return i}),Tc=j(r=>{class i extends r{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,n,a){return no(this,e,n,a,this.mutableData)}}return i});ao._mutablePropertyChange=no;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let wn=null;function Cn(){return wn}Cn.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Cn,writable:!0}});const z1=io(Cn),Ic=ao(z1);function kc(r,i){wn=r,Object.setPrototypeOf(r,i.prototype),new i,wn=null}const Dc=io(class{});function w1(r,i){for(let t=0;t<i.length;t++){let e=i[t];if(!!r!=!!e.__hideTemplateChildren__)if(e.nodeType===Node.TEXT_NODE)r?(e.__polymerTextContent__=e.textContent,e.textContent=""):e.textContent=e.__polymerTextContent__;else if(e.localName==="slot")if(r)e.__polymerReplaced__=document.createComment("hidden-slot"),L(L(e).parentNode).replaceChild(e.__polymerReplaced__,e);else{const n=e.__polymerReplaced__;n&&L(L(n).parentNode).replaceChild(e,n)}else e.style&&(r?(e.__polymerDisplay__=e.style.display,e.style.display="none"):e.style.display=e.__polymerDisplay__);e.__hideTemplateChildren__=r,e._showHideChildren&&e._showHideChildren(r)}}class Bt extends Dc{constructor(i){super(),this._configureProperties(i),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let n=this.root.firstChild;n;n=n.nextSibling)t.push(n),n.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let e=this.__templatizeOptions;(i&&e.instanceProps||!e.instanceProps)&&this._enableProperties()}_configureProperties(i){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let e in i)this._setPendingProperty(e,i[e])}forwardHostProp(i,t){this._setPendingPropertyOrPath(i,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(i,t,e){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(i,t,n=>{n.model=this,e(n)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(i,t,e)}}_showHideChildren(i){w1(i,this.children)}_setUnmanagedPropertyToNode(i,t,e){i.__hideTemplateChildren__&&i.nodeType==Node.TEXT_NODE&&t=="textContent"?i.__polymerTextContent__=e:super._setUnmanagedPropertyToNode(i,t,e)}get parentModel(){let i=this.__parentModel;if(!i){let t;i=this;do i=i.__dataHost.__dataHost;while((t=i.__templatizeOptions)&&!t.parentModel);this.__parentModel=i}return i}dispatchEvent(i){return!0}}Bt.prototype.__dataHost;Bt.prototype.__templatizeOptions;Bt.prototype._methodHost;Bt.prototype.__templatizeOwner;Bt.prototype.__hostProps;const Rc=ao(Bt);function es(r){let i=r.__dataHost;return i&&i._methodHost||i}function $c(r,i,t){let e=t.mutableData?Rc:Bt;qi.mixin&&(e=qi.mixin(e));let n=class extends e{};return n.prototype.__templatizeOptions=t,n.prototype._bindTemplate(r),Nc(n,r,i,t),n}function Lc(r,i,t,e){let n=t.forwardHostProp;if(n&&i.hasHostProps){const a=r.localName=="template";let o=i.templatizeTemplateClass;if(!o){if(a){let l=t.mutableData?Ic:z1;class h extends l{}o=i.templatizeTemplateClass=h}else{const l=r.constructor;class h extends l{}o=i.templatizeTemplateClass=h}let s=i.hostProps;for(let l in s)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Fc(l,n)}),o.prototype._createNotifyingProperty("_host_"+l);Z0&&e&&Vc(i,t,e)}if(r.__dataProto&&Object.assign(r.__data,r.__dataProto),a)kc(r,o),r.__dataTemp={},r.__dataPending=null,r.__dataOld=null,r._enableProperties();else{Object.setPrototypeOf(r,o.prototype);const s=i.hostProps;for(let l in s)if(l="_host_"+l,l in r){const h=r[l];delete r[l],r.__data[l]=h}}}}function Fc(r,i){return function(e,n,a){i.call(e.__templatizeOwner,n.substring(6),a[n])}}function Nc(r,i,t,e){let n=t.hostProps||{};for(let a in e.instanceProps){delete n[a];let o=e.notifyInstanceProp;o&&r.prototype._addPropertyEffect(a,r.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Bc(a,o)})}if(e.forwardHostProp&&i.__dataHost)for(let a in n)t.hasHostProps||(t.hasHostProps=!0),r.prototype._addPropertyEffect(a,r.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Hc()})}function Bc(r,i){return function(e,n,a){i.call(e.__templatizeOwner,e,n,a[n])}}function Hc(){return function(i,t,e){i.__dataHost._setPendingPropertyOrPath("_host_"+t,e[t],!0,!0)}}function qi(r,i,t){if(Le&&!es(r))throw new Error("strictTemplatePolicy: template owner not trusted");if(t=t||{},r.__templatizeOwner)throw new Error("A <template> can only be templatized once");r.__templatizeOwner=i;let n=(i?i.constructor:Bt)._parseTemplate(r),a=n.templatizeInstanceClass;a||(a=$c(r,n,t),n.templatizeInstanceClass=a);const o=es(r);Lc(r,n,t,o);let s=class extends a{};return s.prototype._methodHost=o,s.prototype.__dataHost=r,s.prototype.__templatizeOwner=i,s.prototype.__hostProps=n.hostProps,s=s,s}function Vc(r,i,t){const e=t.constructor._properties,{propertyEffects:n}=r,{instanceProps:a}=i;for(let o in n)if(!e[o]&&!(a&&a[o])){const s=n[o];for(let l=0;l<s.length;l++){const{part:h}=s[l].info;if(!(h.signature&&h.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Wc(r,i){let t;for(;i;)if(t=i.__dataHost?i:i.__templatizeInstance)if(t.__dataHost!=r)i=t.__dataHost;else return t;else i=L(i).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class C1 extends O{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Rt.debounce(this.__renderDebouncer,to,()=>this.__render()),b1(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const i=L(this).parentNode;(!i||i.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!L(i).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),M1()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const i=this;let t=i._templateInfo?i:L(i).querySelector("template");if(!t){let e=new MutationObserver(()=>{if(L(this).querySelector("template"))e.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let i=L(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length&&L(this).previousSibling!==t[t.length-1])for(let n=0,a;n<t.length&&(a=t[n]);n++)L(i).insertBefore(a,this)}else{if(!i||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(i)}return!0}render(){ro()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!gn||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(i){}__teardownInstance(){}_showHideChildren(){}}class Uc extends C1{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(i){const t=this.__dataHost||this;if(Le&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const e=t._bindTemplate(this.__template,!0);e.runEffects=(n,a,o)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),a=Object.assign(s.changedProps,a)),n(a,o);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:n,changedProps:{}}),o)for(const l in a){const h=Ot(l);s.changedProps[h]=this.__dataHost[h]}else Object.assign(s.changedProps,a)},this.__instance=t._stampTemplate(this.__template,e),L(i).insertBefore(this.__instance,this)}__syncHostProperties(){const i=this.__syncInfo;i&&(this.__syncInfo=null,i.runEffects(i.changedProps,!1))}__teardownInstance(){const i=this.__dataHost||this;this.__instance&&(i._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const i=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==i&&(this.__instance.__hidden=i,w1(i,this.__instance.templateInfo.childNodes)),i||this.__syncHostProperties()}}class Yc extends C1{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(i){this.__ctor||(this.__ctor=qi(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Ot(t)]=!0))}})),this.__instance=new this.__ctor,L(i).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let i=this.__instance.children;if(i&&i.length){let t=L(i[0]).parentNode;if(t){t=L(t);for(let e=0,n;e<i.length&&(n=i[e]);e++)t.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let i=this.__invalidProps;if(i){this.__invalidProps=null;for(let t in i)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const i=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==i&&(this.__instance.__hidden=i,this.__instance._showHideChildren(i)),i||this.__syncHostProperties()}}const is=J0?Uc:Yc;customElements.define(is.is,is);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qc={HTML:1,SVG:2},jc=(r,i)=>i===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===i,Gc=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=(r,i)=>{var e;const t=r._$AN;if(t===void 0)return!1;for(const n of t)(e=n._$AO)==null||e.call(n,i,!1),De(n,i);return!0},ji=r=>{let i,t;do{if((i=r._$AM)===void 0)break;t=i._$AN,t.delete(r),r=i}while((t==null?void 0:t.size)===0)},x1=r=>{for(let i;i=r._$AM;r=i){let t=i._$AN;if(t===void 0)i._$AN=t=new Set;else if(t.has(r))break;t.add(r),Xc(i)}};function Kc(r){this._$AN!==void 0?(ji(this),this._$AM=r,x1(this)):this._$AM=r}function Qc(r,i=!1,t=0){const e=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(i)if(Array.isArray(e))for(let a=t;a<e.length;a++)De(e[a],!1),ji(e[a]);else e!=null&&(De(e,!1),ji(e));else De(this,r)}const Xc=r=>{r.type==Ga.CHILD&&(r._$AP??(r._$AP=Qc),r._$AQ??(r._$AQ=Kc))};class Zc extends U0{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),x1(this),this.isConnected=i._$AU}_$AO(i,t=!0){var e,n;i!==this.isConnected&&(this.isConnected=i,i?(e=this.reconnected)==null||e.call(this):(n=this.disconnected)==null||n.call(this)),t&&(De(this,i),ji(this))}setValue(i){if(Gc(this._$Ct))this._$Ct._$AI(i,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=i,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class Jc extends Zc{constructor(i){if(super(i),i.type!==Ga.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(i,[t,e]){return this.updateContent(i,t,e),q0}updateContent(i,t,e){const{parentNode:n,startNode:a}=i,o=e!=null,s=o?this.getNewNode(t,e):null,l=this.getOldNode(i);if(clearTimeout(this.__nodeRetryTimeout),o&&!s)this.__nodeRetryTimeout=setTimeout(()=>this.updateContent(i,t,e));else{if(l===s)return;l&&s?n.replaceChild(s,l):l?n.removeChild(l):s&&a.after(s)}}getNewNode(i,t){return window.Vaadin.Flow.clients[i].getByNodeId(t)}getOldNode(i){const{startNode:t,endNode:e}=i;if(t.nextSibling!==e)return t.nextSibling}disconnected(){clearTimeout(this.__nodeRetryTimeout)}}const P1=Y0(Jc);function td(r,i){return P1(r,i)}function ed(r,i,t){Ka(j0`${i.map(e=>P1(r,e))}`,t)}function id(r){const i=r.insertBefore;r.insertBefore=function(t,e){return e&&e.parentNode===this?i.call(this,t,e):i.call(this,t,null)}}window.Vaadin||(window.Vaadin={});var W0;(W0=window.Vaadin).FlowComponentHost||(W0.FlowComponentHost={patchVirtualContainer:id,getNode:td,setChildNodes:ed});class rs extends O{static get template(){return R`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(i){this.firstChild&&typeof this.firstChild.click=="function"&&i.target===this&&(i.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=Rt.debounce(this._debouncer,Oh,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const i=this._getRenderedComponent();this.firstChild?i?this.firstChild!==i?(this.replaceChild(i,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():i?(this.appendChild(i),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(i){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(i)}return null}onComponentRendered(){}_defineFocusTarget(){var i=this._getFirstFocusableDescendant(this.firstChild);i!==null&&i.setAttribute("focus-target","true")}_getFirstFocusableDescendant(i){if(this._isFocusable(i))return i;if(i.hasAttribute&&(i.hasAttribute("disabled")||i.hasAttribute("hidden"))||!i.children)return null;for(var t=0;t<i.children.length;t++){var e=this._getFirstFocusableDescendant(i.children[t]);if(e!==null)return e}return null}_isFocusable(i){return i.hasAttribute&&typeof i.hasAttribute=="function"&&(i.hasAttribute("disabled")||i.hasAttribute("hidden"))?!1:i.tabIndex===0}_onAnimationEnd(i){i.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(rs.is,rs);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oo=r=>class extends r{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),t==="theme"&&this._set_theme(n)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ie=[];function E1(r){return r&&Object.prototype.hasOwnProperty.call(r,"__themes")}function rd(r){return E1(customElements.get(r))}function nd(r=[]){return[r].flat(1/0).filter(i=>i instanceof sh?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function C(r,i,t={}){r&&rd(r)&&console.warn(`The custom element definition for "${r}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),i=nd(i),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(r,i,t):ie.push({themeFor:r,styles:i,include:t.include,moduleId:t.moduleId})}function xn(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():ie}function ad(r,i){return(r||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(i))}function od(r=""){let i=0;return r.startsWith("lumo-")||r.startsWith("material-")?i=1:r.startsWith("vaadin-")&&(i=2),i}function A1(r){const i=[];return r.include&&[].concat(r.include).forEach(t=>{const e=xn().find(n=>n.moduleId===t);e?i.push(...A1(e),...e.styles):console.warn(`Included moduleId ${t} not found in style registry`)},r.styles),i}function sd(r,i){const t=document.createElement("style");t.innerHTML=r.map(e=>e.cssText).join(`
`),i.content.appendChild(t)}function ld(r){const i=`${r}-default-theme`,t=xn().filter(e=>e.moduleId!==i&&ad(e.themeFor,r)).map(e=>({...e,styles:[...A1(e),...e.styles],includePriority:od(e.moduleId)})).sort((e,n)=>n.includePriority-e.includePriority);return t.length>0?t:xn().filter(e=>e.moduleId===i)}const V=r=>class extends oo(r){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;!t||E1(this)||sd(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[...super.finalizeStyles(t),...e]:e}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),e=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...ld(this.is)];const n=this.__themes.flatMap(a=>a.styles);return n.filter((a,o)=>o===n.lastIndexOf(a))}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ns=0;function S1(r,i=[],t={}){const e=t.moduleId||`custom-style-module-${ns}`;ns+=1;const n=document.createElement("dom-module");r&&n.setAttribute("theme-for",r);const a=!!(i.length&&t.moduleId),o=[].concat(t.include||[]);o.length===0?n.__allStyles=i:a||(n.__partialStyles=i),n.innerHTML=`
    <template>
      ${o.map(s=>`<style include=${s}></style>`)}
      ${a?`<style>${i.map(s=>s.cssText).join(`
`)}</style>`:""}
    </template>
  `,n.register(e)}function hd(r){return Ja(r.querySelector("template")).map(i=>G0(i.textContent))}function cd(){const i=ce.prototype.modules;return Object.keys(i).map(t=>{const e=i[t],n=e.getAttribute("theme-for");return e.__allStyles||(e.__allStyles=hd(e).concat(e.__partialStyles||[])),{themeFor:n,moduleId:t,styles:e.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:cd,registerStyles:S1};ie&&ie.length>0&&(ie.forEach(r=>{S1(r.themeFor,r.styles,{moduleId:r.moduleId,include:r.include})}),ie.length=0);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function A(r){const i=customElements.get(r.is);if(!i)Object.defineProperty(r,"version",{get(){return"24.3.2"}}),customElements.define(r.is,r);else{const t=i.version;t&&r.version&&t===r.version?console.warn(`The component ${r.is} has been loaded twice`):console.error(`Tried to define ${r.is} version ${r.version} when version ${i.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dd extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}A(dd);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ud=(r,...i)=>{const t=document.createElement("style");t.id=r,t.textContent=i.map(e=>e.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",t)},Ht=(r,...i)=>{ud(`lumo-${r}`,i)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pd=z`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Ht("color-props",pd);const O1=z`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;C("",O1,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fd=z`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Ht("spacing-props",fd);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vd=z`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;z`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;Ht("style-props",vd);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _d=z`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;Ht("font-icons",_d);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const md=z`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Ht("sizing-props",md);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gd=z`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,T1=z`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;C("",T1,{moduleId:"lumo-typography"});Ht("typography-props",gd);const kr=z`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;C("vaadin-item",kr,{moduleId:"lumo-item"});const yd=z`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }
  }
`;C("vaadin-combo-box-item",[kr,yd],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bd=z`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dr=z`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;C("",Dr,{moduleId:"lumo-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const so=z`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;C("",so,{moduleId:"lumo-menu-overlay-core"});const Md=z`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,Rr=[Dr,so,Md];C("",Rr,{moduleId:"lumo-menu-overlay"});const zd=z`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,wd=z`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;C("vaadin-combo-box-overlay",[Dr,so,zd,bd,wd,z`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});C("vaadin-input-container",z`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid])::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const I1=z`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;C("",I1,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cd=z`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const k1=z`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;C("",k1,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xd=z`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-input-field-value-font-weight, 400);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,$r=[k1,I1,Cd,xd];C("",$r,{moduleId:"lumo-input-field-shared-styles"});const Pd=z`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;C("vaadin-combo-box",[$r,Pd],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ct=[];function Pn(r,i,t=r.getAttribute("dir")){i?r.setAttribute("dir",i):t!=null&&r.removeAttribute("dir")}function En(){return document.documentElement.getAttribute("dir")}function Ed(){const r=En();Ct.forEach(i=>{Pn(i,r)})}const Ad=new MutationObserver(Ed);Ad.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const ot=r=>class extends r{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Pn(this,En(),null))}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),t!=="dir")return;const a=En(),o=n===a&&Ct.indexOf(this)===-1,s=!n&&e&&Ct.indexOf(this)===-1;o||s?(this.__subscribe(),Pn(this,a,n)):n!==a&&e===a&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Ct.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,n){n==="dir"&&e===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,e,n)}_attributeToProperty(t,e,n){t==="dir"&&!e?this.dir="":super._attributeToProperty(t,e,n)}__subscribe(){Ct.includes(this)||Ct.push(this)}__unsubscribe(){Ct.includes(this)&&Ct.splice(Ct.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sd=r=>class extends r{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Od=z`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-input-container",Od,{moduleId:"vaadin-input-container-styles"});class Td extends Sd(V(ot(O))){static get is(){return"vaadin-input-container"}static get template(){return R`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}A(Td);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Id=r=>class extends r{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(t,e,n){t==="hidden"&&n!==null?this.index=void 0:super.attributeChangedCallback(t,e,n)}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const t=this._owner.getAttribute("dir");t&&this.setAttribute("dir",t)}requestContentUpdate(){if(!this.renderer)return;const t={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,t)}__rendererOrItemChanged(t,e,n){n===void 0||e===void 0||(this._oldRenderer!==t&&(this.innerHTML="",delete this._$litPart$),t&&(this._oldRenderer=t,this.requestContentUpdate()))}__updateLabel(t,e){e||(this.textContent=t)}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kd extends Id(V(ot(O))){static get template(){return R`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}A(kd);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let An=!1,Dd=[],D1=[];function Rd(){An=!0,requestAnimationFrame(function(){An=!1,$d(Dd),setTimeout(function(){Ld(D1)})})}function $d(r){for(;r.length;)R1(r.shift())}function Ld(r){for(let i=0,t=r.length;i<t;i++)R1(r.shift())}function R1(r){const i=r[0],t=r[1],e=r[2];try{t.apply(i,e)}catch(n){setTimeout(()=>{throw n})}}function $1(r,i,t){An||Rd(),D1.push([r,i,t])}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lr=r=>r.test(navigator.userAgent),Sn=r=>r.test(navigator.platform),Fd=r=>r.test(navigator.vendor),as=Lr(/Android/u),Nd=Lr(/Chrome/u)&&Fd(/Google Inc/u),L1=Lr(/Firefox/u),Bd=Sn(/^iPad/u)||Sn(/^Mac/u)&&navigator.maxTouchPoints>1,Hd=Sn(/^iPhone/u),We=Hd||Bd,lo=Lr(/^((?!chrome|android).)*safari/iu),Qt=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let te=new WeakMap,ti=new WeakMap,ei={},tn=0;const os=r=>r&&r.nodeType===Node.ELEMENT_NODE,en=(...r)=>{console.error(`Error: ${r.join(" ")}. Skip setting aria-hidden.`)},Vd=(r,i)=>os(r)?i.map(t=>{if(!os(t))return en(t,"is not a valid element"),null;let e=t;for(;e&&e!==r;){if(r.contains(e))return t;e=e.getRootNode().host}return en(t,"is not contained inside",r),null}).filter(t=>!!t):(en(r,"is not a valid element"),[]),Wd=(r,i,t,e)=>{const n=Vd(i,Array.isArray(r)?r:[r]);ei[t]||(ei[t]=new WeakMap);const a=ei[t],o=[],s=new Set,l=new Set(n),h=d=>{if(!d||s.has(d))return;s.add(d);const p=d.assignedSlot;p&&h(p),h(d.parentNode||d.host)};n.forEach(h);const c=d=>{if(!d||l.has(d))return;const p=d.shadowRoot;(p?[...d.children,...p.children]:[...d.children]).forEach(g=>{if(!["template","script","style"].includes(g.localName))if(s.has(g))c(g);else{const M=g.getAttribute(e),y=M!==null&&M!=="false",x=(te.get(g)||0)+1,w=(a.get(g)||0)+1;te.set(g,x),a.set(g,w),o.push(g),x===1&&y&&ti.set(g,!0),w===1&&g.setAttribute(t,"true"),y||g.setAttribute(e,"true")}})};return c(i),s.clear(),tn+=1,()=>{o.forEach(d=>{const p=te.get(d)-1,_=a.get(d)-1;te.set(d,p),a.set(d,_),p||(ti.has(d)?ti.delete(d):d.removeAttribute(e)),_||d.removeAttribute(t)}),tn-=1,tn||(te=new WeakMap,te=new WeakMap,ti=new WeakMap,ei={})}},F1=(r,i=document.body,t="data-aria-hidden")=>{const e=Array.from(Array.isArray(r)?r:[r]);return i&&e.push(...Array.from(i.querySelectorAll("[aria-live]"))),Wd(e,i,t,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ud{constructor(i,t){this.host=i,this.callback=typeof t=="function"?t:()=>i}showModal(){const i=this.callback();this.__showOthers=F1(i)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ho=!1;window.addEventListener("keydown",()=>{ho=!0},{capture:!0});window.addEventListener("mousedown",()=>{ho=!1},{capture:!0});function On(){let r=document.activeElement||document.body;for(;r.shadowRoot&&r.shadowRoot.activeElement;)r=r.shadowRoot.activeElement;return r}function Fr(){return ho}function N1(r){const i=r.style;if(i.visibility==="hidden"||i.display==="none")return!0;const t=window.getComputedStyle(r);return t.visibility==="hidden"||t.display==="none"}function Yd(r,i){const t=Math.max(r.tabIndex,0),e=Math.max(i.tabIndex,0);return t===0||e===0?e>t:t>e}function qd(r,i){const t=[];for(;r.length>0&&i.length>0;)Yd(r[0],i[0])?t.push(i.shift()):t.push(r.shift());return t.concat(r,i)}function Tn(r){const i=r.length;if(i<2)return r;const t=Math.ceil(i/2),e=Tn(r.slice(0,t)),n=Tn(r.slice(t));return qd(e,n)}function de(r){return r.offsetParent===null&&r.clientWidth===0&&r.clientHeight===0?!0:N1(r)}function jd(r){return r.matches('[tabindex="-1"]')?!1:r.matches("input, select, textarea, button, object")?r.matches(":not([disabled])"):r.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Nr(r){return r.getRootNode().activeElement===r}function Gd(r){if(!jd(r))return-1;const i=r.getAttribute("tabindex")||0;return Number(i)}function B1(r,i){if(r.nodeType!==Node.ELEMENT_NODE||N1(r))return!1;const t=r,e=Gd(t);let n=e>0;e>=0&&i.push(t);let a=[];return t.localName==="slot"?a=t.assignedNodes({flatten:!0}):a=(t.shadowRoot||t).children,[...a].forEach(o=>{n=B1(o,i)||n}),n}function Kd(r){const i=[];return B1(r,i)?Tn(i):i}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qd{saveFocus(i){this.focusNode=i||On()}restoreFocus(){const i=this.focusNode;i&&(On()===document.body?setTimeout(()=>i.focus()):i.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rn=[];class Xd{constructor(i){this.host=i,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return Kd(this.__trapNode)}get __focusedElementIndex(){const i=this.__focusableElements;return i.indexOf(i.filter(Nr).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(i){if(this.__trapNode=i,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");rn.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,rn.pop()}__onKeyDown(i){if(this.__trapNode&&this===Array.from(rn).pop()&&i.key==="Tab"){i.preventDefault();const t=i.shiftKey;this.__focusNextElement(t)}}__focusNextElement(i=!1){const t=this.__focusableElements,e=i?-1:1,n=this.__focusedElementIndex,a=(t.length+n+e)%t.length,o=t[a];o.focus(),o.localName==="input"&&o.select()}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ct=j(r=>typeof r.prototype.addController=="function"?r:class extends r{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),this.$!==void 0&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const H1=r=>class extends ct(r){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new Ud(this),this.__focusTrapController=new Xd(this),this.__focusRestorationController=new Qd}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const t=On();return t===document.body||this._deepContains(t)}_deepContains(t){if(this.contains(t))return!0;let e=t;const n=t.ownerDocument;for(;e&&e!==n&&e!==this;)e=e.parentNode||e.host;return e===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ni=()=>Array.from(document.body.children).filter(r=>r instanceof HTMLElement&&r._hasOverlayStackMixin&&!r.hasAttribute("closing")).sort((r,i)=>r.__zIndex-i.__zIndex||0),Zd=r=>r===ni().pop(),Jd=r=>class extends r{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return Zd(this)}bringToFront(){let t="";const e=ni().filter(n=>n!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),ni().forEach(t=>{t!==this&&(t.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=ni();let e;for(;(e=t.pop())&&!(e!==this&&(e.$.overlay.style.removeProperty("pointer-events"),!e.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qe=r=>class extends H1(Jd(r)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),We&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,n=window.innerWidth>t,a=document.documentElement.clientHeight;n&&a>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${a-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(t,e,n,a){const o=this._oldOwner!==e||this._oldModel!==n;this._oldModel=n,this._oldOwner=e;const s=this._oldRenderer!==t;this._oldRenderer=t;const l=this._oldOpened!==a;this._oldOpened=a,s&&(this.innerHTML="",delete this._$litPart$),a&&t&&(s||l||o)&&this.requestContentUpdate()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(t,e){t?(this._saveFocus(),this._animatedOpening(),$1(this,()=>{this._trapFocus();const n=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(n)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this),e=t.getPropertyValue("animation-name");return!(t.getPropertyValue("display")==="none")&&e&&e!=="none"}_enqueueAnimation(t,e){const n=`__${t}Handler`,a=o=>{o&&o.target!==this||(e(),this.removeEventListener("animationend",a),delete this[n])};this[n]=a,this.addEventListener("animationend",a)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(t){return this._last}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(t))return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const je=z`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])) {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function tu(r){const i=[];for(;r;){if(r.nodeType===Node.DOCUMENT_NODE){i.push(r);break}if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i.push(r),r=r.host;continue}if(r.assignedSlot){r=r.assignedSlot;continue}r=r.parentNode}return i}function V1(r){const i=[];let t;return r.localName==="slot"?t=r.assignedElements():(i.push(r),t=[...r.children]),t.forEach(e=>i.push(...V1(e))),i}function co(r,i){return i?i.closest(r)||co(r,i.getRootNode().host):null}function uo(r){return r?new Set(r.split(" ")):new Set}function Br(r){return r?[...r].join(" "):""}function Ge(r,i,t){const e=uo(r.getAttribute(i));e.add(t),r.setAttribute(i,Br(e))}function Hr(r,i,t){const e=uo(r.getAttribute(i));if(e.delete(t),e.size===0){r.removeAttribute(i);return}r.setAttribute(i,Br(e))}function eu(r){return r.nodeType===Node.TEXT_NODE&&r.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nn={start:"top",end:"bottom"},an={start:"left",end:"right"},ss=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(i=>{i.target.__overlay&&i.target.__overlay._updatePosition()})})}),Vr=r=>class extends r{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=tu(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(t=>{t.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(t=>{t.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(t,e){if(this.__removeUpdatePositionEventListeners(),e&&(e.__overlay=null,ss.unobserve(e),t&&(this.__addUpdatePositionEventListeners(),e.__overlay=this,ss.observe(e))),t){const n=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(a=>{this.__margins[a]=parseInt(n[a],10)})),this.setAttribute("dir",n.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(t){this.contains(t.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const t=this.positionTarget.getBoundingClientRect(),e=this.__shouldAlignStartVertically(t);this.style.justifyContent=e?"flex-start":"flex-end";const n=this.__isRTL,a=this.__shouldAlignStartHorizontally(t,n),o=!n&&a||n&&!a;this.style.alignItems=o?"flex-start":"flex-end";const s=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(t,s,this.noVerticalOverlap,nn,this,e),h=this.__calculatePositionInOneDimension(t,s,this.noHorizontalOverlap,an,this,a);Object.assign(this.style,l,h),this.toggleAttribute("bottom-aligned",!e),this.toggleAttribute("top-aligned",e),this.toggleAttribute("end-aligned",!o),this.toggleAttribute("start-aligned",o)}__shouldAlignStartHorizontally(t,e){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const a=Math.min(window.innerWidth,document.documentElement.clientWidth),o=!e&&this.horizontalAlign==="start"||e&&this.horizontalAlign==="end";return this.__shouldAlignStart(t,n,a,this.__margins,o,this.noHorizontalOverlap,an)}__shouldAlignStartVertically(t){const e=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),a=this.verticalAlign==="top";return this.__shouldAlignStart(t,e,n,this.__margins,a,this.noVerticalOverlap,nn)}__shouldAlignStart(t,e,n,a,o,s,l){const h=n-t[s?l.end:l.start]-a[l.end],c=t[s?l.start:l.end]-a[l.start],d=o?h:c,_=d>(o?c:h)||d>e;return o===_}__adjustBottomProperty(t,e,n){let a;if(t===e.end){if(e.end===nn.end){const o=Math.min(window.innerHeight,document.documentElement.clientHeight);if(n>o&&this.__oldViewportHeight){const s=this.__oldViewportHeight-o;a=n-s}this.__oldViewportHeight=o}if(e.end===an.end){const o=Math.min(window.innerWidth,document.documentElement.clientWidth);if(n>o&&this.__oldViewportWidth){const s=this.__oldViewportWidth-o;a=n-s}this.__oldViewportWidth=o}}return a}__calculatePositionInOneDimension(t,e,n,a,o,s){const l=s?a.start:a.end,h=s?a.end:a.start,c=parseFloat(o.style[l]||getComputedStyle(o)[l]),d=this.__adjustBottomProperty(l,a,c),p=e[s?a.start:a.end]-t[n===s?a.end:a.start],_=d?`${d}px`:`${c+p*(s?-1:1)}px`;return{[l]:_,[h]:""}}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iu=r=>class extends Vr(r){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const t=this._comboBox,e=t&&t.getAttribute("dir");e&&this.setAttribute("dir",e)}_shouldCloseOnOutsideClick(t){const e=t.composedPath();return!e.includes(this.positionTarget)&&!e.includes(this)}_updateOverlayWidth(){const t=this.localName;this.style.setProperty(`--_${t}-default-width`,`${this.positionTarget.clientWidth}px`);const e=getComputedStyle(this._comboBox).getPropertyValue(`--${t}-width`);e===""?this.style.removeProperty(`--${t}-width`):this.style.setProperty(`--${t}-width`,e)}_setOverlayWidth(t,e){t&&e&&(this._updateOverlayWidth(),this._updatePosition())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ru=z`
  #overlay {
    width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;C("vaadin-combo-box-overlay",[je,ru],{moduleId:"vaadin-combo-box-overlay-styles"});class nu extends iu(qe(ot(V(O)))){static get is(){return"vaadin-combo-box-overlay"}static get template(){return R`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="loader"></div>
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}A(nu);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Xt(r,i){return r.split(".").reduce((t,e)=>t?t[e]:void 0,i)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let au=0;function Wr(){return au++}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let ls=0,W1=0;const ae=[];let In=!1;function ou(){In=!1;const r=ae.length;for(let i=0;i<r;i++){const t=ae[i];if(t)try{t()}catch(e){setTimeout(()=>{throw e})}}ae.splice(0,r),W1+=r}const pt={after(r){return{run(i){return window.setTimeout(i,r)},cancel(i){window.clearTimeout(i)}}},run(r,i){return window.setTimeout(r,i)},cancel(r){window.clearTimeout(r)}},At={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},U1={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},zt={run(r){In||(In=!0,queueMicrotask(()=>ou())),ae.push(r);const i=ls;return ls+=1,i},cancel(r){const i=r-W1;if(i>=0){if(!ae[i])throw new Error(`invalid async handle: ${r}`);ae[i]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ue=new Set;class I{static debounce(i,t,e){return i instanceof I?i._cancelAsync():i=new I,i.setConfig(t,e),i}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,t){this._asyncModule=i,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Ue.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ue.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function Y1(r){Ue.add(r)}function su(){const r=!!Ue.size;return Ue.forEach(i=>{try{i.flush()}catch(t){setTimeout(()=>{throw t})}}),r}const Te=()=>{let r;do r=su();while(r)};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const hs=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),lu=hs&&hs[1]>=8,cs=3,hu={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const r=this._virtualCount;return Math.max(0,r-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this._virtualStartVal=r},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(r){r%=this._physicalCount,r<0&&(r=this._physicalCount+r),this._physicalStartVal=r},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(r){this._physicalCountVal=r},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let r=this._firstVisibleIndexVal;if(r==null){let i=this._physicalTop+this._scrollOffset;r=this._iterateItems((t,e)=>{if(i+=this._getPhysicalSizeIncrement(t),i>this._scrollPosition)return e})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){let r=this._lastVisibleIndexVal;if(r==null){let i=this._physicalTop+this._scrollOffset;this._iterateItems((t,e)=>{i<this._scrollBottom&&(r=e),i+=this._getPhysicalSizeIncrement(t)}),this._lastVisibleIndexVal=r}return r},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let i=r-this._scrollPosition;const t=i>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(i)>this._physicalSize&&this._physicalSize>0){i-=this._scrollOffset;const e=Math.round(i/this._physicalAverage);this._virtualStart+=e,this._physicalStart+=e,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const e=this._getReusables(t);t?(this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length):(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length),this._update(e.indexes,t?null:e.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),zt)}},_getReusables(r){let i,t,e;const n=[],a=this._hiddenContentSize*this._ratio,o=this._virtualStart,s=this._virtualEnd,l=this._physicalCount;let h=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,d=this._scrollPosition,p=this._scrollBottom;for(r?(i=this._physicalStart,t=d-h):(i=this._physicalEnd,t=c-p);e=this._getPhysicalSizeIncrement(i),t-=e,!(n.length>=l||t<=a);)if(r){if(s+n.length+1>=this._virtualCount||h+e>=d-this._scrollOffset)break;n.push(i),h+=e,i=(i+1)%l}else{if(o-n.length<=0||h+this._physicalSize-e<=p)break;n.push(i),h-=e,i=i===0?l-1:i-1}return{indexes:n,physicalTop:h-this._scrollOffset}},_update(r,i){if(!(r&&r.length===0||this._physicalCount===0)){if(this._assignModels(r),this._updateMetrics(r),i)for(;i.length;){const t=i.pop();this._physicalTop-=this._getPhysicalSizeIncrement(t)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(r){const t=this._clamp(this._physicalCount+r,cs,this._virtualCount-this._virtualStart)-this._physicalCount;let e=Math.round(this._physicalCount*.5);if(!(t<0)){if(t>0){const n=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let a=0;a<t;a++)this._physicalSizes.push(0);this._physicalCount+=t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=t),this._update(),this._templateCost=(window.performance.now()-n)/t,e=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||e===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,e)),U1):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,e),zt))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(cs))},_itemsChanged(r){r.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,At))},_iterateItems(r,i){let t,e,n,a;if(arguments.length===2&&i){for(a=0;a<i.length;a++)if(t=i[a],e=this._computeVidx(t),(n=r.call(this,t,e))!=null)return n}else{for(t=this._physicalStart,e=this._virtualStart;t<this._physicalCount;t++,e++)if((n=r.call(this,t,e))!=null)return n;for(t=0;t<this._physicalStart;t++,e++)if((n=r.call(this,t,e))!=null)return n}},_computeVidx(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_positionItems(){this._adjustScrollPosition();let r=this._physicalTop;this._iterateItems(i=>{this.translate3d(0,`${r}px`,0,this._physicalItems[i]),r+=this._physicalSizes[i]})},_getPhysicalSizeIncrement(r){return this._physicalSizes[r]},_adjustScrollPosition(){const r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop-=r;const i=this._scrollPosition;!lu&&i>0&&this._resetScrollPosition(i-r)}},_resetScrollPosition(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize(r){const i=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=i,(r||this._scrollHeight===0||this._scrollPosition>=i-this._physicalSize||Math.abs(i-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${i}px`,this._scrollHeight=i)},scrollToIndex(r){if(typeof r!="number"||r<0||r>this.items.length-1||(Te(),this._physicalCount===0))return;r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=r-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let i=this._physicalStart,t=this._virtualStart,e=0;const n=this._hiddenContentSize;for(;t<r&&e<=n;)e+=this._getPhysicalSizeIncrement(i),i=(i+1)%this._physicalCount,t+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+e),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},At)},_isIndexRendered(r){return r>=this._virtualStart&&r<=this._virtualEnd},_getPhysicalIndex(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},_clamp(r,i,t){return Math.min(t,Math.max(i,r))},_debounce(r,i,t){this._debouncers||(this._debouncers={}),this._debouncers[r]=I.debounce(this._debouncers[r],t,i.bind(this)),Y1(this._debouncers[r])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cu=1e5,on=1e3;class q1{constructor({createElements:i,updateElement:t,scrollTarget:e,scrollContainer:n,elementsContainer:a,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=i,this.updateElement=t,this.scrollTarget=e,this.scrollContainer=n,this.elementsContainer=a||n,this.reorderElements=o,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",s=>this.__onWheel(s)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}__hasPlaceholders(){return this.__getVisibleElements().some(i=>i.__virtualizerPlaceholder)}scrollToIndex(i){if(typeof i!="number"||isNaN(i)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),i=this._clamp(i,0,this.size-1);const t=this.__getVisibleElements().length;let e=Math.floor(i/this.size*this._virtualCount);this._virtualCount-e<t?(e=this._virtualCount-(this.size-i),this._vidxOffset=this.size-this._virtualCount):e<t?i<on?(e=i,this._vidxOffset=0):(e=on,this._vidxOffset=i-e):this._vidxOffset=i-e,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(e),this.adjustedFirstVisibleIndex!==i&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(i)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=i)}flush(){const i=this._physicalCount;this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),Te(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==i&&this.flush())}update(i=0,t=this.size-1){const e=[];this.__getVisibleElements().forEach(n=>{n.__virtualIndex>=i&&n.__virtualIndex<=t&&(this.__updateElement(n,n.__virtualIndex,!0),e.push(n))}),this.__afterElementsUpdated(e)}_updateMetrics(i){Te();let t=0,e=0;const n=this._physicalAverageCount,a=this._physicalAverage;this._iterateItems((o,s)=>{e+=this._physicalSizes[o],this._physicalSizes[o]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[o])),t+=this._physicalSizes[o],this._physicalAverageCount+=this._physicalSizes[o]?1:0},i),this._physicalSize=this._physicalSize+t-e,this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((a*n+t)/this._physicalAverageCount))}__getBorderBoxHeight(i){const t=getComputedStyle(i),e=parseFloat(t.height)||0;if(t.boxSizing==="border-box")return e;const n=parseFloat(t.paddingBottom)||0,a=parseFloat(t.paddingTop)||0,o=parseFloat(t.borderBottomWidth)||0,s=parseFloat(t.borderTopWidth)||0;return e+n+a+o+s}__updateElement(i,t,e){i.__virtualizerPlaceholder&&(i.style.paddingTop="",i.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(i.__lastUpdatedIndex!==t||e)&&(this.updateElement(i,t),i.__lastUpdatedIndex=t)}__afterElementsUpdated(i){i.forEach(t=>{const e=t.offsetHeight;if(e===0)t.style.paddingTop=`${this.__placeholderHeight}px`,t.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=I.debounce(this.__placeholderClearDebouncer,At,()=>this._resizeHandler());else{this.__elementHeightQueue.push(e),this.__elementHeightQueue.shift();const n=this.__elementHeightQueue.filter(a=>a!==void 0);this.__placeholderHeight=Math.round(n.reduce((a,o)=>a+o,0)/n.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(i){const t=this.__getVisibleElements().find(e=>e.__virtualIndex===i);return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(i){i!==this.size&&(this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__size=i,this._physicalItems?(this._updateScrollerSize(),this._virtualCount=this.items.length,this._render()):(this._itemsChanged({path:"items"}),this.__preventElementUpdates=!0,Te(),this.__preventElementUpdates=!1),this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),Te())}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(i){this.scrollTarget.scrollTop=i}get items(){return{length:Math.min(this.size,cu)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const i=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=i.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(i){const t=this.createElements(i),e=document.createDocumentFragment();return t.forEach(n=>{n.style.position="absolute",e.appendChild(n),this.__resizeObserver.observe(n)}),this.elementsContainer.appendChild(e),t}_assignModels(i){const t=[];this._iterateItems((e,n)=>{const a=this._physicalItems[e];a.hidden=n>=this.size,a.hidden?delete a.__lastUpdatedIndex:(a.__virtualIndex=n+(this._vidxOffset||0),this.__updateElement(a,a.__virtualIndex),t.push(a))},i),this.__afterElementsUpdated(t)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(i,t,e,n){n.style.transform=`translateY(${t})`}toggleScrollListener(){}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const i=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const t=i>=0,e=this._getReusables(!t);e.indexes.length&&(this._physicalTop=e.physicalTop,t?(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length):(this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length),this._resizeHandler())}i&&(this.__fixInvalidItemPositioningDebouncer=I.debounce(this.__fixInvalidItemPositioningDebouncer,pt.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=I.debounce(this.__scrollReorderDebouncer,pt.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(i)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const i=this._physicalTop>this._scrollTop,t=this._physicalBottom<this._scrollBottom,e=this.adjustedFirstVisibleIndex===0,n=this.adjustedLastVisibleIndex===this.size-1;if(i&&!e||t&&!n){const a=t,o=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(a?-1:1),this._scrollHandler(),this._ratio=o}}__onWheel(i){if(i.ctrlKey||this._hasScrolledAncestor(i.target,i.deltaX,i.deltaY))return;let t=i.deltaY;if(i.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:i.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=t,i.preventDefault();return}t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=I.debounce(this.__debouncerWheelAnimationFrame,At,()=>{this._wheelAnimationFrame=!1});const e=Math.abs(i.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,i.deltaX,t)?(i.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=i.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=I.debounce(this._debouncerIgnoreNewWheel,pt.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&e<=this._previousMomentum||this._ignoreNewWheel?i.preventDefault():e>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=e}_hasScrolledAncestor(i,t,e){if(i===this.scrollTarget||i===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(i,t,e)&&["auto","scroll"].indexOf(getComputedStyle(i).overflow)!==-1)return!0;if(i!==this&&i.parentElement)return this._hasScrolledAncestor(i.parentElement,t,e)}_canScroll(i,t,e){return e>0&&i.scrollTop<i.scrollHeight-i.offsetHeight||e<0&&i.scrollTop>0||t>0&&i.scrollLeft<i.scrollWidth-i.offsetWidth||t<0&&i.scrollLeft>0}_increasePoolIfNeeded(i){if(this._physicalCount>2&&i){const e=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(i,Math.min(100,e)))}else super._increasePoolIfNeeded(i)}_getScrollLineHeight(){const i=document.createElement("div");i.style.fontSize="initial",i.style.display="none",document.body.appendChild(i);const t=window.getComputedStyle(i).fontSize;return document.body.removeChild(i),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(i=>!i.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const i=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),n=t.find(s=>s.contains(this.elementsContainer.getRootNode().activeElement)||s.contains(this.scrollTarget.getRootNode().activeElement))||t[0];if(!n)return;const a=n.__virtualIndex-i,o=t.indexOf(n)-a;if(o>0)for(let s=0;s<o;s++)this.elementsContainer.appendChild(t[s]);else if(o<0)for(let s=t.length+o;s<t.length;s++)this.elementsContainer.insertBefore(t[s],t[0]);if(lo){const{transform:s}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=s})}}_adjustVirtualIndexOffset(i){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(i)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),e=t*this.size;this._vidxOffset=Math.round(e-t*this._virtualCount)}else{const t=this._vidxOffset,e=on,n=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<e&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,n),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset)));const a=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=a,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-e&&this._vidxOffset<a&&(this._vidxOffset+=Math.min(a-this._vidxOffset,n),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(q1.prototype,hu);class j1{constructor(i){this.__adapter=new q1(i)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(i){this.__adapter.size=i}scrollToIndex(i){this.__adapter.scrollToIndex(i)}update(i=0,t=this.size-1){this.__adapter.update(i,t)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zt=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const du=r=>class extends r{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const t=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[t.paddingBottom,t.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,n)=>e+n)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${Wr()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",t=>t.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new j1({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(t){if(!(this.opened&&t>=0))return;const e=this._visibleItemsCount();let n=t;t>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(t),n=t-e+1):t>this.__virtualizer.firstVisibleIndex&&(n=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,n));const a=[...this.children].find(h=>!h.hidden&&h.index===this.__virtualizer.lastVisibleIndex);if(!a||t!==a.index)return;const o=a.getBoundingClientRect(),s=this.getBoundingClientRect(),l=o.bottom-s.bottom+this._viewportTotalPaddingBottom;l>0&&(this.scrollTop+=l)}_isItemSelected(t,e,n){return t instanceof Zt?!1:n&&t!==void 0&&e!==void 0?Xt(n,t)===Xt(n,e):t===e}__itemsChanged(t){this.__virtualizer&&t&&(this.__virtualizer.size=t.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(t){t&&this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(t,e){t!==e&&this.requestContentUpdate(),t>=0&&!this.loading&&this.scrollIntoView(t)}__rendererChanged(t,e){(t||e)&&this.requestContentUpdate()}__createElements(t){return[...Array(t)].map(()=>{const e=document.createElement(`${this.__hostTagName}-item`);return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e})}_updateElement(t,e){const n=this.items[e],a=this.focusedIndex,o=this._isItemSelected(n,this.selectedItem,this.itemIdPath);t.setProperties({item:n,index:e,label:this.getItemLabel(n),selected:o,renderer:this.renderer,focused:!this.loading&&a===e}),t.id=`${this.__hostTagName}-item-${e}`,t.setAttribute("role",e!==void 0?"option":!1),t.setAttribute("aria-selected",o.toString()),t.setAttribute("aria-posinset",e+1),t.setAttribute("aria-setsize",this.items.length),this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme"),n instanceof Zt&&this.__requestItemByIndex(e)}__onItemClick(t){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:t.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",t=>{const e=this.scrollTop===0,n=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(e&&t.deltaY<0||n&&t.deltaY>0)&&t.preventDefault()})}__requestItemByIndex(t){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class uu extends du(O){static get is(){return"vaadin-combo-box-scroller"}static get template(){return R`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}A(uu);const pu=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ai=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function fu(){function r(){return!0}return G1(r)}function vu(){try{return _u()?!0:mu()?ai?!gu():!fu():!1}catch{return!1}}function _u(){return localStorage.getItem("vaadin.developmentmode.force")}function mu(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function gu(){return!!(ai&&Object.keys(ai).map(i=>ai[i]).filter(i=>i.productionMode).length>0)}function G1(r,i){if(typeof r!="function")return;const t=pu.exec(r.toString());if(t)try{r=new Function(t[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return r(i)}window.Vaadin=window.Vaadin||{};const ds=function(r,i){if(window.Vaadin.developmentMode)return G1(r,i)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=vu());function yu(){}const bu=function(){if(typeof ds=="function")return ds(yu)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){bu()};let sn;const us=new Set,ft=r=>class extends ot(r){static finalize(){super.finalize();const{is:t}=this;t&&!us.has(t)&&(window.Vaadin.registrations.push(this),us.add(t),window.Vaadin.developmentModeCallback&&(sn=I.debounce(sn,U1,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Y1(sn)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class K1{constructor(i,t){this.slot=i,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let t=[];const e=[],n=[];i.length&&(t=i.filter(a=>!this._storedNodes.includes(a))),this._storedNodes.length&&this._storedNodes.forEach((a,o)=>{const s=i.indexOf(a);s===-1?e.push(a):s!==o&&n.push(a)}),(t.length||e.length||n.length)&&this.callback({addedNodes:t,movedNodes:n,removedNodes:e}),this._storedNodes=i}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pt extends EventTarget{static generateId(i,t){return`${t||"default"}-${i.localName}-${Wr()}`}constructor(i,t,e,n={}){super();const{initializer:a,multiple:o,observe:s,useUniqueId:l}=n;this.host=i,this.slotName=t,this.tagName=e,this.observe=typeof s=="boolean"?s:!0,this.multiple=typeof o=="boolean"?o:!1,this.slotInitializer=a,o&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(i,t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=i,i.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:i,slotName:t,tagName:e}=this;let n=this.defaultNode;return!n&&e&&(n=document.createElement(e),n instanceof Element&&(t!==""&&n.setAttribute("slot",t),this.node=n,this.defaultNode=n)),n&&i.appendChild(n),n}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===i||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:t}=this;t&&t(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,t=i===""?"slot:not([name])":`slot[name=${i}]`,e=this.host.shadowRoot.querySelector(t);this.__slotObserver=new K1(e,({addedNodes:n,removedNodes:a})=>{const o=this.multiple?this.nodes:[this.node],s=n.filter(l=>!eu(l)&&!o.includes(l));a.length&&(this.nodes=o.filter(l=>!a.includes(l)),a.forEach(l=>{this.teardownNode(l)})),s&&s.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...o,...s].filter(l=>l!==this.defaultNode),s.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=s[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vt extends Pt{constructor(i){super(i,"tooltip"),this.setTarget(i)}initCustomNode(i){i.target=this.target,this.ariaTarget!==void 0&&(i.ariaTarget=this.ariaTarget),this.context!==void 0&&(i.context=this.context),this.manual!==void 0&&(i.manual=this.manual),this.opened!==void 0&&(i.opened=this.opened),this.position!==void 0&&(i._position=this.position),this.shouldShow!==void 0&&(i.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(i){this.ariaTarget=i;const t=this.node;t&&(t.ariaTarget=i)}setContext(i){this.context=i;const t=this.node;t&&(t.context=i)}setManual(i){this.manual=i;const t=this.node;t&&(t.manual=i)}setOpened(i){this.opened=i;const t=this.node;t&&(t.opened=i)}setPosition(i){this.position=i;const t=this.node;t&&(t._position=i)}setShouldShow(i){this.shouldShow=i;const t=this.node;t&&(t.shouldShow=i)}setTarget(i){this.target=i;const t=this.node;t&&(t.target=i)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _e=j(r=>class extends r{get _keyboardActive(){return Fr()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ke=j(r=>class extends r{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const po=r=>class extends Ke(r){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&t!==-1&&(this._lastTabIndex=t,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fo=j(r=>class extends _e(po(r)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_shouldRemoveFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){t!==void 0&&this.focusElement&&(this.focusElement.tabIndex=t,t!==-1&&(this.tabindex=void 0)),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const me=j(r=>class extends r{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t);break}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ln=new WeakMap;function Mu(r){return ln.has(r)||ln.set(r,new Set),ln.get(r)}function zu(r,i){const t=document.createElement("style");t.textContent=r,i===document?document.head.appendChild(t):i.insertBefore(t,i.firstChild)}const Q1=j(r=>class extends r{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=Mu(t);this.slotStyles.forEach(n=>{e.has(n)||(zu(n,t),e.add(n))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur=j(r=>class extends r{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=t)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this._inputElementValue=t??"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_hasInputValueChanged(t,e){(t||e)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const e=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=e.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(this._hasValue),!(t===""&&e===void 0)&&(this.__userInput||this._forwardInputValue(t))}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wu=r=>class extends Ur(me(r)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",t=>this._onClearButtonMouseDown(t)),this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(t){t.preventDefault(),Qt||this.inputElement.focus()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&(t.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hn=new Map;function vo(r){return hn.has(r)||hn.set(r,new WeakMap),hn.get(r)}function X1(r,i){r&&r.removeAttribute(i)}function Z1(r,i){if(!r||!i)return;const t=vo(i);if(t.has(r))return;const e=uo(r.getAttribute(i));t.set(r,new Set(e))}function Cu(r,i){if(!r||!i)return;const t=vo(i),e=t.get(r);!e||e.size===0?r.removeAttribute(i):Ge(r,i,Br(e)),t.delete(r)}function cn(r,i,t={newId:null,oldId:null,fromUser:!1}){if(!r||!i)return;const{newId:e,oldId:n,fromUser:a}=t,o=vo(i),s=o.get(r);if(!a&&s){n&&s.delete(n),e&&s.add(e);return}a&&(s?e||o.delete(r):Z1(r,i),X1(r,i)),Hr(r,i,n);const l=e||Br(s);l&&Ge(r,i,l)}function xu(r,i){Z1(r,i),X1(r,i)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pu{constructor(i){this.host=i,this.__required=!1}setTarget(i){this.__target=i,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(i){this.__setAriaRequiredAttribute(i),this.__required=i}setAriaLabel(i){this.__setAriaLabelToAttribute(i),this.__label=i}setLabelId(i,t=!1){const e=t?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(i,e,t),t?this.__labelIdFromUser=i:this.__labelId=i}setErrorId(i){this.__setErrorIdToAriaAttribute(i,this.__errorId),this.__errorId=i}setHelperId(i){this.__setHelperIdToAriaAttribute(i,this.__helperId),this.__helperId=i}__setAriaLabelToAttribute(i){this.__target&&(i?(xu(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",i)):this.__label&&(Cu(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(i,t,e){cn(this.__target,"aria-labelledby",{newId:i,oldId:t,fromUser:e})}__setErrorIdToAriaAttribute(i,t){cn(this.__target,"aria-describedby",{newId:i,oldId:t,fromUser:!1})}__setHelperIdToAriaAttribute(i,t){cn(this.__target,"aria-describedby",{newId:i,oldId:t,fromUser:!1})}__setAriaRequiredAttribute(i){this.__target&&(["input","textarea"].includes(this.__target.localName)||(i?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _o extends Pt{constructor(i,t,e,n={}){super(i,t,e,{...n,useUniqueId:!0})}initCustomNode(i){this.__updateNodeId(i),this.__notifyChange(i)}teardownNode(i){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const i=super.attachDefaultNode();return i&&this.__updateNodeId(i),i}restoreDefaultNode(){}updateDefaultNode(i){this.__notifyChange(i)}observeNode(i){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(t=>{t.forEach(e=>{const n=e.target,a=n===this.node;e.type==="attributes"?a&&this.__updateNodeId(n):(a||n.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(i,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(i){return i?i.nodeType===Node.ELEMENT_NODE&&(customElements.get(i.localName)||i.children.length>0)||i.textContent&&i.textContent.trim()!=="":!1}__notifyChange(i){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(i),node:i}}))}__updateNodeId(i){const t=!this.nodes||i===this.nodes[0];i.nodeType===Node.ELEMENT_NODE&&(!this.multiple||t)&&!i.id&&(i.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Eu extends _o{constructor(i){super(i,"error-message","div")}setErrorMessage(i){this.errorMessage=i,this.updateDefaultNode(this.node)}setInvalid(i){this.invalid=i,this.updateDefaultNode(this.node)}initAddedNode(i){i!==this.defaultNode&&this.initCustomNode(i)}initNode(i){this.updateDefaultNode(i)}initCustomNode(i){i.textContent&&!this.errorMessage&&(this.errorMessage=i.textContent.trim()),super.initCustomNode(i)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(i){const{errorMessage:t,invalid:e}=this,n=!!(e&&t&&t.trim()!=="");i&&(i.textContent=n?t:"",i.hidden=!n,n?i.setAttribute("role","alert"):i.removeAttribute("role")),super.updateDefaultNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Au extends _o{constructor(i){super(i,"helper",null)}setHelperText(i){this.helperText=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:i}=this;if(i&&i.trim()!==""){this.tagName="div";const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(i){i&&(i.textContent=this.helperText),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Su extends _o{constructor(i){super(i,"label","label")}setLabel(i){this.label=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:i}=this;if(i&&i.trim()!==""){const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(i){i&&(i.textContent=this.label),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const J1=j(r=>class extends ct(r){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Su(this),this._labelController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-label",t.detail.hasContent)})}get _labelId(){const t=this._labelNode;return t&&t.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mo=j(r=>class extends r{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ou=r=>class extends mo(J1(ct(r))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Pu(this),this._helperController=new Au(this),this._errorController=new Eu(this),this._errorController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-error-message",t.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",t=>{const{hasContent:e,node:n}=t.detail;this.__labelChanged(e,n)}),this._helperController.addEventListener("slot-content-changed",t=>{const{hasContent:e,node:n}=t.detail;this.toggleAttribute("has-helper",e),this.__helperChanged(e,n)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(t){this._fieldAriaController.setAriaLabel(t)}_accessibleNameRefChanged(t){this._fieldAriaController.setLabelId(t,!0)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{if(t){const e=this._errorNode;this._fieldAriaController.setErrorId(e&&e.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tl=j(r=>class extends r{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((e,n)=>{this._delegateAttribute(e,t[n])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((e,n)=>{this._delegateProperty(e,t[n])})}_delegateAttribute(t,e){this.stateTarget&&(t==="invalid"&&this._delegateAttribute("aria-invalid",e?"true":!1),typeof e=="boolean"?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const go=j(r=>class extends tl(mo(Ur(r))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(e=>this.__isValidConstraint(e))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...e){if(!t)return;const n=this._hasValidConstraints(e),a=this.__previousHasConstraints&&!n;(this._hasValue||this.invalid)&&n?this.validate():a&&this._setInvalid(!1),this.__previousHasConstraints=n}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return!!t||t===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yo=r=>class extends Q1(fo(go(Ou(wu(me(r)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=I.debounce(this._preventInputDebouncer,pt.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||t.key.length!==1||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const e=t.clipboardData.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const e=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${t}*$`,"u")}catch(e){console.error(e)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yr extends Pt{constructor(i,t){super(i,"input","input",{initializer:(e,n)=>{n.value&&(e.value=n.value),n.type&&e.setAttribute("type",n.type),e.id=this.defaultId,typeof t=="function"&&t(e)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qr{constructor(i,t){this.input=i,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",e=>{this.__initLabel(e.detail.node)}),this.__initLabel(t.node)}__initLabel(i){i&&(i.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&i.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const i=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",i)};this.input.addEventListener("click",i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tu=r=>class extends go(r){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Iu=z`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ku=z`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Du=z`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bo=[ku,Du,Iu];/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ru=r=>class extends r{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Zt},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",t=>{const e=t.detail.index,n=t.detail.currentScrollerPos,a=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(e,a,n)&&e!==void 0){const o=this._getPageForIndex(e);this._shouldLoadPage(o)&&this._loadPage(o)}})}_dataProviderFilterChanged(t){if(this.__previousDataProviderFilter===void 0&&t===""){this.__previousDataProviderFilter=t;return}this.__previousDataProviderFilter!==t&&(this.__previousDataProviderFilter=t,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(t){t&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(t,e,n){return n!==0&&t>=n-e&&t<=n+e}_shouldLoadPage(t){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const e=this.filteredItems[t*this.pageSize];return e!==void 0?e instanceof Zt:this.size===void 0}_loadPage(t){if(this._pendingRequests[t]||!this.dataProvider)return;const e={page:t,pageSize:this.pageSize,filter:this.filter},n=(a,o)=>{if(this._pendingRequests[t]!==n)return;const s=this.filteredItems?[...this.filteredItems]:[];s.splice(e.page*e.pageSize,a.length,...a),this.filteredItems=s,!this.opened&&!this._isInputFocused()&&this._commitValue(),o!==void 0&&(this.size=o),delete this._pendingRequests[t],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[t]=n,this.loading=!0,this.dataProvider(e,n)}_getPageForIndex(t){return Math.floor(t/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const t=[];for(let e=0;e<(this.size||0);e++)t.push(this.__placeHolder);this.filteredItems=t,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(t=0){const e=(this.filteredItems||[]).slice(0,t);for(let n=0;n<t;n++)e[n]=e[n]!==void 0?e[n]:this.__placeHolder;this.filteredItems=e,this._flushPendingRequests(t)}_pageSizeChanged(t,e){if(Math.floor(t)!==t||t<1)throw this.pageSize=e,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(t,e){this._ensureItemsOrDataProvider(()=>{this.dataProvider=e}),this.clearCache()}_ensureItemsOrDataProvider(t){if(this.items!==void 0&&this.dataProvider!==void 0)throw t(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(t,e){if(t&&e!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const n=this.__getItemIndexByValue(this.filteredItems,e);(n<0||!this._getItemLabel(this.filteredItems[n]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(t){if(this._pendingRequests){const e=Math.ceil(t/this.pageSize);Object.entries(this._pendingRequests).forEach(([n,a])=>{parseInt(n)>=e&&a([],t)})}}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=r=>class extends r{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(t,e){if(!e||t===void 0)return;const{classList:n}=e;if(this.__initialClasses||(this.__initialClasses=new Set(n)),Array.isArray(this.__previousClasses)){const o=this.__previousClasses.filter(s=>!this.__initialClasses.has(s));o.length>0&&n.remove(...o)}const a=typeof t=="string"?t.split(" "):[];a.length>0&&n.add(...a),this.__previousClasses=a}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Gr(r){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(r);return}r.querySelector("template")&&console.warn(`WARNING: <template> inside <${r.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class el{constructor(i){this.host=i,i.addEventListener("opened-changed",()=>{i.opened||this.__setVirtualKeyboardEnabled(!1)}),i.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),i.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(i){this.host.inputElement&&(this.host.inputElement.inputMode=i?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ps(r){return r!=null}function fs(r,i){return r.findIndex(t=>t instanceof Zt?!1:i(t))}const $u=r=>class extends jr(ct(mo(_e(me(Ur(Ke(r))))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_dropdownItems:{type:Array},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, _dropdownItems, loading)","_updateScroller(_scroller, _dropdownItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(t){super._inputElementChanged(t);const e=this._nativeInput;e&&(e.autocomplete="off",e.autocapitalize="off",e.setAttribute("role","combobox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-expanded",!!this.opened),e.setAttribute("spellcheck","false"),e.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const t=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",t),this.addEventListener("touchstart",t),Gr(this),this.addController(new el(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(t=>{t.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(t,e,n){super._propertiesChanged(t,e,n),e.filter!==void 0&&this._filterChanged(e.filter)}_initOverlay(){const t=this.$.overlay;t._comboBox=this,t.addEventListener("touchend",this._boundOnOverlayTouchAction),t.addEventListener("touchmove",this._boundOnOverlayTouchAction),t.addEventListener("mousedown",e=>e.preventDefault()),t.addEventListener("opened-changed",e=>{this._overlayOpened=e.detail.value}),this._overlayElement=t}_initScroller(t){const e=`${this._tagNamePrefix}-scroller`,n=this._overlayElement;n.renderer=o=>{o.firstChild||o.appendChild(document.createElement(e))},n.requestContentUpdate();const a=n.querySelector(e);a.owner=t||this,a.getItemLabel=this._getItemLabel.bind(this),a.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=a}_updateScroller(t,e,n,a,o,s,l,h,c){t&&(n&&(t.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),t.setProperties({items:n?e:[],opened:n,loading:a,selectedItem:o,itemIdPath:s,focusedIndex:l,renderer:h,theme:c}))}_openedOrItemsChanged(t,e,n){this._overlayOpened=!!(t&&(n||e&&e.length))}_overlayOpenedChanged(t,e){t?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):e&&this._dropdownItems&&this._dropdownItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(t,e){e!==void 0&&this._updateActiveDescendant(t)}_isInputFocused(){return this.inputElement&&Nr(this.inputElement)}_updateActiveDescendant(t){const e=this._nativeInput;if(!e)return;const n=this._getItemElements().find(a=>a.index===t);n?e.setAttribute("aria-activedescendant",n.id):e.removeAttribute("aria-activedescendant")}_openedChanged(t,e){if(e===void 0)return;t?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!Qt&&this.inputElement&&this.inputElement.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const n=this._nativeInput;n&&(n.setAttribute("aria-expanded",!!t),t?n.setAttribute("aria-controls",this._scroller.id):n.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(t){return t.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(t){t.preventDefault(),this.inputElement.focus()}_onClearButtonClick(t){t.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(t){t.preventDefault(),this.opened?this.close():this.open()}_onHostClick(t){this.autoOpenDisabled||(t.preventDefault(),this.open())}_onClick(t){this._isClearButton(t)?this._onClearButtonClick(t):t.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(t):this._onHostClick(t)}_onKeyDown(t){super._onKeyDown(t),t.key==="Tab"?this._overlayElement.restoreFocusOnClose=!1:t.key==="ArrowDown"?(this._onArrowDown(),t.preventDefault()):t.key==="ArrowUp"&&(this._onArrowUp(),t.preventDefault())}_getItemLabel(t){let e=t&&this.itemLabelPath?Xt(this.itemLabelPath,t):void 0;return e==null&&(e=t?t.toString():""),e}_getItemValue(t){let e=t&&this.itemValuePath?Xt(this.itemValuePath,t):void 0;return e===void 0&&(e=t?t.toString():""),e}_onArrowDown(){if(this.opened){const t=this._dropdownItems;t&&(this._focusedIndex=Math.min(t.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const t=this._dropdownItems;t&&(this._focusedIndex=t.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const t=this._dropdownItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(t),this._markAllSelectionRange()}}_setSelectionRange(t,e){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(t,e)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const t=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(t,t)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(t){const e=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;if(!this.allowCustomValue&&e){t.preventDefault(),t.stopPropagation();return}this.opened&&(t.preventDefault(),t.stopPropagation()),this._closeOrCommit()}_onEscape(t){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(t.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(t.stopPropagation(),this._onClearAction()):this.opened?(t.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(t.stopPropagation(),this._onClearAction())}_toggleElementChanged(t){t&&(t.addEventListener("mousedown",e=>e.preventDefault()),t.addEventListener("click",()=>{Qt&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const t=this._dropdownItems[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const t=[this.selectedItem,...this._dropdownItems||[]],e=t[this.__getItemIndexByLabel(t,this._inputElementValue)];if(this.allowCustomValue&&!e){const n=this._inputElementValue;this._lastCustomValue=n;const a=new CustomEvent("custom-value-set",{detail:n,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(a),a.defaultPrevented||(this.value=n)}else!this.allowCustomValue&&!this.opened&&e?this.value=this._getItemValue(e):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(t){const e=this._inputElementValue,n={};this.filter===e?this._filterChanged(this.filter):n.filter=e,!this.opened&&!this._isClearButton(t)&&!this.autoOpenDisabled&&(n.opened=!0),this.setProperties(n)}_onChange(t){t.stopPropagation()}_itemLabelPathChanged(t){typeof t!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(t){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,t):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(t){if(t==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const e=this._getItemValue(t);if(this.value!==e&&(this.value=e,this.value!==e))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(t)}}_valueChanged(t,e){t===""&&e===void 0||(ps(t)?(this._getItemValue(this.selectedItem)!==t&&this._selectItemForValue(t),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=t),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){document.hasFocus()&&this.validate(),this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(t,e){this._ensureItemsOrDataProvider(()=>{this.items=e}),t?this.filteredItems=t.slice(0):e&&(this.filteredItems=null)}_filteredItemsChanged(t,e){this._setDropdownItems(t);const n=e?e[this._focusedIndex]:null,a=this.__getItemIndexByValue(t,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&a>=0&&(this.selectedItem=t[a]);const o=this.__getItemIndexByValue(t,this._getItemValue(n));o>-1?this._focusedIndex=o:this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(t,e){return t&&t.filter(a=>(e=e?e.toString().toLowerCase():"",this._getItemLabel(a).toString().toLowerCase().indexOf(e)>-1))}_selectItemForValue(t){const e=this.__getItemIndexByValue(this.filteredItems,t),n=this.selectedItem;e>=0?this.selectedItem=this.filteredItems[e]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&n===null&&this._selectedItemChanged(this.selectedItem)}_setDropdownItems(t){this._dropdownItems=t}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(t){this._scroller&&this._scroller.scrollIntoView(t)}__getItemIndexByValue(t,e){return!t||!ps(e)?-1:fs(t,n=>this._getItemValue(n)===e)}__getItemIndexByLabel(t,e){return!t||!e?-1:fs(t,n=>this._getItemLabel(n).toString().toLowerCase()===e.toString().toLowerCase())}_overlaySelectedItemChanged(t){t.stopPropagation(),!(t.detail.item instanceof Zt)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(t.detail.item),this.close())}_setFocused(t){if(super._setFocused(t),!t&&!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}_shouldRemoveFocus(t){return t.relatedTarget&&t.relatedTarget.localName===`${this._tagNamePrefix}-item`?!1:t.relatedTarget===this._overlayElement?(t.composedPath()[0].focus(),!1):!0}_onTouchend(t){!this.clearElement||t.composedPath()[0]!==this.clearElement||(t.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-combo-box",bo,{moduleId:"vaadin-combo-box-styles"});class Lu extends Ru($u(Tu(yo(V(ft(O)))))){static get is(){return"vaadin-combo-box"}static get template(){return R`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Yr(this,i=>{this._setInputElement(i),this._setFocusElement(i),this.stateTarget=i,this.ariaTarget=i})),this.addController(new qr(this.inputElement,this._labelController)),this._tooltipController=new Vt(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(i=>!i.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_onClearButtonClick(i){i.stopPropagation(),super._onClearButtonClick(i)}_onHostClick(i){const t=i.composedPath();(t.includes(this._labelNode)||t.includes(this._positionTarget))&&super._onHostClick(i)}}A(Lu);(function(){const r=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:i=>r(function(t){if(t.$connector)return;t.$connector={};const e={};let n={},a="";const o=new window.Vaadin.ComboBoxPlaceholder,s=(()=>{let d="",p=!1;return{needsDataCommunicatorReset:()=>p=!0,getLastFilterSentToServer:()=>d,requestData:(y,x,w)=>{const k=x-y,W=w.filter;t.$server.setRequestedRange(y,k,W),d=W,p&&(t.$server.resetDataCommunicator(),p=!1)}}})(),l=(d=Object.keys(e))=>{d.forEach(p=>{e[p]([],t.size),delete e[p];const _=parseInt(p)*t.pageSize,g=_+t.pageSize,M=Math.min(g,t.filteredItems.length);for(let y=_;y<M;y++)t.filteredItems[y]=o})};t.dataProvider=function(d,p){if(d.pageSize!=t.pageSize)throw"Invalid pageSize";if(t._clientSideFilter)if(n[0]){c(n[0],d.filter,p);return}else d.filter="";if(d.filter!==a){n={},a=d.filter,this._filterDebouncer=Rt.debounce(this._filterDebouncer,Yi.after(500),()=>{if(s.getLastFilterSentToServer()===d.filter&&s.needsDataCommunicatorReset(),d.filter!==a)throw new Error("Expected params.filter to be '"+a+"' but was '"+d.filter+"'");this._filterDebouncer=void 0,l(),t.dataProvider(d,p)});return}if(this._filterDebouncer){e[d.page]=p;return}if(n[d.page])h(d.page,p);else{e[d.page]=p;const g=Math.max(d.pageSize*2,500),M=Object.keys(e).map(w=>parseInt(w)),y=Math.min(...M),x=Math.max(...M);if(M.length*d.pageSize>g)d.page===y?l([String(x)]):l([String(y)]),t.dataProvider(d,p);else if(x-y+1!==M.length)l();else{const w=d.pageSize*y,k=d.pageSize*(x+1);s.requestData(w,k,d)}}},t.$connector.clear=r((d,p)=>{const _=Math.floor(d/t.pageSize),g=Math.ceil(p/t.pageSize);for(let M=_;M<_+g;M++)delete n[M]}),t.$connector.filter=r(function(d,p){return p=p?p.toString().toLowerCase():"",t._getItemLabel(d,t.itemLabelPath).toString().toLowerCase().indexOf(p)>-1}),t.$connector.set=r(function(d,p,_){if(_!=s.getLastFilterSentToServer())return;if(d%t.pageSize!=0)throw"Got new data to index "+d+" which is not aligned with the page size of "+t.pageSize;if(d===0&&p.length===0&&e[0]){n[0]=[];return}const g=d/t.pageSize,M=Math.ceil(p.length/t.pageSize);for(let y=0;y<M;y++){let x=g+y,w=p.slice(y*t.pageSize,(y+1)*t.pageSize);n[x]=w}}),t.$connector.updateData=r(function(d){const p=new Map(d.map(_=>[_.key,_]));t.filteredItems=t.filteredItems.map(_=>p.get(_.key)||_)}),t.$connector.updateSize=r(function(d){t._clientSideFilter||(t.size=d)}),t.$connector.reset=r(function(){l(),n={},t.clearCache()}),t.$connector.confirm=r(function(d,p){if(p!=s.getLastFilterSentToServer())return;let _=Object.getOwnPropertyNames(e);for(let g=0;g<_.length;g++){let M=_[g];n[M]&&h(M,e[M])}t.$server.confirmUpdate(d)});const h=r(function(d,p){let _=n[d];t._clientSideFilter?c(_,t.filter,p):(delete n[d],p(_,t.size))}),c=r(function(d,p,_){let g=d;p&&(g=d.filter(M=>t.$connector.filter(M,p))),_(g,g.length)});t.addEventListener("custom-value-set",r(d=>d.preventDefault()))})(i)}})();window.Vaadin.ComboBoxPlaceholder=Zt;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ue(r){return r.__cells||Array.from(r.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function lt(r,i){[...r.children].forEach(i)}function pe(r,i){ue(r).forEach(i),r.__detailsCell&&i(r.__detailsCell)}function il(r,i,t){let e=1;r.forEach(n=>{e%10===0&&(e+=1),n._order=t+e*i,e+=1})}function Kr(r,i,t){switch(typeof t){case"boolean":r.toggleAttribute(i,t);break;case"string":r.setAttribute(i,t);break;default:r.removeAttribute(i);break}}function Nt(r,i,t){i||i===""?Ge(r,"part",t):Hr(r,"part",t)}function $t(r,i,t){r.forEach(e=>{Nt(e,t,i)})}function Re(r,i){const t=ue(r);Object.entries(i).forEach(([e,n])=>{Kr(r,e,n);const a=`${e}-row`;Nt(r,n,a),$t(t,`${a}-cell`,n)})}function vs(r,i){const t=ue(r);Object.entries(i).forEach(([e,n])=>{const a=r.getAttribute(e);if(Kr(r,e,n),a){const o=`${e}-${a}-row`;Nt(r,!1,o),$t(t,`${o}-cell`,!1)}if(n){const o=`${e}-${n}-row`;Nt(r,n,o),$t(t,`${o}-cell`,n)}})}function qt(r,i,t,e,n){Kr(r,i,t),n&&Nt(r,!1,n),Nt(r,t,e||`${i}-cell`)}class Lt{constructor(i,t){this.__host=i,this.__callback=t,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(i,{childList:!0}),this.__initialCallDebouncer=I.debounce(this.__initialCallDebouncer,zt,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(i){this.__currentSlots.forEach(t=>{i?t.addEventListener("slotchange",this.__onMutation):t.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const i=!this.__currentColumns;this.__currentColumns||(this.__currentColumns=[]);const t=Lt.getColumns(this.__host),e=t.filter(s=>!this.__currentColumns.includes(s)),n=this.__currentColumns.filter(s=>!t.includes(s)),a=this.__currentColumns.some((s,l)=>s!==t[l]);this.__currentColumns=t,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(s=>s instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(i||e.length||n.length||a)&&this.__callback(e,n)}static __isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}static getColumns(i){const t=[],e=i._isColumnElement||Lt.__isColumnElement;return[...i.children].forEach(n=>{e(n)?t.push(n):n instanceof HTMLSlotElement&&[...n.assignedElements({flatten:!0})].filter(a=>e(a)).forEach(a=>t.push(a))}),t}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rl=r=>class extends r{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const t=this.parentNode;return t&&t.localName==="vaadin-grid-column-group"&&t.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(t=>t)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(t=>{t._content.parentNode||this._grid.appendChild(t._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)})}),this._gridValue=void 0}ready(){super.ready(),Gr(this)}_findHostGrid(){let t=this;for(;t&&!/^vaadin.*grid(-pro)?$/u.test(t.localName);)t=t.assignedSlot?t.assignedSlot.parentNode:t.parentNode;return t||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(e=>{e.style.flexGrow=t})}_orderChanged(t){this._allCells.forEach(e=>{e.style.order=t})}_widthChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(e=>{e.style.width=t})}_frozenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",t),this._allCells.forEach(e=>{qt(e,"frozen",t)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",t),this._allCells.forEach(e=>{this._grid&&e.parentElement===this._grid.$.sizer||qt(e,"frozen-to-end",t)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(t){this._allCells.forEach(e=>{qt(e,"last-frozen",t)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=t)}_firstFrozenToEndChanged(t){this._allCells.forEach(e=>{this._grid&&e.parentElement===this._grid.$.sizer||qt(e,"first-frozen-to-end",t)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=t)}_rowHeaderChanged(t,e){e&&e.forEach(n=>{n.setAttribute("role",t?"rowheader":"gridcell")})}_generateHeader(t){return t.substr(t.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,e=>e.toUpperCase())}_reorderStatusChanged(t){const e=this.__previousReorderStatus,n=e?`reorder-${e}-cell`:"",a=`reorder-${t}-cell`;this._allCells.forEach(o=>{qt(o,"reorder-status",t,a,n)}),this.__previousReorderStatus=t}_resizableChanged(t,e){t===void 0||e===void 0||e&&[e].concat(this._emptyCells).forEach(n=>{if(n){const a=n.querySelector('[part~="resize-handle"]');if(a&&n.removeChild(a),t){const o=document.createElement("div");o.setAttribute("part","resize-handle"),n.appendChild(o)}}})}_textAlignChanged(t){if(t===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(t)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let e;getComputedStyle(this._grid).direction==="ltr"?t==="start"?e="left":t==="end"&&(e="right"):t==="start"?e="right":t==="end"&&(e="left"),this._allCells.forEach(n=>{n._content.style.textAlign=t,getComputedStyle(n._content).textAlign!==t&&(n._content.style.textAlign=e)})}_hiddenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",t),!!t!=!!this._previousHidden&&this._grid&&(t===!0&&this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}),this._grid._debouncerHiddenChanged=I.debounce(this._grid._debouncerHiddenChanged,At,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=t}_runRenderer(t,e,n){const a=[e._content,this];n&&n.item&&a.push(n),t.apply(this,a)}__renderCellsContent(t,e){this.hidden||!this._grid||e.forEach(n=>{if(!n.parentElement)return;const a=this._grid.__getRowModel(n.parentElement);t&&(n._renderer!==t&&this._clearCellContent(n),n._renderer=t,(a.item||t===this._headerRenderer||t===this._footerRenderer)&&this._runRenderer(t,n,a))})}_clearCellContent(t){t._content.innerHTML="",delete t._content._$litPart$}_renderHeaderCellContent(t,e){!e||!t||(this.__renderCellsContent(t,[e]),this._grid&&e.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(e.parentElement))}_onHeaderRendererOrBindingChanged(t,e,...n){this._renderHeaderCellContent(t,e)}__headerFooterPartNameChanged(t,e,n,a){[{cell:t,partName:n},{cell:e,partName:a}].forEach(({cell:o,partName:s})=>{if(o){const l=o.__customParts||[];o.part.remove(...l),o.__customParts=s?s.trim().split(" "):[],o.part.add(...o.__customParts)}})}_renderBodyCellsContent(t,e){!e||!t||this.__renderCellsContent(t,e)}_onRendererOrBindingChanged(t,e,...n){this._renderBodyCellsContent(t,e)}_renderFooterCellContent(t,e){!e||!t||(this.__renderCellsContent(t,[e]),this._grid&&e.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(e.parentElement))}_onFooterRendererOrBindingChanged(t,e){this._renderFooterCellContent(t,e)}__setTextContent(t,e){t.textContent!==e&&(t.textContent=e)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(t,e,{item:n}){this.path&&this.__setTextContent(t,Xt(this.path,n))}_defaultFooterRenderer(){}_computeHeaderRenderer(t,e){return t||(e!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(t){return t||this._defaultRenderer}_computeFooterRenderer(t){return t||this._defaultFooterRenderer}},Fu=r=>class extends rl(ot(r)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nl extends Fu(O){static get is(){return"vaadin-grid-column"}}A(nl);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nu=!1,Bu=r=>r,Mo=typeof document.head.style.touchAction=="string",Gi="__polymerGestures",dn="__polymerGesturesHandled",kn="__polymerGesturesTouchAction",_s=25,ms=5,Hu=2,Vu=["mousedown","mousemove","mouseup","click"],Wu=[0,1,4,2],Uu=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function zo(r){return Vu.indexOf(r)>-1}let al=!1;(function(){try{const r=Object.defineProperty({},"passive",{get(){al=!0}});window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch{}})();function ol(r){if(!(zo(r)||r==="touchend")&&Mo&&al&&Nu)return{passive:!0}}const Yu=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),qu={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Kt(r){const i=r.type;if(!zo(i))return!1;if(i==="mousemove"){let e=r.buttons===void 0?1:r.buttons;return r instanceof window.MouseEvent&&!Uu&&(e=Wu[r.which]||0),!!(e&1)}return(r.button===void 0?0:r.button)===0}function ju(r){if(r.type==="click"){if(r.detail===0)return!0;const i=Ft(r);if(!i.nodeType||i.nodeType!==Node.ELEMENT_NODE)return!0;const t=i.getBoundingClientRect(),e=r.pageX,n=r.pageY;return!(e>=t.left&&e<=t.right&&n>=t.top&&n<=t.bottom)}return!1}const xt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Gu(r){let i="auto";const t=ll(r);for(let e=0,n;e<t.length;e++)if(n=t[e],n[kn]){i=n[kn];break}return i}function sl(r,i,t){r.movefn=i,r.upfn=t,document.addEventListener("mousemove",i),document.addEventListener("mouseup",t)}function oe(r){document.removeEventListener("mousemove",r.movefn),document.removeEventListener("mouseup",r.upfn),r.movefn=null,r.upfn=null}const ll=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:r=>r.composedPath&&r.composedPath()||[],St={},Gt=[];function Ku(r,i){let t=document.elementFromPoint(r,i),e=t;for(;e&&e.shadowRoot&&!window.ShadyDOM;){const n=e;if(e=e.shadowRoot.elementFromPoint(r,i),n===e)break;e&&(t=e)}return t}function Ft(r){const i=ll(r);return i.length>0?i[0]:r.target}function hl(r){const i=r.type,e=r.currentTarget[Gi];if(!e)return;const n=e[i];if(!n)return;if(!r[dn]&&(r[dn]={},i.startsWith("touch"))){const o=r.changedTouches[0];if(i==="touchstart"&&r.touches.length===1&&(xt.touch.id=o.identifier),xt.touch.id!==o.identifier)return;Mo||(i==="touchstart"||i==="touchmove")&&Qu(r)}const a=r[dn];if(!a.skip){for(let o=0,s;o<Gt.length;o++)s=Gt[o],n[s.name]&&!a[s.name]&&s.flow&&s.flow.start.indexOf(r.type)>-1&&s.reset&&s.reset();for(let o=0,s;o<Gt.length;o++)s=Gt[o],n[s.name]&&!a[s.name]&&(a[s.name]=!0,s[i](r))}}function Qu(r){const i=r.changedTouches[0],t=r.type;if(t==="touchstart")xt.touch.x=i.clientX,xt.touch.y=i.clientY,xt.touch.scrollDecided=!1;else if(t==="touchmove"){if(xt.touch.scrollDecided)return;xt.touch.scrollDecided=!0;const e=Gu(r);let n=!1;const a=Math.abs(xt.touch.x-i.clientX),o=Math.abs(xt.touch.y-i.clientY);r.cancelable&&(e==="none"?n=!0:e==="pan-x"?n=o>a:e==="pan-y"&&(n=a>o)),n?r.preventDefault():fe("track")}}function at(r,i,t){return St[i]?(Xu(r,i,t),!0):!1}function cl(r,i,t){return St[i]?(Zu(r,i,t),!0):!1}function Xu(r,i,t){const e=St[i],n=e.deps,a=e.name;let o=r[Gi];o||(r[Gi]=o={});for(let s=0,l,h;s<n.length;s++)l=n[s],!(Yu&&zo(l)&&l!=="click")&&(h=o[l],h||(o[l]=h={_count:0}),h._count===0&&r.addEventListener(l,hl,ol(l)),h[a]=(h[a]||0)+1,h._count=(h._count||0)+1);r.addEventListener(i,t),e.touchAction&&dl(r,e.touchAction)}function Zu(r,i,t){const e=St[i],n=e.deps,a=e.name,o=r[Gi];if(o)for(let s=0,l,h;s<n.length;s++)l=n[s],h=o[l],h&&h[a]&&(h[a]=(h[a]||1)-1,h._count=(h._count||1)-1,h._count===0&&r.removeEventListener(l,hl,ol(l)));r.removeEventListener(i,t)}function Qr(r){Gt.push(r),r.emits.forEach(i=>{St[i]=r})}function Ju(r){for(let i=0,t;i<Gt.length;i++){t=Gt[i];for(let e=0,n;e<t.emits.length;e++)if(n=t.emits[e],n===r)return t}return null}function dl(r,i){Mo&&r instanceof HTMLElement&&zt.run(()=>{r.style.touchAction=i}),r[kn]=i}function wo(r,i,t){const e=new Event(i,{bubbles:!0,cancelable:!0,composed:!0});if(e.detail=t,Bu(r).dispatchEvent(e),e.defaultPrevented){const n=t.preventer||t.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function fe(r){const i=Ju(r);i.info&&(i.info.prevent=!0)}Qr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){oe(this.info)},mousedown(r){if(!Kt(r))return;const i=Ft(r),t=this,e=a=>{Kt(a)||(Me("up",i,a),oe(t.info))},n=a=>{Kt(a)&&Me("up",i,a),oe(t.info)};sl(this.info,e,n),Me("down",i,r)},touchstart(r){Me("down",Ft(r),r.changedTouches[0],r)},touchend(r){Me("up",Ft(r),r.changedTouches[0],r)}});function Me(r,i,t,e){i&&wo(i,r,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e,prevent(n){return fe(n)}})}Qr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(r){this.moves.length>Hu&&this.moves.shift(),this.moves.push(r)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,oe(this.info)},mousedown(r){if(!Kt(r))return;const i=Ft(r),t=this,e=a=>{const o=a.clientX,s=a.clientY;gs(t.info,o,s)&&(t.info.state=t.info.started?a.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&fe("tap"),t.info.addMove({x:o,y:s}),Kt(a)||(t.info.state="end",oe(t.info)),i&&un(t.info,i,a),t.info.started=!0)},n=a=>{t.info.started&&e(a),oe(t.info)};sl(this.info,e,n),this.info.x=r.clientX,this.info.y=r.clientY},touchstart(r){const i=r.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchmove(r){const i=Ft(r),t=r.changedTouches[0],e=t.clientX,n=t.clientY;gs(this.info,e,n)&&(this.info.state==="start"&&fe("tap"),this.info.addMove({x:e,y:n}),un(this.info,i,t),this.info.state="track",this.info.started=!0)},touchend(r){const i=Ft(r),t=r.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),un(this.info,i,t))}});function gs(r,i,t){if(r.prevent)return!1;if(r.started)return!0;const e=Math.abs(r.x-i),n=Math.abs(r.y-t);return e>=ms||n>=ms}function un(r,i,t){if(!i)return;const e=r.moves[r.moves.length-2],n=r.moves[r.moves.length-1],a=n.x-r.x,o=n.y-r.y;let s,l=0;e&&(s=n.x-e.x,l=n.y-e.y),wo(i,"track",{state:r.state,x:t.clientX,y:t.clientY,dx:a,dy:o,ddx:s,ddy:l,sourceEvent:t,hover(){return Ku(t.clientX,t.clientY)}})}Qr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(r){Kt(r)&&(this.info.x=r.clientX,this.info.y=r.clientY)},click(r){Kt(r)&&ys(this.info,r)},touchstart(r){const i=r.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchend(r){ys(this.info,r.changedTouches[0],r)}});function ys(r,i,t){const e=Math.abs(i.clientX-r.x),n=Math.abs(i.clientY-r.y),a=Ft(t||i);!a||qu[a.localName]&&a.hasAttribute("disabled")||(isNaN(e)||isNaN(n)||e<=_s&&n<=_s||ju(i))&&(r.prevent||wo(a,"tap",{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:t}))}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tp=r=>class extends r{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(t,e){let n=t.firstElementChild;n||(n=document.createElement("vaadin-checkbox"),n.setAttribute("aria-label","Select All"),n.classList.add("vaadin-grid-select-all-checkbox"),t.appendChild(n),n.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const a=this.__isChecked(this.selectAll,this._indeterminate);n.__rendererChecked=a,n.checked=a,n.hidden=this._selectAllHidden,n.indeterminate=this._indeterminate}_defaultRenderer(t,e,{item:n,selected:a}){let o=t.firstElementChild;o||(o=document.createElement("vaadin-checkbox"),o.setAttribute("aria-label","Select Row"),t.appendChild(o),o.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),at(t,"track",this.__onCellTrack.bind(this)),t.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),t.addEventListener("click",this.__onCellClick.bind(this))),o.__item=n,o.__rendererChecked=a,o.checked=a}__onSelectAllCheckedChanged(t){t.target.checked!==t.target.__rendererChecked&&(this._indeterminate||t.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(t){t.target.checked!==t.target.__rendererChecked&&(t.target.checked?this._selectItem(t.target.__item):this._deselectItem(t.target.__item))}__onCellTrack(t){if(this.dragSelect)if(this.__dragCurrentY=t.detail.y,this.__dragDy=t.detail.dy,t.detail.state==="start"){const n=this._grid._getRenderedRows().find(a=>a.contains(t.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(n._item),this.__dragStartIndex=n.index,this.__dragStartItem=n._item,this.__dragAutoScroller()}else t.detail.state==="end"&&(this.__dragStartItem&&(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(t){this.dragSelect&&t.preventDefault()}__onCellClick(t){this.__dragStartIndex!==void 0&&t.preventDefault()}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;const t=this._grid._getRenderedRows(),e=t.find(l=>{const h=l.getBoundingClientRect();return this.__dragCurrentY>=h.top&&this.__dragCurrentY<=h.bottom});let n=e?e.index:void 0;const a=this.__getScrollableArea();this.__dragCurrentY<a.top?n=this._grid._firstVisibleIndex:this.__dragCurrentY>a.bottom&&(n=this._grid._lastVisibleIndex),n!==void 0&&t.forEach(l=>{(n>this.__dragStartIndex&&l.index>=this.__dragStartIndex&&l.index<=n||n<this.__dragStartIndex&&l.index<=this.__dragStartIndex&&l.index>=n)&&(this.__selectOnDrag?this._selectItem(l._item):this._deselectItem(l._item),this.__dragStartItem=void 0)});const o=a.height*.15,s=10;if(this.__dragDy<0&&this.__dragCurrentY<a.top+o){const l=a.top+o-this.__dragCurrentY,h=Math.min(1,l/o);this._grid.$.table.scrollTop-=h*s}if(this.__dragDy>0&&this.__dragCurrentY>a.bottom-o){const l=this.__dragCurrentY-(a.bottom-o),h=Math.min(1,l/o);this._grid.$.table.scrollTop+=h*s}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){const t=this._grid.$.table.getBoundingClientRect(),e=this._grid.$.header.getBoundingClientRect(),n=this._grid.$.footer.getBoundingClientRect();return{top:t.top+e.height,bottom:t.bottom-n.height,left:t.left,right:t.right,height:t.height-e.height-n.height,width:t.width}}_selectAll(){}_deselectAll(){}_selectItem(t){}_deselectItem(t){}__isChecked(t,e){return e||t}};class bs extends tp(nl){static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"}}}_defaultHeaderRenderer(i,t){super._defaultHeaderRenderer(i,t);const e=i.firstElementChild;e&&(e.id="selectAllCheckbox")}_selectAll(){this.selectAll=!0,this.$server.selectAll()}_deselectAll(){this.selectAll=!1,this.$server.deselectAll()}_selectItem(i){this._grid.$connector.doSelection([i],!0)}_deselectItem(i){this._grid.$connector.doDeselection([i],!0),this.selectAll=!1}}customElements.define(bs.is,bs);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-text-field",$r,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ep=r=>class extends yo(r){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_valueChanged(t,e){super._valueChanged(t,e),e!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ip=r=>class extends ep(r){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Yr(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new qr(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-text-field",bo,{moduleId:"vaadin-text-field-styles"});class rp extends ip(V(ft(O))){static get is(){return"vaadin-text-field"}static get template(){return R`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new Vt(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}A(rp);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dn extends U0{constructor(i){if(super(i),this.et=he,i.type!==Ga.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===he||i==null)return this.vt=void 0,this.et=i;if(i===q0)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.et)return this.vt;this.et=i;const t=[i];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Dn.directiveName="unsafeHTML",Dn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rn extends Dn{}Rn.directiveName="unsafeSVG",Rn.resultType=2;const ul=Y0(Rn);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ms(r){let i=he;if(r){const t=r.cloneNode(!0);t.removeAttribute("id"),i=K0`${ul(t.outerHTML)}`}return i}function np(r){return jc(r,qc.SVG)||r===he}function pl(r){let i=r==null||r===""?he:r;return np(i)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),i=he),i}function ap(r,i){const t=pl(r);Ka(t,i)}function op(r){return K0`${ul(r)}`}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ut={},zs=new Set;function fl(r,i){return(r||"").replace(`${i}:`,"")}function ws(r){return r?r.split(":")[0]||"vaadin":void 0}function Cs(r,i){r._icons=[...r.querySelectorAll("[id]")].reduce((t,e)=>{const n=fl(e.id,i);return t[n]=e,t},{})}class se extends ft(O){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static get attachedIcons(){return zs}static getIconset(i){return Ut[i]}static getIconSvg(i,t){const e=t||ws(i),n=this.getIconset(e);if(!i||!n)return{svg:Ms(null)};const a=fl(i,e),o=n._icons[a];return{preserveAspectRatio:o?o.getAttribute("preserveAspectRatio"):null,svg:Ms(o),size:n.size,viewBox:o?o.getAttribute("viewBox"):null}}static register(i,t,e){if(!Ut[i]){const n=document.createElement("vaadin-iconset");n.appendChild(e.content.cloneNode(!0)),Ut[i]=n,Cs(n,i),n.size=t,n.name=i,n.__nameChanged(i)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:i}=this;Ut[i]=this,Cs(this,i),this.__updateIcons(i)}__updateIcons(i){zs.forEach(t=>{i===ws(t.icon)&&t._applyIcon()})}__nameChanged(i,t){t&&(Ut[i]=Ut[t],delete Ut[t]),i&&this.__updateIcons(i)}}A(se);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vl=document.createElement("template");vl.innerHTML=`<svg><defs>
<g id="vaadin:abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>
<g id="vaadin:absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>
<g id="vaadin:academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>
<g id="vaadin:accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>
<g id="vaadin:accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>
<g id="vaadin:add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>
<g id="vaadin:adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>
<g id="vaadin:adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>
<g id="vaadin:airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>
<g id="vaadin:alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>
<g id="vaadin:align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>
<g id="vaadin:align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>
<g id="vaadin:alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>
<g id="vaadin:ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>
<g id="vaadin:anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>
<g id="vaadin:angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>
<g id="vaadin:angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>
<g id="vaadin:angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>
<g id="vaadin:angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>
<g id="vaadin:angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>
<g id="vaadin:angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>
<g id="vaadin:archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>
<g id="vaadin:archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>
<g id="vaadin:area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>
<g id="vaadin:arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>
<g id="vaadin:arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>
<g id="vaadin:arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>
<g id="vaadin:arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>
<g id="vaadin:arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>
<g id="vaadin:arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>
<g id="vaadin:arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>
<g id="vaadin:arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>
<g id="vaadin:arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>
<g id="vaadin:arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>
<g id="vaadin:arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>
<g id="vaadin:asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>
<g id="vaadin:at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>
<g id="vaadin:automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>
<g id="vaadin:backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>
<g id="vaadin:backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>
<g id="vaadin:ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>
<g id="vaadin:bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>
<g id="vaadin:bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>
<g id="vaadin:bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>
<g id="vaadin:barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>
<g id="vaadin:bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>
<g id="vaadin:bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>
<g id="vaadin:bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>
<g id="vaadin:boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>
<g id="vaadin:bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>
<g id="vaadin:bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>
<g id="vaadin:bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>
<g id="vaadin:book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>
<g id="vaadin:bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>
<g id="vaadin:briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>
<g id="vaadin:browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>
<g id="vaadin:bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>
<g id="vaadin:bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>
<g id="vaadin:building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>
<g id="vaadin:building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>
<g id="vaadin:bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>
<g id="vaadin:bus"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>
<g id="vaadin:calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>
<g id="vaadin:calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>
<g id="vaadin:calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>
<g id="vaadin:calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>
<g id="vaadin:calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>
<g id="vaadin:calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>
<g id="vaadin:car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:caret-down"><path d="M3 4h10l-5 7z"></path></g>
<g id="vaadin:caret-left"><path d="M11 3v10l-7-5z"></path></g>
<g id="vaadin:caret-right"><path d="M5 13v-10l7 5z"></path></g>
<g id="vaadin:caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>
<g id="vaadin:caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>
<g id="vaadin:caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>
<g id="vaadin:caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>
<g id="vaadin:caret-up"><path d="M13 12h-10l5-7z"></path></g>
<g id="vaadin:cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>
<g id="vaadin:cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>
<g id="vaadin:cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>
<g id="vaadin:chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>
<g id="vaadin:chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>
<g id="vaadin:chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>
<g id="vaadin:chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>
<g id="vaadin:chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>
<g id="vaadin:chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>
<g id="vaadin:check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>
<g id="vaadin:check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>
<g id="vaadin:check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>
<g id="vaadin:check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>
<g id="vaadin:chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>
<g id="vaadin:chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>
<g id="vaadin:chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>
<g id="vaadin:chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>
<g id="vaadin:chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>
<g id="vaadin:chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>
<g id="vaadin:chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>
<g id="vaadin:chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>
<g id="vaadin:chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>
<g id="vaadin:chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>
<g id="vaadin:chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>
<g id="vaadin:chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>
<g id="vaadin:child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>
<g id="vaadin:clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>
<g id="vaadin:clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>
<g id="vaadin:clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>
<g id="vaadin:clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>
<g id="vaadin:clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>
<g id="vaadin:close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>
<g id="vaadin:close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>
<g id="vaadin:close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>
<g id="vaadin:cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>
<g id="vaadin:cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>
<g id="vaadin:cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>
<g id="vaadin:cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>
<g id="vaadin:cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>
<g id="vaadin:cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>
<g id="vaadin:cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>
<g id="vaadin:code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>
<g id="vaadin:coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>
<g id="vaadin:cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>
<g id="vaadin:cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>
<g id="vaadin:coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>
<g id="vaadin:combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>
<g id="vaadin:comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>
<g id="vaadin:comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>
<g id="vaadin:compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>
<g id="vaadin:compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>
<g id="vaadin:connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>
<g id="vaadin:controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>
<g id="vaadin:copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>
<g id="vaadin:copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>
<g id="vaadin:copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>
<g id="vaadin:corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>
<g id="vaadin:corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>
<g id="vaadin:corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>
<g id="vaadin:corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>
<g id="vaadin:credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>
<g id="vaadin:crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>
<g id="vaadin:cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>
<g id="vaadin:crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>
<g id="vaadin:css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>
<g id="vaadin:ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>
<g id="vaadin:ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>
<g id="vaadin:cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>
<g id="vaadin:cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>
<g id="vaadin:curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>
<g id="vaadin:cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>
<g id="vaadin:cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>
<g id="vaadin:cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>
<g id="vaadin:dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>
<g id="vaadin:date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>
<g id="vaadin:deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>
<g id="vaadin:del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>
<g id="vaadin:dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>
<g id="vaadin:desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>
<g id="vaadin:diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>
<g id="vaadin:diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>
<g id="vaadin:diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>
<g id="vaadin:diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>
<g id="vaadin:disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>
<g id="vaadin:doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>
<g id="vaadin:dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>
<g id="vaadin:download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>
<g id="vaadin:drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>
<g id="vaadin:edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>
<g id="vaadin:eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>
<g id="vaadin:elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>
<g id="vaadin:ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>
<g id="vaadin:ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>
<g id="vaadin:ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>
<g id="vaadin:ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>
<g id="vaadin:enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>
<g id="vaadin:enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>
<g id="vaadin:envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>
<g id="vaadin:envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>
<g id="vaadin:envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>
<g id="vaadin:envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>
<g id="vaadin:envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>
<g id="vaadin:envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>
<g id="vaadin:eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>
<g id="vaadin:esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>
<g id="vaadin:esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>
<g id="vaadin:euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>
<g id="vaadin:exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>
<g id="vaadin:exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>
<g id="vaadin:exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>
<g id="vaadin:exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>
<g id="vaadin:expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>
<g id="vaadin:expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>
<g id="vaadin:external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>
<g id="vaadin:external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>
<g id="vaadin:eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>
<g id="vaadin:eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>
<g id="vaadin:eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>
<g id="vaadin:facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>
<g id="vaadin:facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>
<g id="vaadin:factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>
<g id="vaadin:family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>
<g id="vaadin:fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>
<g id="vaadin:fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>
<g id="vaadin:female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>
<g id="vaadin:file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>
<g id="vaadin:file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>
<g id="vaadin:file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>
<g id="vaadin:file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>
<g id="vaadin:file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>
<g id="vaadin:file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>
<g id="vaadin:file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>
<g id="vaadin:file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>
<g id="vaadin:file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>
<g id="vaadin:file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>
<g id="vaadin:file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>
<g id="vaadin:file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>
<g id="vaadin:file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>
<g id="vaadin:file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>
<g id="vaadin:file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>
<g id="vaadin:file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>
<g id="vaadin:fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>
<g id="vaadin:film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>
<g id="vaadin:fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>
<g id="vaadin:flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>
<g id="vaadin:flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>
<g id="vaadin:flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>
<g id="vaadin:flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>
<g id="vaadin:flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>
<g id="vaadin:flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>
<g id="vaadin:flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>
<g id="vaadin:folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>
<g id="vaadin:folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>
<g id="vaadin:folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>
<g id="vaadin:folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>
<g id="vaadin:font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>
<g id="vaadin:form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>
<g id="vaadin:forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>
<g id="vaadin:frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>
<g id="vaadin:function"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>
<g id="vaadin:gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>
<g id="vaadin:gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>
<g id="vaadin:glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>
<g id="vaadin:glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>
<g id="vaadin:globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>
<g id="vaadin:globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>
<g id="vaadin:golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>
<g id="vaadin:google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>
<g id="vaadin:google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>
<g id="vaadin:grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>
<g id="vaadin:grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>
<g id="vaadin:grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>
<g id="vaadin:grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>
<g id="vaadin:grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>
<g id="vaadin:grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>
<g id="vaadin:grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>
<g id="vaadin:grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>
<g id="vaadin:grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>
<g id="vaadin:group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>
<g id="vaadin:hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>
<g id="vaadin:hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>
<g id="vaadin:handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>
<g id="vaadin:hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>
<g id="vaadin:handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>
<g id="vaadin:harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>
<g id="vaadin:harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>
<g id="vaadin:hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>
<g id="vaadin:header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>
<g id="vaadin:headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>
<g id="vaadin:headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>
<g id="vaadin:health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>
<g id="vaadin:heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>
<g id="vaadin:heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>
<g id="vaadin:home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>
<g id="vaadin:home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>
<g id="vaadin:hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>
<g id="vaadin:hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>
<g id="vaadin:info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>
<g id="vaadin:info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>
<g id="vaadin:info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>
<g id="vaadin:invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>
<g id="vaadin:italic"><path d="M8 0h3l-3 16h-3z"></path></g>
<g id="vaadin:key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>
<g id="vaadin:keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>
<g id="vaadin:keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>
<g id="vaadin:laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>
<g id="vaadin:layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>
<g id="vaadin:level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>
<g id="vaadin:level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>
<g id="vaadin:level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>
<g id="vaadin:level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>
<g id="vaadin:level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>
<g id="vaadin:level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>
<g id="vaadin:level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>
<g id="vaadin:level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>
<g id="vaadin:lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>
<g id="vaadin:lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>
<g id="vaadin:line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>
<g id="vaadin:line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>
<g id="vaadin:line-h"><path d="M0 7h16v1h-16v-1z"></path></g>
<g id="vaadin:line-v"><path d="M8 0h1v16h-1v-16z"></path></g>
<g id="vaadin:lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>
<g id="vaadin:lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>
<g id="vaadin:link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>
<g id="vaadin:list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>
<g id="vaadin:list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>
<g id="vaadin:list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>
<g id="vaadin:location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>
<g id="vaadin:location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>
<g id="vaadin:location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>
<g id="vaadin:lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>
<g id="vaadin:magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>
<g id="vaadin:magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>
<g id="vaadin:mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>
<g id="vaadin:male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>
<g id="vaadin:margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>
<g id="vaadin:margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>
<g id="vaadin:medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>
<g id="vaadin:megaphone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>
<g id="vaadin:menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>
<g id="vaadin:microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>
<g id="vaadin:minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>
<g id="vaadin:minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>
<g id="vaadin:minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:minus"><path d="M2 7h12v2h-12v-2z"></path></g>
<g id="vaadin:mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>
<g id="vaadin:mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>
<g id="vaadin:mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>
<g id="vaadin:modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>
<g id="vaadin:money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>
<g id="vaadin:moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>
<g id="vaadin:moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>
<g id="vaadin:morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>
<g id="vaadin:mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>
<g id="vaadin:native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>
<g id="vaadin:notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>
<g id="vaadin:nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>
<g id="vaadin:office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>
<g id="vaadin:open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>
<g id="vaadin:option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>
<g id="vaadin:options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>
<g id="vaadin:orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>
<g id="vaadin:out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>
<g id="vaadin:outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>
<g id="vaadin:padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>
<g id="vaadin:paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>
<g id="vaadin:paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>
<g id="vaadin:palette"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>
<g id="vaadin:paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>
<g id="vaadin:paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>
<g id="vaadin:paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>
<g id="vaadin:paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>
<g id="vaadin:password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>
<g id="vaadin:pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>
<g id="vaadin:pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>
<g id="vaadin:phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>
<g id="vaadin:picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>
<g id="vaadin:pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>
<g id="vaadin:piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>
<g id="vaadin:piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>
<g id="vaadin:pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>
<g id="vaadin:pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>
<g id="vaadin:pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>
<g id="vaadin:play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>
<g id="vaadin:play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>
<g id="vaadin:play"><path d="M2 1v14l12-7z"></path></g>
<g id="vaadin:plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>
<g id="vaadin:plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>
<g id="vaadin:plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>
<g id="vaadin:plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>
<g id="vaadin:plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>
<g id="vaadin:pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>
<g id="vaadin:power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>
<g id="vaadin:presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>
<g id="vaadin:print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>
<g id="vaadin:progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>
<g id="vaadin:puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>
<g id="vaadin:pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>
<g id="vaadin:qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>
<g id="vaadin:question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>
<g id="vaadin:question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>
<g id="vaadin:question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>
<g id="vaadin:quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>
<g id="vaadin:random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>
<g id="vaadin:raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>
<g id="vaadin:recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>
<g id="vaadin:refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>
<g id="vaadin:reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>
<g id="vaadin:reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>
<g id="vaadin:resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>
<g id="vaadin:retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>
<g id="vaadin:rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>
<g id="vaadin:road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>
<g id="vaadin:road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>
<g id="vaadin:road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>
<g id="vaadin:rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>
<g id="vaadin:rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>
<g id="vaadin:rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>
<g id="vaadin:safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>
<g id="vaadin:safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>
<g id="vaadin:screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>
<g id="vaadin:search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>
<g id="vaadin:search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>
<g id="vaadin:select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>
<g id="vaadin:server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>
<g id="vaadin:share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>
<g id="vaadin:share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>
<g id="vaadin:shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>
<g id="vaadin:shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>
<g id="vaadin:shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>
<g id="vaadin:sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>
<g id="vaadin:sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>
<g id="vaadin:sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>
<g id="vaadin:sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>
<g id="vaadin:slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>
<g id="vaadin:sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>
<g id="vaadin:smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>
<g id="vaadin:sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>
<g id="vaadin:spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>
<g id="vaadin:spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>
<g id="vaadin:spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>
<g id="vaadin:spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>
<g id="vaadin:spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>
<g id="vaadin:spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>
<g id="vaadin:split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>
<g id="vaadin:split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>
<g id="vaadin:spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>
<g id="vaadin:square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>
<g id="vaadin:star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>
<g id="vaadin:star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>
<g id="vaadin:start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>
<g id="vaadin:step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>
<g id="vaadin:stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>
<g id="vaadin:stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>
<g id="vaadin:stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:stop"><path d="M1 1h14v14h-14v-14z"></path></g>
<g id="vaadin:stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>
<g id="vaadin:storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>
<g id="vaadin:strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>
<g id="vaadin:subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>
<g id="vaadin:sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>
<g id="vaadin:sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>
<g id="vaadin:tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>
<g id="vaadin:tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>
<g id="vaadin:table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>
<g id="vaadin:tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>
<g id="vaadin:tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>
<g id="vaadin:tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>
<g id="vaadin:tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>
<g id="vaadin:tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>
<g id="vaadin:taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>
<g id="vaadin:terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>
<g id="vaadin:text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>
<g id="vaadin:text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>
<g id="vaadin:text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>
<g id="vaadin:thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>
<g id="vaadin:thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>
<g id="vaadin:thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>
<g id="vaadin:time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>
<g id="vaadin:toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>
<g id="vaadin:tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>
<g id="vaadin:touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>
<g id="vaadin:train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>
<g id="vaadin:trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>
<g id="vaadin:tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>
<g id="vaadin:trending-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>
<g id="vaadin:trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>
<g id="vaadin:truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>
<g id="vaadin:twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>
<g id="vaadin:twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>
<g id="vaadin:umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>
<g id="vaadin:underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>
<g id="vaadin:unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>
<g id="vaadin:unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>
<g id="vaadin:upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>
<g id="vaadin:upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>
<g id="vaadin:user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>
<g id="vaadin:user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>
<g id="vaadin:user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>
<g id="vaadin:user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>
<g id="vaadin:user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>
<g id="vaadin:user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>
<g id="vaadin:users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>
<g id="vaadin:vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>
<g id="vaadin:vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>
<g id="vaadin:viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>
<g id="vaadin:vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>
<g id="vaadin:vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>
<g id="vaadin:volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>
<g id="vaadin:workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>
<g id="vaadin:wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>
<g id="vaadin:youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>
<g id="vaadin:youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>
</defs></svg>`;se.register("vaadin",16,vl);const sp=z`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;C("vaadin-date-picker-overlay",[Rr,sp],{moduleId:"lumo-date-picker-overlay"});const _l=z`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;C("vaadin-button",_l,{moduleId:"lumo-button"});C("vaadin-date-picker-year",z`
    :host([current]) [part='year-number'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:not([current])) [part='year-number'],
    [part='year-separator'] {
      opacity: var(--_lumo-date-picker-year-opacity, 0.7);
      transition: 0.2s opacity;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '\\2022';
    }
  `,{moduleId:"lumo-date-picker-year"});C("vaadin-date-picker-overlay-content",z`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    ::slotted([slot='months']) {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    ::slotted([slot='years']) {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    ::slotted([slot='years']:hover) {
      --_lumo-date-picker-year-opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO fix this in vaadin-date-picker that it adapts to the width of the year scroller */
    :host([desktop]) ::slotted([slot='months']) {
      right: auto;
    }

    /* Year scroller position indicator */
    ::slotted([slot='years'])::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    [part='toolbar'] ::slotted(vaadin-button) {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='toolbar'],
      ::slotted([slot='months']) {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      ::slotted([slot='years']) {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
        background-color: var(--lumo-shade-5pct);
      }

      :host([years-visible]) ::slotted([slot='months']) {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});C("vaadin-month-calendar",z`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part~='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part~='date'] {
      transition: color 0.1s;
    }

    [part~='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part~='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part~='date'][part~='today'] {
      color: var(--_selection-color-text);
    }

    /* Focused date */

    [part~='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part~='date'][part~='focused']::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color);
    }

    :host(:not([focused])) [part~='date'][part~='focused']::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) transparent;
      }
    }

    [part~='date']:not(:empty):not([part~='disabled']):not([part~='selected']):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part~='date'][part~='selected'] {
      color: var(--lumo-primary-contrast-color);
    }

    [part~='date'][part~='selected']::before {
      background-color: var(--_selection-color);
    }

    [part~='date'][part~='disabled'] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part~='date']:hover:not([part~='selected'])::before,
      [part~='focused']:not([part~='selected'])::before {
        display: none;
      }

      [part~='date']:not(:empty):not([part~='disabled']):active::before {
        display: block;
      }

      [part~='date'][part~='selected']::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const ml=document.createElement("template");ml.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 var(--_focus-ring-width) transparent;
      }
    }
  </style>
`;document.head.appendChild(ml.content);const lp=z`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;C("vaadin-date-picker",[$r,lp],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hp=z`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-date-picker-overlay",[je,hp],{moduleId:"vaadin-date-picker-overlay-styles"});class cp extends Vr(qe(ot(V(O)))){static get is(){return"vaadin-date-picker-overlay"}static get template(){return R`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}A(cp);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dp=z`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,up=r=>r`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Co=r=>class extends Ke(me(r)){get _activeKeys(){return[" "]}ready(){super.ready(),at(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),at(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",e=>{this._activeKeys.includes(e.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pp=r=>class extends Co(po(_e(r))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),!(t.altKey||t.shiftKey||t.ctrlKey||t.metaKey)&&this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-button",dp,{moduleId:"vaadin-button-styles"});class gl extends pp(ft(V(ct(O)))){static get is(){return"vaadin-button"}static get template(){return up(R)}ready(){super.ready(),this._tooltipController=new Vt(this),this.addController(this._tooltipController)}}A(gl);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function fp(r){let i=r.getDay();i===0&&(i=7);const t=4-i,e=new Date(r.getTime()+t*24*3600*1e3),n=new Date(0,0);n.setFullYear(e.getFullYear());const a=e.getTime()-n.getTime(),o=Math.round(a/(24*3600*1e3));return Math.floor(o/7+1)}function Et(r,i){return r instanceof Date&&i instanceof Date&&r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()&&r.getDate()===i.getDate()}function Ye(r,i,t){return(!i||r>=i)&&(!t||r<=t)}function yl(r,i){return i.filter(t=>t!==void 0).reduce((t,e)=>{if(!e)return t;if(!t)return e;const n=Math.abs(r.getTime()-e.getTime()),a=Math.abs(t.getTime()-r.getTime());return n<a?e:t})}function xo(r){return{day:r.getDate(),month:r.getMonth(),year:r.getFullYear()}}function bl(r){const i=new Date,t=new Date(i);return t.setDate(1),t.setMonth(parseInt(r)+i.getMonth()),t}function vp(r,i,t=0,e=1){if(i>99)throw new Error("The provided year cannot have more than 2 digits.");if(i<0)throw new Error("The provided year cannot be negative.");let n=i+Math.floor(r.getFullYear()/100)*100;return r<new Date(n-50,t,e)?n-=100:r>new Date(n+50,t,e)&&(n+=100),n}function jt(r){const i=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(r);if(!i)return;const t=new Date(0,0);return t.setFullYear(parseInt(i[1],10)),t.setMonth(parseInt(i[2],10)-1),t.setDate(parseInt(i[3],10)),t}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ml=document.createElement("template");Ml.innerHTML=`
  <style>
    :host {
      display: block;
      overflow: hidden;
      height: 500px;
    }

    #scroller {
      position: relative;
      height: 100%;
      overflow: auto;
      outline: none;
      margin-right: -40px;
      -webkit-overflow-scrolling: touch;
      overflow-x: hidden;
    }

    #scroller.notouchscroll {
      -webkit-overflow-scrolling: auto;
    }

    #scroller::-webkit-scrollbar {
      display: none;
    }

    .buffer {
      position: absolute;
      width: var(--vaadin-infinite-scroller-buffer-width, 100%);
      box-sizing: border-box;
      padding-right: 40px;
      top: var(--vaadin-infinite-scroller-buffer-offset, 0);
      animation: fadein 0.2s;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  </style>

  <div id="scroller">
    <div class="buffer"></div>
    <div class="buffer"></div>
    <div id="fullHeight"></div>
  </div>
`;class zl extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(Ml.content.cloneNode(!0)),this.bufferSize=20,this._initialScroll=5e5,this._initialIndex=0,this._activated=!1}get active(){return this._activated}set active(i){i&&!this._activated&&(this._createPool(),this._activated=!0)}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const i=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,i);const e=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(e)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(i){this._preventScrollEvent=!0,i>this._firstIndex&&i<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(i-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~i,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=i%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}connectedCallback(){this._ready||(this._ready=!0,this.$={},this.shadowRoot.querySelectorAll("[id]").forEach(i=>{this.$[i.id]=i}),this.$.scroller.addEventListener("scroll",()=>this._scroll()),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`,L1&&(this.$.scroller.tabIndex=-1))}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(i,t){}_finishInit(){this._initDone||(this._buffers.forEach(i=>{[...i.children].forEach(t=>{this._ensureStampedInstance(t._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(i){const t=i?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform=`translate3d(0, ${this._buffers[t].translateY}px, 0)`,this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const i=this.$.scroller.scrollTop;(i<this._bufferHeight||i>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const t=this.itemHeight+this.bufferOffset,e=i>this._buffers[1].translateY+t,n=i<this._buffers[0].translateY+t;(e||n)&&(this._translateBuffer(n),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=I.debounce(this._debouncerScrollFinish,pt.after(200),()=>{const a=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],a)&&!this._isVisible(this._buffers[1],a)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(i=>{i.style.transform=`translate3d(0, ${i.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=I.debounce(this._debouncerUpdateClones,pt.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const i=this.getBoundingClientRect();this._buffers.forEach(t=>{for(let e=0;e<this.bufferSize;e++){const n=document.createElement("div");n.style.height=`${this.itemHeight}px`,n.instance={};const a=`vaadin-infinite-scroller-item-content-${Wr()}`,o=document.createElement("slot");o.setAttribute("name",a),o._itemWrapper=n,t.appendChild(o),n.setAttribute("slot",a),this.appendChild(n),this._isVisible(n,i)&&this._ensureStampedInstance(n)}}),requestAnimationFrame(()=>{this._finishInit()})}_ensureStampedInstance(i){if(i.firstElementChild)return;const t=i.instance;i.instance=this._createElement(),i.appendChild(i.instance),Object.keys(t).forEach(e=>{i.instance[e]=t[e]})}_updateClones(i){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const t=i?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((e,n)=>{if(!e.updated){const a=this._firstIndex+this.bufferSize*n;[...e.children].forEach((o,s)=>{const l=o._itemWrapper;(!i||this._isVisible(l,t))&&this._updateElement(l.instance,a+s)}),e.updated=!0}})}_isVisible(i,t){const e=i.getBoundingClientRect();return e.bottom>t.top&&e.top<t.bottom}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wl=document.createElement("template");wl.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  </style>
`;class _p extends zl{static get is(){return"vaadin-date-picker-month-scroller"}constructor(){super(),this.bufferSize=3,this.shadowRoot.appendChild(wl.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(i,t){i.month=bl(t)}}A(_p);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cl=document.createElement("template");Cl.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;class mp extends zl{static get is(){return"vaadin-date-picker-year-scroller"}constructor(){super(),this.bufferSize=12,this.shadowRoot.appendChild(Cl.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(i,t){i.year=this._yearAfterXYears(t)}_yearAfterXYears(i){const t=new Date,e=new Date(t);return e.setFullYear(parseInt(i)+t.getFullYear()),e.getFullYear()}}A(mp);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gp=r=>class extends r{static get properties(){return{year:{type:String,sync:!0},selectedDate:{type:Object,sync:!0}}}static get observers(){return["__updateSelected(year, selectedDate)"]}__updateSelected(t,e){this.toggleAttribute("selected",e&&e.getFullYear()===t),this.toggleAttribute("current",t===new Date().getFullYear())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yp extends V(gp(O)){static get is(){return"vaadin-date-picker-year"}static get template(){return R`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>
      <div part="year-number">[[year]]</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}}A(yp);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const bp=Tc(O);class xs extends bp{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!gn,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let i=0;i<this.__instances.length;i++)this.__detachInstance(i);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),M1()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let i=L(L(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,i);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const i=this;let t=this.template=i._templateInfo?i:this.querySelector("template");if(!t){let n=new MutationObserver(()=>{if(this.querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return n.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=qi(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(n,a){let o=this.__instances;for(let s=0,l;s<o.length&&(l=o[s]);s++)l.forwardHostProp(n,a)},notifyInstanceProp:function(n,a,o){if(Ch(this.as,a)){let s=n[this.itemsIndexAs];a==this.as&&(this.items[s]=o);let l=Ne(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,a);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(i){if(typeof i=="string"){let t=i,e=this.__getMethodHost();return function(){return e[t].apply(e,arguments)}}return i}__sortChanged(i){this.__sortFn=this.__functionFromPropertyValue(i),this.items&&this.__debounceRender(this.__render)}__filterChanged(i){this.__filterFn=this.__functionFromPropertyValue(i),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(i){return Math.ceil(1e3/i)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(i){if(this.__sortFn||this.__filterFn){if(!i)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let t=this.__observePaths;for(let e=0;e<t.length;e++)i.indexOf(t[e])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(i){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(i.path,i.value)||(i.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(i,t=0){this.__renderDebouncer=Rt.debounce(this.__renderDebouncer,t>0?Yi.after(t):to,i.bind(this)),b1(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ro()}__render(){if(!this.__ensureTemplatized())return;let i=this.items||[];const t=this.__sortAndFilterItems(i),e=this.__calculateLimit(t.length);this.__updateInstances(i,e,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!gn||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(i){let t=new Array(i.length);for(let e=0;e<i.length;e++)t[e]=e;return this.__filterFn&&(t=t.filter((e,n,a)=>this.__filterFn(i[e],n,a))),this.__sortFn&&t.sort((e,n)=>this.__sortFn(i[e],i[n])),t}__calculateLimit(i){let t=i;const e=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(i,this.initialCount),n=Math.max(t-e,0),this.__chunkCount=n||1):(n=Math.min(Math.max(i-e,0),this.__chunkCount),t=Math.min(e+n,i)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=t<i,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const i=performance.now()-this.__renderStartTime,t=this._targetFrameTime/i;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(i,t,e){const n=this.__itemsIdxToInstIdx={};let a;for(a=0;a<t;a++){let o=this.__instances[a],s=e[a],l=i[s];n[s]=a,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,a),o._setPendingProperty(this.itemsIndexAs,s),o._flushProperties()):this.__insertInstance(l,a,s)}for(let o=this.__instances.length-1;o>=a;o--)this.__detachAndRemoveInstance(o)}__detachInstance(i){let t=this.__instances[i];const e=L(t.root);for(let n=0;n<t.children.length;n++){let a=t.children[n];e.appendChild(a)}return t}__attachInstance(i,t){let e=this.__instances[i];t.insertBefore(e.root,this)}__detachAndRemoveInstance(i){this.__detachInstance(i),this.__instances.splice(i,1)}__stampInstance(i,t,e){let n={};return n[this.as]=i,n[this.indexAs]=t,n[this.itemsIndexAs]=e,new this.__ctor(n)}__insertInstance(i,t,e){const n=this.__stampInstance(i,t,e);let a=this.__instances[t+1],o=a?a.children[0]:this;return L(L(this).parentNode).insertBefore(n.root,o),this.__instances[t]=n,n}_showHideChildren(i){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(i)}__handleItemPath(i,t){let e=i.slice(6),n=e.indexOf("."),a=n<0?e:e.substring(0,n);if(a==parseInt(a,10)){let o=n<0?"":e.substring(n+1);this.__handleObservedPaths(o);let s=this.__itemsIdxToInstIdx[a],l=this.__instances[s];if(l){let h=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(h,t,!1,!0),l._flushProperties()}return!0}}itemForElement(i){let t=this.modelForElement(i);return t&&t[this.as]}indexForElement(i){let t=this.modelForElement(i);return t&&t[this.indexAs]}modelForElement(i){return Wc(this.template,i)}}customElements.define(xs.is,xs);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mp=r=>class extends _e(r){static get properties(){return{month:{type:Object,value:new Date,sync:!0},selectedDate:{type:Object,notify:!0,sync:!0},focusedDate:{type:Object},showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:{type:Boolean},minDate:{type:Date,value:null,sync:!0},maxDate:{type:Date,value:null,sync:!0},disabled:{type:Boolean,reflectToAttribute:!0},_days:{type:Array},_weeks:{type:Array},_notTapping:{type:Boolean}}}static get observers(){return["__focusedDateChanged(focusedDate, _days)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(t=>Et(t.date,this.focusedDate))}ready(){super.ready(),at(this.$.monthGrid,"tap",this._handleTap.bind(this))}_isDisabled(t,e,n){const a=new Date(0,0);a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()),a.setDate(1);const o=new Date(0,0);return o.setFullYear(t.getFullYear()),o.setMonth(t.getMonth()+1),o.setDate(0),e&&n&&e.getMonth()===n.getMonth()&&e.getMonth()===t.getMonth()&&n.getDate()-e.getDate()>=0?!1:!Ye(a,e,n)&&!Ye(o,e,n)}_getTitle(t,e){if(!(t===void 0||e===void 0))return e.formatTitle(e.monthNames[t.getMonth()],t.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(t,e){t.setDate(t.getDate()+e)}_applyFirstDayOfWeek(t,e){if(!(t===void 0||e===void 0))return t.slice(e).concat(t.slice(0,e))}_getWeekDayNames(t,e){if(t===void 0||e===void 0)return[];const{weekdays:n,weekdaysShort:a,firstDayOfWeek:o}=t,s=this._applyFirstDayOfWeek(a,o);return this._applyFirstDayOfWeek(n,o).map((h,c)=>({weekDay:h,weekDayShort:s[c]}))}__focusedDateChanged(t,e){Array.isArray(e)&&e.some(n=>Et(n,t))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(t){return t?t.getDate():""}_showWeekSeparator(t,e){return t&&e&&e.firstDayOfWeek===1}_isToday(t){return Et(new Date,t)}_getDays(t,e){if(t===void 0||e===void 0)return[];const n=new Date(0,0);for(n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()),n.setDate(1);n.getDay()!==e.firstDayOfWeek;)this._dateAdd(n,-1);const a=[],o=n.getMonth(),s=t.getMonth();for(;n.getMonth()===s||n.getMonth()===o;)a.push(n.getMonth()===s?new Date(n.getTime()):null),this._dateAdd(n,1);return a}_getWeeks(t){return t.reduce((e,n,a)=>(a%7===0&&e.push([]),e[e.length-1].push(n),e),[])}_handleTap(t){!this.ignoreTaps&&!this._notTapping&&t.target.date&&!t.target.hasAttribute("disabled")&&(this.selectedDate=t.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:t.target.date},bubbles:!0,composed:!0})))}_preventDefault(t){t.preventDefault()}__getWeekNumber(t){const e=t.reduce((n,a)=>!n&&a?a:n);return fp(e)}__getDayAriaLabel(t){if(!t)return"";let e=`${this._getDate(t)} ${this.i18n.monthNames[t.getMonth()]} ${t.getFullYear()}, ${this.i18n.weekdays[t.getDay()]}`;return this._isToday(t)&&(e+=`, ${this.i18n.today}`),e}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zp=z`
  :host {
    display: block;
  }

  #monthGrid {
    width: 100%;
    border-collapse: collapse;
  }

  #days-container tr,
  #weekdays-container tr {
    display: flex;
  }

  [part~='date'] {
    outline: none;
  }

  [part~='disabled'] {
    pointer-events: none;
  }

  [part='week-number'][hidden],
  [part='weekday'][hidden] {
    display: none;
  }

  [part='weekday'],
  [part~='date'] {
    width: calc(100% / 7);
    padding: 0;
    font-weight: normal;
  }

  [part='weekday']:empty,
  [part='week-number'] {
    width: 12.5%;
    flex-shrink: 0;
    padding: 0;
  }

  :host([week-numbers]) [part='weekday']:not(:empty),
  :host([week-numbers]) [part~='date'] {
    width: 12.5%;
  }

  @media (forced-colors: active) {
    [part~='date'][part~='focused'] {
      outline: 1px solid;
    }

    [part~='date'][part~='selected'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-month-calendar",zp,{moduleId:"vaadin-month-calendar-styles"});class wp extends Mp(V(O)){static get template(){return R`
      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th part="weekday" aria-hidden="true" hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n)]]"></th>
            <template is="dom-repeat" items="[[_getWeekDayNames(i18n, showWeekNumbers)]]">
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td part="week-number" aria-hidden="true" hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n)]]">
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part$="[[__getDatePart(item, focusedDate, selectedDate, minDate, maxDate)]]"
                  date="[[item]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{_days:{type:Array,computed:"_getDays(month, i18n, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n)"]}_showWeekNumbersChanged(i,t){i&&t&&t.firstDayOfWeek===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}__getDatePart(i,t,e,n,a){const o=["date"];return this.__isDayDisabled(i,n,a)&&o.push("disabled"),this.__isDayFocused(i,t)&&o.push("focused"),this.__isDaySelected(i,e)&&o.push("selected"),this._isToday(i)&&o.push("today"),o.join(" ")}__isDayFocused(i,t){return Et(i,t)}__isDaySelected(i,t){return Et(i,t)}__getDayAriaSelected(i,t){if(this.__isDaySelected(i,t))return"true"}__isDayDisabled(i,t,e){return!Ye(i,t,e)}__getDayAriaDisabled(i,t,e){if(!(i===void 0||t===void 0||e===void 0)&&this.__isDayDisabled(i,t,e))return"true"}__getDayTabindex(i,t){return this.__isDayFocused(i,t)?"0":"-1"}}A(wp);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Po{constructor(i,t){this.query=i,this.callback=t,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(i){typeof this.callback=="function"&&this.callback(i.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cp=r=>class extends r{static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Object,value:null,sync:!0},focusedDate:{type:Object,notify:!0,observer:"_focusedDateChanged",sync:!0},_focusedMonthDate:Number,initialPosition:{type:Object,observer:"_initialPositionChanged"},_originDate:{type:Object,value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Object,sync:!0},maxDate:{type:Object,sync:!0},label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(t=>t.focusableDateElement).find(Boolean)}_addListeners(){dl(this.$.scrollers,"pan-y"),at(this.$.scrollers,"track",this._track.bind(this)),at(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),at(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),at(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this))}_initControllers(){this.addController(new Po(this._desktopMediaQuery,t=>{this._desktopMode=t})),this.addController(new Pt(this,"today-button","vaadin-button",{observe:!1,initializer:t=>{t.setAttribute("theme","tertiary"),t.addEventListener("keydown",e=>this.__onTodayButtonKeyDown(e)),at(t,"tap",this._onTodayTap.bind(this)),this._todayButton=t}})),this.addController(new Pt(this,"cancel-button","vaadin-button",{observe:!1,initializer:t=>{t.setAttribute("theme","tertiary"),t.addEventListener("keydown",e=>this.__onCancelButtonKeyDown(e)),at(t,"tap",this._cancel.bind(this)),this._cancelButton=t}})),this.__initMonthScroller(),this.__initYearScroller()}reset(){this._closeYearScroller(),this._toggleAnimateClass(!0)}focusCancel(){this._cancelButton.focus()}scrollToDate(t,e){const n=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(t):0;this._scrollToPosition(this._differenceInMonths(t,this._originDate)+n,e),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new Pt(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:t=>{t.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),t.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),t.addEventListener("keydown",e=>{this.__onMonthCalendarKeyDown(e)}),t.addEventListener("init-done",()=>{const e=[...this.querySelectorAll("vaadin-month-calendar")];e.forEach(n=>{n.addEventListener("selected-date-changed",a=>{this.selectedDate=a.detail.value})}),this.calendars=e}),this._monthScroller=t}}))}__initYearScroller(){this.addController(new Pt(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:t=>{t.setAttribute("aria-hidden","true"),at(t,"tap",e=>{this._onYearTap(e)}),t.addEventListener("custom-scroll",()=>{this._onYearScroll()}),t.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),t.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=t}}))}__updateCancelButton(t,e){t&&(t.textContent=e&&e.cancel)}__updateTodayButton(t,e,n,a){t&&(t.textContent=e&&e.today,t.disabled=!this._isTodayAllowed(n,a))}__updateCalendars(t,e,n,a,o,s,l,h,c){t&&t.length&&t.forEach(d=>{d.i18n=e,d.minDate=n,d.maxDate=a,d.focusedDate=s,d.selectedDate=o,d.showWeekNumbers=l,d.ignoreTaps=h,c?d.setAttribute("theme",c):d.removeAttribute("theme")})}__updateYears(t,e,n){t&&t.length&&t.forEach(a=>{a.selectedDate=e,n?a.setAttribute("theme",n):a.removeAttribute("theme")})}_selectDate(t){this.selectedDate=t,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:t},bubbles:!0,composed:!0}))}_desktopModeChanged(t){this.toggleAttribute("desktop",t)}_focusedDateChanged(t){this.revealDate(t)}revealDate(t,e=!0){if(!t)return;const n=this._differenceInMonths(t,this._originDate);if(this.__useSubMonthScrolling){const h=this._calculateWeekScrollOffset(t);this._scrollToPosition(n+h,e);return}const a=this._monthScroller.position>n,s=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,l=this._monthScroller.position+s-1<n;a?this._scrollToPosition(n,e):l&&this._scrollToPosition(n-s+1,e)}_calculateWeekScrollOffset(t){const e=new Date(0,0);e.setFullYear(t.getFullYear()),e.setMonth(t.getMonth()),e.setDate(1);let n=0;for(;e.getDate()<t.getDate();)e.setDate(e.getDate()+1),e.getDay()===this.i18n.firstDayOfWeek&&(n+=1);return n/6}_initialPositionChanged(t){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(t)}_repositionYearScroller(){const t=this._monthScroller.position;this._visibleMonthIndex=Math.floor(t),this._yearScroller.position=(t+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=I.debounce(this._debouncer,pt.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(t,e,n){return t&&e&&typeof e.formatDate=="function"?e.formatDate(xo(t)):n}_onTodayTap(){const t=new Date;Math.abs(this._monthScroller.position-this._differenceInMonths(t,this._originDate))<.001?(this._selectDate(t),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(t){if(!this._ignoreTaps&&!this._notTapping){const n=(t.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+n*12,!0)}}_scrollToPosition(t,e){if(this._targetPosition!==void 0){this._targetPosition=t;return}if(!e){this._monthScroller.position=t,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=t;let n;this._revealPromise=new Promise(h=>{n=h});const a=(h,c,d,p)=>(h/=p/2,h<1?d/2*h*h+c:(h-=1,-d/2*(h*(h-2)-1)+c));let o=0;const s=this._monthScroller.position,l=h=>{o||(o=h);const c=h-o;if(c<this.scrollDuration){const d=a(c,s,this._targetPosition-s,this.scrollDuration);this._monthScroller.position=d,window.requestAnimationFrame(l)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:s}})),this._monthScroller.position=this._targetPosition,this._targetPosition=void 0,n(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(l)}_limit(t,e){return Math.min(e.max,Math.max(e.min,t))}_handleTrack(t){if(Math.abs(t.detail.dx)<10||Math.abs(t.detail.ddy)>10)return;Math.abs(t.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const e=this._translateX+t.detail.ddx;this._translateX=this._limit(e,{min:0,max:this._yearScrollerWidth})}_track(t){if(!this._desktopMode)switch(t.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(t);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(t){t?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(t){this._desktopMode||(this._monthScroller.style.transform=`translateX(${t-this._yearScrollerWidth}px)`,this._yearScroller.style.transform=`translateX(${t}px)`)}_yearAfterXMonths(t){return bl(t).getFullYear()}_differenceInMonths(t,e){return(t.getFullYear()-e.getFullYear())*12-e.getMonth()+t.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(t){t.preventDefault()}__toggleDate(t){Et(t,this.selectedDate)?(this._clear(),this.focusedDate=t):this._selectDate(t)}__onMonthCalendarKeyDown(t){let e=!1;switch(t.key){case"ArrowDown":this._moveFocusByDays(7),e=!0;break;case"ArrowUp":this._moveFocusByDays(-7),e=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),e=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),e=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),e=!0;break;case" ":this.__toggleDate(this.focusedDate),e=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),e=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),e=!0;break;case"PageDown":this._moveFocusByMonths(t.shiftKey?12:1),e=!0;break;case"PageUp":this._moveFocusByMonths(t.shiftKey?-12:-1),e=!0;break;case"Tab":this._onTabKeyDown(t,"calendar");break}e&&(t.preventDefault(),t.stopPropagation())}_onTabKeyDown(t,e){switch(t.stopPropagation(),e){case"calendar":t.shiftKey&&(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":t.shiftKey&&(t.preventDefault(),this.focusDateElement());break;case"cancel":t.shiftKey||(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"today")}__onCancelButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&Et(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(t,e){const n=t||this.selectedDate||this.initialPosition||new Date;this.focusedDate=n,e||(this._focusedMonthDate=n.getDate()),await this.focusDateElement(!1)}async focusDateElement(t=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(e=>{$1(this,()=>{ro(),e()})}),t&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(t){this.focusDate(yl(t,[this.minDate,this.maxDate]))}_focusAllowedDate(t,e,n){this._dateAllowed(t)?this.focusDate(t,n):this._dateAllowed(this.focusedDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(t,e){const n=new Date(0,0);return n.setFullYear(this.focusedDate.getFullYear()),n.setMonth(this.focusedDate.getMonth()+t),e&&n.setDate(this.focusedDate.getDate()+e),n}_moveFocusByDays(t){const e=this._getDateDiff(0,t);this._focusAllowedDate(e,t,!1)}_moveFocusByMonths(t){const e=this._getDateDiff(t),n=e.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),e.setDate(this._focusedMonthDate),e.getMonth()!==n&&e.setDate(0),this._focusAllowedDate(e,t,!0)}_moveFocusInsideMonth(t,e){const n=new Date(0,0);n.setFullYear(t.getFullYear()),e==="minDate"?(n.setMonth(t.getMonth()),n.setDate(1)):(n.setMonth(t.getMonth()+1),n.setDate(0)),this._dateAllowed(n)?this.focusDate(n):this._dateAllowed(t)?this.focusDate(this[e]):this._focusClosestDate(t)}_dateAllowed(t,e=this.minDate,n=this.maxDate){return(!e||t>=e)&&(!n||t<=n)}_isTodayAllowed(t,e){const n=new Date,a=new Date(0,0);return a.setFullYear(n.getFullYear()),a.setMonth(n.getMonth()),a.setDate(n.getDate()),this._dateAllowed(a,t,e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xp=z`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    outline: none;
  }

  [part='overlay-header'] {
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    align-items: center;
  }

  :host(:not([fullscreen])) [part='overlay-header'] {
    display: none;
  }

  [part='label'] {
    flex-grow: 1;
  }

  [hidden] {
    display: none !important;
  }

  [part='years-toggle-button'] {
    display: flex;
  }

  #scrollers {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  :host([desktop]) ::slotted([slot='months']) {
    right: 50px;
    transform: none !important;
  }

  :host([desktop]) ::slotted([slot='years']) {
    transform: none !important;
  }

  :host(.animate) ::slotted([slot='months']),
  :host(.animate) ::slotted([slot='years']) {
    transition: all 200ms;
  }

  [part='toolbar'] {
    display: flex;
    justify-content: space-between;
    z-index: 2;
    flex-shrink: 0;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-date-picker-overlay-content",xp,{moduleId:"vaadin-date-picker-overlay-content-styles"});class Pp extends Cp(ct(V(ot(O)))){static get template(){return R`
      <div part="overlay-header" on-touchend="_preventDefault" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers">
        <slot name="months"></slot>
        <slot name="years"></slot>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <slot name="cancel-button"></slot>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}ready(){super.ready(),this.setAttribute("role","dialog"),this._addListeners(),this._initControllers()}}A(Pp);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ep=r=>class extends jr(ct(fo(go(me(r))))){static get properties(){return{_selectedDate:{type:Object,sync:!0},_focusedDate:{type:Object,sync:!0},value:{type:String,notify:!0,value:"",sync:!0},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged",sync:!0},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean,value:!1,sync:!0},_fullscreen:{type:Boolean,value:!1,sync:!0},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,sync:!0,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(t){const e=String(t.year).replace(/\d+/u,n=>"0000".substr(n.length)+n);return[t.month+1,t.day,e].join("/")},parseDate(t){const e=t.split("/"),n=new Date;let a,o=n.getMonth(),s=n.getFullYear();if(e.length===3){if(o=parseInt(e[0])-1,a=parseInt(e[1]),s=parseInt(e[2]),e[2].length<3&&s>=0){const l=this.referenceDate?jt(this.referenceDate):new Date;s=vp(l,s,o,a)}}else e.length===2?(o=parseInt(e[0])-1,a=parseInt(e[1])):e.length===1&&(a=parseInt(e[0]));if(a!==void 0)return{day:a,month:o,year:s}},formatTitle:(t,e)=>`${t} ${e}`})},min:{type:String,sync:!0},max:{type:String,sync:!0},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)",sync:!0},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)",sync:!0},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:We},_focusOverlayOnOpen:Boolean,_overlayContent:{type:Object,sync:!0},_hasInputValue:{type:Boolean}}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n)","_focusedDateChanged(_focusedDate, i18n)","__updateOverlayContent(_overlayContent, i18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this),this._boundOverlayRenderer=this._overlayRenderer.bind(this)}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(t){super._inputElementValue=t,this._hasInputValue=!1}get clearElement(){return null}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}get __unparsableValue(){return!this._inputElementValue||this.__parseDate(this._inputElementValue)?"":this._inputElementValue}_onFocus(t){super._onFocus(t),this._noInput&&t.target.blur()}_onBlur(t){super._onBlur(t),this.opened||(this.__commitParsedOrFocusedDate(),document.hasFocus()&&this.validate())}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new Po(this._fullscreenMediaQuery,e=>{this._fullscreen=e})),this.addController(new el(this));const t=this.$.overlay;this._overlayElement=t,t.renderer=this._boundOverlayRenderer,this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}_overlayRenderer(t){if(t.firstChild)return;const e=document.createElement("vaadin-date-picker-overlay-content");t.appendChild(e),this._overlayContent=e,e.addEventListener("close",()=>{this._close()}),e.addEventListener("focus-input",this._focusAndSelect.bind(this)),e.addEventListener("date-tap",n=>{this.__commitDate(n.detail.date),this._close()}),e.addEventListener("date-selected",n=>{this.__commitDate(n.detail.date)}),e.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),e.addEventListener("focused-date-changed",n=>{this._focusedDate=n.detail.value}),e.addEventListener("click",n=>n.stopPropagation())}__parseDate(t){if(!this.i18n.parseDate)return;let e=this.i18n.parseDate(t);if(e&&(e=jt(`${e.year}-${e.month+1}-${e.day}`)),e&&!isNaN(e.getTime()))return e}__formatDate(t){if(this.i18n.formatDate)return this.i18n.formatDate(xo(t))}checkValidity(){const t=this._inputElementValue,e=!t||!!this._selectedDate&&t===this.__formatDate(this._selectedDate),n=!this._selectedDate||Ye(this._selectedDate,this._minDate,this._maxDate);let a=!0;return this.inputElement&&(this.inputElement.checkValidity?a=this.inputElement.checkValidity():this.inputElement.validate&&(a=this.inputElement.validate())),e&&n&&a}_shouldSetFocus(t){return!this._shouldKeepFocusRing}_shouldRemoveFocus(t){return!this.opened}_setFocused(t){super._setFocused(t),this._shouldKeepFocusRing=t&&this._keyboardActive}__commitValueChange(){const t=this.__unparsableValue;this.__committedValue!==this.value?(this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValue!==t&&(this.validate(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValue=t}__commitDate(t){this.__keepCommittedValue=!0,this._selectedDate=t,this.__keepCommittedValue=!1,this.__commitValueChange()}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(t,e,n,a,o,s){return!t||e&&(!s||o)||n&&o||!a.parseDate}_formatISO(t){if(!(t instanceof Date))return"";const e=(c,d="00")=>(d+c).substr((d+c).length-d.length);let n="",a="0000",o=t.getFullYear();o<0?(o=-o,n="-",a="000000"):t.getFullYear()>=1e4&&(n="+",a="000000");const s=n+e(o,a),l=e(t.getMonth()+1),h=e(t.getDate());return[s,l,h].join("-")}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.autocomplete="off",t.setAttribute("role","combobox"),t.setAttribute("aria-haspopup","dialog"),t.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(t){this.inputElement&&this.inputElement.setAttribute("aria-expanded",t)}_selectedDateChanged(t,e){t===void 0||e===void 0||(this.__keepInputValue||this._applyInputValue(t),this.value=this._formatISO(t),this._ignoreFocusedDateChange=!0,this._focusedDate=t,this._ignoreFocusedDateChange=!1)}_focusedDateChanged(t,e){t===void 0||e===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(t)}_valueChanged(t,e){const n=jt(t);if(t&&!n){this.value=e;return}t?Et(this._selectedDate,n)||(this._selectedDate=n,e!==void 0&&this.validate()):this._selectedDate=null,this.__keepCommittedValue||(this.__committedValue=this.value,this.__committedUnparsableValue=""),this._toggleHasValue(this._hasValue)}__updateOverlayContent(t,e,n,a,o,s,l,h){t&&(t.i18n=e,t.label=n,t.minDate=a,t.maxDate=o,t.focusedDate=s,t.selectedDate=l,t.showWeekNumbers=h)}__updateOverlayContentTheme(t,e){t&&(e?t.setAttribute("theme",e):t.removeAttribute("theme"))}__updateOverlayContentFullScreen(t,e){t&&t.toggleAttribute("fullscreen",e)}_onOverlayEscapePress(){this._focusedDate=this._selectedDate,this._close()}_onOverlayOpened(){const t=this._overlayContent;t.reset();const e=this._getInitialPosition();t.initialPosition=e;const n=t.focusedDate||e;t.scrollToDate(n),this._ignoreFocusedDateChange=!0,t.focusedDate=n,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(t.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus();const a=this._nativeInput;this._noInput&&a&&(a.blur(),this._overlayContent.focusDateElement());const o=this._noInput?t:[a,t];this.__showOthers=F1(o)}_getInitialPosition(){const t=jt(this.initialPosition),e=this._selectedDate||this._overlayContent.initialPosition||t||new Date;return t||Ye(e,this._minDate,this._maxDate)?e:yl(e,[this._minDate,this._maxDate])}__commitParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const t=this._inputElementValue||"",e=this.__parseDate(t);e?this.__commitDate(e):(this.__keepInputValue=!0,this.__commitDate(null),this.__keepInputValue=!1)}else this._focusedDate&&this.__commitDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null),window.removeEventListener("scroll",this._boundOnScroll,!0),this.__commitParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),!this.value&&!this._keyboardActive&&this.validate()}_onScroll(t){(t.target===window||!this._overlayContent.contains(t.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(t){this._inputElementValue=t?this.__formatDate(t):""}_setSelectionRange(t,e){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(t,e)}_onChange(t){t.stopPropagation()}_onClick(t){this._isClearButton(t)||this._onHostClick(t)}_onHostClick(t){(!this.autoOpenDisabled||this._noInput)&&(t.preventDefault(),this.open())}_onClearButtonClick(t){t.preventDefault(),this.__commitDate(null)}_onKeyDown(t){switch(super._onKeyDown(t),this._noInput&&[9].indexOf(t.keyCode)===-1&&t.preventDefault(),t.key){case"ArrowDown":case"ArrowUp":t.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(t.preventDefault(),t.stopPropagation(),this._setSelectionRange(0,0),t.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(t){this.opened?this.close():this.__commitParsedOrFocusedDate()}_onEscape(t){if(!this.opened){if(this.clearButtonVisible&&this.value){t.stopPropagation(),this._onClearButtonClick(t);return}this.inputElement.value===""?this.__commitDate(null):this._applyInputValue(this._selectedDate)}}_isClearButton(t){return t.composedPath()[0]===this.clearElement}_onInput(){if(!this.opened&&this._inputElementValue&&!this.autoOpenDisabled&&this.open(),this._inputElementValue){const t=this.__parseDate(this._inputElementValue);t&&(this._ignoreFocusedDateChange=!0,Et(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}__computeMinOrMaxDate(t){return jt(t)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ap=z`
  :host([opened]) {
    pointer-events: auto;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-date-picker",[bo,Ap],{moduleId:"vaadin-date-picker-styles"});class Sp extends Ep(yo(V(ft(O)))){static get is(){return"vaadin-date-picker"}static get template(){return R`
      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Yr(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new qr(this.inputElement,this._labelController)),this._tooltipController=new Vt(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(t=>!t.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",t=>t.preventDefault()),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(i){i.detail.sourceEvent&&i.detail.sourceEvent.composedPath().includes(this)&&i.preventDefault()}_toggle(i){i.stopPropagation(),this.$.overlay.opened?this.close():this.open()}_openedChanged(i){super._openedChanged(i),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}A(Sp);function X(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}function oi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?oi=function(t){return typeof t}:oi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oi(r)}function Op(r){return X(1,arguments),r instanceof Date||oi(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function si(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?si=function(t){return typeof t}:si=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},si(r)}function nt(r){X(1,arguments);var i=Object.prototype.toString.call(r);return r instanceof Date||si(r)==="object"&&i==="[object Date]"?new Date(r.getTime()):typeof r=="number"||i==="[object Number]"?new Date(r):((typeof r=="string"||i==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function $n(r){if(X(1,arguments),!Op(r)&&typeof r!="number")return!1;var i=nt(r);return!isNaN(Number(i))}function ht(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}function Tp(r,i){X(2,arguments);var t=nt(r).getTime(),e=ht(i);return new Date(t+e)}function xl(r,i){X(2,arguments);var t=ht(i);return Tp(r,-t)}var Ip=864e5;function kp(r){X(1,arguments);var i=nt(r),t=i.getTime();i.setUTCMonth(0,1),i.setUTCHours(0,0,0,0);var e=i.getTime(),n=t-e;return Math.floor(n/Ip)+1}function ve(r){X(1,arguments);var i=1,t=nt(r),e=t.getUTCDay(),n=(e<i?7:0)+e-i;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function Pl(r){X(1,arguments);var i=nt(r),t=i.getUTCFullYear(),e=new Date(0);e.setUTCFullYear(t+1,0,4),e.setUTCHours(0,0,0,0);var n=ve(e),a=new Date(0);a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0);var o=ve(a);return i.getTime()>=n.getTime()?t+1:i.getTime()>=o.getTime()?t:t-1}function Dp(r){X(1,arguments);var i=Pl(r),t=new Date(0);t.setUTCFullYear(i,0,4),t.setUTCHours(0,0,0,0);var e=ve(t);return e}var Rp=6048e5;function El(r){X(1,arguments);var i=nt(r),t=ve(i).getTime()-Dp(i).getTime();return Math.round(t/Rp)+1}var $p={};function ge(){return $p}function Jt(r,i){var t,e,n,a,o,s,l,h;X(1,arguments);var c=ge(),d=ht((t=(e=(n=(a=i==null?void 0:i.weekStartsOn)!==null&&a!==void 0?a:i==null||(o=i.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:c.weekStartsOn)!==null&&e!==void 0?e:(l=c.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&t!==void 0?t:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=nt(r),_=p.getUTCDay(),g=(_<d?7:0)+_-d;return p.setUTCDate(p.getUTCDate()-g),p.setUTCHours(0,0,0,0),p}function Eo(r,i){var t,e,n,a,o,s,l,h;X(1,arguments);var c=nt(r),d=c.getUTCFullYear(),p=ge(),_=ht((t=(e=(n=(a=i==null?void 0:i.firstWeekContainsDate)!==null&&a!==void 0?a:i==null||(o=i.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:p.firstWeekContainsDate)!==null&&e!==void 0?e:(l=p.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(_>=1&&_<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(d+1,0,_),g.setUTCHours(0,0,0,0);var M=Jt(g,i),y=new Date(0);y.setUTCFullYear(d,0,_),y.setUTCHours(0,0,0,0);var x=Jt(y,i);return c.getTime()>=M.getTime()?d+1:c.getTime()>=x.getTime()?d:d-1}function Lp(r,i){var t,e,n,a,o,s,l,h;X(1,arguments);var c=ge(),d=ht((t=(e=(n=(a=i==null?void 0:i.firstWeekContainsDate)!==null&&a!==void 0?a:i==null||(o=i.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:c.firstWeekContainsDate)!==null&&e!==void 0?e:(l=c.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&t!==void 0?t:1),p=Eo(r,i),_=new Date(0);_.setUTCFullYear(p,0,d),_.setUTCHours(0,0,0,0);var g=Jt(_,i);return g}var Fp=6048e5;function Al(r,i){X(1,arguments);var t=nt(r),e=Jt(t,i).getTime()-Lp(t,i).getTime();return Math.round(e/Fp)+1}function $(r,i){for(var t=r<0?"-":"",e=Math.abs(r).toString();e.length<i;)e="0"+e;return t+e}var Np={y:function(i,t){var e=i.getUTCFullYear(),n=e>0?e:1-e;return $(t==="yy"?n%100:n,t.length)},M:function(i,t){var e=i.getUTCMonth();return t==="M"?String(e+1):$(e+1,2)},d:function(i,t){return $(i.getUTCDate(),t.length)},a:function(i,t){var e=i.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h:function(i,t){return $(i.getUTCHours()%12||12,t.length)},H:function(i,t){return $(i.getUTCHours(),t.length)},m:function(i,t){return $(i.getUTCMinutes(),t.length)},s:function(i,t){return $(i.getUTCSeconds(),t.length)},S:function(i,t){var e=t.length,n=i.getUTCMilliseconds(),a=Math.floor(n*Math.pow(10,e-3));return $(a,t.length)}};const kt=Np;var ee={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Bp={G:function(i,t,e){var n=i.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(n,{width:"abbreviated"});case"GGGGG":return e.era(n,{width:"narrow"});case"GGGG":default:return e.era(n,{width:"wide"})}},y:function(i,t,e){if(t==="yo"){var n=i.getUTCFullYear(),a=n>0?n:1-n;return e.ordinalNumber(a,{unit:"year"})}return kt.y(i,t)},Y:function(i,t,e,n){var a=Eo(i,n),o=a>0?a:1-a;if(t==="YY"){var s=o%100;return $(s,2)}return t==="Yo"?e.ordinalNumber(o,{unit:"year"}):$(o,t.length)},R:function(i,t){var e=Pl(i);return $(e,t.length)},u:function(i,t){var e=i.getUTCFullYear();return $(e,t.length)},Q:function(i,t,e){var n=Math.ceil((i.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return $(n,2);case"Qo":return e.ordinalNumber(n,{unit:"quarter"});case"QQQ":return e.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(n,{width:"wide",context:"formatting"})}},q:function(i,t,e){var n=Math.ceil((i.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return $(n,2);case"qo":return e.ordinalNumber(n,{unit:"quarter"});case"qqq":return e.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(n,{width:"wide",context:"standalone"})}},M:function(i,t,e){var n=i.getUTCMonth();switch(t){case"M":case"MM":return kt.M(i,t);case"Mo":return e.ordinalNumber(n+1,{unit:"month"});case"MMM":return e.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(n,{width:"wide",context:"formatting"})}},L:function(i,t,e){var n=i.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return $(n+1,2);case"Lo":return e.ordinalNumber(n+1,{unit:"month"});case"LLL":return e.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(n,{width:"wide",context:"standalone"})}},w:function(i,t,e,n){var a=Al(i,n);return t==="wo"?e.ordinalNumber(a,{unit:"week"}):$(a,t.length)},I:function(i,t,e){var n=El(i);return t==="Io"?e.ordinalNumber(n,{unit:"week"}):$(n,t.length)},d:function(i,t,e){return t==="do"?e.ordinalNumber(i.getUTCDate(),{unit:"date"}):kt.d(i,t)},D:function(i,t,e){var n=kp(i);return t==="Do"?e.ordinalNumber(n,{unit:"dayOfYear"}):$(n,t.length)},E:function(i,t,e){var n=i.getUTCDay();switch(t){case"E":case"EE":case"EEE":return e.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(n,{width:"short",context:"formatting"});case"EEEE":default:return e.day(n,{width:"wide",context:"formatting"})}},e:function(i,t,e,n){var a=i.getUTCDay(),o=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return $(o,2);case"eo":return e.ordinalNumber(o,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});case"eeee":default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(i,t,e,n){var a=i.getUTCDay(),o=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return $(o,t.length);case"co":return e.ordinalNumber(o,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});case"cccc":default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(i,t,e){var n=i.getUTCDay(),a=n===0?7:n;switch(t){case"i":return String(a);case"ii":return $(a,t.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(n,{width:"short",context:"formatting"});case"iiii":default:return e.day(n,{width:"wide",context:"formatting"})}},a:function(i,t,e){var n=i.getUTCHours(),a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(i,t,e){var n=i.getUTCHours(),a;switch(n===12?a=ee.noon:n===0?a=ee.midnight:a=n/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(i,t,e){var n=i.getUTCHours(),a;switch(n>=17?a=ee.evening:n>=12?a=ee.afternoon:n>=4?a=ee.morning:a=ee.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(i,t,e){if(t==="ho"){var n=i.getUTCHours()%12;return n===0&&(n=12),e.ordinalNumber(n,{unit:"hour"})}return kt.h(i,t)},H:function(i,t,e){return t==="Ho"?e.ordinalNumber(i.getUTCHours(),{unit:"hour"}):kt.H(i,t)},K:function(i,t,e){var n=i.getUTCHours()%12;return t==="Ko"?e.ordinalNumber(n,{unit:"hour"}):$(n,t.length)},k:function(i,t,e){var n=i.getUTCHours();return n===0&&(n=24),t==="ko"?e.ordinalNumber(n,{unit:"hour"}):$(n,t.length)},m:function(i,t,e){return t==="mo"?e.ordinalNumber(i.getUTCMinutes(),{unit:"minute"}):kt.m(i,t)},s:function(i,t,e){return t==="so"?e.ordinalNumber(i.getUTCSeconds(),{unit:"second"}):kt.s(i,t)},S:function(i,t){return kt.S(i,t)},X:function(i,t,e,n){var a=n._originalDate||i,o=a.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return Es(o);case"XXXX":case"XX":return Yt(o);case"XXXXX":case"XXX":default:return Yt(o,":")}},x:function(i,t,e,n){var a=n._originalDate||i,o=a.getTimezoneOffset();switch(t){case"x":return Es(o);case"xxxx":case"xx":return Yt(o);case"xxxxx":case"xxx":default:return Yt(o,":")}},O:function(i,t,e,n){var a=n._originalDate||i,o=a.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ps(o,":");case"OOOO":default:return"GMT"+Yt(o,":")}},z:function(i,t,e,n){var a=n._originalDate||i,o=a.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ps(o,":");case"zzzz":default:return"GMT"+Yt(o,":")}},t:function(i,t,e,n){var a=n._originalDate||i,o=Math.floor(a.getTime()/1e3);return $(o,t.length)},T:function(i,t,e,n){var a=n._originalDate||i,o=a.getTime();return $(o,t.length)}};function Ps(r,i){var t=r>0?"-":"+",e=Math.abs(r),n=Math.floor(e/60),a=e%60;if(a===0)return t+String(n);var o=i||"";return t+String(n)+o+$(a,2)}function Es(r,i){if(r%60===0){var t=r>0?"-":"+";return t+$(Math.abs(r)/60,2)}return Yt(r,i)}function Yt(r,i){var t=i||"",e=r>0?"-":"+",n=Math.abs(r),a=$(Math.floor(n/60),2),o=$(n%60,2);return e+a+t+o}var As=function(i,t){switch(i){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Sl=function(i,t){switch(i){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Hp=function(i,t){var e=i.match(/(P+)(p+)?/)||[],n=e[1],a=e[2];if(!a)return As(i,t);var o;switch(n){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",As(n,t)).replace("{{time}}",Sl(a,t))},Ln={p:Sl,P:Hp};function Ol(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}var Vp=["D","DD"],Wp=["YY","YYYY"];function Tl(r){return Vp.indexOf(r)!==-1}function Il(r){return Wp.indexOf(r)!==-1}function Ki(r,i,t){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(i,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(i,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(i,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(i,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Up={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Yp=function(i,t,e){var n,a=Up[i];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+n:n+" ago":n};const qp=Yp;function pn(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=i.width?String(i.width):r.defaultWidth,e=r.formats[t]||r.formats[r.defaultWidth];return e}}var jp={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Gp={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Kp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qp={date:pn({formats:jp,defaultWidth:"full"}),time:pn({formats:Gp,defaultWidth:"full"}),dateTime:pn({formats:Kp,defaultWidth:"full"})};const Xp=Qp;var Zp={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Jp=function(i,t,e,n){return Zp[i]};const t2=Jp;function ze(r){return function(i,t){var e=t!=null&&t.context?String(t.context):"standalone",n;if(e==="formatting"&&r.formattingValues){var a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;n=r.formattingValues[o]||r.formattingValues[a]}else{var s=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;n=r.values[l]||r.values[s]}var h=r.argumentCallback?r.argumentCallback(i):i;return n[h]}}var e2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},i2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},r2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},n2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},a2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},o2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},s2=function(i,t){var e=Number(i),n=e%100;if(n>20||n<10)switch(n%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},l2={ordinalNumber:s2,era:ze({values:e2,defaultWidth:"wide"}),quarter:ze({values:i2,defaultWidth:"wide",argumentCallback:function(i){return i-1}}),month:ze({values:r2,defaultWidth:"wide"}),day:ze({values:n2,defaultWidth:"wide"}),dayPeriod:ze({values:a2,defaultWidth:"wide",formattingValues:o2,defaultFormattingWidth:"wide"})};const h2=l2;function we(r){return function(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.width,n=e&&r.matchPatterns[e]||r.matchPatterns[r.defaultMatchWidth],a=i.match(n);if(!a)return null;var o=a[0],s=e&&r.parsePatterns[e]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(s)?d2(s,function(d){return d.test(o)}):c2(s,function(d){return d.test(o)}),h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;var c=i.slice(o.length);return{value:h,rest:c}}}function c2(r,i){for(var t in r)if(r.hasOwnProperty(t)&&i(r[t]))return t}function d2(r,i){for(var t=0;t<r.length;t++)if(i(r[t]))return t}function u2(r){return function(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.match(r.matchPattern);if(!e)return null;var n=e[0],a=i.match(r.parsePattern);if(!a)return null;var o=r.valueCallback?r.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var s=i.slice(n.length);return{value:o,rest:s}}}var p2=/^(\d+)(th|st|nd|rd)?/i,f2=/\d+/i,v2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},_2={any:[/^b/i,/^(a|c)/i]},m2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},g2={any:[/1/i,/2/i,/3/i,/4/i]},y2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},b2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},M2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},z2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},w2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},C2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},x2={ordinalNumber:u2({matchPattern:p2,parsePattern:f2,valueCallback:function(i){return parseInt(i,10)}}),era:we({matchPatterns:v2,defaultMatchWidth:"wide",parsePatterns:_2,defaultParseWidth:"any"}),quarter:we({matchPatterns:m2,defaultMatchWidth:"wide",parsePatterns:g2,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:we({matchPatterns:y2,defaultMatchWidth:"wide",parsePatterns:b2,defaultParseWidth:"any"}),day:we({matchPatterns:M2,defaultMatchWidth:"wide",parsePatterns:z2,defaultParseWidth:"any"}),dayPeriod:we({matchPatterns:w2,defaultMatchWidth:"any",parsePatterns:C2,defaultParseWidth:"any"})};const P2=x2;var E2={code:"en-US",formatDistance:qp,formatLong:Xp,formatRelative:t2,localize:h2,match:P2,options:{weekStartsOn:0,firstWeekContainsDate:1}};const kl=E2;var A2=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,S2=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,O2=/^'([^]*?)'?$/,T2=/''/g,I2=/[a-zA-Z]/;function k2(r,i,t){var e,n,a,o,s,l,h,c,d,p,_,g,M,y,x,w,k,W;X(2,arguments);var F=String(i),H=ge(),tt=(e=(n=t==null?void 0:t.locale)!==null&&n!==void 0?n:H.locale)!==null&&e!==void 0?e:kl,dt=ht((a=(o=(s=(l=t==null?void 0:t.firstWeekContainsDate)!==null&&l!==void 0?l:t==null||(h=t.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:H.firstWeekContainsDate)!==null&&o!==void 0?o:(d=H.locale)===null||d===void 0||(p=d.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(dt>=1&&dt<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var vt=ht((_=(g=(M=(y=t==null?void 0:t.weekStartsOn)!==null&&y!==void 0?y:t==null||(x=t.locale)===null||x===void 0||(w=x.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&M!==void 0?M:H.weekStartsOn)!==null&&g!==void 0?g:(k=H.locale)===null||k===void 0||(W=k.options)===null||W===void 0?void 0:W.weekStartsOn)!==null&&_!==void 0?_:0);if(!(vt>=0&&vt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!tt.localize)throw new RangeError("locale must contain localize property");if(!tt.formatLong)throw new RangeError("locale must contain formatLong property");var _t=nt(r);if(!$n(_t))throw new RangeError("Invalid time value");var wt=Ol(_t),gt=xl(_t,wt),Tt={firstWeekContainsDate:dt,weekStartsOn:vt,locale:tt,_originalDate:_t},It=F.match(S2).map(function(Q){var it=Q[0];if(it==="p"||it==="P"){var u=Ln[it];return u(Q,tt.formatLong)}return Q}).join("").match(A2).map(function(Q){if(Q==="''")return"'";var it=Q[0];if(it==="'")return D2(Q);var u=Bp[it];if(u)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Il(Q)&&Ki(Q,i,String(r)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Tl(Q)&&Ki(Q,i,String(r)),u(gt,Q,tt.localize,Tt);if(it.match(I2))throw new RangeError("Format string contains an unescaped latin alphabet character `"+it+"`");return Q}).join("");return It}function D2(r){var i=r.match(O2);return i?i[1].replace(T2,"'"):r}function R2(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(r[t]=i[t]);return r}function li(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?li=function(t){return typeof t}:li=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},li(r)}function Dl(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Fn(r,i)}function Fn(r,i){return Fn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Fn(r,i)}function Rl(r){var i=L2();return function(){var e=Qi(r),n;if(i){var a=Qi(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return $2(this,n)}}function $2(r,i){return i&&(li(i)==="object"||typeof i=="function")?i:Nn(r)}function Nn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function L2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qi(r){return Qi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Qi(r)}function Ao(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Ss(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function So(r,i,t){return i&&Ss(r.prototype,i),t&&Ss(r,t),r}function Bn(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var F2=10,$l=function(){function r(){Ao(this,r),Bn(this,"subPriority",0)}return So(r,[{key:"validate",value:function(t,e){return!0}}]),r}(),N2=function(r){Dl(t,r);var i=Rl(t);function t(e,n,a,o,s){var l;return Ao(this,t),l=i.call(this),l.value=e,l.validateValue=n,l.setValue=a,l.priority=o,s&&(l.subPriority=s),l}return So(t,[{key:"validate",value:function(n,a){return this.validateValue(n,this.value,a)}},{key:"set",value:function(n,a,o){return this.setValue(n,a,this.value,o)}}]),t}($l),B2=function(r){Dl(t,r);var i=Rl(t);function t(){var e;Ao(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Bn(Nn(e),"priority",F2),Bn(Nn(e),"subPriority",-1),e}return So(t,[{key:"set",value:function(n,a){if(a.timestampIsSet)return n;var o=new Date(0);return o.setFullYear(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),o.setHours(n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds()),o}}]),t}($l);function H2(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Os(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function V2(r,i,t){return i&&Os(r.prototype,i),t&&Os(r,t),r}var D=function(){function r(){H2(this,r)}return V2(r,[{key:"run",value:function(t,e,n,a){var o=this.parse(t,e,n,a);return o?{setter:new N2(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}},{key:"validate",value:function(t,e,n){return!0}}]),r}();function hi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hi=function(t){return typeof t}:hi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(r)}function W2(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Ts(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function U2(r,i,t){return i&&Ts(r.prototype,i),t&&Ts(r,t),r}function Y2(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Hn(r,i)}function Hn(r,i){return Hn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Hn(r,i)}function q2(r){var i=G2();return function(){var e=Xi(r),n;if(i){var a=Xi(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return j2(this,n)}}function j2(r,i){return i&&(hi(i)==="object"||typeof i=="function")?i:Vn(r)}function Vn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function G2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xi(r){return Xi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Xi(r)}function Is(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var K2=function(r){Y2(t,r);var i=q2(t);function t(){var e;W2(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Is(Vn(e),"priority",140),Is(Vn(e),"incompatibleTokens",["R","u","t","T"]),e}return U2(t,[{key:"parse",value:function(n,a,o){switch(a){case"G":case"GG":case"GGG":return o.era(n,{width:"abbreviated"})||o.era(n,{width:"narrow"});case"GGGGG":return o.era(n,{width:"narrow"});case"GGGG":default:return o.era(n,{width:"wide"})||o.era(n,{width:"abbreviated"})||o.era(n,{width:"narrow"})}}},{key:"set",value:function(n,a,o){return a.era=o,n.setUTCFullYear(o,0,1),n.setUTCHours(0,0,0,0),n}}]),t}(D),Q2=6e4,X2=36e5,Z2=1e3,G={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},bt={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function K(r,i){return r&&{value:i(r.value),rest:r.rest}}function Y(r,i){var t=i.match(r);return t?{value:parseInt(t[0],10),rest:i.slice(t[0].length)}:null}function Mt(r,i){var t=i.match(r);if(!t)return null;if(t[0]==="Z")return{value:0,rest:i.slice(1)};var e=t[1]==="+"?1:-1,n=t[2]?parseInt(t[2],10):0,a=t[3]?parseInt(t[3],10):0,o=t[5]?parseInt(t[5],10):0;return{value:e*(n*X2+a*Q2+o*Z2),rest:i.slice(t[0].length)}}function Ll(r){return Y(G.anyDigitsSigned,r)}function q(r,i){switch(r){case 1:return Y(G.singleDigit,i);case 2:return Y(G.twoDigits,i);case 3:return Y(G.threeDigits,i);case 4:return Y(G.fourDigits,i);default:return Y(new RegExp("^\\d{1,"+r+"}"),i)}}function Zi(r,i){switch(r){case 1:return Y(G.singleDigitSigned,i);case 2:return Y(G.twoDigitsSigned,i);case 3:return Y(G.threeDigitsSigned,i);case 4:return Y(G.fourDigitsSigned,i);default:return Y(new RegExp("^-?\\d{1,"+r+"}"),i)}}function Oo(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Fl(r,i){var t=i>0,e=t?i:1-i,n;if(e<=50)n=r||100;else{var a=e+50,o=Math.floor(a/100)*100,s=r>=a%100;n=r+o-(s?100:0)}return t?n:1-n}function Nl(r){return r%400===0||r%4===0&&r%100!==0}function ci(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ci=function(t){return typeof t}:ci=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ci(r)}function J2(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function ks(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function tf(r,i,t){return i&&ks(r.prototype,i),t&&ks(r,t),r}function ef(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Wn(r,i)}function Wn(r,i){return Wn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Wn(r,i)}function rf(r){var i=af();return function(){var e=Ji(r),n;if(i){var a=Ji(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return nf(this,n)}}function nf(r,i){return i&&(ci(i)==="object"||typeof i=="function")?i:Un(r)}function Un(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function af(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ji(r){return Ji=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Ji(r)}function Ds(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var of=function(r){ef(t,r);var i=rf(t);function t(){var e;J2(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Ds(Un(e),"priority",130),Ds(Un(e),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),e}return tf(t,[{key:"parse",value:function(n,a,o){var s=function(h){return{year:h,isTwoDigitYear:a==="yy"}};switch(a){case"y":return K(q(4,n),s);case"yo":return K(o.ordinalNumber(n,{unit:"year"}),s);default:return K(q(a.length,n),s)}}},{key:"validate",value:function(n,a){return a.isTwoDigitYear||a.year>0}},{key:"set",value:function(n,a,o){var s=n.getUTCFullYear();if(o.isTwoDigitYear){var l=Fl(o.year,s);return n.setUTCFullYear(l,0,1),n.setUTCHours(0,0,0,0),n}var h=!("era"in a)||a.era===1?o.year:1-o.year;return n.setUTCFullYear(h,0,1),n.setUTCHours(0,0,0,0),n}}]),t}(D);function di(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?di=function(t){return typeof t}:di=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},di(r)}function sf(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Rs(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function lf(r,i,t){return i&&Rs(r.prototype,i),t&&Rs(r,t),r}function hf(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Yn(r,i)}function Yn(r,i){return Yn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Yn(r,i)}function cf(r){var i=uf();return function(){var e=tr(r),n;if(i){var a=tr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return df(this,n)}}function df(r,i){return i&&(di(i)==="object"||typeof i=="function")?i:qn(r)}function qn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function uf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tr(r){return tr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},tr(r)}function $s(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var pf=function(r){hf(t,r);var i=cf(t);function t(){var e;sf(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),$s(qn(e),"priority",130),$s(qn(e),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),e}return lf(t,[{key:"parse",value:function(n,a,o){var s=function(h){return{year:h,isTwoDigitYear:a==="YY"}};switch(a){case"Y":return K(q(4,n),s);case"Yo":return K(o.ordinalNumber(n,{unit:"year"}),s);default:return K(q(a.length,n),s)}}},{key:"validate",value:function(n,a){return a.isTwoDigitYear||a.year>0}},{key:"set",value:function(n,a,o,s){var l=Eo(n,s);if(o.isTwoDigitYear){var h=Fl(o.year,l);return n.setUTCFullYear(h,0,s.firstWeekContainsDate),n.setUTCHours(0,0,0,0),Jt(n,s)}var c=!("era"in a)||a.era===1?o.year:1-o.year;return n.setUTCFullYear(c,0,s.firstWeekContainsDate),n.setUTCHours(0,0,0,0),Jt(n,s)}}]),t}(D);function ui(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ui=function(t){return typeof t}:ui=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ui(r)}function ff(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Ls(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function vf(r,i,t){return i&&Ls(r.prototype,i),t&&Ls(r,t),r}function _f(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&jn(r,i)}function jn(r,i){return jn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},jn(r,i)}function mf(r){var i=yf();return function(){var e=er(r),n;if(i){var a=er(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return gf(this,n)}}function gf(r,i){return i&&(ui(i)==="object"||typeof i=="function")?i:Gn(r)}function Gn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function er(r){return er=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},er(r)}function Fs(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var bf=function(r){_f(t,r);var i=mf(t);function t(){var e;ff(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Fs(Gn(e),"priority",130),Fs(Gn(e),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),e}return vf(t,[{key:"parse",value:function(n,a){return Zi(a==="R"?4:a.length,n)}},{key:"set",value:function(n,a,o){var s=new Date(0);return s.setUTCFullYear(o,0,4),s.setUTCHours(0,0,0,0),ve(s)}}]),t}(D);function pi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pi=function(t){return typeof t}:pi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pi(r)}function Mf(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Ns(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function zf(r,i,t){return i&&Ns(r.prototype,i),t&&Ns(r,t),r}function wf(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Kn(r,i)}function Kn(r,i){return Kn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Kn(r,i)}function Cf(r){var i=Pf();return function(){var e=ir(r),n;if(i){var a=ir(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return xf(this,n)}}function xf(r,i){return i&&(pi(i)==="object"||typeof i=="function")?i:Qn(r)}function Qn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Pf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ir(r){return ir=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ir(r)}function Bs(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Ef=function(r){wf(t,r);var i=Cf(t);function t(){var e;Mf(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Bs(Qn(e),"priority",130),Bs(Qn(e),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),e}return zf(t,[{key:"parse",value:function(n,a){return Zi(a==="u"?4:a.length,n)}},{key:"set",value:function(n,a,o){return n.setUTCFullYear(o,0,1),n.setUTCHours(0,0,0,0),n}}]),t}(D);function fi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fi=function(t){return typeof t}:fi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fi(r)}function Af(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Hs(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Sf(r,i,t){return i&&Hs(r.prototype,i),t&&Hs(r,t),r}function Of(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Xn(r,i)}function Xn(r,i){return Xn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Xn(r,i)}function Tf(r){var i=kf();return function(){var e=rr(r),n;if(i){var a=rr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return If(this,n)}}function If(r,i){return i&&(fi(i)==="object"||typeof i=="function")?i:Zn(r)}function Zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function kf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rr(r){return rr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},rr(r)}function Vs(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Df=function(r){Of(t,r);var i=Tf(t);function t(){var e;Af(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Vs(Zn(e),"priority",120),Vs(Zn(e),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),e}return Sf(t,[{key:"parse",value:function(n,a,o){switch(a){case"Q":case"QQ":return q(a.length,n);case"Qo":return o.ordinalNumber(n,{unit:"quarter"});case"QQQ":return o.quarter(n,{width:"abbreviated",context:"formatting"})||o.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(n,{width:"wide",context:"formatting"})||o.quarter(n,{width:"abbreviated",context:"formatting"})||o.quarter(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,a){return a>=1&&a<=4}},{key:"set",value:function(n,a,o){return n.setUTCMonth((o-1)*3,1),n.setUTCHours(0,0,0,0),n}}]),t}(D);function vi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?vi=function(t){return typeof t}:vi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(r)}function Rf(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Ws(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function $f(r,i,t){return i&&Ws(r.prototype,i),t&&Ws(r,t),r}function Lf(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Jn(r,i)}function Jn(r,i){return Jn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Jn(r,i)}function Ff(r){var i=Bf();return function(){var e=nr(r),n;if(i){var a=nr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return Nf(this,n)}}function Nf(r,i){return i&&(vi(i)==="object"||typeof i=="function")?i:ta(r)}function ta(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nr(r){return nr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},nr(r)}function Us(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Hf=function(r){Lf(t,r);var i=Ff(t);function t(){var e;Rf(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Us(ta(e),"priority",120),Us(ta(e),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),e}return $f(t,[{key:"parse",value:function(n,a,o){switch(a){case"q":case"qq":return q(a.length,n);case"qo":return o.ordinalNumber(n,{unit:"quarter"});case"qqq":return o.quarter(n,{width:"abbreviated",context:"standalone"})||o.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(n,{width:"wide",context:"standalone"})||o.quarter(n,{width:"abbreviated",context:"standalone"})||o.quarter(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,a){return a>=1&&a<=4}},{key:"set",value:function(n,a,o){return n.setUTCMonth((o-1)*3,1),n.setUTCHours(0,0,0,0),n}}]),t}(D);function _i(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_i=function(t){return typeof t}:_i=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(r)}function Vf(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Ys(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Wf(r,i,t){return i&&Ys(r.prototype,i),t&&Ys(r,t),r}function Uf(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&ea(r,i)}function ea(r,i){return ea=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},ea(r,i)}function Yf(r){var i=jf();return function(){var e=ar(r),n;if(i){var a=ar(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return qf(this,n)}}function qf(r,i){return i&&(_i(i)==="object"||typeof i=="function")?i:ia(r)}function ia(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function jf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ar(r){return ar=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ar(r)}function qs(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Gf=function(r){Uf(t,r);var i=Yf(t);function t(){var e;Vf(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),qs(ia(e),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),qs(ia(e),"priority",110),e}return Wf(t,[{key:"parse",value:function(n,a,o){var s=function(h){return h-1};switch(a){case"M":return K(Y(G.month,n),s);case"MM":return K(q(2,n),s);case"Mo":return K(o.ordinalNumber(n,{unit:"month"}),s);case"MMM":return o.month(n,{width:"abbreviated",context:"formatting"})||o.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(n,{width:"wide",context:"formatting"})||o.month(n,{width:"abbreviated",context:"formatting"})||o.month(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=11}},{key:"set",value:function(n,a,o){return n.setUTCMonth(o,1),n.setUTCHours(0,0,0,0),n}}]),t}(D);function mi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mi=function(t){return typeof t}:mi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(r)}function Kf(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function js(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Qf(r,i,t){return i&&js(r.prototype,i),t&&js(r,t),r}function Xf(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&ra(r,i)}function ra(r,i){return ra=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},ra(r,i)}function Zf(r){var i=tv();return function(){var e=or(r),n;if(i){var a=or(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return Jf(this,n)}}function Jf(r,i){return i&&(mi(i)==="object"||typeof i=="function")?i:na(r)}function na(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function or(r){return or=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},or(r)}function Gs(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var ev=function(r){Xf(t,r);var i=Zf(t);function t(){var e;Kf(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Gs(na(e),"priority",110),Gs(na(e),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),e}return Qf(t,[{key:"parse",value:function(n,a,o){var s=function(h){return h-1};switch(a){case"L":return K(Y(G.month,n),s);case"LL":return K(q(2,n),s);case"Lo":return K(o.ordinalNumber(n,{unit:"month"}),s);case"LLL":return o.month(n,{width:"abbreviated",context:"standalone"})||o.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(n,{width:"wide",context:"standalone"})||o.month(n,{width:"abbreviated",context:"standalone"})||o.month(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=11}},{key:"set",value:function(n,a,o){return n.setUTCMonth(o,1),n.setUTCHours(0,0,0,0),n}}]),t}(D);function iv(r,i,t){X(2,arguments);var e=nt(r),n=ht(i),a=Al(e,t)-n;return e.setUTCDate(e.getUTCDate()-a*7),e}function gi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gi=function(t){return typeof t}:gi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(r)}function rv(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Ks(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function nv(r,i,t){return i&&Ks(r.prototype,i),t&&Ks(r,t),r}function av(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&aa(r,i)}function aa(r,i){return aa=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},aa(r,i)}function ov(r){var i=lv();return function(){var e=sr(r),n;if(i){var a=sr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return sv(this,n)}}function sv(r,i){return i&&(gi(i)==="object"||typeof i=="function")?i:oa(r)}function oa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function lv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sr(r){return sr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},sr(r)}function Qs(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var hv=function(r){av(t,r);var i=ov(t);function t(){var e;rv(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Qs(oa(e),"priority",100),Qs(oa(e),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),e}return nv(t,[{key:"parse",value:function(n,a,o){switch(a){case"w":return Y(G.week,n);case"wo":return o.ordinalNumber(n,{unit:"week"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){return a>=1&&a<=53}},{key:"set",value:function(n,a,o,s){return Jt(iv(n,o,s),s)}}]),t}(D);function cv(r,i){X(2,arguments);var t=nt(r),e=ht(i),n=El(t)-e;return t.setUTCDate(t.getUTCDate()-n*7),t}function yi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?yi=function(t){return typeof t}:yi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(r)}function dv(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Xs(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function uv(r,i,t){return i&&Xs(r.prototype,i),t&&Xs(r,t),r}function pv(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&sa(r,i)}function sa(r,i){return sa=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},sa(r,i)}function fv(r){var i=_v();return function(){var e=lr(r),n;if(i){var a=lr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return vv(this,n)}}function vv(r,i){return i&&(yi(i)==="object"||typeof i=="function")?i:la(r)}function la(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function lr(r){return lr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},lr(r)}function Zs(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var mv=function(r){pv(t,r);var i=fv(t);function t(){var e;dv(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),Zs(la(e),"priority",100),Zs(la(e),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),e}return uv(t,[{key:"parse",value:function(n,a,o){switch(a){case"I":return Y(G.week,n);case"Io":return o.ordinalNumber(n,{unit:"week"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){return a>=1&&a<=53}},{key:"set",value:function(n,a,o){return ve(cv(n,o))}}]),t}(D);function bi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?bi=function(t){return typeof t}:bi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bi(r)}function gv(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Js(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function yv(r,i,t){return i&&Js(r.prototype,i),t&&Js(r,t),r}function bv(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&ha(r,i)}function ha(r,i){return ha=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},ha(r,i)}function Mv(r){var i=wv();return function(){var e=hr(r),n;if(i){var a=hr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return zv(this,n)}}function zv(r,i){return i&&(bi(i)==="object"||typeof i=="function")?i:Mi(r)}function Mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hr(r){return hr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},hr(r)}function fn(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Cv=[31,28,31,30,31,30,31,31,30,31,30,31],xv=[31,29,31,30,31,30,31,31,30,31,30,31],Pv=function(r){bv(t,r);var i=Mv(t);function t(){var e;gv(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),fn(Mi(e),"priority",90),fn(Mi(e),"subPriority",1),fn(Mi(e),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),e}return yv(t,[{key:"parse",value:function(n,a,o){switch(a){case"d":return Y(G.date,n);case"do":return o.ordinalNumber(n,{unit:"date"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){var o=n.getUTCFullYear(),s=Nl(o),l=n.getUTCMonth();return s?a>=1&&a<=xv[l]:a>=1&&a<=Cv[l]}},{key:"set",value:function(n,a,o){return n.setUTCDate(o),n.setUTCHours(0,0,0,0),n}}]),t}(D);function zi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?zi=function(t){return typeof t}:zi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zi(r)}function Ev(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function t0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Av(r,i,t){return i&&t0(r.prototype,i),t&&t0(r,t),r}function Sv(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&ca(r,i)}function ca(r,i){return ca=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},ca(r,i)}function Ov(r){var i=Iv();return function(){var e=cr(r),n;if(i){var a=cr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return Tv(this,n)}}function Tv(r,i){return i&&(zi(i)==="object"||typeof i=="function")?i:wi(r)}function wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Iv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cr(r){return cr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},cr(r)}function vn(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var kv=function(r){Sv(t,r);var i=Ov(t);function t(){var e;Ev(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),vn(wi(e),"priority",90),vn(wi(e),"subpriority",1),vn(wi(e),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),e}return Av(t,[{key:"parse",value:function(n,a,o){switch(a){case"D":case"DD":return Y(G.dayOfYear,n);case"Do":return o.ordinalNumber(n,{unit:"date"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){var o=n.getUTCFullYear(),s=Nl(o);return s?a>=1&&a<=366:a>=1&&a<=365}},{key:"set",value:function(n,a,o){return n.setUTCMonth(0,o),n.setUTCHours(0,0,0,0),n}}]),t}(D);function To(r,i,t){var e,n,a,o,s,l,h,c;X(2,arguments);var d=ge(),p=ht((e=(n=(a=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&a!==void 0?a:d.weekStartsOn)!==null&&n!==void 0?n:(h=d.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&e!==void 0?e:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=nt(r),g=ht(i),M=_.getUTCDay(),y=g%7,x=(y+7)%7,w=(x<p?7:0)+g-M;return _.setUTCDate(_.getUTCDate()+w),_}function Ci(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ci=function(t){return typeof t}:Ci=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(r)}function Dv(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function e0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Rv(r,i,t){return i&&e0(r.prototype,i),t&&e0(r,t),r}function $v(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&da(r,i)}function da(r,i){return da=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},da(r,i)}function Lv(r){var i=Nv();return function(){var e=dr(r),n;if(i){var a=dr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return Fv(this,n)}}function Fv(r,i){return i&&(Ci(i)==="object"||typeof i=="function")?i:ua(r)}function ua(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Nv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dr(r){return dr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},dr(r)}function i0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Bv=function(r){$v(t,r);var i=Lv(t);function t(){var e;Dv(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),i0(ua(e),"priority",90),i0(ua(e),"incompatibleTokens",["D","i","e","c","t","T"]),e}return Rv(t,[{key:"parse",value:function(n,a,o){switch(a){case"E":case"EE":case"EEE":return o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(n,{width:"wide",context:"formatting"})||o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=6}},{key:"set",value:function(n,a,o,s){return n=To(n,o,s),n.setUTCHours(0,0,0,0),n}}]),t}(D);function xi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xi=function(t){return typeof t}:xi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(r)}function Hv(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function r0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Vv(r,i,t){return i&&r0(r.prototype,i),t&&r0(r,t),r}function Wv(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&pa(r,i)}function pa(r,i){return pa=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},pa(r,i)}function Uv(r){var i=qv();return function(){var e=ur(r),n;if(i){var a=ur(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return Yv(this,n)}}function Yv(r,i){return i&&(xi(i)==="object"||typeof i=="function")?i:fa(r)}function fa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ur(r){return ur=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ur(r)}function n0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var jv=function(r){Wv(t,r);var i=Uv(t);function t(){var e;Hv(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),n0(fa(e),"priority",90),n0(fa(e),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),e}return Vv(t,[{key:"parse",value:function(n,a,o,s){var l=function(c){var d=Math.floor((c-1)/7)*7;return(c+s.weekStartsOn+6)%7+d};switch(a){case"e":case"ee":return K(q(a.length,n),l);case"eo":return K(o.ordinalNumber(n,{unit:"day"}),l);case"eee":return o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"});case"eeeee":return o.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(n,{width:"wide",context:"formatting"})||o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=6}},{key:"set",value:function(n,a,o,s){return n=To(n,o,s),n.setUTCHours(0,0,0,0),n}}]),t}(D);function Pi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pi=function(t){return typeof t}:Pi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(r)}function Gv(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function a0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Kv(r,i,t){return i&&a0(r.prototype,i),t&&a0(r,t),r}function Qv(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&va(r,i)}function va(r,i){return va=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},va(r,i)}function Xv(r){var i=Jv();return function(){var e=pr(r),n;if(i){var a=pr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return Zv(this,n)}}function Zv(r,i){return i&&(Pi(i)==="object"||typeof i=="function")?i:_a(r)}function _a(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Jv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pr(r){return pr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},pr(r)}function o0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var t3=function(r){Qv(t,r);var i=Xv(t);function t(){var e;Gv(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),o0(_a(e),"priority",90),o0(_a(e),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),e}return Kv(t,[{key:"parse",value:function(n,a,o,s){var l=function(c){var d=Math.floor((c-1)/7)*7;return(c+s.weekStartsOn+6)%7+d};switch(a){case"c":case"cc":return K(q(a.length,n),l);case"co":return K(o.ordinalNumber(n,{unit:"day"}),l);case"ccc":return o.day(n,{width:"abbreviated",context:"standalone"})||o.day(n,{width:"short",context:"standalone"})||o.day(n,{width:"narrow",context:"standalone"});case"ccccc":return o.day(n,{width:"narrow",context:"standalone"});case"cccccc":return o.day(n,{width:"short",context:"standalone"})||o.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(n,{width:"wide",context:"standalone"})||o.day(n,{width:"abbreviated",context:"standalone"})||o.day(n,{width:"short",context:"standalone"})||o.day(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=6}},{key:"set",value:function(n,a,o,s){return n=To(n,o,s),n.setUTCHours(0,0,0,0),n}}]),t}(D);function e3(r,i){X(2,arguments);var t=ht(i);t%7===0&&(t=t-7);var e=1,n=nt(r),a=n.getUTCDay(),o=t%7,s=(o+7)%7,l=(s<e?7:0)+t-a;return n.setUTCDate(n.getUTCDate()+l),n}function Ei(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ei=function(t){return typeof t}:Ei=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(r)}function i3(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function s0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function r3(r,i,t){return i&&s0(r.prototype,i),t&&s0(r,t),r}function n3(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&ma(r,i)}function ma(r,i){return ma=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},ma(r,i)}function a3(r){var i=s3();return function(){var e=fr(r),n;if(i){var a=fr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return o3(this,n)}}function o3(r,i){return i&&(Ei(i)==="object"||typeof i=="function")?i:ga(r)}function ga(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function s3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fr(r){return fr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},fr(r)}function l0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var l3=function(r){n3(t,r);var i=a3(t);function t(){var e;i3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),l0(ga(e),"priority",90),l0(ga(e),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),e}return r3(t,[{key:"parse",value:function(n,a,o){var s=function(h){return h===0?7:h};switch(a){case"i":case"ii":return q(a.length,n);case"io":return o.ordinalNumber(n,{unit:"day"});case"iii":return K(o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"}),s);case"iiiii":return K(o.day(n,{width:"narrow",context:"formatting"}),s);case"iiiiii":return K(o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"}),s);case"iiii":default:return K(o.day(n,{width:"wide",context:"formatting"})||o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"}),s)}}},{key:"validate",value:function(n,a){return a>=1&&a<=7}},{key:"set",value:function(n,a,o){return n=e3(n,o),n.setUTCHours(0,0,0,0),n}}]),t}(D);function Ai(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ai=function(t){return typeof t}:Ai=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(r)}function h3(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function h0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function c3(r,i,t){return i&&h0(r.prototype,i),t&&h0(r,t),r}function d3(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&ya(r,i)}function ya(r,i){return ya=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},ya(r,i)}function u3(r){var i=f3();return function(){var e=vr(r),n;if(i){var a=vr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return p3(this,n)}}function p3(r,i){return i&&(Ai(i)==="object"||typeof i=="function")?i:ba(r)}function ba(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function f3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vr(r){return vr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},vr(r)}function c0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var v3=function(r){d3(t,r);var i=u3(t);function t(){var e;h3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),c0(ba(e),"priority",80),c0(ba(e),"incompatibleTokens",["b","B","H","k","t","T"]),e}return c3(t,[{key:"parse",value:function(n,a,o){switch(a){case"a":case"aa":case"aaa":return o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(n,{width:"wide",context:"formatting"})||o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,a,o){return n.setUTCHours(Oo(o),0,0,0),n}}]),t}(D);function Si(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Si=function(t){return typeof t}:Si=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(r)}function _3(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function d0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function m3(r,i,t){return i&&d0(r.prototype,i),t&&d0(r,t),r}function g3(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Ma(r,i)}function Ma(r,i){return Ma=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Ma(r,i)}function y3(r){var i=M3();return function(){var e=_r(r),n;if(i){var a=_r(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return b3(this,n)}}function b3(r,i){return i&&(Si(i)==="object"||typeof i=="function")?i:za(r)}function za(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function M3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _r(r){return _r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_r(r)}function u0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var z3=function(r){g3(t,r);var i=y3(t);function t(){var e;_3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),u0(za(e),"priority",80),u0(za(e),"incompatibleTokens",["a","B","H","k","t","T"]),e}return m3(t,[{key:"parse",value:function(n,a,o){switch(a){case"b":case"bb":case"bbb":return o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(n,{width:"wide",context:"formatting"})||o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,a,o){return n.setUTCHours(Oo(o),0,0,0),n}}]),t}(D);function Oi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Oi=function(t){return typeof t}:Oi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(r)}function w3(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function p0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function C3(r,i,t){return i&&p0(r.prototype,i),t&&p0(r,t),r}function x3(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&wa(r,i)}function wa(r,i){return wa=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},wa(r,i)}function P3(r){var i=A3();return function(){var e=mr(r),n;if(i){var a=mr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return E3(this,n)}}function E3(r,i){return i&&(Oi(i)==="object"||typeof i=="function")?i:Ca(r)}function Ca(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function A3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mr(r){return mr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},mr(r)}function f0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var S3=function(r){x3(t,r);var i=P3(t);function t(){var e;w3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),f0(Ca(e),"priority",80),f0(Ca(e),"incompatibleTokens",["a","b","t","T"]),e}return C3(t,[{key:"parse",value:function(n,a,o){switch(a){case"B":case"BB":case"BBB":return o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(n,{width:"wide",context:"formatting"})||o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,a,o){return n.setUTCHours(Oo(o),0,0,0),n}}]),t}(D);function Ti(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ti=function(t){return typeof t}:Ti=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(r)}function O3(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function v0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function T3(r,i,t){return i&&v0(r.prototype,i),t&&v0(r,t),r}function I3(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&xa(r,i)}function xa(r,i){return xa=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},xa(r,i)}function k3(r){var i=R3();return function(){var e=gr(r),n;if(i){var a=gr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return D3(this,n)}}function D3(r,i){return i&&(Ti(i)==="object"||typeof i=="function")?i:Pa(r)}function Pa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function R3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gr(r){return gr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},gr(r)}function _0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var $3=function(r){I3(t,r);var i=k3(t);function t(){var e;O3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),_0(Pa(e),"priority",70),_0(Pa(e),"incompatibleTokens",["H","K","k","t","T"]),e}return T3(t,[{key:"parse",value:function(n,a,o){switch(a){case"h":return Y(G.hour12h,n);case"ho":return o.ordinalNumber(n,{unit:"hour"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){return a>=1&&a<=12}},{key:"set",value:function(n,a,o){var s=n.getUTCHours()>=12;return s&&o<12?n.setUTCHours(o+12,0,0,0):!s&&o===12?n.setUTCHours(0,0,0,0):n.setUTCHours(o,0,0,0),n}}]),t}(D);function Ii(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ii=function(t){return typeof t}:Ii=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ii(r)}function L3(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function m0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function F3(r,i,t){return i&&m0(r.prototype,i),t&&m0(r,t),r}function N3(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Ea(r,i)}function Ea(r,i){return Ea=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Ea(r,i)}function B3(r){var i=V3();return function(){var e=yr(r),n;if(i){var a=yr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return H3(this,n)}}function H3(r,i){return i&&(Ii(i)==="object"||typeof i=="function")?i:Aa(r)}function Aa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function V3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yr(r){return yr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},yr(r)}function g0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var W3=function(r){N3(t,r);var i=B3(t);function t(){var e;L3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),g0(Aa(e),"priority",70),g0(Aa(e),"incompatibleTokens",["a","b","h","K","k","t","T"]),e}return F3(t,[{key:"parse",value:function(n,a,o){switch(a){case"H":return Y(G.hour23h,n);case"Ho":return o.ordinalNumber(n,{unit:"hour"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){return a>=0&&a<=23}},{key:"set",value:function(n,a,o){return n.setUTCHours(o,0,0,0),n}}]),t}(D);function ki(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ki=function(t){return typeof t}:ki=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(r)}function U3(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function y0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Y3(r,i,t){return i&&y0(r.prototype,i),t&&y0(r,t),r}function q3(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Sa(r,i)}function Sa(r,i){return Sa=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Sa(r,i)}function j3(r){var i=K3();return function(){var e=br(r),n;if(i){var a=br(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return G3(this,n)}}function G3(r,i){return i&&(ki(i)==="object"||typeof i=="function")?i:Oa(r)}function Oa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function K3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function br(r){return br=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},br(r)}function b0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Q3=function(r){q3(t,r);var i=j3(t);function t(){var e;U3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),b0(Oa(e),"priority",70),b0(Oa(e),"incompatibleTokens",["h","H","k","t","T"]),e}return Y3(t,[{key:"parse",value:function(n,a,o){switch(a){case"K":return Y(G.hour11h,n);case"Ko":return o.ordinalNumber(n,{unit:"hour"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){return a>=0&&a<=11}},{key:"set",value:function(n,a,o){var s=n.getUTCHours()>=12;return s&&o<12?n.setUTCHours(o+12,0,0,0):n.setUTCHours(o,0,0,0),n}}]),t}(D);function Di(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Di=function(t){return typeof t}:Di=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(r)}function X3(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function M0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Z3(r,i,t){return i&&M0(r.prototype,i),t&&M0(r,t),r}function J3(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Ta(r,i)}function Ta(r,i){return Ta=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Ta(r,i)}function t_(r){var i=i_();return function(){var e=Mr(r),n;if(i){var a=Mr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return e_(this,n)}}function e_(r,i){return i&&(Di(i)==="object"||typeof i=="function")?i:Ia(r)}function Ia(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function i_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Mr(r){return Mr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Mr(r)}function z0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var r_=function(r){J3(t,r);var i=t_(t);function t(){var e;X3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),z0(Ia(e),"priority",70),z0(Ia(e),"incompatibleTokens",["a","b","h","H","K","t","T"]),e}return Z3(t,[{key:"parse",value:function(n,a,o){switch(a){case"k":return Y(G.hour24h,n);case"ko":return o.ordinalNumber(n,{unit:"hour"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){return a>=1&&a<=24}},{key:"set",value:function(n,a,o){var s=o<=24?o%24:o;return n.setUTCHours(s,0,0,0),n}}]),t}(D);function Ri(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ri=function(t){return typeof t}:Ri=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(r)}function n_(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function w0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function a_(r,i,t){return i&&w0(r.prototype,i),t&&w0(r,t),r}function o_(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&ka(r,i)}function ka(r,i){return ka=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},ka(r,i)}function s_(r){var i=h_();return function(){var e=zr(r),n;if(i){var a=zr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return l_(this,n)}}function l_(r,i){return i&&(Ri(i)==="object"||typeof i=="function")?i:Da(r)}function Da(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function h_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function zr(r){return zr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},zr(r)}function C0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var c_=function(r){o_(t,r);var i=s_(t);function t(){var e;n_(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),C0(Da(e),"priority",60),C0(Da(e),"incompatibleTokens",["t","T"]),e}return a_(t,[{key:"parse",value:function(n,a,o){switch(a){case"m":return Y(G.minute,n);case"mo":return o.ordinalNumber(n,{unit:"minute"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){return a>=0&&a<=59}},{key:"set",value:function(n,a,o){return n.setUTCMinutes(o,0,0),n}}]),t}(D);function $i(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$i=function(t){return typeof t}:$i=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$i(r)}function d_(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function x0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function u_(r,i,t){return i&&x0(r.prototype,i),t&&x0(r,t),r}function p_(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Ra(r,i)}function Ra(r,i){return Ra=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Ra(r,i)}function f_(r){var i=__();return function(){var e=wr(r),n;if(i){var a=wr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return v_(this,n)}}function v_(r,i){return i&&($i(i)==="object"||typeof i=="function")?i:$a(r)}function $a(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function __(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wr(r){return wr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},wr(r)}function P0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var m_=function(r){p_(t,r);var i=f_(t);function t(){var e;d_(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),P0($a(e),"priority",50),P0($a(e),"incompatibleTokens",["t","T"]),e}return u_(t,[{key:"parse",value:function(n,a,o){switch(a){case"s":return Y(G.second,n);case"so":return o.ordinalNumber(n,{unit:"second"});default:return q(a.length,n)}}},{key:"validate",value:function(n,a){return a>=0&&a<=59}},{key:"set",value:function(n,a,o){return n.setUTCSeconds(o,0),n}}]),t}(D);function Li(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Li=function(t){return typeof t}:Li=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Li(r)}function g_(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function E0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function y_(r,i,t){return i&&E0(r.prototype,i),t&&E0(r,t),r}function b_(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&La(r,i)}function La(r,i){return La=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},La(r,i)}function M_(r){var i=w_();return function(){var e=Cr(r),n;if(i){var a=Cr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return z_(this,n)}}function z_(r,i){return i&&(Li(i)==="object"||typeof i=="function")?i:Fa(r)}function Fa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function w_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Cr(r){return Cr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Cr(r)}function A0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var C_=function(r){b_(t,r);var i=M_(t);function t(){var e;g_(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),A0(Fa(e),"priority",30),A0(Fa(e),"incompatibleTokens",["t","T"]),e}return y_(t,[{key:"parse",value:function(n,a){var o=function(l){return Math.floor(l*Math.pow(10,-a.length+3))};return K(q(a.length,n),o)}},{key:"set",value:function(n,a,o){return n.setUTCMilliseconds(o),n}}]),t}(D);function Fi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fi=function(t){return typeof t}:Fi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fi(r)}function x_(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function S0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function P_(r,i,t){return i&&S0(r.prototype,i),t&&S0(r,t),r}function E_(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Na(r,i)}function Na(r,i){return Na=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Na(r,i)}function A_(r){var i=O_();return function(){var e=xr(r),n;if(i){var a=xr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return S_(this,n)}}function S_(r,i){return i&&(Fi(i)==="object"||typeof i=="function")?i:Ba(r)}function Ba(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function O_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xr(r){return xr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},xr(r)}function O0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var T_=function(r){E_(t,r);var i=A_(t);function t(){var e;x_(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),O0(Ba(e),"priority",10),O0(Ba(e),"incompatibleTokens",["t","T","x"]),e}return P_(t,[{key:"parse",value:function(n,a){switch(a){case"X":return Mt(bt.basicOptionalMinutes,n);case"XX":return Mt(bt.basic,n);case"XXXX":return Mt(bt.basicOptionalSeconds,n);case"XXXXX":return Mt(bt.extendedOptionalSeconds,n);case"XXX":default:return Mt(bt.extended,n)}}},{key:"set",value:function(n,a,o){return a.timestampIsSet?n:new Date(n.getTime()-o)}}]),t}(D);function Ni(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ni=function(t){return typeof t}:Ni=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(r)}function I_(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function T0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function k_(r,i,t){return i&&T0(r.prototype,i),t&&T0(r,t),r}function D_(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Ha(r,i)}function Ha(r,i){return Ha=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Ha(r,i)}function R_(r){var i=L_();return function(){var e=Pr(r),n;if(i){var a=Pr(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return $_(this,n)}}function $_(r,i){return i&&(Ni(i)==="object"||typeof i=="function")?i:Va(r)}function Va(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function L_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pr(r){return Pr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Pr(r)}function I0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var F_=function(r){D_(t,r);var i=R_(t);function t(){var e;I_(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),I0(Va(e),"priority",10),I0(Va(e),"incompatibleTokens",["t","T","X"]),e}return k_(t,[{key:"parse",value:function(n,a){switch(a){case"x":return Mt(bt.basicOptionalMinutes,n);case"xx":return Mt(bt.basic,n);case"xxxx":return Mt(bt.basicOptionalSeconds,n);case"xxxxx":return Mt(bt.extendedOptionalSeconds,n);case"xxx":default:return Mt(bt.extended,n)}}},{key:"set",value:function(n,a,o){return a.timestampIsSet?n:new Date(n.getTime()-o)}}]),t}(D);function Bi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Bi=function(t){return typeof t}:Bi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bi(r)}function N_(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function k0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function B_(r,i,t){return i&&k0(r.prototype,i),t&&k0(r,t),r}function H_(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Wa(r,i)}function Wa(r,i){return Wa=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Wa(r,i)}function V_(r){var i=U_();return function(){var e=Er(r),n;if(i){var a=Er(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return W_(this,n)}}function W_(r,i){return i&&(Bi(i)==="object"||typeof i=="function")?i:Ua(r)}function Ua(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function U_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Er(r){return Er=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Er(r)}function D0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Y_=function(r){H_(t,r);var i=V_(t);function t(){var e;N_(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),D0(Ua(e),"priority",40),D0(Ua(e),"incompatibleTokens","*"),e}return B_(t,[{key:"parse",value:function(n){return Ll(n)}},{key:"set",value:function(n,a,o){return[new Date(o*1e3),{timestampIsSet:!0}]}}]),t}(D);function Hi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Hi=function(t){return typeof t}:Hi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(r)}function q_(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function R0(r,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function j_(r,i,t){return i&&R0(r.prototype,i),t&&R0(r,t),r}function G_(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&Ya(r,i)}function Ya(r,i){return Ya=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Ya(r,i)}function K_(r){var i=X_();return function(){var e=Ar(r),n;if(i){var a=Ar(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return Q_(this,n)}}function Q_(r,i){return i&&(Hi(i)==="object"||typeof i=="function")?i:qa(r)}function qa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function X_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ar(r){return Ar=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Ar(r)}function $0(r,i,t){return i in r?Object.defineProperty(r,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[i]=t,r}var Z_=function(r){G_(t,r);var i=K_(t);function t(){var e;q_(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=i.call.apply(i,[this].concat(a)),$0(qa(e),"priority",20),$0(qa(e),"incompatibleTokens","*"),e}return j_(t,[{key:"parse",value:function(n){return Ll(n)}},{key:"set",value:function(n,a,o){return[new Date(o),{timestampIsSet:!0}]}}]),t}(D),J_={G:new K2,y:new of,Y:new pf,R:new bf,u:new Ef,Q:new Df,q:new Hf,M:new Gf,L:new ev,w:new hv,I:new mv,d:new Pv,D:new kv,E:new Bv,e:new jv,c:new t3,i:new l3,a:new v3,b:new z3,B:new S3,h:new $3,H:new W3,K:new Q3,k:new r_,m:new c_,s:new m_,S:new C_,X:new T_,x:new F_,t:new Y_,T:new Z_};function Vi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Vi=function(t){return typeof t}:Vi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vi(r)}function L0(r,i){var t;if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(t=t4(r))||i&&r&&typeof r.length=="number"){t&&(r=t);var e=0,n=function(){};return{s:n,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(h){throw h},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,s;return{s:function(){t=r[Symbol.iterator]()},n:function(){var h=t.next();return a=h.done,h},e:function(h){o=!0,s=h},f:function(){try{!a&&t.return!=null&&t.return()}finally{if(o)throw s}}}}function t4(r,i){if(r){if(typeof r=="string")return F0(r,i);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F0(r,i)}}function F0(r,i){(i==null||i>r.length)&&(i=r.length);for(var t=0,e=new Array(i);t<i;t++)e[t]=r[t];return e}var e4=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,i4=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,r4=/^'([^]*?)'?$/,n4=/''/g,a4=/\S/,o4=/[a-zA-Z]/;function s4(r,i,t,e){var n,a,o,s,l,h,c,d,p,_,g,M,y,x,w,k,W,F;X(3,arguments);var H=String(r),tt=String(i),dt=ge(),vt=(n=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:dt.locale)!==null&&n!==void 0?n:kl;if(!vt.match)throw new RangeError("locale must contain match property");var _t=ht((o=(s=(l=(h=e==null?void 0:e.firstWeekContainsDate)!==null&&h!==void 0?h:e==null||(c=e.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&l!==void 0?l:dt.firstWeekContainsDate)!==null&&s!==void 0?s:(p=dt.locale)===null||p===void 0||(_=p.options)===null||_===void 0?void 0:_.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(_t>=1&&_t<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var wt=ht((g=(M=(y=(x=e==null?void 0:e.weekStartsOn)!==null&&x!==void 0?x:e==null||(w=e.locale)===null||w===void 0||(k=w.options)===null||k===void 0?void 0:k.weekStartsOn)!==null&&y!==void 0?y:dt.weekStartsOn)!==null&&M!==void 0?M:(W=dt.locale)===null||W===void 0||(F=W.options)===null||F===void 0?void 0:F.weekStartsOn)!==null&&g!==void 0?g:0);if(!(wt>=0&&wt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(tt==="")return H===""?nt(t):new Date(NaN);var gt={firstWeekContainsDate:_t,weekStartsOn:wt,locale:vt},Tt=[new B2],It=tt.match(i4).map(function(B){var S=B[0];if(S in Ln){var Z=Ln[S];return Z(B,vt.formatLong)}return B}).join("").match(e4),Q=[],it=L0(It),u;try{var v=function(){var S=u.value;!(e!=null&&e.useAdditionalWeekYearTokens)&&Il(S)&&Ki(S,tt,r),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Tl(S)&&Ki(S,tt,r);var Z=S[0],yt=J_[Z];if(yt){var Qe=yt.incompatibleTokens;if(Array.isArray(Qe)){var Xe=Q.find(function(Ro){return Qe.includes(Ro.token)||Ro.token===Z});if(Xe)throw new RangeError("The format string mustn't contain `".concat(Xe.fullToken,"` and `").concat(S,"` at the same time"))}else if(yt.incompatibleTokens==="*"&&Q.length>0)throw new RangeError("The format string mustn't contain `".concat(S,"` and any other token at the same time"));Q.push({token:Z,fullToken:S});var Wt=yt.run(H,S,vt.match,gt);if(!Wt)return{v:new Date(NaN)};Tt.push(Wt.setter),H=Wt.rest}else{if(Z.match(o4))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Z+"`");if(S==="''"?S="'":Z==="'"&&(S=l4(S)),H.indexOf(S)===0)H=H.slice(S.length);else return{v:new Date(NaN)}}};for(it.s();!(u=it.n()).done;){var f=v();if(Vi(f)==="object")return f.v}}catch(B){it.e(B)}finally{it.f()}if(H.length>0&&a4.test(H))return new Date(NaN);var m=Tt.map(function(B){return B.priority}).sort(function(B,S){return S-B}).filter(function(B,S,Z){return Z.indexOf(B)===S}).map(function(B){return Tt.filter(function(S){return S.priority===B}).sort(function(S,Z){return Z.subPriority-S.subPriority})}).map(function(B){return B[0]}),b=nt(t);if(isNaN(b.getTime()))return new Date(NaN);var E=xl(b,Ol(b)),P={},U=L0(m),N;try{for(U.s();!(N=U.n()).done;){var et=N.value;if(!et.validate(E,gt))return new Date(NaN);var J=et.set(E,P,gt);Array.isArray(J)?(E=J[0],R2(P,J[1])):E=J}}catch(B){U.e(B)}finally{U.f()}return E}function l4(r){return r.match(r4)[1].replace(n4,"'")}(function(){const r=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Date Picker")};window.Vaadin.Flow.datepickerConnector={initLazy:i=>r(function(t){if(t.$connector)return;t.$connector={};const e=function(o){try{new Date().toLocaleDateString(o)}catch{return console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd"}let l=new Date(Date.UTC(1234,4,6)).toLocaleDateString(o,{timeZone:"UTC"});return l=l.replace(/([a-zA-Z]+)/g,"'$1'").replace("06","dd").replace("6","d").replace("05","MM").replace("5","M").replace("1234","yyyy"),l.includes("d")&&l.includes("M")&&l.includes("y")?l:(console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd")},n=r(function(o){if(!o||o.length===0)throw new Error("Array of custom date formats is null or empty");function s(_){if(_.includes("yyyy")&&!_.includes("yyyyy"))return _.replace("yyyy","yy");if(_.includes("YYYY")&&!_.includes("YYYYY"))return _.replace("YYYY","YY")}function l(_){return _.includes("y")?!_.includes("yyy"):_.includes("Y")?!_.includes("YYY"):!1}function h(_){if(t.$connector._lastParseStatus==="error")return;if(t.$connector._lastParseStatus==="successful"){t.$connector._lastParsedDate.day===_.getDate()&&t.$connector._lastParsedDate.month===_.getMonth()&&t.$connector._lastParsedDate.year%100===_.getFullYear()%100&&_.setFullYear(t.$connector._lastParsedDate.year);return}const g=jt(t.value);$n(g)&&g.getDate()===_.getDate()&&g.getMonth()===_.getMonth()&&g.getFullYear()%100===_.getFullYear()%100&&_.setFullYear(g.getFullYear())}function c(_){const g=o[0],M=jt(`${_.year}-${_.month+1}-${_.day}`);return k2(M,g)}function d(_,g,M){const y=s4(_,g,M);if($n(y))return l(g)&&h(y),{day:y.getDate(),month:y.getMonth(),year:y.getFullYear()}}function p(_){const g=a();for(let M of o){if(!l(M)){const w=d(_,s(M),g);if(w)return t.$connector._lastParseStatus="successful",t.$connector._lastParsedDate=w,w}const x=d(_,M,g);if(x)return t.$connector._lastParseStatus="successful",t.$connector._lastParsedDate=x,x}return t.$connector._lastParseStatus="error",!1}return{formatDate:c,parseDate:p}});function a(){const{referenceDate:o}=t.i18n;return o?new Date(o.year,o.month,o.day):new Date}t.$connector.updateI18n=r(function(o,s){const l=s&&s.dateFormats&&s.dateFormats.length>0;s&&s.referenceDate&&(s.referenceDate=xo(new Date(s.referenceDate)));const h=l?s.dateFormats:[e(o)],c=n(h);t.i18n=Object.assign({},t.i18n,s,c)}),t.addEventListener("opened-changed",()=>t.$connector._lastParseStatus=void 0)})(i)}})();const h4=z`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;C("vaadin-vertical-layout",h4,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class c4 extends ft(V(O)){static get template(){return R`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}A(c4);const d4=z`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;C("vaadin-tooltip-overlay",[Dr,d4],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const u4=r=>class extends Vr(qe(r)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const t=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(e=>{this.style.setProperty(`--vaadin-tooltip-offset-${e}`,t.getPropertyValue(`--vaadin-tooltip-offset-${e}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),n=t.width/2-e.width/2;if(this.style.left){const a=e.left+n;a>0&&(this.style.left=`${a}px`)}if(this.style.right){const a=parseFloat(this.style.right)+n;a>0&&(this.style.right=`${a}px`)}}if(this.position==="start"||this.position==="end"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),n=t.height/2-e.height/2;this.style.top=`${e.top+n}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const p4=z`
  :host {
    z-index: 1100;
  }

  [part='overlay'] {
    max-width: 40ch;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-tooltip-overlay",[je,p4],{moduleId:"vaadin-tooltip-overlay-styles"});class f4 extends u4(ot(V(O))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return R`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}}A(f4);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const le=500;let Bl=le,Hl=le,Vl=le;const Ce=new Set;let xe=!1,Pe=null,Ee=null;class v4{constructor(i){this.host=i}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const i=this.host;return i.focusDelay!=null&&i.focusDelay>0?i.focusDelay:Bl}get hoverDelay(){const i=this.host;return i.hoverDelay!=null&&i.hoverDelay>0?i.hoverDelay:Hl}get hideDelay(){const i=this.host;return i.hideDelay!=null&&i.hideDelay>0?i.hideDelay:Vl}get isClosing(){return Ce.has(this.host)}open(i={immediate:!1}){const{immediate:t,hover:e,focus:n}=i,a=e&&this.hoverDelay>0,o=n&&this.focusDelay>0;!t&&(a||o)&&!this.__closeTimeout?this.__warmupTooltip(o):this.__showTooltip()}close(i){!i&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),xe&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(i){this.host[this.openedProp]=i}__flushClosingTooltips(){Ce.forEach(i=>{i._stateController.close(!0),Ce.delete(i)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),xe=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(i){this._isOpened()||(xe?this.__showTooltip():this.__scheduleWarmUp(i))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){Ee&&(clearTimeout(Ee),Ee=null)}__abortWarmUp(){Pe&&(clearTimeout(Pe),Pe=null)}__scheduleClose(){this._isOpened()&&(Ce.add(this.host),this.__closeTimeout=setTimeout(()=>{Ce.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){Ee=setTimeout(()=>{Ee=null,xe=!1},this.hideDelay)}__scheduleWarmUp(i){const t=i?this.focusDelay:this.hoverDelay;Pe=setTimeout(()=>{Pe=null,xe=!0,this.__showTooltip()},t)}}const _4=r=>class extends jr(r){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},position:{type:String},shouldShow:{type:Object,value:()=>(t,e)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_position:{type:String,value:"bottom"},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(t){Bl=t!=null&&t>=0?t:le}static setDefaultHideDelay(t){Vl=t!=null&&t>=0?t:le}static setDefaultHoverDelay(t){Hl=t!=null&&t>=0?t:le}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Wr()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(t=>{t.forEach(e=>this.__onTargetVisibilityChange(e.isIntersecting))},{threshold:0}),this._stateController=new v4(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new Pt(this,"sr-label","div",{initializer:t=>{t.id=this._uniqueId,t.setAttribute("role","tooltip"),this._srLabel=t}}),this.addController(this._srLabelController)}__computeHorizontalAlign(t){return["top-end","bottom-end","start-top","start","start-bottom"].includes(t)?"end":"start"}__computeNoHorizontalOverlap(t){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(t)}__computeNoVerticalOverlap(t){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(t)}__computeVerticalAlign(t){return["top-start","top-end","top","start-bottom","end-bottom"].includes(t)?"bottom":"top"}__computeOpened(t,e,n,a){return a&&(t?e:n)}__computePosition(t,e){return t||e}__autoOpenedChanged(t,e){t?document.addEventListener("keydown",this.__onKeyDown,!0):e&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(t){t&&(this.__setTargetByIdDebouncer=I.debounce(this.__setTargetByIdDebouncer,zt,()=>this.__setTargetById(t)))}__setTargetById(t){if(!this.isConnected)return;const e=this.getRootNode().getElementById(t);e?this.target=e:console.warn(`No element with id="${t}" found to show tooltip.`)}__targetChanged(t,e){e&&(e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e)),t&&(t.addEventListener("mouseenter",this.__onMouseEnter),t.addEventListener("mouseleave",this.__onMouseLeave),t.addEventListener("focusin",this.__onFocusin),t.addEventListener("focusout",this.__onFocusout),t.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(t)}))}__onFocusin(t){this.manual||Fr()&&(this.target.contains(t.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(t){this.manual||this.target.contains(t.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(t){t.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(t){t.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(t){const e=this.__isTargetHidden;if(this.__isTargetHidden=!t,e&&t&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!t&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(t,e){this._overlayElement&&(t||e)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(t){t.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=t.textContent}__computeAriaTarget(t,e){const n=o=>o&&o.nodeType===Node.ELEMENT_NODE;return(Array.isArray(t)?t.some(n):t)?t:e}__effectiveAriaTargetChanged(t,e){e&&[e].flat().forEach(n=>{Hr(n,"aria-describedby",this._uniqueId)}),t&&[t].flat().forEach(n=>{Ge(n,"aria-describedby",this._uniqueId)})}__generatorChanged(t,e,n){t&&((e!==this.__oldTextGenerator||n!==this.__oldContext)&&t.requestContentUpdate(),this.__oldTextGenerator=e,this.__oldContext=n)}__updateSrLabelText(t,e){t&&(t.textContent=e)}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class m4 extends _4(oo(ft(ct(O)))){static get is(){return"vaadin-tooltip"}static get template(){return R`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}}A(m4);C("vaadin-icon",z`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ii=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(i=>{i.target.resizables?i.target.resizables.forEach(t=>{t._onResize(i.contentRect)}):i.target._onResize(i.contentRect)})})}),Io=j(r=>class extends r{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),ii.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,ii.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),ii.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const e=t.resizables;e&&(e.delete(this),e.size===0&&ii.unobserve(t)),this.__parent=null}}_onResize(t){}});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function g4(){const r=document.createElement("style");r.textContent=`
    .vaadin-icon-test-element {
      container-type: size;
      height: 2px;
      visibility: hidden;
      position: fixed;
    }

    .vaadin-icon-test-element::before {
      content: '';
      display: block;
      height: 100cqh;
    `;const i=document.createElement("div");i.classList.add("vaadin-icon-test-element"),document.body.append(r,i);const{height:t}=getComputedStyle(i,"::before");return r.remove(),i.remove(),t==="2px"}function y4(){return CSS.supports("container-type: inline-size")?lo?!g4():!1:!0}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wl=y4();Wl&&C("vaadin-icon",z`
      :host::after,
      :host::before {
        font-size: var(--_vaadin-font-icon-size);
      }
    `,"vaadin-icon-font-size-mixin-styles");const b4=j(r=>Wl?class extends Io(r){static get observers(){return["__iconFontSizeMixinfontChanged(iconClass, char, ligature)"]}ready(){super.ready(),this.__updateFontIconSize()}__iconFontSizeMixinfontChanged(i,t,e){this.__updateFontIconSize()}_onResize(){this.__updateFontIconSize()}__updateFontIconSize(){if(this.char||this.iconClass||this.ligature){const{paddingTop:i,paddingBottom:t,height:e}=getComputedStyle(this),n=parseFloat(e)-parseFloat(i)-parseFloat(t);this.style.setProperty("--_vaadin-font-icon-size",`${n}px`)}}}:r);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _n=new Map;class $e extends V(ft(ct(Q1(b4(O))))){static get template(){return R`
      <style>
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          fill: currentColor;
          container-type: size;
        }

        :host::after,
        :host::before {
          line-height: 1;
          font-size: 100cqh;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
        }

        :host([hidden]) {
          display: none !important;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        :host(:is([icon-class], [font-icon-content])) svg {
          display: none;
        }

        :host([font-icon-content])::before {
          content: attr(font-icon-content);
        }
      </style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="[[__computePAR(__defaultPAR, __preserveAspectRatio)]]"
        fill$="[[__fill]]"
        stroke$="[[__stroke]]"
        stroke-width$="[[__strokeWidth]]"
        stroke-linecap$="[[__strokeLinecap]]"
        stroke-linejoin$="[[__strokeLinejoin]]"
        aria-hidden="true"
      >
        <g id="svg-group"></g>
        <g id="use-group" visibility$="[[__computeVisibility(__useRef, svg)]]">
          <use href$="[[__useRef]]" />
        </g>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-icon"}static get properties(){return{icon:{type:String,reflectToAttribute:!0,observer:"__iconChanged"},svg:{type:Object},src:{type:String},symbol:{type:String},iconClass:{type:String,reflectToAttribute:!0},char:{type:String},ligature:{type:String},fontFamily:{type:String,observer:"__fontFamilyChanged"},size:{type:Number,value:24},__defaultPAR:{type:String,value:"xMidYMid meet"},__preserveAspectRatio:String,__useRef:Object,__svgElement:String,__viewBox:String,__fill:String,__stroke:String,__strokeWidth:String,__strokeLinecap:String,__strokeLinejoin:String}}static get observers(){return["__svgChanged(svg, __svgElement)","__fontChanged(iconClass, char, ligature)","__srcChanged(src, symbol)"]}static get observedAttributes(){return[...super.observedAttributes,"class"]}constructor(){super(),this.__fetch=fetch.bind(window)}get slotStyles(){return[`
        ${this.localName}[icon-class] {
          display: inline-flex;
          vertical-align: middle;
          font-size: inherit;
        }
      `]}get __iconClasses(){return this.iconClass?this.iconClass.split(" "):[]}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("#svg-group"),this._tooltipController=new Vt(this),this.addController(this._tooltipController)}connectedCallback(){super.connectedCallback(),se.attachedIcons.add(this)}disconnectedCallback(){super.disconnectedCallback(),se.attachedIcons.delete(this)}_applyIcon(){const{preserveAspectRatio:i,svg:t,size:e,viewBox:n}=se.getIconSvg(this.icon);n&&(this.__viewBox=n),i&&(this.__preserveAspectRatio=i),e&&e!==this.size&&(this.size=e),this.svg=t}__iconChanged(i){i?this._applyIcon():this.svg=pl(null)}async __srcChanged(i,t){if(!i){this.svg=null;return}if(this.icon="",!i.startsWith("data:")&&(t||i.includes("#"))){const[e,n]=i.split("#");this.__useRef=`${e}#${t||n}`}else try{_n.has(i)||_n.set(i,this.__fetch(i,{mode:"cors"}).then(o=>{if(!o.ok)throw new Error("Error loading icon");return o.text()}));const e=await _n.get(i);$e.__domParser||($e.__domParser=new DOMParser);const a=$e.__domParser.parseFromString(e,"text/html").querySelector("svg");if(!a)throw new Error(`SVG element not found on path: ${i}`);this.svg=op(a.innerHTML),t&&(this.__useRef=`#${t}`),this.__viewBox=a.getAttribute("viewBox"),this.__fill=a.getAttribute("fill"),this.__stroke=a.getAttribute("stroke"),this.__strokeWidth=a.getAttribute("stroke-width"),this.__strokeLinecap=a.getAttribute("stroke-linecap"),this.__strokeLinejoin=a.getAttribute("stroke-linejoin")}catch(e){console.error(e),this.svg=null}}__svgChanged(i,t){t&&ap(i,t)}__computePAR(i,t){return t||i}__computeVisibility(i){return i?"visible":"hidden"}__computeViewBox(i,t){return t||`0 0 ${i} ${i}`}__fontChanged(i,t,e){this.classList.remove(...this.__addedIconClasses||[]),i&&(this.__addedIconClasses=[...this.__iconClasses],this.classList.add(...this.__addedIconClasses)),t?this.setAttribute("font-icon-content",t.length>1?String.fromCodePoint(parseInt(t,16)):t):e?this.setAttribute("font-icon-content",e):this.removeAttribute("font-icon-content"),(i||t||e)&&!this.icon&&(this.icon="")}attributeChangedCallback(i,t,e){super.attributeChangedCallback(i,t,e),i==="class"&&this.__iconClasses.some(n=>!this.classList.contains(n))&&this.classList.add(...this.__iconClasses)}__fontFamilyChanged(i){this.style.fontFamily=`'${i}'`}}A($e);const Ul=z`
  /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
  :host(:hover) {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  :host([role='menuitem'][menu-item-checked]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([aria-haspopup='true'])::after {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-xs);
    content: var(--lumo-icons-angle-right);
    color: var(--lumo-tertiary-text-color);
  }

  :host(:not([dir='rtl'])[aria-haspopup='true'])::after {
    margin-right: calc(var(--lumo-space-m) * -1);
    padding-left: var(--lumo-space-m);
  }

  :host([expanded]) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl'][aria-haspopup='true'])::after {
    content: var(--lumo-icons-angle-left);
    margin-left: calc(var(--lumo-space-m) * -1);
    padding-right: var(--lumo-space-m);
  }
`;C("vaadin-context-menu-item",[kr,Ul],{moduleId:"lumo-context-menu-item"});const ko=z`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;C("vaadin-list-box",ko,{moduleId:"lumo-list-box"});const Yl=z`
  :host {
    --_lumo-list-box-item-selected-icon-display: block;
  }

  /* Normal item */
  [part='items'] ::slotted([role='menuitem']) {
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    cursor: default;
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    padding-left: calc(var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
  }

  /* Hovered item */
  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  [part='items'] ::slotted([role='menuitem']:hover:not([disabled])),
  [part='items'] ::slotted([role='menuitem'][expanded]:not([disabled])) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='items'] ::slotted([role='menuitem']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-border-radius-m) / 4);
  }

  /* Focused item */
  @media (pointer: coarse) {
    [part='items'] ::slotted([role='menuitem']:hover:not([expanded]):not([disabled])) {
      background-color: transparent;
    }
  }
`;C("vaadin-context-menu-list-box",[ko,Yl],{moduleId:"lumo-context-menu-list-box"});const ql=z`
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;C("vaadin-context-menu-overlay",[Rr,ql],{moduleId:"lumo-context-menu-overlay"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Qr({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(r){this.info.sourceEvent=r;const i=r.composedPath();this.info.sourceEvent.__composedPath=i},touchstart(r){this._setSourceEvent(r),this.info.touchStartCoords={x:r.changedTouches[0].clientX,y:r.changedTouches[0].clientY};const i=r.composedPath()[0]||r.target;this._timerId=setTimeout(()=>{const t=r.changedTouches[0];r.shiftKey||(We&&(this._fired=!0,this.fire(i,t.clientX,t.clientY)),fe("tap"))},500)},touchmove(r){const t=this.info.touchStartCoords;(Math.abs(t.x-r.changedTouches[0].clientX)>15||Math.abs(t.y-r.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(r){this._fired&&r.preventDefault(),this._cancelTimer()},contextmenu(r){r.shiftKey||(this._setSourceEvent(r),this.fire(r.target,r.clientX,r.clientY),fe("tap"))},fire(r,i,t){const e=this.info.sourceEvent,n=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});n.detail={x:i,y:t,sourceEvent:e},r.dispatchEvent(n),n.defaultPrevented&&e&&e.preventDefault&&e.preventDefault()}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jl=r=>class extends Co(_e(r)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");t!==null&&(this.value=t)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(t){return!this.disabled&&!(t.type==="keydown"&&t.defaultPrevented)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){super._disabledChanged(t),t&&(this.selected=!1,this.blur())}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class M4 extends jl(V(ot(O))){static get is(){return"vaadin-context-menu-item"}static get template(){return R`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}A(M4);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ja(r,i){const{scrollLeft:t}=r;return i!=="rtl"?t:r.scrollWidth-r.clientWidth+t}function z4(r,i,t){i!=="rtl"?r.scrollLeft=t:r.scrollLeft=r.clientWidth-r.scrollWidth+t}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gl=r=>class extends me(r){get focused(){return(this._getItems()||[]).find(Nr)}get _vertical(){return!0}focus(){const t=this._getItems();if(Array.isArray(t)){const e=this._getAvailableIndex(t,0,null,n=>!de(n));e>=0&&t[e].focus()}}_getItems(){return Array.from(this.children)}_onKeyDown(t){if(super._onKeyDown(t),t.metaKey||t.ctrlKey)return;const{key:e}=t,n=this._getItems()||[],a=n.indexOf(this.focused);let o,s;const h=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(e)?(s=-h,o=a-h):this.__isNextKey(e)?(s=h,o=a+h):e==="Home"?(s=1,o=0):e==="End"&&(s=-1,o=n.length-1),o=this._getAvailableIndex(n,o,s,c=>!de(c)),o>=0&&(t.preventDefault(),this._focus(o,!0))}__isPrevKey(t){return this._vertical?t==="ArrowUp":t==="ArrowLeft"}__isNextKey(t){return this._vertical?t==="ArrowDown":t==="ArrowRight"}_focus(t,e=!1){const n=this._getItems();this._focusItem(n[t],e)}_focusItem(t){t&&(t.focus(),t.setAttribute("focus-ring",""))}_getAvailableIndex(t,e,n,a){const o=t.length;let s=e;for(let l=0;typeof s=="number"&&l<o;l+=1,s+=n||1){s<0?s=o-1:s>=o&&(s=0);const h=t[s];if(!h.hasAttribute("disabled")&&this.__isMatchingItem(h,a))return s}return-1}__isMatchingItem(t,e){return typeof e=="function"?e(t):!0}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kl=r=>class extends Gl(r){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const t=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(t)}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e));const t=this.shadowRoot.querySelector("slot:not([name])");this._observer=new K1(t,()=>{this._setItems(this._filterItems(V1(this)))})}_getItems(){return this.items}_enhanceItems(t,e,n,a){if(!a&&t){this.setAttribute("aria-orientation",e||"vertical"),t.forEach(s=>{e?s.setAttribute("orientation",e):s.removeAttribute("orientation")}),this._setFocusable(n||0);const o=t[n];t.forEach(s=>{s.selected=s===o}),o&&!o.disabled&&this._scrollToItem(n)}}_filterItems(t){return t.filter(e=>e._hasVaadinItemMixin)}_onClick(t){if(t.metaKey||t.shiftKey||t.ctrlKey||t.defaultPrevented)return;const e=this._filterItems(t.composedPath())[0];let n;e&&!e.disabled&&(n=this.items.indexOf(e))>=0&&(this.selected=n)}_searchKey(t,e){this._searchReset=I.debounce(this._searchReset,pt.after(500),()=>{this._searchBuf=""}),this._searchBuf+=e.toLowerCase(),this.items.some(a=>this.__isMatchingKey(a))||(this._searchBuf=e.toLowerCase());const n=this._searchBuf.length===1?t+1:t;return this._getAvailableIndex(this.items,n,1,a=>this.__isMatchingKey(a)&&getComputedStyle(a).display!=="none")}__isMatchingKey(t){return t.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(t){if(t.metaKey||t.ctrlKey)return;const e=t.key,n=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(e)&&e.length===1){const a=this._searchKey(n,e);a>=0&&this._focus(a);return}super._onKeyDown(t)}_isItemHidden(t){return getComputedStyle(t).display==="none"}_setFocusable(t){t=this._getAvailableIndex(this.items,t,1);const e=this.items[t];this.items.forEach(n=>{n.tabIndex=n===e?0:-1})}_focus(t){this.items.forEach((e,n)=>{e.focused=n===t}),this._setFocusable(t),this._scrollToItem(t),super._focus(t)}_scrollToItem(t){const e=this.items[t];if(!e)return;const n=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],a=this._scrollerElement.getBoundingClientRect(),o=(this.items[t+1]||e).getBoundingClientRect(),s=(this.items[t-1]||e).getBoundingClientRect();let l=0;!this._isRTL&&o[n[1]]>=a[n[1]]||this._isRTL&&o[n[1]]<=a[n[1]]?l=o[n[1]]-a[n[1]]:(!this._isRTL&&s[n[0]]<=a[n[0]]||this._isRTL&&s[n[0]]>=a[n[0]])&&(l=s[n[0]]-a[n[0]]),this._scroll(l)}_scroll(t){if(this._vertical)this._scrollerElement.scrollTop+=t;else{const e=this.getAttribute("dir")||"ltr",n=ja(this._scrollerElement,e)+t;z4(this._scrollerElement,e,n)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class w4 extends Kl(V(ot(ct(O)))){static get is(){return"vaadin-context-menu-list-box"}static get template(){return R`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}A(w4);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ql=r=>class extends H1(Vr(r)){static get properties(){return{parentOverlay:{type:Object,readOnly:!0},_theme:{type:String,readOnly:!0,sync:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.restoreFocusOnClose=!0,this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&t.composedPath()[0]===this.$.overlay&&[38,40].indexOf(t.keyCode)>-1){const e=this.getFirstChild();e&&Array.isArray(e.items)&&e.items.length&&(t.preventDefault(),t.keyCode===38?e.items[e.items.length-1].focus():e.focus())}})}getFirstChild(){return this.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const t=this.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect();let n=t.bottom-e.height;const a=this.parentOverlay;if(a&&a.hasAttribute("bottom-aligned")){const o=getComputedStyle(a);n=n-parseFloat(o.bottom)-parseFloat(o.height)}return{xMax:t.right-e.width,xMin:t.left+e.width,yMax:n}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const t=this.$.content,e=getComputedStyle(t);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(e.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(e.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(e.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(e.paddingTop)}px`}}_shouldRestoreFocus(){return this.parentOverlay?!1:super._shouldRestoreFocus()}_deepContains(t){let e=co(this.localName,t);for(;e;){if(e===this)return!0;e=e.parentOverlay}return!1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xl=z`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host([right-aligned]),
  :host([end-aligned]) {
    align-items: flex-end;
  }

  :host([bottom-aligned]) {
    justify-content: flex-end;
  }

  [part='overlay'] {
    background-color: #fff;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-context-menu-overlay",[je,Xl],{moduleId:"vaadin-context-menu-overlay-styles"});class C4 extends Ql(qe(ot(V(O)))){static get is(){return"vaadin-context-menu-overlay"}static get template(){return R`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}A(C4);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const x4=r=>class extends r{static get properties(){return{items:{type:Array,sync:!0}}}constructor(){super(),this.__itemsOutsideClickListener=t=>{t.composedPath().some(e=>e.localName===`${this._tagNamePrefix}-overlay`)||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>{this.items&&this.close()})}get _tagNamePrefix(){return"vaadin-context-menu"}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const t=this._overlayElement,e=t.getFirstChild();if(t.parentOverlay){const n=t.parentOverlay.querySelector("[expanded]");n&&n.hasAttribute("focused")&&e?e.focus():t.$.overlay.focus()}else e&&e.focus()}__openSubMenu(t,e,n){t.items=e._item.children,t.listenOn=e,t.overlayClass=n;const a=this._overlayElement,o=t._overlayElement;o.positionTarget=e,o.noHorizontalOverlap=!0,o._setParentOverlay(a),a.hasAttribute("theme")?t.setAttribute("theme",a.getAttribute("theme")):t.removeAttribute("theme");const s=o.$.content;s.style.minWidth="",e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:e._item.children}}))}__createComponent(t){let e;return t.component instanceof HTMLElement?e=t.component:e=document.createElement(t.component||`${this._tagNamePrefix}-item`),e._hasVaadinItemMixin&&e.setAttribute("role","menuitem"),e.localName==="hr"?e.setAttribute("role","separator"):e.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(e,t,this._theme),e._item=t,t.text&&(e.textContent=t.text),t.className&&e.setAttribute("class",t.className),this.__toggleMenuComponentAttribute(e,"menu-item-checked",t.checked),this.__toggleMenuComponentAttribute(e,"disabled",t.disabled),t.children&&t.children.length&&(this.__updateExpanded(e,!1),e.setAttribute("aria-haspopup","true")),e}__initListBox(){const t=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&t.setAttribute("theme",this._theme),t.addEventListener("selected-changed",e=>{const{value:n}=e.detail;if(typeof n=="number"){const a=t.items[n]._item;t.selected=null,a.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:a}}))}}),t}__initOverlay(){const t=this._overlayElement;t.$.backdrop.addEventListener("click",()=>{this.close()}),t.addEventListener(Qt?"click":"mouseover",e=>{this.__showSubMenu(e)}),t.addEventListener("keydown",e=>{const{key:n}=e,a=this.__isRTL,o=n==="ArrowRight",s=n==="ArrowLeft";!a&&o||a&&s||n==="Enter"||n===" "?this.__showSubMenu(e):!a&&s||a&&o||n==="Escape"?(n==="Escape"&&e.stopPropagation(),this.close(),this.listenOn.focus()):n==="Tab"&&this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const t=document.createElement(this.constructor.is);return t._modeless=!0,t.openOn="opensubmenu",t.setAttribute("hidden",""),this.addEventListener("opened-changed",e=>{e.detail.value||this._subMenu.close()}),t.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("item-selected",e=>{const{detail:n}=e;this.dispatchEvent(new CustomEvent("item-selected",{detail:n}))}),this.addEventListener("close-all-menus",()=>{this._overlayElement.close()}),this.addEventListener("item-selected",e=>{const n=e.target,a=e.detail.value,o=n.items.indexOf(a);a.keepOpen&&o>-1?(n._overlayElement.requestContentUpdate(),n._listBox._observer.flush(),n._listBox.children[o].focus()):a.keepOpen||this.close()}),t.addEventListener("opened-changed",e=>{if(!e.detail.value){const n=this._listBox.querySelector("[expanded]");n&&this.__updateExpanded(n,!1)}}),t}__showSubMenu(t,e=t.composedPath().find(n=>n.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this._overlayElement.hasAttribute("opening")){requestAnimationFrame(()=>{this.__showSubMenu(t,e)});return}const n=this._subMenu;if(e){const{children:a}=e._item;if(n.items!==a&&n.close(),!this.opened)return;if(a&&a.length){this.__updateExpanded(e,!0);const{overlayClass:o}=this;this.__openSubMenu(n,e,o)}else n.listenOn.focus()}}__itemsRenderer(t,e,{detail:n}){this.__initMenu(t,e);const a=t.querySelector(this.constructor.is);a.closeOn=e.closeOn;const o=t.querySelector(`${this._tagNamePrefix}-list-box`);o.innerHTML="",[...n.children||e.items].forEach(s=>{const l=this.__createComponent(s);o.appendChild(l)})}_setMenuItemTheme(t,e,n){let a=t.getAttribute("theme")||n;e.theme!=null&&(a=Array.isArray(e.theme)?e.theme.join(" "):e.theme),this.__updateTheme(t,a)}__toggleMenuComponentAttribute(t,e,n){n?(t.setAttribute(e,""),t[`__has-${e}`]=!0):t[`__has-${e}`]&&(t.removeAttribute(e),t[`__has-${e}`]=!1)}__initMenu(t,e){if(t.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const n=this.__initListBox();this._listBox=n,t.appendChild(n);const a=this.__initSubMenu();this._subMenu=a,t.appendChild(a),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(t,e){t.setAttribute("aria-expanded",e.toString()),t.toggleAttribute("expanded",e)}__updateTheme(t,e){e?t.setAttribute("theme",e):t.removeAttribute("theme")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const P4=r=>class extends x4(r){static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu",sync:!0},listenOn:{type:Object,sync:!0,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged",sync:!0},renderer:{type:Function,sync:!0},_modeless:{type:Boolean,sync:!0},_context:{type:Object,sync:!0},_phone:{type:Boolean},_touch:{type:Boolean,value:Qt},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)","_overlayContextChanged(_overlayElement, _context)","_overlayModelessChanged(_overlayElement, _modeless)","_overlayPhoneChanged(_overlayElement, _phone)","_overlayThemeChanged(_overlayElement, _theme)"]}constructor(){super(),this._createOverlay(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened&&this._setOpened(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened=this.opened,this.close()}ready(){super.ready(),this.addController(new Po(this._wideMediaQuery,t=>{this._wide=t}))}_createOverlay(){const t=document.createElement(`${this._tagNamePrefix}-overlay`);t.owner=this,t.addEventListener("opened-changed",e=>{this._onOverlayOpened(e)}),t.addEventListener("vaadin-overlay-open",e=>{this._onVaadinOverlayOpen(e)}),this._overlayElement=t}_onOverlayOpened(t){this._setOpened(t.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this._overlayElement.style.opacity="",this.__forwardFocus()}_overlayContextChanged(t,e){t&&(t.model=e)}_overlayModelessChanged(t,e){t&&(t.modeless=e)}_overlayPhoneChanged(t,e){t&&(t.toggleAttribute("phone",e),t.withBackdrop=e)}_overlayThemeChanged(t,e){t&&(e?t.setAttribute("theme",e):t.removeAttribute("theme"))}_targetOrOpenOnChanged(t,e){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),t&&e&&(this._listen(t,e,this._boundOpen),this._oldListenOn=t,this._oldOpenOn=e)}_touchOrWideChanged(t,e){this._phone=!e&&t}_setListenOnUserSelect(t){this.listenOn.style.webkitTouchCallout=t,this.listenOn.style.webkitUserSelect=t,this.listenOn.style.userSelect=t,document.getSelection().removeAllRanges()}_closeOnChanged(t,e){const n="vaadin-overlay-outside-click",a=this._overlayElement;e&&this._unlisten(a,e,this._boundClose),t?(this._listen(a,t,this._boundClose),a.removeEventListener(n,this._boundPreventDefault)):a.addEventListener(n,this._boundPreventDefault)}_preventDefault(t){t.preventDefault()}_openedChanged(t){t?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this._overlayElement.opened=t}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(t,e){if(e){if(t)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),t=this.__itemsRenderer}this._overlayElement.renderer=t}close(){this._setOpened(!1)}_contextTarget(t){if(this.selector){const e=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(e,n=>t.composedPath().indexOf(n)>-1)[0]}return t.target}open(t){t&&!this.opened&&(this._context={detail:t.detail,target:this._contextTarget(t)},this._context.target&&(t.preventDefault(),t.stopPropagation(),this.__x=this._getEventCoordinate(t,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(t,"y"),this.__pageYOffset=window.pageYOffset,this._overlayElement.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const t=window.pageYOffset-this.__pageYOffset,e=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-e),this.__adjustPosition("right",e),this.__adjustPosition("top",-t),this.__adjustPosition("bottom",t),this.__pageYOffset+=t,this.__pageXOffset+=e}__adjustPosition(t,e){const a=this._overlayElement.style;a[t]=`${(parseInt(a[t])||0)+e}px`}__alignOverlayPosition(){const t=this._overlayElement;if(t.positionTarget)return;const e=t.style;["top","right","bottom","left"].forEach(d=>e.removeProperty(d)),["right-aligned","end-aligned","bottom-aligned"].forEach(d=>t.removeAttribute(d));const{xMax:n,xMin:a,yMax:o}=t.getBoundaries(),s=this.__x,l=this.__y,h=document.documentElement.clientWidth,c=document.documentElement.clientHeight;this.__isRTL?s>h/2||s>a?e.right=`${Math.max(0,h-s)}px`:(e.left=`${s}px`,this._setEndAligned(t)):s<h/2||s<n?e.left=`${s}px`:(e.right=`${Math.max(0,h-s)}px`,this._setEndAligned(t)),l<c/2||l<o?e.top=`${l}px`:(e.bottom=`${Math.max(0,c-l)}px`,t.setAttribute("bottom-aligned",""))}_setEndAligned(t){t.setAttribute("end-aligned",""),this.__isRTL||t.setAttribute("right-aligned","")}_getEventCoordinate(t,e){if(t.detail instanceof Object){if(t.detail[e])return t.detail[e];if(t.detail.sourceEvent)return this._getEventCoordinate(t.detail.sourceEvent,e)}else{const n=`client${e.toUpperCase()}`,a=t.changedTouches?t.changedTouches[0][n]:t[n];if(a===0){const o=t.target.getBoundingClientRect();return e==="x"?o.left:o.top+o.height}return a}}_listen(t,e,n){St[e]?at(t,e,n):t.addEventListener(e,n)}_unlisten(t,e,n){St[e]?cl(t,e,n):t.removeEventListener(e,n)}_onGlobalContextMenu(t){t.shiftKey||(t.preventDefault(),this.close())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zl extends P4(jr(ct(ft(oo(O))))){static get template(){return R`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}static get is(){return"vaadin-context-menu"}ready(){super.ready(),Gr(this)}_attachDom(i){const t=this.attachShadow({mode:"open"});return t.appendChild(i),t.appendChild(this._overlayElement),t}}A(Zl);(function(){function r(s){return window.Vaadin.Flow.tryCatchWrapper(s,"Vaadin Context Menu")}function i(s,l){try{return window.Vaadin.Flow.clients[s].getByNodeId(l)}catch(h){console.error("Could not get node %s from app %s",l,s),console.error(h)}}function t(s,l){s.$connector||(s.$connector={generateItems:r(h=>{const c=e(l,h);s.items=c})})}function e(s,l){const h=i(s,l);if(h)return Array.from(h.children).map(c=>{const d={component:c,checked:c._checked,keepOpen:c._keepOpen,className:c.className,theme:c.__theme};return c._hasVaadinItemMixin&&c._containerNodeId&&(d.children=e(s,c._containerNodeId)),c._item=d,d})}function n(s,l){s._item&&(s._item.checked=l,s._item.keepOpen&&s.toggleAttribute("menu-item-checked",l))}function a(s,l){s._item&&(s._item.keepOpen=l)}function o(s,l){s._item&&(s._item.theme=l)}window.Vaadin.Flow.contextMenuConnector={initLazy(...s){return r(t)(...s)},generateItemsTree(...s){return r(e)(...s)},setChecked(...s){return r(n)(...s)},setKeepOpen(...s){return r(a)(...s)},setTheme(...s){return r(o)(...s)}}})();(function(){function r(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Context Menu Target")}function i(t){t.$contextMenuTargetConnector||(t.$contextMenuTargetConnector={openOnHandler:r(function(e){e.preventDefault(),e.stopPropagation(),this.$contextMenuTargetConnector.openEvent=e;let n={};t.getContextMenuBeforeOpenDetail&&(n=t.getContextMenuBeforeOpenDetail(e)),t.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:n}))}),updateOpenOn:r(function(e){this.removeListener(),this.openOnEventType=e,customElements.whenDefined("vaadin-context-menu").then(r(()=>{St[e]?at(t,e,this.openOnHandler):t.addEventListener(e,this.openOnHandler)}))}),removeListener:r(function(){this.openOnEventType&&(St[this.openOnEventType]?cl(t,this.openOnEventType,this.openOnHandler):t.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:r(function(e){e.open(this.openEvent)}),removeConnector:r(function(){this.removeListener(),t.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...t){return r(i)(...t)}}})();const E4=z`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;C("vaadin-horizontal-layout",E4,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class A4 extends ft(V(O)){static get template(){return R`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}A(A4);C("vaadin-checkbox",z`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});C("vaadin-grid",z`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const S4=r=>class extends r{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(t){return t.filter(e=>e.some(n=>n.headerRenderer||n.path||n.header)).length}_a11yGetFooterRowCount(t){return t.filter(e=>e.some(n=>n.headerRenderer)).length}_a11yUpdateGridSize(t,e){if(t===void 0||e===void 0)return;const n=e[e.length-1];this.$.table.setAttribute("aria-rowcount",t+this._a11yGetHeaderRowCount(e)+this._a11yGetFooterRowCount(e)),this.$.table.setAttribute("aria-colcount",n&&n.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){lt(this.$.header,(t,e)=>{t.setAttribute("aria-rowindex",e+1)})}_a11yUpdateFooterRows(){lt(this.$.footer,(t,e)=>{t.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+e+1)})}_a11yUpdateRowRowindex(t,e){t.setAttribute("aria-rowindex",e+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(t,e){t.setAttribute("aria-selected",!!e),pe(t,n=>{n.setAttribute("aria-selected",!!e)})}_a11yUpdateRowExpanded(t){this.__isRowExpandable(t)?t.setAttribute("aria-expanded","false"):this.__isRowCollapsible(t)?t.setAttribute("aria-expanded","true"):t.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(t,e){e>0||this.__isRowCollapsible(t)||this.__isRowExpandable(t)?t.setAttribute("aria-level",e+1):t.removeAttribute("aria-level")}_a11ySetRowDetailsCell(t,e){pe(t,n=>{n!==e&&n.setAttribute("aria-controls",e.id)})}_a11yUpdateCellColspan(t,e){t.setAttribute("aria-colspan",Number(e))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(t=>{let e=t.parentNode;for(;e&&e.localName!=="vaadin-grid-cell-content";)e=e.parentNode;e&&e.assignedSlot&&e.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(t.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jl=r=>{if(!r.parentNode)return!1;const t=Array.from(r.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(e=>{const n=e.getAttribute("part");return!(n&&n.includes("body-cell"))}).includes(r);return!r.disabled&&t&&r.offsetParent&&getComputedStyle(r).visibility!=="hidden"},O4=r=>class extends r{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(t){const e=t.detail.model,n=e?e.item:null;n&&(this.activeItem=this._itemsEqual(this.activeItem,n)?null:n)}_onClick(t){if(t.defaultPrevented)return;const e=t.composedPath(),n=e[e.indexOf(this.$.table)-3];if(!n||n.getAttribute("part").indexOf("details-cell")>-1)return;const a=n._content,o=this.getRootNode().activeElement;!a.contains(o)&&!this._isFocusable(t.target)&&!(t.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(n.parentElement)}}))}_isFocusable(t){return Jl(t)}};function re(r,i){return r.split(".").reduce((t,e)=>t[e],i)}function N0(r,i,t){if(t.length===0)return!1;let e=!0;return r.forEach(({path:n})=>{if(!n||n.indexOf(".")===-1)return;const a=n.replace(/\.[^.]*$/u,"");re(a,t[0])===void 0&&(console.warn(`Path "${n}" used for ${i} does not exist in all of the items, ${i} is disabled.`),e=!1)}),e}function Sr(r){return[void 0,null].indexOf(r)>=0?"":isNaN(r)?r.toString():r}function B0(r,i){return r=Sr(r),i=Sr(i),r<i?-1:r>i?1:0}function T4(r,i){return r.sort((t,e)=>i.map(n=>n.direction==="asc"?B0(re(n.path,t),re(n.path,e)):n.direction==="desc"?B0(re(n.path,e),re(n.path,t)):0).reduce((n,a)=>n!==0?n:a,0))}function I4(r,i){return r.filter(t=>i.every(e=>{const n=Sr(re(e.path,t)),a=Sr(e.value).toString().toLowerCase();return n.toString().toLowerCase().includes(a)}))}const k4=r=>(i,t)=>{let e=r?[...r]:[];i.filters&&N0(i.filters,"filtering",e)&&(e=I4(e,i.filters)),Array.isArray(i.sortOrders)&&i.sortOrders.length&&N0(i.sortOrders,"sorting",e)&&(e=T4(e,i.sortOrders));const n=Math.min(e.length,i.pageSize),a=i.page*n,o=a+n,s=e.slice(a,o);t(s,e.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const D4=r=>class extends r{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(t){const e=k4(this.items);e.__items=t,this._arrayDataProvider=e,this.size=t.length,this.dataProvider=e}__dataProviderOrItemsChanged(t,e,n){n&&(this._arrayDataProvider?t!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):e?this._arrayDataProvider.__items===e?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(e):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):e&&this.__setArrayDataProvider(e))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const R4=r=>class extends r{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),at(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(t){this.hasAttribute("reordering")&&(t.preventDefault(),Qt||this._onTrackEnd())}_onTouchStart(t){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:t.touches[0].clientX,y:t.touches[0].clientY}})},100)}_onTouchMove(t){this._draggedColumn&&t.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(t){if(t.detail.state==="start"){const e=t.composedPath(),n=e[e.indexOf(this.$.header)-2];if(!n||!n._content||n._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(t)}else t.detail.state==="track"?this._onTrack(t):t.detail.state==="end"&&this._onTrackEnd(t)}_onTrackStart(t){if(!this.columnReorderingAllowed)return;const e=t.composedPath&&t.composedPath();if(e&&e.some(a=>a.hasAttribute&&a.hasAttribute("draggable")))return;const n=this._cellFromPoint(t.detail.x,t.detail.y);if(!(!n||!n.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=n._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(n),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._autoScroller()}}_onTrack(t){if(!this._draggedColumn)return;const e=this._cellFromPoint(t.detail.x,t.detail.y);if(!e)return;const n=this._getTargetColumn(e,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,n)&&this._isSwappableByPosition(n,t.detail.x)){const a=this._columnTree.findIndex(c=>c.includes(n)),o=this._getColumnsInOrder(a),s=o.indexOf(this._draggedColumn),l=o.indexOf(n),h=s<l?1:-1;for(let c=s;c!==l;c+=h)this._swapColumnOrders(this._draggedColumn,o[c+h])}this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._lastDragClientX=t.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(t=this._columnTree.length-1){return this._columnTree[t].filter(e=>!e.hidden).sort((e,n)=>e._order-n._order)}_cellFromPoint(t=0,e=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const n=this.shadowRoot.elementFromPoint(t,e);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),n&&n._column)return n}_updateGhostPosition(t,e){const n=this._reorderGhost.getBoundingClientRect(),a=t-n.width/2,o=e-n.height/2,s=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=s-(n.left-a),this._reorderGhost._top=l-(n.top-o),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(t){const e=this._reorderGhost;e.textContent=t._content.innerText;const n=window.getComputedStyle(t);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(a=>{e.style[a]=n[a]}),e}_updateOrders(t){t!==void 0&&(t[0].forEach(e=>{e._order=0}),il(t[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(t,e){lt(t.parentNode,n=>{/column/u.test(n.localName)&&this._isSwapAllowed(n,t)&&(n._reorderStatus=e)})}_autoScroller(){if(this._lastDragClientX){const t=this._lastDragClientX-this.getBoundingClientRect().right+50,e=this.getBoundingClientRect().left-this._lastDragClientX+50;t>0?this.$.table.scrollLeft+=t/10:e>0&&(this.$.table.scrollLeft-=e/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(t,e){if(t&&e){const n=t!==e,a=t.parentElement===e.parentElement,o=t.frozen&&e.frozen||t.frozenToEnd&&e.frozenToEnd||!t.frozen&&!t.frozenToEnd&&!e.frozen&&!e.frozenToEnd;return n&&a&&o}}_isSwappableByPosition(t,e){const n=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(s=>t.contains(s._column)),a=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),o=n.getBoundingClientRect();return o.left>a.left?e>o.right-a.width:e<o.left+a.width}_swapColumnOrders(t,e){[t._order,e._order]=[e._order,t._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(t,e){if(t&&e){let n=t._column;for(;n.parentElement!==e.parentElement&&n!==this;)n=n.parentElement;return n.parentElement===e.parentElement?n:t._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $4=r=>class extends r{ready(){super.ready();const t=this.$.scroller;at(t,"track",this._onHeaderTrack.bind(this)),t.addEventListener("touchmove",e=>t.hasAttribute("column-resizing")&&e.preventDefault()),t.addEventListener("contextmenu",e=>e.target.getAttribute("part")==="resize-handle"&&e.preventDefault()),t.addEventListener("mousedown",e=>e.target.getAttribute("part")==="resize-handle"&&e.preventDefault())}_onHeaderTrack(t){const e=t.target;if(e.getAttribute("part")==="resize-handle"){let a=e.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);a.localName==="vaadin-grid-column-group";)a=a._childColumns.slice(0).sort((d,p)=>d._order-p._order).filter(d=>!d.hidden).pop();const o=this.__isRTL,s=t.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),h=l.find(d=>d._column===a);if(h.offsetWidth){const d=getComputedStyle(h._content),p=10+parseInt(d.paddingLeft)+parseInt(d.paddingRight)+parseInt(d.borderLeftWidth)+parseInt(d.borderRightWidth)+parseInt(d.marginLeft)+parseInt(d.marginRight);let _;const g=h.offsetWidth,M=h.getBoundingClientRect();h.hasAttribute("frozen-to-end")?_=g+(o?s-M.right:M.left-s):_=g+(o?M.left-s:s-M.right),a.width=`${Math.max(p,_)}px`,a.flexGrow=0}l.sort((d,p)=>d._column._order-p._column._order).forEach((d,p,_)=>{p<_.indexOf(h)&&(d._column.width=`${d.offsetWidth}px`,d._column.flexGrow=0)});const c=this._frozenToEndCells[0];if(c&&this.$.table.scrollWidth>this.$.table.offsetWidth){const d=c.getBoundingClientRect(),p=s-(o?d.right:d.left);(o&&p<=0||!o&&p>=0)&&(this.$.table.scrollLeft+=p)}t.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:a}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Or(r,i,t=0){let e=i;for(const n of r.subCaches){const a=n.parentCacheIndex;if(e<=a)break;if(e<=a+n.flatSize)return Or(n,e-a-1,t+1);e-=n.flatSize}return{cache:r,item:r.items[e],index:e,page:Math.floor(e/r.pageSize),level:t}}function th({getItemId:r},i,t,e=0,n=0){for(let a=0;a<i.items.length;a++){const o=i.items[a];if(o&&r(o)===r(t))return{cache:i,level:e,item:o,index:a,page:Math.floor(a/i.pageSize),subCache:i.getSubCache(a),flatIndex:n+i.getFlatIndex(a)}}for(const a of i.subCaches){const o=n+i.getFlatIndex(a.parentCacheIndex),s=th({getItemId:r},a,t,e+1,o+1);if(s)return s}}function eh(r,[i,...t],e=0){i===1/0&&(i=r.size-1);const n=r.getFlatIndex(i),a=r.getSubCache(i);return a&&a.flatSize>0&&t.length?eh(a,t,e+n+1):e+n}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Do{constructor(i,t,e,n,a){rt(this,"context");rt(this,"size",0);rt(this,"pageSize");rt(this,"items",[]);rt(this,"pendingRequests",{});rt(this,"__subCacheByIndex",{});rt(this,"__flatSize",0);this.context=i,this.pageSize=t,this.size=e||0,this.parentCache=n,this.parentCacheIndex=a,this.__flatSize=e||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(i=>i.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((i,t)=>(t.recalculateFlatSize(),i+t.flatSize),0):0}setPage(i,t){const e=i*this.pageSize;t.forEach((n,a)=>{this.items[e+a]=n})}getSubCache(i){return this.__subCacheByIndex[i]}removeSubCache(i){delete this.__subCacheByIndex[i]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(i){const t=new Do(this.context,this.pageSize,0,this,i);return this.__subCacheByIndex[i]=t,t}getFlatIndex(i){const t=Math.max(0,Math.min(this.size-1,i));return this.subCaches.reduce((e,n)=>{const a=n.parentCacheIndex;return t>a?e+n.flatSize:e},t)}getItemForIndex(i){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:t}=Or(this,i);return t}getCacheAndIndex(i){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:t,index:e}=Or(this,i);return{cache:t,scaledIndex:e}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(i){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(i)){const t=this.createSubCache(i);this.context.__controller.__loadCachePage(t,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class L4 extends EventTarget{constructor(t,{size:e,pageSize:n,isExpanded:a,getItemId:o,dataProvider:s,dataProviderParams:l}){super();rt(this,"host");rt(this,"dataProvider");rt(this,"dataProviderParams");rt(this,"size");rt(this,"pageSize");rt(this,"isExpanded");rt(this,"getItemId");rt(this,"rootCache");this.host=t,this.pageSize=n,this.getItemId=o,this.isExpanded=a,this.dataProvider=s,this.dataProviderParams=l,this.rootCache=this.__createRootCache(e)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(t){this.pageSize=t,this.clearCache()}setDataProvider(t){this.dataProvider=t,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(t){return Or(this.rootCache,t)}getItemContext(t){return th({getItemId:this.getItemId},this.rootCache,t)}getFlatIndexByPath(t){return eh(this.rootCache,t)}ensureFlatIndexLoaded(t){const{cache:e,page:n,item:a}=this.getFlatIndexContext(t);a||this.__loadCachePage(e,n)}ensureFlatIndexHierarchy(t){const{cache:e,item:n,index:a}=this.getFlatIndexContext(t);if(n&&this.isExpanded(n)&&!e.getSubCache(a)){const o=e.createSubCache(a);this.__loadCachePage(o,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(t){return new Do(this.__cacheContext,this.pageSize,t)}__loadCachePage(t,e){if(!this.dataProvider||t.pendingRequests[e])return;let n={page:e,pageSize:this.pageSize,parentItem:t.parentItem};this.dataProviderParams&&(n={...n,...this.dataProviderParams()});const a=(o,s)=>{s!==void 0?t.size=s:n.parentItem&&(t.size=o.length),t.setPage(e,o),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete t.pendingRequests[e],this.dispatchEvent(new CustomEvent("page-loaded"))};t.pendingRequests[e]=a,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(n,a)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const F4=r=>class extends r{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new L4(this,{size:this.size,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(t){this._dataProviderController.rootCache.size=t,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(t,e){!e&&t==="children"||this.requestContentUpdate()}_getItem(t,e){if(t>=this._flatSize)return;e.index=t;const{item:n}=this._dataProviderController.getFlatIndexContext(t);n?(this.__updateLoading(e,!1),this._updateItem(e,n),this._isExpanded(n)&&this._dataProviderController.ensureFlatIndexHierarchy(t)):(this.__updateLoading(e,!0),this._dataProviderController.ensureFlatIndexLoaded(t))}__updateLoading(t,e){const n=ue(t);Kr(t,"loading",e),$t(n,"loading-row-cell",e)}getItemId(t){return this.itemIdPath?Xt(this.itemIdPath,t):t}_isExpanded(t){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(t))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(t,e){const n=e||[],a=new Set;return n.forEach(o=>{a.add(this.getItemId(o))}),a}expandItem(t){this._isExpanded(t)||(this.expandedItems=[...this.expandedItems,t])}collapseItem(t){this._isExpanded(t)&&(this.expandedItems=this.expandedItems.filter(e=>!this._itemsEqual(e,t)))}_getIndexLevel(t=0){const{level:e}=this._dataProviderController.getFlatIndexContext(t);return e}_loadPage(t,e){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(e,t)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize,this._getRenderedRows().forEach(t=>{this._dataProviderController.ensureFlatIndexHierarchy(t.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=I.debounce(this._debouncerApplyCachedData,pt.after(0),()=>{this._setLoading(!1),this._getRenderedRows().forEach(t=>{const{item:e}=this._dataProviderController.getFlatIndexContext(t.index);e&&this._getItem(t.index,t)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=I.debounce(this.__clearCacheDebouncer,zt,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),this.__virtualizer.size||this._dataProviderController.loadFirstPage()}_pageSizeChanged(t,e){this._dataProviderController.setPageSize(t),e!==void 0&&t!==e&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(t,e){this._dataProviderController.setDataProvider(t?t.bind(this):null),e!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=I.debounce(this._debouncerCheckSize,pt.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(t,e){return this.getItemId(t)===this.getItemId(e)}_getItemIndexInArray(t,e){let n=-1;return e.forEach((a,o)=>{this._itemsEqual(a,t)&&(n=o)}),n}scrollToIndex(...t){let e;for(;e!==(e=this._dataProviderController.getFlatIndexByPath(t));)this._scrollToFlatIndex(e);(this._dataProviderController.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=t)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const t=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...t)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ae={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},Dt={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},N4=!("draggable"in document.createElement("div")),B4=r=>class extends r{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",t=>{this.dropMode&&(t.preventDefault(),t.stopPropagation())})}_onDragStart(t){if(this.rowsDraggable){let e=t.target;if(e.localName==="vaadin-grid-cell-content"&&(e=e.assignedSlot.parentNode.parentNode),e.parentNode!==this.$.items)return;if(t.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const s=e.style.transform;e.style.top=/translateY\((.*)\)/u.exec(s)[1],e.style.transform="none",requestAnimationFrame(()=>{e.style.top="",e.style.transform=s})}const n=e.getBoundingClientRect();N4?t.dataTransfer.setDragImage(e):t.dataTransfer.setDragImage(e,t.clientX-n.left,t.clientY-n.top);let a=[e];this._isSelected(e._item)&&(a=this.__getViewportRows().filter(s=>this._isSelected(s._item)).filter(s=>!this.dragFilter||this.dragFilter(this.__getRowModel(s)))),t.dataTransfer.setData("text",this.__formatDefaultTransferData(a)),Re(e,{dragstart:a.length>1?`${a.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${t.clientX-n.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${t.clientY-n.top+10}px`),requestAnimationFrame(()=>{Re(e,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const o=new CustomEvent("grid-dragstart",{detail:{draggedItems:a.map(s=>s._item),setDragData:(s,l)=>t.dataTransfer.setData(s,l),setDraggedItemsCount:s=>e.setAttribute("dragstart",s)}});o.originalEvent=t,this.dispatchEvent(o)}}_onDragEnd(t){this.toggleAttribute("dragging-rows",!1),t.stopPropagation();const e=new CustomEvent("grid-dragend");e.originalEvent=t,this.dispatchEvent(e)}_onDragLeave(t){t.stopPropagation(),this._clearDragStyles()}_onDragOver(t){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(t.clientY)){this._clearDragStyles();return}let e=t.composedPath().find(n=>n.localName==="tr");if(!this._flatSize||this.dropMode===Ae.ON_GRID)this._dropLocation=Dt.EMPTY;else if(!e||e.parentNode!==this.$.items){if(e)return;if(this.dropMode===Ae.BETWEEN||this.dropMode===Ae.ON_TOP_OR_BETWEEN)e=Array.from(this.$.items.children).filter(n=>!n.hidden).pop(),this._dropLocation=Dt.BELOW;else return}else{const n=e.getBoundingClientRect();if(this._dropLocation=Dt.ON_TOP,this.dropMode===Ae.BETWEEN){const a=t.clientY-n.top<n.bottom-t.clientY;this._dropLocation=a?Dt.ABOVE:Dt.BELOW}else this.dropMode===Ae.ON_TOP_OR_BETWEEN&&(t.clientY-n.top<n.height/3?this._dropLocation=Dt.ABOVE:t.clientY-n.top>n.height/3*2&&(this._dropLocation=Dt.BELOW))}if(e&&e.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}t.stopPropagation(),t.preventDefault(),this._dropLocation===Dt.EMPTY?this.toggleAttribute("dragover",!0):e?(this._dragOverItem=e._item,e.getAttribute("dragover")!==this._dropLocation&&vs(e,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(t){if(this.__dndAutoScrolling)return!0;const e=this.$.header.getBoundingClientRect().bottom,n=this.$.footer.getBoundingClientRect().top,a=e-t+this.__dndAutoScrollThreshold,o=t-n+this.__dndAutoScrollThreshold;let s=0;if(o>0?s=o*2:a>0&&(s=-a*2),s){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=s,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const t=this.$.header.getBoundingClientRect().bottom,e=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(n=>{const a=n.getBoundingClientRect();return a.bottom>t&&a.top<e})}_clearDragStyles(){this.removeAttribute("dragover"),lt(this.$.items,t=>{vs(t,{dragover:null})})}_onDrop(t){if(this.dropMode){t.stopPropagation(),t.preventDefault();const e=t.dataTransfer.types&&Array.from(t.dataTransfer.types).map(a=>({type:a,data:t.dataTransfer.getData(a)}));this._clearDragStyles();const n=new CustomEvent("grid-drop",{bubbles:t.bubbles,cancelable:t.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:e}});n.originalEvent=t,this.dispatchEvent(n)}}__formatDefaultTransferData(t){return t.map(e=>Array.from(e.children).filter(n=>!n.hidden&&n.getAttribute("part").indexOf("details-cell")===-1).sort((n,a)=>n._column._order>a._column._order?1:-1).map(n=>n._content.textContent.trim()).filter(n=>n).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){lt(this.$.items,t=>{t.hidden||this._filterDragAndDrop(t,this.__getRowModel(t))})}_filterDragAndDrop(t,e){const n=this.loading||t.hasAttribute("loading"),a=!this.rowsDraggable||n||this.dragFilter&&!this.dragFilter(e),o=!this.dropMode||n||this.dropFilter&&!this.dropFilter(e);pe(t,s=>{a?s._content.removeAttribute("draggable"):s._content.setAttribute("draggable",!0)}),Re(t,{"drag-disabled":!!a,"drop-disabled":!!o})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ih(r,i){if(!r||!i||r.length!==i.length)return!1;for(let t=0,e=r.length;t<e;t++)if(r[t]instanceof Array&&i[t]instanceof Array){if(!ih(r[t],i[t]))return!1}else if(r[t]!==i[t])return!1;return!0}const H4=r=>class extends r{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(t){return t.some(e=>e.localName==="vaadin-grid-column-group")}_getChildColumns(t){return Lt.getColumns(t)}_flattenColumnGroups(t){return t.map(e=>e.localName==="vaadin-grid-column-group"?this._getChildColumns(e):[e]).reduce((e,n)=>e.concat(n),[])}_getColumnTree(){const t=Lt.getColumns(this),e=[t];let n=t;for(;this._hasColumnGroups(n);)n=this._flattenColumnGroups(n),e.push(n);return e}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=I.debounce(this.__updateColumnTreeDebouncer,zt,()=>this._updateColumnTree())}_updateColumnTree(){const t=this._getColumnTree();ih(t,this._columnTree)||(t.forEach(e=>{e.forEach(n=>{n.performUpdate&&n.performUpdate()})}),this._columnTree=t)}_addNodeObserver(){this._observer=new Lt(this,(t,e)=>{const n=e.flatMap(o=>o._allCells),a=o=>n.filter(s=>s&&s._content.contains(o)).length;this.__removeSorters(this._sorters.filter(a)),this.__removeFilters(this._filters.filter(a)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=I.debounce(this._debouncerCheckImports,pt.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(t=>{this.querySelector(t)&&!customElements.get(t)&&console.warn(`Make sure you have imported the required module for <${t}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(t=>this._updateFirstAndLastColumnForRow(t))}_updateFirstAndLastColumnForRow(t){Array.from(t.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((e,n)=>e._column._order-n._column._order).forEach((e,n,a)=>{qt(e,"first-column",n===0),qt(e,"last-column",n===a.length-1)})}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const V4=r=>class extends r{getEventContext(t){const e={},n=t.__composedPath||t.composedPath(),a=n[n.indexOf(this.$.table)-3];return a&&(e.section=["body","header","footer","details"].find(o=>a.getAttribute("part").indexOf(o)>-1),a._column&&(e.column=a._column),(e.section==="body"||e.section==="details")&&Object.assign(e,this.__getRowModel(a.parentElement))),e}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const W4=r=>class extends r{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(t){t.stopPropagation(),this.__addFilter(t.target),this.__applyFilters()}__removeFilters(t){t.length!==0&&(this._filters=this._filters.filter(e=>t.indexOf(e)<0),this.__applyFilters())}__addFilter(t){this._filters.indexOf(t)===-1&&this._filters.push(t)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(t=>({path:t.path,value:t.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const U4=r=>class extends r{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(t){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(e=>{const n=this[e];if(t){const a=n&&n.parentElement;this.__isCell(n)?this[e]=a:this.__isCell(a)&&(this[e]=a.parentElement)}else if(!t&&this.__isRow(n)){const a=n.firstElementChild;this[e]=a._focusButton||a}})}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(t,e){e&&e.setAttribute("tabindex","-1"),t&&this._updateGridSectionFocusTarget(t)}_focusedCellChanged(t,e){e&&Hr(e,"part","focused-cell"),t&&Ge(t,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const t=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(e=>{if(e.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=e;else{let n=this._itemsFocusable.parentElement,a=this._itemsFocusable;if(n){this.__isCell(n)&&(a=n,n=n.parentElement);const o=[...n.children].indexOf(a);this._itemsFocusable=this.__getFocusable(e,e.children[o])}}}),t&&this._itemsFocusable.focus()}_onKeyDown(t){const e=t.key;let n;switch(e){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":n="Navigation";break;case"Enter":case"Escape":case"F2":n="Interaction";break;case"Tab":n="Tab";break;case" ":n="Space";break}this._detectInteracting(t),this.interacting&&n!=="Interaction"&&(n=void 0),n&&this[`_on${n}KeyDown`](t,e)}_ensureScrolledToIndex(t){[...this.$.items.children].find(n=>n.index===t)?this.__scrollIntoViewport(t):this.scrollToIndex(t)}__isRowExpandable(t){if(this.itemHasChildrenPath){const e=t._item;return!!(e&&Xt(this.itemHasChildrenPath,e)&&!this._isExpanded(e))}}__isRowCollapsible(t){return this._isExpanded(t._item)}__isDetailsCell(t){return t.matches('[part~="details-cell"]')}__isCell(t){return t instanceof HTMLTableCellElement}__isRow(t){return t instanceof HTMLTableRowElement}__getIndexOfChildElement(t){return Array.prototype.indexOf.call(t.parentNode.children,t)}_onNavigationKeyDown(t,e){t.preventDefault();const n=this._lastVisibleIndex-this._firstVisibleIndex-1,a=this.__isRTL;let o=0,s=0;switch(e){case"ArrowRight":o=a?-1:1;break;case"ArrowLeft":o=a?1:-1;break;case"Home":this.__rowFocusMode||t.ctrlKey?s=-1/0:o=-1/0;break;case"End":this.__rowFocusMode||t.ctrlKey?s=1/0:o=1/0;break;case"ArrowDown":s=1;break;case"ArrowUp":s=-1;break;case"PageDown":s=n;break;case"PageUp":s=-n;break}const l=t.composedPath().find(p=>this.__isRow(p)),h=t.composedPath().find(p=>this.__isCell(p));if(this.__rowFocusMode&&!l||!this.__rowFocusMode&&!h)return;const c=a?"ArrowLeft":"ArrowRight",d=a?"ArrowRight":"ArrowLeft";if(e===c){if(this.__rowFocusMode){if(this.__isRowExpandable(l)){this.expandItem(l._item);return}this.__rowFocusMode=!1,this._onCellNavigation(l.firstElementChild,0,0);return}}else if(e===d)if(this.__rowFocusMode){if(this.__isRowCollapsible(l)){this.collapseItem(l._item);return}}else{const p=[...l.children].sort((_,g)=>_._order-g._order);if(h===p[0]||this.__isDetailsCell(h)){this.__rowFocusMode=!0,this._onRowNavigation(l,0);return}}this.__rowFocusMode?this._onRowNavigation(l,s):this._onCellNavigation(h,o,s)}_onRowNavigation(t,e){const{dstRow:n}=this.__navigateRows(e,t);n&&n.focus()}__getIndexInGroup(t,e){return t.parentNode===this.$.items?e!==void 0?e:t.index:this.__getIndexOfChildElement(t)}__navigateRows(t,e,n){const a=this.__getIndexInGroup(e,this._focusedItemIndex),o=e.parentNode,s=(o===this.$.items?this._flatSize:o.children.length)-1;let l=Math.max(0,Math.min(a+t,s));if(o!==this.$.items){if(l>a)for(;l<s&&o.children[l].hidden;)l+=1;else if(l<a)for(;l>0&&o.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:o.children[l]}}let h=!1;if(n){const c=this.__isDetailsCell(n);if(o===this.$.items){const d=e._item,{item:p}=this._dataProviderController.getFlatIndexContext(l);c?h=t===0:h=t===1&&this._isDetailsOpened(d)||t===-1&&l!==a&&this._isDetailsOpened(p),h!==c&&(t===1&&h||t===-1&&!h)&&(l=a)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...o.children].find(c=>!c.hidden&&c.index===l),dstIsRowDetails:h}}_onCellNavigation(t,e,n){const a=t.parentNode,{dstRow:o,dstIsRowDetails:s}=this.__navigateRows(n,a,t);if(!o)return;let l=this.__getIndexOfChildElement(t);this.$.items.contains(t)&&(l=[...this.$.sizer.children].findIndex(p=>p._column===t._column));const h=this.__isDetailsCell(t),c=a.parentNode,d=this.__getIndexInGroup(a,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(h?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,d).filter(p=>!p.hidden)[l]._order),s)[...o.children].find(_=>this.__isDetailsCell(_)).focus();else{const p=this.__getIndexInGroup(o,this._focusedItemIndex),_=this._getColumns(c,p).filter(F=>!F.hidden),g=_.map(F=>F._order).sort((F,H)=>F-H),M=g.length-1,y=g.indexOf(g.slice(0).sort((F,H)=>Math.abs(F-this._focusedColumnOrder)-Math.abs(H-this._focusedColumnOrder))[0]),x=n===0&&h?y:Math.max(0,Math.min(y+e,M));x!==y&&(this._focusedColumnOrder=void 0);const k=_.reduce((F,H,tt)=>(F[H._order]=tt,F),{})[g[x]];let W;if(this.$.items.contains(t)){const F=this.$.sizer.children[k];this._lazyColumns&&(this.__isColumnInViewport(F._column)||F.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),W=[...o.children].find(H=>H._column===F._column),this._scrollHorizontallyToCell(W)}else W=o.children[k],this._scrollHorizontallyToCell(W);W.focus()}}_onInteractionKeyDown(t,e){const n=t.composedPath()[0],a=n.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(n.type);let o;switch(e){case"Enter":o=this.interacting?!a:!0;break;case"Escape":o=!1;break;case"F2":o=!this.interacting;break}const{cell:s}=this._getGridEventLocation(t);if(this.interacting!==o&&s!==null)if(o){const l=s._content.querySelector("[focus-target]")||[...s._content.querySelectorAll("*")].find(h=>this._isFocusable(h));l&&(t.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else t.preventDefault(),this._focusedColumnOrder=void 0,s.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);e==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(t,e){const n=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let a=n.indexOf(t);for(a+=e;a>=0&&a<=n.length-1;){let s=n[a];if(s&&!this.__rowFocusMode&&(s=n[a].parentNode),!s||s.hidden)a+=e;else break}let o=n[a];if(o&&!this.__isHorizontallyInViewport(o)){const s=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(s)if(o===this._headerFocusable)o=s._headerCell;else if(o===this._itemsFocusable){const l=o._column._cells.indexOf(o);o=s._cells[l]}else o===this._footerFocusable&&(o=s._footerCell)}return o}_onTabKeyDown(t){const e=this._predictFocusStepTarget(t.composedPath()[0],t.shiftKey?-1:1);if(e){if(t.stopPropagation(),e===this.$.table)this.$.table.focus();else if(e===this.$.focusexit)this.$.focusexit.focus();else if(e===this._itemsFocusable){let n=e;const a=this.__isRow(e)?e:e.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),a.index!==this._focusedItemIndex&&this.__isCell(e)){const o=Array.from(a.children).indexOf(this._itemsFocusable),s=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);s&&(n=s.children[o])}t.preventDefault(),n.focus()}else t.preventDefault(),e.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(t){t.preventDefault();const e=t.composedPath()[0],n=this.__isRow(e);(n||!e._content||!e._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(n?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(n?e:e.parentElement)}}))}_onKeyUp(t){if(!/^( |SpaceBar)$/u.test(t.key)||this.interacting)return;t.preventDefault();const e=t.composedPath()[0];if(e._content&&e._content.firstElementChild){const n=this.hasAttribute("navigating");e._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:t.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",n)}}_onFocusIn(t){this._isMousedown||this.toggleAttribute("navigating",!0);const e=t.composedPath()[0];e===this.$.table||e===this.$.focusexit?(this._predictFocusStepTarget(e,e===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(t)}_onFocusOut(t){this.toggleAttribute("navigating",!1),this._detectInteracting(t),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(t){const{section:e,cell:n,row:a}=this._getGridEventLocation(t);if(!(!n&&!this.__rowFocusMode)){if(this._detectInteracting(t),e&&(n||a))if(this._activeRowGroup=e,this.$.header===e?this._headerFocusable=this.__getFocusable(a,n):this.$.items===e?this._itemsFocusable=this.__getFocusable(a,n):this.$.footer===e&&(this._footerFocusable=this.__getFocusable(a,n)),n){const o=this.getEventContext(t);this.__pendingBodyCellFocus=this.loading&&o.section==="body",this.__pendingBodyCellFocus||n.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:o}})),this._focusedCell=n._focusButton||n,Fr()&&t.target===n&&this._showTooltip(t)}else this._focusedCell=null;this._detectFocusedItemIndex(t)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(t,e){return this.__rowFocusMode?t:e._focusButton||e}_detectInteracting(t){const e=t.composedPath().some(n=>n.localName==="vaadin-grid-cell-content");this._setInteracting(e),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(t){const{section:e,row:n}=this._getGridEventLocation(t);e===this.$.items&&(this._focusedItemIndex=n.index)}_updateGridSectionFocusTarget(t){if(!t)return;const e=this._getGridSectionFromFocusTarget(t),n=this.interacting&&e===this._activeRowGroup;t.tabIndex=n?-1:0}_preventScrollerRotatingCellFocus(t,e){t.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),e===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(t,e){let n=this._columnTree.length-1;return t===this.$.header?n=e:t===this.$.footer&&(n=this._columnTree.length-1-e),this._columnTree[n]}__isValidFocusable(t){return this.$.table.contains(t)&&t.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(t=>{if(!this.__isValidFocusable(this[`_${t}Focusable`])){const e=[...this.$[t].children].find(a=>a.offsetHeight),n=e?[...e.children].find(a=>!a.hidden):null;e&&n&&(this[`_${t}Focusable`]=this.__getFocusable(e,n))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const t=this.__getFirstVisibleItem(),e=t?[...t.children].find(n=>!n.hidden):null;e&&t&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(t,e))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(t){if(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end")||this.__isDetailsCell(t))return;const e=t.getBoundingClientRect(),n=t.parentNode,a=Array.from(n.children).indexOf(t),o=this.$.table.getBoundingClientRect();let s=o.left,l=o.right;for(let h=a-1;h>=0;h--){const c=n.children[h];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){s=c.getBoundingClientRect().right;break}}for(let h=a+1;h<n.children.length;h++){const c=n.children[h];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().left;break}}e.left<s&&(this.$.table.scrollLeft+=Math.round(e.left-s)),e.right>l&&(this.$.table.scrollLeft+=Math.round(e.right-l))}_getGridEventLocation(t){const e=t.composedPath(),n=e.indexOf(this.$.table),a=n>=1?e[n-1]:null,o=n>=2?e[n-2]:null,s=n>=3?e[n-3]:null;return{section:a,row:o,cell:s}}_getGridSectionFromFocusTarget(t){return t===this._headerFocusable?this.$.header:t===this._itemsFocusable?this.$.items:t===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Y4=r=>class extends r{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(t=>{t.forEach(({target:e})=>{this._updateDetailsCellHeight(e.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(t){t&&this._columnTree&&lt(this.$.items,e=>{if(!e.querySelector("[part~=details-cell]")){this._updateRow(e,this._columnTree[this._columnTree.length-1]);const n=this._isDetailsOpened(e._item);this._toggleDetailsCell(e,n)}})}_detailsOpenedItemsChanged(t,e){lt(this.$.items,n=>{if(n.hasAttribute("details-opened")){this._updateItem(n,n._item);return}e&&this._isDetailsOpened(n._item)&&this._updateItem(n,n._item)})}_configureDetailsCell(t){t.setAttribute("part","cell details-cell"),t.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(t)}_toggleDetailsCell(t,e){const n=t.querySelector('[part~="details-cell"]');n&&(n.hidden=!e,!n.hidden&&this.rowDetailsRenderer&&(n._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(t){const e=t.querySelector('[part~="details-cell"]');e&&(this.__updateDetailsRowPadding(t,e),requestAnimationFrame(()=>this.__updateDetailsRowPadding(t,e)))}__updateDetailsRowPadding(t,e){e.hidden?t.style.removeProperty("padding-bottom"):t.style.setProperty("padding-bottom",`${e.offsetHeight}px`)}_updateDetailsCellHeights(){lt(this.$.items,t=>{this._updateDetailsCellHeight(t)})}_isDetailsOpened(t){return this.detailsOpenedItems&&this._getItemIndexInArray(t,this.detailsOpenedItems)!==-1}openItemDetails(t){this._isDetailsOpened(t)||(this.detailsOpenedItems=[...this.detailsOpenedItems,t])}closeItemDetails(t){this._isDetailsOpened(t)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(e=>!this._itemsEqual(e,t)))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mt=document.createElement("div");mt.style.position="fixed";mt.style.clip="rect(0px, 0px, 0px, 0px)";mt.setAttribute("aria-live","polite");document.body.appendChild(mt);let ri;function Tm(r,i={}){const t=i.mode||"polite",e=i.timeout===void 0?150:i.timeout;t==="alert"?(mt.removeAttribute("aria-live"),mt.removeAttribute("role"),ri=I.debounce(ri,At,()=>{mt.setAttribute("role","alert")})):(ri&&ri.cancel(),mt.removeAttribute("role"),mt.setAttribute("aria-live",t)),mt.textContent="",setTimeout(()=>{mt.textContent=r},e)}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const H0={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},q4=r=>class extends Io(r){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(t){this.$.table.scrollTop=t}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",t=>{const e=t.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=t.composedPath()[e-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const t=!de(this);t&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=t}}_scrollToFlatIndex(t){t=Math.min(this._flatSize-1,Math.max(0,t)),this.__virtualizer.scrollToIndex(t),this.__scrollIntoViewport(t)}__scrollIntoViewport(t){const e=[...this.$.items.children].find(n=>n.index===t);if(e){const n=e.getBoundingClientRect(),a=this.$.footer.getBoundingClientRect().top,o=this.$.header.getBoundingClientRect().bottom;n.bottom>a?this.$.table.scrollTop+=n.bottom-a:n.top<o&&(this.$.table.scrollTop-=o-n.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=I.debounce(this._debounceScrolling,pt.after(H0.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=I.debounce(this._debounceColumnContentVisibility,pt.after(H0.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!de(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree)return;const t=this._getColumnsInOrder();if(!t[0]||!t[0]._sizerCell)return;let e=!1;if(t.forEach(n=>{const a=this._lazyColumns&&!this.__isColumnInViewport(n);n._bodyContentHidden!==a&&(e=!0,n._cells.forEach(o=>{if(o!==n._sizerCell){if(a)o.remove();else if(o.__parentRow){const s=[...o.__parentRow.children].find(l=>t.indexOf(l._column)>t.indexOf(n));o.__parentRow.insertBefore(o,s)}}})),n._bodyContentHidden=a}),e&&this._frozenCellsChanged(),this._lazyColumns){const n=[...t].reverse().find(s=>s.frozen),a=this.__getColumnEnd(n),o=t.find(s=>!s.frozen&&!s._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(o)-a,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(t){return t?t._sizerCell.offsetLeft+(this.__isRTL?0:t._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(t){return t?t._sizerCell.offsetLeft+(this.__isRTL?t._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(t){return t.frozen||t.frozenToEnd?!0:this.__isHorizontallyInViewport(t._sizerCell)}__isHorizontallyInViewport(t){return t.offsetLeft+t.offsetWidth>=this._scrollLeft&&t.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(t,e){e==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",e),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=I.debounce(this._debounceOverflow,At,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let t="";const e=this.$.table;e.scrollTop<e.scrollHeight-e.clientHeight&&(t+=" bottom"),e.scrollTop>0&&(t+=" top");const n=ja(e,this.getAttribute("dir"));n>0&&(t+=" start"),n<e.scrollWidth-e.clientWidth&&(t+=" end"),this.__isRTL&&(t=t.replace(/start|end/giu,o=>o==="start"?"end":"start")),e.scrollLeft<e.scrollWidth-e.clientWidth&&(t+=" right"),e.scrollLeft>0&&(t+=" left");const a=t.trim();a.length>0&&this.getAttribute("overflow")!==a?this.setAttribute("overflow",a):a.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=I.debounce(this._debouncerCacheElements,zt,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(t=>{t.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=I.debounce(this.__debounceUpdateFrozenColumn,zt,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const t=this._columnTree[this._columnTree.length-1].slice(0);t.sort((a,o)=>a._order-o._order);let e,n;for(let a=0;a<t.length;a++){const o=t[a];o._lastFrozen=!1,o._firstFrozenToEnd=!1,n===void 0&&o.frozenToEnd&&!o.hidden&&(n=a),o.frozen&&!o.hidden&&(e=a)}e!==void 0&&(t[e]._lastFrozen=!0),n!==void 0&&(t[n]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const t=this.$.table.scrollWidth,e=this.$.table.clientWidth,n=Math.max(0,this.$.table.scrollLeft),a=ja(this.$.table,this.getAttribute("dir")),o=`translate(${-n}px, 0)`;this.$.header.style.transform=o,this.$.footer.style.transform=o,this.$.items.style.transform=o;const s=this.__isRTL?a+e-t:n,l=`translate(${s}px, 0)`;this._frozenCells.forEach(p=>{p.style.transform=l});const h=this.__isRTL?a:n+e-t,c=`translate(${h}px, 0)`;let d=c;if(this._lazyColumns){const p=this._getColumnsInOrder(),_=[...p].reverse().find(w=>!w.frozenToEnd&&!w._bodyContentHidden),g=this.__getColumnEnd(_),M=p.find(w=>w.frozenToEnd),y=this.__getColumnStart(M);d=`translate(${h+(y-g)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(p=>{this.$.items.contains(p)?p.style.transform=d:p.style.transform=c}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-s}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j4=r=>class extends r{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(t){return this.__selectedKeys.has(this.getItemId(t))}selectItem(t){this._isSelected(t)||(this.selectedItems=[...this.selectedItems,t])}deselectItem(t){this._isSelected(t)&&(this.selectedItems=this.selectedItems.filter(e=>!this._itemsEqual(e,t)))}_toggleItem(t){this._isSelected(t)?this.deselectItem(t):this.selectItem(t)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(t,e){const n=e||[],a=new Set;return n.forEach(o=>{a.add(this.getItemId(o))}),a}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let V0="prepend";const G4=r=>class extends r{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>V0},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(t){V0=["append","prepend"].includes(t)?t:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(t){const e=t.target;t.stopPropagation(),e._grid=this,this.__updateSorter(e,t.detail.shiftClick,t.detail.fromSorterClick),this.__applySorters()}__removeSorters(t){t.length!==0&&(this._sorters=this._sorters.filter(e=>t.indexOf(e)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((t,e)=>{t._order=this._sorters.length>1?e:null})}__appendSorter(t){t.direction?this._sorters.includes(t)||this._sorters.push(t):this._removeArrayItem(this._sorters,t),this.__updateSortOrders()}__prependSorter(t){this._removeArrayItem(this._sorters,t),t.direction&&this._sorters.unshift(t),this.__updateSortOrders()}__updateSorter(t,e,n){if(!(!t.direction&&this._sorters.indexOf(t)===-1)){if(t._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!n)||this.multiSortOnShiftClick&&e)this.multiSortPriority==="append"?this.__appendSorter(t):this.__prependSorter(t);else if(t.direction||this.multiSortOnShiftClick){const a=this._sorters.filter(o=>o!==t);this._sorters=t.direction?[t]:[],a.forEach(o=>{o._order=null,o.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(t=>({path:t.path,direction:t.direction}))}_removeArrayItem(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const K4=r=>class extends r{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){lt(this.$.items,t=>{!t.hidden&&!t.hasAttribute("loading")&&this._generateCellClassNames(t,this.__getRowModel(t))})}generateCellPartNames(){lt(this.$.items,t=>{!t.hidden&&!t.hasAttribute("loading")&&this._generateCellPartNames(t,this.__getRowModel(t))})}_generateCellClassNames(t,e){pe(t,n=>{if(n.__generatedClasses&&n.__generatedClasses.forEach(a=>n.classList.remove(a)),this.cellClassNameGenerator){const a=this.cellClassNameGenerator(n._column,e);n.__generatedClasses=a&&a.split(" ").filter(o=>o.length>0),n.__generatedClasses&&n.__generatedClasses.forEach(o=>n.classList.add(o))}})}_generateCellPartNames(t,e){pe(t,n=>{if(n.__generatedParts&&n.__generatedParts.forEach(a=>{Nt(n,null,a)}),this.cellPartNameGenerator){const a=this.cellPartNameGenerator(n._column,e);n.__generatedParts=a&&a.split(" ").filter(o=>o.length>0),n.__generatedParts&&n.__generatedParts.forEach(o=>{Nt(n,!0,o)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Q4=r=>class extends D4(F4(H4(O4(q4(j4(G4(Y4(U4(S4(W4(R4($4(V4(B4(K4(po(r))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:lo},_ios:{type:Boolean,value:We},_firefox:{type:Boolean,value:L1},_android:{type:Boolean,value:as},_touchDevice:{type:Boolean,value:Qt},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const i=this.__getFirstVisibleItem();return i?i.index:void 0}get _lastVisibleIndex(){const i=this.__getLastVisibleItem();return i?i.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(i=>this._isInViewport(i))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(i=>this._isInViewport(i))}_isInViewport(i){const t=this.$.table.getBoundingClientRect(),e=i.getBoundingClientRect(),n=this.$.header.getBoundingClientRect().height,a=this.$.footer.getBoundingClientRect().height;return e.bottom>t.top+n&&e.top<t.bottom-a}_getRenderedRows(){return Array.from(this.$.items.children).filter(i=>!i.hidden).sort((i,t)=>i.index-t.index)}_getRowContainingNode(i){const t=co("vaadin-grid-cell-content",i);return t?t.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(i,t){const e=this.__getRowModel(t);return this.getItemId(i)===this.getItemId(e.item)}ready(){super.ready(),this.__virtualizer=new j1({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),Gr(this),this._tooltipController=new Vt(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(i){if(this.$.items.contains(i)&&i.localName==="td")return{item:i.parentElement._item,column:i._column}}__focusBodyCell({item:i,column:t}){const e=this._getRenderedRows().find(a=>a._item===i),n=e&&[...e.children].find(a=>a._column===t);n&&n.focus()}_focusFirstVisibleRow(){const i=this.__getFirstVisibleItem();this.__rowFocusMode=!0,i.focus()}_flatSizeChanged(i,t,e,n){if(t&&e&&n){const a=this.shadowRoot.activeElement,o=this.__getBodyCellCoordinates(a),s=t.size||0;t.size=i,t.update(s-1,s-1),i<s&&t.update(i-1,i-1),o&&a.parentElement.hidden&&this.__focusBodyCell(o),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(i=>i.clientHeight).length}__getIntrinsicWidth(i){return this.__intrinsicWidthCache.has(i)||this.__calculateAndCacheIntrinsicWidths([i]),this.__intrinsicWidthCache.get(i)}__getDistributedWidth(i,t){if(i==null||i===this)return 0;const e=Math.max(this.__getIntrinsicWidth(i),this.__getDistributedWidth((i.assignedSlot||i).parentElement,i));if(!t)return e;const n=i,a=e,o=n._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,d)=>c+d,0),s=Math.max(0,a-o),h=this.__getIntrinsicWidth(t)/o*s;return this.__getIntrinsicWidth(t)+h}_recalculateColumnWidths(i){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(n=>{n.__debounceUpdateHeaderFooterRowVisibility&&n.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const t=this._firstVisibleIndex,e=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(n=>n.index>=t&&n.index<=e),this.__calculateAndCacheIntrinsicWidths(i),i.forEach(n=>{n.width=`${this.__getDistributedWidth(n)}px`})}__setVisibleCellContentAutoWidth(i,t){i._allCells.filter(e=>this.$.items.contains(e)?this.__viewportRowsCache.includes(e.parentElement):!0).forEach(e=>{e.__measuringAutoWidth=t,e.__measuringAutoWidth?(e.__originalWidth=e.style.width,e.style.width="auto",e.style.position="absolute"):(e.style.width=e.__originalWidth,delete e.__originalWidth,e.style.position="")})}__getAutoWidthCellsMaxWidth(i){return i._allCells.reduce((t,e)=>e.__measuringAutoWidth?Math.max(t,e.offsetWidth+1):t,0)}__calculateAndCacheIntrinsicWidths(i){i.forEach(t=>this.__setVisibleCellContentAutoWidth(t,!0)),i.forEach(t=>{const e=this.__getAutoWidthCellsMaxWidth(t);this.__intrinsicWidthCache.set(t,e)}),i.forEach(t=>this.__setVisibleCellContentAutoWidth(t,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(de(this)||this._dataProviderController.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const i=this._getColumns().filter(t=>!t.hidden&&t.autoWidth);this._recalculateColumnWidths(i)}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&!de(this)&&!this._dataProviderController.isLoading()&&this.__hasRowsWithClientHeight()&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(i){const t=[];for(let e=0;e<i;e++){const n=document.createElement("tr");n.setAttribute("part","row body-row"),n.setAttribute("role","row"),n.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(n,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(n)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(e=>{e.isConnected&&e._cells&&(e._cells=[...e._cells])}),this.__afterCreateScrollerRowsDebouncer=I.debounce(this.__afterCreateScrollerRowsDebouncer,At,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),t}_createCell(i,t){const n=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,a=document.createElement("vaadin-grid-cell-content");a.setAttribute("slot",n);const o=document.createElement(i);o.id=n.replace("-content-","-"),o.setAttribute("role",i==="td"?"gridcell":"columnheader"),!as&&!We&&(o.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),o.addEventListener("mouseleave",()=>{this._hideTooltip()}),o.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const s=document.createElement("slot");if(s.setAttribute("name",n),t&&t._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),o.appendChild(l),o._focusButton=l,o.focus=function(){o._focusButton.focus()},l.appendChild(s)}else o.setAttribute("tabindex","-1"),o.appendChild(s);return o._content=a,a.addEventListener("mousedown",()=>{if(Nd){const l=h=>{const c=a.contains(this.getRootNode().activeElement),d=h.composedPath().includes(a);!c&&d&&o.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{a.contains(this.getRootNode().activeElement)||o.focus()})}),o}_updateRow(i,t,e="body",n=!1,a=!1){const o=document.createDocumentFragment();pe(i,s=>{s._vacant=!0}),i.innerHTML="",e==="body"&&(i.__cells=[],i.__detailsCell=null),t.filter(s=>!s.hidden).forEach((s,l,h)=>{let c;if(e==="body"){if(s._cells||(s._cells=[]),c=s._cells.find(d=>d._vacant),c||(c=this._createCell("td",s),s._cells.push(c)),c.setAttribute("part","cell body-cell"),c.__parentRow=i,i.__cells.push(c),s._bodyContentHidden||i.appendChild(c),i===this.$.sizer&&(s._sizerCell=c),l===h.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const d=this._detailsCells.find(p=>p._vacant)||this._createCell("td");this._detailsCells.indexOf(d)===-1&&this._detailsCells.push(d),d._content.parentElement||o.appendChild(d._content),this._configureDetailsCell(d),i.appendChild(d),i.__detailsCell=d,this._a11ySetRowDetailsCell(i,d),d._vacant=!1}a||(s._cells=[...s._cells])}else{const d=e==="header"?"th":"td";n||s.localName==="vaadin-grid-column-group"?(c=s[`_${e}Cell`]||this._createCell(d),c._column=s,i.appendChild(c),s[`_${e}Cell`]=c):(s._emptyCells||(s._emptyCells=[]),c=s._emptyCells.find(p=>p._vacant)||this._createCell(d),c._column=s,i.appendChild(c),s._emptyCells.indexOf(c)===-1&&s._emptyCells.push(c)),c.part.add("cell",`${e}-cell`)}c._content.parentElement||o.appendChild(c._content),c._vacant=!1,c._column=s}),e!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(i),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(i)}__debounceUpdateHeaderFooterRowVisibility(i){i.__debounceUpdateHeaderFooterRowVisibility=I.debounce(i.__debounceUpdateHeaderFooterRowVisibility,zt,()=>this.__updateHeaderFooterRowVisibility(i))}__updateHeaderFooterRowVisibility(i){if(!i)return;const t=Array.from(i.children).filter(e=>{const n=e._column;if(n._emptyCells&&n._emptyCells.indexOf(e)>-1)return!1;if(i.parentElement===this.$.header){if(n.headerRenderer)return!0;if(n.header===null)return!1;if(n.path||n.header!==void 0)return!0}else if(n.footerRenderer)return!0;return!1});i.hidden!==!t.length&&(i.hidden=!t.length),this._resetKeyboardNavigation()}_updateScrollerItem(i,t){this._preventScrollerRotatingCellFocus(i,t),this._columnTree&&(this._updateRowOrderParts(i,t),this._a11yUpdateRowRowindex(i,t),this._getItem(t,i))}_columnTreeChanged(i){this._renderColumnTree(i),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(i,t=i.index){Re(i,{first:t===0,last:t===this._flatSize-1,odd:t%2!==0,even:t%2===0})}_updateRowStateParts(i,{expanded:t,selected:e,detailsOpened:n}){Re(i,{expanded:t,collapsed:this.__isRowExpandable(i),selected:e,"details-opened":n})}_renderColumnTree(i){for(lt(this.$.items,t=>{this._updateRow(t,i[i.length-1],"body",!1,!0);const e=this.__getRowModel(t);this._updateRowOrderParts(t),this._updateRowStateParts(t,e),this._filterDragAndDrop(t,e)});this.$.header.children.length<i.length;){const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.header.appendChild(t);const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.footer.appendChild(e)}for(;this.$.header.children.length>i.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);lt(this.$.header,(t,e,n)=>{this._updateRow(t,i[e],"header",e===i.length-1);const a=ue(t);$t(a,"first-header-row-cell",e===0),$t(a,"last-header-row-cell",e===n.length-1)}),lt(this.$.footer,(t,e,n)=>{this._updateRow(t,i[i.length-1-e],"footer",e===0);const a=ue(t);$t(a,"first-footer-row-cell",e===0),$t(a,"last-footer-row-cell",e===n.length-1)}),this._updateRow(this.$.sizer,i[i.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(i,t){i._item=t;const e=this.__getRowModel(i);this._toggleDetailsCell(i,e.detailsOpened),this._a11yUpdateRowLevel(i,e.level),this._a11yUpdateRowSelected(i,e.selected),this._updateRowStateParts(i,e),this._generateCellClassNames(i,e),this._generateCellPartNames(i,e),this._filterDragAndDrop(i,e),lt(i,n=>{if(n._renderer){const a=n._column||this;n._renderer.call(a,n._content,a,e)}}),this._updateDetailsCellHeight(i),this._a11yUpdateRowExpanded(i,e.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(i){i.animationName.indexOf("vaadin-grid-appear")===0&&(i.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(i){return{index:i.index,item:i._item,level:this._getIndexLevel(i.index),expanded:this._isExpanded(i._item),selected:this._isSelected(i._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(i._item)}}_showTooltip(i){const t=this._tooltipController.node;t&&t.isConnected&&(this._tooltipController.setTarget(i.target),this._tooltipController.setContext(this.getEventContext(i)),t._stateController.open({focus:i.type==="focusin",hover:i.type==="mouseenter"}))}_hideTooltip(i){const t=this._tooltipController&&this._tooltipController.node;t&&t._stateController.close(i)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(i=>{i.forEach(t=>{t._renderHeaderAndFooter&&t._renderHeaderAndFooter()})})}__updateVisibleRows(i,t){this.__virtualizer&&this.__virtualizer.update(i,t)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const X4=z`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-grid",X4,{moduleId:"vaadin-grid-styles"});class Ie extends Q4(ft(V(ct(O)))){static get template(){return R`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}A(Ie);C("vaadin-grid-sorter",z`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rh=document.createElement("template");rh.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(rh.content);C("vaadin-grid-sorter",z`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const Z4=r=>class extends r{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(t,e){e!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(t){return t===null?"":t+1}_onClick(t){if(t.defaultPrevented)return;const e=this.getRootNode().activeElement;this!==e&&this.contains(e)||(t.preventDefault(),this._shiftClick=t.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class J4 extends Z4(V(ot(O))){static get template(){return R`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}A(J4);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const t5=j(r=>class extends tl(Ke(Ur(r))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(t){const e=t.target;this._toggleChecked(e.checked)}_toggleChecked(t){this.checked=t}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const e5=r=>class extends J1(t5(fo(Co(r)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Yr(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new qr(this.inputElement,this._labelController))}_shouldSetActive(t){return t.target.localName==="a"?!1:super._shouldSetActive(t)}_toggleChecked(t){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(t)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const i5=z`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-checkbox",i5,{moduleId:"vaadin-checkbox-styles"});class r5 extends e5(ft(V(O))){static get is(){return"vaadin-checkbox"}static get template(){return R`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Vt(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}A(r5);(function(){const r=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Grid")};window.Vaadin.Flow.gridConnector={initLazy:i=>r(function(t){if(t.$connector)return;const e=t._dataProviderController;e.ensureFlatIndexHierarchyOriginal=e.ensureFlatIndexHierarchy,e.ensureFlatIndexHierarchy=r(function(u){const{item:v}=this.getFlatIndexContext(u);if(!v||!this.isExpanded(v))return;t.$connector.hasCacheForParentKey(t.getItemId(v))?this.ensureFlatIndexHierarchyOriginal(u):t.$connector.beforeEnsureFlatIndexHierarchy(u,v)}),e.isLoadingOriginal=e.isLoading,e.isLoading=r(function(){return t.$connector.hasEnsureSubCacheQueue()||this.isLoadingOriginal()});const n={},a={},o={},s=50,l=20;let h=[],c,d=[],p;const _=150;let g,M={};const y="null";M[y]=[0,0];const x=["SINGLE","NONE","MULTI"];let w={},k="SINGLE",W=!1;t.size=0,t.itemIdPath="key";function F(u){return{[t.itemIdPath]:u}}t.$connector={},t.$connector.hasCacheForParentKey=r(u=>o[u]!==void 0&&o[u].size!==void 0),t.$connector.hasEnsureSubCacheQueue=r(()=>d.length>0),t.$connector.hasParentRequestQueue=r(()=>h.length>0),t.$connector.hasRootRequestQueue=r(()=>Object.keys(n).length>0||!!g&&g.isActive()),t.$connector.beforeEnsureFlatIndexHierarchy=r(function(u,v){d.push({flatIndex:u,itemkey:t.getItemId(v)}),p=Rt.debounce(p,Vo,()=>{for(;d.length;)t.$connector.flushEnsureSubCache()})}),t.$connector.doSelection=r(function(u,v){k==="NONE"||!u.length||v&&t.hasAttribute("disabled")||(k==="SINGLE"&&(w={}),u.forEach(f=>{f&&(w[f.key]=f,f.selected=!0,v&&t.$server.select(f.key));const m=!t.activeItem||!f||f.key!=t.activeItem.key;!v&&k==="SINGLE"&&m&&(t.activeItem=f)}),t.selectedItems=Object.values(w))}),t.$connector.doDeselection=r(function(u,v){if(k==="NONE"||!u.length||v&&t.hasAttribute("disabled"))return;const f=t.selectedItems.slice();for(;u.length;){const m=u.shift();for(let b=0;b<f.length;b++){const E=f[b];if(m&&m.key===E.key){f.splice(b,1);break}}m&&(delete w[m.key],delete m.selected,v&&t.$server.deselect(m.key))}t.selectedItems=f}),t.__activeItemChanged=r(function(u,v){k=="SINGLE"&&(u?w[u.key]||t.$connector.doSelection([u],!0):v&&w[v.key]&&(t.__deselectDisallowed?t.activeItem=v:t.$connector.doDeselection([v],!0)))}),t._createPropertyObserver("activeItem","__activeItemChanged",!0),t.__activeItemChangedDetails=r(function(u,v){t.__disallowDetailsOnClick||u==null&&v===void 0||(u&&!u.detailsOpened?t.$server.setDetailsVisible(u.key):t.$server.setDetailsVisible(null))}),t._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),t.$connector._getSameLevelPage=r(function(u,v,f){if((v.parentItem?t.getItemId(v.parentItem):y)===u)return Math.floor(f/t.pageSize);const{parentCache:b,parentCacheIndex:E}=v;return b?this._getSameLevelPage(u,b,E):null}),t.$connector.flushEnsureSubCache=r(function(){const u=d.shift();return u?(e.ensureFlatIndexHierarchyOriginal(u.flatIndex),!0):!1}),t.$connector.flushParentRequests=r(function(){let u=h.splice(0,l);return u.length?(t.$server.setParentRequestedRanges(u),!0):!1}),t.$connector.beforeParentRequest=r(function(u,v,f){h.push({firstIndex:u,size:v,parentKey:f}),c=Rt.debounce(c,Yi.after(s),()=>{for(;h.length;)t.$connector.flushParentRequests()})}),t.$connector.fetchPage=r(function(u,v,f){const m=t._getRenderedRows();let b=m.length>0?m[0].index:0,E=m.length>0?m[m.length-1].index:0,P=E-b,U=Math.max(0,b-P),N=Math.min(E+P,t._flatSize),et=v,J=v;for(let yt=U;yt<=N;yt++){const{cache:Qe,index:Xe}=e.getFlatIndexContext(yt),Wt=t.$connector._getSameLevelPage(f,Qe,Xe);Wt!==null&&(et=Math.min(et,Wt),J=Math.max(J,Wt))}let B=Math.max(0,et),S=f!==y?J:Math.min(J,Math.floor(t.size/t.pageSize)),Z=M[f];if(Z||(Z=[-1,-1]),Z[0]!=B||Z[1]!=S){Z=[B,S],M[f]=Z;let yt=S-B+1;u(B*t.pageSize,yt*t.pageSize)}}),t.dataProvider=r(function(u,v){if(u.pageSize!=t.pageSize)throw"Invalid pageSize";let f=u.page;if(u.parentItem){let m=t.getItemId(u.parentItem);a[m]||(a[m]={});const b=e.getItemContext(u.parentItem);o[m]&&o[m][f]&&b.subCache?(f=Math.min(f,Math.floor(o[m].size/t.pageSize)),d=[],v(o[m][f],o[m].size)):(a[m][f]=v,t.$connector.fetchPage((E,P)=>t.$connector.beforeParentRequest(E,P,u.parentItem.key),f,m))}else{if(f=Math.min(f,Math.floor(t.size/t.pageSize)),t.size===0){v([],0);return}o[y]&&o[y][f]?v(o[y][f]):(n[f]=v,g=Rt.debounce(g,Yi.after(t._hasData?_:0),()=>{t.$connector.fetchPage((m,b)=>t.$server.setRequestedRange(m,b),f,y)}))}}),t.$connector.setSorterDirections=r(function(u){W=!0,setTimeout(r(()=>{try{const v=Array.from(t.querySelectorAll("vaadin-grid-sorter"));t._sorters.forEach(f=>{v.includes(f)||v.push(f)}),v.forEach(f=>{f.direction=null}),t.multiSortPriority!=="append"&&(u=u.reverse()),u.forEach(({column:f,direction:m})=>{v.forEach(b=>{b.getAttribute("path")===f&&(b.direction=m)})})}finally{W=!1}}))}),t._updateItem=r(function(u,v){Ie.prototype._updateItem.call(t,u,v),u.hidden||Array.from(u.children).forEach(f=>{f._content&&f._content.__templateInstance&&f._content.__templateInstance.children&&Array.from(f._content.__templateInstance.children).forEach(m=>{m._attachRenderedComponentIfAble&&m._attachRenderedComponentIfAble(),m.children&&Array.from(m.children).forEach(b=>{b._attachRenderedComponentIfAble&&b._attachRenderedComponentIfAble()})})}),k===x[1]&&(u.removeAttribute("aria-selected"),Array.from(u.children).forEach(f=>f.removeAttribute("aria-selected")))});const H=r(function(u,v){if(u==null||t.$server.updateExpandedState==null)return;let f=t.getItemId(u);t.$server.updateExpandedState(f,v)});t.expandItem=r(function(u){H(u,!0),Ie.prototype.expandItem.call(t,u)}),t.collapseItem=r(function(u){H(u,!1),Ie.prototype.collapseItem.call(t,u)});const tt=function(u){if(!u||!Array.isArray(u))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(u);let v=Array.from(t.detailsOpenedItems),f=!1;for(let m=0;m<u.length;++m){const b=u[m];b&&(b.detailsOpened?t._getItemIndexInArray(b,v)<0&&v.push(b):t._getItemIndexInArray(b,v)>=0&&v.splice(t._getItemIndexInArray(b,v),1),w[b.key]&&(w[b.key]=b,b.selected=!0,f=!0))}t.detailsOpenedItems=v,f&&t.selectedItems.splice(0,t.selectedItems.length,...Object.values(w))},dt=function(u,v){let f;if((v||y)!==y){f=o[v][u];const m=F(v),b=e.getItemContext(m);if(b&&b.subCache){const E=a[v],P=E&&E[u];vt(u,f,P,b.subCache)}}else f=o[y][u],vt(u,f,n[u],e.rootCache);return f},vt=function(u,v,f,m){if(!f){let b=u*t.pageSize,E=b+t.pageSize;if(v){if(m&&m.items)for(let P=b;P<E;P++)m.items[P]&&(m.items[P]=v[P-b])}else if(m&&m.items)for(let P=b;P<E;P++)delete m.items[P]}},_t=function(){wt(),t.__updateVisibleRows()},wt=function(){e.recalculateFlatSize(),t._flatSize=e.flatSize},gt=function(u){if(!u||!t.$||t.$.items.childElementCount===0)return;const v=u.map(m=>m.key),f=t._getRenderedRows().filter(m=>m._item&&v.includes(m._item.key)).map(m=>m.index);f.length>0&&t.__updateVisibleRows(f[0],f[f.length-1])};t.$connector.set=r(function(u,v,f){if(u%t.pageSize!=0)throw"Got new data to index "+u+" which is not aligned with the page size of "+t.pageSize;let m=f||y;const b=u/t.pageSize,E=Math.ceil(v.length/t.pageSize);for(let P=0;P<E;P++){let U=b+P,N=v.slice(P*t.pageSize,(P+1)*t.pageSize);o[m]||(o[m]={}),o[m][U]=N,t.$connector.doSelection(N.filter(J=>J.selected)),t.$connector.doDeselection(N.filter(J=>!J.selected&&w[J.key]));const et=dt(U,m);et&&(tt(et),gt(et))}});const Tt=function(u){let v=u.parentUniqueKey||y;if(o[v]){for(let f in o[v])for(let m in o[v][f])if(t.getItemId(o[v][f][m])===t.getItemId(u))return{page:f,index:m,parentKey:v}}return null};t.$connector.updateHierarchicalData=r(function(u){let v=[];for(let m=0;m<u.length;m++){let b=Tt(u[m]);if(b){o[b.parentKey][b.page][b.index]=u[m];let E=b.parentKey+":"+b.page;v[E]||(v[E]={parentKey:b.parentKey,page:b.page})}}let f=Object.keys(v);for(let m=0;m<f.length;m++){let b=v[f[m]];const E=dt(b.page,b.parentKey);E&&(tt(E),gt(E))}}),t.$connector.updateFlatData=r(function(u){for(let v=0;v<u.length;v++){let f=Tt(u[v]);if(f){o[f.parentKey][f.page][f.index]=u[v];const m=parseInt(f.page)*t.pageSize+parseInt(f.index),{rootCache:b}=e;b.items[m]&&(b.items[m]=u[v])}}tt(u),gt(u)}),t.$connector.clearExpanded=r(function(){t.expandedItems=[],d=[],h=[]}),t.$connector.clear=r(function(u,v,f){let m=f||y;if(!o[m]||Object.keys(o[m]).length===0)return;if(u%t.pageSize!=0)throw"Got cleared data for index "+u+" which is not aligned with the page size of "+t.pageSize;let b=Math.floor(u/t.pageSize),E=Math.ceil(v/t.pageSize);for(let N=0;N<E;N++){let et=b+N,J=o[m][et];t.$connector.doDeselection(J.filter(S=>w[S.key])),J.forEach(S=>t.closeItemDetails(S)),delete o[m][et];const B=dt(et,f);B&&tt(B),gt(J)}let P=e.rootCache;if(f){const N=F(m);P=e.getItemContext(N).subCache}const U=u+E*t.pageSize;for(let N=u;N<U;N++)delete P.items[N],P.removeSubCache(N);wt()}),t.$connector.reset=r(function(){t.size=0,It(o),It(e.rootCache.items),It(M),p&&p.cancel(),c&&c.cancel(),g&&g.cancel(),p=void 0,c=void 0,d=[],h=[],_t()});const It=u=>Object.keys(u).forEach(v=>delete u[v]);t.$connector.updateSize=u=>t.size=u,t.$connector.updateUniqueItemIdPath=u=>t.itemIdPath=u,t.$connector.expandItems=r(function(u){let v=Array.from(t.expandedItems);u.filter(f=>!t._isExpanded(f)).forEach(f=>v.push(f)),t.expandedItems=v}),t.$connector.collapseItems=r(function(u){let v=Array.from(t.expandedItems);u.forEach(f=>{let m=t._getItemIndexInArray(f,v);m>=0&&v.splice(m,1)}),t.expandedItems=v,u.forEach(f=>t.$connector.removeFromQueue(f))}),t.$connector.removeFromQueue=r(function(u){let v=t.getItemId(u);Object.values(a[v]||{}).forEach(f=>f([])),delete a[v],d=d.filter(f=>f.itemkey!==v),h=h.filter(f=>f.parentKey!==v)}),t.$connector.confirmParent=r(function(u,v,f){o[v]||(o[v]={});const m=o[v].size!==f;o[v].size=f,f===0&&(o[v][0]=[]);let b=Object.getOwnPropertyNames(a[v]||{});for(let E=0;E<b.length;E++){let P=b[E],U=M[v]||[0,0];const N=a[v][P];if(o[v]&&o[v][P]||P<U[0]||P>U[1]){delete a[v][P];let et=o[v][P]||new Array(f);N(et,f)}else N&&f===0&&(delete a[v][P],N([],f))}if(m&&b.length===0){const E=F(v),P=e.getItemContext(E);P&&P.subCache&&(P.subCache.size=f),wt()}t.$server.confirmParentUpdate(u,v),t.loading||(t.__confirmParentUpdateDebouncer=Rt.debounce(t.__confirmParentUpdateDebouncer,Vo,()=>t.__updateVisibleRows()))}),t.$connector.confirm=r(function(u){let v=Object.getOwnPropertyNames(n);for(let f=0;f<v.length;f++){let m=v[f],b=M[y]||[0,0];const E=t.size?Math.ceil(t.size/t.pageSize)-1:0,P=Math.min(b[1],E),U=n[m];o[y]&&o[y][m]||m<b[0]||+m>P?(delete n[m],o[y][m]?U(o[y][m]):(U(new Array(t.pageSize)),t.requestContentUpdate())):U&&t.size===0&&(delete n[m],U([]))}Object.keys(n).length&&delete M[y],t.$server.confirmUpdate(u)}),t.$connector.ensureHierarchy=r(function(){for(let u in o)u!==y&&delete o[u];It(M),e.rootCache.removeSubCaches(),_t()}),t.$connector.setSelectionMode=r(function(u){if((typeof u=="string"||u instanceof String)&&x.indexOf(u)>=0)k=u,w={},t.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),t.$connector.updateMultiSelectable=r(function(){t.$&&(k===x[0]?t.$.table.setAttribute("aria-multiselectable",!1):k===x[1]?t.$.table.removeAttribute("aria-multiselectable"):t.$.table.setAttribute("aria-multiselectable",!0))}),t._createPropertyObserver("isAttached",()=>t.$connector.updateMultiSelectable());const Q=u=>v=>{u&&(u(v),u=null)};t.$connector.setHeaderRenderer=r(function(u,v){const{content:f,showSorter:m,sorterPath:b}=v;if(f===null){u.headerRenderer=null;return}u.headerRenderer=Q(E=>{E.innerHTML="";let P=E;if(m){const U=document.createElement("vaadin-grid-sorter");U.setAttribute("path",b);const N=f instanceof Node?f.textContent:f;N&&U.setAttribute("aria-label",`Sort by ${N}`),E.appendChild(U),P=U}f instanceof Node?P.appendChild(f):P.textContent=f})}),t.__applySorters=()=>{const u=t._mapSorters(),v=JSON.stringify(t._previousSorters)!==JSON.stringify(u);t._previousSorters=u,Ie.prototype.__applySorters.call(t),v&&!W&&t.$server.sortersChanged(u)},t.$connector.setFooterRenderer=r(function(u,v){const{content:f}=v;if(f===null){u.footerRenderer=null;return}u.footerRenderer=Q(m=>{m.innerHTML="",f instanceof Node?m.appendChild(f):m.textContent=f})}),t.addEventListener("vaadin-context-menu-before-open",r(function(u){const{key:v,columnId:f}=u.detail;t.$server.updateContextMenuTargetItem(v,f)})),t.getContextMenuBeforeOpenDetail=r(function(u){const v=u.detail.sourceEvent||u,f=t.getEventContext(v),m=f.item&&f.item.key||"",b=f.column&&f.column.id||"";return{key:m,columnId:b}}),t.addEventListener("click",r(u=>it(u,"item-click"))),t.addEventListener("dblclick",r(u=>it(u,"item-double-click"))),t.addEventListener("column-resize",r(u=>{t._getColumnsInOrder().filter(f=>!f.hidden).forEach(f=>{f.dispatchEvent(new CustomEvent("column-drag-resize"))}),t.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:u.detail.resizedColumn._flowId}}))})),t.addEventListener("column-reorder",r(u=>{const v=t._columnTree.slice(0).pop().filter(f=>f._flowId).sort((f,m)=>f._order-m._order).map(f=>f._flowId);t.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:v}}))})),t.addEventListener("cell-focus",r(u=>{const v=t.getEventContext(u);["header","body","footer"].indexOf(v.section)!==-1&&t.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:v.item?v.item.key:null,internalColumnId:v.column?v.column._flowId:null,section:v.section}}))}));function it(u,v){if(u.defaultPrevented)return;const f=u.target;if(Jl(f)||f instanceof HTMLLabelElement)return;const m=t.getEventContext(u),b=m.section;m.item&&b!=="details"&&(u.itemKey=m.item.key,m.column&&(u.internalColumnId=m.column._flowId),t.dispatchEvent(new CustomEvent(v,{detail:u})))}t.cellClassNameGenerator=r(function(u,v){const f=v.item.style;if(f)return(f.row||"")+" "+(u&&f[u._flowId]||"")}),t.cellPartNameGenerator=r(function(u,v){const f=v.item.part;if(f)return(f.row||"")+" "+(u&&f[u._flowId]||"")}),t.dropFilter=r(u=>u.item&&!u.item.dropDisabled),t.dragFilter=r(u=>u.item&&!u.item.dragDisabled),t.addEventListener("grid-dragstart",r(u=>{t._isSelected(u.detail.draggedItems[0])?(t.__selectionDragData?Object.keys(t.__selectionDragData).forEach(v=>{u.detail.setDragData(v,t.__selectionDragData[v])}):(t.__dragDataTypes||[]).forEach(v=>{u.detail.setDragData(v,u.detail.draggedItems.map(f=>f.dragData[v]).join(`
`))}),t.__selectionDraggedItemsCount>1&&u.detail.setDraggedItemsCount(t.__selectionDraggedItemsCount)):(t.__dragDataTypes||[]).forEach(v=>{u.detail.setDragData(v,u.detail.draggedItems[0].dragData[v])})}))})(i)}})();function n5({currentTarget:r}){r.disabled=r.hasAttribute("disableOnClick")}window.Vaadin.Flow.button={initDisableOnClick:r=>{r.__hasDisableOnClickListener||(r.addEventListener("click",n5),r.__hasDisableOnClickListener=!0)}};(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Menu Bar")};function i(e,n){if(e.$connector)return;const a=new MutationObserver(o=>{o.some(l=>{const h=l.oldValue,c=l.target.getAttribute(l.attributeName);return h!==c})&&e.$connector.generateItems()});e.$connector={generateItems:r(o=>{if(!e.shadowRoot){setTimeout(()=>e.$connector.generateItems(o));return}o&&(e.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(n,o));let s=e.__generatedItems||[];s.forEach(l=>l.disabled=l.component.disabled),s.forEach(l=>{a.observe(l.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),s=s.filter(l=>!l.component.hidden),e.items=s,e._buttons.forEach(l=>{l.item&&l.item.component&&l.addEventListener("click",h=>{h.composedPath().indexOf(l.item.component)===-1&&(l.item.component.click(),h.stopPropagation())})})})}}function t(e){e._item&&(e._item.className=e.className)}window.Vaadin.Flow.menubarConnector={initLazy(...e){return r(i)(...e)},setClassName(...e){return r(t)(...e)}}})();const a5=z`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-menu-bar-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([slot='overflow']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([slot='overflow']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([slot='overflow']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([slot='overflow']) [part='prefix'],
  :host([slot='overflow']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][slot='overflow']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;C("vaadin-menu-bar-button",[_l,a5],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-menu-bar-button",z`
    :host {
      flex-shrink: 0;
    }

    :host([slot='overflow']) {
      margin-inline-end: 0;
    }

    [part='label'] ::slotted(vaadin-menu-bar-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class o5 extends gl{static get is(){return"vaadin-menu-bar-button"}}A(o5);const s5=z`
  [part='content'] {
    display: flex;
    /* tweak to inherit centering from menu bar button */
    align-items: inherit;
    justify-content: inherit;
  }

  [part='content'] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: var(--lumo-space-xs);
    box-sizing: border-box !important;
  }
`;C("vaadin-menu-bar-item",[kr,Ul,s5],{moduleId:"lumo-menu-bar-item"});C("vaadin-menu-bar-list-box",[ko,Yl],{moduleId:"lumo-menu-bar-list-box"});const l5=z`
  :host(:first-of-type) {
    padding-top: var(--lumo-space-xs);
  }
`;C("vaadin-menu-bar-overlay",[Rr,ql,l5],{moduleId:"lumo-menu-bar-overlay"});C("vaadin-menu-bar",z`
    :host([has-single-button]) ::slotted(vaadin-menu-bar-button) {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) ::slotted(vaadin-menu-bar-button:first-of-type),
    :host([theme~='end-aligned'][has-single-button]) ::slotted(vaadin-menu-bar-button) {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class h5 extends jl(V(ot(O))){static get is(){return"vaadin-menu-bar-item"}static get template(){return R`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem")}}A(h5);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class c5 extends Kl(V(ot(ct(O)))){static get is(){return"vaadin-menu-bar-list-box"}static get template(){return R`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}A(c5);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-menu-bar-overlay",[je,Xl],{moduleId:"vaadin-menu-bar-overlay-styles"});class d5 extends Ql(qe(ot(V(O)))){static get is(){return"vaadin-menu-bar-overlay"}static get template(){return R`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}A(d5);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class u5 extends Zl{static get is(){return"vaadin-menu-bar-submenu"}static get template(){return R`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}constructor(){super(),this.openOn="opensubmenu"}get _tagNamePrefix(){return"vaadin-menu-bar"}_openedChanged(i){this._overlayElement.opened=i}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}A(u5);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const p5=r=>class extends Gl(Io(_e(Ke(ct(r))))){static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})},overlayClass:{type:String},openOnHover:{type:Boolean},_hasOverflow:{type:Boolean,value:!1},_overflow:{type:Object},_container:{type:Object}}}static get observers(){return["_themeChanged(_theme, _overflow, _container)","__hasOverflowChanged(_hasOverflow, _overflow)","__i18nChanged(i18n, _overflow)","_menuItemsChanged(items, _overflow, _container)"]}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}get focused(){return(this._getItems()||[]).find(Nr)||this._expandedButton}get _vertical(){return!1}get _observeParent(){return!0}get _buttons(){return Array.from(this.querySelectorAll("vaadin-menu-bar-button"))}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}ready(){super.ready(),this.setAttribute("role","menubar"),this._overflowController=new Pt(this,"overflow","vaadin-menu-bar-button",{initializer:n=>{n.setAttribute("hidden","");const a=document.createElement("div");a.setAttribute("aria-hidden","true"),a.innerHTML="&centerdot;".repeat(3),n.appendChild(a),this._overflow=n,this._initButtonAttrs(n)}}),this.addController(this._overflowController),this.addEventListener("mousedown",()=>this._hideTooltip()),this.addEventListener("mouseleave",()=>this._hideTooltip()),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),this._subMenu._overlayElement.addEventListener("keydown",this.__boundOnContextMenuKeydown);const e=this.shadowRoot.querySelector('[part="container"]');e.addEventListener("click",this.__onButtonClick.bind(this)),e.addEventListener("mouseover",n=>this._onMouseOver(n)),this._container=e}_getItems(){return this._buttons}disconnectedCallback(){super.disconnectedCallback(),this._hideTooltip(!0)}_onResize(){this.__detectOverflow()}_disabledChanged(t,e){super._disabledChanged(t,e),e!==t&&this.__updateButtonsDisabled(t)}_themeChanged(t,e,n){e&&n&&(this._buttons.forEach(a=>this._setButtonTheme(a,t)),this.__detectOverflow()),t?this._subMenu.setAttribute("theme",t):this._subMenu.removeAttribute("theme")}__hasOverflowChanged(t,e){e&&e.toggleAttribute("hidden",!t)}_menuItemsChanged(t,e,n){if(!e||!n)return;t!==this._oldItems&&(this._oldItems=t,this.__renderButtons(t));const a=this._subMenu;a&&a.opened&&a.close()}__i18nChanged(t,e){e&&t&&t.moreOptions!==void 0&&(t.moreOptions?e.setAttribute("aria-label",t.moreOptions):e.removeAttribute("aria-label"))}__getOverflowCount(t){return t.item&&t.item.children&&t.item.children.length||0}__restoreButtons(t){t.forEach(e=>{e.disabled=e.item&&e.item.disabled||this.disabled,e.style.visibility="",e.style.position="";const n=e.item&&e.item.component;n instanceof HTMLElement&&n.getAttribute("role")==="menuitem"&&this.__restoreItem(e,n)}),this.__updateOverflow([])}__restoreItem(t,e){t.appendChild(e),e.removeAttribute("role"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-haspopup"),e.removeAttribute("tabindex")}__updateButtonsDisabled(t){this._buttons.forEach(e=>{e.disabled=t||e.item&&e.item.disabled})}__updateOverflow(t){this._overflow.item={children:t},this._hasOverflow=t.length>0}__setOverflowItems(t,e){const n=this._container;if(n.offsetWidth<n.scrollWidth){this._hasOverflow=!0;const a=this.__isRTL,o=n.getBoundingClientRect().left;let s;for(s=t.length;s>0;s--){const c=t[s-1],d=getComputedStyle(c),p=c.getBoundingClientRect().left-o;if(!a&&p+c.offsetWidth<n.offsetWidth-e.offsetWidth||a&&p>=e.offsetWidth)break;c.disabled=!0,c.style.visibility="hidden",c.style.position="absolute",c.style.width=d.width}const l=t.filter((c,d)=>d>=s).map(c=>c.item);this.__updateOverflow(l);const h=t.slice(0,s);s>0&&!h.some(c=>c.getAttribute("tabindex")==="0")&&this._setTabindex(h[s-1],!0)}}__detectOverflow(){const t=this._overflow,e=this._buttons.filter(s=>s!==t),n=this.__getOverflowCount(t);this.__restoreButtons(e),this.__setOverflowItems(e,t);const a=this.__getOverflowCount(t);n!==a&&this._subMenu.opened&&this._subMenu.close();const o=a===e.length||a===0&&e.length===1;this.toggleAttribute("has-single-button",o)}_removeButtons(){this._buttons.forEach(t=>{t!==this._overflow&&this.removeChild(t)})}_initButton(t){const e=document.createElement("vaadin-menu-bar-button"),n={...t};if(e.item=n,t.component){const a=this.__getComponent(n);n.component=a,a.item=n,e.appendChild(a)}else t.text&&(e.textContent=t.text);return t.className&&(e.className=t.className),e}_initButtonAttrs(t){t.setAttribute("role","menuitem"),(t===this._overflow||t.item&&t.item.children)&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"))}_setButtonDisabled(t,e){t.disabled=e,t.setAttribute("tabindex",e?"-1":"0")}_setButtonTheme(t,e){let n=e;const a=t.item&&t.item.theme;a!=null&&(n=Array.isArray(a)?a.join(" "):a),n?t.setAttribute("theme",n):t.removeAttribute("theme")}__getComponent(t){const e=t.component;let n;const a=e instanceof HTMLElement;if(a&&e.localName==="vaadin-menu-bar-item"?n=e:(n=document.createElement("vaadin-menu-bar-item"),n.appendChild(a?e:document.createElement(e))),t.text){const o=n.firstChild||n;o.textContent=t.text}return n}__renderButtons(t=[]){this._removeButtons(),t.length!==0&&(t.forEach(e=>{const n=this._initButton(e);this.insertBefore(n,this._overflow),this._setButtonDisabled(n,e.disabled),this._initButtonAttrs(n),this._setButtonTheme(n,this._theme)}),this.__detectOverflow())}_showTooltip(t,e){const n=this._tooltipController.node;n&&n.isConnected&&(n.generator===void 0&&(n.generator=({item:a})=>a&&a.tooltip),this._subMenu.opened||(this._tooltipController.setTarget(t),this._tooltipController.setContext({item:t.item}),n._stateController.open({hover:e,focus:!e})))}_hideTooltip(t){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(t)}_setExpanded(t,e){t.toggleAttribute("expanded",e),t.toggleAttribute("active",e),t.setAttribute("aria-expanded",e?"true":"false")}_setTabindex(t,e){t.setAttribute("tabindex",e?"0":"-1")}_focusItem(t,e){const n=e&&this.focused===this._expandedButton;n&&this._close(),super._focusItem(t,e),this._buttons.forEach(a=>{this._setTabindex(a,a===t)}),n&&t.item&&t.item.children?this.__openSubMenu(t,!0,{keepFocus:!0}):t===this._overflow?this._hideTooltip():this._showTooltip(t)}_getButtonFromEvent(t){return Array.from(t.composedPath()).find(e=>e.localName==="vaadin-menu-bar-button")}_setFocused(t){if(t){const e=this.querySelector('[tabindex="0"]');e&&this._buttons.forEach(n=>{this._setTabindex(n,n===e),n===e&&n!==this._overflow&&Fr()&&this._showTooltip(n)})}else this._hideTooltip()}_onArrowDown(t){t.preventDefault();const e=this._getButtonFromEvent(t);e===this._expandedButton?this._focusFirstItem():this.__openSubMenu(e,!0)}_onArrowUp(t){t.preventDefault();const e=this._getButtonFromEvent(t);e===this._expandedButton?this._focusLastItem():this.__openSubMenu(e,!0,{focusLast:!0})}_onEscape(t){t.composedPath().includes(this._expandedButton)&&this._close(!0),this._hideTooltip(!0)}_onKeyDown(t){switch(t.key){case"ArrowDown":this._onArrowDown(t);break;case"ArrowUp":this._onArrowUp(t);break;default:super._onKeyDown(t);break}}_onMouseOver(t){const e=this._getButtonFromEvent(t);if(!e)this._hideTooltip();else if(e!==this._expandedButton){const n=this._subMenu.opened;e.item.children&&(this.openOnHover||n)?this.__openSubMenu(e,!1):n&&this._close(),e===this._overflow||this.openOnHover&&e.item.children?this._hideTooltip():this._showTooltip(e,!0)}}__onContextMenuKeydown(t){const e=Array.from(t.composedPath()).find(n=>n._item);if(e){const n=e.parentNode;t.keyCode===38&&e===n.items[0]&&this._close(!0),(t.keyCode===37||t.keyCode===39&&!e._item.children)&&(t.stopImmediatePropagation(),this._onKeyDown(t))}}__fireItemSelected(t){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:t}}))}__onButtonClick(t){t.stopPropagation();const e=this._getButtonFromEvent(t);e&&this.__openSubMenu(e,!1)}__openSubMenu(t,e,n={}){const a=this._subMenu,o=t.item;if(a.opened&&(this._close(),a.listenOn===t))return;const s=o&&o.children;if(!s||s.length===0){this.__fireItemSelected(o);return}a.items=s,a.listenOn=t;const l=a._overlayElement;l.positionTarget=t,l.noVerticalOverlap=!0,this._expandedButton=t,requestAnimationFrame(()=>{t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:s}})),this._hideTooltip(!0),this._setExpanded(t,!0)}),this.style.pointerEvents="auto",l.addEventListener("vaadin-overlay-open",()=>{n.focusLast&&this._focusLastItem(),n.keepFocus&&this._focusItem(this._expandedButton,!1),e||l.$.overlay.focus(),l._updatePosition()},{once:!0})}_focusFirstItem(){this._subMenu._overlayElement.firstElementChild.focus()}_focusLastItem(){const t=this._subMenu._overlayElement.firstElementChild,e=t.items[t.items.length-1];e&&e.focus()}__onItemSelected(t){t.stopPropagation(),this.__fireItemSelected(t.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(t){const e=this._expandedButton;e&&e.hasAttribute("expanded")&&(this._setExpanded(e,!1),t&&this._focusItem(e,!1),this._expandedButton=null)}_close(t){this.style.pointerEvents="",this.__deactivateButton(t),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class f5 extends p5(ft(V(O))){static get template(){return R`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      </style>

      <div part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-menu-bar-submenu is-root overlay-class="[[overlayClass]]"></vaadin-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-menu-bar"}ready(){super.ready(),this._tooltipController=new Vt(this),this._tooltipController.setManual(!0),this.addController(this._tooltipController)}}A(f5);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const v5=r=>class extends rl(r){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(i,t){i==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(i)&&this._updateFlexAndWidth(),i==="frozen"&&!this.frozen&&(this.frozen=t),i==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=t),i==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=t),i==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=t)}_groupOrderChanged(i,t){if(t){const e=t.slice(0);if(!i){e.forEach(s=>{s._order=0});return}const n=/(0+)$/u.exec(i).pop().length,a=~~(Math.log(t.length)/Math.LN10)+1,o=10**(n-a);e[0]&&e[0]._order&&e.sort((s,l)=>s._order-l._order),il(e,o,i)}}_groupReorderStatusChanged(i,t){i===void 0||t===void 0||t.forEach(e=>{e._reorderStatus=i})}_groupResizableChanged(i,t){i===void 0||t===void 0||t.forEach(e=>{e.resizable=i})}_updateVisibleChildColumns(i){this._visibleChildColumns=Array.prototype.filter.call(i,t=>!t.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const i=this._visibleChildColumns.reduce((t,e)=>(t+=` + ${(e.width||"0px").replace("calc","")}`,t),"").substring(3);this._setWidth(`calc(${i})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(i,t)=>i+t.flexGrow,0))}}__scheduleAutoFreezeWarning(i,t){if(this._grid){const e=t.replace(/([A-Z])/gu,"-$1").toLowerCase(),n=i[0][t]||i[0].hasAttribute(e);i.every(o=>(o[t]||o.hasAttribute(e))===n)||(this._grid.__autoFreezeWarningDebouncer=I.debounce(this._grid.__autoFreezeWarningDebouncer,At,()=>{console.warn(`WARNING: Joining ${t} and non-${t} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${t}. Otherwise, exclude the ${t} columns from the joined group.`)}))}}_groupFrozenChanged(i,t){t===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(t,"frozen"),Array.from(t).forEach(e=>{e.frozen=i}))}_groupFrozenToEndChanged(i,t){t===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(t,"frozenToEnd"),Array.from(t).forEach(e=>{e.frozenToEnd=i}))}_groupHiddenChanged(i){(i||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const i=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(i||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(i=>{i.hidden=this.hidden})}_colSpanChanged(i,t,e){t&&(t.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(t,i)),e&&(e.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(e,i))}_getChildColumns(i){return Lt.getColumns(i)}_addNodeObserver(){this._observer=new Lt(this,()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()}),this._observer.flush()}_isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _5 extends v5(O){static get is(){return"vaadin-grid-column-group"}}A(_5);const Tr=window;Tr.Vaadin=Tr.Vaadin||{};Tr.Vaadin.setLitRenderer=(r,i,t,e,n,a)=>{const o=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, model, itemKey) => {
      const { item, index } = model;
      ${n.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${t}\`, root)
    }
  `)(Ka,j0,e),s=(l,h,c)=>{const{item:d}=c;l.__litRenderer!==s&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=s);const p={};for(const _ in d)_.startsWith(a)&&(p[_.replace(a,"")]=d[_]);o(l,{...c,item:p},d.key)};s.__rendererId=a,r[i]=s};Tr.Vaadin.unsetLitRenderer=(r,i,t)=>{var e;((e=r[i])==null?void 0:e.__rendererId)===t&&(r[i]=void 0)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ht("color",O1);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const m5=z`
  ${G0(T1.cssText.replace(/,\s*:host/su,""))}
`;Ht("typography",m5);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nh=document.createElement("template");nh.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;se.register("lumo",1e3,nh);const g5=r=>{const i=[];return r==="04b2cca43b3f400e2ac1a265fb5a013775f43707b4ff050b3c4ca1c8af4b5e51"&&i.push(lh(()=>import("./chunk-a0429a17d78fc0dfd8ba30901d6039b7b3d57a9ec2d79dbf7971283a682aa676-fBvo1wzu.js"),__vite__mapDeps([0,1]),import.meta.url)),Promise.all(i)};window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.loadOnDemand=g5;window.Vaadin.Flow.resetFocus=()=>{let r=document.activeElement;for(;r&&r.shadowRoot;)r=r.shadowRoot.activeElement;return!r||r.blur()||r.focus()||!0};const Bm=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Co as A,wd as B,t5 as C,ot as D,ft as E,Ou as F,$r as G,Td as H,Yr as I,Id as J,me as K,J1 as L,iu as M,du as N,qe as O,O as P,Zt as Q,Io as R,K1 as S,V as T,Ru as U,$u as V,bo as W,yo as X,Pt as Y,Tm as Z,Bm as _,je as a,jr as b,oo as c,A as d,fo as e,qr as f,ct as g,R as h,Qt as i,k1 as j,Cd as k,_e as l,Ke as m,Vt as n,Dr as o,Gr as p,Wr as q,C as r,Ge as s,Hr as t,I1 as u,kr as v,yd as w,so as x,zd as y,bd as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./chunk-a0429a17d78fc0dfd8ba30901d6039b7b3d57a9ec2d79dbf7971283a682aa676-fBvo1wzu.js","./indexhtml-sLPHwCpt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}