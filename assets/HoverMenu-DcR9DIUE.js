import{ae as e,af as u}from"./index-BmahiK41.js";import{useMDXComponents as r}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-i18z9VBi.js";import"./iframe-C9p_HffE.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h2:"h2",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Components/HoverMenu/Docs"}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<template>
  <HoverMenu>
    <Button>Hover me</Button>

    <template #menu>
      <HoverMenuList>
        <HoverMenuItem><IconPencilOutline />Открыть</HoverMenuItem>
        <HoverMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</HoverMenuItem>
      </HoverMenuList>
    </template>
  </HoverMenu>
</tempalte>
`})}),`
`,e.jsx(n.h2,{id:"с-дополнительным-подменю",children:"С дополнительным подменю"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<template>
  <HoverMenu>
    <Button>Hover me</Button>

    <template #menu>
      <HoverMenuList>
        <HoverMenuItem><IconPencilOutline />Открыть</HoverMenuItem>
        <HoverMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</HoverMenuItem>
        <HoverMenu>
          <HoverMenuItem showArrow><IconShareOutline />Поделиться</HoverMenuItem>
          <template #menu>
            <HoverMenuList>
              <HoverMenuItem><IconCopyOutline />Скопировать ссылку</HoverMenuItem>
              <HoverMenuItem><IconMailOutline />Отправить по почте</HoverMenuItem>
            </HoverMenuList>
          </template>
        </HoverMenu>
        <HoverMenuSeparator />
        <HoverMenuItem><IconArchiveOutline />Архивировать</HoverMenuItem>
      </HoverMenuList>
    </template>
  </HoverMenu>
</tempalte>
`})})]})}function I(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{I as default};
