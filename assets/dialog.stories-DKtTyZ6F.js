import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as le}from"./overlay-stack-C2o3FQ3d.js";import{r as ae}from"./index-OJ7QbjDu.js";import{B as i}from"./button-CkQv11My.js";import{C as se}from"./checkbox-CWTt_R_-.js";import{I as N}from"./input-BeM9XfYP.js";import{L as x}from"./label-C0vn8eGT.js";import{T as re}from"./textarea-CMJtR3hd.js";import{D as o,a as s,b as l,c as r,d as n,e as g,f as a,g as t,h as d,i as F,j as m,o as te}from"./dialog-overlay-kit-Hw6iswm_.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./check-XAxGDgGN.js";import"./index-BLnlIFXI.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-jm-SPu3n.js";import"./index-CxFCylgP.js";import"./index-nJQzngU_.js";import"./index-aeuf1bbk.js";import"./index-vJq8CsoX.js";import"./scroll-area-auto-size-DIMzJfAQ.js";import"./index-Dc1_MvIw.js";import"./index-ehd_yKDV.js";import"./index-CmxWFQG3.js";import"./index-J9NOjVw1.js";import"./index-ikjn6k1p.js";import"./x-rbQ9-OCx.js";const _e={title:"M2/Dialog",component:o,parameters:{layout:"centered",docs:{description:{component:`
### 다이얼로그 컴포넌트

Dialog 컴포넌트는 사용자에게 중요한 정보를 표시하거나 확인을 받기 위한 모달 다이얼로그입니다.
M2 Dialog 구조를 React/Radix 기반으로 구현했으며, 헤더/바디/푸터 조합과 M2 버튼 헬퍼를 제공합니다.

## 주요 기능

- **헤더/바디/푸터 구조**: \`DialogHeader\`, \`DialogBody\`, \`DialogFooter\`를 통한 구조화된 레이아웃
- **닫기 모드**: \`dismissMode\` prop으로 배경 클릭/ESC 닫기 동작 제어
- **확인/취소 버튼**: \`DialogConfirmButton\`, \`DialogCancelButton\`을 통한 편리한 버튼 제공
- **스크롤 가능한 바디**: \`DialogBody\`는 M2 ScrollArea 기반으로 긴 내용을 스크롤 처리
- **커스텀 닫기 버튼**: \`DialogClose\`를 사용해 임의 버튼에 닫기 동작 연결
- **제어 가능**: \`open\` / \`onOpenChange\`를 통한 controlled 사용 지원

## 사용 예시

\`\`\`tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>다이얼로그 열기</Button>
  </DialogTrigger>
  <DialogContent dismissMode="dismiss">
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>설명</DialogDescription>
    </DialogHeader>
    <DialogBody>
      <p>내용</p>
    </DialogBody>
    <DialogFooter>
      <DialogCancelButton>취소</DialogCancelButton>
      <DialogClose asChild>
        <DialogConfirmButton>확인</DialogConfirmButton>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"다이얼로그의 열림 상태를 제어합니다. controlled 방식에서 사용합니다.",table:{type:{summary:"boolean"},category:"상태"}},defaultOpen:{control:"boolean",description:"다이얼로그의 초기 열림 상태입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},onOpenChange:{action:"openChange",description:"열림 상태가 변경될 때 호출되는 콜백입니다.",table:{type:{summary:"(open: boolean) => void"},category:"이벤트"}}}},h={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"다이얼로그 열기"})}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"Trigger를 사용한 다이얼로그"}),e.jsx(g,{children:"DialogTrigger를 사용하여 다이얼로그를 열 수 있습니다."})]}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다."})}),e.jsxs(t,{children:[e.jsx(d,{children:"취소"}),e.jsx(F,{asChild:!0,children:e.jsx(m,{children:"확인"})})]})]})]})},p={render:()=>{const[c,D]=ae.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>D(!0),children:"다이얼로그 열기"}),e.jsx(o,{open:c,onOpenChange:D,children:e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(n,{children:"기본 다이얼로그"})}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다."})}),e.jsxs(t,{children:[e.jsx(d,{children:"취소"}),e.jsx(F,{asChild:!0,children:e.jsx(m,{children:"확인"})})]})]})})]})}},j={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"로딩 다이얼로그 열기"})}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"로딩 상태"}),e.jsx(g,{children:"확인 버튼에 비동기 로딩 상태를 표시합니다."})]}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-secondary text-sm",children:"확인을 누르면 1.5초 동안 버튼 로딩 상태가 표시됩니다."})}),e.jsxs(t,{children:[e.jsx(d,{children:"취소"}),e.jsx(m,{onClick:()=>new Promise(c=>window.setTimeout(c,1500)),children:"저장"})]})]})]})},u={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"긴 내용 열기"})}),e.jsxs(l,{className:"h-[520px] max-w-2xl",children:[e.jsxs(r,{children:[e.jsx(n,{children:"긴 내용 다이얼로그"}),e.jsx(g,{children:"DialogBody 내부의 ScrollArea 동작을 확인합니다."})]}),e.jsx(a,{children:e.jsx("div",{className:"text-m2-gray-1 space-y-4 text-sm",children:Array.from({length:24},(c,D)=>e.jsxs("p",{children:["문단 ",D+1,": 다이얼로그 바디가 길어질 때 내용은 내부에서 스크롤됩니다. 헤더와 푸터는 고정된 구조를 유지합니다."]},D))})}),e.jsx(t,{children:e.jsx(d,{children:"닫기"})})]})]})},C={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"가로 스크롤 열기"})}),e.jsxs(l,{className:"h-[420px] max-w-xl",children:[e.jsxs(r,{children:[e.jsx(n,{children:"가로 스크롤 콘텐츠"}),e.jsx(g,{children:"넓은 표 형태 콘텐츠를 DialogBody에서 표시합니다."})]}),e.jsx(a,{showHorizontal:!0,children:e.jsx("div",{className:"text-m2-gray-1 min-w-[760px] space-y-3 pb-4 text-sm",children:Array.from({length:8},(c,D)=>e.jsx("div",{className:"grid grid-cols-5 gap-3",children:Array.from({length:5},(de,b)=>e.jsxs("div",{className:"bg-m2-surface-hover rounded p-3",children:["항목 ",D+1,"-",b+1]},b))},D))})}),e.jsx(t,{children:e.jsx(d,{children:"닫기"})})]})]})},B={parameters:{docs:{description:{story:"\n`dismissMode`에 따라 배경 클릭/ESC 닫기 동작을 제어합니다.\n현재 M2 Phase A에서는 `none`과 `dismiss` 동작을 제공합니다. `confirm` 모드는 AlertDialog 연동 후 확장합니다.\n        "}}},render:()=>e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"none"})}),e.jsxs(l,{dismissMode:"none",children:[e.jsxs(r,{children:[e.jsx(n,{children:"dismissMode: none"}),e.jsx(g,{children:"배경 클릭과 ESC로 닫히지 않습니다."})]}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"닫기 버튼이나 취소 버튼을 사용하세요."})}),e.jsx(t,{children:e.jsx(d,{children:"닫기"})})]})]}),e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"dismiss"})}),e.jsxs(l,{dismissMode:"dismiss",children:[e.jsxs(r,{children:[e.jsx(n,{children:"dismissMode: dismiss"}),e.jsx(g,{children:"배경 클릭과 ESC로 자유롭게 닫을 수 있습니다."})]}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"외부 상호작용으로 닫기 동작을 확인하세요."})}),e.jsx(t,{children:e.jsx(d,{children:"닫기"})})]})]})]})},y={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"중첩 다이얼로그 열기"})}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"상위 다이얼로그"}),e.jsx(g,{children:"다이얼로그 내부에서 또 다른 확인 다이얼로그를 엽니다."})]}),e.jsx(a,{children:e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{color:"warning",variant:"outlined",children:"확인 다이얼로그 열기"})}),e.jsxs(l,{className:"max-w-sm",children:[e.jsxs(r,{children:[e.jsx(n,{children:"정말 진행하시겠습니까?"}),e.jsx(g,{children:"이 예시는 nested dialog 동작을 보여줍니다."})]}),e.jsxs(t,{children:[e.jsx(d,{children:"취소"}),e.jsx(F,{asChild:!0,children:e.jsx(m,{children:"확인"})})]})]})]})}),e.jsx(t,{children:e.jsx(d,{children:"닫기"})})]})]})},f={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"논문지도 계획 등록"})}),e.jsxs(l,{className:"h-[640px] max-w-3xl",children:[e.jsxs(r,{children:[e.jsx(n,{children:"논문지도 계획 등록"}),e.jsx(g,{children:"업무 폼 예시를 M2 폼 컴포넌트로 구성합니다."})]}),e.jsx(a,{children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(x,{htmlFor:"thesis-title",required:!0,children:"제목"}),e.jsx(N,{id:"thesis-title",placeholder:"논문지도 계획 제목"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(x,{htmlFor:"thesis-week",children:"주차"}),e.jsx(N,{id:"thesis-week",type:"number",placeholder:"1"})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(x,{htmlFor:"thesis-goal",children:"지도 목표"}),e.jsx(re,{id:"thesis-goal",rows:5,placeholder:"이번 지도에서 다룰 내용을 입력하세요"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(se,{id:"thesis-notification",defaultChecked:!0}),e.jsx(x,{htmlFor:"thesis-notification",className:"cursor-pointer",children:"학생에게 알림 발송"})]})]})}),e.jsxs(t,{children:[e.jsx(d,{children:"취소"}),e.jsx(m,{children:"저장"})]})]})]})},T={decorators:[c=>e.jsx(le,{children:e.jsx(c,{})})],parameters:{docs:{description:{story:"`openDialog()`로 JSX 트리거 없이 함수 호출만으로 다이얼로그를 엽니다. 앱 트리에 `OverlayProvider`가 필요합니다(이 스토리는 데코레이터로 감쌌습니다)."}}},render:()=>e.jsx(i,{onClick:()=>te(c=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"명령형 다이얼로그"}),e.jsx(g,{children:"openDialog()로 연 다이얼로그입니다."})]}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-gray-0 text-sm",children:"overlay-kit의 overlay.open을 통해 트리거 없이 열렸습니다."})}),e.jsxs(t,{children:[e.jsx(F,{asChild:!0,children:e.jsx(i,{variant:"outlined",color:"secondary",children:"취소"})}),e.jsx(m,{onClick:()=>c.close(),children:"확인"})]})]}),{dismissMode:"dismiss"}),children:"openDialog 실행"})},v={parameters:{docs:{description:{story:"닫기 버튼은 `DialogHeader`(`p-6`)에 놓인 `DialogTitle`(`text-lg`, line-height 28px) 첫 줄의 수직 중심(38px)에 맞춰집니다. 제목만 있을 때와 제목 + 설명이 함께 있을 때 모두 첫 줄과 정렬되며, 커스텀 헤더나 헤더가 없는 레이아웃에서는 우상단 인셋(18px)으로 동작합니다."}}},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"제목만"})}),e.jsxs(l,{dismissMode:"dismiss",children:[e.jsx(r,{children:e.jsx(n,{children:"작업 이름 변경"})}),e.jsx(a,{children:e.jsx(N,{className:"w-full","aria-label":"작업 이름",placeholder:"작업 이름을 입력하세요"})}),e.jsxs(t,{children:[e.jsx(d,{children:"취소"}),e.jsx(m,{children:"저장"})]})]})]}),e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"제목 + 설명"})}),e.jsxs(l,{dismissMode:"dismiss",children:[e.jsxs(r,{children:[e.jsx(n,{children:"작업 이름 변경"}),e.jsx(g,{children:"변경한 이름은 목록과 알림에 함께 반영됩니다."})]}),e.jsx(a,{children:e.jsx(N,{className:"w-full","aria-label":"작업 이름",placeholder:"작업 이름을 입력하세요"})}),e.jsxs(t,{children:[e.jsx(d,{children:"취소"}),e.jsx(m,{children:"저장"})]})]})]}),e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"커스텀 헤더"})}),e.jsxs(l,{dismissMode:"dismiss",children:[e.jsx("div",{className:"border-m2-surface flex items-center gap-2 border-b px-4 py-3",children:e.jsx(n,{className:"text-base",children:"DialogHeader 없는 커스텀 헤더"})}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"헤더 패딩이 다르면 닫기 버튼은 제목과 정렬되지 않고 우상단 인셋으로 읽힙니다."})})]})]}),e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(i,{children:"헤더 없음"})}),e.jsxs(l,{dismissMode:"dismiss",children:[e.jsx(n,{className:"sr-only",children:"헤더 없는 다이얼로그"}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"본문만 있는 레이아웃입니다. 닫기 버튼은 우상단 인셋으로 남습니다."})})]})]})]})};var H,w,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Trigger를 사용한 다이얼로그</DialogTitle>
          <DialogDescription>
            DialogTrigger를 사용하여 다이얼로그를 열 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p className="text-m2-gray-1 text-sm">
            이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogCancelButton>취소</DialogCancelButton>
          <DialogClose asChild>
            <DialogConfirmButton>확인</DialogConfirmButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(M=(w=h.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var S,k,O;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>다이얼로그 열기</Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>기본 다이얼로그</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <p className="text-m2-gray-1 text-sm">
                다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogClose asChild>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var A,L,I;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>로딩 다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>로딩 상태</DialogTitle>
          <DialogDescription>확인 버튼에 비동기 로딩 상태를 표시합니다.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p className="text-m2-secondary text-sm">
            확인을 누르면 1.5초 동안 버튼 로딩 상태가 표시됩니다.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogCancelButton>취소</DialogCancelButton>
          <DialogConfirmButton onClick={() => new Promise(resolve => window.setTimeout(resolve, 1500))}>
            저장
          </DialogConfirmButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(I=(L=j.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var P,E,W;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>긴 내용 열기</Button>
      </DialogTrigger>
      <DialogContent className="h-[520px] max-w-2xl">
        <DialogHeader>
          <DialogTitle>긴 내용 다이얼로그</DialogTitle>
          <DialogDescription>DialogBody 내부의 ScrollArea 동작을 확인합니다.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="text-m2-gray-1 space-y-4 text-sm">
            {Array.from({
            length: 24
          }, (_, index) => <p key={index}>
                문단 {index + 1}: 다이얼로그 바디가 길어질 때 내용은 내부에서 스크롤됩니다. 헤더와
                푸터는 고정된 구조를 유지합니다.
              </p>)}
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogCancelButton>닫기</DialogCancelButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(W=(E=u.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,z,R;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>가로 스크롤 열기</Button>
      </DialogTrigger>
      <DialogContent className="h-[420px] max-w-xl">
        <DialogHeader>
          <DialogTitle>가로 스크롤 콘텐츠</DialogTitle>
          <DialogDescription>넓은 표 형태 콘텐츠를 DialogBody에서 표시합니다.</DialogDescription>
        </DialogHeader>
        <DialogBody showHorizontal>
          <div className="text-m2-gray-1 min-w-[760px] space-y-3 pb-4 text-sm">
            {Array.from({
            length: 8
          }, (_, row) => <div key={row} className="grid grid-cols-5 gap-3">
                {Array.from({
              length: 5
            }, (_, col) => <div key={col} className="bg-m2-surface-hover rounded p-3">
                    항목 {row + 1}-{col + 1}
                  </div>)}
              </div>)}
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogCancelButton>닫기</DialogCancelButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(R=(z=C.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var V,q,G;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`dismissMode\\\`에 따라 배경 클릭/ESC 닫기 동작을 제어합니다.
현재 M2 Phase A에서는 \\\`none\\\`과 \\\`dismiss\\\` 동작을 제공합니다. \\\`confirm\\\` 모드는 AlertDialog 연동 후 확장합니다.
        \`
      }
    }
  },
  render: () => <div className="flex gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button>none</Button>
        </DialogTrigger>
        <DialogContent dismissMode="none">
          <DialogHeader>
            <DialogTitle>dismissMode: none</DialogTitle>
            <DialogDescription>배경 클릭과 ESC로 닫히지 않습니다.</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p className="text-m2-gray-1 text-sm">닫기 버튼이나 취소 버튼을 사용하세요.</p>
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton>닫기</DialogCancelButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>dismiss</Button>
        </DialogTrigger>
        <DialogContent dismissMode="dismiss">
          <DialogHeader>
            <DialogTitle>dismissMode: dismiss</DialogTitle>
            <DialogDescription>배경 클릭과 ESC로 자유롭게 닫을 수 있습니다.</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p className="text-m2-gray-1 text-sm">외부 상호작용으로 닫기 동작을 확인하세요.</p>
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton>닫기</DialogCancelButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
}`,...(G=(q=B.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,X,K;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>중첩 다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>상위 다이얼로그</DialogTitle>
          <DialogDescription>
            다이얼로그 내부에서 또 다른 확인 다이얼로그를 엽니다.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <Dialog>
            <DialogTrigger asChild>
              <Button color="warning" variant="outlined">
                확인 다이얼로그 열기
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>정말 진행하시겠습니까?</DialogTitle>
                <DialogDescription>이 예시는 nested dialog 동작을 보여줍니다.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogCancelButton>취소</DialogCancelButton>
                <DialogClose asChild>
                  <DialogConfirmButton>확인</DialogConfirmButton>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DialogBody>
        <DialogFooter>
          <DialogCancelButton>닫기</DialogCancelButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(K=(X=y.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,U,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>논문지도 계획 등록</Button>
      </DialogTrigger>
      <DialogContent className="h-[640px] max-w-3xl">
        <DialogHeader>
          <DialogTitle>논문지도 계획 등록</DialogTitle>
          <DialogDescription>업무 폼 예시를 M2 폼 컴포넌트로 구성합니다.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="thesis-title" required>
                  제목
                </Label>
                <Input id="thesis-title" placeholder="논문지도 계획 제목" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="thesis-week">주차</Label>
                <Input id="thesis-week" type="number" placeholder="1" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="thesis-goal">지도 목표</Label>
              <Textarea id="thesis-goal" rows={5} placeholder="이번 지도에서 다룰 내용을 입력하세요" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="thesis-notification" defaultChecked />
              <Label htmlFor="thesis-notification" className="cursor-pointer">
                학생에게 알림 발송
              </Label>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogCancelButton>취소</DialogCancelButton>
          <DialogConfirmButton>저장</DialogConfirmButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  decorators: [StoryFn => <OverlayProvider>
        <StoryFn />
      </OverlayProvider>],
  parameters: {
    docs: {
      description: {
        story: '\`openDialog()\`로 JSX 트리거 없이 함수 호출만으로 다이얼로그를 엽니다. 앱 트리에 \`OverlayProvider\`가 필요합니다(이 스토리는 데코레이터로 감쌌습니다).'
      }
    }
  },
  render: () => <Button onClick={() => openDialog(controller => <>
              <DialogHeader>
                <DialogTitle>명령형 다이얼로그</DialogTitle>
                <DialogDescription>openDialog()로 연 다이얼로그입니다.</DialogDescription>
              </DialogHeader>
              <DialogBody>
                <p className="text-m2-gray-0 text-sm">
                  overlay-kit의 overlay.open을 통해 트리거 없이 열렸습니다.
                </p>
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outlined" color="secondary">
                    취소
                  </Button>
                </DialogClose>
                <DialogConfirmButton onClick={() => controller.close()}>확인</DialogConfirmButton>
              </DialogFooter>
            </>, {
    dismissMode: 'dismiss'
  })}>
      openDialog 실행
    </Button>
}`,...(ee=($=T.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ie,oe,ne;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '닫기 버튼은 \`DialogHeader\`(\`p-6\`)에 놓인 \`DialogTitle\`(\`text-lg\`, line-height 28px) 첫 줄의 수직 중심(38px)에 맞춰집니다. 제목만 있을 때와 제목 + 설명이 함께 있을 때 모두 첫 줄과 정렬되며, 커스텀 헤더나 헤더가 없는 레이아웃에서는 우상단 인셋(18px)으로 동작합니다.'
      }
    }
  },
  render: () => <div className="flex flex-wrap gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button>제목만</Button>
        </DialogTrigger>
        <DialogContent dismissMode="dismiss">
          <DialogHeader>
            <DialogTitle>작업 이름 변경</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Input className="w-full" aria-label="작업 이름" placeholder="작업 이름을 입력하세요" />
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton>취소</DialogCancelButton>
            <DialogConfirmButton>저장</DialogConfirmButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>제목 + 설명</Button>
        </DialogTrigger>
        <DialogContent dismissMode="dismiss">
          <DialogHeader>
            <DialogTitle>작업 이름 변경</DialogTitle>
            <DialogDescription>변경한 이름은 목록과 알림에 함께 반영됩니다.</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <Input className="w-full" aria-label="작업 이름" placeholder="작업 이름을 입력하세요" />
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton>취소</DialogCancelButton>
            <DialogConfirmButton>저장</DialogConfirmButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>커스텀 헤더</Button>
        </DialogTrigger>
        <DialogContent dismissMode="dismiss">
          <div className="border-m2-surface flex items-center gap-2 border-b px-4 py-3">
            <DialogTitle className="text-base">DialogHeader 없는 커스텀 헤더</DialogTitle>
          </div>
          <DialogBody>
            <p className="text-m2-gray-1 text-sm">
              헤더 패딩이 다르면 닫기 버튼은 제목과 정렬되지 않고 우상단 인셋으로 읽힙니다.
            </p>
          </DialogBody>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>헤더 없음</Button>
        </DialogTrigger>
        <DialogContent dismissMode="dismiss">
          <DialogTitle className="sr-only">헤더 없는 다이얼로그</DialogTitle>
          <DialogBody>
            <p className="text-m2-gray-1 text-sm">
              본문만 있는 레이아웃입니다. 닫기 버튼은 우상단 인셋으로 남습니다.
            </p>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </div>
}`,...(ne=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const ze=["Default","WithVModel","WithLoading","WithLongContent","WithHorizontalScroll","DismissModes","NestedDialogWithConfirm","ThesisGuidancePlanForm","ImperativeOpenDialog","CloseButtonAlignment"];export{v as CloseButtonAlignment,h as Default,B as DismissModes,T as ImperativeOpenDialog,y as NestedDialogWithConfirm,f as ThesisGuidancePlanForm,C as WithHorizontalScroll,j as WithLoading,u as WithLongContent,p as WithVModel,ze as __namedExportsOrder,_e as default};
