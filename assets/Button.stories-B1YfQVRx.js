import{f as L}from"./index-C_FWhylE.js";import{B as n}from"./Button-BkmWC_fv.js";import{I as s}from"./Icon-c9maYRQP.js";import"./vue.esm-bundler-DUApOrFq.js";import"./Loader-CaIIJJUz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={title:"Example/Button",component:n,tags:["autodocs"],argTypes:{mode:{control:"select",options:["default","accent","ghost"]},stretched:{control:"boolean"},squared:{control:"boolean"},isLoading:{control:"boolean"}},args:{mode:"default",stretched:!1,squared:!1,onClick:L(()=>"clicked")}},e={args:{mode:"default",default:"Button"}},o={args:{mode:"default",default:"Button",squared:!0},render:t=>({components:{Button:n,Icon:s},setup(){return{args:t}},template:'<Button v-bind="args"><Icon name="edit" /></Button>'})},r={args:{mode:"default",default:"Button",isLoading:!0},render:t=>({components:{Button:n,Icon:s},setup(){return{args:t}},template:'<Button v-bind="args">Loading</Button>'})},a={args:{mode:"default",default:"Button",disabled:!0},render:t=>({components:{Button:n,Icon:s},setup(){return{args:t}},template:'<Button v-bind="args">Купить</Button>'})};var u,d,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button'
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,g,B;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button',
    isLoading: true
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
    template: '<Button v-bind="args">Loading</Button>'
  })
}`,...(B=(g=r.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var f,b,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button',
    disabled: true
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
    template: '<Button v-bind="args">Купить</Button>'
  })
}`,...(I=(b=a.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const D=["Primary","IconButton","Loading","Disabled"];export{a as Disabled,o as IconButton,r as Loading,e as Primary,D as __namedExportsOrder,k as default};
