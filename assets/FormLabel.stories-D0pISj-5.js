import{k as p,o as i,q as d,z as c,m as u,j as b}from"./vue.esm-bundler-i9X9Ld2b.js";import{T as f}from"./Text-BVo0AXrY.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const n=p({inheritAttrs:!1,__name:"FormLabel",props:{htmlFor:{},invalid:{type:Boolean},disabled:{type:Boolean}},setup(a){const o=a;return(r,g)=>(i(),d(f,u(r.$attrs,{for:o.htmlFor,Element:"label",typography:"label-2",color:"inherit",class:["form-label",{invalid:o.invalid,disabled:o.disabled}]}),{default:c(()=>[b(r.$slots,"default",{},void 0,!0)]),_:3},16,["for","class"]))}}),m=F(n,[["__scopeId","data-v-e961be31"]]);n.__docgenInfo={exportName:"default",displayName:"FormLabel",description:"",tags:{},props:[{name:"htmlFor",required:!1,type:{name:"string"}},{name:"invalid",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/FormLabel/FormLabel.vue"]};const L={title:"Components/FormLabel",component:m,tags:["autodocs"],argTypes:{invalid:{type:"boolean"},disabled:{type:"boolean"}}},e={args:{htmlFor:"form-label-input"},render:a=>({components:{FormLabel:m},setup(){return{args:a}},template:'<FormLabel v-bind="args">Название поля</FormLabel>'})};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    htmlFor: 'form-label-input'
  },
  render: args => ({
    components: {
      FormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: '<FormLabel v-bind="args">Название поля</FormLabel>'
  })
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,L as default};
