import { defineComponent as r, renderSlot as a, unref as d } from "vue";
import { P as l } from "./index-BQgYVE5h.js";
const f = /* @__PURE__ */ r({
  __name: "SkeletonProvider",
  props: {
    loading: { type: Boolean, default: !0 }
  },
  setup(o) {
    const e = o, n = l(() => e.loading);
    return (t, i) => a(t.$slots, "default", { loading: d(n) });
  }
});
export {
  f as default
};
