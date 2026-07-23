import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as ye,P as pe}from"./index-BRvvGyHI.js";import{r as g}from"./index-OJ7QbjDu.js";import{B as i}from"./button-CkQv11My.js";import{C as ue}from"./checkbox-BeV60aIi.js";import{I as q}from"./input-BeM9XfYP.js";import{L as T}from"./label-C0vn8eGT.js";import{T as ve}from"./textarea-CMJtR3hd.js";import{P as je,b as Ce,R as Be,a as Ne,C as we,O as Te,T as be,D as Fe}from"./index-_lE5Okb1.js";import{c as ke}from"./index-C2vczdB5.js";import{c as N}from"./utils-CDN07tui.js";import{X as Pe}from"./x-rbQ9-OCx.js";import{S as Oe}from"./scroll-area-auto-size-DfvhAHB7.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./check-XAxGDgGN.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-jm-SPu3n.js";import"./index-BilTj9-P.js";import"./index-nJQzngU_.js";import"./index-b9QAQN5m.js";import"./index-CI4jWBLT.js";import"./index-D15pND6U.js";import"./index-DAVdU-vC.js";import"./index-Dc1_MvIw.js";import"./index-BVTTSdsW.js";import"./index-ehd_yKDV.js";function E(t){return e.jsx(Be,{"data-slot":"sheet",...t})}const y=E;function v(t){return e.jsx(Ne,{"data-slot":"sheet-trigger",...t})}function Se(t){return e.jsx(je,{"data-slot":"sheet-portal",...t})}function b(t){return e.jsx(Ce,{"data-slot":"sheet-close",...t})}E.__docgenInfo={description:"",methods:[],displayName:"SheetRoot"};v.__docgenInfo={description:"",methods:[],displayName:"SheetTrigger"};Se.__docgenInfo={description:"",methods:[],displayName:"SheetPortal"};b.__docgenInfo={description:"",methods:[],displayName:"SheetClose"};function xe({className:t,...r}){return e.jsx(Te,{"data-slot":"sheet-overlay",className:N("z-m2-overlay fixed inset-0 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",t),...r})}const De=ke("z-m2-dialog fixed flex flex-col overflow-hidden bg-white shadow-lg outline-none transition duration-300 ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in",{variants:{side:{right:"inset-y-0 right-0 h-full w-3/4 max-w-[24rem] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",left:"inset-y-0 left-0 h-full w-3/4 max-w-[24rem] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",top:"inset-x-0 top-0 max-h-[80vh] w-full border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 max-h-[80vh] w-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"}},defaultVariants:{side:"right"}});function m({className:t,overlayClassName:r,children:s,side:l="right",showCloseButton:n=!0,dismissMode:d="none",onEscapeKeyDown:a,onInteractOutside:o,...c}){const j=C=>{a==null||a(C),!(C.defaultPrevented||d==="dismiss")&&C.preventDefault()},h=C=>{o==null||o(C),!(C.defaultPrevented||d==="dismiss")&&C.preventDefault()};return e.jsxs(Se,{children:[e.jsx(xe,{className:r}),e.jsxs(we,{"data-slot":"sheet-content",className:N(De({side:l}),t),onEscapeKeyDown:j,onInteractOutside:h,...c,children:[s,n&&e.jsx(b,{asChild:!0,children:e.jsx(i,{variant:"text",color:"secondary",size:"icon-md",className:"z-m2-dialog text-m2-secondary hover:text-m2-gray-0 absolute top-3 right-3","aria-label":"닫기",children:e.jsx(Pe,{className:"size-5"})})})]})]})}xe.__docgenInfo={description:"",methods:[],displayName:"SheetOverlay"};m.__docgenInfo={description:"",methods:[],displayName:"SheetContent",props:{overlayClassName:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dismissMode:{required:!1,tsType:{name:"union",raw:"'none' | 'dismiss' | 'confirm'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'dismiss'"},{name:"literal",value:"'confirm'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},side:{defaultValue:{value:"'right'",computed:!1},required:!1}}};function p({className:t,...r}){return e.jsx("div",{"data-slot":"sheet-header",className:N("flex flex-col gap-1.5 p-6 pb-0 text-left",t),...r})}function u({className:t,children:r,showVertical:s=!0,showHorizontal:l=!0,type:n="auto",scrollbarTheme:d,...a}){return e.jsx("div",{"data-slot":"sheet-body-container",className:"grow overflow-hidden pt-6",children:e.jsx(Oe,{"data-slot":"sheet-body",className:N("h-full pr-6 pb-6 pl-6",t),showVertical:s,showHorizontal:l,scrollbarTheme:d,type:n,...a,children:r})})}function f({className:t,...r}){return e.jsx("div",{"data-slot":"sheet-footer",className:N("z-m2-dialog border-m2-surface bg-m2-surface-hover/50 relative flex shrink-0 items-center justify-end gap-3 border-t px-6 py-4",t),...r})}function S({className:t,...r}){return e.jsx(be,{"data-slot":"sheet-title",className:N("text-m2-gray-0 text-lg font-semibold",t),...r})}function x({className:t,...r}){return e.jsx(Fe,{"data-slot":"sheet-description",className:N("text-m2-secondary text-sm",t),...r})}p.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};u.__docgenInfo={description:"",methods:[],displayName:"SheetBody",props:{showVertical:{defaultValue:{value:"true",computed:!1},required:!1},showHorizontal:{defaultValue:{value:"true",computed:!1},required:!1},type:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};S.__docgenInfo={description:"",methods:[],displayName:"SheetTitle"};x.__docgenInfo={description:"",methods:[],displayName:"SheetDescription"};function w({variant:t="filled",color:r="secondary",size:s="md",...l}){return e.jsx(b,{asChild:!0,children:e.jsx(i,{variant:t,color:r,size:s,...l})})}function F({variant:t="filled",color:r="primary",size:s="md",loading:l=!1,onClick:n,...d}){const[a,o]=g.useState(!1),c=async j=>{const h=n==null?void 0:n(j);if(!(!h||typeof h.then!="function")){o(!0);try{await h}finally{o(!1)}}};return e.jsx(i,{variant:t,color:r,size:s,loading:l||a,onClick:c,...d})}w.__docgenInfo={description:"",methods:[],displayName:"SheetCancelButton",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},color:{defaultValue:{value:"'secondary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};F.__docgenInfo={description:"",methods:[],displayName:"SheetConfirmButton",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => Promise<void> | void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"union",raw:"Promise<void> | void",elements:[{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"},{name:"void"}]}}},description:""},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const Ie=300;function fe({overlayProps:t,onOpenChange:r,children:s,...l}){const{isOpen:n,close:d,unmount:a}=t,o=g.useRef(!1);return g.useEffect(function(){n&&!o.current&&(o.current=!0)},[n]),g.useEffect(function(){o.current&&!n&&(r==null||r(!1),setTimeout(a,Ie))},[n]),e.jsx(E,{open:n,onOpenChange:c=>{c||d()},...l,children:s})}function ge(t,r){const{side:s,dismissMode:l,showCloseButton:n,overlayId:d,contentClassName:a,onClose:o}=r??{};ye.open(c=>e.jsx(fe,{overlayProps:c,onOpenChange:j=>{j||o==null||o()},children:e.jsx(m,{side:s,dismissMode:l,showCloseButton:n,className:a,children:t(c)})}),d?{overlayId:d}:void 0)}fe.__docgenInfo={description:`overlay-kit으로 Sheet를 열 때 사용하는 최상위 컴포넌트.
1) Radix open 상태를 overlay-kit isOpen과 동기화한다.
2) 닫힐 때 트랜지션(ANIMATION_DURATION)만큼 대기 후 unmount()를 호출한다.`,methods:[],displayName:"SheetOverlayKitRoot",props:{overlayProps:{required:!0,tsType:{name:"OverlayControllerProps"},description:""}}};const ct={title:"M2/Sheet",component:m,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{side:{control:"inline-radio",options:["top","right","bottom","left"],description:"시트가 슬라이드되어 나오는 방향입니다.",table:{type:{summary:"'top' | 'right' | 'bottom' | 'left'"},defaultValue:{summary:"'right'"},category:"레이아웃"}},dismissMode:{control:"inline-radio",options:["none","dismiss","confirm"],description:"배경 클릭/ESC 닫기 동작을 제어합니다. 'dismiss'만 자동 닫힘을 허용하고, 'none'·'confirm'은 닫기/취소 버튼 등 명시적 동작으로만 닫힙니다.",table:{type:{summary:"'none' | 'dismiss' | 'confirm'"},defaultValue:{summary:"'none'"},category:"동작"}},showCloseButton:{control:"boolean",description:"우상단 닫기(X) 버튼 표시 여부입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"동작"}}}},B=({count:t=16})=>e.jsx("div",{className:"text-m2-gray-1 space-y-4 text-sm",children:Array.from({length:t},(r,s)=>e.jsxs("p",{children:["문단 ",s+1,": 시트 바디가 길어지면 내용은 내부 ScrollArea에서 스크롤되고, 헤더와 푸터는 고정된 구조를 유지합니다."]},s))}),k={render:()=>e.jsxs(y,{children:[e.jsx(v,{asChild:!0,children:e.jsx(i,{children:"시트 열기 (right)"})}),e.jsxs(m,{side:"right",children:[e.jsxs(p,{children:[e.jsx(S,{children:"기본 시트"}),e.jsx(x,{children:"우측에서 슬라이드되는 기본 Sheet입니다."})]}),e.jsx(u,{children:e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"Trigger 버튼을 클릭하여 열렸습니다. 저장을 누르면 1.5초간 버튼 로딩 상태가 표시됩니다."})}),e.jsxs(f,{children:[e.jsx(w,{children:"취소"}),e.jsx(F,{onClick:()=>new Promise(t=>window.setTimeout(t,1500)),children:"저장"})]})]})]})},P={parameters:{docs:{description:{story:"`side` prop으로 4방향 슬라이드를 지원합니다. left/right는 너비, top/bottom은 높이가 적용됩니다."}}},render:()=>{const t=["right","left","top","bottom"];return e.jsx("div",{className:"flex flex-wrap gap-3",children:t.map(r=>e.jsxs(y,{children:[e.jsx(v,{asChild:!0,children:e.jsx(i,{variant:"outlined",children:r})}),e.jsxs(m,{side:r,children:[e.jsxs(p,{children:[e.jsxs(S,{children:["side = ",r]}),e.jsxs(x,{children:[r," 방향에서 슬라이드됩니다."]})]}),e.jsx(u,{children:e.jsx(B,{count:10})}),e.jsx(f,{children:e.jsx(w,{children:"닫기"})})]})]},r))})}},O={parameters:{docs:{description:{story:"별도 size 토큰이 없으므로 `className`으로 크기를 조절합니다. left/right는 너비를, top/bottom은 높이를 덮어씁니다."}}},render:()=>e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(y,{children:[e.jsx(v,{asChild:!0,children:e.jsx(i,{variant:"outlined",children:"좁게 (max-w-sm)"})}),e.jsxs(m,{side:"right",className:"max-w-sm",children:[e.jsxs(p,{children:[e.jsx(S,{children:"좁은 시트"}),e.jsx(x,{children:'className="max-w-sm"'})]}),e.jsx(u,{children:e.jsx(B,{count:8})})]})]}),e.jsxs(y,{children:[e.jsx(v,{asChild:!0,children:e.jsx(i,{variant:"outlined",children:"넓게 (max-w-2xl)"})}),e.jsxs(m,{side:"right",className:"max-w-2xl",children:[e.jsxs(p,{children:[e.jsx(S,{children:"넓은 시트"}),e.jsx(x,{children:'className="max-w-2xl"'})]}),e.jsx(u,{children:e.jsx(B,{count:8})})]})]})]})},D={parameters:{docs:{description:{story:"`dismissMode`로 배경 클릭/ESC 닫기 동작을 제어합니다. `dismiss`만 자유롭게 닫히고, `none`·`confirm`은 명시적 버튼으로만 닫힙니다."}}},render:()=>e.jsx("div",{className:"flex gap-3",children:["none","dismiss","confirm"].map(t=>e.jsxs(y,{children:[e.jsx(v,{asChild:!0,children:e.jsx(i,{children:t})}),e.jsxs(m,{dismissMode:t,children:[e.jsxs(p,{children:[e.jsxs(S,{children:["dismissMode: ",t]}),e.jsx(x,{children:t==="dismiss"?"배경 클릭과 ESC로 자유롭게 닫을 수 있습니다.":"배경 클릭/ESC로 닫히지 않습니다. 닫기 또는 취소 버튼을 사용하세요."})]}),e.jsx(u,{children:e.jsx(B,{count:6})}),e.jsx(f,{children:e.jsx(w,{children:"닫기"})})]})]},t))})},I={parameters:{docs:{description:{story:"SheetBody 내부 ScrollArea 동작을 확인합니다. 헤더와 푸터는 고정됩니다."}}},render:()=>e.jsxs(y,{children:[e.jsx(v,{asChild:!0,children:e.jsx(i,{children:"긴 내용 열기"})}),e.jsxs(m,{side:"right",children:[e.jsxs(p,{children:[e.jsx(S,{children:"긴 내용 시트"}),e.jsx(x,{children:"본문이 길어지면 내부에서 스크롤됩니다."})]}),e.jsx(u,{children:e.jsx(B,{count:30})}),e.jsx(f,{children:e.jsx(w,{children:"닫기"})})]})]})},H={parameters:{docs:{description:{story:"`open` / `onOpenChange`로 외부 상태에서 열림 상태를 제어합니다."}}},render:()=>{const t=()=>{const[r,s]=g.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>s(!0),children:"외부 상태로 열기"}),e.jsx(y,{open:r,onOpenChange:s,children:e.jsxs(m,{side:"right",children:[e.jsxs(p,{children:[e.jsx(S,{children:"controlled 시트"}),e.jsx(x,{children:"open/onOpenChange로 제어됩니다."})]}),e.jsx(u,{children:e.jsx(B,{count:8})}),e.jsx(f,{children:e.jsx(w,{children:"닫기"})})]})})]})};return e.jsx(t,{})}},_={parameters:{docs:{description:{story:"상세/등록 폼을 우측 시트로 구성한 실전 예시입니다."}}},render:()=>e.jsxs(y,{children:[e.jsx(v,{asChild:!0,children:e.jsx(i,{children:"지도 계획 등록"})}),e.jsxs(m,{side:"right",className:"max-w-lg",children:[e.jsxs(p,{children:[e.jsx(S,{children:"논문지도 계획 등록"}),e.jsx(x,{children:"업무 폼 예시를 M2 폼 컴포넌트로 구성합니다."})]}),e.jsx(u,{children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(T,{htmlFor:"sheet-title",required:!0,children:"제목"}),e.jsx(q,{id:"sheet-title",placeholder:"지도 계획 제목"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(T,{htmlFor:"sheet-week",children:"주차"}),e.jsx(q,{id:"sheet-week",type:"number",placeholder:"1"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(T,{htmlFor:"sheet-goal",children:"지도 목표"}),e.jsx(ve,{id:"sheet-goal",rows:5,placeholder:"이번 지도에서 다룰 내용을 입력하세요"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ue,{id:"sheet-noti",defaultChecked:!0}),e.jsx(T,{htmlFor:"sheet-noti",className:"cursor-pointer",children:"학생에게 알림 발송"})]})]})}),e.jsxs(f,{children:[e.jsx(w,{children:"취소"}),e.jsx(F,{onClick:()=>new Promise(t=>window.setTimeout(t,1200)),children:"저장"})]})]})]})},M={decorators:[t=>e.jsx(pe,{children:e.jsx(t,{})})],parameters:{docs:{description:{story:"`openSheet()`로 JSX 트리거 없이 함수 호출만으로 시트를 엽니다. 앱 트리에 `OverlayProvider`가 필요합니다(이 스토리는 데코레이터로 감쌌습니다)."}}},render:()=>e.jsx(i,{onClick:()=>ge(t=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(S,{children:"명령형 시트"}),e.jsx(x,{children:"openSheet()로 연 시트입니다."})]}),e.jsx(u,{children:e.jsx(B,{count:10})}),e.jsxs(f,{children:[e.jsx(b,{asChild:!0,children:e.jsx(i,{variant:"outlined",color:"secondary",children:"취소"})}),e.jsx(F,{onClick:()=>t.close(),children:"확인"})]})]}),{side:"right"}),children:"openSheet 실행"})},A={decorators:[t=>e.jsx(pe,{children:e.jsx(t,{})})],parameters:{docs:{description:{story:"overlay-kit 실전 활용 예시. `openSheet`의 옵션(`side`/`dismissMode`/`overlayId`/`onClose`)을 활용해 필터 패널을 열고, 적용 버튼에서 비동기 처리 후 `controller.close()`로 닫습니다. `overlayId`로 중복 열림을 방지합니다."}}},render:()=>{const t=()=>{const[r,s]=g.useState("없음"),l=()=>{ge(n=>{const d=()=>{const[a,o]=g.useState(""),[c,j]=g.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(S,{children:"필터"}),e.jsx(x,{children:"조건을 선택하고 적용을 누르세요."})]}),e.jsx(u,{children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(T,{htmlFor:"filter-keyword",children:"검색어"}),e.jsx(q,{id:"filter-keyword",value:a,onChange:h=>o(h.target.value),placeholder:"키워드 입력"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ue,{id:"filter-active",checked:c,onCheckedChange:h=>j(h===!0)}),e.jsx(T,{htmlFor:"filter-active",className:"cursor-pointer",children:"활성 항목만 보기"})]})]})}),e.jsxs(f,{children:[e.jsx(b,{asChild:!0,children:e.jsx(i,{variant:"outlined",color:"secondary",children:"취소"})}),e.jsx(F,{onClick:async()=>{await new Promise(h=>window.setTimeout(h,800)),s(`검색어="${a||"전체"}", 활성만=${c}`),n.close()},children:"적용"})]})]})};return e.jsx(d,{})},{side:"right",dismissMode:"dismiss",overlayId:"filter-sheet",onClose:()=>console.info("filter sheet closed")})};return e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsx(i,{onClick:l,children:"필터 열기"}),e.jsxs("p",{className:"text-m2-secondary text-sm",children:["적용된 필터: ",r]})]})};return e.jsx(t,{})}};var L,V,z;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(V=k.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var R,X,W;P.parameters={...P.parameters,docs:{...(R=P.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(X=P.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var $,J,K;O.parameters={...O.parameters,docs:{...($=O.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(J=O.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,G,Q;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(G=D.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Y,Z,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,se;H.parameters={...H.parameters,docs:{...(te=H.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=H.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,ie;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ae,le,de;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(de=(le=M.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,he,me;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(he=A.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};const ht=["Default","Sides","WidthOverride","DismissModes","WithLongContent","Controlled","DetailFormPanel","ImperativeOpenSheet","ImperativeFilterPanel"];export{H as Controlled,k as Default,_ as DetailFormPanel,D as DismissModes,A as ImperativeFilterPanel,M as ImperativeOpenSheet,P as Sides,O as WidthOverride,I as WithLongContent,ht as __namedExportsOrder,ct as default};
