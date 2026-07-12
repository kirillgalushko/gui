import { defineComponent as d, inject as f, computed as o, openBlock as v, createElementBlock as x, normalizeStyle as _, renderSlot as k } from "vue";
import { I as b, H as y, J as c } from "./index-D5rI4VW1.js";
import { _ as h } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/GridColumn-5iIU7m3K.css';const B = "xxl", I = /* @__PURE__ */ d({
  __name: "GridColumn",
  props: {
    xs: {},
    s: {},
    m: {},
    l: {},
    xl: {},
    xxl: {}
  },
  setup(u) {
    const i = u, e = f(b), a = o(() => (e == null ? void 0 : e.breakpoint.value) ?? B), s = o(() => (e == null ? void 0 : e.columns.value) ?? y[a.value]), m = o(() => {
      const t = c.indexOf(a.value);
      for (let n = t; n >= 0; n -= 1) {
        const r = c[n];
        if (r === void 0)
          continue;
        const l = i[r];
        if (typeof l == "number")
          return Math.min(Math.max(l, 1), s.value);
      }
      return s.value;
    }), p = o(() => ({
      "--grid-column-span": String(m.value)
    }));
    return (t, n) => (v(), x("div", {
      class: "grid-column",
      style: _(p.value)
    }, [
      k(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), M = /* @__PURE__ */ h(I, [["__scopeId", "data-v-ce6b6089"]]);
export {
  M as default
};
