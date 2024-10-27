import{B as d}from"./Button-jsxqPpL6.js";import{I as m}from"./Icon-CRnV5g3n.js";import"./vue.esm-bundler-JOEmeMwU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Example/Button",component:d,tags:["autodocs"],argTypes:{mode:{control:"select",options:["default","accent","ghost"]},stretched:{control:"boolean"},squared:{control:"boolean"}},args:{mode:"default",stretched:!1,squared:!1}},t={args:{mode:"default",default:"Button"}},e={args:{mode:"default",default:"Button",squared:!0},render:c=>({components:{Button:d,Icon:m},setup(){return{args:c}},template:'<Button v-bind="args"><Icon name="edit" /></Button>'})};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button'
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var s,n,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button',
    squared: true
  },
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args"><Icon name="edit" /></Button>'
  })
}`,...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const B=["Primary","IconButton"];export{e as IconButton,t as Primary,B as __namedExportsOrder,g as default};
