import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,E as i,F as a,O as o,S as s,a as c,b as l,mt as u,o as d,q as f,vt as p,x as m,y as h,yt as g,z as _}from"./iframe-BRZN4f8M.js";import{n as v,t as y}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as b,t as x}from"./Text-BkeTCBMw.js";var S,C,w;function T(){return(T=e((()=>{c(),b(),S={class:`form-error-content`},C={class:`form-error-message-box`},w=o({__name:`FormError`,props:{message:{},gap:{default:`var(--gap-1)`},Element:{default:`p`},typography:{default:`label-2`},clamp:{},ellipsis:{type:Boolean},color:{default:`negative`},textAlign:{default:`inherit`}},setup(e){let o=e,c=f(),v=h(()=>({Element:o.Element,typography:o.typography,clamp:o.clamp,ellipsis:o.ellipsis,color:o.color,textAlign:o.textAlign})),y=h(()=>({"--form-error-gap":o.gap}));return(e,f)=>(_(),m(d,{name:`form-error`},{default:t(()=>[o.message?(_(),n(`div`,{key:0,class:`form-error`,style:p(y.value)},[l(`div`,S,[l(`div`,C,[r(d,{name:`form-error-message`,mode:`out-in`},{default:t(()=>[(_(),m(x,a({...u(c),...v.value},{key:o.message}),{default:t(()=>[i(g(o.message),1)]),_:1},16))]),_:1})])])],4)):s(``,!0)]),_:1}))}})})))()}var E;function D(){return(D=e((()=>{T(),v(),E=y(w,[[`__scopeId`,`data-v-2eaf5829`]]),w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:`default`,displayName:`FormError`,description:``,tags:{},props:[{name:`textAlign`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`"inherit"`}},{name:`color`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"inherit"`},{name:`"secondary"`},{name:`"negative"`}]},defaultValue:{func:!1,value:`"negative"`}},{name:`ellipsis`,required:!1,type:{name:`boolean`}},{name:`clamp`,required:!1,type:{name:`union`,elements:[{name:`2`},{name:`3`},{name:`4`}]}},{name:`typography`,required:!1,type:{name:`Typography`},defaultValue:{func:!1,value:`"label-2"`}},{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`},{name:`"p"`},{name:`"span"`},{name:`"div"`},{name:`"a"`},{name:`"button"`},{name:`"label"`}]},defaultValue:{func:!1,value:`"p"`}},{name:`message`,required:!1,type:{name:`string`}},{name:`gap`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"var(--gap-1)"`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/FormError/FormError.vue`]})})))()}var O,k,A,j;function M(){return(M=e((()=>{D(),O={title:`Components/FormError`,component:E,tags:[`autodocs`]},k={args:{message:`Не удалось отправить форму`},render:e=>({components:{FormError:E},setup(){return{args:e}},template:`<FormError v-bind="args" />`})},A={args:{message:`Неверная почта или пароль`,textAlign:`center`},render:e=>({components:{FormError:E},setup(){return{args:e}},template:`<FormError v-bind="args" />`})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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