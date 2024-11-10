import{T}from"./Text-CzGbCvHO.js";import{B as x}from"./Button-BZT8NRrV.js";import{G as S}from"./Gap-YMwGCiZN.js";import{C as h}from"./Card-1TuR1z24.js";import"./vue.esm-bundler-IF9MMzN9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-NvPINv2Z.js";const M={title:"Components/Card",component:h,tags:["autodocs"],argTypes:{background:{control:{type:"select"},options:["default","secondary"]},stretched:{control:{type:"boolean"}},interactive:{control:{type:"boolean"}},padding:{control:{type:"number"}},borderRadius:{control:{type:"number"}},onClick:{action:"clicked"}}},c=`
  <Text typography="title-2">Notifications</Text>
  <Gap :default="1" direction="vertical" />
  <Text typography="paragraph-2" color="secondary">You have 3 unread messages</Text>
  <Gap :default="3" direction="vertical" />
  <Button mode="accent">Mark as read</Button>
`,o={Card:h,Text:T,Button:x,Gap:S},s={padding:24,borderRadius:20},r={args:{background:"default",stretched:!1,interactive:!1,...s},render:e=>({components:o,setup(){return{args:e}},template:`
    <Card v-bind="args">
      ${c}
    </Card>`})},t={args:{background:"secondary",stretched:!1,interactive:!1,...s},render:e=>({components:o,setup(){return{args:e}},template:`<Card v-bind="args">${c}</Card>`})},a={args:{background:"default",stretched:!1,interactive:!0,...s},render:e=>({components:o,setup(){return{args:e,onClick:k=>{console.log("Card clicked",k)}}},template:`<Card v-bind="args" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Text typography="paragraph-2" color="secondary">The whole card is clickable</Text>
    </Card>`})},n={args:{background:"default",stretched:!0,interactive:!1,...s},render:e=>({components:o,setup(){return{args:e}},template:`<Card v-bind="args">${c}</Card>`})};var d,p,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <Text typography="title-2">Interactive Card</Text>
      <Text typography="paragraph-2" color="secondary">The whole card is clickable</Text>
    </Card>\`
  })
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var v,y,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const R=["DefaultCard","SecondaryCard","InteractiveCard","StretchedCard"];export{r as DefaultCard,a as InteractiveCard,t as SecondaryCard,n as StretchedCard,R as __namedExportsOrder,M as default};