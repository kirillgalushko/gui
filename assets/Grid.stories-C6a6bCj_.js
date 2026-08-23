import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,B as n,C as r,G as i,H as a,L as o,M as s,O as c,R as l,S as u,St as ee,W as te,a as d,dt as f,h as p,ut as m,xt as h,y as g}from"./iframe-Z95Hq5ox.js";import{n as _,t as v}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{a as ne,i as y,n as b,o as x,r as S,s as C,t as re}from"./useViewportBreakpoint-Dv1nqHdt.js";var w;function T(){return(T=e((()=>{w=Symbol(`GridContext`)})))()}var E,D;function O(){return(O=e((()=>{d(),C(),T(),E=`xxl`,D=c({__name:`GridColumn`,props:{xs:{},s:{},m:{},l:{},xl:{},xxl:{}},setup(e){let t=e,a=s(w),o=g(()=>a?.breakpoint.value??E),c=g(()=>a?.columns.value??S[o.value]),l=g(()=>{let e=y.indexOf(o.value);for(let n=e;n>=0;--n){let e=y[n];if(e===void 0)continue;let r=t[e];if(typeof r==`number`)return Math.min(Math.max(r,1),c.value)}return c.value}),u=g(()=>({"--grid-column-span":String(l.value)}));return(e,t)=>(n(),r(`div`,{class:`grid-column`,style:h(u.value)},[i(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var k;function A(){return(A=e((()=>{O(),_(),k=v(D,[[`__scopeId`,`data-v-74aaeef3`]]),D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`GridColumn`,description:``,tags:{},props:[{name:`xs`,required:!1,type:{name:`GridColumnExtraSmallSize`}},{name:`s`,required:!1,type:{name:`GridColumnSmallSize`}},{name:`m`,required:!1,type:{name:`GridColumnLargeSize`}},{name:`l`,required:!1,type:{name:`GridColumnLargeSize`}},{name:`xl`,required:!1,type:{name:`GridColumnLargeSize`}},{name:`xxl`,required:!1,type:{name:`GridColumnLargeSize`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Grid/GridColumn.vue`]})})))()}function j(e){let n=f(`xs`),r=ne(()=>n.value),i=f(null),a=f(null),s=e=>{n.value=x(e.clientWidth)},c=()=>{i.value&&a.value&&i.value.unobserve(a.value),a.value=null},u=e=>{!i.value||!e||(i.value.observe(e),a.value=e,s(e))};return l(()=>{if(typeof ResizeObserver>`u`){e.value&&s(e.value);return}i.value=new ResizeObserver(e=>{let t=e[0];t?.target instanceof HTMLElement&&s(t.target)}),u(e.value)}),t(()=>e.value,e=>{c(),u(e)}),o(()=>{c(),i.value?.disconnect()}),m(r)}function M(){return(M=e((()=>{d(),C()})))()}var N,P,F,I;function L(){return(L=e((()=>{d(),C(),M(),re(),T(),N={key:0},P={key:1,class:`grid-layout__highlight`,"aria-hidden":`true`},F=`1728px`,I=c({__name:`GridLayout`,props:{mode:{default:`container`},gutter:{default:`var(--gap-4, 16px)`},highlight:{type:Boolean,default:!1},stretched:{type:Boolean,default:!1}},setup(e){let t=e,o=f(null),s=j(o),c=b(),l=g(()=>t.mode===`viewport`?c.breakpoint:s.breakpoint),d=g(()=>S[l.value]),m=g(()=>l.value===`xs`?`12px`:`24px`),_=g(()=>({"--grid-columns":String(d.value),"--grid-gutter":t.gutter,"--grid-layout-padding":m.value,"--grid-layout-max-width":t.stretched?`none`:F}));return a(w,{breakpoint:l,columns:d}),(e,a)=>(n(),r(`div`,{ref_key:`rootRef`,ref:o,class:`grid-layout`,style:h(_.value)},[t.highlight?(n(),r(`div`,N,ee(l.value),1)):u(``,!0),t.highlight?(n(),r(`div`,P,[(n(!0),r(p,null,te(d.value,e=>(n(),r(`div`,{key:e,class:`grid-layout__highlight-column`}))),128))])):u(``,!0),i(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var R;function z(){return(z=e((()=>{L(),_(),R=v(I,[[`__scopeId`,`data-v-771d7030`]]),I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:`default`,displayName:`GridLayout`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`union`,elements:[{name:`"container"`},{name:`"viewport"`}]},defaultValue:{func:!1,value:`"container"`}},{name:`gutter`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"var(--gap-4, 16px)"`}},{name:`highlight`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`stretched`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Grid/GridLayout.vue`]})})))()}var B;function V(){return(V=e((()=>{d(),B=c({__name:`GridRow`,props:{rowGap:{default:`0`}},setup(e){let t=e;return(e,a)=>(n(),r(`div`,{class:`grid-row`,style:h({"--grid-row-gap":t.rowGap})},[i(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var H;function U(){return(U=e((()=>{V(),_(),H=v(B,[[`__scopeId`,`data-v-8bd73c52`]]),B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`GridRow`,description:``,tags:{},props:[{name:`rowGap`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"0"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Grid/GridRow.vue`]})})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{A(),z(),U(),W={title:`Components/Grid`,component:R,tags:[`autodocs`],argTypes:{mode:{control:{type:`select`},options:[`container`,`viewport`],description:`Источник breakpoint: ширина GridLayout или ширина viewport.`},gutter:{control:`text`,description:`Стабильный gutter между колонками.`},highlight:{control:`boolean`,description:`Показывает полупрозрачную подсветку колонок.`},stretched:{control:`boolean`,description:`Отключает максимальную ширину GridLayout.`}},args:{mode:`container`,gutter:`var(--gap-4, 16px)`,highlight:!1,stretched:!1},parameters:{docs:{description:{component:`GridLayout создает content area и передает через provide/inject текущий breakpoint и количество колонок. GridRow строит CSS Grid внутри content area. GridColumn выбирает span по props xs/s/m/l/xl/xxl и при отсутствии значения использует ближайший меньший breakpoint.`}}}},G=`
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