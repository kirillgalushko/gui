import{e as k,o as _,g as h,v as o,x as l,C as m,D as d,A as r}from"./vue.esm-bundler-vqfIXXGK.js";import{M as D}from"./Modal-CBQL3P5n.js";import{B as f}from"./Button-DlHwlVlZ.js";import{T as S}from"./Text-BOfx6d1m.js";import"./Action-D-zwGIQA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-DoDBWsCq.js";import"./Loader-DrzpIKbH.js";const p=k({__name:"Confirm",props:{title:{},description:{},isOpened:{},resolve:{},reject:{},confirmButtonText:{},cancelButtonText:{}},setup(n){const e=n;return(a,c)=>(_(),h(D,{isOpened:e.isOpened.value,title:e.title.value},{footer:o(()=>[l(f,{mode:"ghost",onClick:e.reject.value},{default:o(()=>[m(d(e.cancelButtonText),1)]),_:1},8,["onClick"]),l(f,{mode:"accent",onClick:e.resolve.value},{default:o(()=>[m(d(e.confirmButtonText),1)]),_:1},8,["onClick"])]),default:o(()=>[l(S,{typography:"paragraph-1-regular",mode:"secondary"},{default:o(()=>[m(d(e.description),1)]),_:1})]),_:1},8,["isOpened","title"]))}});p.__docgenInfo={exportName:"default",displayName:"Confirm",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"TSIndexedAccessType"}},{name:"description",required:!0,type:{name:"TSIndexedAccessType"}},{name:"isOpened",required:!0,type:{name:"TSIndexedAccessType"}},{name:"resolve",required:!0,type:{name:"TSIndexedAccessType"}},{name:"reject",required:!0,type:{name:"TSIndexedAccessType"}},{name:"confirmButtonText",required:!0,type:{name:"union",elements:[{name:"TSIndexedAccessType"},{name:"string"}]}},{name:"cancelButtonText",required:!0,type:{name:"union",elements:[{name:"TSIndexedAccessType"},{name:"string"}]}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Confirm/Confirm.vue"]};const A=()=>{const n=r(),e=r(),a=r(),c=r(),s=r(!1),u=r(),v=r(),T=t=>()=>{s.value=!1,t()};return{title:n,description:e,confirm:t=>(n.value=t==null?void 0:t.title,e.value=t==null?void 0:t.description,a.value=(t==null?void 0:t.confirmButtonText)||"Подтвердить",c.value=(t==null?void 0:t.cancelButtonText)||"Отменить",s.value=!0,new Promise((g,B)=>{u.value=T(g),v.value=T(B)})),isOpened:s,resolve:u,reject:v,confirmButtonText:a,cancelButtonText:c}},R={title:"Example/Confirm",component:p,tags:["autodocs"],argTypes:{},args:{}},i={args:{},render:n=>({components:{Confirm:p,Button:f},setup(){const e=r(),{confirm:a,...c}=A();return{args:n,confirmData:c,onClick:async()=>{try{e.value="Ожидание результата...",await a({title:"Вы уверены?",description:"Эти изменения нельзя будет отменить."}),e.value="Подтверждение"}catch{e.value="Отмена"}},result:e}},template:`
      <div>
        <Button @click="onClick">Открыть Confirm</Button>
        <div v-if="result">Результат: {{result}}</div>
        <Confirm v-bind="confirmData" />
      </div>
    `})};var C,x,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Confirm,
      Button
    },
    setup() {
      const result = ref();
      const {
        confirm,
        ...confirmData
      } = useConfirm();
      const onClick = async () => {
        try {
          result.value = 'Ожидание результата...';
          await confirm({
            title: 'Вы уверены?',
            description: 'Эти изменения нельзя будет отменить.'
          });
          result.value = 'Подтверждение';
        } catch (e) {
          result.value = 'Отмена';
        }
      };
      return {
        args,
        confirmData,
        onClick,
        result
      };
    },
    template: \`
      <div>
        <Button @click="onClick">Открыть Confirm</Button>
        <div v-if="result">Результат: {{result}}</div>
        <Confirm v-bind="confirmData" />
      </div>
    \`
  })
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const V=["Default"];export{i as Default,V as __namedExportsOrder,R as default};
