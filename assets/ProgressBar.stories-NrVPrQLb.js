import{P as o}from"./ProgressBar-C_xyBmjS.js";import"./vue.esm-bundler-i9X9Ld2b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={title:"Components/ProgressBar",component:o,tags:["autodocs"],argTypes:{progress:{control:"range",min:0,max:100,step:1}}},r={args:{progress:64},render:s=>({components:{ProgressBar:o},setup(){return{args:s}},template:'<ProgressBar v-bind="args" />'})},e={args:{progress:75,segments:4,color:"positive"},render:s=>({components:{ProgressBar:o},setup(){return{args:s}},template:'<ProgressBar v-bind="args" />'})};var t,a,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    progress: 64
  },
  render: args => ({
    components: {
      ProgressBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<ProgressBar v-bind="args" />'
  })
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var p,g,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    progress: 75,
    segments: 4,
    color: 'positive'
  },
  render: args => ({
    components: {
      ProgressBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<ProgressBar v-bind="args" />'
  })
}`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const l=["Default","Segmented"];export{r as Default,e as Segmented,l as __namedExportsOrder,i as default};
