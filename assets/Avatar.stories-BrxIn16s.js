import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Nt as t,a as n,n as r}from"./gui-icons.es-BLyOnAQu.js";import{n as i,t as a}from"./Avatar-DhkNKh4Y.js";import{n as o,t as s}from"./IconContainer-Dm3dMkbi.js";import{n as c,t as l}from"./avatar-example-DLQZ0Cl3.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{i(),r(),o(),c(),u={title:`Components/Avatar`,component:a,tags:[`autodocs`],argTypes:{shape:{control:{type:`select`},options:[`square`,`circle`]},color:{control:{type:`select`},options:[void 0,`red`,`orange`,`green`,`blue`,`violet`,`gray`]},mode:{control:{type:`select`},options:[`default`,`accent`,`secondary`,`ghost`,`outlined`,`negative`,`positive`,`danger`,`warning`]},size:{control:{type:`text`}},name:{control:{type:`text`}}},args:{size:`60px`}},d={args:{},render:e=>({components:{Avatar:a,IconUserOutline:n},setup(){return{args:e,avatarExample:l}},template:`
    <Avatar :src="avatarExample" v-bind="args" />`})},f={args:{mode:`positive`},render:e=>({components:{Avatar:a,IconUserOutline:n},setup(){return{args:e,avatarExample:l}},template:`
    <Avatar v-bind="args">
      <IconUserOutline />
    </Avatar>`})},p={args:{name:`Аренда`},render:e=>({components:{Avatar:a},setup(){return{args:e}},template:`
    <Avatar v-bind="args" />`})},m={args:{name:`Аренда`},render:e=>({components:{Avatar:a,IconCircleCheckOutline:t,IconContainer:s},setup(){return{args:e}},template:`
    <Avatar v-bind="args">
      <template #corner>
        <IconContainer mode="circle" size="18px">
          <IconCircleCheckOutline />
        </IconContainer>
      </template>
    </Avatar>`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Avatar,
      IconUserOutline
    },
    setup() {
      return {
        args,
        avatarExample
      };
    },
    template: \`
    <Avatar :src="avatarExample" v-bind="args" />\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "positive"
  },
  render: args => ({
    components: {
      Avatar,
      IconUserOutline
    },
    setup() {
      return {
        args,
        avatarExample
      };
    },
    template: \`
    <Avatar v-bind="args">
      <IconUserOutline />
    </Avatar>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Аренда"
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <Avatar v-bind="args" />\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Аренда"
  },
  render: args => ({
    components: {
      Avatar,
      IconCircleCheckOutline,
      IconContainer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <Avatar v-bind="args">
      <template #corner>
        <IconContainer mode="circle" size="18px">
          <IconCircleCheckOutline />
        </IconContainer>
      </template>
    </Avatar>\`
  })
}`,...m.parameters?.docs?.source}}},h=[`WithImage`,`WithIcon`,`WithFallback`,`WithCornerContent`]})))()}g();export{m as WithCornerContent,p as WithFallback,f as WithIcon,d as WithImage,h as __namedExportsOrder,u as default};