import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,O as n,S as r,W as i,a,b as o,gt as s,vt as c,y as l,z as u}from"./iframe-CgWRWv5U.js";import{n as d,t as f}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as p,z as m}from"./gui-icons.es-BhzJzRM3.js";import{n as h,t as g}from"./Button-CKiDWYnj.js";var _,v,y,b,x,S;function C(){return(C=e((()=>{a(),_=[`role`],v={class:`announcement-bar__inner`},y={key:0,class:`announcement-bar__icon`,"aria-hidden":`true`},b={class:`announcement-bar__content`},x={key:1,class:`announcement-bar__actions`},S=n({__name:`AnnouncementBar`,props:{mode:{default:`default`},size:{default:`medium`},role:{default:`status`},backgroundColor:{},textColor:{},borderColor:{}},setup(e){let n=e,a={default:{background:`hsl(var(--background))`,text:`hsl(var(--foreground))`,border:`hsl(var(--border))`},contrast:{background:`hsl(var(--background))`,text:`hsl(var(--foreground))`,border:`hsl(var(--border))`},accent:{background:`hsl(var(--accent))`,text:`hsl(0 0% 98%)`,border:`hsl(var(--accent))`},positive:{background:`color-mix(in oklab, hsl(var(--positive)) 16%, hsl(var(--background)))`,text:`hsl(var(--foreground))`,border:`color-mix(in oklab, hsl(var(--positive)) 35%, hsl(var(--border)))`},warning:{background:`color-mix(in oklab, hsl(var(--warning)) 20%, hsl(var(--background)))`,text:`hsl(var(--foreground))`,border:`color-mix(in oklab, hsl(var(--warning)) 40%, hsl(var(--border)))`},negative:{background:`color-mix(in oklab, hsl(var(--negative)) 16%, hsl(var(--background)))`,text:`hsl(var(--foreground))`,border:`color-mix(in oklab, hsl(var(--negative)) 35%, hsl(var(--border)))`}},d=l(()=>{let e=a[n.mode];return{"--announcement-bar-background":n.backgroundColor??e.background,"--announcement-bar-text":n.textColor??e.text,"--announcement-bar-border":n.borderColor??e.border}});return(e,a)=>(u(),t(`aside`,{class:s([`announcement-bar`,`announcement-bar--${n.size}`,`announcement-bar--${n.mode}`,{"inverted-colors":n.mode===`contrast`}]),style:c(d.value),role:n.role},[o(`div`,v,[e.$slots.icon?(u(),t(`div`,y,[i(e.$slots,`icon`,{},void 0,!0)])):r(``,!0),o(`div`,b,[i(e.$slots,`default`,{},void 0,!0)]),e.$slots.actions?(u(),t(`div`,x,[i(e.$slots,`actions`,{},void 0,!0)])):r(``,!0)])],14,_))}})})))()}var w;function T(){return(T=e((()=>{C(),d(),w=f(S,[[`__scopeId`,`data-v-8f264f77`]]),S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:`default`,displayName:`AnnouncementBar`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`AnnouncementBarMode`},defaultValue:{func:!1,value:`"default"`}},{name:`size`,required:!1,type:{name:`AnnouncementBarSize`},defaultValue:{func:!1,value:`"medium"`}},{name:`role`,required:!1,type:{name:`union`,elements:[{name:`"status"`},{name:`"alert"`}]},defaultValue:{func:!1,value:`"status"`}},{name:`backgroundColor`,required:!1,type:{name:`string`}},{name:`textColor`,required:!1,type:{name:`string`}},{name:`borderColor`,required:!1,type:{name:`string`}}],slots:[{name:`icon`},{name:`default`},{name:`actions`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/AnnouncementBar/AnnouncementBar.vue`]})})))()}var E,D,O,k,A;function j(){return(j=e((()=>{p(),h(),T(),E={title:`Components/AnnouncementBar`,component:w,tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`default`,`contrast`,`accent`,`positive`,`warning`,`negative`]},size:{control:`select`,options:[`small`,`medium`]},role:{control:`select`,options:[`status`,`alert`]}},args:{mode:`default`,size:`small`,role:`status`}},D={args:{mode:`contrast`},render:e=>({components:{AnnouncementBar:w,Button:g,IconInfoCircleOutline:m},setup:()=>({args:e}),template:`
      <AnnouncementBar v-bind="args">
        <template #icon><IconInfoCircleOutline /></template>
        Сейчас открыт демо-режим
        <template #actions>
          <Button mode="contrast" size="small">Начать пользоваться</Button>
          <Button mode="ghost" size="small">Выйти</Button>
        </template>
      </AnnouncementBar>
    `})},O={args:{mode:`warning`},render:e=>({components:{AnnouncementBar:w},setup:()=>({args:e}),template:`<AnnouncementBar v-bind="args">Запланированы технические работы</AnnouncementBar>`})},k={args:{backgroundColor:`#f1f5f9`,textColor:`#0f172a`,borderColor:`#cbd5e1`},render:e=>({components:{AnnouncementBar:w},setup:()=>({args:e}),template:`<AnnouncementBar v-bind="args">Объявление с собственными цветами</AnnouncementBar>`})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "contrast"
  },
  render: args => ({
    components: {
      AnnouncementBar,
      Button,
      IconInfoCircleOutline
    },
    setup: () => ({
      args
    }),
    template: \`
      <AnnouncementBar v-bind="args">
        <template #icon><IconInfoCircleOutline /></template>
        Сейчас открыт демо-режим
        <template #actions>
          <Button mode="contrast" size="small">Начать пользоваться</Button>
          <Button mode="ghost" size="small">Выйти</Button>
        </template>
      </AnnouncementBar>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "warning"
  },
  render: args => ({
    components: {
      AnnouncementBar
    },
    setup: () => ({
      args
    }),
    template: \`<AnnouncementBar v-bind="args">Запланированы технические работы</AnnouncementBar>\`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: "#f1f5f9",
    textColor: "#0f172a",
    borderColor: "#cbd5e1"
  },
  render: args => ({
    components: {
      AnnouncementBar
    },
    setup: () => ({
      args
    }),
    template: \`<AnnouncementBar v-bind="args">Объявление с собственными цветами</AnnouncementBar>\`
  })
}`,...k.parameters?.docs?.source}}},A=[`DemoMode`,`Warning`,`CustomColors`]})))()}j();export{k as CustomColors,D as DemoMode,O as Warning,A as __namedExportsOrder,E as default};