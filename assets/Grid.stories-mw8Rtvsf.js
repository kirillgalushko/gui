import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,L as n,M as r,O as i,R as a,S as o,U as s,V as c,W as l,Z as u,a as d,ct as f,h as p,st as m,vt as h,y as g,yt as ee,z as _}from"./iframe-Du9fEe2r.js";import{n as v,t as y}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{a as b,i as x,n as te,o as ne,r as S,s as C,t as re}from"./useViewportBreakpoint-e1oqsKfc.js";var w;function T(){return(T=e((()=>{w=Symbol(`GridContext`)})))()}var E,D;function O(){return(O=e((()=>{d(),C(),T(),E=`xxl`,D=i({__name:`GridColumn`,props:{xs:{},s:{},m:{},l:{},xl:{},xxl:{}},setup(e){let n=e,i=r(w),a=g(()=>i?.breakpoint.value??E),o=g(()=>i?.columns.value??S[a.value]),s=g(()=>{let e=x.indexOf(a.value);for(let t=e;t>=0;--t){let e=x[t];if(e===void 0)continue;let r=n[e];if(typeof r==`number`)return Math.min(Math.max(r,1),o.value)}return o.value}),c=g(()=>({"--grid-column-span":String(s.value)}));return(e,n)=>(_(),t(`div`,{class:`grid-column`,style:h(c.value)},[l(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var k;function A(){return(A=e((()=>{O(),v(),k=y(D,[[`__scopeId`,`data-v-74aaeef3`]]),D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`GridColumn`,description:``,tags:{},props:[{name:`xs`,required:!1,type:{name:`GridColumnExtraSmallSize`}},{name:`s`,required:!1,type:{name:`GridColumnSmallSize`}},{name:`m`,required:!1,type:{name:`GridColumnLargeSize`}},{name:`l`,required:!1,type:{name:`GridColumnLargeSize`}},{name:`xl`,required:!1,type:{name:`GridColumnLargeSize`}},{name:`xxl`,required:!1,type:{name:`GridColumnLargeSize`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Grid/GridColumn.vue`]})})))()}function j(e){let t=f(`xs`),r=b(()=>t.value),i=f(null),o=f(null),s=e=>{t.value=ne(e.clientWidth)},c=()=>{i.value&&o.value&&i.value.unobserve(o.value),o.value=null},l=e=>{!i.value||!e||(i.value.observe(e),o.value=e,s(e))};return a(()=>{if(typeof ResizeObserver>`u`){e.value&&s(e.value);return}i.value=new ResizeObserver(e=>{let t=e[0];t?.target instanceof HTMLElement&&s(t.target)}),l(e.value)}),u(()=>e.value,e=>{c(),l(e)}),n(()=>{c(),i.value?.disconnect()}),m(r)}function M(){return(M=e((()=>{d(),C()})))()}var N,P,F,I;function L(){return(L=e((()=>{d(),C(),M(),re(),T(),N={key:0},P={key:1,class:`grid-layout__highlight`,"aria-hidden":`true`},F=`1728px`,I=i({__name:`GridLayout`,props:{mode:{default:`container`},gutter:{default:`var(--gap-4, 16px)`},highlight:{type:Boolean,default:!1},stretched:{type:Boolean,default:!1}},setup(e){let n=e,r=f(null),i=j(r),a=te(),u=g(()=>n.mode===`viewport`?a.breakpoint:i.breakpoint),d=g(()=>S[u.value]),m=g(()=>u.value===`xs`?`12px`:`24px`),v=g(()=>({"--grid-columns":String(d.value),"--grid-gutter":n.gutter,"--grid-layout-padding":m.value,"--grid-layout-max-width":n.stretched?`none`:F}));return c(w,{breakpoint:u,columns:d}),(e,i)=>(_(),t(`div`,{ref_key:`rootRef`,ref:r,class:`grid-layout`,style:h(v.value)},[n.highlight?(_(),t(`div`,N,ee(u.value),1)):o(``,!0),n.highlight?(_(),t(`div`,P,[(_(!0),t(p,null,s(d.value,e=>(_(),t(`div`,{key:e,class:`grid-layout__highlight-column`}))),128))])):o(``,!0),l(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var R;function z(){return(z=e((()=>{L(),v(),R=y(I,[[`__scopeId`,`data-v-771d7030`]]),I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:`default`,displayName:`GridLayout`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`union`,elements:[{name:`"container"`},{name:`"viewport"`}]},defaultValue:{func:!1,value:`"container"`}},{name:`gutter`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"var(--gap-4, 16px)"`}},{name:`highlight`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`stretched`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Grid/GridLayout.vue`]})})))()}var B;function V(){return(V=e((()=>{d(),B=i({__name:`GridRow`,props:{rowGap:{default:`0`}},setup(e){let n=e;return(e,r)=>(_(),t(`div`,{class:`grid-row`,style:h({"--grid-row-gap":n.rowGap})},[l(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var H;function U(){return(U=e((()=>{V(),v(),H=y(B,[[`__scopeId`,`data-v-8bd73c52`]]),B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`GridRow`,description:``,tags:{},props:[{name:`rowGap`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"0"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Grid/GridRow.vue`]})})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{A(),z(),U(),W={title:`Components/Grid`,component:R,tags:[`autodocs`],argTypes:{mode:{control:{type:`select`},options:[`container`,`viewport`],description:`Источник breakpoint: ширина GridLayout или ширина viewport.`},gutter:{control:`text`,description:`Стабильный gutter между колонками.`},highlight:{control:`boolean`,description:`Показывает полупрозрачную подсветку колонок.`},stretched:{control:`boolean`,description:`Отключает максимальную ширину GridLayout.`}},args:{mode:`container`,gutter:`var(--gap-4, 16px)`,highlight:!1,stretched:!1},parameters:{docs:{description:{component:`GridLayout создает content area и передает через provide/inject текущий breakpoint и количество колонок. GridRow строит CSS Grid внутри content area. GridColumn выбирает span по props xs/s/m/l/xl/xxl и при отсутствии значения использует ближайший меньший breakpoint.`}}}},G=`
  min-height: 72px;
  border-radius: 6px;
  background: lightgrey;
  box-sizing: border-box;
  color: black;
`,K=`
  background: red;
  opacity: 0.5;
  border-radius: 6px;
`,q=e=>({components:{GridLayout:R,GridRow:H,GridColumn:k},setup(){return{args:e,tileStyles:G}},template:`
    <GridLayout v-bind="args">
      <GridRow>
        <GridColumn :xs="4" :s="4" :m="6" :l="4" :xl="4" :xxl="4">
          <div :style="tileStyles">4 / 4 / 6 / 4 / 4 / 4</div>
        </GridColumn>
        <GridColumn :xs="4" :s="4" :m="6" :l="4" :xl="4" :xxl="4">
          <div :style="tileStyles">4 / 4 / 6 / 4 / 4 / 4</div>
        </GridColumn>
        <GridColumn :xs="4" :s="8" :m="12" :l="4" :xl="4" :xxl="4">
          <div :style="tileStyles">4 / 8 / 12 / 4 / 4 / 4</div>
        </GridColumn>
      </GridRow>
    </GridLayout>
  `}),J={render:q},Y={args:{highlight:!0},render:q},X={args:{highlight:!0},render:e=>({components:{GridLayout:R,GridRow:H,GridColumn:k},setup(){return{args:e,tileStyles:G}},template:`
      <div style="display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 16px;">
        <aside style="min-height: 100px; padding: 12px; border-radius: 6px; background: lightgrey; color: black;">
          Sidebar
        </aside>
        <GridLayout v-bind="args">
          <GridRow>
            <GridColumn :xs="4" :s="8" :m="8" :l="8" :xl="8" :xxl="8">
              <div :style="tileStyles">Content area</div>
            </GridColumn>
            <GridColumn :xs="4" :s="8" :m="4" :l="4" :xl="4" :xxl="4">
              <div :style="tileStyles">Aside content</div>
            </GridColumn>
          </GridRow>
        </GridLayout>
      </div>
    `})},Z={args:{highlight:!0},render:e=>({components:{GridLayout:R,GridRow:H,GridColumn:k},setup(){return{args:e,tileStyles:G,nestedStyles:K}},template:`
      <GridLayout v-bind="args">
        <GridRow>
          <GridColumn :xs="4" :s="4" :m="6">
            <div :style="tileStyles">
              <GridLayout highlight">
                <GridRow>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                </GridRow>
              </GridLayout>
            </div>
          </GridColumn>
          <GridColumn :xs="4" :s="4" :m="6">
            <div :style="tileStyles">Sibling</div>
          </GridColumn>
        </GridRow>
      </GridLayout>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderDefaultGrid
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    highlight: true
  },
  render: renderDefaultGrid
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    highlight: true
  },
  render: args => ({
    components: {
      GridLayout,
      GridRow,
      GridColumn
    },
    setup() {
      return {
        args,
        tileStyles
      };
    },
    template: \`
      <div style="display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 16px;">
        <aside style="min-height: 100px; padding: 12px; border-radius: 6px; background: lightgrey; color: black;">
          Sidebar
        </aside>
        <GridLayout v-bind="args">
          <GridRow>
            <GridColumn :xs="4" :s="8" :m="8" :l="8" :xl="8" :xxl="8">
              <div :style="tileStyles">Content area</div>
            </GridColumn>
            <GridColumn :xs="4" :s="8" :m="4" :l="4" :xl="4" :xxl="4">
              <div :style="tileStyles">Aside content</div>
            </GridColumn>
          </GridRow>
        </GridLayout>
      </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    highlight: true
  },
  render: args => ({
    components: {
      GridLayout,
      GridRow,
      GridColumn
    },
    setup() {
      return {
        args,
        tileStyles,
        nestedStyles
      };
    },
    template: \`
      <GridLayout v-bind="args">
        <GridRow>
          <GridColumn :xs="4" :s="4" :m="6">
            <div :style="tileStyles">
              <GridLayout highlight">
                <GridRow>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                </GridRow>
              </GridLayout>
            </div>
          </GridColumn>
          <GridColumn :xs="4" :s="4" :m="6">
            <div :style="tileStyles">Sibling</div>
          </GridColumn>
        </GridRow>
      </GridLayout>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Highlight`,`WithSidebar`,`Nested`]})))()}$();export{J as Default,Y as Highlight,Z as Nested,X as WithSidebar,Q as __namedExportsOrder,W as default};