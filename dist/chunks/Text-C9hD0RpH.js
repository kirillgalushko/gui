import { defineComponent as a, computed as o, openBlock as s, createBlock as c, resolveDynamicComponent as m, mergeProps as r, withCtx as n, renderSlot as i } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Text-CQ0Cx_6S.css';const f = /* @__PURE__ */ a({
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
    return (e, u) => (s(), c(m(l.Element), r(e.$attrs, {
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
}), v = /* @__PURE__ */ d(f, [["__scopeId", "data-v-9f04bf85"]]);
export {
  v as default
};
