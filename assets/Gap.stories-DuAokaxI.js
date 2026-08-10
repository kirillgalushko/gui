import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Gap-azzyaXYM.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Components/Gap`,component:n,tags:[`autodocs`],argTypes:{direction:{control:{type:`select`},options:[`horizontal`,`vertical`]},size:{control:{type:`select`},options:[1,2,3,4,5,6]}}},i={args:{direction:`horizontal`,size:3},render:e=>({components:{Gap:n},setup(){return{args:e}},template:`<div>Gap<span style="border: 1px solid red;"><Gap v-bind="args" /></span>Gap</div>`})},a={args:{direction:`vertical`,size:3},render:e=>({components:{Gap:n},setup(){return{args:e}},template:`<div>Gap<div style="border: 1px solid red; width: 1em;"><Gap v-bind="args" /></div>Gap</div>`})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    size: 3
  },
  render: args => ({
    components: {
      Gap
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div>Gap<span style="border: 1px solid red;"><Gap v-bind="args" /></span>Gap</div>\`
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    size: 3
  },
  render: args => ({
    components: {
      Gap
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div>Gap<div style="border: 1px solid red; width: 1em;"><Gap v-bind="args" /></div>Gap</div>\`
  })
}`,...a.parameters?.docs?.source}}},o=[`HorizontalGap`,`VerticalGap`]})))()}s();export{i as HorizontalGap,a as VerticalGap,o as __namedExportsOrder,r as default};