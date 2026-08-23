import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,L as l,M as u,O as d,S as f,St as p,_t as m,a as h,b as g,dt as _,gt as v,ht as y,tt as b,x as ee,xt as te,y as x,yt as S}from"./iframe-Z95Hq5ox.js";import{n as C,t as w}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{C as T,D as E,Ft as D,Gt as O,L as k,n as A,p as j,q as ne}from"./gui-icons.es-B0LP8gzK.js";import{n as re,t as M}from"./useViewportBreakpoint-Dv1nqHdt.js";import{n as N,t as ie}from"./Sheet-Ci9pI7xn.js";import{n as P,t as F}from"./Badge-DlUo0R1W.js";import{n as I,t as ae}from"./Dot-CvwpME30.js";import{n as oe,t as se}from"./Dropdown-fDJZhFjQ.js";import{n as L,t as ce}from"./useResize-C2M-ctcO.js";import{n as le,t as ue}from"./Tooltip-CrGCfLJ5.js";var de,fe,R;function z(){return(z=e((()=>{h(),A(),M(),N(),de=45,fe=70,R=d({__name:`Sidebar`,props:{mode:{default:`default`},padding:{default:12},width:{default:300},maxWidth:{default:`100vw`},minWidth:{default:`200px`},compactWidth:{default:0},collapseThreshold:{},mobile:{type:Boolean,default:!1},mobileOpen:{type:Boolean,default:!1}},emits:[`update:mobileOpen`],setup(e,{emit:a}){let o=e,u=a,d=re(),f=x(()=>o.mobile&&d.isMobile),p=_(o.width),h=_(!1),v=()=>o.collapseThreshold!==void 0&&Number.isFinite(o.collapseThreshold)&&o.collapseThreshold>o.compactWidth,y=()=>o.compactWidth+((o.collapseThreshold??o.compactWidth)-o.compactWidth)/2,C=_((e=>v()&&e<y())(p.value));C.value&&(p.value=o.compactWidth);let w=_(p.value),T=_(!1),E=_(null),D=x(()=>v()?C.value:p.value<=o.compactWidth),O=_(D.value),k=_(!0),A=_(!1),j=_(null),M=null,N=null,P=null,F=()=>{P!==null&&(clearTimeout(P),P=null)};t(D,e=>{if(F(),typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){O.value=e,k.value=!0;return}k.value=!1,P=setTimeout(()=>{O.value=e,P=setTimeout(()=>{k.value=!0,P=null},fe)},de)},{flush:`sync`});let I=e=>{if(e!==void 0&&(e.target!==j.value||e.propertyName!==`width`))return;N!==null&&(clearTimeout(N),N=null);let t=E.value;T.value=!1,E.value=null,t===`expand`&&!C.value&&(A.value=!0,p.value=w.value,M=requestAnimationFrame(()=>{A.value=!1,M=null}))},ae=()=>{N!==null&&clearTimeout(N);let e=E.value===`expand`?220:260;N=setTimeout(I,e)},oe=e=>{E.value=e,T.value=!0,ae()};c(`sidebar-width`,p),c(`sidebar-requested-width`,w),c(`sidebar-is-resizing`,h);let se=x(()=>!f.value&&O.value);c(`sidebar-is-compact`,se);let L=()=>{u(`update:mobileOpen`,!1)},ce=e=>v()&&e<y(),le=e=>{let t=ce(e);if(w.value=t?o.compactWidth:Math.max(e,o.collapseThreshold??e),h.value&&t!==C.value&&oe(t?`collapse`:`expand`),C.value=t,T.value){p.value=E.value===`expand`?o.collapseThreshold??e:o.compactWidth;return}p.value=w.value},ue=()=>{j.value&&(p.value=C.value?o.compactWidth:j.value.getBoundingClientRect().width),h.value=!0,document.addEventListener(`mousemove`,R),document.addEventListener(`mouseup`,z),document.addEventListener(`touchmove`,R,{passive:!0}),document.addEventListener(`touchend`,z),document.body.classList.add(`prevent-user-select`),document.body.classList.add(`sidebar-is-resizing`)},R=e=>{if(h.value&&j.value){let t=e instanceof TouchEvent?e.touches[0]:void 0,n=e instanceof MouseEvent?e.clientX:t?.clientX;if(n===void 0)return;let r=j.value.offsetLeft;le(n-r)}h.value&&e instanceof MouseEvent&&e.buttons!==1&&z()},z=()=>{h.value=!1,document.removeEventListener(`mousemove`,R),document.removeEventListener(`mouseup`,z),document.removeEventListener(`touchmove`,R),document.removeEventListener(`touchend`,z),document.body.classList.remove(`prevent-user-select`),document.body.classList.remove(`sidebar-is-resizing`)};return t(()=>o.width,e=>{Number.isFinite(e)&&le(e)}),t(()=>o.compactWidth,()=>{C.value&&(p.value=o.compactWidth)}),t(f,e=>{!e&&o.mobileOpen&&L()}),l(()=>{F(),N!==null&&clearTimeout(N),M!==null&&cancelAnimationFrame(M)}),(e,t)=>f.value?(n(),ee(ie,{key:0,"is-opened":o.mobileOpen,"on-close":L,"content-stretched":``,"show-close-button":!1,side:`left`,size:`extra-small`,mode:`default`,rounded:!1},{default:b(()=>[s(e.$slots,`default`,{},void 0,!0)]),_:3},8,[`is-opened`])):(n(),r(`div`,{key:1,ref_key:`sidebarRef`,ref:j,class:S([`sidebar`,`sidebar--${o.mode}`,{"sidebar--resizing":h.value,"sidebar--snapped":C.value,"sidebar--snap-animating":T.value,"sidebar--snap-expanding":T.value&&E.value===`expand`,"sidebar--snap-handoff":A.value}]),style:te({width:`${p.value}px`,padding:`${o.padding}px`,maxWidth:o.maxWidth,minWidth:o.minWidth,"--sidebar-padding":`${o.padding}px`}),onTransitionend:I},[g(`div`,{class:`resize-handle`,onMousedown:ue,onTouchstartPassive:ue},[i(m(ne))],32),g(`div`,{class:S([`sidebar__content`,{"sidebar__content--visible":k.value}])},[s(e.$slots,`default`,{},void 0,!0)],2)],38))}})})))()}var B;function pe(){return(pe=e((()=>{z(),C(),B=w(R,[[`__scopeId`,`data-v-e5b230b0`]]),R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`default`,displayName:`Sidebar`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"floating"`}]},defaultValue:{func:!1,value:`"default"`}},{name:`padding`,required:!1,type:{name:`Padding`},defaultValue:{func:!1,value:`12`}},{name:`width`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100vw"`}},{name:`minWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"200px"`}},{name:`compactWidth`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`collapseThreshold`,required:!1,type:{name:`number`}},{name:`mobile`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`mobileOpen`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`update:mobileOpen`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue`]})})))()}var V;function me(){return(me=e((()=>{h(),V=d({__name:`SidebarList`,props:{scrollable:{type:Boolean,default:!1}},setup(e){let t=e;return(e,i)=>(n(),r(`div`,{class:S([`SidebarList`,{"SidebarList--scrollable":t.scrollable}])},[s(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var H;function he(){return(he=e((()=>{me(),C(),H=w(V,[[`__scopeId`,`data-v-54f2f365`]]),V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:`default`,displayName:`SidebarList`,description:``,tags:{},props:[{name:`scrollable`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarList.vue`]})})))()}var ge,_e,ve,ye,be,U;function xe(){return(xe=e((()=>{h(),le(),ce(),ge=[`aria-current`],_e={key:0,class:`left`},ve={key:2,class:`right`},ye={key:3,class:`compact-content`},be={key:0,class:`compact-indicator`},U=d({inheritAttrs:!1,__name:`SidebarItem`,props:{selected:{type:Boolean},tooltipDisabled:{type:Boolean}},setup(e){let t=e,i=_(null),a=_(null),c=_(!1),l=u(`sidebar-is-compact`);return L(a,()=>{if(i.value){let{scrollWidth:e,clientWidth:t}=i.value;c.value=e>t}}),(e,u)=>(n(),ee(ue,{stretched:``,delay:0,disabled:t.tooltipDisabled||!(c.value||m(l)),placement:`right`},{popper:b(()=>[s(e.$slots,`tooltip`,{},()=>[s(e.$slots,`default`,{},void 0,!0)],!0)]),default:b(()=>[g(`button`,o(e.$attrs,{ref_key:`buttonElement`,ref:a,class:[`SidebarItem`,{selected:t.selected,compact:m(l)}],"aria-current":t.selected?`page`:void 0,type:`button`}),[e.$slots.left&&!m(l)?(n(),r(`div`,_e,[s(e.$slots,`left`,{},void 0,!0)])):f(``,!0),m(l)?f(``,!0):(n(),r(`div`,{key:1,ref_key:`centerElement`,ref:i,class:`center`},[s(e.$slots,`default`,{},void 0,!0)],512)),e.$slots.right&&!m(l)?(n(),r(`div`,ve,[s(e.$slots,`right`,{},void 0,!0)])):f(``,!0),m(l)?(n(),r(`div`,ye,[s(e.$slots,`compact`,{},()=>[s(e.$slots,`left`,{},void 0,!0)],!0),e.$slots[`compact-indicator`]?(n(),r(`span`,be,[s(e.$slots,`compact-indicator`,{},void 0,!0)])):f(``,!0)])):f(``,!0)],16,ge)]),_:3},8,[`disabled`]))}})})))()}var W;function G(){return(G=e((()=>{xe(),C(),W=w(U,[[`__scopeId`,`data-v-3af3a21b`]]),U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{exportName:`default`,displayName:`SidebarItem`,description:``,tags:{},props:[{name:`selected`,required:!1,type:{name:`boolean`}},{name:`tooltipDisabled`,required:!1,type:{name:`boolean`}}],slots:[{name:`left`},{name:`default`},{name:`right`},{name:`compact`},{name:`compact-indicator`},{name:`tooltip`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarItem.vue`]})})))()}var Se,Ce,K;function we(){return(we=e((()=>{h(),Se={key:0,class:`sidebar-group__label`},Ce={class:`sidebar-group__content`},K=d({__name:`SidebarGroup`,props:{label:{}},setup(e){let t=e,i=u(`sidebar-is-compact`,_(!1));return(e,a)=>(n(),r(`section`,{class:S([`sidebar-group`,{"sidebar-group--compact":m(i)}])},[t.label&&!m(i)?(n(),r(`div`,Se,p(t.label),1)):f(``,!0),g(`div`,Ce,[s(e.$slots,`default`,{},void 0,!0)])],2))}})})))()}var Te;function Ee(){return(Ee=e((()=>{we(),C(),Te=w(K,[[`__scopeId`,`data-v-3c603e53`]]),K.__docgenInfo=Object.assign({displayName:K.name??K.__name},{exportName:`default`,displayName:`SidebarGroup`,description:``,tags:{},props:[{name:`label`,required:!1,type:{name:`string`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarGroup.vue`]})})))()}var De;function Oe(){return(Oe=e((()=>{h(),De=(e={})=>{let t=_(v(e.defaultOpened??!1)),n=x(()=>v(e.modelValue)??t.value);return{opened:n,toggle:()=>{if(v(e.disabled??!1))return;let r=!n.value;v(e.modelValue)===void 0&&(t.value=r),e.onChange?.(r)}}}})))()}var ke,Ae,je,Me,Ne,q;function Pe(){return(Pe=e((()=>{h(),A(),oe(),G(),Oe(),ke={class:`sidebar-collapsible__popover`},Ae={class:`sidebar-collapsible__popover-title`},je=[`data-disabled`,`data-state`],Me=[`aria-hidden`],Ne={class:`sidebar-collapsible__content-clip`},q=d({__name:`SidebarCollapsible`,props:{defaultOpened:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{},modelValue:{type:Boolean,default:void 0},selected:{type:Boolean,default:!1}},emits:[`change`,`update:modelValue`],setup(e,{emit:t}){let o=e,c=t,l=u(`sidebar-is-compact`,_(!1)),{opened:d,toggle:f}=De({defaultOpened:y(o,`defaultOpened`),disabled:y(o,`disabled`),modelValue:y(o,`modelValue`),onChange:e=>{c(`update:modelValue`,e),c(`change`,e)}}),h=x(()=>d.value?`open`:`closed`);return(e,t)=>m(l)?(n(),ee(se,{key:0,stretched:``,placement:`right-start`,"content-width":`extra-small`,"content-padding":`none`,"popper-hide-triggers":[`click`]},{popper:b(()=>[g(`div`,ke,[g(`div`,Ae,p(o.label),1),s(e.$slots,`default`,{},void 0,!0)])]),default:b(()=>[i(W,{selected:o.selected,"tooltip-disabled":``,"aria-label":o.label,disabled:o.disabled},{left:b(()=>[s(e.$slots,`icon`,{},void 0,!0)]),_:3},8,[`selected`,`aria-label`,`disabled`])]),_:3})):(n(),r(`div`,{key:1,class:`sidebar-collapsible`,"data-disabled":o.disabled||void 0,"data-state":h.value},[i(W,{selected:o.selected,"aria-expanded":m(d),disabled:o.disabled,onClick:m(f)},{left:b(()=>[s(e.$slots,`icon`,{},void 0,!0)]),right:b(()=>[i(m(D),{class:`sidebar-collapsible__chevron`,"aria-hidden":`true`})]),default:b(()=>[a(` `+p(o.label)+` `,1)]),_:3},8,[`selected`,`aria-expanded`,`disabled`,`onClick`]),g(`div`,{class:`sidebar-collapsible__content`,"aria-hidden":!m(d)},[g(`div`,Ne,[s(e.$slots,`default`,{},void 0,!0)])],8,Me)],8,je))}})})))()}var Fe;function Ie(){return(Ie=e((()=>{Pe(),C(),Fe=w(q,[[`__scopeId`,`data-v-32b704a7`]]),q.__docgenInfo=Object.assign({displayName:q.name??q.__name},{exportName:`default`,displayName:`SidebarCollapsible`,description:``,tags:{},props:[{name:`defaultOpened`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`label`,required:!0,type:{name:`string`}},{name:`modelValue`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`change`,type:{names:[`boolean`]}},{name:`update:modelValue`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarCollapsible.vue`]})})))()}var J;function Le(){return(Le=e((()=>{h(),J=d({__name:`SidebarSubList`,setup(e){let t=u(`sidebar-is-compact`,_(!1));return(e,i)=>(n(),r(`div`,{class:S([`sidebar-sub-list`,{"sidebar-sub-list--compact":m(t)}])},[s(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var Re;function ze(){return(ze=e((()=>{Le(),C(),Re=w(J,[[`__scopeId`,`data-v-70ae982c`]]),J.__docgenInfo=Object.assign({displayName:J.name??J.__name},{exportName:`default`,displayName:`SidebarSubList`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarSubList.vue`]})})))()}var Be,Ve,He,Y;function Ue(){return(Ue=e((()=>{h(),Be=[`aria-current`],Ve={key:0,class:`sidebar-sub-item__icon`,"aria-hidden":`true`},He={class:`sidebar-sub-item__label`},Y=d({inheritAttrs:!1,__name:`SidebarSubItem`,props:{selected:{type:Boolean}},setup(e){let t=e;return(e,i)=>(n(),r(`button`,o(e.$attrs,{class:[`sidebar-sub-item`,{"sidebar-sub-item--selected":t.selected}],"aria-current":t.selected?`page`:void 0,type:`button`}),[e.$slots.icon?(n(),r(`span`,Ve,[s(e.$slots,`icon`,{},void 0,!0)])):f(``,!0),g(`span`,He,[s(e.$slots,`default`,{},void 0,!0)])],16,Be))}})})))()}var We;function Ge(){return(Ge=e((()=>{Ue(),C(),We=w(Y,[[`__scopeId`,`data-v-4b010588`]]),Y.__docgenInfo=Object.assign({displayName:Y.name??Y.__name},{exportName:`default`,displayName:`SidebarSubItem`,description:``,tags:{},props:[{name:`selected`,required:!1,type:{name:`boolean`}}],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarSubItem.vue`]})})))()}var Ke,X,Z,Q,$,qe;function Je(){return(Je=e((()=>{pe(),he(),G(),Ee(),Ie(),ze(),Ge(),A(),P(),I(),Ke={title:`Components/Sidebar`,component:B,tags:[`!autodocs`],parameters:{layout:`fullscreen`}},X={render:()=>({components:{Sidebar:B,SidebarItem:W,SidebarList:H,Badge:F,Dot:ae,IconMusicOutline:E,IconBuildingBroadcastTowerOutline:O,IconPlaylistOutline:T,IconSettingsOutline:j,IconInfoTriangleOutline:k},template:`
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
    `})},Z={render:()=>({components:{Sidebar:B,SidebarList:H,SidebarItem:W,SidebarGroup:Te,SidebarCollapsible:Fe,SidebarSubList:Re,SidebarSubItem:We,IconMusicOutline:E,IconBuildingBroadcastTowerOutline:O,IconPlaylistOutline:T,IconSettingsOutline:j},template:`
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
    `})},Q={render:()=>({components:{Sidebar:B,SidebarList:H,SidebarItem:W,SidebarGroup:Te,SidebarCollapsible:Fe,SidebarSubList:Re,SidebarSubItem:We,IconMusicOutline:E,IconPlaylistOutline:T,IconSettingsOutline:j},setup(){return{pages:Array.from({length:9},(e,t)=>`Страница ${t+1}`),settings:Array.from({length:6},(e,t)=>`Настройка ${t+1}`)}},template:`
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
    `})},$={render:()=>({components:{Sidebar:B,SidebarItem:W,SidebarList:H,Badge:F,IconMusicOutline:E,IconBuildingBroadcastTowerOutline:O,IconPlaylistOutline:T,IconSettingsOutline:j,IconInfoTriangleOutline:k},template:`
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
}`,...$.parameters?.docs?.source}}},qe=[`Default`,`GroupedWithSubmenu`,`ScrollableNavigation`,`Floating`]})))()}Je();export{X as Default,$ as Floating,Z as GroupedWithSubmenu,Q as ScrollableNavigation,qe as __namedExportsOrder,Ke as default};