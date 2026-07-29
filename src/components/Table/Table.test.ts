import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Table from "./Table.vue";
import TableCell from "./TableCell.vue";
import TableHead from "./TableHead.vue";

describe("Table", () => {
  it("supports a vertically scrollable table with a sticky header", () => {
    const wrapper = mount(Table, {
      props: { maxHeight: 420, stickyHeader: true },
      slots: { default: "Содержимое" },
    });

    expect(wrapper.classes()).toContain("sticky-header");
    expect(wrapper.attributes("style")).toContain("max-height: 420px");
    expect(wrapper.find("table").attributes("style")).toContain(
      "min-width: 640px",
    );
  });

  it("allows compact tables to override the default minimum width", () => {
    const wrapper = mount(Table, {
      props: { minWidth: 0 },
    });

    expect(wrapper.find("table").attributes("style")).toContain(
      "min-width: 0px",
    );
  });

  it("accepts CSS max-height values without enabling the sticky header", () => {
    const wrapper = mount(Table, {
      props: { maxHeight: "50vh" },
    });

    expect(wrapper.classes()).not.toContain("sticky-header");
    expect(wrapper.attributes("style")).toContain("max-height: 50vh");
  });

  it("applies column width constraints to headers and cells", () => {
    const head = mount(TableHead, {
      props: { width: "1", maxWidth: "120px" },
    });
    const cell = mount(TableCell, {
      props: { width: "100%", minWidth: 160 },
    });

    expect(head.attributes("style")).toContain("width: 1px");
    expect(head.attributes("style")).toContain("max-width: 120px");
    expect(cell.attributes("style")).toContain("width: 100%");
    expect(cell.attributes("style")).toContain("min-width: 160px");
  });
});
