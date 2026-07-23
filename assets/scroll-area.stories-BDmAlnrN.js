import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./index-OJ7QbjDu.js";import{B as N}from"./button-CkQv11My.js";import{S as r,a as W}from"./scroll-area-auto-size-DfvhAHB7.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./createLucideIcon-BRUIOxYu.js";import"./index-C27WGPQh.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-CI4jWBLT.js";import"./index-jm-SPu3n.js";import"./index-Dc1_MvIw.js";import"./index-ehd_yKDV.js";const o=Array.from({length:50},(s,a)=>`문단 ${a+1}: 이것은 긴 텍스트 콘텐츠입니다. 스크롤이 필요한 긴 내용을 보여주기 위한 예시입니다. 각 문단은 충분한 길이를 가지고 있어 스크롤 영역의 동작을 확인할 수 있습니다.`).join(`

`),X=Array.from({length:30},(s,a)=>`항목 ${a+1}`),he={title:"M2/ScrollArea",component:r,parameters:{layout:"centered",docs:{description:{component:`
### 스크롤 영역 컴포넌트

ScrollArea 컴포넌트는 긴 콘텐츠를 스크롤 가능한 영역으로 표시하기 위한 컴포넌트입니다.
M2 스타일을 Radix ScrollArea 기반으로 구현했으며, 세로 및 가로 스크롤바를 선택적으로 표시할 수 있습니다.

## 주요 기능

