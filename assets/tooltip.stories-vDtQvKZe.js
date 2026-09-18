import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-OJ7QbjDu.js";import{B as o}from"./button-CkQv11My.js";import{P as $,a as ee,b as te}from"./popover-content-D-v37j1B.js";import{T as oe}from"./textarea-CMJtR3hd.js";import{T as s,a,b as n,c as se}from"./tooltip-content-CM0Lp_dY.js";import{C as ae}from"./circle-check-big-Bhchwo_Q.js";import{C as ne}from"./circle-alert-CxKxvNIm.js";import{C as re}from"./circle-x-4mJeKR0t.js";import{I as y}from"./info-CBqhzTkO.js";import{S as C}from"./star-CVmaTZu_.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./index-BLnlIFXI.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-jm-SPu3n.js";import"./index-ikjn6k1p.js";import"./index-Dc1_MvIw.js";import"./index-J9NOjVw1.js";import"./index-BkBxvK4w.js";import"./index-aeuf1bbk.js";import"./index-vJq8CsoX.js";import"./index-CxFCylgP.js";import"./index-9WfwfrTN.js";const Re={title:"M2/Tooltip",component:s,parameters:{layout:"centered",docs:{description:{component:`
### 추가 정보를 제공하는 툴팁 컴포넌트

Tooltip 컴포넌트는 사용자가 요소에 마우스를 올리거나 키보드 포커스할 때 추가 정보를 표시하는 데 사용됩니다.
M2 스타일을 Radix Tooltip 기반으로 구현했으며, trigger/content 복합 컴포넌트 구조를 유지합니다.

## 주요 기능

