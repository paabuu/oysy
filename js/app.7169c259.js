(function(e){function t(t){for(var r,n,a=t[0],c=t[1],d=t[2],p=0,m=[];p<a.length;p++)n=a[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},s={app:0},i=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lxy/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("85ec"),s=o.n(r);s.a},"0f5a":function(e,t,o){},2278:function(e,t,o){},3360:function(e,t,o){"use strict";var r=o("49ee"),s=o.n(r);s.a},"3f5f":function(e,t,o){"use strict";var r=o("b805"),s=o.n(r);s.a},"49ee":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),s=o("8c4f"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("router-view")},n=[],a={name:"App"},c=a,d=(o("034f"),o("2877")),u=Object(d["a"])(c,i,n,!1,null,null,null),p=u.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page page-1"},[o("div",{staticClass:"title"}),o("div",{staticClass:"copy-right"})])}],v={name:"StartPage",mounted:function(){var e=this;setTimeout((function(){e.$router.push("/s")}),4e3)}},f=v,h=(o("bb9b"),Object(d["a"])(f,m,l,!1,null,"e188a962",null)),g=h.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page page-2"},[o("div",{staticClass:"select-zh"}),o("div",{staticClass:"select-en"})])}],w={name:"StartHole",created:function(){var e=this;setTimeout((function(){e.$router.push("/c")}),4e3)}},_=w,x=(o("3f5f"),Object(d["a"])(_,y,b,!1,null,"35c55f44",null)),P=x.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-3"},[e.showProgress?o("div",{staticClass:"progress"},[o("p",{attrs:{id:"progress"}},[e._v("0%")]),o("p",[e._v("正在加载中，请稍后...")])]):e._e(),o("canvas",{attrs:{id:"canvas"}})])},O=[],E={name:"SilkWorm",data:function(){return{showProgress:!0}},methods:{onClick:function(){}},mounted:function(){var e=this,t=document.getElementById("progress"),o=document.getElementById("canvas"),r=o.getContext("2d"),s=window.innerWidth,i=.5625,n=s,a=s/i;o.width=n,o.height=a,console.log(n,a);for(var c,d=[],u=0,p=0,m=2,l=0;l<180;l+=m){var v=l;l<100&&(v="0".concat(l)),l<10&&(v="00".concat(l));var f="http://lxy-asset.meizitoday.com/img/v001_0".concat(v,".png"),h=new Image;h.src=f,h.crossOrigin="",h.onload=function(){u++,r.clearRect(0,0,n,a),t.innerHTML="".concat(Math.floor(u/180*m*100),"%"),u>=180/m&&(e.showProgress=!1,c=setInterval((function(){p++,p>=180/m&&(p=0),r.clearRect(0,0,n,a),r.drawImage(d[p],70,70,310,551,0,0,n,a)}),100))},d.push(h)}var g=0;o.addEventListener("touchstart",(function(t){if(!e.showProgress){clearInterval(c);var o=t.touches[0],s=o.clientX,i=o.clientY,n=r.getImageData(s,i,1,1).data;(n[0]>200||n[1]>200||n[2]>200)&&e.$router.push("/v"),g=o.clientX}})),o.addEventListener("touchmove",(function(t){if(!e.showProgress){var o=t.touches[0],s=o.clientX,i=g-s,c=180/m-1;i>10&&(p+=1,g=s),i<-10&&(p-=1,g=s),p>=c?p=0:p<=0&&(p=c),r.clearRect(0,0,n,a),r.drawImage(d[p],70,70,310,551,0,0,n,a)}}))}},j=E,$=(o("cae5"),Object(d["a"])(j,C,O,!1,null,"efd74c48",null)),z=$.exports,k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("video",{attrs:{id:"loading",src:"http://lxy-asset.meizitoday.com/video/loading.mp4",width:"100%",height:"100%",autoplay:"true",muted:"muted"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video1",src:"http://lxy-asset.meizitoday.com/video/1.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video2",src:"http://lxy-asset.meizitoday.com/video/2.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video3",src:"http://lxy-asset.meizitoday.com/video/3.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video4",src:"http://lxy-asset.meizitoday.com/video/4.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video5",src:"http://lxy-asset.meizitoday.com/video/5.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video6",src:"http://lxy-asset.meizitoday.com/video/6.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video7",src:"http://lxy-asset.meizitoday.com/video/7.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video8",src:"http://lxy-asset.meizitoday.com/video/8.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),o("video",{attrs:{id:"video9",src:"http://lxy-asset.meizitoday.com/video/9.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[o("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),o("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})])])},I=[],M={name:"LoadingVideo",methods:{onClick:function(){}},mounted:function(){var e=this,t=document.getElementById("loading");t.play();var o=Math.ceil(9*Math.random());t.addEventListener("ended",(function(){var r=document.getElementById("video".concat(o));r.style.display="block",r.addEventListener("ended",(function(){e.$router.push("/e")})),t.style.display="none",r.play(),setTimeout((function(){r.muted=!1}),3e3)}))}},S=M,T=(o("b858"),Object(d["a"])(S,k,I,!1,null,"45e12064",null)),L=T.exports,B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page page-5"},[o("div",{staticClass:"box"},[o("div",{staticClass:"icon",on:{click:function(t){return e.backHome()}}}),o("p",{staticClass:"text1"},[e._v("想来一剂精神返野剂？")]),o("p",{staticClass:"text2"},[e._v("fu致这段话￥s0pc1noW8cZ￥打開👉🍑宝👈【PsychoPlacebo】")]),o("div",{staticClass:"btn",class:{"has-copyed":e.hasCopyed},attrs:{"data-clipboard-text":"fu致这段话￥s0pc1noW8cZ￥打開👉🍑宝👈【PsychoPlacebo】"},on:{click:function(t){return e.afterCopy()}}},[e._v(e._s(e.hasCopyed?"复制成功，打开【淘宝】":"复制链接"))])])])},H=[],W=o("b311"),R=o.n(W),X={name:"EndPage",data:function(){return{hasCopyed:!1}},methods:{afterCopy:function(){this.hasCopyed=!0},backHome:function(){this.$router.push("/")}},mounted:function(){new R.a(".btn")}},J=X,Z=(o("3360"),Object(d["a"])(J,B,H,!1,null,"78430276",null)),A=Z.exports;r["a"].config.productionTip=!1,r["a"].use(s["a"]);var D=[{path:"/",component:g},{path:"/s",component:P},{path:"/c",component:z},{path:"/v",component:L},{path:"/e",component:A}],V=new s["a"]({routes:D});new r["a"]({render:function(e){return e(p)},router:V}).$mount("#app")},"85ec":function(e,t,o){},"8f91":function(e,t,o){},b805:function(e,t,o){},b858:function(e,t,o){"use strict";var r=o("0f5a"),s=o.n(r);s.a},bb9b:function(e,t,o){"use strict";var r=o("8f91"),s=o.n(r);s.a},cae5:function(e,t,o){"use strict";var r=o("2278"),s=o.n(r);s.a}});
//# sourceMappingURL=app.7169c259.js.map