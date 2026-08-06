import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as se}from"./overlay-stack-C2o3FQ3d.js";import{r as F}from"./index-OJ7QbjDu.js";import{B as r}from"./button-CkQv11My.js";import{C as oe}from"./checkbox-CWTt_R_-.js";import{I as k}from"./input-BeM9XfYP.js";import{L as S}from"./label-C0vn8eGT.js";import{T as pe}from"./textarea-CMJtR3hd.js";import{e as l,f as d,g as m,S as s,a as o,b as i,c as a,d as h,h as x,i as N,o as ie,j as ae}from"./sheet-overlay-kit-BcfrwajT.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./check-XAxGDgGN.js";import"./index-BLnlIFXI.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-jm-SPu3n.js";import"./index-CxFCylgP.js";import"./index-nJQzngU_.js";import"./index-aeuf1bbk.js";import"./index-vJq8CsoX.js";import"./scroll-area-auto-size-DQ_L9_-s.js";import"./index-Dc1_MvIw.js";import"./index-ehd_yKDV.js";import"./index-CmxWFQG3.js";import"./index-J9NOjVw1.js";import"./index-ikjn6k1p.js";import"./x-rbQ9-OCx.js";const Je={title:"M2/Sheet",component:l,parameters:{layout:"centered",docs:{description:{component:`
### 시트 컴포넌트

Sheet는 화면 가장자리에서 슬라이드되어 나타나는 패널입니다. Radix \`Dialog\` primitive 위에 "측면 슬라이드" 변형으로 구현했으며,
필터/상세/설정 패널이나 내비게이션 드로어 등에 사용합니다. Dialog와 동일한 헤더/바디/푸터 구조와 M2 버튼 헬퍼를 제공합니다.

## 주요 기능

- **4방향 슬라이드**: \`side\` prop으로 \`top\` / \`right\`(기본) / \`bottom\` / \`left\` 방향을 선택합니다.
- **크기 조절**: 별도 size 토큰 없이 \`className\`으로 조절합니다. left/right는 너비(\`w-3/4 max-w-[24rem]\` 기본), top/bottom은 높이(\`max-h-[80vh]\` 기본)를 가집니다.
- **헤더/바디/푸터 구조**: \`SheetHeader\`, \`SheetBody\`, \`SheetFooter\`로 구조화하며, \`SheetBody\`는 M2 ScrollArea 기반으로 긴 내용을 스크롤 처리합니다.
- **닫기 모드**: \`dismissMode\` prop으로 배경 클릭/ESC 닫기 동작을 제어합니다(\`none\` / \`dismiss\` / \`confirm\`).
- **확인/취소 버튼**: \`SheetConfirmButton\`(비동기 로딩 지원), \`SheetCancelButton\`을 제공합니다.
- **제어 가능**: \`open\` / \`onOpenChange\`(\`Sheet\` 루트)로 controlled 사용을 지원합니다.
- **명령형(overlay-kit) 사용**: \`openSheet()\`로 JSX 없이 함수 호출만으로 Sheet를 열 수 있습니다. 앱 트리에 \`OverlayProvider\`가 필요합니다.

## 선언형 사용 예시

\`\`\`tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>시트 열기</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>제목</SheetTitle>
      <SheetDescription>설명</SheetDescription>
    </SheetHeader>
    <SheetBody>
      <p>내용</p>
    </SheetBody>
    <SheetFooter>
      <SheetCancelButton>취소</SheetCancelButton>
      <SheetConfirmButton>저장</SheetConfirmButton>
    </SheetFooter>
  </SheetContent>
</Sheet>
\`\`\`

## 명령형(overlay-kit) 사용 예시

앱 루트를 \`OverlayProvider\`로 감싼 뒤, 어디서든 \`openSheet()\`를 호출합니다.

\`\`\`tsx
import { OverlayProvider } from 'overlay-kit';

// app root
<OverlayProvider>
  <App />
</OverlayProvider>;

// 어디서든 호출
openSheet(
  (controller) => (
    <>
      <SheetHeader>
        <SheetTitle>필터</SheetTitle>
      </SheetHeader>
      <SheetBody>{/* ... */}</SheetBody>
      <SheetFooter>
        <SheetConfirmButton onClick={() => controller.close()}>적용</SheetConfirmButton>
      </SheetFooter>
    </>
  ),
  { side: 'right', dismissMode: 'dismiss', onClose: () => console.log('closed') },
);
\`\`\`
        `}}},tags:["autodocs"],argTypes:{side:{control:"inline-radio",options:["top","right","bottom","left"],description:"시트가 슬라이드되어 나오는 방향입니다.",table:{type:{summary:"'top' | 'right' | 'bottom' | 'left'"},defaultValue:{summary:"'right'"},category:"레이아웃"}},dismissMode:{control:"inline-radio",options:["none","dismiss","confirm"],description:"배경 클릭/ESC 닫기 동작을 제어합니다. 'dismiss'만 자동 닫힘을 허용하고, 'none'·'confirm'은 닫기/취소 버튼 등 명시적 동작으로만 닫힙니다.",table:{type:{summary:"'none' | 'dismiss' | 'confirm'"},defaultValue:{summary:"'none'"},category:"동작"}},showCloseButton:{control:"boolean",description:"우상단 닫기(X) 버튼 표시 여부입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"동작"}}}},p=({count:t=16})=>e.jsx("div",{className:"text-m2-gray-1 space-y-4 text-sm",children:Array.from({length:t},(n,c)=>e.jsxs("p",{children:["문단 ",c+1,": 시트 바디가 길어지면 내용은 내부 ScrollArea에서 스크롤되고, 헤더와 푸터는 고정된 구조를 유지합니다."]},c))}),g={render:()=>e.jsxs(d,{children:[e.jsx(m,{asChild:!0,children:e.jsx(r,{children:"시트 열기 (right)"})}),e.jsxs(l,{side:"right",children:[e.jsxs(s,{children:[e.jsx(o,{children:"기본 시트"}),e.jsx(i,{children:"우측에서 슬라이드되는 기본 Sheet입니다."})]}),e.jsx(a,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"Trigger 버튼을 클릭하여 열렸습니다. 저장을 누르면 1.5초간 버튼 로딩 상태가 표시됩니다."})}),e.jsxs(h,{children:[e.jsx(x,{children:"취소"}),e.jsx(N,{onClick:()=>new Promise(t=>window.setTimeout(t,1500)),children:"저장"})]})]})]})},j={parameters:{docs:{description:{story:"`side` prop으로 4방향 슬라이드를 지원합니다. left/right는 너비, top/bottom은 높이가 적용됩니다."}}},render:()=>{const t=["right","left","top","bottom"];return e.jsx("div",{className:"flex flex-wrap gap-3",children:t.map(n=>e.jsxs(d,{children:[e.jsx(m,{asChild:!0,children:e.jsx(r,{variant:"outlined",children:n})}),e.jsxs(l,{side:n,children:[e.jsxs(s,{children:[e.jsxs(o,{children:["side = ",n]}),e.jsxs(i,{children:[n," 방향에서 슬라이드됩니다."]})]}),e.jsx(a,{children:e.jsx(p,{count:10})}),e.jsx(h,{children:e.jsx(x,{children:"닫기"})})]})]},n))})}},C={parameters:{docs:{description:{story:"별도 size 토큰이 없으므로 `className`으로 크기를 조절합니다. left/right는 너비를, top/bottom은 높이를 덮어씁니다."}}},render:()=>e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(d,{children:[e.jsx(m,{asChild:!0,children:e.jsx(r,{variant:"outlined",children:"좁게 (max-w-sm)"})}),e.jsxs(l,{side:"right",className:"max-w-sm",children:[e.jsxs(s,{children:[e.jsx(o,{children:"좁은 시트"}),e.jsx(i,{children:'className="max-w-sm"'})]}),e.jsx(a,{children:e.jsx(p,{count:8})})]})]}),e.jsxs(d,{children:[e.jsx(m,{asChild:!0,children:e.jsx(r,{variant:"outlined",children:"넓게 (max-w-2xl)"})}),e.jsxs(l,{side:"right",className:"max-w-2xl",children:[e.jsxs(s,{children:[e.jsx(o,{children:"넓은 시트"}),e.jsx(i,{children:'className="max-w-2xl"'})]}),e.jsx(a,{children:e.jsx(p,{count:8})})]})]})]})},y={parameters:{docs:{description:{story:"`dismissMode`로 배경 클릭/ESC 닫기 동작을 제어합니다. `dismiss`만 자유롭게 닫히고, `none`·`confirm`은 명시적 버튼으로만 닫힙니다."}}},render:()=>e.jsx("div",{className:"flex gap-3",children:["none","dismiss","confirm"].map(t=>e.jsxs(d,{children:[e.jsx(m,{asChild:!0,children:e.jsx(r,{children:t})}),e.jsxs(l,{dismissMode:t,children:[e.jsxs(s,{children:[e.jsxs(o,{children:["dismissMode: ",t]}),e.jsx(i,{children:t==="dismiss"?"배경 클릭과 ESC로 자유롭게 닫을 수 있습니다.":"배경 클릭/ESC로 닫히지 않습니다. 닫기 또는 취소 버튼을 사용하세요."})]}),e.jsx(a,{children:e.jsx(p,{count:6})}),e.jsx(h,{children:e.jsx(x,{children:"닫기"})})]})]},t))})},v={parameters:{docs:{description:{story:"SheetBody 내부 ScrollArea 동작을 확인합니다. 헤더와 푸터는 고정됩니다."}}},render:()=>e.jsxs(d,{children:[e.jsx(m,{asChild:!0,children:e.jsx(r,{children:"긴 내용 열기"})}),e.jsxs(l,{side:"right",children:[e.jsxs(s,{children:[e.jsx(o,{children:"긴 내용 시트"}),e.jsx(i,{children:"본문이 길어지면 내부에서 스크롤됩니다."})]}),e.jsx(a,{children:e.jsx(p,{count:30})}),e.jsx(h,{children:e.jsx(x,{children:"닫기"})})]})]})},f={parameters:{docs:{description:{story:"`open` / `onOpenChange`로 외부 상태에서 열림 상태를 제어합니다."}}},render:()=>{const t=()=>{const[n,c]=F.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>c(!0),children:"외부 상태로 열기"}),e.jsx(d,{open:n,onOpenChange:c,children:e.jsxs(l,{side:"right",children:[e.jsxs(s,{children:[e.jsx(o,{children:"controlled 시트"}),e.jsx(i,{children:"open/onOpenChange로 제어됩니다."})]}),e.jsx(a,{children:e.jsx(p,{count:8})}),e.jsx(h,{children:e.jsx(x,{children:"닫기"})})]})})]})};return e.jsx(t,{})}},B={parameters:{docs:{description:{story:"상세/등록 폼을 우측 시트로 구성한 실전 예시입니다."}}},render:()=>e.jsxs(d,{children:[e.jsx(m,{asChild:!0,children:e.jsx(r,{children:"지도 계획 등록"})}),e.jsxs(l,{side:"right",className:"max-w-lg",children:[e.jsxs(s,{children:[e.jsx(o,{children:"논문지도 계획 등록"}),e.jsx(i,{children:"업무 폼 예시를 M2 폼 컴포넌트로 구성합니다."})]}),e.jsx(a,{children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(S,{htmlFor:"sheet-title",required:!0,children:"제목"}),e.jsx(k,{id:"sheet-title",placeholder:"지도 계획 제목"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(S,{htmlFor:"sheet-week",children:"주차"}),e.jsx(k,{id:"sheet-week",type:"number",placeholder:"1"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(S,{htmlFor:"sheet-goal",children:"지도 목표"}),e.jsx(pe,{id:"sheet-goal",rows:5,placeholder:"이번 지도에서 다룰 내용을 입력하세요"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(oe,{id:"sheet-noti",defaultChecked:!0}),e.jsx(S,{htmlFor:"sheet-noti",className:"cursor-pointer",children:"학생에게 알림 발송"})]})]})}),e.jsxs(h,{children:[e.jsx(x,{children:"취소"}),e.jsx(N,{onClick:()=>new Promise(t=>window.setTimeout(t,1200)),children:"저장"})]})]})]})},w={decorators:[t=>e.jsx(se,{children:e.jsx(t,{})})],parameters:{docs:{description:{story:"`openSheet()`로 JSX 트리거 없이 함수 호출만으로 시트를 엽니다. 앱 트리에 `OverlayProvider`가 필요합니다(이 스토리는 데코레이터로 감쌌습니다)."}}},render:()=>e.jsx(r,{onClick:()=>ie(t=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:"명령형 시트"}),e.jsx(i,{children:"openSheet()로 연 시트입니다."})]}),e.jsx(a,{children:e.jsx(p,{count:10})}),e.jsxs(h,{children:[e.jsx(ae,{asChild:!0,children:e.jsx(r,{variant:"outlined",color:"secondary",children:"취소"})}),e.jsx(N,{onClick:()=>t.close(),children:"확인"})]})]}),{side:"right"}),children:"openSheet 실행"})},T={decorators:[t=>e.jsx(se,{children:e.jsx(t,{})})],parameters:{docs:{description:{story:"overlay-kit 실전 활용 예시. `openSheet`의 옵션(`side`/`dismissMode`/`overlayId`/`onClose`)을 활용해 필터 패널을 열고, 적용 버튼에서 비동기 처리 후 `controller.close()`로 닫습니다. `overlayId`로 중복 열림을 방지합니다."}}},render:()=>{const t=()=>{const[n,c]=F.useState("없음"),le=()=>{ie(de=>{const he=()=>{const[b,ce]=F.useState(""),[D,me]=F.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:"필터"}),e.jsx(i,{children:"조건을 선택하고 적용을 누르세요."})]}),e.jsx(a,{children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(S,{htmlFor:"filter-keyword",children:"검색어"}),e.jsx(k,{id:"filter-keyword",value:b,onChange:u=>ce(u.target.value),placeholder:"키워드 입력"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(oe,{id:"filter-active",checked:D,onCheckedChange:u=>me(u===!0)}),e.jsx(S,{htmlFor:"filter-active",className:"cursor-pointer",children:"활성 항목만 보기"})]})]})}),e.jsxs(h,{children:[e.jsx(ae,{asChild:!0,children:e.jsx(r,{variant:"outlined",color:"secondary",children:"취소"})}),e.jsx(N,{onClick:async()=>{await new Promise(u=>window.setTimeout(u,800)),c(`검색어="${b||"전체"}", 활성만=${D}`),de.close()},children:"적용"})]})]})};return e.jsx(he,{})},{side:"right",dismissMode:"dismiss",overlayId:"filter-sheet",onClose:()=>console.info("filter sheet closed")})};return e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsx(r,{onClick:le,children:"필터 열기"}),e.jsxs("p",{className:"text-m2-secondary text-sm",children:["적용된 필터: ",n]})]})};return e.jsx(t,{})}};var P,O,H;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button>시트 열기 (right)</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>기본 시트</SheetTitle>
          <SheetDescription>우측에서 슬라이드되는 기본 Sheet입니다.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <p className="text-m2-gray-1 text-sm">
            Trigger 버튼을 클릭하여 열렸습니다. 저장을 누르면 1.5초간 버튼 로딩 상태가 표시됩니다.
          </p>
        </SheetBody>
        <SheetFooter>
          <SheetCancelButton>취소</SheetCancelButton>
          <SheetConfirmButton onClick={() => new Promise(resolve => window.setTimeout(resolve, 1500))}>
            저장
          </SheetConfirmButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...(H=(O=g.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var M,E,A;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`side\` prop으로 4방향 슬라이드를 지원합니다. left/right는 너비, top/bottom은 높이가 적용됩니다.'
      }
    }
  },
  render: () => {
    const sides: SheetSide[] = ['right', 'left', 'top', 'bottom'];
    return <div className="flex flex-wrap gap-3">
        {sides.map(side => <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outlined">{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>side = {side}</SheetTitle>
                <SheetDescription>{side} 방향에서 슬라이드됩니다.</SheetDescription>
              </SheetHeader>
              <SheetBody>
                <SampleParagraphs count={10} />
              </SheetBody>
              <SheetFooter>
                <SheetCancelButton>닫기</SheetCancelButton>
              </SheetFooter>
            </SheetContent>
          </Sheet>)}
      </div>;
  }
}`,...(A=(E=j.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,I,q;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '별도 size 토큰이 없으므로 \`className\`으로 크기를 조절합니다. left/right는 너비를, top/bottom은 높이를 덮어씁니다.'
      }
    }
  },
  render: () => <div className="flex gap-3">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined">좁게 (max-w-sm)</Button>
        </SheetTrigger>
        <SheetContent side="right" className="max-w-sm">
          <SheetHeader>
            <SheetTitle>좁은 시트</SheetTitle>
            <SheetDescription>className=&quot;max-w-sm&quot;</SheetDescription>
          </SheetHeader>
          <SheetBody>
            <SampleParagraphs count={8} />
          </SheetBody>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined">넓게 (max-w-2xl)</Button>
        </SheetTrigger>
        <SheetContent side="right" className="max-w-2xl">
          <SheetHeader>
            <SheetTitle>넓은 시트</SheetTitle>
            <SheetDescription>className=&quot;max-w-2xl&quot;</SheetDescription>
          </SheetHeader>
          <SheetBody>
            <SampleParagraphs count={8} />
          </SheetBody>
        </SheetContent>
      </Sheet>
    </div>
}`,...(q=(I=C.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var W,X,$;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`dismissMode\`로 배경 클릭/ESC 닫기 동작을 제어합니다. \`dismiss\`만 자유롭게 닫히고, \`none\`·\`confirm\`은 명시적 버튼으로만 닫힙니다.'
      }
    }
  },
  render: () => <div className="flex gap-3">
      {(['none', 'dismiss', 'confirm'] as const).map(mode => <Sheet key={mode}>
          <SheetTrigger asChild>
            <Button>{mode}</Button>
          </SheetTrigger>
          <SheetContent dismissMode={mode}>
            <SheetHeader>
              <SheetTitle>dismissMode: {mode}</SheetTitle>
              <SheetDescription>
                {mode === 'dismiss' ? '배경 클릭과 ESC로 자유롭게 닫을 수 있습니다.' : '배경 클릭/ESC로 닫히지 않습니다. 닫기 또는 취소 버튼을 사용하세요.'}
              </SheetDescription>
            </SheetHeader>
            <SheetBody>
              <SampleParagraphs count={6} />
            </SheetBody>
            <SheetFooter>
              <SheetCancelButton>닫기</SheetCancelButton>
            </SheetFooter>
          </SheetContent>
        </Sheet>)}
    </div>
}`,...($=(X=y.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var z,J,K;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'SheetBody 내부 ScrollArea 동작을 확인합니다. 헤더와 푸터는 고정됩니다.'
      }
    }
  },
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button>긴 내용 열기</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>긴 내용 시트</SheetTitle>
          <SheetDescription>본문이 길어지면 내부에서 스크롤됩니다.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <SampleParagraphs count={30} />
        </SheetBody>
        <SheetFooter>
          <SheetCancelButton>닫기</SheetCancelButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var V,_,R;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`open\` / \`onOpenChange\`로 외부 상태에서 열림 상태를 제어합니다.'
      }
    }
  },
  render: () => {
    const ControlledExample = () => {
      const [open, setOpen] = useState(false);
      return <div>
          <Button onClick={() => setOpen(true)}>외부 상태로 열기</Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>controlled 시트</SheetTitle>
                <SheetDescription>open/onOpenChange로 제어됩니다.</SheetDescription>
              </SheetHeader>
              <SheetBody>
                <SampleParagraphs count={8} />
              </SheetBody>
              <SheetFooter>
                <SheetCancelButton>닫기</SheetCancelButton>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var G,Q,U;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '상세/등록 폼을 우측 시트로 구성한 실전 예시입니다.'
      }
    }
  },
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button>지도 계획 등록</Button>
      </SheetTrigger>
      <SheetContent side="right" className="max-w-lg">
        <SheetHeader>
          <SheetTitle>논문지도 계획 등록</SheetTitle>
          <SheetDescription>업무 폼 예시를 M2 폼 컴포넌트로 구성합니다.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <div className="grid gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="sheet-title" required>
                제목
              </Label>
              <Input id="sheet-title" placeholder="지도 계획 제목" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="sheet-week">주차</Label>
              <Input id="sheet-week" type="number" placeholder="1" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="sheet-goal">지도 목표</Label>
              <Textarea id="sheet-goal" rows={5} placeholder="이번 지도에서 다룰 내용을 입력하세요" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="sheet-noti" defaultChecked />
              <Label htmlFor="sheet-noti" className="cursor-pointer">
                학생에게 알림 발송
              </Label>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetCancelButton>취소</SheetCancelButton>
          <SheetConfirmButton onClick={() => new Promise(resolve => window.setTimeout(resolve, 1200))}>
            저장
          </SheetConfirmButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...(U=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [StoryFn => <OverlayProvider>
        <StoryFn />
      </OverlayProvider>],
  parameters: {
    docs: {
      description: {
        story: '\`openSheet()\`로 JSX 트리거 없이 함수 호출만으로 시트를 엽니다. 앱 트리에 \`OverlayProvider\`가 필요합니다(이 스토리는 데코레이터로 감쌌습니다).'
      }
    }
  },
  render: () => <Button onClick={() => openSheet(controller => <>
              <SheetHeader>
                <SheetTitle>명령형 시트</SheetTitle>
                <SheetDescription>openSheet()로 연 시트입니다.</SheetDescription>
              </SheetHeader>
              <SheetBody>
                <SampleParagraphs count={10} />
              </SheetBody>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outlined" color="secondary">
                    취소
                  </Button>
                </SheetClose>
                <SheetConfirmButton onClick={() => controller.close()}>확인</SheetConfirmButton>
              </SheetFooter>
            </>, {
    side: 'right'
  })}>
      openSheet 실행
    </Button>
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  decorators: [StoryFn => <OverlayProvider>
        <StoryFn />
      </OverlayProvider>],
  parameters: {
    docs: {
      description: {
        story: 'overlay-kit 실전 활용 예시. \`openSheet\`의 옵션(\`side\`/\`dismissMode\`/\`overlayId\`/\`onClose\`)을 활용해 필터 패널을 열고, 적용 버튼에서 비동기 처리 후 \`controller.close()\`로 닫습니다. \`overlayId\`로 중복 열림을 방지합니다.'
      }
    }
  },
  render: () => {
    const FilterExample = () => {
      const [applied, setApplied] = useState<string>('없음');
      const openFilter = () => {
        openSheet(controller => {
          const FilterBody = () => {
            const [keyword, setKeyword] = useState('');
            const [onlyActive, setOnlyActive] = useState(true);
            return <>
                  <SheetHeader>
                    <SheetTitle>필터</SheetTitle>
                    <SheetDescription>조건을 선택하고 적용을 누르세요.</SheetDescription>
                  </SheetHeader>
                  <SheetBody>
                    <div className="grid gap-4">
                      <div className="flex flex-col gap-1">
                        <Label htmlFor="filter-keyword">검색어</Label>
                        <Input id="filter-keyword" value={keyword} onChange={event => setKeyword(event.target.value)} placeholder="키워드 입력" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="filter-active" checked={onlyActive} onCheckedChange={value => setOnlyActive(value === true)} />
                        <Label htmlFor="filter-active" className="cursor-pointer">
                          활성 항목만 보기
                        </Label>
                      </div>
                    </div>
                  </SheetBody>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button variant="outlined" color="secondary">
                        취소
                      </Button>
                    </SheetClose>
                    <SheetConfirmButton onClick={async () => {
                  await new Promise(resolve => window.setTimeout(resolve, 800));
                  setApplied(\`검색어="\${keyword || '전체'}", 활성만=\${onlyActive}\`);
                  controller.close();
                }}>
                      적용
                    </SheetConfirmButton>
                  </SheetFooter>
                </>;
          };
          return <FilterBody />;
        }, {
          side: 'right',
          dismissMode: 'dismiss',
          overlayId: 'filter-sheet',
          onClose: () => console.info('filter sheet closed')
        });
      };
      return <div className="flex flex-col items-start gap-3">
          <Button onClick={openFilter}>필터 열기</Button>
          <p className="text-m2-secondary text-sm">적용된 필터: {applied}</p>
        </div>;
    };
    return <FilterExample />;
  }
}`,...(ne=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Ke=["Default","Sides","WidthOverride","DismissModes","WithLongContent","Controlled","DetailFormPanel","ImperativeOpenSheet","ImperativeFilterPanel"];export{f as Controlled,g as Default,B as DetailFormPanel,y as DismissModes,T as ImperativeFilterPanel,w as ImperativeOpenSheet,j as Sides,C as WidthOverride,v as WithLongContent,Ke as __namedExportsOrder,Je as default};
