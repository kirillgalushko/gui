import{j as W,r,U as g,w as N,e as l,f as u,t as $,A as V,g as s,x as S,v as q,S as C,l as R,z as _,I as o,u as f}from"./vue.esm-bundler-0yPEwasB.js";import{I as k}from"./Icon-DuNk9YsD.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as F}from"./Tooltip-CBigJogR.js";import{u as j}from"./useResize-CWvUv9QY.js";import{B as D}from"./Badge-BxJZAh9Z.js";import"./floating-vue-vpDwKnjw.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";const L=W({__name:"Sidebar",props:{padding:{default:16},width:{default:300},maxWidth:{default:"100vw"},minWidth:{default:"200px"},compactWidth:{default:0}},setup(m){const i=m,a=r(i.width),n=r(!1),d=r(!1),t=r(null);g("sidebar-width",a),g("sidebar-is-resizing",n),g("sidebar-is-compact",d);const h=()=>{n.value=!0,document.addEventListener("mousemove",e),document.addEventListener("mouseup",p),document.body.style.userSelect="none"},e=c=>{if(n.value&&c.clientX>0&&t.value){const I=t.value.offsetLeft;a.value=c.clientX-I}n.value&&c.buttons!==1&&(n.value=!1)},p=()=>{n.value=!1,document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",e),document.body.style.userSelect=""};return N(()=>a.value,()=>{a.value<i.compactWidth?d.value=!0:d.value=!1}),(c,I)=>(l(),u("div",{ref_key:"sidebarRef",ref:t,class:S(["sidebar"]),style:q({width:`${a.value}px`,padding:`${i.padding}px`,maxWidth:i.maxWidth,minWidth:i.minWidth})},[$("div",{class:"resize-handle",onMousedown:h},[V(k,{name:"grip-vertical"})],32),s(c.$slots,"default",{},void 0,!0)],4))}}),E=v(L,[["__scopeId","data-v-5c7ce9e4"]]);L.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"Padding"},defaultValue:{func:!1,value:"16"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100vw'"}},{name:"minWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'200px'"}},{name:"compactWidth",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue"]};const x={},O={class:S(["SidebarList"])};function T(m,i){return l(),u("div",O,[s(m.$slots,"default",{},void 0,!0)])}const X=v(x,[["render",T],["__scopeId","data-v-ceaf0897"]]);x.__docgenInfo={displayName:"SidebarList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/SidebarList.vue"]};const A={key:0,class:"left"},M={key:2,class:"right"},z=W({__name:"SidebarItem",props:{selected:{type:Boolean}},setup(m){const i=m,a=r(null),n=r(null),d=r(!1),t=C("sidebar-is-compact");return j(n,()=>{if(a.value){const{scrollWidth:e,clientWidth:p}=a.value;d.value=e>p}}),(e,p)=>(l(),R(F,{disabled:!(d.value||o(t)),placement:"right"},{popper:_(()=>[s(e.$slots,"tooltip",{},()=>[s(e.$slots,"default",{},void 0,!0)],!0)]),default:_(()=>[$("button",{ref_key:"buttonElement",ref:n,class:S(["SidebarItem",{selected:i.selected,compact:o(t)}])},[e.$slots.left&&!o(t)?(l(),u("div",A,[s(e.$slots,"left",{},void 0,!0)])):f("",!0),o(t)?f("",!0):(l(),u("div",{key:1,ref_key:"centerElement",ref:a,class:"center"},[s(e.$slots,"default",{},void 0,!0)],512)),e.$slots.right&&!o(t)?(l(),u("div",M,[s(e.$slots,"right",{},void 0,!0)])):f("",!0),s(e.$slots,"compact",{},()=>[o(t)?s(e.$slots,"left",{key:0},void 0,!0):f("",!0)],!0)],2)]),_:3},8,["disabled"]))}}),P=v(z,[["__scopeId","data-v-76f2723f"]]);z.__docgenInfo={exportName:"default",displayName:"SidebarItem",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}}],slots:[{name:"left"},{name:"default"},{name:"right"},{name:"compact"},{name:"tooltip"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/SidebarItem.vue"]};const ee={title:"Example/Sidebar",component:E,tags:["autodocs"]},b={render:()=>({components:{Sidebar:E,SidebarItem:P,SidebarList:X,Icon:k,Badge:D},template:`
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
}`,...(w=(B=b.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const te=["Default"];export{b as Default,te as __namedExportsOrder,ee as default};
