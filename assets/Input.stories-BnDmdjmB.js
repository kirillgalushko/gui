import{I as n}from"./Input-B6lmfLyL.js";import"./vue.esm-bundler-CfgtLz7v.js";import{d as g,a as I}from"./IconSearchOutline-CyJRNnyc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconAccessibleFilled-CySfqBps.js";const S={title:"Components/Input",component:n,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},t={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:n},setup(){return{args:e}},template:'<Input v-bind="args" v-model="args.value" />'})},r={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:n,IconSearchOutline:g},setup(){return{args:e}},template:`
      <Input v-bind="args" v-model="args.value">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    `})},a={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:n,IconMenu2Outline:I},setup(){return{args:e}},template:`
      <Input v-bind="args" v-model="args.value">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    `})};var o,l,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,d,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const P=["Default","WithLeftIcon","WithRightIcon"];export{t as Default,r as WithLeftIcon,a as WithRightIcon,P as __namedExportsOrder,S as default};
