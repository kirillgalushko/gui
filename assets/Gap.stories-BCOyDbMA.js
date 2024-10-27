import{G as n}from"./Gap-3OUDLWox.js";import"./vue.esm-bundler-JOEmeMwU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Example/Gap",component:n,tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["horizontal","vertical"]},default:{control:{type:"select"},options:[1,2,3,4,5,6]}}},e={args:{direction:"horizontal",default:3},render:a=>({components:{Gap:n},setup(){return{args:a}},template:'<div>Gap<span style="border: 1px solid red;"><Gap v-bind="args" /></span>Gap</div>'})},r={args:{direction:"vertical",default:3},render:a=>({components:{Gap:n},setup(){return{args:a}},template:'<div>Gap<div style="border: 1px solid red; width: 1em;"><Gap v-bind="args" /></div>Gap</div>'})};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    default: 3
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var p,d,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    default: 3
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
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const G=["HorizontalGap","VerticalGap"];export{e as HorizontalGap,r as VerticalGap,G as __namedExportsOrder,u as default};
