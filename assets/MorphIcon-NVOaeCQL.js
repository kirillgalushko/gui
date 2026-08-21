import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/MorphIcon/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`morphicon`,children:`MorphIcon`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент-обёртка над `,(0,c.jsx)(t.code,{children:`MorphIcon`}),` из `,(0,c.jsx)(t.code,{children:`morphicons/vue`}),` для плавного morph-перехода между иконками.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Работает с `,(0,c.jsx)(t.code,{children:`IconInput`}),` напрямую (например, строкой `,(0,c.jsx)(t.code,{children:`d`}),`) и с иконками из `,(0,c.jsx)(t.code,{children:`@gui/icons`}),` в свойствах `,(0,c.jsx)(t.code,{children:`icon`}),`, `,(0,c.jsx)(t.code,{children:`from`}),` и `,(0,c.jsx)(t.code,{children:`to`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`uncontrolled`,children:`Uncontrolled`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<template>
  <MorphIcon :icon="IconHomeOutline" :size="56" />
</template>
`})}),`
`,(0,c.jsx)(t.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<template>
  <MorphIcon
    :from="IconHomeOutline"
    :to="IconMailOutline"
    :progress="progress"
  />
</template>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};