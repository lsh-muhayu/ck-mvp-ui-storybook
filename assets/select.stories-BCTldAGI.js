import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as se}from"./index-OJ7QbjDu.js";import{L as c}from"./label-C0vn8eGT.js";import{S as l,a as s,b as t,c as d,d as i}from"./select-fallback-item-DlPCwHAo.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./chevron-down-vsUXeLsc.js";import"./createLucideIcon-BRUIOxYu.js";import"./scroll-area-auto-size-DfvhAHB7.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-CI4jWBLT.js";import"./index-jm-SPu3n.js";import"./index-Dc1_MvIw.js";import"./index-ehd_yKDV.js";import"./index-DVoPeAEP.js";import"./index-DAVdU-vC.js";import"./index-BVTTSdsW.js";import"./index-D15pND6U.js";import"./index-BtVicQOV.js";import"./index-b9QAQN5m.js";import"./index-BilTj9-P.js";import"./index-nJQzngU_.js";import"./index-Bt6hjcc2.js";const te=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}];function r({size:a="md"}){return e.jsx(e.Fragment,{children:te.map(n=>e.jsx(d,{value:n.value,size:a,children:n.label},n.value))})}const Te={title:"M2/Select",component:l,parameters:{layout:"centered",controls:{include:["disabled","placeholder","invalid","readOnly","size"]},docs:{description:{component:`
### 선택 드롭다운 컴포넌트

Select 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 메뉴를 제공합니다.
Radix Select 프리미티브를 기반으로 M2 스타일을 적용했으며, 접근성과 키보드 네비게이션을 지원합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Select\`, \`SelectTrigger\`, \`SelectContent\`, \`SelectItem\`으로 구성
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 지원
- **스크롤 지원**: 많은 옵션이 있을 때 자동 스크롤 영역 제공
- **상태 관리**: \`disabled\`, \`invalid\`, \`readOnly\` 상태 지원
- **커스터마이징**: \`className\`을 통해 각 부분의 스타일 커스터마이징 가능
- **제어 가능**: \`value/onValueChange\`를 통한 controlled 컴포넌트 지원
- **비제어 가능**: \`defaultValue\`를 통한 uncontrolled 컴포넌트 지원
- **아이콘**: 우측에 자동으로 아래 방향 아이콘 표시
- **플레이스홀더**: \`placeholder\` prop을 통해 선택 전 안내 텍스트 표시

## 사용 예시

\`\`\`tsx
const [selected, setSelected] = useState('');

<Select value={selected} onValueChange={setSelected}>
  <SelectTrigger placeholder="옵션을 선택하세요" />
  <SelectContent>
    <SelectItem value="option1">옵션 1</SelectItem>
    <SelectItem value="option2">옵션 2</SelectItem>
    <SelectItem value="option3">옵션 3</SelectItem>
  </SelectContent>
</Select>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Select 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"선택 전에 표시할 플레이스홀더 텍스트 (SelectTrigger에 전달)",table:{type:{summary:"string"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부 (빨간색 테두리 및 텍스트 표시, SelectTrigger에 전달)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"읽기 전용 여부 (회색 배경 표시, SelectTrigger에 전달)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["xs","sm","md","lg"],description:"SelectTrigger의 크기 (`xs`=24px, `sm`=32px, `md`=40px 기본, `lg`=48px)",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}}},args:{disabled:!1,placeholder:"옵션을 선택하세요",invalid:!1,readOnly:!1,size:"md"}},o={render:a=>e.jsx("div",{className:"w-80",children:e.jsxs(l,{disabled:a.disabled,children:[e.jsx(s,{className:"w-full text-left",placeholder:a.placeholder,invalid:a.invalid,readOnly:a.readOnly,size:a.size??void 0}),e.jsx(t,{children:e.jsx(r,{size:a.size??void 0})})]})}),parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Select 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.
        `}}}},x={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 Select"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(t,{children:e.jsx(r,{})})]})]})})},m={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Label과 함께 사용"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(c,{htmlFor:"select-basic",children:"기본 선택"}),e.jsxs(l,{children:[e.jsx(s,{id:"select-basic",className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(t,{children:e.jsx(r,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(c,{htmlFor:"select-required",required:!0,children:"필수 선택"}),e.jsxs(l,{children:[e.jsx(s,{id:"select-required",className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(t,{children:e.jsx(r,{})})]})]})]})]})})},p={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본값이 있는 Select"}),e.jsxs(l,{defaultValue:"option2",children:[e.jsx(s,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(t,{children:e.jsx(r,{})})]})]})})},f={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 크기"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(c,{htmlFor:"select-xs",children:"아주 작은 크기 (xs)"}),e.jsxs(l,{children:[e.jsx(s,{id:"select-xs",className:"w-full text-left",placeholder:"h-6 text-xs",size:"xs"}),e.jsx(t,{children:e.jsx(r,{size:"xs"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(c,{htmlFor:"select-sm",children:"작은 크기 (sm)"}),e.jsxs(l,{children:[e.jsx(s,{id:"select-sm",className:"w-full text-left",placeholder:"h-8 text-sm",size:"sm"}),e.jsx(t,{children:e.jsx(r,{size:"sm"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(c,{htmlFor:"select-md",children:"중간 크기 (md)"}),e.jsxs(l,{children:[e.jsx(s,{id:"select-md",className:"w-full text-left",placeholder:"h-10 text-sm",size:"md"}),e.jsx(t,{children:e.jsx(r,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(c,{htmlFor:"select-lg",children:"큰 크기 (lg)"}),e.jsxs(l,{children:[e.jsx(s,{id:"select-lg",className:"w-full text-left",placeholder:"h-12 text-base",size:"lg"}),e.jsx(t,{children:e.jsx(r,{size:"lg"})})]})]})]})]})})},h={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 상태"}),e.jsx("div",{className:"flex flex-col gap-2",children:[{id:"select-normal",label:"일반",props:{}},{id:"select-disabled",label:"비활성화",rootDisabled:!0,props:{}},{id:"select-invalid",label:"유효하지 않은 입력",props:{invalid:!0}},{id:"select-readonly",label:"읽기 전용",props:{readOnly:!0}}].map(({id:a,label:n,rootDisabled:ee,props:le})=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(c,{htmlFor:a,children:n}),e.jsxs(l,{disabled:ee,children:[e.jsx(s,{id:a,className:"w-full text-left",placeholder:"옵션을 선택하세요",...le}),e.jsx(t,{children:e.jsx(r,{})})]})]},a))})]})})},g={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"아이템 상태"}),e.jsxs(l,{defaultValue:"option2",children:[e.jsx(s,{className:"w-full text-left",placeholder:"상태를 확인하세요"}),e.jsxs(t,{children:[e.jsx(d,{value:"option1",children:"일반 아이템"}),e.jsx(d,{value:"option2",children:"선택된 아이템 (checked)"}),e.jsx(d,{value:"option3",disabled:!0,children:"비활성화된 아이템"}),e.jsx(d,{value:"option4",children:"일반 아이템"})]})]}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:"hover, checked, disabled 상태가 Radix data 속성과 M2 토큰 스타일로 표시됩니다."})]})})},S={parameters:{docs:{description:{story:`
많은 옵션이 있는 Select입니다. \`maxHeight="screen"\`으로 설정하면 화면에서 사용할 수 있는
높이에 맞춰 드롭다운 높이가 조절되고, 옵션이 많을 때 자동 스크롤 영역이 표시됩니다.
        `}}},render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"많은 옵션이 있는 Select"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"국가를 선택하세요"}),e.jsx(t,{maxHeight:"screen",children:Array.from({length:100},(a,n)=>e.jsxs(d,{value:`option${n+1}`,children:["옵션 ",n+1]},n+1))})]}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:'maxHeight="screen"으로 화면에서 보일 수 있는 만큼 늘어납니다.'})]})})},u={parameters:{docs:{description:{story:`
ScrollAreaAutoSize를 사용해 아이템 수에 따라 Content 크기가 가변적으로 달라지는 사례입니다.
아이템이 적을 때는 작게 표시되고, 많을 때는 maxHeight까지 늘어난 뒤 스크롤바가 표시됩니다.
        `}}},render:()=>e.jsxs("div",{className:"flex w-full flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"AutoSize 기능 비교"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-m2-secondary text-xs font-medium",children:"아이템이 적을 때 (3개)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(t,{maxHeight:300,children:e.jsx(r,{})})]}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:"Content가 아이템에 맞춰 작게 표시됩니다. 스크롤바가 나타나지 않습니다."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-m2-secondary text-xs font-medium",children:"아이템이 많을 때 (20개)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(t,{maxHeight:300,children:Array.from({length:20},(a,n)=>e.jsxs(d,{value:`option${n+1}`,children:["옵션 ",n+1]},n+1))})]}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:"Content가 maxHeight(300px)까지 늘어나고, 스크롤바가 표시됩니다."})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"실제 사용 예시"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{htmlFor:"autosize-select",children:"동적 크기 조절 Select"}),e.jsxs(l,{children:[e.jsx(s,{id:"autosize-select",className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(t,{maxHeight:300,children:["첫 번째 항목","두 번째 항목","세 번째 항목","네 번째 항목","다섯 번째 항목"].map((a,n)=>e.jsx(d,{value:`item${n+1}`,children:a},a))})]})]})]})]})},v={render:()=>{const[a,n]=se.useState("option1");return e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"제어 컴포넌트"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(l,{value:a,onValueChange:n,children:[e.jsx(s,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(t,{children:e.jsx(r,{})})]}),e.jsxs("p",{className:"text-m2-secondary text-sm",children:["선택된 값: ",a]})]})]})})}},j={parameters:{docs:{description:{story:`
SelectFallbackItem 컴포넌트를 사용해 pending, error, empty 상태를 표시하는 방법입니다.
React에서는 loadingContent, errorContent, emptyContent로 메시지를 커스터마이징할 수 있습니다.
        `}}},render:()=>e.jsxs("div",{className:"flex w-full flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"SelectFallbackItem 상태"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"로딩 중 (pending)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"데이터 로딩 중..."}),e.jsx(t,{children:e.jsx(i,{status:"pending"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"에러 (error)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"에러 발생"}),e.jsx(t,{children:e.jsx(i,{status:"error"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"빈 데이터 (empty)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"데이터 없음"}),e.jsx(t,{children:e.jsx(i,{status:"empty",length:0})})]})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"커스텀 메시지"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"커스텀 로딩 메시지"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"사용자 정의 로딩"}),e.jsx(t,{children:e.jsx(i,{status:"pending",loadingContent:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"border-m2-info-tint border-t-m2-info h-3 w-3 animate-spin rounded-full border-2"}),e.jsx("span",{children:"사용자 목록을 불러오는 중..."})]})})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"커스텀 에러 메시지"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"사용자 정의 에러"}),e.jsx(t,{children:e.jsx(i,{status:"error",errorContent:e.jsx("span",{children:"사용자 목록을 불러올 수 없습니다. 다시 시도해주세요."})})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"커스텀 빈 데이터 메시지"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"사용자 정의 빈 데이터"}),e.jsx(t,{children:e.jsx(i,{status:"empty",emptyContent:e.jsx("span",{children:"등록된 사용자가 없습니다."})})})]})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"크기 옵션"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"아주 작은 크기 (xs)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"아주 작은 크기",size:"xs"}),e.jsx(t,{children:e.jsx(i,{size:"xs",status:"pending"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"작은 크기 (sm)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"작은 크기",size:"sm"}),e.jsx(t,{children:e.jsx(i,{size:"sm",status:"pending"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"중간 크기 (md)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"중간 크기",size:"md"}),e.jsx(t,{children:e.jsx(i,{size:"md",status:"pending"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{children:"큰 크기 (lg)"}),e.jsxs(l,{children:[e.jsx(s,{className:"w-full text-left",placeholder:"큰 크기",size:"lg"}),e.jsx(t,{children:e.jsx(i,{size:"lg",status:"pending"})})]})]})]})]})]})};var N,b,y;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Select disabled={args.disabled}>
        <SelectTrigger className="w-full text-left" placeholder={args.placeholder} invalid={args.invalid} readOnly={args.readOnly} size={args.size ?? undefined} />
        <SelectContent>
          <BasicItems size={args.size ?? undefined} />
        </SelectContent>
      </Select>
    </div>,
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Select 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.
        \`
      }
    }
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,w,I;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 Select</h3>
        <Select>
          <SelectTrigger className="w-full text-left" placeholder="옵션을 선택하세요" />
          <SelectContent>
            <BasicItems />
          </SelectContent>
        </Select>
      </div>
    </div>
}`,...(I=(w=x.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var z,L,T;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Label과 함께 사용</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-basic">기본 선택</Label>
            <Select>
              <SelectTrigger id="select-basic" className="w-full text-left" placeholder="옵션을 선택하세요" />
              <SelectContent>
                <BasicItems />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-required" required>
              필수 선택
            </Label>
            <Select>
              <SelectTrigger id="select-required" className="w-full text-left" placeholder="옵션을 선택하세요" />
              <SelectContent>
                <BasicItems />
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
}`,...(T=(L=m.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var F,k,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본값이 있는 Select</h3>
        <Select defaultValue="option2">
          <SelectTrigger className="w-full text-left" placeholder="옵션을 선택하세요" />
          <SelectContent>
            <BasicItems />
          </SelectContent>
        </Select>
      </div>
    </div>
}`,...(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var V,B,A;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 크기</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-xs">아주 작은 크기 (xs)</Label>
            <Select>
              <SelectTrigger id="select-xs" className="w-full text-left" placeholder="h-6 text-xs" size="xs" />
              <SelectContent>
                <BasicItems size="xs" />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-sm">작은 크기 (sm)</Label>
            <Select>
              <SelectTrigger id="select-sm" className="w-full text-left" placeholder="h-8 text-sm" size="sm" />
              <SelectContent>
                <BasicItems size="sm" />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-md">중간 크기 (md)</Label>
            <Select>
              <SelectTrigger id="select-md" className="w-full text-left" placeholder="h-10 text-sm" size="md" />
              <SelectContent>
                <BasicItems />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-lg">큰 크기 (lg)</Label>
            <Select>
              <SelectTrigger id="select-lg" className="w-full text-left" placeholder="h-12 text-base" size="lg" />
              <SelectContent>
                <BasicItems size="lg" />
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
}`,...(A=(B=f.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,q,R;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 상태</h3>
        <div className="flex flex-col gap-2">
          {[{
          id: 'select-normal',
          label: '일반',
          props: {}
        }, {
          id: 'select-disabled',
          label: '비활성화',
          rootDisabled: true,
          props: {}
        }, {
          id: 'select-invalid',
          label: '유효하지 않은 입력',
          props: {
            invalid: true
          }
        }, {
          id: 'select-readonly',
          label: '읽기 전용',
          props: {
            readOnly: true
          }
        }].map(({
          id,
          label,
          rootDisabled,
          props
        }) => <div key={id} className="flex flex-col gap-1">
              <Label htmlFor={id}>{label}</Label>
              <Select disabled={rootDisabled}>
                <SelectTrigger id={id} className="w-full text-left" placeholder="옵션을 선택하세요" {...props} />
                <SelectContent>
                  <BasicItems />
                </SelectContent>
              </Select>
            </div>)}
        </div>
      </div>
    </div>
}`,...(R=(q=h.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var D,M,_;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">아이템 상태</h3>
        <Select defaultValue="option2">
          <SelectTrigger className="w-full text-left" placeholder="상태를 확인하세요" />
          <SelectContent>
            <SelectItem value="option1">일반 아이템</SelectItem>
            <SelectItem value="option2">선택된 아이템 (checked)</SelectItem>
            <SelectItem value="option3" disabled>
              비활성화된 아이템
            </SelectItem>
            <SelectItem value="option4">일반 아이템</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-m2-gray-2 text-xs">
          hover, checked, disabled 상태가 Radix data 속성과 M2 토큰 스타일로 표시됩니다.
        </p>
      </div>
    </div>
}`,...(_=(M=g.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,E,W;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
많은 옵션이 있는 Select입니다. \\\`maxHeight="screen"\\\`으로 설정하면 화면에서 사용할 수 있는
높이에 맞춰 드롭다운 높이가 조절되고, 옵션이 많을 때 자동 스크롤 영역이 표시됩니다.
        \`
      }
    }
  },
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">많은 옵션이 있는 Select</h3>
        <Select>
          <SelectTrigger className="w-full text-left" placeholder="국가를 선택하세요" />
          <SelectContent maxHeight="screen">
            {Array.from({
            length: 100
          }, (_, index) => <SelectItem key={index + 1} value={\`option\${index + 1}\`}>
                옵션 {index + 1}
              </SelectItem>)}
          </SelectContent>
        </Select>
        <p className="text-m2-gray-2 text-xs">
          maxHeight=&quot;screen&quot;으로 화면에서 보일 수 있는 만큼 늘어납니다.
        </p>
      </div>
    </div>
}`,...(W=(E=S.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var P,U,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
ScrollAreaAutoSize를 사용해 아이템 수에 따라 Content 크기가 가변적으로 달라지는 사례입니다.
아이템이 적을 때는 작게 표시되고, 많을 때는 maxHeight까지 늘어난 뒤 스크롤바가 표시됩니다.
        \`
      }
    }
  },
  render: () => <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">AutoSize 기능 비교</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h4 className="text-m2-secondary text-xs font-medium">아이템이 적을 때 (3개)</h4>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="옵션을 선택하세요" />
              <SelectContent maxHeight={300}>
                <BasicItems />
              </SelectContent>
            </Select>
            <p className="text-m2-gray-2 text-xs">
              Content가 아이템에 맞춰 작게 표시됩니다. 스크롤바가 나타나지 않습니다.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-m2-secondary text-xs font-medium">아이템이 많을 때 (20개)</h4>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="옵션을 선택하세요" />
              <SelectContent maxHeight={300}>
                {Array.from({
                length: 20
              }, (_, index) => <SelectItem key={index + 1} value={\`option\${index + 1}\`}>
                    옵션 {index + 1}
                  </SelectItem>)}
              </SelectContent>
            </Select>
            <p className="text-m2-gray-2 text-xs">
              Content가 maxHeight(300px)까지 늘어나고, 스크롤바가 표시됩니다.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">실제 사용 예시</h3>
        <div className="flex flex-col gap-2">
          <Label htmlFor="autosize-select">동적 크기 조절 Select</Label>
          <Select>
            <SelectTrigger id="autosize-select" className="w-full text-left" placeholder="옵션을 선택하세요" />
            <SelectContent maxHeight={300}>
              {['첫 번째 항목', '두 번째 항목', '세 번째 항목', '네 번째 항목', '다섯 번째 항목'].map((label, index) => <SelectItem key={label} value={\`item\${index + 1}\`}>
                  {label}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
}`,...(G=(U=u.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">제어 컴포넌트</h3>
          <div className="flex flex-col gap-2">
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger className="w-full text-left" placeholder="옵션을 선택하세요" />
              <SelectContent>
                <BasicItems />
              </SelectContent>
            </Select>
            <p className="text-m2-secondary text-sm">선택된 값: {value}</p>
          </div>
        </div>
      </div>;
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
SelectFallbackItem 컴포넌트를 사용해 pending, error, empty 상태를 표시하는 방법입니다.
React에서는 loadingContent, errorContent, emptyContent로 메시지를 커스터마이징할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">SelectFallbackItem 상태</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Label>로딩 중 (pending)</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="데이터 로딩 중..." />
              <SelectContent>
                <SelectFallbackItem status="pending" />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>에러 (error)</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="에러 발생" />
              <SelectContent>
                <SelectFallbackItem status="error" />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>빈 데이터 (empty)</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="데이터 없음" />
              <SelectContent>
                <SelectFallbackItem status="empty" length={0} />
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">커스텀 메시지</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Label>커스텀 로딩 메시지</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="사용자 정의 로딩" />
              <SelectContent>
                <SelectFallbackItem status="pending" loadingContent={<div className="flex items-center gap-2">
                      <div className="border-m2-info-tint border-t-m2-info h-3 w-3 animate-spin rounded-full border-2" />
                      <span>사용자 목록을 불러오는 중...</span>
                    </div>} />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>커스텀 에러 메시지</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="사용자 정의 에러" />
              <SelectContent>
                <SelectFallbackItem status="error" errorContent={<span>사용자 목록을 불러올 수 없습니다. 다시 시도해주세요.</span>} />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>커스텀 빈 데이터 메시지</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="사용자 정의 빈 데이터" />
              <SelectContent>
                <SelectFallbackItem status="empty" emptyContent={<span>등록된 사용자가 없습니다.</span>} />
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">크기 옵션</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label>아주 작은 크기 (xs)</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="아주 작은 크기" size="xs" />
              <SelectContent>
                <SelectFallbackItem size="xs" status="pending" />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>작은 크기 (sm)</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="작은 크기" size="sm" />
              <SelectContent>
                <SelectFallbackItem size="sm" status="pending" />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>중간 크기 (md)</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="중간 크기" size="md" />
              <SelectContent>
                <SelectFallbackItem size="md" status="pending" />
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>큰 크기 (lg)</Label>
            <Select>
              <SelectTrigger className="w-full text-left" placeholder="큰 크기" size="lg" />
              <SelectContent>
                <SelectFallbackItem size="lg" status="pending" />
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Fe=["Playground","Basic","WithLabel","WithDefaultValue","Sizes","States","ItemStates","MaxHeight","AutoSize","Controlled","EmptyStates"];export{u as AutoSize,x as Basic,v as Controlled,j as EmptyStates,g as ItemStates,S as MaxHeight,o as Playground,f as Sizes,h as States,p as WithDefaultValue,m as WithLabel,Fe as __namedExportsOrder,Te as default};
