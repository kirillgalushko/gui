import{e as l,o as n,k as D,l as m,m as v,C as k,d as t,b as s,g as B,y as L,n as a}from"./vue.esm-bundler-JOEmeMwU.js";import{k as y}from"./floating-vue-DqO1PYqm.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as u}from"./Icon-DZVKx22U.js";import{B as $}from"./Button-jsxqPpL6.js";const I=l({__name:"Dropdown",setup(o){return(e,d)=>(n(),D(k(y),v(e.$attrs,{arrowOverflow:!1,class:["dropdown"]}),{default:m(()=>[t(e.$slots,"default",{},void 0,!0)]),popper:m(()=>[t(e.$slots,"popper",{},void 0,!0)]),_:3},16))}}),_=p(I,[["__scopeId","data-v-4bbe819e"]]);I.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},slots:[{name:"default"},{name:"popper"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/Dropdown.vue"]};const b={class:a(["dropdown-item"])},S={class:"dropdown-item-content"},f=l({__name:"DropdownItem",props:{showArrow:{type:Boolean}},setup(o){const e=o;return(d,V)=>(n(),s("button",b,[B("div",S,[t(d.$slots,"default",{},void 0,!0)]),e.showArrow?(n(),D(u,{key:0,name:"chevron-right"})):L("",!0)]))}}),x=p(f,[["__scopeId","data-v-77b05e43"]]);f.__docgenInfo={exportName:"default",displayName:"DropdownItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownItem.vue"]};const g={},N={class:a(["dropdown-list"])};function A(o,e){return n(),s("div",N,[t(o.$slots,"default",{},void 0,!0)])}const C=p(g,[["render",A],["__scopeId","data-v-a7f0ecd3"]]);g.__docgenInfo={displayName:"DropdownList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownList.vue"]};const h={},F={class:a(["dropdownSeparator"])};function E(o,e){return n(),s("div",F)}const O=p(h,[["render",E],["__scopeId","data-v-bf6e511a"]]);h.__docgenInfo={displayName:"DropdownSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/Dropdown/DropdownSeparator.vue"]};const G={title:"Example/Dropdown",component:_,tags:["autodocs"],argTypes:{},args:{}},r={args:{},render:o=>({components:{Dropdown:_,Button:$,DropdownItem:x,DropdownList:C,DropdownSeparator:O,Icon:u},setup(){return{args:o}},template:`
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
      </Dropdown>`})};var c,w,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(w=r.parameters)==null?void 0:w.docs)==null?void 0:i.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,G as default};
