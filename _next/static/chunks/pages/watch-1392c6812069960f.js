(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{9837:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(7462),o=r(3366),i=r(7294),a=r(6010),c=r(4780),s=r(1719),d=r(8884),u=r(918),l=r(4867);function p(e){return(0,l.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var f=r(5893);let m=["className","raised"],h=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},p,t)},w=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=i.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCard"}),{className:i,raised:c=!1}=r,s=(0,o.Z)(r,m),u=(0,n.Z)({},r,{raised:c}),l=h(u);return(0,f.jsx)(w,(0,n.Z)({className:(0,a.Z)(l.root,i),elevation:c?8:void 0,ref:t,ownerState:u},s))});var b=g},2522:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var n=r(9499),o=r(9630),i=r(5439),a=r(3366),c=r(7462),s=r(7294),d=r(6010),u=r(4780),l=r(8884),p=r(1719),f=r(4867),m=r(1588);function h(e){return(0,f.Z)("MuiCardMedia",e)}(0,m.Z)("MuiCardMedia",["root","media","img"]);var w=r(5893);let g=["children","className","component","image","src","style"],b=e=>{let{classes:t,isMediaComponent:r,isImageComponent:n}=e;return(0,u.Z)({root:["root",r&&"media",n&&"img"]},h,t)},j=(0,p.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{isMediaComponent:n,isImageComponent:o}=r;return[t.root,n&&t.media,o&&t.img]}})(({ownerState:e})=>(0,c.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),Z=["video","audio","picture","iframe","img"],v=["picture","img"],O=s.forwardRef(function(e,t){let r=(0,l.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:o,component:i="div",image:s,src:u,style:p}=r,f=(0,a.Z)(r,g),m=-1!==Z.indexOf(i),h=!m&&s?(0,c.Z)({backgroundImage:`url("${s}")`},p):p,O=(0,c.Z)({},r,{component:i,isMediaComponent:m,isImageComponent:-1!==v.indexOf(i)}),y=b(O);return(0,w.jsx)(j,(0,c.Z)({className:(0,d.Z)(y.root,o),as:i,role:!m&&s?"img":void 0,ref:t,style:h,ownerState:O,src:m?s||u:void 0},f,{children:n}))});function y(e){return(0,f.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);let k=["className","component"],x=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},y,t)},P=(0,p.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),C=s.forwardRef(function(e,t){let r=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:n,component:o="div"}=r,i=(0,a.Z)(r,k),s=(0,c.Z)({},r,{component:o}),u=x(s);return(0,w.jsx)(P,(0,c.Z)({as:o,className:(0,d.Z)(u.root,n),ownerState:s,ref:t},i))});function M(e){return(0,f.Z)("MuiCardActions",e)}(0,m.Z)("MuiCardActions",["root","spacing"]);let I=["disableSpacing","className"],D=e=>{let{classes:t,disableSpacing:r}=e;return(0,u.Z)({root:["root",!r&&"spacing"]},M,t)},S=(0,p.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,c.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),z=s.forwardRef(function(e,t){let r=(0,l.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:n=!1,className:o}=r,i=(0,a.Z)(r,I),s=(0,c.Z)({},r,{disableSpacing:n}),u=D(s);return(0,w.jsx)(S,(0,c.Z)({className:(0,d.Z)(u.root,o),ownerState:s,ref:t},i))});var N=r(1225),E=r(2097),R=r(5746);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function A(e){var t=e.title,r=e.description,n=e.actionLinks,a=e.imageUrl,c=e.embedId,s=(0,E.Z)(),d=(0,N.Z)(s.breakpoints.up("sm")),u=d?"1rem 3rem":void 0,l={height:d?"350px":"160px"};return(0,w.jsxs)(R.Z,{children:[a&&(0,w.jsx)(O,{image:"".concat("/podcast-site/").concat(a),sx:T({},l)}),c&&(0,w.jsx)(O,{component:"iframe",src:"https://www.youtube.com/embed/".concat(c),allowFullScreen:!0,sx:T({border:"none"},l)}),(0,w.jsxs)(C,{sx:{padding:u},children:[(0,w.jsx)(o.Z,{gutterBottom:!0,variant:"h5",component:"div",children:t}),(0,w.jsx)(o.Z,{component:"div",children:r})]}),(0,w.jsx)(z,{sx:{padding:u},children:n.map(function(e,t){var r=e.to,n=e.label;return(0,w.jsx)(i.Z,{href:r,children:n},t)})})]})}},4142:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4288),o=r(9144),i=r(5893);function a(e){var t=e.children,r=e.centered;return e.wide,(0,i.jsx)(n.Z,{sx:{padding:"3rem 1rem",minHeight:"100vh"},children:(0,i.jsx)(o.Z,{spacing:6,sx:{alignItems:r?"center":"flex-start",justifyContent:r?"center":"flex-start"},children:t})})}},5746:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(9499),o=r(9837),i=r(5893);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){return(0,i.jsx)(o.Z,c(c({sx:{padding:"4px",width:"100%",height:"100%"}},e),{},{children:e.children}))}},9391:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(3302),o=r(9499),i=r(4142),a=r(2522),c=r(9630),s=r(5893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var u=[{embedId:"Luya41MjDO4",title:"Is tech writing in Central and Eastern Europe growing? (soap!)",description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Nasza prezentacja z konferencji soap! w 2022 roku."}),(0,s.jsx)("p",{children:"The world is now more open to remote work and that gives us, technical writing professionals, more opportunities than ever before. If I want to work remotely, which countries should I look into? And what if I want to relocate? Or what if I want to look for writers for my team?"}),(0,s.jsx)("p",{children:"ITCQF compiled statistics about technical writers employed in countries across Europe. Come to this talk to learn about which countries have the most writers, which ones have the most job offers, what the salaries are and how the markets have grown or shrunk. You can also learn where the growing trends have been the most rapid."})]}),actionLinks:[{label:"soapconf.com",to:"http://soapconf.com"}]},{embedId:"JkU2n2mpuU0",title:"Doing docs like code (soap!)",description:(0,s.jsx)(s.Fragment,{children:"Nasza prezentacja z konferencji soap! w 2019 roku."}),actionLinks:[{label:"soapconf.com",to:"http://soapconf.com"}]},{embedId:"PIXNG3agLhg",title:"Semantic testing in DITA",description:(0,s.jsx)(s.Fragment,{children:"Prezentacja z TC World 2020. DITA umożliwia semantykę, kt\xf3ra wychodzi daleko poza proste formatowanie tekstu. Semantyka w DITA pozwala na pisanie test\xf3w, kt\xf3re sprawdzają dokumentację z kodem lub aplikacją."}),actionLinks:[{to:"https://github.com/techwriterkoduje/dita-semantic-tests",label:"Przykładowy projekt"}]}];function l(){return(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(c.Z,{variant:"h1",children:"Filmiki"}),u.map(function(e){return(0,s.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e),e.title)})]})}function p(){return(0,s.jsx)(n.Z,{title:"Filmiki",description:"Wystąpienia, screencasty, webinary i inne przydatne filmiki dla Tech Writer\xf3w",children:(0,s.jsx)(l,{})})}},5943:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/watch",function(){return r(9391)}])}},function(e){e.O(0,[733,53,774,888,179],function(){return e(e.s=5943)}),_N_E=e.O()}]);