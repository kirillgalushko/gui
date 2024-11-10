import { Meta, StoryObj } from '@storybook/vue3';
import * as icons from '@gui/icons'
import { computed, defineComponent, ref } from 'vue';
import Input from '../components/Input/Input.vue'
import Text from '../components/Text/Text.vue'

export default {
  title: '1. @gui/2. Иконки/Список всех иконок',
  parameters: {
    layout: 'fullscreen',
  }
} as Meta;

export const AllIcons: StoryObj<typeof defineComponent<{}>> = {
  name: 'Поиск иконки',
  args: {},
  render: (args) => ({
    components: { ...icons, Text, Input },
    setup() {
      const search = ref()
      const filteredIcons = computed(() => {
        if (!search.value) {
          return icons;
        }
        const lowercasedSearch = search.value.toLowerCase();
        return Object.fromEntries(
          Object.entries(icons).filter(([name]) => name.toLowerCase().includes(lowercasedSearch))
        );
      });

      return { args, icons, search, filteredIcons };
    },
    template: `
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
    </div>`,
  }),
};
