import{T as n}from"./Tooltip-DLMn32nn.js";import{T as i}from"./Text-BcWia3ov.js";import"./vue.esm-bundler-C3G7_qdG.js";import"./floating-vue-Na-Jh8dG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Example/Tooltip",component:n,tags:["autodocs"],argTypes:{mode:{control:"select",options:["default","accent"]}},args:{mode:"default"}},t={args:{mode:"default"},render:o=>({components:{Tooltip:n,Text:i},setup(){return{args:o}},template:`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это подсказка
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `})},e={args:{mode:"default"},render:o=>({components:{Tooltip:n,Text:i},setup(){return{args:o}},template:`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это очень длинная подсказка, чтобы посмотреть как будет вести себя компонент в таких условиях
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `})};var r,p,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    mode: 'default'
  },
  render: args => ({
    components: {
      Tooltip,
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это подсказка
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    \`
  })
}`,...(a=(p=t.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var s,l,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    mode: 'default'
  },
  render: args => ({
    components: {
      Tooltip,
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это очень длинная подсказка, чтобы посмотреть как будет вести себя компонент в таких условиях
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    \`
  })
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["Default","Long"];export{t as Default,e as Long,x as __namedExportsOrder,f as default};
