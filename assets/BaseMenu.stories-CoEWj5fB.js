import{B as t}from"./BaseMenu-Bok6tjVV.js";import{B as m}from"./BaseMenuItem-DRfFKY4T.js";import{B as o,a as u}from"./BaseMenuSeparator-VEv7U2wP.js";import{I as B}from"./Icon-DuNk9YsD.js";import"./vue.esm-bundler-0yPEwasB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Example/BaseMenu",component:t,tags:["autodocs"]},e={args:{},render:r=>({components:{BaseMenu:t,BaseMenuItem:m,BaseMenuList:o,BaseMenuSeparator:u,Icon:B},setup(){return{args:r}},template:`
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
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,d as default};
