import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as q}from"./index-C2vczdB5.js";import{c as D}from"./utils-CDN07tui.js";import{c}from"./createLucideIcon-BRUIOxYu.js";import{D as R}from"./download-CtE9xlUU.js";import"./index-OJ7QbjDu.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],A=c("arrow-right",U);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],T=c("external-link",P);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],$=c("refresh-ccw",H),O=q(D("inline-flex items-center justify-center gap-1 transition-colors outline-none","not-disabled:cursor-pointer not-disabled:hover:underline not-disabled:focus-visible:underline",'disabled:opacity-50 not-[aria-busy="true"]:disabled:cursor-not-allowed',"aria-busy:cursor-progress"),{variants:{color:{primary:"text-m2-primary hover:text-m2-primary-dark focus-visible:text-m2-primary-dark",secondary:"text-m2-secondary hover:text-m2-gray-1 focus-visible:text-m2-gray-1",success:"text-m2-success hover:text-m2-success-dark focus-visible:text-m2-success-dark",warning:"text-m2-warning hover:text-m2-warning-dark focus-visible:text-m2-warning-dark",danger:"text-m2-danger hover:text-m2-danger-dark focus-visible:text-m2-danger-dark",info:"text-m2-info hover:text-m2-info-dark focus-visible:text-m2-info-dark"},size:{xs:"text-xs",sm:"text-sm"}},defaultVariants:{color:"primary",size:"sm"}});function e({className:I,color:M,size:_,type:W="button",...V}){return n.jsx("button",{type:W,className:D(O({color:M,size:_}),I),...V})}e.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const Y={title:"M2/LinkButton",component:e,parameters:{layout:"centered",docs:{description:{component:`
### 링크처럼 보이는 버튼 컴포넌트

LinkButton 컴포넌트는 버튼처럼 클릭 가능하지만 링크처럼 보이는 UI 요소입니다.
텍스트 링크 스타일을 유지하면서 버튼의 기능을 제공합니다.

## 주요 기능

