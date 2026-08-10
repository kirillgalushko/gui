import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`usecollapse`,children:`useCollapse`}),`
`,(0,o.jsxs)(t.p,{children:[`Управляет состоянием `,(0,o.jsx)(t.code,{children:`Collapse`}),` и связывает его с любым внешним триггером через
доступные ARIA-атрибуты.`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
import { Button, Collapse, useCollapse } from "@gui/components";

const { collapseProps, open, triggerProps } = useCollapse({
  id: "details",
});
<\/script>

<template>
  <Button v-bind="triggerProps">Показать детали</Button>
  <Collapse v-bind="collapseProps">Содержимое</Collapse>
</template>
`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`triggerProps`}),` можно передать кнопке, ссылке или другому интерактивному элементу.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`collapseProps`}),` передаются компоненту `,(0,o.jsx)(t.code,{children:`Collapse`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`open`}),`, `,(0,o.jsx)(t.code,{children:`close`}),`, `,(0,o.jsx)(t.code,{children:`toggle`}),` и `,(0,o.jsx)(t.code,{children:`setOpened`}),` управляют состоянием программно.`]}),`
`,(0,o.jsxs)(t.li,{children:[`Через `,(0,o.jsx)(t.code,{children:`opened`}),` можно передать внешний `,(0,o.jsx)(t.code,{children:`Ref<boolean>`}),`.`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};