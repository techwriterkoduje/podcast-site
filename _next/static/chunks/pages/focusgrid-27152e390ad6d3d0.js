(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{5346:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/focusgrid",function(){return n(9821)}])},6764:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=n(2079),s=n(5084),c=n(1664),a=n.n(c);function o(e){var t;let n=null===(t=e.href)||void 0===t?void 0:t.startsWith("http");return(0,r.jsx)(s.Z,{variant:n?"outlined":"contained",...e,LinkComponent:a(),endIcon:n&&(0,r.jsx)(i.Z,{}),children:e.children})}},5988:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){return(0,r.jsx)("img",{...e,alt:e.alt||"",src:"".concat("/podcast-site/").concat(e.src)})}},5655:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(5893),i=n(9008),s=n.n(i),c=n(2734),a=n(1225),o=n(9144),l=n(7294),d=n(562),u=n(326),m=n(4631),x=n(6638),f=n(1664),h=n.n(f),j=n(6857);function g(){let{currentRoute:e}=(0,j.H)();return(0,r.jsx)(d.Z,{LinkComponent:h(),href:"/",sx:{width:"24px",height:"24px"},color:"primary",disabled:"/"===e,children:(0,r.jsx)(x.Z,{})})}var p=n(6764),b=n(642),_=n(7600),v=n(3581),Z=n(6214),z=n(891);let S=[{label:"Odcinki",href:"/episode-list",icon:(0,r.jsx)(b.Z,{})},{label:"Czytelnia",href:"/read",icon:(0,r.jsx)(_.Z,{})},{label:"Filmiki",href:"/watch",icon:(0,r.jsx)(v.Z,{})},{label:"Projekty",href:"/projects",icon:(0,r.jsx)(Z.Z,{})},{label:"Kontakt",href:"/contact",icon:(0,r.jsx)(z.Z,{})}];function y(e){let{hideIcons:t}=e,{currentRoute:n}=(0,j.H)();return(0,r.jsx)(r.Fragment,{children:S.map(e=>{let{href:i,label:s,icon:c}=e;return(0,r.jsx)(p.Z,{startIcon:!t&&c,href:i,variant:"text",disabled:i===n,children:s},i)})})}var k=n(9879),w=n(7289),G=n(790);function N(e){let t=(0,c.Z)(),n=(0,l.useContext)(G.k);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{sx:{ml:1},onClick:n.toggleColorMode,color:"primary",title:"".concat(t.palette.mode," mode is on, click here to switch mode."),...e,children:"dark"===t.palette.mode?(0,r.jsx)(w.Z,{}):(0,r.jsx)(k.Z,{})})})}function F(){let[e,t]=(0,l.useState)(!1);return(0,r.jsxs)(o.Z,{alignItems:"center",direction:"row",sx:{borderBottom:"1px solid #ed6e5f"},children:[(0,r.jsx)(g,{}),(0,r.jsx)(d.Z,{"aria-label":"Otw\xf3rz listę podstron",onClick:()=>{t(!0)},size:"large",color:"primary",children:(0,r.jsx)(u.Z,{})}),(0,r.jsx)(N,{}),(0,r.jsx)(m.ZP,{anchor:"left",open:e,onClose:()=>{t(!1)},children:(0,r.jsx)(o.Z,{spacing:2,sx:{padding:"1rem"},children:(0,r.jsx)(y,{})})})]})}function C(){return(0,r.jsxs)(o.Z,{direction:"row",sx:{color:"#ed6e5f",borderBottom:"1px solid #ed6e5f",alignItems:"center",padding:"4px 1rem"},spacing:2,children:[(0,r.jsx)(g,{}),(0,r.jsx)(y,{hideIcons:!0}),(0,r.jsx)(N,{})]})}function I(){let e=(0,c.Z)(),t=(0,a.Z)(e.breakpoints.up("sm"));return t?(0,r.jsx)(C,{}):(0,r.jsx)(F,{})}var T=n(9630);function q(){return(0,r.jsxs)(o.Z,{sx:{alignItems:"center",justifyContent:"center",padding:"1rem",borderTop:"1px solid #ed6e5f"},children:[(0,r.jsxs)(T.Z,{children:["Copyright \xa9 ",new Date().getFullYear()," ","Tech Writer Koduje"]}),(0,r.jsx)(T.Z,{children:"Logo stworzone przez rad89"})]})}function E(e){let{title:t,description:n,isHome:i,children:c}=e,a="".concat(t).concat(i?"":" | Tech Writer Koduje");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:a}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/podcast-site/","favicon.ico")})]}),(0,r.jsx)(I,{}),c,(0,r.jsx)(q,{})]})}},663:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(8016),s=n(9144);function c(e){let{children:t,centered:n,wide:c}=e;return(0,r.jsx)(i.Z,{sx:{padding:"3rem 1rem",minHeight:"100vh"},maxWidth:c?"lg":"md",children:(0,r.jsx)(s.Z,{spacing:2,sx:{alignItems:n?"center":"flex-start",justifyContent:n?"center":"flex-start"},children:t})})}},6857:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var r=n(1163),i=n(7294);function s(){let e=(0,r.useRouter)(),[t,n]=(0,i.useState)("");return(0,i.useEffect)(function(){e&&n(e.asPath)},[e]),{currentRoute:t}}},9821:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(5893),i=n(7294),s=n(9072),c=n(7169),a=n(3730),o=n.n(a),l=n(8316),d=n(7056),u=n(5343),m=n(6541);let x=[16,25,36,49,64,81,100];function f(e){let{currentSize:t,setSize:n,disabled:i}=e,s=e=>{n(Number(e.target.value))};return(0,r.jsxs)(u.Z,{variant:"outlined",children:[(0,r.jsx)(l.Z,{id:"grid-size-select-label",children:"Rozmiar"}),(0,r.jsx)(m.Z,{labelId:"grid-size-select-label",id:"grid-size-select",value:"".concat(t),label:"Rozmiar",onChange:s,style:{width:"100px"},disabled:i,children:x.map(e=>(0,r.jsxs)(d.Z,{value:e,children:[Math.sqrt(e),"x",Math.sqrt(e)]},e))})]})}var h=n(6010);function j(e){let{id:t,label:n,done:i,markAsDone:s,fontSize:c}=e;return(0,r.jsx)("div",{className:o().square,children:(0,r.jsx)("button",{id:t.toString(),onClick:s,className:(0,h.Z)(o().tileButton,i&&o().done,i&&8===t&&o().infinity),style:{fontSize:c,lineHeight:c},children:n},t)})}var g=n(5084),p=n(1470),b=n(1448);function _(e){return e?new Date(1e3*e).toISOString().slice(11,19):"brak"}function v(e){let{time:t}=e;return(0,r.jsx)(b.Z,{style:{fontSize:"1.2rem",margin:"1rem auto"},label:"Najlepszy czas: ".concat(_(t))})}function Z(e){let{startNewGame:t,open:n,seconds:i,minutes:s,hours:c,bestTime:a}=e;return(0,r.jsx)(p.Z,{open:n,children:(0,r.jsxs)("div",{className:o().victory,children:[(0,r.jsxs)("h1",{className:o().victoryHeading,children:["Wynik: ",_(i+60*s+3600*c)]}),a&&(0,r.jsxs)("p",{children:["Tw\xf3j najlepszy czas dla planszy o tym rozmiarze to"," ",_(a)]}),(0,r.jsx)("p",{children:"Spr\xf3buj swoich sił z innym rozmiarem planszy."}),(0,r.jsx)(g.Z,{onClick:t,variant:"contained",children:"Graj dalej"})]})})}function z(e){let{handleReset:t,disabled:n}=e;return(0,r.jsx)(g.Z,{fullWidth:!0,onClick:t,disabled:n,children:"Resetuj grę"})}function S(e){return e.toLocaleString("en-US",{minimumIntegerDigits:2})}function y(e){let{stopwatch:t}=e,{seconds:n,minutes:i,hours:s}=t;return(0,r.jsx)(b.Z,{style:{fontSize:"1rem"},label:"".concat(S(s),":").concat(S(i),":").concat(S(n))})}var k=n(3751),w=n(5988),G=n(9837);function N(e){let{currentSize:t,setSize:n,handleStart:i}=e;return(0,r.jsxs)("div",{className:o().startScreen,children:[(0,r.jsx)(w.Z,{src:"/focus-grid.png",alt:"",className:o().startScreenBackgroundImage}),(0,r.jsxs)(G.Z,{className:o().gameDescription,children:[(0,r.jsx)("h1",{className:o().gameTitle,children:"Focus Grid"}),(0,r.jsx)("p",{children:"Ćwicz koncentrację! Wybierz rozmiar tablicy i odsłoń kolejne liczby jak najszybciej."}),(0,r.jsx)(f,{currentSize:t,setSize:n}),(0,r.jsx)(g.Z,{variant:"contained",size:"large",onClick:()=>i(!0),children:"Start"})]})]})}function F(){return .5-Math.random()}function C(e){let t=Array.from(Array(e+1).keys()).slice(1);t.sort(F),t.sort(F);let n=t.map(t=>({id:t,label:"".concat(t),done:!1,fontSize:"".concat(t<100?180/Math.sqrt(e):130/Math.sqrt(e),"px")}));return n}let I={score:"score",gridSize:"gridSize",difficultyLevel:"difficultyLevel",bestTime:"bestTime-"};function T(){let[e,t]=(0,i.useState)(1),[n,a]=(0,i.useState)(!1),[l,d]=(0,i.useState)(),[u,m]=(0,i.useState)([]),[f,h]=(0,i.useState)(void 0),[g,p]=(0,i.useState)(!1),[b,_]=(0,i.useState)(!1),S=(0,k.useStopwatch)({autoStart:!0});function w(e){l&&(_(!1),t(1),a(!1),m(C(l)),S.reset(),e&&p(!1))}function G(n){let r=Number(n.currentTarget.id);if(e===r){let i=u.find(e=>e.id===r);if(i&&(i.done=!0),r===l){S.pause(),_(!0),function(){let e=S.seconds+60*S.minutes+3600*S.hours;(!f||e<f)&&(h(e),localStorage.setItem("".concat(I.bestTime).concat(l),e.toString()))}(),setTimeout(()=>{a(!0)},1e3);return}t(e+1)}else n.currentTarget.animate([{transform:"rotate(10deg)"},{transform:"rotate(-10deg)"},{transform:"rotate(0)"}],{duration:100,iterations:1})}return(0,i.useEffect)(function(){let e=Number(localStorage.getItem(I.gridSize))||x[0];d(e),h(Number(localStorage.getItem("".concat(I.bestTime).concat(e)))||void 0)},[]),(0,i.useEffect)(function(){g&&(S.start(),_(!1))},[g]),(0,i.useEffect)(function(){l&&(localStorage.setItem(I.gridSize,"".concat(l)),m(C(l)),t(1),h(Number(localStorage.getItem("".concat(I.bestTime).concat(l)))||void 0))},[l]),!g&&l?(0,r.jsx)(N,{currentSize:l,setSize:d,handleStart:p}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:o().toolbar,children:[l&&(0,r.jsx)(c.Z,{disabled:!0,id:"outlined",label:"Rozmiar",defaultValue:"".concat(Math.sqrt(l),"x").concat(Math.sqrt(l)),size:"small",style:{width:"100px"}}),(0,r.jsx)(y,{stopwatch:S})]}),l&&(0,r.jsx)(s.ZP,{container:!0,spacing:1/Math.sqrt(l),columns:Math.sqrt(l),width:"100%",alignItems:"center",justifyContent:"center",maxWidth:1200,overflow:"hidden",margin:"auto",children:u.map(e=>(0,r.jsx)(s.ZP,{item:!0,xs:1,xl:1,lg:1,sm:1,md:1,children:(0,r.jsx)(j,{...e,markAsDone:G})},e.id))}),(0,r.jsx)("div",{className:o().toolbar,children:(0,r.jsx)(z,{handleReset:()=>w(!0),disabled:b})}),(0,r.jsx)("div",{className:o().toolbar,children:f&&(0,r.jsx)(v,{time:f})}),(0,r.jsx)(Z,{startNewGame:()=>w(!1),open:n,seconds:S.seconds,minutes:S.minutes,hours:S.hours,bestTime:f})]})}var q=n(5655),E=n(663);function H(){return(0,r.jsx)(q.Z,{title:"Focus Grid",description:"Aplikacja do ćwiczenia koncentracji",children:(0,r.jsx)(E.Z,{children:(0,r.jsx)(T,{})})})}},3730:function(e){e.exports={square:"FocusGridGame_square__3s_gg",noOverflow:"FocusGridGame_noOverflow__KIsPr",tileButton:"FocusGridGame_tileButton__fUvbb",done:"FocusGridGame_done__WJ_Vl",infinity:"FocusGridGame_infinity__2bzvz",victory:"FocusGridGame_victory__9v2lu",victoryHeading:"FocusGridGame_victoryHeading__qnpHw",toolbar:"FocusGridGame_toolbar__WUbFg",startScreen:"FocusGridGame_startScreen__HxuE9",startScreenBackgroundImage:"FocusGridGame_startScreenBackgroundImage__ghLCc",gameTitle:"FocusGridGame_gameTitle__f6Vcc",gameDescription:"FocusGridGame_gameDescription__LLUPt"}}},function(e){e.O(0,[654,869,937,774,888,179],function(){return e(e.s=5346)}),_N_E=e.O()}]);