import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Card-QLGUd3tV.js";import{n as r,t as i}from"./Row-DR7-6bVC.js";var a,o,s,c,l;function u(){return(u=e((()=>{r(),t(),a={title:`Components/Row`,component:i,tags:[`autodocs`],argTypes:{fullHeight:{control:`boolean`},alignItems:{control:`select`,options:[`start`,`center`,`end`]}}},o=`
      <Row v-bind="args">
        <Card>1<br/>1</Card>
        <Card>2<br/><br/>2</Card>
        <Card>3<br/><br/><br/>3</Card>
      </Row>
    `,s={args:{fullHeight:!1},render:e=>({components:{Row:i,Card:n},setup(){return{args:e}},template:o})},c={args:{fullHeight:!0},render:e=>({components:{Row:i,Card:n},setup(){return{args:e}},template:`
      <div style="height: 300px;">
        ${o}
      </div>
    `})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fullHeight: false
  },
  render: args => ({
    components: {
      Row,
      Card
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fullHeight: true
  },
  render: args => ({
    components: {
      Row,
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 300px;">
        \${template}
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}},l=[`Default`,`FullHeight`]})))()}u();export{s as Default,c as FullHeight,l as __namedExportsOrder,a as default};