!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e,n){"use strict";function i(t,e,n,i,o,r,s,a,c,u){var l,f="function"==typeof t?t.options:t;if(c){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var h in c)p.call(c,h)&&!p.call(f.components,h)&&(f.components[h]=c[h])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var d=f.render;f.render=function(t,e){return l.call(e),d(t,e)}}else{var m=f.beforeCreate;f.beforeCreate=m?[].concat(m,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";var i=n(12),o=n(3),r=n(0);var s=Object(r.a)(o.default,i.b,i.c,!1,null,null,"8601db86",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(18).default,this.options.style):Object.assign(this.options.style,n(18).default)}).call(s),e.default=s.exports},function(t,e){t.exports={}},function(t,e,n){"use strict";var i=n(4),o=n.n(i);e.default=o.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=n(23);(i=n(24))&&i.__esModule;var r={data:function(){return{width:"",height:"",url:"rtmp://39.102.80.119:1935/live/",context:null,context1:null,markact:!0,beauty:0,tabList:[{name:"开启美颜",image:"../../static/image/meiyan.png",func:"openBeauty"},{name:"结束直播",image:"../../static/image/stop.png",func:"stopLive"},{name:"切换摄像头",image:"../../static/image/qiehuan.png",func:"switchCamera"}],chatList:[],scrollTop:0,websocket:null,flag:!1}},onLoad:function(){var t=uni.getSystemInfoSync();this.width=t.windowWidth,this.height=t.windowHeight},onReady:function(){var t=this;this.context=uni.createLivePusherContext("livePusher",this),setTimeout((function(){t.startLive()}),1e3)},computed:(0,o.mapState)({rtmpUrl:function(t){var e=t.userTel,n=t.lat,i=t.lng;return this.url+e+"?lat="+n+"&lng="+i}}),methods:{tmpMethods:function(t){this[t]()},openBeauty:function(){0==this.beauty?(this.beauty=9,this.tabList[0].name="关闭美颜"):(this.beauty=0,this.tabList[0].name="开启美颜")},startLive:function(){var e=this;this.context.stop({success:function(e){t("log",JSON.stringify(e)," at pages/live/live.nvue:108")}}),this.context.start({success:function(n){e.markact=!1,t("log","livePusher.start:"+JSON.stringify(n)," at pages/live/live.nvue:115"),e.initWebSocket()}})},stopLive:function(){this.context.stop({success:function(e){t("log",JSON.stringify(e)," at pages/live/live.nvue:127"),uni.switchTab({url:"beforeLive"})}})},switchCamera:function(){this.context.switchCamera({success:function(e){t("log","livePusher.switchCamera:"+JSON.stringify(e)," at pages/live/live.nvue:139")}})},error:function(e){t("log","error:"+JSON.stringify(e)," at pages/live/live.nvue:144")},initWebSocket:function(){this.websocket=uni.connectSocket({url:"ws://39.102.80.119:8080/webSocketServer/"+this.$store.state.userTel,success:function(){t("log","连接成功"," at pages/live/live.nvue:153")},fail:function(){t("log","连接失败"," at pages/live/live.nvue:156")}}),this.websocket.onOpen(this.websocketOnOpen),this.websocket.onMessage(this.websocketOnMessage),this.websocket.onClose(this.websocketOnClose),this.websocket.onError(this.websocketOnError)},websocketOnOpen:function(){t("log","连接成功l hhh"," at pages/live/live.nvue:165")},websocketOnMessage:function(e){t("log","接受数据"," at pages/live/live.nvue:168"),this.chatList.push(JSON.parse(e.data)),t("log",this.chatList," at pages/live/live.nvue:172")},websocketOnClose:function(){t("log","断开连接"," at pages/live/live.nvue:175")},websocketOnError:function(){t("log","连接失败"," at pages/live/live.nvue:178")},websocketSend:function(t){this.websocket.send(t)},websocketClose:function(){t("log","主动断开连接"," at pages/live/live.nvue:185")}}};e.default=r}).call(this,n(22).default)},function(t,e,n){"use strict";n.r(e);var i=n(6),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},function(t,e,n){"use strict";(function(t){function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("animation"),r={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},this.styles,{"transition-duration":this.duration/1e3+"s"}),e="";for(var o in t){e+=this.toLine(o)+":"+t[o]+";"}return e}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var e in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===e?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[e]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var e=this,n=this.getTranfrom(t);this.$refs.ani&&o.transition(this.$refs.ani.ref,{styles:n,duration:this.duration,timingFunction:"ease",needLayout:!1,delay:0},(function(){t||(e.isShow=!1),e.$emit("change",{detail:e.isShow})}))},getTranfrom:function(t){var e={transform:""};return this.modeClass.forEach((function(n){switch(n){case"fade":e.opacity=t?1:0;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ")}})),e},_modeClassArr:function(t){var e=this.modeClass;if("string"!=typeof e){var n="";return e.forEach((function(e){n+=e+"-"+t+","})),n.substr(0,n.length-1)}return e+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=r}).call(this,n(25).default)},function(t,e){t.exports={"@TRANSITION":{"uni-transition":{timingFunction:"ease",duration:300,property:"transform,opacity"}},"uni-transition":{transitionTimingFunction:"ease",transitionDuration:300,transitionProperty:"transform,opacity"},"fade-in":{opacity:0},"fade-active":{opacity:1},"slide-top-in":{transform:"translateY(-100%)"},"slide-top-active":{transform:"translateY(0)"},"slide-right-in":{transform:"translateX(100%)"},"slide-right-active":{transform:"translateX(0)"},"slide-bottom-in":{transform:"translateY(100%)"},"slide-bottom-active":{transform:"translateY(0)"},"slide-left-in":{transform:"translateX(-100%)"},"slide-left-active":{transform:"translateX(0)",opacity:1},"zoom-in-in":{transform:"scale(0.8)"},"zoom-out-active":{transform:"scale(1)"},"zoom-out-in":{transform:"scale(1.2)"}}},function(t,e,n){"use strict";n.r(e);var i=n(9),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n(15)),o=r(n(26));function r(t){return t&&t.__esModule?t:{default:t}}var s={name:"UniPopup",components:{uniTransition:i.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[o.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:function(t){this.mkclick=t}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(e){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){e()}))}),50)})).then((function(e){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var e=this;this.showTrans=!1,this.$nextTick((function(){e.$emit("change",{show:!1,type:e.type}),clearTimeout(e.timer),e.customOpen&&e.customClose(),e.timer=setTimeout((function(){e.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};e.default=s},function(t,e){t.exports={"uni-popup":{position:"fixed"},"uni-popup__mask":{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.4)",opacity:0},"@TRANSITION":{"mask-ani":{property:"opacity",duration:200},"content-ani":{property:"transform,opacity",duration:200}},"mask-ani":{transitionProperty:"opacity",transitionDuration:200},"uni-top-mask":{opacity:1},"uni-bottom-mask":{opacity:1},"uni-center-mask":{opacity:1},"uni-popup__wrapper":{position:"absolute"},top:{top:0},bottom:{bottom:0},"uni-popup__wrapper-box":{position:"relative"},"content-ani":{transitionProperty:"transform,opacity",transitionDuration:200},"uni-top-content":{transform:"translateY(0)"},"uni-bottom-content":{transform:"translateY(0)"},"uni-center-content":{transform:"scale(1)",opacity:1}}},function(t,e){t.exports={"but-img":{width:"20",height:"20"},meiyanbut:{paddingTop:"10",paddingRight:"20",paddingBottom:"10",paddingLeft:"20",marginLeft:"20",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},"but-text":{paddingTop:"3",fontSize:"13",color:"#FFFFFF"},id:{fontSize:"14",color:"#FFFFFF"},"text-box":{fontSize:"12",color:"#FFFFFF"},"user-img":{marginRight:"5",width:"30",height:"30",borderRadius:50},"mark-text":{color:"#FFFFFF",fontSize:"20"},mark:{position:"fixed",top:"0",backgroundColor:"#000000",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},but:{backgroundColor:"rgba(0,0,0,0.4)",position:"fixed",bottom:"0",display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"space-between",paddingBottom:"20"},"arrow-box":{position:"fixed",top:"60",left:"20",zIndex:10,borderRadius:"20",backgroundColor:"rgba(0,0,0,0.4)"},jiesu:{paddingTop:"10",paddingRight:"20",paddingBottom:"10",paddingLeft:"20",color:"#FFFFFF",fontSize:"16"},"chat-username":{fontSize:"18",color:"#FFFFFF"},"chat-usertext":{fontSize:"16",color:"#FFFFFF"},"chat-list":{marginTop:"5",display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",backgroundColor:"rgba(0,0,0,0.5)",paddingTop:"5",paddingRight:"10",paddingBottom:"5",paddingLeft:"10",borderRadius:"3"},"scroll-Y":{height:"150",width:"250"},chat:{position:"fixed",zIndex:10,bottom:"80"}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("div",[t.markact?n("view",{staticClass:["mark"],style:{width:t.width+"px",height:t.height+"px"}},[n("u-text",{staticClass:["mark-text"]},[t._v("直播启动中...")])]):t._e(),n("view",[n("live-pusher",{ref:"livePusher",style:{width:t.width+"px",height:t.height+"px"},attrs:{beauty:t.beauty,id:"livePusher",url:t.rtmpUrl,mode:"FHD",aspect:"9:16"},on:{statechange:t.statechange,netstatus:t.netstatus,error:t.error}}),n("view",{staticClass:["chat"]},[n("scroll-view",{staticClass:["scroll-Y"],attrs:{scrollTop:t.scrollTop,scrollY:"true"}},t._l(t.chatList,(function(e,i){return n("view",{key:i,staticClass:["chat-list"]},[n("u-text",{staticClass:["chat-username"]},[t._v("用户"+t._s(e.userTel)+"：")]),n("u-text",{staticClass:["chat-usertext"]},[t._v(t._s(e.message))])])})),0)],1),n("view",{staticClass:["but"],style:{width:t.width+"px"}},t._l(t.tabList,(function(e,i){return n("view",{key:i,staticClass:["meiyanbut"],on:{click:function(n){t.tmpMethods(e.func)}}},[n("u-image",{staticClass:["but-img"],attrs:{src:e.image}}),n("u-text",{staticClass:["but-text"]},[t._v(t._s(e.name))])],1)})),0)],1)])])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}))},function(t,e,n){"use strict";var i={uniTransition:n(15).default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPopup?n("view",{staticClass:["uni-popup"],class:[t.popupstyle],on:{touchmove:t.clear}},[t.maskShow?n("uni-transition",{attrs:{modeClass:["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:t.onTap}}):t._e(),n("uni-transition",{attrs:{modeClass:t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:t.onTap}},[n("view",{staticClass:["uni-popup__wrapper-box"],on:{click:t.clear}},[t._t("default")],2)])],1):t._e()},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return this.isShow?e("view",{ref:"ani",staticClass:["uni-transition"],class:[this.ani.in],style:"transform:"+this.transform+";"+this.stylesObject,on:{click:this.change}},[this._t("default")],2):this._e()},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}))},function(t,e,n){"use strict";n.r(e);var i=n(14),o=n(5);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var s=n(0);var a=Object(s.a)(o.default,i.b,i.c,!1,null,null,"cce6f0ce",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(16).default,this.options.style):Object.assign(this.options.style,n(16).default)}).call(a),e.default=a.exports},function(t,e,n){"use strict";n.r(e);var i=n(7),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);var i=n(10),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);var i=n(11),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);n(20);var i=n(1);i.default.mpType="page",i.default.route="pages/live/live",i.default.el="#root",new Vue(i.default)},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(21).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)},e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(s.length>1){var c=s.pop();a=s.join("---COMMA---"),0===c.indexOf(" at ")?a+=c:a+="---COMMA---"+c}else a=s[0];console[r](a)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.install=y,e.default=e.createNamespacedHelpers=e.mapActions=e.mapGetters=e.mapMutations=e.mapState=e.Store=void 0;
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}var r=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},s={namespaced:{configurable:!0}};s.namespaced.get=function(){return!!this._rawModule.namespaced},r.prototype.addChild=function(t,e){this._children[t]=e},r.prototype.removeChild=function(t){delete this._children[t]},r.prototype.getChild=function(t){return this._children[t]},r.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},r.prototype.forEachChild=function(t){o(this._children,t)},r.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},r.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},r.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(r.prototype,s);var a=function(t){this.register([],t,!1)};a.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},a.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},a.prototype.update=function(t){!function t(e,n,i){0;if(n.update(i),i.modules)for(var o in i.modules){if(!n.getChild(o))return void 0;t(e.concat(o),n.getChild(o),i.modules[o])}}([],this.root,t)},a.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var s=new r(e,n);0===t.length?this.root=s:this.get(t.slice(0,-1)).addChild(t[t.length-1],s);e.modules&&o(e.modules,(function(e,o){i.register(t.concat(o),e,n)}))},a.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var c;var u=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&y(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var o=t.strict;void 0===o&&(o=!1);var r=t.state;void 0===r&&(r={}),"function"==typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new a(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c;var s=this,u=this.dispatch,l=this.commit;this.dispatch=function(t,e){return u.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=o,d(this,r,[],this._modules.root),h(this,r),n.forEach((function(t){return t(e)})),c.config.devtools&&function(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)})))}(this)};e.Store=u;var l={state:{configurable:!0}};function f(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function p(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;d(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,s={};o(r,(function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var a=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:s}),c.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),c.nextTick((function(){return i.$destroy()})))}function d(t,e,n,i,o){var r=!n.length,s=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[s]=i),!r&&!o){var a=m(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit((function(){c.set(a,u,i.state)}))}var l=i.context=function(t,e,n){var i=""===e,o={dispatch:i?t.dispatch:function(n,i,o){var r=v(n,i,o),s=r.payload,a=r.options,c=r.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:i?t.commit:function(n,i,o){var r=v(n,i,o),s=r.payload,a=r.options,c=r.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(o,{getters:{get:i?function(){return t.getters}:function(){return function(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach((function(o){if(o.slice(0,i)===e){var r=o.slice(i);Object.defineProperty(n,r,{get:function(){return t.getters[o]},enumerable:!0})}})),n}(t,e)}},state:{get:function(){return m(t.state,n)}}}),o}(t,s,n);i.forEachMutation((function(e,n){!function(t,e,n,i){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,i.state,e)}))}(t,s+n,e,l)})),i.forEachAction((function(e,n){var i=e.root?n:s+n,o=e.handler||e;!function(t,e,n,i){(t._actions[e]||(t._actions[e]=[])).push((function(e,o){var r,s=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,o);return(r=s)&&"function"==typeof r.then||(s=Promise.resolve(s)),t._devtoolHook?s.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):s}))}(t,i,o,l)})),i.forEachGetter((function(e,n){!function(t,e,n,i){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)}}(t,s+n,e,l)})),i.forEachChild((function(i,r){d(t,e,n.concat(r),i,o)}))}function m(t,e){return e.length?e.reduce((function(t,e){return t[e]}),t):t}function v(t,e,n){var i;return null!==(i=t)&&"object"==typeof i&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function y(t){c&&t===c||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}l.state.get=function(){return this._vm._data.$$state},l.state.set=function(t){0},u.prototype.commit=function(t,e,n){var i=this,o=v(t,e,n),r=o.type,s=o.payload,a=(o.options,{type:r,payload:s}),c=this._mutations[r];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.forEach((function(t){return t(a,i.state)})))},u.prototype.dispatch=function(t,e){var n=this,i=v(t,e),o=i.type,r=i.payload,s={type:o,payload:r},a=this._actions[o];if(a)return this._actionSubscribers.forEach((function(t){return t(s,n.state)})),a.length>1?Promise.all(a.map((function(t){return t(r)}))):a[0](r)},u.prototype.subscribe=function(t){return f(t,this._subscribers)},u.prototype.subscribeAction=function(t){return f(t,this._actionSubscribers)},u.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},u.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},u.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),d(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},u.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=m(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])})),p(this)},u.prototype.hotUpdate=function(t){this._modules.update(t),p(this,!0)},u.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(u.prototype,l);var g=k((function(t,e){var n={};return x(e).forEach((function(e){var i=e.key,o=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=C(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[i].vuex=!0})),n}));e.mapState=g;var _=k((function(t,e){var n={};return x(e).forEach((function(e){var i=e.key,o=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.commit;if(t){var r=C(this.$store,"mapMutations",t);if(!r)return;i=r.context.commit}return"function"==typeof o?o.apply(this,[i].concat(e)):i.apply(this.$store,[o].concat(e))}})),n}));e.mapMutations=_;var b=k((function(t,e){var n={};return x(e).forEach((function(e){var i=e.key,o=e.val;o=t+o,n[i]=function(){if(!t||C(this.$store,"mapGetters",t))return this.$store.getters[o]},n[i].vuex=!0})),n}));e.mapGetters=b;var w=k((function(t,e){var n={};return x(e).forEach((function(e){var i=e.key,o=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var r=C(this.$store,"mapActions",t);if(!r)return;i=r.context.dispatch}return"function"==typeof o?o.apply(this,[i].concat(e)):i.apply(this.$store,[o].concat(e))}})),n}));e.mapActions=w;var O=function(t){return{mapState:g.bind(null,t),mapGetters:b.bind(null,t),mapMutations:_.bind(null,t),mapActions:w.bind(null,t)}};function x(t){return Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}}))}function k(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function C(t,e,n){return t._modulesNamespaceMap[n]}e.createNamespacedHelpers=O;var S={Store:u,install:y,version:"3.0.1",mapState:g,mapMutations:_,mapGetters:b,mapActions:w,createNamespacedHelpers:O};e.default=S},function(t,e,n){"use strict";n.r(e);var i=n(13),o=n(8);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var s=n(0);var a=Object(s.a)(o.default,i.b,i.c,!1,null,"200516a1","0b330d82",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(17).default,this.options.style):Object.assign(this.options.style,n(17).default)}).call(a),e.default=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=(i=n(27))&&i.__esModule?i:{default:i};var r={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},s={data:function(){return{config:r}},mixins:[o.default]};e.default=s},function(t,e,n){"use strict";var i;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(o(i={created:function(){"message"===this.type&&(this.maskShow=!1,this.children=null)}},"created",(function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)})),o(i,"methods",{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}),i);e.default=r}]);