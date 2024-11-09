import{D as r}from"./Dropdown-2iKBnaH1.js";import{B as p}from"./BaseMenuItem-DKmb2SfR.js";import{B as a,a as i,b as d,d as m,c as w}from"./BaseMenuSeparator-CjKUBTrV.js";import{B as l}from"./Button-BESZNK66.js";import"./vue.esm-bundler-CRuxRSxJ.js";import{d as u}from"./IconCopyOutline-BYHgxI-t.js";import{a as c}from"./IconMailOutline-zJnQR7KY.js";import{d as D}from"./IconPencilOutline-CyR9qnpr.js";import"./floating-vue-DtEsT-K0.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconAccessibleFilled-d5loSfFR.js";import"./Loader-n57a3yiR.js";p.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownItem.vue"]};a.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownList.vue"]};i.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownSeparator.vue"]};const k={title:"Example/Dropdown",component:r,tags:["autodocs"],argTypes:{},args:{}},o={args:{},render:s=>({components:{Dropdown:r,Button:l,DropdownItem:p,DropdownList:a,DropdownSeparator:i,IconExternalLinkOutline:d,IconPencilOutline:D,IconShareOutline:m,IconArchiveOutline:w,IconMailOutline:c,IconCopyOutline:u},setup(){return{args:s}},template:`
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
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,k as default};
