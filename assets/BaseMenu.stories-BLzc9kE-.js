import{B as t}from"./BaseMenu-Bvk-bTua.js";import{B as m,a as o,b as u}from"./BaseMenuSeparator-Chj3ryDL.js";import{I as B}from"./Icon-DoDBWsCq.js";import"./vue.esm-bundler-vqfIXXGK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Example/BaseMenu",component:t,tags:["autodocs"]},e={args:{},render:r=>({components:{BaseMenu:t,BaseMenuItem:m,BaseMenuList:o,BaseMenuSeparator:u,Icon:B},setup(){return{args:r}},template:`
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><Icon name="pencil" />Открыть</BaseMenuItem>
          <BaseMenuItem><Icon name="external-link" />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><Icon name="archive" />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><Icon name="archive" />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>`})};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,l as default};
