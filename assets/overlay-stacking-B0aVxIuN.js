import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Bb3Lkh_y.js";import{M as d}from"./index-ClcVuNWg.js";import"./index-OJ7QbjDu.js";import"./iframe-t0ij21JA.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const t=({token:o,value:n,usage:c,muted:i})=>{const s={code:"code",span:"span",td:"td",tr:"tr",...r()};return e.jsxs(s.tr,{style:{borderTop:"1px solid #e9ecef",opacity:i?.65:1},children:[e.jsx(s.td,{style:{padding:"8px 12px",whiteSpace:"nowrap"},children:o?e.jsx(s.code,{children:o}):e.jsx(s.span,{style:{color:"#868e96"},children:"(sonner)"})}),e.jsx(s.td,{style:{padding:"8px 12px",textAlign:"right",fontVariantNumeric:"tabular-nums"},children:n}),e.jsx(s.td,{style:{padding:"8px 12px"},children:c})]})};function l(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Foundations/Overlay Stacking"}),`
`,e.jsx(n.h1,{id:"오버레이-스태킹-overlay-stacking",children:"오버레이 스태킹 (Overlay Stacking)"}),`
`,e.jsx(n.p,{children:"Sheet · Dialog · AlertDialog · Dropdown · Popover · Tooltip · Toast가 서로 어떤 순서로 쌓이는지에 대한 규칙입니다."}),`
`,e.jsx(n.h2,{id:"z-스케일",children:"z 스케일"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"foundation.css"}),"가 정의하는 ",e.jsx(n.code,{children:"@utility"})," 토큰입니다."]}),`
`,`
`,`
`,e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:14,margin:"16px 0"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{textAlign:"left",background:"#f8f9fb"},children:[e.jsx("th",{style:{padding:"8px 12px"},children:"토큰"}),e.jsx("th",{style:{padding:"8px 12px",textAlign:"right"},children:"값"}),e.jsx("th",{style:{padding:"8px 12px"},children:"쓰이는 곳"})]})}),e.jsxs("tbody",{children:[e.jsx(t,{token:"z-m2-dialog",value:110,usage:e.jsx(n.strong,{children:"Sheet · Dialog · AlertDialog의 scrim + content"})}),e.jsx(t,{token:"z-m2-dropdown",value:120,usage:"Select · DropdownMenu · Combobox · MultiSelect content"}),e.jsx(t,{token:"z-m2-popover",value:120,usage:"Popover content"}),e.jsx(t,{value:130,usage:"Toast"}),e.jsx(t,{token:"z-m2-tooltip",value:140,usage:"Tooltip content · Arrow"}),e.jsx(t,{token:"z-m2-overlay",value:100,muted:!0,usage:"legacy — 더 이상 scrim에 쓰이지 않습니다. 소비처 호환을 위해 정의만 유지"})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ck-ui와 한 앱에 함께 로드될 때 전역 클래스명이 겹치지 않도록 모든 z 유틸에 ",e.jsx(n.code,{children:"m2"})," 네임스페이스가 붙어 있습니다."]}),`
`]}),`
`,e.jsx(n.h2,{id:"핵심-규칙--scrim과-content는-같은-z를-쓴다",children:"핵심 규칙 — scrim과 content는 같은 z를 쓴다"}),`
`,e.jsxs(n.p,{children:["오버레이 하나 안에서 scrim(backdrop)과 content는 ",e.jsxs(n.strong,{children:["같은 ",e.jsx(n.code,{children:"z-m2-dialog"}),"(110)"]})," 입니다. 더 낮게 두지 않습니다."]}),`
`,e.jsxs(n.p,{children:["z-index가 같으면 페인트 순서는 ",e.jsx(n.strong,{children:"DOM 순서"}),"로 결정됩니다. 한 오버레이 안에서는 content가 scrim보다 뒤에 오므로 content가 위입니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`<div data-slot="dialog-overlay" class="z-m2-dialog fixed inset-0 bg-black/50" />  <!-- scrim   -->
<div data-slot="dialog-content" class="z-m2-dialog fixed …" />                    <!-- content -->
`})}),`
`,e.jsx(n.h3,{id:"중첩은-열린-순서가-곧-스택-순서",children:"중첩은 열린 순서가 곧 스택 순서"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"openSheet"})," / ",e.jsx(n.code,{children:"openDialog"}),"는 overlay-kit이 ",e.jsx(n.strong,{children:"열린 순서대로"})," 렌더하고, Radix ",e.jsx(n.code,{children:"Portal"}),"이 그 순서로 ",e.jsx(n.code,{children:"document.body"}),"에 append합니다. 즉 ",e.jsx(n.strong,{children:"DOM 순서 = 열린 순서"}),"입니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`<div data-slot="sheet-overlay"  class="z-m2-dialog …" />   <!-- 1단계 scrim   -->
<div data-slot="sheet-content"  class="z-m2-dialog …" />   <!-- 1단계 content -->
<div data-slot="dialog-overlay" class="z-m2-dialog …" />   <!-- 2단계 scrim   -->
<div data-slot="dialog-content" class="z-m2-dialog …" />   <!-- 2단계 content -->
`})}),`
`,e.jsxs(n.p,{children:["2단계 scrim이 1단계 content를 덮고, 그 위에 2단계 content가 옵니다. ",e.jsx(n.strong,{children:"스택 깊이를 계산하거나 z를 올릴 필요가 없습니다."})," 타입 조합(",e.jsx(n.code,{children:"Sheet → Dialog"}),", ",e.jsx(n.code,{children:"Dialog → Sheet"}),", 동일 타입, 3단 이상)과 무관하고, 선언형 중첩(",e.jsx(n.code,{children:"<SheetContent>"})," 안의 ",e.jsx(n.code,{children:"<Dialog>"}),")과 ",e.jsx(n.code,{children:"openAlertDialog"}),"도 같은 원리로 동작합니다."]}),`
`,e.jsxs(n.p,{children:["이전에는 scrim이 content(110)보다 낮은 100이어서 이 순서가 무력화됐습니다. 그래서 Sheet 위에 Dialog를 열면 Dialog scrim이 Sheet content ",e.jsx(n.strong,{children:"아래로"})," 깔려 Sheet가 어두워지지 않았습니다."]}),`
`,e.jsx("div",{style:{padding:"12px 16px",border:"1px solid #f59e0b",borderRadius:8,background:"#fef3c7",color:"#0a0e1a"},children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"주의"})," — 새 오버레이 계열 컴포넌트를 만들 때 scrim에 ",e.jsx("code",{children:"z-m2-overlay"}),`
(100)를 쓰지 마세요. content와 같은 `,e.jsx("code",{children:"z-m2-dialog"}),"를 써야 중첩이 동작합니다."]})}),`
`,e.jsx(n.h2,{id:"오버레이-안에서-열리는-popper",children:"오버레이 안에서 열리는 popper"}),`
`,e.jsxs(n.p,{children:["Select · DropdownMenu · Popover · Combobox · MultiSelect · Tooltip은 기본적으로 ",e.jsx(n.code,{children:"document.body"}),"로 portal되고 z가 120~140입니다. 오버레이(110)보다 높으므로 ",e.jsx(n.strong,{children:"몇 단으로 중첩된 오버레이 안에서든 그대로 위에 뜹니다."})," 별도 배선이 필요 없습니다."]}),`
`,e.jsxs(n.p,{children:["오버레이 content는 z-index를 가져 ",e.jsx(n.strong,{children:"그 자체로 stacking context"}),"입니다. 따라서 content 안의 z(닫기 버튼·footer의 ",e.jsx(n.code,{children:"z-m2-dialog"}),")는 자기 오버레이 안에서만 비교되고 밖으로 새지 않습니다."]}),`
`,e.jsxs(n.p,{children:["특정 컨테이너 안에 popper를 묶어 둬야 하면 Radix가 제공하는 ",e.jsx(n.code,{children:"container"})," prop을 씁니다(",e.jsx(n.code,{children:"SelectContent"})," / ",e.jsx(n.code,{children:"PopoverContent"})," / ",e.jsx(n.code,{children:"ComboboxContent"})," / ",e.jsx(n.code,{children:"MultiSelectContent"})," / ",e.jsx(n.code,{children:"TooltipContent"})," / ",e.jsx(n.code,{children:"DropdownMenuContent"}),"). Radix에는 z-index를 관리해주는 API가 없고, 레이어링은 이 문서의 규칙으로 직접 관리합니다."]}),`
`,e.jsx(n.h2,{id:"scrim-누적--최상단만-어둡게",children:"scrim 누적 — 최상단만 어둡게"}),`
`,e.jsxs(n.p,{children:["오버레이를 겹칠 때 아래 scrim까지 칠하면 ",e.jsx(n.code,{children:"bg-black/50"}),'이 누적되어 2단 0.75 / 3단 0.875로 사실상 검정이 됩니다. 이전 오버레이가 "배경으로 물러난" 게 아니라 "안 보이는" 상태가 되므로, ',e.jsx(n.strong,{children:"스택 최상단 오버레이의 scrim만 칠하고 아래는 비웁니다."})," 깊이와 무관하게 어두움이 일정합니다."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["판단은 overlay-kit ",e.jsx(n.code,{children:"useCurrentOverlay()"})," 한 줄입니다. 닫히는 중(",e.jsx(n.code,{children:"isOpen: false"}),")인 오버레이는 제외되므로, 위가 닫히기 시작하는 즉시 아래가 최상단이 됩니다."]}),`
`,e.jsxs(n.li,{children:["전환은 비대칭입니다. ",e.jsx(n.strong,{children:"어두움 → 투명"}),"(위에 오버레이가 열림)은 새 scrim의 페이드인과 크로스페이드되도록 150ms, ",e.jsx(n.strong,{children:"투명 → 어두움"}),"(위가 닫힘)과 ",e.jsx(n.strong,{children:"자기 자신이 닫히는 중"}),"은 전환 없이 즉시입니다. 전환을 걸면 그 사이 배경이 밝아졌다가 돌아오거나 아래 scrim과 겹쳐 더 어두워지는 깜빡임이 생깁니다."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SheetOverlay"})," / ",e.jsx(n.code,{children:"DialogOverlay"}),"의 ",e.jsx(n.code,{children:"dimmed"})," prop이 이 상태를 받습니다. ",e.jsx(n.code,{children:"openSheet"})," / ",e.jsx(n.code,{children:"openDialog"}),"의 ",e.jsx(n.code,{children:"overlayClassName"}),"으로 넘긴 배경색은 ",e.jsx(n.strong,{children:"항상 우선"}),"하므로, 필요하면 누적 동작으로 되돌릴 수 있습니다."]}),`
`]}),`
`,e.jsx(n.h2,{id:"눈으로-확인하기",children:"눈으로 확인하기"}),`
`,e.jsxs(n.p,{children:["중첩 시나리오는 ",e.jsx(n.a,{href:"?path=/docs/m2-overlay-stack--docs",children:"M2/Overlay Stack"})," 스토리에서 클릭으로 확인할 수 있습니다."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/m2-overlay-stack--sheet-then-dialog",children:"Sheet → Dialog"})," · ",e.jsx(n.a,{href:"?path=/story/m2-overlay-stack--dialog-then-sheet",children:"Dialog → Sheet"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/m2-overlay-stack--sheet-then-sheet",children:"Sheet → Sheet"})," · ",e.jsx(n.a,{href:"?path=/story/m2-overlay-stack--dialog-then-dialog",children:"Dialog → Dialog"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/m2-overlay-stack--three-level-stack",children:"3단 중첩 — scrim 누적 비교"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/m2-overlay-stack--nested-poppers",children:"중첩 오버레이 안의 Select · Tooltip"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/m2-overlay-stack--close-order",children:"닫기 순서"})}),`
`]})]})}function v(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{t as ZRow,v as default};
