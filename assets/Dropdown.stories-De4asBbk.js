import{e as c,o as u,g as l,v as r,m as I,C as g,d as t}from"./vue.esm-bundler-DUApOrFq.js";import{k as f}from"./floating-vue-BM4SLnXu.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as m,a as d,b as w}from"./BaseMenuSeparator-B3Zk17uj.js";import{B}from"./Button-BkmWC_fv.js";import{I as h}from"./Icon-c9maYRQP.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./Loader-CaIIJJUz.js";const i=c({__name:"Dropdown",setup(n){return(e,v)=>(u(),l(g(f),I(e.$attrs,{arrowOverflow:!1,class:["dropdown"]}),{default:r(()=>[t(e.$slots,"default",{},void 0,!0)]),popper:r(()=>[t(e.$slots,"popper",{},void 0,!0)]),_:3},16))}}),D=_(i,[["__scopeId","data-v-4bbe819e"]]);i.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},slots:[{name:"default"},{name:"popper"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/Dropdown.vue"]};m.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownItem.vue"]};d.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownList.vue"]};w.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownSeparator.vue"]};const F={title:"Example/Dropdown",component:D,tags:["autodocs"],argTypes:{},args:{}},o={args:{},render:n=>({components:{Dropdown:D,Button:B,DropdownItem:m,DropdownList:d,DropdownSeparator:w,Icon:h},setup(){return{args:n}},template:`
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
