(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3425,t=>{t.v({button:"NoteList-module__LCs_aq__button",content:"NoteList-module__LCs_aq__content",footer:"NoteList-module__LCs_aq__footer",link:"NoteList-module__LCs_aq__link",list:"NoteList-module__LCs_aq__list",listItem:"NoteList-module__LCs_aq__listItem",tag:"NoteList-module__LCs_aq__tag",title:"NoteList-module__LCs_aq__title"})},46430,t=>{"use strict";let e,s;var i,o=t.i(43476),r=t.i(932),a=t.i(71645),n=t.i(14272),l=t.i(40143),c=t.i(15823),u=t.i(19273),d=class extends c.Subscribable{#t;#e=void 0;#s;#i;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#o()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.shallowEqualObjects)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.hashKey)(e.mutationKey)!==(0,u.hashKey)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#o(),this.#r(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#o(),this.#r()}mutate(t,e){return this.#i=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#o(){let t=this.#s?.state??(0,n.getDefaultState)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#r(t){l.notifyManager.batch(()=>{if(this.#i&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context,i={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};t?.type==="success"?(this.#i.onSuccess?.(t.data,e,s,i),this.#i.onSettled?.(t.data,null,e,s,i)):t?.type==="error"&&(this.#i.onError?.(t.error,e,s,i),this.#i.onSettled?.(void 0,t.error,e,s,i))}this.listeners.forEach(t=>{t(this.#e)})})}},p=t.i(12598),m=t.i(3425);let h={data:""},f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,y=(t,e)=>{let s="",i="",o="";for(let r in t){let a=t[r];"@"==r[0]?"i"==r[1]?s=r+" "+a+";":i+="f"==r[1]?y(a,r):r+"{"+y(a,"k"==r[1]?"":e)+"}":"object"==typeof a?i+=y(a,e?e.replace(/([^,])+/g,t=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):r):null!=a&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=y.p?y.p(r,a):r+":"+a+";")}return s+(e&&o?e+"{"+o+"}":o)+i},x={},v=t=>{if("object"==typeof t){let e="";for(let s in t)e+=s+v(t[s]);return e}return t};function _(t){let e,s,i=this||{},o=t.call?t(i.p):t;return((t,e,s,i,o)=>{var r;let a=v(t),n=x[a]||(x[a]=(t=>{let e=0,s=11;for(;e<t.length;)s=101*s+t.charCodeAt(e++)>>>0;return"go"+s})(a));if(!x[n]){let e=a!==t?t:(t=>{let e,s,i=[{}];for(;e=f.exec(t.replace(b,""));)e[4]?i.shift():e[3]?(s=e[3].replace(g," ").trim(),i.unshift(i[0][s]=i[0][s]||{})):i[0][e[1]]=e[2].replace(g," ").trim();return i[0]})(t);x[n]=y(o?{["@keyframes "+n]:e}:e,s?"":"."+n)}let l=s&&x.g?x.g:null;return s&&(x.g=x[n]),r=x[n],l?e.data=e.data.replace(l,r):-1===e.data.indexOf(r)&&(e.data=i?r+e.data:e.data+r),n})(o.unshift?o.raw?(e=[].slice.call(arguments,1),s=i.p,o.reduce((t,i,o)=>{let r=e[o];if(r&&r.call){let t=r(s),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;r=e?"."+e:t&&"object"==typeof t?t.props?"":y(t,""):!1===t?"":t}return t+i+(null==r?"":r)},"")):o.reduce((t,e)=>Object.assign(t,e&&e.call?e(i.p):e),{}):o,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||h})(i.target),i.g,i.o,i.k)}_.bind({g:1});let w,C,O,N=_.bind({k:1});function j(t,e){let s=this||{};return function(){let i=arguments;function o(r,a){let n=Object.assign({},r),l=n.className||o.className;s.p=Object.assign({theme:C&&C()},n),s.o=/ *go\d+/.test(l),n.className=_.apply(s,i)+(l?" "+l:""),e&&(n.ref=a);let c=t;return t[0]&&(c=n.as||t,delete n.as),O&&c[0]&&O(n),w(c,n)}return e?e(o):o}}var E=(t,e)=>"function"==typeof t?t(e):t,L=(e=0,()=>(++e).toString()),M=()=>{if(void 0===s&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s},k="default",$=(t,e)=>{let{toastLimit:s}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,s)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:i}=e;return $(t,{type:+!!t.toasts.find(t=>t.id===i.id),toast:i});case 3:let{toastId:o}=e;return{...t,toasts:t.toasts.map(t=>t.id===o||void 0===o?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+r}))}}},R=[],S={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},q=(t,e=k)=>{A[e]=$(A[e]||S,t),R.forEach(([t,s])=>{t===e&&s(A[e])})},K=t=>Object.keys(A).forEach(e=>q(t,e)),I=(t=k)=>e=>{q(e,t)},z=t=>(e,s)=>{let i,o=((t,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(null==s?void 0:s.id)||L()}))(e,t,s);return I(o.toasterId||(i=o.id,Object.keys(A).find(t=>A[t].toasts.some(t=>t.id===i))))({type:2,toast:o}),o.id},F=(t,e)=>z("blank")(t,e);F.error=z("error"),F.success=z("success"),F.loading=z("loading"),F.custom=z("custom"),F.dismiss=(t,e)=>{let s={type:3,toastId:t};e?I(e)(s):K(s)},F.dismissAll=t=>F.dismiss(void 0,t),F.remove=(t,e)=>{let s={type:4,toastId:t};e?I(e)(s):K(s)},F.removeAll=t=>F.remove(void 0,t),F.promise=(t,e,s)=>{let i=F.loading(e.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let o=e.success?E(e.success,t):void 0;return o?F.success(o,{id:i,...s,...null==s?void 0:s.success}):F.dismiss(i),t}).catch(t=>{let o=e.error?E(e.error,t):void 0;o?F.error(o,{id:i,...s,...null==s?void 0:s.error}):F.dismiss(i)}),t};var D=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=j("div")`
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
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Q=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,H=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=N`
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
}`,Y=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V} 0.2s ease-out forwards;
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
`,Z=j("div")`
  position: absolute;
`,G=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:t})=>{let{icon:e,type:s,iconTheme:i}=t;return void 0!==e?"string"==typeof e?a.createElement(W,null,e):e:"blank"===s?null:a.createElement(G,null,a.createElement(Q,{...i}),"loading"!==s&&a.createElement(Z,null,"error"===s?a.createElement(U,{...i}):a.createElement(Y,{...i})))},tt=j("div")`
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
`,te=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;a.memo(({toast:t,position:e,style:s,children:i})=>{let o=t.height?((t,e)=>{let s=t.includes("top")?1:-1,[i,o]=M()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:e?`${N(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||e||"top-center",t.visible):{opacity:0},r=a.createElement(X,{toast:t}),n=a.createElement(te,{...t.ariaProps},E(t.message,t));return a.createElement(tt,{className:t.className,style:{...o,...s,...t.style}},"function"==typeof i?i({icon:r,message:n}):a.createElement(a.Fragment,null,r,n))}),i=a.createElement,y.p=void 0,w=i,C=void 0,O=void 0,_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var ts=t.i(54858),ti=t.i(22016);function to(t){let e,s,i,n,c=(0,r.c)(13),{notes:h}=t,f=(0,p.useQueryClient)();c[0]!==f?(e={mutationFn:ts.deleteNote,onSuccess:()=>{F.success("Note deleted"),f.invalidateQueries({queryKey:["notes"]})},onError:tr},c[0]=f,c[1]=e):e=c[1];let b=function(t,e){let s=(0,p.useQueryClient)(void 0),[i]=a.useState(()=>new d(s,t));a.useEffect(()=>{i.setOptions(t)},[i,t]);let o=a.useSyncExternalStore(a.useCallback(t=>i.subscribe(l.notifyManager.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),r=a.useCallback((t,e)=>{i.mutate(t,e).catch(u.noop)},[i]);if(o.error&&(0,u.shouldThrowError)(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:r,mutateAsync:o.mutate}}(e);c[2]!==b?(s=t=>{b.mutate(t)},c[2]=b,c[3]=s):s=c[3];let g=s;if(c[4]!==g||c[5]!==b||c[6]!==h){let t;c[8]!==g||c[9]!==b?(t=t=>(0,o.jsxs)("li",{className:m.default.listItem,children:[(0,o.jsx)("h2",{className:m.default.title,children:t.title}),(0,o.jsx)("p",{className:m.default.content,children:t.content}),(0,o.jsxs)("div",{className:m.default.footer,children:[(0,o.jsx)("span",{className:m.default.tag,children:t.tag}),(0,o.jsx)(ti.default,{href:`/notes/${t.id}`,className:m.default.link,children:"View"}),(0,o.jsx)("button",{onClick:()=>g(t.id),className:m.default.button,disabled:b.isPending,children:"Delete"})]})]},t.id),c[8]=g,c[9]=b,c[10]=t):t=c[10],i=h.map(t),c[4]=g,c[5]=b,c[6]=h,c[7]=i}else i=c[7];return c[11]!==i?(n=(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:m.default.list,children:i})}),c[11]=i,c[12]=n):n=c[12],n}function tr(){F.error("Failed to delete note")}t.s(["default",()=>to],46430)}]);