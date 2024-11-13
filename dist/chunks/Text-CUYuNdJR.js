import { defineComponent as a, computed as o, openBlock as s, createBlock as c, resolveDynamicComponent as m, mergeProps as r, withCtx as n, renderSlot as i } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Text-B7glkVBu.css';const u = /* @__PURE__ */ a({
  __name: "Text",
  props: {
    Element: { default: "div" },
    typography: {},
    clamp: {},
    ellipsis: { type: Boolean },
    color: { default: "default" }
  },
  setup(t) {
    const l = t, p = o(() => ({
      ...l.clamp ? {
        "-webkit-line-clamp": l.clamp,
        "line-clamp": l.clamp
      } : {}
    }));
    return (e, f) => (s(), c(m(l.Element), r(e.$attrs, {
      class: [
        l.typography,
        l.color,
        {
          ellipsis: e.ellipsis,
          clamp: e.clamp,
          [`clamp-${e.clamp}`]: !!e.clamp
        }
      ],
      style: p.value
    }), {
      default: n(() => [
        i(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), v = /* @__PURE__ */ d(u, [["__scopeId", "data-v-6731d6e7"]]);
export {
  v as default
};
