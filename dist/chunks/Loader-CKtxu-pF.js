import { defineComponent as l, openBlock as s, createElementBlock as n, normalizeStyle as c, unref as o, createElementVNode as d } from "vue";
import { _ as a } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Loader-CqrlHYX0.css';const p = ["width", "height"], m = /* @__PURE__ */ l({
  __name: "Loader",
  props: {
    size: {}
  },
  setup(i) {
    const t = i, e = typeof t.size == "number" ? `${t.size}px` : t.size || "1em";
    return (_, r) => (s(), n("div", {
      style: c({ width: o(e), height: o(e) }),
      class: "loader"
    }, [
      (s(), n("svg", {
        width: o(e),
        height: o(e),
        viewBox: "0 0 50 50",
        xmlns: "http://www.w3.org/2000/svg"
      }, r[0] || (r[0] = [
        d("circle", {
          cx: "25",
          cy: "25",
          r: "20",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "4",
          "stroke-linecap": "round",
          class: "loader__circle"
        }, null, -1)
      ]), 8, p))
    ], 4));
  }
}), u = /* @__PURE__ */ a(m, [["__scopeId", "data-v-040d7221"]]);
export {
  u as default
};
