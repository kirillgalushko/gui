import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Pagination/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,c.jsxs)(t.p,{children:[`Составная навигация между страницами списка, таблицы или каталога. Компоненты
используют семантику `,(0,c.jsx)(t.code,{children:`nav`}),`, `,(0,c.jsx)(t.code,{children:`ul`}),` и `,(0,c.jsx)(t.code,{children:`li`}),`, а интерактивные элементы переиспользуют
GUI `,(0,c.jsx)(t.code,{children:`Button`}),`. Проп `,(0,c.jsx)(t.code,{children:`size`}),` на `,(0,c.jsx)(t.code,{children:`Pagination`}),` принимает те же значения, что и Button:
`,(0,c.jsx)(t.code,{children:`extra-small`}),`, `,(0,c.jsx)(t.code,{children:`small`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),`, `,(0,c.jsx)(t.code,{children:`large`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`базовый-пример`,children:`Базовый пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Pagination size="medium">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="?page=1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=2" is-active>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="?page=3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PaginationLink`}),` по умолчанию рендерит ссылку. Для локального состояния без URL
задайте `,(0,c.jsx)(t.code,{children:`Element="button"`}),`. Для `,(0,c.jsx)(t.code,{children:`RouterLink`}),` используйте `,(0,c.jsx)(t.code,{children:`as-child`}),` и передайте
ровно один корневой компонент в слот.`]}),`
`,(0,c.jsxs)(t.p,{children:[`На текущей странице задавайте `,(0,c.jsx)(t.code,{children:`is-active`}),`: компонент установит
`,(0,c.jsx)(t.code,{children:`aria-current="page"`}),`. На первой и последней страницах отключайте соответствующий
переход через `,(0,c.jsx)(t.code,{children:`disabled`}),`. Если отдельному `,(0,c.jsx)(t.code,{children:`PaginationLink`}),`, `,(0,c.jsx)(t.code,{children:`PaginationPrevious`}),`,
`,(0,c.jsx)(t.code,{children:`PaginationNext`}),` или `,(0,c.jsx)(t.code,{children:`PaginationEllipsis`}),` передан собственный `,(0,c.jsx)(t.code,{children:`size`}),`, он
переопределит размер родительского `,(0,c.jsx)(t.code,{children:`Pagination`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`метаданные-таблицы`,children:`Метаданные таблицы`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PaginationPageSize`}),` переиспользует GUI `,(0,c.jsx)(t.code,{children:`Select`}),` и позволяет выбрать количество
элементов на странице. Проп `,(0,c.jsx)(t.code,{children:`mode`}),` (`,(0,c.jsx)(t.code,{children:`default`}),` или `,(0,c.jsx)(t.code,{children:`outline`}),`) управляет режимом
его trigger. `,(0,c.jsx)(t.code,{children:`PaginationSummary`}),` отображает рассчитанный вызывающим кодом
диапазон и общее количество элементов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<PaginationPageSize
  :value="pageSize"
  :options="[5, 10]"
  mode="outline"
  @change="pageSize = $event"
/>
<PaginationSummary :from="1" :to="5" :total="22" />
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};