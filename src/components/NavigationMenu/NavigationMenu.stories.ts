import type { Meta, StoryObj } from "@storybook/vue3";
import NavigationMenu from "./NavigationMenu.vue";
import NavigationMenuContent from "./NavigationMenuContent.vue";
import NavigationMenuIndicator from "./NavigationMenuIndicator.vue";
import NavigationMenuItem from "./NavigationMenuItem.vue";
import NavigationMenuLink from "./NavigationMenuLink.vue";
import NavigationMenuList from "./NavigationMenuList.vue";
import NavigationMenuTrigger from "./NavigationMenuTrigger.vue";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  args: {
    openOnHover: true,
    orientation: "horizontal",
  },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: (args) => ({
    components: {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuIndicator,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
    },
    setup: () => ({ args }),
    template: `
      <NavigationMenu v-bind="args">
        <NavigationMenuList>
          <NavigationMenuItem value="product">
            <NavigationMenuTrigger>Продукт</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#calendar">Календарь</NavigationMenuLink>
              <NavigationMenuLink href="#bookings">Бронирования</NavigationMenuLink>
            </NavigationMenuContent>
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
    `,
  }),
};

export const Vertical: Story = {
  ...Default,
  args: {
    orientation: "vertical",
  },
};
