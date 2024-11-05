import{D as t}from"./Dropdown-By_mAkad.js";import{B as p}from"./BaseMenuItem-DRfFKY4T.js";import{B as a,a as m}from"./BaseMenuSeparator-VEv7U2wP.js";import{B as d}from"./Button-Lv4bVbPv.js";import{I as w}from"./Icon-DuNk9YsD.js";import"./vue.esm-bundler-0yPEwasB.js";import"./floating-vue-vpDwKnjw.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-BtgERiSB.js";p.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownItem.vue"]};a.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownList.vue"]};m.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownSeparator.vue"]};const h={title:"Example/Dropdown",component:t,tags:["autodocs"],argTypes:{},args:{}},o={args:{},render:s=>({components:{Dropdown:t,Button:d,DropdownItem:p,DropdownList:a,DropdownSeparator:m,Icon:w},setup(){return{args:s}},template:`
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownList>
            <DropdownItem><Icon name="pencil" />Открыть</DropdownItem>
            <DropdownItem><Icon name="external-link" />Открыть в новой вкладке</DropdownItem>
            <Dropdown instant-move placement="right-start">
              <DropdownItem showArrow><Icon name="share" />Поделиться</DropdownItem>
              <template #popper>
                <DropdownList>
                  <DropdownItem><Icon name="copy" />Скопировать ссылку</DropdownItem>
                  <DropdownItem><Icon name="mail" />Отправить по почте</DropdownItem>
                </DropdownList>
              </template>
            </Dropdown>
            <DropdownSeparator />
            <DropdownItem><Icon name="archive" />Архивировать</DropdownItem>
          </DropdownList>
        </template>
      </Dropdown>`})};var n,e,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Dropdown,
      Button,
      DropdownItem,
      DropdownList,
      DropdownSeparator,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownList>
            <DropdownItem><Icon name="pencil" />Открыть</DropdownItem>
            <DropdownItem><Icon name="external-link" />Открыть в новой вкладке</DropdownItem>
            <Dropdown instant-move placement="right-start">
              <DropdownItem showArrow><Icon name="share" />Поделиться</DropdownItem>
              <template #popper>
                <DropdownList>
                  <DropdownItem><Icon name="copy" />Скопировать ссылку</DropdownItem>
                  <DropdownItem><Icon name="mail" />Отправить по почте</DropdownItem>
                </DropdownList>
              </template>
            </Dropdown>
            <DropdownSeparator />
            <DropdownItem><Icon name="archive" />Архивировать</DropdownItem>
          </DropdownList>
        </template>
      </Dropdown>\`
  })
}`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,h as default};
