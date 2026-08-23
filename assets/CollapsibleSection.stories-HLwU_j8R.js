import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,D as r,F as i,G as a,O as o,St as s,Y as c,_t as l,a as u,b as d,dt as f,tt as p,xt as m,y as h}from"./iframe-Z95Hq5ox.js";import{n as g,t as _}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Ut as v,n as y,zt as b}from"./gui-icons.es-B0LP8gzK.js";var x,S;function C(){return(C=e((()=>{u(),x=e=>typeof e==`function`?e():typeof e==`object`?e.value:e??!1,S=(e={})=>{let t=c(),n=f(e.defaultOpened??!1),r=e.opened??n,i=e.id??`collapse-${t}`,a=`${i}-trigger`,o=`${i}-content`,s=h(()=>x(e.disabled)),l=t=>{r.value!==t&&(r.value=t,e.onChange?.(t))},u=()=>l(!0),d=()=>l(!1),p=()=>l(!r.value);return{close:d,collapseProps:{id:o,labelledBy:a,get opened(){return r.value},role:`region`},open:u,opened:r,setOpened:l,toggle:p,triggerProps:{id:a,"aria-controls":o,get"aria-expanded"(){return r.value},get"aria-disabled"(){return s.value||void 0},onClick:()=>{s.value||p()}}}}})))()}var w,T,E,D;function O(){return(O=e((()=>{u(),w=[`data-state`,`aria-hidden`,`aria-labelledby`,`inert`],T={class:`collapse-clip`},E={class:`collapse-content`},D=o({__name:`Collapse`,props:{duration:{default:240},labelledBy:{default:void 0},opened:{type:Boolean}},setup(e){let r=e,i=h(()=>({"--collapse-duration":`${Math.max(0,r.duration)}ms`}));return(e,o)=>(t(),n(`div`,{class:`collapse`,"data-state":r.opened?`open`:`closed`,"aria-hidden":!r.opened,"aria-labelledby":r.labelledBy,inert:!r.opened||void 0,style:m(i.value)},[d(`div`,T,[d(`div`,E,[a(e.$slots,`default`,{},void 0,!0)])])],12,w))}})})))()}var k;function A(){return(A=e((()=>{O(),g(),k=_(D,[[`__scopeId`,`data-v-91598fa6`]]),D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`Collapse`,description:``,tags:{},props:[{name:`duration`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`240`}},{name:`labelledBy`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`undefined`}},{name:`opened`,required:!0,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Collapse/Collapse.vue`]})})))()}var j,M,N,P,F,I;function L(){return(L=e((()=>{u(),y(),C(),A(),j=[`data-disabled`,`data-state`],M=[`disabled`],N={class:`collapsible-section-heading`},P={class:`collapsible-section-icon`,"aria-hidden":`true`},F={class:`collapsible-section-content`},I=o({__name:`CollapsibleSection`,props:{defaultOpened:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:void 0},title:{}},emits:[`change`,`update:modelValue`],setup(e,{emit:o}){let c=e,u=o,m=f(c.defaultOpened),g=h({get:()=>c.modelValue??m.value,set:e=>{c.modelValue===void 0&&(m.value=e),u(`update:modelValue`,e),u(`change`,e)}}),{collapseProps:_,opened:v,triggerProps:y}=S({disabled:h(()=>c.disabled),opened:g});return(e,o)=>(t(),n(`div`,{class:`collapsible-section`,"data-disabled":c.disabled||void 0,"data-state":l(v)?`open`:`closed`},[d(`button`,i(l(y),{class:`collapsible-section-trigger`,type:`button`,disabled:c.disabled}),[d(`span`,N,[d(`span`,P,[a(e.$slots,`icon`,{},void 0,!0)]),d(`span`,null,s(c.title),1)]),r(l(b),{class:`collapsible-section-chevron`,"aria-hidden":`true`})],16,M),r(k,i(l(_),{duration:200}),{default:p(()=>[d(`div`,F,[a(e.$slots,`default`,{},void 0,!0)])]),_:3},16)],8,j))}})})))()}var R;function z(){return(z=e((()=>{L(),g(),R=_(I,[[`__scopeId`,`data-v-4c51a51f`]]),I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:`default`,displayName:`CollapsibleSection`,description:``,tags:{},props:[{name:`defaultOpened`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`modelValue`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`title`,required:!0,type:{name:`string`}}],events:[{name:`change`,type:{names:[`boolean`]}},{name:`update:modelValue`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/CollapsibleSection/CollapsibleSection.vue`]})})))()}var B,V,H;function U(){return(U=e((()=>{y(),z(),B={title:`Components/CollapsibleSection`,component:R,tags:[`autodocs`],args:{defaultOpened:!0,disabled:!1,title:`Данные бронирования`},argTypes:{defaultOpened:{control:{type:`boolean`}},disabled:{control:{type:`boolean`}}}},V={render:e=>({components:{CollapsibleSection:R,IconCalendarOutline:v},setup(){return{args:e}},template:`
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