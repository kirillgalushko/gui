import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-CKiDWYnj.js";import{n as r,t as i}from"./Gap-azzyaXYM.js";import{n as a,t as o}from"./Text-Cy6Fu2qM.js";import{n as s,t as c}from"./AdaptiveModal-BuuACLZR.js";import{n as l,t as u}from"./Input-DUqEpfkG.js";import{n as d,t as f}from"./useModal-CueZv_KH.js";var p,m,h,g,_;function v(){return(v=e((()=>{s(),t(),r(),l(),a(),f(),p={title:`Components/AdaptiveModal`,component:c,tags:[`autodocs`],argTypes:{isOpened:{control:{type:`boolean`}},title:{control:{type:`text`}},showCloseButton:{control:{type:`boolean`}},modalProps:{control:{type:`object`}},sheetProps:{control:{type:`object`}}},args:{isOpened:!0,showCloseButton:!0,title:`Редактировать объявление`,sheetProps:{rounded:!0}},parameters:{docs:{story:{inline:!1,iframeHeight:520}}}},m={render:e=>({components:{AdaptiveModal:c,Button:n,Gap:i,Input:u},setup(){return{args:e}},template:`
      <AdaptiveModal v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </AdaptiveModal>
    `})},h={args:{isOpened:!1},render:e=>({components:{AdaptiveModal:c,Button:n,Gap:i,Input:u,Text:o},setup(){let{show:t,close:n,visible:r}=d();return{args:e,show:t,close:n,visible:r}},template:`
      <Button mode="contrast" @click="show">Открыть</Button>
      <AdaptiveModal v-bind="args" :isOpened="visible" :onClose="close">
        <Text typography="paragraph-1">
          На больших экранах откроется Modal, на мобильных — Sheet снизу.
        </Text>
        <Gap :size="4" />
        <Input placeholder="Комментарий" />
        <template #footer>
          <Button mode="ghost" @click="close">Отмена</Button>
          <Button mode="contrast" @click="close">Сохранить</Button>
        </template>
      </AdaptiveModal>
    `})},g={args:{sheetProps:{size:`full`}},render:e=>({components:{AdaptiveModal:c,Button:n,Gap:i,Input:u},setup(){return{args:e}},template:`
      <AdaptiveModal v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </AdaptiveModal>
    `})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AdaptiveModal,
      Button,
      Gap,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AdaptiveModal v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </AdaptiveModal>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: false
  },
  render: args => ({
    components: {
      AdaptiveModal,
      Button,
      Gap,
      Input,
      Text
    },
    setup() {
      const {
        show,
        close,
        visible
      } = useModal();
      return {
        args,
        show,
        close,
        visible
      };
    },
    template: \`
      <Button mode="contrast" @click="show">Открыть</Button>
      <AdaptiveModal v-bind="args" :isOpened="visible" :onClose="close">
        <Text typography="paragraph-1">
          На больших экранах откроется Modal, на мобильных — Sheet снизу.
        </Text>
        <Gap :size="4" />
        <Input placeholder="Комментарий" />
        <template #footer>
          <Button mode="ghost" @click="close">Отмена</Button>
          <Button mode="contrast" @click="close">Сохранить</Button>
        </template>
      </AdaptiveModal>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sheetProps: {
      size: "full"
    }
  },
  render: args => ({
    components: {
      AdaptiveModal,
      Button,
      Gap,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AdaptiveModal v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </AdaptiveModal>
    \`
  })
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithUseModal`,`FullHeightMobileSheet`]})))()}v();export{m as Default,g as FullHeightMobileSheet,h as WithUseModal,_ as __namedExportsOrder,p as default};