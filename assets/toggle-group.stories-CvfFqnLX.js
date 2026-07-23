import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-OJ7QbjDu.js";import{T as r,a as l}from"./toggle-group-item-BhJf_Sat.js";import{c as x}from"./createLucideIcon-BRUIOxYu.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-jm-SPu3n.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-DMBPP7gA.js";import"./index-DVoPeAEP.js";import"./index-D15pND6U.js";import"./index-Dc1_MvIw.js";import"./index-BilTj9-P.js";import"./index-ehd_yKDV.js";import"./index-CM4EhglE.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],K=x("bold",J);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],X=x("italic",Q);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],Z=x("underline",Y),fe={title:"M2/ToggleGroup",component:r,parameters:{layout:"centered",docs:{description:{component:'\n### 세그먼트 컨트롤 형태의 단일/다중 선택 컴포넌트\n\n`ToggleGroup`은 묶인 버튼 그룹에서 값을 선택하는 컨트롤입니다. 패널을 전환하는 `Tabs`와 달리, 하나(또는 여러 개)의 값을 고르는 용도입니다.\n\n## 주요 기능\n\n- **선택 모드**: `type="single"`(하나만) / `type="multiple"`(여러 개)\n- **색상**: `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `urgent` (Badge와 호환)\n- **크기**: `sm`, `md`, `lg`\n- **joined 스타일**: 바깥 테두리만, 내부는 divider로 분리, 선택 시 셀을 꽉 채움\n\n## 사용 예시\n\n```tsx\n<ToggleGroup type="single" defaultValue="detail" color="primary">\n  <ToggleGroupItem value="indep">명칭+요약+독립청구항</ToggleGroupItem>\n  <ToggleGroupItem value="all">명칭+요약+전체청구항</ToggleGroupItem>\n  <ToggleGroupItem value="detail">상세설명</ToggleGroupItem>\n</ToggleGroup>\n```\n        '}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"아이템 크기",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"},category:"스타일"}},color:{control:"select",options:["primary","secondary","success","warning","danger","info","urgent"],description:"선택된 아이템의 색상 (Badge filled와 동일)",table:{type:{summary:"ToggleGroupColor"},defaultValue:{summary:"'primary'"},category:"스타일"}}}},s={parameters:{controls:{disable:!1}},args:{size:"md",color:"primary"},render:a=>e.jsxs(r,{type:"single",defaultValue:"detail",...a,children:[e.jsx(l,{value:"indep",children:"명칭+요약+독립청구항"}),e.jsx(l,{value:"all",children:"명칭+요약+전체청구항"}),e.jsx(l,{value:"detail",children:"상세설명"})]})},t={render:()=>e.jsxs(r,{type:"single",defaultValue:"all",children:[e.jsx(l,{value:"indep",children:"명칭+요약+독립청구항"}),e.jsx(l,{value:"all",children:"명칭+요약+전체청구항"}),e.jsx(l,{value:"detail",children:"상세설명"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:'type="single"'}),e.jsxs(r,{type:"single",defaultValue:"week",children:[e.jsx(l,{value:"day",children:"Day"}),e.jsx(l,{value:"week",children:"Week"}),e.jsx(l,{value:"month",children:"Month"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:'type="multiple"'}),e.jsxs(r,{type:"multiple",defaultValue:["list","grid"],children:[e.jsx(l,{value:"list",children:"List"}),e.jsx(l,{value:"grid",children:"Grid"}),e.jsx(l,{value:"compact",children:"Compact"})]})]})]})},n={render:()=>e.jsx("div",{className:"flex items-center gap-4",children:["sm","md","lg"].map(a=>e.jsxs(r,{type:"single",defaultValue:"b",size:a,children:[e.jsx(l,{value:"a",children:"Day"}),e.jsx(l,{value:"b",children:"Week"}),e.jsx(l,{value:"c",children:"Month"})]},a))})},p={parameters:{layout:"padded",docs:{description:{story:"아이템이 많아 `flex-wrap`으로 줄바꿈을 허용한 경우입니다. 좁은 폭에서 2줄 이상으로 접혀도 각 아이템의 높이는 size에 맞게(md=40px) 유지됩니다. 또한 폭이 지정된 컨테이너(`w-full` 등)에서 줄바꿈되면 각 줄의 아이템이 여유 공간을 균등하게 나눠 가져 줄을 꽉 채웁니다(열 개수 지정 불필요). 기본 단일 행(`w-fit`)에서는 이 동작이 무효라 세그먼트 컨트롤 모양이 그대로 유지됩니다."}}},render:()=>e.jsx("div",{className:"border-m2-border rounded border border-dashed p-2",style:{width:380},children:e.jsx(r,{type:"single",defaultValue:"c",className:"w-full flex-wrap",children:["명칭","요약","독립청구항","전체청구항","상세설명","도면","배경기술","효과","실시예"].map((a,o)=>e.jsx(l,{value:String.fromCharCode(97+o),children:a},a))})})},i={parameters:{layout:"padded",docs:{description:{story:"컨테이너 우측 하단 손잡이를 드래그해 폭을 줄이면 줄바꿈이 실시간으로 일어납니다. 아이템 개수가 많아도 줄이 늘어날 뿐 각 아이템 높이는 유지되고, 각 줄은 여유 공간을 균등하게 나눠 가져 꽉 찹니다. 특허검색 필터처럼 항목이 많고 반응형으로 접혀야 하는 소비처를 재현한 예시입니다."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:"↘ 컨테이너 우측 하단을 드래그해 폭을 줄여보세요"}),e.jsx("div",{className:"border-m2-border w-full max-w-[760px] min-w-[220px] resize-x overflow-auto rounded border border-dashed p-2",children:e.jsx(r,{type:"multiple",defaultValue:["claim-indep","drawing"],className:"w-full flex-wrap",children:[["title","명칭"],["abstract","요약"],["claim-indep","독립청구항"],["claim-all","전체청구항"],["detail","상세설명"],["drawing","도면"],["background","배경기술"],["effect","발명의 효과"],["example","실시예"],["field","기술분야"],["problem","해결 과제"],["means","해결 수단"],["applicant","출원인"],["inventor","발명자"],["ipc","IPC 분류"]].map(([a,o])=>e.jsx(l,{value:a,children:o},a))})})]})},u={render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:["primary","secondary","success","warning","danger","info","urgent"].map(a=>e.jsxs(r,{type:"single",defaultValue:"b",color:a,children:[e.jsx(l,{value:"a",children:"하나"}),e.jsx(l,{value:"b",children:a}),e.jsx(l,{value:"c",children:"셋"})]},a))})},c={render:()=>e.jsxs(r,{type:"multiple",defaultValue:["bold"],children:[e.jsxs(l,{value:"bold",children:[e.jsx(K,{}),"Bold"]}),e.jsxs(l,{value:"italic",children:[e.jsx(X,{}),"Italic"]}),e.jsxs(l,{value:"underline",children:[e.jsx(Z,{}),"Underline"]})]})},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:"그룹 전체 disabled"}),e.jsxs(r,{type:"single",defaultValue:"b",disabled:!0,children:[e.jsx(l,{value:"a",children:"Day"}),e.jsx(l,{value:"b",children:"Week"}),e.jsx(l,{value:"c",children:"Month"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-m2-secondary text-xs font-bold",children:"개별 아이템 disabled"}),e.jsxs(r,{type:"single",defaultValue:"a",children:[e.jsx(l,{value:"a",children:"Day"}),e.jsx(l,{value:"b",disabled:!0,children:"Week"}),e.jsx(l,{value:"c",children:"Month"})]})]})]})},m={render:()=>{const[a,o]=F.useState("all");return e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsxs(r,{type:"single",value:a,onValueChange:v=>v&&o(v),children:[e.jsx(l,{value:"indep",children:"독립청구항"}),e.jsx(l,{value:"all",children:"전체청구항"}),e.jsx(l,{value:"detail",children:"상세설명"})]}),e.jsxs("span",{className:"text-m2-secondary text-sm",children:["선택값: ",a]})]})}};var f,y,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var G,h,I;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="all">
      <ToggleGroupItem value="indep">명칭+요약+독립청구항</ToggleGroupItem>
      <ToggleGroupItem value="all">명칭+요약+전체청구항</ToggleGroupItem>
      <ToggleGroupItem value="detail">상세설명</ToggleGroupItem>
    </ToggleGroup>
}`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var b,j,N;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,V,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      {(['sm', 'md', 'lg'] as const).map(size => <ToggleGroup key={size} type="single" defaultValue="b" size={size}>
          <ToggleGroupItem value="a">Day</ToggleGroupItem>
          <ToggleGroupItem value="b">Week</ToggleGroupItem>
          <ToggleGroupItem value="c">Month</ToggleGroupItem>
        </ToggleGroup>)}
    </div>
}`,...(k=(V=n.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var S,C,W;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(W=(C=p.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var M,z,D;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var B,_,q;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'urgent'] as const).map(color => <ToggleGroup key={color} type="single" defaultValue="b" color={color}>
            <ToggleGroupItem value="a">하나</ToggleGroupItem>
            <ToggleGroupItem value="b">{color}</ToggleGroupItem>
            <ToggleGroupItem value="c">셋</ToggleGroupItem>
          </ToggleGroup>)}
    </div>
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var P,U,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var L,R,$;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(R=g.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var H,O,A;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(A=(O=m.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const ye=["Playground","Basic","SingleVsMultiple","Sizes","Wrap","WrapResponsive","Colors","WithIcons","Disabled","Controlled"];export{t as Basic,u as Colors,m as Controlled,g as Disabled,s as Playground,d as SingleVsMultiple,n as Sizes,c as WithIcons,p as Wrap,i as WrapResponsive,ye as __namedExportsOrder,fe as default};
