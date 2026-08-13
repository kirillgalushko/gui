import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,O as n,S as r,W as i,a,b as o,gt as s,vt as c,y as l,z as u}from"./iframe-Du9fEe2r.js";import{n as d,t as f}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as p,z as m}from"./gui-icons.es-ypdSzEZR.js";import{n as h,t as g}from"./Button-CfzASKeY.js";var _,v,y,b,x;function S(){return(S=e((()=>{a(),_=[`role`],v={key:0,class:`announcement-bar__icon`,"aria-hidden":`true`},y={class:`announcement-bar__content`},b={key:1,class:`announcement-bar__actions`},x=n({__name:`AnnouncementBar`,props:{mode:{default:`default`},size:{default:`medium`},role:{default:`status`},backgroundColor:{},textColor:{},borderColor:{}},setup(e){let n=e,a={default:{background:`hsl(var(--background))`,text:`hsl(var(--foreground))`,border:`hsl(var(--border))`},contrast:{background:`hsl(var(--background))`,text:`hsl(var(--foreground))`,border:`hsl(var(--border))`},accent:{background:`hsl(var(--accent))`,text:`hsl(0 0% 98%)`,border:`hsl(var(--accent))`},positive:{background:`color-mix(in oklab, hsl(var(--positive)) 16%, hsl(var(--background)))`,text:`hsl(var(--foreground))`,border:`color-mix(in oklab, hsl(var(--positive)) 35%, hsl(var(--border)))`},warning:{background:`color-mix(in oklab, hsl(var(--warning)) 20%, hsl(var(--background)))`,text:`hsl(var(--foreground))`,border:`color-mix(in oklab, hsl(var(--warning)) 40%, hsl(var(--border)))`},negative:{background:`color-mix(in oklab, hsl(var(--negative)) 16%, hsl(var(--background)))`,text:`hsl(var(--foreground))`,border:`color-mix(in oklab, hsl(var(--negative)) 35%, hsl(var(--border)))`}},d=l(()=>{let e=a[n.mode];return{"--announcement-bar-background":n.backgroundColor??e.background,"--announcement-bar-text":n.textColor??e.text,"--announcement-bar-border":n.borderColor??e.border}});return(e,a)=>(u(),t(`aside`,{class:s([`announcement-bar`,`announcement-bar--${n.size}`,`announcement-bar--${n.mode}`,{"inverted-colors":n.mode===`contrast`}]),style:c(d.value),role:n.role},[o(`div`,{class:s([`announcement-bar__inner`,{"announcement-bar__inner--with-icon":e.$slots.icon}])},[e.$slots.icon?(u(),t(`div`,v,[i(e.$slots,`icon`,{},void 0,!0)])):r(``,!0),o(`div`,y,[i(e.$slots,`default`,{},void 0,!0)]),e.$slots.actions?(u(),t(`div`,b,[i(e.$slots,`actions`,{},void 0,!0)])):r(``,!0)],2)],14,_))}})})))()}var C;function w(){return(w=e((()=>{S(),d(),C=f(x,[[`__scopeId`,`data-v-eea7b149`]]),x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`AnnouncementBar`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`AnnouncementBarMode`},defaultValue:{func:!1,value:`"default"`}},{name:`size`,required:!1,type:{name:`AnnouncementBarSize`},defaultValue:{func:!1,value:`"medium"`}},{name:`role`,required:!1,type:{name:`union`,elements:[{name:`"status"`},{name:`"alert"`}]},defaultValue:{func:!1,value:`"status"`}},{name:`backgroundColor`,required:!1,type:{name:`string`}},{name:`textColor`,required:!1,type:{name:`string`}},{name:`borderColor`,required:!1,type:{name:`string`}}],slots:[{name:`icon`},{name:`default`},{name:`actions`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/AnnouncementBar/AnnouncementBar.vue`]})})))()}var T,E,D,O,k,A;function j(){return(j=e((()=>{p(),h(),w(),T={title:`Components/AnnouncementBar`,component:C,tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`default`,`contrast`,`accent`,`positive`,`warning`,`negative`]},size:{control:`select`,options:[`small`,`medium`]},role:{control:`select`,options:[`status`,`alert`]}},args:{mode:`default`,size:`small`,role:`status`}},E={args:{mode:`contrast`},render:e=>({components:{AnnouncementBar:C,Button:g,IconInfoCircleOutline:m},setup:()=>({args:e}),template:`
      <AnnouncementBar v-bind="args">
        <template #icon><IconInfoCircleOutline /></template>
        Сейчас открыт демо-режим
        <template #actions>
          <Button mode="contrast" size="small">Начать пользоваться</Button>
          <Button mode="ghost" size="small">Выйти</Button>
        </template>
      </AnnouncementBar>
    `})},D={args:{mode:`warning`},render:e=>({components:{AnnouncementBar:C},setup:()=>({args:e}),template:`<AnnouncementBar v-bind="args">Запланированы технические работы</AnnouncementBar>`})},O={args:{mode:`negative`},parameters:{viewport:{defaultViewport:`mobile1`}},render:e=>({components:{AnnouncementBar:C,Button:g,IconInfoCircleOutline:m},setup:()=>({args:e}),template:`
      <AnnouncementBar v-bind="args">
        <template #icon><IconInfoCircleOutline /></template>
        Превышены лимиты тарифа.
        <template #actions>
          <Button mode="outline" size="small">Посмотреть лимиты</Button>
        </template>
      </AnnouncementBar>
    `})},k={args:{backgroundColor:`#f1f5f9`,textColor:`#0f172a`,borderColor:`#cbd5e1`},render:e=>({components:{AnnouncementBar:C},setup:()=>({args:e}),template:`<AnnouncementBar v-bind="args">Объявление с собственными цветами</AnnouncementBar>`})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "negative"
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
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
        Превышены лимиты тарифа.
        <template #actions>
          <Button mode="outline" size="small">Посмотреть лимиты</Button>
        </template>
      </AnnouncementBar>
    \`
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
}`,...k.parameters?.docs?.source}}},A=[`DemoMode`,`Warning`,`MobileLongMessage`,`CustomColors`]})))()}j();export{k as CustomColors,E as DemoMode,O as MobileLongMessage,D as Warning,A as __namedExportsOrder,T as default};