import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Accordion from "./Accordion.vue";
import AccordionContent from "./AccordionContent.vue";
import AccordionItem from "./AccordionItem.vue";
import AccordionTrigger from "./AccordionTrigger.vue";

const createAccordion = (props: Record<string, unknown> = {}) =>
  mount(Accordion, {
    props,
    slots: {
      default: `
        <AccordionItem value="first">
          <AccordionTrigger>Первый</AccordionTrigger>
          <AccordionContent>Первый текст</AccordionContent>
        </AccordionItem>
        <AccordionItem value="second">
          <AccordionTrigger>Второй</AccordionTrigger>
          <AccordionContent>Второй текст</AccordionContent>
        </AccordionItem>
      `,
    },
    global: {
      components: {
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
      },
    },
  });

describe("Accordion", () => {
  it("opens one item at a time by default", async () => {
    const wrapper = createAccordion({ defaultValue: ["first"] });
    const triggers = wrapper.findAll("button");

    expect(triggers[0]?.attributes("aria-expanded")).toBe("true");
    await triggers[1]?.trigger("click");

    expect(triggers[0]?.attributes("aria-expanded")).toBe("false");
    expect(triggers[1]?.attributes("aria-expanded")).toBe("true");
  });

  it("keeps several items open in multiple mode", async () => {
    const wrapper = createAccordion({
      defaultValue: ["first"],
      multiple: true,
    });
    const triggers = wrapper.findAll("button");

    await triggers[1]?.trigger("click");

    expect(triggers[0]?.attributes("aria-expanded")).toBe("true");
    expect(triggers[1]?.attributes("aria-expanded")).toBe("true");
    expect(wrapper.emitted("update:modelValue")?.slice(-1)[0]).toEqual([
      ["first", "second"],
    ]);
  });

  it("does not toggle when disabled", async () => {
    const wrapper = createAccordion({ disabled: true });
    const trigger = wrapper.get("button");

    expect(trigger.attributes("disabled")).toBeDefined();
    await trigger.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});
