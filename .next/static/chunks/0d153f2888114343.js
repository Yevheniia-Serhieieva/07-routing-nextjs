(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(t,e,s)=>{e.exports=t.r(76562)},3425,t=>{t.v({button:"NoteList-module__LCs_aq__button",content:"NoteList-module__LCs_aq__content",footer:"NoteList-module__LCs_aq__footer",link:"NoteList-module__LCs_aq__link",list:"NoteList-module__LCs_aq__list",listItem:"NoteList-module__LCs_aq__listItem",tag:"NoteList-module__LCs_aq__tag",title:"NoteList-module__LCs_aq__title"})},46430,t=>{"use strict";let e,s;var i,r=t.i(43476),a=t.i(932),o=t.i(71645),n=t.i(14272),l=t.i(40143),c=t.i(15823),u=t.i(19273),d=class extends c.Subscribable{#t;#e=void 0;#s;#i;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.shallowEqualObjects)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.hashKey)(e.mutationKey)!==(0,u.hashKey)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#r(),this.#a(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#r(),this.#a()}mutate(t,e){return this.#i=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#r(){let t=this.#s?.state??(0,n.getDefaultState)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#a(t){l.notifyManager.batch(()=>{if(this.#i&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context,i={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};t?.type==="success"?(this.#i.onSuccess?.(t.data,e,s,i),this.#i.onSettled?.(t.data,null,e,s,i)):t?.type==="error"&&(this.#i.onError?.(t.error,e,s,i),this.#i.onSettled?.(void 0,t.error,e,s,i))}this.listeners.forEach(t=>{t(this.#e)})})}},p=t.i(12598),m=t.i(3425);let h={data:""},f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,y=(t,e)=>{let s="",i="",r="";for(let a in t){let o=t[a];"@"==a[0]?"i"==a[1]?s=a+" "+o+";":i+="f"==a[1]?y(o,a):a+"{"+y(o,"k"==a[1]?"":e)+"}":"object"==typeof o?i+=y(o,e?e.replace(/([^,])+/g,t=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):a):null!=o&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=y.p?y.p(a,o):a+":"+o+";")}return s+(e&&r?e+"{"+r+"}":r)+i},x={},v=t=>{if("object"==typeof t){let e="";for(let s in t)e+=s+v(t[s]);return e}return t};function _(t){let e,s,i=this||{},r=t.call?t(i.p):t;return((t,e,s,i,r)=>{var a;let o=v(t),n=x[o]||(x[o]=(t=>{let e=0,s=11;for(;e<t.length;)s=101*s+t.charCodeAt(e++)>>>0;return"go"+s})(o));if(!x[n]){let e=o!==t?t:(t=>{let e,s,i=[{}];for(;e=f.exec(t.replace(b,""));)e[4]?i.shift():e[3]?(s=e[3].replace(g," ").trim(),i.unshift(i[0][s]=i[0][s]||{})):i[0][e[1]]=e[2].replace(g," ").trim();return i[0]})(t);x[n]=y(r?{["@keyframes "+n]:e}:e,s?"":"."+n)}let l=s&&x.g?x.g:null;return s&&(x.g=x[n]),a=x[n],l?e.data=e.data.replace(l,a):-1===e.data.indexOf(a)&&(e.data=i?a+e.data:e.data+a),n})(r.unshift?r.raw?(e=[].slice.call(arguments,1),s=i.p,r.reduce((t,i,r)=>{let a=e[r];if(a&&a.call){let t=a(s),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;a=e?"."+e:t&&"object"==typeof t?t.props?"":y(t,""):!1===t?"":t}return t+i+(null==a?"":a)},"")):r.reduce((t,e)=>Object.assign(t,e&&e.call?e(i.p):e),{}):r,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||h})(i.target),i.g,i.o,i.k)}_.bind({g:1});let w,j,N,C=_.bind({k:1});function O(t,e){let s=this||{};return function(){let i=arguments;function r(a,o){let n=Object.assign({},a),l=n.className||r.className;s.p=Object.assign({theme:j&&j()},n),s.o=/ *go\d+/.test(l),n.className=_.apply(s,i)+(l?" "+l:""),e&&(n.ref=o);let c=t;return t[0]&&(c=n.as||t,delete n.as),N&&c[0]&&N(n),w(c,n)}return e?e(r):r}}var E=(t,e)=>"function"==typeof t?t(e):t,L=(e=0,()=>(++e).toString()),M=()=>{if(void 0===s&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s},$="default",k=(t,e)=>{let{toastLimit:s}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,s)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:i}=e;return k(t,{type:+!!t.toasts.find(t=>t.id===i.id),toast:i});case 3:let{toastId:r}=e;return{...t,toasts:t.toasts.map(t=>t.id===r||void 0===r?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+a}))}}},S=[],R={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},q=(t,e=$)=>{A[e]=k(A[e]||R,t),S.forEach(([t,s])=>{t===e&&s(A[e])})},K=t=>Object.keys(A).forEach(e=>q(t,e)),I=(t=$)=>e=>{q(e,t)},z=t=>(e,s)=>{let i,r=((t,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(null==s?void 0:s.id)||L()}))(e,t,s);return I(r.toasterId||(i=r.id,Object.keys(A).find(t=>A[t].toasts.some(t=>t.id===i))))({type:2,toast:r}),r.id},F=(t,e)=>z("blank")(t,e);F.error=z("error"),F.success=z("success"),F.loading=z("loading"),F.custom=z("custom"),F.dismiss=(t,e)=>{let s={type:3,toastId:t};e?I(e)(s):K(s)},F.dismissAll=t=>F.dismiss(void 0,t),F.remove=(t,e)=>{let s={type:4,toastId:t};e?I(e)(s):K(s)},F.removeAll=t=>F.remove(void 0,t),F.promise=(t,e,s)=>{let i=F.loading(e.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let r=e.success?E(e.success,t):void 0;return r?F.success(r,{id:i,...s,...null==s?void 0:s.success}):F.dismiss(i),t}).catch(t=>{let r=e.error?E(e.error,t):void 0;r?F.error(r,{id:i,...s,...null==s?void 0:s.error}):F.dismiss(i)}),t};var P=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=C`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=C`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
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
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Q=O("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,H=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=C`
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
}`,W=O("div")`
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
`,Y=O("div")`
  position: absolute;
`,Z=O("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=O("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:t})=>{let{icon:e,type:s,iconTheme:i}=t;return void 0!==e?"string"==typeof e?o.createElement(J,null,e):e:"blank"===s?null:o.createElement(Z,null,o.createElement(Q,{...i}),"loading"!==s&&o.createElement(Y,null,"error"===s?o.createElement(U,{...i}):o.createElement(W,{...i})))},tt=O("div")`
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
`,te=O("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;o.memo(({toast:t,position:e,style:s,children:i})=>{let r=t.height?((t,e)=>{let s=t.includes("top")?1:-1,[i,r]=M()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:e?`${C(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||e||"top-center",t.visible):{opacity:0},a=o.createElement(X,{toast:t}),n=o.createElement(te,{...t.ariaProps},E(t.message,t));return o.createElement(tt,{className:t.className,style:{...r,...s,...t.style}},"function"==typeof i?i({icon:a,message:n}):o.createElement(o.Fragment,null,a,n))}),i=o.createElement,y.p=void 0,w=i,j=void 0,N=void 0,_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var ts=t.i(54858),ti=t.i(22016);function tr(t){let e,s,i,n,c=(0,a.c)(13),{notes:h}=t,f=(0,p.useQueryClient)();c[0]!==f?(e={mutationFn:ts.deleteNote,onSuccess:()=>{F.success("Note deleted"),f.invalidateQueries({queryKey:["notes"]})},onError:ta},c[0]=f,c[1]=e):e=c[1];let b=function(t,e){let s=(0,p.useQueryClient)(void 0),[i]=o.useState(()=>new d(s,t));o.useEffect(()=>{i.setOptions(t)},[i,t]);let r=o.useSyncExternalStore(o.useCallback(t=>i.subscribe(l.notifyManager.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),a=o.useCallback((t,e)=>{i.mutate(t,e).catch(u.noop)},[i]);if(r.error&&(0,u.shouldThrowError)(i.options.throwOnError,[r.error]))throw r.error;return{...r,mutate:a,mutateAsync:r.mutate}}(e);c[2]!==b?(s=t=>{b.mutate(t)},c[2]=b,c[3]=s):s=c[3];let g=s;if(c[4]!==g||c[5]!==b||c[6]!==h){let t;c[8]!==g||c[9]!==b?(t=t=>(0,r.jsxs)("li",{className:m.default.listItem,children:[(0,r.jsx)("h2",{className:m.default.title,children:t.title}),(0,r.jsx)("p",{className:m.default.content,children:t.content}),(0,r.jsxs)("div",{className:m.default.footer,children:[(0,r.jsx)("span",{className:m.default.tag,children:t.tag}),(0,r.jsx)(ti.default,{href:`/notes/${t.id}`,className:m.default.link,children:"View"}),(0,r.jsx)("button",{onClick:()=>g(t.id),className:m.default.button,disabled:b.isPending,children:"Delete"})]})]},t.id),c[8]=g,c[9]=b,c[10]=t):t=c[10],i=h.map(t),c[4]=g,c[5]=b,c[6]=h,c[7]=i}else i=c[7];return c[11]!==i?(n=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{className:m.default.list,children:i})}),c[11]=i,c[12]=n):n=c[12],n}function ta(){F.error("Failed to delete note")}t.s(["default",()=>tr],46430)},12498,t=>{t.v({text:"loading-module__PBh0PW__text"})},93091,t=>{"use strict";var e=t.i(43476),s=t.i(932),i=t.i(12498);function r(){let t,r=(0,s.c)(1);return r[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("p",{className:i.default.text,children:"Loading, please wait..."})}),r[0]=t):t=r[0],t}var a=t.i(46430),o=t.i(54858),n=t.i(18566),l=t.i(71645);function c(){let t=(0,n.useParams)(),s=t?.slug,i=s?.[0]==="all"?void 0:s?.[0],[c,u]=(0,l.useState)([]),[d,p]=(0,l.useState)(!0);return((0,l.useEffect)(()=>{(async()=>{p(!0);try{let t=await (0,o.getNotes)(1,12,i);u(t.notes)}finally{p(!1)}})()},[i]),d)?(0,e.jsx)(r,{}):(0,e.jsxs)("div",{children:[(0,e.jsxs)("h1",{children:[" ",i?`Notes List: '${i}'`:"All notes"," "]}),c.length>0&&(0,e.jsx)(a.default,{notes:c})]})}t.s(["default",()=>c],93091)}]);