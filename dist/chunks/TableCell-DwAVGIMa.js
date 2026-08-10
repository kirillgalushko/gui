import { defineComponent as o, computed as s, openBlock as d, createElementBlock as l, normalizeStyle as m, renderSlot as p } from "vue";
import { _ as a } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/TableCell-DmFyYKej.css';const c = /* @__PURE__ */ o({
  __name: "TableCell",
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
    const t = i, r = (e) => typeof e == "number" ? `${e}px` : typeof e == "string" && /^\d+(\.\d+)?$/.test(e) ? `${e}px` : e, n = s(() => ({
      width: r(t.width),
      minWidth: r(t.minWidth),
      maxWidth: r(t.maxWidth)
    }));
    return (e, f) => (d(), l("td", {
      class: "table-cell",
      style: m(n.value)
    }, [
      p(e.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), _ = /* @__PURE__ */ a(c, [["__scopeId", "data-v-9913f98d"]]);
export {
  _ as default
};
