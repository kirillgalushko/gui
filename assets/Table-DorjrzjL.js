import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Table/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,c.jsx)(t.p,{children:`Адаптивная таблица`}),`
`,(0,c.jsxs)(t.p,{children:[`Для длинных списков передайте `,(0,c.jsx)(t.code,{children:`max-height`}),` и `,(0,c.jsx)(t.code,{children:`sticky-header`}),`: вертикальная прокрутка будет внутри
таблицы, а шапка останется на месте.`]}),`
`,(0,c.jsx)(t.h2,{id:`компоненты`,children:`Компоненты`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`Table`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`TableHeader`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`TableBody`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`TableFooter`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`TableRow`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`TableHead`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`TableCell`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`TableCaption`})}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Table>
  <TableCaption>Recent invoices</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
`})}),`
`,(0,c.jsx)(t.h2,{id:`фиксированная-шапка`,children:`Фиксированная шапка`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Table :max-height="420" sticky-header>
  <TableHeader><!-- заголовки столбцов --></TableHeader>
  <TableBody><!-- прокручиваемые строки --></TableBody>
</Table>
`})}),`
`,(0,c.jsx)(t.h2,{id:`ширина-колонок`,children:`Ширина колонок`}),`
`,(0,c.jsxs)(t.p,{children:[`У `,(0,c.jsx)(t.code,{children:`TableHead`}),` и `,(0,c.jsx)(t.code,{children:`TableCell`}),` есть props `,(0,c.jsx)(t.code,{children:`width`}),`, `,(0,c.jsx)(t.code,{children:`min-width`}),` и `,(0,c.jsx)(t.code,{children:`max-width`}),`. Для компактных
колонок используйте `,(0,c.jsx)(t.code,{children:`width="1"`}),`, а для единственной растягиваемой не задавайте ширину.
Если суммарная минимальная ширина колонок меньше 640px, на `,(0,c.jsx)(t.code,{children:`Table`}),` передайте `,(0,c.jsx)(t.code,{children:`:min-width="0"`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};