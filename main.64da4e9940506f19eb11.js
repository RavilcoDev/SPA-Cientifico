(()=>{var t={757:(t,n,r)=>{t.exports=r(666)},666:t=>{var n=function(t){"use strict";var n,r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,r){return t[n]=r}}function u(t,n,r,e){var o=n&&n.prototype instanceof y?n:y,a=Object.create(o.prototype),i=new P(e||[]);return a._invoke=function(t,n,r){var e=l;return function(o,a){if(e===p)throw new Error("Generator is already running");if(e===v){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=p;var s=h(t,n,r);if("normal"===s.type){if(e=r.done?v:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(e=v,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function h(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(G([])));x&&x!==r&&e.call(x,a)&&(w=x);var L=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function r(o,a,i,c){var s=h(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):n.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var e=t.iterator[r.method];if(e===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}return g.prototype=m,s(L,"constructor",m),s(m,"constructor",g),g.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(n,r,e,o,a){void 0===a&&(a=Promise);var i=new _(u(n,r,e,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return c.type="throw",c.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:G(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return r.d(n,{a:n}),n},r.d=(t,n)=>{for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";function t(t,n,r,e,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?n(s):Promise.resolve(s).then(e,o)}function n(n){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=n.apply(r,e);function c(n){t(i,o,a,c,s,"next",n)}function s(n){t(i,o,a,c,s,"throw",n)}c(void 0)}))}}var e=r(757),o=r.n(e);var a="https://rickandmortyapi.com/api/character/";const i=function(){var t=n(o().mark((function t(n){var r,e,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n?"".concat(a).concat(n):a,t.prev=1,t.next=4,fetch(r);case 4:return e=t.sent,t.next=7,e.json();case 7:return i=t.sent,t.abrupt("return",i);case 11:t.prev=11,t.t0=t.catch(1),console.error("Fetch error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}(),c=function(){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"},s=function(t){return t.length<=3?"/"===t?t:"/:id":"/".concat(t)};var u={"/":function(){var t=n(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:return n=t.sent,t.next=5,'\n    <div class="Characters">\n      '.concat(n.results.map((function(t){return'\n          <article class="Characters-item">\n            <a href="#/'.concat(t.id,'">\n              <img src="').concat(t.image,'" alt="').concat(t.name,'">\n              <div class="Characters-item-detail">\n                <h2>').concat(t.name,"</h2>\n              </div>\n            </a>\n          </article>\n      ")})).join(""),"\n    <div>\n    ");case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/:id":function(){var t=n(o().mark((function t(){var n,r,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c(),t.next=3,i(n);case 3:return r=t.sent,e='\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="'.concat(r.image,'" alt="').concat(r.name,'">\n        <h2>').concat(r.name,'</h2>\n      </article>\n      <article class="Characters-card">\n        <h3><b>Episodes:</b> <span>').concat(r.episode.length,"</span></h3>\n        <h3><b>Status:</b> <span>").concat(r.status,"</span></h3>\n        <h3><b>Species:</b> <span>").concat(r.species,"</span></h3>\n        <h3><b>Gender:</b> <span>").concat(r.gender,"</span></h3>\n        <h3><b>Origin:</b> <span>").concat(r.origin.name,"</span></h3>\n        <h3><b>Last Location:</b> ").concat(r.location.name,"</h3>\n      </article>\n    </div>\n  "),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/contact":"Contact","/about":function(){return'\n  <div class="contact__container--contact">\n    <a\n      href="https://www.linkedin.com/in/rafael-livise-larico-97b323151/"\n      class="social-link"\n      target="_blank"\n      ><span><i class="icon-linkedin"></i></span\n    ></a>\n    <a\n      href="https://twitter.com/rflivise"\n      class="social-link"\n      target="_blank"\n      ><span><i class="icon-twitter"></i></span\n    ></a>\n    <a\n      href="https://github.com/R-Livise"\n      class="social-link"\n      target="_blank"\n      ><span><i class="icon-github"></i></span\n    ></a>\n  </div>\n  '}};const h=function(){var t=n(o().mark((function t(){var n,r,e,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("header"),r=document.getElementById("content"),n.innerHTML='\n      <div class="Header-main">\n        <div class="Header-logo">\n          <h1>\n            <a href="#/">\n              100tifico.rf\n            </a>\n          </h1>\n        </div>\n      </div>\n      <div class="Header-nav">\n        <a href="#/about/">\n          About\n        </a>\n      </div>\n    ',e=c(),console.log(e),a=s(e),i=u[a]?u[a]:'\n      <div class="Error-404">\n          <h2>Error-404</h2>\n      <div>\n      ',console.log(i),t.next=10,i();case 10:r.innerHTML=t.sent;case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.addEventListener("load",h),window.addEventListener("hashchange",h)})()})();