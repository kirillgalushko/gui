import{k as f,D as _,o as t,q as y,z as r,T as h,c as s,a,v,x as C,A as i,E as g,G as k,u as l,H as B,j as c,I as w}from"./vue.esm-bundler-IF9MMzN9.js";import{A as T}from"./Action-Cq1dplGo.js";import{d as M}from"./IconXOutline-CGctgDFx.js";import{T as N}from"./Text-CSlgGdGl.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x={key:0,class:"modal-wrapper"},A={class:"modal",role:"dialog"},$={key:0,class:"modal-title"},I={key:1,class:"modal-close"},S={class:"modal-content"},V={key:2,class:"modal-footer"},m=f({__name:"Modal",props:{isOpened:{type:Boolean},onClose:{type:Function},showCloseButton:{type:Boolean},title:{}},setup(p){const e=p,n=w(),u=_(()=>{const o=n!=null&&n.slots.footer?'"footer footer"':"";return e.title?`
      "title close"
      "content content"
      ${o}
    `:`
     "content close"
      ${o}
  `});return(o,d)=>(t(),y(h,{name:"fade"},{default:r(()=>[e.isOpened?(t(),s("div",x,[d[0]||(d[0]=a("div",{class:"modal-bg"},null,-1)),a("div",A,[a("div",{style:v({gridTemplateAreas:u.value}),class:C(["modal-layout",{"with-title":!!e.title,"with-close":!!e.showCloseButton}])},[e.title?(t(),s("div",$,[i(N,{typography:"title-3"},{default:r(()=>[g(k(e.title),1)]),_:1})])):l("",!0),e.showCloseButton?(t(),s("div",I,[i(T,{onClick:e.onClose},{default:r(()=>[i(B(M))]),_:1},8,["onClick"])])):l("",!0),a("div",S,[c(o.$slots,"default",{},void 0,!0)]),o.$slots.footer?(t(),s("div",V,[c(o.$slots,"footer",{},void 0,!0)])):l("",!0)],6)])])):l("",!0)]),_:3}))}}),E=q(m,[["__scopeId","data-v-9a4409af"]]);m.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"isOpened",required:!1,type:{name:"boolean"}},{name:"onClose",required:!1,type:{name:"TSFunctionType"}},{name:"showCloseButton",required:!1,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Modal/Modal.vue"]};export{E as M};
