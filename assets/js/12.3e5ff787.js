(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{220:function(n,e,r){"use strict";r.r(e);r(203),r(63),r(204),r(206),r(208),r(210);function t(n,e,r,t,o,a){var i={display:n?"inline-flex":"flex",width:"".concat(e,"px"),height:"".concat(e,"px"),borderRadius:r?"50%":0,lineHeight:"".concat(e+Math.floor(e/20),"px"),fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center"},c={"background-image":"url(".concat(t,")"),"background-position":"center","background-repeat":"no-repeat","background-size":"cover"},u={backgroundColor:o,font:"".concat(Math.floor(e/2.5),"px/").concat(e,"px Helvetica, Arial, sans-serif"),color:a},l=t?c:u;return Object.assign(i,l),i}function o(n,e){return n||e}function a(n,e){return n||e}function i(n,e){var r=!1;"#"===e[0]&&(e=e.slice(1),r=!0);var t=parseInt(e,16),o=(t>>16)+n;o>255?o=255:o<0&&(o=0);var a=(t>>8&255)+n;a>255?a=255:a<0&&(a=0);var i=(255&t)+n;return i>255?i=255:i<0&&(i=0),(r?"#":"")+(i|a<<8|o<<16).toString(16)}function c(n,e){return e[(n.length||Math.floor(10*Math.random()+1))%e.length]}function u(n,e){if(e&&e.length>0)return e;for(var r=n.split(/[ -]/),t="",o=0;o<r.length;o++)t+=r[o].charAt(0);return t.length>3&&-1!==t.search(/[A-Z]/)&&(t=t.replace(/[a-z]+/g,"")),t=t.substr(0,3).toUpperCase()}e.default={name:"VAvatar",functional:!0,props:{username:{type:String,default:"V-A"},initials:{type:String,default:void 0},backgroundColor:{type:String,default:void 0},color:{type:String,default:void 0},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String,default:""},rounded:{type:Boolean},lighten:{type:Number,default:80},backgroundColors:{type:Array,default:function(){return["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]}}},render:function(n,e){var r=e.props;return n("div",{style:t(r.inline,r.size,r.rounded,r.src,o(r.backgroundColor,c(r.username,r.backgroundColors)),a(r.color,i(r.lighten,o(r.backgroundColor,c(r.username,r.backgroundColors))))),attrs:{"aria-hidden":!0}},[r.src?n():n("span",u(r.username,r.initials))])}}}}]);