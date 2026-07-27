import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Timeline from "./Timeline.vue";
import TimelineDate from "./TimelineDate.vue";
import TimelineIndicator from "./TimelineIndicator.vue";
import TimelineItem from "./TimelineItem.vue";
import TimelineSeparator from "./TimelineSeparator.vue";

const global = {
  components: {
    TimelineDate,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
  },
};

describe("Timeline", () => {
  it("exposes layout settings and list semantics", () => {
    const wrapper = mount(Timeline, {
      props: {
        orientation: "horizontal",
        direction: "reverse",
        datePosition: "side",
        railSize: "48px",
      },
      slots: {
        default: "<TimelineItem>Этап</TimelineItem>",
      },
      global,
    });

    expect(wrapper.attributes("role")).toBe("list");
    expect(wrapper.attributes("data-orientation")).toBe("horizontal");
    expect(wrapper.attributes("data-direction")).toBe("reverse");
    expect(wrapper.attributes("data-date-position")).toBe("side");
    expect(wrapper.attributes("style")).toContain("--timeline-rail-size: 48px");
    expect(
      wrapper.get('[role="listitem"]').attributes("data-orientation"),
    ).toBe("horizontal");
    expect(wrapper.get('[role="listitem"]').attributes("data-direction")).toBe(
      "reverse",
    );
  });

  it("infers progress states from numeric steps", () => {
    const wrapper = mount(Timeline, {
      props: { activeStep: 2 },
      slots: {
        default: `
          <TimelineItem :step="1">Готово</TimelineItem>
          <TimelineItem :step="2">Сейчас</TimelineItem>
          <TimelineItem :step="3">Позже</TimelineItem>
        `,
      },
      global,
    });

    expect(
      wrapper
        .findAll('[role="listitem"]')
        .map((item) => item.attributes("data-state")),
    ).toEqual(["completed", "current", "pending"]);
    expect(
      wrapper.findAll('[role="listitem"]')[1]?.attributes("aria-current"),
    ).toBe("step");
  });

  it("lets an item override its inferred state", () => {
    const wrapper = mount(Timeline, {
      props: { activeStep: 3 },
      slots: {
        default:
          '<TimelineItem :step="1" state="pending">Ожидание</TimelineItem>',
      },
      global,
    });

    expect(wrapper.get('[role="listitem"]').attributes("data-state")).toBe(
      "pending",
    );
  });

  it("supports custom indicator content, palette color and arbitrary size", () => {
    const wrapper = mount(Timeline, {
      slots: {
        default: `
          <TimelineItem>
            <TimelineIndicator variant="outline" size="52px" color="violet">
              <span class="custom-marker">A</span>
            </TimelineIndicator>
          </TimelineItem>
        `,
      },
      global,
    });

    const indicator = wrapper.get(".timeline-indicator");
    expect(indicator.classes()).toContain("outline");
    expect(indicator.attributes("style")).toContain(
      "--timeline-indicator-size: 52px",
    );
    expect(indicator.attributes("style")).toContain(
      "--timeline-indicator-color: var(--color-violet-500)",
    );
    expect(indicator.get(".custom-marker").text()).toBe("A");
  });

  it("renders semantic dates and decorative connectors", () => {
    const wrapper = mount(Timeline, {
      slots: {
        default: `
          <TimelineItem>
            <TimelineSeparator dashed />
            <TimelineDate datetime="2026-07-27">27 июля</TimelineDate>
          </TimelineItem>
        `,
      },
      global,
    });

    expect(wrapper.get("time").attributes("datetime")).toBe("2026-07-27");
    expect(wrapper.get(".timeline-separator").attributes("aria-hidden")).toBe(
      "true",
    );
    expect(wrapper.get(".timeline-separator").classes()).toContain("dashed");
    expect(wrapper.get(".timeline-separator").attributes("style")).toBe(
      undefined,
    );
  });
});
