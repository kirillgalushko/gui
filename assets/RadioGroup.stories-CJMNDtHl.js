import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,F as n,J as r,M as i,O as a,P as o,S as s,V as c,W as l,Y as u,a as d,b as f,ct as p,gt as m,mt as h,q as g,y as _,z as v}from"./iframe-DSPFKwNv.js";import{n as y,t as b}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{a as x,i as S,n as C,o as w,r as T,t as E}from"./FieldLabel-nltWxpDW.js";var D;function O(){return(O=e((()=>{D=Symbol(`radio-group`)})))()}var k,A;function j(){return(j=e((()=>{d(),O(),k=[`aria-orientation`,`aria-invalid`,`aria-required`,`data-disabled`,`data-invalid`],A=a({inheritAttrs:!1,__name:`RadioGroup`,props:o({name:{},disabled:{type:Boolean},invalid:{type:Boolean},required:{type:Boolean},orientation:{default:`vertical`},mode:{default:`default`},stretched:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let a=e,o=u(e,`modelValue`),s=i(`field-state`,void 0),d=r(),f=_(()=>a.name??`radio-group-${d}`),p=_(()=>!!a.disabled||!!s?.value.disabled),m=_(()=>!!a.invalid||!!s?.value.invalid),h=_(()=>!!a.required),g=_(()=>a.mode);return c(D,{model:o,name:f,disabled:p,invalid:m,required:h,mode:g,select:e=>{p.value||(o.value=e)}}),(e,r)=>(v(),t(`div`,n(e.$attrs,{class:[`radio-group`,a.orientation,a.mode,{disabled:p.value,invalid:m.value,stretched:a.stretched}],role:`radiogroup`,"aria-orientation":a.orientation,"aria-invalid":m.value||void 0,"aria-required":h.value||void 0,"data-disabled":p.value||void 0,"data-invalid":m.value||void 0}),[l(e.$slots,`default`,{},void 0,!0)],16,k))}})})))()}var M;function N(){return(N=e((()=>{j(),y(),M=b(A,[[`__scopeId`,`data-v-c5e52ea1`]]),A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{exportName:`default`,displayName:`RadioGroup`,description:``,tags:{},props:[{name:`name`,required:!1,type:{name:`string`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`required`,required:!1,type:{name:`boolean`}},{name:`orientation`,required:!1,type:{name:`RadioGroupOrientation`},defaultValue:{func:!1,value:`"vertical"`}},{name:`mode`,required:!1,type:{name:`RadioGroupMode`},defaultValue:{func:!1,value:`"default"`}},{name:`stretched`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/RadioGroup/RadioGroup.vue`]})})))()}var P,F,I,L,R,z;function B(){return(B=e((()=>{d(),O(),P=[`for`,`data-state`,`data-disabled`,`data-invalid`],F=[`id`,`name`,`value`,`checked`,`disabled`,`required`,`aria-invalid`,`aria-describedby`],I={class:`radio-group-content`},L={class:`radio-group-label`},R={key:0,class:`radio-group-description`},z=a({inheritAttrs:!1,__name:`RadioGroupItem`,props:{value:{},id:{},disabled:{type:Boolean},invalid:{type:Boolean}},setup(e){let a=e,o=i(D);if(!o)throw Error(`RadioGroupItem must be used inside RadioGroup`);let c=g(),u=r(),d=_(()=>a.id??`radio-group-item-${u}`),p=_(()=>!!a.disabled||o.disabled.value),y=_(()=>!!a.invalid||o.invalid.value),b=_(()=>o.model.value===a.value),x=_(()=>{let e=c[`aria-describedby`];return typeof e==`string`?e:void 0}),S=e=>{!p.value&&e.target instanceof HTMLInputElement&&e.target.checked&&o.select(a.value)};return(e,r)=>(v(),t(`label`,{class:m([`radio-group-item`,h(o).mode.value,{checked:b.value,disabled:p.value,invalid:y.value}]),for:d.value,"data-state":b.value?`checked`:`unchecked`,"data-disabled":p.value||void 0,"data-invalid":y.value||void 0},[f(`input`,n(e.$attrs,{id:d.value,class:`radio-group-input`,type:`radio`,name:h(o).name.value,value:a.value,checked:b.value,disabled:p.value,required:h(o).required.value,"aria-invalid":y.value||void 0,"aria-describedby":x.value,onChange:S}),null,16,F),r[0]||=f(`span`,{class:`radio-group-indicator`,"aria-hidden":`true`},[f(`span`,{class:`radio-group-dot`})],-1),f(`span`,I,[f(`span`,L,[l(e.$slots,`default`,{},void 0,!0)]),e.$slots.description?(v(),t(`span`,R,[l(e.$slots,`description`,{},void 0,!0)])):s(``,!0)])],10,P))}})})))()}var V;function H(){return(H=e((()=>{B(),y(),V=b(z,[[`__scopeId`,`data-v-a33c148b`]]),z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{exportName:`default`,displayName:`RadioGroupItem`,description:``,tags:{},props:[{name:`value`,required:!0,type:{name:`RadioGroupValue`}},{name:`id`,required:!1,type:{name:`string`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`invalid`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`},{name:`description`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/RadioGroup/RadioGroupItem.vue`]})})))()}var U,W,G,K,q,J;function Y(){return(Y=e((()=>{d(),w(),S(),C(),N(),H(),U={title:`Components/RadioGroup`,component:M,tags:[`autodocs`],args:{orientation:`vertical`,mode:`default`},argTypes:{orientation:{control:`select`,options:[`vertical`,`horizontal`]},mode:{control:`select`,options:[`default`,`card`]}}},W={render:e=>({components:{RadioGroup:M,RadioGroupItem:V},setup(){return{args:e,value:p(`comfortable`)}},template:`
      <RadioGroup v-model="value" v-bind="args">
        <RadioGroupItem value="default">
          Default
          <template #description>Стандартные настройки для большинства сценариев.</template>
        </RadioGroupItem>
        <RadioGroupItem value="comfortable">
          Comfortable
          <template #description>Больше пространства между элементами.</template>
        </RadioGroupItem>
        <RadioGroupItem value="compact">
          Compact
          <template #description>Минимальные отступы для плотных интерфейсов.</template>
        </RadioGroupItem>
      </RadioGroup>
    `})},G={args:{mode:`card`,orientation:`horizontal`,stretched:!0},render:e=>({components:{Field:x,FieldDescription:T,FieldLabel:E,RadioGroup:M,RadioGroupItem:V},setup(){return{args:e,value:p(`sms`)}},template:`
      <Field stretched>
        <FieldLabel>Куда отправить код</FieldLabel>
        <FieldDescription>Выберите доступный канал подтверждения.</FieldDescription>
        <RadioGroup v-model="value" v-bind="args">
          <RadioGroupItem value="sms">
            SMS
            <template #description>На номер +7 999 •••-••-00</template>
          </RadioGroupItem>
          <RadioGroupItem value="email">
            Email
            <template #description>На адрес g•••@example.ru</template>
          </RadioGroupItem>
        </RadioGroup>
      </Field>
    `})},K={args:{mode:`card`,invalid:!0,stretched:!0},render:G.render},q={args:{disabled:!0},render:W.render},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioGroup,
      RadioGroupItem
    },
    setup() {
      const value = ref("comfortable");
      return {
        args,
        value
      };
    },
    template: \`
      <RadioGroup v-model="value" v-bind="args">
        <RadioGroupItem value="default">
          Default
          <template #description>Стандартные настройки для большинства сценариев.</template>
        </RadioGroupItem>
        <RadioGroupItem value="comfortable">
          Comfortable
          <template #description>Больше пространства между элементами.</template>
        </RadioGroupItem>
        <RadioGroupItem value="compact">
          Compact
          <template #description>Минимальные отступы для плотных интерфейсов.</template>
        </RadioGroupItem>
      </RadioGroup>
    \`
  })
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "card",
    orientation: "horizontal",
    stretched: true
  },
  render: args => ({
    components: {
      Field,
      FieldDescription,
      FieldLabel,
      RadioGroup,
      RadioGroupItem
    },
    setup() {
      const value = ref("sms");
      return {
        args,
        value
      };
    },
    template: \`
      <Field stretched>
        <FieldLabel>Куда отправить код</FieldLabel>
        <FieldDescription>Выберите доступный канал подтверждения.</FieldDescription>
        <RadioGroup v-model="value" v-bind="args">
          <RadioGroupItem value="sms">
            SMS
            <template #description>На номер +7 999 •••-••-00</template>
          </RadioGroupItem>
          <RadioGroupItem value="email">
            Email
            <template #description>На адрес g•••@example.ru</template>
          </RadioGroupItem>
        </RadioGroup>
      </Field>
    \`
  })
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "card",
    invalid: true,
    stretched: true
  },
  render: ChoiceCards.render
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: Default.render
}`,...q.parameters?.docs?.source}}},J=[`Default`,`ChoiceCards`,`Invalid`,`Disabled`]})))()}Y();export{G as ChoiceCards,W as Default,q as Disabled,K as Invalid,J as __namedExportsOrder,U as default};