- **여러 색상 옵션**: \`primary\`, \`secondary\`, \`danger\`, \`success\`, \`warning\`, \`info\` 색상 지원
- **크기 옵션**: \`xs\` (초소형), \`sm\` (작은 크기) 두 가지 크기 지원
- **호버 효과**: 마우스 오버 시 밑줄 표시 및 색상 변경
- **버튼 기능**: 버튼 요소로 구현되어 클릭 이벤트 처리 가능
- **간결한 디자인**: 텍스트 링크 스타일로 깔끔한 UI 제공

## 사용 예시

\`\`\`tsx
import { LinkButton } from '../link-button';

<LinkButton color="primary" onClick={() => console.log('clicked')}>
  링크 버튼
</LinkButton>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning","info"],description:"링크 버튼의 색상. 의미에 맞게 선택하세요 (예: `danger`는 삭제·위험 작업, `success`는 완료·성공 작업).",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'"},defaultValue:{summary:"'primary'"},category:"스타일"}},size:{control:"select",options:["xs","sm"],description:"링크 버튼의 크기. `xs`는 초소형(text-xs), `sm`은 작은 크기(text-sm)입니다.",table:{type:{summary:"'xs' | 'sm'"},defaultValue:{summary:"'sm'"},category:"스타일"}},disabled:{control:"boolean",description:"비활성화 여부. `true`로 설정하면 링크 버튼이 비활성화되어 클릭할 수 없습니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},children:{control:"text",description:"버튼 내용 (텍스트 또는 아이콘 + 텍스트)",table:{type:{summary:"ReactNode"},category:"내용"}},className:{control:"text",description:"추가 CSS 클래스. 폰트 굵기, 자간, 기울임 등 비색상 커스터마이징에 사용합니다.",table:{type:{summary:"string"},category:"스타일"}},onClick:{action:"clicked",description:"버튼 클릭 시 호출되는 이벤트 핸들러",table:{type:{summary:"MouseEventHandler<HTMLButtonElement>"},category:"이벤트"}}},args:{children:"링크 버튼"}},s={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 LinkButton 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, size, disabled 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 링크 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 삭제나 위험한 작업에 사용, `success`는 성공적인 작업에 사용).\n- **Size**: 링크 버튼의 크기를 조정합니다. `xs`는 초소형, `sm`은 작은 크기입니다.\n- **Disabled**: `true`로 설정하면 링크 버튼이 비활성화됩니다.\n        "}}},args:{color:"primary",size:"sm",children:"링크 버튼"}},a={render:()=>n.jsx("div",{className:"flex flex-col gap-6",children:n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"All Colors"}),n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(e,{color:"primary",children:"Primary Link"}),n.jsx(e,{color:"secondary",children:"Secondary Link"}),n.jsx(e,{color:"danger",children:"Danger Link"}),n.jsx(e,{color:"success",children:"Success Link"}),n.jsx(e,{color:"warning",children:"Warning Link"}),n.jsx(e,{color:"info",children:"Info Link"})]})]})})},o={render:()=>n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Extra Small Size (xs)"}),n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(e,{color:"primary",size:"xs",children:"Extra Small Link"}),n.jsx(e,{color:"secondary",size:"xs",children:"Extra Small Link"}),n.jsx(e,{color:"danger",size:"xs",children:"Extra Small Link"}),n.jsx(e,{color:"success",size:"xs",children:"Extra Small Link"}),n.jsx(e,{color:"warning",size:"xs",children:"Extra Small Link"}),n.jsx(e,{color:"info",size:"xs",children:"Extra Small Link"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Small Size (sm)"}),n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(e,{color:"primary",size:"sm",children:"Small Link"}),n.jsx(e,{color:"secondary",size:"sm",children:"Small Link"}),n.jsx(e,{color:"danger",size:"sm",children:"Small Link"}),n.jsx(e,{color:"success",size:"sm",children:"Small Link"}),n.jsx(e,{color:"warning",size:"sm",children:"Small Link"}),n.jsx(e,{color:"info",size:"sm",children:"Small Link"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Size Comparison"}),n.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[n.jsx(e,{color:"primary",size:"xs",children:"Extra Small Link"}),n.jsx(e,{color:"primary",size:"sm",children:"Small Link"})]})]})]})},i={render:()=>n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Normal"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"primary",children:"Normal Link"}),n.jsx(e,{color:"secondary",children:"Normal Link"}),n.jsx(e,{color:"danger",children:"Normal Link"}),n.jsx(e,{color:"info",children:"Normal Link"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Disabled"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"primary",disabled:!0,children:"Disabled Link"}),n.jsx(e,{color:"secondary",disabled:!0,children:"Disabled Link"}),n.jsx(e,{color:"danger",disabled:!0,children:"Disabled Link"}),n.jsx(e,{color:"info",disabled:!0,children:"Disabled Link"})]})]})]})},r={render:()=>n.jsx("div",{className:"flex flex-col gap-6",children:n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"With Icons"}),n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsxs(e,{color:"primary",children:[n.jsx(T,{className:"size-4"}),n.jsx("span",{children:"외부 링크"})]}),n.jsxs(e,{color:"secondary",children:[n.jsx("span",{children:"더 보기"}),n.jsx(A,{className:"size-4"})]}),n.jsxs(e,{color:"success",children:[n.jsx(R,{className:"size-4"}),n.jsx("span",{children:"다운로드"})]})]})]})})},l={render:()=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"primary",size:"xs",children:"수정"}),n.jsx(e,{color:"danger",size:"xs",children:"삭제"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"primary",size:"sm",children:"상세보기"}),n.jsx(e,{color:"info",size:"sm",children:"수정"}),n.jsx(e,{color:"success",size:"sm",children:"복사"}),n.jsx(e,{color:"danger",size:"sm",children:"삭제"})]}),n.jsx("div",{className:"flex gap-4",children:n.jsxs(e,{color:"primary",size:"xs",children:[n.jsx($,{className:"size-3"}),n.jsx("span",{children:"기관계 시스템에서 다시 불러오기"})]})}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx(e,{color:"secondary",size:"xs",children:"↑"}),n.jsx(e,{color:"secondary",size:"xs",children:"↓"}),n.jsx(e,{color:"danger",size:"xs",children:"삭제"})]})]})},t={parameters:{docs:{description:{story:`
\`className\` prop을 사용하여 LinkButton 컴포넌트에 커스텀 스타일을 적용할 수 있습니다.

## 사용 팁

- \`className\` prop을 통해 추가적인 Tailwind CSS 클래스를 적용할 수 있습니다.
- 폰트 굵기, 자간, 기울임, 대문자 변환 등 다양한 비색상 스타일을 커스터마이징할 수 있습니다.
        `}}},render:()=>n.jsx("div",{className:"flex flex-col gap-6",children:n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"Custom Styling"}),n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(e,{color:"info",className:"font-bold",children:"Bold Link"}),n.jsx(e,{color:"warning",className:"underline decoration-2",children:"Underline Link"}),n.jsx(e,{color:"primary",className:"tracking-wider",children:"Wide Spacing"}),n.jsx(e,{color:"danger",className:"uppercase",children:"Uppercase Link"}),n.jsx(e,{color:"success",className:"italic",children:"Italic Link"}),n.jsx(e,{color:"secondary",className:"font-semibold",children:"Semibold Link"})]})]})})};var d,m,x;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 LinkButton 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 color, size, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Color**: 링크 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`danger\\\`는 삭제나 위험한 작업에 사용, \\\`success\\\`는 성공적인 작업에 사용).
- **Size**: 링크 버튼의 크기를 조정합니다. \\\`xs\\\`는 초소형, \\\`sm\\\`은 작은 크기입니다.
- **Disabled**: \\\`true\\\`로 설정하면 링크 버튼이 비활성화됩니다.
        \`
      }
    }
  },
  args: {
    color: 'primary',
    size: 'sm',
    children: '링크 버튼'
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,u,k;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">All Colors</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="primary">Primary Link</LinkButton>
          <LinkButton color="secondary">Secondary Link</LinkButton>
          <LinkButton color="danger">Danger Link</LinkButton>
          <LinkButton color="success">Success Link</LinkButton>
          <LinkButton color="warning">Warning Link</LinkButton>
          <LinkButton color="info">Info Link</LinkButton>
        </div>
      </div>
    </div>
}`,...(k=(u=a.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var L,f,g;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Extra Small Size (xs)</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="primary" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="secondary" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="danger" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="success" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="warning" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="info" size="xs">
            Extra Small Link
          </LinkButton>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Small Size (sm)</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="primary" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="secondary" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="danger" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="success" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="warning" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="info" size="sm">
            Small Link
          </LinkButton>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Size Comparison</h3>
        <div className="flex flex-wrap items-center gap-4">
          <LinkButton color="primary" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="primary" size="sm">
            Small Link
          </LinkButton>
        </div>
      </div>
    </div>
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,y,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Normal</h3>
        <div className="flex gap-4">
          <LinkButton color="primary">Normal Link</LinkButton>
          <LinkButton color="secondary">Normal Link</LinkButton>
          <LinkButton color="danger">Normal Link</LinkButton>
          <LinkButton color="info">Normal Link</LinkButton>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Disabled</h3>
        <div className="flex gap-4">
          <LinkButton color="primary" disabled>
            Disabled Link
          </LinkButton>
          <LinkButton color="secondary" disabled>
            Disabled Link
          </LinkButton>
          <LinkButton color="danger" disabled>
            Disabled Link
          </LinkButton>
          <LinkButton color="info" disabled>
            Disabled Link
          </LinkButton>
        </div>
      </div>
    </div>
}`,...(B=(y=i.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var N,v,j;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="primary">
            <ExternalLink className="size-4" />
            <span>외부 링크</span>
          </LinkButton>
          <LinkButton color="secondary">
            <span>더 보기</span>
            <ArrowRight className="size-4" />
          </LinkButton>
          <LinkButton color="success">
            <Download className="size-4" />
            <span>다운로드</span>
          </LinkButton>
        </div>
      </div>
    </div>
}`,...(j=(v=r.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var b,z,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <LinkButton color="primary" size="xs">
          수정
        </LinkButton>
        <LinkButton color="danger" size="xs">
          삭제
        </LinkButton>
      </div>
      <div className="flex gap-4">
        <LinkButton color="primary" size="sm">
          상세보기
        </LinkButton>
        <LinkButton color="info" size="sm">
          수정
        </LinkButton>
        <LinkButton color="success" size="sm">
          복사
        </LinkButton>
        <LinkButton color="danger" size="sm">
          삭제
        </LinkButton>
      </div>
      <div className="flex gap-4">
        <LinkButton color="primary" size="xs">
          <RefreshCcw className="size-3" />
          <span>기관계 시스템에서 다시 불러오기</span>
        </LinkButton>
      </div>
      <div className="flex gap-2">
        <LinkButton color="secondary" size="xs">
          ↑
        </LinkButton>
        <LinkButton color="secondary" size="xs">
          ↓
        </LinkButton>
        <LinkButton color="danger" size="xs">
          삭제
        </LinkButton>
      </div>
    </div>
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var w,E,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`className\\\` prop을 사용하여 LinkButton 컴포넌트에 커스텀 스타일을 적용할 수 있습니다.

## 사용 팁

- \\\`className\\\` prop을 통해 추가적인 Tailwind CSS 클래스를 적용할 수 있습니다.
- 폰트 굵기, 자간, 기울임, 대문자 변환 등 다양한 비색상 스타일을 커스터마이징할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">Custom Styling</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="info" className="font-bold">
            Bold Link
          </LinkButton>
          <LinkButton color="warning" className="underline decoration-2">
            Underline Link
          </LinkButton>
          <LinkButton color="primary" className="tracking-wider">
            Wide Spacing
          </LinkButton>
          <LinkButton color="danger" className="uppercase">
            Uppercase Link
          </LinkButton>
          <LinkButton color="success" className="italic">
            Italic Link
          </LinkButton>
          <LinkButton color="secondary" className="font-semibold">
            Semibold Link
          </LinkButton>
        </div>
      </div>
    </div>
}`,...(C=(E=t.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const Z=["Playground","Colors","Sizes","States","WithIcons","Examples","CustomStyling"];export{a as Colors,t as CustomStyling,l as Examples,s as Playground,o as Sizes,i as States,r as WithIcons,Z as __namedExportsOrder,Y as default};
