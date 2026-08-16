import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,ct as n,y as r}from"./iframe-BRZN4f8M.js";import{n as i,t as a}from"./gui-icons.es-CEoFeAM4.js";import{n as o,t as s}from"./Text-BkeTCBMw.js";import{n as c,t as l}from"./Input-DrZS0Zbc.js";var u,d,f;function p(){return(p=e((()=>{i(),t(),c(),o(),u={title:`1. @gui/2. Иконки/Список всех иконок`,parameters:{layout:`fullscreen`}},d={name:`Поиск иконки`,args:{},render:e=>({components:{...a,Text:s,Input:l},setup(){let t=n(),i=r(()=>{if(!t.value)return a;let e=t.value.toLowerCase();return Object.fromEntries(Object.entries(a).filter(([t])=>t.toLowerCase().includes(e)))});return{args:e,icons:a,search:t,filteredIcons:i}},template:`
    <div style="margin: 32px;">
      <Input placeholder="Поиск иконки" v-model="search" />
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; font-size: 32px; margin: 32px;"
    >
      <div v-for="(Icon, name) in filteredIcons" :key="name" style="display: flex; flex-direction: column; align-items: center; border: 1px solid hsl(var(--border)); border-radius: 6px; padding: 16px 8px">
        <component :is="Icon" />
        <Text typography="label-3" color="secondary" style="word-break: break-all; text-align: center;">{{ name }}</Text>
      </div>
    </div>`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Поиск иконки",
  args: {},
  render: args => ({
    components: {
      ...icons,
      Text,
      Input
    },
    setup() {
      const search = ref();
      const filteredIcons = computed(() => {
        if (!search.value) {
          return icons;
        }
        const lowercasedSearch = search.value.toLowerCase();
        return Object.fromEntries(Object.entries(icons).filter(([name]) => name.toLowerCase().includes(lowercasedSearch)));
      });
      return {
        args,
        icons,
        search,
        filteredIcons
      };
    },
    template: \`
    <div style="margin: 32px;">
      <Input placeholder="Поиск иконки" v-model="search" />
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; font-size: 32px; margin: 32px;"
    >
      <div v-for="(Icon, name) in filteredIcons" :key="name" style="display: flex; flex-direction: column; align-items: center; border: 1px solid hsl(var(--border)); border-radius: 6px; padding: 16px 8px">
        <component :is="Icon" />
        <Text typography="label-3" color="secondary" style="word-break: break-all; text-align: center;">{{ name }}</Text>
      </div>
    </div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`AllIcons`]})))()}p();export{d as AllIcons,f as __namedExportsOrder,u as default};