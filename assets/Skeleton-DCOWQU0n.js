import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-D8brzSjM.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Skeleton/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,c.jsx)(t.p,{children:`Примитив для loading-состояний в стиле shadcn, адаптированный под токены GUI.`}),`
`,(0,c.jsx)(t.h2,{id:`компоненты`,children:`Компоненты`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Skeleton`}),` — базовый блок. Размеры задаются пропами `,(0,c.jsx)(t.code,{children:`width`}),`, `,(0,c.jsx)(t.code,{children:`height`}),`, `,(0,c.jsx)(t.code,{children:`radius`}),`, также можно передать `,(0,c.jsx)(t.code,{children:`class`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`SkeletonProvider`}),` — контекстный провайдер `,(0,c.jsx)(t.code,{children:`loading`}),` для всех скелетонов ниже по дереву.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`AvatarSkeleton`}),` — повторяет базовый размер `,(0,c.jsx)(t.code,{children:`Avatar`}),` (`,(0,c.jsx)(t.code,{children:`40px`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ButtonSkeleton`}),` — повторяет размеры `,(0,c.jsx)(t.code,{children:`Button`}),` для `,(0,c.jsx)(t.code,{children:`extra-small`}),`, `,(0,c.jsx)(t.code,{children:`small`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),`, `,(0,c.jsx)(t.code,{children:`large`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`TextSkeleton`}),` — строит строки по высотам типографики `,(0,c.jsx)(t.code,{children:`Text`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`CardSkeleton`}),` — контейнер с padding/radius как у `,(0,c.jsx)(t.code,{children:`Card`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FormSkeleton`}),` — набор label/input, где input совпадает по высоте и radius с `,(0,c.jsx)(t.code,{children:`Input`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<SkeletonProvider :loading="isLoading">
  <AvatarSkeleton>
    <Avatar :src="user.avatar" :name="user.name" />
  </AvatarSkeleton>

  <TextSkeleton :lines="2">
    <Text typography="paragraph-1">{{ user.description }}</Text>
  </TextSkeleton>
</SkeletonProvider>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};