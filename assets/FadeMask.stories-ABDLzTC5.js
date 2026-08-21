import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,O as n,W as r,a as i,ft as a,gt as o,mt as s,pt as c,vt as l,y as u,z as d}from"./iframe-DSPFKwNv.js";import{n as f,t as p}from"./_plugin-vue_export-helper-BqBa3wPr.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{i(),m=8,h={top:`to top`,right:`to right`,bottom:`to bottom`,left:`to left`},g=e=>Math.min(100,Math.max(0,e)),_=e=>Number(e.toFixed(3)),v=({direction:e,easing:t,end:n,start:r})=>{let i=g(Math.min(r,n)),a=g(Math.max(r,n)),o=a-i;if(t===`linear`||o===0)return`linear-gradient(${h[e]}, black ${i}%, transparent ${a}%)`;let s=Array.from({length:9},(e,t)=>{let n=t/m,r=n*n*(3-2*n);return`rgb(0 0 0 / ${_(1-r)}) ${_(i+o*n)}%`});return`linear-gradient(${h[e]}, black 0%, ${s.join(`, `)}, transparent 100%)`},y=(e={})=>({style:u(()=>{let t=e.aspectRatio===void 0?void 0:c(e.aspectRatio);if(e.disabled&&c(e.disabled))return{aspectRatio:t};let n=v({direction:e.direction===void 0?`bottom`:c(e.direction),easing:e.easing===void 0?`smooth`:c(e.easing),end:e.end===void 0?90:c(e.end),start:e.start===void 0?40:c(e.start)});return{aspectRatio:t,maskImage:n,WebkitMaskImage:n}})})})))()}var x;function S(){return(S=e((()=>{i(),b(),x=n({__name:`FadeMask`,props:{aspectRatio:{},direction:{default:`bottom`},disabled:{type:Boolean,default:!1},easing:{default:`smooth`},end:{default:90},inline:{type:Boolean,default:!1},overflow:{type:Boolean,default:!0},start:{default:40}},setup(e){let n=e,{style:i}=y({aspectRatio:a(n,`aspectRatio`),direction:a(n,`direction`),disabled:a(n,`disabled`),easing:a(n,`easing`),end:a(n,`end`),start:a(n,`start`)});return(e,a)=>(d(),t(`div`,{class:o([`FadeMask`,{"FadeMask--inline":n.inline,"FadeMask--overflow-hidden":n.overflow}]),style:l(s(i))},[r(e.$slots,`default`,{},void 0,!0)],6))}})})))()}var C;function w(){return(w=e((()=>{S(),f(),C=p(x,[[`__scopeId`,`data-v-f1e34e4f`]]),x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`FadeMask`,description:``,tags:{},props:[{name:`aspectRatio`,required:!1,type:{name:`string`}},{name:`direction`,required:!1,type:{name:`FadeMaskDirection`},defaultValue:{func:!1,value:`"bottom"`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`easing`,required:!1,type:{name:`FadeMaskEasing`},defaultValue:{func:!1,value:`"smooth"`}},{name:`end`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`90`}},{name:`inline`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`overflow`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`start`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`40`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/FadeMask/FadeMask.vue`]})})))()}var T,E,D;function O(){return(O=e((()=>{w(),T={title:`Components/FadeMask`,component:C,tags:[`autodocs`],args:{direction:`bottom`,disabled:!1,easing:`smooth`,end:90,inline:!1,overflow:!0,start:40},argTypes:{direction:{control:`select`,options:[`top`,`right`,`bottom`,`left`]},easing:{control:`select`,options:[`smooth`,`linear`]},start:{control:{type:`range`,min:0,max:100,step:1}},end:{control:{type:`range`,min:0,max:100,step:1}}}},E={render:e=>({components:{FadeMask:C},setup(){return{args:e}},template:`
      <FadeMask v-bind="args" style="max-width: 420px; height: 280px">
        <div style="display: grid; gap: 12px">
          <div
            v-for="item in 6"
            :key="item"
            style="min-height: 56px; padding: 16px; border: 1px solid var(--border); border-radius: 12px"
          >
            Элемент списка {{ item }}
          </div>
        </div>
      </FadeMask>
    `})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FadeMask
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FadeMask v-bind="args" style="max-width: 420px; height: 280px">
        <div style="display: grid; gap: 12px">
          <div
            v-for="item in 6"
            :key="item"
            style="min-height: 56px; padding: 16px; border: 1px solid var(--border); border-radius: 12px"
          >
            Элемент списка {{ item }}
          </div>
        </div>
      </FadeMask>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`ListPreview`]})))()}O();export{E as ListPreview,D as __namedExportsOrder,T as default};