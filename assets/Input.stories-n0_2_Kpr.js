import{I as a,d as I,a as g}from"./Input-Bz2e4p1c.js";import"./vue.esm-bundler-W7H8yL8W.js";import"./IconAccessibleFilled-Bv--GMkI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Components/Input",component:a,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},n={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:a},setup(){return{args:e}},template:'<Input v-bind="args" />'})},t={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:a,IconSearchOutline:I},setup(){return{args:e}},template:`
      <Input v-bind="args">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    `})},r={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:a,IconMenu2Outline:g},setup(){return{args:e}},template:`
      <Input v-bind="args">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    `})};var o,s,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    template: '<Input v-bind="args" />'
  })
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,u,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      <Input v-bind="args">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    \`
  })
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,m,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <Input v-bind="args">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    \`
  })
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const S=["Default","WithLeftIcon","WithRightIcon"];export{n as Default,t as WithLeftIcon,r as WithRightIcon,S as __namedExportsOrder,f as default};
