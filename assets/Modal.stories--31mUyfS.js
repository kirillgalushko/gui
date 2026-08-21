import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-BMCIb-MW.js";import{n as r,t as i}from"./Modal-GpLB3QY3.js";import{n as a,t as o}from"./useModal-CKl9PXt8.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),t(),o(),s={title:`Components/Modal`,component:i,tags:[`autodocs`],argTypes:{isOpened:{control:{type:`boolean`}},title:{control:{type:`text`}},description:{control:{type:`text`}},showCloseButton:{control:{type:`boolean`}},size:{control:{type:`select`},options:[`small`,`medium`,`large`,`full`]}},args:{isOpened:!0,showCloseButton:!1,title:`Сохранить прогресс?`,description:`Проверьте данные перед продолжением.`,size:`medium`},parameters:{docs:{story:{inline:!1,iframeHeight:300}}}},c={args:{isOpened:!0,title:`Сохранить прогресс?`,description:`Проверьте данные перед продолжением.`},render:e=>({components:{Modal:i,Button:n},setup(){return{args:e}},template:`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
      </Modal>`})},l={args:{isOpened:!0,title:`Сохранить прогресс?`},render:e=>({components:{Modal:i,Button:n},setup(){return{args:e}},template:`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="default">Закрыть</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Modal>`})},u={args:{isOpened:!0,title:`Большая модалка`,size:`large`},render:e=>({components:{Modal:i,Button:n},setup(){return{args:e}},template:`
      <Modal v-bind="args">
        Ширина ограничена выбранным size, но адаптируется под viewport.
        <template #footer>
          <Button mode="default">Закрыть</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Modal>`})},d={args:{title:`Сохранить прогресс?`},render:e=>({components:{Modal:i,Button:n},setup(){let{show:t,close:n,visible:r}=a();return{args:e,show:t,close:n,visible:r}},template:`
      <Button mode="contrast" @click="show">Открыть модалку</Button>
      <Modal v-bind="args" :isOpened="visible" :onClose="close" showCloseButton>
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="default" @click="close">Закрыть</Button>
          <Button mode="contrast" @click="close">Сохранить</Button>
        </template>
      </Modal>`})},f={args:{isOpened:!0,title:`Сохранить прогресс?`},render:e=>({components:{Modal:i,Button:n},setup(){return{args:e}},template:`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="default">Закрыть</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Modal>`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: "Сохранить прогресс?",
    description: "Проверьте данные перед продолжением."
  },
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
      </Modal>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: "Сохранить прогресс?"
  },
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="default">Закрыть</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Modal>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: "Большая модалка",
    size: "large"
  },
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Modal v-bind="args">
        Ширина ограничена выбранным size, но адаптируется под viewport.
        <template #footer>
          <Button mode="default">Закрыть</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Modal>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Сохранить прогресс?"
  },
  render: args => ({
    components: {
      Modal,
      Button
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
      <Button mode="contrast" @click="show">Открыть модалку</Button>
      <Modal v-bind="args" :isOpened="visible" :onClose="close" showCloseButton>
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="default" @click="close">Закрыть</Button>
          <Button mode="contrast" @click="close">Сохранить</Button>
        </template>
      </Modal>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: "Сохранить прогресс?"
  },
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="default">Закрыть</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Modal>\`
  })
}`,...f.parameters?.docs?.source}}},p=[`DefaultModal`,`WithFooter`,`Large`,`WithUseModal`,`LongContent`]})))()}m();export{c as DefaultModal,u as Large,f as LongContent,l as WithFooter,d as WithUseModal,p as __namedExportsOrder,s as default};