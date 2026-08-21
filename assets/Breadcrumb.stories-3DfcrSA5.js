import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,F as i,K as a,O as o,W as s,a as c,mt as l,x as u,z as d}from"./iframe-DSPFKwNv.js";import{n as f,t as p}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Ft as m,n as h}from"./gui-icons.es-BLyOnAQu.js";var g,_;function v(){return(v=e((()=>{c(),g=[`aria-label`],_=o({inheritAttrs:!1,__name:`Breadcrumb`,props:{label:{default:`breadcrumb`}},setup(e){let t=e;return(e,r)=>(d(),n(`nav`,i(e.$attrs,{"aria-label":t.label}),[s(e.$slots,`default`)],16,g))}})})))()}var y;function b(){return(b=e((()=>{v(),y=_,_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:`default`,displayName:`Breadcrumb`,description:``,tags:{},props:[{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"breadcrumb"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Breadcrumb/Breadcrumb.vue`]})})))()}function x(e,t){return d(),n(`li`,C,[s(e.$slots,`default`,{},void 0,!0)])}var S,C,w;function T(){return(T=e((()=>{c(),f(),S={},C={class:`breadcrumb-item`},w=p(S,[[`render`,x],[`__scopeId`,`data-v-2457fa85`]]),S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{displayName:`BreadcrumbItem`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Breadcrumb/BreadcrumbItem.vue`]})})))()}var E;function D(){return(D=e((()=>{c(),E=o({inheritAttrs:!1,__name:`BreadcrumbLink`,props:{Element:{default:`a`}},setup(e){let n=e;return(e,r)=>(d(),u(a(n.Element),i(e.$attrs,{class:`breadcrumb-link`}),{default:t(()=>[s(e.$slots,`default`,{},void 0,!0)]),_:3},16))}})})))()}var O;function k(){return(k=e((()=>{D(),f(),O=p(E,[[`__scopeId`,`data-v-c4a5ba29`]]),E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:`default`,displayName:`BreadcrumbLink`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"a"`},{name:`"button"`},{name:`"span"`}]},defaultValue:{func:!1,value:`"a"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Breadcrumb/BreadcrumbLink.vue`]})})))()}function A(e,t){return d(),n(`ol`,M,[s(e.$slots,`default`,{},void 0,!0)])}var j,M,N;function P(){return(P=e((()=>{c(),f(),j={},M={class:`breadcrumb-list`},N=p(j,[[`render`,A],[`__scopeId`,`data-v-1b7dc972`]]),j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{displayName:`BreadcrumbList`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Breadcrumb/BreadcrumbList.vue`]})})))()}function F(e,t){return d(),n(`span`,L,[s(e.$slots,`default`,{},void 0,!0)])}var I,L,R;function z(){return(z=e((()=>{c(),f(),I={},L={class:`breadcrumb-page`,role:`link`,"aria-disabled":`true`,"aria-current":`page`},R=p(I,[[`render`,F],[`__scopeId`,`data-v-05aa15d5`]]),I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{displayName:`BreadcrumbPage`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Breadcrumb/BreadcrumbPage.vue`]})})))()}var B,V;function H(){return(H=e((()=>{c(),h(),B={class:`breadcrumb-separator`,role:`presentation`,"aria-hidden":`true`},V=o({__name:`BreadcrumbSeparator`,setup(e){return(e,t)=>(d(),n(`li`,B,[s(e.$slots,`default`,{},()=>[r(l(m))],!0)]))}})})))()}var U;function W(){return(W=e((()=>{H(),f(),U=p(V,[[`__scopeId`,`data-v-bc2c4e7d`]]),V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:`default`,displayName:`BreadcrumbSeparator`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Breadcrumb/BreadcrumbSeparator.vue`]})})))()}var G,K,q,J,Y;function X(){return(X=e((()=>{b(),T(),k(),P(),z(),W(),G={title:`Components/Breadcrumb`,component:y,tags:[`autodocs`]},K={Breadcrumb:y,BreadcrumbItem:w,BreadcrumbLink:O,BreadcrumbList:N,BreadcrumbPage:R,BreadcrumbSeparator:U},q={render:()=>({components:K,template:`
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    `})},J={render:()=>({components:K,template:`
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Installation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components,
    template: \`
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    \`
  })
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components,
    template: \`
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Installation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`CustomSeparator`]})))()}X();export{J as CustomSeparator,q as Default,Y as __namedExportsOrder,G as default};