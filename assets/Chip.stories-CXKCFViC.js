import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,G as r,H as i,M as a,O as o,P as s,S as c,W as l,X as u,a as d,b as f,dt as p,h as m,y as h,yt as g}from"./iframe-Z95Hq5ox.js";import{n as _,t as v}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as y,t as b}from"./Dot-CvwpME30.js";var x;function S(){return(S=e((()=>{x=Symbol(`chip-group`)})))()}var C,w,T;function E(){return(E=e((()=>{d(),S(),C=[`disabled`,`role`,`aria-checked`,`aria-pressed`],w={class:`chip-label`},T=o({__name:`Chip`,props:{value:{},size:{default:`medium`},selected:{type:Boolean},disabled:{type:Boolean}},emits:[`select`],setup(e,{emit:i}){let o=e,s=i,c=a(x,null),l=h(()=>o.disabled||c?.disabled||!1),u=h(()=>c?.size??o.size),d=h(()=>!!c&&o.value!==void 0),p=h(()=>d.value?c?.isSelected(o.value)??!1:!!o.selected),m=h(()=>{if(d.value)return c?.mode===`single`?`radio`:void 0}),_=()=>{l.value||(d.value&&c?.select(o.value),s(`select`,o.value))};return(e,i)=>(t(),n(`button`,{type:`button`,class:g([`chip`,u.value,{selected:p.value,disabled:l.value}]),disabled:l.value,role:m.value,"aria-checked":m.value===`radio`?p.value:void 0,"aria-pressed":m.value?void 0:p.value,onClick:_},[f(`span`,w,[r(e.$slots,`default`,{},void 0,!0)])],10,C))}})})))()}var D;function O(){return(O=e((()=>{E(),_(),D=v(T,[[`__scopeId`,`data-v-e21db3fe`]]),T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`Chip`,description:``,tags:{},props:[{name:`value`,required:!1,type:{name:`ChipValue`}},{name:`size`,required:!1,type:{name:`ChipSize`},defaultValue:{func:!1,value:`"medium"`}},{name:`selected`,required:!1,type:{name:`boolean`}},{name:`disabled`,required:!1,type:{name:`boolean`}}],events:[{name:`select`,type:{names:[`union`],elements:[{name:`ChipValue`},{name:`undefined`}]}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Chip/Chip.vue`]})})))()}var k,A,j;function M(){return(M=e((()=>{d(),S(),k=[`role`],A=[`name`,`value`],j=o({__name:`ChipGroup`,props:s({mode:{default:`single`},size:{default:`medium`},disabled:{type:Boolean},name:{},stretched:{type:Boolean}},{modelValue:{default:null},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let a=e,o=u(e,`modelValue`),s=h(()=>a.mode===`multiple`?Array.isArray(o.value)?o.value:[]:o.value===null||Array.isArray(o.value)?[]:[o.value]),d=e=>s.value.includes(e);return i(x,{mode:a.mode,size:a.size,disabled:a.disabled,isSelected:d,select:e=>{if(!a.disabled){if(a.mode===`multiple`){let t=d(e)?s.value.filter(t=>t!==e):[...s.value,e];o.value=t;return}o.value=d(e)?null:e}}}),(e,i)=>(t(),n(`div`,{class:g([`chip-group`,{stretched:a.stretched}]),role:a.mode===`single`?`radiogroup`:`group`},[r(e.$slots,`default`,{},void 0,!0),a.name?(t(!0),n(m,{key:0},l(s.value,e=>(t(),n(`input`,{key:e,type:`hidden`,name:a.name,value:e},null,8,A))),128)):c(``,!0)],10,k))}})})))()}var N;function P(){return(P=e((()=>{M(),_(),N=v(j,[[`__scopeId`,`data-v-663d7235`]]),j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{exportName:`default`,displayName:`ChipGroup`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`ChipMode`},defaultValue:{func:!1,value:`"single"`}},{name:`size`,required:!1,type:{name:`ChipSize`},defaultValue:{func:!1,value:`"medium"`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`name`,required:!1,type:{name:`string`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Chip/ChipGroup.vue`]})})))()}var F,I,L,R,z,B;function V(){return(V=e((()=>{d(),O(),P(),y(),F={title:`Components/Chip`,component:N,tags:[`autodocs`],argTypes:{mode:{control:{type:`select`},options:[`single`,`multiple`]},size:{control:{type:`select`},options:[`small`,`medium`,`large`]},disabled:{type:`boolean`}},args:{mode:`single`,size:`medium`}},I=[{value:`phone`,label:`Телефон`,color:`slate`},{value:`telegram`,label:`Telegram`,color:`sky`},{value:`whatsapp`,label:`WhatsApp`,color:`green`},{value:`avito`,label:`Авито`,color:`emerald`},{value:`sutochno`,label:`Суточно.ру`,color:`orange`},{value:`travel`,label:`Яндекс.Путешествия`,color:`amber`},{value:`booking`,label:`Booking.com`,color:`blue`},{value:`direct`,label:`Прямая`,color:`violet`}],L={render:e=>({components:{Chip:D,ChipGroup:N,Dot:b},setup(){let t=p(`phone`);return{args:e,chips:I,value:t}},template:`
      <ChipGroup v-bind="args" v-model="value">
        <Chip v-for="chip in chips" :key="chip.value" :value="chip.value">
          <Dot :color="chip.color" />
          {{ chip.label }}
        </Chip>
      </ChipGroup>
    `})},R={args:{mode:`multiple`},render:e=>({components:{Chip:D,ChipGroup:N,Dot:b},setup(){let t=p([`telegram`,`whatsapp`]);return{args:e,chips:I,value:t}},template:`
      <ChipGroup v-bind="args" v-model="value">
        <Chip v-for="chip in chips" :key="chip.value" :value="chip.value">
          <Dot :color="chip.color" />
          {{ chip.label }}
        </Chip>
      </ChipGroup>
    `})},z={render:()=>({components:{Chip:D,ChipGroup:N},setup(){let e=p(`one`),t=p(`one`);return{largeValue:p(`one`),mediumValue:t,smallValue:e}},template:`
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