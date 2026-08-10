import { defineComponent as I, mergeModels as F, useModel as S, computed as z, watch as D, openBlock as n, createBlock as m, withCtx as r, createSlots as c, renderSlot as i, normalizeProps as p, guardReactiveProps as y, createCommentVNode as L, createElementBlock as P, Fragment as E, renderList as R, mergeProps as f } from "vue";
import q from "./Stack-CgwImR5w.js";
import { _ as A } from "./FilterClear.vue_vue_type_script_setup_true_lang-BhoZ0fR-.js";
import K from "./FilterItem-DlTGBL3r.js";
import N from "./FilterMenu-CNhBn3ch.js";
import { r as U, t as j, w as G } from "./index-BQgYVE5h.js";
const X = /* @__PURE__ */ I({
  __name: "Filters",
  props: /* @__PURE__ */ F({
    fields: {},
    addLabel: { default: "Добавить фильтр" },
    clearLabel: { default: "Сбросить" },
    selectedLabel: { default: "выбрано" },
    showClear: { type: Boolean, default: !0 },
    showMenu: { type: Boolean, default: !0 },
    showItems: { type: Boolean, default: !0 },
    allowDuplicateFields: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    createId: {},
    itemLayout: { default: "full" },
    size: { default: "medium" },
    mode: { default: "outline" }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ F(["add", "remove", "clear"], ["update:modelValue"]),
  setup(b, { emit: B }) {
    const l = b, s = S(b, "modelValue"), v = B, g = z(
      () => new Map(l.fields.map((e) => [e.key, e]))
    ), k = z(() => s.value.flatMap((e) => {
      const a = g.value.get(e.field);
      return a ? [{ filter: e, field: a }] : [];
    }));
    D(
      () => [s.value, l.fields, l.allowDuplicateFields],
      ([e, a, o]) => {
        if (o) return;
        const d = U(e, a);
        (d.length !== e.length || d.some(
          (t, u) => {
            var h, w;
            return t.operator !== ((h = e[u]) == null ? void 0 : h.operator) || t.values.length !== ((w = e[u]) == null ? void 0 : w.values.length);
          }
        )) && (s.value = d);
      },
      { immediate: !0 }
    );
    const M = ({ field: e, option: a }) => {
      var t;
      const o = s.value.find(
        (u) => u.field === e.key
      );
      if (o && !l.allowDuplicateFields) {
        if (!a)
          return;
        const u = e.type === "multiselect" ? j(
          o.values,
          a.value,
          e.isValueEqual
        ) : [a.value];
        $({ ...o, values: u });
        return;
      }
      const d = G(e, a, (t = l.createId) == null ? void 0 : t.call(l));
      s.value = [...s.value, d], v("add", d);
    }, $ = (e) => {
      s.value = s.value.map(
        (a) => a.id === e.id ? e : a
      );
    }, V = (e) => {
      s.value = s.value.filter(
        (a) => a.id !== e.id
      ), v("remove", e);
    }, C = () => {
      s.value = s.value.filter(
        (e) => !g.value.has(e.field)
      ), v("clear");
    };
    return (e, a) => (n(), m(q, {
      direction: "row",
      gap: 2,
      wrap: "",
      "align-items": "center"
    }, {
      default: r(() => [
        l.showMenu ? (n(), m(N, {
          key: 0,
          fields: l.fields,
          label: l.addLabel,
          size: l.size,
          mode: l.mode,
          disabled: l.disabled,
          onSelect: M
        }, c({ _: 2 }, [
          e.$slots.trigger ? {
            name: "trigger",
            fn: r((o) => [
              i(e.$slots, "trigger", p(y(o)))
            ]),
            key: "0"
          } : void 0,
          e.$slots.field ? {
            name: "field",
            fn: r((o) => [
              i(e.$slots, "field", p(y(o)))
            ]),
            key: "1"
          } : void 0,
          e.$slots.option ? {
            name: "option",
            fn: r((o) => [
              i(e.$slots, "option", p(y(o)))
            ]),
            key: "2"
          } : void 0
        ]), 1032, ["fields", "label", "size", "mode", "disabled"])) : L("", !0),
        (n(!0), P(E, null, R(l.showItems ? k.value : [], ({ filter: o, field: d }) => (n(), m(K, {
          key: o.id,
          "model-value": o,
          field: d,
          size: l.size,
          mode: l.mode,
          "selected-label": l.selectedLabel,
          layout: d.itemLayout ?? l.itemLayout,
          disabled: l.disabled,
          "onUpdate:modelValue": $,
          onRemove: V
        }, c({ _: 2 }, [
          e.$slots["filter-field"] ? {
            name: "field",
            fn: r((t) => [
              i(e.$slots, "filter-field", f({ ref_for: !0 }, t))
            ]),
            key: "0"
          } : void 0,
          e.$slots.operator ? {
            name: "operator",
            fn: r((t) => [
              i(e.$slots, "operator", f({ ref_for: !0 }, t))
            ]),
            key: "1"
          } : void 0,
          e.$slots.value ? {
            name: "value",
            fn: r((t) => [
              i(e.$slots, "value", f({ ref_for: !0 }, t))
            ]),
            key: "2"
          } : void 0,
          e.$slots["value-menu"] ? {
            name: "value-menu",
            fn: r((t) => [
              i(e.$slots, "value-menu", f({ ref_for: !0 }, t))
            ]),
            key: "3"
          } : void 0
        ]), 1032, ["model-value", "field", "size", "mode", "selected-label", "layout", "disabled"]))), 128)),
        l.showItems && l.showClear && k.value.length > 0 ? (n(), m(A, {
          key: 1,
          label: l.clearLabel,
          size: l.size,
          mode: l.mode,
          disabled: l.disabled,
          onClear: C
        }, c({ _: 2 }, [
          e.$slots["clear-icon"] ? {
            name: "icon",
            fn: r(() => [
              i(e.$slots, "clear-icon")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label", "size", "mode", "disabled"])) : L("", !0)
      ]),
      _: 3
    }));
  }
});
export {
  X as default
};
