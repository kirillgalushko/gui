import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/AdaptiveModal/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`adaptivemodal`,children:`AdaptiveModal`}),`
`,(0,c.jsxs)(t.p,{children:[`Обёртка над `,(0,c.jsx)(t.code,{children:`Modal`}),` и `,(0,c.jsx)(t.code,{children:`Sheet`}),` с единым API. На больших экранах рендерит `,(0,c.jsx)(t.code,{children:`Modal`}),`, на мобильных breakpoints из `,(0,c.jsx)(t.code,{children:`useViewportBreakpoint`}),` рендерит `,(0,c.jsx)(t.code,{children:`Sheet`}),` с `,(0,c.jsx)(t.code,{children:`side="bottom"`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isOpened`}),` — открыто ли окно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onClose`}),` — обработчик закрытия.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showCloseButton`}),` — показывает кнопку закрытия.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`title`}),` — заголовок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modalProps`}),` — уникальные props для `,(0,c.jsx)(t.code,{children:`Modal`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sheetProps`}),` — уникальные props для мобильного `,(0,c.jsx)(t.code,{children:`Sheet`}),`; `,(0,c.jsx)(t.code,{children:`side`}),` остается внутренним и всегда равен `,(0,c.jsx)(t.code,{children:`bottom`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<AdaptiveModal
  :isOpened="visible"
  :onClose="close"
  showCloseButton
  title="Редактировать объявление"
  :sheet-props="{ size: 'full' }"
>
  Контент

  <template #footer>
    <Button mode="ghost" @click="close">Отмена</Button>
    <Button mode="contrast" @click="close">Сохранить</Button>
  </template>
</AdaptiveModal>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};