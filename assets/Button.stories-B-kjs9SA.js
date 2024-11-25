import{f as L}from"./index-C_FWhylE.js";import{B as n}from"./Button-BMjCsIuz.js";import"./vue.esm-bundler-Co5nn-M2.js";import{d as v}from"./IconPencilOutline-BNEuXBuk.js";import"./Loader-BhqgNo_5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconAccessibleFilled-BhQoVzGe.js";const k={title:"Components/Button",component:n,tags:["autodocs"],argTypes:{mode:{control:"select",options:["default","accent","ghost","outline"]},stretched:{control:"boolean"},squared:{control:"boolean"},isLoading:{control:"boolean"}},args:{mode:"default",stretched:!1,squared:!1,onClick:L(()=>"clicked")}},e={args:{mode:"default",default:"Button"}},o={args:{mode:"default",default:"Button",squared:!0},render:t=>({components:{Button:n,IconPencilOutline:v},setup(){return{args:t}},template:'<Button v-bind="args"><IconPencilOutline /></Button>'})},r={args:{mode:"default",default:"Button",isLoading:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Loading</Button>'})},a={args:{mode:"default",default:"Button",disabled:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Купить</Button>'})};var s,u,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button'
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,l,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button',
    squared: true
  },
  render: args => ({
    components: {
      Button,
      IconPencilOutline
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args"><IconPencilOutline /></Button>'
  })
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var i,p,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button',
    isLoading: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Loading</Button>'
  })
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var B,f,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    mode: 'default',
    default: 'Button',
    disabled: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Купить</Button>'
  })
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const x=["Primary","IconButton","Loading","Disabled"];export{a as Disabled,o as IconButton,r as Loading,e as Primary,x as __namedExportsOrder,k as default};
