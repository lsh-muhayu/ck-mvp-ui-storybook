import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-OJ7QbjDu.js";import{L as x}from"./label-C0vn8eGT.js";import{C as l}from"./checkbox-BeV60aIi.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./createLucideIcon-BRUIOxYu.js";import"./check-XAxGDgGN.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-jm-SPu3n.js";import"./index-BilTj9-P.js";import"./index-nJQzngU_.js";import"./index-b9QAQN5m.js";import"./index-CI4jWBLT.js";const p=["primary","secondary","danger","success","warning"],f=[{title:"Unchecked",checked:!1},{title:"Checked",checked:!0},{title:"Indeterminate",checked:"indeterminate"}],D=["sm","md","lg"],V=[["sm","sm (16px)"],["md","md (20px)"],["lg","lg (24px)"]],ee={title:"M2/Checkbox",component:l,parameters:{layout:"centered",controls:{include:["color","size","invalid","disabled","defaultChecked"]},docs:{description:{component:'\n### 사용자 선택을 위한 체크박스 컴포넌트\n\nCheckbox 컴포넌트는 사용자가 하나 이상의 옵션을 선택할 수 있도록 하는 데 사용됩니다.\nM2의 색상, 체크 상태, 에러 상태, 비활성화 상태를 React/Radix 기반으로 구현했습니다.\n\n## 주요 기능\n\n- **다양한 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning` 색상 지원\n- **세 가지 크기**: `sm` (16px, 기본), `md` (20px), `lg` (24px)\n- **세 가지 상태**: `checked` (선택됨), `unchecked` (선택 안 됨), `indeterminate` (부분 선택)\n- **유효성 검사**: `invalid` prop을 통해 에러 상태 표시\n- **비활성화 지원**: `disabled` prop으로 비활성화 상태 제공\n- **접근성 지원**: 키보드 포커스 및 스크린 리더 지원\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```tsx\n<Checkbox defaultChecked color="primary" />\n<Checkbox defaultChecked="indeterminate" color="secondary" />\n<Checkbox size="lg" defaultChecked />\n<Checkbox invalid />\n<Checkbox disabled />\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:p,description:"체크박스의 색상입니다. 의미에 따라 선택 상태의 강조 색상을 바꿉니다.",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"},category:"스타일"}},size:{control:"select",options:D,description:"체크박스의 크기입니다. sm=16px, md=20px, lg=24px이며 인디케이터 아이콘도 함께 조정됩니다.",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'sm'"},category:"스타일"}},invalid:{control:"boolean",description:"유효하지 않은 상태 여부입니다. true일 때 에러 상태 스타일을 표시합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},disabled:{control:"boolean",description:"체크박스 비활성화 여부입니다. true일 때 클릭과 포커스가 제한됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},checked:{control:"select",options:[!1,!0,"indeterminate"],description:"체크박스의 현재 값입니다. controlled 방식에서 사용합니다.",table:{type:{summary:'boolean | "indeterminate"'},category:"상태"}},defaultChecked:{control:"select",options:[!1,!0,"indeterminate"],description:"체크박스의 초기값입니다. uncontrolled 방식에서 사용합니다.",table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"},category:"상태"}},onCheckedChange:{action:"checkedChange",description:"선택 상태가 바뀔 때 호출되는 콜백입니다.",table:{type:{summary:'(checked: boolean | "indeterminate") => void'},category:"이벤트"}},className:{control:"text",description:"추가 CSS 클래스입니다. 크기 조정 등 외부 레이아웃에 사용합니다.",table:{type:{summary:"string"},category:"스타일"}}},args:{color:"primary",invalid:!1,disabled:!1,defaultChecked:!1,"aria-label":"체크박스"}},n={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultChecked 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 체크박스의 색상을 선택합니다. `danger`는 위험한 작업, `success`는 성공 상태에 사용합니다.\n- **Invalid**: `true`로 설정하면 체크박스가 에러 상태로 표시됩니다.\n- **Disabled**: `true`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.\n- **DefaultChecked**: 초기값을 설정합니다. `true`는 체크됨, `false`는 체크 안 됨, `indeterminate`는 부분 선택 상태입니다.\n        "}}}},d={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:f.map(({title:a,checked:c})=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:a}),e.jsx("div",{className:"flex gap-4",children:p.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(l,{color:s,defaultChecked:c,"aria-label":`${a} ${s}`}),e.jsx("span",{className:"text-m2-secondary text-xs",children:s})]},s))})]},a))})},r={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:[{title:"기본 상태 (Normal State)",disabled:!1,invalid:!1},{title:"Disabled 상태",disabled:!0,invalid:!1},{title:"Invalid 상태",disabled:!1,invalid:!0}].map(({title:a,disabled:c,invalid:s})=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:a}),e.jsx("div",{className:"flex flex-col gap-3",children:f.map(({title:t,checked:R})=>e.jsx("div",{className:"flex gap-4",children:p.map(h=>e.jsx(l,{color:h,defaultChecked:R,disabled:c,invalid:s,"aria-label":`${a} ${t} ${h}`},h))},t))})]},a))})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[f.map(({title:a,checked:c})=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:a}),e.jsx("div",{className:"flex gap-4",children:V.map(([s,t])=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(l,{defaultChecked:c,size:s,"aria-label":`${a} ${t}`}),e.jsx("span",{className:"text-m2-secondary text-xs",children:t})]},t))})]},a)),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"모든 색상 (lg)"}),e.jsx("div",{className:"flex gap-4",children:p.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(l,{color:a,defaultChecked:!0,size:"lg","aria-label":`${a} size lg`}),e.jsx("span",{className:"text-m2-secondary text-xs",children:a})]},a))})]})]})},i={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`checked\`와 \`onCheckedChange\`를 통해 체크박스의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`onCheckedChange\`를 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 체크박스가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다
        `}}},render:()=>{const[a,c]=A.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{id:"checkbox-controlled",checked:a,onCheckedChange:c}),e.jsx(x,{htmlFor:"checkbox-controlled",children:"제어 체크박스"})]}),e.jsxs("p",{className:"text-m2-secondary text-xs",children:["현재 값: ",String(a)]})]})}},m={parameters:{docs:{description:{story:`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. 컴포넌트가 자체적으로 상태를 관리하며, 부모는 초기값(\`defaultChecked\`)만 설정합니다.

## 특징

- 컴포넌트가 자체적으로 상태를 관리합니다
- 부모는 초기값(\`defaultChecked\`)만 설정합니다
- 상태 변경은 컴포넌트 내부에서 처리됩니다
- 간단한 사용 사례나 폼 제출 시 값만 필요한 경우에 적합합니다
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{id:"checkbox-uncontrolled-checked",defaultChecked:!0}),e.jsx(x,{htmlFor:"checkbox-uncontrolled-checked",children:"초기값 checked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{id:"checkbox-uncontrolled-unchecked"}),e.jsx(x,{htmlFor:"checkbox-uncontrolled-unchecked",children:"초기값 unchecked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{id:"checkbox-uncontrolled-indeterminate",defaultChecked:"indeterminate"}),e.jsx(x,{htmlFor:"checkbox-uncontrolled-indeterminate",children:"초기값 indeterminate"})]})]})};var u,k,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultChecked 등의 속성을 변경해보세요.

## 사용 팁

- **Color**: 체크박스의 색상을 선택합니다. \\\`danger\\\`는 위험한 작업, \\\`success\\\`는 성공 상태에 사용합니다.
- **Invalid**: \\\`true\\\`로 설정하면 체크박스가 에러 상태로 표시됩니다.
- **Disabled**: \\\`true\\\`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.
- **DefaultChecked**: 초기값을 설정합니다. \\\`true\\\`는 체크됨, \\\`false\\\`는 체크 안 됨, \\\`indeterminate\\\`는 부분 선택 상태입니다.
        \`
      }
    }
  }
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var b,v,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      {STATES.map(({
      title,
      checked
    }) => <div key={title} className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">{title}</h3>
          <div className="flex gap-4">
            {COLORS.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} defaultChecked={checked} aria-label={\`\${title} \${color}\`} />
                <span className="text-m2-secondary text-xs">{color}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var y,N,j;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      {[{
      title: '기본 상태 (Normal State)',
      disabled: false,
      invalid: false
    }, {
      title: 'Disabled 상태',
      disabled: true,
      invalid: false
    }, {
      title: 'Invalid 상태',
      disabled: false,
      invalid: true
    }].map(({
      title,
      disabled,
      invalid
    }) => <div key={title} className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">{title}</h3>
          <div className="flex flex-col gap-3">
            {STATES.map(({
          title: stateTitle,
          checked
        }) => <div key={stateTitle} className="flex gap-4">
                {COLORS.map(color => <Checkbox key={color} color={color} defaultChecked={checked} disabled={disabled} invalid={invalid} aria-label={\`\${title} \${stateTitle} \${color}\`} />)}
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(j=(N=r.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var S,L,$;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      {STATES.map(({
      title,
      checked
    }) => <div key={title} className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">{title}</h3>
          <div className="flex gap-4">
            {SIZE_EXAMPLES.map(([size, label]) => <div key={label} className="flex flex-col items-center gap-2">
                <Checkbox defaultChecked={checked} size={size} aria-label={\`\${title} \${label}\`} />
                <span className="text-m2-secondary text-xs">{label}</span>
              </div>)}
          </div>
        </div>)}
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">모든 색상 (lg)</h3>
        <div className="flex gap-4">
          {COLORS.map(color => <div key={color} className="flex flex-col items-center gap-2">
              <Checkbox color={color} defaultChecked size="lg" aria-label={\`\${color} size lg\`} />
              <span className="text-m2-secondary text-xs">{color}</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...($=(L=o.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var E,z,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`checked\\\`와 \\\`onCheckedChange\\\`를 통해 체크박스의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`onCheckedChange\\\`를 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 체크박스가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다
        \`
      }
    }
  },
  render: () => {
    const [checked, setChecked] = useState<CheckboxValue>(false);
    return <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox id="checkbox-controlled" checked={checked} onCheckedChange={setChecked} />
          <Label htmlFor="checkbox-controlled">제어 체크박스</Label>
        </div>
        <p className="text-m2-secondary text-xs">현재 값: {String(checked)}</p>
      </div>;
  }
}`,...(T=(z=i.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var O,F,I;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. 컴포넌트가 자체적으로 상태를 관리하며, 부모는 초기값(\\\`defaultChecked\\\`)만 설정합니다.

## 특징

- 컴포넌트가 자체적으로 상태를 관리합니다
- 부모는 초기값(\\\`defaultChecked\\\`)만 설정합니다
- 상태 변경은 컴포넌트 내부에서 처리됩니다
- 간단한 사용 사례나 폼 제출 시 값만 필요한 경우에 적합합니다
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-uncontrolled-checked" defaultChecked />
        <Label htmlFor="checkbox-uncontrolled-checked">초기값 checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-uncontrolled-unchecked" />
        <Label htmlFor="checkbox-uncontrolled-unchecked">초기값 unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-uncontrolled-indeterminate" defaultChecked="indeterminate" />
        <Label htmlFor="checkbox-uncontrolled-indeterminate">초기값 indeterminate</Label>
      </div>
    </div>
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const ae=["Playground","Colors","States","Sizes","Controlled","Uncontrolled"];export{d as Colors,i as Controlled,n as Playground,o as Sizes,r as States,m as Uncontrolled,ae as __namedExportsOrder,ee as default};
