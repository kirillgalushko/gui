import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,B as n,C as r,D as i,F as ee,I as a,J as o,O as s,R as c,St as te,W as l,Y as u,a as d,b as f,dt as p,h as m,p as h,xt as g,y as _,yt as v}from"./iframe-Z95Hq5ox.js";import{n as y,t as b}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as x,t as S}from"./FieldHelper-XtC0xNGy.js";var C,w,T,E;function D(){return(D=e((()=>{d(),x(),C=[`value`,`disabled`,`readonly`,`maxlength`,`aria-invalid`,`aria-describedby`],w={class:`pincode-grid`,"aria-hidden":`true`},T=[`onMousedown`],E=s({inheritAttrs:!1,__name:`PincodeInput`,props:{modelValue:{},autoFocus:{type:Boolean},stretched:{type:Boolean,default:!1},disabled:{type:Boolean},loading:{type:Boolean},length:{default:6},succeed:{type:Boolean},invalid:{type:Boolean},description:{},errorMessage:{},descriptionId:{}},emits:[`update:modelValue`,`complete`],setup(e,{emit:s}){let d=e,y=s,b=o(),x=u(),E=p(null),D=p(0),O=_(()=>Math.max(1,Math.floor(Number(d.length)||1))),k=e=>String(e??``).replace(/\D/g,``).slice(0,O.value),A=(e,t)=>t===null?k(e).length:k(e.slice(0,t)).length,j=e=>e===``||e===!0||e===`true`,M=_(()=>k(d.modelValue)),N=_(()=>d.disabled||d.loading),P=_(()=>d.succeed||j(b.readonly)),F=_(()=>Array.from({length:O.value},(e,t)=>M.value[t]??``)),I=_(()=>Math.min(D.value,O.value-1)),L=_(()=>D.value<O.value),R=_(()=>d.invalid?!!d.errorMessage:!!d.description),z=_(()=>{if(R.value)return d.descriptionId??`${x}-helper`}),ne=_(()=>{let e=b[`aria-describedby`],t=typeof e==`string`?e:void 0;return z.value?[t,z.value].filter(Boolean).join(` `):t}),B=_(()=>{let e={...b};return delete e.class,delete e.style,delete e.readonly,delete e.disabled,delete e.maxlength,e}),V=(e=M.value)=>e.length===O.value?O.value:e.length,H=(e,t=M.value)=>Math.min(Math.max(e,0),V(t)),U=async(e=M.value)=>{await a(),E.value&&(E.value.value=e,E.value.setSelectionRange(D.value,D.value))},W=(e,t=M.value)=>{D.value=H(e,t),U(t)},G=(e,t)=>{e.length===O.value&&t>=O.value&&y(`complete`,e)},K=(e,t)=>{let n=k(e);D.value=H(t,n),E.value&&E.value.value!==n&&(E.value.value=n),y(`update:modelValue`,n),G(n,t),U(n)},q=e=>{if(P.value)return;let t=e.replace(/\D/g,``);if(!t||D.value>=O.value)return;let n=D.value,r=n+t.length,i=`${M.value.slice(0,n)}${t}${M.value.slice(r)}`;K(i,n+t.length)},J=()=>{if(P.value||!M.value)return;let e=D.value<M.value.length?D.value:D.value-1;if(e<0)return;let t=`${M.value.slice(0,e)}${M.value.slice(e+1)}`;K(t,e)},Y=()=>{if(P.value||D.value>=M.value.length)return;let e=`${M.value.slice(0,D.value)}${M.value.slice(D.value+1)}`;K(e,D.value)},X=(e,t)=>{if(P.value){E.value&&(E.value.value=M.value);return}let n=k(e);E.value&&E.value.value!==n&&(E.value.value=n);let r=t??n.length;D.value=H(r,n),y(`update:modelValue`,n),G(n,r)},Z=e=>{let t=e.target;X(t.value,A(t.value,t.selectionStart))},Q=()=>!d.invalid||P.value?!1:(K(``,0),!0),re=()=>{Q()},ie=()=>{N.value||(E.value?.focus(),Q())},ae=e=>{let t=e;if(P.value){e.preventDefault();return}if(t.inputType===`insertText`){e.preventDefault(),q(t.data??``);return}if(t.inputType===`insertFromPaste`){e.preventDefault(),q(t.data??``);return}if(t.inputType===`deleteContentBackward`){e.preventDefault(),J();return}t.inputType===`deleteContentForward`&&(e.preventDefault(),Y())},oe=e=>{if(e.key===`ArrowLeft`){e.preventDefault(),W(D.value-1);return}if(e.key===`ArrowRight`){e.preventDefault(),W(D.value+1);return}if(e.key===`Home`){e.preventDefault(),W(0);return}if(e.key===`End`){e.preventDefault(),W(M.value.length);return}if(e.key===`Backspace`){e.preventDefault(),J();return}e.key===`Delete`&&(e.preventDefault(),Y())},se=e=>{e.preventDefault(),q(e.clipboardData?.getData(`text`)??``)},$=()=>{N.value||E.value?.focus()},ce=e=>{N.value||($(),!Q()&&W(e))};return t(M,e=>{D.value=H(D.value,e),E.value&&E.value.value!==e&&(E.value.value=e),U(e)}),t(O,()=>{D.value=H(D.value),U()}),c(async()=>{!d.autoFocus||N.value||(await a(),$())}),(e,t)=>(n(),r(`div`,{class:v([`pincode-field`,{stretched:d.stretched}])},[f(`div`,{class:v([`pincode-shell`,{disabled:N.value,loading:d.loading,succeed:d.succeed,invalid:d.invalid}]),style:g({"--pincode-length":O.value}),onClick:ie},[f(`input`,ee({ref_key:`inputRef`,ref:E},B.value,{class:`pincode-input`,value:M.value,disabled:N.value,readonly:P.value,maxlength:O.value,"aria-invalid":d.invalid||void 0,"aria-describedby":ne.value,inputmode:`numeric`,pattern:`[0-9]*`,autocomplete:`one-time-code`,onFocus:re,onBeforeinput:ae,onKeydown:oe,onPaste:se,onInput:Z}),null,16,C),f(`div`,w,[(n(!0),r(m,null,l(F.value,(e,t)=>(n(),r(`div`,{key:t,class:v([`pincode-cell`,{filled:e,active:t===I.value,"with-caret":t===I.value&&L.value}]),onMousedown:h(e=>ce(t),[`prevent`])},[f(`span`,{class:v([`pincode-dot`,{hidden:e}])},null,2),f(`span`,{class:v([`pincode-digit`,{visible:e}])},te(e),3)],42,T))),128))])],6),i(S,{description:d.description,"error-message":d.errorMessage,invalid:d.invalid,disabled:N.value,"description-id":z.value},null,8,[`description`,`error-message`,`invalid`,`disabled`,`description-id`])],2))}})})))()}var O;function k(){return(k=e((()=>{D(),y(),O=b(E,[[`__scopeId`,`data-v-e1936b73`]]),E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:`default`,displayName:`PincodeInput`,description:``,tags:{},props:[{name:`modelValue`,required:!1,type:{name:`string`}},{name:`autoFocus`,required:!1,type:{name:`boolean`}},{name:`stretched`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`loading`,required:!1,type:{name:`boolean`}},{name:`length`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`6`}},{name:`succeed`,required:!1,type:{name:`boolean`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`description`,required:!1,type:{name:`string`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`descriptionId`,required:!1,type:{name:`string`}}],events:[{name:`update:modelValue`,type:{names:[`string`]}},{name:`complete`,type:{names:[`string`]}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/PincodeInput/PincodeInput.vue`]})})))()}var A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{k(),A={title:`Components/PincodeInput`,component:O,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`},loading:{type:`boolean`},invalid:{type:`boolean`},succeed:{type:`boolean`},stretched:{type:`boolean`},length:{control:{type:`number`,min:3,max:8}}}},j={args:{value:``,length:6,description:`Введите код из сообщения`},render:e=>({components:{PincodeInput:O},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},M={args:{value:`1234`,length:4},render:e=>({components:{PincodeInput:O},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},N={args:{value:`123`,length:6,stretched:!0,description:`Растягивается на ширину контейнера`},render:e=>({components:{PincodeInput:O},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},P={args:{value:`12`,length:6,loading:!0,description:`Проверяем код`},render:e=>({components:{PincodeInput:O},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},F={args:{value:`123456`,length:6,succeed:!0,description:`Код подтвержден`},render:e=>({components:{PincodeInput:O},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},I={args:{value:`123`,length:6,invalid:!0,description:`Подсказка скрывается при ошибке`,errorMessage:`Код введен неверно`},render:e=>({components:{PincodeInput:O},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    value: "",
    length: 6,
    description: "Введите код из сообщения"
  },
  render: args => ({
    components: {
      PincodeInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />'
  })
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    value: "1234",
    length: 4
  },
  render: args => ({
    components: {
      PincodeInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />'
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    value: "123",
    length: 6,
    stretched: true,
    description: "Растягивается на ширину контейнера"
  },
  render: args => ({
    components: {
      PincodeInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />'
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    value: "12",
    length: 6,
    loading: true,
    description: "Проверяем код"
  },
  render: args => ({
    components: {
      PincodeInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />'
  })
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    value: "123456",
    length: 6,
    succeed: true,
    description: "Код подтвержден"
  },
  render: args => ({
    components: {
      PincodeInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />'
  })
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    value: "123",
    length: 6,
    invalid: true,
    description: "Подсказка скрывается при ошибке",
    errorMessage: "Код введен неверно"
  },
  render: args => ({
    components: {
      PincodeInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />'
  })
}`,...I.parameters?.docs?.source}}},L=[`Default`,`Filled`,`Stretched`,`Loading`,`Succeed`,`Invalid`]})))()}R();export{j as Default,M as Filled,I as Invalid,P as Loading,N as Stretched,F as Succeed,L as __namedExportsOrder,A as default};