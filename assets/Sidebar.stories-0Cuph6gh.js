import{e as W,A as d,R as v,w as V,o as m,b as u,l as $,x as N,d as r,t as g,s as q,V as C,W as R,Q as F,g as O,v as _,C as l,q as f}from"./vue.esm-bundler-DUApOrFq.js";import{I as L}from"./Icon-c9maYRQP.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as D}from"./Tooltip-C5WPrTKh.js";import{B as M}from"./Badge-DDkEZ2FX.js";import"./floating-vue-BM4SLnXu.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";const k=W({__name:"Sidebar",props:{padding:{default:16},width:{default:300},maxWidth:{default:"100vw"},minWidth:{default:"200px"},compactWidth:{default:0}},setup(n){const a=n,t=d(a.width),i=d(!1),o=d(!1),s=d(null);v("sidebar-width",t),v("sidebar-is-resizing",i),v("sidebar-is-compact",o);const h=()=>{i.value=!0,document.addEventListener("mousemove",e),document.addEventListener("mouseup",p),document.body.style.userSelect="none"},e=c=>{if(i.value&&c.clientX>0&&s.value){const I=s.value.offsetLeft;t.value=c.clientX-I}i.value&&c.buttons!==1&&(i.value=!1)},p=()=>{i.value=!1,document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",e),document.body.style.userSelect=""};return V(()=>t.value,()=>{t.value<a.compactWidth?o.value=!0:o.value=!1}),(c,I)=>(m(),u("div",{ref_key:"sidebarRef",ref:s,class:g(["sidebar"]),style:q({width:`${t.value}px`,padding:`${a.padding}px`,maxWidth:a.maxWidth,minWidth:a.minWidth})},[$("div",{class:"resize-handle",onMousedown:h},[N(L,{name:"grip-vertical"})],32),r(c.$slots,"default",{},void 0,!0)],4))}}),E=S(k,[["__scopeId","data-v-5c7ce9e4"]]);k.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"Padding"},defaultValue:{func:!1,value:"16"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100vw'"}},{name:"minWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'200px'"}},{name:"compactWidth",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue"]};const x={},T={class:g(["SidebarList"])};function X(n,a){return m(),u("div",T,[r(n.$slots,"default",{},void 0,!0)])}const j=S(x,[["render",X],["__scopeId","data-v-ceaf0897"]]);x.__docgenInfo={displayName:"SidebarList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/SidebarList.vue"]};function A(n,a){const t=d(null);C(()=>{t.value=new ResizeObserver(a),n.value&&t.value.observe(n.value),a()}),R(()=>{t.value&&n.value&&t.value.unobserve(n.value)})}const P={key:0,class:"left"},Q={key:2,class:"right"},z=W({__name:"SidebarItem",props:{selected:{type:Boolean}},setup(n){const a=n,t=d(null),i=d(null),o=d(!1),s=F("sidebar-is-compact");return A(i,()=>{if(t.value){const{scrollWidth:e,clientWidth:p}=t.value;o.value=e>p}}),(e,p)=>(m(),O(D,{disabled:!(o.value||l(s)),placement:"right"},{popper:_(()=>[r(e.$slots,"tooltip",{},()=>[r(e.$slots,"default",{},void 0,!0)],!0)]),default:_(()=>[$("button",{ref_key:"buttonElement",ref:i,class:g(["SidebarItem",{selected:a.selected,compact:l(s)}])},[e.$slots.left&&!l(s)?(m(),u("div",P,[r(e.$slots,"left",{},void 0,!0)])):f("",!0),l(s)?f("",!0):(m(),u("div",{key:1,ref_key:"centerElement",ref:t,class:"center"},[r(e.$slots,"default",{},void 0,!0)],512)),e.$slots.right&&!l(s)?(m(),u("div",Q,[r(e.$slots,"right",{},void 0,!0)])):f("",!0),r(e.$slots,"compact",{},()=>[l(s)?r(e.$slots,"left",{key:0},void 0,!0):f("",!0)],!0)],2)]),_:3},8,["disabled"]))}}),U=S(z,[["__scopeId","data-v-9fbc849e"]]);z.__docgenInfo={exportName:"default",displayName:"SidebarItem",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}}],slots:[{name:"left"},{name:"default"},{name:"right"},{name:"compact"},{name:"tooltip"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/SidebarItem.vue"]};const te={title:"Example/Sidebar",component:E,tags:["autodocs"]},b={render:()=>({components:{Sidebar:E,SidebarItem:U,SidebarList:j,Icon:L,Badge:M},template:`
      <Sidebar :compactWidth="120" minWidth="100px">
        <SidebarList>
          <SidebarItem>
            <template #left>
              <Icon name="music" />
            </template>
            Треки
            <template #right>
              <Badge mode="secondary">99+</Badge>
            </template>
          </SidebarItem>
          <SidebarItem selected>
            <template #left>
              <Icon name="building-broadcast-tower" />
            </template>
            Радио
            <template #right>
              <Badge mode="default">2</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="playlist" />
            </template>
            Плейлисты
            <template #right>
              <Badge mode="secondary">3</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="settings" />
            </template>
            Настройки
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="info-triangle" />
            </template>
            Очень длинное название для кнопки в сайдбаре
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    `})};var y,B,w;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Sidebar,
      SidebarItem,
      SidebarList,
      Icon,
      Badge
    },
    template: \`
      <Sidebar :compactWidth="120" minWidth="100px">
        <SidebarList>
          <SidebarItem>
            <template #left>
              <Icon name="music" />
            </template>
            Треки
            <template #right>
              <Badge mode="secondary">99+</Badge>
            </template>
          </SidebarItem>
          <SidebarItem selected>
            <template #left>
              <Icon name="building-broadcast-tower" />
            </template>
            Радио
            <template #right>
              <Badge mode="default">2</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="playlist" />
            </template>
            Плейлисты
            <template #right>
              <Badge mode="secondary">3</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="settings" />
            </template>
            Настройки
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="info-triangle" />
            </template>
            Очень длинное название для кнопки в сайдбаре
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    \`
  })
}`,...(w=(B=b.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const ae=["Default"];export{b as Default,ae as __namedExportsOrder,te as default};
