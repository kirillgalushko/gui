import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,ct as n}from"./iframe-Du9fEe2r.js";import{n as r,t as i}from"./Calendar-9Q73WdGc.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),a={title:`Components/Calendar`,component:i,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`,`large`]},mode:{control:`select`,options:[`single`,`range`]},showOutsideDays:{control:`boolean`},fixedWeeks:{control:`boolean`},readonly:{control:`boolean`}},args:{size:`medium`,mode:`single`,showOutsideDays:!0,fixedWeeks:!1,readonly:!1}},o={render:e=>({components:{Calendar:i},setup(){return{args:e,selectedDate:n(new Date)}},template:`<Calendar v-bind="args" v-model="selectedDate" />`})},s={args:{mode:`range`},render:e=>({components:{Calendar:i},setup(){return{args:e,rangeValue:n({start:new Date,end:null})}},template:`<Calendar v-bind="args" v-model:range-value="rangeValue" />`})},c={args:{minDate:new Date,fixedWeeks:!0},render:e=>({components:{Calendar:i},setup(){return{args:e,selectedDate:n(null),disabledDates:e=>e.getDay()===0||e.getDay()===6}},template:`<Calendar v-bind="args" v-model="selectedDate" :disabled-dates="disabledDates" />`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(new Date());
      return {
        args,
        selectedDate
      };
    },
    template: '<Calendar v-bind="args" v-model="selectedDate" />'
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "range"
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const rangeValue = ref<CalendarRangePayload>({
        start: new Date(),
        end: null
      });
      return {
        args,
        rangeValue
      };
    },
    template: '<Calendar v-bind="args" v-model:range-value="rangeValue" />'
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minDate: new Date(),
    fixedWeeks: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(null);
      const disabledDates = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
      return {
        args,
        selectedDate,
        disabledDates
      };
    },
    template: '<Calendar v-bind="args" v-model="selectedDate" :disabled-dates="disabledDates" />'
  })
}`,...c.parameters?.docs?.source}}},l=[`Single`,`Range`,`Restricted`]})))()}u();export{s as Range,c as Restricted,o as Single,l as __namedExportsOrder,a as default};