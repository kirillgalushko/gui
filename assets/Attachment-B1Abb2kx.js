import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Attachment/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`attachment`,children:`Attachment`}),`
`,(0,c.jsx)(t.p,{children:`Составной компонент файла или изображения с медиа, метаданными, состоянием загрузки и
независимыми действиями.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Attachment state="done" size="medium" orientation="horizontal" stretched>
  <AttachmentMedia>
    <IconFileTypePdfOutline />
  </AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>contract.pdf</AttachmentTitle>
    <AttachmentDescription>PDF · 1.2 МБ</AttachmentDescription>
  </AttachmentContent>
  <AttachmentActions>
    <AttachmentAction aria-label="Удалить contract.pdf">
      <IconXOutline />
    </AttachmentAction>
  </AttachmentActions>
</Attachment>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`state`}),`: `,(0,c.jsx)(t.code,{children:`idle`}),`, `,(0,c.jsx)(t.code,{children:`uploading`}),`, `,(0,c.jsx)(t.code,{children:`processing`}),`, `,(0,c.jsx)(t.code,{children:`error`}),`, `,(0,c.jsx)(t.code,{children:`done`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size`}),`: `,(0,c.jsx)(t.code,{children:`large`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),`, `,(0,c.jsx)(t.code,{children:`small`}),`, `,(0,c.jsx)(t.code,{children:`extra-small`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size`}),` пропорционально меняет padding, media, title и description.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`orientation`}),`: `,(0,c.jsx)(t.code,{children:`horizontal`}),` или `,(0,c.jsx)(t.code,{children:`vertical`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`horizontal`}),` используется для строк состояния файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`vertical`}),` используется для image-card: крупное квадратное preview, подпись снизу и actions
поверх media.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`AttachmentMedia`}),` поддерживает `,(0,c.jsx)(t.code,{children:`icon`}),` и `,(0,c.jsx)(t.code,{children:`image`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`AttachmentMediaTrigger`}),` открывает preview кликом только по области изображения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`AttachmentTrigger`}),` делает всю карточку интерактивной, сохраняя отдельные actions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`AttachmentGroup`}),` строит вертикальный список или горизонтальную scroll/snap-ленту.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};