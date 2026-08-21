import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,F as n,O as r,P as i,Y as a,a as o,b as s,c,et as l,gt as u,z as d}from"./iframe-DSPFKwNv.js";import{n as f,t as p}from"./_plugin-vue_export-helper-BqBa3wPr.js";var m,h;function g(){return(g=e((()=>{o(),m=[`disabled`],h=r({inheritAttrs:!1,__name:`Switch`,props:i({disabled:{type:Boolean,default:!1},size:{default:`medium`}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let r=e,i=a(e,`modelValue`);return(e,a)=>(d(),t(`label`,{class:u([`switch`,r.size,{disabled:r.disabled}])},[l(s(`input`,n(e.$attrs,{"onUpdate:modelValue":a[0]||=e=>i.value=e,class:`switch-input`,type:`checkbox`,role:`switch`,disabled:r.disabled}),null,16,m),[[c,i.value]]),a[1]||=s(`span`,{class:`switch-track`,"aria-hidden":`true`},[s(`span`,{class:`switch-thumb`})],-1)],2))}})})))()}var _;function v(){return(v=e((()=>{g(),f(),_=p(h,[[`__scopeId`,`data-v-ee901b2d`]]),h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:`default`,displayName:`Switch`,description:``,tags:{},props:[{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`size`,required:!1,type:{name:`union`,elements:[{name:`"small"`},{name:`"medium"`}]},defaultValue:{func:!1,value:`"medium"`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Switch/Switch.vue`]})})))()}var y,b,x,S,C;function w(){return(w=e((()=>{v(),y={title:`Components/Switch`,component:_,tags:[`autodocs`],args:{modelValue:!1,disabled:!1,size:`medium`,"aria-label":`Переключить настройку`}},b={render:e=>({components:{Switch:_},setup(){return{args:e}},template:`<Switch v-bind="args" v-model="args.modelValue" />`})},x={args:{modelValue:!0}},S={args:{modelValue:!0,disabled:!0}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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