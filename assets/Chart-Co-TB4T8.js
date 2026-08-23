import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-Cw7uVCUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Chart/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`chart`,children:`Chart`}),`
`,(0,c.jsxs)(t.p,{children:[`Готовые Vue-обёртки над `,(0,c.jsx)(t.code,{children:`vue-chartjs`}),` и Chart.js. Компоненты автоматически
используют локальные `,(0,c.jsx)(t.code,{children:`--chart-1`}),` … `,(0,c.jsx)(t.code,{children:`--chart-6`}),` из `,(0,c.jsx)(t.code,{children:`chart.css`}),` и семантические
цвета GUI для текста, сетки, легенды и tooltip, поэтому корректно работают в
тёмной, светлой и инвертированной темах.`]}),`
`,(0,c.jsx)(t.h2,{id:`базовый-пример`,children:`Базовый пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
import { ChartLine } from "@gui/components";
import type { ChartData } from "chart.js";

const data = {
  labels: ["Янв", "Фев", "Мар"],
  datasets: [
    { label: "Бронирования", data: [32, 42, 38] },
    { label: "Отмены", data: [4, 6, 3] },
  ],
} satisfies ChartData<"line">;
<\/script>

<template>
  <ChartLine
    :data="data"
    :height="280"
    aria-label="Динамика бронирований и отмен"
  />
</template>
`})}),`
`,(0,c.jsx)(t.h2,{id:`компоненты`,children:`Компоненты`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ChartLine`}),` — линейный график.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ChartBar`}),` — вертикальные и горизонтальные столбцы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ChartDoughnut`}),` — кольцевая диаграмма.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ChartPie`}),` — круговая диаграмма.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ChartRadar`}),` — сравнение нескольких серий по общим критериям.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ChartPolarArea`}),` — радиальное сравнение величин.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Каждый компонент принимает типизированные `,(0,c.jsx)(t.code,{children:`data`}),`, `,(0,c.jsx)(t.code,{children:`options`}),`, `,(0,c.jsx)(t.code,{children:`plugins`}),`,
`,(0,c.jsx)(t.code,{children:`datasetIdKey`}),`, `,(0,c.jsx)(t.code,{children:`updateMode`}),`, `,(0,c.jsx)(t.code,{children:`height`}),`, `,(0,c.jsx)(t.code,{children:`ariaLabel`}),` и `,(0,c.jsx)(t.code,{children:`ariaDescribedby`}),`. Высота по
умолчанию — `,(0,c.jsx)(t.code,{children:`280px`}),`; строковое значение позволяет передать `,(0,c.jsx)(t.code,{children:`clamp(...)`}),`, `,(0,c.jsx)(t.code,{children:`vh`}),` или
другую CSS-величину.`]}),`
`,(0,c.jsx)(t.h2,{id:`настройка`,children:`Настройка`}),`
`,(0,c.jsxs)(t.p,{children:[`GUI-дефолты заполняют только отсутствующие цвета dataset. Любые заданные в
`,(0,c.jsx)(t.code,{children:`data.datasets`}),` значения `,(0,c.jsx)(t.code,{children:`backgroundColor`}),`, `,(0,c.jsx)(t.code,{children:`borderColor`}),` и связанные цвета
сохраняются. `,(0,c.jsx)(t.code,{children:`options`}),` объединяются с адаптивными настройками GUI, причём
пользовательские значения имеют приоритет.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import type { ChartOptions } from "chart.js";

const options = {
  indexAxis: "y",
  plugins: {
    legend: { display: false },
  },
} satisfies ChartOptions<"bar">;
`})}),`
`,(0,c.jsx)(t.p,{children:`Для большинства экранов не нужно вручную задавать палитру: так диаграмма будет
автоматически реагировать на смену темы. Если нужны фирменные или смысловые цвета,
передавай стандартные Chart.js color options в конкретный dataset.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};