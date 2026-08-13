import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Filters/VisibilityMenu`}),`
`,(0,c.jsx)(t.h1,{id:`visibilitymenu`,children:`VisibilityMenu`}),`
`,(0,c.jsxs)(t.p,{children:[`Управляемое меню показа и скрытия элементов. `,(0,c.jsx)(t.code,{children:`v-model`}),` содержит ключи
видимых элементов, а `,(0,c.jsx)(t.code,{children:`min-visible`}),` не позволяет скрыть обязательный минимум.
Ширина меню по умолчанию определяется содержимым; `,(0,c.jsx)(t.code,{children:`content-max-width`}),` позволяет
ограничить её CSS-значением.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<VisibilityMenu
  v-model="visibleColumns"
  :items="columns"
  label="Колонки"
  content-max-width="320px"
/>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};