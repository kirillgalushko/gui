import { defineComponent as s, provide as n, computed as e, openBlock as i, createElementBlock as r, normalizeClass as d, renderSlot as c } from "vue";
import { a as l } from "./context-B9i5CnhF.js";
import { _ as m } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Attachment-CU60AKxk.css';const p = ["data-orientation", "data-size", "data-state", "aria-busy"], u = /* @__PURE__ */ s({
  __name: "Attachment",
  props: {
    orientation: { default: "horizontal" },
    size: { default: "medium" },
    state: { default: "done" },
    stretched: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a;
    return n(l, {
      orientation: e(() => t.orientation),
      size: e(() => t.size),
      state: e(() => t.state)
    }), (o, f) => (i(), r("div", {
      class: d([
        "attachment",
        t.size,
        t.orientation,
        { stretched: t.stretched }
      ]),
      "data-orientation": t.orientation,
      "data-size": t.size,
      "data-state": t.state,
      "aria-busy": t.state === "uploading" || t.state === "processing"
    }, [
      c(o.$slots, "default", {}, void 0, !0)
    ], 10, p));
  }
}), v = /* @__PURE__ */ m(u, [["__scopeId", "data-v-a7a7dd78"]]);
export {
  v as default
};
