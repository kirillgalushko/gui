import { defineComponent as r, openBlock as s, createElementBlock as a, normalizeClass as p, renderSlot as l } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ItemGroup-C3D-DUQh.css';const d = /* @__PURE__ */ r({
  __name: "ItemGroup",
  props: {
    separated: { type: Boolean, default: !0 },
    stretched: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t;
    return (o, n) => (s(), a("div", {
      class: p([
        "item-group",
        { separated: e.separated, stretched: e.stretched }
      ]),
      role: "list"
    }, [
      l(o.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), f = /* @__PURE__ */ c(d, [["__scopeId", "data-v-3b627ce2"]]);
export {
  f as default
};
