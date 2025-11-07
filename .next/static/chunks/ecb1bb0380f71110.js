(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3425,t=>{t.v({button:"NoteList-module__LCs_aq__button",content:"NoteList-module__LCs_aq__content",footer:"NoteList-module__LCs_aq__footer",link:"NoteList-module__LCs_aq__link",list:"NoteList-module__LCs_aq__list",listItem:"NoteList-module__LCs_aq__listItem",tag:"NoteList-module__LCs_aq__tag",title:"NoteList-module__LCs_aq__title"})},46430,54616,5766,t=>{"use strict";let e,s;var i,o=t.i(43476),r=t.i(932),a=t.i(71645),n=t.i(14272),l=t.i(40143),c=t.i(15823),u=t.i(19273),d=class extends c.Subscribable{#t;#e=void 0;#s;#i;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#o()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.shallowEqualObjects)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.hashKey)(e.mutationKey)!==(0,u.hashKey)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#o(),this.#r(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#o(),this.#r()}mutate(t,e){return this.#i=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#o(){let t=this.#s?.state??(0,n.getDefaultState)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#r(t){l.notifyManager.batch(()=>{if(this.#i&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context,i={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};t?.type==="success"?(this.#i.onSuccess?.(t.data,e,s,i),this.#i.onSettled?.(t.data,null,e,s,i)):t?.type==="error"&&(this.#i.onError?.(t.error,e,s,i),this.#i.onSettled?.(void 0,t.error,e,s,i))}this.listeners.forEach(t=>{t(this.#e)})})}},p=t.i(12598);function m(t,e){let s=(0,p.useQueryClient)(e),[i]=a.useState(()=>new d(s,t));a.useEffect(()=>{i.setOptions(t)},[i,t]);let o=a.useSyncExternalStore(a.useCallback(t=>i.subscribe(l.notifyManager.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),r=a.useCallback((t,e)=>{i.mutate(t,e).catch(u.noop)},[i]);if(o.error&&(0,u.shouldThrowError)(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:r,mutateAsync:o.mutate}}t.s(["useMutation",()=>m],54616);var h=t.i(3425);let f={data:""},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,x=(t,e)=>{let s="",i="",o="";for(let r in t){let a=t[r];"@"==r[0]?"i"==r[1]?s=r+" "+a+";":i+="f"==r[1]?x(a,r):r+"{"+x(a,"k"==r[1]?"":e)+"}":"object"==typeof a?i+=x(a,e?e.replace(/([^,])+/g,t=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):r):null!=a&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=x.p?x.p(r,a):r+":"+a+";")}return s+(e&&o?e+"{"+o+"}":o)+i},v={},_=t=>{if("object"==typeof t){let e="";for(let s in t)e+=s+_(t[s]);return e}return t};function w(t){let e,s,i=this||{},o=t.call?t(i.p):t;return((t,e,s,i,o)=>{var r;let a=_(t),n=v[a]||(v[a]=(t=>{let e=0,s=11;for(;e<t.length;)s=101*s+t.charCodeAt(e++)>>>0;return"go"+s})(a));if(!v[n]){let e=a!==t?t:(t=>{let e,s,i=[{}];for(;e=b.exec(t.replace(g,""));)e[4]?i.shift():e[3]?(s=e[3].replace(y," ").trim(),i.unshift(i[0][s]=i[0][s]||{})):i[0][e[1]]=e[2].replace(y," ").trim();return i[0]})(t);v[n]=x(o?{["@keyframes "+n]:e}:e,s?"":"."+n)}let l=s&&v.g?v.g:null;return s&&(v.g=v[n]),r=v[n],l?e.data=e.data.replace(l,r):-1===e.data.indexOf(r)&&(e.data=i?r+e.data:e.data+r),n})(o.unshift?o.raw?(e=[].slice.call(arguments,1),s=i.p,o.reduce((t,i,o)=>{let r=e[o];if(r&&r.call){let t=r(s),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;r=e?"."+e:t&&"object"==typeof t?t.props?"":x(t,""):!1===t?"":t}return t+i+(null==r?"":r)},"")):o.reduce((t,e)=>Object.assign(t,e&&e.call?e(i.p):e),{}):o,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||f})(i.target),i.g,i.o,i.k)}w.bind({g:1});let C,O,N,j=w.bind({k:1});function E(t,e){let s=this||{};return function(){let i=arguments;function o(r,a){let n=Object.assign({},r),l=n.className||o.className;s.p=Object.assign({theme:O&&O()},n),s.o=/ *go\d+/.test(l),n.className=w.apply(s,i)+(l?" "+l:""),e&&(n.ref=a);let c=t;return t[0]&&(c=n.as||t,delete n.as),N&&c[0]&&N(n),C(c,n)}return e?e(o):o}}var M=(t,e)=>"function"==typeof t?t(e):t,L=(e=0,()=>(++e).toString()),k=()=>{if(void 0===s&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s},$="default",R=(t,e)=>{let{toastLimit:s}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,s)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:i}=e;return R(t,{type:+!!t.toasts.find(t=>t.id===i.id),toast:i});case 3:let{toastId:o}=e;return{...t,toasts:t.toasts.map(t=>t.id===o||void 0===o?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+r}))}}},S=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},q={},K=(t,e=$)=>{q[e]=R(q[e]||A,t),S.forEach(([t,s])=>{t===e&&s(q[e])})},I=t=>Object.keys(q).forEach(e=>K(t,e)),z=(t=$)=>e=>{K(e,t)},F=t=>(e,s)=>{let i,o=((t,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(null==s?void 0:s.id)||L()}))(e,t,s);return z(o.toasterId||(i=o.id,Object.keys(q).find(t=>q[t].toasts.some(t=>t.id===i))))({type:2,toast:o}),o.id},D=(t,e)=>F("blank")(t,e);D.error=F("error"),D.success=F("success"),D.loading=F("loading"),D.custom=F("custom"),D.dismiss=(t,e)=>{let s={type:3,toastId:t};e?z(e)(s):I(s)},D.dismissAll=t=>D.dismiss(void 0,t),D.remove=(t,e)=>{let s={type:4,toastId:t};e?z(e)(s):I(s)},D.removeAll=t=>D.remove(void 0,t),D.promise=(t,e,s)=>{let i=D.loading(e.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let o=e.success?M(e.success,t):void 0;return o?D.success(o,{id:i,...s,...null==s?void 0:s.success}):D.dismiss(i),t}).catch(t=>{let o=e.error?M(e.error,t):void 0;o?D.error(o,{id:i,...s,...null==s?void 0:s.error}):D.dismiss(i)}),t};var T=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=j`
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

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
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
`,Q=j`
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
`,V=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=j`
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
}`,Z=E("div")`
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
    animation: ${Y} 0.2s ease-out forwards;
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
`,G=E("div")`
  position: absolute;
`,J=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=j`
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
  animation: ${W} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,tt=({toast:t})=>{let{icon:e,type:s,iconTheme:i}=t;return void 0!==e?"string"==typeof e?a.createElement(X,null,e):e:"blank"===s?null:a.createElement(J,null,a.createElement(H,{...i}),"loading"!==s&&a.createElement(G,null,"error"===s?a.createElement(B,{...i}):a.createElement(Z,{...i})))},te=E("div")`
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
`;a.memo(({toast:t,position:e,style:s,children:i})=>{let o=t.height?((t,e)=>{let s=t.includes("top")?1:-1,[i,o]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:e?`${j(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||e||"top-center",t.visible):{opacity:0},r=a.createElement(tt,{toast:t}),n=a.createElement(ts,{...t.ariaProps},M(t.message,t));return a.createElement(te,{className:t.className,style:{...o,...s,...t.style}},"function"==typeof i?i({icon:r,message:n}):a.createElement(a.Fragment,null,r,n))}),i=a.createElement,x.p=void 0,C=i,O=void 0,N=void 0,w`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,t.s(["default",()=>D],5766);var ti=t.i(54858),to=t.i(22016);function tr(t){let e,s,i,a,n=(0,r.c)(13),{notes:l}=t,c=(0,p.useQueryClient)();n[0]!==c?(e={mutationFn:ti.deleteNote,onSuccess:()=>{D.success("Note deleted"),c.invalidateQueries({queryKey:["notes"]})},onError:ta},n[0]=c,n[1]=e):e=n[1];let u=m(e);n[2]!==u?(s=t=>{u.mutate(t)},n[2]=u,n[3]=s):s=n[3];let d=s;if(n[4]!==d||n[5]!==u||n[6]!==l){let t;n[8]!==d||n[9]!==u?(t=t=>(0,o.jsxs)("li",{className:h.default.listItem,children:[(0,o.jsx)("h2",{className:h.default.title,children:t.title}),(0,o.jsx)("p",{className:h.default.content,children:t.content}),(0,o.jsxs)("div",{className:h.default.footer,children:[(0,o.jsx)("span",{className:h.default.tag,children:t.tag}),(0,o.jsx)(to.default,{href:`/notes/${t.id}`,className:h.default.link,children:"View"}),(0,o.jsx)("button",{onClick:()=>d(t.id),className:h.default.button,disabled:u.isPending,children:"Delete"})]})]},t.id),n[8]=d,n[9]=u,n[10]=t):t=n[10],i=l.map(t),n[4]=d,n[5]=u,n[6]=l,n[7]=i}else i=n[7];return n[11]!==i?(a=(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:h.default.list,children:i})}),n[11]=i,n[12]=a):a=n[12],a}function ta(){D.error("Failed to delete note")}t.s(["default",()=>tr],46430)}]);