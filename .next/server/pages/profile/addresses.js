(()=>{var e={};e.id=645,e.ids=[645,888,660],e.modules={5104:e=>{e.exports={btn:"styles_btn__EtVal"}},9307:e=>{e.exports={select:"styles_select__yAa7w",select__placeholder:"styles_select__placeholder__L2xGY",select__option:"styles_select__option__5MMAV"}},8233:e=>{e.exports={nav:"styles_nav__uws43",container:"styles_container__kz_bG"}},7453:e=>{e.exports={switch:"styles_switch__RTE57",active:"styles_active__FO7C2"}},3647:e=>{e.exports={wrapper:"ProfileAddresses_wrapper__5havv",left:"ProfileAddresses_left__5ZO5W",head:"ProfileAddresses_head__ffikm",switch:"ProfileAddresses_switch__fo9zq",fields:"ProfileAddresses_fields__LytDb",id:"ProfileAddresses_id__ZnXAN",schedule:"ProfileAddresses_schedule__Y1RIC",right:"ProfileAddresses_right__H5MC3"}},3785:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>m,default:()=>u,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>p,reportWebVitals:()=>g,routeModule:()=>b,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>j});var a=s(7093),i=s(5244),l=s(1323),n=s(1070),c=s(3893),o=s(2470),d=e([c,o]);[c,o]=d.then?(await d)():d;let u=(0,l.l)(o,"default"),p=(0,l.l)(o,"getStaticProps"),h=(0,l.l)(o,"getStaticPaths"),x=(0,l.l)(o,"getServerSideProps"),m=(0,l.l)(o,"config"),g=(0,l.l)(o,"reportWebVitals"),j=(0,l.l)(o,"unstable_getStaticProps"),y=(0,l.l)(o,"unstable_getStaticPaths"),_=(0,l.l)(o,"unstable_getStaticParams"),v=(0,l.l)(o,"unstable_getServerProps"),w=(0,l.l)(o,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/profile/addresses",pathname:"/profile/addresses",bundlePath:"",filename:""},components:{App:c.default,Document:n.default},userland:o});r()}catch(e){r(e)}})},8385:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var r=s(997),a=s(5104),i=s.n(a),l=s(1664),n=s.n(l);let c=()=>(0,r.jsxs)(n(),{href:"/profile/parcels/create",className:i().btn,children:[r.jsx("span",{children:"+"}),r.jsx("p",{children:"Добавить посылку"})]})},7788:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>p});var a=s(997),i=s(9307),l=s.n(i),n=s(3554),c=s(5675),o=s.n(c),d=e([n]);n=(d.then?(await d)():d)[0];let u=[{value:"usa",label:"США",image:"/usa.svg"},{value:"eu",label:"Европа",image:"/eu.svg"}],p=()=>a.jsx(n.default,{options:u,formatOptionLabel:e=>(0,a.jsxs)("div",{className:l().select__option,children:[a.jsx(o(),{src:e.image,alt:"country-"+e.value,width:28,height:28}),a.jsx("span",{children:e.label})]}),defaultValue:{value:"usa",label:"США",image:"/usa.svg"},isSearchable:!1,classNames:{control:()=>l().select,singleValue:()=>l().select__placeholder},components:{IndicatorSeparator:()=>null},isDisabled:!0});r()}catch(e){r(e)}})},9400:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>h});var a=s(997),i=s(6689),l=s(8233),n=s.n(l),c=s(1163),o=s(118),d=s(1664),u=s.n(d),p=e([o]);o=(p.then?(await p)():p)[0];let h=({children:e})=>{let t=(0,o.useIsClient)(),s=(0,c.useRouter)(),r=(0,o.useMediaQuery)("(min-width: 576px)");return(0,i.useEffect)(()=>{let e=document.body;return e.style.backgroundColor="#F4F5FE",()=>{e.removeAttribute("style")}},[]),t&&(0,a.jsxs)(a.Fragment,{children:[r||"/profile"===s.pathname?a.jsx("nav",{className:n().nav,children:(0,a.jsxs)("ul",{children:[a.jsx("li",{children:a.jsx(u(),{href:"/profile/addresses",children:"Мои адреса"})}),a.jsx("li",{children:a.jsx(u(),{href:"/profile/parcels",children:"Мои посылки"})}),a.jsx("li",{children:a.jsx(u(),{href:"/profile/settings",children:"Личные данные"})}),a.jsx("li",{children:a.jsx(u(),{href:"/profile/nsettings",children:"Настройка уведомлений"})})]})}):a.jsx(a.Fragment,{}),a.jsx("section",{children:a.jsx("div",{className:n().container,children:e})})]})};r()}catch(e){r(e)}})},2929:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(997),a=s(7453),i=s.n(a),l=s(1163),n=s(9003),c=s.n(n);let o=()=>{let e=(0,l.useRouter)(),t="/profile/parcels",s="/profile/addresses";return(0,r.jsxs)("div",{className:i().switch,children:[r.jsx("button",{className:c()(i().button,{[i().active]:e.pathname===t}),onClick:()=>e.replace(t),children:"Мои посылки"}),r.jsx("button",{className:c()(i().button,{[i().active]:e.pathname===s}),onClick:()=>e.replace(s),children:"Мои адреса"})]})}},1070:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(997),a=s(6859);function i(){return(0,r.jsxs)(a.Html,{lang:"ru",children:[(0,r.jsxs)(a.Head,{children:[r.jsx("meta",{name:"description",content:"oryx"}),r.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.jsx("meta",{name:"google-site-verification",content:"vp6g7rjn5equhL-Lf8Drs_xJAPsSb3ddlCuWnTSnLTg"}),r.jsx("meta",{name:"yandex-verification",content:"cf6f970418b0ab07"}),r.jsx("link",{rel:"icon",href:"/favicon.ico"}),r.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-V467M4TDHR"}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V467M4TDHR');
            `}}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
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
            `}})]}),(0,r.jsxs)("body",{children:[r.jsx("noscript",{children:r.jsx("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-PZJV3C4K",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PZJV3C4K');
            `}}),r.jsx(a.Main,{}),r.jsx(a.NextScript,{})]})]})}},2470:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>k,getServerSideProps:()=>S});var a=s(997),i=s(6689),l=s(3647),n=s.n(l),c=s(118),o=s(5675),d=s.n(o),u=s(1664),p=s.n(u),h=s(6201),x=s(8688),m=s(9400),g=s(8385),j=s(5811),y=s(6863),_=s(2929),v=s(7788),w=s(968),b=s.n(w),f=e([c,h,m,j,v]);[c,h,m,j,v]=f.then?(await f)():f;let S=async e=>{let t=await j.Z.get("/user",{...(0,y.Z)(e)});return{props:{user:await t.data}}},k=({user:e})=>{let[t,s]=(0,i.useState)("delaware"),r=(0,c.useIsClient)(),l=(0,c.useMediaQuery)("(min-width: 576px)"),o={address1:"delaware"===t?"705 Carson drive":"3047 Emmons Avenue Brooklyn",address2:e.id_orx,city:"delaware"===t?"Bear":"New York",state:"delaware"===t?"DE":"New York (NY)",zip:"delaware"===t?19701:11235,country:"USA (United States of America)",phone:19176057707},u=e=>{navigator.clipboard.writeText(e).then(()=>{(0,h.default)("Скопировано")})};return r&&(0,a.jsxs)(m.Z,{children:[a.jsx(b(),{children:a.jsx("title",{children:"Мои персональные адреса"})}),(0,a.jsxs)("div",{className:n().wrapper,children:[(0,a.jsxs)("div",{className:n().left,children:[l?(0,a.jsxs)("div",{className:n().head,children:[a.jsx(d(),{src:"/plane.svg",alt:"plane",width:50,height:50}),a.jsx("h1",{children:"Ваши персональные адреса"})]}):(0,a.jsxs)("div",{children:[a.jsx(g.Z,{}),a.jsx(_.Z,{}),a.jsx(v.Z,{})]}),a.jsx("div",{className:n().switch,children:["delaware","ny"].map((e,r)=>(0,a.jsxs)("button",{style:{borderBottomColor:e===t?"#E84438":"#00000080",opacity:e===t?1:.7},onClick:()=>s(e),children:["Адрес в ","delaware"===e?"Дэлавер":"Нью-Йорке"]},r))}),(0,a.jsxs)("div",{className:n().fields,children:[(0,a.jsxs)("label",{children:["Address 1:",a.jsx("input",{type:"text",value:o.address1,disabled:!0}),a.jsx("button",{className:n().copy__btn,onClick:()=>u(o.address1),children:a.jsx(d(),{src:"/copy.svg",alt:"copy",width:35,height:35})})]}),(0,a.jsxs)("label",{children:["Address 2:",a.jsx("input",{type:"text",value:o.address2,disabled:!0,className:n().id}),a.jsx("button",{className:n().copy__btn,onClick:()=>u(o.address2),children:a.jsx(d(),{src:"/copy.svg",alt:"copy",width:35,height:35})})]}),(0,a.jsxs)("label",{children:["City:",a.jsx("input",{type:"text",value:o.city,disabled:!0}),a.jsx("button",{className:n().copy__btn,onClick:()=>u(o.city),children:a.jsx(d(),{src:"/copy.svg",alt:"copy",width:35,height:35})})]}),(0,a.jsxs)("label",{children:["State:",a.jsx("input",{type:"text",value:o.state,disabled:!0}),a.jsx("button",{className:n().copy__btn,onClick:()=>u(o.state),children:a.jsx(d(),{src:"/copy.svg",alt:"copy",width:35,height:35})})]}),(0,a.jsxs)("label",{children:["Zip code:",a.jsx("input",{type:"number",value:o.zip,disabled:!0}),a.jsx("button",{className:n().copy__btn,onClick:()=>u(o.zip.toString()),children:a.jsx(d(),{src:"/copy.svg",alt:"copy",width:35,height:35})})]}),(0,a.jsxs)("label",{children:["Country:",a.jsx("input",{type:"text",value:o.country,disabled:!0}),a.jsx("button",{className:n().copy__btn,onClick:()=>u(o.country),children:a.jsx(d(),{src:"/copy.svg",alt:"copy",width:35,height:35})})]}),(0,a.jsxs)("label",{children:["Phone:",a.jsx("input",{type:"number",value:o.phone,disabled:!0}),a.jsx("button",{className:n().copy__btn,onClick:()=>u(o.phone.toString()),children:a.jsx(d(),{src:"/copy.svg",alt:"copy",width:35,height:35})})]})]}),(0,a.jsxs)("p",{className:n().schedule,children:["Посылки принимаются на склад только в рабочие дни и в рабочее время.***",a.jsx("br",{}),"09:00-17:00 понедельник-пятница, по времени","delaware"===t?"Дэлавер":"Нью-Йорк"]})]}),a.jsx("div",{className:n().right,children:l?(0,a.jsxs)(a.Fragment,{children:[a.jsx(g.Z,{}),a.jsx("p",{children:"При оформлении заказа на американских сайтах обязательно указывайте Address 2 - это ваш уникальный номер ID. По нему мы узнаем, что это ваша посылка, когда посылка поступит на наш склад. Посылки без ID будет отложены в неопознанные грузы"}),a.jsx(p(),{href:"/prohibited",children:"Смотреть список запрещенных товаров"}),a.jsx(d(),{src:"/man.svg",alt:"man",...x.v})]}):a.jsx(d(),{src:"/man.svg",alt:"man",...x.v,style:{width:"100%",maxHeight:"400px"},priority:!0})})]})]})};r()}catch(e){r(e)}})},8688:(e,t,s)=>{"use strict";s.d(t,{v:()=>r});let r={width:0,height:0,sizes:"100vw",style:{width:"100%",height:"100%"}}},6863:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=e=>({headers:{Authorization:`Bearer ${e.req.cookies.access_token}`}})},9003:e=>{"use strict";e.exports=require("classnames")},8982:e=>{"use strict";e.exports=require("cookies-next")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6238:e=>{"use strict";e.exports=require("nextjs-toploader")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},4108:e=>{"use strict";e.exports=require("react-modern-drawer")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},8848:e=>{"use strict";e.exports=import("@react-input/mask")},9648:e=>{"use strict";e.exports=import("axios")},9915:e=>{"use strict";e.exports=import("js-cookie")},6201:e=>{"use strict";e.exports=import("react-hot-toast")},3554:e=>{"use strict";e.exports=import("react-select")},5941:e=>{"use strict";e.exports=import("swr")},118:e=>{"use strict";e.exports=import("usehooks-ts")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[117,235,859,342,893],()=>s(3785));module.exports=r})();