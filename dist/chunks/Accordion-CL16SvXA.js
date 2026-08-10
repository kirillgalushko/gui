import { defineComponent as f, ref as m, computed as n, provide as v, openBlock as _, createElementBlock as V, renderSlot as b } from "vue";
import { a as g } from "./context-CkNm3Ou9.js";
import { _ as h } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Accordion-BKU3-DwZ.css';const B = { class: "accordion" }, y = /* @__PURE__ */ f({
  __name: "Accordion",
  props: {
    defaultValue: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: void 0 },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue"],
  setup(s, { emit: c }) {
    const o = s, a = c, d = m([...o.defaultValue]), l = n(() => o.modelValue ?? d.value), u = (e) => {
      o.modelValue === void 0 && (d.value = e), a("update:modelValue", e), a("change", e);
    }, i = (e) => {
      if (o.disabled)
        return;
      const t = l.value.includes(e), r = o.multiple ? t ? l.value.filter((p) => p !== e) : [...l.value, e] : t ? [] : [e];
      u(r);
    };
    return v(g, {
      disabled: n(() => o.disabled),
      isOpen: (e) => l.value.includes(e),
      toggle: i
    }), (e, t) => (_(), V("div", B, [
      b(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), C = /* @__PURE__ */ h(y, [["__scopeId", "data-v-287a1f04"]]);
export {
  C as default
};
