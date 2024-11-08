import { defineComponent as o, openBlock as r, createBlock as d, resolveDynamicComponent as n, normalizeClass as s, normalizeStyle as c, withCtx as i, renderSlot as l } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Card-BlrUbkMo.css';const u = /* @__PURE__ */ o({
  __name: "Card",
  props: {
    interactive: { type: Boolean, default: !1 },
    onClick: {},
    background: { default: "default" },
    stretched: { type: Boolean },
    padding: { default: 8 },
    borderRadius: { default: 8 }
  },
  setup(a) {
    const e = a;
    return (t, f) => (r(), d(n(e.interactive ? "button" : "div"), {
      class: s(["card", e.background, { interactive: e.interactive, stretched: e.stretched }]),
      style: c({ padding: `${e.padding}px`, borderRadius: `${e.borderRadius}px` }),
      onClick: t.onClick
    }, {
      default: i(() => [
        l(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "style", "onClick"]));
  }
}), _ = /* @__PURE__ */ p(u, [["__scopeId", "data-v-ba544cd5"]]);
export {
  _ as default
};
