import{B as n}from"./Badge-DPWdYoQ_.js";import"./vue.esm-bundler-JOEmeMwU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Example/Badge",component:n,tags:["autodocs"],argTypes:{mode:{control:{type:"select"},options:["default","secondary"]}},args:{mode:"default"}},e={args:{},render:a=>({components:{Badge:n},setup(){return{args:a}},template:'<Badge v-bind="args">99+</Badge>'})},r={args:{mode:"secondary"},render:a=>({components:{Badge:n},setup(){return{args:a}},template:'<Badge v-bind="args">99+</Badge>'})};var s,t,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mode: 'secondary'
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const i=["Default","Secondary"];export{e as Default,r as Secondary,i as __namedExportsOrder,l as default};
