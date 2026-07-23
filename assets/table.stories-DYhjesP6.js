import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r,a as d,b as s,c as a,d as o,e as l,f as E,g as M}from"./table-Dt-dZH4I.js";import"./utils-CDN07tui.js";const P={title:"M2/Table",component:r,parameters:{layout:"padded",docs:{description:{component:"\n### 구조화된 데이터를 행과 열로 표시하는 정적 테이블 컴포넌트\n\n`feedback/task-list.html`의 `.ck-table` 스타일을 그대로 따른 컴파운드 테이블입니다.\n`<table>` 시맨틱 마크업을 그대로 사용하며, 별도 라이브러리 의존성이 없습니다.\n\n> **M2 포팅 노트**: 원본(hycu)은 루트를 `ScrollArea`로 감쌌으나, M2 포팅에서는\n> **ScrollArea 의존성과 함께 overflow 스크롤 컨테이너·sticky 헤더를 모두 제거**했습니다.\n> 순수한 정적 테이블 UI만 제공하며, 스크롤이 필요한 경우 호출 측에서 래퍼를 감싸 처리합니다.\n> (루트의 `overflow-hidden`은 둥근 모서리 클리핑 용도이며 스크롤 동작이 아닙니다.)\n\n## 스타일 사양 (ck-table 기준)\n\n- **프레임**: `rounded-xl` + `m2-border` 1px 테두리, 흰색 배경\n- **헤더(th)**: `m2-surface` 배경, 12px·bold·좌측 정렬, 하단 `m2-border` 구분선\n- **셀(td)**: 16px×14px 패딩, 좌측 정렬, 행마다 하단 구분선(마지막 행 제외)\n- **행 호버**: `m2-primary-tint` 배경으로 전환 (0.1s)\n\n## 주요 기능\n\n- **컴파운드 구조**: `Table`, `Table.Header`, `Table.Body`, `Table.Footer`, `Table.Row`, `Table.Head`, `Table.Cell`, `Table.CenterRow` (named export도 동일 제공)\n- **행 상태**: `Table.Row`의 `selected`·`disabled`·`loading` prop\n- **빈 상태/로딩**: `Table.CenterRow`로 본문 가운데에 메시지 배치\n- **커스터마이징**: `className`으로 각 부분 스타일 오버라이드\n\n## Props\n\n### Table.Row (`<tr>`)\n| Prop | 타입 | 설명 |\n|------|------|------|\n| selected | `boolean` | 선택 상태 (배경 `m2-surface-hover`) |\n| disabled | `boolean` | 비활성 상태 (opacity 50%) |\n| loading | `boolean` | 로딩 상태 (pointer-events 차단 + pulse) |\n| className | `string` | 추가 클래스 |\n\n### Table / Header / Body / Footer / Head / Cell / CenterRow\n모두 `className` 및 해당 HTML 요소의 표준 속성을 전달받습니다. `Table.CenterRow`는 추가로 `colSpan`을 받습니다.\n\n## 사용 예시\n\n```tsx\nimport { Table } from '@muhayu/axp-ui';\n\n<Table>\n  <Table.Header>\n    <Table.Row>\n      <Table.Head>이름</Table.Head>\n      <Table.Head>이메일</Table.Head>\n      <Table.Head>역할</Table.Head>\n    </Table.Row>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell>홍길동</Table.Cell>\n      <Table.Cell>hong@example.com</Table.Cell>\n      <Table.Cell>관리자</Table.Cell>\n    </Table.Row>\n  </Table.Body>\n</Table>\n```\n        "}}},tags:["autodocs"]},A=[{id:1,name:"홍길동",email:"hong@example.com",role:"관리자",status:"활성"},{id:2,name:"김철수",email:"kim@example.com",role:"사용자",status:"활성"},{id:3,name:"이영희",email:"lee@example.com",role:"사용자",status:"비활성"},{id:4,name:"박민수",email:"park@example.com",role:"관리자",status:"활성"},{id:5,name:"정수진",email:"jung@example.com",role:"사용자",status:"활성"}],t={render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"text-m2-secondary mb-4 text-sm font-semibold",children:"기본 테이블"}),e.jsxs(r,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{children:"이름"}),e.jsx(a,{children:"이메일"}),e.jsx(a,{children:"역할"}),e.jsx(a,{children:"상태"})]})}),e.jsx(o,{children:A.map(n=>e.jsxs(s,{children:[e.jsx(l,{className:"text-m2-gray-1 font-bold",children:n.name}),e.jsx(l,{children:n.email}),e.jsx(l,{children:n.role}),e.jsx(l,{children:n.status})]},n.id))})]})]})},b={render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"text-m2-secondary mb-4 text-sm font-semibold",children:"Footer가 있는 테이블"}),e.jsxs(r,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{children:"항목"}),e.jsx(a,{children:"수량"}),e.jsx(a,{children:"단가"}),e.jsx(a,{children:"합계"})]})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(l,{children:"상품 A"}),e.jsx(l,{children:"10"}),e.jsx(l,{children:"1,000원"}),e.jsx(l,{children:"10,000원"})]}),e.jsxs(s,{children:[e.jsx(l,{children:"상품 B"}),e.jsx(l,{children:"5"}),e.jsx(l,{children:"2,000원"}),e.jsx(l,{children:"10,000원"})]}),e.jsxs(s,{children:[e.jsx(l,{children:"상품 C"}),e.jsx(l,{children:"3"}),e.jsx(l,{children:"3,000원"}),e.jsx(l,{children:"9,000원"})]})]}),e.jsx(E,{children:e.jsxs(s,{children:[e.jsx(l,{colSpan:3,className:"text-m2-gray-1 font-semibold",children:"총합계"}),e.jsx(l,{className:"text-m2-gray-1 font-semibold",children:"29,000원"})]})})]})]})},c={parameters:{docs:{description:{story:"`Table.Row`의 `selected`·`disabled`·`loading` prop으로 행 상태를 표현합니다. M2 포팅에서 추가된 기능입니다."}}},render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"text-m2-secondary mb-4 text-sm font-semibold",children:"행 상태 (선택·비활성·로딩)"}),e.jsxs(r,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{children:"이름"}),e.jsx(a,{children:"이메일"}),e.jsx(a,{children:"역할"}),e.jsx(a,{children:"상태"})]})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(l,{children:"홍길동"}),e.jsx(l,{children:"hong@example.com"}),e.jsx(l,{children:"관리자"}),e.jsx(l,{children:"기본"})]}),e.jsxs(s,{selected:!0,children:[e.jsx(l,{children:"김철수"}),e.jsx(l,{children:"kim@example.com"}),e.jsx(l,{children:"사용자"}),e.jsx(l,{children:"선택됨 (selected)"})]}),e.jsxs(s,{disabled:!0,children:[e.jsx(l,{children:"이영희"}),e.jsx(l,{children:"lee@example.com"}),e.jsx(l,{children:"사용자"}),e.jsx(l,{children:"비활성 (disabled)"})]}),e.jsxs(s,{loading:!0,children:[e.jsx(l,{children:"박민수"}),e.jsx(l,{children:"park@example.com"}),e.jsx(l,{children:"관리자"}),e.jsx(l,{children:"로딩 중 (loading)"})]})]})]})]})},m={parameters:{docs:{description:{story:"`Table.CenterRow`로 본문 가운데에 빈 상태 메시지를 표시합니다."}}},render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"text-m2-secondary mb-4 text-sm font-semibold",children:"빈 상태 테이블"}),e.jsxs(r,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{children:"이름"}),e.jsx(a,{children:"이메일"}),e.jsx(a,{children:"역할"}),e.jsx(a,{children:"상태"})]})}),e.jsx(o,{children:e.jsx(M,{colSpan:4,children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("p",{className:"text-m2-gray-2 text-sm",children:"데이터가 없습니다"}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:"새로운 데이터를 추가해보세요"})]})})})]})]})},i={parameters:{docs:{description:{story:"`Table.CenterRow`에 스피너를 배치하여 로딩 상태 피드백을 표시합니다."}}},render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"text-m2-secondary mb-4 text-sm font-semibold",children:"로딩 상태 테이블"}),e.jsxs(r,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{children:"이름"}),e.jsx(a,{children:"이메일"}),e.jsx(a,{children:"역할"}),e.jsx(a,{children:"상태"})]})}),e.jsx(o,{children:e.jsx(M,{colSpan:4,children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("div",{className:"border-m2-gray-3 border-t-m2-primary size-4 animate-spin rounded-full border-2"}),e.jsx("p",{className:"text-m2-gray-2 text-sm",children:"로딩 중..."})]})})})]})]})},T={parameters:{docs:{description:{story:"각 부분에 `className`을 전달하여 너비·정렬·셀 내부 요소를 커스터마이징합니다."}}},render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"text-m2-secondary mb-4 text-sm font-semibold",children:"커스텀 스타일 테이블"}),e.jsxs(r,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{className:"w-1/4",children:"이름"}),e.jsx(a,{className:"w-1/2",children:"이메일"}),e.jsx(a,{className:"w-1/4",children:"역할"})]})}),e.jsx(o,{children:A.map(n=>e.jsxs(s,{children:[e.jsx(l,{className:"text-m2-gray-1 font-bold",children:n.name}),e.jsx(l,{children:n.email}),e.jsx(l,{children:e.jsx("span",{className:n.role==="관리자"?"bg-m2-primary-tint text-m2-primary inline-flex rounded-full px-2 py-1 text-xs font-medium":"bg-m2-surface-hover text-m2-secondary-dark inline-flex rounded-full px-2 py-1 text-xs font-medium",children:n.role})})]},n.id))})]})]})};var x,h,p;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <h3 className="text-m2-secondary mb-4 text-sm font-semibold">기본 테이블</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUsers.map(user => <TableRow key={user.id}>
              <TableCell className="text-m2-gray-1 font-bold">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var j,C,w;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <h3 className="text-m2-secondary mb-4 text-sm font-semibold">Footer가 있는 테이블</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>항목</TableHead>
            <TableHead>수량</TableHead>
            <TableHead>단가</TableHead>
            <TableHead>합계</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>상품 A</TableCell>
            <TableCell>10</TableCell>
            <TableCell>1,000원</TableCell>
            <TableCell>10,000원</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>상품 B</TableCell>
            <TableCell>5</TableCell>
            <TableCell>2,000원</TableCell>
            <TableCell>10,000원</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>상품 C</TableCell>
            <TableCell>3</TableCell>
            <TableCell>3,000원</TableCell>
            <TableCell>9,000원</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="text-m2-gray-1 font-semibold">
              총합계
            </TableCell>
            <TableCell className="text-m2-gray-1 font-semibold">29,000원</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
}`,...(w=(C=b.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var u,y,H;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`Table.Row\`의 \`selected\`·\`disabled\`·\`loading\` prop으로 행 상태를 표현합니다. M2 포팅에서 추가된 기능입니다.'
      }
    }
  },
  render: () => <div className="w-full max-w-4xl">
      <h3 className="text-m2-secondary mb-4 text-sm font-semibold">행 상태 (선택·비활성·로딩)</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>홍길동</TableCell>
            <TableCell>hong@example.com</TableCell>
            <TableCell>관리자</TableCell>
            <TableCell>기본</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell>김철수</TableCell>
            <TableCell>kim@example.com</TableCell>
            <TableCell>사용자</TableCell>
            <TableCell>선택됨 (selected)</TableCell>
          </TableRow>
          <TableRow disabled>
            <TableCell>이영희</TableCell>
            <TableCell>lee@example.com</TableCell>
            <TableCell>사용자</TableCell>
            <TableCell>비활성 (disabled)</TableCell>
          </TableRow>
          <TableRow loading>
            <TableCell>박민수</TableCell>
            <TableCell>park@example.com</TableCell>
            <TableCell>관리자</TableCell>
            <TableCell>로딩 중 (loading)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
}`,...(H=(y=c.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var f,R,N;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`Table.CenterRow\`로 본문 가운데에 빈 상태 메시지를 표시합니다.'
      }
    }
  },
  render: () => <div className="w-full max-w-4xl">
      <h3 className="text-m2-secondary mb-4 text-sm font-semibold">빈 상태 테이블</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCenterRow colSpan={4}>
            <div className="flex flex-col items-center gap-2">
              <p className="text-m2-gray-2 text-sm">데이터가 없습니다</p>
              <p className="text-m2-gray-2 text-xs">새로운 데이터를 추가해보세요</p>
            </div>
          </TableCenterRow>
        </TableBody>
      </Table>
    </div>
}`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var g,v,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`Table.CenterRow\`에 스피너를 배치하여 로딩 상태 피드백을 표시합니다.'
      }
    }
  },
  render: () => <div className="w-full max-w-4xl">
      <h3 className="text-m2-secondary mb-4 text-sm font-semibold">로딩 상태 테이블</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCenterRow colSpan={4}>
            <div className="flex items-center justify-center gap-2">
              <div className="border-m2-gray-3 border-t-m2-primary size-4 animate-spin rounded-full border-2" />
              <p className="text-m2-gray-2 text-sm">로딩 중...</p>
            </div>
          </TableCenterRow>
        </TableBody>
      </Table>
    </div>
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var B,k,F;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '각 부분에 \`className\`을 전달하여 너비·정렬·셀 내부 요소를 커스터마이징합니다.'
      }
    }
  },
  render: () => <div className="w-full max-w-4xl">
      <h3 className="text-m2-secondary mb-4 text-sm font-semibold">커스텀 스타일 테이블</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">이름</TableHead>
            <TableHead className="w-1/2">이메일</TableHead>
            <TableHead className="w-1/4">역할</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUsers.map(user => <TableRow key={user.id}>
              <TableCell className="text-m2-gray-1 font-bold">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <span className={user.role === '관리자' ? 'bg-m2-primary-tint text-m2-primary inline-flex rounded-full px-2 py-1 text-xs font-medium' : 'bg-m2-surface-hover text-m2-secondary-dark inline-flex rounded-full px-2 py-1 text-xs font-medium'}>
                  {user.role}
                </span>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...(F=(k=T.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const W=["Basic","WithFooter","RowStates","EmptyState","LoadingState","CustomStyles"];export{t as Basic,T as CustomStyles,m as EmptyState,i as LoadingState,c as RowStates,b as WithFooter,W as __namedExportsOrder,P as default};
