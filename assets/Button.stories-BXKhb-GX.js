import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./gui-icons.es-BhzJzRM3.js";import{n as r,t as i}from"./Button-CKiDWYnj.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Button`,component:i,tags:[`autodocs`],argTypes:{mode:{control:`select`,options:[`default`,`contrast`,`ghost`,`outline`,`negative`,`accent`]},size:{control:`select`,options:[`extra-small`,`small`,`medium`,`large`]},stretched:{control:`boolean`},squared:{control:`boolean`},rounded:{control:`boolean`},isLoading:{control:`boolean`},asChild:{control:`boolean`}},args:{mode:`default`,size:`large`,stretched:!1,squared:!1,rounded:!1,onClick:a(()=>`clicked`)}},s={args:{mode:`default`,default:`Button`}},c={args:{mode:`default`,default:`Button`,squared:!0},render:e=>({components:{Button:i,IconSettingsOutline:n},setup(){return{args:e}},template:`<Button v-bind="args"><IconSettingsOutline /></Button>`})},l={args:{mode:`default`,default:`Button`,isLoading:!0},render:e=>({components:{Button:i},setup(){return{args:e}},template:`<Button v-bind="args">Loading</Button>`})},u={args:{mode:`default`,default:`Button`,disabled:!0},render:e=>({components:{Button:i},setup(){return{args:e}},template:`<Button v-bind="args">Купить</Button>`})},d={render:()=>({components:{Button:i},template:`<Button as-child><a href="#">Кнопка-ссылка</a></Button>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "default",
    default: "Button"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "default",
    default: "Button",
    squared: true
  },
  render: args => ({
    components: {
      Button,
      IconSettingsOutline
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args"><IconSettingsOutline /></Button>'
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "default",
    default: "Button",
    isLoading: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Loading</Button>'
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "default",
    default: "Button",
    disabled: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Купить</Button>'
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: '<Button as-child><a href="#">Кнопка-ссылка</a></Button>'
  })
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`IconButton`,`Loading`,`Disabled`,`AsLink`]})))()}p();export{d as AsLink,u as Disabled,c as IconButton,l as Loading,s as Primary,f as __namedExportsOrder,o as default};