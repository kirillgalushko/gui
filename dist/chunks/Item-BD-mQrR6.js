import { defineComponent as d, computed as s, openBlock as i, createElementBlock as n, normalizeClass as r, normalizeStyle as l, renderSlot as c } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Item-CeAihqoM.css';const m = /* @__PURE__ */ d({
  __name: "Item",
  props: {
    interactive: { type: Boolean, default: !1 },
    mode: { default: "card" },
    padding: {},
    size: { default: "medium" },
    stretched: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, a = s(() => e.padding === void 0 ? void 0 : { "--item-padding": `${e.padding}px` });
    return (o, f) => (i(), n("div", {
      class: r(["item", e.mode, e.size, { interactive: e.interactive, stretched: e.stretched }]),
      style: l(a.value)
    }, [
      c(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), v = /* @__PURE__ */ p(m, [["__scopeId", "data-v-c3a74768"]]);
export {
  v as default
};
