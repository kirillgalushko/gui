import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Chip/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`chip`,children:`Chip`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ChipGroup`}),` управляет выбором одного или нескольких `,(0,c.jsx)(t.code,{children:`Chip`}),` через `,(0,c.jsx)(t.code,{children:`v-model`}),`.
`,(0,c.jsx)(t.code,{children:`Chip`}),` отвечает только за интерактивную оболочку; маркеры, иконки и текст передаются через default slot.`]}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsx)(t.h3,{id:`chipgroup`,children:`ChipGroup`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mode?: 'single' | 'multiple'`}),` — режим выбора, по умолчанию `,(0,c.jsx)(t.code,{children:`single`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size?: 'small' | 'medium' | 'large'`}),` — размер всех чипов внутри группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled?: boolean`}),` — отключает всю группу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — добавляет hidden inputs для HTML-форм.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stretched?: boolean`}),` — растягивает группу на всю ширину.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`chip-1`,children:`Chip`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string | number`}),` — значение для выбора внутри `,(0,c.jsx)(t.code,{children:`ChipGroup`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size?: 'small' | 'medium' | 'large'`}),` — размер одиночного чипа вне группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: boolean`}),` — выбранность одиночного чипа вне группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled?: boolean`}),` — отключает чип.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<ChipGroup v-model="source" mode="multiple">
  <Chip value="telegram">
    <Dot color="sky" />
    Telegram
  </Chip>
  <Chip value="whatsapp">
    <Dot color="green" />
    WhatsApp
  </Chip>
</ChipGroup>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};