import { defineComponent as a, openBlock as i, createBlock as r, withCtx as n, renderSlot as s } from "vue";
import l from "./Skeleton-C0X3Bx_u.js";
const h = /* @__PURE__ */ a({
  __name: "AvatarSkeleton",
  props: {
    loading: { type: Boolean },
    size: { default: "40px" },
    shape: { default: "circle" }
  },
  setup(t) {
    const e = t;
    return (o, p) => (i(), r(l, {
      loading: e.loading,
      width: e.size,
      height: e.size,
      radius: e.shape === "square" ? `calc(${e.size} / 4)` : "999px"
    }, {
      default: n(() => [
        s(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["loading", "width", "height", "radius"]));
  }
});
export {
  h as _
};
