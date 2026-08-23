import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,B as n,C as r,D as i,F as a,G as o,J as s,O as c,P as l,R as u,S as d,X as f,Y as p,a as m,b as h,c as g,dt as _,nt as v,xt as y,y as b,yt as x}from"./iframe-Z95Hq5ox.js";import{n as S,t as C}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as w,t as T}from"./FieldHelper-XtC0xNGy.js";var E,D,O,k;function A(){return(A=e((()=>{m(),w(),E={class:`checkbox-box`},D=[`disabled`,`aria-invalid`,`aria-describedby`,`aria-checked`],O={key:0,class:`checkbox-label`},k=c({inheritAttrs:!1,__name:`Checkbox`,props:l({disabled:{type:Boolean},description:{},errorMessage:{},invalid:{type:Boolean},indeterminate:{type:Boolean},descriptionId:{},maxWidth:{default:`100%`}},{modelValue:{type:[Boolean,Array]},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let c=e,l=f(e,`modelValue`),m=s(),S=p(),C=_(),w=b(()=>c.invalid?!!c.errorMessage:!!c.description),k=b(()=>{if(w.value)return c.descriptionId??`${S}-helper`}),A=b(()=>{let e=m[`aria-describedby`],t=typeof e==`string`?e:void 0;return k.value?[t,k.value].filter(Boolean).join(` `):t}),j=()=>{C.value&&(C.value.indeterminate=!!c.indeterminate)};return u(j),t(()=>c.indeterminate,j),(e,t)=>(n(),r(`div`,{style:y({maxWidth:c.maxWidth}),class:`checkbox-field`},[h(`label`,{class:x([`checkbox`,{disabled:c.disabled,invalid:c.invalid}])},[h(`span`,E,[v(h(`input`,a(e.$attrs,{ref_key:`inputRef`,ref:C,"onUpdate:modelValue":t[0]||=e=>l.value=e,class:`checkbox-input`,type:`checkbox`,disabled:c.disabled,"aria-invalid":c.invalid||void 0,"aria-describedby":A.value,"aria-checked":c.indeterminate?`mixed`:void 0}),null,16,D),[[g,l.value]]),t[1]||=h(`span`,{class:`checkbox-control`,"aria-hidden":`true`},[h(`svg`,{class:`checkbox-check`,viewBox:`0 0 14 14`,fill:`none`},[h(`path`,{d:`M3 7.2L5.7 9.8L11 4.2`})]),h(`span`,{class:`checkbox-minus`})],-1)]),e.$slots.default?(n(),r(`span`,O,[o(e.$slots,`default`,{},void 0,!0)])):d(``,!0)],2),i(T,{description:c.description,"error-message":c.errorMessage,invalid:c.invalid,disabled:c.disabled,"description-id":k.value},null,8,[`description`,`error-message`,`invalid`,`disabled`,`description-id`])],4))}})})))()}var j;function M(){return(M=e((()=>{A(),S(),j=C(k,[[`__scopeId`,`data-v-231b2b75`]]),k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:`default`,displayName:`Checkbox`,description:``,tags:{},props:[{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`description`,required:!1,type:{name:`string`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`indeterminate`,required:!1,type:{name:`boolean`}},{name:`descriptionId`,required:!1,type:{name:`string`}},{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100%"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Checkbox/Checkbox.vue`]})})))()}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{M(),N={title:`Components/Checkbox`,component:j,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`},invalid:{type:`boolean`},indeterminate:{type:`boolean`}}},P={args:{modelValue:!1},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Accept terms and conditions</Checkbox>`})},F={args:{modelValue:!0},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Remember this choice</Checkbox>`})},I={args:{modelValue:!0,description:`You can change this setting later.`},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Enable notifications</Checkbox>`})},L={args:{modelValue:!1,indeterminate:!0},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Some items selected</Checkbox>`})},R={args:{modelValue:!1,invalid:!0,errorMessage:`Required field`},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">I agree with the policy</Checkbox>`})},z={args:{modelValue:!0,disabled:!0},render:e=>({components:{Checkbox:j},setup(){return{args:e}},template:`<Checkbox v-bind="args" v-model="args.modelValue">Unavailable option</Checkbox>`})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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