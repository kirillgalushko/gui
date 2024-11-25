import{D as r}from"./Dropdown-Ji1XiYow.js";import{B as p}from"./BaseMenuItem-zmKlaVlb.js";import{B as a,a as i}from"./BaseMenuSeparator-DhgokZT6.js";import{B as m}from"./Button-BMjCsIuz.js";import"./vue.esm-bundler-Co5nn-M2.js";import{a as d,d as w,b as u}from"./IconShareOutline-NwoDIVJm.js";import{d as l}from"./IconCopyOutline-CJoa88e-.js";import{a as c}from"./IconMailOutline-BHb87iIC.js";import{d as D}from"./IconPencilOutline-BNEuXBuk.js";import"./floating-vue-CExQVH4C.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconChevronRightOutline-CIva9TA5.js";import"./IconAccessibleFilled-BhQoVzGe.js";import"./Loader-BhqgNo_5.js";p.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownItem.vue"]};a.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownList.vue"]};i.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownSeparator.vue"]};const C={title:"Components/Dropdown",component:r,tags:["!autodocs"],argTypes:{},args:{}},o={args:{},render:s=>({components:{Dropdown:r,Button:m,DropdownItem:p,DropdownList:a,DropdownSeparator:i,IconExternalLinkOutline:d,IconPencilOutline:D,IconShareOutline:w,IconArchiveOutline:u,IconMailOutline:c,IconCopyOutline:l},setup(){return{args:s}},template:`
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
      </Dropdown>`})};var n,e,t;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,C as default};
