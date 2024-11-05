import{r as s,j as b,U as I,D as N,w as $,e as y,l as w,z as p,t as c,g as u,v as q,E as k,G as C,I as f,A as R,x as T,S as F,o as D,m as E}from"./vue.esm-bundler-0yPEwasB.js";import{D as M}from"./Dropdown-By_mAkad.js";import{I as j}from"./Icon-DuNk9YsD.js";import{u as A}from"./useResize-CWvUv9QY.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as V}from"./BaseMenuItem-DRfFKY4T.js";import"./floating-vue-vpDwKnjw.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";const W=()=>{const a=s(),e=s(),t=s();return A(a,()=>{a.value&&(e.value=a.value.clientWidth,t.value=a.value.clientHeight)}),{elementRef:a,width:e,height:t}},G=(a,e)=>{const t=s(new Map),n=s();return{options:t,selectedOption:n,registerOption:l=>{a&&l.value===a&&(n.value=l),t.value.set(l.value,l.label)},selectOption:l=>{n.value=l,e==null||e(l)}}},P=["name","value"],U={class:"hidden-options"},x=b({__name:"Select",props:{stretched:{type:Boolean},label:{},value:{},name:{},onChange:{type:Function}},setup(a){const e=a,t=G(e.value,e.onChange);I("select",t);const{elementRef:n,width:r}=W(),o=N(()=>({minWidth:`${r.value-8}px`}));return $(()=>e.value,()=>{if(e.value){const l=t.options.value.get(e.value);t.selectedOption.value={value:e.value,label:l}}else t.selectedOption.value=void 0}),(l,J)=>(y(),w(M,{popperHideTriggers:["click"],placement:"bottom-start",class:"select"},{popper:p(()=>[c("div",{style:q(o.value)},[u(l.$slots,"default",{},void 0,!0)],4)]),default:p(()=>{var d,m,v,g,h;return[c("button",{ref_key:"elementRef",ref:n,class:T(["select-toggle",{stretched:e.stretched}])},[k(C(((v=(m=(d=f(t))==null?void 0:d.selectedOption)==null?void 0:m.value)==null?void 0:v.label)||e.label)+" ",1),R(j,{name:"chevron-down"})],2),c("input",{hidden:"",name:e.name,value:e.value||((h=(g=f(t).selectedOption)==null?void 0:g.value)==null?void 0:h.value)},null,8,P),c("div",U,[u(l.$slots,"default",{},void 0,!0)])]}),_:3}))}}),z=H(x,[["__scopeId","data-v-112c9b8d"]]);x.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"stretched",required:!1,type:{name:"boolean"}},{name:"label",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"onChange",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Select/Select.vue"]};const B=b({__name:"SelectOption",props:{showArrow:{type:Boolean},label:{},value:{}},setup(a){const e=F("select"),t=a,n={label:t.label,value:t.value},r=()=>{e==null||e.selectOption(n)};return D(()=>{e==null||e.registerOption(n)}),(o,l)=>(y(),w(V,E(o.$attrs,{onClick:r}),{default:p(()=>[u(o.$slots,"default",{},()=>[k(C(t.label),1)])]),_:3},16))}});B.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Select/SelectOption.vue"]};const ae={title:"Example/Select",component:z,tags:["autodocs"],argTypes:{},args:{}},i={args:{label:"Выберите тему",name:"theme"},render:a=>({components:{Select:z,SelectOption:B},setup(){const e=s("dark");return{args:a,handleChange:n=>{e.value=n.value},selectedOption:e}},template:`
    <div>
      <Select v-bind="args" :value="selectedOption" @change="handleChange">
        <SelectOption value="auto" label="Авто" />
        <SelectOption value="light" label="Светлая тема" />
        <SelectOption value="dark" label="Тёмная тема" />
      </Select>
    </div>`})};var S,O,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Выберите тему',
    name: 'theme'
  },
  render: args => ({
    components: {
      Select,
      SelectOption
    },
    setup() {
      const selectedOption = ref<string>('dark');
      const handleChange = (option: RegisteredOption) => {
        selectedOption.value = option.value;
      };
      return {
        args,
        handleChange,
        selectedOption
      };
    },
    template: \`
    <div>
      <Select v-bind="args" :value="selectedOption" @change="handleChange">
        <SelectOption value="auto" label="Авто" />
        <SelectOption value="light" label="Светлая тема" />
        <SelectOption value="dark" label="Тёмная тема" />
      </Select>
    </div>\`
  })
}`,...(_=(O=i.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const le=["Default"];export{i as Default,le as __namedExportsOrder,ae as default};
