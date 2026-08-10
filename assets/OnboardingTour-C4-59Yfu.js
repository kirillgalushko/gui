import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,o as a,s as o}from"./blocks-WrHcAdE1.js";import{n as s,r as c}from"./OnboardingTour.stories-BYqTMFm9.js";function l(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Components/OnboardingTour/Docs`}),`
`,(0,d.jsx)(t.h1,{id:`onboardingtour`,children:`OnboardingTour`}),`
`,(0,d.jsx)(t.p,{children:`Показывает пошаговую подсказку около реального DOM-элемента. Четыре части overlay
блокируют весь интерфейс за пределами target и карточки, поэтому target остаётся
интерактивным без клонирования. Focus guard ограничивает клавиатурную навигацию той же
областью.`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
import { OnboardingTour, useOnboardingTour } from "@gui/components";

const steps = [
  {
    id: "filters",
    target: "[data-tour='filters']",
    title: "Быстрые фильтры",
    description: "Сохраняйте часто используемые наборы.",
    placement: "bottom-start",
  },
];
const tour = useOnboardingTour({ steps });
<\/script>

<template>
  <Button @click="tour.start()">Показать возможности</Button>
  <OnboardingTour
    v-model:open="tour.open.value"
    v-model:step="tour.step.value"
    :steps="steps"
  />
</template>
`})}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`target`}),` принимает CSS-селектор, `,(0,d.jsx)(t.code,{children:`HTMLElement`}),` или функцию, которая возвращает элемент.
Функция удобна, когда target появляется после навигации или условного рендера.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`placement`}),`, `,(0,d.jsx)(t.code,{children:`sideOffset`}),`, `,(0,d.jsx)(t.code,{children:`spotlightPadding`}),`, `,(0,d.jsx)(t.code,{children:`spotlightRadius`}),` можно задать на шаге.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`missingTargetBehavior`}),`: `,(0,d.jsx)(t.code,{children:`close`}),` (по умолчанию), `,(0,d.jsx)(t.code,{children:`skip`}),` или `,(0,d.jsx)(t.code,{children:`wait`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`scrollIntoView: false`}),` отключает автоматическую прокрутку конкретного шага.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`lockTargetScroll: false`}),` разрешает ручную прокрутку из подсвеченной области; по
умолчанию wheel и touch-scroll блокируются, не мешая кликам по реальному target.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`animated: false`}),` отключает появление overlay, spotlight и карточки; системная настройка
reduced motion учитывается автоматически.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`advanceOnTargetClick`}),` переводит тур дальше после реального клика по target.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`card`}),`, `,(0,d.jsx)(t.code,{children:`title`}),`, `,(0,d.jsx)(t.code,{children:`description`}),`, `,(0,d.jsx)(t.code,{children:`content`}),`, `,(0,d.jsx)(t.code,{children:`progress`}),` и `,(0,d.jsx)(t.code,{children:`actions`}),` позволяют заменить
нужную часть карточки.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`refresh()`}),` доступен через ref компонента для редких внешних layout-изменений; resize,
scroll, layout shift и scroll-контейнеры отслеживаются автоматически.`]}),`
`]}),`
`,(0,d.jsx)(i,{of:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=r(),t(),o(),c()})))()}f();export{u as default};