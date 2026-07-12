import { defineComponent as a, openBlock as s, createElementBlock as n, normalizeClass as r, normalizeStyle as i, renderSlot as p } from "vue";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Stack-NOpwTHS5.css';const c = /* @__PURE__ */ a({
  __name: "Stack",
  props: {
    direction: {},
    gap: {},
    fullHeight: { type: Boolean },
    alignItems: {},
    justifyContent: {},
    stretched: { type: Boolean },
    wrap: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, d) => (s(), n("div", {
      class: r([
        "stack",
        t.direction,
        t.alignItems,
        t.justifyContent ? `justify-${t.justifyContent}` : void 0,
        {
          "with-gap": !!t.gap,
          fullHeight: t.fullHeight,
          stretched: t.stretched,
          wrap: t.wrap
        }
      ]),
      style: i(
        t.gap ? { "--stack-gap-size": `var(--gap-${t.gap})` } : void 0
      )
    }, [
      p(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), g = /* @__PURE__ */ l(c, [["__scopeId", "data-v-e69988f9"]]);
export {
  g as default
};
