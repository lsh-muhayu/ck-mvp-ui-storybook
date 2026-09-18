import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./index-OJ7QbjDu.js";import{L as a}from"./label-C0vn8eGT.js";import{I as l}from"./input-BeM9XfYP.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";const B={title:"M2/Input",component:l,parameters:{layout:"centered",controls:{include:["type","placeholder","disabled","readOnly","invalid","size"]},docs:{description:{component:'\n### 입력 필드 컴포넌트\n\nInput 컴포넌트는 M2 폼에서 텍스트 입력을 받기 위한 컴포넌트입니다.\n표준 HTML input 요소의 속성을 지원하며, 다양한 입력 타입과 상태를 동일한 M2 스타일로 표시합니다.\n\n## 주요 기능\n\n- **다양한 타입 지원**: `text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `time` 등 input type 지원\n- **상태 관리**: `disabled`, `readOnly` 상태 지원\n- **유효성 검사**: `invalid` prop을 통해 유효하지 않은 입력을 시각적으로 표시\n- **플레이스홀더**: `placeholder`를 통한 사용자 가이드 제공\n- **크기 옵션**: `lg`(48px), `md`(40px), `sm`(32px) 세 가지 크기 지원\n- **커스터마이징**: `className`을 통해 스타일 커스터마이징 가능\n\n## 사용 예시\n\n```tsx\n<Input type="email" placeholder="example@email.com" />\n<Input type="text" placeholder="이름을 입력하세요" />\n<Input type="password" disabled />\n<Input type="email" placeholder="example@email.com" invalid />\n```\n        '}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search","date","time"],description:"입력 필드의 타입입니다. HTML input type을 그대로 전달합니다.",table:{type:{summary:"HTMLInputTypeAttribute"},defaultValue:{summary:"'text'"},category:"속성"}},placeholder:{control:"text",description:"입력 필드에 표시할 플레이스홀더 텍스트입니다.",table:{type:{summary:"string"},category:"속성"}},disabled:{control:"boolean",description:"입력 필드 비활성화 여부입니다. true일 때 입력과 포커스가 제한됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},readOnly:{control:"boolean",description:"읽기 전용 여부입니다. 값은 표시되지만 사용자가 수정할 수 없습니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부입니다. 에러 상태의 테두리와 포커스 스타일을 표시합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},size:{control:"select",options:["xs","sm","md","lg"],description:"입력 필드의 크기입니다. `xs`=24px, `sm`=32px, `md`=40px(기본 폼 높이), `lg`=48px입니다.",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"},category:"스타일"}},className:{control:"text",description:"추가 CSS 클래스입니다. M2 기본 스타일 위에 필요한 레이아웃 클래스를 더할 때 사용합니다.",table:{type:{summary:"string"},category:"스타일"}}},args:{type:"text",placeholder:"텍스트를 입력하세요",invalid:!1,size:"md",disabled:!1,readOnly:!1}},t={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Input 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 type, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Type**: 입력 필드의 타입을 선택합니다. 각 타입에 맞는 브라우저 기본 키보드와 유효성 검사가 적용됩니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \`true\`로 설정하면 입력 필드가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 테두리와 포커스 스타일이 표시됩니다.
        `}}}},n={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 입력 필드"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{defaultValue:"홍길동",placeholder:"이름을 입력하세요"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(l,{type:"tel",placeholder:"010-1234-5678"})]})]})})},i={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 입력 타입"}),e.jsx("div",{className:"flex flex-col gap-2",children:[["input-text","텍스트","text","텍스트를 입력하세요"],["input-email","이메일","email","example@email.com"],["input-password","비밀번호","password","비밀번호를 입력하세요"],["input-number","숫자","number","숫자를 입력하세요"],["input-tel","전화번호","tel","010-1234-5678"],["input-url","URL","url","https://example.com"],["input-search","검색","search","검색어를 입력하세요"],["input-date","날짜","date","날짜를 입력하세요"],["input-time","시간","time","시간을 입력하세요"]].map(([s,p,c,V])=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:s,children:p}),e.jsx(l,{id:s,type:c,placeholder:V})]},s))})]})})},d={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 크기"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-xs",children:"아주 작은 크기 (xs)"}),e.jsx(l,{id:"input-xs",placeholder:"h-6 text-xs",size:"xs"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-sm",children:"작은 크기 (sm)"}),e.jsx(l,{id:"input-sm",placeholder:"h-8 text-sm",size:"sm"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-md",children:"중간 크기 (md)"}),e.jsx(l,{id:"input-md",placeholder:"h-10 text-sm",size:"md"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-lg",children:"큰 크기 (lg)"}),e.jsx(l,{id:"input-lg",placeholder:"h-12 text-base",size:"lg"})]})]})]})})},r={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 상태"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-normal",children:"일반"}),e.jsx(l,{id:"input-normal",placeholder:"일반 입력 필드"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-disabled",children:"비활성화"}),e.jsx(l,{id:"input-disabled",disabled:!0,placeholder:"비활성화된 입력 필드"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-readonly",children:"읽기 전용"}),e.jsx(l,{id:"input-readonly",readOnly:!0,defaultValue:"읽기 전용 텍스트"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-invalid",children:"유효하지 않은 입력"}),e.jsx(l,{id:"input-invalid",invalid:!0,placeholder:"유효하지 않은 입력 필드"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-invalid-password",children:"유효하지 않은 비밀번호"}),e.jsx(l,{id:"input-invalid-password",type:"password",invalid:!0,placeholder:"비밀번호를 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-invalid-date",children:"유효하지 않은 날짜"}),e.jsx(l,{id:"input-invalid-date",type:"date",invalid:!0})]})]})]})})},o={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`value\`와 \`onChange\`를 통해 입력 필드의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`onChange\`를 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다
        `}}},render:()=>{const[s,p]=O.useState("");return e.jsxs("div",{className:"flex w-80 flex-col gap-2",children:[e.jsx(a,{htmlFor:"controlled-input",children:"제어 입력"}),e.jsx(l,{id:"controlled-input",value:s,onChange:c=>p(c.target.value),placeholder:"텍스트를 입력하세요"}),e.jsxs("p",{className:"text-m2-secondary text-xs",children:["현재 값: ",s||"(비어 있음)"]})]})}};var m,x,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Input 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 type, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Type**: 입력 필드의 타입을 선택합니다. 각 타입에 맞는 브라우저 기본 키보드와 유효성 검사가 적용됩니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \\\`true\\\`로 설정하면 입력 필드가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \\\`true\\\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \\\`true\\\`로 설정하면 유효하지 않은 입력임을 나타내는 테두리와 포커스 스타일이 표시됩니다.
        \`
      }
    }
  }
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var h,f,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 입력 필드</h3>
        <div className="flex flex-col gap-2">
          <Input defaultValue="홍길동" placeholder="이름을 입력하세요" />
          <Input type="email" placeholder="example@email.com" />
          <Input type="tel" placeholder="010-1234-5678" />
        </div>
      </div>
    </div>
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,y,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 입력 타입</h3>
        <div className="flex flex-col gap-2">
          {[['input-text', '텍스트', 'text', '텍스트를 입력하세요'], ['input-email', '이메일', 'email', 'example@email.com'], ['input-password', '비밀번호', 'password', '비밀번호를 입력하세요'], ['input-number', '숫자', 'number', '숫자를 입력하세요'], ['input-tel', '전화번호', 'tel', '010-1234-5678'], ['input-url', 'URL', 'url', 'https://example.com'], ['input-search', '검색', 'search', '검색어를 입력하세요'], ['input-date', '날짜', 'date', '날짜를 입력하세요'], ['input-time', '시간', 'time', '시간을 입력하세요']].map(([id, label, type, placeholder]) => <div key={id} className="flex flex-col gap-1">
              <Label htmlFor={id}>{label}</Label>
              <Input id={id} type={type} placeholder={placeholder} />
            </div>)}
        </div>
      </div>
    </div>
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var N,j,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 크기</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-xs">아주 작은 크기 (xs)</Label>
            <Input id="input-xs" placeholder="h-6 text-xs" size="xs" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-sm">작은 크기 (sm)</Label>
            <Input id="input-sm" placeholder="h-8 text-sm" size="sm" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-md">중간 크기 (md)</Label>
            <Input id="input-md" placeholder="h-10 text-sm" size="md" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-lg">큰 크기 (lg)</Label>
            <Input id="input-lg" placeholder="h-12 text-base" size="lg" />
          </div>
        </div>
      </div>
    </div>
}`,...(L=(j=d.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var I,F,w;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 상태</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-normal">일반</Label>
            <Input id="input-normal" placeholder="일반 입력 필드" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-disabled">비활성화</Label>
            <Input id="input-disabled" disabled placeholder="비활성화된 입력 필드" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-readonly">읽기 전용</Label>
            <Input id="input-readonly" readOnly defaultValue="읽기 전용 텍스트" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-invalid">유효하지 않은 입력</Label>
            <Input id="input-invalid" invalid placeholder="유효하지 않은 입력 필드" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-invalid-password">유효하지 않은 비밀번호</Label>
            <Input id="input-invalid-password" type="password" invalid placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-invalid-date">유효하지 않은 날짜</Label>
            <Input id="input-invalid-date" type="date" invalid />
          </div>
        </div>
      </div>
    </div>
}`,...(w=(F=r.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var S,z,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`value\\\`와 \\\`onChange\\\`를 통해 입력 필드의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`onChange\\\`를 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다
        \`
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex w-80 flex-col gap-2">
        <Label htmlFor="controlled-input">제어 입력</Label>
        <Input id="controlled-input" value={value} onChange={event => setValue(event.target.value)} placeholder="텍스트를 입력하세요" />
        <p className="text-m2-secondary text-xs">현재 값: {value || '(비어 있음)'}</p>
      </div>;
  }
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const D=["Playground","Basic","Types","Sizes","States","Controlled"];export{n as Basic,o as Controlled,t as Playground,d as Sizes,r as States,i as Types,D as __namedExportsOrder,B as default};
