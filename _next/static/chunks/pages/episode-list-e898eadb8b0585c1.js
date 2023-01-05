(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[630],{7354:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(4938)),s=t(5893),o=(0,i.default)((0,s.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");n.Z=o},9837:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(7462),i=t(3366),s=t(7294),o=t(6010),c=t(4780),l=t(1719),a=t(8884),d=t(918),u=t(4867);function x(e){return(0,u.Z)("MuiCard",e)}(0,t(1588).Z)("MuiCard",["root"]);var f=t(5893);let h=["className","raised"],j=e=>{let{classes:n}=e;return(0,c.Z)({root:["root"]},x,n)},p=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})(()=>({overflow:"hidden"})),Z=s.forwardRef(function(e,n){let t=(0,a.Z)({props:e,name:"MuiCard"}),{className:s,raised:c=!1}=t,l=(0,i.Z)(t,h),d=(0,r.Z)({},t,{raised:c}),u=j(d);return(0,f.jsx)(p,(0,r.Z)({className:(0,o.Z)(u.root,s),elevation:c?8:void 0,ref:n,ownerState:d},l))});var m=Z},6488:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/episode-list",function(){return t(9003)}])},6764:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),i=t(2079),s=t(5084),o=t(1664),c=t.n(o);function l(e){var n;let t=null===(n=e.href)||void 0===n?void 0:n.startsWith("http");return(0,r.jsx)(s.Z,{variant:t?"outlined":"contained",...e,LinkComponent:c(),endIcon:t&&(0,r.jsx)(i.Z,{}),children:e.children})}},1466:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893);function i(e){let{audioSrc:n}=e;return(0,r.jsx)("audio",{controls:!0,preload:"none",src:n,style:{width:"100%"}})}},4194:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(9630),s=t(7354),o=t(6764);function c(e){let{blurb:n,link:t,fontSize:c}=e;return(0,r.jsxs)(i.Z,{component:"div",fontSize:c,children:[n,"...",(0,r.jsx)(o.Z,{href:t,endIcon:(0,r.jsx)(s.Z,{}),variant:"text",children:"pełny opis"})]})}},6825:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893);function i(e){let{dateString:n}=e,t=Intl.DateTimeFormat("pl-PL",{dateStyle:"full"}).format(new Date(n));return(0,r.jsx)("time",{dateTime:n,children:t})}},5655:function(e,n,t){"use strict";t.d(n,{Z:function(){return F}});var r=t(5893),i=t(9008),s=t.n(i),o=t(2734),c=t(1225),l=t(9144),a=t(7294),d=t(562),u=t(326),x=t(4631),f=t(6638),h=t(1664),j=t.n(h),p=t(6857);function Z(){let{currentRoute:e}=(0,p.H)();return(0,r.jsx)(d.Z,{LinkComponent:j(),href:"/",sx:{width:"24px",height:"24px"},color:"primary",disabled:"/"===e,children:(0,r.jsx)(f.Z,{})})}var m=t(6764),v=t(642),g=t(7600),w=t(3581),k=t(6214),b=t(891);let C=[{label:"Odcinki",href:"/episode-list",icon:(0,r.jsx)(v.Z,{})},{label:"Czytelnia",href:"/read",icon:(0,r.jsx)(g.Z,{})},{label:"Filmiki",href:"/watch",icon:(0,r.jsx)(w.Z,{})},{label:"Projekty",href:"/projects",icon:(0,r.jsx)(k.Z,{})},{label:"Kontakt",href:"/contact",icon:(0,r.jsx)(b.Z,{})}];function y(e){let{hideIcons:n}=e,{currentRoute:t}=(0,p.H)();return(0,r.jsx)(r.Fragment,{children:C.map(e=>{let{href:i,label:s,icon:o}=e;return(0,r.jsx)(m.Z,{startIcon:!n&&o,href:i,variant:"text",disabled:i===t,children:s},i)})})}var _=t(9879),z=t(7289),I=t(790);function S(e){let n=(0,o.Z)(),t=(0,a.useContext)(I.k);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{sx:{ml:1},onClick:t.toggleColorMode,color:"primary",title:"".concat(n.palette.mode," mode is on, click here to switch mode."),...e,children:"dark"===n.palette.mode?(0,r.jsx)(z.Z,{}):(0,r.jsx)(_.Z,{})})})}function L(){let[e,n]=(0,a.useState)(!1);return(0,r.jsxs)(l.Z,{alignItems:"center",direction:"row",sx:{borderBottom:"1px solid #ed6e5f"},children:[(0,r.jsx)(Z,{}),(0,r.jsx)(d.Z,{"aria-label":"Otw\xf3rz listę podstron",onClick:()=>{n(!0)},size:"large",color:"primary",children:(0,r.jsx)(u.Z,{})}),(0,r.jsx)(S,{}),(0,r.jsx)(x.ZP,{anchor:"left",open:e,onClose:()=>{n(!1)},children:(0,r.jsx)(l.Z,{spacing:2,sx:{padding:"1rem"},children:(0,r.jsx)(y,{})})})]})}function N(){return(0,r.jsxs)(l.Z,{direction:"row",sx:{color:"#ed6e5f",borderBottom:"1px solid #ed6e5f",alignItems:"center",padding:"4px 1rem"},spacing:2,children:[(0,r.jsx)(Z,{}),(0,r.jsx)(y,{hideIcons:!0}),(0,r.jsx)(S,{})]})}function E(){let e=(0,o.Z)(),n=(0,c.Z)(e.breakpoints.up("sm"));return n?(0,r.jsx)(N,{}):(0,r.jsx)(L,{})}var P=t(9630);function T(){return(0,r.jsxs)(l.Z,{sx:{alignItems:"center",justifyContent:"center",padding:"1rem",borderTop:"1px solid #ed6e5f"},children:[(0,r.jsxs)(P.Z,{children:["Copyright \xa9 ",new Date().getFullYear()," ","Tech Writer Koduje"]}),(0,r.jsx)(P.Z,{children:"Logo stworzone przez rad89"})]})}function F(e){let{title:n,description:t,isHome:i,children:o}=e,c="".concat(n).concat(i?"":" | Tech Writer Koduje");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:c}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/podcast-site/","favicon.ico")})]}),(0,r.jsx)(E,{}),o,(0,r.jsx)(T,{})]})}},663:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(8016),s=t(9144);function o(e){let{children:n,centered:t,wide:o}=e;return(0,r.jsx)(i.Z,{sx:{padding:"3rem 1rem",minHeight:"100vh"},maxWidth:o?"lg":"md",children:(0,r.jsx)(s.Z,{spacing:2,sx:{alignItems:t?"center":"flex-start",justifyContent:t?"center":"flex-start"},children:n})})}},6857:function(e,n,t){"use strict";t.d(n,{H:function(){return s}});var r=t(1163),i=t(7294);function s(){let e=(0,r.useRouter)(),[n,t]=(0,i.useState)("");return(0,i.useEffect)(function(){e&&t(e.asPath)},[e]),{currentRoute:n}}},9003:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Z},default:function(){return m}});var r=t(5893),i=t(7294),s=t(9144),o=t(9630),c=t(9837),l=t(1466),a=t(4194),d=t(6825);function u(e){let{value:n,suffix:t}=e,i=parseInt(n);return 0===i?null:(0,r.jsxs)("span",{children:[i," ",t]})}function x(e){let{duration:n}=e,[t,i]=n.split(":");return(0,r.jsxs)("time",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"1rem"},children:[(0,r.jsx)(u,{value:t,suffix:"h"}),(0,r.jsx)(u,{value:i,suffix:"min"})]})}function f(e){let{audioUrl:n,title:t,blurb:i,episodeLink:u,pubDate:f,duration:h}=e;return(0,r.jsx)(c.Z,{variant:"outlined",sx:{height:"100%",width:"100%"},children:(0,r.jsxs)(s.Z,{spacing:2,sx:{padding:"2rem"},children:[(0,r.jsx)(o.Z,{fontWeight:"bold",fontSize:"1.1rem",children:t}),(0,r.jsxs)(o.Z,{variant:"subtitle1",sx:{display:"flex",gap:"1rem"},fontSize:"small",children:[(0,r.jsx)(d.Z,{dateString:f}),(0,r.jsx)(x,{duration:h})]}),(0,r.jsx)(l.Z,{audioSrc:n}),(0,r.jsx)(a.Z,{blurb:i,link:u})]})},u)}var h=t(5655),j=t(663);let p=e=>{let{allEpisodeData:n}=e;return(0,r.jsx)(h.Z,{title:"Lista odcink\xf3w",description:"Wybierz odcinek podcastu do posłuchania",children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(o.Z,{variant:"h1",children:"Lista odcink\xf3w"}),(0,r.jsx)(s.Z,{spacing:5,children:n.map(e=>(0,i.createElement)(f,{...e,key:e.anchorLink}))})]})})};var Z=!0,m=p}},function(e){e.O(0,[654,774,888,179],function(){return e(e.s=6488)}),_N_E=e.O()}]);