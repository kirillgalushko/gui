import{H as t}from"./HoverMenu-FES_4fq-.js";import{B as u}from"./BaseMenuItem-DRfFKY4T.js";import{B as a,a as m}from"./BaseMenuSeparator-VEv7U2wP.js";import{I as s}from"./Icon-DuNk9YsD.js";import{B as v}from"./Button-Lv4bVbPv.js";import"./vue.esm-bundler-0yPEwasB.js";import"./BaseMenu-Bok6tjVV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./Loader-BtgERiSB.js";u.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuItem.vue"]};a.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuList.vue"]};m.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuSeparator.vue"]};const L={title:"Example/HoverMenu",component:t,tags:["autodocs"],argTypes:{},args:{}},e={args:{},render:M=>({components:{HoverMenu:t,HoverMenuItem:u,HoverMenuList:a,HoverMenuSeparator:m,Icon:s,Button:v},setup(){},template:`
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><Icon name="pencil" />Открыть</HoverMenuItem>
            <HoverMenuItem><Icon name="external-link" />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><Icon name="share" />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><Icon name="copy" />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><Icon name="mail" />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><Icon name="archive" />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    `})};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      HoverMenu,
      HoverMenuItem,
      HoverMenuList,
      HoverMenuSeparator,
      Icon,
      Button
    },
    setup() {},
    template: \`
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><Icon name="pencil" />Открыть</HoverMenuItem>
            <HoverMenuItem><Icon name="external-link" />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><Icon name="share" />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><Icon name="copy" />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><Icon name="mail" />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><Icon name="archive" />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    \`
  })
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,L as default};
