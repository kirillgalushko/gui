import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,D as n,F as r,J as i,O as a,P as o,R as s,S as c,W as l,Y as u,Z as d,a as f,b as p,c as m,ct as h,et as g,gt as _,q as v,vt as y,y as b,z as x}from"./iframe-Du9fEe2r.js";import{n as S,t as C}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as w,t as T}from"./FieldHelper-C8yFjzAj.js";var E,D,O,k;function A(){return(A=e((()=>{f(),w(),E={class:`checkbox-box`},D=[`disabled`,`aria-invalid`,`aria-describedby`,`aria-checked`],O={key:0,class:`checkbox-label`},k=a({inheritAttrs:!1,__name:`Checkbox`,props:o({disabled:{type:Boolean},description:{},errorMessage:{},invalid:{type:Boolean},indeterminate:{type:Boolean},descriptionId:{},maxWidth:{default:`100%`}},{modelValue:{type:[Boolean,Array]},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let a=e,o=u(e,`modelValue`),f=v(),S=i(),C=h(),w=b(()=>a.invalid?!!a.errorMessage:!!a.description),k=b(()=>{if(w.value)return a.descriptionId??`${S}-helper`}),A=b(()=>{let e=f[`aria-describedby`],t=typeof e==`string`?e:void 0;return k.value?[t,k.value].filter(Boolean).join(` `):t}),j=()=>{C.value&&(C.value.indeterminate=!!a.indeterminate)};return s(j),d(()=>a.indeterminate,j),(e,i)=>(x(),t(`div`,{style:y({maxWidth:a.maxWidth}),class:`checkbox-field`},[p(`label`,{class:_([`checkbox`,{disabled:a.disabled,invalid:a.invalid}])},[p(`span`,E,[g(p(`input`,r(e.$attrs,{ref_key:`inputRef`,ref:C,"onUpdate:modelValue":i[0]||=e=>o.value=e,class:`checkbox-input`,type:`checkbox`,disabled:a.disabled,"aria-invalid":a.invalid||void 0,"aria-describedby":A.value,"aria-checked":a.indeterminate?`mixed`:void 0}),null,16,D),[[m,o.value]]),i[1]||=p(`span`,{class:`checkbox-control`,"aria-hidden":`true`},[p(`svg`,{class:`checkbox-check`,viewBox:`0 0 14 14`,fill:`none`},[p(`path`,{d:`M3 7.2L5.7 9.8L11 4.2`})]),p(`span`,{class:`checkbox-minus`})],-1)]),e.$slots.default?(x(),t(`span`,O,[l(e.$slots,`default`,{},void 0,!0)])):c(``,!0)],2),n(T,{description:a.description,"error-message":a.errorMessage,invalid:a.invalid,disabled:a.disabled,"description-id":k.value},null,8,[`description`,`error-message`,`invalid`,`disabled`,`description-id`])],4))}})})))()}var j;function M(){return(M=e((()=>{A(),S(),j=C(k,[[`__scopeId`,`data-v-231b2b75`]]),k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:`default`,displayName:`Checkbox`,description:``,tags:{},props:[{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`description`,required:!1,type:{name:`string`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`indeterminate`,required:!1,type:{name:`boolean`}},{name:`descriptionId`,required:!1,type:{name:`string`}},{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100%"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Checkbox/Checkbox.vue`]})})))()}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{M(),N={title:`Components/Checkbox`,component:j,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`},invalid:{type:`boolean`},indeterminate:{type:`boolean`}}},P={args:{modelValue:!1},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Accept terms and conditions</Checkbox>`})},F={args:{modelValue:!0},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Remember this choice</Checkbox>`})},I={args:{modelValue:!0,description:`You can change this setting later.`},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Enable notifications</Checkbox>`})},L={args:{modelValue:!1,indeterminate:!0},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Some items selected</Checkbox>`})},R={args:{modelValue:!1,invalid:!0,errorMessage:`Required field`},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">I agree with the policy</Checkbox>`})},z={args:{modelValue:!0,disabled:!0},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Unavailable option</Checkbox>`})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Accept terms and conditions</Checkbox>'
  })
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Remember this choice</Checkbox>'
  })
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    description: "You can change this setting later."
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Enable notifications</Checkbox>'
  })
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    indeterminate: true
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Some items selected</Checkbox>'
  })
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    invalid: true,
    errorMessage: "Required field"
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">I agree with the policy</Checkbox>'
  })
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    disabled: true
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Unavailable option</Checkbox>'
  })
}`,...z.parameters?.docs?.source}}},B=[`Default`,`Checked`,`WithDescription`,`Indeterminate`,`Invalid`,`Disabled`]})))()}V();export{F as Checked,P as Default,z as Disabled,L as Indeterminate,R as Invalid,I as WithDescription,B as __namedExportsOrder,N as default};