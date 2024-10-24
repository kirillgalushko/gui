import{C as m}from"./Card-26ca1X5O.js";import{S as t}from"./Stack-DWaHa60A.js";import"./vue.esm-bundler-CDnL0_Xs.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Example/Stack",component:t,tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["column","row"]},gap:{control:{type:"select"},options:[1,2,3,4,5,6]},alignItems:{control:{type:"select"},options:["start","center","end"]},stretched:{control:{type:"boolean"}}}},r={args:{direction:"column",gap:3},render:a=>({components:{Stack:t,Card:m},setup(){return{args:a}},template:`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        1
        <Card>Элемент 2</Card>
        2
        <Card>Элемент 3</Card>
        3
      </Stack>
    `})},n={args:{direction:"row",gap:3},render:a=>({components:{Stack:t,Card:m},setup(){return{args:a}},template:`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        <Card>Элемент 2</Card>
        <Card>Элемент 3</Card>
      </Stack>
    `})};var e,o,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 3
  },
  render: args => ({
    components: {
      Stack,
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        1
        <Card>Элемент 2</Card>
        2
        <Card>Элемент 3</Card>
        3
      </Stack>
    \`
  })
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    gap: 3
  },
  render: args => ({
    components: {
      Stack,
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        <Card>Элемент 2</Card>
        <Card>Элемент 3</Card>
      </Stack>
    \`
  })
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["Default","Row"];export{r as Default,n as Row,S as __namedExportsOrder,u as default};
