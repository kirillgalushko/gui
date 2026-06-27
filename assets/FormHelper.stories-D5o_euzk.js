import{F as o}from"./FormHelper-CtLN8e56.js";import"./vue.esm-bundler-i9X9Ld2b.js";import"./Text-BVo0AXrY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/FormHelper",component:o,tags:["autodocs"],argTypes:{invalid:{type:"boolean"},disabled:{type:"boolean"}}},e={args:{description:"Подсказка для поля"},render:s=>({components:{FormHelper:o},setup(){return{args:s}},template:'<FormHelper v-bind="args" />'})},r={args:{description:"Подсказка для поля",errorMessage:"Поле заполнено неверно",invalid:!0},render:s=>({components:{FormHelper:o},setup(){return{args:s}},template:'<FormHelper v-bind="args" />'})};var t,a,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    description: 'Подсказка для поля'
  },
  render: args => ({
    components: {
      FormHelper
    },
    setup() {
      return {
        args
      };
    },
    template: '<FormHelper v-bind="args" />'
  })
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var n,m,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    description: 'Подсказка для поля',
    errorMessage: 'Поле заполнено неверно',
    invalid: true
  },
  render: args => ({
    components: {
      FormHelper
    },
    setup() {
      return {
        args
      };
    },
    template: '<FormHelper v-bind="args" />'
  })
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const v=["Default","Invalid"];export{e as Default,r as Invalid,v as __namedExportsOrder,g as default};
