import { openBlock as m, createElementBlock as g, createElementVNode as l, defineComponent as w, provide as _, computed as k, watch as y, createBlock as S, withCtx as p, normalizeStyle as b, renderSlot as u, normalizeClass as x, createTextVNode as C, toDisplayString as B, unref as n, createVNode as O } from "vue";
import z from "./Dropdown-D0drzV1a.js";
import { g as N, h as V } from "./index-DTIJceEd.js";
import { _ as $ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Select-CFPKPPeC.css';const D = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function E(s, e) {
  return m(), g("svg", D, e[0] || (e[0] = [
    l("path", { d: "M6 9l6 6l6 -6" }, null, -1)
  ]));
}
const R = { render: E }, T = ["name", "value"], j = { class: "hidden-options" }, F = /* @__PURE__ */ w({
  __name: "Select",
  props: {
    stretched: { type: Boolean },
    label: {},
    value: {},
    name: {},
    onChange: { type: Function }
  },
  setup(s) {
    const e = s, t = N(e.value, e.onChange);
    _("select", t);
    const { elementRef: v, width: h } = V(), f = k(() => ({ minWidth: `${h.value - 8}px` }));
    return y(() => e.value, () => {
      if (e.value) {
        const o = t.options.value.get(e.value);
        t.selectedOption.value = { value: e.value, label: o };
      } else
        t.selectedOption.value = void 0;
    }), (o, H) => (m(), S(z, {
      popperHideTriggers: ["click"],
      placement: "bottom-start",
      class: "select"
    }, {
      popper: p(() => [
        l("div", {
          style: b(f.value)
        }, [
          u(o.$slots, "default", {}, void 0, !0)
        ], 4)
      ]),
      default: p(() => {
        var a, r, i, c, d;
        return [
          l("button", {
            ref_key: "elementRef",
            ref: v,
            class: x(["select-toggle", { stretched: e.stretched }])
          }, [
            C(B(((i = (r = (a = n(t)) == null ? void 0 : a.selectedOption) == null ? void 0 : r.value) == null ? void 0 : i.label) || e.label) + " ", 1),
            O(n(R))
          ], 2),
          l("input", {
            hidden: "",
            name: e.name,
            value: e.value || ((d = (c = n(t).selectedOption) == null ? void 0 : c.value) == null ? void 0 : d.value)
          }, null, 8, T),
          l("div", j, [
            u(o.$slots, "default", {}, void 0, !0)
          ])
        ];
      }),
      _: 3
    }));
  }
}), A = /* @__PURE__ */ $(F, [["__scopeId", "data-v-b377d0af"]]);
export {
  A as default
};
