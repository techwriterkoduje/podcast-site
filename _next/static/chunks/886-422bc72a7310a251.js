"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[886],{1635:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(4938)),a=r(5893),i=(0,o.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=i},2741:function(e,t,r){r.d(t,{Z:function(){return $}});var n,o=r(3366),a=r(7462),i=r(7294),l=r(6010),s=r(4780),c=r(1796),u=r(1719),d=r(8884),p=r(6622),m=r(918),f=r(4867),h=r(1588);function v(e){return(0,f.Z)("MuiAlert",e)}let g=(0,h.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var Z=r(562),x=r(8175),C=r(5893),k=(0,x.Z)((0,C.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),b=(0,x.Z)((0,C.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),E=(0,x.Z)((0,C.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=(0,x.Z)((0,C.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),w=(0,x.Z)((0,C.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");let S=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],L=e=>{let{variant:t,color:r,severity:n,classes:o}=e,a={root:["root",`${t}${(0,p.Z)(r||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(a,v,o)},j=(0,u.ZP)(m.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,p.Z)(r.color||r.severity)}`]]}})(({theme:e,ownerState:t})=>{let r="light"===e.palette.mode?c._j:c.$n,n="light"===e.palette.mode?c.$n:c._j,o=t.color||t.severity;return(0,a.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:r(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:n(e.palette[o].light,.9),[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[o].main:e.palette[o].light}},o&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:r(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[o].main:e.palette[o].light}},o&&"filled"===t.variant&&(0,a.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[o].dark:e.palette[o].main)}))}),y=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),z=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),A=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,C.jsx)(k,{fontSize:"inherit"}),warning:(0,C.jsx)(b,{fontSize:"inherit"}),error:(0,C.jsx)(E,{fontSize:"inherit"}),info:(0,C.jsx)(M,{fontSize:"inherit"})},O=i.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiAlert"}),{action:i,children:s,className:c,closeText:u="Close",color:p,icon:m,iconMapping:f=R,onClose:h,role:v="alert",severity:g="success",variant:x="standard"}=r,k=(0,o.Z)(r,S),b=(0,a.Z)({},r,{color:p,severity:g,variant:x}),E=L(b);return(0,C.jsxs)(j,(0,a.Z)({role:v,elevation:0,ownerState:b,className:(0,l.Z)(E.root,c),ref:t},k,{children:[!1!==m?(0,C.jsx)(y,{ownerState:b,className:E.icon,children:m||f[g]||R[g]}):null,(0,C.jsx)(z,{ownerState:b,className:E.message,children:s}),null!=i?(0,C.jsx)(A,{ownerState:b,className:E.action,children:i}):null,null==i&&h?(0,C.jsx)(A,{ownerState:b,className:E.action,children:(0,C.jsx)(Z.Z,{size:"small","aria-label":u,title:u,color:"inherit",onClick:h,children:n||(n=(0,C.jsx)(w,{fontSize:"small"}))})}):null]}))});var $=O},9243:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),l=r(4780),s=r(67),c=r(3633),u=r(7094),d=r(5893);function p(e){return e.substring(2).toLowerCase()}var m=function(e){let{children:t,disableReactTree:r=!1,mouseEvent:n="onClick",onClickAway:o,touchEvent:i="onTouchEnd"}=e,l=a.useRef(!1),m=a.useRef(null),f=a.useRef(!1),h=a.useRef(!1);a.useEffect(()=>(setTimeout(()=>{f.current=!0},0),()=>{f.current=!1}),[]);let v=(0,s.Z)(t.ref,m),g=(0,c.Z)(e=>{let t=h.current;h.current=!1;let n=(0,u.Z)(m.current);if(f.current&&m.current&&(!("clientX"in e)||!(n.documentElement.clientWidth<e.clientX)&&!(n.documentElement.clientHeight<e.clientY))){if(l.current){l.current=!1;return}(e.composedPath?e.composedPath().indexOf(m.current)>-1:!n.documentElement.contains(e.target)||m.current.contains(e.target))||!r&&t||o(e)}}),Z=e=>r=>{h.current=!0;let n=t.props[e];n&&n(r)},x={ref:v};return!1!==i&&(x[i]=Z(i)),a.useEffect(()=>{if(!1!==i){let e=p(i),t=(0,u.Z)(m.current),r=()=>{l.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,g),t.removeEventListener("touchmove",r)}}},[g,i]),!1!==n&&(x[n]=Z(n)),a.useEffect(()=>{if(!1!==n){let e=p(n),t=(0,u.Z)(m.current);return t.addEventListener(e,g),()=>{t.removeEventListener(e,g)}}},[g,n]),(0,d.jsx)(a.Fragment,{children:a.cloneElement(t,x)})},f=r(1719),h=r(2097),v=r(8884),g=r(6432),Z=r(6622),x=r(1760),C=r(1796),k=r(918),b=r(4867),E=r(1588);function M(e){return(0,b.Z)("MuiSnackbarContent",e)}(0,E.Z)("MuiSnackbarContent",["root","message","action"]);let w=["action","className","message","role"],S=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"],action:["action"],message:["message"]},M,t)},L=(0,f.ZP)(k.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{let t="light"===e.palette.mode?.8:.98,r=(0,C._4)(e.palette.background.default,t);return(0,o.Z)({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(r),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),j=(0,f.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),y=(0,f.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),z=a.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiSnackbarContent"}),{action:a,className:l,message:s,role:c="alert"}=r,u=(0,n.Z)(r,w),p=S(r);return(0,d.jsxs)(L,(0,o.Z)({role:c,square:!0,elevation:6,className:(0,i.Z)(p.root,l),ownerState:r,ref:t},u,{children:[(0,d.jsx)(j,{className:p.message,ownerState:r,children:s}),a?(0,d.jsx)(y,{className:p.action,ownerState:r,children:a}):null]}))});function A(e){return(0,b.Z)("MuiSnackbar",e)}(0,E.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);let R=["onEnter","onExited"],O=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],$=e=>{let{classes:t,anchorOrigin:r}=e,n={root:["root",`anchorOrigin${(0,Z.Z)(r.vertical)}${(0,Z.Z)(r.horizontal)}`]};return(0,l.Z)(n,A,t)},P=(0,f.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`anchorOrigin${(0,Z.Z)(r.anchorOrigin.vertical)}${(0,Z.Z)(r.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:(0,o.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})})),T=a.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiSnackbar"}),l=(0,h.Z)(),s={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:u,horizontal:p}={vertical:"bottom",horizontal:"left"},autoHideDuration:f=null,children:Z,className:C,ClickAwayListenerProps:k,ContentProps:b,disableWindowBlurListener:E=!1,message:M,onBlur:w,onClose:S,onFocus:L,onMouseEnter:j,onMouseLeave:y,open:A,resumeHideDuration:T,TransitionComponent:N=x.Z,transitionDuration:I=s,TransitionProps:{onEnter:H,onExited:W}={}}=r,B=(0,n.Z)(r.TransitionProps,R),V=(0,n.Z)(r,O),_=(0,o.Z)({},r,{anchorOrigin:{vertical:u,horizontal:p}}),F=$(_),D=a.useRef(),[X,G]=a.useState(!0),q=(0,g.Z)((...e)=>{S&&S(...e)}),K=(0,g.Z)(e=>{S&&null!=e&&(clearTimeout(D.current),D.current=setTimeout(()=>{q(null,"timeout")},e))});a.useEffect(()=>(A&&K(f),()=>{clearTimeout(D.current)}),[A,f,K]);let Y=()=>{clearTimeout(D.current)},J=a.useCallback(()=>{null!=f&&K(null!=T?T:.5*f)},[f,T,K]),Q=e=>{L&&L(e),Y()},U=e=>{j&&j(e),Y()},ee=e=>{w&&w(e),J()},et=e=>{y&&y(e),J()},er=e=>{S&&S(e,"clickaway")},en=e=>{G(!0),W&&W(e)},eo=(e,t)=>{G(!1),H&&H(e,t)};return(a.useEffect(()=>{if(!E&&A)return window.addEventListener("focus",J),window.addEventListener("blur",Y),()=>{window.removeEventListener("focus",J),window.removeEventListener("blur",Y)}},[E,J,A]),a.useEffect(()=>{if(A)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){!e.defaultPrevented&&("Escape"===e.key||"Esc"===e.key)&&S&&S(e,"escapeKeyDown")}},[X,A,S]),!A&&X)?null:(0,d.jsx)(m,(0,o.Z)({onClickAway:er},k,{children:(0,d.jsx)(P,(0,o.Z)({className:(0,i.Z)(F.root,C),onBlur:ee,onFocus:Q,onMouseEnter:U,onMouseLeave:et,ownerState:_,ref:t,role:"presentation"},V,{children:(0,d.jsx)(N,(0,o.Z)({appear:!0,in:A,timeout:I,direction:"top"===u?"down":"up",onEnter:eo,onExited:en},B,{children:Z||(0,d.jsx)(z,(0,o.Z)({message:M,action:c},b))}))}))}))});var N=T}}]);