import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,D as r,F as i,G as a,H as o,M as s,O as c,S as l,W as u,Z as ee,_t as d,a as f,b as te,gt as p,h as ne,q as re,tt as ie,x as m,xt as ae,y as h}from"./iframe-Z95Hq5ox.js";import{n as g,t as _}from"./_plugin-vue_export-helper-BqBa3wPr.js";function oe(e){let t=h(()=>!!p(e));return o(y,{loading:t}),t}function v(e,t=!0){let n=s(y,null);return h(()=>(e===void 0?void 0:p(e))??n?.loading.value??t)}var y;function b(){return(b=e((()=>{f(),y=Symbol(`skeleton-context`)})))()}var x;function S(){return(S=e((()=>{f(),b(),x=c({__name:`Skeleton`,props:{Element:{default:`div`},loading:{type:Boolean},animated:{type:Boolean,default:!0},width:{default:`100%`},height:{default:`20px`},radius:{default:`8px`},circle:{type:Boolean}},setup(e){let n=e,r=ee(),o=v(()=>n.loading),s=h(()=>({"--skeleton-width":n.width,"--skeleton-height":n.height,"--skeleton-radius":n.circle?`999px`:n.radius}));return(e,c)=>d(o)?(t(),m(re(n.Element),i({key:0},e.$attrs,{class:[`skeleton`,{animated:n.animated}],style:s.value,"aria-hidden":`true`}),null,16,[`class`,`style`])):d(r).default?a(e.$slots,`default`,{},void 0,!0,1):l(``,!0)}})})))()}var C;function w(){return(w=e((()=>{S(),g(),C=_(x,[[`__scopeId`,`data-v-35c2c53e`]]),x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`Skeleton`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"span"`}]},defaultValue:{func:!1,value:`"div"`}},{name:`loading`,required:!1,type:{name:`boolean`}},{name:`animated`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100%"`}},{name:`height`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"20px"`}},{name:`radius`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"8px"`}},{name:`circle`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/Skeleton.vue`]})})))()}var T;function E(){return(E=e((()=>{f(),b(),T=c({__name:`SkeletonProvider`,props:{loading:{type:Boolean,default:!0}},setup(e){let t=e,n=oe(()=>t.loading);return(e,t)=>a(e.$slots,`default`,{loading:d(n)})}})})))()}var D;function O(){return(O=e((()=>{E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`SkeletonProvider`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],slots:[{name:`default`,scoped:!0,bindings:[{name:`loading`,title:`binding`}]}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/SkeletonProvider.vue`]})})))()}var k;function A(){return(A=e((()=>{f(),w(),k=c({__name:`AvatarSkeleton`,props:{loading:{type:Boolean},size:{default:`40px`},shape:{default:`circle`}},setup(e){let n=e;return(e,r)=>(t(),m(C,{loading:n.loading,width:n.size,height:n.size,radius:n.shape===`square`?`calc(${n.size} / 4)`:`999px`},{default:ie(()=>[a(e.$slots,`default`)]),_:3},8,[`loading`,`width`,`height`,`radius`]))}})})))()}var j;function M(){return(M=e((()=>{A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:`default`,displayName:`AvatarSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"40px"`}},{name:`shape`,required:!1,type:{name:`union`,elements:[{name:`"square"`},{name:`"circle"`}]},defaultValue:{func:!1,value:`"circle"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/AvatarSkeleton.vue`]})})))()}var N;function P(){return(P=e((()=>{f(),w(),N=c({__name:`ButtonSkeleton`,props:{loading:{type:Boolean},size:{default:`large`},width:{default:`96px`},stretched:{type:Boolean},squared:{type:Boolean},rounded:{type:Boolean}},setup(e){let n=e,r={"extra-small":{height:`24px`,radius:`8px`},small:{height:`32px`,radius:`8px`},medium:{height:`36px`,radius:`10px`},large:{height:`40px`,radius:`10px`}},i=h(()=>n.stretched?`100%`:n.squared?r[n.size].height:n.width),o=h(()=>n.rounded?`999px`:r[n.size].radius);return(e,s)=>(t(),m(C,{loading:n.loading,width:i.value,height:r[n.size].height,radius:o.value},{default:ie(()=>[a(e.$slots,`default`)]),_:3},8,[`loading`,`width`,`height`,`radius`]))}})})))()}var F;function I(){return(I=e((()=>{P(),F=N,N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:`default`,displayName:`ButtonSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"large"`}},{name:`width`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"96px"`}},{name:`stretched`,required:!1,type:{name:`boolean`}},{name:`squared`,required:!1,type:{name:`boolean`}},{name:`rounded`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/ButtonSkeleton.vue`]})})))()}var L,R;function z(){return(z=e((()=>{f(),w(),b(),L={key:0,class:`text-skeleton`,"aria-hidden":`true`},R=c({__name:`TextSkeleton`,props:{loading:{type:Boolean},lines:{default:1},width:{default:`100%`},lastLineWidth:{default:`75%`},typography:{default:`paragraph-1`}},setup(e){let r=e,i=v(()=>r.loading),o={"title-1":`18px`,"title-2":`24px`,"title-3":`28px`,"title-4":`32px`,"title-5":`36px`,"title-6":`40px`,"title-7":`48px`,"title-8":`64px`,"title-9":`96px`,"title-10":`132px`,"subtitle-1":`20px`,"subtitle-2":`16px`,"subtitle-3":`22px`,"subtitle-4":`36px`,"paragraph-1":`24px`,"paragraph-2":`24px`,"label-1":`14px`,"label-2":`16px`,"label-3":`18px`,inherit:`1em`},s=h(()=>Array.from({length:r.lines},(e,t)=>t)),c=h(()=>o[r.typography]);function l(e){return Array.isArray(r.width)?r.width[e]??r.width[r.width.length-1]??`100%`:r.lines>1&&e===r.lines-1?r.lastLineWidth:r.width}return(e,r)=>d(i)?(t(),n(`div`,L,[(t(!0),n(ne,null,u(s.value,e=>(t(),m(C,{key:e,loading:!0,width:l(e),height:c.value,radius:`6px`},null,8,[`width`,`height`]))),128))])):a(e.$slots,`default`,{},void 0,!0,1)}})})))()}var B;function V(){return(V=e((()=>{z(),g(),B=_(R,[[`__scopeId`,`data-v-6f7eaa15`]]),R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`default`,displayName:`TextSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`lines`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1`}},{name:`width`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}]}]},defaultValue:{func:!1,value:`"100%"`}},{name:`lastLineWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"75%"`}},{name:`typography`,required:!1,type:{name:`Typography`},defaultValue:{func:!1,value:`"paragraph-1"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/TextSkeleton.vue`]})})))()}var H,U;function W(){return(W=e((()=>{f(),w(),M(),V(),b(),H={class:`card-skeleton-header`},U=c({__name:`CardSkeleton`,props:{loading:{type:Boolean},width:{default:`320px`},padding:{default:8},borderRadius:{default:16},withAvatar:{type:Boolean,default:!0}},setup(e){let i=e,o=v(()=>i.loading),s=h(()=>({width:i.width,padding:`${i.padding}px`,borderRadius:`${i.borderRadius}px`}));return(e,c)=>d(o)?(t(),n(`div`,{key:0,class:`card-skeleton`,style:ae(s.value),"aria-hidden":`true`},[te(`div`,H,[i.withAvatar?(t(),m(j,{key:0})):l(``,!0),r(B,{lines:2,width:[`60%`,`42%`],typography:`label-2`})]),r(C,{height:`120px`,radius:`12px`}),r(B,{lines:3,"last-line-width":`64%`})],4)):a(e.$slots,`default`,{},void 0,!0,1)}})})))()}var G;function K(){return(K=e((()=>{W(),g(),G=_(U,[[`__scopeId`,`data-v-c50f1b3f`]]),U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{exportName:`default`,displayName:`CardSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`width`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"320px"`}},{name:`padding`,required:!1,type:{name:`Padding`},defaultValue:{func:!1,value:`8`}},{name:`borderRadius`,required:!1,type:{name:`BorderRadius`},defaultValue:{func:!1,value:`16`}},{name:`withAvatar`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/CardSkeleton.vue`]})})))()}var q,J;function Y(){return(Y=e((()=>{f(),w(),I(),b(),q={key:0,class:`form-skeleton`,"aria-hidden":`true`},J=c({__name:`FormSkeleton`,props:{loading:{type:Boolean},fields:{default:3},button:{type:Boolean,default:!0}},setup(e){let i=e,o=v(()=>i.loading),s=h(()=>Array.from({length:i.fields},(e,t)=>t));return(e,c)=>d(o)?(t(),n(`div`,q,[(t(!0),n(ne,null,u(s.value,e=>(t(),n(`div`,{key:e,class:`form-skeleton-field`},[r(C,{width:`96px`,height:`16px`,radius:`6px`}),r(C,{height:`40px`,radius:`10px`})]))),128)),i.button?(t(),m(F,{key:0,width:`128px`})):l(``,!0)])):a(e.$slots,`default`,{},void 0,!0,1)}})})))()}var X;function se(){return(se=e((()=>{Y(),g(),X=_(J,[[`__scopeId`,`data-v-da386b99`]]),J.__docgenInfo=Object.assign({displayName:J.name??J.__name},{exportName:`default`,displayName:`FormSkeleton`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`}},{name:`fields`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3`}},{name:`button`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Skeleton/FormSkeleton.vue`]})})))()}var ce,Z,Q,$,le;function ue(){return(ue=e((()=>{w(),O(),M(),I(),K(),se(),V(),ce={title:`Components/Skeleton`,component:C,tags:[`!autodocs`],args:{width:`240px`,height:`40px`,radius:`10px`,animated:!0}},Z={render:e=>({components:{Skeleton:C},setup(){return{args:e}},template:`<Skeleton v-bind="args" />`})},Q={render:()=>({components:{AvatarSkeleton:j,ButtonSkeleton:F,CardSkeleton:G,FormSkeleton:X,TextSkeleton:B},template:`
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
    `})},$={args:{loading:!1},argTypes:{loading:{control:{type:`boolean`}}},render:e=>({components:{SkeletonProvider:D,TextSkeleton:B,ButtonSkeleton:F},setup(){return{args:e}},template:`
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