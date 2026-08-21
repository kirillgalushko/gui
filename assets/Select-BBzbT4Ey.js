import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Select/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`select`,children:`Select`}),`
`,(0,c.jsx)(t.p,{children:`Выбор одного значения из списка опций.`}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string`}),` — выбранное значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label?: string`}),` — текст плейсхолдера, когда значение не выбрано.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size?: 'extra-small' | 'small' | 'medium' | 'large'`}),` — высота и типографика как у `,(0,c.jsx)(t.code,{children:`Button`}),`, по умолчанию `,(0,c.jsx)(t.code,{children:`large`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode?: 'default' | 'outline'`}),` — режим trigger, по умолчанию `,(0,c.jsx)(t.code,{children:`default`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stretched?: boolean`}),` — растягивает trigger на всю ширину.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — имя скрытого input для HTML-форм.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onChange?: (option: RegisteredOption) => void`}),` — вызывается при выборе опции.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Select
  :value="theme"
  label="Выберите тему"
  size="small"
  mode="outline"
  :on-change="handleThemeChange"
>
  <SelectOption value="auto" label="Авто" />
  <SelectOption value="light" label="Светлая тема" />
  <SelectOption value="dark" label="Тёмная тема" />
</Select>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};