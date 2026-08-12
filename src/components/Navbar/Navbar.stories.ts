import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "../Button/Button.vue";
import NavigationMenu from "../NavigationMenu/NavigationMenu.vue";
import NavigationMenuIndicator from "../NavigationMenu/NavigationMenuIndicator.vue";
import NavigationMenuItem from "../NavigationMenu/NavigationMenuItem.vue";
import NavigationMenuLink from "../NavigationMenu/NavigationMenuLink.vue";
import NavigationMenuList from "../NavigationMenu/NavigationMenuList.vue";
import Navbar from "./Navbar.vue";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  args: {
    blur: false,
    mode: "default",
    sticky: false,
    stretched: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const renderNavbar = (args: Record<string, unknown>) => ({
  components: {
    Button,
    Navbar,
    NavigationMenu,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  },
  setup: () => ({ args }),
  template: `
    <Navbar v-bind="args">
      <template #left><strong>Navbar</strong></template>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem value="product">
            <NavigationMenuLink href="#product">Продукт</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem value="features">
            <NavigationMenuLink href="#features">Возможности</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem value="pricing">
            <NavigationMenuLink href="#pricing">Тарифы</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
      <template #actions>
        <Button mode="ghost">Войти</Button>
        <Button mode="contrast">Начать</Button>
      </template>
    </Navbar>
  `,
});

export const Default: Story = {
  render: renderNavbar,
};

export const Floating: Story = {
  args: {
    mode: "floating",
  },
  render: renderNavbar,
};

export const Blurred: Story = {
  args: {
    blur: true,
    mode: "floating",
  },
  render: renderNavbar,
};

export const Mobile: Story = {
  args: {
    mode: "floating",
  },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  render: renderNavbar,
};

export const MobileDropdown: Story = {
  args: {
    mode: "floating",
    mobileMenuVariant: "dropdown",
  },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  render: renderNavbar,
};

export const CustomMobileContent: Story = {
  args: {
    mode: "floating",
  },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  render: (args) => ({
    components: { Button, Navbar },
    setup: () => ({ args }),
    template: `
      <Navbar v-bind="args">
        <template #left><strong>Navbar</strong></template>
        <template #mobile>
          <Button stretched>Отдельное мобильное действие</Button>
        </template>
      </Navbar>
    `,
  }),
};
