import{d as o,o as s,k as d,l as r,n as l,j as u,p as c,e as i}from"./vue.esm-bundler-xPxPWV_s.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const t=o({__name:"Card",props:{interactive:{type:Boolean,default:!1},onClick:{},background:{default:"default"},stretched:{type:Boolean},padding:{default:8},borderRadius:{default:8}},setup(n){const e=n;return(a,p)=>(s(),d(c(e.interactive?"button":"div"),{class:l(["card",e.background,{interactive:e.interactive,stretched:e.stretched}]),style:u({padding:`${e.padding}px`,borderRadius:`${e.borderRadius}px`}),onClick:a.onClick},{default:r(()=>[i(a.$slots,"default",{},void 0,!0)]),_:3},8,["class","style","onClick"]))}}),C=f(t,[["__scopeId","data-v-a964ab88"]]);t.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"interactive",defaultValue:{func:!1,value:"false"}},{name:"background",defaultValue:{func:!1,value:"'default'"}},{name:"padding",defaultValue:{func:!1,value:"8"}},{name:"borderRadius",defaultValue:{func:!1,value:"8"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Card/Card.vue"]};export{C};
