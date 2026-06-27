import{T as n}from"./Tooltip-CNLglDZU.js";import{T as i}from"./Text-BVo0AXrY.js";import"./vue.esm-bundler-i9X9Ld2b.js";import"./floating-vue-8r25gIYL.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Components/Tooltip",component:n,tags:["autodocs"],argTypes:{mode:{control:"select",options:["default","contrast"]}},args:{mode:"default"}},t={args:{mode:"default"},render:e=>({components:{Tooltip:n,Text:i},setup(){return{args:e}},template:`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это подсказка
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `})},o={args:{mode:"default"},render:e=>({components:{Tooltip:n,Text:i},setup(){return{args:e}},template:`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это очень длинная подсказка, чтобы посмотреть как будет вести себя компонент в таких условиях
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `})};var r,p,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var a,l,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const b=["Default","Long"];export{t as Default,o as Long,b as __namedExportsOrder,x as default};
