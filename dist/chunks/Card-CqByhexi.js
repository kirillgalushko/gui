import { defineComponent as o, openBlock as r, createBlock as l, resolveDynamicComponent as d, normalizeClass as n, normalizeStyle as i, withCtx as s, renderSlot as c } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Card-BT198ExB.css';const u = /* @__PURE__ */ o({
  __name: "Card",
  props: {
    interactive: { type: Boolean, default: !1 },
    onClick: {},
    background: { default: "default" },
    fullHeight: { type: Boolean },
    stretched: { type: Boolean },
    padding: { default: 8 },
    borderRadius: { default: 16 }
  },
  setup(a) {
    const e = a;
    return (t, f) => (r(), l(d(e.interactive ? "button" : "div"), {
      class: n([
        "card",
        e.background,
        {
          "full-height": e.fullHeight,
          interactive: e.interactive,
          stretched: e.stretched
        }
      ]),
      style: i({
        padding: `${e.padding}px`,
        borderRadius: `${e.borderRadius}px`
      }),
      onClick: t.onClick
    }, {
      default: s(() => [
        c(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "style", "onClick"]));
  }
}), _ = /* @__PURE__ */ p(u, [["__scopeId", "data-v-a4be4752"]]);
export {
  _ as default
};
