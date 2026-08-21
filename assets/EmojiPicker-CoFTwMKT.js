import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/EmojiPicker/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`emojipicker`,children:`EmojiPicker`}),`
`,(0,c.jsx)(t.p,{children:`Лёгкий picker на нативных Unicode-эмодзи: без SVG, растровых изображений и внешней
загрузки данных. Категории идут в системном порядке: люди и тело, животные и природа,
еда и напитки, активности, путешествия и места, объекты, символы, флаги. Поиск
учитывает русские и английские названия.`}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@select`}),` — возвращает Unicode-строку выбранного эмодзи.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@select-emoji`}),` — возвращает объект с `,(0,c.jsx)(t.code,{children:`value`}),`, `,(0,c.jsx)(t.code,{children:`label`}),` и `,(0,c.jsx)(t.code,{children:`keywords`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`v-model`}),` — хранит значение последнего выбранного эмодзи.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size?: 'small' | 'medium' | 'large'`}),` — геометрия picker; по умолчанию `,(0,c.jsx)(t.code,{children:`large`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`categories?: EmojiPickerCategory[]`}),` — заменяет стандартный набор данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`placeholder?: string`}),`, `,(0,c.jsx)(t.code,{children:`emptyLabel?: string`}),`, `,(0,c.jsx)(t.code,{children:`ariaLabel?: string`}),` — тексты интерфейса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxHeight?: string | number`}),` — максимальная высота прокручиваемой области.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<EmojiPicker @select="message += $event" />
`})}),`
`,(0,c.jsx)(t.h2,{id:`вставка-в-поле`,children:`Вставка в поле`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`insertEmojiAtSelection`}),` — чистая utility для `,(0,c.jsx)(t.code,{children:`input`}),` и `,(0,c.jsx)(t.code,{children:`textarea`}),`. Она заменяет
выделенный фрагмент либо вставляет символ в caret, проверяет `,(0,c.jsx)(t.code,{children:`maxLength`}),` и возвращает
следующую позицию курсора. При отсутствии selection эмодзи добавляется в конец.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const insertion = insertEmojiAtSelection({
  value: message,
  emoji,
  selectionStart: textarea.selectionStart,
  selectionEnd: textarea.selectionEnd,
  maxLength: 4_000,
});

if (insertion.inserted) {
  message = insertion.value;
  textarea.setSelectionRange(insertion.selectionStart, insertion.selectionEnd);
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`dropdown`,children:`Dropdown`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`EmojiPickerDropdown`}),` содержит `,(0,c.jsx)(t.code,{children:`Dropdown`}),`, открывается по trigger из default-слота и
сам закрывается после выбора. Если нужна внешняя синхронизация, используйте
`,(0,c.jsx)(t.code,{children:`v-model:shown`}),`. Передайте `,(0,c.jsx)(t.code,{children:`close-on-select="false"`}),`, чтобы оставить панель открытой.
`,(0,c.jsx)(t.code,{children:`large`}),` соответствует исходному размеру picker, `,(0,c.jsx)(t.code,{children:`medium`}),` — предыдущему компактному
варианту, `,(0,c.jsx)(t.code,{children:`small`}),` — новому минимальному. У каждого размера меньше колонок и крупнее
эмодзи внутри ячейки.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<EmojiPickerDropdown @select="insertEmoji">
  <Action type="button" aria-label="Добавить эмодзи">🙂</Action>
</EmojiPickerDropdown>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};