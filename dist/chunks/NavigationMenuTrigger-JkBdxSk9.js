import { defineComponent as d, inject as i, ref as g, onMounted as l, onBeforeUnmount as c, openBlock as v, createElementBlock as f, unref as n, createElementVNode as m, renderSlot as p, createVNode as _, nextTick as b } from "vue";
import { d as y } from "./IconChevronDownOutline-Clx8hRBy.js";
import { n as M, a as x } from "./context-Clk3ZHel.js";
import { _ as I } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/NavigationMenuTrigger-D_QXYTYv.css';const k = ["id", "aria-controls", "aria-expanded", "data-state", "disabled"], w = { class: "navigation-menu-trigger-content" }, N = /* @__PURE__ */ d({
  __name: "NavigationMenuTrigger",
  setup(T) {
    const a = i(M), e = i(x);
    if (!a || !e)
      throw new Error(
        "NavigationMenuTrigger must be used inside NavigationMenuItem"
      );
    const o = g(null), s = () => {
      b(() => {
        var t;
        (t = document.getElementById(e.contentId)) == null || t.focus();
      });
    }, u = (t) => {
      ["ArrowDown", "Enter", " "].includes(t.key) && (t.preventDefault(), a.open(e.value), s());
    };
    return l(() => {
      e.triggerRef.value = o.value, a.registerTrigger(e.value, o.value);
    }), c(() => {
      e.triggerRef.value = null, a.registerTrigger(e.value, null);
    }), (t, r) => (v(), f("button", {
      id: n(e).triggerId,
      ref_key: "triggerRef",
      ref: o,
      class: "navigation-menu-trigger",
      type: "button",
      "data-navigation-menu-focusable": "",
      "aria-controls": n(e).contentId,
      "aria-expanded": n(e).isOpen.value,
      "aria-haspopup": "true",
      "data-state": n(e).isOpen.value ? "open" : "closed",
      disabled: n(e).disabled.value,
      onClick: r[0] || (r[0] = (h) => n(a).toggle(n(e).value)),
      onKeydown: u
    }, [
      m("span", w, [
        p(t.$slots, "default", {}, void 0, !0)
      ]),
      _(n(y), {
        class: "navigation-menu-trigger-icon",
        "aria-hidden": "true"
      })
    ], 40, k));
  }
}), R = /* @__PURE__ */ I(N, [["__scopeId", "data-v-d1a39b41"]]);
export {
  R as default
};
