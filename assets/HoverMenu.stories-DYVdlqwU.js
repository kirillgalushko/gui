import{H as r}from"./HoverMenu-BUnz90ig.js";import{B as u}from"./BaseMenuItem-Bv-vmPWL.js";import{B as a,a as i}from"./BaseMenuSeparator-CJbFmy8g.js";import{B as m}from"./Button-2eePbHVZ.js";import"./vue.esm-bundler-i9X9Ld2b.js";import{d as s,a as v}from"./IconShareOutline-DKJvDIE5.js";import{d as M}from"./IconCopyOutline-BSS4rPCg.js";import{d as l}from"./IconExternalLinkOutline-BKYs6On9.js";import{a as p}from"./IconMailOutline-CxJ4mevM.js";import{d as c}from"./IconPencilOutline-CDkv9NOh.js";import"./BaseMenu-BG7sLp-q.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./IconChevronRightOutline-CdPSVMcj.js";import"./IconAccessibleFilled-DPtg55nG.js";import"./Loader-D_TfFT4S.js";u.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuItem.vue"]};a.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuList.vue"]};i.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuSeparator.vue"]};const E={title:"Components/HoverMenu",component:r,tags:["!autodocs"]},e={args:{},render:H=>({components:{HoverMenu:r,HoverMenuItem:u,HoverMenuList:a,HoverMenuSeparator:i,Button:m,IconExternalLinkOutline:l,IconPencilOutline:c,IconShareOutline:s,IconArchiveOutline:v,IconMailOutline:p,IconCopyOutline:M},setup(){},template:`
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,E as default};
