(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[4972],{14972:(E,m,i)=>{"use strict";i.r(m),i.d(m,{ROUTES_EE:()=>l});var u=i(27279),a=i(82959),p=i(77228),d=i.n(p),C=i(61020),t=i(51447);const o=()=>{const{params:{authResponse:n}}=(0,t.$B)("/auth/login/:authResponse"),{formatMessage:r}=(0,C.Z)(),{push:e}=(0,t.k6)(),h=(0,u.useRef)(r);let c=(0,u.useCallback)(()=>{e(`/auth/oops?info=${encodeURIComponent(h.current({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[e]);const{get:f}=(0,a.kY)(),s=(0,u.useCallback)(async()=>{try{const g=d().get("jwtToken");if(a.I8.clearAppStorage(),g){a.I8.setToken(g,!0);const R="/admin/users/me",{data:{data:I}}=await f(R);a.I8.setUserInfo(I,!0),d().remove("jwtToken"),e("/auth/login")}}catch{c()}},[f,e,c]);return(0,u.useEffect)(()=>{n==="error"&&c(),n==="success"&&s()},[n,s,c]),u.createElement(a.dO,null)},v=null,l=[{Component:()=>({default:o}),to:"/auth/login/:authResponse",exact:!0}]},77228:(E,m,i)=>{var u,a;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(p){var d;if(u=p,a=typeof u=="function"?u.call(m,i,m,E):u,a!==void 0&&(E.exports=a),d=!0,E.exports=p(),d=!0,!d){var C=window.Cookies,t=window.Cookies=p();t.noConflict=function(){return window.Cookies=C,t}}})(function(){function p(){for(var t=0,o={};t<arguments.length;t++){var v=arguments[t];for(var l in v)o[l]=v[l]}return o}function d(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function C(t){function o(){}function v(n,r,e){if(!(typeof document>"u")){e=p({path:"/"},o.defaults,e),typeof e.expires=="number"&&(e.expires=new Date(new Date*1+e.expires*864e5)),e.expires=e.expires?e.expires.toUTCString():"";try{var h=JSON.stringify(r);/^[\{\[]/.test(h)&&(r=h)}catch{}r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var f in e)e[f]&&(c+="; "+f,e[f]!==!0&&(c+="="+e[f].split(";")[0]));return document.cookie=n+"="+r+c}}function l(n,r){if(!(typeof document>"u")){for(var e={},h=document.cookie?document.cookie.split("; "):[],c=0;c<h.length;c++){var f=h[c].split("="),s=f.slice(1).join("=");!r&&s.charAt(0)==='"'&&(s=s.slice(1,-1));try{var g=d(f[0]);if(s=(t.read||t)(s,g)||d(s),r)try{s=JSON.parse(s)}catch{}if(e[g]=s,n===g)break}catch{}}return n?e[n]:e}}return o.set=v,o.get=function(n){return l(n,!1)},o.getJSON=function(n){return l(n,!0)},o.remove=function(n,r){v(n,"",p(r,{expires:-1}))},o.defaults={},o.withConverter=C,o}return C(function(){})})}}]);