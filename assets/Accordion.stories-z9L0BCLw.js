import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,D as n,J as r,M as i,O as a,V as o,W as s,a as c,b as l,ct as u,mt as d,y as f,z as p}from"./iframe-Du9fEe2r.js";import{n as m,t as h}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Vt as g,n as _}from"./gui-icons.es-ypdSzEZR.js";var v,y;function b(){return(b=e((()=>{v=Symbol(`accordion`),y=Symbol(`accordion-item`)})))()}var x,S;function C(){return(C=e((()=>{c(),b(),x={class:`accordion`},S=a({__name:`Accordion`,props:{defaultValue:{default:()=>[]},disabled:{type:Boolean,default:!1},modelValue:{default:void 0},multiple:{type:Boolean,default:!1}},emits:[`change`,`update:modelValue`],setup(e,{emit:n}){let r=e,i=n,a=u([...r.defaultValue]),c=f(()=>r.modelValue??a.value),l=e=>{r.modelValue===void 0&&(a.value=e),i(`update:modelValue`,e),i(`change`,e)};return o(v,{disabled:f(()=>r.disabled),isOpen:e=>c.value.includes(e),toggle:e=>{if(r.disabled)return;let t=c.value.includes(e),n=r.multiple?t?c.value.filter(t=>t!==e):[...c.value,e]:t?[]:[e];l(n)}}),(e,n)=>(p(),t(`div`,x,[s(e.$slots,`default`,{},void 0,!0)]))}})})))()}var w;function T(){return(T=e((()=>{C(),m(),w=h(S,[[`__scopeId`,`data-v-287a1f04`]]),S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:`default`,displayName:`Accordion`,description:``,tags:{},props:[{name:`defaultValue`,required:!1,type:{name:`Array`,elements:[{name:`string`}]},defaultValue:{func:!1,value:`() => []`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`modelValue`,required:!1,type:{name:`Array`,elements:[{name:`string`}]},defaultValue:{func:!1,value:`undefined`}},{name:`multiple`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`change`,type:{names:[`Array`],elements:[{name:`string`}]}},{name:`update:modelValue`,type:{names:[`Array`],elements:[{name:`string`}]}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Accordion/Accordion.vue`]})})))()}var E,D,O,k;function A(){return(A=e((()=>{c(),b(),E=[`id`,`aria-hidden`,`aria-labelledby`,`data-state`],D={class:`accordion-content-clip`},O={class:`accordion-content-inner`},k=a({__name:`AccordionContent`,setup(e){let n=i(y);if(n===void 0)throw Error(`AccordionContent must be used inside AccordionItem`);return(e,r)=>(p(),t(`div`,{id:d(n).contentId,class:`accordion-content`,role:`region`,"aria-hidden":!d(n).isOpen.value,"aria-labelledby":d(n).triggerId,"data-state":d(n).isOpen.value?`open`:`closed`},[l(`div`,D,[l(`div`,O,[s(e.$slots,`default`,{},void 0,!0)])])],8,E))}})})))()}var j;function M(){return(M=e((()=>{A(),m(),j=h(k,[[`__scopeId`,`data-v-904814b2`]]),k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:`default`,displayName:`AccordionContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Accordion/AccordionContent.vue`]})})))()}var N,P;function F(){return(F=e((()=>{c(),b(),N=[`data-disabled`,`data-state`],P=a({__name:`AccordionItem`,props:{disabled:{type:Boolean,default:!1},value:{}},setup(e){let n=e,a=i(v);if(a===void 0)throw Error(`AccordionItem must be used inside Accordion`);let c=r(),l=f(()=>a.isOpen(n.value)),u=f(()=>a.disabled.value||n.disabled);return o(y,{contentId:`${c}-content`,disabled:u,isOpen:l,toggle:()=>{u.value||a.toggle(n.value)},triggerId:`${c}-trigger`}),(e,n)=>(p(),t(`div`,{class:`accordion-item`,"data-disabled":u.value||void 0,"data-state":l.value?`open`:`closed`},[s(e.$slots,`default`,{},void 0,!0)],8,N))}})})))()}var I;function L(){return(L=e((()=>{F(),m(),I=h(P,[[`__scopeId`,`data-v-2d683002`]]),P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:`default`,displayName:`AccordionItem`,description:``,tags:{},props:[{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`value`,required:!0,type:{name:`string`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Accordion/AccordionItem.vue`]})})))()}var R,z,B;function V(){return(V=e((()=>{c(),_(),b(),R=[`id`,`aria-controls`,`aria-expanded`,`disabled`,`data-state`],z={class:`accordion-trigger-content`},B=a({__name:`AccordionTrigger`,setup(e){let r=i(y);if(r===void 0)throw Error(`AccordionTrigger must be used inside AccordionItem`);return(e,i)=>(p(),t(`button`,{id:d(r).triggerId,class:`accordion-trigger`,type:`button`,"aria-controls":d(r).contentId,"aria-expanded":d(r).isOpen.value,disabled:d(r).disabled.value,"data-state":d(r).isOpen.value?`open`:`closed`,onClick:i[0]||=(...e)=>d(r).toggle&&d(r).toggle(...e)},[l(`span`,z,[s(e.$slots,`default`,{},void 0,!0)]),n(d(g),{class:`accordion-chevron`,"aria-hidden":`true`})],8,R))}})})))()}var H;function U(){return(U=e((()=>{V(),m(),H=h(B,[[`__scopeId`,`data-v-4a2b0c46`]]),B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`AccordionTrigger`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Accordion/AccordionTrigger.vue`]})})))()}var W,G,K,q;function J(){return(J=e((()=>{c(),T(),M(),L(),U(),W={title:`Components/Accordion`,component:w,tags:[`autodocs`],args:{multiple:!1},argTypes:{disabled:{control:{type:`boolean`}},multiple:{control:{type:`boolean`}}}},G={render:e=>({components:{Accordion:w,AccordionContent:j,AccordionItem:I,AccordionTrigger:H},setup(){return{args:e,value:u([`delivery`])}},template:`
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