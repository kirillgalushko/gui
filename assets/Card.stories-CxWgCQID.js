import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-BMCIb-MW.js";import{n as r,t as i}from"./Card-CMNAHxXH.js";import{n as a,t as o}from"./Text-BGOG7_PZ.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./CardHeader-BVrJ-Nbi.js";import{n as p,t as m}from"./Gap-BztRMGj8.js";import{n as h,t as g}from"./AuroraBackground-H7tQtVE_.js";var _,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{a(),t(),p(),h(),r(),u(),c(),l(),_={title:`Components/Card`,component:i,tags:[`autodocs`],argTypes:{background:{control:{type:`select`},options:[`default`,`secondary`]},blur:{control:{type:`boolean`},description:`Делает фон полупрозрачным и размывает содержимое под карточкой.`},stretched:{control:{type:`boolean`}},fullHeight:{control:{type:`boolean`}},interactive:{control:{type:`boolean`}},Element:{control:{type:`select`},options:[`div`,`button`]},padding:{control:{type:`number`}},borderRadius:{control:{type:`number`}},onClick:{action:`clicked`}}},v=`
  <Text typography="title-2">Notifications</Text>
  <Gap :size="1" direction="vertical" />
  <Text typography="paragraph-2" color="secondary">You have 3 unread messages</Text>
  <Gap :size="3" direction="vertical" />
  <Button mode="contrast">Mark as read</Button>
`,y={AuroraBackground:g,Button:n,Card:i,CardContent:s,CardFooter:d,CardHeader:f,Gap:m,Text:o},b={padding:24,borderRadius:20},x={args:{background:`default`,stretched:!1,interactive:!1,...b},render:e=>({components:y,setup(){return{args:e}},template:`
    <Card v-bind="args">
      ${v}
    </Card>`})},S={args:{background:`secondary`,stretched:!1,interactive:!1,...b},render:e=>({components:y,setup(){return{args:e}},template:`<Card v-bind="args">${v}</Card>`})},C={args:{background:`default`,blur:!0,stretched:!0,interactive:!1,...b},render:e=>({components:y,setup(){return{args:e}},template:`
      <AuroraBackground :animated="false" intensity="strong" palette="ocean">
        <Card v-bind="args">${v}</Card>
      </AuroraBackground>
    `})},w={args:{background:`default`,stretched:!1,interactive:!0,...b},render:e=>({components:y,setup(){return{args:e,onClick:e=>{console.log(`Card clicked`,e)}}},template:`<Card v-bind="args" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Text typography="paragraph-2" color="secondary">The whole card is clickable</Text>
    </Card>`})},T={args:{background:`default`,Element:`div`,stretched:!1,interactive:!0,...b},render:e=>({components:y,setup(){return{args:e,onClick:e=>{console.log(`Card clicked`,e)}}},template:`<Card v-bind="args" role="button" tabindex="0" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Gap :size="2" />
      <Button type="button">Action</Button>
    </Card>`})},E={args:{background:`default`,stretched:!0,interactive:!1,...b},render:e=>({components:y,setup(){return{args:e}},template:`<Card v-bind="args">${v}</Card>`})},D={args:{background:`default`,fullHeight:!0,interactive:!1,stretched:!0,...b},render:e=>({components:y,setup(){return{args:e}},template:`<div style="height: 320px"><Card v-bind="args">${v}</Card></div>`})},O={args:{background:`default`,stretched:!0,interactive:!1,...b},render:e=>({components:y,setup(){return{args:e}},template:`
      <div style="max-width: 560px">
        <Card v-bind="args">
          <CardHeader border>
            <Text typography="title-2">Terms of Service</Text>
            <Text typography="paragraph-2" color="secondary">
              Review the terms before accepting the agreement.
            </Text>
          </CardHeader>
          <CardContent border>
            <Text typography="paragraph-2">
              These terms govern your use of the workspace, including access to shared documents,
              project files, and collaboration tools.
            </Text>
          </CardContent>
          <CardContent>
            <Text typography="paragraph-2">
              You are responsible for the content you upload and for ensuring that your team has
              the appropriate permissions to view or edit it.
            </Text>
          </CardContent>
          <CardFooter style="justify-content: flex-end">
            <Button mode="default">Decline</Button>
            <Button mode="contrast">Accept</Button>
          </CardFooter>
        </Card>
      </div>
    `})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    background: "default",
    Element: "div",
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
    template: \`<Card v-bind="args" role="button" tabindex="0" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Gap :size="2" />
      <Button type="button">Action</Button>
    </Card>\`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    template: \`
      <div style="max-width: 560px">
        <Card v-bind="args">
          <CardHeader border>
            <Text typography="title-2">Terms of Service</Text>
            <Text typography="paragraph-2" color="secondary">
              Review the terms before accepting the agreement.
            </Text>
          </CardHeader>
          <CardContent border>
            <Text typography="paragraph-2">
              These terms govern your use of the workspace, including access to shared documents,
              project files, and collaboration tools.
            </Text>
          </CardContent>
          <CardContent>
            <Text typography="paragraph-2">
              You are responsible for the content you upload and for ensuring that your team has
              the appropriate permissions to view or edit it.
            </Text>
          </CardContent>
          <CardFooter style="justify-content: flex-end">
            <Button mode="default">Decline</Button>
            <Button mode="contrast">Accept</Button>
          </CardFooter>
        </Card>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}},k=[`DefaultCard`,`SecondaryCard`,`BlurredCard`,`InteractiveCard`,`InteractiveCardWithActions`,`StretchedCard`,`FullHeightCard`,`WithSections`]})))()}A();export{C as BlurredCard,x as DefaultCard,D as FullHeightCard,w as InteractiveCard,T as InteractiveCardWithActions,S as SecondaryCard,E as StretchedCard,O as WithSections,k as __namedExportsOrder,_ as default};