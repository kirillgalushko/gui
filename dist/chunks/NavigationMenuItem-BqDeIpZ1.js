import { defineComponent as v, inject as c, useId as p, computed as s, ref as m, provide as f, openBlock as g, createElementBlock as _, unref as d, renderSlot as I } from "vue";
import { n as M, a as b } from "./context-Clk3ZHel.js";
import { _ as x } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/NavigationMenuItem-gCrzXeQS.css';const N = ["data-disabled", "data-state"], $ = /* @__PURE__ */ v({
  __name: "NavigationMenuItem",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: {}
  },
  setup(r) {
    const e = r, t = c(M);
    if (!t)
      throw new Error("NavigationMenuItem must be used inside NavigationMenu");
    const a = p(), o = s(() => t.value.value === e.value), n = s(() => e.disabled), u = m(null);
    return f(b, {
      contentId: `${a}-content`,
      disabled: n,
      isOpen: o,
      triggerId: `${a}-trigger`,
      triggerRef: u,
      value: e.value
    }), (l, i) => (g(), _("li", {
      class: "navigation-menu-item",
      "data-disabled": n.value || void 0,
      "data-state": o.value ? "open" : "closed",
      onPointerenter: i[0] || (i[0] = (y) => d(t).openOnHover.value && !n.value ? d(t).scheduleOpen(e.value) : void 0)
    }, [
      I(l.$slots, "default", {}, void 0, !0)
    ], 40, N));
  }
}), h = /* @__PURE__ */ x($, [["__scopeId", "data-v-72f637f4"]]);
export {
  h as default
};
