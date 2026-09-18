import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./spinner-CSECq83x.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./index-OJ7QbjDu.js";const w={title:"M2/Spinner",component:s,parameters:{layout:"centered",docs:{description:{component:`
### 로딩 인디케이터 컴포넌트

Spinner 컴포넌트는 비동기 작업(데이터 로딩, 파일 업로드, API 요청 등)이 진행 중임을 사용자에게 알리는 로딩 인디케이터입니다.
lucide-react의 \`Loader2\` 아이콘을 기반으로 회전 애니메이션을 적용합니다.

## 주요 기능

- **세 가지 크기**: \`sm\`(16px), \`md\`(24px), \`lg\`(32px)로 맥락에 맞는 크기 선택 가능
- **접근성**: \`role="status"\`와 \`aria-label="Loading"\`이 내장되어 스크린 리더 지원
- **색상 상속**: 색상을 별도로 지정하지 않고 부모 요소의 \`text-*\` 클래스(currentColor)를 자동 상속

## 사용 예시

\`\`\`tsx
import { Spinner } from '../spinner';

// 기본 사용
<Spinner />

// 크기 지정
<Spinner size="sm" />
<Spinner size="lg" />

// 색상은 부모 text-* 클래스로 상속
<span className="text-m2-primary">
  <Spinner size="md" />
</span>

// 로딩 텍스트와 함께
<div className="flex items-center gap-2">
  <Spinner size="sm" />
  <span>불러오는 중...</span>
</div>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"스피너의 크기. sm(16px)은 버튼·인라인 텍스트, md(24px)는 일반 영역, lg(32px)는 페이지·섹션 전체 로딩에 적합합니다.",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"},category:"스타일"}},className:{control:"text",description:"추가 Tailwind 클래스. 색상은 부모 text-* 클래스로 상속되므로 className으로 직접 지정할 수도 있습니다.",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"스타일"}}}},a={parameters:{controls:{disable:!1},docs:{description:{story:"\n모든 속성을 컨트롤 패널에서 조작할 수 있습니다.\n\n## 사용 팁\n\n- **Size**: `sm`은 버튼 내부처럼 공간이 좁은 곳, `md`는 카드·패널의 기본 로딩 상태, `lg`는 페이지 단위 로딩에 사용합니다.\n- **색상**: 별도 prop이 없고 부모의 `text-*` 클래스를 자동으로 상속합니다. 스피너를 색상이 있는 컨테이너 안에 넣거나 `className`으로 직접 `text-m2-primary` 등을 지정할 수 있습니다.\n        "}}},args:{size:"md"}},t={parameters:{docs:{description:{story:"세 가지 크기를 개별 및 비교 형태로 확인합니다."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Small (sm) — 16px"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-m2-secondary text-sm",children:"버튼·인라인 텍스트 옆에 사용"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Medium (md) — 24px"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:"md"}),e.jsx("span",{className:"text-m2-secondary text-sm",children:"카드·패널의 기본 로딩 상태"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Large (lg) — 32px"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-m2-secondary text-sm",children:"페이지·섹션 전체 로딩에 사용"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"크기 비교"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]})]})]})},m={parameters:{docs:{description:{story:"Spinner는 별도 색상 prop이 없으며 부모 요소의 `text-*` 클래스(currentColor)를 자동 상속합니다. m2 토큰으로 색상을 제어하는 예시입니다."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Primary"}),e.jsx("div",{className:"text-m2-primary",children:e.jsx(s,{size:"md"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Success"}),e.jsx("div",{className:"text-m2-success",children:e.jsx(s,{size:"md"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Danger"}),e.jsx("div",{className:"text-m2-danger",children:e.jsx(s,{size:"md"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"색상 비교"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:"text-m2-primary",children:e.jsx(s,{size:"md"})}),e.jsx("span",{className:"text-m2-secondary text-xs",children:"primary"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:"text-m2-success",children:e.jsx(s,{size:"md"})}),e.jsx("span",{className:"text-m2-secondary text-xs",children:"success"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:"text-m2-danger",children:e.jsx(s,{size:"md"})}),e.jsx("span",{className:"text-m2-secondary text-xs",children:"danger"})]})]})]})]})},l={parameters:{layout:"padded",docs:{description:{story:"실제 UI에서 Spinner가 사용되는 대표적인 시나리오입니다."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"인라인 로딩 텍스트"}),e.jsxs("div",{className:"text-m2-secondary flex items-center gap-2",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-sm",children:"불러오는 중..."})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"버튼 내 로딩 상태"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("button",{disabled:!0,className:"bg-m2-surface-hover text-m2-secondary flex items-center gap-2 rounded-md px-4 py-2 text-sm",children:[e.jsx(s,{size:"sm"}),"저장 중..."]}),e.jsxs("button",{disabled:!0,className:"bg-m2-surface-hover text-m2-secondary flex items-center gap-2 rounded-md px-4 py-2 text-sm",children:[e.jsx(s,{size:"sm"}),"분석 중..."]})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"카드 중앙 로딩"}),e.jsx("div",{className:"border-m2-border bg-m2-surface flex h-40 w-80 items-center justify-center rounded-lg border",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-m2-secondary text-sm",children:"특허 분석 결과를 불러오는 중입니다"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"목록 아이템 로딩"}),e.jsxs("div",{className:"border-m2-border bg-m2-surface flex w-80 flex-col gap-2 rounded-lg border p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-m2-secondary text-sm",children:"청구항 초안 생성"}),e.jsx(s,{size:"sm"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-m2-secondary text-sm",children:"명세서 분석"}),e.jsx(s,{size:"sm"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-m2-secondary text-sm",children:"선행기술 검색"}),e.jsx(s,{size:"sm"})]})]})]})]})};var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
모든 속성을 컨트롤 패널에서 조작할 수 있습니다.

## 사용 팁

- **Size**: \\\`sm\\\`은 버튼 내부처럼 공간이 좁은 곳, \\\`md\\\`는 카드·패널의 기본 로딩 상태, \\\`lg\\\`는 페이지 단위 로딩에 사용합니다.
- **색상**: 별도 prop이 없고 부모의 \\\`text-*\\\` 클래스를 자동으로 상속합니다. 스피너를 색상이 있는 컨테이너 안에 넣거나 \\\`className\\\`으로 직접 \\\`text-m2-primary\\\` 등을 지정할 수 있습니다.
        \`
      }
    }
  },
  args: {
    size: 'md'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,d,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '세 가지 크기를 개별 및 비교 형태로 확인합니다.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Small (sm) — 16px</h3>
        <div className="flex items-center gap-3">
          <Spinner size="sm" />
          <span className="text-m2-secondary text-sm">버튼·인라인 텍스트 옆에 사용</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Medium (md) — 24px</h3>
        <div className="flex items-center gap-3">
          <Spinner size="md" />
          <span className="text-m2-secondary text-sm">카드·패널의 기본 로딩 상태</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Large (lg) — 32px</h3>
        <div className="flex items-center gap-3">
          <Spinner size="lg" />
          <span className="text-m2-secondary text-sm">페이지·섹션 전체 로딩에 사용</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">크기 비교</h3>
        <div className="flex items-center gap-4">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </div>
    </div>
}`,...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var o,p,f;m.parameters={...m.parameters,docs:{...(o=m.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Spinner는 별도 색상 prop이 없으며 부모 요소의 \`text-*\` 클래스(currentColor)를 자동 상속합니다. m2 토큰으로 색상을 제어하는 예시입니다.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Primary</h3>
        <div className="text-m2-primary">
          <Spinner size="md" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Success</h3>
        <div className="text-m2-success">
          <Spinner size="md" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Danger</h3>
        <div className="text-m2-danger">
          <Spinner size="md" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">색상 비교</h3>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <div className="text-m2-primary">
              <Spinner size="md" />
            </div>
            <span className="text-m2-secondary text-xs">primary</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-m2-success">
              <Spinner size="md" />
            </div>
            <span className="text-m2-secondary text-xs">success</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-m2-danger">
              <Spinner size="md" />
            </div>
            <span className="text-m2-secondary text-xs">danger</span>
          </div>
        </div>
      </div>
    </div>
}`,...(f=(p=m.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,N,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '실제 UI에서 Spinner가 사용되는 대표적인 시나리오입니다.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">인라인 로딩 텍스트</h3>
        <div className="text-m2-secondary flex items-center gap-2">
          <Spinner size="sm" />
          <span className="text-sm">불러오는 중...</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">버튼 내 로딩 상태</h3>
        <div className="flex gap-3">
          <button disabled className="bg-m2-surface-hover text-m2-secondary flex items-center gap-2 rounded-md px-4 py-2 text-sm">
            <Spinner size="sm" />
            저장 중...
          </button>
          <button disabled className="bg-m2-surface-hover text-m2-secondary flex items-center gap-2 rounded-md px-4 py-2 text-sm">
            <Spinner size="sm" />
            분석 중...
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">카드 중앙 로딩</h3>
        <div className="border-m2-border bg-m2-surface flex h-40 w-80 items-center justify-center rounded-lg border">
          <div className="flex flex-col items-center gap-3">
            <Spinner size="lg" />
            <span className="text-m2-secondary text-sm">특허 분석 결과를 불러오는 중입니다</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">목록 아이템 로딩</h3>
        <div className="border-m2-border bg-m2-surface flex w-80 flex-col gap-2 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <span className="text-m2-secondary text-sm">청구항 초안 생성</span>
            <Spinner size="sm" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-m2-secondary text-sm">명세서 분석</span>
            <Spinner size="sm" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-m2-secondary text-sm">선행기술 검색</span>
            <Spinner size="sm" />
          </div>
        </div>
      </div>
    </div>
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const C=["Playground","Sizes","WithColor","InContext"];export{l as InContext,a as Playground,t as Sizes,m as WithColor,C as __namedExportsOrder,w as default};
