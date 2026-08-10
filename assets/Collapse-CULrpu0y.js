import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Collapse/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`collapse`,children:`Collapse`}),`
`,(0,c.jsxs)(t.p,{children:[`Анимируемая content-only обертка. Trigger располагается снаружи, а `,(0,c.jsx)(t.code,{children:`useCollapse`}),`
связывает его с содержимым и позволяет управлять состоянием программно.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
const { collapseProps, triggerProps } = useCollapse({ id: "details" });
<\/script>

<Button v-bind="triggerProps">Показать детали</Button>

<Collapse v-bind="collapseProps">
  Произвольное содержимое
</Collapse>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`opened`}),` управляет видимостью.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`duration`}),` задает длительность анимации в миллисекундах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`labelled-by`}),` связывает область с внешним trigger.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Закрытое содержимое остается смонтированным, но исключается из навигации через `,(0,c.jsx)(t.code,{children:`inert`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};