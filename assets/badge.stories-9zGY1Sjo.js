import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./badge-P6oVR44J.js";import{F as P}from"./file-Bxx6IsgO.js";import{C as U}from"./check-XAxGDgGN.js";import{I as t}from"./info-CBqhzTkO.js";import{S as W,M as D}from"./search-Bar65OBQ.js";import{C as a}from"./circle-check-big-Bhchwo_Q.js";import{C as _}from"./circle-x-4mJeKR0t.js";import{C as G}from"./circle-alert-CxKxvNIm.js";import{c as F}from"./createLucideIcon-BRUIOxYu.js";import{U as I}from"./user-DKwQRr9F.js";import{S as O}from"./star-CVmaTZu_.js";import{H as T}from"./heart-CZOb14Z3.js";import{B as A}from"./bell-DDz_Obdd.js";import{S as H}from"./settings-BWfxB16v.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-OJ7QbjDu.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],m=F("box",X);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],V=F("graduation-cap",q),fe={title:"M2/Badge",component:l,parameters:{layout:"centered",docs:{description:{component:'\n### 상태나 카테고리를 표시하는 배지 컴포넌트\n\n배지 컴포넌트는 상태, 카테고리, 라벨 등을 시각적으로 표시하는 데 사용됩니다. 다양한 색상과 모양을 지원합니다.\n\n## 주요 기능\n\n- **두 가지 스타일**: `filled` (채워진 스타일), `outline` (테두리만 있는 스타일)\n- **여러 색상 옵션**: `primary`, `secondary`, `success`, `warning`, `danger`, `info` + `urgent`(긴급 전용 솔리드 강조) 지원\n- **모양 옵션**: `sm` (작은 둥근 모서리), `full` (완전히 둥근 모양) 두 가지 모양 지원\n- **크기 옵션**: `xs` (초소형), `sm` (작은 크기), `md` (중간 크기), `lg` (큰 크기) 네 가지 크기 지원\n- **간결한 디자인**: 작은 크기로 정보를 간결하게 표시\n\n## 사용 예시\n\n```tsx\n<Badge variant="filled" color="primary" rounded="sm">\n  새 메시지\n</Badge>\n```\n        '}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outline"],description:"배지의 스타일 변형. `filled`는 채워진 스타일, `outline`은 테두리만 있는 스타일입니다.",table:{type:{summary:"'filled' | 'outline'"},defaultValue:{summary:"'filled'"},category:"스타일"}},color:{control:"select",options:["primary","secondary","success","warning","danger","info","urgent"],description:"배지의 색상. 의미에 따라 사용하세요 (예: `success`는 성공/완료, `warning`은 경고/대기, `danger`는 위험/거부). `urgent`는 긴급 전용 솔리드 강조색으로, `danger` 틴트(높음)보다 한 단계 강합니다.",table:{type:{summary:"'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'urgent'"},defaultValue:{summary:"'primary'"},category:"스타일"}},rounded:{control:"select",options:["sm","full"],description:"배지의 모서리 둥글기. `sm`은 작은 둥근 모서리, `full`은 완전히 둥근 모양입니다.",table:{type:{summary:"'sm' | 'full'"},defaultValue:{summary:"'sm'"},category:"스타일"}},size:{control:"select",options:["xs","sm","md","lg"],description:"배지의 크기. `xs`는 초소형, `sm`은 작은 크기, `md`는 중간 크기, `lg`는 큰 크기입니다.",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'xs'"},category:"스타일"}},children:{control:"text",description:"배지 내용 (텍스트 또는 아이콘 + 텍스트)",table:{type:{summary:"ReactNode"},category:"내용"}},className:{control:"text",description:"추가 CSS 클래스",table:{type:{summary:"string"},category:"스타일"}}},args:{children:"뱃지"}},n={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Badge 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, rounded 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Variant**: 배지의 스타일을 선택합니다. `filled`는 채워진 스타일, `outline`은 테두리만 있는 스타일입니다.\n- **Color**: 배지의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `success`는 성공 상태, `warning`은 경고 상태, `danger`는 위험 상태).\n- **Rounded**: 배지의 모서리 둥글기를 조정합니다. `sm`은 작은 둥근 모서리, `full`은 완전히 둥근 모양입니다.\n- **Size**: 배지의 크기를 조정합니다. `xs`는 초소형, `sm`은 작은 크기, `md`는 중간 크기, `lg`는 큰 크기입니다.\n        "}}},args:{variant:"filled",color:"primary",rounded:"sm",size:"sm",children:"뱃지"}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Filled Variant (rounded: sm)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",children:"Primary"}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"sm",children:"Secondary"}),e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:"Success"}),e.jsx(l,{variant:"filled",color:"warning",rounded:"sm",children:"Warning"}),e.jsx(l,{variant:"filled",color:"danger",rounded:"sm",children:"Danger"}),e.jsx(l,{variant:"filled",color:"info",rounded:"sm",children:"Info"}),e.jsx(l,{variant:"filled",color:"urgent",rounded:"sm",children:"Urgent"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Outline Variant (rounded: sm)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"outline",color:"primary",rounded:"sm",children:"Primary"}),e.jsx(l,{variant:"outline",color:"secondary",rounded:"sm",children:"Secondary"}),e.jsx(l,{variant:"outline",color:"success",rounded:"sm",children:"Success"}),e.jsx(l,{variant:"outline",color:"warning",rounded:"sm",children:"Warning"}),e.jsx(l,{variant:"outline",color:"danger",rounded:"sm",children:"Danger"}),e.jsx(l,{variant:"outline",color:"info",rounded:"sm",children:"Info"}),e.jsx(l,{variant:"outline",color:"urgent",rounded:"sm",children:"Urgent"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Filled Variant (rounded: full)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"full",children:"Primary"}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"full",children:"Secondary"}),e.jsx(l,{variant:"filled",color:"success",rounded:"full",children:"Success"}),e.jsx(l,{variant:"filled",color:"warning",rounded:"full",children:"Warning"}),e.jsx(l,{variant:"filled",color:"danger",rounded:"full",children:"Danger"}),e.jsx(l,{variant:"filled",color:"info",rounded:"full",children:"Info"}),e.jsx(l,{variant:"filled",color:"urgent",rounded:"full",children:"Urgent"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Outline Variant (rounded: full)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"outline",color:"primary",rounded:"full",children:"Primary"}),e.jsx(l,{variant:"outline",color:"secondary",rounded:"full",children:"Secondary"}),e.jsx(l,{variant:"outline",color:"success",rounded:"full",children:"Success"}),e.jsx(l,{variant:"outline",color:"warning",rounded:"full",children:"Warning"}),e.jsx(l,{variant:"outline",color:"danger",rounded:"full",children:"Danger"}),e.jsx(l,{variant:"outline",color:"info",rounded:"full",children:"Info"}),e.jsx(l,{variant:"outline",color:"urgent",rounded:"full",children:"Urgent"})]})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Small Rounded (sm)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",children:"Small Rounded"}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"sm",children:"Small Rounded"}),e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:"Small Rounded"}),e.jsx(l,{variant:"filled",color:"warning",rounded:"sm",children:"Small Rounded"}),e.jsx(l,{variant:"filled",color:"danger",rounded:"sm",children:"Small Rounded"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Full Rounded (full)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"full",children:"Full Rounded"}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"full",children:"Full Rounded"}),e.jsx(l,{variant:"filled",color:"success",rounded:"full",children:"Full Rounded"}),e.jsx(l,{variant:"filled",color:"warning",rounded:"full",children:"Full Rounded"}),e.jsx(l,{variant:"filled",color:"danger",rounded:"full",children:"Full Rounded"})]})]})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Extra Small Size (xs)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",size:"xs",children:"Extra Small"}),e.jsx(l,{variant:"filled",color:"secondary",size:"xs",children:"Extra Small"}),e.jsx(l,{variant:"filled",color:"success",size:"xs",children:"Extra Small"}),e.jsx(l,{variant:"filled",color:"warning",size:"xs",children:"Extra Small"}),e.jsx(l,{variant:"filled",color:"danger",size:"xs",children:"Extra Small"}),e.jsx(l,{variant:"filled",color:"info",size:"xs",children:"Extra Small"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Small Size (sm)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",size:"sm",children:"Small"}),e.jsx(l,{variant:"filled",color:"secondary",size:"sm",children:"Small"}),e.jsx(l,{variant:"filled",color:"success",size:"sm",children:"Small"}),e.jsx(l,{variant:"filled",color:"warning",size:"sm",children:"Small"}),e.jsx(l,{variant:"filled",color:"danger",size:"sm",children:"Small"}),e.jsx(l,{variant:"filled",color:"info",size:"sm",children:"Small"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Medium Size (md)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",size:"md",children:"Medium"}),e.jsx(l,{variant:"filled",color:"secondary",size:"md",children:"Medium"}),e.jsx(l,{variant:"filled",color:"success",size:"md",children:"Medium"}),e.jsx(l,{variant:"filled",color:"warning",size:"md",children:"Medium"}),e.jsx(l,{variant:"filled",color:"danger",size:"md",children:"Medium"}),e.jsx(l,{variant:"filled",color:"info",size:"md",children:"Medium"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Large Size (lg)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",size:"lg",children:"Large"}),e.jsx(l,{variant:"filled",color:"secondary",size:"lg",children:"Large"}),e.jsx(l,{variant:"filled",color:"success",size:"lg",children:"Large"}),e.jsx(l,{variant:"filled",color:"warning",size:"lg",children:"Large"}),e.jsx(l,{variant:"filled",color:"danger",size:"lg",children:"Large"}),e.jsx(l,{variant:"filled",color:"info",size:"lg",children:"Large"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Size Comparison"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",size:"xs",children:"Extra Small Badge"}),e.jsx(l,{variant:"filled",color:"primary",size:"sm",children:"Small Badge"}),e.jsx(l,{variant:"filled",color:"primary",size:"md",children:"Medium Badge"}),e.jsx(l,{variant:"filled",color:"primary",size:"lg",children:"Large Badge"})]})]})]})},i={parameters:{docs:{description:{story:`
아이콘과 함께 사용하는 Badge 컴포넌트 예시입니다.

## 사용 팁

- 아이콘은 Badge 컴포넌트의 children 내부에 배치합니다.
- 아이콘 크기는 Badge의 size에 맞게 조정하는 것이 좋습니다 (예: \`size-3\`, \`size-4\`).
- 텍스트 없이 아이콘만 사용하거나, 텍스트와 함께 조합할 수 있습니다.
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"아이콘 배지 예시"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"danger",rounded:"sm",children:e.jsx(P,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:e.jsx(U,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"info",rounded:"sm",children:e.jsx(t,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"sm",children:e.jsx(W,{className:"size-3"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"상태 아이콘"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:e.jsx(a,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"danger",rounded:"sm",children:e.jsx(_,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"warning",rounded:"sm",children:e.jsx(G,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"info",rounded:"sm",children:e.jsx(t,{className:"size-3"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"사용자 역할 아이콘"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:e.jsx(V,{className:"size-4"})}),e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",children:e.jsx(I,{className:"size-4"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 색상과 아이콘 조합"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",children:e.jsx(O,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"danger",rounded:"sm",children:e.jsx(T,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"warning",rounded:"sm",children:e.jsx(A,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"info",rounded:"sm",children:e.jsx(D,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"sm",children:e.jsx(H,{className:"size-3"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"크기별 아이콘 배지"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",size:"xs",children:e.jsx(a,{className:"size-2.5"})}),e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",size:"sm",children:e.jsx(a,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",size:"md",children:e.jsx(a,{className:"size-4"})}),e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",size:"lg",children:e.jsx(a,{className:"size-5"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"모든 색상 옵션"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",children:e.jsx(a,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"sm",children:e.jsx(a,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:e.jsx(a,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"warning",rounded:"sm",children:e.jsx(a,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"danger",rounded:"sm",children:e.jsx(a,{className:"size-3"})}),e.jsx(l,{variant:"filled",color:"info",rounded:"sm",children:e.jsx(a,{className:"size-3"})})]})]})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",children:"논문작성계획서 심사"}),e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:"중간논문 심사"}),e.jsx(l,{variant:"filled",color:"success",rounded:"full",children:"승인"}),e.jsx(l,{variant:"filled",color:"warning",rounded:"full",children:"대기"}),e.jsx(l,{variant:"filled",color:"danger",rounded:"full",children:"거부"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"full",children:"심사중"}),e.jsx(l,{variant:"filled",color:"success",rounded:"full",children:"심사완료"}),e.jsx(l,{variant:"filled",color:"warning",rounded:"full",children:"심사대기"}),e.jsx(l,{variant:"filled",color:"danger",rounded:"full",children:"반려"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"full",size:"md",children:"점수형"}),e.jsx(l,{variant:"filled",color:"warning",rounded:"full",size:"lg",children:"승인 대기"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:"연구계획서"}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"sm",children:"IRB 승인"}),e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:"중간논문"}),e.jsx(l,{variant:"filled",color:"secondary",rounded:"sm",children:"예비심사"}),e.jsx(l,{variant:"filled",color:"success",rounded:"sm",children:"최종논문"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"sm",className:"font-semibold",children:"1주차"}),e.jsx(l,{variant:"filled",color:"danger",rounded:"sm",size:"xs",className:"font-semibold",children:"긴급"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(l,{variant:"filled",color:"success",rounded:"full",className:"px-3 font-medium",children:[e.jsx(V,{className:"size-4"}),e.jsx("span",{children:"대학원생"})]}),e.jsxs(l,{variant:"filled",color:"primary",rounded:"full",className:"px-3 font-medium",children:[e.jsx(I,{className:"size-4"}),e.jsx("span",{children:"지도교수"})]})]}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(l,{variant:"filled",color:"primary",rounded:"full",children:"0"}),e.jsx(l,{variant:"filled",color:"primary",rounded:"full",children:"1"}),e.jsx(l,{variant:"filled",color:"primary",rounded:"full",children:"3"}),e.jsx(l,{variant:"filled",color:"primary",rounded:"full",children:"33"}),e.jsx(l,{variant:"outline",color:"primary",rounded:"full",children:"5"})]})})]})},c={parameters:{docs:{description:{story:`
[피드백 일감 보드(task-list.html)](https://muhayu.github.io/feedback/task-list.html)에 사용된 뱃지들을
M2 Badge 컴포넌트로 1:1 재현한 예시입니다. size를 지정하지 않아 기본값 \`xs\`(글자 12px·높이 24px)로
렌더되며, 원본 뱃지(\`.fst\`, \`.fpr\`)와 유사한 사이즈를 갖습니다.

## 뱃지 종류

- **상태(.fst)**: pill 모양(\`rounded="full"\`). 할 일·진행중·보류·완료·취소
- **우선순위(.fpr)**: 사각 모양(\`rounded="sm"\`). 긴급(솔리드 red)·높음·보통·낮음
- **유형(.ttype)**: 아이콘 + 텍스트의 filled pill(연한 회색). 버그·개선·문서
- **그룹 메타(.ck-badge)**: 건수(outline)·진행률(%)
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"상태 (Status)"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(l,{color:"secondary",rounded:"full",children:"할 일"}),e.jsxs(l,{color:"info",rounded:"full",children:[e.jsx("span",{className:"size-1.5 rounded-full bg-current"}),"진행중"]}),e.jsx(l,{color:"warning",rounded:"full",children:"보류"}),e.jsx(l,{color:"success",rounded:"full",children:"완료"}),e.jsx(l,{color:"secondary",rounded:"full",children:"취소"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"우선순위 (Priority)"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(l,{color:"urgent",rounded:"sm",children:"긴급"}),e.jsx(l,{color:"danger",rounded:"sm",children:"높음"}),e.jsx(l,{color:"warning",rounded:"sm",children:"보통"}),e.jsx(l,{color:"secondary",rounded:"sm",children:"낮음"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"유형 (Type)"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(l,{color:"secondary",rounded:"full",children:[e.jsx(m,{className:"size-3"}),"버그"]}),e.jsxs(l,{color:"secondary",rounded:"full",children:[e.jsx(m,{className:"size-3"}),"개선"]}),e.jsxs(l,{color:"secondary",rounded:"full",children:[e.jsx(m,{className:"size-3"}),"문서"]})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"그룹 메타 (Group meta)"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(l,{variant:"outline",color:"secondary",rounded:"full",children:"12건"}),e.jsx(l,{color:"info",rounded:"full",children:"60%"}),e.jsx(l,{color:"success",rounded:"full",children:"100%"})]})]})]})};var f,g,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Badge 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 color, rounded 등의 속성을 변경해보세요.

## 사용 팁

- **Variant**: 배지의 스타일을 선택합니다. \\\`filled\\\`는 채워진 스타일, \\\`outline\\\`은 테두리만 있는 스타일입니다.
- **Color**: 배지의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`success\\\`는 성공 상태, \\\`warning\\\`은 경고 상태, \\\`danger\\\`는 위험 상태).
- **Rounded**: 배지의 모서리 둥글기를 조정합니다. \\\`sm\\\`은 작은 둥근 모서리, \\\`full\\\`은 완전히 둥근 모양입니다.
- **Size**: 배지의 크기를 조정합니다. \\\`xs\\\`는 초소형, \\\`sm\\\`은 작은 크기, \\\`md\\\`는 중간 크기, \\\`lg\\\`는 큰 크기입니다.
        \`
      }
    }
  },
  args: {
    variant: 'filled',
    color: 'primary',
    rounded: 'sm',
    size: 'sm',
    children: '뱃지'
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,v,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Filled Variant (rounded: sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" rounded="sm">
            Primary
          </Badge>
          <Badge variant="filled" color="secondary" rounded="sm">
            Secondary
          </Badge>
          <Badge variant="filled" color="success" rounded="sm">
            Success
          </Badge>
          <Badge variant="filled" color="warning" rounded="sm">
            Warning
          </Badge>
          <Badge variant="filled" color="danger" rounded="sm">
            Danger
          </Badge>
          <Badge variant="filled" color="info" rounded="sm">
            Info
          </Badge>
          <Badge variant="filled" color="urgent" rounded="sm">
            Urgent
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Outline Variant (rounded: sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline" color="primary" rounded="sm">
            Primary
          </Badge>
          <Badge variant="outline" color="secondary" rounded="sm">
            Secondary
          </Badge>
          <Badge variant="outline" color="success" rounded="sm">
            Success
          </Badge>
          <Badge variant="outline" color="warning" rounded="sm">
            Warning
          </Badge>
          <Badge variant="outline" color="danger" rounded="sm">
            Danger
          </Badge>
          <Badge variant="outline" color="info" rounded="sm">
            Info
          </Badge>
          <Badge variant="outline" color="urgent" rounded="sm">
            Urgent
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Filled Variant (rounded: full)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" rounded="full">
            Primary
          </Badge>
          <Badge variant="filled" color="secondary" rounded="full">
            Secondary
          </Badge>
          <Badge variant="filled" color="success" rounded="full">
            Success
          </Badge>
          <Badge variant="filled" color="warning" rounded="full">
            Warning
          </Badge>
          <Badge variant="filled" color="danger" rounded="full">
            Danger
          </Badge>
          <Badge variant="filled" color="info" rounded="full">
            Info
          </Badge>
          <Badge variant="filled" color="urgent" rounded="full">
            Urgent
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Outline Variant (rounded: full)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline" color="primary" rounded="full">
            Primary
          </Badge>
          <Badge variant="outline" color="secondary" rounded="full">
            Secondary
          </Badge>
          <Badge variant="outline" color="success" rounded="full">
            Success
          </Badge>
          <Badge variant="outline" color="warning" rounded="full">
            Warning
          </Badge>
          <Badge variant="outline" color="danger" rounded="full">
            Danger
          </Badge>
          <Badge variant="outline" color="info" rounded="full">
            Info
          </Badge>
          <Badge variant="outline" color="urgent" rounded="full">
            Urgent
          </Badge>
        </div>
      </div>
    </div>
}`,...(p=(v=r.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var h,B,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Small Rounded (sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" rounded="sm">
            Small Rounded
          </Badge>
          <Badge variant="filled" color="secondary" rounded="sm">
            Small Rounded
          </Badge>
          <Badge variant="filled" color="success" rounded="sm">
            Small Rounded
          </Badge>
          <Badge variant="filled" color="warning" rounded="sm">
            Small Rounded
          </Badge>
          <Badge variant="filled" color="danger" rounded="sm">
            Small Rounded
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Full Rounded (full)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" rounded="full">
            Full Rounded
          </Badge>
          <Badge variant="filled" color="secondary" rounded="full">
            Full Rounded
          </Badge>
          <Badge variant="filled" color="success" rounded="full">
            Full Rounded
          </Badge>
          <Badge variant="filled" color="warning" rounded="full">
            Full Rounded
          </Badge>
          <Badge variant="filled" color="danger" rounded="full">
            Full Rounded
          </Badge>
        </div>
      </div>
    </div>
}`,...(j=(B=d.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var N,y,z;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Extra Small Size (xs)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" size="xs">
            Extra Small
          </Badge>
          <Badge variant="filled" color="secondary" size="xs">
            Extra Small
          </Badge>
          <Badge variant="filled" color="success" size="xs">
            Extra Small
          </Badge>
          <Badge variant="filled" color="warning" size="xs">
            Extra Small
          </Badge>
          <Badge variant="filled" color="danger" size="xs">
            Extra Small
          </Badge>
          <Badge variant="filled" color="info" size="xs">
            Extra Small
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Small Size (sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" size="sm">
            Small
          </Badge>
          <Badge variant="filled" color="secondary" size="sm">
            Small
          </Badge>
          <Badge variant="filled" color="success" size="sm">
            Small
          </Badge>
          <Badge variant="filled" color="warning" size="sm">
            Small
          </Badge>
          <Badge variant="filled" color="danger" size="sm">
            Small
          </Badge>
          <Badge variant="filled" color="info" size="sm">
            Small
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Medium Size (md)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" size="md">
            Medium
          </Badge>
          <Badge variant="filled" color="secondary" size="md">
            Medium
          </Badge>
          <Badge variant="filled" color="success" size="md">
            Medium
          </Badge>
          <Badge variant="filled" color="warning" size="md">
            Medium
          </Badge>
          <Badge variant="filled" color="danger" size="md">
            Medium
          </Badge>
          <Badge variant="filled" color="info" size="md">
            Medium
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Large Size (lg)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" size="lg">
            Large
          </Badge>
          <Badge variant="filled" color="secondary" size="lg">
            Large
          </Badge>
          <Badge variant="filled" color="success" size="lg">
            Large
          </Badge>
          <Badge variant="filled" color="warning" size="lg">
            Large
          </Badge>
          <Badge variant="filled" color="danger" size="lg">
            Large
          </Badge>
          <Badge variant="filled" color="info" size="lg">
            Large
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Size Comparison</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="filled" color="primary" size="xs">
            Extra Small Badge
          </Badge>
          <Badge variant="filled" color="primary" size="sm">
            Small Badge
          </Badge>
          <Badge variant="filled" color="primary" size="md">
            Medium Badge
          </Badge>
          <Badge variant="filled" color="primary" size="lg">
            Large Badge
          </Badge>
        </div>
      </div>
    </div>
}`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var S,w,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
아이콘과 함께 사용하는 Badge 컴포넌트 예시입니다.

## 사용 팁

- 아이콘은 Badge 컴포넌트의 children 내부에 배치합니다.
- 아이콘 크기는 Badge의 size에 맞게 조정하는 것이 좋습니다 (예: \\\`size-3\\\`, \\\`size-4\\\`).
- 텍스트 없이 아이콘만 사용하거나, 텍스트와 함께 조합할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">아이콘 배지 예시</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="danger" rounded="sm">
            <File className="size-3" />
          </Badge>
          <Badge variant="filled" color="success" rounded="sm">
            <Check className="size-3" />
          </Badge>
          <Badge variant="filled" color="info" rounded="sm">
            <Info className="size-3" />
          </Badge>
          <Badge variant="filled" color="secondary" rounded="sm">
            <Search className="size-3" />
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">상태 아이콘</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="success" rounded="sm">
            <CheckCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="danger" rounded="sm">
            <XCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="warning" rounded="sm">
            <AlertCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="info" rounded="sm">
            <Info className="size-3" />
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">사용자 역할 아이콘</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="success" rounded="sm">
            <GraduationCap className="size-4" />
          </Badge>
          <Badge variant="filled" color="primary" rounded="sm">
            <User className="size-4" />
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 색상과 아이콘 조합</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" rounded="sm">
            <Star className="size-3" />
          </Badge>
          <Badge variant="filled" color="danger" rounded="sm">
            <Heart className="size-3" />
          </Badge>
          <Badge variant="filled" color="warning" rounded="sm">
            <Bell className="size-3" />
          </Badge>
          <Badge variant="filled" color="info" rounded="sm">
            <Mail className="size-3" />
          </Badge>
          <Badge variant="filled" color="secondary" rounded="sm">
            <Settings className="size-3" />
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">크기별 아이콘 배지</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="filled" color="primary" rounded="sm" size="xs">
            <CheckCircle className="size-2.5" />
          </Badge>
          <Badge variant="filled" color="primary" rounded="sm" size="sm">
            <CheckCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="primary" rounded="sm" size="md">
            <CheckCircle className="size-4" />
          </Badge>
          <Badge variant="filled" color="primary" rounded="sm" size="lg">
            <CheckCircle className="size-5" />
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">모든 색상 옵션</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="filled" color="primary" rounded="sm">
            <CheckCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="secondary" rounded="sm">
            <CheckCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="success" rounded="sm">
            <CheckCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="warning" rounded="sm">
            <CheckCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="danger" rounded="sm">
            <CheckCircle className="size-3" />
          </Badge>
          <Badge variant="filled" color="info" rounded="sm">
            <CheckCircle className="size-3" />
          </Badge>
        </div>
      </div>
    </div>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,R,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Badge variant="filled" color="primary" rounded="sm">
          논문작성계획서 심사
        </Badge>
        <Badge variant="filled" color="success" rounded="sm">
          중간논문 심사
        </Badge>
        <Badge variant="filled" color="success" rounded="full">
          승인
        </Badge>
        <Badge variant="filled" color="warning" rounded="full">
          대기
        </Badge>
        <Badge variant="filled" color="danger" rounded="full">
          거부
        </Badge>
      </div>
      <div className="flex gap-4">
        <Badge variant="filled" color="primary" rounded="full">
          심사중
        </Badge>
        <Badge variant="filled" color="success" rounded="full">
          심사완료
        </Badge>
        <Badge variant="filled" color="warning" rounded="full">
          심사대기
        </Badge>
        <Badge variant="filled" color="danger" rounded="full">
          반려
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="filled" color="primary" rounded="full" size="md">
          점수형
        </Badge>
        <Badge variant="filled" color="warning" rounded="full" size="lg">
          승인 대기
        </Badge>
      </div>
      <div className="flex gap-4">
        <Badge variant="filled" color="success" rounded="sm">
          연구계획서
        </Badge>
        <Badge variant="filled" color="secondary" rounded="sm">
          IRB 승인
        </Badge>
        <Badge variant="filled" color="success" rounded="sm">
          중간논문
        </Badge>
        <Badge variant="filled" color="secondary" rounded="sm">
          예비심사
        </Badge>
        <Badge variant="filled" color="success" rounded="sm">
          최종논문
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="filled" color="primary" rounded="sm" className="font-semibold">
          1주차
        </Badge>
        <Badge variant="filled" color="danger" rounded="sm" size="xs" className="font-semibold">
          긴급
        </Badge>
      </div>
      <div className="flex gap-4">
        <Badge variant="filled" color="success" rounded="full" className="px-3 font-medium">
          <GraduationCap className="size-4" />
          <span>대학원생</span>
        </Badge>
        <Badge variant="filled" color="primary" rounded="full" className="px-3 font-medium">
          <User className="size-4" />
          <span>지도교수</span>
        </Badge>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="filled" color="primary" rounded="full">
            0
          </Badge>
          <Badge variant="filled" color="primary" rounded="full">
            1
          </Badge>
          <Badge variant="filled" color="primary" rounded="full">
            3
          </Badge>
          <Badge variant="filled" color="primary" rounded="full">
            33
          </Badge>
          <Badge variant="outline" color="primary" rounded="full">
            5
          </Badge>
        </div>
      </div>
    </div>
}`,...(k=(R=o.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var M,L,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
[피드백 일감 보드(task-list.html)](https://muhayu.github.io/feedback/task-list.html)에 사용된 뱃지들을
M2 Badge 컴포넌트로 1:1 재현한 예시입니다. size를 지정하지 않아 기본값 \\\`xs\\\`(글자 12px·높이 24px)로
렌더되며, 원본 뱃지(\\\`.fst\\\`, \\\`.fpr\\\`)와 유사한 사이즈를 갖습니다.

## 뱃지 종류

- **상태(.fst)**: pill 모양(\\\`rounded="full"\\\`). 할 일·진행중·보류·완료·취소
- **우선순위(.fpr)**: 사각 모양(\\\`rounded="sm"\\\`). 긴급(솔리드 red)·높음·보통·낮음
- **유형(.ttype)**: 아이콘 + 텍스트의 filled pill(연한 회색). 버그·개선·문서
- **그룹 메타(.ck-badge)**: 건수(outline)·진행률(%)
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">상태 (Status)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="secondary" rounded="full">
            할 일
          </Badge>
          <Badge color="info" rounded="full">
            <span className="size-1.5 rounded-full bg-current" />
            진행중
          </Badge>
          <Badge color="warning" rounded="full">
            보류
          </Badge>
          <Badge color="success" rounded="full">
            완료
          </Badge>
          <Badge color="secondary" rounded="full">
            취소
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">우선순위 (Priority)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="urgent" rounded="sm">
            긴급
          </Badge>
          <Badge color="danger" rounded="sm">
            높음
          </Badge>
          <Badge color="warning" rounded="sm">
            보통
          </Badge>
          <Badge color="secondary" rounded="sm">
            낮음
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">유형 (Type)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="secondary" rounded="full">
            <Box className="size-3" />
            버그
          </Badge>
          <Badge color="secondary" rounded="full">
            <Box className="size-3" />
            개선
          </Badge>
          <Badge color="secondary" rounded="full">
            <Box className="size-3" />
            문서
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">그룹 메타 (Group meta)</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" color="secondary" rounded="full">
            12건
          </Badge>
          <Badge color="info" rounded="full">
            60%
          </Badge>
          <Badge color="success" rounded="full">
            100%
          </Badge>
        </div>
      </div>
    </div>
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const ge=["Playground","Colors","Rounded","Sizes","WithIcons","Examples","TaskList"];export{r as Colors,o as Examples,n as Playground,d as Rounded,s as Sizes,c as TaskList,i as WithIcons,ge as __namedExportsOrder,fe as default};
