import{e as u,o as c,k as i,l as r,m as f,C as g,d as s}from"./vue.esm-bundler-JOEmeMwU.js";import{V as T}from"./floating-vue-DqO1PYqm.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as v}from"./Text-DzYs2-Qz.js";const m=u({__name:"Tooltip",props:{mode:{default:"default"}},setup(o){const a=o;return(t,x)=>(c(),i(g(T),f(t.$attrs,{arrowOverflow:!1,popperClass:a.mode==="accent"?"tooltip-accent":"tooltip-default",class:["tooltip",a.mode]}),{default:r(()=>[s(t.$slots,"default",{},void 0,!0)]),popper:r(()=>[s(t.$slots,"popper",{},void 0,!0)]),_:3},16,["popperClass","class"]))}}),d=_(m,[["__scopeId","data-v-df897272"]]);m.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"mode",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"accent"'}]},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default"},{name:"popper"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tooltip/Tooltip.vue"]};const y={title:"Example/Tooltip",component:d,tags:["autodocs"],argTypes:{mode:{control:"select",options:["default","accent"]}},args:{mode:"default"}},e={args:{mode:"default"},render:o=>({components:{Tooltip:d,Text:v},setup(){return{args:o}},template:`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это подсказка
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `})};var n,p,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mode: 'default'
  },
  render: args => ({
    components: {
      Tooltip,
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это подсказка
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    \`
  })
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const V=["Default"];export{e as Default,V as __namedExportsOrder,y as default};
