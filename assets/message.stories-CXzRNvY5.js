import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as h}from"./index-C2vczdB5.js";import{r as l}from"./index-OJ7QbjDu.js";import{c as j}from"./utils-CDN07tui.js";import{I as N}from"./info-CBqhzTkO.js";import{T as I}from"./triangle-alert-mdoppzDT.js";import"./createLucideIcon-BRUIOxYu.js";const b=h("flex items-start gap-1 text-sm",{variants:{type:{danger:"text-m2-danger",info:"text-m2-info",warning:"text-m2-warning"}},defaultVariants:{type:"danger"}});function v(o){return l.Children.toArray(o).some(s=>typeof s=="string"?s.trim().length>0:!!(typeof s=="number"||l.isValidElement(s)))}function a({className:o,type:s,icon:i,children:c,...w}){return v(c)?e.jsxs("div",{className:j(b({type:s}),o),...w,children:[i!==!1&&e.jsx("span",{className:"mt-0.5 flex shrink-0 [&>svg]:size-4",children:i??e.jsx(N,{"data-testid":"message-icon"})}),e.jsx("span",{children:c})]}):null}a.__docgenInfo={description:"",methods:[],displayName:"Message",props:{icon:{required:!1,tsType:{name:"union",raw:"ReactNode | false",elements:[{name:"ReactNode"},{name:"literal",value:"false"}]},description:"좌측 아이콘을 교체하거나(ReactNode) 숨긴다(false). 기본은 InfoIcon."},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const S={title:"M2/Message",component:a,parameters:{layout:"centered",controls:{include:["type","children"]},docs:{description:{component:`
### 메시지 컴포넌트

Message 컴포넌트는 사용자에게 정보나 경고를 표시하기 위한 컴포넌트입니다.
아이콘과 함께 메시지를 표시하며, 타입에 따라 다른 색상으로 표시됩니다.

## 주요 기능

- **타입별 스타일**: \`danger\` (위험/오류·빨강), \`info\` (정보·블루), \`warning\` (주의·주황) 세 가지 타입 지원
- **아이콘 표시**: 기본적으로 Info 아이콘이 표시됩니다. \`icon\`으로 다른 아이콘으로 교체하거나 \`icon={false}\`로 숨길 수 있습니다.
- **조건부 렌더링**: \`children\`이 없으면 렌더링되지 않습니다
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 타입 가이드

- \`danger\`: 사용자 입력 오류 등 사용자가 고쳐야 하는 문제
- \`info\`: 중립적인 정보성 안내
- \`warning\`: 일시적 오류·주의처럼 danger보다는 약하지만 info보다 주의를 끌어야 하는 상황

## 사용 예시

\`\`\`tsx
<Message type="danger">오류가 발생했습니다.</Message>

<Message type="info">정보 메시지입니다.</Message>

<Message type="warning">일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</Message>

{/* 아이콘 교체: warning에 경고 아이콘 주입 */}
<Message type="warning" icon={<TriangleAlertIcon />}>
  잠시 후 다시 시도해 주세요.
</Message>

{/* 아이콘 숨김 */}
<Message type="info" icon={false}>아이콘 없이 표시합니다.</Message>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["danger","info","warning"],description:"메시지 타입",table:{type:{summary:"'danger' | 'info' | 'warning'"},defaultValue:{summary:"'danger'"}}},icon:{control:!1,description:"좌측 아이콘을 교체(ReactNode)하거나 숨긴다(false). 기본은 InfoIcon.",table:{type:{summary:"ReactNode | false"}}},children:{control:"text",description:"메시지 내용",table:{type:{summary:"ReactNode"}}}}},n={name:"예시",args:{type:"danger",children:"오류가 발생했습니다."}},r={name:"타입별 예시",render:()=>e.jsxs("div",{className:"flex max-w-2xl flex-col gap-4",children:[e.jsx(a,{type:"danger",children:"이 필드는 필수입니다."}),e.jsxs(a,{type:"info",children:["설명에 대한 내용을 적기 위해서는 type을 info로 설정하여 색상을 변경할 수 있습니다.",e.jsx("br",{}),"danger에서는 빨간 색상으로 문구가 보였던 것과 다르게, info에서는 ",e.jsx("b",{children:"파란 색상"}),"으로 문구가 보입니다."]}),e.jsxs(a,{type:"warning",children:["일시적인 오류가 발생했습니다. warning은 danger(사용자 잘못)와 구분되면서 info보다"," ",e.jsx("b",{children:"주의를 끄는"})," 주황 색상으로 표시됩니다."]}),e.jsx(a,{type:"danger",children:"메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다."})]})},t={name:"아이콘 커스터마이징",render:()=>e.jsxs("div",{className:"flex max-w-2xl flex-col gap-4",children:[e.jsx(a,{type:"warning",icon:e.jsx(I,{}),children:"아이콘 교체: warning에 삼각형 경고 아이콘(TriangleAlertIcon)을 주입했습니다."}),e.jsxs(a,{type:"info",icon:!1,children:["아이콘 숨김: ",e.jsxs("code",{children:["icon=","{false}"]}),"로 좌측 아이콘 없이 텍스트만 표시합니다."]})]})};var d,g,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '예시',
  args: {
    type: 'danger',
    children: '오류가 발생했습니다.'
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,f,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '타입별 예시',
  render: () => <div className="flex max-w-2xl flex-col gap-4">
      <Message type="danger">이 필드는 필수입니다.</Message>
      <Message type="info">
        설명에 대한 내용을 적기 위해서는 type을 info로 설정하여 색상을 변경할 수 있습니다.
        <br />
        danger에서는 빨간 색상으로 문구가 보였던 것과 다르게, info에서는 <b>파란 색상</b>으로 문구가
        보입니다.
      </Message>
      <Message type="warning">
        일시적인 오류가 발생했습니다. warning은 danger(사용자 잘못)와 구분되면서 info보다{' '}
        <b>주의를 끄는</b> 주황 색상으로 표시됩니다.
      </Message>
      <Message type="danger">
        메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가
        길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시
        표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는
        이러합니다. 메시지가 길어졌을 시 표기는 이러합니다. 메시지가 길어졌을 시 표기는 이러합니다.
        메시지가 길어졌을 시 표기는 이러합니다.
      </Message>
    </div>
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var u,y,M;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '아이콘 커스터마이징',
  render: () => <div className="flex max-w-2xl flex-col gap-4">
      <Message type="warning" icon={<TriangleAlertIcon />}>
        아이콘 교체: warning에 삼각형 경고 아이콘(TriangleAlertIcon)을 주입했습니다.
      </Message>
      <Message type="info" icon={false}>
        아이콘 숨김: <code>icon={'{false}'}</code>로 좌측 아이콘 없이 텍스트만 표시합니다.
      </Message>
    </div>
}`,...(M=(y=t.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const q=["Example","Examples","CustomIcon"];export{t as CustomIcon,n as Example,r as Examples,q as __namedExportsOrder,S as default};