- **세로 스크롤**: \`showVertical\` prop을 통해 세로 스크롤바 표시 여부 제어
- **가로 스크롤**: \`showHorizontal\` prop을 통해 가로 스크롤바 표시 여부 제어
- **스크롤바 테마**: \`scrollbarTheme\` prop을 통해 스크롤바 색상 테마 선택 (primary/secondary)
- **자동 크기 조절**: \`ScrollAreaAutoSize\` 컴포넌트를 통한 자동 크기 조절
- **Radix 동작 타입**: \`type\` prop으로 \`always\`, \`auto\`, \`scroll\`, \`hover\` 동작 선택
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<ScrollArea className="h-64 w-80">
  <div>긴 콘텐츠...</div>
</ScrollArea>

<ScrollArea className="h-64 w-80" scrollbarTheme="secondary">
  <div>Secondary 테마 스크롤바...</div>
</ScrollArea>

<ScrollArea className="h-64 w-80" showVertical showHorizontal>
  <div>양방향 스크롤 콘텐츠...</div>
</ScrollArea>

<ScrollAreaAutoSize className="max-h-64 w-80">
  <div>자동 크기 조절 콘텐츠...</div>
</ScrollAreaAutoSize>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{showVertical:{control:"boolean",description:"세로 스크롤바 표시 여부입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"스크롤바"}},showHorizontal:{control:"boolean",description:"가로 스크롤바 표시 여부입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"스크롤바"}},scrollbarTheme:{control:"select",options:["primary","secondary"],description:"스크롤바 색상 테마입니다. M2 lint 규칙에 맞춰 `theme` 대신 `scrollbarTheme`을 사용합니다.",table:{type:{summary:"'primary' | 'secondary'"},defaultValue:{summary:"'primary'"},category:"스타일"}},type:{control:"select",options:["always","auto","scroll","hover"],description:"Radix ScrollArea의 스크롤바 표시 동작 타입입니다.",table:{type:{summary:"'always' | 'auto' | 'scroll' | 'hover'"},defaultValue:{summary:"'always'"},category:"동작"}},viewportRef:{control:!1,description:"내부 viewport DOM에 접근하기 위한 ref입니다.",table:{type:{summary:"Ref<HTMLDivElement>"},category:"고급"}},className:{control:"text",description:"스크롤 영역 크기와 외곽 스타일을 지정하기 위한 추가 CSS 클래스입니다.",table:{type:{summary:"string"},category:"스타일"}}},args:{showVertical:!0,showHorizontal:!0,scrollbarTheme:"primary",type:"always"}},n={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal, scrollbarTheme 등을 변경해보세요.

## 사용 팁

- **ShowVertical**: \`true\`로 설정하면 세로 스크롤바가 표시됩니다.
- **ShowHorizontal**: \`true\`로 설정하면 가로 스크롤바가 표시됩니다.
- **ScrollbarTheme**: \`primary\`는 M2 primary, \`secondary\`는 회색 계열 스크롤바를 표시합니다.
- 스크롤바는 콘텐츠가 영역을 넘어갈 때 의미 있게 동작합니다.
        `}}},render:s=>e.jsx(r,{className:"border-m2-gray-3 h-64 w-80 rounded border p-4",...s,children:e.jsxs("div",{className:"min-w-[800px] pr-4 pb-4",children:[e.jsx("p",{className:"text-m2-gray-1 mb-4 text-sm font-semibold",children:"스크롤 가능한 콘텐츠"}),e.jsx("div",{className:"space-y-4",children:Array.from({length:10},(a,c)=>e.jsx("div",{className:"text-m2-secondary flex gap-4 text-sm whitespace-nowrap",children:Array.from({length:15},(l,t)=>e.jsxs("div",{className:"bg-m2-surface-hover min-w-[150px] rounded p-2",children:["항목 ",c+1,"-",t+1]},t))},c))})]})})},i={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"기본 스크롤 영역"}),e.jsx(r,{className:"border-m2-gray-3 h-64 w-80 rounded border p-4",children:e.jsxs("div",{className:"pr-4",children:[e.jsx("p",{className:"text-m2-gray-1 mb-4 text-sm font-semibold",children:"긴 텍스트 콘텐츠"}),e.jsx("div",{className:"text-m2-secondary space-y-2 text-sm whitespace-pre-line",children:o})]})})]})})},d={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"세로 스크롤 (기본)"}),e.jsx(r,{className:"border-m2-gray-3 h-64 w-80 rounded border p-4",showVertical:!0,children:e.jsxs("div",{className:"pr-4",children:[e.jsx("p",{className:"text-m2-gray-1 mb-4 text-sm font-semibold",children:"세로로 스크롤 가능한 콘텐츠"}),e.jsx("div",{className:"text-m2-secondary space-y-2 text-sm whitespace-pre-line",children:o})]})})]})})},m={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"가로 스크롤"}),e.jsx(r,{className:"border-m2-gray-3 h-48 w-80 rounded border p-4",showVertical:!1,showHorizontal:!0,children:e.jsxs("div",{className:"pb-4",children:[e.jsx("p",{className:"text-m2-gray-1 mb-4 text-sm font-semibold",children:"가로로 스크롤 가능한 콘텐츠"}),e.jsx("div",{className:"text-m2-secondary flex gap-4 text-sm whitespace-nowrap",children:Array.from({length:20},(s,a)=>e.jsxs("div",{className:"bg-m2-surface-hover min-w-[200px] rounded p-4",children:["넓은 콘텐츠 박스 ",a+1]},a))})]})})]})})},x={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"양방향 스크롤"}),e.jsx(r,{className:"border-m2-gray-3 h-64 w-80 rounded border p-4",showVertical:!0,showHorizontal:!0,children:e.jsxs("div",{className:"pr-4 pb-4",children:[e.jsx("p",{className:"text-m2-gray-1 mb-4 text-sm font-semibold",children:"세로와 가로 모두 스크롤 가능한 콘텐츠"}),e.jsx("div",{className:"space-y-4",children:Array.from({length:10},(s,a)=>e.jsx("div",{className:"text-m2-secondary flex gap-4 text-sm whitespace-nowrap",children:Array.from({length:15},(c,l)=>e.jsxs("div",{className:"bg-m2-surface-hover min-w-[150px] rounded p-2",children:["항목 ",a+1,"-",l+1]},l))},a))})]})})]})})},p={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"리스트 콘텐츠"}),e.jsx(r,{className:"border-m2-gray-3 h-64 w-80 rounded border",children:e.jsx("div",{className:"p-2",children:e.jsx("ul",{className:"space-y-1",children:X.map(s=>e.jsx("li",{className:"text-m2-gray-1 hover:bg-m2-surface-hover rounded px-3 py-2 text-sm transition-colors",children:s},s))})})})]})})},h={render:()=>{const[s,a]=U.useState(3),c="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!";return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"자동 크기 조절"}),e.jsx(W,{className:"border-m2-gray-3 max-h-[300px] max-w-[400px] rounded border",children:e.jsx("div",{className:"p-4",children:Array.from({length:s},(l,t)=>e.jsx("p",{className:"text-m2-secondary mb-4 text-sm",children:c},t))})})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx(N,{color:"danger",size:"md",onClick:()=>a(l=>Math.max(0,l-1)),disabled:s===0,children:"문단 제거"}),e.jsx(N,{color:"primary",size:"md",onClick:()=>a(l=>Math.min(10,l+1)),disabled:s===10,children:"문단 추가"})]})]})}},y={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"스크롤바 없음"}),e.jsx(r,{className:"border-m2-gray-3 h-64 w-80 rounded border p-4",showVertical:!1,showHorizontal:!1,children:e.jsx("div",{className:"pr-4",children:e.jsx("div",{className:"text-m2-secondary space-y-2 text-sm whitespace-pre-line",children:o})})})]})})},f={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"테마 비교"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-m2-secondary text-xs",children:"Primary 테마"}),e.jsx(r,{className:"border-m2-gray-3 h-64 w-80 rounded border p-4",children:e.jsx("div",{className:"pr-4",children:e.jsx("div",{className:"text-m2-secondary space-y-2 text-sm whitespace-pre-line",children:o})})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-m2-secondary text-xs",children:"Secondary 테마"}),e.jsx(r,{className:"border-m2-gray-3 h-64 w-80 rounded border p-4",scrollbarTheme:"secondary",children:e.jsx("div",{className:"pr-4",children:e.jsx("div",{className:"text-m2-secondary space-y-2 text-sm whitespace-pre-line",children:o})})})]})]})]})})},v={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-m2-gray-1 text-sm font-semibold",children:"다양한 크기"}),e.jsx("div",{className:"flex flex-col gap-4",children:[["h-32","작은 크기 (h-32)"],["h-48","중간 크기 (h-48)"],["h-64","큰 크기 (h-64)"]].map(([s,a])=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-m2-secondary text-xs",children:a}),e.jsx(r,{className:`${s} border-m2-gray-3 w-80 rounded border p-4`,children:e.jsx("div",{className:"pr-4",children:e.jsx("div",{className:"text-m2-secondary space-y-2 text-sm whitespace-pre-line",children:o})})})]},s))})]})})};var u,g,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal, scrollbarTheme 등을 변경해보세요.

