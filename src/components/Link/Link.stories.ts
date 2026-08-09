import { Meta, StoryObj } from "@storybook/vue3";
import { IconExternalLinkOutline, IconHomeOutline } from "@gui/icons";
import Link from "./Link.vue";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    inline: {
      type: "boolean",
    },
    wrap: {
      type: "boolean",
    },
    underlined: {
      type: "boolean",
    },
    underlineOnHover: {
      type: "boolean",
    },
    asChild: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    enableVisited: {
      type: "boolean",
    },
    mode: {
      control: "select",
      options: ["inherit", "accent"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: '<Link v-bind="args">Открыть ссылку</Link>',
  }),
};

export const WithIcons: Story = {
  args: {
    href: "#",
    underlined: true,
  },
  render: (args) => ({
    components: { Link, IconExternalLinkOutline, IconHomeOutline },
    setup() {
      return { args };
    },
    template: `
      <Link v-bind="args">
        <template #iconLeft>
          <IconHomeOutline />
        </template>
        Открыть раздел
        <template #iconRight>
          <IconExternalLinkOutline />
        </template>
      </Link>
    `,
  }),
};

export const Inline: Story = {
  args: {
    href: "#",
    inline: true,
    typography: "inherit",
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: `
      <p>
        Текст до ссылки <Link v-bind="args">inline-ссылка</Link> и текст после нее.
      </p>
    `,
  }),
};

export const Wrapping: Story = {
  args: {
    href: "#",
    mode: "inherit",
    wrap: true,
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 220px">
        <Link v-bind="args">
          Публичная оферта и Пользовательское соглашение
        </Link>
      </div>
    `,
  }),
};

export const InheritColor: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div style="color: var(--color-emerald-500); display: flex; gap: var(--gap-4)">
        <Link mode="inherit" href="#">Обычная</Link>
        <Link mode="inherit" href="#" enable-visited>Посещённая</Link>
        <Link mode="inherit" href="#" disabled>Недоступная</Link>
      </div>
    `,
  }),
};

export const AsButton: Story = {
  render: () => ({
    components: { Link },
    template: `
      <Link as-child underline-on-hover>
        <button type="button">Ссылка без href</button>
      </Link>
    `,
  }),
};
