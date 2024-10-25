import{e as b,s as r,o as g,b as B,g as h,x as _,d as x,n as y,j as k}from"./vue.esm-bundler-JOEmeMwU.js";import{I as W}from"./Icon-DZVKx22U.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as E}from"./Button-jsxqPpL6.js";import{S as w}from"./Stack-Cu5PgGel.js";const m=b({__name:"Sidebar",props:{padding:{default:16},maxWidth:{default:"100vw"},minWidth:{default:"200px"}},setup(f){const n=f,d=r(400),e=r(!1),o=r(null),v=()=>{e.value=!0,document.addEventListener("mousemove",s),document.addEventListener("mouseup",S),document.body.style.userSelect="none"},s=t=>{if(e.value&&t.clientX>0&&o.value){const i=o.value.offsetLeft;d.value=t.clientX-i}e.value&&t.buttons!==1&&(e.value=!1)},S=()=>{e.value=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",s),document.body.style.userSelect=""};return(t,i)=>(g(),B("div",{ref_key:"sidebarRef",ref:o,class:y(["sidebar"]),style:k({width:`${d.value}px`,padding:`${n.padding}px`,maxWidth:n.maxWidth,minWidth:n.minWidth})},[h("div",{class:"resize-handle",onMousedown:v},[_(W,{name:"grip-vertical"})],32),x(t.$slots,"default",{},void 0,!0)],4))}}),p=z(m,[["__scopeId","data-v-44d85bb3"]]);m.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"Padding"},defaultValue:{func:!1,value:"16"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100vw'"}},{name:"minWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'200px'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue"]};const q={title:"Example/Sidebar",component:p,tags:["autodocs"]},a={render:()=>({components:{Sidebar:p,Button:E,Stack:w},template:`
      <Sidebar>
        <Stack stretched direction="column" :gap="3">
          <Button>Входящие</Button>
          <Button>Отправлено</Button>
          <Button>Черновики</Button>
        </Stack>
      </Sidebar>
    `})};var u,l,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const $=["Default"];export{a as Default,$ as __namedExportsOrder,q as default};
