import { openBlock as a, createElementBlock as h, createElementVNode as l, defineComponent as p, inject as k, computed as s, createBlock as d, withCtx as c, renderSlot as u, unref as v, createCommentVNode as f } from "vue";
import { i as w } from "./IconAccessibleFilled-DFPdopZN.js";
import { B } from "./BaseMenuItem-BgZg369U.js";
import { b } from "./baseMenuRadioGroup-3n2s4QQe.js";
const g = {}, M = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function C(n, e) {
  return a(), h("svg", M, e[0] || (e[0] = [
    l("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1),
    l("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1)
  ]));
}
const _ = /* @__PURE__ */ w(g, [["render", C]]), $ = /* @__PURE__ */ p({
  __name: "BaseMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const e = n, o = k(b);
    if (!o)
      throw new Error("BaseMenuRadioItem must be used inside BaseMenuRadioGroup");
    const r = s(() => !!e.disabled || o.disabled.value), t = s(() => o.model.value === e.value), m = () => {
      r.value || o.select(e.value);
    };
    return (i, x) => (a(), d(B, {
      role: "menuitemradio",
      disabled: r.value,
      selected: t.value,
      "aria-checked": t.value,
      "data-state": t.value ? "checked" : "unchecked",
      onClick: m
    }, {
      trailing: c(() => [
        u(i.$slots, "indicator", { checked: t.value }, () => [
          t.value ? (a(), d(v(_), { key: 0 })) : f("", !0)
        ])
      ]),
      default: c(() => [
        u(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled", "selected", "aria-checked", "data-state"]));
  }
});
export {
  $ as _
};
