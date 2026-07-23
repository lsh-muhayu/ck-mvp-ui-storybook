import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./button-CkQv11My.js";import{B as e}from"./bell-DDz_Obdd.js";import{L as d,T as M}from"./trash-2-CdRTcBnp.js";import{D as W}from"./download-CtE9xlUU.js";import{c as X}from"./createLucideIcon-BRUIOxYu.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-OJ7QbjDu.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],G=X("circle-pause",I),H={title:"M2/Button",component:n,parameters:{layout:"centered",docs:{description:{component:'\n### 사용자 액션을 위한 인터랙티브 버튼 컴포넌트\n\n버튼 컴포넌트는 사용자 인터페이스에서 액션을 트리거하는 데 사용됩니다. 다양한 크기, 색상 및 변형을 지원합니다.\n\n## 주요 기능\n\n- **다양한 사이즈**: `xs`, `sm`, `md`, `lg`, `icon-xs`, `icon-sm`, `icon-md`, `icon-lg` 여덟 가지 크기 옵션 제공\n- **여러 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning`, `gk` 색상 지원 (`gk`는 ck-ui 브랜드 컬러)\n- **네 가지 스타일 변형**: `filled` (채워진), `outlined` (테두리), `text` (텍스트), `soft` (옅은 틴트) 스타일\n- **로딩 상태 표시**: 비동기 작업 중 로딩 스피너 자동 표시\n- **아이콘 버튼 지원**: 아이콘과 텍스트를 함께 사용 가능\n- **접근성 지원**: `disabled` 상태 및 `aria-busy` 속성으로 접근성 향상\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```tsx\n<Button color="primary" variant="filled" size="md">\n  버튼 텍스트\n</Button>\n```\n        '}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outlined","text","soft"],description:"버튼의 스타일 변형. `filled`는 배경이 채워진 스타일, `outlined`는 테두리만 있는 스타일, `text`는 텍스트만 있는 스타일, `soft`는 옅은 틴트 배경에 채도 있는 글자를 쓰는 스타일입니다.",table:{type:{summary:"'filled' | 'outlined' | 'text' | 'soft'"},defaultValue:{summary:"'filled'"},category:"스타일"}},color:{control:"select",options:["primary","secondary","danger","success","warning","gk"],description:"버튼의 색상. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 삭제나 위험한 작업, `warning`은 경고나 주의가 필요한 작업). `gk`는 ck-ui 브랜드(보라) 컬러입니다.",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'gk'"},defaultValue:{summary:"'primary'"},category:"스타일"}},size:{control:"select",options:["xs","sm","md","lg","icon-xs","icon-sm","icon-md","icon-lg"],description:"버튼의 크기. `xs`는 매우 작은 버튼, `sm`는 작은 버튼, `md`는 기본 크기, `lg`는 큰 버튼, `icon-xs`~`icon-lg`는 아이콘 전용 정사각형 버튼입니다.",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg' | 'icon-xs' | 'icon-sm' | 'icon-md' | 'icon-lg'"},defaultValue:{summary:"'md'"},category:"스타일"}},disabled:{control:"boolean",description:"버튼 비활성화 여부. true일 때 클릭이 불가능하며 시각적으로 흐리게 표시됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},loading:{control:"boolean",description:"로딩 상태 여부. 로딩 중일 때는 스피너가 표시되며 자동으로 disabled 상태가 됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},children:{control:"text",description:"버튼 내용 (텍스트 또는 아이콘 + 텍스트)",table:{type:{summary:"ReactNode"},category:"내용"}}},args:{children:"버튼"}},l={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Button 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 variant, color, size, disabled, loading 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Variant**: 버튼의 스타일을 선택합니다. `filled`는 배경이 채워진 스타일, `outlined`는 테두리만 있는 스타일, `text`는 텍스트만 있는 스타일입니다.\n- **Color**: 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 삭제·위험 작업에 사용, `warning`은 경고나 주의가 필요한 작업에 사용).\n- **Size**: 버튼의 크기를 조정합니다. `xs`는 매우 작은 버튼, `sm`는 작은 버튼, `md`는 기본 크기, `lg`는 큰 버튼, `icon-xs`~`icon-lg`는 아이콘 전용 버튼입니다.\n- **Loading**: `true`로 설정하면 버튼이 로딩 상태가 되며 자동으로 비활성화됩니다.\n        "}}},args:{variant:"filled",color:"primary",size:"md",children:"버튼"}},r={render:()=>a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Filled Variant"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{variant:"filled",color:"primary",children:"Primary"}),a.jsx(n,{variant:"filled",color:"secondary",children:"Secondary"}),a.jsx(n,{variant:"filled",color:"danger",children:"Danger"}),a.jsx(n,{variant:"filled",color:"success",children:"Success"}),a.jsx(n,{variant:"filled",color:"warning",children:"Warning"}),a.jsx(n,{variant:"filled",color:"gk",children:"GK"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Outlined Variant"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{variant:"outlined",color:"primary",children:"Primary"}),a.jsx(n,{variant:"outlined",color:"secondary",children:"Secondary"}),a.jsx(n,{variant:"outlined",color:"danger",children:"Danger"}),a.jsx(n,{variant:"outlined",color:"success",children:"Success"}),a.jsx(n,{variant:"outlined",color:"warning",children:"Warning"}),a.jsx(n,{variant:"outlined",color:"gk",children:"GK"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Text Variant"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{variant:"text",color:"primary",children:"Primary"}),a.jsx(n,{variant:"text",color:"secondary",children:"Secondary"}),a.jsx(n,{variant:"text",color:"danger",children:"Danger"}),a.jsx(n,{variant:"text",color:"success",children:"Success"}),a.jsx(n,{variant:"text",color:"warning",children:"Warning"}),a.jsx(n,{variant:"text",color:"gk",children:"GK"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Soft Variant"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{variant:"soft",color:"primary",children:"Primary"}),a.jsx(n,{variant:"soft",color:"secondary",children:"Secondary"}),a.jsx(n,{variant:"soft",color:"danger",children:"Danger"}),a.jsx(n,{variant:"soft",color:"success",children:"Success"}),a.jsx(n,{variant:"soft",color:"warning",children:"Warning"}),a.jsx(n,{variant:"soft",color:"gk",children:"GK"})]})]})]})},i={render:()=>a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"XSmall (xs)"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{size:"xs",variant:"filled",color:"primary",children:"XSmall Button"}),a.jsx(n,{size:"xs",variant:"outlined",color:"primary",children:"XSmall Button"}),a.jsx(n,{size:"xs",variant:"text",color:"primary",children:"XSmall Button"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Small (sm)"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{size:"sm",variant:"filled",color:"primary",children:"Small Button"}),a.jsx(n,{size:"sm",variant:"outlined",color:"primary",children:"Small Button"}),a.jsx(n,{size:"sm",variant:"text",color:"primary",children:"Small Button"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Medium (md)"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{size:"md",variant:"filled",color:"primary",children:"Medium Button"}),a.jsx(n,{size:"md",variant:"outlined",color:"primary",children:"Medium Button"}),a.jsx(n,{size:"md",variant:"text",color:"primary",children:"Medium Button"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Large (lg)"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{size:"lg",variant:"filled",color:"primary",children:"Large Button"}),a.jsx(n,{size:"lg",variant:"outlined",color:"primary",children:"Large Button"}),a.jsx(n,{size:"lg",variant:"text",color:"primary",children:"Large Button"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Icon XSmall (icon-xs)"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{size:"icon-xs",variant:"filled",color:"primary",children:a.jsx(e,{className:"size-3"})}),a.jsx(n,{size:"icon-xs",variant:"outlined",color:"primary",children:a.jsx(e,{className:"size-3"})}),a.jsx(n,{size:"icon-xs",variant:"text",color:"primary",children:a.jsx(e,{className:"size-3"})})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Icon Small (icon-sm)"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{size:"icon-sm",variant:"filled",color:"primary",children:a.jsx(e,{className:"size-4"})}),a.jsx(n,{size:"icon-sm",variant:"outlined",color:"primary",children:a.jsx(e,{className:"size-4"})}),a.jsx(n,{size:"icon-sm",variant:"text",color:"primary",children:a.jsx(e,{className:"size-4"})})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Icon Medium (icon-md)"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{size:"icon-md",variant:"filled",color:"primary",children:a.jsx(e,{className:"size-5"})}),a.jsx(n,{size:"icon-md",variant:"outlined",color:"primary",children:a.jsx(e,{className:"size-5"})}),a.jsx(n,{size:"icon-md",variant:"text",color:"primary",children:a.jsx(e,{className:"size-5"})})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Icon Large (icon-lg)"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{size:"icon-lg",variant:"filled",color:"primary",children:a.jsx(e,{className:"size-6"})}),a.jsx(n,{size:"icon-lg",variant:"outlined",color:"primary",children:a.jsx(e,{className:"size-6"})}),a.jsx(n,{size:"icon-lg",variant:"text",color:"primary",children:a.jsx(e,{className:"size-6"})})]})]})]})},t={render:()=>a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Normal"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{variant:"filled",color:"primary",children:"Normal Button"}),a.jsx(n,{variant:"outlined",color:"primary",children:"Normal Button"}),a.jsx(n,{variant:"text",color:"primary",children:"Normal Button"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Disabled"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{variant:"filled",color:"primary",disabled:!0,children:"Disabled Button"}),a.jsx(n,{variant:"outlined",color:"primary",disabled:!0,children:"Disabled Button"}),a.jsx(n,{variant:"text",color:"primary",disabled:!0,children:"Disabled Button"})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Loading"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{variant:"filled",color:"primary",loading:!0,children:"Loading Button"}),a.jsx(n,{variant:"outlined",color:"primary",loading:!0,children:"Loading Button"}),a.jsx(n,{variant:"text",color:"primary",loading:!0,children:"Loading Button"})]})]})]})},s={render:()=>a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Loading - All Sizes"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[a.jsx(n,{size:"xs",variant:"filled",color:"primary",loading:!0,children:"XSmall Loading"}),a.jsx(n,{size:"sm",variant:"filled",color:"primary",loading:!0,children:"Small Loading"}),a.jsx(n,{size:"md",variant:"filled",color:"primary",loading:!0,children:"Medium Loading"}),a.jsx(n,{size:"lg",variant:"filled",color:"primary",loading:!0,children:"Large Loading"}),a.jsx(n,{size:"icon-md",variant:"filled",color:"primary",loading:!0,children:a.jsx(e,{className:"size-5"})})]})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Loading - All Colors"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{variant:"filled",color:"primary",loading:!0,children:"Primary"}),a.jsx(n,{variant:"filled",color:"secondary",loading:!0,children:"Secondary"}),a.jsx(n,{variant:"filled",color:"danger",loading:!0,children:"Danger"}),a.jsx(n,{variant:"filled",color:"success",loading:!0,children:"Success"}),a.jsx(n,{variant:"filled",color:"warning",loading:!0,children:"Warning"}),a.jsx(n,{variant:"filled",color:"gk",loading:!0,children:"GK"})]})]})]})},o={render:()=>a.jsx("div",{className:"flex flex-col gap-6",children:a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsxs(n,{variant:"filled",color:"primary",children:[a.jsx(d,{className:"size-4"}),"로그아웃"]}),a.jsxs(n,{variant:"outlined",color:"primary",children:[a.jsx(d,{className:"size-4"}),"로그아웃"]}),a.jsxs(n,{variant:"text",color:"primary",children:[a.jsx(d,{className:"size-4"}),"로그아웃"]})]})})},c={render:()=>a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{color:"primary",variant:"filled",children:"Filled Primary"}),a.jsx(n,{color:"primary",variant:"outlined",children:"Outlined Primary"}),a.jsx(n,{color:"primary",variant:"text",children:"Text Primary"})]}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{color:"primary",variant:"filled",size:"lg",children:"✅ 승인 (자동 Zoom 생성)"}),a.jsx(n,{color:"secondary",variant:"outlined",size:"lg",children:"거절"})]}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{color:"secondary",variant:"outlined",size:"lg",children:"취소"}),a.jsx(n,{color:"success",variant:"filled",size:"lg",children:"생성 완료"})]}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{color:"primary",variant:"filled",size:"md",children:"선택 학생에게 알림 발송"}),a.jsx(n,{color:"primary",variant:"filled",size:"md",children:"첫 지도 계획 추가하기"})]}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{color:"primary",variant:"filled",size:"md",children:"검색"}),a.jsx(n,{color:"secondary",variant:"filled",size:"md",children:"초기화"})]}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{color:"primary",variant:"outlined",size:"xs",children:"위원"}),a.jsx(n,{color:"success",variant:"outlined",size:"xs",children:"위원장"})]}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(n,{color:"danger",variant:"filled",size:"md",children:"▶ 재생"}),a.jsx(n,{color:"secondary",variant:"filled",size:"md",children:"⬇ 다운로드"})]}),a.jsx("div",{className:"flex flex-wrap gap-4",children:a.jsxs(n,{color:"secondary",variant:"text",size:"md",children:[a.jsx(d,{className:"size-4"})," 로그아웃"]})}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsxs(n,{color:"primary",variant:"filled",size:"md",children:[a.jsx(W,{className:"size-4"})," 권한 저장"]}),a.jsxs(n,{color:"warning",variant:"filled",size:"md",children:[a.jsx(G,{className:"size-4"})," 권한 중지"]}),a.jsxs(n,{color:"danger",variant:"filled",size:"md",children:[a.jsx(M,{className:"size-4"})," 완전 삭제"]})]}),a.jsx("div",{className:"flex flex-wrap gap-4",children:a.jsx(n,{color:"secondary",variant:"text",size:"icon-md",children:a.jsx(e,{className:"size-5"})})})]})};var m,x,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Button 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 variant, color, size, disabled, loading 등의 속성을 변경해보세요.

## 사용 팁

- **Variant**: 버튼의 스타일을 선택합니다. \\\`filled\\\`는 배경이 채워진 스타일, \\\`outlined\\\`는 테두리만 있는 스타일, \\\`text\\\`는 텍스트만 있는 스타일입니다.
- **Color**: 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`danger\\\`는 삭제·위험 작업에 사용, \\\`warning\\\`은 경고나 주의가 필요한 작업에 사용).
- **Size**: 버튼의 크기를 조정합니다. \\\`xs\\\`는 매우 작은 버튼, \\\`sm\\\`는 작은 버튼, \\\`md\\\`는 기본 크기, \\\`lg\\\`는 큰 버튼, \\\`icon-xs\\\`~\\\`icon-lg\\\`는 아이콘 전용 버튼입니다.
- **Loading**: \\\`true\\\`로 설정하면 버튼이 로딩 상태가 되며 자동으로 비활성화됩니다.
        \`
      }
    }
  },
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
    children: '버튼'
  }
}`,...(u=(x=l.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var f,p,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Filled Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="filled" color="primary">
            Primary
          </Button>
          <Button variant="filled" color="secondary">
            Secondary
          </Button>
          <Button variant="filled" color="danger">
            Danger
          </Button>
          <Button variant="filled" color="success">
            Success
          </Button>
          <Button variant="filled" color="warning">
            Warning
          </Button>
          <Button variant="filled" color="gk">
            GK
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Outlined Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="danger">
            Danger
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="gk">
            GK
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Text Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="danger">
            Danger
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="gk">
            GK
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Soft Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="soft" color="primary">
            Primary
          </Button>
          <Button variant="soft" color="secondary">
            Secondary
          </Button>
          <Button variant="soft" color="danger">
            Danger
          </Button>
          <Button variant="soft" color="success">
            Success
          </Button>
          <Button variant="soft" color="warning">
            Warning
          </Button>
          <Button variant="soft" color="gk">
            GK
          </Button>
        </div>
      </div>
    </div>
}`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,B,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">XSmall (xs)</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="xs" variant="filled" color="primary">
            XSmall Button
          </Button>
          <Button size="xs" variant="outlined" color="primary">
            XSmall Button
          </Button>
          <Button size="xs" variant="text" color="primary">
            XSmall Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Small (sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="sm" variant="filled" color="primary">
            Small Button
          </Button>
          <Button size="sm" variant="outlined" color="primary">
            Small Button
          </Button>
          <Button size="sm" variant="text" color="primary">
            Small Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Medium (md)</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="md" variant="filled" color="primary">
            Medium Button
          </Button>
          <Button size="md" variant="outlined" color="primary">
            Medium Button
          </Button>
          <Button size="md" variant="text" color="primary">
            Medium Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Large (lg)</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" variant="filled" color="primary">
            Large Button
          </Button>
          <Button size="lg" variant="outlined" color="primary">
            Large Button
          </Button>
          <Button size="lg" variant="text" color="primary">
            Large Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Icon XSmall (icon-xs)</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="icon-xs" variant="filled" color="primary">
            <Bell className="size-3" />
          </Button>
          <Button size="icon-xs" variant="outlined" color="primary">
            <Bell className="size-3" />
          </Button>
          <Button size="icon-xs" variant="text" color="primary">
            <Bell className="size-3" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Icon Small (icon-sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="icon-sm" variant="filled" color="primary">
            <Bell className="size-4" />
          </Button>
          <Button size="icon-sm" variant="outlined" color="primary">
            <Bell className="size-4" />
          </Button>
          <Button size="icon-sm" variant="text" color="primary">
            <Bell className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Icon Medium (icon-md)</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="icon-md" variant="filled" color="primary">
            <Bell className="size-5" />
          </Button>
          <Button size="icon-md" variant="outlined" color="primary">
            <Bell className="size-5" />
          </Button>
          <Button size="icon-md" variant="text" color="primary">
            <Bell className="size-5" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Icon Large (icon-lg)</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="icon-lg" variant="filled" color="primary">
            <Bell className="size-6" />
          </Button>
          <Button size="icon-lg" variant="outlined" color="primary">
            <Bell className="size-6" />
          </Button>
          <Button size="icon-lg" variant="text" color="primary">
            <Bell className="size-6" />
          </Button>
        </div>
      </div>
    </div>
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var h,N,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Normal</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="filled" color="primary">
            Normal Button
          </Button>
          <Button variant="outlined" color="primary">
            Normal Button
          </Button>
          <Button variant="text" color="primary">
            Normal Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Disabled</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="filled" color="primary" disabled>
            Disabled Button
          </Button>
          <Button variant="outlined" color="primary" disabled>
            Disabled Button
          </Button>
          <Button variant="text" color="primary" disabled>
            Disabled Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Loading</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="filled" color="primary" loading>
            Loading Button
          </Button>
          <Button variant="outlined" color="primary" loading>
            Loading Button
          </Button>
          <Button variant="text" color="primary" loading>
            Loading Button
          </Button>
        </div>
      </div>
    </div>
}`,...(j=(N=t.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,w,b;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Loading - All Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs" variant="filled" color="primary" loading>
            XSmall Loading
          </Button>
          <Button size="sm" variant="filled" color="primary" loading>
            Small Loading
          </Button>
          <Button size="md" variant="filled" color="primary" loading>
            Medium Loading
          </Button>
          <Button size="lg" variant="filled" color="primary" loading>
            Large Loading
          </Button>
          <Button size="icon-md" variant="filled" color="primary" loading>
            <Bell className="size-5" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Loading - All Colors</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="filled" color="primary" loading>
            Primary
          </Button>
          <Button variant="filled" color="secondary" loading>
            Secondary
          </Button>
          <Button variant="filled" color="danger" loading>
            Danger
          </Button>
          <Button variant="filled" color="success" loading>
            Success
          </Button>
          <Button variant="filled" color="warning" loading>
            Warning
          </Button>
          <Button variant="filled" color="gk" loading>
            GK
          </Button>
        </div>
      </div>
    </div>
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var S,L,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <Button variant="filled" color="primary">
          <LogOut className="size-4" />
          로그아웃
        </Button>
        <Button variant="outlined" color="primary">
          <LogOut className="size-4" />
          로그아웃
        </Button>
        <Button variant="text" color="primary">
          <LogOut className="size-4" />
          로그아웃
        </Button>
      </div>
    </div>
}`,...(k=(L=o.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var D,P,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="filled">
          Filled Primary
        </Button>
        <Button color="primary" variant="outlined">
          Outlined Primary
        </Button>
        <Button color="primary" variant="text">
          Text Primary
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="filled" size="lg">
          ✅ 승인 (자동 Zoom 생성)
        </Button>
        <Button color="secondary" variant="outlined" size="lg">
          거절
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="secondary" variant="outlined" size="lg">
          취소
        </Button>
        <Button color="success" variant="filled" size="lg">
          생성 완료
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="filled" size="md">
          선택 학생에게 알림 발송
        </Button>
        <Button color="primary" variant="filled" size="md">
          첫 지도 계획 추가하기
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="filled" size="md">
          검색
        </Button>
        <Button color="secondary" variant="filled" size="md">
          초기화
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="outlined" size="xs">
          위원
        </Button>
        <Button color="success" variant="outlined" size="xs">
          위원장
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="danger" variant="filled" size="md">
          ▶ 재생
        </Button>
        <Button color="secondary" variant="filled" size="md">
          ⬇ 다운로드
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="secondary" variant="text" size="md">
          <LogOut className="size-4" /> 로그아웃
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="filled" size="md">
          <Download className="size-4" /> 권한 저장
        </Button>
        <Button color="warning" variant="filled" size="md">
          <CirclePause className="size-4" /> 권한 중지
        </Button>
        <Button color="danger" variant="filled" size="md">
          <Trash2 className="size-4" /> 완전 삭제
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="secondary" variant="text" size="icon-md">
          <Bell className="size-5" />
        </Button>
      </div>
    </div>
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const J=["Playground","Variants","Sizes","States","LoadingStates","WithIcons","Examples"];export{c as Examples,s as LoadingStates,l as Playground,i as Sizes,t as States,r as Variants,o as WithIcons,J as __namedExportsOrder,H as default};
