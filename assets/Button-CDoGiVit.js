import{k as d,o,c as t,j as r,A as l,u,m as i}from"./vue.esm-bundler-CfgtLz7v.js";import{L as m}from"./Loader-NZg-vdJJ.js";import{_ as c}from"./_plugin-vue_export-helper-DlAUqK2U.js";const p=["disabled"],f={key:0,class:"button-loader"},s=d({__name:"Button",props:{mode:{default:"default"},stretched:{type:Boolean},squared:{type:Boolean},isLoading:{type:Boolean},disabled:{type:Boolean}},setup(n){const e=n;return(a,b)=>(o(),t("button",i(a.$attrs,{disabled:e.disabled,class:["button",e.mode,{stretched:e.stretched,squared:e.squared,"with-loader":e.isLoading,disabled:e.disabled}]}),[r(a.$slots,"default",{},void 0,!0),a.isLoading?(o(),t("div",f,[l(m)])):u("",!0)],16,p))}}),g=c(s,[["__scopeId","data-v-ba9a8c4d"]]);s.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"mode",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"accent"'},{name:'"ghost"'},{name:'"outline"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"stretched",required:!1,type:{name:"boolean"}},{name:"squared",required:!1,type:{name:"boolean"}},{name:"isLoading",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Button/Button.vue"]};export{g as B};