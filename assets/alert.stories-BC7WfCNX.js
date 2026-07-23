import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as $}from"./index-OJ7QbjDu.js";import{c as F}from"./index-C2vczdB5.js";import{c as y}from"./utils-CDN07tui.js";import{X as G}from"./x-rbQ9-OCx.js";import{C as h}from"./circle-alert-CxKxvNIm.js";import{I as p}from"./info-CBqhzTkO.js";import{T as J}from"./triangle-alert-mdoppzDT.js";import{C as K}from"./circle-check-C4Lhm-rS.js";import{B as E}from"./button-CkQv11My.js";import{P as Q,a as U,b as Y}from"./popover-content-Dayl4ZTc.js";import{c as Z}from"./createLucideIcon-BRUIOxYu.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-jm-SPu3n.js";import"./index-DAVdU-vC.js";import"./index-Dc1_MvIw.js";import"./index-BVTTSdsW.js";import"./index-D15pND6U.js";import"./index-BtVicQOV.js";import"./index-b9QAQN5m.js";import"./index-CI4jWBLT.js";import"./index-BilTj9-P.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],re=Z("megaphone",ee),oe=F("relative flex items-start gap-2 rounded-md px-4 py-3 text-sm",{variants:{color:{primary:"",secondary:"",success:"",warning:"",danger:"",info:"",urgent:""},variant:{soft:"",accent:"border-l-4",solid:"text-white"}},compoundVariants:[{color:"primary",variant:["soft","accent"],class:"bg-m2-primary-tint text-m2-primary-dark"},{color:"secondary",variant:["soft","accent"],class:"bg-m2-surface-hover text-m2-secondary-dark"},{color:"success",variant:["soft","accent"],class:"bg-m2-success-tint text-m2-success-dark"},{color:"warning",variant:["soft","accent"],class:"bg-m2-warning-tint text-m2-warning-dark"},{color:"danger",variant:["soft","accent"],class:"bg-m2-danger-tint text-m2-danger-dark"},{color:"info",variant:["soft","accent"],class:"bg-m2-info-tint text-m2-info-dark"},{color:"urgent",variant:["soft","accent"],class:"bg-m2-danger-tint text-m2-urgent"},{color:"primary",variant:"accent",class:"border-m2-primary"},{color:"secondary",variant:"accent",class:"border-m2-secondary"},{color:"success",variant:"accent",class:"border-m2-success"},{color:"warning",variant:"accent",class:"border-m2-warning"},{color:"danger",variant:"accent",class:"border-m2-danger"},{color:"info",variant:"accent",class:"border-m2-info"},{color:"urgent",variant:"accent",class:"border-m2-urgent"},{color:"primary",variant:"solid",class:"bg-m2-primary"},{color:"secondary",variant:"solid",class:"bg-m2-secondary"},{color:"success",variant:"solid",class:"bg-m2-success"},{color:"warning",variant:"solid",class:"bg-m2-warning"},{color:"danger",variant:"solid",class:"bg-m2-danger"},{color:"info",variant:"solid",class:"bg-m2-info"},{color:"urgent",variant:"solid",class:"bg-m2-urgent"}],defaultVariants:{color:"info",variant:"soft"}}),ae={primary:p,secondary:p,success:K,warning:J,danger:h,info:p,urgent:h};function r({className:o,color:a,variant:W,title:m,icon:g,onClose:u,children:v,...D}){const H=ae[a??"info"],x=g===!1?null:g??e.jsx(H,{"aria-hidden":!0});return e.jsxs("div",{className:y(oe({color:a,variant:W}),o),...D,children:[x!==null&&e.jsx("span",{className:"mt-0.5 flex shrink-0 [&>svg]:size-4",children:x}),e.jsxs("div",{className:"min-w-0 flex-1",children:[m!=null&&e.jsx("div",{className:"font-semibold",children:m}),v!=null&&e.jsx("div",{className:y(m!=null&&"mt-0.5"),children:v})]}),u&&e.jsx("button",{type:"button",onClick:u,"aria-label":"닫기",className:"mt-0.5 flex shrink-0 opacity-70 transition-opacity hover:opacity-100",children:e.jsx(G,{className:"size-4","aria-hidden":!0})})]})}r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"볼드 제목 행. 있으면 2행 레이아웃이 된다."},icon:{required:!1,tsType:{name:"union",raw:"ReactNode | false",elements:[{name:"ReactNode"},{name:"literal",value:"false"}]},description:"color별 자동 아이콘을 교체하거나(ReactNode) 숨긴다(false)."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"주어지면 우측에 닫기(X) 버튼을 노출한다."},children:{required:!1,tsType:{name:"ReactNode"},description:"설명 본문."}}};const f=["primary","secondary","success","warning","danger","info","urgent"],Se={title:"M2/Alert",component:r,parameters:{layout:"centered",docs:{description:{component:'\n### 콜아웃/알림 메시지를 표시하는 Alert 컴포넌트\n\n정적 인라인 콜아웃부터 Popover 안의 강조 메시지까지 커버하는 범용 표면입니다.\n\n## 주요 기능\n\n- **7가지 색상**: `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `urgent`\n- **3가지 변형**: `soft`(연한 tint), `accent`(tint + 좌측 보더), `solid`(진한 채움 + 흰 글씨, 토스트 룩)\n- **title + 본문**: `title` prop + children\n- **아이콘**: color별 자동. `icon`으로 교체, `icon={false}`로 숨김\n- **닫기**: `onClose` 전달 시 X 버튼 노출\n\n## 사용 예시\n\n```tsx\n<Alert color="success" variant="soft" title="완료">\n  저장되었습니다.\n</Alert>\n```\n'}}},tags:["autodocs"],argTypes:{color:{control:"select",options:f,description:"Alert 색상. 의미에 따라 사용하세요.",table:{type:{summary:f.map(o=>`'${o}'`).join(" | ")},defaultValue:{summary:"'info'"},category:"스타일"}},variant:{control:"select",options:["soft","accent","solid"],description:"`soft`(tint), `accent`(tint+좌측보더), `solid`(진한 채움·토스트 룩).",table:{type:{summary:"'soft' | 'accent' | 'solid'"},defaultValue:{summary:"'soft'"},category:"스타일"}},title:{control:"text",description:"볼드 제목 행 (있으면 2행 레이아웃).",table:{type:{summary:"ReactNode"},category:"내용"}},children:{control:"text",description:"설명 본문.",table:{type:{summary:"ReactNode"},category:"내용"}},onClose:{control:!1,description:"주어지면 닫기(X) 버튼을 노출.",table:{type:{summary:"() => void"},category:"동작"}}},args:{color:"info",variant:"soft",title:"인용관계가 확인되었습니다",children:"제2항은 제1항을 인용하는 종속항입니다."}},t={},s={render:()=>e.jsx("div",{className:"flex w-[520px] flex-col gap-6",children:["soft","accent","solid"].map(o=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:["variant: ",o]}),e.jsx("div",{className:"flex flex-col gap-2",children:f.map(a=>e.jsxs(r,{color:a,variant:o,title:a,children:[a," 색상의 ",o," 알림입니다."]},a))})]},o))})},n={render:()=>e.jsxs("div",{className:"flex w-[440px] flex-col gap-3",children:[e.jsx(r,{color:"info",title:"제목이 있는 경우 (2행)",children:"아이콘과 제목이 헤더 행을 이루고, 본문이 그 아래에 옵니다."}),e.jsx(r,{color:"success",children:"제목 없이 본문만 있으면 1행으로 렌더됩니다."})]})},c={render:()=>e.jsxs("div",{className:"flex w-[440px] flex-col gap-3",children:[e.jsx(r,{color:"warning",title:"기본 아이콘",children:"color에 맞는 아이콘이 자동으로 붙습니다."}),e.jsx(r,{color:"warning",title:"커스텀 아이콘",icon:e.jsx(re,{}),children:"icon prop으로 원하는 아이콘으로 교체할 수 있습니다."}),e.jsx(r,{color:"warning",title:"아이콘 없음",icon:!1,children:"icon을 false로 주면 아이콘을 숨깁니다."})]})},i={render:()=>{const[o,a]=$.useState(!0);return o?e.jsx("div",{className:"w-[440px]",children:e.jsx(r,{color:"danger",title:"오류가 발생했습니다",onClose:()=>a(!1),children:"onClose를 전달하면 우측에 닫기 버튼이 나타납니다."})}):e.jsx(E,{variant:"outline",onClick:()=>a(!0),children:"다시 표시"})}},l={parameters:{docs:{description:{story:'Popover 안에 `variant="solid"` Alert를 넣어 "토스트 룩"을 재현한 예시입니다. PopoverContent의 기본 패딩/배경/보더/그림자를 제거해 Alert가 곧 표면이 되게 하고, 실제 Toaster처럼 떠 보이도록 Alert에 `shadow-lg`를 줍니다.'}}},render:()=>e.jsxs(Q,{children:[e.jsx(U,{asChild:!0,children:e.jsx(E,{children:"Popover 열기"})}),e.jsx(Y,{className:"w-[340px] border-0 bg-transparent p-0 shadow-none",children:e.jsx(r,{color:"primary",variant:"solid",title:"완료되었습니다",className:"shadow-lg",children:"인용관계 분석이 완료되었습니다."})})]})},d={parameters:{docs:{description:{story:"특허 청구항 인용관계 리스트 예시. 독립항은 `accent`(강조), 종속항은 `soft`로 조합합니다. Alert 자체는 단일 표면이고, 리스트 구성은 소비 측에서 담당합니다."}}},render:()=>e.jsxs("div",{className:"flex w-[560px] flex-col gap-2",children:[e.jsx(r,{color:"primary",variant:"accent",icon:!1,children:"복수의 안테나 소자를 포함하는 어레이; 빔 방향을 결정하는 제어부; 및 상기 빔으로 신호를 송신하는 송신부를 포함하는, 무선 통신 장치."}),e.jsx(r,{color:"secondary",variant:"soft",icon:!1,title:"종속항 (제2항 → 제1항 인용)",children:"제1항에 있어서, 상기 제어부는 채널 상태 정보에 기반하는 것을 특징으로 하는, 무선 통신 장치."}),e.jsx(r,{color:"secondary",variant:"soft",icon:!1,title:"종속항 (제3항 → 제1항 인용)",children:"제1항에 있어서, 상기 어레이는 64개 이상의 소자를 포함하는 것을 특징으로 하는, 무선 통신 장치."})]})};var A,b,w;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var N,j,C;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex w-[520px] flex-col gap-6">
      {(['soft', 'accent', 'solid'] as const).map(variant => <div key={variant} className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">variant: {variant}</h3>
          <div className="flex flex-col gap-2">
            {COLORS.map(color => <Alert key={color} color={color} variant={variant} title={color}>
                {color} 색상의 {variant} 알림입니다.
              </Alert>)}
          </div>
        </div>)}
    </div>
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var P,k,T;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex w-[440px] flex-col gap-3">
      <Alert color="info" title="제목이 있는 경우 (2행)">
        아이콘과 제목이 헤더 행을 이루고, 본문이 그 아래에 옵니다.
      </Alert>
      <Alert color="success">제목 없이 본문만 있으면 1행으로 렌더됩니다.</Alert>
    </div>
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var O,S,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex w-[440px] flex-col gap-3">
      <Alert color="warning" title="기본 아이콘">
        color에 맞는 아이콘이 자동으로 붙습니다.
      </Alert>
      <Alert color="warning" title="커스텀 아이콘" icon={<MegaphoneIcon />}>
        icon prop으로 원하는 아이콘으로 교체할 수 있습니다.
      </Alert>
      <Alert color="warning" title="아이콘 없음" icon={false}>
        icon을 false로 주면 아이콘을 숨깁니다.
      </Alert>
    </div>
}`,...(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var R,q,B;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    if (!open) {
      return <Button variant="outline" onClick={() => setOpen(true)}>
          다시 표시
        </Button>;
    }
    return <div className="w-[440px]">
        <Alert color="danger" title="오류가 발생했습니다" onClose={() => setOpen(false)}>
          onClose를 전달하면 우측에 닫기 버튼이 나타납니다.
        </Alert>
      </div>;
  }
}`,...(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var M,V,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Popover 안에 \`variant="solid"\` Alert를 넣어 "토스트 룩"을 재현한 예시입니다. PopoverContent의 기본 패딩/배경/보더/그림자를 제거해 Alert가 곧 표면이 되게 하고, 실제 Toaster처럼 떠 보이도록 Alert에 \`shadow-lg\`를 줍니다.'
      }
    }
  },
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>Popover 열기</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[340px] border-0 bg-transparent p-0 shadow-none">
        <Alert color="primary" variant="solid" title="완료되었습니다" className="shadow-lg">
          인용관계 분석이 완료되었습니다.
        </Alert>
      </PopoverContent>
    </Popover>
}`,...(_=(V=l.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var L,X,z;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '특허 청구항 인용관계 리스트 예시. 독립항은 \`accent\`(강조), 종속항은 \`soft\`로 조합합니다. Alert 자체는 단일 표면이고, 리스트 구성은 소비 측에서 담당합니다.'
      }
    }
  },
  render: () => <div className="flex w-[560px] flex-col gap-2">
      <Alert color="primary" variant="accent" icon={false}>
        복수의 안테나 소자를 포함하는 어레이; 빔 방향을 결정하는 제어부; 및 상기 빔으로 신호를
        송신하는 송신부를 포함하는, 무선 통신 장치.
      </Alert>
      <Alert color="secondary" variant="soft" icon={false} title="종속항 (제2항 → 제1항 인용)">
        제1항에 있어서, 상기 제어부는 채널 상태 정보에 기반하는 것을 특징으로 하는, 무선 통신 장치.
      </Alert>
      <Alert color="secondary" variant="soft" icon={false} title="종속항 (제3항 → 제1항 인용)">
        제1항에 있어서, 상기 어레이는 64개 이상의 소자를 포함하는 것을 특징으로 하는, 무선 통신
        장치.
      </Alert>
    </div>
}`,...(z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};const Ie=["Playground","Colors","TitleOptional","Icons","WithClose","InPopover","ClaimList"];export{d as ClaimList,s as Colors,c as Icons,l as InPopover,t as Playground,n as TitleOptional,i as WithClose,Ie as __namedExportsOrder,Se as default};
