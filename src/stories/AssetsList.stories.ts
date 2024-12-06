import { Meta, StoryObj } from '@storybook/vue3';
import * as logos from '@gui/logos'
import { computed, defineComponent, ref } from 'vue';
import Input from '../components/Input/Input.vue'
import Text from '../components/Text/Text.vue'

export default {
  title: '1. @gui/3. Ассеты/Логотипы',
  parameters: {
    layout: 'fullscreen',
  }
} as Meta;

export const AllLogos: StoryObj<typeof defineComponent<{}>> = {
  name: 'Поиск логотипа',
  args: {},
  render: (args) => ({
    components: { ...logos, Text, Input },
    setup() {
      const search = ref()
      const filteredlogos = computed(() => {
        if (!search.value) {
          return logos;
        }
        const lowercasedSearch = search.value.toLowerCase();
        return Object.fromEntries(
          Object.entries(logos).filter(([name]) => name.toLowerCase().includes(lowercasedSearch))
        );
      });

      return { args, logos, search, filteredlogos };
    },
    template: `
    <div style="margin: 32px;">
      <Input placeholder="Поиск" v-model="search" />
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; font-size: 32px; margin: 32px;"
    >
      <div v-for="(Logo, name) in filteredlogos" :key="name" style="display: flex; flex-direction: column; align-items: center; background: hsl(var(--secondary)); gap: 12px; border-radius: 6px; padding: 16px 8px; overflow: hidden">
        <component :is="Logo" height="1em" width="100%" />
        <Text typography="label-3" color="secondary" style="word-break: break-all; text-align: center;">{{ name }}</Text>
      </div>
    </div>`,
  }),
};
