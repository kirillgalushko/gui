import{e as g,s as d,C as u,o as h,b as B,g as _,x,d as y,n as k,j as w}from"./vue.esm-bundler-CPSzUxcr.js";import{I as z}from"./Icon-CbSpEJpm.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as E}from"./Button-F_kNKc1L.js";import{S as L}from"./Stack-B1GEL4Ty.js";const f=g({__name:"Sidebar",props:{padding:{default:16},width:{default:300},maxWidth:{default:"100vw"},minWidth:{default:"200px"}},setup(v){const a=v,s=d(a.width),e=d(!1),o=d(null);u("sidebar-width",s),u("sidebar-is-resizing",e);const S=()=>{e.value=!0,document.addEventListener("mousemove",r),document.addEventListener("mouseup",b),document.body.style.userSelect="none"},r=t=>{if(e.value&&t.clientX>0&&o.value){const i=o.value.offsetLeft;s.value=t.clientX-i}e.value&&t.buttons!==1&&(e.value=!1)},b=()=>{e.value=!1,document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",r),document.body.style.userSelect=""};return(t,i)=>(h(),B("div",{ref_key:"sidebarRef",ref:o,class:k(["sidebar"]),style:w({width:`${s.value}px`,padding:`${a.padding}px`,maxWidth:a.maxWidth,minWidth:a.minWidth})},[_("div",{class:"resize-handle",onMousedown:S},[x(z,{name:"grip-vertical"})],32),y(t.$slots,"default",{},void 0,!0)],4))}}),p=W(f,[["__scopeId","data-v-7686dc4f"]]);f.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"Padding"},defaultValue:{func:!1,value:"16"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"maxWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100vw'"}},{name:"minWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'200px'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Sidebar/Sidebar.vue"]};const C={title:"Example/Sidebar",component:p,tags:["autodocs"]},n={render:()=>({components:{Sidebar:p,Button:E,Stack:L},template:`
      <Sidebar>
        <Stack stretched direction="column" :gap="3">
          <Button>Входящие</Button>
          <Button>Отправлено</Button>
          <Button>Черновики</Button>
        </Stack>
      </Sidebar>
    `})};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,C as default};
