(function(t){function e(e){for(var o,c,i=e[0],s=e[1],u=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/oysy/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"3f5f":function(t,e,n){"use strict";var o=n("b805"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],i={name:"App"},s=i,u=(n("034f"),n("2877")),l=Object(u["a"])(s,a,c,!1,null,null,null),d=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-1",on:{click:function(e){return t.onClick()}}},[n("div",{staticClass:"title"}),n("div",{staticClass:"copy-right"})])},f=[],v={name:"StartPage",methods:{onClick:function(){this.$router.push("/s")}}},h=v,m=(n("9614"),Object(u["a"])(h,p,f,!1,null,"628b1d82",null)),g=m.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-2"},[n("div",{staticClass:"select-zh"}),n("div",{staticClass:"select-en"})])}],w={name:"StartHole",created:function(){var t=this;setTimeout((function(){t.$router.push("/c")}),4e3)}},_=w,O=(n("3f5f"),Object(u["a"])(_,y,b,!1,null,"35c55f44",null)),P=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-3"},[t.showProgress?n("div",{staticClass:"progress"},[n("p",{attrs:{id:"progress"}},[t._v("0%")]),n("p",[t._v("正在加载中，请稍后...")])]):t._e(),n("canvas",{attrs:{id:"canvas"}})])},C=[],E={name:"SilkWorm",data:function(){return{showProgress:!0}},methods:{onClick:function(){}},mounted:function(){var t=this,e=document.getElementById("progress"),n=document.getElementById("canvas"),o=n.getContext("2d"),r=window.innerWidth,a=.5625,c=r,i=r/a;n.width=c,n.height=i,console.log(c,i);for(var s=[],u=0,l=0,d=10,p=0;p<180;p+=d){var f=p;p<100&&(f="0".concat(p)),p<10&&(f="00".concat(p));var v="https://paabuu.github.io/oysy/360/v001_0".concat(f,".png"),h=new Image;h.src=v,h.crossOrigin="Anonymous",h.setAttribute("crossOrigin",""),h.onload=function(){u++,o.clearRect(0,0,c,i),e.innerHTML="".concat(Math.floor(u/180*d*100),"%"),u>=180/d&&(t.showProgress=!1,console.log("all loaded!"),o.drawImage(s[l],0,0,c,i))},s.push(h)}var m=0;n.addEventListener("touchstart",(function(e){if(!t.showProgress){var n=e.touches[0],r=n.clientX,a=n.clientY,c=o.getImageData(r,a,1,1).data;(c[0]>200||c[1]>200||c[2]>200)&&t.$router.push("/v"),m=n.clientX}})),n.addEventListener("touchmove",(function(e){if(!t.showProgress){var n=e.touches[0],r=n.clientX,a=m-r,u=180/d-1;a>10&&(l+=1,m=r),a<-10&&(l-=1,m=r),l>=u?l=0:l<=0&&(l=u),console.log(l),o.clearRect(0,0,c,i),o.drawImage(s[l],0,0,c,i)}}))}},x=E,$=(n("c5c1"),Object(u["a"])(x,j,C,!1,null,"3de0f40a",null)),k=$.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("video",{attrs:{id:"loading",src:"https://paabuu.github.io/oysy/video.mp4",width:"100%",height:"100%",autoplay:"true",muted:"muted"},domProps:{muted:!0}},[n("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),n("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),n("video",{attrs:{id:"video1",src:"https://paabuu.github.io/oysy/video.mp4",width:"100%",height:"100%",muted:"muted"},domProps:{muted:!0}},[n("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),n("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})])])},S=[],M={name:"LoadingVideo",methods:{onClick:function(){}},mounted:function(){var t=document.getElementById("loading"),e=document.getElementById("video1");t.play(),t.addEventListener("ended",(function(){t.style.display="none",e.play()}))}},L=M,T=(n("8232"),Object(u["a"])(L,I,S,!1,null,"5cf6d5e5",null)),B=T.exports;o["a"].config.productionTip=!1,o["a"].use(r["a"]);var A=[{path:"/",component:g},{path:"/s",component:P},{path:"/c",component:k},{path:"/v",component:B}],X=new r["a"]({routes:A});new o["a"]({render:function(t){return t(d)},router:X}).$mount("#app")},8232:function(t,e,n){"use strict";var o=n("9c0f"),r=n.n(o);r.a},"85ec":function(t,e,n){},"94fd":function(t,e,n){},9614:function(t,e,n){"use strict";var o=n("94fd"),r=n.n(o);r.a},"9c0f":function(t,e,n){},ae22:function(t,e,n){},b805:function(t,e,n){},c5c1:function(t,e,n){"use strict";var o=n("ae22"),r=n.n(o);r.a}});
//# sourceMappingURL=app.b6391b7a.js.map