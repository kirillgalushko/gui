import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,ct as n}from"./iframe-DSPFKwNv.js";import{n as r,t as i}from"./DatePicker-BGg-uYCP.js";var a,o,s,c;function l(){return(l=e((()=>{t(),r(),a={title:`Components/DatePicker`,component:i,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`extra-small`,`small`,`medium`,`large`]},stretched:{control:`boolean`},disabled:{control:`boolean`}}},o={render:e=>({components:{DatePicker:i},setup(){let t=n(new Date);return{args:e,onChange:({value:e})=>{t.value=e},value:t}},template:`<DatePicker v-bind="args" :value="value" :on-change="onChange" />`})},s={render:e=>({components:{DatePicker:i},setup(){let t=n(null);return{args:e,onChange:({value:e})=>{t.value=e},value:t}},template:`<DatePicker v-bind="args" :value="value" :on-change="onChange" />`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DatePicker
    },
    setup() {
      const value = ref<Date | null>(new Date());
      const onChange = ({
        value: nextValue
      }: DatePickerChangePayload) => {
        value.value = nextValue;
      };
      return {
        args,
        onChange,
        value
      };
    },
    template: '<DatePicker v-bind="args" :value="value" :on-change="onChange" />'
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DatePicker
    },
    setup() {
      const value = ref<Date | null>(null);
      const onChange = ({
        value: nextValue
      }: DatePickerChangePayload) => {
        value.value = nextValue;
      };
      return {
        args,
        onChange,
        value
      };
    },
    template: '<DatePicker v-bind="args" :value="value" :on-change="onChange" />'
  })
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Empty`]})))()}l();export{o as Default,s as Empty,c as __namedExportsOrder,a as default};