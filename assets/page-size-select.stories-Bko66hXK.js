import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-OJ7QbjDu.js";import{B as x}from"./button-CkQv11My.js";import{c as V}from"./utils-CDN07tui.js";import{S as T,a as B,b as M,c as I}from"./select-fallback-item-DlPCwHAo.js";import{C as q}from"./chevron-left-CzHBIiOm.js";import{C as _}from"./chevron-right-Cs4mL8WS.js";import"./index-C2vczdB5.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./chevron-down-vsUXeLsc.js";import"./scroll-area-auto-size-DfvhAHB7.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-CI4jWBLT.js";import"./index-jm-SPu3n.js";import"./index-Dc1_MvIw.js";import"./index-ehd_yKDV.js";import"./index-DVoPeAEP.js";import"./index-DAVdU-vC.js";import"./index-BVTTSdsW.js";import"./index-D15pND6U.js";import"./index-BtVicQOV.js";import"./index-b9QAQN5m.js";import"./index-BilTj9-P.js";import"./index-nJQzngU_.js";import"./index-Bt6hjcc2.js";const E=[{label:"10개",value:"10"},{label:"20개",value:"20"},{label:"30개",value:"30"},{label:"50개",value:"50"},{label:"100개",value:"100"}];function i({value:a,onValueChange:t,disabled:s=!1,className:n,"aria-label":c="페이지당 행 수","aria-labelledby":l}){return e.jsxs(T,{value:String(a),onValueChange:r=>t(Number(r)),disabled:s,children:[e.jsx(B,{"aria-label":l?void 0:c,"aria-labelledby":l,className:V("w-36",n),size:"sm"}),e.jsx(M,{children:E.map(r=>e.jsx(I,{value:r.value,size:"sm",children:r.label},r.value))})]})}i.__docgenInfo={description:"",methods:[],displayName:"PageSizeSelect",props:{value:{required:!0,tsType:{name:"number"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'페이지당 행 수'",computed:!1}},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const de={title:"M2/PageSizeSelect",component:i,parameters:{layout:"centered",docs:{description:{component:"PageSizeSelect는 pagination 페이지 크기 선택을 위해 M2 Select를 감싼 작은 wrapper 컴포넌트입니다. 외부 API는 number value와 onValueChange를 사용하고, 내부 Select 값만 문자열로 변환합니다."}}},tags:["autodocs"],argTypes:{value:{control:"number",description:"현재 선택된 페이지 크기",table:{type:{summary:"number"}}},onValueChange:{action:"value changed",description:"페이지 크기가 변경될 때 숫자 값으로 호출되는 콜백",table:{type:{summary:"(value: number) => void"}}},disabled:{control:"boolean",description:"페이지 크기 선택 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"SelectTrigger에 전달할 추가 className",table:{type:{summary:"string"}}}},args:{value:20,disabled:!1,onValueChange:()=>{}}},d={render:a=>e.jsxs("div",{className:"flex min-w-80 items-center justify-between gap-4",children:[e.jsx("span",{className:"text-m2-gray-1 text-sm",children:"페이지당 행 수"}),e.jsx(i,{...a})]})},p={render:()=>{const[a,t]=m.useState(30);return e.jsxs("div",{className:"flex w-96 flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-m2-gray-0 text-sm font-semibold",children:"목록 표시 개수"}),e.jsx("p",{className:"text-m2-gray-3 text-xs",children:"선택 값이 상태와 함께 즉시 갱신됩니다."})]}),e.jsx(i,{value:a,onValueChange:t})]}),e.jsxs("div",{className:"border-m2-border bg-m2-surface text-m2-gray-1 rounded border px-3 py-2 text-sm",children:["현재 선택: ",e.jsxs("strong",{className:"text-m2-primary font-semibold",children:[a,"개"]})]})]})}},u={render:()=>{const[a,t]=m.useState(10),[s,n]=m.useState(100);return e.jsxs("div",{className:"flex w-[440px] flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("span",{className:"text-m2-gray-1 text-sm",children:"기본 폭"}),e.jsx(i,{value:a,onValueChange:t})]}),e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("span",{className:"text-m2-gray-1 text-sm",children:"좁은 툴바용 폭"}),e.jsx(i,{className:"w-28",value:s,onValueChange:n})]})]})}},g={render:()=>{const[a,t]=m.useState(20),[s,n]=m.useState(1),c=246,l=Math.ceil(c/a),r=o=>{t(o),n(1)};return e.jsxs("div",{className:"border-m2-border flex w-[560px] items-center justify-between gap-4 border-y py-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-m2-gray-1 text-sm",children:"페이지당"}),e.jsx(i,{value:a,onValueChange:r}),e.jsxs("span",{className:"text-m2-gray-1 text-sm",children:["총 ",c.toLocaleString(),"건"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{type:"button",variant:"outlined",size:"icon-sm",disabled:s===1,onClick:()=>n(o=>Math.max(1,o-1)),"aria-label":"이전 페이지",children:e.jsx(q,{className:"size-4"})}),e.jsxs("span",{className:"text-m2-gray-0 min-w-20 text-center text-sm",children:[s," / ",l]}),e.jsx(x,{type:"button",variant:"outlined",size:"icon-sm",disabled:s===l,onClick:()=>n(o=>Math.min(l,o+1)),"aria-label":"다음 페이지",children:e.jsx(_,{className:"size-4"})})]})]})}};var S,b,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="flex min-w-80 items-center justify-between gap-4">
      <span className="text-m2-gray-1 text-sm">페이지당 행 수</span>
      <PageSizeSelect {...args} />
    </div>
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,y,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [pageSize, setPageSize] = useState(30);
    return <div className="flex w-96 flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-m2-gray-0 text-sm font-semibold">목록 표시 개수</p>
            <p className="text-m2-gray-3 text-xs">선택 값이 상태와 함께 즉시 갱신됩니다.</p>
          </div>
          <PageSizeSelect value={pageSize} onValueChange={setPageSize} />
        </div>
        <div className="border-m2-border bg-m2-surface text-m2-gray-1 rounded border px-3 py-2 text-sm">
          현재 선택: <strong className="text-m2-primary font-semibold">{pageSize}개</strong>
        </div>
      </div>;
  }
}`,...(h=(y=p.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var z,N,j;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [compactSize, setCompactSize] = useState(10);
    const [wideSize, setWideSize] = useState(100);
    return <div className="flex w-[440px] flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-m2-gray-1 text-sm">기본 폭</span>
          <PageSizeSelect value={compactSize} onValueChange={setCompactSize} />
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-m2-gray-1 text-sm">좁은 툴바용 폭</span>
          <PageSizeSelect className="w-28" value={wideSize} onValueChange={setWideSize} />
        </div>
      </div>;
  }
}`,...(j=(N=u.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var P,C,w;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [pageSize, setPageSize] = useState(20);
    const [page, setPage] = useState(1);
    const totalCount = 246;
    const totalPages = Math.ceil(totalCount / pageSize);
    const changePageSize = (nextPageSize: number) => {
      setPageSize(nextPageSize);
      setPage(1);
    };
    return <div className="border-m2-border flex w-[560px] items-center justify-between gap-4 border-y py-3">
        <div className="flex items-center gap-2">
          <span className="text-m2-gray-1 text-sm">페이지당</span>
          <PageSizeSelect value={pageSize} onValueChange={changePageSize} />
          <span className="text-m2-gray-1 text-sm">총 {totalCount.toLocaleString()}건</span>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outlined" size="icon-sm" disabled={page === 1} onClick={() => setPage(currentPage => Math.max(1, currentPage - 1))} aria-label="이전 페이지">
            <ChevronLeftIcon className="size-4" />
          </Button>
          <span className="text-m2-gray-0 min-w-20 text-center text-sm">
            {page} / {totalPages}
          </span>
          <Button type="button" variant="outlined" size="icon-sm" disabled={page === totalPages} onClick={() => setPage(currentPage => Math.min(totalPages, currentPage + 1))} aria-label="다음 페이지">
            <ChevronRightIcon className="size-4" />
          </Button>
        </div>
      </div>;
  }
}`,...(w=(C=g.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const pe=["Basic","Controlled","Sizes","PaginationUsage"];export{d as Basic,p as Controlled,g as PaginationUsage,u as Sizes,pe as __namedExportsOrder,de as default};
