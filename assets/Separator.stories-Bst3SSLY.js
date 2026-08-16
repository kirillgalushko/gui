import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,O as n,a as r,gt as i,z as a}from"./iframe-BRZN4f8M.js";import{n as o,t as s}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{T as c,Vt as l,n as u}from"./gui-icons.es-CEoFeAM4.js";import{n as d,t as f}from"./Button-BnZoe71I.js";import{n as p,t as m}from"./Gap-DiSiEy1Z.js";import{n as h,t as g}from"./Row-Ba0ohfkz.js";var _;function v(){return(v=e((()=>{r(),_=n({__name:`Separator`,props:{direction:{},stretched:{type:Boolean,default:!1}},setup(e){let n=e;return(e,r)=>(a(),t(`div`,{class:i([`separator`,n.direction,{stretched:n.stretched}])},null,2))}})})))()}var y;function b(){return(b=e((()=>{v(),o(),y=s(_,[[`__scopeId`,`data-v-dfa93762`]]),_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:`default`,displayName:`Separator`,description:``,tags:{},props:[{name:`direction`,required:!0,type:{name:`union`,elements:[{name:`"vertical"`},{name:`"horizontal"`}]}},{name:`stretched`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Separator/Separator.vue`]})})))()}var x,S,C,w;function T(){return(T=e((()=>{b(),d(),u(),h(),p(),x={title:`Components/Separator`,component:y,tags:[`autodocs`],argTypes:{direction:{control:`select`,options:[`horizontal`,`vertical`]},stretched:{control:`boolean`}}},S=`
  <Row alignItems="center">
    <Button squared> <IconPencilOutline /> </Button>
    <Gap direction="horizontal" :size="2" />
    <Button squared> <IconChevronDownOutline /> </Button>
    <Gap direction="horizontal" :size="2" />
    <Separator v-bind="args" />
    <Gap direction="horizontal" :size="2" />
    <Button squared> <IconPencilOutline /> </Button>
  </Row>
`,C={args:{direction:`vertical`,stretched:!1},render:e=>({components:{Separator:y,Button:f,IconChevronDownOutline:l,IconPencilOutline:c,Row:g,Gap:m},setup(){return{args:e}},template:S})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    stretched: false
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
}`,...C.parameters?.docs?.source}}},w=[`Default`]})))()}T();export{C as Default,w as __namedExportsOrder,x as default};