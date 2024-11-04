import{e as B,B as d,o as i,b as k,l as N,s as p,g as M,x as R,v as C,T as D,S as E,F,d as T,q as V,A as o,V as A,W as H}from"./vue.esm-bundler-vqfIXXGK.js";import{B as q}from"./BaseMenu-Bvk-bTua.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as v,a as h,b as y}from"./BaseMenuSeparator-Chj3ryDL.js";import{H as _,u as j}from"./HoverMenu-OfVbET1Z.js";import{I as W}from"./Icon-DoDBWsCq.js";import{f as z,s as O}from"./floating-ui.dom.browser.min-Dq8c3VDt.js";const S=B({__name:"ContextMenu",props:{data:{}},setup(e){const t=e,n=d(()=>({position:"fixed",left:`${t.data.position.value.x}px`,top:`${t.data.position.value.y}px`})),s=d(()=>({...t.data.floatingStyles.value}));return(u,m)=>(i(),k(F,null,[N("div",{ref:t.data.positionRef,style:p(n.value)},null,4),(i(),M(E,{to:"body"},[R(D,{name:"fade"},{default:C(()=>[t.data.isContextMenuVisible.value?(i(),M(q,{key:0,ref:t.data.floatingRef,style:p(s.value)},{default:C(()=>[T(u.$slots,"default",{},void 0,!0)]),_:3},8,["style"])):V("",!0)]),_:3})]))],64))}}),L=$(S,[["__scopeId","data-v-4b886c96"]]);S.__docgenInfo={exportName:"default",displayName:"ContextMenu",description:"",tags:{},props:[{name:"data",required:!0,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenu.vue"]};v.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuItem.vue"]};_.__docgenInfo={exportName:"HoverMenu",displayName:"HoverMenu",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"ref",title:"binding"}]},{name:"menu"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextSubmenu.vue"]};h.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuList.vue"]};y.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuSeparator.vue"]};const U=(e,t)=>{for(;e;){if(e===t)return!0;e=e.parentNode}return!1},X=()=>{const e=o(!1),t=o({x:0,y:0}),n=o(null),s=o(null),u=o(null),m=o([z(),O()]),{floatingStyles:b,update:w}=j(s,u,{placement:"right-start",strategy:"fixed",middleware:m}),c=a=>{a.preventDefault(),t.value={x:a.clientX,y:a.clientY},e.value=!0,w()},l=()=>{e.value=!1},x=a=>{n.value&&!U(a.target,n.value)&&(e.value=!1)};return A(()=>{n.value&&(n.value.addEventListener("contextmenu",c),document.addEventListener("click",l),document.addEventListener("contextmenu",x))}),H(()=>{n.value&&(n.value.removeEventListener("contextmenu",c),document.removeEventListener("click",l),document.addEventListener("contextmenu",x))}),{contextMenuData:{floatingStyles:b,floatingRef:u,position:t,positionRef:s,isContextMenuVisible:e},targetRef:n}},ee={title:"Example/ContextMenu",component:L,tags:["autodocs"],argTypes:{},args:{}},r={args:{},render:e=>({components:{ContextMenu:L,ContextMenuItem:v,ContextMenuList:h,ContextMenuSeparator:y,Icon:W,ContextSubmenu:_},setup(){const{contextMenuData:t,targetRef:n}=X();return{args:e,contextMenuData:t,targetRef:n}},template:`
    <div>
      <div
        ref="targetRef"
        style="width: 500px; height: 500px; border: 1px dashed grey; display: flex; justify-content: center; align-items: center;"
      >
        <a>Используй правую кнопку мыши в этой области</a>
      </div>

      <ContextMenu :data="contextMenuData">
        <ContextMenuList>
          <ContextMenuItem><Icon name="pencil" />Открыть</ContextMenuItem>
          <ContextMenuItem><Icon name="external-link" />Открыть в новой вкладке</ContextMenuItem>
          <ContextSubmenu>
            <ContextMenuItem showArrow><Icon name="share" />Поделиться</ContextMenuItem>
            <template #menu>
              <ContextMenuList>
                <ContextMenuItem><Icon name="mail" />Отправить по почте</ContextMenuItem>
                <ContextMenuItem><Icon name="feather" />Отправить голубем</ContextMenuItem>
              </ContextMenuList>
            </template>
          </ContextSubmenu>
          <ContextMenuSeparator />
          <ContextMenuItem><Icon name="archive" />Архивировать</ContextMenuItem>
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
      Icon,
      ContextSubmenu
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
          <ContextMenuItem><Icon name="pencil" />Открыть</ContextMenuItem>
          <ContextMenuItem><Icon name="external-link" />Открыть в новой вкладке</ContextMenuItem>
          <ContextSubmenu>
            <ContextMenuItem showArrow><Icon name="share" />Поделиться</ContextMenuItem>
            <template #menu>
              <ContextMenuList>
                <ContextMenuItem><Icon name="mail" />Отправить по почте</ContextMenuItem>
                <ContextMenuItem><Icon name="feather" />Отправить голубем</ContextMenuItem>
              </ContextMenuList>
            </template>
          </ContextSubmenu>
          <ContextMenuSeparator />
          <ContextMenuItem><Icon name="archive" />Архивировать</ContextMenuItem>
        </ContextMenuList>
      </ContextMenu>
      </div>
    \`
  })
}`,...(g=(I=r.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const te=["Default"];export{r as Default,te as __namedExportsOrder,ee as default};
