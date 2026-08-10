import { defineComponent as o, openBlock as r, createElementBlock as s, normalizeClass as n, renderSlot as p } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/EmptyMedia-BhnAD-g4.css';const m = /* @__PURE__ */ o({
  __name: "EmptyMedia",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    const t = e;
    return (a, c) => (r(), s("div", {
      class: n(["empty-media", t.variant])
    }, [
      p(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _ = /* @__PURE__ */ d(m, [["__scopeId", "data-v-99988e66"]]);
export {
  _ as default
};
