import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,M as n,O as r,P as i,S as a,U as o,V as s,W as c,Y as l,a as u,b as d,ct as f,gt as p,h as m,y as h,z as g}from"./iframe-Du9fEe2r.js";import{n as _,t as v}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as y,t as b}from"./Dot-DYvqUHxS.js";var x;function S(){return(S=e((()=>{x=Symbol(`chip-group`)})))()}var C,w,T;function E(){return(E=e((()=>{u(),S(),C=[`disabled`,`role`,`aria-checked`,`aria-pressed`],w={class:`chip-label`},T=r({__name:`Chip`,props:{value:{},size:{default:`medium`},selected:{type:Boolean},disabled:{type:Boolean}},emits:[`select`],setup(e,{emit:r}){let i=e,a=r,o=n(x,null),s=h(()=>i.disabled||o?.disabled||!1),l=h(()=>o?.size??i.size),u=h(()=>!!o&&i.value!==void 0),f=h(()=>u.value?o?.isSelected(i.value)??!1:!!i.selected),m=h(()=>{if(u.value)return o?.mode===`single`?`radio`:void 0}),_=()=>{s.value||(u.value&&o?.select(i.value),a(`select`,i.value))};return(e,n)=>(g(),t(`button`,{type:`button`,class:p([`chip`,l.value,{selected:f.value,disabled:s.value}]),disabled:s.value,role:m.value,"aria-checked":m.value===`radio`?f.value:void 0,"aria-pressed":m.value?void 0:f.value,onClick:_},[d(`span`,w,[c(e.$slots,`default`,{},void 0,!0)])],10,C))}})})))()}var D;function O(){return(O=e((()=>{E(),_(),D=v(T,[[`__scopeId`,`data-v-e21db3fe`]]),T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`Chip`,description:``,tags:{},props:[{name:`value`,required:!1,type:{name:`ChipValue`}},{name:`size`,required:!1,type:{name:`ChipSize`},defaultValue:{func:!1,value:`"medium"`}},{name:`selected`,required:!1,type:{name:`boolean`}},{name:`disabled`,required:!1,type:{name:`boolean`}}],events:[{name:`select`,type:{names:[`union`],elements:[{name:`ChipValue`},{name:`undefined`}]}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Chip/Chip.vue`]})})))()}var k,A,j;function M(){return(M=e((()=>{u(),S(),k=[`role`],A=[`name`,`value`],j=r({__name:`ChipGroup`,props:i({mode:{default:`single`},size:{default:`medium`},disabled:{type:Boolean},name:{},stretched:{type:Boolean}},{modelValue:{default:null},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let n=e,r=l(e,`modelValue`),i=h(()=>n.mode===`multiple`?Array.isArray(r.value)?r.value:[]:r.value===null||Array.isArray(r.value)?[]:[r.value]),u=e=>i.value.includes(e);return s(x,{mode:n.mode,size:n.size,disabled:n.disabled,isSelected:u,select:e=>{if(!n.disabled){if(n.mode===`multiple`){let t=u(e)?i.value.filter(t=>t!==e):[...i.value,e];r.value=t;return}r.value=u(e)?null:e}}}),(e,r)=>(g(),t(`div`,{class:p([`chip-group`,{stretched:n.stretched}]),role:n.mode===`single`?`radiogroup`:`group`},[c(e.$slots,`default`,{},void 0,!0),n.name?(g(!0),t(m,{key:0},o(i.value,e=>(g(),t(`input`,{key:e,type:`hidden`,name:n.name,value:e},null,8,A))),128)):a(``,!0)],10,k))}})})))()}var N;function P(){return(P=e((()=>{M(),_(),N=v(j,[[`__scopeId`,`data-v-663d7235`]]),j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{exportName:`default`,displayName:`ChipGroup`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`ChipMode`},defaultValue:{func:!1,value:`"single"`}},{name:`size`,required:!1,type:{name:`ChipSize`},defaultValue:{func:!1,value:`"medium"`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`name`,required:!1,type:{name:`string`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Chip/ChipGroup.vue`]})})))()}var F,I,L,R,z,B;function V(){return(V=e((()=>{u(),O(),P(),y(),F={title:`Components/Chip`,component:N,tags:[`autodocs`],argTypes:{mode:{control:{type:`select`},options:[`single`,`multiple`]},size:{control:{type:`select`},options:[`small`,`medium`,`large`]},disabled:{type:`boolean`}},args:{mode:`single`,size:`medium`}},I=[{value:`phone`,label:`Телефон`,color:`slate`},{value:`telegram`,label:`Telegram`,color:`sky`},{value:`whatsapp`,label:`WhatsApp`,color:`green`},{value:`avito`,label:`Авито`,color:`emerald`},{value:`sutochno`,label:`Суточно.ру`,color:`orange`},{value:`travel`,label:`Яндекс.Путешествия`,color:`amber`},{value:`booking`,label:`Booking.com`,color:`blue`},{value:`direct`,label:`Прямая`,color:`violet`}],L={render:e=>({components:{Chip:D,ChipGroup:N,Dot:b},setup(){let t=f(`phone`);return{args:e,chips:I,value:t}},template:`
      <ChipGroup v-bind="args" v-model="value">
        <Chip v-for="chip in chips" :key="chip.value" :value="chip.value">
          <Dot :color="chip.color" />
          {{ chip.label }}
        </Chip>
      </ChipGroup>
    `})},R={args:{mode:`multiple`},render:e=>({components:{Chip:D,ChipGroup:N,Dot:b},setup(){let t=f([`telegram`,`whatsapp`]);return{args:e,chips:I,value:t}},template:`
      <ChipGroup v-bind="args" v-model="value">
        <Chip v-for="chip in chips" :key="chip.value" :value="chip.value">
          <Dot :color="chip.color" />
          {{ chip.label }}
        </Chip>
      </ChipGroup>
    `})},z={render:()=>({components:{Chip:D,ChipGroup:N},setup(){let e=f(`one`),t=f(`one`);return{largeValue:f(`one`),mediumValue:t,smallValue:e}},template:`
      <div style="display: grid; gap: var(--gap-4);">
        <ChipGroup v-model="smallValue" size="small">
          <Chip value="one">Small</Chip>
          <Chip value="two">Small</Chip>
        </ChipGroup>
        <ChipGroup v-model="mediumValue" size="medium">
          <Chip value="one">Medium</Chip>
          <Chip value="two">Medium</Chip>
        </ChipGroup>
        <ChipGroup v-model="largeValue" size="large">
          <Chip value="one">Large</Chip>
          <Chip value="two">Large</Chip>
        </ChipGroup>
      </div>
    `})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipGroup,
      Dot
    },
    setup() {
      const value = ref("phone");
      return {
        args,
        chips,
        value
      };
    },
    template: \`
      <ChipGroup v-bind="args" v-model="value">
        <Chip v-for="chip in chips" :key="chip.value" :value="chip.value">
          <Dot :color="chip.color" />
          {{ chip.label }}
        </Chip>
      </ChipGroup>
    \`
  })
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "multiple"
  },
  render: args => ({
    components: {
      Chip,
      ChipGroup,
      Dot
    },
    setup() {
      const value = ref(["telegram", "whatsapp"]);
      return {
        args,
        chips,
        value
      };
    },
    template: \`
      <ChipGroup v-bind="args" v-model="value">
        <Chip v-for="chip in chips" :key="chip.value" :value="chip.value">
          <Dot :color="chip.color" />
          {{ chip.label }}
        </Chip>
      </ChipGroup>
    \`
  })
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Chip,
      ChipGroup
    },
    setup() {
      const smallValue = ref("one");
      const mediumValue = ref("one");
      const largeValue = ref("one");
      return {
        largeValue,
        mediumValue,
        smallValue
      };
    },
    template: \`
      <div style="display: grid; gap: var(--gap-4);">
        <ChipGroup v-model="smallValue" size="small">
          <Chip value="one">Small</Chip>
          <Chip value="two">Small</Chip>
        </ChipGroup>
        <ChipGroup v-model="mediumValue" size="medium">
          <Chip value="one">Medium</Chip>
          <Chip value="two">Medium</Chip>
        </ChipGroup>
        <ChipGroup v-model="largeValue" size="large">
          <Chip value="one">Large</Chip>
          <Chip value="two">Large</Chip>
        </ChipGroup>
      </div>
    \`
  })
}`,...z.parameters?.docs?.source}}},B=[`Single`,`Multiple`,`Sizes`]})))()}V();export{R as Multiple,L as Single,z as Sizes,B as __namedExportsOrder,F as default};