import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Toaster/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`toaster`,children:`Toaster`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент-контейнер для уведомлений на базе `,(0,c.jsx)(t.code,{children:`vue-sonner`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Разместите `,(0,c.jsx)(t.code,{children:`Toaster`}),` один раз в корне приложения. Для показа уведомлений используйте `,(0,c.jsx)(t.code,{children:`toast`}),`, экспортируемый из `,(0,c.jsx)(t.code,{children:`@gui/components`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
import { Toaster, toast } from "@gui/components";

const onSave = () => {
  toast.success("Сохранено", {
    description: "Изменения применены",
  });
};
<\/script>

<template>
  <button @click="onSave">Сохранить</button>
  <Toaster />
</template>
`})}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.p,{children:[`Поддерживает props `,(0,c.jsx)(t.code,{children:`Toaster`}),` из `,(0,c.jsx)(t.code,{children:`vue-sonner`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`По умолчанию:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`theme: 'system'`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`position: 'bottom-center'`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`closeButton: true`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`richColors: true`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`visibleToasts: 4`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`gap: 12`})}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`стили`,children:`Стили`}),`
`,(0,c.jsxs)(t.p,{children:[`Стили находятся в компоненте и используют цвета из `,(0,c.jsx)(t.code,{children:`variables.css`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};