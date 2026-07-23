import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-OJ7QbjDu.js";import{B as o}from"./button-CkQv11My.js";import{C as k}from"./checkbox-BeV60aIi.js";import{I as W}from"./input-BeM9XfYP.js";import{L as h}from"./label-C0vn8eGT.js";import{P as a,a as t,b as r,c as F,d as V}from"./popover-content-Dayl4ZTc.js";import{I as E}from"./info-CBqhzTkO.js";import{S as L}from"./settings-BWfxB16v.js";import{U}from"./user-DKwQRr9F.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./check-XAxGDgGN.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-jm-SPu3n.js";import"./index-BilTj9-P.js";import"./index-nJQzngU_.js";import"./index-b9QAQN5m.js";import"./index-CI4jWBLT.js";import"./index-DAVdU-vC.js";import"./index-Dc1_MvIw.js";import"./index-BVTTSdsW.js";import"./index-D15pND6U.js";import"./index-BtVicQOV.js";const ge={title:"M2/Popover",component:a,parameters:{layout:"centered",docs:{description:{component:`
### 팝오버 컴포넌트

Popover 컴포넌트는 트리거 요소 근처에 표시되는 작은 오버레이입니다.
M2 스타일을 Radix Popover 기반으로 구현했으며, 접근성과 키보드 네비게이션을 지원합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Popover\`, \`PopoverTrigger\`, \`PopoverContent\`, \`PopoverAnchor\`로 구성
- **위치 조정**: \`side\`와 \`align\` prop을 통해 팝오버 위치 제어
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 지원
- **충돌 감지**: 화면 경계와 충돌할 때 Radix Popover가 위치를 조정
- **상태 제어**: \`open\` / \`onOpenChange\`를 통한 controlled 사용 지원
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>팝오버 열기</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>팝오버 내용</p>
  </PopoverContent>
</Popover>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"팝오버의 열림 상태를 제어합니다. controlled 방식에서 사용합니다.",table:{type:{summary:"boolean"},category:"상태"}},defaultOpen:{control:"boolean",description:"팝오버의 초기 열림 상태입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},onOpenChange:{action:"openChange",description:"팝오버 열림 상태가 바뀔 때 호출되는 콜백입니다.",table:{type:{summary:"(open: boolean) => void"},category:"이벤트"}},modal:{control:"boolean",description:"modal popover 여부입니다. true일 때 외부 상호작용 제한이 강화됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"동작"}}}},l={render:()=>e.jsxs(a,{children:[e.jsx(t,{asChild:!0,children:e.jsx(o,{children:"팝오버 열기"})}),e.jsx(r,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-m2-gray-0 font-semibold",children:"팝오버 제목"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"이것은 기본 팝오버입니다."})]})})]})},i={render:()=>e.jsxs(a,{children:[e.jsx(t,{asChild:!0,children:e.jsx(o,{children:"상세 정보 보기"})}),e.jsx(r,{className:"w-80",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(E,{className:"text-m2-info size-5"}),e.jsx("h4",{className:"text-m2-gray-0 font-semibold",children:"정보 팝오버"})]}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"이 팝오버는 더 많은 정보를 표시할 수 있습니다. 여러 줄의 텍스트와 아이콘을 포함할 수 있습니다."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{size:"sm",children:"확인"}),e.jsx(o,{size:"sm",variant:"outlined",color:"secondary",children:"취소"})]})]})})]})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Side 위치"}),e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[["top","위 (top)","위쪽에 표시되는 팝오버"],["right","오른쪽 (right)","오른쪽에 표시되는 팝오버"],["bottom","아래 (bottom)","아래쪽에 표시되는 팝오버"],["left","왼쪽 (left)","왼쪽에 표시되는 팝오버"]].map(([s,n,x])=>e.jsxs(a,{children:[e.jsx(t,{asChild:!0,children:e.jsx(o,{children:n})}),e.jsx(r,{side:s,children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:x})})]},s))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Align 정렬"}),e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[["start","시작 (start)","시작 정렬"],["center","중앙 (center)","중앙 정렬"],["end","끝 (end)","끝 정렬"]].map(([s,n,x])=>e.jsxs(a,{children:[e.jsx(t,{asChild:!0,children:e.jsx(o,{children:n})}),e.jsx(r,{side:"bottom",align:s,children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:x})})]},s))})]})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Anchor를 사용한 팝오버"}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs(F,{children:[e.jsx(t,{asChild:!0,children:e.jsx(o,{children:"트리거 버튼"})}),e.jsx(V,{children:e.jsx("div",{className:"border-m2-info rounded-md border-2 border-dashed p-4",children:e.jsx("p",{className:"text-m2-secondary text-sm",children:"이 영역이 Anchor입니다"})})}),e.jsx(r,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"이 팝오버는 Anchor 영역을 기준으로 위치가 결정됩니다."})})]})})]})},d={render:()=>e.jsxs(a,{children:[e.jsx(t,{asChild:!0,children:e.jsx(o,{children:"설정 열기"})}),e.jsx(r,{className:"w-80",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"text-m2-gray-0 flex items-center gap-2",children:[e.jsx(L,{className:"size-4"}),e.jsx("h4",{className:"font-semibold",children:"패널 설정"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(h,{htmlFor:"popover-width",children:"너비"}),e.jsx(W,{id:"popover-width",defaultValue:"100%"})]}),e.jsxs("div",{className:"text-m2-gray-1 flex items-center gap-2 text-sm",children:[e.jsx(k,{id:"popover-notification",defaultChecked:!0}),e.jsx(h,{htmlFor:"popover-notification",className:"cursor-pointer",children:"알림 받기"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{size:"sm",children:"저장"}),e.jsx(o,{size:"sm",variant:"outlined",color:"secondary",children:"취소"})]})]})})]})},p={parameters:{docs:{description:{story:"\n제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 `open`과 `onOpenChange`를 통해 팝오버의 열림 상태를 완전히 제어합니다.\n        "}}},render:()=>{const[s,n]=I.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsxs(F,{open:s,onOpenChange:n,children:[e.jsx(t,{asChild:!0,children:e.jsx(o,{children:s?"닫기":"열기"})}),e.jsx(r,{className:"w-72",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"text-m2-gray-0 flex items-center gap-2",children:[e.jsx(L,{className:"size-4"}),e.jsx("span",{className:"font-medium",children:"설정"})]}),e.jsxs("div",{className:"text-m2-gray-1 flex items-center gap-2 text-sm",children:[e.jsx(k,{id:"controlled-popover-notification",defaultChecked:!0}),e.jsx(h,{htmlFor:"controlled-popover-notification",className:"cursor-pointer",children:"알림 받기"})]}),e.jsxs("div",{className:"text-m2-secondary flex items-center gap-2 text-sm",children:[e.jsx(U,{className:"size-4"}),"제어 팝오버 예시"]})]})})]}),e.jsxs("p",{className:"text-m2-secondary text-xs",children:["현재 상태: ",s?"open":"closed"]})]})}};var v,g,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>팝오버 열기</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <h4 className="text-m2-gray-0 font-semibold">팝오버 제목</h4>
          <p className="text-m2-secondary text-sm">이것은 기본 팝오버입니다.</p>
        </div>
      </PopoverContent>
    </Popover>
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,N,j;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>상세 정보 보기</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Info className="text-m2-info size-5" />
            <h4 className="text-m2-gray-0 font-semibold">정보 팝오버</h4>
          </div>
          <p className="text-m2-secondary text-sm">
            이 팝오버는 더 많은 정보를 표시할 수 있습니다. 여러 줄의 텍스트와 아이콘을 포함할 수
            있습니다.
          </p>
          <div className="flex gap-2">
            <Button size="sm">확인</Button>
            <Button size="sm" variant="outlined" color="secondary">
              취소
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var P,y,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Side 위치</h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[['top', '위 (top)', '위쪽에 표시되는 팝오버'], ['right', '오른쪽 (right)', '오른쪽에 표시되는 팝오버'], ['bottom', '아래 (bottom)', '아래쪽에 표시되는 팝오버'], ['left', '왼쪽 (left)', '왼쪽에 표시되는 팝오버']].map(([side, label, content]) => <Popover key={side}>
              <PopoverTrigger asChild>
                <Button>{label}</Button>
              </PopoverTrigger>
              <PopoverContent side={side as 'top' | 'right' | 'bottom' | 'left'}>
                <p className="text-m2-gray-1 text-sm">{content}</p>
              </PopoverContent>
            </Popover>)}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Align 정렬</h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[['start', '시작 (start)', '시작 정렬'], ['center', '중앙 (center)', '중앙 정렬'], ['end', '끝 (end)', '끝 정렬']].map(([align, label, content]) => <Popover key={align}>
              <PopoverTrigger asChild>
                <Button>{label}</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align={align as 'start' | 'center' | 'end'}>
                <p className="text-m2-gray-1 text-sm">{content}</p>
              </PopoverContent>
            </Popover>)}
        </div>
      </div>
    </div>
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,B,T;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <h3 className="text-m2-gray-1 text-sm font-semibold">Anchor를 사용한 팝오버</h3>
      <div className="flex items-center gap-4">
        <PopoverRoot>
          <PopoverTrigger asChild>
            <Button>트리거 버튼</Button>
          </PopoverTrigger>
          <PopoverAnchor>
            <div className="border-m2-info rounded-md border-2 border-dashed p-4">
              <p className="text-m2-secondary text-sm">이 영역이 Anchor입니다</p>
            </div>
          </PopoverAnchor>
          <PopoverContent>
            <p className="text-m2-gray-1 text-sm">
              이 팝오버는 Anchor 영역을 기준으로 위치가 결정됩니다.
            </p>
          </PopoverContent>
        </PopoverRoot>
      </div>
    </div>
}`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var z,A,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>설정 열기</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-4">
          <div className="text-m2-gray-0 flex items-center gap-2">
            <Settings className="size-4" />
            <h4 className="font-semibold">패널 설정</h4>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="popover-width">너비</Label>
            <Input id="popover-width" defaultValue="100%" />
          </div>
          <div className="text-m2-gray-1 flex items-center gap-2 text-sm">
            <Checkbox id="popover-notification" defaultChecked />
            <Label htmlFor="popover-notification" className="cursor-pointer">
              알림 받기
            </Label>
          </div>
          <div className="flex gap-2">
            <Button size="sm">저장</Button>
            <Button size="sm" variant="outlined" color="secondary">
              취소
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var S,O,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`open\\\`과 \\\`onOpenChange\\\`를 통해 팝오버의 열림 상태를 완전히 제어합니다.
        \`
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col items-center gap-3">
        <PopoverRoot open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button>{open ? '닫기' : '열기'}</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <div className="flex flex-col gap-3">
              <div className="text-m2-gray-0 flex items-center gap-2">
                <Settings className="size-4" />
                <span className="font-medium">설정</span>
              </div>
              <div className="text-m2-gray-1 flex items-center gap-2 text-sm">
                <Checkbox id="controlled-popover-notification" defaultChecked />
                <Label htmlFor="controlled-popover-notification" className="cursor-pointer">
                  알림 받기
                </Label>
              </div>
              <div className="text-m2-secondary flex items-center gap-2 text-sm">
                <User className="size-4" />
                제어 팝오버 예시
              </div>
            </div>
          </PopoverContent>
        </PopoverRoot>
        <p className="text-m2-secondary text-xs">현재 상태: {open ? 'open' : 'closed'}</p>
      </div>;
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const fe=["Basic","WithRichContent","Positions","WithAnchor","WithForm","Controlled"];export{l as Basic,p as Controlled,c as Positions,m as WithAnchor,d as WithForm,i as WithRichContent,fe as __namedExportsOrder,ge as default};
