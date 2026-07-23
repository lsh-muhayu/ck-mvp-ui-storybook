import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-OJ7QbjDu.js";import{L as b}from"./label-C0vn8eGT.js";import{P as be,T as Me,e as je,C as Ne}from"./popover-content-Dayl4ZTc.js";import{c as w}from"./utils-CDN07tui.js";import{B as Ve}from"./badge-P6oVR44J.js";import{B as we}from"./button-CkQv11My.js";import{s as Ie,d as B}from"./select-fallback-item-DlPCwHAo.js";import{X as Ce}from"./x-rbQ9-OCx.js";import{C as ke}from"./chevron-down-vsUXeLsc.js";import{a as Te}from"./scroll-area-auto-size-DfvhAHB7.js";import{c as me}from"./index-C2vczdB5.js";import{C as pe}from"./checkbox-BeV60aIi.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-jm-SPu3n.js";import"./index-DAVdU-vC.js";import"./index-Dc1_MvIw.js";import"./index-BVTTSdsW.js";import"./index-D15pND6U.js";import"./index-BtVicQOV.js";import"./index-b9QAQN5m.js";import"./index-CI4jWBLT.js";import"./index-BilTj9-P.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./index-DVoPeAEP.js";import"./index-ehd_yKDV.js";import"./index-nJQzngU_.js";import"./index-Bt6hjcc2.js";import"./check-XAxGDgGN.js";const xe=o.createContext(null);function fe({value:l,children:t}){return e.jsx(xe.Provider,{value:l,children:t})}function _(){const l=o.useContext(xe);if(!l)throw new Error("MultiSelect components must be used within <MultiSelect>.");return l}fe.__docgenInfo={description:"",methods:[],displayName:"MultiSelectProvider",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string[];
  setValue: (nextValue: string[]) => void;
  disabled: boolean;
  readOnly: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  listId: string;
  displayValue?: (value: string) => string;
  items: MultiSelectItemRecord[];
  registerItem: (item: MultiSelectItemRecord) => () => void;
}`,signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"setValue",value:{name:"signature",type:"function",raw:"(nextValue: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"nextValue"}],return:{name:"void"}},required:!0}},{key:"disabled",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"open",value:{name:"boolean",required:!0}},{key:"setOpen",value:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}},required:!0}},{key:"listId",value:{name:"string",required:!0}},{key:"displayValue",value:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}},required:!1}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}}],raw:"MultiSelectItemRecord[]",required:!0}},{key:"registerItem",value:{name:"signature",type:"function",raw:"(item: MultiSelectItemRecord) => () => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"item"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ve({value:l,defaultValue:t=[],onValueChange:r,disabled:c=!1,readOnly:n=!1,displayValue:u,children:d}){const v=l!==void 0,[s,m]=o.useState(t),g=l??s,[a,C]=o.useState(!1),[k,T]=o.useState([]),i=o.useId(),y=o.useCallback(N=>{const V=Array.from(new Set(N));v||m(V),r==null||r(V)},[v,r]),j=o.useCallback(N=>(T(V=>[...V.filter(ye=>ye.value!==N.value),N]),()=>{T(V=>V.filter(E=>E.value!==N.value))}),[]),Se=o.useMemo(()=>({value:g,setValue:y,disabled:c,readOnly:n,open:a,setOpen:C,listId:i,displayValue:u,items:k,registerItem:j}),[g,y,c,n,a,i,u,k,j]);return e.jsx(fe,{value:Se,children:e.jsx(be,{open:a,onOpenChange:N=>{c||n||C(N)},children:d})})}const p=ve;ve.__docgenInfo={description:"",methods:[],displayName:"MultiSelectRoot",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},displayValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function x({className:l,invalid:t=!1,readOnly:r=!1,size:c,placeholder:n,onClick:u,onKeyDown:d,...v}){const s=_(),m=r===!0||s.readOnly,g=s.disabled,a=g||m,C=s.value.length>0,k=i=>{var y;return((y=s.displayValue)==null?void 0:y.call(s,i))??i},T=(i,y)=>{i.preventDefault(),i.stopPropagation(),!a&&s.setValue(s.value.filter(j=>j!==y))};return e.jsx(Me,{asChild:!0,children:e.jsxs("div",{...v,role:"combobox","aria-expanded":s.open,"aria-controls":s.listId,"aria-invalid":t===!0||void 0,"aria-disabled":a||void 0,tabIndex:a?void 0:0,className:w(Ie({invalid:t===!0,readOnly:m,disabled:g,size:c}),g&&"bg-m2-surface cursor-not-allowed opacity-70","relative h-auto min-h-10 w-full flex-wrap justify-start gap-1 py-1.5 pr-8",c==="sm"&&"min-h-8 py-1",l),onClick:i=>{if(a){i.preventDefault(),i.stopPropagation();return}u==null||u(i)},onKeyDown:i=>{if(a){i.preventDefault(),i.stopPropagation();return}[" ","Enter","ArrowDown"].includes(i.key)&&(i.preventDefault(),s.setOpen(!0)),d==null||d(i)},children:[C?s.value.map(i=>{const y=k(i);return e.jsxs(Ve,{variant:"filled",color:"primary",size:"xs",rounded:"sm",className:"gap-0.5",children:[e.jsx("span",{children:y}),!a&&e.jsx(we,{type:"button",variant:"text",color:"primary",size:"icon-sm",tabIndex:-1,className:"ml-0.5 size-4 min-h-0 rounded-full text-white not-disabled:hover:bg-white/25 not-disabled:hover:text-white","aria-label":`Remove ${y}`,onClick:j=>T(j,i),onPointerDown:j=>j.preventDefault(),children:e.jsx(Ce,{className:"size-3"})})]},i)}):e.jsx("span",{className:"text-m2-placeholder","data-placeholder":!0,children:n}),e.jsx(ke,{"data-slot":"icon",className:w("text-m2-gray-0 absolute right-3 size-4 shrink-0",c==="sm"?"top-2":"top-3")})]})})}x.__docgenInfo={description:"",methods:[],displayName:"MultiSelectTrigger",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},invalid:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};function f({className:l,children:t,container:r,maxHeight:c=300,sideOffset:n=4,align:u="start",style:d,...v}){const s=_(),m=c==="screen"?"var(--radix-popover-content-available-height)":`min(var(--radix-popover-content-available-height), ${c}px)`;return e.jsx(je,{container:r,children:e.jsx(Ne,{"data-slot":"multi-select-content",align:u,sideOffset:n,className:w("border-m2-surface z-m2-dropdown w-[var(--radix-popover-trigger-width)] rounded-lg border bg-white p-0 shadow-lg outline-none","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",l),style:{"--m2-multi-select-content-max-height":m,...d},...v,children:e.jsx(Te,{type:"auto",className:"size-full max-h-[var(--m2-multi-select-content-max-height)]",children:e.jsx("div",{id:s.listId,role:"listbox","aria-multiselectable":"true",children:t})})})})}f.__docgenInfo={description:"",methods:[],displayName:"MultiSelectContent",props:{container:{required:!1,tsType:{name:"ComponentProps['container']",raw:"ComponentProps<typeof PopoverPrimitive.Portal>['container']"},description:""},maxHeight:{required:!1,tsType:{name:"union",raw:"number | 'screen'",elements:[{name:"number"},{name:"literal",value:"'screen'"}]},description:"",defaultValue:{value:"300",computed:!1}},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1},align:{defaultValue:{value:"'start'",computed:!1},required:!1}}};const qe=me(["flex w-full cursor-pointer items-center gap-2 rounded transition-colors outline-none select-none","hover:not-data-[disabled=true]:bg-m2-primary-dark/10 hover:not-data-[disabled=true]:text-m2-primary-dark","focus-visible:bg-m2-primary-dark/10 focus-visible:text-m2-primary-dark focus-visible:ring-m2-primary focus-visible:ring focus-visible:ring-inset","aria-selected:bg-m2-primary-dark/15 aria-selected:text-m2-primary-dark","data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60"],{variants:{size:{sm:"px-2 py-1.5 text-xs",md:"px-3 py-2 text-sm"}},defaultVariants:{size:"md"}});function h({className:l,value:t,children:r,size:c,disabled:n=!1,...u}){const d=_(),{registerItem:v}=d,s=d.value.includes(t),m=n||d.disabled||d.readOnly;o.useEffect(()=>v({value:t,disabled:n===!0}),[v,n,t]);const g=()=>{m||d.setValue(s?d.value.filter(a=>a!==t):[...d.value,t])};return e.jsxs("div",{role:"option","aria-selected":s,"aria-disabled":m||void 0,"data-disabled":m||void 0,tabIndex:m?void 0:0,className:w(qe({size:c}),l),onClick:g,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),g())},...u,children:[e.jsx(pe,{checked:s,tabIndex:-1,className:"pointer-events-none"}),e.jsx("span",{children:r})]})}h.__docgenInfo={description:"",methods:[],displayName:"MultiSelectItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Oe=me(["flex w-full cursor-pointer items-center gap-2 rounded transition-colors outline-none select-none","hover:bg-m2-primary-dark/10 hover:text-m2-primary-dark","focus-visible:bg-m2-primary-dark/10 focus-visible:text-m2-primary-dark focus-visible:ring-m2-primary focus-visible:ring focus-visible:ring-inset","data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60"],{variants:{size:{sm:"px-2 py-1.5 text-xs",md:"px-3 py-2 text-sm"}},defaultVariants:{size:"md"}});function ge({className:l,children:t="전체 선택",size:r,...c}){const n=_(),u=n.items.filter(a=>!a.disabled).map(a=>a.value),d=new Set(u),v=u.length>0&&u.every(a=>n.value.includes(a)),s=!v&&u.some(a=>n.value.includes(a)),m=n.disabled||n.readOnly,g=()=>{m||(v?n.setValue(n.value.filter(a=>!d.has(a))):n.setValue(Array.from(new Set([...n.value,...u]))))};return e.jsxs("div",{role:"option","aria-selected":v,"aria-disabled":m||void 0,"data-disabled":m||void 0,tabIndex:m?void 0:0,className:w(Oe({size:r}),l),onClick:g,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),g())},...c,children:[e.jsx(pe,{checked:v?!0:s?"indeterminate":!1,tabIndex:-1,className:"pointer-events-none"}),e.jsx("span",{children:t})]})}ge.__docgenInfo={description:"",methods:[],displayName:"MultiSelectAllItem",props:{children:{defaultValue:{value:"'전체 선택'",computed:!1},required:!1}}};const he=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"}],S=l=>{var t;return((t=he.find(r=>r.value===l))==null?void 0:t.label)??l};function M({size:l="md"}){return e.jsx(e.Fragment,{children:he.map(t=>e.jsx(h,{value:t.value,size:l,children:t.label},t.value))})}function I({value:l}){return e.jsxs("p",{className:"text-m2-gray-2 text-sm",children:["선택된 값: ",l.length>0?l.join(", "):"없음"]})}const ml={title:"M2/MultiSelect",component:p,parameters:{layout:"centered",controls:{include:["disabled","placeholder","invalid","readOnly","size"]},docs:{description:{component:`
### 다중 선택 드롭다운 컴포넌트

