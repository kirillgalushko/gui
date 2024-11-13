import{k as d,r as m,D as f,b as h,w as v,o as x,c as g,m as y}from"./vue.esm-bundler-C03mjNA1.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const z=["value","placeholder"],u=d({__name:"Textarea",props:{resize:{default:"none"},layout:{default:"fixed"},placeholder:{},value:{}},setup(l){const e=l,a=m(null),c=f(()=>({resize:e.resize})),r=()=>{e.layout==="hug"&&a.value&&(a.value.style.height="auto",a.value.style.height=`${a.value.scrollHeight+2}px`)};return h(()=>{r()}),v(()=>e.layout,r),(p,T)=>(x(),g("textarea",y({ref_key:"textareaRef",ref:a},p.$attrs,{value:e.value,placeholder:e.placeholder,style:c.value,class:["textarea",e.layout],onInput:r}),null,16,z))}}),i=_(u,[["__scopeId","data-v-19bc085d"]]);u.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"resize",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"both"'},{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'none'"}},{name:"layout",required:!1,type:{name:"union",elements:[{name:'"fixed"'},{name:'"fill-vertical"'},{name:'"fill-horizontal"'},{name:'"fill-both"'},{name:'"hug"'}]},defaultValue:{func:!1,value:"'fixed'"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Textarea/Textarea.vue"]};const q={title:"Components/Textarea",component:i,tags:["autodocs"],argTypes:{layout:{control:{type:"select"},options:["fixed","fill-vertical","fill-horizontal","fill-both","hug"]},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"]},placeholder:{control:{type:"text"}},value:{control:{type:"text"}}},args:{placeholder:"Placeholder",value:""}},t={args:{placeholder:"Placeholder",value:"Value",resize:"horizontal"},render:l=>({components:{Textarea:i},setup(){return{args:l}},template:'<div style="height: 300px;"><Textarea v-bind="args" /></div>'})};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    resize: 'horizontal'
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 300px;"><Textarea v-bind="args" /></div>\`
  })
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,q as default};
