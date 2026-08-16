import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./FieldHelper-B6Z50ELS.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Components/FieldHelper`,component:n,tags:[`autodocs`],argTypes:{invalid:{type:`boolean`},disabled:{type:`boolean`}}},i={args:{description:`Подсказка для поля`},render:e=>({components:{FieldHelper:n},setup(){return{args:e}},template:`<FieldHelper v-bind="args" />`})},a={args:{description:`Подсказка для поля`,errorMessage:`Поле заполнено неверно`,invalid:!0},render:e=>({components:{FieldHelper:n},setup(){return{args:e}},template:`<FieldHelper v-bind="args" />`})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    description: "Подсказка для поля"
  },
  render: args => ({
    components: {
      FieldHelper
    },
    setup() {
      return {
        args
      };
    },
    template: '<FieldHelper v-bind="args" />'
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    description: "Подсказка для поля",
    errorMessage: "Поле заполнено неверно",
    invalid: true
  },
  render: args => ({
    components: {
      FieldHelper
    },
    setup() {
      return {
        args
      };
    },
    template: '<FieldHelper v-bind="args" />'
  })
}`,...a.parameters?.docs?.source}}},o=[`Default`,`Invalid`]})))()}s();export{i as Default,a as Invalid,o as __namedExportsOrder,r as default};