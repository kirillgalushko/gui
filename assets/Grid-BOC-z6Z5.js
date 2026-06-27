import{ae as n,af as c}from"./index-BZ0GbngE.js";import{useMDXComponents as d}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-Cm0mHAFQ.js";import"./iframe-C0FAHVV8.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Components/Grid/Documentation"}),`
`,n.jsx(e.h1,{id:"grid",children:"Grid"}),`
`,n.jsxs(e.p,{children:["CSS Grid система для content area. Сайдбар должен находиться снаружи ",n.jsx(e.code,{children:"GridLayout"}),"; тогда при изменении ширины сайдбара content area становится уже, container breakpoint пересчитывается по фактической ширине ",n.jsx(e.code,{children:"GridLayout"}),", а gutter остается стабильным."]}),`
`,n.jsx(e.h2,{id:"gridlayout",children:"GridLayout"}),`
`,n.jsxs(e.p,{children:["Создает область сетки и передает через ",n.jsx(e.code,{children:"provide/inject"})," текущий breakpoint и количество колонок."]}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mode?: 'container' | 'viewport'"})," — источник breakpoint, по умолчанию ",n.jsx(e.code,{children:"container"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"gutter?: string"})," — расстояние между колонками, по умолчанию ",n.jsx(e.code,{children:"var(--gap-4, 16px)"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"highlight?: boolean"})," — включает полупрозрачную подсветку колонок."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Подсветка использует фиксированный цвет ",n.jsx(e.code,{children:"rgba(116, 0, 255, 0.12)"}),"."]}),`
`,n.jsx(e.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"xs"})," — ",n.jsx(e.code,{children:"0-575px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"s"})," — ",n.jsx(e.code,{children:"576-1023px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"m"})," — ",n.jsx(e.code,{children:"1024-1279px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"l"})," — ",n.jsx(e.code,{children:"1280-1439px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"xl"})," — ",n.jsx(e.code,{children:"1440-1919px"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"xxl"})," — ",n.jsx(e.code,{children:"1920px+"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"gridrow",children:"GridRow"}),`
`,n.jsxs(e.p,{children:["Строит CSS Grid внутри ",n.jsx(e.code,{children:"GridLayout"}),"."]}),`
`,n.jsx(e.p,{children:"Количество колонок зависит от текущего breakpoint:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"xs"})," — ",n.jsx(e.code,{children:"4"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"s"})," — ",n.jsx(e.code,{children:"8"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"m"}),", ",n.jsx(e.code,{children:"l"}),", ",n.jsx(e.code,{children:"xl"}),", ",n.jsx(e.code,{children:"xxl"})," — ",n.jsx(e.code,{children:"12"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"gridcolumn",children:"GridColumn"}),`
`,n.jsx(e.p,{children:"Занимает количество колонок, указанное для текущего breakpoint. Если prop для текущего breakpoint не передан, используется ближайший меньший breakpoint."}),`
`,n.jsx(e.h3,{id:"props-1",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"xs?: number"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"s?: number"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"m?: number"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"l?: number"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"xl?: number"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"xxl?: number"})}),`
`]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<GridLayout highlight>
  <GridRow>
    <GridColumn :xs="4" :s="8" :m="12" :l="12" :xl="12" :xxl="12">
      content
    </GridColumn>
  </GridRow>
</GridLayout>
`})})]})}function u(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{u as default};
