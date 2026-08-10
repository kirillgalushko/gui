import { defineComponent as a, inject as i, openBlock as d, createElementBlock as c, unref as o, createElementVNode as s, renderSlot as l, createVNode as p } from "vue";
import { d as m } from "./IconChevronDownOutline-Clx8hRBy.js";
import { b as g } from "./context-CkNm3Ou9.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AccordionTrigger-CMDg1NqX.css';const _ = ["id", "aria-controls", "aria-expanded", "disabled", "data-state"], f = { class: "accordion-trigger-content" }, b = /* @__PURE__ */ a({
  __name: "AccordionTrigger",
  setup(v) {
    const e = i(g);
    if (e === void 0)
      throw new Error("AccordionTrigger must be used inside AccordionItem");
    return (r, t) => (d(), c("button", {
      id: o(e).triggerId,
      class: "accordion-trigger",
      type: "button",
      "aria-controls": o(e).contentId,
      "aria-expanded": o(e).isOpen.value,
      disabled: o(e).disabled.value,
      "data-state": o(e).isOpen.value ? "open" : "closed",
      onClick: t[0] || (t[0] = //@ts-ignore
      (...n) => o(e).toggle && o(e).toggle(...n))
    }, [
      s("span", f, [
        l(r.$slots, "default", {}, void 0, !0)
      ]),
      p(o(m), {
        class: "accordion-chevron",
        "aria-hidden": "true"
      })
    ], 8, _));
  }
}), k = /* @__PURE__ */ u(b, [["__scopeId", "data-v-4a2b0c46"]]);
export {
  k as default
};
