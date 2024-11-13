import{R as t}from"./Row-D3wIoE6D.js";import{C as m}from"./Card-Bf2gJGck.js";import"./vue.esm-bundler-C03mjNA1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Components/Row",component:t,tags:["autodocs"],argTypes:{fullHeight:{control:"boolean"},alignItems:{control:"select",options:["start","center","end"]}}},c=`
      <Row v-bind="args">
        <Card>1<br/>1</Card>
        <Card>2<br/><br/>2</Card>
        <Card>3<br/><br/><br/>3</Card>
      </Row>
    `,e={args:{fullHeight:!1},render:n=>({components:{Row:t,Card:m},setup(){return{args:n}},template:c})},r={args:{fullHeight:!0},render:n=>({components:{Row:t,Card:m},setup(){return{args:n}},template:`
      <div style="height: 300px;">
        ${c}
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
