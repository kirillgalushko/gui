import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Calendar/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`calendar`,children:`Calendar`}),`
`,(0,c.jsx)(t.p,{children:`Календарный выбор даты или диапазона. Поддерживает controlled month, ограничения по датам, кастомную блокировку дней и слоты для заголовка, дня и футера.`}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode?: 'single' | 'range'`}),` — режим выбора, по умолчанию `,(0,c.jsx)(t.code,{children:`single`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modelValue?: Date | string | null`}),` — выбранная дата для single-режима.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rangeValue?: { start: Date | string | null; end: Date | string | null }`}),` — выбранный диапазон.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`month?: Date | string`}),` — отображаемый месяц.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minDate?`}),`, `,(0,c.jsx)(t.code,{children:`maxDate?`}),` — границы доступных дат.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabledDates?: (date: Date) => boolean`}),` — пользовательская блокировка дней.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showOutsideDays?: boolean`}),` — показывать дни соседних месяцев.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fixedWeeks?: boolean`}),` — всегда показывать 6 недель.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readonly?: boolean`}),` — запретить выбор.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update:modelValue`}),`, `,(0,c.jsx)(t.code,{children:`select`}),` — выбор даты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update:rangeValue`}),`, `,(0,c.jsx)(t.code,{children:`range-select`}),` — выбор диапазона.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`range-drag-start`}),`, `,(0,c.jsx)(t.code,{children:`range-drag`}),`, `,(0,c.jsx)(t.code,{children:`range-drag-end`}),` — изменение границ диапазона перетаскиванием.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update:month`}),`, `,(0,c.jsx)(t.code,{children:`month-change`}),` — смена месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`day-hover`}),` — наведение на день.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Calendar v-model="selectedDate" />

<Calendar
  mode="range"
  v-model:range-value="rangeValue"
  :min-date="new Date()"
/>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};