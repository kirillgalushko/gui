import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,D as n,F as r,I as i,J as a,O as o,P as s,R as c,Y as l,Z as u,a as d,b as f,ct as p,et as m,h,q as g,u as _,y as v,z as y}from"./iframe-Du9fEe2r.js";import{n as b,t as x}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as S,t as C}from"./FieldHelper-C8yFjzAj.js";var w,T;function E(){return(E=e((()=>{d(),S(),w=[`placeholder`,`aria-invalid`,`aria-describedby`],T=o({inheritAttrs:!1,__name:`Textarea`,props:s({resize:{default:`none`},layout:{default:`fixed`},placeholder:{},invalid:{type:Boolean},errorMessage:{},descriptionId:{},minHeight:{},maxHeight:{}},{modelValue:{},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let o=e,s=p(null),d=l(e,`modelValue`),b=g(),x=a(),S=v(()=>({resize:o.resize,minHeight:o.minHeight,maxHeight:o.maxHeight})),T=v(()=>o.invalid&&!!o.errorMessage),E=v(()=>{if(T.value)return o.descriptionId??`${x}-helper`}),D=v(()=>{let e=b[`aria-describedby`],t=typeof e==`string`?e:void 0;return E.value?[t,E.value].filter(Boolean).join(` `):t}),O=()=>{let e=s.value;if(e){if(o.layout!==`hug`){e.style.removeProperty(`height`),e.style.removeProperty(`overflow-y`);return}e.style.height=`auto`,e.style.overflowY=`hidden`,e.style.height=`${e.scrollHeight+2}px`,e.style.overflowY=e.scrollHeight>e.clientHeight?`auto`:`hidden`}};return c(async()=>{await i(),O()}),u([d,()=>o.layout,()=>o.minHeight,()=>o.maxHeight],async()=>{await i(),O()},{flush:`post`}),(e,i)=>(y(),t(h,null,[m(f(`textarea`,r({ref_key:`textareaRef`,ref:s},e.$attrs,{"onUpdate:modelValue":i[0]||=e=>d.value=e,placeholder:o.placeholder,style:S.value,class:[`textarea`,o.layout,{invalid:o.invalid}],"aria-invalid":o.invalid||void 0,"aria-describedby":D.value,onInput:O}),null,16,w),[[_,d.value]]),n(C,{"error-message":o.errorMessage,invalid:o.invalid,"description-id":E.value},null,8,[`error-message`,`invalid`,`description-id`])],64))}})})))()}var D;function O(){return(O=e((()=>{E(),b(),D=x(T,[[`__scopeId`,`data-v-e4409639`]]),T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`Textarea`,description:``,tags:{},props:[{name:`resize`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"both"`},{name:`"horizontal"`},{name:`"vertical"`}]},defaultValue:{func:!1,value:`"none"`}},{name:`layout`,required:!1,type:{name:`union`,elements:[{name:`"fixed"`},{name:`"fill-vertical"`},{name:`"fill-horizontal"`},{name:`"fill-both"`},{name:`"hug"`}]},defaultValue:{func:!1,value:`"fixed"`}},{name:`placeholder`,required:!1,type:{name:`string`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`descriptionId`,required:!1,type:{name:`string`}},{name:`minHeight`,required:!1,type:{name:`string`}},{name:`maxHeight`,required:!1,type:{name:`string`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Textarea/Textarea.vue`]})})))()}var k,A,j,M;function N(){return(N=e((()=>{O(),k={title:`Components/Textarea`,component:D,tags:[`autodocs`],argTypes:{layout:{control:{type:`select`},options:[`fixed`,`fill-vertical`,`fill-horizontal`,`fill-both`,`hug`]},resize:{control:{type:`select`},options:[`none`,`both`,`horizontal`,`vertical`]},placeholder:{control:{type:`text`}},minHeight:{control:{type:`text`}},maxHeight:{control:{type:`text`}},errorMessage:{control:{type:`text`}}},args:{placeholder:`Placeholder`}},A={args:{placeholder:`Placeholder`,value:`Value`,resize:`horizontal`},render:e=>({components:{Textarea:D},setup(){return{args:e}},template:`<div style="height: 300px;"><Textarea v-bind="args" v-model="args.value" /></div>`})},j={args:{layout:`hug`,minHeight:`40px`,maxHeight:`160px`,invalid:!0,errorMessage:`Проверьте введённый текст`}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    value: "Value",
    resize: "horizontal"
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "hug",
    minHeight: "40px",
    maxHeight: "160px",
    invalid: true,
    errorMessage: "Проверьте введённый текст"
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`AutoResizeWithError`]})))()}N();export{j as AutoResizeWithError,A as Default,M as __namedExportsOrder,k as default};