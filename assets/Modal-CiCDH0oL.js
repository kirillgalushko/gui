import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Modal/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`Modal`}),` использует `,(0,c.jsx)(t.code,{children:`Card`}),` как поверхность диалога. `,(0,c.jsx)(t.code,{children:`title`}),`, `,(0,c.jsx)(t.code,{children:`description`}),` и слот `,(0,c.jsx)(t.code,{children:`footer`}),`
остаются совместимы с предыдущим API; внутри они рендерятся через `,(0,c.jsx)(t.code,{children:`ModalHeader`}),`,
`,(0,c.jsx)(t.code,{children:`ModalContent`}),` и `,(0,c.jsx)(t.code,{children:`ModalFooter`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Modal
  :isOpened="visible"
  :onClose="close"
  title="Сохранить изменения?"
  showCloseButton
>
  Изменения будут сохранены для всех участников.

  <template #footer>
    <Button @click="close">Отмена</Button>
    <Button mode="contrast" @click="save">Сохранить</Button>
  </template>
</Modal>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ModalHeader`}),`, `,(0,c.jsx)(t.code,{children:`ModalContent`}),` и `,(0,c.jsx)(t.code,{children:`ModalFooter`}),` — типизированные переэкспорты соответствующих
частей `,(0,c.jsx)(t.code,{children:`Card`}),` для единого API диалогов и карточек.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ModalFooter`}),` добавляется только при наличии слота `,(0,c.jsx)(t.code,{children:`footer`}),` и выравнивает действия справа.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для мобильных сценариев используйте `,(0,c.jsx)(t.code,{children:`AdaptiveModal`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};