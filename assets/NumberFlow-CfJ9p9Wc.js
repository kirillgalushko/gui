import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/NumberFlow/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`numberflow`,children:`NumberFlow`}),`
`,(0,c.jsxs)(t.p,{children:[`Универсальный компонент для форматированных чисел с вертикальным движением цифр. Увеличение и уменьшение значения автоматически получают противоположное направление. Компонент наследует GUI-типографику и учитывает `,(0,c.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`основные-props`,children:`Основные props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — текущее значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typography`}),` и `,(0,c.jsx)(t.code,{children:`color`}),` — типографика и цвет из `,(0,c.jsx)(t.code,{children:`Text`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`locales`}),` и `,(0,c.jsx)(t.code,{children:`format`}),` — параметры `,(0,c.jsx)(t.code,{children:`Intl.NumberFormat`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prefix`}),` и `,(0,c.jsx)(t.code,{children:`suffix`}),` — произвольный текст до и после числа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`direction: "auto" | "up" | "down" | "individual"`}),` — направление прокрутки. `,(0,c.jsx)(t.code,{children:`auto`}),` следует общему тренду, `,(0,c.jsx)(t.code,{children:`individual`}),` двигает каждую цифру в сторону её собственного изменения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`continuous`}),` — прокручивает промежуточные цифры при переходе.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`duration`}),` и `,(0,c.jsx)(t.code,{children:`easing`}),` — общая длительность и easing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timing`}),` — точечная настройка `,(0,c.jsx)(t.code,{children:`transform`}),`, `,(0,c.jsx)(t.code,{children:`spin`}),` и `,(0,c.jsx)(t.code,{children:`opacity`}),` через `,(0,c.jsx)(t.code,{children:`EffectTiming`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`animateOnMount`}),`, `,(0,c.jsx)(t.code,{children:`initialValue`}),`, `,(0,c.jsx)(t.code,{children:`mountDelay`}),` — анимация первого появления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`startOnVisible`}),`, `,(0,c.jsx)(t.code,{children:`visibilityThreshold`}),`, `,(0,c.jsx)(t.code,{children:`visibilityRootMargin`}),` — отложенный однократный запуск первого перехода при появлении компонента в viewport.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`animated`}),` — позволяет мгновенно закончить или полностью отключить анимацию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`respectMotionPreference`}),` — учитывает системную настройку уменьшения движения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`willChange`}),` — оптимизация для значений, которые гарантированно меняются часто.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<NumberFlow :value="bookings" typography="title-9" locales="ru-RU" />

<NumberFlow
  :value="revenue"
  :format="{ style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }"
  direction="up"
  continuous
  animate-on-mount
  start-on-visible
  :initial-value="0"
  :duration="900"
/>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`События `,(0,c.jsx)(t.code,{children:`animations-start`}),` и `,(0,c.jsx)(t.code,{children:`animations-finish`}),` позволяют синхронизировать внешние эффекты с началом и завершением перехода.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};