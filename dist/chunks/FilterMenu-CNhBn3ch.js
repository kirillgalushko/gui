import { openBlock as o, createElementBlock as c, createElementVNode as p, defineComponent as Q, ref as _, reactive as U, computed as E, createBlock as i, withCtx as a, createVNode as s, unref as u, createCommentVNode as m, Fragment as g, renderList as O, renderSlot as b, resolveDynamicComponent as $, toDisplayString as h, createTextVNode as B, nextTick as W } from "vue";
import { d as j } from "./IconCheckOutline-BoPzWPqG.js";
import { i as N } from "./IconAccessibleFilled-DFPdopZN.js";
import T from "./Button-DBIwBw8Q.js";
import K from "./Dropdown-BtaoLYy0.js";
import { _ as P } from "./DropdownGroup.vue_vue_type_script_setup_true_lang-C4hbocte.js";
import { B as f } from "./BaseMenuItem-BgZg369U.js";
import q from "./DropdownSub-B8KwKIn0.js";
import { _ as G } from "./DropdownSubTrigger.vue_vue_type_script_setup_true_lang-C-2A8LRj.js";
import A from "./Input-BLQK2c0I.js";
import { E as H, A as V, F as J } from "./index-BQgYVE5h.js";
import { _ as R } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FilterMenu-0zRLzc-R.css';const X = {}, Y = {
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
function Z(y, d) {
  return o(), c("svg", Y, d[0] || (d[0] = [
    p("path", { d: "m12 20-3 1v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4h16v2.172a2 2 0 0 1-.586 1.414L15 12v3m1 4h6m-3-3v6" }, null, -1)
  ]));
}
const ee = /* @__PURE__ */ N(X, [["render", Z]]), te = {}, le = {
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
function oe(y, d) {
  return o(), c("svg", le, d[0] || (d[0] = [
    p("path", { d: "M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6" }, null, -1)
  ]));
}
const M = /* @__PURE__ */ N(te, [["render", oe]]), ae = {
  key: 0,
  class: "filter-menu-search"
}, ne = {
  key: 0,
  class: "filter-menu-search"
}, re = /* @__PURE__ */ Q({
  __name: "FilterMenu",
  props: {
    fields: {},
    label: { default: "Добавить фильтр" },
    searchPlaceholder: { default: "Найти поле…" },
    optionSearchPlaceholder: { default: "Найти значение…" },
    emptyLabel: { default: "Ничего не найдено" },
    searchable: { type: Boolean, default: !0 },
    closeOnSelect: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    contentWidth: { default: "extra-small" },
    size: { default: "medium" },
    mode: { default: "outline" }
  },
  emits: ["select"],
  setup(y, { emit: d }) {
    const t = y, z = d, C = _(0), k = _(!1), v = _(""), w = U({}), S = E(
      () => H(t.fields, v.value)
    ), F = (l) => {
      var n;
      return !!((n = l.options) != null && n.length);
    }, x = (l) => J(
      l.options ?? [],
      w[l.key] ?? ""
    ), L = async () => {
      t.closeOnSelect && (await W(), k.value = !1, C.value += 1);
    }, D = (l) => {
      l.disabled || F(l) || (z("select", { field: l }), L());
    }, I = (l, n) => {
      l.disabled || n.disabled || (z("select", { field: l, option: n }), L());
    };
    return (l, n) => (o(), i(K, {
      key: C.value,
      shown: k.value,
      "onUpdate:shown": n[1] || (n[1] = (e) => k.value = e),
      "content-width": t.contentWidth,
      "content-padding": "none"
    }, {
      popper: a(() => [
        t.searchable ? (o(), c("div", ae, [
          s(A, {
            modelValue: v.value,
            "onUpdate:modelValue": n[0] || (n[0] = (e) => v.value = e),
            size: t.size,
            placeholder: t.searchPlaceholder,
            "aria-label": t.searchPlaceholder
          }, {
            leftAdornment: a(() => [
              s(u(M), { "aria-hidden": "true" })
            ]),
            _: 1
          }, 8, ["modelValue", "size", "placeholder", "aria-label"])
        ])) : m("", !0),
        s(P, {
          class: "filter-menu-list",
          "aria-label": "Поля фильтра"
        }, {
          default: a(() => [
            S.value.length ? (o(!0), c(g, { key: 0 }, O(S.value, (e) => (o(), c(g, {
              key: e.key
            }, [
              F(e) ? (o(), i(q, {
                key: 0,
                "content-width": t.contentWidth,
                "content-padding": "none"
              }, {
                popper: a(() => [
                  e.searchable ? (o(), c("div", ne, [
                    s(A, {
                      modelValue: w[e.key],
                      "onUpdate:modelValue": (r) => w[e.key] = r,
                      size: t.size,
                      placeholder: e.placeholder ?? t.optionSearchPlaceholder,
                      "aria-label": e.placeholder ?? t.optionSearchPlaceholder
                    }, {
                      leftAdornment: a(() => [
                        s(u(M), { "aria-hidden": "true" })
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "size", "placeholder", "aria-label"])
                  ])) : m("", !0),
                  s(P, {
                    class: "filter-menu-list",
                    "aria-label": e.label
                  }, {
                    default: a(() => [
                      (o(!0), c(g, null, O(x(e), (r) => (o(), i(f, {
                        key: String(r.value),
                        disabled: r.disabled,
                        onClick: (se) => I(e, r)
                      }, {
                        default: a(() => [
                          b(l.$slots, "option", {
                            field: e,
                            option: r
                          }, () => [
                            r.icon ? (o(), i($(u(V)(r.icon)), { key: 0 })) : m("", !0),
                            p("span", null, h(r.label), 1)
                          ], !0)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]))), 128)),
                      x(e).length === 0 ? (o(), i(f, {
                        key: 0,
                        disabled: ""
                      }, {
                        default: a(() => [
                          B(h(t.emptyLabel), 1)
                        ]),
                        _: 1
                      })) : m("", !0)
                    ]),
                    _: 2
                  }, 1032, ["aria-label"])
                ]),
                default: a(() => [
                  s(G, {
                    disabled: e.disabled
                  }, {
                    default: a(() => [
                      b(l.$slots, "field", { field: e }, () => [
                        e.icon ? (o(), i($(u(V)(e.icon)), { key: 0 })) : m("", !0),
                        p("span", null, h(e.label), 1)
                      ], !0)
                    ]),
                    _: 2
                  }, 1032, ["disabled"])
                ]),
                _: 2
              }, 1032, ["content-width"])) : (o(), i(f, {
                key: 1,
                disabled: e.disabled,
                onClick: (r) => D(e)
              }, {
                default: a(() => [
                  b(l.$slots, "field", { field: e }, () => [
                    e.icon ? (o(), i($(u(V)(e.icon)), { key: 0 })) : m("", !0),
                    p("span", null, h(e.label), 1)
                  ], !0)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))
            ], 64))), 128)) : (o(), i(f, {
              key: 1,
              disabled: ""
            }, {
              default: a(() => [
                s(u(j), { "aria-hidden": "true" }),
                B(" " + h(t.emptyLabel), 1)
              ]),
              _: 1
            }))
          ]),
          _: 3
        })
      ]),
      default: a(() => [
        b(l.$slots, "trigger", {
          label: t.label
        }, () => [
          s(T, {
            size: t.size,
            mode: t.mode,
            disabled: t.disabled
          }, {
            default: a(() => [
              s(u(ee)),
              B(" " + h(t.label), 1)
            ]),
            _: 1
          }, 8, ["size", "mode", "disabled"])
        ], !0)
      ]),
      _: 3
    }, 8, ["shown", "content-width"]));
  }
}), we = /* @__PURE__ */ R(re, [["__scopeId", "data-v-36d12a30"]]);
export {
  we as default
};
