import{r as s,k as b,W as N,D as q,w as $,o as y,q as k,z as u,a as c,j as d,v as R,E as w,G as C,H as p,A as F,x as I,V as T,b as D,m as H}from"./vue.esm-bundler-CfgtLz7v.js";import{D as M}from"./Dropdown-C5LPP_Oe.js";import{d as V}from"./IconChevronDownOutline-K0n1ohgz.js";import{u as W}from"./useResize-Zg8B_z5R.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as A}from"./BaseMenuItem-YZEpop8j.js";import"./floating-vue-DT9vKF-X.js";import"./floating-ui.dom.browser.min-Dq8c3VDt.js";import"./IconAccessibleFilled-CySfqBps.js";import"./IconChevronRightOutline-B19WeqrK.js";const E=()=>{const a=s(),e=s(),t=s();return W(a,()=>{a.value&&(e.value=a.value.clientWidth,t.value=a.value.clientHeight)}),{elementRef:a,width:e,height:t}},G=(a,e)=>{const t=s(new Map),n=s();return{options:t,selectedOption:n,registerOption:l=>{a&&l.value===a&&!n.value&&(n.value=l),t.value.set(l.value,l.label)},selectOption:l=>{n.value=l,e==null||e(l)}}},P=["name","value"],J={class:"hidden-options"},x=b({__name:"Select",props:{stretched:{type:Boolean},label:{},value:{},name:{},onChange:{type:Function}},setup(a){const e=a,t=G(e.value,e.onChange);N("select",t);const{elementRef:n,width:r}=E(),o=q(()=>({minWidth:`${r.value-8}px`}));return $(()=>e.value,()=>{if(e.value){const l=t.options.value.get(e.value);t.selectedOption.value={value:e.value,label:l}}else t.selectedOption.value=void 0}),(l,K)=>(y(),k(M,{popperHideTriggers:["click"],placement:"bottom-start",class:"select"},{popper:u(()=>[c("div",{style:R(o.value)},[d(l.$slots,"default",{},void 0,!0)],4)]),default:u(()=>{var m,v,g,h,f;return[c("button",{ref_key:"elementRef",ref:n,class:I(["select-toggle",{stretched:e.stretched}])},[w(C(((g=(v=(m=p(t))==null?void 0:m.selectedOption)==null?void 0:v.value)==null?void 0:g.label)||e.label)+" ",1),F(p(V))],2),c("input",{hidden:"",name:e.name,value:e.value||((f=(h=p(t).selectedOption)==null?void 0:h.value)==null?void 0:f.value)},null,8,P),c("div",J,[d(l.$slots,"default",{},void 0,!0)])]}),_:3}))}}),z=j(x,[["__scopeId","data-v-aa88e29e"]]);x.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"stretched",required:!1,type:{name:"boolean"}},{name:"label",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"onChange",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Select/Select.vue"]};const B=b({__name:"SelectOption",props:{showArrow:{type:Boolean},label:{},value:{}},setup(a){const e=T("select"),t=a,n={label:t.label,value:t.value},r=()=>{e==null||e.selectOption(n)};return D(()=>{e==null||e.registerOption(n)}),(o,l)=>(y(),k(A,H(o.$attrs,{onClick:r}),{default:u(()=>[d(o.$slots,"default",{},()=>[w(C(t.label),1)])]),_:3},16))}});B.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Select/SelectOption.vue"]};const ne={title:"Components/Select",component:z,tags:["!autodocs"]},i={args:{label:"Выберите тему",name:"theme"},render:a=>({components:{Select:z,SelectOption:B},setup(){const e=s("dark");return{args:a,handleChange:n=>{e.value=n.value},selectedOption:e}},template:`
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
}`,...(_=(O=i.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const se=["Default"];export{i as Default,se as __namedExportsOrder,ne as default};