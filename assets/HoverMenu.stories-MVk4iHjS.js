import{H as r}from"./HoverMenu-Doc9rLyE.js";import{B as u}from"./BaseMenuItem-DKmb2SfR.js";import{B as a,a as i,b as m,d as s,c as v}from"./BaseMenuSeparator-CjKUBTrV.js";import{B as M}from"./Button-BESZNK66.js";import"./vue.esm-bundler-CRuxRSxJ.js";import{d as l}from"./IconCopyOutline-BYHgxI-t.js";import{a as c}from"./IconMailOutline-zJnQR7KY.js";import{d as p}from"./IconPencilOutline-CyR9qnpr.js";import"./BaseMenu-DA-9TBob.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./IconAccessibleFilled-d5loSfFR.js";import"./Loader-n57a3yiR.js";u.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuItem.vue"]};a.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuList.vue"]};i.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuSeparator.vue"]};const k={title:"Example/HoverMenu",component:r,tags:["autodocs"],argTypes:{},args:{}},e={args:{},render:H=>({components:{HoverMenu:r,HoverMenuItem:u,HoverMenuList:a,HoverMenuSeparator:i,Button:M,IconExternalLinkOutline:m,IconPencilOutline:p,IconShareOutline:s,IconArchiveOutline:v,IconMailOutline:c,IconCopyOutline:l},setup(){},template:`
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><IconPencilOutline />Открыть</HoverMenuItem>
            <HoverMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><IconShareOutline />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><IconCopyOutline />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><IconMailOutline />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><IconArchiveOutline />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    `})};var n,o,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      HoverMenu,
      HoverMenuItem,
      HoverMenuList,
      HoverMenuSeparator,
      Button,
      IconExternalLinkOutline,
      IconPencilOutline,
      IconShareOutline,
      IconArchiveOutline,
      IconMailOutline,
      IconCopyOutline
    },
    setup() {},
    template: \`
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><IconPencilOutline />Открыть</HoverMenuItem>
            <HoverMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><IconShareOutline />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><IconCopyOutline />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><IconMailOutline />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><IconArchiveOutline />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    \`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,k as default};
