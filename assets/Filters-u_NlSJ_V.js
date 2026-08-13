import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Filters/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`filters`,children:`Filters`}),`
`,(0,c.jsxs)(t.p,{children:[`Высокоуровневая композиция для добавления, изменения и удаления активных
фильтров. Состояние хранится во внешнем `,(0,c.jsx)(t.code,{children:`v-model`}),`, а список доступных полей
передаётся через `,(0,c.jsx)(t.code,{children:`fields`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Filters v-model="filters" :fields="fields" size="small" mode="outline" />
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Поле задаёт собственные `,(0,c.jsx)(t.code,{children:`operators`}),`, `,(0,c.jsx)(t.code,{children:`options`}),`, тип значения, `,(0,c.jsx)(t.code,{children:`formatValue`}),`
и при необходимости `,(0,c.jsx)(t.code,{children:`isValueEqual`}),` для объектных значений. Повторные фильтры
одного поля по умолчанию объединяются; для независимых экземпляров включите
`,(0,c.jsx)(t.code,{children:`allow-duplicate-fields`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`item-layout="compact"`}),` скрывает у активных фильтров название поля и оператор,
оставляя выбранное значение и кнопку удаления. Для смешанного набора задайте
`,(0,c.jsx)(t.code,{children:`itemLayout: "compact"`}),` только нужным полям.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Кнопка общей очистки учитывает только фильтры из переданного `,(0,c.jsx)(t.code,{children:`fields`}),`. Фильтры,
которыми управляет другой компонент и которых нет в `,(0,c.jsx)(t.code,{children:`fields`}),`, не показывают
кнопку и сохраняются при очистке.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`show-menu`}),` и `,(0,c.jsx)(t.code,{children:`show-items`}),` позволяют разнести кнопку добавления и строку активных
фильтров по разным частям интерфейса, сохранив один общий `,(0,c.jsx)(t.code,{children:`v-model`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Тип `,(0,c.jsx)(t.code,{children:`date`}),` использует стандартный `,(0,c.jsx)(t.code,{children:`DatePicker`}),` и хранит выбранное значение как
`,(0,c.jsx)(t.code,{children:`Date`}),`. По умолчанию доступны операторы «в дату», «начиная с» и «до даты».`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};