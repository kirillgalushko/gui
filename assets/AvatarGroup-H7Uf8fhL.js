import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/AvatarGroup/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`avatargroup`,children:`AvatarGroup`}),`
`,(0,c.jsxs)(t.p,{children:[`Компактно объединяет несколько `,(0,c.jsx)(t.code,{children:`Avatar`}),` с перекрытием и контрастным
разделителем. `,(0,c.jsx)(t.code,{children:`size`}),` и `,(0,c.jsx)(t.code,{children:`shape`}),` наследуются дочерними аватарами, если они не
переопределены локально.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<AvatarGroup size="48px" aria-label="Участники бронирования">
  <Avatar src="/anna.jpg" name="Анна Петрова" />
  <Avatar name="Иван Смирнов" color="blue" />
  <AvatarGroupCount :count="3" />
</AvatarGroup>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size`}),` — общий размер, по умолчанию `,(0,c.jsx)(t.code,{children:`40px`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`shape`}),` — общая форма `,(0,c.jsx)(t.code,{children:`circle`}),` или `,(0,c.jsx)(t.code,{children:`square`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`overlap`}),` — величина перекрытия; по умолчанию четверть размера группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`surface`}),` — непрозрачная поверхность под полупрозрачными цветами Avatar;
по умолчанию `,(0,c.jsx)(t.code,{children:`hsl(var(--background))`}),`. На другой поверхности передай её цвет,
например `,(0,c.jsx)(t.code,{children:`hsl(var(--card))`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};