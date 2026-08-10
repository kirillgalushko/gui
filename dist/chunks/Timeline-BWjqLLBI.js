import { defineComponent as n, computed as e, provide as r, openBlock as d, createElementBlock as s, normalizeClass as l, normalizeStyle as c, renderSlot as p } from "vue";
import { t as m } from "./types-GWw4JXek.js";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Timeline-PAP3YzTb.css';const u = ["data-orientation", "data-direction", "data-date-position"], _ = /* @__PURE__ */ n({
  __name: "Timeline",
  props: {
    orientation: { default: "vertical" },
    direction: { default: "forward" },
    datePosition: { default: "top" },
    activeStep: {},
    railSize: { default: "40px" }
  },
  setup(i) {
    const t = i, o = e(() => ({
      "--timeline-rail-size": t.railSize
    }));
    return r(m, {
      orientation: e(() => t.orientation),
      direction: e(() => t.direction),
      datePosition: e(() => t.datePosition),
      activeStep: e(() => t.activeStep)
    }), (a, v) => (d(), s("div", {
      class: l(["timeline", t.orientation, t.direction]),
      style: c(o.value),
      "data-orientation": t.orientation,
      "data-direction": t.direction,
      "data-date-position": t.datePosition,
      role: "list"
    }, [
      p(a.$slots, "default", {}, void 0, !0)
    ], 14, u));
  }
}), y = /* @__PURE__ */ f(_, [["__scopeId", "data-v-503eae87"]]);
export {
  y as default
};
