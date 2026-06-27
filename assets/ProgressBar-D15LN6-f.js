import{ae as e,af as o}from"./index-BZ0GbngE.js";import{useMDXComponents as i}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-Cm0mHAFQ.js";import"./iframe-C0FAHVV8.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/ProgressBar/Documentation"}),`
`,e.jsx(n.h1,{id:"progressbar",children:"ProgressBar"}),`
`,e.jsx(n.p,{children:"Индикатор прогресса с плавной анимацией заполнения. Может быть цельным или разделенным на сегменты."}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"progress?: number"})," — значение от ",e.jsx(n.code,{children:"0"})," до ",e.jsx(n.code,{children:"100"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"color?: string"})," — цвет заполнения, по умолчанию ",e.jsx(n.code,{children:"accent"}),". Можно передать токен переменной (",e.jsx(n.code,{children:"positive"}),", ",e.jsx(n.code,{children:"negative"}),", ",e.jsx(n.code,{children:"danger"}),", ",e.jsx(n.code,{children:"warning"}),"), CSS-переменную (",e.jsx(n.code,{children:"--positive"}),") или любой CSS-цвет."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"segments?: number"})," — количество сегментов, по умолчанию ",e.jsx(n.code,{children:"1"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"height?: string"})," — высота, по умолчанию ",e.jsx(n.code,{children:"8px"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gap?: string"})," — расстояние между сегментами, по умолчанию ",e.jsx(n.code,{children:"var(--gap-1)"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<ProgressBar :progress="75" :segments="4" color="positive" />
`})})]})}function g(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{g as default};
