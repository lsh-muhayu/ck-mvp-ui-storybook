import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r,a as yt}from"./index-OJ7QbjDu.js";import{L as E}from"./label-C0vn8eGT.js";import{R as Ct,P as jt,O as Nt,C as wt}from"./index-_lE5Okb1.js";import"./index-DwwQKGe_.js";import{f as U}from"./index-C27WGPQh.js";import{u as W}from"./index-D15pND6U.js";import{P as It,A as Vt,T as kt,e as St,C as Et}from"./popover-content-Dayl4ZTc.js";import{c as we}from"./index-C2vczdB5.js";import{c as $}from"./utils-CDN07tui.js";import{C as Rt}from"./chevron-down-vsUXeLsc.js";import{a as Ft}from"./scroll-area-auto-size-DfvhAHB7.js";import"./index-jm-SPu3n.js";import"./index-BilTj9-P.js";import"./index-DAVdU-vC.js";import"./index-Dc1_MvIw.js";import"./index-BVTTSdsW.js";import"./index-CI4jWBLT.js";import"./index-dMEG8esF.js";import"./index-BtVicQOV.js";import"./index-b9QAQN5m.js";import"./createLucideIcon-BRUIOxYu.js";import"./index-ehd_yKDV.js";var Oe=1,qt=.9,Lt=.8,Ot=.17,he=.1,ge=.999,zt=.9999,Dt=.99,At=/[\\\/_+.#"@\[\(\{&]/,Pt=/[\\\/_+.#"@\[\(\{&]/g,Tt=/[\s-]/,it=/[\s-]/g;function Ce(t,l,a,i,o,s,u){if(s===l.length)return o===t.length?Oe:Dt;var m=`${o},${s}`;if(u[m]!==void 0)return u[m];for(var c=i.charAt(s),d=a.indexOf(c,o),f=0,b,I,y,F;d>=0;)b=Ce(t,l,a,i,d+1,s+1,u),b>f&&(d===o?b*=Oe:At.test(t.charAt(d-1))?(b*=Lt,y=t.slice(o,d-1).match(Pt),y&&o>0&&(b*=Math.pow(ge,y.length))):Tt.test(t.charAt(d-1))?(b*=qt,F=t.slice(o,d-1).match(it),F&&o>0&&(b*=Math.pow(ge,F.length))):(b*=Ot,o>0&&(b*=Math.pow(ge,d-o))),t.charAt(d)!==l.charAt(s)&&(b*=zt)),(b<he&&a.charAt(d-1)===i.charAt(s+1)||i.charAt(s+1)===i.charAt(s)&&a.charAt(d-1)!==i.charAt(s))&&(I=Ce(t,l,a,i,d+1,s+2,u),I*he>b&&(b=I*he)),b>f&&(f=b),d=a.indexOf(c,d+1);return u[m]=f,f}function ze(t){return t.toLowerCase().replace(it," ")}function $t(t,l,a){return t=a&&a.length>0?`${t+" "+a.join(" ")}`:t,Ce(t,l,ze(t),ze(l),0,0,{})}var Mt=Symbol.for("react.lazy"),de=yt[" use ".trim().toString()];function _t(t){return typeof t=="object"&&t!==null&&"then"in t}function dt(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===Mt&&"_payload"in t&&_t(t._payload)}function Ht(t){const l=Kt(t),a=r.forwardRef((i,o)=>{let{children:s,...u}=i;dt(s)&&typeof de=="function"&&(s=de(s._payload));const m=r.Children.toArray(s),c=m.find(Bt);if(c){const d=c.props.children,f=m.map(b=>b===c?r.Children.count(d)>1?r.Children.only(null):r.isValidElement(d)?d.props.children:null:b);return e.jsx(l,{...u,ref:o,children:r.isValidElement(d)?r.cloneElement(d,void 0,f):null})}return e.jsx(l,{...u,ref:o,children:s})});return a.displayName=`${t}.Slot`,a}function Kt(t){const l=r.forwardRef((a,i)=>{let{children:o,...s}=a;if(dt(o)&&typeof de=="function"&&(o=de(o._payload)),r.isValidElement(o)){const u=Yt(o),m=Ut(s,o.props);return o.type!==r.Fragment&&(m.ref=i?U(i,u):u),r.cloneElement(o,m)}return r.Children.count(o)>1?r.Children.only(null):null});return l.displayName=`${t}.SlotClone`,l}var Wt=Symbol("radix.slottable");function Bt(t){return r.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===Wt}function Ut(t,l){const a={...l};for(const i in l){const o=t[i],s=l[i];/^on[A-Z]/.test(i)?o&&s?a[i]=(...m)=>{const c=s(...m);return o(...m),c}:o&&(a[i]=o):i==="style"?a[i]={...o,...s}:i==="className"&&(a[i]=[o,s].filter(Boolean).join(" "))}return{...t,...a}}function Yt(t){var i,o;let l=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,a=l&&"isReactWarning"in l&&l.isReactWarning;return a?t.ref:(l=(o=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:o.get,a=l&&"isReactWarning"in l&&l.isReactWarning,a?t.props.ref:t.props.ref||t.ref)}var Zt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],A=Zt.reduce((t,l)=>{const a=Ht(`Primitive.${l}`),i=r.forwardRef((o,s)=>{const{asChild:u,...m}=o,c=u?a:l;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(c,{...m,ref:s})});return i.displayName=`Primitive.${l}`,{...t,[l]:i}},{}),G='[cmdk-group=""]',ye='[cmdk-group-items=""]',Gt='[cmdk-group-heading=""]',ct='[cmdk-item=""]',De=`${ct}:not([aria-disabled="true"])`,je="cmdk-item-select",H="data-value",Jt=(t,l,a)=>$t(t,l,a),ut=r.createContext(void 0),J=()=>r.useContext(ut),mt=r.createContext(void 0),Ie=()=>r.useContext(mt),pt=r.createContext(void 0),xt=r.forwardRef((t,l)=>{let a=K(()=>{var n,x;return{search:"",value:(x=(n=t.value)!=null?n:t.defaultValue)!=null?x:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),i=K(()=>new Set),o=K(()=>new Map),s=K(()=>new Map),u=K(()=>new Set),m=bt(t),{label:c,children:d,value:f,onValueChange:b,filter:I,shouldFilter:y,loop:F,disablePointerSelection:V=!1,vimBindings:z=!0,...P}=t,Y=W(),O=W(),ue=W(),T=r.useRef(null),C=il();M(()=>{if(f!==void 0){let n=f.trim();a.current.value=n,S.emit()}},[f]),M(()=>{C(6,Ee)},[]);let S=r.useMemo(()=>({subscribe:n=>(u.current.add(n),()=>u.current.delete(n)),snapshot:()=>a.current,setState:(n,x,v)=>{var p,h,g,q;if(!Object.is(a.current[n],x)){if(a.current[n]=x,n==="search")be(),pe(),C(1,xe);else if(n==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let k=document.getElementById(ue);k?k.focus():(p=document.getElementById(Y))==null||p.focus()}if(C(7,()=>{var k;a.current.selectedItemId=(k=_())==null?void 0:k.id,S.emit()}),v||C(5,Ee),((h=m.current)==null?void 0:h.value)!==void 0){let k=x??"";(q=(g=m.current).onValueChange)==null||q.call(g,k);return}}S.emit()}},emit:()=>{u.current.forEach(n=>n())}}),[]),me=r.useMemo(()=>({value:(n,x,v)=>{var p;x!==((p=s.current.get(n))==null?void 0:p.value)&&(s.current.set(n,{value:x,keywords:v}),a.current.filtered.items.set(n,Se(x,v)),C(2,()=>{pe(),S.emit()}))},item:(n,x)=>(i.current.add(n),x&&(o.current.has(x)?o.current.get(x).add(n):o.current.set(x,new Set([n]))),C(3,()=>{be(),pe(),a.current.value||xe(),S.emit()}),()=>{s.current.delete(n),i.current.delete(n),a.current.filtered.items.delete(n);let v=_();C(4,()=>{be(),(v==null?void 0:v.getAttribute("id"))===n&&xe(),S.emit()})}),group:n=>(o.current.has(n)||o.current.set(n,new Set),()=>{s.current.delete(n),o.current.delete(n)}),filter:()=>m.current.shouldFilter,label:c||t["aria-label"],getDisablePointerSelection:()=>m.current.disablePointerSelection,listId:Y,inputId:ue,labelId:O,listInnerRef:T}),[]);function Se(n,x){var v,p;let h=(p=(v=m.current)==null?void 0:v.filter)!=null?p:Jt;return n?h(n,a.current.search,x):0}function pe(){if(!a.current.search||m.current.shouldFilter===!1)return;let n=a.current.filtered.items,x=[];a.current.filtered.groups.forEach(p=>{let h=o.current.get(p),g=0;h.forEach(q=>{let k=n.get(q);g=Math.max(k,g)}),x.push([p,g])});let v=T.current;Z().sort((p,h)=>{var g,q;let k=p.getAttribute("id"),Q=h.getAttribute("id");return((g=n.get(Q))!=null?g:0)-((q=n.get(k))!=null?q:0)}).forEach(p=>{let h=p.closest(ye);h?h.appendChild(p.parentElement===h?p:p.closest(`${ye} > *`)):v.appendChild(p.parentElement===v?p:p.closest(`${ye} > *`))}),x.sort((p,h)=>h[1]-p[1]).forEach(p=>{var h;let g=(h=T.current)==null?void 0:h.querySelector(`${G}[${H}="${encodeURIComponent(p[0])}"]`);g==null||g.parentElement.appendChild(g)})}function xe(){let n=Z().find(v=>v.getAttribute("aria-disabled")!=="true"),x=n==null?void 0:n.getAttribute(H);S.setState("value",x||void 0)}function be(){var n,x,v,p;if(!a.current.search||m.current.shouldFilter===!1){a.current.filtered.count=i.current.size;return}a.current.filtered.groups=new Set;let h=0;for(let g of i.current){let q=(x=(n=s.current.get(g))==null?void 0:n.value)!=null?x:"",k=(p=(v=s.current.get(g))==null?void 0:v.keywords)!=null?p:[],Q=Se(q,k);a.current.filtered.items.set(g,Q),Q>0&&h++}for(let[g,q]of o.current)for(let k of q)if(a.current.filtered.items.get(k)>0){a.current.filtered.groups.add(g);break}a.current.filtered.count=h}function Ee(){var n,x,v;let p=_();p&&(((n=p.parentElement)==null?void 0:n.firstChild)===p&&((v=(x=p.closest(G))==null?void 0:x.querySelector(Gt))==null||v.scrollIntoView({block:"nearest"})),p.scrollIntoView({block:"nearest"}))}function _(){var n;return(n=T.current)==null?void 0:n.querySelector(`${ct}[aria-selected="true"]`)}function Z(){var n;return Array.from(((n=T.current)==null?void 0:n.querySelectorAll(De))||[])}function fe(n){let x=Z()[n];x&&S.setState("value",x.getAttribute(H))}function ve(n){var x;let v=_(),p=Z(),h=p.findIndex(q=>q===v),g=p[h+n];(x=m.current)!=null&&x.loop&&(g=h+n<0?p[p.length-1]:h+n===p.length?p[0]:p[h+n]),g&&S.setState("value",g.getAttribute(H))}function Re(n){let x=_(),v=x==null?void 0:x.closest(G),p;for(;v&&!p;)v=n>0?rl(v,G):sl(v,G),p=v==null?void 0:v.querySelector(De);p?S.setState("value",p.getAttribute(H)):ve(n)}let Fe=()=>fe(Z().length-1),qe=n=>{n.preventDefault(),n.metaKey?Fe():n.altKey?Re(1):ve(1)},Le=n=>{n.preventDefault(),n.metaKey?fe(0):n.altKey?Re(-1):ve(-1)};return r.createElement(A.div,{ref:l,tabIndex:-1,...P,"cmdk-root":"",onKeyDown:n=>{var x;(x=P.onKeyDown)==null||x.call(P,n);let v=n.nativeEvent.isComposing||n.keyCode===229;if(!(n.defaultPrevented||v))switch(n.key){case"n":case"j":{z&&n.ctrlKey&&qe(n);break}case"ArrowDown":{qe(n);break}case"p":case"k":{z&&n.ctrlKey&&Le(n);break}case"ArrowUp":{Le(n);break}case"Home":{n.preventDefault(),fe(0);break}case"End":{n.preventDefault(),Fe();break}case"Enter":{n.preventDefault();let p=_();if(p){let h=new Event(je);p.dispatchEvent(h)}}}}},r.createElement("label",{"cmdk-label":"",htmlFor:me.inputId,id:me.labelId,style:cl},c),ce(t,n=>r.createElement(mt.Provider,{value:S},r.createElement(ut.Provider,{value:me},n))))}),Xt=r.forwardRef((t,l)=>{var a,i;let o=W(),s=r.useRef(null),u=r.useContext(pt),m=J(),c=bt(t),d=(i=(a=c.current)==null?void 0:a.forceMount)!=null?i:u==null?void 0:u.forceMount;M(()=>{if(!d)return m.item(o,u==null?void 0:u.id)},[d]);let f=ft(o,s,[t.value,t.children,s],t.keywords),b=Ie(),I=D(C=>C.value&&C.value===f.current),y=D(C=>d||m.filter()===!1?!0:C.search?C.filtered.items.get(o)>0:!0);r.useEffect(()=>{let C=s.current;if(!(!C||t.disabled))return C.addEventListener(je,F),()=>C.removeEventListener(je,F)},[y,t.onSelect,t.disabled]);function F(){var C,S;V(),(S=(C=c.current).onSelect)==null||S.call(C,f.current)}function V(){b.setState("value",f.current,!0)}if(!y)return null;let{disabled:z,value:P,onSelect:Y,forceMount:O,keywords:ue,...T}=t;return r.createElement(A.div,{ref:U(s,l),...T,id:o,"cmdk-item":"",role:"option","aria-disabled":!!z,"aria-selected":!!I,"data-disabled":!!z,"data-selected":!!I,onPointerMove:z||m.getDisablePointerSelection()?void 0:V,onClick:z?void 0:F},t.children)}),Qt=r.forwardRef((t,l)=>{let{heading:a,children:i,forceMount:o,...s}=t,u=W(),m=r.useRef(null),c=r.useRef(null),d=W(),f=J(),b=D(y=>o||f.filter()===!1?!0:y.search?y.filtered.groups.has(u):!0);M(()=>f.group(u),[]),ft(u,m,[t.value,t.heading,c]);let I=r.useMemo(()=>({id:u,forceMount:o}),[o]);return r.createElement(A.div,{ref:U(m,l),...s,"cmdk-group":"",role:"presentation",hidden:b?void 0:!0},a&&r.createElement("div",{ref:c,"cmdk-group-heading":"","aria-hidden":!0,id:d},a),ce(t,y=>r.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":a?d:void 0},r.createElement(pt.Provider,{value:I},y))))}),el=r.forwardRef((t,l)=>{let{alwaysRender:a,...i}=t,o=r.useRef(null),s=D(u=>!u.search);return!a&&!s?null:r.createElement(A.div,{ref:U(o,l),...i,"cmdk-separator":"",role:"separator"})}),tl=r.forwardRef((t,l)=>{let{onValueChange:a,...i}=t,o=t.value!=null,s=Ie(),u=D(d=>d.search),m=D(d=>d.selectedItemId),c=J();return r.useEffect(()=>{t.value!=null&&s.setState("search",t.value)},[t.value]),r.createElement(A.input,{ref:l,...i,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":c.listId,"aria-labelledby":c.labelId,"aria-activedescendant":m,id:c.inputId,type:"text",value:o?t.value:u,onChange:d=>{o||s.setState("search",d.target.value),a==null||a(d.target.value)}})}),ll=r.forwardRef((t,l)=>{let{children:a,label:i="Suggestions",...o}=t,s=r.useRef(null),u=r.useRef(null),m=D(d=>d.selectedItemId),c=J();return r.useEffect(()=>{if(u.current&&s.current){let d=u.current,f=s.current,b,I=new ResizeObserver(()=>{b=requestAnimationFrame(()=>{let y=d.offsetHeight;f.style.setProperty("--cmdk-list-height",y.toFixed(1)+"px")})});return I.observe(d),()=>{cancelAnimationFrame(b),I.unobserve(d)}}},[]),r.createElement(A.div,{ref:U(s,l),...o,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":m,"aria-label":i,id:c.listId},ce(t,d=>r.createElement("div",{ref:U(u,c.listInnerRef),"cmdk-list-sizer":""},d)))}),al=r.forwardRef((t,l)=>{let{open:a,onOpenChange:i,overlayClassName:o,contentClassName:s,container:u,...m}=t;return r.createElement(Ct,{open:a,onOpenChange:i},r.createElement(jt,{container:u},r.createElement(Nt,{"cmdk-overlay":"",className:o}),r.createElement(wt,{"aria-label":t.label,"cmdk-dialog":"",className:s},r.createElement(xt,{ref:l,...m}))))}),nl=r.forwardRef((t,l)=>D(a=>a.filtered.count===0)?r.createElement(A.div,{ref:l,...t,"cmdk-empty":"",role:"presentation"}):null),ol=r.forwardRef((t,l)=>{let{progress:a,children:i,label:o="Loading...",...s}=t;return r.createElement(A.div,{ref:l,...s,"cmdk-loading":"",role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":o},ce(t,u=>r.createElement("div",{"aria-hidden":!0},u)))}),X=Object.assign(xt,{List:ll,Item:Xt,Input:tl,Group:Qt,Separator:el,Dialog:al,Empty:nl,Loading:ol});function rl(t,l){let a=t.nextElementSibling;for(;a;){if(a.matches(l))return a;a=a.nextElementSibling}}function sl(t,l){let a=t.previousElementSibling;for(;a;){if(a.matches(l))return a;a=a.previousElementSibling}}function bt(t){let l=r.useRef(t);return M(()=>{l.current=t}),l}var M=typeof window>"u"?r.useEffect:r.useLayoutEffect;function K(t){let l=r.useRef();return l.current===void 0&&(l.current=t()),l}function D(t){let l=Ie(),a=()=>t(l.snapshot());return r.useSyncExternalStore(l.subscribe,a,a)}function ft(t,l,a,i=[]){let o=r.useRef(),s=J();return M(()=>{var u;let m=(()=>{var d;for(let f of a){if(typeof f=="string")return f.trim();if(typeof f=="object"&&"current"in f)return f.current?(d=f.current.textContent)==null?void 0:d.trim():o.current}})(),c=i.map(d=>d.trim());s.value(t,m,c),(u=l.current)==null||u.setAttribute(H,m),o.current=m}),o}var il=()=>{let[t,l]=r.useState(),a=K(()=>new Map);return M(()=>{a.current.forEach(i=>i()),a.current=new Map},[t]),(i,o)=>{a.current.set(i,o),l({})}};function dl(t){let l=t.type;return typeof l=="function"?l(t.props):"render"in l?l.render(t.props):t}function ce({asChild:t,children:l},a){return t&&r.isValidElement(l)?r.cloneElement(dl(l),{ref:l.ref},a(l.props.children)):a(l)}var cl={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const vt=r.createContext(null);function ht({value:t,children:l}){return e.jsx(vt.Provider,{value:t,children:l})}function Ve(){const t=r.useContext(vt);if(!t)throw new Error("Combobox components must be used within <Combobox>.");return t}ht.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  setValue: (value: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  listId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  disabled: boolean;
  readOnly: boolean;
  displayValue?: (value: string) => string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"setValue",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!0}},{key:"inputValue",value:{name:"string",required:!0}},{key:"setInputValue",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!0}},{key:"listId",value:{name:"string",required:!0}},{key:"open",value:{name:"boolean",required:!0}},{key:"setOpen",value:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}},required:!0}},{key:"disabled",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"displayValue",value:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}},required:!1}}]}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function gt({value:t,defaultValue:l="",onValueChange:a,disabled:i=!1,readOnly:o=!1,displayValue:s,children:u,...m}){const c=t!==void 0,[d,f]=r.useState(l),b=c?t:d,[I,y]=r.useState((s==null?void 0:s(b))??b),[F,V]=r.useState(!1),z=r.useId(),P=O=>{V(O),O||y((s==null?void 0:s(b))??b)},Y=O=>{c||f(O),a==null||a(O),y((s==null?void 0:s(O))??O),V(!1)};return e.jsx(ht,{value:{value:b,setValue:Y,inputValue:I,setInputValue:y,listId:z,open:F,setOpen:P,disabled:i,readOnly:o,displayValue:s},children:e.jsx(It,{open:F,onOpenChange:O=>{i||o||P(O)},children:e.jsx(X,{shouldFilter:!0,...m,children:u})})})}const j=gt;gt.__docgenInfo={description:"",methods:[],displayName:"ComboboxRoot",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},displayValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ul=we(["border-m2-border inline-flex items-center rounded border bg-white transition-shadow","has-[:focus]:border-m2-primary has-[:focus]:ring-m2-primary has-[:focus]:ring has-[:focus]:ring-inset","data-[state=open]:border-m2-primary data-[state=open]:ring-m2-primary data-[state=open]:ring data-[state=open]:ring-inset"],{variants:{invalid:{true:"border-m2-danger text-m2-danger has-[:focus]:border-m2-danger has-[:focus]:ring-m2-danger data-[state=open]:border-m2-danger data-[state=open]:ring-m2-danger"},disabled:{true:"bg-m2-surface cursor-not-allowed opacity-70"},readOnly:{true:"bg-m2-surface-hover"},size:{xs:"h-6 text-xs",sm:"h-8 text-sm",md:"h-10 text-sm",lg:"h-12 text-base"}},defaultVariants:{size:"md"}});function N({className:t,invalid:l=!1,readOnly:a=!1,disabled:i=!1,size:o,placeholder:s,displayValue:u,...m}){const c=Ve(),d=a===!0||c.readOnly,f=i===!0||c.disabled,b=!f&&!d,I=u??c.displayValue,y=(I==null?void 0:I(c.value))??c.value,F=!c.open&&c.value?y:c.inputValue;return e.jsxs(Vt,{"data-testid":"combobox-anchor","data-state":c.open?"open":"closed",className:$(ul({invalid:l===!0,readOnly:d,disabled:f,size:o}),t),children:[e.jsx(X.Input,{role:"combobox","aria-expanded":c.open,"aria-controls":c.listId,"aria-invalid":l||void 0,"aria-readonly":d||void 0,disabled:f,readOnly:d,value:F,onFocus:()=>{b&&(c.setInputValue(y),c.setOpen(!0))},onValueChange:V=>{b&&(c.setInputValue(V),c.setOpen(!0))},placeholder:s,className:"placeholder:text-m2-placeholder w-full bg-transparent px-3 py-2 outline-none disabled:cursor-not-allowed",...m}),e.jsx(kt,{"data-slot":"icon",disabled:f,"aria-disabled":d||void 0,className:"focus-visible:ring-m2-gray-2 shrink-0 rounded px-2 outline-none focus-visible:ring-2",onPointerDown:V=>{b||V.preventDefault()},onKeyDown:V=>{!b&&[" ","Enter","ArrowDown"].includes(V.key)&&V.preventDefault()},onClick:V=>{if(!b){V.preventDefault();return}c.setInputValue(y)},children:e.jsx(Rt,{className:"text-m2-gray-0 size-4"})})]})}N.__docgenInfo={description:"",methods:[],displayName:"ComboboxInput",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},displayValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:""},invalid:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};function w({className:t,children:l,container:a,maxHeight:i=300,sideOffset:o=4,align:s="start",style:u,...m}){const c=Ve(),d=i==="screen"?"var(--radix-popover-content-available-height)":`min(var(--radix-popover-content-available-height), ${i}px)`;return e.jsx(St,{container:a,children:e.jsx(Et,{"data-slot":"combobox-content",align:s,sideOffset:o,className:$("border-m2-surface z-m2-dropdown w-[var(--radix-popover-trigger-width)] rounded-lg border bg-white shadow-lg outline-none","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",t),style:{"--m2-combobox-content-max-height":d,...u},...m,children:e.jsx(Ft,{type:"auto",className:"size-full max-h-[var(--m2-combobox-content-max-height)]",children:e.jsx(X.List,{id:c.listId,"data-slot":"combobox-list",children:l})})})})}w.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{container:{required:!1,tsType:{name:"ComponentProps['container']",raw:"ComponentProps<typeof PopoverPrimitive.Portal>['container']"},description:""},maxHeight:{required:!1,tsType:{name:"union",raw:"number | 'screen'",elements:[{name:"number"},{name:"literal",value:"'screen'"}]},description:"",defaultValue:{value:"300",computed:!1}},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1},align:{defaultValue:{value:"'start'",computed:!1},required:!1}}};const ml=we(["cursor-pointer rounded outline-none select-none","data-[selected=true]:bg-m2-primary-dark/10 data-[selected=true]:text-m2-primary-dark","data-[checked=true]:bg-m2-primary-dark data-[checked=true]:text-white","data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60"],{variants:{size:{xs:"px-2 py-1 text-xs",sm:"px-2 py-1.5 text-sm",md:"px-3 py-2 text-sm",lg:"px-3 py-2.5 text-base"}},defaultVariants:{size:"md"}});function ke({className:t,children:l,size:a,value:i,keywords:o,disabled:s,...u}){const m=Ve(),c=String(i??""),d=m.value===c,f=r.Children.toArray(l).filter(b=>typeof b=="string");return e.jsx(X.Item,{role:"option","aria-selected":d,"data-checked":d||void 0,value:c,keywords:o??f,disabled:s,className:$(ml({size:a}),t),onSelect:()=>{s||m.setValue(c)},...u,children:l})}ke.__docgenInfo={description:"",methods:[],displayName:"ComboboxItem"};const ee=we("text-m2-gray-2 rounded outline-none select-none empty:hidden",{variants:{size:{xs:"px-2 py-1 text-xs",sm:"px-2 py-1.5 text-sm",md:"px-3 py-2 text-sm",lg:"px-3 py-2.5 text-base"}},defaultVariants:{size:"md"}});function B({className:t,status:l="idle",length:a=0,size:i,loadingContent:o,errorContent:s,emptyContent:u,noResultsContent:m,...c}){return l==="pending"?e.jsx("div",{"data-slot":"combobox-fallback-item",role:"status","aria-live":"polite",className:$(ee({size:i}),t),...c,children:o??e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"border-m2-gray-3 border-t-m2-gray-1 h-3 w-3 animate-spin rounded-full border-2"}),e.jsx("span",{children:"로딩 중..."})]})}):l==="error"?e.jsx("div",{"data-slot":"combobox-fallback-item",role:"status","aria-live":"polite",className:$(ee({size:i}),t),...c,children:s??e.jsx("span",{children:"데이터를 불러오는 중 에러가 발생했습니다."})}):a===0?e.jsx("div",{"data-slot":"combobox-fallback-item",role:"status","aria-live":"polite",className:$(ee({size:i}),t),...c,children:u??e.jsx("span",{children:"선택할 수 있는 데이터가 없습니다."})}):e.jsx(X.Empty,{"data-slot":"combobox-fallback-item",className:$(ee({size:i}),t),...c,children:m??e.jsx("span",{children:"검색 결과가 없습니다."})})}B.__docgenInfo={description:"",methods:[],displayName:"ComboboxFallbackItem",props:{status:{required:!1,tsType:{name:"union",raw:"'error' | 'idle' | 'pending' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'idle'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'idle'",computed:!1}},length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactNode"},description:""},errorContent:{required:!1,tsType:{name:"ReactNode"},description:""},emptyContent:{required:!1,tsType:{name:"ReactNode"},description:""},noResultsContent:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Ne=[{value:"apple",label:"사과"},{value:"banana",label:"바나나"},{value:"cherry",label:"체리"},{value:"grape",label:"포도"},{value:"kiwi",label:"키위"},{value:"lemon",label:"레몬"},{value:"mango",label:"망고"},{value:"orange",label:"오렌지"},{value:"peach",label:"복숭아"},{value:"strawberry",label:"딸기"}],Ae=Array.from({length:100},(t,l)=>({value:`option${l+1}`,label:`옵션 ${l+1}`})),L=t=>{var l;return((l=Ne.find(a=>a.value===t))==null?void 0:l.label)??""};function R({size:t="md"}){return e.jsxs(e.Fragment,{children:[e.jsx(B,{length:Ne.length,size:t}),Ne.map(l=>e.jsx(ke,{value:l.value,size:t,children:l.label},l.value))]})}const Dl={title:"M2/Combobox",component:j,parameters:{layout:"centered",controls:{include:["disabled","placeholder","invalid","readOnly","size"]},docs:{description:{component:`
### 검색 가능한 선택 컴포넌트

Combobox 컴포넌트는 텍스트 입력을 통해 옵션을 검색하고 선택할 수 있는 드롭다운을 제공합니다.
cmdk와 Radix Popover를 기반으로 M2 스타일을 적용했으며, 접근성과 키보드 네비게이션을 지원합니다.

## 주요 기능

- **검색 필터링**: 텍스트 입력을 통해 옵션을 실시간으로 필터링
- **복합 컴포넌트 구조**: \`Combobox\`, \`ComboboxInput\`, \`ComboboxContent\`, \`ComboboxItem\`으로 구성
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 지원
- **스크롤 지원**: 많은 옵션이 있을 때 자동 스크롤 영역 제공
- **상태 관리**: \`disabled\`, \`invalid\`, \`readOnly\` 상태 지원
- **빈 결과 표시**: 검색 결과가 없을 때 자동으로 안내 메시지 표시
- **제어 가능**: \`value/onValueChange\`를 통한 controlled 컴포넌트 지원
- **비제어 가능**: \`defaultValue\`를 통한 uncontrolled 컴포넌트 지원

## 사용 예시

\`\`\`tsx
const [selected, setSelected] = useState('');

<Combobox value={selected} onValueChange={setSelected}>
  <ComboboxInput
    placeholder="검색하세요"
    displayValue={fruitDisplayValue}
  />
  <ComboboxContent>
    <ComboboxFallbackItem length={items.length} />
    <ComboboxItem value="option1">옵션 1</ComboboxItem>
    <ComboboxItem value="option2">옵션 2</ComboboxItem>
  </ComboboxContent>
</Combobox>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Combobox 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"입력 필드에 표시할 플레이스홀더 텍스트 (ComboboxInput에 전달)",table:{type:{summary:"string"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부 (빨간색 테두리 표시, ComboboxInput에 전달)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"읽기 전용 여부 (회색 배경 표시, ComboboxInput에 전달)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["xs","sm","md","lg"],description:"ComboboxInput의 크기 (`xs`=24px, `sm`=32px, `md`=40px 기본, `lg`=48px)",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}}},args:{disabled:!1,placeholder:"과일을 검색하세요",invalid:!1,readOnly:!1,size:"md"}},te={render:t=>e.jsx("div",{className:"w-80",children:e.jsxs(j,{disabled:t.disabled,children:[e.jsx(N,{className:"w-full",placeholder:t.placeholder,invalid:t.invalid,readOnly:t.readOnly,size:t.size??void 0,displayValue:L}),e.jsx(w,{children:e.jsx(R,{size:t.size??void 0})})]})}),parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Combobox 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.
        `}}}},le={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 Combobox"}),e.jsxs(j,{children:[e.jsx(N,{className:"w-full",placeholder:"과일을 검색하세요",displayValue:L}),e.jsx(w,{children:e.jsx(R,{})})]})]})})},ae={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Label과 함께 사용"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{htmlFor:"combobox-basic",children:"과일 선택"}),e.jsxs(j,{children:[e.jsx(N,{id:"combobox-basic",className:"w-full",placeholder:"과일을 검색하세요",displayValue:L}),e.jsx(w,{children:e.jsx(R,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{htmlFor:"combobox-required",required:!0,children:"필수 선택"}),e.jsxs(j,{children:[e.jsx(N,{id:"combobox-required",className:"w-full",placeholder:"과일을 검색하세요",displayValue:L}),e.jsx(w,{children:e.jsx(R,{})})]})]})]})]})})},ne={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 크기"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{htmlFor:"combobox-xs",children:"아주 작은 크기 (xs)"}),e.jsxs(j,{children:[e.jsx(N,{id:"combobox-xs",className:"w-full",placeholder:"h-6 text-xs",size:"xs",displayValue:L}),e.jsx(w,{children:e.jsx(R,{size:"xs"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{htmlFor:"combobox-sm",children:"작은 크기 (sm)"}),e.jsxs(j,{children:[e.jsx(N,{id:"combobox-sm",className:"w-full",placeholder:"h-8 text-sm",size:"sm",displayValue:L}),e.jsx(w,{children:e.jsx(R,{size:"sm"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{htmlFor:"combobox-md",children:"중간 크기 (md)"}),e.jsxs(j,{children:[e.jsx(N,{id:"combobox-md",className:"w-full",placeholder:"h-10 text-sm",size:"md",displayValue:L}),e.jsx(w,{children:e.jsx(R,{size:"md"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{htmlFor:"combobox-lg",children:"큰 크기 (lg)"}),e.jsxs(j,{children:[e.jsx(N,{id:"combobox-lg",className:"w-full",placeholder:"h-12 text-base",size:"lg",displayValue:L}),e.jsx(w,{children:e.jsx(R,{size:"lg"})})]})]})]})]})})},oe={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 상태"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{children:"일반"}),e.jsxs(j,{children:[e.jsx(N,{className:"w-full",placeholder:"과일을 검색하세요",displayValue:L}),e.jsx(w,{children:e.jsx(R,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{children:"비활성화"}),e.jsxs(j,{disabled:!0,children:[e.jsx(N,{className:"w-full",placeholder:"과일을 검색하세요",displayValue:L}),e.jsx(w,{children:e.jsx(R,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{children:"유효하지 않은 입력"}),e.jsxs(j,{children:[e.jsx(N,{className:"w-full",placeholder:"과일을 검색하세요",invalid:!0,displayValue:L}),e.jsx(w,{children:e.jsx(R,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(E,{children:"읽기 전용"}),e.jsxs(j,{readOnly:!0,children:[e.jsx(N,{className:"w-full",placeholder:"과일을 검색하세요",displayValue:L}),e.jsx(w,{children:e.jsx(R,{})})]})]})]})]})})},re={render:()=>{const[t,l]=r.useState("apple");return e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"제어 컴포넌트"}),e.jsxs(j,{value:t,onValueChange:l,children:[e.jsx(N,{className:"w-full",placeholder:"과일을 검색하세요",displayValue:L}),e.jsx(w,{children:e.jsx(R,{})})]}),e.jsxs("p",{className:"text-m2-gray-2 text-sm",children:["선택된 값: ",t]})]})})}},se={parameters:{docs:{description:{story:`
ComboboxFallbackItem은 다양한 상태를 표시합니다.

**상태별 표시**:
- **pending**: 로딩 스피너 + "로딩 중..." 메시지
- **error**: 에러 메시지
- **length === 0**: 데이터 없음 메시지
- **검색 결과 없음**: Command.Empty를 통해 필터 결과가 없을 때 자동 표시

**콘텐츠 커스터마이징**: \`loadingContent\`, \`errorContent\`, \`emptyContent\`, \`noResultsContent\`
        `}}},render:()=>e.jsxs("div",{className:"flex w-full flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"ComboboxFallbackItem 상태"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(E,{children:"로딩 중 (pending)"}),e.jsxs(j,{children:[e.jsx(N,{className:"w-full",placeholder:"데이터 로딩 중..."}),e.jsx(w,{children:e.jsx(B,{status:"pending"})})]}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:"데이터를 불러오는 중일 때 스피너와 함께 메시지가 표시됩니다."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(E,{children:"에러 (error)"}),e.jsxs(j,{children:[e.jsx(N,{className:"w-full",placeholder:"에러 발생"}),e.jsx(w,{children:e.jsx(B,{status:"error"})})]}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:"데이터를 불러오는 중 에러가 발생했을 때 메시지가 표시됩니다."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(E,{children:"빈 데이터 (idle/success)"}),e.jsxs(j,{children:[e.jsx(N,{className:"w-full",placeholder:"데이터 없음"}),e.jsx(w,{children:e.jsx(B,{length:0})})]}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:"선택할 수 있는 데이터가 없을 때 기본 메시지가 표시됩니다."})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"검색 결과 없음"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(E,{children:"존재하지 않는 키워드로 검색해보세요"}),e.jsxs(j,{children:[e.jsx(N,{className:"w-full",placeholder:"과일을 검색하세요"}),e.jsx(w,{children:e.jsx(R,{})})]}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:'검색 결과가 없을 때 "검색 결과가 없습니다." 메시지가 표시됩니다.'})]})]})]})},ie={parameters:{docs:{description:{story:`
많은 옵션이 있을 때 검색 필터링이 특히 유용합니다.
\`maxHeight\`를 조절하여 드롭다운 높이를 제어할 수 있습니다.
        `}}},render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"많은 옵션 (100개)"}),e.jsxs(j,{children:[e.jsx(N,{className:"w-full",placeholder:"옵션을 검색하세요"}),e.jsxs(w,{maxHeight:"screen",children:[e.jsx(B,{length:Ae.length}),Ae.map(t=>e.jsx(ke,{value:t.value,children:t.label},t.value))]})]}),e.jsxs("p",{className:"text-m2-gray-2 text-xs",children:[e.jsx("strong",{children:'maxHeight="screen"'}),"으로 설정되어 화면에서 보일 수 있는 만큼 최대한 늘어납니다. 텍스트를 입력하면 필터링됩니다."]})]})})};var Pe,Te,$e;te.parameters={...te.parameters,docs:{...(Pe=te.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Combobox disabled={args.disabled}>
        <ComboboxInput className="w-full" placeholder={args.placeholder} invalid={args.invalid} readOnly={args.readOnly} size={args.size ?? undefined} displayValue={fruitDisplayValue} />
        <ComboboxContent>
          <FruitItems size={args.size ?? undefined} />
        </ComboboxContent>
      </Combobox>
    </div>,
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Combobox 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.
        \`
      }
    }
  }
}`,...($e=(Te=te.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Me,_e,He;le.parameters={...le.parameters,docs:{...(Me=le.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 Combobox</h3>
        <Combobox>
          <ComboboxInput className="w-full" placeholder="과일을 검색하세요" displayValue={fruitDisplayValue} />
          <ComboboxContent>
            <FruitItems />
          </ComboboxContent>
        </Combobox>
      </div>
    </div>
}`,...(He=(_e=le.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Ke,We,Be;ae.parameters={...ae.parameters,docs:{...(Ke=ae.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Label과 함께 사용</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="combobox-basic">과일 선택</Label>
            <Combobox>
              <ComboboxInput id="combobox-basic" className="w-full" placeholder="과일을 검색하세요" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems />
              </ComboboxContent>
            </Combobox>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="combobox-required" required>
              필수 선택
            </Label>
            <Combobox>
              <ComboboxInput id="combobox-required" className="w-full" placeholder="과일을 검색하세요" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems />
              </ComboboxContent>
            </Combobox>
          </div>
        </div>
      </div>
    </div>
}`,...(Be=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:Be.source}}};var Ue,Ye,Ze;ne.parameters={...ne.parameters,docs:{...(Ue=ne.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 크기</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="combobox-xs">아주 작은 크기 (xs)</Label>
            <Combobox>
              <ComboboxInput id="combobox-xs" className="w-full" placeholder="h-6 text-xs" size="xs" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems size="xs" />
              </ComboboxContent>
            </Combobox>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="combobox-sm">작은 크기 (sm)</Label>
            <Combobox>
              <ComboboxInput id="combobox-sm" className="w-full" placeholder="h-8 text-sm" size="sm" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems size="sm" />
              </ComboboxContent>
            </Combobox>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="combobox-md">중간 크기 (md)</Label>
            <Combobox>
              <ComboboxInput id="combobox-md" className="w-full" placeholder="h-10 text-sm" size="md" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems size="md" />
              </ComboboxContent>
            </Combobox>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="combobox-lg">큰 크기 (lg)</Label>
            <Combobox>
              <ComboboxInput id="combobox-lg" className="w-full" placeholder="h-12 text-base" size="lg" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems size="lg" />
              </ComboboxContent>
            </Combobox>
          </div>
        </div>
      </div>
    </div>
}`,...(Ze=(Ye=ne.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Ge,Je,Xe;oe.parameters={...oe.parameters,docs:{...(Ge=oe.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 상태</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label>일반</Label>
            <Combobox>
              <ComboboxInput className="w-full" placeholder="과일을 검색하세요" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems />
              </ComboboxContent>
            </Combobox>
          </div>
          <div className="flex flex-col gap-1">
            <Label>비활성화</Label>
            <Combobox disabled>
              <ComboboxInput className="w-full" placeholder="과일을 검색하세요" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems />
              </ComboboxContent>
            </Combobox>
          </div>
          <div className="flex flex-col gap-1">
            <Label>유효하지 않은 입력</Label>
            <Combobox>
              <ComboboxInput className="w-full" placeholder="과일을 검색하세요" invalid displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems />
              </ComboboxContent>
            </Combobox>
          </div>
          <div className="flex flex-col gap-1">
            <Label>읽기 전용</Label>
            <Combobox readOnly>
              <ComboboxInput className="w-full" placeholder="과일을 검색하세요" displayValue={fruitDisplayValue} />
              <ComboboxContent>
                <FruitItems />
              </ComboboxContent>
            </Combobox>
          </div>
        </div>
      </div>
    </div>
}`,...(Xe=(Je=oe.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Qe,et,tt;re.parameters={...re.parameters,docs:{...(Qe=re.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('apple');
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">제어 컴포넌트</h3>
          <Combobox value={value} onValueChange={setValue}>
            <ComboboxInput className="w-full" placeholder="과일을 검색하세요" displayValue={fruitDisplayValue} />
            <ComboboxContent>
              <FruitItems />
            </ComboboxContent>
          </Combobox>
          <p className="text-m2-gray-2 text-sm">선택된 값: {value}</p>
        </div>
      </div>;
  }
}`,...(tt=(et=re.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var lt,at,nt;se.parameters={...se.parameters,docs:{...(lt=se.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
ComboboxFallbackItem은 다양한 상태를 표시합니다.

**상태별 표시**:
- **pending**: 로딩 스피너 + "로딩 중..." 메시지
- **error**: 에러 메시지
- **length === 0**: 데이터 없음 메시지
- **검색 결과 없음**: Command.Empty를 통해 필터 결과가 없을 때 자동 표시

**콘텐츠 커스터마이징**: \\\`loadingContent\\\`, \\\`errorContent\\\`, \\\`emptyContent\\\`, \\\`noResultsContent\\\`
        \`
      }
    }
  },
  render: () => <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">ComboboxFallbackItem 상태</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Label>로딩 중 (pending)</Label>
            <Combobox>
              <ComboboxInput className="w-full" placeholder="데이터 로딩 중..." />
              <ComboboxContent>
                <ComboboxFallbackItem status="pending" />
              </ComboboxContent>
            </Combobox>
            <p className="text-m2-gray-2 text-xs">
              데이터를 불러오는 중일 때 스피너와 함께 메시지가 표시됩니다.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Label>에러 (error)</Label>
            <Combobox>
              <ComboboxInput className="w-full" placeholder="에러 발생" />
              <ComboboxContent>
                <ComboboxFallbackItem status="error" />
              </ComboboxContent>
            </Combobox>
            <p className="text-m2-gray-2 text-xs">
              데이터를 불러오는 중 에러가 발생했을 때 메시지가 표시됩니다.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Label>빈 데이터 (idle/success)</Label>
            <Combobox>
              <ComboboxInput className="w-full" placeholder="데이터 없음" />
              <ComboboxContent>
                <ComboboxFallbackItem length={0} />
              </ComboboxContent>
            </Combobox>
            <p className="text-m2-gray-2 text-xs">
              선택할 수 있는 데이터가 없을 때 기본 메시지가 표시됩니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">검색 결과 없음</h3>
        <div className="flex flex-col gap-2">
          <Label>존재하지 않는 키워드로 검색해보세요</Label>
          <Combobox>
            <ComboboxInput className="w-full" placeholder="과일을 검색하세요" />
            <ComboboxContent>
              <FruitItems />
            </ComboboxContent>
          </Combobox>
          <p className="text-m2-gray-2 text-xs">
            검색 결과가 없을 때 "검색 결과가 없습니다." 메시지가 표시됩니다.
          </p>
        </div>
      </div>
    </div>
}`,...(nt=(at=se.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,rt,st;ie.parameters={...ie.parameters,docs:{...(ot=ie.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
많은 옵션이 있을 때 검색 필터링이 특히 유용합니다.
\\\`maxHeight\\\`를 조절하여 드롭다운 높이를 제어할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">많은 옵션 (100개)</h3>
        <Combobox>
          <ComboboxInput className="w-full" placeholder="옵션을 검색하세요" />
          <ComboboxContent maxHeight="screen">
            <ComboboxFallbackItem length={manyOptions.length} />
            {manyOptions.map(option => <ComboboxItem key={option.value} value={option.value}>
                {option.label}
              </ComboboxItem>)}
          </ComboboxContent>
        </Combobox>
        <p className="text-m2-gray-2 text-xs">
          <strong>maxHeight="screen"</strong>으로 설정되어 화면에서 보일 수 있는 만큼 최대한
          늘어납니다. 텍스트를 입력하면 필터링됩니다.
        </p>
      </div>
    </div>
}`,...(st=(rt=ie.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};const Al=["Playground","Basic","WithLabel","Sizes","States","Controlled","EmptyStates","ManyOptions"];export{le as Basic,re as Controlled,se as EmptyStates,ie as ManyOptions,te as Playground,ne as Sizes,oe as States,ae as WithLabel,Al as __namedExportsOrder,Dl as default};
