import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,G as r,O as i,a,tt as o,x as s,yt as c}from"./iframe-Z95Hq5ox.js";import{n as l,t as u}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Zt as d,n as f}from"./gui-icons.es-B0LP8gzK.js";import{n as p,t as m}from"./Button-DEy7MrHI.js";import{n as h,t as g}from"./Text-DUT-SggZ.js";import{n as _,t as v}from"./Empty-CVq2Qs0S.js";function y(e,i){return t(),n(`div`,x,[r(e.$slots,`default`,{},void 0,!0)])}var b,x,S;function C(){return(C=e((()=>{a(),l(),b={},x={class:`empty-content`},S=u(b,[[`render`,y],[`__scopeId`,`data-v-e16f3802`]]),b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{displayName:`EmptyContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyContent.vue`]})})))()}var w;function T(){return(T=e((()=>{a(),h(),w=i({__name:`EmptyDescription`,setup(e){return(e,n)=>(t(),s(g,{color:`secondary`,Element:`div`,class:`empty-description`},{default:o(()=>[r(e.$slots,`default`,{},void 0,!0)]),_:3}))}})})))()}var E;function D(){return(D=e((()=>{T(),l(),E=u(w,[[`__scopeId`,`data-v-66ba3818`]]),w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:`default`,displayName:`EmptyDescription`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyDescription.vue`]})})))()}function O(e,i){return t(),n(`div`,A,[r(e.$slots,`default`,{},void 0,!0)])}var k,A,j;function M(){return(M=e((()=>{a(),l(),k={},A={class:`empty-header`},j=u(k,[[`render`,O],[`__scopeId`,`data-v-6cc62aa0`]]),k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{displayName:`EmptyHeader`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyHeader.vue`]})})))()}var N;function P(){return(P=e((()=>{a(),N=i({__name:`EmptyMedia`,props:{variant:{default:`default`}},setup(e){let i=e;return(e,a)=>(t(),n(`div`,{class:c([`empty-media`,i.variant])},[r(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var F;function I(){return(I=e((()=>{P(),l(),F=u(N,[[`__scopeId`,`data-v-99988e66`]]),N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:`default`,displayName:`EmptyMedia`,description:``,tags:{},props:[{name:`variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"icon"`}]},defaultValue:{func:!1,value:`"default"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyMedia.vue`]})})))()}var L;function R(){return(R=e((()=>{a(),h(),L=i({__name:`EmptyTitle`,setup(e){return(e,n)=>(t(),s(g,{typography:`title-2`,color:`default`,Element:`div`,class:`empty-title`},{default:o(()=>[r(e.$slots,`default`,{},void 0,!0)]),_:3}))}})})))()}var z;function B(){return(B=e((()=>{R(),l(),z=u(L,[[`__scopeId`,`data-v-90fb60fd`]]),L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:`default`,displayName:`EmptyTitle`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Empty/EmptyTitle.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{f(),p(),_(),C(),D(),M(),I(),B(),V={title:`Components/Empty`,component:v,tags:[`autodocs`]},H={render:()=>({components:{Button:m,Empty:v,EmptyContent:S,EmptyDescription:E,EmptyHeader:j,EmptyMedia:F,EmptyTitle:z,IconArchiveOutline:d},template:`
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