import{I as a,d as I,a as g}from"./Input-DeSRtIS4.js";import"./vue.esm-bundler-IF9MMzN9.js";import"./IconAccessibleFilled-BfHDHi1J.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Components/Input",component:a,tags:["autodocs"]},n={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:a},setup(){return{args:e}},template:'<Input v-bind="args" />'})},t={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:a,IconSearchOutline:I},setup(){return{args:e}},template:`
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
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,d,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const b=["Default","WithLeftIcon","WithRightIcon"];export{n as Default,t as WithLeftIcon,r as WithRightIcon,b as __namedExportsOrder,S as default};
