import{ae as e,af as x}from"./index-BJTlycg5.js";import{useMDXComponents as u}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-32SzwKUu.js";import"./vue.esm-bundler-CfgtLz7v.js";import"./iframe-BH-vWgLz.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...u(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/ContextMenu/useContextMenu"}),`
`,e.jsx(t.h1,{id:"usecontextmenu",children:"useContextMenu"}),`
`,e.jsxs(t.p,{children:["Хук ",e.jsx(t.code,{children:"useContextMenu"})," используется для создания контекстного меню поверх области взаимодействия."]}),`
`,e.jsx(t.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`const { contextMenuData, targetRef } = useContextMenu();
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
`})})]})}function h(n={}){const{wrapper:t}={...u(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{h as default};
