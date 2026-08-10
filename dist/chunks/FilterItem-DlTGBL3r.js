import { defineComponent as U, mergeModels as L, useModel as W, computed as f, openBlock as t, createBlock as s, withCtx as d, createElementVNode as b, renderSlot as _, resolveDynamicComponent as z, unref as c, createCommentVNode as o, createTextVNode as V, toDisplayString as n, createVNode as r, createElementBlock as v, Fragment as h, renderList as S } from "vue";
import { d as A } from "./IconCheckOutline-BoPzWPqG.js";
import { d as G } from "./IconXOutline-COEdos3u.js";
import y from "./Button-DBIwBw8Q.js";
import T from "./ButtonGroup-CX3_2NXK.js";
import { _ as j } from "./DatePicker.vue_vue_type_script_setup_true_lang-7yN-y9xp.js";
import D from "./Dropdown-BtaoLYy0.js";
import { _ as H } from "./BaseMenuCheckboxItem.vue_vue_type_script_setup_true_lang-B600fANS.js";
import { _ as q } from "./DropdownGroup.vue_vue_type_script_setup_true_lang-C4hbocte.js";
import { B as J } from "./BaseMenuItem-BgZg369U.js";
import { _ as K } from "./BaseMenuRadioGroup.vue_vue_type_script_setup_true_lang-CDXVydvF.js";
import { _ as P } from "./BaseMenuRadioItem.vue_vue_type_script_setup_true_lang-sMLhLPFk.js";
import Q from "./Input-BLQK2c0I.js";
import { x as R, y as X, A as $, t as Y, C as Z } from "./index-BQgYVE5h.js";
import { _ as ee } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FilterItem-CZmRv8y4.css';const le = {
  key: 1,
  class: "filter-item-input"
}, ae = {
  key: 2,
  class: "filter-item-input"
}, te = /* @__PURE__ */ U({
  __name: "FilterItem",
  props: /* @__PURE__ */ L({
    field: {},
    disabled: { type: Boolean },
    selectedLabel: { default: "выбрано" },
    removeLabel: { default: "Удалить фильтр" },
    contentWidth: { default: "extra-small" },
    layout: { default: "full" },
    size: { default: "medium" },
    mode: { default: "outline" }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ L(["remove"], ["update:modelValue"]),
  setup(g, { emit: x }) {
    const e = g, i = W(g, "modelValue"), E = x, k = f(() => R(e.field)), C = f(() => k.value.find(
      (l) => l.value === i.value.operator
    ) ?? k.value[0]), F = f(
      () => X(i.value, e.field, e.selectedLabel)
    ), B = f({
      get: () => String(i.value.values[0] ?? ""),
      set: (l) => {
        m({ values: l ? [l] : [] });
      }
    }), M = f(() => {
      const l = i.value.values[0];
      return l instanceof Date ? l : null;
    }), m = (l) => {
      e.disabled || (i.value = { ...i.value, ...l });
    }, N = (l) => {
      m({ operator: l.value });
    }, w = (l) => {
      if (l.disabled || e.disabled)
        return;
      const u = e.field.type === "multiselect" ? Y(
        i.value.values,
        l.value,
        e.field.isValueEqual
      ) : [l.value];
      m({ values: u });
    }, O = ({ value: l }) => {
      m({ values: l === null ? [] : [l] });
    }, p = (l) => Z(
      i.value.values,
      l.value,
      e.field.isValueEqual
    );
    return (l, u) => (t(), s(T, {
      "aria-label": e.field.label
    }, {
      default: d(() => [
        e.layout === "full" ? (t(), s(y, {
          key: 0,
          "as-child": "",
          size: e.size,
          mode: e.mode
        }, {
          default: d(() => [
            b("span", null, [
              _(l.$slots, "field", {
                field: e.field
              }, () => [
                e.field.icon ? (t(), s(z(c($)(e.field.icon)), { key: 0 })) : o("", !0),
                V(" " + n(e.field.label), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["size", "mode"])) : o("", !0),
        e.layout === "full" ? (t(), s(D, {
          key: 1,
          "content-width": e.contentWidth
        }, {
          popper: d(() => [
            r(q, {
              "aria-label": `Оператор: ${e.field.label}`
            }, {
              default: d(() => [
                r(K, {
                  "model-value": i.value.operator
                }, {
                  default: d(() => [
                    (t(!0), v(h, null, S(k.value, (a) => (t(), s(P, {
                      key: a.value,
                      value: a.value,
                      onClick: (I) => N(a)
                    }, {
                      default: d(() => [
                        b("span", null, n(a.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value", "onClick"]))), 128))
                  ]),
                  _: 1
                }, 8, ["model-value"])
              ]),
              _: 1
            }, 8, ["aria-label"])
          ]),
          default: d(() => [
            r(y, {
              size: e.size,
              mode: e.mode,
              disabled: e.disabled
            }, {
              default: d(() => [
                _(l.$slots, "operator", {
                  operator: C.value,
                  filter: i.value
                }, () => {
                  var a;
                  return [
                    V(n((a = C.value) == null ? void 0 : a.label), 1)
                  ];
                }, !0)
              ]),
              _: 3
            }, 8, ["size", "mode", "disabled"])
          ]),
          _: 3
        }, 8, ["content-width"])) : o("", !0),
        r(D, {
          "content-width": e.contentWidth,
          "content-padding": "none"
        }, {
          popper: d(() => [
            l.$slots["value-menu"] ? _(l.$slots, "value-menu", {
              key: 0,
              filter: i.value,
              field: e.field,
              updateFilter: m
            }, void 0, !0) : e.field.type === "date" ? (t(), v("div", le, [
              r(j, {
                value: M.value,
                size: e.size,
                placeholder: e.field.placeholder,
                stretched: "",
                "on-change": O
              }, null, 8, ["value", "size", "placeholder"])
            ])) : e.field.type === "text" ? (t(), v("div", ae, [
              r(Q, {
                modelValue: B.value,
                "onUpdate:modelValue": u[0] || (u[0] = (a) => B.value = a),
                size: e.size,
                placeholder: e.field.placeholder,
                "aria-label": e.field.label
              }, null, 8, ["modelValue", "size", "placeholder", "aria-label"])
            ])) : (t(), s(q, {
              key: 3,
              class: "filter-item-list",
              "aria-label": `Значение: ${e.field.label}`
            }, {
              default: d(() => [
                (t(!0), v(h, null, S(e.field.options ?? [], (a) => (t(), v(h, {
                  key: String(a.value)
                }, [
                  e.field.type === "multiselect" ? (t(), s(H, {
                    key: 0,
                    disabled: a.disabled,
                    "model-value": p(a),
                    "onUpdate:modelValue": (I) => w(a)
                  }, {
                    default: d(() => [
                      a.icon ? (t(), s(z(c($)(a.icon)), { key: 0 })) : o("", !0),
                      b("span", null, n(a.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "model-value", "onUpdate:modelValue"])) : (t(), s(J, {
                    key: 1,
                    disabled: a.disabled,
                    selected: p(a),
                    "aria-pressed": p(a),
                    onClick: (I) => w(a)
                  }, {
                    default: d(() => [
                      a.icon ? (t(), s(z(c($)(a.icon)), { key: 0 })) : o("", !0),
                      b("span", null, n(a.label), 1),
                      p(a) ? (t(), s(c(A), {
                        key: 1,
                        class: "filter-item-check",
                        "aria-hidden": "true"
                      })) : o("", !0)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "selected", "aria-pressed", "onClick"]))
                ], 64))), 128))
              ]),
              _: 1
            }, 8, ["aria-label"]))
          ]),
          default: d(() => [
            r(y, {
              size: e.size,
              mode: e.mode,
              disabled: e.disabled
            }, {
              default: d(() => [
                _(l.$slots, "value", {
                  filter: i.value,
                  field: e.field,
                  label: F.value
                }, () => [
                  V(n(F.value), 1)
                ], !0)
              ]),
              _: 3
            }, 8, ["size", "mode", "disabled"])
          ]),
          _: 3
        }, 8, ["content-width"]),
        r(y, {
          squared: "",
          size: e.size,
          mode: e.mode,
          disabled: e.disabled,
          "aria-label": e.removeLabel,
          onClick: u[1] || (u[1] = (a) => E("remove", i.value))
        }, {
          default: d(() => [
            r(c(G))
          ]),
          _: 1
        }, 8, ["size", "mode", "disabled", "aria-label"])
      ]),
      _: 3
    }, 8, ["aria-label"]));
  }
}), ke = /* @__PURE__ */ ee(te, [["__scopeId", "data-v-a411fcef"]]);
export {
  ke as default
};
