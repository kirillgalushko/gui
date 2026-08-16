import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,O as n,W as r,a as i,b as a,gt as o,vt as s,y as c,z as l}from"./iframe-BRZN4f8M.js";import{n as u,t as d}from"./_plugin-vue_export-helper-BqBa3wPr.js";var f,p;function m(){return(m=e((()=>{f=e=>Number((1/Math.min(8,Math.max(.5,e))).toFixed(3)),p=({grainSize:e,octaves:t,seed:n})=>{let r=`<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><filter id="noise" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="${f(e)}" numOctaves="${Math.min(6,Math.max(1,Math.round(t)))}" seed="${Math.round(n)}" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#noise)"/></svg>`;return`data:image/svg+xml,${encodeURIComponent(r)}`}})))()}var h,g,_;function v(){return(v=e((()=>{i(),m(),h={key:0,class:`NoiseOverlaySurface`},g={class:`NoiseOverlaySurface__content`},_=n({__name:`NoiseOverlay`,props:{blendMode:{default:`soft-light`},grainSize:{default:1.25},octaves:{default:4},opacity:{default:.08},position:{default:`absolute`},seed:{default:7},zIndex:{default:1}},setup(e){let n=e,i=c(()=>p({grainSize:n.grainSize,octaves:n.octaves,seed:n.seed})),u=c(()=>({"--noise-overlay-blend-mode":n.blendMode,"--noise-overlay-opacity":n.opacity,"--noise-overlay-z-index":n.zIndex,backgroundImage:`url("${i.value}")`}));return(e,i)=>e.$slots.default?(l(),t(`div`,h,[a(`div`,{class:o([`NoiseOverlay`,`NoiseOverlay--${n.position}`]),style:s(u.value),"aria-hidden":`true`},null,6),a(`div`,g,[r(e.$slots,`default`,{},void 0,!0)])])):(l(),t(`div`,{key:1,class:o([`NoiseOverlay`,`NoiseOverlay--${n.position}`]),style:s(u.value),"aria-hidden":`true`},null,6))}})})))()}var y;function b(){return(b=e((()=>{v(),u(),y=d(_,[[`__scopeId`,`data-v-1915625b`]]),_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:`default`,displayName:`NoiseOverlay`,description:``,tags:{},props:[{name:`blendMode`,required:!1,type:{name:`NoiseOverlayBlendMode`},defaultValue:{func:!1,value:`"soft-light"`}},{name:`grainSize`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1.25`}},{name:`octaves`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`4`}},{name:`opacity`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0.08`}},{name:`position`,required:!1,type:{name:`NoiseOverlayPosition`},defaultValue:{func:!1,value:`"absolute"`}},{name:`seed`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`7`}},{name:`zIndex`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/NoiseOverlay/NoiseOverlay.vue`]})})))()}var x,S,C,w;function T(){return(T=e((()=>{b(),x={title:`Components/NoiseOverlay`,component:y,tags:[`autodocs`],args:{blendMode:`soft-light`,grainSize:1.25,octaves:4,opacity:.1,position:`absolute`,seed:7,zIndex:1},argTypes:{blendMode:{control:`select`,options:[`normal`,`overlay`,`soft-light`]},grainSize:{control:{type:`range`,min:.5,max:8,step:.25}},octaves:{control:{type:`range`,min:1,max:6,step:1}},opacity:{control:{type:`range`,min:0,max:.3,step:.01}},position:{control:`select`,options:[`absolute`,`fixed`]},seed:{control:{type:`range`,min:1,max:20,step:1}},zIndex:{control:`number`}}},S={render:e=>({components:{NoiseOverlay:y},setup(){return{args:e}},template:`
      <div style="position: relative; overflow: hidden; min-height: 360px; border-radius: 24px; background: radial-gradient(circle at 50% 20%, #8b5cf6, #111827 68%);">
        <NoiseOverlay v-bind="args" />
      </div>
    `})},C={render:e=>({components:{NoiseOverlay:y},setup(){return{args:e}},template:`
      <NoiseOverlay v-bind="args" :z-index="0">
        <div style="min-height: 360px; padding: 48px; background: radial-gradient(circle at 50% 20%, rgb(139 92 246 / 0.5), transparent 68%);">
          <div style="padding: 32px; border-radius: 20px; background: hsl(var(--card));">
            Шум виден на фоне, но не поверх этой карточки.
          </div>
        </div>
      </NoiseOverlay>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NoiseOverlay
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="position: relative; overflow: hidden; min-height: 360px; border-radius: 24px; background: radial-gradient(circle at 50% 20%, #8b5cf6, #111827 68%);">
        <NoiseOverlay v-bind="args" />
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NoiseOverlay
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <NoiseOverlay v-bind="args" :z-index="0">
        <div style="min-height: 360px; padding: 48px; background: radial-gradient(circle at 50% 20%, rgb(139 92 246 / 0.5), transparent 68%);">
          <div style="padding: 32px; border-radius: 20px; background: hsl(var(--card));">
            Шум виден на фоне, но не поверх этой карточки.
          </div>
        </div>
      </NoiseOverlay>
    \`
  })
}`,...C.parameters?.docs?.source}}},w=[`Gradient`,`BackgroundSurface`]})))()}T();export{C as BackgroundSurface,S as Gradient,w as __namedExportsOrder,x as default};