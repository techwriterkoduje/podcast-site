(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{521:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(655),i=n(3247),o=n(9144),c=n(7937),s=n(9630),a=n(2097),l=n(5893);function u(e){return e>9?"".concat(e):"0".concat(e)}function d(e){var t=new Date(1e3*e),n=t.getHours()-1,r=t.getMinutes(),i=t.getSeconds();return"".concat(n>0?"".concat(u(n),":"):"").concat(u(r),":").concat(u(i))}function p(e){var t=e.currentTime,n=e.duration;return(0,a.Z)(),(0,l.jsx)(s.Z,{component:"div",paddingRight:"6px",color:"white",sx:{fontSize:"18px"},children:(0,l.jsxs)(o.Z,{direction:"row",spacing:1,children:[(0,l.jsx)("div",{children:d(t)}),(0,l.jsx)("div",{children:"/"}),(0,l.jsx)("div",{children:d(n)})]})})}var f=n(7294),h=[1,1.5,1.75,2],j=n(2523);function x(e){var t,n,s,u,d,x,g,m,w,y,b,O,Z,v,k=(t=e.audioSrc,s=(n=(0,f.useState)(!1))[0],u=n[1],x=(d=(0,f.useState)(0))[0],g=d[1],w=(m=(0,f.useState)())[0],y=m[1],O=(b=(0,f.useState)(1))[0],Z=b[1],v=(0,f.useRef)(null),(0,f.useEffect)(function(){y(new Audio(t))},[]),(0,f.useEffect)(function(){s?(null==w||w.play(),v.current&&clearInterval(v.current),v.current=window.setInterval(function(){g((null==w?void 0:w.currentTime)||0)},1e3)):(v.current&&window.clearInterval(v.current),null==w||w.pause())},[s]),(0,f.useEffect)(function(){w&&(w.playbackRate=O)},[O]),{isPLaying:s,setIsPlaying:u,progress:x,setProgress:g,audio:w,speed:O,setSpeed:Z,speeds:h}),P=k.isPLaying,z=k.setIsPlaying,S=k.progress,D=(k.setProgress,k.audio),I=k.speed,C=k.setSpeed,T=k.speeds;return(0,a.Z)(),(0,l.jsxs)(o.Z,{direction:"row",alignItems:"center",spacing:1,width:"100%",children:[(0,l.jsx)(j.Z,{onClick:function(){z(!P)},color:"primary",title:P?"pauza":"play",children:P?(0,l.jsx)(i.Z,{fontSize:"large"}):(0,l.jsx)(r.Z,{fontSize:"large"})}),(0,l.jsx)(p,{currentTime:S,duration:(null==D?void 0:D.duration)||0}),(0,l.jsx)(c.ZP,{"aria-label":"Volume",value:S,onChange:function(e,t){D&&(D.currentTime=t)},min:0,max:(null==D?void 0:D.duration)||0,step:1,size:"small",sx:{color:"white"}}),(0,l.jsxs)(j.Z,{title:"ustaw prędkość odtwarzania",sx:{textTransform:"none"},onClick:function(){var e;C((e=T.indexOf(I))===T.length-1?T[0]:T[e+1])},size:"small",children:["x",I]})]})}},8193:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.dateString,n=Intl.DateTimeFormat("pl-PL",{dateStyle:"long"}).format(new Date(t));return(0,r.jsx)("time",{dateTime:t,children:n})}},4817:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2640),i=n(5893);function o(e){var t=e.value,n=e.suffix,r=parseInt(t);return 0===r?null:(0,i.jsxs)("span",{children:[r," ",n]})}function c(e){var t=e.duration.split(":"),n=(0,r.Z)(t,2),c=n[0],s=n[1];return(0,i.jsxs)("time",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"1rem"},children:[(0,i.jsx)(o,{value:c,suffix:"h"}),(0,i.jsx)(o,{value:s,suffix:"min"})]})}},8944:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(9499),i=n(5675),o=n.n(i),c=n(5893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e){return(0,c.jsx)(o(),a(a({},e),{},{alt:e.alt||"",src:"".concat("/podcast-site/").concat(e.src)}))}},2729:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(9499),i=n(9008),o=n.n(i),c=n(2097),s=n(1225),a=n(9144),l=n(7294),u=n(326),d=n(4631),p=n(6638),f=n(5335),h=n(2523),j=n(5893);function x(){var e=(0,f.H)().currentRoute;return(0,j.jsx)(h.Z,{href:"/",sx:{width:"24px",height:"24px"},color:"primary",disabled:"/"===e,title:"wr\xf3ć do strony gł\xf3wnej",children:(0,j.jsx)(p.Z,{})})}var g=n(5439),m=n(642),w=n(7600),y=n(3581),b=n(6214),O=n(891),Z=[{label:"Odcinki",href:"/episode-list/1",icon:(0,j.jsx)(m.Z,{})},{label:"Czytelnia",href:"/read",icon:(0,j.jsx)(w.Z,{})},{label:"Filmiki",href:"/watch",icon:(0,j.jsx)(y.Z,{})},{label:"Projekty",href:"/projects",icon:(0,j.jsx)(b.Z,{})},{label:"Kontakt",href:"/contact",icon:(0,j.jsx)(O.Z,{})}];function v(e){var t=e.hideIcons,n=(0,f.H)().currentRoute;return(0,j.jsx)(j.Fragment,{children:Z.map(function(e){var r=e.href,i=e.label,o=e.icon;return(0,j.jsx)(g.Z,{startIcon:!t&&o,href:r,variant:"text",disabled:r===n,children:i},r)})})}function k(){var e=(0,l.useState)(!1),t=e[0],n=e[1],r=(0,c.Z)();return(0,j.jsxs)(a.Z,{alignItems:"center",direction:"row",borderBottom:"1px solid ".concat(r.palette.primary.main),padding:1,children:[(0,j.jsx)(x,{}),(0,j.jsx)(h.Z,{title:"Otw\xf3rz listę podstron",onClick:function(){n(!0)},size:"large",children:(0,j.jsx)(u.Z,{})}),(0,j.jsx)(d.ZP,{anchor:"left",open:t,onClose:function(){n(!1)},children:(0,j.jsx)(a.Z,{spacing:2,sx:{padding:"1rem"},children:(0,j.jsx)(v,{})})})]})}var P=n(4288);function z(){return(0,j.jsx)(a.Z,{direction:"row",sx:{color:"#ed6e5f",borderBottom:"1px solid #ed6e5f",alignItems:"center",padding:"4px 1rem"},spacing:2,children:(0,j.jsx)(P.Z,{children:(0,j.jsx)(a.Z,{direction:"row",justifyContent:"space-between",children:(0,j.jsxs)("div",{children:[(0,j.jsx)(x,{}),(0,j.jsx)(v,{hideIcons:!0})]})})})})}function S(){var e=(0,c.Z)();return(0,s.Z)(e.breakpoints.up("sm"))?(0,j.jsx)(z,{}):(0,j.jsx)(k,{})}var D=n(9630);function I(){return(0,j.jsxs)(a.Z,{sx:{alignItems:"center",justifyContent:"center",padding:"1rem",borderTop:"1px solid #ed6e5f"},children:[(0,j.jsxs)(D.Z,{children:["Copyright \xa9 ",new Date().getFullYear()," ","Tech Writer Koduje"]}),(0,j.jsx)(D.Z,{children:"Logo stworzone przez rad89"})]})}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function T(e){var t=e.title,n=e.description,i=e.mainStyle,c=e.isHome,s=e.children,a="".concat(t).concat(c?"":" | Tech Writer Koduje");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(o(),{children:[(0,j.jsx)("title",{children:a}),(0,j.jsx)("meta",{name:"description",content:n}),(0,j.jsx)("link",{rel:"icon",href:"".concat("/podcast-site/","favicon.ico")})]}),(0,j.jsx)(S,{}),(0,j.jsx)("main",{style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({paddingBottom:"1rem"},i),children:s}),(0,j.jsx)(I,{})]})}},5439:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9499),i=n(2079),o=n(5084),c=n(1664),s=n.n(c),a=n(5893);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e){var t,n=null===(t=e.href)||void 0===t?void 0:t.startsWith("http");return(0,a.jsx)(o.Z,u(u({variant:n?"outlined":"contained"},e),{},{LinkComponent:s(),endIcon:n&&(0,a.jsx)(i.Z,{}),children:e.children}))}},5746:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(9499),i=n(9837),o=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e){return(0,o.jsx)(i.Z,s(s({sx:{padding:"4px",width:"100%",height:"100%"}},e),{},{children:e.children}))}},2523:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(9499),i=n(4730),o=n(562),c=n(1664),s=n.n(c),a=n(5893),l=["children","title"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e){var t=e.children,n=e.title,r=(0,i.Z)(e,l);return(0,a.jsx)(o.Z,d(d({LinkComponent:s(),"aria-label":n},r),{},{children:t}))}},5335:function(e,t,n){"use strict";n.d(t,{H:function(){return o}});var r=n(1163),i=n(7294);function o(){var e=(0,r.useRouter)(),t=(0,i.useState)(""),n=t[0],o=t[1];return(0,i.useEffect)(function(){e&&o(e.asPath)},[e]),{currentRoute:n}}},7800:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return V},default:function(){return X}});var r=n(2729),i=n(4288),o=n(9144),c=n(9630),s=n(5893);function a(){return(0,s.jsxs)(o.Z,{sx:{textAlign:"left"},spacing:1,children:[(0,s.jsx)(c.Z,{component:"h1",sx:{fontSize:"40px",fontWeight:700,lineHeight:1.1},children:"Podcast o technicznej stronie tworzenia dokumentacji w IT"}),(0,s.jsx)(c.Z,{sx:{fontSize:"18px",padding:"10px 0"},children:"Skupiamy się na tym jak Tech Writer może wpasować się w środowisko programist\xf3w zar\xf3wno pod kątem sposobu pracy jak i używanych technologii, narzędzi i rozwiązań. Staramy się też pokazać, że praca Tech Writera może być ciekawa i rozwijająca pod kątem umiejętności technicznych."})]})}var l=n(8944),u=n(1225),d=n(2097);function p(){var e=(0,d.Z)(),t=(0,u.Z)(e.breakpoints.up("sm")),n=t?350:250;return(0,s.jsx)(l.Z,{src:"logo-".concat(t?350:250,".png"),width:n,height:n,style:{backgroundColor:"black"},alt:"Logo podcastu Tech Writer koduje",priority:!0})}var f=n(5413),h=n(5746);function j(){return(0,s.jsx)(h.Z,{sx:{padding:"4px",width:"100%",height:"100%",background:"none"},elevation:0,children:(0,s.jsxs)(f.Z,{container:!0,flexDirection:"row-reverse",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(f.Z,{lg:4,paddingTop:1,children:(0,s.jsx)(p,{})}),(0,s.jsx)(f.Z,{lg:7,container:!0,alignItems:"center",justifyContent:"center",spacing:1,sx:{margin:"auto"},children:(0,s.jsx)(a,{})})]})})}var x=n(521),g=n(1379),m=n(2523),w=n(8193),y=n(4817);function b(e){var t=e.title,n=e.episodeLink,r=e.audioUrl,i=e.pubDate,a=e.duration;return(0,s.jsxs)(o.Z,{width:"100%",height:"100%",justifyContent:"space-between",spacing:2,sx:{padding:"1rem"},children:[(0,s.jsx)(c.Z,{variant:"h3",component:"div",color:"primary",fontSize:"24px",textAlign:"left",children:t}),(0,s.jsxs)(c.Z,{variant:"subtitle1",sx:{display:"flex",gap:"1rem"},fontSize:"small",children:[(0,s.jsx)(w.Z,{dateString:i}),(0,s.jsx)(y.Z,{duration:a})]}),(0,s.jsxs)(o.Z,{direction:"row",width:"100%",children:[(0,s.jsx)(x.Z,{audioSrc:r}),(0,s.jsx)(m.Z,{href:n,title:"opis odcinka",size:"small",children:(0,s.jsx)(g.Z,{})})]})]})}var O=n(5439),Z=n(5938);function v(){return(0,s.jsx)(f.Z,{md:12,alignItems:"center",justifyContent:"center",sx:{textAlign:"center"},children:(0,s.jsx)(O.Z,{href:"/episode-list/1",variant:"contained",startIcon:(0,s.jsx)(Z.Z,{}),children:"Wszystkie odcinki"})})}function k(e){var t=e.episodeList;return(0,s.jsx)(h.Z,{children:(0,s.jsxs)(f.Z,{container:!0,spacing:4,children:[t.map(function(e,t){var n=e.title,r=e.audioUrl,i=e.episodeLink,o=e.pubDate,c=e.duration;return(0,s.jsx)(f.Z,{md:12,children:(0,s.jsx)(b,{title:n,audioUrl:r,episodeLink:i,pubDate:o,duration:c})},i)}),(0,s.jsx)(f.Z,{md:12,children:(0,s.jsx)(v,{})})]})})}var P=n(9499),z=n(4730),S=["children"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,P.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function C(e){var t=e.children,n=(0,z.Z)(e,S);return(0,s.jsx)(o.Z,I(I({spacing:4,padding:4,alignItems:"center"},n),{},{children:t}))}function T(){return(0,s.jsx)(h.Z,{children:(0,s.jsxs)(C,{children:[(0,s.jsx)(c.Z,{variant:"h2",textAlign:"center",children:"Masz pomysł na odcinek? Chcesz być naszym gościem?"}),(0,s.jsx)(O.Z,{href:"/contact",children:"Skontaktuj się z nami"})]})})}var E=n(530),L=n(412),_=n(1664),W=n.n(_),R=[{img:"switowski-logo.svg",alt:"Logo strony Sebastian Witowskiego",href:"https://switowski.com/"},{img:"techwriter-logo.png",alt:"Logo strony Techwriter.pl",href:"http://techwriter.pl/"},{img:"itcqf-logo.png",alt:"Logo ITCQF",href:"https://itcqf.org/"},{img:"soapconf-logo.png",alt:"Logo konferencji soap!",href:"https://soapconf.com/"}];function A(){return(0,s.jsx)(h.Z,{children:(0,s.jsxs)(C,{children:[(0,s.jsx)(c.Z,{variant:"h2",children:"Szanujemy i wspieramy"}),(0,s.jsx)(E.Z,{sx:{width:"100%",justifyItems:"center"},cols:R.length,rowHeight:150,children:R.map(function(e){return(0,s.jsx)(W(),{href:e.href,target:"_blank",children:(0,s.jsx)(L.Z,{sx:{aspectRatio:"1/1",width:150,height:150,cursor:"pointer",justifyContent:"center",textAlign:"center",backgroundColor:"white",borderRadius:"6px",overflow:"hidden"},children:(0,s.jsx)(l.Z,{src:e.img,alt:e.alt,width:150,height:150})})},e.href)})})]})})}var H=n(5084),N=n(4373),F=[{href:"https://anchor.fm/docdeveloper/",label:"Anchor.fm",icon:"anchor-fm-icon.png"},{href:"https://open.spotify.com/show/2jhQ1Z1nAOY686RVok7O9I",label:"Spotify",icon:"spotify-icon.png"},{href:"https://player.fm/series/tech-writer-koduje",label:"Player.fm",icon:"player-fm-icon.png"},{href:"https://podcasts.apple.com/us/podcast/tech-writer-koduje/id1463669718?uo=4",label:"Apple Podcasts",icon:"apple-podcasts-icon.png"},{href:"https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84YWZiYTljL3BvZGNhc3QvcnNz",label:"Google Podcasts",icon:"google-podcasts-icon.png"},{href:"https://pca.st/H7El",label:"Pocket Casts",icon:"pocket-casts-icon.png"},{href:"https://anchor.fm/s/8afba9c/podcast/rss",label:"RSS",icon:"rss-icon.png"}];function K(){return(0,s.jsxs)(f.Z,{md:12,children:[(0,s.jsx)(h.Z,{elevation:0,children:(0,s.jsx)(o.Z,{direction:"row",gap:3,flexWrap:"wrap",alignItems:"center",justifyContent:"center",children:F.map(function(e){return(0,s.jsx)(H.Z,{startIcon:(0,s.jsx)(l.Z,{width:20,height:20,src:e.icon,alt:""}),href:e.href,target:"_blank",variant:"text",size:"small",sx:{padding:"8px 15px",boxShadow:0,color:"white"},children:e.label},e.label)})})}),(0,s.jsx)(N.Z,{sx:{borderWidth:2,marginTop:3}})]})}var M=n(8005),B=[{name:"Michał Skowron",img:"michal-skowron.png",alt:"Zdjęcie Michała Skowrona",linkedIn:"https://www.linkedin.com/in/michalskowron/"},{name:"Paweł Kowaluk",img:"pawel-kowaluk.png",alt:"Zdjęcie Pawła Kowaluka",linkedIn:"https://www.linkedin.com/in/pawel-kowaluk/"}];function Y(e){var t=e.size,n=e.overrideLink,r={small:60,medium:150,large:300},i=t?r[t]:r.medium;return(0,s.jsx)(h.Z,{children:(0,s.jsxs)(C,{children:[(0,s.jsx)(c.Z,{variant:"h2",textAlign:"center",children:"Prowadzący"}),(0,s.jsx)(c.Z,{children:"Od kilku lat zajmujemy się zawodowo dokumentacją do oprogramowania. Właściwie od samego początku, techniczna strona tworzenia dokumentacji była dla nas najbardziej interesująca. Dlatego uwielbiamy pisać skrypty, konfigurować narzędzia i automatyzować. Szukamy rozwiązań, kt\xf3re pozwolą Tech Writerom skupić się na tym co ważne."}),(0,s.jsx)(c.Z,{children:"Na co dzień zastanawiamy się jak świat dokumentacji może czerpać korzyści z technologii, kt\xf3rych używa się w świecie IT."}),(0,s.jsx)(o.Z,{direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",spacing:3,width:"100%",sx:{padding:"1rem 0"},children:B.map(function(e){return(0,s.jsx)(o.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:n?(0,s.jsxs)(O.Z,{href:n,endIcon:null,variant:"text",style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,s.jsx)(l.Z,{src:e.img,height:i,width:i,alt:e.alt}),(0,s.jsx)(c.Z,{fontSize:t,children:e.name})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{src:e.img,height:i,width:i,alt:e.alt}),(0,s.jsx)(H.Z,{href:e.linkedIn,target:"_blank",startIcon:(0,s.jsx)(M.Z,{}),sx:{textTransform:"none",fontSize:t},children:e.name})]})},e.name)})})]})})}var G=["children"];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(t){(0,P.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function q(e){var t=e.children,n=(0,z.Z)(e,G);return(0,s.jsx)(f.Z,U(U({container:!0,gap:"1rem",alignItems:"center",justifyContent:"space-between",sx:{paddingTop:"75px"}},n),{},{children:t}))}var V=!0,X=function(e){var t=e.episodeList;return(0,s.jsxs)(r.Z,{title:"Podcast ".concat("Tech Writer Koduje"),description:"Podcast dla tech writer\xf3w, kt\xf3rzy kodują i nie tylko",isHome:!0,mainStyle:{textAlign:"center"},children:[(0,s.jsx)(i.Z,{children:(0,s.jsx)(q,{children:(0,s.jsx)(j,{})})}),(0,s.jsx)(q,{children:(0,s.jsx)(K,{})}),(0,s.jsx)(i.Z,{children:(0,s.jsxs)(q,{children:[(0,s.jsx)(k,{episodeList:t}),(0,s.jsx)(Y,{}),(0,s.jsx)(T,{}),(0,s.jsx)(A,{})]})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7800)}])}},function(e){e.O(0,[400,840,675,351,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);