import { defineComponent as m, inject as p, computed as t, openBlock as f, createElementBlock as _, normalizeClass as h, createElementVNode as b, renderSlot as C } from "vue";
import { c as k } from "./useChipGroup-Lww9tudB.js";
import { _ as z } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Chip-BsPjt67G.css';const y = ["disabled", "role", "aria-checked", "aria-pressed"], B = { class: "chip-label" }, x = /* @__PURE__ */ m({
  __name: "Chip",
  props: {
    value: {},
    size: { default: "medium" },
    selected: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["select"],
  setup(c, { emit: d }) {
    const s = c, n = d, e = p(k, null), l = t(() => s.disabled || (e == null ? void 0 : e.disabled) || !1), r = t(() => (e == null ? void 0 : e.size) ?? s.size), a = t(() => !!e && s.value !== void 0), i = t(() => a.value ? (e == null ? void 0 : e.isSelected(s.value)) ?? !1 : !!s.selected), o = t(() => {
      if (a.value)
        return (e == null ? void 0 : e.mode) === "single" ? "radio" : void 0;
    }), u = () => {
      l.value || (a.value && (e == null || e.select(s.value)), n("select", s.value));
    };
    return (v, S) => (f(), _("button", {
      type: "button",
      class: h(["chip", r.value, { selected: i.value, disabled: l.value }]),
      disabled: l.value,
      role: o.value,
      "aria-checked": o.value === "radio" ? i.value : void 0,
      "aria-pressed": o.value ? void 0 : i.value,
      onClick: u
    }, [
      b("span", B, [
        C(v.$slots, "default", {}, void 0, !0)
      ])
    ], 10, y));
  }
}), j = /* @__PURE__ */ z(x, [["__scopeId", "data-v-b1d2993e"]]);
export {
  j as default
};
