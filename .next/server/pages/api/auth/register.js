"use strict";(()=>{var e={};e.id=7,e.ids=[7],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},1333:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>d,default:()=>c,routeModule:()=>P});var n=a(1802),i=a(7153),u=a(6249),o=a(1710),s=e([o]);o=(s.then?(await s)():s)[0];let c=(0,u.l)(o,"default"),d=(0,u.l)(o,"config"),P=new n.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/auth/register",pathname:"/api/auth/register",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},1710:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>u});var n=a(7546),i=e([n]);async function u(e,t){try{await n.Z.post("/register",e.body),t.status(201).end()}catch(e){t.status(422).end()}}n=(i.then?(await i)():i)[0],r()}catch(e){r(e)}})},7546:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>u});var n=a(9648),i=e([n]);let u=(n=(i.then?(await i)():i)[0]).default.create({baseURL:"https://cms.oryx.kz/api"});r()}catch(e){r(e)}})},7153:(e,t)=>{var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},1802:(e,t,a)=>{e.exports=a(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var a=t(t.s=1333);module.exports=a})();