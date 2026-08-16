import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,O as n,W as r,a as i,vt as a,y as o,z as s}from"./iframe-BRZN4f8M.js";import{n as c,t as l}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as u,t as d}from"./Button-BnZoe71I.js";import{n as f,t as p}from"./Avatar-CHUYUsEA.js";import{a as m,c as h,i as g,n as _,o as v,r as y,s as b,t as x}from"./ItemTitle-BGjpnYSn.js";function S(e,n){return s(),t(`div`,w,[r(e.$slots,`default`,{},void 0,!0)])}var C,w,T;function E(){return(E=e((()=>{i(),c(),C={},w={class:`item-actions`},T=l(C,[[`render`,S],[`__scopeId`,`data-v-481674f9`]]),C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{displayName:`ItemActions`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Item/ItemActions.vue`]})})))()}var D;function O(){return(O=e((()=>{i(),D=n({__name:`ItemMedia`,props:{color:{}},setup(e){let n=e,i=o(()=>n.color===void 0?void 0:{"--item-media-color":`var(--color-${n.color}-500)`});return(e,n)=>(s(),t(`div`,{class:`item-media`,style:a(i.value)},[r(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var k;function A(){return(A=e((()=>{O(),c(),k=l(D,[[`__scopeId`,`data-v-7737ba99`]]),D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`ItemMedia`,description:``,tags:{},props:[{name:`color`,required:!1,type:{name:`Color`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Item/ItemMedia.vue`]})})))()}var j,M,N;function P(){return(P=e((()=>{f(),u(),h(),E(),v(),g(),A(),_(),j={title:`Components/Item`,component:b,tags:[`autodocs`],argTypes:{interactive:{control:{type:`boolean`}},mode:{control:{type:`select`},options:[`card`,`outlined`,`plain`]},padding:{control:{type:`select`},options:[void 0,0,4,8,12,16,20,24,32,36]},size:{control:{type:`select`},options:[`medium`,`small`,`extra-small`]},stretched:{control:{type:`boolean`}}},args:{mode:`card`,padding:void 0,size:`medium`,stretched:!0}},M={render:e=>({components:{Avatar:p,Button:d,Item:b,ItemActions:T,ItemContent:m,ItemDescription:y,ItemMedia:k,ItemTitle:x},setup(){return{args:e}},template:`
      <Item v-bind="args">
        <ItemMedia>
          <Avatar name="Аренда" size="40px" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Аренда</ItemTitle>
          <ItemDescription>Организация</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="small">Открыть</Button>
        </ItemActions>
      </Item>
    `})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      Button,
      Item,
      ItemActions,
      ItemContent,
      ItemDescription,
      ItemMedia,
      ItemTitle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Item v-bind="args">
        <ItemMedia>
          <Avatar name="Аренда" size="40px" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Аренда</ItemTitle>
          <ItemDescription>Организация</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="small">Открыть</Button>
        </ItemActions>
      </Item>
    \`
  })
}`,...M.parameters?.docs?.source}}},N=[`Default`]})))()}P();export{M as Default,N as __namedExportsOrder,j as default};