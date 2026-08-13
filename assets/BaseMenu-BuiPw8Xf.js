import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/BaseMenu/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`basemenu`,children:`BaseMenu`}),`
`,(0,c.jsxs)(t.p,{children:[`Внутреннее семейство primitives для меню GUI. `,(0,c.jsx)(t.code,{children:`BaseMenuGroup`}),` объединяет связанные
элементы, `,(0,c.jsx)(t.code,{children:`BaseMenuLabel`}),` подписывает группу, `,(0,c.jsx)(t.code,{children:`BaseMenuItem`}),` выполняет действие,
а checkbox/radio items управляют выбором через стандартный `,(0,c.jsx)(t.code,{children:`v-model`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width="auto"`}),` по умолчанию подбирает ширину меню по содержимому.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxWidth`}),` ограничивает автоматическую ширину произвольным CSS-значением; по
умолчанию меню не выходит за viewport с внешним отступом 8 px.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для явной ширины передай CSS-значение через `,(0,c.jsx)(t.code,{children:`width`}),`, например `,(0,c.jsx)(t.code,{children:`width="320px"`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<BaseMenu max-width="320px">
  <BaseMenuGroup>
    <BaseMenuLabel>Отображение</BaseMenuLabel>
    <BaseMenuCheckboxItem v-model="showStatus">Строка состояния</BaseMenuCheckboxItem>
  </BaseMenuGroup>
  <BaseMenuSeparator />
  <BaseMenuGroup>
    <BaseMenuLabel>Позиция</BaseMenuLabel>
    <BaseMenuRadioGroup v-model="position">
      <BaseMenuRadioItem value="top">Сверху</BaseMenuRadioItem>
      <BaseMenuRadioItem value="bottom">Снизу</BaseMenuRadioItem>
    </BaseMenuRadioGroup>
  </BaseMenuGroup>
</BaseMenu>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};