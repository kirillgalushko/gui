import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Card-QaOQTy_8.js";import{n as r,t as i}from"./Stack-BAZjGJR2.js";var a,o,s,c;function l(){return(l=e((()=>{t(),r(),a={title:`Components/Stack`,component:i,tags:[`autodocs`],argTypes:{direction:{control:{type:`select`},options:[`column`,`row`]},gap:{control:{type:`select`},options:[1,2,3,4,5,6,7,8,9]},alignItems:{control:{type:`select`},options:[`start`,`center`,`end`]},stretched:{control:{type:`boolean`}},wrap:{control:{type:`boolean`}}}},o={args:{direction:`column`,gap:3},render:e=>({components:{Stack:i,Card:n},setup(){return{args:e}},template:`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        1
        <Card>Элемент 2</Card>
        2
        <Card>Элемент 3</Card>
        3
      </Stack>
    `})},s={args:{direction:`row`,gap:3},render:e=>({components:{Stack:i,Card:n},setup(){return{args:e}},template:`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        <Card>Элемент 2</Card>
        <Card>Элемент 3</Card>
      </Stack>
    `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "column",
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "row",
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
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Row`]})))()}l();export{o as Default,s as Row,c as __namedExportsOrder,a as default};