import{R as n}from"./Row-CVlPa_7V.js";import{C as c}from"./Card-B4iPONGs.js";import"./vue.esm-bundler-JOEmeMwU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Example/Row",component:n,tags:["autodocs"],argTypes:{fullHeight:{control:"boolean",description:"Устанавливает высоту строки на 100%"},alignItems:{control:"select",description:"Устанавливает высоту строки на 100%",options:["start","center","end"]}}},i=`
      <Row v-bind="args">
        <Card>1<br/>1</Card>
        <Card>2<br/><br/>2</Card>
        <Card>3<br/><br/><br/>3</Card>
      </Row>
    `,e={args:{fullHeight:!1},render:t=>({components:{Row:n,Card:c},setup(){return{args:t}},template:i})},r={args:{fullHeight:!0},render:t=>({components:{Row:n,Card:c},setup(){return{args:t}},template:`
      <div style="height: 300px;">
        ${i}
      </div>
    `})};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const C=["Default","FullHeight"];export{e as Default,r as FullHeight,C as __namedExportsOrder,h as default};
