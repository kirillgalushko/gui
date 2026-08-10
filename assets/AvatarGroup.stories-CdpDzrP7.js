import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,E as r,O as i,V as a,W as o,a as s,vt as c,x as l,y as u,yt as d,z as f}from"./iframe-CgWRWv5U.js";import{n as p,t as m}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{a as h,n as g}from"./gui-icons.es-BhzJzRM3.js";import{i as _,n as v,r as y,t as b}from"./Avatar-C-4ZzI-G.js";import{n as x,t as S}from"./avatar-example-DLQZ0Cl3.js";var C;function w(){return(w=e((()=>{s(),_(),C=i({__name:`AvatarGroup`,props:{overlap:{},shape:{default:`circle`},size:{default:`40px`},surface:{default:`hsl(var(--background))`}},setup(e){let t=e,r=u(()=>t.shape),i=u(()=>t.size),s=u(()=>t.overlap??`calc(${t.size} / 4)`);return a(y,{shape:r,size:i}),(e,r)=>(f(),n(`div`,{class:`avatar-group`,role:`group`,style:c({"--avatar-group-overlap":s.value,"--avatar-group-surface":t.surface})},[o(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var T;function E(){return(E=e((()=>{w(),p(),T=m(C,[[`__scopeId`,`data-v-91e41b6b`]]),C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`AvatarGroup`,description:``,tags:{},props:[{name:`overlap`,required:!1,type:{name:`string`}},{name:`shape`,required:!1,type:{name:`AvatarShape`},defaultValue:{func:!1,value:`"circle"`}},{name:`size`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"40px"`}},{name:`surface`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"hsl(var(--background))"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Avatar/AvatarGroup.vue`]})})))()}var D;function O(){return(O=e((()=>{s(),v(),D=i({__name:`AvatarGroupCount`,props:{ariaLabel:{},color:{},count:{},mode:{default:`secondary`},shape:{},size:{}},setup(e){let n=e,i=u(()=>n.ariaLabel??`Ещё участников: ${n.count}`);return(e,a)=>(f(),l(b,{"aria-label":i.value,color:n.color,mode:n.mode,shape:n.shape,size:n.size},{default:t(()=>[o(e.$slots,`default`,{},()=>[r(`+`+d(n.count),1)])]),_:3},8,[`aria-label`,`color`,`mode`,`shape`,`size`]))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`AvatarGroupCount`,description:``,tags:{},props:[{name:`ariaLabel`,required:!1,type:{name:`string`}},{name:`color`,required:!1,type:{name:`AvatarColor`}},{name:`count`,required:!0,type:{name:`number`}},{name:`mode`,required:!1,type:{name:`AvatarMode`},defaultValue:{func:!1,value:`"secondary"`}},{name:`shape`,required:!1,type:{name:`AvatarShape`}},{name:`size`,required:!1,type:{name:`string`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Avatar/AvatarGroupCount.vue`]})})))()}var j,M,N,P,F;function I(){return(I=e((()=>{g(),x(),v(),E(),A(),j={title:`Components/AvatarGroup`,component:T,tags:[`autodocs`],args:{overlap:void 0,shape:`circle`,size:`48px`,surface:void 0},argTypes:{shape:{control:{type:`select`},options:[`circle`,`square`]}}},M={render:e=>({components:{Avatar:b,AvatarGroup:T,AvatarGroupCount:k,IconUserOutline:h},setup:()=>({args:e,avatarExample:S}),template:`
      <AvatarGroup v-bind="args" aria-label="Участники бронирования">
        <Avatar :src="avatarExample" name="Анна Петрова" />
        <Avatar name="Иван Смирнов" color="blue" />
        <Avatar mode="default"><IconUserOutline /></Avatar>
        <AvatarGroupCount :count="3" />
      </AvatarGroup>
    `})},N={args:{shape:`square`},render:M.render},P={render:e=>({components:{Avatar:b,AvatarGroup:T,AvatarGroupCount:k},setup:()=>({args:e}),template:`
      <AvatarGroup v-bind="args" aria-label="Команда">
        <Avatar name="Анна Петрова" color="violet" />
        <Avatar name="Иван Смирнов" color="blue" size="56px" />
        <AvatarGroupCount :count="5" />
      </AvatarGroup>
    `})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      AvatarGroup,
      AvatarGroupCount,
      IconUserOutline
    },
    setup: () => ({
      args,
      avatarExample
    }),
    template: \`
      <AvatarGroup v-bind="args" aria-label="Участники бронирования">
        <Avatar :src="avatarExample" name="Анна Петрова" />
        <Avatar name="Иван Смирнов" color="blue" />
        <Avatar mode="default"><IconUserOutline /></Avatar>
        <AvatarGroupCount :count="3" />
      </AvatarGroup>
    \`
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    shape: "square"
  },
  render: Default.render
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      AvatarGroup,
      AvatarGroupCount
    },
    setup: () => ({
      args
    }),
    template: \`
      <AvatarGroup v-bind="args" aria-label="Команда">
        <Avatar name="Анна Петрова" color="violet" />
        <Avatar name="Иван Смирнов" color="blue" size="56px" />
        <AvatarGroupCount :count="5" />
      </AvatarGroup>
    \`
  })
}`,...P.parameters?.docs?.source}}},F=[`Default`,`Square`,`CustomAvatarSize`]})))()}I();export{P as CustomAvatarSize,M as Default,N as Square,F as __namedExportsOrder,j as default};