import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,O as i,S as ee,W as a,a as o,b as s,g as c,h as l,o as u,vt as d,x as f,y as p,z as m}from"./iframe-Du9fEe2r.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{$t as _,N as v,T as y,d as b,n as x,pt as S,yt as C}from"./gui-icons.es-ypdSzEZR.js";import{n as w,t as T}from"./BaseMenu-7g5kDS76.js";import{n as E,t as D}from"./BaseMenuItem-CB8tcZpr.js";import{n as te,t as ne}from"./BaseMenuGroup-B6gEWfIb.js";import{n as re,t as ie}from"./BaseMenuSeparator-C883uFkp.js";import{n as O,t as ae}from"./HoverMenu-C2PdmJXG.js";import{n as oe,t as k}from"./useContextMenu-CCgIoyiz.js";var A;function j(){return(j=e((()=>{o(),w(),A=i({__name:`ContextMenu`,props:{data:{}},setup(e){let i=e,o=p(()=>({position:`fixed`,left:`${i.data.position.value.x}px`,top:`${i.data.position.value.y}px`})),h=p(()=>({...i.data.floatingStyles.value}));return(e,p)=>(m(),n(l,null,[s(`div`,{ref:i.data.positionRef,style:d(o.value)},null,4),(m(),f(c,{to:`body`},[r(u,{name:`fade`},{default:t(()=>[i.data.isContextMenuVisible.value?(m(),f(T,{key:0,ref:i.data.floatingRef,style:d(h.value)},{default:t(()=>[a(e.$slots,`default`,{},void 0,!0)]),_:3},8,[`style`])):ee(``,!0)]),_:3})]))],64))}})})))()}var M;function N(){return(N=e((()=>{j(),h(),M=g(A,[[`__scopeId`,`data-v-c32e3f4b`]]),A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{exportName:`default`,displayName:`ContextMenu`,description:``,tags:{},props:[{name:`data`,required:!0,type:{name:`TSIndexedAccessType`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenu.vue`]})})))()}var P;function F(){return(F=e((()=>{E(),P=D})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:`BaseMenuItem`,displayName:`BaseMenuItem`,description:``,tags:{},props:[{name:`showArrow`,required:!1,type:{name:`boolean`}},{name:`selected`,required:!1,type:{name:`boolean`}},{name:`role`,required:!1,type:{name:`union`,elements:[{name:`"menuitem"`},{name:`"menuitemcheckbox"`},{name:`"menuitemradio"`}]}}],slots:[{name:`default`},{name:`trailing`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuItem.vue`]})})))()}var R;function z(){return(z=e((()=>{O(),R=ae})))()}var B;function V(){return(V=e((()=>{z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`HoverMenu`,displayName:`HoverMenu`,description:``,tags:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`ref`,title:`binding`}]},{name:`menu`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/ContextMenu/ContextSubmenu.vue`]})})))()}var H;function U(){return(U=e((()=>{te(),H=ne})))()}var W;function G(){return(G=e((()=>{U(),W=H,H.__docgenInfo=Object.assign({displayName:H.name??H.__name},{exportName:`BaseMenuGroup`,displayName:`BaseMenuGroup`,description:``,tags:{},props:[{name:`role`,required:!1,type:{name:`union`,elements:[{name:`"group"`},{name:`"menu"`}]},defaultValue:{func:!1,value:`"group"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuList.vue`]})})))()}var K;function q(){return(q=e((()=>{re(),K=ie})))()}var J;function Y(){return(Y=e((()=>{q(),J=K,K.__docgenInfo=Object.assign({displayName:K.name??K.__name},{displayName:`BaseMenuSeparator`,description:``,tags:{},sourceFiles:[`/home/runner/work/gui/gui/src/components/ContextMenu/ContextMenuSeparator.vue`]})})))()}var X,Z,Q;function $(){return($=e((()=>{N(),L(),V(),G(),Y(),x(),k(),X={title:`Components/ContextMenu`,component:M,tags:[`!autodocs`],argTypes:{},args:{}},Z={args:{},render:e=>({components:{ContextMenu:M,ContextMenuItem:I,ContextMenuList:W,ContextMenuSeparator:J,ContextSubmenu:B,IconPencilOutline:y,IconExternalLinkOutline:C,IconShareOutline:b,IconFeatherOutline:S,IconMailOutline:v,IconArchiveOutline:_},setup(){let{contextMenuData:t,targetRef:n}=oe();return{args:e,contextMenuData:t,targetRef:n}},template:`
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
    `})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`]})))()}$();export{Z as Default,Q as __namedExportsOrder,X as default};