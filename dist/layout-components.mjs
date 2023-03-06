function e(e){return Object.keys(e).reduce(((t,n)=>{const s=e[n];var o;return t[n]=Object.assign({},s),r(s.value)&&(o=s.value,"[object Function]"!==Object.prototype.toString.call(o))&&!Array.isArray(s.value)&&(t[n].value=Object.assign({},s.value)),Array.isArray(s.value)&&(t[n].value=s.value.slice(0)),t}),{})}function t(e){if(e)try{return JSON.parse(e)}catch(t){return e}}function n(e,t,n){if(null==n||!1===n)return e.removeAttribute(t);let r=JSON.stringify(n);e.__updating[t]=!0,"true"===r&&(r=""),e.setAttribute(t,r),Promise.resolve().then((()=>delete e.__updating[t]))}function r(e){return null!=e&&("object"==typeof e||"function"==typeof e)}let s;function o(r,o){const l=Object.keys(o);return class extends r{static get observedAttributes(){return l.map((e=>o[e].attribute))}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=function(r,s){const o=e(s);return Object.keys(s).forEach((e=>{const s=o[e],l=r.getAttribute(s.attribute),i=r[e];l&&(s.value=s.parse?t(l):l),null!=i&&(s.value=Array.isArray(i)?i.slice(0):i),s.reflect&&n(r,s.attribute,s.value),Object.defineProperty(r,e,{get:()=>s.value,set(t){const r=s.value;s.value=t,s.reflect&&n(this,s.attribute,s.value);for(let n=0,s=this.__propertyChangedCallbacks.length;n<s;n++)this.__propertyChangedCallbacks[n](e,t,r)},enumerable:!0,configurable:!0})})),o}(this,o);const r=function(e){return Object.keys(e).reduce(((t,n)=>(t[n]=e[n].value,t)),{})}(this.props),l=this.Component,i=s;try{s=this,this.__initialized=!0,"function"==typeof(u=l)&&0===u.toString().indexOf("class")?new l(r,{element:this}):l(r,{element:this})}finally{s=i}var u}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let e=null;for(;e=this.__releaseCallbacks.pop();)e(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(e,n,r){if(this.__initialized&&!this.__updating[e]&&(e=this.lookupProp(e))in o){if(null==r&&!this[e])return;this[e]=o[e].parse?t(r):r}}lookupProp(e){if(o)return l.find((t=>e===t||e===o[t].attribute))}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(e){this.__releaseCallbacks.push(e)}addPropertyChangedCallback(e){this.__propertyChangedCallbacks.push(e)}}}function l(e,t={},n={}){const{BaseElement:s=HTMLElement,extension:l}=n;return n=>{if(!e)throw new Error("tag is required to register a Component");let i=customElements.get(e);return i?(i.prototype.Component=n,i):(i=o(s,function(e){return e?Object.keys(e).reduce(((t,n)=>{const s=e[n];return t[n]=r(s)&&"value"in s?s:{value:s},t[n].attribute||(t[n].attribute=n.replace(/\.?([A-Z]+)/g,((e,t)=>"-"+t.toLowerCase())).replace("_","-").replace(/^-/,"")),t[n].parse="parse"in t[n]?t[n].parse:"string"!=typeof t[n].value,t}),{}):{}}(t)),i.prototype.Component=n,i.prototype.registeredTag=e,customElements.define(e,i,l),i)}}const i={},u={equals:(e,t)=>e===t};let a=j;const c=1,f=2,d={owned:null,cleanups:null,context:null,owner:null};var h=null;let p=null,g=null,b=null,y=null,v=0;function _(e,t){const n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},u,t):u).equals||void 0};return[x.bind(n),e=>("function"==typeof e&&(e=e(n.value)),A(n,e))]}function C(e,t,n){const r=function(e,t,n,r=c,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};null===h||h!==d&&(h.owned?h.owned.push(o):h.owned=[o]);return o}(e,t,!1,c);S(r)}function w(e){if(null===g)return e();const t=g;g=null;try{return e()}finally{g=t}}function m(){return h}function x(){const e=p;if(this.sources&&(this.state||e))if(this.state===c||e)S(this);else{const e=b;b=null,N((()=>O(this)),!1),b=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function A(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&N((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=p&&p.running;r&&p.disposed.has(n),(r&&!n.tState||!r&&!n.state)&&(n.pure?b.push(n):y.push(n),n.observers&&E(n)),r||(n.state=c)}if(b.length>1e6)throw b=[],new Error}),!1)),t}function S(e){if(!e.fn)return;T(e);const t=h,n=g,r=v;g=h=e,function(e,t,n){let r;try{r=e.fn(t)}catch(t){e.pure&&(e.state=c,e.owned&&e.owned.forEach(T),e.owned=null),B(t)}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?A(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),g=n,h=t}function k(e){const t=p;if(0===e.state||t)return;if(e.state===f||t)return O(e);if(e.suspense&&w(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<v);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if((e=n[r]).state===c||t)S(e);else if(e.state===f||t){const t=b;b=null,N((()=>O(e,n[0])),!1),b=t}}function N(e,t){if(b)return e();let n=!1;t||(b=[]),y?n=!0:y=[],v++;try{const t=e();return function(e){b&&(j(b),b=null);if(e)return;const t=y;y=null,t.length&&N((()=>a(t)),!1)}(n),t}catch(e){n||(y=null),b=null,B(e)}}function j(e){for(let t=0;t<e.length;t++)k(e[t])}function O(e,t){const n=p;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===c||n?s!==t&&k(s):(s.state===f||n)&&O(s,t))}}function E(e){const t=p;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];r.state&&!t||(r.state=f,r.pure?b.push(r):y.push(r),r.observers&&E(r))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),s=t.observerSlots.pop();n<r.length&&(e.sourceSlots[s]=n,r[n]=e,t.observerSlots[n]=s)}}if(e.owned){for(t=0;t<e.owned.length;t++)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function B(e){throw e=function(e){return e instanceof Error||"string"==typeof e?e:new Error("Unknown error")}(e)}function P(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function $(e,t,n,r,s){for(i.context&&!n&&(n=[...e.childNodes]);"function"==typeof n;)n=n();if(t===n)return n;const o=typeof t,l=void 0!==r;if(e=l&&n[0]&&n[0].parentNode||e,"string"===o||"number"===o){if(i.context)return n;if("number"===o&&(t=t.toString()),l){let s=n[0];s&&3===s.nodeType?s.data=t:s=document.createTextNode(t),n=q(e,n,r,s)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===o){if(i.context)return n;n=q(e,n,r)}else{if("function"===o)return C((()=>{let s=t();for(;"function"==typeof s;)s=s();n=$(e,s,n,r)})),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(R(o,t,n,s))return C((()=>n=$(e,o,n,r,!0))),()=>n;if(i.context){if(!o.length)return n;for(let e=0;e<o.length;e++)if(o[e].parentNode)return n=o}if(0===o.length){if(n=q(e,n,r),l)return n}else u?0===n.length?z(e,o,r):function(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,u=t[s-1].nextSibling,a=null;for(;l<s||i<o;)if(t[l]!==n[i]){for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const t=o<r?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],t)}else if(o===i)for(;l<s;)a&&a.has(t[l])||t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const r=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],r),t[s]=n[o]}else{if(!a){a=new Map;let e=i;for(;e<o;)a.set(n[e],e++)}const r=a.get(t[l]);if(null!=r)if(i<r&&r<o){let u,c=l,f=1;for(;++c<s&&c<o&&null!=(u=a.get(t[c]))&&u===r+f;)f++;if(f>r-i){const s=t[l];for(;i<r;)e.insertBefore(n[i++],s)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(e,n,o):(n&&q(e),z(e,o));n=o}else if(t instanceof Node){if(i.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=q(e,n,r,t);q(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function R(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let l=t[o],i=n&&n[o];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))s=R(e,l,i)||s;else if("function"==typeof l)if(r){for(;"function"==typeof l;)l=l();s=R(e,Array.isArray(l)?l:[l],Array.isArray(i)?i:[i])||s}else e.push(l),s=!0;else{const t=String(l);i&&3===i.nodeType&&i.data===t?e.push(i):e.push(document.createTextNode(t))}}return s}function z(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function q(e,t,n,r){if(void 0===n)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const t=l.parentNode===e;r||o?t&&l.remove():t?e.replaceChild(s,l):e.insertBefore(s,n)}else r=!0}}else e.insertBefore(s,n);return[s]}function L(e){return(t,n)=>{const{element:r}=n;return function(e,t){const n=g,r=h,s=0===e.length,o=s?d:{owned:null,cleanups:null,context:null,owner:void 0===t?r:t},l=s?e:()=>e((()=>w((()=>T(o)))));h=o,g=null;try{return N(l,!0)}finally{g=n,h=r}}((s=>{const o=function(e){const t=Object.keys(e),n={};for(let r=0;r<t.length;r++){const[s,o]=_(e[t[r]]);Object.defineProperty(n,t[r],{get:s,set(e){o((()=>e))}})}return n}(t);r.addPropertyChangedCallback(((e,t)=>o[e]=t)),r.addReleaseCallback((()=>{r.renderRoot.textContent="",s()}));const l=e(o,n);return function(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return $(e,t,r,n);C((r=>$(e,t(),r,n)),r)}(r.renderRoot,l)}),function(e){if(e.assignedSlot&&e.assignedSlot._$owner)return e.assignedSlot._$owner;let t=e.parentNode;for(;t&&!t._$owner&&(!t.assignedSlot||!t.assignedSlot._$owner);)t=t.parentNode;return t&&t.assignedSlot?t.assignedSlot._$owner:e._$owner}(r))}}function M(e,t,n){return 2===arguments.length&&(n=t,t={}),l(e,t)(L(n))}const F=P("<style>.hbox-container {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-evenly;\n        align-items: baseline;\n        height: 100%;\n        width: 100%;\n}</style>"),H=P('<div class="hbox-container"><slot><code>This is where you place children</code></slot></div>');function J(){return[F.cloneNode(!0),(()=>{const e=H.cloneNode(!0);return e.firstChild._$owner=m(),e})()]}const U=P("<style>.vbox-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: baseline;\n        height: 100%;\n        width: 100%;\n}</style>"),Z=P('<div class="vbox-container"><slot><code>This is where you place children</code></slot></div>');function D(){return[U.cloneNode(!0),(()=>{const e=Z.cloneNode(!0);return e.firstChild._$owner=m(),e})()]}M("hbox-container",J),M("vbox-container",D);
