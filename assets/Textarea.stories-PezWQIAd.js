import{k as h,K as v,r as g,L as x,D as y,b as z,w as _,M as T,N as b,o as V,c as M,m as k}from"./vue.esm-bundler-Co5nn-M2.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const D=["placeholder"],d=h({__name:"Textarea",props:v({resize:{default:"none"},layout:{default:"fixed"},placeholder:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=t,a=g(null),r=x(t,"modelValue"),p=y(()=>({resize:e.resize})),o=()=>{e.layout==="hug"&&a.value&&(a.value.style.height="auto",a.value.style.height=`${a.value.scrollHeight+2}px`)};return z(()=>{o()}),_(()=>e.layout,o),(m,s)=>T((V(),M("textarea",k({ref_key:"textareaRef",ref:a},m.$attrs,{"onUpdate:modelValue":s[0]||(s[0]=f=>r.value=f),placeholder:e.placeholder,style:p.value,class:["textarea",e.layout],onInput:o}),null,16,D)),[[b,r.value]])}}),c=w(d,[["__scopeId","data-v-44c88b7a"]]);d.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"resize",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"both"'},{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'none'"}},{name:"layout",required:!1,type:{name:"union",elements:[{name:'"fixed"'},{name:'"fill-vertical"'},{name:'"fill-horizontal"'},{name:'"fill-both"'},{name:'"hug"'}]},defaultValue:{func:!1,value:"'fixed'"}},{name:"placeholder",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Textarea/Textarea.vue"]};const I={title:"Components/Textarea",component:c,tags:["autodocs"],argTypes:{layout:{control:{type:"select"},options:["fixed","fill-vertical","fill-horizontal","fill-both","hug"]},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"]},placeholder:{control:{type:"text"}}},args:{placeholder:"Placeholder"}},l={args:{placeholder:"Placeholder",value:"Value",resize:"horizontal"},render:t=>({components:{Textarea:c},setup(){return{args:t}},template:'<div style="height: 300px;"><Textarea v-bind="args" v-model="args.value" /></div>'})};var n,u,i;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    template: \`<div style="height: 300px;"><Textarea v-bind="args" v-model="args.value" /></div>\`
  })
}`,...(i=(u=l.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const N=["Default"];export{l as Default,N as __namedExportsOrder,I as default};
