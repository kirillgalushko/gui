import{e as D,o as u,k as l,l as r,m as I,C as f,d as t}from"./vue.esm-bundler-wkyDyPDa.js";import{k as g}from"./floating-vue-BuDXsb3n.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B,a as h,b as v}from"./BaseMenuSeparator-Btee500U.js";import{B as L}from"./Button-D1hkFDgi.js";import{I as k}from"./Icon-CQTe_jpK.js";const m=D({__name:"Dropdown",setup(e){return(n,S)=>(u(),l(f(g),I(n.$attrs,{arrowOverflow:!1,class:["dropdown"]}),{default:r(()=>[t(n.$slots,"default",{},void 0,!0)]),popper:r(()=>[t(n.$slots,"popper",{},void 0,!0)]),_:3},16))}}),d=_(m,[["__scopeId","data-v-4bbe819e"]]);m.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},slots:[{name:"default"},{name:"popper"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/Dropdown.vue"]};const w=B;w.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownItem.vue"]};const c=h;c.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownList.vue"]};const i=v;i.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownSeparator.vue"]};const F={title:"Example/Dropdown",component:d,tags:["autodocs"],argTypes:{},args:{}},o={args:{},render:e=>({components:{Dropdown:d,Button:L,DropdownItem:w,DropdownList:c,DropdownSeparator:i,Icon:k},setup(){return{args:e}},template:`
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
      </Dropdown>`})};var p,a,s;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,F as default};
