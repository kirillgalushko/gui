import { defineComponent as r, renderSlot as a, unref as d } from "vue";
import { p as l } from "./index-D5rI4VW1.js";
const f = /* @__PURE__ */ r({
  __name: "SkeletonProvider",
  props: {
    loading: { type: Boolean, default: !0 }
  },
  setup(o) {
    const e = o, n = l(() => e.loading);
    return (t, p) => a(t.$slots, "default", { loading: d(n) });
  }
});
export {
  f as default
};
