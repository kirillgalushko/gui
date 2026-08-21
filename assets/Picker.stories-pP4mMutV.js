import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,zt as n}from"./gui-icons.es-BLyOnAQu.js";import{n as r,t as i}from"./Picker-DY83263r.js";var a,o,s,c;function l(){return(l=e((()=>{t(),r(),a={title:`Components/Picker`,component:i,tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`default`,`outline`]},stretched:{control:`boolean`}}},o={args:{mode:`default`},render:e=>({components:{IconChevronDownOutline:n,Picker:i},setup(){return{args:e}},template:`
      <Picker v-bind="args">
        Выберите значение
        <template #icon>
          <IconChevronDownOutline />
        </template>
      </Picker>
    `})},s={...o,args:{mode:`outline`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "default"
  },
  render: args => ({
    components: {
      IconChevronDownOutline,
      Picker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Picker v-bind="args">
        Выберите значение
        <template #icon>
          <IconChevronDownOutline />
        </template>
      </Picker>
    \`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    mode: "outline"
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Outline`]})))()}l();export{o as Default,s as Outline,c as __namedExportsOrder,a as default};