import{B as s}from"./BaseMenu-3xAhDUdB.js";import{B as u}from"./BaseMenuItem-YZEpop8j.js";import{B as o,a as i}from"./BaseMenuSeparator-DPUJ1NeO.js";import"./vue.esm-bundler-CfgtLz7v.js";import{d as m,a as B,b as c}from"./IconShareOutline-CcWwReKx.js";import{d as M}from"./IconPencilOutline-Bw74vIdP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconChevronRightOutline-B19WeqrK.js";import"./IconAccessibleFilled-CySfqBps.js";const g={title:"Components/BaseMenu",component:s,tags:["!autodocs"]},e={args:{},render:r=>({components:{BaseMenu:s,BaseMenuItem:u,BaseMenuList:o,BaseMenuSeparator:i,IconPencilOutline:M,IconShareOutline:m,IconExternalLinkOutline:B,IconArchiveOutline:c},setup(){return{args:r}},template:`
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
