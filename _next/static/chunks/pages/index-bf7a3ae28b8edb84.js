(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{511:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(5413),i=n(9144),o=n(9630),c=n(5439),s=n(9499),a=n(4730),l=n(1635),d=n(2741),p=n(9243),u=n(7294),h=n(5084),j=n(5893),f=["textToCopy","children"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e){var t=e.textToCopy,n=e.children,r=(0,a.Z)(e,f),i=(0,u.useState)(!1),o=i[0],c=i[1];function s(){c(!1)}return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h.Z,g(g({color:"primary",disabled:o,onClick:function(){navigator.clipboard.writeText(t),c(!0)},startIcon:(0,j.jsx)(l.Z,{})},r),{},{children:n})),(0,j.jsx)(p.Z,{open:o,autoHideDuration:6e3,onClose:s,children:(0,j.jsx)(d.Z,{onClose:s,severity:"success",sx:{width:"100%"},children:"Skopiowano do schowka"})})]})}var w=n(891),y="techwriterkoduje@gmail.com";function b(){return(0,j.jsx)(r.Z,{md:12,children:(0,j.jsxs)(r.Z,{container:!0,alignItems:"center",spacing:4,padding:4,children:[(0,j.jsx)(r.Z,{md:6,children:(0,j.jsx)(i.Z,{spacing:4,children:(0,j.jsx)(o.Z,{children:"Chcesz nam coś przekazać? Masz pytanie lub sugestię? Może masz pomysł na odcinek podcastu albo chcesz być gościem naszej audycji? Po prostu napisz do nas."})})}),(0,j.jsx)(r.Z,{md:6,children:(0,j.jsxs)(i.Z,{spacing:4,sx:{textAlign:"center"},children:[(0,j.jsxs)(c.Z,{startIcon:(0,j.jsx)(w.Z,{}),href:"mailto:".concat(y),children:["Napisz na ",y]}),(0,j.jsx)(m,{textToCopy:y,variant:"outlined",href:"",children:"skopiuj e-mail do schowka"})]})})]})})}},8193:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.dateString,n=Intl.DateTimeFormat("pl-PL",{dateStyle:"long"}).format(new Date(t));return(0,r.jsx)("time",{className:"exclude-from-index",dateTime:t,children:n})}},4817:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2640),i=n(5893);function o(e){var t=e.value,n=e.suffix,r=parseInt(t);return 0===r?null:(0,i.jsxs)("span",{children:[r," ",n]})}function c(e){var t=e.duration.split(":"),n=(0,r.Z)(t,2),c=n[0],s=n[1];return(0,i.jsxs)("time",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"1rem"},children:[(0,i.jsx)(o,{value:c,suffix:"h"}),(0,i.jsx)(o,{value:s,suffix:"min"})]})}},8944:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(9499),i=n(5675),o=n.n(i),c=n(5893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e){return(0,c.jsx)(o(),a(a({},e),{},{alt:e.alt||"",src:e.src}))}},7800:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Y},default:function(){return J}});var r=n(6301),i=n(4288),o=n(9144),c=n(9630),s=n(5893);function a(){return(0,s.jsxs)(o.Z,{sx:{marginTop:{xs:3},textAlign:{md:"center",lg:"left"}},spacing:1,children:[(0,s.jsx)(c.Z,{component:"h1",sx:{fontSize:"40px",fontWeight:700,lineHeight:1.1},children:"Podcast o technicznej stronie tworzenia dokumentacji w IT"}),(0,s.jsx)(c.Z,{sx:{fontSize:"18px",padding:"10px 0"},children:"Skupiamy się na tym jak Tech Writer może wpasować się w środowisko programist\xf3w zar\xf3wno pod kątem sposobu pracy jak i używanych technologii, narzędzi i rozwiązań. Staramy się też pokazać, że praca Tech Writera może być ciekawa i rozwijająca pod kątem umiejętności technicznych."})]})}var l=n(8944),d=n(1225),p=n(2097);function u(){var e=(0,p.Z)(),t=(0,d.Z)(e.breakpoints.up("sm")),n=t?350:250;return(0,s.jsx)(l.Z,{src:"logo-".concat(t?350:250,".png"),width:n,height:n,style:{backgroundColor:"black"},alt:"Logo podcastu Tech Writer koduje",priority:!0})}var h=n(5413),j=n(5746);function f(){return(0,s.jsx)(j.Z,{sx:{padding:"4px",width:"100%",height:"100%",background:"none"},elevation:0,children:(0,s.jsxs)(h.Z,{container:!0,flexDirection:"row-reverse",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(h.Z,{lg:4,paddingTop:1,children:(0,s.jsx)(u,{})}),(0,s.jsx)(h.Z,{lg:7,container:!0,alignItems:"center",justifyContent:"center",spacing:1,sx:{margin:"auto"},children:(0,s.jsx)(a,{})})]})})}var x=n(9499),g=n(7694),m=n(1379),w=n(2523),y=n(8193),b=n(4817);function Z(e){var t=e.title,n=e.episodeLink,r=e.audioUrl,i=e.pubDate,a=e.duration;return(0,s.jsxs)(o.Z,{width:"100%",height:"100%",justifyContent:"space-between",spacing:2,sx:{padding:"1rem"},children:[(0,s.jsx)(c.Z,{variant:"h3",component:"div",color:"primary",fontSize:"24px",textAlign:"left",children:t}),(0,s.jsxs)(c.Z,{variant:"subtitle1",sx:{display:"flex",gap:"1rem"},fontSize:"small",children:[(0,s.jsx)(y.Z,{dateString:i}),(0,s.jsx)(b.Z,{duration:a})]}),(0,s.jsxs)(o.Z,{direction:"row",width:"100%",children:[(0,s.jsx)(g.Z,{audioSrc:r,title:t}),(0,s.jsx)(w.Z,{href:n,title:"opis odcinka",size:"small",children:(0,s.jsx)(m.Z,{})})]})]})}var k=n(5439),O=n(5938);function v(){return(0,s.jsx)(h.Z,{md:12,alignItems:"center",justifyContent:"center",sx:{textAlign:"center"},children:(0,s.jsx)(k.Z,{href:"/episode-list/1",variant:"contained",startIcon:(0,s.jsx)(O.Z,{}),children:"Wszystkie odcinki"})})}var z=n(4730),P=["children"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach(function(t){(0,x.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function D(e){var t=e.children,n=(0,z.Z)(e,P);return(0,s.jsx)(o.Z,I(I({spacing:4,padding:4,alignItems:"center"},n),{},{children:t}))}function C(e){var t=e.episodeList,n=(0,p.Z)();return(0,s.jsx)(j.Z,{children:(0,s.jsxs)(D,{sx:(0,x.Z)({},n.breakpoints.down("md"),{padding:"1rem 0"}),children:[(0,s.jsx)(c.Z,{variant:"h2",textAlign:"center",children:"Najnowsze odcinki"}),(0,s.jsxs)(h.Z,{container:!0,spacing:4,sx:(0,x.Z)({},n.breakpoints.down("md"),{padding:"0"}),children:[t.map(function(e){var t=e.title,r=e.audioUrl,i=e.episodeLink,o=e.pubDate,c=e.duration;return(0,s.jsx)(h.Z,{md:12,sx:(0,x.Z)({},n.breakpoints.down("md"),{padding:"0"}),children:(0,s.jsx)(Z,{title:t,audioUrl:r,episodeLink:i,pubDate:o,duration:c})},i)}),(0,s.jsx)(h.Z,{md:12,children:(0,s.jsx)(v,{})})]})]})})}var T=n(511);function _(){return(0,s.jsx)(j.Z,{children:(0,s.jsxs)(D,{children:[(0,s.jsx)(c.Z,{variant:"h2",textAlign:"center",children:"Kontakt"}),(0,s.jsx)(T.Z,{})]})})}var E=n(530),A=n(412),W=n(1664),N=n.n(W),L=[{img:"content-bytes.png",label:"Content Bytes",href:"https://www.linkedin.com/company/content-bytes/about/"},{img:"soapconf-logo.png",label:"Konferencja soap!",href:"https://soapconf.com/"},{img:"meetcontent-logo.png",label:"MeetContent",href:"http://meetcontent.org/"},{img:"itcqf-logo.png",label:"ITCQF",href:"https://itcqf.org/"},{img:"switowski-logo.svg",label:"Sebastian Witowski",href:"https://switowski.com/"},{img:"techwriter-logo.png",label:"Techwriter.pl",href:"http://techwriter.pl/"}];function H(){return(0,s.jsx)(j.Z,{children:(0,s.jsxs)(D,{children:[(0,s.jsx)(c.Z,{variant:"h2",textAlign:"center",id:"shout-outs",children:"Szanujemy i wspieramy"}),(0,s.jsx)(E.Z,{sx:{width:"100%",justifyItems:"center"},cols:L.length,rowHeight:150,children:L.map(function(e){var t=e.label,n=e.href,r=e.img;return(0,s.jsx)(N(),{href:n,target:"_blank","aria-label":t,children:(0,s.jsx)(A.Z,{sx:{aspectRatio:"1/1",width:150,height:150,cursor:"pointer",justifyContent:"center",textAlign:"center",backgroundColor:"white",borderRadius:"6px",overflow:"hidden"},children:(0,s.jsx)(l.Z,{src:r,alt:"",width:150,height:150})})},n)})})]})})}var K=n(5084),M=n(4373),F=[{href:"https://podcasters.spotify.com/pod/show/docdeveloper",label:"Spotify for podcasters",icon:"spotify-for-podcasters.webp"},{href:"https://open.spotify.com/show/2jhQ1Z1nAOY686RVok7O9I",label:"Spotify",icon:"spotify-icon.png"},{href:"https://player.fm/series/tech-writer-koduje",label:"Player.fm",icon:"player-fm-icon.png"},{href:"https://podcasts.apple.com/us/podcast/tech-writer-koduje/id1463669718?uo=4",label:"Apple Podcasts",icon:"apple-podcasts-icon.png"},{href:"https://pca.st/H7El",label:"Pocket Casts",icon:"pocket-casts-icon.png"},{href:"https://anchor.fm/s/8afba9c/podcast/rss",label:"RSS",icon:"rss-icon.png"}];function R(){return(0,s.jsxs)(h.Z,{md:12,children:[(0,s.jsx)(j.Z,{elevation:0,children:(0,s.jsx)(o.Z,{direction:"row",gap:3,flexWrap:"wrap",alignItems:"center",justifyContent:"center",children:F.map(function(e){return(0,s.jsx)(K.Z,{startIcon:(0,s.jsx)(l.Z,{width:20,height:20,src:e.icon,alt:""}),href:e.href,target:"_blank",variant:"text",size:"small",sx:{padding:"8px 15px",boxShadow:0,color:"white"},children:e.label},e.label)})})}),(0,s.jsx)(M.Z,{sx:{borderWidth:2,marginTop:3}})]})}var U=n(8005),q=[{name:"Michał Skowron",img:"michal-skowron.png",alt:"Zdjęcie Michała Skowrona",linkedIn:"https://www.linkedin.com/in/michalskowron/"},{name:"Paweł Kowaluk",img:"pawel-kowaluk.png",alt:"Zdjęcie Pawła Kowaluka",linkedIn:"https://www.linkedin.com/in/pawel-kowaluk/"}];function Q(e){var t=e.size,n=e.overrideLink,r={small:60,medium:150,large:300},i=t?r[t]:r.medium;return(0,s.jsx)(j.Z,{children:(0,s.jsxs)(D,{children:[(0,s.jsx)(c.Z,{variant:"h2",textAlign:"center",children:"Prowadzący"}),(0,s.jsx)(c.Z,{children:"Od kilku lat zajmujemy się zawodowo dokumentacją do oprogramowania. Właściwie od samego początku, techniczna strona tworzenia dokumentacji była dla nas najbardziej interesująca. Dlatego uwielbiamy pisać skrypty, konfigurować narzędzia i automatyzować. Szukamy rozwiązań, kt\xf3re pozwolą Tech Writerom skupić się na tym co ważne."}),(0,s.jsx)(c.Z,{children:"Na co dzień zastanawiamy się jak świat dokumentacji może czerpać korzyści z technologii, kt\xf3rych używa się w świecie IT."}),(0,s.jsx)(o.Z,{direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",spacing:3,width:"100%",sx:{padding:"1rem 0"},children:q.map(function(e){return(0,s.jsx)(o.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:n?(0,s.jsxs)(k.Z,{href:n,endIcon:null,variant:"text",style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,s.jsx)(l.Z,{src:e.img,height:i,width:i,alt:e.alt}),(0,s.jsx)(c.Z,{fontSize:t,children:e.name})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{src:e.img,height:i,width:i,alt:e.alt}),(0,s.jsx)(K.Z,{href:e.linkedIn,target:"_blank",startIcon:(0,s.jsx)(U.Z,{}),sx:{textTransform:"none",fontSize:t},children:e.name})]})},e.name)})})]})})}var X=["children"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(t){(0,x.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function V(e){var t=e.children,n=(0,z.Z)(e,X);return(0,s.jsx)(h.Z,G(G({container:!0,gap:"1rem",alignItems:"center",justifyContent:"space-between",sx:{paddingTop:"75px"}},n),{},{children:t}))}var Y=!0,J=function(e){var t=e.episodeList;return(0,s.jsxs)(r.Z,{title:"Podcast ".concat("Tech Writer Koduje"),description:"Podcast dla tech writer\xf3w, kt\xf3rzy kodują i nie tylko",isHome:!0,mainStyle:{textAlign:"center"},children:[(0,s.jsx)(i.Z,{children:(0,s.jsx)(V,{children:(0,s.jsx)(f,{})})}),(0,s.jsx)(V,{children:(0,s.jsx)(R,{})}),(0,s.jsx)(i.Z,{children:(0,s.jsxs)(V,{children:[(0,s.jsx)(C,{episodeList:t}),(0,s.jsx)(Q,{}),(0,s.jsx)(_,{}),(0,s.jsx)(H,{})]})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7800)}])}},function(e){e.O(0,[408,675,972,886,265,301,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);