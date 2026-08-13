import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-CfzASKeY.js";import{n as r,t as i}from"./Gap-Beavpr87.js";import{n as a,t as o}from"./Text-CY8H8lpg.js";import{n as s,t as c}from"./Card-QLGUd3tV.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a(),t(),r(),s(),l={title:`Components/Card`,component:c,tags:[`autodocs`],argTypes:{background:{control:{type:`select`},options:[`default`,`secondary`]},stretched:{control:{type:`boolean`}},fullHeight:{control:{type:`boolean`}},interactive:{control:{type:`boolean`}},padding:{control:{type:`number`}},borderRadius:{control:{type:`number`}},onClick:{action:`clicked`}}},u=`
  <Text typography="title-2">Notifications</Text>
  <Gap :size="1" direction="vertical" />
  <Text typography="paragraph-2" color="secondary">You have 3 unread messages</Text>
  <Gap :size="3" direction="vertical" />
  <Button mode="contrast">Mark as read</Button>
`,d={Card:c,Text:o,Button:n,Gap:i},f={padding:24,borderRadius:20},p={args:{background:`default`,stretched:!1,interactive:!1,...f},render:e=>({components:d,setup(){return{args:e}},template:`
    <Card v-bind="args">
      ${u}
    </Card>`})},m={args:{background:`secondary`,stretched:!1,interactive:!1,...f},render:e=>({components:d,setup(){return{args:e}},template:`<Card v-bind="args">${u}</Card>`})},h={args:{background:`default`,stretched:!1,interactive:!0,...f},render:e=>({components:d,setup(){return{args:e,onClick:e=>{console.log(`Card clicked`,e)}}},template:`<Card v-bind="args" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Text typography="paragraph-2" color="secondary">The whole card is clickable</Text>
    </Card>`})},g={args:{background:`default`,stretched:!0,interactive:!1,...f},render:e=>({components:d,setup(){return{args:e}},template:`<Card v-bind="args">${u}</Card>`})},_={args:{background:`default`,fullHeight:!0,interactive:!1,stretched:!0,...f},render:e=>({components:d,setup(){return{args:e}},template:`<div style="height: 320px"><Card v-bind="args">${u}</Card></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    background: "default",
    stretched: false,
    interactive: false,
    ...demoArgs
  },
  render: args => ({
    components: demoComponents,
    setup() {
      return {
        args
      };
    },
    template: \`
    <Card v-bind="args">
      \${cardContent}
    </Card>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    background: "secondary",
    stretched: false,
    interactive: false,
    ...demoArgs
  },
  render: args => ({
    components: demoComponents,
    setup() {
      return {
        args
      };
    },
    template: \`<Card v-bind="args">\${cardContent}</Card>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    background: "default",
    stretched: false,
    interactive: true,
    ...demoArgs
  },
  render: args => ({
    components: demoComponents,
    setup() {
      const onClick = (event: MouseEvent) => {
        console.log("Card clicked", event);
      };
      return {
        args,
        onClick
      };
    },
    template: \`<Card v-bind="args" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Text typography="paragraph-2" color="secondary">The whole card is clickable</Text>
    </Card>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    background: "default",
    stretched: true,
    interactive: false,
    ...demoArgs
  },
  render: args => ({
    components: demoComponents,
    setup() {
      return {
        args
      };
    },
    template: \`<Card v-bind="args">\${cardContent}</Card>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    background: "default",
    fullHeight: true,
    interactive: false,
    stretched: true,
    ...demoArgs
  },
  render: args => ({
    components: demoComponents,
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 320px"><Card v-bind="args">\${cardContent}</Card></div>\`
  })
}`,..._.parameters?.docs?.source}}},v=[`DefaultCard`,`SecondaryCard`,`InteractiveCard`,`StretchedCard`,`FullHeightCard`]})))()}y();export{p as DefaultCard,_ as FullHeightCard,h as InteractiveCard,m as SecondaryCard,g as StretchedCard,v as __namedExportsOrder,l as default};