(function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"202eb57f","chunk-2d0bce52":"8a24eb85","chunk-4587a87d":"2a695fea","chunk-6b3de89e":"b95d5821","chunk-7235ea32":"29e14829","chunk-adf3341e":"848a4a94"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"09f7":function(e,t,n){},"345f":function(e,t,n){"use strict";var r=n("09f7"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("5c96"),a=n.n(o),u=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/papers"}},[e._v("Papers")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/ged"}},[e._v("GED")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/cgmp"}},[e._v("CGMP")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/spirit"}},[e._v("MySpirit")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)}),i=[],c=(n("034f"),n("2877")),l={},s=Object(c["a"])(l,u,i,!1,null,null,null),p=s.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._l(e.urls,(function(e){return n("el-image",{staticStyle:{width:"30%"},attrs:{src:e,lazy:""}})})),n("HelloWorld",{attrs:{msg:"Welcome to My Homepage :)"}})],2)},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"helloWorld"},[n("h3",[e._v(e._s(e.msg))])])},v=[],b={name:"helloWorld",props:{msg:String}},g=b,_=(n("345f"),Object(c["a"])(g,m,v,!1,null,"10e7595a",null)),y=_.exports,k={name:"home",data:function(){return{urls:[n("a1a0")]}},components:{HelloWorld:y}},j=k,w=Object(c["a"])(j,d,h,!1,null,null,null),O=w.exports;r["default"].use(f["a"]);var P=new f["a"]({routes:[{path:"/",name:"home",component:O},{path:"/papers",name:"papers",component:function(){return n.e("chunk-2d0bce52").then(n.bind(null,"2a4a"))}},{path:"/ged",name:"ged",component:function(){return n.e("chunk-4587a87d").then(n.bind(null,"544d"))}},{path:"/cgmp",name:"cgmp",component:function(){return n.e("chunk-adf3341e").then(n.bind(null,"4cb6"))}},{path:"/projects",name:"projects",component:function(){return n.e("chunk-7235ea32").then(n.bind(null,"acca"))}},{path:"/spirit",name:"spirit",component:function(){return n.e("chunk-6b3de89e").then(n.bind(null,"f19d"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),x=n("2f62");r["default"].use(x["a"]);var S=new x["a"].Store({state:{},mutations:{},actions:{}});r["default"].config.productionTip=!1,r["default"].use(a.a),new r["default"]({router:P,store:S,render:function(e){return e(p)}}).$mount("#app")},"64a9":function(e,t,n){},a1a0:function(e,t,n){e.exports=n.p+"img/logo.9b6e5ad3.gif"}});
//# sourceMappingURL=app.362ac478.js.map