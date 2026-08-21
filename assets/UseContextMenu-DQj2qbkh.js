import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";import{t as o}from"./useContextMenu-A3PWvehk.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Components/ContextMenu/useContextMenu`}),`
`,(0,l.jsx)(t.h1,{id:`usecontextmenu`,children:`useContextMenu`}),`
`,(0,l.jsxs)(t.p,{children:[`Хук `,(0,l.jsx)(t.code,{children:`useContextMenu`}),` используется для создания контекстного меню поверх области взаимодействия.`]}),`
`,(0,l.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:`const { contextMenuData, targetRef } = useContextMenu();
...
<template>
  <div ref="targetRef">Область поддерживающая правый клик</div>

  <ContextMenu :data="contextMenuData">
    <ContextMenuList>
      <ContextMenuItem><IconPencilOutline />Открыть</ContextMenuItem>
      <ContextMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</ContextMenuItem>
      <ContextSubmenu>
        <ContextMenuItem showArrow><IconShareOutline />Поделиться</ContextMenuItem>
        <template #menu>
          <ContextMenuList>
            <ContextMenuItem><IconMailOutline />Отправить по почте</ContextMenuItem>
            <ContextMenuItem><IconFeatherOutline />Отправить голубем</ContextMenuItem>
          </ContextMenuList>
        </template>
      </ContextSubmenu>
      <ContextMenuSeparator />
      <ContextMenuItem><IconArchiveOutline />Архивировать</ContextMenuItem>
    </ContextMenuList>
  </ContextMenu>
</tempalte>
`})})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a(),o()})))()}u();export{c as default};