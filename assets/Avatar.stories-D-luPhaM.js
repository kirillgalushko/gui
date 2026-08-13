import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n}from"./gui-icons.es-ypdSzEZR.js";import{n as r,t as i}from"./Avatar-COR3_Hvc.js";import{n as a,t as o}from"./avatar-example-DLQZ0Cl3.js";var s,c,l,u,d;function f(){return(f=e((()=>{r(),n(),a(),s={title:`Components/Avatar`,component:i,tags:[`autodocs`],argTypes:{shape:{control:{type:`select`},options:[`square`,`circle`]},color:{control:{type:`select`},options:[void 0,`red`,`orange`,`green`,`blue`,`violet`,`gray`]},mode:{control:{type:`select`},options:[`default`,`accent`,`secondary`,`ghost`,`outlined`,`negative`,`positive`,`danger`,`warning`]},size:{control:{type:`text`}},name:{control:{type:`text`}}},args:{size:`60px`}},c={args:{},render:e=>({components:{Avatar:i,IconUserOutline:t},setup(){return{args:e,avatarExample:o}},template:`
    <Avatar :src="avatarExample" v-bind="args" />`})},l={args:{mode:`positive`},render:e=>({components:{Avatar:i,IconUserOutline:t},setup(){return{args:e,avatarExample:o}},template:`
    <Avatar v-bind="args">
      <IconUserOutline />
    </Avatar>`})},u={args:{name:`Аренда`},render:e=>({components:{Avatar:i},setup(){return{args:e}},template:`
    <Avatar v-bind="args" />`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`WithImage`,`WithIcon`,`WithFallback`]})))()}f();export{u as WithFallback,l as WithIcon,c as WithImage,d as __namedExportsOrder,s as default};