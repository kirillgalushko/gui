import{e as w,B as x,o as i,b as B,l as k,s as p,g as d,x as N,v as M,T as R,S as D,F,d as E,q as T,A as o,V,W as A}from"./vue.esm-bundler-DUApOrFq.js";import{B as H}from"./BaseMenu-Djlb1scR.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as g,a as v,b as y}from"./BaseMenuSeparator-B3Zk17uj.js";import{H as h,u as $}from"./HoverMenu-DZ4NA7ql.js";import{I as j}from"./Icon-c9maYRQP.js";import{f as z,s as O}from"./floating-ui.dom.browser.min-Dq8c3VDt.js";const _=w({__name:"ContextMenu",props:{data:{}},setup(n){const e=n,t=x(()=>({position:"fixed",left:`${e.data.position.value.x}px`,top:`${e.data.position.value.y}px`})),a=x(()=>({...e.data.floatingStyles.value}));return(s,m)=>(i(),B(F,null,[k("div",{ref:e.data.positionRef,style:p(t.value)},null,4),(i(),d(D,{to:"body"},[N(R,{name:"fade"},{default:M(()=>[e.data.isContextMenuVisible.value?(i(),d(H,{key:0,ref:e.data.floatingRef,style:p(a.value)},{default:M(()=>[E(s.$slots,"default",{},void 0,!0)]),_:3},8,["style"])):T("",!0)]),_:3})]))],64))}}),S=q(_,[["__scopeId","data-v-4b886c96"]]);_.__docgenInfo={exportName:"default",displayName:"ContextMenu",description:"",tags:{},props:[{name:"data",required:!0,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenu.vue"]};g.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuItem.vue"]};h.__docgenInfo={exportName:"HoverMenu",displayName:"HoverMenu",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"ref",title:"binding"}]},{name:"menu"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextSubmenu.vue"]};v.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuList.vue"]};y.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuSeparator.vue"]};const U=()=>{const n=o(!1),e=o({x:0,y:0}),t=o(null),a=o(null),s=o(null),m=o([z(),O()]),{floatingStyles:b,update:L}=$(a,s,{placement:"right-start",strategy:"fixed",middleware:m}),c=r=>{r.preventDefault(),e.value={x:r.clientX,y:r.clientY},n.value=!0,L()},l=()=>{n.value=!1};return V(()=>{t.value&&(t.value.addEventListener("contextmenu",c),document.addEventListener("click",l))}),A(()=>{t.value&&t.value.removeEventListener("contextmenu",c),document.removeEventListener("click",l)}),{contextMenuData:{floatingStyles:b,floatingRef:s,position:e,positionRef:a,isContextMenuVisible:n},targetRef:t}},Q={title:"Example/ContextMenu",component:S,tags:["autodocs"],argTypes:{},args:{}},u={args:{},render:n=>({components:{ContextMenu:S,ContextMenuItem:g,ContextMenuList:v,ContextMenuSeparator:y,Icon:j,ContextSubmenu:h},setup(){const{contextMenuData:e,targetRef:t}=U();return{args:n,contextMenuData:e,targetRef:t}},template:`
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
    `})};var C,f,I;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(f=u.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const Z=["Default"];export{u as Default,Z as __namedExportsOrder,Q as default};
