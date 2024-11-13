import{H as r}from"./HoverMenu-B9LbJ8qG.js";import{B as u}from"./BaseMenuItem-EHtg8ywD.js";import{B as a,a as i}from"./BaseMenuSeparator-xU1p7D8z.js";import{B as m}from"./Button-enPC7DfT.js";import"./vue.esm-bundler-W7H8yL8W.js";import{a as s,d as v,b as M}from"./IconShareOutline-CxpFJ1iF.js";import{d as l}from"./IconCopyOutline-CHi2duH8.js";import{a as p}from"./IconMailOutline-DG9UbEWW.js";import{d as c}from"./IconPencilOutline-Dl8SnlB7.js";import"./BaseMenu-DrMCUTa6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./IconChevronRightOutline-C3VqXFq4.js";import"./IconAccessibleFilled-Bv--GMkI.js";import"./Loader-C8ahosWX.js";u.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuItem.vue"]};a.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuList.vue"]};i.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuSeparator.vue"]};const C={title:"Components/HoverMenu",component:r,tags:["!autodocs"]},e={args:{},render:H=>({components:{HoverMenu:r,HoverMenuItem:u,HoverMenuList:a,HoverMenuSeparator:i,Button:m,IconExternalLinkOutline:s,IconPencilOutline:c,IconShareOutline:v,IconArchiveOutline:M,IconMailOutline:p,IconCopyOutline:l},setup(){},template:`
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,C as default};
