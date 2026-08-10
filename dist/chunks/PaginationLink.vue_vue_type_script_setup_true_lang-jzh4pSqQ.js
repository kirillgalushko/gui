import { defineComponent as c, inject as m, computed as p, openBlock as s, createBlock as o, mergeProps as d, withCtx as r, renderSlot as l, createElementVNode as v } from "vue";
import n from "./Button-DBIwBw8Q.js";
import { p as f } from "./context-C9fgU0XA.js";
const y = /* @__PURE__ */ c({
  inheritAttrs: !1,
  __name: "PaginationLink",
  props: {
    Element: { default: "a" },
    asChild: { type: Boolean },
    isActive: { type: Boolean },
    disabled: { type: Boolean },
    size: {}
  },
  setup(u) {
    const e = u, t = m(f, void 0), a = p(
      () => e.size ?? (t == null ? void 0 : t.size.value) ?? "medium"
    );
    return (i, b) => e.asChild ? (s(), o(n, d({ key: 0 }, i.$attrs, {
      "as-child": "",
      mode: e.isActive ? "outline" : "ghost",
      size: a.value,
      squared: "",
      disabled: e.disabled,
      "aria-current": e.isActive ? "page" : void 0
    }), {
      default: r(() => [
        l(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["mode", "size", "disabled", "aria-current"])) : e.Element === "a" ? (s(), o(n, d({ key: 1 }, i.$attrs, {
      "as-child": "",
      mode: e.isActive ? "outline" : "ghost",
      size: a.value,
      squared: "",
      disabled: e.disabled,
      "aria-current": e.isActive ? "page" : void 0
    }), {
      default: r(() => [
        v("a", null, [
          l(i.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["mode", "size", "disabled", "aria-current"])) : (s(), o(n, d({ key: 2 }, i.$attrs, {
      type: "button",
      mode: e.isActive ? "outline" : "ghost",
      size: a.value,
      squared: "",
      disabled: e.disabled,
      "aria-current": e.isActive ? "page" : void 0
    }), {
      default: r(() => [
        l(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["mode", "size", "disabled", "aria-current"]));
  }
});
export {
  y as _
};
