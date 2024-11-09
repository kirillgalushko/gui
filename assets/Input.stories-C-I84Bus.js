import{o as i,c as p,a as r,k as b,R as B,r as v,S as D,I as R,j as I,U as j,V as C,m as E,v as L}from"./vue.esm-bundler-CRuxRSxJ.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{i as _}from"./IconAccessibleFilled-d5loSfFR.js";const U={},q={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",style:{width:"1em","min-width":"1em",height:"1em","min-height":"1em"},viewBox:"0 0 24 24"};function z(e,n){return i(),p("svg",q,n[0]||(n[0]=[r("path",{d:"M4 6h16M4 12h16M4 18h16"},null,-1)]))}const F=_(U,[["render",z]]),G={},H={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",style:{width:"1em","min-width":"1em",height:"1em","min-height":"1em"},viewBox:"0 0 24 24"};function J(e,n){return i(),p("svg",H,n[0]||(n[0]=[r("path",{d:"M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6"},null,-1)]))}const K=_(G,[["render",J]]),O=b({__name:"Input",props:B({maxWidth:{default:"100%"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=v(),m=v(),c=D(e,"modelValue"),$=e,P=R(()=>{const t=h=>{var g,f;return(g=h.value)!=null&&g.clientWidth?((f=h.value)==null?void 0:f.clientWidth)+20:12},a=t(n),u=t(m);return`padding-left: ${a}px; padding-right: ${u}px;`});return(t,a)=>(i(),p("div",{style:L({maxWidth:$.maxWidth}),class:"input-container"},[r("div",{ref_key:"leftAdornment",ref:n,class:"adornment left-adornment"},[I(t.$slots,"leftAdornment",{},void 0,!0)],512),j(r("input",E(t.$attrs,{"onUpdate:modelValue":a[0]||(a[0]=u=>c.value=u),style:P.value,class:["input"]}),null,16),[[C,c.value]]),r("div",{ref_key:"rightAdornment",ref:m,class:"adornment right-adornment"},[I(t.$slots,"rightAdornment",{},void 0,!0)],512)],4))}}),d=N(O,[["__scopeId","data-v-00af792f"]]);O.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}}],slots:[{name:"leftAdornment"},{name:"rightAdornment"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Input/Input.vue"]};const Y={title:"Example/Input",component:d,tags:["autodocs"]},o={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:d},setup(){return{args:e}},template:'<Input v-bind="args" />'})},s={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:d,IconSearchOutline:K},setup(){return{args:e}},template:`
      <Input v-bind="args">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    `})},l={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:d,IconMenu2Outline:F},setup(){return{args:e}},template:`
      <Input v-bind="args">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    `})};var w,k,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  },
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: '<Input v-bind="args" />'
  })
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var V,A,M;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  },
  render: args => ({
    components: {
      Input,
      IconSearchOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Input v-bind="args">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    \`
  })
}`,...(M=(A=s.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var y,S,W;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  },
  render: args => ({
    components: {
      Input,
      IconMenu2Outline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Input v-bind="args">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    \`
  })
}`,...(W=(S=l.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};const Z=["Default","WithLeftIcon","WithRightIcon"];export{o as Default,s as WithLeftIcon,l as WithRightIcon,Z as __namedExportsOrder,Y as default};
