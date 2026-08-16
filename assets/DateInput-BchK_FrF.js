import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/DateInput/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`dateinput`,children:`DateInput`}),`
`,(0,c.jsxs)(t.p,{children:[`Поле ввода даты с маской `,(0,c.jsx)(t.code,{children:`дд.мм.гггг`}),` и календарем в `,(0,c.jsx)(t.code,{children:`Dropdown`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Ручной ввод дополняет неполные даты до валидного формата. Например, `,(0,c.jsx)(t.code,{children:`113`}),` будет отформатировано как `,(0,c.jsx)(t.code,{children:`11.03.<текущий год>`}),`, а `,(0,c.jsx)(t.code,{children:`221033`}),` — как `,(0,c.jsx)(t.code,{children:`22.10.2033`}),`. Год ограничен диапазоном `,(0,c.jsx)(t.code,{children:`1900–2099`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Date | null`}),` — выбранная дата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onChange?: (payload: DateInputChangePayload) => void`}),` — вызывается после выбора даты в календаре или подтверждения ручного ввода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minDate?: Date`}),` — минимальная доступная дата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxDate?: Date`}),` — максимальная доступная дата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabledDates?: (date: Date) => boolean`}),` — запрещает отдельные даты в календаре и при ручном вводе.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onMonthChange?: (month: Date) => void`}),` — вызывается при переходе календаря на другой месяц.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled?: boolean`}),` — отключает поле.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`invalid?: boolean`}),` — показывает ошибочное состояние.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`description?: string`}),` — текст подсказки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorMessage?: string`}),` — текст ошибки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxWidth?: string`}),` — максимальная ширина.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`placeholder?: string`}),` — placeholder, по умолчанию `,(0,c.jsx)(t.code,{children:`дд.мм.гггг`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<DateInput
  :value="date"
  :on-change="
    ({ value }) => {
      date = value;
    }
  "
  :min-date="minDate"
  :max-date="maxDate"
  :disabled-dates="isDateUnavailable"
  :on-month-change="loadAvailability"
/>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};