import { Meta, StoryObj } from '@storybook/vue3';
import * as logos from '@gui/logos'
import * as soundEffects from '@gui/sound'
import { IconPlayerPlayFilled, IconPlayerStopFilled } from '@gui/icons'
import { computed, defineComponent, ref, reactive } from 'vue';
import Button from '../components/Button/Button.vue'
import Input from '../components/Input/Input.vue'
import Text from '../components/Text/Text.vue'

export default {
  title: '1. @gui/3. Ассеты',
  parameters: {
    layout: 'fullscreen',
  }
} as Meta;

export const AllLogos: StoryObj<typeof defineComponent<{}>> = {
  name: 'Логотипы',
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

type SoundEffect = {
  play: (options?: { force?: boolean }) => Promise<number | null>
  stop: () => Promise<void>
}

export const AllSoundEffects: StoryObj<typeof defineComponent<{}>> = {
  name: 'Звуковые эффекты',
  args: {},
  render: (args) => ({
    components: {
      Button,
      Input,
      IconPlayerPlayFilled,
      IconPlayerStopFilled,
    },
    setup() {
      const search = ref('')
      const isPlaying = reactive<Record<string, boolean>>({})
      const filteredSoundEffects = computed(() => {
        if (!search.value) {
          return soundEffects
        }
        const q = search.value.toLowerCase()
        return Object.fromEntries(
          Object.entries(soundEffects).filter(([name]) =>
            name.toLowerCase().includes(q)
          )
        )
      })
      const toggleSound = async (name: string, soundEffect: SoundEffect) => {
        if (isPlaying[name]) {
          await soundEffect.stop()
          isPlaying[name] = false
          return
        }
        await soundEffect.play({ force: true })
        isPlaying[name] = true
      }
      return {
        args,
        search,
        filteredSoundEffects,
        isPlaying,
        toggleSound,
      }
    },
    template: `
      <div style="margin: 32px;">
        <Input placeholder="Поиск" v-model="search" />
      </div>
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 16px;
          margin: 32px;
        "
      >
        <div
          v-for="(soundEffect, name) in filteredSoundEffects"
          :key="name"
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border: 1px solid hsl(var(--border));
            border-radius: 8px;
            padding: 12px;
          "
        >
          <div style="font-weight: 600;">{{ name }}</div>
          <Button @click="toggleSound(name, soundEffect)">
            <IconPlayerStopFilled v-if="isPlaying[name]" />
            <IconPlayerPlayFilled v-else />
          </Button>
        </div>
      </div>
    `,
  }),
}