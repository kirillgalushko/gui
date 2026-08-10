import { defineComponent as i, computed as o, provide as l, openBlock as s, createElementBlock as n, normalizeClass as r, renderSlot as c } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Field-5iDi1QdR.css';const v = ["data-invalid", "data-disabled"], f = /* @__PURE__ */ i({
  __name: "Field",
  props: {
    invalid: { type: Boolean },
    disabled: { type: Boolean },
    orientation: { default: "vertical" },
    stretched: { type: Boolean, default: !1 }
  },
  setup(d) {
    const e = d, a = o(() => ({
      invalid: !!e.invalid,
      disabled: !!e.disabled
    }));
    return l("field-state", a), (t, _) => (s(), n("div", {
      class: r([
        "field",
        e.orientation,
        {
          invalid: e.invalid,
          disabled: e.disabled,
          stretched: e.stretched
        }
      ]),
      "data-invalid": e.invalid || void 0,
      "data-disabled": e.disabled || void 0
    }, [
      c(t.$slots, "default", {}, void 0, !0)
    ], 10, v));
  }
}), b = /* @__PURE__ */ p(f, [["__scopeId", "data-v-562034c3"]]);
export {
  b as default
};
