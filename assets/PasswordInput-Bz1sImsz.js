import{ae as n,af as d}from"./index-BZ0GbngE.js";import{useMDXComponents as s}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-Cm0mHAFQ.js";import"./iframe-C0FAHVV8.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Components/PasswordInput/Documentation"}),`
`,n.jsx(e.h1,{id:"passwordinput",children:"PasswordInput"}),`
`,n.jsxs(e.p,{children:["Поле для ввода пароля на базе ",n.jsx(e.code,{children:"Input"}),". В ",n.jsx(e.code,{children:"rightAdornment"})," добавлена кнопка ",n.jsx(e.code,{children:"Action"}),", которая переключает видимость пароля."]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.p,{children:["Поддерживает пропсы ",n.jsx(e.code,{children:"Input"}),": ",n.jsx(e.code,{children:"maxWidth"}),", ",n.jsx(e.code,{children:"disabled"}),", ",n.jsx(e.code,{children:"description"}),", ",n.jsx(e.code,{children:"errorMessage"}),", ",n.jsx(e.code,{children:"invalid"}),", ",n.jsx(e.code,{children:"descriptionId"}),"."]}),`
`,n.jsx(e.p,{children:"Дополнительные атрибуты прокидываются на внутренний input."}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<PasswordInput
  v-model="password"
  placeholder="Пароль"
  description="Минимум 8 символов"
/>
`})})]})}function u(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{u as default};
