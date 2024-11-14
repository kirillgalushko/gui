import{k as _,r as A,D as x,o as y,c as I,M as z,O,a as b,j as q,m as E}from"./vue.esm-bundler-Co5nn-M2.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d}from"./IconUserOutline-C4DFbQwx.js";import"./IconAccessibleFilled-BhQoVzGe.js";const w=["src"],v=_({__name:"Avatar",props:{shape:{default:"circle"},color:{default:"default"},src:{},size:{default:"40px"}},setup(a){const e=a,o=A(!1);function g(){o.value=!0}const h=x(()=>{const r=e.shape==="square"?{borderRadius:`calc(${e.size} / 4)`}:{};return{width:e.size,height:e.size,fontSize:`calc(${e.size} / 2.5)`,...r}});return(r,S)=>(y(),I("div",E({style:h.value,class:["avatar",e.shape,e.color]},r.$attrs),[z(b("img",{onLoad:g,class:"avatar-image",src:e.src},null,40,w),[[O,o.value]]),q(r.$slots,"default",{},void 0,!0)],16))}}),s=U(v,[["__scopeId","data-v-efe81b56"]]);v.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"shape",required:!1,type:{name:"union",elements:[{name:'"square"'},{name:'"circle"'}]},defaultValue:{func:!1,value:"'circle'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"secondary"'},{name:'"outlined"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"src",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'40px'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Avatar/Avatar.vue"]};const f=""+new URL("avatar-example-QCCGernO.png",import.meta.url).href,W={title:"Components/Avatar",component:s,tags:["autodocs"],argTypes:{shape:{control:{type:"select"},options:["square","circle"]},color:{control:{type:"select"},options:["default","secondary","outlined"]},size:{control:{type:"text"}}},args:{size:"60px"}},t={args:{},render:a=>({components:{Avatar:s,IconUserOutline:d},setup(){return{args:a,avatarExample:f}},template:`
    <Avatar :src="avatarExample" v-bind="args" />`})},n={args:{},render:a=>({components:{Avatar:s,IconUserOutline:d},setup(){return{args:a,avatarExample:f}},template:`
    <Avatar v-bind="args">
      <IconUserOutline />
    </Avatar>`})};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Avatar,
      IconUserOutline
    },
    setup() {
      return {
        args,
        avatarExample
      };
    },
    template: \`
    <Avatar :src="avatarExample" v-bind="args" />\`
  })
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var i,p,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Avatar,
      IconUserOutline
    },
    setup() {
      return {
        args,
        avatarExample
      };
    },
    template: \`
    <Avatar v-bind="args">
      <IconUserOutline />
    </Avatar>\`
  })
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const $=["WithImage","WithIcon"];export{n as WithIcon,t as WithImage,$ as __namedExportsOrder,W as default};
