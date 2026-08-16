import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,F as r,O as i,S as a,W as o,a as s,b as c,mt as l,x as u,y as d,z as f}from"./iframe-BRZN4f8M.js";import{n as p,t as m}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{U as h,n as g,yt as _}from"./gui-icons.es-CEoFeAM4.js";import{n as v,t as y}from"./AsChild-BtgHS87O.js";import{n as b,t as x}from"./Text-BkeTCBMw.js";var S,C,w,T;function E(){return(E=e((()=>{s(),v(),b(),S={key:0,class:`link-icon`},C={class:`link-content`},w={key:1,class:`link-icon`},T=i({inheritAttrs:!1,__name:`Link`,props:{typography:{default:`inherit`},asChild:{type:Boolean},inline:{type:Boolean,default:!0},wrap:{type:Boolean},underlined:{type:Boolean},underlineOnHover:{type:Boolean},disabled:{type:Boolean},enableVisited:{type:Boolean},mode:{default:`accent`},Element:{default:`a`}},setup(e){let i=e,s=d(()=>i.disabled?{"aria-disabled":`true`,tabindex:-1,disabled:i.Element===`button`||i.asChild?!0:void 0}:{}),p=d(()=>[`link`,`mode-${i.mode}`,{inline:i.inline,wrap:i.wrap,underlined:i.underlined,"underline-on-hover":i.underlineOnHover,disabled:i.disabled,"enable-visited":i.enableVisited}]);return(e,d)=>i.asChild?(f(),u(l(y),r({key:0},{...e.$attrs,...s.value},{class:p.value}),{default:t(()=>[o(e.$slots,`default`,{},void 0,!0)]),_:3},16,[`class`])):(f(),u(x,r({key:1},{...e.$attrs,...s.value},{Element:i.Element,typography:i.typography,color:`inherit`,class:p.value}),{default:t(()=>[e.$slots.iconLeft?(f(),n(`span`,S,[o(e.$slots,`iconLeft`,{},void 0,!0)])):a(``,!0),c(`span`,C,[o(e.$slots,`default`,{},void 0,!0)]),e.$slots.iconRight?(f(),n(`span`,w,[o(e.$slots,`iconRight`,{},void 0,!0)])):a(``,!0)]),_:3},16,[`Element`,`typography`,`class`]))}})})))()}var D;function O(){return(O=e((()=>{E(),p(),D=m(T,[[`__scopeId`,`data-v-eb40ebc6`]]),T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`Link`,description:``,tags:{},props:[{name:`typography`,required:!1,type:{name:`Typography`},defaultValue:{func:!1,value:`"inherit"`}},{name:`asChild`,required:!1,type:{name:`boolean`}},{name:`inline`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`wrap`,required:!1,type:{name:`boolean`}},{name:`underlined`,required:!1,type:{name:`boolean`}},{name:`underlineOnHover`,required:!1,type:{name:`boolean`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`enableVisited`,required:!1,type:{name:`boolean`}},{name:`mode`,required:!1,type:{name:`union`,elements:[{name:`"inherit"`},{name:`"accent"`}]},defaultValue:{func:!1,value:`"accent"`}},{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"a"`},{name:`"button"`},{name:`"span"`}]},defaultValue:{func:!1,value:`"a"`}}],slots:[{name:`default`},{name:`iconLeft`},{name:`iconRight`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Link/Link.vue`]})})))()}var k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{g(),O(),k={title:`Components/Link`,component:D,tags:[`autodocs`],argTypes:{inline:{type:`boolean`},wrap:{type:`boolean`},underlined:{type:`boolean`},underlineOnHover:{type:`boolean`},asChild:{type:`boolean`},disabled:{type:`boolean`},enableVisited:{type:`boolean`},mode:{control:`select`,options:[`inherit`,`accent`]}}},A={args:{href:`#`},render:e=>({components:{Link:D},setup(){return{args:e}},template:`<Link v-bind="args">Открыть ссылку</Link>`})},j={args:{href:`#`,underlined:!0},render:e=>({components:{Link:D,IconExternalLinkOutline:_,IconHomeOutline:h},setup(){return{args:e}},template:`
      <Link v-bind="args">
        <template #iconLeft>
          <IconHomeOutline />
        </template>
        Открыть раздел
        <template #iconRight>
          <IconExternalLinkOutline />
        </template>
      </Link>
    `})},M={args:{href:`#`,inline:!0,typography:`inherit`},render:e=>({components:{Link:D},setup(){return{args:e}},template:`
      <p>
        Текст до ссылки <Link v-bind="args">inline-ссылка</Link> и текст после нее.
      </p>
    `})},N={args:{href:`#`,mode:`inherit`,wrap:!0},render:e=>({components:{Link:D},setup(){return{args:e}},template:`
      <div style="max-width: 220px">
        <Link v-bind="args">
          Публичная оферта и Пользовательское соглашение
        </Link>
      </div>
    `})},P={render:()=>({components:{Link:D},template:`
      <div style="color: var(--color-emerald-500); display: flex; gap: var(--gap-4)">
        <Link mode="inherit" href="#">Обычная</Link>
        <Link mode="inherit" href="#" enable-visited>Посещённая</Link>
        <Link mode="inherit" href="#" disabled>Недоступная</Link>
      </div>
    `})},F={render:()=>({components:{Link:D},template:`
      <Link as-child underline-on-hover>
        <button type="button">Ссылка без href</button>
      </Link>
    `})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#"
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: '<Link v-bind="args">Открыть ссылку</Link>'
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    underlined: true
  },
  render: args => ({
    components: {
      Link,
      IconExternalLinkOutline,
      IconHomeOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Link v-bind="args">
        <template #iconLeft>
          <IconHomeOutline />
        </template>
        Открыть раздел
        <template #iconRight>
          <IconExternalLinkOutline />
        </template>
      </Link>
    \`
  })
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    inline: true,
    typography: "inherit"
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <p>
        Текст до ссылки <Link v-bind="args">inline-ссылка</Link> и текст после нее.
      </p>
    \`
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    mode: "inherit",
    wrap: true
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 220px">
        <Link v-bind="args">
          Публичная оферта и Пользовательское соглашение
        </Link>
      </div>
    \`
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Link
    },
    template: \`
      <div style="color: var(--color-emerald-500); display: flex; gap: var(--gap-4)">
        <Link mode="inherit" href="#">Обычная</Link>
        <Link mode="inherit" href="#" enable-visited>Посещённая</Link>
        <Link mode="inherit" href="#" disabled>Недоступная</Link>
      </div>
    \`
  })
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Link
    },
    template: \`
      <Link as-child underline-on-hover>
        <button type="button">Ссылка без href</button>
      </Link>
    \`
  })
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithIcons`,`Inline`,`Wrapping`,`InheritColor`,`AsButton`]})))()}L();export{F as AsButton,A as Default,P as InheritColor,M as Inline,j as WithIcons,N as Wrapping,I as __namedExportsOrder,k as default};