import { defineComponent as r, inject as s, computed as d, provide as l, openBlock as p, createElementBlock as u, normalizeClass as c, unref as a, renderSlot as m } from "vue";
import { t as f, a as v } from "./types-GWw4JXek.js";
import { _ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/TimelineItem-IrCt-sFj.css';const I = ["data-orientation", "data-direction", "data-date-position", "data-state", "data-step", "aria-current"], b = /* @__PURE__ */ r({
  __name: "TimelineItem",
  props: {
    step: {},
    state: {}
  },
  setup(o) {
    const t = o, e = s(f);
    if (!e)
      throw new Error("TimelineItem must be used inside Timeline");
    const n = d(() => {
      if (t.state)
        return t.state;
      const i = e.activeStep.value;
      return i === void 0 || t.step === void 0 ? "default" : t.step === i ? "current" : typeof t.step == "number" && typeof i == "number" ? t.step < i ? "completed" : "pending" : "default";
    });
    return l(v, { state: n }), (i, x) => (p(), u("div", {
      class: c([
        "timeline-item",
        a(e).orientation.value,
        a(e).direction.value,
        `date-${a(e).datePosition.value}`
      ]),
      "data-orientation": a(e).orientation.value,
      "data-direction": a(e).direction.value,
      "data-date-position": a(e).datePosition.value,
      "data-state": n.value,
      "data-step": t.step,
      "aria-current": n.value === "current" ? "step" : void 0,
      role: "listitem"
    }, [
      m(i.$slots, "default", {}, void 0, !0)
    ], 10, I));
  }
}), h = /* @__PURE__ */ _(b, [["__scopeId", "data-v-eb9ce8fd"]]);
export {
  h as default
};
