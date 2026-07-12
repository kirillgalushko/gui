import { defineComponent as t, openBlock as o, createElementBlock as l, normalizeClass as a, renderSlot as i } from "vue";
import { _ as r } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldSet-Cng1FgZe.css';const n = ["disabled"], c = /* @__PURE__ */ t({
  __name: "FieldSet",
  props: {
    disabled: { type: Boolean }
  },
  setup(s) {
    const e = s;
    return (d, p) => (o(), l("fieldset", {
      disabled: e.disabled,
      class: a(["field-set", { disabled: e.disabled }])
    }, [
      i(d.$slots, "default", {}, void 0, !0)
    ], 10, n));
  }
}), m = /* @__PURE__ */ r(c, [["__scopeId", "data-v-d118fc3d"]]);
export {
  m as default
};
