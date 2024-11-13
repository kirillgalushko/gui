import{B as s}from"./BaseMenu-DrMCUTa6.js";import{B as u}from"./BaseMenuItem-EHtg8ywD.js";import{B as o,a as i}from"./BaseMenuSeparator-xU1p7D8z.js";import"./vue.esm-bundler-W7H8yL8W.js";import{d as m,a as B,b as c}from"./IconShareOutline-CxpFJ1iF.js";import{d as M}from"./IconPencilOutline-Dl8SnlB7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconChevronRightOutline-C3VqXFq4.js";import"./IconAccessibleFilled-Bv--GMkI.js";const g={title:"Components/BaseMenu",component:s,tags:["!autodocs"]},e={args:{},render:r=>({components:{BaseMenu:s,BaseMenuItem:u,BaseMenuList:o,BaseMenuSeparator:i,IconPencilOutline:M,IconShareOutline:m,IconExternalLinkOutline:B,IconArchiveOutline:c},setup(){return{args:r}},template:`
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
