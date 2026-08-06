import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-OJ7QbjDu.js";import{P as c,a as p,b as P,c as d}from"./pagination-nav-T3e5qI6Z.js";import"./utils-CDN07tui.js";import"./index-C2vczdB5.js";import"./chevron-left-CzHBIiOm.js";import"./createLucideIcon-BRUIOxYu.js";import"./chevron-right-Cs4mL8WS.js";const M={title:"M2/Pagination",component:c,parameters:{layout:"centered",docs:{description:{component:"\n### 페이지네이션 컴포넌트\n\nPagination 컴포넌트는 페이지 목록과 이전/다음 이동 버튼을 표시합니다.\n`Pagination`, `PaginationItem`, `PaginationPrevious`, `PaginationNext` 구조를 React로 구현했습니다.\n        "}}},tags:["autodocs"]},e={render:()=>{const[n,i]=m.useState(1),o=[1,2,3,4,5];return t.jsxs(c,{children:[t.jsx(p,{disabled:n===1,onClick:()=>i(a=>Math.max(a-1,1))}),o.map(a=>t.jsx(P,{isCurrent:n===a,onClick:()=>i(a),children:a},a)),t.jsx(d,{disabled:n===o.length,onClick:()=>i(a=>Math.min(a+1,o.length))})]})}};var r,s,g;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pages = [1, 2, 3, 4, 5];
    return <Pagination>
        <PaginationPrevious disabled={page === 1} onClick={() => setPage(current => Math.max(current - 1, 1))} />
        {pages.map(item => <PaginationItem key={item} isCurrent={page === item} onClick={() => setPage(item)}>
            {item}
          </PaginationItem>)}
        <PaginationNext disabled={page === pages.length} onClick={() => setPage(current => Math.min(current + 1, pages.length))} />
      </Pagination>;
  }
}`,...(g=(s=e.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};const f=["Basic"];export{e as Basic,f as __namedExportsOrder,M as default};
