import{e as T,f as S,o as n,b as s,g as a,j as N,n as A,x as u,l as f,y as r,d as B,z as F,A as I,B as $}from"./vue.esm-bundler-JOEmeMwU.js";import{A as q}from"./Action-B5E0OFz3.js";import{I as V}from"./Icon-CRnV5g3n.js";import{T as z}from"./Text-DzYs2-Qz.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as c}from"./Button-jsxqPpL6.js";const E={key:0},L={class:"modal"},W={key:0,class:"modal-title"},j={key:1,class:"modal-close"},G={class:"modal-content"},H={key:2,class:"modal-footer"},k=T({__name:"Modal",props:{isOpened:{type:Boolean},onClose:{type:Function},showCloseButton:{type:Boolean},title:{}},setup(t){const e=t,m=$(),x=S(()=>{const o=m!=null&&m.slots.footer?'"footer footer"':"";return e.title?`
      "title close"
      "content content"
      ${o}
    `:`
     "content close"
      ${o}
  `});return(o,g)=>e.isOpened?(n(),s("div",E,[g[0]||(g[0]=a("div",{class:"modal-bg"},null,-1)),a("div",L,[a("div",{style:N({gridTemplateAreas:x.value}),class:A(["modal-layout",{"with-title":!!e.title,"with-close":!!e.showCloseButton}])},[e.title?(n(),s("div",W,[u(z,{typography:"title-3-semibold"},{default:f(()=>[F(I(e.title),1)]),_:1})])):r("",!0),e.showCloseButton?(n(),s("div",j,[u(q,{onClick:e.onClose},{default:f(()=>[u(V,{name:"x"})]),_:1},8,["onClick"])])):r("",!0),a("div",G,[B(o.$slots,"default",{},void 0,!0)]),o.$slots.footer?(n(),s("div",H,[B(o.$slots,"footer",{},void 0,!0)])):r("",!0)],6)])])):r("",!0)}}),p=D(k,[["__scopeId","data-v-fba0d7bd"]]);k.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"isOpened",required:!1,type:{name:"boolean"}},{name:"onClose",required:!1,type:{name:"TSFunctionType"}},{name:"showCloseButton",required:!1,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Modal/Modal.vue"]};const X={title:"Example/Modal",component:p,tags:["autodocs"],argTypes:{isOpened:{control:{type:"boolean"}},title:{control:{type:"text"}},showCloseButton:{control:{type:"boolean"}}},args:{isOpened:!0,showCloseButton:!1,title:"Сохранить прогресс?"}},l={args:{isOpened:!0,title:"Сохранить прогресс?"},render:t=>({components:{Modal:p,Button:c},setup(){return{args:t}},template:`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
      </Modal>`})},d={args:{isOpened:!0,title:"Сохранить прогресс?"},render:t=>({components:{Modal:p,Button:c},setup(){return{args:t}},template:`
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="ghost">Закрыть</Button>
          <Button mode="accent">Сохранить</Button>
        </template>
      </Modal>`})},i={args:{isOpened:!0,title:"Сохранить прогресс?Сохранить прогресс?Сохранить прогресс?"},render:t=>({components:{Modal:p,Button:c},setup(){return{args:t}},template:`
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
      </Modal>`})};var y,_,M;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(M=(_=l.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var h,v,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,O,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: "Сохранить прогресс?Сохранить прогресс?Сохранить прогресс?"
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
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const Y=["DefaultModal","WithFooter","LongContent"];export{l as DefaultModal,i as LongContent,d as WithFooter,Y as __namedExportsOrder,X as default};
