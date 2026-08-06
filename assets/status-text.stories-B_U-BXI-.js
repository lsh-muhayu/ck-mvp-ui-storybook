import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-OJ7QbjDu.js";import{c as j}from"./utils-CDN07tui.js";import{F as ee}from"./file-Bxx6IsgO.js";import{X as se}from"./x-rbQ9-OCx.js";import{C as te}from"./check-XAxGDgGN.js";import{L as ae}from"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";function le(t,n){return t==="pending"?"loading":t==="error"||n?"error":t==="success"?"success":"idle"}const ne={loading:ae,success:te,error:se,idle:ee};function ie(t,n){if(!n)return"text-m2-gray-2";switch(t){case"loading":return"text-m2-secondary";case"success":return"text-m2-success";case"error":return"text-m2-danger";case"idle":return"text-m2-gray-1";default:return t}}function s({text:t,placeholder:n,asyncStatus:a,invalid:l=!1,className:d,...i}){const c=le(a,l),o=ne[c],m=t||n;return e.jsxs("div",{className:j("flex w-full min-w-0 items-center gap-2",ie(c,!!t),d),...i,children:[t?e.jsx(o,{className:j("size-4 shrink-0",c==="loading"&&"animate-spin")}):null,e.jsx("span",{className:"w-px grow truncate",title:m,children:m})]})}s.__docgenInfo={description:"",methods:[],displayName:"StatusText",props:{text:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},asyncStatus:{required:!1,tsType:{name:"union",raw:"'idle' | 'pending' | 'error' | 'success'",elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["ComponentProps"]};const fe={title:"M2/StatusText",component:s,parameters:{layout:"centered",controls:{include:["text","asyncStatus","invalid","placeholder"]},docs:{description:{component:`
### 상태에 따른 텍스트 표시 컴포넌트

StatusText는 비동기 작업(API 호출 등)과 폼 검증 상태를 시각적으로 표시하는 컴포넌트입니다.
파일 업로드, 데이터 저장, 동기화 등 다양한 상황에서 사용할 수 있습니다.

## 주요 기능

- **비동기 상태 표시**: API 호출의 idle, loading, success, error 상태를 아이콘과 색상으로 표시
- **기존 파일 표시**: idle 상태에서 FileIcon으로 업로드하지 않은 기존 파일 표시 (회색)
- **폼 검증 상태**: invalid prop으로 유효하지 않은 입력 표시
- **우선순위 처리**: asyncStatus가 validationStatus보다 우선 (loading > error > invalid > success)
- **Empty 상태**: text가 없을 때 placeholder 표시
- **범용성**: 파일 업로드뿐 아니라 다양한 상태 표시에 사용 가능

## 상태별 표시

- **idle** (기존 파일): FileIcon + 회색 텍스트 (data: undefined, publicId 존재)
- **pending** (로딩): Loader2 (회전) + 회색 텍스트
- **success** (성공): CheckIcon + 녹색 텍스트
- **error** (실패): XIcon + 빨간색 텍스트

## 사용 예시

