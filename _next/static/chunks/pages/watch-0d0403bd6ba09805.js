(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{5943:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/watch",function(){return t(459)}])},6764:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),i=t(2079),s=t(5084),c=t(1664),o=t.n(c);function a(e){let{to:n,children:t}=e;return n.startsWith("http")?(0,r.jsx)(s.Z,{href:n,target:"_blank",variant:"outlined",endIcon:(0,r.jsx)(i.Z,{}),children:t}):(0,r.jsx)(o(),{href:n,children:(0,r.jsx)(s.Z,{variant:"contained",children:t})})}},834:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(5893),i=t(9630),s=t(6764),c=t(9837),o=t(9647),a=t(1359),l=t(2026),d=t(1225),u=t(2734);function x(e){let{title:n,description:t,actionLinks:x,imageUrl:h,embedId:j}=e,f=(0,u.Z)(),p=(0,d.Z)(f.breakpoints.up("sm")),m=p?"1rem 3rem":void 0,Z={height:p?"350px":"160px"};return(0,r.jsxs)(c.Z,{variant:"outlined",sx:{width:"100%",paddingBottom:"1rem"},children:[h&&(0,r.jsx)(o.Z,{image:"".concat("/podcast-site/").concat(h),sx:{...Z}}),j&&(0,r.jsx)(o.Z,{component:"iframe",src:"https://www.youtube.com/embed/".concat(j),allowFullScreen:!0,sx:{border:"none",...Z}}),(0,r.jsxs)(a.Z,{sx:{padding:m},children:[(0,r.jsx)(i.Z,{gutterBottom:!0,variant:"h5",component:"div",children:n}),(0,r.jsx)(i.Z,{children:t})]}),(0,r.jsx)(l.Z,{sx:{padding:m},children:x.map((e,n)=>{let{to:t,label:i}=e;return(0,r.jsx)(s.Z,{to:t,children:i},n)})})]})}},3812:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(5893),i=t(9008),s=t.n(i),c=t(9144),o=t(6638),a=t(642),l=t(7600),d=t(3581),u=t(6214),x=t(891);let h=[{label:"Odcinki",href:"/episode-list",icon:(0,r.jsx)(a.Z,{})},{label:"Czytelnia",href:"/read",icon:(0,r.jsx)(l.Z,{})},{label:"Filmiki",href:"/watch",icon:(0,r.jsx)(d.Z,{})},{label:"Projekty",href:"/projects",icon:(0,r.jsx)(u.Z,{})},{label:"Kontakt",href:"/contact",icon:(0,r.jsx)(x.Z,{})}];var j=t(1281),f=t(7294),p=t(562),m=t(326),Z=t(4631),g=t(5214),k=t(1284),w=t(2734),b=t(1225);function z(){return(0,r.jsx)(j.Z,{href:"/",sx:{width:"24px",height:"24px"},children:(0,r.jsx)(o.Z,{})})}function v(){return(0,r.jsxs)(c.Z,{direction:"row",sx:{color:"#ed6e5f",borderBottom:"2px solid #ed6e5f",alignItems:"center",height:"50px",padding:"0 1rem",gap:"1rem"},children:[(0,r.jsx)(z,{}),h.map(e=>{let{href:n,label:t}=e;return(0,r.jsx)(j.Z,{href:n,sx:{fontSize:"1.1rem"},children:t},t)})]})}function y(){let[e,n]=(0,f.useState)(!1);return(0,r.jsxs)(c.Z,{alignItems:"center",direction:"row",children:[(0,r.jsx)(z,{}),(0,r.jsx)(p.Z,{"aria-label":"Otw\xf3rz listę podstron",onClick:()=>{n(!0)},size:"large",children:(0,r.jsx)(m.Z,{htmlColor:"white"})}),(0,r.jsx)(Z.ZP,{anchor:"left",open:e,onClose:()=>{n(!1)},children:(0,r.jsx)(g.Z,{children:h.map(e=>{let{href:n,label:t,icon:i}=e;return(0,r.jsx)(k.ZP,{children:(0,r.jsxs)(j.Z,{href:n,sx:{display:"flex",alignItems:"center",gap:"1rem",padding:"0.5rem 1rem",fontSize:"1.5rem",lineHeight:"1.5"},children:[(0,r.jsx)("div",{children:i}),(0,r.jsx)("div",{children:t})]})},t)})})})]})}function _(){let e=(0,w.Z)(),n=(0,b.Z)(e.breakpoints.up("sm"));return n?(0,r.jsx)(v,{}):(0,r.jsx)(y,{})}var I=t(9630);function C(){return(0,r.jsxs)(c.Z,{sx:{alignItems:"center",justifyContent:"center",padding:"1rem",borderTop:"2px solid #ed6e5f"},children:[(0,r.jsxs)(I.Z,{children:["Copyright \xa9 ",new Date().getFullYear()," ","Tech Writer Koduje"]}),(0,r.jsx)(I.Z,{children:"Logo stworzone przez rad89"})]})}function T(e){let{title:n,description:t,isHome:i,children:c}=e,o="".concat(n).concat(i?"":" | Tech Writer Koduje");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/podcast-site/","favicon.ico")})]}),(0,r.jsx)(_,{}),c,(0,r.jsx)(C,{})]})}},1281:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(8346),s=t(1664),c=t.n(s);function o(e){return(0,r.jsx)(i.Z,{component:c(),...e})}},663:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(8016),s=t(9144);function c(e){let{children:n,centered:t,wide:c}=e;return(0,r.jsx)(i.Z,{sx:{padding:"3rem 1rem",minHeight:"100vh"},maxWidth:c?"lg":"md",children:(0,r.jsx)(s.Z,{spacing:2,sx:{alignItems:t?"center":"flex-start",justifyContent:t?"center":"flex-start"},children:n})})}},459:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(5893),i=t(3812),s=t(663),c=t(834),o=t(9630);let a=[{embedId:"JkU2n2mpuU0",title:"Doing docs like code (soap!)",description:(0,r.jsx)(r.Fragment,{children:"Nasza prezentacja z konferencji soap! w 2019 roku."}),actionLinks:[{label:"soapconf.com",to:"http://soapconf.com"}]},{embedId:"PIXNG3agLhg",title:"Semantic testing in DITA",description:(0,r.jsx)(r.Fragment,{children:"Prezentacja z TC World 2020. DITA umożliwia semantykę, kt\xf3ra wychodzi daleko poza proste formatowanie tekstu. Semantyka w DITA pozwala na pisanie test\xf3w, kt\xf3re sprawdzają dokumentację z kodem lub aplikacją."}),actionLinks:[{to:"https://github.com/techwriterkoduje/dita-semantic-tests",label:"Przykładowy projekt"}]}];function l(){return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{variant:"h1",children:"Filmiki"}),a.map(e=>(0,r.jsx)(c.Z,{...e},e.title))]})}function d(){return(0,r.jsx)(i.Z,{title:"Pooglądaj",description:"Wystąpienia, screencasty, webinary i inne przydatne filmiki dla Tech Writer\xf3w",children:(0,r.jsx)(l,{})})}}},function(e){e.O(0,[101,95,774,888,179],function(){return e(e.s=5943)}),_N_E=e.O()}]);