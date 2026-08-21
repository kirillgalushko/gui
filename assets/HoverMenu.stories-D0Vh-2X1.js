import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,T as n,Tt as r,Zt as i,d as a,n as o,yt as s}from"./gui-icons.es-BLyOnAQu.js";import{n as c,t as l}from"./Button-BMCIb-MW.js";import{n as u,t as d}from"./BaseMenuItem-CNsmW-eu.js";import{n as f,t as p}from"./BaseMenuGroup-BksnROtQ.js";import{n as m,t as h}from"./BaseMenuSeparator-CL0YaBPh.js";import{n as g,t as _}from"./HoverMenu-9FFVML1T.js";var v;function y(){return(y=e((()=>{u(),v=d})))()}var b;function x(){return(x=e((()=>{y(),b=v,v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`BaseMenuItem`,displayName:`BaseMenuItem`,description:``,tags:{},props:[{name:`showArrow`,required:!1,type:{name:`boolean`}},{name:`selected`,required:!1,type:{name:`boolean`}},{name:`role`,required:!1,type:{name:`union`,elements:[{name:`"menuitem"`},{name:`"menuitemcheckbox"`},{name:`"menuitemradio"`}]}}],slots:[{name:`default`},{name:`trailing`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuItem.vue`]})})))()}var S;function C(){return(C=e((()=>{f(),S=p})))()}var w;function T(){return(T=e((()=>{C(),w=S,S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:`BaseMenuGroup`,displayName:`BaseMenuGroup`,description:``,tags:{},props:[{name:`role`,required:!1,type:{name:`union`,elements:[{name:`"group"`},{name:`"menu"`}]},defaultValue:{func:!1,value:`"group"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuList.vue`]})})))()}var E;function D(){return(D=e((()=>{m(),E=h})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{displayName:`BaseMenuSeparator`,description:``,tags:{},sourceFiles:[`/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenuSeparator.vue`]})})))()}var A,j,M;function N(){return(N=e((()=>{g(),x(),T(),k(),c(),o(),A={title:`Components/HoverMenu`,component:_,tags:[`!autodocs`]},j={args:{},render:()=>({components:{HoverMenu:_,HoverMenuItem:b,HoverMenuList:w,HoverMenuSeparator:O,Button:l,IconExternalLinkOutline:s,IconPencilOutline:n,IconShareOutline:a,IconArchiveOutline:i,IconMailOutline:t,IconCopyOutline:r},template:`
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><IconPencilOutline />Открыть</HoverMenuItem>
            <HoverMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><IconShareOutline />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><IconCopyOutline />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><IconMailOutline />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><IconArchiveOutline />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    `})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      HoverMenu,
      HoverMenuItem,
      HoverMenuList,
      HoverMenuSeparator,
      Button,
      IconExternalLinkOutline,
      IconPencilOutline,
      IconShareOutline,
      IconArchiveOutline,
      IconMailOutline,
      IconCopyOutline
    },
    template: \`
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><IconPencilOutline />Открыть</HoverMenuItem>
            <HoverMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><IconShareOutline />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><IconCopyOutline />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><IconMailOutline />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><IconArchiveOutline />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    \`
  })
}`,...j.parameters?.docs?.source}}},M=[`Default`]})))()}N();export{j as Default,M as __namedExportsOrder,A as default};