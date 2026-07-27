import type { Meta, StoryObj } from "@storybook/vue3";
import {
  IconBellCheckOutline,
  IconBellExclamationOutline,
  IconCheckOutline,
  IconClockOutline,
  IconGitCompareOutline,
  IconGitForkOutline,
  IconGitMergeOutline,
  IconGitPullRequestOutline,
  IconXOutline,
} from "@gui/icons";
import Avatar from "../Avatar/Avatar.vue";
import Badge from "../Badge/Badge.vue";
import Card from "../Card/Card.vue";
import Item from "../Item/Item.vue";
import ItemContent from "../Item/ItemContent.vue";
import ItemDescription from "../Item/ItemDescription.vue";
import ItemTitle from "../Item/ItemTitle.vue";
import Stack from "../Stack/Stack.vue";
import Timeline from "./Timeline.vue";
import TimelineContent from "./TimelineContent.vue";
import TimelineDate from "./TimelineDate.vue";
import TimelineHeader from "./TimelineHeader.vue";
import TimelineIndicator from "./TimelineIndicator.vue";
import TimelineItem from "./TimelineItem.vue";
import TimelineSeparator from "./TimelineSeparator.vue";
import TimelineTitle from "./TimelineTitle.vue";

const timelineComponents = {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
};

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  args: {
    orientation: "vertical",
    direction: "reverse",
    datePosition: "top",
    railSize: "40px",
  },
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    direction: {
      control: { type: "select" },
      options: ["forward", "reverse"],
    },
    datePosition: {
      control: { type: "select" },
      options: ["top", "side"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: (args) => ({
    components: timelineComponents,
    setup: () => ({
      args,
      events: [
        {
          step: 1,
          datetime: "2024-07-15",
          date: "15 июля 2024",
          title: "Запущен проект",
          color: "red",
        },
        {
          step: 2,
          datetime: "2024-08-01",
          date: "1 августа 2024",
          title: "Собраны требования",
          color: "blue",
        },
        {
          step: 3,
          datetime: "2025-10-15",
          date: "15 октября 2025",
          title: "Начат этап дизайна",
          color: "fuchsia",
        },
        {
          step: 4,
          datetime: "2025-11-01",
          date: "1 ноября 2025",
          title: "Проведено UX-тестирование",
          color: "violet",
        },
        {
          step: 5,
          datetime: "2025-12-15",
          date: "15 декабря 2025",
          title: "Завершена бета-программа",
          color: "emerald",
        },
      ],
    }),
    template: `
      <Timeline v-bind="args">
        <TimelineItem v-for="event in events" :key="event.step" :step="event.step">
          <TimelineSeparator />
          <TimelineIndicator :color="event.color" size="small" />
          <TimelineDate :datetime="event.datetime">{{ event.date }}</TimelineDate>
          <TimelineHeader>
            <TimelineTitle>{{ event.title }}</TimelineTitle>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    `,
  }),
};

export const Horizontal: Story = {
  render: () => ({
    components: timelineComponents,
    template: `
      <Timeline orientation="horizontal" direction="forward" date-position="top" :active-step="2">
        <TimelineItem v-for="item in 3" :key="item" :step="item">
          <TimelineDate>{{ ['Неделя 1', 'Неделя 2', 'Неделя 4'][item - 1] }}</TimelineDate>
          <TimelineSeparator />
          <TimelineIndicator variant="outline" size="medium" />
          <TimelineHeader>
            <TimelineTitle>{{ ['Планирование', 'Дизайн', 'Разработка'][item - 1] }}</TimelineTitle>
          </TimelineHeader>
          <TimelineContent>
            {{ ['Объём и план ресурсов.', 'UI/UX и прототипирование.', 'Реализация ключевых функций.'][item - 1] }}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    `,
  }),
};

export const GitActivity: Story = {
  render: () => ({
    components: {
      ...timelineComponents,
      IconGitCompareOutline,
      IconGitForkOutline,
      IconGitMergeOutline,
      IconGitPullRequestOutline,
    },
    template: `
      <Timeline direction="reverse" :active-step="3">
        <TimelineItem :step="1">
          <TimelineSeparator />
          <TimelineIndicator variant="soft"><IconGitForkOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Создан форк репозитория</TimelineTitle></TimelineHeader>
          <TimelineContent>Создана ветка для разработки новой функции.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:00:00">15 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2">
          <TimelineSeparator />
          <TimelineIndicator variant="soft"><IconGitPullRequestOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Отправлен pull request</TimelineTitle></TimelineHeader>
          <TimelineContent>PR #342 ожидает code review.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:05:00">10 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3">
          <TimelineSeparator />
          <TimelineIndicator variant="solid"><IconGitCompareOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Сравнение веток</TimelineTitle></TimelineHeader>
          <TimelineContent>Получены замечания по обработке ошибок.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:10:00">5 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="4">
          <TimelineSeparator />
          <TimelineIndicator variant="outline"><IconGitMergeOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Слияние ожидается</TimelineTitle></TimelineHeader>
          <TimelineContent>Ветка будет объединена после проверок.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:15:00">Сейчас</TimelineDate>
        </TimelineItem>
      </Timeline>
    `,
  }),
};

export const StatusesAndSizes: Story = {
  render: () => ({
    components: {
      ...timelineComponents,
      Badge,
      IconCheckOutline,
      IconClockOutline,
      IconXOutline,
    },
    template: `
      <Timeline direction="forward" date-position="side" rail-size="48px">
        <TimelineItem :step="1" state="completed">
          <TimelineSeparator dashed />
          <TimelineIndicator mode="negative" size="32px"><IconXOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Preview deploy</TimelineTitle>
            <Badge mode="negative">failed</Badge>
          </TimelineHeader>
          <TimelineContent>i7j8k9l · feat/auth · 1m 12s</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:49:00">1 час назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2" state="completed">
          <TimelineSeparator />
          <TimelineIndicator mode="positive" size="large"><IconCheckOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Production deploy</TimelineTitle>
            <Badge mode="positive">success</Badge>
          </TimelineHeader>
          <TimelineContent>a1b2c3d · main · 42s</TimelineContent>
          <TimelineDate datetime="2026-07-27T13:47:00">2 минуты назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3" state="pending">
          <TimelineSeparator />
          <TimelineIndicator variant="outline" size="medium"><IconClockOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Повторный запуск</TimelineTitle>
            <Badge mode="secondary">pending</Badge>
          </TimelineHeader>
          <TimelineContent>Ожидает свободного runner.</TimelineContent>
          <TimelineDate datetime="2026-07-27T14:00:00">Запланировано на 14:00</TimelineDate>
        </TimelineItem>
      </Timeline>
    `,
  }),
};

export const PmsNotifications: Story = {
  render: () => ({
    components: {
      ...timelineComponents,
      Avatar,
      Badge,
      Card,
      IconBellCheckOutline,
      IconBellExclamationOutline,
      Item,
      ItemContent,
      ItemDescription,
      ItemTitle,
      Stack,
    },
    template: `
      <Timeline direction="reverse" rail-size="40px">
        <TimelineItem :step="1" state="completed">
          <TimelineSeparator />
          <TimelineIndicator variant="outline" mode="positive" size="medium">
            <IconBellCheckOutline />
          </TimelineIndicator>
          <TimelineHeader><TimelineTitle>Уборка завершена</TimelineTitle></TimelineHeader>
          <TimelineContent>Объект готов к следующему заселению.</TimelineContent>
          <TimelineDate datetime="2026-07-26T18:40:00">Вчера, 18:40</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2" state="completed">
          <TimelineSeparator />
          <TimelineIndicator variant="ghost" size="large">
            <Avatar name="Анна Смирнова" size="40px" color="violet" />
          </TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Гость подтвердил заезд</TimelineTitle>
            <Badge mode="positive">Бронь</Badge>
          </TimelineHeader>
          <TimelineContent>
            <Card stretched :padding="8">
              <Item mode="plain" size="small" stretched :padding="0">
                <ItemContent>
                  <ItemTitle>Апартаменты №24 · Анна Смирнова</ItemTitle>
                  <ItemDescription>Заезд сегодня в 15:00, 2 гостя</ItemDescription>
                </ItemContent>
              </Item>
            </Card>
          </TimelineContent>
          <TimelineDate datetime="2026-07-27T13:44:00">5 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3" state="current">
          <TimelineSeparator dashed />
          <TimelineIndicator variant="soft" mode="warning" size="large">
            <IconBellExclamationOutline />
          </TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Нужна проверка оплаты</TimelineTitle>
            <Badge mode="warning">Важно</Badge>
          </TimelineHeader>
          <TimelineContent>
            <Card stretched :padding="8">
              <Stack direction="column" :gap="1">
                <ItemTitle>Бронь #1048</ItemTitle>
                <ItemDescription>Платёж не подтверждён в течение 20 минут.</ItemDescription>
              </Stack>
            </Card>
          </TimelineContent>
          <TimelineDate datetime="2026-07-27T13:49:00">Сейчас</TimelineDate>
        </TimelineItem>
      </Timeline>
    `,
  }),
};
