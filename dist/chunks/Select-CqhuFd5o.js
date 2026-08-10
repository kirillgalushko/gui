import { defineComponent as S, provide as k, ref as w, computed as y, watch as u, openBlock as z, createBlock as b, withCtx as l, createElementVNode as s, normalizeStyle as x, renderSlot as m, createVNode as v, unref as r, createTextVNode as O, toDisplayString as C } from "vue";
import R from "./Dropdown-BtaoLYy0.js";
import { d as B } from "./IconChevronDownOutline-Clx8hRBy.js";
import { h as N, i as V } from "./index-BQgYVE5h.js";
import $ from "./Picker-oSyTHuoR.js";
import { _ as D } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Select-CXBtol3-.css';const T = ["name", "value"], E = { class: "hidden-options" }, H = /* @__PURE__ */ S({
  __name: "Select",
  props: {
    stretched: { type: Boolean },
    label: {},
    size: { default: "large" },
    mode: { default: "default" },
    value: {},
    name: {},
    onChange: {}
  },
  setup(f) {
    const e = f, o = N(e.value, e.onChange);
    k("select", o);
    const a = w(), { elementRef: h, width: _ } = V(), g = y(() => ({ minWidth: `${Math.max((_.value ?? 0) - 8, 0)}px` }));
    return u(
      a,
      () => {
        var t;
        h.value = ((t = a.value) == null ? void 0 : t.elementRef) ?? null;
      },
      { flush: "post" }
    ), u(
      () => e.value,
      () => {
        if (e.value !== void 0) {
          const t = o.options.value.get(e.value);
          o.selectedOption.value = { value: e.value, label: t };
        } else
          o.selectedOption.value = void 0;
      }
    ), (t, I) => (z(), b(R, {
      popperHideTriggers: ["click"],
      placement: "bottom-start",
      class: "select",
      stretched: e.stretched
    }, {
      popper: l(() => [
        s("div", {
          style: x(g.value)
        }, [
          m(t.$slots, "default", {}, void 0, !0)
        ], 4)
      ]),
      default: l(() => {
        var n, d;
        return [
          v($, {
            ref_key: "pickerRef",
            ref: a,
            size: e.size,
            mode: e.mode,
            stretched: e.stretched
          }, {
            icon: l(() => [
              v(r(B))
            ]),
            default: l(() => {
              var i, c, p;
              return [
                O(C(((p = (c = (i = r(o)) == null ? void 0 : i.selectedOption) == null ? void 0 : c.value) == null ? void 0 : p.label) || e.label) + " ", 1)
              ];
            }),
            _: 1
          }, 8, ["size", "mode", "stretched"]),
          s("input", {
            hidden: "",
            name: e.name,
            value: e.value || ((d = (n = r(o).selectedOption) == null ? void 0 : n.value) == null ? void 0 : d.value)
          }, null, 8, T),
          s("div", E, [
            m(t.$slots, "default", {}, void 0, !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["stretched"]));
  }
}), F = /* @__PURE__ */ D(H, [["__scopeId", "data-v-284e0e98"]]);
export {
  F as default
};
