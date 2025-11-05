(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(t,e,s)=>{e.exports=t.r(76562)},58406,t=>{t.v({text:"error-module__1twf8q__text"})},70782,t=>{"use strict";var e=t.i(43476),s=t.i(932),r=t.i(58406);t.s(["default",0,t=>{let i,a=(0,s.c)(2),{error:n}=t;return a[0]!==n.message?(i=(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("p",{className:r.default.text,children:["Could not fetch the list of notes. ",n.message]})}),a[0]=n.message,a[1]=i):i=a[1],i}])},21642,t=>{t.v({backdrop:"Modal-module__sR2AWG__backdrop",modal:"Modal-module__sR2AWG__modal"})},15258,t=>{t.v({backBtn:"NotePreview-module__U-az_a__backBtn",container:"NotePreview-module__U-az_a__container",content:"NotePreview-module__U-az_a__content",date:"NotePreview-module__U-az_a__date",header:"NotePreview-module__U-az_a__header",item:"NotePreview-module__U-az_a__item",tag:"NotePreview-module__U-az_a__tag"})},33416,t=>{"use strict";var e=t.i(43476),s=t.i(932),r=t.i(74080),i=t.i(21642),a=t.i(15258),n=t.i(18566);function o(t){let o,l,u,c=(0,s.c)(7),{children:d}=t,h=(0,n.useRouter)();c[0]!==h?(o=()=>h.back(),c[0]=h,c[1]=o):o=c[1];let p=o;return c[2]!==p?(l=(0,e.jsx)("button",{className:a.default.backBtn,onClick:p,children:"Close"}),c[2]=p,c[3]=l):l=c[3],c[4]!==d||c[5]!==l?(u=(0,r.createPortal)((0,e.jsx)("div",{className:i.default.backdrop,role:"dialog","aria-modal":"true",children:(0,e.jsxs)("div",{className:i.default.modal,children:[d,l]})}),document.body),c[4]=d,c[5]=l,c[6]=u):u=c[6],u}t.s(["default",()=>o])},3425,t=>{t.v({button:"NoteList-module__LCs_aq__button",content:"NoteList-module__LCs_aq__content",footer:"NoteList-module__LCs_aq__footer",link:"NoteList-module__LCs_aq__link",list:"NoteList-module__LCs_aq__list",listItem:"NoteList-module__LCs_aq__listItem",tag:"NoteList-module__LCs_aq__tag",title:"NoteList-module__LCs_aq__title"})},46430,54616,5766,t=>{"use strict";let e,s;var r,i=t.i(43476),a=t.i(932),n=t.i(71645),o=t.i(14272),l=t.i(40143),u=t.i(15823),c=t.i(19273),d=class extends u.Subscribable{#t;#e=void 0;#s;#r;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,c.shallowEqualObjects)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,c.hashKey)(e.mutationKey)!==(0,c.hashKey)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#a(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#a()}mutate(t,e){return this.#r=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#i(){let t=this.#s?.state??(0,o.getDefaultState)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#a(t){l.notifyManager.batch(()=>{if(this.#r&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context,r={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};t?.type==="success"?(this.#r.onSuccess?.(t.data,e,s,r),this.#r.onSettled?.(t.data,null,e,s,r)):t?.type==="error"&&(this.#r.onError?.(t.error,e,s,r),this.#r.onSettled?.(void 0,t.error,e,s,r))}this.listeners.forEach(t=>{t(this.#e)})})}},h=t.i(12598);function p(t,e){let s=(0,h.useQueryClient)(e),[r]=n.useState(()=>new d(s,t));n.useEffect(()=>{r.setOptions(t)},[r,t]);let i=n.useSyncExternalStore(n.useCallback(t=>r.subscribe(l.notifyManager.batchCalls(t)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),a=n.useCallback((t,e)=>{r.mutate(t,e).catch(c.noop)},[r]);if(i.error&&(0,c.shouldThrowError)(r.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:a,mutateAsync:i.mutate}}t.s(["useMutation",()=>p],54616);var f=t.i(3425);let m={data:""},y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,v=(t,e)=>{let s="",r="",i="";for(let a in t){let n=t[a];"@"==a[0]?"i"==a[1]?s=a+" "+n+";":r+="f"==a[1]?v(n,a):a+"{"+v(n,"k"==a[1]?"":e)+"}":"object"==typeof n?r+=v(n,e?e.replace(/([^,])+/g,t=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):a):null!=n&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=v.p?v.p(a,n):a+":"+n+";")}return s+(e&&i?e+"{"+i+"}":i)+r},_={},R=t=>{if("object"==typeof t){let e="";for(let s in t)e+=s+R(t[s]);return e}return t};function x(t){let e,s,r=this||{},i=t.call?t(r.p):t;return((t,e,s,r,i)=>{var a;let n=R(t),o=_[n]||(_[n]=(t=>{let e=0,s=11;for(;e<t.length;)s=101*s+t.charCodeAt(e++)>>>0;return"go"+s})(n));if(!_[o]){let e=n!==t?t:(t=>{let e,s,r=[{}];for(;e=y.exec(t.replace(b,""));)e[4]?r.shift():e[3]?(s=e[3].replace(g," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][e[1]]=e[2].replace(g," ").trim();return r[0]})(t);_[o]=v(i?{["@keyframes "+o]:e}:e,s?"":"."+o)}let l=s&&_.g?_.g:null;return s&&(_.g=_[o]),a=_[o],l?e.data=e.data.replace(l,a):-1===e.data.indexOf(a)&&(e.data=r?a+e.data:e.data+a),o})(i.unshift?i.raw?(e=[].slice.call(arguments,1),s=r.p,i.reduce((t,r,i)=>{let a=e[i];if(a&&a.call){let t=a(s),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;a=e?"."+e:t&&"object"==typeof t?t.props?"":v(t,""):!1===t?"":t}return t+r+(null==a?"":a)},"")):i.reduce((t,e)=>Object.assign(t,e&&e.call?e(r.p):e),{}):i,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||m})(r.target),r.g,r.o,r.k)}x.bind({g:1});let O,w,C,E=x.bind({k:1});function Q(t,e){let s=this||{};return function(){let r=arguments;function i(a,n){let o=Object.assign({},a),l=o.className||i.className;s.p=Object.assign({theme:w&&w()},o),s.o=/ *go\d+/.test(l),o.className=x.apply(s,r)+(l?" "+l:""),e&&(o.ref=n);let u=t;return t[0]&&(u=o.as||t,delete o.as),C&&u[0]&&C(o),O(u,o)}return e?e(i):i}}var S=(t,e)=>"function"==typeof t?t(e):t,I=(e=0,()=>(++e).toString()),T=()=>{if(void 0===s&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s},k="default",M=(t,e)=>{let{toastLimit:s}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,s)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:r}=e;return M(t,{type:+!!t.toasts.find(t=>t.id===r.id),toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(t=>t.id===i||void 0===i?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+a}))}}},j=[],N={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},U={},q=(t,e=k)=>{U[e]=M(U[e]||N,t),j.forEach(([t,s])=>{t===e&&s(U[e])})},D=t=>Object.keys(U).forEach(e=>q(t,e)),L=(t=k)=>e=>{q(e,t)},P=t=>(e,s)=>{let r,i=((t,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(null==s?void 0:s.id)||I()}))(e,t,s);return L(i.toasterId||(r=i.id,Object.keys(U).find(t=>U[t].toasts.some(t=>t.id===r))))({type:2,toast:i}),i.id},F=(t,e)=>P("blank")(t,e);F.error=P("error"),F.success=P("success"),F.loading=P("loading"),F.custom=P("custom"),F.dismiss=(t,e)=>{let s={type:3,toastId:t};e?L(e)(s):D(s)},F.dismissAll=t=>F.dismiss(void 0,t),F.remove=(t,e)=>{let s={type:4,toastId:t};e?L(e)(s):D(s)},F.removeAll=t=>F.remove(void 0,t),F.promise=(t,e,s)=>{let r=F.loading(e.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let i=e.success?S(e.success,t):void 0;return i?F.success(i,{id:r,...s,...null==s?void 0:s.success}):F.dismiss(r),t}).catch(t=>{let i=e.error?S(e.error,t):void 0;i?F.error(i,{id:r,...s,...null==s?void 0:s.error}):F.dismiss(r)}),t};var A=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=Q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
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
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=Q("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,W=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=E`
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
}`,G=Q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,Y=Q("div")`
  position: absolute;
`,Z=Q("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X=Q("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,tt=({toast:t})=>{let{icon:e,type:s,iconTheme:r}=t;return void 0!==e?"string"==typeof e?n.createElement(X,null,e):e:"blank"===s?null:n.createElement(Z,null,n.createElement(H,{...r}),"loading"!==s&&n.createElement(Y,null,"error"===s?n.createElement(K,{...r}):n.createElement(G,{...r})))},te=Q("div")`
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
`,ts=Q("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;n.memo(({toast:t,position:e,style:s,children:r})=>{let i=t.height?((t,e)=>{let s=t.includes("top")?1:-1,[r,i]=T()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:e?`${E(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||e||"top-center",t.visible):{opacity:0},a=n.createElement(tt,{toast:t}),o=n.createElement(ts,{...t.ariaProps},S(t.message,t));return n.createElement(te,{className:t.className,style:{...i,...s,...t.style}},"function"==typeof r?r({icon:a,message:o}):n.createElement(n.Fragment,null,a,o))}),r=n.createElement,v.p=void 0,O=r,w=void 0,C=void 0,x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,t.s(["default",()=>F],5766);var tr=t.i(54858),ti=t.i(22016);function ta(t){let e,s,r,n,o=(0,a.c)(13),{notes:l}=t,u=(0,h.useQueryClient)();o[0]!==u?(e={mutationFn:tr.deleteNote,onSuccess:()=>{F.success("Note deleted"),u.invalidateQueries({queryKey:["notes"]})},onError:tn},o[0]=u,o[1]=e):e=o[1];let c=p(e);o[2]!==c?(s=t=>{c.mutate(t)},o[2]=c,o[3]=s):s=o[3];let d=s;if(o[4]!==d||o[5]!==c||o[6]!==l){let t;o[8]!==d||o[9]!==c?(t=t=>(0,i.jsxs)("li",{className:f.default.listItem,children:[(0,i.jsx)("h2",{className:f.default.title,children:t.title}),(0,i.jsx)("p",{className:f.default.content,children:t.content}),(0,i.jsxs)("div",{className:f.default.footer,children:[(0,i.jsx)("span",{className:f.default.tag,children:t.tag}),(0,i.jsx)(ti.default,{href:`/notes/${t.id}`,className:f.default.link,children:"View"}),(0,i.jsx)("button",{onClick:()=>d(t.id),className:f.default.button,disabled:c.isPending,children:"Delete"})]})]},t.id),o[8]=d,o[9]=c,o[10]=t):t=o[10],r=l.map(t),o[4]=d,o[5]=c,o[6]=l,o[7]=r}else r=o[7];return o[11]!==r?(n=(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:f.default.list,children:r})}),o[11]=r,o[12]=n):n=o[12],n}function tn(){F.error("Failed to delete note")}t.s(["default",()=>ta],46430)},12498,t=>{t.v({text:"loading-module__PBh0PW__text"})},5789,t=>{"use strict";var e=t.i(43476),s=t.i(932),r=t.i(12498);function i(){let t,i=(0,s.c)(1);return i[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("p",{className:r.default.text,children:"Loading, please wait..."})}),i[0]=t):t=i[0],t}t.s(["default",()=>i])},60678,t=>{"use strict";var e=t.i(71645);t.i(47167);var s=t.i(93803),r=t.i(19273);function i(t){return t}function a(t,e,a){if("object"!=typeof e||null===e)return;let n=t.getMutationCache(),o=t.getQueryCache(),l=a?.defaultOptions?.deserializeData??t.getDefaultOptions().hydrate?.deserializeData??i,u=e.mutations||[],c=e.queries||[];u.forEach(({state:e,...s})=>{n.build(t,{...t.getDefaultOptions().hydrate?.mutations,...a?.defaultOptions?.mutations,...s},e)}),c.forEach(({queryKey:e,state:i,queryHash:n,meta:u,promise:c,dehydratedAt:d})=>{let h=c?(0,s.tryResolveSync)(c):void 0,p=void 0===i.data?h?.data:i.data,f=void 0===p?p:l(p),m=o.get(n),y=m?.state.status==="pending",b=m?.state.fetchStatus==="fetching";if(m){let t=h&&void 0!==d&&d>m.state.dataUpdatedAt;if(i.dataUpdatedAt>m.state.dataUpdatedAt||t){let{fetchStatus:t,...e}=i;m.setState({...e,data:f})}}else m=o.build(t,{...t.getDefaultOptions().hydrate?.queries,...a?.defaultOptions?.queries,queryKey:e,queryHash:n,meta:u},{...i,data:f,fetchStatus:"idle",status:void 0!==f?"success":i.status});c&&!y&&!b&&(void 0===d||d>m.state.dataUpdatedAt)&&m.fetch(void 0,{initialPromise:Promise.resolve(c).then(l)}).catch(r.noop)})}var n=t.i(12598),o=({children:t,options:s={},state:r,queryClient:i})=>{let o=(0,n.useQueryClient)(i),l=e.useRef(s);e.useEffect(()=>{l.current=s});let u=e.useMemo(()=>{if(r){if("object"!=typeof r)return;let t=o.getQueryCache(),e=r.queries||[],s=[],i=[];for(let r of e){let e=t.get(r.queryHash);e?(r.state.dataUpdatedAt>e.state.dataUpdatedAt||r.promise&&"pending"!==e.state.status&&"fetching"!==e.state.fetchStatus&&void 0!==r.dehydratedAt&&r.dehydratedAt>e.state.dataUpdatedAt)&&i.push(r):s.push(r)}if(s.length>0&&a(o,{queries:s},l.current),i.length>0)return i}},[o,r]);return e.useEffect(()=>{u&&a(o,{queries:u},l.current)},[o,u]),t};t.s(["HydrationBoundary",()=>o],60678)},66027,t=>{"use strict";let e;var s=t.i(75555),r=t.i(40143),i=t.i(86491),a=t.i(15823),n=t.i(93803),o=t.i(19273),l=t.i(80166),u=class extends a.Subscribable{constructor(t,e){super(),this.options=e,this.#t=t,this.#n=null,this.#o=(0,n.pendingThenable)(),this.bindMethods(),this.setOptions(e)}#t;#l=void 0;#u=void 0;#e=void 0;#c;#d;#o;#n;#h;#p;#f;#m;#y;#b;#g=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#l.addObserver(this),c(this.#l,this.options)?this.#v():this.updateResult(),this.#_())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return d(this.#l,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return d(this.#l,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#R(),this.#x(),this.#l.removeObserver(this)}setOptions(t){let e=this.options,s=this.#l;if(this.options=this.#t.defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,o.resolveEnabled)(this.options.enabled,this.#l))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#O(),this.#l.setOptions(this.options),e._defaulted&&!(0,o.shallowEqualObjects)(this.options,e)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#l,observer:this});let r=this.hasListeners();r&&h(this.#l,s,this.options,e)&&this.#v(),this.updateResult(),r&&(this.#l!==s||(0,o.resolveEnabled)(this.options.enabled,this.#l)!==(0,o.resolveEnabled)(e.enabled,this.#l)||(0,o.resolveStaleTime)(this.options.staleTime,this.#l)!==(0,o.resolveStaleTime)(e.staleTime,this.#l))&&this.#w();let i=this.#C();r&&(this.#l!==s||(0,o.resolveEnabled)(this.options.enabled,this.#l)!==(0,o.resolveEnabled)(e.enabled,this.#l)||i!==this.#b)&&this.#E(i)}getOptimisticResult(t){var e,s;let r=this.#t.getQueryCache().build(this.#t,t),i=this.createResult(r,t);return e=this,s=i,(0,o.shallowEqualObjects)(e.getCurrentResult(),s)||(this.#e=i,this.#d=this.options,this.#c=this.#l.state),i}getCurrentResult(){return this.#e}trackResult(t,e){return new Proxy(t,{get:(t,s)=>(this.trackProp(s),e?.(s),"promise"===s&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#o.status||this.#o.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(t,s))})}trackProp(t){this.#g.add(t)}getCurrentQuery(){return this.#l}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#t.defaultQueryOptions(t),s=this.#t.getQueryCache().build(this.#t,e);return s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#v({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#e))}#v(t){this.#O();let e=this.#l.fetch(this.options,t);return t?.throwOnError||(e=e.catch(o.noop)),e}#w(){this.#R();let t=(0,o.resolveStaleTime)(this.options.staleTime,this.#l);if(o.isServer||this.#e.isStale||!(0,o.isValidTimeout)(t))return;let e=(0,o.timeUntilStale)(this.#e.dataUpdatedAt,t);this.#m=l.timeoutManager.setTimeout(()=>{this.#e.isStale||this.updateResult()},e+1)}#C(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#l):this.options.refetchInterval)??!1}#E(t){this.#x(),this.#b=t,!o.isServer&&!1!==(0,o.resolveEnabled)(this.options.enabled,this.#l)&&(0,o.isValidTimeout)(this.#b)&&0!==this.#b&&(this.#y=l.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||s.focusManager.isFocused())&&this.#v()},this.#b))}#_(){this.#w(),this.#E(this.#C())}#R(){this.#m&&(l.timeoutManager.clearTimeout(this.#m),this.#m=void 0)}#x(){this.#y&&(l.timeoutManager.clearInterval(this.#y),this.#y=void 0)}createResult(t,e){let s,r=this.#l,a=this.options,l=this.#e,u=this.#c,d=this.#d,f=t!==r?t.state:this.#u,{state:m}=t,y={...m},b=!1;if(e._optimisticResults){let s=this.hasListeners(),n=!s&&c(t,e),o=s&&h(t,r,e,a);(n||o)&&(y={...y,...(0,i.fetchState)(m.data,t.options)}),"isRestoring"===e._optimisticResults&&(y.fetchStatus="idle")}let{error:g,errorUpdatedAt:v,status:_}=y;s=y.data;let R=!1;if(void 0!==e.placeholderData&&void 0===s&&"pending"===_){let t;l?.isPlaceholderData&&e.placeholderData===d?.placeholderData?(t=l.data,R=!0):t="function"==typeof e.placeholderData?e.placeholderData(this.#f?.state.data,this.#f):e.placeholderData,void 0!==t&&(_="success",s=(0,o.replaceData)(l?.data,t,e),b=!0)}if(e.select&&void 0!==s&&!R)if(l&&s===u?.data&&e.select===this.#h)s=this.#p;else try{this.#h=e.select,s=e.select(s),s=(0,o.replaceData)(l?.data,s,e),this.#p=s,this.#n=null}catch(t){this.#n=t}this.#n&&(g=this.#n,s=this.#p,v=Date.now(),_="error");let x="fetching"===y.fetchStatus,O="pending"===_,w="error"===_,C=O&&x,E=void 0!==s,Q={status:_,fetchStatus:y.fetchStatus,isPending:O,isSuccess:"success"===_,isError:w,isInitialLoading:C,isLoading:C,data:s,dataUpdatedAt:y.dataUpdatedAt,error:g,errorUpdatedAt:v,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>f.dataUpdateCount||y.errorUpdateCount>f.errorUpdateCount,isFetching:x,isRefetching:x&&!O,isLoadingError:w&&!E,isPaused:"paused"===y.fetchStatus,isPlaceholderData:b,isRefetchError:w&&E,isStale:p(t,e),refetch:this.refetch,promise:this.#o,isEnabled:!1!==(0,o.resolveEnabled)(e.enabled,t)};if(this.options.experimental_prefetchInRender){let e=t=>{"error"===Q.status?t.reject(Q.error):void 0!==Q.data&&t.resolve(Q.data)},s=()=>{e(this.#o=Q.promise=(0,n.pendingThenable)())},i=this.#o;switch(i.status){case"pending":t.queryHash===r.queryHash&&e(i);break;case"fulfilled":("error"===Q.status||Q.data!==i.value)&&s();break;case"rejected":("error"!==Q.status||Q.error!==i.reason)&&s()}}return Q}updateResult(){let t=this.#e,e=this.createResult(this.#l,this.options);if(this.#c=this.#l.state,this.#d=this.options,void 0!==this.#c.data&&(this.#f=this.#l),(0,o.shallowEqualObjects)(e,t))return;this.#e=e;let s=()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,s="function"==typeof e?e():e;if("all"===s||!s&&!this.#g.size)return!0;let r=new Set(s??this.#g);return this.options.throwOnError&&r.add("error"),Object.keys(this.#e).some(e=>this.#e[e]!==t[e]&&r.has(e))};this.#a({listeners:s()})}#O(){let t=this.#t.getQueryCache().build(this.#t,this.options);if(t===this.#l)return;let e=this.#l;this.#l=t,this.#u=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#_()}#a(t){r.notifyManager.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#e)}),this.#t.getQueryCache().notify({query:this.#l,type:"observerResultsUpdated"})})}};function c(t,e){return!1!==(0,o.resolveEnabled)(e.enabled,t)&&void 0===t.state.data&&("error"!==t.state.status||!1!==e.retryOnMount)||void 0!==t.state.data&&d(t,e,e.refetchOnMount)}function d(t,e,s){if(!1!==(0,o.resolveEnabled)(e.enabled,t)&&"static"!==(0,o.resolveStaleTime)(e.staleTime,t)){let r="function"==typeof s?s(t):s;return"always"===r||!1!==r&&p(t,e)}return!1}function h(t,e,s,r){return(t!==e||!1===(0,o.resolveEnabled)(r.enabled,t))&&(!s.suspense||"error"!==t.state.status)&&p(t,s)}function p(t,e){return!1!==(0,o.resolveEnabled)(e.enabled,t)&&t.isStaleByTime((0,o.resolveStaleTime)(e.staleTime,t))}t.i(47167);var f=t.i(71645),m=t.i(12598);t.i(43476);var y=f.createContext((e=!1,{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e})),b=f.createContext(!1);b.Provider;var g=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function v(t,e){return function(t,e,s){let i=f.useContext(b),a=f.useContext(y),n=(0,m.useQueryClient)(s),l=n.defaultQueryOptions(t);if(n.getDefaultOptions().queries?._experimental_beforeQuery?.(l),l._optimisticResults=i?"isRestoring":"optimistic",l.suspense){let t=t=>"static"===t?t:Math.max(t??1e3,1e3),e=l.staleTime;l.staleTime="function"==typeof e?(...s)=>t(e(...s)):t(e),"number"==typeof l.gcTime&&(l.gcTime=Math.max(l.gcTime,1e3))}(l.suspense||l.throwOnError||l.experimental_prefetchInRender)&&!a.isReset()&&(l.retryOnMount=!1),f.useEffect(()=>{a.clearReset()},[a]);let u=!n.getQueryCache().get(l.queryHash),[c]=f.useState(()=>new e(n,l)),d=c.getOptimisticResult(l),h=!i&&!1!==t.subscribed;if(f.useSyncExternalStore(f.useCallback(t=>{let e=h?c.subscribe(r.notifyManager.batchCalls(t)):o.noop;return c.updateResult(),e},[c,h]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),f.useEffect(()=>{c.setOptions(l)},[l,c]),l?.suspense&&d.isPending)throw g(l,c,a);if((({result:t,errorResetBoundary:e,throwOnError:s,query:r,suspense:i})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&(i&&void 0===t.data||(0,o.shouldThrowError)(s,[t.error,r])))({result:d,errorResetBoundary:a,throwOnError:l.throwOnError,query:n.getQueryCache().get(l.queryHash),suspense:l.suspense}))throw d.error;if(n.getDefaultOptions().queries?._experimental_afterQuery?.(l,d),l.experimental_prefetchInRender&&!o.isServer&&d.isLoading&&d.isFetching&&!i){let t=u?g(l,c,a):n.getQueryCache().get(l.queryHash)?.promise;t?.catch(o.noop).finally(()=>{c.updateResult()})}return l.notifyOnChangeProps?d:c.trackResult(d)}(t,u,e)}t.s(["useQuery",()=>v],66027)}]);