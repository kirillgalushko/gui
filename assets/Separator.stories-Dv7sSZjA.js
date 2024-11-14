import{k as c,o as p,c as l,x as u}from"./vue.esm-bundler-Co5nn-M2.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as d}from"./Button-DdeZJrLB.js";import{d as f}from"./IconChevronDownOutline-3UAUme0J.js";import{d as _}from"./IconPencilOutline-BNEuXBuk.js";import{R as g}from"./Row-DjKW518m.js";import{G as v}from"./Gap-D29C92mt.js";import"./Loader-BhqgNo_5.js";import"./IconAccessibleFilled-BhQoVzGe.js";const a=c({__name:"Separator",props:{direction:{}},setup(o){const i=o;return(h,I)=>(p(),l("div",{class:u(["separator",i.direction])},null,2))}}),s=m(a,[["__scopeId","data-v-f210564b"]]);a.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"direction",required:!0,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Separator/Separator.vue"]};const k={title:"Components/Separator",component:s,tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"]}}},B=`
  <Row alignItems="center">
    <Button squared> <IconPencilOutline /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Button squared> <IconChevronDownOutline /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Separator v-bind="args" />
    <Gap direction="horizontal" :default="2" />
    <Button squared> <IconPencilOutline /> </Button>
  </Row>
`,e={args:{direction:"vertical"},render:o=>({components:{Separator:s,Button:d,IconChevronDownOutline:f,IconPencilOutline:_,Row:g,Gap:v},setup(){return{args:o}},template:B})};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,k as default};
