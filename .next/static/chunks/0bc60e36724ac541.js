(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(t,e,s)=>{e.exports=t.r(76562)},3425,t=>{t.v({button:"NoteList-module__LCs_aq__button",content:"NoteList-module__LCs_aq__content",footer:"NoteList-module__LCs_aq__footer",link:"NoteList-module__LCs_aq__link",list:"NoteList-module__LCs_aq__list",listItem:"NoteList-module__LCs_aq__listItem",tag:"NoteList-module__LCs_aq__tag",title:"NoteList-module__LCs_aq__title"})},46430,54616,5766,t=>{"use strict";let e,s;var i,a=t.i(43476),r=t.i(932),o=t.i(71645),n=t.i(14272),l=t.i(40143),c=t.i(15823),u=t.i(19273),d=class extends c.Subscribable{#t;#e=void 0;#s;#i;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#a()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.shallowEqualObjects)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.hashKey)(e.mutationKey)!==(0,u.hashKey)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#a(),this.#r(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#a(),this.#r()}mutate(t,e){return this.#i=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#a(){let t=this.#s?.state??(0,n.getDefaultState)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#r(t){l.notifyManager.batch(()=>{if(this.#i&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context,i={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};t?.type==="success"?(this.#i.onSuccess?.(t.data,e,s,i),this.#i.onSettled?.(t.data,null,e,s,i)):t?.type==="error"&&(this.#i.onError?.(t.error,e,s,i),this.#i.onSettled?.(void 0,t.error,e,s,i))}this.listeners.forEach(t=>{t(this.#e)})})}},p=t.i(12598);function m(t,e){let s=(0,p.useQueryClient)(e),[i]=o.useState(()=>new d(s,t));o.useEffect(()=>{i.setOptions(t)},[i,t]);let a=o.useSyncExternalStore(o.useCallback(t=>i.subscribe(l.notifyManager.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),r=o.useCallback((t,e)=>{i.mutate(t,e).catch(u.noop)},[i]);if(a.error&&(0,u.shouldThrowError)(i.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:r,mutateAsync:a.mutate}}t.s(["useMutation",()=>m],54616);var h=t.i(3425);let f={data:""},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,x=(t,e)=>{let s="",i="",a="";for(let r in t){let o=t[r];"@"==r[0]?"i"==r[1]?s=r+" "+o+";":i+="f"==r[1]?x(o,r):r+"{"+x(o,"k"==r[1]?"":e)+"}":"object"==typeof o?i+=x(o,e?e.replace(/([^,])+/g,t=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):r):null!=o&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=x.p?x.p(r,o):r+":"+o+";")}return s+(e&&a?e+"{"+a+"}":a)+i},v={},_=t=>{if("object"==typeof t){let e="";for(let s in t)e+=s+_(t[s]);return e}return t};function w(t){let e,s,i=this||{},a=t.call?t(i.p):t;return((t,e,s,i,a)=>{var r;let o=_(t),n=v[o]||(v[o]=(t=>{let e=0,s=11;for(;e<t.length;)s=101*s+t.charCodeAt(e++)>>>0;return"go"+s})(o));if(!v[n]){let e=o!==t?t:(t=>{let e,s,i=[{}];for(;e=b.exec(t.replace(g,""));)e[4]?i.shift():e[3]?(s=e[3].replace(y," ").trim(),i.unshift(i[0][s]=i[0][s]||{})):i[0][e[1]]=e[2].replace(y," ").trim();return i[0]})(t);v[n]=x(a?{["@keyframes "+n]:e}:e,s?"":"."+n)}let l=s&&v.g?v.g:null;return s&&(v.g=v[n]),r=v[n],l?e.data=e.data.replace(l,r):-1===e.data.indexOf(r)&&(e.data=i?r+e.data:e.data+r),n})(a.unshift?a.raw?(e=[].slice.call(arguments,1),s=i.p,a.reduce((t,i,a)=>{let r=e[a];if(r&&r.call){let t=r(s),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;r=e?"."+e:t&&"object"==typeof t?t.props?"":x(t,""):!1===t?"":t}return t+i+(null==r?"":r)},"")):a.reduce((t,e)=>Object.assign(t,e&&e.call?e(i.p):e),{}):a,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||f})(i.target),i.g,i.o,i.k)}w.bind({g:1});let j,N,C,O=w.bind({k:1});function E(t,e){let s=this||{};return function(){let i=arguments;function a(r,o){let n=Object.assign({},r),l=n.className||a.className;s.p=Object.assign({theme:N&&N()},n),s.o=/ *go\d+/.test(l),n.className=w.apply(s,i)+(l?" "+l:""),e&&(n.ref=o);let c=t;return t[0]&&(c=n.as||t,delete n.as),C&&c[0]&&C(n),j(c,n)}return e?e(a):a}}var L=(t,e)=>"function"==typeof t?t(e):t,M=(e=0,()=>(++e).toString()),$=()=>{if(void 0===s&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s},k="default",S=(t,e)=>{let{toastLimit:s}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,s)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:i}=e;return S(t,{type:+!!t.toasts.find(t=>t.id===i.id),toast:i});case 3:let{toastId:a}=e;return{...t,toasts:t.toasts.map(t=>t.id===a||void 0===a?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+r}))}}},R=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},q={},K=(t,e=k)=>{q[e]=S(q[e]||A,t),R.forEach(([t,s])=>{t===e&&s(q[e])})},I=t=>Object.keys(q).forEach(e=>K(t,e)),z=(t=k)=>e=>{K(e,t)},F=t=>(e,s)=>{let i,a=((t,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(null==s?void 0:s.id)||M()}))(e,t,s);return z(a.toasterId||(i=a.id,Object.keys(q).find(t=>q[t].toasts.some(t=>t.id===i))))({type:2,toast:a}),a.id},P=(t,e)=>F("blank")(t,e);P.error=F("error"),P.success=F("success"),P.loading=F("loading"),P.custom=F("custom"),P.dismiss=(t,e)=>{let s={type:3,toastId:t};e?z(e)(s):I(s)},P.dismissAll=t=>P.dismiss(void 0,t),P.remove=(t,e)=>{let s={type:4,toastId:t};e?z(e)(s):I(s)},P.removeAll=t=>P.remove(void 0,t),P.promise=(t,e,s)=>{let i=P.loading(e.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let a=e.success?L(e.success,t):void 0;return a?P.success(a,{id:i,...s,...null==s?void 0:s.success}):P.dismiss(i),t}).catch(t=>{let a=e.error?L(e.error,t):void 0;a?P.error(a,{id:i,...s,...null==s?void 0:s.error}):P.dismiss(i)}),t};var D=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=O`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=O`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Q=O`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Q} 1s linear infinite;
`,V=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=O`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Y=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=E("div")`
  position: absolute;
`,G=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=O`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,tt=({toast:t})=>{let{icon:e,type:s,iconTheme:i}=t;return void 0!==e?"string"==typeof e?o.createElement(X,null,e):e:"blank"===s?null:o.createElement(G,null,o.createElement(H,{...i}),"loading"!==s&&o.createElement(Z,null,"error"===s?o.createElement(B,{...i}):o.createElement(Y,{...i})))},te=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ts=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;o.memo(({toast:t,position:e,style:s,children:i})=>{let a=t.height?((t,e)=>{let s=t.includes("top")?1:-1,[i,a]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:e?`${O(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${O(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||e||"top-center",t.visible):{opacity:0},r=o.createElement(tt,{toast:t}),n=o.createElement(ts,{...t.ariaProps},L(t.message,t));return o.createElement(te,{className:t.className,style:{...a,...s,...t.style}},"function"==typeof i?i({icon:r,message:n}):o.createElement(o.Fragment,null,r,n))}),i=o.createElement,x.p=void 0,j=i,N=void 0,C=void 0,w`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,t.s(["default",()=>P],5766);var ti=t.i(54858),ta=t.i(22016);function tr(t){let e,s,i,o,n=(0,r.c)(13),{notes:l}=t,c=(0,p.useQueryClient)();n[0]!==c?(e={mutationFn:ti.deleteNote,onSuccess:()=>{P.success("Note deleted"),c.invalidateQueries({queryKey:["notes"]})},onError:to},n[0]=c,n[1]=e):e=n[1];let u=m(e);n[2]!==u?(s=t=>{u.mutate(t)},n[2]=u,n[3]=s):s=n[3];let d=s;if(n[4]!==d||n[5]!==u||n[6]!==l){let t;n[8]!==d||n[9]!==u?(t=t=>(0,a.jsxs)("li",{className:h.default.listItem,children:[(0,a.jsx)("h2",{className:h.default.title,children:t.title}),(0,a.jsx)("p",{className:h.default.content,children:t.content}),(0,a.jsxs)("div",{className:h.default.footer,children:[(0,a.jsx)("span",{className:h.default.tag,children:t.tag}),(0,a.jsx)(ta.default,{href:`/notes/${t.id}`,className:h.default.link,children:"View"}),(0,a.jsx)("button",{onClick:()=>d(t.id),className:h.default.button,disabled:u.isPending,children:"Delete"})]})]},t.id),n[8]=d,n[9]=u,n[10]=t):t=n[10],i=l.map(t),n[4]=d,n[5]=u,n[6]=l,n[7]=i}else i=n[7];return n[11]!==i?(o=(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:h.default.list,children:i})}),n[11]=i,n[12]=o):o=n[12],o}function to(){P.error("Failed to delete note")}t.s(["default",()=>tr],46430)},12498,t=>{t.v({text:"loading-module__PBh0PW__text"})},5789,t=>{"use strict";var e=t.i(43476),s=t.i(932),i=t.i(12498);function a(){let t,a=(0,s.c)(1);return a[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("p",{className:i.default.text,children:"Loading, please wait..."})}),a[0]=t):t=a[0],t}t.s(["default",()=>a])},93091,t=>{"use strict";var e=t.i(43476),s=t.i(5789),i=t.i(46430),a=t.i(54858),r=t.i(18566),o=t.i(71645);function n(){let t=(0,r.useParams)(),n=t?.slug,l=n?.[0]==="all"?void 0:n?.[0],[c,u]=(0,o.useState)([]),[d,p]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{(async()=>{p(!0);try{let t=await (0,a.getNotes)(1,12,l);u(t.notes)}finally{p(!1)}})()},[l]),d)?(0,e.jsx)(s.default,{}):(0,e.jsxs)("div",{children:[(0,e.jsxs)("h1",{children:[" ",l?`Notes List: '${l}'`:"All notes"," "]}),c.length>0&&(0,e.jsx)(i.default,{notes:c})]})}t.s(["default",()=>n])}]);