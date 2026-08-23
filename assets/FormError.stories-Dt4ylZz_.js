import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,D as r,E as i,F as a,J as o,O as s,S as c,St as l,_t as u,a as d,b as f,o as p,tt as m,x as h,xt as g,y as _}from"./iframe-Z95Hq5ox.js";import{n as v,t as y}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as b,t as x}from"./Text-DUT-SggZ.js";var S,C,w;function T(){return(T=e((()=>{d(),b(),S={class:`form-error-content`},C={class:`form-error-message-box`},w=s({__name:`FormError`,props:{message:{},gap:{default:`var(--gap-1)`},Element:{default:`p`},typography:{default:`label-2`},clamp:{},ellipsis:{type:Boolean},color:{default:`negative`},textAlign:{default:`inherit`}},setup(e){let s=e,d=o(),v=_(()=>({Element:s.Element,typography:s.typography,clamp:s.clamp,ellipsis:s.ellipsis,color:s.color,textAlign:s.textAlign})),y=_(()=>({"--form-error-gap":s.gap}));return(e,o)=>(t(),h(p,{name:`form-error`},{default:m(()=>[s.message?(t(),n(`div`,{key:0,class:`form-error`,style:g(y.value)},[f(`div`,S,[f(`div`,C,[r(p,{name:`form-error-message`,mode:`out-in`},{default:m(()=>[(t(),h(x,a({...u(d),...v.value},{key:s.message}),{default:m(()=>[i(l(s.message),1)]),_:1},16))]),_:1})])])],4)):c(``,!0)]),_:1}))}})})))()}var E;function D(){return(D=e((()=>{T(),v(),E=y(w,[[`__scopeId`,`data-v-2eaf5829`]]),w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:`default`,displayName:`FormError`,description:``,tags:{},props:[{name:`textAlign`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`"inherit"`}},{name:`color`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"inherit"`},{name:`"secondary"`},{name:`"negative"`}]},defaultValue:{func:!1,value:`"negative"`}},{name:`ellipsis`,required:!1,type:{name:`boolean`}},{name:`clamp`,required:!1,type:{name:`union`,elements:[{name:`2`},{name:`3`},{name:`4`}]}},{name:`typography`,required:!1,type:{name:`Typography`},defaultValue:{func:!1,value:`"label-2"`}},{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`},{name:`"p"`},{name:`"span"`},{name:`"div"`},{name:`"a"`},{name:`"button"`},{name:`"label"`}]},defaultValue:{func:!1,value:`"p"`}},{name:`message`,required:!1,type:{name:`string`}},{name:`gap`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"var(--gap-1)"`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/FormError/FormError.vue`]})})))()}var O,k,A,j;function M(){return(M=e((()=>{D(),O={title:`Components/FormError`,component:E,tags:[`autodocs`]},k={args:{message:`Не удалось отправить форму`},render:e=>({components:{FormError:E},setup(){return{args:e}},template:`<FormError v-bind="args" />`})},A={args:{message:`Неверная почта или пароль`,textAlign:`center`},render:e=>({components:{FormError:E},setup(){return{args:e}},template:`<FormError v-bind="args" />`})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Не удалось отправить форму"
  },
  render: args => ({
    components: {
      FormError
    },
    setup() {
      return {
        args
      };
    },
    template: '<FormError v-bind="args" />'
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Неверная почта или пароль",
    textAlign: "center"
  },
  render: args => ({
    components: {
      FormError
    },
    setup() {
      return {
        args
      };
    },
    template: '<FormError v-bind="args" />'
  })
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Centered`]})))()}M();export{A as Centered,k as Default,j as __namedExportsOrder,O as default};