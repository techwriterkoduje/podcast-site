(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{5943:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/watch",function(){return t(459)}])},6764:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),i=t(2079),s=t(5084),o=t(1664),c=t.n(o);function a(e){let{to:n,children:t}=e;return n.startsWith("http")?(0,r.jsx)(s.Z,{href:n,target:"_blank",variant:"outlined",endIcon:(0,r.jsx)(i.Z,{}),children:t}):(0,r.jsx)(c(),{href:n,children:(0,r.jsx)(s.Z,{variant:"contained",children:t})})}},834:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(5893),i=t(9630),s=t(6764),o=t(9837),c=t(9647),a=t(1359),l=t(2026),d=t(1225),u=t(2734);function x(e){let{title:n,description:t,actionLinks:x,imageUrl:h,embedId:j}=e,p=(0,u.Z)(),f=(0,d.Z)(p.breakpoints.up("sm")),m=f?"1rem 3rem":void 0,Z={height:f?"350px":"160px"};return(0,r.jsxs)(o.Z,{variant:"outlined",sx:{width:"100%",paddingBottom:"1rem"},children:[h&&(0,r.jsx)(c.Z,{image:"".concat("/podcast-site/").concat(h),sx:{...Z}}),j&&(0,r.jsx)(c.Z,{component:"iframe",src:"https://www.youtube.com/embed/".concat(j),allowFullScreen:!0,sx:{border:"none",...Z}}),(0,r.jsxs)(a.Z,{sx:{padding:m},children:[(0,r.jsx)(i.Z,{gutterBottom:!0,variant:"h5",component:"div",children:n}),(0,r.jsx)(i.Z,{component:"div",children:t})]}),(0,r.jsx)(l.Z,{sx:{padding:m},children:x.map((e,n)=>{let{to:t,label:i}=e;return(0,r.jsx)(s.Z,{to:t,children:i},n)})})]})}},6858:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(5893),i=t(9008),s=t.n(i),o=t(2734),c=t(1225),a=t(9144),l=t(642),d=t(7600),u=t(3581),x=t(6214),h=t(891);let j=[{label:"Odcinki",href:"/episode-list",icon:(0,r.jsx)(l.Z,{})},{label:"Czytelnia",href:"/read",icon:(0,r.jsx)(d.Z,{})},{label:"Filmiki",href:"/watch",icon:(0,r.jsx)(u.Z,{})},{label:"Projekty",href:"/projects",icon:(0,r.jsx)(x.Z,{})},{label:"Kontakt",href:"/contact",icon:(0,r.jsx)(h.Z,{})}];var p=t(1281),f=t(7294),m=t(562),Z=t(326),g=t(4631),k=t(5214),w=t(1284),b=t(6638);function v(){return(0,r.jsx)(p.Z,{href:"/",sx:{width:"24px",height:"24px"},children:(0,r.jsx)(b.Z,{})})}function z(){let[e,n]=(0,f.useState)(!1);return(0,r.jsxs)(a.Z,{alignItems:"center",direction:"row",children:[(0,r.jsx)(v,{}),(0,r.jsx)(m.Z,{"aria-label":"Otw\xf3rz listę podstron",onClick:()=>{n(!0)},size:"large",children:(0,r.jsx)(Z.Z,{htmlColor:"white"})}),(0,r.jsx)(g.ZP,{anchor:"left",open:e,onClose:()=>{n(!1)},children:(0,r.jsx)(k.Z,{children:j.map(e=>{let{href:n,label:t,icon:i}=e;return(0,r.jsx)(w.ZP,{children:(0,r.jsxs)(p.Z,{href:n,sx:{display:"flex",alignItems:"center",gap:"1rem",padding:"0.5rem 1rem",fontSize:"1.5rem",lineHeight:"1.5"},children:[(0,r.jsx)("div",{children:i}),(0,r.jsx)("div",{children:t})]})},t)})})})]})}function y(){return(0,r.jsxs)(a.Z,{direction:"row",sx:{color:"#ed6e5f",borderBottom:"2px solid #ed6e5f",alignItems:"center",height:"50px",padding:"0 1rem",gap:"1rem"},children:[(0,r.jsx)(v,{}),j.map(e=>{let{href:n,label:t}=e;return(0,r.jsx)(p.Z,{href:n,sx:{fontSize:"1.1rem"},children:t},t)})]})}function _(){let e=(0,o.Z)(),n=(0,c.Z)(e.breakpoints.up("sm"));return n?(0,r.jsx)(y,{}):(0,r.jsx)(z,{})}var I=t(9630);function C(){return(0,r.jsxs)(a.Z,{sx:{alignItems:"center",justifyContent:"center",padding:"1rem",borderTop:"2px solid #ed6e5f"},children:[(0,r.jsxs)(I.Z,{children:["Copyright \xa9 ",new Date().getFullYear()," ","Tech Writer Koduje"]}),(0,r.jsx)(I.Z,{children:"Logo stworzone przez rad89"})]})}function T(e){let{title:n,description:t,isHome:i,children:o}=e,c="".concat(n).concat(i?"":" | Tech Writer Koduje");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:c}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/podcast-site/","favicon.ico")})]}),(0,r.jsx)(_,{}),o,(0,r.jsx)(C,{})]})}},1281:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(8346),s=t(1664),o=t.n(s);function c(e){return(0,r.jsx)(i.Z,{component:o(),...e})}},663:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(8016),s=t(9144);function o(e){let{children:n,centered:t,wide:o}=e;return(0,r.jsx)(i.Z,{sx:{padding:"3rem 1rem",minHeight:"100vh"},maxWidth:o?"lg":"md",children:(0,r.jsx)(s.Z,{spacing:2,sx:{alignItems:t?"center":"flex-start",justifyContent:t?"center":"flex-start"},children:n})})}},459:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(5893),i=t(6858),s=t(663),o=t(834),c=t(9630);let a=[{embedId:"JkU2n2mpuU0",title:"Doing docs like code (soap!)",description:(0,r.jsx)(r.Fragment,{children:"Nasza prezentacja z konferencji soap! w 2019 roku."}),actionLinks:[{label:"soapconf.com",to:"http://soapconf.com"}]},{embedId:"PIXNG3agLhg",title:"Semantic testing in DITA",description:(0,r.jsx)(r.Fragment,{children:"Prezentacja z TC World 2020. DITA umożliwia semantykę, kt\xf3ra wychodzi daleko poza proste formatowanie tekstu. Semantyka w DITA pozwala na pisanie test\xf3w, kt\xf3re sprawdzają dokumentację z kodem lub aplikacją."}),actionLinks:[{to:"https://github.com/techwriterkoduje/dita-semantic-tests",label:"Przykładowy projekt"}]}];function l(){return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{variant:"h1",children:"Filmiki"}),a.map(e=>(0,r.jsx)(o.Z,{...e},e.title))]})}function d(){return(0,r.jsx)(i.Z,{title:"Pooglądaj",description:"Wystąpienia, screencasty, webinary i inne przydatne filmiki dla Tech Writer\xf3w",children:(0,r.jsx)(l,{})})}}},function(e){e.O(0,[101,95,774,888,179],function(){return e(e.s=5943)}),_N_E=e.O()}]);