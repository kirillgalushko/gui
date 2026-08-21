import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ScrollArea-BpAngtXO.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Components/ScrollArea`,component:n,tags:[`autodocs`],args:{fade:!0,maxHeight:240,orientation:`vertical`},argTypes:{orientation:{control:`select`,options:[`vertical`,`horizontal`,`both`]}}},i={render:e=>({components:{ScrollArea:n},setup(){return{args:e,events:Array.from({length:16},(e,t)=>`Событие ${t+1}`)}},template:`
      <ScrollArea v-bind="args" aria-label="История действий">
        <p v-for="event in events" :key="event">{{ event }}</p>
      </ScrollArea>
    `})},a={args:{maxHeight:void 0,orientation:`horizontal`},render:e=>({components:{ScrollArea:n},setup(){return{args:e,items:Array.from({length:12},(e,t)=>`Элемент ${t+1}`)}},template:`
      <ScrollArea v-bind="args" aria-label="Горизонтальный список">
        <div style="display: flex; gap: 16px; width: max-content">
          <span v-for="item in items" :key="item">{{ item }}</span>
        </div>
      </ScrollArea>
    `})},o={args:{maxHeight:240},render:e=>({components:{ScrollArea:n},setup(){return{args:e}},template:`
      <ScrollArea v-bind="args" aria-label="Короткий список">
        <p>Первый элемент</p>
        <p>Второй элемент</p>
      </ScrollArea>
    `})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ScrollArea
    },
    setup() {
      const events = Array.from({
        length: 16
      }, (_, index) => \`Событие \${index + 1}\`);
      return {
        args,
        events
      };
    },
    template: \`
      <ScrollArea v-bind="args" aria-label="История действий">
        <p v-for="event in events" :key="event">{{ event }}</p>
      </ScrollArea>
    \`
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    maxHeight: undefined,
    orientation: "horizontal"
  },
  render: args => ({
    components: {
      ScrollArea
    },
    setup() {
      const items = Array.from({
        length: 12
      }, (_, index) => \`Элемент \${index + 1}\`);
      return {
        args,
        items
      };
    },
    template: \`
      <ScrollArea v-bind="args" aria-label="Горизонтальный список">
        <div style="display: flex; gap: 16px; width: max-content">
          <span v-for="item in items" :key="item">{{ item }}</span>
        </div>
      </ScrollArea>
    \`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    maxHeight: 240
  },
  render: args => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ScrollArea v-bind="args" aria-label="Короткий список">
        <p>Первый элемент</p>
        <p>Второй элемент</p>
      </ScrollArea>
    \`
  })
}`,...o.parameters?.docs?.source}}},s=[`Default`,`HorizontalFade`,`NoOverflowNoFade`]})))()}c();export{i as Default,a as HorizontalFade,o as NoOverflowNoFade,s as __namedExportsOrder,r as default};