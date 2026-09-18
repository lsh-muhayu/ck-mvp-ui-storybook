import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as c,r as C}from"./index-OJ7QbjDu.js";import{c as de}from"./index-C2vczdB5.js";import{c as ue}from"./utils-CDN07tui.js";import{c as he}from"./index-jm-SPu3n.js";import{P as S}from"./index-BLnlIFXI.js";import{c as ce,I as be,R as Ie}from"./index-eYQ6B2Cn.js";import{T as je}from"./index-iTePWsE_.js";import{u as pe}from"./index-CxFCylgP.js";import{u as we}from"./index-ehd_yKDV.js";import{c as k}from"./createLucideIcon-BRUIOxYu.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-R2u7xokr.js";import"./index-J9NOjVw1.js";import"./index-Dc1_MvIw.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],Ve=k("bold",Ne);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],ke=k("italic",Ce);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],Se=k("underline",_e);var p="ToggleGroup",[ge]=he(p,[ce]),me=ce(),_=c.forwardRef((a,r)=>{const{type:l,...s}=a;if(l==="single"){const t=s;return e.jsx(Pe,{...t,ref:r})}if(l==="multiple"){const t=s;return e.jsx(ze,{...t,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${p}\``)});_.displayName=p;var[xe,ve]=ge(p),Pe=c.forwardRef((a,r)=>{const{value:l,defaultValue:s,onValueChange:t=()=>{},...d}=a,[u,n]=pe({prop:l,defaultProp:s??"",onChange:t,caller:p});return e.jsx(xe,{scope:a.__scopeToggleGroup,type:"single",value:c.useMemo(()=>u?[u]:[],[u]),onItemActivate:n,onItemDeactivate:c.useCallback(()=>n(""),[n]),children:e.jsx(fe,{...d,ref:r})})}),ze=c.forwardRef((a,r)=>{const{value:l,defaultValue:s,onValueChange:t=()=>{},...d}=a,[u,n]=pe({prop:l,defaultProp:s??[],onChange:t,caller:p}),g=c.useCallback(m=>n((x=[])=>[...x,m]),[n]),V=c.useCallback(m=>n((x=[])=>x.filter(Te=>Te!==m)),[n]);return e.jsx(xe,{scope:a.__scopeToggleGroup,type:"multiple",value:u,onItemActivate:g,onItemDeactivate:V,children:e.jsx(fe,{...d,ref:r})})});_.displayName=p;var[Me,De]=ge(p),fe=c.forwardRef((a,r)=>{const{__scopeToggleGroup:l,disabled:s=!1,rovingFocus:t=!0,orientation:d,dir:u,loop:n=!0,...g}=a,V=me(l),m=we(u),x={role:"group",dir:m,...g};return e.jsx(Me,{scope:l,rovingFocus:t,disabled:s,children:t?e.jsx(Ie,{asChild:!0,...V,orientation:d,dir:m,loop:n,children:e.jsx(S.div,{...x,ref:r})}):e.jsx(S.div,{...x,ref:r})})}),N="ToggleGroupItem",Ge=c.forwardRef((a,r)=>{const l=ve(N,a.__scopeToggleGroup),s=De(N,a.__scopeToggleGroup),t=me(a.__scopeToggleGroup),d=l.value.includes(a.value),u=s.disabled||a.disabled,n={...a,pressed:d,disabled:u},g=c.useRef(null);return s.rovingFocus?e.jsx(be,{asChild:!0,...t,focusable:!u,active:d,ref:g,children:e.jsx(P,{...n,ref:r})}):e.jsx(P,{...n,ref:r})});Ge.displayName=N;var P=c.forwardRef((a,r)=>{const{__scopeToggleGroup:l,value:s,...t}=a,d=ve(N,l),u={role:"radio","aria-checked":a.pressed,"aria-pressed":void 0},n=d.type==="single"?u:void 0;return e.jsx(je,{...n,...t,ref:r,onPressedChange:g=>{g?d.onItemActivate(s):d.onItemDeactivate(s)}})}),Re=_,We=Ge;const Be=de("border-m2-border inline-flex w-fit items-stretch overflow-hidden rounded-lg border bg-white",{variants:{size:{sm:"min-h-8",md:"min-h-10",lg:"min-h-12"}},defaultVariants:{size:"md"}}),ye=C.createContext({size:"md",color:"primary"});function qe(){return C.useContext(ye)}function i({className:a,size:r="md",color:l="primary",children:s,...t}){return e.jsx(ye.Provider,{value:{size:r,color:l},children:e.jsx(Re,{"data-slot":"toggle-group",className:ue(Be({size:r}),a),...t,children:s})})}i.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};const Ee=de(["relative inline-flex grow items-center justify-center gap-1.5 font-bold whitespace-nowrap","text-m2-secondary cursor-pointer transition-[color,background-color,border-color]","border-m2-border border-l first:border-l-0","not-disabled:data-[state=off]:hover:bg-m2-surface-hover","disabled:cursor-not-allowed disabled:opacity-50","focus-visible:ring-m2-primary/20 focus-visible:z-10 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset","[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"],{variants:{size:{sm:"h-[30px] px-3 text-sm",md:"h-[38px] px-4 text-sm",lg:"h-[46px] px-5 text-base"},color:{primary:"",secondary:"",success:"",warning:"",danger:"",info:"",urgent:""}},compoundVariants:[{color:"primary",class:"not-disabled:data-[state=off]:hover:text-m2-primary data-[state=on]:border-m2-primary data-[state=on]:bg-m2-primary data-[state=on]:text-white"},{color:"secondary",class:"not-disabled:data-[state=off]:hover:text-m2-secondary-dark data-[state=on]:border-m2-surface-hover data-[state=on]:bg-m2-surface-hover data-[state=on]:text-m2-secondary-dark"},{color:"success",class:"not-disabled:data-[state=off]:hover:text-m2-success data-[state=on]:border-m2-success-tint data-[state=on]:bg-m2-success-tint data-[state=on]:text-m2-success"},{color:"warning",class:"not-disabled:data-[state=off]:hover:text-m2-warning data-[state=on]:border-m2-warning-tint data-[state=on]:bg-m2-warning-tint data-[state=on]:text-m2-warning"},{color:"danger",class:"not-disabled:data-[state=off]:hover:text-m2-danger data-[state=on]:border-m2-danger-tint data-[state=on]:bg-m2-danger-tint data-[state=on]:text-m2-danger"},{color:"info",class:"not-disabled:data-[state=off]:hover:text-m2-info data-[state=on]:border-m2-info-tint data-[state=on]:bg-m2-info-tint data-[state=on]:text-m2-info"},{color:"urgent",class:"not-disabled:data-[state=off]:hover:text-m2-urgent data-[state=on]:border-m2-urgent data-[state=on]:bg-m2-urgent data-[state=on]:text-white"}],defaultVariants:{size:"md",color:"primary"}});function o({className:a,size:r,color:l,...s}){const t=qe();return e.jsx(We,{"data-slot":"toggle-group-item",className:ue(Ee({size:r??t.size,color:l??t.color}),a),...s})}o.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'warning'
| 'danger'
| 'info'
| 'urgent'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"},{name:"literal",value:"'urgent'"}]},description:""}},composes:["Omit"]};const ra={title:"M2/ToggleGroup",component:i,parameters:{layout:"centered",docs:{description:{component:'\n### 세그먼트 컨트롤 형태의 단일/다중 선택 컴포넌트\n\n`ToggleGroup`은 묶인 버튼 그룹에서 값을 선택하는 컨트롤입니다. 패널을 전환하는 `Tabs`와 달리, 하나(또는 여러 개)의 값을 고르는 용도입니다.\n\n## 주요 기능\n\n- **선택 모드**: `type="single"`(하나만) / `type="multiple"`(여러 개)\n- **색상**: `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `urgent` (Badge와 호환)\n- **크기**: `sm`, `md`, `lg`\n- **joined 스타일**: 바깥 테두리만, 내부는 divider로 분리, 선택 시 셀을 꽉 채움\n\n## 사용 예시\n\n```tsx\n<ToggleGroup type="single" defaultValue="detail" color="primary">\n  <ToggleGroupItem value="indep">명칭+요약+독립청구항</ToggleGroupItem>\n  <ToggleGroupItem value="all">명칭+요약+전체청구항</ToggleGroupItem>\n  <ToggleGroupItem value="detail">상세설명</ToggleGroupItem>\n</ToggleGroup>\n```\n        '}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"아이템 크기",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"},category:"스타일"}},color:{control:"select",options:["primary","secondary","success","warning","danger","info","urgent"],description:"선택된 아이템의 색상 (Badge filled와 동일)",table:{type:{summary:"ToggleGroupColor"},defaultValue:{summary:"'primary'"},category:"스타일"}}}},v={parameters:{controls:{disable:!1}},args:{size:"md",color:"primary"},render:a=>e.jsxs(i,{type:"single",defaultValue:"detail",...a,children:[e.jsx(o,{value:"indep",children:"명칭+요약+독립청구항"}),e.jsx(o,{value:"all",children:"명칭+요약+전체청구항"}),e.jsx(o,{value:"detail",children:"상세설명"})]})},f={render:()=>e.jsxs(i,{type:"single",defaultValue:"all",children:[e.jsx(o,{value:"indep",children:"명칭+요약+독립청구항"}),e.jsx(o,{value:"all",children:"명칭+요약+전체청구항"}),e.jsx(o,{value:"detail",children:"상세설명"})]})},G={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:'type="single"'}),e.jsxs(i,{type:"single",defaultValue:"week",children:[e.jsx(o,{value:"day",children:"Day"}),e.jsx(o,{value:"week",children:"Week"}),e.jsx(o,{value:"month",children:"Month"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:'type="multiple"'}),e.jsxs(i,{type:"multiple",defaultValue:["list","grid"],children:[e.jsx(o,{value:"list",children:"List"}),e.jsx(o,{value:"grid",children:"Grid"}),e.jsx(o,{value:"compact",children:"Compact"})]})]})]})},y={render:()=>e.jsx("div",{className:"flex items-center gap-4",children:["sm","md","lg"].map(a=>e.jsxs(i,{type:"single",defaultValue:"b",size:a,children:[e.jsx(o,{value:"a",children:"Day"}),e.jsx(o,{value:"b",children:"Week"}),e.jsx(o,{value:"c",children:"Month"})]},a))})},T={parameters:{layout:"padded",docs:{description:{story:"아이템이 많아 `flex-wrap`으로 줄바꿈을 허용한 경우입니다. 좁은 폭에서 2줄 이상으로 접혀도 각 아이템의 높이는 size에 맞게(md=40px) 유지됩니다. 또한 폭이 지정된 컨테이너(`w-full` 등)에서 줄바꿈되면 각 줄의 아이템이 여유 공간을 균등하게 나눠 가져 줄을 꽉 채웁니다(열 개수 지정 불필요). 기본 단일 행(`w-fit`)에서는 이 동작이 무효라 세그먼트 컨트롤 모양이 그대로 유지됩니다."}}},render:()=>e.jsx("div",{className:"border-m2-border rounded border border-dashed p-2",style:{width:380},children:e.jsx(i,{type:"single",defaultValue:"c",className:"w-full flex-wrap",children:["명칭","요약","독립청구항","전체청구항","상세설명","도면","배경기술","효과","실시예"].map((a,r)=>e.jsx(o,{value:String.fromCharCode(97+r),children:a},a))})})},h={parameters:{layout:"padded",docs:{description:{story:"컨테이너 우측 하단 손잡이를 드래그해 폭을 줄이면 줄바꿈이 실시간으로 일어납니다. 아이템 개수가 많아도 줄이 늘어날 뿐 각 아이템 높이는 유지되고, 각 줄은 여유 공간을 균등하게 나눠 가져 꽉 찹니다. 특허검색 필터처럼 항목이 많고 반응형으로 접혀야 하는 소비처를 재현한 예시입니다."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:"↘ 컨테이너 우측 하단을 드래그해 폭을 줄여보세요"}),e.jsx("div",{className:"border-m2-border w-full max-w-[760px] min-w-[220px] resize-x overflow-auto rounded border border-dashed p-2",children:e.jsx(i,{type:"multiple",defaultValue:["claim-indep","drawing"],className:"w-full flex-wrap",children:[["title","명칭"],["abstract","요약"],["claim-indep","독립청구항"],["claim-all","전체청구항"],["detail","상세설명"],["drawing","도면"],["background","배경기술"],["effect","발명의 효과"],["example","실시예"],["field","기술분야"],["problem","해결 과제"],["means","해결 수단"],["applicant","출원인"],["inventor","발명자"],["ipc","IPC 분류"]].map(([a,r])=>e.jsx(o,{value:a,children:r},a))})})]})},b={render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:["primary","secondary","success","warning","danger","info","urgent"].map(a=>e.jsxs(i,{type:"single",defaultValue:"b",color:a,children:[e.jsx(o,{value:"a",children:"하나"}),e.jsx(o,{value:"b",children:a}),e.jsx(o,{value:"c",children:"셋"})]},a))})},I={render:()=>e.jsxs(i,{type:"multiple",defaultValue:["bold"],children:[e.jsxs(o,{value:"bold",children:[e.jsx(Ve,{}),"Bold"]}),e.jsxs(o,{value:"italic",children:[e.jsx(ke,{}),"Italic"]}),e.jsxs(o,{value:"underline",children:[e.jsx(Se,{}),"Underline"]})]})},j={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:"그룹 전체 disabled"}),e.jsxs(i,{type:"single",defaultValue:"b",disabled:!0,children:[e.jsx(o,{value:"a",children:"Day"}),e.jsx(o,{value:"b",children:"Week"}),e.jsx(o,{value:"c",children:"Month"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:"개별 아이템 disabled"}),e.jsxs(i,{type:"single",defaultValue:"a",children:[e.jsx(o,{value:"a",children:"Day"}),e.jsx(o,{value:"b",disabled:!0,children:"Week"}),e.jsx(o,{value:"c",children:"Month"})]})]})]})},w={render:()=>{const[a,r]=C.useState("all");return e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsxs(i,{type:"single",value:a,onValueChange:l=>l&&r(l),children:[e.jsx(o,{value:"indep",children:"독립청구항"}),e.jsx(o,{value:"all",children:"전체청구항"}),e.jsx(o,{value:"detail",children:"상세설명"})]}),e.jsxs("span",{className:"text-m2-secondary text-sm",children:["선택값: ",a]})]})}};var z,M,D;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    size: 'md',
    color: 'primary'
  },
  render: args => <ToggleGroup type="single" defaultValue="detail" {...args}>
      <ToggleGroupItem value="indep">명칭+요약+독립청구항</ToggleGroupItem>
      <ToggleGroupItem value="all">명칭+요약+전체청구항</ToggleGroupItem>
      <ToggleGroupItem value="detail">상세설명</ToggleGroupItem>
    </ToggleGroup>
}`,...(D=(M=v.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var R,W,B;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="all">
      <ToggleGroupItem value="indep">명칭+요약+독립청구항</ToggleGroupItem>
      <ToggleGroupItem value="all">명칭+요약+전체청구항</ToggleGroupItem>
      <ToggleGroupItem value="detail">상세설명</ToggleGroupItem>
    </ToggleGroup>
}`,...(B=(W=f.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var q,E,$;G.parameters={...G.parameters,docs:{...(q=G.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-m2-secondary text-xs font-bold">type=&quot;single&quot;</span>
        <ToggleGroup type="single" defaultValue="week">
          <ToggleGroupItem value="day">Day</ToggleGroupItem>
          <ToggleGroupItem value="week">Week</ToggleGroupItem>
          <ToggleGroupItem value="month">Month</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-m2-secondary text-xs font-bold">type=&quot;multiple&quot;</span>
        <ToggleGroup type="multiple" defaultValue={['list', 'grid']}>
          <ToggleGroupItem value="list">List</ToggleGroupItem>
          <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
          <ToggleGroupItem value="compact">Compact</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
}`,...($=(E=G.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var A,F,U;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      {(['sm', 'md', 'lg'] as const).map(size => <ToggleGroup key={size} type="single" defaultValue="b" size={size}>
          <ToggleGroupItem value="a">Day</ToggleGroupItem>
          <ToggleGroupItem value="b">Week</ToggleGroupItem>
          <ToggleGroupItem value="c">Month</ToggleGroupItem>
        </ToggleGroup>)}
    </div>
}`,...(U=(F=y.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var L,O,H;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '아이템이 많아 \`flex-wrap\`으로 줄바꿈을 허용한 경우입니다. 좁은 폭에서 2줄 이상으로 접혀도 각 아이템의 높이는 size에 맞게(md=40px) 유지됩니다. 또한 폭이 지정된 컨테이너(\`w-full\` 등)에서 줄바꿈되면 각 줄의 아이템이 여유 공간을 균등하게 나눠 가져 줄을 꽉 채웁니다(열 개수 지정 불필요). 기본 단일 행(\`w-fit\`)에서는 이 동작이 무효라 세그먼트 컨트롤 모양이 그대로 유지됩니다.'
      }
    }
  },
  render: () => <div className="border-m2-border rounded border border-dashed p-2" style={{
    width: 380
  }}>
      <ToggleGroup type="single" defaultValue="c" className="w-full flex-wrap">
        {['명칭', '요약', '독립청구항', '전체청구항', '상세설명', '도면', '배경기술', '효과', '실시예'].map((label, i) => <ToggleGroupItem key={label} value={String.fromCharCode(97 + i)}>
            {label}
          </ToggleGroupItem>)}
      </ToggleGroup>
    </div>
}`,...(H=(O=T.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '컨테이너 우측 하단 손잡이를 드래그해 폭을 줄이면 줄바꿈이 실시간으로 일어납니다. 아이템 개수가 많아도 줄이 늘어날 뿐 각 아이템 높이는 유지되고, 각 줄은 여유 공간을 균등하게 나눠 가져 꽉 찹니다. 특허검색 필터처럼 항목이 많고 반응형으로 접혀야 하는 소비처를 재현한 예시입니다.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-2">
      <span className="text-m2-secondary text-xs font-bold">
        ↘ 컨테이너 우측 하단을 드래그해 폭을 줄여보세요
      </span>
      <div className="border-m2-border w-full max-w-[760px] min-w-[220px] resize-x overflow-auto rounded border border-dashed p-2">
        <ToggleGroup type="multiple" defaultValue={['claim-indep', 'drawing']} className="w-full flex-wrap">
          {[['title', '명칭'], ['abstract', '요약'], ['claim-indep', '독립청구항'], ['claim-all', '전체청구항'], ['detail', '상세설명'], ['drawing', '도면'], ['background', '배경기술'], ['effect', '발명의 효과'], ['example', '실시예'], ['field', '기술분야'], ['problem', '해결 과제'], ['means', '해결 수단'], ['applicant', '출원인'], ['inventor', '발명자'], ['ipc', 'IPC 분류']].map(([value, label]) => <ToggleGroupItem key={value} value={value}>
              {label}
            </ToggleGroupItem>)}
        </ToggleGroup>
      </div>
    </div>
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'urgent'] as const).map(color => <ToggleGroup key={color} type="single" defaultValue="b" color={color}>
            <ToggleGroupItem value="a">하나</ToggleGroupItem>
            <ToggleGroupItem value="b">{color}</ToggleGroupItem>
            <ToggleGroupItem value="c">셋</ToggleGroupItem>
          </ToggleGroup>)}
    </div>
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,oe;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold">
        <Bold />
        Bold
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
        Italic
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline />
        Underline
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(oe=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,le,te;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-m2-secondary text-xs font-bold">그룹 전체 disabled</span>
        <ToggleGroup type="single" defaultValue="b" disabled>
          <ToggleGroupItem value="a">Day</ToggleGroupItem>
          <ToggleGroupItem value="b">Week</ToggleGroupItem>
          <ToggleGroupItem value="c">Month</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-m2-secondary text-xs font-bold">개별 아이템 disabled</span>
        <ToggleGroup type="single" defaultValue="a">
          <ToggleGroupItem value="a">Day</ToggleGroupItem>
          <ToggleGroupItem value="b" disabled>
            Week
          </ToggleGroupItem>
          <ToggleGroupItem value="c">Month</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
}`,...(te=(le=j.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var se,ne,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('all');
    return <div className="flex flex-col items-center gap-3">
        <ToggleGroup type="single" value={value} onValueChange={v => v && setValue(v)}>
          <ToggleGroupItem value="indep">독립청구항</ToggleGroupItem>
          <ToggleGroupItem value="all">전체청구항</ToggleGroupItem>
          <ToggleGroupItem value="detail">상세설명</ToggleGroupItem>
        </ToggleGroup>
        <span className="text-m2-secondary text-sm">선택값: {value}</span>
      </div>;
  }
}`,...(ie=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const la=["Playground","Basic","SingleVsMultiple","Sizes","Wrap","WrapResponsive","Colors","WithIcons","Disabled","Controlled"];export{f as Basic,b as Colors,w as Controlled,j as Disabled,v as Playground,G as SingleVsMultiple,y as Sizes,I as WithIcons,T as Wrap,h as WrapResponsive,la as __namedExportsOrder,ra as default};
