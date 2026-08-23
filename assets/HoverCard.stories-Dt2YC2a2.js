import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$ as n,B as r,C as i,D as a,F as o,G as s,I as c,J as l,L as u,O as d,S as f,_t as p,a as m,b as h,dt as g,g as _,h as v,o as y,tt as b,x,xt as S,y as C}from"./iframe-Z95Hq5ox.js";import{n as w,t as T}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as E,t as D}from"./Button-DEy7MrHI.js";import{n as O,t as k}from"./Card-Dv6sF5an.js";import{n as A,t as j}from"./Text-DUT-SggZ.js";import{i as M,n as N,o as P,r as F,s as I,t as L}from"./floating-ui.vue-BG4icK1h.js";var R;function z(){return(z=e((()=>{m(),L(),R=d({inheritAttrs:!1,__name:`HoverCard`,props:{open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},placement:{default:`bottom-start`},openDelay:{default:0},closeDelay:{default:100},sideOffset:{default:8},updateKey:{type:[String,Number,Boolean],default:void 0}},emits:[`update:open`],setup(e,{emit:t}){let d=e,m=t,w=g(null),T=g(null),E=g(!1),D=g(null),O=l(),k=C(()=>d.open!==void 0),A=C(()=>!d.disabled&&(k.value?d.open===!0:E.value)),j=C(()=>[P(d.sideOffset),M(),I({padding:8})]),{floatingStyles:L,update:R}=N(w,T,{placement:C(()=>d.placement),middleware:j,whileElementsMounted:F}),z=e=>{k.value||(E.value=e),m(`update:open`,e)},B=()=>{D.value!==null&&(clearTimeout(D.value),D.value=null)},V=()=>{d.disabled||(B(),D.value=setTimeout(()=>{z(!0),c(R)},d.openDelay))},H=()=>{B(),D.value=setTimeout(()=>{z(!1)},d.closeDelay)};return n(A,e=>{e&&c(R)}),n(()=>d.updateKey,()=>{A.value&&c(R)}),u(B),(e,t)=>(r(),i(v,null,[h(`div`,o(p(O),{ref_key:`targetRef`,ref:w,class:`hover-card__trigger`,onFocusin:V,onFocusout:H,onMouseenter:V,onMouseleave:H}),[s(e.$slots,`default`,{},void 0,!0)],16),(r(),x(_,{to:`body`},[a(y,{name:`hover-card-fade`},{default:b(()=>[A.value?(r(),i(`div`,{key:0,ref_key:`floatingRef`,ref:T,class:`hover-card`,style:S(p(L)),role:`dialog`,onMouseenter:V,onMouseleave:H},[s(e.$slots,`content`,{},void 0,!0)],36)):f(``,!0)]),_:3})]))],64))}})})))()}var B;function V(){return(V=e((()=>{z(),w(),B=T(R,[[`__scopeId`,`data-v-36d1af5f`]]),R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`default`,displayName:`HoverCard`,description:``,tags:{},props:[{name:`open`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`placement`,required:!1,type:{name:`HoverCardPlacement`},defaultValue:{func:!1,value:`"bottom-start"`}},{name:`openDelay`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`closeDelay`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`100`}},{name:`sideOffset`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`8`}},{name:`updateKey`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`},{name:`boolean`}]},defaultValue:{func:!1,value:`undefined`}}],events:[{name:`update:open`,type:{names:[`boolean`]}}],slots:[{name:`default`},{name:`content`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/HoverCard/HoverCard.vue`]})})))()}var H=t({Default:()=>W,__namedExportsOrder:()=>G,default:()=>U}),U,W,G;function K(){return(K=e((()=>{V(),E(),O(),A(),U={title:`Components/HoverCard`,component:B},W={render:()=>({components:{Button:D,Card:k,HoverCard:B,Text:j},template:`
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