import{ae as e,af as l}from"./index-BZ0GbngE.js";import{useMDXComponents as o}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-Cm0mHAFQ.js";import"./iframe-C0FAHVV8.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/FormLabel/Documentation"}),`
`,e.jsx(n.h1,{id:"formlabel",children:"FormLabel"}),`
`,e.jsxs(n.p,{children:["Компонент подписи поля. Под капотом использует ",e.jsx(n.code,{children:"Text"})," и рендерит настоящий ",e.jsx(n.code,{children:"label"}),"."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"htmlFor?: string"})," — id связанного поля, прокидывается в атрибут ",e.jsx(n.code,{children:"for"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"invalid?: boolean"})," — включает цвет ошибки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled?: boolean"})," — приглушает подпись и показывает disabled-состояние."]}),`
`]}),`
`,e.jsx(n.p,{children:"Дополнительные атрибуты прокидываются на label."}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<FormLabel html-for="email" :invalid="hasError">
  Email
</FormLabel>
<Input id="email" :invalid="hasError" />
`})})]})}function u(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
