import{j as k,e as _,l as h,z as o,A as l,E as m,G as d,r}from"./vue.esm-bundler-0yPEwasB.js";import{M as S}from"./Modal-BotzukxD.js";import{B as f}from"./Button-Lv4bVbPv.js";import{T as A}from"./Text-BlXt9zwE.js";import"./Action-BXFPgI-T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-DuNk9YsD.js";import"./Loader-BtgERiSB.js";const p=k({__name:"Confirm",props:{title:{},description:{},isOpened:{},resolve:{},reject:{},confirmButtonText:{},cancelButtonText:{}},setup(n){const e=n;return(a,c)=>(_(),h(S,{isOpened:e.isOpened.value,title:e.title.value},{footer:o(()=>[l(f,{mode:"ghost",onClick:e.reject.value},{default:o(()=>[m(d(e.cancelButtonText),1)]),_:1},8,["onClick"]),l(f,{mode:"accent",onClick:e.resolve.value},{default:o(()=>[m(d(e.confirmButtonText),1)]),_:1},8,["onClick"])]),default:o(()=>[l(A,{typography:"paragraph-1-regular",mode:"secondary"},{default:o(()=>[m(d(e.description),1)]),_:1})]),_:1},8,["isOpened","title"]))}});p.__docgenInfo={exportName:"default",displayName:"Confirm",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"TSIndexedAccessType"}},{name:"description",required:!0,type:{name:"TSIndexedAccessType"}},{name:"isOpened",required:!0,type:{name:"TSIndexedAccessType"}},{name:"resolve",required:!0,type:{name:"TSIndexedAccessType"}},{name:"reject",required:!0,type:{name:"TSIndexedAccessType"}},{name:"confirmButtonText",required:!0,type:{name:"union",elements:[{name:"TSIndexedAccessType"},{name:"string"}]}},{name:"cancelButtonText",required:!0,type:{name:"union",elements:[{name:"TSIndexedAccessType"},{name:"string"}]}}],sourceFiles:["/home/runner/work/gui/gui/src/components/Confirm/Confirm.vue"]};const D=()=>{const n=r(),e=r(),a=r(),c=r(),s=r(!1),u=r(),v=r(),T=t=>()=>{s.value=!1,t()};return{title:n,description:e,confirm:t=>(n.value=t==null?void 0:t.title,e.value=t==null?void 0:t.description,a.value=(t==null?void 0:t.confirmButtonText)||"Подтвердить",c.value=(t==null?void 0:t.cancelButtonText)||"Отменить",s.value=!0,new Promise((g,B)=>{u.value=T(g),v.value=T(B)})),isOpened:s,resolve:u,reject:v,confirmButtonText:a,cancelButtonText:c}},R={title:"Example/Confirm",component:p,tags:["autodocs"],argTypes:{},args:{}},i={args:{},render:n=>({components:{Confirm:p,Button:f},setup(){const e=r(),{confirm:a,...c}=D();return{args:n,confirmData:c,onClick:async()=>{try{e.value="Ожидание результата...",await a({title:"Вы уверены?",description:"Эти изменения нельзя будет отменить."}),e.value="Подтверждение"}catch{e.value="Отмена"}},result:e}},template:`
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