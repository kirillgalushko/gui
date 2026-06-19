import { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, onMounted, ref } from 'vue';

export default {
  title: '1. @gui/3. Цвета',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Colors: StoryObj = {
  name: 'Цвета',
  render: () => ({
    setup() {
      const colors = ref<{ name: string; value: string }[]>([]);

      onMounted(() => {
        const styles = getComputedStyle(document.documentElement);
        const result: { name: string; value: string }[] = [];

        for (let i = 0; i < styles.length; i++) {
          const key = styles[i];
          if (key.startsWith('--color-')) {
            result.push({
              name: key,
              value: styles.getPropertyValue(key).trim(),
            });
          }
        }
        result.sort((a, b) => a.name.localeCompare(b.name));
        colors.value = result;
      });

      return { colors };
    },

    template: `
      <div style="padding: 24px;">
        <h2 style="margin-bottom: 16px;">Color tokens</h2>

        <div style="display: grid; grid-template-columns: 1fr; gap: 8px;">
          <div
            v-for="c in colors"
            :key="c.name"
            style="
              display: grid;
              grid-template-columns: 240px 1fr 120px;
              align-items: center;
              gap: 12px;
              padding: 8px;
              border-bottom: 1px solid hsl(var(--border));
            "
          >
            <code style="font-size: 12px;">{{ c.name }}</code>

            <code style="font-size: 12px; opacity: 0.7;">
              {{ c.value }}
            </code>

            <div
              :style="{
                width: '100%',
                height: '24px',
                borderRadius: '6px',
                background: 'lab(' + c.value.replace('lab(', '').replace(')', '') + ')'
              }"
            />
          </div>
        </div>
      </div>
    `,
  }),
};