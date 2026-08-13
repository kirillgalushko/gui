import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/AuroraBackground/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`aurorabackground`,children:`AuroraBackground`}),`
`,(0,c.jsx)(t.p,{children:`Декоративная surface-обёртка с несколькими мягкими цветовыми пятнами. Фон занимает полную высоту содержимого, не перехватывает события и автоматически адаптирует интенсивность цветов к светлой и тёмной теме.`}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`palette: "brand" | "ocean" | "sunset"`}),` — цветовая палитра.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`intensity: "subtle" | "medium" | "strong"`}),` — общая заметность эффекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`animated: boolean`}),` — включает медленное движение цветовых пятен. При `,(0,c.jsx)(t.code,{children:`prefers-reduced-motion`}),` движение отключается автоматически.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<AuroraBackground palette="brand" intensity="strong">
  <main>Содержимое промо-страницы</main>
</AuroraBackground>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Для более материального эффекта можно вложить `,(0,c.jsx)(t.code,{children:`NoiseOverlay`}),` внутрь `,(0,c.jsx)(t.code,{children:`AuroraBackground`}),`: так зерно окажется над цветовым фоном, но под содержимым.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};