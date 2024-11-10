import { openBlock as m, createElementBlock as g, createElementVNode as l, defineComponent as w, provide as _, computed as k, watch as y, createBlock as S, withCtx as p, normalizeStyle as b, renderSlot as u, normalizeClass as x, createTextVNode as C, toDisplayString as B, unref as n, createVNode as O } from "vue";
import $ from "./Dropdown-Cqexel2k.js";
import { i as z } from "./IconAccessibleFilled-DFPdopZN.js";
import { g as N, h as V } from "./index-uycW1w6L.js";
import { _ as D } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Select-BJaTYbjg.css';const E = {}, R = {
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
function T(s, e) {
  return m(), g("svg", R, e[0] || (e[0] = [
    l("path", { d: "m6 9 6 6 6-6" }, null, -1)
  ]));
}
const j = /* @__PURE__ */ z(E, [["render", T]]), F = ["name", "value"], H = { class: "hidden-options" }, I = /* @__PURE__ */ w({
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
    }), (o, W) => (m(), S($, {
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
            O(n(j))
          ], 2),
          l("input", {
            hidden: "",
            name: e.name,
            value: e.value || ((d = (c = n(t).selectedOption) == null ? void 0 : c.value) == null ? void 0 : d.value)
          }, null, 8, F),
          l("div", H, [
            u(o.$slots, "default", {}, void 0, !0)
          ])
        ];
      }),
      _: 3
    }));
  }
}), L = /* @__PURE__ */ D(I, [["__scopeId", "data-v-b960c483"]]);
export {
  L as default
};
