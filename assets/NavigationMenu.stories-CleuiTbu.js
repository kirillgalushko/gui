import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,I as i,L as a,M as o,O as s,R as c,S as l,W as u,a as d,b as f,ct as p,mt as m,o as h,vt as g,x as _,y as v,z as y}from"./iframe-BRZN4f8M.js";import{n as b,t as x}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Vt as S,n as C}from"./gui-icons.es-CEoFeAM4.js";import{i as w,n as ee,o as T,r as E,s as D,t as O}from"./floating-ui.vue-BdPmChXt.js";import{a as k,c as A,d as j,f as M,i as N,l as P,n as F,o as te,p as I,r as ne,s as re,t as ie,u as ae}from"./NavigationMenuList-DtMguFEY.js";var L,R,z;function B(){return(B=e((()=>{d(),O(),j(),L=[`id`,`aria-labelledby`],R={class:`navigation-menu-content-inner`},z=s({__name:`NavigationMenuContent`,setup(e){let r=o(M),i=o(I);if(!r||!i)throw Error(`NavigationMenuContent must be used inside NavigationMenuItem`);let a=p(null),s=v(()=>r.isMobile.value||r.orientation.value===`vertical`),{floatingStyles:c}=ee(i.triggerRef,a,{placement:`bottom-start`,middleware:[T(8),w(),D({padding:8})],whileElementsMounted:E}),d=v(()=>s.value?void 0:c.value);return(e,o)=>(y(),_(h,{name:`navigation-menu-content`},{default:t(()=>[m(i).isOpen.value?(y(),n(`div`,{key:0,id:m(i).contentId,ref_key:`floatingRef`,ref:a,class:`navigation-menu-content`,role:`region`,tabindex:`-1`,"aria-labelledby":m(i).triggerId,"data-state":`open`,style:g(d.value),onPointerenter:o[0]||=(...e)=>m(r).cancelScheduledChange&&m(r).cancelScheduledChange(...e),onPointerleave:o[1]||=(...e)=>m(r).scheduleClose&&m(r).scheduleClose(...e)},[f(`div`,R,[u(e.$slots,`default`,{},void 0,!0)])],44,L)):l(``,!0)]),_:3}))}})})))()}var V;function H(){return(H=e((()=>{B(),b(),V=x(z,[[`__scopeId`,`data-v-1b613c6a`]]),z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{exportName:`default`,displayName:`NavigationMenuContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/NavigationMenu/NavigationMenuContent.vue`]})})))()}var U,W,G;function K(){return(K=e((()=>{d(),C(),j(),U=[`id`,`aria-controls`,`aria-expanded`,`data-state`,`disabled`],W={class:`navigation-menu-trigger-content`},G=s({__name:`NavigationMenuTrigger`,setup(e){let t=o(M),s=o(I);if(!t||!s)throw Error(`NavigationMenuTrigger must be used inside NavigationMenuItem`);let l=p(null),d=()=>{i(()=>{document.getElementById(s.contentId)?.focus()})},h=e=>{[`ArrowDown`,`Enter`,` `].includes(e.key)&&(e.preventDefault(),t.open(s.value),d())};return c(()=>{s.triggerRef.value=l.value,t.registerTrigger(s.value,l.value)}),a(()=>{s.triggerRef.value=null,t.registerTrigger(s.value,null)}),(e,i)=>(y(),n(`button`,{id:m(s).triggerId,ref_key:`triggerRef`,ref:l,class:`navigation-menu-trigger`,type:`button`,"data-navigation-menu-focusable":``,"aria-controls":m(s).contentId,"aria-expanded":m(s).isOpen.value,"aria-haspopup":`true`,"data-state":m(s).isOpen.value?`open`:`closed`,disabled:m(s).disabled.value,onClick:i[0]||=e=>m(t).toggle(m(s).value),onKeydown:h},[f(`span`,W,[u(e.$slots,`default`,{},void 0,!0)]),r(m(S),{class:`navigation-menu-trigger-icon`,"aria-hidden":`true`})],40,U))}})})))()}var q;function J(){return(J=e((()=>{K(),b(),q=x(G,[[`__scopeId`,`data-v-d1a39b41`]]),G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:`default`,displayName:`NavigationMenuTrigger`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/NavigationMenu/NavigationMenuTrigger.vue`]})})))()}var Y,X,Z,Q;function $(){return($=e((()=>{ae(),H(),A(),te(),N(),F(),J(),Y={title:`Components/NavigationMenu`,component:P,tags:[`autodocs`],args:{openOnHover:!0,orientation:`horizontal`}},X={render:e=>({components:{NavigationMenu:P,NavigationMenuContent:V,NavigationMenuIndicator:re,NavigationMenuItem:k,NavigationMenuLink:ne,NavigationMenuList:ie,NavigationMenuTrigger:q},setup:()=>({args:e}),template:`
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