(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1a58f2ee":"2a5215c2","chunk-2ef12a80":"ece875b0","chunk-5b41bdc3":"102e5599","chunk-e5cf7d90":"8abe6b7d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1a58f2ee":1,"chunk-2ef12a80":1,"chunk-5b41bdc3":1,"chunk-e5cf7d90":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1a58f2ee":"ef2bd3e0","chunk-2ef12a80":"35621937","chunk-5b41bdc3":"e57df77e","chunk-e5cf7d90":"8d483253"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="lotto-analytics/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4230:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Navbar"),n("div",{staticClass:"mb-10"}),n("router-view"),n("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"mb-12"},[n("v-app-bar",{attrs:{color:"amber",fixed:"","elevate-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.showNav=!e.showNav}}}),n("v-toolbar-title",{staticClass:"text-uppercase dark--text"},[n("span",{staticClass:"font-weight-light"},[e._v(" "+e._s(e.title.split(" ")[0])+" ")]),n("span",[e._v(e._s(e.title.split(" ")[1]))])])],1),n("v-navigation-drawer",{staticClass:"indigo",attrs:{app:"",temporary:""},model:{value:e.showNav,callback:function(t){e.showNav=t},expression:"showNav"}},[n("v-toolbar",[n("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:function(t){e.showNav=!e.showNav}}},[n("v-icon",[e._v("mdi-arrow-left")])],1),n("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[n("span",{staticClass:"font-weight-light"},[e._v(" "+e._s(e.title.split(" ")[0])+" ")]),n("span",[e._v(e._s(e.title.split(" ")[1]))])])],1),e._l(e.items,(function(t){return n("v-card",{key:t.title,staticClass:"mx-auto",attrs:{"max-width":"300",tile:""}},[n("v-list",[n("v-subheader",{domProps:{textContent:e._s(t.title)}}),e._l(t.navs,(function(t){return n("v-list-item",{key:t.title,attrs:{router:"",to:t.route}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)}))],2)],1)}))],2)],1)},s=[],c={data:function(){return{title:"Lotto Analytics",showNav:!1,items:[{navs:[{title:"Home",icon:"mdi-home",route:"/"},{title:"Saved",icon:"mdi-content-save",route:"/saved"}]},{title:"3D Game",navs:[{title:"Analytics",icon:"mdi-chart-bar",route:"/triple/analytics"},{title:"Guide Board",icon:"mdi-checkerboard",route:"/triple/tools"}]}]}}},l=c,u=n("2877"),f=n("6544"),d=n.n(f),p=n("40dc"),v=n("5bc1"),h=n("8336"),m=n("b0af"),b=n("132d"),g=n("8860"),w=n("da13"),y=n("5d23"),_=n("34c3"),k=n("f774"),C=n("e0c7"),x=n("71d9"),N=n("2a7f"),j=Object(u["a"])(l,i,s,!1,null,null,null),V=j.exports;d()(j,{VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:h["a"],VCard:m["a"],VIcon:b["a"],VList:g["a"],VListItem:w["a"],VListItemContent:y["a"],VListItemIcon:_["a"],VListItemTitle:y["c"],VNavigationDrawer:k["a"],VSubheader:C["a"],VToolbar:x["a"],VToolbarTitle:N["a"]});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{height:"150"}},[n("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" 2020 — "),n("strong",[n("a",{attrs:{href:"http://jamesjomuad.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("James Jomuad")])])])],1)],1)},P=[],A={name:"Footer"},E=A,T=n("62ad"),S=n("553a"),L=Object(u["a"])(E,O,P,!1,null,null,null),B=L.exports;d()(L,{VCard:m["a"],VCol:T["a"],VFooter:S["a"]});var I={name:"App",components:{Navbar:V,Footer:B}},F=I,$=n("7496"),D=Object(u["a"])(F,a,o,!1,null,null,null),J=D.exports;d()(D,{VApp:$["a"]});var G=n("9483");Object(G["a"])("".concat("lotto-analytics/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var H=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("div",{staticClass:"col col-12 text-center mt-10"},[n("h1",{staticClass:"font-weight-light mt-1"},[e._v(e._s(e.PageTitle))])])])},q=[],K=(n("a15b"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("17fb")),Q=n.n(K),R={name:"Home",data:function(){return{vNumber:"18 04 16 52 33",tripleGame:Q.a.range(9)}},computed:{PageTitle:function(){return this.$options.title},mainNumbers:function(){return""+this.vNumber.replace(/ /g,"")}},methods:{randomNum:function(){return Q.a.random(0,this.mainNumbers.length-1)},play3D:function(){var e=3,t=this.mainNumbers.split(""),n=[];for(n=[];n.length<9;n){var r=Q.a.sample(t);(n.join("").match(new RegExp(r,"g"))||[]).length<e&&n.push(r)}this.tripleGame=n}}},U=R,z=(n("cccb"),n("a523")),W=Object(u["a"])(U,M,q,!1,null,null,null),X=W.exports;d()(W,{VContainer:z["a"]}),r["a"].use(H["a"]);var Y=[{path:"/",name:"Home",component:X},{path:"/triple/analytics",name:"Analytics",component:function(){return n.e("chunk-5b41bdc3").then(n.bind(null,"5481"))}},{path:"/triple/tools",name:"Pattern",component:function(){return Promise.all([n.e("chunk-1a58f2ee"),n.e("chunk-2ef12a80")]).then(n.bind(null,"371f"))}}],Z=new H["a"]({base:"lotto-analytics/",routes:Y}),ee=Z,te=n("2f62");r["a"].use(te["a"]);var ne=new te["a"].Store({state:{},mutations:{},actions:{},modules:{}}),re=n("f309");r["a"].use(re["a"]);var ae=new re["a"]({}),oe=n("1157"),ie=n.n(oe);n.d(t,"eBus",(function(){return se})),window.$=window.JQuery=ie.a,window._=Q.a,r["a"].config.productionTip=!1;var se=new r["a"];new r["a"]({router:ee,store:ne,vuetify:ae,render:function(e){return e(J)}}).$mount("#app")},cccb:function(e,t,n){"use strict";var r=n("4230"),a=n.n(r);a.a}});
//# sourceMappingURL=app.8b10845d.js.map