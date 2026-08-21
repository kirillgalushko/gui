import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Timeline/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`timeline`,children:`Timeline`}),`
`,(0,c.jsx)(t.p,{children:`Составная временная шкала для истории событий, этапов процесса и ленты уведомлений.
Контент не привязан к модели данных: иконки, аватары, карточки, badges и действия
передаются обычными слотами.`}),`
`,(0,c.jsx)(t.h2,{id:`базовый-пример`,children:`Базовый пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Timeline direction="reverse" :active-step="3">
  <TimelineItem v-for="event in events" :key="event.id" :step="event.id">
    <TimelineSeparator />
    <TimelineIndicator variant="soft">
      <component :is="event.icon" />
    </TimelineIndicator>
    <TimelineDate :datetime="event.datetime">{{ event.date }}</TimelineDate>
    <TimelineHeader>
      <TimelineTitle>{{ event.title }}</TimelineTitle>
    </TimelineHeader>
    <TimelineContent>{{ event.description }}</TimelineContent>
  </TimelineItem>
</Timeline>
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`activeStep`}),` автоматически задаёт числовым шагам состояния `,(0,c.jsx)(t.code,{children:`completed`}),`, `,(0,c.jsx)(t.code,{children:`current`}),` и
`,(0,c.jsx)(t.code,{children:`pending`}),`. Для истории событий состояние можно задавать явно через `,(0,c.jsx)(t.code,{children:`TimelineItem state`}),`.
Сами данные всегда передаются в прямой хронологии: от старого события к новому.
`,(0,c.jsx)(t.code,{children:`direction="reverse"`}),` разворачивает только визуальный порядок.`]}),`
`,(0,c.jsx)(t.h2,{id:`горизонтальная-шкала-с-датой-над-линией`,children:`Горизонтальная шкала с датой над линией`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Timeline orientation="horizontal" date-position="top" :active-step="2">
  <TimelineItem :step="1">
    <TimelineDate>Неделя 1</TimelineDate>
    <TimelineSeparator />
    <TimelineIndicator variant="outline" />
    <TimelineHeader><TimelineTitle>Планирование</TimelineTitle></TimelineHeader>
    <TimelineContent>Объём работ и ресурсы.</TimelineContent>
  </TimelineItem>
</Timeline>
`})}),`
`,(0,c.jsx)(t.p,{children:`Горизонтальный вариант адаптивен: элементы сохраняют читаемую минимальную ширину и
прокручиваются со scroll snap на узком контейнере.`}),`
`,(0,c.jsx)(t.h2,{id:`аватар-и-произвольный-контент`,children:`Аватар и произвольный контент`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Timeline rail-size="48px">
  <TimelineItem state="current">
    <TimelineSeparator dashed />
    <TimelineIndicator variant="ghost" size="48px">
      <Avatar name="Анна Смирнова" size="48px" />
    </TimelineIndicator>
    <TimelineHeader>
      <TimelineTitle>Гость подтвердил заезд</TimelineTitle>
      <Badge mode="positive">Бронь</Badge>
    </TimelineHeader>
    <TimelineContent>
      <Card stretched>Любой составной GUI-контент</Card>
    </TimelineContent>
    <TimelineDate>5 минут назад</TimelineDate>
  </TimelineItem>
</Timeline>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`datePosition`}),`: `,(0,c.jsx)(t.code,{children:`top`}),` или `,(0,c.jsx)(t.code,{children:`side`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`direction`}),`: `,(0,c.jsx)(t.code,{children:`forward`}),` показывает старые события первыми, `,(0,c.jsx)(t.code,{children:`reverse`}),` — новые первыми.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`TimelineIndicator variant`}),`: `,(0,c.jsx)(t.code,{children:`solid`}),`, `,(0,c.jsx)(t.code,{children:`outline`}),`, `,(0,c.jsx)(t.code,{children:`soft`}),`, `,(0,c.jsx)(t.code,{children:`ghost`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`TimelineIndicator size`}),`: `,(0,c.jsx)(t.code,{children:`small`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),`, `,(0,c.jsx)(t.code,{children:`large`}),` или CSS-размер.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode`}),` использует semantic colors GUI; `,(0,c.jsx)(t.code,{children:`color`}),` принимает цвет общей палитры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`railSize`}),` должен быть не меньше самого крупного маркера и сохраняет единую ось при
разных размерах точек.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`TimelineSeparator`}),` всегда использует нейтральный `,(0,c.jsx)(t.code,{children:`--border`}),`; линию можно сделать
пунктирной.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`TimelineDate`}),` по умолчанию рендерит семантический `,(0,c.jsx)(t.code,{children:`time`}),` и поддерживает `,(0,c.jsx)(t.code,{children:`datetime`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};