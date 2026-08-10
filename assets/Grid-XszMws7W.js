import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Grid/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`grid`,children:`Grid`}),`
`,(0,c.jsxs)(t.p,{children:[`CSS Grid система для content area. Сайдбар должен находиться снаружи `,(0,c.jsx)(t.code,{children:`GridLayout`}),`; тогда при изменении ширины сайдбара content area становится уже, container breakpoint пересчитывается по фактической ширине `,(0,c.jsx)(t.code,{children:`GridLayout`}),`, а gutter остается стабильным.`]}),`
`,(0,c.jsx)(t.h2,{id:`gridlayout`,children:`GridLayout`}),`
`,(0,c.jsxs)(t.p,{children:[`Создает область сетки и передает через `,(0,c.jsx)(t.code,{children:`provide/inject`}),` текущий breakpoint и количество колонок.`]}),`
`,(0,c.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode?: 'container' | 'viewport'`}),` — источник breakpoint, по умолчанию `,(0,c.jsx)(t.code,{children:`container`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`gutter?: string`}),` — расстояние между колонками, по умолчанию `,(0,c.jsx)(t.code,{children:`var(--gap-4, 16px)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlight?: boolean`}),` — включает полупрозрачную подсветку колонок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stretched?: boolean`}),` — отключает максимальную ширину `,(0,c.jsx)(t.code,{children:`GridLayout`}),`, по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`По умолчанию `,(0,c.jsx)(t.code,{children:`GridLayout`}),` ограничен `,(0,c.jsx)(t.code,{children:`max-width: 1728px`}),` и центрируется через `,(0,c.jsx)(t.code,{children:`margin-left/right: auto`}),`. Это значение больше `,(0,c.jsx)(t.code,{children:`xxl`}),` и оставляет боковые поля на больших desktop-экранах. Для полноширинной сетки используйте `,(0,c.jsx)(t.code,{children:`stretched`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Подсветка использует фиксированный цвет `,(0,c.jsx)(t.code,{children:`rgba(116, 0, 255, 0.12)`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`xs`}),` — `,(0,c.jsx)(t.code,{children:`0-575px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`s`}),` — `,(0,c.jsx)(t.code,{children:`576-767px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`m`}),` — `,(0,c.jsx)(t.code,{children:`768-1023px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`l`}),` — `,(0,c.jsx)(t.code,{children:`1024-1279px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`xl`}),` — `,(0,c.jsx)(t.code,{children:`1280-1599px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`xxl`}),` — `,(0,c.jsx)(t.code,{children:`1600px+`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`gridrow`,children:`GridRow`}),`
`,(0,c.jsxs)(t.p,{children:[`Строит CSS Grid внутри `,(0,c.jsx)(t.code,{children:`GridLayout`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Количество колонок зависит от текущего breakpoint:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`xs`}),` — `,(0,c.jsx)(t.code,{children:`4`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`s`}),` — `,(0,c.jsx)(t.code,{children:`8`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`m`}),`, `,(0,c.jsx)(t.code,{children:`l`}),`, `,(0,c.jsx)(t.code,{children:`xl`}),`, `,(0,c.jsx)(t.code,{children:`xxl`}),` — `,(0,c.jsx)(t.code,{children:`12`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`gridcolumn`,children:`GridColumn`}),`
`,(0,c.jsx)(t.p,{children:`Занимает количество колонок, указанное для текущего breakpoint. Если prop для текущего breakpoint не передан, используется ближайший меньший breakpoint.`}),`
`,(0,c.jsx)(t.h3,{id:`props-1`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`xs?: number`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`s?: number`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`m?: number`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`l?: number`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`xl?: number`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`xxl?: number`})}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<GridLayout highlight>
  <GridRow>
    <GridColumn :xs="4" :s="8" :m="12" :l="12" :xl="12" :xxl="12">
      content
    </GridColumn>
  </GridRow>
</GridLayout>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};