\`\`\`tsx
{/* 기존 파일 표시 (Edit 페이지) */}
<StatusText
  text="existing-file.pdf (2.5 MB)"
  asyncStatus="idle"
/>

{/* 파일 업로드 상태 */}
<StatusText
  text={fileName}
  asyncStatus={uploadMutation.status}
  invalid={!isValid}
/>

{/* API 저장 상태 */}
<StatusText
  text="변경사항 저장됨"
  asyncStatus="success"
/>

{/* Empty 상태 */}
<StatusText text={undefined} placeholder="파일을 선택하세요" />
\`\`\`
        `}}},tags:["autodocs"],argTypes:{text:{control:"text",description:"표시할 텍스트 (없으면 placeholder 표시)",table:{type:{summary:"string | undefined"},category:"내용"}},asyncStatus:{control:"select",options:["idle","pending","error","success",void 0],description:"TanStack Query의 status와 호환되는 비동기 작업 상태",table:{type:{summary:"'idle' | 'pending' | 'error' | 'success'"},category:"상태"}},invalid:{control:"boolean",description:"폼 검증 실패 여부 (true일 때 error 스타일 적용)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},placeholder:{control:"text",description:"text가 없을 때 표시할 placeholder",table:{type:{summary:"string"},defaultValue:{summary:"'선택된 파일 없음'"},category:"내용"}},className:{control:"text",description:"추가 CSS 클래스",table:{type:{summary:"string"},category:"스타일"}}}},u={name:"Playground",parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 StatusText 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 text, asyncStatus, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **asyncStatus**: 'pending'은 로딩 중, 'success'는 성공, 'error'는 실패를 나타냅니다.
- **invalid**: asyncStatus가 없을 때 폼 검증 실패를 표시합니다.
- **우선순위**: asyncStatus가 invalid보다 우선합니다.
        `}}},args:{text:"example.pdf",asyncStatus:void 0,invalid:!1}},p={name:"비동기 작업 상태",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Idle - 기존 파일 (data: undefined)"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"업로드하지 않은 기존 파일 상태"}),e.jsx(s,{text:"existing-document.pdf (2.5 MB)",asyncStatus:"idle"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Pending (로딩 중)"}),e.jsx(s,{text:"document.pdf",asyncStatus:"pending"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Success (성공)"}),e.jsx(s,{text:"document.pdf",asyncStatus:"success"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Error (실패)"}),e.jsx(s,{text:"document.pdf",asyncStatus:"error"})]})]})},f={name:"폼 검증 상태",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Valid (유효)"}),e.jsx(s,{text:"valid-file.pdf",invalid:!1})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Invalid (유효하지 않음)"}),e.jsx(s,{text:"invalid-file.exe",invalid:!0})]})]})},g={name:"Empty 상태 (Placeholder)",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 Placeholder"}),e.jsx(s,{text:void 0,placeholder:"선택된 파일 없음"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"커스텀 Placeholder"}),e.jsx(s,{text:void 0,placeholder:"파일을 선택하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"빈 문자열"}),e.jsx(s,{text:"",placeholder:"내용이 없습니다"})]})]})},y={name:"우선순위 데모",parameters:{docs:{description:{story:`
StatusText는 다음과 같은 우선순위로 상태를 표시합니다:

1. **asyncStatus === 'pending'** → loading (회색, 회전 아이콘)
2. **asyncStatus === 'error'** → error (빨간색, X 아이콘)
3. **invalid === true** → error (빨간색, X 아이콘)
4. **asyncStatus === 'success'** → success (초록색, 체크 아이콘)
5. 그 외 → idle (기본 색상, 아이콘 없음)

이 우선순위 덕분에 비동기 작업 중에는 로딩 상태가 표시되고,
작업이 완료된 후에 폼 검증 상태가 표시됩니다.
        `}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"1. Pending (최우선)"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"asyncStatus='pending', invalid=true"}),e.jsx(s,{text:"uploading.pdf",asyncStatus:"pending",invalid:!0}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"→ Loading 상태 표시 (invalid 무시)"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"2. Async Error"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"asyncStatus='error', invalid=false"}),e.jsx(s,{text:"failed.pdf",asyncStatus:"error",invalid:!1}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"→ Error 상태 표시"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"3. Validation Error"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"asyncStatus='success', invalid=true"}),e.jsx(s,{text:"invalid.exe",asyncStatus:"success",invalid:!0}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"→ Invalid 우선 (Error 상태 표시)"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"4. Success"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"asyncStatus='success', invalid=false"}),e.jsx(s,{text:"success.pdf",asyncStatus:"success",invalid:!1}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"→ Success 상태 표시"})]})]})},h={name:"파일 업로드 시뮬레이션",parameters:{docs:{description:{story:`
실제 파일 업로드 시나리오를 시뮬레이션합니다.
"파일 업로드" 버튼을 클릭하면 다음 순서로 상태가 변경됩니다:

1. **Empty** → placeholder 표시
2. **Pending** → 로딩 중 (회색, 회전 아이콘)
3. **Success** → 업로드 완료 (초록색, 체크 아이콘)

"업로드 실패" 버튼을 클릭하면 에러 상태를 확인할 수 있습니다.
        `}}},render:()=>{const[t,n]=r.useState(void 0),[a,l]=r.useState("idle"),d=async(c=!1)=>{n("thesis-document.pdf"),l("pending"),await new Promise(o=>setTimeout(o,2e3)),l(c?"error":"success")},i=()=>{n(void 0),l("idle")};return e.jsxs("div",{className:"flex w-96 flex-col items-center gap-4",children:[e.jsx("div",{className:"border-m2-gray-3 w-full rounded border bg-white px-3 py-2",children:e.jsx(s,{text:t,asyncStatus:a,placeholder:"파일을 업로드하세요"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>d(!1),disabled:a==="pending",className:"bg-m2-info hover:bg-m2-info-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50",children:"파일 업로드"}),e.jsx("button",{onClick:()=>d(!0),disabled:a==="pending",className:"bg-m2-danger hover:bg-m2-danger-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50",children:"업로드 실패"}),e.jsx("button",{onClick:i,className:"bg-m2-gray-1 hover:bg-m2-gray-0 rounded px-4 py-2 text-sm font-medium text-white",children:"초기화"})]}),e.jsxs("div",{className:"text-m2-secondary text-xs",children:[e.jsxs("p",{children:["현재 상태: ",e.jsx("strong",{children:a})]}),e.jsxs("p",{children:["파일명: ",e.jsx("strong",{children:t??"null"})]})]})]})}},v={name:"폼 검증 시나리오",parameters:{docs:{description:{story:`
파일 업로드 후 폼 검증이 실행되는 시나리오입니다.

1. 파일 업로드 (pending)
2. 업로드 완료 (success)
3. 파일 타입 검증 실패 (invalid)

이 시나리오에서 asyncStatus가 'success'이지만 invalid=true이므로
error 상태가 표시됩니다 (우선순위 규칙에 따라).
        `}}},render:()=>{const[t,n]=r.useState(void 0),[a,l]=r.useState("idle"),[d,i]=r.useState(!1),c=async()=>{n("valid-document.pdf"),l("pending"),i(!1),await new Promise(x=>setTimeout(x,1500)),l("success"),i(!1)},o=async()=>{n("invalid-document.exe"),l("pending"),i(!1),await new Promise(x=>setTimeout(x,1500)),l("success"),i(!0)},m=()=>{n(void 0),l("idle"),i(!1)};return e.jsxs("div",{className:"flex w-96 flex-col items-center gap-4",children:[e.jsx("div",{className:"border-m2-gray-3 w-full rounded border bg-white px-3 py-2",children:e.jsx(s,{text:t,asyncStatus:a,invalid:d,placeholder:"PDF 파일만 업로드 가능"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:c,disabled:a==="pending",className:"bg-m2-success hover:bg-m2-success-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50",children:"유효한 파일 (.pdf)"}),e.jsx("button",{onClick:o,disabled:a==="pending",className:"bg-m2-warning hover:bg-m2-warning-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50",children:"유효하지 않은 파일 (.exe)"}),e.jsx("button",{onClick:m,className:"bg-m2-gray-1 hover:bg-m2-gray-0 rounded px-4 py-2 text-sm font-medium text-white",children:"초기화"})]}),e.jsxs("div",{className:"text-m2-secondary text-xs",children:[e.jsxs("p",{children:["Async Status: ",e.jsx("strong",{children:a})]}),e.jsxs("p",{children:["Invalid: ",e.jsx("strong",{children:String(d)})]}),e.jsxs("p",{children:["파일명: ",e.jsx("strong",{children:t??"null"})]})]})]})}},N={name:"커스텀 스타일링",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 스타일"}),e.jsx(s,{text:"document.pdf",asyncStatus:"success"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"작은 크기 (text-sm)"}),e.jsx(s,{text:"document.pdf",asyncStatus:"success",className:"text-sm"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"굵은 글씨 (font-medium)"}),e.jsx(s,{text:"document.pdf",asyncStatus:"success",className:"font-medium"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"작은 크기 + 굵은 글씨"}),e.jsx(s,{text:"document.pdf",asyncStatus:"success",className:"text-sm font-medium"})]})]})},S={name:"실제 사용 예시",parameters:{docs:{description:{story:`
학위 논문 제출 폼에서 StatusText를 사용하는 실제 예시입니다.
파일 업로드 버튼과 함께 사용하여 업로드 상태를 표시합니다.
        `}}},render:()=>{const[t,n]=r.useState(void 0),[a,l]=r.useState("idle"),[d,i]=r.useState(!1),c=async()=>{const o=["thesis.pdf","thesis.exe","thesis.docx"],m=o[Math.floor(Math.random()*o.length)];n(m),l("pending"),i(!1),await new Promise(x=>setTimeout(x,1500)),l("success"),m&&!m.endsWith(".pdf")&&i(!0)};return e.jsxs("div",{className:"flex w-96 flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{className:"text-m2-gray-1 text-sm font-semibold",children:["파일 업로드 ",e.jsx("span",{className:"text-m2-danger",children:"*"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:c,disabled:a==="pending",className:"border-m2-gray-3 text-m2-gray-1 hover:bg-m2-gray-4 shrink-0 rounded border bg-white px-3 py-2 text-sm font-medium disabled:opacity-50",children:"파일 선택"}),e.jsx("div",{className:"border-m2-gray-3 grow rounded border bg-white px-3 py-2",children:e.jsx(s,{text:t,asyncStatus:a,invalid:d})})]}),e.jsx("span",{className:"text-m2-secondary text-sm",children:"PDF만 업로드 가능. 최대 30MB"})]}),d&&e.jsx("p",{className:"text-m2-danger text-sm",children:"PDF 파일만 업로드할 수 있습니다."})]})}},b={name:"기존 파일 로드 시나리오",parameters:{docs:{description:{story:`
Edit 페이지에서 기존 데이터를 불러오는 시나리오입니다.

**Idle 상태의 의미:**
- \`data: undefined\` (업로드하지 않음)
- \`publicId\`와 \`name\`은 존재 (서버에서 불러온 기존 파일)
- 회색 텍스트 + FileIcon으로 기존 파일임을 표시

사용자가 새 파일을 업로드하면 pending → success로 변경됩니다.
        `}}},render:()=>{const[t,n]=r.useState("existing-thesis-paper.pdf (2.5 MB)"),[a,l]=r.useState("idle"),d=async()=>{n("new-thesis-paper.pdf"),l("pending"),await new Promise(c=>setTimeout(c,2e3)),l("success")},i=()=>{n("existing-thesis-paper.pdf (2.5 MB)"),l("idle")};return e.jsxs("div",{className:"flex w-96 flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Edit 페이지 - 기존 파일 표시"}),e.jsx("div",{className:"border-m2-gray-3 w-full rounded border bg-white px-3 py-2",children:e.jsx(s,{text:t,asyncStatus:a,placeholder:"선택된 파일 없음"})}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"Idle 상태 (회색): 서버에서 불러온 기존 파일"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:d,disabled:a==="pending",className:"bg-m2-info hover:bg-m2-info-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50",children:"새 파일 업로드"}),e.jsx("button",{onClick:i,className:"bg-m2-gray-1 hover:bg-m2-gray-0 rounded px-4 py-2 text-sm font-medium text-white",children:"초기 상태로"})]}),e.jsxs("div",{className:"text-m2-secondary space-y-1 text-xs",children:[e.jsxs("p",{children:["현재 상태: ",e.jsx("strong",{children:a})]}),e.jsxs("p",{className:"break-all",children:["파일명: ",e.jsx("strong",{children:t??"null"})]})]})]})}};var w,T,F;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 StatusText 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 text, asyncStatus, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **asyncStatus**: 'pending'은 로딩 중, 'success'는 성공, 'error'는 실패를 나타냅니다.
