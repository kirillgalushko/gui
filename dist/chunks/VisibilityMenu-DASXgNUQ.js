import { openBlock as n, createElementBlock as b, createElementVNode as g, defineComponent as k, mergeModels as f, useModel as x, computed as y, createBlock as u, withCtx as a, createVNode as m, Fragment as M, renderList as B, renderSlot as p, resolveDynamicComponent as $, unref as v, createCommentVNode as z, toDisplayString as h, createTextVNode as C } from "vue";
import { i as D } from "./IconAccessibleFilled-DFPdopZN.js";
import N from "./Button-DBIwBw8Q.js";
import W from "./Dropdown-BtaoLYy0.js";
import { _ as L } from "./BaseMenuCheckboxItem.vue_vue_type_script_setup_true_lang-B600fANS.js";
import { _ as S } from "./DropdownGroup.vue_vue_type_script_setup_true_lang-C4hbocte.js";
import { A as E } from "./index-BQgYVE5h.js";
const F = {}, T = {
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
function U(s, i) {
  return n(), b("svg", T, i[0] || (i[0] = [
    g("path", { d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9-1v18" }, null, -1)
  ]));
}
const j = /* @__PURE__ */ D(F, [["render", U]]), P = /* @__PURE__ */ k({
  __name: "VisibilityMenu",
  props: /* @__PURE__ */ f({
    items: {},
    label: { default: "Колонки" },
    menuLabel: { default: "Показывать колонки" },
    minVisible: { default: 1 },
    disabled: { type: Boolean },
    contentWidth: { default: "auto" },
    contentMaxWidth: {},
    size: { default: "medium" },
    mode: { default: "outline" }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ f(["toggle"], ["update:modelValue"]),
  setup(s, { emit: i }) {
    const t = s, o = x(s, "modelValue"), w = i, V = y(() => new Set(o.value)), d = (e) => V.value.has(e), c = (e) => !!t.disabled || !!e.disabled || d(e.value) && o.value.length <= t.minVisible, _ = (e) => {
      if (c(e))
        return;
      const r = !d(e.value);
      o.value = r ? [...o.value, e.value] : o.value.filter((l) => l !== e.value), w("toggle", e.value, r);
    };
    return (e, r) => (n(), u(W, {
      "content-width": t.contentWidth,
      "content-max-width": t.contentMaxWidth
    }, {
      popper: a(() => [
        m(S, {
          "aria-label": t.menuLabel
        }, {
          default: a(() => [
            (n(!0), b(M, null, B(t.items, (l) => (n(), u(L, {
              key: l.value,
              disabled: c(l),
              "model-value": d(l.value),
              "onUpdate:modelValue": (A) => _(l)
            }, {
              default: a(() => [
                p(e.$slots, "item", {
                  item: l,
                  visible: d(l.value)
                }, () => [
                  l.icon ? (n(), u($(v(E)(l.icon)), { key: 0 })) : z("", !0),
                  g("span", null, h(l.label), 1)
                ])
              ]),
              _: 2
            }, 1032, ["disabled", "model-value", "onUpdate:modelValue"]))), 128))
          ]),
          _: 3
        }, 8, ["aria-label"])
      ]),
      default: a(() => [
        p(e.$slots, "trigger", {
          label: t.label
        }, () => [
          m(N, {
            size: t.size,
            mode: t.mode,
            disabled: t.disabled
          }, {
            default: a(() => [
              m(v(j)),
              C(" " + h(t.label), 1)
            ]),
            _: 1
          }, 8, ["size", "mode", "disabled"])
        ])
      ]),
      _: 3
    }, 8, ["content-width", "content-max-width"]));
  }
});
export {
  P as default
};
