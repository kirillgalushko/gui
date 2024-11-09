import{k as c,o as p,c as l,x as u}from"./vue.esm-bundler-CRuxRSxJ.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as d}from"./Button-BESZNK66.js";import{d as f}from"./IconChevronDownOutline-CCmEQVsl.js";import{d as _}from"./IconPencilOutline-CyR9qnpr.js";import{R as g}from"./Row-CS1wvD33.js";import{G as v}from"./Gap-DXZ4NxGA.js";import"./Loader-n57a3yiR.js";import"./IconAccessibleFilled-d5loSfFR.js";const a=c({__name:"Separator",props:{direction:{}},setup(o){const s=o;return(h,I)=>(p(),l("div",{class:u(["separator",s.direction])},null,2))}}),i=m(a,[["__scopeId","data-v-f210564b"]]);a.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"direction",required:!0,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Separator/Separator.vue"]};const k={title:"Example/Separator",component:i,tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"]}}},B=`
  <Row alignItems="center">
    <Button squared> <IconPencilOutline /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Button squared> <IconChevronDownOutline /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Separator v-bind="args" />
    <Gap direction="horizontal" :default="2" />
    <Button squared> <IconPencilOutline /> </Button>
  </Row>
`,e={args:{direction:"vertical"},render:o=>({components:{Separator:i,Button:d,IconChevronDownOutline:f,IconPencilOutline:_,Row:g,Gap:v},setup(){return{args:o}},template:B})};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    direction: 'vertical'
  },
  render: args => ({
    components: {
      Separator,
      Button,
      IconChevronDownOutline,
      IconPencilOutline,
      Row,
      Gap
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,k as default};
