import type { Meta, StoryObj } from "@storybook/vue3";
import Badge from "../Badge/Badge.vue";
import Button from "../Button/Button.vue";
import Card from "../Card/Card.vue";
import ScrollArea from "../ScrollArea/ScrollArea.vue";
import Stack from "../Stack/Stack.vue";
import Text from "../Text/Text.vue";
import OnboardingTour from "./OnboardingTour.vue";
import { useOnboardingTour } from "./useOnboardingTour";
import type { OnboardingTourStep } from "./types";

const meta: Meta<typeof OnboardingTour> = {
  title: "Components/OnboardingTour",
  component: OnboardingTour,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof OnboardingTour>;

export const ThreeCards: Story = {
  render: () => ({
    components: {
      Badge,
      Button,
      Card,
      OnboardingTour,
      ScrollArea,
      Stack,
      Text,
    },
    setup() {
      const steps: OnboardingTourStep[] = [
        {
          id: "calendar",
          target: "[data-onboarding='calendar']",
          title: "Планируйте загрузку",
          description:
            "Карточка календаря остаётся настоящей и интерактивной во время подсказки.",
          placement: "bottom-start",
          actionLabel: "Понятно, дальше",
        },
        {
          id: "guests",
          target: "[data-onboarding='guests']",
          title: "Следите за гостями",
          description:
            "Позиция подсказки автоматически изменится, если справа окажется мало места.",
          placement: "right",
        },
        {
          id: "automation",
          target: "[data-onboarding='automation']",
          title: "Автоматизируйте рутину",
          description:
            "ScrollArea сам прокрутится до этой карточки, а spotlight продолжит следовать за ней.",
          placement: "top-end",
          actionLabel: "Начать работу",
        },
      ];
      const { open, step, start } = useOnboardingTour({ steps });

      return { open, step, start, steps };
    },
    template: `
      <Stack direction="column" :gap="4" stretched>
        <Card :padding="16" :border-radius="16" stretched>
          <Stack direction="row" :gap="4" align-items="center" justify-content="space-between" stretched wrap>
            <Stack direction="column" :gap="1">
              <Text typography="title-3">Рабочее пространство</Text>
              <Text typography="paragraph-1" color="secondary">
                Изменяйте ширину окна и прокручивайте список во время тура.
              </Text>
            </Stack>
            <Button mode="contrast" @click="start(0)">Запустить онбординг</Button>
          </Stack>
        </Card>

        <ScrollArea :max-height="380" aria-label="Возможности сервиса">
          <Stack direction="column" :gap="6" stretched>
            <Card data-onboarding="calendar" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Календарь заселений</Text>
                  <Badge mode="positive">12 броней</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Проверяйте свободные даты и управляйте загрузкой объектов.
                </Text>
                <Button mode="outline">Открыть календарь</Button>
              </Stack>
            </Card>

            <Card data-onboarding="guests" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Гости</Text>
                  <Badge mode="secondary">4 новых</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Храните контакты, историю визитов и важные пожелания гостей.
                </Text>
                <Button mode="outline">Посмотреть гостей</Button>
              </Stack>
            </Card>

            <Card data-onboarding="automation" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Автоматизация</Text>
                  <Badge mode="accent">Новое</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Настройте сообщения, напоминания и действия после бронирования.
                </Text>
                <Button mode="outline">Настроить сценарии</Button>
              </Stack>
            </Card>
          </Stack>
        </ScrollArea>

        <OnboardingTour
          v-model:open="open"
          v-model:step="step"
          :steps="steps"
          missing-target-behavior="skip"
        />
      </Stack>
    `,
  }),
};
