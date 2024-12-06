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
    </div>`})};var m,d,w;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Поиск иконки',
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
}`,...(w=(d=s.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};const ky2=["AllIcons"];export{s as AllIcons,ky2 as __namedExportsOrder,$y2 as default};