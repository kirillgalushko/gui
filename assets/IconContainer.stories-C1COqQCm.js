import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,F as n,O as r,W as i,a,y as o,z as s}from"./iframe-Du9fEe2r.js";import{n as c,t as l}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Ct as u,n as d}from"./gui-icons.es-ypdSzEZR.js";var f;function p(){return(p=e((()=>{a(),f=r({__name:`IconContainer`,props:{size:{default:`40px`},mode:{default:`square`},color:{}},setup(e){let r=e,a=o(()=>{let e=r.color===void 0?void 0:`var(--color-${r.color}-500)`;return{"--icon-container-size":r.size,"--icon-container-background":e===void 0?`hsl(var(--secondary))`:`color-mix(in oklab, ${e} 20%, transparent)`,"--icon-container-color":e??`hsl(var(--secondary-foreground))`}});return(e,o)=>(s(),t(`span`,n(e.$attrs,{class:[`IconContainer`,r.mode],style:a.value}),[i(e.$slots,`default`,{},void 0,!0)],16))}})})))()}var m;function h(){return(h=e((()=>{p(),c(),m=l(f,[[`__scopeId`,`data-v-0ec32381`]]),f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:`default`,displayName:`IconContainer`,description:``,tags:{},props:[{name:`size`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"40px"`}},{name:`mode`,required:!1,type:{name:`IconContainerMode`},defaultValue:{func:!1,value:`"square"`}},{name:`color`,required:!1,type:{name:`IconContainerColor`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/IconContainer/IconContainer.vue`]})})))()}var g,_,v,y,b;function x(){return(x=e((()=>{d(),h(),g={title:`Components/IconContainer`,component:m,tags:[`autodocs`],argTypes:{size:{control:{type:`text`}},mode:{control:{type:`select`},options:[`square`,`circle`,`plain`]},color:{control:{type:`select`},options:[void 0,`red`,`orange`,`green`,`blue`,`violet`,`gray`]}},args:{size:`80px`,mode:`square`}},_={render:e=>({components:{IconContainer:m,IconCreditCardOutline:u},setup(){return{args:e}},template:`
      <IconContainer v-bind="args">
        <IconCreditCardOutline />
      </IconContainer>`})},v={args:{color:`blue`,mode:`circle`},render:_.render},y={args:{color:`blue`,mode:`plain`,size:`32px`},render:_.render},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: "blue",
    mode: "circle"
  },
  render: Default.render
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: "blue",
    mode: "plain",
    size: "32px"
  },
  render: Default.render
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Colored`,`Plain`]})))()}x();export{v as Colored,_ as Default,y as Plain,b as __namedExportsOrder,g as default};