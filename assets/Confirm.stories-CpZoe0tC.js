import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,D as n,E as r,O as i,S as a,St as o,_t as s,a as c,dt as l,tt as u,x as d,y as f}from"./iframe-Z95Hq5ox.js";import{n as p,t as m}from"./useViewportBreakpoint-Dv1nqHdt.js";import{n as h,t as g}from"./Button-DEy7MrHI.js";import{n as _,t as v}from"./Text-DUT-SggZ.js";import{n as y,t as b}from"./AdaptiveModal-D4OvRRxp.js";import{n as x,t as S}from"./Stack-DXsEJR7b.js";import{n as C,t as w}from"./useConfirm-BMA-92iS.js";var T;function E(){return(E=e((()=>{c(),m(),y(),h(),x(),_(),T=i({__name:`Confirm`,props:{title:{},description:{},isOpened:{},resolve:{},secondary:{},reject:{},confirmButtonText:{},secondaryButtonText:{},cancelButtonText:{}},setup(e){let i=e,c=p(),l=f(()=>c.isMobile),m=f(()=>!!s(i.secondaryButtonText)&&!!i.secondary),h=()=>i.secondary?.value();return(e,s)=>(t(),d(b,{isOpened:i.isOpened.value,onClose:i.reject.value,title:i.title.value,showCloseButton:``},{footer:u(()=>[n(S,{stretched:``,direction:l.value?`column`:`row`,justifyContent:`end`,gap:2},{default:u(()=>[n(g,{stretched:l.value,mode:`ghost`,onClick:i.reject.value},{default:u(()=>[r(o(i.cancelButtonText),1)]),_:1},8,[`stretched`,`onClick`]),m.value?(t(),d(g,{key:0,stretched:l.value,mode:`outline`,onClick:h},{default:u(()=>[r(o(i.secondaryButtonText),1)]),_:1},8,[`stretched`])):a(``,!0),n(g,{stretched:l.value,mode:`contrast`,onClick:i.resolve.value},{default:u(()=>[r(o(i.confirmButtonText),1)]),_:1},8,[`stretched`,`onClick`])]),_:1},8,[`direction`])]),default:u(()=>[n(v,{typography:`paragraph-1`,color:`secondary`},{default:u(()=>[r(o(i.description),1)]),_:1})]),_:1},8,[`isOpened`,`onClose`,`title`]))}})})))()}var D;function O(){return(O=e((()=>{E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`Confirm`,description:``,tags:{},props:[{name:`title`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`description`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`isOpened`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`resolve`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`secondary`,required:!1,type:{name:`TSIndexedAccessType`}},{name:`reject`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`confirmButtonText`,required:!0,type:{name:`union`,elements:[{name:`TSIndexedAccessType`},{name:`string`}]}},{name:`secondaryButtonText`,required:!1,type:{name:`union`,elements:[{name:`TSIndexedAccessType`},{name:`string`}]}},{name:`cancelButtonText`,required:!0,type:{name:`union`,elements:[{name:`TSIndexedAccessType`},{name:`string`}]}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Confirm/Confirm.vue`]})})))()}var k,A,j;function M(){return(M=e((()=>{O(),w(),h(),c(),k={title:`Components/Confirm`,component:D,tags:[`!autodocs`],argTypes:{},args:{}},A={args:{},render:e=>({components:{Confirm:D,Button:g},setup(){let t=l(),{confirm:n,...r}=C();return{args:e,confirmData:r,onClick:async()=>{try{t.value=`Ожидание результата...`,await n({title:`Вы уверены?`,description:`Эти изменения нельзя будет отменить.`}),t.value=`Подтверждение`}catch{t.value=`Отмена`}},result:t}},template:`
      <div>
        <Button @click="onClick">Открыть Confirm</Button>
        <div v-if="result">Результат: {{result}}</div>
        <Confirm v-bind="confirmData" />
      </div>
    `})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
          result.value = "Ожидание результата...";
          await confirm({
            title: "Вы уверены?",
            description: "Эти изменения нельзя будет отменить."
          });
          result.value = "Подтверждение";
        } catch {
          result.value = "Отмена";
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
}`,...A.parameters?.docs?.source}}},j=[`Default`]})))()}M();export{A as Default,j as __namedExportsOrder,k as default};