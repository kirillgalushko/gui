import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Dropdown/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`dropdown`,children:`Dropdown`}),`
`,(0,c.jsxs)(t.p,{children:[`Выпадающее меню или панель, привязанная к trigger-элементу. В GUI trigger остаётся
default-слотом `,(0,c.jsx)(t.code,{children:`Dropdown`}),`, а content — слотом `,(0,c.jsx)(t.code,{children:`popper`}),`; отдельные обёртки для них не
создаются.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stretched`}),` растягивает trigger на ширину родителя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`contentWidth="auto"`}),` по умолчанию подбирает ширину панели по содержимому.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`contentMaxWidth`}),` ограничивает автоматическую ширину произвольным CSS-значением;
по умолчанию content не выходит за viewport с внешним отступом 8 px.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Фиксированные пресеты `,(0,c.jsx)(t.code,{children:`contentWidth`}),` сохранены: `,(0,c.jsx)(t.code,{children:`extra-small`}),` — 260 px,
`,(0,c.jsx)(t.code,{children:`small`}),` — 320 px, `,(0,c.jsx)(t.code,{children:`medium`}),` — 420 px, `,(0,c.jsx)(t.code,{children:`large`}),` — 520 px.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`contentPadding`}),` управляет внутренним отступом: `,(0,c.jsx)(t.code,{children:`default`}),` — 4 px, `,(0,c.jsx)(t.code,{children:`comfortable`}),` — 12 px.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Содержимое панели передаётся через слот `,(0,c.jsx)(t.code,{children:`popper`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Dropdown content-max-width="320px">
  <Button>Открыть</Button>
  <template #popper>
    <DropdownGroup>
      <DropdownLabel>Отображение</DropdownLabel>
      <DropdownCheckboxItem v-model="showStatus">Строка состояния</DropdownCheckboxItem>
      <DropdownCheckboxItem v-model="showPanel">Панель</DropdownCheckboxItem>
    </DropdownGroup>
  </template>
</Dropdown>
`})}),`
`,(0,c.jsx)(t.h2,{id:`radio-group`,children:`Radio group`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<DropdownRadioGroup v-model="position">
  <DropdownRadioItem value="top">Сверху</DropdownRadioItem>
  <DropdownRadioItem value="bottom">Снизу</DropdownRadioItem>
</DropdownRadioGroup>
`})}),`
`,(0,c.jsx)(t.h2,{id:`submenu`,children:`Submenu`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DropdownSub`}),` открывается при наведении или focus на `,(0,c.jsx)(t.code,{children:`DropdownSubTrigger`}),` и остаётся
открытым при переходе указателя на submenu content. После ухода из обеих областей
закрытие выполняется с короткой задержкой, поэтому промежуток между панелями не
схлопывает меню.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<DropdownSub>
  <DropdownSubTrigger>Поделиться</DropdownSubTrigger>
  <template #popper>
    <DropdownGroup>
      <DropdownLabel>Поделиться</DropdownLabel>
      <DropdownItem>Скопировать ссылку</DropdownItem>
    </DropdownGroup>
  </template>
</DropdownSub>
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DropdownList`}),` оставлен как deprecated-алиас `,(0,c.jsx)(t.code,{children:`DropdownGroup`}),` для совместимости.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};