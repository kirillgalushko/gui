import{C as m}from"./Card-BYwsL-C2.js";import{k as g,o as C,c as f,j as k,x as S}from"./vue.esm-bundler-CfgtLz7v.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u=g({__name:"Stack",props:{direction:{},gap:{},fullHeight:{type:Boolean},alignItems:{},stretched:{type:Boolean}},setup(e){const a=e;return(o,_)=>(C(),f("div",{class:S(["stack",a.direction,a.alignItems,{[`gap-${a.gap}`]:!!o.gap,fullHeight:a.fullHeight,stretched:a.stretched}])},[k(o.$slots,"default",{},void 0,!0)],2))}}),t=y(u,[["__scopeId","data-v-9bfafded"]]);u.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"direction",required:!0,type:{name:"union",elements:[{name:'"row"'},{name:'"column"'}]}},{name:"gap",required:!1,type:{name:"Gap"}},{name:"fullHeight",required:!1,type:{name:"boolean"}},{name:"alignItems",required:!1,type:{name:"Align"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Stack/Stack.vue"]};const w={title:"Components/Stack",component:t,tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["column","row"]},gap:{control:{type:"select"},options:[1,2,3,4,5,6]},alignItems:{control:{type:"select"},options:["start","center","end"]},stretched:{control:{type:"boolean"}}}},n={args:{direction:"column",gap:3},render:e=>({components:{Stack:t,Card:m},setup(){return{args:e}},template:`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        1
        <Card>Элемент 2</Card>
        2
        <Card>Элемент 3</Card>
        3
      </Stack>
    `})},r={args:{direction:"row",gap:3},render:e=>({components:{Stack:t,Card:m},setup(){return{args:e}},template:`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        <Card>Элемент 2</Card>
        <Card>Элемент 3</Card>
      </Stack>
    `})};var s,c,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 3
  },
  render: args => ({
    components: {
      Stack,
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        1
        <Card>Элемент 2</Card>
        2
        <Card>Элемент 3</Card>
        3
      </Stack>
    \`
  })
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    gap: 3
  },
  render: args => ({
    components: {
      Stack,
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        <Card>Элемент 2</Card>
        <Card>Элемент 3</Card>
      </Stack>
    \`
  })
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const I=["Default","Row"];export{n as Default,r as Row,I as __namedExportsOrder,w as default};
