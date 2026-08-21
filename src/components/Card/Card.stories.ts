import { Meta, StoryObj } from "@storybook/vue3";
import Text from "../Text/Text.vue";
import Button from "../Button/Button.vue";
import Gap from "../Gap/Gap.vue";
import AuroraBackground from "../AuroraBackground/AuroraBackground.vue";
import Card, { CardProps } from "./Card.vue";
import CardContent from "./CardContent.vue";
import CardFooter from "./CardFooter.vue";
import CardHeader from "./CardHeader.vue";
import { DefineComponent } from "vue";

type CardType = DefineComponent<CardProps>;

const meta = {
  title: "Components/Card",
  // @ts-expect-error Storybook cannot infer the discriminated card props from the SFC.
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    background: {
      control: { type: "select" },
      options: ["default", "secondary"],
    },
    blur: {
      control: { type: "boolean" },
      description:
        "Делает фон полупрозрачным и размывает содержимое под карточкой.",
    },
    stretched: {
      control: { type: "boolean" },
    },
    fullHeight: {
      control: { type: "boolean" },
    },
    interactive: {
      control: { type: "boolean" },
    },
    Element: {
      control: { type: "select" },
      options: ["div", "button"],
    },
    padding: {
      control: { type: "number" },
    },
    borderRadius: {
      control: { type: "number" },
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<CardType>;

export default meta;
type Story = StoryObj<CardType>;

const cardContent = `
  <Text typography="title-2">Notifications</Text>
  <Gap :size="1" direction="vertical" />
  <Text typography="paragraph-2" color="secondary">You have 3 unread messages</Text>
  <Gap :size="3" direction="vertical" />
  <Button mode="contrast">Mark as read</Button>
`;
const demoComponents = {
  AuroraBackground,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Gap,
  Text,
};
const demoArgs = {
  padding: 24,
  borderRadius: 20,
} as const;

export const DefaultCard: Story = {
  args: {
    background: "default",
    stretched: false,
    interactive: false,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `
    <Card v-bind="args">
      ${cardContent}
    </Card>`,
  }),
};

export const SecondaryCard: Story = {
  args: {
    background: "secondary",
    stretched: false,
    interactive: false,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `<Card v-bind="args">${cardContent}</Card>`,
  }),
};

export const BlurredCard: Story = {
  args: {
    background: "default",
    blur: true,
    stretched: true,
    interactive: false,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `
      <AuroraBackground :animated="false" intensity="strong" palette="ocean">
        <Card v-bind="args">${cardContent}</Card>
      </AuroraBackground>
    `,
  }),
};

export const InteractiveCard: Story = {
  args: {
    background: "default",
    stretched: false,
    interactive: true,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      const onClick = (event: MouseEvent) => {
        console.log("Card clicked", event);
      };
      return { args, onClick };
    },
    template: `<Card v-bind="args" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Text typography="paragraph-2" color="secondary">The whole card is clickable</Text>
    </Card>`,
  }),
};

export const InteractiveCardWithActions: Story = {
  args: {
    background: "default",
    Element: "div",
    stretched: false,
    interactive: true,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      const onClick = (event: MouseEvent) => {
        console.log("Card clicked", event);
      };
      return { args, onClick };
    },
    template: `<Card v-bind="args" role="button" tabindex="0" @click="onClick">
      <Text typography="title-2">Interactive Card</Text>
      <Gap :size="2" />
      <Button type="button">Action</Button>
    </Card>`,
  }),
};

export const StretchedCard: Story = {
  args: {
    background: "default",
    stretched: true,
    interactive: false,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `<Card v-bind="args">${cardContent}</Card>`,
  }),
};

export const FullHeightCard: Story = {
  args: {
    background: "default",
    fullHeight: true,
    interactive: false,
    stretched: true,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `<div style="height: 320px"><Card v-bind="args">${cardContent}</Card></div>`,
  }),
};

export const WithSections: Story = {
  args: {
    background: "default",
    stretched: true,
    interactive: false,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 560px">
        <Card v-bind="args">
          <CardHeader border>
            <Text typography="title-2">Terms of Service</Text>
            <Text typography="paragraph-2" color="secondary">
              Review the terms before accepting the agreement.
            </Text>
          </CardHeader>
          <CardContent border>
            <Text typography="paragraph-2">
              These terms govern your use of the workspace, including access to shared documents,
              project files, and collaboration tools.
            </Text>
          </CardContent>
          <CardContent>
            <Text typography="paragraph-2">
              You are responsible for the content you upload and for ensuring that your team has
              the appropriate permissions to view or edit it.
            </Text>
          </CardContent>
          <CardFooter style="justify-content: flex-end">
            <Button mode="default">Decline</Button>
            <Button mode="contrast">Accept</Button>
          </CardFooter>
        </Card>
      </div>
    `,
  }),
};
