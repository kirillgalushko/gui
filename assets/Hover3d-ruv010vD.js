import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Hover3d/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`hover3d`,children:`Hover3d`}),`
`,(0,c.jsx)(t.p,{children:`Универсальная обёртка для лёгкого 3D-наклона содержимого вслед за курсором. Работает с любым содержимым slot: карточкой, кнопкой, аватаром или произвольным блоком. Touch-ввод игнорируется.`}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxTilt: number`}),` — базовый максимальный угол наклона в градусах. По умолчанию `,(0,c.jsx)(t.code,{children:`7`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`scale: number`}),` — базовый масштаб содержимого при наведении. По умолчанию `,(0,c.jsx)(t.code,{children:`1.025`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled: boolean`}),` — отключает наклон и увеличение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stretched: boolean`}),` — растягивает обёртку на всю ширину родителя.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Сила эффекта автоматически нормализуется по диагонали содержимого: большие блоки получают меньший угол и масштаб, маленькие — немного больший. Поэтому визуальное смещение остаётся примерно одинаковым для карточек, кнопок и аватаров.`}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Hover3d stretched :max-tilt="6" :scale="1.02">
  <Card>Содержимое карточки</Card>
</Hover3d>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};