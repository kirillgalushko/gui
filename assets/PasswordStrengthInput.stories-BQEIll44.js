import{k as q,E as u,o as a,c as o,A as p,m as k,a as g,F as A,R as B,u as E,v as M,x as N,q as c,D as f,z,H as W,I as D}from"./vue.esm-bundler-i9X9Ld2b.js";import{d as H,a as T}from"./IconCircleXOutline-DjbYaC9r.js";import{P as Z}from"./PasswordInput-DtGYX4OP.js";import{P as F}from"./ProgressBar-C_xyBmjS.js";import{T as G}from"./Text-BVo0AXrY.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconAccessibleFilled-DPtg55nG.js";import"./IconEyeClosedOutline-d6g9vJL1.js";import"./IconEyeOutline-DFkHeeDD.js";import"./Action-Du17rN5X.js";import"./Input-BGJ81Xdh.js";import"./FormHelper-CtLN8e56.js";const $={key:0,class:"password-strength-details"},L={class:"password-strength-rules"},O={class:"password-strength-rule-icon"},S=q({inheritAttrs:!1,__name:"PasswordStrengthInput",props:{modelValue:{},rules:{default:()=>[]},progress:{},progressSegments:{default:4},progressHeight:{default:"8px"},progressGap:{default:"var(--gap-1)"},weakColor:{default:"negative"},mediumColor:{default:"warning"},strongColor:{default:"positive"},maxWidth:{default:"100%"},disabled:{type:Boolean},description:{},errorMessage:{},invalid:{type:Boolean},descriptionId:{}},emits:["update:modelValue"],setup(r,{emit:t}){const e=r,_=t,x=u(()=>e.rules.filter(s=>s.valid).length),i=u(()=>typeof e.progress=="number"?Math.min(100,Math.max(0,e.progress)):e.rules.length?x.value/e.rules.length*100:0),V=u(()=>i.value>=75?e.strongColor:i.value>=40?e.mediumColor:e.weakColor),I=s=>{_("update:modelValue",s)};return(s,U)=>(a(),o("div",{style:M({maxWidth:e.maxWidth}),class:"password-strength"},[p(Z,k(s.$attrs,{"model-value":e.modelValue,"max-width":e.maxWidth,disabled:e.disabled,description:e.description,"error-message":e.errorMessage,invalid:e.invalid,"description-id":e.descriptionId,"onUpdate:modelValue":I}),null,16,["model-value","max-width","disabled","description","error-message","invalid","description-id"]),e.rules.length?(a(),o("div",$,[p(F,{progress:i.value,color:V.value,segments:e.progressSegments,height:e.progressHeight,gap:e.progressGap},null,8,["progress","color","segments","height","gap"]),g("ul",L,[(a(!0),o(A,null,B(e.rules,(l,C)=>(a(),o("li",{key:l.id??C,class:N(["password-strength-rule",{valid:l.valid}])},[g("span",O,[l.valid?(a(),c(f(H),{key:0})):(a(),c(f(T),{key:1}))]),p(G,{Element:"span",typography:"label-3",color:"inherit"},{default:z(()=>[W(D(l.label),1)]),_:2},1024)],2))),128))])])):E("",!0)],4))}}),m=R(S,[["__scopeId","data-v-92ddbf13"]]);S.__docgenInfo={exportName:"default",displayName:"PasswordStrengthInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"rules",required:!1,type:{name:"Array",elements:[{name:"PasswordStrengthRule"}]},defaultValue:{func:!1,value:"() => []"}},{name:"progress",required:!1,type:{name:"number"}},{name:"progressSegments",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"progressHeight",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'8px'"}},{name:"progressGap",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'var(--gap-1)'"}},{name:"weakColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'negative'"}},{name:"mediumColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'warning'"}},{name:"strongColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'positive'"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"description",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"invalid",required:!1,type:{name:"boolean"}},{name:"descriptionId",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/gui/gui/src/components/PasswordStrengthInput/PasswordStrengthInput.vue"]};const oe={title:"Components/PasswordStrengthInput",component:m,tags:["autodocs"],argTypes:{disabled:{type:"boolean"},invalid:{type:"boolean"}}},n={args:{placeholder:"Придумайте пароль",value:"Password1",description:"Используйте надежный пароль"},render:r=>({components:{PasswordStrengthInput:m},setup(){const t=u(()=>{const e=String(r.value??"");return[{id:"length",label:"Минимум 8 символов",valid:e.length>=8},{id:"upper",label:"Есть заглавная буква",valid:/[A-ZА-Я]/.test(e)},{id:"number",label:"Есть цифра",valid:/\d/.test(e)},{id:"special",label:"Есть спецсимвол",valid:/[^A-Za-zА-Яа-я0-9]/.test(e)}]});return{args:r,rules:t}},template:'<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />'})},d={args:{placeholder:"Придумайте пароль",value:"Password1",progress:50,progressSegments:5,mediumColor:"#f59e0b"},render:r=>({components:{PasswordStrengthInput:m},setup(){return{args:r,rules:[{id:"length",label:"Минимум 8 символов",valid:!0},{id:"upper",label:"Есть заглавная буква",valid:!0},{id:"number",label:"Есть цифра",valid:!1},{id:"special",label:"Есть спецсимвол",valid:!1}]}},template:'<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />'})};var v,h,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Придумайте пароль',
    value: 'Password1',
    description: 'Используйте надежный пароль'
  },
  render: args => ({
    components: {
      PasswordStrengthInput
    },
    setup() {
      const rules = computed(() => {
        const value = String(args.value ?? '');
        return [{
          id: 'length',
          label: 'Минимум 8 символов',
          valid: value.length >= 8
        }, {
          id: 'upper',
          label: 'Есть заглавная буква',
          valid: /[A-ZА-Я]/.test(value)
        }, {
          id: 'number',
          label: 'Есть цифра',
          valid: /\\d/.test(value)
        }, {
          id: 'special',
          label: 'Есть спецсимвол',
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
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,w,P;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Придумайте пароль',
    value: 'Password1',
    progress: 50,
    progressSegments: 5,
    mediumColor: '#f59e0b'
  },
  render: args => ({
    components: {
      PasswordStrengthInput
    },
    setup() {
      const rules = [{
        id: 'length',
        label: 'Минимум 8 символов',
        valid: true
      }, {
        id: 'upper',
        label: 'Есть заглавная буква',
        valid: true
      }, {
        id: 'number',
        label: 'Есть цифра',
        valid: false
      }, {
        id: 'special',
        label: 'Есть спецсимвол',
        valid: false
      }];
      return {
        args,
        rules
      };
    },
    template: '<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />'
  })
}`,...(P=(w=d.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const ne=["Default","ExternalProgress"];export{n as Default,d as ExternalProgress,ne as __namedExportsOrder,oe as default};
