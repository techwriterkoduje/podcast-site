(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(6661)}])},6764:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(5893),r=n(2079),o=n(5084),s=n(1664),c=n.n(s);function a(e){let{to:t,children:n}=e;return t.startsWith("http")?(0,i.jsx)(o.Z,{href:t,target:"_blank",variant:"outlined",endIcon:(0,i.jsx)(r.Z,{}),children:n}):(0,i.jsx)(c(),{href:t,children:(0,i.jsx)(o.Z,{variant:"contained",children:n})})}},834:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i=n(5893),r=n(9630),o=n(6764),s=n(9837),c=n(9647),a=n(1359),d=n(2026),l=n(1225),u=n(2734);function j(e){let{title:t,description:n,actionLinks:j,imageUrl:x,embedId:h}=e,p=(0,u.Z)(),m=(0,l.Z)(p.breakpoints.up("sm")),f=m?"1rem 3rem":void 0,k={height:m?"350px":"160px"};return(0,i.jsxs)(s.Z,{variant:"outlined",sx:{width:"100%",paddingBottom:"1rem"},children:[x&&(0,i.jsx)(c.Z,{image:"".concat("/podcast-site/").concat(x),sx:{...k}}),h&&(0,i.jsx)(c.Z,{component:"iframe",src:"https://www.youtube.com/embed/".concat(h),allowFullScreen:!0,sx:{border:"none",...k}}),(0,i.jsxs)(a.Z,{sx:{padding:f},children:[(0,i.jsx)(r.Z,{gutterBottom:!0,variant:"h5",component:"div",children:t}),(0,i.jsx)(r.Z,{children:n})]}),(0,i.jsx)(d.Z,{sx:{padding:f},children:j.map((e,t)=>{let{to:n,label:r}=e;return(0,i.jsx)(o.Z,{to:n,children:r},t)})})]})}},3812:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var i=n(5893),r=n(9008),o=n.n(r),s=n(9144),c=n(6638),a=n(642),d=n(7600),l=n(3581),u=n(6214),j=n(891);let x=[{label:"Odcinki",href:"/episode-list",icon:(0,i.jsx)(a.Z,{})},{label:"Czytelnia",href:"/read",icon:(0,i.jsx)(d.Z,{})},{label:"Filmiki",href:"/watch",icon:(0,i.jsx)(l.Z,{})},{label:"Projekty",href:"/projects",icon:(0,i.jsx)(u.Z,{})},{label:"Kontakt",href:"/contact",icon:(0,i.jsx)(j.Z,{})}];var h=n(1281),p=n(7294),m=n(562),f=n(326),k=n(4631),g=n(5214),Z=n(1284),w=n(2734),z=n(1225);function y(){return(0,i.jsx)(h.Z,{href:"/",sx:{width:"24px",height:"24px"},children:(0,i.jsx)(c.Z,{})})}function b(){return(0,i.jsxs)(s.Z,{direction:"row",sx:{color:"#ed6e5f",borderBottom:"2px solid #ed6e5f",alignItems:"center",height:"50px",padding:"0 1rem",gap:"1rem"},children:[(0,i.jsx)(y,{}),x.map(e=>{let{href:t,label:n}=e;return(0,i.jsx)(h.Z,{href:t,sx:{fontSize:"1.1rem"},children:n},n)})]})}function v(){let[e,t]=(0,p.useState)(!1);return(0,i.jsxs)(s.Z,{alignItems:"center",direction:"row",children:[(0,i.jsx)(y,{}),(0,i.jsx)(m.Z,{"aria-label":"Otw\xf3rz listę podstron",onClick:()=>{t(!0)},size:"large",children:(0,i.jsx)(f.Z,{htmlColor:"white"})}),(0,i.jsx)(k.ZP,{anchor:"left",open:e,onClose:()=>{t(!1)},children:(0,i.jsx)(g.Z,{children:x.map(e=>{let{href:t,label:n,icon:r}=e;return(0,i.jsx)(Z.ZP,{children:(0,i.jsxs)(h.Z,{href:t,sx:{display:"flex",alignItems:"center",gap:"1rem",padding:"0.5rem 1rem",fontSize:"1.5rem",lineHeight:"1.5"},children:[(0,i.jsx)("div",{children:r}),(0,i.jsx)("div",{children:n})]})},n)})})})]})}function P(){let e=(0,w.Z)(),t=(0,z.Z)(e.breakpoints.up("sm"));return t?(0,i.jsx)(b,{}):(0,i.jsx)(v,{})}var _=n(9630);function S(){return(0,i.jsxs)(s.Z,{sx:{alignItems:"center",justifyContent:"center",padding:"1rem",borderTop:"2px solid #ed6e5f"},children:[(0,i.jsxs)(_.Z,{children:["Copyright \xa9 ",new Date().getFullYear()," ","Tech Writer Koduje"]}),(0,i.jsx)(_.Z,{children:"Logo stworzone przez rad89"})]})}function C(e){let{title:t,description:n,isHome:r,children:s}=e,c="".concat(t).concat(r?"":" | Tech Writer Koduje");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:c}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("link",{rel:"icon",href:"".concat("/podcast-site/","favicon.ico")})]}),(0,i.jsx)(P,{}),s,(0,i.jsx)(S,{})]})}},1281:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5893),r=n(8346),o=n(1664),s=n.n(o);function c(e){return(0,i.jsx)(r.Z,{component:s(),...e})}},663:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(5893),r=n(8016),o=n(9144);function s(e){let{children:t,centered:n,wide:s}=e;return(0,i.jsx)(r.Z,{sx:{padding:"3rem 1rem",minHeight:"100vh"},maxWidth:s?"lg":"md",children:(0,i.jsx)(o.Z,{spacing:2,sx:{alignItems:n?"center":"flex-start",justifyContent:n?"center":"flex-start"},children:t})})}},6661:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(5893),r=n(3812),o=n(7294),s=n(9630),c=n(834),a=n(663);let d=[{title:"Semantyczne testy w DITA (Python)",imageUrl:"semantics.png",description:(0,i.jsx)(i.Fragment,{children:"Semantyczne tagi w standardzie DITA pozwalają na na pisanie bardzo dokładnych test\xf3w dokumentacji. Na przykład możesz sprawdzić czy komenda (<codeblock>) zapisana w dokumentacji jest poprawna i czy przyniesie pożądany skutek (<result>)."}),actionLinks:[{to:"https://github.com/techwriterkoduje/dita-semantic-tests",label:"Zacznij testować"}]},{title:"Statyczna strona z dokumentacja do wielu API (Next.js + Redoc)",imageUrl:"next-redoc.png",description:(0,i.jsx)(i.Fragment,{children:"Zobacz przykład strony, kt\xf3ra wyświetla zbi\xf3r specyfikacji OpenAPI. Redoc renderuje każdą ze specyfikacji. Next.js serwuje całość jako statyczną stronę."}),actionLinks:[{to:"https://github.com/techwriterkoduje/next-js-redoc",label:"Dokumentuj API"}]},{title:"Focus Grid",imageUrl:"focus-grid.png",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("p",{children:"Gra poprawiająca koncentrację. Wybierz rozmiar tablicy i odsłoń kolejne liczby w jak najkr\xf3tszym czasie."})}),actionLinks:[{to:"/focusgrid",label:"Zagraj"}]},{title:"Źr\xf3dło tej strony (Next.js)",imageUrl:"website.png",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Podoba Ci się nasza strona? Chcesz stworzyć podobną? Strona opiera się o Next.js. Odcinki są pobierane z anchor.fm przez RSS feed. Strona jest statycznie generowana kiedy wychodzi nowy odcinek lub robimy jakieś inne zmiany."}),(0,i.jsx)("p",{children:"Strona jest deployowana za pomocą GitHub Actions i hostowana na GitHub Pages."})]}),actionLinks:[{to:"https://github.com/techwriterkoduje/podcast-site",label:"Zainspiruj się"}]}];function l(){return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(s.Z,{variant:"h1",children:"Projekty"}),d.map(e=>(0,o.createElement)(c.Z,{...e,key:e.title}))]})}function u(){return(0,i.jsx)(r.Z,{title:"Projekty",description:"Przykładowe projekty autor\xf3w podcastu. Projekty ilustrują koncepcje omawiane w podcaście.",children:(0,i.jsx)(l,{})})}}},function(e){e.O(0,[101,95,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);