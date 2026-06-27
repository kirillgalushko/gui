import{I as r}from"./Input-BGJ81Xdh.js";import"./vue.esm-bundler-i9X9Ld2b.js";import{d as b,a as f}from"./IconSearchOutline-Tgab2PV4.js";import"./FormHelper-CtLN8e56.js";import"./Text-BVo0AXrY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconAccessibleFilled-DPtg55nG.js";const y={title:"Components/Input",component:r,tags:["autodocs"],argTypes:{disabled:{type:"boolean"},invalid:{type:"boolean"}}},a={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:r},setup(){return{args:e}},template:'<Input v-bind="args" v-model="args.value" />'})},t={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:r,IconSearchOutline:b},setup(){return{args:e}},template:`
      <Input v-bind="args" v-model="args.value">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    `})},o={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:r,IconMenu2Outline:f},setup(){return{args:e}},template:`
      <Input v-bind="args" v-model="args.value">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    `})},n={args:{placeholder:"Placeholder",value:"Value",description:"Подсказка скрывается при ошибке",errorMessage:"Поле заполнено неверно",invalid:!0},render:e=>({components:{Input:r},setup(){return{args:e}},template:'<Input v-bind="args" v-model="args.value" />'})};var l,s,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  },
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: '<Input v-bind="args" v-model="args.value" />'
  })
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,c,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  },
  render: args => ({
    components: {
      Input,
      IconSearchOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Input v-bind="args" v-model="args.value">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    \`
  })
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,i,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  },
  render: args => ({
    components: {
      Input,
      IconMenu2Outline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Input v-bind="args" v-model="args.value">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    \`
  })
}`,...(g=(i=o.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var v,I,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    description: 'Подсказка скрывается при ошибке',
    errorMessage: 'Поле заполнено неверно',
    invalid: true
  },
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: '<Input v-bind="args" v-model="args.value" />'
  })
}`,...(h=(I=n.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const x=["Default","WithLeftIcon","WithRightIcon","Invalid"];export{a as Default,n as Invalid,t as WithLeftIcon,o as WithRightIcon,x as __namedExportsOrder,y as default};
