import { openBlock as o, createElementBlock as s, createElementVNode as n, defineComponent as l, inject as p, computed as c, normalizeClass as m, renderSlot as d, createVNode as u, unref as h, toDisplayString as f } from "vue";
import { i as g } from "./IconAccessibleFilled-DFPdopZN.js";
import { p as _ } from "./context-C9fgU0XA.js";
import { _ as w } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PaginationEllipsis-25yKTcJe.css';const v = {}, k = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function z(i, e) {
  return o(), s("svg", k, e[0] || (e[0] = [
    n("path", { d: "M4 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const b = /* @__PURE__ */ g(v, [["render", z]]), x = { class: "pagination-ellipsis-label" }, E = /* @__PURE__ */ l({
  __name: "PaginationEllipsis",
  props: {
    label: { default: "Больше страниц" },
    size: {}
  },
  setup(i) {
    const e = i, t = p(_, void 0), a = c(
      () => e.size ?? (t == null ? void 0 : t.size.value) ?? "large"
    );
    return (r, y) => (o(), s("span", {
      class: m(["pagination-ellipsis", a.value])
    }, [
      d(r.$slots, "default", {}, () => [
        u(h(b), { "aria-hidden": "true" })
      ], !0),
      n("span", x, f(e.label), 1)
    ], 2));
  }
}), P = /* @__PURE__ */ w(E, [["__scopeId", "data-v-2214bdc6"]]);
export {
  P as default
};
