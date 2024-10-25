import{e as p,o as i,b as m,n as u}from"./vue.esm-bundler-JOEmeMwU.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as l}from"./Button-jsxqPpL6.js";import{I as f}from"./Icon-DZVKx22U.js";import{R as _}from"./Row-CVlPa_7V.js";import{G as g}from"./Gap-3OUDLWox.js";const a=p({__name:"Separator",props:{direction:{}},setup(o){const c=o;return(v,I)=>(i(),m("div",{class:u(["separator",c.direction])},null,2))}}),s=d(a,[["__scopeId","data-v-f210564b"]]);a.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"direction",required:!0,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Separator/Separator.vue"]};const R={title:"Example/Separator",component:s,tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"]}}},B=`
  <Row alignItems="center">
    <Button squared> <Icon name="edit" /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Button squared> <Icon name="device-floppy" /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Separator v-bind="args" />
    <Gap direction="horizontal" :default="2" />
    <Button squared> <Icon name="x" /> </Button>
  </Row>
`,e={args:{direction:"vertical"},render:o=>({components:{Separator:s,Button:l,Icon:f,Row:_,Gap:g},setup(){return{args:o}},template:B})};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    direction: 'vertical'
  },
  render: args => ({
    components: {
      Separator,
      Button,
      Icon,
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,R as default};
