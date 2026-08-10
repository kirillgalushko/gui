import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-WrHcAdE1.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Sheet/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`sheet`,children:`Sheet`}),`
`,(0,c.jsxs)(t.p,{children:[`API близок к `,(0,c.jsx)(t.code,{children:`Modal`}),`: состояние передается через `,(0,c.jsx)(t.code,{children:`isOpened`}),`, закрытие через `,(0,c.jsx)(t.code,{children:`onClose`}),`, футер через слот `,(0,c.jsx)(t.code,{children:`footer`}),`.
Для составного фиксированного заголовка используйте слот `,(0,c.jsx)(t.code,{children:`header`}),`: прокручиваться при этом будет
только содержимое панели.`]}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isOpened`}),` — открыта ли панель.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onClose`}),` — обработчик закрытия.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showCloseButton`}),` — показывает кнопку закрытия.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`title`}),` — заголовок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`description`}),` — описание под заголовком.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`side`}),` — сторона появления: `,(0,c.jsx)(t.code,{children:`top`}),`, `,(0,c.jsx)(t.code,{children:`right`}),`, `,(0,c.jsx)(t.code,{children:`bottom`}),`, `,(0,c.jsx)(t.code,{children:`left`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size`}),` — размер панели: `,(0,c.jsx)(t.code,{children:`auto`}),`, `,(0,c.jsx)(t.code,{children:`extra-small`}),`, `,(0,c.jsx)(t.code,{children:`small`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),`, `,(0,c.jsx)(t.code,{children:`large`}),`, `,(0,c.jsx)(t.code,{children:`full`}),`. Для `,(0,c.jsx)(t.code,{children:`top`}),` и `,(0,c.jsx)(t.code,{children:`bottom`}),` по умолчанию `,(0,c.jsx)(t.code,{children:`auto`}),`, для `,(0,c.jsx)(t.code,{children:`left`}),` и `,(0,c.jsx)(t.code,{children:`right`}),` — `,(0,c.jsx)(t.code,{children:`medium`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode`}),` — отображение панели: `,(0,c.jsx)(t.code,{children:`default`}),` прилегает к краю viewport, `,(0,c.jsx)(t.code,{children:`floating`}),` оставляет отступ от краёв и добавляет border со всех сторон.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rounded`}),` — скругляет внешний край панели в зависимости от `,(0,c.jsx)(t.code,{children:`side`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showOverlay`}),` — показывает overlay и тень панели, по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`closeOnOverlayClick`}),` — закрывать по клику на overlay.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`closeOnEscape`}),` — закрывать по Escape.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`slots`,children:`Slots`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`header`}),` — произвольное содержимое фиксированного заголовка вместо `,(0,c.jsx)(t.code,{children:`title`}),` и `,(0,c.jsx)(t.code,{children:`description`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actions`}),` — действия справа от заголовка, перед кнопкой закрытия.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`default`}),` — прокручиваемое содержимое панели.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`footer`}),` — фиксированный футер.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Sheet
  :isOpened="visible"
  :onClose="close"
  title="Настройки объекта"
  description="Измените параметры публикации."
>
  Контент панели

  <template #footer>
    <Button mode="ghost" @click="close">Отмена</Button>
    <Button mode="contrast" @click="close">Сохранить</Button>
  </template>
</Sheet>
`})}),`
`,(0,c.jsx)(t.h2,{id:`составной-заголовок`,children:`Составной заголовок`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Sheet :isOpened="visible" :onClose="close">
  <template #header>
    <Text typography="label-2" color="secondary">Бронь №4821</Text>
    <Gap :size="1" />
    <Text Element="h2" typography="title-2">30 июля — 2 августа</Text>
  </template>

  Контент панели
</Sheet>
`})}),`
`,(0,c.jsx)(t.h2,{id:`floating`,children:`Floating`}),`
`,(0,c.jsxs)(t.p,{children:[`Используйте `,(0,c.jsx)(t.code,{children:`mode="floating"`}),`, когда панель должна визуально отделяться от краёв viewport, как Drawer.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Sheet
  :isOpened="visible"
  :onClose="close"
  mode="floating"
  side="bottom"
  title="Быстрое действие"
>
  Контент панели
</Sheet>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};