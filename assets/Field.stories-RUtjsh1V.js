import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,O as n,W as r,a as i,gt as a,z as o}from"./iframe-BRZN4f8M.js";import{n as s,t as c}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as l,t as u}from"./FieldHelper-B6Z50ELS.js";import{n as d,t as f}from"./Input-DrZS0Zbc.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./FieldLabel-CQxXpRL3.js";var y;function b(){return(b=e((()=>{i(),y=n({__name:`FieldContent`,props:{align:{default:`start`}},setup(e){let n=e;return(e,i)=>(o(),t(`div`,{class:a([`field-content`,n.align])},[r(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var x;function S(){return(S=e((()=>{b(),s(),x=c(y,[[`__scopeId`,`data-v-0354d574`]]),y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:`default`,displayName:`FieldContent`,description:``,tags:{},props:[{name:`align`,required:!1,type:{name:`union`,elements:[{name:`"start"`},{name:`"center"`},{name:`"end"`}]},defaultValue:{func:!1,value:`"start"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Field/FieldContent.vue`]})})))()}var C,w,T,E;function D(){return(D=e((()=>{g(),S(),m(),h(),l(),d(),C={title:`Components/Field`,component:p,tags:[`autodocs`],argTypes:{invalid:{type:`boolean`},disabled:{type:`boolean`},orientation:{control:`select`,options:[`vertical`,`horizontal`,`responsive`]}}},w={args:{orientation:`vertical`},render:e=>({components:{Field:p,FieldContent:x,FieldDescription:_,FieldLabel:v,Input:f},setup(){return{args:e}},template:`
      <Field v-bind="args">
        <FieldLabel html-for="field-email">Email</FieldLabel>
        <FieldContent>
          <Input id="field-email" placeholder="name@example.com" />
          <FieldDescription>Используется для входа и уведомлений</FieldDescription>
        </FieldContent>
      </Field>
    `})},T={args:{invalid:!0},render:e=>({components:{Field:p,FieldContent:x,FieldLabel:v,FieldHelper:u,Input:f},setup(){return{args:e}},template:`
      <Field v-bind="args">
        <FieldLabel html-for="field-inn">ИНН</FieldLabel>
        <FieldContent>
          <Input id="field-inn" invalid />
          <FieldHelper error-message="Введите корректный ИНН" invalid />
        </FieldContent>
      </Field>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  },
  render: args => ({
    components: {
      Field,
      FieldContent,
      FieldDescription,
      FieldLabel,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Field v-bind="args">
        <FieldLabel html-for="field-email">Email</FieldLabel>
        <FieldContent>
          <Input id="field-email" placeholder="name@example.com" />
          <FieldDescription>Используется для входа и уведомлений</FieldDescription>
        </FieldContent>
      </Field>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => ({
    components: {
      Field,
      FieldContent,
      FieldLabel,
      FieldHelper,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Field v-bind="args">
        <FieldLabel html-for="field-inn">ИНН</FieldLabel>
        <FieldContent>
          <Input id="field-inn" invalid />
          <FieldHelper error-message="Введите корректный ИНН" invalid />
        </FieldContent>
      </Field>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Invalid`]})))()}D();export{w as Default,T as Invalid,E as __namedExportsOrder,C as default};