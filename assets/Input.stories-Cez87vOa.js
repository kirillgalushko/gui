import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,j as n,n as r}from"./gui-icons.es-CEoFeAM4.js";import{n as i,t as a}from"./Input-DrZS0Zbc.js";import{n as o,t as s}from"./Stack-rz41IrXi.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{i(),r(),o(),c={title:`Components/Input`,component:a,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`},invalid:{type:`boolean`},size:{control:`select`,options:[`extra-small`,`small`,`medium`,`large`]}}},l={args:{placeholder:`Placeholder`,value:`Value`},render:e=>({components:{Input:a},setup(){return{args:e}},template:`<Input v-bind="args" v-model="args.value" />`})},u={args:{placeholder:`Placeholder`,value:`Value`},render:e=>({components:{Input:a,IconSearchOutline:t},setup(){return{args:e}},template:`
      <Input v-bind="args" v-model="args.value">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    `})},d={args:{placeholder:`Placeholder`,value:`Value`},render:e=>({components:{Input:a,IconMenu2Outline:n},setup(){return{args:e}},template:`
      <Input v-bind="args" v-model="args.value">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    `})},f={args:{placeholder:`Стоимость`,value:`12000`,postfix:`₽`},render:e=>({components:{Input:a},setup(){return{args:e}},template:`<Input v-bind="args" v-model="args.value" />`})},p={render:()=>({components:{Input:a,Stack:s},setup(){return{sizes:[`extra-small`,`small`,`medium`,`large`]}},template:`
      <Stack direction="column" :gap="3" stretched>
        <Input
          v-for="size in sizes"
          :key="size"
          :size="size"
          :placeholder="size"
          :model-value="size"
        />
      </Stack>
    `})},m={args:{placeholder:`Placeholder`,value:`Value`,description:`Подсказка скрывается при ошибке`,errorMessage:`Поле заполнено неверно`,invalid:!0},render:e=>({components:{Input:a},setup(){return{args:e}},template:`<Input v-bind="args" v-model="args.value" />`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    value: "Value"
  },
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: '<Input v-bind="args" v-model="args.value" />'
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    value: "Value"
  },
  render: args => ({
    components: {
      Input,
      IconSearchOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Input v-bind="args" v-model="args.value">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    \`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    value: "Value"
  },
  render: args => ({
    components: {
      Input,
      IconMenu2Outline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Input v-bind="args" v-model="args.value">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Стоимость",
    value: "12000",
    postfix: "₽"
  },
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: '<Input v-bind="args" v-model="args.value" />'
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input,
      Stack
    },
    setup() {
      const sizes: ComponentSize[] = ["extra-small", "small", "medium", "large"];
      return {
        sizes
      };
    },
    template: \`
      <Stack direction="column" :gap="3" stretched>
        <Input
          v-for="size in sizes"
          :key="size"
          :size="size"
          :placeholder="size"
          :model-value="size"
        />
      </Stack>
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    value: "Value",
    description: "Подсказка скрывается при ошибке",
    errorMessage: "Поле заполнено неверно",
    invalid: true
  },
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: '<Input v-bind="args" v-model="args.value" />'
  })
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithLeftIcon`,`WithRightIcon`,`WithPostfix`,`Sizes`,`Invalid`]})))()}g();export{l as Default,m as Invalid,p as Sizes,u as WithLeftIcon,f as WithPostfix,d as WithRightIcon,h as __namedExportsOrder,c as default};