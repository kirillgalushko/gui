import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Badge-hgdrW5Br.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={title:`Components/Badge`,component:n,tags:[`!autodocs`],argTypes:{mode:{control:{type:`select`},options:[`default`,`accent`,`secondary`,`ghost`,`negative`,`positive`,`danger`,`warning`]},size:{control:{type:`select`},options:[`extra-small`,`small`,`medium`,`large`]},color:{control:{type:`select`},options:[void 0,`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`mauve`,`olive`,`mist`,`taupe`]}},args:{mode:`default`,size:`medium`}},i={args:{},render:e=>({components:{Badge:n},setup(){return{args:e}},template:`<Badge v-bind="args">99+</Badge>`})},a={args:{mode:`secondary`},render:e=>({components:{Badge:n},setup(){return{args:e}},template:`<Badge v-bind="args">99+</Badge>`})},o={args:{mode:`accent`},render:e=>({components:{Badge:n},setup(){return{args:e}},template:`<Badge v-bind="args">Новое</Badge>`})},s={render:()=>({components:{Badge:n},template:`
      <div style="display: flex; align-items: center; gap: 8px;">
        <Badge size="extra-small">Extra small</Badge>
        <Badge size="small">Small</Badge>
        <Badge size="medium">Medium</Badge>
        <Badge size="large">Large</Badge>
      </div>
    `})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Badge v-bind="args">99+</Badge>\`
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "secondary"
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Badge v-bind="args">99+</Badge>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "accent"
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Badge v-bind="args">Новое</Badge>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 8px;">
        <Badge size="extra-small">Extra small</Badge>
        <Badge size="small">Small</Badge>
        <Badge size="medium">Medium</Badge>
        <Badge size="large">Large</Badge>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Secondary`,`Accent`,`Sizes`]})))()}l();export{o as Accent,i as Default,a as Secondary,s as Sizes,c as __namedExportsOrder,r as default};