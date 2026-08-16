import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-BRO4GnZ7.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Hooks/useViewportBreakpoint`}),`
`,(0,c.jsx)(t.h1,{id:`useviewportbreakpoint`,children:`useViewportBreakpoint`}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает текущий viewport breakpoint по `,(0,c.jsx)(t.code,{children:`window.innerWidth`}),` и набор boolean-флагов.`]}),`
`,(0,c.jsx)(t.h2,{id:`возвращаемое-значение`,children:`Возвращаемое значение`}),`
`,(0,c.jsx)(t.p,{children:`Readonly объект:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`{
  breakpoint: Breakpoint;
  isXS: boolean;
  isS: boolean;
  isM: boolean;
  isL: boolean;
  isXL: boolean;
  isXXL: boolean;
  isMobile: boolean;
  isGtXS: boolean;
  isGtS: boolean;
  isGtM: boolean;
  isGtL: boolean;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`xs`}),` — `,(0,c.jsx)(t.code,{children:`0-575px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`s`}),` — `,(0,c.jsx)(t.code,{children:`576-767px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`m`}),` — `,(0,c.jsx)(t.code,{children:`768-1023px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`l`}),` — `,(0,c.jsx)(t.code,{children:`1024-1279px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`xl`}),` — `,(0,c.jsx)(t.code,{children:`1280-1599px`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`xxl`}),` — `,(0,c.jsx)(t.code,{children:`1600px+`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const viewport = useViewportBreakpoint();

if (viewport.isMobile) {
  // xs или s
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};