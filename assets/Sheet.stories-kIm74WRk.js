import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-CfzASKeY.js";import{n as r,t as i}from"./Gap-Beavpr87.js";import{n as a,t as o}from"./Text-CY8H8lpg.js";import{n as s,t as c}from"./Sheet-BykB-7Rj.js";import{n as l,t as u}from"./Input-CU0LoCD5.js";import{n as d,t as f}from"./useModal-BDiJMsBO.js";var p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{t(),r(),l(),s(),a(),f(),p={title:`Components/Sheet`,component:c,tags:[`autodocs`],argTypes:{isOpened:{control:{type:`boolean`}},title:{control:{type:`text`}},description:{control:{type:`text`}},showCloseButton:{control:{type:`boolean`}},side:{control:{type:`select`},options:[`top`,`right`,`bottom`,`left`]},size:{control:{type:`select`},options:[`auto`,`small`,`medium`,`large`,`full`]},mode:{control:{type:`select`},options:[`default`,`floating`]},rounded:{control:{type:`boolean`}}},args:{isOpened:!0,showCloseButton:!0,title:`Настройки объекта`,description:`Измените параметры объявления и сохраните результат.`,side:`right`,mode:`default`,rounded:!0},parameters:{docs:{story:{inline:!1,iframeHeight:520}}}},m={render:e=>({components:{Button:n,Gap:i,Input:u,Sheet:c},setup(){return{args:e}},template:`
      <Sheet v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Sheet>
    `})},h={args:{isOpened:!1},render:e=>({components:{Button:n,Gap:i,Input:u,Sheet:c},setup(){let{show:t,close:n,visible:r}=d();return{args:e,show:t,close:n,visible:r}},template:`
      <Button mode="contrast" @click="show">Открыть Sheet</Button>
      <Sheet v-bind="args" :isOpened="visible" :onClose="close">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost" @click="close">Отмена</Button>
          <Button mode="contrast" @click="close">Сохранить</Button>
        </template>
      </Sheet>
    `})},g={args:{side:`left`,size:`small`},render:e=>({components:{Button:n,Sheet:c,Text:o},setup(){return{args:e}},template:`
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Левая панель подходит для фильтров, навигации и дополнительных настроек.
        </Text>
      </Sheet>
    `})},_={args:{side:`bottom`},render:e=>({components:{Button:n,Sheet:c,Text:o},setup(){return{args:e}},template:`
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Нижняя панель удобна для мобильных действий и кратких форм.
        </Text>
      </Sheet>
    `})},v={args:{mode:`floating`},render:e=>({components:{Button:n,Gap:i,Input:u,Sheet:c},setup(){return{args:e}},template:`
      <Sheet v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Sheet>
    `})},y={args:{title:void 0,description:void 0},render:e=>({components:{Button:n,Gap:i,Sheet:c,Text:o},setup(){return{args:e}},template:`
      <Sheet v-bind="args">
        <template #header>
          <Text typography="label-2" color="secondary">Бронь №4821</Text>
          <Gap :size="1" />
          <Text Element="h2" typography="title-2">30 июля — 2 августа</Text>
        </template>
        <Text typography="paragraph-1">
          При составном заголовке прокручивается только содержимое панели.
        </Text>
      </Sheet>
    `})},b={args:{mode:`floating`,side:`bottom`},render:e=>({components:{Button:n,Sheet:c,Text:o},setup(){return{args:e}},template:`
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Floating-панель сохраняет отступ от краёв экрана на мобильных устройствах.
        </Text>
        <template #footer>
          <Button mode="contrast">Готово</Button>
        </template>
      </Sheet>
    `})},x={args:{side:`bottom`,size:`full`},render:e=>({components:{Button:n,Sheet:c,Text:o},setup(){return{args:e}},template:`
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Полноэкранный bottom sheet оставляет небольшой отступ сверху.
        </Text>
        <template #footer>
          <Button mode="contrast">Готово</Button>
        </template>
      </Sheet>
    `})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Gap,
      Input,
      Sheet
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Sheet v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Sheet>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: false
  },
  render: args => ({
    components: {
      Button,
      Gap,
      Input,
      Sheet
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
      <Button mode="contrast" @click="show">Открыть Sheet</Button>
      <Sheet v-bind="args" :isOpened="visible" :onClose="close">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost" @click="close">Отмена</Button>
          <Button mode="contrast" @click="close">Сохранить</Button>
        </template>
      </Sheet>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    side: "left",
    size: "small"
  },
  render: args => ({
    components: {
      Button,
      Sheet,
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Левая панель подходит для фильтров, навигации и дополнительных настроек.
        </Text>
      </Sheet>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    side: "bottom"
  },
  render: args => ({
    components: {
      Button,
      Sheet,
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Нижняя панель удобна для мобильных действий и кратких форм.
        </Text>
      </Sheet>
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "floating"
  },
  render: args => ({
    components: {
      Button,
      Gap,
      Input,
      Sheet
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Sheet v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Sheet>
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined
  },
  render: args => ({
    components: {
      Button,
      Gap,
      Sheet,
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Sheet v-bind="args">
        <template #header>
          <Text typography="label-2" color="secondary">Бронь №4821</Text>
          <Gap :size="1" />
          <Text Element="h2" typography="title-2">30 июля — 2 августа</Text>
        </template>
        <Text typography="paragraph-1">
          При составном заголовке прокручивается только содержимое панели.
        </Text>
      </Sheet>
    \`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "floating",
    side: "bottom"
  },
  render: args => ({
    components: {
      Button,
      Sheet,
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Floating-панель сохраняет отступ от краёв экрана на мобильных устройствах.
        </Text>
        <template #footer>
          <Button mode="contrast">Готово</Button>
        </template>
      </Sheet>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    side: "bottom",
    size: "full"
  },
  render: args => ({
    components: {
      Button,
      Sheet,
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Полноэкранный bottom sheet оставляет небольшой отступ сверху.
        </Text>
        <template #footer>
          <Button mode="contrast">Готово</Button>
        </template>
      </Sheet>
    \`
  })
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithUseModal`,`LeftSide`,`BottomSide`,`Floating`,`WithCustomHeader`,`FloatingBottomSide`,`FullHeightBottomSide`]})))()}C();export{_ as BottomSide,m as Default,v as Floating,b as FloatingBottomSide,x as FullHeightBottomSide,g as LeftSide,y as WithCustomHeader,h as WithUseModal,S as __namedExportsOrder,p as default};