import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,ct as n}from"./iframe-BRZN4f8M.js";import{$t as r,T as i,d as a,n as o,yt as s}from"./gui-icons.es-CEoFeAM4.js";import{n as c,t as l}from"./BaseMenu-0iKBEo0I.js";import{n as u,t as d}from"./BaseMenuItem-D1oO9cgv.js";import{a as f,i as p,n as m,o as h,r as g,t as _}from"./BaseMenuRadioItem-qxs2Avr3.js";import{n as v,t as y}from"./BaseMenuGroup-lfO2D2LI.js";import{n as b,t as x}from"./BaseMenuLabel-BGjfTXBF.js";import{n as S,t as C}from"./BaseMenuSeparator-CfhxjWpS.js";var w,T,E;function D(){return(D=e((()=>{t(),c(),h(),v(),u(),b(),p(),m(),S(),o(),w={title:`Components/BaseMenu`,component:l,tags:[`!autodocs`]},T={args:{},render:e=>({components:{BaseMenu:l,BaseMenuCheckboxItem:f,BaseMenuGroup:y,BaseMenuItem:d,BaseMenuLabel:x,BaseMenuRadioGroup:g,BaseMenuRadioItem:_,BaseMenuSeparator:C,IconPencilOutline:i,IconShareOutline:a,IconExternalLinkOutline:s,IconArchiveOutline:r},setup(){return{args:e,statusBar:n(!0),position:n(`bottom`)}},template:`
      <BaseMenu v-bind="args">
        <BaseMenuGroup>
          <BaseMenuLabel>Действия</BaseMenuLabel>
          <BaseMenuItem><IconPencilOutline />Открыть</BaseMenuItem>
          <BaseMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><IconShareOutline />Поделиться</BaseMenuItem>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuLabel>Отображение</BaseMenuLabel>
          <BaseMenuCheckboxItem v-model="statusBar">Строка состояния</BaseMenuCheckboxItem>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuLabel>Позиция</BaseMenuLabel>
          <BaseMenuRadioGroup v-model="position">
            <BaseMenuRadioItem value="top">Сверху</BaseMenuRadioItem>
            <BaseMenuRadioItem value="bottom">Снизу</BaseMenuRadioItem>
          </BaseMenuRadioGroup>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuItem><IconArchiveOutline />Архивировать</BaseMenuItem>
        </BaseMenuGroup>
      </BaseMenu>`})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      BaseMenu,
      BaseMenuCheckboxItem,
      BaseMenuGroup,
      BaseMenuItem,
      BaseMenuLabel,
      BaseMenuRadioGroup,
      BaseMenuRadioItem,
      BaseMenuSeparator,
      IconPencilOutline,
      IconShareOutline,
      IconExternalLinkOutline,
      IconArchiveOutline
    },
    setup() {
      const statusBar = ref(true);
      const position = ref("bottom");
      return {
        args,
        statusBar,
        position
      };
    },
    template: \`
      <BaseMenu v-bind="args">
        <BaseMenuGroup>
          <BaseMenuLabel>Действия</BaseMenuLabel>
          <BaseMenuItem><IconPencilOutline />Открыть</BaseMenuItem>
          <BaseMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><IconShareOutline />Поделиться</BaseMenuItem>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuLabel>Отображение</BaseMenuLabel>
          <BaseMenuCheckboxItem v-model="statusBar">Строка состояния</BaseMenuCheckboxItem>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuLabel>Позиция</BaseMenuLabel>
          <BaseMenuRadioGroup v-model="position">
            <BaseMenuRadioItem value="top">Сверху</BaseMenuRadioItem>
            <BaseMenuRadioItem value="bottom">Снизу</BaseMenuRadioItem>
          </BaseMenuRadioGroup>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuItem><IconArchiveOutline />Архивировать</BaseMenuItem>
        </BaseMenuGroup>
      </BaseMenu>\`
  })
}`,...T.parameters?.docs?.source}}},E=[`Default`]})))()}D();export{T as Default,E as __namedExportsOrder,w as default};