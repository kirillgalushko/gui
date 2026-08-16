import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,ct as n}from"./iframe-BRZN4f8M.js";import{n as r,t as i}from"./Button-BnZoe71I.js";import{n as a,t as o}from"./Gap-DiSiEy1Z.js";import{i as s,n as c,r as l,t as u}from"./SelectOption-Ba440VoP.js";var d,f,p,m;function h(){return(h=e((()=>{s(),c(),t(),r(),a(),d={title:`Components/Select`,component:l,tags:[`!autodocs`],argTypes:{size:{control:`select`,options:[`extra-small`,`small`,`medium`,`large`]},mode:{control:`select`,options:[`default`,`outline`]}}},f={args:{label:`Выберите тему`,name:`theme`,mode:`outline`},render:e=>({components:{Select:l,SelectOption:u},setup(){let t=n(`dark`);return{args:e,handleChange:e=>{t.value=e.value},selectedOption:t}},template:`
    <div>
      <Select v-bind="args" :value="selectedOption" @change="handleChange">
        <SelectOption value="auto" label="Авто" />
        <SelectOption value="light" label="Светлая тема" />
        <SelectOption value="dark" label="Тёмная тема" />
      </Select>
    </div>`})},p={render:()=>({components:{Button:i,Gap:o,Select:l,SelectOption:u},setup(){let e=n(`dark`);return{handleChange:t=>{e.value=t.value},selectedOption:e,sizes:[`extra-small`,`small`,`medium`,`large`]}},template:`
    <div v-for="size in sizes" :key="size">
      <Select :size="size" :value="selectedOption" :onChange="handleChange">
        <SelectOption value="auto" label="Авто" />
        <SelectOption value="light" label="Светлая тема" />
        <SelectOption value="dark" label="Тёмная тема" />
      </Select>
      <Gap direction="horizontal" :size="2" />
      <Button :size="size">Button</Button>
      <Gap direction="vertical" :size="3" />
    </div>`})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Выберите тему",
    name: "theme",
    mode: "outline"
  },
  render: args => ({
    components: {
      Select,
      SelectOption
    },
    setup() {
      const selectedOption = ref<string>("dark");
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Gap,
      Select,
      SelectOption
    },
    setup() {
      const selectedOption = ref<string>("dark");
      const sizes: ComponentSize[] = ["extra-small", "small", "medium", "large"];
      const handleChange = (option: RegisteredOption) => {
        selectedOption.value = option.value;
      };
      return {
        handleChange,
        selectedOption,
        sizes
      };
    },
    template: \`
    <div v-for="size in sizes" :key="size">
      <Select :size="size" :value="selectedOption" :onChange="handleChange">
        <SelectOption value="auto" label="Авто" />
        <SelectOption value="light" label="Светлая тема" />
        <SelectOption value="dark" label="Тёмная тема" />
      </Select>
      <Gap direction="horizontal" :size="2" />
      <Button :size="size">Button</Button>
      <Gap direction="vertical" :size="3" />
    </div>\`
  })
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Sizes`]})))()}h();export{f as Default,p as Sizes,m as __namedExportsOrder,d as default};