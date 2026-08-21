import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Accordion/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,c.jsxs)(t.p,{children:[`Вертикальный список раскрываемых секций. Компонент состоит из `,(0,c.jsx)(t.code,{children:`Accordion`}),`,
`,(0,c.jsx)(t.code,{children:`AccordionItem`}),`, `,(0,c.jsx)(t.code,{children:`AccordionTrigger`}),` и `,(0,c.jsx)(t.code,{children:`AccordionContent`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Accordion v-model="opened" multiple>
  <AccordionItem value="check-in">
    <AccordionTrigger>Заселение</AccordionTrigger>
    <AccordionContent>Инструкция по получению ключей.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="wifi">
    <AccordionTrigger>Wi-Fi</AccordionTrigger>
    <AccordionContent>Название сети и пароль.</AccordionContent>
  </AccordionItem>
</Accordion>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`v-model`}),` содержит массив значений открытых секций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`default-value`}),` задаёт начальное состояние без управляемого `,(0,c.jsx)(t.code,{children:`v-model`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`multiple`}),` разрешает раскрывать несколько секций одновременно.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Без `,(0,c.jsx)(t.code,{children:`multiple`}),` открытие секции закрывает предыдущую.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled`}),` поддерживается как для всего `,(0,c.jsx)(t.code,{children:`Accordion`}),`, так и для отдельного
`,(0,c.jsx)(t.code,{children:`AccordionItem`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};