import{D as t}from"./Dropdown-CwzsdAyr.js";import{B as p}from"./BaseMenuItem-Bv-vmPWL.js";import{B as a,a as i}from"./BaseMenuSeparator-CJbFmy8g.js";import{B as s}from"./Button-2eePbHVZ.js";import"./vue.esm-bundler-i9X9Ld2b.js";import{d,a as w}from"./IconShareOutline-DKJvDIE5.js";import{d as u}from"./IconCopyOutline-BSS4rPCg.js";import{d as l}from"./IconExternalLinkOutline-BKYs6On9.js";import{a as c}from"./IconMailOutline-CxJ4mevM.js";import{d as D}from"./IconPencilOutline-CDkv9NOh.js";import"./floating-vue-8r25gIYL.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconChevronRightOutline-CdPSVMcj.js";import"./IconAccessibleFilled-DPtg55nG.js";import"./Loader-D_TfFT4S.js";p.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownItem.vue"]};a.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownList.vue"]};i.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownSeparator.vue"]};const E={title:"Components/Dropdown",component:t,tags:["!autodocs"],argTypes:{},args:{}},o={args:{},render:m=>({components:{Dropdown:t,Button:s,DropdownItem:p,DropdownList:a,DropdownSeparator:i,IconExternalLinkOutline:l,IconPencilOutline:D,IconShareOutline:d,IconArchiveOutline:w,IconMailOutline:c,IconCopyOutline:u},setup(){return{args:m}},template:`
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownList>
            <DropdownItem><IconPencilOutline />Открыть</DropdownItem>
            <DropdownItem><IconExternalLinkOutline />Открыть в новой вкладке</DropdownItem>
            <Dropdown instant-move placement="right-start">
              <DropdownItem showArrow><IconShareOutline />Поделиться</DropdownItem>
              <template #popper>
                <DropdownList>
                  <DropdownItem><IconCopyOutline />Скопировать ссылку</DropdownItem>
                  <DropdownItem><IconMailOutline />Отправить по почте</DropdownItem>
                </DropdownList>
              </template>
            </Dropdown>
            <DropdownSeparator />
            <DropdownItem><IconArchiveOutline />Архивировать</DropdownItem>
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
      IconExternalLinkOutline,
      IconPencilOutline,
      IconShareOutline,
      IconArchiveOutline,
      IconMailOutline,
      IconCopyOutline
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
            <DropdownItem><IconPencilOutline />Открыть</DropdownItem>
            <DropdownItem><IconExternalLinkOutline />Открыть в новой вкладке</DropdownItem>
            <Dropdown instant-move placement="right-start">
              <DropdownItem showArrow><IconShareOutline />Поделиться</DropdownItem>
              <template #popper>
                <DropdownList>
                  <DropdownItem><IconCopyOutline />Скопировать ссылку</DropdownItem>
                  <DropdownItem><IconMailOutline />Отправить по почте</DropdownItem>
                </DropdownList>
              </template>
            </Dropdown>
            <DropdownSeparator />
            <DropdownItem><IconArchiveOutline />Архивировать</DropdownItem>
          </DropdownList>
        </template>
      </Dropdown>\`
  })
}`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,E as default};
