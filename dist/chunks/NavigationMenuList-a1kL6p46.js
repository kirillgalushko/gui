import { defineComponent as m, inject as f, openBlock as g, createElementBlock as p, unref as u, renderSlot as _ } from "vue";
import { n as h } from "./context-Clk3ZHel.js";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/NavigationMenuList-snwzcgMd.css';const y = ["data-mobile", "data-orientation"], w = /* @__PURE__ */ m({
  __name: "NavigationMenuList",
  setup(b) {
    const n = f(h);
    if (!n)
      throw new Error("NavigationMenuList must be used inside NavigationMenu");
    const l = (e) => {
      var s;
      const o = n.orientation.value === "horizontal", c = o ? "ArrowLeft" : "ArrowUp", a = o ? "ArrowRight" : "ArrowDown";
      if (![c, a, "Home", "End"].includes(e.key))
        return;
      const i = e.currentTarget;
      if (!(i instanceof HTMLElement))
        return;
      const t = Array.from(
        i.querySelectorAll(
          "[data-navigation-menu-focusable]:not([aria-disabled='true']):not(:disabled)"
        )
      ), r = t.indexOf(document.activeElement);
      if (r < 0 || t.length === 0)
        return;
      e.preventDefault();
      const d = e.key === "Home" ? 0 : e.key === "End" ? t.length - 1 : e.key === a ? (r + 1) % t.length : (r - 1 + t.length) % t.length;
      (s = t[d]) == null || s.focus();
    };
    return (e, o) => (g(), p("ul", {
      class: "navigation-menu-list",
      "data-mobile": u(n).isMobile.value || void 0,
      "data-orientation": u(n).orientation.value,
      onKeydown: l
    }, [
      _(e.$slots, "default", {}, void 0, !0)
    ], 40, y));
  }
}), A = /* @__PURE__ */ v(w, [["__scopeId", "data-v-381ae84b"]]);
export {
  A as default
};
