"use strict";(()=>{var e={};e.id=313,e.ids=[313,888,660],e.modules={9138:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>d,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>u,reportWebVitals:()=>h,routeModule:()=>v,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>f});var s=r(7093),i=r(5244),n=r(1323),o=r(1070),c=r(3893),l=r(2274),p=e([c,l]);[c,l]=p.then?(await p)():p;let d=(0,n.l)(l,"default"),u=(0,n.l)(l,"getStaticProps"),m=(0,n.l)(l,"getStaticPaths"),g=(0,n.l)(l,"getServerSideProps"),x=(0,n.l)(l,"config"),h=(0,n.l)(l,"reportWebVitals"),f=(0,n.l)(l,"unstable_getStaticProps"),w=(0,n.l)(l,"unstable_getStaticPaths"),y=(0,n.l)(l,"unstable_getStaticParams"),j=(0,n.l)(l,"unstable_getServerProps"),S=(0,n.l)(l,"unstable_getServerSideProps"),v=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/email/verify/[id]/[hash]",pathname:"/email/verify/[id]/[hash]",bundlePath:"",filename:""},components:{App:c.default,Document:o.default},userland:l});a()}catch(e){a(e)}})},1070:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(997),s=r(6859);function i(){return(0,a.jsxs)(s.Html,{lang:"ru",children:[(0,a.jsxs)(s.Head,{children:[a.jsx("meta",{name:"description",content:"oryx"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.jsx("meta",{name:"google-site-verification",content:"vp6g7rjn5equhL-Lf8Drs_xJAPsSb3ddlCuWnTSnLTg"}),a.jsx("meta",{name:"yandex-verification",content:"cf6f970418b0ab07"}),a.jsx("link",{rel:"icon",href:"/favicon.ico"}),a.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-V467M4TDHR"}),a.jsx("script",{dangerouslySetInnerHTML:{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V467M4TDHR');
            `}}),a.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(98298866, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
              });
            `}})]}),(0,a.jsxs)("body",{children:[a.jsx("noscript",{children:a.jsx("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-PZJV3C4K",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),a.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PZJV3C4K');
            `}}),a.jsx(s.Main,{}),a.jsx(s.NextScript,{})]})]})}},2274:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d,getServerSideProps:()=>p});var s=r(6689),i=r(1163),n=r(9648),o=r(6201),c=r(1716),l=e([n,o]);[n,o]=l.then?(await l)():l;let p=(0,c.Z)("/profile")(async()=>({props:{}})),d=()=>{let e=(0,i.useRouter)(),{id:t,hash:r,expires:a,signature:c}=e.query;return(0,s.useEffect)(()=>{t&&r&&a&&c&&n.default.get("/api/email/verify",{params:{id:t,hash:r,expires:a,signature:c}}).then(()=>{o.default.success("Почта подтверждена, выполните вход"),e.replace("/login")}).catch(e=>{403===e.response.status?o.default.error("Недействительная подпись"):o.default.error("Ошибка при подтверждении почты")})},[t,r,a,c,e]),null};a()}catch(e){a(e)}})},1716:(e,t,r)=>{r.d(t,{Z:()=>a});let a=e=>t=>async r=>r.req.cookies.access_token?{redirect:{destination:e,permanent:!1}}:t?await t(r):{props:{}}},8982:e=>{e.exports=require("cookies-next")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6238:e=>{e.exports=require("nextjs-toploader")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},4108:e=>{e.exports=require("react-modern-drawer")},997:e=>{e.exports=require("react/jsx-runtime")},8848:e=>{e.exports=import("@react-input/mask")},9648:e=>{e.exports=import("axios")},9915:e=>{e.exports=import("js-cookie")},6201:e=>{e.exports=import("react-hot-toast")},5941:e=>{e.exports=import("swr")},118:e=>{e.exports=import("usehooks-ts")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[117,235,859,342,893],()=>r(9138));module.exports=a})();