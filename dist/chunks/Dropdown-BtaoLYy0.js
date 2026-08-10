import { defineComponent as l, useAttrs as c, computed as n, openBlock as i, createBlock as u, unref as f, mergeProps as m, withCtx as r, renderSlot as s, createElementVNode as h, normalizeStyle as w } from "vue";
import { k as _ } from "./floating-vue-CCtJ9iQJ.js";
import { D as v } from "./menuSizing-BRqr-zw7.js";
import { _ as C } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Dropdown-jgiEJN6j.css';const y = (e, t) => ({
  width: e === "auto" ? "fit-content" : "100%",
  maxWidth: t
}), D = /* @__PURE__ */ l({
  inheritAttrs: !1,
  __name: "Dropdown",
  props: {
    stretched: { type: Boolean, default: !1 },
    contentWidth: { default: "auto" },
    contentMaxWidth: { default: v },
    contentPadding: { default: "default" }
  },
  setup(e) {
    const t = e, a = c(), d = n(() => [
      a.popperClass,
      `dropdown-content-width-${t.contentWidth}`,
      `dropdown-content-padding-${t.contentPadding}`
    ]), p = n(
      () => y(t.contentWidth, t.contentMaxWidth)
    );
    return (o, W) => (i(), u(f(_), m(o.$attrs, {
      arrowOverflow: !1,
      autoBoundaryMaxSize: !0,
      overflowPadding: 8,
      popperClass: d.value,
      class: ["dropdown", { stretched: t.stretched }]
    }), {
      default: r(() => [
        s(o.$slots, "default", {}, void 0, !0)
      ]),
      popper: r(() => [
        h("div", {
          class: "dropdown-content",
          style: w(p.value)
        }, [
          s(o.$slots, "popper", {}, void 0, !0)
        ], 4)
      ]),
      _: 3
    }, 16, ["popperClass", "class"]));
  }
}), k = /* @__PURE__ */ C(D, [["__scopeId", "data-v-8343a94b"]]);
export {
  k as default
};
