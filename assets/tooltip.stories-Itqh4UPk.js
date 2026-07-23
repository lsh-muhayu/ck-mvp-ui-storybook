import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as C}from"./button-CkQv11My.js";import{r as a}from"./index-OJ7QbjDu.js";import{u as ie,P as ye,b as w,e as Ce}from"./index-C27WGPQh.js";import{c as je}from"./index-jm-SPu3n.js";import{P as be,D as Ne}from"./index-DAVdU-vC.js";import{u as we}from"./index-D15pND6U.js";import{c as ce,R as Pe,A as Re,a as De,C as Oe}from"./index-BtVicQOV.js";import{P as de}from"./index-CI4jWBLT.js";import{u as Ee}from"./index-BilTj9-P.js";import{R as _e}from"./index-Bt6hjcc2.js";import{c as Be}from"./index-C2vczdB5.js";import{c as Ie}from"./utils-CDN07tui.js";import{C as Le}from"./circle-check-big-Bhchwo_Q.js";import{C as ke}from"./circle-alert-CxKxvNIm.js";import{C as Ae}from"./circle-x-4mJeKR0t.js";import{I as X}from"./info-CBqhzTkO.js";import{S as $}from"./star-CVmaTZu_.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-Dc1_MvIw.js";import"./index-b9QAQN5m.js";var[S]=je("Tooltip",[ce]),M=ce(),pe="TooltipProvider",Se=700,H="tooltip.open",[Me,G]=S(pe),me=t=>{const{__scopeTooltip:n,delayDuration:o=Se,skipDelayDuration:r=300,disableHoverableContent:s=!1,children:i}=t,c=a.useRef(!0),u=a.useRef(!1),l=a.useRef(0);return a.useEffect(()=>{const m=l.current;return()=>window.clearTimeout(m)},[]),e.jsx(Me,{scope:n,isOpenDelayedRef:c,delayDuration:o,onOpen:a.useCallback(()=>{window.clearTimeout(l.current),c.current=!1},[]),onClose:a.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>c.current=!0,r)},[r]),isPointerInTransitRef:u,onPointerInTransitChange:a.useCallback(m=>{u.current=m},[]),disableHoverableContent:s,children:i})};me.displayName=pe;var E="Tooltip",[He,_]=S(E),xe=t=>{const{__scopeTooltip:n,children:o,open:r,defaultOpen:s,onOpenChange:i,disableHoverableContent:c,delayDuration:u}=t,l=G(E,t.__scopeTooltip),m=M(n),[d,x]=a.useState(null),f=we(),p=a.useRef(0),g=c??l.disableHoverableContent,j=u??l.delayDuration,y=a.useRef(!1),[N,b]=Ee({prop:r,defaultProp:s??!1,onChange:q=>{q?(l.onOpen(),document.dispatchEvent(new CustomEvent(H))):l.onClose(),i==null||i(q)},caller:E}),R=a.useMemo(()=>N?y.current?"delayed-open":"instant-open":"closed",[N]),D=a.useCallback(()=>{window.clearTimeout(p.current),p.current=0,y.current=!1,b(!0)},[b]),O=a.useCallback(()=>{window.clearTimeout(p.current),p.current=0,b(!1)},[b]),F=a.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{y.current=!0,b(!0),p.current=0},j)},[j,b]);return a.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),e.jsx(Pe,{...m,children:e.jsx(He,{scope:n,contentId:f,open:N,stateAttribute:R,trigger:d,onTriggerChange:x,onTriggerEnter:a.useCallback(()=>{l.isOpenDelayedRef.current?F():D()},[l.isOpenDelayedRef,F,D]),onTriggerLeave:a.useCallback(()=>{g?O():(window.clearTimeout(p.current),p.current=0)},[O,g]),onOpen:D,onClose:O,disableHoverableContent:g,children:o})})};xe.displayName=E;var z="TooltipTrigger",ue=a.forwardRef((t,n)=>{const{__scopeTooltip:o,...r}=t,s=_(z,o),i=G(z,o),c=M(o),u=a.useRef(null),l=ie(n,u,s.onTriggerChange),m=a.useRef(!1),d=a.useRef(!1),x=a.useCallback(()=>m.current=!1,[]);return a.useEffect(()=>()=>document.removeEventListener("pointerup",x),[x]),e.jsx(Re,{asChild:!0,...c,children:e.jsx(ye.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...r,ref:l,onPointerMove:w(t.onPointerMove,f=>{f.pointerType!=="touch"&&!d.current&&!i.isPointerInTransitRef.current&&(s.onTriggerEnter(),d.current=!0)}),onPointerLeave:w(t.onPointerLeave,()=>{s.onTriggerLeave(),d.current=!1}),onPointerDown:w(t.onPointerDown,()=>{s.open&&s.onClose(),m.current=!0,document.addEventListener("pointerup",x,{once:!0})}),onFocus:w(t.onFocus,()=>{m.current||s.onOpen()}),onBlur:w(t.onBlur,s.onClose),onClick:w(t.onClick,s.onClose)})})});ue.displayName=z;var V="TooltipPortal",[ze,Ge]=S(V,{forceMount:void 0}),fe=t=>{const{__scopeTooltip:n,forceMount:o,children:r,container:s}=t,i=_(V,n);return e.jsx(ze,{scope:n,forceMount:o,children:e.jsx(de,{present:o||i.open,children:e.jsx(be,{asChild:!0,container:s,children:r})})})};fe.displayName=V;var P="TooltipContent",he=a.forwardRef((t,n)=>{const o=Ge(P,t.__scopeTooltip),{forceMount:r=o.forceMount,side:s="top",...i}=t,c=_(P,t.__scopeTooltip);return e.jsx(de,{present:r||c.open,children:c.disableHoverableContent?e.jsx(ge,{side:s,...i,ref:n}):e.jsx(Ve,{side:s,...i,ref:n})})}),Ve=a.forwardRef((t,n)=>{const o=_(P,t.__scopeTooltip),r=G(P,t.__scopeTooltip),s=a.useRef(null),i=ie(n,s),[c,u]=a.useState(null),{trigger:l,onClose:m}=o,d=s.current,{onPointerInTransitChange:x}=r,f=a.useCallback(()=>{u(null),x(!1)},[x]),p=a.useCallback((g,j)=>{const y=g.currentTarget,N={x:g.clientX,y:g.clientY},b=$e(N,y.getBoundingClientRect()),R=Ue(N,b),D=We(j.getBoundingClientRect()),O=Ke([...R,...D]);u(O),x(!0)},[x]);return a.useEffect(()=>()=>f(),[f]),a.useEffect(()=>{if(l&&d){const g=y=>p(y,d),j=y=>p(y,l);return l.addEventListener("pointerleave",g),d.addEventListener("pointerleave",j),()=>{l.removeEventListener("pointerleave",g),d.removeEventListener("pointerleave",j)}}},[l,d,p,f]),a.useEffect(()=>{if(c){const g=j=>{const y=j.target,N={x:j.clientX,y:j.clientY},b=(l==null?void 0:l.contains(y))||(d==null?void 0:d.contains(y)),R=!Ye(N,c);b?f():R&&(f(),m())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[l,d,c,m,f]),e.jsx(ge,{...t,ref:i})}),[Fe,qe]=S(E,{isInside:!1}),Xe=Ce("TooltipContent"),ge=a.forwardRef((t,n)=>{const{__scopeTooltip:o,children:r,"aria-label":s,onEscapeKeyDown:i,onPointerDownOutside:c,...u}=t,l=_(P,o),m=M(o),{onClose:d}=l;return a.useEffect(()=>(document.addEventListener(H,d),()=>document.removeEventListener(H,d)),[d]),a.useEffect(()=>{if(l.trigger){const x=f=>{const p=f.target;p!=null&&p.contains(l.trigger)&&d()};return window.addEventListener("scroll",x,{capture:!0}),()=>window.removeEventListener("scroll",x,{capture:!0})}},[l.trigger,d]),e.jsx(Ne,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:x=>x.preventDefault(),onDismiss:d,children:e.jsxs(Oe,{"data-state":l.stateAttribute,...m,...u,ref:n,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[e.jsx(Xe,{children:r}),e.jsx(Fe,{scope:o,isInside:!0,children:e.jsx(_e,{id:l.contentId,role:"tooltip",children:s||r})})]})})});he.displayName=P;var Te="TooltipArrow",ve=a.forwardRef((t,n)=>{const{__scopeTooltip:o,...r}=t,s=M(o);return qe(Te,o).isInside?null:e.jsx(De,{...s,...r,ref:n})});ve.displayName=Te;function $e(t,n){const o=Math.abs(n.top-t.y),r=Math.abs(n.bottom-t.y),s=Math.abs(n.right-t.x),i=Math.abs(n.left-t.x);switch(Math.min(o,r,s,i)){case i:return"left";case s:return"right";case o:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Ue(t,n,o=5){const r=[];switch(n){case"top":r.push({x:t.x-o,y:t.y+o},{x:t.x+o,y:t.y+o});break;case"bottom":r.push({x:t.x-o,y:t.y-o},{x:t.x+o,y:t.y-o});break;case"left":r.push({x:t.x+o,y:t.y-o},{x:t.x+o,y:t.y+o});break;case"right":r.push({x:t.x-o,y:t.y-o},{x:t.x-o,y:t.y+o});break}return r}function We(t){const{top:n,right:o,bottom:r,left:s}=t;return[{x:s,y:n},{x:o,y:n},{x:o,y:r},{x:s,y:r}]}function Ye(t,n){const{x:o,y:r}=t;let s=!1;for(let i=0,c=n.length-1;i<n.length;c=i++){const u=n[i],l=n[c],m=u.x,d=u.y,x=l.x,f=l.y;d>r!=f>r&&o<(x-m)*(r-d)/(f-d)+m&&(s=!s)}return s}function Ke(t){const n=t.slice();return n.sort((o,r)=>o.x<r.x?-1:o.x>r.x?1:o.y<r.y?-1:o.y>r.y?1:0),Je(n)}function Je(t){if(t.length<=1)return t.slice();const n=[];for(let r=0;r<t.length;r++){const s=t[r];for(;n.length>=2;){const i=n[n.length-1],c=n[n.length-2];if((i.x-c.x)*(s.y-c.y)>=(i.y-c.y)*(s.x-c.x))n.pop();else break}n.push(s)}n.pop();const o=[];for(let r=t.length-1;r>=0;r--){const s=t[r];for(;o.length>=2;){const i=o[o.length-1],c=o[o.length-2];if((i.x-c.x)*(s.y-c.y)>=(i.y-c.y)*(s.x-c.x))o.pop();else break}o.push(s)}return o.pop(),n.length===1&&o.length===1&&n[0].x===o[0].x&&n[0].y===o[0].y?n:n.concat(o)}var Qe=me,Ze=xe,et=ue,tt=fe,ot=he,nt=ve;function h({delayDuration:t=0,skipDelayDuration:n,disableHoverableContent:o,children:r,...s}){return e.jsx(Qe,{delayDuration:t,skipDelayDuration:n,disableHoverableContent:o,children:e.jsx(Ze,{"data-slot":"tooltip",...s,children:r})})}function T(t){return e.jsx(et,{"data-slot":"tooltip-trigger",...t})}h.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{delayDuration:{defaultValue:{value:"0",computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};const rt=Be(["bg-m2-gray-0 z-m2-tooltip max-w-106 overflow-hidden rounded-sm px-2 py-0.5 typo-body-small text-white","whitespace-pre-wrap shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] animate-in fade-in-0","data-[state=closed]:animate-out data-[state=closed]:fade-out-0"]);function v({className:t,sideOffset:n=4,children:o,...r}){return e.jsx(tt,{children:e.jsxs(ot,{"data-slot":"tooltip-content",sideOffset:n,className:Ie(rt(),t),...r,children:[o,e.jsx(nt,{className:"fill-m2-gray-0 z-m2-tooltip size-1.5 w-3.5 rounded-xs"})]})})}v.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const Et={title:"M2/Tooltip",component:h,parameters:{layout:"centered",docs:{description:{component:`
### 추가 정보를 제공하는 툴팁 컴포넌트

Tooltip 컴포넌트는 사용자가 요소에 마우스를 올리거나 키보드 포커스할 때 추가 정보를 표시하는 데 사용됩니다.
M2 스타일을 Radix Tooltip 기반으로 구현했으며, trigger/content 복합 컴포넌트 구조를 유지합니다.

## 주요 기능

- **다양한 위치**: \`top\`, \`bottom\`, \`left\`, \`right\` 네 가지 위치 지원
- **자동 위치 조정**: 화면 밖으로 나가지 않도록 Radix collision 로직으로 위치 조정
- **애니메이션**: 부드러운 페이드 인/아웃 애니메이션
- **지연 시간 설정**: \`delayDuration\`으로 표시 지연 시간 조정 가능
- **접근성 지원**: 키보드 포커스 시에도 툴팁 표시
- **풍부한 콘텐츠**: 텍스트, 아이콘, 여러 줄 설명을 TooltipContent 내부에 구성 가능

## 사용 예시

\`\`\`tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button>호버하세요</Button>
  </TooltipTrigger>
  <TooltipContent>
    이것은 툴팁 메시지입니다
  </TooltipContent>
</Tooltip>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"툴팁의 열림 상태를 제어합니다. controlled 방식에서 사용합니다.",table:{type:{summary:"boolean"},category:"상태"}},defaultOpen:{control:"boolean",description:"툴팁의 초기 열림 상태입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},onOpenChange:{action:"openChange",description:"툴팁 열림 상태가 바뀔 때 호출되는 콜백입니다.",table:{type:{summary:"(open: boolean) => void"},category:"이벤트"}},delayDuration:{control:"number",description:"툴팁이 표시되기까지의 지연 시간입니다. 밀리초 단위로 지정합니다.",table:{type:{summary:"number"},defaultValue:{summary:"0"},category:"동작"}},skipDelayDuration:{control:"number",description:"연속된 툴팁 표시에서 지연 시간을 건너뛰는 시간입니다.",table:{type:{summary:"number"},category:"동작"}},disableHoverableContent:{control:"boolean",description:"content 위에 마우스를 올렸을 때 툴팁을 유지하지 않을지 여부입니다.",table:{type:{summary:"boolean"},category:"동작"}}},args:{defaultOpen:!1,delayDuration:0}},B={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen, delayDuration 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
- **DelayDuration**: 마우스를 올린 뒤 툴팁이 표시되기까지의 지연 시간을 설정합니다.
        `}}},render:t=>e.jsxs(h,{...t,children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:"호버하세요"})}),e.jsx(v,{children:"이것은 툴팁 메시지입니다"})]})},I={parameters:{docs:{description:{story:`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col items-center justify-center gap-12 p-20",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-center text-sm font-semibold",children:"Top"}),e.jsxs(h,{defaultOpen:!0,children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:"위쪽 툴팁"})}),e.jsx(v,{side:"top",children:"위쪽에 표시되는 툴팁입니다"})]})]}),e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-center text-sm font-semibold",children:"Left"}),e.jsxs(h,{defaultOpen:!0,children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:"왼쪽 툴팁"})}),e.jsx(v,{side:"left",children:"왼쪽에 표시되는 툴팁입니다"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-center text-sm font-semibold",children:"Right"}),e.jsxs(h,{defaultOpen:!0,children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:"오른쪽 툴팁"})}),e.jsx(v,{side:"right",children:"오른쪽에 표시되는 툴팁입니다"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-center text-sm font-semibold",children:"Bottom"}),e.jsxs(h,{defaultOpen:!0,children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:"아래쪽 툴팁"})}),e.jsx(v,{side:"bottom",children:"아래쪽에 표시되는 툴팁입니다"})]})]})]})},L={parameters:{docs:{description:{story:`
긴 텍스트가 포함된 툴팁 예시입니다.
툴팁은 content의 폭 제한과 줄바꿈을 통해 상세 정보를 표시할 수 있습니다.
        `}}},render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"긴 텍스트 툴팁"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(h,{defaultOpen:!0,children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:"긴 메시지"})}),e.jsx(v,{className:"max-w-64 leading-relaxed",children:"이것은 매우 긴 툴팁 메시지입니다. 툴팁이 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다."})]}),e.jsxs(h,{defaultOpen:!0,children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:"여러 줄 메시지"})}),e.jsxs(v,{className:"max-w-72 leading-relaxed",children:[e.jsx("span",{children:"이것은 여러 줄에 걸쳐 표시되는 툴팁 메시지입니다."}),e.jsx("br",{}),e.jsx("span",{children:"사용자에게 상세한 정보를 제공할 수 있습니다."})]})]})]})]})})},k={parameters:{docs:{description:{story:`
\`delayDuration\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정합니다.
        `}}},render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:[[0,"지연 시간 없음 (0ms)","즉시 표시","마우스를 올리면 즉시 표시됩니다"],[500,"500ms 지연","0.5초 후 표시","마우스를 올린 후 0.5초 후에 표시됩니다"],[1e3,"1000ms 지연","1초 후 표시","마우스를 올린 후 1초 후에 표시됩니다"]].map(([t,n,o,r])=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:n}),e.jsxs(h,{delayDuration:t,children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:o})}),e.jsx(v,{children:r})]})]},n))})},A={parameters:{docs:{description:{story:`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
TooltipContent 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"아이콘과 텍스트"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[[Le,"성공 상태","작업이 성공적으로 완료되었습니다"],[ke,"경고 상태","주의가 필요한 작업입니다"],[Ae,"에러 상태","오류가 발생했습니다"]].map(([t,n,o])=>e.jsxs(h,{children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{color:n==="에러 상태"?"danger":n==="경고 상태"?"warning":"primary",children:n})}),e.jsx(v,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{className:"size-4"}),e.jsx("span",{children:o})]})})]},n))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"스타일이 적용된 텍스트"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(h,{children:[e.jsx(T,{asChild:!0,children:e.jsx(C,{children:"강조 텍스트"})}),e.jsx(v,{children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"font-bold",children:"중요한 정보"}),e.jsx("span",{className:"text-xs opacity-80",children:"이것은 추가 설명입니다"})]})})]}),e.jsxs(h,{children:[e.jsx(T,{asChild:!0,children:e.jsxs(C,{children:[e.jsx(X,{className:"size-4"}),e.jsx("span",{children:"정보"})]})}),e.jsx(v,{children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(X,{className:"mt-0.5 size-4"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"font-semibold",children:"추가 정보"}),e.jsx("span",{className:"text-xs opacity-80",children:"이 기능에 대한 상세한 설명이 여기에 표시됩니다"})]})]})})]}),e.jsxs(h,{children:[e.jsx(T,{asChild:!0,children:e.jsxs(C,{children:[e.jsx($,{className:"size-4"}),e.jsx("span",{children:"인기 항목"})]})}),e.jsx(v,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx($,{className:"fill-m2-warning text-m2-warning size-4"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-semibold",children:"인기 항목"}),e.jsx("span",{className:"text-xs opacity-80",children:"많은 사용자가 선택한 항목입니다"})]})]})})]})]})]})]})};var U,W,Y;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen, delayDuration 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
- **DelayDuration**: 마우스를 올린 뒤 툴팁이 표시되기까지의 지연 시간을 설정합니다.
        \`
      }
    }
  },
  render: args => <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>호버하세요</Button>
      </TooltipTrigger>
      <TooltipContent>이것은 툴팁 메시지입니다</TooltipContent>
    </Tooltip>
}`,...(Y=(W=B.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var K,J,Q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col items-center justify-center gap-12 p-20">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-center text-sm font-semibold">Top</h3>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button>위쪽 툴팁</Button>
          </TooltipTrigger>
          <TooltipContent side="top">위쪽에 표시되는 툴팁입니다</TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center gap-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-center text-sm font-semibold">Left</h3>
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button>왼쪽 툴팁</Button>
            </TooltipTrigger>
            <TooltipContent side="left">왼쪽에 표시되는 툴팁입니다</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-center text-sm font-semibold">Right</h3>
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button>오른쪽 툴팁</Button>
            </TooltipTrigger>
            <TooltipContent side="right">오른쪽에 표시되는 툴팁입니다</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-center text-sm font-semibold">Bottom</h3>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button>아래쪽 툴팁</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">아래쪽에 표시되는 툴팁입니다</TooltipContent>
        </Tooltip>
      </div>
    </div>
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
긴 텍스트가 포함된 툴팁 예시입니다.
툴팁은 content의 폭 제한과 줄바꿈을 통해 상세 정보를 표시할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">긴 텍스트 툴팁</h3>
        <div className="flex flex-wrap gap-4">
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button>긴 메시지</Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-64 leading-relaxed">
              이것은 매우 긴 툴팁 메시지입니다. 툴팁이 긴 텍스트를 어떻게 처리하는지 확인할 수
              있습니다.
            </TooltipContent>
          </Tooltip>
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button>여러 줄 메시지</Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-72 leading-relaxed">
              <span>이것은 여러 줄에 걸쳐 표시되는 툴팁 메시지입니다.</span>
              <br />
              <span>사용자에게 상세한 정보를 제공할 수 있습니다.</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,re;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`delayDuration\\\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정합니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      {[[0, '지연 시간 없음 (0ms)', '즉시 표시', '마우스를 올리면 즉시 표시됩니다'], [500, '500ms 지연', '0.5초 후 표시', '마우스를 올린 후 0.5초 후에 표시됩니다'], [1000, '1000ms 지연', '1초 후 표시', '마우스를 올린 후 1초 후에 표시됩니다']].map(([delay, title, label, content]) => <div key={title} className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">{title}</h3>
          <Tooltip delayDuration={delay as number}>
            <TooltipTrigger asChild>
              <Button>{label}</Button>
            </TooltipTrigger>
            <TooltipContent>{content}</TooltipContent>
          </Tooltip>
        </div>)}
    </div>
}`,...(re=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ae,le;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
TooltipContent 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">아이콘과 텍스트</h3>
        <div className="flex flex-wrap gap-4">
          {[[CheckCircleIcon, '성공 상태', '작업이 성공적으로 완료되었습니다'], [AlertCircleIcon, '경고 상태', '주의가 필요한 작업입니다'], [XCircleIcon, '에러 상태', '오류가 발생했습니다']].map(([Icon, label, content]) => <Tooltip key={label as string}>
              <TooltipTrigger asChild>
                <Button color={label === '에러 상태' ? 'danger' : label === '경고 상태' ? 'warning' : 'primary'}>
                  {label as string}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <Icon className="size-4" />
                  <span>{content as string}</span>
                </div>
              </TooltipContent>
            </Tooltip>)}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">스타일이 적용된 텍스트</h3>
        <div className="flex flex-wrap gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>강조 텍스트</Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col gap-1">
                <span className="font-bold">중요한 정보</span>
                <span className="text-xs opacity-80">이것은 추가 설명입니다</span>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <InfoIcon className="size-4" />
                <span>정보</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-start gap-2">
                <InfoIcon className="mt-0.5 size-4" />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">추가 정보</span>
                  <span className="text-xs opacity-80">
                    이 기능에 대한 상세한 설명이 여기에 표시됩니다
                  </span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <StarIcon className="size-4" />
                <span>인기 항목</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                <StarIcon className="fill-m2-warning text-m2-warning size-4" />
                <div className="flex flex-col">
                  <span className="font-semibold">인기 항목</span>
                  <span className="text-xs opacity-80">많은 사용자가 선택한 항목입니다</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...(le=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const _t=["Playground","Positions","LongText","DelayDuration","WithRichContent"];export{k as DelayDuration,L as LongText,B as Playground,I as Positions,A as WithRichContent,_t as __namedExportsOrder,Et as default};
