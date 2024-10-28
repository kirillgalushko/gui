import{T as n}from"./Text-ZsfjhPBs.js";import"./vue.esm-bundler-wkyDyPDa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Example/Text",component:n,tags:["autodocs"]},t={args:{typography:"paragraph-1-regular",mode:"default",clamp:2,ellipsis:!0},render:e=>({components:{Text:n},setup(){return{args:e}},template:'<Text v-bind="args">This is a sample text that demonstrates the typography component in different modes.</Text>'})},a={args:{typography:"title-2-semibold",mode:"secondary",clamp:3,ellipsis:!1},render:e=>({components:{Text:n},setup(){return{args:e}},template:'<Text v-bind="args">This is a secondary styled title text.</Text>'})},r={args:{typography:"paragraph-2-regular",mode:"default",clamp:4,ellipsis:!0},render:e=>({components:{Text:n},setup(){return{args:e}},template:'<Text v-bind="args">This is a longer paragraph that should be clamped after a certain number of lines, demonstrating the clamping functionality of the text component.</Text>'})};var s,o,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    typography: 'paragraph-1-regular',
    mode: 'default',
    clamp: 2,
    ellipsis: true
  },
  render: args => ({
    components: {
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Text v-bind="args">This is a sample text that demonstrates the typography component in different modes.</Text>\`
  })
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    typography: 'title-2-semibold',
    mode: 'secondary',
    clamp: 3,
    ellipsis: false
  },
  render: args => ({
    components: {
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Text v-bind="args">This is a secondary styled title text.</Text>\`
  })
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    typography: 'paragraph-2-regular',
    mode: 'default',
    clamp: 4,
    ellipsis: true
  },
  render: args => ({
    components: {
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Text v-bind="args">This is a longer paragraph that should be clamped after a certain number of lines, demonstrating the clamping functionality of the text component.</Text>\`
  })
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const T=["Default","Secondary","WithClamping"];export{t as Default,a as Secondary,r as WithClamping,T as __namedExportsOrder,y as default};
