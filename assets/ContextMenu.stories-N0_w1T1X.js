import{k as w,D as d,o as i,c as k,a as B,v as p,q as M,A as E,z as C,T as F,S as N,F as D,j as R,u as A,r as o,b as T,d as $}from"./vue.esm-bundler-W7H8yL8W.js";import{B as V}from"./BaseMenu-DrMCUTa6.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as v}from"./BaseMenuItem-EHtg8ywD.js";import{H as h,u as P}from"./HoverMenu-B9LbJ8qG.js";import{B as y,a as S}from"./BaseMenuSeparator-xU1p7D8z.js";import{a as j,d as q,b as z}from"./IconShareOutline-CxpFJ1iF.js";import{d as U}from"./IconFeatherOutline-Hm63c1BZ.js";import{a as W}from"./IconMailOutline-DG9UbEWW.js";import{d as X}from"./IconPencilOutline-Dl8SnlB7.js";import{f as Y,s as G}from"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./IconChevronRightOutline-C3VqXFq4.js";import"./IconAccessibleFilled-Bv--GMkI.js";const O=w({__name:"ContextMenu",props:{data:{}},setup(e){const t=e,n=d(()=>({position:"fixed",left:`${t.data.position.value.x}px`,top:`${t.data.position.value.y}px`})),u=d(()=>({...t.data.floatingStyles.value}));return(s,l)=>(i(),k(D,null,[B("div",{ref:t.data.positionRef,style:p(n.value)},null,4),(i(),M(N,{to:"body"},[E(F,{name:"fade"},{default:C(()=>[t.data.isContextMenuVisible.value?(i(),M(V,{key:0,ref:t.data.floatingRef,style:p(u.value)},{default:C(()=>[R(s.$slots,"default",{},void 0,!0)]),_:3},8,["style"])):A("",!0)]),_:3})]))],64))}}),_=H(O,[["__scopeId","data-v-4b886c96"]]);O.__docgenInfo={exportName:"default",displayName:"ContextMenu",description:"",tags:{},props:[{name:"data",required:!0,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenu.vue"]};v.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuItem.vue"]};h.__docgenInfo={exportName:"HoverMenu",displayName:"HoverMenu",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"ref",title:"binding"}]},{name:"menu"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextSubmenu.vue"]};y.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuList.vue"]};S.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuSeparator.vue"]};const J=(e,t)=>{for(;e;){if(e===t)return!0;e=e.parentNode}return!1},K=()=>{const e=o(!1),t=o({x:0,y:0}),n=o(null),u=o(null),s=o(null),l=o([Y(),G()]),{floatingStyles:L,update:b}=P(u,s,{placement:"right-start",strategy:"fixed",middleware:l}),c=a=>{a.preventDefault(),t.value={x:a.clientX,y:a.clientY},e.value=!0,b()},m=()=>{e.value=!1},x=a=>{n.value&&!J(a.target,n.value)&&(e.value=!1)};return T(()=>{n.value&&(n.value.addEventListener("contextmenu",c),document.addEventListener("click",m),document.addEventListener("contextmenu",x))}),$(()=>{n.value&&(n.value.removeEventListener("contextmenu",c),document.removeEventListener("click",m),document.addEventListener("contextmenu",x))}),{contextMenuData:{floatingStyles:L,floatingRef:s,position:t,positionRef:u,isContextMenuVisible:e},targetRef:n}},me={title:"Components/ContextMenu",component:_,tags:["!autodocs"],argTypes:{},args:{}},r={args:{},render:e=>({components:{ContextMenu:_,ContextMenuItem:v,ContextMenuList:y,ContextMenuSeparator:S,ContextSubmenu:h,IconPencilOutline:X,IconExternalLinkOutline:j,IconShareOutline:q,IconFeatherOutline:U,IconMailOutline:W,IconArchiveOutline:z},setup(){const{contextMenuData:t,targetRef:n}=K();return{args:e,contextMenuData:t,targetRef:n}},template:`
    <div>
      <div
        ref="targetRef"
        style="width: 500px; height: 500px; border: 1px dashed grey; display: flex; justify-content: center; align-items: center;"
      >
        <a>Используй правую кнопку мыши в этой области</a>
      </div>

      <ContextMenu :data="contextMenuData">
        <ContextMenuList>
          <ContextMenuItem><IconPencilOutline />Открыть</ContextMenuItem>
          <ContextMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</ContextMenuItem>
          <ContextSubmenu>
            <ContextMenuItem showArrow><IconShareOutline />Поделиться</ContextMenuItem>
            <template #menu>
              <ContextMenuList>
                <ContextMenuItem><IconMailOutline />Отправить по почте</ContextMenuItem>
                <ContextMenuItem><IconFeatherOutline />Отправить голубем</ContextMenuItem>
              </ContextMenuList>
            </template>
          </ContextSubmenu>
          <ContextMenuSeparator />
          <ContextMenuItem><IconArchiveOutline />Архивировать</ContextMenuItem>
        </ContextMenuList>
      </ContextMenu>
      </div>
    `})};var f,I,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      ContextMenu,
      ContextMenuItem,
      ContextMenuList,
      ContextMenuSeparator,
      ContextSubmenu,
      IconPencilOutline,
      IconExternalLinkOutline,
      IconShareOutline,
      IconFeatherOutline,
      IconMailOutline,
      IconArchiveOutline
    },
    setup() {
      const {
        contextMenuData,
        targetRef
      } = useContextMenu();
      return {
        args,
        contextMenuData,
        targetRef
      };
    },
    template: \`
    <div>
      <div
        ref="targetRef"
        style="width: 500px; height: 500px; border: 1px dashed grey; display: flex; justify-content: center; align-items: center;"
      >
        <a>Используй правую кнопку мыши в этой области</a>
      </div>

      <ContextMenu :data="contextMenuData">
        <ContextMenuList>
          <ContextMenuItem><IconPencilOutline />Открыть</ContextMenuItem>
          <ContextMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</ContextMenuItem>
          <ContextSubmenu>
            <ContextMenuItem showArrow><IconShareOutline />Поделиться</ContextMenuItem>
            <template #menu>
              <ContextMenuList>
                <ContextMenuItem><IconMailOutline />Отправить по почте</ContextMenuItem>
                <ContextMenuItem><IconFeatherOutline />Отправить голубем</ContextMenuItem>
              </ContextMenuList>
            </template>
          </ContextSubmenu>
          <ContextMenuSeparator />
          <ContextMenuItem><IconArchiveOutline />Архивировать</ContextMenuItem>
        </ContextMenuList>
      </ContextMenu>
      </div>
    \`
  })
}`,...(g=(I=r.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const xe=["Default"];export{r as Default,xe as __namedExportsOrder,me as default};
