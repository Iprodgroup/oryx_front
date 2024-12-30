(()=>{var e={};e.id=621,e.ids=[621,888,660],e.modules={3598:e=>{e.exports={wrapper:"PopularStores_wrapper__9Hyr1",top:"PopularStores_top__MsJAR",filtrations:"PopularStores_filtrations__Ls7Me",categories:"PopularStores_categories__gnxGE",active:"PopularStores_active__jL7GV",stores:"PopularStores_stores__CEyhi",bottom:"PopularStores_bottom__Mri9y"}},1005:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>m,getServerSideProps:()=>g,getStaticPaths:()=>d,getStaticProps:()=>u,reportWebVitals:()=>y,routeModule:()=>S,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>h});var i=r(7093),a=r(5244),n=r(1323),o=r(1070),c=r(3893),l=r(9368),p=e([c,l]);[c,l]=p.then?(await p)():p;let m=(0,n.l)(l,"default"),u=(0,n.l)(l,"getStaticProps"),d=(0,n.l)(l,"getStaticPaths"),g=(0,n.l)(l,"getServerSideProps"),x=(0,n.l)(l,"config"),y=(0,n.l)(l,"reportWebVitals"),h=(0,n.l)(l,"unstable_getStaticProps"),j=(0,n.l)(l,"unstable_getStaticPaths"),f=(0,n.l)(l,"unstable_getStaticParams"),_=(0,n.l)(l,"unstable_getServerProps"),w=(0,n.l)(l,"unstable_getServerSideProps"),S=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/populyarnye-magaziny",pathname:"/populyarnye-magaziny",bundlePath:"",filename:""},components:{App:c.default,Document:o.default},userland:l});s()}catch(e){s(e)}})},1070:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(997),i=r(6859);function a(){return(0,s.jsxs)(i.Html,{lang:"ru",children:[(0,s.jsxs)(i.Head,{children:[s.jsx("meta",{name:"description",content:"oryx"}),s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s.jsx("meta",{name:"google-site-verification",content:"vp6g7rjn5equhL-Lf8Drs_xJAPsSb3ddlCuWnTSnLTg"}),s.jsx("meta",{name:"yandex-verification",content:"cf6f970418b0ab07"}),s.jsx("link",{rel:"icon",href:"/favicon.ico"}),s.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-V467M4TDHR"}),s.jsx("script",{dangerouslySetInnerHTML:{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V467M4TDHR');
            `}}),s.jsx("script",{dangerouslySetInnerHTML:{__html:`
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
            `}})]}),(0,s.jsxs)("body",{children:[s.jsx("noscript",{children:s.jsx("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-PZJV3C4K",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),s.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PZJV3C4K');
            `}}),s.jsx(i.Main,{}),s.jsx(i.NextScript,{})]})]})}},9368:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>j,getServerSideProps:()=>h});var i=r(997),a=r(3598),n=r.n(a),o=r(1163),c=r(968),l=r.n(c),p=r(1664),m=r.n(p),u=r(5675),d=r.n(u),g=r(8688),x=r(5811),y=e([x]);x=(y.then?(await y)():y)[0];let h=async({query:e})=>{let t=await x.Z.get("/popular-stores",{params:{category_id:e.categoryId}}),r=t.data.categories,s=t.data.stores;return{props:{categories:r,stores:s}}},j=({categories:e,stores:t})=>{let r=(0,o.useRouter)(),s=+r.query.categoryId,a=e=>{r.replace({pathname:r.pathname,query:{...r.query,categoryId:e}})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[i.jsx("title",{children:"Список популярных магазинов в США - ORYX"}),i.jsx("meta",{name:"description",content:"Доставка товаров из магазинов Nike, Puma, Apple и других брендов в Казахстан до 10 дней."}),i.jsx("meta",{property:"og:type",content:"website"}),i.jsx("meta",{property:"og:title",content:"Список популярных магазинов в США - ORYX"}),i.jsx("meta",{property:"og:description",content:"Доставка товаров из магазинов Nike, Puma, Apple и других брендов в Казахстан до 10 дней."}),i.jsx("meta",{property:"og:url",content:"https://oryx.kz/"}),i.jsx("meta",{property:"og:site_name",content:"Список популярных магазинов в США - ORYX"}),i.jsx("meta",{property:"og:image",content:"https://oryx.kz/logo.svg"}),i.jsx("link",{rel:"canonical",href:"https://oryx.kz/populyarnye-magaziny"}),i.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:"Список популярных магазинов в США - ORYX",description:"Доставка товаров из магазинов Nike, Puma, Apple и других брендов в Казахстан до 10 дней.",url:"https://oryx.kz/populyarnye-magaziny",mainEntity:{"@type":"ItemList",itemListElement:t.map((e,t)=>({"@type":"ListItem",position:t+1,url:`https://oryx.kz/populyarnye-magaziny/${e.slug}`,name:e.name,image:e.img}))},about:t.map(e=>({"@type":"Thing",name:e.name,identifier:e.id}))})}}),i.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Главная",item:"https://oryx.kz/"},{"@type":"ListItem",position:2,name:"Популярные магазины",item:"https://oryx.kz/populyarnye-magaziny"}]})}})]}),i.jsx("section",{children:(0,i.jsxs)("div",{className:n().wrapper,children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px",color:"#706e6e"},children:[i.jsx(m(),{href:"/",style:{textDecoration:"underline"},children:"Главная"}),"/ Популярные магазины"]}),(0,i.jsxs)("div",{className:n().top,children:[i.jsx("h1",{children:"Популярные магазины в США"}),i.jsx("p",{children:"Мы подготовили для вас список самых популярных магазинов одежды, которые диктуют тренды каждого сезона"}),(0,i.jsxs)("div",{className:n().filtrations,style:{display:"flex"},children:[(0,i.jsxs)("div",{className:n().categories,children:[i.jsx("p",{style:{color:"#000"},children:"Категории"}),e.map(e=>i.jsx("button",{className:s===e.id?n().active:"",onClick:()=>a(e.id),children:e.name},e.id))]}),i.jsx("div",{className:n().stores,children:t.map(e=>(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"},children:[i.jsx(m(),{href:`/populyarnye-magaziny/${e.slug}`,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",textAlign:"center"},children:i.jsx(d(),{src:e.img,alt:e.name,...g.v})}),i.jsx(m(),{href:`/populyarnye-magaziny/${e.slug}`,style:{marginTop:"auto",fontWeight:"700"},children:e.name})]},e.id))})]})]}),(0,i.jsxs)("div",{className:n().bottom,children:[i.jsx("h2",{children:"Что чаще всего покупают в США?"}),i.jsx("p",{children:"Сейчас огромной популярностью пользуются интернет-магазины в США. В Америке можно купить все, что угодно от одежды, бытовой техники и даже автомобильных запчастей. На покупке оригинальных брендов Вы сэкономите 20-40% её офлайн стоимости, а на скидках можно сэкономить до 80-90%, учитывая доставку. Помимо экономии, интернет-шоппинг в США отличается огромным разнообразием ассортимента и эксклюзивных коллекций, которые редко найдёшь в нашей стране."})]})]})})]})};s()}catch(e){s(e)}})},8688:(e,t,r)=>{"use strict";r.d(t,{v:()=>s});let s={width:0,height:0,sizes:"100vw",style:{width:"100%",height:"100%"}}},8982:e=>{"use strict";e.exports=require("cookies-next")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6238:e=>{"use strict";e.exports=require("nextjs-toploader")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},4108:e=>{"use strict";e.exports=require("react-modern-drawer")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},8848:e=>{"use strict";e.exports=import("@react-input/mask")},9648:e=>{"use strict";e.exports=import("axios")},9915:e=>{"use strict";e.exports=import("js-cookie")},6201:e=>{"use strict";e.exports=import("react-hot-toast")},5941:e=>{"use strict";e.exports=import("swr")},118:e=>{"use strict";e.exports=import("usehooks-ts")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[117,235,859,342,893],()=>r(1005));module.exports=s})();