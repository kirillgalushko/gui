import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$ as n,C as r,D as i,F as a,I as o,L as s,O as c,S as l,W as u,Z as d,a as f,b as p,ct as m,g as h,h as g,mt as _,o as v,q as y,vt as b,x,y as S,z as C}from"./iframe-BRZN4f8M.js";import{n as w,t as T}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as E,t as D}from"./Button-BnZoe71I.js";import{n as O,t as k}from"./Text-BkeTCBMw.js";import{n as A,t as j}from"./Card-B8dKHZSo.js";import{i as M,n as N,o as P,r as F,s as I,t as L}from"./floating-ui.vue-BdPmChXt.js";var R;function z(){return(z=e((()=>{f(),L(),R=c({inheritAttrs:!1,__name:`HoverCard`,props:{open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},placement:{default:`bottom-start`},openDelay:{default:0},closeDelay:{default:100},sideOffset:{default:8},updateKey:{type:[String,Number,Boolean],default:void 0}},emits:[`update:open`],setup(e,{emit:t}){let c=e,f=t,w=m(null),T=m(null),E=m(!1),D=m(null),O=y(),k=S(()=>c.open!==void 0),A=S(()=>!c.disabled&&(k.value?c.open===!0:E.value)),j=S(()=>[P(c.sideOffset),M(),I({padding:8})]),{floatingStyles:L,update:R}=N(w,T,{placement:S(()=>c.placement),middleware:j,whileElementsMounted:F}),z=e=>{k.value||(E.value=e),f(`update:open`,e)},B=()=>{D.value!==null&&(clearTimeout(D.value),D.value=null)},V=()=>{c.disabled||(B(),D.value=setTimeout(()=>{z(!0),o(R)},c.openDelay))},H=()=>{B(),D.value=setTimeout(()=>{z(!1)},c.closeDelay)};return d(A,e=>{e&&o(R)}),d(()=>c.updateKey,()=>{A.value&&o(R)}),s(B),(e,t)=>(C(),r(g,null,[p(`div`,a(_(O),{ref_key:`targetRef`,ref:w,class:`hover-card__trigger`,onFocusin:V,onFocusout:H,onMouseenter:V,onMouseleave:H}),[u(e.$slots,`default`,{},void 0,!0)],16),(C(),x(h,{to:`body`},[i(v,{name:`hover-card-fade`},{default:n(()=>[A.value?(C(),r(`div`,{key:0,ref_key:`floatingRef`,ref:T,class:`hover-card`,style:b(_(L)),role:`dialog`,onMouseenter:V,onMouseleave:H},[u(e.$slots,`content`,{},void 0,!0)],36)):l(``,!0)]),_:3})]))],64))}})})))()}var B;function V(){return(V=e((()=>{z(),w(),B=T(R,[[`__scopeId`,`data-v-36d1af5f`]]),R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`default`,displayName:`HoverCard`,description:``,tags:{},props:[{name:`open`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`placement`,required:!1,type:{name:`HoverCardPlacement`},defaultValue:{func:!1,value:`"bottom-start"`}},{name:`openDelay`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`closeDelay`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`100`}},{name:`sideOffset`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`8`}},{name:`updateKey`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`},{name:`boolean`}]},defaultValue:{func:!1,value:`undefined`}}],events:[{name:`update:open`,type:{names:[`boolean`]}}],slots:[{name:`default`},{name:`content`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/HoverCard/HoverCard.vue`]})})))()}var H=t({Default:()=>W,__namedExportsOrder:()=>G,default:()=>U}),U,W,G;function K(){return(K=e((()=>{V(),E(),A(),O(),U={title:`Components/HoverCard`,component:B},W={render:()=>({components:{Button:D,Card:j,HoverCard:B,Text:k},template:`
      <HoverCard>
        <Button>Наведи курсор</Button>
        <template #content>
          <Card :padding="16" style="width: 280px;">
            <Text typography="title-2">Карточка объекта</Text>
            <Text color="secondary">Короткая дополнительная информация без клика.</Text>
          </Card>
        </template>
      </HoverCard>
    `})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Card,
      HoverCard,
      Text
    },
    template: \`
      <HoverCard>
        <Button>Наведи курсор</Button>
        <template #content>
          <Card :padding="16" style="width: 280px;">
            <Text typography="title-2">Карточка объекта</Text>
            <Text color="secondary">Короткая дополнительная информация без клика.</Text>
          </Card>
        </template>
      </HoverCard>
    \`
  })
}`,...W.parameters?.docs?.source}}},G=[`Default`]})))()}export{H as n,K as r,W as t};