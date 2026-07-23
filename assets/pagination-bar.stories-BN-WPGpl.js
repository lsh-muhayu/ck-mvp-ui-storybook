import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Q}from"./index-OJ7QbjDu.js";import{P as U,a as W,b as X,c as Y}from"./pagination-nav-T3e5qI6Z.js";import"./select-fallback-item-DlPCwHAo.js";import"./utils-CDN07tui.js";import"./index-C2vczdB5.js";import"./chevron-left-CzHBIiOm.js";import"./createLucideIcon-BRUIOxYu.js";import"./chevron-right-Cs4mL8WS.js";import"./chevron-down-vsUXeLsc.js";import"./scroll-area-auto-size-DfvhAHB7.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-CI4jWBLT.js";import"./index-jm-SPu3n.js";import"./index-Dc1_MvIw.js";import"./index-ehd_yKDV.js";import"./index-DVoPeAEP.js";import"./index-DAVdU-vC.js";import"./index-BVTTSdsW.js";import"./index-D15pND6U.js";import"./index-BtVicQOV.js";import"./index-b9QAQN5m.js";import"./index-BilTj9-P.js";import"./index-nJQzngU_.js";import"./index-Bt6hjcc2.js";function b({pageNo:a,pageSize:n,onPageChange:s,...x}){const i=Math.max(n,1),z=Math.min(Math.max(a,1),i),g=Math.floor((z-1)/10)*10+1,P=Math.min(g+9,i),J=Array.from({length:Math.max(0,P-g+1)},(p,K)=>g+K),f=p=>{p!==z&&(s==null||s(p))};return e.jsxs(U,{...x,children:[e.jsx(W,{disabled:g===1,onClick:()=>f(Math.max(g-1,1))}),J.map(p=>e.jsx(X,{isCurrent:z===p,onClick:()=>f(p),children:p},p)),e.jsx(Y,{disabled:P===i,onClick:()=>f(Math.min(P+1,i))})]})}b.__docgenInfo={description:"",methods:[],displayName:"PaginationBar",props:{pageNo:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const Ce={title:"M2/PaginationBar",component:b,parameters:{layout:"centered",controls:{include:["pageNo","pageSize"]},docs:{description:{component:`
### 페이지네이션 바 컴포넌트

PaginationBar는 현재 페이지와 총 페이지 수를 받아 10개 단위 페이지 그룹을 렌더링합니다.
\`PaginationBar\` 동작을 React 상태 모델로 구현했습니다.
        `}}},tags:["autodocs"],argTypes:{pageNo:{control:{type:"number",min:1},description:"현재 페이지 번호",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},pageSize:{control:{type:"number",min:1},description:"전체 페이지 수",table:{type:{summary:"number"}}}},args:{pageNo:1,pageSize:15}};function o({pageNo:a=1,pageSize:n=10}){const[s,x]=Q.useState(a);return e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(b,{pageNo:s,pageSize:n,onPageChange:x}),e.jsxs("p",{className:"text-m2-gray-2 text-sm",children:["현재 페이지: ",s]})]})}function r({label:a,pageNo:n,pageSize:s}){return e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("p",{className:"text-m2-gray-1 text-sm font-semibold",children:a}),e.jsx(o,{pageNo:n,pageSize:s})]})}const t={render:a=>e.jsx(o,{pageNo:a.pageNo,pageSize:a.pageSize},`${a.pageNo}-${a.pageSize}`)},m={args:{pageNo:1,pageSize:15},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"5 pages",pageNo:1,pageSize:5}),e.jsx(r,{label:"15 pages",pageNo:1,pageSize:15}),e.jsx(r,{label:"2000 pages",pageNo:1,pageSize:2e3})]})},l={args:{pageNo:1,pageSize:3},render:a=>e.jsx(o,{pageNo:a.pageNo,pageSize:a.pageSize})},c={args:{pageNo:1,pageSize:10},render:a=>e.jsx(o,{pageNo:a.pageNo,pageSize:a.pageSize})},d={args:{pageNo:1,pageSize:25},render:a=>e.jsx(o,{pageNo:a.pageNo,pageSize:a.pageSize})},N={args:{pageNo:1,pageSize:2e3},render:a=>e.jsx(o,{pageNo:a.pageNo,pageSize:a.pageSize})},u={args:{pageNo:15,pageSize:50},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"page 1 / 50",pageNo:1,pageSize:50}),e.jsx(r,{label:"page 15 / 50",pageNo:15,pageSize:50}),e.jsx(r,{label:"page 50 / 50",pageNo:50,pageSize:50})]})},S={args:{pageNo:1,pageSize:1},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{label:"single page",pageNo:1,pageSize:1}),e.jsx(r,{label:"11 pages",pageNo:11,pageSize:11}),e.jsx(r,{label:"21 pages",pageNo:21,pageSize:21})]})};var j,y,B;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{\n  render: args => <PaginationBarExample key={`${args.pageNo}-${args.pageSize}`} pageNo={args.pageNo} pageSize={args.pageSize} />\n}",...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var h,C,v;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    pageNo: 1,
    pageSize: 15
  },
  render: () => <div className="flex flex-col gap-6">
      <PaginationBarCase label="5 pages" pageNo={1} pageSize={5} />
      <PaginationBarCase label="15 pages" pageNo={1} pageSize={15} />
      <PaginationBarCase label="2000 pages" pageNo={1} pageSize={2000} />
    </div>
}`,...(v=(C=m.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var E,M,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    pageNo: 1,
    pageSize: 3
  },
  render: args => <PaginationBarExample pageNo={args.pageNo} pageSize={args.pageSize} />
}`,...(T=(M=l.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var _,k,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    pageNo: 1,
    pageSize: 10
  },
  render: args => <PaginationBarExample pageNo={args.pageNo} pageSize={args.pageSize} />
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var $,q,w;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    pageNo: 1,
    pageSize: 25
  },
  render: args => <PaginationBarExample pageNo={args.pageNo} pageSize={args.pageSize} />
}`,...(w=(q=d.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var A,R,F;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    pageNo: 1,
    pageSize: 2000
  },
  render: args => <PaginationBarExample pageNo={args.pageNo} pageSize={args.pageSize} />
}`,...(F=(R=N.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var G,I,L;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    pageNo: 15,
    pageSize: 50
  },
  render: () => <div className="flex flex-col gap-6">
      <PaginationBarCase label="page 1 / 50" pageNo={1} pageSize={50} />
      <PaginationBarCase label="page 15 / 50" pageNo={15} pageSize={50} />
      <PaginationBarCase label="page 50 / 50" pageNo={50} pageSize={50} />
    </div>
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var O,V,H;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    pageNo: 1,
    pageSize: 1
  },
  render: () => <div className="flex flex-col gap-6">
      <PaginationBarCase label="single page" pageNo={1} pageSize={1} />
      <PaginationBarCase label="11 pages" pageNo={11} pageSize={11} />
      <PaginationBarCase label="21 pages" pageNo={21} pageSize={21} />
    </div>
}`,...(H=(V=S.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const ve=["Playground","Examples","FewPages","TenPages","MultipleGroups","LargeDataset","StartingAtDifferentPages","EdgeCases"];export{S as EdgeCases,m as Examples,l as FewPages,N as LargeDataset,d as MultipleGroups,t as Playground,u as StartingAtDifferentPages,c as TenPages,ve as __namedExportsOrder,Ce as default};
