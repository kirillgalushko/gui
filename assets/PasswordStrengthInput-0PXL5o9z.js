import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/PasswordStrengthInput/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`passwordstrengthinput`,children:`PasswordStrengthInput`}),`
`,(0,c.jsxs)(t.p,{children:[`UI-компонент для создания сложного пароля. Внутри использует `,(0,c.jsx)(t.code,{children:`PasswordInput`}),` и `,(0,c.jsx)(t.code,{children:`ProgressBar`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Компонент не валидирует пароль сам. Правила передаются извне.`}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modelValue?: string`}),` — значение поля.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rules?: PasswordStrengthRule[]`}),` — список внешних правил.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`progress?: number`}),` — внешний прогресс от `,(0,c.jsx)(t.code,{children:`0`}),` до `,(0,c.jsx)(t.code,{children:`rules.length`}),`. Если не передан, считается по количеству выполненных правил.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`progressSegments?: number`}),` — количество сегментов прогресс-бара, по умолчанию `,(0,c.jsx)(t.code,{children:`4`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`progressHeight?: string`}),` — высота прогресс-бара.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`progressGap?: string`}),` — расстояние между сегментами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`weakColor?: string`}),` — цвет слабого пароля, по умолчанию `,(0,c.jsx)(t.code,{children:`negative`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mediumColor?: string`}),` — цвет среднего пароля, по умолчанию `,(0,c.jsx)(t.code,{children:`warning`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`strongColor?: string`}),` — цвет сильного пароля, по умолчанию `,(0,c.jsx)(t.code,{children:`positive`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Также поддерживает пропсы `,(0,c.jsx)(t.code,{children:`PasswordInput`}),`: `,(0,c.jsx)(t.code,{children:`maxWidth`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`, `,(0,c.jsx)(t.code,{children:`description`}),`, `,(0,c.jsx)(t.code,{children:`errorMessage`}),`, `,(0,c.jsx)(t.code,{children:`invalid`}),`, `,(0,c.jsx)(t.code,{children:`descriptionId`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`passwordstrengthrule`,children:`PasswordStrengthRule`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`interface PasswordStrengthRule {
  id?: string | number;
  label: string;
  valid: boolean;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<PasswordStrengthInput
  v-model="password"
  :rules="[
    { id: 'length', label: 'Минимум 8 символов', valid: password.length >= 8 },
    { id: 'number', label: 'Есть цифра', valid: /\\d/.test(password) },
  ]"
/>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};