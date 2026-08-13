import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Navbar/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`navbar`,children:`Navbar`}),`
`,(0,c.jsxs)(t.p,{children:[`Адаптивная верхняя навигация со слотами `,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`default`}),`, `,(0,c.jsx)(t.code,{children:`actions`}),` и
опциональными `,(0,c.jsx)(t.code,{children:`compactActions`}),`, `,(0,c.jsx)(t.code,{children:`mobile`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Navbar mode="floating" blur sticky>
  <template #left><AppLogo /></template>
  <NavigationMenu>...</NavigationMenu>
  <template #actions>
    <Button mode="ghost">Войти</Button>
    <Button mode="contrast">Начать</Button>
  </template>
</Navbar>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode="default"`}),` создаёт полноширинную панель с границей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode="floating"`}),` создаёт скруглённую плавающую панель.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stretched`}),` управляет растягиванием по ширине. По умолчанию включён для
`,(0,c.jsx)(t.code,{children:`default`}),` и выключен для `,(0,c.jsx)(t.code,{children:`floating`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sticky`}),` закрепляет Navbar сверху; floating-вариант сохраняет внешний отступ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`blur`}),` делает фон полупрозрачным и размывает проходящий под Navbar контент.`]}),`
`,(0,c.jsxs)(t.li,{children:[`На `,(0,c.jsx)(t.code,{children:`xs`}),`, `,(0,c.jsx)(t.code,{children:`s`}),` и при нехватке места навигация и actions автоматически
переносятся в компактный вариант. Центральная навигация в desktop-варианте
остаётся строго по центру Navbar.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Слот `,(0,c.jsx)(t.code,{children:`mobile`}),` полностью заменяет стандартную мобильную композицию. Если он не
передан, используются содержимое default-слота и `,(0,c.jsx)(t.code,{children:`actions`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Слот `,(0,c.jsx)(t.code,{children:`compactActions`}),` размещает действия непосредственно в компактной панели
рядом с trigger мобильного меню.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mobileMenuVariant="dropdown"`}),` показывает мобильное меню в компактном
`,(0,c.jsx)(t.code,{children:`Dropdown`}),`; значение по умолчанию — `,(0,c.jsx)(t.code,{children:`sheet`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`v-model:mobile-open`}),` позволяет управлять мобильным меню извне.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};