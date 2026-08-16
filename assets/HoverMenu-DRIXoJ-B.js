import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h2:`h2`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/HoverMenu/Docs`}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`<template>
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
`,(0,c.jsx)(t.h2,{id:`с-дополнительным-подменю`,children:`С дополнительным подменю`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`<template>
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};