import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-Bb3Lkh_y.js";import{M as m,C as c}from"./index-CeJGM_kn.js";import{B as l}from"./badge-P6oVR44J.js";import{C as o}from"./chip-CFyISPk5.js";import{B as r}from"./button-CkQv11My.js";import{I as t}from"./input-BeM9XfYP.js";import{T as d,a as i}from"./toggle-group-item-BhJf_Sat.js";import"./index-OJ7QbjDu.js";import"./iframe-D9IGqrWw.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-CM4EhglE.js";import"./index-C27WGPQh.js";import"./index-BilTj9-P.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./index-jm-SPu3n.js";import"./index-DMBPP7gA.js";import"./index-DVoPeAEP.js";import"./index-D15pND6U.js";import"./index-Dc1_MvIw.js";import"./index-ehd_yKDV.js";function x(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Foundations/Sizing"}),`
`,e.jsx(s.h1,{id:"컨트롤-높이-사다리-control-height-scale",children:"컨트롤 높이 사다리 (Control Height Scale)"}),`
`,e.jsxs(s.p,{children:["한 줄에 나란히 놓이는 컨트롤(Button·Input·Select·Chip·Badge·ToggleGroup)은 ",e.jsxs(s.strong,{children:["같은 ",e.jsx(s.code,{children:"size"})," 이름이 항상 같은 높이"]}),"를 갖습니다."]}),`
`,e.jsxs(s.p,{children:[`| tier | 높이 | 텍스트 | 주 용도 |
|---|---|---|---|
| `,e.jsx(s.code,{children:"xs"}),` | 24px | 12px | 조밀한 배지, 밀집 테이블 |
| `,e.jsx(s.code,{children:"sm"}),` | 32px | 14px | 컴팩트 폼 |
| `,e.jsx(s.code,{children:"md"})," | 40px | 14px | ",e.jsx(s.strong,{children:"기본값"}),` · 검색바 · 일반 폼 |
| `,e.jsx(s.code,{children:"lg"})," | 48px | 16px | 강조 CTA · 큰 폼 |"]}),`
`,e.jsx(s.h2,{id:"컴포넌트별-size--높이",children:"컴포넌트별 size → 높이"}),`
`,e.jsx(s.p,{children:`| 컴포넌트 | xs (24) | sm (32) | md (40) | lg (48) |
|---|---|---|---|---|
| Button | ✓ | ✓ | ✓ (기본) | ✓ |
| Input | – | ✓ | ✓ (기본) | ✓ |
| Select | – | ✓ | ✓ (기본) | ✓ |
| Chip | – | ✓ | ✓ (기본) | ✓ |
| Badge | ✓ (기본) | ✓ | ✓ | ✓ |
| ToggleGroup | – | ✓ | ✓ (기본) | ✓ |`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"글리프류(Checkbox·Radio·Spinner)와 멀티라인 Textarea, 인라인 LinkButton은 이 사다리 대상이 아닙니다."}),`
`]}),`
`,e.jsx(s.h2,{id:"검색바-조합-md--40px-정렬",children:"검색바 조합 (md = 40px 정렬)"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:'size="md"'}),"로 맞추면 Badge·Chip·Button·Input·ToggleGroup이 모두 40px로 정렬됩니다."]}),`
`,e.jsx(c,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{size:"md",rounded:"full",children:"1,234건"}),e.jsx(o,{size:"md",defaultPressed:!0,children:"자율주행 AND 라이다"}),e.jsxs(d,{type:"single",defaultValue:"and",size:"md",children:[e.jsx(i,{value:"and",children:"AND"}),e.jsx(i,{value:"or",children:"OR"})]}),e.jsx(r,{size:"md",variant:"outlined",color:"secondary",children:"검색조건 수정"}),e.jsx(t,{size:"md",placeholder:"결과 내 검색 (Enter)"}),e.jsx(r,{size:"md",variant:"text",color:"primary",children:"특허로 →"})]})}),`
`,e.jsx(s.h2,{id:"32px--48px-줄-조합",children:"32px / 48px 줄 조합"}),`
`,e.jsx(c,{children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{size:"sm",rounded:"full",children:"sm"}),e.jsx(o,{size:"sm",children:"필터"}),e.jsxs(d,{type:"single",defaultValue:"a",size:"sm",children:[e.jsx(i,{value:"a",children:"A"}),e.jsx(i,{value:"b",children:"B"})]}),e.jsx(r,{size:"sm",children:"버튼"}),e.jsx(t,{size:"sm",placeholder:"32px"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{size:"lg",rounded:"full",children:"lg"}),e.jsx(o,{size:"lg",children:"필터"}),e.jsxs(d,{type:"single",defaultValue:"a",size:"lg",children:[e.jsx(i,{value:"a",children:"A"}),e.jsx(i,{value:"b",children:"B"})]}),e.jsx(r,{size:"lg",children:"버튼"}),e.jsx(t,{size:"lg",placeholder:"48px"})]})]})})]})}function _(n={}){const{wrapper:s}={...p(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(x,{...n})}):x(n)}export{_ as default};
