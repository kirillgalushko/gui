import { Meta, StoryObj } from '@storybook/vue3';
import Field from './Field.vue';
import FieldContent from './FieldContent.vue';
import FieldLabel from './FieldLabel.vue';
import FieldHelper from '../FieldHelper/FieldHelper.vue';
import Input from '../Input/Input.vue';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    invalid: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => ({
    components: { Field, FieldContent, FieldLabel, FieldHelper, Input },
    setup() {
      return { args };
    },
    template: `
      <Field v-bind="args">
        <FieldLabel html-for="field-email">Email</FieldLabel>
        <FieldContent>
          <Input id="field-email" placeholder="name@example.com" />
          <FieldHelper description="Используется для входа и уведомлений" />
        </FieldContent>
      </Field>
    `,
  }),
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
  render: (args) => ({
    components: { Field, FieldContent, FieldLabel, FieldHelper, Input },
    setup() {
      return { args };
    },
    template: `
      <Field v-bind="args">
        <FieldLabel html-for="field-inn">ИНН</FieldLabel>
        <FieldContent>
          <Input id="field-inn" invalid />
          <FieldHelper error-message="Введите корректный ИНН" invalid />
        </FieldContent>
      </Field>
    `,
  }),
};
