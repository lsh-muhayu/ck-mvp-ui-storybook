import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as O}from"./index-C2vczdB5.js";import{c as F}from"./utils-CDN07tui.js";import{C as Fe}from"./chevron-down-vsUXeLsc.js";import{r as v,R as A}from"./index-OJ7QbjDu.js";import{c as Te}from"./index-jm-SPu3n.js";import{c as Ue}from"./index-DVoPeAEP.js";import{P as _,b as Ne,u as we,a as qe}from"./index-C27WGPQh.js";import{u as U}from"./index-BilTj9-P.js";import{P as Ye}from"./index-CI4jWBLT.js";import{u as _e}from"./index-D15pND6U.js";import{u as Je}from"./index-ehd_yKDV.js";import"./createLucideIcon-BRUIOxYu.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";var M="Collapsible",[Qe,Re]=Te(M),[Xe,q]=Qe(M),Pe=v.forwardRef((o,t)=>{const{__scopeCollapsible:r,open:n,defaultOpen:i,disabled:c,onOpenChange:a,...p}=o,[u,g]=U({prop:n,defaultProp:i??!1,onChange:a,caller:M});return e.jsx(Xe,{scope:r,disabled:c,contentId:_e(),open:u,onOpenToggle:v.useCallback(()=>g(x=>!x),[g]),children:e.jsx(_.div,{"data-state":J(u),"data-disabled":c?"":void 0,...p,ref:t})})});Pe.displayName=M;var ze="CollapsibleTrigger",Se=v.forwardRef((o,t)=>{const{__scopeCollapsible:r,...n}=o,i=q(ze,r);return e.jsx(_.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":J(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...n,ref:t,onClick:Ne(o.onClick,i.onOpenToggle)})});Se.displayName=ze;var Y="CollapsibleContent",Ve=v.forwardRef((o,t)=>{const{forceMount:r,...n}=o,i=q(Y,o.__scopeCollapsible);return e.jsx(Ye,{present:r||i.open,children:({present:c})=>e.jsx(Ze,{...n,ref:t,present:c})})});Ve.displayName=Y;var Ze=v.forwardRef((o,t)=>{const{__scopeCollapsible:r,present:n,children:i,...c}=o,a=q(Y,r),[p,u]=v.useState(n),g=v.useRef(null),x=we(t,g),f=v.useRef(0),T=f.current,C=v.useRef(0),R=C.current,y=a.open||p,j=v.useRef(y),I=v.useRef(void 0);return v.useEffect(()=>{const m=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(m)},[]),qe(()=>{const m=g.current;if(m){I.current=I.current||{transitionDuration:m.style.transitionDuration,animationName:m.style.animationName},m.style.transitionDuration="0s",m.style.animationName="none";const N=m.getBoundingClientRect();f.current=N.height,C.current=N.width,j.current||(m.style.transitionDuration=I.current.transitionDuration,m.style.animationName=I.current.animationName),u(n)}},[a.open,n]),e.jsx(_.div,{"data-state":J(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!y,...c,ref:x,style:{"--radix-collapsible-content-height":T?`${T}px`:void 0,"--radix-collapsible-content-width":R?`${R}px`:void 0,...o.style},children:y&&i})});function J(o){return o?"open":"closed"}var eo=Pe,oo=Se,ro=Ve,h="Accordion",to=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Q,no,co]=Ue(h),[$]=Te(h,[co,Re]),X=Re(),Ee=A.forwardRef((o,t)=>{const{type:r,...n}=o,i=n,c=n;return e.jsx(Q.Provider,{scope:o.__scopeAccordion,children:r==="multiple"?e.jsx(lo,{...c,ref:t}):e.jsx(so,{...i,ref:t})})});Ee.displayName=h;var[De,io]=$(h),[ke,ao]=$(h,{collapsible:!1}),so=A.forwardRef((o,t)=>{const{value:r,defaultValue:n,onValueChange:i=()=>{},collapsible:c=!1,...a}=o,[p,u]=U({prop:r,defaultProp:n??"",onChange:i,caller:h});return e.jsx(De,{scope:o.__scopeAccordion,value:A.useMemo(()=>p?[p]:[],[p]),onItemOpen:u,onItemClose:A.useCallback(()=>c&&u(""),[c,u]),children:e.jsx(ke,{scope:o.__scopeAccordion,collapsible:c,children:e.jsx(Oe,{...a,ref:t})})})}),lo=A.forwardRef((o,t)=>{const{value:r,defaultValue:n,onValueChange:i=()=>{},...c}=o,[a,p]=U({prop:r,defaultProp:n??[],onChange:i,caller:h}),u=A.useCallback(x=>p((f=[])=>[...f,x]),[p]),g=A.useCallback(x=>p((f=[])=>f.filter(T=>T!==x)),[p]);return e.jsx(De,{scope:o.__scopeAccordion,value:a,onItemOpen:u,onItemClose:g,children:e.jsx(ke,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(Oe,{...c,ref:t})})})}),[mo,B]=$(h),Oe=A.forwardRef((o,t)=>{const{__scopeAccordion:r,disabled:n,dir:i,orientation:c="vertical",...a}=o,p=A.useRef(null),u=we(p,t),g=no(r),f=Je(i)==="ltr",T=Ne(o.onKeyDown,C=>{var ee;if(!to.includes(C.key))return;const R=C.target,y=g().filter(K=>{var oe;return!((oe=K.ref.current)!=null&&oe.disabled)}),j=y.findIndex(K=>K.ref.current===R),I=y.length;if(j===-1)return;C.preventDefault();let m=j;const N=0,L=I-1,H=()=>{m=j+1,m>L&&(m=N)},G=()=>{m=j-1,m<N&&(m=L)};switch(C.key){case"Home":m=N;break;case"End":m=L;break;case"ArrowRight":c==="horizontal"&&(f?H():G());break;case"ArrowDown":c==="vertical"&&H();break;case"ArrowLeft":c==="horizontal"&&(f?G():H());break;case"ArrowUp":c==="vertical"&&G();break}const We=m%I;(ee=y[We].ref.current)==null||ee.focus()});return e.jsx(mo,{scope:r,disabled:n,direction:i,orientation:c,children:e.jsx(Q.Slot,{scope:r,children:e.jsx(_.div,{...a,"data-orientation":c,ref:u,onKeyDown:n?void 0:T})})})}),k="AccordionItem",[po,Z]=$(k),Me=A.forwardRef((o,t)=>{const{__scopeAccordion:r,value:n,...i}=o,c=B(k,r),a=io(k,r),p=X(r),u=_e(),g=n&&a.value.includes(n)||!1,x=c.disabled||o.disabled;return e.jsx(po,{scope:r,open:g,disabled:x,triggerId:u,children:e.jsx(eo,{"data-orientation":c.orientation,"data-state":Ke(g),...p,...i,ref:t,disabled:x,open:g,onOpenChange:f=>{f?a.onItemOpen(n):a.onItemClose(n)}})})});Me.displayName=k;var $e="AccordionHeader",Be=A.forwardRef((o,t)=>{const{__scopeAccordion:r,...n}=o,i=B(h,r),c=Z($e,r);return e.jsx(_.h3,{"data-orientation":i.orientation,"data-state":Ke(c.open),"data-disabled":c.disabled?"":void 0,...n,ref:t})});Be.displayName=$e;var W="AccordionTrigger",Le=A.forwardRef((o,t)=>{const{__scopeAccordion:r,...n}=o,i=B(h,r),c=Z(W,r),a=ao(W,r),p=X(r);return e.jsx(Q.ItemSlot,{scope:r,children:e.jsx(oo,{"aria-disabled":c.open&&!a.collapsible||void 0,"data-orientation":i.orientation,id:c.triggerId,...p,...n,ref:t})})});Le.displayName=W;var He="AccordionContent",Ge=A.forwardRef((o,t)=>{const{__scopeAccordion:r,...n}=o,i=B(h,r),c=Z(He,r),a=X(r);return e.jsx(ro,{role:"region","aria-labelledby":c.triggerId,"data-orientation":i.orientation,...a,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});Ge.displayName=He;function Ke(o){return o?"open":"closed"}var uo=Ee,go=Me,Ao=Be,vo=Le,xo=Ge;const fo=O("w-full"),ho=O("border-m2-border border-b last:border-b-0"),bo=O(["text-m2-gray-1 flex flex-1 items-center justify-between gap-2 text-left font-semibold","transition-colors","focus-visible:ring-m2-primary/20 rounded-sm focus-visible:ring-2 focus-visible:outline-none","cursor-pointer disabled:cursor-not-allowed disabled:opacity-50","[&[data-state=open]>svg]:rotate-180"],{variants:{variant:{default:"not-disabled:hover:text-m2-primary-dark",accent:["not-disabled:hover:bg-m2-primary-tint not-disabled:hover:text-m2-primary-dark","not-disabled:hover:[&>svg]:text-m2-primary-dark","data-[state=open]:bg-m2-primary-tint data-[state=open]:text-m2-primary-dark","data-[state=open]:[&>svg]:text-m2-primary-dark"],"accent-reverse":["data-[state=closed]:bg-m2-primary-tint data-[state=closed]:text-m2-primary-dark","data-[state=closed]:[&>svg]:text-m2-primary-dark","not-disabled:data-[state=closed]:hover:bg-m2-primary/10"]},size:{xs:"px-2 py-2 text-xs [&>[data-slot=accordion-chevron]]:size-3",sm:"px-2.5 py-3 text-sm [&>[data-slot=accordion-chevron]]:size-3.5",md:"px-3 py-4 text-base [&>[data-slot=accordion-chevron]]:size-4",lg:"px-4 py-5 text-lg [&>[data-slot=accordion-chevron]]:size-5"}},defaultVariants:{variant:"default",size:"md"}}),Co=O(["text-m2-secondary overflow-hidden text-sm","data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"],{variants:{size:{xs:"[&>[data-slot=accordion-content-inner]]:px-2 [&>[data-slot=accordion-content-inner]]:pb-2",sm:"[&>[data-slot=accordion-content-inner]]:px-2.5 [&>[data-slot=accordion-content-inner]]:pb-3",md:"[&>[data-slot=accordion-content-inner]]:px-3 [&>[data-slot=accordion-content-inner]]:pb-4",lg:"[&>[data-slot=accordion-content-inner]]:px-4 [&>[data-slot=accordion-content-inner]]:pb-5"}},defaultVariants:{size:"md"}});function b({className:o,...t}){return e.jsx(uo,{"data-slot":"accordion",className:F(fo(),o),...t})}function s({className:o,...t}){return e.jsx(go,{"data-slot":"accordion-item",className:F(ho(),o),...t})}function d({className:o,variant:t,size:r,children:n,...i}){return e.jsx(Ao,{className:"flex",children:e.jsxs(vo,{"data-slot":"accordion-trigger",className:F(bo({variant:t,size:r}),o),...i,children:[n,e.jsx(Fe,{"data-slot":"accordion-chevron",className:"text-m2-gray-2 pointer-events-none shrink-0 transition-transform duration-200"})]})})}function l({className:o,size:t,children:r,...n}){return e.jsx(xo,{"data-slot":"accordion-content",className:Co({size:t}),...n,children:e.jsx("div",{"data-slot":"accordion-content-inner",className:o,children:r})})}b.__docgenInfo={description:"",methods:[],displayName:"Accordion"};s.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};d.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};l.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const Oo={title:"M2/Accordion",component:b,parameters:{layout:"centered",docs:{description:{component:`
### 접을 수 있는 콘텐츠 패널을 제공하는 아코디언 컴포넌트

shadcn/ui 패턴 기반의 Divider List 스타일 아코디언입니다.

## 주요 기능

- **단일/다중 선택**: \`type="single"\` 또는 \`type="multiple"\`
- **collapsible**: \`type="single"\`에서 열린 항목을 다시 닫을 수 있음
- **기본 펼침**: \`defaultValue\`로 초기 펼침 항목 지정
- **접근성**: ARIA 속성 + 키보드 네비게이션(↑/↓, Enter/Space) 지원

## 구성 요소

- **Accordion**: 루트 컨테이너
- **AccordionItem**: 개별 항목 (\`value\` 필수)
- **AccordionTrigger**: 헤더 버튼 (children=라벨, chevron 자동 포함)
- **AccordionContent**: 펼쳐지는 콘텐츠 영역
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"],description:"선택 모드. `single`은 한 번에 하나, `multiple`은 여러 항목을 동시에 펼칩니다.",table:{type:{summary:"'single' | 'multiple'"},defaultValue:{summary:"'single'"},category:"동작"}},collapsible:{control:"boolean",description:'`type="single"`일 때 열린 항목을 다시 클릭해 닫을 수 있는지 여부.',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"동작"}},defaultValue:{control:!1,description:"초기 펼침 항목의 `value`. single은 `string`, multiple은 `string[]`.",table:{type:{summary:"string | string[]"},category:"동작"}},variant:{control:"select",options:["default","accent","accent-reverse"],description:"AccordionTrigger의 배경 스타일. `default`는 구분선형(기존), `accent`는 열림 강조, `accent-reverse`는 닫힘 강조(유도). *개별 `AccordionTrigger`에 지정합니다.*",table:{type:{summary:"'default' | 'accent' | 'accent-reverse'"},defaultValue:{summary:"'default'"},category:"스타일"}},size:{control:"select",options:["xs","sm","md","lg"],description:"AccordionTrigger/AccordionContent의 크기. 가로·세로 패딩, 텍스트, chevron 크기를 결정합니다. 폰트·가로 패딩 스케일(12/14/16/18)은 Button·Chip·Badge 등 다른 컨트롤과 동일합니다. *variant와 무관하게 가로 패딩이 통일됩니다.*",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"},category:"스타일"}}}},w={name:"기본",args:{type:"single",collapsible:!0,variant:"default",size:"md"},render:({variant:o,size:t,...r})=>e.jsxs(b,{...r,className:"w-96",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{variant:o,size:t,children:"서비스 이용 요금은 어떻게 책정되나요?"}),e.jsx(l,{size:t,children:"사용량 기반 종량제로 책정됩니다. 기본 제공량을 초과하는 만큼만 과금되며, 월 단위로 청구서가 발행됩니다."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{variant:o,size:t,children:"결제 수단을 변경할 수 있나요?"}),e.jsx(l,{size:t,children:"설정 > 결제 메뉴에서 카드와 계좌이체를 자유롭게 전환할 수 있습니다."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{variant:o,size:t,children:"데이터는 어디에 저장되나요?"}),e.jsx(l,{size:t,children:"국내 리전 데이터센터에 암호화되어 저장되며, 외부로 반출되지 않습니다."})]})]})},P={name:"다중 선택",parameters:{controls:{disable:!0},docs:{description:{story:"여러 항목을 동시에 펼칠 수 있는 예시입니다."}}},render:()=>e.jsxs(b,{type:"multiple",className:"w-96",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{children:"첫 번째 항목"}),e.jsx(l,{children:"여러 항목을 동시에 펼칠 수 있습니다."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{children:"두 번째 항목"}),e.jsx(l,{children:"다중 선택은 여러 정보를 동시에 비교할 때 유용합니다."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{children:"세 번째 항목"}),e.jsx(l,{children:"여러 항목을 동시에 열어 볼 수 있습니다."})]})]})},z={name:"기본 펼침",parameters:{controls:{disable:!0},docs:{description:{story:"특정 항목이 펼쳐진 상태로 시작하는 예시입니다."}}},render:()=>e.jsxs(b,{type:"single",defaultValue:"item-2",collapsible:!0,className:"w-96",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{children:"첫 번째 항목"}),e.jsx(l,{children:"이 항목은 기본적으로 닫혀 있습니다."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{children:"두 번째 항목 (기본 펼침)"}),e.jsx(l,{children:"이 항목은 기본적으로 펼쳐진 상태입니다."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{children:"세 번째 항목"}),e.jsx(l,{children:"이 항목은 기본적으로 닫혀 있습니다."})]})]})},S={name:"비활성 항목",parameters:{controls:{disable:!0},docs:{description:{story:"특정 항목이 비활성화된 예시입니다."}}},render:()=>e.jsxs(b,{type:"single",collapsible:!0,className:"w-96",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{children:"활성화된 항목"}),e.jsx(l,{children:"이 항목은 정상적으로 작동합니다."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{disabled:!0,children:"비활성화된 항목"}),e.jsx(l,{children:"이 내용은 볼 수 없습니다."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{children:"활성화된 항목"}),e.jsx(l,{children:"이 항목도 정상적으로 작동합니다."})]})]})},V={name:"accent (열림 강조)",parameters:{controls:{disable:!0},docs:{description:{story:'`variant="accent"` — 열린 항목이 primary 틴트로 강조됩니다. hover 시에도 틴트가 미리 보여 활성 항목을 부각합니다.'}}},render:()=>e.jsxs(b,{type:"single",defaultValue:"item-2",collapsible:!0,className:"w-96",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{variant:"accent",children:"제목 / 발명의 명칭"}),e.jsx(l,{children:"발명의 명칭에서 키워드를 검색합니다."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{variant:"accent",children:"청구항 (Claims)"}),e.jsx(l,{children:"독립·종속항 본문에서 키워드를 검색합니다."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{variant:"accent",children:"출원인 / 발명자"}),e.jsx(l,{children:"출원인 또는 발명자명으로 검색합니다."})]})]})},E={name:"accent-reverse (닫힘 강조/유도)",parameters:{controls:{disable:!0},docs:{description:{story:'`variant="accent-reverse"` — 닫힌 항목을 primary 틴트로 강조해 "펼쳐보세요"를 유도하고, 펼치면 흰색으로 차분해집니다. 놓치기 쉬운 접힌 영역(예: 항목별 상세검색)에 적합합니다.'}}},render:()=>e.jsxs(b,{type:"single",collapsible:!0,className:"w-96",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{variant:"accent-reverse",children:"항목별 상세검색"}),e.jsx(l,{children:"제목·초록·청구항·출원인 등 필드별로 조합해 검색합니다."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{variant:"accent-reverse",children:"기간 · 국가 필터"}),e.jsx(l,{children:"출원일 범위와 지정국을 좁혀 검색합니다."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{variant:"accent-reverse",children:"최근 검색 이력"}),e.jsx(l,{children:"이전 검색식을 불러와 재실행할 수 있습니다."})]})]})},D={name:"크기 (sm / md / lg)",parameters:{controls:{disable:!0},docs:{description:{story:"`size`는 가로·세로 패딩, 텍스트, chevron 크기를 함께 조절합니다. 폰트·가로 패딩 스케일(12/14/16/18)은 Button·Chip·Badge 등 다른 컨트롤과 동일한 xs/sm/md/lg 단위입니다. 가로 패딩은 variant와 무관하게 통일됩니다."}}},render:()=>e.jsx("div",{className:"flex w-96 flex-col gap-8",children:["xs","sm","md","lg"].map(o=>e.jsxs(b,{type:"single",defaultValue:"item-1",collapsible:!0,children:[e.jsxs(s,{value:"item-1",children:[e.jsxs(d,{variant:"accent",size:o,children:["size = ",o]}),e.jsxs(l,{size:o,children:[o," 크기의 콘텐츠입니다. 라벨과 좌측 정렬이 맞는지 확인하세요."]})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{variant:"accent",size:o,children:"두 번째 항목"}),e.jsx(l,{size:o,children:"내용"})]})]},o))})};var re,te,ne,ce,ie;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '기본',
  args: {
    type: 'single',
    collapsible: true,
    variant: 'default',
    size: 'md'
  },
  render: ({
    variant,
    size,
    ...args
  }) => <Accordion {...args} className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger variant={variant} size={size}>
          서비스 이용 요금은 어떻게 책정되나요?
        </AccordionTrigger>
        <AccordionContent size={size}>
          사용량 기반 종량제로 책정됩니다. 기본 제공량을 초과하는 만큼만 과금되며, 월 단위로
          청구서가 발행됩니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger variant={variant} size={size}>
          결제 수단을 변경할 수 있나요?
        </AccordionTrigger>
        <AccordionContent size={size}>
          설정 &gt; 결제 메뉴에서 카드와 계좌이체를 자유롭게 전환할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger variant={variant} size={size}>
          데이터는 어디에 저장되나요?
        </AccordionTrigger>
        <AccordionContent size={size}>
          국내 리전 데이터센터에 암호화되어 저장되며, 외부로 반출되지 않습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(ne=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"기본 형태입니다. 상단 Controls에서 `type`·`collapsible`·`variant`를 바꿔 동작과 스타일을\n즉시 확인해보세요. `variant`는 데모의 모든 트리거에 함께 적용됩니다.",...(ie=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ie.description}}};var ae,se,de;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: '다중 선택',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '여러 항목을 동시에 펼칠 수 있는 예시입니다.'
      }
    }
  },
  render: () => <Accordion type="multiple" className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>첫 번째 항목</AccordionTrigger>
        <AccordionContent>여러 항목을 동시에 펼칠 수 있습니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 항목</AccordionTrigger>
        <AccordionContent>다중 선택은 여러 정보를 동시에 비교할 때 유용합니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>세 번째 항목</AccordionTrigger>
        <AccordionContent>여러 항목을 동시에 열어 볼 수 있습니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(de=(se=P.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var le,me,pe;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: '기본 펼침',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '특정 항목이 펼쳐진 상태로 시작하는 예시입니다.'
      }
    }
  },
  render: () => <Accordion type="single" defaultValue="item-2" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>첫 번째 항목</AccordionTrigger>
        <AccordionContent>이 항목은 기본적으로 닫혀 있습니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 항목 (기본 펼침)</AccordionTrigger>
        <AccordionContent>이 항목은 기본적으로 펼쳐진 상태입니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>세 번째 항목</AccordionTrigger>
        <AccordionContent>이 항목은 기본적으로 닫혀 있습니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(pe=(me=z.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ge,Ae;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: '비활성 항목',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '특정 항목이 비활성화된 예시입니다.'
      }
    }
  },
  render: () => <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>활성화된 항목</AccordionTrigger>
        <AccordionContent>이 항목은 정상적으로 작동합니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger disabled>비활성화된 항목</AccordionTrigger>
        <AccordionContent>이 내용은 볼 수 없습니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>활성화된 항목</AccordionTrigger>
        <AccordionContent>이 항목도 정상적으로 작동합니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Ae=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:Ae.source}}};var ve,xe,fe;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'accent (열림 강조)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '\`variant="accent"\` — 열린 항목이 primary 틴트로 강조됩니다. hover 시에도 틴트가 미리 보여 활성 항목을 부각합니다.'
      }
    }
  },
  render: () => <Accordion type="single" defaultValue="item-2" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger variant="accent">제목 / 발명의 명칭</AccordionTrigger>
        <AccordionContent>발명의 명칭에서 키워드를 검색합니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger variant="accent">청구항 (Claims)</AccordionTrigger>
        <AccordionContent>독립·종속항 본문에서 키워드를 검색합니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger variant="accent">출원인 / 발명자</AccordionTrigger>
        <AccordionContent>출원인 또는 발명자명으로 검색합니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(fe=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var he,be,Ce;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'accent-reverse (닫힘 강조/유도)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '\`variant="accent-reverse"\` — 닫힌 항목을 primary 틴트로 강조해 "펼쳐보세요"를 유도하고, 펼치면 흰색으로 차분해집니다. 놓치기 쉬운 접힌 영역(예: 항목별 상세검색)에 적합합니다.'
      }
    }
  },
  render: () => <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger variant="accent-reverse">항목별 상세검색</AccordionTrigger>
        <AccordionContent>제목·초록·청구항·출원인 등 필드별로 조합해 검색합니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger variant="accent-reverse">기간 · 국가 필터</AccordionTrigger>
        <AccordionContent>출원일 범위와 지정국을 좁혀 검색합니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger variant="accent-reverse">최근 검색 이력</AccordionTrigger>
        <AccordionContent>이전 검색식을 불러와 재실행할 수 있습니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Ce=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var ye,je,Ie;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: '크기 (sm / md / lg)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '\`size\`는 가로·세로 패딩, 텍스트, chevron 크기를 함께 조절합니다. 폰트·가로 패딩 스케일(12/14/16/18)은 Button·Chip·Badge 등 다른 컨트롤과 동일한 xs/sm/md/lg 단위입니다. 가로 패딩은 variant와 무관하게 통일됩니다.'
      }
    }
  },
  render: () => <div className="flex w-96 flex-col gap-8">
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Accordion key={size} type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger variant="accent" size={size}>
              size = {size}
            </AccordionTrigger>
            <AccordionContent size={size}>
              {size} 크기의 콘텐츠입니다. 라벨과 좌측 정렬이 맞는지 확인하세요.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger variant="accent" size={size}>
              두 번째 항목
            </AccordionTrigger>
            <AccordionContent size={size}>내용</AccordionContent>
          </AccordionItem>
        </Accordion>)}
    </div>
}`,...(Ie=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};const Mo=["Default","Multiple","WithDefaultValue","WithDisabledItem","Accent","AccentReverse","Sizes"];export{V as Accent,E as AccentReverse,w as Default,P as Multiple,D as Sizes,z as WithDefaultValue,S as WithDisabledItem,Mo as __namedExportsOrder,Oo as default};
