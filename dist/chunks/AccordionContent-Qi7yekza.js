import { defineComponent as c, inject as i, openBlock as r, createElementBlock as d, unref as o, createElementVNode as t, renderSlot as a } from "vue";
import { b as s } from "./context-CkNm3Ou9.js";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AccordionContent-DrorRRJz.css';const _ = ["id", "aria-hidden", "aria-labelledby", "data-state"], m = { class: "accordion-content-clip" }, p = { class: "accordion-content-inner" }, u = /* @__PURE__ */ c({
  __name: "AccordionContent",
  setup(f) {
    const e = i(s);
    if (e === void 0)
      throw new Error("AccordionContent must be used inside AccordionItem");
    return (n, v) => (r(), d("div", {
      id: o(e).contentId,
      class: "accordion-content",
      role: "region",
      "aria-hidden": !o(e).isOpen.value,
      "aria-labelledby": o(e).triggerId,
      "data-state": o(e).isOpen.value ? "open" : "closed"
    }, [
      t("div", m, [
        t("div", p, [
          a(n.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 8, _));
  }
}), I = /* @__PURE__ */ l(u, [["__scopeId", "data-v-904814b2"]]);
export {
  I as default
};