## 사용 팁

- **ShowVertical**: \\\`true\\\`로 설정하면 세로 스크롤바가 표시됩니다.
- **ShowHorizontal**: \\\`true\\\`로 설정하면 가로 스크롤바가 표시됩니다.
- **ScrollbarTheme**: \\\`primary\\\`는 M2 primary, \\\`secondary\\\`는 회색 계열 스크롤바를 표시합니다.
- 스크롤바는 콘텐츠가 영역을 넘어갈 때 의미 있게 동작합니다.
        \`
      }
    }
  },
  render: args => <ScrollArea className="border-m2-gray-3 h-64 w-80 rounded border p-4" {...args}>
      <div className="min-w-[800px] pr-4 pb-4">
        <p className="text-m2-gray-1 mb-4 text-sm font-semibold">스크롤 가능한 콘텐츠</p>
        <div className="space-y-4">
          {Array.from({
          length: 10
        }, (_, row) => <div key={row} className="text-m2-secondary flex gap-4 text-sm whitespace-nowrap">
              {Array.from({
            length: 15
          }, (_, col) => <div key={col} className="bg-m2-surface-hover min-w-[150px] rounded p-2">
                  항목 {row + 1}-{col + 1}
                </div>)}
            </div>)}
        </div>
      </div>
    </ScrollArea>
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,j,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">기본 스크롤 영역</h3>
        <ScrollArea className="border-m2-gray-3 h-64 w-80 rounded border p-4">
          <div className="pr-4">
            <p className="text-m2-gray-1 mb-4 text-sm font-semibold">긴 텍스트 콘텐츠</p>
            <div className="text-m2-secondary space-y-2 text-sm whitespace-pre-line">
              {longText}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var A,z,T;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">세로 스크롤 (기본)</h3>
        <ScrollArea className="border-m2-gray-3 h-64 w-80 rounded border p-4" showVertical>
          <div className="pr-4">
            <p className="text-m2-gray-1 mb-4 text-sm font-semibold">세로로 스크롤 가능한 콘텐츠</p>
            <div className="text-m2-secondary space-y-2 text-sm whitespace-pre-line">
              {longText}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,H,_;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">가로 스크롤</h3>
        <ScrollArea className="border-m2-gray-3 h-48 w-80 rounded border p-4" showVertical={false} showHorizontal>
          <div className="pb-4">
            <p className="text-m2-gray-1 mb-4 text-sm font-semibold">가로로 스크롤 가능한 콘텐츠</p>
            <div className="text-m2-secondary flex gap-4 text-sm whitespace-nowrap">
              {Array.from({
              length: 20
            }, (_, index) => <div key={index} className="bg-m2-surface-hover min-w-[200px] rounded p-4">
                  넓은 콘텐츠 박스 {index + 1}
                </div>)}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(_=(H=m.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var k,M,q;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">양방향 스크롤</h3>
        <ScrollArea className="border-m2-gray-3 h-64 w-80 rounded border p-4" showVertical showHorizontal>
          <div className="pr-4 pb-4">
            <p className="text-m2-gray-1 mb-4 text-sm font-semibold">
              세로와 가로 모두 스크롤 가능한 콘텐츠
            </p>
            <div className="space-y-4">
              {Array.from({
              length: 10
            }, (_, row) => <div key={row} className="text-m2-secondary flex gap-4 text-sm whitespace-nowrap">
                  {Array.from({
                length: 15
              }, (_, col) => <div key={col} className="bg-m2-surface-hover min-w-[150px] rounded p-2">
                      항목 {row + 1}-{col + 1}
                    </div>)}
                </div>)}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(q=(M=x.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var B,C,L;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">리스트 콘텐츠</h3>
        <ScrollArea className="border-m2-gray-3 h-64 w-80 rounded border">
          <div className="p-2">
            <ul className="space-y-1">
              {longList.map(item => <li key={item} className="text-m2-gray-1 hover:bg-m2-surface-hover rounded px-3 py-2 text-sm transition-colors">
                  {item}
                </li>)}
            </ul>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var D,R,E;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(3);
    const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';
    return <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-m2-gray-1 text-sm font-semibold">자동 크기 조절</h3>
          <ScrollAreaAutoSize className="border-m2-gray-3 max-h-[300px] max-w-[400px] rounded border">
            <div className="p-4">
              {Array.from({
              length: count
            }, (_, index) => <p key={index} className="text-m2-secondary mb-4 text-sm">
                  {lorem}
                </p>)}
            </div>
          </ScrollAreaAutoSize>
        </div>
        <div className="flex justify-center gap-2">
          <Button color="danger" size="md" onClick={() => setCount(current => Math.max(0, current - 1))} disabled={count === 0}>
            문단 제거
          </Button>
          <Button color="primary" size="md" onClick={() => setCount(current => Math.min(10, current + 1))} disabled={count === 10}>
            문단 추가
          </Button>
        </div>
      </div>;
  }
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var P,$,O;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">스크롤바 없음</h3>
        <ScrollArea className="border-m2-gray-3 h-64 w-80 rounded border p-4" showVertical={false} showHorizontal={false}>
          <div className="pr-4">
            <div className="text-m2-secondary space-y-2 text-sm whitespace-pre-line">
              {longText}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(O=($=y.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var F,G,I;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">테마 비교</h3>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-m2-secondary text-xs">Primary 테마</p>
            <ScrollArea className="border-m2-gray-3 h-64 w-80 rounded border p-4">
              <div className="pr-4">
                <div className="text-m2-secondary space-y-2 text-sm whitespace-pre-line">
                  {longText}
                </div>
              </div>
            </ScrollArea>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-m2-secondary text-xs">Secondary 테마</p>
            <ScrollArea className="border-m2-gray-3 h-64 w-80 rounded border p-4" scrollbarTheme="secondary">
              <div className="pr-4">
                <div className="text-m2-secondary space-y-2 text-sm whitespace-pre-line">
                  {longText}
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
}`,...(I=(G=f.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-m2-gray-1 text-sm font-semibold">다양한 크기</h3>
        <div className="flex flex-col gap-4">
          {[['h-32', '작은 크기 (h-32)'], ['h-48', '중간 크기 (h-48)'], ['h-64', '큰 크기 (h-64)']].map(([height, label]) => <div key={height} className="flex flex-col gap-1">
              <p className="text-m2-secondary text-xs">{label}</p>
              <ScrollArea className={\`\${height} border-m2-gray-3 w-80 rounded border p-4\`}>
                <div className="pr-4">
                  <div className="text-m2-secondary space-y-2 text-sm whitespace-pre-line">
                    {longText}
                  </div>
                </div>
              </ScrollArea>
            </div>)}
        </div>
      </div>
    </div>
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ye=["Playground","Basic","Vertical","Horizontal","Both","List","Autosize","NoScrollbars","Themes","DifferentSizes"];export{h as Autosize,i as Basic,x as Both,v as DifferentSizes,m as Horizontal,p as List,y as NoScrollbars,n as Playground,f as Themes,d as Vertical,ye as __namedExportsOrder,he as default};
