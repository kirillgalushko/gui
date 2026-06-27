import{ae as n,af as r}from"./index-BZ0GbngE.js";import{useMDXComponents as o}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-Cm0mHAFQ.js";import"./iframe-C0FAHVV8.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Hooks/useContainerBreakpoint"}),`
`,n.jsx(e.h1,{id:"usecontainerbreakpoint",children:"useContainerBreakpoint"}),`
`,n.jsx(e.p,{children:"Возвращает текущий container breakpoint по фактической ширине элемента и набор boolean-флагов."}),`
`,n.jsxs(e.p,{children:["Хук использует ",n.jsx(e.code,{children:"ResizeObserver"}),", поэтому подходит для сеток внутри узких контейнеров, сайдбаров, модалок и nested grid."]}),`
`,n.jsx(e.h2,{id:"параметры",children:"Параметры"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"targetRef"})," — ref на HTML-элемент, ширину которого нужно отслеживать."]}),`
`]}),`
`,n.jsx(e.h2,{id:"возвращаемое-значение",children:"Возвращаемое значение"}),`
`,n.jsx(e.p,{children:"Readonly объект:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`{
  breakpoint: Breakpoint;
  isXS: boolean;
  isS: boolean;
  isM: boolean;
  isL: boolean;
  isXL: boolean;
  isXXL: boolean;
  isMobile: boolean;
  isGtXS: boolean;
  isGtS: boolean;
  isGtM: boolean;
  isGtL: boolean;
}
`})}),`
`,n.jsx(e.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"xs"})," — ",n.jsx(e.code,{children:"0-575px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"s"})," — ",n.jsx(e.code,{children:"576-1023px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"m"})," — ",n.jsx(e.code,{children:"1024-1279px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"l"})," — ",n.jsx(e.code,{children:"1280-1439px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"xl"})," — ",n.jsx(e.code,{children:"1440-1919px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"xxl"})," — ",n.jsx(e.code,{children:"1920px+"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const targetRef = ref<HTMLElement | null>(null);
const container = useContainerBreakpoint(targetRef);

if (container.isGtM) {
  // ширина контейнера больше m
}
`})})]})}function u(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{u as default};
