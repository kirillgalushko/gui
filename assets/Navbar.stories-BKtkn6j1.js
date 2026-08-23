import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,B as n,C as r,D as i,G as a,O as o,R as s,S as c,_t as l,a as u,b as d,dt as f,g as ee,h as p,tt as m,x as h,y as g,yt as te}from"./iframe-Z95Hq5ox.js";import{n as _,t as v}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{j as y,n as b}from"./gui-icons.es-B0LP8gzK.js";import{n as ne,t as x}from"./useViewportBreakpoint-Dv1nqHdt.js";import{n as S,t as C}from"./Button-DEy7MrHI.js";import{n as w,t as re}from"./Sheet-Ci9pI7xn.js";import{n as T,t as E}from"./Stack-DXsEJR7b.js";import{n as D,t as ie}from"./Dropdown-fDJZhFjQ.js";import{n as O,t as k}from"./useResize-C2M-ctcO.js";import{a as A,c as j,i as M,l as ae,n as oe,o as se,r as ce,s as le,t as ue,u as N}from"./NavigationMenuList-BUCOg3Kq.js";function de({actionsRef:e,isViewportCompact:t,layoutRef:n,leftRef:r,navbarRef:i,navigationRef:a}){let o=f(null),c=f(0),l=f(!1),u=()=>{let t=n.value;if(!t)return;if(a.value){let n=getComputedStyle(t),i=Number.parseFloat(n.paddingLeft)+Number.parseFloat(n.paddingRight),o=Number.parseFloat(n.columnGap)||0,s=Math.max(P(r.value),P(e.value));c.value=i+s*2+P(a.value)+o*2}let i=o.value?.clientWidth??t.clientWidth;l.value=c.value>0&&i<c.value};return s(()=>{o.value=i.value?.parentElement??null}),O(o,u),O(n,u),O(r,u),O(a,u),O(e,u),{isCompact:g(()=>t.value||l.value)}}var P;function F(){return(F=e((()=>{u(),k(),P=e=>e?Math.max(e.scrollWidth,e.getBoundingClientRect().width):0})))()}var I,L,R,z,B;function V(){return(V=e((()=>{u(),b(),x(),S(),D(),w(),T(),F(),I=[`data-mode`],L=[`aria-label`],R=[`aria-label`],z=[`aria-label`],B=o({__name:`Navbar`,props:{ariaLabel:{default:`Основная навигация`},blur:{type:Boolean,default:!1},defaultMobileOpen:{type:Boolean,default:!1},mobileMenuLabel:{default:`Открыть меню`},mobileMenuTitle:{default:`Меню`},mobileMenuVariant:{default:`sheet`},mobileOpen:{type:Boolean,default:void 0},mode:{default:`default`},sticky:{type:Boolean,default:!1},stretched:{type:Boolean}},emits:[`update:mobileOpen`],setup(e,{emit:o}){let s=e,u=o,_=ne(),v=g(()=>_.isMobile),b=f(null),x=f(null),S=f(null),w=f(null),T=f(null),{isCompact:D}=de({actionsRef:T,isViewportCompact:v,layoutRef:x,leftRef:S,navbarRef:b,navigationRef:w}),O=g(()=>s.stretched??s.mode!==`floating`),k=f(s.defaultMobileOpen),A=g(()=>s.mobileOpen??k.value),j=e=>{s.mobileOpen===void 0&&(k.value=e),u(`update:mobileOpen`,e)},M=e=>{let t=e.target;t instanceof Element&&t.closest(`a[href]`)&&j(!1)};return t(D,e=>{!e&&A.value&&j(!1)}),(t,o)=>(n(),r(`header`,{ref_key:`navbarRef`,ref:b,class:te([`navbar`,`navbar-${s.mode}`,{blur:s.blur,"navbar-sticky":s.sticky,"navbar-stretched":O.value,"navbar-compact":l(D)}]),"data-mode":s.mode},[d(`div`,{ref_key:`layoutRef`,ref:x,class:`navbar-layout`},[d(`div`,{ref_key:`leftRef`,ref:S,class:`navbar-left`},[a(t.$slots,`left`,{},void 0,!0)],512),l(D)?t.$slots.compactActions?(n(),h(E,{key:1,direction:`row`,gap:1,"align-items":`center`},{default:m(()=>[a(t.$slots,`compactActions`,{},void 0,!0)]),_:3})):c(``,!0):(n(),r(p,{key:0},[d(`div`,{ref_key:`navigationRef`,ref:w,class:`navbar-navigation`,"aria-label":s.ariaLabel},[a(t.$slots,`default`,{},void 0,!0)],8,L),t.$slots.actions?(n(),r(`div`,{key:0,ref_key:`actionsRef`,ref:T,class:`navbar-actions`},[i(E,{direction:`row`,gap:2,"align-items":`center`,"justify-content":`end`},{default:m(()=>[a(t.$slots,`actions`,{},void 0,!0)]),_:3})],512)):c(``,!0)],64)),l(D)&&s.mobileMenuVariant===`dropdown`?(n(),h(ie,{key:2,shown:A.value,"content-padding":`comfortable`,placement:`bottom-end`,"onUpdate:shown":j},{popper:m(()=>[d(`div`,{class:`navbar-mobile-content`,onClick:M},[t.$slots.mobile?a(t.$slots,`mobile`,{},void 0,!0,0):(n(),r(p,{key:1},[d(`div`,{class:`navbar-mobile-navigation`,"aria-label":s.ariaLabel},[a(t.$slots,`default`,{},void 0,!0)],8,R),t.$slots.actions?(n(),h(E,{key:0,direction:`column`,gap:2,stretched:``},{default:m(()=>[a(t.$slots,`actions`,{},void 0,!0)]),_:3})):c(``,!0)],64))])]),default:m(()=>[i(C,{class:`navbar-menu-button`,mode:`ghost`,size:`medium`,squared:``,type:`button`,"aria-label":s.mobileMenuLabel,"aria-expanded":A.value},{default:m(()=>[i(l(y))]),_:1},8,[`aria-label`,`aria-expanded`])]),_:3},8,[`shown`])):l(D)?(n(),h(C,{key:3,class:`navbar-menu-button`,mode:`ghost`,size:`medium`,squared:``,rounded:e.mode===`floating`,type:`button`,"aria-label":s.mobileMenuLabel,"aria-expanded":A.value,onClick:o[0]||=e=>j(!0)},{default:m(()=>[i(l(y))]),_:1},8,[`rounded`,`aria-label`,`aria-expanded`])):c(``,!0)],512),(n(),h(ee,{to:`body`},[l(D)&&s.mobileMenuVariant===`sheet`?(n(),h(re,{key:0,"is-opened":A.value,title:s.mobileMenuTitle,side:`right`,size:`small`,mode:`floating`,"on-close":()=>j(!1)},{default:m(()=>[d(`div`,{class:`navbar-mobile-content`,onClick:M},[t.$slots.mobile?a(t.$slots,`mobile`,{},void 0,!0,0):(n(),r(p,{key:1},[d(`div`,{class:`navbar-mobile-navigation`,"aria-label":s.ariaLabel},[a(t.$slots,`default`,{},void 0,!0)],8,z),t.$slots.actions?(n(),h(E,{key:0,direction:`column`,gap:2,stretched:``},{default:m(()=>[a(t.$slots,`actions`,{},void 0,!0)]),_:3})):c(``,!0)],64))])]),_:3},8,[`is-opened`,`title`,`on-close`])):c(``,!0)]))],10,I))}})})))()}var H;function U(){return(U=e((()=>{V(),_(),H=v(B,[[`__scopeId`,`data-v-5e8ed004`]]),B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`Navbar`,description:``,tags:{},props:[{name:`ariaLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Основная навигация"`}},{name:`blur`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`defaultMobileOpen`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`mobileMenuLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Открыть меню"`}},{name:`mobileMenuTitle`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Меню"`}},{name:`mobileMenuVariant`,required:!1,type:{name:`NavbarMobileVariant`},defaultValue:{func:!1,value:`"sheet"`}},{name:`mobileOpen`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`mode`,required:!1,type:{name:`NavbarMode`},defaultValue:{func:!1,value:`"default"`}},{name:`sticky`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],events:[{name:`update:mobileOpen`,type:{names:[`boolean`]}}],slots:[{name:`left`},{name:`default`},{name:`actions`},{name:`compactActions`},{name:`mobile`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Navbar/Navbar.vue`]})})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{S(),N(),j(),se(),M(),oe(),U(),W={title:`Components/Navbar`,component:H,tags:[`autodocs`],args:{blur:!1,mode:`default`,sticky:!1,stretched:void 0}},G=e=>({components:{Button:C,Navbar:H,NavigationMenu:ae,NavigationMenuIndicator:le,NavigationMenuItem:A,NavigationMenuLink:ce,NavigationMenuList:ue},setup:()=>({args:e}),template:`
    <Navbar v-bind="args">
      <template #left><strong>Navbar</strong></template>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem value="product">
            <NavigationMenuLink href="#product">Продукт</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem value="features">
            <NavigationMenuLink href="#features">Возможности</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem value="pricing">
            <NavigationMenuLink href="#pricing">Тарифы</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
      <template #actions>
        <Button mode="ghost">Войти</Button>
        <Button mode="contrast">Начать</Button>
      </template>
    </Navbar>
  `}),K={render:G},q={args:{mode:`floating`},render:G},J={args:{blur:!0,mode:`floating`},render:G},Y={args:{mode:`floating`},parameters:{viewport:{defaultViewport:`mobile1`}},render:G},X={args:{mode:`floating`,mobileMenuVariant:`dropdown`},parameters:{viewport:{defaultViewport:`mobile1`}},render:G},Z={args:{mode:`floating`},parameters:{viewport:{defaultViewport:`mobile1`}},render:e=>({components:{Button:C,Navbar:H},setup:()=>({args:e}),template:`
      <Navbar v-bind="args">
        <template #left><strong>Navbar</strong></template>
        <template #mobile>
          <Button stretched>Отдельное мобильное действие</Button>
        </template>
      </Navbar>
    `})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderNavbar
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "floating"
  },
  render: renderNavbar
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    blur: true,
    mode: "floating"
  },
  render: renderNavbar
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "floating"
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: renderNavbar
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "floating",
    mobileMenuVariant: "dropdown"
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: renderNavbar
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "floating"
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: args => ({
    components: {
      Button,
      Navbar
    },
    setup: () => ({
      args
    }),
    template: \`
      <Navbar v-bind="args">
        <template #left><strong>Navbar</strong></template>
        <template #mobile>
          <Button stretched>Отдельное мобильное действие</Button>
        </template>
      </Navbar>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Floating`,`Blurred`,`Mobile`,`MobileDropdown`,`CustomMobileContent`]})))()}$();export{J as Blurred,Z as CustomMobileContent,K as Default,q as Floating,Y as Mobile,X as MobileDropdown,Q as __namedExportsOrder,W as default};