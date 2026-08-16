import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/FileUpload/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`fileupload`,children:`FileUpload`}),`
`,(0,c.jsxs)(t.p,{children:[`Доступный file picker с drag-and-drop, validation, управляемым значением и представлением
файлов через `,(0,c.jsx)(t.code,{children:`Attachment`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<FileUpload
  v-model="files"
  accept="image/*,.pdf"
  multiple
  :max-files="2"
  :max-size="10 * 1024 * 1024"
  @reject="showErrors"
>
  <FileUploadDropzone
    title="Перетащите документы"
    description="До 2 файлов, каждый не больше 10 МБ"
  />
  <FileUploadList v-slot="{ files }">
    <FileUploadItem v-for="file in files" :key="file.name" :file="file" />
  </FileUploadList>
</FileUpload>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Поддерживает single/multiple, `,(0,c.jsx)(t.code,{children:`accept`}),`, `,(0,c.jsx)(t.code,{children:`maxFiles`}),`, `,(0,c.jsx)(t.code,{children:`maxSize`}),`, `,(0,c.jsx)(t.code,{children:`capture`}),`, `,(0,c.jsx)(t.code,{children:`required`}),`,
`,(0,c.jsx)(t.code,{children:`disabled`}),`, `,(0,c.jsx)(t.code,{children:`invalid`}),` и пользовательский `,(0,c.jsx)(t.code,{children:`validate`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`v-model`}),` содержит текущие `,(0,c.jsx)(t.code,{children:`File[]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`События `,(0,c.jsx)(t.code,{children:`accept`}),`, `,(0,c.jsx)(t.code,{children:`reject`}),`, `,(0,c.jsx)(t.code,{children:`change`}),` позволяют разделить успешный выбор и ошибки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FileUploadDropzone`}),` открывается кликом, Enter/Space и принимает drag-and-drop.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FileUpload`}),` не управляет раскладкой и не имеет `,(0,c.jsx)(t.code,{children:`orientation`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FileUploadList`}),` поддерживает `,(0,c.jsx)(t.code,{children:`vertical`}),` для строк состояний и `,(0,c.jsx)(t.code,{children:`horizontal`}),` для ленты
vertical image-card.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FileUploadItem`}),` показывает preview изображения, метаданные, состояние и progress.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};