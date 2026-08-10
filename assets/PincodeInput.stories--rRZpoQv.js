import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,D as n,F as r,I as i,J as ee,O as a,R as o,U as s,Z as c,a as l,b as u,ct as d,gt as f,h as p,p as m,q as h,vt as g,y as _,yt as v,z as y}from"./iframe-CgWRWv5U.js";import{n as b,t as x}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as S,t as C}from"./FieldHelper-DxUa0vx1.js";var w,T,E,D;function O(){return(O=e((()=>{l(),S(),w=[`value`,`disabled`,`readonly`,`maxlength`,`aria-invalid`,`aria-describedby`],T={class:`pincode-grid`,"aria-hidden":`true`},E=[`onMousedown`],D=a({inheritAttrs:!1,__name:`PincodeInput`,props:{modelValue:{},autoFocus:{type:Boolean},stretched:{type:Boolean,default:!1},disabled:{type:Boolean},loading:{type:Boolean},length:{default:6},succeed:{type:Boolean},invalid:{type:Boolean},description:{},errorMessage:{},descriptionId:{}},emits:[`update:modelValue`,`complete`],setup(e,{emit:a}){let l=e,b=a,x=h(),S=ee(),D=d(null),O=d(0),k=_(()=>Math.max(1,Math.floor(Number(l.length)||1))),A=e=>String(e??``).replace(/\D/g,``).slice(0,k.value),j=(e,t)=>t===null?A(e).length:A(e.slice(0,t)).length,M=e=>e===``||e===!0||e===`true`,N=_(()=>A(l.modelValue)),P=_(()=>l.disabled||l.loading),F=_(()=>l.succeed||M(x.readonly)),I=_(()=>Array.from({length:k.value},(e,t)=>N.value[t]??``)),L=_(()=>Math.min(O.value,k.value-1)),R=_(()=>O.value<k.value),z=_(()=>l.invalid?!!l.errorMessage:!!l.description),B=_(()=>{if(z.value)return l.descriptionId??`${S}-helper`}),te=_(()=>{let e=x[`aria-describedby`],t=typeof e==`string`?e:void 0;return B.value?[t,B.value].filter(Boolean).join(` `):t}),ne=_(()=>{let e={...x};return delete e.class,delete e.style,delete e.readonly,delete e.disabled,delete e.maxlength,e}),V=(e=N.value)=>e.length===k.value?k.value:e.length,H=(e,t=N.value)=>Math.min(Math.max(e,0),V(t)),U=async(e=N.value)=>{await i(),D.value&&(D.value.value=e,D.value.setSelectionRange(O.value,O.value))},W=(e,t=N.value)=>{O.value=H(e,t),U(t)},G=(e,t)=>{e.length===k.value&&t>=k.value&&b(`complete`,e)},K=(e,t)=>{let n=A(e);O.value=H(t,n),D.value&&D.value.value!==n&&(D.value.value=n),b(`update:modelValue`,n),G(n,t),U(n)},q=e=>{if(F.value)return;let t=e.replace(/\D/g,``);if(!t||O.value>=k.value)return;let n=O.value,r=n+t.length,i=`${N.value.slice(0,n)}${t}${N.value.slice(r)}`;K(i,n+t.length)},J=()=>{if(F.value||!N.value)return;let e=O.value<N.value.length?O.value:O.value-1;if(e<0)return;let t=`${N.value.slice(0,e)}${N.value.slice(e+1)}`;K(t,e)},Y=()=>{if(F.value||O.value>=N.value.length)return;let e=`${N.value.slice(0,O.value)}${N.value.slice(O.value+1)}`;K(e,O.value)},X=(e,t)=>{if(F.value){D.value&&(D.value.value=N.value);return}let n=A(e);D.value&&D.value.value!==n&&(D.value.value=n);let r=t??n.length;O.value=H(r,n),b(`update:modelValue`,n),G(n,r)},Z=e=>{let t=e.target;X(t.value,j(t.value,t.selectionStart))},Q=()=>!l.invalid||F.value?!1:(K(``,0),!0),re=()=>{Q()},ie=()=>{P.value||(D.value?.focus(),Q())},ae=e=>{let t=e;if(F.value){e.preventDefault();return}if(t.inputType===`insertText`){e.preventDefault(),q(t.data??``);return}if(t.inputType===`insertFromPaste`){e.preventDefault(),q(t.data??``);return}if(t.inputType===`deleteContentBackward`){e.preventDefault(),J();return}t.inputType===`deleteContentForward`&&(e.preventDefault(),Y())},oe=e=>{if(e.key===`ArrowLeft`){e.preventDefault(),W(O.value-1);return}if(e.key===`ArrowRight`){e.preventDefault(),W(O.value+1);return}if(e.key===`Home`){e.preventDefault(),W(0);return}if(e.key===`End`){e.preventDefault(),W(N.value.length);return}if(e.key===`Backspace`){e.preventDefault(),J();return}e.key===`Delete`&&(e.preventDefault(),Y())},se=e=>{e.preventDefault(),q(e.clipboardData?.getData(`text`)??``)},$=()=>{P.value||D.value?.focus()},ce=e=>{P.value||($(),!Q()&&W(e))};return c(N,e=>{O.value=H(O.value,e),D.value&&D.value.value!==e&&(D.value.value=e),U(e)}),c(k,()=>{O.value=H(O.value),U()}),o(async()=>{!l.autoFocus||P.value||(await i(),$())}),(e,i)=>(y(),t(`div`,{class:f([`pincode-field`,{stretched:l.stretched}])},[u(`div`,{class:f([`pincode-shell`,{disabled:P.value,loading:l.loading,succeed:l.succeed,invalid:l.invalid}]),style:g({"--pincode-length":k.value}),onClick:ie},[u(`input`,r({ref_key:`inputRef`,ref:D},ne.value,{class:`pincode-input`,value:N.value,disabled:P.value,readonly:F.value,maxlength:k.value,"aria-invalid":l.invalid||void 0,"aria-describedby":te.value,inputmode:`numeric`,pattern:`[0-9]*`,autocomplete:`one-time-code`,onFocus:re,onBeforeinput:ae,onKeydown:oe,onPaste:se,onInput:Z}),null,16,w),u(`div`,T,[(y(!0),t(p,null,s(I.value,(e,n)=>(y(),t(`div`,{key:n,class:f([`pincode-cell`,{filled:e,active:n===L.value,"with-caret":n===L.value&&R.value}]),onMousedown:m(e=>ce(n),[`prevent`])},[u(`span`,{class:f([`pincode-dot`,{hidden:e}])},null,2),u(`span`,{class:f([`pincode-digit`,{visible:e}])},v(e),3)],42,E))),128))])],6),n(C,{description:l.description,"error-message":l.errorMessage,invalid:l.invalid,disabled:P.value,"description-id":B.value},null,8,[`description`,`error-message`,`invalid`,`disabled`,`description-id`])],2))}})})))()}var k;function A(){return(A=e((()=>{O(),b(),k=x(D,[[`__scopeId`,`data-v-e1936b73`]]),D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`PincodeInput`,description:``,tags:{},props:[{name:`modelValue`,required:!1,type:{name:`string`}},{name:`autoFocus`,required:!1,type:{name:`boolean`}},{name:`stretched`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`loading`,required:!1,type:{name:`boolean`}},{name:`length`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`6`}},{name:`succeed`,required:!1,type:{name:`boolean`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`description`,required:!1,type:{name:`string`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`descriptionId`,required:!1,type:{name:`string`}}],events:[{name:`update:modelValue`,type:{names:[`string`]}},{name:`complete`,type:{names:[`string`]}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/PincodeInput/PincodeInput.vue`]})})))()}var j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{A(),j={title:`Components/PincodeInput`,component:k,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`},loading:{type:`boolean`},invalid:{type:`boolean`},succeed:{type:`boolean`},stretched:{type:`boolean`},length:{control:{type:`number`,min:3,max:8}}}},M={args:{value:``,length:6,description:`Введите код из сообщения`},render:e=>({components:{PincodeInput:k},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},N={args:{value:`1234`,length:4},render:e=>({components:{PincodeInput:k},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},P={args:{value:`123`,length:6,stretched:!0,description:`Растягивается на ширину контейнера`},render:e=>({components:{PincodeInput:k},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},F={args:{value:`12`,length:6,loading:!0,description:`Проверяем код`},render:e=>({components:{PincodeInput:k},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},I={args:{value:`123456`,length:6,succeed:!0,description:`Код подтвержден`},render:e=>({components:{PincodeInput:k},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},L={args:{value:`123`,length:6,invalid:!0,description:`Подсказка скрывается при ошибке`,errorMessage:`Код введен неверно`},render:e=>({components:{PincodeInput:k},setup(){return{args:e}},template:`<PincodeInput v-bind="args" v-model="args.value" />`})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Filled`,`Stretched`,`Loading`,`Succeed`,`Invalid`]})))()}z();export{M as Default,N as Filled,L as Invalid,F as Loading,P as Stretched,I as Succeed,R as __namedExportsOrder,j as default};