import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as J}from"./overlay-stack-C2o3FQ3d.js";import{B as s}from"./button-CkQv11My.js";import{o as Q,c as U,d as V,e as W,f as X,g as Y}from"./dialog-overlay-kit-BXVnGRLP.js";import{S as Z,a as ee,b as oe,c as S}from"./select-fallback-item-Dasp1V0j.js";import{o as re,S as se,a as te,b as ae,c as ne,d as ie}from"./sheet-overlay-kit-BcfrwajT.js";import{T as ce,a as le,b as de}from"./tooltip-content-CM0Lp_dY.js";import"./index-OJ7QbjDu.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./scroll-area-auto-size-DQ_L9_-s.js";import"./index-BLnlIFXI.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-vJq8CsoX.js";import"./index-jm-SPu3n.js";import"./index-Dc1_MvIw.js";import"./index-ehd_yKDV.js";import"./index-CmxWFQG3.js";import"./index-J9NOjVw1.js";import"./index-CxFCylgP.js";import"./index-ikjn6k1p.js";import"./x-rbQ9-OCx.js";import"./chevron-down-vsUXeLsc.js";import"./index-R2u7xokr.js";import"./index-BkBxvK4w.js";import"./index-aeuf1bbk.js";import"./index-nJQzngU_.js";import"./index-9WfwfrTN.js";const f={sheet:"Sheet",dialog:"Dialog"};function t(r,o){var C;const g=r.kinds[o];if(!g)return;const x=r.kinds[o+1],D=r.forceStackedScrim?"bg-black/50":void 0,u=`${o+1}단계 · ${f[g]}`,k=`스택 ${o+1}번째 · DOM(열린) 순서로 이 위에 쌓인다`,j=(C=r.renderExtra)==null?void 0:C.call(r,o),y=n=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",color:"secondary",onClick:n.close,children:"이 단계 닫기"}),x&&e.jsxs(s,{variant:"filled",color:"primary",onClick:()=>t(r,o+1),children:[f[x]," 열기 (",o+2,"단계)"]})]}),v=e.jsx("p",{className:"text-m2-secondary text-sm",children:"이 오버레이는 닫히지 않고 계속 렌더된 상태입니다. 위에 새 오버레이가 열리면 그 backdrop이 이 오버레이 위를 덮어 배경으로 물러납니다."});if(g==="sheet"){re(n=>e.jsxs(e.Fragment,{children:[e.jsxs(se,{children:[e.jsx(te,{children:u}),e.jsx(ae,{children:k})]}),e.jsx(ne,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[v,j]})}),e.jsx(ie,{children:y(n)})]}),{side:o%4===0?"right":"left",dismissMode:"dismiss",overlayClassName:D});return}Q(n=>e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(V,{children:u}),e.jsx(W,{children:k})]}),e.jsx(X,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[v,j]})}),e.jsx(Y,{children:y(n)})]}),{dismissMode:"dismiss",overlayClassName:D})}function a({children:r}){return e.jsx("div",{className:"min-h-screen w-full bg-white p-10",children:e.jsxs("div",{className:"mx-auto flex max-w-4xl flex-col gap-6",children:[e.jsx("div",{className:"flex flex-wrap gap-3",children:r}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:["#2563eb","#16a34a","#f59e0b","#dc2626"].map(o=>e.jsxs("div",{className:"flex h-24 items-center justify-center rounded-lg text-sm font-bold text-white",style:{backgroundColor:o},children:["배경 ",o]},o))}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"위 색상 블록이 얼마나 어두워지는지로 scrim 누적 여부를 판정할 수 있습니다."})]})})}function me(){return e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs(Z,{children:[e.jsx(ee,{placeholder:"옵션을 선택하세요",className:"w-56"}),e.jsxs(oe,{children:[e.jsx(S,{value:"a",children:"옵션 A"}),e.jsx(S,{value:"b",children:"옵션 B"}),e.jsx(S,{value:"c",children:"옵션 C"})]})]}),e.jsxs(ce,{children:[e.jsx(le,{asChild:!0,children:e.jsx(s,{variant:"outlined",color:"secondary",children:"여기에 hover"})}),e.jsx(de,{children:"2단 오버레이 안에서도 툴팁이 content 위에 뜬다"})]})]})}const qe={title:"M2/Overlay Stack",parameters:{layout:"fullscreen",docs:{description:{component:`
### 중첩 오버레이 스태킹

Sheet / Dialog를 여러 겹 쌓았을 때 **나중에 열린 오버레이의 backdrop이 이전 오버레이를 덮는지**를
확인하는 활용 예시 모음입니다. 소비측 코드 변경 없이 \`openSheet\` / \`openDialog\` 호출만으로 동작합니다.

규칙과 근거는 **[Foundations / Overlay Stacking](?path=/docs/foundations-overlay-stacking--docs)** 에 정리돼 있습니다. 요약하면:

- scrim과 content가 **같은 z(\`z-m2-dialog\` = 110)** 를 씁니다. z가 같으면 페인트 순서가 DOM 순서로
  결정되고, overlay-kit이 열린 순서대로 렌더하므로 **DOM 순서 = 열린 순서** → 나중에 열린 backdrop이
  이전 오버레이를 덮습니다. 스택 깊이를 계산하거나 z를 올리지 않습니다.
- 오버레이 안에서 body로 portal되는 popper(dropdown 120 / popover 120 / tooltip 140)는 오버레이(110)보다
  높아 몇 단으로 중첩돼도 그대로 위에 뜹니다.
- scrim은 **최상단 오버레이만** 칠하고 아래는 비웁니다(겹쳐도 어두움이 일정). \`3단 중첩\` 스토리에서
  누적 방식과 나란히 비교할 수 있습니다.
        `}}},decorators:[r=>e.jsx(J,{children:e.jsx(r,{})})],tags:["autodocs"]},i={name:"Sheet → Dialog",parameters:{docs:{description:{story:"실제 소비 사례(상세 drawer에서 본문 다이얼로그 열기). Dialog를 열면 Sheet가 어두워지고 Dialog가 그 위에 떠야 합니다."}}},render:()=>e.jsx(a,{children:e.jsx(s,{onClick:()=>t({kinds:["sheet","dialog"]},0),children:"Sheet 열기 → 그 위에 Dialog"})})},c={name:"Dialog → Sheet",parameters:{docs:{description:{story:"역방향도 같은 규칙입니다. 나중에 연 Sheet의 backdrop이 먼저 열린 Dialog를 덮어야 합니다."}}},render:()=>e.jsx(a,{children:e.jsx(s,{onClick:()=>t({kinds:["dialog","sheet"]},0),children:"Dialog 열기 → 그 위에 Sheet"})})},l={name:"Sheet → Sheet",parameters:{docs:{description:{story:"같은 타입 중첩. 두 번째 Sheet가 첫 번째 Sheet를 덮고, 첫 번째는 어두워진 채 남아 있어야 합니다."}}},render:()=>e.jsx(a,{children:e.jsx(s,{onClick:()=>t({kinds:["sheet","sheet"]},0),children:"Sheet 위에 Sheet"})})},d={name:"Dialog → Dialog",parameters:{docs:{description:{story:"같은 타입 중첩. 두 번째 Dialog가 첫 번째 Dialog를 덮어야 합니다."}}},render:()=>e.jsx(a,{children:e.jsx(s,{onClick:()=>t({kinds:["dialog","dialog"]},0),children:"Dialog 위에 Dialog"})})},m={name:"3단 중첩 — scrim 누적 비교",parameters:{docs:{description:{story:"왼쪽 버튼(기본 정책)은 3단까지 쌓아도 배경 어두움이 일정합니다. 오른쪽 버튼은 비교용으로 scrim을 누적시켜(overlayClassName 오버라이드) 3단에서 거의 검정이 되는 것을 보여줍니다."}}},render:()=>e.jsxs(a,{children:[e.jsx(s,{onClick:()=>t({kinds:["sheet","dialog","sheet"]},0),children:"3단 열기 (기본: 최상단만 dim)"}),e.jsx(s,{variant:"outlined",color:"secondary",onClick:()=>t({kinds:["sheet","dialog","sheet"],forceStackedScrim:!0},0),children:"3단 열기 (비교: scrim 누적)"})]})},p={name:"중첩 오버레이 안의 Select · Tooltip",parameters:{docs:{description:{story:"2단 오버레이(최상단 Dialog) 안에서 Select 드롭다운과 Tooltip을 열었을 때 자기 오버레이 뒤로 숨지 않는지 확인합니다. 1단 Sheet 안의 Select도 함께 열어 비교하세요."}}},render:()=>e.jsx(a,{children:e.jsx(s,{onClick:()=>t({kinds:["sheet","dialog"],renderExtra:()=>e.jsx(me,{})},0),children:"Sheet → Dialog (각 단계에 Select · Tooltip)"})})},h={name:"닫기 순서 — 위에서부터 하나씩",parameters:{docs:{description:{story:'3단까지 쌓은 뒤 "이 단계 닫기"로 위에서부터 하나씩 닫습니다. 닫는 순간 아래 오버레이가 한 프레임 튀거나 backdrop이 늦게 걷히지 않아야 합니다. ESC로도 최상단만 닫히는지 함께 확인하세요.'}}},render:()=>e.jsx(a,{children:e.jsx(s,{onClick:()=>t({kinds:["sheet","dialog","dialog"]},0),children:"3단 열고 위에서부터 닫아보기"})})};var T,B,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Sheet → Dialog',
  parameters: {
    docs: {
      description: {
        story: '실제 소비 사례(상세 drawer에서 본문 다이얼로그 열기). Dialog를 열면 Sheet가 어두워지고 Dialog가 그 위에 떠야 합니다.'
      }
    }
  },
  render: () => <DemoPage>
      <Button onClick={() => openStackLevel({
      kinds: ['sheet', 'dialog']
    }, 0)}>
        Sheet 열기 → 그 위에 Dialog
      </Button>
    </DemoPage>
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var b,N,L;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Dialog → Sheet',
  parameters: {
    docs: {
      description: {
        story: '역방향도 같은 규칙입니다. 나중에 연 Sheet의 backdrop이 먼저 열린 Dialog를 덮어야 합니다.'
      }
    }
  },
  render: () => <DemoPage>
      <Button onClick={() => openStackLevel({
      kinds: ['dialog', 'sheet']
    }, 0)}>
        Dialog 열기 → 그 위에 Sheet
      </Button>
    </DemoPage>
}`,...(L=(N=c.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var w,O,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Sheet → Sheet',
  parameters: {
    docs: {
      description: {
        story: '같은 타입 중첩. 두 번째 Sheet가 첫 번째 Sheet를 덮고, 첫 번째는 어두워진 채 남아 있어야 합니다.'
      }
    }
  },
  render: () => <DemoPage>
      <Button onClick={() => openStackLevel({
      kinds: ['sheet', 'sheet']
    }, 0)}>
        Sheet 위에 Sheet
      </Button>
    </DemoPage>
}`,...(E=(O=l.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var F,M,z;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Dialog → Dialog',
  parameters: {
    docs: {
      description: {
        story: '같은 타입 중첩. 두 번째 Dialog가 첫 번째 Dialog를 덮어야 합니다.'
      }
    }
  },
  render: () => <DemoPage>
      <Button onClick={() => openStackLevel({
      kinds: ['dialog', 'dialog']
    }, 0)}>
        Dialog 위에 Dialog
      </Button>
    </DemoPage>
}`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var I,_,$;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '3단 중첩 — scrim 누적 비교',
  parameters: {
    docs: {
      description: {
        story: '왼쪽 버튼(기본 정책)은 3단까지 쌓아도 배경 어두움이 일정합니다. 오른쪽 버튼은 비교용으로 scrim을 누적시켜(overlayClassName 오버라이드) 3단에서 거의 검정이 되는 것을 보여줍니다.'
      }
    }
  },
  render: () => <DemoPage>
      <Button onClick={() => openStackLevel({
      kinds: ['sheet', 'dialog', 'sheet']
    }, 0)}>
        3단 열기 (기본: 최상단만 dim)
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => openStackLevel({
      kinds: ['sheet', 'dialog', 'sheet'],
      forceStackedScrim: true
    }, 0)}>
        3단 열기 (비교: scrim 누적)
      </Button>
    </DemoPage>
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var A,H,K;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '중첩 오버레이 안의 Select · Tooltip',
  parameters: {
    docs: {
      description: {
        story: '2단 오버레이(최상단 Dialog) 안에서 Select 드롭다운과 Tooltip을 열었을 때 자기 오버레이 뒤로 숨지 않는지 확인합니다. 1단 Sheet 안의 Select도 함께 열어 비교하세요.'
      }
    }
  },
  render: () => <DemoPage>
      <Button onClick={() => openStackLevel({
      kinds: ['sheet', 'dialog'],
      renderExtra: () => <OverlayInnerPoppers />
    }, 0)}>
        Sheet → Dialog (각 단계에 Select · Tooltip)
      </Button>
    </DemoPage>
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var R,q,G;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '닫기 순서 — 위에서부터 하나씩',
  parameters: {
    docs: {
      description: {
        story: '3단까지 쌓은 뒤 "이 단계 닫기"로 위에서부터 하나씩 닫습니다. 닫는 순간 아래 오버레이가 한 프레임 튀거나 backdrop이 늦게 걷히지 않아야 합니다. ESC로도 최상단만 닫히는지 함께 확인하세요.'
      }
    }
  },
  render: () => <DemoPage>
      <Button onClick={() => openStackLevel({
      kinds: ['sheet', 'dialog', 'dialog']
    }, 0)}>
        3단 열고 위에서부터 닫아보기
      </Button>
    </DemoPage>
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ge=["SheetThenDialog","DialogThenSheet","SheetThenSheet","DialogThenDialog","ThreeLevelStack","NestedPoppers","CloseOrder"];export{h as CloseOrder,d as DialogThenDialog,c as DialogThenSheet,p as NestedPoppers,i as SheetThenDialog,l as SheetThenSheet,m as ThreeLevelStack,Ge as __namedExportsOrder,qe as default};
