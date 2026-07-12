import { defineComponent as n, computed as o, openBlock as s, createBlock as l, withCtx as u, renderSlot as h } from "vue";
import p from "./Skeleton-C0X3Bx_u.js";
const m = /* @__PURE__ */ n({
  __name: "ButtonSkeleton",
  props: {
    loading: { type: Boolean },
    size: { default: "large" },
    width: { default: "96px" },
    stretched: { type: Boolean },
    squared: { type: Boolean },
    rounded: { type: Boolean }
  },
  setup(i) {
    const e = i, t = {
      "extra-small": { height: "24px", radius: "8px" },
      small: { height: "32px", radius: "8px" },
      medium: { height: "36px", radius: "10px" },
      large: { height: "40px", radius: "10px" }
    }, r = o(() => e.stretched ? "100%" : e.squared ? t[e.size].height : e.width), a = o(() => e.rounded ? "999px" : t[e.size].radius);
    return (d, c) => (s(), l(p, {
      loading: e.loading,
      width: r.value,
      height: t[e.size].height,
      radius: a.value
    }, {
      default: u(() => [
        h(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["loading", "width", "height", "radius"]));
  }
});
export {
  m as _
};
