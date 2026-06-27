import{ae as e,af as i}from"./index-BZ0GbngE.js";import{useMDXComponents as d}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-Cm0mHAFQ.js";import"./iframe-C0FAHVV8.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/PasswordStrengthInput/Documentation"}),`
`,e.jsx(n.h1,{id:"passwordstrengthinput",children:"PasswordStrengthInput"}),`
`,e.jsxs(n.p,{children:["UI-компонент для создания сложного пароля. Внутри использует ",e.jsx(n.code,{children:"PasswordInput"})," и ",e.jsx(n.code,{children:"ProgressBar"}),"."]}),`
`,e.jsx(n.p,{children:"Компонент не валидирует пароль сам. Правила передаются извне."}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"modelValue?: string"})," — значение поля."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rules?: PasswordStrengthRule[]"})," — список внешних правил."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"progress?: number"})," — внешний прогресс от ",e.jsx(n.code,{children:"0"})," до ",e.jsx(n.code,{children:"100"}),". Если не передан, считается по количеству выполненных правил."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"progressSegments?: number"})," — количество сегментов прогресс-бара, по умолчанию ",e.jsx(n.code,{children:"4"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"progressHeight?: string"})," — высота прогресс-бара."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"progressGap?: string"})," — расстояние между сегментами."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"weakColor?: string"})," — цвет слабого пароля, по умолчанию ",e.jsx(n.code,{children:"negative"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mediumColor?: string"})," — цвет среднего пароля, по умолчанию ",e.jsx(n.code,{children:"warning"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"strongColor?: string"})," — цвет сильного пароля, по умолчанию ",e.jsx(n.code,{children:"positive"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Также поддерживает пропсы ",e.jsx(n.code,{children:"PasswordInput"}),": ",e.jsx(n.code,{children:"maxWidth"}),", ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"description"}),", ",e.jsx(n.code,{children:"errorMessage"}),", ",e.jsx(n.code,{children:"invalid"}),", ",e.jsx(n.code,{children:"descriptionId"}),"."]}),`
`,e.jsx(n.h2,{id:"passwordstrengthrule",children:"PasswordStrengthRule"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface PasswordStrengthRule {
  id?: string | number;
  label: string;
  valid: boolean;
}
`})}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<PasswordStrengthInput
  v-model="password"
  :rules="[
    { id: 'length', label: 'Минимум 8 символов', valid: password.length >= 8 },
    { id: 'number', label: 'Есть цифра', valid: /\\d/.test(password) },
  ]"
/>
`})})]})}function u(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{u as default};
