import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,E as i,F as a,L as o,M as s,O as c,S as l,V as u,W as d,Z as f,a as p,b as m,ct as h,ft as g,gt as _,mt as v,pt as y,vt as ee,x as b,y as x,yt as S,z as C}from"./iframe-CgWRWv5U.js";import{n as w,t as T}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{C as E,D,L as O,Lt as k,n as A,p as j,q as te,qt as M}from"./gui-icons.es-BhzJzRM3.js";import{n as ne,t as re}from"./Badge-Bwh9H-Io.js";import{n as ie,t as ae}from"./Dot-BDK8sZDy.js";import{n as N,t as P}from"./Dropdown-CPi2Q_KW.js";import{n as oe,t as se}from"./useResize-ByDdlTOU.js";import{n as ce,t as le}from"./Tooltip-C3B3g7G3.js";var ue,de,F;function fe(){return(fe=e((()=>{p(),A(),ue=45,de=70,F=c({__name:`Sidebar`,props:{mode:{default:`default`},padding:{default:12},width:{default:300},maxWidth:{default:`100vw`},minWidth:{default:`200px`},compactWidth:{default:0},collapseThreshold:{}},setup(e){let t=e,i=h(t.width),a=h(!1),s=()=>t.collapseThreshold!==void 0&&Number.isFinite(t.collapseThreshold)&&t.collapseThreshold>t.compactWidth,c=()=>t.compactWidth+((t.collapseThreshold??t.compactWidth)-t.compactWidth)/2,l=h((e=>s()&&e<c())(i.value));l.value&&(i.value=t.compactWidth);let p=h(i.value),g=h(!1),y=h(null),b=x(()=>s()?l.value:i.value<=t.compactWidth),S=h(b.value),w=h(!0),T=h(!1),E=h(null),D=null,O=null,k=null,A=()=>{k!==null&&(clearTimeout(k),k=null)};f(b,e=>{if(A(),typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){S.value=e,w.value=!0;return}w.value=!1,k=setTimeout(()=>{S.value=e,k=setTimeout(()=>{w.value=!0,k=null},de)},ue)},{flush:`sync`});let j=e=>{if(e!==void 0&&(e.target!==E.value||e.propertyName!==`width`))return;O!==null&&(clearTimeout(O),O=null);let t=y.value;g.value=!1,y.value=null,t===`expand`&&!l.value&&(T.value=!0,i.value=p.value,D=requestAnimationFrame(()=>{T.value=!1,D=null}))},M=()=>{O!==null&&clearTimeout(O);let e=y.value===`expand`?220:260;O=setTimeout(j,e)},ne=e=>{y.value=e,g.value=!0,M()};u(`sidebar-width`,i),u(`sidebar-requested-width`,p),u(`sidebar-is-resizing`,a),u(`sidebar-is-compact`,S);let re=e=>s()&&e<c(),ie=e=>{let n=re(e);if(p.value=n?t.compactWidth:Math.max(e,t.collapseThreshold??e),a.value&&n!==l.value&&ne(n?`collapse`:`expand`),l.value=n,g.value){i.value=y.value===`expand`?t.collapseThreshold??e:t.compactWidth;return}i.value=p.value},ae=()=>{E.value&&(i.value=l.value?t.compactWidth:E.value.getBoundingClientRect().width),a.value=!0,document.addEventListener(`mousemove`,N),document.addEventListener(`mouseup`,P),document.addEventListener(`touchmove`,N,{passive:!0}),document.addEventListener(`touchend`,P),document.body.classList.add(`prevent-user-select`),document.body.classList.add(`sidebar-is-resizing`)},N=e=>{if(a.value&&E.value){let t=e instanceof TouchEvent?e.touches[0]:void 0,n=e instanceof MouseEvent?e.clientX:t?.clientX;if(n===void 0)return;let r=E.value.offsetLeft;ie(n-r)}a.value&&e instanceof MouseEvent&&e.buttons!==1&&P()},P=()=>{a.value=!1,document.removeEventListener(`mousemove`,N),document.removeEventListener(`mouseup`,P),document.removeEventListener(`touchmove`,N),document.removeEventListener(`touchend`,P),document.body.classList.remove(`prevent-user-select`),document.body.classList.remove(`sidebar-is-resizing`)};return f(()=>t.width,e=>{Number.isFinite(e)&&ie(e)}),f(()=>t.compactWidth,()=>{l.value&&(i.value=t.compactWidth)}),o(()=>{A(),O!==null&&clearTimeout(O),D!==null&&cancelAnimationFrame(D)}),(e,o)=>(C(),n(`div`,{ref_key:`sidebarRef`,ref:E,class:_([`sidebar`,`sidebar--${t.mode}`,{"sidebar--resizing":a.value,"sidebar--snapped":l.value,"sidebar--snap-animating":g.value,"sidebar--snap-expanding":g.value&&y.value===`expand`,"sidebar--snap-handoff":T.value}]),style:ee({width:`${i.value}px`,padding:`${t.padding}px`,maxWidth:t.maxWidth,minWidth:t.minWidth,"--sidebar-padding":`${t.padding}px`}),onTransitionend:j},[m(`div`,{class:`resize-handle`,onMousedown:ae,onTouchstartPassive:ae},[r(v(te))],32),m(`div`,{class:_([`sidebar__content`,{"sidebar__content--visible":w.value}])},[d(e.$slots,`default`,{},void 0,!0)],2)],38))}})})))()}var I;function pe(){return(pe=e((()=>{fe(),w(),I=T(F,[[`__scopeId`,`data-v-b71e402d`]]),F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{exportName:`default`,displayName:`Sidebar`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"floating"`}]},defaultValue:{func:!1,value:`"default"`}},{name:`padding`,required:!1,type:{name:`Padding`},defaultValue:{func:!1,value:`12`}},{name:`width`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100vw"`}},{name:`minWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"200px"`}},{name:`compactWidth`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`collapseThreshold`,required:!1,type:{name:`number`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue`]})})))()}var L;function me(){return(me=e((()=>{p(),L=c({__name:`SidebarList`,props:{scrollable:{type:Boolean,default:!1}},setup(e){let t=e;return(e,r)=>(C(),n(`div`,{class:_([`SidebarList`,{"SidebarList--scrollable":t.scrollable}])},[d(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var R;function he(){return(he=e((()=>{me(),w(),R=T(L,[[`__scopeId`,`data-v-54f2f365`]]),L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:`default`,displayName:`SidebarList`,description:``,tags:{},props:[{name:`scrollable`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarList.vue`]})})))()}var ge,_e,ve,ye,be,z;function xe(){return(xe=e((()=>{p(),ce(),se(),ge=[`aria-current`],_e={key:0,class:`left`},ve={key:2,class:`right`},ye={key:3,class:`compact-content`},be={key:0,class:`compact-indicator`},z=c({inheritAttrs:!1,__name:`SidebarItem`,props:{selected:{type:Boolean},tooltipDisabled:{type:Boolean}},setup(e){let r=e,i=h(null),o=h(null),c=h(!1),u=s(`sidebar-is-compact`);return oe(o,()=>{if(i.value){let{scrollWidth:e,clientWidth:t}=i.value;c.value=e>t}}),(e,s)=>(C(),b(le,{stretched:``,delay:0,disabled:r.tooltipDisabled||!(c.value||v(u)),placement:`right`},{popper:t(()=>[d(e.$slots,`tooltip`,{},()=>[d(e.$slots,`default`,{},void 0,!0)],!0)]),default:t(()=>[m(`button`,a(e.$attrs,{ref_key:`buttonElement`,ref:o,class:[`SidebarItem`,{selected:r.selected,compact:v(u)}],"aria-current":r.selected?`page`:void 0,type:`button`}),[e.$slots.left&&!v(u)?(C(),n(`div`,_e,[d(e.$slots,`left`,{},void 0,!0)])):l(``,!0),v(u)?l(``,!0):(C(),n(`div`,{key:1,ref_key:`centerElement`,ref:i,class:`center`},[d(e.$slots,`default`,{},void 0,!0)],512)),e.$slots.right&&!v(u)?(C(),n(`div`,ve,[d(e.$slots,`right`,{},void 0,!0)])):l(``,!0),v(u)?(C(),n(`div`,ye,[d(e.$slots,`compact`,{},()=>[d(e.$slots,`left`,{},void 0,!0)],!0),e.$slots[`compact-indicator`]?(C(),n(`span`,be,[d(e.$slots,`compact-indicator`,{},void 0,!0)])):l(``,!0)])):l(``,!0)],16,ge)]),_:3},8,[`disabled`]))}})})))()}var B;function V(){return(V=e((()=>{xe(),w(),B=T(z,[[`__scopeId`,`data-v-3af3a21b`]]),z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{exportName:`default`,displayName:`SidebarItem`,description:``,tags:{},props:[{name:`selected`,required:!1,type:{name:`boolean`}},{name:`tooltipDisabled`,required:!1,type:{name:`boolean`}}],slots:[{name:`left`},{name:`default`},{name:`right`},{name:`compact`},{name:`compact-indicator`},{name:`tooltip`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarItem.vue`]})})))()}var Se,Ce,H;function we(){return(we=e((()=>{p(),Se={key:0,class:`sidebar-group__label`},Ce={class:`sidebar-group__content`},H=c({__name:`SidebarGroup`,props:{label:{}},setup(e){let t=e,r=s(`sidebar-is-compact`,h(!1));return(e,i)=>(C(),n(`section`,{class:_([`sidebar-group`,{"sidebar-group--compact":v(r)}])},[t.label&&!v(r)?(C(),n(`div`,Se,S(t.label),1)):l(``,!0),m(`div`,Ce,[d(e.$slots,`default`,{},void 0,!0)])],2))}})})))()}var U;function Te(){return(Te=e((()=>{we(),w(),U=T(H,[[`__scopeId`,`data-v-3c603e53`]]),H.__docgenInfo=Object.assign({displayName:H.name??H.__name},{exportName:`default`,displayName:`SidebarGroup`,description:``,tags:{},props:[{name:`label`,required:!1,type:{name:`string`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarGroup.vue`]})})))()}var Ee;function De(){return(De=e((()=>{p(),Ee=(e={})=>{let t=h(y(e.defaultOpened??!1)),n=x(()=>y(e.modelValue)??t.value);return{opened:n,toggle:()=>{if(y(e.disabled??!1))return;let r=!n.value;y(e.modelValue)===void 0&&(t.value=r),e.onChange?.(r)}}}})))()}var Oe,ke,Ae,je,Me,W;function Ne(){return(Ne=e((()=>{p(),A(),N(),V(),De(),Oe={class:`sidebar-collapsible__popover`},ke={class:`sidebar-collapsible__popover-title`},Ae=[`data-disabled`,`data-state`],je=[`aria-hidden`],Me={class:`sidebar-collapsible__content-clip`},W=c({__name:`SidebarCollapsible`,props:{defaultOpened:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{},modelValue:{type:Boolean,default:void 0},selected:{type:Boolean,default:!1}},emits:[`change`,`update:modelValue`],setup(e,{emit:a}){let o=e,c=a,l=s(`sidebar-is-compact`,h(!1)),{opened:u,toggle:f}=Ee({defaultOpened:g(o,`defaultOpened`),disabled:g(o,`disabled`),modelValue:g(o,`modelValue`),onChange:e=>{c(`update:modelValue`,e),c(`change`,e)}}),p=x(()=>u.value?`open`:`closed`);return(e,a)=>v(l)?(C(),b(P,{key:0,stretched:``,placement:`right-start`,"content-width":`extra-small`,"content-padding":`none`,"popper-hide-triggers":[`click`]},{popper:t(()=>[m(`div`,Oe,[m(`div`,ke,S(o.label),1),d(e.$slots,`default`,{},void 0,!0)])]),default:t(()=>[r(B,{selected:o.selected,"tooltip-disabled":``,"aria-label":o.label,disabled:o.disabled},{left:t(()=>[d(e.$slots,`icon`,{},void 0,!0)]),_:3},8,[`selected`,`aria-label`,`disabled`])]),_:3})):(C(),n(`div`,{key:1,class:`sidebar-collapsible`,"data-disabled":o.disabled||void 0,"data-state":p.value},[r(B,{selected:o.selected,"aria-expanded":v(u),disabled:o.disabled,onClick:v(f)},{left:t(()=>[d(e.$slots,`icon`,{},void 0,!0)]),right:t(()=>[r(v(k),{class:`sidebar-collapsible__chevron`,"aria-hidden":`true`})]),default:t(()=>[i(` `+S(o.label)+` `,1)]),_:3},8,[`selected`,`aria-expanded`,`disabled`,`onClick`]),m(`div`,{class:`sidebar-collapsible__content`,"aria-hidden":!v(u)},[m(`div`,Me,[d(e.$slots,`default`,{},void 0,!0)])],8,je)],8,Ae))}})})))()}var G;function Pe(){return(Pe=e((()=>{Ne(),w(),G=T(W,[[`__scopeId`,`data-v-32b704a7`]]),W.__docgenInfo=Object.assign({displayName:W.name??W.__name},{exportName:`default`,displayName:`SidebarCollapsible`,description:``,tags:{},props:[{name:`defaultOpened`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`label`,required:!0,type:{name:`string`}},{name:`modelValue`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`change`,type:{names:[`boolean`]}},{name:`update:modelValue`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarCollapsible.vue`]})})))()}var K;function Fe(){return(Fe=e((()=>{p(),K=c({__name:`SidebarSubList`,setup(e){let t=s(`sidebar-is-compact`,h(!1));return(e,r)=>(C(),n(`div`,{class:_([`sidebar-sub-list`,{"sidebar-sub-list--compact":v(t)}])},[d(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var q;function Ie(){return(Ie=e((()=>{Fe(),w(),q=T(K,[[`__scopeId`,`data-v-70ae982c`]]),K.__docgenInfo=Object.assign({displayName:K.name??K.__name},{exportName:`default`,displayName:`SidebarSubList`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarSubList.vue`]})})))()}var Le,Re,ze,J;function Be(){return(Be=e((()=>{p(),Le=[`aria-current`],Re={key:0,class:`sidebar-sub-item__icon`,"aria-hidden":`true`},ze={class:`sidebar-sub-item__label`},J=c({inheritAttrs:!1,__name:`SidebarSubItem`,props:{selected:{type:Boolean}},setup(e){let t=e;return(e,r)=>(C(),n(`button`,a(e.$attrs,{class:[`sidebar-sub-item`,{"sidebar-sub-item--selected":t.selected}],"aria-current":t.selected?`page`:void 0,type:`button`}),[e.$slots.icon?(C(),n(`span`,Re,[d(e.$slots,`icon`,{},void 0,!0)])):l(``,!0),m(`span`,ze,[d(e.$slots,`default`,{},void 0,!0)])],16,Le))}})})))()}var Y;function Ve(){return(Ve=e((()=>{Be(),w(),Y=T(J,[[`__scopeId`,`data-v-4b010588`]]),J.__docgenInfo=Object.assign({displayName:J.name??J.__name},{exportName:`default`,displayName:`SidebarSubItem`,description:``,tags:{},props:[{name:`selected`,required:!1,type:{name:`boolean`}}],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarSubItem.vue`]})})))()}var He,X,Z,Q,$,Ue;function We(){return(We=e((()=>{pe(),he(),V(),Te(),Pe(),Ie(),Ve(),A(),ne(),ie(),He={title:`Components/Sidebar`,component:I,tags:[`!autodocs`],parameters:{layout:`fullscreen`}},X={render:()=>({components:{Sidebar:I,SidebarItem:B,SidebarList:R,Badge:re,Dot:ae,IconMusicOutline:D,IconBuildingBroadcastTowerOutline:M,IconPlaylistOutline:E,IconSettingsOutline:j,IconInfoTriangleOutline:O},template:`
      <Sidebar :compactWidth="80" :collapseThreshold="180" minWidth="80px">
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
            <template #compact-indicator>
              <Dot color="blue" />
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
    `})},Z={render:()=>({components:{Sidebar:I,SidebarList:R,SidebarItem:B,SidebarGroup:U,SidebarCollapsible:G,SidebarSubList:q,SidebarSubItem:Y,IconMusicOutline:D,IconBuildingBroadcastTowerOutline:M,IconPlaylistOutline:E,IconSettingsOutline:j},template:`
      <Sidebar :compactWidth="60" :collapseThreshold="180" minWidth="60px">
        <SidebarList>
          <SidebarGroup label="Основное">
            <SidebarItem selected>
              <template #left><IconMusicOutline /></template>
              Главная
            </SidebarItem>
            <SidebarItem>
              <template #left><IconPlaylistOutline /></template>
              Задачи
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup label="Другое">
            <SidebarCollapsible label="Настройки" selected default-opened>
              <template #icon><IconSettingsOutline /></template>
              <SidebarSubList>
                <SidebarSubItem>
                  <template #icon><IconMusicOutline /></template>
                  Профиль
                </SidebarSubItem>
                <SidebarSubItem selected>
                  <template #icon><IconBuildingBroadcastTowerOutline /></template>
                  Организация
                </SidebarSubItem>
              </SidebarSubList>
            </SidebarCollapsible>
          </SidebarGroup>
        </SidebarList>
      </Sidebar>
    `})},Q={render:()=>({components:{Sidebar:I,SidebarList:R,SidebarItem:B,SidebarGroup:U,SidebarCollapsible:G,SidebarSubList:q,SidebarSubItem:Y,IconMusicOutline:D,IconPlaylistOutline:E,IconSettingsOutline:j},setup(){return{pages:Array.from({length:9},(e,t)=>`Страница ${t+1}`),settings:Array.from({length:6},(e,t)=>`Настройка ${t+1}`)}},template:`
      <div style="height: 320px;">
        <Sidebar :width="300" minWidth="180px">
          <div style="display: flex; flex-direction: column; height: 100%;">
            <SidebarList scrollable style="flex: 1;">
              <SidebarGroup label="Основное">
                <SidebarItem v-for="page in pages" :key="page">
                  <template #left><IconMusicOutline /></template>
                  {{ page }}
                </SidebarItem>
              </SidebarGroup>
              <SidebarGroup label="Другое">
                <SidebarCollapsible label="Настройки" default-opened>
                  <template #icon><IconSettingsOutline /></template>
                  <SidebarSubList>
                    <SidebarSubItem v-for="setting in settings" :key="setting">
                      <template #icon><IconSettingsOutline /></template>
                      {{ setting }}
                    </SidebarSubItem>
                  </SidebarSubList>
                </SidebarCollapsible>
              </SidebarGroup>
            </SidebarList>
            <SidebarItem>
              <template #left><IconPlaylistOutline /></template>
              Footer остаётся на месте
            </SidebarItem>
          </div>
        </Sidebar>
      </div>
    `})},$={render:()=>({components:{Sidebar:I,SidebarItem:B,SidebarList:R,Badge:re,IconMusicOutline:D,IconBuildingBroadcastTowerOutline:M,IconPlaylistOutline:E,IconSettingsOutline:j,IconInfoTriangleOutline:O},template:`
      <div style="height: 100vh; background: hsl(var(--muted) / 0.35);">
        <Sidebar
          mode="floating"
          :compactWidth="80"
          :collapseThreshold="180"
          minWidth="80px"
        >
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
      </div>
    `})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Sidebar,
      SidebarItem,
      SidebarList,
      Badge,
      Dot,
      IconMusicOutline,
      IconBuildingBroadcastTowerOutline,
      IconPlaylistOutline,
      IconSettingsOutline,
      IconInfoTriangleOutline
    },
    template: \`
      <Sidebar :compactWidth="80" :collapseThreshold="180" minWidth="80px">
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
            <template #compact-indicator>
              <Dot color="blue" />
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Sidebar,
      SidebarList,
      SidebarItem,
      SidebarGroup,
      SidebarCollapsible,
      SidebarSubList,
      SidebarSubItem,
      IconMusicOutline,
      IconBuildingBroadcastTowerOutline,
      IconPlaylistOutline,
      IconSettingsOutline
    },
    template: \`
      <Sidebar :compactWidth="60" :collapseThreshold="180" minWidth="60px">
        <SidebarList>
          <SidebarGroup label="Основное">
            <SidebarItem selected>
              <template #left><IconMusicOutline /></template>
              Главная
            </SidebarItem>
            <SidebarItem>
              <template #left><IconPlaylistOutline /></template>
              Задачи
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup label="Другое">
            <SidebarCollapsible label="Настройки" selected default-opened>
              <template #icon><IconSettingsOutline /></template>
              <SidebarSubList>
                <SidebarSubItem>
                  <template #icon><IconMusicOutline /></template>
                  Профиль
                </SidebarSubItem>
                <SidebarSubItem selected>
                  <template #icon><IconBuildingBroadcastTowerOutline /></template>
                  Организация
                </SidebarSubItem>
              </SidebarSubList>
            </SidebarCollapsible>
          </SidebarGroup>
        </SidebarList>
      </Sidebar>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Sidebar,
      SidebarList,
      SidebarItem,
      SidebarGroup,
      SidebarCollapsible,
      SidebarSubList,
      SidebarSubItem,
      IconMusicOutline,
      IconPlaylistOutline,
      IconSettingsOutline
    },
    setup() {
      return {
        pages: Array.from({
          length: 9
        }, (_, index) => \`Страница \${index + 1}\`),
        settings: Array.from({
          length: 6
        }, (_, index) => \`Настройка \${index + 1}\`)
      };
    },
    template: \`
      <div style="height: 320px;">
        <Sidebar :width="300" minWidth="180px">
          <div style="display: flex; flex-direction: column; height: 100%;">
            <SidebarList scrollable style="flex: 1;">
              <SidebarGroup label="Основное">
                <SidebarItem v-for="page in pages" :key="page">
                  <template #left><IconMusicOutline /></template>
                  {{ page }}
                </SidebarItem>
              </SidebarGroup>
              <SidebarGroup label="Другое">
                <SidebarCollapsible label="Настройки" default-opened>
                  <template #icon><IconSettingsOutline /></template>
                  <SidebarSubList>
                    <SidebarSubItem v-for="setting in settings" :key="setting">
                      <template #icon><IconSettingsOutline /></template>
                      {{ setting }}
                    </SidebarSubItem>
                  </SidebarSubList>
                </SidebarCollapsible>
              </SidebarGroup>
            </SidebarList>
            <SidebarItem>
              <template #left><IconPlaylistOutline /></template>
              Footer остаётся на месте
            </SidebarItem>
          </div>
        </Sidebar>
      </div>
    \`
  })
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
      <div style="height: 100vh; background: hsl(var(--muted) / 0.35);">
        <Sidebar
          mode="floating"
          :compactWidth="80"
          :collapseThreshold="180"
          minWidth="80px"
        >
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
      </div>
    \`
  })
}`,...$.parameters?.docs?.source}}},Ue=[`Default`,`GroupedWithSubmenu`,`ScrollableNavigation`,`Floating`]})))()}We();export{X as Default,$ as Floating,Z as GroupedWithSubmenu,Q as ScrollableNavigation,Ue as __namedExportsOrder,He as default};