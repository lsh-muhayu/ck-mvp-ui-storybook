import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-OJ7QbjDu.js";import{C as s}from"./chip-CFyISPk5.js";import{C as F}from"./check-XAxGDgGN.js";import{S as h}from"./star-CVmaTZu_.js";import{H as v}from"./heart-CZOb14Z3.js";import{U as K}from"./user-DKwQRr9F.js";import{S as Q}from"./settings-BWfxB16v.js";import{c as Y}from"./createLucideIcon-BRUIOxYu.js";import{X as i}from"./x-rbQ9-OCx.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-CM4EhglE.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-BilTj9-P.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],l=Y("tag",Z),Ne={title:"M2/Chip",component:s,parameters:{layout:"centered",docs:{description:{component:`
### 선택 가능한 칩 컴포넌트

Chip 컴포넌트는 토글 가능한 칩 UI를 제공합니다. 사용자가 클릭하여 선택하거나 해제할 수 있으며, 필터링이나 태그 선택에 유용합니다.

## 주요 기능

- **토글 기능**: 클릭하여 선택/해제 가능
- **네 가지 크기**: \`xs\` (초소형), \`sm\` (작은 크기), \`md\` (중간 크기), \`lg\` (큰 크기) — Badge와 동일한 스케일
- **일곱 가지 색상**: \`color\`로 강조색 지정 (Badge와 동일: primary·secondary·success·warning·danger·info·urgent). \`urgent\`는 긴급 필터 등 가장 강한 강조에 사용
- **상태 관리**: \`pressed\` / \`onPressedChange\`를 통한 선택 상태 관리
- **아이콘 지원**: 텍스트와 함께 아이콘 사용 가능

## 사용 예시

\`\`\`tsx
import { useState } from 'react';
import { Chip } from './chip';

function Example() {
  const [selected, setSelected] = useState(false);

  return (
    <Chip pressed={selected} onPressedChange={setSelected} size="md">
      선택 가능한 칩
    </Chip>
  );
}
\`\`\`
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"칩의 크기 (xs: 초소형, sm: 작은 크기, md: 중간 크기, lg: 큰 크기). Badge와 동일한 스케일입니다.",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'xs'"},category:"스타일"}},color:{control:"select",options:["primary","secondary","success","warning","danger","info","urgent"],description:"강조 색상. hover/focus 강조색과 선택(pressed) 시 채움색을 결정합니다. 비선택 기본 상태(회색 테두리·secondary 텍스트)는 모든 색상이 동일합니다. `urgent`는 긴급 전용 솔리드 강조색입니다.",table:{type:{summary:"'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'urgent'"},defaultValue:{summary:"primary"},category:"스타일"}},pressed:{control:"boolean",description:"선택 상태 (controlled). onPressedChange와 함께 사용해 외부에서 상태를 제어합니다.",table:{type:{summary:"boolean"},category:"상태"}},defaultPressed:{control:"boolean",description:"초기 선택 상태 (uncontrolled). 내부에서 토글 상태를 관리할 때 사용합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},onPressedChange:{action:"pressedChange",description:"선택 상태가 바뀔 때 호출되는 콜백",table:{type:{summary:"(pressed: boolean) => void"},category:"이벤트"}},disabled:{control:"boolean",description:"비활성화 여부 (true일 때 클릭 불가)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},children:{control:"text",description:"칩 내용 (텍스트 또는 아이콘 + 텍스트)",table:{type:{summary:"ReactNode"},category:"내용"}}},args:{children:"반도체"}},r={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Chip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 size, disabled 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Size**: 칩의 크기를 조정합니다. `xs`는 초소형, `sm`은 작은 크기, `md`는 중간 크기, `lg`는 큰 크기입니다.\n- **Disabled**: `true`로 설정하면 칩이 비활성화되어 선택할 수 없습니다.\n        "}}},args:{children:"Chip"}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 칩"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(s,{children:"React"}),e.jsx(s,{children:"Vue"}),e.jsx(s,{children:"Angular"}),e.jsx(s,{children:"Svelte"}),e.jsx(s,{children:"Next.js"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"프로그래밍 언어"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(s,{children:"JavaScript"}),e.jsx(s,{children:"TypeScript"}),e.jsx(s,{children:"Python"}),e.jsx(s,{children:"Go"}),e.jsx(s,{children:"Rust"})]})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Extra Small Size (xs)"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx(s,{size:"xs",children:"Extra Small Chip"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Small Size (sm)"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx(s,{size:"sm",children:"Small Chip"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Medium Size (md)"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx(s,{size:"md",children:"Medium Chip"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Large Size (lg)"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx(s,{size:"lg",children:"Large Chip"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Size Comparison"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(s,{size:"xs",children:"Extra Small"}),e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{size:"md",children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"})]})]})]})},j=["primary","secondary","success","warning","danger","info","urgent"],m={parameters:{docs:{description:{story:`
\`color\` prop으로 칩의 강조 색상을 지정합니다. Badge와 동일한 7종(primary·secondary·success·warning·danger·info·urgent)을 제공합니다.

- **비선택 상태**: 모든 색상이 동일하게 회색 테두리 + secondary 텍스트로 표시됩니다.
- **hover / focus**: 지정한 색상으로 테두리·텍스트가 강조됩니다.
- **선택(pressed) 상태**: 해당 색상으로 채워집니다.
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 (비선택)"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:j.map(a=>e.jsx(s,{color:a,children:a},a))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"선택 (pressed)"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:j.map(a=>e.jsx(s,{color:a,defaultPressed:!0,children:a},a))})]})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"아이콘과 함께"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(s,{size:"md",children:[e.jsx(F,{className:"size-4"}),"완료"]}),e.jsxs(s,{size:"md",children:[e.jsx(h,{className:"size-4"}),"즐겨찾기"]}),e.jsxs(s,{size:"md",children:[e.jsx(v,{className:"size-4"}),"좋아요"]}),e.jsxs(s,{size:"md",children:[e.jsx(K,{className:"size-4"}),"프로필"]}),e.jsxs(s,{size:"md",children:[e.jsx(Q,{className:"size-4"}),"설정"]})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"아이콘만"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(s,{size:"md",children:[e.jsx(l,{className:"size-4"}),"태그"]}),e.jsxs(s,{size:"md",children:[e.jsx(h,{className:"size-4"}),"중요"]}),e.jsxs(s,{size:"md",children:[e.jsx(v,{className:"size-4"}),"관심"]})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"삭제 버튼 포함"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(s,{size:"md",children:[e.jsx(l,{className:"size-3.5"}),"React",e.jsx(i,{className:"size-3.5"})]}),e.jsxs(s,{size:"md",children:[e.jsx(l,{className:"size-3.5"}),"Vue",e.jsx(i,{className:"size-3.5"})]}),e.jsxs(s,{size:"md",children:[e.jsx(l,{className:"size-3.5"}),"TypeScript",e.jsx(i,{className:"size-3.5"})]})]})]})]})};function $(){const[a,G]=n.useState(!1),[f,J]=n.useState(!0),[g,W]=n.useState(!1),[N,q]=n.useState(!1);return e.jsxs("div",{className:"flex w-[500px] flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Interactive Chips"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(s,{pressed:a,onPressedChange:G,children:"React"}),e.jsx(s,{pressed:f,onPressedChange:J,children:"Vue"}),e.jsx(s,{pressed:g,onPressedChange:W,children:"Angular"}),e.jsx(s,{pressed:N,onPressedChange:q,children:"Svelte"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"선택 상태"}),e.jsxs("div",{className:"text-m2-secondary text-sm",children:[e.jsxs("div",{children:["React: ",a?"선택됨":"선택 안 됨"]}),e.jsxs("div",{children:["Vue: ",f?"선택됨":"선택 안 됨"]}),e.jsxs("div",{children:["Angular: ",g?"선택됨":"선택 안 됨"]}),e.jsxs("div",{children:["Svelte: ",N?"선택됨":"선택 안 됨"]})]})]})]})}const x={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. \`pressed\` / \`onPressedChange\`를 통해 칩의 선택 상태를 제어합니다.

## 특징

- 클릭하여 선택/해제 가능
- 선택된 칩은 primary 색상으로 강조 표시
- 여러 칩을 독립적으로 선택 가능
- \`pressed\` + \`onPressedChange\`를 통한 상태 관리
        `}}},render:()=>e.jsx($,{})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Normal State"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx(s,{children:"Normal"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Disabled State"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx(s,{disabled:!0,children:"Disabled"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Pressed State (Click to toggle)"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx(s,{defaultPressed:!0,children:"Pressed"})})]})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"예시"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{size:"sm",children:"전체 15명"}),e.jsx(s,{size:"sm",children:"석사 8명"}),e.jsx(s,{size:"sm",children:"박사 7명"}),e.jsx(s,{size:"sm",children:"통합 2명"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"카테고리 필터"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{size:"md",children:"전체"}),e.jsx(s,{size:"md",children:"프론트엔드"}),e.jsx(s,{size:"md",children:"백엔드"}),e.jsx(s,{size:"md",children:"데이터베이스"}),e.jsx(s,{size:"md",children:"인프라"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"삭제 가능한 태그"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(s,{size:"md",children:[e.jsx(l,{className:"size-3.5"}),"디자인",e.jsx(i,{className:"size-3.5"})]}),e.jsxs(s,{size:"md",children:[e.jsx(l,{className:"size-3.5"}),"개발",e.jsx(i,{className:"size-3.5"})]}),e.jsxs(s,{size:"md",children:[e.jsx(l,{className:"size-3.5"}),"마케팅",e.jsx(i,{className:"size-3.5"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"상태 칩"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(s,{size:"lg",children:[e.jsx(h,{className:"size-4"}),"즐겨찾기"]}),e.jsx(s,{size:"lg",children:"진행중"}),e.jsx(s,{size:"lg",children:"완료"}),e.jsx(s,{size:"lg",children:"보류"})]})]})]})};var C,z,u;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Chip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 size, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Size**: 칩의 크기를 조정합니다. \\\`xs\\\`는 초소형, \\\`sm\\\`은 작은 크기, \\\`md\\\`는 중간 크기, \\\`lg\\\`는 큰 크기입니다.
- **Disabled**: \\\`true\\\`로 설정하면 칩이 비활성화되어 선택할 수 없습니다.
        \`
      }
    }
  },
  args: {
    children: 'Chip'
  }
}`,...(u=(z=r.parameters)==null?void 0:z.docs)==null?void 0:u.source}}};var y,S,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 칩</h3>
        <div className="flex flex-wrap gap-3">
          <Chip>React</Chip>
          <Chip>Vue</Chip>
          <Chip>Angular</Chip>
          <Chip>Svelte</Chip>
          <Chip>Next.js</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">프로그래밍 언어</h3>
        <div className="flex flex-wrap gap-3">
          <Chip>JavaScript</Chip>
          <Chip>TypeScript</Chip>
          <Chip>Python</Chip>
          <Chip>Go</Chip>
          <Chip>Rust</Chip>
        </div>
      </div>
    </div>
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var w,P,R;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Extra Small Size (xs)</h3>
        <div className="flex flex-wrap gap-3">
          <Chip size="xs">Extra Small Chip</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Small Size (sm)</h3>
        <div className="flex flex-wrap gap-3">
          <Chip size="sm">Small Chip</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Medium Size (md)</h3>
        <div className="flex flex-wrap gap-3">
          <Chip size="md">Medium Chip</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Large Size (lg)</h3>
        <div className="flex flex-wrap gap-3">
          <Chip size="lg">Large Chip</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Size Comparison</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Chip size="xs">Extra Small</Chip>
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
        </div>
      </div>
    </div>
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,E,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`color\\\` prop으로 칩의 강조 색상을 지정합니다. Badge와 동일한 7종(primary·secondary·success·warning·danger·info·urgent)을 제공합니다.

- **비선택 상태**: 모든 색상이 동일하게 회색 테두리 + secondary 텍스트로 표시됩니다.
- **hover / focus**: 지정한 색상으로 테두리·텍스트가 강조됩니다.
- **선택(pressed) 상태**: 해당 색상으로 채워집니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 (비선택)</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map(color => <Chip key={color} color={color}>
              {color}
            </Chip>)}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">선택 (pressed)</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map(color => <Chip key={color} color={color} defaultPressed>
              {color}
            </Chip>)}
        </div>
      </div>
    </div>
}`,...(V=(E=m.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var k,L,I;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">아이콘과 함께</h3>
        <div className="flex flex-wrap gap-3">
          <Chip size="md">
            <Check className="size-4" />
            완료
          </Chip>
          <Chip size="md">
            <Star className="size-4" />
            즐겨찾기
          </Chip>
          <Chip size="md">
            <Heart className="size-4" />
            좋아요
          </Chip>
          <Chip size="md">
            <User className="size-4" />
            프로필
          </Chip>
          <Chip size="md">
            <Settings className="size-4" />
            설정
          </Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">아이콘만</h3>
        <div className="flex flex-wrap gap-3">
          <Chip size="md">
            <Tag className="size-4" />
            태그
          </Chip>
          <Chip size="md">
            <Star className="size-4" />
            중요
          </Chip>
          <Chip size="md">
            <Heart className="size-4" />
            관심
          </Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">삭제 버튼 포함</h3>
        <div className="flex flex-wrap gap-3">
          <Chip size="md">
            <Tag className="size-3.5" />
            React
            <X className="size-3.5" />
          </Chip>
          <Chip size="md">
            <Tag className="size-3.5" />
            Vue
            <X className="size-3.5" />
          </Chip>
          <Chip size="md">
            <Tag className="size-3.5" />
            TypeScript
            <X className="size-3.5" />
          </Chip>
        </div>
      </div>
    </div>
}`,...(I=(L=t.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var M,B,O;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. \\\`pressed\\\` / \\\`onPressedChange\\\`를 통해 칩의 선택 상태를 제어합니다.

## 특징

- 클릭하여 선택/해제 가능
- 선택된 칩은 primary 색상으로 강조 표시
- 여러 칩을 독립적으로 선택 가능
- \\\`pressed\\\` + \\\`onPressedChange\\\`를 통한 상태 관리
        \`
      }
    }
  },
  render: () => <InteractiveChips />
}`,...(O=(B=x.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var X,A,D;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Normal State</h3>
        <div className="flex flex-wrap gap-3">
          <Chip>Normal</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Disabled State</h3>
        <div className="flex flex-wrap gap-3">
          <Chip disabled>Disabled</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Pressed State (Click to toggle)</h3>
        <div className="flex flex-wrap gap-3">
          <Chip defaultPressed>Pressed</Chip>
        </div>
      </div>
    </div>
}`,...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,U,_;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">예시</h3>
        <div className="flex flex-wrap gap-2">
          <Chip size="sm">전체 15명</Chip>
          <Chip size="sm">석사 8명</Chip>
          <Chip size="sm">박사 7명</Chip>
          <Chip size="sm">통합 2명</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">카테고리 필터</h3>
        <div className="flex flex-wrap gap-2">
          <Chip size="md">전체</Chip>
          <Chip size="md">프론트엔드</Chip>
          <Chip size="md">백엔드</Chip>
          <Chip size="md">데이터베이스</Chip>
          <Chip size="md">인프라</Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">삭제 가능한 태그</h3>
        <div className="flex flex-wrap gap-2">
          <Chip size="md">
            <Tag className="size-3.5" />
            디자인
            <X className="size-3.5" />
          </Chip>
          <Chip size="md">
            <Tag className="size-3.5" />
            개발
            <X className="size-3.5" />
          </Chip>
          <Chip size="md">
            <Tag className="size-3.5" />
            마케팅
            <X className="size-3.5" />
          </Chip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">상태 칩</h3>
        <div className="flex flex-wrap gap-2">
          <Chip size="lg">
            <Star className="size-4" />
            즐겨찾기
          </Chip>
          <Chip size="lg">진행중</Chip>
          <Chip size="lg">완료</Chip>
          <Chip size="lg">보류</Chip>
        </div>
      </div>
    </div>
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const ve=["Playground","Basic","Sizes","Colors","WithIcons","Interactive","States","Examples"];export{c as Basic,m as Colors,p as Examples,x as Interactive,r as Playground,d as Sizes,o as States,t as WithIcons,ve as __namedExportsOrder,Ne as default};
