import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-BnZoe71I.js";import{n as r,t as i}from"./Gap-DiSiEy1Z.js";import{n as a,t as o}from"./Text-BkeTCBMw.js";import{n as s,t as c}from"./AuroraBackground-CFKDhuFC.js";import{n as l,t as u}from"./Card-B8dKHZSo.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{a(),t(),r(),s(),l(),d={title:`Components/Card`,component:u,tags:[`autodocs`],argTypes:{background:{control:{type:`select`},options:[`default`,`secondary`]},blur:{control:{type:`boolean`},description:`Делает фон полупрозрачным и размывает содержимое под карточкой.`},stretched:{control:{type:`boolean`}},fullHeight:{control:{type:`boolean`}},interactive:{control:{type:`boolean`}},padding:{control:{type:`number`}},borderRadius:{control:{type:`number`}},onClick:{action:`clicked`}}},f=`
  <Text typography="title-2">Notifications</Text>
  <Gap :size="1" direction="vertical" />
  <Text typography="paragraph-2" color="secondary">You have 3 unread messages</Text>
  <Gap :size="3" direction="vertical" />
  <Button mode="contrast">Mark as read</Button>
`,p={AuroraBackground:c,Card:u,Text:o,Button:n,Gap:i},m={padding:24,borderRadius:20},h={args:{background:`default`,stretched:!1,interactive:!1,...m},render:e=>({components:p,setup(){return{args:e}},template:`
    <Card v-bind="args">
      ${f}
    </Card>`})},g={args:{background:`secondary`,stretched:!1,interactive:!1,...m},render:e=>({components:p,setup(){return{args:e}},template:`<Card v-bind="args">${f}</Card>`})},_={args:{background:`default`,blur:!0,stretched:!0,interactive:!1,...m},render:e=>({components:p,setup(){return{args:e}},template:`
      <AuroraBackground :animated="false" intensity="strong" palette="ocean">
        <Card v-bind="args">${f}</Card>
      </AuroraBackground>
    `})},v={args:{background:`default`,stretched:!1,interactive:!0,...m},render:e=>({components:p,setup(){return{args:e,onClick:e=>{console.log(`Card clicked`,e)}}},template:`<Card v-bind="args" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Text typography="paragraph-2" color="secondary">The whole card is clickable</Text>
    </Card>`})},y={args:{background:`default`,stretched:!0,interactive:!1,...m},render:e=>({components:p,setup(){return{args:e}},template:`<Card v-bind="args">${f}</Card>`})},b={args:{background:`default`,fullHeight:!0,interactive:!1,stretched:!0,...m},render:e=>({components:p,setup(){return{args:e}},template:`<div style="height: 320px"><Card v-bind="args">${f}</Card></div>`})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    background: "default",
    blur: true,
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
    template: \`
      <AuroraBackground :animated="false" intensity="strong" palette="ocean">
        <Card v-bind="args">\${cardContent}</Card>
      </AuroraBackground>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`DefaultCard`,`SecondaryCard`,`BlurredCard`,`InteractiveCard`,`StretchedCard`,`FullHeightCard`]})))()}S();export{_ as BlurredCard,h as DefaultCard,b as FullHeightCard,v as InteractiveCard,g as SecondaryCard,y as StretchedCard,x as __namedExportsOrder,d as default};