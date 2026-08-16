import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/RadioGroup/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`radiogroup`,children:`RadioGroup`}),`
`,(0,c.jsxs)(t.p,{children:[`Группа взаимоисключающих вариантов на нативных radio inputs. Поддерживает
клавиатурную навигацию, формы, `,(0,c.jsx)(t.code,{children:`disabled`}),`, `,(0,c.jsx)(t.code,{children:`invalid`}),`, две ориентации и карточный
режим.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<RadioGroup v-model="channel" name="channel">
  <RadioGroupItem value="sms">
    SMS
    <template #description>Код придёт на номер гостя</template>
  </RadioGroupItem>
  <RadioGroupItem value="email">
    Email
    <template #description>Код придёт на электронную почту</template>
  </RadioGroupItem>
</RadioGroup>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Для крупных кликабельных вариантов используйте `,(0,c.jsx)(t.code,{children:`mode="card"`}),`. Горизонтальная
раскладка адаптивно переносит карточки:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Field :invalid="!!error" stretched>
  <FieldLabel>Канал подтверждения</FieldLabel>
  <RadioGroup
    v-model="channel"
    mode="card"
    orientation="horizontal"
    required
    stretched
  >
    <RadioGroupItem value="sms">SMS</RadioGroupItem>
    <RadioGroupItem value="email">Email</RadioGroupItem>
  </RadioGroup>
  <FieldHelper :error-message="error" :invalid="!!error" />
</Field>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`RadioGroup`}),` принимает `,(0,c.jsx)(t.code,{children:`name`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`, `,(0,c.jsx)(t.code,{children:`invalid`}),`, `,(0,c.jsx)(t.code,{children:`required`}),`,
`,(0,c.jsx)(t.code,{children:`orientation`}),`, `,(0,c.jsx)(t.code,{children:`mode`}),` и `,(0,c.jsx)(t.code,{children:`stretched`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если `,(0,c.jsx)(t.code,{children:`name`}),` не передан, создаётся стабильное имя группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`RadioGroupItem`}),` требует уникальный `,(0,c.jsx)(t.code,{children:`value`}),`; его `,(0,c.jsx)(t.code,{children:`disabled`}),` и `,(0,c.jsx)(t.code,{children:`invalid`}),`
дополняют состояния группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Field`}),` автоматически передаёт группе общие `,(0,c.jsx)(t.code,{children:`disabled`}),` и `,(0,c.jsx)(t.code,{children:`invalid`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для длинных списков используйте `,(0,c.jsx)(t.code,{children:`Select`}),`, для множественного выбора —
`,(0,c.jsx)(t.code,{children:`Checkbox`}),` или `,(0,c.jsx)(t.code,{children:`ChipGroup`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};