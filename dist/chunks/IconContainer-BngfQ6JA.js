import { defineComponent as t, computed as c, openBlock as a, createElementBlock as s, mergeProps as l, renderSlot as i } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/IconContainer-KSXVnsFF.css';const p = /* @__PURE__ */ t({
  __name: "IconContainer",
  props: {
    size: { default: "40px" },
    mode: { default: "square" },
    color: {}
  },
  setup(r) {
    const e = r, n = c(() => {
      const o = e.color === void 0 ? void 0 : `var(--color-${e.color}-500)`;
      return {
        "--icon-container-size": e.size,
        "--icon-container-background": o === void 0 ? "hsl(var(--secondary))" : `color-mix(in oklab, ${o} 20%, transparent)`,
        "--icon-container-color": o ?? "hsl(var(--secondary-foreground))"
      };
    });
    return (o, u) => (a(), s("span", l(o.$attrs, {
      class: ["IconContainer", e.mode],
      style: n.value
    }), [
      i(o.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), v = /* @__PURE__ */ d(p, [["__scopeId", "data-v-0ec32381"]]);
export {
  v as default
};
