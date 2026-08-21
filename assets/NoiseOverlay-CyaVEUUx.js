import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/NoiseOverlay/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`noiseoverlay`,children:`NoiseOverlay`}),`
`,(0,c.jsx)(t.p,{children:`Декоративный слой статичного фотографического шума. Компонент генерирует детализированный SVG turbulence 512×512, меняет размер зерна внутри исходника без растягивания тайла и не перехватывает события указателя.`}),`
`,(0,c.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`opacity: number`}),` — интенсивность слоя от `,(0,c.jsx)(t.code,{children:`0`}),` до `,(0,c.jsx)(t.code,{children:`1`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`grainSize: number`}),` — размер зерна без потери качества. Чем больше значение, тем крупнее зерно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`octaves: number`}),` — количество уровней детализации процедурного шума.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`seed: number`}),` — вариант статичного рисунка шума.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`blendMode: "normal" | "overlay" | "soft-light"`}),` — способ смешивания с фоном.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`position: "absolute" | "fixed"`}),` — позиционирование внутри области или поверх viewport.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zIndex: number`}),` — слой относительно соседних элементов.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Если передать содержимое в default slot, компонент создаст изолированную surface высотой со всё содержимое: шум окажется под ним и не будет накладываться на текст, карточки или изображения.`}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<NoiseOverlay
  position="fixed"
  blend-mode="overlay"
  :grain-size="1.25"
  :octaves="4"
  :opacity="0.24"
/>
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<NoiseOverlay
  blend-mode="normal"
  :grain-size="1.25"
  :opacity="0.08"
  :z-index="0"
>
  <main>Содержимое страницы</main>
</NoiseOverlay>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};