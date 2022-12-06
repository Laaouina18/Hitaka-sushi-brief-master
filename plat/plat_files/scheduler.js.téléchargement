(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function g(){var a=ba,b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},h;
if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var da={a:!0},l={};try{l.__proto__=da;k=l.a;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=h,n=this||self;
function p(a){a=a.split(".");for(var b=n,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function q(a,b){a=a.split(".");var c=n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
;function r(){this.s=this.s;this.B=this.B}
r.prototype.s=!1;r.prototype.dispose=function(){this.s||(this.s=!0,this.G())};
r.prototype.G=function(){if(this.B)for(;this.B.length;)this.B.shift()()};var t=n.window,u,v,w=(null==t?void 0:null==(u=t.yt)?void 0:u.config_)||(null==t?void 0:null==(v=t.ytcfg)?void 0:v.data_)||{};q("yt.config_",w);function x(a,b){return a in w?w[a]:b}
;function y(a){a=z(a);return"string"===typeof a&&"false"===a?!1:!!a}
function A(a,b){a=z(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function z(a){var b=x("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:x("EXPERIMENT_FLAGS",{})[a]}
;var ea=A("web_emulated_idle_callback_delay",300),B=1E3/60-3,ba=[8,4,3,2,1,0];
function D(a){a=void 0===a?{}:a;r.call(this);this.g=[];this.i={};this.C=this.h=0;this.D=this.l=!1;this.u=[];this.A=this.F=!1;for(var b=g(),c=b.next();!c.done;c=b.next())this.g[c.value]=[];this.j=0;this.N=a.timeout||1;this.o=B;this.m=0;this.H=this.R.bind(this);this.M=this.T.bind(this);this.J=this.O.bind(this);this.K=this.P.bind(this);this.L=this.S.bind(this);this.I=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!y("disable_scheduler_requestIdleCallback");(this.v=(y("scheduler_use_raf_by_default")?
!1!==a.useRaf:!!a.useRaf)&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.H)}
D.prototype=ca(r.prototype);D.prototype.constructor=D;if(m)m(D,r);else for(var E in r)if("prototype"!=E)if(Object.defineProperties){var F=Object.getOwnPropertyDescriptor(r,E);F&&Object.defineProperty(D,E,F)}else D[E]=r[E];function G(a,b){var c=Date.now();H(b);b=Date.now()-c;a.l||(a.o-=b)}
function I(a,b,c,d){++a.C;if(10==c)return G(a,b),a.C;var f=a.C;a.i[f]=b;a.l&&!d?a.u.push({id:f,priority:c}):(a.g[c].push(f),a.D||a.l||(0!=a.h&&J(a)!=a.m&&K(a),a.start()));return f}
function L(a){a.u.length=0;for(var b=4;0<=b;b--)a.g[b].length=0;a.g[8].length=0;a.i={};K(a)}
function J(a){if(a.g[8].length){if(a.A)return 4;if(!document.hidden&&a.v)return 3}for(var b=4;b>=a.j;b--)if(0<a.g[b].length)return 0<b?!document.hidden&&a.v?3:2:1;return 0}
function H(a){try{a()}catch(b){(a=p("yt.logging.errors.log"))&&a(b)}}
function M(a){if(y("scheduler_use_jobpriority_keys_shutoff")){if(a.g[8].length)return!0;for(var b=3;0<=b;b--)if(a.g[b].length)return!0;return!1}b=g();for(var c=b.next();!c.done;c=b.next())if(a.g[c.value].length)return!0;return!1}
e=D.prototype;e.P=function(a){var b=void 0;a&&(b=a.timeRemaining());this.F=!0;N(this,b);this.F=!1};
e.T=function(){N(this)};
e.O=function(){O(this)};
e.S=function(){this.A=!0;var a=J(this);4==a&&a!=this.m&&(K(this),this.start());N(this);this.A=!1};
e.R=function(){document.hidden||O(this);this.h&&(K(this),this.start())};
function O(a){K(a);a.l=!0;for(var b=Date.now(),c=a.g[8];c.length;){var d=c.shift(),f=a.i[d];delete a.i[d];f&&H(f)}P(a);a.l=!1;M(a)&&a.start();a.o-=Date.now()-b}
function P(a){for(var b=0,c=a.u.length;b<c;b++){var d=a.u[b];a.g[d.priority].push(d.id)}a.u.length=0}
function N(a,b){a.A&&4==a.m&&a.h||K(a);a.l=!0;b=Date.now()+(b||a.o);for(var c=a.g[4];c.length;){var d=c.shift(),f=a.i[d];delete a.i[d];f&&H(f)}c=a.F?0:1;c=a.j>c?a.j:c;if(!(Date.now()>=b)){do{a:{d=a;f=c;for(var C=3;C>=f;C--)for(var U=d.g[C];U.length;){var V=U.shift(),W=d.i[V];delete d.i[V];if(W){d=W;break a}}d=null}d&&H(d)}while(d&&Date.now()<b)}a.l=!1;P(a);a.o=B;M(a)&&a.start()}
e.start=function(){this.D=!1;if(0==this.h)switch(this.m=J(this),this.m){case 1:var a=this.K;this.h=this.I?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,ea);break;case 2:this.h=window.setTimeout(this.M,this.N);break;case 3:this.h=window.requestAnimationFrame(this.L);break;case 4:this.h=window.setTimeout(this.J,0)}};
function K(a){if(a.h){switch(a.m){case 1:var b=a.h;a.I?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.h);break;case 3:window.cancelAnimationFrame(a.h)}a.h=0}}
e.G=function(){L(this);K(this);this.v&&document.removeEventListener("visibilitychange",this.H);r.prototype.G.call(this)};var Q=p("yt.scheduler.instance.timerIdMap_")||{},R=A("kevlar_tuner_scheduler_soft_state_timer_ms",800),S=0,T=0;function X(){var a=p("ytglobal.schedulerInstanceInstance_");if(!a||a.s)a=new D(x("scheduler")||{}),q("ytglobal.schedulerInstanceInstance_",a);return a}
function fa(){var a=p("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),q("ytglobal.schedulerInstanceInstance_",null))}
function ha(){L(X());for(var a in Q)delete Q[Number(a)]}
function ia(a,b,c){if(0==c||void 0===c)return c=void 0===c,-I(X(),a,b,c);var d=window.setTimeout(function(){var f=I(X(),a,b);Q[d]=f},c);
return d}
function ja(a){var b=X();G(b,a)}
function ka(a){var b=X();if(0>a)delete b.i[-a];else{var c=Q[a];c?(delete b.i[c],delete Q[a]):window.clearTimeout(a)}}
function Y(a){var b=p("ytcsi.tick");b&&b(a)}
function la(){Y("jse");Z()}
function Z(){window.clearTimeout(S);X().start()}
function ma(){var a=X();K(a);a.D=!0;window.clearTimeout(S);S=window.setTimeout(la,R)}
function na(){window.clearTimeout(T);T=window.setTimeout(function(){Y("jset");oa(0)},R)}
function oa(a){na();var b=X();b.j=a;b.start()}
function pa(a){na();var b=X();b.j>a&&(b.j=a,b.start())}
function qa(){window.clearTimeout(T);var a=X();a.j=0;a.start()}
;p("yt.scheduler.initialized")||(q("yt.scheduler.instance.dispose",fa),q("yt.scheduler.instance.addJob",ia),q("yt.scheduler.instance.addImmediateJob",ja),q("yt.scheduler.instance.cancelJob",ka),q("yt.scheduler.instance.cancelAllJobs",ha),q("yt.scheduler.instance.start",Z),q("yt.scheduler.instance.pause",ma),q("yt.scheduler.instance.setPriorityThreshold",oa),q("yt.scheduler.instance.enablePriorityThreshold",pa),q("yt.scheduler.instance.clearPriorityThreshold",qa),q("yt.scheduler.initialized",!0));}).call(this);
