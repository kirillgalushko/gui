import { openBlock as f, createElementBlock as k, createElementVNode as n, defineComponent as S, provide as x, ref as y, computed as z, watch as m, createBlock as b, withCtx as l, normalizeStyle as B, renderSlot as h, createVNode as v, unref as r, createTextVNode as C, toDisplayString as O } from "vue";
import R from "./Dropdown-BzAtxMa0.js";
import { i as $ } from "./IconAccessibleFilled-DFPdopZN.js";
import { i as N, j as V } from "./index-D5rI4VW1.js";
import j from "./Picker-dM7Z2qxR.js";
import { _ as D } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Select-9z_uYLIJ.css';const E = {}, T = {
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
function H(i, e) {
  return f(), k("svg", T, e[0] || (e[0] = [
    n("path", { d: "m6 9 6 6 6-6" }, null, -1)
  ]));
}
const I = /* @__PURE__ */ $(E, [["render", H]]), M = ["name", "value"], P = { class: "hidden-options" }, W = /* @__PURE__ */ S({
  __name: "Select",
  props: {
    stretched: { type: Boolean },
    label: {},
    size: { default: "large" },
    value: {},
    name: {},
    onChange: {}
  },
  setup(i) {
    const e = i, o = N(e.value, e.onChange);
    x("select", o);
    const s = y(), { elementRef: _, width: g } = V(), w = z(() => ({ minWidth: `${Math.max((g.value ?? 0) - 8, 0)}px` }));
    return m(
      s,
      () => {
        var t;
        _.value = ((t = s.value) == null ? void 0 : t.elementRef) ?? null;
      },
      { flush: "post" }
    ), m(
      () => e.value,
      () => {
        if (e.value !== void 0) {
          const t = o.options.value.get(e.value);
          o.selectedOption.value = { value: e.value, label: t };
        } else
          o.selectedOption.value = void 0;
      }
    ), (t, q) => (f(), b(R, {
      popperHideTriggers: ["click"],
      placement: "bottom-start",
      class: "select",
      stretched: e.stretched
    }, {
      popper: l(() => [
        n("div", {
          style: B(w.value)
        }, [
          h(t.$slots, "default", {}, void 0, !0)
        ], 4)
      ]),
      default: l(() => {
        var a, c;
        return [
          v(j, {
            ref_key: "pickerRef",
            ref: s,
            size: e.size,
            stretched: e.stretched
          }, {
            icon: l(() => [
              v(r(I))
            ]),
            default: l(() => {
              var d, p, u;
              return [
                C(O(((u = (p = (d = r(o)) == null ? void 0 : d.selectedOption) == null ? void 0 : p.value) == null ? void 0 : u.label) || e.label) + " ", 1)
              ];
            }),
            _: 1
          }, 8, ["size", "stretched"]),
          n("input", {
            hidden: "",
            name: e.name,
            value: e.value || ((c = (a = r(o).selectedOption) == null ? void 0 : a.value) == null ? void 0 : c.value)
          }, null, 8, M),
          n("div", P, [
            h(t.$slots, "default", {}, void 0, !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["stretched"]));
  }
}), Q = /* @__PURE__ */ D(W, [["__scopeId", "data-v-1581e0c9"]]);
export {
  Q as default
};
