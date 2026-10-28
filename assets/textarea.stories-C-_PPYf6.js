import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-OJ7QbjDu.js";import{L as l}from"./label-C0vn8eGT.js";import{T as a}from"./textarea-CMJtR3hd.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";const M={title:"M2/Textarea",component:a,parameters:{layout:"centered",controls:{include:["placeholder","rows","cols","disabled","readOnly","invalid","size"]},docs:{description:{component:`
### 여러 줄 텍스트 입력 컴포넌트

Textarea 컴포넌트는 M2 폼에서 여러 줄의 텍스트 입력을 받기 위한 컴포넌트입니다.
표준 HTML textarea 요소의 속성을 지원하며, 긴 설명이나 메모 입력에 사용합니다.

## 주요 기능

- **여러 줄 입력**: 긴 텍스트나 여러 줄의 내용을 입력할 수 있습니다
- **상태 관리**: \`disabled\`, \`readOnly\` 상태 지원
- **유효성 검사**: \`invalid\` prop을 통해 유효하지 않은 입력을 시각적으로 표시
- **플레이스홀더**: \`placeholder\`를 통한 사용자 가이드 제공
- **크기 조절**: \`rows\`, \`cols\` 속성과 \`size\` prop으로 크기 조절 가능
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Textarea placeholder="내용을 입력하세요" />
<Textarea rows={5} placeholder="여러 줄 입력" />
<Textarea disabled />
<Textarea invalid placeholder="유효하지 않은 입력" />
\`\`\`
        `}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"텍스트 영역에 표시할 플레이스홀더 텍스트입니다.",table:{type:{summary:"string"},category:"속성"}},rows:{control:"number",description:"텍스트 영역의 행 수입니다. 기본 높이를 조정할 때 사용합니다.",table:{type:{summary:"number"},defaultValue:{summary:"4"},category:"속성"}},cols:{control:"number",description:"텍스트 영역의 열 수입니다. HTML textarea의 cols 속성을 그대로 전달합니다.",table:{type:{summary:"number"},category:"속성"}},disabled:{control:"boolean",description:"텍스트 영역 비활성화 여부입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},readOnly:{control:"boolean",description:"읽기 전용 여부입니다. 값은 표시되지만 사용자가 수정할 수 없습니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부입니다. 에러 상태의 테두리와 포커스 스타일을 표시합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},size:{control:"select",options:["xs","sm","md","lg"],description:"텍스트 영역의 폰트 크기입니다. `xs`=12, `sm`=14, `md`=14(기본), `lg`=16px.",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"},category:"스타일"}},className:{control:"text",description:"추가 CSS 클래스입니다.",table:{type:{summary:"string"},category:"스타일"}}},args:{placeholder:"내용을 입력하세요",rows:4,invalid:!1,size:"md",disabled:!1,readOnly:!1}},s={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Textarea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, rows, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Rows**: textarea의 기본 높이를 설정합니다.
- **Disabled**: \`true\`로 설정하면 textarea가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 테두리와 포커스 스타일이 표시됩니다.
        `}}}},r={render:()=>e.jsx("div",{className:"flex w-96 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 사용법"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{placeholder:"내용을 입력하세요"}),e.jsx(a,{rows:5,placeholder:"여러 줄 입력이 가능합니다"}),e.jsx(a,{rows:10,placeholder:"더 긴 텍스트 입력"})]})]})})},t={render:()=>e.jsx("div",{className:"flex w-96 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 크기"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-xs",children:"아주 작은 크기 (xs)"}),e.jsx(a,{id:"textarea-xs",placeholder:"text-xs",size:"xs"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-sm",children:"작은 크기 (sm)"}),e.jsx(a,{id:"textarea-sm",placeholder:"text-sm",size:"sm"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-md",children:"중간 크기 (md)"}),e.jsx(a,{id:"textarea-md",placeholder:"text-sm",size:"md"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-lg",children:"큰 크기 (lg)"}),e.jsx(a,{id:"textarea-lg",placeholder:"text-base",size:"lg"})]})]})]})})},o={render:()=>e.jsx("div",{className:"flex w-96 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 상태"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-normal",children:"일반"}),e.jsx(a,{id:"textarea-normal",placeholder:"일반 textarea"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-disabled",children:"비활성화"}),e.jsx(a,{id:"textarea-disabled",disabled:!0,placeholder:"비활성화된 textarea"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-readonly",children:"읽기 전용"}),e.jsx(a,{id:"textarea-readonly",readOnly:!0,value:"이 텍스트는 읽기 전용입니다."})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-invalid",children:"유효하지 않은 입력"}),e.jsx(a,{id:"textarea-invalid",invalid:!0,placeholder:"유효하지 않은 입력"})]})]})]})})},d={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`value\`와 \`onChange\`를 통해 textarea의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`onChange\`를 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 textarea가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다
        `}}},render:()=>{const[n,L]=F.useState("");return e.jsxs("div",{className:"flex w-96 flex-col gap-2",children:[e.jsx(l,{htmlFor:"controlled-textarea",children:"제어 입력"}),e.jsx(a,{id:"controlled-textarea",value:n,onChange:w=>L(w.target.value),placeholder:"내용을 입력하세요"}),e.jsxs("p",{className:"text-m2-secondary text-xs",children:["현재 값: ",n||"(비어 있음)"]})]})}};var c,x,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Textarea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, rows, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Rows**: textarea의 기본 높이를 설정합니다.
