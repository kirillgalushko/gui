import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ct as t,n}from"./gui-icons.es-BLyOnAQu.js";import{n as r,t as i}from"./IconContainer-Dm3dMkbi.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),r(),a={title:`Components/IconContainer`,component:i,tags:[`autodocs`],argTypes:{size:{control:{type:`text`}},mode:{control:{type:`select`},options:[`square`,`circle`,`plain`]},color:{control:{type:`select`},options:[void 0,`red`,`orange`,`green`,`blue`,`violet`,`gray`]}},args:{size:`80px`,mode:`square`}},o={render:e=>({components:{IconContainer:i,IconCreditCardOutline:t},setup(){return{args:e}},template:`
      <IconContainer v-bind="args">
        <IconCreditCardOutline />
      </IconContainer>`})},s={args:{color:`blue`,mode:`circle`},render:o.render},c={args:{color:`blue`,mode:`plain`,size:`32px`},render:o.render},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IconContainer,
      IconCreditCardOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <IconContainer v-bind="args">
        <IconCreditCardOutline />
      </IconContainer>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: "blue",
    mode: "circle"
  },
  render: Default.render
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: "blue",
    mode: "plain",
    size: "32px"
  },
  render: Default.render
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Colored`,`Plain`]})))()}u();export{s as Colored,o as Default,c as Plain,l as __namedExportsOrder,a as default};