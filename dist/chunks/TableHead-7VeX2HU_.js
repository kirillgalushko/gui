import { defineComponent as o, computed as d, openBlock as s, createElementBlock as m, normalizeStyle as a, renderSlot as p } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/TableHead-CIAdGdU0.css';const f = /* @__PURE__ */ o({
  __name: "TableHead",
  props: {
    width: {
      type: [String, Number],
      required: !1
    },
    minWidth: {
      type: [String, Number],
      required: !1
    },
    maxWidth: {
      type: [String, Number],
      required: !1
    }
  },
  setup(i) {
    const t = i, r = (e) => typeof e == "number" ? `${e}px` : typeof e == "string" && /^\d+(\.\d+)?$/.test(e) ? `${e}px` : e, n = d(() => ({
      width: r(t.width),
      minWidth: r(t.minWidth),
      maxWidth: r(t.maxWidth)
    }));
    return (e, l) => (s(), m("th", {
      class: "table-head",
      style: a(n.value)
    }, [
      p(e.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), _ = /* @__PURE__ */ c(f, [["__scopeId", "data-v-6f6bfc99"]]);
export {
  _ as default
};
