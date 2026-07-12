import { defineComponent as m, mergeModels as c, useModel as p, computed as f, provide as v, openBlock as d, createElementBlock as s, normalizeClass as _, renderSlot as h, Fragment as y, renderList as g, createCommentVNode as C } from "vue";
import { c as b } from "./useChipGroup-Lww9tudB.js";
import { _ as V } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ChipGroup-YbjYc2Dw.css';const k = ["role"], x = ["name", "value"], z = /* @__PURE__ */ m({
  __name: "ChipGroup",
  props: /* @__PURE__ */ c({
    mode: { default: "single" },
    size: { default: "medium" },
    disabled: { type: Boolean },
    name: {},
    stretched: { type: Boolean }
  }, {
    modelValue: {
      default: null
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(n) {
    const e = n, o = p(n, "modelValue"), r = f(() => e.mode === "multiple" ? Array.isArray(o.value) ? o.value : [] : o.value === null || Array.isArray(o.value) ? [] : [o.value]), a = (t) => r.value.includes(t), i = (t) => {
      if (!e.disabled) {
        if (e.mode === "multiple") {
          const u = a(t) ? r.value.filter((l) => l !== t) : [...r.value, t];
          o.value = u;
          return;
        }
        o.value = a(t) ? null : t;
      }
    };
    return v(b, {
      mode: e.mode,
      size: e.size,
      disabled: e.disabled,
      isSelected: a,
      select: i
    }), (t, u) => (d(), s("div", {
      class: _(["chip-group", { stretched: e.stretched }]),
      role: e.mode === "single" ? "radiogroup" : "group"
    }, [
      h(t.$slots, "default", {}, void 0, !0),
      e.name ? (d(!0), s(y, { key: 0 }, g(r.value, (l) => (d(), s("input", {
        key: l,
        type: "hidden",
        name: e.name,
        value: l
      }, null, 8, x))), 128)) : C("", !0)
    ], 10, k));
  }
}), M = /* @__PURE__ */ V(z, [["__scopeId", "data-v-b9e8c4f7"]]);
export {
  M as default
};
