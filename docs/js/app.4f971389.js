(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],s=0,p=[];s<i.length;s++)a=i[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"845c49d2","chunk-2d0bce52":"e8062ff6","chunk-60f68044":"859d2f15","chunk-eb37d80e":"5f159ec0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e),u=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"09f7":function(e,t,n){},"0ab2":function(e,t,n){e.exports=n.p+"img/logo.9b6e5ad3.gif"},"345f":function(e,t,n){"use strict";var r=n("09f7"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("5c96"),u=n.n(o),a=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/spirit"}},[e._v("MySpirit")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/papers"}},[e._v("Papers")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)}),i=[],c=(n("034f"),n("2877")),l={},s=Object(c["a"])(l,a,i,!1,null,null,null),f=s.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{width:"25%",src:n("0ab2")}}),r("HelloWorld",{attrs:{msg:"Welcome to My Homepage :)"}})],1)},h=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"helloWorld"},[n("h3",[e._v(e._s(e.msg))])])},m=[],b={name:"helloWorld",props:{msg:String}},g=b,_=(n("345f"),Object(c["a"])(g,v,m,!1,null,"10e7595a",null)),y=_.exports,j={name:"home",components:{HelloWorld:y}},w=j,k=Object(c["a"])(w,d,h,!1,null,null,null),O=k.exports;r["default"].use(p["a"]);var x=new p["a"]({routes:[{path:"/",name:"home",component:O},{path:"/projects",name:"projects",component:function(){return n.e("chunk-60f68044").then(n.bind(null,"acca"))}},{path:"/spirit",name:"spirit",component:function(){return n.e("chunk-eb37d80e").then(n.bind(null,"f19d"))}},{path:"/papers",name:"papers",component:function(){return n.e("chunk-2d0bce52").then(n.bind(null,"2a4a"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),P=n("2f62");r["default"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{}});r["default"].config.productionTip=!1,r["default"].use(u.a),new r["default"]({router:x,store:S,render:function(e){return e(f)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.4f971389.js.map