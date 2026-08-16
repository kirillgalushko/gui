import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Link/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`link`,children:`Link`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент ссылки с типографикой из `,(0,c.jsx)(t.code,{children:`Text`}),`, состояниями и слотами для иконок.`]}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typography?: Typography`}),` — типографика из `,(0,c.jsx)(t.code,{children:`Text`}),`, по умолчанию `,(0,c.jsx)(t.code,{children:`inherit`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`inline?: boolean`}),` — включает inline-режим внутри текста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wrap?: boolean`}),` — включает обычный inline-поток, чтобы длинная ссылка продолжала окружающий текст и переносилась по словам.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`underlined?: boolean`}),` — показывает подчеркивание.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled?: boolean`}),` — отключает ссылку, ставит `,(0,c.jsx)(t.code,{children:`aria-disabled`}),` и убирает из tab order.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`enableVisited?: boolean`}),` — включает visited-цвет.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode?: 'inherit' | 'accent'`}),` — цвет ссылки, по умолчанию `,(0,c.jsx)(t.code,{children:`accent`}),`. В режиме `,(0,c.jsx)(t.code,{children:`inherit`}),` ссылка сохраняет цвет родителя также при наведении, после посещения и в disabled-состоянии; disabled обозначается прозрачностью.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Element?: 'a' | 'button' | 'span'`}),` — тег компонента, по умолчанию `,(0,c.jsx)(t.code,{children:`a`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`slots`,children:`Slots`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`default`}),` — текст ссылки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconLeft`}),` — иконка слева.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconRight`}),` — иконка справа.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Link href="/docs" underlined>
  <template #iconRight>
    <IconExternalLinkOutline />
  </template>
  Документация
</Link>
`})}),`
`,(0,c.jsx)(t.p,{children:`Для длинной ссылки внутри подписи или другого узкого контейнера включите перенос:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Link href="/terms" mode="inherit" wrap>
  Публичная оферта и Пользовательское соглашение
</Link>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};