- **Disabled**: \\\`true\\\`로 설정하면 textarea가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \\\`true\\\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \\\`true\\\`로 설정하면 유효하지 않은 입력임을 나타내는 테두리와 포커스 스타일이 표시됩니다.
        \`
      }
    }
  }
}`,...(i=(x=s.parameters)==null?void 0:x.docs)==null?void 0:i.source}}};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 사용법</h3>
        <div className="flex flex-col gap-2">
          <Textarea placeholder="내용을 입력하세요" />
          <Textarea rows={5} placeholder="여러 줄 입력이 가능합니다" />
          <Textarea rows={10} placeholder="더 긴 텍스트 입력" />
        </div>
      </div>
    </div>
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,v,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 크기</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-xs">아주 작은 크기 (xs)</Label>
            <Textarea id="textarea-xs" placeholder="text-xs" size="xs" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-sm">작은 크기 (sm)</Label>
            <Textarea id="textarea-sm" placeholder="text-sm" size="sm" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-md">중간 크기 (md)</Label>
            <Textarea id="textarea-md" placeholder="text-sm" size="md" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-lg">큰 크기 (lg)</Label>
            <Textarea id="textarea-lg" placeholder="text-base" size="lg" />
          </div>
        </div>
      </div>
    </div>
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var u,b,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 상태</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-normal">일반</Label>
            <Textarea id="textarea-normal" placeholder="일반 textarea" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-disabled">비활성화</Label>
            <Textarea id="textarea-disabled" disabled placeholder="비활성화된 textarea" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-readonly">읽기 전용</Label>
            <Textarea id="textarea-readonly" readOnly value="이 텍스트는 읽기 전용입니다." />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-invalid">유효하지 않은 입력</Label>
            <Textarea id="textarea-invalid" invalid placeholder="유효하지 않은 입력" />
          </div>
        </div>
      </div>
    </div>
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var N,j,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`value\\\`와 \\\`onChange\\\`를 통해 textarea의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`onChange\\\`를 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 textarea가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다
        \`
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex w-96 flex-col gap-2">
        <Label htmlFor="controlled-textarea">제어 입력</Label>
        <Textarea id="controlled-textarea" value={value} onChange={event => setValue(event.target.value)} placeholder="내용을 입력하세요" />
        <p className="text-m2-secondary text-xs">현재 값: {value || '(비어 있음)'}</p>
      </div>;
  }
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const P=["Playground","Basic","Sizes","States","Controlled"];export{r as Basic,d as Controlled,s as Playground,t as Sizes,o as States,P as __namedExportsOrder,M as default};
