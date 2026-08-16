import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ScrollArea-MnZb3-Kf.js";var r,i,a;function o(){return(o=e((()=>{t(),r={title:`Components/ScrollArea`,component:n,tags:[`autodocs`],args:{maxHeight:240,orientation:`vertical`},argTypes:{orientation:{control:`select`,options:[`vertical`,`horizontal`,`both`]}}},i={render:e=>({components:{ScrollArea:n},setup(){return{args:e,events:Array.from({length:16},(e,t)=>`Событие ${t+1}`)}},template:`
      <ScrollArea v-bind="args" aria-label="История действий">
        <p v-for="event in events" :key="event">{{ event }}</p>
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
}`,...i.parameters?.docs?.source}}},a=[`Default`]})))()}o();export{i as Default,a as __namedExportsOrder,r as default};