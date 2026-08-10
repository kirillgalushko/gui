import { defineComponent as r, computed as l, openBlock as s, createBlock as c, withCtx as n, renderSlot as p, createTextVNode as i, toDisplayString as u } from "vue";
import d from "./Avatar-COALf-yl.js";
const _ = /* @__PURE__ */ r({
  __name: "AvatarGroupCount",
  props: {
    ariaLabel: {},
    color: {},
    count: {},
    mode: { default: "secondary" },
    shape: {},
    size: {}
  },
  setup(o) {
    const e = o, a = l(
      () => e.ariaLabel ?? `Ещё участников: ${e.count}`
    );
    return (t, m) => (s(), c(d, {
      "aria-label": a.value,
      color: e.color,
      mode: e.mode,
      shape: e.shape,
      size: e.size
    }, {
      default: n(() => [
        p(t.$slots, "default", {}, () => [
          i("+" + u(e.count), 1)
        ])
      ]),
      _: 3
    }, 8, ["aria-label", "color", "mode", "shape", "size"]));
  }
});
export {
  _ as default
};
