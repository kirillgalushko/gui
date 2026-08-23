import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,o as a,s as o}from"./blocks-Cw7uVCUg.js";import{r as s,t as c}from"./HeatmapCalendar.stories-Uq7Wk3MU.js";function l(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Components/HeatmapCalendar/Documentation`}),`
`,(0,d.jsx)(t.h1,{id:`heatmapcalendar`,children:`HeatmapCalendar`}),`
`,(0,d.jsxs)(t.p,{children:[`Универсальный календарь интенсивности для активности, загрузки, продаж и других
дневных метрик. По умолчанию использует русскую локаль, понедельник как начало
недели и локальную нейтральную палитру `,(0,d.jsx)(t.code,{children:`--heatmap-calendar-level-0`}),` …
`,(0,d.jsx)(t.code,{children:`--heatmap-calendar-level-4`}),`, вычисляемую из семантических цветов GUI.`]}),`
`,(0,d.jsx)(i,{of:c}),`
`,(0,d.jsx)(t.h2,{id:`данные-и-диапазон`,children:`Данные и диапазон`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-ts`,children:`const data = [
  { date: "2026-08-21", value: 18, meta: { source: "tracker" } },
  { date: "2026-08-22", value: 42 },
];
`})}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`date`}),` принимает `,(0,d.jsx)(t.code,{children:`Date`}),` или строку. Для календарных дат предпочтителен формат
`,(0,d.jsx)(t.code,{children:`YYYY-MM-DD`}),`: он разбирается как локальная дата без UTC-сдвига. Повторы одной даты
суммируются, а `,(0,d.jsx)(t.code,{children:`meta`}),` берётся из последней записи, в которой оно задано.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`startDate`}),` + `,(0,d.jsx)(t.code,{children:`endDate`}),` задают точные включительные границы.`]}),`
`,(0,d.jsxs)(t.li,{children:[`Если `,(0,d.jsx)(t.code,{children:`startDate`}),` отсутствует, отображаются `,(0,d.jsx)(t.code,{children:`rangeDays`}),` дней до `,(0,d.jsx)(t.code,{children:`endDate`}),`
включительно. По умолчанию — 365 дней до текущей даты.`]}),`
`,(0,d.jsx)(t.li,{children:`Если границы переданы в обратном порядке, компонент нормализует их.`}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`размер-и-направление`,children:`Размер и направление`}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`cellSize`}),` поддерживает `,(0,d.jsx)(t.code,{children:`extra-small`}),`, `,(0,d.jsx)(t.code,{children:`small`}),`, `,(0,d.jsx)(t.code,{children:`medium`}),`, `,(0,d.jsx)(t.code,{children:`large`}),`, число в
пикселях или любую CSS-величину. `,(0,d.jsx)(t.code,{children:`cellGap`}),` и `,(0,d.jsx)(t.code,{children:`cellRadius`}),` также принимают число
или CSS-строку.`]}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`orientation="horizontal"`}),` рисует недели по горизонтали, а `,(0,d.jsx)(t.code,{children:`vertical`}),` — по
вертикали. `,(0,d.jsx)(t.code,{children:`direction="reverse"`}),` размещает последние недели первыми, не меняя
порядок дней внутри недели.`]}),`
`,(0,d.jsx)(t.h2,{id:`шкала-и-цвета`,children:`Шкала и цвета`}),`
`,(0,d.jsx)(t.p,{children:`По умолчанию положительные значения распределяются по квантилям, чтобы различия
оставались видимыми на данных с выбросами. Доступны три уровня контроля:`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`scale="linear"`}),` — линейная шкала от нуля до максимума.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`thresholds`}),` — фиксированные границы, например `,(0,d.jsx)(t.code,{children:`[10, 20, 30]`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`getLevel(value, context)`}),` — собственное вычисление уровня. Оно имеет высший
приоритет.`]}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`palette`}),` принимает массив любых CSS-цветов. Нулевой элемент отвечает за пустое
или нулевое значение, остальные — за интенсивность. Количество цветов определяет
число уровней.`]}),`
`,(0,d.jsx)(t.h2,{id:`подписи-и-легенда`,children:`Подписи и легенда`}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`labels`}),` и `,(0,d.jsx)(t.code,{children:`legend`}),` принимают `,(0,d.jsx)(t.code,{children:`false`}),`, `,(0,d.jsx)(t.code,{children:`true`}),` или объект настроек. Подписи дней
используют номера из `,(0,d.jsx)(t.code,{children:`Date#getDay()`}),`; например `,(0,d.jsx)(t.code,{children:`[2, 4, 6]`}),` показывает вторник,
четверг и субботу. Локаль меняется через `,(0,d.jsx)(t.code,{children:`locale`}),`.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-vue`,children:`<HeatmapCalendar
  :data="data"
  :labels="{
    weekdays: [1, 2, 3, 4, 5, 6, 0],
    monthFormat: 'long',
    weekdayFormat: 'narrow',
  }"
  :legend="{ position: 'top', lowLabel: 'Мало', highLabel: 'Много' }"
/>
`})}),`
`,(0,d.jsx)(t.h2,{id:`overlay-и-взаимодействие`,children:`Overlay и взаимодействие`}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`overlay`}),` по умолчанию показывает один общий оптимизированный tooltip. Передайте
`,(0,d.jsx)(t.code,{children:`false`}),`, чтобы отключить его, либо объект с `,(0,d.jsx)(t.code,{children:`type: "tooltip" | "hover-card"`}),`,
`,(0,d.jsx)(t.code,{children:`placement`}),`, `,(0,d.jsx)(t.code,{children:`openDelay`}),`, `,(0,d.jsx)(t.code,{children:`closeDelay`}),` и `,(0,d.jsx)(t.code,{children:`offset`}),`. Слот `,(0,d.jsx)(t.code,{children:`overlay`}),` принимает
`,(0,d.jsx)(t.code,{children:`{ cell }`}),` и позволяет отрисовать любое содержимое без привязки к конкретной
предметной области.`]}),`
`,(0,d.jsxs)(t.p,{children:[`Ячейки становятся кнопками только при `,(0,d.jsx)(t.code,{children:`clickable=true`}),` или когда predicate
`,(0,d.jsx)(t.code,{children:`clickable(cell)`}),` возвращает `,(0,d.jsx)(t.code,{children:`true`}),`. Это сохраняет корректную клавиатурную
семантику. `,(0,d.jsx)(t.code,{children:`disabled`}),` принимает boolean или predicate. Событие `,(0,d.jsx)(t.code,{children:`cell-click`}),`
передаёт ячейку и исходный `,(0,d.jsx)(t.code,{children:`MouseEvent`}),`; также доступны `,(0,d.jsx)(t.code,{children:`cell-enter`}),`,
`,(0,d.jsx)(t.code,{children:`cell-leave`}),`, `,(0,d.jsx)(t.code,{children:`cell-focus`}),` и `,(0,d.jsx)(t.code,{children:`cell-blur`}),`.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-vue`,children:`<HeatmapCalendar
  :data="data"
  :clickable="(cell) => cell.hasData"
  :disabled="(cell) => cell.date > new Date()"
  :overlay="{ type: 'hover-card', placement: 'top' }"
  @cell-click="openDay"
>
  <template #overlay="{ cell }">
    {{ cell.value }} минут · {{ cell.meta?.source }}
  </template>
</HeatmapCalendar>
`})}),`
`,(0,d.jsxs)(t.p,{children:[`Дополнительные scoped slots: `,(0,d.jsx)(t.code,{children:`cell`}),`, `,(0,d.jsx)(t.code,{children:`legend`}),`, `,(0,d.jsx)(t.code,{children:`month-label`}),` и
`,(0,d.jsx)(t.code,{children:`weekday-label`}),`. Для screen reader текста отдельной ячейки используйте
`,(0,d.jsx)(t.code,{children:`getCellLabel`}),`.`]}),`
`,(0,d.jsx)(t.h2,{id:`производительность-и-состояния`,children:`Производительность и состояния`}),`
`,(0,d.jsxs)(t.p,{children:[`Сетка, агрегация и шкала вычисляются через Vue `,(0,d.jsx)(t.code,{children:`computed`}),` за линейное время.
Независимо от числа дней монтируется только один floating overlay, а не Tooltip
на каждую ячейку. `,(0,d.jsx)(t.code,{children:`loading`}),` блокирует взаимодействие, задаёт `,(0,d.jsx)(t.code,{children:`aria-busy`}),` и
показывает skeleton-состояние. Горизонтальное переполнение обрабатывает GUI
`,(0,d.jsx)(t.code,{children:`ScrollArea`}),`.`]})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=r(),t(),o(),s()})))()}f();export{u as default};