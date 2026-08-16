import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,D as n,E as r,O as i,S as a,a as o,ct as s,mt as c,x as l,y as u,yt as d,z as f}from"./iframe-BRZN4f8M.js";import{n as p,t as m}from"./useViewportBreakpoint-DdkQzRQ0.js";import{n as h,t as g}from"./Button-BnZoe71I.js";import{n as _,t as v}from"./Text-BkeTCBMw.js";import{n as y,t as b}from"./AdaptiveModal-CflfiekL.js";import{n as x,t as S}from"./Stack-rz41IrXi.js";import{n as C,t as w}from"./useConfirm-Cc4wzt-3.js";var T;function E(){return(E=e((()=>{o(),m(),y(),h(),x(),_(),T=i({__name:`Confirm`,props:{title:{},description:{},isOpened:{},resolve:{},secondary:{},reject:{},confirmButtonText:{},secondaryButtonText:{},cancelButtonText:{}},setup(e){let i=e,o=p(),s=u(()=>o.isMobile),m=u(()=>!!c(i.secondaryButtonText)&&!!i.secondary),h=()=>i.secondary?.value();return(e,o)=>(f(),l(b,{isOpened:i.isOpened.value,onClose:i.reject.value,title:i.title.value,showCloseButton:``},{footer:t(()=>[n(S,{stretched:``,direction:s.value?`column`:`row`,justifyContent:`end`,gap:2},{default:t(()=>[n(g,{stretched:s.value,mode:`ghost`,onClick:i.reject.value},{default:t(()=>[r(d(i.cancelButtonText),1)]),_:1},8,[`stretched`,`onClick`]),m.value?(f(),l(g,{key:0,stretched:s.value,mode:`outline`,onClick:h},{default:t(()=>[r(d(i.secondaryButtonText),1)]),_:1},8,[`stretched`])):a(``,!0),n(g,{stretched:s.value,mode:`contrast`,onClick:i.resolve.value},{default:t(()=>[r(d(i.confirmButtonText),1)]),_:1},8,[`stretched`,`onClick`])]),_:1},8,[`direction`])]),default:t(()=>[n(v,{typography:`paragraph-1`,color:`secondary`},{default:t(()=>[r(d(i.description),1)]),_:1})]),_:1},8,[`isOpened`,`onClose`,`title`]))}})})))()}var D;function O(){return(O=e((()=>{E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`Confirm`,description:``,tags:{},props:[{name:`title`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`description`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`isOpened`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`resolve`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`secondary`,required:!1,type:{name:`TSIndexedAccessType`}},{name:`reject`,required:!0,type:{name:`TSIndexedAccessType`}},{name:`confirmButtonText`,required:!0,type:{name:`union`,elements:[{name:`TSIndexedAccessType`},{name:`string`}]}},{name:`secondaryButtonText`,required:!1,type:{name:`union`,elements:[{name:`TSIndexedAccessType`},{name:`string`}]}},{name:`cancelButtonText`,required:!0,type:{name:`union`,elements:[{name:`TSIndexedAccessType`},{name:`string`}]}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Confirm/Confirm.vue`]})})))()}var k,A,j;function M(){return(M=e((()=>{O(),w(),h(),o(),k={title:`Components/Confirm`,component:D,tags:[`!autodocs`],argTypes:{},args:{}},A={args:{},render:e=>({components:{Confirm:D,Button:g},setup(){let t=s(),{confirm:n,...r}=C();return{args:e,confirmData:r,onClick:async()=>{try{t.value=`Ожидание результата...`,await n({title:`Вы уверены?`,description:`Эти изменения нельзя будет отменить.`}),t.value=`Подтверждение`}catch{t.value=`Отмена`}},result:t}},template:`
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