import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,F as r,O as i,P as a,X as o,a as s,b as c,c as l,nt as u,yt as d}from"./iframe-Z95Hq5ox.js";import{n as f,t as p}from"./_plugin-vue_export-helper-BqBa3wPr.js";var m,h;function g(){return(g=e((()=>{s(),m=[`disabled`],h=i({inheritAttrs:!1,__name:`Switch`,props:a({disabled:{type:Boolean,default:!1},size:{default:`medium`}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let i=e,a=o(e,`modelValue`);return(e,o)=>(t(),n(`label`,{class:d([`switch`,i.size,{disabled:i.disabled}])},[u(c(`input`,r(e.$attrs,{"onUpdate:modelValue":o[0]||=e=>a.value=e,class:`switch-input`,type:`checkbox`,role:`switch`,disabled:i.disabled}),null,16,m),[[l,a.value]]),o[1]||=c(`span`,{class:`switch-track`,"aria-hidden":`true`},[c(`span`,{class:`switch-thumb`})],-1)],2))}})})))()}var _;function v(){return(v=e((()=>{g(),f(),_=p(h,[[`__scopeId`,`data-v-ee901b2d`]]),h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:`default`,displayName:`Switch`,description:``,tags:{},props:[{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`size`,required:!1,type:{name:`union`,elements:[{name:`"small"`},{name:`"medium"`}]},defaultValue:{func:!1,value:`"medium"`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Switch/Switch.vue`]})})))()}var y,b,x,S,C;function w(){return(w=e((()=>{v(),y={title:`Components/Switch`,component:_,tags:[`autodocs`],args:{modelValue:!1,disabled:!1,size:`medium`,"aria-label":`Переключить настройку`}},b={render:e=>({components:{Switch:_},setup(){return{args:e}},template:`<Switch v-bind="args" v-model="args.modelValue" />`})},x={args:{modelValue:!0}},S={args:{modelValue:!0,disabled:!0}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Switch
    },
    setup() {
      return {
        args
      };
    },
    template: '<Switch v-bind="args" v-model="args.modelValue" />'
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Checked`,`Disabled`]})))()}w();export{x as Checked,b as Default,S as Disabled,C as __namedExportsOrder,y as default};