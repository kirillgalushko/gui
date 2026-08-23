import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,B as n,C as r,D as i,F as a,I as o,J as s,O as c,P as l,R as u,X as d,Y as f,a as p,b as m,dt as h,h as g,nt as _,u as v,y}from"./iframe-Z95Hq5ox.js";import{n as b,t as x}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as S,t as C}from"./FieldHelper-XtC0xNGy.js";var w,T;function E(){return(E=e((()=>{p(),S(),w=[`placeholder`,`aria-invalid`,`aria-describedby`],T=c({inheritAttrs:!1,__name:`Textarea`,props:l({resize:{default:`none`},layout:{default:`fixed`},placeholder:{},invalid:{type:Boolean},errorMessage:{},descriptionId:{},minHeight:{},maxHeight:{}},{modelValue:{},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let c=e,l=h(null),p=d(e,`modelValue`),b=s(),x=f(),S=y(()=>({resize:c.resize,minHeight:c.minHeight,maxHeight:c.maxHeight})),T=y(()=>c.invalid&&!!c.errorMessage),E=y(()=>{if(T.value)return c.descriptionId??`${x}-helper`}),D=y(()=>{let e=b[`aria-describedby`],t=typeof e==`string`?e:void 0;return E.value?[t,E.value].filter(Boolean).join(` `):t}),O=()=>{let e=l.value;if(e){if(c.layout!==`hug`){e.style.removeProperty(`height`),e.style.removeProperty(`overflow-y`);return}e.style.height=`auto`,e.style.overflowY=`hidden`,e.style.height=`${e.scrollHeight+2}px`,e.style.overflowY=e.scrollHeight>e.clientHeight?`auto`:`hidden`}};return u(async()=>{await o(),O()}),t([p,()=>c.layout,()=>c.minHeight,()=>c.maxHeight],async()=>{await o(),O()},{flush:`post`}),(e,t)=>(n(),r(g,null,[_(m(`textarea`,a({ref_key:`textareaRef`,ref:l},e.$attrs,{"onUpdate:modelValue":t[0]||=e=>p.value=e,placeholder:c.placeholder,style:S.value,class:[`textarea`,c.layout,{invalid:c.invalid}],"aria-invalid":c.invalid||void 0,"aria-describedby":D.value,onInput:O}),null,16,w),[[v,p.value]]),i(C,{"error-message":c.errorMessage,invalid:c.invalid,"description-id":E.value},null,8,[`error-message`,`invalid`,`description-id`])],64))}})})))()}var D;function O(){return(O=e((()=>{E(),b(),D=x(T,[[`__scopeId`,`data-v-e4409639`]]),T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`Textarea`,description:``,tags:{},props:[{name:`resize`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"both"`},{name:`"horizontal"`},{name:`"vertical"`}]},defaultValue:{func:!1,value:`"none"`}},{name:`layout`,required:!1,type:{name:`union`,elements:[{name:`"fixed"`},{name:`"fill-vertical"`},{name:`"fill-horizontal"`},{name:`"fill-both"`},{name:`"hug"`}]},defaultValue:{func:!1,value:`"fixed"`}},{name:`placeholder`,required:!1,type:{name:`string`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`descriptionId`,required:!1,type:{name:`string`}},{name:`minHeight`,required:!1,type:{name:`string`}},{name:`maxHeight`,required:!1,type:{name:`string`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Textarea/Textarea.vue`]})})))()}var k,A,j,M;function N(){return(N=e((()=>{O(),k={title:`Components/Textarea`,component:D,tags:[`autodocs`],argTypes:{layout:{control:{type:`select`},options:[`fixed`,`fill-vertical`,`fill-horizontal`,`fill-both`,`hug`]},resize:{control:{type:`select`},options:[`none`,`both`,`horizontal`,`vertical`]},placeholder:{control:{type:`text`}},minHeight:{control:{type:`text`}},maxHeight:{control:{type:`text`}},errorMessage:{control:{type:`text`}}},args:{placeholder:`Placeholder`}},A={args:{placeholder:`Placeholder`,value:`Value`,resize:`horizontal`},render:e=>({components:{Textarea:D},setup(){return{args:e}},template:`<div style="height: 300px;"><Textarea v-bind="args" v-model="args.value" /></div>`})},j={args:{layout:`hug`,minHeight:`40px`,maxHeight:`160px`,invalid:!0,errorMessage:`Проверьте введённый текст`}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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