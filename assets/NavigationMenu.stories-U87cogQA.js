import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,D as r,G as i,I as a,L as o,M as s,O as c,R as l,S as u,_t as d,a as f,b as p,dt as m,o as h,tt as g,x as _,xt as v,y}from"./iframe-Z95Hq5ox.js";import{n as b,t as x}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as ee,zt as te}from"./gui-icons.es-B0LP8gzK.js";import{i as S,n as C,o as w,r as T,s as E,t as D}from"./floating-ui.vue-BG4icK1h.js";import{a as O,c as k,d as A,f as j,i as M,l as N,n as ne,o as re,p as P,r as ie,s as ae,t as F,u as I}from"./NavigationMenuList-BUCOg3Kq.js";var L,R,z;function B(){return(B=e((()=>{f(),D(),A(),L=[`id`,`aria-labelledby`],R={class:`navigation-menu-content-inner`},z=c({__name:`NavigationMenuContent`,setup(e){let r=s(j),a=s(P);if(!r||!a)throw Error(`NavigationMenuContent must be used inside NavigationMenuItem`);let o=m(null),c=y(()=>r.isMobile.value||r.orientation.value===`vertical`),{floatingStyles:l}=C(a.triggerRef,o,{placement:`bottom-start`,middleware:[w(8),S(),E({padding:8})],whileElementsMounted:T}),f=y(()=>c.value?void 0:l.value);return(e,s)=>(t(),_(h,{name:`navigation-menu-content`},{default:g(()=>[d(a).isOpen.value?(t(),n(`div`,{key:0,id:d(a).contentId,ref_key:`floatingRef`,ref:o,class:`navigation-menu-content`,role:`region`,tabindex:`-1`,"aria-labelledby":d(a).triggerId,"data-state":`open`,style:v(f.value),onPointerenter:s[0]||=(...e)=>d(r).cancelScheduledChange&&d(r).cancelScheduledChange(...e),onPointerleave:s[1]||=(...e)=>d(r).scheduleClose&&d(r).scheduleClose(...e)},[p(`div`,R,[i(e.$slots,`default`,{},void 0,!0)])],44,L)):u(``,!0)]),_:3}))}})})))()}var V;function H(){return(H=e((()=>{B(),b(),V=x(z,[[`__scopeId`,`data-v-1b613c6a`]]),z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{exportName:`default`,displayName:`NavigationMenuContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/NavigationMenu/NavigationMenuContent.vue`]})})))()}var U,W,G;function K(){return(K=e((()=>{f(),ee(),A(),U=[`id`,`aria-controls`,`aria-expanded`,`data-state`,`disabled`],W={class:`navigation-menu-trigger-content`},G=c({__name:`NavigationMenuTrigger`,setup(e){let c=s(j),u=s(P);if(!c||!u)throw Error(`NavigationMenuTrigger must be used inside NavigationMenuItem`);let f=m(null),h=()=>{a(()=>{document.getElementById(u.contentId)?.focus()})},g=e=>{[`ArrowDown`,`Enter`,` `].includes(e.key)&&(e.preventDefault(),c.open(u.value),h())};return l(()=>{u.triggerRef.value=f.value,c.registerTrigger(u.value,f.value)}),o(()=>{u.triggerRef.value=null,c.registerTrigger(u.value,null)}),(e,a)=>(t(),n(`button`,{id:d(u).triggerId,ref_key:`triggerRef`,ref:f,class:`navigation-menu-trigger`,type:`button`,"data-navigation-menu-focusable":``,"aria-controls":d(u).contentId,"aria-expanded":d(u).isOpen.value,"aria-haspopup":`true`,"data-state":d(u).isOpen.value?`open`:`closed`,disabled:d(u).disabled.value,onClick:a[0]||=e=>d(c).toggle(d(u).value),onKeydown:g},[p(`span`,W,[i(e.$slots,`default`,{},void 0,!0)]),r(d(te),{class:`navigation-menu-trigger-icon`,"aria-hidden":`true`})],40,U))}})})))()}var q;function J(){return(J=e((()=>{K(),b(),q=x(G,[[`__scopeId`,`data-v-d1a39b41`]]),G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:`default`,displayName:`NavigationMenuTrigger`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/NavigationMenu/NavigationMenuTrigger.vue`]})})))()}var Y,X,Z,Q;function $(){return($=e((()=>{I(),H(),k(),re(),M(),ne(),J(),Y={title:`Components/NavigationMenu`,component:N,tags:[`autodocs`],args:{openOnHover:!0,orientation:`horizontal`}},X={render:e=>({components:{NavigationMenu:N,NavigationMenuContent:V,NavigationMenuIndicator:ae,NavigationMenuItem:O,NavigationMenuLink:ie,NavigationMenuList:F,NavigationMenuTrigger:q},setup:()=>({args:e}),template:`
      <NavigationMenu v-bind="args">
        <NavigationMenuList>
          <NavigationMenuItem value="product">
            <NavigationMenuTrigger>Продукт</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#calendar">Календарь</NavigationMenuLink>
              <NavigationMenuLink href="#bookings">Бронирования</NavigationMenuLink>
            </NavigationMenuContent>
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
    `})},Z={...X,args:{orientation:`vertical`}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuIndicator,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger
    },
    setup: () => ({
      args
    }),
    template: \`
      <NavigationMenu v-bind="args">
        <NavigationMenuList>
          <NavigationMenuItem value="product">
            <NavigationMenuTrigger>Продукт</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#calendar">Календарь</NavigationMenuLink>
              <NavigationMenuLink href="#bookings">Бронирования</NavigationMenuLink>
            </NavigationMenuContent>
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
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    orientation: "vertical"
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Vertical`]})))()}$();export{X as Default,Z as Vertical,Q as __namedExportsOrder,Y as default};