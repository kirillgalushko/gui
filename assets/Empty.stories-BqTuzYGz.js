import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,O as r,W as i,a,gt as o,x as s,z as c}from"./iframe-DSPFKwNv.js";import{n as l,t as u}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Zt as d,n as f}from"./gui-icons.es-BLyOnAQu.js";import{n as p,t as m}from"./Button-BMCIb-MW.js";import{n as h,t as g}from"./Text-BGOG7_PZ.js";import{n as _,t as v}from"./Empty-vIKck8x-.js";function y(e,t){return c(),n(`div`,x,[i(e.$slots,`default`,{},void 0,!0)])}var b,x,S;function C(){return(C=e((()=>{a(),l(),b={},x={class:`empty-content`},S=u(b,[[`render`,y],[`__scopeId`,`data-v-e16f3802`]]),b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{displayName:`EmptyContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyContent.vue`]})})))()}var w;function T(){return(T=e((()=>{a(),h(),w=r({__name:`EmptyDescription`,setup(e){return(e,n)=>(c(),s(g,{color:`secondary`,Element:`div`,class:`empty-description`},{default:t(()=>[i(e.$slots,`default`,{},void 0,!0)]),_:3}))}})})))()}var E;function D(){return(D=e((()=>{T(),l(),E=u(w,[[`__scopeId`,`data-v-66ba3818`]]),w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:`default`,displayName:`EmptyDescription`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyDescription.vue`]})})))()}function O(e,t){return c(),n(`div`,A,[i(e.$slots,`default`,{},void 0,!0)])}var k,A,j;function M(){return(M=e((()=>{a(),l(),k={},A={class:`empty-header`},j=u(k,[[`render`,O],[`__scopeId`,`data-v-6cc62aa0`]]),k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{displayName:`EmptyHeader`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyHeader.vue`]})})))()}var N;function P(){return(P=e((()=>{a(),N=r({__name:`EmptyMedia`,props:{variant:{default:`default`}},setup(e){let t=e;return(e,r)=>(c(),n(`div`,{class:o([`empty-media`,t.variant])},[i(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var F;function I(){return(I=e((()=>{P(),l(),F=u(N,[[`__scopeId`,`data-v-99988e66`]]),N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:`default`,displayName:`EmptyMedia`,description:``,tags:{},props:[{name:`variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"icon"`}]},defaultValue:{func:!1,value:`"default"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyMedia.vue`]})})))()}var L;function R(){return(R=e((()=>{a(),h(),L=r({__name:`EmptyTitle`,setup(e){return(e,n)=>(c(),s(g,{typography:`title-2`,color:`default`,Element:`div`,class:`empty-title`},{default:t(()=>[i(e.$slots,`default`,{},void 0,!0)]),_:3}))}})})))()}var z;function B(){return(B=e((()=>{R(),l(),z=u(L,[[`__scopeId`,`data-v-90fb60fd`]]),L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:`default`,displayName:`EmptyTitle`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyTitle.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{f(),p(),_(),C(),D(),M(),I(),B(),V={title:`Components/Empty`,component:v,tags:[`autodocs`]},H={render:()=>({components:{Button:m,Empty:v,EmptyContent:S,EmptyDescription:E,EmptyHeader:j,EmptyMedia:F,EmptyTitle:z,IconArchiveOutline:d},template:`
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconArchiveOutline />
          </EmptyMedia>
          <EmptyTitle>Нет данных</EmptyTitle>
          <EmptyDescription>Здесь появятся элементы после добавления.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="small">Добавить</Button>
        </EmptyContent>
      </Empty>
    `})},U={render:()=>({components:{Empty:v,EmptyDescription:E,EmptyHeader:j,EmptyTitle:z},template:`
      <Empty size="small">
        <EmptyHeader>
          <EmptyTitle>Нет событий</EmptyTitle>
          <EmptyDescription>На этот день ничего не запланировано.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    `})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Empty,
      EmptyContent,
      EmptyDescription,
      EmptyHeader,
      EmptyMedia,
      EmptyTitle,
      IconArchiveOutline
    },
    template: \`
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconArchiveOutline />
          </EmptyMedia>
          <EmptyTitle>Нет данных</EmptyTitle>
          <EmptyDescription>Здесь появятся элементы после добавления.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="small">Добавить</Button>
        </EmptyContent>
      </Empty>
    \`
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Empty,
      EmptyDescription,
      EmptyHeader,
      EmptyTitle
    },
    template: \`
      <Empty size="small">
        <EmptyHeader>
          <EmptyTitle>Нет событий</EmptyTitle>
          <EmptyDescription>На этот день ничего не запланировано.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    \`
  })
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Small`]})))()}G();export{H as Default,U as Small,W as __namedExportsOrder,V as default};