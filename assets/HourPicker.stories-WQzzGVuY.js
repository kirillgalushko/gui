import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,O as r,U as i,a,ct as o,h as s,mt as c,x as l,z as u}from"./iframe-CgWRWv5U.js";import{i as d,n as f,r as p,t as m}from"./SelectOption-DFcN6N6U.js";var h;function g(){return(g=e((()=>{a(),d(),f(),h=r({__name:`HourPicker`,props:{value:{},onChange:{},label:{default:`Время`},name:{},stretched:{type:Boolean}},setup(e){let r=e,a=Array.from({length:24},(e,t)=>`${String(t).padStart(2,`0`)}:00`),o=e=>{r.onChange?.({value:e.value})};return(e,d)=>(u(),l(p,{value:r.value,label:r.label,name:r.name,stretched:r.stretched,"on-change":o},{default:t(()=>[(u(!0),n(s,null,i(c(a),e=>(u(),l(m,{key:e,value:e,label:e},null,8,[`value`,`label`]))),128))]),_:1},8,[`value`,`label`,`name`,`stretched`]))}})})))()}var _;function v(){return(v=e((()=>{g(),_=h,h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:`default`,displayName:`HourPicker`,description:``,tags:{},props:[{name:`value`,required:!1,type:{name:`string`}},{name:`onChange`,required:!1,type:{name:`TSFunctionType`}},{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Время"`}},{name:`name`,required:!1,type:{name:`string`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/HourPicker/HourPicker.vue`]})})))()}var y,b,x;function S(){return(S=e((()=>{a(),v(),y={title:`Components/HourPicker`,component:_,tags:[`autodocs`],argTypes:{stretched:{control:`boolean`}}},b={render:e=>({components:{HourPicker:_},setup(){let t=o(`14:00`);return{args:e,onChange:({value:e})=>{t.value=e},value:t}},template:`<HourPicker v-bind="args" :value="value" :on-change="onChange" />`})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HourPicker
    },
    setup() {
      const value = ref("14:00");
      const onChange = ({
        value: nextValue
      }: HourPickerChangePayload) => {
        value.value = nextValue;
      };
      return {
        args,
        onChange,
        value
      };
    },
    template: '<HourPicker v-bind="args" :value="value" :on-change="onChange" />'
  })
}`,...b.parameters?.docs?.source}}},x=[`Default`]})))()}S();export{b as Default,x as __namedExportsOrder,y as default};