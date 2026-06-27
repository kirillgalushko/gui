import{B as s}from"./BaseMenu-BG7sLp-q.js";import{B as o}from"./BaseMenuItem-Bv-vmPWL.js";import{B as u,a as i}from"./BaseMenuSeparator-CJbFmy8g.js";import"./vue.esm-bundler-i9X9Ld2b.js";import{d as m,a as B}from"./IconShareOutline-DKJvDIE5.js";import{d as c}from"./IconExternalLinkOutline-BKYs6On9.js";import{d as M}from"./IconPencilOutline-CDkv9NOh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconChevronRightOutline-CdPSVMcj.js";import"./IconAccessibleFilled-DPtg55nG.js";const v={title:"Components/BaseMenu",component:s,tags:["!autodocs"]},e={args:{},render:r=>({components:{BaseMenu:s,BaseMenuItem:o,BaseMenuList:u,BaseMenuSeparator:i,IconPencilOutline:M,IconShareOutline:m,IconExternalLinkOutline:c,IconArchiveOutline:B},setup(){return{args:r}},template:`
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><IconPencilOutline />Открыть</BaseMenuItem>
          <BaseMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><IconShareOutline />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><IconArchiveOutline />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>`})};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,v as default};
