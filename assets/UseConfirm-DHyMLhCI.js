import{ae as n,af as c}from"./index-Bzel_TfI.js";import{useMDXComponents as t}from"./index-CFTnJw_j.js";import"./chunk-NUUEMKO5-B_VS-ay_.js";import"./vue.esm-bundler-CfgtLz7v.js";import"./iframe-C28rb-FN.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";function r(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Components/Confirm/useConfirm"}),`
`,n.jsx(e.h1,{id:"useconfirm",children:"useConfirm"}),`
`,n.jsxs(e.p,{children:["Хук ",n.jsx(e.code,{children:"useConfirm"})," используется для создания модального окна подтверждения, в котором можно настроить заголовок, описание, текст кнопок подтверждения и отмены."]}),`
`,n.jsx(e.h2,{id:"параметры",children:"Параметры"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"title"})," (",n.jsx(e.em,{children:"string"}),") — Заголовок окна подтверждения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"description"})," (",n.jsx(e.em,{children:"string"}),") — Описание, отображаемое в модальном окне."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"confirmButtonText"})," (",n.jsx(e.em,{children:"string"}),') — Текст кнопки подтверждения (по умолчанию "Подтвердить").']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cancelButtonText"})," (",n.jsx(e.em,{children:"string"}),') — Текст кнопки отмены (по умолчанию "Отменить").']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isOpened"})," (",n.jsx(e.em,{children:"boolean"}),") — Состояние открытия/закрытия окна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"confirm"})," (",n.jsx(e.em,{children:"function"}),") — Функция, вызываемая для открытия окна подтверждения с параметрами."]}),`
`]}),`
`,n.jsx(e.h2,{id:"пример-использования",children:"Пример использования"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const { confirm, ...confirmData } = useConfirm()

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
`})})]})}function f(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{f as default};
