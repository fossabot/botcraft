import{J as Y,q as c,z}from"./index-9c956a25.js";import{a as b}from"./react-1b326164.js";import{u as q}from"./react-hotkeys-hook.esm-251eaaff.js";import{c as J,B as A,a as V,u as j,I as H,P as $}from"./index-769aaf33.js";function F(e,t){return arguments.length===1?a=>F(e,a):Y(t).sort(e)}var U=(e,t)=>e==e?e===t:t!=t,{clear:N,delete:w,set:k}=Map.prototype,O=class extends Map{constructor(e){if(super(),e instanceof O&&!e.inverse)this.inverse=e;else if(this.inverse=new new.target(this),e!=null)for(const{0:t,1:a}of e)this.set(t,a)}clear(){N.call(this),N.call(this.inverse)}delete(e){const t=this.get(e);return w.call(this,e)&&w.call(this.inverse,t)}set(e,t){if(this.has(e)){const a=this.get(e);if(U(a,t))return this;w.call(this.inverse,a)}if(this.inverse.has(t)){const a=this.inverse.get(t);w.call(this,a)}return k.call(this,e,t),k.call(this.inverse,t,e),this}};/**
 * @license
 * emnorst v0.5.0
 * Copyright 2020 rizzzse
 * License MIT
 */function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function m(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||T(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var B={};function Q(){return B}function _(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function D(e,t){h(2,arguments);var a=m(e),n=m(t),i=a.getTime()-n.getTime();return i<0?-1:i>0?1:i}function G(e,t){h(2,arguments);var a=m(e),n=m(t),i=a.getFullYear()-n.getFullYear(),s=a.getMonth()-n.getMonth();return i*12+s}function K(e,t){return h(2,arguments),m(e).getTime()-m(t).getTime()}var C={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},Z="trunc";function ee(e){return e?C[e]:C[Z]}function te(e){h(1,arguments);var t=m(e);return t.setHours(23,59,59,999),t}function ae(e){h(1,arguments);var t=m(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function ne(e){h(1,arguments);var t=m(e);return te(t).getTime()===ae(t).getTime()}function re(e,t){h(2,arguments);var a=m(e),n=m(t),i=D(a,n),s=Math.abs(G(a,n)),r;if(s<1)r=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*s);var l=D(a,n)===-i;ne(m(e))&&s===1&&D(e,n)===1&&(l=!1),r=i*(s-Number(l))}return r===0?0:r}function ie(e,t,a){h(2,arguments);var n=K(e,t)/1e3;return ee(a?.roundingMethod)(n)}var oe={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},se=function(t,a,n){var i,s=oe[t];return typeof s=="string"?i=s:a===1?i=s.one:i=s.other.replace("{{count}}",a.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};const ue=se;function S(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}}var le={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},de={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ce={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},me={date:S({formats:le,defaultWidth:"full"}),time:S({formats:de,defaultWidth:"full"}),dateTime:S({formats:ce,defaultWidth:"full"})};const fe=me;var he={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ve=function(t,a,n,i){return he[t]};const ge=ve;function y(e){return function(t,a){var n=a!=null&&a.context?String(a.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,r=a!=null&&a.width?String(a.width):s;i=e.formattingValues[r]||e.formattingValues[s]}else{var l=e.defaultWidth,o=a!=null&&a.width?String(a.width):e.defaultWidth;i=e.values[o]||e.values[l]}var f=e.argumentCallback?e.argumentCallback(t):t;return i[f]}}var be={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},pe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ye={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Me={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},we={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},De={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Pe=function(t,a){var n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Se={ordinalNumber:Pe,era:y({values:be,defaultWidth:"wide"}),quarter:y({values:pe,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:y({values:ye,defaultWidth:"wide"}),day:y({values:Me,defaultWidth:"wide"}),dayPeriod:y({values:we,defaultWidth:"wide",formattingValues:De,defaultFormattingWidth:"wide"})};const xe=Se;function M(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;var r=s[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(l)?We(l,function(u){return u.test(r)}):Te(l,function(u){return u.test(r)}),f;f=e.valueCallback?e.valueCallback(o):o,f=a.valueCallback?a.valueCallback(f):f;var v=t.slice(r.length);return{value:f,rest:v}}}function Te(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function We(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function je(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],s=t.match(e.parsePattern);if(!s)return null;var r=e.valueCallback?e.valueCallback(s[0]):s[0];r=a.valueCallback?a.valueCallback(r):r;var l=t.slice(i.length);return{value:r,rest:l}}}var Ne=/^(\d+)(th|st|nd|rd)?/i,ke=/\d+/i,_e={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ce={any:[/^b/i,/^(a|c)/i]},Ie={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ae={any:[/1/i,/2/i,/3/i,/4/i]},Fe={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Oe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Re={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Xe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ee={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Le={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ye={ordinalNumber:je({matchPattern:Ne,parsePattern:ke,valueCallback:function(t){return parseInt(t,10)}}),era:M({matchPatterns:_e,defaultMatchWidth:"wide",parsePatterns:Ce,defaultParseWidth:"any"}),quarter:M({matchPatterns:Ie,defaultMatchWidth:"wide",parsePatterns:Ae,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:M({matchPatterns:Fe,defaultMatchWidth:"wide",parsePatterns:Oe,defaultParseWidth:"any"}),day:M({matchPatterns:Re,defaultMatchWidth:"wide",parsePatterns:Xe,defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:Ee,defaultMatchWidth:"any",parsePatterns:Le,defaultParseWidth:"any"})};const ze=Ye;var qe={code:"en-US",formatDistance:ue,formatLong:fe,formatRelative:ge,localize:xe,match:ze,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Je=qe;function R(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function Ve(e){return R({},e)}var I=1440,He=2520,x=43200,$e=86400;function Ue(e,t,a){var n,i;h(2,arguments);var s=Q(),r=(n=(i=a?.locale)!==null&&i!==void 0?i:s.locale)!==null&&n!==void 0?n:Je;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var l=D(e,t);if(isNaN(l))throw new RangeError("Invalid time value");var o=R(Ve(a),{addSuffix:!!a?.addSuffix,comparison:l}),f,v;l>0?(f=m(t),v=m(e)):(f=m(e),v=m(t));var u=ie(v,f),p=(_(v)-_(f))/1e3,d=Math.round((u-p)/60),g;if(d<2)return a!=null&&a.includeSeconds?u<5?r.formatDistance("lessThanXSeconds",5,o):u<10?r.formatDistance("lessThanXSeconds",10,o):u<20?r.formatDistance("lessThanXSeconds",20,o):u<40?r.formatDistance("halfAMinute",0,o):u<60?r.formatDistance("lessThanXMinutes",1,o):r.formatDistance("xMinutes",1,o):d===0?r.formatDistance("lessThanXMinutes",1,o):r.formatDistance("xMinutes",d,o);if(d<45)return r.formatDistance("xMinutes",d,o);if(d<90)return r.formatDistance("aboutXHours",1,o);if(d<I){var X=Math.round(d/60);return r.formatDistance("aboutXHours",X,o)}else{if(d<He)return r.formatDistance("xDays",1,o);if(d<x){var E=Math.round(d/I);return r.formatDistance("xDays",E,o)}else if(d<$e)return g=Math.round(d/x),r.formatDistance("aboutXMonths",g,o)}if(g=re(v,f),g<12){var L=Math.round(d/x);return r.formatDistance("xMonths",L,o)}else{var W=g%12,P=Math.floor(g/12);return W<3?r.formatDistance("aboutXYears",P,o):W<9?r.formatDistance("overXYears",P,o):r.formatDistance("almostXYears",P+1,o)}}function Be(e,t){return h(1,arguments),Ue(e,Date.now(),t)}var Qe="_1pj1k0g0",Ge="_1pj1k0g1",Ke="_1pj1k0g3",Ze="_1pj1k0g2",et="_1pj1k0g4";const tt=[],at=J(b.memo(b.forwardRef(({children:e,className:t,...a},n)=>c.jsx(A,{component:"div",ref:n,className:V(Ke,t),...a,children:c.jsx("div",{className:et,children:e})})))),nt=b.memo(b.forwardRef(({data:e=tt,gap:t=0,renderItem:a,selectedID:n,...i},s)=>{const r=b.useRef(null);return c.jsx("div",{ref:s,className:Qe,...i,children:c.jsx("div",{className:Ge,ref:r,children:c.jsx("div",{className:Ze,style:{gap:t},children:e.map((l,o)=>c.jsx(b.Fragment,{children:a?.(l,l.id===n,o)},l.id))})})})}));var rt="_1etuehf0",it="_1etuehf1",ot="_1etuehf2",st="_1etuehf3";const ut=({title:e})=>c.jsx("span",{className:st,children:e}),lt=({title:e,...t})=>c.jsxs("button",{type:"button",className:ot,...t,children:[c.jsx(H,{as:$}),c.jsx("span",{children:e})]}),ht=b.memo(({items:e,newItemName:t,onItemAdd:a,onItemPin:n,onItemRemove:i,onItemUnpin:s,selected:r})=>{const l=b.useMemo(()=>F((u,p)=>p.updatedAt-u.updatedAt,e),[e]),o=b.useMemo(()=>{const u=new O;for(const[p,d]of l.entries()){const g=Be(d.updatedAt,{addSuffix:!0});u.has(g)||u.inverse.set(p,g)}return u},[l]),f=j(()=>a?.()),v=j(u=>i?.(u));return q("del, backspace",()=>{r&&v(r)}),c.jsxs("div",{className:rt,children:[c.jsx(A,{w:"100%",mb:"0.5rem",px:"0.5rem",children:c.jsx(lt,{title:t,onClick:f})}),c.jsx(nt,{gap:12,data:e,selectedID:r,renderItem:(u,p,d)=>c.jsxs(c.Fragment,{children:[o.inverse.has(d)?c.jsx(ut,{title:o.inverse.get(d)??""}):null,c.jsx(at,{component:z,className:it,"data-id":u.id,"data-selected":p,to:`/bots/ChatGPT/${u.id}`,children:u.title})]})})]})});export{ht as default};