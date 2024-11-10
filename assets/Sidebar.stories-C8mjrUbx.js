import{k as w,r as o,U as g,w as z,o as d,c as u,a as $,A as T,H as l,j as s,x as S,v as x,S as N,q as V,z as _,u as f}from"./vue.esm-bundler-IF9MMzN9.js";import{h as q,d as C,a as R,b as M,c as P,e as F}from"./IconSettingsOutline-DjJnHVEG.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as j}from"./Tooltip-V-Nod6Gw.js";import{u as D}from"./useResize-FG2yugNy.js";import{B as X}from"./Badge-B3ab5Vfw.js";import"./IconAccessibleFilled-BfHDHi1J.js";import"./floating-vue-CjteXB9K.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";const W=w({__name:"Sidebar",props:{padding:{default:16},width:{default:300},maxWidth:{default:"100vw"},minWidth:{default:"200px"},compactWidth:{default:0}},setup(m){const i=m,a=o(i.width),n=o(!1),r=o(!1),t=o(null);g("sidebar-width",a),g("sidebar-is-resizing",n),g("sidebar-is-compact",r);const h=()=>{n.value=!0,document.addEventListener("mousemove",e),document.addEventListener("mouseup",p),document.body.style.userSelect="none"},e=c=>{if(n.value&&c.clientX>0&&t.value){const v=t.value.offsetLeft;a.value=c.clientX-v}n.value&&c.buttons!==1&&(n.value=!1)},p=()=>{n.value=!1,document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",e),document.body.style.userSelect=""};return z(()=>a.value,()=>{a.value<i.compactWidth?r.value=!0:r.value=!1}),(c,v)=>(d(),u("div",{ref_key:"sidebarRef",ref:t,class:S(["sidebar"]),style:x({width:`${a.value}px`,padding:`${i.padding}px`,maxWidth:i.maxWidth,minWidth:i.minWidth})},[$("div",{class:"resize-handle",onMousedown:h},[T(l(q))],32),s(c.$slots,"default",{},void 0,!0)],4))}}),k=I(W,[["__scopeId","data-v-24705fc9"]]);W.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"Padding"},defaultValue:{func:!1,value:"16"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100vw'"}},{name:"minWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'200px'"}},{name:"compactWidth",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue"]};const L={},A={class:S(["SidebarList"])};function H(m,i){return d(),u("div",A,[s(m.$slots,"default",{},void 0,!0)])}const U=I(L,[["render",H],["__scopeId","data-v-ceaf0897"]]);L.__docgenInfo={displayName:"SidebarList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/SidebarList.vue"]};const G={key:0,class:"left"},J={key:2,class:"right"},E=w({__name:"SidebarItem",props:{selected:{type:Boolean}},setup(m){const i=m,a=o(null),n=o(null),r=o(!1),t=N("sidebar-is-compact");return D(n,()=>{if(a.value){const{scrollWidth:e,clientWidth:p}=a.value;r.value=e>p}}),(e,p)=>(d(),V(j,{disabled:!(r.value||l(t)),placement:"right"},{popper:_(()=>[s(e.$slots,"tooltip",{},()=>[s(e.$slots,"default",{},void 0,!0)],!0)]),default:_(()=>[$("button",{ref_key:"buttonElement",ref:n,class:S(["SidebarItem",{selected:i.selected,compact:l(t)}])},[e.$slots.left&&!l(t)?(d(),u("div",G,[s(e.$slots,"left",{},void 0,!0)])):f("",!0),l(t)?f("",!0):(d(),u("div",{key:1,ref_key:"centerElement",ref:a,class:"center"},[s(e.$slots,"default",{},void 0,!0)],512)),e.$slots.right&&!l(t)?(d(),u("div",J,[s(e.$slots,"right",{},void 0,!0)])):f("",!0),s(e.$slots,"compact",{},()=>[l(t)?s(e.$slots,"left",{key:0},void 0,!0):f("",!0)],!0)],2)]),_:3},8,["disabled"]))}}),K=I(E,[["__scopeId","data-v-76f2723f"]]);E.__docgenInfo={exportName:"default",displayName:"SidebarItem",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}}],slots:[{name:"left"},{name:"default"},{name:"right"},{name:"compact"},{name:"tooltip"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/SidebarItem.vue"]};const le={title:"Components/Sidebar",component:k,tags:["!autodocs"],parameters:{layout:"fullscreen"}},b={render:()=>({components:{Sidebar:k,SidebarItem:K,SidebarList:U,Badge:X,IconMusicOutline:C,IconBuildingBroadcastTowerOutline:R,IconPlaylistOutline:M,IconSettingsOutline:P,IconInfoTriangleOutline:F},template:`
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
}`,...(O=(B=b.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const oe=["Default"];export{b as Default,oe as __namedExportsOrder,le as default};
