import { defineComponent as c, inject as f, computed as v, openBlock as o, createBlock as d, unref as m, mergeProps as l, withCtx as s, renderSlot as r, resolveDynamicComponent as p } from "vue";
import { A as k } from "./AsChild-C67btACu.js";
import { n as b } from "./context-Clk3ZHel.js";
import { _ as g } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/NavigationMenuLink-DMO2JOQF.css';const C = /* @__PURE__ */ c({
  inheritAttrs: !1,
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean, default: !1 },
    asChild: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    Element: { default: "a" },
    rounded: { type: Boolean, default: !1 },
    size: { default: "medium" }
  },
  setup(u) {
    const e = u, t = f(b);
    if (!t)
      throw new Error("NavigationMenuLink must be used inside NavigationMenu");
    const i = v(() => ({
      "aria-current": e.active ? "page" : void 0,
      "aria-disabled": e.disabled || void 0,
      "data-navigation-menu-focusable": "",
      disabled: e.disabled && (e.Element === "button" || e.asChild) ? !0 : void 0,
      tabindex: e.disabled ? -1 : void 0
    })), n = (a) => {
      if (e.disabled) {
        a.preventDefault();
        return;
      }
      e.closeOnSelect && t.close();
    };
    return (a, h) => e.asChild ? (o(), d(m(k), l({ key: 0 }, { ...a.$attrs, ...i.value }, {
      class: ["navigation-menu-link", e.size, { rounded: e.rounded }],
      "data-active": e.active || void 0,
      onClick: n
    }), {
      default: s(() => [
        r(a.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class", "data-active"])) : (o(), d(p(e.Element), l({ key: 1 }, { ...a.$attrs, ...i.value }, {
      class: ["navigation-menu-link", e.size, { rounded: e.rounded }],
      "data-active": e.active || void 0,
      onClick: n
    }), {
      default: s(() => [
        r(a.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class", "data-active"]));
  }
}), A = /* @__PURE__ */ g(C, [["__scopeId", "data-v-ce5c6a1a"]]);
export {
  A as default
};
