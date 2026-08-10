import { defineComponent as r, inject as l, useId as p, computed as n, provide as u, openBlock as m, createElementBlock as v, renderSlot as f } from "vue";
import { a as _, b } from "./context-CkNm3Ou9.js";
import { _ as g } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AccordionItem-TL9IsQal.css';const I = ["data-disabled", "data-state"], x = /* @__PURE__ */ r({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: {}
  },
  setup(s) {
    const o = s, e = l(_);
    if (e === void 0)
      throw new Error("AccordionItem must be used inside Accordion");
    const d = p(), a = n(() => e.isOpen(o.value)), t = n(() => e.disabled.value || o.disabled), c = () => {
      t.value || e.toggle(o.value);
    };
    return u(b, {
      contentId: `${d}-content`,
      disabled: t,
      isOpen: a,
      toggle: c,
      triggerId: `${d}-trigger`
    }), (i, A) => (m(), v("div", {
      class: "accordion-item",
      "data-disabled": t.value || void 0,
      "data-state": a.value ? "open" : "closed"
    }, [
      f(i.$slots, "default", {}, void 0, !0)
    ], 8, I));
  }
}), C = /* @__PURE__ */ g(x, [["__scopeId", "data-v-2d683002"]]);
export {
  C as default
};
