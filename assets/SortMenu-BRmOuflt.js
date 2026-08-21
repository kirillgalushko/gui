import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Filters/SortMenu`}),`
`,(0,c.jsx)(t.h1,{id:`sortmenu`,children:`SortMenu`}),`
`,(0,c.jsxs)(t.p,{children:[`Управляемое меню сортировки по одному полю. `,(0,c.jsx)(t.code,{children:`v-model`}),` хранит ключ поля и
направление, а `,(0,c.jsx)(t.code,{children:`defaultOrder`}),` у опции задаёт направление при переключении на это
поле. Для пагинированных списков API должен добавлять устойчивый вторичный ключ
сортировки.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<SortMenu
  v-model="sort"
  :options="[
    { value: 'checkInAt', label: 'Дате заезда', defaultOrder: 'asc' },
    { value: 'createdAt', label: 'Дате создания', defaultOrder: 'desc' },
  ]"
  size="small"
/>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};