- **다양한 위치**: \`top\`, \`bottom\`, \`left\`, \`right\` 네 가지 위치 지원
- **자동 위치 조정**: 화면 밖으로 나가지 않도록 Radix collision 로직으로 위치 조정
- **애니메이션**: 페이드 + 나온 방향으로 4px 슬라이드
- **지연 시간 설정**: \`delayDuration\`으로 표시 지연 시간 조정 가능
- **접근성 지원**: 키보드 포커스 시에도 툴팁 표시
- **풍부한 콘텐츠**: 텍스트, 아이콘, 여러 줄 설명을 TooltipContent 내부에 구성 가능
- **arrow**: 기본으로 표시됩니다. 툴바 아이콘의 hover 라벨처럼 트리거가 바로 옆에 붙어 있어
  가리킬 대상이 없으면 \`showArrow={false}\`로 끄세요
- **공유 delay 스코프**: 툴바처럼 트리거가 여럿인 줄은 \`TooltipProvider\`로 한 번 감싸면
  \`skipDelayDuration\` 안에 다른 트리거로 옮길 때 지연이 다시 걸리지 않습니다. 감싸지 않으면
  각 \`Tooltip\`이 스스로 폴백 Provider를 만듭니다(delay 0ms)

## 사용 예시

\`\`\`tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button>호버하세요</Button>
  </TooltipTrigger>
  <TooltipContent>
    이것은 툴팁 메시지입니다
  </TooltipContent>
</Tooltip>
\`\`\`

특정 입력창을 지목하는 제어형 힌트:

\`\`\`tsx
<Tooltip open={isHintVisible}>
  <TooltipTrigger asChild>
    <span className="block w-full">
      <Textarea value={prompt} onChange={...} />
    </span>
  </TooltipTrigger>
  <TooltipContent side="top" align="start">
    요청 내용을 5자 이상 입력해 주세요
  </TooltipContent>
</Tooltip>
\`\`\`

툴바 — 공유 delay 스코프 + arrow 없는 라벨:

\`\`\`tsx
<TooltipProvider delayDuration={600} skipDelayDuration={300} disableHoverableContent>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon-sm" aria-label="글꼴"><Type /></Button>
    </TooltipTrigger>
    <TooltipContent showArrow={false}>글꼴</TooltipContent>
  </Tooltip>
  {/* ... */}
</TooltipProvider>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"툴팁의 열림 상태를 제어합니다. controlled 방식에서 사용합니다.",table:{type:{summary:"boolean"},category:"상태"}},defaultOpen:{control:"boolean",description:"툴팁의 초기 열림 상태입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},onOpenChange:{action:"openChange",description:"툴팁 열림 상태가 바뀔 때 호출되는 콜백입니다.",table:{type:{summary:"(open: boolean) => void"},category:"이벤트"}},delayDuration:{control:"number",description:"툴팁이 표시되기까지의 지연 시간입니다. 밀리초 단위로 지정합니다. 지정하지 않으면 상위 TooltipProvider 값을 따르고, Provider가 없으면 0ms입니다.",table:{type:{summary:"number"},defaultValue:{summary:"0 (상위 TooltipProvider가 있으면 그 값)"},category:"동작"}},disableHoverableContent:{control:"boolean",description:"content 위에 마우스를 올렸을 때 툴팁을 유지하지 않을지 여부입니다.",table:{type:{summary:"boolean"},category:"동작"}}},args:{defaultOpen:!1,delayDuration:0}},p={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen, delayDuration 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
- **DelayDuration**: 마우스를 올린 뒤 툴팁이 표시되기까지의 지연 시간을 설정합니다.
        `}}},render:t=>e.jsxs(s,{...t,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"호버하세요"})}),e.jsx(n,{children:"이것은 툴팁 메시지입니다"})]})},m={parameters:{docs:{description:{story:`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col items-center justify-center gap-12 p-20",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-center text-sm font-semibold",children:"Top"}),e.jsxs(s,{defaultOpen:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"위쪽 툴팁"})}),e.jsx(n,{side:"top",children:"위쪽에 표시되는 툴팁입니다"})]})]}),e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-center text-sm font-semibold",children:"Left"}),e.jsxs(s,{defaultOpen:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"왼쪽 툴팁"})}),e.jsx(n,{side:"left",children:"왼쪽에 표시되는 툴팁입니다"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-center text-sm font-semibold",children:"Right"}),e.jsxs(s,{defaultOpen:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"오른쪽 툴팁"})}),e.jsx(n,{side:"right",children:"오른쪽에 표시되는 툴팁입니다"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-center text-sm font-semibold",children:"Bottom"}),e.jsxs(s,{defaultOpen:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"아래쪽 툴팁"})}),e.jsx(n,{side:"bottom",children:"아래쪽에 표시되는 툴팁입니다"})]})]})]})},x={parameters:{docs:{description:{story:`
긴 텍스트가 포함된 툴팁 예시입니다.
툴팁은 content의 폭 제한과 줄바꿈을 통해 상세 정보를 표시할 수 있습니다.
        `}}},render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"긴 텍스트 툴팁"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(s,{defaultOpen:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"긴 메시지"})}),e.jsx(n,{className:"max-w-64 leading-relaxed",children:"이것은 매우 긴 툴팁 메시지입니다. 툴팁이 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다."})]}),e.jsxs(s,{defaultOpen:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"여러 줄 메시지"})}),e.jsxs(n,{className:"max-w-72 leading-relaxed",children:[e.jsx("span",{children:"이것은 여러 줄에 걸쳐 표시되는 툴팁 메시지입니다."}),e.jsx("br",{}),e.jsx("span",{children:"사용자에게 상세한 정보를 제공할 수 있습니다."})]})]})]})]})})},h={parameters:{docs:{description:{story:`
\`delayDuration\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정합니다.
        `}}},render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:[[0,"지연 시간 없음 (0ms)","즉시 표시","마우스를 올리면 즉시 표시됩니다"],[500,"500ms 지연","0.5초 후 표시","마우스를 올린 후 0.5초 후에 표시됩니다"],[1e3,"1000ms 지연","1초 후 표시","마우스를 올린 후 1초 후에 표시됩니다"]].map(([t,r,l,i])=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:r}),e.jsxs(s,{delayDuration:t,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:l})}),e.jsx(n,{children:i})]})]},r))})},g={parameters:{docs:{description:{story:`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
TooltipContent 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"아이콘과 텍스트"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[[ae,"성공 상태","작업이 성공적으로 완료되었습니다"],[ne,"경고 상태","주의가 필요한 작업입니다"],[re,"에러 상태","오류가 발생했습니다"]].map(([t,r,l])=>e.jsxs(s,{children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{color:r==="에러 상태"?"danger":r==="경고 상태"?"warning":"primary",children:r})}),e.jsx(n,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{className:"size-4"}),e.jsx("span",{children:l})]})})]},r))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"스타일이 적용된 텍스트"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(s,{children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"강조 텍스트"})}),e.jsx(n,{children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"font-bold",children:"중요한 정보"}),e.jsx("span",{className:"text-xs opacity-80",children:"이것은 추가 설명입니다"})]})})]}),e.jsxs(s,{children:[e.jsx(a,{asChild:!0,children:e.jsxs(o,{children:[e.jsx(y,{className:"size-4"}),e.jsx("span",{children:"정보"})]})}),e.jsx(n,{children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(y,{className:"mt-0.5 size-4"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"font-semibold",children:"추가 정보"}),e.jsx("span",{className:"text-xs opacity-80",children:"이 기능에 대한 상세한 설명이 여기에 표시됩니다"})]})]})})]}),e.jsxs(s,{children:[e.jsx(a,{asChild:!0,children:e.jsxs(o,{children:[e.jsx(C,{className:"size-4"}),e.jsx("span",{children:"인기 항목"})]})}),e.jsx(n,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(C,{className:"fill-m2-warning text-m2-warning size-4"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-semibold",children:"인기 항목"}),e.jsx("span",{className:"text-xs opacity-80",children:"많은 사용자가 선택한 항목입니다"})]})]})})]})]})]})]})},f={parameters:{layout:"fullscreen",docs:{description:{story:`
4방향(top/right/bottom/left) × arrow on/off = 8케이스입니다.
\`open\`으로 제어하므로 hover와 무관하게 항상 열려 있어 실측·시각 회귀 확인에 쓸 수 있습니다.
        `}}},render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-32 p-32",children:[["top","top-arrow","top-plain"],["right","right-arrow","right-plain"],["bottom","bottom-arrow","bottom-plain"],["left","left-arrow","left-plain"]].map(([t,r,l])=>e.jsxs("div",{className:"flex flex-col items-center gap-16",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:t}),e.jsxs("div",{className:"flex items-center gap-16",children:[e.jsxs(s,{open:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{variant:"outlined",color:"secondary",children:"arrow"})}),e.jsx(n,{"data-case":r,side:t,children:"글꼴"})]}),e.jsxs(s,{open:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{variant:"outlined",color:"secondary",children:"plain"})}),e.jsx(n,{"data-case":l,side:t,showArrow:!1,children:"글꼴"})]})]})]},t))})},u={parameters:{docs:{description:{story:"\n`TooltipProvider`로 한 번 감싸면 형제 트리거가 같은 delay 스코프를 공유합니다.\n위 줄(공유)은 첫 툴팁이 열린 뒤 `skipDelayDuration` 안에 다른 버튼으로 옮기면 지연 없이 바로 뜨고,\n아래 줄(격리)은 버튼마다 폴백 Provider가 따로 생겨 `delayDuration`이 각자 적용됩니다.\n\n툴바 라벨이라 `showArrow={false}`로 arrow를 끄고 `disableHoverableContent`를 켰습니다.\n아이콘 라벨은 content에 마우스를 올릴 일이 없는데, 켜 두면 grace area가 인접 버튼을 삼켜서\n옆 버튼으로 옮겨도 이전 라벨이 그대로 붙어 있습니다(버튼 간격이 4px이라 특히 그렇습니다).\n        "}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-10",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"TooltipProvider 공유 (delay 600ms / skipDelay 300ms)"}),e.jsx(se,{delayDuration:600,skipDelayDuration:300,disableHoverableContent:!0,children:e.jsx("div",{className:"flex gap-1",children:["글꼴","링크","표","이미지","코드"].map(t=>e.jsxs(s,{children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{size:"icon-sm",variant:"outlined",color:"secondary","aria-label":t,"data-toolbar":"shared",children:t.charAt(0)})}),e.jsx(n,{showArrow:!1,children:t})]},t))})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Provider 없음 — 대조군 (각 Tooltip이 스스로 폴백, delay 0ms)"}),e.jsx("div",{className:"flex gap-1",children:["글꼴","링크","표","이미지","코드"].map(t=>e.jsxs(s,{children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{size:"icon-sm",variant:"outlined",color:"secondary","aria-label":t,"data-toolbar":"isolated",children:t.charAt(0)})}),e.jsx(n,{showArrow:!1,children:t})]},t))})]})]})},le=1e3,N=5,T={parameters:{docs:{description:{story:'\n팝오버 안 프롬프트 입력에 대한 제어형 검증 힌트입니다. `open`을 직접 제어하므로 hover와 무관하게\n1초간 떴다 사라지고, arrow로 입력창을 지목합니다.\n\n`TooltipTrigger asChild`로 `<span className="block w-full">`을 감싸면 anchor rect가 textarea\n전체가 되어 `align="start"`가 입력창 왼쪽 끝에 맞습니다.\n\n주의 — 툴팁은 자기가 덮는 영역의 클릭을 가로챕니다. 위 "예시" 버튼이 그 겹침 케이스입니다.\n`className="pointer-events-none"`으로는 해결되지 않습니다: 클릭을 막는 것은 content가 아니라\nradix popper가 만드는 바깥 wrapper(`position: fixed`, content와 정확히 같은 크기)이고,\nradix는 이 wrapper의 `pointer-events`를 바꿀 공개 API를 제공하지 않습니다.\n\n따라서 잠깐 떴다 사라지는 힌트는 **조작 가능한 요소를 덮지 않는 위치**에 두세요\n(`side`/`align`을 조정하거나, 덮이는 버튼을 옮기기). 툴팁 content에 마우스를 올려도\n상위 Popover는 닫히지 않습니다.\n        '}}},render:function(){const[r,l]=d.useState(""),[i,j]=d.useState(!1),[Y,Z]=d.useState(0);return d.useEffect(()=>{if(!i)return;const c=window.setTimeout(()=>j(!1),le);return()=>window.clearTimeout(c)},[i]),e.jsx("div",{className:"p-10",children:e.jsxs($,{defaultOpen:!0,children:[e.jsx(ee,{asChild:!0,children:e.jsx(o,{children:"카피킬러 AI 생성"})}),e.jsxs(te,{align:"start",className:"flex w-96 flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-m2-gray-1 text-sm font-semibold",children:"요청 내용"}),e.jsxs(o,{size:"xs",variant:"text",color:"secondary","data-testid":"overlap-target",onClick:()=>Z(c=>c+1),children:["예시 ",e.jsx("span",{"data-testid":"overlap-count",children:Y})]})]}),e.jsxs(s,{open:i,children:[e.jsx(a,{asChild:!0,children:e.jsx("span",{className:"block w-full",children:e.jsx(oe,{"data-testid":"hint-textarea",rows:3,placeholder:"AI에게 요청할 내용을 입력하세요",value:r,onChange:c=>l(c.target.value)})})}),e.jsxs(n,{"data-case":"hint",side:"top",align:"start",children:["요청 내용을 ",N,"자 이상 입력해 주세요"]})]}),e.jsx(o,{"data-testid":"hint-submit",onClick:()=>{if(r.trim().length<N){j(!0);return}j(!1)},children:"생성"})]})]})})}},v={parameters:{layout:"fullscreen",docs:{description:{story:"\n긴 문장 줄바꿈과 arrow가 동시에 걸리는 케이스입니다.\n줄바꿈은 `max-w-106`(424px)이 만들고, 공백 없이 이어지는 긴 토큰(URL 등)은 `break-words`가\n잘라내지 않고 줄바꿈시킵니다.\n        "}}},render:()=>e.jsxs("div",{className:"flex flex-col items-start gap-40 p-32",children:[e.jsxs(s,{open:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{variant:"outlined",color:"secondary",children:"긴 문장 + arrow"})}),e.jsx(n,{"data-case":"long-wrap",side:"bottom",align:"start",children:"AI 생성은 입력한 요청 내용을 기준으로 문단을 만듭니다. 요청이 짧으면 결과 품질이 크게 떨어지므로 최소 5자 이상, 가능하면 한 문장으로 구체적으로 적어 주세요."})]}),e.jsxs(s,{open:!0,children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{variant:"outlined",color:"secondary",children:"끊기지 않는 긴 토큰"})}),e.jsx(n,{"data-case":"long-token",side:"bottom",align:"start",children:"https://www.copykiller.com/very/long/path/that/never/breaks/anywhere/because/it/has/no/spaces/1234567890"})]})]})};var b,w,B;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen, delayDuration 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
