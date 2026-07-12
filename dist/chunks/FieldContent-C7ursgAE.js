import { defineComponent as n, openBlock as r, createElementBlock as s, normalizeClass as a, renderSlot as l } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldContent-DvirOMbQ.css';const c = /* @__PURE__ */ n({
  __name: "FieldContent",
  props: {
    align: { default: "start" }
  },
  setup(e) {
    const t = e;
    return (o, i) => (r(), s("div", {
      class: a(["field-content", t.align])
    }, [
      l(o.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _ = /* @__PURE__ */ d(c, [["__scopeId", "data-v-0f02ebdd"]]);
export {
  _ as default
};
