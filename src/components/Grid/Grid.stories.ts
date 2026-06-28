import type { Meta, StoryObj } from '@storybook/vue3';

import GridColumn from './GridColumn.vue';
import GridLayout from './GridLayout.vue';
import GridRow from './GridRow.vue';

const meta: Meta<typeof GridLayout> = {
  title: 'Components/Grid',
  component: GridLayout,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['container', 'viewport'],
      description: 'Источник breakpoint: ширина GridLayout или ширина viewport.',
    },
    gutter: {
      control: 'text',
      description: 'Стабильный gutter между колонками.',
    },
    highlight: {
      control: 'boolean',
      description: 'Показывает полупрозрачную подсветку колонок.',
    },
    stretched: {
      control: 'boolean',
      description: 'Отключает максимальную ширину GridLayout.',
    },
  },
  args: {
    mode: 'container',
    gutter: 'var(--gap-4, 16px)',
    highlight: false,
    stretched: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'GridLayout создает content area и передает через provide/inject текущий breakpoint и количество колонок. GridRow строит CSS Grid внутри content area. GridColumn выбирает span по props xs/s/m/l/xl/xxl и при отсутствии значения использует ближайший меньший breakpoint.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const tileStyles = `
  min-height: 72px;
  border-radius: 6px;
  background: lightgrey;
  box-sizing: border-box;
  color: black;
`;

const nestedStyles = `
  background: red;
  opacity: 0.5;
  border-radius: 6px;
`

const renderDefaultGrid: Story['render'] = (args) => ({
  components: { GridLayout, GridRow, GridColumn },
  setup() {
    return { args, tileStyles };
  },
  template: `
    <GridLayout v-bind="args">
      <GridRow>
        <GridColumn :xs="4" :s="4" :m="6" :l="4" :xl="4" :xxl="4">
          <div :style="tileStyles">4 / 4 / 6 / 4 / 4 / 4</div>
        </GridColumn>
        <GridColumn :xs="4" :s="4" :m="6" :l="4" :xl="4" :xxl="4">
          <div :style="tileStyles">4 / 4 / 6 / 4 / 4 / 4</div>
        </GridColumn>
        <GridColumn :xs="4" :s="8" :m="12" :l="4" :xl="4" :xxl="4">
          <div :style="tileStyles">4 / 8 / 12 / 4 / 4 / 4</div>
        </GridColumn>
      </GridRow>
    </GridLayout>
  `,
});

export const Default: Story = {
  render: renderDefaultGrid,
};

export const Highlight: Story = {
  args: {
    highlight: true,
  },
  render: renderDefaultGrid,
};

export const WithSidebar: Story = {
  args: {
    highlight: true,
  },
  render: (args) => ({
    components: { GridLayout, GridRow, GridColumn },
    setup() {
      return { args, tileStyles };
    },
    template: `
      <div style="display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 16px;">
        <aside style="min-height: 100px; padding: 12px; border-radius: 6px; background: lightgrey; color: black;">
          Sidebar
        </aside>
        <GridLayout v-bind="args">
          <GridRow>
            <GridColumn :xs="4" :s="8" :m="8" :l="8" :xl="8" :xxl="8">
              <div :style="tileStyles">Content area</div>
            </GridColumn>
            <GridColumn :xs="4" :s="8" :m="4" :l="4" :xl="4" :xxl="4">
              <div :style="tileStyles">Aside content</div>
            </GridColumn>
          </GridRow>
        </GridLayout>
      </div>
    `,
  }),
};

export const Nested: Story = {
  args: {
    highlight: true,
  },
  render: (args) => ({
    components: { GridLayout, GridRow, GridColumn },
    setup() {
      return { args, tileStyles, nestedStyles };
    },
    template: `
      <GridLayout v-bind="args">
        <GridRow>
          <GridColumn :xs="4" :s="4" :m="6">
            <div :style="tileStyles">
              <GridLayout highlight">
                <GridRow>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                  <GridColumn :xs="2" :s="4" :m="4" :l="4" :xl="4" :xxl="4">
                    <div :style="nestedStyles">Nested</div>
                  </GridColumn>
                </GridRow>
              </GridLayout>
            </div>
          </GridColumn>
          <GridColumn :xs="4" :s="4" :m="6">
            <div :style="tileStyles">Sibling</div>
          </GridColumn>
        </GridRow>
      </GridLayout>
    `,
  }),
};
