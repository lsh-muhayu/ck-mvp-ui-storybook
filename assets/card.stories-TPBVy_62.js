import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as c}from"./button-CkQv11My.js";import{c as M}from"./index-C2vczdB5.js";import{c as o}from"./utils-CDN07tui.js";import"./index-OJ7QbjDu.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";const R=M("rounded-m2-lg text-m2-secondary flex flex-col gap-6 border py-6",{variants:{variant:{outlined:"shadow-m2-card border-m2-border bg-white",elevated:"shadow-m2-lg border-m2-border bg-white"},interactive:{true:"cursor-pointer transition duration-[140ms]",false:""},selected:{true:"border-m2-primary bg-m2-primary-tint",false:""}},compoundVariants:[{interactive:!0,selected:!1,class:"hover:border-m2-primary-light hover:shadow-m2-pop hover:-translate-y-px"},{interactive:!0,selected:!0,class:"hover:shadow-m2-pop hover:-translate-y-px"}],defaultVariants:{variant:"outlined",interactive:!1,selected:!1}});function t({className:r,variant:a,interactive:z,selected:O,...W}){return e.jsx("div",{"data-slot":"card",className:o(R({variant:a,interactive:z,selected:O}),r),...W})}function d({className:r,...a}){return e.jsx("div",{"data-slot":"card-header",className:o("grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r),...a})}function s({className:r,...a}){return e.jsx("div",{"data-slot":"card-title",className:o("text-m2-gray-1 leading-none font-semibold",r),...a})}function n({className:r,...a}){return e.jsx("div",{"data-slot":"card-description",className:o("text-m2-secondary text-sm",r),...a})}function h({className:r,...a}){return e.jsx("div",{"data-slot":"card-action",className:o("col-start-2 row-span-2 row-start-1 self-start justify-self-end",r),...a})}function i({className:r,...a}){return e.jsx("div",{"data-slot":"card-content",className:o("px-6",r),...a})}function v({className:r,...a}){return e.jsx("div",{"data-slot":"card-footer",className:o("flex items-center px-6 [.border-t]:pt-6",r),...a})}t.__docgenInfo={description:"",methods:[],displayName:"Card"};d.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};s.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};n.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};h.__docgenInfo={description:"",methods:[],displayName:"CardAction"};i.__docgenInfo={description:"",methods:[],displayName:"CardContent"};v.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};const U={title:"M2/Card",component:t,parameters:{layout:"centered",docs:{description:{component:`
### 콘텐츠를 묶어 보여주는 카드 컴포넌트

shadcn/ui 스타일의 조합형(compound) 카드입니다. \`Card\` 루트 아래
\`CardHeader\`, \`CardTitle\`, \`CardDescription\`, \`CardAction\`,
\`CardContent\`, \`CardFooter\` 를 자유롭게 조합합니다.

## 주요 기능

- **조합형 구조**: 필요한 서브 컴포넌트만 골라 사용
- **두 가지 variant**: \`outlined\`(테두리, 기본), \`elevated\`(그림자)
- **interactive**: hover 시 그림자가 강조되는 클릭 가능한 카드
- **selected**: 선택된 카드를 tint 배경 + primary 테두리로 표시 (hover 색 변화 없음)

## 사용 예시

\`\`\`tsx
<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
  </CardHeader>
  <CardContent>본문</CardContent>
  <CardFooter>푸터</CardFooter>
</Card>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","elevated"],description:"카드 스타일. `outlined`는 테두리, `elevated`는 그림자(shadow-m2-card)를 사용합니다.",table:{type:{summary:"'outlined' | 'elevated'"},defaultValue:{summary:"'outlined'"},category:"스타일"}},interactive:{control:"boolean",description:"true이면 hover 시 그림자가 강조되고 커서가 pointer가 됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"스타일"}},selected:{control:"boolean",description:"true이면 tint 배경 + primary 테두리로 고정됩니다. hover 색 변화는 없고, `interactive`와 함께 쓰면 hover 시 떠오르는 움직임만 유지됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"스타일"}}}},l={render:r=>e.jsxs(t,{...r,className:"w-80",children:[e.jsxs(d,{children:[e.jsx(s,{children:"프로젝트 생성"}),e.jsx(n,{children:"새 프로젝트를 시작합니다."})]}),e.jsx(i,{children:"여기에 본문 내용이 들어갑니다."}),e.jsxs(v,{className:"justify-end gap-2",children:[e.jsx(c,{variant:"outlined",color:"secondary",children:"취소"}),e.jsx(c,{children:"생성"})]})]})},C={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(t,{variant:"outlined",className:"w-72",children:[e.jsxs(d,{children:[e.jsx(s,{children:"Outlined"}),e.jsx(n,{children:"테두리만 있는 기본 스타일"})]}),e.jsx(i,{children:"border-m2-border + bg-white"})]}),e.jsxs(t,{variant:"elevated",className:"w-72",children:[e.jsxs(d,{children:[e.jsx(s,{children:"Elevated"}),e.jsx(n,{children:"그림자가 있는 스타일"})]}),e.jsx(i,{children:"shadow-m2-card"})]})]})},m={render:()=>e.jsxs(t,{interactive:!0,variant:"elevated",className:"w-80",children:[e.jsxs(d,{children:[e.jsx(s,{children:"클릭 가능한 카드"}),e.jsx(n,{children:"마우스를 올리면 그림자가 강조됩니다."})]}),e.jsx(i,{children:"hover 시 살짝 떠오르며 그림자가 강조됩니다."})]})},p={render:()=>e.jsxs(t,{className:"w-80",children:[e.jsxs(d,{children:[e.jsx(s,{children:"알림 설정"}),e.jsx(n,{children:"이메일 알림을 관리합니다."}),e.jsx(h,{children:e.jsx(c,{variant:"outlined",color:"secondary",size:"sm",children:"편집"})})]}),e.jsx(i,{children:"헤더 우측에 액션 버튼이 배치됩니다."})]})},x={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[e.jsxs(t,{variant:"elevated",children:[e.jsxs(d,{children:[e.jsx(n,{children:"총 매출"}),e.jsx(s,{className:"text-2xl",children:"₩12,400,000"})]}),e.jsx(i,{className:"text-m2-secondary text-sm",children:"전월 대비 +12%"})]}),e.jsxs(t,{children:[e.jsxs(d,{children:[e.jsx(s,{children:"로그인"}),e.jsx(n,{children:"계정에 접속하세요."})]}),e.jsx(i,{className:"text-m2-secondary text-sm",children:"폼 영역 자리"}),e.jsx(v,{className:"justify-end",children:e.jsx(c,{children:"로그인"})})]}),e.jsxs(t,{interactive:!0,variant:"elevated",children:[e.jsxs(d,{children:[e.jsx(s,{children:"문서 보기"}),e.jsx(n,{children:"클릭하여 자세히 보기"}),e.jsx(h,{children:e.jsx(c,{variant:"outlined",color:"secondary",size:"sm",children:"열기"})})]}),e.jsx(i,{className:"text-m2-secondary text-sm",children:"리스트/미디어 카드 예시"})]})]})},u={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(t,{interactive:!0,className:"w-72",children:[e.jsxs(d,{children:[e.jsx(s,{children:"미선택"}),e.jsx(n,{children:"hover 시 테두리 색 + 떠오름"})]}),e.jsx(i,{children:"마우스를 올리면 강조됩니다."})]}),e.jsxs(t,{interactive:!0,selected:!0,className:"w-72",children:[e.jsxs(d,{children:[e.jsx(s,{children:"선택됨 (interactive)"}),e.jsx(n,{children:"색 고정, hover 시 움직임만"})]}),e.jsx(i,{children:"tint 배경 + primary 테두리. hover해도 색은 그대로."})]}),e.jsxs(t,{selected:!0,className:"w-72",children:[e.jsxs(d,{children:[e.jsx(s,{children:"선택됨 (정적)"}),e.jsx(n,{children:"클릭 불가, 선택 표시만"})]}),e.jsx(i,{children:"interactive 없이 selected만 적용된 카드."})]})]})};var j,y,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>프로젝트 생성</CardTitle>
        <CardDescription>새 프로젝트를 시작합니다.</CardDescription>
      </CardHeader>
      <CardContent>여기에 본문 내용이 들어갑니다.</CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outlined" color="secondary">
          취소
        </Button>
        <Button>생성</Button>
      </CardFooter>
    </Card>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,N,w;C.parameters={...C.parameters,docs:{...(g=C.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="flex flex-wrap gap-4">
      <Card variant="outlined" className="w-72">
        <CardHeader>
          <CardTitle>Outlined</CardTitle>
          <CardDescription>테두리만 있는 기본 스타일</CardDescription>
        </CardHeader>
        <CardContent>border-m2-border + bg-white</CardContent>
      </Card>
      <Card variant="elevated" className="w-72">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
          <CardDescription>그림자가 있는 스타일</CardDescription>
        </CardHeader>
        <CardContent>shadow-m2-card</CardContent>
      </Card>
    </div>
}`,...(w=(N=C.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var D,b,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Card interactive variant="elevated" className="w-80">
      <CardHeader>
        <CardTitle>클릭 가능한 카드</CardTitle>
        <CardDescription>마우스를 올리면 그림자가 강조됩니다.</CardDescription>
      </CardHeader>
      <CardContent>hover 시 살짝 떠오르며 그림자가 강조됩니다.</CardContent>
    </Card>
}`,...(T=(b=m.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var H,_,B;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <CardTitle>알림 설정</CardTitle>
        <CardDescription>이메일 알림을 관리합니다.</CardDescription>
        <CardAction>
          <Button variant="outlined" color="secondary" size="sm">
            편집
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>헤더 우측에 액션 버튼이 배치됩니다.</CardContent>
    </Card>
}`,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var A,F,I;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card variant="elevated">
        <CardHeader>
          <CardDescription>총 매출</CardDescription>
          <CardTitle className="text-2xl">₩12,400,000</CardTitle>
        </CardHeader>
        <CardContent className="text-m2-secondary text-sm">전월 대비 +12%</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>로그인</CardTitle>
          <CardDescription>계정에 접속하세요.</CardDescription>
        </CardHeader>
        <CardContent className="text-m2-secondary text-sm">폼 영역 자리</CardContent>
        <CardFooter className="justify-end">
          <Button>로그인</Button>
        </CardFooter>
      </Card>
      <Card interactive variant="elevated">
        <CardHeader>
          <CardTitle>문서 보기</CardTitle>
          <CardDescription>클릭하여 자세히 보기</CardDescription>
          <CardAction>
            <Button variant="outlined" color="secondary" size="sm">
              열기
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="text-m2-secondary text-sm">리스트/미디어 카드 예시</CardContent>
      </Card>
    </div>
}`,...(I=(F=x.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var S,V,E;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="flex flex-wrap gap-4">
      <Card interactive className="w-72">
        <CardHeader>
          <CardTitle>미선택</CardTitle>
          <CardDescription>hover 시 테두리 색 + 떠오름</CardDescription>
        </CardHeader>
        <CardContent>마우스를 올리면 강조됩니다.</CardContent>
      </Card>
      <Card interactive selected className="w-72">
        <CardHeader>
          <CardTitle>선택됨 (interactive)</CardTitle>
          <CardDescription>색 고정, hover 시 움직임만</CardDescription>
        </CardHeader>
        <CardContent>tint 배경 + primary 테두리. hover해도 색은 그대로.</CardContent>
      </Card>
      <Card selected className="w-72">
        <CardHeader>
          <CardTitle>선택됨 (정적)</CardTitle>
          <CardDescription>클릭 불가, 선택 표시만</CardDescription>
        </CardHeader>
        <CardContent>interactive 없이 selected만 적용된 카드.</CardContent>
      </Card>
    </div>
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const X=["Default","Variants","Interactive","WithAction","Examples","Selected"];export{l as Default,x as Examples,m as Interactive,u as Selected,C as Variants,p as WithAction,X as __namedExportsOrder,U as default};
