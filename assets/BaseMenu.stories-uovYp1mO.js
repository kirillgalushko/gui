import{e as B,t as M,o as p,b as i,d as I,m as l}from"./vue.esm-bundler-C3G7_qdG.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as f,a as _,b as g}from"./BaseMenuSeparator-BM9P8PJC.js";import{I as v}from"./Icon-BGher5r-.js";const u=B({__name:"BaseMenu",setup(n,{expose:c}){const a=M();return c({menuRef:a}),(s,h)=>(p(),i("div",l(s.$attrs,{ref_key:"menuRef",ref:a,class:"base-menu"}),[I(s.$slots,"default",{},void 0,!0)],16))}}),m=d(u,[["__scopeId","data-v-ee0a1083"]]);u.__docgenInfo={exportName:"default",displayName:"BaseMenu",description:"",tags:{},expose:[{name:"menuRef"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/BaseMenu/BaseMenu.vue"]};const b={title:"Example/BaseMenu",component:m,tags:["autodocs"]},e={args:{},render:n=>({components:{BaseMenu:m,BaseMenuItem:f,BaseMenuList:_,BaseMenuSeparator:g,Icon:v},setup(){return{args:n}},template:`
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><Icon name="pencil" />Открыть</BaseMenuItem>
          <BaseMenuItem><Icon name="external-link" />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><Icon name="archive" />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><Icon name="archive" />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>`})};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      BaseMenu,
      BaseMenuItem,
      BaseMenuList,
      BaseMenuSeparator,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><Icon name="pencil" />Открыть</BaseMenuItem>
          <BaseMenuItem><Icon name="external-link" />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><Icon name="archive" />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><Icon name="archive" />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>\`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,b as default};
