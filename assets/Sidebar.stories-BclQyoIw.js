import{k as L,r as d,R as v,w as z,o as m,c as p,a as w,A as x,H as r,j as s,x as h,v as N,Q as V,q,z as _,u as f}from"./vue.esm-bundler-W7H8yL8W.js";import{h as C,d as M,a as R,b as P,c as F,e as X}from"./IconSettingsOutline-SMThP7n1.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as j}from"./Tooltip-DhTuvt1n.js";import{u as D}from"./useResize-D8J3WD3K.js";import{B as A}from"./Badge-D5hw232p.js";import"./IconAccessibleFilled-Bv--GMkI.js";import"./floating-vue-DpiWouKj.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";const E=L({__name:"Sidebar",props:{padding:{default:16},width:{default:300},maxWidth:{default:"100vw"},minWidth:{default:"200px"},compactWidth:{default:0}},setup(c){const i=c,a=d(i.width),n=d(!1),l=d(!1),t=d(null);v("sidebar-width",a),v("sidebar-is-resizing",n),v("sidebar-is-compact",l);const g=()=>{n.value=!0,document.addEventListener("mousemove",e),document.addEventListener("mouseup",u),document.addEventListener("touchmove",e),document.addEventListener("touchend",u),document.body.classList.add("prevent-user-select")},e=o=>{if(n.value&&t.value){const S=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,T=t.value.offsetLeft;a.value=S-T}n.value&&o instanceof MouseEvent&&o.buttons!==1&&(n.value=!1)},u=()=>{n.value=!1,document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",e),document.removeEventListener("touchend",e),document.body.classList.remove("prevent-user-select")};return z(()=>a.value,()=>{a.value<i.compactWidth?l.value=!0:l.value=!1}),(o,S)=>(m(),p("div",{ref_key:"sidebarRef",ref:t,class:h(["sidebar"]),style:N({width:`${a.value}px`,padding:`${i.padding}px`,maxWidth:i.maxWidth,minWidth:i.minWidth})},[w("div",{class:"resize-handle",onMousedown:g,onTouchstart:g},[x(r(C))],32),s(o.$slots,"default",{},void 0,!0)],4))}}),$=I(E,[["__scopeId","data-v-724b079a"]]);E.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"Padding"},defaultValue:{func:!1,value:"16"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100vw'"}},{name:"minWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'200px'"}},{name:"compactWidth",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue"]};const W={},H={class:h(["SidebarList"])};function Q(c,i){return m(),p("div",H,[s(c.$slots,"default",{},void 0,!0)])}const G=I(W,[["render",Q],["__scopeId","data-v-ceaf0897"]]);W.__docgenInfo={displayName:"SidebarList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/SidebarList.vue"]};const J={key:0,class:"left"},K={key:2,class:"right"},k=L({__name:"SidebarItem",props:{selected:{type:Boolean}},setup(c){const i=c,a=d(null),n=d(null),l=d(!1),t=V("sidebar-is-compact");return D(n,()=>{if(a.value){const{scrollWidth:e,clientWidth:u}=a.value;l.value=e>u}}),(e,u)=>(m(),q(j,{disabled:!(l.value||r(t)),placement:"right"},{popper:_(()=>[s(e.$slots,"tooltip",{},()=>[s(e.$slots,"default",{},void 0,!0)],!0)]),default:_(()=>[w("button",{ref_key:"buttonElement",ref:n,class:h(["SidebarItem",{selected:i.selected,compact:r(t)}])},[e.$slots.left&&!r(t)?(m(),p("div",J,[s(e.$slots,"left",{},void 0,!0)])):f("",!0),r(t)?f("",!0):(m(),p("div",{key:1,ref_key:"centerElement",ref:a,class:"center"},[s(e.$slots,"default",{},void 0,!0)],512)),e.$slots.right&&!r(t)?(m(),p("div",K,[s(e.$slots,"right",{},void 0,!0)])):f("",!0),s(e.$slots,"compact",{},()=>[r(t)?s(e.$slots,"left",{key:0},void 0,!0):f("",!0)],!0)],2)]),_:3},8,["disabled"]))}}),U=I(k,[["__scopeId","data-v-76f2723f"]]);k.__docgenInfo={exportName:"default",displayName:"SidebarItem",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}}],slots:[{name:"left"},{name:"default"},{name:"right"},{name:"compact"},{name:"tooltip"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/SidebarItem.vue"]};const re={title:"Components/Sidebar",component:$,tags:["!autodocs"],parameters:{layout:"fullscreen"}},b={render:()=>({components:{Sidebar:$,SidebarItem:U,SidebarList:G,Badge:A,IconMusicOutline:M,IconBuildingBroadcastTowerOutline:R,IconPlaylistOutline:P,IconSettingsOutline:F,IconInfoTriangleOutline:X},template:`
      <Sidebar :compactWidth="120" minWidth="100px">
        <SidebarList>
          <SidebarItem>
            <template #left>
              <IconMusicOutline />
            </template>
            Треки
            <template #right>
              <Badge mode="secondary">99+</Badge>
            </template>
          </SidebarItem>
          <SidebarItem selected>
            <template #left>
              <IconBuildingBroadcastTowerOutline />
            </template>
            Радио
            <template #right>
              <Badge mode="default">2</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconPlaylistOutline />
            </template>
            Плейлисты
            <template #right>
              <Badge mode="secondary">3</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconSettingsOutline />
            </template>
            Настройки
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconInfoTriangleOutline />
            </template>
            Очень длинное название для кнопки в сайдбаре
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    `})};var y,B,O;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Sidebar,
      SidebarItem,
      SidebarList,
      Badge,
      IconMusicOutline,
      IconBuildingBroadcastTowerOutline,
      IconPlaylistOutline,
      IconSettingsOutline,
      IconInfoTriangleOutline
    },
    template: \`
      <Sidebar :compactWidth="120" minWidth="100px">
        <SidebarList>
          <SidebarItem>
            <template #left>
              <IconMusicOutline />
            </template>
            Треки
            <template #right>
              <Badge mode="secondary">99+</Badge>
            </template>
          </SidebarItem>
          <SidebarItem selected>
            <template #left>
              <IconBuildingBroadcastTowerOutline />
            </template>
            Радио
            <template #right>
              <Badge mode="default">2</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconPlaylistOutline />
            </template>
            Плейлисты
            <template #right>
              <Badge mode="secondary">3</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconSettingsOutline />
            </template>
            Настройки
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconInfoTriangleOutline />
            </template>
            Очень длинное название для кнопки в сайдбаре
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    \`
  })
}`,...(O=(B=b.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const de=["Default"];export{b as Default,de as __namedExportsOrder,re as default};