- **invalid**: asyncStatus가 없을 때 폼 검증 실패를 표시합니다.
- **우선순위**: asyncStatus가 invalid보다 우선합니다.
        \`
      }
    }
  },
  args: {
    text: 'example.pdf',
    asyncStatus: undefined,
    invalid: false
  }
}`,...(F=(T=u.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var I,P,k;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '비동기 작업 상태',
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Idle - 기존 파일 (data: undefined)</h3>
        <p className="text-m2-secondary text-xs">업로드하지 않은 기존 파일 상태</p>
        <StatusText text="existing-document.pdf (2.5 MB)" asyncStatus="idle" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Pending (로딩 중)</h3>
        <StatusText text="document.pdf" asyncStatus="pending" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Success (성공)</h3>
        <StatusText text="document.pdf" asyncStatus="success" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Error (실패)</h3>
        <StatusText text="document.pdf" asyncStatus="error" />
      </div>
    </div>
}`,...(k=(P=p.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var A,E,C;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '폼 검증 상태',
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Valid (유효)</h3>
        <StatusText text="valid-file.pdf" invalid={false} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Invalid (유효하지 않음)</h3>
        <StatusText text="invalid-file.exe" invalid={true} />
      </div>
    </div>
}`,...(C=(E=f.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var M,V,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Empty 상태 (Placeholder)',
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 Placeholder</h3>
        <StatusText text={undefined} placeholder="선택된 파일 없음" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">커스텀 Placeholder</h3>
        <StatusText text={undefined} placeholder="파일을 선택하세요" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">빈 문자열</h3>
        <StatusText text="" placeholder="내용이 없습니다" />
      </div>
    </div>
}`,...(B=(V=g.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var U,D,_;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '우선순위 데모',
  parameters: {
    docs: {
      description: {
        story: \`
StatusText는 다음과 같은 우선순위로 상태를 표시합니다:

1. **asyncStatus === 'pending'** → loading (회색, 회전 아이콘)
2. **asyncStatus === 'error'** → error (빨간색, X 아이콘)
3. **invalid === true** → error (빨간색, X 아이콘)
4. **asyncStatus === 'success'** → success (초록색, 체크 아이콘)
5. 그 외 → idle (기본 색상, 아이콘 없음)

이 우선순위 덕분에 비동기 작업 중에는 로딩 상태가 표시되고,
작업이 완료된 후에 폼 검증 상태가 표시됩니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">1. Pending (최우선)</h3>
        <p className="text-m2-secondary text-xs">asyncStatus='pending', invalid=true</p>
        <StatusText text="uploading.pdf" asyncStatus="pending" invalid={true} />
        <p className="text-m2-secondary text-xs">→ Loading 상태 표시 (invalid 무시)</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">2. Async Error</h3>
        <p className="text-m2-secondary text-xs">asyncStatus='error', invalid=false</p>
        <StatusText text="failed.pdf" asyncStatus="error" invalid={false} />
        <p className="text-m2-secondary text-xs">→ Error 상태 표시</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">3. Validation Error</h3>
        <p className="text-m2-secondary text-xs">asyncStatus='success', invalid=true</p>
        <StatusText text="invalid.exe" asyncStatus="success" invalid={true} />
        <p className="text-m2-secondary text-xs">→ Invalid 우선 (Error 상태 표시)</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">4. Success</h3>
        <p className="text-m2-secondary text-xs">asyncStatus='success', invalid=false</p>
        <StatusText text="success.pdf" asyncStatus="success" invalid={false} />
        <p className="text-m2-secondary text-xs">→ Success 상태 표시</p>
      </div>
    </div>
}`,...(_=(D=y.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var X,L,q;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '파일 업로드 시뮬레이션',
  parameters: {
    docs: {
      description: {
        story: \`
실제 파일 업로드 시나리오를 시뮬레이션합니다.
"파일 업로드" 버튼을 클릭하면 다음 순서로 상태가 변경됩니다:

1. **Empty** → placeholder 표시
2. **Pending** → 로딩 중 (회색, 회전 아이콘)
3. **Success** → 업로드 완료 (초록색, 체크 아이콘)

"업로드 실패" 버튼을 클릭하면 에러 상태를 확인할 수 있습니다.
        \`
      }
    }
  },
  render: () => {
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const [asyncStatus, setAsyncStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const simulateUpload = async (shouldFail = false) => {
      setFileName('thesis-document.pdf');
      setAsyncStatus('pending');
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAsyncStatus(shouldFail ? 'error' : 'success');
    };
    const reset = () => {
      setFileName(undefined);
      setAsyncStatus('idle');
    };
    return <div className="flex w-96 flex-col items-center gap-4">
        <div className="border-m2-gray-3 w-full rounded border bg-white px-3 py-2">
          <StatusText text={fileName} asyncStatus={asyncStatus} placeholder="파일을 업로드하세요" />
        </div>

        <div className="flex gap-2">
          <button onClick={() => simulateUpload(false)} disabled={asyncStatus === 'pending'} className="bg-m2-info hover:bg-m2-info-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
            파일 업로드
          </button>
          <button onClick={() => simulateUpload(true)} disabled={asyncStatus === 'pending'} className="bg-m2-danger hover:bg-m2-danger-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
            업로드 실패
          </button>
          <button onClick={reset} className="bg-m2-gray-1 hover:bg-m2-gray-0 rounded px-4 py-2 text-sm font-medium text-white">
            초기화
          </button>
        </div>

        <div className="text-m2-secondary text-xs">
          <p>
            현재 상태: <strong>{asyncStatus}</strong>
          </p>
          <p>
            파일명: <strong>{fileName ?? 'null'}</strong>
          </p>
        </div>
      </div>;
  }
}`,...(q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var W,R,O;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '폼 검증 시나리오',
  parameters: {
    docs: {
      description: {
        story: \`
파일 업로드 후 폼 검증이 실행되는 시나리오입니다.

1. 파일 업로드 (pending)
2. 업로드 완료 (success)
3. 파일 타입 검증 실패 (invalid)

이 시나리오에서 asyncStatus가 'success'이지만 invalid=true이므로
error 상태가 표시됩니다 (우선순위 규칙에 따라).
        \`
      }
    }
  },
  render: () => {
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const [asyncStatus, setAsyncStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const [invalid, setInvalid] = useState(false);
    const uploadValidFile = async () => {
      setFileName('valid-document.pdf');
      setAsyncStatus('pending');
      setInvalid(false);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAsyncStatus('success');
      setInvalid(false);
    };
    const uploadInvalidFile = async () => {
      setFileName('invalid-document.exe');
      setAsyncStatus('pending');
      setInvalid(false);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAsyncStatus('success');
      // 업로드는 성공했지만 파일 타입이 유효하지 않음
      setInvalid(true);
    };
    const reset = () => {
      setFileName(undefined);
      setAsyncStatus('idle');
      setInvalid(false);
    };
    return <div className="flex w-96 flex-col items-center gap-4">
        <div className="border-m2-gray-3 w-full rounded border bg-white px-3 py-2">
          <StatusText text={fileName} asyncStatus={asyncStatus} invalid={invalid} placeholder="PDF 파일만 업로드 가능" />
        </div>

        <div className="flex gap-2">
          <button onClick={uploadValidFile} disabled={asyncStatus === 'pending'} className="bg-m2-success hover:bg-m2-success-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
            유효한 파일 (.pdf)
          </button>
          <button onClick={uploadInvalidFile} disabled={asyncStatus === 'pending'} className="bg-m2-warning hover:bg-m2-warning-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
            유효하지 않은 파일 (.exe)
          </button>
          <button onClick={reset} className="bg-m2-gray-1 hover:bg-m2-gray-0 rounded px-4 py-2 text-sm font-medium text-white">
            초기화
          </button>
        </div>

        <div className="text-m2-secondary text-xs">
          <p>
            Async Status: <strong>{asyncStatus}</strong>
          </p>
          <p>
            Invalid: <strong>{String(invalid)}</strong>
          </p>
          <p>
            파일명: <strong>{fileName ?? 'null'}</strong>
          </p>
        </div>
      </div>;
  }
}`,...(O=(R=v.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var z,Q,G;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '커스텀 스타일링',
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 스타일</h3>
        <StatusText text="document.pdf" asyncStatus="success" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">작은 크기 (text-sm)</h3>
        <StatusText text="document.pdf" asyncStatus="success" className="text-sm" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">굵은 글씨 (font-medium)</h3>
        <StatusText text="document.pdf" asyncStatus="success" className="font-medium" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">작은 크기 + 굵은 글씨</h3>
        <StatusText text="document.pdf" asyncStatus="success" className="text-sm font-medium" />
      </div>
    </div>
}`,...(G=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var H,J,K;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '실제 사용 예시',
  parameters: {
    docs: {
      description: {
        story: \`
학위 논문 제출 폼에서 StatusText를 사용하는 실제 예시입니다.
파일 업로드 버튼과 함께 사용하여 업로드 상태를 표시합니다.
        \`
      }
    }
  },
  render: () => {
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const [asyncStatus, setAsyncStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const [invalid, setInvalid] = useState(false);
    const handleFileUpload = async () => {
      // 파일 선택 시뮬레이션
      const files = ['thesis.pdf', 'thesis.exe', 'thesis.docx'];
      const selectedFile = files[Math.floor(Math.random() * files.length)];
      setFileName(selectedFile);
      setAsyncStatus('pending');
      setInvalid(false);

      // 업로드 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAsyncStatus('success');

      // PDF가 아니면 검증 실패
      if (selectedFile && !selectedFile.endsWith('.pdf')) {
        setInvalid(true);
      }
    };
    return <div className="flex w-96 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-m2-gray-1 text-sm font-semibold">
            파일 업로드 <span className="text-m2-danger">*</span>
          </label>
          <div className="flex items-center gap-3">
            <button onClick={handleFileUpload} disabled={asyncStatus === 'pending'} className="border-m2-gray-3 text-m2-gray-1 hover:bg-m2-gray-4 shrink-0 rounded border bg-white px-3 py-2 text-sm font-medium disabled:opacity-50">
              파일 선택
            </button>
            <div className="border-m2-gray-3 grow rounded border bg-white px-3 py-2">
              <StatusText text={fileName} asyncStatus={asyncStatus} invalid={invalid} />
            </div>
          </div>
          <span className="text-m2-secondary text-sm">PDF만 업로드 가능. 최대 30MB</span>
        </div>

        {invalid && <p className="text-m2-danger text-sm">PDF 파일만 업로드할 수 있습니다.</p>}
      </div>;
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '기존 파일 로드 시나리오',
  parameters: {
    docs: {
      description: {
        story: \`
Edit 페이지에서 기존 데이터를 불러오는 시나리오입니다.

**Idle 상태의 의미:**
- \\\`data: undefined\\\` (업로드하지 않음)
- \\\`publicId\\\`와 \\\`name\\\`은 존재 (서버에서 불러온 기존 파일)
- 회색 텍스트 + FileIcon으로 기존 파일임을 표시

사용자가 새 파일을 업로드하면 pending → success로 변경됩니다.
        \`
      }
    }
  },
  render: () => {
    const [fileName, setFileName] = useState<string | undefined>('existing-thesis-paper.pdf (2.5 MB)');
    const [asyncStatus, setAsyncStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const uploadNewFile = async () => {
      setFileName('new-thesis-paper.pdf');
      setAsyncStatus('pending');
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAsyncStatus('success');
    };
    const reset = () => {
      setFileName('existing-thesis-paper.pdf (2.5 MB)');
      setAsyncStatus('idle');
    };
    return <div className="flex w-96 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">Edit 페이지 - 기존 파일 표시</h3>
          <div className="border-m2-gray-3 w-full rounded border bg-white px-3 py-2">
            <StatusText text={fileName} asyncStatus={asyncStatus} placeholder="선택된 파일 없음" />
          </div>
          <p className="text-m2-secondary text-xs">Idle 상태 (회색): 서버에서 불러온 기존 파일</p>
        </div>

        <div className="flex gap-2">
          <button onClick={uploadNewFile} disabled={asyncStatus === 'pending'} className="bg-m2-info hover:bg-m2-info-dark rounded px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
            새 파일 업로드
          </button>
          <button onClick={reset} className="bg-m2-gray-1 hover:bg-m2-gray-0 rounded px-4 py-2 text-sm font-medium text-white">
            초기 상태로
          </button>
        </div>

        <div className="text-m2-secondary space-y-1 text-xs">
          <p>
            현재 상태: <strong>{asyncStatus}</strong>
          </p>
          <p className="break-all">
            파일명: <strong>{fileName ?? 'null'}</strong>
          </p>
        </div>
      </div>;
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ge=["Playground","AsyncStates","ValidationStates","EmptyState","PriorityDemo","FileUploadSimulation","ValidationScenario","CustomStyling","RealWorldExample","ExistingFileScenario"];export{p as AsyncStates,N as CustomStyling,g as EmptyState,b as ExistingFileScenario,h as FileUploadSimulation,u as Playground,y as PriorityDemo,S as RealWorldExample,v as ValidationScenario,f as ValidationStates,ge as __namedExportsOrder,fe as default};
