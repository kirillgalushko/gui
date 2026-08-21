import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/DateNavigator/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`datenavigator`,children:`DateNavigator`}),`
`,(0,c.jsxs)(t.p,{children:[`Компактный переключатель периода на базе `,(0,c.jsx)(t.code,{children:`ButtonGroup`}),`. Стрелки меняют текущий день, неделю, месяц или год, центральная кнопка открывает `,(0,c.jsx)(t.code,{children:`Calendar`}),`.
Кнопка `,(0,c.jsx)(t.code,{children:`Сегодня`}),` появляется только когда отображаемый период не содержит сегодняшнюю дату и сегодняшний период доступен с учетом `,(0,c.jsx)(t.code,{children:`minDate`}),`/`,(0,c.jsx)(t.code,{children:`maxDate`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: Date`}),` — выбранная дата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode?: 'day' | 'threeDays' | 'week' | 'twoWeeks' | 'month' | 'year'`}),` — размер периода, по умолчанию `,(0,c.jsx)(t.code,{children:`day`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`buttonMode?: 'default' | 'contrast' | 'ghost' | 'outline' | 'negative' | 'accent'`}),` — стиль кнопок, по умолчанию `,(0,c.jsx)(t.code,{children:`outline`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size?: 'extra-small' | 'small' | 'medium' | 'large'`}),` — размер кнопок, по умолчанию `,(0,c.jsx)(t.code,{children:`large`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onChange: (payload: DateNavigatorChangePayload) => void`}),` — вызывается при выборе периода или переходе стрелками.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minDate?: Date`}),` — минимальная доступная дата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxDate?: Date`}),` — максимальная доступная дата.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`payload.range.end`}),` — exclusive-граница периода.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<DateNavigator
  :value="date"
  mode="month"
  button-mode="contrast"
  size="medium"
  :on-change="handlePeriodChange"
  :min-date="minDate"
  :max-date="maxDate"
/>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};