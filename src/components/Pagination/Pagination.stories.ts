import type { Meta, StoryObj } from "@storybook/vue3";
import { computed, ref } from "vue";
import { useViewportBreakpoint } from "../../hooks/useViewportBreakpoint";
import Pagination from "./Pagination.vue";
import PaginationContent from "./PaginationContent.vue";
import PaginationEllipsis from "./PaginationEllipsis.vue";
import PaginationItem from "./PaginationItem.vue";
import PaginationLink from "./PaginationLink.vue";
import PaginationNext from "./PaginationNext.vue";
import PaginationPageSize from "./PaginationPageSize.vue";
import PaginationPrevious from "./PaginationPrevious.vue";
import PaginationSummary from "./PaginationSummary.vue";
import Stack from "../Stack/Stack.vue";

const components = {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPageSize,
  PaginationPrevious,
  PaginationSummary,
  Stack,
};

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    size: "medium",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["extra-small", "small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => ({
    components,
    setup: () => ({ args }),
    template: `
      <Pagination v-bind="args">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="?page=1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2" is-active>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="?page=3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    `,
  }),
};

export const Controlled: Story = {
  render: () => ({
    components,
    setup: () => {
      const page = ref(1);
      const pageCount = 5;

      return { page, pageCount };
    },
    template: `
      <Pagination label="Страницы результатов" size="small">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              Element="button"
              :disabled="page === 1"
              @click="page -= 1"
            />
          </PaginationItem>
          <PaginationItem v-for="item in pageCount" :key="item">
            <PaginationLink
              Element="button"
              :is-active="page === item"
              :aria-label="\`Страница \${item}\`"
              @click="page = item"
            >
              {{ item }}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              Element="button"
              :disabled="page === pageCount"
              @click="page += 1"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    `,
  }),
};

export const IconsOnly: Story = {
  render: () => ({
    components,
    template: `
      <Pagination label="Страницы таблицы">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious Element="button" text="" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext Element="button" text="" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    `,
  }),
};

export const TableMeta: Story = {
  render: () => ({
    components,
    setup: () => {
      const pageSize = ref(5);
      const breakpoint = useViewportBreakpoint();
      const isCompact = computed(() => breakpoint.isXS || breakpoint.isS);

      return { isCompact, pageSize };
    },
    template: `
      <Stack
        :direction="isCompact ? 'column' : 'row'"
        :gap="3"
        :align-items="isCompact ? 'start' : 'center'"
        justify-content="space-between"
        stretched
      >
        <PaginationPageSize
          :value="pageSize"
          :options="[5, 10]"
          mode="outline"
          @change="pageSize = $event"
        />
        <Stack
          :direction="isCompact ? 'column' : 'row'"
          :gap="3"
          :align-items="isCompact ? 'start' : 'center'"
          :stretched="isCompact"
        >
          <PaginationSummary :from="1" :to="pageSize" :total="22" />
          <Pagination size="small">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious Element="button" text="" disabled />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button" is-active>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext Element="button" text="" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Stack>
      </Stack>
    `,
  }),
};
