import { Meta, StoryObj } from "@storybook/vue3";
import { toast } from "vue-sonner";
import Button from "../Button/Button.vue";
import Gap from "../Gap/Gap.vue";
import Toaster from "./Toaster.vue";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toaster",
  component: Toaster,
  tags: ["!autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "top-center",
        "bottom-center",
      ],
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark", "system"],
    },
  },
  args: {
    position: "bottom-center",
    theme: "system",
    closeButton: true,
    richColors: true,
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Button, Gap, Toaster },
    setup() {
      const showDefault = () => {
        toast("Заявка обновлена", {
          description: "Изменения сохранены в системе",
        });
      };

      const showSuccess = () => {
        toast.success("Оплата прошла", {
          description: "Чек отправлен клиенту",
        });
      };

      const showError = () => {
        toast.error("Не удалось сохранить", {
          description: "Проверьте соединение и повторите попытку",
          action: {
            label: "Повторить",
            onClick: () => toast.info("Повторная отправка"),
          },
        });
      };

      return { args, showDefault, showSuccess, showError };
    },
    template: `
      <Gap>
        <Button @click="showDefault">Default</Button>
        <Button mode="accent" @click="showSuccess">Success</Button>
        <Button mode="negative" @click="showError">Error</Button>
      </Gap>
      <Toaster v-bind="args" />
    `,
  }),
};
