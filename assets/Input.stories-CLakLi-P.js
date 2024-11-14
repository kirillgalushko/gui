import{I as n,d as g,a as I}from"./Input-CGdpnjva.js";import"./vue.esm-bundler-Co5nn-M2.js";import"./IconAccessibleFilled-BhQoVzGe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Components/Input",component:n,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},t={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:n},setup(){return{args:e}},template:'<Input v-bind="args" v-model="args.value" />'})},r={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:n,IconSearchOutline:g},setup(){return{args:e}},template:`
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var u,p,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const S=["Default","WithLeftIcon","WithRightIcon"];export{t as Default,r as WithLeftIcon,a as WithRightIcon,S as __namedExportsOrder,f as default};
