import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./button-CkQv11My.js";import{r as i}from"./index-OJ7QbjDu.js";import{c as ro}from"./index-jm-SPu3n.js";import{u as je,b as to,e as no}from"./index-C27WGPQh.js";import{c as be,R as ao,W as so,C as lo,T as io,D as co,P as mo,O as po,a as go,b as we}from"./index-_lE5Okb1.js";import{c as g}from"./utils-CDN07tui.js";import{S as xo}from"./scroll-area-auto-size-DfvhAHB7.js";import{c as uo}from"./client-Bk-rH60G.js";import{C as ke}from"./circle-x-4mJeKR0t.js";import{c as yo}from"./createLucideIcon-BRUIOxYu.js";import{T as Be}from"./triangle-alert-mdoppzDT.js";import{C as _e}from"./circle-check-C4Lhm-rS.js";import{I as P}from"./info-CBqhzTkO.js";import"./index-C2vczdB5.js";import"./spinner-CSECq83x.js";import"./loader-circle-CCwkWIV8.js";import"./index-DwwQKGe_.js";import"./index-dMEG8esF.js";import"./index-D15pND6U.js";import"./index-BilTj9-P.js";import"./index-DAVdU-vC.js";import"./index-Dc1_MvIw.js";import"./index-BVTTSdsW.js";import"./index-CI4jWBLT.js";import"./index-ehd_yKDV.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],Se=yo("octagon-alert",fo);var Te="AlertDialog",[ho]=ro(Te,[be]),m=be(),Ee=o=>{const{__scopeAlertDialog:r,...t}=o,n=m(r);return e.jsx(ao,{...n,...t,modal:!0})};Ee.displayName=Te;var vo="AlertDialogTrigger",Ao=i.forwardRef((o,r)=>{const{__scopeAlertDialog:t,...n}=o,s=m(t);return e.jsx(go,{...s,...n,ref:r})});Ao.displayName=vo;var Co="AlertDialogPortal",Pe=o=>{const{__scopeAlertDialog:r,...t}=o,n=m(r);return e.jsx(mo,{...n,...t})};Pe.displayName=Co;var Do="AlertDialogOverlay",Re=i.forwardRef((o,r)=>{const{__scopeAlertDialog:t,...n}=o,s=m(t);return e.jsx(po,{...s,...n,ref:r})});Re.displayName=Do;var y="AlertDialogContent",[No,jo]=ho(y),bo=no("AlertDialogContent"),Oe=i.forwardRef((o,r)=>{const{__scopeAlertDialog:t,children:n,...s}=o,x=m(t),c=i.useRef(null),h=je(r,c),f=i.useRef(null);return e.jsx(so,{contentName:y,titleName:Ie,docsSlug:"alert-dialog",children:e.jsx(No,{scope:t,cancelRef:f,children:e.jsxs(lo,{role:"alertdialog",...x,...s,ref:h,onOpenAutoFocus:to(s.onOpenAutoFocus,d=>{var u;d.preventDefault(),(u=f.current)==null||u.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[e.jsx(bo,{children:n}),e.jsx(_o,{contentRef:c})]})})})});Oe.displayName=y;var Ie="AlertDialogTitle",Me=i.forwardRef((o,r)=>{const{__scopeAlertDialog:t,...n}=o,s=m(t);return e.jsx(io,{...s,...n,ref:r})});Me.displayName=Ie;var ze="AlertDialogDescription",We=i.forwardRef((o,r)=>{const{__scopeAlertDialog:t,...n}=o,s=m(t);return e.jsx(co,{...s,...n,ref:r})});We.displayName=ze;var wo="AlertDialogAction",ko=i.forwardRef((o,r)=>{const{__scopeAlertDialog:t,...n}=o,s=m(t);return e.jsx(we,{...s,...n,ref:r})});ko.displayName=wo;var He="AlertDialogCancel",Bo=i.forwardRef((o,r)=>{const{__scopeAlertDialog:t,...n}=o,{cancelRef:s}=jo(He,t),x=m(t),c=je(r,s);return e.jsx(we,{...x,...n,ref:c})});Bo.displayName=He;var _o=({contentRef:o})=>{const r=`\`${y}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${y}\` by passing a \`${ze}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${y}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return i.useEffect(()=>{var n;document.getElementById((n=o.current)==null?void 0:n.getAttribute("aria-describedby"))||console.warn(r)},[r,o]),null},So=Ee,To=Pe,Eo=Re,Po=Oe,Ro=Me,Oo=We;function Le(o){return e.jsx(So,{"data-slot":"alert-dialog",...o})}const $e=Le;function Ve(o){return e.jsx(To,{"data-slot":"alert-dialog-portal",...o})}Le.__docgenInfo={description:"",methods:[],displayName:"AlertDialogRoot"};Ve.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};function qe({className:o,...r}){return e.jsx(Eo,{"data-slot":"alert-dialog-overlay",className:g("z-m2-overlay fixed inset-0 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",o),...r})}function Fe({className:o,overlayClassName:r,children:t,...n}){return e.jsxs(Ve,{children:[e.jsx(qe,{className:r}),e.jsx(Po,{"data-slot":"alert-dialog-content",className:g("z-m2-dialog fixed top-[50%] left-[50%] flex max-h-[calc(100%-2rem)] w-fit max-w-[calc(100%-2rem)] min-w-[min(630px,calc(100%-2rem))] translate-x-[-50%] translate-y-[-50%] flex-col overflow-hidden rounded-xl border-0 bg-white shadow-[0_0_6px_0_rgba(0,0,0,0.45)] duration-200 outline-none","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",o),...n,children:t})]})}function Ge({className:o,...r}){return e.jsx("div",{"data-slot":"alert-dialog-header",className:g("flex flex-col gap-2 px-8 pt-8 pb-0 text-left",o),...r})}function Ue({className:o,children:r,showVertical:t=!0,showHorizontal:n=!1,type:s="auto",scrollbarTheme:x,...c}){return e.jsx("div",{"data-slot":"alert-dialog-body-container",className:"grow overflow-hidden pt-8",children:e.jsx(xo,{"data-slot":"alert-dialog-body",className:g("h-full pr-8 pb-8 pl-8 whitespace-pre-line",o),showVertical:t,showHorizontal:n,scrollbarTheme:x,type:s,...c,children:r})})}function Xe({className:o,...r}){return e.jsx("div",{"data-slot":"alert-dialog-footer",className:g("z-m2-dialog relative flex shrink-0 items-center justify-end gap-2 px-8 pt-4 pb-8",o),...r})}function Ye({className:o,...r}){return e.jsx(Ro,{"data-slot":"alert-dialog-title",className:g("text-m2-gray-0 flex items-center gap-2 text-2xl font-bold",o),...r})}function Je({className:o,...r}){return e.jsx(Oo,{"data-slot":"alert-dialog-description",className:g("text-m2-secondary text-base whitespace-pre-line",o),...r})}qe.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};Fe.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent",props:{overlayClassName:{required:!1,tsType:{name:"string"},description:""}}};Ge.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};Ue.__docgenInfo={description:"",methods:[],displayName:"AlertDialogBody",props:{showVertical:{defaultValue:{value:"true",computed:!1},required:!1},showHorizontal:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};Xe.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};Ye.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};Je.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};const Io={primary:P,info:P,success:_e,warning:Be,danger:Se,error:ke},Mo={primary:"text-m2-primary",info:"text-m2-info",success:"text-m2-success",warning:"text-m2-warning",danger:"text-m2-danger",error:"text-m2-danger"},zo={primary:"primary",info:"primary",success:"success",warning:"warning",danger:"danger",error:"danger"};function Wo({message:o,options:r,onExited:t}){const[n,s]=i.useState(!0),[x,c]=i.useState(!1),h=i.useRef(!1),f=i.useCallback(()=>{var p;h.current||(h.current=!0,(p=r.onClose)==null||p.call(r))},[r]),d=i.useCallback(()=>{s(!1),f(),queueMicrotask(t)},[f,t]),u=i.useMemo(()=>({close:d}),[d]),Ke=p=>{if(p){s(!0);return}d()},Qe=async()=>{if(!r.onCancel){u.close();return}await r.onCancel(u)},Ze=async()=>{if(!r.onConfirm){u.close();return}const p=r.onConfirm(u);if(!(!p||typeof p.then!="function")){c(!0);try{await p}finally{c(!1)}}},O=r.theme?Io[r.theme]:void 0,eo=r.theme?Mo[r.theme]:void 0,oo=r.theme?zo[r.theme]:void 0;return e.jsx($e,{open:n,onOpenChange:Ke,children:e.jsxs(Fe,{className:g(r.className,r.class),children:[(o.title||o.description)&&e.jsxs(Ge,{children:[o.title&&e.jsxs(Ye,{className:eo,children:[O&&e.jsx(O,{className:"size-6 shrink-0","aria-hidden":"true"}),e.jsx("span",{children:o.title})]}),o.description&&e.jsx(Je,{children:o.description})]}),o.body&&e.jsx(Ue,{children:o.body}),e.jsxs(Xe,{children:[o.cancel&&e.jsx(a,{variant:"outlined",color:"secondary",size:"md",onClick:Qe,children:o.cancel}),o.confirm&&e.jsx(a,{variant:"filled",color:oo,size:"md",loading:x,onClick:Ze,children:o.confirm})]})]})})}function l(o,r={}){if(typeof document>"u")return;const t=document.createElement("div");t.dataset.alertDialogRoot="",document.body.append(t);let n=uo.createRoot(t);const s=()=>{n==null||n.unmount(),n=null,t.remove()};return n.render(e.jsx(Wo,{message:o,options:r,onExited:s})),{close:s}}const pr={title:"M2/AlertDialog",component:$e,parameters:{layout:"centered",docs:{description:{component:`
### AlertDialog 컴포넌트

AlertDialog는 사용자에게 중요한 정보를 전달하거나 확인이 필요한 작업을 수행할 때 사용하는 다이얼로그 컴포넌트입니다.
프로그래매틱 호출 흐름을 React/Radix 기반으로 구현했습니다.

## 주요 기능

- **프로그래매틱 호출**: \`openAlertDialog()\` 함수를 통해 컴포넌트 외부에서 호출 가능
- **ReactNode 지원**: 제목, 설명, 본문, 버튼 텍스트에 문자열 또는 ReactNode 사용 가능
- **비동기 처리**: \`onConfirm\` 핸들러에서 Promise를 반환하면 자동으로 로딩 상태 표시
- **핸들러 지원**: \`onClose\`, \`onConfirm\`, \`onCancel\` 핸들러 제공
- **오버레이 제어**: \`overlayControl\`을 통해 다이얼로그 닫기 제어 가능
- **테마 지원**: \`primary\`, \`info\`, \`success\`, \`warning\`, \`danger\`, \`error\` 테마 제공

## 사용 예시

\`\`\`tsx
import { openAlertDialog } from '../alert-dialog';

openAlertDialog({
  title: '알림',
  description: '작업이 완료되었습니다.',
  cancel: '취소',
  confirm: '확인',
});

openAlertDialog(
  {
    title: '삭제 확인',
    description: '정말 삭제하시겠습니까?',
    body: <p>이 작업은 되돌릴 수 없습니다.</p>,
    cancel: '취소',
    confirm: '삭제',
  },
  {
    onConfirm: async (overlayControl) => {
      await deleteData();
      overlayControl.close();
    },
    onCancel: (overlayControl) => {
      overlayControl.close();
    },
  },
);
\`\`\`
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"AlertDialog primitive의 열림 상태입니다. 일반 사용에서는 openAlertDialog를 사용합니다.",table:{type:{summary:"boolean"},category:"상태"}},defaultOpen:{control:"boolean",description:"AlertDialog primitive의 초기 열림 상태입니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"상태"}},onOpenChange:{action:"openChange",description:"열림 상태가 변경될 때 호출되는 콜백입니다.",table:{type:{summary:"(open: boolean) => void"},category:"이벤트"}}}},R=o=>new Promise(r=>window.setTimeout(r,o)),v={name:"기본",parameters:{docs:{description:{story:"`theme: primary` 기본 알림입니다. 브랜드 색상 제목과 정보 아이콘이 표시되며 취소·확인 두 개의 버튼을 제공합니다."}}},render:()=>e.jsx(a,{onClick:()=>l({title:"작업이 완료되었습니다",description:"요청하신 작업이 성공적으로 완료되었습니다.",cancel:"취소",confirm:"확인"},{theme:"primary"}),children:"기본 AlertDialog 열기"})},A={name:"성공",parameters:{docs:{description:{story:"`theme: success` 성공 알림입니다. 작업이 정상적으로 끝났음을 알릴 때 사용합니다. 설명은 줄바꿈(`\\n`)을 그대로 표시합니다."}}},render:()=>e.jsx(a,{color:"success",onClick:()=>l({title:"변경사항이 저장되었습니다",description:`모든 변경사항이 성공적으로 저장되었습니다.
이제 안전하게 페이지를 나가실 수 있습니다.`,cancel:"계속 편집",confirm:"완료"},{theme:"success"}),children:"성공 AlertDialog 열기"})},C={name:"경고",parameters:{docs:{description:{story:"`theme: warning` 경고 알림입니다. 사용자가 한 번 더 확인이 필요한 작업에 사용합니다."}}},render:()=>e.jsx(a,{color:"warning",onClick:()=>l({title:"계정 로그아웃",description:`현재 계정에서 로그아웃 하시겠습니까?
다시 로그인하려면 인증 정보가 필요합니다.`,cancel:"계속 사용하기",confirm:"로그아웃"},{theme:"warning"}),children:"경고 AlertDialog 열기"})},D={name:"위험",parameters:{docs:{description:{story:"`theme: danger` 위험 알림입니다. 되돌릴 수 없는 삭제 등 파괴적인 작업을 확인할 때 사용합니다."}}},render:()=>e.jsx(a,{color:"danger",onClick:()=>l({title:"정말 삭제하시겠습니까?",description:`이 작업은 되돌릴 수 없습니다.
선택한 데이터가 영구적으로 삭제됩니다.`,cancel:"취소",confirm:"삭제하기"},{theme:"danger"}),children:"위험 AlertDialog 열기"})},N={name:"단일 버튼",parameters:{docs:{description:{story:"`cancel`을 생략하면 확인 버튼 하나만 표시됩니다. 단순 안내 메시지에 사용합니다."}}},render:()=>e.jsx(a,{onClick:()=>l({title:"이용권 안내",description:`업로드한 모든 평가문서는 문서당 1건씩 차감됩니다.
결제일로부터 1년 이내 이용 가능합니다.`,confirm:"확인"},{theme:"primary"}),children:"단일 버튼 AlertDialog 열기"})},j={name:"복잡한 내용",parameters:{docs:{description:{story:"`body`에 임의의 ReactNode를 전달해 목록 등 풍부한 본문을 표시할 수 있습니다. 본문 영역은 길어지면 스크롤됩니다."}}},render:()=>e.jsx(a,{onClick:()=>l({title:"이용권 안내",body:e.jsxs("ul",{className:"text-m2-gray-1 ml-1 list-disc space-y-2 pl-5 text-base",children:[e.jsx("li",{children:"업로드한 모든 평가문서는 문서당 1건씩 차감합니다."}),e.jsx("li",{children:"결제일로부터 1년 이내 이용 가능합니다."}),e.jsx("li",{children:"현금영수증 승인 번호로 자진 발급분 등록을 하실 수 있습니다."})]}),confirm:"확인"},{theme:"primary"}),children:"복잡한 내용 AlertDialog 열기"})},b={name:"사용법: openAlertDialog 함수",parameters:{docs:{description:{story:`\`openAlertDialog(message, options)\`로 컴포넌트 외부에서 프로그래매틱하게 호출합니다.

\`\`\`tsx
import { openAlertDialog } from '@/shared/ui/m2/alert-dialog';

openAlertDialog(
  {
    title: '정말 삭제하시겠습니까?',
    description: '이 작업은 되돌릴 수 없습니다.',
    cancel: '취소',
    confirm: '삭제하기',
  },
  {
    theme: 'danger',
    onConfirm: async (overlay) => {
      await deleteItem();
      overlay.close();
    },
    onCancel: (overlay) => overlay.close(),
  },
);
\`\`\`

- \`onConfirm\`이 Promise를 반환하면 확인 버튼이 자동으로 로딩 상태가 됩니다.
- \`overlay.close()\`로 다이얼로그를 직접 닫습니다.`}}},render:()=>e.jsx(a,{onClick:()=>l({title:"정말 삭제하시겠습니까?",description:"이 작업은 되돌릴 수 없습니다.",cancel:"취소",confirm:"삭제하기"},{theme:"danger",onCancel:o=>{o.close()},onConfirm:async o=>{await R(1200),window.alert("삭제되었습니다!"),o.close()}}),children:"openAlertDialog 호출하기"})},w={name:"핸들러 포함",render:()=>e.jsx(a,{onClick:()=>l({title:"설정 저장",description:"변경사항을 저장하시겠습니까?",body:e.jsx("p",{className:"text-m2-secondary text-sm",children:"저장하지 않으면 변경사항이 손실됩니다."}),cancel:"취소",confirm:"저장"},{onClose:()=>{},onCancel:o=>{window.alert("취소되었습니다"),o.close()},onConfirm:o=>{window.alert("저장되었습니다!"),o.close()}}),children:"핸들러가 있는 AlertDialog 열기"})},k={name:"비동기 처리",render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{onClick:()=>l({title:"데이터 전송",description:"서버로 데이터를 전송하시겠습니까?",body:e.jsxs("div",{className:"text-m2-secondary text-sm",children:[e.jsx("p",{children:"전송될 데이터: 사용자 정보, 설정 값"}),e.jsx("p",{className:"mt-2 text-xs",children:"확인 버튼을 누르면 로딩 상태를 확인할 수 있습니다."})]}),cancel:"취소",confirm:"전송"},{onCancel:o=>{o.close()},onConfirm:async o=>{await R(2e3),window.alert("데이터가 성공적으로 전송되었습니다!"),o.close()}}),children:"비동기 처리 AlertDialog 열기"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"확인 버튼을 누르면 2초간 로딩 상태가 표시됩니다."})]})},B={name:"커스텀 버튼 텍스트",render:()=>e.jsx(a,{onClick:()=>l({title:"로그아웃",description:"정말 로그아웃 하시겠습니까?",body:e.jsx("p",{className:"text-m2-secondary text-sm",children:"로그아웃하면 현재 작업 중인 내용이 저장되지 않을 수 있습니다."}),cancel:e.jsx("span",{className:"text-m2-secondary",children:"아니오, 계속하기"}),confirm:e.jsx("span",{className:"font-semibold",children:"예, 로그아웃"})},{theme:"danger"}),children:"커스텀 버튼 AlertDialog 열기"})},_={name:"여러 단계",render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{onClick:()=>l({title:"첫 번째 단계",description:"첫 번째 확인이 필요합니다.",body:e.jsx("p",{className:"text-m2-secondary text-sm",children:"확인 버튼을 누르면 다음 단계로 진행됩니다."}),cancel:"취소",confirm:"다음"},{onConfirm:o=>{o.close(),window.setTimeout(()=>{l({title:"두 번째 단계",description:"두 번째 확인이 필요합니다.",body:e.jsx("p",{className:"text-m2-secondary text-sm",children:"확인 버튼을 누르면 작업이 완료됩니다."}),cancel:"취소",confirm:"완료"},{onConfirm:r=>{window.alert("모든 단계가 완료되었습니다!"),r.close()}})},300)}}),children:"여러 단계 AlertDialog 열기"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"확인 버튼을 누르면 다음 AlertDialog가 열립니다."})]})},S={name:"긴 내용 (스크롤)",render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{onClick:()=>l({title:"서비스 이용약관",description:"아래 약관을 확인하시고 동의해주세요.",body:e.jsx("div",{className:"text-m2-gray-1 space-y-4 text-sm",children:[["제1조 (목적)","이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다."],["제2조 (정의)","서비스란 회사가 제공하는 모든 서비스를 의미하며, 이용자는 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다."],["제3조 (약관의 게시와 개정)","회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다."],["제4조 (서비스의 제공 및 변경)","회사는 정보 제공 서비스, 커뮤니티 서비스, 전자상거래 서비스 및 기타 회사가 정하는 서비스를 제공합니다."],["제5조 (서비스의 중단)","회사는 설비의 보수점검, 교체 및 고장 등의 사유가 발생한 경우 서비스 제공을 일시적으로 중단할 수 있습니다."],["제6조 (회원가입)","이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 회원가입을 신청합니다."]].map(([o,r])=>e.jsxs("section",{children:[e.jsx("h4",{className:"text-m2-gray-0 font-semibold",children:o}),e.jsx("p",{className:"mt-2",children:r})]},o))}),cancel:"취소",confirm:"동의"},{className:"h-[500px]"}),children:"긴 내용 AlertDialog 열기"}),e.jsx("p",{className:"text-m2-secondary text-xs",children:"본문이 길어서 스크롤이 생깁니다."})]})},T={name:"모든 테마",render:()=>{const o=(r,t,n,s="확인")=>l({title:t,description:n,cancel:r==="primary"||r==="warning"||r==="danger"?"취소":"닫기",confirm:s},{theme:r});return e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-m2-gray-0 mb-3 text-lg font-bold",children:"AlertDialog 테마별 스타일"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"상황에 맞는 다양한 AlertDialog 테마를 확인할 수 있습니다."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-m2-gray-1 mb-2 text-sm font-semibold",children:"기본 테마"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx(a,{onClick:()=>o("primary","알림","일반적인 알림 메시지입니다."),children:"기본"}),e.jsxs(a,{onClick:()=>o("info","정보","중요한 정보를 알려드립니다."),children:[e.jsx(P,{className:"size-4"}),"정보"]}),e.jsxs(a,{color:"success",onClick:()=>o("success","성공","작업이 성공적으로 완료되었습니다!"),children:[e.jsx(_e,{className:"size-4"}),"성공"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-m2-gray-1 mb-2 text-sm font-semibold",children:"주의 테마"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(a,{color:"warning",onClick:()=>o("warning","경고","이 작업은 주의가 필요합니다.","계속"),children:[e.jsx(Be,{className:"size-4"}),"경고"]}),e.jsxs(a,{color:"danger",onClick:()=>o("danger","위험","이 작업은 되돌릴 수 없습니다!","삭제"),children:[e.jsx(Se,{className:"size-4"}),"위험"]}),e.jsxs(a,{color:"danger",onClick:()=>o("error","오류","작업 중 오류가 발생했습니다.","다시 시도"),children:[e.jsx(ke,{className:"size-4"}),"에러"]})]})]})]}),e.jsxs("div",{className:"border-m2-surface bg-m2-surface-hover space-y-2 rounded-lg border p-4",children:[e.jsx("p",{className:"text-m2-gray-0 text-xs font-semibold",children:"사용 가이드"}),e.jsxs("ul",{className:"text-m2-gray-1 list-disc space-y-1 pl-5 text-xs",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primary:"})," 일반적인 알림이나 확인이 필요할 때"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Info:"})," 사용자에게 정보를 전달할 때"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success:"})," 작업이 성공적으로 완료되었을 때"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Warning:"})," 주의가 필요한 작업을 진행할 때"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Danger:"})," 되돌릴 수 없는 위험한 작업을 진행할 때"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error:"})," 오류가 발생했을 때"]})]})]})]})}},E={name:"모든 예시",render:()=>e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-m2-gray-0 mb-3 text-lg font-bold",children:"AlertDialog 모든 예시"}),e.jsx("p",{className:"text-m2-secondary text-sm",children:"다양한 AlertDialog 사용 예시를 확인할 수 있습니다."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-m2-gray-1 mb-2 text-sm font-semibold",children:"기본 사용법"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(a,{onClick:()=>l({title:"알림",description:"이것은 기본 AlertDialog입니다.",cancel:"취소",confirm:"확인"}),children:"기본"}),e.jsx(a,{onClick:()=>l({title:"작업 완료",description:"요청하신 작업이 성공적으로 완료되었습니다.",body:e.jsx("p",{className:"text-m2-secondary text-sm",children:"파일 업로드, 데이터 검증, 저장 완료"}),cancel:"닫기",confirm:"확인"}),children:"본문 포함"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-m2-gray-1 mb-2 text-sm font-semibold",children:"비동기 처리"}),e.jsx(a,{className:"w-full",onClick:()=>l({title:"데이터 전송",description:"서버로 데이터를 전송하시겠습니까?",cancel:"취소",confirm:"전송"},{onConfirm:async o=>{await R(2e3),window.alert("전송 완료!"),o.close()}}),children:"비동기 작업"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-m2-gray-1 mb-2 text-sm font-semibold",children:"다양한 스타일"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx(a,{color:"success",onClick:()=>l({title:"성공",description:"작업이 성공적으로 완료되었습니다!",cancel:"닫기",confirm:"확인"},{theme:"success"}),children:"성공"}),e.jsx(a,{color:"warning",onClick:()=>l({title:"경고",description:"이 작업은 주의가 필요합니다.",cancel:"취소",confirm:"계속 진행"},{theme:"warning"}),children:"경고"}),e.jsx(a,{color:"danger",onClick:()=>l({title:"삭제 확인",description:"이 작업은 되돌릴 수 없습니다.",cancel:"취소",confirm:"삭제"},{theme:"danger"}),children:"삭제"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-m2-gray-1 mb-2 text-sm font-semibold",children:"기타"}),e.jsx(a,{className:"w-full",onClick:()=>l({title:"긴 내용",description:"본문이 길어서 스크롤이 생깁니다.",body:e.jsx("div",{className:"space-y-2",children:Array.from({length:20},(o,r)=>e.jsxs("p",{className:"text-m2-gray-1 text-sm",children:[r+1,". 긴 내용의 예시입니다. 스크롤을 확인하세요."]},r))}),cancel:"취소",confirm:"확인"},{className:"h-[500px]"}),children:"긴 내용 (스크롤)"})]})]}),e.jsx("div",{className:"border-m2-info bg-m2-info-tint rounded-lg border p-3",children:e.jsxs("p",{className:"text-m2-deep-blue-2 text-xs",children:[e.jsx("strong",{children:"참고:"})," AlertDialog는 openAlertDialog() 함수를 통해 프로그래매틱하게 열 수 있으며, 비동기 처리 시 자동으로 로딩 상태를 표시합니다."]})})]})};var I,M,z;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '\`theme: primary\` 기본 알림입니다. 브랜드 색상 제목과 정보 아이콘이 표시되며 취소·확인 두 개의 버튼을 제공합니다.'
      }
    }
  },
  render: () => <Button onClick={() => openAlertDialog({
    title: '작업이 완료되었습니다',
    description: '요청하신 작업이 성공적으로 완료되었습니다.',
    cancel: '취소',
    confirm: '확인'
  }, {
    theme: 'primary'
  })}>
      기본 AlertDialog 열기
    </Button>
}`,...(z=(M=v.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var W,H,L;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '성공',
  parameters: {
    docs: {
      description: {
        story: '\`theme: success\` 성공 알림입니다. 작업이 정상적으로 끝났음을 알릴 때 사용합니다. 설명은 줄바꿈(\`\\\\n\`)을 그대로 표시합니다.'
      }
    }
  },
  render: () => <Button color="success" onClick={() => openAlertDialog({
    title: '변경사항이 저장되었습니다',
    description: '모든 변경사항이 성공적으로 저장되었습니다.\\n이제 안전하게 페이지를 나가실 수 있습니다.',
    cancel: '계속 편집',
    confirm: '완료'
  }, {
    theme: 'success'
  })}>
      성공 AlertDialog 열기
    </Button>
}`,...(L=(H=A.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var $,V,q;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '경고',
  parameters: {
    docs: {
      description: {
        story: '\`theme: warning\` 경고 알림입니다. 사용자가 한 번 더 확인이 필요한 작업에 사용합니다.'
      }
    }
  },
  render: () => <Button color="warning" onClick={() => openAlertDialog({
    title: '계정 로그아웃',
    description: '현재 계정에서 로그아웃 하시겠습니까?\\n다시 로그인하려면 인증 정보가 필요합니다.',
    cancel: '계속 사용하기',
    confirm: '로그아웃'
  }, {
    theme: 'warning'
  })}>
      경고 AlertDialog 열기
    </Button>
}`,...(q=(V=C.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var F,G,U;D.parameters={...D.parameters,docs:{...(F=D.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '위험',
  parameters: {
    docs: {
      description: {
        story: '\`theme: danger\` 위험 알림입니다. 되돌릴 수 없는 삭제 등 파괴적인 작업을 확인할 때 사용합니다.'
      }
    }
  },
  render: () => <Button color="danger" onClick={() => openAlertDialog({
    title: '정말 삭제하시겠습니까?',
    description: '이 작업은 되돌릴 수 없습니다.\\n선택한 데이터가 영구적으로 삭제됩니다.',
    cancel: '취소',
    confirm: '삭제하기'
  }, {
    theme: 'danger'
  })}>
      위험 AlertDialog 열기
    </Button>
}`,...(U=(G=D.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var X,Y,J;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '단일 버튼',
  parameters: {
    docs: {
      description: {
        story: '\`cancel\`을 생략하면 확인 버튼 하나만 표시됩니다. 단순 안내 메시지에 사용합니다.'
      }
    }
  },
  render: () => <Button onClick={() => openAlertDialog({
    title: '이용권 안내',
    description: '업로드한 모든 평가문서는 문서당 1건씩 차감됩니다.\\n결제일로부터 1년 이내 이용 가능합니다.',
    confirm: '확인'
  }, {
    theme: 'primary'
  })}>
      단일 버튼 AlertDialog 열기
    </Button>
}`,...(J=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,Z;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '복잡한 내용',
  parameters: {
    docs: {
      description: {
        story: '\`body\`에 임의의 ReactNode를 전달해 목록 등 풍부한 본문을 표시할 수 있습니다. 본문 영역은 길어지면 스크롤됩니다.'
      }
    }
  },
  render: () => <Button onClick={() => openAlertDialog({
    title: '이용권 안내',
    body: <ul className="text-m2-gray-1 ml-1 list-disc space-y-2 pl-5 text-base">
                <li>업로드한 모든 평가문서는 문서당 1건씩 차감합니다.</li>
                <li>결제일로부터 1년 이내 이용 가능합니다.</li>
                <li>현금영수증 승인 번호로 자진 발급분 등록을 하실 수 있습니다.</li>
              </ul>,
    confirm: '확인'
  }, {
    theme: 'primary'
  })}>
      복잡한 내용 AlertDialog 열기
    </Button>
}`,...(Z=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,oe,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '사용법: openAlertDialog 함수',
  parameters: {
    docs: {
      description: {
        story: \`\\\`openAlertDialog(message, options)\\\`로 컴포넌트 외부에서 프로그래매틱하게 호출합니다.

\\\`\\\`\\\`tsx
import { openAlertDialog } from '@/shared/ui/m2/alert-dialog';

openAlertDialog(
  {
    title: '정말 삭제하시겠습니까?',
    description: '이 작업은 되돌릴 수 없습니다.',
    cancel: '취소',
    confirm: '삭제하기',
  },
  {
    theme: 'danger',
    onConfirm: async (overlay) => {
      await deleteItem();
      overlay.close();
    },
    onCancel: (overlay) => overlay.close(),
  },
);
\\\`\\\`\\\`

- \\\`onConfirm\\\`이 Promise를 반환하면 확인 버튼이 자동으로 로딩 상태가 됩니다.
- \\\`overlay.close()\\\`로 다이얼로그를 직접 닫습니다.\`
      }
    }
  },
  render: () => <Button onClick={() => openAlertDialog({
    title: '정말 삭제하시겠습니까?',
    description: '이 작업은 되돌릴 수 없습니다.',
    cancel: '취소',
    confirm: '삭제하기'
  }, {
    theme: 'danger',
    onCancel: (overlayControl: AlertDialogControllerProps) => {
      overlayControl.close();
    },
    onConfirm: async (overlayControl: AlertDialogControllerProps) => {
      await delay(1200);
      window.alert('삭제되었습니다!');
      overlayControl.close();
    }
  })}>
      openAlertDialog 호출하기
    </Button>
}`,...(re=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ne,ae;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '핸들러 포함',
  render: () => <Button onClick={() => openAlertDialog({
    title: '설정 저장',
    description: '변경사항을 저장하시겠습니까?',
    body: <p className="text-m2-secondary text-sm">저장하지 않으면 변경사항이 손실됩니다.</p>,
    cancel: '취소',
    confirm: '저장'
  }, {
    onClose: () => undefined,
    onCancel: (overlayControl: AlertDialogControllerProps) => {
      window.alert('취소되었습니다');
      overlayControl.close();
    },
    onConfirm: (overlayControl: AlertDialogControllerProps) => {
      window.alert('저장되었습니다!');
      overlayControl.close();
    }
  })}>
      핸들러가 있는 AlertDialog 열기
    </Button>
}`,...(ae=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,le,ie;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '비동기 처리',
  render: () => <div className="space-y-2">
      <Button onClick={() => openAlertDialog({
      title: '데이터 전송',
      description: '서버로 데이터를 전송하시겠습니까?',
      body: <div className="text-m2-secondary text-sm">
                  <p>전송될 데이터: 사용자 정보, 설정 값</p>
                  <p className="mt-2 text-xs">확인 버튼을 누르면 로딩 상태를 확인할 수 있습니다.</p>
                </div>,
      cancel: '취소',
      confirm: '전송'
    }, {
      onCancel: (overlayControl: AlertDialogControllerProps) => {
        overlayControl.close();
      },
      onConfirm: async (overlayControl: AlertDialogControllerProps) => {
        await delay(2000);
        window.alert('데이터가 성공적으로 전송되었습니다!');
        overlayControl.close();
      }
    })}>
        비동기 처리 AlertDialog 열기
      </Button>
      <p className="text-m2-secondary text-xs">확인 버튼을 누르면 2초간 로딩 상태가 표시됩니다.</p>
    </div>
}`,...(ie=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,me;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: '커스텀 버튼 텍스트',
  render: () => <Button onClick={() => openAlertDialog({
    title: '로그아웃',
    description: '정말 로그아웃 하시겠습니까?',
    body: <p className="text-m2-secondary text-sm">
                로그아웃하면 현재 작업 중인 내용이 저장되지 않을 수 있습니다.
              </p>,
    cancel: <span className="text-m2-secondary">아니오, 계속하기</span>,
    confirm: <span className="font-semibold">예, 로그아웃</span>
  }, {
    theme: 'danger'
  })}>
      커스텀 버튼 AlertDialog 열기
    </Button>
}`,...(me=(de=B.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,xe;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: '여러 단계',
  render: () => <div className="space-y-2">
      <Button onClick={() => openAlertDialog({
      title: '첫 번째 단계',
      description: '첫 번째 확인이 필요합니다.',
      body: <p className="text-m2-secondary text-sm">
                  확인 버튼을 누르면 다음 단계로 진행됩니다.
                </p>,
      cancel: '취소',
      confirm: '다음'
    }, {
      onConfirm: (overlayControl: AlertDialogControllerProps) => {
        overlayControl.close();
        window.setTimeout(() => {
          openAlertDialog({
            title: '두 번째 단계',
            description: '두 번째 확인이 필요합니다.',
            body: <p className="text-m2-secondary text-sm">
                          확인 버튼을 누르면 작업이 완료됩니다.
                        </p>,
            cancel: '취소',
            confirm: '완료'
          }, {
            onConfirm: (nextOverlayControl: AlertDialogControllerProps) => {
              window.alert('모든 단계가 완료되었습니다!');
              nextOverlayControl.close();
            }
          });
        }, 300);
      }
    })}>
        여러 단계 AlertDialog 열기
      </Button>
      <p className="text-m2-secondary text-xs">확인 버튼을 누르면 다음 AlertDialog가 열립니다.</p>
    </div>
}`,...(xe=(ge=_.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ue,ye,fe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: '긴 내용 (스크롤)',
  render: () => <div className="space-y-2">
      <Button onClick={() => openAlertDialog({
      title: '서비스 이용약관',
      description: '아래 약관을 확인하시고 동의해주세요.',
      body: <div className="text-m2-gray-1 space-y-4 text-sm">
                  {[['제1조 (목적)', '이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.'], ['제2조 (정의)', '서비스란 회사가 제공하는 모든 서비스를 의미하며, 이용자는 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.'], ['제3조 (약관의 게시와 개정)', '회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.'], ['제4조 (서비스의 제공 및 변경)', '회사는 정보 제공 서비스, 커뮤니티 서비스, 전자상거래 서비스 및 기타 회사가 정하는 서비스를 제공합니다.'], ['제5조 (서비스의 중단)', '회사는 설비의 보수점검, 교체 및 고장 등의 사유가 발생한 경우 서비스 제공을 일시적으로 중단할 수 있습니다.'], ['제6조 (회원가입)', '이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 회원가입을 신청합니다.']].map(([title, content]) => <section key={title}>
                      <h4 className="text-m2-gray-0 font-semibold">{title}</h4>
                      <p className="mt-2">{content}</p>
                    </section>)}
                </div>,
      cancel: '취소',
      confirm: '동의'
    }, {
      className: 'h-[500px]'
    })}>
        긴 내용 AlertDialog 열기
      </Button>
      <p className="text-m2-secondary text-xs">본문이 길어서 스크롤이 생깁니다.</p>
    </div>
}`,...(fe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var he,ve,Ae;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: '모든 테마',
  render: () => {
    const openTheme = (theme: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'error', title: string, description: string, confirm = '확인') => openAlertDialog({
      title,
      description,
      cancel: theme === 'primary' || theme === 'warning' || theme === 'danger' ? '취소' : '닫기',
      confirm
    }, {
      theme
    });
    return <div className="space-y-6 p-4">
        <div>
          <h2 className="text-m2-gray-0 mb-3 text-lg font-bold">AlertDialog 테마별 스타일</h2>
          <p className="text-m2-secondary text-sm">
            상황에 맞는 다양한 AlertDialog 테마를 확인할 수 있습니다.
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-m2-gray-1 mb-2 text-sm font-semibold">기본 테마</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button onClick={() => openTheme('primary', '알림', '일반적인 알림 메시지입니다.')}>
                기본
              </Button>
              <Button onClick={() => openTheme('info', '정보', '중요한 정보를 알려드립니다.')}>
                <Info className="size-4" />
                정보
              </Button>
              <Button color="success" onClick={() => openTheme('success', '성공', '작업이 성공적으로 완료되었습니다!')}>
                <CheckCircle2 className="size-4" />
                성공
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-m2-gray-1 mb-2 text-sm font-semibold">주의 테마</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button color="warning" onClick={() => openTheme('warning', '경고', '이 작업은 주의가 필요합니다.', '계속')}>
                <TriangleAlert className="size-4" />
                경고
              </Button>
              <Button color="danger" onClick={() => openTheme('danger', '위험', '이 작업은 되돌릴 수 없습니다!', '삭제')}>
                <OctagonAlert className="size-4" />
                위험
              </Button>
              <Button color="danger" onClick={() => openTheme('error', '오류', '작업 중 오류가 발생했습니다.', '다시 시도')}>
                <CircleX className="size-4" />
                에러
              </Button>
            </div>
          </div>
        </div>
        <div className="border-m2-surface bg-m2-surface-hover space-y-2 rounded-lg border p-4">
          <p className="text-m2-gray-0 text-xs font-semibold">사용 가이드</p>
          <ul className="text-m2-gray-1 list-disc space-y-1 pl-5 text-xs">
            <li>
              <strong>Primary:</strong> 일반적인 알림이나 확인이 필요할 때
            </li>
            <li>
              <strong>Info:</strong> 사용자에게 정보를 전달할 때
            </li>
            <li>
              <strong>Success:</strong> 작업이 성공적으로 완료되었을 때
            </li>
            <li>
              <strong>Warning:</strong> 주의가 필요한 작업을 진행할 때
            </li>
            <li>
              <strong>Danger:</strong> 되돌릴 수 없는 위험한 작업을 진행할 때
            </li>
            <li>
              <strong>Error:</strong> 오류가 발생했을 때
            </li>
          </ul>
        </div>
      </div>;
  }
}`,...(Ae=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:Ae.source}}};var Ce,De,Ne;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: '모든 예시',
  render: () => <div className="space-y-6 p-4">
      <div>
        <h2 className="text-m2-gray-0 mb-3 text-lg font-bold">AlertDialog 모든 예시</h2>
        <p className="text-m2-secondary text-sm">
          다양한 AlertDialog 사용 예시를 확인할 수 있습니다.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-m2-gray-1 mb-2 text-sm font-semibold">기본 사용법</h3>
          <div className="grid grid-cols-2 gap-2">
            <Button onClick={() => openAlertDialog({
            title: '알림',
            description: '이것은 기본 AlertDialog입니다.',
            cancel: '취소',
            confirm: '확인'
          })}>
              기본
            </Button>
            <Button onClick={() => openAlertDialog({
            title: '작업 완료',
            description: '요청하신 작업이 성공적으로 완료되었습니다.',
            body: <p className="text-m2-secondary text-sm">파일 업로드, 데이터 검증, 저장 완료</p>,
            cancel: '닫기',
            confirm: '확인'
          })}>
              본문 포함
            </Button>
          </div>
        </div>
        <div>
          <h3 className="text-m2-gray-1 mb-2 text-sm font-semibold">비동기 처리</h3>
          <Button className="w-full" onClick={() => openAlertDialog({
          title: '데이터 전송',
          description: '서버로 데이터를 전송하시겠습니까?',
          cancel: '취소',
          confirm: '전송'
        }, {
          onConfirm: async (overlayControl: AlertDialogControllerProps) => {
            await delay(2000);
            window.alert('전송 완료!');
            overlayControl.close();
          }
        })}>
            비동기 작업
          </Button>
        </div>
        <div>
          <h3 className="text-m2-gray-1 mb-2 text-sm font-semibold">다양한 스타일</h3>
          <div className="grid grid-cols-3 gap-2">
            <Button color="success" onClick={() => openAlertDialog({
            title: '성공',
            description: '작업이 성공적으로 완료되었습니다!',
            cancel: '닫기',
            confirm: '확인'
          }, {
            theme: 'success'
          })}>
              성공
            </Button>
            <Button color="warning" onClick={() => openAlertDialog({
            title: '경고',
            description: '이 작업은 주의가 필요합니다.',
            cancel: '취소',
            confirm: '계속 진행'
          }, {
            theme: 'warning'
          })}>
              경고
            </Button>
            <Button color="danger" onClick={() => openAlertDialog({
            title: '삭제 확인',
            description: '이 작업은 되돌릴 수 없습니다.',
            cancel: '취소',
            confirm: '삭제'
          }, {
            theme: 'danger'
          })}>
              삭제
            </Button>
          </div>
        </div>
        <div>
          <h3 className="text-m2-gray-1 mb-2 text-sm font-semibold">기타</h3>
          <Button className="w-full" onClick={() => openAlertDialog({
          title: '긴 내용',
          description: '본문이 길어서 스크롤이 생깁니다.',
          body: <div className="space-y-2">
                      {Array.from({
              length: 20
            }, (_, index) => <p key={index} className="text-m2-gray-1 text-sm">
                          {index + 1}. 긴 내용의 예시입니다. 스크롤을 확인하세요.
                        </p>)}
                    </div>,
          cancel: '취소',
          confirm: '확인'
        }, {
          className: 'h-[500px]'
        })}>
            긴 내용 (스크롤)
          </Button>
        </div>
      </div>
      <div className="border-m2-info bg-m2-info-tint rounded-lg border p-3">
        <p className="text-m2-deep-blue-2 text-xs">
          <strong>참고:</strong> AlertDialog는 openAlertDialog() 함수를 통해 프로그래매틱하게 열 수
          있으며, 비동기 처리 시 자동으로 로딩 상태를 표시합니다.
        </p>
      </div>
    </div>
}`,...(Ne=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};const gr=["Default","Success","Warning","Danger","SingleButton","WithBody","Usage","WithHandlers","WithAsyncHandler","CustomButtonText","MultiStep","WithLongContent","AllThemes","AllExamples"];export{E as AllExamples,T as AllThemes,B as CustomButtonText,D as Danger,v as Default,_ as MultiStep,N as SingleButton,A as Success,b as Usage,C as Warning,k as WithAsyncHandler,j as WithBody,w as WithHandlers,S as WithLongContent,gr as __namedExportsOrder,pr as default};
