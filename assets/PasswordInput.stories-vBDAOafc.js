import{P as s}from"./PasswordInput-DtGYX4OP.js";import"./vue.esm-bundler-i9X9Ld2b.js";import"./IconEyeClosedOutline-d6g9vJL1.js";import"./IconAccessibleFilled-DPtg55nG.js";import"./IconEyeOutline-DFkHeeDD.js";import"./Action-Du17rN5X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Input-BGJ81Xdh.js";import"./FormHelper-CtLN8e56.js";import"./Text-BVo0AXrY.js";const f={title:"Components/PasswordInput",component:s,tags:["autodocs"],argTypes:{disabled:{type:"boolean"},invalid:{type:"boolean"}}},e={args:{placeholder:"Пароль",value:"password"},render:a=>({components:{PasswordInput:s},setup(){return{args:a}},template:'<PasswordInput v-bind="args" v-model="args.value" />'})},r={args:{placeholder:"Пароль",value:"123",description:"Минимум 8 символов",errorMessage:"Пароль слишком короткий",invalid:!0},render:a=>({components:{PasswordInput:s},setup(){return{args:a}},template:'<PasswordInput v-bind="args" v-model="args.value" />'})};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'Пароль',
    value: 'password'
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
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Пароль',
    value: '123',
    description: 'Минимум 8 символов',
    errorMessage: 'Пароль слишком короткий',
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
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const h=["Default","Invalid"];export{e as Default,r as Invalid,h as __namedExportsOrder,f as default};
