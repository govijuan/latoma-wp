this.wp=this.wp||{},this.wp.hooks=function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=318)}({18:function(n,r,e){"use strict";var t=e(32);function o(n){return function(n){if(Array.isArray(n)){for(var r=0,e=new Array(n.length);r<n.length;r++)e[r]=n[r];return e}}(n)||Object(t.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(r,"a",(function(){return o}))},318:function(n,r,e){"use strict";e.r(r);var t=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var o=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var i=function(n){return function(r,e,i){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(o(r)&&t(e))if("function"==typeof i)if("number"==typeof u){var c={callback:i,priority:u,namespace:e};if(n[r]){var a,l=n[r].handlers;for(a=l.length;a>0&&!(u>=l[a-1].priority);a--);a===l.length?l[a]=c:l.splice(a,0,c),(n.__current||[]).forEach((function(n){n.name===r&&n.currentIndex>=a&&n.currentIndex++}))}else n[r]={handlers:[c],runs:0};"hookAdded"!==r&&F("hookAdded",r,e,i,u)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var u=function(n,r){return function(e,i){if(o(e)&&(r||t(i))){if(!n[e])return 0;var u=0;if(r)u=n[e].handlers.length,n[e]={runs:n[e].runs,handlers:[]};else for(var c=n[e].handlers,a=function(r){c[r].namespace===i&&(c.splice(r,1),u++,(n.__current||[]).forEach((function(n){n.name===e&&n.currentIndex>=r&&n.currentIndex--})))},l=c.length-1;l>=0;l--)a(l);return"hookRemoved"!==e&&F("hookRemoved",e,i),u}}};var c=function(n){return function(r,e){return void 0!==e?r in n&&n[r].handlers.some((function(n){return n.namespace===e})):r in n}};e(18);var a=function(n,r){return function(e){n[e]||(n[e]={handlers:[],runs:0}),n[e].runs++;var t=n[e].handlers;for(var o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];if(!t||!t.length)return r?i[0]:void 0;var c={name:e,currentIndex:0};for(n.__current.push(c);c.currentIndex<t.length;){var a=t[c.currentIndex],l=a.callback.apply(null,i);r&&(i[0]=l),c.currentIndex++}return n.__current.pop(),r?i[0]:void 0}};var l=function(n){return function(){return n.__current&&n.__current.length?n.__current[n.__current.length-1].name:null}};var d=function(n){return function(r){return void 0===r?void 0!==n.__current[0]:!!n.__current[0]&&r===n.__current[0].name}};var s=function(n){return function(r){if(o(r))return n[r]&&n[r].runs?n[r].runs:0}};var f=function(){var n=Object.create(null),r=Object.create(null);return n.__current=[],r.__current=[],{addAction:i(n),addFilter:i(r),removeAction:u(n),removeFilter:u(r),hasAction:c(n),hasFilter:c(r),removeAllActions:u(n,!0),removeAllFilters:u(r,!0),doAction:a(n),applyFilters:a(r,!0),currentAction:l(n),currentFilter:l(r),doingAction:d(n),doingFilter:d(r),didAction:s(n),didFilter:s(r),actions:n,filters:r}};e.d(r,"addAction",(function(){return p})),e.d(r,"addFilter",(function(){return v})),e.d(r,"removeAction",(function(){return m})),e.d(r,"removeFilter",(function(){return A})),e.d(r,"hasAction",(function(){return _})),e.d(r,"hasFilter",(function(){return y})),e.d(r,"removeAllActions",(function(){return b})),e.d(r,"removeAllFilters",(function(){return g})),e.d(r,"doAction",(function(){return F})),e.d(r,"applyFilters",(function(){return k})),e.d(r,"currentAction",(function(){return j})),e.d(r,"currentFilter",(function(){return x})),e.d(r,"doingAction",(function(){return O})),e.d(r,"doingFilter",(function(){return I})),e.d(r,"didAction",(function(){return w})),e.d(r,"didFilter",(function(){return T})),e.d(r,"actions",(function(){return S})),e.d(r,"filters",(function(){return P})),e.d(r,"createHooks",(function(){return f}));var h=f(),p=h.addAction,v=h.addFilter,m=h.removeAction,A=h.removeFilter,_=h.hasAction,y=h.hasFilter,b=h.removeAllActions,g=h.removeAllFilters,F=h.doAction,k=h.applyFilters,j=h.currentAction,x=h.currentFilter,O=h.doingAction,I=h.doingFilter,w=h.didAction,T=h.didFilter,S=h.actions,P=h.filters},32:function(n,r,e){"use strict";function t(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}e.d(r,"a",(function(){return t}))}});