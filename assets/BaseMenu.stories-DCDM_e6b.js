import{B as s}from"./BaseMenu-BR80iP9k.js";import{B as u}from"./BaseMenuItem-CfiIO_2K.js";import{B as o,a as i}from"./BaseMenuSeparator-D3tDKjMV.js";import"./vue.esm-bundler-IF9MMzN9.js";import{d as m,a as B,b as c}from"./IconShareOutline-CJOY67RW.js";import{d as M}from"./IconPencilOutline-CMltpHQE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconChevronRightOutline-Blo1-RUe.js";import"./IconAccessibleFilled-BfHDHi1J.js";const g={title:"Components/BaseMenu",component:s,tags:["!autodocs"]},e={args:{},render:r=>({components:{BaseMenu:s,BaseMenuItem:u,BaseMenuList:o,BaseMenuSeparator:i,IconPencilOutline:M,IconShareOutline:m,IconExternalLinkOutline:B,IconArchiveOutline:c},setup(){return{args:r}},template:`
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><IconPencilOutline />Открыть</BaseMenuItem>
          <BaseMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><IconShareOutline />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><IconArchiveOutline />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>`})};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      BaseMenu,
      BaseMenuItem,
      BaseMenuList,
      BaseMenuSeparator,
      IconPencilOutline,
      IconShareOutline,
      IconExternalLinkOutline,
      IconArchiveOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><IconPencilOutline />Открыть</BaseMenuItem>
          <BaseMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><IconShareOutline />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><IconArchiveOutline />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>\`
  })
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,g as default};
