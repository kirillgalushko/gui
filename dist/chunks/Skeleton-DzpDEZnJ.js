import { defineComponent as r, useSlots as d, computed as i, unref as o, openBlock as c, createBlock as u, resolveDynamicComponent as p, mergeProps as m, renderSlot as f, createCommentVNode as h } from "vue";
import { O as k } from "./index-BQgYVE5h.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Skeleton-FXPdOsaW.css';const _ = /* @__PURE__ */ r({
  __name: "Skeleton",
  props: {
    Element: { default: "div" },
    loading: { type: Boolean },
    animated: { type: Boolean, default: !0 },
    width: { default: "100%" },
    height: { default: "20px" },
    radius: { default: "8px" },
    circle: { type: Boolean }
  },
  setup(a) {
    const e = a, n = d(), s = k(() => e.loading), l = i(() => ({
      "--skeleton-width": e.width,
      "--skeleton-height": e.height,
      "--skeleton-radius": e.circle ? "999px" : e.radius
    }));
    return (t, g) => o(s) ? (c(), u(p(e.Element), m({ key: 0 }, t.$attrs, {
      class: ["skeleton", { animated: e.animated }],
      style: l.value,
      "aria-hidden": "true"
    }), null, 16, ["class", "style"])) : o(n).default ? f(t.$slots, "default", { key: 1 }, void 0, !0) : h("", !0);
  }
}), x = /* @__PURE__ */ y(_, [["__scopeId", "data-v-35c2c53e"]]);
export {
  x as default
};
