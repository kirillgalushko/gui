import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Sidebar/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`sidebar`,children:`Sidebar`}),`
`,(0,c.jsx)(t.p,{children:`Боковая панель с изменяемой шириной, секциями, вложенной навигацией и опциональным snap-схлопыванием.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width`}),` задаёт начальную или управляемую ширину.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minWidth`}),` и `,(0,c.jsx)(t.code,{children:`maxWidth`}),` ограничивают геометрию панели.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compactWidth`}),` задаёт ширину компактного состояния.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`collapseThreshold`}),` включает snap-поведение и задаёт минимальную обычную ширину. При уменьшении Sidebar сначала останавливается на этом значении.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Точка переключения автоматически вычисляется посередине между `,(0,c.jsx)(t.code,{children:`compactWidth`}),` и `,(0,c.jsx)(t.code,{children:`collapseThreshold`}),`: `,(0,c.jsx)(t.code,{children:`compactWidth + (collapseThreshold - compactWidth) / 2`}),`. Для значений `,(0,c.jsx)(t.code,{children:`80`}),` и `,(0,c.jsx)(t.code,{children:`180`}),` Sidebar переключается в обе стороны на `,(0,c.jsx)(t.code,{children:`130px`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`При обратном переходе Sidebar быстро анимируется только от `,(0,c.jsx)(t.code,{children:`compactWidth`}),` до `,(0,c.jsx)(t.code,{children:`collapseThreshold`}),`. Сразу после порога ширина снова напрямую следует за курсором без анимационной задержки. Фактически выбранная курсором ширина сохраняется отдельно от промежуточной анимированной ширины.`]}),`
`,(0,c.jsxs)(t.li,{children:[`При запуске snap-анимации всё содержимое Sidebar одновременно исчезает за `,(0,c.jsx)(t.code,{children:`45ms`}),`, остаётся полностью скрытым `,(0,c.jsx)(t.code,{children:`70ms`}),`, в невидимом состоянии получает новое compact-представление и затем появляется за `,(0,c.jsx)(t.code,{children:`45ms`}),`. Fade применяется ко всему default slot, поэтому отдельные дочерние элементы не требуют собственных transition.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Схлопывание занимает `,(0,c.jsx)(t.code,{children:`220ms`}),`, расширение от `,(0,c.jsx)(t.code,{children:`compactWidth`}),` до `,(0,c.jsx)(t.code,{children:`collapseThreshold`}),` — `,(0,c.jsx)(t.code,{children:`180ms`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Без `,(0,c.jsx)(t.code,{children:`collapseThreshold`}),` ширина изменяется свободно, как раньше.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Sidebar
  :width="300"
  min-width="80px"
  max-width="380px"
  :compact-width="80"
  :collapse-threshold="180"
>
  <SidebarList scrollable>
    <SidebarGroup label="Основное">
      <SidebarItem>Главная</SidebarItem>
    </SidebarGroup>
    <SidebarGroup label="Другое">
      <SidebarCollapsible label="Настройки">
        <SidebarSubList>
          <SidebarSubItem selected>Профиль</SidebarSubItem>
          <SidebarSubItem>Организация</SidebarSubItem>
        </SidebarSubList>
      </SidebarCollapsible>
    </SidebarGroup>
  </SidebarList>
</Sidebar>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`SidebarGroup`}),` группирует связанные пункты и скрывает заголовок в compact.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`SidebarList`}),` с `,(0,c.jsx)(t.code,{children:`scrollable`}),` занимает доступную flex-высоту, прокручивает только навигацию и выводит scrollbar к внешнему краю Sidebar, не смещая footer.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`SidebarCollapsible`}),` анимированно раскрывает `,(0,c.jsx)(t.code,{children:`SidebarSubList`}),`. Его `,(0,c.jsx)(t.code,{children:`v-model`}),` можно синхронизировать с активным маршрутом.`]}),`
`,(0,c.jsxs)(t.li,{children:[`В compact-режиме `,(0,c.jsx)(t.code,{children:`SidebarCollapsible`}),` автоматически показывает дочерние пункты во всплывающей панели справа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`SidebarSubItem`}),` принимает `,(0,c.jsx)(t.code,{children:`selected`}),` и слот `,(0,c.jsx)(t.code,{children:`icon`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};