import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,D as r,E as i,F as a,O as o,S as s,St as c,W as l,_t as u,a as d,b as f,dt as p,h as m,o as h,tt as g,x as _,xt as v,y,yt as b}from"./iframe-Z95Hq5ox.js";import{n as x,t as S}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Nt as C,jt as w,n as T}from"./gui-icons.es-B0LP8gzK.js";import{n as E,t as D}from"./Text-DUT-SggZ.js";import{n as O,t as k}from"./ProgressBar-BCTTwdzR.js";import{n as A,t as j}from"./PasswordInput-CNEmrpxF.js";var M,N,P,F,I,L;function R(){return(R=e((()=>{d(),T(),A(),O(),E(),M={key:0,class:`password-strength-details`},N={class:`password-strength-details-content`},P={class:`password-strength-progress`},F={class:`password-strength-rules`},I={class:`password-strength-rule-icon`},L=o({inheritAttrs:!1,__name:`PasswordStrengthInput`,props:{modelValue:{},autoFocus:{type:Boolean},rules:{default:()=>[]},progress:{},progressSegments:{default:4},progressHeight:{default:`8px`},progressGap:{default:`var(--gap-1)`},maxWidth:{default:`100%`},disabled:{type:Boolean},description:{},errorMessage:{},invalid:{type:Boolean},descriptionId:{}},emits:[`update:modelValue`],setup(e,{emit:o}){let d=e,x=o,S=p(!1),T=y(()=>d.rules.filter(e=>e.valid).length),E=y(()=>d.rules.length),O=y(()=>(d.modelValue??``).length>0),A=y(()=>d.rules.length>0&&(S.value||O.value)),L=y(()=>typeof d.progress==`number`?Math.min(E.value,Math.max(0,d.progress)):E.value?T.value:0),R=y(()=>{let e=E.value?L.value/E.value:0;return e>.75?`positive`:e>.5?`warning`:e>.25?`danger`:`negative`}),z=e=>{x(`update:modelValue`,e)},B=()=>{S.value=!0},V=e=>{let t=e.currentTarget,n=e.relatedTarget;t instanceof HTMLElement&&n instanceof Node&&t.contains(n)||(S.value=!1)};return(e,o)=>(t(),n(`div`,{style:v({maxWidth:d.maxWidth}),class:`password-strength`,onFocusin:B,onFocusout:V},[r(j,a(e.$attrs,{"model-value":d.modelValue,"max-width":d.maxWidth,"auto-focus":d.autoFocus,disabled:d.disabled,description:d.description,"error-message":d.errorMessage,invalid:d.invalid,"description-id":d.descriptionId,"onUpdate:modelValue":z}),null,16,[`model-value`,`max-width`,`auto-focus`,`disabled`,`description`,`error-message`,`invalid`,`description-id`]),r(h,{name:`password-strength-details`},{default:g(()=>[A.value?(t(),n(`div`,M,[f(`div`,N,[f(`div`,P,[r(k,{progress:L.value,color:R.value,segments:d.progressSegments,height:d.progressHeight,gap:d.progressGap,max:E.value},null,8,[`progress`,`color`,`segments`,`height`,`gap`,`max`])]),f(`ul`,F,[(t(!0),n(m,null,l(d.rules,(e,a)=>(t(),n(`li`,{key:e.id??a,class:b([`password-strength-rule`,{valid:e.valid}]),style:v({"--rule-enter-delay":`${a*34}ms`})},[f(`span`,I,[e.valid?(t(),_(u(C),{key:0})):(t(),_(u(w),{key:1}))]),r(D,{Element:`span`,typography:`label-1`,color:`inherit`},{default:g(()=>[i(c(e.label),1)]),_:2},1024)],6))),128))])])])):s(``,!0)]),_:1})],36))}})})))()}var z;function B(){return(B=e((()=>{R(),x(),z=S(L,[[`__scopeId`,`data-v-ea368072`]]),L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:`default`,displayName:`PasswordStrengthInput`,description:``,tags:{},props:[{name:`modelValue`,required:!1,type:{name:`string`}},{name:`autoFocus`,required:!1,type:{name:`boolean`}},{name:`rules`,required:!1,type:{name:`Array`,elements:[{name:`PasswordStrengthRule`}]},defaultValue:{func:!1,value:`() => []`}},{name:`progress`,required:!1,type:{name:`number`}},{name:`progressSegments`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`4`}},{name:`progressHeight`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"8px"`}},{name:`progressGap`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"var(--gap-1)"`}},{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100%"`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`description`,required:!1,type:{name:`string`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`descriptionId`,required:!1,type:{name:`string`}}],events:[{name:`update:modelValue`,type:{names:[`string`]}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/PasswordStrengthInput/PasswordStrengthInput.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{d(),B(),V={title:`Components/PasswordStrengthInput`,component:z,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`},invalid:{type:`boolean`}}},H={args:{placeholder:`Придумайте пароль`,value:`Password1`,description:`Используйте надежный пароль`},render:e=>({components:{PasswordStrengthInput:z},setup(){return{args:e,rules:y(()=>{let t=String(e.value??``);return[{id:`length`,label:`Минимум 8 символов`,valid:t.length>=8},{id:`upper`,label:`Есть заглавная буква`,valid:/[A-ZА-Я]/.test(t)},{id:`number`,label:`Есть цифра`,valid:/\d/.test(t)},{id:`special`,label:`Есть спецсимвол`,valid:/[^A-Za-zА-Яа-я0-9]/.test(t)}]})}},template:`<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />`})},U={args:{placeholder:`Придумайте пароль`,value:`Password1`,progress:2,progressSegments:5,mediumColor:`#f59e0b`},render:e=>({components:{PasswordStrengthInput:z},setup(){return{args:e,rules:[{id:`length`,label:`Минимум 8 символов`,valid:!0},{id:`upper`,label:`Есть заглавная буква`,valid:!0},{id:`number`,label:`Есть цифра`,valid:!1},{id:`special`,label:`Есть спецсимвол`,valid:!1}]}},template:`<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />`})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Придумайте пароль",
    value: "Password1",
    description: "Используйте надежный пароль"
  },
  render: args => ({
    components: {
      PasswordStrengthInput
    },
    setup() {
      const rules = computed(() => {
        const value = String(args.value ?? "");
        return [{
          id: "length",
          label: "Минимум 8 символов",
          valid: value.length >= 8
        }, {
          id: "upper",
          label: "Есть заглавная буква",
          valid: /[A-ZА-Я]/.test(value)
        }, {
          id: "number",
          label: "Есть цифра",
          valid: /\\d/.test(value)
        }, {
          id: "special",
          label: "Есть спецсимвол",
          valid: /[^A-Za-zА-Яа-я0-9]/.test(value)
        }];
      });
      return {
        args,
        rules
      };
    },
    template: '<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />'
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Придумайте пароль",
    value: "Password1",
    progress: 2,
    progressSegments: 5,
    mediumColor: "#f59e0b"
  },
  render: args => ({
    components: {
      PasswordStrengthInput
    },
    setup() {
      const rules = [{
        id: "length",
        label: "Минимум 8 символов",
        valid: true
      }, {
        id: "upper",
        label: "Есть заглавная буква",
        valid: true
      }, {
        id: "number",
        label: "Есть цифра",
        valid: false
      }, {
        id: "special",
        label: "Есть спецсимвол",
        valid: false
      }];
      return {
        args,
        rules
      };
    },
    template: '<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />'
  })
}`,...U.parameters?.docs?.source}}},W=[`Default`,`ExternalProgress`]})))()}G();export{H as Default,U as ExternalProgress,W as __namedExportsOrder,V as default};