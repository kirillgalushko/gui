import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/NavigationMenu/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`navigationmenu`,children:`NavigationMenu`}),`
`,(0,c.jsx)(t.p,{children:`Составное адаптивное меню навигации. На мобильных экранах раскрываемый контент
автоматически становится частью вертикального списка.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<NavigationMenu v-model="openedItem">
  <NavigationMenuList>
    <NavigationMenuItem value="product">
      <NavigationMenuTrigger>Продукт</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/calendar">Календарь</NavigationMenuLink>
        <NavigationMenuLink href="/bookings">Бронирования</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem value="pricing">
      <NavigationMenuLink href="/pricing">Тарифы</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuIndicator />
</NavigationMenu>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`v-model`}),` содержит `,(0,c.jsx)(t.code,{children:`value`}),` раскрытого пункта или пустую строку.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`default-value`}),` задаёт начальное состояние без управляемого `,(0,c.jsx)(t.code,{children:`v-model`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`open-on-hover`}),`, `,(0,c.jsx)(t.code,{children:`delay-duration`}),` и `,(0,c.jsx)(t.code,{children:`close-delay-duration`}),` управляют поведением.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`orientation="vertical"`}),` включает вертикальную компоновку независимо от экрана.`]}),`
`,(0,c.jsx)(t.li,{children:`Поддерживаются мышь, touch, Escape, стрелки, Home/End и корректные ARIA-связи.`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`NavigationMenuLink as-child`}),` позволяет использовать `,(0,c.jsx)(t.code,{children:`RouterLink`}),` и другие ссылки.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Цвета `,(0,c.jsx)(t.code,{children:`NavigationMenuLink`}),` соответствуют `,(0,c.jsx)(t.code,{children:`Button`}),` в режиме `,(0,c.jsx)(t.code,{children:`ghost`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size`}),` использует размеры `,(0,c.jsx)(t.code,{children:`Button`}),` и по умолчанию равен `,(0,c.jsx)(t.code,{children:`medium`}),`; `,(0,c.jsx)(t.code,{children:`rounded`}),` включает pill-форму.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};