import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-OJ7QbjDu.js";import{B as C}from"./button-CkQv11My.js";import{L as r}from"./label-C0vn8eGT.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";const V={title:"M2/Label",component:r,parameters:{layout:"centered",docs:{description:{component:'\n### 폼 요소를 위한 라벨 컴포넌트\n\nLabel 컴포넌트는 폼의 입력 필드와 함께 사용되는 라벨을 표시하는 데 사용됩니다. 필수 입력 필드를 표시하기 위한 `required` 속성을 지원합니다.\n\n## 주요 기능\n\n- **필수 필드 표시**: `required` 속성을 통해 필수 입력 필드를 시각적으로 표시\n- **HTML 속성 지원**: `htmlFor`, `id`, `form` 등 모든 HTML label 속성 지원\n- **커스텀 스타일링**: `className` prop을 통해 스타일 커스터마이징 가능\n- **접근성 지원**: HTML label 요소의 기본 접근성 기능 활용\n\n## 사용 예시\n\n```tsx\n<Label htmlFor="email" required>이메일</Label>\n<input id="email" type="email" />\n```\n        '}}},tags:["autodocs"],argTypes:{required:{control:"boolean",description:"필수 입력 필드 여부. true일 경우 빨간색 별표(*)가 표시됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},className:{control:"text",description:"추가 CSS 클래스. Tailwind m2 토큰을 활용해 스타일을 커스터마이징합니다.",table:{type:{summary:"string"},defaultValue:{summary:"''"},category:"스타일"}}},args:{children:"라벨"}},s={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Label 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 `required`, `className`, `htmlFor` 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **required**: `true`로 설정하면 라벨 뒤에 빨간색 별표(*)가 표시됩니다. 필수 입력 필드에 사용하세요.\n- **className**: 추가 스타일 클래스를 지정합니다. m2 토큰(`text-m2-info` 등)을 사용하세요.\n- **htmlFor**: input의 `id`와 일치시키면 라벨 클릭 시 해당 input에 포커스가 이동합니다.\n        "}}},args:{required:!1,children:"라벨 텍스트"}},l={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 사용법"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"Label 컴포넌트의 기본 사용 예시입니다. 텍스트를 표시하고 필요시 required 속성을 추가할 수 있습니다."})]}),e.jsxs("div",{className:"border-m2-border flex flex-col gap-2 rounded-lg border p-4",children:[e.jsx(r,{children:"기본 라벨"}),e.jsx(r,{className:"text-m2-info",children:"커스텀 스타일 라벨"}),e.jsx(r,{id:"label-1",children:"ID가 있는 라벨"})]})]})})},n={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Required 속성"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"required 속성을 사용하면 라벨 옆에 빨간색 별표(*)가 표시됩니다. 필수 입력 필드에 사용하세요."})]}),e.jsxs("div",{className:"border-m2-border flex flex-col gap-2 rounded-lg border p-4",children:[e.jsx(r,{required:!0,children:"필수 입력 필드"}),e.jsx(r,{required:!0,className:"text-lg",children:"큰 텍스트 필수 라벨"}),e.jsx(r,{required:!0,id:"required-label",children:"ID가 있는 필수 라벨"})]})]})})};function D(){const[a,v]=S.useState({name:"",email:"",phone:""}),d=t=>{const{name:q,value:L}=t.target;v(F=>({...F,[q]:L}))},y=t=>{t.preventDefault(),alert(`제출된 데이터: ${JSON.stringify(a,null,2)}`)};return e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Form과 함께 사용"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"Label 컴포넌트를 form 요소와 함께 사용하는 예시입니다. htmlFor 속성을 사용하여 input과 연결할 수 있습니다."})]}),e.jsx("div",{className:"border-m2-border rounded-lg border p-4",children:e.jsxs("form",{onSubmit:y,className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{htmlFor:"name",required:!0,children:"이름"}),e.jsx("input",{id:"name",name:"name",type:"text",placeholder:"이름을 입력하세요",required:!0,value:a.name,onChange:d,className:"border-m2-border focus:border-m2-primary rounded border px-3 py-2 text-sm focus:outline-none"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{htmlFor:"email",required:!0,children:"이메일"}),e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"이메일을 입력하세요",required:!0,value:a.email,onChange:d,className:"border-m2-border focus:border-m2-primary rounded border px-3 py-2 text-sm focus:outline-none"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{htmlFor:"phone",children:"전화번호 (선택)"}),e.jsx("input",{id:"phone",name:"phone",type:"tel",placeholder:"전화번호를 입력하세요",value:a.phone,onChange:d,className:"border-m2-border focus:border-m2-primary rounded border px-3 py-2 text-sm focus:outline-none"})]}),e.jsx(C,{type:"submit",children:"제출"})]})}),e.jsx("div",{className:"border-m2-info bg-m2-info-tint rounded-lg border p-3",children:e.jsxs("p",{className:"text-m2-info-dark text-xs",children:[e.jsx("strong",{children:"참고:"})," Label의 ",e.jsx("code",{children:"htmlFor"})," 속성과 input의 ",e.jsx("code",{children:"id"})," ","속성을 일치시키면, 라벨을 클릭했을 때 해당 input에 자동으로 포커스가 이동합니다."]})})]})})}const o={render:()=>e.jsx(D,{})};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Label 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 \\\`required\\\`, \\\`className\\\`, \\\`htmlFor\\\` 등의 속성을 변경해보세요.

## 사용 팁

- **required**: \\\`true\\\`로 설정하면 라벨 뒤에 빨간색 별표(*)가 표시됩니다. 필수 입력 필드에 사용하세요.
- **className**: 추가 스타일 클래스를 지정합니다. m2 토큰(\\\`text-m2-info\\\` 등)을 사용하세요.
- **htmlFor**: input의 \\\`id\\\`와 일치시키면 라벨 클릭 시 해당 input에 포커스가 이동합니다.
        \`
      }
    }
  },
  args: {
    required: false,
    children: '라벨 텍스트'
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,p,u;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">기본 사용법</h3>
          <p className="text-m2-secondary text-xs">
            Label 컴포넌트의 기본 사용 예시입니다. 텍스트를 표시하고 필요시 required 속성을 추가할
            수 있습니다.
          </p>
        </div>
        <div className="border-m2-border flex flex-col gap-2 rounded-lg border p-4">
          <Label>기본 라벨</Label>
          <Label className="text-m2-info">커스텀 스타일 라벨</Label>
          <Label id="label-1">ID가 있는 라벨</Label>
        </div>
      </div>
    </div>
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,b,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">Required 속성</h3>
          <p className="text-m2-secondary text-xs">
            required 속성을 사용하면 라벨 옆에 빨간색 별표(*)가 표시됩니다. 필수 입력 필드에
            사용하세요.
          </p>
        </div>
        <div className="border-m2-border flex flex-col gap-2 rounded-lg border p-4">
          <Label required>필수 입력 필드</Label>
          <Label required className="text-lg">
            큰 텍스트 필수 라벨
          </Label>
          <Label required id="required-label">
            ID가 있는 필수 라벨
          </Label>
        </div>
      </div>
    </div>
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,N,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <LabelForm />
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const W=["Playground","Basic","Required","WithForm"];export{l as Basic,s as Playground,n as Required,o as WithForm,W as __namedExportsOrder,V as default};
