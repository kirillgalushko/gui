import { defineComponent as i, computed as r, openBlock as d, createElementBlock as l, normalizeClass as m, normalizeStyle as p, createElementVNode as c, mergeProps as f, renderSlot as u } from "vue";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Table-KgD0G642.css';const b = /* @__PURE__ */ i({
  __name: "Table",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    layout: {
      type: String,
      default: "auto"
    },
    minWidth: {
      type: [String, Number],
      default: void 0
    },
    maxHeight: {
      type: [String, Number],
      default: void 0
    },
    stickyHeader: {
      type: Boolean,
      default: !1
    }
  },
  setup(a) {
    const t = a, o = (e) => typeof e == "number" ? `${e}px` : typeof e == "string" && /^\d+(\.\d+)?$/.test(e) ? `${e}px` : e, n = r(() => o(t.minWidth)), s = r(() => o(t.maxHeight));
    return (e, h) => (d(), l("div", {
      class: m(["table-container", { border: t.border, "sticky-header": t.stickyHeader }]),
      style: p({ maxHeight: s.value })
    }, [
      c("table", f(e.$attrs, {
        class: "table",
        style: { minWidth: n.value, tableLayout: t.layout }
      }), [
        u(e.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 6));
  }
}), x = /* @__PURE__ */ y(b, [["__scopeId", "data-v-e6d04fb1"]]);
export {
  x as default
};
