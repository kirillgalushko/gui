import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,O as i,R as a,S as o,W as s,Z as c,a as l,b as u,ct as d,g as ee,gt as te,h as f,mt as p,x as m,y as h,z as g}from"./iframe-CgWRWv5U.js";import{n as _,t as v}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{j as y,n as b}from"./gui-icons.es-BhzJzRM3.js";import{n as ne,t as x}from"./useViewportBreakpoint-OMYGhV21.js";import{n as S,t as C}from"./Button-CKiDWYnj.js";import{n as w,t as re}from"./Sheet-e5Nu-Iiz.js";import{n as T,t as E}from"./Stack-BAZjGJR2.js";import{n as D,t as ie}from"./Dropdown-CPi2Q_KW.js";import{n as O,t as k}from"./useResize-ByDdlTOU.js";import{a as A,c as j,i as M,l as ae,n as oe,o as se,r as N,s as ce,t as le,u as ue}from"./NavigationMenuList-CBX6MBYl.js";function de({actionsRef:e,isViewportCompact:t,layoutRef:n,leftRef:r,navbarRef:i,navigationRef:o}){let s=d(null),c=d(0),l=d(!1),u=()=>{let t=n.value;if(!t)return;if(o.value){let n=getComputedStyle(t),i=Number.parseFloat(n.paddingLeft)+Number.parseFloat(n.paddingRight),a=Number.parseFloat(n.columnGap)||0,s=Math.max(P(r.value),P(e.value));c.value=i+s*2+P(o.value)+a*2}let i=s.value?.clientWidth??t.clientWidth;l.value=c.value>0&&i<c.value};return a(()=>{s.value=i.value?.parentElement??null}),O(s,u),O(n,u),O(r,u),O(o,u),O(e,u),{isCompact:h(()=>t.value||l.value)}}var P;function F(){return(F=e((()=>{l(),k(),P=e=>e?Math.max(e.scrollWidth,e.getBoundingClientRect().width):0})))()}var I,L,R,z,B;function V(){return(V=e((()=>{l(),b(),x(),S(),D(),w(),T(),F(),I=[`data-mode`],L=[`aria-label`],R=[`aria-label`],z=[`aria-label`],B=i({__name:`Navbar`,props:{ariaLabel:{default:`Основная навигация`},blur:{type:Boolean,default:!1},defaultMobileOpen:{type:Boolean,default:!1},mobileMenuLabel:{default:`Открыть меню`},mobileMenuTitle:{default:`Меню`},mobileMenuVariant:{default:`sheet`},mobileOpen:{type:Boolean,default:void 0},mode:{default:`default`},sticky:{type:Boolean,default:!1},stretched:{type:Boolean}},emits:[`update:mobileOpen`],setup(e,{emit:i}){let a=e,l=i,_=ne(),v=h(()=>_.isMobile),b=d(null),x=d(null),S=d(null),w=d(null),T=d(null),{isCompact:D}=de({actionsRef:T,isViewportCompact:v,layoutRef:x,leftRef:S,navbarRef:b,navigationRef:w}),O=h(()=>a.stretched??a.mode!==`floating`),k=d(a.defaultMobileOpen),A=h(()=>a.mobileOpen??k.value),j=e=>{a.mobileOpen===void 0&&(k.value=e),l(`update:mobileOpen`,e)},M=e=>{let t=e.target;t instanceof Element&&t.closest(`a[href]`)&&j(!1)};return c(D,e=>{!e&&A.value&&j(!1)}),(i,c)=>(g(),n(`header`,{ref_key:`navbarRef`,ref:b,class:te([`navbar`,`navbar-${a.mode}`,{blur:a.blur,"navbar-sticky":a.sticky,"navbar-stretched":O.value,"navbar-compact":p(D)}]),"data-mode":a.mode},[u(`div`,{ref_key:`layoutRef`,ref:x,class:`navbar-layout`},[u(`div`,{ref_key:`leftRef`,ref:S,class:`navbar-left`},[s(i.$slots,`left`,{},void 0,!0)],512),p(D)?i.$slots.compactActions?(g(),m(E,{key:1,direction:`row`,gap:1,"align-items":`center`},{default:t(()=>[s(i.$slots,`compactActions`,{},void 0,!0)]),_:3})):o(``,!0):(g(),n(f,{key:0},[u(`div`,{ref_key:`navigationRef`,ref:w,class:`navbar-navigation`,"aria-label":a.ariaLabel},[s(i.$slots,`default`,{},void 0,!0)],8,L),i.$slots.actions?(g(),n(`div`,{key:0,ref_key:`actionsRef`,ref:T,class:`navbar-actions`},[r(E,{direction:`row`,gap:2,"align-items":`center`,"justify-content":`end`},{default:t(()=>[s(i.$slots,`actions`,{},void 0,!0)]),_:3})],512)):o(``,!0)],64)),p(D)&&a.mobileMenuVariant===`dropdown`?(g(),m(ie,{key:2,shown:A.value,"content-padding":`comfortable`,placement:`bottom-end`,"onUpdate:shown":j},{popper:t(()=>[u(`div`,{class:`navbar-mobile-content`,onClick:M},[i.$slots.mobile?s(i.$slots,`mobile`,{},void 0,!0,0):(g(),n(f,{key:1},[u(`div`,{class:`navbar-mobile-navigation`,"aria-label":a.ariaLabel},[s(i.$slots,`default`,{},void 0,!0)],8,R),i.$slots.actions?(g(),m(E,{key:0,direction:`column`,gap:2,stretched:``},{default:t(()=>[s(i.$slots,`actions`,{},void 0,!0)]),_:3})):o(``,!0)],64))])]),default:t(()=>[r(C,{class:`navbar-menu-button`,mode:`ghost`,size:`medium`,squared:``,type:`button`,"aria-label":a.mobileMenuLabel,"aria-expanded":A.value},{default:t(()=>[r(p(y))]),_:1},8,[`aria-label`,`aria-expanded`])]),_:3},8,[`shown`])):p(D)?(g(),m(C,{key:3,class:`navbar-menu-button`,mode:`ghost`,size:`medium`,squared:``,rounded:e.mode===`floating`,type:`button`,"aria-label":a.mobileMenuLabel,"aria-expanded":A.value,onClick:c[0]||=e=>j(!0)},{default:t(()=>[r(p(y))]),_:1},8,[`rounded`,`aria-label`,`aria-expanded`])):o(``,!0)],512),(g(),m(ee,{to:`body`},[p(D)&&a.mobileMenuVariant===`sheet`?(g(),m(re,{key:0,"is-opened":A.value,title:a.mobileMenuTitle,side:`right`,size:`small`,mode:`floating`,"on-close":()=>j(!1)},{default:t(()=>[u(`div`,{class:`navbar-mobile-content`,onClick:M},[i.$slots.mobile?s(i.$slots,`mobile`,{},void 0,!0,0):(g(),n(f,{key:1},[u(`div`,{class:`navbar-mobile-navigation`,"aria-label":a.ariaLabel},[s(i.$slots,`default`,{},void 0,!0)],8,z),i.$slots.actions?(g(),m(E,{key:0,direction:`column`,gap:2,stretched:``},{default:t(()=>[s(i.$slots,`actions`,{},void 0,!0)]),_:3})):o(``,!0)],64))])]),_:3},8,[`is-opened`,`title`,`on-close`])):o(``,!0)]))],10,I))}})})))()}var H;function U(){return(U=e((()=>{V(),_(),H=v(B,[[`__scopeId`,`data-v-3d6f5e84`]]),B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`Navbar`,description:``,tags:{},props:[{name:`ariaLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Основная навигация"`}},{name:`blur`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`defaultMobileOpen`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`mobileMenuLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Открыть меню"`}},{name:`mobileMenuTitle`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Меню"`}},{name:`mobileMenuVariant`,required:!1,type:{name:`NavbarMobileVariant`},defaultValue:{func:!1,value:`"sheet"`}},{name:`mobileOpen`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`mode`,required:!1,type:{name:`NavbarMode`},defaultValue:{func:!1,value:`"default"`}},{name:`sticky`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],events:[{name:`update:mobileOpen`,type:{names:[`boolean`]}}],slots:[{name:`left`},{name:`default`},{name:`actions`},{name:`compactActions`},{name:`mobile`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Navbar/Navbar.vue`]})})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{S(),ue(),j(),se(),M(),oe(),U(),W={title:`Components/Navbar`,component:H,tags:[`autodocs`],args:{blur:!1,mode:`default`,sticky:!1,stretched:void 0}},G=e=>({components:{Button:C,Navbar:H,NavigationMenu:ae,NavigationMenuIndicator:ce,NavigationMenuItem:A,NavigationMenuLink:N,NavigationMenuList:le},setup:()=>({args:e}),template:`
    <Navbar v-bind="args">
      <template #left><strong>Arenda</strong></template>
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
        <template #left><strong>Arenda</strong></template>
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
        <template #left><strong>Arenda</strong></template>
        <template #mobile>
          <Button stretched>Отдельное мобильное действие</Button>
        </template>
      </Navbar>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Floating`,`Blurred`,`Mobile`,`MobileDropdown`,`CustomMobileContent`]})))()}$();export{J as Blurred,Z as CustomMobileContent,K as Default,q as Floating,Y as Mobile,X as MobileDropdown,Q as __namedExportsOrder,W as default};