import type { Meta, StoryObj } from "@storybook/vue3";
import {
  IconFileOutline,
  IconLoader2Outline,
  IconTrashOutline,
  IconUploadOutline,
  IconXOutline,
} from "@gui/icons";
import Button from "../Button/Button.vue";
import Attachment from "./Attachment.vue";
import AttachmentAction from "./AttachmentAction.vue";
import AttachmentActions from "./AttachmentActions.vue";
import AttachmentContent from "./AttachmentContent.vue";
import AttachmentDescription from "./AttachmentDescription.vue";
import AttachmentGroup from "./AttachmentGroup.vue";
import AttachmentMedia from "./AttachmentMedia.vue";
import AttachmentTitle from "./AttachmentTitle.vue";

const meta: Meta<typeof Attachment> = {
  title: "Components/Attachment",
  component: Attachment,
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
    size: "medium",
    state: "done",
    stretched: true,
  },
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small", "extra-small"],
    },
    state: {
      control: { type: "select" },
      options: ["idle", "uploading", "processing", "error", "done"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Attachment>;

export const Default: Story = {
  render: (args) => ({
    components: {
      Attachment,
      AttachmentAction,
      AttachmentActions,
      AttachmentContent,
      AttachmentDescription,
      AttachmentMedia,
      AttachmentTitle,
      IconFileOutline,
      IconLoader2Outline,
      IconXOutline,
    },
    setup: () => ({ args }),
    template: `
      <Attachment v-bind="args">
        <AttachmentMedia>
          <IconLoader2Outline v-if="args.state === 'uploading' || args.state === 'processing'" />
          <IconFileOutline v-else />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
          <AttachmentDescription>
            {{ args.state === "error" ? "Не удалось загрузить" : "PDF · 1.2 МБ" }}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Удалить файл"><IconXOutline /></AttachmentAction>
        </AttachmentActions>
      </Attachment>
    `,
  }),
};

export const Gallery: Story = {
  render: () => ({
    components: {
      Attachment,
      AttachmentContent,
      AttachmentDescription,
      AttachmentGroup,
      AttachmentMedia,
      AttachmentTitle,
    },
    template: `
      <AttachmentGroup orientation="horizontal">
        <Attachment v-for="index in 3" :key="index" orientation="vertical">
          <AttachmentMedia variant="image">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600" alt="" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>office-reference-{{ index }}.jpg</AttachmentTitle>
            <AttachmentDescription>JPG · 940 КБ</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      </AttachmentGroup>
    `,
  }),
};

export const ConstrainedLongName: Story = {
  render: () => ({
    components: {
      Attachment,
      AttachmentAction,
      AttachmentActions,
      AttachmentContent,
      AttachmentDescription,
      AttachmentGroup,
      AttachmentMedia,
      AttachmentTitle,
      Button,
      IconFileOutline,
      IconTrashOutline,
      IconUploadOutline,
    },
    template: `
      <div style="display: flex; width: 320px; min-width: 0; flex-direction: column;">
        <AttachmentGroup>
          <Attachment stretched size="small">
            <AttachmentMedia><IconFileOutline /></AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>0586g12000sq8dto52F8B_W_600_0_R5-extremely-long-name.webp</AttachmentTitle>
              <AttachmentDescription>Загружен · 52 КБ</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <Button mode="ghost" size="extra-small"><IconUploadOutline />Заменить</Button>
              <AttachmentAction mode="negative" aria-label="Удалить"><IconTrashOutline /></AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </AttachmentGroup>
      </div>
    `,
  }),
};
