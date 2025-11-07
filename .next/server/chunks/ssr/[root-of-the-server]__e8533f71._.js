module.exports=[24361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},14747,(a,b,c)=>{b.exports=a.x("path",()=>require("path"))},40865,a=>{a.v({button:"NoteList-module__LCs_aq__button",content:"NoteList-module__LCs_aq__content",footer:"NoteList-module__LCs_aq__footer",link:"NoteList-module__LCs_aq__link",list:"NoteList-module__LCs_aq__list",listItem:"NoteList-module__LCs_aq__listItem",tag:"NoteList-module__LCs_aq__tag",title:"NoteList-module__LCs_aq__title"})},50680,70025,6704,a=>{"use strict";let b,c;var d,e=a.i(87924),f=a.i(72131),g=a.i(12794),h=a.i(18544),i=a.i(33791),j=a.i(42871),k=class extends i.Subscribable{#a;#b=void 0;#c;#d;constructor(a,b){super(),this.#a=a,this.setOptions(b),this.bindMethods(),this.#e()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(a){let b=this.options;this.options=this.#a.defaultMutationOptions(a),(0,j.shallowEqualObjects)(this.options,b)||this.#a.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#c,observer:this}),b?.mutationKey&&this.options.mutationKey&&(0,j.hashKey)(b.mutationKey)!==(0,j.hashKey)(this.options.mutationKey)?this.reset():this.#c?.state.status==="pending"&&this.#c.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#c?.removeObserver(this)}onMutationUpdate(a){this.#e(),this.#f(a)}getCurrentResult(){return this.#b}reset(){this.#c?.removeObserver(this),this.#c=void 0,this.#e(),this.#f()}mutate(a,b){return this.#d=b,this.#c?.removeObserver(this),this.#c=this.#a.getMutationCache().build(this.#a,this.options),this.#c.addObserver(this),this.#c.execute(a)}#e(){let a=this.#c?.state??(0,g.getDefaultState)();this.#b={...a,isPending:"pending"===a.status,isSuccess:"success"===a.status,isError:"error"===a.status,isIdle:"idle"===a.status,mutate:this.mutate,reset:this.reset}}#f(a){h.notifyManager.batch(()=>{if(this.#d&&this.hasListeners()){let b=this.#b.variables,c=this.#b.context,d={client:this.#a,meta:this.options.meta,mutationKey:this.options.mutationKey};a?.type==="success"?(this.#d.onSuccess?.(a.data,b,c,d),this.#d.onSettled?.(a.data,null,b,c,d)):a?.type==="error"&&(this.#d.onError?.(a.error,b,c,d),this.#d.onSettled?.(void 0,a.error,b,c,d))}this.listeners.forEach(a=>{a(this.#b)})})}},l=a.i(37927);function m(a,b){let c=(0,l.useQueryClient)(b),[d]=f.useState(()=>new k(c,a));f.useEffect(()=>{d.setOptions(a)},[d,a]);let e=f.useSyncExternalStore(f.useCallback(a=>d.subscribe(h.notifyManager.batchCalls(a)),[d]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),g=f.useCallback((a,b)=>{d.mutate(a,b).catch(j.noop)},[d]);if(e.error&&(0,j.shouldThrowError)(d.options.throwOnError,[e.error]))throw e.error;return{...e,mutate:g,mutateAsync:e.mutate}}a.s(["useMutation",()=>m],70025);var n=a.i(40865);let o={data:""},p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,q=/\/\*[^]*?\*\/|  +/g,r=/\n+/g,s=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?s(g,f):f+"{"+s(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=s(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=s.p?s.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},t={},u=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+u(a[c]);return b}return a};function v(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=u(a),h=t[g]||(t[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!t[h]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=p.exec(a.replace(q,""));)b[4]?d.shift():b[3]?(c=b[3].replace(r," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(r," ").trim();return d[0]})(a);t[h]=s(e?{["@keyframes "+h]:b}:b,c?"":"."+h)}let i=c&&t.g?t.g:null;return c&&(t.g=t[h]),f=t[h],i?b.data=b.data.replace(i,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),h})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":s(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||o,d.g,d.o,d.k)}v.bind({g:1});let w,x,y,z=v.bind({k:1});function A(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:x&&x()},h),c.o=/ *go\d+/.test(i),h.className=v.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),y&&j[0]&&y(h),w(j,h)}return b?b(e):e}}var B=(a,b)=>"function"==typeof a?a(b):a,C=(b=0,()=>(++b).toString()),D="default",E=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return E(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},F=[],G={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},H={},I=(a,b=D)=>{H[b]=E(H[b]||G,a),F.forEach(([a,c])=>{a===b&&c(H[b])})},J=a=>Object.keys(H).forEach(b=>I(a,b)),K=(a=D)=>b=>{I(b,a)},L=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||C()}))(b,a,c);return K(e.toasterId||(d=e.id,Object.keys(H).find(a=>H[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},M=(a,b)=>L("blank")(a,b);M.error=L("error"),M.success=L("success"),M.loading=L("loading"),M.custom=L("custom"),M.dismiss=(a,b)=>{let c={type:3,toastId:a};b?K(b)(c):J(c)},M.dismissAll=a=>M.dismiss(void 0,a),M.remove=(a,b)=>{let c={type:4,toastId:a};b?K(b)(c):J(c)},M.removeAll=a=>M.remove(void 0,a),M.promise=(a,b,c)=>{let d=M.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?B(b.success,a):void 0;return e?M.success(e,{id:d,...c,...null==c?void 0:c.success}):M.dismiss(d),a}).catch(a=>{let e=b.error?B(b.error,a):void 0;e?M.error(e,{id:d,...c,...null==c?void 0:c.error}):M.dismiss(d)}),a};var N=z`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=z`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=z`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Q=A("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
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
`,R=z`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,S=A("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,T=z`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=z`
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
}`,V=A("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=A("div")`
  position: absolute;
`,X=A("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=z`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=A("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?f.createElement(Z,null,b):b:"blank"===c?null:f.createElement(X,null,f.createElement(S,{...d}),"loading"!==c&&f.createElement(W,null,"error"===c?f.createElement(Q,{...d}):f.createElement(V,{...d})))},_=A("div")`
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
`,aa=A("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;f.memo(({toast:a,position:b,style:d,children:e})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${z(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${z(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=f.createElement($,{toast:a}),i=f.createElement(aa,{...a.ariaProps},B(a.message,a));return f.createElement(_,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof e?e({icon:h,message:i}):f.createElement(f.Fragment,null,h,i))}),d=f.createElement,s.p=void 0,w=d,x=void 0,y=void 0,v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,a.s(["default",()=>M],6704);var ab=a.i(53250),ac=a.i(38246);function ad({notes:a}){let b=(0,l.useQueryClient)(),c=m({mutationFn:ab.deleteNote,onSuccess:()=>{M.success("Note deleted"),b.invalidateQueries({queryKey:["notes"]})},onError:()=>{M.error("Failed to delete note")}});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("ul",{className:n.default.list,children:a.map(a=>(0,e.jsxs)("li",{className:n.default.listItem,children:[(0,e.jsx)("h2",{className:n.default.title,children:a.title}),(0,e.jsx)("p",{className:n.default.content,children:a.content}),(0,e.jsxs)("div",{className:n.default.footer,children:[(0,e.jsx)("span",{className:n.default.tag,children:a.tag}),(0,e.jsx)(ac.default,{href:`/notes/${a.id}`,className:n.default.link,children:"View"}),(0,e.jsx)("button",{onClick:()=>{var b;return b=a.id,void c.mutate(b)},className:n.default.button,disabled:c.isPending,children:"Delete"})]})]},a.id))})})}a.s(["default",()=>ad],50680)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__e8533f71._.js.map