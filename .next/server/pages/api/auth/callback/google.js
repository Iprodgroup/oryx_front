"use strict";(()=>{var e={};e.id=586,e.ids=[586],e.modules={8982:e=>{e.exports=require("cookies-next")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},6011:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{config:()=>s,default:()=>l,routeModule:()=>d});var r=a(1802),o=a(7153),i=a(6249),c=a(4586),u=e([c]);c=(u.then?(await u)():u)[0];let l=(0,i.l)(c,"default"),s=(0,i.l)(c,"config"),d=new r.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/auth/callback/google",pathname:"/api/auth/callback/google",bundlePath:"",filename:""},userland:c});n()}catch(e){n(e)}})},4586:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>c});var r=a(8982),o=a(7546),i=e([o]);async function c(e,t){let{data:a}=await o.Z.get("/login/google/callback",{params:{code:e.query.code}});(0,r.setCookie)("access_token",a.token,{req:e,res:t}),t.redirect("/profile")}o=(i.then?(await i)():i)[0],n()}catch(e){n(e)}})},7546:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.d(t,{Z:()=>i});var r=a(9648),o=e([r]);let i=(r=(o.then?(await o)():o)[0]).default.create({baseURL:"https://cms.oryx.kz/api"});n()}catch(e){n(e)}})},7153:(e,t)=>{var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},1802:(e,t,a)=>{e.exports=a(145)}};var t=require("../../../../webpack-api-runtime.js");t.C(e);var a=t(t.s=6011);module.exports=a})();