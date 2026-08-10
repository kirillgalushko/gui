import { defineComponent as a, computed as s, openBlock as l, createElementBlock as n, normalizeClass as i, normalizeStyle as r, renderSlot as c } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Item-CE47vlB_.css';const m = /* @__PURE__ */ a({
  __name: "Item",
  props: {
    interactive: { type: Boolean, default: !1 },
    mode: { default: "card" },
    padding: {},
    selected: { type: Boolean },
    size: { default: "medium" },
    stretched: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, d = s(
      () => e.padding === void 0 ? void 0 : { "--item-padding": `${e.padding}px` }
    );
    return (o, f) => (l(), n("div", {
      class: i([
        "item",
        e.mode,
        e.size,
        {
          interactive: e.interactive,
          selected: e.selected,
          stretched: e.stretched
        }
      ]),
      style: r(d.value)
    }, [
      c(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), v = /* @__PURE__ */ p(m, [["__scopeId", "data-v-83455dae"]]);
export {
  v as default
};
