import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/ProgressBar/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`progressbar`,children:`ProgressBar`}),`
`,(0,c.jsx)(t.p,{children:`Индикатор прогресса с плавной анимацией заполнения. Может быть цельным или разделенным на сегменты.`}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`progress?: number`}),` — текущее значение от `,(0,c.jsx)(t.code,{children:`0`}),` до `,(0,c.jsx)(t.code,{children:`max`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max?: number`}),` — максимальное значение прогресса, по умолчанию `,(0,c.jsx)(t.code,{children:`100`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`color?: string`}),` — цвет заполнения, по умолчанию `,(0,c.jsx)(t.code,{children:`accent`}),`. Можно передать токен переменной (`,(0,c.jsx)(t.code,{children:`positive`}),`, `,(0,c.jsx)(t.code,{children:`negative`}),`, `,(0,c.jsx)(t.code,{children:`danger`}),`, `,(0,c.jsx)(t.code,{children:`warning`}),`), CSS-переменную (`,(0,c.jsx)(t.code,{children:`--positive`}),`) или любой CSS-цвет.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`segments?: number`}),` — количество сегментов, по умолчанию `,(0,c.jsx)(t.code,{children:`1`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height?: string`}),` — высота, по умолчанию `,(0,c.jsx)(t.code,{children:`8px`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`gap?: string`}),` — расстояние между сегментами, по умолчанию `,(0,c.jsx)(t.code,{children:`var(--gap-1)`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<ProgressBar :progress="3" :max="4" :segments="4" color="positive" />
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};