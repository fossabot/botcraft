import{c as yo,u as At,s as ho,i as bo,g as go,a as Bt,b as vo,f as xo,d as Tt,e as D,r as W,h as Dt,k as wo,j as jo,l as Wt,m as Oo,n as zo,o as Lt,p as No,q as _,t as m,v as I,w as a,x as xe,y as Vt,z as ko,_ as we,A as Ht,B as Ft,C as _o,D as Eo,E as So,F as Io,U as q,G as qt,H as Mt,I as Ut,R as se,J as Po,K as Gt,L as Ro,M as $o,N as Co,__tla as Ao}from"./index-99db4e76.js";import{a as f,b as S}from"./react-1b326164.js";let ae,je,Oe,ze,Kt,Jt,L,Bo=Promise.all([(()=>{try{return Ao}catch{}})()]).then(async()=>{Kt=function(e){return e};function Ne(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Ne(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function Yt(){for(var e=0,t,r,n="";e<arguments.length;)(t=arguments[e++])&&(r=Ne(t))&&(n&&(n+=" "),n+=r);return n}const Zt={app:100,modal:200,popover:300,overlay:400,max:9999};function Xt(e){return Zt[e]}function Qt(e,t){const r=f.useRef();return(!r.current||t.length!==r.current.prevDeps.length||r.current.prevDeps.map((n,o)=>n===t[o]).indexOf(!1)>=0)&&(r.current={v:e(),prevDeps:[...t]}),r.current.v}const er=yo({key:"mantine",prepend:!0});function tr(){return At()||er}var rr=Object.defineProperty,ke=Object.getOwnPropertySymbols,nr=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable,_e=(e,t,r)=>t in e?rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ir=(e,t)=>{for(var r in t||(t={}))nr.call(t,r)&&_e(e,r,t[r]);if(ke)for(var r of ke(t))or.call(t,r)&&_e(e,r,t[r]);return e};const le="ref";function sr(e){let t;if(e.length!==1)return{args:e,ref:t};const[r]=e;if(!(r instanceof Object))return{args:e,ref:t};if(!(le in r))return{args:e,ref:t};t=r[le];const n=ir({},r);return delete n[le],{args:[n],ref:t}}const{cssFactory:ar}=(()=>{function e(r,n,o){const i=[],s=go(r,i,o);return i.length<2?o:s+n(i)}function t(r){const{cache:n}=r,o=(...i)=>{const{ref:s,args:l}=sr(i),c=ho(l,n.registered);return bo(n,c,!1),`${n.key}-${c.name}${s===void 0?"":` ${s}`}`};return{css:o,cx:(...i)=>e(n.registered,o,Yt(i))}}return{cssFactory:t}})();function Ee(){const e=tr();return Qt(()=>ar({cache:e}),[e])}function lr({cx:e,classes:t,context:r,classNames:n,name:o,cache:i}){const s=r.reduce((l,c)=>(Object.keys(c.classNames).forEach(p=>{typeof l[p]!="string"?l[p]=`${c.classNames[p]}`:l[p]=`${l[p]} ${c.classNames[p]}`}),l),{});return Object.keys(t).reduce((l,c)=>(l[c]=e(t[c],s[c],n!=null&&n[c],Array.isArray(o)?o.filter(Boolean).map(p=>`${(i==null?void 0:i.key)||"mantine"}-${p}-${c}`).join(" "):o?`${(i==null?void 0:i.key)||"mantine"}-${o}-${c}`:null),l),{})}var cr=Object.defineProperty,Se=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,ur=Object.prototype.propertyIsEnumerable,Ie=(e,t,r)=>t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))pr.call(t,r)&&Ie(e,r,t[r]);if(Se)for(var r of Se(t))ur.call(t,r)&&Ie(e,r,t[r]);return e};function pe(e,t){return t&&Object.keys(t).forEach(r=>{e[r]?e[r]=ce(ce({},e[r]),t[r]):e[r]=ce({},t[r])}),e}function Pe(e,t,r,n){const o=i=>typeof i=="function"?i(t,r||{},n):i||{};return Array.isArray(e)?e.map(i=>o(i.styles)).reduce((i,s)=>pe(i,s),{}):o(e)}function mr({ctx:e,theme:t,params:r,variant:n,size:o}){return e.reduce((i,s)=>(s.variants&&n in s.variants&&pe(i,s.variants[n](t,r,{variant:n,size:o})),s.sizes&&o in s.sizes&&pe(i,s.sizes[o](t,r,{variant:n,size:o})),i),{})}function Re(e){const t=typeof e=="function"?e:()=>e;function r(n,o){const i=Bt(),s=vo(o==null?void 0:o.name),l=At(),c={variant:o==null?void 0:o.variant,size:o==null?void 0:o.size},{css:p,cx:u}=Ee(),d=t(i,n,c),h=Pe(o==null?void 0:o.styles,i,n,c),y=Pe(s,i,n,c),g=mr({ctx:s,theme:i,params:n,variant:o==null?void 0:o.variant,size:o==null?void 0:o.size}),v=Object.fromEntries(Object.keys(d).map(b=>{const x=u({[p(d[b])]:!(o!=null&&o.unstyled)},p(g[b]),p(y[b]),p(h[b]));return[b,x]}));return{classes:lr({cx:u,classes:v,context:s,classNames:o==null?void 0:o.classNames,name:o==null?void 0:o.name,cache:l}),cx:u,theme:i}}return r}var $e=Object.getOwnPropertySymbols,fr=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,yr=(e,t)=>{var r={};for(var n in e)fr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&$e)for(var n of $e(e))t.indexOf(n)<0&&dr.call(e,n)&&(r[n]=e[n]);return r};function hr(e){const t=e,{m:r,mx:n,my:o,mt:i,mb:s,ml:l,mr:c,p,px:u,py:d,pt:h,pb:y,pl:g,pr:v,bg:b,c:x,opacity:j,ff:z,fz:N,fw:O,lts:k,ta:R,lh:P,fs:$,tt:B,td:E,w:Y,miw:Z,maw:X,h:H,mih:me,mah:Q,bgsz:ee,bgp:fe,bgr:de,bga:te,pos:ye,top:re,left:he,bottom:ne,right:be,inset:ge,display:F}=t,oe=yr(t,["m","mx","my","mt","mb","ml","mr","p","px","py","pt","pb","pl","pr","bg","c","opacity","ff","fz","fw","lts","ta","lh","fs","tt","td","w","miw","maw","h","mih","mah","bgsz","bgp","bgr","bga","pos","top","left","bottom","right","inset","display"]);return{systemStyles:xo({m:r,mx:n,my:o,mt:i,mb:s,ml:l,mr:c,p,px:u,py:d,pt:h,pb:y,pl:g,pr:v,bg:b,c:x,opacity:j,ff:z,fz:N,fw:O,lts:k,ta:R,lh:P,fs:$,tt:B,td:E,w:Y,miw:Z,maw:X,h:H,mih:me,mah:Q,bgsz:ee,bgp:fe,bgr:de,bga:te,pos:ye,top:re,left:he,bottom:ne,right:be,inset:ge,display:F}),rest:oe}}function br(e,t){const r=Object.keys(e).filter(n=>n!=="base").sort((n,o)=>Tt(D({size:n,sizes:t.breakpoints}))-Tt(D({size:o,sizes:t.breakpoints})));return"base"in e?["base",...r]:r}function gr({value:e,theme:t,getValue:r,property:n}){if(e==null)return;if(typeof e=="object")return br(e,t).reduce((i,s)=>{if(s==="base"&&e.base!==void 0){const c=r(e.base,t);return Array.isArray(n)?(n.forEach(p=>{i[p]=c}),i):(i[n]=c,i)}const l=r(e[s],t);return Array.isArray(n)?(i[t.fn.largerThan(s)]={},n.forEach(c=>{i[t.fn.largerThan(s)][c]=l}),i):(i[t.fn.largerThan(s)]={[n]:l},i)},{});const o=r(e,t);return Array.isArray(n)?n.reduce((i,s)=>(i[s]=o,i),{}):{[n]:o}}function vr(e,t){return e==="dimmed"?t.colorScheme==="dark"?t.colors.dark[2]:t.colors.gray[6]:t.fn.variant({variant:"filled",color:e,primaryFallback:!1}).background}function xr(e){return W(e)}function wr(e){return e}function jr(e,t){return D({size:e,sizes:t.fontSizes})}const Or=["-xs","-sm","-md","-lg","-xl"];function zr(e,t){return Or.includes(e)?`calc(${D({size:e.replace("-",""),sizes:t.spacing})} * -1)`:D({size:e,sizes:t.spacing})}const Nr={identity:wr,color:vr,size:xr,fontSize:jr,spacing:zr},kr={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},mx:{type:"spacing",property:["marginRight","marginLeft"]},my:{type:"spacing",property:["marginTop","marginBottom"]},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},px:{type:"spacing",property:["paddingRight","paddingLeft"]},py:{type:"spacing",property:["paddingTop","paddingBottom"]},bg:{type:"color",property:"background"},c:{type:"color",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"identity",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"identity",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"}};var _r=Object.defineProperty,Ce=Object.getOwnPropertySymbols,Er=Object.prototype.hasOwnProperty,Sr=Object.prototype.propertyIsEnumerable,Ae=(e,t,r)=>t in e?_r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))Er.call(t,r)&&Ae(e,r,t[r]);if(Ce)for(var r of Ce(t))Sr.call(t,r)&&Ae(e,r,t[r]);return e};function Te(e,t,r=kr){return Object.keys(r).reduce((n,o)=>(o in e&&e[o]!==void 0&&n.push(gr({value:e[o],getValue:Nr[r[o].type],property:r[o].property,theme:t})),n),[]).reduce((n,o)=>(Object.keys(o).forEach(i=>{typeof o[i]=="object"&&o[i]!==null&&i in n?n[i]=Be(Be({},n[i]),o[i]):n[i]=o[i]}),n),{})}function De(e,t){return typeof e=="function"?e(t):e}function Ir(e,t,r){const n=Bt(),{css:o,cx:i}=Ee();return Array.isArray(e)?i(r,o(Te(t,n)),e.map(s=>o(De(s,n)))):i(r,o(De(e,n)),o(Te(t,n)))}var Pr=Object.defineProperty,M=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Ve=(e,t,r)=>t in e?Pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Rr=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&Ve(e,r,t[r]);if(M)for(var r of M(t))Le.call(t,r)&&Ve(e,r,t[r]);return e},$r=(e,t)=>{var r={};for(var n in e)We.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&M)for(var n of M(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r};const He=f.forwardRef((e,t)=>{var r=e,{className:n,component:o,style:i,sx:s}=r,l=$r(r,["className","component","style","sx"]);const{systemStyles:c,rest:p}=hr(l),u=o||"div";return S.createElement(u,Rr({ref:t,className:Ir(s,c,n),style:i},p))});He.displayName="@mantine/core/Box",ae=He;var Cr=Object.defineProperty,Ar=Object.defineProperties,Br=Object.getOwnPropertyDescriptors,Fe=Object.getOwnPropertySymbols,Tr=Object.prototype.hasOwnProperty,Dr=Object.prototype.propertyIsEnumerable,qe=(e,t,r)=>t in e?Cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))Tr.call(t,r)&&qe(e,r,t[r]);if(Fe)for(var r of Fe(t))Dr.call(t,r)&&qe(e,r,t[r]);return e},Wr=(e,t)=>Ar(e,Br(t));function Lr({underline:e,strikethrough:t}){const r=[];return e&&r.push("underline"),t&&r.push("line-through"),r.length>0?r.join(" "):"none"}function Vr({theme:e,color:t}){return t==="dimmed"?e.fn.dimmed():typeof t=="string"&&(t in e.colors||t.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:t}).background:t||"inherit"}function Hr(e){return typeof e=="number"?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical"}:null}function Fr({theme:e,truncate:t}){return t==="start"?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",direction:e.dir==="ltr"?"rtl":"ltr",textAlign:e.dir==="ltr"?"right":"left"}:t?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null}var qr=Re((e,{color:t,lineClamp:r,truncate:n,inline:o,inherit:i,underline:s,gradient:l,weight:c,transform:p,align:u,strikethrough:d,italic:h},{size:y})=>{const g=e.fn.variant({variant:"gradient",gradient:l});return{root:Wr(U(U(U(U({},e.fn.fontStyles()),e.fn.focusStyles()),Hr(r)),Fr({theme:e,truncate:n})),{color:Vr({color:t,theme:e}),fontFamily:i?"inherit":e.fontFamily,fontSize:i||y===void 0?"inherit":D({size:y,sizes:e.fontSizes}),lineHeight:i?"inherit":o?1:e.lineHeight,textDecoration:Lr({underline:s,strikethrough:d}),WebkitTapHighlightColor:"transparent",fontWeight:i?"inherit":c,textTransform:p,textAlign:u,fontStyle:h?"italic":void 0}),gradient:{backgroundImage:g.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}});const Mr=qr;var Ur=Object.defineProperty,G=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,Ge=(e,t,r)=>t in e?Ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Gr=(e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&Ge(e,r,t[r]);if(G)for(var r of G(t))Ue.call(t,r)&&Ge(e,r,t[r]);return e},Kr=(e,t)=>{var r={};for(var n in e)Me.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&G)for(var n of G(e))t.indexOf(n)<0&&Ue.call(e,n)&&(r[n]=e[n]);return r};const Jr={variant:"text"},Ke=f.forwardRef((e,t)=>{const r=Dt("Text",Jr,e),{className:n,size:o,weight:i,transform:s,color:l,align:c,variant:p,lineClamp:u,truncate:d,gradient:h,inline:y,inherit:g,underline:v,strikethrough:b,italic:x,classNames:j,styles:z,unstyled:N,span:O,__staticSelector:k}=r,R=Kr(r,["className","size","weight","transform","color","align","variant","lineClamp","truncate","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span","__staticSelector"]),{classes:P,cx:$}=Mr({color:l,lineClamp:u,truncate:d,inline:y,inherit:g,underline:v,strikethrough:b,italic:x,weight:i,transform:s,align:c,gradient:h},{unstyled:N,name:k||"Text",variant:p,size:o});return S.createElement(ae,Gr({ref:t,className:$(P.root,{[P.gradient]:p==="gradient"},n),component:O?"span":"div"},R))});Ke.displayName="@mantine/core/Text";const Yr=Ke;var Zr=Object.defineProperty,Xr=Object.defineProperties,Qr=Object.getOwnPropertyDescriptors,Je=Object.getOwnPropertySymbols,en=Object.prototype.hasOwnProperty,tn=Object.prototype.propertyIsEnumerable,Ye=(e,t,r)=>t in e?Zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ze=(e,t)=>{for(var r in t||(t={}))en.call(t,r)&&Ye(e,r,t[r]);if(Je)for(var r of Je(t))tn.call(t,r)&&Ye(e,r,t[r]);return e},Xe=(e,t)=>Xr(e,Qr(t));const rn=e=>wo({from:{boxShadow:`0 0 ${W(.5)} 0 ${e}`,opacity:.6},to:{boxShadow:`0 0 ${W(.5)} ${W(4.4)} ${e}`,opacity:0}});function Qe(e,t=0){const r={},[n,o]=e.split("-");let i="",s="";return n==="top"&&(r.top=t,s="-50%"),n==="middle"&&(r.top="50%",s="-50%"),n==="bottom"&&(r.bottom=t,s="50%"),o==="start"&&(r.left=t,i="-50%"),o==="center"&&(r.left="50%",i="-50%"),o==="end"&&(r.right=t,i="50%"),r.transform=`translate(${i}, ${s})`,r}var nn=Re((e,{radius:t,color:r,position:n,offset:o,inline:i,withBorder:s,withLabel:l,zIndex:c},{size:p})=>{const{background:u}=e.fn.variant({variant:"filled",primaryFallback:!1,color:r||e.primaryColor}),d=W(p);return{root:{position:"relative",display:i?"inline-block":"block"},indicator:Xe(Ze({},Qe(n,o)),{zIndex:c,position:"absolute",[l?"minWidth":"width"]:d,height:d,display:"flex",justifyContent:"center",alignItems:"center",fontSize:e.fontSizes.xs,paddingLeft:l?`calc(${e.spacing.xs} / 2)`:0,paddingRight:l?`calc(${e.spacing.xs} / 2)`:0,borderRadius:e.fn.radius(t),backgroundColor:e.fn.variant({variant:"filled",primaryFallback:!1,color:r||e.primaryColor}).background,border:s?`${W(2)} solid ${e.colorScheme==="dark"?e.colors.dark[7]:e.white}`:void 0,color:e.white,whiteSpace:"nowrap"}),processing:{animation:`${rn(u)} 1000ms linear infinite`},common:Xe(Ze({},Qe(n,o)),{position:"absolute",[l?"minWidth":"width"]:d,height:d,borderRadius:e.fn.radius(t)})}});const on=nn;var sn=Object.defineProperty,K=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,rt=(e,t,r)=>t in e?sn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,an=(e,t)=>{for(var r in t||(t={}))et.call(t,r)&&rt(e,r,t[r]);if(K)for(var r of K(t))tt.call(t,r)&&rt(e,r,t[r]);return e},ln=(e,t)=>{var r={};for(var n in e)et.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&K)for(var n of K(e))t.indexOf(n)<0&&tt.call(e,n)&&(r[n]=e[n]);return r};const cn={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1,size:10,radius:1e3,zIndex:Xt("app")},nt=f.forwardRef((e,t)=>{const r=Dt("Indicator",cn,e),{children:n,position:o,offset:i,size:s,radius:l,inline:c,withBorder:p,className:u,color:d,styles:h,label:y,classNames:g,disabled:v,zIndex:b,unstyled:x,processing:j,variant:z}=r,N=ln(r,["children","position","offset","size","radius","inline","withBorder","className","color","styles","label","classNames","disabled","zIndex","unstyled","processing","variant"]),{classes:O,cx:k}=on({position:o,offset:i,radius:l,inline:c,color:d,withBorder:p,zIndex:b,withLabel:!!y},{name:"Indicator",classNames:g,styles:h,unstyled:x,variant:z,size:s});return S.createElement(ae,an({ref:t,className:k(O.root,u)},N),!v&&S.createElement(S.Fragment,null,S.createElement("div",{className:k(O.indicator,O.common)},y),j&&S.createElement("div",{className:k(O.processing,O.common)})),n)});nt.displayName="@mantine/core/Indicator";const pn=f.createContext(void 0),ot=e=>{const t=f.useContext(pn);return(e==null?void 0:e.store)||t||jo()},un=e=>e instanceof Promise,mn=S.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)});function V(e,t){const r=ot(t),[[n,o,i],s]=f.useReducer(p=>{const u=r.get(e);return Object.is(p[0],u)&&p[1]===r&&p[2]===e?p:[u,r,e]},void 0,()=>[r.get(e),r,e]);let l=n;(o!==r||i!==e)&&(s(),l=r.get(e));const c=t==null?void 0:t.delay;return f.useEffect(()=>{const p=r.sub(e,()=>{if(typeof c=="number"){setTimeout(s,c);return}s()});return s(),p},[r,e,c]),f.useDebugValue(l),un(l)?mn(l):l}function A(e,t){const r=ot(t);return f.useCallback((...n)=>{if(({VITE_OPENAI_API_KEY:"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",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!("write"in e))throw new Error("not writable atom");return r.set(e,...n)},[r,e])}function ue(e,t){return[V(e,t),A(e,t)]}const fn=e=>ue(f.useMemo(()=>Wt(t=>t(Oo)[e]??t(zo)),[e])),dn=e=>ue(f.useMemo(()=>Wt(t=>t(No)[e]),[e])),yn=()=>V(Lt);function hn(e){const t=f.useRef(e);return t.current=e,f.useMemo(()=>Object.freeze({get current(){return t.current}}),[])}const bn=typeof window<"u"&&typeof navigator<"u"&&typeof document<"u";function gn(e){f.useEffect(()=>{e()},[])}let J;function vn(){if(!bn)return;if(J)return J;const e=new Map,t=new ResizeObserver(r=>{r.forEach(n=>{var o;return(o=e.get(n.target))==null?void 0:o.forEach(i=>setTimeout(()=>i(n),0))})});return J={observer:t,subscribe:(r,n)=>{let o=e.get(r);o||(o=new Set,e.set(r,o),t.observe(r)),o.add(n)},unsubscribe:(r,n)=>{const o=e.get(r);o&&(o.delete(n),o.size||(e.delete(r),t.unobserve(r)))}},J}function xn(e,t,r=!0){const n=r&&vn(),o=hn(t),i=e&&"current"in e?e.current:e;f.useEffect(()=>{const s=e&&"current"in e?e.current:e;if(!n||!s)return;let l=!0;const c=(...p)=>{l&&o.current(...p)};return n.subscribe(s,c),()=>{l=!1,n.unsubscribe(s,c)}},[i,n])}var wn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let it,st,at;it=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),st=(e,t)=>{const r=f.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:s,children:l,...c},p)=>f.createElement("svg",{ref:p,...wn,width:o,height:o,stroke:n,strokeWidth:s?Number(i)*24/Number(o):i,className:`lucide lucide-${it(e)}`,...c},[...t.map(([u,d])=>f.createElement(u,d)),...(Array.isArray(l)?l:[l])||[]]));return r.displayName=`${e}`,r},Oe=st("Plus",[["line",{x1:"12",x2:"12",y1:"5",y2:"19",key:"pwfkuu"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}]]),at="/assets/chatgpt-a52b0da1.webp";var jn="_1trtw490";let lt,ct,pt;lt=_(f.memo,e=>m.jsx("div",{className:e[0],style:e[1],children:e[2]})),ct=({bg:e,children:t,radius:r="0.5rem",size:n=44})=>{let o=I(f.useRef,13),i=0 in o?o[0]:o[0]=jn,s;if(a(o,1,e)?o[1]:o[1]=e){let O=xe(o,2,2),k=a(O,0,e),R=k?O[0]:O[0]=e;s=k?O[1]:O[1]=`url("${R}")`}else s="none";let l=a(o,3,r),c=l?o[3]:o[3]=r,p=a(o,4,n),u=p?o[4]:o[4]=n,d=p?o[5]:o[5]=`${u}px`,h=p?o[6]:o[6]=`${u}px`,y=l&&p?o[7]:o[7]={backgroundImage:s,borderRadius:c,height:d,width:h},g=a(o,8,y),v=g?o[8]:o[8]=y,b=a(o,9,t),x=b?o[9]:o[9]=t,j=g&&b?o[10]:o[10]=[i,v,x],z=a(o,11,j),N=z?o[11]:o[11]=j;return z?o[12]:o[12]=m.jsx(lt,{v:N})},pt=_(f.memo,e=>{const t=e[0];return m.jsx(t,{...e[1],size:e[2],color:e[3],strokeWidth:e[4]})}),je=f.memo(({as:e,color:t=Vt.colors.text,size:r=18,strokeWidth:n=1.5,...o})=>{let i=I(f.useRef,8),s=a(i,0,e),l=s?i[0]:i[0]=e,c=a(i,1,o),p=c?i[1]:i[1]=o,u=a(i,2,r),d=u?i[2]:i[2]=r,h=a(i,3,t),y=h?i[3]:i[3]=t,g=a(i,4,n),v=g?i[4]:i[4]=n,b=s&&c&&u&&h&&g?i[5]:i[5]=[l,p,d,y,v],x=a(i,6,b),j=x?i[6]:i[6]=b;return x?i[7]:i[7]=m.jsx(pt,{v:j})});var On="y4h8ow0",zn="y4h8ow1";const Nn=_(f.memo,e=>{const t=e[1],r=e[2],n=e[4],o=e[7];return m.jsxs("div",{className:e[0],children:[m.jsx(t,{to:"/bots/ChatGPT",children:m.jsx(r,{bg:e[3]})}),m.jsx(n,{inline:!0,label:"WIP",size:e[5],children:m.jsx("div",{className:e[6],children:m.jsx(o,{as:e[8],size:e[9],color:e[10]})})})]})}),kn=({selected:e})=>{let t=I(f.useRef,1);return 0 in t?t[0]:t[0]=m.jsx(Nn,{v:[On,ko,ct,at,nt,14,zn,je,Oe,24,Vt.colors.overlay]})},_n=typeof window<"u"?S.useInsertionEffect||S.useLayoutEffect:()=>{};L=function(e){const t=S.useRef(En);_n(()=>{t.current=e},[e]);const r=S.useRef(null);return r.current||(r.current=function(){return t.current.apply(this,arguments)}),r.current};function En(){throw new Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.")}var Sn="_5neaoc0",In="_5neaoc1";const Pn=_(f.memo,e=>m.jsx("div",{id:e[0],className:e[1],children:m.jsx("input",{className:e[2],type:"text",placeholder:e[3],autoComplete:"off",value:e[4],onChange:e[5],...e[6]})})),Rn=f.memo(({id:e,onChange:t,placeholder:r="Untitled",value:n,...o})=>{let i=I(f.useRef,11),s=f.useDeferredValue(a(i,0,n)?i[0]:i[0]=n),l=a(i,1,e),c=l?i[1]:i[1]=e,p=2 in i?i[2]:i[2]=Sn,u=3 in i?i[3]:i[3]=In,d=a(i,4,r),h=d?i[4]:i[4]=r,y=a(i,5,s),g=y?i[5]:i[5]=s,v=a(i,6,t),b=v?i[6]:i[6]=t,x=a(i,7,o),j=x?i[7]:i[7]=o,z=l&&d&&y&&v&&x?i[8]:i[8]=[c,p,u,h,g,b,j],N=a(i,9,z),O=N?i[9]:i[9]=z;return N?i[10]:i[10]=m.jsx(Pn,{v:O})});var $n="_1qty7be2",Cn="_1qty7be4 _1qty7be3",An="_1qty7be0",Bn="_1qty7be3",Tn="_1qty7be1";const Dn=_(f.memo,e=>m.jsxs("div",{className:e[0],children:[m.jsxs("aside",{className:e[1],children:[m.jsx("div",{className:e[2],children:e[3]}),e[4]]}),m.jsxs("main",{className:e[5],children:[m.jsx("header",{className:e[6],children:e[7]}),e[8]]})]})),ut=({aside:e,asideHeader:t,children:r,header:n})=>{let o=I(f.useRef,12),i=0 in o?o[0]:o[0]=An,s=1 in o?o[1]:o[1]=$n,l=2 in o?o[2]:o[2]=Cn,c=a(o,3,t),p=c?o[3]:o[3]=t,u=a(o,4,e),d=u?o[4]:o[4]=e,h=5 in o?o[5]:o[5]=Tn,y=6 in o?o[6]:o[6]=Bn,g=a(o,7,n),v=g?o[7]:o[7]=n,b=a(o,8,r),x=b?o[8]:o[8]=r,j=c&&u&&g&&b?o[9]:o[9]=[i,s,l,p,d,h,y,v,x],z=a(o,10,j),N=z?o[10]:o[10]=j;return z?o[11]:o[11]=m.jsx(Dn,{v:N})};var Wn="_1k63r670",Ln="_1k63r671";const Vn=_(f.memo,e=>{const t=e[0];return m.jsx(t,{children:e[1]})}),Hn=_(f.memo,e=>{const t=e[0];return m.jsx(t,{data:e[1]})}),Fn=_(f.memo,e=>m.jsx("div",{className:e[0],children:m.jsx("div",{className:e[1],ref:e[2],children:e[3]})})),qn=_(f.memo,e=>{const t=e[0];return m.jsx(t,{id:e[1]})}),Mn=f.lazy(()=>we(()=>import("./index-28058428.js"),["assets/index-28058428.js","assets/index-99db4e76.js","assets/react-1b326164.js","assets/index-98620fff.css","assets/react-error-boundary.esm-830a3b4d.js","assets/index-15746456.css"])),Un=({id:e})=>{let t=I(f.useRef,8);const[r]=dn(a(t,0,e)?t[0]:t[0]=e);let n=1 in t?t[1]:t[1]=f.Suspense,o;if(a(t,2,r)?t[2]:t[2]=r){let u=xe(t,3,5),d=0 in u?u[0]:u[0]=Mn,h=a(u,1,r),y=h?u[1]:u[1]=r,g=h?u[2]:u[2]=[d,y],v=a(u,3,g),b=v?u[3]:u[3]=g;o=v?u[4]:u[4]=m.jsx(Hn,{v:b})}else o=null;let i=a(t,4,o),s=i?t[4]:t[4]=o,l=i?t[5]:t[5]=[n,s],c=a(t,6,l),p=c?t[6]:t[6]=l;return c?t[7]:t[7]=m.jsx(Vn,{v:p})},Gn=({data:e,isGenerating:t,onHeightChange:r})=>{let n=I(f.useRef,16);const{id:o,messages:i}=a(n,0,e)?n[0]:n[0]=e,s=1 in n?n[1]:n[1]={current:null};let l=a(n,2,s),c=l?n[2]:n[2]=s,p=a(n,3,r);p?n[3]:n[3]=r;let u=p?n[4]:n[4]=k=>{r==null||r(k.contentRect.height)};xn(c,a(n,5,u)?n[5]:n[5]=u,a(n,6,t)?n[6]:n[6]=t);let d=7 in n?n[7]:n[7]=Wn,h=8 in n?n[8]:n[8]=Ln,y=a(n,9,i),g=y?n[9]:n[9]=i,v=10 in n?n[10]:n[10]=k=>m.jsx(qn,{v:[Un,k]},k),b=y?n[11]:n[11]=g.map(v),x=a(n,12,b),j=x?n[12]:n[12]=b,z=l&&x?n[13]:n[13]=[d,h,c,j],N=a(n,14,z),O=N?n[14]:n[14]=z;return N?n[15]:n[15]=m.jsx(Fn,{v:O})};var Kn="_1xzn3bf1",Jn="_1xzn3bf0";const Yn=_(f.memo,e=>{const t=e[0],r=e[2],n=e[7],o=e[12],i=e[17];return m.jsxs(t,{asideHeader:e[1],aside:m.jsx(r,{items:e[3],newItemName:"New chat",selected:e[4],onItemAdd:e[5],onItemRemove:e[6]}),header:m.jsx(n,{id:"chat-title",value:e[8],placeholder:"Untitled",onChange:e[9]}),children:[m.jsx("div",{ref:e[10],className:e[11],children:m.jsx(o,{data:e[13],isGenerating:e[14],onHeightChange:e[15]})}),m.jsx("div",{className:e[16],children:m.jsx(i,{onComplete:e[18],shouldComplete:e[19]})})]})}),Zn=f.lazy(()=>we(()=>import("./index-4fd2b5ee.js"),["assets/index-4fd2b5ee.js","assets/index-99db4e76.js","assets/react-1b326164.js","assets/index-98620fff.css","assets/react-hotkeys-hook.esm-f8e0088c.js","assets/index-2ea6067c.css"])),Xn=f.lazy(()=>we(()=>import("./index-ec01e3cd.js").then(async e=>(await e.__tla,e)).then(e=>e.w),["assets/index-ec01e3cd.js","assets/index-99db4e76.js","assets/react-1b326164.js","assets/index-98620fff.css","assets/react-error-boundary.esm-830a3b4d.js","assets/react-hotkeys-hook.esm-f8e0088c.js","assets/index-678bf771.css"])),Qn=({botName:e,chatID:t})=>{let r=I(f.useRef,49);const n=0 in r?r[0]:r[0]={current:null};let o=a(r,1,t),i=o?r[1]:r[1]=t;const[s]=fn(i),l=A(2 in r?r[2]:r[2]=Ht),c=A(3 in r?r[3]:r[3]=Ft),p=A(4 in r?r[4]:r[4]=_o),u=A(5 in r?r[5]:r[5]=Eo),d=A(6 in r?r[6]:r[6]=So),h=V(7 in r?r[7]:r[7]=Io);let y=a(r,8,h),g=y?r[8]:r[8]=h,v=y?r[9]:r[9]=g.isSome();if(v){let w=xe(r,10,6),C=a(w,0,h),T=C?w[0]:w[0]=h,ie=C?w[1]:w[1]=T.get(),Rt=a(w,2,ie),mo=Rt?w[2]:w[2]=ie,$t=Rt?w[3]:w[3]=mo.type,Ct=a(w,4,$t),fo=Ct?w[4]:w[4]=$t;v=Ct?w[5]:w[5]=fo==="pending"}const b=v;let x=yn(),j=a(r,11,l);j?r[11]:r[11]=l;let z=a(r,12,c);z?r[12]:r[12]=c;let N=j&&z?r[13]:r[13]=()=>{const w={id:q(),role:"system",content:qt,updatedAt:Date.now()},C=Mt(Ut,T=>{T.id=q(),T.messages.push(w.id)});l(w),c(C)},O=L(a(r,14,N)?r[14]:r[14]=N),k=a(r,15,e),R=k?r[15]:r[15]=e,P=a(r,16,u);P?r[16]:r[16]=u;let $=k&&P&&o?r[17]:r[17]=()=>{se.push("BotNewChat",{botName:e}),u(t)},B=L(a(r,18,$)?r[18]:r[18]=$),E=a(r,19,p);E?r[19]:r[19]=p;let Y=a(r,20,d);Y?r[20]:r[20]=d;let Z=j&&E&&o&&Y?r[21]:r[21]=async w=>{const C={id:q(),content:w,role:"user",updatedAt:Date.now()};l(C),p(t,ie=>{ie.messages.push(C.id)});const T=await d(t,Po);console.debug(T)},X=L(a(r,22,Z)?r[22]:r[22]=Z),H=a(r,23,b),me=H?r[23]:r[23]=b,Q=H?r[24]:r[24]=w=>w.trim()!==""&&!b,ee=L(a(r,25,Q)?r[25]:r[25]=Q),fe=26 in r?r[26]:r[26]=ut,de=27 in r?r[27]:r[27]=Zn,te=a(r,28,x),ye=te?r[28]:r[28]=x,re=a(r,29,O),he=re?r[29]:r[29]=O,ne=a(r,30,B),be=ne?r[30]:r[30]=B,ge=31 in r?r[31]:r[31]=Rn,F=a(r,32,s),oe=F?r[32]:r[32]=s,jt=F?r[33]:r[33]=oe.title,Ot=a(r,34,jt),to=Ot?r[34]:r[34]=jt,zt=E&&o?r[35]:r[35]=w=>{p(t,C=>{C.title=w.currentTarget.value})},Nt=a(r,36,zt),ro=Nt?r[36]:r[36]=zt,ve=a(r,37,n),no=ve?r[37]:r[37]=n,oo=38 in r?r[38]:r[38]=Jn,io=39 in r?r[39]:r[39]=Gn,kt=ve?r[40]:r[40]=()=>{var w;(w=n.current)==null||w.scrollTo({top:n.current.scrollHeight})},_t=a(r,41,kt),so=_t?r[41]:r[41]=kt,ao=42 in r?r[42]:r[42]=Kn,lo=43 in r?r[43]:r[43]=Xn,Et=a(r,44,X),co=Et?r[44]:r[44]=X,St=a(r,45,ee),po=St?r[45]:r[45]=ee,It=k&&te&&o&&re&&ne&&Ot&&Nt&&ve&&F&&H&&_t&&Et&&St?r[46]:r[46]=[fe,R,de,ye,i,he,be,ge,to,ro,no,oo,io,oe,me,so,ao,lo,co,po],Pt=a(r,47,It),uo=Pt?r[47]:r[47]=It;return Pt?r[48]:r[48]=m.jsx(Yn,{v:uo})};function mt(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=mt(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}ze=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=mt(e))&&(n&&(n+=" "),n+=t);return n};var eo="_1b9u6eq0";let ft,dt,yt,ht,bt,gt,vt,xt,wt;ft=_(f.memo,e=>{const t=e[0];return m.jsx(t,{header:e[1],children:m.jsxs("div",{className:e[2],children:[m.jsx("h3",{children:"API Key"}),m.jsx("input",{type:"text",value:e[3],onChange:e[4]})]})})}),dt=({botName:e})=>{let t=I(f.useRef,13);const[r,n]=ue(0 in t?t[0]:t[0]=Gt);let o=1 in t?t[1]:t[1]=ut,i=a(t,2,e),s=i?t[2]:t[2]=e,l=i?t[3]:t[3]=`${s} Settings`,c=a(t,4,l),p=c?t[4]:t[4]=l,u=5 in t?t[5]:t[5]=ze("prose-sm",eo),d=a(t,6,r),h=d?t[6]:t[6]=r,y=a(t,7,n);y?t[7]:t[7]=n;let g=y?t[8]:t[8]=N=>{n(N.target.value)},v=a(t,9,g),b=v?t[9]:t[9]=g,x=c&&d&&v?t[10]:t[10]=[o,p,u,h,b],j=a(t,11,x),z=j?t[11]:t[11]=x;return j?t[12]:t[12]=m.jsx(ft,{v:z})},yt=_(f.memo,e=>{const t=e[0],r=e[1],n=e[3],o=e[4];return m.jsx(t,{nav:m.jsx(r,{selected:e[2]}),navFooter:m.jsx(n,{weight:"bold",children:"Limina"}),children:m.jsx(o,{children:e[5]})})}),ht=_(f.memo,e=>{const t=e[0];return m.jsx(t,{to:e[1]})}),bt=_(f.memo,e=>{const t=e[0];return m.jsx(t,{botName:e[1]})}),gt=_(f.memo,e=>{const t=e[0];return m.jsx(t,{botName:e[1]})}),vt=_(f.memo,e=>{const t=e[0];return m.jsx(t,{botName:e[1],chatID:e[2]})}),xt=({botName:e})=>{let t=I(f.useRef,9);const r=A(0 in t?t[0]:t[0]=Ht),n=A(1 in t?t[1]:t[1]=Ft),o=V(2 in t?t[2]:t[2]=Lt);let i=a(t,3,o);i?t[3]:t[3]=o;let s=a(t,4,e);s?t[4]:t[4]=e;let l=a(t,5,r);l?t[5]:t[5]=r;let c=a(t,6,n);c?t[6]:t[6]=n;let p=i&&s&&l&&c?t[7]:t[7]=()=>{const u=o[0];if(u){se.push("BotChat",{botName:e,chatID:u.id});return}const d={id:q(),role:"system",content:qt,updatedAt:Date.now()},h=Mt(Ut,y=>{y.id=q(),y.messages.push(d.id)});r(d),n(h),se.push("BotChat",{botName:e,chatID:h.id})};return gn(a(t,8,p)?t[8]:t[8]=p),null},wt=({botName:e})=>{let t=I(f.useRef,19);const r=se.useRoute(0 in t?t[0]:t[0]=["BotRoot","BotChat","BotNewChat","BotSettings","BotChatArchive"]);let n=V(1 in t?t[1]:t[1]=Gt),o=a(t,2,n),i=o?t[2]:t[2]=n,s=o?t[3]:t[3]=!i,l=a(t,4,s),c=l?t[4]:t[4]=s;const p=l?t[5]:t[5]=!c;let u=6 in t?t[6]:t[6]=Ro,d=7 in t?t[7]:t[7]=kn,h=a(t,8,e),y=h?t[8]:t[8]=e,g=9 in t?t[9]:t[9]=Yr,v=10 in t?t[10]:t[10]=f.Suspense,b=a(t,11,p),x=b?t[11]:t[11]=p,j=a(t,12,r),z=j?t[12]:t[12]=r,N=b&&j;N?t[13]:t[13]=[x,z];let O=N?t[14]:t[14]=(()=>$o(r).with({name:"BotRoot"},({params:E})=>m.jsx(ht,{v:[Co,`/bots/${E.botName}/${p?"new":"settings"}`]})).with({name:"BotNewChat"},({params:E})=>m.jsx(bt,{v:[xt,E.botName]})).with({name:"BotSettings"},({params:E})=>m.jsx(gt,{v:[dt,E.botName]})).with({name:"BotChat"},({params:E})=>m.jsx(vt,{v:[Qn,E.botName,E.chatID]})).otherwise(()=>null))(),k=a(t,15,O),R=k?t[15]:t[15]=O,P=h&&k?t[16]:t[16]=[u,d,y,g,v,R],$=a(t,17,P),B=$?t[17]:t[17]=P;return $?t[18]:t[18]=m.jsx(yt,{v:B})},Jt=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"}))});export{ae as B,je as I,Oe as P,Bo as __tla,ze as a,Kt as c,Jt as i,L as u};
