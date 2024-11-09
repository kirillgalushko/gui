import{o as i,c as v,a as l,k as B,I as p,v as M,q as C,A as E,z as f,T as F,Q as N,F as R,j as A,u as D,r as o,b as $,d as T}from"./vue.esm-bundler-CRuxRSxJ.js";import{B as V}from"./BaseMenu-DA-9TBob.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as y}from"./BaseMenuItem-DKmb2SfR.js";import{H as w,u as H}from"./HoverMenu-Doc9rLyE.js";import{B as S,a as O,b as P,d as q,c as z}from"./BaseMenuSeparator-CjKUBTrV.js";import{i as Q}from"./IconAccessibleFilled-d5loSfFR.js";import{a as U}from"./IconMailOutline-zJnQR7KY.js";import{d as W}from"./IconPencilOutline-CyR9qnpr.js";import{f as X,s as Y}from"./floating-ui.dom.browser.min-Dq8c3VDt.js";const G={},J={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",style:{width:"1em","min-width":"1em",height:"1em","min-height":"1em"},viewBox:"0 0 24 24"};function K(t,e){return i(),v("svg",J,e[0]||(e[0]=[l("path",{d:"m4 20 10-10m0-5v5h5m-9-1v5h5m-9-1v5h5m-5-5 4-4 4-4"},null,-1),l("path",{d:"M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0 0 16.483 4c-.97 0-1.847.367-2.483 1m-3 13 4-4 4-4"},null,-1)]))}const Z=Q(G,[["render",K]]),_=B({__name:"ContextMenu",props:{data:{}},setup(t){const e=t,n=p(()=>({position:"fixed",left:`${e.data.position.value.x}px`,top:`${e.data.position.value.y}px`})),u=p(()=>({...e.data.floatingStyles.value}));return(s,c)=>(i(),v(R,null,[l("div",{ref:e.data.positionRef,style:M(n.value)},null,4),(i(),C(N,{to:"body"},[E(F,{name:"fade"},{default:f(()=>[e.data.isContextMenuVisible.value?(i(),C(V,{key:0,ref:e.data.floatingRef,style:M(u.value)},{default:f(()=>[A(s.$slots,"default",{},void 0,!0)]),_:3},8,["style"])):D("",!0)]),_:3})]))],64))}}),L=j(_,[["__scopeId","data-v-4b886c96"]]);_.__docgenInfo={exportName:"default",displayName:"ContextMenu",description:"",tags:{},props:[{name:"data",required:!0,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenu.vue"]};y.__docgenInfo={exportName:"BaseMenuItem",displayName:"BaseMenuItem",description:"",tags:{},props:[{name:"showArrow",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuItem.vue"]};w.__docgenInfo={exportName:"HoverMenu",displayName:"HoverMenu",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"ref",title:"binding"}]},{name:"menu"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextSubmenu.vue"]};S.__docgenInfo={displayName:"BaseMenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuList.vue"]};O.__docgenInfo={displayName:"BaseMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuSeparator.vue"]};const ee=(t,e)=>{for(;t;){if(t===e)return!0;t=t.parentNode}return!1},te=()=>{const t=o(!1),e=o({x:0,y:0}),n=o(null),u=o(null),s=o(null),c=o([X(),Y()]),{floatingStyles:k,update:b}=H(u,s,{placement:"right-start",strategy:"fixed",middleware:c}),m=a=>{a.preventDefault(),e.value={x:a.clientX,y:a.clientY},t.value=!0,b()},d=()=>{t.value=!1},x=a=>{n.value&&!ee(a.target,n.value)&&(t.value=!1)};return $(()=>{n.value&&(n.value.addEventListener("contextmenu",m),document.addEventListener("click",d),document.addEventListener("contextmenu",x))}),T(()=>{n.value&&(n.value.removeEventListener("contextmenu",m),document.removeEventListener("click",d),document.addEventListener("contextmenu",x))}),{contextMenuData:{floatingStyles:k,floatingRef:s,position:e,positionRef:u,isContextMenuVisible:t},targetRef:n}},de={title:"Example/ContextMenu",component:L,tags:["autodocs"],argTypes:{},args:{}},r={args:{},render:t=>({components:{ContextMenu:L,ContextMenuItem:y,ContextMenuList:S,ContextMenuSeparator:O,ContextSubmenu:w,IconPencilOutline:W,IconExternalLinkOutline:P,IconShareOutline:q,IconFeatherOutline:Z,IconMailOutline:U,IconArchiveOutline:z},setup(){const{contextMenuData:e,targetRef:n}=te();return{args:t,contextMenuData:e,targetRef:n}},template:`
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
    `})};var I,g,h;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const xe=["Default"];export{r as Default,xe as __namedExportsOrder,de as default};
