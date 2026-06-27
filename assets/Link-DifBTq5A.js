import{ae as n,af as s}from"./index-BZ0GbngE.js";import{useMDXComponents as d}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-Cm0mHAFQ.js";import"./iframe-C0FAHVV8.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function l(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/Link/Documentation"}),`
`,n.jsx(e.h1,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:["Компонент ссылки с типографикой из ",n.jsx(e.code,{children:"Text"}),", состояниями и слотами для иконок."]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typography?: Typography"})," — типографика из ",n.jsx(e.code,{children:"Text"}),", по умолчанию ",n.jsx(e.code,{children:"inherit"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"inline?: boolean"})," — включает inline-режим внутри текста."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"underlined?: boolean"})," — показывает подчеркивание."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"disabled?: boolean"})," — отключает ссылку, ставит ",n.jsx(e.code,{children:"aria-disabled"})," и убирает из tab order."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"enableVisited?: boolean"})," — включает visited-цвет."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mode?: 'inherit' | 'accent'"})," — цвет ссылки, по умолчанию ",n.jsx(e.code,{children:"accent"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Element?: 'a' | 'button' | 'span'"})," — тег компонента, по умолчанию ",n.jsx(e.code,{children:"a"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"slots",children:"Slots"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"default"})," — текст ссылки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"iconLeft"})," — иконка слева."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"iconRight"})," — иконка справа."]}),`
`]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<Link href="/docs" underlined>
  <template #iconRight>
    <IconExternalLinkOutline />
  </template>
  Документация
</Link>
`})})]})}function u(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{u as default};
