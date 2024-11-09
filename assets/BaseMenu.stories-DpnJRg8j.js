import{B as s}from"./BaseMenu-DA-9TBob.js";import{B as u}from"./BaseMenuItem-DKmb2SfR.js";import{B as o,a as i,d as m,b as c,c as B}from"./BaseMenuSeparator-CjKUBTrV.js";import"./vue.esm-bundler-CRuxRSxJ.js";import{d as M}from"./IconPencilOutline-CyR9qnpr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconAccessibleFilled-d5loSfFR.js";const S={title:"Example/BaseMenu",component:s,tags:["autodocs"]},e={args:{},render:r=>({components:{BaseMenu:s,BaseMenuItem:u,BaseMenuList:o,BaseMenuSeparator:i,IconPencilOutline:M,IconShareOutline:m,IconExternalLinkOutline:c,IconArchiveOutline:B},setup(){return{args:r}},template:`
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
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,S as default};
