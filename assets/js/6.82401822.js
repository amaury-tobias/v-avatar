(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{211:function(t,e,i){"use strict";i.r(e);i(202),i(204),i(63),i(205),i(207),i(209);var n={name:"VAvatar",props:{username:{type:String,default:""},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!1},lighten:{type:Number,default:80}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){return this.isImage?null:this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){return this.isImage?null:this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return Boolean(this.src)},style:function(){var t={display:this.inline?"inline-flex":"flex",width:"".concat(this.size,"px"),height:"".concat(this.size,"px"),borderRadius:this.rounded?"50%":0,lineHeight:"".concat(this.size+Math.floor(this.size/20),"px"),fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center"},e={"background-image":"url(".concat(this.src,")"),"background-position":"center","background-repeat":"no-repeat","background-size":"cover"},i={backgroundColor:this.background,font:"".concat(Math.floor(this.size/2.5),"px/").concat(this.size,"px Helvetica, Arial, sans-serif"),color:this.fontColor},n=this.isImage?e:i;return Object.assign(t,n),t},userInitial:function(){return this.isImage?"":this.initials||this.initial(this.username)}},methods:{initial:function(t){for(var e=t.split(/[ -]/),i="",n=0;n<e.length;n++)i+=e[n].charAt(0);return i.length>3&&-1!==i.search(/[A-Z]/)&&(i=i.replace(/[a-z]+/g,"")),i=i.substr(0,3).toUpperCase()},randomBackgroundColor:function(t,e){return e[t%e.length]},lightenColor:function(t,e){var i=!1;"#"===t[0]&&(t=t.slice(1),i=!0);var n=parseInt(t,16),r=(n>>16)+e;r>255?r=255:r<0&&(r=0);var s=(n>>8&255)+e;s>255?s=255:s<0&&(s=0);var a=(255&n)+e;return a>255?a=255:a<0&&(a=0),(i?"#":"")+(a|s<<8|r<<16).toString(16)}}},r=i(0),s=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-avatar--wrapper",style:[this.style,this.customStyle],attrs:{"aria-hidden":"true"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[this._v(this._s(this.userInitial))])])},[],!1,null,null,null);e.default=s.exports}}]);