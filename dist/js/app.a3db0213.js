(function(){"use strict";var e={1730:function(e,t,r){var s=r(6369),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col min-w-[300px] max-w-[650px] mx-auto content-center gap-4",attrs:{id:"app"}},[e._m(0),t("h2",[e._v("A tool for quickly finding reputable citations")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"flex-1 border-2 border-gray-300 bg-white h-10 p-5 pr-16 mb-4 rounded-lg text-lg focus:outline-none disabled:opacity-50",attrs:{type:"text",placeholder:"Search for a claim"},domProps:{value:e.searchQuery},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)},input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),t("div",{staticClass:"flex flex-row justify-between"},[t("div",{staticClass:"flex flex-row"},[t("div",{staticClass:"flex flex-row items-center mr-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchType,expression:"searchType"}],staticClass:"mr-2",attrs:{type:"radio",id:"narrow",name:"search",value:"narrow",checked:""},domProps:{checked:e._q(e.searchType,"narrow")},on:{change:function(t){e.searchType="narrow"}}}),t("label",{attrs:{for:"narrow"}},[e._v("Narrow")])]),t("div",{staticClass:"flex flex-row items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchType,expression:"searchType"}],staticClass:"mr-2",attrs:{type:"radio",id:"general",name:"search",value:"general"},domProps:{checked:e._q(e.searchType,"general")},on:{change:function(t){e.searchType="general"}}}),t("label",{attrs:{for:"general"}},[e._v("General")])])]),t("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed",on:{click:e.search}},[e._v(" Search! ")])]),t("div",{staticClass:"flex flex-col-reverse gap-4"},e._l(e.queries,(function(r){return t("citation-card",{key:r,staticClass:"min-w-1/3",attrs:{query:r,type:e.searchType}})})),1)])},n=[function(){var e=this,t=e._self._c;return t("h1",{staticClass:"text-2xl"},[t("i",[t("b",[e._v(" [Citation Needed]")])])])}],i=(r(7658),function(){var e=this,t=e._self._c;return t("div",{class:e.genClass},[t("div",{staticClass:"pb-2 pt-2 px-4"},[t("h2",[t("span",[t("img",{staticClass:"h-5 inline",attrs:{src:r(1238)}}),e._v(" "+e._s(e.query)+" ")])]),"success"==e.state?t("div",[e._m(0),t("span",[e._v(" "+e._s(e.glance(e.resp.text))+" "),t("br"),t("i",[e._v(" Read more at "),t("a",{attrs:{href:"https://wikipedia.org/wiki/"+e.resp.page}},[e._v(e._s(e.resp.page.replaceAll("_"," ")))])])]),e._m(1),t("div",{staticClass:"list-decimal text-left px-4"},e._l(e.resp.citations,(function(r){return t("li",{key:r},["<"==r.charAt(0)?t("span",{domProps:{innerHTML:e._s(r)}}):t("span",[e._v(e._s(r))]),t("br")])})),0)]):e._e(),"loading"==e.state?t("div",[t("img",{staticClass:"mx-auto",attrs:{src:r(916)}})]):e._e(),"error"==e.state?t("div",[e._v(" "+e._s(e.resp)+" ")]):e._e()])])}),o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative py-2"},[t("div",{staticClass:"absolute inset-0 flex items-center"},[t("div",{staticClass:"w-full border-b border-gray-300"})]),t("div",{staticClass:"relative flex justify-center"},[t("span",{staticClass:"bg-white px-4 text-sm text-gray-500"},[e._v("Snippet")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative py-2"},[t("div",{staticClass:"absolute inset-0 flex items-center"},[t("div",{staticClass:"w-full border-b border-gray-300"})]),t("div",{staticClass:"relative flex justify-center"},[t("span",{staticClass:"bg-white px-4 text-sm text-gray-500"},[e._v("Citations")])])])}];const c=r(7218),l="http://localhost:5000";var u={props:{query:String,type:{type:String,default:"narrow"}},data(){return{resp:{page:"",text:"",citations:[]},state:"loading",qtype:"narrow"}},computed:{genClass(){let e="border-2 border-gray-500 rounded-md ";return"loading"==this.state?e+"border-gray-200":"error"==this.state?e+"border-red-200":"success"==this.state?e+"border-green-200":e+"border-gray-200"}},methods:{glance(e){return e=e.replaceAll(/\[.*?\]/g,""),e.length>170?e.substring(0,75)+" ... "+e.substring(e.length-75,e.length):e}},mounted(){this.qtype=this.type,console.log(this.query),console.log(this.qtype),c.get(l+`/${this.qtype}/`+this.query).then((e=>{console.log(e.data),this.state="success",this.resp=e.data})).catch((e=>{console.log(e),this.state="error",this.resp=e}))}},p=u,d=r(1001),h=(0,d.Z)(p,i,o,!1,null,"43b8e5d7",null),f=h.exports,v={name:"App",components:{CitationCard:f},data(){return{searchQuery:"",queries:[],searchType:"narrow"}},methods:{search(){console.log(this.searchQuery),console.log(this.searchType),this.searchQuery=this.searchQuery.trim(),""!==this.searchQuery&&(this.queries.push(this.searchQuery),this.searchQuery="")}}},y=v,g=(0,d.Z)(y,a,n,!1,null,null,null),m=g.exports;s.ZP.config.productionTip=!1,new s.ZP({render:e=>e(m)}).$mount("#app")},1238:function(e,t,r){e.exports=r.p+"img/search.6f9013eb.svg"},916:function(e,t,r){e.exports=r.p+"img/search_animate.39e6bd69.svg"}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,s,a,n){if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],n=e[u][2];for(var o=!0,c=0;c<s.length;c++)(!1&n||i>=n)&&Object.keys(r.O).every((function(e){return r.O[e](s[c])}))?s.splice(c--,1):(o=!1,n<i&&(i=n));if(o){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,a,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,i=s[0],o=s[1],c=s[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(c)var u=c(r)}for(t&&t(s);l<i.length;l++)n=i[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},s=self["webpackChunkcohere_ui"]=self["webpackChunkcohere_ui"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(1730)}));s=r.O(s)})();
//# sourceMappingURL=app.a3db0213.js.map