import { defineComponent as o, openBlock as d, createElementBlock as l, normalizeClass as a, renderSlot as i } from "vue";
import { _ as r } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldSet-NwsouvZb.css';const n = ["disabled"], c = /* @__PURE__ */ o({
  __name: "FieldSet",
  props: {
    disabled: { type: Boolean }
  },
  setup(s) {
    const e = s;
    return (t, p) => (d(), l("fieldset", {
      disabled: e.disabled,
      class: a(["field-set", { disabled: e.disabled }])
    }, [
      i(t.$slots, "default", {}, void 0, !0)
    ], 10, n));
  }
}), m = /* @__PURE__ */ r(c, [["__scopeId", "data-v-04f7e99f"]]);
export {
  m as default
};
