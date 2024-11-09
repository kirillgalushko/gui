import{T}from"./Text-C-O4kWUD.js";import{B as x}from"./Button-BESZNK66.js";import{G as S}from"./Gap-DXZ4NxGA.js";import{C as h}from"./Card-Bw5oUwED.js";import"./vue.esm-bundler-CRuxRSxJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-n57a3yiR.js";const M={title:"Example/Card",component:h,tags:["autodocs"],argTypes:{background:{control:{type:"select"},options:["default","secondary"]},stretched:{control:{type:"boolean"}},interactive:{control:{type:"boolean"}},padding:{control:{type:"number"}},borderRadius:{control:{type:"number"}},onClick:{action:"clicked"}}},d=`
  <Text typography="title-2-semibold">Notifications</Text>
  <Gap :default="1" direction="vertical" />
  <Text typography="paragraph-2-regular" mode="secondary">You have 3 unread messages</Text>
  <Gap :default="3" direction="vertical" />
  <Button mode="accent">Mark as read</Button>
`,o={Card:h,Text:T,Button:x,Gap:S},s={padding:24,borderRadius:20},r={args:{background:"default",stretched:!1,interactive:!1,...s},render:e=>({components:o,setup(){return{args:e}},template:`
    <Card v-bind="args">
      ${d}
    </Card>`})},t={args:{background:"secondary",stretched:!1,interactive:!1,...s},render:e=>({components:o,setup(){return{args:e}},template:`<Card v-bind="args">${d}</Card>`})},a={args:{background:"default",stretched:!1,interactive:!0,...s},render:e=>({components:o,setup(){return{args:e,onClick:k=>{console.log("Card clicked",k)}}},template:`<Card v-bind="args" @click="onClick">
      <Text typography="title-2-semibold">Interactive Card</Text>
      <Text typography="paragraph-2-regular" mode="secondary">The whole card is clickable</Text>
    </Card>`})},n={args:{background:"default",stretched:!0,interactive:!1,...s},render:e=>({components:o,setup(){return{args:e}},template:`<Card v-bind="args">${d}</Card>`})};var c,p,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    background: 'default',
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
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    background: 'secondary',
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,C,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    background: 'default',
    stretched: false,
    interactive: true,
    ...demoArgs
  },
  render: args => ({
    components: demoComponents,
    setup() {
      const onClick = (event: MouseEvent) => {
        console.log('Card clicked', event);
      };
      return {
        args,
        onClick
      };
    },
    template: \`<Card v-bind="args" @click="onClick">
      <Text typography="title-2-semibold">Interactive Card</Text>
      <Text typography="paragraph-2-regular" mode="secondary">The whole card is clickable</Text>
    </Card>\`
  })
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var b,v,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    background: 'default',
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
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const R=["DefaultCard","SecondaryCard","InteractiveCard","StretchedCard"];export{r as DefaultCard,a as InteractiveCard,t as SecondaryCard,n as StretchedCard,R as __namedExportsOrder,M as default};
