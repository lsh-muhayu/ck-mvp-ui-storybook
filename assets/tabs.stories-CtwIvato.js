import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as C}from"./index-C2vczdB5.js";import{c as k}from"./utils-CDN07tui.js";import{r as g}from"./index-OJ7QbjDu.js";import{P as V,b as I}from"./index-C27WGPQh.js";import{c as ie}from"./index-jm-SPu3n.js";import{c as Z,R as ce,I as be}from"./index-DMBPP7gA.js";import{P as xe}from"./index-CI4jWBLT.js";import{u as ue}from"./index-ehd_yKDV.js";import{u as pe}from"./index-BilTj9-P.js";import{u as ge}from"./index-D15pND6U.js";import{U as L}from"./user-DKwQRr9F.js";import{S as z}from"./settings-BWfxB16v.js";import{B as R}from"./bell-DDz_Obdd.js";import{F as P}from"./file-text-0ueewTr5.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-DVoPeAEP.js";import"./index-Dc1_MvIw.js";import"./createLucideIcon-BRUIOxYu.js";var _="Tabs",[he]=ie(_,[Z]),ee=Z(),[Te,S]=he(_),se=g.forwardRef((t,r)=>{const{__scopeTabs:i,value:n,onValueChange:d,defaultValue:c,orientation:l="horizontal",dir:b,activationMode:h="automatic",...T}=t,m=ue(b),[o,p]=pe({prop:n,onChange:d,defaultProp:c??"",caller:_});return e.jsx(Te,{scope:i,baseId:ge(),value:o,onValueChange:p,orientation:l,dir:m,activationMode:h,children:e.jsx(V.div,{dir:m,"data-orientation":l,...T,ref:r})})});se.displayName=_;var ae="TabsList",te=g.forwardRef((t,r)=>{const{__scopeTabs:i,loop:n=!0,...d}=t,c=S(ae,i),l=ee(i);return e.jsx(ce,{asChild:!0,...l,orientation:c.orientation,dir:c.dir,loop:n,children:e.jsx(V.div,{role:"tablist","aria-orientation":c.orientation,...d,ref:r})})});te.displayName=ae;var re="TabsTrigger",ne=g.forwardRef((t,r)=>{const{__scopeTabs:i,value:n,disabled:d=!1,...c}=t,l=S(re,i),b=ee(i),h=de(l.baseId,n),T=me(l.baseId,n),m=n===l.value;return e.jsx(be,{asChild:!0,...b,focusable:!d,active:m,children:e.jsx(V.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":T,"data-state":m?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:h,...c,ref:r,onMouseDown:I(t.onMouseDown,o=>{!d&&o.button===0&&o.ctrlKey===!1?l.onValueChange(n):o.preventDefault()}),onKeyDown:I(t.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&l.onValueChange(n)}),onFocus:I(t.onFocus,()=>{const o=l.activationMode!=="manual";!m&&!d&&o&&l.onValueChange(n)})})})});ne.displayName=re;var le="TabsContent",oe=g.forwardRef((t,r)=>{const{__scopeTabs:i,value:n,forceMount:d,children:c,...l}=t,b=S(le,i),h=de(b.baseId,n),T=me(b.baseId,n),m=n===b.value,o=g.useRef(m);return g.useEffect(()=>{const p=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(p)},[]),e.jsx(xe,{present:d||m,children:({present:p})=>e.jsx(V.div,{"data-state":m?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":h,hidden:!p,id:T,tabIndex:0,...l,ref:r,style:{...t.style,animationDuration:o.current?"0s":void 0},children:p&&c})})});oe.displayName=le;function de(t,r){return`${t}-trigger-${r}`}function me(t,r){return`${t}-content-${r}`}var ve=se,Ne=te,fe=ne,je=oe;const ye=C("flex flex-col gap-2"),we=C("border-m2-border inline-flex w-fit items-center justify-center border-b-2"),Ce=C(["text-m2-secondary not-disabled:hover:text-m2-primary focus-visible:ring-m2-primary/20 text-sm font-bold whitespace-nowrap focus-visible:ring-2 focus-visible:outline-none","relative -mb-[2px] inline-flex h-full items-center justify-center gap-1.5 px-6 py-3","data-[state=active]:border-m2-primary data-[state=active]:text-m2-primary border-b-2 border-transparent transition-[color,box-shadow,border-color]","cursor-pointer disabled:cursor-not-allowed disabled:opacity-50","[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"]),ke=C("focus-visible:ring-m2-primary/20 flex-1 outline-none focus-visible:ring-2");function x({className:t,...r}){return e.jsx(ve,{"data-slot":"tabs",className:k(ye(),t),...r})}function u({className:t,...r}){return e.jsx(Ne,{"data-slot":"tabs-list",className:k(we(),t),...r})}function s({className:t,...r}){return e.jsx(fe,{"data-slot":"tabs-trigger",className:k(Ce(),t),...r})}function a({className:t,...r}){return e.jsx(je,{"data-slot":"tabs-content",className:k(ke(),t),...r})}x.__docgenInfo={description:"",methods:[],displayName:"Tabs"};u.__docgenInfo={description:"",methods:[],displayName:"TabsList"};s.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};a.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const We={title:"M2/Tabs",component:x,parameters:{layout:"centered",docs:{description:{component:`
### 콘텐츠를 탭으로 구분하는 컴포넌트

Tabs 컴포넌트는 여러 콘텐츠 영역을 탭으로 구분하여 표시하는 데 사용됩니다.
사용자가 탭을 클릭하면 해당 콘텐츠가 표시됩니다.

## 주요 기능

- **접근성 지원**: ARIA 속성을 통한 스크린 리더 지원
- **키보드 네비게이션**: 화살표 키로 탭 간 이동 가능
- **상태 관리**: 선택된 탭의 상태를 자동으로 관리
- **유연한 구조**: 탭 목록과 콘텐츠 영역을 조합하여 다양한 콘텐츠 구조에 적용 가능
- **커스터마이징**: 스타일 및 구조를 자유롭게 커스터마이징 가능

## 구성 요소

- **Tabs**: 탭 컴포넌트의 루트 컨테이너
- **TabsList**: 탭 트리거들을 감싸는 컨테이너
- **TabsTrigger**: 각각의 탭 버튼
- **TabsContent**: 탭에 해당하는 콘텐츠 영역

## 사용 예시

\`\`\`tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2">탭 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">탭 1의 콘텐츠</TabsContent>
  <TabsContent value="tab2">탭 2의 콘텐츠</TabsContent>
</Tabs>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{defaultValue:{control:"text",description:"기본으로 선택될 탭의 value",table:{type:{summary:"string"}}}}},v={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tabs 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 defaultValue 등의 속성을 변경해보세요.

## 사용 팁

- **DefaultValue**: 페이지 로드 시 기본으로 선택될 탭을 지정합니다.
        `}}},args:{defaultValue:"account"},render:t=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(x,{...t,children:[e.jsxs(u,{children:[e.jsx(s,{value:"account",children:"계정"}),e.jsx(s,{value:"password",children:"비밀번호"}),e.jsx(s,{value:"notifications",children:"알림"})]}),e.jsxs(a,{value:"account",className:"p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"계정 설정"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"여기에서 계정 정보를 관리할 수 있습니다."})]}),e.jsxs(a,{value:"password",className:"p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"비밀번호 변경"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"비밀번호를 안전하게 변경하세요."})]}),e.jsxs(a,{value:"notifications",className:"p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"알림 설정"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"알림 수신 방법을 설정할 수 있습니다."})]})]})})},N={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(x,{defaultValue:"tab1",children:[e.jsxs(u,{children:[e.jsx(s,{value:"tab1",children:"탭 1"}),e.jsx(s,{value:"tab2",children:"탭 2"}),e.jsx(s,{value:"tab3",children:"탭 3"})]}),e.jsxs(a,{value:"tab1",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"첫 번째 탭"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"첫 번째 탭의 콘텐츠입니다. 여기에 원하는 내용을 추가할 수 있습니다."})]}),e.jsxs(a,{value:"tab2",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"두 번째 탭"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"두 번째 탭의 콘텐츠입니다. 각 탭은 독립적인 콘텐츠를 가질 수 있습니다."})]}),e.jsxs(a,{value:"tab3",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"세 번째 탭"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"세 번째 탭의 콘텐츠입니다. 탭의 개수는 자유롭게 조절할 수 있습니다."})]})]})})},f={render:()=>e.jsx("div",{className:"w-[600px]",children:e.jsxs(x,{defaultValue:"profile",children:[e.jsxs(u,{children:[e.jsxs(s,{value:"profile",children:[e.jsx(L,{className:"size-4"}),"프로필"]}),e.jsxs(s,{value:"settings",children:[e.jsx(z,{className:"size-4"}),"설정"]}),e.jsxs(s,{value:"notifications",children:[e.jsx(R,{className:"size-4"}),"알림"]}),e.jsxs(s,{value:"documents",children:[e.jsx(P,{className:"size-4"}),"문서"]})]}),e.jsxs(a,{value:"profile",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsxs("h3",{className:"mb-2 flex items-center gap-2 text-lg font-semibold",children:[e.jsx(L,{className:"size-5"}),"프로필 정보"]}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"사용자 프로필 정보를 확인하고 수정할 수 있습니다."})]}),e.jsxs(a,{value:"settings",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsxs("h3",{className:"mb-2 flex items-center gap-2 text-lg font-semibold",children:[e.jsx(z,{className:"size-5"}),"설정"]}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"애플리케이션의 다양한 설정을 변경할 수 있습니다."})]}),e.jsxs(a,{value:"notifications",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsxs("h3",{className:"mb-2 flex items-center gap-2 text-lg font-semibold",children:[e.jsx(R,{className:"size-5"}),"알림 센터"]}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"최근 알림을 확인하고 알림 설정을 관리할 수 있습니다."})]}),e.jsxs(a,{value:"documents",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsxs("h3",{className:"mb-2 flex items-center gap-2 text-lg font-semibold",children:[e.jsx(P,{className:"size-5"}),"문서 관리"]}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"업로드된 문서를 확인하고 관리할 수 있습니다."})]})]})})},j={render:()=>e.jsx("div",{className:"w-[600px]",children:e.jsxs(x,{defaultValue:"overview",children:[e.jsxs(u,{children:[e.jsx(s,{value:"overview",children:"개요"}),e.jsx(s,{value:"analytics",children:"분석"}),e.jsx(s,{value:"reports",children:"보고서"}),e.jsx(s,{value:"settings",children:"설정"})]}),e.jsxs(a,{value:"overview",className:"bg-m2-primary-tint mt-2 rounded-lg p-6",children:[e.jsx("h3",{className:"text-m2-primary-dark mb-3 text-xl font-bold",children:"대시보드 개요"}),e.jsx("p",{className:"text-m2-primary mb-4 text-sm",children:"주요 지표와 현황을 한눈에 확인할 수 있습니다."}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"rounded-md bg-white p-3 shadow-sm",children:[e.jsx("div",{className:"text-m2-secondary text-xs",children:"총 사용자"}),e.jsx("div",{className:"text-m2-gray-0 text-2xl font-bold",children:"1,234"})]}),e.jsxs("div",{className:"rounded-md bg-white p-3 shadow-sm",children:[e.jsx("div",{className:"text-m2-secondary text-xs",children:"활성 세션"}),e.jsx("div",{className:"text-m2-gray-0 text-2xl font-bold",children:"856"})]}),e.jsxs("div",{className:"rounded-md bg-white p-3 shadow-sm",children:[e.jsx("div",{className:"text-m2-secondary text-xs",children:"전환율"}),e.jsx("div",{className:"text-m2-gray-0 text-2xl font-bold",children:"4.2%"})]})]})]}),e.jsxs(a,{value:"analytics",className:"bg-m2-success-tint mt-2 rounded-lg p-6",children:[e.jsx("h3",{className:"text-m2-success-dark mb-3 text-xl font-bold",children:"분석 데이터"}),e.jsx("p",{className:"text-m2-success text-sm",children:"상세한 분석 데이터를 확인하고 인사이트를 얻으세요."})]}),e.jsxs(a,{value:"reports",className:"bg-m2-info-tint mt-2 rounded-lg p-6",children:[e.jsx("h3",{className:"text-m2-deep-blue-2 mb-3 text-xl font-bold",children:"보고서"}),e.jsx("p",{className:"text-m2-deep-blue-1 text-sm",children:"다양한 형태의 보고서를 생성하고 다운로드할 수 있습니다."})]}),e.jsxs(a,{value:"settings",className:"bg-m2-surface mt-2 rounded-lg p-6",children:[e.jsx("h3",{className:"text-m2-gray-0 mb-3 text-xl font-bold",children:"설정"}),e.jsx("p",{className:"text-m2-gray-1 text-sm",children:"대시보드의 다양한 옵션을 설정할 수 있습니다."})]})]})})},y={render:()=>e.jsx("div",{className:"w-[700px]",children:e.jsxs(x,{defaultValue:"week1",children:[e.jsxs(u,{children:[e.jsx(s,{value:"week1",children:"1주차"}),e.jsx(s,{value:"week2",children:"2주차"}),e.jsx(s,{value:"week3",children:"3주차"}),e.jsx(s,{value:"week4",children:"4주차"}),e.jsx(s,{value:"week5",children:"5주차"}),e.jsx(s,{value:"week6",children:"6주차"}),e.jsx(s,{value:"week7",children:"7주차"}),e.jsx(s,{value:"week8",children:"8주차"})]}),e.jsxs(a,{value:"week1",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"1주차 학습 내용"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"React 기초: 컴포넌트와 Props"})]}),e.jsxs(a,{value:"week2",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"2주차 학습 내용"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"State와 생명주기"})]}),e.jsxs(a,{value:"week3",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"3주차 학습 내용"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"이벤트 처리"})]}),e.jsxs(a,{value:"week4",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"4주차 학습 내용"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"조건부 렌더링"})]}),e.jsxs(a,{value:"week5",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"5주차 학습 내용"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"리스트와 Key"})]}),e.jsxs(a,{value:"week6",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"6주차 학습 내용"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"폼 다루기"})]}),e.jsxs(a,{value:"week7",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"7주차 학습 내용"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"합성 vs 상속"})]}),e.jsxs(a,{value:"week8",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"8주차 학습 내용"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"Hooks 소개"})]})]})})},w={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(x,{defaultValue:"available1",children:[e.jsxs(u,{children:[e.jsx(s,{value:"available1",children:"사용 가능"}),e.jsx(s,{value:"disabled",disabled:!0,children:"비활성화됨"}),e.jsx(s,{value:"available2",children:"사용 가능"})]}),e.jsxs(a,{value:"available1",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"첫 번째 탭"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"이 탭은 정상적으로 사용 가능합니다."})]}),e.jsxs(a,{value:"disabled",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"비활성화된 탭"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"이 탭은 비활성화되어 있어 접근할 수 없습니다."})]}),e.jsxs(a,{value:"available2",className:"border-m2-border mt-2 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-semibold",children:"세 번째 탭"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"이 탭도 정상적으로 사용 가능합니다."})]})]})})};var A,F,M;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Tabs 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 defaultValue 등의 속성을 변경해보세요.

## 사용 팁

- **DefaultValue**: 페이지 로드 시 기본으로 선택될 탭을 지정합니다.
        \`
      }
    }
  },
  args: {
    defaultValue: 'account'
  },
  render: args => <div className="w-[500px]">
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="account">계정</TabsTrigger>
          <TabsTrigger value="password">비밀번호</TabsTrigger>
          <TabsTrigger value="notifications">알림</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="p-4">
          <h3 className="mb-2 text-lg font-semibold">계정 설정</h3>
          <p className="text-m2-secondary text-sm">여기에서 계정 정보를 관리할 수 있습니다.</p>
        </TabsContent>
        <TabsContent value="password" className="p-4">
          <h3 className="mb-2 text-lg font-semibold">비밀번호 변경</h3>
          <p className="text-m2-secondary text-sm">비밀번호를 안전하게 변경하세요.</p>
        </TabsContent>
        <TabsContent value="notifications" className="p-4">
          <h3 className="mb-2 text-lg font-semibold">알림 설정</h3>
          <p className="text-m2-secondary text-sm">알림 수신 방법을 설정할 수 있습니다.</p>
        </TabsContent>
      </Tabs>
    </div>
}`,...(M=(F=v.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var E,D,B;N.parameters={...N.parameters,docs:{...(E=N.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">탭 1</TabsTrigger>
          <TabsTrigger value="tab2">탭 2</TabsTrigger>
          <TabsTrigger value="tab3">탭 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">첫 번째 탭</h3>
          <p className="text-m2-secondary text-sm">
            첫 번째 탭의 콘텐츠입니다. 여기에 원하는 내용을 추가할 수 있습니다.
          </p>
        </TabsContent>
        <TabsContent value="tab2" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">두 번째 탭</h3>
          <p className="text-m2-secondary text-sm">
            두 번째 탭의 콘텐츠입니다. 각 탭은 독립적인 콘텐츠를 가질 수 있습니다.
          </p>
        </TabsContent>
        <TabsContent value="tab3" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">세 번째 탭</h3>
          <p className="text-m2-secondary text-sm">
            세 번째 탭의 콘텐츠입니다. 탭의 개수는 자유롭게 조절할 수 있습니다.
          </p>
        </TabsContent>
      </Tabs>
    </div>
}`,...(B=(D=N.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var $,G,K;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="w-[600px]">
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="size-4" />
            프로필
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="size-4" />
            설정
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="size-4" />
            알림
          </TabsTrigger>
          <TabsTrigger value="documents">
            <FileText className="size-4" />
            문서
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
            <User className="size-5" />
            프로필 정보
          </h3>
          <p className="text-m2-secondary text-sm">
            사용자 프로필 정보를 확인하고 수정할 수 있습니다.
          </p>
        </TabsContent>
        <TabsContent value="settings" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
            <Settings className="size-5" />
            설정
          </h3>
          <p className="text-m2-secondary text-sm">
            애플리케이션의 다양한 설정을 변경할 수 있습니다.
          </p>
        </TabsContent>
        <TabsContent value="notifications" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
            <Bell className="size-5" />
            알림 센터
          </h3>
          <p className="text-m2-secondary text-sm">
            최근 알림을 확인하고 알림 설정을 관리할 수 있습니다.
          </p>
        </TabsContent>
        <TabsContent value="documents" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
            <FileText className="size-5" />
            문서 관리
          </h3>
          <p className="text-m2-secondary text-sm">업로드된 문서를 확인하고 관리할 수 있습니다.</p>
        </TabsContent>
      </Tabs>
    </div>
}`,...(K=(G=f.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var U,H,O;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="w-[600px]">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="analytics">분석</TabsTrigger>
          <TabsTrigger value="reports">보고서</TabsTrigger>
          <TabsTrigger value="settings">설정</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="bg-m2-primary-tint mt-2 rounded-lg p-6">
          <h3 className="text-m2-primary-dark mb-3 text-xl font-bold">대시보드 개요</h3>
          <p className="text-m2-primary mb-4 text-sm">
            주요 지표와 현황을 한눈에 확인할 수 있습니다.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-md bg-white p-3 shadow-sm">
              <div className="text-m2-secondary text-xs">총 사용자</div>
              <div className="text-m2-gray-0 text-2xl font-bold">1,234</div>
            </div>
            <div className="rounded-md bg-white p-3 shadow-sm">
              <div className="text-m2-secondary text-xs">활성 세션</div>
              <div className="text-m2-gray-0 text-2xl font-bold">856</div>
            </div>
            <div className="rounded-md bg-white p-3 shadow-sm">
              <div className="text-m2-secondary text-xs">전환율</div>
              <div className="text-m2-gray-0 text-2xl font-bold">4.2%</div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="bg-m2-success-tint mt-2 rounded-lg p-6">
          <h3 className="text-m2-success-dark mb-3 text-xl font-bold">분석 데이터</h3>
          <p className="text-m2-success text-sm">
            상세한 분석 데이터를 확인하고 인사이트를 얻으세요.
          </p>
        </TabsContent>
        <TabsContent value="reports" className="bg-m2-info-tint mt-2 rounded-lg p-6">
          <h3 className="text-m2-deep-blue-2 mb-3 text-xl font-bold">보고서</h3>
          <p className="text-m2-deep-blue-1 text-sm">
            다양한 형태의 보고서를 생성하고 다운로드할 수 있습니다.
          </p>
        </TabsContent>
        <TabsContent value="settings" className="bg-m2-surface mt-2 rounded-lg p-6">
          <h3 className="text-m2-gray-0 mb-3 text-xl font-bold">설정</h3>
          <p className="text-m2-gray-1 text-sm">대시보드의 다양한 옵션을 설정할 수 있습니다.</p>
        </TabsContent>
      </Tabs>
    </div>
}`,...(O=(H=j.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var W,q,J;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="w-[700px]">
      <Tabs defaultValue="week1">
        <TabsList>
          <TabsTrigger value="week1">1주차</TabsTrigger>
          <TabsTrigger value="week2">2주차</TabsTrigger>
          <TabsTrigger value="week3">3주차</TabsTrigger>
          <TabsTrigger value="week4">4주차</TabsTrigger>
          <TabsTrigger value="week5">5주차</TabsTrigger>
          <TabsTrigger value="week6">6주차</TabsTrigger>
          <TabsTrigger value="week7">7주차</TabsTrigger>
          <TabsTrigger value="week8">8주차</TabsTrigger>
        </TabsList>
        <TabsContent value="week1" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">1주차 학습 내용</h3>
          <p className="text-m2-secondary text-sm">React 기초: 컴포넌트와 Props</p>
        </TabsContent>
        <TabsContent value="week2" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">2주차 학습 내용</h3>
          <p className="text-m2-secondary text-sm">State와 생명주기</p>
        </TabsContent>
        <TabsContent value="week3" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">3주차 학습 내용</h3>
          <p className="text-m2-secondary text-sm">이벤트 처리</p>
        </TabsContent>
        <TabsContent value="week4" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">4주차 학습 내용</h3>
          <p className="text-m2-secondary text-sm">조건부 렌더링</p>
        </TabsContent>
        <TabsContent value="week5" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">5주차 학습 내용</h3>
          <p className="text-m2-secondary text-sm">리스트와 Key</p>
        </TabsContent>
        <TabsContent value="week6" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">6주차 학습 내용</h3>
          <p className="text-m2-secondary text-sm">폼 다루기</p>
        </TabsContent>
        <TabsContent value="week7" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">7주차 학습 내용</h3>
          <p className="text-m2-secondary text-sm">합성 vs 상속</p>
        </TabsContent>
        <TabsContent value="week8" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">8주차 학습 내용</h3>
          <p className="text-m2-secondary text-sm">Hooks 소개</p>
        </TabsContent>
      </Tabs>
    </div>
}`,...(J=(q=y.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Tabs defaultValue="available1">
        <TabsList>
          <TabsTrigger value="available1">사용 가능</TabsTrigger>
          <TabsTrigger value="disabled" disabled>
            비활성화됨
          </TabsTrigger>
          <TabsTrigger value="available2">사용 가능</TabsTrigger>
        </TabsList>
        <TabsContent value="available1" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">첫 번째 탭</h3>
          <p className="text-m2-secondary text-sm">이 탭은 정상적으로 사용 가능합니다.</p>
        </TabsContent>
        <TabsContent value="disabled" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">비활성화된 탭</h3>
          <p className="text-m2-secondary text-sm">이 탭은 비활성화되어 있어 접근할 수 없습니다.</p>
        </TabsContent>
        <TabsContent value="available2" className="border-m2-border mt-2 rounded-md border p-4">
          <h3 className="mb-2 text-lg font-semibold">세 번째 탭</h3>
          <p className="text-m2-secondary text-sm">이 탭도 정상적으로 사용 가능합니다.</p>
        </TabsContent>
      </Tabs>
    </div>
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const qe=["Playground","Basic","WithIcons","Styled","ManyTabs","Disabled"];export{N as Basic,w as Disabled,y as ManyTabs,v as Playground,j as Styled,f as WithIcons,qe as __namedExportsOrder,We as default};
