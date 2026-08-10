import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,F as i,K as a,M as o,O as s,S as c,U as ee,V as te,W as l,X as ne,a as u,b as re,h as ie,mt as d,pt as ae,vt as oe,x as f,y as p,z as m}from"./iframe-CgWRWv5U.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BqBa3wPr.js";function se(e){let t=p(()=>!!ae(e));return te(v,{loading:t}),t}function _(e,t=!0){let n=o(v,null);return p(()=>(e===void 0?void 0:ae(e))??n?.loading.value??t)}var v;function y(){return(y=e((()=>{u(),v=Symbol(`skeleton-context`)})))()}var b;function x(){return(x=e((()=>{u(),y(),b=s({__name:`Skeleton`,props:{Element:{default:`div`},loading:{type:Boolean},animated:{type:Boolean,default:!0},width:{default:`100%`},height:{default:`20px`},radius:{default:`8px`},circle:{type:Boolean}},setup(e){let t=e,n=ne(),r=_(()=>t.loading),o=p(()=>({"--skeleton-width":t.width,"--skeleton-height":t.height,"--skeleton-radius":t.circle?`999px`:t.radius}));return(e,s)=>d(r)?(m(),f(a(t.Element),i({key:0},e.$attrs,{class:[`skeleton`,{animated:t.animated}],style:o.value,"aria-hidden":`true`}),null,16,[`class`,`style`])):d(n).default?l(e.$slots,`default`,{},void 0,!0,1):c(``,!0)}})})))()}var S;function C(){return(C=e((()=>{x(),h(),S=g(b,[[`__scopeId`,`data-v-35c2c53e`]]),b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:`default`,displayName:`Skeleton`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"span"`}]},defaultValue:{func:!1,value:`"div"`}},{name:`loading`,required:!1,type:{name:`boolean`}},{name:`animated`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100%"`}},{name:`height`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"20px"`}},{name:`radius`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"8px"`}},{name:`circle`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/Skeleton.vue`]})})))()}var w;function T(){return(T=e((()=>{u(),y(),w=s({__name:`SkeletonProvider`,props:{loading:{type:Boolean,default:!0}},setup(e){let t=e,n=se(()=>t.loading);return(e,t)=>l(e.$slots,`default`,{loading:d(n)})}})})))()}var E;function D(){return(D=e((()=>{T(),E=w,w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:`default`,displayName:`SkeletonProvider`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],slots:[{name:`default`,scoped:!0,bindings:[{name:`loading`,title:`binding`}]}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/SkeletonProvider.vue`]})})))()}var O;function k(){return(k=e((()=>{u(),C(),O=s({__name:`AvatarSkeleton`,props:{loading:{type:Boolean},size:{default:`40px`},shape:{default:`circle`}},setup(e){let n=e;return(e,r)=>(m(),f(S,{loading:n.loading,width:n.size,height:n.size,radius:n.shape===`square`?`calc(${n.size} / 4)`:`999px`},{default:t(()=>[l(e.$slots,`default`)]),_:3},8,[`loading`,`width`,`height`,`radius`]))}})})))()}var A;function j(){return(j=e((()=>{k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{exportName:`default`,displayName:`AvatarSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"40px"`}},{name:`shape`,required:!1,type:{name:`union`,elements:[{name:`"square"`},{name:`"circle"`}]},defaultValue:{func:!1,value:`"circle"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/AvatarSkeleton.vue`]})})))()}var M;function N(){return(N=e((()=>{u(),C(),M=s({__name:`ButtonSkeleton`,props:{loading:{type:Boolean},size:{default:`large`},width:{default:`96px`},stretched:{type:Boolean},squared:{type:Boolean},rounded:{type:Boolean}},setup(e){let n=e,r={"extra-small":{height:`24px`,radius:`8px`},small:{height:`32px`,radius:`8px`},medium:{height:`36px`,radius:`10px`},large:{height:`40px`,radius:`10px`}},i=p(()=>n.stretched?`100%`:n.squared?r[n.size].height:n.width),a=p(()=>n.rounded?`999px`:r[n.size].radius);return(e,o)=>(m(),f(S,{loading:n.loading,width:i.value,height:r[n.size].height,radius:a.value},{default:t(()=>[l(e.$slots,`default`)]),_:3},8,[`loading`,`width`,`height`,`radius`]))}})})))()}var P;function F(){return(F=e((()=>{N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{exportName:`default`,displayName:`ButtonSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"large"`}},{name:`width`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"96px"`}},{name:`stretched`,required:!1,type:{name:`boolean`}},{name:`squared`,required:!1,type:{name:`boolean`}},{name:`rounded`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/ButtonSkeleton.vue`]})})))()}var I,L;function R(){return(R=e((()=>{u(),C(),y(),I={key:0,class:`text-skeleton`,"aria-hidden":`true`},L=s({__name:`TextSkeleton`,props:{loading:{type:Boolean},lines:{default:1},width:{default:`100%`},lastLineWidth:{default:`75%`},typography:{default:`paragraph-1`}},setup(e){let t=e,r=_(()=>t.loading),i={"title-1":`18px`,"title-2":`24px`,"title-3":`28px`,"title-4":`32px`,"title-5":`36px`,"title-6":`40px`,"title-7":`48px`,"title-8":`64px`,"title-9":`96px`,"title-10":`132px`,"subtitle-1":`20px`,"subtitle-2":`16px`,"subtitle-3":`22px`,"subtitle-4":`36px`,"paragraph-1":`24px`,"paragraph-2":`24px`,"label-1":`14px`,"label-2":`16px`,"label-3":`18px`,inherit:`1em`},a=p(()=>Array.from({length:t.lines},(e,t)=>t)),o=p(()=>i[t.typography]);function s(e){return Array.isArray(t.width)?t.width[e]??t.width[t.width.length-1]??`100%`:t.lines>1&&e===t.lines-1?t.lastLineWidth:t.width}return(e,t)=>d(r)?(m(),n(`div`,I,[(m(!0),n(ie,null,ee(a.value,e=>(m(),f(S,{key:e,loading:!0,width:s(e),height:o.value,radius:`6px`},null,8,[`width`,`height`]))),128))])):l(e.$slots,`default`,{},void 0,!0,1)}})})))()}var z;function B(){return(B=e((()=>{R(),h(),z=g(L,[[`__scopeId`,`data-v-6f7eaa15`]]),L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:`default`,displayName:`TextSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`lines`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1`}},{name:`width`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}]}]},defaultValue:{func:!1,value:`"100%"`}},{name:`lastLineWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"75%"`}},{name:`typography`,required:!1,type:{name:`Typography`},defaultValue:{func:!1,value:`"paragraph-1"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/TextSkeleton.vue`]})})))()}var V,H;function U(){return(U=e((()=>{u(),C(),j(),B(),y(),V={class:`card-skeleton-header`},H=s({__name:`CardSkeleton`,props:{loading:{type:Boolean},width:{default:`320px`},padding:{default:8},borderRadius:{default:16},withAvatar:{type:Boolean,default:!0}},setup(e){let t=e,i=_(()=>t.loading),a=p(()=>({width:t.width,padding:`${t.padding}px`,borderRadius:`${t.borderRadius}px`}));return(e,o)=>d(i)?(m(),n(`div`,{key:0,class:`card-skeleton`,style:oe(a.value),"aria-hidden":`true`},[re(`div`,V,[t.withAvatar?(m(),f(A,{key:0})):c(``,!0),r(z,{lines:2,width:[`60%`,`42%`],typography:`label-2`})]),r(S,{height:`120px`,radius:`12px`}),r(z,{lines:3,"last-line-width":`64%`})],4)):l(e.$slots,`default`,{},void 0,!0,1)}})})))()}var W;function G(){return(G=e((()=>{U(),h(),W=g(H,[[`__scopeId`,`data-v-c50f1b3f`]]),H.__docgenInfo=Object.assign({displayName:H.name??H.__name},{exportName:`default`,displayName:`CardSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`width`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"320px"`}},{name:`padding`,required:!1,type:{name:`Padding`},defaultValue:{func:!1,value:`8`}},{name:`borderRadius`,required:!1,type:{name:`BorderRadius`},defaultValue:{func:!1,value:`16`}},{name:`withAvatar`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/CardSkeleton.vue`]})})))()}var K,q;function J(){return(J=e((()=>{u(),C(),F(),y(),K={key:0,class:`form-skeleton`,"aria-hidden":`true`},q=s({__name:`FormSkeleton`,props:{loading:{type:Boolean},fields:{default:3},button:{type:Boolean,default:!0}},setup(e){let t=e,i=_(()=>t.loading),a=p(()=>Array.from({length:t.fields},(e,t)=>t));return(e,o)=>d(i)?(m(),n(`div`,K,[(m(!0),n(ie,null,ee(a.value,e=>(m(),n(`div`,{key:e,class:`form-skeleton-field`},[r(S,{width:`96px`,height:`16px`,radius:`6px`}),r(S,{height:`40px`,radius:`10px`})]))),128)),t.button?(m(),f(P,{key:0,width:`128px`})):c(``,!0)])):l(e.$slots,`default`,{},void 0,!0,1)}})})))()}var Y;function X(){return(X=e((()=>{J(),h(),Y=g(q,[[`__scopeId`,`data-v-da386b99`]]),q.__docgenInfo=Object.assign({displayName:q.name??q.__name},{exportName:`default`,displayName:`FormSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`fields`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3`}},{name:`button`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/FormSkeleton.vue`]})})))()}var ce,Z,Q,$,le;function ue(){return(ue=e((()=>{C(),D(),j(),F(),G(),X(),B(),ce={title:`Components/Skeleton`,component:S,tags:[`!autodocs`],args:{width:`240px`,height:`40px`,radius:`10px`,animated:!0}},Z={render:e=>({components:{Skeleton:S},setup(){return{args:e}},template:`<Skeleton v-bind="args" />`})},Q={render:()=>({components:{AvatarSkeleton:A,ButtonSkeleton:P,CardSkeleton:W,FormSkeleton:Y,TextSkeleton:z},template:`
      <div style="display: grid; gap: var(--gap-6); max-width: 480px;">
        <div style="display: flex; align-items: center; gap: var(--gap-3);">
          <AvatarSkeleton />
          <TextSkeleton :lines="2" :width="['180px', '120px']" typography="label-2" />
        </div>
        <div style="display: flex; gap: var(--gap-2);">
          <ButtonSkeleton size="extra-small" />
          <ButtonSkeleton size="small" />
          <ButtonSkeleton size="medium" />
          <ButtonSkeleton size="large" />
        </div>
        <CardSkeleton />
        <FormSkeleton />
      </div>
    `})},$={args:{loading:!1},argTypes:{loading:{control:{type:`boolean`}}},render:e=>({components:{SkeletonProvider:E,TextSkeleton:z,ButtonSkeleton:P},setup(){return{args:e}},template:`
      <SkeletonProvider :loading="args.loading">
        <div style="display: grid; gap: var(--gap-3); max-width: 320px;">
          <TextSkeleton :lines="2">
            <p style="margin: 0; color: hsl(var(--foreground));">Контент отображается, когда loading выключен.</p>
          </TextSkeleton>
          <ButtonSkeleton>
            <button style="height: 40px; border-radius: 10px;">Готово</button>
          </ButtonSkeleton>
        </div>
      </SkeletonProvider>
    `})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Skeleton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Skeleton v-bind="args" />\`
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AvatarSkeleton,
      ButtonSkeleton,
      CardSkeleton,
      FormSkeleton,
      TextSkeleton
    },
    template: \`
      <div style="display: grid; gap: var(--gap-6); max-width: 480px;">
        <div style="display: flex; align-items: center; gap: var(--gap-3);">
          <AvatarSkeleton />
          <TextSkeleton :lines="2" :width="['180px', '120px']" typography="label-2" />
        </div>
        <div style="display: flex; gap: var(--gap-2);">
          <ButtonSkeleton size="extra-small" />
          <ButtonSkeleton size="small" />
          <ButtonSkeleton size="medium" />
          <ButtonSkeleton size="large" />
        </div>
        <CardSkeleton />
        <FormSkeleton />
      </div>
    \`
  })
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false
  },
  argTypes: {
    loading: {
      control: {
        type: "boolean"
      }
    }
  },
  render: args => ({
    components: {
      SkeletonProvider,
      TextSkeleton,
      ButtonSkeleton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <SkeletonProvider :loading="args.loading">
        <div style="display: grid; gap: var(--gap-3); max-width: 320px;">
          <TextSkeleton :lines="2">
            <p style="margin: 0; color: hsl(var(--foreground));">Контент отображается, когда loading выключен.</p>
          </TextSkeleton>
          <ButtonSkeleton>
            <button style="height: 40px; border-radius: 10px;">Готово</button>
          </ButtonSkeleton>
        </div>
      </SkeletonProvider>
    \`
  })
}`,...$.parameters?.docs?.source}}},le=[`Default`,`Presets`,`Provider`]})))()}ue();export{Z as Default,Q as Presets,$ as Provider,le as __namedExportsOrder,ce as default};