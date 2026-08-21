import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./PasswordInput-Xp6pobZZ.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Components/PasswordInput`,component:n,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`},invalid:{type:`boolean`}}},i={args:{placeholder:`Пароль`,value:`password`},render:e=>({components:{PasswordInput:n},setup(){return{args:e}},template:`<PasswordInput v-bind="args" v-model="args.value" />`})},a={args:{placeholder:`Пароль`,value:`123`,description:`Минимум 8 символов`,errorMessage:`Пароль слишком короткий`,invalid:!0},render:e=>({components:{PasswordInput:n},setup(){return{args:e}},template:`<PasswordInput v-bind="args" v-model="args.value" />`})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Пароль",
    value: "password"
  },
  render: args => ({
    components: {
      PasswordInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<PasswordInput v-bind="args" v-model="args.value" />'
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Пароль",
    value: "123",
    description: "Минимум 8 символов",
    errorMessage: "Пароль слишком короткий",
    invalid: true
  },
  render: args => ({
    components: {
      PasswordInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<PasswordInput v-bind="args" v-model="args.value" />'
  })
}`,...a.parameters?.docs?.source}}},o=[`Default`,`Invalid`]})))()}s();export{i as Default,a as Invalid,o as __namedExportsOrder,r as default};