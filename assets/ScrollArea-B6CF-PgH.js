import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/ScrollArea/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`scrollarea`,children:`ScrollArea`}),`
`,(0,c.jsx)(t.p,{children:`Ограниченная область с нативной прокруткой и оформленным scrollbar. Поддерживает
клавиатуру, touch-инерцию браузера и не требует локальных стилей у потребителя.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<ScrollArea :max-height="320" aria-label="История действий">
  <Item v-for="event in history" :key="event.id">
    {{ event.title }}
  </Item>
</ScrollArea>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max-height`}),` принимает число в пикселях или любое CSS-значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`orientation`}),` поддерживает `,(0,c.jsx)(t.code,{children:`vertical`}),`, `,(0,c.jsx)(t.code,{children:`horizontal`}),` и `,(0,c.jsx)(t.code,{children:`both`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyboard-focusable`}),` управляет `,(0,c.jsx)(t.code,{children:`tabindex`}),`; по умолчанию включён.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stable-scrollbar`}),` резервирует место под scrollbar и предотвращает скачок
ширины содержимого.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для значимой области задавайте `,(0,c.jsx)(t.code,{children:`aria-label`}),` или `,(0,c.jsx)(t.code,{children:`aria-labelledby`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};