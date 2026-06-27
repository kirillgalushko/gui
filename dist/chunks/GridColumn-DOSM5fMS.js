import { defineComponent as i, inject as d, computed as n, openBlock as f, createElementBlock as v, normalizeStyle as x, renderSlot as _ } from "vue";
import { k, l as s } from "./index-CAcsj2N5.js";
import { g as b } from "./context-BN9FvkeW.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/GridColumn-DLvYTFLH.css';const h = "xxl", B = /* @__PURE__ */ i({
  __name: "GridColumn",
  props: {
    xs: {},
    s: {},
    m: {},
    l: {},
    xl: {},
    xxl: {}
  },
  setup(c) {
    const u = c, e = d(b), a = n(() => (e == null ? void 0 : e.breakpoint.value) ?? h), r = n(() => (e == null ? void 0 : e.columns.value) ?? k[a.value]), m = n(() => {
      const t = s.indexOf(a.value);
      for (let o = t; o >= 0; o -= 1) {
        const l = u[s[o]];
        if (typeof l == "number")
          return Math.min(Math.max(l, 1), r.value);
      }
      return r.value;
    }), p = n(() => ({
      "--grid-column-span": String(m.value)
    }));
    return (t, o) => (f(), v("div", {
      class: "grid-column",
      style: x(p.value)
    }, [
      _(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), I = /* @__PURE__ */ y(B, [["__scopeId", "data-v-4e44bac4"]]);
export {
  I as default
};
