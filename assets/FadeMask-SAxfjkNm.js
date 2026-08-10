import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/FadeMask/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`fademask`,children:`FadeMask`}),`
`,(0,c.jsx)(t.p,{children:`Универсальная slot-обёртка для плавного исчезновения содержимого у выбранного края. Подходит для списков, изображений, превью и любых других блоков.`}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`direction: "top" | "right" | "bottom" | "left"`}),` — край, к которому исчезает содержимое. По умолчанию `,(0,c.jsx)(t.code,{children:`bottom`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`start: number`}),` — позиция в процентах, где начинается затухание. По умолчанию `,(0,c.jsx)(t.code,{children:`40`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`end: number`}),` — позиция в процентах, где содержимое становится прозрачным. По умолчанию `,(0,c.jsx)(t.code,{children:`90`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`easing: "smooth" | "linear"`}),` — форма перехода прозрачности. По умолчанию `,(0,c.jsx)(t.code,{children:`smooth`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatio: string`}),` — опциональный `,(0,c.jsx)(t.code,{children:`aspect-ratio`}),` обёртки, например `,(0,c.jsx)(t.code,{children:`"16 / 9"`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`inline: boolean`}),` — делает обёртку компактной через `,(0,c.jsx)(t.code,{children:`inline-block`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`overflow: boolean`}),` — обрезает выходящее за границы содержимое. По умолчанию включено.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled: boolean`}),` — временно отключает маску, сохраняя layout обёртки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Значения `,(0,c.jsx)(t.code,{children:`start`}),` и `,(0,c.jsx)(t.code,{children:`end`}),` автоматически ограничиваются диапазоном от 0 до 100. Их можно передавать в любом порядке.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<FadeMask direction="bottom" :start="45" :end="95" aspect-ratio="16 / 9">
  <img src="/preview.webp" alt="" />
</FadeMask>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};