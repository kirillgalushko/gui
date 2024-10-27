import{e as b,s as r,o as g,b as h,g as B,x as _,d as x,n as y,j as k}from"./vue.esm-bundler-JOEmeMwU.js";import{I as w}from"./Icon-DZVKx22U.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as z}from"./Button-jsxqPpL6.js";import{S as E}from"./Stack-Cu5PgGel.js";const m=b({__name:"Sidebar",props:{padding:{default:16},width:{default:300},maxWidth:{default:"100vw"},minWidth:{default:"200px"}},setup(p){const a=p,d=r(a.width),e=r(!1),s=r(null),v=()=>{e.value=!0,document.addEventListener("mousemove",o),document.addEventListener("mouseup",S),document.body.style.userSelect="none"},o=t=>{if(e.value&&t.clientX>0&&s.value){const i=s.value.offsetLeft;d.value=t.clientX-i}e.value&&t.buttons!==1&&(e.value=!1)},S=()=>{e.value=!1,document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",o),document.body.style.userSelect=""};return(t,i)=>(g(),h("div",{ref_key:"sidebarRef",ref:s,class:y(["sidebar"]),style:k({width:`${d.value}px`,padding:`${a.padding}px`,maxWidth:a.maxWidth,minWidth:a.minWidth})},[B("div",{class:"resize-handle",onMousedown:v},[_(w,{name:"grip-vertical"})],32),x(t.$slots,"default",{},void 0,!0)],4))}}),f=W(m,[["__scopeId","data-v-64d25416"]]);m.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"Padding"},defaultValue:{func:!1,value:"16"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100vw'"}},{name:"minWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'200px'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue"]};const N={title:"Example/Sidebar",component:f,tags:["autodocs"]},n={render:()=>({components:{Sidebar:f,Button:z,Stack:E},template:`
      <Sidebar>
        <Stack stretched direction="column" :gap="3">
          <Button>Входящие</Button>
          <Button>Отправлено</Button>
          <Button>Черновики</Button>
        </Stack>
      </Sidebar>
    `})};var u,l,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Sidebar,
      Button,
      Stack
    },
    template: \`
      <Sidebar>
        <Stack stretched direction="column" :gap="3">
          <Button>Входящие</Button>
          <Button>Отправлено</Button>
          <Button>Черновики</Button>
        </Stack>
      </Sidebar>
    \`
  })
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,N as default};
