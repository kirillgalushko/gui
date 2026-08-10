import { defineComponent as p, computed as o, openBlock as s, createBlock as c, resolveDynamicComponent as n, mergeProps as r, withCtx as m, renderSlot as i } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Text-DHI97-Ov.css';const f = /* @__PURE__ */ p({
  __name: "Text",
  props: {
    Element: { default: "div" },
    typography: {},
    clamp: {},
    ellipsis: { type: Boolean },
    color: { default: "default" },
    textAlign: { default: "inherit" }
  },
  setup(t) {
    const e = t, a = o(() => ({
      ...e.clamp ? {
        "-webkit-line-clamp": e.clamp,
        "line-clamp": e.clamp
      } : {},
      textAlign: e.textAlign
    }));
    return (l, u) => (s(), c(n(e.Element), r(l.$attrs, {
      class: [
        e.typography,
        e.color,
        {
          ellipsis: l.ellipsis,
          clamp: l.clamp,
          [`clamp-${l.clamp}`]: !!l.clamp
        }
      ],
      style: a.value
    }), {
      default: m(() => [
        i(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), _ = /* @__PURE__ */ d(f, [["__scopeId", "data-v-5362ff8b"]]);
export {
  _ as default
};
