import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Text-BkeTCBMw.js";import{n as r,t as i}from"./Tooltip-Df-iSDWs.js";var a,o,s,c,l;function u(){return(u=e((()=>{r(),t(),a={title:`Components/Tooltip`,component:i,tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`default`,`contrast`]},delay:{control:`object`},stretched:{control:`boolean`}},args:{mode:`default`,delay:{show:200,hide:0}}},o={args:{mode:`default`,delay:{show:200,hide:0}},render:e=>({components:{Tooltip:i,Text:n},setup(){return{args:e}},template:`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это подсказка
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `})},s={args:{stretched:!0},render:e=>({components:{Tooltip:i},setup(){return{args:e}},template:`
      <div style="width: 320px;">
        <Tooltip v-bind="args">
          <button style="width: 100%;">Trigger на всю ширину</button>
          <template #popper>Подсказка</template>
        </Tooltip>
      </div>
    `})},c={args:{mode:`default`,delay:{show:200,hide:0}},render:e=>({components:{Tooltip:i,Text:n},setup(){return{args:e}},template:`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это очень длинная подсказка, чтобы посмотреть как будет вести себя компонент в таких условиях
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "default",
    delay: {
      show: 200,
      hide: 0
    }
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    stretched: true
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 320px;">
        <Tooltip v-bind="args">
          <button style="width: 100%;">Trigger на всю ширину</button>
          <template #popper>Подсказка</template>
        </Tooltip>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "default",
    delay: {
      show: 200,
      hide: 0
    }
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
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Stretched`,`Long`]})))()}u();export{o as Default,c as Long,s as Stretched,l as __namedExportsOrder,a as default};