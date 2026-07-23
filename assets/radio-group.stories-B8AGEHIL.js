import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-OJ7QbjDu.js";import{L as l}from"./label-C0vn8eGT.js";import{c as xe}from"./utils-CDN07tui.js";import{P as C,u as E,b as k}from"./index-C27WGPQh.js";import{c as fe}from"./index-jm-SPu3n.js";import{c as ve,R as we,I as $e}from"./index-DMBPP7gA.js";import{u as _e}from"./index-BilTj9-P.js";import{u as Ce}from"./index-ehd_yKDV.js";import{u as Se}from"./index-b9QAQN5m.js";import{u as ke}from"./index-nJQzngU_.js";import{P as ze}from"./index-CI4jWBLT.js";import{c as Ee}from"./index-C2vczdB5.js";import{c as Pe}from"./createLucideIcon-BRUIOxYu.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-DVoPeAEP.js";import"./index-D15pND6U.js";import"./index-Dc1_MvIw.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Oe=Pe("circle",Ae);var P="Radio",[De,he]=fe(P),[Me,qe]=De(P),ge=m.forwardRef((a,o)=>{const{__scopeRadio:s,name:n,checked:t=!1,required:d,disabled:p,value:v="on",onCheck:u,form:h,...g}=a,[f,N]=m.useState(null),c=E(o,j=>N(j)),x=m.useRef(!1),b=f?h||!!f.closest("form"):!0;return e.jsxs(Me,{scope:s,checked:t,disabled:p,children:[e.jsx(C.button,{type:"button",role:"radio","aria-checked":t,"data-state":ye(t),"data-disabled":p?"":void 0,disabled:p,value:v,...g,ref:c,onClick:k(a.onClick,j=>{t||u==null||u(),b&&(x.current=j.isPropagationStopped(),x.current||j.stopPropagation())})}),b&&e.jsx(je,{control:f,bubbles:!x.current,name:n,value:v,checked:t,required:d,disabled:p,form:h,style:{transform:"translateX(-100%)"}})]})});ge.displayName=P;var Ne="RadioIndicator",be=m.forwardRef((a,o)=>{const{__scopeRadio:s,forceMount:n,...t}=a,d=qe(Ne,s);return e.jsx(ze,{present:n||d.checked,children:e.jsx(C.span,{"data-state":ye(d.checked),"data-disabled":d.disabled?"":void 0,...t,ref:o})})});be.displayName=Ne;var Ue="RadioBubbleInput",je=m.forwardRef(({__scopeRadio:a,control:o,checked:s,bubbles:n=!0,...t},d)=>{const p=m.useRef(null),v=E(p,d),u=ke(s),h=Se(o);return m.useEffect(()=>{const g=p.current;if(!g)return;const f=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(f,"checked").set;if(u!==s&&c){const x=new Event("click",{bubbles:n});c.call(g,s),g.dispatchEvent(x)}},[u,s,n]),e.jsx(C.input,{type:"radio","aria-hidden":!0,defaultChecked:s,...t,tabIndex:-1,ref:v,style:{...t.style,...h,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});je.displayName=Ue;function ye(a){return a?"checked":"unchecked"}var Be=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],S="RadioGroup",[Te]=fe(S,[ve,he]),Re=ve(),Ge=he(),[Ke,We]=Te(S),Le=m.forwardRef((a,o)=>{const{__scopeRadioGroup:s,name:n,defaultValue:t,value:d,required:p=!1,disabled:v=!1,orientation:u,dir:h,loop:g=!0,onValueChange:f,...N}=a,c=Re(s),x=Ce(h),[b,j]=_e({prop:d,defaultProp:t??null,onChange:f,caller:S});return e.jsx(Ke,{scope:s,name:n,required:p,disabled:v,value:b,onValueChange:j,children:e.jsx(we,{asChild:!0,...c,orientation:u,dir:x,loop:g,children:e.jsx(C.div,{role:"radiogroup","aria-required":p,"aria-orientation":u,"data-disabled":v?"":void 0,dir:x,...N,ref:o})})})});Le.displayName=S;var Ie="RadioGroupItem",Fe=m.forwardRef((a,o)=>{const{__scopeRadioGroup:s,disabled:n,...t}=a,d=We(Ie,s),p=d.disabled||n,v=Re(s),u=Ge(s),h=m.useRef(null),g=E(o,h),f=d.value===t.value,N=m.useRef(!1);return m.useEffect(()=>{const c=b=>{Be.includes(b.key)&&(N.current=!0)},x=()=>N.current=!1;return document.addEventListener("keydown",c),document.addEventListener("keyup",x),()=>{document.removeEventListener("keydown",c),document.removeEventListener("keyup",x)}},[]),e.jsx($e,{asChild:!0,...v,focusable:!p,active:f,children:e.jsx(ge,{disabled:p,required:d.required,checked:f,...u,...t,name:d.name,ref:g,onCheck:()=>d.onValueChange(t.value),onKeyDown:k(c=>{c.key==="Enter"&&c.preventDefault()}),onFocus:k(t.onFocus,()=>{var c;N.current&&((c=h.current)==null||c.click())})})})});Fe.displayName=Ie;var Xe="RadioGroupIndicator",Ve=m.forwardRef((a,o)=>{const{__scopeRadioGroup:s,...n}=a,t=Ge(s);return e.jsx(be,{...t,...n,ref:o})});Ve.displayName=Xe;var He=Le,Ze=Fe,Ye=Ve;function i({className:a,...o}){return e.jsx(He,{"data-slot":"radio-group",className:xe("grid gap-3",a),...o})}i.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};const Je=Ee(["border-m2-gray-2 aspect-square shrink-0 cursor-pointer rounded-full border bg-white shadow-xs transition-[color,box-shadow]","outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"],{variants:{invalid:{true:"border-m2-danger"},size:{sm:"size-4 [&_[data-slot=radio-group-indicator]_svg]:size-2.5",md:"size-5 [&_[data-slot=radio-group-indicator]_svg]:size-3",lg:"size-6 [&_[data-slot=radio-group-indicator]_svg]:size-3.5"},color:{primary:["data-[state=checked]:border-m2-primary","focus-visible:ring-m2-primary/20","[&_[data-slot=radio-group-indicator]_svg]:fill-m2-primary"],secondary:["data-[state=checked]:border-m2-secondary","focus-visible:ring-m2-gray-2/20","[&_[data-slot=radio-group-indicator]_svg]:fill-m2-secondary"],success:["data-[state=checked]:border-m2-success","focus-visible:ring-m2-success/20","[&_[data-slot=radio-group-indicator]_svg]:fill-m2-success"],warning:["data-[state=checked]:border-m2-warning","focus-visible:ring-m2-warning/20","[&_[data-slot=radio-group-indicator]_svg]:fill-m2-warning"],danger:["data-[state=checked]:border-m2-danger","focus-visible:ring-m2-danger/20","[&_[data-slot=radio-group-indicator]_svg]:fill-m2-danger"],tint:["data-[state=checked]:border-m2-primary-tint","focus-visible:ring-m2-primary-tint/20","[&_[data-slot=radio-group-indicator]_svg]:fill-m2-primary-tint"],info:["data-[state=checked]:border-m2-info","focus-visible:ring-m2-info/20","[&_[data-slot=radio-group-indicator]_svg]:fill-m2-info"]}},defaultVariants:{color:"primary",size:"sm"}});function r({className:a,color:o,size:s,invalid:n=!1,...t}){return e.jsx(Ze,{"data-slot":"radio-group-item","data-invalid":n||void 0,"aria-invalid":n||void 0,className:xe(Je({color:o,size:s,invalid:n}),a),...t,children:e.jsx(Ye,{"data-slot":"radio-group-indicator",className:"relative flex items-center justify-center",children:e.jsx(Oe,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-transparent"})})})}r.__docgenInfo={description:"",methods:[],displayName:"RadioGroupItem",props:{invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z=["primary","secondary","success","warning","danger","tint","info"],Qe=[["sm","sm (16px)"],["md","md (20px)"],["lg","lg (24px)"]],Na={title:"M2/RadioGroup",component:i,parameters:{layout:"centered",controls:{include:["defaultValue","value","disabled","orientation","required"]},docs:{description:{component:`
### 단일 선택을 위한 라디오 그룹 컴포넌트

RadioGroup 컴포넌트는 사용자가 여러 옵션 중 하나만 선택할 수 있도록 하는 데 사용됩니다.
체크박스와 달리 하나의 옵션만 선택 가능하며, 상호 배타적인 선택에 사용합니다.

## 주요 기능

- **단일 선택**: 그룹 내에서 하나의 옵션만 선택 가능
- **키보드 네비게이션**: 화살표 키로 옵션 간 이동 가능
- **유효성 검사**: \`invalid\` prop 또는 \`aria-invalid\` 속성으로 에러 상태 표시
- **비활성화 지원**: 개별 아이템 또는 전체 그룹 비활성화 가능
- **접근성 지원**: 키보드 포커스 및 스크린 리더 지원
- **제어/비제어 모드**: \`value\`/ \`onValueChange\` 또는 \`defaultValue\` 사용 가능

## 사용 예시

\`\`\`tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem id="option1" value="option1" />
    <Label htmlFor="option1">옵션 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem id="option2" value="option2" />
    <Label htmlFor="option2">옵션 2</Label>
  </div>
</RadioGroup>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{defaultValue:{control:"text",description:"초기 선택 값입니다. uncontrolled 방식에서 사용합니다.",table:{type:{summary:"string"},category:"상태"}},value:{control:"text",description:"현재 선택 값입니다. controlled 방식에서 사용합니다.",table:{type:{summary:"string"},category:"상태"}},onValueChange:{action:"valueChange",description:"선택 값이 변경될 때 호출되는 콜백입니다.",table:{type:{summary:"(value: string) => void"},category:"이벤트"}},disabled:{control:"boolean",description:"전체 라디오 그룹 비활성화 여부입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},orientation:{control:"select",options:["vertical","horizontal"],description:"라디오 그룹의 접근성 방향 값입니다. 실제 레이아웃은 className으로 조정합니다.",table:{type:{summary:"'vertical' | 'horizontal'"},category:"접근성"}},required:{control:"boolean",description:"필수 선택 여부입니다. 폼 접근성 속성으로 전달됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},className:{control:"text",description:"그룹 레이아웃을 조정하기 위한 추가 CSS 클래스입니다.",table:{type:{summary:"string"},category:"스타일"}}},args:{defaultValue:"option1"}},y={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 RadioGroup 컴포넌트를 인터랙티브하게 테스트할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 defaultValue, disabled, orientation 등의 속성을 변경해보세요.
        `}}},render:a=>e.jsx(i,{className:"w-80",...a,children:["option1","option2","option3"].map((o,s)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`playground-${s+1}`,value:o}),e.jsxs(l,{htmlFor:`playground-${s+1}`,className:"cursor-pointer",children:["옵션 ",s+1]})]},o))})},R={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 사용법"}),e.jsx(i,{defaultValue:"option1",children:["option1","option2","option3"].map((a,o)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`basic-${o+1}`,value:a}),e.jsxs(l,{htmlFor:`basic-${o+1}`,className:"cursor-pointer",children:["옵션 ",o+1]})]},a))})]})})},G={render:()=>e.jsx("div",{className:"flex w-96 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"설명이 있는 라디오 그룹"}),e.jsx(i,{defaultValue:"standard",children:[["standard","일반 배송","3-5일 소요, 무료"],["express","빠른 배송","1-2일 소요, 3,000원"],["overnight","당일 배송","당일 도착, 5,000원"]].map(([a,o,s])=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(r,{id:`desc-${a}`,value:a,className:"mt-1"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(l,{htmlFor:`desc-${a}`,className:"cursor-pointer font-medium",children:o}),e.jsx("span",{className:"text-m2-secondary text-xs",children:s})]})]},a))})]})})},L={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:z.map(a=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:a}),e.jsxs(i,{defaultValue:`${a}-1`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`${a}-1`,value:`${a}-1`,color:a}),e.jsx(l,{htmlFor:`${a}-1`,className:"cursor-pointer",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`${a}-2`,value:`${a}-2`,color:a}),e.jsx(l,{htmlFor:`${a}-2`,className:"cursor-pointer",children:"옵션 2"})]})]})]},a))})},I={parameters:{docs:{description:{story:"\n`RadioGroupItem`의 `size` prop으로 크기를 조정합니다. Checkbox와 동일하게 sm=16px, md=20px, lg=24px이며, 내부 점도 함께 비례 조정됩니다. 기본값은 `sm`입니다.\n        "}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"크기별 비교"}),e.jsx(i,{defaultValue:"md",orientation:"horizontal",className:"flex flex-row gap-6",children:Qe.map(([a,o])=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`size-${a}`,value:a,size:a}),e.jsx(l,{htmlFor:`size-${a}`,className:"cursor-pointer",children:o})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"모든 색상 (lg)"}),e.jsx(i,{defaultValue:z[0],orientation:"horizontal",className:"flex flex-row flex-wrap gap-4",children:z.map(a=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`size-color-${a}`,value:a,color:a,size:"lg"}),e.jsx(l,{htmlFor:`size-color-${a}`,className:"cursor-pointer",children:a})]},a))})]})]})},F={render:()=>e.jsxs("div",{className:"flex w-80 flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"정상 상태"}),e.jsxs(i,{defaultValue:"option1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"normal-1",value:"option1"}),e.jsx(l,{htmlFor:"normal-1",className:"cursor-pointer",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"normal-2",value:"option2"}),e.jsx(l,{htmlFor:"normal-2",className:"cursor-pointer",children:"옵션 2"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"비활성화 상태"}),e.jsxs(i,{defaultValue:"option1",disabled:!0,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"disabled-1",value:"option1"}),e.jsx(l,{htmlFor:"disabled-1",className:"cursor-not-allowed",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"disabled-2",value:"option2"}),e.jsx(l,{htmlFor:"disabled-2",className:"cursor-not-allowed",children:"옵션 2"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"개별 비활성화"}),e.jsxs(i,{defaultValue:"option1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"partial-1",value:"option1"}),e.jsx(l,{htmlFor:"partial-1",className:"cursor-pointer",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"partial-2",value:"option2",disabled:!0}),e.jsx(l,{htmlFor:"partial-2",className:"text-m2-disabled cursor-not-allowed",children:"옵션 2 (비활성화)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"partial-3",value:"option3"}),e.jsx(l,{htmlFor:"partial-3",className:"cursor-pointer",children:"옵션 3"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"에러 상태"}),e.jsxs(i,{"aria-invalid":"true",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"error-1",value:"option1",invalid:!0}),e.jsx(l,{htmlFor:"error-1",className:"cursor-pointer",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"error-2",value:"option2",invalid:!0}),e.jsx(l,{htmlFor:"error-2",className:"cursor-pointer",children:"옵션 2"})]})]}),e.jsx("span",{className:"text-m2-danger text-xs",children:"옵션을 선택해주세요."})]})]})},V={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"수직 레이아웃 (기본)"}),e.jsx(i,{defaultValue:"option1",children:["option1","option2","option3"].map((a,o)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`vertical-${o+1}`,value:a}),e.jsxs(l,{htmlFor:`vertical-${o+1}`,className:"cursor-pointer",children:["옵션 ",o+1]})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"수평 레이아웃"}),e.jsx(i,{defaultValue:"option1",orientation:"horizontal",className:"flex flex-row gap-4",children:["option1","option2","option3"].map((a,o)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`horizontal-${o+1}`,value:a}),e.jsxs(l,{htmlFor:`horizontal-${o+1}`,className:"cursor-pointer",children:["옵션 ",o+1]})]},a))})]})]})},w={render:()=>e.jsxs("div",{className:"flex w-96 flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"결제 방법 선택"}),e.jsx(i,{defaultValue:"card",children:[["card","신용카드"],["bank","계좌이체"],["paypal","PayPal"]].map(([a,o])=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:`example-${a}`,value:a}),e.jsx(l,{htmlFor:`example-${a}`,className:"cursor-pointer",children:o})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"알림 설정"}),e.jsx(i,{defaultValue:"all",children:[["all","모든 알림 받기","모든 활동에 대한 알림을 받습니다"],["important","중요 알림만","중요한 활동에 대한 알림만 받습니다"],["none","알림 받지 않기","알림을 받지 않습니다"]].map(([a,o,s])=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(r,{id:`notify-${a}`,value:a,className:"mt-1"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(l,{htmlFor:`notify-${a}`,className:"cursor-pointer font-medium",children:o}),e.jsx("span",{className:"text-m2-secondary text-xs",children:s})]})]},a))})]})]})},$={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`value\`와 \`onValueChange\`를 통해 라디오 그룹의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`onValueChange\`를 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 라디오 그룹이 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다
        `}}},render:()=>{const[a,o]=m.useState("option1");return e.jsxs("div",{className:"flex w-80 flex-col gap-4",children:[e.jsxs(i,{value:a,onValueChange:o,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"controlled-1",value:"option1"}),e.jsx(l,{htmlFor:"controlled-1",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"controlled-2",value:"option2"}),e.jsx(l,{htmlFor:"controlled-2",children:"옵션 2"})]})]}),e.jsxs("p",{className:"text-m2-secondary text-xs",children:["현재 값: ",a]})]})}},_={parameters:{docs:{description:{story:`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. \`defaultValue\`로 초기값만 설정하고, 이후 상태는 컴포넌트 내부에서 관리합니다.

## 특징

- 초기값만 설정하고 부모 컴포넌트는 상태를 추적하지 않습니다
- 간단한 폼에 적합합니다
- 상태 관리 오버헤드가 없습니다
        `}}},render:()=>e.jsxs(i,{defaultValue:"option1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"uncontrolled-1",value:"option1"}),e.jsx(l,{htmlFor:"uncontrolled-1",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"uncontrolled-2",value:"option2"}),e.jsx(l,{htmlFor:"uncontrolled-2",children:"옵션 2"})]})]})};var A,O,D;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 RadioGroup 컴포넌트를 인터랙티브하게 테스트할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 defaultValue, disabled, orientation 등의 속성을 변경해보세요.
        \`
      }
    }
  },
  render: args => <RadioGroup className="w-80" {...args}>
      {['option1', 'option2', 'option3'].map((value, index) => <div key={value} className="flex items-center gap-2">
          <RadioGroupItem id={\`playground-\${index + 1}\`} value={value} />
          <Label htmlFor={\`playground-\${index + 1}\`} className="cursor-pointer">
            옵션 {index + 1}
          </Label>
        </div>)}
    </RadioGroup>
}`,...(D=(O=y.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var M,q,U;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 사용법</h3>
        <RadioGroup defaultValue="option1">
          {['option1', 'option2', 'option3'].map((value, index) => <div key={value} className="flex items-center gap-2">
              <RadioGroupItem id={\`basic-\${index + 1}\`} value={value} />
              <Label htmlFor={\`basic-\${index + 1}\`} className="cursor-pointer">
                옵션 {index + 1}
              </Label>
            </div>)}
        </RadioGroup>
      </div>
    </div>
}`,...(U=(q=R.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var B,T,K;G.parameters={...G.parameters,docs:{...(B=G.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">설명이 있는 라디오 그룹</h3>
        <RadioGroup defaultValue="standard">
          {[['standard', '일반 배송', '3-5일 소요, 무료'], ['express', '빠른 배송', '1-2일 소요, 3,000원'], ['overnight', '당일 배송', '당일 도착, 5,000원']].map(([value, title, description]) => <div key={value} className="flex items-start gap-2">
              <RadioGroupItem id={\`desc-\${value}\`} value={value} className="mt-1" />
              <div className="flex flex-col">
                <Label htmlFor={\`desc-\${value}\`} className="cursor-pointer font-medium">
                  {title}
                </Label>
                <span className="text-m2-secondary text-xs">{description}</span>
              </div>
            </div>)}
        </RadioGroup>
      </div>
    </div>
}`,...(K=(T=G.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var W,X,H;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:'{\n  render: () => <div className="flex flex-col gap-6">\n      {COLORS.map(color => <div key={color} className="flex flex-col gap-3">\n          <h3 className="text-m2-gray-1 text-sm font-semibold">{color}</h3>\n          <RadioGroup defaultValue={`${color}-1`}>\n            <div className="flex items-center gap-2">\n              <RadioGroupItem id={`${color}-1`} value={`${color}-1`} color={color} />\n              <Label htmlFor={`${color}-1`} className="cursor-pointer">\n                옵션 1\n              </Label>\n            </div>\n            <div className="flex items-center gap-2">\n              <RadioGroupItem id={`${color}-2`} value={`${color}-2`} color={color} />\n              <Label htmlFor={`${color}-2`} className="cursor-pointer">\n                옵션 2\n              </Label>\n            </div>\n          </RadioGroup>\n        </div>)}\n    </div>\n}',...(H=(X=L.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var Z,Y,J;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`RadioGroupItem\\\`의 \\\`size\\\` prop으로 크기를 조정합니다. Checkbox와 동일하게 sm=16px, md=20px, lg=24px이며, 내부 점도 함께 비례 조정됩니다. 기본값은 \\\`sm\\\`입니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">크기별 비교</h3>
        <RadioGroup defaultValue="md" orientation="horizontal" className="flex flex-row gap-6">
          {SIZE_EXAMPLES.map(([size, label]) => <div key={size} className="flex items-center gap-2">
              <RadioGroupItem id={\`size-\${size}\`} value={size} size={size} />
              <Label htmlFor={\`size-\${size}\`} className="cursor-pointer">
                {label}
              </Label>
            </div>)}
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">모든 색상 (lg)</h3>
        <RadioGroup defaultValue={COLORS[0]} orientation="horizontal" className="flex flex-row flex-wrap gap-4">
          {COLORS.map(color => <div key={color} className="flex items-center gap-2">
              <RadioGroupItem id={\`size-color-\${color}\`} value={color} color={color} size="lg" />
              <Label htmlFor={\`size-color-\${color}\`} className="cursor-pointer">
                {color}
              </Label>
            </div>)}
        </RadioGroup>
      </div>
    </div>
}`,...(J=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,ee,ae;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-m2-gray-1 text-sm font-semibold">정상 상태</h3>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center gap-2">
            <RadioGroupItem id="normal-1" value="option1" />
            <Label htmlFor="normal-1" className="cursor-pointer">
              옵션 1
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="normal-2" value="option2" />
            <Label htmlFor="normal-2" className="cursor-pointer">
              옵션 2
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-m2-gray-1 text-sm font-semibold">비활성화 상태</h3>
        <RadioGroup defaultValue="option1" disabled>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="disabled-1" value="option1" />
            <Label htmlFor="disabled-1" className="cursor-not-allowed">
              옵션 1
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="disabled-2" value="option2" />
            <Label htmlFor="disabled-2" className="cursor-not-allowed">
              옵션 2
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-m2-gray-1 text-sm font-semibold">개별 비활성화</h3>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center gap-2">
            <RadioGroupItem id="partial-1" value="option1" />
            <Label htmlFor="partial-1" className="cursor-pointer">
              옵션 1
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="partial-2" value="option2" disabled />
            <Label htmlFor="partial-2" className="text-m2-disabled cursor-not-allowed">
              옵션 2 (비활성화)
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="partial-3" value="option3" />
            <Label htmlFor="partial-3" className="cursor-pointer">
              옵션 3
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-m2-gray-1 text-sm font-semibold">에러 상태</h3>
        <RadioGroup aria-invalid="true">
          <div className="flex items-center gap-2">
            <RadioGroupItem id="error-1" value="option1" invalid />
            <Label htmlFor="error-1" className="cursor-pointer">
              옵션 1
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="error-2" value="option2" invalid />
            <Label htmlFor="error-2" className="cursor-pointer">
              옵션 2
            </Label>
          </div>
        </RadioGroup>
        <span className="text-m2-danger text-xs">옵션을 선택해주세요.</span>
      </div>
    </div>
}`,...(ae=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,se,re;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-m2-gray-1 text-sm font-semibold">수직 레이아웃 (기본)</h3>
        <RadioGroup defaultValue="option1">
          {['option1', 'option2', 'option3'].map((value, index) => <div key={value} className="flex items-center gap-2">
              <RadioGroupItem id={\`vertical-\${index + 1}\`} value={value} />
              <Label htmlFor={\`vertical-\${index + 1}\`} className="cursor-pointer">
                옵션 {index + 1}
              </Label>
            </div>)}
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-m2-gray-1 text-sm font-semibold">수평 레이아웃</h3>
        <RadioGroup defaultValue="option1" orientation="horizontal" className="flex flex-row gap-4">
          {['option1', 'option2', 'option3'].map((value, index) => <div key={value} className="flex items-center gap-2">
              <RadioGroupItem id={\`horizontal-\${index + 1}\`} value={value} />
              <Label htmlFor={\`horizontal-\${index + 1}\`} className="cursor-pointer">
                옵션 {index + 1}
              </Label>
            </div>)}
        </RadioGroup>
      </div>
    </div>
}`,...(re=(se=V.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var le,te,ie;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-m2-gray-1 text-sm font-semibold">결제 방법 선택</h3>
        <RadioGroup defaultValue="card">
          {[['card', '신용카드'], ['bank', '계좌이체'], ['paypal', 'PayPal']].map(([value, label]) => <div key={value} className="flex items-center gap-2">
              <RadioGroupItem id={\`example-\${value}\`} value={value} />
              <Label htmlFor={\`example-\${value}\`} className="cursor-pointer">
                {label}
              </Label>
            </div>)}
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-m2-gray-1 text-sm font-semibold">알림 설정</h3>
        <RadioGroup defaultValue="all">
          {[['all', '모든 알림 받기', '모든 활동에 대한 알림을 받습니다'], ['important', '중요 알림만', '중요한 활동에 대한 알림만 받습니다'], ['none', '알림 받지 않기', '알림을 받지 않습니다']].map(([value, title, description]) => <div key={value} className="flex items-start gap-2">
              <RadioGroupItem id={\`notify-\${value}\`} value={value} className="mt-1" />
              <div className="flex flex-col">
                <Label htmlFor={\`notify-\${value}\`} className="cursor-pointer font-medium">
                  {title}
                </Label>
                <span className="text-m2-secondary text-xs">{description}</span>
              </div>
            </div>)}
        </RadioGroup>
      </div>
    </div>
}`,...(ie=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ne,de,ce;$.parameters={...$.parameters,docs:{...(ne=$.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`value\\\`와 \\\`onValueChange\\\`를 통해 라디오 그룹의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`onValueChange\\\`를 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 라디오 그룹이 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다
        \`
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('option1');
    return <div className="flex w-80 flex-col gap-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="controlled-1" value="option1" />
            <Label htmlFor="controlled-1">옵션 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="controlled-2" value="option2" />
            <Label htmlFor="controlled-2">옵션 2</Label>
          </div>
        </RadioGroup>
        <p className="text-m2-secondary text-xs">현재 값: {value}</p>
      </div>;
  }
}`,...(ce=(de=$.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,ue;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. \\\`defaultValue\\\`로 초기값만 설정하고, 이후 상태는 컴포넌트 내부에서 관리합니다.

## 특징

- 초기값만 설정하고 부모 컴포넌트는 상태를 추적하지 않습니다
- 간단한 폼에 적합합니다
- 상태 관리 오버헤드가 없습니다
        \`
      }
    }
  },
  render: () => <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="uncontrolled-1" value="option1" />
        <Label htmlFor="uncontrolled-1">옵션 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="uncontrolled-2" value="option2" />
        <Label htmlFor="uncontrolled-2">옵션 2</Label>
      </div>
    </RadioGroup>
}`,...(ue=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const ba=["Playground","Basic","WithDescriptions","Colors","Sizes","States","Layouts","Examples","Controlled","Uncontrolled"];export{R as Basic,L as Colors,$ as Controlled,w as Examples,V as Layouts,y as Playground,I as Sizes,F as States,_ as Uncontrolled,G as WithDescriptions,ba as __namedExportsOrder,Na as default};