MultiSelect 컴포넌트는 사용자가 여러 옵션을 동시에 선택할 수 있는 드롭다운 메뉴를 제공합니다.
Radix Popover와 M2 Checkbox/Badge/Button을 기반으로 Listbox 형태의 다중 선택 UX를 React로 구현했습니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`MultiSelect\`, \`MultiSelectTrigger\`, \`MultiSelectContent\`, \`MultiSelectItem\`으로 구성
- **다중 선택**: 체크박스를 통한 복수 선택 지원
- **Badge 표시**: 선택된 아이템을 Trigger 내 Badge로 표시
- **개별 제거**: 각 Badge의 X 아이콘 버튼으로 개별 해제 가능
- **전체 선택**: \`MultiSelectAllItem\`으로 disabled item을 제외한 전체 선택/해제 지원
- **접근성 지원**: combobox/listbox/option ARIA 속성 및 키보드 토글 지원
- **상태 관리**: \`disabled\`, \`invalid\`, \`readOnly\` 상태 지원
- **제어 가능**: \`value/onValueChange\`를 통한 controlled 컴포넌트 지원
- **비제어 가능**: \`defaultValue\`를 통한 uncontrolled 컴포넌트 지원

## 사용 예시

\`\`\`tsx
const [selected, setSelected] = useState<string[]>([]);

<MultiSelect
  value={selected}
  onValueChange={setSelected}
  displayValue={optionDisplayValue}
>
  <MultiSelectTrigger placeholder="옵션을 선택하세요" />
  <MultiSelectContent>
    <MultiSelectItem value="option1">옵션 1</MultiSelectItem>
    <MultiSelectItem value="option2">옵션 2</MultiSelectItem>
  </MultiSelectContent>
</MultiSelect>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"MultiSelect 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"선택 전에 표시할 플레이스홀더 텍스트",table:{type:{summary:"string"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"읽기 전용 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["md","sm"],description:"MultiSelectTrigger와 MultiSelectItem의 크기",table:{type:{summary:"'md' | 'sm'"},defaultValue:{summary:"'md'"}}}},args:{disabled:!1,placeholder:"옵션을 선택하세요",invalid:!1,readOnly:!1,size:"md"}},q={render:l=>{const[t,r]=o.useState([]);return e.jsxs("div",{className:"w-80",children:[e.jsxs(p,{value:t,onValueChange:r,disabled:l.disabled,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:l.placeholder,invalid:l.invalid,readOnly:l.readOnly,size:l.size??void 0}),e.jsx(f,{children:e.jsx(M,{size:l.size??void 0})})]}),e.jsx("div",{className:"mt-2",children:e.jsx(I,{value:t})})]})},parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 MultiSelect 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.
        `}}}},O={render:()=>{const[l,t]=o.useState([]);return e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 MultiSelect"}),e.jsxs(p,{value:l,onValueChange:t,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요"}),e.jsx(f,{children:e.jsx(M,{})})]}),e.jsx(I,{value:l})]})})}},z={render:()=>{const[l,t]=o.useState(["option1","option3"]);return e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본값이 있는 MultiSelect"}),e.jsxs(p,{value:l,onValueChange:t,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요"}),e.jsx(f,{children:e.jsx(M,{})})]}),e.jsx(I,{value:l})]})})}},D={render:()=>{const[l,t]=o.useState(["option1"]),[r,c]=o.useState(["option1"]);return e.jsxs("div",{className:"flex w-80 flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"중간 크기 (md)"}),e.jsxs(p,{value:l,onValueChange:t,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요",size:"md"}),e.jsx(f,{children:e.jsx(M,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"작은 크기 (sm)"}),e.jsxs(p,{value:r,onValueChange:c,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요",size:"sm"}),e.jsx(f,{children:e.jsx(M,{size:"sm"})})]})]})]})}},A={render:()=>{const[l,t]=o.useState([]),[r,c]=o.useState([]);return e.jsxs("div",{className:"flex w-80 flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"비활성화"}),e.jsxs(p,{value:["option1"],disabled:!0,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요"}),e.jsx(f,{children:e.jsx(M,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"유효하지 않은 입력"}),e.jsxs(p,{value:r,onValueChange:c,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요",invalid:!0}),e.jsx(f,{children:e.jsx(M,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"읽기 전용"}),e.jsxs(p,{value:["option1","option2"],displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요",readOnly:!0}),e.jsx(f,{children:e.jsx(M,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"일반 상태"}),e.jsxs(p,{value:l,onValueChange:t,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요"}),e.jsx(f,{children:e.jsx(M,{})})]})]})]})}},L={render:()=>e.jsxs("div",{className:"flex w-80 flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"로딩 중"}),e.jsxs(p,{children:[e.jsx(x,{className:"w-full",placeholder:"데이터 로딩 중..."}),e.jsx(f,{children:e.jsx(B,{status:"pending"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"에러"}),e.jsxs(p,{children:[e.jsx(x,{className:"w-full",placeholder:"에러 발생"}),e.jsx(f,{children:e.jsx(B,{status:"error"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{children:"빈 데이터"}),e.jsxs(p,{children:[e.jsx(x,{className:"w-full",placeholder:"데이터 없음"}),e.jsx(f,{children:e.jsx(B,{status:"success",length:0})})]})]})]})},P={render:()=>{const[l,t]=o.useState([]);return e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"비활성화된 아이템"}),e.jsxs(p,{value:l,onValueChange:t,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요"}),e.jsxs(f,{children:[e.jsx(h,{value:"option1",children:"일반 아이템"}),e.jsx(h,{value:"option2",disabled:!0,children:"비활성화된 아이템"}),e.jsx(h,{value:"option3",children:"일반 아이템"}),e.jsx(h,{value:"option4",disabled:!0,children:"비활성화된 아이템"}),e.jsx(h,{value:"option5",children:"일반 아이템"})]})]}),e.jsx(I,{value:l})]})})}},R={render:()=>{const[l,t]=o.useState([]);return e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"전체 선택 기능"}),e.jsxs(p,{value:l,onValueChange:t,displayValue:S,children:[e.jsx(x,{className:"w-full",placeholder:"옵션을 선택하세요"}),e.jsxs(f,{children:[e.jsx(ge,{}),e.jsx(h,{value:"option1",children:"옵션 1"}),e.jsx(h,{value:"option2",children:"옵션 2"}),e.jsx(h,{value:"option3",disabled:!0,children:"옵션 3 (비활성화)"}),e.jsx(h,{value:"option4",children:"옵션 4"}),e.jsx(h,{value:"option5",children:"옵션 5"})]})]}),e.jsx(I,{value:l})]})})}};var F,W,U;q.parameters={...q.parameters,docs:{...(F=q.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string[]>([]);
    return <div className="w-80">
        <MultiSelect value={selected} onValueChange={setSelected} disabled={args.disabled} displayValue={optionDisplayValue}>
          <MultiSelectTrigger className="w-full" placeholder={args.placeholder} invalid={args.invalid} readOnly={args.readOnly} size={args.size ?? undefined} />
          <MultiSelectContent>
            <OptionItems size={args.size ?? undefined} />
          </MultiSelectContent>
        </MultiSelect>
        <div className="mt-2">
          <SelectedValues value={selected} />
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 MultiSelect 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.
        \`
      }
    }
  }
}`,...(U=(W=q.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var X,$,H;O.parameters={...O.parameters,docs:{...(X=O.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">기본 MultiSelect</h3>
          <MultiSelect value={selected} onValueChange={setSelected} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" />
            <MultiSelectContent>
              <OptionItems />
            </MultiSelectContent>
          </MultiSelect>
          <SelectedValues value={selected} />
        </div>
      </div>;
  }
}`,...(H=($=O.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var G,J,Q;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['option1', 'option3']);
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">기본값이 있는 MultiSelect</h3>
          <MultiSelect value={selected} onValueChange={setSelected} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" />
            <MultiSelectContent>
              <OptionItems />
            </MultiSelectContent>
          </MultiSelect>
          <SelectedValues value={selected} />
        </div>
      </div>;
  }
}`,...(Q=(J=z.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,K;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [md, setMd] = useState<string[]>(['option1']);
    const [sm, setSm] = useState<string[]>(['option1']);
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>중간 크기 (md)</Label>
          <MultiSelect value={md} onValueChange={setMd} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" size="md" />
            <MultiSelectContent>
              <OptionItems />
            </MultiSelectContent>
          </MultiSelect>
        </div>
        <div className="flex flex-col gap-2">
          <Label>작은 크기 (sm)</Label>
          <MultiSelect value={sm} onValueChange={setSm} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" size="sm" />
            <MultiSelectContent>
              <OptionItems size="sm" />
            </MultiSelectContent>
          </MultiSelect>
        </div>
      </div>;
  }
}`,...(K=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var ee,le,te;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [normal, setNormal] = useState<string[]>([]);
    const [invalid, setInvalid] = useState<string[]>([]);
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>비활성화</Label>
          <MultiSelect value={['option1']} disabled displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" />
            <MultiSelectContent>
              <OptionItems />
            </MultiSelectContent>
          </MultiSelect>
        </div>
        <div className="flex flex-col gap-2">
          <Label>유효하지 않은 입력</Label>
          <MultiSelect value={invalid} onValueChange={setInvalid} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" invalid />
            <MultiSelectContent>
              <OptionItems />
            </MultiSelectContent>
          </MultiSelect>
        </div>
        <div className="flex flex-col gap-2">
          <Label>읽기 전용</Label>
          <MultiSelect value={['option1', 'option2']} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" readOnly />
            <MultiSelectContent>
              <OptionItems />
            </MultiSelectContent>
          </MultiSelect>
        </div>
        <div className="flex flex-col gap-2">
          <Label>일반 상태</Label>
          <MultiSelect value={normal} onValueChange={setNormal} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" />
            <MultiSelectContent>
              <OptionItems />
            </MultiSelectContent>
          </MultiSelect>
        </div>
      </div>;
  }
}`,...(te=(le=A.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ae,se,ie;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label>로딩 중</Label>
        <MultiSelect>
          <MultiSelectTrigger className="w-full" placeholder="데이터 로딩 중..." />
          <MultiSelectContent>
            <MultiSelectFallbackItem status="pending" />
          </MultiSelectContent>
        </MultiSelect>
      </div>
      <div className="flex flex-col gap-2">
        <Label>에러</Label>
        <MultiSelect>
          <MultiSelectTrigger className="w-full" placeholder="에러 발생" />
          <MultiSelectContent>
            <MultiSelectFallbackItem status="error" />
          </MultiSelectContent>
        </MultiSelect>
      </div>
      <div className="flex flex-col gap-2">
        <Label>빈 데이터</Label>
        <MultiSelect>
          <MultiSelectTrigger className="w-full" placeholder="데이터 없음" />
          <MultiSelectContent>
            <MultiSelectFallbackItem status="success" length={0} />
          </MultiSelectContent>
        </MultiSelect>
      </div>
    </div>
}`,...(ie=(se=L.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,re,oe;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">비활성화된 아이템</h3>
          <MultiSelect value={selected} onValueChange={setSelected} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" />
            <MultiSelectContent>
              <MultiSelectItem value="option1">일반 아이템</MultiSelectItem>
              <MultiSelectItem value="option2" disabled>
                비활성화된 아이템
              </MultiSelectItem>
              <MultiSelectItem value="option3">일반 아이템</MultiSelectItem>
              <MultiSelectItem value="option4" disabled>
                비활성화된 아이템
              </MultiSelectItem>
              <MultiSelectItem value="option5">일반 아이템</MultiSelectItem>
            </MultiSelectContent>
          </MultiSelect>
          <SelectedValues value={selected} />
        </div>
      </div>;
  }
}`,...(oe=(re=P.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ce,de,ue;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">전체 선택 기능</h3>
          <MultiSelect value={selected} onValueChange={setSelected} displayValue={optionDisplayValue}>
            <MultiSelectTrigger className="w-full" placeholder="옵션을 선택하세요" />
            <MultiSelectContent>
              <MultiSelectAllItem />
              <MultiSelectItem value="option1">옵션 1</MultiSelectItem>
              <MultiSelectItem value="option2">옵션 2</MultiSelectItem>
              <MultiSelectItem value="option3" disabled>
                옵션 3 (비활성화)
              </MultiSelectItem>
              <MultiSelectItem value="option4">옵션 4</MultiSelectItem>
              <MultiSelectItem value="option5">옵션 5</MultiSelectItem>
            </MultiSelectContent>
          </MultiSelect>
          <SelectedValues value={selected} />
        </div>
      </div>;
  }
}`,...(ue=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const pl=["Playground","Basic","WithDefaultValue","Sizes","States","EmptyStates","DisabledItems","WithSelectAll"];export{O as Basic,P as DisabledItems,L as EmptyStates,q as Playground,D as Sizes,A as States,z as WithDefaultValue,R as WithSelectAll,pl as __namedExportsOrder,ml as default};
