import{e as D,E,A as f,G as M,B as L,o as N,b as R,l as p,d as I,H as w,I as q,m as z,s as C}from"./vue.esm-bundler-DUApOrFq.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as S}from"./Icon-c9maYRQP.js";const k=D({__name:"Input",props:E({maxWidth:{default:"100%"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const u=f(),m=f(),c=M(e,"modelValue"),$=e,B=L(()=>{const t=a=>{var i,g,h;return(i=a.value)!=null&&i.clientWidth?(console.log((g=a.value)==null?void 0:g.clientWidth,a),((h=a.value)==null?void 0:h.clientWidth)+20):12},r=t(u),d=t(m);return`padding-left: ${r}px; padding-right: ${d}px;`});return(t,r)=>(N(),R("div",{style:C({maxWidth:$.maxWidth}),class:"input-container"},[p("div",{ref_key:"leftAdornment",ref:u,class:"adornment left-adornment"},[I(t.$slots,"leftAdornment",{},void 0,!0)],512),w(p("input",z(t.$attrs,{"onUpdate:modelValue":r[0]||(r[0]=d=>c.value=d),style:B.value,class:["input"]}),null,16),[[q,c.value]]),p("div",{ref_key:"rightAdornment",ref:m,class:"adornment right-adornment"},[I(t.$slots,"rightAdornment",{},void 0,!0)],512)],4))}}),l=F(k,[["__scopeId","data-v-e5b3b7c9"]]);k.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}}],slots:[{name:"leftAdornment"},{name:"rightAdornment"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Input/Input.vue"]};const U={title:"Example/Input",component:l,tags:["autodocs"]},n={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:l},setup(){return{args:e}},template:'<Input v-bind="args" />'})},o={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:l,Icon:S},setup(){return{args:e}},template:`
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
}`,...(V=(A=n.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var W,_,b;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var x,y,P;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const j=["Default","WithLeftIcon","WithRightIcon"];export{n as Default,o as WithLeftIcon,s as WithRightIcon,j as __namedExportsOrder,U as default};
