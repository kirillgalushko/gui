import{k,o as _,q as h,z as o,A as m,E as l,G as d,r}from"./vue.esm-bundler-CfgtLz7v.js";import{M as S}from"./Modal-BNrNK8WK.js";import{B as f}from"./Button-CDoGiVit.js";import{T as q}from"./Text-DenUDnbq.js";import"./Action-Cg7j0koo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconXOutline-Clz5BktS.js";import"./IconAccessibleFilled-CySfqBps.js";import"./Loader-NZg-vdJJ.js";const p=k({__name:"Confirm",props:{title:{},description:{},isOpened:{},resolve:{},reject:{},confirmButtonText:{},cancelButtonText:{}},setup(n){const e=n;return(a,c)=>(_(),h(S,{isOpened:e.isOpened.value,title:e.title.value},{footer:o(()=>[m(f,{mode:"ghost",onClick:e.reject.value},{default:o(()=>[l(d(e.cancelButtonText),1)]),_:1},8,["onClick"]),m(f,{mode:"accent",onClick:e.resolve.value},{default:o(()=>[l(d(e.confirmButtonText),1)]),_:1},8,["onClick"])]),default:o(()=>[m(q,{typography:"paragraph-1",mode:"secondary"},{default:o(()=>[l(d(e.description),1)]),_:1})]),_:1},8,["isOpened","title"]))}});p.__docgenInfo={exportName:"default",displayName:"Confirm",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"TSIndexedAccessType"}},{name:"description",required:!0,type:{name:"TSIndexedAccessType"}},{name:"isOpened",required:!0,type:{name:"TSIndexedAccessType"}},{name:"resolve",required:!0,type:{name:"TSIndexedAccessType"}},{name:"reject",required:!0,type:{name:"TSIndexedAccessType"}},{name:"confirmButtonText",required:!0,type:{name:"union",elements:[{name:"TSIndexedAccessType"},{name:"string"}]}},{name:"cancelButtonText",required:!0,type:{name:"union",elements:[{name:"TSIndexedAccessType"},{name:"string"}]}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Confirm/Confirm.vue"]};const A=()=>{const n=r(),e=r(),a=r(),c=r(),s=r(!1),u=r(),v=r(),T=t=>()=>{s.value=!1,t()};return{title:n,description:e,confirm:t=>(n.value=t==null?void 0:t.title,e.value=t==null?void 0:t.description,a.value=(t==null?void 0:t.confirmButtonText)||"Подтвердить",c.value=(t==null?void 0:t.cancelButtonText)||"Отменить",s.value=!0,new Promise((B,g)=>{u.value=T(B),v.value=T(g)})),isOpened:s,resolve:u,reject:v,confirmButtonText:a,cancelButtonText:c}},V={title:"Components/Confirm",component:p,tags:["!autodocs"],argTypes:{},args:{}},i={args:{},render:n=>({components:{Confirm:p,Button:f},setup(){const e=r(),{confirm:a,...c}=A();return{args:n,confirmData:c,onClick:async()=>{try{e.value="Ожидание результата...",await a({title:"Вы уверены?",description:"Эти изменения нельзя будет отменить."}),e.value="Подтверждение"}catch{e.value="Отмена"}},result:e}},template:`
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const z=["Default"];export{i as Default,z as __namedExportsOrder,V as default};
