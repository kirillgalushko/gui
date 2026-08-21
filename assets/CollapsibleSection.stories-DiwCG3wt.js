import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,F as i,J as a,O as o,W as s,a as c,b as l,ct as u,mt as d,vt as f,y as p,yt as m,z as h}from"./iframe-DSPFKwNv.js";import{n as g,t as _}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Ut as v,n as y,zt as b}from"./gui-icons.es-BLyOnAQu.js";var x,S;function C(){return(C=e((()=>{c(),x=e=>typeof e==`function`?e():typeof e==`object`?e.value:e??!1,S=(e={})=>{let t=a(),n=u(e.defaultOpened??!1),r=e.opened??n,i=e.id??`collapse-${t}`,o=`${i}-trigger`,s=`${i}-content`,c=p(()=>x(e.disabled)),l=t=>{r.value!==t&&(r.value=t,e.onChange?.(t))},d=()=>l(!0),f=()=>l(!1),m=()=>l(!r.value);return{close:f,collapseProps:{id:s,labelledBy:o,get opened(){return r.value},role:`region`},open:d,opened:r,setOpened:l,toggle:m,triggerProps:{id:o,"aria-controls":s,get"aria-expanded"(){return r.value},get"aria-disabled"(){return c.value||void 0},onClick:()=>{c.value||m()}}}}})))()}var w,T,E,D;function O(){return(O=e((()=>{c(),w=[`data-state`,`aria-hidden`,`aria-labelledby`,`inert`],T={class:`collapse-clip`},E={class:`collapse-content`},D=o({__name:`Collapse`,props:{duration:{default:240},labelledBy:{default:void 0},opened:{type:Boolean}},setup(e){let t=e,r=p(()=>({"--collapse-duration":`${Math.max(0,t.duration)}ms`}));return(e,i)=>(h(),n(`div`,{class:`collapse`,"data-state":t.opened?`open`:`closed`,"aria-hidden":!t.opened,"aria-labelledby":t.labelledBy,inert:!t.opened||void 0,style:f(r.value)},[l(`div`,T,[l(`div`,E,[s(e.$slots,`default`,{},void 0,!0)])])],12,w))}})})))()}var k;function A(){return(A=e((()=>{O(),g(),k=_(D,[[`__scopeId`,`data-v-91598fa6`]]),D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`Collapse`,description:``,tags:{},props:[{name:`duration`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`240`}},{name:`labelledBy`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`undefined`}},{name:`opened`,required:!0,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Collapse/Collapse.vue`]})})))()}var j,M,N,P,F,I;function L(){return(L=e((()=>{c(),y(),C(),A(),j=[`data-disabled`,`data-state`],M=[`disabled`],N={class:`collapsible-section-heading`},P={class:`collapsible-section-icon`,"aria-hidden":`true`},F={class:`collapsible-section-content`},I=o({__name:`CollapsibleSection`,props:{defaultOpened:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:void 0},title:{}},emits:[`change`,`update:modelValue`],setup(e,{emit:a}){let o=e,c=a,f=u(o.defaultOpened),g=p({get:()=>o.modelValue??f.value,set:e=>{o.modelValue===void 0&&(f.value=e),c(`update:modelValue`,e),c(`change`,e)}}),{collapseProps:_,opened:v,triggerProps:y}=S({disabled:p(()=>o.disabled),opened:g});return(e,a)=>(h(),n(`div`,{class:`collapsible-section`,"data-disabled":o.disabled||void 0,"data-state":d(v)?`open`:`closed`},[l(`button`,i(d(y),{class:`collapsible-section-trigger`,type:`button`,disabled:o.disabled}),[l(`span`,N,[l(`span`,P,[s(e.$slots,`icon`,{},void 0,!0)]),l(`span`,null,m(o.title),1)]),r(d(b),{class:`collapsible-section-chevron`,"aria-hidden":`true`})],16,M),r(k,i(d(_),{duration:200}),{default:t(()=>[l(`div`,F,[s(e.$slots,`default`,{},void 0,!0)])]),_:3},16)],8,j))}})})))()}var R;function z(){return(z=e((()=>{L(),g(),R=_(I,[[`__scopeId`,`data-v-4c51a51f`]]),I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:`default`,displayName:`CollapsibleSection`,description:``,tags:{},props:[{name:`defaultOpened`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`modelValue`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`title`,required:!0,type:{name:`string`}}],events:[{name:`change`,type:{names:[`boolean`]}},{name:`update:modelValue`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/CollapsibleSection/CollapsibleSection.vue`]})})))()}var B,V,H;function U(){return(U=e((()=>{y(),z(),B={title:`Components/CollapsibleSection`,component:R,tags:[`autodocs`],args:{defaultOpened:!0,disabled:!1,title:`Данные бронирования`},argTypes:{defaultOpened:{control:{type:`boolean`}},disabled:{control:{type:`boolean`}}}},V={render:e=>({components:{CollapsibleSection:R,IconCalendarOutline:v},setup(){return{args:e}},template:`
      <CollapsibleSection v-bind="args">
        <template #icon>
          <IconCalendarOutline />
        </template>
        Даты, гость и стоимость бронирования.
      </CollapsibleSection>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CollapsibleSection,
      IconCalendarOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CollapsibleSection v-bind="args">
        <template #icon>
          <IconCalendarOutline />
        </template>
        Даты, гость и стоимость бронирования.
      </CollapsibleSection>
    \`
  })
}`,...V.parameters?.docs?.source}}},H=[`Default`]})))()}U();export{V as Default,H as __namedExportsOrder,B as default};