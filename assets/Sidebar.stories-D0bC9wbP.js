import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,E as i,F as a,L as o,M as s,O as c,S as l,V as u,W as d,Z as f,a as p,b as m,ct as h,ft as g,gt as _,mt as v,pt as y,vt as ee,x as te,y as b,yt as x,z as S}from"./iframe-Du9fEe2r.js";import{n as C,t as w}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{C as T,D as E,L as D,Lt as O,n as k,p as A,q as ne,qt as j}from"./gui-icons.es-ypdSzEZR.js";import{n as re,t as M}from"./useViewportBreakpoint-e1oqsKfc.js";import{n as N,t as ie}from"./Sheet-BykB-7Rj.js";import{n as P,t as F}from"./Badge-BrAD1kXe.js";import{n as I,t as ae}from"./Dot-DYvqUHxS.js";import{n as oe,t as se}from"./Dropdown-GpHmm9GJ.js";import{n as L,t as ce}from"./useResize-CUbEA_t3.js";import{n as R,t as le}from"./Tooltip-7s4L86wL.js";var ue,de,z;function B(){return(B=e((()=>{p(),k(),M(),N(),ue=45,de=70,z=c({__name:`Sidebar`,props:{mode:{default:`default`},padding:{default:12},width:{default:300},maxWidth:{default:`100vw`},minWidth:{default:`200px`},compactWidth:{default:0},collapseThreshold:{},mobile:{type:Boolean,default:!1},mobileOpen:{type:Boolean,default:!1}},emits:[`update:mobileOpen`],setup(e,{emit:i}){let a=e,s=i,c=re(),l=b(()=>a.mobile&&c.isMobile),p=h(a.width),g=h(!1),y=()=>a.collapseThreshold!==void 0&&Number.isFinite(a.collapseThreshold)&&a.collapseThreshold>a.compactWidth,x=()=>a.compactWidth+((a.collapseThreshold??a.compactWidth)-a.compactWidth)/2,C=h((e=>y()&&e<x())(p.value));C.value&&(p.value=a.compactWidth);let w=h(p.value),T=h(!1),E=h(null),D=b(()=>y()?C.value:p.value<=a.compactWidth),O=h(D.value),k=h(!0),A=h(!1),j=h(null),M=null,N=null,P=null,F=()=>{P!==null&&(clearTimeout(P),P=null)};f(D,e=>{if(F(),typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){O.value=e,k.value=!0;return}k.value=!1,P=setTimeout(()=>{O.value=e,P=setTimeout(()=>{k.value=!0,P=null},de)},ue)},{flush:`sync`});let I=e=>{if(e!==void 0&&(e.target!==j.value||e.propertyName!==`width`))return;N!==null&&(clearTimeout(N),N=null);let t=E.value;T.value=!1,E.value=null,t===`expand`&&!C.value&&(A.value=!0,p.value=w.value,M=requestAnimationFrame(()=>{A.value=!1,M=null}))},ae=()=>{N!==null&&clearTimeout(N);let e=E.value===`expand`?220:260;N=setTimeout(I,e)},oe=e=>{E.value=e,T.value=!0,ae()};u(`sidebar-width`,p),u(`sidebar-requested-width`,w),u(`sidebar-is-resizing`,g);let se=b(()=>!l.value&&O.value);u(`sidebar-is-compact`,se);let L=()=>{s(`update:mobileOpen`,!1)},ce=e=>y()&&e<x(),R=e=>{let t=ce(e);if(w.value=t?a.compactWidth:Math.max(e,a.collapseThreshold??e),g.value&&t!==C.value&&oe(t?`collapse`:`expand`),C.value=t,T.value){p.value=E.value===`expand`?a.collapseThreshold??e:a.compactWidth;return}p.value=w.value},le=()=>{j.value&&(p.value=C.value?a.compactWidth:j.value.getBoundingClientRect().width),g.value=!0,document.addEventListener(`mousemove`,z),document.addEventListener(`mouseup`,B),document.addEventListener(`touchmove`,z,{passive:!0}),document.addEventListener(`touchend`,B),document.body.classList.add(`prevent-user-select`),document.body.classList.add(`sidebar-is-resizing`)},z=e=>{if(g.value&&j.value){let t=e instanceof TouchEvent?e.touches[0]:void 0,n=e instanceof MouseEvent?e.clientX:t?.clientX;if(n===void 0)return;let r=j.value.offsetLeft;R(n-r)}g.value&&e instanceof MouseEvent&&e.buttons!==1&&B()},B=()=>{g.value=!1,document.removeEventListener(`mousemove`,z),document.removeEventListener(`mouseup`,B),document.removeEventListener(`touchmove`,z),document.removeEventListener(`touchend`,B),document.body.classList.remove(`prevent-user-select`),document.body.classList.remove(`sidebar-is-resizing`)};return f(()=>a.width,e=>{Number.isFinite(e)&&R(e)}),f(()=>a.compactWidth,()=>{C.value&&(p.value=a.compactWidth)}),f(l,e=>{!e&&a.mobileOpen&&L()}),o(()=>{F(),N!==null&&clearTimeout(N),M!==null&&cancelAnimationFrame(M)}),(e,i)=>l.value?(S(),te(ie,{key:0,"is-opened":a.mobileOpen,"on-close":L,"content-stretched":``,"show-close-button":!1,side:`left`,size:`extra-small`,mode:`default`,rounded:!1},{default:t(()=>[d(e.$slots,`default`,{},void 0,!0)]),_:3},8,[`is-opened`])):(S(),n(`div`,{key:1,ref_key:`sidebarRef`,ref:j,class:_([`sidebar`,`sidebar--${a.mode}`,{"sidebar--resizing":g.value,"sidebar--snapped":C.value,"sidebar--snap-animating":T.value,"sidebar--snap-expanding":T.value&&E.value===`expand`,"sidebar--snap-handoff":A.value}]),style:ee({width:`${p.value}px`,padding:`${a.padding}px`,maxWidth:a.maxWidth,minWidth:a.minWidth,"--sidebar-padding":`${a.padding}px`}),onTransitionend:I},[m(`div`,{class:`resize-handle`,onMousedown:le,onTouchstartPassive:le},[r(v(ne))],32),m(`div`,{class:_([`sidebar__content`,{"sidebar__content--visible":k.value}])},[d(e.$slots,`default`,{},void 0,!0)],2)],38))}})})))()}var V;function fe(){return(fe=e((()=>{B(),C(),V=w(z,[[`__scopeId`,`data-v-e5b230b0`]]),z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{exportName:`default`,displayName:`Sidebar`,description:``,tags:{},props:[{name:`mode`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"floating"`}]},defaultValue:{func:!1,value:`"default"`}},{name:`padding`,required:!1,type:{name:`Padding`},defaultValue:{func:!1,value:`12`}},{name:`width`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100vw"`}},{name:`minWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"200px"`}},{name:`compactWidth`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`collapseThreshold`,required:!1,type:{name:`number`}},{name:`mobile`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`mobileOpen`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`update:mobileOpen`,type:{names:[`boolean`]}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue`]})})))()}var H;function pe(){return(pe=e((()=>{p(),H=c({__name:`SidebarList`,props:{scrollable:{type:Boolean,default:!1}},setup(e){let t=e;return(e,r)=>(S(),n(`div`,{class:_([`SidebarList`,{"SidebarList--scrollable":t.scrollable}])},[d(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var U;function me(){return(me=e((()=>{pe(),C(),U=w(H,[[`__scopeId`,`data-v-54f2f365`]]),H.__docgenInfo=Object.assign({displayName:H.name??H.__name},{exportName:`default`,displayName:`SidebarList`,description:``,tags:{},props:[{name:`scrollable`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarList.vue`]})})))()}var he,ge,_e,ve,ye,W;function be(){return(be=e((()=>{p(),R(),ce(),he=[`aria-current`],ge={key:0,class:`left`},_e={key:2,class:`right`},ve={key:3,class:`compact-content`},ye={key:0,class:`compact-indicator`},W=c({inheritAttrs:!1,__name:`SidebarItem`,props:{selected:{type:Boolean},tooltipDisabled:{type:Boolean}},setup(e){let r=e,i=h(null),o=h(null),c=h(!1),u=s(`sidebar-is-compact`);return L(o,()=>{if(i.value){let{scrollWidth:e,clientWidth:t}=i.value;c.value=e>t}}),(e,s)=>(S(),te(le,{stretched:``,delay:0,disabled:r.tooltipDisabled||!(c.value||v(u)),placement:`right`},{popper:t(()=>[d(e.$slots,`tooltip`,{},()=>[d(e.$slots,`default`,{},void 0,!0)],!0)]),default:t(()=>[m(`button`,a(e.$attrs,{ref_key:`buttonElement`,ref:o,class:[`SidebarItem`,{selected:r.selected,compact:v(u)}],"aria-current":r.selected?`page`:void 0,type:`button`}),[e.$slots.left&&!v(u)?(S(),n(`div`,ge,[d(e.$slots,`left`,{},void 0,!0)])):l(``,!0),v(u)?l(``,!0):(S(),n(`div`,{key:1,ref_key:`centerElement`,ref:i,class:`center`},[d(e.$slots,`default`,{},void 0,!0)],512)),e.$slots.right&&!v(u)?(S(),n(`div`,_e,[d(e.$slots,`right`,{},void 0,!0)])):l(``,!0),v(u)?(S(),n(`div`,ve,[d(e.$slots,`compact`,{},()=>[d(e.$slots,`left`,{},void 0,!0)],!0),e.$slots[`compact-indicator`]?(S(),n(`span`,ye,[d(e.$slots,`compact-indicator`,{},void 0,!0)])):l(``,!0)])):l(``,!0)],16,he)]),_:3},8,[`disabled`]))}})})))()}var G;function xe(){return(xe=e((()=>{be(),C(),G=w(W,[[`__scopeId`,`data-v-3af3a21b`]]),W.__docgenInfo=Object.assign({displayName:W.name??W.__name},{exportName:`default`,displayName:`SidebarItem`,description:``,tags:{},props:[{name:`selected`,required:!1,type:{name:`boolean`}},{name:`tooltipDisabled`,required:!1,type:{name:`boolean`}}],slots:[{name:`left`},{name:`default`},{name:`right`},{name:`compact`},{name:`compact-indicator`},{name:`tooltip`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarItem.vue`]})})))()}var Se,Ce,K;function we(){return(we=e((()=>{p(),Se={key:0,class:`sidebar-group__label`},Ce={class:`sidebar-group__content`},K=c({__name:`SidebarGroup`,props:{label:{}},setup(e){let t=e,r=s(`sidebar-is-compact`,h(!1));return(e,i)=>(S(),n(`section`,{class:_([`sidebar-group`,{"sidebar-group--compact":v(r)}])},[t.label&&!v(r)?(S(),n(`div`,Se,x(t.label),1)):l(``,!0),m(`div`,Ce,[d(e.$slots,`default`,{},void 0,!0)])],2))}})})))()}var Te;function Ee(){return(Ee=e((()=>{we(),C(),Te=w(K,[[`__scopeId`,`data-v-3c603e53`]]),K.__docgenInfo=Object.assign({displayName:K.name??K.__name},{exportName:`default`,displayName:`SidebarGroup`,description:``,tags:{},props:[{name:`label`,required:!1,type:{name:`string`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarGroup.vue`]})})))()}var De;function Oe(){return(Oe=e((()=>{p(),De=(e={})=>{let t=h(y(e.defaultOpened??!1)),n=b(()=>y(e.modelValue)??t.value);return{opened:n,toggle:()=>{if(y(e.disabled??!1))return;let r=!n.value;y(e.modelValue)===void 0&&(t.value=r),e.onChange?.(r)}}}})))()}var ke,Ae,je,Me,Ne,q;function Pe(){return(Pe=e((()=>{p(),k(),oe(),xe(),Oe(),ke={class:`sidebar-collapsible__popover`},Ae={class:`sidebar-collapsible__popover-title`},je=[`data-disabled`,`data-state`],Me=[`aria-hidden`],Ne={class:`sidebar-collapsible__content-clip`},q=c({__name:`SidebarCollapsible`,props:{defaultOpened:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{},modelValue:{type:Boolean,default:void 0},selected:{type:Boolean,default:!1}},emits:[`change`,`update:modelValue`],setup(e,{emit:a}){let o=e,c=a,l=s(`sidebar-is-compact`,h(!1)),{opened:u,toggle:f}=De({defaultOpened:g(o,`defaultOpened`),disabled:g(o,`disabled`),modelValue:g(o,`modelValue`),onChange:e=>{c(`update:modelValue`,e),c(`change`,e)}}),p=b(()=>u.value?`open`:`closed`);return(e,a)=>v(l)?(S(),te(se,{key:0,stretched:``,placement:`right-start`,"content-width":`extra-small`,"content-padding":`none`,"popper-hide-triggers":[`click`]},{popper:t(()=>[m(`div`,ke,[m(`div`,Ae,x(o.label),1),d(e.$slots,`default`,{},void 0,!0)])]),default:t(()=>[r(G,{selected:o.selected,"tooltip-disabled":``,"aria-label":o.label,disabled:o.disabled},{left:t(()=>[d(e.$slots,`icon`,{},void 0,!0)]),_:3},8,[`selected`,`aria-label`,`disabled`])]),_:3})):(S(),n(`div`,{key:1,class:`sidebar-collapsible`,"data-disabled":o.disabled||void 0,"data-state":p.value},[r(G,{selected:o.selected,"aria-expanded":v(u),disabled:o.disabled,onClick:v(f)},{left:t(()=>[d(e.$slots,`icon`,{},void 0,!0)]),right:t(()=>[r(v(O),{class:`sidebar-collapsible__chevron`,"aria-hidden":`true`})]),default:t(()=>[i(` `+x(o.label)+` `,1)]),_:3},8,[`selected`,`aria-expanded`,`disabled`,`onClick`]),m(`div`,{class:`sidebar-collapsible__content`,"aria-hidden":!v(u)},[m(`div`,Ne,[d(e.$slots,`default`,{},void 0,!0)])],8,Me)],8,je))}})})))()}var Fe;function Ie(){return(Ie=e((()=>{Pe(),C(),Fe=w(q,[[`__scopeId`,`data-v-32b704a7`]]),q.__docgenInfo=Object.assign({displayName:q.name??q.__name},{exportName:`default`,displayName:`SidebarCollapsible`,description:``,tags:{},props:[{name:`defaultOpened`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`label`,required:!0,type:{name:`string`}},{name:`modelValue`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`change`,type:{names:[`boolean`]}},{name:`update:modelValue`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarCollapsible.vue`]})})))()}var J;function Le(){return(Le=e((()=>{p(),J=c({__name:`SidebarSubList`,setup(e){let t=s(`sidebar-is-compact`,h(!1));return(e,r)=>(S(),n(`div`,{class:_([`sidebar-sub-list`,{"sidebar-sub-list--compact":v(t)}])},[d(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var Re;function ze(){return(ze=e((()=>{Le(),C(),Re=w(J,[[`__scopeId`,`data-v-70ae982c`]]),J.__docgenInfo=Object.assign({displayName:J.name??J.__name},{exportName:`default`,displayName:`SidebarSubList`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarSubList.vue`]})})))()}var Be,Ve,He,Y;function Ue(){return(Ue=e((()=>{p(),Be=[`aria-current`],Ve={key:0,class:`sidebar-sub-item__icon`,"aria-hidden":`true`},He={class:`sidebar-sub-item__label`},Y=c({inheritAttrs:!1,__name:`SidebarSubItem`,props:{selected:{type:Boolean}},setup(e){let t=e;return(e,r)=>(S(),n(`button`,a(e.$attrs,{class:[`sidebar-sub-item`,{"sidebar-sub-item--selected":t.selected}],"aria-current":t.selected?`page`:void 0,type:`button`}),[e.$slots.icon?(S(),n(`span`,Ve,[d(e.$slots,`icon`,{},void 0,!0)])):l(``,!0),m(`span`,He,[d(e.$slots,`default`,{},void 0,!0)])],16,Be))}})})))()}var We;function Ge(){return(Ge=e((()=>{Ue(),C(),We=w(Y,[[`__scopeId`,`data-v-4b010588`]]),Y.__docgenInfo=Object.assign({displayName:Y.name??Y.__name},{exportName:`default`,displayName:`SidebarSubItem`,description:``,tags:{},props:[{name:`selected`,required:!1,type:{name:`boolean`}}],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Sidebar/SidebarSubItem.vue`]})})))()}var Ke,X,Z,Q,$,qe;function Je(){return(Je=e((()=>{fe(),me(),xe(),Ee(),Ie(),ze(),Ge(),k(),P(),I(),Ke={title:`Components/Sidebar`,component:V,tags:[`!autodocs`],parameters:{layout:`fullscreen`}},X={render:()=>({components:{Sidebar:V,SidebarItem:G,SidebarList:U,Badge:F,Dot:ae,IconMusicOutline:E,IconBuildingBroadcastTowerOutline:j,IconPlaylistOutline:T,IconSettingsOutline:A,IconInfoTriangleOutline:D},template:`
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
    `})},Z={render:()=>({components:{Sidebar:V,SidebarList:U,SidebarItem:G,SidebarGroup:Te,SidebarCollapsible:Fe,SidebarSubList:Re,SidebarSubItem:We,IconMusicOutline:E,IconBuildingBroadcastTowerOutline:j,IconPlaylistOutline:T,IconSettingsOutline:A},template:`
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
    `})},Q={render:()=>({components:{Sidebar:V,SidebarList:U,SidebarItem:G,SidebarGroup:Te,SidebarCollapsible:Fe,SidebarSubList:Re,SidebarSubItem:We,IconMusicOutline:E,IconPlaylistOutline:T,IconSettingsOutline:A},setup(){return{pages:Array.from({length:9},(e,t)=>`Страница ${t+1}`),settings:Array.from({length:6},(e,t)=>`Настройка ${t+1}`)}},template:`
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
    `})},$={render:()=>({components:{Sidebar:V,SidebarItem:G,SidebarList:U,Badge:F,IconMusicOutline:E,IconBuildingBroadcastTowerOutline:j,IconPlaylistOutline:T,IconSettingsOutline:A,IconInfoTriangleOutline:D},template:`
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