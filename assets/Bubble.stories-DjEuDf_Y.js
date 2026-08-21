import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,F as r,K as i,O as a,W as o,a as s,q as c,x as l,y as u,z as d}from"./iframe-DSPFKwNv.js";import{n as f,t as p}from"./_plugin-vue_export-helper-BqBa3wPr.js";var m,h;function g(){return(g=e((()=>{s(),m=[`data-align`,`data-mode`,`data-size`],h=a({__name:`Bubble`,props:{mode:{default:`default`},align:{default:`start`},size:{default:`medium`}},setup(e){let t=e;return(e,i)=>(d(),n(`div`,r(e.$attrs,{class:[`bubble`,`bubble--align-${t.align}`],"data-align":t.align,"data-mode":t.mode,"data-size":t.size}),[o(e.$slots,`default`,{},void 0,!0)],16,m))}})})))()}var _;function v(){return(v=e((()=>{g(),f(),_=p(h,[[`__scopeId`,`data-v-fa44dea8`]]),h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:`default`,displayName:`Bubble`,description:``,tags:{},props:[{name:`mode`,description:`Визуальный тон поверхности сообщения.`,required:!1,type:{name:`BubbleMode`},defaultValue:{func:!1,value:`"default"`}},{name:`align`,description:`Расположение сообщения в строке диалога.`,required:!1,type:{name:`BubbleAlign`},defaultValue:{func:!1,value:`"start"`}},{name:`size`,description:`Плотность и типографика сообщения.`,required:!1,type:{name:`BubbleSize`},defaultValue:{func:!1,value:`"medium"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Bubble/Bubble.vue`]})})))()}var y;function b(){return(b=e((()=>{s(),y=a({__name:`BubbleContent`,props:{as:{default:`div`}},setup(e){let n=e,a=c(),s=u(()=>n.as===`button`?a.type??`button`:void 0);return(e,a)=>(d(),l(i(n.as),r(e.$attrs,{class:`bubble-content`,type:s.value}),{default:t(()=>[o(e.$slots,`default`,{},void 0,!0)]),_:3},16,[`type`]))}})})))()}var x;function S(){return(S=e((()=>{b(),f(),x=p(y,[[`__scopeId`,`data-v-dfe5db63`]]),y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:`default`,displayName:`BubbleContent`,description:``,tags:{},props:[{name:`as`,description:`Семантический HTML-элемент поверхности сообщения.`,required:!1,type:{name:`BubbleContentElement`},defaultValue:{func:!1,value:`"div"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Bubble/BubbleContent.vue`]})})))()}function C(e,t){return d(),n(`div`,r(e.$attrs,{class:`bubble-group`}),[o(e.$slots,`default`,{},void 0,!0)],16)}var w,T;function E(){return(E=e((()=>{s(),f(),w={},T=p(w,[[`render`,C],[`__scopeId`,`data-v-7232d62b`]]),w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{displayName:`BubbleGroup`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Bubble/BubbleGroup.vue`]})})))()}var D,O,k,A,j;function M(){return(M=e((()=>{v(),S(),E(),D={title:`Components/Bubble`,component:_,tags:[`autodocs`],args:{mode:`default`,align:`start`,size:`medium`},argTypes:{mode:{control:{type:`select`},options:[`default`,`contrast`,`accent`,`secondary`,`ghost`,`outlined`,`negative`,`positive`,`danger`,`warning`]},align:{control:{type:`inline-radio`},options:[`start`,`end`]},size:{control:{type:`select`},options:[`extra-small`,`small`,`medium`,`large`]}}},O={render:e=>({components:{Bubble:_,BubbleContent:x},setup:()=>({args:e}),template:`
      <Bubble v-bind="args">
        <BubbleContent>Здравствуйте! Чем могу помочь?</BubbleContent>
      </Bubble>
    `})},k={render:()=>({components:{Bubble:_,BubbleContent:x,BubbleGroup:T},template:`
      <div style="display: flex; width: min(100%, 560px); flex-direction: column; gap: var(--gap-4);">
        <BubbleGroup>
          <Bubble mode="secondary">
            <BubbleContent>Здравствуйте! Чем могу помочь?</BubbleContent>
          </Bubble>
          <Bubble mode="secondary">
            <BubbleContent>Могу подсказать по бронированию или оплате.</BubbleContent>
          </Bubble>
        </BubbleGroup>
        <BubbleGroup>
          <Bubble mode="contrast" align="end">
            <BubbleContent>Нужна помощь с переносом дат.</BubbleContent>
          </Bubble>
          <Bubble mode="contrast" align="end">
            <BubbleContent>Заезд уже завтра.</BubbleContent>
          </Bubble>
        </BubbleGroup>
        <Bubble mode="ghost">
          <BubbleContent>
            Изменить даты можно до подтверждения бронирования. После этого напишите в поддержку.
          </BubbleContent>
        </Bubble>
      </div>
    `})},A={render:()=>({components:{Bubble:_,BubbleContent:x,BubbleGroup:T},template:`
      <BubbleGroup>
        <Bubble mode="secondary">
          <BubbleContent>Как вам помочь?</BubbleContent>
        </Bubble>
        <Bubble mode="outlined" align="start">
          <BubbleContent as="button" type="button">Перенести даты</BubbleContent>
        </Bubble>
        <Bubble mode="outlined" align="start">
          <BubbleContent as="a" href="#support">Написать в поддержку</BubbleContent>
        </Bubble>
      </BubbleGroup>
    `})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Bubble,
      BubbleContent
    },
    setup: () => ({
      args
    }),
    template: \`
      <Bubble v-bind="args">
        <BubbleContent>Здравствуйте! Чем могу помочь?</BubbleContent>
      </Bubble>
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Bubble,
      BubbleContent,
      BubbleGroup
    },
    template: \`
      <div style="display: flex; width: min(100%, 560px); flex-direction: column; gap: var(--gap-4);">
        <BubbleGroup>
          <Bubble mode="secondary">
            <BubbleContent>Здравствуйте! Чем могу помочь?</BubbleContent>
          </Bubble>
          <Bubble mode="secondary">
            <BubbleContent>Могу подсказать по бронированию или оплате.</BubbleContent>
          </Bubble>
        </BubbleGroup>
        <BubbleGroup>
          <Bubble mode="contrast" align="end">
            <BubbleContent>Нужна помощь с переносом дат.</BubbleContent>
          </Bubble>
          <Bubble mode="contrast" align="end">
            <BubbleContent>Заезд уже завтра.</BubbleContent>
          </Bubble>
        </BubbleGroup>
        <Bubble mode="ghost">
          <BubbleContent>
            Изменить даты можно до подтверждения бронирования. После этого напишите в поддержку.
          </BubbleContent>
        </Bubble>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Bubble,
      BubbleContent,
      BubbleGroup
    },
    template: \`
      <BubbleGroup>
        <Bubble mode="secondary">
          <BubbleContent>Как вам помочь?</BubbleContent>
        </Bubble>
        <Bubble mode="outlined" align="start">
          <BubbleContent as="button" type="button">Перенести даты</BubbleContent>
        </Bubble>
        <Bubble mode="outlined" align="start">
          <BubbleContent as="a" href="#support">Написать в поддержку</BubbleContent>
        </Bubble>
      </BubbleGroup>
    \`
  })
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Conversation`,`Interactive`]})))()}M();export{k as Conversation,O as Default,A as Interactive,j as __namedExportsOrder,D as default};