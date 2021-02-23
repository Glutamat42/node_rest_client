!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.rest_api=t():e.rest_api=t()}(self,(function(){return(()=>{"use strict";var e={726:(e,t,r)=>{function n(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,s=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,u=e},f:function(){try{s||null==r.return||r.return()}finally{if(i)throw u}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r,n,a,o,u){try{var s=e[o](u),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function s(e){o(u,n,a,s,i,"next",e)}function i(e){o(u,n,a,s,i,"throw",e)}s(void 0)}))}}function s(e){return i.apply(this,arguments)}function i(){return(i=u(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t.url,{method:t.method,headers:new Headers(t.headers),body:t.data}).then((function(e){return c(e).then((function(r){var a={};if("function"==typeof Headers.prototype.forEach)e.headers.forEach((function(e,t){a[t]=e}));else if("function"==typeof Headers.prototype.keys){var o,u=n(e.headers.keys());try{for(u.s();!(o=u.n()).done;){var s=o.value;a[s]=e.headers.get(s)}}catch(e){u.e(e)}finally{u.f()}}else a=e.headers;var i={data:r,headers:a,method:t.method.toLowerCase(),statusCode:e.status};if(e.status>=200&&e.status<300)return i;var c=new Error(e.statusText);throw c.response=i,c}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.r(t),r.d(t,{default:()=>x});var c=function(e){return e.text().then((function(e){try{return JSON.parse(e)}catch(t){return e}}))};function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){s=!0,o=e},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r,n,a,o,u){try{var s=e[o](u),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){f(o,n,a,u,s,"next",e)}function s(e){f(o,n,a,u,s,"throw",e)}u(void 0)}))}}function p(){return(p=d(regeneratorRuntime.mark((function e(t,r){var n,a,o,u,i,c,l,h,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,o=void 0===a?"GET":a,u=t.headers,i=t.data,c=t.params,l=r.requestInterceptors,h=void 0===l?[]:l,r.responseInterceptors,r.errorInterceptors,e.next=4,v(h,{headers:u,url:n,method:o,data:i,params:c});case 4:return(f=e.sent).data="string"==typeof i?i:JSON.stringify(i),e.next=8,s(f);case 8:return d=e.sent,e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return y.apply(this,arguments)}function y(){return(y=d(regeneratorRuntime.mark((function e(t,r){var n,a,o,u,s,i,c,h,f,d,p,v,y,m,b,g,w,x,U;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.headers,a=r.url,o=r.method,u=r.data,s=r.params,i=n,c=a,h=o,f=u,d=s,p=l(t),e.prev=7,p.s();case 9:if((v=p.n()).done){e.next=21;break}return x=v.value,e.next=13,x({data:f,params:d,headers:i,url:c,method:h});case 13:U=e.sent,i=null!==(y=U.headers)&&void 0!==y?y:i,c=null!==(m=U.url)&&void 0!==m?m:c,h=null!==(b=U.method)&&void 0!==b?b:h,f=null!==(g=U.data)&&void 0!==g?g:f,d=null!==(w=U.params)&&void 0!==w?w:d;case 19:e.next=9;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),p.e(e.t0);case 26:return e.prev=26,p.f(),e.finish(26);case 29:return e.abrupt("return",{headers:i,url:c,method:h,data:f,params:d});case 30:case"end":return e.stop()}}),e,null,[[7,23,26,29]])})))).apply(this,arguments)}function m(e,t,r,n,a,o,u){try{var s=e[o](u),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){m(o,n,a,u,s,"next",e)}function s(e){m(o,n,a,u,s,"throw",e)}u(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const x=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];g(this,e),this.baseUrl=t,this.subUrl=n,this.requestInterceptors=a,this.headers=r}var t,r,n,a,o,u,s,i;return t=e,(r=[{key:"addRequestInterceptor",value:function(e){this.requestInterceptors.push(e)}},{key:"get",value:(i=b(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._doRequest({headers:this.headers,url:this.baseUrl+this.subUrl+"/"+t,method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"getAll",value:(s=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._doRequest({headers:this.headers,url:this.baseUrl+this.subUrl,method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"post",value:(u=b(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.next=3,this._doRequest({headers:this.headers,url:this.baseUrl+this.subUrl,method:"POST",data:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"put",value:(o=b(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this._doRequest({headers:this.headers,url:this.baseUrl+this.subUrl+"/"+t,method:"PUT",data:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"patch",value:(a=b(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this._doRequest({headers:this.headers,url:this.baseUrl+this.subUrl+"/"+t,method:"PATCH",data:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"delete",value:(n=b(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this._doRequest({headers:this.headers,url:this.baseUrl+this.subUrl+"/"+t,method:"DELETE",data:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"all",value:function(t){var r=this.subUrl+this._normalizeSubUrl(t);return new e(this.baseUrl,this.headers,r,this.requestInterceptors)}},{key:"one",value:function(t,r){var n=this.subUrl+this._normalizeSubUrl(t)+"/"+r;return new e(this.baseUrl,this.headers,n,this.requestInterceptors)}},{key:"_doRequest",value:function(e){return function(e,t){return p.apply(this,arguments)}(e,{requestInterceptors:this.requestInterceptors})}},{key:"_normalizeSubUrl",value:function(e){return"/"===e[0]?e:"/"+e}},{key:"baseUrl",set:function(e){"/"===e.slice(-1)&&(this._baseUrl=e.slice(0,-1)),this._baseUrl=e},get:function(){return this._baseUrl}}])&&w(t.prototype,r),e}()}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(726)})()}));