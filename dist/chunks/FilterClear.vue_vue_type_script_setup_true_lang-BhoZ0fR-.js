import { openBlock as r, createElementBlock as d, createElementVNode as s, defineComponent as m, createBlock as c, withCtx as u, renderSlot as i, createVNode as p, unref as f, createTextVNode as h, toDisplayString as w, createCommentVNode as b } from "vue";
import { i as k } from "./IconAccessibleFilled-DFPdopZN.js";
import y from "./Button-DBIwBw8Q.js";
const v = {}, g = {
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
function B(o, t) {
  return r(), d("svg", g, t[0] || (t[0] = [
    s("path", { d: "M13.758 19.414 9 21v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4h16v2.172a2 2 0 0 1-.586 1.414L15 12v1.5m7 8.5-5-5m0 5 5-5" }, null, -1)
  ]));
}
const C = /* @__PURE__ */ k(v, [["render", B]]), O = /* @__PURE__ */ m({
  __name: "FilterClear",
  props: {
    label: { default: "Сбросить" },
    iconOnly: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    size: { default: "medium" },
    mode: { default: "outline" }
  },
  emits: ["clear"],
  setup(o, { emit: t }) {
    const e = o, a = t;
    return (l, n) => (r(), c(y, {
      squared: e.iconOnly,
      size: e.size,
      mode: e.mode,
      disabled: e.disabled,
      "aria-label": e.iconOnly ? e.label : void 0,
      onClick: n[0] || (n[0] = (V) => a("clear"))
    }, {
      default: u(() => [
        i(l.$slots, "icon", {}, () => [
          p(f(C))
        ]),
        e.iconOnly ? b("", !0) : i(l.$slots, "default", { key: 0 }, () => [
          h(w(e.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["squared", "size", "mode", "disabled", "aria-label"]));
  }
});
export {
  O as _
};
