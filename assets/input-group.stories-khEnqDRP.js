import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-OJ7QbjDu.js";import{c as B}from"./index-C2vczdB5.js";import{c as k}from"./utils-CDN07tui.js";import{B as _}from"./button-CkQv11My.js";import{I as ye}from"./input-BeM9XfYP.js";import{S as i,M as E}from"./search-Bar65OBQ.js";import{U as I}from"./user-DKwQRr9F.js";import{c as F}from"./createLucideIcon-BRUIOxYu.js";import{X as je}from"./x-rbQ9-OCx.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],be=F("eye-off",Ge);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ge=F("eye",Ne);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],M=F("lock",ve),Se=B(["group/input-group border-m2-border shadow-m2-sm relative m-0 flex h-10 w-full min-w-0 items-center rounded border bg-white p-0 transition-[color,box-shadow] outline-none","has-[>[data-align=inline-start]]:[&>[data-slot=input-group-control]]:pl-2","has-[>[data-align=inline-end]]:[&>[data-slot=input-group-control]]:pr-2","has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>[data-slot=input-group-control]]:pb-3","has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>[data-slot=input-group-control]]:pt-3","has-[[data-slot=input-group-control][data-invalid=true]]:border-m2-danger","has-[[data-slot=input-group-control][data-invalid=true]:focus-visible]:border-m2-danger has-[[data-slot=input-group-control][data-invalid=true]:focus-visible]:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]","has-[[data-slot=input-group-control]:focus-visible]:border-m2-primary","has-[[data-slot=input-group-control]:focus-visible]:shadow-[0_0_0_3px_rgba(0,194,255,0.1)]","has-[[data-slot=input-group-control]:disabled]:cursor-not-allowed has-[[data-slot=input-group-control]:disabled]:opacity-70","has-[[data-slot=input-group-control]:disabled:focus-visible]:border-m2-border has-[[data-slot=input-group-control]:disabled:focus-visible]:shadow-none","has-[[data-slot=input-group-control]:read-only]:border-m2-border has-[[data-slot=input-group-control]:read-only]:bg-m2-surface has-[[data-slot=input-group-control]:read-only]:shadow-none","has-[[data-slot=input-group-control]:read-only:focus-visible]:shadow-none"]);function a({className:n,...r}){return e.jsx("fieldset",{"data-slot":"input-group",className:k(Se(),n),...r})}a.__docgenInfo={description:"",methods:[],displayName:"InputGroup"};const Ae=B(["text-m2-gray-2 flex h-auto cursor-text items-center justify-center gap-2 py-1.5 select-none","[&>svg:not([class*=size-])]:size-4","group-has-[[data-slot=input-group-control][data-invalid=true]]/input-group:text-m2-danger","group-has-[[data-slot=input-group-control]:disabled]/input-group:opacity-50 group-data-[disabled=true]/input-group:opacity-50"],{variants:{align:{"inline-start":"order-first pl-3 has-[>button]:ml-[-0.45rem]","inline-end":"order-last pr-3 has-[>button]:mr-[-0.45rem]","block-start":"order-first w-full justify-start px-3 pt-3 group-has-[>[data-slot=input-group-control]]/input-group:pt-2.5 [.border-b]:pb-3","block-end":"order-last w-full justify-start px-3 pb-3 group-has-[>[data-slot=input-group-control]]/input-group:pb-2.5 [.border-t]:pt-3"}},defaultVariants:{align:"inline-start"}});function t({align:n="inline-start",className:r,onClick:l,tabIndex:c=-1,...x}){return e.jsx("div",{role:"group",tabIndex:c,"data-slot":"input-group-addon","data-align":n,className:k(Ae({align:n}),r),onClick:d=>{var m,p;l==null||l(d),!(d.defaultPrevented||d.target instanceof Element&&d.target.closest("button"))&&((p=(m=d.currentTarget.parentElement)==null?void 0:m.querySelector("[data-slot=input-group-control]"))==null||p.focus())},...x})}t.__docgenInfo={description:"",methods:[],displayName:"InputGroupAddon",props:{align:{defaultValue:{value:"'inline-start'",computed:!1},required:!1},tabIndex:{defaultValue:{value:"-1",computed:!1},required:!1}}};const we=B("");function u({className:n,size:r="xs",...l}){return e.jsx(_,{"data-slot":"input-group-button",size:r,className:k(we(),n),...l})}u.__docgenInfo={description:"",methods:[],displayName:"InputGroupButton",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:"'xs'",computed:!1},required:!1}}};const ze=B(["min-w-0 flex-1 rounded-none border-0 bg-transparent shadow-none","focus:border-transparent focus:shadow-none focus-visible:outline-none","read-only:bg-transparent disabled:bg-transparent"],{variants:{invalid:{true:"text-m2-danger focus:border-transparent focus:shadow-none"}}});function o({className:n,invalid:r=!1,...l}){return e.jsx(ye,{"data-slot":"input-group-control","data-invalid":r||void 0,invalid:r,className:k(ze({invalid:r}),n),...l})}o.__docgenInfo={description:"",methods:[],displayName:"InputGroupInput",props:{invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const We={title:"M2/InputGroup",component:a,parameters:{layout:"centered",docs:{description:{component:`
### 입력 필드 그룹 컴포넌트

InputGroup 컴포넌트는 입력 필드와 아이콘, 버튼, 보조 텍스트를 하나의 입력 컨트롤처럼 묶어 표시합니다.
검색창, 인증 입력, 필터 입력처럼 입력 주변에 보조 액션이나 의미 힌트가 필요한 UI에서 사용합니다.

## 주요 기능

- **유연한 구성**: \`InputGroupInput\`, \`InputGroupAddon\`, \`InputGroupButton\`을 자유롭게 조합합니다.
- **다양한 정렬**: Addon의 \`align\` 값으로 앞/뒤/위/아래 위치를 지정합니다.
- **상태 연동**: input의 focus, invalid, disabled, readOnly 상태가 그룹 테두리와 addon 색상에 반영됩니다.
- **포커스 위임**: 버튼이 아닌 addon 영역을 클릭하면 내부 input으로 focus가 이동합니다.

## 사용 예시

\`\`\`tsx
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="검색어를 입력하세요" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>검색</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"InputGroupInput에 전달할 플레이스홀더 텍스트",table:{type:{summary:"string"},category:"입력"}},type:{control:"select",options:["text","email","password","search","tel","url"],description:"InputGroupInput의 HTML input type",table:{type:{summary:"HTMLInputTypeAttribute"},defaultValue:{summary:"'text'"},category:"입력"}},invalid:{control:"boolean",description:"입력 그룹의 에러 상태 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},disabled:{control:"boolean",description:"내부 input 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},readOnly:{control:"boolean",description:"내부 input 읽기 전용 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},addonAlign:{control:"select",options:["inline-start","inline-end","block-start","block-end"],description:"InputGroupAddon의 배치 방향",table:{type:{summary:"'inline-start' | 'inline-end' | 'block-start' | 'block-end'"},defaultValue:{summary:"'inline-start'"},category:"구성"}},showButton:{control:"boolean",description:"우측 액션 버튼 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"구성"}},buttonText:{control:"text",description:"액션 버튼 텍스트",table:{type:{summary:"string"},category:"구성"}},buttonVariant:{control:"select",options:["filled","outlined","text"],description:"InputGroupButton의 variant",table:{type:{summary:"'filled' | 'outlined' | 'text'"},defaultValue:{summary:"'filled'"},category:"구성"}}},args:{placeholder:"검색어를 입력하세요",type:"search",invalid:!1,disabled:!1,readOnly:!1,addonAlign:"inline-start",showButton:!1,buttonText:"검색",buttonVariant:"filled"}};function s({title:n,children:r,width:l="w-80"}){return e.jsxs("div",{className:`flex ${l} flex-col gap-2`,children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:n}),r]})}const f={parameters:{controls:{disable:!1},docs:{description:{story:`
아이콘과 입력 필드를 조합한 기본 검색 입력입니다.
InputGroup 내부의 각 하위 컴포넌트를 바꾸어 동일한 외곽선과 상태 스타일을 유지할 수 있습니다.
        `}}},render:n=>e.jsx("div",{className:"w-80",children:e.jsxs(a,{children:[n.addonAlign!=="inline-end"&&n.addonAlign!=="block-end"?e.jsx(t,{align:n.addonAlign,children:e.jsx(i,{className:"size-4"})}):null,e.jsx(o,{placeholder:n.placeholder,type:n.type,invalid:n.invalid,disabled:n.disabled,readOnly:n.readOnly}),n.addonAlign==="inline-end"||n.addonAlign==="block-end"?e.jsx(t,{align:n.addonAlign,children:e.jsx(i,{className:"size-4"})}):null,n.showButton?e.jsx(t,{align:"inline-end",children:e.jsx(u,{variant:n.buttonVariant,children:n.buttonText})}):null]})})},y={render:()=>e.jsx(s,{title:"기본 사용법",children:e.jsx(a,{children:e.jsx(o,{placeholder:"입력하세요"})})})},j={render:()=>e.jsx(s,{title:"아이콘 추가 (왼쪽)",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{placeholder:"검색어를 입력하세요"})]}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(I,{className:"size-4"})}),e.jsx(o,{placeholder:"사용자 이름"})]}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(E,{className:"size-4"})}),e.jsx(o,{type:"email",placeholder:"이메일 주소"})]}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(M,{className:"size-4"})}),e.jsx(o,{type:"password",placeholder:"비밀번호"})]})]})})},G={render:()=>e.jsx(s,{title:"아이콘 추가 (오른쪽)",children:e.jsxs(a,{children:[e.jsx(o,{placeholder:"검색어를 입력하세요"}),e.jsx(t,{align:"inline-end",children:e.jsx(je,{className:"size-4"})})]})})},b={render:()=>e.jsx(s,{title:"버튼 추가",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(a,{children:[e.jsx(o,{type:"password",placeholder:"비밀번호"}),e.jsx(t,{align:"inline-end",children:e.jsx(u,{variant:"text",color:"secondary","aria-label":"비밀번호 보기",children:e.jsx(ge,{className:"size-4"})})})]}),e.jsxs(a,{children:[e.jsx(o,{placeholder:"검색어를 입력하세요"}),e.jsx(t,{align:"inline-end",children:e.jsx(u,{children:"검색"})})]})]})})},N={render:()=>e.jsx(s,{title:"아이콘과 버튼 함께 사용",children:e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{placeholder:"검색어를 입력하세요"}),e.jsx(t,{align:"inline-end",children:e.jsx(u,{children:"검색"})})]})})},v={render:()=>e.jsx(s,{title:"Search Box",children:e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{defaultValue:"특허 명세서",placeholder:"검색어를 입력하세요",type:"search"})]})})},S={render:()=>e.jsxs("div",{className:"flex w-80 flex-col gap-6",children:[e.jsx(s,{title:"Inline Start (기본값)",children:e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{placeholder:"왼쪽에 아이콘"})]})}),e.jsx(s,{title:"Inline End",children:e.jsxs(a,{children:[e.jsx(o,{placeholder:"오른쪽에 아이콘"}),e.jsx(t,{align:"inline-end",children:e.jsx(I,{className:"size-4"})})]})}),e.jsx(s,{title:"Block Start",children:e.jsxs(a,{children:[e.jsx(t,{align:"block-start",children:e.jsx("span",{className:"text-xs",children:"라벨"})}),e.jsx(o,{placeholder:"위쪽에 라벨"})]})}),e.jsx(s,{title:"Block End",children:e.jsxs(a,{children:[e.jsx(o,{placeholder:"아래쪽에 라벨"}),e.jsx(t,{align:"block-end",children:e.jsx("span",{className:"text-m2-gray-2 text-xs",children:"도움말 텍스트"})})]})})]})},A={render:()=>e.jsx(s,{title:"상태별 예시",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"input-group-state-default",className:"text-m2-gray-1 text-xs",children:"정상 상태"}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{id:"input-group-state-default",placeholder:"검색어를 입력하세요"})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"input-group-state-invalid",className:"text-m2-gray-1 text-xs",children:"에러 상태"}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{id:"input-group-state-invalid",invalid:!0,placeholder:"검색어를 입력하세요"})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"input-group-state-disabled",className:"text-m2-gray-1 text-xs",children:"비활성화 상태"}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{id:"input-group-state-disabled",disabled:!0,placeholder:"검색어를 입력하세요"})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"input-group-state-readonly",className:"text-m2-gray-1 text-xs",children:"읽기 전용 상태"}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{id:"input-group-state-readonly",defaultValue:"읽기 전용 텍스트",readOnly:!0})]})]})]})})},w={render:()=>e.jsxs("div",{className:"flex w-96 flex-col gap-6",children:[e.jsx(s,{title:"검색 입력",width:"w-full",children:e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(i,{className:"size-4"})}),e.jsx(o,{placeholder:"검색어를 입력하세요"}),e.jsx(t,{align:"inline-end",children:e.jsx(u,{children:"검색"})})]})}),e.jsx(s,{title:"사용자 정보 입력",width:"w-full",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(I,{className:"size-4"})}),e.jsx(o,{placeholder:"사용자 이름"})]}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(E,{className:"size-4"})}),e.jsx(o,{type:"email",placeholder:"이메일 주소"})]}),e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:e.jsx(M,{className:"size-4"})}),e.jsx(o,{type:"password",placeholder:"비밀번호"}),e.jsx(t,{align:"inline-end",children:e.jsx(u,{variant:"text",color:"secondary","aria-label":"비밀번호 보기",children:e.jsx(ge,{className:"size-4"})})})]})]})})]})},z={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다.
부모 컴포넌트가 \`value\`와 \`onChange\`로 입력 상태를 소유하고, 버튼을 통해 예시 값을 채우거나 초기화합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다.
- 입력 변경은 \`onChange\`로 부모에 전달됩니다.
- 부모가 상태를 변경하면 입력 필드 값이 즉시 반영됩니다.
- 폼 라이브러리나 검색 필터처럼 외부 상태와 동기화해야 하는 입력에 적합합니다.
        `}}},render:()=>{const[n,r]=h.useState("홍길동"),[l,c]=h.useState(""),[x,d]=h.useState(""),[m,p]=h.useState("010-1234-5678"),[C,V]=h.useState(""),Ie=()=>{r(""),c(""),d(""),p(""),V("")},fe=()=>{r("홍길동"),c("hong@example.com"),d("password123"),p("010-1234-5678"),V("검색어 예시")};return e.jsxs("div",{className:"flex w-96 flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"제어 컴포넌트 예시"}),e.jsx("p",{className:"text-m2-gray-2 text-xs",children:"입력 필드에 값을 입력하면 부모 상태가 변경되고, 부모에서 값을 바꾸면 입력 필드가 즉시 반영됩니다."})]}),e.jsxs("div",{className:"border-m2-border flex flex-col gap-4 rounded-lg border p-4",children:[e.jsx(g,{id:"controlled-search",label:"검색",value:C,placeholder:"검색어를 입력하세요",icon:e.jsx(i,{className:"size-4"}),onChange:V}),e.jsx(g,{id:"controlled-name",label:"이름",value:n,placeholder:"이름을 입력하세요",icon:e.jsx(I,{className:"size-4"}),onChange:r,suffix:"초기값: 홍길동"}),e.jsx(g,{id:"controlled-email",label:"이메일",value:l,type:"email",placeholder:"example@email.com",icon:e.jsx(E,{className:"size-4"}),onChange:c}),e.jsx(g,{id:"controlled-password",label:"비밀번호",value:x,type:"password",placeholder:"비밀번호를 입력하세요",icon:e.jsx(M,{className:"size-4"}),onChange:d}),e.jsx(g,{id:"controlled-phone",label:"전화번호",value:m,type:"tel",placeholder:"010-1234-5678",icon:e.jsx(I,{className:"size-4"}),onChange:p,suffix:"초기값: 010-1234-5678"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(_,{onClick:fe,children:"값 채우기"}),e.jsx(_,{color:"secondary",onClick:Ie,children:"초기화"})]}),e.jsx("div",{className:"border-m2-primary bg-m2-primary-tint rounded-lg border p-3",children:e.jsx("p",{className:"text-m2-primary text-xs",children:"부모 컴포넌트가 상태를 소유하므로, 검색 조건 저장이나 폼 검증처럼 외부 흐름과 함께 값을 다루는 화면에서 일관되게 사용할 수 있습니다."})})]})}};function g({id:n,label:r,value:l,placeholder:c,icon:x,onChange:d,type:m="text",suffix:p}){return e.jsxs("label",{htmlFor:n,className:"text-m2-gray-1 flex flex-col gap-2 text-sm font-medium",children:[r,e.jsxs(a,{children:[e.jsx(t,{align:"inline-start",children:x}),e.jsx(o,{id:n,type:m,value:l,placeholder:c,onChange:C=>d(C.target.value)}),m==="password"&&e.jsx(t,{align:"inline-end",children:e.jsx(u,{variant:"text",color:"secondary","aria-label":"비밀번호 보기",children:e.jsx(be,{className:"size-4"})})})]}),e.jsxs("span",{className:"text-m2-gray-2 text-xs font-normal",children:["현재 값: ",l||"(비어있음)",p?` (${p})`:""]})]})}var P,O,T;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
아이콘과 입력 필드를 조합한 기본 검색 입력입니다.
InputGroup 내부의 각 하위 컴포넌트를 바꾸어 동일한 외곽선과 상태 스타일을 유지할 수 있습니다.
        \`
      }
    }
  },
  render: args => <div className="w-80">
      <InputGroup>
        {args.addonAlign !== 'inline-end' && args.addonAlign !== 'block-end' ? <InputGroupAddon align={args.addonAlign}>
            <SearchIcon className="size-4" />
          </InputGroupAddon> : null}
        <InputGroupInput placeholder={args.placeholder} type={args.type} invalid={args.invalid} disabled={args.disabled} readOnly={args.readOnly} />
        {args.addonAlign === 'inline-end' || args.addonAlign === 'block-end' ? <InputGroupAddon align={args.addonAlign}>
            <SearchIcon className="size-4" />
          </InputGroupAddon> : null}
        {args.showButton ? <InputGroupAddon align="inline-end">
            <InputGroupButton variant={args.buttonVariant}>{args.buttonText}</InputGroupButton>
          </InputGroupAddon> : null}
      </InputGroup>
    </div>
}`,...(T=(O=f.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var U,W,L;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <StorySection title="기본 사용법">
      <InputGroup>
        <InputGroupInput placeholder="입력하세요" />
      </InputGroup>
    </StorySection>
}`,...(L=(W=y.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var q,$,D;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <StorySection title="아이콘 추가 (왼쪽)">
      <div className="flex flex-col gap-3">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <SearchIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="검색어를 입력하세요" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <UserIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="사용자 이름" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <MailIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupInput type="email" placeholder="이메일 주소" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <LockIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="비밀번호" />
        </InputGroup>
      </div>
    </StorySection>
}`,...(D=($=j.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var H,X,R;G.parameters={...G.parameters,docs:{...(H=G.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <StorySection title="아이콘 추가 (오른쪽)">
      <InputGroup>
        <InputGroupInput placeholder="검색어를 입력하세요" />
        <InputGroupAddon align="inline-end">
          <XIcon className="size-4" />
        </InputGroupAddon>
      </InputGroup>
    </StorySection>
}`,...(R=(X=G.parameters)==null?void 0:X.docs)==null?void 0:R.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <StorySection title="버튼 추가">
      <div className="flex flex-col gap-3">
        <InputGroup>
          <InputGroupInput type="password" placeholder="비밀번호" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="text" color="secondary" aria-label="비밀번호 보기">
              <EyeIcon className="size-4" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="검색어를 입력하세요" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>검색</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </StorySection>
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <StorySection title="아이콘과 버튼 함께 사용">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <SearchIcon className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="검색어를 입력하세요" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>검색</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </StorySection>
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <StorySection title="Search Box">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <SearchIcon className="size-4" />
        </InputGroupAddon>
        <InputGroupInput defaultValue="특허 명세서" placeholder="검색어를 입력하세요" type="search" />
      </InputGroup>
    </StorySection>
}`,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,re,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-6">
      <StorySection title="Inline Start (기본값)">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <SearchIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="왼쪽에 아이콘" />
        </InputGroup>
      </StorySection>
      <StorySection title="Inline End">
        <InputGroup>
          <InputGroupInput placeholder="오른쪽에 아이콘" />
          <InputGroupAddon align="inline-end">
            <UserIcon className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </StorySection>
      <StorySection title="Block Start">
        <InputGroup>
          <InputGroupAddon align="block-start">
            <span className="text-xs">라벨</span>
          </InputGroupAddon>
          <InputGroupInput placeholder="위쪽에 라벨" />
        </InputGroup>
      </StorySection>
      <StorySection title="Block End">
        <InputGroup>
          <InputGroupInput placeholder="아래쪽에 라벨" />
          <InputGroupAddon align="block-end">
            <span className="text-m2-gray-2 text-xs">도움말 텍스트</span>
          </InputGroupAddon>
        </InputGroup>
      </StorySection>
    </div>
}`,...(le=(re=S.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ie,de;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <StorySection title="상태별 예시">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="input-group-state-default" className="text-m2-gray-1 text-xs">
            정상 상태
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput id="input-group-state-default" placeholder="검색어를 입력하세요" />
          </InputGroup>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="input-group-state-invalid" className="text-m2-gray-1 text-xs">
            에러 상태
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput id="input-group-state-invalid" invalid placeholder="검색어를 입력하세요" />
          </InputGroup>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="input-group-state-disabled" className="text-m2-gray-1 text-xs">
            비활성화 상태
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput id="input-group-state-disabled" disabled placeholder="검색어를 입력하세요" />
          </InputGroup>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="input-group-state-readonly" className="text-m2-gray-1 text-xs">
            읽기 전용 상태
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput id="input-group-state-readonly" defaultValue="읽기 전용 텍스트" readOnly />
          </InputGroup>
        </div>
      </div>
    </StorySection>
}`,...(de=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,ue,ce;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-6">
      <StorySection title="검색 입력" width="w-full">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <SearchIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="검색어를 입력하세요" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>검색</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </StorySection>
      <StorySection title="사용자 정보 입력" width="w-full">
        <div className="flex flex-col gap-3">
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <UserIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="사용자 이름" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <MailIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput type="email" placeholder="이메일 주소" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <LockIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput type="password" placeholder="비밀번호" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="text" color="secondary" aria-label="비밀번호 보기">
                <EyeIcon className="size-4" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </StorySection>
    </div>
}`,...(ce=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,xe,he;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다.
부모 컴포넌트가 \\\`value\\\`와 \\\`onChange\\\`로 입력 상태를 소유하고, 버튼을 통해 예시 값을 채우거나 초기화합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다.
- 입력 변경은 \\\`onChange\\\`로 부모에 전달됩니다.
- 부모가 상태를 변경하면 입력 필드 값이 즉시 반영됩니다.
- 폼 라이브러리나 검색 필터처럼 외부 상태와 동기화해야 하는 입력에 적합합니다.
        \`
      }
    }
  },
  render: () => {
    const [name, setName] = useState('홍길동');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('010-1234-5678');
    const [search, setSearch] = useState('');
    const reset = () => {
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
      setSearch('');
    };
    const fill = () => {
      setName('홍길동');
      setEmail('hong@example.com');
      setPassword('password123');
      setPhone('010-1234-5678');
      setSearch('검색어 예시');
    };
    return <div className="flex w-96 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">제어 컴포넌트 예시</h3>
          <p className="text-m2-gray-2 text-xs">
            입력 필드에 값을 입력하면 부모 상태가 변경되고, 부모에서 값을 바꾸면 입력 필드가 즉시
            반영됩니다.
          </p>
        </div>
        <div className="border-m2-border flex flex-col gap-4 rounded-lg border p-4">
          <ControlledField id="controlled-search" label="검색" value={search} placeholder="검색어를 입력하세요" icon={<SearchIcon className="size-4" />} onChange={setSearch} />
          <ControlledField id="controlled-name" label="이름" value={name} placeholder="이름을 입력하세요" icon={<UserIcon className="size-4" />} onChange={setName} suffix="초기값: 홍길동" />
          <ControlledField id="controlled-email" label="이메일" value={email} type="email" placeholder="example@email.com" icon={<MailIcon className="size-4" />} onChange={setEmail} />
          <ControlledField id="controlled-password" label="비밀번호" value={password} type="password" placeholder="비밀번호를 입력하세요" icon={<LockIcon className="size-4" />} onChange={setPassword} />
          <ControlledField id="controlled-phone" label="전화번호" value={phone} type="tel" placeholder="010-1234-5678" icon={<UserIcon className="size-4" />} onChange={setPhone} suffix="초기값: 010-1234-5678" />
        </div>
        <div className="flex gap-2">
          <Button onClick={fill}>값 채우기</Button>
          <Button color="secondary" onClick={reset}>
            초기화
          </Button>
        </div>
        <div className="border-m2-primary bg-m2-primary-tint rounded-lg border p-3">
          <p className="text-m2-primary text-xs">
            부모 컴포넌트가 상태를 소유하므로, 검색 조건 저장이나 폼 검증처럼 외부 흐름과 함께 값을
            다루는 화면에서 일관되게 사용할 수 있습니다.
          </p>
        </div>
      </div>;
  }
}`,...(he=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};const Le=["Playground","Basic","WithIcon","WithIconEnd","WithButton","WithIconAndButton","SearchBox","DifferentAlignments","States","Examples","Controlled"];export{y as Basic,z as Controlled,S as DifferentAlignments,w as Examples,f as Playground,v as SearchBox,A as States,b as WithButton,j as WithIcon,N as WithIconAndButton,G as WithIconEnd,Le as __namedExportsOrder,We as default};
