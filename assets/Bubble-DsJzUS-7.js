import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Bubble/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`bubble`,children:`Bubble`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`Bubble`}),` — составной компонент для поверхности сообщения. Он не содержит
аватар, автора, время или статус доставки: их следует располагать в окружающей
разметке сообщения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<BubbleGroup>
  <Bubble mode="secondary" align="start" size="medium">
    <BubbleContent>Здравствуйте! Чем могу помочь?</BubbleContent>
  </Bubble>
  <Bubble mode="contrast" align="end" size="medium">
    <BubbleContent>Нужна помощь с бронированием.</BubbleContent>
  </Bubble>
</BubbleGroup>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode`}),` задаёт визуальный тон: `,(0,c.jsx)(t.code,{children:`default`}),`, `,(0,c.jsx)(t.code,{children:`contrast`}),`, `,(0,c.jsx)(t.code,{children:`accent`}),`, `,(0,c.jsx)(t.code,{children:`secondary`}),`,
`,(0,c.jsx)(t.code,{children:`ghost`}),`, `,(0,c.jsx)(t.code,{children:`outlined`}),`, `,(0,c.jsx)(t.code,{children:`negative`}),`, `,(0,c.jsx)(t.code,{children:`positive`}),`, `,(0,c.jsx)(t.code,{children:`danger`}),` или `,(0,c.jsx)(t.code,{children:`warning`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`align`}),` — `,(0,c.jsx)(t.code,{children:`start`}),` или `,(0,c.jsx)(t.code,{children:`end`}),`; не зависит от `,(0,c.jsx)(t.code,{children:`mode`}),` и задаётся на каждом
`,(0,c.jsx)(t.code,{children:`Bubble`}),`. У нижнего внешнего угла сообщения radius автоматически меньше,
создавая направление без отдельного кончика.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size`}),` — `,(0,c.jsx)(t.code,{children:`extra-small`}),`, `,(0,c.jsx)(t.code,{children:`small`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),` или `,(0,c.jsx)(t.code,{children:`large`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`BubbleContent`}),` создаёт поверхность сообщения. Задай `,(0,c.jsx)(t.code,{children:`as="button"`}),` или
`,(0,c.jsx)(t.code,{children:`as="a"`}),`, когда всё сообщение является действием или ссылкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`BubbleGroup`}),` вертикально объединяет последовательные сообщения одного
отправителя. Группа всегда занимает доступную ширину, поэтому `,(0,c.jsx)(t.code,{children:`align="end"`}),`
работает и внутри неё.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Для семантики всей переписки используй окружающий контейнер, например `,(0,c.jsx)(t.code,{children:`ol`}),` или
элемент с `,(0,c.jsx)(t.code,{children:`role="log"`}),`. Не полагайся только на цвет `,(0,c.jsx)(t.code,{children:`mode`}),` для передачи
значения сообщения.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};