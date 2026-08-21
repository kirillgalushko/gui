import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,F as n,O as r,W as i,a,z as o}from"./iframe-DSPFKwNv.js";import{n as s,t as c}from"./_plugin-vue_export-helper-BqBa3wPr.js";var l;function u(){return(u=e((()=>{a(),l=r({inheritAttrs:!1,__name:`Kbd`,props:{mode:{default:`default`},size:{default:`small`}},setup(e){let r=e;return(e,a)=>(o(),t(`kbd`,n(e.$attrs,{class:[`kbd`,r.mode,r.size],"data-slot":`kbd`}),[i(e.$slots,`default`,{},void 0,!0)],16))}})})))()}var d;function f(){return(f=e((()=>{u(),s(),d=c(l,[[`__scopeId`,`data-v-5d3dfdc7`]]),l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:`default`,displayName:`Kbd`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`KbdMode`},defaultValue:{func:!1,value:`"default"`}},{name:`size`,required:!1,type:{name:`KbdSize`},defaultValue:{func:!1,value:`"small"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Kbd/Kbd.vue`]})})))()}var p;function m(){return(m=e((()=>{a(),p=r({inheritAttrs:!1,__name:`KbdGroup`,setup(e){return(e,r)=>(o(),t(`kbd`,n(e.$attrs,{class:`kbd-group`,"data-slot":`kbd-group`}),[i(e.$slots,`default`,{},void 0,!0)],16))}})})))()}var h;function g(){return(g=e((()=>{m(),s(),h=c(p,[[`__scopeId`,`data-v-6fcb9e9e`]]),p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:`default`,displayName:`KbdGroup`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Kbd/KbdGroup.vue`]})})))()}var _,v,y,b,x,S,C;function w(){return(w=e((()=>{f(),g(),_={title:`Components/Kbd`,component:d,tags:[`!autodocs`],argTypes:{mode:{control:`select`,options:[`default`,`contrast`,`secondary`,`outline`]},size:{control:`select`,options:[`extra-small`,`small`,`medium`,`large`]}}},v={args:{mode:`default`,size:`small`},render:e=>({components:{Kbd:d},setup(){return{args:e}},template:`<Kbd v-bind="args">Ctrl</Kbd>`})},y={render:()=>({components:{Kbd:d},template:`
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
        <Kbd mode="default">Ctrl</Kbd>
        <Kbd mode="contrast">Ctrl</Kbd>
        <Kbd mode="secondary">Ctrl</Kbd>
        <Kbd mode="outline">Ctrl</Kbd>
      </div>
    `})},b={render:()=>({components:{Kbd:d},template:`
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
        <Kbd size="extra-small">Ctrl</Kbd>
        <Kbd size="small">Ctrl</Kbd>
        <Kbd size="medium">Ctrl</Kbd>
        <Kbd size="large">Ctrl</Kbd>
      </div>
    `})},x={render:()=>({components:{Kbd:d,KbdGroup:h},template:`
      <KbdGroup aria-label="Сочетание Ctrl и B">
        <Kbd>Ctrl</Kbd>
        <span aria-hidden="true">+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    `})},S={render:()=>({components:{Kbd:d,KbdGroup:h},template:`
      <KbdGroup aria-label="Модификаторы клавиатуры">
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
    `})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "default",
    size: "small"
  },
  render: args => ({
    components: {
      Kbd
    },
    setup() {
      return {
        args
      };
    },
    template: '<Kbd v-bind="args">Ctrl</Kbd>'
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
        <Kbd mode="default">Ctrl</Kbd>
        <Kbd mode="contrast">Ctrl</Kbd>
        <Kbd mode="secondary">Ctrl</Kbd>
        <Kbd mode="outline">Ctrl</Kbd>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
        <Kbd size="extra-small">Ctrl</Kbd>
        <Kbd size="small">Ctrl</Kbd>
        <Kbd size="medium">Ctrl</Kbd>
        <Kbd size="large">Ctrl</Kbd>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd,
      KbdGroup
    },
    template: \`
      <KbdGroup aria-label="Сочетание Ctrl и B">
        <Kbd>Ctrl</Kbd>
        <span aria-hidden="true">+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd,
      KbdGroup
    },
    template: \`
      <KbdGroup aria-label="Модификаторы клавиатуры">
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
    \`
  })
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Modes`,`Sizes`,`Group`,`ModifierKeys`]})))()}w();export{v as Default,x as Group,y as Modes,S as ModifierKeys,b as Sizes,C as __namedExportsOrder,_ as default};