- **DelayDuration**: 마우스를 올린 뒤 툴팁이 표시되기까지의 지연 시간을 설정합니다.
        \`
      }
    }
  },
  render: args => <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>호버하세요</Button>
      </TooltipTrigger>
      <TooltipContent>이것은 툴팁 메시지입니다</TooltipContent>
    </Tooltip>
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var P,D,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col items-center justify-center gap-12 p-20">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-center text-sm font-semibold">Top</h3>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button>위쪽 툴팁</Button>
          </TooltipTrigger>
          <TooltipContent side="top">위쪽에 표시되는 툴팁입니다</TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center gap-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-center text-sm font-semibold">Left</h3>
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button>왼쪽 툴팁</Button>
            </TooltipTrigger>
            <TooltipContent side="left">왼쪽에 표시되는 툴팁입니다</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-center text-sm font-semibold">Right</h3>
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button>오른쪽 툴팁</Button>
            </TooltipTrigger>
            <TooltipContent side="right">오른쪽에 표시되는 툴팁입니다</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-center text-sm font-semibold">Bottom</h3>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button>아래쪽 툴팁</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">아래쪽에 표시되는 툴팁입니다</TooltipContent>
        </Tooltip>
      </div>
    </div>
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var k,O,A;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
긴 텍스트가 포함된 툴팁 예시입니다.
툴팁은 content의 폭 제한과 줄바꿈을 통해 상세 정보를 표시할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">긴 텍스트 툴팁</h3>
        <div className="flex flex-wrap gap-4">
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button>긴 메시지</Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-64 leading-relaxed">
              이것은 매우 긴 툴팁 메시지입니다. 툴팁이 긴 텍스트를 어떻게 처리하는지 확인할 수
              있습니다.
            </TooltipContent>
          </Tooltip>
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button>여러 줄 메시지</Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-72 leading-relaxed">
              <span>이것은 여러 줄에 걸쳐 표시되는 툴팁 메시지입니다.</span>
              <br />
              <span>사용자에게 상세한 정보를 제공할 수 있습니다.</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...(A=(O=x.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var H,S,z;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`delayDuration\\\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정합니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      {[[0, '지연 시간 없음 (0ms)', '즉시 표시', '마우스를 올리면 즉시 표시됩니다'], [500, '500ms 지연', '0.5초 후 표시', '마우스를 올린 후 0.5초 후에 표시됩니다'], [1000, '1000ms 지연', '1초 후 표시', '마우스를 올린 후 1초 후에 표시됩니다']].map(([delay, title, label, content]) => <div key={title} className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">{title}</h3>
          <Tooltip delayDuration={delay as number}>
            <TooltipTrigger asChild>
              <Button>{label}</Button>
            </TooltipTrigger>
            <TooltipContent>{content}</TooltipContent>
          </Tooltip>
        </div>)}
    </div>
}`,...(z=(S=h.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var R,V,_;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
TooltipContent 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">아이콘과 텍스트</h3>
        <div className="flex flex-wrap gap-4">
          {[[CheckCircleIcon, '성공 상태', '작업이 성공적으로 완료되었습니다'], [AlertCircleIcon, '경고 상태', '주의가 필요한 작업입니다'], [XCircleIcon, '에러 상태', '오류가 발생했습니다']].map(([Icon, label, content]) => <Tooltip key={label as string}>
              <TooltipTrigger asChild>
                <Button color={label === '에러 상태' ? 'danger' : label === '경고 상태' ? 'warning' : 'primary'}>
                  {label as string}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <Icon className="size-4" />
                  <span>{content as string}</span>
                </div>
              </TooltipContent>
            </Tooltip>)}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">스타일이 적용된 텍스트</h3>
        <div className="flex flex-wrap gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>강조 텍스트</Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col gap-1">
                <span className="font-bold">중요한 정보</span>
                <span className="text-xs opacity-80">이것은 추가 설명입니다</span>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <InfoIcon className="size-4" />
                <span>정보</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-start gap-2">
                <InfoIcon className="mt-0.5 size-4" />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">추가 정보</span>
                  <span className="text-xs opacity-80">
                    이 기능에 대한 상세한 설명이 여기에 표시됩니다
                  </span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <StarIcon className="size-4" />
                <span>인기 항목</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                <StarIcon className="fill-m2-warning text-m2-warning size-4" />
                <div className="flex flex-col">
                  <span className="font-semibold">인기 항목</span>
                  <span className="text-xs opacity-80">많은 사용자가 선택한 항목입니다</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...(_=(V=g.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var L,M,E;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: \`
4방향(top/right/bottom/left) × arrow on/off = 8케이스입니다.
\\\`open\\\`으로 제어하므로 hover와 무관하게 항상 열려 있어 실측·시각 회귀 확인에 쓸 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="grid grid-cols-2 gap-32 p-32">
      {([['top', 'top-arrow', 'top-plain'], ['right', 'right-arrow', 'right-plain'], ['bottom', 'bottom-arrow', 'bottom-plain'], ['left', 'left-arrow', 'left-plain']] as const).map(([side, arrowCase, plainCase]) => <div key={side} className="flex flex-col items-center gap-16">
          <h3 className="text-m2-gray-1 text-sm font-semibold">{side}</h3>
          <div className="flex items-center gap-16">
            <Tooltip open>
              <TooltipTrigger asChild>
                <Button variant="outlined" color="secondary">
                  arrow
                </Button>
              </TooltipTrigger>
              <TooltipContent data-case={arrowCase} side={side}>
                글꼴
              </TooltipContent>
            </Tooltip>
            <Tooltip open>
              <TooltipTrigger asChild>
                <Button variant="outlined" color="secondary">
                  plain
                </Button>
              </TooltipTrigger>
              <TooltipContent data-case={plainCase} side={side} showArrow={false}>
                글꼴
              </TooltipContent>
            </Tooltip>
          </div>
        </div>)}
    </div>
}`,...(E=(M=f.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var U,W,G;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`TooltipProvider\\\`로 한 번 감싸면 형제 트리거가 같은 delay 스코프를 공유합니다.
위 줄(공유)은 첫 툴팁이 열린 뒤 \\\`skipDelayDuration\\\` 안에 다른 버튼으로 옮기면 지연 없이 바로 뜨고,
아래 줄(격리)은 버튼마다 폴백 Provider가 따로 생겨 \\\`delayDuration\\\`이 각자 적용됩니다.

툴바 라벨이라 \\\`showArrow={false}\\\`로 arrow를 끄고 \\\`disableHoverableContent\\\`를 켰습니다.
아이콘 라벨은 content에 마우스를 올릴 일이 없는데, 켜 두면 grace area가 인접 버튼을 삼켜서
옆 버튼으로 옮겨도 이전 라벨이 그대로 붙어 있습니다(버튼 간격이 4px이라 특히 그렇습니다).
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-10 p-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">
          TooltipProvider 공유 (delay 600ms / skipDelay 300ms)
        </h3>
        <TooltipProvider delayDuration={600} skipDelayDuration={300} disableHoverableContent>
          <div className="flex gap-1">
            {['글꼴', '링크', '표', '이미지', '코드'].map(label => <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Button size="icon-sm" variant="outlined" color="secondary" aria-label={label} data-toolbar="shared">
                    {label.charAt(0)}
                  </Button>
                </TooltipTrigger>
                <TooltipContent showArrow={false}>{label}</TooltipContent>
              </Tooltip>)}
          </div>
        </TooltipProvider>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">
          Provider 없음 — 대조군 (각 Tooltip이 스스로 폴백, delay 0ms)
        </h3>
        <div className="flex gap-1">
          {['글꼴', '링크', '표', '이미지', '코드'].map(label => <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Button size="icon-sm" variant="outlined" color="secondary" aria-label={label} data-toolbar="isolated">
                  {label.charAt(0)}
                </Button>
              </TooltipTrigger>
              <TooltipContent showArrow={false}>{label}</TooltipContent>
            </Tooltip>)}
        </div>
      </div>
    </div>
}`,...(G=(W=u.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var X,q,F;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
팝오버 안 프롬프트 입력에 대한 제어형 검증 힌트입니다. \\\`open\\\`을 직접 제어하므로 hover와 무관하게
1초간 떴다 사라지고, arrow로 입력창을 지목합니다.

\\\`TooltipTrigger asChild\\\`로 \\\`<span className="block w-full">\\\`을 감싸면 anchor rect가 textarea
전체가 되어 \\\`align="start"\\\`가 입력창 왼쪽 끝에 맞습니다.

주의 — 툴팁은 자기가 덮는 영역의 클릭을 가로챕니다. 위 "예시" 버튼이 그 겹침 케이스입니다.
\\\`className="pointer-events-none"\\\`으로는 해결되지 않습니다: 클릭을 막는 것은 content가 아니라
radix popper가 만드는 바깥 wrapper(\\\`position: fixed\\\`, content와 정확히 같은 크기)이고,
radix는 이 wrapper의 \\\`pointer-events\\\`를 바꿀 공개 API를 제공하지 않습니다.

따라서 잠깐 떴다 사라지는 힌트는 **조작 가능한 요소를 덮지 않는 위치**에 두세요
(\\\`side\\\`/\\\`align\\\`을 조정하거나, 덮이는 버튼을 옮기기). 툴팁 content에 마우스를 올려도
상위 Popover는 닫히지 않습니다.
        \`
      }
    }
  },
  render: function Render() {
    const [prompt, setPrompt] = useState('');
    const [isHintVisible, setIsHintVisible] = useState(false);
    const [overlapCount, setOverlapCount] = useState(0);
    useEffect(() => {
      if (!isHintVisible) return;
      const timer = window.setTimeout(() => setIsHintVisible(false), HINT_DURATION_MS);
      return () => window.clearTimeout(timer);
    }, [isHintVisible]);
    return <div className="p-10">
        <Popover defaultOpen>
          <PopoverTrigger asChild>
            <Button>카피킬러 AI 생성</Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="flex w-96 flex-col gap-3">
            {/* 힌트(side="top" align="start")가 이 버튼을 덮는다 — pointer-events 검증용 */}
            <div className="flex items-center gap-2">
              <span className="text-m2-gray-1 text-sm font-semibold">요청 내용</span>
              <Button size="xs" variant="text" color="secondary" data-testid="overlap-target" onClick={() => setOverlapCount(count => count + 1)}>
                예시 <span data-testid="overlap-count">{overlapCount}</span>
              </Button>
            </div>

            <Tooltip open={isHintVisible}>
              <TooltipTrigger asChild>
                <span className="block w-full">
                  <Textarea data-testid="hint-textarea" rows={3} placeholder="AI에게 요청할 내용을 입력하세요" value={prompt} onChange={event => setPrompt(event.target.value)} />
                </span>
              </TooltipTrigger>
              <TooltipContent data-case="hint" side="top" align="start">
                요청 내용을 {MIN_PROMPT_LENGTH}자 이상 입력해 주세요
              </TooltipContent>
            </Tooltip>

            <Button data-testid="hint-submit" onClick={() => {
            if (prompt.trim().length < MIN_PROMPT_LENGTH) {
              setIsHintVisible(true);
              return;
            }
            setIsHintVisible(false);
          }}>
              생성
            </Button>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...(F=(q=T.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: \`
긴 문장 줄바꿈과 arrow가 동시에 걸리는 케이스입니다.
줄바꿈은 \\\`max-w-106\\\`(424px)이 만들고, 공백 없이 이어지는 긴 토큰(URL 등)은 \\\`break-words\\\`가
잘라내지 않고 줄바꿈시킵니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col items-start gap-40 p-32">
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button variant="outlined" color="secondary">
            긴 문장 + arrow
          </Button>
        </TooltipTrigger>
        <TooltipContent data-case="long-wrap" side="bottom" align="start">
          AI 생성은 입력한 요청 내용을 기준으로 문단을 만듭니다. 요청이 짧으면 결과 품질이 크게
          떨어지므로 최소 5자 이상, 가능하면 한 문장으로 구체적으로 적어 주세요.
        </TooltipContent>
      </Tooltip>

      <Tooltip open>
        <TooltipTrigger asChild>
          <Button variant="outlined" color="secondary">
            끊기지 않는 긴 토큰
          </Button>
        </TooltipTrigger>
        <TooltipContent data-case="long-token" side="bottom" align="start">
          https://www.copykiller.com/very/long/path/that/never/breaks/anywhere/because/it/has/no/spaces/1234567890
        </TooltipContent>
      </Tooltip>
    </div>
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ve=["Playground","Positions","LongText","DelayDuration","WithRichContent","ArrowDirections","SharedProvider","ControlledHint","LongTextWithArrow"];export{f as ArrowDirections,T as ControlledHint,h as DelayDuration,x as LongText,v as LongTextWithArrow,p as Playground,m as Positions,u as SharedProvider,g as WithRichContent,Ve as __namedExportsOrder,Re as default};
