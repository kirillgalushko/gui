import{ae as e,af as d}from"./index-BZ0GbngE.js";import{useMDXComponents as s}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-Cm0mHAFQ.js";import"./iframe-C0FAHVV8.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/FormHelper/Documentation"}),`
`,e.jsx(n.h1,{id:"formhelper",children:"FormHelper"}),`
`,e.jsx(n.p,{children:"Компонент для текста под полем ввода: обычной подсказки или сообщения об ошибке."}),`
`,e.jsxs(n.p,{children:["В состоянии ",e.jsx(n.code,{children:"invalid"})," вместо ",e.jsx(n.code,{children:"description"})," показывается ",e.jsx(n.code,{children:"errorMessage"}),". Смена текста анимируется через CSS."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"description?: string"})," — текст подсказки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"errorMessage?: string"})," — текст ошибки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"invalid?: boolean"})," — включает состояние ошибки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gap?: string"})," — отступ сверху, по умолчанию ",e.jsx(n.code,{children:"var(--gap-1)"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled?: boolean"})," — приглушает текст."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"descriptionId?: string"})," — id текста для связи с input через ",e.jsx(n.code,{children:"aria-describedby"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<input aria-describedby="email-helper" />
<FormHelper
  description-id="email-helper"
  description="Введите рабочую почту"
  error-message="Некорректный email"
  :invalid="hasError"
/>
`})})]})}function u(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
