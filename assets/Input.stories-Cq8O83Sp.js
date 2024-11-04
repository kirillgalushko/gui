import{e as B,I as D,A as h,J as L,B as M,o as E,b as N,l as d,d as f,K as R,L as w,m as q,s as z}from"./vue.esm-bundler-vqfIXXGK.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as P}from"./Icon-DoDBWsCq.js";const S=B({__name:"Input",props:D({maxWidth:{default:"100%"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const p=h(),u=h(),m=L(e,"modelValue"),k=e,$=M(()=>{const t=c=>{var i,g;return(i=c.value)!=null&&i.clientWidth?((g=c.value)==null?void 0:g.clientWidth)+20:12},r=t(p),l=t(u);return`padding-left: ${r}px; padding-right: ${l}px;`});return(t,r)=>(E(),N("div",{style:z({maxWidth:k.maxWidth}),class:"input-container"},[d("div",{ref_key:"leftAdornment",ref:p,class:"adornment left-adornment"},[f(t.$slots,"leftAdornment",{},void 0,!0)],512),R(d("input",q(t.$attrs,{"onUpdate:modelValue":r[0]||(r[0]=l=>m.value=l),style:$.value,class:["input"]}),null,16),[[w,m.value]]),d("div",{ref_key:"rightAdornment",ref:u,class:"adornment right-adornment"},[f(t.$slots,"rightAdornment",{},void 0,!0)],512)],4))}}),s=C(S,[["__scopeId","data-v-9771ebc5"]]);S.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}}],slots:[{name:"leftAdornment"},{name:"rightAdornment"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Input/Input.vue"]};const O={title:"Example/Input",component:s,tags:["autodocs"]},a={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:s},setup(){return{args:e}},template:'<Input v-bind="args" />'})},n={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:s,Icon:P},setup(){return{args:e}},template:`
      <Input v-bind="args">
        <template #leftAdornment>
          <Icon name="search" />
        </template>
      </Input>
    `})},o={args:{placeholder:"Placeholder",value:"Value"},render:e=>({components:{Input:s,Icon:P},setup(){return{args:e}},template:`
      <Input v-bind="args">
        <template #rightAdornment>
          <Icon name="menu-2" />
        </template>
      </Input>
    `})};var I,v,A;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var V,W,_;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(W=n.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var x,y,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const U=["Default","WithLeftIcon","WithRightIcon"];export{a as Default,n as WithLeftIcon,o as WithRightIcon,U as __namedExportsOrder,O as default};
