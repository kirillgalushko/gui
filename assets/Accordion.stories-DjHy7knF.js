import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,D as r,G as i,H as a,M as o,O as s,Y as c,_t as l,a as u,b as d,dt as f,y as p}from"./iframe-Z95Hq5ox.js";import{n as m,t as h}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as g,zt as _}from"./gui-icons.es-B0LP8gzK.js";var v,y;function b(){return(b=e((()=>{v=Symbol(`accordion`),y=Symbol(`accordion-item`)})))()}var x,S;function C(){return(C=e((()=>{u(),b(),x={class:`accordion`},S=s({__name:`Accordion`,props:{defaultValue:{default:()=>[]},disabled:{type:Boolean,default:!1},modelValue:{default:void 0},multiple:{type:Boolean,default:!1}},emits:[`change`,`update:modelValue`],setup(e,{emit:r}){let o=e,s=r,c=f([...o.defaultValue]),l=p(()=>o.modelValue??c.value),u=e=>{o.modelValue===void 0&&(c.value=e),s(`update:modelValue`,e),s(`change`,e)};return a(v,{disabled:p(()=>o.disabled),isOpen:e=>l.value.includes(e),toggle:e=>{if(o.disabled)return;let t=l.value.includes(e),n=o.multiple?t?l.value.filter(t=>t!==e):[...l.value,e]:t?[]:[e];u(n)}}),(e,r)=>(t(),n(`div`,x,[i(e.$slots,`default`,{},void 0,!0)]))}})})))()}var w;function T(){return(T=e((()=>{C(),m(),w=h(S,[[`__scopeId`,`data-v-287a1f04`]]),S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:`default`,displayName:`Accordion`,description:``,tags:{},props:[{name:`defaultValue`,required:!1,type:{name:`Array`,elements:[{name:`string`}]},defaultValue:{func:!1,value:`() => []`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`modelValue`,required:!1,type:{name:`Array`,elements:[{name:`string`}]},defaultValue:{func:!1,value:`undefined`}},{name:`multiple`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`change`,type:{names:[`Array`],elements:[{name:`string`}]}},{name:`update:modelValue`,type:{names:[`Array`],elements:[{name:`string`}]}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Accordion/Accordion.vue`]})})))()}var E,D,O,k;function A(){return(A=e((()=>{u(),b(),E=[`id`,`aria-hidden`,`aria-labelledby`,`data-state`],D={class:`accordion-content-clip`},O={class:`accordion-content-inner`},k=s({__name:`AccordionContent`,setup(e){let r=o(y);if(r===void 0)throw Error(`AccordionContent must be used inside AccordionItem`);return(e,a)=>(t(),n(`div`,{id:l(r).contentId,class:`accordion-content`,role:`region`,"aria-hidden":!l(r).isOpen.value,"aria-labelledby":l(r).triggerId,"data-state":l(r).isOpen.value?`open`:`closed`},[d(`div`,D,[d(`div`,O,[i(e.$slots,`default`,{},void 0,!0)])])],8,E))}})})))()}var j;function M(){return(M=e((()=>{A(),m(),j=h(k,[[`__scopeId`,`data-v-904814b2`]]),k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:`default`,displayName:`AccordionContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Accordion/AccordionContent.vue`]})})))()}var N,P;function F(){return(F=e((()=>{u(),b(),N=[`data-disabled`,`data-state`],P=s({__name:`AccordionItem`,props:{disabled:{type:Boolean,default:!1},value:{}},setup(e){let r=e,s=o(v);if(s===void 0)throw Error(`AccordionItem must be used inside Accordion`);let l=c(),u=p(()=>s.isOpen(r.value)),d=p(()=>s.disabled.value||r.disabled);return a(y,{contentId:`${l}-content`,disabled:d,isOpen:u,toggle:()=>{d.value||s.toggle(r.value)},triggerId:`${l}-trigger`}),(e,r)=>(t(),n(`div`,{class:`accordion-item`,"data-disabled":d.value||void 0,"data-state":u.value?`open`:`closed`},[i(e.$slots,`default`,{},void 0,!0)],8,N))}})})))()}var I;function L(){return(L=e((()=>{F(),m(),I=h(P,[[`__scopeId`,`data-v-2d683002`]]),P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:`default`,displayName:`AccordionItem`,description:``,tags:{},props:[{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`value`,required:!0,type:{name:`string`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Accordion/AccordionItem.vue`]})})))()}var R,z,B;function V(){return(V=e((()=>{u(),g(),b(),R=[`id`,`aria-controls`,`aria-expanded`,`disabled`,`data-state`],z={class:`accordion-trigger-content`},B=s({__name:`AccordionTrigger`,setup(e){let a=o(y);if(a===void 0)throw Error(`AccordionTrigger must be used inside AccordionItem`);return(e,o)=>(t(),n(`button`,{id:l(a).triggerId,class:`accordion-trigger`,type:`button`,"aria-controls":l(a).contentId,"aria-expanded":l(a).isOpen.value,disabled:l(a).disabled.value,"data-state":l(a).isOpen.value?`open`:`closed`,onClick:o[0]||=(...e)=>l(a).toggle&&l(a).toggle(...e)},[d(`span`,z,[i(e.$slots,`default`,{},void 0,!0)]),r(l(_),{class:`accordion-chevron`,"aria-hidden":`true`})],8,R))}})})))()}var H;function U(){return(U=e((()=>{V(),m(),H=h(B,[[`__scopeId`,`data-v-4a2b0c46`]]),B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`AccordionTrigger`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Accordion/AccordionTrigger.vue`]})})))()}var W,G,K,q;function J(){return(J=e((()=>{u(),T(),M(),L(),U(),W={title:`Components/Accordion`,component:w,tags:[`autodocs`],args:{multiple:!1},argTypes:{disabled:{control:{type:`boolean`}},multiple:{control:{type:`boolean`}}}},G={render:e=>({components:{Accordion:w,AccordionContent:j,AccordionItem:I,AccordionTrigger:H},setup(){return{args:e,value:f([`delivery`])}},template:`
      <Accordion v-model="value" v-bind="args">
        <AccordionItem value="delivery">
          <AccordionTrigger>Какие варианты доставки доступны?</AccordionTrigger>
          <AccordionContent>
            Стандартная, экспресс-доставка и доставка на следующий день.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>Как оформить возврат?</AccordionTrigger>
          <AccordionContent>
            Создайте заявку на возврат в течение 14 дней после получения.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>Как связаться с поддержкой?</AccordionTrigger>
          <AccordionContent>
            Напишите в чат поддержки — мы отвечаем ежедневно.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `})},K={...G,args:{multiple:!0}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger
    },
    setup() {
      const value = ref(["delivery"]);
      return {
        args,
        value
      };
    },
    template: \`
      <Accordion v-model="value" v-bind="args">
        <AccordionItem value="delivery">
          <AccordionTrigger>Какие варианты доставки доступны?</AccordionTrigger>
          <AccordionContent>
            Стандартная, экспресс-доставка и доставка на следующий день.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>Как оформить возврат?</AccordionTrigger>
          <AccordionContent>
            Создайте заявку на возврат в течение 14 дней после получения.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>Как связаться с поддержкой?</AccordionTrigger>
          <AccordionContent>
            Напишите в чат поддержки — мы отвечаем ежедневно.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    \`
  })
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    multiple: true
  }
}`,...K.parameters?.docs?.source}}},q=[`Default`,`Multiple`]})))()}J();export{G as Default,K as Multiple,q as __namedExportsOrder,W as default};