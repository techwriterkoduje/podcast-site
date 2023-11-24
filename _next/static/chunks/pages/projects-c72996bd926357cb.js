(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{2522:function(e,t,r){"use strict";r.d(t,{Z:function(){return F}});var n=r(9499),o=r(9630),i=r(5439),a=r(3366),c=r(7462),s=r(7294),d=r(6010),u=r(4780),p=r(8884),l=r(1719),f=r(4867),j=r(1588);function m(e){return(0,f.Z)("MuiCardMedia",e)}(0,j.Z)("MuiCardMedia",["root","media","img"]);var b=r(5893);let g=["children","className","component","image","src","style"],y=e=>{let{classes:t,isMediaComponent:r,isImageComponent:n}=e;return(0,u.Z)({root:["root",r&&"media",n&&"img"]},m,t)},h=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{isMediaComponent:n,isImageComponent:o}=r;return[t.root,n&&t.media,o&&t.img]}})(({ownerState:e})=>(0,c.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),w=["video","audio","picture","iframe","img"],O=["picture","img"],Z=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:o,component:i="div",image:s,src:u,style:l}=r,f=(0,a.Z)(r,g),j=-1!==w.indexOf(i),m=!j&&s?(0,c.Z)({backgroundImage:`url("${s}")`},l):l,Z=(0,c.Z)({},r,{component:i,isMediaComponent:j,isImageComponent:-1!==O.indexOf(i)}),k=y(Z);return(0,b.jsx)(h,(0,c.Z)({className:(0,d.Z)(k.root,o),as:i,role:!j&&s?"img":void 0,ref:t,style:m,ownerState:Z,src:j?s||u:void 0},f,{children:n}))});function k(e){return(0,f.Z)("MuiCardContent",e)}(0,j.Z)("MuiCardContent",["root"]);let x=["className","component"],v=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},k,t)},P=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),z=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiCardContent"}),{className:n,component:o="div"}=r,i=(0,a.Z)(r,x),s=(0,c.Z)({},r,{component:o}),u=v(s);return(0,b.jsx)(P,(0,c.Z)({as:o,className:(0,d.Z)(u.root,n),ownerState:s,ref:t},i))});function C(e){return(0,f.Z)("MuiCardActions",e)}(0,j.Z)("MuiCardActions",["root","spacing"]);let S=["disableSpacing","className"],M=e=>{let{classes:t,disableSpacing:r}=e;return(0,u.Z)({root:["root",!r&&"spacing"]},C,t)},N=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,c.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),D=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:n=!1,className:o}=r,i=(0,a.Z)(r,S),s=(0,c.Z)({},r,{disableSpacing:n}),u=M(s);return(0,b.jsx)(N,(0,c.Z)({className:(0,d.Z)(u.root,o),ownerState:s,ref:t},i))});var R=r(1225),E=r(2097),_=r(5746);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function F(e){var t=e.title,r=e.description,n=e.actionLinks,a=e.imageUrl,c=e.embedId,s=(0,E.Z)(),d=(0,R.Z)(s.breakpoints.up("sm")),u=d?"1rem 3rem":void 0,p={height:d?"350px":"160px"};return(0,b.jsxs)(_.Z,{children:[a&&(0,b.jsx)(Z,{image:a,sx:A({},p)}),c&&(0,b.jsx)(Z,{component:"iframe",src:"https://www.youtube.com/embed/".concat(c),allowFullScreen:!0,sx:A({border:"none"},p)}),(0,b.jsxs)(z,{sx:{padding:u},children:[(0,b.jsx)(o.Z,{gutterBottom:!0,variant:"h5",component:"div",children:t}),(0,b.jsx)(o.Z,{component:"div",children:r})]}),(0,b.jsx)(D,{sx:{padding:u},children:n.map(function(e,t){var r=e.to,n=e.label;return(0,b.jsx)(i.Z,{href:r,children:n},t)})})]})}},658:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(9499),o=r(4730),i=r(9630),a=r(5893),c=["children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){var t=e.children,r=(0,o.Z)(e,c);return(0,a.jsx)(i.Z,d(d({className:"exclude-from-index",variant:"h1"},r),{},{children:t}))}},4142:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4288),o=r(9144),i=r(5893);function a(e){var t=e.children,r=e.centered;return e.wide,(0,i.jsx)(n.Z,{sx:{padding:"3rem 1rem",minHeight:"100vh"},children:(0,i.jsx)(o.Z,{spacing:6,sx:{alignItems:r?"center":"flex-start",justifyContent:r?"center":"flex-start"},children:t})})}},5535:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(6301),o=r(9499),i=r(2522),a=r(4142),c=r(658),s=r(5893),d=r(7294);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var l=[{title:"Semantyczne testy w DITA (Python)",imageUrl:"semantics.png",description:(0,s.jsx)(s.Fragment,{children:"Semantyczne tagi w standardzie DITA pozwalają na na pisanie bardzo dokładnych test\xf3w dokumentacji. Na przykład możesz sprawdzić czy komenda (<codeblock>) zapisana w dokumentacji jest poprawna i czy przyniesie pożądany skutek (<result>)."}),actionLinks:[{to:"https://github.com/techwriterkoduje/dita-semantic-tests",label:"Zacznij testować"}]},{title:"Statyczna strona z dokumentacja do wielu API (Next.js + Redoc)",imageUrl:"next-redoc.png",description:(0,s.jsx)(s.Fragment,{children:"Zobacz przykład strony, kt\xf3ra wyświetla zbi\xf3r specyfikacji OpenAPI. Redoc renderuje każdą ze specyfikacji. Next.js serwuje całość jako statyczną stronę."}),actionLinks:[{to:"https://github.com/techwriterkoduje/next-js-redoc",label:"Dokumentuj API"}]},{title:"Focus Grid",imageUrl:"focus-grid.png",description:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("p",{children:"Gra poprawiająca koncentrację. Wybierz rozmiar tablicy i odsłoń kolejne liczby w jak najkr\xf3tszym czasie."})}),actionLinks:[{to:"/focusgrid",label:"Zagraj"}]},{title:"Źr\xf3dło tej strony (Next.js)",imageUrl:"website.png",description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Podoba Ci się nasza strona? Chcesz stworzyć podobną? Strona opiera się o Next.js. Odcinki są pobierane z anchor.fm przez RSS feed. Strona jest statycznie generowana kiedy wychodzi nowy odcinek lub robimy jakieś inne zmiany."}),(0,s.jsx)("p",{children:"Strona jest deployowana za pomocą GitHub Actions i hostowana na GitHub Pages."})]}),actionLinks:[{to:"https://github.com/techwriterkoduje/podcast-site",label:"Zainspiruj się"}]}];function f(){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{children:"Projekty"}),l.map(function(e){return(0,d.createElement)(i.Z,p(p({},e),{},{key:e.title}))})]})}function j(){return(0,s.jsx)(n.Z,{title:"Projekty",description:"Przykładowe projekty autor\xf3w podcastu. Projekty ilustrują koncepcje omawiane w podcaście.",children:(0,s.jsx)(f,{})})}},7670:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(5535)}])}},function(e){e.O(0,[408,301,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);