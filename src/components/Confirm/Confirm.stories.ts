import { Meta, StoryObj } from '@storybook/vue3';
import Confirm from './Confirm.vue';
import { useConfirm } from './useConfirm'
import Button from '../Button/Button.vue' 
import { ref } from 'vue'

const meta: Meta<typeof Confirm> = {
  title: 'Example/Confirm',
  component: Confirm,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof Confirm>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Confirm, Button },
    setup() {
      const result = ref()
      const { confirm, ...confirmData } = useConfirm()

      const onClick = async () => {
        try {
          result.value = 'Ожидание результата...'
          await confirm({ title: 'Вы уверены?', description: 'Эти изменения нельзя будет отменить.' });
          result.value = 'Подтверждение'
        } catch (e) {
          result.value = 'Отмена'
        }
      }

      return { args, confirmData, onClick, result };
    },
    template: `
      <div>
        <Button @click="onClick">Открыть Confirm</Button>
        <div v-if="result">Результат: {{result}}</div>
        <Confirm v-bind="confirmData" />
      </div>
    `,
  }),
};
