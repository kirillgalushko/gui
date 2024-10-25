import{e as M,q as B,s as f,u as E,f as L,o as N,b as R,g as p,d as I,t as q,v as w,m as j,j as z}from"./vue.esm-bundler-JOEmeMwU.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as S}from"./Icon-DZVKx22U.js";const k=M({__name:"Input",props:B({maxWidth:{default:"100%"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const u=f(),m=f(),c=E(e,"modelValue"),$=e,D=L(()=>{const t=r=>{var i,g,h;return(i=r.value)!=null&&i.clientWidth?(console.log((g=r.value)==null?void 0:g.clientWidth,r),((h=r.value)==null?void 0:h.clientWidth)+20):12},a=t(u),d=t(m);return`padding-left: ${a}px; padding-right: ${d}px;`});return(t,a)=>(N(),R("div",{style:z({maxWidth:$.maxWidth}),class:"input-container"},[p("div",{ref_key:"leftAdornment",ref:u,class:"adornment left-adornment"},[I(t.$slots,"leftAdornment",{},void 0,!0)],512),q(p("input",j(t.$attrs,{"onUpdate:modelValue":a[0]||(a[0]=d=>c.value=d),style:D.value,class:["input"]}),null,16),[[w,c.value]]),p("div",{ref_key:"rightAdornment",ref:m,class:"adornment right-adornment"},[I(t.$slots,"rightAdornment",{},void 0,!0)],512)],4))}}),l=C(k,[["__scopeId","data-v-ea6456da"]]);k.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}}],slots:[{name:"leftAdornment"},{name:"rightAdornment"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Input/Input.vue"]};const G={title:"Example/Input",component:l,tags:["autodocs"]},n={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:l},setup(){return{args:e}},template:'<Input v-bind="args" />'})},o={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:l,Icon:S},setup(){return{args:e}},template:`
      <Input v-bind="args">
        <template #leftAdornment>
          <Icon name="search" />
        </template>
      </Input>
    `})},s={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:l,Icon:S},setup(){return{args:e}},template:`
      <Input v-bind="args">
        <template #rightAdornment>
          <Icon name="menu-2" />
        </template>
      </Input>
    `})};var v,A,V;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(V=(A=n.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var W,_,x;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  },
  render: args => ({
    components: {
      Input,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Input v-bind="args">
        <template #leftAdornment>
          <Icon name="search" />
        </template>
      </Input>
    \`
  })
}`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var y,P,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  },
  render: args => ({
    components: {
      Input,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Input v-bind="args">
        <template #rightAdornment>
          <Icon name="menu-2" />
        </template>
      </Input>
    \`
  })
}`,...(b=(P=s.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};const H=["Default","WithLeftIcon","WithRightIcon"];export{n as Default,o as WithLeftIcon,s as WithRightIcon,H as __namedExportsOrder,G as default};
