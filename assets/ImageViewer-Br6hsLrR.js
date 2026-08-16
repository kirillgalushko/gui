import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/ImageViewer/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`imageviewer`,children:`ImageViewer`}),`
`,(0,c.jsx)(t.p,{children:`Полноэкранный viewer для одного изображения или галереи. Поддерживает keyboard navigation,
swipe, pinch, pan, zoom, rotation, thumbnails, loading и error state.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<ImageViewer
  v-model:is-opened="opened"
  v-model:active-index="activeIndex"
  :images="images"
  :loop="false"
  show-title
  show-counter
  show-thumbnails="auto"
  zoomable
  rotatable
  @error="handleImageError"
/>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Каждый элемент `,(0,c.jsx)(t.code,{children:`images`}),` содержит `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`src`}),` и опциональные `,(0,c.jsx)(t.code,{children:`thumbnailSrc`}),`, `,(0,c.jsx)(t.code,{children:`alt`}),`, `,(0,c.jsx)(t.code,{children:`title`}),`,
`,(0,c.jsx)(t.code,{children:`description`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loop`}),` включает циклическую навигацию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showThumbnails`}),`: `,(0,c.jsx)(t.code,{children:`true`}),`, `,(0,c.jsx)(t.code,{children:`false`}),` или `,(0,c.jsx)(t.code,{children:`auto`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minScale`}),`, `,(0,c.jsx)(t.code,{children:`maxScale`}),` задают границы zoom.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preload`}),` задаёт количество соседних изображений для предзагрузки.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Slots: `,(0,c.jsx)(t.code,{children:`toolbar`}),`, `,(0,c.jsx)(t.code,{children:`caption`}),`, `,(0,c.jsx)(t.code,{children:`thumbnail`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Клавиатура: Escape, стрелки, `,(0,c.jsx)(t.code,{children:`+`}),`, `,(0,c.jsx)(t.code,{children:`-`}),`, `,(0,c.jsx)(t.code,{children:`R`}),`, `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};