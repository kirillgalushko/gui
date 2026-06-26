import{M as n}from"./Modal-BNrNK8WK.js";import{B as l}from"./Button-CDoGiVit.js";import{r as O}from"./vue.esm-bundler-CfgtLz7v.js";import"./Action-Cg7j0koo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconXOutline-Clz5BktS.js";import"./IconAccessibleFilled-CySfqBps.js";import"./Text-DenUDnbq.js";import"./Loader-NZg-vdJJ.js";const C=(t=!1)=>{const e=O(t);return{show:()=>{e.value=!0},close:()=>{e.value=!1},visible:e}},_={title:"Components/Modal",component:n,tags:["autodocs"],argTypes:{isOpened:{control:{type:"boolean"}},title:{control:{type:"text"}},showCloseButton:{control:{type:"boolean"}}},args:{isOpened:!0,showCloseButton:!1,title:"Сохранить прогресс?"},parameters:{docs:{story:{inline:!1,iframeHeight:300}}}},o={args:{isOpened:!0,title:"Сохранить прогресс?"},render:t=>({components:{Modal:n,Button:l},setup(){return{args:t}},template:`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
      </Modal>`})},s={args:{isOpened:!0,title:"Сохранить прогресс?"},render:t=>({components:{Modal:n,Button:l},setup(){return{args:t}},template:`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="ghost">Закрыть</Button>
          <Button mode="accent">Сохранить</Button>
        </template>
      </Modal>`})},r={args:{title:"Сохранить прогресс?"},render:t=>({components:{Modal:n,Button:l},setup(){const{show:e,close:c,visible:d}=C();return{args:t,show:e,close:c,visible:d}},template:`
      <Button mode="accent" @click="show">Открыть модалку</Button>
      <Modal v-bind="args" :isOpened="visible" :onClose="close" showCloseButton>
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="ghost" @click="close">Закрыть</Button>
          <Button mode="accent" @click="close">Сохранить</Button>
        </template>
      </Modal>`})},a={args:{isOpened:!0,title:"Сохранить прогресс?"},render:t=>({components:{Modal:n,Button:l},setup(){return{args:t}},template:`
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
          <Button mode="ghost">Закрыть</Button>
          <Button mode="accent">Сохранить</Button>
        </template>
      </Modal>`})};var u,p,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      </Modal>\`
  })
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,g,B;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <Button mode="ghost">Закрыть</Button>
          <Button mode="accent">Сохранить</Button>
        </template>
      </Modal>\`
  })
}`,...(B=(g=s.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var M,h,f;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
      <Button mode="accent" @click="show">Открыть модалку</Button>
      <Modal v-bind="args" :isOpened="visible" :onClose="close" showCloseButton>
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="ghost" @click="close">Закрыть</Button>
          <Button mode="accent" @click="close">Сохранить</Button>
        </template>
      </Modal>\`
  })
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,v,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          <Button mode="ghost">Закрыть</Button>
          <Button mode="accent">Сохранить</Button>
        </template>
      </Modal>\`
  })
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const E=["DefaultModal","WithFooter","WithUseModal","LongContent"];export{o as DefaultModal,a as LongContent,s as WithFooter,r as WithUseModal,E as __namedExportsOrder,_ as default};
