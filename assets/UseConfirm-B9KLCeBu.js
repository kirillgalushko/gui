import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";import{t as o}from"./useConfirm-CXhNfODl.js";function s(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Components/Confirm/useConfirm`}),`
`,(0,l.jsx)(t.h1,{id:`useconfirm`,children:`useConfirm`}),`
`,(0,l.jsxs)(t.p,{children:[`Хук `,(0,l.jsx)(t.code,{children:`useConfirm`}),` используется для создания модального окна подтверждения, в котором можно настроить заголовок, описание, текст кнопок подтверждения и отмены.`]}),`
`,(0,l.jsx)(t.h2,{id:`параметры`,children:`Параметры`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`title`}),` (`,(0,l.jsx)(t.em,{children:`string`}),`) — Заголовок окна подтверждения.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`description`}),` (`,(0,l.jsx)(t.em,{children:`string`}),`) — Описание, отображаемое в модальном окне.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`confirmButtonText`}),` (`,(0,l.jsx)(t.em,{children:`string`}),`) — Текст кнопки подтверждения (по умолчанию "Подтвердить").`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`cancelButtonText`}),` (`,(0,l.jsx)(t.em,{children:`string`}),`) — Текст кнопки отмены (по умолчанию "Отменить").`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isOpened`}),` (`,(0,l.jsx)(t.em,{children:`boolean`}),`) — Состояние открытия/закрытия окна.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`confirm`}),` (`,(0,l.jsx)(t.em,{children:`function`}),`) — Функция, вызываемая для открытия окна подтверждения с параметрами.`]}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-tsx`,children:`const { confirm, ...confirmData } = useConfirm()

const onClick = async () => {
  try {
    await confirm({ title: 'Вы уверены?', description: 'Эти изменения нельзя будет отменить.' });
    // Пользователь подтвердил действие
  } catch (e) {
    // Отмена
  }
}
...
<template>
  <button @click={onClick}></button>
  <Confirm v-bind="confirmData" />
</tempalte>
`})})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a(),o()})))()}u();export{c as default};