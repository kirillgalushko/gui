import { defineComponent as a, openBlock as l, createElementBlock as s, normalizeClass as t, renderSlot as r } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Text-Cu_JJdlv.css';const n = /* @__PURE__ */ a({
  __name: "Text",
  props: {
    typography: {},
    clamp: {},
    ellipsis: { type: Boolean },
    mode: { default: "default" }
  },
  setup(p) {
    const o = p;
    return (e, c) => (l(), s("div", {
      class: t([o.typography, o.mode, {
        ellipsis: e.ellipsis,
        clamp: e.clamp,
        [`clamp-${e.clamp}`]: !!e.clamp
      }])
    }, [
      r(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), f = /* @__PURE__ */ m(n, [["__scopeId", "data-v-0963ae0d"]]);
export {
  f as default
};
