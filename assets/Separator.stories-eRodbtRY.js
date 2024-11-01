import{e as c,o as i,b as m,n as u}from"./vue.esm-bundler-C3G7_qdG.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as l}from"./Button-C0kRA-gD.js";import{I as f}from"./Icon-BGher5r-.js";import{R as _}from"./Row-DJHo95MK.js";import{G as g}from"./Gap-CXpl1N-8.js";import"./Loader-BN2AYAUE.js";const a=c({__name:"Separator",props:{direction:{}},setup(o){const p=o;return(v,I)=>(i(),m("div",{class:u(["separator",p.direction])},null,2))}}),s=d(a,[["__scopeId","data-v-f210564b"]]);a.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"direction",required:!0,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Separator/Separator.vue"]};const q={title:"Example/Separator",component:s,tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"]}}},B=`
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,q as default};
