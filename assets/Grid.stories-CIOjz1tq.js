import{k as D,Z as P,E as m,o as c,c as p,j as h,v as F,r as x,b as V,w as Q,d as W,a1 as X,_ as Y,F as ee,R as ne,u as te}from"./vue.esm-bundler-i9X9Ld2b.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const i=["xs","s","m","l","xl","xxl"],re={xs:0,s:576,m:1024,l:1280,xl:1440,xxl:1920},j={xs:4,s:8,m:12,l:12,xl:12,xxl:12};function H(e){let r="xs";for(const t of i)e>=re[t]&&(r=t);return r}function A(e){return{get breakpoint(){return e()},get isXS(){return e()==="xs"},get isS(){return e()==="s"},get isM(){return e()==="m"},get isL(){return e()==="l"},get isXL(){return e()==="xl"},get isXXL(){return e()==="xxl"},get isMobile(){const r=e();return r==="xs"||r==="s"},get isGtXS(){return i.indexOf(e())>i.indexOf("xs")},get isGtS(){return i.indexOf(e())>i.indexOf("s")},get isGtM(){return i.indexOf(e())>i.indexOf("m")},get isGtL(){return i.indexOf(e())>i.indexOf("l")}}}const B=Symbol("GridContext"),se="xxl",T=D({__name:"GridColumn",props:{xs:{},s:{},m:{},l:{},xl:{},xxl:{}},setup(e){const r=e,t=P(B),s=m(()=>(t==null?void 0:t.breakpoint.value)??se),o=m(()=>(t==null?void 0:t.columns.value)??j[s.value]),l=m(()=>{const a=i.indexOf(s.value);for(let n=a;n>=0;n-=1){const u=r[i[n]];if(typeof u=="number")return Math.min(Math.max(u,1),o.value)}return o.value}),d=m(()=>({"--grid-column-span":String(l.value)}));return(a,n)=>(c(),p("div",{class:"grid-column",style:F(d.value)},[h(a.$slots,"default",{},void 0,!0)],4))}}),C=b(T,[["__scopeId","data-v-4e44bac4"]]);T.__docgenInfo={exportName:"default",displayName:"GridColumn",description:"",tags:{},props:[{name:"xs",required:!1,type:{name:"number"}},{name:"s",required:!1,type:{name:"number"}},{name:"m",required:!1,type:{name:"number"}},{name:"l",required:!1,type:{name:"number"}},{name:"xl",required:!1,type:{name:"number"}},{name:"xxl",required:!1,type:{name:"number"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Grid/GridColumn.vue"]};function ie(e){const r=x("xs"),t=A(()=>r.value),s=x(null),o=x(null),l=n=>{r.value=H(n.clientWidth)},d=()=>{s.value&&o.value&&s.value.unobserve(o.value),o.value=null},a=n=>{!s.value||!n||(s.value.observe(n),o.value=n,l(n))};return V(()=>{if(typeof ResizeObserver>"u"){e.value&&l(e.value);return}s.value=new ResizeObserver(n=>{const u=n[0];(u==null?void 0:u.target)instanceof HTMLElement&&l(u.target)}),a(e.value)}),Q(e,n=>{d(),a(n)}),W(()=>{var n;d(),(n=s.value)==null||n.disconnect()}),X(t)}function oe(){const e=x("xs"),r=A(()=>e.value),t=()=>{typeof window>"u"||(e.value=H(window.innerWidth))};return V(()=>{t(),window.addEventListener("resize",t)}),W(()=>{typeof window<"u"&&window.removeEventListener("resize",t)}),X(r)}const le={key:0,class:"grid-layout__highlight","aria-hidden":"true"},K=D({__name:"GridLayout",props:{mode:{default:"container"},gutter:{default:"var(--gap-4, 16px)"},highlight:{type:Boolean,default:!1}},setup(e){const r=e,t=x(null),s=ie(t),o=oe(),l=m(()=>r.mode==="viewport"?o.breakpoint:s.breakpoint),d=m(()=>j[l.value]),a=m(()=>({"--grid-columns":String(d.value),"--grid-gutter":r.gutter}));return Y(B,{breakpoint:l,columns:d}),(n,u)=>(c(),p("div",{ref_key:"rootRef",ref:t,class:"grid-layout",style:F(a.value)},[r.highlight?(c(),p("div",le,[(c(!0),p(ee,null,ne(d.value,J=>(c(),p("div",{key:J,class:"grid-layout__highlight-column"}))),128))])):te("",!0),h(n.$slots,"default",{},void 0,!0)],4))}}),f=b(K,[["__scopeId","data-v-49b26742"]]);K.__docgenInfo={exportName:"default",displayName:"GridLayout",description:"",tags:{},props:[{name:"mode",required:!1,type:{name:"union",elements:[{name:'"container"'},{name:'"viewport"'}]},defaultValue:{func:!1,value:"'container'"}},{name:"gutter",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'var(--gap-4, 16px)'"}},{name:"highlight",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Grid/GridLayout.vue"]};const U={},de={class:"grid-row"};function ae(e,r){return c(),p("div",de,[h(e.$slots,"default",{},void 0,!0)])}const S=b(U,[["render",ae],["__scopeId","data-v-394432f2"]]);U.__docgenInfo={displayName:"GridRow",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Grid/GridRow.vue"]};const pe={title:"Components/Grid",component:f,tags:["autodocs"],argTypes:{mode:{control:{type:"select"},options:["container","viewport"],description:"Источник breakpoint: ширина GridLayout или ширина viewport."},gutter:{control:"text",description:"Стабильный gutter между колонками."},highlight:{control:"boolean",description:"Показывает полупрозрачную подсветку колонок."}},args:{mode:"container",gutter:"var(--gap-4, 16px)",highlight:!1},parameters:{docs:{description:{component:"GridLayout создает content area и передает через provide/inject текущий breakpoint и количество колонок. GridRow строит CSS Grid внутри content area. GridColumn выбирает span по props xs/s/m/l/xl/xxl и при отсутствии значения использует ближайший меньший breakpoint."}}}},w=`
  min-height: 72px;
  border-radius: 6px;
  background: lightgrey;
  box-sizing: border-box;
  color: black;
`,ue=`
  background: red;
  opacity: 0.5;
  border-radius: 6px;
`,Z=e=>({components:{GridLayout:f,GridRow:S,GridColumn:C},setup(){return{args:e,tileStyles:w}},template:`
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
  `}),g={render:Z},v={args:{highlight:!0},render:Z},y={args:{highlight:!0},render:e=>({components:{GridLayout:f,GridRow:S,GridColumn:C},setup(){return{args:e,tileStyles:w}},template:`
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
    `})},G={args:{highlight:!0},render:e=>({components:{GridLayout:f,GridRow:S,GridColumn:C},setup(){return{args:e,tileStyles:w,nestedStyles:ue}},template:`
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
    `})};var _,k,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: renderDefaultGrid
}`,...(L=(k=g.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var R,N,O;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    highlight: true
  },
  render: renderDefaultGrid
}`,...(O=(N=v.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var q,M,E;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(M=y.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var I,z,$;G.parameters={...G.parameters,docs:{...(I=G.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...($=(z=G.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const xe=["Default","Highlight","WithSidebar","Nested"];export{g as Default,v as Highlight,G as Nested,y as WithSidebar,xe as __namedExportsOrder,pe as default};
